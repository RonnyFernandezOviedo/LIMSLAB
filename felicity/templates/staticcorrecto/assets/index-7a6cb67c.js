import{d as v,r as y,t as k,o as s,c,b as _,F as f,y as x,n as b,u as e,I as h,x as E,N as n,i as a,z as r,A as i}from"./index-7fd050f3.js";const g={class:"mt-4"},I={class:"bg-white shadow-md mt-2"},A={class:"-mb-px flex justify-start"},C=["onClick"],R=v({__name:"index",setup(T){const d=r(()=>i(()=>import("./InstrumentTypes-d8bff8ff.js"),["assets/InstrumentTypes-d8bff8ff.js","assets/index-7fd050f3.js","assets/index-a964bbb1.css","assets/instrument.mutations-ebccdfec.js"])),u=r(()=>i(()=>import("./Instruments-4100e63c.js"),["assets/Instruments-4100e63c.js","assets/index-7fd050f3.js","assets/index-a964bbb1.css","assets/instrument.mutations-ebccdfec.js"])),m=r(()=>i(()=>import("./Methods-baaecb13.js"),["assets/Methods-baaecb13.js","assets/index-7fd050f3.js","assets/index-a964bbb1.css"])),l=r(()=>i(()=>import("./Units-e8407187.js"),["assets/Units-e8407187.js","assets/index-7fd050f3.js","assets/index-a964bbb1.css","assets/instrument.mutations-ebccdfec.js"]));let t=y("instrumentos");const p=["tipo-instrumento","instrumentos","metodos","unidades"];return k(()=>"tab-"+t.value),(V,D)=>(s(),c("div",g,[_("nav",I,[_("div",A,[(s(),c(f,null,x(p,o=>_("a",{key:o,class:b(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":e(t)===o}]),onClick:L=>h(t)?t.value=o:t=o},E(o),11,C)),64))])]),e(t)==="tipo-instrumento"?(s(),n(e(d),{key:0})):a("",!0),e(t)==="instrumentos"?(s(),n(e(u),{key:1})):a("",!0),e(t)==="metodos"?(s(),n(e(m),{key:2})):a("",!0),e(t)==="unidades"?(s(),n(e(l),{key:3})):a("",!0)]))}});export{R as default};