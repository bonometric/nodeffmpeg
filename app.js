const storage = require('node-persist');
const fs = require('fs')

const bodyParser = require("body-parser");
const ws = require('ws');

var createError = require('http-errors');
const cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var spawn = require('child_process').spawn;

var app = express();
app.use(cors());
app.options('*', cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var router = express.Router();

var streams = [];
var persistedStreams = [];

function createStreamObject(data) {
  return {
    alias: data.alias,
    folderName: data.alias.replace(/[/\\?'`%*:|"<> ]/g, '-'),
    process: data.process || null,
    rtspUri: data.rtspUri,
    streamUri: data.streamUri || null,
    running: data.running || null,
    created: Date.now(),
    modified: Date.now(),
    stopping: false,
    recoverTryCount: 0
  }
}

async function broadcastStreamUpdates() {
  socketServer.clients.forEach((client) => {
    var payload = {
      type: "stream-update",
      data: getStrippedStreams()
    }
    client.send(JSON.stringify(payload))
  })
}

async function startStream(alias, rtspUri) {

  return new Promise((resolveTop, reject) => {
    //find stream if exists
    var streamUri;
    var streamContext;
    var existingStream;
    for (let i = 0; i < streams.length; i++) {
      const stream = streams[i];
      if (stream.alias == alias) {
        existingStream = stream;
        existingStream.running = null;
        rtspUri = stream.rtspUri;
        //broadcast existing stream is starting
        streamContext = existingStream;
        broadcastStreamUpdates();
        break;
      }
    }
    streamContext = existingStream || createStreamObject({ alias: alias, rtspUri: rtspUri });
    var readyPromises = [];
    spawn('mkdir', ["public/streams/"]);

    //clear and set file watch
    spawn('rm', ["-rf", "public/streams/" + streamContext.folderName]);
    spawn('mkdir', ["public/streams/" + streamContext.folderName]);

    //watch
    console.log('creating file watcher for ' + streamContext.folderName)
    var targetStreamUri = 'streams/' + streamContext.folderName + '/stream.M3U8';

    var watchInterval = setInterval(() => {


      fs.access("public/streams/" + streamContext.folderName + '/stream.M3U8', fs.F_OK, (err) => {
        if (err) {
          // console.error(err)
          return
        }

        //file exists
        streamContext.streamUri = targetStreamUri;
        streamContext.process = proc;
        streamContext.running = true;
        //
        console.log('stream ready!')

        if (!existingStream) {
          //add to list
          streams.push(streamContext);
        } else {
          //update modified time
          streamContext.modified = Date.now();
        }

        storage.setItem('persistedStreams', streams);
        resolveTop(streamContext);
        streamContext.stopping = false;
        streamContext.recoverTryCount = 0;
        clearInterval(watchInterval);
      })

    }, 300);


    //ffmpeg
    var cmd = 'ffmpeg';
    var args = [
      "-fflags", "nobuffer",
    ]
    var videoSourceArguments = [];
    var streamOptions = [];
    //build per stream arguments
    // for (let i = 0; i < uriArr.length; i++) {
    // const uri = uriArr[i];
    // const alias = aliasArr[i]
    var i = 0;
    videoSourceArguments.push('-i');
    videoSourceArguments.push(streamContext.rtspUri);
    //
    var streamOption = [
      "-map",
      i,
      // "-g 15",
      "-hls_allow_cache", "0",//don't cache      
      "-hls_delete_threshold", "3",
      "-hls_time", "1",//eachs segment is 1s
      "-hls_flags", "delete_segments+split_by_time",      //delete old segment, 
      "-hls_list_size", "5", //segments to keep
      "-hls_segment_type", "mpegts", //segment format
      "-vcodec", "copy",//copy don't re-encode
      "-acodec", "copy",//copy don't re-encode
      "./public/streams/" + streamContext.folderName + "/stream.M3U8"
    ];
    streamOptions = [...streamOptions, ...streamOption];
    // }
    //now merge into one argument array
    args = [...args, ...videoSourceArguments, ...streamOptions];
    // console.log(args)
    //spawn the process
    var proc = spawn(cmd, args);
    //output
    proc.stdout.setEncoding("utf8")
    proc.stdout.on('data', function (data) {
      // console.log(data);
    });

    proc.stderr.setEncoding("utf8")
    proc.stderr.on('data', function (data) {
      // console.log(data);      
    })

    proc.stderr.on('close', (data) => {
      //mark data
      streamContext.running = false;
      //cleanup
      spawn('rm', ["-rf", streamContext.streamUri]);
      broadcastStreamUpdates();
      //try to recover?
      if (false) {
        if (streamContext.stopping) {
          streamContext.stopping = false
        } else {
          //check against max retries
          if (streamContext.recoverTryCount < 3) {
            streamContext.recoverTryCount++;
            //wait  before recovering
            setTimeout(() => {
              console.log('auto recovering, attempt ', streamContext.recoverTryCount);
              startStream(streamContext.alias).then(() => {
                broadcastStreamUpdates();
              })
            }, 500)
          }
        }
      }
    })

  })

}

function stopStream(alias, remove) {

  //find stream
  var existingStream;
  for (let i = 0; i < streams.length; i++) {
    const stream = streams[i];
    if (stream.alias == alias) {
      existingStream = stream;
      break;
    }
  }
  if (existingStream) {
    existingStream.running = false;
    existingStream.stopping = true;
    if (remove) {
      streams.splice(streams.indexOf(existingStream), 1);
      //update local db
      storage.setItem('persistedStreams', streams);
    }
    if (existingStream.process&&existingStream.process.kill) {
      existingStream.process.kill();
    }
  }

  //remove folder
  console.log('removing ', existingStream.folderName)
  spawn('rm', ["-rf", "public/streams/" + existingStream.folderName]);

}

async function start() {
  startStream("front-door", "rtsp://raspi:raspi123@192.168.0.150");
  startStream("garage", "rtsp://raspi:raspi123@192.168.0.139");
  // var result = await startStreams(["rtsp://raspi:raspi123@192.168.0.150"], ["front-door"]);
}

function getStrippedStreams() {
  var streamsClone = JSON.parse(JSON.stringify(streams));
  streamsClone.forEach(stream => {
    delete stream.rtspUri;
    delete stream.process;
  });
  return streamsClone
}

async function loadSavedStream() {
  await storage.init( /* options ... */);
  persistedStreams = await storage.getItem('persistedStreams');
  if (persistedStreams && persistedStreams.length > 0) {
    persistedStreams.forEach(stream => {
      stream.running = false;
      streams.push(stream);
      startStream(stream.alias).then(() => {
        broadcastStreamUpdates();
      });
    })
  }
}

loadSavedStream();


// start();

//endpoints
app.get('/list', (request, response) => {
  //clone and strip rtspUri since it contains the auth. also strip process.
  response.json(getStrippedStreams());
});

app.post('/start', async (request, response) => {
  console.log(request.body)
  //params for body: alias, rtsp
  var stream = await startStream(request.body.alias, request.body.rtspUri);
  var streamClone = JSON.parse(JSON.stringify(stream));
  delete streamClone.rtspUri;
  delete streamClone.process;
  response.json(streamClone);
  //
  broadcastStreamUpdates();

});

app.post('/stop', async (request, response) => {
  //params for body: alias, rtsp
  stopStream(request.body.alias, request.body.remove)
  broadcastStreamUpdates();

  // await startStream(request.body.alias, request.body.rtspUri);
  response.json({});
});

spawn('rm', ["-rf", "public/streams"])


// start();






// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const socketServer = new ws.Server({ port: 3030 });

socketServer.on('connection', (socketClient) => {
  broadcastStreamUpdates();
  socketClient.on('close', (socketClient) => {
    // console.log('closed');
    // console.log('Number of clients: ', socketServer.clients.size);
  });
});

module.exports = app;
