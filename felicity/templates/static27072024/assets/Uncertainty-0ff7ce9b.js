import{d as R,a9 as Y,S as B,ao as F,r as _,Q as L,D as $,t as A,o as a,c as r,b as t,F as p,y as h,x as i,u as l,N as O,w as I,f as u,aa as S,H as x,G as j,I as q,i as P,z,A as G,b_ as H,b$ as Q,B as W}from"./index-7e8465c2.js";const J=t("hr",null,null,-1),K={class:"overflow-x-auto mt-4"},X={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},Z={class:"min-w-full"},tt=t("thead",null,[t("tr",null,[t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Intrument"),t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Method"),t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Min"),t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Max"),t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Variance (+/-)"),t("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),et={class:"bg-white"},st={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},nt={class:"flex items-center"},ot={class:"text-sm leading-5 text-gray-800"},lt={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},at={class:"text-sm leading-5 text-sky-800"},it={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},rt={class:"text-sm leading-5 text-sky-800"},dt={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ut={class:"text-sm leading-5 text-sky-800"},ct={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},pt={class:"text-sm leading-5 text-sky-800"},mt={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},yt=["onClick"],bt={action:"post",class:"p-1"},_t={class:"grid grid-cols-5 gap-x-4 mb-4"},ht={class:"block col-span-1 mb-2"},xt=t("span",{class:"text-gray-700 w-4/12"},"Instrument",-1),ft={class:"w-full"},gt=t("option",null,null,-1),vt=["value"],wt={class:"block col-span-1 mb-2"},kt=t("span",{class:"text-gray-700 w-4/12"},"Method",-1),Ut={class:"w-full"},At=t("option",null,null,-1),It=["value"],St={class:"block col-span-1 mb-2"},Ct=t("span",{class:"text-gray-700"},"Min",-1),Mt={class:"block col-span-1 mb-2"},Nt=t("span",{class:"text-gray-700"},"Max",-1),Vt={class:"block col-span-1 mb-2"},Tt=t("span",{class:"text-gray-700"},"Variance +/-",-1),Et=t("hr",null,null,-1),Yt=R({__name:"Uncertainty",props:{analysis:{type:Object,required:!0,default:()=>({})},analysisUid:{type:String,required:!0,default:0}},setup(C){const M=z(()=>G(()=>import("./SimpleModal-16734371.js"),["assets/SimpleModal-16734371.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/SimpleModal-98e7299b.css"])),f=Y(),c=B(),{withClientMutation:g}=W(),v=C,{analysis:w}=F(v);let d=_(!1),k=_(""),n=L({});const m=_(!0);$(()=>v.analysisUid,(o,s)=>{}),c.fetchInstruments();const y=A(()=>c.getInstruments);c.fetchMethods();const b=A(()=>c.getMethods);function N(){const o={...n,analysisUid:w?.value?.uid};g(H,{payload:o},"createAnalysisUncertainty").then(s=>f.addAnalysisUncertainty(s))}function V(){const o={...n};delete o.uid,delete o.__typename,g(Q,{uid:n.uid,payload:o},"updateAnalysisUncertainty").then(s=>f.updateAnalysisUncertainty(s))}function U(o,s={}){m.value=o,d.value=!0,k.value=(o?"CREATE":"EDIT")+" ANALYSIS UNCERTAINTY",o?Object.assign(n,{min:null,max:null,value:null,instrumentUid:null,methodUid:null}):Object.assign(n,{...s})}function T(){m.value===!0&&N(),m.value===!1&&V(),d.value=!1}const E=o=>{const s=y?.value?.findIndex(e=>e.uid===o);return y?.value[s]?.name||"unknown"},D=o=>{const s=b?.value?.findIndex(e=>e.uid===o);return b?.value[s]?.name||"unknown"};return(o,s)=>(a(),r(p,null,[t("button",{class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:s[0]||(s[0]=e=>U(!0))},"Add Uncertainty"),J,t("div",K,[t("div",X,[t("table",Z,[tt,t("tbody",et,[(a(!0),r(p,null,h(l(w)?.uncertainties,e=>(a(),r("tr",{key:e?.uid},[t("td",st,[t("div",nt,[t("div",null,[t("div",ot,i(E(e?.instrumentUid)),1)])])]),t("td",lt,[t("div",at,i(D(e?.instrumentUid)),1)]),t("td",it,[t("div",rt,i(e.min),1)]),t("td",dt,[t("div",ut,i(e.max),1)]),t("td",ct,[t("div",pt,i(e.value),1)]),t("td",mt,[t("button",{onClick:Dt=>U(!1,e),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,yt)])]))),128))])])])]),l(d)?(a(),O(l(M),{key:0,onClose:s[7]||(s[7]=e=>q(d)?d.value=!1:d=!1),contentWidth:"w-2/4"},{header:I(()=>[t("h3",null,i(l(k)),1)]),body:I(()=>[t("form",bt,[t("div",_t,[t("label",ht,[xt,t("div",ft,[u(t("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":s[1]||(s[1]=e=>l(n).instrumentUid=e)},[gt,(a(!0),r(p,null,h(y.value,e=>(a(),r("option",{key:e?.uid,value:e.uid},i(e?.name),9,vt))),128))],512),[[S,l(n).instrumentUid]])])]),t("label",wt,[kt,t("div",Ut,[u(t("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":s[2]||(s[2]=e=>l(n).methodUid=e)},[At,(a(!0),r(p,null,h(b.value,e=>(a(),r("option",{key:e?.uid,value:e.uid},i(e?.name),9,It))),128))],512),[[S,l(n).methodUid]])])]),t("label",St,[Ct,u(t("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":s[3]||(s[3]=e=>l(n).min=e),placeholder:"Value ..."},null,512),[[x,l(n).min]])]),t("label",Mt,[Nt,u(t("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":s[4]||(s[4]=e=>l(n).max=e),placeholder:"Value ..."},null,512),[[x,l(n).max]])]),t("label",Vt,[Tt,u(t("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":s[5]||(s[5]=e=>l(n).value=e),placeholder:"Value ..."},null,512),[[x,l(n).value]])])]),Et,t("button",{type:"button",onClick:s[6]||(s[6]=j(e=>T(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):P("",!0)],64))}});export{Yt as default};
