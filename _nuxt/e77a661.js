(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{130:function(t,e,n){"use strict";n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return m}));var r=n(16);n(4),n(44),n(32),n(60),n(20),n(35),n(18),n(21),n(45),n(37),n(51),n(38);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,h=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){h=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(h)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l="https://ralphdeving.github.io",h=function(meta){var t=[];return meta.description&&t.push({hid:"description",name:"description",content:meta.description}),meta.siteName&&t.push({hid:"og:site_name",property:"og:site_name",content:meta.siteName}),meta.type&&t.push({hid:"og:type",property:"og:type",content:meta.type}),meta.url?t.push({hid:"og:url",property:"og:url",content:l+meta.url}):t.push({hid:"og:url",property:"og:url",content:l}),meta.title&&t.push({hid:"og:title",property:"og:title",content:meta.title}),meta.description&&t.push({hid:"og:description",property:"og:description",content:meta.description}),meta.image&&(t.push({hid:"og:image",property:"og:image",content:meta.image.url}),meta.image.width&&t.push({hid:"og:image:width",property:"og:image:width",content:meta.image.width}),meta.image.height&&t.push({hid:"og:image:height",property:"og:image:height",content:meta.image.height})),meta.twitterSite&&(t.push({hid:"twitter:site",name:"twitter:site",content:meta.twitterSite}),t.push({hid:"twitter:creator",name:"twitter:creator",content:meta.twitterSite})),meta.twitterCard&&t.push({hid:"twitter:card",name:"twitter:card",content:meta.twitterCard}),meta.url?t.push({hid:"twitter:url",name:"twitter:url",content:l+meta.url}):t.push({hid:"twitter:url",name:"twitter:url",content:l}),meta.title&&t.push({hid:"twitter:title",name:"twitter:title",content:meta.title}),meta.description&&t.push({hid:"twitter:description",name:"twitter:description",content:meta.description}),meta.image&&t.push({hid:"twitter:image",name:"twitter:image",content:meta.image.url}),t},f=function(meta){var t=[];if(meta.createdAt&&t.push({property:"article:published_time",content:meta.createdAt}),meta.updatedAt&&t.push({property:"article:modified_time",content:meta.updatedAt}),meta.author&&t.push({property:"article:author",content:meta.author}),meta.section&&t.push({property:"article:section",content:meta.section}),meta.tags&&meta.tags.length>0){var e,n=o(meta.tags);try{for(n.s();!(e=n.n()).done;){var r=e.value;t.push({property:"article:tag",content:r})}}catch(t){n.e(t)}finally{n.f()}}return t},d=function(meta){var t=[];return meta.url?t.push({hid:"canonical",rel:"canonical",href:l+meta.url}):t.push({hid:"canonical",rel:"canonical",href:l}),t},m=function(t){var e={default:["https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&h=426&w=640"],archives:["https://images.pexels.com/photos/3747486/pexels-photo-3747486.jpeg?auto=compress&cs=tinysrgb&h=426&w=640"],error:["https://images.pexels.com/photos/9752183/pexels-photo-9752183.jpeg?auto=compress&cs=tinysrgb&h=426&w=640"],code:["https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&h=426&w=640","https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&h=426&w=640","https://images.pexels.com/photos/1972464/pexels-photo-1972464.jpeg?auto=compress&cs=tinysrgb&h=426&w=640","https://images.pexels.com/photos/3872166/pexels-photo-3872166.jpeg?auto=compress&cs=tinysrgb&h=426&w=640","https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&h=426&w=640","https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&h=426&w=640","https://images.pexels.com/photos/330771/pexels-photo-330771.jpeg?auto=compress&cs=tinysrgb&h=426&w=640","https://images.pexels.com/photos/113850/pexels-photo-113850.jpeg?auto=compress&cs=tinysrgb&h=426&w=640","https://images.unsplash.com/photo-1542903660-eedba2cda473?fit=crop&h=426&w=640","https://images.unsplash.com/photo-1555680510-34daedadbdb1?fit=crop&h=426&w=640"]},n=e.default[0],o=function(t){try{var e=t.split(":"),n=Object(r.a)(e,2),o=n[0],c=void 0===o?"default":o,l=n[1];return{kWord:c,index:Number(void 0===l?0:l)}}catch(t){return{kWord:"default",index:0}}}(t),c=o.kWord,l=o.index;try{e.hasOwnProperty(c)&&(n=l>=0&&l<e[c].length?e[c][l]:e[c][0])}catch(t){n=e.default[0]}return{url:n}}},167:function(t,e,n){"use strict";n.r(e);n(20);var r={name:"BaseHeading",inject:{theme:{default:function(){return{isDark:!1}}},heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}},dense:{type:Boolean,default:function(){return this.isDense}},size:{type:String,default:"text-h3"},space:{type:[Number,String],default:4},mobileSize:{type:String,default:"text-h4"},mobileBreakpoint:{type:[Number,String],default:768},tag:{type:String,default:"h1"},title:String,weight:{type:String,default:"black"}},computed:{classes:function(){var t=[this.fontSize,"font-weight-".concat(this.weight),"mb-".concat(this.space),"text-".concat(this.align),this.theme.isDark&&"white--text"];return t},fontSize:function(){return this.$vuetify.breakpoint.width>=this.mobileBreakpoint?this.size:this.mobileSize}}},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,t._g(t._b({tag:"component",class:t.classes},"component",t.$attrs,!1),t.$listeners),[t.title?[t._v("\n\t\t"+t._s(t.title)+"\n\t")]:t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},201:function(t,e,n){"use strict";var r=n(165),o=n.n(r);e.a=function(t){var e=t.$vuetify,n=t.store;try{var c=localStorage.getItem("$vuetify.theme.dark");null!=c&&(e.theme.dark="true"===c)}catch(t){console.dir(t)}window.onNuxtReady((function(t){var e,c="NUXT_VUEX_SHARED_CHANNEL";try{e=new r.BroadcastChannelStrategy({key:c})}catch(t){try{e=new r.LocalStorageStrategy({key:c})}catch(t){e=null}}null!=e&&o()({predicate:["themeStore/SET_THEME"],strategy:e})(n)}))}},202:function(t,e,n){"use strict";n(18),n(45),n(37),n(4),n(44),n(51),n(38);var r=n(23),o=(n(21),n(20),n(25),n(250),n(35),n(86),n(50)),c=function(t){for(var e,n=Object(o.a)(t),r=n.length;0!=r;){e=Math.floor(Math.random()*r),r--;var c=[n[e],n[r]];n[r]=c[0],n[e]=c[1]}return n};function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}e.a=function(t,e){var n=t.$content,o=t.$moment;e("fyShuffle",c),e("tagsAndTopics",Object(r.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("tags").only(["name","icon","slug"]).sortBy("slug","asc").fetch();case 2:return e=t.sent,t.next=5,n("topics").only(["name","icon","slug"]).sortBy("slug","asc").fetch();case 5:return r=t.sent,t.abrupt("return",{tags:e,topics:r});case 7:case"end":return t.stop()}}),t)})))),e("topicsToMap",(function(t){var e,n={},r=l(t);try{for(r.s();!(e=r.n()).done;){var o=e.value;n[o.slug]=o.name}}catch(t){r.e(t)}finally{r.f()}return n})),e("archives",Object(r.a)(regeneratorRuntime.mark((function t(){var e,r,c,h,f,d,m,y,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],r={},t.next=4,n("post",{deep:!0}).sortBy("createdAt","desc").fetch();case 4:c=t.sent,h=l(c);try{for(h.s();!(f=h.n()).done;)d=f.value,m=o.utc(d.createdAt,"YYYY-MM-DDTHH:mm:ssZ"),null==r[m.year()]&&(r[m.year()]={}),null==r[m.year()][m.month()+1]&&(r[m.year()][m.month()+1]=0),r[m.year()][m.month()+1]++}catch(t){h.e(t)}finally{h.f()}for(y in r)for(x in r[y])e.push({year:Number(y),month:Number(x),name:"".concat(y," ").concat(o.utc(x,"M").format("MMMM")," (").concat(r[y][x],")"),to:"/blog/archives/".concat(y,"/").concat(x)});return e.sort((function(a,b){var t=b.year-a.year;return 0==t?b.month-a.month:t})),e.length>6&&(e=e.slice(0,6)),e.push({name:"All...",to:"/blog/archives"}),t.abrupt("return",e);case 12:case"end":return t.stop()}}),t)}))))}},253:function(t,e,n){var content=n(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("f12cd7be",content,!0,{sourceMap:!1})},254:function(t,e,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("5042faf8",content,!0,{sourceMap:!1})},258:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("49daee58",content,!0,{sourceMap:!1})},275:function(t,e,n){"use strict";var r={},o=(n(357),n(30)),c=n(31),l=n.n(c),h=n(431),f=n(95),d=n(432),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-fade-transition",{attrs:{mode:"out-in"}},[n("v-app",[n("HomeAppBar"),t._v(" "),n("v-main",[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("Nuxt")],1)],1),t._v(" "),n("HomeFooter")],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{HomeAppBar:n(415).default,HomeFooter:n(417).default}),l()(component,{VApp:h.a,VFadeTransition:f.b,VMain:d.a})},278:function(t,e,n){"use strict";n.r(e);n(7),n(4),n(8),n(10),n(6),n(11);var r=n(2);n(20);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"BaseSection",mixins:[n(82).a],props:{space:{type:[Number,String],default:96}},computed:{styles:function(){var t=this.$vuetify.breakpoint.mdAndUp?this.space:this.space/2;return c(c({},this.measurableStyles),{},{padding:"".concat(t,"px 0")})}}},h=n(30),f=n(31),d=n.n(f),m=n(55),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-sheet",t._g(t._b({style:t.styles,attrs:{tile:""}},"v-sheet",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VSheet:m.a})},282:function(t,e,n){"use strict";n.r(e);var r={name:"BaseTitle",extends:n(167).default,props:{size:{type:String,default:"text-h5"},sizeMobile:{type:String,default:"text-h6"},weight:{type:String,default:"medium"}}},o=n(30),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var r={name:"BaseImage"},o=n(30),c=n(31),l=n.n(c),h=n(164),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-img",t._g(t._b({},"v-img",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:h.a})},285:function(t,e,n){t.exports=n.p+"img/docker-logo.60ec8a1.png"},286:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTUuNzQ5OCAyNy4xNTUxQzUyLjUyNzcgMjEuNjE1IDQ0LjQ3MjMgMjEuNjE0OSA0MS4yNTAyIDI3LjE1NTFMNi4xMzQwNCA4Ny41MzQ2QzIuOTExOTEgOTMuMDc0OCA2LjkzOTU2IDEwMCAxMy4zODM4IDEwMEg0MC43OTc1QzM4LjA0MzggOTcuNTkzNCAzNy4wMjQxIDkzLjQzMDMgMzkuMTA3OSA4OS44NTg0TDY1LjcwMzMgNDQuMjY5NEw1NS43NDk4IDI3LjE1NTFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzguMDAwMiA0MC4zOTk3QzgwLjY2NjggMzUuODY2OCA4Ny4zMzMyIDM1Ljg2NjggODkuOTk5OCA0MC4zOTk3TDExOS4wNjEgODkuODAxQzEyMS43MjggOTQuMzMzOSAxMTguMzk1IDEwMCAxMTMuMDYyIDEwMEg1NC45MzgzQzQ5LjYwNTIgMTAwIDQ2LjI3MTkgOTQuMzMzOSA0OC45Mzg1IDg5LjgwMUw3OC4wMDAyIDQwLjM5OTdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},287:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4xIDk3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnNwcmluZy1pY29uPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0ibG9nb3MiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTg4LjQsNS42YTQyLjMyLDQyLjMyLDAsMCwxLTUuMiw5LjFBNDguNDYsNDguNDYsMCwxLDAsMTUuNSw4NGwxLjgsMS42QTQ4LjQxLDQ4LjQxLDAsMCwwLDk2LjgsNTJDOTguMiwzOS44LDk0LjUsMjQuMiw4OC40LDUuNlpNMjIuNSw4NC40YTQuMTIsNC4xMiwwLDEsMS0uNi01LjhBNC4yMSw0LjIxLDAsMCwxLDIyLjUsODQuNFpNODguMSw2OS45Qzc2LjIsODUuOCw1MC42LDgwLjQsMzQuMyw4MS4yYzAsMC0yLjkuMi01LjguNiwwLDAsMS4xLS41LDIuNS0xLDExLjUtNCwxNi45LTQuOCwyMy45LTguNEM2OCw2NS43LDgxLjEsNTEsODMuNywzNS44Yy01LDE0LjYtMjAuMiwyNy4yLTM0LDMyLjNDNDAuMiw3MS42LDIzLjEsNzUsMjMuMSw3NWwtLjctLjRjLTExLjYtNS43LTEyLTMwLjksOS4yLTM5LDkuMy0zLjYsMTguMS0xLjYsMjguMi00LDEwLjctMi41LDIzLjEtMTAuNSwyOC4xLTIxQzkzLjUsMjcuNSwxMDAuMyw1My43LDg4LjEsNjkuOVoiLz48L2c+PC9nPjwvc3ZnPg=="},290:function(t,e,n){"use strict";n.r(e);n(20);var r={name:"BaseBtn",props:{color:{type:String,default:"primary"},depressed:{type:Boolean,default:!0},minWidth:{type:[Number,String],default:164},tile:{type:Boolean,default:!0}}},o=n(30),c=n(31),l=n.n(c),h=n(122),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-btn",t._g(t._b({staticClass:"font-weight-bold",attrs:{color:t.color,depressed:t.depressed,"min-width":t.minWidth,tile:t.tile,"x-large":""}},"v-btn",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a})},292:function(t,e,n){n(293),t.exports=n(294)},347:function(t,e,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("bb54c074",content,!0,{sourceMap:!1})},348:function(t,e,n){var r=n(13)(!1);r.push([t.i,"pre[class*=language-]{max-height:500px}.nuxt-content-highlight>.copy{z-index:4;position:absolute;right:0;bottom:0;width:35px;height:35px;background-color:#252526;text-transform:uppercase;border-radius:.375rem;margin-right:.5rem;margin-bottom:.5rem;box-shadow:0 3px 1px -2px rgb(0 0 0/20%),0 2px 2px 0 rgb(0 0 0/14%),0 1px 5px 0 rgb(0 0 0/12%);opacity:0;transition:.3s}.nuxt-content-highlight:hover>.copy{opacity:1}.nuxt-content-highlight>.copy>.v-icon{font-size:20px;color:#d4d4d4}.nuxt-content-highlight{position:relative}.nuxt-content-highlight .filename{position:absolute;right:0;top:0;color:hsla(0,0%,100%,.54902);z-index:4;font-family:monospace;font-size:.75rem;letter-spacing:-.025em;line-height:1;margin-right:1rem;margin-top:.75rem;opacity:1;transition:.3s;background:#1e1e1e;padding:6px;border-radius:.375rem}.nuxt-content-highlight:hover>.filename{opacity:0}",""]),t.exports=r},349:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("f52d43e0",content,!0,{sourceMap:!1})},350:function(t,e,n){var r=n(13)(!1);r.push([t.i,"a{text-decoration:none}.xs-max-width{max-width:600px}.sm-max-width{max-width:960px}.md-max-width{max-width:1280px}.lg-max-width{max-width:1920px}html{scroll-padding-top:80px;scroll-behavior:smooth}",""]),t.exports=r},351:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("e6c21308",content,!0,{sourceMap:!1})},352:function(t,e,n){var r=n(13)(!1);r.push([t.i,'.nuxt-content h1{font-size:1.75rem;line-height:1.75rem;font-weight:400;letter-spacing:-.015625em}.nuxt-content h2{font-size:1.6rem;line-height:1.6rem;font-weight:400;letter-spacing:-.0083333333em}.nuxt-content h3{font-size:1.45rem;line-height:1.45rem;font-weight:400;letter-spacing:normal}.nuxt-content h4{font-size:1.3rem;line-height:1.3rem;font-weight:400;letter-spacing:.0073529412em}.nuxt-content h5{font-size:1.15rem;line-height:1.15rem;font-weight:400;letter-spacing:normal}.nuxt-content h6{font-size:1rem;line-height:1rem;font-weight:400;letter-spacing:.0125em}.nuxt-content h1,.nuxt-content h2,.nuxt-content h3,.nuxt-content h4,.nuxt-content h5,.nuxt-content h6{font-family:"Work Sans",sans-serif;color:var(--v-primary-base);padding-top:16px;padding-bottom:4px;text-transform:uppercase}.nuxt-content h1>a:before{margin-left:-1.75rem}.nuxt-content h2>a:before{margin-left:-1.6rem}.nuxt-content h3>a:before{margin-left:-1.45rem}.nuxt-content h4>a:before{margin-left:-1.3rem}.nuxt-content h5>a:before{margin-left:-1.15rem}.nuxt-content h6>a:before{margin-left:-1rem}.nuxt-content h1>a:before,.nuxt-content h2>a:before,.nuxt-content h3>a:before,.nuxt-content h4>a:before,.nuxt-content h5>a:before,.nuxt-content h6>a:before{color:var(--v-primary-base);opacity:0;content:"#";position:absolute;transition:.3s;padding-right:.5rem}.nuxt-content h1:hover>a:before,.nuxt-content h2:hover>a:before,.nuxt-content h3:hover>a:before,.nuxt-content h4:hover>a:before,.nuxt-content h5:hover>a:before,.nuxt-content h6:hover>a:before{opacity:1}',""]),t.exports=r},353:function(t,e,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("cfcc30b0",content,!0,{sourceMap:!1})},354:function(t,e,n){var r=n(13)(!1);r.push([t.i,"*{scrollbar-color:#204165 #212121}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-button{width:0;height:0}::-webkit-scrollbar-corner{background:transparent}::-webkit-scrollbar-thumb{background:#204165}::-webkit-scrollbar-track{background:#212121}",""]),t.exports=r},357:function(t,e,n){"use strict";n(253)},358:function(t,e,n){var r=n(13)(!1);r.push([t.i,".extra-padding{padding-bottom:96px!important;padding-top:96px!important}@media screen and (max-width:959px){.extra-padding{padding-top:48px!important;padding-bottom:48px!important}}",""]),t.exports=r},359:function(t,e,n){"use strict";n(254)},360:function(t,e,n){var r=n(13)(!1);r.push([t.i,'#home-app-bar .v-tabs-slider{max-width:24px;margin:0 auto}#home-app-bar .v-tab:before{display:none}.nickname{font-size:.75rem;font-weight:500;line-height:2rem;letter-spacing:.7em;font-family:"PT Sans",sans-serif;text-transform:uppercase;cursor:pointer}',""]),t.exports=r},393:function(t,e,n){var map={"./docker-logo.png":285,"./nuxt-logo-white.svg":286,"./nuxt-logo.svg":394,"./spring-logo.svg":287,"./vuetify-logo.svg":395,"./zero-logo.svg":396};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=393},394:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTUuNzQ5OCAyNy4xNTUxQzUyLjUyNzcgMjEuNjE1IDQ0LjQ3MjMgMjEuNjE0OSA0MS4yNTAyIDI3LjE1NTFMNi4xMzQwNCA4Ny41MzQ2QzIuOTExOTEgOTMuMDc0OCA2LjkzOTU2IDEwMCAxMy4zODM4IDEwMEg0MC43OTc1QzM4LjA0MzggOTcuNTkzNCAzNy4wMjQxIDkzLjQzMDMgMzkuMTA3OSA4OS44NTg0TDY1LjcwMzMgNDQuMjY5NEw1NS43NDk4IDI3LjE1NTFaIiBmaWxsPSIjODBFRUMwIi8+CjxwYXRoIGQ9Ik03OC4wMDAyIDQwLjM5OTdDODAuNjY2OCAzNS44NjY4IDg3LjMzMzIgMzUuODY2OCA4OS45OTk4IDQwLjM5OTdMMTE5LjA2MSA4OS44MDFDMTIxLjcyOCA5NC4zMzM5IDExOC4zOTUgMTAwIDExMy4wNjIgMTAwSDU0LjkzODNDNDkuNjA1MiAxMDAgNDYuMjcxOSA5NC4zMzM5IDQ4LjkzODUgODkuODAxTDc4LjAwMDIgNDAuMzk5N1oiIGZpbGw9IiMwMERDODIiLz4KPC9zdmc+Cg=="},395:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQ0IiBoZWlnaHQ9IjM5MyIgdmlld0JveD0iMCAwIDM0NCAzOTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNzEuNzIzIDE4OS40NzdMOTEuNDg3NSAwSDE3MS43MjNWMTg5LjQ3N1oiIGZpbGw9IiMxNjk3RjYiLz4KPHBhdGggZD0iTTg5Ljk0OTUgNTcuMTg5NkgwTDE3MS43MjMgMzkyLjE1VjI0NS4wOTlMODkuOTQ5NSA1Ny4xODk2WiIgZmlsbD0iIzdCQzZGRiIvPgo8cGF0aCBkPSJNMTcxLjcyMyAwLjA3NTAxMjJMMTcxLjcyMyAxODkuNDc3TDI1MS45NTUgMEgxNzEuNzIzIiBmaWxsPSIjN0JDNkZGIi8+CjxwYXRoIGQ9Ik0yNTMuNDg3IDU3LjE4OTZIMzQzLjQzNkwxNzEuNzIzIDM5Mi4xNVYyNDUuMDk5TDI1My40ODcgNTcuMTg5NloiIGZpbGw9IiNBRURERkYiLz4KPC9zdmc+Cg=="},396:function(t,e,n){t.exports=n.p+"img/zero-logo.1a136a5.svg"},397:function(t,e,n){"use strict";n(258)},398:function(t,e,n){var r=n(13)(!1);r.push([t.i,"#home-footer{font-size:13px}",""]),t.exports=r},406:function(t,e,n){"use strict";n.r(e),n.d(e,"mutations",(function(){return r}));var r={SET_THEME:function(t,e){"undefined"!=typeof window&&(window.$nuxt.$vuetify.theme.dark=e)}}},414:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=414},415:function(t,e,n){"use strict";n.r(e);n(7),n(4),n(8),n(10),n(6),n(11);var r=n(2),o=n(92);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"HomeAppBar",data:function(){return{drawer:null,items:[{name:"Home",to:"/"},{name:"Blog",to:"/blog"},{name:"Topics",to:"/blog/topics"},{name:"Tags",to:"/blog/tags"},{name:"Archives",to:"/blog/archives"},{name:"About",to:"/about"}]}},methods:l(l({},Object(o.b)("themeStore",["SET_THEME"])),{},{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark;try{localStorage.setItem("$vuetify.theme.dark",this.$vuetify.theme.dark),this.SET_THEME(this.$vuetify.theme.dark)}catch(t){console.dir(t)}}})},f=(n(359),n(30)),d=n(31),m=n.n(d),y=n(434),x=n(427),v=n(122),w=n(190),M=n(428),j=n(429),N=n(435),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{app:"",elevation:"1","elevate-on-scroll":"",height:"80"}},[n("div",{staticClass:"d-flex flex-row justify-start align-center nickname",on:{click:function(e){return t.$router.push("/")}}},[n("v-icon",{attrs:{size:"28",left:""}},[t._v("mdi-code-braces")]),t._v("RalphDeving\n\t\t")],1),t._v(" "),n("v-spacer"),t._v(" "),n("div",[n("v-tabs",{staticClass:"hidden-sm-and-down",attrs:{optional:"","background-color":"transparent"}},t._l(t.items,(function(e,i){return n("v-tab",{key:i,staticClass:"font-weight-bold",attrs:{to:e.to,ripple:!1,"min-width":"96",text:"",exact:""}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])})),1)],1),t._v(" "),n("v-btn",{staticClass:"ml-4",attrs:{icon:""},on:{click:t.toggleTheme}},[t.$vuetify.theme.dark?n("v-icon",[t._v("mdi-weather-night")]):n("v-icon",[t._v("mdi-weather-sunny")])],1),t._v(" "),n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}})],1),t._v(" "),n("HomeDrawer",{attrs:{items:t.items},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{HomeDrawer:n(416).default}),m()(component,{VAppBar:y.a,VAppBarNavIcon:x.a,VBtn:v.a,VIcon:w.a,VSpacer:M.a,VTab:j.a,VTabs:N.a})},416:function(t,e,n){"use strict";n.r(e);var r={name:"HomeDrawer",props:{items:{type:Array,default:function(){return[]}}}},o=n(30),c=n(31),l=n.n(c),h=n(191),f=n(121),d=n(85),m=n(193),y=n(433),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",t._g(t._b({attrs:{bottom:"",fixed:"",height:"auto","overlay-color":"secondary","overlay-opacity":".8",temporary:""}},"v-navigation-drawer",t.$attrs,!1),t.$listeners),[n("v-list",[n("v-list-item-group",{attrs:{color:"primary"}},t._l(t.items,(function(e){return n("v-list-item",{key:e.name,attrs:{to:e.to,exact:""}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VList:h.a,VListItem:f.a,VListItemContent:d.a,VListItemGroup:m.a,VListItemTitle:d.c,VNavigationDrawer:y.a})},417:function(t,e,n){"use strict";n.r(e);var r={name:"HomeFooter",data:function(){return{poweredBy:[{text:"Nuxt",logo:"nuxt-logo.svg",href:"https://nuxtjs.org/"},{text:"Vuetify",logo:"vuetify-logo.svg",href:"https://vuetifyjs.com"},{text:"Zero Theme",logo:"zero-logo.svg",href:"https://store.vuetifyjs.com/products/zero-theme-pro"}],feed:[{text:"json",icon:"mdi-code-json",href:"/feed.json"},{text:"xml",icon:"mdi-rss",href:"/feed.xml"}]}}},o=(n(397),n(30)),c=n(31),l=n.n(c),h=n(436),f=n(430),d=n(190),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{staticClass:"grey--text text--lighten-1",attrs:{color:"#212121","min-height":"72"}},[r("v-container",{staticClass:"d-flex flex-wrap flex-column flex-sm-row justify-center justify-md-space-between align-center"},[r("div",{staticClass:"d-flex flex-column flex-sm-row justify-center align-center mx-sm-4 my-2"},[r("span",{staticClass:"order-last order-sm-first mr-sm-4"},[t._v("feed")]),t._v(" "),r("div",{staticClass:"d-flex flex-row flex-wrap justify-center align-center"},t._l(t.feed,(function(e,i){return r("a",{key:i,staticClass:"mt-2 mt-sm-0 mx-2 d-flex flex-row justify-center align-center",attrs:{target:"_blank",href:e.href}},[r("v-icon",{attrs:{color:"#9e9e9e",size:"15",left:""}},[t._v(t._s(e.icon))]),t._v("\n\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t")],1)})),0)]),t._v(" "),r("div",{staticClass:"d-flex flex-column flex-sm-row justify-center align-center mx-sm-4 my-2"},[r("span",{staticClass:"order-last order-sm-first mr-sm-4"},[t._v("powered by")]),t._v(" "),r("div",{staticClass:"d-flex flex-row flex-wrap justify-center align-center"},t._l(t.poweredBy,(function(e,i){return r("a",{key:i,staticClass:"mt-2 mt-sm-0 mx-2 d-flex flex-row justify-center align-center",attrs:{target:"_blank",href:e.href}},[r("BaseImg",{key:i,staticClass:"mr-2",attrs:{src:n(393)("./"+e.logo),contain:"",height:"16",width:"16",left:""}}),t._v("\n\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t")],1)})),0)]),t._v(" "),r("div",{staticClass:"d-flex flex-column flex-sm-row justify-center align-center mx-sm-4 my-2"},[r("span",{staticClass:"order-last order-sm-first mr-sm-4"},[t._v("author")]),t._v(" "),r("NuxtLink",{attrs:{to:"/about"}},[t._v("RalphDeving")])],1)])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{BaseImg:n(283).default}),l()(component,{VContainer:h.a,VFooter:f.a,VIcon:d.a})},83:function(t,e,n){"use strict";var r=n(50),o=n(130),c={icons:["bat","bird","cat","cow","dog","duck","elephant","fish","google-downasaur","horse","horse-variant","jellyfish-outline","kangaroo","koala","linux","owl","panda","penguin","pig","pig-variant-outline","rabbit","rodent","sheep","snail","snake","tortoise","turkey","unicorn","unicorn-variant"],provide:{heading:{align:"center"}},props:{error:{type:Object,default:{}}},computed:{icon:function(){return"mdi-"+this.$fyShuffle(this.$options.icons)[0]}},head:function(){var t={url:this.$route.fullPath,title:404===this.error.statusCode?"Oops! No Page Found":this.error.statusCode,description:404===this.error.statusCode?"Looks like this page doesn't exist":this.error.message,image:Object(o.c)("error")};return{title:t.title,meta:Object(r.a)(Object(o.d)(t)),link:Object(r.a)(Object(o.b)(t))}}},l=n(30),h=n(31),f=n.n(h),d=n(190),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseSection",{staticClass:"d-flex flex-column fill-height align-center justify-center"},[n("BaseHeading",{attrs:{title:""+t.error.statusCode,weight:"regular"}}),t._v(" "),n("BaseSubheading",{staticClass:"primary--text",attrs:{title:404===this.error.statusCode?"Oh!":"Oh no!"}}),t._v(" "),n("BaseSubheading",{attrs:{space:"0",title:404===this.error.statusCode?"Looks like this page doesn't exist":this.error.message}}),t._v(" "),t.icon?n("v-icon",{staticClass:"my-8",attrs:{size:"70"}},[t._v(t._s(t.icon))]):t._e(),t._v(" "),n("div",{staticClass:"text-center"},[n("BaseBtn",{attrs:{to:"/"}},[t._v("Get me Out of Here")])],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{BaseHeading:n(167).default,BaseSubheading:n(282).default,BaseBtn:n(290).default,BaseSection:n(278).default}),f()(component,{VIcon:d.a})}},[[292,54,10,55]]]);