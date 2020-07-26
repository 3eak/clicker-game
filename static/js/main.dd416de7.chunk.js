(this["webpackJsonpclicker-game"]=this["webpackJsonpclicker-game"]||[]).push([[0],{31:function(e,t,a){e.exports=a(47)},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},42:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),o=a.n(r),i=a(13),c=(a(40),a(2)),l=a(23),u=a(24),p=a(30),d=a(29),h=(a(41),a(42),a(3)),k=a(8),m=a(25),y=(a(43),a(20)),f=a(26),v=a.n(f),S=a(27),w=a.n(S),E=[m.a],P={key:"root",storage:v.a,stateReconciler:w.a},b=Object(k.d)(Object(y.a)(P,(function(e,t){switch(t.type){case"updatePaper":return Object(c.a)(Object(c.a)({},e),{},{paper:t.payload});case"updateAutoClickers":return Object(c.a)(Object(c.a)({},e),{},{autoClickers:t.payload});case"updateMoney":return Object(c.a)(Object(c.a)({},e),{},{money:t.payload});case"updateSalePrice":return Object(c.a)(Object(c.a)({},e),{},{salePrice:t.payload});case"updateStock":return Object(c.a)(Object(c.a)({},e),{},{stock:t.payload});case"updateWood":return Object(c.a)(Object(c.a)({},e),{},{wood:t.payload});case"updateStage":return Object(c.a)(Object(c.a)({},e),{},{stage:t.payload});case"updateEmployees":return Object(c.a)(Object(c.a)({},e),{},{employees:t.payload});case"updateResearch":return Object(c.a)(Object(c.a)({},e),{},{research:t.payload});case"updateThinkSpeed":return Object(c.a)(Object(c.a)({},e),{},{thinkSpeed:t.payload});default:return e}})),{},k.a.apply(void 0,E)),g=Object(y.b)(b),C=function(){return b},j=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={paper:n.props.paper||0,stock:n.props.stock||0,autoClickers:n.props.autoClickers||0,money:n.props.money||0,salePrice:n.props.salePrice||.25,interest:.08/n.props.salePrice,wood:0===n.props.wood?0:n.props.wood||1e3,stage:n.props.stage||1,employees:n.props.employees||1,research:n.props.research||0,thinkSpeed:n.props.thinkSpeed||1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.autoClickers>0&&window.setInterval((function(){return e.click()}),1e3/this.state.autoClickers),this.state.stage>1&&this.updateThinker(),this.timedEvents()}},{key:"calculateInterest",value:function(){this.setState({interest:.08/this.state.salePrice})}},{key:"timedEvents",value:function(){var e=this;window.setInterval((function(){e.calculateInterest(),Math.random()<.08/e.state.salePrice&&e.sellPaper(Math.floor(Math.random()/e.state.salePrice))}),100)}},{key:"click",value:function(){var e=this;if(this.state.wood>0){var t=Math.random();this.setState({paper:this.state.paper+1,stock:this.state.stock+1,wood:this.state.wood-t>0?this.state.wood-t:0},(function(){e.props.updatePaper(e.state.paper),e.props.updateStock(e.state.stock),e.props.updateWood(e.state.wood)}))}}},{key:"think",value:function(){var e=this;this.setState({research:this.state.research+1},(function(){e.props.updateResearch(e.state.research)}))}},{key:"updateThinker",value:function(){var e=this;this.timerId&&window.clearInterval(this.timerId),this.timerId=window.setInterval((function(){e.think()}),1e3/Math.pow(this.state.thinkSpeed,this.state.employees+this.state.thinkSpeed))}},{key:"autoClickerAdd",value:function(){var e=this;this.setState({autoClickers:this.state.autoClickers+1,money:this.state.money-25},(function(){e.props.updateAutoClickers(e.state.autoClickers),e.props.updateMoney(e.state.money)})),window.setInterval((function(){return e.click()}),1e3)}},{key:"chopWood",value:function(){var e=this;this.setState({wood:this.state.wood+800,money:this.state.money-50},(function(){e.props.updateWood(e.state.wood),e.props.updateMoney(e.state.money)})),window.setInterval((function(){return e.click()}),1e3)}},{key:"sellPaper",value:function(e){var t=this,a=e>10?10:e;this.state.stock>0&&this.setState({stock:a<this.state.stock?this.state.stock-a:0,money:a<this.state.stock?this.state.money+this.state.salePrice*a:this.state.money+(this.state.salePrice*a- -1*(this.state.stock-a)*this.state.salePrice)},(function(){t.props.updateMoney(t.state.money),t.props.updateStock(t.state.stock)}))}},{key:"hireEmployees",value:function(){var e=this;this.setState({employees:this.state.employees+1,money:this.state.money-500},(function(){e.props.updateEmployees(e.state.employees),e.props.updateMoney(e.state.money),e.updateThinker()}))}},{key:"trainEmployees",value:function(){var e=this;this.setState({thinkSpeed:this.state.thinkSpeed+1,money:this.state.money-1e3},(function(){e.props.updateThinkSpeed(e.state.thinkSpeed),e.props.updateMoney(e.state.money),e.updateThinker()}))}},{key:"increaseSalePrice",value:function(){var e=this;this.setState({salePrice:this.state.salePrice+.01},(function(){e.props.updateSalePrice(e.state.salePrice)}))}},{key:"decreaseSalePrice",value:function(){var e=this;this.state.salePrice>.01&&this.setState({salePrice:this.state.salePrice-.01},(function(){e.props.updateSalePrice(e.state.salePrice)}))}},{key:"renderClickButton",value:function(){var e=this;return s.a.createElement("div",{className:"clicker",onClick:function(){return e.click()}},"Make Paper")}},{key:"renderAutoClickButton",value:function(){var e=this;return s.a.createElement("div",{className:this.state.money>25?"clicker":"clicker disabled",onClick:this.state.money>25?function(){return e.autoClickerAdd()}:""},"Buy Auto Paper Maker (\xa325)")}},{key:"renderChopWoodButton",value:function(){var e=this;return s.a.createElement("div",{className:this.state.money>50?"clicker":"clicker disabled",onClick:this.state.money>50?function(){return e.chopWood()}:""},"Chop Down Wood (\xa350)")}},{key:"renderResearchTeamButton",value:function(){var e=this;return s.a.createElement("div",{className:this.state.money>1e3?"clicker":"clicker disabled",onClick:this.state.money>1e3?function(){e.setState({stage:2,money:e.state.money-1e3},(function(){e.props.updateStage(e.state.stage),e.props.updateMoney(e.state.money)}))}:""},"Buy Research Team (\xa31000)")}},{key:"renderSaleButtons",value:function(){var e=this;return s.a.createElement("div",{className:"saleButtons"},s.a.createElement("div",{className:"clicker",onClick:function(){return e.decreaseSalePrice()}},"Decrease Price"),s.a.createElement("div",{className:"clicker",onClick:function(){return e.increaseSalePrice()}},"Increase Price"))}},{key:"renderPlaySection",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("p",{className:"clicks"},"Total Paper: ",this.state.paper),s.a.createElement("p",{className:"clicks"},"Paper Per Second: ",this.state.autoClickers),s.a.createElement("p",{className:"clicks"},"Remaining Wood: ",this.state.wood.toFixed(2)),this.renderClickButton(),this.state.paper>100?this.renderAutoClickButton():"",this.state.paper>500?this.renderChopWoodButton():"",this.state.paper>2e3&&1===this.state.stage?this.renderResearchTeamButton():"",this.state.stage>1?s.a.createElement("div",null,s.a.createElement("div",{className:"clicker",onClick:function(){return e.hireEmployees()}},"Hire Employees (\xa3500)"),s.a.createElement("div",{className:"clicker",onClick:function(){return e.trainEmployees()}},"Train Employees (\xa31000)")):"")}},{key:"renderFinancesSection",value:function(){return s.a.createElement("div",null,s.a.createElement("p",{className:"clicks"},"Stock: ",this.state.stock),s.a.createElement("p",{className:"clicks"},"Money: \xa3",this.state.money.toFixed(2)),s.a.createElement("p",{className:"clicks"},"Public Interest: ",(100*this.state.interest).toFixed(2),"%"),s.a.createElement("p",{className:"clicks"},"Selling Price: \xa3",this.state.salePrice.toFixed(2)),this.renderSaleButtons())}},{key:"renderResearchSection",value:function(){return s.a.createElement("div",null,s.a.createElement("p",{className:"clicks"},"Research: ",this.state.research),s.a.createElement("p",{className:"clicks"},"Employees: ",this.state.employees),s.a.createElement("p",{className:"clicks"},"Think Speed: ",this.state.thinkSpeed))}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:this.state.paper>10?"finances":"finances hidden"},this.renderFinancesSection()),s.a.createElement("div",{className:"play"},this.renderPlaySection()),s.a.createElement("div",{className:this.state.stage>1?"researchTeam":"researchTeam hidden"},this.renderResearchSection()))}}]),a}(n.Component),O=Object(h.d)(Object(i.b)((function(e){return Object(c.a)({},e)}),(function(e){return{updatePaper:function(t){e(function(e){return{type:"updatePaper",payload:e}}(t))},updateAutoClickers:function(t){e(function(e){return{type:"updateAutoClickers",payload:e}}(t))},updateMoney:function(t){e(function(e){return{type:"updateMoney",payload:e}}(t))},updateSalePrice:function(t){e({type:"updateSalePrice",payload:t})},updateStock:function(t){e(function(e){return{type:"updateStock",payload:e}}(t))},updateWood:function(t){e(function(e){return{type:"updateWood",payload:e}}(t))},updateStage:function(t){e(function(e){return{type:"updateStage",payload:e}}(t))},updateEmployees:function(t){e(function(e){return{type:"updateEmployees",payload:e}}(t))},updateResearch:function(t){e(function(e){return{type:"updateResearch",payload:e}}(t))},updateThinkSpeed:function(t){e(function(e){return{type:"updateThinkSpeed",payload:e}}(t))}}}))(j)),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M=a(16),T=a(28);C();var B;B=O,o.a.render(s.a.createElement(i.a,{store:b},s.a.createElement(T.PersistGate,{loading:"",persistor:g},s.a.createElement(M.a,null,s.a.createElement(B,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/paper-clicker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/paper-clicker","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.dd416de7.chunk.js.map