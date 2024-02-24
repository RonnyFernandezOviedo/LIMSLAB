import{d as k,af as P,O as j,L as C,a as _,M as D,f as d,o as n,c as i,u as s,e as c,b as t,x as o,aq as I,v as x,w as N,F as T,y as A,z as E,A as O}from"./index-b75e268d.js";import{h as S,o as U,a as B}from"./constants-9fdeb32f.js";const L={class:"bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-4 sm:px-6 md:px-2 py-4"},R={key:0,class:"py-4 text-center"},M={key:1,class:"grid grid-cols-12 gap-3"},V={class:"sm:col-span-2 text-center hidden sm:block"},F={class:"inline-block font-bold text-medium mb-2"},q={class:"flex flex-col items-center justify-center mx-auto py-2 w-4/5 2lg:w-3/5 rounded-sm bg-sky-800"},z={class:"inline-block font-semibold text-white text-sm lg:text-md"},Y={class:"inline-block font-bold text-2xl text-white my-2"},$=t("div",{class:"inline-block font-semibold text-white text-sm lg:text-md"}," Yrs Old ",-1),G={class:"col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0"},H={class:"flex justify-between sm:text-sm md:text-md lg:text-lg"},J={class:"font-bold text-gray-800"},K={class:"font-medium text-md"},Q=t("hr",null,null,-1),W={class:"grid grid-cols-3 gap-x-8 mt-2"},X={class:"col-span-1"},Z=t("h1",{class:"uppercase text-sm font-semibold"},"informacion cliente",-1),tt=t("hr",{class:"my-1"},null,-1),st={class:"flex justify-between items-center mt-2"},et=t("span",{class:"text-gray-800 text-sm font-semibold"},"Pais",-1),ot={class:"text-gray-600 text-sm md:text-md"},nt={class:"flex justify-between items-center mt-2"},it=t("span",{class:"text-gray-800 text-sm font-semibold"},"Provincia:",-1),at={class:"text-gray-600 text-sm md:text-md"},ct={class:"flex justify-between items-center mt-2"},dt=t("span",{class:"text-gray-800 text-sm font-semibold"},"Distrito: ",-1),lt={class:"text-gray-600 text-sm md:text-md"},mt={class:"col-span-1"},rt=t("h1",{class:"uppercase text-sm font-semibold"},"Contacto",-1),_t=t("hr",{class:"my-1"},null,-1),xt={class:"flex justify-between items-center mt-2"},pt=t("span",{class:"text-gray-800 text-sm font-semibold"},"Nombre",-1),ht={class:"text-gray-600 text-sm md:text-md"},ft={class:"flex justify-between items-center mt-2"},ut=t("span",{class:"text-gray-800 text-sm font-semibold"},"Distrito:",-1),yt={class:"text-gray-600 text-sm md:text-md"},gt={class:"flex justify-between items-center mt-2"},bt=t("span",{class:"text-gray-800 text-sm font-semibold"},"Provincia: ",-1),vt={class:"text-gray-600 text-sm md:text-md"},wt={class:"col-span-1 mr-2"},kt=t("h1",{class:"uppercase text-sm font-semibold"},"Informacion",-1),Pt=t("hr",{class:"my-1"},null,-1),jt={class:"flex justify-between items-center mt-2"},Ct=t("span",{class:"text-gray-800 whitespace-nowrap text-sm font-semibold"},"Contacto Cliente ID: ",-1),Dt={class:"text-gray-600 text-sm md:text-md"},It={class:"flex justify-between items-center mt-2"},Nt=t("span",{class:"text-gray-800 whitespace-nowrap text-sm font-semibold"},"Telefono: ",-1),Tt={class:"text-gray-600 text-sm md:text-md"},At={class:"flex justify-between items-center mt-2"},Et=t("span",{class:"text-gray-800 whitespace-nowrap text-sm font-semibold"},"Correo: ",-1),Ot={class:"text-gray-600 text-sm md:text-md"},St={class:"text-gray-800 whitespace-nowrap text-sm font-semibold"},Ut={class:"text-gray-600 text-sm md:text-md"},Mt=k({__name:"PatientInfo",emits:["editPatient"],setup(Bt,{emit:p}){const h=E(()=>O(()=>import("./LoadingMessage-14be4887.js"),["assets/LoadingMessage-14be4887.js","assets/LoadingMessage.vue_vue_type_script_setup_true_lang-0b4f9f7f.js","assets/index-b75e268d.js","assets/index-a964bbb1.css"])),f=P(),u=j(),{patient:e,fetchingPatient:y}=C(u),g=p,b=l=>{g("editPatient",l)};return(l,m)=>{const r=_("font-awesome-icon"),v=_("router-link"),w=D("motion-slide-top");return d((n(),i("div",L,[s(y)?(n(),i("div",R,[c(s(h),{message:"Obteniendo informacion de Solicitud ..."})])):(n(),i("div",M,[t("div",V,[t("div",F,o(s(e)?.patientId),1),t("div",q,[t("div",z,o(s(e)?.gender),1),t("div",Y,o(s(e)?.age),1),$])]),t("div",G,[t("div",H,[t("span",J,o(s(e)?.client?.name?.toUpperCase()),1),t("div",null,[t("span",K,o(s(I)(s(e)?.dateOfBirth,!1)),1),d(t("button",{onClick:m[0]||(m[0]=a=>b(s(e))),class:"p-1 ml-2 border-white border text-gray-500 text-md rounded-sm transition duration-300 hover:text-sky-800 focus:outline-none"},[c(r,{icon:"fa-edit"})],512),[[x,S(B.UPDATE,U.PATIENT)]]),d(c(v,{to:{name:"patient-detail",params:{patientUid:s(e)?.uid}},class:"p-1 ml-2 border-white border text-gray-500 rounded-sm transition duration-300 hover:text-sky-800 focus:outline-none"},{default:N(()=>[c(r,{icon:"fa-left-right"})]),_:1},8,["to"]),[[x,s(f).fullPath.includes("patients-compact")]])])]),Q,t("div",W,[t("div",X,[Z,tt,t("div",st,[et,t("span",ot,o(s(e)?.client?.district?.province?.country?.name),1)]),t("div",nt,[it,t("span",at,o(s(e)?.client?.district?.province?.name),1)]),t("div",ct,[dt,t("span",lt,o(s(e)?.client?.district?.name),1)])]),t("div",mt,[rt,_t,t("div",xt,[pt,t("span",ht,o(s(e)?.firstName?.toUpperCase())+" "+o(s(e)?.lastName?.toUpperCase()),1)]),t("div",ft,[ut,t("span",yt,o(s(e)?.district.name),1)]),t("div",gt,[bt,t("span",vt,o(s(e)?.province?.name),1)])]),t("div",wt,[kt,Pt,t("div",jt,[Ct,t("span",Dt,o(s(e)?.clientPatientId),1)]),t("div",It,[Nt,t("span",Tt,o(s(e)?.phoneMobile),1)]),t("div",At,[Et,t("span",Ot,o(s(e)?.gender),1)]),(n(!0),i(T,null,A(s(e)?.identifications,a=>(n(),i("div",{class:"flex justify-between items-center mt-2",key:a.uid},[t("span",St,o(a?.identification?.name)+": ",1),t("span",Ut,o(a?.value),1)]))),128))])])])]))])),[[w]])}}});export{Mt as default};
