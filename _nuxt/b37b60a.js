(window.webpackJsonp=window.webpackJsonp||[]).push([[22,12,15,21],{434:function(t,e,n){"use strict";e.a={name:"Heading",inject:{heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}}},computed:{justify:function(){switch(this.align){case"center":return"center";case"right":return"end";default:return"start"}}}}},436:function(t,e,n){"use strict";n.r(e);n(22);var r={name:"BaseIcon",props:{size:{type:[Number,String],default:56}}},o=n(24),l=n(35),c=n.n(l),d=n(190),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-icon",t._g(t._b({attrs:{size:t.size}},"v-icon",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a})},440:function(t,e,n){"use strict";n.r(e);var r=n(166),o=n(434),l={name:"BaseTitle",extends:r.default,mixins:[o.a],props:{size:{type:String,default:"text-h6"},mobileSize:{type:String,default:"text-subtitle-1"},tag:{type:String,default:"h3"},weight:{type:String,default:"medium"}}},c=n(24),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports},444:function(t,e,n){var content=n(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("4c513f34",content,!0,{sourceMap:!1})},447:function(t,e,n){"use strict";n(444)},448:function(t,e,n){var r=n(12)(!1);r.push([t.i,".base-avatar{border-radius:50%;position:relative;overflow:visible}.base-avatar__outline{position:absolute!important;left:0;top:0}.base-avatar.base-avatar--outlined .base-avatar__avatar{border-width:thin;border-style:solid}.theme--light .base-avatar--outlined .base-avatar__avatar{border-color:rgba(0,0,0,.12)!important}.theme--dark .base-avatar--outlined .base-avatar__avatar{border-color:hsla(0,0%,100%,.12)!important}",""]),t.exports=r},449:function(t,e,n){"use strict";n.r(e);n(22),n(28);var r={name:"BaseAvatar",inject:["theme"],props:{color:String,dark:Boolean,icon:String,outlined:Boolean,size:{type:[Number,String],default:56}},data:function(){return{multiply:6}},computed:{classes:function(){return[this.outlined&&"base-avatar--outlined"]},isDark:function(){return this.theme.isDark||this.dark},outlineSize:function(){return Number(this.size)+this.size/this.multiply},styles:function(){var t=this.size/(2*this.multiply);return{margin:"-".concat(t,"px 0 0 -").concat(t,"px")}}}},o=(n(447),n(24)),l=n(35),c=n.n(l),d=n(191),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-avatar d-inline-flex",class:t.classes},[t.outlined?n("v-avatar",{staticClass:"base-avatar__outline",staticStyle:{opacity:"0.4"},style:t.styles,attrs:{color:t.color||(t.$vuetify.theme.isDark?"grey darken-3":"grey lighten-4"),size:t.outlineSize}}):t._e(),t._v(" "),n("v-avatar",t._g(t._b({staticClass:"base-avatar__avatar",attrs:{color:t.color||(t.$vuetify.theme.isDark?"grey darken-4":"white"),size:t.size}},"v-avatar",t.$attrs,!1),t.$listeners),[t.icon?n("BaseIcon",{attrs:{dark:t.dark,size:t.size/2}},[t._v("\n\t\t\t"+t._s(t.icon)+"\n\t\t")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseIcon:n(436).default}),c()(component,{VAvatar:d.a})},544:function(t,e,n){"use strict";n.r(e);var r={name:"HomeSettings",data:function(){return{colors:[this.$vuetify.theme.currentTheme.primary,"#9368e9","#F4511E"],menu:!1}},computed:{currentThemePrimary:{get:function(){return this.$vuetify.theme.currentTheme.primary},set:function(t){var e=this.$vuetify.theme.isDark?"dark":"light";this.$vuetify.theme.themes[e].primary=t}}}},o=n(24),l=n(35),c=n.n(l),d=n(468),v=n(469),f=n(475),m=n(190),h=n(535),y=n(55),_=n(538),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","max-width":"90%","min-width":"275","offset-x":"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.attrs,o=e.on;return[n("v-card",t._g(t._b({staticClass:"py-2 px-4",staticStyle:{position:"fixed",top:"164px",right:"-35px"},attrs:{id:"settings",color:"#0000004D",dark:"",flat:"",width:"100"}},"v-card",r,!1),o),[n("v-icon",{attrs:{large:""}},[t._v(" mdi-cog ")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-card",{staticClass:"py-2"},[n("BaseTitle",{attrs:{align:"center",title:"Theme Colors",space:"0"}}),t._v(" "),n("v-card-text",[n("v-item-group",{staticClass:"d-flex justify-center",model:{value:t.currentThemePrimary,callback:function(e){t.currentThemePrimary=e},expression:"currentThemePrimary"}},t._l(t.colors,(function(e){return n("v-item",{key:e,attrs:{value:e},scopedSlots:t._u([{key:"default",fn:function(t){var r=t.active,o=t.toggle;return[n("BaseAvatar",{staticClass:"ma-2",staticStyle:{cursor:"pointer"},attrs:{color:e,outlined:r,size:"48"},on:{click:function(t){return t.stopPropagation(),o.apply(null,arguments)}}})]}}],null,!0)})})),1),t._v(" "),n("v-divider",{staticClass:"my-6"}),t._v(" "),n("BaseBtn",{staticClass:"mr-4",attrs:{outlined:t.$vuetify.theme.dark},on:{click:function(e){t.$vuetify.theme.dark=!1}}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-white-balance-sunny ")]),t._v("\n\t\t\t\tLight\n\t\t\t")],1),t._v(" "),n("BaseBtn",{attrs:{outlined:!t.$vuetify.theme.dark},on:{click:function(e){t.$vuetify.theme.dark=!0}}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-weather-night ")]),t._v("\n\t\t\t\tDark\n\t\t\t")],1),t._v(" "),n("v-divider",{staticClass:"my-6"}),t._v(" "),n("BaseBtn",{staticClass:"mb-6",attrs:{block:"",href:"https://store.vuetifyjs.com/products/zero-theme-free/?ref=vtyd-settings",color:"accent",target:"_blank"}},[t._v("\n\t\t\t\tFree Download\n\t\t\t")]),t._v(" "),n("BaseBtn",{attrs:{to:{name:"Sink"},block:"",color:"grey darken-1",dark:""},on:{click:function(e){t.menu=!1}}},[t._v("\n\t\t\t\tView All Components\n\t\t\t")]),t._v(" "),n("v-divider",{staticClass:"my-6"}),t._v(" "),n("BaseImg",{staticClass:"mx-auto mb-6",attrs:{src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.png",width:"88"}}),t._v(" "),n("div",{staticClass:"text-center"},[n("BaseBtn",{attrs:{tile:!1,to:{name:"Pro"},rounded:""},on:{click:function(e){t.menu=!1}}},[t._v("\n\t\t\t\t\tGo Pro\n\n\t\t\t\t\t"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-rocket ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseTitle:n(440).default,BaseAvatar:n(449).default,BaseBtn:n(285).default,BaseImg:n(277).default}),c()(component,{VCard:d.a,VCardText:v.a,VDivider:f.a,VIcon:m.a,VItem:h.a,VItemGroup:y.b,VMenu:_.a})}}]);