(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{491:function(t,e,n){"use strict";e.a={computed:{createdAt:function(){if(this.article&&this.article.createdAt)return this.$moment.utc(this.article.createdAt,"YYYY-MM-DDTHH:mm:ssZ").format("DD . MMM . YYYY")},updatedAt:function(){if(this.article&&this.article.updatedAt)return this.$moment.utc(this.article.updatedAt,"YYYY-MM-DDTHH:mm:ssZ").format("DD . MMM . YYYY")},isUpdated:function(){return"string"==typeof this.createdAt&&"string"==typeof this.updatedAt&&this.createdAt!==this.updatedAt}}}},503:function(t,e,n){"use strict";n.r(e);var r={name:"NewsRecentArticlesItem",mixins:[n(491).a],props:{article:{type:Object,required:!0}}},c=n(30),l=n(31),o=n.n(l),d=n(121),m=n(85),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",{staticClass:"px-0",attrs:{to:"/blog/post/"+t.article.slug,"three-line":""}},[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-uppercase subtitle-2 font-weight-bold text--primary mb-n2",domProps:{textContent:t._s(t.article.title)}}),t._v(" "),t.createdAt?n("v-list-item-subtitle",{staticClass:"font-weight-bold mb-n2",domProps:{textContent:t._s(t.createdAt)}}):t._e(),t._v(" "),t.isUpdated?n("v-list-item-subtitle",{staticClass:"font-weight-bold mb-n2"},[n("span",{staticClass:"text-caption pr-1"},[t._v("updated")]),t._v("\n\t\t\t"+t._s(t.updatedAt)+"\n\t\t")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VListItem:d.a,VListItemContent:m.a,VListItemSubtitle:m.b})}}]);