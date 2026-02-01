const CACHE_NAME = 'E5S-v1';
const ASSETS = [
  'index.html',
  'icon.png' // 如果你准备了图标的话
];

// 安装并缓存
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 拦截请求（离线时从缓存拿）
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});