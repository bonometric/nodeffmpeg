(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3075e49c"],{"0cb2":function(t,e,n){var r=n("7b0b"),c=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,o,s,l){var h=n+t.length,d=o.length,f=u;return void 0!==s&&(s=r(s),f=a),i.call(l,f,(function(r,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(h);case"<":a=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return r;if(u>d){var l=c(u/10);return 0===l?r:l<=d?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):r}a=o[u-1]}return void 0===a?"":a}))}},1213:function(t,e,n){"use strict";n("29c0")},"245a":function(t,e,n){"use strict";var r=n("7a23"),c={class:"menu-overlay"},i={key:0,class:"sources-menu"},a=Object(r["k"])("div",{class:"menu-header"},"Camera Source",-1),u={class:"cam-label-wrapper"};function o(t,e,n,o,s,l){var h=Object(r["C"])("hls-video");return Object(r["u"])(),Object(r["g"])("div",{class:"container",onClick:e[2]||(e[2]=function(){return l.clickContainer&&l.clickContainer.apply(l,arguments)})},[Object(r["k"])(h,{class:["video-stream",{blurred:1==s.menuState}],"video-src":s.videoSrc},null,8,["class","video-src"]),Object(r["k"])("div",c,[Object(r["k"])(r["c"],{name:"menu-transition"},{default:Object(r["L"])((function(){return[1==s.menuState?(Object(r["u"])(),Object(r["g"])("div",i,[a,(Object(r["u"])(!0),Object(r["g"])(r["a"],null,Object(r["A"])(s.sources,(function(t,e){return Object(r["u"])(),Object(r["g"])("div",{onClick:function(t){return l.selectSource(e,t)},class:"source-button",key:e},Object(r["G"])(l.toTitleCase(t.alias)),9,["onClick"])})),128))])):Object(r["h"])("",!0)]})),_:1})]),Object(r["k"])("div",u,[Object(r["k"])(r["c"],{name:"cam-label-transition"},{default:Object(r["L"])((function(){return[0==s.menuState?(Object(r["u"])(),Object(r["g"])("div",{key:0,onClick:e[1]||(e[1]=function(){return l.showSourcesMenu&&l.showSourcesMenu.apply(l,arguments)}),class:"cam-label"},Object(r["G"])(l.camLabel),1)):Object(r["h"])("",!0)]})),_:1})])])}n("ac1f"),n("5319");var s={data:function(){return{sources:null,currentSourceIndex:0,videoSrc:"",menuState:0}},watch:{camSources:function(t){this.sources=t,this.currentSourceIndex=this.initIndex,this.applySourceIndex()}},props:["streamUri","camSources","fullScreen","initIndex"],methods:{toTitleCase:function(t){return t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))},applySourceIndex:function(){this.videoSrc=this.streamUri+"/"+this.sources[this.currentSourceIndex].streamUri},selectSource:function(t,e){this.currentSourceIndex=t,this.applySourceIndex(),this.menuState=0,e.stopImmediatePropagation()},showSourcesMenu:function(t){this.menuState=1,t.stopImmediatePropagation()},clickContainer:function(t){this.fullScreen?0==this.menuState?this.emitExit(t):this.menuState=0:this.emitEnter(t)},emitEnter:function(t){this.$emit("enter")},emitExit:function(t){this.$emit("exit"),t.stopImmediatePropagation()}},computed:{camLabel:function(){return this.toTitleCase(this.sources?this.sources[this.currentSourceIndex].alias:"")}},mounted:function(){console.log(this.streamUri)}};n("1213");s.render=o;e["a"]=s},"29c0":function(t,e,n){},5319:function(t,e,n){"use strict";var r=n("d784"),c=n("825a"),i=n("50c4"),a=n("a691"),u=n("1d80"),o=n("8aa5"),s=n("0cb2"),l=n("14c3"),h=Math.max,d=Math.min,f=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var m=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=r.REPLACE_KEEPS_$0,v=m?"$":"$0";return[function(n,r){var c=u(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,c,r):e.call(String(c),n,r)},function(t,r){if(!m&&p||"string"===typeof r&&-1===r.indexOf(v)){var u=n(e,t,this,r);if(u.done)return u.value}var b=c(t),S=String(this),g="function"===typeof r;g||(r=String(r));var j=b.global;if(j){var O=b.unicode;b.lastIndex=0}var x=[];while(1){var k=l(b,S);if(null===k)break;if(x.push(k),!j)break;var w=String(k[0]);""===w&&(b.lastIndex=o(S,i(b.lastIndex),O))}for(var I="",C=0,E=0;E<x.length;E++){k=x[E];for(var U=String(k[0]),P=h(d(a(k.index),S.length),0),y=[],R=1;R<k.length;R++)y.push(f(k[R]));var $=k.groups;if(g){var A=[U].concat(y,P,S);void 0!==$&&A.push($);var L=String(r.apply(void 0,A))}else L=s(U,S,P,y,$,r);P>=C&&(I+=S.slice(C,P)+L,C=P+U.length)}return I+S.slice(C)}]}))},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},a964:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),c={class:"container"};function i(t,e,n,i,a,u){var o=Object(r["C"])("cam-viewer");return Object(r["u"])(),Object(r["g"])("div",c,[Object(r["k"])(o,{onExit:e[1]||(e[1]=function(t){return u.handleExit()}),camSources:a.camSources},null,8,["camSources"])])}var a=n("1da1"),u=(n("96cf"),n("d3b7"),n("245a")),o={data:function(){return{publicPath:"/",getListURI:"http://"+domain+":"+httpPort+"/list",stopURI:"http://"+domain+":"+httpPort+"/stop",startURI:"http://"+domain+":"+httpPort+"/start",streamUri:"http://"+domain+":"+httpPort,camSources:[]}},components:{CamViewer:u["a"]},methods:{getStreams:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.getListURI);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))()},handleExit:function(){}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getStreams();case 2:t.camSources=e.sent;case 3:case"end":return e.stop()}}),e)})))()}};n("b747");o.render=i;e["default"]=o},b747:function(t,e,n){"use strict";n("b75e")},b75e:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3075e49c.d642bf66.js.map