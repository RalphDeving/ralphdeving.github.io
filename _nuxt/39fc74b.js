(window.webpackJsonp=window.webpackJsonp||[]).push([[12,16],{497:function(t,e,r){"use strict";r.r(e);var n=r(214),o=(r(24),{name:"BaseIcon",props:{size:{type:[Number,String],default:56}}}),l=r(30),component=Object(l.a)(o,(function(){var t=this;return(0,t._self._c)(n.a,t._g(t._b({attrs:{size:t.size}},"v-icon",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},507:function(t,e,r){var content=r(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("4bfc11c6",content,!0,{sourceMap:!1})},522:function(t,e,r){"use strict";r(507)},523:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".base-avatar{border-radius:50%;overflow:visible;position:relative}.base-avatar__outline{left:0;position:absolute!important;top:0}.base-avatar.base-avatar--outlined .base-avatar__avatar{border-style:solid;border-width:thin}.theme--light .base-avatar--outlined .base-avatar__avatar{border-color:rgba(0,0,0,.12)!important}.theme--dark .base-avatar--outlined .base-avatar__avatar{border-color:hsla(0,0%,100%,.12)!important}",""]),n.locals={},t.exports=n},527:function(t,e,r){"use strict";r.r(e);var n=r(219),o=(r(31),r(24),{name:"BaseAvatar",inject:["theme"],props:{color:String,dark:Boolean,icon:String,outlined:Boolean,size:{type:[Number,String],default:56}},data:function(){return{multiply:6}},computed:{classes:function(){return[this.outlined&&"base-avatar--outlined"]},isDark:function(){return this.theme.isDark||this.dark},outlineSize:function(){return Number(this.size)+this.size/this.multiply},styles:function(){var t=this.size/(2*this.multiply);return{margin:"-".concat(t,"px 0 0 -").concat(t,"px")}}}}),l=(r(522),r(30)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"base-avatar d-inline-flex",class:t.classes},[t.outlined?e(n.a,{staticClass:"base-avatar__outline",staticStyle:{opacity:"0.4"},style:t.styles,attrs:{color:t.color||(t.$vuetify.theme.isDark?"grey darken-3":"grey lighten-4"),size:t.outlineSize}}):t._e(),t._v(" "),e(n.a,t._g(t._b({staticClass:"base-avatar__avatar",attrs:{color:t.color||(t.$vuetify.theme.isDark?"grey darken-4":"white"),size:t.size}},"v-avatar",t.$attrs,!1),t.$listeners),[t.icon?e("BaseIcon",{attrs:{dark:t.dark,size:t.size/2}},[t._v("\n\t\t\t"+t._s(t.icon)+"\n\t\t")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseIcon:r(497).default})}}]);