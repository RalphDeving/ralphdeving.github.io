(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{542:function(e,t,r){"use strict";r.r(t);var n=r(17),c=r(27),l=(r(93),{asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,c,article,l,o,d,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,c=e.params,t.next=3,r("articles",c.slug).fetch();case 3:return article=t.sent,t.next=6,r("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 6:return l=t.sent,o=Object(n.a)(l,2),d=o[0],f=o[1],t.next=12,r("articles").only(["title","description","slug","createdAt","updatedAt"]).sortBy("createdAt","desc").limit(3).fetch();case 12:return h=t.sent,t.abrupt("return",{article:article,prev:d,next:f,recentArticles:h});case 14:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.article.title}}}),o=r(24),d=r(35),f=r.n(d),h=r(52),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",{staticClass:"fill-height"},[r("SectionArticle",{attrs:{article:e.article,"recent-articles":e.recentArticles,prev:e.prev,next:e.next}})],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{SectionArticle:r(530).default}),f()(component,{VSheet:h.a})}}]);