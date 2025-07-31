const CACHE_NAME = "pwa-demo-cache-v1";
const URLS_TO_CACHE = ["./", "./index.html", "./styles.css", "./app.js", "./manifest.json", "./icons/99x.svg", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});