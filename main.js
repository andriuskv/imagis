(()=>{var e,t,n,i,o={856:()=>{let e=!1;function t({target:n}){let i=!0;n.closest(".panel-container")&&(i=!!n.closest(".bottom-bar-panel-btn")),i&&(e=!1,document.getElementById("js-bottom-bar-panel").classList.remove("visible"),window.removeEventListener("click",t))}document.getElementById("js-bottom-bar-panel-toggle-btn").addEventListener("click",(({currentTarget:n})=>{const i=n.nextElementSibling;e=!e,i.classList.toggle("visible",e),e?window.addEventListener("click",t):window.removeEventListener("click",t)}))},202:function(){!function(){"use strict";function e(e){var t=!0,n=!1,i=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function r(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!o[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function d(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function c(n){n.metaKey||n.altKey||n.ctrlKey||(s(e.activeElement)&&a(e.activeElement),t=!0)}function l(e){t=!1}function u(e){s(e.target)&&(t||r(e.target))&&a(e.target)}function m(e){s(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(i),i=window.setTimeout((function(){n=!1}),100),d(e.target))}function g(e){"hidden"===document.visibilityState&&(n&&(t=!0),v())}function v(){document.addEventListener("mousemove",h),document.addEventListener("mousedown",h),document.addEventListener("mouseup",h),document.addEventListener("pointermove",h),document.addEventListener("pointerdown",h),document.addEventListener("pointerup",h),document.addEventListener("touchmove",h),document.addEventListener("touchstart",h),document.addEventListener("touchend",h)}function f(){document.removeEventListener("mousemove",h),document.removeEventListener("mousedown",h),document.removeEventListener("mouseup",h),document.removeEventListener("pointermove",h),document.removeEventListener("pointerdown",h),document.removeEventListener("pointerup",h),document.removeEventListener("touchmove",h),document.removeEventListener("touchstart",h),document.removeEventListener("touchend",h)}function h(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,f())}document.addEventListener("keydown",c,!0),document.addEventListener("mousedown",l,!0),document.addEventListener("pointerdown",l,!0),document.addEventListener("touchstart",l,!0),document.addEventListener("visibilitychange",g,!0),v(),e.addEventListener("focus",u,!0),e.addEventListener("blur",m,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()}},s={};function r(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}};return o[e].call(n.exports,n,n.exports,r),n.exports}r.m=o,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var o=Object.create(null);r.r(o);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&i&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>s[e]=()=>n[e]));return s.default=()=>n,r.d(o,s),o},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},i="imagis:",r.l=(e,t,o,s)=>{if(n[e])n[e].push(t);else{var a,d;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==i+o){a=u;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",i+o),a.src=e),n[e]=[t];var m=(t,i)=>{a.onerror=a.onload=null,clearTimeout(g);var o=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(i))),t)return t(i)},g=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),d&&document.head.appendChild(a)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0};r.f.j=(t,n)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise(((n,o)=>i=e[t]=[n,o]));n.push(i[2]=o);var s=r.p+r.u(t),a=new Error;r.l(s,(n=>{if(r.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,i[1](a)}}),"chunk-"+t,t)}};var t=(t,n)=>{var i,o,[s,a,d]=n,c=0;if(s.some((t=>0!==e[t]))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(d)d(r)}for(t&&t(n);c<s.length;c++)o=s[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=globalThis.webpackChunkimagis=globalThis.webpackChunkimagis||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";r(202);function e(e,t,{width:n,height:i}){return new Promise((o=>{const s=document.createElement("canvas");s.width=n,s.height=i,s.getContext("2d").drawImage(e,0,0,n,i),s.toBlob(o,t)}))}function t(e,t,n=null){for(;t&&t!==n;){if(t.hasAttribute(e))return{elementRef:t,attrValue:t.getAttribute(e)};t=t.parentElement}}function n(e){const t=["B","kB","MB","GB"];let n=e,i=0;for(;i<t.length&&!(n<1e3);)n/=1e3,i+=1;return n=i>0?n.toFixed(1):Math.round(n),`${n} ${t[i]}`}const i=document.getElementById("js-bottom-bar-rotation");let o=0;function s(e){return e>180&&(e-=360),e*Math.PI/180}function a(e){let t=Math.round(180*function(e){const t=2*Math.PI,n=-t;return e>t?e-=t:e<n&&(e-=n),e}(e)/Math.PI);return t<0&&(t+=360),360===t?0:t}function d(e){const t=document.getElementById("js-rotation-input");t.value=e,t.previousElementSibling.textContent=`${e}°`}function c({currentTarget:e}){e.classList.remove("visible"),e.previousElementSibling.classList.add("visible"),(e.value<0||e.value>359)&&(e.value=a(o))}document.getElementById("js-rotation-input").addEventListener("input",(({target:e})=>{let t=parseInt(event.target.value,10)||0;t<0?t=0:t>360&&(t%=360);const n=function(e){return o=s(e),o}(t),i=a(n);requestAnimationFrame(ke),e.previousElementSibling.textContent=`${i}°`})),i.addEventListener("click",(e=>{const n=t("data-type",e.target,e.currentTarget);if(!n)return;const i=s(15);"left"===n.attrValue?o-=i:"right"===n.attrValue&&(o+=i);const r=a(o);requestAnimationFrame(ke),d(r)})),i.addEventListener("focus",(({target:e})=>{if("SPAN"===e.nodeName){const t=e.nextElementSibling;e.classList.remove("visible"),t.classList.add("visible"),t.focus(),t.addEventListener("blur",c,{once:!0})}}),!0);const l={flipH:1,flipV:1};document.getElementById("js-bottom-bar-flip-toggle-items").addEventListener("click",(({target:e,currentTarget:n})=>{const i=t("data-item",e,n);i&&(l[i.attrValue]*=-1,requestAnimationFrame(ke))}));const u=new Worker("./ww.js");u.onmessage=async function(e){const{default:t}=await r.e(162).then(r.t.bind(r,162,23));t(e.data,"images.zip")},u.onerror=function(e){console.log(e)};const m=document.getElementById("js-image-folder-list"),g=[],v={};let f=0;function h(e){const t=e.split("."),n=v[t[0]]||0;return v[t[0]]=n+1,t[0]+=`-${n}`,t.join(".")}function p(e){const t=document.getElementById("js-image-folder-item-count"),n=g.push(e);t.classList.remove("hidden"),t.innerText=n,function(){const e=document.createElement("div");e.classList.add("ping"),document.querySelector(".top-bar-image-folder-toggle-btn").appendChild(e),setTimeout((()=>{e.remove()}),4e3)}(),m.insertAdjacentHTML("beforeend",`\n    <li class="image-folder-list-item" data-index="${n-1}">\n      <button class="image-folder-enlarge-btn" data-type="enlarge" title="Enlarge">\n        <image src=${URL.createObjectURL(e.file)} class="image-folder-list-item-image" alt="">\n      </button>\n      <button class="image-folder-remove-btn" data-type="remove" title="Remove">\n        <svg viewBox="0 0 24 24">\n          <use href="#remove"></use>\n        </svg>\n      </button>\n    </li>\n  `),document.getElementById("js-image-folder-message").classList.add("hidden"),m.classList.add("visible")}function w(e,t){const i=n(e.file.size);return`${e.name} | ${t+1} / ${g.length} | ${e.width}x${e.height} | ${i}`}function b({key:e}){"ArrowRight"===e?y(1):"ArrowLeft"===e?y(-1):"Delete"===e&&j()}function y(e){1===e?f=(f+1)%g.length:-1===e&&(f=0===f?g.length-1:f-1),E(f)}function E(e){const t=g[e],n=URL.createObjectURL(t.file),i=document.getElementById("js-image-folder-viewer-image");URL.revokeObjectURL(i.src),i.src=n,document.getElementById("js-image-folder-viewer-image-link").href=n,document.getElementById("js-image-folder-viewer-header").textContent=w(t,e)}function L(e){if(e.target===e.currentTarget)return void x();const n=t("data-type",e.target,e.currentTarget);if(!n)return;const{attrValue:i}=n;"close"===i?x():"next"===i?y(1):"previous"===i?y(-1):"remove"===i&&j()}function j(){document.querySelectorAll(".image-folder-list-item")[f].remove(),g.splice(f,1),I(),g.length?(f=f>=g.length-1?g.length-1:f,E(f)):x()}function x(){const e=document.getElementById("js-image-folder-viewer");e.removeEventListener("click",L),e.remove(),window.removeEventListener("keydown",b)}function I(){const e=document.getElementById("js-image-folder-item-count");if(0===g.length)document.getElementById("js-image-folder-message").classList.remove("hidden"),m.classList.remove("visible"),e.classList.add("hidden");else{const t=[...m.children];e.innerText=g.length,t.forEach(((e,t)=>{e.setAttribute("data-index",t)}))}}m.addEventListener("click",(({target:e,currentTarget:n})=>{const i=t("data-type",e,n);if(!i)return;const o=t("data-index",e,n),{attrValue:s,elementRef:r}=o,{attrValue:a}=i;"enlarge"===a?(f=parseInt(s,10),function(e){const t=g[e],n=URL.createObjectURL(t.file);document.getElementById("js-editor").insertAdjacentHTML("beforeend",`\n    <div id="js-image-folder-viewer" class="js-top-bar-item image-folder-viewer">\n      <div id="js-image-folder-viewer-header" class="image-folder-viewer-header">${w(t,e)}</div>\n      <img src="${n}" id="js-image-folder-viewer-image" class="image-folder-viewer-image" alt="">\n      <div class="image-folder-viewer-footer">\n        <a href="${n}" id="js-image-folder-viewer-image-link" class="icon-btn-round" target="_blank" title="Open image in a new tab">\n          <svg viewBox="0 0 24 24">\n            <use href="#open-in-new"></use>\n          </svg>\n        </a>\n        <button class="icon-btn-round" data-type="previous" title="Previous image">\n          <svg viewBox="0 0 24 24">\n            <use href="#arrow-left"></use>\n          </svg>\n        </button>\n        <button class="icon-btn-round" data-type="next" title="Next image">\n          <svg viewBox="0 0 24 24">\n            <use href="#arrow-right"></use>\n          </svg>\n        </button>\n        <button class="icon-btn-round" data-type="remove" title="Remove image">\n          <svg viewBox="0 0 24 24">\n            <use href="#remove"></use>\n          </svg>\n        </button>\n      </div>\n      <button class="icon-btn-round image-folder-viewer-close-btn" data-type="close" title="Close">\n        <svg viewBox="0 0 24 24">\n          <use href="#close"></use>\n        </svg>\n      </button>\n    </div>\n  `),document.getElementById("js-image-folder-viewer").addEventListener("click",L),window.addEventListener("keydown",b)}(f)):"remove"===a&&(r.remove(),g.splice(s,1),I())})),document.getElementById("js-image-folder-download-btn").addEventListener("click",(()=>{var e;e=g,u.postMessage(e)}));let B={x:0,y:0,width:0,height:0},k="";function T(){return B}function M(){return k}function A(e,t,n){return t?e+="w":n&&(e+="e"),e}function C(e,t){const n=B.x,i=B.y,o=n+B.width,s=i+B.height;if(k="",(e>=n-8&&e<=o+8||e<=n+8&&e>=o-8)&&(t>=i-8&&t<=s+8||t<=i+8&&t>=s-8)){const r=e>=o-8&&e<=o+8,a=t>=s-8&&t<=s+8,d=e>=n-8&&e<=n+8;t>=i-8&&t<=i+8?k=A("n",d,r):a?k=A("s",d,r):r?k="e":d&&(k="w")}return k}function S(e={}){B={x:0,y:0,width:0,height:0,...e}}function $(e,t){const n=B.x,i=B.y,o=n+B.width,s=i+B.height;return(e>=n&&e<=o||e<=n&&e>=o)&&(t>=i&&t<=s||t<=i&&t>=s)}let O=document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGMatrix(),R=null;function z(){return O}function N(){return O.a}function U(e,t){O=O.translate(e,t),R.translate(e,t)}function P(e,t,n,i,o,s){O.a=e,O.b=t,O.c=n,O.d=i,O.e=o,O.f=s,R.setTransform(e,t,n,i,o,s)}function q(e,t){return{x:(e-O.e)/O.a,y:(t-O.f)/O.a}}const F=document.getElementById("js-top-bar-crop-panel");function D(){return F.querySelectorAll("[data-value]")}function H(){const e=D();for(let t=0;t<e.length;t+=1)e[t].value=""}function V(){const e=D(),t=[];for(const n of e){if(!n.validity.valid)return;t.push(parseInt(n.value,10)||0)}if(4===t.length){const{a:e,e:n,f:i}=z(),o=T();o.x=t[0]*e+n,o.y=t[1]*e+i,o.width=t[2]*e,o.height=t[3]*e,requestAnimationFrame(ke),Oe()}}F.addEventListener("change",V),document.getElementById("js-crop-panel-btn").addEventListener("click",V);const _=document.getElementById("js-top-bar-upload-panel"),W=document.getElementById("js-uploaded-images-file-input"),K=[];let Y=0,X=null;function G(){return K[Y]}function J(){const[e]=K;var t;Q(e),ne(document.querySelector(".uploaded-images-list-item")),te(e.name),t=e.blobUrl,ce.insertAdjacentHTML("beforeend",'<canvas id="js-canvas"></canvas>'),ce.classList.remove("hidden"),document.getElementById("js-intro").remove(),function(e){var t;ge=document.getElementById("js-canvas"),t=ge.getContext("2d"),R=t,xe(),Ue(e),ge.addEventListener("wheel",Me,{passive:!0}),ge.addEventListener("pointerdown",Ae),ge.addEventListener("dblclick",$e)}(t),window.addEventListener("resize",(()=>{requestAnimationFrame((()=>{!function(){const e=z();xe(),P(e.a,e.b,e.c,e.d,e.e,e.f)}(),ke()}))})),ue.classList.toggle("visible",me)}function Q(e){document.getElementById("js-uploaded-images-preview").innerHTML=`\n    <div class="uploaded-images-preview-info">${e.name}</div>\n    <div class="uploaded-images-preview-info">${e.width}x${e.height} | ${e.sizeString}</div>\n    <img src="${e.blobUrl}" class="uploaded-images-preview-image" alt="">\n  `}async function Z(e){const[t]=e.splice(0,1),i=await(o=t,new Promise((e=>{const t=new Image,i=URL.createObjectURL(o);t.onload=function(){e({file:o,blobUrl:i,name:o.name,sizeString:n(o.size),type:o.type,width:t.width,height:t.height,aspectRatio:t.width/t.height})},t.src=i})));var o;K.push(i),function(e){const t=document.getElementById("js-uploaded-images-list"),n=K.length-1;t.insertAdjacentHTML("beforeend",`\n    <li class="uploaded-images-list-item" data-index="${n}" data-type="image">\n        <button class="uploaded-images-list-btn">\n          <img src="${e.blobUrl}" class="uploaded-images-list-image">\n        </button>\n    </li>\n  `)}(i),function(){const e=document.createElement("div");e.classList.add("ping"),e.style.setProperty("--delay",2*Math.random()+"s"),document.getElementById("js-top-bar-upload-btn-container").appendChild(e),setTimeout((()=>{e.remove()}),4e3)}(),e.length?Z(e):X||J()}function ee(e){const t=function(e){return e.filter((e=>e.type.includes("image")))}([...e]);t.length&&Z(t)}function te(e){document.title=`${e} | Imagis`}function ne(e){X&&X.classList.remove("active"),X=e,X.classList.add("active")}function ie({target:e}){ee(e.files),e.value=""}W.addEventListener("change",ie),document.getElementById("js-intro-file-input").addEventListener("change",ie),_.addEventListener("click",(e=>{const n=t("data-type",e.target,e.currentTarget);if(n&&"image"===n.attrValue){const e=parseInt(n.elementRef.getAttribute("data-index"),10),{file:t,blobUrl:i}=K[e];e!==Y&&(Y=e,Q(K[e]),ne(n.elementRef),te(t.name),H()),Ue(i)}})),document.getElementById("js-intro-file-select-btn").addEventListener("click",(()=>{document.getElementById("js-intro-file-input").click()})),document.getElementById("js-uploaded-images-upload-btn").addEventListener("click",(()=>{W.click()})),window.addEventListener("drop",(e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy",ee(e.dataTransfer.files)})),window.addEventListener("dragover",(e=>{e.preventDefault()}));let oe="",se=!1;function re(e){return document.getElementById(`js-top-bar-${e}-panel`)}function ae(e){e.target.closest(".js-top-bar-item")||function(){const e=re(oe);se=!1,oe="",e.classList.remove("visible"),window.removeEventListener("mousedown",ae)}()}document.getElementById("js-top-bar-header").addEventListener("click",(e=>{const n=t("data-panel-name",e.target,e.currentTarget);if(!n)return;const{attrValue:i}=n;if(oe){re(oe).classList.remove("visible")}if(i===oe)se=!1,oe="",window.removeEventListener("mousedown",ae);else{const e=re(i);se=!0,oe=i,e.classList.add("visible"),window.addEventListener("mousedown",ae),"crop"===i&&function(){const e=T();if(!e.width||!e.height)return;const{a:t,e:n,f:i}=z(),o=n/t,s=i/t;let r=e.x,a=e.width,d=e.y,c=e.height;a<0&&(r+=a,a*=-1),c<0&&(d+=c,c*=-1);const l=[Math.round(r/t-o),Math.round(d/t-s),Math.round(a/t),Math.round(c/t)],u=D();for(let e=0;e<u.length;e+=1)u[e].value=l[e]}()}}));const de=new Image,ce=document.getElementById("js-editor"),le=document.getElementById("js-crop-btn"),ue=document.getElementById("js-selection-toggle-btn"),me=void 0!==window.orientation;let ge=null,ve=0,fe=0,he=null,pe="",we=!1,be=!1,ye=!1,Ee=!1,Le=!1;function je(){return{canvasWidth:ve,canvasHeight:fe}}function xe(){const e=window.innerWidth,t=window.innerHeight;ge.width=e,ge.height=t,ve=e,fe=t}function Ie(e,t=de){const n=o,{flipH:i,flipV:s}=l;if(function(e){e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,ve,fe),e.restore()}(e),e.save(),n){const i=t.width/2,o=t.height/2;e.translate(i,o),e.rotate(n),e.translate(-i,-o)}e.scale(i,s),e.translate(-1===i?-t.width:0,-1===s?-t.height:0),e.drawImage(t,0,0,t.width,t.height),e.restore()}function Be(e){const t=T(),n=Math.round(t.width),i=Math.round(t.height);let o,s=Math.round(t.x),r=Math.round(t.y);e.save(),e.lineWidth=1,e.strokeStyle="#006494",e.setTransform(1,0,0,1,0,0),n&&i&&(o=e.getImageData(s,r,n,i),n<0&&(s+=n),i<0&&(r+=i)),(n||i||we)&&function(e){e.fillStyle="rgba(0, 0, 0, .4)",e.fillRect(0,0,ve,fe)}(e),o&&e.putImageData(o,s,r),e.strokeRect(t.x+.5,t.y+.5,n,i),e.restore()}function ke(){const e=ge.getContext("2d");Ie(e),Be(e)}function Te(e="default"){ge.style.cursor=e}function Me(e){Ke(e.deltaY>0?.8:1.25,e.clientX,e.clientY)}function Ae(e){if(1!==e.which||se)return;if(Ee)return pe="resize",window.addEventListener("pointermove",Ce),window.addEventListener("pointerup",Se),void window.removeEventListener("pointermove",Re);const{clientX:t,clientY:n}=e,i=T(),o=i.width&&i.height,s=C(t,n);pe="select",we=o,e.shiftKey||be?(he=q(t,n),pe="drag"):(e.ctrlKey||me)&&o&&$(t,n)?(he={x:t-i.x,y:n-i.y},pe="move"):s&&o?pe="resize":S({x:t,y:n}),requestAnimationFrame(ke),le.classList.remove("visible"),ce.style.userSelect="none",window.addEventListener("pointermove",Ce),window.addEventListener("pointerup",Se),window.removeEventListener("pointermove",Re)}function Ce({clientX:e,clientY:t}){if(Le)return;Le=!0;const n=e>0?e:0,i=t>0?t:0;switch(pe){case"select":!function(e,t){const n=T();n.width=e-n.x,n.height=t-n.y}(n,i);break;case"resize":!function(e,t){const n=T(),i=M();"n"===i[0]?(n.height=n.y-t+n.height,n.y=t):"s"===i[0]&&(n.height=t-n.y);i.includes("w")?(n.width=n.x-e+n.width,n.x=e):i.includes("e")&&(n.width=e-n.x)}(n,i);break;case"move":!function(e,t){if(ye){const{a:n,e:i,f:o}=z();ze(e,"x","width",i,n),ze(t,"y","height",o,n)}else{const n=T();n.x=e-he.x,n.y=t-he.y}}(n,i);break;case"drag":!function(e,t){if(he){const n=q(e,t);U(n.x-he.x,n.y-he.y)}}(n,i)}requestAnimationFrame((()=>{ke(),Le=!1}))}function Se(){const e=T();pe="",ce.style.userSelect="auto",e.width&&e.height?Oe():(we=!1,Ie(ge.getContext("2d")),Te(),H()),window.removeEventListener("pointermove",Ce),window.removeEventListener("pointerup",Se)}function $e(){const e=T();if(!(e.width&&e.height))return;const{a:t,e:n,f:i}=z(),{width:o,height:s}=de,r=M().split("");if(e.height>0)r.includes("n")?(e.height=e.height+e.y-i,e.y=i):r.includes("s")&&(e.height=i+e.height+s*t-(e.y+e.height));else{const n=s*t;r.includes("n")?(e.height=e.height-(n-e.y)-i,e.y=n+i):r.includes("s")&&(e.height=e.height+i-(e.y+e.height))}if(e.width>0)r.includes("w")?(e.width=e.width+e.x-n,e.x=n):r.includes("e")&&(e.width=n+e.width+o*t-(e.x+e.width));else if(r.includes("w")){const i=o*t;e.width=e.width-(i-e.x)-n,e.x=i+n}else r.includes("e")&&(e.width=e.width+n-(e.x+e.width));requestAnimationFrame(ke)}function Oe(e){le.classList.add("visible"),e&&le.lastElementChild.classList.add("visible"),window.addEventListener("pointermove",Re)}function Re(e){const{clientX:t,clientY:n}=e;if(e.ctrlKey)Te($(t,n)?"move":"default");else{const e=C(t,n);Te(e?`${e}-resize`:"default")}}function ze(e,t,n,i,o){const s=T(),r=e-he[t],a=de[n]*o,d=s[n];if(d>0)s[t]=i+8>r&&i-8<r?i:i+8+a>r+d&&i-8+a<r+d?i+a-d:r;else{const e=r+d;s[t]=i+8>e&&i-8<e?i-d:i+8+a>r&&i-8+a<r?i+a:r}}function Ne(){Ee=!1,le.lastElementChild.classList.remove("visible"),document.getElementById("js-cut-mode-btn").lastElementChild.textContent="Enable Cut Mode"}function Ue(e){we=!1,le.classList.remove("visible"),o=0,d(0),S(),de.onload=function(){!function(e){const{canvasWidth:t,canvasHeight:n}=je(),{width:i,height:o}=e;let s=N();s=i>o?_e(i,o,t,n):_e(o,i,n,t);(function(e,t){P(1,0,0,1,e,t)})((t-i*s)/2,(n-o*s)/2),De(0,0,s),We(s)}(de)},de.src=e,Ne()}function Pe(e){const t=document.createElement("canvas"),n=t.getContext("2d"),{a:i,e:o,f:s}=z(),r={x:o/i,y:s/i},a=T(),d={x:Math.round(a.x/i),y:Math.round(a.y/i),width:Math.round(a.width/i),height:Math.round(a.height/i)};t.width=Math.round(ve/i),t.height=Math.round(fe/i),n.translate(r.x,r.y);const c=function(e,t,n){return Ie(n,e),n.getImageData(t.x,t.y,t.width,t.height)}(e,d,n);return t.width=c.width,t.height=c.height,n.putImageData(c,0,0),t}function qe(e,t){return new Promise((n=>{const i=Pe(e);i.toBlob((e=>{n({file:e,width:i.width,height:i.height})}),t)}))}le.addEventListener("click",(()=>{const{file:e,blobUrl:t}=G(),n=new Image;n.onload=async function(){if(Ee){const t=await qe(n,e.type),i=new File([t.file],h(e.name),{type:e.type});await Z([i]);const o=K,s=o.length-1,{blobUrl:r}=o[s];Ue(r),function(e){const t=document.getElementById("js-uploaded-images-list").children[e],n=K[e];Y=e,Q(n),ne(t),te(n.name)}(s),Ne()}else p({name:h(e.name),type:e.type,...await qe(n,e.type)})},n.src=t})),ue.addEventListener("click",(({currentTarget:e})=>{be=!be,e.textContent=be?"Enable Selection":"Disabled Selection"})),document.getElementById("js-cut-mode-btn").addEventListener("click",(({currentTarget:e})=>{if(Ee=!Ee,Ee){const t=T(),{a:n,e:i,f:o}=z(),{width:s,height:r}=de;t.x=i,t.y=o,t.width=s*n,t.height=r*n,Oe(Ee),e.lastElementChild.textContent="Disable Cut Mode"}else S(),e.lastElementChild.textContent="Enable Cut Mode",le.classList.remove("visible"),le.lastElementChild.classList.remove("visible");requestAnimationFrame(ke)})),document.getElementById("js-snap-checkbox").addEventListener("change",(e=>{ye=e.target.checked})),window.addEventListener("keydown",(e=>{if("a"===e.key&&e.ctrlKey){const t=T(),{a:n,e:i,f:o}=z(),{width:s,height:r}=de;t.x=i,t.y=o,t.width=s*n,t.height=r*n,requestAnimationFrame(ke),Oe(),e.preventDefault()}}));const Fe=document.getElementById("js-bottom-bar-zoom");function De(e,t,n){U(e,t),function(e){O.a=1,O.d=1,O=O.scale(e,e),R.setTransform(O.a,0,0,O.a,O.e,O.f)}(n),U(-e,-t),requestAnimationFrame(ke)}function He(e){return e<.08?e=.08:e>80&&(e=80),e}function Ve(e,t){return 1-1/(e/(e-t))}function _e(e,t,n,i){let o=1;return e>n&&(o=Ve(e,n),t*o>i&&(o=Ve(t,i))),He(o)}function We(e){const t=document.getElementById("js-zoom-input");e=Math.round(100*e),t.value=e,t.previousElementSibling.textContent=`${e}%`}function Ke(e,t,n){const i=N(),{x:o,y:s}=q(t,n),r=He(i*e);De(o,s,r),We(r)}function Ye({currentTarget:e}){e.classList.remove("visible"),e.previousElementSibling.classList.add("visible"),e.value<8&&(e.value=8)}document.getElementById("js-zoom-input").addEventListener("input",(({target:e})=>{const{canvasWidth:t,canvasHeight:n}=je(),{x:i,y:o}=q(t/2,n/2),s=parseInt(e.value,10)||0,r=He(s/100),a=Math.round(100*r);De(i,o,r),s>a&&(e.value=a),e.previousElementSibling.textContent=`${a}%`})),Fe.addEventListener("click",(e=>{const n=t("data-type",e.target,e.currentTarget);if(!n)return;const{canvasWidth:i,canvasHeight:o}=je();Ke("out"===n.attrValue?.8:1.25,i/2,o/2)})),Fe.addEventListener("focus",(({target:e})=>{if("SPAN"===e.nodeName){const t=e.nextElementSibling;e.classList.remove("visible"),t.classList.add("visible"),t.focus(),t.addEventListener("blur",Ye,{once:!0})}}),!0);const Xe=document.getElementById("js-resizer-list");function Ge(t,n,i){return new Promise((o=>{const s=new Image;s.onload=async function(){p({name:h(t.name),type:t.type,width:n,height:i,file:await e(s,t.type,{width:n,height:i})}),URL.revokeObjectURL(s.src),o()},s.src=URL.createObjectURL(t)}))}document.getElementById("js-resizer-option-btn").addEventListener("click",(()=>{Xe.insertAdjacentHTML("beforeend",'\n    <li class="resizer-list-item">\n      <label class="resizer-list-option">\n        <div class="resizer-list-option-label">Width</div>\n        <input type="number" class="input resizer-list-option-input" min="1" data-type="width">\n      </label>\n      <label class="resizer-list-option">\n        <div class="resizer-list-option-label">Height</div>\n        <input type="number" class="input resizer-list-option-input" min="1" data-type="height">\n      </label>\n    </li>\n  ')})),Xe.addEventListener("input",(({target:e})=>{const{checked:t}=document.getElementById("js-resizer-aspect-ratio"),n=parseInt(e.value||0,10);if(t){const t=e.getAttribute("data-type"),{aspectRatio:i}=G(),o="width"===t?"height":"width",s=e.parentElement.parentElement.querySelector(`[data-type=${o}]`);s.value="width"===t?Math.round(n/i):Math.round(n*i)}})),document.getElementById("js-resize-btn").addEventListener("click",(async()=>{const{children:e}=Xe,{file:t}=G();for(const n of e){const[{value:e},{value:i}]=n.querySelectorAll("input");e&&i&&await Ge(t,e,i)}}));r(856);"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").catch(console.log)})()})();