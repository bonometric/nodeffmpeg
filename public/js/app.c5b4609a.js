(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],d=0,l=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&l.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1344ce6c":"6d02ac83","chunk-1bae3367":"eec0976c","chunk-28a4472e":"d750cde3","chunk-7e0fba94":"d23d2d40"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-1344ce6c":1,"chunk-1bae3367":1,"chunk-28a4472e":1,"chunk-7e0fba94":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1344ce6c":"d187072d","chunk-1bae3367":"eb091e15","chunk-28a4472e":"608ae50b","chunk-7e0fba94":"c0358790"}[e]+".css",i=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===i))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===r||d===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],m.parentNode.removeChild(m),n(o)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var m=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"26d3":function(e,t,n){"use strict";n.r(t);n("fb6a");var r=n("7a23"),a=Object(r["P"])("data-v-883127ac");Object(r["x"])("data-v-883127ac");var i=Object(r["k"])("h1",null,"Camera Stream Configurations",-1),o={class:"table-header"},s={class:"stream-count"},c=Object(r["j"])(" Total streams: "),u={class:"primary"},d={class:"row-buttons"},l={class:"content"},m={class:"p-field"},f=Object(r["k"])("label",{for:"alias"},"Stream Alias",-1),p={class:"p-field"},v=Object(r["k"])("label",{for:"feed"},"Rtsp Feed",-1),h={class:"processingStatus"},b=Object(r["j"])(" Processing... "),w={class:"buttons"};Object(r["v"])();var g=a((function(e,t,n,g,S,y){var O=Object(r["C"])("Badge"),k=Object(r["C"])("Button"),j=Object(r["C"])("Column"),P=Object(r["C"])("RadioButton"),R=Object(r["C"])("badge"),x=Object(r["C"])("font-awesome-icon"),C=Object(r["C"])("ProgressSpinner"),D=Object(r["C"])("DataTable"),T=Object(r["C"])("Toast"),E=Object(r["C"])("InputText"),L=Object(r["C"])("Dialog"),_=Object(r["C"])("hls-video"),U=Object(r["C"])("ConfirmPopup");return Object(r["u"])(),Object(r["g"])("div",null,[i,Object(r["k"])("div",o,[Object(r["k"])("div",s,[c,Object(r["k"])(O,{value:S.streams.length},null,8,["value"])]),Object(r["k"])(k,{icon:"pi pi-plus",onClick:t[1]||(t[1]=function(e){return y.addNewStream()}),label:"Add new"})]),Object(r["k"])(D,{value:S.streams},{default:a((function(){return[Object(r["k"])(j,{style:{width:"40px"},field:"alias",header:""},{body:a((function(e){return[Object(r["j"])(Object(r["G"])(e.index+1),1)]})),_:1}),Object(r["k"])(j,{field:"alias",header:"Camera Alias"},{body:a((function(e){return[Object(r["k"])("div",{class:"alias",onClick:function(t){return y.viewStream(e.data)}},Object(r["G"])(e.data.alias.charAt(0).toUpperCase()+e.data.alias.slice(1)),9,["onClick"])]})),_:1}),Object(r["k"])(j,{field:"primary",header:"Primary"},{body:a((function(e){return[Object(r["k"])("div",u,[Object(r["k"])(P,{name:"city",value:e.data.alias,modelValue:S.primaryStream,"onUpdate:modelValue":t[2]||(t[2]=function(e){return S.primaryStream=e})},null,8,["value","modelValue"])])]})),_:1}),Object(r["k"])(j,{field:"streamUri",header:"Stream URI"}),Object(r["k"])(j,{field:"running",header:"Running Status"},{body:a((function(e){return[Object(r["k"])(R,{value:y.getBadgeValueAndSeverity(e.data).value,severity:y.getBadgeValueAndSeverity(e.data).severity},null,8,["value","severity"])]})),_:1}),Object(r["k"])(j,{field:"action",header:"Actions"},{body:a((function(e){return[Object(r["k"])("div",d,[Object(r["k"])(k,{icon:"pi",class:"p-button-secondary p-button-rounded p-button-outlined",disabled:null===e.data.running,onClick:function(t){return y.removeStream(e.data,t)}},{default:a((function(){return[Object(r["k"])(x,{icon:"trash"})]})),_:2},1032,["disabled","onClick"]),Object(r["k"])(k,{icon:"pi",class:"p-button-rounded p-button-secondary p-button-outlined",onClick:function(t){return y.viewStream(e.data)},disabled:null===e.data.running},{default:a((function(){return[null===e.data.running?(Object(r["u"])(),Object(r["g"])(C,{key:0})):(Object(r["u"])(),Object(r["g"])(x,{key:1,icon:"eye"}))]})),_:2},1032,["onClick","disabled"]),e.data.running?(Object(r["u"])(),Object(r["g"])(k,{key:0,icon:"pi",class:"p-button-rounded p-button-secondary p-button-outlined",disabled:null===e.data.running,onClick:function(t){return y.stopStream(e.data)}},{default:a((function(){return[Object(r["k"])(x,{icon:"stop"})]})),_:2},1032,["disabled","onClick"])):Object(r["h"])("",!0)])]})),_:1})]})),_:1},8,["value"]),Object(r["k"])(T,{position:"top-center"}),Object(r["k"])(L,{class:"dialog new-stream",header:"Add New Stream",visible:S.newStreamDisplayModal,"onUpdate:visible":t[6]||(t[6]=function(e){return S.newStreamDisplayModal=e}),modal:!0,closeOnEscape:!0},{footer:a((function(){return[Object(r["M"])(Object(r["k"])("div",h,[Object(r["k"])(C),b],512),[[r["J"],S.newStreamProcessing]]),Object(r["k"])("div",w,[Object(r["k"])(k,{disabled:S.newStreamProcessing||""==S.newStreamData.alias||""==S.newStreamData.rtspUri,label:"Submit",autofocus:"",onClick:t[5]||(t[5]=function(e){return y.createStream()})},null,8,["disabled"])])]})),default:a((function(){return[Object(r["k"])("div",l,[Object(r["k"])("div",m,[f,Object(r["k"])(E,{id:"alias",modelValue:S.newStreamData.alias,"onUpdate:modelValue":t[3]||(t[3]=function(e){return S.newStreamData.alias=e}),placeholder:"Garage, Room, etc."},null,8,["modelValue"])]),Object(r["k"])("div",p,[v,Object(r["k"])(E,{id:"feed",modelValue:S.newStreamData.rtspUri,"onUpdate:modelValue":t[4]||(t[4]=function(e){return S.newStreamData.rtspUri=e}),placeholder:"rtsp://user:pass@192.168.0.150"},null,8,["modelValue"])])])]})),_:1},8,["visible"]),Object(r["k"])(L,{class:"dialog view-stream",visible:S.streamViewerDisplayModal,"onUpdate:visible":t[9]||(t[9]=function(e){return S.streamViewerDisplayModal=e}),modal:!0,closeOnEscape:!0,onHide:t[10]||(t[10]=function(e){return y.refreshStreamList()})},{header:a((function(){return[Object(r["k"])("h3",null,Object(r["G"])(S.activeVideoAlias),1),Object(r["k"])(k,{icon:"pi",class:"p-button-secondary p-button-rounded p-button-outlined",onClick:t[7]||(t[7]=function(e){return y.restartStream()})},{default:a((function(){return[Object(r["k"])(x,{icon:"sync"})]})),_:1})]})),default:a((function(){return[Object(r["k"])(_,{onIosExitFullscreen:t[8]||(t[8]=function(e){return S.streamViewerDisplayModal=!1}),ref:"videoStream","video-src":S.activeVideoSrc,onClick:y.playFullscreen},null,8,["video-src","onClick"])]})),_:1},8,["visible"]),Object(r["k"])(U)])})),S=n("1da1"),y=(n("96cf"),n("d3b7"),n("a002")),O=n.n(y),k={name:"Settings",data:function(){return{getListURI:"http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/list",stopURI:"http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/stop",startURI:"http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/start",streamUri:"http://"+window.destinations.activeDomain+":"+window.destinations.activePort,websocketUri:"ws://"+window.destinations.activeDomain+":"+window.destinations.activeWsPort,newStreamDisplayModal:!1,streamViewerDisplayModal:!1,streams:[],newStreamData:{alias:"foo",rtspUri:"bar"},newStreamProcessing:!1,activeVideoSrc:null,activeVideoAlias:null,listRefreshInterval:-1,primaryStream:null}},methods:{test:function(e){console.log(e)},restartStream:function(){this.$refs.videoStream.restartStream()},getBadgeValueAndSeverity:function(e){return!0===e.running?{value:"Running",severity:"success"}:!1===e.running?{value:"Stopped",severity:"danger"}:null===e.running?{value:"Starting",severity:"warning"}:void 0},refreshStreamList:function(e){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r="http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/getPrimaryStreamAlias",n.next=3,fetch(r);case 3:return a=n.sent,n.next=6,a.json();case 6:if(i=n.sent,t.primaryStream=i.primaryStreamAlias,!e){n.next=12;break}t.streams=e,n.next=15;break;case 12:return n.next=14,t.getStreams();case 14:t.streams=n.sent;case 15:t.streams.sort&&t.streams.sort((function(e,t){return e.created>t.created?1:-1}));case 16:case"end":return n.stop()}}),n)})))()},stopStream:function(e){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,O.a.getItem("token");case 2:return r=n.sent,n.next=5,fetch(t.stopURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alias:e.alias,remove:!1,token:r})});case 5:a=n.sent,a.ok?t.refreshStreamList():t.$toast.add({severity:"error",summary:"Stream stop failed",detail:"Stream for '"+e.alias+"' can't be stopped. Reason: "+a.statusText,life:3e3});case 7:case"end":return n.stop()}}),n)})))()},createStream:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.a.getItem("token");case 2:return n=t.sent,e.newStreamProcessing=!0,t.next=6,fetch(e.startURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rtspUri:e.newStreamData.rtspUri,alias:e.newStreamData.alias,token:n}),credentials:"include"});case 6:r=t.sent,r.ok?e.refreshStreamList():e.$toast.add({severity:"error",summary:"Stream creation failed",detail:"Stream for URI of '"+e.newStreamData.rtspUri+"' can't be created. Reason: "+r.statusText,life:3e3}),e.newStreamDisplayModal=!1,e.newStreamProcessing=!1;case 10:case"end":return t.stop()}}),t)})))()},addNewStream:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.newStreamData.alias="",e.newStreamData.rtspUri="",e.newStreamDisplayModal=!0;case 3:case"end":return t.stop()}}),t)})))()},getStreams:function(){return Object(S["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.HC_getList();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},removeStream:function(e,t){var n=this;return Object(S["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n.$confirm.require({target:t.currentTarget,message:"Stop and remove stream?",accept:function(){a()},reject:function(){}}),a=function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(){var r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.a.getItem("token");case 2:return r=t.sent,a=e.alias,t.next=6,fetch(n.stopURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alias:a,remove:!0,token:r})});case 6:i=t.sent,i.ok?n.refreshStreamList():n.$toast.add({severity:"error",summary:"Stream removal failed",detail:"Stream with alias of '"+a+"' can't be removed. Reason: "+i,life:3e3});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();case 2:case"end":return r.stop()}}),r)})))()},viewStream:function(e){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.running){n.next=8;break}t.streamViewerDisplayModal=!0,t.activeVideoAlias=e.alias,r=t.streamUri+"/"+e.streamUri,t.activeVideoSrc=r,setTimeout((function(){t.playFullscreen(null,document.querySelector("video"))}),100),n.next=12;break;case 8:return n.next=10,fetch(t.startURI,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({alias:e.alias})});case 10:a=n.sent,a.ok&&(e.running=!0,t.viewStream(e));case 12:case"end":return n.stop()}}),n)})))()},connectToWebSocket:function(){var e=this,t=-1;this.connection=new WebSocket(this.websocketUri),this.connection.onmessage=function(t){var n=JSON.parse(t.data);"stream-update"==n.type&&e.refreshStreamList(n.data)},this.connection.onopen=function(e){console.log("Successfully connected to the webcam websocket server...")},this.connection.onclose=function(n){t=setInterval((function(){clearInterval(t),e.connectToWebSocket()}),300)}},updatePrimaryStream:function(e){return Object(S["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/setPrimaryStreamAlias",t.next=3,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alias:e})});case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()},playFullscreen:function(e,t){var n;n=null==e?t:e.currentTarget.querySelector("video"),n.webkitSetPresentationMode("fullscreen"),n.addEventListener("webkitendfullscreen",(function(){setTimeout((function(){n.play()}),1e3)}))}},watch:{primaryStream:function(e){this.updatePrimaryStream(e)}},mounted:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.refreshStreamList(),e.connectToWebSocket();case 2:case"end":return t.stop()}}),t)})))()}};n("7920"),n("788c");k.render=g,k.__scopeId="data-v-883127ac";t["default"]=k},"3d46":function(e,t,n){"use strict";n("dc19")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("ac1f"),n("841c"),n("7a23"));function i(e,t,n,r,i,o){var s=Object(a["C"])("router-view");return Object(a["u"])(),Object(a["g"])(s)}var o={data:function(){return{}}};n("8d84");o.render=i;var s=o,c=n("9319"),u=n("8398"),d=n("bb57"),l=n("5b2c"),m=n("6f85"),f=n("b3b6"),p=n("5bd2"),v=n("9421"),h=n("a469"),b=n("b35c"),w=n("4b7b"),g=Object(a["P"])("data-v-6bce3684");Object(a["x"])("data-v-6bce3684");var S={class:"component"};Object(a["v"])();var y=g((function(e,t,n,r,i,o){return Object(a["u"])(),Object(a["g"])("div",S,[Object(a["k"])("video",{autoplay:"",playsinline:"",muted:"",ref:"videoElement",style:{"pointer-events":"none"},class:{show:i.videoShow}},null,2)])})),O=(n("466d"),n("ba56")),k=n.n(O),j={props:{videoSrc:String,playsinline:{type:Boolean,default:!1},controls:{type:Boolean,default:!1}},watch:{videoSrc:function(e){this.videoShow=!1,this.startStream()}},methods:{startStream:function(){var e=this;this.hls&&this.hls.destroy();var t=this.$refs.videoElement;if(this.init||t.addEventListener("webkitendfullscreen",(function(t){e.$emit("ios-exit-fullscreen")})),this.iOSSafari||this.safari)this.init||(t.addEventListener("playing",(function(){t.currentTime=t.buffered.end(0),console.log("playing")})),t.addEventListener("waiting",(function(){console.log("waiting")})),t.addEventListener("stalled",(function(){console.log("stalled"),e.startStream()})),t.addEventListener("loadeddata",(function(t){e.videoShow=!0}))),t.src=this.videoSrc;else if(k.a.isSupported()){var n={enableWorker:!0,liveSyncDuration:0,liveMaxLatencyDuration:1,liveDurationInfinity:!0,highBufferWatchdogPeriod:1};this.hls=new k.a(n),this.hls.attachMedia(t),this.hls.on(k.a.Events.MEDIA_ATTACHED,(function(){e.hls.loadSource(e.videoSrc),e.hls.on(k.a.Events.MANIFEST_PARSED,(function(){t.play(),setTimeout((function(){e.videoSize.w=t.getBoundingClientRect().width,e.videoSize.h=t.getBoundingClientRect().height}),500)}))})),this.hls.on(k.a.Events.ERROR,(function(t,n){if(n.fatal)switch(n.type){case k.a.ErrorTypes.NETWORK_ERROR:console.log("fatal network error encountered, try to recover"),e.restartStream();break;case k.a.ErrorTypes.MEDIA_ERROR:console.log("fatal media error encountered, try to recover"),e.restartStream();break;default:console.log("HLS cannot recover, destroying"),e.hls.destroy();break}})),this.init||(t.addEventListener("ended",(function(e){})),t.addEventListener("abort",(function(e){})),t.addEventListener("emptied",(function(e){})),t.addEventListener("waiting",(function(e){})),t.addEventListener("playing",(function(e){})),t.addEventListener("play",(function(e){})),t.addEventListener("loadeddata",(function(t){e.videoShow=!0})))}this.init=!0},restartStream:function(){this.startStream()}},computed:{},data:function(){return{hls:null,videoSize:{w:0,h:0},refreshTimeoutMs:5e3,init:!1,videoShow:!0,isIosSafari:!1,isSafari:!1,options:{type:Object,default:function(){return{}}}}},unmounted:function(){this.hls&&this.hls.destroy()},mounted:function(){var e=window.navigator.userAgent,t=!!e.match(/iPad/i)||!!e.match(/iPhone/i),n=!!e.match(/WebKit/i),r=t&&n&&!e.match(/CriOS/i),a=!!e.match(/Safari/i)&&!e.match(/Chrome/i);this.isIosSafari=r,this.isSafari=a,this.startStream()}};n("3d46");j.render=y,j.__scopeId="data-v-6bce3684";var P=j,R=n("a034"),x=n("ecee"),C=n("c074"),D=n("ad3d"),T=n("a002"),E=n.n(T),L=n("b24b"),_=n("485c"),U=(n("fa3d"),n("e1ae"),n("4121"),n("b0c0"),n("6c02")),I=(n("26d3"),n("852e"),[{path:"/",name:"Home",component:function(){return n.e("chunk-28a4472e").then(n.bind(null,"eff8"))}},{path:"/settings",name:"Settings",component:function(){return Promise.resolve().then(n.bind(null,"26d3"))}},{path:"/all",name:"All Streams",component:function(){return n.e("chunk-1344ce6c").then(n.bind(null,"cf5b"))}},{path:"/dash",name:"dash",component:function(){return n.e("chunk-28a4472e").then(n.bind(null,"eff8"))}},{path:"/scratch",name:"scratch",component:function(){return n.e("chunk-7e0fba94").then(n.bind(null,"a964"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-1bae3367").then(n.bind(null,"dd7b"))}}]),A=Object(U["a"])({history:Object(U["b"])("/"),routes:I});A.beforeEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.query||n.query,e.next=3,window.HC_validateToken();case 3:i=e.sent,"Login"===t.name||i?r():(console.log("redirecting to login..."),r({name:"Login",query:a}));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var V=A;x["c"].add(C["c"],C["b"],C["e"],C["a"],C["d"]);var M=Object(a["f"])(s).use(V);M.use(c["a"]),M.use(_["a"]),M.use(L["a"]),M.component("font-awesome-icon",D["a"]),M.component("HlsVideo",P),M.component("Badge",w["a"]),M.component("ProgressSpinner",h["a"]),M.component("ConfirmPopup",v["a"]),M.component("InputText",u["a"]),M.component("Button",d["a"]),M.component("DataTable",l["a"]),M.component("Column",m["a"]),M.component("Toast",f["a"]),M.component("Dialog",p["a"]),M.component("RadioButton",b["a"]),M.component("Password",R["a"]),M.mount("#app"),window.destinations={localDomain:"192.168.0.135",localPort:"8000",localWsPort:"3030",remoteDomain:"flyingbits.ddns.net",remotePort:"80",remoteWsPort:"13371",devDomain:"192.168.0.110",devPort:"8000",devWsPort:"3030",activeDomain:null,activePort:null,activeWsPort:null};var N=new URLSearchParams(window.location.search),W=N.get("env"),B=!1;window.location.host.indexOf(window.destinations.remoteDomain)>-1&&!W&&(W="internet",B=!0),window.location.host.indexOf("localhost")>-1&&!W&&(W="dev",B=!0),B&&(window.location.search="env="+W),"internet"==W?(window.destinations.activeDomain=window.destinations.remoteDomain,window.destinations.activePort=window.destinations.remotePort,window.destinations.activeWsPort=window.destinations.remoteWsPort):"dev"==W?(window.destinations.activeDomain=window.destinations.devDomain,window.destinations.activePort=window.destinations.devPort,window.destinations.activeWsPort=window.destinations.devWsPort):(window.destinations.activeDomain=window.destinations.localDomain,window.destinations.activePort=window.destinations.localPort,window.destinations.activeWsPort=window.destinations.localWsPort),window.HC_validateToken=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/validateToken",e.next=3,E.a.getItem("token");case 3:return a=e.sent,e.next=6,fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:a})});case 6:return i=e.sent,e.next=9,i.json();case 9:o=e.sent,t(o.valid);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),window.HC_login=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,r){var a,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/login",e.next=3,fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pass:t})});case 3:return i=e.sent,e.next=6,i.json();case 6:return o=e.sent,console.log(o.token),e.prev=8,e.next=11,E.a.setItem("token",o.token);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](8),console.log(e.t0);case 16:n(o.success);case 17:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),window.HC_getList=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/list",e.next=3,E.a.getItem("token");case 3:return n=e.sent,e.abrupt("return",new Promise(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(r,a){var i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n})});case 2:return i=e.sent,e.next=5,i.json();case 5:o=e.sent,r(o);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e)})))},"5e5d":function(e,t,n){},"788c":function(e,t,n){"use strict";n("5e5d")},7920:function(e,t,n){"use strict";n("aa32")},"8d84":function(e,t,n){"use strict";n("f926")},aa32:function(e,t,n){},dc19:function(e,t,n){},f926:function(e,t,n){}});
//# sourceMappingURL=app.c5b4609a.js.map