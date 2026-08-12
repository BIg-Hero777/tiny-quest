const CACHE='tiny-quest-v2';
const FILES=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./favicon.svg'];

self.addEventListener('install',e=>{
 self.skipWaiting();
 e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});

self.addEventListener('activate',e=>{
 e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch',e=>{
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
