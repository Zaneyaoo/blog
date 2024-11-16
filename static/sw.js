self.addEventListener('install', (e) => {
    console.log('Service Worker installed');
    e.waitUntil(
      caches.open('static').then((cache) => cache.addAll(['/']))
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request))
    );
  });