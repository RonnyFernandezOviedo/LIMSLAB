import{d as X,a8 as Z,a9 as ee,V as te,r as k,t as f,Q as se,M as D,o as a,c as l,b as e,f as n,F as d,y as _,x as r,aa as g,G as w,v as A,u,e as T,w as M,h as F,ab as L,z as N,A as R,U as j,bS as oe,bT as ae,B as le}from"./index-b75e268d.js";import{h as ne,o as re,a as ie}from"./constants-9fdeb32f.js";const ce=e("hr",null,null,-1),de={action:"post",class:"mt-4"},ue={class:"flex justify-start items-center mr-4"},pe=e("span",{class:"text-gray-700"},"Worksheet Template",-1),he={class:"block mx-4"},_e=e("option",null,null,-1),me=["value"],ye=e("hr",{class:"mt-4 mb-2"},null,-1),fe=e("h3",{class:"font-bold"},"Manual Analyses Assignment",-1),ge=e("hr",{class:"mb-4 mt-2"},null,-1),be={class:"overflow-x-auto mt-4"},xe={action:"post",class:"p-1"},ve={class:"flex justify-start mb-4"},ke={class:"flex justify-between items-center"},we=e("span",{class:"text-gray-700 mr-2"},"SampleType",-1),Ae=["value"],Te={class:"flex justify-between items-center ml-6"},Ce=e("span",{class:"text-gray-700 mr-2"},"Analyses",-1),Se=["value"],Ue={class:"ml-6 mt-2"},Ee={class:"overflow-x-auto mt-4"},Be={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},Ve={key:0,class:"py-4 text-center"},We={key:1,class:"min-w-full"},De={class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},Me=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},null,-1),Fe=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"}," Sample ID ",-1),Le=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Analysis ",-1),Ne=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Date Created ",-1),Re=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Date Received ",-1),je=e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Status ",-1),Ie={class:"bg-white"},Pe=["onUpdate:modelValue","onChange"],Oe=e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},null,-1),Ye={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Qe={class:"text-sm leading-5 text-sky-800 font-semibold"},qe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},He={class:"text-sm leading-5 text-sky-800"},Ke={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},$e={class:"text-sm leading-5 text-sky-800"},Ge={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ze={class:"text-sm leading-5 text-sky-800"},Je={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Xe={class:"text-sm leading-5 text-sky-800"},Ze={class:"my-4"},et={action:"post",class:"mb-4"},tt={class:"flex justify-start items-center mr-4"},st=e("span",{class:"text-gray-700"},"Apply QC Template",-1),ot={class:"block mx-4"},at=e("option",null,null,-1),lt=["value"],ct=X({__name:"WorkSheetAssign",setup(nt){const I=N(()=>R(()=>import("./LoadingMessage-14be4887.js"),["assets/LoadingMessage-14be4887.js","assets/LoadingMessage.vue_vue_type_script_setup_true_lang-0b4f9f7f.js","assets/index-b75e268d.js","assets/index-a964bbb1.css"])),C=N(()=>R(()=>import("./Button-3089dcaf.js"),["assets/Button-3089dcaf.js","assets/index-b75e268d.js","assets/index-a964bbb1.css"])),c=Z(),m=ee(),S=te(),{withClientMutation:U}=le(),b=k();c.fetchWorkSheetTemplates();const E=f(()=>c.getWorkSheet),P=f(()=>c.getWorkSheetTemplates),O=async()=>{try{j.fire({title:"Are you sure?",text:"You want to apply this template to add samples?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, apply now!",cancelButtonText:"No, cancel apply!"}).then(s=>{s.isConfirmed&&U(oe,{worksheetUid:E?.value?.uid,templateUid:b.value},"updateWorksheetApplyTemplate").then(o=>{})})}catch{}};m.fetchAnalysesServices({first:void 0,after:"",text:"",sortBy:["name"]}),S.fetchSampleTypes(),m.fetchQCTemplates();const Y=f(()=>m.getQCTemplates),x=k(void 0),p=se({sampleTypeUid:void 0,analysisUid:void 0}),h=k(!1),y=f(()=>{const s=B;return c.getAnalysisResults?.forEach(i=>{s?.some(v=>v.uid===i.uid)||s.push(i)}),s}),Q=()=>{V(),c.fetchForWorkSheetsAssign({first:50,after:"",text:"",sortBy:void 0,...p})},q=()=>{const s=H();try{j.fire({title:"Are you sure?",text:"You want to assign selected to worksheet?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, assign now!",cancelButtonText:"No, cancel apply!"}).then(o=>{o.isConfirmed&&U(ae,{uid:E?.value?.uid,qcTemplateUid:x.value,analysesUids:s},"updateWorksheetApplyTemplate").then(i=>{})})}catch{}};let B=[];function V(){let s=[];return y?.value?.forEach(o=>{o.checked&&s.push(o)}),B=s,s}function H(){const s=V();let o=[];return s?.forEach(i=>o.push(i.uid)),o}function K(s){J()?h.value=!0:h.value=!1}function $(s){s.checked=!0}function G(s){s.checked=!1}async function z(){await y?.value?.forEach(s=>h.value?$(s):G(s))}function J(){return y?.value?.every(s=>s.checked===!0)}return(s,o)=>{const i=D("motion-slide-right"),v=D("motion-slide-left");return a(),l(d,null,[e("section",null,[ce,n((a(),l("form",de,[e("div",ue,[pe,e("label",he,[n(e("select",{class:"form-select block w-full py-1","onUpdate:modelValue":o[0]||(o[0]=t=>b.value=t)},[_e,(a(!0),l(d,null,_(P.value,t=>(a(),l("option",{key:t.uid,value:t.uid},r(t.name),9,me))),128))],512),[[g,b.value]])]),n(e("button",{type:"button",onClick:o[1]||(o[1]=w(t=>O(),["prevent"])),class:"border border-sky-800 bg-sky-800 text-white rounded-sm px-2 py-1 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Apply Template ",512),[[A,ne(ie.CREATE,re.WORKSHEET)]])])])),[[i]])]),ye,fe,ge,e("div",be,[n((a(),l("form",xe,[e("div",ve,[e("label",ke,[we,n(e("select",{name:"analyses_uids","onUpdate:modelValue":o[2]||(o[2]=t=>p.sampleTypeUid=t),class:"form-input mt-1 block w-full py-1"},[(a(!0),l(d,null,_(u(S).sampleTypes,t=>(a(),l("option",{key:t.uid,value:t.uid},r(t.name),9,Ae))),128))],512),[[g,p.sampleTypeUid]])]),e("label",Te,[Ce,n(e("select",{name:"analyses_uids","onUpdate:modelValue":o[3]||(o[3]=t=>p.analysisUid=t),class:"form-input mt-1 block w-full py-1"},[(a(!0),l(d,null,_(u(m).analysesServices,t=>(a(),l("option",{key:t.uid,value:t.uid},r(t.name),9,Se))),128))],512),[[g,p.analysisUid]])]),e("div",Ue,[n(T(u(C),{onClick:o[4]||(o[4]=w(t=>Q(),["prevent"])),color:"sky-800",class:"p-1"},{default:M(()=>[F("Apply Filters")]),_:1},512),[[A,!0]])])])])),[[v]])]),e("div",Ee,[e("div",Be,[u(c).fetchingAnalysisResults?(a(),l("div",Ve,[T(u(I),{message:"Fetching analytes ..."})])):(a(),l("table",We,[e("thead",null,[e("tr",null,[e("th",De,[n(e("input",{type:"checkbox",onChange:z,"onUpdate:modelValue":o[5]||(o[5]=t=>h.value=t)},null,544),[[L,h.value]])]),Me,Fe,Le,Ne,Re,je])]),n((a(),l("tbody",Ie,[(a(!0),l(d,null,_(y.value,t=>(a(),l("tr",{key:t?.uid},[e("td",null,[n(e("input",{type:"checkbox","onUpdate:modelValue":W=>t.checked=W,onChange:W=>K()},null,40,Pe),[[L,t.checked]])]),Oe,e("td",Ye,[e("div",Qe,r(t?.sample?.sampleId),1)]),e("td",qe,[e("div",He,r(t?.analysis?.name),1)]),e("td",Ke,[e("div",$e,r(t?.sample?.createdAt),1)]),e("td",Ge,[e("div",ze,r(t?.sample?.dateReceived),1)]),e("td",Je,[e("div",Xe,r(t?.sample?.status),1)])]))),128))])),[[i]])]))])]),e("section",Ze,[e("form",et,[e("div",tt,[st,e("label",ot,[n(e("select",{class:"form-select block w-full py-1","onUpdate:modelValue":o[6]||(o[6]=t=>x.value=t)},[at,(a(!0),l(d,null,_(Y.value,t=>(a(),l("option",{key:t.uid,value:t.uid},r(t.name),9,lt))),128))],512),[[g,x.value]])])])]),n(T(u(C),{onClick:w(q,["prevent"]),color:"orange-600"},{default:M(()=>[F("Assign Analyses")]),_:1},512),[[A,!0]])])],64)}}});export{ct as default};
