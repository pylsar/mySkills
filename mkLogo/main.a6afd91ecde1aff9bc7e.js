!function(e){function t(t){for(var i,s,o=t[0],c=t[1],h=t[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(l&&l(t);d.length;)d.shift()();return a.push.apply(a,h||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={0:0},a=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var h=0;h<o.length;h++)t(o[h]);var l=c;a.push([3,1]),n()}([,function(e,t){console.log("test")},,function(e,t,n){"use strict";n.r(t);n(1);var i=n(0);function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}console.log("d");var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=document.createElement("canvas"),this.size=1024,this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.size,this.canvas.height=this.size,this.color="#ffffff",this.ctx.font="120px Arial",this.text="Mortal Kombat"}var t,n,i;return t=e,(n=[{key:"draw",value:function(){this.ctx.fillStyle="#ffffff",this.ctx.clearRect(0,0,this.size,this.size),this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(this.text,this.size/2,this.size/2)}}])&&r(t.prototype,n),i&&r(t,i),e}(),s=n.p+"683fa8182d6731206be28b21c164f79e.jpg";function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=n(2)(i);new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=new i.Scene,this.renderer=new i.WebGLRenderer,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.container=document.getElementById("container"),this.container.appendChild(this.renderer.domElement),this.camera=new i.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.5,1e3),this.camera.position.set(0,0,10),this.controls=new c(this.camera,this.renderer.domElement),this.time=0,this.setupResize(),this.resize(),this.addObjects(),this.animate()}var t,n,r;return t=e,(n=[{key:"setupResize",value:function(){window.addEventListener("resize",this.resize.bind(this))}},{key:"resize",value:function(){var e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"addObjects",value:function(){var e=new a;e.draw();var t=new i.Texture(e.canvas);t.needsUpdate=!0;var n=new i.MeshBasicMaterial({transparent:!0,side:i.DoubleSide,map:t}),r=new i.SphereGeometry(2,200,200);this.meshText=new i.Mesh(r,n),this.scene.add(this.meshText);var o=new i.CircleGeometry(1.6,64),c=new i.MeshBasicMaterial({color:16711680,side:i.DoubleSide,map:(new i.TextureLoader).load(s)});this.meshCircle=new i.Mesh(o,c),this.scene.add(this.meshCircle)}},{key:"animate",value:function(){this.time+=.05,this.meshText.rotation.y=-this.time/10,requestAnimationFrame(this.animate.bind(this)),this.render()}}])&&o(t.prototype,n),r&&o(t,r),e}())("container")}]);