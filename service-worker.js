const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/Images/icon-192x192-pirate.png',
  '/Images/icon-512x512-pirate.png'
];

<<<<<<< HEAD
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
=======
    const CACHE_NAME = 'practically-playing-cache-v1';
    const urlsToCache = [
        '/',
        '/index.html',
        '/manifest.json',
        '/Images/icon-192x192-pirate.png',
        '/Images/icon-512x512-pirate.png'
    ];

    self.addEventListener('install', event => {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(cache => {
                    console.log('Opened cache');
                    return cache.addAll(urlsToCache);
                })
        );
    });

    self.addEventListener('fetch', event => {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    if (response) {
                        return response; // Return the cached version
                    }
                    return fetch(event.request); // Perform network request if not in cache
                })
        );
    });

    self.addEventListener('activate', event => {
        const cacheWhitelist = [CACHE_NAME];
        event.waitUntil(
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheWhitelist.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName); // Delete old cache
                        }
                    })
                );
            })
        );
    });
    
>>>>>>> ec25f5d32481fb213b085c39cb8960005fb45f16
