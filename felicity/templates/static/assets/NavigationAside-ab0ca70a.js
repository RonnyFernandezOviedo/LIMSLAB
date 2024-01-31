import{d as b,r as y,a as v,o as g,c as m,b as t,e as o,w as r,n as c,u as s,f as a,v as l,g as d,p,h as u,i as w,j as k,k as N,_ as S}from"./index-60c5f486.js";const _=h=>(k("data-v-c7a1346d"),h=h(),N(),h),A={class:"mx-auto flex flex-col items-center h-full"},C={class:"flex-none relative"},T={id:"aside-nav",class:"",role:"navigation"},I={class:"mr-4"},E={class:"tooltip"},P={class:"mr-4"},R={class:"tooltip"},j={class:"mr-4"},M={class:"tooltip"},O={class:"mr-4"},V={class:"tooltip"},B={class:"mr-4"},H={class:"tooltip"},D={class:"mr-4"},L={class:"tooltip"},z={class:"mr-4"},F={class:"tooltip"},G={class:"mr-4"},K={class:"tooltip"},W=_(()=>t("div",{class:"flex-grow"},null,-1)),Y={key:0,id:"asideFooter",class:"flex-none bg-gray-700 text-center text-gray-100 p-4"},$=_(()=>t("hr",null,null,-1)),q=_(()=>t("span",null,"© 2023 ",-1)),J=_(()=>t("hr",null,null,-1)),Q=b({__name:"NavigationAside",setup(h){let e=y(!1);function f(){e.value=!e.value}return(U,x)=>{const i=v("font-awesome-icon"),n=v("router-link");return g(),m("div",A,[t("div",C,[t("div",{class:"absolute -right-6 top-2 text-2xl cursor-pointer",onClick:x[0]||(x[0]=X=>f())},[o(i,{icon:"bars"})]),o(n,{to:"/",id:"brand",class:"flex items-center md:w-auto pl-6 pt-2 pb-1 text-white"},{default:r(()=>[o(i,{icon:"xxxxxmeteorxxx",class:"text-3xl"}),t("h1",{class:c(["text-left text-2xl font-medium mx-2 transition-all duration-500",s(e)?"scale-100":"scale-0 w-0 overflow-hidden"])}," Laboratorio",2)]),_:1}),t("nav",T,[a(o(n,{to:"/dashboard",id:"dashboard-link",class:"flex items-center has-tooltip mt-1 p-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:r(()=>[t("span",I,[o(i,{icon:"tachometer-alt"})]),t("span",{class:c([" transition-all duration-500",s(e)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Panel",2),a(t("span",E,"Panel",512),[[l,!s(e)]])]),_:1},512),[[l,d(p.DASHBOARD)]]),a(o(n,{to:"/patients-compact",id:"patients-compact-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:r(()=>[t("span",P,[o(i,{icon:"bullseye"})]),t("span",{class:c([" transition-all duration-500",s(e)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Resumen",2),a(t("span",R,"Resumen",512),[[l,!s(e)]])]),_:1},512),[[l,d(p.PATIENTS_COMPACT)]]),a(o(n,{to:"/patients",id:"patients-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:r(()=>[t("span",j,[o(i,{icon:"atom"})]),t("span",{class:c([" transition-all duration-500",s(e)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Solicitud",2),a(t("span",M,"Solicitud",512),[[l,!s(e)]])]),_:1},512),[[l,d(p.PATIENTS)]]),a(o(n,{to:"/clients",id:"clients-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:r(()=>[t("span",O,[o(i,{icon:"contact-book"})]),t("span",{class:c([" transition-all duration-500",s(e)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Clientes",2),a(t("span",V,"Clientes",512),[[l,!s(e)]])]),_:1},512),[[l,d(p.CLIENTS)]]),a(o(n,{to:"/samples",id:"samples-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:r(()=>[t("span",B,[o(i,{icon:"vial"})]),t("span",{class:c([" transition-all duration-500",s(e)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Muestras",2),a(t("span",H,"Muestras",512),[[l,!s(e)]])]),_:1},512),[[l,d(p.SAMPLES)]]),a(o(n,{to:"/worksheets",id:"worksheets-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:r(()=>[t("span",D,[o(i,{icon:"grip-vertical"})]),t("span",{class:c([" transition-all duration-500",s(e)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Hoja trabajo",2),a(t("span",L,"Hoja trabajo",512),[[l,!s(e)]])]),_:1},512),[[l,d(p.WORKSHEETS)]]),a(o(n,{to:"/notice-manager",id:"notice-manager-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:r(()=>[t("span",z,[o(i,{icon:"bell"})]),t("span",{class:c([" transition-all duration-500",s(e)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Notificaciones",2),a(t("span",F,"Notificaciones",512),[[l,!s(e)]])]),_:1},512),[[l,d(p.NOTICE_MANAGER)]]),a(o(n,{to:"/inventory",id:"inventory-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:r(()=>[t("span",G,[o(i,{icon:"fa-solid fa-boxes-stacked"})]),t("span",{class:c([" transition-all duration-500",s(e)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Inventario",2),a(t("span",K,"Inventario",512),[[l,!s(e)]])]),_:1},512),[[l,d(p.INVENTORY)]])])]),W,s(e)?(g(),m("footer",Y,[$,q,u("| "),o(n,{to:"/about",class:"text-gray-200"},{default:r(()=>[u(" About")]),_:1}),J])):w("",!0)])}}});const tt=S(Q,[["__scopeId","data-v-c7a1346d"]]);export{tt as default};