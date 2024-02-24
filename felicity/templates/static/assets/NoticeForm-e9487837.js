import{d as D,T,ar as B,o as F,c as I,b as t,f as d,H as p,u as o,I as m,x as b,G as V,B as C}from"./index-b75e268d.js";import{A as U,E as $}from"./index-db8f0f88.js";import{c as A,d as M,a as g,f as O,e as h,u as R,b as a}from"./array-66ec393a.js";const j={class:"grid grid-cols-2 gap-x-4 mb-4"},G={class:"block col-span-2 mb-2"},H=t("span",{class:"text-gray-700"},"Title",-1),z={class:"text-orange-600 w-4/12"},J={class:"block col-span-2 mb-2"},K=t("span",{class:"text-gray-700"},"Body",-1),L={class:"text-orange-600 w-4/12"},P={class:"block col-span-2 mb-2"},Q=t("span",{class:"text-gray-700"},"Expiration",-1),W={class:"text-orange-600 w-4/12"},X=t("hr",null,null,-1),Y=t("button",{type:"submit",class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ",-1),se=D({__name:"NoticeForm",props:{notice:Object},emits:["close"],setup(v,{emit:N}){const w=v,f=N,{withClientMutation:y}=C(),x=T(),{notice:r}=B(w),k=A({uid:M(),title:g().required("Notice is required"),body:g().required("Notice body message is required"),expiry:O().required("Expiry is required").typeError("Invalid Date format"),groups:h(),departments:h()}),{handleSubmit:E,errors:l}=R({validationSchema:k,initialValues:{uid:r?.value?.uid,title:r?.value?.title,body:r?.value?.body,expiry:r?.value?.expiry,groups:r?.value?.groups,departments:r?.value?.departments}}),{value:n}=a("title"),{value:c}=a("body"),{value:u}=a("expiry");a("groups"),a("departments");const _=E(e=>{e.uid||S(e),e.uid&&q(e)});function S(e){y(U,{payload:{title:e.title,body:e.body,expiry:e.expiry,groups:e.groups||[],departments:e.departments||[]}},"createNotice").then(s=>{x.addNotice(s),f("close")})}function q(e){y($,{uid:e.uid,payload:{title:e.title,body:e.body,expiry:e.expiry,groups:e.groups||[],departments:e.departments||[]}},"updateNotice").then(s=>{x.updateNotice(s),f("close")})}return(e,s)=>(F(),I("form",{action:"post",class:"p-1",onSubmit:s[3]||(s[3]=V((...i)=>o(_)&&o(_)(...i),["prevent"]))},[t("div",j,[t("label",G,[H,d(t("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":s[0]||(s[0]=i=>m(n)?n.value=i:null),placeholder:"Name ..."},null,512),[[p,o(n)]]),t("div",z,b(o(l).title),1)]),t("label",J,[K,d(t("textarea",{class:"form-input mt-1 block w-full",rows:"5","onUpdate:modelValue":s[1]||(s[1]=i=>m(c)?c.value=i:null),placeholder:"Name ..."},null,512),[[p,o(c)]]),t("div",L,b(o(l).body),1)]),t("label",P,[Q,d(t("input",{class:"form-input mt-1 block w-full",type:"datetime-local","onUpdate:modelValue":s[2]||(s[2]=i=>m(u)?u.value=i:null),placeholder:"Name ..."},null,512),[[p,o(u)]]),t("div",W,b(o(l).expiry),1)])]),X,Y],32))}});export{se as default};
