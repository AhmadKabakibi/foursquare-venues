(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n(82)},41:function(e,t,n){},64:function(e,t,n){},67:function(e,t,n){},72:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(12),c=n.n(r),i=(n(41),n(43),n(95)),s=n(97),u=n(98),l=n(13),d=n(14),f=n(34),m=n(29),g=n(35),h=n(30),v=n.n(h),E=n(31),p=n.n(E),w=function(){function e(){Object(l.a)(this,e),this.BASE_URL="https://api.foursquare.com/v2/venues/search",this.CLIENT_ID="H1AOKMH3Z5KKBUL5RQ2BOJHYRN104NOILNARRKJJWDXIGEBP",this.CLIENT_SECRET="BEKFT3CKRC5RCEWYBHYPUO4QUFSIJ5F0VJT3E0CEUVZQWVSR",this.defaultRange=250,this.limit=50,this.userLocation=window.sessionStorage?window.sessionStorage.getItem("userLocation"):null}return Object(d.a)(e,[{key:"getUserLocation",value:function(){var e=this;return new Promise(function(t,n){e.userLocation&&t(e.userLocation);navigator.geolocation.getCurrentPosition(function(n){e.userLocation="".concat(n.coords.latitude,",").concat(n.coords.longitude),window.sessionStorage.setItem("userLocation",e.userLocation),t(e.userLocation)},function(e){n(e)})})}},{key:"getVenues",value:function(e,t){var n=this;return new Promise(function(a,o){n.getUserLocation().then(function(){e=parseInt(e,10)||n.defaultRange,p()(v.a.get("".concat(n.BASE_URL,"?client_id=").concat(n.CLIENT_ID,"&client_secret=").concat(n.CLIENT_SECRET,"&ll=").concat(n.userLocation,"&radius=").concat(e,"&query=").concat(t,"&limit=").concat(n.limit,"&v=").concat(n._apiVersion())).then(function(e){a(e.data.response)}).catch(function(e){o(e.message)}),300)})})}},{key:"_apiVersion",value:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return String(1e4*t+100*n+a)}}]),e}(),y=n(96),b=n(92),R=n(93),k=n(94),L=(n(64),n(67),n(84)),N=n(85),S=n(86),C=n(87),I=n(88),U=n(89),V=n(90),q=function(e){var t=e.data;return o.a.createElement(L.a,{onClick:function(e){return function(){return window.open("https://www.google.com/maps/search/?api=1&query=".concat(encodeURI(e.name),"%20").concat(encodeURI(e.location.formattedAddress[0])))}}(t)},o.a.createElement(N.a,{style:function(e){return{backgroundImage:"url(".concat(function(e){if(e.categories[0]&&e.categories[0].icon)return"".concat(e.categories[0].icon.prefix,"64").concat(e.categories[0].icon.suffix)}(e),")")}}(t)},t.categories[0]&&t.categories[0].name),o.a.createElement(S.a,null,o.a.createElement(C.a,null,t.name),o.a.createElement(I.a,null,t.location.address),o.a.createElement(I.a,null,o.a.createElement(U.a,{color:"link"},t.location.distance," ",o.a.createElement(V.a,{color:"secondary"},"meter")))))},O=n(91),j=(n(72),function(e){var t=e.venues;return o.a.createElement(O.a,null,t.map(function(e){return o.a.createElement(q,{data:e,key:e.id})}))}),A=function(e){var t=e.error;return o.a.createElement(y.a,{color:"danger"},t," ... please try again )")},B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(f.a)(this,Object(m.a)(t).call(this,e))).foursquare=new w,n.state={query:"",venues:[],noResults:!1,radius:2e3,showingResults:0,total:0,error:""},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getVenues()}},{key:"getVenues",value:function(){var e=this;this.foursquare.getVenues(this.state.radius,this.state.query).then(function(t){e.setState({noResults:!t.length}),e.setState({showingResults:t.length,total:t.length,venues:Object.values(t)[0]})}).catch(function(t){e.setState({error:t})})}},{key:"onKeyUp",value:function(e){"Enter"===e.key&&e.target.blur(),this.setState({query:e.target.value}),this.getVenues()}},{key:"renderVenues",value:function(){return this.state.venues.length?o.a.createElement(j,{venues:this.state.venues}):this.state.noResults?o.a.createElement(y.a,{color:"primary"},"No venues found nearby you."):o.a.createElement("div",null,o.a.createElement("div",{className:"loader"}),o.a.createElement("div",{className:"dot"}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.total,r=t.radius,c=t.error;return o.a.createElement("div",null,o.a.createElement("div",{className:"container"},c&&o.a.createElement(A,{error:c}),o.a.createElement("div",{className:"text-center"},o.a.createElement("h1",{className:"display-4"},"Venues NearBy"),o.a.createElement("p",{className:"lead mb-4"},"Find venues near you"),o.a.createElement(b.a,{className:"mb-5",onSubmit:function(e){return e.preventDefault()}},o.a.createElement(R.a,null,o.a.createElement(k.a,{type:"text",id:"query",placeholder:"ex: food, ,bar , gym ...",onChange:this.onKeyUp.bind(this),value:n})),o.a.createElement(R.a,null,o.a.createElement("p",{className:"range-field"},o.a.createElement("input",{className:"custom-range",type:"range",id:"slider",min:"1",max:"5000",value:r,onChange:function(t){return e.setState({radius:t.target.value})},onMouseUp:function(t){return e.getVenues()}}))),o.a.createElement("p",null,"Showing ",o.a.createElement("strong",null,this.state.showingResults)," of ",a," ","venues found"," ",n?o.a.createElement("span",null," ","for ",o.a.createElement("strong",null,n)," "):null," ","within ",o.a.createElement("strong",null,r/1e3)," KM."))),this.renderVenues()))}}]),t}(a.Component),T=function(){return o.a.createElement(i.a,{basename:"/foursquare-venues"},o.a.createElement(s.a,null,o.a.createElement(u.a,{exact:!0,path:"/",component:B})))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(T,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/foursquare-venues",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/foursquare-venues","/service-worker.js");W?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):_(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):_(t,e)})}}()}},[[36,2,1]]]);
//# sourceMappingURL=main.4062d4e1.chunk.js.map