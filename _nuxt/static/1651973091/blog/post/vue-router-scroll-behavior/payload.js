__NUXT_JSONP__("/blog/post/vue-router-scroll-behavior", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ){return {data:[{article:{slug:"vue-router-scroll-behavior",description:"Full native-like scroll behavior for Vue or Nuxt apps",title:"Vue Router Scroll Behavior",imgKeyword:"code:1",tags:[aa,ab],topics:[ac,ad],createdAt:al,updatedAt:al,toc:[{id:am,depth:ae,text:an},{id:ao,depth:ae,text:ap},{id:aq,depth:F,text:ar},{id:as,depth:F,text:at},{id:au,depth:F,text:av},{id:aw,depth:F,text:ax}],body:{type:"root",children:[{type:b,tag:ay,props:{id:am},children:[{type:b,tag:n,props:{href:"#the-problem",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:an}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Sometimes, when using "},{type:b,tag:n,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002F",rel:[O,P,Q],target:G},children:[{type:a,value:"Vue Router"}]},{type:a,value:", we can get lost while navigating inside our app, especially when using the browser history."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"E.g., let's say we are at the home page and we scroll down, then we click on a link to another page of the site. Now we are at the bottom of the new page (or at least at the same scroll position that we were at the last one). We scroll up and then press the back button on the browser; now we are not at the same position we were before getting into the new page."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Probably not a big deal for some cases, but we can improve this behavior."}]},{type:a,value:f},{type:b,tag:ay,props:{id:ao},children:[{type:b,tag:n,props:{href:az,ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:ap}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"The "},{type:b,tag:n,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002Fguide\u002Fadvanced\u002Fscroll-behavior.html",rel:[O,P,Q],target:G},children:[{type:a,value:"Vue Router documentation"}]},{type:a,value:" gives us the necessary code fragments to fix this issue:"}]},{type:a,value:f},{type:b,tag:R,props:{id:aq},children:[{type:b,tag:n,props:{href:"#always-scroll-to-the-top",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:ar}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"We can always start at the top of the page. This way we don't have to do unnecessary scrolling."}]},{type:a,value:f},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:c,props:{className:[J]},children:[{type:a,value:"top"}]},{type:b,tag:K,props:{className:[L,S]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:af}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,B]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:R,props:{id:as},children:[{type:b,tag:n,props:{href:"#get-back-to-the-saved-position",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:at}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"When getting back or forth on the browser history, we'll get to the last position we were."}]},{type:a,value:f},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:c,props:{className:[J]},children:[{type:a,value:ai}]},{type:b,tag:K,props:{className:[L,S]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:af}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,B]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:D}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:R,props:{id:au},children:[{type:b,tag:n,props:{href:aj,ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:av}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Now if we have some anchors in the page (i.e., "},{type:b,tag:n,props:{href:aj},children:[{type:a,value:aj}]},{type:a,value:"), we have to tell the router."}]},{type:a,value:f},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:c,props:{className:[J]},children:[{type:a,value:"#anchor"}]},{type:b,tag:K,props:{className:[L,S]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:af}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,B]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:R,props:{id:aw},children:[{type:b,tag:n,props:{href:"#full-solution",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:ax}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Now, we can just mix all the pevious code into one solution (used "},{type:b,tag:"nuxt-link",props:{target:G,to:"\u002Fblog"},children:[{type:a,value:"Blog"}]},{type:a,value:" on this too):"}]},{type:a,value:f},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:c,props:{className:[J]},children:[{type:a,value:aB}]},{type:b,tag:K,props:{className:[L,S]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,aC]},children:[{type:a,value:"\u002F\u002F Non-nuxt: scrollBehavior (to, from, savedPosition) { ... }"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,B]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,B]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,B]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"to "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"&&"}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n            offset"},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aD}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aC]},children:[{type:a,value:"\u002F\u002F avoid blocking the view when having fixed components"}]},{type:a,value:"\n            behavior"},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"'smooth'"}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:aE}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:D}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:aE}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Let's break it down:"}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:Z,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"As we are using Nuxt, according to "},{type:b,tag:n,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-router\u002F#scrollbehavior",rel:[O,P,Q],target:G},children:[{type:a,value:"Nuxt docs"}]},{type:a,value:" this code needs to be in a specific file inside a specific directory: "},{type:b,tag:r,props:{},children:[{type:a,value:aB}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:Z,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"First we check "},{type:b,tag:aF,props:{},children:[{type:a,value:E}]},{type:a,value:" we are trying to go to an anchor in the page. Then "},{type:b,tag:aF,props:{},children:[{type:a,value:E}]},{type:a,value:" there is a saved position (just like navigating through browser history), we return it. And last but not least, we just return the top of the page as the default behavior."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:Z,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Now, there are two properties more in the anchor object. "},{type:b,tag:r,props:{},children:[{type:a,value:"behavior: 'smooth'"}]},{type:a,value:": is just the eye candy. "},{type:b,tag:r,props:{},children:[{type:a,value:"offset"}]},{type:a,value:": as we have an app bar that is fixed at the top of the page, we need to scroll just enought to make the anchored content to be "},{type:b,tag:aG,props:{},children:[{type:a,value:"below"}]},{type:a,value:" the bar, and not "},{type:b,tag:aG,props:{},children:[{type:a,value:"under"}]},{type:a,value:" it, so the content doesn't get blocked in the view. "},{type:b,tag:n,props:{href:az},children:[{type:a,value:"Try it by clicking here"}]},{type:a,value:"; the title \"The Solution\" will get positioned bellow the app bar."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:Z,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"The last point can also be done with "},{type:b,tag:n,props:{href:"https:\u002F\u002Fcss-tricks.com\u002Ffixed-headers-on-page-links-and-overlapping-content-oh-my\u002F",rel:[O,P,Q],target:G},children:[{type:a,value:"plain css"}]},{type:a,value:m}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:c,props:{className:[J]},children:[{type:a,value:"css"}]},{type:b,tag:K,props:{className:[L,"language-css"]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,"selector"]},children:[{type:a,value:"html"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,aH]},children:[{type:a,value:"scroll-padding-top"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,"unit"]},children:[{type:a,value:"px"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,aH]},children:[{type:a,value:"scroll-behavior"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:" smooth"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]}]},dir:"\u002Fpost\u002F2021\u002Fnov",path:"\u002Fpost\u002F2021\u002Fnov\u002Fvue-router-scroll-behavior",extension:".md"},recentArticles:[{slug:"quick-starter-php-project",description:"Using Docker Compose",title:"Quick starter PHP and PostgreSQL Project",createdAt:aI,updatedAt:aI},{slug:"uuid-mysql-jpa",description:"And a Hibernate \u002F JPA example",title:"Using UUID as ID in MySQL",createdAt:aJ,updatedAt:aJ},{slug:"vue-v-model-custom-component",description:"Avoid the Vue warn message",title:"Using v-model with custom components",createdAt:aK,updatedAt:aK}],tagsList:[{slug:aa,name:aL},{slug:ab,name:aM}],topicsList:[{slug:ac,name:aN},{slug:ad,name:aO}],prev:{slug:"hello-world",title:"Hello, World!"},next:{slug:"syntax-highlighting-theme-nuxt-content",title:"Switch Syntax Highlighting Theme In @nuxt\u002Fcontent"},tags:[{slug:"docker",name:"Docker",icon:"mdi-docker"},{slug:"java",name:"Java",icon:"mdi-language-java"},{slug:"keycloak",name:"Keycloak",icon:"mdi-account-key-outline"},{slug:"kubuntu",name:"Kubuntu",icon:"mdi-ubuntu"},{slug:"maven",name:"Maven",icon:"mdi-feather"},{slug:"mysql",name:"MySQL",icon:_},{slug:aa,name:aL,icon:aP},{slug:"nuxt-content",name:"@nuxt\u002Fcontent",icon:aP},{slug:"php",name:"PHP",icon:"mdi-language-php"},{slug:"postgresql",name:"PostgreSQL",icon:_},{slug:"sqlite",name:"SQLite",icon:_},{slug:"tiptap",name:"Tiptap",icon:"mdi-application-edit-outline"},{slug:ab,name:aM,icon:"mdi-vuejs"}],topics:[{slug:"database",name:"Database",icon:_},{slug:"hardware",name:"Hardware",icon:"mdi-desktop-classic"},{slug:"how-to-blog",name:"How to Blog",icon:"mdi-post-outline"},{slug:"linux",name:"Linux",icon:"mdi-linux"},{slug:ad,name:aO,icon:"mdi-notebook-edit-outline"},{slug:"programming",name:"Programming",icon:"mdi-code-json"},{slug:ac,name:aN,icon:"mdi-monitor-cellphone"}],archives:[{year:$,month:5,name:"2022 May (1)",to:"\u002Fblog\u002Farchives\u002F2022\u002F5"},{year:$,month:F,name:"2022 March (1)",to:"\u002Fblog\u002Farchives\u002F2022\u002F3"},{year:$,month:ae,name:"2022 February (2)",to:"\u002Fblog\u002Farchives\u002F2022\u002F2"},{year:$,month:1,name:"2022 January (2)",to:"\u002Fblog\u002Farchives\u002F2022\u002F1"},{year:aQ,month:12,name:"2021 December (5)",to:"\u002Fblog\u002Farchives\u002F2021\u002F12"},{year:aQ,month:11,name:"2021 November (4)",to:"\u002Fblog\u002Farchives\u002F2021\u002F11"},{name:"All...",to:"\u002Fblog\u002Farchives"}]}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n"," ","keyword","{","}","p",",",":","a","control-flow","\n    ","operator","code","(",")","number",";","\n        ","true",-1,"icon","icon-link","module"," savedPosition","return","if",3,"_blank","div","nuxt-content-highlight","filename","pre","line-numbers","to","0","nofollow","noopener","noreferrer","h3","language-js","function","parameter","from",".","property-access","hash","li","mdi-database-outline",2022,"nuxt","vue","web-dev","notes-to-self",2,"scrollBehavior"," x"," y","savedPosition","#scroll-to-anchor"," to","2021-11-16T03:28:09.966Z","the-problem","The problem","the-solution","The Solution","always-scroll-to-the-top","Always scroll to the top","get-back-to-the-saved-position","Get back to the saved position","scroll-to-anchor","Scroll to anchor","full-solution","Full Solution","h2","#the-solution","\n            selector","app\u002Frouter.scrollBehavior.js","comment","80","else","strong","em","property","2022-05-08T01:07:38.342Z","2022-03-10T07:06:56.227Z","2022-02-27T18:00:47.097Z","Nuxt","Vue","Web Development","Notes++ to self","mdi-nuxt",2021)));