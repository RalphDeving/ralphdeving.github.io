(window.webpackJsonp=window.webpackJsonp||[]).push([[41,17,21,25,26,27,30],{446:function(t,e,r){"use strict";e.a={inject:{topTags:{type:Array,default:function(){return[]}},topTopics:{type:Array,default:function(){return[]}}}}},447:function(t,e,r){var content=r(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("1b172670",content,!0,{sourceMap:!1})},449:function(t,e,r){var content=r(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("b6b223c8",content,!0,{sourceMap:!1})},451:function(t,e,r){"use strict";e.a={computed:{createdAt:function(){if(this.article&&this.article.createdAt)return this.$moment.utc(this.article.createdAt,"YYYY-MM-DDTHH:mm:ssZ").format("DD . MMM . YYYY")},updatedAt:function(){if(this.article&&this.article.updatedAt)return this.$moment.utc(this.article.updatedAt,"YYYY-MM-DDTHH:mm:ssZ").format("DD . MMM . YYYY")},isUpdated:function(){return"string"==typeof this.createdAt&&"string"==typeof this.updatedAt&&this.createdAt!==this.updatedAt}}}},456:function(t,e,r){"use strict";r(447)},457:function(t,e,r){var n=r(13)(!1);n.push([t.i,"",""]),t.exports=n},458:function(t,e,r){var content=r(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("e23b7040",content,!0,{sourceMap:!1})},459:function(t,e,r){var n=r(13)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fafafa;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#212121;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.1875rem}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1rem;font-weight:700;letter-spacing:.1875rem;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},460:function(t,e,r){"use strict";r.r(e);var n={name:"BaseTextField"},c=(r(456),r(30)),o=r(31),l=r.n(o),d=r(552),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-text-field",t._g(t._b({attrs:{outlined:"",dense:""}},"v-text-field",t.$attrs,!1),t.$listeners),[t._t("append-outer",null,{slot:"append-outer"})],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VTextField:d.a})},461:function(t,e,r){"use strict";r.r(e);r(62);var n=r(492),c=r.n(n),o={data:function(){return{id:Math.random(),copied:!1}},mounted:function(){var t=this;new c.a(this.$refs.copy,{target:function(t){return t.previousElementSibling}}).on("success",(function(e){e.clearSelection(),t.copied=!0,window.setTimeout((function(){t.copied=!1}),2e3)}))}},l=r(30),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{ref:"copy",staticClass:"copy"},[r("i",{class:["theme--dark","v-icon","mdi",t.copied?"mdi-clipboard-check-outline":"mdi-clipboard-outline"],attrs:{title:"Copy"}})])}),[],!1,null,null,null);e.default=component.exports},462:function(t,e,r){"use strict";r.r(e);var n={props:{color:{type:String,default:void 0},icon:{type:String,default:"mdi-script-text-outline"},noIcon:{type:Boolean,default:!1}}},c=r(30),o=r(31),l=r.n(o),d=r(547),v=r(189),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-alert",{attrs:{border:"left",color:t.color,dense:"",text:"",tile:""},scopedSlots:t._u([t.noIcon?null:{key:"prepend",fn:function(){return[r("v-icon",{attrs:{color:t.color,dense:"",left:""}},[t._v(t._s(t.icon))])]},proxy:!0}],null,!0)},[t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAlert:d.a,VIcon:v.a})},463:function(t,e,r){"use strict";r(449)},464:function(t,e,r){var n=r(13)(!1);n.push([t.i,".search-sheet[data-v-41cdbb2b]{z-index:4;position:absolute;overflow:hidden;max-width:300px}",""]),t.exports=n},465:function(t,e,r){"use strict";r.r(e);var n=r(24),c=(r(86),r(33),r(203),{name:"NewsSearch",data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("post").only(["title","description","slug"]).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),o=(r(463),r(30)),l=r(31),d=r.n(l),v=r(491),f=r(121),h=r(85),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-6"},[r("BaseTextField",{attrs:{"hide-details":"","append-icon":"mdi-magnify",label:"Search",clearable:""},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}),t._v(" "),t.articles.length?r("v-card",{staticClass:"search-sheet"},t._l(t.articles,(function(article){return r("v-list-item",{key:article.slug,attrs:{to:"/blog/post/"+article.slug,"three-line":""}},[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(article.title))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(article.description))])],1)],1)})),1):t._e()],1)}),[],!1,null,"41cdbb2b",null);e.default=component.exports;d()(component,{BaseTextField:r(460).default}),d()(component,{VCard:v.a,VListItem:f.a,VListItemContent:h.a,VListItemSubtitle:h.b,VListItemTitle:h.c})},466:function(t,e,r){"use strict";r.r(e);var n={name:"NewsCategories",mixins:[r(446).a]},c=r(30),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseInfoCard",{attrs:{title:"Topics"}},[r("ul",{staticClass:"pl"},t._l(t.topTopics,(function(e,i){var n=e.name,c=e.to;return r("li",{key:i,staticClass:"mb-3"},[r("NuxtLink",{class:["grey--text",t.$vuetify.theme.isDark?"text--lighten-1":"text--darken-1"],attrs:{to:c}},[t._v(t._s(n))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseInfoCard:r(439).default})},467:function(t,e,r){"use strict";r.r(e);var n={name:"NewsArchives"},c=r(30),component=Object(c.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},468:function(t,e,r){"use strict";r.r(e);var n={name:"NewsArchives",mixins:[r(446).a]},c=r(30),o=r(31),l=r.n(o),d=r(122),v=r(487),f=r(549),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseInfoCard",{attrs:{title:"Tags"}},[r("v-row",{staticClass:"mb-10",attrs:{dense:""}},t._l(t.topTags,(function(e,i){var n=e.name,c=e.to;return r("v-col",{key:i,attrs:{cols:"auto"}},[r("v-btn",{class:["text-capitalize","grey--text",t.$vuetify.theme.isDark?"text--lighten-1":"text--darken-2"],attrs:{to:c,outlined:"",tile:""}},[t._v("\n\t\t\t\t"+t._s(n)+"\n\t\t\t")])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{BaseInfoCard:r(439).default}),l()(component,{VBtn:d.a,VCol:v.a,VRow:f.a})},469:function(t,e,r){"use strict";r.r(e);r(62),r(36),r(19),r(23),r(49),r(37),r(4),r(44),r(55),r(38);var n=r(1),c=r(461);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){d=!0,c=t},f:function(){try{o||null==r.return||r.return()}finally{if(d)throw c}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var d={name:"NewsCard",mixins:[r(451).a],props:{article:{type:Object,required:!0},isArticle:{type:Boolean,default:!1},topics:{type:Array,required:!0},divider:Boolean},mounted:function(){setTimeout((function(){var t,e=o(document.getElementsByClassName("nuxt-content-highlight"));try{for(e.s();!(t=e.n()).done;){var r=t.value,component=(new(n.a.extend(c.default))).$mount();r.appendChild(component.$el)}}catch(t){e.e(t)}finally{e.f()}}),500)}},v=r(30),f=r(31),h=r.n(f),m=r(53),_=r(490),x=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NuxtLink",{staticClass:"d-block",attrs:{to:"/blog/post/"+this.article.slug}},[t.isArticle?t._e():r("div",{staticClass:"px-4"},[r("BaseTitle",{staticClass:"text-uppercase",attrs:{title:this.article.title,size:"text-h5",weight:"regular",space:"2"}})],1),t._v(" "),r("v-theme-provider",{attrs:{dark:!t.$vuetify.theme.isDark}},[r("v-sheet",{staticClass:"d-flex",attrs:{dark:!t.$vuetify.theme.isDark,light:t.$vuetify.theme.isDark,tile:"","max-width":"100%"}},[r("div",{staticClass:"pa-2 text-body-2 text-truncate"},[t.createdAt?r("span",{staticClass:"mx-2"},[t._v(t._s(t.createdAt))]):t._e(),t._v(" "),t.isUpdated?r("span",[t._v("/")]):t._e(),t._v(" "),t.isUpdated?r("span",{staticClass:"mx-2"},[r("span",{staticClass:"text-caption pr-1"},[t._v("updated")]),t._v("\n\t\t\t\t\t\t"+t._s(t.updatedAt)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),t.topics&&t.topics.length>0?[r("span",[t._v("/")]),t._v(" "),t._l(t.topics,(function(e,i){var n=e.name,c=e.slug;return r("NuxtLink",{key:i,attrs:{to:"/blog/topics/"+c,custom:""},scopedSlots:t._u([{key:"default",fn:function(e){var c=e.navigate;return[r("span",{staticClass:"mx-2 primary--text",attrs:{title:n,role:"link"},on:{click:c,keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:c.apply(null,arguments)}}},[t._v(t._s(n))])]}}],null,!0)})}))]:t._e()],2)])],1),t._v(" "),r("div",{staticClass:"pa-4 pb-0"},[r("Vuequote",{staticClass:"mt-n4 mb-0",attrs:{icon:"mdi-subdirectory-arrow-right"}},[t._v(t._s(this.article.description))])],1)],1),t._v(" "),t.isArticle?r("div",{staticClass:"pa-4"},[r("BaseBody",{attrs:{space:"0"}},[r("nuxt-content",{attrs:{document:t.article}})],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=x.exports;h()(x,{BaseTitle:r(440).default,Vuequote:r(462).default,BaseBody:r(436).default}),h()(x,{VSheet:m.a,VThemeProvider:_.a})},486:function(t,e,r){"use strict";r(64),r(23);e.a={provide:function(){return{topTags:this.topTags,topTopics:this.topTopics}},computed:{topTags:function(){var t=this.tags.map((function(t){return{name:t.name,to:"/blog/tags/".concat(t.slug)}}));return t.push({name:"All...",to:"/blog/tags"}),t},topTopics:function(){var t=this.topics.map((function(t){return{name:t.name,to:"/blog/topics/".concat(t.slug)}}));return t.push({name:"All...",to:"/blog/topics"}),t}}}},491:function(t,e,r){"use strict";r(7),r(4),r(8),r(10),r(6),r(11);var n=r(2),c=(r(22),r(202),r(458),r(167)),o=r(488),l=r(66),d=r(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(o.a,l.a,c.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},c.a.options.computed.classes.call(this))},styles:function(){var style=f({},c.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=o.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},503:function(t,e,r){"use strict";r.r(e);var n={name:"NewsRecentArticlesItem",mixins:[r(451).a],props:{article:{type:Object,required:!0}}},c=r(30),o=r(31),l=r.n(o),d=r(121),v=r(85),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list-item",{staticClass:"px-0",attrs:{to:"/blog/post/"+t.article.slug,"three-line":""}},[r("v-list-item-content",[r("v-list-item-subtitle",{staticClass:"text-uppercase subtitle-2 font-weight-bold text--primary mb-n2",domProps:{textContent:t._s(t.article.title)}}),t._v(" "),t.createdAt?r("v-list-item-subtitle",{staticClass:"font-weight-bold mb-n2",domProps:{textContent:t._s(t.createdAt)}}):t._e(),t._v(" "),t.isUpdated?r("v-list-item-subtitle",{staticClass:"font-weight-bold mb-n2"},[r("span",{staticClass:"text-caption pr-1"},[t._v("updated")]),t._v("\n\t\t\t"+t._s(t.updatedAt)+"\n\t\t")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VListItem:d.a,VListItemContent:v.a,VListItemSubtitle:v.b})},505:function(t,e,r){"use strict";r.r(e);var n={name:"NewsShare",props:{tags:{type:Array,default:[]}}},c=r(30),o=r(31),l=r.n(o),d=r(504),v=r(549),f=r(426),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-divider"),t._v(" "),r("v-row",{staticClass:"ma-0 pa-4",attrs:{align:"center"}},[r("v-spacer"),t._v(" "),r("div",{staticClass:"text-body-2"},t._l(t.tags,(function(e,i){var n=e.name,c=e.slug;return r("NuxtLink",{key:i,staticClass:"text--primary d-inline-block ml-2",attrs:{to:"/blog/tags/"+c},domProps:{textContent:t._s(n+(i+1<t.tags.length?",":""))}})})),1)],1),t._v(" "),r("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VDivider:d.a,VRow:v.a,VSpacer:f.a})},506:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},c=r(30),o=r(31),l=r.n(o),d=r(189),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-row justify-space-between text-overline my-4"},[t.prev?r("NuxtLink",{staticClass:"text-truncate",attrs:{to:"/blog/post/"+t.prev.slug,title:t.prev.title}},[r("v-icon",{attrs:{left:"",dense:""}},[t._v("mdi-chevron-left")]),t._v(t._s(t.prev.title)+"\n\t")],1):r("span",[t._v(" ")]),t._v(" "),t.next?r("NuxtLink",{staticClass:"text-truncate",attrs:{to:"/blog/post/"+t.next.slug,title:t.next.title}},[t._v("\n\t\t"+t._s(t.next.title)),r("v-icon",{attrs:{right:"",dense:""}},[t._v("mdi-chevron-right")])],1):r("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VIcon:d.a})},507:function(t,e,r){"use strict";r.r(e);var n={name:"NewsRecentArticles",props:{recentArticles:{type:Array,required:!0}}},c=r(30),o=r(31),l=r.n(o),d=r(504),v=r(190),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseInfoCard",{attrs:{title:"Recent Posts"}},[r("v-list",{staticClass:"py-0 mt-n5 mb-9"},[t._l(t.recentArticles,(function(article,i){return[r("NewsRecentArticlesItem",{key:i,attrs:{article:article}}),t._v(" "),r("v-divider",{key:"divider-"+i})]}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{NewsRecentArticlesItem:r(503).default,BaseInfoCard:r(439).default}),l()(component,{VDivider:d.a,VList:v.a})},517:function(t,e,r){"use strict";r.r(e);r(33),r(54);var n={name:"SectionArticle",props:{article:{type:Object,required:!0},recentArticles:{type:Array,required:!0},tagsList:{type:Array,required:!0},topicsList:{type:Array,required:!0},prev:{type:Object,required:!1},next:{type:Object,required:!1}},computed:{pascalSlug:function(){try{return this.article.slug.replace(/(^\w|-\w)/g,(function(text){return text.replace(/-/,"").toUpperCase()}))}catch(t){return this.article.title}}}},c=r(30),o=r(31),l=r.n(o),d=r(502),v=r(487),f=r(434),h=r(549),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseSection",{attrs:{space:"72"}},[r("BaseSectionHeading",{attrs:{icon:"mdi-sticker-emoji",title:this.article.title,outlined:""}},[r("v-breadcrumbs",{staticClass:"justify-center pa-0",attrs:{items:[{text:"Home",to:"/"},{text:"Blog",to:"/blog",exact:!0},{text:"Post",disabled:!0},{text:t.pascalSlug,disabled:!0}],divider:"-"}})],1),t._v(" "),r("v-container",{staticClass:"py-0"},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"7"}},[r("NewsCard",t._b({staticClass:"mb-4",attrs:{article:t.article,"is-article":!0,topics:t.topicsList}},"NewsCard",t.article,!1)),t._v(" "),t.tagsList&&t.tagsList.length>0?r("NewsShare",{attrs:{tags:t.tagsList}}):t._e(),t._v(" "),r("PrevNext",{attrs:{prev:t.prev,next:t.next}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("NewsSearch"),t._v(" "),r("NewsRecentArticles",{attrs:{"recent-articles":t.recentArticles}}),t._v(" "),r("NewsCategories"),t._v(" "),r("NewsArchives"),t._v(" "),r("NewsTags")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{BaseSectionHeading:r(454).default,NewsCard:r(469).default,NewsShare:r(505).default,PrevNext:r(506).default,NewsSearch:r(465).default,NewsRecentArticles:r(507).default,NewsCategories:r(466).default,NewsArchives:r(467).default,NewsTags:r(468).default,BaseSection:r(275).default}),l()(component,{VBreadcrumbs:d.a,VCol:v.a,VContainer:f.a,VRow:h.a})},557:function(t,e,r){"use strict";r.r(e);var n=r(17),c=r(24),o=r(63),l=(r(86),r(6),r(64),r(23),r(4),r(44),r(27),r(68),r(501)),d={head:function(){var t=void 0,e=[];this.topicsList&&(this.topicsList.map((function(t){return t.name})).forEach((function(t){return e.push(t)})),this.topicsList.length>0&&(t=this.topicsList[0].name)),this.tagsList&&this.tagsList.map((function(t){return t.name})).forEach((function(t){return e.push(t)}));var r={url:this.$route.fullPath,title:this.article.title,description:this.article.description,author:"https://twitter.com/RalphDeving",type:"article",tags:e,section:t,createdAt:this.article.createdAt,updatedAt:this.article.updatedAt};return{title:r.title,meta:[].concat(Object(o.a)(Object(l.c)(r)),Object(o.a)(Object(l.a)(r))),link:Object(o.a)(Object(l.b)(r))}},mixins:[r(486).a],asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,o,l,d,article,v,f,h,m,_,x,y,w,k,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.$content,c=t.params,o=t.error,l=t.$tagsAndTopics,d=t.redirect,!(null==c.slug||"string"==typeof c.slug&&c.slug.trim().length<=0)){e.next=3;break}return e.abrupt("return",d("/blog"));case 3:return e.next=5,r("post",c.slug).fetch().catch((function(t){return o(t)}));case 5:return article=e.sent,e.next=8,r("post").only(["title","description","slug","createdAt","updatedAt"]).sortBy("createdAt","desc").limit(3).fetch();case 8:if(v=e.sent,!article.tags){e.next=15;break}return e.next=12,r("tags").only(["name","slug"]).where({slug:{$in:article.tags}}).fetch();case 12:e.t0=e.sent,e.next=16;break;case 15:e.t0=[];case 16:if(f=e.t0,!article.topics){e.next=23;break}return e.next=20,r("topics").only(["name","slug"]).where({slug:{$in:article.topics}}).fetch();case 20:e.t1=e.sent,e.next=24;break;case 23:e.t1=[];case 24:return h=e.t1,e.next=27,r("post").only(["title","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 27:return m=e.sent,_=Object(n.a)(m,2),x=_[0],y=_[1],e.next=33,l();case 33:return w=e.sent,k=w.tags,C=w.topics,e.abrupt("return",{article:article,recentArticles:v,tagsList:f,topicsList:h,prev:x,next:y,tags:k,topics:C});case 37:case"end":return e.stop()}}),e)})))()}},v=r(30),f=r(31),h=r.n(f),m=r(53),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticClass:"fill-height"},[r("SectionArticle",{attrs:{article:t.article,"recent-articles":t.recentArticles,"tags-list":t.tagsList,"topics-list":t.topicsList,prev:t.prev,next:t.next}})],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{SectionArticle:r(517).default}),h()(component,{VSheet:m.a})}}]);