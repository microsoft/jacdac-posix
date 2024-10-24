"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5875],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(25773),i=(n(27378),n(35318));const r={description:"Learn how to create a new board configuration in DeviceScript for supported chipset architectures.",sidebar_position:10,keywords:["DeviceScript","board configuration","Visual Studio Code","command line","flash firmware"]},o="Add Board",c={unversionedId:"devices/add-board",id:"devices/add-board",title:"Add Board",description:"Learn how to create a new board configuration in DeviceScript for supported chipset architectures.",source:"@site/docs/devices/add-board.mdx",sourceDirName:"devices",slug:"/devices/add-board",permalink:"/devicescript/devices/add-board",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"Learn how to create a new board configuration in DeviceScript for supported chipset architectures.",sidebar_position:10,keywords:["DeviceScript","board configuration","Visual Studio Code","command line","flash firmware"]},sidebar:"tutorialSidebar",previous:{title:"Grove Shield for Seeed Studio XIAO ESP32-C3",permalink:"/devicescript/devices/shields/xiao-grove-shield"},next:{title:"Add SoC/MCU",permalink:"/devicescript/devices/add-soc"}},s={},l=[{value:"How to create a new board configuration",id:"how-to-create-a-new-board-configuration",level:2},{value:"Create the new <code>board.json</code> file",id:"create-the-new-boardjson-file",level:3},{value:"Editing the generated Device configuration (.json) file",id:"editing-the-generated-device-configuration-json-file",level:3},{value:"Services",id:"services",level:4},{value:"Flash the new configuration",id:"flash-the-new-configuration",level:3},{value:"Contributing",id:"contributing",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-board"},"Add Board"),(0,i.kt)("p",null,"In DeviceScript, we commonly refere a Device Configuration as a ",(0,i.kt)("inlineCode",{parentName:"p"},"board"),".\nYou can see examples of configuration in each device page (",(0,i.kt)("a",{parentName:"p",href:"/devices/esp32/seeed-xiao-esp32c3#configuration"},"like this one"),")"),(0,i.kt)("p",null,"If your device is already using a supported system-on-a-chip (SoC) or MCU (ESP32, RP2040, ...),\nyou can create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"board")," configuration in your project to support it in DeviceScript.\nYou do ",(0,i.kt)("strong",{parentName:"p"},"not")," need to build a new firmware."),(0,i.kt)("p",null,"If you want to add a new system-on-a-chip (SoC), ",(0,i.kt)("a",{parentName:"p",href:"/devices/add-soc"},"follow the add Soc guide"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you just need to reconfigure a couple pins, you can also use\nthe ",(0,i.kt)("a",{parentName:"p",href:"/developer/board-configuration"},"configureHardware")," function and skip the creation of a new board.")),(0,i.kt)("h2",{id:"how-to-create-a-new-board-configuration"},"How to create a new board configuration"),(0,i.kt)("h3",{id:"create-the-new-boardjson-file"},"Create the new ",(0,i.kt)("inlineCode",{parentName:"h3"},"board.json")," file"),(0,i.kt)("p",null,"You will need three pieces of information to start a new board: (1) the existing configuration\nyou will fork, (2) a name and (3) an identifier."),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/vscode"},"Visual Studio Code"),",\nselect ",(0,i.kt)("strong",{parentName:"p"},"DeviceScript: Add Board...")," from the command palette."),(0,i.kt)("p",null,"Using the ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/cli"},"Command Line"),", use the ",(0,i.kt)("inlineCode",{parentName:"p"},"add board")," command and follow the instructions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"devs add board\n")),(0,i.kt)("p",null,"After this process, you wil have a new JSON under ",(0,i.kt)("inlineCode",{parentName:"p"},"/boards/"),". The command line and\nVisual Studio Code will automatically integrate any configuration files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/boards")," folder."),(0,i.kt)("h3",{id:"editing-the-generated-device-configuration-json-file"},"Editing the generated Device configuration (.json) file"),(0,i.kt)("p",null,"The new configuration file is a schematized JSON file.\nIn Visual Studio Code, you will get tooltip, completion, syntax errors and auto-completion."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","A new product identifier was automatically generated for you (but ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/ddk/device-definition/"},"you can regenerate a new one as well"),").")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The product identifier is used to identify devices in the ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/devices/"},"Jacdac device catalog"),"\nwhich is leveraged by the simulator dashboard.")),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","configure the status light LED. DeviceScript supports monochrome LEDs, RGB LEDs,\nWS2812B, APA102, SK9822 and more (refer to the schema information).")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    "led": {\n        "pin": 7,\n        "isMono": true\n    },\n')),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","configure the system logging pin")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    "log": {\n        "baud": 115200,\n        "pinTX": 0\n    },\n')),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","configure I2C pins, add ",(0,i.kt)("inlineCode",{parentName:"li"},"$connector")," only if there is a standardized connector")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    "i2c": {\n        "pinSCL": 5,\n        "pinSDA": 4,\n    },\n')),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update the pin map")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    "pins": {\n        "P1": 1,\n        "P11": 11,\n        "P13": 13,\n        "P14": 14,\n        ...\n    }\n')),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update the board description"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","If available, provide a URL where the board can be purchased")),(0,i.kt)("p",null,"Build the project to test the board definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,i.kt)("h4",{id:"services"},"Services"),(0,i.kt)("p",null,"Note that there is two ways of defining services in the ",(0,i.kt)("inlineCode",{parentName:"p"},".board.json")," file.\nThe ones listed under ",(0,i.kt)("inlineCode",{parentName:"p"},'"$services": [ ... ]')," will generate ",(0,i.kt)("inlineCode",{parentName:"p"},"startFoo()")," functions,\nwhich need to be called for the service to be started.\nThe ones under ",(0,i.kt)("inlineCode",{parentName:"p"},'"services": [ ... ]')," are always started; this is typically only\nused for ",(0,i.kt)("inlineCode",{parentName:"p"},"power")," service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    "$services": [\n        {\n            "service": "buzzer",\n            "pin": 20,\n            "name": "buzzer"\n        },\n        ...\n    ]\n')),(0,i.kt)("h3",{id:"flash-the-new-configuration"},"Flash the new configuration"),(0,i.kt)("p",null,"The command line and Visual Studio will automatically integrate\nany configuration file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"boards/")," folder.\nThe first time you deploy a program with a new hardware configuration, it will reset the device."),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"If you have successfully crafted a configuration for your Device and you would like to share it with other users,\nyou can open a GitHub Issue at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/devicescript"},"https://github.com/microsoft/devicescript")," and attach the .JSON file. The file will\nbe reviewed and integrate into the built-in list."))}u.isMDXComponent=!0}}]);