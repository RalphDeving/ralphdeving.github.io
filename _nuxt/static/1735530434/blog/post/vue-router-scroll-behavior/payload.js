__NUXT_JSONP__("/blog/post/vue-router-scroll-behavior", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS){return {data:[{article:{slug:"vue-router-scroll-behavior",description:"Full native-like scroll behavior for Vue or Nuxt apps",title:"Vue Router Scroll Behavior",imgKeyword:"code:1",tags:[ad,ae],topics:[af,ag],createdAt:ap,updatedAt:ap,toc:[{id:aq,depth:ah,text:ar},{id:as,depth:ah,text:at},{id:au,depth:H,text:av},{id:aw,depth:H,text:ax},{id:ay,depth:H,text:az},{id:aA,depth:H,text:aB}],body:{type:"root",children:[{type:b,tag:aC,props:{id:aq},children:[{type:b,tag:n,props:{href:"#the-problem",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:ar}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Sometimes, when using "},{type:b,tag:n,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002F",rel:[R,S,T],target:I},children:[{type:a,value:"Vue Router"}]},{type:a,value:", we can get lost while navigating inside our app, especially when using the browser history."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"E.g., let's say we are at the home page and we scroll down, then we click on a link to another page of the site. Now we are at the bottom of the new page (or at least at the same scroll position that we were at the last one). We scroll up and then press the back button on the browser; now we are not at the same position we were before getting into the new page."}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Probably not a big deal for some cases, but we can improve this behavior."}]},{type:a,value:g},{type:b,tag:aC,props:{id:as},children:[{type:b,tag:n,props:{href:aD,ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:at}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"The "},{type:b,tag:n,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002Fguide\u002Fadvanced\u002Fscroll-behavior.html",rel:[R,S,T],target:I},children:[{type:a,value:"Vue Router documentation"}]},{type:a,value:" gives us the necessary code fragments to fix this issue:"}]},{type:a,value:g},{type:b,tag:U,props:{id:au},children:[{type:b,tag:n,props:{href:"#always-scroll-to-the-top",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:av}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"We can always start at the top of the page. This way we don't have to do unnecessary scrolling."}]},{type:a,value:g},{type:b,tag:J,props:{className:[K]},children:[{type:b,tag:c,props:{className:[L]},children:[{type:a,value:"top"}]},{type:b,tag:M,props:{className:[N,V]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,D]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s,p]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s,p]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:U,props:{id:aw},children:[{type:b,tag:n,props:{href:"#get-back-to-the-saved-position",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:ax}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"When getting back or forth on the browser history, we'll get to the last position we were."}]},{type:a,value:g},{type:b,tag:J,props:{className:[K]},children:[{type:b,tag:c,props:{className:[L]},children:[{type:a,value:al}]},{type:b,tag:M,props:{className:[N,V]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,D]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:F}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:U,props:{id:ay},children:[{type:b,tag:n,props:{href:am,ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:az}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Now if we have some anchors in the page (i.e., "},{type:b,tag:n,props:{href:am},children:[{type:a,value:am}]},{type:a,value:"), we have to tell the router."}]},{type:a,value:g},{type:b,tag:J,props:{className:[K]},children:[{type:b,tag:c,props:{className:[L]},children:[{type:a,value:"#anchor"}]},{type:b,tag:M,props:{className:[N,V]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,D]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,s,p]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:m}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:U,props:{id:aA},children:[{type:b,tag:n,props:{href:"#full-solution",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aB}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Now, we can just mix all the pevious code into one solution (used "},{type:b,tag:"nuxt-link",props:{target:I,to:"\u002Fblog"},children:[{type:a,value:"Blog"}]},{type:a,value:" on this too):"}]},{type:a,value:g},{type:b,tag:J,props:{className:[K]},children:[{type:b,tag:c,props:{className:[L]},children:[{type:a,value:aE}]},{type:b,tag:M,props:{className:[N,V]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,aF]},children:[{type:a,value:"\u002F\u002F Non-nuxt: scrollBehavior (to, from, savedPosition) { ... }"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,D]},children:[{type:a,value:"export"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,D]},children:[{type:a,value:"default"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,D]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"to "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"&&"}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,s,p]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:m}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,s,p]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s,p]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s,p]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:aH}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aF]},children:[{type:a,value:"\u002F\u002F avoid blocking the view when having fixed components"}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,s,p]},children:[{type:a,value:"behavior"}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"'smooth'"}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:aI}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:F}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:aI}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h,o]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s,p]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s,p]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Let's break it down:"}]},{type:a,value:g},{type:b,tag:"ul",props:{},children:[{type:a,value:g},{type:b,tag:ab,props:{},children:[{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"As we are using Nuxt, according to "},{type:b,tag:n,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-router\u002F#scrollbehavior",rel:[R,S,T],target:I},children:[{type:a,value:"Nuxt docs"}]},{type:a,value:" this code needs to be in a specific file inside a specific directory: "},{type:b,tag:t,props:{},children:[{type:a,value:aE}]}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:ab,props:{},children:[{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"First we check "},{type:b,tag:aJ,props:{},children:[{type:a,value:G}]},{type:a,value:" we are trying to go to an anchor in the page. Then "},{type:b,tag:aJ,props:{},children:[{type:a,value:G}]},{type:a,value:" there is a saved position (just like navigating through browser history), we return it. And last but not least, we just return the top of the page as the default behavior."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:ab,props:{},children:[{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"Now, there are two properties more in the anchor object. "},{type:b,tag:t,props:{},children:[{type:a,value:"behavior: 'smooth'"}]},{type:a,value:": is just the eye candy. "},{type:b,tag:t,props:{},children:[{type:a,value:aG}]},{type:a,value:": as we have an app bar that is fixed at the top of the page, we need to scroll just enought to make the anchored content to be "},{type:b,tag:aK,props:{},children:[{type:a,value:"below"}]},{type:a,value:" the bar, and not "},{type:b,tag:aK,props:{},children:[{type:a,value:"under"}]},{type:a,value:" it, so the content doesn't get blocked in the view. "},{type:b,tag:n,props:{href:aD},children:[{type:a,value:"Try it by clicking here"}]},{type:a,value:"; the title \"The Solution\" will get positioned bellow the app bar."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:ab,props:{},children:[{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"The last point can also be done with "},{type:b,tag:n,props:{href:"https:\u002F\u002Fcss-tricks.com\u002Ffixed-headers-on-page-links-and-overlapping-content-oh-my\u002F",rel:[R,S,T],target:I},children:[{type:a,value:"plain css"}]},{type:a,value:m}]},{type:a,value:g}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:J,props:{className:[K]},children:[{type:b,tag:c,props:{className:[L]},children:[{type:a,value:"css"}]},{type:b,tag:M,props:{className:[N,"language-css"]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,an]},children:[{type:a,value:"html"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"scroll-padding-top"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,"unit"]},children:[{type:a,value:"px"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"scroll-behavior"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:" smooth"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g}]}]}]}]},dir:"\u002Fpost\u002F2021\u002Fnov",path:"\u002Fpost\u002F2021\u002Fnov\u002Fvue-router-scroll-behavior",extension:".md"},recentArticles:[{slug:"quick-registry",description:"Quick and simple",title:"Quick Docker Registry with basic security",createdAt:aL,updatedAt:aL},{slug:"axios-php-sessions",description:"And a little bit of CORS",title:"Using PHP sessions with Axios",createdAt:aM,updatedAt:aM},{slug:"quick-starter-php-project",description:"Using Docker Compose",title:"Quick starter PHP and PostgreSQL Project",createdAt:aN,updatedAt:aN}],tagsList:[{slug:ad,name:aO},{slug:ae,name:aP}],topicsList:[{slug:af,name:aQ},{slug:ag,name:aR}],prev:{slug:"hello-world",title:"Hello, World!"},next:{slug:"syntax-highlighting-theme-nuxt-content",title:"Switch Syntax Highlighting Theme In @nuxt\u002Fcontent"},tags:[{slug:"docker",name:"Docker",icon:"mdi-docker"},{slug:"java",name:"Java",icon:"mdi-language-java"},{slug:"javascript",name:"Javascript",icon:"mdi-language-javascript"},{slug:"keycloak",name:"Keycloak",icon:"mdi-account-key-outline"},{slug:"kubuntu",name:"Kubuntu",icon:"mdi-ubuntu"},{slug:"maven",name:"Maven",icon:"mdi-feather"},{slug:"mysql",name:"MySQL",icon:ac},{slug:ad,name:aO,icon:aS},{slug:"nuxt-content",name:"@nuxt\u002Fcontent",icon:aS},{slug:"php",name:"PHP",icon:"mdi-language-php"},{slug:"postgresql",name:"PostgreSQL",icon:ac},{slug:"sqlite",name:"SQLite",icon:ac},{slug:"tiptap",name:"Tiptap",icon:"mdi-application-edit-outline"},{slug:ae,name:aP,icon:"mdi-vuejs"}],topics:[{slug:"database",name:"Database",icon:ac},{slug:"hardware",name:"Hardware",icon:"mdi-desktop-classic"},{slug:"how-to-blog",name:"How to Blog",icon:"mdi-post-outline"},{slug:"linux",name:"Linux",icon:"mdi-linux"},{slug:ag,name:aR,icon:"mdi-notebook-edit-outline"},{slug:"programming",name:"Programming",icon:"mdi-code-json"},{slug:af,name:aQ,icon:"mdi-monitor-cellphone"}],archives:[{year:2024,month:12,name:"2024 December (1)",to:"\u002Fblog\u002Farchives\u002F2024\u002F12"},{year:Q,month:7,name:"2022 July (1)",to:"\u002Fblog\u002Farchives\u002F2022\u002F7"},{year:Q,month:5,name:"2022 May (1)",to:"\u002Fblog\u002Farchives\u002F2022\u002F5"},{year:Q,month:H,name:"2022 March (1)",to:"\u002Fblog\u002Farchives\u002F2022\u002F3"},{year:Q,month:ah,name:"2022 February (2)",to:"\u002Fblog\u002Farchives\u002F2022\u002F2"},{year:Q,month:1,name:"2022 January (2)",to:"\u002Fblog\u002Farchives\u002F2022\u002F1"},{name:"All...",to:"\u002Fblog\u002Farchives"}]}],fetch:{},mutations:[]}}("text","element","span","token","punctuation"," ","\n","keyword","{","}","p",",",":","a","control-flow","property","\n    ","operator","literal-property","code","(",")","number",";","\n        ","true",-1,"icon","icon-link","module"," savedPosition","return","if",3,"_blank","div","nuxt-content-highlight","filename","pre","line-numbers","to","0",2022,"nofollow","noopener","noreferrer","h3","language-js","function","parameter","from",".","property-access","hash","\n            ","li","mdi-database-outline","nuxt","vue","web-dev","notes-to-self",2,"scrollBehavior","x","y","savedPosition","#scroll-to-anchor","selector"," to","2021-11-16T03:28:09.966Z","the-problem","The problem","the-solution","The Solution","always-scroll-to-the-top","Always scroll to the top","get-back-to-the-saved-position","Get back to the saved position","scroll-to-anchor","Scroll to anchor","full-solution","Full Solution","h2","#the-solution","app\u002Frouter.scrollBehavior.js","comment","offset","80","else","strong","em","2024-12-30T03:30:46.687Z","2022-07-10T01:58:56.232Z","2022-05-08T01:07:38.342Z","Nuxt","Vue","Web Development","Notes++ to self","mdi-nuxt")));