!function(e){function t(t){for(var i,a,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(d&&d(t);m.length;)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={0:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([107,1]),n()}({107:function(e,t,n){"use strict";n.r(t);n(70),n(71),n(72),n(17);function i(e,t,n){let{width:i,height:o}=n;return new Promise(n=>{const r=document.createElement("canvas");r.width=i,r.height=o,r.getContext("2d").drawImage(e,0,0,i,o),r.toBlob(n,t)})}function o(e,t,n){for(void 0===n&&(n=null);t&&t!==n;){if(t.hasAttribute(e))return{elementRef:t,attrValue:t.getAttribute(e)};t=t.parentElement}}n(58);const r=document.getElementById("js-bottom-bar-rotation");let a=0;function s(e){return e>180&&(e-=360),e*Math.PI/180}function c(e){let t=Math.round(180*function(e){const t=2*Math.PI,n=-t;return e>t?e-=t:e<n&&(e-=n),e}(e)/Math.PI);return t<0&&(t+=360),360===t?0:t}function l(){return a}function d(e){const t=document.getElementById("js-rotation-input");t.value=e,t.previousElementSibling.textContent=e+"°"}function u(e){let{currentTarget:t}=e;t.classList.remove("visible"),t.previousElementSibling.classList.add("visible"),(t.value<0||t.value>359)&&(t.value=c(a))}document.getElementById("js-rotation-input").addEventListener("input",e=>{let{target:t}=e,n=parseInt(event.target.value,10)||0;n<0?n=0:n>360&&(n%=360);const i=c(function(e){return a=s(e)}(n));requestAnimationFrame(pe),t.previousElementSibling.textContent=i+"°"}),r.addEventListener("click",e=>{const t=o("data-type",e.target,e.currentTarget);if(!t)return;const n=s(15);"left"===t.attrValue?a-=n:"right"===t.attrValue&&(a+=n);const i=c(a);requestAnimationFrame(pe),d(i)}),r.addEventListener("focus",e=>{let{target:t}=e;if("SPAN"===t.nodeName){const e=t.nextElementSibling;t.classList.remove("visible"),e.classList.add("visible"),e.focus(),e.addEventListener("blur",u,{once:!0})}},!0);n(90),n(37),n(39);var m=n(69);const g=new Worker("./ww.js");g.onmessage=function(e){Object(m.saveAs)(e.data,"images.zip")},g.onerror=function(e){console.log(e)};const f=document.getElementById("js-image-folder-list"),v=[],h={};let p=0;function w(e){const t=e.split("."),n=h[t[0]]||0;return h[t[0]]=n+1,t[0]+="-"+n,t.join(".")}function b(e){const t=v.push(e);f.insertAdjacentHTML("beforeend",'\n    <li class="image-folder-list-item" data-index="'+(t-1)+'">\n      <button class="image-folder-enlarge-btn" data-type="enlarge" title="Enlarge">\n        <image src='+URL.createObjectURL(e.file)+' class="image-folder-list-item-image" alt="">\n      </button>\n      <button class="image-folder-remove-btn" data-type="remove" title="Remove">\n        <svg viewBox="0 0 24 24">\n          <use href="#remove"></use>\n        </svg>\n      </button>\n    </li>\n  '),document.getElementById("js-image-folder-message").classList.add("hidden"),f.classList.add("visible")}function y(e,t){return e.name+" | "+(t+1)+" / "+v.length+" | "+e.width+"x"+e.height}function E(e){let{key:t}=e;"ArrowRight"===t?L(1):"ArrowLeft"===t?L(-1):"Delete"===t&&I()}function L(e){1===e?p=(p+1)%v.length:-1===e&&(p=0===p?v.length-1:p-1),j(p)}function j(e){const t=v[e],n=URL.createObjectURL(t.file),i=document.getElementById("js-image-folder-viewer-image");URL.revokeObjectURL(i.src),i.src=n,document.getElementById("js-image-folder-viewer-image-link").href=n,document.getElementById("js-image-folder-viewer-header").textContent=y(t,e)}function x(e){if(e.target===e.currentTarget)return void B();const t=o("data-type",e.target,e.currentTarget);if(!t)return;const{attrValue:n}=t;"close"===n?B():"next"===n?L(1):"previous"===n?L(-1):"remove"===n&&I()}function I(){document.querySelectorAll(".image-folder-list-item")[p].remove(),v.splice(p,1),k(),v.length?j(p=p>=v.length-1?v.length-1:p):B()}function B(){const e=document.getElementById("js-image-folder-viewer");e.removeEventListener("click",x),e.remove(),window.removeEventListener("keydown",E)}function k(){if(0===v.length)document.getElementById("js-image-folder-message").classList.remove("hidden"),f.classList.remove("visible");else{[...f.children].forEach((e,t)=>{e.setAttribute("data-index",t)})}}f.addEventListener("click",e=>{let{target:t,currentTarget:n}=e;const i=o("data-type",t,n);if(!i)return;const r=o("data-index",t,n),{attrValue:a,elementRef:s}=r,{attrValue:c}=i;"enlarge"===c?function(e){const t=v[e],n=URL.createObjectURL(t.file);document.getElementById("js-editor").insertAdjacentHTML("beforeend",'\n    <div id="js-image-folder-viewer" class="js-top-bar-item image-folder-viewer">\n      <div id="js-image-folder-viewer-header" class="image-folder-viewer-header">'+y(t,e)+'</div>\n      <img src="'+n+'" id="js-image-folder-viewer-image" class="image-folder-viewer-image" alt="">\n      <div class="image-folder-viewer-footer">\n        <a href="'+n+'" id="js-image-folder-viewer-image-link" class="icon-btn-round" target="_blank" title="Open image in a new tab">\n          <svg viewBox="0 0 24 24">\n            <use href="#open-in-new"></use>\n          </svg>\n        </a>\n        <button class="icon-btn-round" data-type="previous" title="Previous image">\n          <svg viewBox="0 0 24 24">\n            <use href="#arrow-left"></use>\n          </svg>\n        </button>\n        <button class="icon-btn-round" data-type="next" title="Next image">\n          <svg viewBox="0 0 24 24">\n            <use href="#arrow-right"></use>\n          </svg>\n        </button>\n        <button class="icon-btn-round" data-type="remove" title="Remove image">\n          <svg viewBox="0 0 24 24">\n            <use href="#remove"></use>\n          </svg>\n        </button>\n      </div>\n      <button class="icon-btn-round image-folder-viewer-close-btn" data-type="close" title="Close">\n        <svg viewBox="0 0 24 24">\n          <use href="#close"></use>\n        </svg>\n      </button>\n    </div>\n  '),document.getElementById("js-image-folder-viewer").addEventListener("click",x),window.addEventListener("keydown",E)}(p=parseInt(a,10)):"remove"===c&&(s.remove(),v.splice(a,1),k())}),document.getElementById("js-image-folder-download-btn").addEventListener("click",()=>{!function(e){g.postMessage(e)}(v)});const M=document.getElementById("js-top-bar-upload-tab"),S=document.getElementById("js-uploaded-images-file-input");let R=[],T=0,A=null;function O(){return R[T]}function U(){const[e]=R;var t;z(e),q(document.querySelector(".uploaded-images-list-item")),H(e.name),t=e.blobUrl,ne.insertAdjacentHTML("beforeend",'<canvas id="js-canvas"></canvas>'),ne.classList.remove("hidden"),document.getElementById("js-intro").remove(),function(e){var t;t=(ae=document.getElementById("js-canvas")).getContext("2d"),J=t,fe(),xe(e),ae.addEventListener("wheel",be,{passive:!0}),ae.addEventListener("pointerdown",ye)}(t),window.addEventListener("resize",()=>{requestAnimationFrame(()=>{!function(){const e=G();fe(),$(e.a,e.b,e.c,e.d,e.e,e.f)}(),pe()})}),oe.classList.toggle("visible",re)}function z(e){document.getElementById("js-uploaded-images-preview").innerHTML='\n    <div class="uploaded-images-preview-info">'+e.name+'</div>\n    <div class="uploaded-images-preview-info">'+e.width+"x"+e.height+'</div>\n    <img src="'+e.blobUrl+'" class="uploaded-images-preview-image" alt="">\n  '}async function P(e){const[t]=e.splice(0,1),n=await(i=t,new Promise(e=>{const t=new Image,n=URL.createObjectURL(i);t.onload=function(){e({file:i,blobUrl:n,name:i.name,type:i.type,width:t.width,height:t.height,aspectRatio:t.width/t.height})},t.src=n}));var i;R.push(n),function(e){const t=document.getElementById("js-uploaded-images-list"),n=R.length-1;t.insertAdjacentHTML("beforeend",'\n    <li class="uploaded-images-list-item" data-index="'+n+'" data-type="image">\n        <button class="uploaded-images-list-btn">\n          <img src="'+e.blobUrl+'" class="uploaded-images-list-image">\n        </button>\n    </li>\n  ')}(n),e.length?P(e):A||U()}function C(e){const t=function(e){return e.filter(e=>e.type.includes("image"))}([...e]);t.length&&P(t)}function H(e){document.title=e+" | Imagis"}function q(e){A&&A.classList.remove("active"),(A=e).classList.add("active")}function V(e){let{target:t}=e;C(t.files),t.value=""}S.addEventListener("change",V),document.getElementById("js-intro-file-input").addEventListener("change",V),M.addEventListener("click",e=>{const t=o("data-type",e.target,e.currentTarget);if(t&&"image"===t.attrValue){const e=parseInt(t.elementRef.getAttribute("data-index"),10),{file:n,blobUrl:i}=R[e];e!==T&&(T=e,z(R[e]),q(t.elementRef),H(n.name)),xe(i)}}),document.getElementById("js-intro-file-select-btn").addEventListener("click",()=>{document.getElementById("js-intro-file-input").click()}),document.getElementById("js-uploaded-images-upload-btn").addEventListener("click",()=>{S.click()}),window.addEventListener("drop",e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy",C(e.dataTransfer.files)}),window.addEventListener("dragover",e=>{e.preventDefault()});let W={x:0,y:0,width:0,height:0},D="";function _(){return W}function F(e,t,n){return t?e+="w":n&&(e+="e"),e}function N(e,t){const n=W.x,i=W.y,o=n+W.width,r=i+W.height;if(D="",(e>=n-4&&e<=o+4||e<=n+4&&e>=o-4)&&(t>=i-4&&t<=r+4||t<=i+4&&t>=r-4)){const a=e>=o-4&&e<=o+4,s=t>=r-4&&t<=r+4,c=e>=n-4&&e<=n+4;t>=i-4&&t<=i+4?D=F("n",c,a):s?D=F("s",c,a):a?D="e":c&&(D="w")}return D}function Y(e){void 0===e&&(e={}),W=Object.assign({x:0,y:0,width:0,height:0},e)}function X(e,t){const n=W.x,i=W.y,o=n+W.width,r=i+W.height;return(e>=n&&e<=o||e<=n&&e>=o)&&(t>=i&&t<=r||t<=i&&t>=r)}let K=document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGMatrix(),J=null;function G(){return K}function Q(){return K.a}function Z(e,t){K=K.translate(e,t),J.translate(e,t)}function $(e,t,n,i,o,r){K.a=e,K.b=t,K.c=n,K.d=i,K.e=o,K.f=r,J.setTransform(e,t,n,i,o,r)}function ee(e,t){return{x:(e-K.e)/K.a,y:(t-K.f)/K.a}}const te=new Image,ne=document.getElementById("js-editor"),ie=document.getElementById("js-crop-btn"),oe=document.getElementById("js-selection-toggle-btn"),re=void 0!==window.orientation;let ae=null,se=0,ce=0,le=null,de="",ue=!1,me=!1;function ge(){return{canvasWidth:se,canvasHeight:ce}}function fe(){const e=window.innerWidth,t=window.innerHeight;ae.width=e,ae.height=t,se=e,ce=t}function ve(e){const t=l(),n=te.width/2,i=te.height/2;!function(e){e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,se,ce),e.restore()}(e),e.save(),e.translate(n,i),e.rotate(t),e.translate(-n,-i),e.drawImage(te,0,0,te.width,te.height),e.restore()}function he(e){const t=_(),n=Math.round(t.width),i=Math.round(t.height);let o,r=Math.round(t.x),a=Math.round(t.y);e.save(),e.lineWidth=1,e.strokeStyle="#006494",e.setTransform(1,0,0,1,0,0),n&&i&&(o=e.getImageData(r,a,n,i),n<0&&(r+=n),i<0&&(a+=i)),(n||i||ue)&&function(e){e.fillStyle="rgba(0, 0, 0, .4)",e.fillRect(0,0,se,ce)}(e),o&&e.putImageData(o,r,a),e.strokeRect(t.x+.5,t.y+.5,n,i),e.restore()}function pe(){const e=ae.getContext("2d");ve(e),he(e)}function we(e){void 0===e&&(e="default"),ae.style.cursor=e}function be(e){Ae(e.deltaY>0?.8:1.25,e.clientX,e.clientY)}function ye(e){if(1!==e.which)return;const{clientX:t,clientY:n}=e,i=_(),o=i.width&&i.height,r=N(t,n);de="select",ue=o,e.shiftKey||me?(le=ee(t,n),de="drag"):(e.ctrlKey||re)&&o&&X(t,n)?(le={x:t-i.x,y:n-i.y},de="move"):r&&o?de="resize":Y({x:t,y:n}),requestAnimationFrame(pe),ie.classList.remove("visible"),ne.style.userSelect="none",window.addEventListener("pointermove",Ee),window.addEventListener("pointerup",Le),window.removeEventListener("pointermove",je)}function Ee(e){const{clientX:t,clientY:n}=e;switch(de){case"select":!function(e,t){const n=_();n.width=e-n.x,n.height=t-n.y}(t,n);break;case"resize":!function(e,t){const n=_(),i=D;"n"===i[0]?(n.height=n.y-t+n.height,n.y=t):"s"===i[0]&&(n.height=t-n.y);i.includes("w")?(n.width=n.x-e+n.width,n.x=e):i.includes("e")&&(n.width=e-n.x)}(t,n);break;case"move":!function(e,t){const n=_();n.x=e-le.x,n.y=t-le.y}(t,n);break;case"drag":!function(e,t){if(le){const n=ee(e,t);Z(n.x-le.x,n.y-le.y)}}(t,n)}requestAnimationFrame(pe)}function Le(){const e=_();de="",ne.style.userSelect="auto",e.width&&e.height?(ie.classList.add("visible"),window.addEventListener("pointermove",je)):(ue=!1,ve(ae.getContext("2d")),we()),window.removeEventListener("pointermove",Ee),window.removeEventListener("pointerup",Le)}function je(e){const{clientX:t,clientY:n}=e;if(e.ctrlKey)we(X(t,n)?"move":"default");else{const e=N(t,n);we(e?e+"-resize":"default")}}function xe(e){ue=!1,ie.classList.remove("visible"),a=0,d(0),Y(),te.onload=function(){!function(e){const{canvasWidth:t,canvasHeight:n}=ge(),{width:i,height:o}=e;let r=Q();r=i>o?Re(i,o,t,n):Re(o,i,n,t);(function(e,t){$(1,0,0,1,e,t)})((t-i*r)/2,(n-o*r)/2),ke(0,0,r),Te(r)}(te)},te.src=e}function Ie(e){const t=document.createElement("canvas"),n=t.getContext("2d"),{a:i,e:o,f:r}=G(),a={x:o/i,y:r/i},s=_(),c={x:Math.round(s.x/i),y:Math.round(s.y/i),width:Math.round(s.width/i),height:Math.round(s.height/i)};t.width=Math.round(se/i),t.height=Math.round(ce/i),n.translate(a.x,a.y);const d=function(e,t,n){const i=l();if(n.save(),i){const t=e.width/2,o=e.height/2;n.translate(t,o),n.rotate(i),n.translate(-t,-o)}return n.drawImage(e,0,0,e.width,e.height),n.restore(),n.getImageData(t.x,t.y,t.width,t.height)}(e,c,n);return t.width=d.width,t.height=d.height,n.putImageData(d,0,0),t}ie.addEventListener("click",()=>{const{file:e,blobUrl:t}=O(),n=new Image;n.onload=async function(){b(Object.assign({name:w(e.name),type:e.type},await function(e,t){return new Promise(n=>{const i=Ie(e);i.toBlob(e=>{n({file:e,width:i.width,height:i.height})},t)})}(n,e.type)))},n.src=t}),oe.addEventListener("click",e=>{let{currentTarget:t}=e;me=!me,t.textContent=me?"Enable Selection":"Disabled Selection"});const Be=document.getElementById("js-bottom-bar-zoom");function ke(e,t,n){Z(e,t),function(e){K.a=1,K.d=1,K=K.scale(e,e),J.setTransform(K.a,0,0,K.a,K.e,K.f)}(n),Z(-e,-t),requestAnimationFrame(pe)}function Me(e){return e<.08?e=.08:e>80&&(e=80),e}function Se(e,t){return 1-1/(e/(e-t))}function Re(e,t,n,i){let o=1;return e>n&&t*(o=Se(e,n))>i&&(o=Se(t,i)),Me(o)}function Te(e){const t=document.getElementById("js-zoom-input");e=Math.round(100*e),t.value=e,t.previousElementSibling.textContent=e+"%"}function Ae(e,t,n){const i=Q(),{x:o,y:r}=ee(t,n),a=Me(i*e);ke(o,r,a),Te(a)}function Oe(e){let{currentTarget:t}=e;t.classList.remove("visible"),t.previousElementSibling.classList.add("visible"),t.value<8&&(t.value=8)}document.getElementById("js-zoom-input").addEventListener("input",e=>{let{target:t}=e;const{canvasWidth:n,canvasHeight:i}=ge(),{x:o,y:r}=ee(n/2,i/2),a=parseInt(t.value,10)||0,s=Me(a/100),c=Math.round(100*s);ke(o,r,s),a>c&&(t.value=c),t.previousElementSibling.textContent=c+"%"}),Be.addEventListener("click",e=>{const t=o("data-type",e.target,e.currentTarget);if(!t)return;const{canvasWidth:n,canvasHeight:i}=ge();Ae("out"===t.attrValue?.8:1.25,n/2,i/2)}),Be.addEventListener("focus",e=>{let{target:t}=e;if("SPAN"===t.nodeName){const e=t.nextElementSibling;t.classList.remove("visible"),e.classList.add("visible"),e.focus(),e.addEventListener("blur",Oe,{once:!0})}},!0);let Ue="",ze=!1;function Pe(e){return document.getElementById("js-top-bar-"+e+"-tab")}function Ce(e){ze||e.target.closest(".js-top-bar-item")?ze=!1:function(){const e=Pe(Ue);Ue="",e.classList.remove("visible"),window.removeEventListener("click",Ce,!0),window.removeEventListener("mousedown",He,!0)}()}function He(e){e.target.closest(".js-top-bar-item")&&(ze=!0)}document.getElementById("js-top-bar-header").addEventListener("click",e=>{const t=o("data-tab-name",e.target,e.currentTarget);if(!t)return;const{attrValue:n}=t;if(Ue){Pe(Ue).classList.remove("visible")}if(n===Ue)Ue="",window.removeEventListener("click",Ce,!0),window.removeEventListener("mousedown",He,!0);else{const e=Pe(n);Ue=n,e.classList.add("visible"),window.addEventListener("click",Ce,!0),window.addEventListener("mousedown",He,!0)}});const qe=document.getElementById("js-resizer-list");function Ve(e,t,n){return new Promise(o=>{const r=new Image;r.onload=async function(){b({name:w(e.name),type:e.type,width:t,height:n,file:await i(r,e.type,{width:t,height:n})}),URL.revokeObjectURL(r.src),o()},r.src=URL.createObjectURL(e)})}document.getElementById("js-resizer-option-btn").addEventListener("click",()=>{qe.insertAdjacentHTML("beforeend",'\n    <li class="resizer-list-item">\n      <label class="resizer-list-option">\n        <div class="resizer-list-option-label">Width</div>\n        <input type="number" class="input resizer-list-option-input" min="1" data-type="width">\n      </label>\n      <label class="resizer-list-option">\n        <div class="resizer-list-option-label">Height</div>\n        <input type="number" class="input resizer-list-option-input" min="1" data-type="height">\n      </label>\n    </li>\n  ')}),qe.addEventListener("input",e=>{let{target:t}=e;const{checked:n}=document.getElementById("js-resizer-aspect-ratio"),i=parseInt(t.value||0,10);if(n){const e=t.getAttribute("data-type"),{aspectRatio:n}=O(),o="width"===e?"height":"width",r=t.parentElement.parentElement.querySelector("[data-type="+o+"]");r.value="width"===e?Math.round(i/n):Math.round(i*n)}}),document.getElementById("js-resize-btn").addEventListener("click",async()=>{const{children:e}=qe,{file:t}=O();for(const n of e){const[{value:e},{value:i}]=n.querySelectorAll("input");e&&i&&await Ve(t,e,i)}}),"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").catch(console.log)},71:function(e,t,n){},72:function(e,t,n){}});