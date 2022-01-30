(window.webpackJsonp=window.webpackJsonp||[]).push([[36,13,16,17,22,24],{440:function(t,e,n){"use strict";e.a={name:"Heading",inject:{heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}}},computed:{justify:function(){switch(this.align){case"center":return"center";case"right":return"end";default:return"start"}}}}},441:function(t,e,n){"use strict";n.r(e);var r={name:"BaseInfoCard",mixins:[n(440).a],props:{dark:Boolean,callout:String,color:{type:String,default:"primary"},icon:String,subtitle:String,text:String,title:String}},l=n(25),o=n(31),c=n.n(o),d=n(493),f=n(439),v=n(576),m=n(492),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-theme-provider",{attrs:{dark:t.dark}},[n("v-container",{staticClass:"pa-0"},[n("v-row",{attrs:{justify:t.justify,"no-gutters":""}},[t.icon?n("v-col",{staticClass:"mb-4",class:"text-"+t.align,attrs:{cols:"12"}},[n("BaseIcon",{attrs:{color:t.color}},[t._v("\n\t\t\t\t\t"+t._s(t.icon)+"\n\t\t\t\t")])],1):t._e(),t._v(" "),t.title||t.subtitle?n("v-col",{attrs:{cols:t.callout?9:12}},[t.subtitle?n("BaseSubtitle",{attrs:{title:t.subtitle,space:"1"}}):t._e(),t._v(" "),n("BaseTitle",{staticClass:"text-uppercase",attrs:{title:t.title,space:"1"}}),t._v(" "),n("BaseDivider",{attrs:{color:t.color}}),t._v(" "),t.text||t.$slots.default?n("BaseBody",{attrs:{text:t.text,space:"6"}},[t._t("default")],2):t._e()],1):t._e(),t._v(" "),t.callout?n("v-col",{attrs:{cols:"2"}},[n("div",{staticClass:"text-h2 grey--text text--lighten-4 font-weight-bold pr-8",domProps:{textContent:t._s(t.callout)}})]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseIcon:n(443).default,BaseSubtitle:n(446).default,BaseTitle:n(447).default,BaseDivider:n(445).default,BaseBody:n(444).default}),c()(component,{VCol:d.a,VContainer:f.a,VRow:v.a,VThemeProvider:m.a})},442:function(t,e,n){var content=n(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("5b6aeea0",content,!0,{sourceMap:!1})},443:function(t,e,n){"use strict";n.r(e);n(20);var r={name:"BaseIcon",props:{size:{type:[Number,String],default:56}}},l=n(25),o=n(31),c=n.n(o),d=n(190),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-icon",t._g(t._b({attrs:{size:t.size}},"v-icon",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a})},444:function(t,e,n){"use strict";n.r(e);n(20);var r={name:"BaseBody",mixins:[n(440).a],inject:["theme"],props:{html:String,maxWidth:{type:[Number,String],default:void 0},space:{type:[Number,String],default:10},tag:{type:String,default:"div"},text:String},computed:{classes:function(){return["grey--text",this.theme.isDark?"text--lighten-1":"text--darken-1","text-".concat(this.heading.align),"mb-".concat(this.space)]},styles:function(){return{maxWidth:"".concat(this.maxWidth,"px")}}}},l=n(25),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,t._g(t._b({tag:"component",staticClass:"base-body text-body-1",class:t.classes,style:t.styles},"component",t.$attrs,!1),t.$listeners),[t.text?n("div",{domProps:{textContent:t._s(t.text)}}):t.html?n("div",{domProps:{innerHTML:t._s(t.html)}}):t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},445:function(t,e,n){"use strict";n.r(e);n(20);var r={name:"BaseDivider",mixins:[n(440).a],props:{color:String,dense:Boolean,space:{type:[Number,String],default:6}},computed:{classes:function(){return[this.color,this.margin,"mb-".concat(this.space),this.dense&&"base-divider--dense"]},margin:function(){switch(this.align){case"left":return"mr-auto";case"right":return"ml-auto";default:return"mx-auto"}}}},l=(n(448),n(25)),o=n(31),c=n.n(o),d=n(512),f=n(195),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-responsive",t._g(t._b({staticClass:"base-divider",class:t.classes,attrs:{"max-width":"28"}},"v-responsive",t.$attrs,!1),t.$listeners),[n("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDivider:d.a,VResponsive:f.a})},446:function(t,e,n){"use strict";n.r(e);var r=n(50),l=(n(20),n(26),n(167)),o={name:"BaseSubtitle",extends:l.default,props:{size:{type:String,default:"text-body-2"},mobileSize:{type:String,default:"text-body-1"},space:{type:[String,Number],default:0},tag:{type:String,default:"div"},weight:{type:[Number,String],default:"regular"}},computed:{classes:function(){return[].concat(Object(r.a)(l.default.computed.classes.call(this)),["grey--text"])}}},c=n(25),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},447:function(t,e,n){"use strict";n.r(e);var r=n(167),l=n(440),o={name:"BaseTitle",extends:r.default,mixins:[l.a],props:{size:{type:String,default:"text-h6"},mobileSize:{type:String,default:"text-subtitle-1"},tag:{type:String,default:"h3"},weight:{type:String,default:"medium"}}},c=n(25),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},448:function(t,e,n){"use strict";n(442)},449:function(t,e,n){var r=n(12)(!1);r.push([t.i,".base-divider .v-divider{border-width:3px 0 0!important}.base-divider.base-divider--dense .v-divider{border-width:2px 0 0!important}",""]),t.exports=r},450:function(t,e,n){"use strict";e.a={inject:{topTags:{type:Array,default:function(){return[]}},topTopics:{type:Array,default:function(){return[]}}}}},473:function(t,e,n){"use strict";n.r(e);var r={name:"NewsTags",mixins:[n(450).a]},l=n(25),o=n(31),c=n.n(o),d=n(122),f=n(493),v=n(576),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseInfoCard",{attrs:{title:"Tags"}},[n("v-row",{staticClass:"mb-10",attrs:{dense:""}},t._l(t.topTags,(function(e,i){var r=e.name,l=e.to;return n("v-col",{key:i,attrs:{cols:"auto"}},[n("v-btn",{class:["text-capitalize","grey--text",t.$vuetify.theme.isDark?"text--lighten-1":"text--darken-2"],attrs:{to:l,outlined:"",tile:""}},[t._v("\n\t\t\t\t"+t._s(r)+"\n\t\t\t")])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseInfoCard:n(441).default}),c()(component,{VBtn:d.a,VCol:f.a,VRow:v.a})},492:function(t,e,n){"use strict";n(109);var r=n(27);e.a=r.a.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:r.a.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},493:function(t,e,n){"use strict";n(4),n(8),n(10),n(11);var r=n(2),l=(n(20),n(7),n(32),n(56),n(477),n(18),n(37),n(478),n(479),n(480),n(481),n(482),n(483),n(484),n(485),n(486),n(487),n(488),n(489),n(490),n(38),n(43),n(6),n(66),n(280),n(1)),o=n(87),c=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(c.u)(e)]={type:[String,Number],default:null},t}),{}),y=v.reduce((function(t,e){return t["order"+Object(c.u)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(y)};function S(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var l=e.replace(t,"");r+="-".concat(l)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var _=new Map;e.a=l.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,l=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=_.get(c);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var r=n[t],l=S(e,t,r);l&&f.push(l)}));var l=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!l||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),_.set(c,f)}(),t(n.tag,Object(o.a)(data,{class:f}),l)}})}}]);