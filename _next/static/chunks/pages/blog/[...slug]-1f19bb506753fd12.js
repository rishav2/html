(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{5706:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[...slug]",function(){return t(9662)}])},8993:function(e,s,t){"use strict";t.d(s,{Z:function(){return x}});var i=t(5893),n=t(7814),a=t(9417),r=t(1664),l=t.n(r),c=t(5675),d=t.n(c),u=t(4803),o=t.n(u),h=t(4572);function x(e){var s,t;let{title:r,image:c,url:u,description:x,blog_author:j,date:m}=e,g=(0,h.$)(c),p=null!==(s=j.data.attributes.name)&&void 0!==s?s:"Crowdrecht Team";return(0,i.jsxs)("article",{className:"post",children:[(0,i.jsxs)(l(),{className:"overlay",href:"/blog/".concat(u),children:[(0,i.jsx)(d(),{src:g,width:300,height:150,className:"img-responsive",alt:null!==(t=c.data.attributes.alternativeText)&&void 0!==t?t:c.data.attributes.name}),(0,i.jsx)("div",{children:(0,i.jsx)(n.G,{icon:a.Y$T,size:"xs"})})]}),(0,i.jsxs)("div",{className:"post-info",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"post-title",children:(0,i.jsx)(l(),{href:"/blog/".concat(u),children:r})}),(0,i.jsxs)("ul",{className:"post-meta",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(n.G,{icon:a.ILF}),p]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(n.G,{icon:a.Ry6}),(0,i.jsx)(o(),{locale:"de",format:"L",children:m})]})]})]}),(0,i.jsx)("div",{className:"post-desc",children:(0,i.jsx)("p",{children:x})})]})]})}},6864:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var i=t(5893),n=t(1664),a=t.n(n);function r(e){let{title:s,list:t}=e;return(0,i.jsxs)("div",{className:"moduletable",children:[(0,i.jsx)("h3",{children:s}),(0,i.jsx)("ul",{className:"categories-module mod-list",children:t.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)("h4",{children:(0,i.jsx)(a(),{href:"/blog/category/".concat(e.attributes.title),children:e.attributes.title})})},e.id))})]})}},5423:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var i=t(5893),n=t(5675),a=t.n(n),r=t(4572);function l(e){var s;let{title:t,posts:n}=e;return(0,i.jsxs)("div",{className:"moduletable",children:[(0,i.jsx)("h3",{children:t}),(0,i.jsx)("div",{className:"widget-popular",children:(0,i.jsx)("ul",{children:n.map(e=>(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{href:e.attributes.url,children:(0,i.jsx)(a(),{src:(0,r.$)(e.attributes.image),width:150,height:100,alt:null!==(s=e.attributes.image.data.attributes.alternativeText)&&void 0!==s?s:e.attributes.image.data.attributes.name,className:"img-responsive"})}),(0,i.jsx)("h4",{children:(0,i.jsx)("a",{href:e.attributes.url,children:e.attributes.title})})]},e.id))})})]})}},9957:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var i=t(5893);t(1664),t(7814);var n=t(9370),a=t.n(n);function r(e){let{title:s,image:t,link:n}=e;return(0,i.jsx)("div",{className:"page-title "+a()[t],children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"breadcrumbs",children:(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsx)("span",{children:s})})})})})})}},8793:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var i=t(5893);function n(e){let{count:s,current:t,press:n}=e,a=[t-1,t,t+1];return a[0]<1&&(a=a.map(e=>e+1)),a[2]>s&&(a=a.map(e=>e-1)),(0,i.jsx)("nav",{className:"page-navigation",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"pagination-prev",children:(0,i.jsx)("a",{className:"pagenav","data-original-title":"Next",onClick:()=>t>0?n(t-1):null,children:"<"})}),s<=4&&[...Array(s).keys()].map(e=>e+1).map(e=>(0,i.jsx)("li",{children:e==t?(0,i.jsx)("span",{className:"pagenav",children:e}):(0,i.jsx)("a",{className:"pagenav",onClick:()=>n(e),children:e})},e)),s>4&&(0,i.jsxs)(i.Fragment,{children:[t>s-2&&(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:"..."})},"..."),a.map(e=>(0,i.jsx)("li",{children:e==t?(0,i.jsx)("span",{className:"pagenav",children:e}):(0,i.jsx)("a",{className:"pagenav",onClick:()=>n(e),children:e})},e)),t<=s-2&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:"..."})},"..."),(0,i.jsx)("li",{children:s==t?(0,i.jsx)("span",{className:"pagenav",children:s}):(0,i.jsx)("a",{className:"pagenav",onClick:()=>n(s),children:s})},s)]})]}),(0,i.jsx)("li",{className:"pagination-next",children:(0,i.jsx)("a",{className:"pagenav","data-original-title":"Next",onClick:()=>t<s?n(t+1):null,children:">"})})]})})}t(3636)},4572:function(e,s,t){"use strict";function i(e){let{url:s}=e.data.attributes,t=s.startsWith("/")?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat("https://strapi.crowdrecht.de").concat(e)}(s):s;return t}t.d(s,{$:function(){return i}}),t(129),t(3454)},9662:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var i=t(5893),n=t(8993),a=t(5423);t(8793);var r=t(9957),l=t(6864),c=t(7294),d=t(1163);function u(){let[e,s]=(0,c.useState)(!0),[t,u]=(0,c.useState)(""),o=(0,d.useRouter)();(0,c.useEffect)(()=>{o.isReady&&(2!==o.query.slug.length?(u("Fehler bei der Suche - Bitte versuchen Sie es sp\xe4ter erneut!"),s(!1)):"category"==o.query.slug[0]||"tag"==o.query.slug[0]?b(o.query.slug[0],o.query.slug[1],1):(u("Fehler bei der Suche - Bitte versuchen Sie es sp\xe4ter erneut!"),s(!1)))},[o.isReady,o.asPath]);let[h,x]=(0,c.useState)(""),[j,m]=(0,c.useState)(),[g,p]=(0,c.useState)(),[v,f]=(0,c.useState)();async function b(e,t,i){x(t);let n=await fetch("/api/blog/search",{method:"POST",body:JSON.stringify({type:"tag"==e?"blog_tags":"blog_category",keyword:t,id:1}),headers:{"Content-Type":"application/json"}}),a=await n.json();a.success?(f(a.news),p(a.categories),0==a.result.length?u("Keine Ergebnisse"):m(a.result)):u("Fehler beim Anzeigen der Ergebnisse"),s(!1)}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{title:"Blog",image:"hero"}),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("h1",{style:{marginBottom:"10px"},children:"Blog"})}),(0,i.jsxs)("div",{className:"container container-bottom-padding",children:[e&&!t&&(0,i.jsx)("div",{className:"spinner-border",role:"status"}),!e&&t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h3",{style:{marginBottom:"10px"},children:["Suchergebnisse f\xfcr: ",h]}),(0,i.jsx)("div",{children:t})]}),!e&&!t&&(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{id:"center_column",className:"main-content col-lg-8",children:[(0,i.jsxs)("h3",{style:{marginBottom:"10px"},children:["Suchergebnisse f\xfcr: ",h]}),(0,i.jsx)("div",{className:"blog-grid ",children:(0,i.jsx)("div",{className:"grid-post",children:j.map(e=>(0,i.jsx)(n.Z,{...e.attributes},e.id))})})]}),(0,i.jsxs)("div",{id:"right_column",className:"sidebar col-lg-4",children:[(0,i.jsx)(l.Z,{title:"Kategorien",list:g}),(0,i.jsx)(a.Z,{title:"Zuletzt ver\xf6ffentlicht",posts:v})]})]})]})]})}},9370:function(e){e.exports={hero:"Breadcrumbs_hero__KSo8x",legal:"Breadcrumbs_legal__PVEWl",crowd:"Breadcrumbs_crowd__hQDtU"}},4654:function(){}},function(e){e.O(0,[129,803,774,888,179],function(){return e(e.s=5706)}),_N_E=e.O()}]);