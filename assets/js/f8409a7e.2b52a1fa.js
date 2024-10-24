"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3206],{35318:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var i=t(27378);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var r=i.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return i.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return t?i.createElement(g,o(o({ref:r},s),{},{components:t})):i.createElement(g,o({ref:r},s))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<n;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92661:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var i=t(25773),a=(t(27378),t(35318));const n={sidebar_position:1,description:"DeviceScript is a small footprint bytecode interpreter that brings a TypeScript developer experience to low-resource microcontroller-based devices. Write reusable application/firmware on top of abstract hardware services and communicate to a cloud with JSON through a unified API. Full debugging experience in Visual Studio Code. Leverage npm, yarn or pnpm to distribute and consume DeviceScript packages.",keywords:["DeviceScript","TypeScript","microcontroller","firmware","hardware"]},o="DeviceScript",c={unversionedId:"intro",id:"intro",title:"DeviceScript",description:"DeviceScript is a small footprint bytecode interpreter that brings a TypeScript developer experience to low-resource microcontroller-based devices. Write reusable application/firmware on top of abstract hardware services and communicate to a cloud with JSON through a unified API. Full debugging experience in Visual Studio Code. Leverage npm, yarn or pnpm to distribute and consume DeviceScript packages.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/devicescript/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"DeviceScript is a small footprint bytecode interpreter that brings a TypeScript developer experience to low-resource microcontroller-based devices. Write reusable application/firmware on top of abstract hardware services and communicate to a cloud with JSON through a unified API. Full debugging experience in Visual Studio Code. Leverage npm, yarn or pnpm to distribute and consume DeviceScript packages.",keywords:["DeviceScript","TypeScript","microcontroller","firmware","hardware"]},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/devicescript/getting-started/"}},l={},p=[{value:"TypeScript",id:"typescript",level:4},{value:"Portable Virtual Machine",id:"portable-virtual-machine",level:4},{value:"Hardware as Services",id:"hardware-as-services",level:4},{value:"Small",id:"small",level:4},{value:"Simulation &amp; Tracing",id:"simulation--tracing",level:4},{value:"Debugging",id:"debugging",level:4},{value:"Package Ecosystem",id:"package-ecosystem",level:4}],s={toc:p},u="wrapper";function d(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,i.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"devicescript"},"DeviceScript"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"DeviceScript brings a TypeScript developer experience to low-resource microcontroller-based devices."),"\nDeviceScript is compiled to a custom VM bytecode, which can run in very constrained\nenvironments."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A screenshot of the Visual Studio Code integration",src:t(48517).Z,width:"1536",height:"960"})),(0,a.kt)("h4",{id:"typescript"},"TypeScript"),(0,a.kt)("p",null,"The familiar syntax and tooling, all at your fingertips. Read the ",(0,a.kt)("a",{parentName:"p",href:"/language"},"language reference"),"."),(0,a.kt)("h4",{id:"portable-virtual-machine"},"Portable Virtual Machine"),(0,a.kt)("p",null,"Small footprint DeviceScript bytecode interpreter. See ",(0,a.kt)("a",{parentName:"p",href:"/devices"},"supported devices"),"."),(0,a.kt)("h4",{id:"hardware-as-services"},"Hardware as Services"),(0,a.kt)("p",null,"Write reusable application/firmware on top of abstract hardware services. See ",(0,a.kt)("a",{parentName:"p",href:"/developer/clients"},"clients"),"."),(0,a.kt)("h4",{id:"small"},"Small"),(0,a.kt)("p",null,"Designed for low power, low flash, low memory embedded projects."),(0,a.kt)("h4",{id:"simulation--tracing"},"Simulation & Tracing"),(0,a.kt)("p",null,"Develop and test your firmware using simulated or real sensors. See ",(0,a.kt)("a",{parentName:"p",href:"/developer/simulation/"},"simulation")),(0,a.kt)("h4",{id:"debugging"},"Debugging"),(0,a.kt)("p",null,"Full debugging experience in Visual Studio Code, for hardware or simulated devices. Read about the ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/vscode"},"Visual Studio Code Extension"),"."),(0,a.kt)("h4",{id:"package-ecosystem"},"Package Ecosystem"),(0,a.kt)("p",null,"Leverage npm, yarn or pnpm to distribute and consume DeviceScript packages. Read about ",(0,a.kt)("a",{parentName:"p",href:"/developer/packages"},"Packages"),"."))}d.isMDXComponent=!0},48517:(e,r,t)=>{t.d(r,{Z:()=>i});const i=t.p+"assets/images/hero-6841bcefb7272a3b78c2650090ff2181.png"}}]);