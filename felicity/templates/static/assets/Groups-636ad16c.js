import{d as z,aI as F,t as P,r as f,Q as H,o as a,c as r,b as e,F as u,y as h,G as w,n as y,u as i,x as d,I as T,e as Q,w as v,h as S,f as b,ab as M,i as R,N as K,H as W,aa as q,z as N,A as O,p as c,bn as J,bo as X,bp as Y,B as Z}from"./index-b75e268d.js";const ee={class:""},se={class:"container w-full my-4"},te=e("hr",null,null,-1),oe=e("hr",null,null,-1),ne=e("hr",null,null,-1),le={class:"grid grid-cols-12 gap-4 mt-2"},ie={class:"col-span-3 overflow-y-scroll overscroll-contain patient-scrol"},ae=["onClick"],re={class:"cursor-pointer"},ce={class:"flex-grow p-1"},de={class:"font-medium text-gray-800 hover:text-gray-600 flex justify-between"},ue=e("span",{class:"text-sm text-gray-500"},null,-1),_e={key:0,class:"col-span-9"},pe={class:"bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-4 sm:px-6 md:px-2 py-4"},he={class:"grid grid-cols-12 gap-3"},me={class:"col-span-12 px-3 sm:px-0"},ge={class:"flex justify-between"},fe={class:"sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold"},ve=e("hr",null,null,-1),be={div:"",class:"flex justify-start mt-2"},ye=e("h3",{class:"mr-2 text-gray-600 font-semibold"},"Secciones: ",-1),xe=e("svg",{class:"w-4 h-4 fill-current",viewBox:"0 0 20 20"},[e("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})],-1),ke=[xe],we={class:"bg-white shadow-md mt-2"},Ae={class:"-mb-px flex justify-start"},Ce=["onClick"],Ee={class:"mt-2 p-2 bg-white"},Ge={key:0},Pe={class:"col-span-4 overflow-y-scroll overscroll-contain analyses-scroll bg-white p-1"},Te={class:"grid grid-cols-4 gap-2 w-full"},Se=["onClick"],Me={class:"flex-grow p-1"},Re={class:y(["font-medium text-gray-500 hover:text-gray-700 flex justify-start",{"text-gray-700 font-medium":!1}])},Ne=["onClick"],Oe={class:"inline-block w-10 mr-2 align-middle transition duration-200 ease-in"},Ue=["onUpdate:modelValue"],Ie=e("hr",null,null,-1),De={key:1},Ve=e("h3",null,"Error",-1),je=e("hr",null,null,-1),Le=[Ve,je],$e={action:"post",class:"p-1"},Be={class:"grid grid-cols-2 gap-x-4 mb-4"},ze={class:"block col-span-2 mb-2"},Fe=e("span",{class:"text-gray-700"},"Nombre Grupo",-1),He={class:"block col-span-2 mb-2"},Qe=e("span",{class:"text-gray-700"},"Secciones",-1),Ke=["size"],We=["value"],qe={for:"toggle",class:"text-xs text-gray-700 mr-4"},Je={class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},Xe=e("label",{for:"toggle",class:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"},null,-1),Ye=e("hr",null,null,-1),ss=z({__name:"Groups",setup(Ze){const U=N(()=>O(()=>import("./SimpleModal-95440dc3.js"),["assets/SimpleModal-95440dc3.js","assets/index-b75e268d.js","assets/index-a964bbb1.css","assets/SimpleModal-98e7299b.css"])),I=N(()=>O(()=>import("./Accordion-18df3862.js"),["assets/Accordion-18df3862.js","assets/index-b75e268d.js","assets/index-a964bbb1.css"])),A=[c.ADMINISTRATION,c.DASHBOARD,c.CLIENTS,c.PATIENTS,c.PATIENTS_COMPACT,c.SAMPLES,c.QC_SAMPLES,c.WORKSHEETS,c.NOTICE_MANAGER];let _=F();const{withClientMutation:x}=Z();_.fetchGroupsAndPermissions();const D=P(()=>_.getGroups);let m=f("permissions");const V=["permissions"];let p=f(!1),C=f("");const k=f(!0);let o=H({});function j(n){const t=n.pages;Object.assign(o,{...n,pages:t?.split(",")||[]}),G.value?.forEach(s=>{s[1].forEach(l=>{l.checked=!1,o.permissions?.some(g=>g?.uid==l?.uid||!1)&&(l.checked=!0)})})}function E(n,t={}){k.value=n,p.value=!0,C.value=(n?"CREAR":"EDITAR")+" PERFIL",n?Object.assign(o,{name:"",pages:[]}):Object.assign(o,{...t})}function L(){const n={...o},t=n.pages;n.pages=t.join(","),k.value===!0&&x(J,{payload:n},"createGroup").then(s=>_.addGroup(s)),k.value===!1&&x(X,{uid:o?.uid,payload:{name:n.name,pages:n.pages}},"updateGroup").then(s=>_.updateGroup(s)),p.value=!1}const $=(n,t)=>n?.reduce(function(s,l){return(s[l[t]]=s[l[t]]||[]).push(l),s},{}),G=P(()=>Array.from(Object.entries($(_.getPermissions,"target"))));function B(n,t){x(Y,{groupUid:n?.uid,permissionUid:t?.uid},"updateGroupPermissions").then(s=>_.updateGroupsAndPermissions(s))}return(n,t)=>(a(),r(u,null,[e("div",ee,[e("div",se,[te,e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:t[0]||(t[0]=s=>E(!0))},"Agregar Grupo"),oe]),ne,e("div",le,[e("section",ie,[e("ul",null,[(a(!0),r(u,null,h(D.value,s=>(a(),r("li",{key:s?.uid,onClick:w(l=>j(s),["prevent","stop"]),class:y(["bg-white shadow w-full p-1 mb-1 rounded-sm",{"border border-sky-800 bg-emerald-200":s?.uid===i(o)?.uid}])},[e("a",re,[e("div",ce,[e("div",de,[e("span",null,d(s?.name),1),ue])])])],10,ae))),128))])]),i(o)?.uid!==void 0?(a(),r("section",_e,[e("div",pe,[e("div",he,[e("div",me,[e("div",ge,[e("section",null,[e("h2",fe,d(i(o)?.name),1),ve,e("div",be,[ye,(a(!0),r(u,null,h(i(o)?.pages,s=>(a(),r("span",{key:s,class:"mr-2"},d(s?.toLowerCase()),1))),128))])]),e("div",null,[e("button",{onClick:t[1]||(t[1]=s=>E(!1)),class:"ml-4 inline-flex items-center justify-center w-8 h-8 mr-2 border-sky-800 border text-gray-900 transition-colors duration-150 bg-white rounded-full focus:outline-none hover:bg-gray-200"},ke)])])])])]),e("nav",we,[e("div",Ae,[(a(),r(u,null,h(V,s=>e("a",{key:s,class:y(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":i(m)===s}]),onClick:l=>T(m)?m.value=s:m=s},d(s),11,Ce)),64))])]),e("section",Ee,[i(m)==="permissions"?(a(),r("div",Ge,[e("section",Pe,[e("div",Te,[(a(!0),r(u,null,h(G.value,s=>(a(),r("div",{class:"col-span-1",key:s[0]},[Q(i(I),null,{title:v(()=>[S(d(s[0]),1)]),body:v(()=>[e("div",null,[e("ul",null,[(a(!0),r(u,null,h(s[1],l=>(a(),r("li",{key:l?.uid,class:y(["cursor-pointer",[{"border-sky-800 bg-gray-200 underline pl-3":!1}]]),onClick:w(g=>l.checked=!l?.checked,["prevent"])},[e("div",Me,[e("div",Re,[e("label",{for:"toggle",class:"text-xs text-gray-700 mr-2",onClick:g=>B(i(o),l)},[e("div",Oe,[b(e("input",{type:"checkbox","onUpdate:modelValue":g=>l.checked=g,class:""},null,8,Ue),[[M,l.checked]])]),e("span",null,d(l?.action),1)],8,Ne)])]),Ie],8,Se))),128))])])]),_:2},1024)]))),128))])])])):(a(),r("div",De,Le))])])):R("",!0)])]),i(p)?(a(),K(i(U),{key:0,onClose:t[6]||(t[6]=s=>T(p)?p.value=!1:p=!1)},{header:v(()=>[e("h3",null,d(i(C)),1)]),body:v(()=>[e("form",$e,[e("div",Be,[e("label",ze,[Fe,b(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[2]||(t[2]=s=>i(o).name=s),placeholder:"Name ..."},null,512),[[W,i(o).name]])]),e("label",He,[Qe,b(e("select",{name:"controlLevels",id:"controlLevels","onUpdate:modelValue":t[3]||(t[3]=s=>i(o).pages=s),class:"form-input mt-1 block w-full",multiple:"",size:A.length},[(a(),r(u,null,h(A,s=>e("option",{key:s,value:s},d(s),9,We)),64))],8,Ke),[[q,i(o).pages]])]),e("label",qe,[S("Activo "),e("div",Je,[b(e("input",{type:"checkbox",name:"toggle",id:"toggle","onUpdate:modelValue":t[4]||(t[4]=s=>i(o).active=s),class:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"},null,512),[[M,i(o).active]]),Xe])])]),Ye,e("button",{type:"button",onClick:t[5]||(t[5]=w(s=>L(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Guardar forma ")])]),_:1})):R("",!0)],64))}});export{ss as default};
