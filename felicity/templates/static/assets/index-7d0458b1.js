import{d as E,af as C,O as V,r as w,a as A,o as _,c as B,b as d,e as n,I as l,u as t,N as I,w as u,i as R,F as h,z as s,A as r}from"./index-b75e268d.js";const k={class:""},x=d("h3",null,"Patient Form",-1),O=E({__name:"index",setup(y){const p=s(()=>r(()=>import("./SimpleModal-95440dc3.js"),["assets/SimpleModal-95440dc3.js","assets/index-b75e268d.js","assets/index-a964bbb1.css","assets/SimpleModal-98e7299b.css"])),c=s(()=>r(()=>import("./PatientForm-02cc0522.js"),["assets/PatientForm-02cc0522.js","assets/index-b75e268d.js","assets/index-a964bbb1.css","assets/vue-multiselect.esm-02988593.js","assets/patient.mutations-35e45b3c.js","assets/array-66ec393a.js","assets/vue-multiselect-a538cd7c.css"])),m=s(()=>r(()=>import("./PatientInfo-77285aca.js"),["assets/PatientInfo-77285aca.js","assets/index-b75e268d.js","assets/index-a964bbb1.css","assets/constants-9fdeb32f.js"])),f=C(),a=V();let e=w(!1);a.fetchPtientByUid(f.params.patientUid);const v=i=>{a.updatePatient(i),e.value=!1};return(i,o)=>{const P=A("router-view");return _(),B(h,null,[d("div",k,[n(t(m),{onEditPatient:o[0]||(o[0]=()=>l(e)?e.value=!0:e=!0)}),n(P)]),t(e)?(_(),I(t(p),{key:0,onClose:o[1]||(o[1]=F=>l(e)?e.value=!1:e=!1)},{header:u(()=>[x]),body:u(()=>[n(t(c),{patient:t(a).patient,navigate:!1,onClose:v},null,8,["patient"])]),_:1})):R("",!0)],64)}}});export{O as default};
