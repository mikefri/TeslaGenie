const CACHE = 'TeslaGenie-v1';
const PRECACHE = [
  '/TeslaGenie/',
  '/TeslaGenie/blog/',
  '/TeslaGenie/assets/css/main.css',
];

// ─── Install ────────────────────────────────────────────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// ─── Activate ───────────────────────────────────────────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ─── Fetch ──────────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const isHTML = event.request.headers.get('accept')?.includes('text/html');

  // ── NETWORK FIRST pour les pages HTML (articles toujours à jour) ──────────
  if (isHTML) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // On ne cache que les réponses valides
          if (response && response.status === 200 && response.type !== 'opaque') {
            const clone = response.clone();
            caches.open(CACHE).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => {
          // Fallback : on sert le cache si l'utilisateur est hors ligne
          return caches.match(event.request);
        })
    );
    return;
  }

  // ── CACHE FIRST pour les assets statiques (CSS, JS, images, fonts) ────────
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // On ne met en cache que les réponses valides
        if (
          !response ||
          response.status !== 200 ||
          response.type === 'opaque'
        ) {
          return response;
        }
        // On clone AVANT de consommer le body
        const responseToCache = response.clone();
        caches.open(CACHE).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});
