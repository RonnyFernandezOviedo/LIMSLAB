import{d as v,r as y,t as k,o as s,c,b as _,F as f,y as x,n as b,u as e,I as h,x as E,N as n,i as a,z as r,A as i}from"./index-7e8465c2.js";const g={class:"mt-4"},I={class:"bg-white shadow-md mt-2"},A={class:"-mb-px flex justify-start"},C=["onClick"],R=v({__name:"index",setup(T){const d=r(()=>i(()=>import("./InstrumentTypes-1f05d4e9.js"),["assets/InstrumentTypes-1f05d4e9.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/instrument.mutations-8004381b.js"])),u=r(()=>i(()=>import("./Instruments-ff23c2a1.js"),["assets/Instruments-ff23c2a1.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/instrument.mutations-8004381b.js"])),m=r(()=>i(()=>import("./Methods-f51f8c58.js"),["assets/Methods-f51f8c58.js","assets/index-7e8465c2.js","assets/index-fff21e38.css"])),l=r(()=>i(()=>import("./Units-bc7cd02c.js"),["assets/Units-bc7cd02c.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/instrument.mutations-8004381b.js"]));let t=y("instrumentos");const p=["tipo-instrumento","instrumentos","metodos","unidades"];return k(()=>"tab-"+t.value),(V,D)=>(s(),c("div",g,[_("nav",I,[_("div",A,[(s(),c(f,null,x(p,o=>_("a",{key:o,class:b(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":e(t)===o}]),onClick:L=>h(t)?t.value=o:t=o},E(o),11,C)),64))])]),e(t)==="tipo-instrumento"?(s(),n(e(d),{key:0})):a("",!0),e(t)==="instrumentos"?(s(),n(e(u),{key:1})):a("",!0),e(t)==="metodos"?(s(),n(e(m),{key:2})):a("",!0),e(t)==="unidades"?(s(),n(e(l),{key:3})):a("",!0)]))}});export{R as default};