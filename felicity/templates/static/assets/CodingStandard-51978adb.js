import{d as k,a9 as C,r as c,Q as D,t as A,o as i,c as u,b as e,F as h,y as S,x as p,u as a,N,w as g,f,H as y,G as E,I as R,i as T,z as I,A as O,bM as M,bN as B,B as F}from"./index-b75e268d.js";const V={class:"container w-full my-4"},G=e("hr",null,null,-1),$=e("hr",null,null,-1),U={class:"overflow-x-auto mt-4"},j={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},L={class:"min-w-full"},P=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Estandar"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Descripcion"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),z={class:"bg-white"},H={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Q={class:"flex items-center"},q={class:"text-sm leading-5 text-gray-800"},J={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},K={class:"text-sm leading-5 text-sky-800"},W={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},X=["onClick"],Y={action:"post",class:"p-1"},Z={class:"grid grid-cols-2 gap-x-4 mb-4"},ee={class:"block col-span-1 mb-2"},te=e("span",{class:"text-gray-700"},"Nombre estandar",-1),se={class:"block col-span-2 mb-2"},oe=e("span",{class:"text-gray-700"},"Descripcion",-1),ne=e("hr",null,null,-1),ie=k({__name:"CodingStandard",setup(ae){const x=I(()=>O(()=>import("./SimpleModal-95440dc3.js"),["assets/SimpleModal-95440dc3.js","assets/index-b75e268d.js","assets/index-a964bbb1.css","assets/SimpleModal-98e7299b.css"])),l=C(),{withClientMutation:b}=F();let r=c(!1),_=c(""),o=D({});const d=c(!0);l.fetchCodingStandards();const v=A(()=>l.getCodingStandards);function m(n,t={}){d.value=n,r.value=!0,_.value=(n?"CREAR":"EDITAR")+" CODIGO ESTANDAR",n?Object.assign(o,{}):Object.assign(o,{...t})}function w(){const n={name:o.name,description:o.description};d.value===!0&&b(M,{payload:n},"createCodingStandard").then(t=>l.addCodingStandard(t)),d.value===!1&&b(B,{uid:o.uid,payload:n},"updateCodingStandard").then(t=>l.updateCodingStandard(t)),r.value=!1}return(n,t)=>(i(),u(h,null,[e("div",V,[G,e("button",{onClick:t[0]||(t[0]=s=>m(!0)),class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Agregar Codigo"),$,e("div",U,[e("div",j,[e("table",L,[P,e("tbody",z,[(i(!0),u(h,null,S(v.value,s=>(i(),u("tr",{key:s?.uid},[e("td",H,[e("div",Q,[e("div",null,[e("div",q,p(s?.name),1)])])]),e("td",J,[e("div",K,p(s?.description),1)]),e("td",W,[e("button",{onClick:re=>m(!1,s),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Editar",8,X)])]))),128))])])])])]),a(r)?(i(),N(a(x),{key:0,onClose:t[4]||(t[4]=s=>R(r)?r.value=!1:r=!1)},{header:g(()=>[e("h3",null,p(a(_)),1)]),body:g(()=>[e("form",Y,[e("div",Z,[e("label",ee,[te,f(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=s=>a(o).name=s),placeholder:"Nombre ..."},null,512),[[y,a(o).name]])]),e("label",se,[oe,f(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[2]||(t[2]=s=>a(o).description=s),placeholder:"Descripcion ..."},null,512),[[y,a(o).description]])])]),ne,e("button",{type:"button",onClick:t[3]||(t[3]=E(s=>w(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):T("",!0)],64))}});export{ie as default};