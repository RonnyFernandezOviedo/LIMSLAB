import{d as K,V as X,O as Z,a9 as ee,al as te,E as se,t as u,Q as T,r as le,am as ae,an as oe,o as n,c as i,b as e,f as c,H as b,u as o,I as w,x as r,aa as g,F as m,y as _,G as D,i as ne,e as ie,z as re,B as ce,ah as de,A as ue}from"./index-7e8465c2.js";import{c as pe,a as R,d as q,e as me,u as _e,b as f}from"./array-631ae7c2.js";/* empty css                                                                 */const fe={class:"w-3/6 mt-4 py-4"},he=e("h5",{class:"mb-4"},"Agregar Solicitud de Analisis",-1),ve={class:""},ye={class:"flex whitespace-nowrap mb-2 w-full"},be=e("span",{class:"text-gray-700 w-4/12"},"ID Muestra Cliente",-1),we={class:"w-full"},ge={class:"text-orange-600 w-4/12"},xe={class:"flex whitespace-nowrap mb-2 w-full"},Ce=e("span",{class:"text-gray-700 w-4/12"},"Comentarios",-1),Se={class:"w-full"},Ae={class:"text-orange-600 w-4/12"},ke={class:"flex whitespace-nowrap mb-2 w-full"},Ue=e("span",{class:"text-gray-700 w-4/12"},"Contacto de Cliente",-1),Ve={class:"w-full"},De=e("option",{value:""},null,-1),Re=["value"],Ie={class:"text-orange-600 w-4/12"},Pe={class:"flex whitespace-nowrap mb-2 w-full"},Te=e("span",{class:"text-gray-700 w-4/12"},"Prioridad",-1),qe={class:"w-full"},Me={class:"text-orange-600 w-4/12"},Be={id:"samples"},Ee=e("hr",null,null,-1),Ne={class:"flex justify-between items-center py-2"},Oe=e("h5",null,"Muestras",-1),Fe={class:"text-orange-600"},Le=e("hr",{class:"mb-4"},null,-1),$e={class:"flex items-center justify-between"},je={class:"flex items-top gap-x-4"},Qe={class:"flex flex-col whitespace-nowrap mb-2"},ze=e("span",{class:"text-gray-700"},"Tipo de Muestra",-1),Ge=["onUpdate:modelValue"],He=e("option",{value:""},null,-1),We=["value"],Ye={class:"flex flex-col whitespace-nowrap mb-2"},Je=e("span",{class:"text-gray-700"},"Date Collected",-1),Ke=["onUpdate:modelValue"],Xe={class:"flex flex-col whitespace-nowrap mb-2"},Ze=e("span",{class:"text-gray-700"},"Perfil de Analisis",-1),et=["onUpdate:modelValue"],tt=e("option",{value:""},null,-1),st=["value"],lt={class:"flex flex-col whitespace-nowrap mb-2"},at=e("span",{class:"text-gray-700"},"Analisis",-1),ot=["onUpdate:modelValue"],nt=e("option",{value:""},null,-1),it=["value"],rt={class:""},ct=["onClick"],dt=e("hr",null,null,-1),ut=e("hr",null,null,-1),pt={key:0,type:"submit",class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},mt={key:1,class:"py-4 text-center"},yt=K({__name:"SamplesAdd",setup(_t){const M=re(()=>ue(()=>import("./LoadingMessage-79e5e3e9.js"),["assets/LoadingMessage-79e5e3e9.js","assets/LoadingMessage.vue_vue_type_script_setup_true_lang-1ac11e1a.js","assets/index-7e8465c2.js","assets/index-fff21e38.css"])),x=X(),B=Z(),h=ee(),v=te(),E=se(),{withClientMutation:N}=ce(),{swalError:I}=de();let d=u(()=>B.getPatient),O=T({first:void 0,after:"",text:"",sortBy:["name"]});v.fetchClients(O),u(()=>v.getClients),v.fetchClientContacts(d.value?.client.uid);let F=u(()=>v.getClientContacts);x.fetchSampleTypes();const L=u(()=>x.getSampleTypes);let $=T({first:void 0,after:"",text:"",sortBy:["name"]});h.fetchAnalysesServices($);const j=u(()=>{const a=h.getAnalysesServicesSimple;let s=new Set;return a.forEach((t,V)=>{t.profiles?.length===0&&s.add(t)}),[...s]});h.fetchAnalysesProfiles();const Q=u(()=>h.getAnalysesProfiles),C=le(!1),z=pe({clientRequestId:R().required("Cliente ID es requerido"),clinicalData:R().nullable(),clientContactUid:q().required("Contacto de cliente es requerido"),samples:me().required().min(1,"Agregue al menos 1 muestra"),priority:q(),dateCollected:R().nullable()}),{handleSubmit:G,errors:p}=_e({validationSchema:z,initialValues:{dateCollected:ae(d?.value?.dateOfBirth)?void 0:new Date(d?.value?.dateOfBirth).toISOString().split("T")[0],priority:0,samples:[]}}),{value:S}=f("clientRequestId"),{value:A}=f("clinicalData"),{value:k}=f("clientContactUid"),{value:U}=f("priority"),{value:y}=f("samples"),P=G(a=>{C.value=!0;for(let s of a.samples||[]){if(typeof s?.sampleType!="string"){I("Debe selecionar tipo de muestra");return}if(s?.analyses?.length<=0&&s?.profiles?.length<=0){I("La muestra debe tener un perfil de analsis /analisis o ambos");return}}H(a)});function H(a){const s={patientUid:d.value?.uid,clientUid:d.value?.client.uid,clientRequestId:a.clientRequestId,clinicalData:a.clinicalData,clientContactUid:a.clientContactUid,samples:a.samples,priority:a.priority};N(oe,{payload:s},"createAnalysisRequest").then(t=>{x.addAnalysisRequest(t),E.push({name:"patient-detail",params:{patientUid:d.value?.uid}})}).finally(()=>{C.value=!1})}function W(){const a={sampleType:{},dateCollected:"",profiles:[],analyses:[]};y.value.push(a)}function Y(a){y.value.splice(a,1)}return(a,s)=>(n(),i("div",fe,[he,e("form",{action:"post",class:"p-4 mb-8 bg-white",onSubmit:s[5]||(s[5]=D((...t)=>o(P)&&o(P)(...t),["prevent"]))},[e("div",ve,[e("label",ye,[be,e("div",we,[c(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":s[0]||(s[0]=t=>w(S)?S.value=t:null),placeholder:"ID ..."},null,512),[[b,o(S)]]),e("div",ge,r(o(p).clientRequestId),1)])]),e("label",xe,[Ce,e("div",Se,[c(e("textarea",{cols:"2",class:"form-input mt-1 w-full","onUpdate:modelValue":s[1]||(s[1]=t=>w(A)?A.value=t:null),placeholder:"Comentarios ..."},null,512),[[b,o(A)]]),e("div",Ae,r(o(p).clinicalData),1)])]),e("label",ke,[Ue,e("div",Ve,[c(e("select",{name:"clientContacts",id:"clientContacts","onUpdate:modelValue":s[2]||(s[2]=t=>w(k)?k.value=t:null),class:"form-input mt-1 block w-full"},[De,(n(!0),i(m,null,_(o(F),t=>(n(),i("option",{key:t.uid,value:t.uid},r(t.firstName)+" "+r(t.lastName),9,Re))),128))],512),[[g,o(k)]]),e("div",Ie,r(o(p).clientContactUid),1)])]),e("label",Pe,[Te,e("div",qe,[c(e("input",{type:"number",min:"0",max:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":s[3]||(s[3]=t=>w(U)?U.value=t:null)},null,512),[[b,o(U)]]),e("div",Me,r(o(p).priority),1)])])]),e("section",Be,[Ee,e("div",Ne,[Oe,e("span",Fe,r(o(p).samples),1),o(y)?.length!==20?(n(),i("button",{key:0,onClick:s[4]||(s[4]=D(t=>W(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Agregar Muestra ")):ne("",!0)]),Le,(n(!0),i(m,null,_(o(y),(t,V)=>(n(),i("div",{key:V},[e("div",$e,[e("div",je,[e("label",Qe,[ze,c(e("select",{name:"sampleTypes",id:"sampleTypes","onUpdate:modelValue":l=>t.sampleType=l,class:"form-input mt-1"},[He,(n(!0),i(m,null,_(L.value,l=>(n(),i("option",{key:l.uid,value:l.uid},r(l.name),9,We))),128))],8,Ge),[[g,t.sampleType]])]),e("label",Ye,[Je,c(e("input",{type:"datetime-local",class:"form-input mt-1 block w-full","onUpdate:modelValue":l=>t.dateCollected=l},null,8,Ke),[[b,t.dateCollected]])]),e("label",Xe,[Ze,c(e("select",{name:"analysisProfiles",id:"analysisProfiles","onUpdate:modelValue":l=>t.profiles=l,class:"form-input mt-1",multiple:""},[tt,(n(!0),i(m,null,_(Q.value,(l,J)=>(n(),i("option",{key:l.uid,value:l.uid},r(l.name),9,st))),128))],8,et),[[g,t.profiles]])]),e("label",lt,[at,c(e("select",{name:"analysesServices",id:"analysesServices","onUpdate:modelValue":l=>t.analyses=l,class:"form-input mt-1",multiple:""},[nt,(n(!0),i(m,null,_(j.value,(l,J)=>(n(),i("option",{key:l.uid,value:l.uid},r(l.name),9,it))),128))],8,ot),[[g,t.analyses]])])]),e("div",rt,[e("button",{onClick:D(l=>Y(V),["prevent"]),class:"px-2 py-1 mr-2 border-orange-600 border text-orange-600rounded-smtransition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none"}," Remover ",8,ct)])]),dt]))),128))]),ut,C.value?(n(),i("div",mt,[ie(o(M),{message:"Agregando Muestras ..."})])):(n(),i("button",pt," Agregar muestra(s) "))],32)]))}});export{yt as default};