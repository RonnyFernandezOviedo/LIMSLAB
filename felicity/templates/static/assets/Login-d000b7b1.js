import{d as S,m as A,L as C,o as r,c as d,b as s,u as e,G as b,f,H as h,n as l,I as g,e as L,N as V,z as q,A as B}from"./index-60c5f486.js";import{c as I,a as v,u as U,b as x}from"./array-9f9e4b97.js";const j={class:"flex justify-center items-center h-screen bg-sky-800 px-6"},E={class:"p-6 max-w-sm w-full bg-white shadow-md rounded-sm"},M=s("div",{class:"flex justify-center items-center"},[s("span",{class:"text-gray-700 font-semibold text-2xl"},"Laboratorio")],-1),N={class:"block"},P=s("span",{class:"text-gray-700 text-sm"},"Usuario",-1),T=["disabled"],z={class:"block mt-3"},D=s("span",{class:"text-gray-700 text-sm"},"Contraseña",-1),F=["disabled"],O={class:"flex justify-between items-center mt-4"},$={class:"mt-6"},G=["disabled"],H=s("span",null,"Ingreso",-1),J=[H],K={key:1,class:"text-center"},Y=S({__name:"Login",emits:["forgot"],setup(Q,{emit:y}){const c=q(()=>B(()=>import("./LoadingMessage-eb65d708.js"),["assets/LoadingMessage-eb65d708.js","assets/LoadingMessage.vue_vue_type_script_setup_true_lang-57337f08.js","assets/index-60c5f486.js","assets/index-a964bbb1.css"])),k=y,u=A(),{auth:i}=C(u),w=I({username:v().required("Username is Required"),password:v().required("Password is Required")}),{handleSubmit:R,errors:m}=U({validationSchema:w}),{value:o}=x("username"),{value:a}=x("password"),p=R(_=>{u.authenticate(_)});return(_,t)=>(r(),d("div",j,[s("div",E,[M,e(i).isAuthenticated?(r(),V(e(c),{key:1,message:"Redirigiendo, favor espere..."})):(r(),d("form",{key:0,class:"mt-4",onSubmit:t[3]||(t[3]=b((...n)=>e(p)&&e(p)(...n),["prevent"]))},[s("label",N,[P,f(s("input",{type:"text",class:l(["form-input mt-1 block w-full rounded-sm focus:border-sky-800 outline-none",{"border-red-500 focus:border-red-500 transision-colors duratioon-150":e(m)?.username}]),"onUpdate:modelValue":t[0]||(t[0]=n=>g(o)?o.value=n:null),disabled:e(i).processing},null,10,T),[[h,e(o)]])]),s("label",z,[D,f(s("input",{type:"password",class:l(["form-input mt-1 block w-full rounded-sm focus:border-sky-800",{"border-red-500 focus:border-red-500":e(m)?.password}]),"onUpdate:modelValue":t[1]||(t[1]=n=>g(a)?a.value=n:null),disabled:e(i).processing},null,10,F),[[h,e(a)]])]),s("div",O,[s("div",null,[s("a",{class:"block text-sm fontme text-indigo-700 hover:underline",onClick:t[2]||(t[2]=b(n=>k("forgot"),["prevent"]))},"Olvide mi contraseña?")])]),s("div",$,[e(i).processing?(r(),d("div",K,[L(e(c),{message:"Ingresando..."})])):(r(),d("button",{key:0,type:"submit",class:l(["py-2 px-4 text-center  rounded-sm w-full text-white text-sm ",{"bg-gray-500":!e(a)||!e(o),"bg-sky-800 hover:bg-sky-600":e(a)&&e(o)}]),disabled:!e(a)||!e(o)},J,10,G))])],32))])]))}});export{Y as default};
