(window.webpackJsonp=window.webpackJsonp||[]).push([[31,9,10,12,16,17,18,21,22,25,26,27,30,35],{435:function(t,e,r){"use strict";e.a={name:"Heading",inject:{heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}}},computed:{justify:function(){switch(this.align){case"center":return"center";case"right":return"end";default:return"start"}}}}},436:function(t,e,r){"use strict";r.r(e);r(22);var n={name:"BaseBody",mixins:[r(435).a],inject:["theme"],props:{html:String,maxWidth:{type:[Number,String],default:void 0},space:{type:[Number,String],default:10},tag:{type:String,default:"div"},text:String},computed:{classes:function(){return["grey--text",this.theme.isDark?"text--lighten-1":"text--darken-1","text-".concat(this.heading.align),"mb-".concat(this.space)]},styles:function(){return{maxWidth:"".concat(this.maxWidth,"px")}}}},l=r(30),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.tag,t._g(t._b({tag:"component",staticClass:"base-body text-body-1",class:t.classes,style:t.styles},"component",t.$attrs,!1),t.$listeners),[t.text?r("div",{domProps:{textContent:t._s(t.text)}}):t.html?r("div",{domProps:{innerHTML:t._s(t.html)}}):t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},437:function(t,e,r){var content=r(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("5b6aeea0",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";r.r(e);r(22);var n={name:"BaseIcon",props:{size:{type:[Number,String],default:56}}},l=r(30),o=r(31),c=r.n(o),d=r(189),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-icon",t._g(t._b({attrs:{size:t.size}},"v-icon",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a})},439:function(t,e,r){"use strict";r.r(e);var n={name:"BaseInfoCard",mixins:[r(435).a],props:{dark:Boolean,callout:String,color:{type:String,default:"primary"},icon:String,subtitle:String,text:String,title:String}},l=r(30),o=r(31),c=r.n(o),d=r(487),v=r(434),f=r(549),m=r(490),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-theme-provider",{attrs:{dark:t.dark}},[r("v-container",{staticClass:"pa-0"},[r("v-row",{attrs:{justify:t.justify,"no-gutters":""}},[t.icon?r("v-col",{staticClass:"mb-4",class:"text-"+t.align,attrs:{cols:"12"}},[r("BaseIcon",{attrs:{color:t.color}},[t._v("\n\t\t\t\t\t"+t._s(t.icon)+"\n\t\t\t\t")])],1):t._e(),t._v(" "),t.title||t.subtitle?r("v-col",{attrs:{cols:t.callout?9:12}},[t.subtitle?r("BaseSubtitle",{attrs:{title:t.subtitle,space:"1"}}):t._e(),t._v(" "),r("BaseTitle",{staticClass:"text-uppercase",attrs:{title:t.title,space:"1"}}),t._v(" "),r("BaseDivider",{attrs:{color:t.color}}),t._v(" "),t.text||t.$slots.default?r("BaseBody",{attrs:{text:t.text,space:"6"}},[t._t("default")],2):t._e()],1):t._e(),t._v(" "),t.callout?r("v-col",{attrs:{cols:"2"}},[r("div",{staticClass:"text-h2 grey--text text--lighten-4 font-weight-bold pr-8",domProps:{textContent:t._s(t.callout)}})]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseIcon:r(438).default,BaseSubtitle:r(442).default,BaseTitle:r(440).default,BaseDivider:r(441).default,BaseBody:r(436).default}),c()(component,{VCol:d.a,VContainer:v.a,VRow:f.a,VThemeProvider:m.a})},440:function(t,e,r){"use strict";r.r(e);var n=r(166),l=r(435),o={name:"BaseTitle",extends:n.default,mixins:[l.a],props:{size:{type:String,default:"text-h6"},mobileSize:{type:String,default:"text-subtitle-1"},tag:{type:String,default:"h3"},weight:{type:String,default:"medium"}}},c=r(30),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},441:function(t,e,r){"use strict";r.r(e);r(22);var n={name:"BaseDivider",mixins:[r(435).a],props:{color:String,dense:Boolean,space:{type:[Number,String],default:6}},computed:{classes:function(){return[this.color,this.margin,"mb-".concat(this.space),this.dense&&"base-divider--dense"]},margin:function(){switch(this.align){case"left":return"mr-auto";case"right":return"ml-auto";default:return"mx-auto"}}}},l=(r(444),r(30)),o=r(31),c=r.n(o),d=r(504),v=r(194),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-responsive",t._g(t._b({staticClass:"base-divider",class:t.classes,attrs:{"max-width":"28"}},"v-responsive",t.$attrs,!1),t.$listeners),[r("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDivider:d.a,VResponsive:v.a})},442:function(t,e,r){"use strict";r.r(e);var n=r(63),l=(r(22),r(27),r(166)),o={name:"BaseSubtitle",extends:l.default,props:{size:{type:String,default:"text-body-2"},mobileSize:{type:String,default:"text-body-1"},space:{type:[String,Number],default:0},tag:{type:String,default:"div"},weight:{type:[Number,String],default:"regular"}},computed:{classes:function(){return[].concat(Object(n.a)(l.default.computed.classes.call(this)),["grey--text"])}}},c=r(30),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},443:function(t,e,r){var content=r(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("4c513f34",content,!0,{sourceMap:!1})},444:function(t,e,r){"use strict";r(437)},445:function(t,e,r){var n=r(13)(!1);n.push([t.i,".base-divider .v-divider{border-width:3px 0 0!important}.base-divider.base-divider--dense .v-divider{border-width:2px 0 0!important}",""]),t.exports=n},446:function(t,e,r){"use strict";e.a={inject:{topTags:{type:Array,default:function(){return[]}},topTopics:{type:Array,default:function(){return[]}}}}},447:function(t,e,r){var content=r(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("1b172670",content,!0,{sourceMap:!1})},449:function(t,e,r){var content=r(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("b6b223c8",content,!0,{sourceMap:!1})},451:function(t,e,r){"use strict";e.a={computed:{createdAt:function(){if(this.article&&this.article.createdAt)return this.$moment.utc(this.article.createdAt,"YYYY-MM-DDTHH:mm:ssZ").format("DD . MMM . YYYY")},updatedAt:function(){if(this.article&&this.article.updatedAt)return this.$moment.utc(this.article.updatedAt,"YYYY-MM-DDTHH:mm:ssZ").format("DD . MMM . YYYY")},isUpdated:function(){return"string"==typeof this.createdAt&&"string"==typeof this.updatedAt&&this.createdAt!==this.updatedAt}}}},452:function(t,e,r){"use strict";r(443)},453:function(t,e,r){var n=r(13)(!1);n.push([t.i,".base-avatar{border-radius:50%;position:relative;overflow:visible}.base-avatar__outline{position:absolute!important;left:0;top:0}.base-avatar.base-avatar--outlined .base-avatar__avatar{border-width:thin;border-style:solid}.theme--light .base-avatar--outlined .base-avatar__avatar{border-color:rgba(0,0,0,.12)!important}.theme--dark .base-avatar--outlined .base-avatar__avatar{border-color:hsla(0,0%,100%,.12)!important}",""]),t.exports=n},454:function(t,e,r){"use strict";r.r(e);r(22);var n={name:"BaseSectionHeading",mixins:[r(435).a],props:{align:{type:String,default:"center"},color:{type:String,default:"primary"},icon:String,outlined:Boolean,space:{type:[Number,String],default:12},subtitle:String,text:String,title:String,weight:String},computed:{classes:function(){return["text-".concat(this.align),"mb-".concat(this.space)]}}},l=r(30),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"base-section-heading",class:t.classes},[t.icon?r("BaseAvatar",{staticClass:"mb-4",attrs:{icon:t.icon,outlined:t.outlined,color:"primary",dark:""}}):t._e(),t._v(" "),t.subtitle?r("BaseSubtitle",{attrs:{title:t.subtitle,space:"1",tag:"h2"}}):t._e(),t._v(" "),t.title?r("BaseSubheading",{staticClass:"text-uppercase",attrs:{align:t.align,weight:t.weight,title:t.title,space:"2"}}):t._e(),t._v(" "),r("BaseDivider",{attrs:{color:t.color}}),t._v(" "),t.$slots.default||t.text?r("BaseBody",{staticClass:"mx-auto",attrs:{"max-width":"700"}},[t.$slots.default?t._t("default"):[t._v("\n\t\t\t"+t._s(t.text)+"\n\t\t")]],2):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseAvatar:r(455).default,BaseSubtitle:r(442).default,BaseSubheading:r(278).default,BaseDivider:r(441).default,BaseBody:r(436).default})},455:function(t,e,r){"use strict";r.r(e);r(22),r(27);var n={name:"BaseAvatar",inject:["theme"],props:{color:String,dark:Boolean,icon:String,outlined:Boolean,size:{type:[Number,String],default:56}},data:function(){return{multiply:6}},computed:{classes:function(){return[this.outlined&&"base-avatar--outlined"]},isDark:function(){return this.theme.isDark||this.dark},outlineSize:function(){return Number(this.size)+this.size/this.multiply},styles:function(){var t=this.size/(2*this.multiply);return{margin:"-".concat(t,"px 0 0 -").concat(t,"px")}}}},l=(r(452),r(30)),o=r(31),c=r.n(o),d=r(191),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"base-avatar d-inline-flex",class:t.classes},[t.outlined?r("v-avatar",{staticClass:"base-avatar__outline",staticStyle:{opacity:"0.4"},style:t.styles,attrs:{color:t.color||(t.$vuetify.theme.isDark?"grey darken-3":"grey lighten-4"),size:t.outlineSize}}):t._e(),t._v(" "),r("v-avatar",t._g(t._b({staticClass:"base-avatar__avatar",attrs:{color:t.color||(t.$vuetify.theme.isDark?"grey darken-4":"white"),size:t.size}},"v-avatar",t.$attrs,!1),t.$listeners),[t.icon?r("BaseIcon",{attrs:{dark:t.dark,size:t.size/2}},[t._v("\n\t\t\t"+t._s(t.icon)+"\n\t\t")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseIcon:r(438).default}),c()(component,{VAvatar:d.a})},456:function(t,e,r){"use strict";r(447)},457:function(t,e,r){var n=r(13)(!1);n.push([t.i,"",""]),t.exports=n},458:function(t,e,r){var content=r(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("e23b7040",content,!0,{sourceMap:!1})},459:function(t,e,r){var n=r(13)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fafafa;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#212121;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.1875rem}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1rem;font-weight:700;letter-spacing:.1875rem;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},460:function(t,e,r){"use strict";r.r(e);var n={name:"BaseTextField"},l=(r(456),r(30)),o=r(31),c=r.n(o),d=r(552),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-text-field",t._g(t._b({attrs:{outlined:"",dense:""}},"v-text-field",t.$attrs,!1),t.$listeners),[t._t("append-outer",null,{slot:"append-outer"})],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VTextField:d.a})},461:function(t,e,r){"use strict";r.r(e);r(62);var n=r(492),l=r.n(n),o={data:function(){return{id:Math.random(),copied:!1}},mounted:function(){var t=this;new l.a(this.$refs.copy,{target:function(t){return t.previousElementSibling}}).on("success",(function(e){e.clearSelection(),t.copied=!0,window.setTimeout((function(){t.copied=!1}),2e3)}))}},c=r(30),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{ref:"copy",staticClass:"copy"},[r("i",{class:["theme--dark","v-icon","mdi",t.copied?"mdi-clipboard-check-outline":"mdi-clipboard-outline"],attrs:{title:"Copy"}})])}),[],!1,null,null,null);e.default=component.exports},462:function(t,e,r){"use strict";r.r(e);var n={props:{color:{type:String,default:void 0},icon:{type:String,default:"mdi-script-text-outline"},noIcon:{type:Boolean,default:!1}}},l=r(30),o=r(31),c=r.n(o),d=r(547),v=r(189),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-alert",{attrs:{border:"left",color:t.color,dense:"",text:"",tile:""},scopedSlots:t._u([t.noIcon?null:{key:"prepend",fn:function(){return[r("v-icon",{attrs:{color:t.color,dense:"",left:""}},[t._v(t._s(t.icon))])]},proxy:!0}],null,!0)},[t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:d.a,VIcon:v.a})},463:function(t,e,r){"use strict";r(449)},464:function(t,e,r){var n=r(13)(!1);n.push([t.i,".search-sheet[data-v-41cdbb2b]{z-index:4;position:absolute;overflow:hidden;max-width:300px}",""]),t.exports=n},465:function(t,e,r){"use strict";r.r(e);var n=r(24),l=(r(86),r(33),r(203),{name:"NewsSearch",data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("post").only(["title","description","slug"]).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),o=(r(463),r(30)),c=r(31),d=r.n(c),v=r(491),f=r(121),m=r(85),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-6"},[r("BaseTextField",{attrs:{"hide-details":"","append-icon":"mdi-magnify",label:"Search",clearable:""},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}),t._v(" "),t.articles.length?r("v-card",{staticClass:"search-sheet"},t._l(t.articles,(function(article){return r("v-list-item",{key:article.slug,attrs:{to:"/blog/post/"+article.slug,"three-line":""}},[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(article.title))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(article.description))])],1)],1)})),1):t._e()],1)}),[],!1,null,"41cdbb2b",null);e.default=component.exports;d()(component,{BaseTextField:r(460).default}),d()(component,{VCard:v.a,VListItem:f.a,VListItemContent:m.a,VListItemSubtitle:m.b,VListItemTitle:m.c})},466:function(t,e,r){"use strict";r.r(e);var n={name:"NewsCategories",mixins:[r(446).a]},l=r(30),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseInfoCard",{attrs:{title:"Topics"}},[r("ul",{staticClass:"pl"},t._l(t.topTopics,(function(e,i){var n=e.name,l=e.to;return r("li",{key:i,staticClass:"mb-3"},[r("NuxtLink",{class:["grey--text",t.$vuetify.theme.isDark?"text--lighten-1":"text--darken-1"],attrs:{to:l}},[t._v(t._s(n))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseInfoCard:r(439).default})},467:function(t,e,r){"use strict";r.r(e);var n={name:"NewsArchives"},l=r(30),component=Object(l.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},468:function(t,e,r){"use strict";r.r(e);var n={name:"NewsArchives",mixins:[r(446).a]},l=r(30),o=r(31),c=r.n(o),d=r(122),v=r(487),f=r(549),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseInfoCard",{attrs:{title:"Tags"}},[r("v-row",{staticClass:"mb-10",attrs:{dense:""}},t._l(t.topTags,(function(e,i){var n=e.name,l=e.to;return r("v-col",{key:i,attrs:{cols:"auto"}},[r("v-btn",{class:["text-capitalize","grey--text",t.$vuetify.theme.isDark?"text--lighten-1":"text--darken-2"],attrs:{to:l,outlined:"",tile:""}},[t._v("\n\t\t\t\t"+t._s(n)+"\n\t\t\t")])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseInfoCard:r(439).default}),c()(component,{VBtn:d.a,VCol:v.a,VRow:f.a})},469:function(t,e,r){"use strict";r.r(e);r(62),r(36),r(19),r(23),r(49),r(37),r(4),r(44),r(55),r(38);var n=r(1),l=r(461);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){d=!0,l=t},f:function(){try{o||null==r.return||r.return()}finally{if(d)throw l}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var d={name:"NewsCard",mixins:[r(451).a],props:{article:{type:Object,required:!0},isArticle:{type:Boolean,default:!1},topics:{type:Array,required:!0},divider:Boolean},mounted:function(){setTimeout((function(){var t,e=o(document.getElementsByClassName("nuxt-content-highlight"));try{for(e.s();!(t=e.n()).done;){var r=t.value,component=(new(n.a.extend(l.default))).$mount();r.appendChild(component.$el)}}catch(t){e.e(t)}finally{e.f()}}),500)}},v=r(30),f=r(31),m=r.n(f),h=r(53),_=r(490),y=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NuxtLink",{staticClass:"d-block",attrs:{to:"/blog/post/"+this.article.slug}},[t.isArticle?t._e():r("div",{staticClass:"px-4"},[r("BaseTitle",{staticClass:"text-uppercase",attrs:{title:this.article.title,size:"text-h5",weight:"regular",space:"2"}})],1),t._v(" "),r("v-theme-provider",{attrs:{dark:!t.$vuetify.theme.isDark}},[r("v-sheet",{staticClass:"d-flex",attrs:{dark:!t.$vuetify.theme.isDark,light:t.$vuetify.theme.isDark,tile:"","max-width":"100%"}},[r("div",{staticClass:"pa-2 text-body-2 text-truncate"},[t.createdAt?r("span",{staticClass:"mx-2"},[t._v(t._s(t.createdAt))]):t._e(),t._v(" "),t.isUpdated?r("span",[t._v("/")]):t._e(),t._v(" "),t.isUpdated?r("span",{staticClass:"mx-2"},[r("span",{staticClass:"text-caption pr-1"},[t._v("updated")]),t._v("\n\t\t\t\t\t\t"+t._s(t.updatedAt)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),t.topics&&t.topics.length>0?[r("span",[t._v("/")]),t._v(" "),t._l(t.topics,(function(e,i){var n=e.name,l=e.slug;return r("NuxtLink",{key:i,attrs:{to:"/blog/topics/"+l,custom:""},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.navigate;return[r("span",{staticClass:"mx-2 primary--text",attrs:{title:n,role:"link"},on:{click:l,keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:l.apply(null,arguments)}}},[t._v(t._s(n))])]}}],null,!0)})}))]:t._e()],2)])],1),t._v(" "),r("div",{staticClass:"pa-4 pb-0"},[r("Vuequote",{staticClass:"mt-n4 mb-0",attrs:{icon:"mdi-subdirectory-arrow-right"}},[t._v(t._s(this.article.description))])],1)],1),t._v(" "),t.isArticle?r("div",{staticClass:"pa-4"},[r("BaseBody",{attrs:{space:"0"}},[r("nuxt-content",{attrs:{document:t.article}})],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=y.exports;m()(y,{BaseTitle:r(440).default,Vuequote:r(462).default,BaseBody:r(436).default}),m()(y,{VSheet:h.a,VThemeProvider:_.a})},470:function(t,e,r){var content=r(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("b1bed018",content,!0,{sourceMap:!1})},471:function(t,e,r){var n=r(13)(!1);n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=n},487:function(t,e,r){"use strict";r(4),r(8),r(10),r(11);var n=r(2),l=(r(22),r(7),r(33),r(54),r(472),r(19),r(37),r(473),r(474),r(475),r(476),r(477),r(478),r(479),r(480),r(481),r(482),r(483),r(484),r(485),r(38),r(43),r(6),r(65),r(276),r(1)),o=r(87),c=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],m=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=f.reduce((function(t,e){return t["offset"+Object(c.u)(e)]={type:[String,Number],default:null},t}),{}),_=f.reduce((function(t,e){return t["order"+Object(c.u)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(_)};function x(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var l=e.replace(t,"");n+="-".concat(l)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=l.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,l=e.children,c=(e.parent,"");for(var d in r)c+=String(r[d]);var v=w.get(c);return v||function(){var t,e;for(e in v=[],y)y[e].forEach((function(t){var n=r[t],l=x(e,t,n);l&&v.push(l)}));var l=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!l||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(c,v)}(),t(r.tag,Object(o.a)(data,{class:v}),l)}})},491:function(t,e,r){"use strict";r(7),r(4),r(8),r(10),r(6),r(11);var n=r(2),l=(r(22),r(202),r(458),r(167)),o=r(488),c=r(66),d=r(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(o.a,c.a,l.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},l.a.options.computed.classes.call(this))},styles:function(){var style=f({},l.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=o.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},502:function(t,e,r){"use strict";r(7),r(4),r(8),r(10),r(6),r(11);var n=r(2),l=(r(75),r(470),r(66)),o=r(5);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(o.a)(l.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),f=r(0),m=Object(f.g)("v-breadcrumbs__divider","li"),h=r(25);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(o.a)(h.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(m,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(v,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},503:function(t,e,r){"use strict";r.r(e);var n={name:"NewsRecentArticlesItem",mixins:[r(451).a],props:{article:{type:Object,required:!0}}},l=r(30),o=r(31),c=r.n(o),d=r(121),v=r(85),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list-item",{staticClass:"px-0",attrs:{to:"/blog/post/"+t.article.slug,"three-line":""}},[r("v-list-item-content",[r("v-list-item-subtitle",{staticClass:"text-uppercase subtitle-2 font-weight-bold text--primary mb-n2",domProps:{textContent:t._s(t.article.title)}}),t._v(" "),t.createdAt?r("v-list-item-subtitle",{staticClass:"font-weight-bold mb-n2",domProps:{textContent:t._s(t.createdAt)}}):t._e(),t._v(" "),t.isUpdated?r("v-list-item-subtitle",{staticClass:"font-weight-bold mb-n2"},[r("span",{staticClass:"text-caption pr-1"},[t._v("updated")]),t._v("\n\t\t\t"+t._s(t.updatedAt)+"\n\t\t")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VListItem:d.a,VListItemContent:v.a,VListItemSubtitle:v.b})},505:function(t,e,r){"use strict";r.r(e);var n={name:"NewsShare",props:{tags:{type:Array,default:[]}}},l=r(30),o=r(31),c=r.n(o),d=r(504),v=r(549),f=r(426),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-divider"),t._v(" "),r("v-row",{staticClass:"ma-0 pa-4",attrs:{align:"center"}},[r("v-spacer"),t._v(" "),r("div",{staticClass:"text-body-2"},t._l(t.tags,(function(e,i){var n=e.name,l=e.slug;return r("NuxtLink",{key:i,staticClass:"text--primary d-inline-block ml-2",attrs:{to:"/blog/tags/"+l},domProps:{textContent:t._s(n+(i+1<t.tags.length?",":""))}})})),1)],1),t._v(" "),r("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDivider:d.a,VRow:v.a,VSpacer:f.a})},506:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},l=r(30),o=r(31),c=r.n(o),d=r(189),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-row justify-space-between text-overline my-4"},[t.prev?r("NuxtLink",{staticClass:"text-truncate",attrs:{to:"/blog/post/"+t.prev.slug,title:t.prev.title}},[r("v-icon",{attrs:{left:"",dense:""}},[t._v("mdi-chevron-left")]),t._v(t._s(t.prev.title)+"\n\t")],1):r("span",[t._v(" ")]),t._v(" "),t.next?r("NuxtLink",{staticClass:"text-truncate",attrs:{to:"/blog/post/"+t.next.slug,title:t.next.title}},[t._v("\n\t\t"+t._s(t.next.title)),r("v-icon",{attrs:{right:"",dense:""}},[t._v("mdi-chevron-right")])],1):r("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a})},507:function(t,e,r){"use strict";r.r(e);var n={name:"NewsRecentArticles",props:{recentArticles:{type:Array,required:!0}}},l=r(30),o=r(31),c=r.n(o),d=r(504),v=r(190),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseInfoCard",{attrs:{title:"Recent Posts"}},[r("v-list",{staticClass:"py-0 mt-n5 mb-9"},[t._l(t.recentArticles,(function(article,i){return[r("NewsRecentArticlesItem",{key:i,attrs:{article:article}}),t._v(" "),r("v-divider",{key:"divider-"+i})]}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{NewsRecentArticlesItem:r(503).default,BaseInfoCard:r(439).default}),c()(component,{VDivider:d.a,VList:v.a})},517:function(t,e,r){"use strict";r.r(e);r(33),r(54);var n={name:"SectionArticle",props:{article:{type:Object,required:!0},recentArticles:{type:Array,required:!0},tagsList:{type:Array,required:!0},topicsList:{type:Array,required:!0},prev:{type:Object,required:!1},next:{type:Object,required:!1}},computed:{pascalSlug:function(){try{return this.article.slug.replace(/(^\w|-\w)/g,(function(text){return text.replace(/-/,"").toUpperCase()}))}catch(t){return this.article.title}}}},l=r(30),o=r(31),c=r.n(o),d=r(502),v=r(487),f=r(434),m=r(549),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseSection",{attrs:{space:"72"}},[r("BaseSectionHeading",{attrs:{icon:"mdi-sticker-emoji",title:this.article.title,outlined:""}},[r("v-breadcrumbs",{staticClass:"justify-center pa-0",attrs:{items:[{text:"Home",to:"/"},{text:"Blog",to:"/blog",exact:!0},{text:"Post",disabled:!0},{text:t.pascalSlug,disabled:!0}],divider:"-"}})],1),t._v(" "),r("v-container",{staticClass:"py-0"},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"7"}},[r("NewsCard",t._b({staticClass:"mb-4",attrs:{article:t.article,"is-article":!0,topics:t.topicsList}},"NewsCard",t.article,!1)),t._v(" "),t.tagsList&&t.tagsList.length>0?r("NewsShare",{attrs:{tags:t.tagsList}}):t._e(),t._v(" "),r("PrevNext",{attrs:{prev:t.prev,next:t.next}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("NewsSearch"),t._v(" "),r("NewsRecentArticles",{attrs:{"recent-articles":t.recentArticles}}),t._v(" "),r("NewsCategories"),t._v(" "),r("NewsArchives"),t._v(" "),r("NewsTags")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseSectionHeading:r(454).default,NewsCard:r(469).default,NewsShare:r(505).default,PrevNext:r(506).default,NewsSearch:r(465).default,NewsRecentArticles:r(507).default,NewsCategories:r(466).default,NewsArchives:r(467).default,NewsTags:r(468).default,BaseSection:r(275).default}),c()(component,{VBreadcrumbs:d.a,VCol:v.a,VContainer:f.a,VRow:m.a})}}]);