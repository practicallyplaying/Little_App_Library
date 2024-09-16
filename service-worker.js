
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('pp-library-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/Images/icon-192x192.png',
        '/Images/icon-512x512.png',
        '/Images/pirate-icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
