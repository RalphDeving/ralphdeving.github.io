(window.webpackJsonp=window.webpackJsonp||[]).push([[24,13,15,16,19,21],{434:function(t,e,n){"use strict";e.a={name:"Heading",inject:{heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}}},computed:{justify:function(){switch(this.align){case"center":return"center";case"right":return"end";default:return"start"}}}}},435:function(t,e,n){var content=n(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("5b6aeea0",content,!0,{sourceMap:!1})},436:function(t,e,n){"use strict";n.r(e);n(22);var r={name:"BaseIcon",props:{size:{type:[Number,String],default:56}}},l=n(24),o=n(35),c=n.n(o),d=n(190),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-icon",t._g(t._b({attrs:{size:t.size}},"v-icon",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a})},437:function(t,e,n){"use strict";n.r(e);n(22);var r={name:"BaseBody",mixins:[n(434).a],inject:["theme"],props:{html:String,maxWidth:{type:[Number,String],default:void 0},space:{type:[Number,String],default:10},tag:{type:String,default:"div"},text:String},computed:{classes:function(){return["grey--text",this.theme.isDark?"text--lighten-1":"text--darken-1","text-".concat(this.heading.align),"mb-".concat(this.space)]},styles:function(){return{maxWidth:"".concat(this.maxWidth,"px")}}}},l=n(24),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,t._g(t._b({tag:"component",staticClass:"base-body text-body-1",class:t.classes,style:t.styles},"component",t.$attrs,!1),t.$listeners),[t.text?n("div",{domProps:{textContent:t._s(t.text)}}):t.html?n("div",{domProps:{innerHTML:t._s(t.html)}}):t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},438:function(t,e,n){"use strict";n.r(e);n(22);var r={name:"BaseDivider",mixins:[n(434).a],props:{color:String,dense:Boolean,space:{type:[Number,String],default:6}},computed:{classes:function(){return[this.color,this.margin,"mb-".concat(this.space),this.dense&&"base-divider--dense"]},margin:function(){switch(this.align){case"left":return"mr-auto";case"right":return"ml-auto";default:return"mx-auto"}}}},l=(n(441),n(24)),o=n(35),c=n.n(o),d=n(475),f=n(194),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-responsive",t._g(t._b({staticClass:"base-divider",class:t.classes,attrs:{"max-width":"28"}},"v-responsive",t.$attrs,!1),t.$listeners),[n("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDivider:d.a,VResponsive:f.a})},439:function(t,e,n){"use strict";n.r(e);var r=n(74),l=(n(22),n(28),n(166)),o={name:"BaseSubtitle",extends:l.default,props:{size:{type:String,default:"text-body-2"},mobileSize:{type:String,default:"text-body-1"},space:{type:[String,Number],default:0},tag:{type:String,default:"div"},weight:{type:[Number,String],default:"regular"}},computed:{classes:function(){return[].concat(Object(r.a)(l.default.computed.classes.call(this)),["grey--text"])}}},c=n(24),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},440:function(t,e,n){"use strict";n.r(e);var r=n(166),l=n(434),o={name:"BaseTitle",extends:r.default,mixins:[l.a],props:{size:{type:String,default:"text-h6"},mobileSize:{type:String,default:"text-subtitle-1"},tag:{type:String,default:"h3"},weight:{type:String,default:"medium"}}},c=n(24),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},441:function(t,e,n){"use strict";n(435)},442:function(t,e,n){var r=n(12)(!1);r.push([t.i,".base-divider .v-divider{border-width:3px 0 0!important}.base-divider.base-divider--dense .v-divider{border-width:2px 0 0!important}",""]),t.exports=r},443:function(t,e,n){"use strict";n.r(e);var r={name:"BaseInfoCard",mixins:[n(434).a],props:{dark:Boolean,callout:String,color:{type:String,default:"primary"},icon:String,subtitle:String,text:String,title:String}},l=n(24),o=n(35),c=n.n(o),d=n(533),f=n(433),m=n(534),v=n(479),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-theme-provider",{attrs:{dark:t.dark}},[n("v-container",{staticClass:"pa-0"},[n("v-row",{attrs:{justify:t.justify,"no-gutters":""}},[t.icon?n("v-col",{staticClass:"mb-4",class:"text-"+t.align,attrs:{cols:"12"}},[n("BaseIcon",{attrs:{color:t.color}},[t._v("\n\t\t\t\t\t"+t._s(t.icon)+"\n\t\t\t\t")])],1):t._e(),t._v(" "),t.title||t.subtitle?n("v-col",{attrs:{cols:t.callout?9:12}},[t.subtitle?n("BaseSubtitle",{attrs:{title:t.subtitle,space:"1"}}):t._e(),t._v(" "),n("BaseTitle",{staticClass:"text-uppercase",attrs:{title:t.title,space:"1"}}),t._v(" "),n("BaseDivider",{attrs:{color:t.color}}),t._v(" "),t.text||t.$slots.default?n("BaseBody",{attrs:{text:t.text,space:"6"}},[t._t("default")],2):t._e()],1):t._e(),t._v(" "),t.callout?n("v-col",{attrs:{cols:"2"}},[n("div",{staticClass:"text-h2 grey--text text--lighten-4 font-weight-bold pr-8",domProps:{textContent:t._s(t.callout)}})]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseIcon:n(436).default,BaseSubtitle:n(439).default,BaseTitle:n(440).default,BaseDivider:n(438).default,BaseBody:n(437).default}),c()(component,{VCol:d.a,VContainer:f.a,VRow:m.a,VThemeProvider:v.a})},473:function(t,e,n){"use strict";n.r(e);var r={name:"NewsArchives",data:function(){return{archives:["November 2019 (8)","October 2019 (8)","August 2018 (8)","December 2017 (8)","All ..."]}}},l=n(24),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseInfoCard",{attrs:{title:"Archives"}},[n("ul",{staticClass:"pl"},t._l(t.archives,(function(e){return n("li",{key:e,staticClass:"mb-3",domProps:{textContent:t._s(e)}})})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseInfoCard:n(443).default})}}]);