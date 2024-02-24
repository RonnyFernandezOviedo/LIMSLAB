import{d as D,ak as P,af as R,L as B,r as b,o as r,c as m,b as e,f as c,v as C,F as T,y as A,x as u,h as j,u as s,e as q,i as h,N as g,w as $,H as x,G as z,I,B as G,t as U,n as H}from"./index-7fd050f3.js";import{_ as J}from"./SampleListing.vue_vue_type_script_setup_true_lang-b0b90b68.js";import{_ as K}from"./LoadingMessage.vue_vue_type_script_setup_true_lang-24b3949b.js";import Q from"./SimpleModal-69d6f98e.js";import{D as W,a as X,b as Y}from"./clients.mutations-77d688a9.js";import{h as v,o as k,a as w}from"./constants-df8aad36.js";import{_ as Z}from"./AuditLog.vue_vue_type_script_setup_true_lang-70f3131f.js";import"./samples-2ce6afc0.js";const ee={class:"overflow-x-auto"},te={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},oe={class:"min-w-full"},se=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Full Name "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Email "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Phone "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),ae={class:"bg-white"},le={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ne={class:"flex items-center"},ie={class:"text-sm leading-5 text-gray-800"},re={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},de={class:"text-sm leading-5 text-sky-800"},ce={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ue={class:"text-sm leading-5 text-sky-800"},me={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},pe=["onClick"],be=["onClick"],he={key:0,class:"py-4 text-center"},_e={action:"post",class:"p-1"},fe={class:"grid grid-cols-2 gap-x-4 mb-4"},ge={class:"block col-span-1 mb-2"},ye=e("span",{class:"text-gray-700"},"Full Name",-1),Ce={class:"block col-span-1 mb-2"},xe=e("span",{class:"text-gray-700"},"Email",-1),ve={class:"block col-span-1 mb-2"},ke=e("span",{class:"text-gray-700"},"Mobile Phone",-1),we=e("hr",null,null,-1),Te=D({__name:"ContactTable",props:{clientUid:String},setup(F){let d=P(),l=R();const{withClientMutation:p}=G(),{clientContacts:_,fetchingClientContacts:N}=B(d);let y=b(""),n=b(!1),f=b(!1),a=b({});d.fetchClientContacts(l.query.clientUid);function L(){p(X,{payload:{clientUid:l.query.clientUid,firstName:a.value.firstName,mobilePhone:a.value.mobilePhone,email:a.value.email}},"createClientContact").then(i=>d.addClientContact(i))}function M(){p(Y,{uid:a.value.uid,payload:{clientUid:l.query.clientUid,firstName:a.value.firstName,mobilePhone:a.value.mobilePhone,email:a.value.email}},"updateClientContact").then(i=>d.updateClientContact(i))}function E(i,t={}){f.value=i,y.value=(i?"CREATE":"EDIT")+" CONTACT",n.value=!0,i?Object.assign(a,{}):Object.assign(a.value,{...t})}function S(){f.value===!0&&L(),f.value||M(),n.value=!1}function V(i){p(W,{uid:i},"deleteClientContact").then(t=>d.deleteClientContact(t?.uid))}return(i,t)=>(r(),m(T,null,[e("div",ee,[c(e("button",{onClick:t[0]||(t[0]=o=>E(!0)),class:"px-1 py-0 mb-4 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add Contact ",512),[[C,v(w.CREATE,k.CLIENT)]]),e("div",te,[e("table",oe,[se,e("tbody",ae,[(r(!0),m(T,null,A(s(_),o=>(r(),m("tr",{key:o.uid},[e("td",le,[e("div",ne,[e("div",null,[e("div",ie,u(o.firstName)+" "+u(o.lastName),1)])])]),e("td",re,[e("div",de,u(o.email),1)]),e("td",ce,[e("div",ue,u(o.mobilePhone),1)]),e("td",me,[c(e("button",{onClick:O=>E(!1,o),class:"px-2 py-1 mr-2 border-gray-500 border text-orange-500rounded-smtransition duration-300 hover:bg-gray-700 hover:text-white focus:outline-none"}," Edit ",8,pe),[[C,v(w.UPDATE,k.CLIENT)]]),j(),c(e("button",{onClick:O=>V(o?.uid),class:"px-2 py-1 mr-2 border-orange-500 border text-orange-500rounded-smtransition duration-300 hover:bg-orange-700 hover:text-white focus:outline-none"}," Deactivate ",8,be),[[C,v(w.UPDATE,k.CLIENT)]])])]))),128))])]),s(N)?(r(),m("div",he,[q(K,{message:"Fetching client contacts ..."})])):h("",!0)])]),s(n)?(r(),g(Q,{key:0,onClose:t[5]||(t[5]=o=>I(n)?n.value=!1:n=!1)},{header:$(()=>[e("h3",null,u(s(y)),1)]),body:$(()=>[e("form",_e,[e("div",fe,[e("label",ge,[ye,c(e("input",{class:"form-input mt-1 block w-full",autocomplete:"off","onUpdate:modelValue":t[1]||(t[1]=o=>s(a).firstName=o),placeholder:"Full Name ..."},null,512),[[x,s(a).firstName]])]),e("label",Ce,[xe,c(e("input",{class:"form-input mt-1 block w-full",autocomplete:"off","onUpdate:modelValue":t[2]||(t[2]=o=>s(a).email=o),placeholder:"Email ..."},null,512),[[x,s(a).email]])]),e("label",ve,[ke,c(e("input",{class:"form-input mt-1 block w-full",autocomplete:"off","onUpdate:modelValue":t[3]||(t[3]=o=>s(a).mobilePhone=o),placeholder:"Mobile Phone ..."},null,512),[[x,s(a).mobilePhone]])])]),we,e("button",{type:"button",onClick:t[4]||(t[4]=z(o=>S(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):h("",!0)],64))}}),Ne={class:"col-span-12"},Ee={class:"bg-white shadow-md mt-2"},$e={class:"-mb-px flex justify-start"},Ue=["onClick"],De={class:"pt-4"},Oe=D({__name:"ClientDetail",setup(F){const d=P();let l=b("samples");const p=["samples","contacts","logs"];U(()=>"tab-"+l.value);let _=U(()=>d.getClient);return(N,y)=>(r(),m("section",Ne,[e("nav",Ee,[e("div",$e,[(r(),m(T,null,A(p,n=>e("a",{key:n,class:H(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":s(l)===n}]),onClick:f=>I(l)?l.value=n:l=n},u(n),11,Ue)),64))])]),e("div",De,[s(l)==="samples"?(r(),g(J,{key:0})):h("",!0),s(l)==="contacts"?(r(),g(Te,{key:1,clientUid:s(_)?.uid},null,8,["clientUid"])):h("",!0),s(l)==="logs"?(r(),g(Z,{key:2,targetType:"client",targetId:s(_)?.uid},null,8,["targetId"])):h("",!0)])]))}});export{Oe as default};