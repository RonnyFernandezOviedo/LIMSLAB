import{d as l,r as u,o as t,c as o,G as p,e as _,u as f,b as e,z as m,A as h,ah as g}from"./index-b75e268d.js";import{a as n}from"./no-auth-67c9d656.js";const v={class:"mt-4"},y=e("div",{class:"mt-2"},[e("h2",{class:"h2 mb-4"},"Cargar datos por defecto"),e("hr"),e("p",null,"Cargar analisis, servicios, perfiles, tipos de muestras etc")],-1),b={key:1,class:"mt-4"},w=l({__name:"index",setup(k){const r=m(()=>h(()=>import("./LoadingMessage-14be4887.js"),["assets/LoadingMessage-14be4887.js","assets/LoadingMessage.vue_vue_type_script_setup_true_lang-0b4f9f7f.js","assets/index-b75e268d.js","assets/index-a964bbb1.css"])),{toastSuccess:i}=g(),s=u(!1),d=c=>{s.value=!0,n.defaults.timeout=1e3*30,n.post("setup/load-default-setup").then(a=>i(a.data.message)).finally(()=>s.value=!1)};return(c,a)=>(t(),o("div",v,[y,s.value?(t(),o("div",b,[_(f(r),{message:"Cargando datos por defecto ..."})])):(t(),o("button",{key:0,type:"button",onClick:p(d,["prevent"]),class:"mt-4 px-2 py-1 border border-sky-800 bg-sky-800 text-white rounded-sm transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Cargar datos "))]))}});export{w as default};
