(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"29e9b077"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"ae5cba5c"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04b1":function(e,t,n){},1622:function(e,t,n){"use strict";n("8e35")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,i){var c=Object(r["C"])("router-view");return Object(r["u"])(),Object(r["g"])(c)}var o={data:function(){return{}}};n("5fab");o.render=a;var i=o,c=n("9319"),s=n("8398"),u=n("bb57"),l=n("5b2c"),d=n("6f85"),f=n("b3b6"),p=n("5bd2"),m=n("9421"),b=n("a469"),h=n("4b7b"),v=Object(r["P"])("data-v-5a2947b3");Object(r["x"])("data-v-5a2947b3");var g={class:"component"},S={autoplay:"",playsinline:"",muted:"",ref:"videoElement"};Object(r["v"])();var O=v((function(e,t,n,a,o,i){return Object(r["u"])(),Object(r["g"])("div",g,[Object(r["k"])("video",S,null,512)])})),j=n("ba56"),w=n.n(j),y={props:{videoSrc:String},watch:{videoSrc:function(e){this.startStream()}},methods:{startStream:function(){var e=this;this.hls&&this.hls.destroy();var t=this.$refs.videoElement;if(t.addEventListener("webkitendfullscreen",(function(t){e.$emit("ios-exit-fullscreen")})),t.canPlayType("application/vnd.apple.mpegurl"))t.src=this.videoSrc;else if(w.a.isSupported()){var n={enableWorker:!0,liveSyncDuration:0,liveMaxLatencyDuration:1,liveDurationInfinity:!0,highBufferWatchdogPeriod:1};this.hls=new w.a(n),this.hls.attachMedia(t),this.hls.on(w.a.Events.MEDIA_ATTACHED,(function(){e.hls.loadSource(e.videoSrc),e.hls.on(w.a.Events.MANIFEST_PARSED,(function(){t.play(),setTimeout((function(){e.videoSize.w=t.getBoundingClientRect().width,e.videoSize.h=t.getBoundingClientRect().height}),500)}))})),this.hls.on(w.a.Events.ERROR,(function(t,n){if(n.fatal)switch(n.type){case w.a.ErrorTypes.NETWORK_ERROR:console.log("fatal network error encountered, try to recover"),e.restartStream();break;case w.a.ErrorTypes.MEDIA_ERROR:console.log("fatal media error encountered, try to recover"),e.restartStream();break;default:console.log("HLS cannot recover, destroying"),e.hls.destroy();break}})),t.addEventListener("ended",(function(e){console.log("ended")})),t.addEventListener("abort",(function(e){console.log("abort")})),t.addEventListener("emptied",(function(e){console.log("emptied")})),t.addEventListener("waiting",(function(e){}))}},restartStream:function(){this.startStream()}},computed:{},data:function(){return{hls:null,videoSize:{w:0,h:0}}},unmounted:function(){this.hls&&this.hls.destroy()},mounted:function(){this.startStream()}};n("1622");y.render=O,y.__scopeId="data-v-5a2947b3";var k=y,R=n("ecee"),C=n("c074"),P=n("ad3d"),x=n("b24b"),T=n("485c"),D=(n("fa3d"),n("e1ae"),n("4121"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),E=(n("fb6a"),Object(r["P"])("data-v-60782578"));Object(r["x"])("data-v-60782578");var U=Object(r["k"])("h1",null,"Camera Stream Configurations",-1),_={class:"table-header"},A={class:"stream-count"},I=Object(r["j"])(" Total streams: "),L={class:"row-buttons"},V={class:"content"},M={class:"p-field"},N=Object(r["k"])("label",{for:"alias"},"Stream Alias",-1),B={class:"p-field"},$=Object(r["k"])("label",{for:"feed"},"Rtsp Feed",-1),J={class:"processingStatus"},W=Object(r["j"])(" Processing... "),H={class:"buttons"};Object(r["v"])();var F=E((function(e,t,n,a,o,i){var c=Object(r["C"])("Badge"),s=Object(r["C"])("Button"),u=Object(r["C"])("Column"),l=Object(r["C"])("badge"),d=Object(r["C"])("font-awesome-icon"),f=Object(r["C"])("ProgressSpinner"),p=Object(r["C"])("DataTable"),m=Object(r["C"])("Toast"),b=Object(r["C"])("InputText"),h=Object(r["C"])("Dialog"),v=Object(r["C"])("hls-video"),g=Object(r["C"])("ConfirmPopup");return Object(r["u"])(),Object(r["g"])("div",null,[U,Object(r["k"])("div",_,[Object(r["k"])("div",A,[I,Object(r["k"])(c,{value:o.streams.length},null,8,["value"])]),Object(r["k"])(s,{icon:"pi pi-plus",onClick:t[1]||(t[1]=function(e){return i.addNewStream()}),label:"Add new"})]),Object(r["k"])(p,{value:o.streams},{default:E((function(){return[Object(r["k"])(u,{style:{width:"40px"},field:"alias",header:""},{body:E((function(e){return[Object(r["j"])(Object(r["G"])(e.index+1),1)]})),_:1}),Object(r["k"])(u,{field:"alias",header:"Camera Alias"},{body:E((function(e){return[Object(r["k"])("div",{class:"alias",onClick:function(t){return i.viewStream(e.data)}},Object(r["G"])(e.data.alias.charAt(0).toUpperCase()+e.data.alias.slice(1)),9,["onClick"])]})),_:1}),Object(r["k"])(u,{field:"streamUri",header:"Stream URI"}),Object(r["k"])(u,{field:"running",header:"Running Status"},{body:E((function(e){return[Object(r["k"])(l,{value:i.getBadgeValueAndSeverity(e.data).value,severity:i.getBadgeValueAndSeverity(e.data).severity},null,8,["value","severity"])]})),_:1}),Object(r["k"])(u,{field:"action",header:"Actions"},{body:E((function(e){return[Object(r["k"])("div",L,[Object(r["k"])(s,{icon:"pi",class:"p-button-secondary p-button-rounded p-button-outlined",disabled:null===e.data.running,onClick:function(t){return i.removeStream(e.data,t)}},{default:E((function(){return[Object(r["k"])(d,{icon:"trash"})]})),_:2},1032,["disabled","onClick"]),Object(r["k"])(s,{icon:"pi",class:"p-button-rounded p-button-secondary p-button-outlined",onClick:function(t){return i.viewStream(e.data)},disabled:null===e.data.running},{default:E((function(){return[null===e.data.running?(Object(r["u"])(),Object(r["g"])(f,{key:0})):(Object(r["u"])(),Object(r["g"])(d,{key:1,icon:"eye"}))]})),_:2},1032,["onClick","disabled"]),e.data.running?(Object(r["u"])(),Object(r["g"])(s,{key:0,icon:"pi",class:"p-button-rounded p-button-secondary p-button-outlined",disabled:null===e.data.running,onClick:function(t){return i.stopStream(e.data)}},{default:E((function(){return[Object(r["k"])(d,{icon:"stop"})]})),_:2},1032,["disabled","onClick"])):Object(r["h"])("",!0)])]})),_:1})]})),_:1},8,["value"]),Object(r["k"])(m,{position:"top-center"}),Object(r["k"])(h,{class:"dialog new-stream",header:"Add New Stream",visible:o.newStreamDisplayModal,"onUpdate:visible":t[5]||(t[5]=function(e){return o.newStreamDisplayModal=e}),modal:!0,closeOnEscape:!0},{footer:E((function(){return[Object(r["M"])(Object(r["k"])("div",J,[Object(r["k"])(f),W],512),[[r["J"],o.newStreamProcessing]]),Object(r["k"])("div",H,[Object(r["k"])(s,{disabled:o.newStreamProcessing||""==o.newStreamData.alias||""==o.newStreamData.rtspUri,label:"Submit",autofocus:"",onClick:t[4]||(t[4]=function(e){return i.createStream()})},null,8,["disabled"])])]})),default:E((function(){return[Object(r["k"])("div",V,[Object(r["k"])("div",M,[N,Object(r["k"])(b,{id:"alias",modelValue:o.newStreamData.alias,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.newStreamData.alias=e}),placeholder:"Garage, Room, etc."},null,8,["modelValue"])]),Object(r["k"])("div",B,[$,Object(r["k"])(b,{id:"feed",modelValue:o.newStreamData.rtspUri,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.newStreamData.rtspUri=e}),placeholder:"rtsp://user:pass@192.168.0.150"},null,8,["modelValue"])])])]})),_:1},8,["visible"]),Object(r["k"])(h,{class:"dialog view-stream",visible:o.streamViewerDisplayModal,"onUpdate:visible":t[8]||(t[8]=function(e){return o.streamViewerDisplayModal=e}),modal:!0,closeOnEscape:!0,onHide:t[9]||(t[9]=function(e){return i.refreshStreamList()})},{header:E((function(){return[Object(r["k"])("h3",null,Object(r["G"])(o.activeVideoAlias),1),Object(r["k"])(s,{icon:"pi",class:"p-button-secondary p-button-rounded p-button-outlined",onClick:t[6]||(t[6]=function(e){return i.restartStream()})},{default:E((function(){return[Object(r["k"])(d,{icon:"sync"})]})),_:1})]})),default:E((function(){return[Object(r["k"])(v,{onIosExitFullscreen:t[7]||(t[7]=function(e){return o.streamViewerDisplayModal=!1}),ref:"videoStream","video-src":o.activeVideoSrc},null,8,["video-src"])]})),_:1},8,["visible"]),Object(r["k"])(g)])})),G=n("1da1"),q=(n("96cf"),{name:"Settings",data:function(){return{getListURI:"http://"+domain+":"+httpPort+"/list",stopURI:"http://"+domain+":"+httpPort+"/stop",startURI:"http://"+domain+":"+httpPort+"/start",streamUri:"http://"+domain+":"+httpPort,newStreamDisplayModal:!1,streamViewerDisplayModal:!1,streams:[],newStreamData:{alias:"foo",rtspUri:"bar"},newStreamProcessing:!1,activeVideoSrc:null,activeVideoAlias:null,listRefreshInterval:-1}},methods:{test:function(e){console.log(e)},restartStream:function(){this.$refs.videoStream.restartStream()},getBadgeValueAndSeverity:function(e){return!0===e.running?{value:"Running",severity:"success"}:!1===e.running?{value:"Stopped",severity:"danger"}:null===e.running?{value:"Starting",severity:"warning"}:void 0},refreshStreamList:function(e){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e){n.next=4;break}t.streams=e,n.next=7;break;case 4:return n.next=6,t.getStreams();case 6:t.streams=n.sent;case 7:t.streams.sort((function(e,t){return e.created>t.created?1:-1}));case 8:case"end":return n.stop()}}),n)})))()},stopStream:function(e){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch(t.stopURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alias:e.alias,remove:!1})});case 2:r=n.sent,r.ok?t.refreshStreamList():t.$toast.add({severity:"error",summary:"Stream stop failed",detail:"Stream for '"+e.alias+"' can't be stopped. Reason: "+r.statusText,life:3e3});case 4:case"end":return n.stop()}}),n)})))()},createStream:function(){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.newStreamProcessing=!0,t.next=3,fetch(e.startURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rtspUri:e.newStreamData.rtspUri,alias:e.newStreamData.alias})});case 3:n=t.sent,n.ok?e.refreshStreamList():e.$toast.add({severity:"error",summary:"Stream creation failed",detail:"Stream for URI of '"+e.newStreamData.rtspUri+"' can't be created. Reason: "+n.statusText,life:3e3}),e.newStreamDisplayModal=!1,e.newStreamProcessing=!1;case 7:case"end":return t.stop()}}),t)})))()},addNewStream:function(){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.newStreamData.alias="",e.newStreamData.rtspUri="",e.newStreamDisplayModal=!0;case 3:case"end":return t.stop()}}),t)})))()},getStreams:function(){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.getListURI);case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))()},removeStream:function(e,t){var n=this;return Object(G["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n.$confirm.require({target:t.currentTarget,message:"Stop and remove stream?",accept:function(){a()},reject:function(){}}),a=function(){var t=Object(G["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.alias,t.next=3,fetch(n.stopURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alias:r,remove:!0})});case 3:a=t.sent,a.ok?n.refreshStreamList():n.$toast.add({severity:"error",summary:"Stream removal failed",detail:"Stream with alias of '"+r+"' can't be removed. Reason: "+a,life:3e3});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();case 2:case"end":return r.stop()}}),r)})))()},viewStream:function(e){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.running){n.next=7;break}t.streamViewerDisplayModal=!0,t.activeVideoAlias=e.alias,r=t.streamUri+"/"+e.streamUri,t.activeVideoSrc=r,n.next=11;break;case 7:return n.next=9,fetch(t.startURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alias:e.alias})});case 9:a=n.sent,a.ok&&(e.running=!0,t.viewStream(e));case 11:case"end":return n.stop()}}),n)})))()},connectToWebSocket:function(){var e=this,t=-1;this.connection=new WebSocket("ws://"+domain+":"+wsPort),this.connection.onmessage=function(t){var n=JSON.parse(t.data);"stream-update"==n.type&&e.refreshStreamList(n.data)},this.connection.onopen=function(e){console.log(e),console.log("Successfully connected to the echo websocket server...")},this.connection.onclose=function(n){t=setInterval((function(){clearInterval(t),e.connectToWebSocket()}),300)}}},mounted:function(){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.refreshStreamList();case 1:case"end":return t.stop()}}),t)})))()},created:function(){this.connectToWebSocket(),domain=this.$root.domain,httpPort=this.$root.httpPort,wsPort=this.$root.wsPort}});n("e4c5"),n("b4fa");q.render=F,q.__scopeId="data-v-60782578";var z=q,K=[{path:"/",name:"Home",component:z},{path:"/all",name:"All Streams",component:function(){return n.e("about").then(n.bind(null,"cf5b"))}},{path:"/dash",name:"dash",component:function(){return n.e("about").then(n.bind(null,"eff8"))}},{path:"/scratch",name:"scratch",component:function(){return n.e("about").then(n.bind(null,"a964"))}}],Q=Object(D["a"])({history:Object(D["b"])("/"),routes:K}),X=Q;R["c"].add(C["c"],C["b"],C["e"],C["a"],C["d"]);var Y=Object(r["f"])(i).use(X);Y.use(c["a"]),Y.use(T["a"]),Y.use(x["a"]),Y.component("font-awesome-icon",P["a"]),Y.component("HlsVideo",k),Y.component("Badge",h["a"]),Y.component("ProgressSpinner",b["a"]),Y.component("ConfirmPopup",m["a"]),Y.component("InputText",s["a"]),Y.component("Button",u["a"]),Y.component("DataTable",l["a"]),Y.component("Column",d["a"]),Y.component("Toast",f["a"]),Y.component("Dialog",p["a"]),Y.mount("#app"),window.domain="192.168.0.129",window.httpPort="8000",window.wsPort="3030"},"5d96":function(e,t,n){},"5fab":function(e,t,n){"use strict";n("5d96")},8556:function(e,t,n){},"8e35":function(e,t,n){},b4fa:function(e,t,n){"use strict";n("04b1")},e4c5:function(e,t,n){"use strict";n("8556")}});
//# sourceMappingURL=app.b15d4857.js.map