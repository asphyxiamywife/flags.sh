(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{7322:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return x}});var t=r(72540),o=r(35063),a=r(9008),c=r(67294),l=r(31582),s=(0,r(18914).k)((()=>({root:{backgroundColor:"transparent",cursor:"pointer",padding:0,border:0}}))),i=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,v=(e,n)=>{for(var r in n||(n={}))f.call(n,r)&&p(e,r,n[r]);if(u)for(var r of u(n))d.call(n,r)&&p(e,r,n[r]);return e};const h=(0,c.forwardRef)(((e,n)=>{var r=e,{component:t,className:o,classNames:a,styles:i}=r,p=((e,n)=>{var r={};for(var t in e)f.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&u)for(var t of u(e))n.indexOf(t)<0&&d.call(e,t)&&(r[t]=e[t]);return r})(r,["component","className","classNames","styles"]);const{classes:h,cx:m}=s(null,{name:"Anchor",classNames:a,styles:i}),b="button"===t?{type:"button"}:null;return c.createElement(l.x,v(v({component:t||"a",variant:"link",ref:n,className:m(h.root,o)},b),p))}));h.displayName="@mantine/core/Anchor";var m=r(98260),b=r(16157),y=r(91240),g=r(85893);function x(){var e="This page could not be found";return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.Head,{children:(0,g.jsxs)("title",{children:[404,": ",e]})}),(0,g.jsx)(m.M,{sx:{height:"100vh"},children:(0,g.jsxs)(b.Z,{direction:"column",sx:{alignItems:"center"},children:[(0,g.jsxs)(b.Z,{children:[(0,g.jsx)(y.D,{children:404}),(0,g.jsx)(l.x,{children:e})]}),(0,g.jsx)(o.Link,{href:t.Routes.Home(),passHref:!0,children:(0,g.jsx)(h,{children:"Back Home"})})]})})]})}},92167:function(e,n,r){"use strict";var t=r(53848);n.Link=f;var o,a=(o=r(67294))&&o.__esModule?o:{default:o},c=r(21063),l=r(34651),s=r(7426);var i={};function u(e,n,r,t){if(e&&c.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;i[n+"%"+r+(o?"%"+o:"")]=!0}}function f(e){var n,r=!1!==e.prefetch,o=l.useRouter(),f=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),r=t(n,2),a=r[0],l=r[1];return{href:a,as:e.as?c.resolveHref(o,e.as):l||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,b=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,x=s.useIntersection({rootMargin:"200px"}),j=t(x,2),k=j[0],E=j[1],_=a.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);a.default.useEffect((function(){var e=E&&r&&c.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,t=i[d+"%"+p+(n?"%"+n:"")];e&&!t&&u(o,d,p,{locale:n})}),[p,d,E,y,r,o]);var w={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,l,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),n[o?"replace":"push"](r,t,{shallow:a,locale:s,scroll:l}))}(e,o,d,p,h,m,b,y)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof y?y:o&&o.locale,N=o&&o.isLocaleDomain&&c.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);w.href=N||c.addBasePath(c.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(n,w)}},7426:function(e,n,r){"use strict";var t=r(53848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,s=o.useRef(),i=o.useState(!1),u=t(i,2),f=u[0],d=u[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=l.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,c=t.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=r(67294),a=r(73447),c="undefined"!==typeof IntersectionObserver;var l=new Map},39120:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(7322)}])},35063:function(e,n,r){e.exports=r(92167)}},function(e){e.O(0,[444,774,888,179],(function(){return n=39120,e(e.s=n);var n}));var n=e.O();_N_E=n}]);