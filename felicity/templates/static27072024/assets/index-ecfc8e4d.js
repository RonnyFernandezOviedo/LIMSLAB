import{d as E,af as C,O as A,r as V,a as w,o as l,c as B,b as d,e as n,I as _,u as t,N as I,w as u,i as R,F as h,z as s,A as i}from"./index-7e8465c2.js";const k={class:""},x=d("h3",null,"Actulizar Solicitud",-1),D=E({__name:"index",setup(y){const c=s(()=>i(()=>import("./SimpleModal-16734371.js"),["assets/SimpleModal-16734371.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/SimpleModal-98e7299b.css"])),p=s(()=>i(()=>import("./PatientForm-c40cf626.js"),["assets/PatientForm-c40cf626.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/vue-multiselect.esm-16295834.js","assets/patient.mutations-cc33551a.js","assets/array-631ae7c2.js","assets/vue-multiselect-a538cd7c.css"])),m=s(()=>i(()=>import("./PatientInfo-daa98fa6.js"),["assets/PatientInfo-daa98fa6.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/constants-71a97445.js"])),f=C(),a=A();let e=V(!1);a.fetchPtientByUid(f.params.patientUid);const v=r=>{a.updatePatient(r),e.value=!1};return(r,o)=>{const P=w("router-view");return l(),B(h,null,[d("div",k,[n(t(m),{onEditPatient:o[0]||(o[0]=()=>_(e)?e.value=!0:e=!0)}),n(P)]),t(e)?(l(),I(t(c),{key:0,onClose:o[1]||(o[1]=N=>_(e)?e.value=!1:e=!1)},{header:u(()=>[x]),body:u(()=>[n(t(p),{patient:t(a).patient,navigate:!1,onClose:v},null,8,["patient"])]),_:1})):R("",!0)],64)}}});export{D as default};
