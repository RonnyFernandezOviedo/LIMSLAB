import{V as L,Q as v,t as k,ao as P,U as s,ap as R,aq as U,ar as M,as as b,at as q,au as I,av as D,aw as O,ax as z,ay as V,az as j,aA as F,aB as Q,B as W,ah as $}from"./index-7e8465c2.js";function J(){const i=L(),{withClientMutation:r,withClientQuery:u}=W(),{toastInfo:m}=$(),d=v({samples:k(()=>i.getSamples)}),o=async t=>i.updateSamplesStatus(t),c=async t=>i.updateSampleStatus(t),h=async t=>i.updateSamples(t),f=async t=>i.addSampleClones(t),l=async t=>{t&&i.fetchAnalysisResultsForSample(t)},p=async t=>{try{await s.fire({title:"Esta seguro?",text:"Usted quiere cancelar estas muestras",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, cancelar ahora!",cancelButtonText:"No, no cancelar!"}).then(async a=>{a.isConfirmed&&(r(R,{samples:t},"cancelSamples").then(e=>{e.samples.length<=0||(o(e.samples),c(e.samples[0]),e.samples.length===1&&l(e.samples[0].uid))}),await s.fire("Ok!","Sus muestras han sido canceladas.","success").then(e=>{}))})}catch{}},S=async t=>{try{await s.fire({title:"Esta seguro?",text:"Usted quiere clonar estas muestras",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, clonar ahora!",cancelButtonText:"No, no clonar!"}).then(async a=>{a.isConfirmed&&(r(U,{samples:t},"cloneSamples").then(e=>{e.samples.length<=0||f(e.samples)}),await s.fire("ok!","Procesando en progreso...","success").then(e=>{}))})}catch{}},B=async t=>{try{await s.fire({title:"Esta seguro?",text:"Usted quiere reintegrar estas muestras",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, reintegrar ahora!",cancelButtonText:"No, no reintegrar!"}).then(async a=>{a.isConfirmed&&(r(M,{samples:t},"reInstateSamples").then(e=>{e.samples.length<=0||(o(e.samples),c(e.samples[0]),e.samples.length===1&&l(e.samples[0].uid))}),await s.fire("ok!","Sus muestras han sido reintegradas.","success").then(e=>{}))})}catch{}},w=async t=>{try{await s.fire({title:"Esta seguro?",text:"Usted quiere recibir estas muestras",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, recibir ahora!",cancelButtonText:"No, no recibir!"}).then(async a=>{a.isConfirmed&&(r(b,{samples:t},"receiveSamples").then(e=>{e.samples.length<=0||(o(e.samples),c(e.samples[0]),e.samples.length===1&&l(e.samples[0].uid))}),await s.fire("ok!","Sus muestras han sido recibidas.","success").then(e=>{}))})}catch{}},C=async t=>{try{await s.fire({title:"Esta seguro?",text:"Usted quiere recuperar estas muestras del alamcenamiento",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, recuperar ahora!",cancelButtonText:"No, no recuperar!"}).then(async a=>{a.isConfirmed&&(r(q,{sampleUids:t},"recoverSamples").then(e=>{e.length<=0||(h(e.samples),e.samples.length===1&&l(e.samples[0].uid))}),await s.fire("ok!","Sus muestras han sido recuperadas.","success").then(e=>{}))})}catch{}},g=async t=>{try{await s.fire({title:"Esta seguro?",text:"Usted quiere publicar estas muestras",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, publicar ahora!",cancelButtonText:"No, no publicar!"}).then(async a=>{a.isConfirmed&&(r(I,{samples:t},"publishSamples").then(e=>{m(e.message)}),await s.fire("ok!","Sus muetras han sido cargadas para impresion","success").then(e=>{}))})}catch{}},y=async t=>{try{await s.fire({title:"Esta seguro?",text:"Usted quiere descargar pdfs",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, descargar ahora!",cancelButtonText:"No, no descargar!"}).then(async a=>{a.isConfirmed&&(u(D,{uids:t},"impressReportsDownload").then(e=>{const n=document.createElement("a");n.href=`data:application/pdf;base64,${e}`,n.setAttribute("download","impress-report.pdf"),n.click()}),await s.fire("ok!","Downloading .....","success").then(e=>{}))})}catch{}},E=async t=>{try{await s.fire({title:"Esta seguro?",text:"Usted quiere descargar este reporte",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, descargar ahora!",cancelButtonText:"No, no no descargar!"}).then(async a=>{a.isConfirmed&&(u(O,{uid:t},"impressReportDownload").then(e=>{const n=document.createElement("a");n.href=`data:application/pdf;base64,${e}`,n.setAttribute("download","impress-report.pdf"),n.click()}),await s.fire("ok!","Downloading .....","success").then(e=>{}))})}catch{}},x=async t=>{try{await s.fire({title:"Esta seguro?",text:"Usted quiere marcar como impreso",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, marcar ahora!",cancelButtonText:"No, no marcar!"}).then(async a=>{a.isConfirmed&&(r(z,{samples:t},"printSamples").then(e=>{e.samples.length<=0||(o(e.samples),c(e.samples[0]),e.samples.length===1&&l(e.samples[0].uid))}),await s.fire("ok!","Sus muestras han sido marcadas como impresas.","success").then(e=>{}))})}catch{}},T=async t=>{try{await s.fire({title:"Esta seguro?",text:"Usted quiere verificar estas muestras",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, verificar ahora!",cancelButtonText:"No, no verificar!"}).then(async a=>{a.isConfirmed&&(r(V,{samples:t},"verifySamples").then(e=>{e.samples.length<=0||(o(e.samples),c(e.samples[0]))}),await s.fire("ok!","Sus muestras han sido verificadas.","success").then(e=>{}))})}catch{}},_=async t=>{let a=!1;try{await s.fire({title:"Esta seguro?",text:"Usted quiere rechazar estas muestras",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Rechazar ahora!",cancelButtonText:"No, no rechazar!"}).then(async e=>{e.isConfirmed&&(r(j,{samples:t},"rejectSamples").then(n=>{a=!0,!(n.samples.length<=0)&&o(n.samples)}),await s.fire("ok","Sus muestras han sido rechazadas.","success").then(n=>{}))})}catch{}return a},A=async t=>{let a=[];try{await s.fire({title:"Esta seguro?",text:"Usted quiere invalidar estas muetsras",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, invalidar ahora!",cancelButtonText:"No, no invalidar!"}).then(async e=>{e.isConfirmed&&(r(F,{samples:t},"invalidateSamples").then(n=>{n.samples.length<=0||(o(n.samples),c(n.samples[0]))}),await s.fire("ok!","Sus muestras han sido invalidadas.","success").then(n=>{}))})}catch{}return a},N=async t=>{let a=[];try{await s.fire({title:"Esta seguro?",text:"Usted quiere almacenar estas muestras",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, almacenar ahora!",cancelButtonText:"No, no almacenar!"}).then(async e=>{e.isConfirmed&&(r(Q,{payload:t},"storeSamples").then(n=>{n.samples.length<=0||o(n.samples)}),await s.fire("ok!","Sus muestras han sido almacenadas.","success").then(n=>{}))})}catch{}return a};return{...P(d),cancelSamples:p,reInstateSamples:B,receiveSamples:w,recoverSamples:C,verifySamples:T,printSamples:x,publishSamples:g,downloadSamplesImpress:y,downloadImpress:E,invalidateSamples:A,rejectSamples:_,storeSamples:N,cloneSamples:S}}export{J as u};
