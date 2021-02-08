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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5499820b6a6e67eb06c053a1a7753de4"
  },
  {
    "url": "alipay.png",
    "revision": "bca77f7cad38ac92553faaab2b575147"
  },
  {
    "url": "assets/css/0.styles.ac87daf5.css",
    "revision": "61b6c4ac8787b405f9a36beba7188a43"
  },
  {
    "url": "assets/img/1.7e1db593.png",
    "revision": "7e1db5932a2c77ae21d1a43658740d7c"
  },
  {
    "url": "assets/img/11.c5c08d41.png",
    "revision": "c5c08d41d176a6236d023effc1560ad1"
  },
  {
    "url": "assets/img/12.75aaa91e.png",
    "revision": "75aaa91eae44e66c67389f803548c481"
  },
  {
    "url": "assets/img/back.cc552dfd.svg",
    "revision": "cc552dfd1641ce914da841151bf34292"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bgm.52ef496c.png",
    "revision": "52ef496c6da155ea78b35a6a56f0300c"
  },
  {
    "url": "assets/img/darkBgm.4b951b61.png",
    "revision": "4b951b614825b06b4f765a5bf615d499"
  },
  {
    "url": "assets/img/home-blog.7765e6eb.png",
    "revision": "7765e6ebfae2dd800f7554015eff0428"
  },
  {
    "url": "assets/img/kanbannaing_1.9d4605aa.png",
    "revision": "9d4605aa2583bf47e34fd44310d28da7"
  },
  {
    "url": "assets/img/kanbanniang_2.ef1f6e5b.png",
    "revision": "ef1f6e5bd64755096091089e16cd6baa"
  },
  {
    "url": "assets/js/1.7cb51500.js",
    "revision": "42f4d56da0c23dc5b9538ccda32efbe9"
  },
  {
    "url": "assets/js/10.5f21c834.js",
    "revision": "4f2f7fae69192a623d174607a65b61b5"
  },
  {
    "url": "assets/js/100.dacf4851.js",
    "revision": "e881122dbf3b34d4a7d1013745a99153"
  },
  {
    "url": "assets/js/101.facde0a4.js",
    "revision": "ab6b8c96215ed3d5bb9c3f911b6dc75e"
  },
  {
    "url": "assets/js/102.8eddcf1c.js",
    "revision": "071c85ecb7e0cd143ab02f03a2fcebd7"
  },
  {
    "url": "assets/js/103.7ec01411.js",
    "revision": "ef760c6fd884ef6577dd7ff9f275fde6"
  },
  {
    "url": "assets/js/104.a3b18246.js",
    "revision": "d8015b4602a234a93bad60b73132a260"
  },
  {
    "url": "assets/js/105.62869880.js",
    "revision": "e88dfe17fca318f642f5002f06879c89"
  },
  {
    "url": "assets/js/106.fa97ee5c.js",
    "revision": "252791221d8e464f05b1aece3be596ce"
  },
  {
    "url": "assets/js/107.c1ad20cf.js",
    "revision": "f94cbc01037a32cedbfc6bafc14391d9"
  },
  {
    "url": "assets/js/108.74d75233.js",
    "revision": "74fbf779ea9da262f8ece9f92e88fc0b"
  },
  {
    "url": "assets/js/109.5fdbc6f3.js",
    "revision": "554107e086401f38e584df18e12f1cfc"
  },
  {
    "url": "assets/js/11.512ae5b9.js",
    "revision": "048fcf3f5eacf034e9ecd8f2258ab919"
  },
  {
    "url": "assets/js/110.c8a7ac99.js",
    "revision": "fdfc0e3cb69191ed82511bf64711628c"
  },
  {
    "url": "assets/js/111.db0f87de.js",
    "revision": "84987df3889f01525e3e158fbf0359de"
  },
  {
    "url": "assets/js/112.cefe4a1a.js",
    "revision": "45e3976a625579b4296846309af02b82"
  },
  {
    "url": "assets/js/113.56709eb1.js",
    "revision": "b0c9e06e1a1c9316ca96970977a5014b"
  },
  {
    "url": "assets/js/114.4cefdc04.js",
    "revision": "f8d2c1ff0b1a1dfb0893fa65de18b712"
  },
  {
    "url": "assets/js/115.66cfccd7.js",
    "revision": "4de7eada8bcf1abc24ddba88d7af0588"
  },
  {
    "url": "assets/js/116.e4617e40.js",
    "revision": "ed4afdf4124e1b8e1db3c9820751aafb"
  },
  {
    "url": "assets/js/117.171f0133.js",
    "revision": "db4ad4b579c7ff2866df8460e32c588d"
  },
  {
    "url": "assets/js/118.dbed3635.js",
    "revision": "47130a4dd9e56f8fc31b8aa18214a589"
  },
  {
    "url": "assets/js/119.cfc15325.js",
    "revision": "ef9c8c503a3d29939a0e0947320642d8"
  },
  {
    "url": "assets/js/12.14350a25.js",
    "revision": "73d14c3d7199bddcbd6fb5fdd95c75eb"
  },
  {
    "url": "assets/js/120.701fc982.js",
    "revision": "99ff98b61dbf998656e2313f66a2bbe6"
  },
  {
    "url": "assets/js/121.bf49822b.js",
    "revision": "69015e7671b4dafa14e50e9ccf3daca3"
  },
  {
    "url": "assets/js/122.b5703334.js",
    "revision": "bdc6c0c7e4a8d6601b86995f303fa574"
  },
  {
    "url": "assets/js/123.fda274d3.js",
    "revision": "d544f256704c5aeb1dce0d322851bf8b"
  },
  {
    "url": "assets/js/124.8321bc75.js",
    "revision": "5f7785afe620dc55a93ff0a686f7186a"
  },
  {
    "url": "assets/js/125.cde52bc2.js",
    "revision": "3c7db3e50f3dd768c075441e92283de6"
  },
  {
    "url": "assets/js/126.a36d9b98.js",
    "revision": "f9c5e7c6367b015b4c5edd4bd44337c7"
  },
  {
    "url": "assets/js/127.d9848c48.js",
    "revision": "0e36c615cbc996834c9bea799f3cd110"
  },
  {
    "url": "assets/js/128.808896a2.js",
    "revision": "9e164d42e4062b656fc35d31482d7fea"
  },
  {
    "url": "assets/js/129.87fb4de0.js",
    "revision": "9681bda2b7f5422ad0a6c31ccd2b11c4"
  },
  {
    "url": "assets/js/13.eb47c398.js",
    "revision": "7483817c18a63129e393d18dcbaeffb3"
  },
  {
    "url": "assets/js/130.e8fae419.js",
    "revision": "42a1c36024fdb3958c9ce20d1934e9d2"
  },
  {
    "url": "assets/js/131.72d00ddb.js",
    "revision": "8a659a3432a1d54d49da97463cc70585"
  },
  {
    "url": "assets/js/14.802f463d.js",
    "revision": "fbd38da8856d5be301d90a93e13ea2c6"
  },
  {
    "url": "assets/js/15.f67e8d8c.js",
    "revision": "69f9a9b7af26cfe3bc818b2499c6ebf3"
  },
  {
    "url": "assets/js/16.4fb94201.js",
    "revision": "6c5de8d629b3d0c70be640ab0575cb99"
  },
  {
    "url": "assets/js/17.b7ba5080.js",
    "revision": "9fa9f58926075ca72da3ba02e089f3f0"
  },
  {
    "url": "assets/js/18.dc504472.js",
    "revision": "7327f1b5e6870f77c60c942c0d63e7ed"
  },
  {
    "url": "assets/js/19.bad2f34e.js",
    "revision": "e7340c6e05258626b1ec856c6a622047"
  },
  {
    "url": "assets/js/2.2d3bf330.js",
    "revision": "97ffbe30e59d05294de585031e93f30f"
  },
  {
    "url": "assets/js/20.efee41bd.js",
    "revision": "548a900eb6f23c10eea370460bf60a21"
  },
  {
    "url": "assets/js/21.09b94dc2.js",
    "revision": "3fd6918c94bc2ef5042ca5296ae6c5b2"
  },
  {
    "url": "assets/js/22.1b03692e.js",
    "revision": "4c6a347603eee31ede3adb5e578bd908"
  },
  {
    "url": "assets/js/23.e2c12b46.js",
    "revision": "c53925754669dc86b5f45799f0b51669"
  },
  {
    "url": "assets/js/24.86a60042.js",
    "revision": "6f2a66d5ee02f9fdc0b2d5d4a59ac505"
  },
  {
    "url": "assets/js/25.fa836607.js",
    "revision": "7a06342917ac1a5482368b1f567863c5"
  },
  {
    "url": "assets/js/26.e9ba7b46.js",
    "revision": "d1ba15b05944fd699a643110f3b5a2f6"
  },
  {
    "url": "assets/js/27.187884ce.js",
    "revision": "c3ce2b4776f8c2a1320c347bc1ecfd38"
  },
  {
    "url": "assets/js/28.96b7a453.js",
    "revision": "e34329362f1ba16e89a70bf7f3e5de18"
  },
  {
    "url": "assets/js/29.8090f303.js",
    "revision": "e05b49148a7fc29b86ee8169fcec152e"
  },
  {
    "url": "assets/js/30.01aaae5c.js",
    "revision": "d9fa68626a39a263a999ce2e1dbe988a"
  },
  {
    "url": "assets/js/31.a740bb46.js",
    "revision": "758e866106b48c45a3e8fcefb44ccc1c"
  },
  {
    "url": "assets/js/32.175cdae3.js",
    "revision": "2682f0b808b6922b99b6920318cb360c"
  },
  {
    "url": "assets/js/33.957b1a01.js",
    "revision": "9b891af10e321a8f5ba1bb308d0ed0de"
  },
  {
    "url": "assets/js/34.02c55334.js",
    "revision": "6b3de10c28f305d3865692d519c7694a"
  },
  {
    "url": "assets/js/35.9ab5389d.js",
    "revision": "90670d1e6f03d2a0d97050665d0c1c42"
  },
  {
    "url": "assets/js/36.9f730b57.js",
    "revision": "26de35fa150ca7e8de6056e17d0eaf7a"
  },
  {
    "url": "assets/js/37.f6d72205.js",
    "revision": "3c2529ad062aa690aafe8b484a2a6eb2"
  },
  {
    "url": "assets/js/38.806712c6.js",
    "revision": "a88f309fea48a0f69b8521769059a979"
  },
  {
    "url": "assets/js/39.20555c7d.js",
    "revision": "ee7a0f23a926880d70525cc17fb0e687"
  },
  {
    "url": "assets/js/40.ac49b501.js",
    "revision": "fb9fee57c91eca472d08701f6ce5eeb5"
  },
  {
    "url": "assets/js/41.f21e87d1.js",
    "revision": "56efc200ab0ab8b47a42c8448ad17249"
  },
  {
    "url": "assets/js/42.cf266a86.js",
    "revision": "4066e34dc01d1754ceaa662d6a3e780b"
  },
  {
    "url": "assets/js/43.f40fffd6.js",
    "revision": "b502edfb76977c88c4e879f6df6eadaa"
  },
  {
    "url": "assets/js/44.9351ee9e.js",
    "revision": "3744d4e1742ed4bc891033f455422254"
  },
  {
    "url": "assets/js/45.999fae9e.js",
    "revision": "f64863fdf55536917e21a446fd4e35ee"
  },
  {
    "url": "assets/js/46.2369b054.js",
    "revision": "ce7eb74ea92113934b0eacd40e3a8ef3"
  },
  {
    "url": "assets/js/47.6aa389b0.js",
    "revision": "e88b3bb51749d737cfa100de14c3ba15"
  },
  {
    "url": "assets/js/48.cfab12ba.js",
    "revision": "7526f81f3bc52ae5f4c9d5c659802f21"
  },
  {
    "url": "assets/js/49.f8201547.js",
    "revision": "d8dd500229717ddc35c193fa97cf54cc"
  },
  {
    "url": "assets/js/5.070fd174.js",
    "revision": "6b30f5218b0dab221c3e2ca51b3d9c05"
  },
  {
    "url": "assets/js/50.68b260d4.js",
    "revision": "867ac5295ad303939eef88f9685c54f0"
  },
  {
    "url": "assets/js/51.ca3c90e8.js",
    "revision": "afbdcb195158a59b4c4fc6fd0886412e"
  },
  {
    "url": "assets/js/52.c7d481b8.js",
    "revision": "3a83a3fae06ab7928a40505d4da37922"
  },
  {
    "url": "assets/js/53.3d751c57.js",
    "revision": "1966c4793deab3715ce92bb3d2ba2c19"
  },
  {
    "url": "assets/js/54.547b8573.js",
    "revision": "440c60f9d353a34f5a8244ef42b4765e"
  },
  {
    "url": "assets/js/55.1563efc6.js",
    "revision": "95b2343b10301d6c69be20681065542a"
  },
  {
    "url": "assets/js/56.d6f22612.js",
    "revision": "e136bdd45d1594031d4588715a1e015b"
  },
  {
    "url": "assets/js/57.18cdd542.js",
    "revision": "9419b41380281dd7b0a54a6bd29f5b20"
  },
  {
    "url": "assets/js/58.264bd3e9.js",
    "revision": "2ee084e8e76285fb3d7255ded9acf25f"
  },
  {
    "url": "assets/js/59.63575abd.js",
    "revision": "032d213196042e293e6147c75f234a2f"
  },
  {
    "url": "assets/js/6.29320dfc.js",
    "revision": "a9eb301cc432fa5623ab64ce5b033fa2"
  },
  {
    "url": "assets/js/60.142f1834.js",
    "revision": "4704d5366e643ad1f565d2d4648101fb"
  },
  {
    "url": "assets/js/61.f3af9740.js",
    "revision": "4889fdff84d68c128d4292eaac6a990b"
  },
  {
    "url": "assets/js/62.a31d8359.js",
    "revision": "946f28bcfccf69b024a90402877f75be"
  },
  {
    "url": "assets/js/63.6b097bf4.js",
    "revision": "74aa0799c0c8d7d1614deaa2acc6147d"
  },
  {
    "url": "assets/js/64.0c0d17ac.js",
    "revision": "51eddb2ed485af0fc98721ac86d535ca"
  },
  {
    "url": "assets/js/65.dbc01515.js",
    "revision": "cae36b2f50c57b57fa28024251db83b5"
  },
  {
    "url": "assets/js/66.16812652.js",
    "revision": "e145ec49b39a49d9dad178dd219dd183"
  },
  {
    "url": "assets/js/67.353b3bf4.js",
    "revision": "42c030d4665c10eb0d625e4c81c17053"
  },
  {
    "url": "assets/js/68.45c5dea1.js",
    "revision": "05fb95b28d55fe1edf5975ee10cd5231"
  },
  {
    "url": "assets/js/69.1023b659.js",
    "revision": "58f2cba8697eb603189cbb52d5d64cb1"
  },
  {
    "url": "assets/js/7.2fc0169d.js",
    "revision": "2290568d9cecd7d8eec17b932f6b6411"
  },
  {
    "url": "assets/js/70.29be5343.js",
    "revision": "1871cc752066b9a1b207c709e6cd6f85"
  },
  {
    "url": "assets/js/71.f08ed929.js",
    "revision": "d5e34c371c64442652825fb3d8870697"
  },
  {
    "url": "assets/js/72.ac199c9f.js",
    "revision": "078b134bdadb9e6490eda18f71d8c9c6"
  },
  {
    "url": "assets/js/73.682d1723.js",
    "revision": "025c326f72f9d38c24f315c907a760a9"
  },
  {
    "url": "assets/js/74.dcf90d2c.js",
    "revision": "2d697c3cc3aecf5bc4ffbd27b0f250ed"
  },
  {
    "url": "assets/js/75.5b6cfc02.js",
    "revision": "3df69558f5c7f3a9e0156d546da0d470"
  },
  {
    "url": "assets/js/76.4d6de401.js",
    "revision": "a30173590cf756c51716b064db7c90e4"
  },
  {
    "url": "assets/js/77.6a21400a.js",
    "revision": "d77dc41b5a506a93e68adda19503c016"
  },
  {
    "url": "assets/js/78.03bce1d0.js",
    "revision": "fdb4218ae18fa1ba455f67096cf88b47"
  },
  {
    "url": "assets/js/79.ff048392.js",
    "revision": "d812d789ce78308be2edd7a7fe4d1449"
  },
  {
    "url": "assets/js/8.187721d9.js",
    "revision": "f3790422cb983a9e9a0cbe561c267d56"
  },
  {
    "url": "assets/js/80.694f6696.js",
    "revision": "1757ab5a8619095491e9523d4f1aed76"
  },
  {
    "url": "assets/js/81.185b1101.js",
    "revision": "daef39c71230a8a29fd008461a9e0c2e"
  },
  {
    "url": "assets/js/82.ddb70ca0.js",
    "revision": "e3babd36ea15d3b13d54942372bc0e8e"
  },
  {
    "url": "assets/js/83.2f5640f2.js",
    "revision": "a00fc015db6cc5bf203a8b58835502d7"
  },
  {
    "url": "assets/js/84.f79a4be3.js",
    "revision": "f8251a9e4f0e98aaf86e0fed8e7b755a"
  },
  {
    "url": "assets/js/85.a1863f8c.js",
    "revision": "92f85256851efa9cd9135fa5dec39aba"
  },
  {
    "url": "assets/js/86.5c2acdeb.js",
    "revision": "1f789cb7701d64e8c66177e820b791a7"
  },
  {
    "url": "assets/js/87.6de0acf3.js",
    "revision": "25ef61f9e4a3cda30852e34884beb88a"
  },
  {
    "url": "assets/js/88.1ff8fd96.js",
    "revision": "6b21323319de6425e05280d911d0a615"
  },
  {
    "url": "assets/js/89.ca42cdf3.js",
    "revision": "42f8bd3f963f76114a99897092f4fb14"
  },
  {
    "url": "assets/js/9.469d5623.js",
    "revision": "3c50d1be3d8cceb069fe046ef5e2d027"
  },
  {
    "url": "assets/js/90.15b590a7.js",
    "revision": "137ac25a9106235037a365941242098d"
  },
  {
    "url": "assets/js/91.4f35a1f4.js",
    "revision": "6461cc76662c6f377353c9ddf4cde4bb"
  },
  {
    "url": "assets/js/92.e9f73dab.js",
    "revision": "711ba2513c4adda45af9e6019860df4c"
  },
  {
    "url": "assets/js/93.9b19e83f.js",
    "revision": "b7b049ba178bf7de27d67efc20576116"
  },
  {
    "url": "assets/js/94.33a602fe.js",
    "revision": "a84573c1af4af8b4032efe5260fc0205"
  },
  {
    "url": "assets/js/95.aab446d8.js",
    "revision": "74ae101704a97f686beefb68ec3a851a"
  },
  {
    "url": "assets/js/96.e4035a0b.js",
    "revision": "f67d3e9f908732f7ea275b47dc986b5f"
  },
  {
    "url": "assets/js/97.26a465fc.js",
    "revision": "331907eca5fa81f85fc445b7a629754c"
  },
  {
    "url": "assets/js/98.e67ba38b.js",
    "revision": "4b7db16e50f301aa0233b342bc5dff93"
  },
  {
    "url": "assets/js/99.2a339b04.js",
    "revision": "a7d53424f27cf0c4828ad7dd5b944fbf"
  },
  {
    "url": "assets/js/app.d5213559.js",
    "revision": "bce40a0ee21f165d025a4d837d0f025d"
  },
  {
    "url": "assets/js/vendors~flowchart.f7f2bc42.js",
    "revision": "c11665d549a246921836849f6f7812c9"
  },
  {
    "url": "blogImages/Leecason.png",
    "revision": "7c60fbffa793a1cb7dd2aacb913050b6"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "6f13f085eb960b277af62b54a0629413"
  },
  {
    "url": "categories/index.html",
    "revision": "39fd7a756e62cfce60134e31e6400d55"
  },
  {
    "url": "googleea31ca71997d7a22.html",
    "revision": "e8e6adbd7e5aec4222f1e8f9ea95fdfe"
  },
  {
    "url": "head.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "hero_old.png",
    "revision": "4e87182c817155fe1c94932ca2608e1f"
  },
  {
    "url": "icon_vuepress_reco.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "9c8ef4f59bb22b73bf742a074b494b40"
  },
  {
    "url": "rvcode_qq.png",
    "revision": "e2cae62f60f6a125cacfca17298f2858"
  },
  {
    "url": "tag/index.html",
    "revision": "d8a2d34f1b1eac8c281e708fb8fe46ce"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d7c3fbb58ef3642644dcb02e73f8a47"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "e9bb4c7560208fe6c3a61a83802f9b3e"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "b6f8fa9fd10208939a1aafa9679cd9bd"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "37c90e7ef7deee5e7a78e839a2428b79"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "463c8e64731ed4bbe6a15e050b660592"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "90424da61e6affbea8eb540c0e2cbca2"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "6b1a994350e5299591f5eb235b669471"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "c1ce5c629d43f5be38f4b17c3dde0f25"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "643966135bd1ab7f3e141cfe2b96d423"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "b5b7499eb867dadf80856c23b32f236c"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "833160274aa0c8b9309e509979861ccf"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "e9bb4c7560208fe6c3a61a83802f9b3e"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "d42e9c215806749931b1b24999b98e1c"
  },
  {
    "url": "views/1.x/codeTheme.html",
    "revision": "be5a253a98e28fa0bc16d81d8c70732d"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "37c90e7ef7deee5e7a78e839a2428b79"
  },
  {
    "url": "views/1.x/customStyleAndScript.html",
    "revision": "a8180ba86303d311d03b7ac3d561bae0"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "ccf80df4e31fa2ab0fe1fb799c6b73a7"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "463c8e64731ed4bbe6a15e050b660592"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "90424da61e6affbea8eb540c0e2cbca2"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "6b1a994350e5299591f5eb235b669471"
  },
  {
    "url": "views/1.x/local.html",
    "revision": "3c0f793a9f288c548e97111084d0b038"
  },
  {
    "url": "views/1.x/mode.html",
    "revision": "aae8a14041b6f16d814a42beee44d8bc"
  },
  {
    "url": "views/1.x/notfound.html",
    "revision": "79b1e46dec2a3ab2183c69fa49f09254"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "c1ce5c629d43f5be38f4b17c3dde0f25"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "366fb8e73b7ba1511ccda825a8f093f9"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "0182148b0f4bdb687ecb1a7d14a8f0ec"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "fa5b2075e1ff40781b5614953557d535"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "b5b7499eb867dadf80856c23b32f236c"
  },
  {
    "url": "views/1.x/updatetoone.html",
    "revision": "9ed8cf91a194982b29a46845ffff9bbb"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "38f7329afbf0d89302048fc8040d8f49"
  },
  {
    "url": "views/other/about.html",
    "revision": "7041b47d17e15c70f2290a3aaf947e04"
  },
  {
    "url": "views/other/develop.html",
    "revision": "bc9e87e385ef9cd1c780d8e6c40373dc"
  },
  {
    "url": "views/other/donate.html",
    "revision": "58a6914a5debfa4a7ad87a6df9542f45"
  },
  {
    "url": "views/other/messageBoard.html",
    "revision": "373a58b18a86c629737693498cb32c14"
  },
  {
    "url": "views/other/question.html",
    "revision": "895cd02428929bf3eccb29635546fd91"
  },
  {
    "url": "views/other/recommend.html",
    "revision": "06a3f4cde4534c7a2466e1cd1b992294"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "f71b540c45ae57340e4e7797c2d49f7e"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "261ad44c5a91af0a2094e1630e5ebbb3"
  },
  {
    "url": "views/plugins/bgmPlayer.html",
    "revision": "5fcb527f3f002a0e1a777e73450ba900"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "eb46eee9922a90f3967d8aa32d63e2d2"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "4de4772081c61e21c5a790ac553e15ab"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "4df1598c9eefbdb42813ea8c0dbf00a6"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "90424da61e6affbea8eb540c0e2cbca2"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "eaab96425d99664682762c69b6411e28"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "77d92c20a50b1e50df9e4a39dacfb34c"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "000c0891f57429f1ef3672516a1b43b2"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "15bb1b5db2d3921e1481d2fcf30456a4"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "b8011842a8ee8873ecc37af6a78c8a49"
  },
  {
    "url": "views/tencent/1.0/account/accountCheck.html",
    "revision": "2b61feda1715456e97edb46a753a3a65"
  },
  {
    "url": "views/tencent/1.0/account/accountDelete.html",
    "revision": "bd6dd765376a396f4194d92019832059"
  },
  {
    "url": "views/tencent/1.0/account/accountImport.html",
    "revision": "31abbefd1f552cfdf7c04c30bd94a083"
  },
  {
    "url": "views/tencent/1.0/account/kick.html",
    "revision": "d61c7dbbc7a6ca313159426340b6e51b"
  },
  {
    "url": "views/tencent/1.0/account/multiAccountImport.html",
    "revision": "0759821c8038c48302a72fe5e9f6878a"
  },
  {
    "url": "views/tencent/1.0/account/queryState.html",
    "revision": "5b50fec94681779fde67215ca7e28c93"
  },
  {
    "url": "views/tencent/1.0/base/configuration.html",
    "revision": "e1d07d91409e8ca6adc004108feb4214"
  },
  {
    "url": "views/tencent/1.0/base/index.html",
    "revision": "5e64eba4b05bf03f492f472cabca0977"
  },
  {
    "url": "views/tencent/1.0/base/installation.html",
    "revision": "489053fbdeb831da0121e99e20920797"
  },
  {
    "url": "views/tencent/1.0/base/integration.html",
    "revision": "222f0dadc7059ca34c325d6d72e4fc42"
  },
  {
    "url": "views/tencent/1.0/base/introduction.html",
    "revision": "9051d21f644e895a740f087d7ca6d0a2"
  },
  {
    "url": "views/tencent/1.0/base/troubleshooting.html",
    "revision": "1be081d775ae2946a50ddac9279b93a1"
  },
  {
    "url": "views/tencent/1.0/base/tutorial.html",
    "revision": "034fc95d9be5530390858a16679d6ab8"
  },
  {
    "url": "views/tencent/1.0/group/addMember.html",
    "revision": "2ee975f86d69226e9da9ccbca8e8a74b"
  },
  {
    "url": "views/tencent/1.0/group/changeOwner.html",
    "revision": "d32662cabbcfcbd31c64befdbfa184ed"
  },
  {
    "url": "views/tencent/1.0/group/create.html",
    "revision": "fa99d0bfb9c62016da306c6eeafc8c1b"
  },
  {
    "url": "views/tencent/1.0/group/deleteGroupMsg.html",
    "revision": "65347df6b963a6bd2315ecf93ebcf997"
  },
  {
    "url": "views/tencent/1.0/group/deleteMember.html",
    "revision": "78065cc2a28377712e09bdec010295e0"
  },
  {
    "url": "views/tencent/1.0/group/destroy.html",
    "revision": "b7e7be268e9c600932c985b53c9793a9"
  },
  {
    "url": "views/tencent/1.0/group/forbidMsg.html",
    "revision": "19d41f427c8226acac86bd92001b669a"
  },
  {
    "url": "views/tencent/1.0/group/get.html",
    "revision": "1e6efa7ceb13c83325c5353b8b503c8b"
  },
  {
    "url": "views/tencent/1.0/group/getGroupShut.html",
    "revision": "efccbdeadcceadbac9ecdc9252abdc46"
  },
  {
    "url": "views/tencent/1.0/group/getJoined.html",
    "revision": "f8bc46eefc4dfaa133d88d0c0965361c"
  },
  {
    "url": "views/tencent/1.0/group/getMember.html",
    "revision": "642863856ddbc40f71f7ebb7b719fc80"
  },
  {
    "url": "views/tencent/1.0/group/getMsgSimple.html",
    "revision": "bb55081fc26e9581d67a900f20734b3d"
  },
  {
    "url": "views/tencent/1.0/group/getRole.html",
    "revision": "3b00783e490d3d9e646c79b94373e816"
  },
  {
    "url": "views/tencent/1.0/group/importGroup.html",
    "revision": "1a276b7bedc7bc24cb579cb6f83bc8f9"
  },
  {
    "url": "views/tencent/1.0/group/importGroupMember.html",
    "revision": "288f29ea1478dd726ceb328741d99b79"
  },
  {
    "url": "views/tencent/1.0/group/importGroupMsg.html",
    "revision": "36e42d87a156f0ad93a2e709389d1930"
  },
  {
    "url": "views/tencent/1.0/group/modify.html",
    "revision": "04f4e01494b612a65b1852a5ae675027"
  },
  {
    "url": "views/tencent/1.0/group/modifyMember.html",
    "revision": "f9b21a0e53802a1953ee721334e4ab1b"
  },
  {
    "url": "views/tencent/1.0/group/recallGroupMsg.html",
    "revision": "c373448d10ba72f7c25c61ca5db31733"
  },
  {
    "url": "views/tencent/1.0/group/sendMsg.html",
    "revision": "30015523ae59ee76d1a00f05e94d31c3"
  },
  {
    "url": "views/tencent/1.0/group/sendNotification.html",
    "revision": "2c9d3c9cb119b392f4b95d7b4cad94fa"
  },
  {
    "url": "views/tencent/1.0/group/setUnreadMsgNum.html",
    "revision": "b6789704a1815f1183d1597c618e37e7"
  },
  {
    "url": "views/tencent/1.0/operate/getAppInfo.html",
    "revision": "ebbebbd9d1c79ab4dfae9ac973a40874"
  },
  {
    "url": "views/tencent/1.0/operate/getHistory.html",
    "revision": "804495bfd9010620cf4c2d0b15827429"
  },
  {
    "url": "views/tencent/1.0/operate/getIPList.html",
    "revision": "95f5b55539e8a15ee25e3e82d4cc1831"
  },
  {
    "url": "views/tencent/1.0/profile/getPortrait.html",
    "revision": "c1aa9142d528e2d4a9b0f06f05e344a9"
  },
  {
    "url": "views/tencent/1.0/profile/setPortrait.html",
    "revision": "14adc720a551e4c8c176baef0421cf22"
  },
  {
    "url": "views/tencent/1.0/singleChat/batchSendMsg.html",
    "revision": "ee2c407ab96b38e22196ed902212b3da"
  },
  {
    "url": "views/tencent/1.0/singleChat/importMsg.html",
    "revision": "7d2e98c0834efba32c8fc0d83dc3f8ee"
  },
  {
    "url": "views/tencent/1.0/singleChat/queryMsg.html",
    "revision": "28536b4a092326069903ec614ad62da8"
  },
  {
    "url": "views/tencent/1.0/singleChat/sendMsg.html",
    "revision": "83bb2e68f54a15db9610b07cdbe69041"
  },
  {
    "url": "views/tencent/1.0/singleChat/withdrawMsg.html",
    "revision": "21a3b136f8dd9619dd0da56cc70ded06"
  },
  {
    "url": "views/tencent/1.0/sns/addBlackList.html",
    "revision": "158228e45743d3cb1d841af0aa99afa4"
  },
  {
    "url": "views/tencent/1.0/sns/addFriend.html",
    "revision": "b889bd8f5e4226783955b7fd7e632851"
  },
  {
    "url": "views/tencent/1.0/sns/addGroup.html",
    "revision": "8c9c68708e276a5dbd318f93a1e16cae"
  },
  {
    "url": "views/tencent/1.0/sns/checkBlackList.html",
    "revision": "d944b5089484f96223584b1b6bc91d90"
  },
  {
    "url": "views/tencent/1.0/sns/checkFriend.html",
    "revision": "cb983eb1d9bb4bf5c8760af92a57cc07"
  },
  {
    "url": "views/tencent/1.0/sns/delBlackList.html",
    "revision": "a99c9cd496580ac2ac71916679fe8222"
  },
  {
    "url": "views/tencent/1.0/sns/deleteAllFriend.html",
    "revision": "c5b60bf6f931acbac4716ebdd0d0fccf"
  },
  {
    "url": "views/tencent/1.0/sns/deleteFriend.html",
    "revision": "95484e09a99d438e2b81baf908e63b6a"
  },
  {
    "url": "views/tencent/1.0/sns/delGroup.html",
    "revision": "4a8edff431f6923c2c749a7fd96ca12b"
  },
  {
    "url": "views/tencent/1.0/sns/getFriendList.html",
    "revision": "0d639052c666914f7121ff69dd30ade6"
  },
  {
    "url": "views/tencent/1.0/sns/getFriends.html",
    "revision": "2b8f2ef00930b36f8553cea0666cb767"
  },
  {
    "url": "views/tencent/1.0/sns/importFriend.html",
    "revision": "b0e5638ef71addd440f8dfa2f30914c2"
  },
  {
    "url": "views/tencent/1.0/sns/pullBlackList.html",
    "revision": "7ba67d399325bebfe978a8d2fcffc09c"
  },
  {
    "url": "views/tencent/1.0/sns/updateFriend.html",
    "revision": "c90eaeefef53ba70752857097323585c"
  },
  {
    "url": "views/tencent/1.0/speak/getGlobalNoSpeaking.html",
    "revision": "2764b991785a718eb8542ba314b124f6"
  },
  {
    "url": "views/tencent/1.0/speak/setGlobalNoSpeaking.html",
    "revision": "be167156e6ccef4f47422dedabf3e0d4"
  },
  {
    "url": "views/yunxin/1.0/chatroom/1.html",
    "revision": "83fc379e2590f02041b54d962c361536"
  },
  {
    "url": "wechat.png",
    "revision": "3a4c1b5c5c76322ce485dcac7e0e5cc8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
