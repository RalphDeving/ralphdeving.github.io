__NUXT_JSONP__("/blog/post/syntax-highlighting-theme-nuxt-content", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB){return {data:[{article:{slug:"syntax-highlighting-theme-nuxt-content",description:"A simple way to switch PrismJS syntax highlighting theme when using @nuxt\u002Fcontent",title:"Switch Syntax Highlighting Theme In @nuxt\u002Fcontent",imgKeyword:"code:2",tags:[E,F],topics:[G,H],createdAt:N,updatedAt:N,toc:[{id:O,depth:I,text:P},{id:Q,depth:I,text:R}],body:{type:"root",children:[{type:b,tag:S,props:{id:O},children:[{type:b,tag:q,props:{href:"#the-default-configuration",ariaHidden:T,tabIndex:U},children:[{type:b,tag:c,props:{className:[V,W]},children:[]}]},{type:a,value:P}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"When using "},{type:b,tag:q,props:{href:"https:\u002F\u002Fcontent.nuxtjs.org\u002Fwriting#syntax-highlighting",rel:[u,v,w],target:x},children:[{type:a,value:"@nuxt\u002Fcontent syntax highlighting"}]},{type:a,value:" we can use the "},{type:b,tag:q,props:{href:"https:\u002F\u002Fcontent.nuxtjs.org\u002Fconfiguration#markdownprismtheme",rel:[u,v,w],target:x},children:[{type:a,value:"Nuxt configuration file"}]},{type:a,value:" to set the theme for our highlighted code:"}]},{type:a,value:g},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:c,props:{className:[A]},children:[{type:a,value:X}]},{type:b,tag:B,props:{className:[C,J]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,l,r]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,r]},children:[{type:a,value:L}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:Z}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'prism-themes\u002Fthemes\u002Fprism-vsc-dark-plus.css'"}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"The downside of this approach is that is not possible to change the theme on the fly and we are limited to only one theme."}]},{type:a,value:g},{type:b,tag:S,props:{id:Q},children:[{type:b,tag:q,props:{href:"#switching-themes",ariaHidden:T,tabIndex:U},children:[{type:b,tag:c,props:{className:[V,W]},children:[]}]},{type:a,value:R}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"Now, what if we want to change the theme according to some configuration, e.g. dark\u002Flight theme switching?"}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"A way to do it is setting the "},{type:b,tag:m,props:{},children:[{type:a,value:"\u003Clink rel=\"stylesheet\" href=\"theme.css\" \u002F\u003E"}]},{type:a,value:" tag manually. So, first,  we have to "},{type:b,tag:q,props:{href:"https:\u002F\u002Fgithub.com\u002FPrismJS\u002Fprism-themes\u002Ftree\u002Fmaster\u002Fthemes",rel:[u,v,w],target:x},children:[{type:a,value:"download the css file"}]},{type:a,value:" of the theme. Or install the "},{type:b,tag:q,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fprism-themes",rel:[u,v,w],target:x},children:[{type:a,value:"prism-themes npm package"}]},{type:a,value:" and get the css from the "},{type:b,tag:m,props:{},children:[{type:a,value:"node_modules\u002Fprism-themes\u002Fthemes"}]},{type:a,value:" directory. Now, we have to put the css inside the "},{type:b,tag:m,props:{},children:[{type:a,value:"static"}]},{type:a,value:" directory."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"Next, the Nuxt configuration file should look like this to avoid the default theme:"}]},{type:a,value:g},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:c,props:{className:[A]},children:[{type:a,value:X}]},{type:b,tag:B,props:{className:[C,J]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,l,r]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,r]},children:[{type:a,value:L}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:Z}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:ad}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"Having done that, a way to set the link tag is using the "},{type:b,tag:m,props:{},children:[{type:a,value:"head()"}]},{type:a,value:" method of a Vue component that is going to manage the theme, just like this:"}]},{type:a,value:g},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:c,props:{className:[A]},children:[{type:a,value:"template : Theme.vue"}]},{type:b,tag:B,props:{className:[C,"language-html"]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003C"}]},{type:a,value:ae}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:"@click"}]},{type:b,tag:c,props:{className:[d,"attr-value"]},children:[{type:b,tag:c,props:{className:[d,e,"attr-equals"]},children:[{type:a,value:"="}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:"isDarkTheme = !isDarkTheme"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]}]},{type:a,value:"Switch Theme"},{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003C\u002F"}]},{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:y,props:{className:[z]},children:[{type:b,tag:c,props:{className:[A]},children:[{type:a,value:"script : Theme.vue"}]},{type:b,tag:B,props:{className:[C,J]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,l,r]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,r]},children:[{type:a,value:L}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:"data"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l,ak]},children:[{type:a,value:al}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n            isDarkTheme"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:ad}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]},{type:a,value:"\n\n    "},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:"head"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l,ak]},children:[{type:a,value:al}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n            link"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n                    rel"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'stylesheet'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]},{type:a,value:"\n                    href"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"template-string"]},children:[{type:b,tag:c,props:{className:[d,ao,p]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F"}]},{type:b,tag:c,props:{className:[d,"interpolation"]},children:[{type:b,tag:c,props:{className:[d,aq,e]},children:[{type:a,value:"${"}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"this"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"."}]},{type:b,tag:c,props:{className:[d,"property-access"]},children:[{type:a,value:"isDarkTheme"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"?"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'dark-theme.css'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'ligth-theme.css'"}]},{type:b,tag:c,props:{className:[d,aq,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,ao,p]},children:[{type:a,value:ap}]}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"This way the theme can be changed on the fly, and we are not limited to only one theme."}]}]},dir:"\u002Fpost\u002F2021\u002Fnov",path:"\u002Fpost\u002F2021\u002Fnov\u002Fsyntax-highlighting-theme-nuxt-content",extension:".md"},recentArticles:[{slug:"tiptap-image-resize-vue",description:"Quick and simple way",title:"Resize images on Tiptap Editor with Vue",createdAt:ar,updatedAt:ar},{slug:"keycloak-user-attributes-tokens",description:"Handle user attributes using the REST API and Java",title:"Add user attributes to tokens on Keycloak",createdAt:as,updatedAt:as},{slug:"keycloak-mysql-docker-compose",description:"Quick and simple docker-compose file",title:"Using MySQL as Database for Keycloak with Docker",createdAt:at,updatedAt:at}],tagsList:[{slug:E,name:au},{slug:F,name:av}],topicsList:[{slug:G,name:aw},{slug:H,name:ax}],prev:{slug:"vue-router-scroll-behavior",title:"Vue Router Scroll Behavior"},next:{slug:"quick-nuxt-content-reference",title:"Quick @nuxt\u002Fcontent reference"},tags:[{slug:"docker",name:"Docker",icon:"mdi-docker"},{slug:"java",name:"Java",icon:"mdi-language-java"},{slug:"keycloak",name:"Keycloak",icon:"mdi-account-key-outline"},{slug:"kubuntu",name:"Kubuntu",icon:"mdi-ubuntu"},{slug:"maven",name:"Maven",icon:"mdi-feather"},{slug:"mysql",name:"MySQL",icon:ay},{slug:F,name:av,icon:az},{slug:E,name:au,icon:az},{slug:"sqlite",name:"SQLite",icon:ay},{slug:"tiptap",name:"Tiptap",icon:"mdi-application-edit-outline"},{slug:"vue",name:"Vue",icon:"mdi-vuejs"}],topics:[{slug:"hardware",name:"Hardware",icon:"mdi-desktop-classic"},{slug:H,name:ax,icon:"mdi-post-outline"},{slug:"linux",name:"Linux",icon:"mdi-linux"},{slug:"notes-to-self",name:"Notes++ to self",icon:"mdi-notebook-edit-outline"},{slug:"programming",name:"Programming",icon:"mdi-code-json"},{slug:G,name:aw,icon:"mdi-monitor-cellphone"}],archives:[{year:aA,month:I,name:"2022 February (1)",to:"\u002Fblog\u002Farchives\u002F2022\u002F2"},{year:aA,month:1,name:"2022 January (2)",to:"\u002Fblog\u002Farchives\u002F2022\u002F1"},{year:aB,month:12,name:"2021 December (5)",to:"\u002Fblog\u002Farchives\u002F2021\u002F12"},{year:aB,month:11,name:"2021 November (4)",to:"\u002Fblog\u002Farchives\u002F2021\u002F11"},{name:"All...",to:"\u002Fblog\u002Farchives"}]}],fetch:{},mutations:[]}}("text","element","span","token","punctuation"," ","\n","}","{","operator",":","keyword","code","p","\n    ","string","a","module","\n        ",";","nofollow","noopener","noreferrer","_blank","div","nuxt-content-highlight","filename","pre","line-numbers","tag","nuxt-content","nuxt","web-dev","how-to-blog",2,"language-js","export","default","\n            ","2021-11-21T05:17:44.043Z","the-default-configuration","The default configuration","switching-themes","Switching themes","h2","true",-1,"icon","icon-link","nuxt.config.js","comment","\u002F\u002F ...","\n    content","\n        markdown","\n            prism","\n                theme","boolean","false","button","\"","\u003E","function","(",")","control-flow","return",",","\n                ","template-punctuation","`","interpolation-punctuation","2022-02-07T07:16:40.174Z","2022-01-30T22:38:20.986Z","2022-01-17T09:39:04.404Z","@nuxt\u002Fcontent","Nuxt","Web Development","How to Blog","mdi-database-outline","mdi-nuxt",2022,2021)));