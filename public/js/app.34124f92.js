(function(e){function t(t){for(var a,r,s=t[0],c=t[1],u=t[2],d=0,l=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0b623e3b":"aa70c115","chunk-22a6f45f":"a3756c6b","chunk-276ea098":"e3a7a98e","chunk-7a4c7ecf":"6a2bc32b"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0b623e3b":1,"chunk-22a6f45f":1,"chunk-276ea098":1,"chunk-7a4c7ecf":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0b623e3b":"a3bb0aaf","chunk-22a6f45f":"b3a67a45","chunk-276ea098":"501f09aa","chunk-7a4c7ecf":"f535e5d9"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===a||d===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],m.parentNode.removeChild(m),n(i)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var m=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2f9c":function(e,t,n){"use strict";n("dba8")},5694:function(e,t,n){"use strict";n("a237")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("1da1"),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("ac1f"),n("841c"),n("7a23"));function o(e,t,n,a,o,i){var s=Object(r["C"])("router-view");return Object(r["u"])(),Object(r["g"])(s)}var i={data:function(){return{}}};n("db06");i.render=o;var s=i,c=n("9319"),u=n("8398"),d=n("bb57"),l=n("5b2c"),m=n("6f85"),f=n("b3b6"),p=n("5bd2"),b=n("9421"),v=n("a469"),h=n("b35c"),w=n("4b7b"),g=Object(r["P"])("data-v-fd00a54a");Object(r["x"])("data-v-fd00a54a");var y={class:"component"},S={autoplay:"",playsinline:"",muted:"",ref:"videoElement",style:{"pointer-events":"none"}};Object(r["v"])();var k=g((function(e,t,n,a,o,i){return Object(r["u"])(),Object(r["g"])("div",y,[Object(r["k"])("video",S,null,512)])})),O=n("ba56"),j=n.n(O),P={props:{videoSrc:String,playsinline:{type:Boolean,default:!1},controls:{type:Boolean,default:!1}},watch:{videoSrc:function(e){this.startStream()}},methods:{startStream:function(){var e=this;this.hls&&this.hls.destroy();var t=this.$refs.videoElement;if(t.addEventListener("webkitendfullscreen",(function(t){e.$emit("ios-exit-fullscreen")})),t.canPlayType("application/vnd.apple.mpegurl"))t.addEventListener("playing",(function(){t.currentTime=t.buffered.end(0)})),t.src=this.videoSrc;else if(j.a.isSupported()){var n={enableWorker:!0,liveSyncDuration:0,liveMaxLatencyDuration:1,liveDurationInfinity:!0,highBufferWatchdogPeriod:1};this.hls=new j.a(n),this.hls.attachMedia(t),this.hls.on(j.a.Events.MEDIA_ATTACHED,(function(){e.hls.loadSource(e.videoSrc),e.hls.on(j.a.Events.MANIFEST_PARSED,(function(){t.play(),setTimeout((function(){e.videoSize.w=t.getBoundingClientRect().width,e.videoSize.h=t.getBoundingClientRect().height}),500)}))})),this.hls.on(j.a.Events.ERROR,(function(t,n){if(n.fatal)switch(n.type){case j.a.ErrorTypes.NETWORK_ERROR:console.log("fatal network error encountered, try to recover"),e.restartStream();break;case j.a.ErrorTypes.MEDIA_ERROR:console.log("fatal media error encountered, try to recover"),e.restartStream();break;default:console.log("HLS cannot recover, destroying"),e.hls.destroy();break}})),t.addEventListener("ended",(function(e){console.log("ended")})),t.addEventListener("abort",(function(e){console.log("abort")})),t.addEventListener("emptied",(function(e){console.log("emptied")})),t.addEventListener("waiting",(function(e){}))}},restartStream:function(){this.startStream()}},computed:{},data:function(){return{hls:null,videoSize:{w:0,h:0}}},unmounted:function(){this.hls&&this.hls.destroy()},mounted:function(){this.startStream()}};n("5e30");P.render=k,P.__scopeId="data-v-fd00a54a";var R=P,x=n("a034"),D=n("ecee"),C=n("c074"),T=n("ad3d"),E=n("852e"),A=n.n(E),U=n("a002"),_=n.n(U),L=n("b24b"),I=n("485c"),V=(n("fa3d"),n("e1ae"),n("4121"),n("b0c0"),n("6c02")),M=(n("fb6a"),Object(r["P"])("data-v-65e1a483"));Object(r["x"])("data-v-65e1a483");var W=Object(r["k"])("h1",null,"Camera Stream Configurations",-1),B={class:"table-header"},N={class:"stream-count"},J=Object(r["j"])(" Total streams: "),q={class:"primary"},F={class:"row-buttons"},$={class:"content"},H={class:"p-field"},G=Object(r["k"])("label",{for:"alias"},"Stream Alias",-1),z={class:"p-field"},K=Object(r["k"])("label",{for:"feed"},"Rtsp Feed",-1),Q={class:"processingStatus"},X=Object(r["j"])(" Processing... "),Y={class:"buttons"};Object(r["v"])();var Z=M((function(e,t,n,a,o,i){var s=Object(r["C"])("Badge"),c=Object(r["C"])("Button"),u=Object(r["C"])("Column"),d=Object(r["C"])("RadioButton"),l=Object(r["C"])("badge"),m=Object(r["C"])("font-awesome-icon"),f=Object(r["C"])("ProgressSpinner"),p=Object(r["C"])("DataTable"),b=Object(r["C"])("Toast"),v=Object(r["C"])("InputText"),h=Object(r["C"])("Dialog"),w=Object(r["C"])("hls-video"),g=Object(r["C"])("ConfirmPopup");return Object(r["u"])(),Object(r["g"])("div",null,[W,Object(r["k"])("div",B,[Object(r["k"])("div",N,[J,Object(r["k"])(s,{value:o.streams.length},null,8,["value"])]),Object(r["k"])(c,{icon:"pi pi-plus",onClick:t[1]||(t[1]=function(e){return i.addNewStream()}),label:"Add new"})]),Object(r["k"])(p,{value:o.streams},{default:M((function(){return[Object(r["k"])(u,{style:{width:"40px"},field:"alias",header:""},{body:M((function(e){return[Object(r["j"])(Object(r["G"])(e.index+1),1)]})),_:1}),Object(r["k"])(u,{field:"alias",header:"Camera Alias"},{body:M((function(e){return[Object(r["k"])("div",{class:"alias",onClick:function(t){return i.viewStream(e.data)}},Object(r["G"])(e.data.alias.charAt(0).toUpperCase()+e.data.alias.slice(1)),9,["onClick"])]})),_:1}),Object(r["k"])(u,{field:"primary",header:"Primary"},{body:M((function(e){return[Object(r["k"])("div",q,[Object(r["k"])(d,{name:"city",value:e.data.alias,modelValue:o.primaryStream,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.primaryStream=e})},null,8,["value","modelValue"])])]})),_:1}),Object(r["k"])(u,{field:"streamUri",header:"Stream URI"}),Object(r["k"])(u,{field:"running",header:"Running Status"},{body:M((function(e){return[Object(r["k"])(l,{value:i.getBadgeValueAndSeverity(e.data).value,severity:i.getBadgeValueAndSeverity(e.data).severity},null,8,["value","severity"])]})),_:1}),Object(r["k"])(u,{field:"action",header:"Actions"},{body:M((function(e){return[Object(r["k"])("div",F,[Object(r["k"])(c,{icon:"pi",class:"p-button-secondary p-button-rounded p-button-outlined",disabled:null===e.data.running,onClick:function(t){return i.removeStream(e.data,t)}},{default:M((function(){return[Object(r["k"])(m,{icon:"trash"})]})),_:2},1032,["disabled","onClick"]),Object(r["k"])(c,{icon:"pi",class:"p-button-rounded p-button-secondary p-button-outlined",onClick:function(t){return i.viewStream(e.data)},disabled:null===e.data.running},{default:M((function(){return[null===e.data.running?(Object(r["u"])(),Object(r["g"])(f,{key:0})):(Object(r["u"])(),Object(r["g"])(m,{key:1,icon:"eye"}))]})),_:2},1032,["onClick","disabled"]),e.data.running?(Object(r["u"])(),Object(r["g"])(c,{key:0,icon:"pi",class:"p-button-rounded p-button-secondary p-button-outlined",disabled:null===e.data.running,onClick:function(t){return i.stopStream(e.data)}},{default:M((function(){return[Object(r["k"])(m,{icon:"stop"})]})),_:2},1032,["disabled","onClick"])):Object(r["h"])("",!0)])]})),_:1})]})),_:1},8,["value"]),Object(r["k"])(b,{position:"top-center"}),Object(r["k"])(h,{class:"dialog new-stream",header:"Add New Stream",visible:o.newStreamDisplayModal,"onUpdate:visible":t[6]||(t[6]=function(e){return o.newStreamDisplayModal=e}),modal:!0,closeOnEscape:!0},{footer:M((function(){return[Object(r["M"])(Object(r["k"])("div",Q,[Object(r["k"])(f),X],512),[[r["J"],o.newStreamProcessing]]),Object(r["k"])("div",Y,[Object(r["k"])(c,{disabled:o.newStreamProcessing||""==o.newStreamData.alias||""==o.newStreamData.rtspUri,label:"Submit",autofocus:"",onClick:t[5]||(t[5]=function(e){return i.createStream()})},null,8,["disabled"])])]})),default:M((function(){return[Object(r["k"])("div",$,[Object(r["k"])("div",H,[G,Object(r["k"])(v,{id:"alias",modelValue:o.newStreamData.alias,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.newStreamData.alias=e}),placeholder:"Garage, Room, etc."},null,8,["modelValue"])]),Object(r["k"])("div",z,[K,Object(r["k"])(v,{id:"feed",modelValue:o.newStreamData.rtspUri,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.newStreamData.rtspUri=e}),placeholder:"rtsp://user:pass@192.168.0.150"},null,8,["modelValue"])])])]})),_:1},8,["visible"]),Object(r["k"])(h,{class:"dialog view-stream",visible:o.streamViewerDisplayModal,"onUpdate:visible":t[9]||(t[9]=function(e){return o.streamViewerDisplayModal=e}),modal:!0,closeOnEscape:!0,onHide:t[10]||(t[10]=function(e){return i.refreshStreamList()})},{header:M((function(){return[Object(r["k"])("h3",null,Object(r["G"])(o.activeVideoAlias),1),Object(r["k"])(c,{icon:"pi",class:"p-button-secondary p-button-rounded p-button-outlined",onClick:t[7]||(t[7]=function(e){return i.restartStream()})},{default:M((function(){return[Object(r["k"])(m,{icon:"sync"})]})),_:1})]})),default:M((function(){return[Object(r["k"])(w,{onIosExitFullscreen:t[8]||(t[8]=function(e){return o.streamViewerDisplayModal=!1}),ref:"videoStream","video-src":o.activeVideoSrc,onClick:i.playFullscreen},null,8,["video-src","onClick"])]})),_:1},8,["visible"]),Object(r["k"])(g)])})),ee={name:"Settings",data:function(){return{getListURI:"http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/list",stopURI:"http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/stop",startURI:"http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/start",streamUri:"http://"+window.destinations.activeDomain+":"+window.destinations.activePort,websocketUri:"ws://"+window.destinations.activeDomain+":"+window.destinations.activeWsPort,newStreamDisplayModal:!1,streamViewerDisplayModal:!1,streams:[],newStreamData:{alias:"foo",rtspUri:"bar"},newStreamProcessing:!1,activeVideoSrc:null,activeVideoAlias:null,listRefreshInterval:-1,primaryStream:null}},methods:{test:function(e){console.log(e)},restartStream:function(){this.$refs.videoStream.restartStream()},getBadgeValueAndSeverity:function(e){return!0===e.running?{value:"Running",severity:"success"}:!1===e.running?{value:"Stopped",severity:"danger"}:null===e.running?{value:"Starting",severity:"warning"}:void 0},refreshStreamList:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a="http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/getPrimaryStreamAlias",n.next=3,fetch(a);case 3:return r=n.sent,n.next=6,r.json();case 6:if(o=n.sent,t.primaryStream=o.primaryStreamAlias,!e){n.next=12;break}t.streams=e,n.next=15;break;case 12:return n.next=14,t.getStreams();case 14:t.streams=n.sent;case 15:t.streams.sort((function(e,t){return e.created>t.created?1:-1}));case 16:case"end":return n.stop()}}),n)})))()},stopStream:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch(t.stopURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alias:e.alias,remove:!1})});case 2:a=n.sent,a.ok?t.refreshStreamList():t.$toast.add({severity:"error",summary:"Stream stop failed",detail:"Stream for '"+e.alias+"' can't be stopped. Reason: "+a.statusText,life:3e3});case 4:case"end":return n.stop()}}),n)})))()},createStream:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.newStreamProcessing=!0,t.next=3,fetch(e.startURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rtspUri:e.newStreamData.rtspUri,alias:e.newStreamData.alias}),credentials:"include"});case 3:n=t.sent,n.ok?e.refreshStreamList():e.$toast.add({severity:"error",summary:"Stream creation failed",detail:"Stream for URI of '"+e.newStreamData.rtspUri+"' can't be created. Reason: "+n.statusText,life:3e3}),e.newStreamDisplayModal=!1,e.newStreamProcessing=!1;case 7:case"end":return t.stop()}}),t)})))()},addNewStream:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.newStreamData.alias="",e.newStreamData.rtspUri="",e.newStreamDisplayModal=!0;case 3:case"end":return t.stop()}}),t)})))()},getStreams:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.getListURI,{method:"GET",credentials:"include"});case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))()},removeStream:function(e,t){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n.$confirm.require({target:t.currentTarget,message:"Stop and remove stream?",accept:function(){o()},reject:function(){}}),o=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.alias,t.next=3,fetch(n.stopURI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alias:a,remove:!0})});case 3:r=t.sent,r.ok?n.refreshStreamList():n.$toast.add({severity:"error",summary:"Stream removal failed",detail:"Stream with alias of '"+a+"' can't be removed. Reason: "+r,life:3e3});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();case 2:case"end":return r.stop()}}),r)})))()},viewStream:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.running){n.next=8;break}t.streamViewerDisplayModal=!0,t.activeVideoAlias=e.alias,a=t.streamUri+"/"+e.streamUri,t.activeVideoSrc=a,setTimeout((function(){t.playFullscreen(null,document.querySelector("video"))}),100),n.next=12;break;case 8:return n.next=10,fetch(t.startURI,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({alias:e.alias})});case 10:r=n.sent,r.ok&&(e.running=!0,t.viewStream(e));case 12:case"end":return n.stop()}}),n)})))()},connectToWebSocket:function(){var e=this,t=-1;this.connection=new WebSocket(this.websocketUri),this.connection.onmessage=function(t){var n=JSON.parse(t.data);"stream-update"==n.type&&e.refreshStreamList(n.data)},this.connection.onopen=function(e){console.log("Successfully connected to the webcam websocket server...")},this.connection.onclose=function(n){t=setInterval((function(){clearInterval(t),e.connectToWebSocket()}),300)}},updatePrimaryStream:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/setPrimaryStreamAlias",t.next=3,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alias:e})});case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()},playFullscreen:function(e,t){var n;n=null==e?t:e.currentTarget.querySelector("video"),n.webkitSetPresentationMode("fullscreen"),n.addEventListener("webkitendfullscreen",(function(){setTimeout((function(){n.play()}),1e3)}))}},watch:{primaryStream:function(e){this.updatePrimaryStream(e)}},mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.refreshStreamList(),e.connectToWebSocket();case 2:case"end":return t.stop()}}),t)})))()}};n("2f9c"),n("5694");ee.render=Z,ee.__scopeId="data-v-65e1a483";var te=ee,ne=[{path:"/",name:"Home",component:te},{path:"/all",name:"All Streams",component:function(){return n.e("chunk-7a4c7ecf").then(n.bind(null,"cf5b"))}},{path:"/dash",name:"dash",component:function(){return n.e("chunk-276ea098").then(n.bind(null,"eff8"))}},{path:"/scratch",name:"scratch",component:function(){return n.e("chunk-22a6f45f").then(n.bind(null,"a964"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-0b623e3b").then(n.bind(null,"dd7b"))}}],ae=Object(V["a"])({history:Object(V["b"])("/"),routes:ne});ae.beforeEach((function(e,t,n){var a=e.query||t.query;"Login"===e.name||window.isAuth?n():(console.log("redirecting to login..."),n({name:"Login",query:a}))}));var re=ae;D["c"].add(C["c"],C["b"],C["e"],C["a"],C["d"]);var oe=Object(r["f"])(s).use(re);oe.use(c["a"]),oe.use(I["a"]),oe.use(L["a"]),oe.component("font-awesome-icon",T["a"]),oe.component("HlsVideo",R),oe.component("Badge",w["a"]),oe.component("ProgressSpinner",v["a"]),oe.component("ConfirmPopup",b["a"]),oe.component("InputText",u["a"]),oe.component("Button",d["a"]),oe.component("DataTable",l["a"]),oe.component("Column",m["a"]),oe.component("Toast",f["a"]),oe.component("Dialog",p["a"]),oe.component("RadioButton",h["a"]),oe.component("Password",x["a"]),oe.mount("#app"),window.destinations={localDomain:"192.168.0.135",localPort:"8000",localWsPort:"3030",remoteDomain:"flyingbits.ddns.net",remotePort:"13370",remoteWsPort:"13371",devDomain:"localhost",devPort:"8000",devWsPort:"3030",activeDomain:null,activePort:null,activeWsPort:null};var ie=new URLSearchParams(window.location.search),se=ie.get("env");window.location.host.indexOf(window.destinations.remoteDomain),"internet"==se?(window.destinations.activeDomain=window.destinations.remoteDomain,window.destinations.activePort=window.destinations.remotePort,window.destinations.activeWsPort=window.destinations.remoteWsPort):"dev"==se?(window.destinations.activeDomain=window.destinations.devDomain,window.destinations.activePort=window.destinations.devPort,window.destinations.activeWsPort=window.destinations.devWsPort):(window.destinations.activeDomain=window.destinations.localDomain,window.destinations.activePort=window.destinations.localPort,window.destinations.activeWsPort=window.destinations.localWsPort),window.isAuth=!1,window.evalAuth=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=A.a.get("token"),t){e.next=6;break}return e.next=4,_.a.getItem("token");case 4:t=e.sent,t&&A.a.set("token",t);case 6:if(t){e.next=10;break}window.isAuth=!1,e.next=20;break;case 10:return window.isAuth=!0,n="http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/validateToken",e.next=14,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 14:return a=e.sent,e.next=17,a.json();case 17:r=e.sent,console.log(r),r.valid||(A.a.remove("token"),window.location.reload());case 20:case"end":return e.stop()}}),e)}))),window.login=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.abrupt("return",new Promise(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(n,a){var r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="http://"+window.destinations.activeDomain+":"+window.destinations.activePort+"/login",e.next=3,fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pass:t})});case 3:return o=e.sent,e.next=6,o.json();case 6:return i=e.sent,A.a.set("token",i.token),e.prev=8,e.next=11,_.a.setItem("token",i.token);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](8),console.log(e.t0);case 16:evalAuth(),n(i.success);case 18:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t,n){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),evalAuth()},"5e30":function(e,t,n){"use strict";n("f08c")},a237:function(e,t,n){},c9d5:function(e,t,n){},db06:function(e,t,n){"use strict";n("c9d5")},dba8:function(e,t,n){},f08c:function(e,t,n){}});
//# sourceMappingURL=app.34124f92.js.map