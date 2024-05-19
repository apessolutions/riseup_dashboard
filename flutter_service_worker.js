'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d2cbf7e4ac1ae00fc6214555e227b0d0",
"index.html": "e46ac17217bdf423a11a6f9e9acc5481",
"/": "e46ac17217bdf423a11a6f9e9acc5481",
"main.dart.js": "b913e22efa9b9b4703764273e2fe32d3",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8a50e85e9dc458e892f44d785e5778d3",
".git/config": "387ff45b9595841d6df5852eec9735c9",
".git/objects/61/80cb2528c2260b10b1a472ca95f2987d7633e3": "e1b6f78c5e73c9b350910104626e9696",
".git/objects/59/745c598a29759fbc21fee3f5898fe0517b05f7": "5741e2811289825e77f14cdf48f3b956",
".git/objects/59/ac599ca2aeed7dc9ac7dae0f30c65be43c8fa2": "12d3751fb4126f6877f4afbcc64ba150",
".git/objects/92/e726ecd35dbd957d5f41d90f4fdc83f584b78f": "67d1d6099289b324e1e8cdb6db063830",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "7a45402238decbda5a1817c517e1f276",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "d591a779859e5269a502d81064617f75",
".git/objects/9b/dd94f95ae0dfda43c3e078bc5f900d943964c7": "654d8e8a9bfd7ce03f82e3440a2b7ef3",
".git/objects/32/22323a98c3952d6721c2b116487e8392114ec5": "01986c3d4d41313946a776e1d3320d30",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "501d5ab5716c2ed4f4e1e47221629c14",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "3d929b619b43ce0cdaec16ed67513540",
".git/objects/b4/f1d45b02ab026b78555a4e4219f208d559cb54": "c76c1387633c5d8920e39e10ad949541",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ae/ee54af08c963adc50b2113f5d1612dfca8a0eb": "767aa36df9d2c388d8e4dc94fa71eeff",
".git/objects/e5/720f106be31664360c984d7a811e8e884fbb9c": "6002ef6b20be9a17ca51c8f811fb3eb4",
".git/objects/e5/6be7db367acefcc98c91d6e949e1eb129d42d4": "16b2a4051d4f68bd31ed0ea2f2da3183",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "26e88664696468ae8d5ce0608760da7a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/08295360251c73e80b2ddc7dc23bceca596a89": "52a3b692a4d65a0f4010af88f040de1c",
".git/objects/e3/56dd1551a69a51cb903269c9d9ae01e41f977c": "34a4c989273782253deb012ad0c131aa",
".git/objects/c6/d7fde05094b1d4f09e07a2abb9dde04f521c94": "d2f26648705dc00911ee7e7d335672df",
".git/objects/4e/1fc0cdb169637314ad1251faeced930eaa8602": "629d77fa45f4481da9a0f371200229ab",
".git/objects/20/54c946854f6f4b5e3f005626e3d9c0c06535a6": "5b18c9b0149a3eab8ecf8142ea53a400",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/4b/d92cf68c0c67de0b5bf7a7ae3a2619731e9d70": "8af051914b0a667540881a826e9c5275",
".git/objects/7d/0c4de82719d067451b2cf06f817e339dcf0d8e": "ccc8a5645c9d6fff1699c9137507734e",
".git/objects/29/60f1d08af83ea1653f1a98c172a63f825ddc6a": "93dfb010da0252efd2dc2bea8dbd2430",
".git/objects/29/718b9c54f3cf813ea0403d2e4c485f21480810": "8042e14689d42c8c10cd716585e3da41",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "970c7b604262ccb20ec82f39104e9cfb",
".git/objects/89/9887bb8c1564d50092b68c2bd1880bb9ca055d": "3c1c3fb2b85b09ae2c9b491cd7fe60b1",
".git/objects/45/73706f76a6ead59e8dbcb523efd3b9ed5ec8d6": "df4e06fff0cce4dbb6f0315fcc27d3d1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/80/e5aabe762367294e1d468e4a3463124ba1dfdf": "b471904409f33a31206d5bef645ce488",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/10/bf7b1ca6c7449c0e9a35e5a09d5670dd25fb7d": "061025ef52a0c4ba50a0be918e45eee4",
".git/objects/4c/ad2f8c76ef058a380d533aea6967adef01ada9": "31be7c62d8d0f408bde7a74881671dfd",
".git/objects/4c/67477620b4a6101cd6ab9d2859db762f2c1f45": "f0786349f1d773934471d07c733909e7",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "0bc19006a42d012c63c8b1207e68a80c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "bd6f798fe3e3942c14dc558521f59ca4",
".git/objects/96/9cb5acc976324ce3154c3396063b80184cdd67": "cbfda6b82daf22a2634200444d10cf89",
".git/objects/98/2b7ea26829ce4889126b0bd86e4196bc19ace4": "d568461b49b783785c135c69c6c67354",
".git/objects/98/7d256915f5a9ec4b3e27de8015a469620ea5e8": "2a4209003a36c44d2cb45f6c0e46bf10",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "9a2741a9017f3e943ec0b7f327c2c020",
".git/objects/99/28a79c5b77e6ffcc92b6e13feda2fb81c743fc": "112f95f3d734384dc1aadea85be89514",
".git/objects/63/1181c7b63522bd49f02bc8cb8cb4f62d338eba": "97ca0d2e0071a004fdba46040a327032",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/d2/6ad7c3e6fed8a2d5e5aad0a87d50030bb89412": "915c06e59b7b1baaa1ea41614774241d",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "0b78a2619a6aaf413ef84aef7ca14492",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/674103fd85a5b0d64f805eda325e7234b29d3e": "230417592fe33f9d7e5edc28c6c41818",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "4c96cc50b9aeb60a827c9dd2f34cdcbe",
".git/objects/e6/54022ee514cbdfeb08906d4e9dc59fdd2e97df": "d34503d03827e2c6122e6ac503b11d4a",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d13d543bd63eb7dc360abee9ae50c375",
".git/objects/fa/1f956325fa40a13431e779c5fa4b0fb485fd5b": "e56b8fa454fc328578e64c4b7dbd7f57",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "f2069cc735619c31824182a9254d47e5",
".git/objects/e9/0fa6fd277e87c05830d9d7b892149f2ff27158": "9afeb8972d70d750b4c0992f24a6d7fa",
".git/objects/e9/64bff7ba635aab3d37f73ec06e8429e68def8a": "05858c2ef16c81a4460bd80d94fd208a",
".git/objects/79/f760156a72305d23b2e143c72b8d0f333dfef1": "c2de8242243ab5c9c4ba5f755c6ea2ab",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "733ddcf1f8467729f0dab00912add93d",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "9fb736ffb37b61e228f0403ed08e43ba",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "fe2d8e778b22f092b9152a9ff9b15c75",
".git/objects/8d/b4a968e95b48a089a6b8d9d653894416b1f8f3": "d8827ed1109f9d78308e13625a004134",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/71/c962a9f4f7fe0e9d47a33970e4977d0ec2515b": "8b52d0b3a2d7c65e65738781c0c1bb4c",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "26aff0b4be772e8bf4e3aa148cef22bc",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "b1d0c708122e6715c7b8283c8a00db11",
".git/objects/8e/35bc7d1432e66542f892a28cd4d581776faa0c": "ec5efcea2a667a007bce1c1a49dd84aa",
".git/objects/8e/592efe1300d44f1b8d55bbe73e2c239b72477e": "df449dc7010e55cf0f0e31a7536496b4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5497fc8e4500463f2c3ca73886f83b31",
".git/logs/refs/heads/main": "5497fc8e4500463f2c3ca73886f83b31",
".git/logs/refs/remotes/origin/main": "b886dbff136c6e833fb0655d0fee1576",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8c48df3b8f323bec6561716c36213e55",
".git/refs/remotes/origin/main": "8c48df3b8f323bec6561716c36213e55",
".git/index": "6639f8dcce179f8529c8ff67c75339ac",
".git/COMMIT_EDITMSG": "abb82c660dc24714822d3e324cf087ca",
"assets/images/apes_logo.png": "0ec01f860fdbb8b48584526a324b5cd4",
"assets/images/riseup_icon2.png": "443d21bfece6112d733a426516f87d20",
"assets/images/riseup_icon3.png": "ebda43d9395e6ece1e3bc7ffa6b0f9f2",
"assets/images/right_effect.png": "459e618ad81c1df439cec22947127569",
"assets/images/left_effect.png": "0e4b7947c585dee9c24ddbd6a6a96256",
"assets/images/ramsis.jpg": "96a08767b5be010ee72493c210b404d0",
"assets/images/riseup_icon.png": "e9b45a575f91570368662597bf9d9673",
"assets/images/apes_text.png": "eedaaaee7f973a1651882dc1ec044005",
"assets/images/live_agenda_background.png": "d51c9b1750782ccac3448cd3ae1d0ef0",
"assets/images/VCardBG.png": "a853751796dc60c7b0d12acf060e37bc",
"assets/images/RiseUp_logo.png": "f2fe97de7fe6064d594a388fbeadd0df",
"assets/config.json": "36c277dc04e8c5947cb9264a6ae7a1a0",
"assets/AssetManifest.json": "53039d240392fed6e7e52cea0d7290f1",
"assets/NOTICES": "a16f6c3b31c8c3b9e415c393f9f328e8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "39cb871eb12c9268d9c3efb949f04758",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d6c98b584d7504be0ae0daa4f342ada",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "8015a50f9207546e0ba68d68a816e0b6",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4d9d65f44d918a1acab6b4349bc58bcc",
"assets/fonts/MaterialIcons-Regular.otf": "61547333d7cc2fc7851df4af477fdbfe",
"assets/assets/images/apes_logo.png": "0ec01f860fdbb8b48584526a324b5cd4",
"assets/assets/images/riseup_icon2.png": "443d21bfece6112d733a426516f87d20",
"assets/assets/images/riseup_icon3.png": "ebda43d9395e6ece1e3bc7ffa6b0f9f2",
"assets/assets/images/right_effect.png": "459e618ad81c1df439cec22947127569",
"assets/assets/images/left_effect.png": "0e4b7947c585dee9c24ddbd6a6a96256",
"assets/assets/images/ramsis.jpg": "96a08767b5be010ee72493c210b404d0",
"assets/assets/images/riseup_icon.png": "e9b45a575f91570368662597bf9d9673",
"assets/assets/images/apes_text.png": "eedaaaee7f973a1651882dc1ec044005",
"assets/assets/images/live_agenda_background.png": "d51c9b1750782ccac3448cd3ae1d0ef0",
"assets/assets/images/VCardBG.png": "a853751796dc60c7b0d12acf060e37bc",
"assets/assets/images/RiseUp_logo.png": "f2fe97de7fe6064d594a388fbeadd0df",
"assets/assets/config.json": "36c277dc04e8c5947cb9264a6ae7a1a0",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
