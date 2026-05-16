// Cache limpo — este app foi movido para https://gucfaria.github.io/entrainmind/
const CACHE = 'brainsync-retired';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // Apagar todos os caches antigos
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Sem cache — sempre busca da rede
  e.respondWith(fetch(e.request));
});
