import{d as ae,V as oe,af as re,E as ne,Q as ie,L as de,D as S,t as l,a as f,M as le,o as c,c as m,b as e,u as s,N as ce,w as R,h as w,i as C,f as i,e as h,n as ue,x as o,v as d,aq as v,F as j,y as pe,z as me,A as ve}from"./index-236e333a.js";import{u as ye}from"./samples-c52623f8.js";const xe={class:"flex justify-between"},he=e("h3",{class:"my-4 font-bold"},"Detalles de Muestra",-1),_e=e("hr",null,null,-1),be={class:"bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-4 sm:px-6 md:px-2 py-4"},ge={key:0,class:"py-4 text-center"},fe={key:1,class:"grid grid-cols-12 gap-3"},we={class:"col-span-12 px-3 sm:px-0"},Ce={class:"mb-2 flex justify-between sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold"},ke=e("i",{class:"fa fa-star"},null,-1),Se=[ke],Re={key:1},je={type:"button",class:"bg-sky-800 text-white px-2 py-1 rounded-sm leading-none"},Le={class:"ml-2"},$e={class:"absolute mt-4 py-0 bg-gray-300 rounded-sm shadow-xl z-20"},Ie=e("hr",null,null,-1),Pe={class:"grid grid-cols-3 gap-x-4 mt-2"},qe={class:"col-span-1"},Ee={class:"flex justify-between"},Fe=e("span",{class:"text-gray-800 text-sm font-semibold"},"Client Request ID:",-1),Oe={class:"text-gray-600 text-sm md:text-md"},De={class:"flex justify-between"},Te=e("span",{class:"text-gray-800 text-sm font-semibold"},"Client:",-1),Ue={class:"text-gray-600 text-sm md:text-md"},Ve=e("div",{class:"flex justify-between"},[e("span",{class:"text-gray-800 text-sm font-semibold"},"Cliet Contact:"),e("span",{class:"text-gray-600 text-sm md:text-md"},"Sister in Charge")],-1),Be={class:"col-span-1"},Ne={class:"flex justify-between"},Ae=e("span",{class:"text-gray-800 text-sm font-semibold"},"Tipo de Muestra:",-1),ze={class:"text-gray-600 text-sm md:text-md"},Me={class:"flex justify-between"},Je=e("span",{class:"text-gray-800 text-sm font-semibold"},"Fecha de Muestreo:",-1),We={class:"text-gray-600 text-sm md:text-md"},Qe={class:"flex justify-between"},Ge=e("span",{class:"text-gray-800 text-sm font-semibold"},"Fecha de Registro:",-1),He={class:"text-gray-600 text-sm md:text-md"},Ke={class:"flex justify-between"},Xe=e("span",{class:"text-gray-800 text-sm font-semibold"},"Fecha de Recibido:",-1),Ye={class:"text-gray-600 text-sm md:text-md"},Ze={class:"col-span-1"},et={class:"flex justify-between"},tt=e("span",{class:"text-gray-800 text-sm font-semibold"},"Fecha de Enviado:",-1),st={class:"text-gray-600 text-sm md:text-md"},at={class:"flex justify-between"},ot=e("span",{class:"text-gray-800 text-sm font-semibold"},"Fecha de verificado:",-1),rt={class:"text-gray-600 text-sm md:text-md"},nt={class:"flex justify-between"},it=e("span",{class:"text-gray-800 text-sm font-semibold"},"Fecha de Publicado:",-1),dt={class:"text-gray-600 text-sm md:text-md"},lt={class:"flex justify-between"},ct=e("span",{class:"text-gray-800 text-sm font-semibold"},"Fecha de Impresion:",-1),ut={class:"text-gray-600 text-sm md:text-md"},pt={class:"bg-blue-300 rounded-sm shadow-md duration-500 px-4 sm:px-6 md:px-2 py-4 my-4"},mt={class:"flex"},vt=e("div",{class:"mr-4 font-semibold"},"Storage:",-1),yt={class:"bg-orange-600 rounded-sm shadow-md duration-500 px-4 sm:px-6 md:px-2 py-4 my-4"},bt=ae({__name:"index",setup(xt){const L=me(()=>ve(()=>import("./LoadingMessage-80ee7b63.js"),["assets/LoadingMessage-80ee7b63.js","assets/LoadingMessage.vue_vue_type_script_setup_true_lang-f84223a1.js","assets/index-236e333a.js","assets/index-a964bbb1.css"])),u=oe(),_=re(),k=ne();u.resetSample();const{cancelSamples:$,reInstateSamples:I,receiveSamples:P,invalidateSamples:q,publishSamples:E,verifySamples:F,recoverSamples:O}=ye(),x=ie({dropdownOpen:!1}),{sample:t,fetchingSample:D,repeatSample:b}=de(u);u.fetchSampleByUid(_.params.sampleUid),S(()=>t?.value?.status,(r,a)=>{if(r)if(r!=="invalidada"){u.resetRepeatSample();return}else u.fetchRepeatSampleByParentId(_.params.sampleUid)}),S(()=>_.params.sampleUid,(r,a)=>{u.fetchSampleByUid(+r)});function T(r,a){let p=[];return r?.forEach(y=>p.push(y.name)),a?.forEach(y=>p.push(y.name)),p.join(", ")}const U=l(()=>!!["esperada"].includes(t?.value?.status?.toLowerCase())),V=async()=>P([t?.value?.uid]),B=l(()=>!!["recibido","esperada"].includes(t?.value?.status?.toLowerCase())),N=async()=>$([t?.value?.uid]),A=l(()=>!!["cancelada"].includes(t?.value?.status?.toLowerCase())),z=async()=>I([t?.value?.uid]),M=l(()=>t?.value?.status?.toLowerCase()==="Esperando"),J=async()=>F([t?.value?.uid]),W=l(()=>t?.value?.status?.toLowerCase()==="publicado"),g=l(()=>["aprobada"].includes(t?.value?.status?.toLowerCase())?"Publicar":["publicado"].includes(t?.value?.status?.toLowerCase())?"Re publicar":"Pre publicar"),Q=l(()=>{if(["Esperando","aprobada","publicado"].includes(t?.value?.status?.toLowerCase()))return!0;const r=u.analysisResults;return!!(["recibido","paired"].includes(t?.value?.status?.toLowerCase()??"")&&r?.some(a=>["aprobada"].includes(a.status?.toLowerCase()??"")))}),G=async()=>{const r=g.value.startsWith("Pre")?"pre-publicar":g.value.startsWith("Re")?"re-publicar":"publicar";E([{uid:t?.value?.uid,action:r}])},H=async()=>q([t?.value?.uid]).then(r=>{let a=r?.filter(p=>p.uid!==t?.value?.uid);a.length>0&&u.setRepeatSample(a[0])}),K=l(()=>!!["recibido","esperada"].includes(t?.value?.status?.toLowerCase())),X=async()=>k.push({name:"reject-samples",params:{samples:JSON.stringify([t?.value])}}),Y=l(()=>!!["stored"].includes(t?.value?.status?.toLowerCase())),Z=async()=>O([t?.value?.uid]),ee=async r=>{k.push({path:"/bio-banking",state:{sample:JSON.stringify(r)}})};return(r,a)=>{const p=f("router-link"),y=f("font-awesome-icon"),te=f("router-view"),se=le("motion-slide-right");return c(),m(j,null,[e("div",xe,[he,s(t)?.analysisRequest?.patient?.uid?(c(),ce(p,{key:0,to:{name:"patient-detail",params:{patientUid:s(t)?.analysisRequest?.patient?.uid}},class:"p-2 my-2 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},{default:R(()=>[w(" ... otras muestras ")]),_:1},8,["to"])):C("",!0)]),_e,i((c(),m("div",be,[s(D)?(c(),m("div",ge,[h(s(L),{message:"Cargando detalles de muestra ..."})])):(c(),m("div",fe,[e("div",we,[e("div",Ce,[e("div",null,[s(t)?.priority??0<1?(c(),m("span",{key:0,class:ue(["font-small",{"text-orange-600":s(t)?.priority??0<1}])},Se,2)):C("",!0),w(" "+o(s(t)?.sampleId)+" ",1),s(t)?.analysisRequest?.patient?.uid&&s(b)?.uid?(c(),m("span",Re,[h(y,{icon:"angle-double-right",class:"mx-2"}),h(p,{to:{name:"sample-detail",params:{patientUid:s(t)?.analysisRequest?.patient?.uid,sampleUid:s(b)?.uid}},class:"p-2 my-2 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},{default:R(()=>[w(o(s(b)?.sampleId),1)]),_:1},8,["to"])])):C("",!0)]),e("span",null,o(T(s(t)?.profiles,s(t)?.analyses)),1),e("div",null,[e("div",{onClick:a[0]||(a[0]=n=>x.dropdownOpen=!x.dropdownOpen),class:"hidden md:block md:flex md:items-center ml-2 mt-2"},[e("button",je,o(s(t)?.status),1),e("div",Le,[h(y,{icon:"chevron-down",class:"text-gray-400"})])]),i(e("div",{onClick:a[1]||(a[1]=n=>x.dropdownOpen=!1),class:"fixed inset-0 h-full w-full z-10"},null,512),[[d,x.dropdownOpen]]),i(e("div",$e,[i(e("div",{onClick:a[2]||(a[2]=n=>V()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Recibir ",512),[[d,U.value]]),i(e("div",{onClick:a[3]||(a[3]=n=>J()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Aprobar ",512),[[d,M.value]]),i(e("div",{onClick:a[4]||(a[4]=n=>X()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-orange-600 hover:text-white"}," Rechazar ",512),[[d,K.value]]),i(e("div",{onClick:a[5]||(a[5]=n=>N()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-orange-600 hover:text-white"}," Cancelar ",512),[[d,B.value]]),i(e("div",{onClick:a[6]||(a[6]=n=>z()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-orange-600 hover:text-white"}," Reinstegrar ",512),[[d,A.value]]),i(e("div",{onClick:a[7]||(a[7]=n=>G()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-gray-400 hover:text-white"},o(g.value),513),[[d,Q.value]]),i(e("div",{onClick:a[8]||(a[8]=n=>H()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-gray-400 hover:text-white"}," Invalidar ",512),[[d,W.value]]),i(e("div",{onClick:a[9]||(a[9]=n=>Z()),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-gray-400 hover:text-white"}," Recuperar ",512),[[d,Y.value]])],512),[[d,x.dropdownOpen]])])]),Ie,e("div",Pe,[e("div",qe,[e("div",Ee,[Fe,e("span",Oe,o(s(t)?.analysisRequest?.clientRequestId),1)]),e("div",De,[Te,e("span",Ue,o(s(t)?.analysisRequest?.client?.name),1)]),Ve]),e("div",Be,[e("div",Ne,[Ae,e("span",ze,o(s(t)?.sampleType?.name),1)]),e("div",Me,[Je,e("span",We,o(s(v)(s(t)?.dateCollected,!0)),1)]),e("div",Qe,[Ge,e("span",He,o(s(v)(s(t)?.createdAt,!0)),1)]),e("div",Ke,[Xe,e("span",Ye,o(s(v)(s(t)?.dateReceived,!0)),1)])]),e("div",Ze,[e("div",et,[tt,e("span",st,o(s(v)(s(t)?.dateSubmitted,!0)),1)]),e("div",at,[ot,e("span",rt,o(s(v)(s(t)?.dateVerified,!0)),1)]),e("div",nt,[it,e("span",dt,o(s(v)(s(t)?.datePublished,!0)),1)]),e("div",lt,[ct,e("span",ut,o(s(v)(s(t)?.datePrinted,!0)),1)])])])])]))])),[[se]]),i(e("div",pt,[e("div",mt,[vt,e("div",{class:"hover:underline hover:cursor-pointer",onClick:a[10]||(a[10]=n=>ee(s(t)))},[e("span",null,o(s(t)?.storageContainer?.storageSection?.storageLocation?.storeRoom?.name)+" › ",1),e("span",null,o(s(t)?.storageContainer?.storageSection?.storageLocation?.name)+" › ",1),e("span",null,o(s(t)?.storageContainer?.storageSection?.name)+" › ",1),e("span",null,o(s(t)?.storageContainer?.name)+" › ",1),e("span",null,o(s(t)?.storageSlot),1)])])],512),[[d,s(t)?.status==="stored"]]),i(e("div",yt,[e("ul",null,[(c(!0),m(j,null,pe(s(t)?.rejectionReasons,n=>(c(),m("li",{key:n.uid},o(n.reason),1))),128))])],512),[[d,s(t)?.status==="rejected"]]),h(te)],64)}}});export{bt as default};
