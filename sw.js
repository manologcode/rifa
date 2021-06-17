/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "click.mp3",
    "revision": "285a43a73be9b290ab5d60cfe51ca27d"
  },
  {
    "url": "click.ogg",
    "revision": "8076dfdfb427025d05e47cca9be42bc2"
  },
  {
    "url": "images/fondo1.jpg",
    "revision": "8965f4ea7b9579530c7b1d813d3afb60"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "3fe992dba57d0915bcb9cb3f43353684"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "8b8db3b8960be8e8fc9d36c116a1938a"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "65ebd5c4b881ddc8cdc5fcdf7b259f16"
  },
  {
    "url": "images/icons/icon-16x16.png",
    "revision": "3d101064e085982f698981d19ce3c418"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "e8a26f04c12157ecd7f88343d64cbbbf"
  },
  {
    "url": "images/icons/icon-256x256.png",
    "revision": "eabbd3c9bbbfd8a76e22dbb3e73341e9"
  },
  {
    "url": "images/icons/icon-32x32.png",
    "revision": "cf8a1c9f45f312e8537fe8f4d10cc236"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "23199f9663c18891a731d12a43aab7b2"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a51f75c2e2671c11ba9328caeb112e16"
  },
  {
    "url": "images/options.png",
    "revision": "247a957cbc0d54970e18b7bf6bc56a39"
  },
  {
    "url": "images/start.png",
    "revision": "6981943c7f6af12c6733d39e0cc96ee4"
  },
  {
    "url": "index.html",
    "revision": "ff2ae92fbf0348d803e3a1de97df4ea6"
  },
  {
    "url": "js_css/fonts/Arimo-Bold.ttf",
    "revision": "31cf3c974f725ce750854143dfcca310"
  },
  {
    "url": "js_css/fonts/DS-DIGIT.TTF",
    "revision": "223f224650510797e0f06233d2a0f97b"
  },
  {
    "url": "js_css/images/ui-icons_444444_256x240.png",
    "revision": "119dd0c2e94ad689de873ef39fd43e6e"
  },
  {
    "url": "js_css/images/ui-icons_555555_256x240.png",
    "revision": "119dd0c2e94ad689de873ef39fd43e6e"
  },
  {
    "url": "js_css/images/ui-icons_777777_256x240.png",
    "revision": "119dd0c2e94ad689de873ef39fd43e6e"
  },
  {
    "url": "js_css/images/ui-icons_ffffff_256x240.png",
    "revision": "342bc03f6264c75d3f1d7f99e34295b9"
  },
  {
    "url": "js_css/jquery-3.1.1.min.js",
    "revision": "e071abda8fe61194711cfc2ab99fe104"
  },
  {
    "url": "js_css/jquery-ui.css",
    "revision": "c4a88ec0cb998929a670c0c58d7dc526"
  },
  {
    "url": "js_css/jquery-ui.min.js",
    "revision": "0a497d4661df7b82feee14332ce0bdaf"
  },
  {
    "url": "js_css/lottery.js",
    "revision": "41490756fb313875648fd7dd05d143df"
  },
  {
    "url": "js_css/style.css",
    "revision": "647ddb03c54340072ce5f2350c14c4b3"
  },
  {
    "url": "manifest.json",
    "revision": "d8885563e2c030efab478b51a7390181"
  },
  {
    "url": "premio.mp3",
    "revision": "2541740f7e249495eacc7d750a30a6ff"
  },
  {
    "url": "premio.ogg",
    "revision": "e48ad5d2a4c6e9a8fb1cca4059377968"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
