(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27da976e"],{"0034":function(e,t,r){"use strict";r("7fce")},"0cb2":function(e,t,r){var n=r("7b0b"),c=Math.floor,a="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,u,s,l){var f=r+e.length,h=u.length,d=o;return void 0!==s&&(s=n(s),d=i),a.call(l,d,(function(n,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(f);case"<":i=s[a.slice(1,-1)];break;default:var o=+a;if(0===o)return n;if(o>h){var l=c(o/10);return 0===l?n:l<=h?void 0===u[l-1]?a.charAt(1):u[l-1]+a.charAt(1):n}i=u[o-1]}return void 0===i?"":i}))}},"245a":function(e,t,r){"use strict";var n=r("7a23"),c={class:"menu-overlay"},a={key:0,class:"sources-menu"},i=Object(n["k"])("div",{class:"menu-header"},"Camera Source",-1),o={class:"cam-label-wrapper"},u={key:0,class:"top-label-menu"};function s(e,t,r,s,l,f){var h=Object(n["C"])("hls-video");return Object(n["u"])(),Object(n["g"])("div",{class:"container",onClick:t[3]||(t[3]=function(){return f.clickContainer&&f.clickContainer.apply(f,arguments)})},[Object(n["k"])(h,{class:["video-stream",{blurred:1==l.menuState}],"video-src":l.videoSrc},null,8,["class","video-src"]),Object(n["k"])("div",c,[Object(n["k"])(n["c"],{name:"menu-transition"},{default:Object(n["L"])((function(){return[1==l.menuState?(Object(n["u"])(),Object(n["g"])("div",a,[i,(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(l.sources,(function(e,t){return Object(n["u"])(),Object(n["g"])("div",{onClick:function(e){return f.selectSource(t,e)},class:"source-button",key:t},Object(n["G"])(f.toTitleCase(e.alias)),9,["onClick"])})),128))])):Object(n["h"])("",!0)]})),_:1})]),Object(n["k"])("div",o,[Object(n["k"])(n["c"],{name:"cam-label-transition"},{default:Object(n["L"])((function(){return[0==l.menuState?(Object(n["u"])(),Object(n["g"])("div",u,[Object(n["k"])("div",{onClick:t[1]||(t[1]=function(){return f.showSourcesMenu&&f.showSourcesMenu.apply(f,arguments)}),class:"cam-label"},Object(n["G"])(f.camLabel),1),Object(n["k"])("div",{onClick:t[2]||(t[2]=function(){return f.refreshSource&&f.refreshSource.apply(f,arguments)}),class:"cam-label pi pi-refresh"})])):Object(n["h"])("",!0)]})),_:1})])])}r("a9e3"),r("ac1f"),r("5319");var l={data:function(){return{sources:null,currentSourceIndex:0,videoSrc:"",menuState:0}},watch:{camSources:function(e){this.sources=e,this.currentSourceIndex=this.initIndex,this.applySourceIndex()}},props:{streamUri:String,camSources:Array,fullScreen:Boolean,initIndex:Number},methods:{toTitleCase:function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},applySourceIndex:function(){this.videoSrc=this.streamUri+"/"+this.sources[this.currentSourceIndex].streamUri},refreshSource:function(e){var t=this;this.videoSrc=null,e&&e.stopImmediatePropagation(),setTimeout((function(){t.applySourceIndex()}),100)},selectSource:function(e,t){this.currentSourceIndex=e,this.applySourceIndex(),this.menuState=0,t.stopImmediatePropagation()},showSourcesMenu:function(e){this.menuState=1,e.stopImmediatePropagation()},clickContainer:function(e){this.fullScreen?0==this.menuState?this.emitExit(e):this.menuState=0:this.emitEnter(e)},emitEnter:function(e){this.$emit("enter")},emitExit:function(e){this.$emit("exit"),e.stopImmediatePropagation()}},computed:{camLabel:function(){return this.toTitleCase(this.sources?this.sources[this.currentSourceIndex].alias:"")}},mounted:function(){var e=this;console.log(this.streamUri),setInterval((function(){e.refreshSource()}),6e4)}};r("0034");l.render=s;t["a"]=l},5319:function(e,t,r){"use strict";var n=r("d784"),c=r("825a"),a=r("50c4"),i=r("a691"),o=r("1d80"),u=r("8aa5"),s=r("0cb2"),l=r("14c3"),f=Math.max,h=Math.min,d=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,v=p?"$":"$0";return[function(r,n){var c=o(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,c,n):t.call(String(c),r,n)},function(e,n){if(!p&&m||"string"===typeof n&&-1===n.indexOf(v)){var o=r(t,e,this,n);if(o.done)return o.value}var b=c(e),S=String(this),g="function"===typeof n;g||(n=String(n));var I=b.global;if(I){var O=b.unicode;b.lastIndex=0}var x=[];while(1){var j=l(b,S);if(null===j)break;if(x.push(j),!I)break;var E=String(j[0]);""===E&&(b.lastIndex=u(S,a(b.lastIndex),O))}for(var k="",w=0,C=0;C<x.length;C++){j=x[C];for(var N=String(j[0]),y=f(h(i(j.index),S.length),0),A=[],P=1;P<j.length;P++)A.push(d(j[P]));var R=j.groups;if(g){var U=[N].concat(A,y,S);void 0!==R&&U.push(R);var _=String(n.apply(void 0,U))}else _=s(N,S,y,A,R,n);y>=w&&(k+=S.slice(w,y)+_,w=y+N.length)}return k+S.slice(w)}]}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),c=r("5899"),a="["+c+"]",i=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),u=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(i,"")),2&e&&(r=r.replace(o,"")),r}};e.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(e,t,r){var n=r("861d"),c=r("d2bb");e.exports=function(e,t,r){var a,i;return c&&"function"==typeof(a=t.constructor)&&a!==r&&n(i=a.prototype)&&i!==r.prototype&&c(e,i),e}},"7fce":function(e,t,r){},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},a964:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c={class:"container"};function a(e,t,r,a,i,o){var u=Object(n["C"])("cam-viewer");return Object(n["u"])(),Object(n["g"])("div",c,[Object(n["k"])(u,{onExit:t[1]||(t[1]=function(e){return o.handleExit()}),camSources:i.camSources},null,8,["camSources"])])}var i=r("1da1"),o=(r("96cf"),r("d3b7"),r("245a")),u={data:function(){return{publicPath:"/",getListURI:"http://"+domain+":"+httpPort+"/list",stopURI:"http://"+domain+":"+httpPort+"/stop",startURI:"http://"+domain+":"+httpPort+"/start",streamUri:"http://"+domain+":"+httpPort,camSources:[]}},components:{CamViewer:o["a"]},methods:{getStreams:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.getListURI);case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t)})))()},handleExit:function(){}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getStreams();case 2:e.camSources=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};r("b747");u.render=a;t["default"]=u},a9e3:function(e,t,r){"use strict";var n=r("83ab"),c=r("da84"),a=r("94ca"),i=r("6eeb"),o=r("5135"),u=r("c6b6"),s=r("7156"),l=r("c04e"),f=r("d039"),h=r("7c73"),d=r("241c").f,p=r("06cf").f,m=r("9bf2").f,v=r("58a8").trim,b="Number",S=c[b],g=S.prototype,I=u(h(g))==b,O=function(e){var t,r,n,c,a,i,o,u,s=l(e,!1);if("string"==typeof s&&s.length>2)if(s=v(s),t=s.charCodeAt(0),43===t||45===t){if(r=s.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+s}for(a=s.slice(2),i=a.length,o=0;o<i;o++)if(u=a.charCodeAt(o),u<48||u>c)return NaN;return parseInt(a,n)}return+s};if(a(b,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var x,j=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof j&&(I?f((function(){g.valueOf.call(r)})):u(r)!=b)?s(new S(O(t)),r,j):O(t)},E=n?d(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;E.length>k;k++)o(S,x=E[k])&&!o(j,x)&&m(j,x,p(S,x));j.prototype=g,g.constructor=j,i(c,b,j)}},b747:function(e,t,r){"use strict";r("b75e")},b75e:function(e,t,r){}}]);
//# sourceMappingURL=chunk-27da976e.0103a437.js.map