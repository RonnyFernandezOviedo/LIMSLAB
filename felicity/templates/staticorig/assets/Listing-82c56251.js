import{_ as q,y as se,A as oe,t as ne,m as le,a7 as re,w as ae}from"./shipment-53265c2d.js";import{f as ie,G as E,r as C,c as Q,d as m,v as de,h as n,k as r,x as e,ag as p,i as V,u as l,y as g,F as h,ak as v,D as f,B as D,A as L,al as ce,j as ue,ah as pe,_ as he}from"./_plugin-vue_export-helper-dacf3d65.js";import{h as fe,o as _e,a as me}from"./constants-743d82a1.js";import{b as T,a as w,d as x}from"./runtime-dom.esm-bundler-98433118.js";const ve={class:"flex items-center justify-between"},be=e("h1",{class:"h1 font-bold text-dark-700"},"QC Analyses Requests",-1),ye=e("hr",null,null,-1),ge={class:"overflow-x-auto mt-4"},xe={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},we={class:"min-w-full"},ke=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"}),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},"Date Created"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"QCSet (samples)"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Test(s)"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),Ce={class:"bg-white"},Se=e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},null,-1),Ae={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Qe={class:"flex items-center"},Ve={class:"text-sm leading-5 text-gray-800"},Le={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Pe={class:"text-sm leading-5 text-sky-800"},Ue={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},qe={class:"text-sm leading-5 text-sky-800"},Ee={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},De={key:0,class:"py-4 text-center"},Te={class:"flex justify-between"},Re=e("div",null,null,-1),Be={class:"my-4 flex sm:flex-row flex-col"},Me={class:"flex flex-row mb-1 sm:mb-0"},je={class:"relative"},Ie=["disabled"],Ne=pe('<option value="25">25</option><option value="50">50</option><option value="100">100</option><option value="250">250</option><option value="500">500</option><option value="1000">1000</option><option value="5000">5000</option><option value="10000">10000</option>',8),Fe=[Ne],$e=e("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[e("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),ze={class:"block relative"},Oe=["placeholder"],Ge=e("h3",null,"Create QC Analyses Requests",-1),Ze={action:"post",class:"mb-8 bg-white"},He={class:"grid grid-cols-3 gap-x-4 mb-4"},Je={class:"block col-span-1"},Ke=e("span",{class:"text-gray-700"},"Department",-1),We=e("option",{value:""},null,-1),Xe=["value"],Ye={id:"samples"},et=e("hr",null,null,-1),tt={class:"flex justify-between items-center py-2"},st=e("h5",null,"Process Control Samples",-1),ot=e("i",{class:"fa fa-ellipsis-h","aria-hidden":"true"},null,-1),nt=[ot],lt=e("hr",{class:"mb-4"},null,-1),rt={class:"flex items-center justify-between"},at={class:""},it={class:"grid grid-cols-4 gap-x-4"},dt={class:"block col-span-1 mb-2"},ct=e("span",{class:"text-gray-700"},"QC Template",-1),ut=["onUpdate:modelValue"],pt=e("option",{value:""},null,-1),ht=["value"],ft={key:0,class:"block col-span-1 mb-2"},_t=e("span",{class:"text-gray-700"},"QC Levels",-1),mt=["onUpdate:modelValue"],vt=e("option",{value:""},null,-1),bt=["value"],yt={class:"block col-span-1 mb-2"},gt=e("span",{class:"text-gray-700"},"Analysis Profiles",-1),xt=["onUpdate:modelValue"],wt=e("option",{value:""},null,-1),kt=["value"],Ct={key:1,class:"block col-span-1 mb-2"},St=e("span",{class:"text-gray-700"},"Analysis Services",-1),At=["onUpdate:modelValue"],Qt=e("option",{value:""},null,-1),Vt=["value"],Lt={class:""},Pt=["onClick"],Ut=e("hr",null,null,-1),qt=e("hr",null,null,-1),Et=ie({__name:"Listing",setup(Dt){const R=E(()=>q(()=>import("./LoadingMessage-097e117a.js"),["assets/LoadingMessage-097e117a.js","assets/_plugin-vue_export-helper-dacf3d65.js"])),B=E(()=>q(()=>import("./SimpleModal-9e28c074.js"),["assets/SimpleModal-9e28c074.js","assets/_plugin-vue_export-helper-dacf3d65.js","assets/runtime-dom.esm-bundler-98433118.js","assets/SimpleModal-f645a074.css"])),c=se(),u=oe(),P=ne(),{withClientMutation:M}=ae(),{qcSets:j,fetchingQCSets:I}=le(c);let d=C(!1),N=C(!0),_=Q({departmentUid:void 0,samples:[{}]}),F=Q({first:void 0,after:"",text:"",sortBy:["name"]});u.fetchAnalysesServices(F),u.fetchQCLevels(),u.fetchQCTemplates(),u.fetchAnalysesProfiles(),P.fetchDepartments({}),c.resetQCSets();let b=C(25),y=Q({first:b.value,after:"",text:"",sortBy:["uid"],filterAction:!1});c.fetchQCSets(y);const $=m(()=>u.getAnalysesProfiles),z=m(()=>{const i=u.getAnalysesServicesSimple;let s=new Set;return i.forEach(a=>{a.profiles?.length===0&&s.add(a)}),[...s]});function O(){M(re,{samples:_.samples},"createQcSet").then(i=>c.addQCSet(i))}function G(){_.samples?.push({})}function Z(i){_.samples?.splice(i,1)}function H(){N.value===!0&&O(),d.value=!1}const S=m(()=>c.getQCSetPageInfo);function J(){y.first=+b.value,y.after=S?.value?.pageInfo?.endCursor??"",y.text="",y.filterAction=!1,c.fetchQCSets(y)}function K(i){let s=[];return i?.forEach(a=>{a?.sampleId+""+a.status;let t=a?.qcLevel?.level?.match(/\b([A-Z])/g).join("")+" ("+a.status+")";s.includes(t)||s.push(t)}),s.join(", ")}function W(i){let s=[];return i?.forEach(a=>{a.profiles.forEach(t=>{s.includes(t.name)||s.push(t.name)})}),i?.forEach(a=>{a.analyses.forEach(t=>{s.includes(t.name)||s.push(t.name)})}),s.join(", ")}const k=C(!1),X=m(()=>P.getDepartments),Y=m(()=>u.getQCTemplates),ee=m(()=>u.getQCLevels),te=m(()=>c.getQCSets?.length+" of "+c.getQCSetCount+" QC Sets");return(i,s)=>{const a=de("router-link");return n(),r(h,null,[e("div",ve,[be,p(e("button",{type:"button",class:"border border-sky-800 text-sky-800 rounded-sm px-2 py-1 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 hover:text-white focus:outline-none focus:shadow-outline",onClick:s[0]||(s[0]=w(t=>V(d)?d.value=!l(d):d=!l(d),["prevent"]))}," Add New QC Request ",512),[[T,fe(me.CREATE,_e.SAMPLE)]])]),ye,g(` <section class="my-4 flex sm:flex-row flex-col">\r
        <div class="flex flex-row mb-1 sm:mb-0">\r
            <div class="relative">\r
                <select\r
                class="appearance-none h-full rounded-l-sm border block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">\r
                   <option value="">All</option>\r
                    <option value="pending">Pending</option>\r
                    <option value="resulted">Resulted</option>\r
                    <option value="to_be_verified">To be Verified</option>\r
                    <option value="verified">Verified</option>\r
                </select>\r
                <div\r
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">\r
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">\r
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />\r
                    </svg>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="block relative">\r
            <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">\r
                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">\r
                    <path\r
                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">\r
                    </path>\r
                </svg>\r
            </span>\r
            <input placeholder="Search ..."\r
                \r
                class="appearance-none rounded-r-sm rounded-l-sm sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />\r
      </div>\r
      <button\r
        class="px-2 py-1 ml-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">\r
        Filter ...</button>\r
      \r
    </section> `),e("section",ge,[e("div",xe,[e("table",we,[ke,e("tbody",Ce,[(n(!0),r(h,null,v(l(j),t=>(n(),r("tr",{key:t.uid},[Se,e("td",Ae,[e("div",Qe,[e("div",Ve,f(t.createdAt),1)])]),e("td",Le,[e("div",Pe,f(K(t.samples??[])),1)]),e("td",Ue,[e("div",qe,f(W(t.samples??[])),1)]),e("td",Ee,[D(a,{to:{name:"qc-set-detail",params:{qcSetUid:t.uid}},class:"px-2 py-1 mr-2 border-sky-800 border text-gray-500rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},{default:L(()=>[ce("View Detail")]),_:2},1032,["to"])])]))),128))])]),l(I)?(n(),r("div",De,[D(l(R),{message:"Fetching QCSets ..."})])):g("v-if",!0)])]),e("section",Te,[Re,e("div",Be,[p(e("button",{onClick:s[1]||(s[1]=w(t=>J(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Show More",512),[[T,l(S)?.pageInfo?.hasNextPage]]),e("div",Me,[e("div",je,[p(e("select",{class:"appearance-none h-full rounded-l-sm border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500","onUpdate:modelValue":s[2]||(s[2]=t=>V(b)?b.value=t:b=t),disabled:!l(S)?.pageInfo?.hasNextPage},Fe,8,Ie),[[x,l(b)]]),$e])]),e("div",ze,[e("input",{placeholder:l(te),class:"appearance-none rounded-r-sm rounded-l-sm sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none",disabled:""},null,8,Oe)])])]),l(d)?(n(),ue(l(B),{key:0,onClose:s[7]||(s[7]=t=>V(d)?d.value=!1:d=!1)},{header:L(()=>[Ge]),body:L(()=>[e("form",Ze,[e("div",He,[e("label",Je,[Ke,p(e("select",{name:"clientContacts",id:"clientContacts","onUpdate:modelValue":s[3]||(s[3]=t=>l(_).departmentUid=t),class:"form-input mt-1 block w-full"},[We,(n(!0),r(h,null,v(l(X),t=>(n(),r("option",{key:t.uid,value:t.uid},f(t.name),9,Xe))),128))],512),[[x,l(_).departmentUid]])])]),e("section",Ye,[et,e("div",tt,[st,e("span",{class:"cursor-pointer text-xl text-sky-800",onClick:s[4]||(s[4]=t=>k.value=!k.value)},nt),l(_).samples?.length<20?(n(),r("button",{key:0,onClick:s[5]||(s[5]=w(t=>G(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Add QCSet")):g("v-if",!0)]),lt,(n(!0),r(h,null,v(l(_).samples,(t,U)=>(n(),r("div",{key:U},[e("div",rt,[e("div",at,[e("div",it,[e("label",dt,[ct,p(e("select",{"onUpdate:modelValue":o=>t.qcTemplateUid=o,class:"form-input mt-1 block w-full"},[pt,(n(!0),r(h,null,v(l(Y),(o,A)=>(n(),r("option",{key:o.uid,value:o.uid},f(o.name),9,ht))),128))],8,ut),[[x,t.qcTemplateUid]])]),k.value?(n(),r("label",ft,[_t,p(e("select",{"onUpdate:modelValue":o=>t.qcLevels=o,class:"form-input mt-1 block w-full",multiple:""},[vt,(n(!0),r(h,null,v(l(ee),(o,A)=>(n(),r("option",{key:o.uid,value:o.uid},f(o.level),9,bt))),128))],8,mt),[[x,t.qcLevels]])])):g("v-if",!0),e("label",yt,[gt,p(e("select",{"onUpdate:modelValue":o=>t.analysisProfiles=o,class:"form-input mt-1 block w-full",multiple:""},[wt,(n(!0),r(h,null,v(l($),(o,A)=>(n(),r("option",{key:o.uid,value:o.uid},f(o.name),9,kt))),128))],8,xt),[[x,t.analysisProfiles]])]),k.value?(n(),r("label",Ct,[St,p(e("select",{"onUpdate:modelValue":o=>t.analysisServices=o,class:"form-input mt-1 block w-full",multiple:""},[Qt,(n(!0),r(h,null,v(l(z),(o,A)=>(n(),r("option",{key:o.uid,value:o.uid},f(o.name),9,Vt))),128))],8,At),[[x,t.analysisServices]])])):g("v-if",!0)])]),e("div",Lt,[e("button",{onClick:w(o=>Z(U),["prevent"]),class:"px-2 py-1 mr-2 border-orange-600 border text-orange-600rounded-smtransition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none"},"Remove",8,Pt)])]),Ut]))),128))]),qt,e("button",{type:"button",onClick:s[6]||(s[6]=w(t=>H(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):g("v-if",!0)],64)}}}),jt=he(Et,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/qcontrol/Listing.vue"]]);export{jt as default};