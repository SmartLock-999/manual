const CACHE_NAME = '3d-annotation-v1';
const urlsToCache = [
  './',
  './index.html',
  './icon.svg',
  'https://unpkg.com/three@0.164.1/build/three.module.js',
  'https://unpkg.com/three@0.164.1/examples/jsm/controls/OrbitControls.js',
  'https://unpkg.com/three@0.164.1/examples/jsm/renderers/CSS2DRenderer.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});