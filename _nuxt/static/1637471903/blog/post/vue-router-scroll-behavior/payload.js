__NUXT_JSONP__("/blog/post/vue-router-scroll-behavior", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE){return {data:[{article:{slug:aj,description:ak,title:al,imgKeyword:"code:1",tags:[Z,_],topics:[$,aa],toc:[],body:{type:"root",children:[{type:b,tag:am,props:{id:"the-problem"},children:[{type:b,tag:n,props:{href:"#the-problem",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:"The problem"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Sometimes, when using "},{type:b,tag:n,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002F",rel:[N,O,P],target:F},children:[{type:a,value:"Vue Router"}]},{type:a,value:", we can get lost while navigating inside our app, especially when using the browser history."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"E.g., let's say we are at the home page and we scroll down, then we click on a link to another page of the site. Now we are at the bottom of the new page (or at least at the same scroll position that we were at the last one). We scroll up and then press the back button on the browser; now we are not at the same position we were before getting into the new page."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Probably not a big deal for some cases, but we can improve this behavior."}]},{type:a,value:f},{type:b,tag:am,props:{id:"the-solution"},children:[{type:b,tag:n,props:{href:an,ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:"The Solution"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"The "},{type:b,tag:n,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002Fguide\u002Fadvanced\u002Fscroll-behavior.html",rel:[N,O,P],target:F},children:[{type:a,value:"Vue Router documentation"}]},{type:a,value:" gives us the necessary code fragments to fix this issue:"}]},{type:a,value:f},{type:b,tag:ab,props:{id:"always-scroll-to-the-top"},children:[{type:b,tag:n,props:{href:"#always-scroll-to-the-top",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:"Always scroll to the top"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"We can always start at the top of the page. This way we don't have to do unnecessary scrolling."}]},{type:a,value:f},{type:b,tag:G,props:{className:[H]},children:[{type:b,tag:c,props:{className:[I]},children:[{type:a,value:"top"}]},{type:b,tag:J,props:{className:[K,Q]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:ac}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,B]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:ab,props:{id:"get-back-to-the-saved-position"},children:[{type:b,tag:n,props:{href:"#get-back-to-the-saved-position",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:"Get back to the saved position"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"When getting back or forth on the browser history, we'll get to the last position we were."}]},{type:a,value:f},{type:b,tag:G,props:{className:[H]},children:[{type:b,tag:c,props:{className:[I]},children:[{type:a,value:af}]},{type:b,tag:J,props:{className:[K,Q]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:ac}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,B]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:D}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:ab,props:{id:"scroll-to-anchor"},children:[{type:b,tag:n,props:{href:ag,ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:"Scroll to anchor"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Now if we have some anchors in the page (i.e., "},{type:b,tag:n,props:{href:ag},children:[{type:a,value:ag}]},{type:a,value:"), we have to tell the router."}]},{type:a,value:f},{type:b,tag:G,props:{className:[H]},children:[{type:b,tag:c,props:{className:[I]},children:[{type:a,value:"#anchor"}]},{type:b,tag:J,props:{className:[K,Q]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:ac}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,B]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:W}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"h5",props:{id:"full-solution"},children:[{type:b,tag:n,props:{href:"#full-solution",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:"Full Solution"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Now, we can just mix all the pevious code into one solution (used "},{type:b,tag:"nuxt-link",props:{target:F,to:"\u002Fblog"},children:[{type:a,value:"Blog"}]},{type:a,value:" on this too):"}]},{type:a,value:f},{type:b,tag:G,props:{className:[H]},children:[{type:b,tag:c,props:{className:[I]},children:[{type:a,value:ap}]},{type:b,tag:J,props:{className:[K,Q]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,aq]},children:[{type:a,value:"\u002F\u002F Non-nuxt: scrollBehavior (to, from, savedPosition) { ... }"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,B]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,B]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,B]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"to "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"&&"}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n            offset"},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:ar}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aq]},children:[{type:a,value:"\u002F\u002F avoid blocking the view when having fixed components"}]},{type:a,value:"\n            behavior"},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"'smooth'"}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:as}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:D}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:as}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Let's break it down:"}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:X,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"As we are using Nuxt, according to "},{type:b,tag:n,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-router\u002F#scrollbehavior",rel:[N,O,P],target:F},children:[{type:a,value:"Nuxt docs"}]},{type:a,value:" this code needs to be in a specific file inside a specific directory: "},{type:b,tag:r,props:{className:[ai]},children:[{type:a,value:ap}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:X,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"First we check "},{type:b,tag:Y,props:{},children:[{type:a,value:E}]},{type:a,value:" we are trying to go to an anchor in the page. Then "},{type:b,tag:Y,props:{},children:[{type:a,value:E}]},{type:a,value:" there is a saved position (just like navigating through browser history), we return it. And last but not least, we just return the top of the page as the default behavior."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:X,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Now, there are two properties more in the anchor object. "},{type:b,tag:r,props:{className:[ai]},children:[{type:a,value:"behavior: 'smooth'"}]},{type:a,value:": is just the eye candy. "},{type:b,tag:r,props:{className:[ai]},children:[{type:a,value:"offset"}]},{type:a,value:": as we have an app bar that is fixed at the top of the page, we need to scroll just enought to make the anchored content to be "},{type:b,tag:Y,props:{},children:[{type:a,value:"below"}]},{type:a,value:" the bar, and not "},{type:b,tag:Y,props:{},children:[{type:a,value:"under"}]},{type:a,value:" it, so the content doesn't get blocked in the view. "},{type:b,tag:n,props:{href:an},children:[{type:a,value:"Try it by clicking here"}]},{type:a,value:"; the title \"The Solution\" will get positioned bellow the app bar."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:X,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"The last point can also be done with "},{type:b,tag:n,props:{href:"https:\u002F\u002Fcss-tricks.com\u002Ffixed-headers-on-page-links-and-overlapping-content-oh-my\u002F",rel:[N,O,P],target:F},children:[{type:a,value:"plain css"}]},{type:a,value:m}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:G,props:{className:[H]},children:[{type:b,tag:c,props:{className:[I]},children:[{type:a,value:"css"}]},{type:b,tag:J,props:{className:[K,"language-css"]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,"selector"]},children:[{type:a,value:"html"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"scroll-padding-top"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,"unit"]},children:[{type:a,value:"px"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"scroll-behavior"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:" smooth"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]}]},dir:"\u002Fpost\u002F2021\u002Fnov",path:"\u002Fpost\u002F2021\u002Fnov\u002Fvue-router-scroll-behavior",extension:".md",createdAt:au,updatedAt:av},recentArticles:[{slug:aw,description:"A simple way to switch PrismJS syntax highlighting theme when using @nuxt\u002Fcontent",title:ax,createdAt:"2021-11-21T00:05:53.287Z",updatedAt:"2021-11-21T05:17:44.043Z"},{slug:aj,description:ak,title:al,createdAt:au,updatedAt:av},{slug:ay,description:"So it begins...",title:az,createdAt:"2021-10-10T02:47:01.315Z",updatedAt:"2021-11-03T05:57:16.643Z"}],tagsList:[{slug:Z,name:aA},{slug:_,name:aB}],topicsList:[{slug:$,name:aC},{slug:aa,name:aD}],prev:{slug:ay,title:az},next:{slug:aw,title:ax},tags:[{slug:"java",name:"Java",icon:"mdi-language-java"},{slug:Z,name:aA,icon:aE},{slug:"nuxt-content",name:"@nuxt\u002Fcontent",icon:aE},{slug:_,name:aB,icon:"mdi-vuejs"}],topics:[{slug:"how-to-blog",name:"How to Blog",icon:"mdi-post-outline"},{slug:aa,name:aD,icon:"mdi-notebook-edit-outline"},{slug:$,name:aC,icon:"mdi-monitor-cellphone"}],archives:[{year:2021,month:11,name:"2021 November (3)",to:"\u002Fblog\u002Farchives\u002F2021\u002F11"},{name:"All...",to:"\u002Fblog\u002Farchives"}]}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n"," ","keyword","{","}","p",",",":","a","control-flow","\n    ","operator","code","(",")","number",";","\n        ","true",-1,"icon","icon-link","module"," savedPosition","return","if","_blank","div","nuxt-content-highlight","filename","pre","line-numbers","to","0","nofollow","noopener","noreferrer","language-js","function","parameter","from",".","property-access","hash","li","em","nuxt","vue","web-dev","notes-to-self","h6","scrollBehavior"," x"," y","savedPosition","#scroll-to-anchor"," to","language-inline","vue-router-scroll-behavior","Full native-like scroll behavior for Vue or Nuxt apps","Vue Router Scroll Behavior","h4","#the-solution","\n            selector","app\u002Frouter.scrollBehavior.js","comment","80","else","property","2021-11-16T00:12:30.113Z","2021-11-16T03:28:09.966Z","syntax-highlighting-theme-nuxt-content","Switch Syntax Highlighting Theme In @nuxt\u002Fcontent","hello-world","Hello, World!","Nuxt","Vue","Web Development","Notes++ to self","mdi-nuxt")));