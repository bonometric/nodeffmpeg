(function(e){function t(t){for(var a,r,s=t[0],c=t[1],u=t[2],d=0,l=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0958df72":"51f0c17a","chunk-5daefee8":"9ce7a515","chunk-e8345eaa":"1aaf9b04"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0958df72":1,"chunk-5daefee8":1,"chunk-e8345eaa":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0958df72":"f535e5d9","chunk-5daefee8":"b3a67a45","chunk-e8345eaa":"806647e0"}[e]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===i))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===a||d===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],m.parentNode.removeChild(m),n(o)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var m=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1bf5":function(e,t,n){},"316a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("ac1f"),n("841c");var a=n("7a23");function r(e,t,n,r,i,o){var s=Object(a["C"])("router-view");return Object(a["u"])(),Object(a["g"])(s)}var i={data:function(){return{}}};n("db06");i.render=r;var o=i,s=n("9319"),c=n("8398"),u=n("bb57"),d=n("5b2c"),l=n("6f85"),m=n("b3b6"),f=n("5bd2"),p=n("9421"),b=n("a469"),v=n("b35c"),h=n("4b7b"),w=Object(a["P"])("data-v-3723cfa3");Object(a["x"])("data-v-3723cfa3");var g={class:"component"};Object(a["v"])();var S=w((function(e,t,n,r,i,o){return Object(a["u"])(),Object(a["g"])("div",g,[Object(a["k"])("video",{autoplay:"",controls:n.controls,playsinline:n.playsinline,muted:"",ref:"videoElement"},null,8,["controls","playsinline"])])})),y=n("ba56"),O=n.n(y),j={props:{videoSrc:String,playsinline:{type:Boolean,default:!1},controls:{type:Boolean,default:!1}},watch:{videoSrc:function(e){this.startStream()}},methods:{startStream:function(){var e=this;this.hls&&this.hls.destroy();var t=this.$refs.videoElement;if(t.addEventListener("webkitendfullscreen",(function(t){e.$emit("ios-exit-fullscreen")})),t.canPlayType("application/vnd.apple.mpegurl"))t.addEventListener("playing",(function(){t.currentTime=t.buffered.end(0)})),t.src=this.videoSrc;else if(O.a.isSupported()){var n={enableWorker:!0,liveSyncDuration:0,liveMaxLatencyDuration:1,liveDurationInfinity:!0,highBufferWatchdogPeriod:1};this.hls=new O.a(n),this.hls.attachMedia(t),this.hls.on(O.a.Events.MEDIA_ATTACHED,(function(){e.hls.loadSource(e.videoSrc),e.hls.on(O.a.Events.MANIFEST_PARSED,(function(){t.play(),setTimeout((function(){e.videoSize.w=t.getBoundingClientRect().width,e.videoSize.h=t.getBoundingClientRect().height}),500)}))})),this.hls.on(O.a.Events.ERROR,(function(t,n){if(n.fatal)switch(n.type){case O.a.ErrorTypes.NETWORK_ERROR:console.log("fatal network error encountered, try to recover"),e.restartStream();break;case O.a.ErrorTypes.MEDIA_ERROR:console.log("fatal media error encountered, try to recover"),e.restartStream();break;default:console.log("HLS cannot recover, destroying"),e.hls.destroy();break}})),t.addEventListener("ended",(function(e){console.log("ended")})),t.addEventListener("abort",(function(e){console.log("abort")})),t.addEventListener("emptied",(function(e){console.log("emptied")})),t.addEventListener("waiting",(function(e){}))}},restartStream:function(){this.startStream()}},computed:{},data:function(){return{hls:null,videoSize:{w:0,h:0}}},unmounted:function(){this.hls&&this.hls.destroy()},mounted:function(){this.startStream()}};n("e5db");j.render=S,j.__scopeId="data-v-3723cfa3";var k=j,P=n("ecee"),R=n("c074"),D=n("ad3d"),C=n("b24b"),x=n("485c"),T=(n("fa3d"),n("e1ae"),n("4121"),n("6c02")),E=(n("fb6a"),Object(a["P"])("data-v-3c095816"));Object(a["x"])("data-v-3c095816");var U=Object(a["k"])("h1",null,"Camera Stream Configurations",-1),_={class:"table-header"},A={class:"stream-count"},V=Object(a["j"])(" Total streams: "),I={class:"primary"},L={class:"row-buttons"},M={class:"content"},W={class:"p-field"},B=Object(a["k"])("label",{for:"alias"},"Stream Alias",-1),N={class:"p-field"},J=Object(a["k"])("label",{for:"feed"},"Rtsp Feed",-1),$={class:"processingStatus"},H=Object(a["j"])(" Processing... "),F={class:"buttons"};Object(a["v"])();var G=E((function(e,t,n,r,i,o){var s=Object(a["C"])("Badge"),c=Object(a["C"])("Button"),u=Object(a["C"])("Column"),d=Object(a["C"])("RadioButton"),l=Object(a["C"])("badge"),m=Object(a["C"])("font-awesome-icon"),f=Object(a["C"])("ProgressSpinner"),p=Object(a["C"])("DataTable"),b=Object(a["C"])("Toast"),v=Object(a["C"])("InputText"),h=Object(a["C"])("Dialog"),w=Object(a["C"])("hls-video"),g=Object(a["C"])("ConfirmPopup");return Object(a["u"])(),Object(a["g"])("div",null,[U,Object(a["k"])("div",_,[Object(a["k"])("div",A,[V,Object(a["k"])(s,{value:i.streams.length},null,8,["value"])]),Object(a["k"])(c,{icon:"pi pi-plus",onClick:t[1]||(t[1]=function(e){return o.addNewStream()}),label:"Add new"})]),Object(a["k"])(p,{value:i.streams},{default:E((function(){return[Object(a["k"])(u,{style:{width:"40px"},field:"alias",header:""},{body:E((function(e){return[Object(a["j"])(Object(a["G"])(e.index+1),1)]})),_:1}),Object(a["k"])(u,{field:"alias",header:"Camera Alias"},{body:E((function(e){return[Object(a["k"])("div",{class:"alias",onClick:function(t){return o.viewStream(e.data)}},Object(a["G"])(e.data.alias.charAt(0).toUpperCase()+e.data.alias.slice(1)),9,["onClick"])]})),_:1}),Object(a["k"])(u,{field:"primary",header:"Primary"},{body:E((function(e){return[Object(a["k"])("div",I,[Object(a["k"])(d,{name:"city",value:e.data.alias,modelValue:i.primaryStream,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.primaryStream=e})},null,8,["value","modelValue"])])]})),_:1}),Object(a["k"])(u,{field:"streamUri",header:"Stream URI"}),Object(a["k"])(u,{field:"running",header:"Running Status"},{body:E((function(e){return[Object(a["k"])(l,{value:o.getBadgeValueAndSeverity(e.data).value,severity:o.getBadgeValueAndSeverity(e.data).severity},null,8,["value","severity"])]})),_:1}),Object(a["k"])(u,{field:"action",header:"Actions"},{body:E((function(e){return[Object(a["k"])("div",L,[Object(a["k"])(c,{icon:"pi",class:"p-button-secondary p-button-rounded p-button-outlined",disabled:null===e.data.running,onClick:function(t){return o.removeStream(e.data,t)}},{default:E((function(){return[Object(a["k"])(m,{icon:"trash"})]})),_:2},1032,["disabled","onClick"]),Object(a["k"])(c,{icon:"pi",class:"p-button-rounded p-button-secondary p-button-outlined",onClick:function(t){return o.viewStream(e.data)},disabled:null===e.data.running},{default:E((function(){return[null===e.data.running?(Object(a["u"])(),Object(a["g"])(f,{key:0})):(Object(a["u"])(),Object(a["g"])(m,{key:1,icon:"eye"}))]})),_:2},1032,["onClick","disabled"]),e.data.running?(Object(a["u"])(),Object(a["g"])(c,{key:0,icon:"pi",class:"p-button-rounded p-button-secondary p-button-outlined",disabled:null===e.data.running,onClick:function(t){return o.stopStream(e.data)}},{default:E((function(){return[Object(a["k"])(m,{icon:"stop"})]})),_:2},1032,["disabled","onClick"])):Object(a["h"])("",!0)])]})),_:1})]})),_:1},8,["value"]),Object(a["k"])(b,{position:"top-center"}),Object(a["k"])(h,{class:"dialog new-stream",header:"Add New Stream",visible:i.newStreamDisplayModal,"onUpdate:visible":t[6]||(t[6]=function(e){return i.newStreamDisplayModal=e}),modal:!0,closeOnEscape:!0},{footer:E((function(){return[Object(a["M"])(Object(a["k"])("div",$,[Object(a["k"])(f),H],512),[[a["J"],i.newStreamProcessing]]),Object(a["k"])("div",F,[Object(a["k"])(c,{disabled:i.newStreamProcessing||""==i.newStreamData.alias||""==i.newStreamData.rtspUri,label:"Submit",autofocus:"",onClick:t[5]||(t[5]=function(e){return o.createStream()})},null,8,["disabled"])])]})),default:E((function(){return[Object(a["k"])("div",M,[Object(a["k"])("div",W,[B,Object(a["k"])(v,{id:"alias",modelValue:i.newStreamData.alias,"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.newStreamData.alias=e}),placeholder:"Garage, Room, etc."},null,8,["modelValue"])]),Object(a["k"])("div",N,[J,Object(a["k"])(v,{id:"feed",modelValue:i.newStreamData.rtspUri,"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.newStreamData.rtspUri=e}),placeholder:"rtsp://user:pass@192.168.0.150"},null,8,["modelValue"])])])]})),_:1},8,["visible"]),Object(a["k"])(h,{class:"dialog view-stream",visible:i.streamViewerDisplayModal,"onUpdate:visible":t[9]||(t[9]=function(e){return i.streamViewerDisplayModal=e}),modal:!0,closeOnEscape:!0,onHide:t[10]||(t[10]=function(e){return o.refreshStreamList()})},{header:E((function(){return[Object(a["k"])("h3",null,Object(a["G"])(i.activeVideoAlias),1),Object(a["k"])(c,{icon:"pi",class:"p-button-secondary p-button-rounded p-button-outlined",onClick:t[7]||(t[7]=function(e){return o.restartStream()})},{default:E((function(){return[Object(a["k"])(m,{icon:"sync"})]})),_:1})]})),default:E((function(){return[Object(a["k"])(w,{onIosExitFullscreen:t[8]||(t[8]=function(e){return i.streamViewerDisplayModal=!1}),ref:"videoStream","video-src":i.activeVideoSrc},null,8,["video-src"])]})),_:1},8,["visible"]),Object(a["k"])(g)])})),q=n("1da1"),z=(n("96cf"),{name:"Settings",data:function(){return{getListURI:"http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/list",stopURI:"http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/stop",startURI:"http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/start",streamUri:"http://"+window.destinations.activeDomain+":"+window.destinations.activePort,websocketUri:"ws://"+window.destinations.activeDomain+":"+window.destinations.activeWsPort,newStreamDisplayModal:!1,streamViewerDisplayModal:!1,streams:[],newStreamData:{alias:"foo",rtspUri:"bar"},newStreamProcessing:!1,activeVideoSrc:null,activeVideoAlias:null,listRefreshInterval:-1,primaryStream:null}},methods:{test:function(e){console.log(e)},restartStream:function(){this.$refs.videoStream.restartStream()},getBadgeValueAndSeverity:function(e){return!0===e.running?{value:"Running",severity:"success"}:!1===e.running?{value:"Stopped",severity:"danger"}:null===e.running?{value:"Starting",severity:"warning"}:void 0},refreshStreamList:function(e){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function n(){var a,r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a="http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/getPrimaryStreamAlias",n.next=3,fetch(a);case 3:return r=n.sent,n.next=6,r.json();case 6:if(i=n.sent,t.primaryStream=i.primaryStreamAlias,!e){n.next=12;break}t.streams=e,n.next=15;break;case 12:return n.next=14,t.getStreams();case 14:t.streams=n.sent;case 15:t.streams.sort((function(e,t){return e.created>t.created?1:-1}));case 16:case"end":return n.stop()}}),n)})))()},stopStream:function(e){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch(t.stopURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alias:e.alias,remove:!1})});case 2:a=n.sent,a.ok?t.refreshStreamList():t.$toast.add({severity:"error",summary:"Stream stop failed",detail:"Stream for '"+e.alias+"' can't be stopped. Reason: "+a.statusText,life:3e3});case 4:case"end":return n.stop()}}),n)})))()},createStream:function(){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.newStreamProcessing=!0,t.next=3,fetch(e.startURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rtspUri:e.newStreamData.rtspUri,alias:e.newStreamData.alias})});case 3:n=t.sent,n.ok?e.refreshStreamList():e.$toast.add({severity:"error",summary:"Stream creation failed",detail:"Stream for URI of '"+e.newStreamData.rtspUri+"' can't be created. Reason: "+n.statusText,life:3e3}),e.newStreamDisplayModal=!1,e.newStreamProcessing=!1;case 7:case"end":return t.stop()}}),t)})))()},addNewStream:function(){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.newStreamData.alias="",e.newStreamData.rtspUri="",e.newStreamDisplayModal=!0;case 3:case"end":return t.stop()}}),t)})))()},getStreams:function(){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.getListURI);case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))()},removeStream:function(e,t){var n=this;return Object(q["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n.$confirm.require({target:t.currentTarget,message:"Stop and remove stream?",accept:function(){r()},reject:function(){}}),r=function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.alias,t.next=3,fetch(n.stopURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alias:a,remove:!0})});case 3:r=t.sent,r.ok?n.refreshStreamList():n.$toast.add({severity:"error",summary:"Stream removal failed",detail:"Stream with alias of '"+a+"' can't be removed. Reason: "+r,life:3e3});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();case 2:case"end":return a.stop()}}),a)})))()},viewStream:function(e){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.running){n.next=7;break}t.streamViewerDisplayModal=!0,t.activeVideoAlias=e.alias,a=t.streamUri+"/"+e.streamUri,t.activeVideoSrc=a,n.next=11;break;case 7:return n.next=9,fetch(t.startURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alias:e.alias})});case 9:r=n.sent,r.ok&&(e.running=!0,t.viewStream(e));case 11:case"end":return n.stop()}}),n)})))()},connectToWebSocket:function(){var e=this,t=-1;this.connection=new WebSocket(this.websocketUri),this.connection.onmessage=function(t){var n=JSON.parse(t.data);"stream-update"==n.type&&e.refreshStreamList(n.data)},this.connection.onopen=function(e){console.log(e),console.log("Successfully connected to the webcam websocket server...")},this.connection.onclose=function(n){t=setInterval((function(){clearInterval(t),e.connectToWebSocket()}),300)}},updatePrimaryStream:function(e){return Object(q["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/setPrimaryStreamAlias",t.next=3,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alias:e})});case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()}},watch:{primaryStream:function(e){this.updatePrimaryStream(e)}},mounted:function(){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.refreshStreamList(),e.connectToWebSocket();case 2:case"end":return t.stop()}}),t)})))()}});n("5b59"),n("a81d");z.render=G,z.__scopeId="data-v-3c095816";var K=z,Q=[{path:"/",name:"Home",component:K},{path:"/all",name:"All Streams",component:function(){return n.e("chunk-0958df72").then(n.bind(null,"cf5b"))}},{path:"/dash",name:"dash",component:function(){return n.e("chunk-e8345eaa").then(n.bind(null,"eff8"))}},{path:"/scratch",name:"scratch",component:function(){return n.e("chunk-5daefee8").then(n.bind(null,"a964"))}}],X=Object(T["a"])({history:Object(T["b"])("/"),routes:Q}),Y=X;P["c"].add(R["c"],R["b"],R["e"],R["a"],R["d"]);var Z=Object(a["f"])(o).use(Y);Z.use(s["a"]),Z.use(x["a"]),Z.use(C["a"]),Z.component("font-awesome-icon",D["a"]),Z.component("HlsVideo",k),Z.component("Badge",h["a"]),Z.component("ProgressSpinner",b["a"]),Z.component("ConfirmPopup",p["a"]),Z.component("InputText",c["a"]),Z.component("Button",u["a"]),Z.component("DataTable",d["a"]),Z.component("Column",l["a"]),Z.component("Toast",m["a"]),Z.component("Dialog",f["a"]),Z.component("RadioButton",v["a"]),Z.mount("#app"),window.destinations={localDomain:"192.168.0.135",localPort:"8000",localWsPort:"3030",remoteDomain:"flyingbits.ddns.net",remotePort:"13370",remoteWsPort:"13371",devDomain:"localhost",devPort:"8000",devWsPort:"3030",activeDomain:null,activePort:null,activeWsPort:null};var ee=new URLSearchParams(window.location.search),te=ee.get("env");"internet"==te?(window.destinations.activeDomain=window.destinations.remoteDomain,window.destinations.activePort=window.destinations.remotePort,window.destinations.activeWsPort=window.destinations.remoteWsPort):"dev"==te?(window.destinations.activeDomain=window.destinations.devDomain,window.destinations.activePort=window.destinations.devPort,window.destinations.activeWsPort=window.destinations.devWsPort):(window.destinations.activeDomain=window.destinations.localDomain,window.destinations.activePort=window.destinations.localPort,window.destinations.activeWsPort=window.destinations.localWsPort)},"5b59":function(e,t,n){"use strict";n("8a2f")},"8a2f":function(e,t,n){},a81d:function(e,t,n){"use strict";n("316a")},c9d5:function(e,t,n){},db06:function(e,t,n){"use strict";n("c9d5")},e5db:function(e,t,n){"use strict";n("1bf5")}});
//# sourceMappingURL=app.36bdc59d.js.map