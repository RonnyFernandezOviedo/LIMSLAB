import{d as I,a9 as D,S as N,r as c,Q as O,t as y,o as l,c as u,b as e,F as b,y as R,x as i,u as n,N as B,w as g,e as T,I as x,i as V,z as f,A as v}from"./index-60c5f486.js";const j={class:""},F={class:"container w-full my-4"},L=e("hr",null,null,-1),P=e("hr",null,null,-1),$=e("hr",null,null,-1),U={class:"overflow-x-auto mt-4"},z={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},Q={class:"min-w-full"},q=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Nombre"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Instrumento"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Analisis"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),G={class:"bg-white"},H={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},J={class:"text-sm leading-5 text-gray-800"},K={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},W={class:"text-sm leading-5 text-gray-800"},X={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Y={class:"text-sm leading-5 text-sky-800"},Z={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},ee=["onClick"],oe=I({__name:"Methods",setup(te){const w=f(()=>v(()=>import("./SimpleModal-72c52623.js"),["assets/SimpleModal-72c52623.js","assets/index-60c5f486.js","assets/index-a964bbb1.css","assets/SimpleModal-98e7299b.css"])),k=f(()=>v(()=>import("./MethodForm-e6a8ec16.js"),["assets/MethodForm-e6a8ec16.js","assets/index-60c5f486.js","assets/index-a964bbb1.css","assets/instrument.mutations-2f939f87.js","assets/vue-multiselect-a538cd7c.css"])),h=D(),_=N();let o=c(!1),m=c("");const A=c(!0);let a=O({});const S={first:1e3,after:"",text:"",sortBy:["name"]};h.fetchAnalysesServices(S);const E=y(()=>h.getAnalysesServicesSimple);_.fetchMethods();const C=y(()=>_.getMethods);function p(r,t={}){A.value=r,o.value=!0,m.value=(r?"CREAR":"EDITAR")+" METODO DE ANALISIS",r?Object.assign(a,{}):Object.assign(a,{...t})}function M(r){let t=[];return E.value?.forEach(s=>{s?.methods?.some(d=>d.uid==r?.uid)&&t.push(s?.name)}),t.join(", ")}return(r,t)=>(l(),u(b,null,[e("div",j,[e("div",F,[L,e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:t[0]||(t[0]=s=>p(!0))}," Agregar Metodo"),P]),$,e("div",U,[e("div",z,[e("table",Q,[q,e("tbody",G,[(l(!0),u(b,null,R(C.value,s=>(l(),u("tr",{key:s?.uid},[e("td",H,[e("div",J,i(s?.name),1)]),e("td",K,[e("div",W,i(s?.instruments?.map(d=>d?.name)?.join(",")),1)]),e("td",X,[e("div",Y,i(M(s)),1)]),e("td",Z,[e("button",{onClick:d=>p(!1,s),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Editar",8,ee)])]))),128))])])])])]),n(o)?(l(),B(n(w),{key:0,onClose:t[2]||(t[2]=s=>x(o)?o.value=!1:o=!1)},{header:g(()=>[e("h3",null,i(n(m)),1)]),body:g(()=>[T(n(k),{method:n(a),methodUid:n(a)?.uid,onClose:t[1]||(t[1]=s=>x(o)?o.value=!1:o=!1)},null,8,["method","methodUid"])]),_:1})):V("",!0)],64))}});export{oe as default};
