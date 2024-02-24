import{d as R,m as T,L as C,r as f,Q as V,t as P,o as r,c as a,b as e,u as s,G as b,f as p,H as _,n as c,e as y,h as g,x as S,z as D,A as E}from"./index-236e333a.js";const A={class:"flex justify-center items-center h-screen bg-sky-800 px-6"},L={class:"p-6 max-w-sm w-full bg-white shadow-md rounded-sm"},U=e("div",{class:"flex justify-center items-center"},[e("span",{class:"text-gray-700 font-semibold text-2xl"},"Laboratorio")],-1),j={key:0},B={class:"block mt-3"},F=e("span",{class:"text-gray-700 text-sm"},"Email",-1),I=["disabled"],M={class:"flex justify-between items-center mt-4"},N={class:"mt-6"},$=["disabled"],z=e("span",null,"Solicitar reseteo de contraseña",-1),H=[z],q={key:1,class:"text-center"},G={key:1},O={class:"block mt-3"},Q=e("span",{class:"text-gray-700 text-sm"},"Token",-1),J=["disabled"],K={class:"mt-6"},W=["disabled"],X=e("span",null,"Enviar token",-1),Y=[X],Z={key:1,class:"text-center"},ee={class:"mt-2"},se={class:"bg-blue-100"},te={class:"block mt-3"},oe=e("span",{class:"text-gray-700 text-sm"},"Contraseña",-1),re=["disabled"],ae={class:"block mt-3"},de=e("span",{class:"text-gray-700 text-sm"},"Confirmacion de contraseña",-1),ne=["disabled"],le={class:"mt-6"},ie=["disabled"],ce=e("span",null,"Restablecer contraseña",-1),ue=[ce],me={key:1,class:"text-center"},ve=R({__name:"PasswordReset",emits:["forgot"],setup(be,{emit:x}){const v=D(()=>E(()=>import("./LoadingMessage-80ee7b63.js"),["assets/LoadingMessage-80ee7b63.js","assets/LoadingMessage.vue_vue_type_script_setup_true_lang-f84223a1.js","assets/index-236e333a.js","assets/index-a964bbb1.css"])),k=x,u=T(),{auth:o}=C(u),l=f(""),i=f(""),h=()=>{o.value.receivedToken?u.validatePasswordResetToken(i.value):u.resetPasswordRequest(l.value)},d=V({password:"",passwordc:""}),m=P(()=>!(!d.password||!d.passwordc||d.password!==d.passwordc)),w=()=>{m||alert("Correct Form errrs"),u.resetPassword(d.password,d.passwordc)};return(pe,t)=>(r(),a("div",A,[e("div",L,[U,s(o).resetData?.canReset?(r(),a("form",{key:1,class:"mt-4",onSubmit:b(w,["prevent"])},[e("p",ee,[g("Hie "),e("span",se,"@"+S(s(o)?.resetData?.username),1),g(". Cambiar su contraseña")]),e("label",te,[oe,p(e("input",{type:"password",class:c(["form-input mt-1 block w-full rounded-sm focus:border-sky-800",{"border-red-500 focus:border-red-500":!m.value}]),"onUpdate:modelValue":t[5]||(t[5]=n=>d.password=n),disabled:s(o).processing},null,10,re),[[_,d.password]])]),e("label",ae,[de,p(e("input",{type:"password",class:c(["form-input mt-1 block w-full rounded-sm focus:border-sky-800",{"border-red-500 focus:border-red-500":!m.value}]),"onUpdate:modelValue":t[6]||(t[6]=n=>d.passwordc=n),disabled:s(o).processing},null,10,ne),[[_,d.passwordc]])]),e("div",le,[s(o).processing?(r(),a("div",me,[y(s(v),{message:"Restableciendo contraseña..."})])):(r(),a("button",{key:0,type:"submit",class:c(["py-2 px-4 text-center  rounded-sm w-full text-white text-sm ",{"bg-gray-500":!m.value,"bg-sky-800 hover:bg-sky-600":m.value}]),disabled:!m.value},ue,10,ie))])],32)):(r(),a("form",{key:0,class:"mt-4",onSubmit:b(h,["prevent"])},[s(o).receivedToken?(r(),a("div",G,[e("label",O,[e("div",null,[e("a",{class:"px-2 py-1 border rounded-sm border-gray-300 text-gray-500 text-xs font-semibold hover:bg-gray-600 hover:border-none hover:text-gray-100",onClick:t[3]||(t[3]=b(n=>s(u).setReceivedResetToken(!1),["prevent"]))},"← Token no recibido")]),Q,p(e("input",{type:"text",class:c(["form-input mt-1 block w-full rounded-sm focus:border-sky-800",{"border-red-500 focus:border-red-500":!i.value}]),"onUpdate:modelValue":t[4]||(t[4]=n=>i.value=n),disabled:s(o).processing},null,10,J),[[_,i.value]])]),e("div",K,[s(o).processing?(r(),a("div",Z,[y(s(v),{message:"Validating password reset token ..."})])):(r(),a("button",{key:0,type:"submit",class:c(["py-2 px-4 text-center  rounded-sm w-full text-white text-sm ",{"bg-gray-500":!i.value,"bg-sky-800 hover:bg-sky-600":i.value}]),disabled:!i.value},Y,10,W))])])):(r(),a("div",j,[e("label",B,[e("div",null,[e("a",{class:"px-2 py-1 border rounded-sm border-gray-300 text-gray-500 text-xs font-semibold hover:bg-gray-600 hover:border-none hover:text-gray-100",onClick:t[0]||(t[0]=b(n=>k("forgot"),["prevent"]))},"← Regresar")]),F,p(e("input",{type:"email",class:c(["form-input mt-1 block w-full rounded-sm focus:border-sky-800",{"border-red-500 focus:border-red-500":!l.value}]),"onUpdate:modelValue":t[1]||(t[1]=n=>l.value=n),disabled:s(o).processing},null,10,I),[[_,l.value]])]),e("div",M,[e("div",null,[e("a",{class:"block text-sm fontme text-indigo-700 hover:underline",onClick:t[2]||(t[2]=b(n=>s(u).setReceivedResetToken(!0),["prevent"]))},"Ingresar Token?")])]),e("div",N,[s(o).processing?(r(),a("div",q,[y(s(v),{message:"Solicitando ..."})])):(r(),a("button",{key:0,type:"submit",class:c(["py-2 px-4 text-center  rounded-sm w-full text-white text-sm ",{"bg-gray-500":!l.value,"bg-sky-800 hover:bg-sky-600":l.value}]),disabled:!l.value},H,10,$))])]))],32))])]))}});export{ve as default};
