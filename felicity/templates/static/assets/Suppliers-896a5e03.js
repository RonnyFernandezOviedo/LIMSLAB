import{d as E,S as I,r as u,Q as A,t as P,o as c,c as _,b as e,F as y,y as R,x as b,u as r,N as V,w as g,f as v,H as x,G as B,I as M,i as N,z as O,A as T,j as U,k as F,B as L,_ as $}from"./index-b75e268d.js";import{e as j,f as G}from"./instrument.mutations-ca74a470.js";const l=i=>(U("data-v-57b5e78f"),i=i(),F(),i),z={class:"container w-full my-4"},H=l(()=>e("hr",null,null,-1)),Q=l(()=>e("hr",null,null,-1)),q={class:"overflow-x-auto mt-4"},J={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},K={class:"min-w-full"},W=l(()=>e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Proveedor"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Descripcion"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1)),X={class:"bg-white"},Y={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Z={class:"flex items-center"},ee={class:"text-sm leading-5 text-gray-800"},te={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},se={class:"text-sm leading-5 text-sky-800"},oe={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},ne=["onClick"],re={action:"post",class:"p-1"},ae={class:"grid grid-cols-2 gap-x-4 mb-4"},le={class:"block col-span-1 mb-2"},ie=l(()=>e("span",{class:"text-gray-700"},"Nombre",-1)),de={class:"block col-span-2 mb-2"},ce=l(()=>e("span",{class:"text-gray-700"},"Descripcion",-1)),pe=l(()=>e("hr",null,null,-1)),ue=E({__name:"Suppliers",setup(i){const w=O(()=>T(()=>import("./SimpleModal-95440dc3.js"),["assets/SimpleModal-95440dc3.js","assets/index-b75e268d.js","assets/index-a964bbb1.css","assets/SimpleModal-98e7299b.css"])),d=I(),{withClientMutation:m}=L();let a=u(!1),h=u(""),s=A({});const p=u(!0);d.fetchSuppliers();const k=P(()=>d.getSuppliers);function S(){const n={name:s.name,description:s.description};m(j,{payload:n},"createSupplier").then(t=>d.addSupplier(t))}function C(){const n={name:s.name,description:s.description};m(G,{uid:s.uid,payload:n},"updateSupplier").then(t=>d.updateSupplier(t))}function f(n,t={}){p.value=n,a.value=!0,h.value=(n?"CREAR":"EDITAR")+" PROVEEDOR",n?Object.assign(s,{}):Object.assign(s,{...t})}function D(){p.value===!0&&S(),p.value===!1&&C(),a.value=!1}return(n,t)=>(c(),_(y,null,[e("div",z,[H,e("button",{onClick:t[0]||(t[0]=o=>f(!0)),class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Agregar Proveedor"),Q,e("div",q,[e("div",J,[e("table",K,[W,e("tbody",X,[(c(!0),_(y,null,R(k.value,o=>(c(),_("tr",{key:o?.uid},[e("td",Y,[e("div",Z,[e("div",null,[e("div",ee,b(o?.name),1)])])]),e("td",te,[e("div",se,b(o?.description),1)]),e("td",oe,[e("button",{onClick:_e=>f(!1,o),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Editar",8,ne)])]))),128))])])])])]),r(a)?(c(),V(r(w),{key:0,onClose:t[4]||(t[4]=o=>M(a)?a.value=!1:a=!1)},{header:g(()=>[e("h3",null,b(r(h)),1)]),body:g(()=>[e("form",re,[e("div",ae,[e("label",le,[ie,v(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=o=>r(s).name=o),placeholder:"Nombre ..."},null,512),[[x,r(s).name]])]),e("label",de,[ce,v(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[2]||(t[2]=o=>r(s).description=o),placeholder:"Descripcion ..."},null,512),[[x,r(s).description]])])]),pe,e("button",{type:"button",onClick:t[3]||(t[3]=B(o=>D(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Guardar forma ")])]),_:1})):N("",!0)],64))}});const he=$(ue,[["__scopeId","data-v-57b5e78f"]]);export{he as default};
