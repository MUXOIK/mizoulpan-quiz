// Mizoulpan + : permet d'installer l'appli et de l'ouvrir sans internet.
// Toujours la version en ligne d'abord (nouveaux cours) ; la copie gardée seulement hors ligne.
const CACHE = 'mizoulpan-plus-v3';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim())
));
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok) { const copie = res.clone(); caches.open(CACHE).then(c => c.put(req, copie)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
