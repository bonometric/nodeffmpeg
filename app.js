const chokidar = require('chokidar');
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

async function startStream(alias, rtspUri) {

  return new Promise((resolveTop, reject) => {
    //find stream if exists
    var existingStream;
    for (let i = 0; i < streams.length; i++) {
      const stream = streams[i];
      if (stream.alias == alias) {
        existingStream = stream;
        rtspUri = stream.rtspUri;
        break;
      }
    }
    var readyPromises = [];
    var streamUri;
    spawn('mkdir', ["public/streams/"]);

    //clear and set file watch
    // aliasArr.forEach(alias => {
    spawn('rm', ["-rf", "public/streams/" + alias]);
    spawn('mkdir', ["public/streams/" + alias]);
    // console.log('x')

    //watch
    console.log('creating file watcher for ' + alias)

    var c = chokidar.watch('public/streams/' + alias + '/stream0.ts', {
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100
      },
    }).on('add', (event) => {

      console.log('removing file watcher for ' + alias)
      c.unwatch('public/streams/' + alias + '/stream0.ts');
      streamUri = 'streams/' + alias + '/stream.M3U8';
      //
      console.log('stream ready!')
      var resultObj = {
        process: proc,
        alias: alias,
        rtspUri: rtspUri,
        streamUri: streamUri,
        running: true
      }
      if (!existingStream) {
        streams.push(resultObj);
      } else {
        existingStream.running = true;
      }
      resolveTop(resultObj);
    });
    // });


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
    videoSourceArguments.push(rtspUri);
    //
    var streamOption = [
      "-map",
      i,
      "-fflags", "flush_packets", "-max_delay", "2",
      "-copyts",
      "-vcodec", "copy",
      "-acodec", "copy",
      "-hls_flags", "delete_segments",
      "-hls_wrap", "100", "-flags", "-global_header",
      "./public/streams/" + alias + "/stream.M3U8"
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

    proc.stderr.on('close', function (data) {
      // console.log(alias, ' closed');
    })

  })

}

function stopStream(alias, remove) {
  spawn('rm', ["-rf", "public/streams/" + alias]);

  var process;
  var index;
  //find stream
  for (let i = 0; i < streams.length; i++) {
    const stream = streams[i];
    if (stream.alias == alias) {
      process = stream.process;
      stream.running = false;
      index = i;
      break;
    }
  }
  if (process) {
    //stop ffmpeg
    process.kill();
    //clear folders

    if (remove) {
      streams.splice(index, 1);
    }

  }

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
  socketServer.clients.forEach((client) => {
    client.send(JSON.stringify(getStrippedStreams()))
  })
});

app.post('/stop', async (request, response) => {
  //params for body: alias, rtsp
  stopStream(request.body.alias, request.body.remove)
  socketServer.clients.forEach((client) => {
    client.send(JSON.stringify(getStrippedStreams()))
  })

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
  socketServer.clients.forEach((client) => {
    client.send(JSON.stringify(getStrippedStreams()))
  })
  socketClient.on('close', (socketClient) => {
    console.log('closed');
    console.log('Number of clients: ', socketServer.clients.size);
  });
});

module.exports = app;
