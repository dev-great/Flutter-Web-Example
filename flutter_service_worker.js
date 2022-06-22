'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "436c648caef811a79cccd9846dd47ffd",
"assets/assets/fonts/Montserrat-Bold.ttf": "a8de8ffe262db7e277deb8f1c439c518",
"assets/assets/fonts/Montserrat-Medium.ttf": "5f797490f806b3b229299f0a66de89c9",
"assets/assets/fonts/Montserrat-Regular.ttf": "f7213526ec9296ff43426bfe3eae8926",
"assets/assets/images/0x4c6c535f4fece0957d443e1e3e49f2b6be9abb8f.png": "51cae4b4c8b8f76f5f481fd25ceaefc3",
"assets/assets/images/1_PCtz6KlvYOQ12TVcSNO3wA.jpg": "1b765c502e3783cca8736c2f5e7072c7",
"assets/assets/images/1_PCtz6KlvYOQ12TVcSNO3wAGGFHFHF.jpg": "587b788b09838abdbfc7cd88990a6787",
"assets/assets/images/2.jpg": "249d67f722045bd47c68a131aee44407",
"assets/assets/images/3.jpg": "03336d44a127ac30d250b03086f0ac01",
"assets/assets/images/301-3012503_mobile-number-icons-phone-icon-black-circle_prev_ui%25201.png": "2770c93a7509a3baa1f813205c5833af",
"assets/assets/images/301-3012503_mobile-number-icons-phone-icon-black-circle_prev_ui%25202.png": "f7dfdedbf4dc9fd46b319002762be145",
"assets/assets/images/301-3012503_mobile-number-icons-phone-icon-black-circle_prev_ui.png": "9923a2bdfeebec2a7cb8cd34a61cde82",
"assets/assets/images/3dfb073b-fb58-44b1-8041-2126bd851063%25201.png": "53b2bfb56a58c217e5f080e53ff381f1",
"assets/assets/images/3dfb073b-fb58-44b1-8041-2126bd851063.png": "d9465da6136105b3e9caeb5d429d602f",
"assets/assets/images/advides%25201.png": "0f1f42579f805db7f92315072723c68b",
"assets/assets/images/BEX%25201.png": "d75639cfb13808559617ceba916b3229",
"assets/assets/images/BEX_Logo_Symbol_gold-01.png": "a77c9c25530b4fbe92186d0b5de2184d",
"assets/assets/images/bottom-icons-proof-2%25201%2520(1).png": "4ced8467f9b00c9f310be68098de7f01",
"assets/assets/images/bottom-icons-proof-2%25202.png": "4d26c401ee835d9e9125c11d20b34336",
"assets/assets/images/bottom-icons-proof-2.png": "59f9b1b1808b7dea7932ed935d7152fa",
"assets/assets/images/busd-gid_1.png": "6c5d748400e21303e780bbc910f93190",
"assets/assets/images/deposit-light.png": "cbfe4d0ca6c79c9515da905f56e40953",
"assets/assets/images/download.png": "60a1dcf6b3fcddd32c3bf334abccb685",
"assets/assets/images/earn%25201.png": "b5b3945b8fd18edb502428026af36011",
"assets/assets/images/earn.png": "e12e2daad3a6453839eef72959016029",
"assets/assets/images/escrow%2520PIV%2520JPEG%25202.png": "3a8c54fd93e152a9a2825d5742af4eae",
"assets/assets/images/FAME%25201%2520(1).png": "9a619668ac1994f09b303effdf89b5c7",
"assets/assets/images/favpng_litecoin-cryptocurrency-bitcoin-logo.png": "a56fcc60ea6f497d7b5a63409ef47b3e",
"assets/assets/images/Group%25201000003572.png": "3a6c61a3803391053199f6227968c188",
"assets/assets/images/Group%25201000003573.png": "c1ffeb2c0fa2113de3dc2efc5b8983b5",
"assets/assets/images/Group%25201000003574.png": "4ebde78858c1620efa7e899ec17c469e",
"assets/assets/images/Group%25201000003575.png": "e2c2b3e490e28dfe1b41b176234228e4",
"assets/assets/images/Group%25201000003603.png": "e452012d6a4fc4d056c84a2337f2dc0a",
"assets/assets/images/Group%25201000003616.png": "d114c0654a097c0c796926e21285ca32",
"assets/assets/images/Group%25201000003626.png": "e9e7aa381c30dfe05526f298de83964a",
"assets/assets/images/Group%25201000003682.png": "f142a0aa776bf128928a6e86c315e259",
"assets/assets/images/Group%25201000003683.png": "5d0b37032aade39d352ea3939329c443",
"assets/assets/images/Group%25201000003686%2520(1).png": "819ebfd7ebfd3ed45f40ffed51a2fcba",
"assets/assets/images/Group%25201000003686.png": "819ebfd7ebfd3ed45f40ffed51a2fcba",
"assets/assets/images/Group%25201000003687.png": "8fb2eeb0a1f5a7463d3d7cd112a89185",
"assets/assets/images/Group%25201000003688.png": "54afe2f1d6947ccbdc8ada748add9f99",
"assets/assets/images/Group%25206693.png": "538be8fde5d9b01bca71e52d9f479e4f",
"assets/assets/images/Group%25206810.png": "575b2335edb5335603707d9a8370c980",
"assets/assets/images/homepage-exchange-xl@2x%25201.png": "60e56b045b705e2282826cb1ed102ec7",
"assets/assets/images/human-question-d-render-34583373.jpg": "a370f0f39a98765beddf2a29d38b1699",
"assets/assets/images/img-tips-withdraw-funds2x%25201.png": "ddd7ec2c586ec2c5af74fa7e16b2c11c",
"assets/assets/images/Img6.png": "e3501bed4ecd117e4ac49d82defa4708",
"assets/assets/images/IMG_3900%25201.png": "e529934da16a13a668b028c808538ed2",
"assets/assets/images/IMG_4321.PNG": "fa34e0df2af1a3eda665bbd9b17cae2b",
"assets/assets/images/IMG_4322.PNG": "eb9c744a89a8c6d07895ed0fe953f80c",
"assets/assets/images/IMG_4323.PNG": "9b3107ef22054caf8d301179454c9fc9",
"assets/assets/images/IMG_4325.PNG": "03b14fc8c50bb337dcedc15a5465461c",
"assets/assets/images/iPhone%252011%2520Pro%2520Mockup%2520label.png": "9acf383310afbda63eb3e6b535f9979e",
"assets/assets/images/login.png": "c1ffeb2c0fa2113de3dc2efc5b8983b5",
"assets/assets/images/logo.png": "6afc6e572d90198325e8ecfe969f58bc",
"assets/assets/images/Mask%2520group%2520(1).png": "a56ae60a2d0c0c33753a592f85580112",
"assets/assets/images/Mask%2520group%2520(2).png": "047740cd5cb651c1d2b61ab5ecf9bbd4",
"assets/assets/images/Mask%2520group.png": "7e6458933b907acf9ffea63317ed0b5f",
"assets/assets/images/PLURBIS%25201.png": "9e5788441da826b643d9656a8ea92463",
"assets/assets/images/ptp-light.png": "1ba667af5e3f590a923d1006e73d05de",
"assets/assets/images/RadicalCustomer_XL__07acbd6c187bbd318bc7c56f633c6f98%25201.png": "fe9de91655eb40ae7497d927447e7cf8",
"assets/assets/images/recover-deposit-light.png": "f7ea524aab300f5de95ba8c3fe9b1929",
"assets/assets/images/Screenshot%2520(10)%25202.png": "5688dd60178b64f57fbd041e4a2bbef0",
"assets/assets/images/Screenshot%2520(10)%25203%2520(1).png": "b11b2f0e53083fb51f81df94161dca97",
"assets/assets/images/Screenshot%2520(10)%25203.png": "28a03851e601fbe6794a88909c618e7a",
"assets/assets/images/Screenshot%2520(10)%25204%2520(1).png": "73426344ae88e1e0478348e36347992e",
"assets/assets/images/Screenshot%2520(10)%25204.png": "17765c0aedda61f95b8f9f3e52f8516a",
"assets/assets/images/Screenshot%2520(10)%25205.png": "389751ec95f053625aab2e819c2f5bd4",
"assets/assets/images/Screenshot%2520(10)%25206.png": "6663ab0d5cc387e5671f5099ba2c8ec1",
"assets/assets/images/Screenshot%2520(10)%25207.png": "d56ea51fe01d55869bce6f7e607dc883",
"assets/assets/images/Screenshot%2520(10)%25208.png": "40ff19bac57f74c429731cbceb4d8b06",
"assets/assets/images/Screenshot%2520(11)%25201.png": "fc621721b25814023be4abadef3a0bda",
"assets/assets/images/Screenshot%2520(32)%25201.png": "fad3ab2db1fb7b088663d01487528131",
"assets/assets/images/Screenshot%2520(49)%25201.png": "5b80e04b878838aeb52c1a8600a21974",
"assets/assets/images/serr%25201.png": "c0f4001457b1be9110f9ff3edce4ed8e",
"assets/assets/images/serr%25203.png": "dd5864d06f67addd77114069febfb7fe",
"assets/assets/images/serr%25204.png": "c24cbef8b87a185592345d9600fd6315",
"assets/assets/images/serr%25206.png": "ea9169bd97c5930d592b652ef4f49fe7",
"assets/assets/images/serr%25207.png": "9164afb89b4b191f5c29c67f06ea0d2b",
"assets/assets/images/set-cryptocurrencies-on-white-background-vector-21573598%25201.png": "c00f3b6bb182ce68b41c473910966bad",
"assets/assets/images/shiba%2520%25201.png": "9ce1b1485f798741ab3311fdd0069f88",
"assets/assets/images/signup.png": "3a6c61a3803391053199f6227968c188",
"assets/assets/images/TU8xVL8XY2AntQka5eCZywu1AXbaRyMtWb.png": "c053c0c7bcfe5fd42ea22c15301715ae",
"assets/assets/images/Vector.png": "e8fac5a2b12868ba99199ff663062dcb",
"assets/FontManifest.json": "0534677165962944e533889432292f16",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "57b76a2022891225c2e449251bb07aec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b82ea74eb41abe7aad2d7bf7ce6caf90",
"/": "b82ea74eb41abe7aad2d7bf7ce6caf90",
"main.dart.js": "ff5fef2b2563a1f696a44733889cab55",
"manifest.json": "ff5de607c7e50418c910adbadc15aa84",
"version.json": "446e4b660a118fae21614904d7172c95"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
