"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3251],{35318:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(27378);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,o(o({ref:r},l),{},{components:t})):n.createElement(m,o({ref:r},l))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},73800:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(25773),i=(t(27378),t(35318));const a={},o="Drivers",c={unversionedId:"api/drivers/index",id:"api/drivers/index",title:"Drivers",description:"Starting driver provide a programming abstraction for hardware peripherals.",source:"@site/docs/api/drivers/index.mdx",sourceDirName:"api/drivers",slug:"/api/drivers/",permalink:"/devicescript/api/drivers/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Math",permalink:"/devicescript/api/math"},next:{title:"Accelerometer",permalink:"/devicescript/api/drivers/accelerometer"}},p={},s=[{value:"Jacdac",id:"jacdac",level:2}],l={toc:s},u="wrapper";function d(e){let{components:r,...t}=e;return(0,i.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"drivers"},"Drivers"),(0,i.kt)("p",null,"Starting driver provide a programming abstraction for hardware peripherals.\nSome driver implementations are builtin (written C),\nwhile others can be contributed as DeviceScript packages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { gpio } from "@devicescript/core"\nimport { startButton } from "@devicescript/servers"\n\nconst buttonA = startButton({\n    pin: gpio(2),\n})\n')),(0,i.kt)("p",null,"You can find the list of servers in the table of contents."),(0,i.kt)("h2",{id:"jacdac"},"Jacdac"),(0,i.kt)("p",null,"DeviceScript supports Jacdac modules out of the box.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/devices/"},"Jacdac Device Catalog"),"."))}d.isMDXComponent=!0}}]);