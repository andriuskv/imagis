(()=>{var e,t,n,i,o={359:()=>{let e=!1;function t({target:n}){let i=!0;n.closest(".panel-container")&&(i=!!n.closest(".bottom-bar-panel-btn")),i&&(e=!1,document.getElementById("js-bottom-bar-panel").classList.remove("visible"),window.removeEventListener("click",t))}document.getElementById("js-bottom-bar-panel-toggle-btn").addEventListener("click",(({currentTarget:n})=>{const i=n.nextElementSibling;e=!e,i.classList.toggle("visible",e),e?window.addEventListener("click",t):window.removeEventListener("click",t)}))}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return o[e].call(n.exports,n,n.exports,a),n.exports}a.m=o,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var o=Object.create(null);a.r(o);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>r[e]=()=>n[e]));return r.default=()=>n,a.d(o,r),o},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>e+".js",a.miniCssF=e=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},i="imagis:",a.l=(e,t,o,r)=>{if(n[e])n[e].push(t);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==i+o){s=u;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",i+o),s.src=e),n[e]=[t];var h=(t,i)=>{s.onerror=s.onload=null,clearTimeout(g);var o=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(i))),t)return t(i)},g=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={792:0};a.f.j=(t,n)=>{var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise(((n,o)=>i=e[t]=[n,o]));n.push(i[2]=o);var r=a.p+a.u(t),s=new Error;a.l(r,(n=>{if(a.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,i[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var i,o,[r,s,c]=n,l=0;if(r.some((t=>0!==e[t]))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(c)c(a)}for(t&&t(n);l<r.length;l++)o=r[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=globalThis.webpackChunkimagis=globalThis.webpackChunkimagis||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";function e(e,t,{width:n,height:i}){return new Promise((o=>{const r=document.createElement("canvas");r.width=n,r.height=i,r.getContext("2d").drawImage(e,0,0,n,i),r.toBlob(o,t,1)}))}function t(e,t,n=null){for(;t&&t!==n;){if(t.hasAttribute(e))return{elementRef:t,attrValue:t.getAttribute(e)};t=t.parentElement}}function n(e){const t=["B","kB","MB","GB"];let n=e,i=0;for(;i<t.length&&!(n<1e3);)n/=1e3,i+=1;return n=i>0?n.toFixed(1):Math.round(n),`${n} ${t[i]}`}const i=document.getElementById("js-bottom-bar-rotation");let o=0;function r(e){return e>180&&(e-=360),e*Math.PI/180}function s(e){let t=Math.round(180*function(e){const t=2*Math.PI,n=-t;return e>t?e-=t:e<n&&(e-=n),e}(e)/Math.PI);return t<0&&(t+=360),360===t?0:t}function c(e){const t=document.getElementById("js-rotation-input");t.value=e,t.previousElementSibling.textContent=`${e}°`}function l({currentTarget:e}){e.classList.remove("visible"),e.previousElementSibling.classList.add("visible"),(e.value<0||e.value>359)&&(e.value=s(o))}document.getElementById("js-rotation-input").addEventListener("input",(({target:e})=>{let t=parseInt(event.target.value,10)||0;t<0?t=0:t>360&&(t%=360);const n=function(e){return o=r(e),o}(t),i=s(n);requestAnimationFrame(Te),e.previousElementSibling.textContent=`${i}°`})),i.addEventListener("click",(e=>{const n=t("data-type",e.target,e.currentTarget);if(!n)return;const i=r(15);"left"===n.attrValue?o-=i:"right"===n.attrValue&&(o+=i);const a=s(o);requestAnimationFrame(Te),c(a)})),i.addEventListener("focus",(({target:e})=>{if("SPAN"===e.nodeName){const t=e.nextElementSibling;e.classList.remove("visible"),t.classList.add("visible"),t.focus(),t.addEventListener("blur",l,{once:!0})}}),!0);const d={flipH:1,flipV:1};function u(){d.flipH=1,d.flipV=1}document.getElementById("js-bottom-bar-flip-toggle-items").addEventListener("click",(({target:e,currentTarget:n})=>{const i=t("data-item",e,n);i&&(d[i.attrValue]*=-1,requestAnimationFrame(Te))}));const h=new Worker(new URL(a.p+a.u(569),a.b),{type:void 0});function g(e){h.postMessage(e)}h.onmessage=async function({data:{type:e,data:t}}){if("zip"===e){const{default:e}=await a.e(213).then(a.t.bind(a,213,23));e(t,"images.zip")}},h.onerror=function(e){console.log(e)};const m=document.getElementById("js-image-folder-list"),f=document.getElementById("js-image-folder-bottom"),v=[],p={};let w=0;function y(e){const t=e.split("."),n=p[t[0]]||0;return p[t[0]]=n+1,t[0]+=`-${n}`,t.join(".")}function b(e){const t=document.getElementById("js-image-folder-item-count"),n=v.push(e);t.classList.remove("hidden"),t.innerText=n,function(){const e=document.createElement("div");e.classList.add("ping"),document.querySelector(".top-bar-image-folder-toggle-btn").appendChild(e),setTimeout((()=>{e.remove()}),4e3)}(),m.insertAdjacentHTML("beforeend",`\n    <li class="image-folder-list-item" data-index="${n-1}">\n      <button class="image-folder-enlarge-btn" data-type="enlarge" title="Enlarge">\n        <image src=${URL.createObjectURL(e.file)} class="image-folder-list-item-image" alt="">\n      </button>\n      <input type="checkbox" class="image-folder-checkbox">\n      <button class="image-folder-remove-btn" data-type="remove" title="Remove">\n        <svg viewBox="0 0 24 24">\n          <use href="#remove"></use>\n        </svg>\n      </button>\n    </li>\n  `),document.getElementById("js-image-folder-message").classList.add("hidden"),m.classList.add("visible")}function E(e,t){const i=n(e.file.size);return`${e.name} | ${t+1} / ${v.length} | ${e.width}x${e.height} | ${i}`}function L({key:e}){"ArrowRight"===e?x(1):"ArrowLeft"===e?x(-1):"Delete"===e&&k()}function x(e){1===e?w=(w+1)%v.length:-1===e&&(w=0===w?v.length-1:w-1),j(w)}function j(e){const t=v[e],n=URL.createObjectURL(t.file),i=document.getElementById("js-image-folder-viewer-image");URL.revokeObjectURL(i.src),i.src=n,document.getElementById("js-image-folder-viewer-image-link").href=n,document.getElementById("js-image-folder-viewer-header").textContent=E(t,e)}function I(e){if(e.target===e.currentTarget)return void B();const n=t("data-type",e.target,e.currentTarget);if(!n)return;const{attrValue:i}=n;"close"===i?B():"next"===i?x(1):"previous"===i?x(-1):"remove"===i&&k()}function k(){document.querySelectorAll(".image-folder-list-item")[w].remove(),v.splice(w,1),A(),v.length?(w=w>=v.length-1?v.length-1:w,j(w)):B()}function B(){const e=document.getElementById("js-image-folder-viewer");e.removeEventListener("click",I),e.remove(),window.removeEventListener("keydown",L)}function A(){const e=document.getElementById("js-image-folder-item-count");if(0===v.length)document.getElementById("js-image-folder-message").classList.remove("hidden"),m.classList.remove("visible"),e.classList.add("hidden");else{const t=[...m.children];e.innerText=v.length,t.forEach(((e,t)=>{e.setAttribute("data-index",t)}))}}m.addEventListener("click",(({target:e,currentTarget:n})=>{const i=t("data-index",e,n);if(!i)return;const o=t("data-type",e,n),{attrValue:r,elementRef:a}=i;if(o){const{attrValue:e}=o;"enlarge"===e?(w=parseInt(r,10),function(e){const t=v[e],n=URL.createObjectURL(t.file);document.getElementById("js-editor").insertAdjacentHTML("beforeend",`\n    <div id="js-image-folder-viewer" class="js-top-bar-item image-folder-viewer">\n      <div id="js-image-folder-viewer-header" class="image-folder-viewer-header">${E(t,e)}</div>\n      <img src="${n}" id="js-image-folder-viewer-image" class="image-folder-viewer-image" alt="">\n      <div class="image-folder-viewer-footer">\n        <a href="${n}" id="js-image-folder-viewer-image-link" class="icon-btn-round" target="_blank" title="Open image in a new tab">\n          <svg viewBox="0 0 24 24">\n            <use href="#open-in-new"></use>\n          </svg>\n        </a>\n        <button class="icon-btn-round" data-type="previous" title="Previous image">\n          <svg viewBox="0 0 24 24">\n            <use href="#arrow-left"></use>\n          </svg>\n        </button>\n        <button class="icon-btn-round" data-type="next" title="Next image">\n          <svg viewBox="0 0 24 24">\n            <use href="#arrow-right"></use>\n          </svg>\n        </button>\n        <button class="icon-btn-round" data-type="remove" title="Remove image">\n          <svg viewBox="0 0 24 24">\n            <use href="#remove"></use>\n          </svg>\n        </button>\n      </div>\n      <button class="icon-btn-round image-folder-viewer-close-btn" data-type="close" title="Close">\n        <svg viewBox="0 0 24 24">\n          <use href="#close"></use>\n        </svg>\n      </button>\n    </div>\n  `),document.getElementById("js-image-folder-viewer").addEventListener("click",I),window.addEventListener("keydown",L)}(w)):"remove"===e&&(a.remove(),v.splice(r,1),A())}else if("INPUT"===e.nodeName){const t=f.querySelector("[data-type=selected]");v[r].selected=e.checked,t.disabled=!v.some((e=>e.selected))}})),f.addEventListener("click",(({target:e,currentTarget:n})=>{const i=t("data-type",e,n);i&&("all"===i.attrValue?g({type:"zip",data:v}):"selected"===i.attrValue&&g({type:"zip",data:v.filter((e=>e.selected))}))}));let T={x:0,y:0,width:0,height:0},M="";function $(){return T}function S(){return M}function z(e,t,n){return t?e+="w":n&&(e+="e"),e}function R(e,t){const n=T.x,i=T.y,o=n+T.width,r=i+T.height;if(M="",(e>=n-8&&e<=o+8||e<=n+8&&e>=o-8)&&(t>=i-8&&t<=r+8||t<=i+8&&t>=r-8)){const a=e>=o-8&&e<=o+8,s=t>=r-8&&t<=r+8,c=e>=n-8&&e<=n+8;t>=i-8&&t<=i+8?M=z("n",c,a):s?M=z("s",c,a):a?M="e":c&&(M="w")}return M}function U(e){return M=1===M.length?e:"n"===e||"s"===e?e+M[1]:M[0]+e,M}function q(e={}){T={x:0,y:0,width:0,height:0,...e}}function O(e,t){const n=T.x,i=T.y,o=n+T.width,r=i+T.height;return(e>=n&&e<=o||e<=n&&e>=o)&&(t>=i&&t<=r||t<=i&&t>=r)}const P=new DOMMatrix;let C=null;function F(){return P}function H(){return P.a}function V(e,t){P.translateSelf(e,t),C.translate(e,t)}function N(e,t,n,i,o,r){P.a=e,P.b=t,P.c=n,P.d=i,P.e=o,P.f=r,C.setTransform(e,t,n,i,o,r)}function D(e,t){return{x:(e-P.e)/P.a,y:(t-P.f)/P.a}}const W=document.getElementById("js-top-bar-crop-panel");function _(){for(const e of W.querySelectorAll("[data-value]"))e.value=""}function Y(){const e={};for(const t of W.querySelectorAll("[data-value]")){if(!t.validity.valid)return;e[t.getAttribute("data-value")]=Number.parseInt(t.value,10)||0}if(4===Object.keys(e).length){const{a:t,e:n,f:i}=F(),o=$();o.x=e.x*t+n,o.y=e.y*t+i,o.width=e.width*t,o.height=e.height*t,requestAnimationFrame(Te),Oe()}}W.addEventListener("change",Y),document.getElementById("js-crop-panel-btn").addEventListener("click",Y);const X=document.getElementById("js-top-bar-upload-panel"),K=document.getElementById("js-uploaded-images-file-input"),Q=[];let G=0,J=null;function Z(){return Q[G]}function ee(){const e=Q.at(-1);var t;J?(G=Q.length-1,_(),u(),He(e.blobUrl)):(t=e.blobUrl,he.insertAdjacentHTML("beforeend",'<canvas id="js-canvas"></canvas>'),he.classList.remove("hidden"),document.getElementById("js-intro").remove(),function(e){var t;fe=document.getElementById("js-canvas"),t=fe.getContext("2d",{willReadFrequently:!0}),C=t,ke(),He(e),fe.addEventListener("wheel",$e,{passive:!0}),fe.addEventListener("pointerdown",Se),fe.addEventListener("dblclick",Ue)}(t),window.addEventListener("resize",(()=>{requestAnimationFrame((()=>{!function(){const e=F();ke(),N(e.a,e.b,e.c,e.d,e.e,e.f)}(),Te()}))}))),requestAnimationFrame((()=>{const t=[...document.querySelectorAll(".uploaded-images-list-item")].at(-1);te(e),re(t),oe(e.name)}))}function te(e){document.getElementById("js-uploaded-images-preview").innerHTML=`\n    <div class="uploaded-images-preview-info">${e.name}</div>\n    <div class="uploaded-images-preview-info">${e.width}x${e.height} | ${e.sizeString}</div>\n    <img src="${e.blobUrl}" class="uploaded-images-preview-image" alt="" draggable="false">\n  `}async function ne(e){const[t]=e.splice(0,1),i=await(o=t,new Promise((e=>{const t=new Image,i=URL.createObjectURL(o);t.onload=function(){o.name??=`${crypto.randomUUID()}.${function(e){if(!e)return"png";const t=e.split("/")[1];return"jpeg"===t?"jpg":t}(o.type)}`,e({file:o,blobUrl:i,name:o.name,sizeString:n(o.size),type:o.type,width:t.width,height:t.height,aspectRatio:t.width/t.height})},t.onerror=function(t){console.log(t),e()},t.src=i})));var o;i&&(Q.push(i),function(e){const t=document.getElementById("js-uploaded-images-list"),n=Q.length-1;t.insertAdjacentHTML("beforeend",`\n    <li class="uploaded-images-list-item" data-index="${n}" data-type="image">\n        <button class="uploaded-images-list-btn">\n          <img src="${e.blobUrl}" class="uploaded-images-list-image" draggable="false">\n        </button>\n    </li>\n  `)}(i),function(){const e=document.createElement("div");e.classList.add("ping"),e.style.setProperty("--delay",2*Math.random()+"s"),document.getElementById("js-top-bar-upload-btn-container").appendChild(e),setTimeout((()=>{e.remove()}),4e3)}()),e.length?ne(e):ee()}function ie(e){const t=function(e){return e.filter((e=>!e.type||e.type.includes("image")))}([...e]);t.length&&ne(t)}function oe(e){document.title=`${e} | Imagis`}function re(e){J&&J.classList.remove("active"),J=e,J.classList.add("active")}function ae({target:e}){ie(e.files),e.value=""}K.addEventListener("change",ae),document.getElementById("js-intro-file-input").addEventListener("change",ae),X.addEventListener("click",(e=>{const n=t("data-type",e.target,e.currentTarget);if(n&&"image"===n.attrValue){const e=parseInt(n.elementRef.getAttribute("data-index"),10),{file:t,blobUrl:i}=Q[e];e!==G&&(G=e,te(Q[e]),re(n.elementRef),oe(t.name),_()),u(),He(i)}})),document.getElementById("js-intro-file-select-btn").addEventListener("click",(()=>{document.getElementById("js-intro-file-input").click()})),document.getElementById("js-uploaded-images-upload-btn").addEventListener("click",(()=>{K.click()})),window.addEventListener("drop",(e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy",ie(e.dataTransfer.files)})),window.addEventListener("dragover",(e=>{e.preventDefault()})),document.addEventListener("paste",(async e=>{const t="function"==typeof navigator?.clipboard?.read?await navigator.clipboard.read():e.clipboardData.files,n=[];e.preventDefault();for(const e of t)if(e.type?.startsWith("image/"))n.push(e);else{const t=e.types?.filter((e=>e.startsWith("image/")));for(const i of t){const t=await e.getType(i);n.push(t)}}n.length&&ne(n)})),"launchQueue"in window&&"files"in window.LaunchParams.prototype&&window.launchQueue.setConsumer((async e=>{if(!e.files.length)return;const t=[];for(const n of e.files){const e=await n.getFile();t.push(e)}t.length&&ne(t)}));let se="",ce=!1;function le(e){return document.getElementById(`js-top-bar-${e}-panel`)}function de(e){e.target.closest(".js-top-bar-item")||function(){const e=le(se);ce=!1,se="",e.classList.remove("visible"),window.removeEventListener("mousedown",de)}()}document.getElementById("js-top-bar-header").addEventListener("click",(e=>{const n=t("data-panel-name",e.target,e.currentTarget);if(!n)return;const{attrValue:i}=n;if(se){le(se).classList.remove("visible")}if(i===se)ce=!1,se="",window.removeEventListener("mousedown",de);else{const e=le(i);ce=!0,se=i,e.classList.add("visible"),window.addEventListener("mousedown",de),"crop"===i&&function(){const e=$();if(!e.width||!e.height)return;const{a:t,e:n,f:i}=F(),o=n/t,r=i/t,a={x:Math.round(e.x/t-o),y:Math.round(e.y/t-r),width:Math.round(e.width/t),height:Math.round(e.height/t)};for(const e of W.querySelectorAll("[data-value]")){const t=e.getAttribute("data-value");e.value=a[t]}}()}}));const ue=new Image,he=document.getElementById("js-editor"),ge=document.getElementById("js-crop-btn"),me=void 0!==window.orientation;let fe=null,ve=0,pe=0,we=null,ye=null,be="",Ee=!1,Le=!1,xe=!1,je="pan";function Ie(){return{canvasWidth:ve,canvasHeight:pe}}function ke(){const e=window.innerWidth,t=window.innerHeight;fe.width=e,fe.height=t,ve=e,pe=t}function Be(e,t=ue){const n=o,{flipH:i,flipV:r}=d;if(function(e){e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,ve,pe),e.restore()}(e),e.save(),n){const i=t.width/2,o=t.height/2;e.translate(i,o),e.rotate(n),e.translate(-i,-o)}e.scale(i,r),e.translate(-1===i?-t.width:0,-1===r?-t.height:0),e.drawImage(t,0,0,t.width,t.height),e.restore()}function Ae(e){const t=$(),n=Math.round(t.width),i=Math.round(t.height);let o,r=Math.round(t.x),a=Math.round(t.y);e.save(),e.lineWidth=1,e.strokeStyle="#006494",e.setTransform(1,0,0,1,0,0),n&&i&&(o=e.getImageData(r,a,n,i),n<0&&(r+=n),i<0&&(a+=i)),(n||i||Ee)&&function(e){e.fillStyle="rgba(0, 0, 0, .4)",e.fillRect(0,0,ve,pe)}(e),o&&e.putImageData(o,r,a),e.strokeRect(t.x+.5,t.y+.5,n,i),e.restore()}function Te(){const e=fe.getContext("2d",{willReadFrequently:!0});Be(e),Ae(e)}function Me(e="default"){fe.style.cursor=e}function $e(e){Ge(e.deltaY>0?.8:1.25,e.clientX,e.clientY)}function Se(e){if(1!==e.which||ce)return;const{clientX:t,clientY:n}=e,i=$(),o=i.width&&i.height,r=R(t,n);Ee=o,"select"===je||"cut"===je?r&&o?(be="resize",we={x:t-i.x,y:n-i.y}):(e.ctrlKey||me)&&o&&O(t,n)?(be="move",we={x:t-i.x,y:n-i.y}):(be="select",we={x:t,y:n},q({x:t,y:n})):"pan"===je&&(be="drag",ye=D(t,n)),he.style.userSelect="none",window.addEventListener("pointermove",ze),window.addEventListener("pointerup",Re),window.removeEventListener("pointermove",Pe)}function ze({clientX:e,clientY:t}){if(xe)return;xe=!0;const n=e>0?e:0,i=t>0?t:0;switch(be){case"select":!function(e,t){const n=$();n.width=e-we.x,n.height=t-we.y,n.width<0&&(n.width*=-1,n.x=e);n.height<0&&(n.height*=-1,n.y=t);Le&&Ce(e,t,n)}(n,i);break;case"resize":!function(e,t){const n=$(),i=S();if("n"===i[0]){if(n.height=n.y-t+n.height,n.y=t,n.height<0){Me(`${U("s")}-resize`),n.height*=-1,n.y-=n.height}}else if("s"===i[0]&&(n.height=t-n.y,n.height<0)){Me(`${U("n")}-resize`),n.height*=-1,n.y-=n.height}if(i.includes("w")){if(n.width=n.x-e+n.width,n.x=e,n.width<0){Me(`${U("e")}-resize`),n.width*=-1,n.x-=n.width}}else if(i.includes("e")&&(n.width=e-n.x,n.width<0)){Me(`${U("w")}-resize`),n.width*=-1,n.x-=n.width}Le&&Ce(e,t,n)}(n,i);break;case"move":!function(e,t){if(Le){const{a:n,e:i,f:o}=F();Fe(e,"x","width",i,n),Fe(t,"y","height",o,n)}else{const n=$();n.x=e-we.x,n.y=t-we.y}}(n,i);break;case"drag":!function(e,t){if(ye){const n=D(e,t);V(n.x-ye.x,n.y-ye.y)}}(n,i)}requestAnimationFrame((()=>{Te(),xe=!1}))}function Re(){const e=$();be="",we=null,ye=null,he.style.userSelect="auto",e.width&&e.height?(T.width<0&&(T.width*=-1,T.x-=T.width),T.height<0&&(T.height*=-1,T.y-=T.height),e.x<0?(e.width+=e.x,e.x=0):e.x+e.width>fe.width&&(e.width=fe.width-e.x),e.y<0?(e.height+=e.y,e.y=0):e.y+e.height>fe.height&&(e.height=fe.height-e.y),"select"!==je&&"cut"!==je||Oe(),requestAnimationFrame(Te)):qe(),window.removeEventListener("pointermove",ze),window.removeEventListener("pointerup",Re)}function Ue(){const e=$();if(!(e.width&&e.height))return;const{a:t,e:n,f:i}=F(),o=S().split("");if(o.includes("w")){const t=e.width+e.x;n<0?(e.x=0,e.width=t):(e.x=n,e.width=t-n)}else if(o.includes("e")){const i=n+ue.width*t;i>fe.width?e.width=fe.width-e.x:e.width=i-e.x}if(o.includes("n")){const t=e.height+e.y;i<0?(e.y=0,e.height=t):(e.y=i,e.height=t-i)}else if(o.includes("s")){const n=i+ue.height*t;n>fe.height?e.height=fe.height-e.y:e.height=n-e.y}e.width=Math.floor(e.width),e.height=Math.floor(e.height),requestAnimationFrame(Te)}function qe(){Ee=!1,Be(fe.getContext("2d")),Me(),_(),ge.classList.remove("visible"),window.removeEventListener("pointermove",Pe)}function Oe(){ge.classList.add("visible"),window.addEventListener("pointermove",Pe)}function Pe(e){const{clientX:t,clientY:n}=e;if(e.ctrlKey)Me(O(t,n)?"move":"default");else{const e=R(t,n);Me(e?`${e}-resize`:"default")}}function Ce(e,t,n){const{a:i,e:o,f:r}=F(),a=n.x+n.width,s=n.y+n.height,c=o+ue.width*i,l=r+ue.height*i;e+8>o&&e-8<o?(n.width=n.width+e-o,n.x=o):a+8>c&&a-8<c&&(n.width=c-n.x),t+8>r&&t-8<r?(n.height=n.height+t-r,n.y=r):s+8>l&&s-8<l&&(n.height=l-n.y)}function Fe(e,t,n,i,o){const r=$(),a=e-we[t],s=ue[n]*o,c=r[n];r[t]=i+8>a&&i-8<a?i:i+8+s>a+c&&i-8+s<a+c?i+s-c:a}function He(e){Ee=!1,o=0,c(0),q(),ue.onload=function(){!function(e){const{canvasWidth:t,canvasHeight:n}=Ie(),{width:i,height:o}=e;let r=H();r=i>o?Ke(i,o,t,n):Ke(o,i,n,t);const a=t-i*r,s=n-o*r;(function(e,t){N(1,0,0,1,e,t)})(a/2,s/2),_e(0,0,r),Qe(r)}(ue)},ue.src=e}function Ve(e){const t=document.createElement("canvas"),n=t.getContext("2d"),{a:i,e:o,f:r}=F(),a={x:o/i,y:r/i},s=$(),c={x:Math.round(s.x/i),y:Math.round(s.y/i),width:Math.round(s.width/i),height:Math.round(s.height/i)};t.width=Math.round(ve/i),t.height=Math.round(pe/i),n.translate(a.x,a.y),c.x<a.x&&(c.width=c.width-(a.x-c.x),c.x=a.x);const l=c.x+c.width,d=a.x+e.width;l>d&&(c.width=c.width-(l-d)),c.y<a.y&&(c.height=c.height-(a.y-c.y),c.y=a.y);const u=c.y+c.height,h=a.y+e.height;u>h&&(c.height=c.height-(u-h));const g=function(e,t,n){return Be(n,e),n.getImageData(t.x,t.y,t.width,t.height)}(e,c,n);return t.width=g.width,t.height=g.height,n.putImageData(g,0,0),t}function Ne(e,t){return new Promise((n=>{const i=Ve(e);i.toBlob((e=>{n({file:e,width:i.width,height:i.height})}),t,1)}))}function De(){if(je){const e=document.querySelector(`[data-tool=${je}]`);e&&e.classList.remove("selected"),je=""}}ge.addEventListener("click",(()=>{const{file:e,blobUrl:t}=Z(),n=new Image;n.onload=async function(){if("cut"===je){const t=await Ne(n,e.type),i=new File([t.file],y(e.name),{type:e.type});await ne([i]);const o=Q,r=o.length-1,{blobUrl:a}=o[r];u(),He(a),function(e){const t=document.getElementById("js-uploaded-images-list").children[e],n=Q[e];G=e,te(n),re(t),oe(n.name)}(r)}else b({name:y(e.name),type:e.type,...await Ne(n,e.type)})},n.src=t})),document.getElementById("js-left-bar").addEventListener("click",(e=>{const t=e.target.closest("[data-tool]");if(!t)return;const n=t.getAttribute("data-tool");if("pan"===n)window.removeEventListener("pointermove",Pe);else if("reset"===n)return q(),qe(),void De();if(je){if(je===n)return t.classList.remove("selected"),void(je="");De()}t.classList.add("selected"),je=n})),document.getElementById("js-snap-checkbox").addEventListener("change",(e=>{Le=e.target.checked})),window.addEventListener("keydown",(e=>{if("a"===e.key&&e.ctrlKey){const t=$(),{a:n,e:i,f:o}=F(),{width:r,height:a}=ue;t.x=i,t.y=o,t.width=r*n,t.height=a*n,requestAnimationFrame(Te),Oe(),e.preventDefault()}else"Escape"===e.key&&(Ee=!1,q(),requestAnimationFrame(Te))}));const We=document.getElementById("js-bottom-bar-zoom");function _e(e,t,n){V(e,t),function(e){P.a=1,P.d=1,P.scaleSelf(e,e),C.setTransform(e,0,0,e,P.e,P.f)}(n),V(-e,-t),requestAnimationFrame(Te)}function Ye(e){return e<.08?e=.08:e>80&&(e=80),e}function Xe(e,t){return 1-1/(e/(e-t))}function Ke(e,t,n,i){let o=1;return e>n&&(o=Xe(e,n),t*o>i&&(o=Xe(t,i))),Ye(o)}function Qe(e){const t=document.getElementById("js-zoom-input");e=Math.round(100*e),t.value=e,t.previousElementSibling.textContent=`${e}%`}function Ge(e,t,n){const i=H(),{x:o,y:r}=D(t,n),a=Ye(i*e);_e(o,r,a),Qe(a)}function Je({currentTarget:e}){e.classList.remove("visible"),e.previousElementSibling.classList.add("visible"),e.value<8&&(e.value=8)}document.getElementById("js-zoom-input").addEventListener("input",(({target:e})=>{const{canvasWidth:t,canvasHeight:n}=Ie(),{x:i,y:o}=D(t/2,n/2),r=parseInt(e.value,10)||0,a=Ye(r/100),s=Math.round(100*a);_e(i,o,a),r>s&&(e.value=s),e.previousElementSibling.textContent=`${s}%`})),We.addEventListener("click",(e=>{const n=t("data-type",e.target,e.currentTarget);if(!n)return;const{canvasWidth:i,canvasHeight:o}=Ie();Ge("out"===n.attrValue?.8:1.25,i/2,o/2)})),We.addEventListener("focus",(({target:e})=>{if("SPAN"===e.nodeName){const t=e.nextElementSibling;e.classList.remove("visible"),t.classList.add("visible"),t.focus(),t.addEventListener("blur",Je,{once:!0})}}),!0);const Ze=document.getElementById("js-resizer-list");function et(t,n,i){return new Promise((o=>{const r=new Image;r.onload=async function(){b({name:y(t.name),type:t.type,width:n,height:i,file:await e(r,t.type,{width:n,height:i})}),URL.revokeObjectURL(r.src),o()},r.src=URL.createObjectURL(t)}))}document.getElementById("js-resizer-option-btn").addEventListener("click",(()=>{Ze.insertAdjacentHTML("beforeend",'\n    <li class="resizer-list-item">\n      <label class="resizer-list-option">\n        <div class="resizer-list-option-label">Width</div>\n        <input type="number" class="input resizer-list-option-input" min="1" data-type="width">\n      </label>\n      <label class="resizer-list-option">\n        <div class="resizer-list-option-label">Height</div>\n        <input type="number" class="input resizer-list-option-input" min="1" data-type="height">\n      </label>\n    </li>\n  ')})),Ze.addEventListener("input",(({target:e})=>{const{checked:t}=document.getElementById("js-resizer-aspect-ratio"),n=parseInt(e.value||0,10);if(t){const t=e.getAttribute("data-type"),{aspectRatio:i}=Z(),o="width"===t?"height":"width",r=e.parentElement.parentElement.querySelector(`[data-type=${o}]`);r.value="width"===t?Math.round(n/i):Math.round(n*i)}})),document.getElementById("js-resize-btn").addEventListener("click",(async()=>{const{children:e}=Ze,{file:t}=Z();for(const n of e){const[{value:e},{value:i}]=n.querySelectorAll("input");e&&i&&await et(t,e,i)}}));a(359);"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").catch(console.log)})()})();