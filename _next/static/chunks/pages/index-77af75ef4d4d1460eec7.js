(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{57793:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return W}});var r=t(60142),i=t(52209),a=t(9008),c=t(32368),s=t(80731),o=t(85893),l="flags.sh",d="A simple script generator to start your Minecraft servers with optimal flags.",u=function(e){var n,t=e.title,r=e.description,i=e.prefixed,u=void 0===i||i,h=e.containerize,x=void 0===h||h,g=e.children,f="100vw",m=u&&t?"".concat(l," | ").concat(t):l,X=null!==r&&void 0!==r?r:d,p=(0,c.rZ)();return(0,o.jsxs)(s.W,{sx:{minWidth:f,maxWidth:f,height:"100vh"},children:[(0,o.jsxs)(a.Head,{children:[(0,o.jsx)("title",{children:m}),(0,o.jsx)("meta",{property:"og:title",content:m}),(0,o.jsx)("meta",{property:"twitter:title",content:m}),(0,o.jsx)("meta",{property:"og:description",content:X}),(0,o.jsx)("meta",{property:"twitter:description",content:X}),(0,o.jsx)("meta",{name:"application-name",content:l}),(0,o.jsx)("meta",{property:"og:site_name",content:l}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,o.jsx)("meta",{property:"og:type",content:"website"})," ",(0,o.jsx)("meta",{name:"theme-color",content:null===(n=p.colors[p.primaryColor])||void 0===n?void 0:n[5]}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),x?(0,o.jsx)(s.W,{sx:{height:"inherit",overflow:"hidden"},children:g}):g]})},h=function(e){var n=e.title,t=e.description,r=e.prefixed,i=void 0===r||r,a=e.containerize,c=void 0===a||a,s=e.children;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u,{title:n,description:t,prefixed:i,containerize:c,children:s})})},x=t(36972),g=t(98260),f=t(92165),m=t(16157),X=t(40704),p=t(91240),j=t(93709),v=t(31582),w=t(54451),b=t(82862),P=t(22669),G=t(70751),k=t(67294),C=t(65059),y=t(75296),S=t(26089),M=t(93162),z=t.n(M);function T(){return(0,o.jsxs)("svg",{version:"1.2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1600 1600",width:"1600",height:"1600",children:[(0,o.jsx)("path",{d:"m25 125c0-55.2 44.8-100 100-100h1350c55.2 0 100 44.8 100 100v1350c0 55.2-44.8 100-100 100h-1350c-55.2 0-100-44.8-100-100z",fill:"#1a1b1e"}),(0,o.jsx)("path",{d:"m200 250c0-27.6 22.4-50 50-50h1100c27.6 0 50 22.4 50 50v1100c0 27.6-22.4 50-50 50h-1100c-27.6 0-50-22.4-50-50z",fill:"#25262b"}),(0,o.jsx)("path",{d:"m320 666c0-41.4 33.6-75 75-75h250c41.4 0 75 33.6 75 75c0 41.4-33.6 75-75 75h-250c-41.4 0-75-33.6-75-75z",fill:"#c1c2c5"}),(0,o.jsx)("path",{d:"m762 666c0-41.4 33.6-75 75-75h150c41.4 0 75 33.6 75 75c0 41.4-33.6 75-75 75h-150c-41.4 0-75-33.6-75-75z",fill:"#c1c2c5"}),(0,o.jsx)("path",{d:"m1055 395c0-41.4 33.6-75 75-75h75c41.4 0 75 33.6 75 75c0 41.4-33.6 75-75 75h-75c-41.4 0-75-33.6-75-75z",fill:"#c1c2c5"}),(0,o.jsx)("path",{d:"m862 395c0-41.4 33.6-75 75-75c41.4 0 75 33.6 75 75c0 41.4-33.6 75-75 75c-41.4 0-75-33.6-75-75z",fill:"#c1c2c5"}),(0,o.jsx)("path",{d:"m320 395c0-41.4 33.6-75 75-75h350c41.4 0 75 33.6 75 75c0 41.4-33.6 75-75 75h-350c-41.4 0-75-33.6-75-75z",fill:"#c1c2c5"})]})}function E(){var e=(0,i.Z)(['\n                :start\n                %flags\n                \n                echo "Server restarting..."\n                goto :start\n            ']);return E=function(){return e},e}function A(){var e=(0,i.Z)(["\n            %flags\n        "]);return A=function(){return e},e}function Z(){var e=(0,i.Z)(["\n                ",'\n                while [ true ]; do\n                    %flags\n                \n                    echo "Server restarting..."\n                done\n            ']);return Z=function(){return e},e}function _(){var e=(0,i.Z)(["\n                ","\n                \n                %flags\n            "]);return _=function(){return e},e}function R(){var e=(0,i.Z)(["\n            #!/bin/bash\n        "]);return R=function(){return e},e}var N="java -Xms=%mem -Xmx=%mem %incVectors -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar %filename %gui",D="java -Xms=%mem -Xmx=%mem %incVectors -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=40 -XX:G1MaxNewSizePercent=50 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=15 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=20 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar %filename %gui",O={linux:{file:"start.sh",header:(0,y.Pn)(R()),get standard(){return(0,y.Pn)(_(),this.header)},get autorestart(){return(0,y.Pn)(Z(),this.header)}},windows:{file:"start.bat",standard:(0,y.Pn)(A()),get autorestart(){return(0,y.Pn)(E())}}};function H(e,n){for(var t=e,i=0,a=Object.entries(n);i<a.length;i++){var c=(0,r.Z)(a[i],2),s=c[0],o=c[1];t=t.replaceAll("%".concat(s),o)}return t}function U(){var e=(0,x.X)(),n=e.colorScheme,t=e.toggleColorScheme,r="dark"===n,i="server.jar",a=(0,k.useState)(i),c=a[0],s=a[1],l=(0,k.useState)(!1),d=l[0],u=l[1],h=(0,k.useState)(4),y=h[0],M=h[1],E=(0,k.useState)(!1),A=E[0],Z=E[1],_=(0,k.useState)(!1),R=_[0],U=_[1],W=(0,k.useState)(!1),B=W[0],F=W[1],L=(0,k.useState)(!1),V=L[0],I=L[1],J=(0,k.useState)("linux"),q=J[0],K=J[1],Q=(0,k.useState)("Empty"),Y=Q[0],$=Q[1],ee=(0,k.useState)([]),ne=ee[0],te=ee[1];return(0,k.useEffect)((function(){for(var e=[],n=1;n<24;n++)n%4===0&&e.push({value:n,label:"".concat(n," GB")});te(e)}),[]),(0,k.useEffect)((function(){var e,n=N;y>=12&&(n=D);var t=y;V&&(t*=.85);var r=O[q],i="".concat(null===(e=t)||void 0===e?void 0:e.toFixed(1),"G");$(H(R?r.autorestart:r.standard,{flags:H(n,{mem:i,incVectors:B?"--add-modules=jdk.incubator.vector":"",gui:A?"":"--nogui"}).replaceAll(/\s+/g," "),filename:c.replaceAll(/\s/g,"\\ ")}))}),[c,y,A,R,B,V,q]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(g.M,{sx:{height:"100%"},children:(0,o.jsxs)(f.X,{padding:"md",shadow:"sm",withBorder:!0,sx:function(e){return{width:"100%",backgroundColor:r?e.colors.dark[6]:e.colors.gray[0]}},children:[(0,o.jsxs)(m.Z,{children:[(0,o.jsx)(X.A,{size:"xl",radius:"xs",variant:"transparent",children:(0,o.jsx)(T,{})}),(0,o.jsx)(p.D,{children:"flags.sh"})]}),(0,o.jsxs)(m.Z,{grow:!0,children:[(0,o.jsxs)(m.Z,{direction:"column",grow:!0,children:[(0,o.jsx)(j.o,{label:"Filename",defaultValue:i,icon:(0,o.jsx)(S.XyB,{}),error:d,onChange:function(e){e.target.value.includes(".jar")?(u(!1),s(e.target.value)):u("Filename must end with .jar")}}),(0,o.jsxs)("label",{children:[(0,o.jsx)(v.x,{size:"sm",children:"Memory"}),(0,o.jsx)(w.i,{step:.5,min:.5,max:24,defaultValue:y,marks:ne,thumbLabel:"Memory allocation slider",label:function(e){return"".concat(e.toFixed(1)," GB")},onChange:function(e){M(e)}})]})]}),(0,o.jsxs)(m.Z,{direction:"column",grow:!0,children:[(0,o.jsx)(b.r,{label:"GUI",checked:A,onChange:function(e){Z(e.target.checked)}}),(0,o.jsx)(b.r,{label:"Autorestart",checked:R,onChange:function(e){U(e.target.checked)}}),(0,o.jsx)(b.r,{label:"Java 17+",checked:B,onChange:function(e){F(e.target.checked)}}),(0,o.jsx)(b.r,{label:"Pterodactyl",checked:V,onChange:function(e){I(e.target.checked)}})]})]}),(0,o.jsx)(P.T,{h:"lg"}),(0,o.jsx)(v.x,{size:"xl",weight:700,children:"Result"}),(0,o.jsxs)(C.p1.Tabs,{styles:function(e){return{copy:{backgroundColor:r?e.colors.dark[6]:e.colors.gray[0],borderRadius:e.radius.xs},line:{whiteSpace:"pre-wrap"}}},onTabChange:function(e){var n=Object.keys(O)[e];n&&K(n)},children:[(0,o.jsx)(C.p1.Tab,{label:"Linux / Mac",withLineNumbers:!0,scrollAreaComponent:"div",language:"bash",icon:(0,o.jsx)(S.HlP,{}),children:Y},"linux"),(0,o.jsx)(C.p1.Tab,{label:"Windows",withLineNumbers:!0,scrollAreaComponent:"div",language:"bash",icon:(0,o.jsx)(S.tsb,{}),children:Y},"windows")]}),(0,o.jsxs)(m.Z,{direction:"column",children:[(0,o.jsx)(P.T,{}),(0,o.jsxs)(m.Z,{children:[(0,o.jsx)(X.A,{color:"green",variant:"filled",size:"lg",title:"Download current script",onClick:function(){var e=new Blob([Y],{type:"text/plain"});z().saveAs(e,O[q].file)},children:(0,o.jsx)(S.UWx,{})}),(0,o.jsx)(X.A,{color:"green",variant:"filled",size:"lg",title:"Switch to ".concat(r?"light":"dark"," mode"),onClick:function(){t()},children:r?(0,o.jsx)(S.kOA,{}):(0,o.jsx)(S.JFe,{})}),(0,o.jsxs)(m.Z,{spacing:"xs",sx:{display:y<4?"":"none"},children:[(0,o.jsx)(S.bG7,{}),(0,o.jsxs)(v.x,{children:["It is recommended to allocate at least ",(0,o.jsx)(G.E,{children:"4 GB"})," of memory."]})]})]})]})]})})})}U.getLayout=function(e){return(0,o.jsx)(h,{children:e})};var W=U},47540:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(57793)}])}},function(e){e.O(0,[629,138,774,888,179],(function(){return n=47540,e(e.s=n);var n}));var n=e.O();_N_E=n}]);