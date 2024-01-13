import{d as ue,ak as ce,P as me,O as pe,E as fe,af as ve,Q as j,t as S,s as _e,ar as he,r as q,aX as we,o as u,c,b as e,f as d,H as v,u as l,I as m,x as o,e as ge,F as g,y as b,aa as C,G as L,B as be}from"./index-08b76645.js";import Ue from"./vue-multiselect.esm-c34588a0.js";import{A as xe,U as Ne}from"./patient.mutations-41255de9.js";import{c as X,d as U,a as _,f as Pe,g as Y,u as ye,b as a}from"./array-90ee850b.js";/* empty css                                                                 */const Se={class:"flex whitespace-nowrap w-full"},Ce=e("span",{class:"text-gray-700 w-4/12"},"Codigo Cliente",-1),De={class:"w-full"},Ie={class:"text-orange-600 w-4/12"},Be={class:"flex whitespace-nowrap w-full"},Ve=e("span",{class:"text-gray-700 w-4/12"},"Primer Nombre",-1),ke={class:"w-full"},Ee={class:"text-orange-600 w-4/12"},Me={class:"flex whitespace-nowrap mb-2 w-full"},Oe=e("span",{class:"text-gray-700 w-4/12"},"Segundo Nombre",-1),Ae={class:"w-full"},qe={class:"text-orange-600 w-4/12"},Fe={class:"flex whitespace-nowrap w-full"},$e=e("span",{class:"text-gray-700 w-4/12"},"Apellido",-1),Te={class:"w-full"},He={class:"text-orange-600 w-4/12"},Re={class:"flex whitespace-nowrap mb-2 w-full"},je=e("span",{class:"text-gray-700 w-4/12"},"Fecha Creacion",-1),Le={class:"w-full"},Xe=["disabled"],Ye={class:"text-orange-600 w-4/12"},Ge={class:"flex whitespace-nowrap mb-2 w-full"},Ke=e("span",{class:"text-gray-700 w-4/12"},"Email",-1),Qe={class:"w-full"},We={class:"text-orange-600 w-4/12"},ze={class:"flex whitespace-nowrap mb-2 w-full"},Je=e("span",{class:"text-gray-700 w-4/12"},"Telefono",-1),Ze={class:"w-full"},et={class:"text-orange-600 w-4/12"},tt={class:"flex whitespace-nowrap mb-2 w-full"},st=e("span",{class:"text-gray-700 w-4/12"},"Cliente",-1),it={class:"w-full"},lt={class:"text-orange-600 w-4/12"},nt={class:"flex whitespace-nowrap mb-2 w-full"},ot={class:"text-gray-700 w-4/12 flex justify-between items-center"},at=e("span",{class:"mr-4"},"Extra Ids:",-1),dt={class:"w-full border-gray-200"},rt={class:"flex justify-around items-center w-full"},ut=e("span",null,"Identificacion",-1),ct=["onUpdate:modelValue"],mt=e("option",null,null,-1),pt=["value"],ft=e("span",null,"Valor ",-1),vt=["onUpdate:modelValue"],_t=["onClick"],ht=e("hr",{class:"my-2"},null,-1),wt={class:"grid grid-cols-3 gap-x-4 mb-4"},gt={class:"col-span-1"},bt={class:"flex gap-x-2 items-center whitespace-nowrap w-full"},Ut=e("span",{class:"text-gray-700 w-4/12"},"Pais",-1),xt=e("option",{value:null},null,-1),Nt=["value"],Pt={class:"text-orange-600 w-4/12"},yt={class:"col-span-1"},St={class:"flex gap-x-2 items-center whitespace-nowrap col-span-1 w-full"},Ct=e("span",{class:"text-gray-700 w-4/12"},"Provincia",-1),Dt=e("option",{value:null},null,-1),It=["value"],Bt={class:"text-orange-600 w-4/12"},Vt={class:"col-span-1"},kt={class:"flex gap-x-2 items-center whitespace-nowrap col-span-1 w-full"},Et=e("span",{class:"text-gray-700 w-4/12"},"Districto",-1),Mt=e("option",{value:null},null,-1),Ot=["value"],At={class:"text-orange-600 w-4/12"},qt=e("hr",null,null,-1),Ft=e("button",{type:"submit",class:"-mb-4 w-1/5 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Crear Solcitud ",-1),Lt=ue({__name:"PatientForm",props:{patient:Object,navigate:{type:Boolean,default:!1}},emits:["close"],setup(G,{emit:K}){const h=G,F=K;let $=ce(),p=me(),x=pe();const{withClientMutation:T}=be();let Q=fe(),W=ve();const N=j({genders:["Male","Female"],createAction:!0,countries:S(()=>p.getCountries),provinces:S(()=>p.getProvinces),districts:S(()=>p.getDistricts),clients:S(()=>$.getClients)});let z=j({first:void 0,after:"",text:"",sortBy:["name"],filterAction:!1});_e(async()=>{await p.fetchCountries(),await $.fetchClients(z),h.patient?.countryUid&&await p.filterProvincesByCountry(h.patient?.countryUid),h.patient?.provinceUid&&await p.filterDistrictsByProvince(h.patient?.provinceUid),await x.fetchIdentifications()});const{patient:n,navigate:J}=he(h);q(0),q(0),q(0);const H=()=>{var i=new Date().getFullYear();if(w.value){const t=new Date(w.value).getFullYear();te.value=i-t}},Z=X({uid:U(),clientPatientId:_().required("ID es requerido"),patientId:_().nullable(),firstName:_().required("Nombre es requerido"),middleName:_().nullable(),lastName:_().required("Apellido es requerido"),client:X().required("Cliente es requerido"),gender:_().required("Correo es requerido"),age:U().nullable(),dateOfBirth:Pe().nullable(),ageDobEstimated:Y().nullable(),phoneHome:_().nullable(),phoneMobile:_().nullable(),consentSms:Y().nullable(),districtUid:U().nullable(),provinceUid:U().nullable(),countryUid:U().nullable()}),{handleSubmit:ee,errors:r}=ye({validationSchema:Z,initialValues:{uid:n?.value?.uid,clientPatientId:n?.value?.clientPatientId||W?.query?.cpid,patientId:n?.value?.patientId,firstName:n?.value?.firstName,middleName:n?.value?.middleName,lastName:n?.value?.lastName,client:n?.value?.client,gender:n?.value?.gender,age:n?.value?.age,dateOfBirth:we(n?.value?.dateOfBirth)?void 0:new Date(n?.value?.dateOfBirth).toISOString().split("T")[0],ageDobEstimated:n?.value?.ageDobEstimated,phoneHome:n?.value?.phoneHome,phoneMobile:n?.value?.phoneMobile,consentSms:n?.value?.consentSms,districtUid:n?.value?.districtUid,provinceUid:n?.value?.provinceUid,countryUid:n?.value?.countryUid,identifications:n?.value?.identifications??[]}}),{value:D}=a("clientPatientId"),{value:I}=a("firstName"),{value:B}=a("middleName"),{value:V}=a("lastName"),{value:k}=a("client"),{value:E}=a("gender"),{value:te}=a("age"),{value:w}=a("dateOfBirth"),{value:se}=a("ageDobEstimated"),{value:M}=a("phoneMobile");a("consentSms");const{value:O}=a("districtUid"),{value:P}=a("provinceUid"),{value:y}=a("countryUid"),{value:A}=a("identifications"),R=ee(i=>{i.uid||ie(i),i.uid&&le(i)});function ie(i){T(xe,{payload:{clientPatientId:i.clientPatientId,firstName:i.firstName,middleName:i.middleName,lastName:i.lastName,age:i.age,gender:i.gender,dateOfBirth:i.dateOfBirth,ageDobEstimated:i.ageDobEstimated,clientUid:i.client.uid,phoneMobile:i.phoneMobile,consentSms:i.consentSms,countryUid:i.countryUid,provinceUid:i.provinceUid,districtUid:i.districtUid,identifications:i.identifications}},"createPatient").then(t=>{x.addPatient(t),F("close",t),J.value===!0&&Q.push({name:"patient-detail",params:{patientUid:t.uid}})})}function le(i){T(Ne,{uid:i.uid,payload:{clientPatientId:i.clientPatientId,firstName:i.firstName,middleName:i.middleName,lastName:i.lastName,age:i.age,gender:i.gender,dateOfBirth:i.dateOfBirth,ageDobEstimated:i.ageDobEstimated,clientUid:i.client.uid,phoneMobile:i.phoneMobile,consentSms:i.consentSms,countryUid:i.countryUid,provinceUid:i.provinceUid,districtUid:i.districtUid,identifications:i.identifications?.map(t=>({identificationUid:t.identificationUid,value:t.value}))}},"updatePatient").then(t=>{x.updatePatient(t),F("close",t)})}function ne(i){p.filterProvincesByCountry(y.value)}function oe(i){p.filterDistrictsByProvince(P.value)}const ae=()=>{A.value.push({identificationUid:"12122",value:""})},de=i=>{A.value.splice(i,1)};return(i,t)=>(u(),c("form",{onSubmit:t[16]||(t[16]=L((...s)=>l(R)&&l(R)(...s),["prevent"])),class:"border-2 border-gray-900 border-dotted rounded-sm px-4 py-8",autocomplete:"off"},[e("label",Se,[Ce,e("div",De,[d(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[0]||(t[0]=s=>m(D)?D.value=s:null),placeholder:"Codigo Cliente"},null,512),[[v,l(D)]]),e("div",Ie,o(l(r).clientPatientId),1)])]),e("label",Be,[Ve,e("div",ke,[d(e("input",{class:"form-input mt-1 w-full","onUpdate:modelValue":t[1]||(t[1]=s=>m(I)?I.value=s:null),placeholder:"Primer Nombre"},null,512),[[v,l(I)]]),e("div",Ee,o(l(r).firstName),1)])]),e("label",Me,[Oe,e("div",Ae,[d(e("input",{class:"form-input mt-1 w-full","onUpdate:modelValue":t[2]||(t[2]=s=>m(B)?B.value=s:null),placeholder:"Segundo Nombre"},null,512),[[v,l(B)]]),e("div",qe,o(l(r).middleName),1)])]),e("label",Fe,[$e,e("div",Te,[d(e("input",{class:"form-input mt-1 w-full","onUpdate:modelValue":t[3]||(t[3]=s=>m(V)?V.value=s:null),placeholder:"Apellido"},null,512),[[v,l(V)]]),e("div",He,o(l(r).lastName),1)])]),e("label",Re,[je,e("div",Le,[d(e("input",{class:"form-input mt-1 w-full disabled:bg-slate-200",type:"date","onUpdate:modelValue":t[4]||(t[4]=s=>m(w)?w.value=s:null),placeholder:"Date of Birth",disabled:l(se),onChange:t[5]||(t[5]=s=>H()),onKeyup:t[6]||(t[6]=s=>H())},null,40,Xe),[[v,l(w)]]),e("div",Ye,o(l(r).dateOfBirth),1)])]),e("label",Ge,[Ke,e("div",Qe,[d(e("input",{class:"form-input mt-1 w-full","onUpdate:modelValue":t[7]||(t[7]=s=>m(E)?E.value=s:null),placeholder:"Email"},null,512),[[v,l(E)]]),e("div",We,o(l(r).gender),1)])]),e("label",ze,[Je,e("div",Ze,[d(e("input",{class:"form-input mt-1 w-full","onUpdate:modelValue":t[8]||(t[8]=s=>m(M)?M.value=s:null),placeholder:"Numero telefono"},null,512),[[v,l(M)]]),e("div",et,o(l(r).phoneMobile),1)])]),e("label",tt,[st,e("div",it,[ge(l(Ue),{placeholder:"Selecione el cliente",modelValue:l(k),"onUpdate:modelValue":t[9]||(t[9]=s=>m(k)?k.value=s:null),options:N.clients,searchable:!0,label:"name","track-by":"uid"},null,8,["modelValue","options"]),e("div",lt,o(l(r).client),1)])]),e("label",nt,[e("span",ot,[at,e("div",null,[e("span",{class:"relative px-1 mr-2 mt-4 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:t[10]||(t[10]=s=>ae())}," Agregar ")])]),e("div",dt,[(u(!0),c(g,null,b(l(A),(s,re)=>(u(),c("div",rt,[ut,d(e("select",{class:"form-select mt-1","onUpdate:modelValue":f=>s.identificationUid=f},[mt,(u(!0),c(g,null,b(l(x).identifications,f=>(u(),c("option",{key:f.uid,value:f.uid},o(f.name),9,pt))),128))],8,ct),[[C,s.identificationUid]]),ft,d(e("input",{type:"text",class:"form-input text-sky-800","onUpdate:modelValue":f=>s.value=f},null,8,vt),[[v,s.value]]),e("span",{class:"p-2 text-red-800",onClick:L(f=>de(re),["prevent"])},"X",8,_t)]))),256))])]),ht,e("div",wt,[e("div",gt,[e("label",bt,[Ut,d(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":t[11]||(t[11]=s=>m(y)?y.value=s:null),onChange:t[12]||(t[12]=s=>ne())},[xt,(u(!0),c(g,null,b(N.countries,s=>(u(),c("option",{key:s.uid,value:s.uid},o(s.name),9,Nt))),128))],544),[[C,l(y)]])]),e("div",Pt,o(l(r).countryUid),1)]),e("div",yt,[e("label",St,[Ct,d(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":t[13]||(t[13]=s=>m(P)?P.value=s:null),onChange:t[14]||(t[14]=s=>oe())},[Dt,(u(!0),c(g,null,b(N.provinces,s=>(u(),c("option",{key:s.uid,value:s.uid},o(s.name),9,It))),128))],544),[[C,l(P)]])]),e("div",Bt,o(l(r).provinceUid),1)]),e("div",Vt,[e("label",kt,[Et,d(e("select",{class:"form-select mt-1 w-full","onUpdate:modelValue":t[15]||(t[15]=s=>m(O)?O.value=s:null)},[Mt,(u(!0),c(g,null,b(N.districts,s=>(u(),c("option",{key:s.uid,value:s.uid},o(s.name),9,Ot))),128))],512),[[C,l(O)]])])]),e("div",At,o(l(r).districtUid),1)]),qt,Ft],32))}});export{Lt as default};
