self.addEventListener('install', function(e) {
    console.log('Service Worker: Installed');
    e.waitUntil(
      caches.open('sheet-form-cache').then(function(cache) {
        return cache.addAll([
          '/',
          'index.html',
          'manifest.json',
          'style.css', 
          'icon-min.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(e) {
    console.log('Service Worker: Fetching');
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  });
  