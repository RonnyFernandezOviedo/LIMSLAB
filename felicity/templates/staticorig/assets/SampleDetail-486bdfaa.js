import{_ as r,y as f}from"./shipment-53265c2d.js";import{f as y,G as o,c as b,r as g,d as c,aj as h,h as t,k as a,ag as k,x as _,F as x,ak as D,s as T,D as S,j as i,u as n,y as l,_ as E}from"./_plugin-vue_export-helper-dacf3d65.js";const w={class:"col-span-12"},C={class:"bg-white shadow-md mt-2"},I={class:"-mb-px flex justify-start"},L=["onClick"],V=y({__name:"SampleDetail",setup(A){const p=o(()=>r(()=>import("./Results-f1ee0052.js"),["assets/Results-f1ee0052.js","assets/shipment-53265c2d.js","assets/_plugin-vue_export-helper-dacf3d65.js","assets/Button-ea0a63f5.js","assets/analysis-47167c72.js","assets/constants-743d82a1.js","assets/runtime-dom.esm-bundler-98433118.js"])),m=o(()=>r(()=>import("./Impress-0ced477c.js"),["assets/Impress-0ced477c.js","assets/shipment-53265c2d.js","assets/_plugin-vue_export-helper-dacf3d65.js","assets/samples-ba5194ed.js","assets/index-41799763.js","assets/runtime-dom.esm-bundler-98433118.js","assets/index-45a01b77.css"])),u=o(()=>r(()=>import("./AuditLog-2f096dcd.js"),["assets/AuditLog-2f096dcd.js","assets/shipment-53265c2d.js","assets/_plugin-vue_export-helper-dacf3d65.js"])),d=f(),e=b({currentTab:g("analysis-results"),tabs:["analysis-results","logs","impress-reports"],sample:c(()=>d.getSample)});return c(()=>"tab-"+e.currentTab),(B,P)=>{const v=h("motion-slide-left");return t(),a("section",w,[k((t(),a("nav",C,[_("div",I,[(t(!0),a(x,null,D(e.tabs,s=>(t(),a("a",{key:s,class:T(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":e.currentTab===s}]),onClick:R=>e.currentTab=s},S(s),11,L))),128))])])),[[v]]),_("div",null,[e.currentTab==="analysis-results"?(t(),i(n(p),{key:0})):l("v-if",!0),e.currentTab==="logs"?(t(),i(n(u),{key:1,targetType:"sample",targetId:e.sample?.uid},null,8,["targetId"])):l("v-if",!0),e.currentTab==="impress-reports"?(t(),i(n(m),{key:2})):l("v-if",!0)])])}}}),F=E(V,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/sample/_id/SampleDetail.vue"]]);export{F as default};