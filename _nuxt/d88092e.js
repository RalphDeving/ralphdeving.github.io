(window.webpackJsonp=window.webpackJsonp||[]).push([[40,13,16,17,22,24,28],{494:function(t,e,n){"use strict";e.a={name:"Heading",inject:{heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}}},computed:{justify:function(){switch(this.align){case"center":return"center";case"right":return"end";default:return"start"}}}}},495:function(t,e,n){"use strict";n.r(e);var r=n(637),l=n(493),o=n(604),c=n(578),d={name:"BaseInfoCard",mixins:[n(494).a],props:{dark:Boolean,callout:String,color:{type:String,default:"primary"},icon:String,subtitle:String,text:String,title:String}},f=n(30),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{dark:t.dark}},[e(l.a,{staticClass:"pa-0"},[e(o.a,{attrs:{justify:t.justify,"no-gutters":""}},[t.icon?e(r.a,{staticClass:"mb-4",class:"text-".concat(t.align),attrs:{cols:"12"}},[e("BaseIcon",{attrs:{color:t.color}},[t._v("\n\t\t\t\t\t"+t._s(t.icon)+"\n\t\t\t\t")])],1):t._e(),t._v(" "),t.title||t.subtitle?e(r.a,{attrs:{cols:t.callout?9:12}},[t.subtitle?e("BaseSubtitle",{attrs:{title:t.subtitle,space:"1"}}):t._e(),t._v(" "),e("BaseTitle",{staticClass:"text-uppercase",attrs:{title:t.title,space:"1"}}),t._v(" "),e("BaseDivider",{attrs:{color:t.color}}),t._v(" "),t.text||t.$slots.default?e("BaseBody",{attrs:{text:t.text,space:"6"}},[t._t("default")],2):t._e()],1):t._e(),t._v(" "),t.callout?e(r.a,{attrs:{cols:"2"}},[e("div",{staticClass:"text-h2 grey--text text--lighten-4 font-weight-bold pr-8",domProps:{textContent:t._s(t.callout)}})]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseIcon:n(497).default,BaseSubtitle:n(500).default,BaseTitle:n(501).default,BaseDivider:n(499).default,BaseBody:n(498).default})},496:function(t,e,n){var content=n(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("64eb03de",content,!0,{sourceMap:!1})},497:function(t,e,n){"use strict";n.r(e);var r=n(214),l=(n(24),{name:"BaseIcon",props:{size:{type:[Number,String],default:56}}}),o=n(30),component=Object(o.a)(l,(function(){var t=this;return(0,t._self._c)(r.a,t._g(t._b({attrs:{size:t.size}},"v-icon",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},498:function(t,e,n){"use strict";n.r(e);n(24);var r={name:"BaseBody",mixins:[n(494).a],inject:["theme"],props:{html:String,maxWidth:{type:[Number,String],default:void 0},space:{type:[Number,String],default:10},tag:{type:String,default:"div"},text:String},computed:{classes:function(){return["grey--text",this.theme.isDark?"text--lighten-1":"text--darken-1","text-".concat(this.heading.align),"mb-".concat(this.space)]},styles:function(){return{maxWidth:"".concat(this.maxWidth,"px")}}}},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e(t.tag,t._g(t._b({tag:"component",staticClass:"base-body text-body-1",class:t.classes,style:t.styles},"component",t.$attrs,!1),t.$listeners),[t.text?e("div",{domProps:{textContent:t._s(t.text)}}):t.html?e("div",{domProps:{innerHTML:t._s(t.html)}}):t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},499:function(t,e,n){"use strict";n.r(e);var r=n(550),l=n(215),o=(n(24),{name:"BaseDivider",mixins:[n(494).a],props:{color:String,dense:Boolean,space:{type:[Number,String],default:6}},computed:{classes:function(){return[this.color,this.margin,"mb-".concat(this.space),this.dense&&"base-divider--dense"]},margin:function(){switch(this.align){case"left":return"mr-auto";case"right":return"ml-auto";default:return"mx-auto"}}}}),c=(n(502),n(30)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(l.a,t._g(t._b({staticClass:"base-divider",class:t.classes,attrs:{"max-width":"28"}},"v-responsive",t.$attrs,!1),t.$listeners),[e(r.a)],1)}),[],!1,null,null,null);e.default=component.exports},500:function(t,e,n){"use strict";n.r(e);var r=n(55),l=(n(31),n(24),n(181)),o={name:"BaseSubtitle",extends:l.default,props:{size:{type:String,default:"text-body-2"},mobileSize:{type:String,default:"text-body-1"},space:{type:[String,Number],default:0},tag:{type:String,default:"div"},weight:{type:[Number,String],default:"regular"}},computed:{classes:function(){return[].concat(Object(r.a)(l.default.computed.classes.call(this)),["grey--text"])}}},c=n(30),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},501:function(t,e,n){"use strict";n.r(e);var r=n(181),l=n(494),o={name:"BaseTitle",extends:r.default,mixins:[l.a],props:{size:{type:String,default:"text-h6"},mobileSize:{type:String,default:"text-subtitle-1"},tag:{type:String,default:"h3"},weight:{type:String,default:"medium"}}},c=n(30),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},502:function(t,e,n){"use strict";n(496)},503:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,".base-divider .v-divider{border-width:3px 0 0!important}.base-divider.base-divider--dense .v-divider{border-width:2px 0 0!important}",""]),r.locals={},t.exports=r},504:function(t,e,n){"use strict";e.a={inject:{topTags:{type:Array,default:function(){return[]}},topTopics:{type:Array,default:function(){return[]}}}}},567:function(t,e,n){"use strict";n.r(e);n(23);var r={name:"SectionFeaturesAlt",props:{title:String,features:Array},provide:{heading:{align:"center"}}},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("BaseInfoCard",{attrs:{title:t.title}},t._l(t.features,(function(n,i){return e("NuxtLink",{key:i,staticClass:"mb-8 grey--text text-body-1 d-block text-none text-center",attrs:{to:n.to},domProps:{innerHTML:t._s("&rsaquo; ".concat(n.name))}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseInfoCard:n(495).default})},594:function(t,e,n){"use strict";n.r(e);var r=n(637),l=n(493),o=n(604),c=n(578),d={name:"SectionInfoMain",mixins:[n(504).a]},f=n(30),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{dark:""}},[e("BaseSection",[e(l.a,[e(o.a,{attrs:{justify:"space-around"}},[e(r.a,{attrs:{cols:"12",sm:"6"}},[e("InfoFeatures",{attrs:{title:"Topics",features:t.topTopics}})],1),t._v(" "),e(r.a,{attrs:{cols:"12",sm:"6"}},[e("InfoFeatures",{attrs:{title:"Tags",features:t.topTags}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InfoFeatures:n(567).default,BaseSection:n(311).default})}}]);