if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const o=e=>n(e,r),a={module:{uri:r},exports:t,require:o};s[r]=Promise.all(i.map((e=>a[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-1bc7d4d5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"06467250cbd0057d01345b4b53f14006"},{url:"index.js",revision:"b3c610e191c49c69ecbab76e3b9cee6e"},{url:"main.css",revision:"8ee823069e66ac178439688b4001c9e9"},{url:"main.js",revision:"9baf3a2eb6e639614cd5a4f34329fa44"},{url:"144x144.png",revision:"da1fc237f28bf24ce23a3882613413c2"},{url:"168x168.png",revision:"e1391dcf388bbba84b9b04812cf0ea47"},{url:"192x192.png",revision:"8d85b04575c35c9f8e1e6bba0ea11b64"},{url:"256x256.png",revision:"bc8ab0651e3debb4e73835a9de05d5ca"},{url:"512x512.png",revision:"b294d15079f018bf82b6fdad29b97718"},{url:"manifest.webmanifest",revision:"f43e812a8d940501bd20a194c0043838"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*\.(?:js|css|gz|html|json)/i,new e.CacheFirst({cacheName:"sub-store-js-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/.*\.(?:png|svg|ico|woff|ttf|eot)/i,new e.CacheFirst({cacheName:"sub-store-res-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
