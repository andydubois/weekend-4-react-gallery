(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(44)},23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(16),i=n.n(a),r=(n(23),n(8)),l=n(17),s=n(2),u=n(3),p=n(5),h=n(4),d=n(6),f=(n(24),n(7)),g=n.n(f),m=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={pictureShowing:!0},n.clickPicture=function(){console.log("picture clicked"),n.setState({pictureShowing:!n.state.pictureShowing})},n.flipPicture=function(){return!0===n.state.pictureShowing?c.a.createElement("div",{className:"displayedContent"},c.a.createElement("div",{className:"pictureDiv",key:n.props.picture.id},c.a.createElement("img",{onClick:n.clickPicture,src:n.props.picture.path,alt:"",className:"pictureBox",key:n.props.picture.id}),c.a.createElement("button",{className:"voteButton",onClick:function(){return n.props.upVotePicture(n.props.picture.id)}},"Liked ",n.props.picture.likes," Times"),c.a.createElement("button",{className:"deleteButton",onClick:function(){return n.props.deletePhoto(n.props.picture.id)}},"DELETE THIS ONE"))):c.a.createElement("div",{className:"displayedContent"},c.a.createElement("div",{className:"descriptionDiv",onClick:n.clickPicture},c.a.createElement("p",{className:"textBox"},n.props.picture.description)))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.flipPicture())}}]),t}(o.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.listOfPictures.map(function(t){return c.a.createElement(m,{picture:t,upVotePicture:e.props.upVotePicture,deletePhoto:e.props.deletePhoto})});return c.a.createElement(c.a.Fragment,null,t)}}]),t}(o.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("form",null,c.a.createElement("label",null,c.a.createElement("input",{type:"text",placeholder:"url",value:this.props.newPicture.path,onChange:this.props.handleChangeFor("path")})),c.a.createElement("button",{onClick:this.props.addNewPhoto},"Add New Image!"))}}]),t}(o.Component),P=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={listOfPictures:[],newPicture:{path:"",description:"",title:""}},n.addNewPhoto=function(){g.a.post("/gallery",n.state.newPicture).then(function(e){console.log(n.state.newPicture),console.log(e),n.getPictures()}).catch(function(e){console.log("There was an error on the client side POST",e)})},n.deletePhoto=function(e){g.a.delete("/gallery/delete/".concat(e)).then(function(e){console.log(e),n.getPictures()}).catch(function(e){console.log(e)})},n.upVotePicture=function(e){g.a.put("/gallery/like/".concat(e)).then(function(e){console.log(e),n.getPictures()}).catch(function(e){console.log(e)})},n.handleChangeFor=function(e){return function(t){n.setState({newPicture:Object(l.a)({},n.state.newPicture,Object(r.a)({},e,t.target.value))})}},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getPictures(),console.log("app mounted successfully")}},{key:"getPictures",value:function(){var e=this;g.a.get("/gallery").then(function(t){console.table(t.data),e.setState({listOfPictures:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",{className:"App-title"},"Gallery of my life")),c.a.createElement("div",null,c.a.createElement(v,{newPicture:this.state.newPicture,handleChangeFor:this.handleChangeFor,addNewPhoto:this.addNewPhoto})),c.a.createElement("div",{className:"galleryListContainer"},c.a.createElement(w,{listOfPictures:this.state.listOfPictures,upVotePicture:this.upVotePicture,deletePhoto:this.deletePhoto})))}}]),t}(o.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(c.a.createElement(P,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");b?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(e)})}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.3436f167.chunk.js.map