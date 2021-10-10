(window.webpackJsonp=window.webpackJsonp||[]).push([[18,6,14],{407:function(t,e,r){"use strict";e.a={name:"Heading",inject:{heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}}},computed:{justify:function(){switch(this.align){case"center":return"center";case"right":return"end";default:return"start"}}}}},410:function(t,e,r){"use strict";r.r(e);r(20);var n={name:"BaseBody",mixins:[r(407).a],inject:["theme"],props:{html:String,maxWidth:{type:[Number,String],default:void 0},space:{type:[Number,String],default:10},tag:{type:String,default:"div"},text:String},computed:{classes:function(){return["grey--text",this.theme.isDark?"text--lighten-1":"text--darken-1","text-".concat(this.heading.align),"mb-".concat(this.space)]},styles:function(){return{maxWidth:"".concat(this.maxWidth,"px")}}}},o=r(23),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.tag,t._g(t._b({tag:"component",staticClass:"base-body text-body-1",class:t.classes,style:t.styles},"component",t.$attrs,!1),t.$listeners),[t.text?r("div",{domProps:{textContent:t._s(t.text)}}):t.html?r("div",{domProps:{innerHTML:t._s(t.html)}}):t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,r){"use strict";r.r(e);var n=r(164),o=r(407),l={name:"BaseTitle",extends:n.default,mixins:[o.a],props:{size:{type:String,default:"text-h6"},mobileSize:{type:String,default:"text-subtitle-1"},tag:{type:String,default:"h3"},weight:{type:String,default:"bold"}}},d=r(23),component=Object(d.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports},428:function(t,e,r){"use strict";r.r(e);r(20),r(40);var n={name:"NewsCard",props:{category:String,comments:[Number,String],date:String,divider:Boolean,html:String,icon:String,prominent:Boolean,readMore:Boolean,src:{type:String,default:"#"},imgSrc:String,text:String,title:String,truncate:[Number,String]},computed:{truncatedText:function(){if(!this.text)return"";var t=Number(this.truncate);return this.text.length>t?this.text.slice(0,t)+" [...]":this.text}}},o=r(23),l=r(35),d=r.n(l),c=r(119),h=r(438),v=r(51),m=r(442),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NuxtLink",{staticClass:"d-block",attrs:{to:t.src}},[r("v-theme-provider",{attrs:{dark:!t.$vuetify.theme.isDark}},[r("v-sheet",{staticClass:"d-flex",attrs:{dark:!t.$vuetify.theme.isDark,light:t.$vuetify.theme.isDark,tile:"","max-width":"100%"}},[r("div",{staticClass:"grow pa-2 body-2"},[r("div",{staticClass:"d-flex align-center fill-height"},[r("span",{staticClass:"px-2",domProps:{textContent:t._s(t.date)}}),t._v("\n\t\t\t\t\t\t/\n\t\t\t\t\t\t"),r("span",{staticClass:"px-2",domProps:{textContent:t._s(t.category)}}),t._v(" "),t.$vuetify.breakpoint.mdAndUp?[t._v("\n\t\t\t\t\t\t\t/\n\t\t\t\t\t\t\t"),r("span",{staticClass:"px-2",domProps:{textContent:t._s(t.comments+" Comments")}})]:t._e()],2)])])],1),t._v(" "),r("div",{staticClass:"pa-4"},[r("BaseTitle",{staticClass:"text-truncate text-uppercase",attrs:{title:t.title}}),t._v(" "),r("BaseBody",{attrs:{text:t.html?void 0:t.truncatedText,html:t.html,space:"0"}})],1),t._v(" "),t.readMore?r("v-btn",{staticClass:"font-weight-bold",attrs:{text:""}},[t._v(" Read More ")]):t._e()],1),t._v(" "),t.divider?r("v-divider",{staticClass:"mt-6"}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{BaseTitle:r(412).default,BaseBody:r(410).default}),d()(component,{VBtn:c.a,VDivider:h.a,VSheet:v.a,VThemeProvider:m.a})},433:function(t,e,r){var content=r(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("7132a15d",content,!0,{sourceMap:!1})},434:function(t,e,r){var n=r(14)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},438:function(t,e,r){"use strict";r(7),r(5),r(8),r(10),r(6),r(11);var n=r(2),o=(r(433),r(24));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:d({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:d({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},442:function(t,e,r){"use strict";r(127);var n=r(24);e.a=n.a.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:n.a.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})}}]);