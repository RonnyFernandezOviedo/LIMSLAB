import{d as f,E as h,r as v,o as i,c as l,b as e,G as x,f as b,H as C,u as t,I as w,x as y,e as g,J as k,z as I,A as B}from"./index-7e8465c2.js";import{a as L}from"./no-auth-5a115bd4.js";import{c as N,a as S,u as V,b as A}from"./array-631ae7c2.js";const F={class:"flex justify-center items-center h-screen bg-sky-800 px-6"},M={class:"p-6 max-w-sm w-full bg-white shadow-md rounded-sm"},E=k('<div class="flex justify-center items-center"><svg class="h-10 w-10" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path></svg><span class="text-gray-700 font-semibold text-2xl">Instalar App</span></div>',1),R={class:"block"},j=e("span",{class:"text-gray-700 text-sm"},"Nombre de Laboratorio",-1),D=["disabled"],q={class:"text-orange-600 w-4/12"},G={class:"mt-6"},O={key:0,type:"submit",class:"py-2 px-4 text-center bg-sky-800 rounded-sm w-full text-white text-sm hover:bg-sky-800"},P={key:1,class:"text-center"},J=f({__name:"index",setup(T){const c=I(()=>B(()=>import("./LoadingMessage-79e5e3e9.js"),["assets/LoadingMessage-79e5e3e9.js","assets/LoadingMessage.vue_vue_type_script_setup_true_lang-1ac11e1a.js","assets/index-7e8465c2.js","assets/index-fff21e38.css"])),m=h(),a=v(!1),u=N({name:S().required("Laboratory Name is Required")}),{handleSubmit:p,errors:_}=V({validationSchema:u,initialValues:{name:"Felicity Labs"}}),{value:o}=A("name"),r=p(d=>{a.value=!0,L.post("setup/installation",d).then(s=>{s.data.installed&&m.push({name:"LOGIN"})}).finally(()=>a.value=!1)});return(d,s)=>(i(),l("div",F,[e("div",M,[E,e("form",{class:"mt-4",onSubmit:s[1]||(s[1]=x((...n)=>t(r)&&t(r)(...n),["prevent"]))},[e("label",R,[j,b(e("input",{type:"text",class:"form-input mt-1 block w-full rounded-sm focus:border-sky-800","onUpdate:modelValue":s[0]||(s[0]=n=>w(o)?o.value=n:null),disabled:a.value},null,8,D),[[C,t(o)]]),e("div",q,y(t(_).name),1)]),e("div",G,[a.value?(i(),l("div",P,[g(t(c),{message:"Instalando App ..."})])):(i(),l("button",O," Install "))])],32)])]))}});export{J as default};
