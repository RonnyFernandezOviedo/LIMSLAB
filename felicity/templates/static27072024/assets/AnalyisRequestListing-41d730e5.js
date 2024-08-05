import{d as R,ao as A,V as D,L as U,D as V,a as F,M as S,o as s,c as a,b as e,F as _,y as b,f as I,n as L,i as h,e as c,w as x,h as u,x as i,u as d,ak as N,z as q,A as B}from"./index-7e8465c2.js";const E={class:"overflow-x-auto mt-4"},M={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard p-2 rounded-bl-sm rounded-br-sm"},P={class:"min-w-full"},T=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"}),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"}," ID Muestra "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," ID Muestra Cliente "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Cliente "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Creado "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Creador "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Estado "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),z={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},O=e("i",{class:"fa fa-star"},null,-1),j=[O],G={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},H={class:"flex items-center"},J={class:"font-semibold"},K={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Q={class:"text-sm leading-5 text-sky-800"},W={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},X={class:"text-sm leading-5 text-sky-800"},Y={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Z={class:"text-sm leading-5 text-sky-800"},$={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ee={class:"text-sm leading-5 text-sky-800"},te={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},se={type:"button",class:"bg-cyan-600 text-white p-1 rounded-sm leading-none"},ae={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},re={key:0,class:"py-4 text-center"},ie=R({__name:"AnalyisRequestListing",props:{target:String,targetUid:String},setup(m){const f=q(()=>B(()=>import("./LoadingMessage-79e5e3e9.js"),["assets/LoadingMessage-79e5e3e9.js","assets/LoadingMessage.vue_vue_type_script_setup_true_lang-1ac11e1a.js","assets/index-7e8465c2.js","assets/index-fff21e38.css"])),p=m,{targetUid:y,target:n}=A(p),r=D(),{analysisRequests:w,fetchingAnalysisRequests:v}=U(r);return n?.value==="patient-samples"&&r.fetchAnalysisRequestsForPatient(y?.value),n?.value==="client-samples"&&r.fetchAnalysisRequestsForClient(y?.value),V(()=>p.targetUid,(l,k)=>{r.resetAnalysisRequests(),n?.value==="patient-samples"&&r.fetchAnalysisRequestsForPatient(l),n?.value==="client-samples"&&r.fetchAnalysisRequestsForClient(l)}),(l,k)=>{const g=F("router-link"),C=S("motion-slide-right");return s(),a("div",E,[e("div",M,[e("table",P,[T,(s(!0),a(_,null,b(d(w),o=>(s(),a("tbody",{class:"bg-white",key:o.uid},[(s(!0),a(_,null,b(o.samples,t=>I((s(),a("tr",{key:t.uid},[e("td",z,[t.priority??0<1?(s(),a("span",{key:0,class:L(["font-small",{"text-orange-600":t.priority??!0}])},j,2)):h("",!0)]),e("td",G,[e("div",H,[e("div",J,[c(g,{to:{name:"sample-detail",params:{patientUid:o.patient?.uid,sampleUid:t?.uid}}},{default:x(()=>[u(i(t.sampleId),1)]),_:2},1032,["to"])])])]),e("td",K,[e("div",Q,i(o.clientRequestId),1)]),e("td",W,[e("div",X,i(o.patient?.client.name),1)]),e("td",Y,[e("div",Z,i(d(N)(t?.createdAt)),1)]),e("td",$,[e("div",ee,i(t?.createdBy?.firstName),1)]),e("td",te,[e("button",se,i(t.status),1)]),e("td",ae,[c(g,{to:{name:"sample-detail",params:{patientUid:o.patient?.uid,sampleUid:t?.uid}},class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},{default:x(()=>[u("Ver")]),_:2},1032,["to"])])])),[[C]])),128))]))),128))]),d(v)?(s(),a("div",re,[c(d(f),{message:"Obteniendo solicitudes de análisis..."})])):h("",!0)])])}}});export{ie as default};
