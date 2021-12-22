__NUXT_JSONP__("/blog/post/cpu-gpu-monitoring-kubuntu", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae){return {data:[{article:{slug:F,description:G,title:H,imgKeyword:"hardware:0",tags:[w],topics:[x,y,z],createdAt:v,updatedAt:v,toc:[{id:I,depth:A,text:J},{id:B,depth:A,text:K},{id:L,depth:A,text:M},{id:N,depth:O,text:P},{id:Q,depth:O,text:C}],body:{type:"root",children:[{type:b,tag:D,props:{id:I},children:[{type:b,tag:e,props:{href:"#need-or-curiosity",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sometimes we have the need or the curiosity to know the temps of our hardware and adjust the fans accordingly. On windows it is an easy task using "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.hwinfo.com\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"HWiNFO"}]},{type:a,value:" for monitoring, and the proprietary software to control fans; there is a great variety of software to do it."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On Linux (Kubuntu this time), is not that straightforward but it is easy too."}]},{type:a,value:c},{type:b,tag:D,props:{id:B},children:[{type:b,tag:e,props:{href:"#sensors",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Quick "},{type:b,tag:e,props:{href:"https:\u002F\u002Ftechhut.tv\u002Fmonitor-amd-ryzen-temps-in-linux\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"Google Search"}]},{type:a,value:" and we get the monitoring software: "},{type:b,tag:k,props:{},children:[{type:a,value:"lm-sensors"}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"First, we install it:"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"apt install lm-sensors\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Then, scan the system:"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"sensors-detect\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After the scan, we can use "},{type:b,tag:f,props:{},children:[{type:a,value:B}]},{type:a,value:" to get the temps, but it is not that pretty, so we can install "},{type:b,tag:f,props:{},children:[{type:a,value:"psensor"}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"apt-get install lm-sensors hddtemp psensor\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now we can open "},{type:b,tag:k,props:{},children:[{type:a,value:"Psensor"}]},{type:a,value:" just as any other application."}]},{type:a,value:c},{type:b,tag:D,props:{id:L},children:[{type:b,tag:e,props:{href:"#control-fans",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now, the fans. Even though we can use the BIOS settings to control the CPU and system fans, we still need more software to control de GPU ones."}]},{type:a,value:c},{type:b,tag:S,props:{id:N},children:[{type:b,tag:e,props:{href:"#corectrl-for-amd-gpus",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Using "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgitlab.com\u002Fcorectrl\u002Fcorectrl\u002F",rel:[g,h,i],target:j},children:[{type:a,value:T}]},{type:a,value:" we can do more than just tweak the fan speeds, but for this time we are only focusing on that."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"First, we have to add an "},{type:b,tag:U,props:{},children:[{type:a,value:"untrusted"}]},{type:a,value:" PPA, so proceed only if you can trust it."}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"add-apt-repository ppa:ernstp\u002Fmesarc\napt-get update\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Then install "},{type:b,tag:f,props:{},children:[{type:a,value:"corectrl"}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"apt install corectrl\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Again, run "},{type:b,tag:k,props:{},children:[{type:a,value:T}]},{type:a,value:" as an application."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are other ways of installing CoreCtrl on its "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgitlab.com\u002Fcorectrl\u002Fcorectrl\u002F#installation",rel:[g,h,i],target:j},children:[{type:a,value:"GitLab repository"}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:S,props:{id:Q},children:[{type:b,tag:e,props:{href:"#nvidia-x-server-settings",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On "},{type:b,tag:k,props:{},children:[{type:a,value:"System Settings"}]},{type:a,value:" go to "},{type:b,tag:k,props:{},children:[{type:a,value:"Driver Manager \u003E Aditional Drivers"}]},{type:a,value:" and install the NVIDIA driver. Now, more "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.techticity.com\u002Fhowto\u002Fhow-to-control-nvidia-graphics-card-fan-speed-in-linux\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"Google Searching"}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"nvidia-xconfig -a --cool-bits=28 --allow-empty-initial-configuration\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This gets us the "},{type:b,tag:k,props:{},children:[{type:a,value:C}]},{type:a,value:", that besides other configurations, we can use the "},{type:b,tag:k,props:{},children:[{type:a,value:"Thermal Settings"}]},{type:a,value:" to control the fans."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now, our "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.techticity.com\u002Fhowto\u002Fhow-to-control-nvidia-graphics-card-fan-speed-in-linux\u002F#automatically",rel:[g,h,i],target:j},children:[{type:a,value:"reference"}]},{type:a,value:" tell us there is "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnan0s7\u002Fnfancurve",rel:[g,h,i],target:j},children:[{type:a,value:"another option"}]},{type:a,value:" to create a fan curve (that needs the previous step "},{type:b,tag:U,props:{},children:[{type:a,value:"in order to enable fan control"}]},{type:a,value:"), but the default nvidia configuration seems to be enough for our needs and curiosity."}]}]},dir:"\u002Fpost\u002F2021\u002Fdec",path:"\u002Fpost\u002F2021\u002Fdec\u002Fcpu-gpu-monitoring-kubuntu",extension:".md"},recentArticles:[{slug:V,description:"Using the maven-assembly-plugin",title:W,createdAt:X,updatedAt:X},{slug:F,description:G,title:H,createdAt:v,updatedAt:v},{slug:Y,description:"Avoiding the sound roller coaster",title:Z,createdAt:_,updatedAt:_}],tagsList:[{slug:w,name:$}],topicsList:[{slug:x,name:aa},{slug:y,name:ab},{slug:z,name:ac}],prev:{slug:Y,title:Z},next:{slug:V,title:W},tags:[{slug:"java",name:"Java",icon:"mdi-language-java"},{slug:w,name:$,icon:"mdi-ubuntu"},{slug:"maven",name:"Maven",icon:"mdi-feather"},{slug:"nuxt",name:"Nuxt",icon:ad},{slug:"nuxt-content",name:"@nuxt\u002Fcontent",icon:ad},{slug:"sqlite",name:"SQLite",icon:"mdi-database-outline"},{slug:"vue",name:"Vue",icon:"mdi-vuejs"}],topics:[{slug:y,name:ab,icon:"mdi-desktop-classic"},{slug:"how-to-blog",name:"How to Blog",icon:"mdi-post-outline"},{slug:x,name:aa,icon:"mdi-linux"},{slug:z,name:ac,icon:"mdi-notebook-edit-outline"},{slug:"programming",name:"Programming",icon:"mdi-code-json"},{slug:"web-dev",name:"Web Development",icon:"mdi-monitor-cellphone"}],archives:[{year:ae,month:12,name:"2021 December (5)",to:"\u002Fblog\u002Farchives\u002F2021\u002F12"},{year:ae,month:11,name:"2021 November (4)",to:"\u002Fblog\u002Farchives\u002F2021\u002F11"},{name:"All...",to:"\u002Fblog\u002Farchives"}]}],fetch:{},mutations:[]}}("text","element","\n","p","a","code","nofollow","noopener","noreferrer","_blank","strong","div","nuxt-content-highlight","pre","language-text","line-numbers","true",-1,"span","icon","icon-link","2021-12-19T20:13:30.988Z","kubuntu","linux","hardware","notes-to-self",2,"sensors","NVIDIA X Server Settings","h2",":","cpu-gpu-monitoring-kubuntu","Temperature sensors and fan control","CPU and GPU monitoring on Kubuntu","need-or-curiosity","Need or Curiosity","Sensors","control-fans","Control Fans","corectrl-for-amd-gpus",3,"CoreCtrl for AMD GPUs","nvidia-x-server-settings",".","h3","CoreCtrl","em","include-maven-dependency-jar","Include Maven dependencies in .jar","2021-12-22T05:06:24.129Z","normalize-audio-kubuntu","Normalize Audio on Kubuntu","2021-12-13T00:16:20.942Z","Kubuntu","Linux","Hardware","Notes++ to self","mdi-nuxt",2021)));