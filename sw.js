if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let d={};const o=e=>i(e,t),l={module:{uri:t},exports:d,require:o};s[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BKWGvQR-.js",revision:null},{url:"assets/index-Cn9k4CPE.css",revision:null},{url:"index.html",revision:"b3443a3537dace6a3d054301ed17b9be"},{url:"registerSW.js",revision:"ae1fd8870d72f94dc1dfa7a9d6951705"},{url:"manifest.webmanifest",revision:"e62d2efb569368d5e1660daafa2cada4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
