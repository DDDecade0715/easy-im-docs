(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{441:function(t,e,a){"use strict";var r=a(2),s=a(133),n=a(54),i=a(17),c=a(18),o=a(134),g=a(71),u=a(70),l=a(29),h=u("splice"),m=l("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,p=Math.min;r({target:"Array",proto:!0,forced:!h||!m},{splice:function(t,e){var a,r,u,l,h,m,d=c(this),b=i(d.length),_=s(t,b),v=arguments.length;if(0===v?a=r=0:1===v?(a=0,r=b-_):(a=v-2,r=p(f(n(e),0),b-_)),b+a-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=o(d,r),l=0;l<r;l++)(h=_+l)in d&&g(u,l,d[h]);if(u.length=r,a<r){for(l=_;l<b-r;l++)m=l+a,(h=l+r)in d?d[m]=d[h]:delete d[m];for(l=b;l>b-r+a;l--)delete d[l-1]}else if(a>r)for(l=b-r;l>_;l--)m=l+a-1,(h=l+r-1)in d?d[m]=d[h]:delete d[m];for(l=0;l<a;l++)d[l+_]=arguments[l+2];return d.length=b-r+a,u}})},477:function(t,e,a){},539:function(t,e,a){"use strict";a(477)},571:function(t,e,a){"use strict";a.r(e);a(130),a(44),a(74),a(136),a(53),a(97),a(36),a(441),a(34),a(238),a(12),a(229),a(35),a(96),a(37),a(43),a(230),a(45),a(135);var r=a(92),s={data:function(){return{downloads:0}},computed:{features:function(){return this.$frontmatter.features},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}},created:function(){},methods:{toThousandslsFilter:function(t){var e=String(t);if(""===e||null==e)return"";var a=/\./g.test(e)?e.slice(0,e.indexOf(".")):e,r=/\./g.test(e)?e.substring(e.indexOf(".")):"";return(+a||0).toString().replace(/^-?\d+/g,(function(t){return t.replace(/(?=(?!\b)(\d{3})+$)/g,",")}))+r},npmPackageDownloads:function(t,e){return t=this._handlePackages(t),e=this._handleDateRange(e),this._getDownloadsOfDateRange(t,e)},_getDownloadsOfDateRange:function(t,e){var a=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var s,n,i,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=0,!Array.isArray(e)){r.next=9;break}return n=[],e.map((function(e){n.push(a._fetch(t,e))})),r.next=6,Promise.all(n);case 6:return i=r.sent,s=i.reduce((function(t,e){return t+e.downloads}),0),r.abrupt("return",s);case 9:return r.next=11,a._fetch(t,e);case 11:return c=r.sent,s=c.downloads,r.abrupt("return",s);case 14:case"end":return r.stop()}}),r)})))()},_fetch:function(t,e){var a=this;return new Promise((function(r,s){fetch("".concat("https://api.npmjs.org/downloads/point/").concat(e,"/").concat(t)).then(a._parseJSON).then((function(t){r(t)})).catch((function(t){s(t)}))}))},_parseJSON:function(t){return t.json()},_handleDateRange:function(t){if(t.indexOf(":")>-1){var e=t.split(":"),a=e,r=new Date(e[1]).getTime()-new Date(e[0]).getTime(),s=parseInt(r/31536e6);if(s>0){for(var n=0;n<s;n++){var i=this._getDate(a[n]);a.splice(n+1,0,i)}for(var c=0,o=a.length;c<o-1;c++)a[c]="".concat(a[c],":").concat(a[c+1]);return a.length=s+1,a}return t}return t},_getDate:function(t){var e=t.split("-");return e[0]=Number(e[0])+1,e.join("-")},_handlePackages:function(t){return Array.isArray(t)?"-,".concat(t.join(",")):t}}},n=(a(539),a(4)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"home-page-one-wrapper"},[a("section",{staticClass:"main"},[a("div",[a("h1",[t._v(t._s(t.$frontmatter.heroText||t.$title))]),t._v(" "),a("p",{staticClass:"description"},[t._v(t._s(t.$description))]),t._v(" "),t._m(0),t._v(" "),a("router-link",{staticClass:"btn-about",attrs:{to:t.$frontmatter.actionLink}},[t._v(t._s(t.$frontmatter.actionText))])],1)]),t._v(" "),a("section",{staticClass:"md-content-wrapper"},[a("Content")],1)])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{attrs:{target:"_black",href:"//github.com/TestsLing/easy-im/actions"}},[a("img",{attrs:{alt:"",src:"https://github.com/TestsLing/easy-im/workflows/Test/badge.svg"}})]),t._v(" "),a("a",{attrs:{target:"_black",href:"//github.com/TestsLing/easy-im/actions"}},[a("img",{attrs:{alt:"",src:"https://github.com/TestsLing/easy-im/workflows/Lint/badge.svg"}})]),t._v(" "),a("a",{attrs:{target:"_black",href:"//scrutinizer-ci.com/g/TestsLing/easy-im/?branch=master"}},[a("img",{attrs:{alt:"",src:"https://scrutinizer-ci.com/g/TestsLing/easy-im/badges/quality-score.png?b=master"}})]),t._v(" "),a("a",{attrs:{target:"_black",href:"//scrutinizer-ci.com/g/TestsLing/easy-im/?branch=master"}},[a("img",{attrs:{alt:"",src:"https://scrutinizer-ci.com/g/TestsLing/easy-im/badges/coverage.png?b=master"}})]),t._v(" "),a("a",{attrs:{target:"_black",href:"https://github.com/TestsLing/easy-im"}},[a("img",{attrs:{alt:"GitHub license",src:"https://img.shields.io/github/license/TestsLing/easy-im?style=flat&logo=github"}})]),t._v(" "),a("a",{attrs:{target:"_black",href:"https://github.com/TestsLing/easy-im"}},[a("img",{attrs:{alt:"GitHub stars",src:"https://img.shields.io/github/stars/TestsLing/easy-im?style=flat&logo=github"}})]),t._v(" "),a("a",{attrs:{target:"_black",href:"https://github.com/TestsLing/easy-im"}},[a("img",{attrs:{alt:"GitHub forks",src:"https://img.shields.io/github/forks/TestsLing/easy-im?style=flat&logo=github"}})]),t._v(" "),a("a",{attrs:{target:"_black",href:"https://github.com/TestsLing/easy-im"}},[a("img",{attrs:{alt:"",src:"https://app.codacy.com/project/badge/Grade/70a3149ea0ce4d2abe5bd3554480c0eb"}})]),t._v(" "),a("a",{attrs:{target:"_black",href:"https://github.com/TestsLing/easy-im"}},[a("img",{attrs:{alt:"",src:"https://badgen.net/packagist/dt/longing/easy-im"}})]),t._v(" "),a("a",{attrs:{target:"_black",href:"https://github.com/TestsLing/easy-im"}},[a("img",{attrs:{alt:"",src:"https://badgen.net/packagist/php/longing/easy-im"}})])])}],!1,null,"59450001",null);e.default=i.exports}}]);