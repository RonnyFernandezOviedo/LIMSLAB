import{d as c,aL as d,r as g,t as n,e as t,h as s,F as m,z as r,A as o}from"./index-60c5f486.js";const u=r(()=>o(()=>import("./ContainerColumn-69242ace.js"),["assets/ContainerColumn-69242ace.js","assets/index-60c5f486.js","assets/index-a964bbb1.css"])),x=r(()=>o(()=>import("./ContainerGrid-4157c9d1.js"),["assets/ContainerGrid-4157c9d1.js","assets/index-60c5f486.js","assets/index-a964bbb1.css"])),b=c({name:"contaner-view",setup(e,p){const a=d();let l=g("column-view");const i=n(()=>a.getStorageContainer?.grid?["column-view","grid-view"]:["column-view"]);return{currentTab:l,tabs:i,storageContainer:n(()=>a.getStorageContainer)}},render(){return t(m,null,[t("div",{class:"grid grid-cols-2 mt-2"},[t("div",{class:"col-span-1"},[t("div",{class:"flex"},[t("span",{class:"text-gray-600 text-md font-bold w-52"},[s("Name:")]),t("span",{class:"text-gray-600 text-md"},[this.storageContainer?.name])]),t("div",{class:"flex"},[t("span",{class:"text-gray-600 text-md font-bold w-52"},[s("Layout:")]),t("span",{class:"text-gray-600 text-md"},[this.storageContainer?.grid?"grid":"column"]),this.storageContainer?.grid?t("span",{class:"ml-2 text-gray-600 text-md italic bg-slate-400 px-1 rounded-sm"},[this.storageContainer?.rowWise?"by-row":"by-column"]):null])]),t("div",{class:"col-span-1"},[t("div",{class:"flex"},[t("span",{class:"text-gray-600 text-md font-bold w-52"},[s("Slots:")]),t("span",{class:"text-gray-600 text-md"},[this.storageContainer?.slots])]),t("div",{class:"flex mt-2"},[t("span",{class:"text-gray-600 text-md font-bold w-52"},[s("Empty Slots:")]),t("span",{class:"text-gray-600 text-md mr-2"},[+this.storageContainer?.slots-this.storageContainer?.samples?.length])])])]),t("div",null,[t("div",{class:"mt-4"},[t("nav",{class:"bg-white shadow-sm my-2"},[t("div",{class:"-mb-px flex justify-start"},[this.tabs.map(e=>t("a",{key:e,class:["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":this.currentTab===e}],onClick:()=>this.currentTab=e,role:"tab"},[e]))])]),this.currentTab==="column-view"?t(u,null,null):null,this.currentTab==="grid-view"?t(x,null,null):null])])])}});export{b as ContainerView,b as default};
