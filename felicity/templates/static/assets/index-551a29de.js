import{d as u,r as m,t as v,o as a,c as r,b as o,F as f,y as x,n as y,u as s,I as b,x as k,N as n,i as c,z as i,A as _}from"./index-60c5f486.js";const h={class:"mt-4"},g={class:"bg-white shadow-md mt-2"},C={class:"-mb-px flex justify-start"},E=["onClick"],I=u({__name:"index",setup(A){const d=i(()=>_(()=>import("./Suppliers-daa63f65.js"),["assets/Suppliers-daa63f65.js","assets/index-60c5f486.js","assets/index-a964bbb1.css","assets/instrument.mutations-2f939f87.js","assets/Suppliers-ea61c4ed.css"])),l=i(()=>_(()=>import("./Manufacturers-93ae93c0.js"),["assets/Manufacturers-93ae93c0.js","assets/index-60c5f486.js","assets/index-a964bbb1.css","assets/instrument.mutations-2f939f87.js"]));let e=m("proveedor");const p=["proveedor","fabricante"];return v(()=>"tab-"+e.value),(B,V)=>(a(),r("div",h,[o("nav",g,[o("div",C,[(a(),r(f,null,x(p,t=>o("a",{key:t,class:y(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":s(e)===t}]),onClick:w=>b(e)?e.value=t:e=t},k(t),11,E)),64))])]),s(e)==="proveedor"?(a(),n(s(d),{key:0})):c("",!0),s(e)==="fabricante"?(a(),n(s(l),{key:1})):c("",!0)]))}});export{I as default};