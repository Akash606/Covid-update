(this["webpackJsonpcovid-update"]=this["webpackJsonpcovid-update"]||[]).push([[0],{20:function(e,a,t){e.exports=t(48)},25:function(e,a,t){},26:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},45:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),s=t.n(r),l=(t(25),t(26),t(2)),o=t.n(l),i=t(3),m=t(4),u=t(15),d=t.n(u).a.create({baseURL:"https://data.nepalcorona.info"}),v=function(e){return c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title"}," ",e.active.title),c.a.createElement("p",{className:"card-text"},"Ward: ",e.active.ward," "))))},p=function(e){var a=Object(n.useState)([""]),t=Object(m.a)(a,2),r=t[0],s=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(i.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.get(e.hospital);case 2:return t=a.sent,s(t.data),console.log(t.data),a.abrupt("return",t);case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e.hospital]),c.a.createElement("div",{className:"row"},r.map((function(e){return c.a.createElement(v,{active:e})})))},f=(t(45),t(46),t(47),function(e){return c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title"},"Province ",e.active.province||e.active.title_np),c.a.createElement("p",{className:"card-text"},e.active.count||e.active.ans_np," "))))}),h=function(e){var a=Object(n.useState)([""]),t=Object(m.a)(a,2),r=t[0],s=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(i.a)(o.a.mark((function a(){var t,n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.fetchUrl){a.next=8;break}return a.next=3,d.get(e.fetchUrl);case 3:return t=a.sent,s(t.data.province.active),a.abrupt("return",t);case 8:if(!e.active){a.next=14;break}return a.next=11,d.get(e.active);case 11:return n=a.sent,s(n.data.province.cases),a.abrupt("return",n);case 14:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e.fetchUrl]),c.a.createElement("div",{className:"row"},r.map((function(e){return c.a.createElement(f,{Key:e.count,active:e})})))},E=t(16),b=t(17),N=t(19),w=t(18),y=function(e){Object(N.a)(t,e);var a=Object(w.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{className:"display-3"},"Covid-19 Updates"),c.a.createElement("p",{className:"lead"},"#Stay Home Stay Safe"),c.a.createElement("hr",{className:"my-2"}),c.a.createElement("p",{className:"lead"},c.a.createElement("a",{className:"text-center text-style-none",href:"https://www.facebook.com/akash.sah.2017/",role:"button"},"Developed By Akash")))}}]),t}(c.a.Component),x={providence:"/api/v1/covid/summary",fqa:"/api/v1/faqs",hospital:"/api/v1/resources/health"};var k=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(y,null),c.a.createElement("div",{className:"Province"},c.a.createElement("h1",{className:"lead text-black-50"},"Nepal Acive Cases Updates By Province")),c.a.createElement(h,{fetchUrl:x.providence}),c.a.createElement("hr",null),c.a.createElement("div",{className:"Province"},c.a.createElement("h1",{className:"lead text-black-50"},"Nepal Total Cases Updates By Province")),c.a.createElement(h,{active:x.providence}),c.a.createElement("div",{className:"Fqa"},c.a.createElement("h1",{className:"lead text-black-50"},"Hospital")),c.a.createElement(p,{hospital:x.hospital}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);