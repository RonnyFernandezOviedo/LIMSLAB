import{d as V,a9 as O,S as B,ar as F,r as y,Q as R,D as $,t as L,o as l,c as a,b as t,F as c,y as h,x as r,u as i,N as j,w as I,f as p,aa as A,H as D,G as Y,I as q,i as P,z,A as G,c2 as H,c3 as Q,B as W}from"./index-b75e268d.js";const J=t("hr",null,null,-1),K={class:"overflow-x-auto mt-4"},X={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},Z={class:"min-w-full"},tt=t("thead",null,[t("tr",null,[t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Intrument"),t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Method"),t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Lower Limit"),t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Upper Limit"),t("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),et={class:"bg-white"},st={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ot={class:"flex items-center"},nt={class:"text-sm leading-5 text-gray-800"},it={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},lt={class:"text-sm leading-5 text-sky-800"},at={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},rt={class:"text-sm leading-5 text-sky-800"},dt={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ut={class:"text-sm leading-5 text-sky-800"},ct={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},pt=["onClick"],mt={action:"post",class:"p-1"},_t={class:"grid grid-cols-4 gap-x-4 mb-4"},bt={class:"block col-span-1 mb-2"},yt=t("span",{class:"text-gray-700 w-4/12"},"Instrument",-1),ht={class:"w-full"},ft=t("option",null,null,-1),xt=["value"],gt={class:"block col-span-1 mb-2"},wt=t("span",{class:"text-gray-700 w-4/12"},"Method",-1),vt={class:"w-full"},kt=t("option",null,null,-1),Lt=["value"],It={class:"block col-span-1 mb-2"},At=t("span",{class:"text-gray-700"},"Lower Limit",-1),Dt={class:"block col-span-1 mb-2"},Ut=t("span",{class:"text-gray-700"},"Upper Limit",-1),St=t("hr",null,null,-1),Et=V({__name:"DetectionLimit",props:{analysis:{type:Object,required:!0,default:()=>({})},analysisUid:{type:String,required:!0,default:0}},setup(U){const S=z(()=>G(()=>import("./SimpleModal-95440dc3.js"),["assets/SimpleModal-95440dc3.js","assets/index-b75e268d.js","assets/index-a964bbb1.css","assets/SimpleModal-98e7299b.css"])),f=O(),u=B(),{withClientMutation:x}=W(),g=U,{analysis:w}=F(g);let d=y(!1),v=y(""),n=R({});const m=y(!0);$(()=>g.analysisUid,(o,s)=>{}),u.fetchInstruments();const _=L(()=>u.getInstruments);u.fetchMethods();const b=L(()=>u.getMethods);function T(){const o={...n,analysisUid:w?.value?.uid};x(H,{payload:o},"createAnalysisDetectionLimit").then(s=>f.addAnalysisDetectionLimit(s))}function C(){const o={...n};delete o.uid,delete o.__typename,x(Q,{uid:n.uid,payload:o},"updateAnalysisDetectionLimit").then(s=>f.updateAnalysisDetectionLimit(s))}function k(o,s={}){m.value=o,d.value=!0,v.value=(o?"CREATE":"EDIT")+" ANALYSIS DETECTION_LIMIT",o?Object.assign(n,{lowerLimit:null,upperLimit:null,instrumentUid:null,methodUid:null}):Object.assign(n,{...s})}function E(){m.value===!0&&T(),m.value===!1&&C(),d.value=!1}const M=o=>{const s=_?.value?.findIndex(e=>e.uid===o);return _?.value[s]?.name||"unknown"},N=o=>{const s=b?.value?.findIndex(e=>e.uid===o);return b?.value[s]?.name||"unknown"};return(o,s)=>(l(),a(c,null,[t("button",{class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:s[0]||(s[0]=e=>k(!0))},"Add Detection Limit"),J,t("div",K,[t("div",X,[t("table",Z,[tt,t("tbody",et,[(l(!0),a(c,null,h(i(w)?.detectionLimits,e=>(l(),a("tr",{key:e?.uid},[t("td",st,[t("div",ot,[t("div",null,[t("div",nt,r(M(e?.instrumentUid)),1)])])]),t("td",it,[t("div",lt,r(N(e?.instrumentUid)),1)]),t("td",at,[t("div",rt,r(e.lowerLimit),1)]),t("td",dt,[t("div",ut,r(e.upperLimit),1)]),t("td",ct,[t("button",{onClick:Tt=>k(!1,e),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,pt)])]))),128))])])])]),i(d)?(l(),j(i(S),{key:0,onClose:s[6]||(s[6]=e=>q(d)?d.value=!1:d=!1),contentWidth:"w-2/4"},{header:I(()=>[t("h3",null,r(i(v)),1)]),body:I(()=>[t("form",mt,[t("div",_t,[t("label",bt,[yt,t("div",ht,[p(t("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":s[1]||(s[1]=e=>i(n).instrumentUid=e)},[ft,(l(!0),a(c,null,h(_.value,e=>(l(),a("option",{key:e?.uid,value:e.uid},r(e?.name),9,xt))),128))],512),[[A,i(n).instrumentUid]])])]),t("label",gt,[wt,t("div",vt,[p(t("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":s[2]||(s[2]=e=>i(n).methodUid=e)},[kt,(l(!0),a(c,null,h(b.value,e=>(l(),a("option",{key:e?.uid,value:e.uid},r(e?.name),9,Lt))),128))],512),[[A,i(n).methodUid]])])]),t("label",It,[At,p(t("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":s[3]||(s[3]=e=>i(n).lowerLimit=e),placeholder:"Value ..."},null,512),[[D,i(n).lowerLimit]])]),t("label",Dt,[Ut,p(t("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":s[4]||(s[4]=e=>i(n).upperLimit=e),placeholder:"Value ..."},null,512),[[D,i(n).upperLimit]])])]),St,t("button",{type:"button",onClick:s[5]||(s[5]=Y(e=>E(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):P("",!0)],64))}});export{Et as default};
