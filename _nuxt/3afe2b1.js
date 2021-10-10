(window.webpackJsonp=window.webpackJsonp||[]).push([[33,10,13,21,28],{418:function(t,e,n){var content=n(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("1b172670",content,!0,{sourceMap:!1})},422:function(t,e,n){"use strict";n(418)},423:function(t,e,n){var r=n(14)(!1);r.push([t.i,"",""]),t.exports=r},424:function(t,e,n){"use strict";n.r(e);var r={name:"BaseTextField"},l=(n(422),n(23)),o=n(35),c=n.n(o),d=n(495),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-text-field",t._g(t._b({attrs:{outlined:"",dense:""}},"v-text-field",t.$attrs,!1),t.$listeners),[t._t("append-outer",null,{slot:"append-outer"})],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VTextField:d.a})},429:function(t,e,n){"use strict";n.r(e);var r={name:"NewsSearch"},l=n(23),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("BaseTextField",{attrs:{"append-icon":"mdi-magnify",label:"Search",clearable:""}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTextField:n(424).default})},430:function(t,e,n){"use strict";n.r(e);var r={name:"NewsCategories",data:function(){return{categories:["Analytics Implementation","Business Partnerships","Growth Strategy","Research Discussions","All ..."]}}},l=n(23),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseInfoCard",{attrs:{title:"Post Categories"}},[n("ul",{staticClass:"pl"},t._l(t.categories,(function(e){return n("li",{key:e,staticClass:"mb-3",domProps:{textContent:t._s(e)}})})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseInfoCard:n(409).default})},431:function(t,e,n){"use strict";n.r(e);var r={name:"NewsArchives",data:function(){return{archives:["November 2019 (8)","October 2019 (8)","August 2018 (8)","December 2017 (8)","All ..."]}}},l=n(23),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseInfoCard",{attrs:{title:"Archives"}},[n("ul",{staticClass:"pl"},t._l(t.archives,(function(e){return n("li",{key:e,staticClass:"mb-3",domProps:{textContent:t._s(e)}})})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseInfoCard:n(409).default})},432:function(t,e,n){"use strict";n.r(e);var r={name:"NewsArchives",data:function(){return{tags:["Business","Analyze","Video","Branding","Packaging","Motion","Web Pages","Drag & Drop","All ..."]}}},l=n(23),o=n(35),c=n.n(o),d=n(119),f=n(492),v=n(493),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseInfoCard",{attrs:{title:"Top Tags"}},[n("v-row",{staticClass:"mb-10",attrs:{dense:""}},t._l(t.tags,(function(e){return n("v-col",{key:e,attrs:{cols:"auto"}},[n("v-btn",{staticClass:"text-capitalize",attrs:{color:"grey darken-2",outlined:"",tile:""}},[t._v("\n\t\t\t\t"+t._s(e)+"\n\t\t\t")])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseInfoCard:n(409).default}),c()(component,{VBtn:d.a,VCol:f.a,VRow:v.a})},440:function(t,e,n){"use strict";n.r(e);n(20);var r={name:"BaseListItem",props:{color:{type:String,default:"primary"},icon:{type:String,default:"mdi-tag-text-outline"},iconSize:{type:Number,default:28},text:String}},l=n(23),o=n(35),c=n.n(o),d=n(187),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex align-center"},[t.icon?n("v-icon",{staticClass:"mr-3",attrs:{color:t.color,size:t.iconSize},domProps:{textContent:t._s(t.icon)}},[t._v("\n\t\t"+t._s(t.icon)+"\n\t")]):t._e(),t._v(" "),t.text?n("div",{staticClass:"subtitle-1",domProps:{textContent:t._s(t.text)}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a})},465:function(t,e,n){"use strict";n.r(e);var r={name:"SectionNewsAltTopics",data:function(){return{topics:[{text:"Docker",to:"#"},{icon:"mdi-language-java",text:"Java",to:"#"},{icon:"mdi-language-javascript",text:"Javascript",to:"#"},{icon:"mdi-nuxt",text:"Nuxt",to:"#"},{text:"Spring Boot",to:"#"},{icon:"mdi-vuejs",text:"Vue.js",to:"#"}]}}},l=n(23),o=n(35),c=n.n(o),d=n(503),f=n(492),v=n(406),m=n(493),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseSection",{attrs:{space:"72"}},[n("BaseSectionHeading",{attrs:{icon:"mdi-format-list-bulleted-square",title:"Topics",outlined:""}},[n("v-breadcrumbs",{staticClass:"justify-center pa-0",attrs:{items:[{text:"Home",to:"/"},{text:"Blog",to:"/blog",exact:!0},{text:"Topics"}],divider:"-"}})],1),t._v(" "),n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"d-flex d-row flex-wrap justify-center align-center"},t._l(t.topics,(function(e,i){var r=e.icon,text=e.text,l=e.to;return n("NuxtLink",{key:i,class:["ma-4","grey--text",t.$vuetify.theme.isDark?"text--lighten-1":"text--darken-2"],attrs:{to:l}},[n("BaseListItem",{attrs:{icon:r,"icon-size":20,text:text}})],1)})),1)]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"3"}},[n("NewsSearch"),t._v(" "),n("NewsCategories"),t._v(" "),n("NewsArchives"),t._v(" "),n("NewsTags")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{BaseSectionHeading:n(421).default,BaseListItem:n(440).default,NewsSearch:n(429).default,NewsCategories:n(430).default,NewsArchives:n(431).default,NewsTags:n(432).default,BaseSection:n(259).default}),c()(component,{VBreadcrumbs:d.a,VCol:f.a,VContainer:v.a,VRow:m.a})},500:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"Topics"}}},l=n(23),o=n(35),c=n.n(o),d=n(51),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-sheet",{staticClass:"fill-height"},[e("SectionNewsAltTopics")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{SectionNewsAltTopics:n(465).default}),c()(component,{VSheet:d.a})}}]);