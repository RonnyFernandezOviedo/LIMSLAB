import{d as y,a9 as R,Q as g,t as w,o as r,c as i,b as e,F as c,y as x,x as u,N as v,w as f,f as k,H as A,G as C,u as E,i as M,z as T,A as j,bI as N,bJ as z,B as D}from"./index-7e8465c2.js";const I={class:"container w-full my-4"},O=e("hr",null,null,-1),B=e("hr",null,null,-1),S={class:"overflow-x-auto mt-4"},F={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},V={class:"min-w-full"},$=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Razon"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),G={class:"bg-white"},J={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},L={class:"flex items-center"},P={class:"text-sm leading-5 text-gray-800"},Q={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},U=["onClick"],H={action:"post",class:"p-1"},q={class:"grid grid-cols-2 gap-x-4 mb-4"},K={class:"block col-span-2 mb-2"},W=e("span",{class:"text-gray-700"},"Razon de rechazo",-1),X=e("hr",null,null,-1),oe=y({__name:"RejectionReasons",setup(Y){const h=T(()=>j(()=>import("./SimpleModal-16734371.js"),["assets/SimpleModal-16734371.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/SimpleModal-98e7299b.css"])),a=R(),{withClientMutation:l}=D(),o=g({showModal:!1,formTitle:"",form:{},formAction:!1});a.fetchRejectionReasons();const m=w(()=>a.getRejectionReasons);function _(){l(N,{reason:o.form.reason},"createRejectionReason").then(s=>a.addRejectionReason(s))}function p(){l(z,{uid:o.form.uid,reason:o.form.reason},"updateRejectionReason").then(s=>a.updateRejectionReason(s))}function d(s,t={}){o.formAction=s,o.showModal=!0,o.formTitle=(s?"CREAR":"EDITAR")+" RANGO QC",s?o.form={}:o.form={...t}}function b(){o.formAction===!0&&_(),o.formAction===!1&&p(),o.showModal=!1}return(s,t)=>(r(),i(c,null,[e("div",I,[O,e("button",{onClick:t[0]||(t[0]=n=>d(!0)),class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Agregar razon de rechazo"),B,e("div",S,[e("div",F,[e("table",V,[$,e("tbody",G,[(r(!0),i(c,null,x(m.value,n=>(r(),i("tr",{key:n?.uid},[e("td",J,[e("div",L,[e("div",null,[e("div",P,u(n?.reason),1)])])]),e("td",Q,[e("button",{onClick:Z=>d(!1,n),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Editar",8,U)])]))),128))])])])])]),o.showModal?(r(),v(E(h),{key:0,onClose:t[3]||(t[3]=n=>o.showModal=!1)},{header:f(()=>[e("h3",null,u(o.formTitle),1)]),body:f(()=>[e("form",H,[e("div",q,[e("label",K,[W,k(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=n=>o.form.reason=n),placeholder:"Razon ..."},null,512),[[A,o.form.reason]])])]),X,e("button",{type:"button",onClick:t[2]||(t[2]=C(n=>b(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Guardar forma ")])]),_:1})):M("",!0)],64))}});export{oe as default};