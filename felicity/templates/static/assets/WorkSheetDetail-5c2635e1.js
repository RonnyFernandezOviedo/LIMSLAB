import{d as g,a8 as h,r as v,t as y,o as a,c,b as o,F as f,y as x,n as b,u as t,I as E,x as w,N as r,i as n,z as i,A as l}from"./index-b75e268d.js";const A={class:""},C={class:"col-span-12"},I={class:"bg-white shadow-md mt-2"},S={class:"-mb-px flex justify-start"},D=["onClick"],P=g({__name:"WorkSheetDetail",setup(L){const _=i(()=>l(()=>import("./WorkSheetAssign-c735b314.js"),["assets/WorkSheetAssign-c735b314.js","assets/index-b75e268d.js","assets/index-a964bbb1.css","assets/constants-9fdeb32f.js"])),d=i(()=>l(()=>import("./WorkSheetResults-9fff4676.js"),["assets/WorkSheetResults-9fff4676.js","assets/index-b75e268d.js","assets/index-a964bbb1.css","assets/analysis-565918a4.js","assets/constants-9fdeb32f.js"])),u=i(()=>l(()=>import("./AuditLog-650e2cb4.js"),["assets/AuditLog-650e2cb4.js","assets/AuditLog.vue_vue_type_script_setup_true_lang-88cc4934.js","assets/index-b75e268d.js","assets/index-a964bbb1.css"]));let p=h(),e=v("detail");const m=["detail","assign-samples","logs"],k=y(()=>p.getWorkSheet);return(R,T)=>(a(),c("div",A,[o("section",C,[o("nav",I,[o("div",S,[(a(),c(f,null,x(m,s=>o("a",{key:s,class:b(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":t(e)===s}]),onClick:V=>E(e)?e.value=s:e=s},w(s),11,D)),64))])]),o("div",null,[t(e)==="detail"?(a(),r(t(d),{key:0})):n("",!0),t(e)==="assign-samples"?(a(),r(t(_),{key:1})):n("",!0),t(e)==="logs"?(a(),r(t(u),{key:2,targetType:"worksheet",targetId:k.value?.uid},null,8,["targetId"])):n("",!0)])])]))}});export{P as default};