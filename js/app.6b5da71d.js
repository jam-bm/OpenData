(function(e){function t(t){for(var r,a,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e28a9":"c2f5dbb8","chunk-2d0e8e4d":"4da3f247","chunk-4a6bc7d0":"8ebcb994","chunk-b40a1a86":"876b76f5"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-b40a1a86":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0e28a9":"31d6cfe0","chunk-2d0e8e4d":"31d6cfe0","chunk-4a6bc7d0":"31d6cfe0","chunk-b40a1a86":"d64fef19"}[e]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],p.parentNode.removeChild(p),n(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("1da1"),a=(n("cadf"),n("551c"),n("f751"),n("097d"),n("a026")),o=n("8c4f");a["default"].use(o["a"]);var s=new o["a"]({mode:"history",scrollBehavior:function(){return window.scrollTo({top:0,behavior:"smooth"})},routes:[{path:"/",name:"analytics",component:function(){return n.e("chunk-b40a1a86").then(n.bind(null,"42e6"))}},{path:"/statistics",name:"statistics",component:function(){return n.e("chunk-4a6bc7d0").then(n.bind(null,"5bc0"))}},{path:"/login",name:"login-boxed",meta:{layout:"userpages"},component:function(){return n.e("chunk-2d0e28a9").then(n.bind(null,"7eaf"))}},{path:"/register",name:"register-boxed",meta:{layout:"userpages"},component:function(){return n.e("chunk-2d0e8e4d").then(n.bind(null,"8ae3"))}}]}),i=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),c=n("2f62"),u=n("8468"),l=n("bc3a"),d=n.n(l),p=function(){return sessionStorage.getItem("profileData")||localStorage.getItem("profileData")},f=!1,h="font-size: 12px;",m=d.a.create({baseURL:"http://134.122.30.219",timeout:6e4,headers:{"Content-Type":"application/json"}});m.interceptors.request.use((function(e){if(f)try{p();console.log("%c%s",h,"[Axios request log] ".concat(e.method.toUpperCase()," ").concat(e.baseURL+e.url," ").concat(JSON.stringify(e.params)||""))}catch(t){console.error(t)}return e})),m.interceptors.response.use((function(e){if(f)try{console.log("%c%s",h,"[Axios response log] [".concat(e.status,"] ").concat(e.config.method.toUpperCase()," ").concat(e.config.baseURL+e.config.url," ").concat(JSON.stringify(e.config.params)||"","\n"),e.data||"No data")}catch(t){console.error(t)}return e}),(function(e){var t="Ошибка при получении данных из сервера ".concat(e);return!e.response||401!==e.response.status&&403!==e.response.status||(localStorage.removeItem("profileData"),sessionStorage.removeItem("profileData"),delete m.defaults.headers.common["Authorization"],window.location.href="/login"),e.response&&500===e.response.status&&(t="Ошибка 500: внутренняя ошибка сервера"),(e.response&&408===e.response.status||"ECONNABORTED"===e.code)&&console.log("A timeout happend on url ".concat(helpers.mainUrl)),Promise.resolve({error:!0,errStr:t}),{error:!0,errStr:t}}));var b={checkAuthorization:function(e){e.state;var t=e.commit,n=(e.dispatch,localStorage.getItem("profileData")||sessionStorage.getItem("profileData"));if(!n)return sessionStorage.removeItem("profileData"),void localStorage.removeItem("profileData");t("setAuthorization",!0),t("setProfile",JSON.parse(n))},login:function(e,t){var n=e.commit;return"admin"==t.username&&"admin"==t.password&&(n("setAuthorization",!0),n("setProfile",t),!0)},logout:function(e){var t=e.commit;t("setAuthorization",!1),localStorage.removeItem("profileData"),sessionStorage.removeItem("profileData"),location.href="/login"},post:function(e,t){return m.post(t.url,t.data).then((function(e){if(e&&e.data)return e.data})).catch((function(e){return{error:e}}))},get:function(e,t){return m.get(t.url,t.data).then((function(e){return e.data})).catch((function(e){return{error:e}}))},put:function(e,t){return m.put(t.url,t.data).then((function(e){return e})).catch((function(e){return{error:e}}))},patch:function(e,t){return Object(u["a"])(e),new Promise(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.patch(t.url,t.data);case 3:a=e.sent,n(a),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())},delete:function(e,t){return Object(u["a"])(e),new Promise(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.delete(t.url,{data:t.data});case 3:a=e.sent,n(a),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())},getDistricts:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",m.get("/api/districts/",{params:n}).then((function(e){return e.data||[]})).catch((function(e){console.error(e)})));case 1:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),getDistrictsData:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(n),e.abrupt("return",m.get("/api/districts-data/",{params:n}).then((function(e){return e.data||[]})).catch((function(e){console.error(e)})));case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}a["default"].use(c["a"]);var w=new c["a"].Store({state:{Authenticated:!1,profileData:{}},mutations:{setAuthorization:function(e,t){e.Authenticated=t},setProfile:function(e,t){e.profileData=t,localStorage.setItem("profileData",JSON.stringify(e.profileData)),sessionStorage.setItem("profileData",JSON.stringify(e.profileData))}},actions:v({},b)}),y=n("5f5b"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},_=[],C="default",S={computed:{layout:function(){return(this.$route.meta.layout||C)+"-layout"}}},k=S,j=(n("5c0b"),n("2877")),x=Object(j["a"])(k,O,_,!1,null,null,null),D=x.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container app-theme-white"},[n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("Header")],1),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("Sidebar")],1),n("div",{staticClass:"app-main__outer"},[n("div",{staticClass:"app-main__inner"},[e._t("default")],2)]),n("b-modal",{attrs:{id:"modal1",title:"Bootstrap-Vue"}},[n("p",{staticClass:"my-4"},[e._v("Hello from modal!")])]),n("b-modal",{attrs:{id:"modallg",size:"lg",title:"Large Modal"}},[e._v("\n        Hello Modal!\n    ")]),n("b-modal",{attrs:{id:"modalsm",size:"sm",title:"Small Modal"}},[e._v("\n        Hello Modal!\n    ")])],1)},E=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-header header-shadow"},[n("div",{staticClass:"logo-src"}),n("div",{staticClass:"app-header__content"},[n("div",{staticClass:"app-header-left"}),n("div",{staticClass:"app-header-right"},[n("UserArea")],1)]),n("div",{staticClass:"app-header__mobile-menu"},[n("div",[n("button",{staticClass:"hamburger close-sidebar-btn hamburger--elastic",class:{"is-active":e.isOpen},attrs:{type:"button"},on:{click:function(t){return e.toggleMobile("closed-sidebar-open")}}},[e._m(0)])])]),n("div",{staticClass:"app-header__menu"},[n("span",[n("b-button",{staticClass:"btn-icon btn-icon-only",class:{active:e.isOpenMobileMenu},attrs:{variant:"primary",size:"sm"},on:{click:function(t){return e.toggleMobile2("header-menu-open")}}},[n("div",{staticClass:"btn-icon-wrapper"},[n("font-awesome-icon",{attrs:{icon:"ellipsis-v"}})],1)])],1)])])},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"hamburger-box"},[n("span",{staticClass:"hamburger-inner"})])}],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"search-wrapper",class:{active:e.searchOpen}},[n("div",{staticClass:"input-holder"},[n("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"Type to search"}}),n("button",{staticClass:"search-icon",on:{click:function(t){e.searchOpen=!e.searchOpen}}},[n("span")])]),n("button",{staticClass:"close",on:{click:function(t){e.searchOpen=!e.searchOpen}}})])])},$=[],W={data:function(){return{searchOpen:!1}}},R=W,T=Object(j["a"])(R,L,$,!1,null,null,null),z=T.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex"},[r("div",{staticClass:"header-btn-lg pr-0"},[r("div",{staticClass:"widget-content p-0"},[r("div",{staticClass:"widget-content-wrapper"},[r("div",{staticClass:"widget-content-left"},[r("b-dropdown",{attrs:{"toggle-class":"p-0 mr-2","menu-class":"dropdown-menu-lg",variant:"link",right:""}},[r("span",{attrs:{slot:"button-content"},slot:"button-content"},[r("div",{staticClass:"icon-wrapper icon-wrapper-alt rounded-circle"},[r("img",{staticClass:"rounded-circle",attrs:{width:"42",src:n("d815"),alt:""}})])]),r("button",{staticClass:"dropdown-item",attrs:{type:"button",tabindex:"0"},on:{click:function(t){return e.$store.dispatch("logout")}}},[e._v("Logout")])])],1),r("div",{staticClass:"widget-content-left  ml-3 header-user-info"},[r("div",{staticClass:"widget-heading"},[e._v(e._s(e.$store.state&&e.$store.state.profileData&&e.$store.state.profileData.username))]),r("div",{staticClass:"widget-subheading"},[e._v(e._s(e.$store.state&&e.$store.state.profileData&&0==e.$store.state.profileData.user_type?"Admin":"User"))])])])])])])},N=[],H=n("9d63"),U=n.n(H),B=n("ecee"),J=n("c074"),V=n("ad3d");B["c"].add(J["a"],J["b"],J["l"],J["c"],J["h"],J["d"],J["j"],J["k"],J["i"],J["f"]);var q={components:{VuePerfectScrollbar:U.a,"font-awesome-icon":V["a"]},data:function(){return{}},methods:{}},F=q,K=Object(j["a"])(F,I,N,!1,null,null,null),G=K.exports;B["c"].add(J["g"]);var Q={name:"Header",components:{SearchBox:z,UserArea:G,"font-awesome-icon":V["a"]},data:function(){return{isOpen:!1,isOpenMobileMenu:!1}},props:{},methods:{toggleMobile:function(e){var t=document.body;this.isOpen=!this.isOpen,this.isOpen?t.classList.add(e):t.classList.remove(e)},toggleMobile2:function(e){var t=document.body;this.isOpenMobileMenu=!this.isOpenMobileMenu,this.isOpenMobileMenu?t.classList.add(e):t.classList.remove(e)}}},X=Q,Y=Object(j["a"])(X,M,P,!1,null,null,null),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-sidebar sidebar-shadow",on:{mouseover:function(t){return e.toggleSidebarHover("add","closed-sidebar-open")},mouseleave:function(t){return e.toggleSidebarHover("remove","closed-sidebar-open")}}},[n("div",{staticClass:"app-header__logo"},[n("div",{staticClass:"logo-src"},[e._v("TEAM")]),n("div",{staticClass:"header__pane ml-auto"},[n("button",{staticClass:"hamburger close-sidebar-btn hamburger--elastic",class:{"is-active":e.isOpen},attrs:{type:"button"},on:{click:function(t){return e.toggleBodyClass("closed-sidebar")}}},[e._m(0)])])]),n("div",{staticClass:"app-sidebar-content"},[e._m(1)],1)])},te=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"hamburger-box"},[n("span",{staticClass:"hamburger-inner"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VuePerfectScrollbar",{staticClass:"app-sidebar-scroll"},[n("sidebar-menu",{attrs:{showOneChild:"",menu:e.accessMenu}})],1)}],ne=n("4776"),re={components:{SidebarMenu:ne["SidebarMenu"],VuePerfectScrollbar:U.a},data:function(){return{isOpen:!1,sidebarActive:!1,user_types:{root:0,user:1},menu:[{title:"Main",icon:"pe-7s-pen bg-premium-dark icon-gradient",href:"/",user_types:[1,0]},{title:"Statistics",icon:"pe-7s-graph bg-premium-dark icon-gradient",href:"/statistics",user_types:[1,0]}],collapsed:!0,windowWidth:0}},props:{sidebarbg:String},methods:{toggleBodyClass:function(e){var t=document.body;this.isOpen=!this.isOpen,this.isOpen?t.classList.add(e):t.classList.remove(e)},toggleSidebarHover:function(e,t){var n=document.body;this.sidebarActive=!this.sidebarActive,this.windowWidth=document.documentElement.clientWidth,this.windowWidth>"992"&&("add"===e?n.classList.add(t):n.classList.remove(t))},getWindowWidth:function(){var e=document.body;this.windowWidth=document.documentElement.clientWidth,this.windowWidth<"1350"?e.classList.add("closed-sidebar","closed-sidebar-md"):e.classList.remove("closed-sidebar","closed-sidebar-md")}},computed:{accessMenu:function(){return this.menu}},mounted:function(){this.$nextTick((function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()}))},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)}},ae=re,oe=Object(j["a"])(ae,ee,te,!1,null,null,null),se=oe.exports;B["c"].add(J["e"]);var ie={name:"app",components:{Header:Z,Sidebar:se,VuePerfectScrollbar:U.a,"font-awesome-icon":V["a"]},methods:{}},ce=ie,ue=Object(j["a"])(ce,A,E,!1,null,null,null),le=ue.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container app-theme-white"},[e._t("default")],2)},pe=[],fe={name:"app",components:{},methods:{}},he=fe,me=Object(j["a"])(he,de,pe,!1,null,null,null),be=me.exports,ge=n("4a7a"),ve=n.n(ge);n("e92b");a["default"].config.productionTip=!1,a["default"].use(y["a"]),a["default"].component("v-select",ve.a),a["default"].component("default-layout",le),a["default"].component("userpages-layout",be),s.beforeEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.dispatch("checkAuthorization");case 2:w.state.Authenticated?"/login"===t.path?(console.log(t.path,3),r("/")):(console.log(t.path,4),r()):"/login"!==t.path?(console.log(t.path,1),r("/login")):(console.log(t.path,2),r());case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),new a["default"]({el:"#app",router:s,store:w,template:"<App/>",components:{App:D}})},"5c0b":function(e,t,n){"use strict";var r=n("e332"),a=n.n(r);a.a},d815:function(e,t,n){e.exports=n.p+"img/man.06cae3a1.png"},e332:function(e,t,n){}});