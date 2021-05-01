todo:
1. basic shell execution [x]
2. execute .sh that runs ffmpeg [x]
3. node-persist
4. list endpoint
5. start endpoint
6. stop endpoint


Workflow
List
1. Client request /list
2. Server returns [{alias:String, uri:String},...]

Start
1. Client request /start with {alias:String, rtsp:String}
2. If rtsp is not provided, server will try to find existing stream data object with that variable and running==false
3. Server starts stream, on stream ready, store stream data object {alias:String, process:Process, uri:String} in dbase
4. Server returns OK status with data {alias:String, uri:String}

Stop
1. Client request /stop with {alias:String, remove:Boolean}
2. Server locate the stream data object with the same alias 
3. Server run the kill method of the process property of the stream data object
4. if 
5. Server returns OK status with data {alias:String}
   