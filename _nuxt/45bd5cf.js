(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{506:function(t,e,r){"use strict";var n=r(521).has;t.exports=function(t){return n(t),t}},514:function(t,e,r){"use strict";var n=r(9),o=r(576),c=r(521),l=c.Map,f=c.proto,v=n(f.forEach),d=n(f.entries),h=d(new l).next;t.exports=function(map,t,e){return e?o({iterator:d(map),next:h},(function(e){return t(e[1],e[0])})):v(map,t)}},521:function(t,e,r){"use strict";var n=r(9),o=Map.prototype;t.exports={Map:Map,set:n(o.set),get:n(o.get),has:n(o.has),remove:n(o.delete),proto:o}},536:function(t,e,r){var content=r(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("951d1426",content,!0,{sourceMap:!1})},537:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),n.locals={},t.exports=n},550:function(t,e,r){"use strict";r(7),r(12),r(13),r(14),r(11),r(3),r(10);var n=r(2),o=(r(536),r(32));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},553:function(t,e,r){"use strict";r(574)},554:function(t,e,r){"use strict";var n=r(5),o=r(506),c=r(521).remove;n({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,e=o(this),r=!0,n=0,l=arguments.length;n<l;n++)t=c(e,arguments[n]),r=r&&t;return!!r}})},555:function(t,e,r){"use strict";var n=r(5),o=r(91),c=r(506),l=r(514);n({target:"Map",proto:!0,real:!0,forced:!0},{every:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0);return!1!==l(map,(function(t,r){if(!e(t,r,map))return!1}),!0)}})},556:function(t,e,r){"use strict";var n=r(5),o=r(91),c=r(506),l=r(521),f=r(514),v=l.Map,d=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=new v;return f(map,(function(t,n){e(t,n,map)&&d(r,n,t)})),r}})},557:function(t,e,r){"use strict";var n=r(5),o=r(91),c=r(506),l=r(514);n({target:"Map",proto:!0,real:!0,forced:!0},{find:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=l(map,(function(t,r){if(e(t,r,map))return{value:t}}),!0);return r&&r.value}})},558:function(t,e,r){"use strict";var n=r(5),o=r(91),c=r(506),l=r(514);n({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=l(map,(function(t,r){if(e(t,r,map))return{key:r}}),!0);return r&&r.key}})},559:function(t,e,r){"use strict";var n=r(5),o=r(577),c=r(506),l=r(514);n({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(t){return!0===l(c(this),(function(e){if(o(e,t))return!0}),!0)}})},560:function(t,e,r){"use strict";var n=r(5),o=r(506),c=r(514);n({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(t){var e=c(o(this),(function(e,r){if(e===t)return{key:r}}),!0);return e&&e.key}})},561:function(t,e,r){"use strict";var n=r(5),o=r(91),c=r(506),l=r(521),f=r(514),v=l.Map,d=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=new v;return f(map,(function(t,n){d(r,e(t,n,map),t)})),r}})},562:function(t,e,r){"use strict";var n=r(5),o=r(91),c=r(506),l=r(521),f=r(514),v=l.Map,d=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=new v;return f(map,(function(t,n){d(r,n,e(t,n,map))})),r}})},563:function(t,e,r){"use strict";var n=r(5),o=r(506),c=r(148),l=r(521).set;n({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(t){for(var map=o(this),e=arguments.length,i=0;i<e;)c(arguments[i++],(function(t,e){l(map,t,e)}),{AS_ENTRIES:!0});return map}})},564:function(t,e,r){"use strict";var n=r(5),o=r(69),c=r(506),l=r(514),f=TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(t){var map=c(this),e=arguments.length<2,r=e?void 0:arguments[1];if(o(t),l(map,(function(n,o){e?(e=!1,r=n):r=t(r,n,o,map)})),e)throw new f("Reduce of empty map with no initial value");return r}})},565:function(t,e,r){"use strict";var n=r(5),o=r(91),c=r(506),l=r(514);n({target:"Map",proto:!0,real:!0,forced:!0},{some:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0);return!0===l(map,(function(t,r){if(e(t,r,map))return!0}),!0)}})},566:function(t,e,r){"use strict";var n=r(5),o=r(69),c=r(506),l=r(521),f=TypeError,v=l.get,d=l.has,h=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{update:function(t,e){var map=c(this),r=arguments.length;o(e);var n=d(map,t);if(!n&&r<3)throw new f("Updating absent value");var l=n?v(map,t):o(r>2?arguments[2]:void 0)(t,map);return h(map,t,e(l,t,map)),map}})},574:function(t,e,r){"use strict";r(316)("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(575))},575:function(t,e,r){"use strict";var n=r(81),o=r(120),c=r(184),l=r(91),f=r(150),v=r(71),d=r(148),h=r(231),y=r(183),x=r(232),O=r(27),m=r(151).fastKey,j=r(72),w=j.set,k=j.getterFor;t.exports={getConstructor:function(t,e,r,h){var y=t((function(t,o){f(t,x),w(t,{type:e,index:n(null),first:null,last:null,size:0}),O||(t.size=0),v(o)||d(o,t[h],{that:t,AS_ENTRIES:r})})),x=y.prototype,j=k(e),M=function(t,e,r){var n,o,c=j(t),l=S(t,e);return l?l.value=r:(c.last=l={index:o=m(e,!0),key:e,value:r,previous:n=c.last,next:null,removed:!1},c.first||(c.first=l),n&&(n.next=l),O?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},S=function(t,e){var r,n=j(t),o=m(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key===e)return r};return c(x,{clear:function(){for(var t=j(this),e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=null),e=e.next;t.first=t.last=null,t.index=n(null),O?t.size=0:this.size=0},delete:function(t){var e=this,r=j(e),n=S(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first===n&&(r.first=o),r.last===n&&(r.last=c),O?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=j(this),n=l(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!S(this,t)}}),c(x,r?{get:function(t){var e=S(this,t);return e&&e.value},set:function(t,e){return M(this,0===t?0:t,e)}}:{add:function(t){return M(this,t=0===t?0:t,t)}}),O&&o(x,"size",{configurable:!0,get:function(){return j(this).size}}),y},setStrong:function(t,e,r){var n=e+" Iterator",o=k(e),c=k(n);h(t,e,(function(t,e){w(this,{type:n,target:t,state:o(t),kind:e,last:null})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?y("keys"===e?r.key:"values"===e?r.value:[r.key,r.value],!1):(t.target=null,y(void 0,!0))}),r?"entries":"values",!r,!0),x(e)}}},576:function(t,e,r){"use strict";var n=r(28);t.exports=function(t,e,r){for(var o,c,l=r?t:t.iterator,f=t.next;!(o=n(f,l)).done;)if(void 0!==(c=e(o.value)))return c}},577:function(t,e,r){"use strict";t.exports=function(t,e){return t===e||t!=t&&e!=e}},595:function(t,e,r){"use strict";r.r(e);var n=r(550),o=r(604),c=r(486),l=(r(31),r(23),{name:"NewsShare",props:{tags:{type:Array,default:[]}}}),f=r(30),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e(n.a),t._v(" "),e(o.a,{staticClass:"ma-0 pa-4",attrs:{align:"center"}},[e(c.a),t._v(" "),e("div",{staticClass:"text-body-2"},t._l(t.tags,(function(r,i){var n=r.name,o=r.slug;return e("NuxtLink",{key:i,staticClass:"text--primary d-inline-block ml-2",attrs:{to:"/blog/tags/".concat(o)},domProps:{textContent:t._s("".concat(n).concat(i+1<t.tags.length?",":""))}})})),1)],1),t._v(" "),e(n.a)],1)}),[],!1,null,null,null);e.default=component.exports},604:function(t,e,r){"use strict";var n=r(2),o=(r(7),r(31),r(12),r(48),r(553),r(13),r(14),r(11),r(3),r(25),r(77),r(42),r(60),r(554),r(555),r(556),r(557),r(558),r(559),r(560),r(561),r(562),r(563),r(564),r(565),r(566),r(10),r(43),r(314),r(1)),c=r(93),l=r(0);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return d.reduce((function(r,n){return r[t+Object(l.v)(n)]=e(),r}),{})}var x=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},O=y("align",(function(){return{type:String,default:null,validator:x}})),m=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},j=y("justify",(function(){return{type:String,default:null,validator:m}})),w=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},k=y("alignContent",(function(){return{type:String,default:null,validator:w}})),M={align:Object.keys(O),justify:Object.keys(j),alignContent:Object.keys(k)},S={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,r){var n=S[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var C=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x}},O),{},{justify:{type:String,default:null,validator:m}},j),{},{alignContent:{type:String,default:null,validator:w}},k),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var f in r)l+=String(r[f]);var v=C.get(l);if(!v){var d;for(d in v=[],M)M[d].forEach((function(t){var e=r[t],n=P(d,t,e);n&&v.push(n)}));v.push(Object(n.a)(Object(n.a)(Object(n.a)({"no-gutters":r.noGutters,"row--dense":r.dense},"align-".concat(r.align),r.align),"justify-".concat(r.justify),r.justify),"align-content-".concat(r.alignContent),r.alignContent)),C.set(l,v)}return t(r.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})}}]);