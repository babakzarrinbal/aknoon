importScripts("/aknoon/precache-manifest.7cd46ea51926b38ac3dc52a723d0420e.js", "/aknoon/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/aknoon/workbox-v4.3.1"});


workbox.setConfig({ modulePathPrefix: "/aknoon/workbox-v4.3.1", debug:false });

workbox.precaching.precacheAndRoute(
  self.__precacheManifest
);
workbox.routing.registerRoute(
  new RegExp('\\.[png|jpg|svg|html|js|css]$'),
  new workbox.strategies.CacheFirst()
);
// self.addEventListener("install", function(event) {
//   event.waitUntil(
//     caches.open('offlinecaches').then(function(cache) {
//       return cache.addAll(
//         [
//           '/aknoon/index.html'
//         ]
//       );
//     })
//   );
// });

// self.addEventListener("activate", function(event) {
//   // console.log("Service Worker activating.");
// });
// self.addEventListener("fetch", function(event) {
//   event.respondWith(function(){
//     return caches.match(event.request).then(function(response) {
//       // console.log('response',response.text());
//       // response.then('cacheresult',console.log);
//         if (response) {
//             // retrieve from cache
//             return response;
//         }
//         // if not found in cache, return default offline content (only if this is a navigation request)
//         if (event.request.mode === 'navigate') {
//             return caches.match('/zmovies/index.html');
//         }

//         // fetch as normal
//         return fetch(event.request);

//       });
//     });
// });

// self.addEventListener("push", function(event) {
//   // var data = event.data.json();
//   // const title = data.title || "Driver @ Dilivir";
//   // const options = {
//   //   body: data.body || "New orders",
//   //   icon: data.icon || "img/icons/logo.png",
//   //   badge: data.badge || "img/icons/logo.png",
//   //   data,
//   // };

//   // if (data.tag) options.tag = data.tag;
//   // const notificationPromise = self.registration.showNotification(
//   //   title,
//   //   options
//   // );
//   // event.waitUntil(notificationPromise);
// });

// self.addEventListener("notificationclick", function(event) {
//   // event.notification.close();
//   // event.waitUntil(
//   //   clients.openWindow(
//   //     "http://localhost:5000/#/" + (event.notification.data || {}).gotourl || ""
//   //   )
//   // );
// });

