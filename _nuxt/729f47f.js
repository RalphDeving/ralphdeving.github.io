(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{472:function(t,e,n){"use strict";n(35),n(63),n(21);e.a={provide:function(){return{topTags:this.topTags,topTopics:this.topTopics}},computed:{topTags:function(){var t=(this.tags.length>5?this.$fyShuffle(this.tags).slice(0,5):this.tags).map((function(t){return{name:t.name,to:"/blog/tags/".concat(t.slug)}}));return t.push({name:"All...",to:"/blog/tags"}),t},topTopics:function(){var t=(this.topics.length>5?this.$fyShuffle(this.topics).slice(0,5):this.topics).map((function(t){return{name:t.name,to:"/blog/topics/".concat(t.slug)}}));return t.push({name:"All...",to:"/blog/topics"}),t}}}},494:function(t,e,n){"use strict";e.a={provide:function(){return{topArchives:this.archives}}}},575:function(t,e,n){"use strict";n.r(e);var r=n(17),c=n(23),o=n(50),l=(n(86),n(6),n(63),n(21),n(4),n(44),n(25),n(68),n(130)),h=n(472),f=n(494),d={head:function(){var t=void 0,e=[];this.topicsList&&(this.topicsList.map((function(t){return t.name})).forEach((function(t){return e.push(t)})),this.topicsList.length>0&&(t=this.topicsList[0].name)),this.tagsList&&this.tagsList.map((function(t){return t.name})).forEach((function(t){return e.push(t)}));var n={url:this.$route.fullPath,title:this.article.title,description:this.article.description,author:"https://twitter.com/RalphDeving",type:"article",tags:e,section:t,createdAt:this.article.createdAt,updatedAt:this.article.updatedAt,image:Object(l.c)(this.article.imgKeyword)};return{title:n.title,meta:[].concat(Object(o.a)(Object(l.d)(n)),Object(o.a)(Object(l.a)(n))),link:Object(o.a)(Object(l.b)(n))}},mixins:[h.a,f.a],asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o,l,h,f,article,d,m,v,x,A,y,w,j,L,O,$;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$content,c=t.params,o=t.error,l=t.$tagsAndTopics,h=t.redirect,f=t.$archives,!(null==c.slug||"string"==typeof c.slug&&c.slug.trim().length<=0)){e.next=3;break}return e.abrupt("return",h("/blog"));case 3:return e.next=5,n("post",{deep:!0}).where({slug:{$eq:c.slug}}).limit(1).fetch().then((function(t){return Array.isArray(t)?t[0]:(console.dir({manualError:!0,found:t}),o({statusCode:404}))})).catch((function(t){return o(t)}));case 5:return article=e.sent,e.next=8,n("post",{deep:!0}).only(["title","description","slug","createdAt","updatedAt"]).sortBy("createdAt","desc").limit(3).fetch();case 8:if(d=e.sent,!article.tags){e.next=15;break}return e.next=12,n("tags").only(["name","slug"]).where({slug:{$in:article.tags}}).fetch();case 12:e.t0=e.sent,e.next=16;break;case 15:e.t0=[];case 16:if(m=e.t0,!article.topics){e.next=23;break}return e.next=20,n("topics").only(["name","slug"]).where({slug:{$in:article.topics}}).fetch();case 20:e.t1=e.sent,e.next=24;break;case 23:e.t1=[];case 24:return v=e.t1,e.next=27,n("post",{deep:!0}).only(["title","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 27:return x=e.sent,A=Object(r.a)(x,2),y=A[0],w=A[1],e.next=33,l();case 33:return j=e.sent,L=j.tags,O=j.topics,e.next=38,f();case 38:return $=e.sent,e.abrupt("return",{article:article,recentArticles:d,tagsList:m,topicsList:v,prev:y,next:w,tags:L,topics:O,archives:$});case 40:case"end":return e.stop()}}),e)})))()}},m=n(30),v=n(31),x=n.n(v),A=n(55),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"fill-height"},[n("SectionArticle",{attrs:{article:t.article,"recent-articles":t.recentArticles,"tags-list":t.tagsList,"topics-list":t.topicsList,prev:t.prev,next:t.next}})],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{SectionArticle:n(563).default}),x()(component,{VSheet:A.a})}}]);