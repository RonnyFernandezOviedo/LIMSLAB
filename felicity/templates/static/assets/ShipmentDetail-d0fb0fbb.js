import{d as f,b3 as y,r as k,t as p,o as s,c,b as n,F as b,y as x,n as E,u as e,I as S,x as A,N as o,i,z as r,A as l}from"./index-b75e268d.js";const I={class:""},C={class:"col-span-12"},D={class:"bg-white shadow-md mt-2"},L={class:"-mb-px flex justify-start"},T=["onClick"],w=f({__name:"ShipmentDetail",setup(V){const d=r(()=>l(()=>import("./ShipmentAssign-3a25d54c.js"),["assets/ShipmentAssign-3a25d54c.js","assets/index-b75e268d.js","assets/index-a964bbb1.css","assets/Button-3089dcaf.js","assets/shipment-44ad3018.js"])),m=r(()=>l(()=>import("./ShipmentSamples-e092795b.js"),["assets/ShipmentSamples-e092795b.js","assets/index-b75e268d.js","assets/index-a964bbb1.css","assets/shipment-44ad3018.js"])),u=r(()=>l(()=>import("./Manifest-172d1c02.js"),["assets/Manifest-172d1c02.js","assets/index-b75e268d.js","assets/index-a964bbb1.css","assets/shipment-44ad3018.js"])),g=r(()=>l(()=>import("./AuditLog-650e2cb4.js"),["assets/AuditLog-650e2cb4.js","assets/AuditLog.vue_vue_type_script_setup_true_lang-88cc4934.js","assets/index-b75e268d.js","assets/index-a964bbb1.css"]));let h=y(),t=k("detail");const _=p(()=>h.getShipment),v=p(()=>["preperation","empty"].includes(_.value?.state??"")?["detail","assign-samples","logs"]:["detail","manifest","logs"]);return(P,R)=>(s(),c("div",I,[n("section",C,[n("nav",D,[n("div",L,[(s(!0),c(b,null,x(v.value,a=>(s(),c("a",{key:a,class:E(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":e(t)===a}]),onClick:B=>S(t)?t.value=a:t=a},A(a),11,T))),128))])]),n("div",null,[e(t)==="detail"?(s(),o(e(m),{key:0})):i("",!0),e(t)==="assign-samples"?(s(),o(e(d),{key:1})):i("",!0),e(t)==="manifest"?(s(),o(e(u),{key:2})):i("",!0),e(t)==="logs"?(s(),o(e(g),{key:3,targetType:"shipment",targetId:_.value?.uid},null,8,["targetId"])):i("",!0)])])]))}});export{w as default};