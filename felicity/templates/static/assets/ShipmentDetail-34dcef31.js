import{d as f,b3 as y,r as k,t as p,o as s,c,b as n,F as b,y as x,n as E,u as e,I as S,x as A,L as o,i,z as r,A as l}from"./index-22e9c43e.js";const I={class:""},L={class:"col-span-12"},C={class:"bg-white shadow-md mt-2"},D={class:"-mb-px flex justify-start"},T=["onClick"],w=f({__name:"ShipmentDetail",setup(V){const d=r(()=>l(()=>import("./ShipmentAssign-aed684fe.js"),["assets/ShipmentAssign-aed684fe.js","assets/index-22e9c43e.js","assets/index-5bc4f6f2.css","assets/Button-39c9cd5e.js","assets/shipment-8e3726f3.js"])),m=r(()=>l(()=>import("./ShipmentSamples-357667c1.js"),["assets/ShipmentSamples-357667c1.js","assets/index-22e9c43e.js","assets/index-5bc4f6f2.css","assets/shipment-8e3726f3.js"])),u=r(()=>l(()=>import("./Manifest-3c8acafd.js"),["assets/Manifest-3c8acafd.js","assets/index-22e9c43e.js","assets/index-5bc4f6f2.css","assets/shipment-8e3726f3.js"])),g=r(()=>l(()=>import("./AuditLog-6adc383d.js"),["assets/AuditLog-6adc383d.js","assets/AuditLog.vue_vue_type_script_setup_true_lang-9a302809.js","assets/index-22e9c43e.js","assets/index-5bc4f6f2.css"]));let h=y(),t=k("detail");const _=p(()=>h.getShipment),v=p(()=>["preperation","empty"].includes(_.value?.state??"")?["detail","assign-samples","logs"]:["detail","manifest","logs"]);return(P,R)=>(s(),c("div",I,[n("section",L,[n("nav",C,[n("div",D,[(s(!0),c(b,null,x(v.value,a=>(s(),c("a",{key:a,class:E(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":e(t)===a}]),onClick:B=>S(t)?t.value=a:t=a},A(a),11,T))),128))])]),n("div",null,[e(t)==="detail"?(s(),o(e(m),{key:0})):i("",!0),e(t)==="assign-samples"?(s(),o(e(d),{key:1})):i("",!0),e(t)==="manifest"?(s(),o(e(u),{key:2})):i("",!0),e(t)==="logs"?(s(),o(e(g),{key:3,targetType:"shipment",targetId:_.value?.uid},null,8,["targetId"])):i("",!0)])])]))}});export{w as default};