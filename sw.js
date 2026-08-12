const CACHE='tiny-quest-v3';
const FILES=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./favicon.svg'];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request)));
});
