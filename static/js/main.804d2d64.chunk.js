(this["webpackJsonpclicker-game"]=this["webpackJsonpclicker-game"]||[]).push([[0],{32:function(e,t,n){e.exports=n(47)},41:function(e,t,n){},42:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),i=n.n(r),o=n(13),s=(n(41),n(8)),l=n(23),u=n(24),d=n(31),k=n(30),f=(n(42),n(43),n(2)),p=n(7),v=n(25),h=n(26),m=n.n(h),g=n(20),C=n(27),w=n.n(C),b=n(28),y=n.n(b),A=[v.a,m.a],j={key:"root",storage:w.a,stateReconciler:y.a},E=Object(p.d)(Object(g.a)(j,(function(e,t){switch(t.type){case"updateClicks":return Object(s.a)(Object(s.a)({},e),{},{clicks:t.payload});case"updateAC":return Object(s.a)(Object(s.a)({},e),{},{autoClickers:t.payload});default:return e}})),{isLoggedIn:!1},p.a.apply(void 0,A)),O=Object(g.b)(E),N=function(){return E},S=function(e){Object(d.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={clicks:a.props.clicks||0,autoClickers:a.props.autoClickers||0},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){for(var e=this,t=0;t<this.state.autoClickers;t++)window.setInterval((function(){return e.clickerAdd()}),1e3)}},{key:"clickerAdd",value:function(){var e=this;this.setState({clicks:this.state.clicks+1},(function(){e.props.updateClicks(e.state.clicks)}))}},{key:"autoClickerAdd",value:function(){var e=this;this.setState({autoClickers:this.state.autoClickers+1},(function(){e.props.updateAutoClickers(e.state.autoClickers)})),window.setInterval((function(){return e.clickerAdd()}),1e3)}},{key:"renderClickButton",value:function(){var e=this;return c.a.createElement("div",{className:"clicker",onClick:function(){return e.clickerAdd()}},"Make Paper")}},{key:"renderAutoClickButton",value:function(){var e=this;return c.a.createElement("div",{className:"clicker",onClick:function(){return e.autoClickerAdd()}},"Buy Auto Paper Maker")}},{key:"renderClicks",value:function(){return c.a.createElement("div",null,c.a.createElement("p",{className:"clicks"},"Total Paper: ",this.state.clicks),c.a.createElement("p",{className:"clicks"},"Paper Per Second: ",this.state.autoClickers))}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"playSide"},this.renderClickButton(),this.renderAutoClickButton()),c.a.createElement("div",{className:"statSide"},this.renderClicks()))}}]),n}(a.Component),P=Object(f.d)(Object(o.b)((function(e){return Object(s.a)({},e)}),(function(e){return{updateClicks:function(t){e(function(e){return{type:"updateClicks",payload:e}}(t))},updateAutoClickers:function(t){e(function(e){return{type:"updateAC",payload:e}}(t))}}}))(S)),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var I=n(16),R=n(29);N();var x;x=P,i.a.render(c.a.createElement(o.a,{store:E},c.a.createElement(R.PersistGate,{loading:"",persistor:O},c.a.createElement(I.a,null,c.a.createElement(x,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/clicker-game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/clicker-game","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.804d2d64.chunk.js.map