(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{510:function(t,e,n){"use strict";n.r(e);n(64);var o={props:{issue:{type:String,required:!0}},watch:{"$vuetify.theme.isDark":function(t,e){var n=this;setTimeout((function(){n.reset()}),200)}},mounted:function(){this.createDisqus()},methods:{createDisqus:function(){if(window.DISQUS)this.reset();else{var t=document,s=t.createElement("script");s.setAttribute("src","https://ralphdeving-github-io.disqus.com/embed.js"),s.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(s),window.disqus_config=this.getDisqusConfig()}},reset:function(){window.DISQUS&&window.DISQUS.reset({reload:!0,config:this.getDisqusConfig()})},getDisqusConfig:function(){var t=this.issue;return function(){this.page.url="https://ralphdeving.github.io/blog/post/".concat(t),this.page.identifier=t}}}},r=n(30),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"disqus_thread"}})}),[],!1,null,null,null);e.default=component.exports}}]);