if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,n)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=n(...e);return r.default||(r.default=i),r}))})))}}define("./sw.js",["./workbox-7c877640"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"162.js",revision:"f8121afbb13d75d15357525c44911658"},{url:"android-chrome-192x192.png",revision:"06e288101cadbc3c795f1acc929c0c55"},{url:"android-chrome-512x512.png",revision:"b2527a0d46b2a08af352b3f92e2a67a3"},{url:"apple-touch-icon.png",revision:"e3ff22abda2aafb4889a8321e825bb47"},{url:"assets/images/logo.png",revision:"b45c2be3d5201f7083be070124ae3436"},{url:"assets/images/pattern.png",revision:"5eb948023100bf6eb33094b3d68099eb"},{url:"favicon-16x16.png",revision:"31aaf6d4b6a55800092bace6e8f333ee"},{url:"favicon-32x32.png",revision:"66ee68f14bdc11359dec7280cc64cf12"},{url:"favicon.ico",revision:"b6ba326cd1a65d02fc6f0887fb0961c1"},{url:"index.html",revision:"3a77c74ef3046957fb1de66b7df767b3"},{url:"libs/jszip.min.js",revision:"5ac5d9711460c2e6f3bc71b0776089c7"},{url:"libs/jszip.min.js.LICENSE.txt",revision:"3ffa3c4536fdd8fa37a09b9b90d827c5"},{url:"main.css",revision:"638eaf99e2d02837a700bed1bf7eed87"},{url:"main.js",revision:"2622fbbdc7e4245b4cb04c7a1f95455b"},{url:"manifest.json",revision:"e3205ad2854d100157e9de066a5bd892"},{url:"vendor.js",revision:"51cc80a17e8bce2ef20b0524dae6d9a9"},{url:"ww.js",revision:"2ee7900b807f778bea82c0c104607d25"}],{}),self.__WB_DISABLE_DEV_LOGS=!0}));
