import{d as J,a8 as X,aG as Y,L as Z,af as ee,r as k,ai as _,aj as te,Q as se,a$ as ae,t as E,o as i,c as u,e as C,u as n,b as t,f as c,v as oe,G as R,I as d,w as y,N as ne,F as m,y as S,x as g,aa as M,H as re,i as le,z as w,B as ie,A as x}from"./index-7e8465c2.js";import{c as ue,d as f,u as de,b as h}from"./array-631ae7c2.js";import{h as ce,o as me,a as fe}from"./constants-71a97445.js";const he={class:"flex justify-between items-center"},ve=t("h3",null,"Create Worksheet",-1),pe=t("hr",null,null,-1),be={action:"post",class:"p-1"},ke={class:"grid grid-cols-3 gap-x-4 mb-4"},_e={class:"block col-span-1 mb-2"},ye=t("span",{class:"text-gray-700"},"Analyst",-1),Se=["value"],ge={class:"block col-span-1 mb-2"},we=t("span",{class:"text-gray-700"},"Worksheet Template",-1),xe=t("option",{value:"undefined"},null,-1),We=["value"],Te={class:"block col-span-1 mb-2"},Ue=t("span",{class:"text-gray-700"},"How Many",-1),Ae=t("hr",null,null,-1),Ne=J({__name:"WorkSheetListing",setup(Ee){const N=w(()=>x(()=>import("./SimpleModal-16734371.js"),["assets/SimpleModal-16734371.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/SimpleModal-98e7299b.css"])),B=w(()=>x(()=>import("./DataTable-2b458e5e.js"),["assets/DataTable-2b458e5e.js","assets/DataTable.vue_vue_type_script_setup_true_lang-a5014fb4.js","assets/index-7e8465c2.js","assets/index-fff21e38.css"])),I=w(()=>x(()=>import("./PageHeading-e084e044.js"),["assets/PageHeading-e084e044.js","assets/PageHeading.vue_vue_type_script_setup_true_lang-11482800.js","assets/index-7e8465c2.js","assets/index-fff21e38.css"])),l=X(),W=Y(),{withClientMutation:P}=ie(),{workSheets:T,fetchingWorkSheets:L,workSheetPageInfo:U,workSheetTemplates:V}=Z(l);ee();let r=k(!1);const D=k([{name:"All",value:""},{name:"Pendiente",value:"pendiente"},{name:"Esperando",value:"Esperando"},{name:"Aprobada",value:"aprobada"},{name:"Empty",value:"empty"}]),O=k([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"WorkSheet Id",value:"workSheetId",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,a){return _(te,{to:{name:"worksheet-detail",params:{workSheetUid:e?.uid}},innerHTML:e?.worksheetId})}},{name:"Analysis/Test",value:"analysis.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Samples",value:"assignedCount",sortable:!1,sortBy:"asc",hidden:!1},{name:"Instrument",value:"instrument.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Analyst",value:"clientPatientId",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,a){return _("div",{innerHTML:A(e?.analyst)})}},{name:"Status",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,a){return _("button",{type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none",innerHTML:e?.state||"unknown"})}}]);l.removeWorksheet();let o=se({first:25,before:"",status:"",text:"",sort:["-uid"],filterAction:!1});l.fetchWorkSheets(o),l.fetchWorkSheetTemplates(),W.fetchUsers({});const H=ue({analystUid:f().required("Analyst is Required").typeError("Analyst is Required"),templateUid:f().typeError("Worksheet Template is required"),instrumentUid:f(),count:f().typeError("Required number of worksheets must be defined")}),{handleSubmit:F,errors:q}=de({validationSchema:H,initialValues:{count:1,analystUid:void 0,templateUid:void 0,instrumentUid:void 0}}),{value:v}=h("count"),{value:p}=h("analystUid"),{value:b}=h("templateUid");h("instrumentUid");const $=F(e=>{r.value=!1,P(ae,e,"createWorksheet").then(a=>{l.addWorksheet(a),r.value=!1})});function j(e){o.first=e.fetchCount,o.before=U?.value?.endCursor??"",o.text=e.filterText,o.status=e.filterStatus,o.filterAction=!1,l.fetchWorkSheets(o)}function G(e){o.first=25,o.before="",o.text=e.filterText,o.status=e.filterStatus,o.filterAction=!0,l.fetchWorkSheets(o)}const K=E(()=>W.getUsers),A=e=>e?.auth?.userName?e?.auth?.userName:e?.firstName?e.firstName+" "+e.lastName:"----",z=E(()=>T?.value?.length+" of "+l.getWorkSheetCount+" WorkSheets");return(e,a)=>(i(),u(m,null,[C(n(I),{title:"Worksheets"}),t("div",he,[t("div",null,[c(t("button",{onClick:a[0]||(a[0]=R(s=>d(r)?r.value=!0:r=!0,["prevent"])),class:"p-2 h-10 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add WorkSheet ",512),[[oe,ce(fe.CREATE,me.WORKSHEET)]])])]),C(n(B),{columns:O.value,data:n(T),toggleColumns:!0,loading:n(L),paginable:!0,pageMeta:{fetchCount:n(o).first,hasNextPage:n(U)?.hasNextPage,countNone:z.value},searchable:!0,filterable:!0,filterMeta:{defaultFilter:n(o).status,filters:D.value},onOnSearch:G,onOnPaginate:j,selectable:!1},{footer:y(()=>[]),_:1},8,["columns","data","loading","pageMeta","filterMeta"]),n(r)?(i(),ne(n(N),{key:0,onClose:a[5]||(a[5]=s=>d(r)?r.value=!1:r=!1)},{header:y(()=>[t("div",null,[ve,pe,t("ul",null,[(i(!0),u(m,null,S(Object.values(n(q)),(s,Q)=>(i(),u("li",{key:Q,class:"text-orange-600"},g(s),1))),128))])])]),body:y(()=>[t("form",be,[t("div",ke,[t("label",_e,[ye,c(t("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":a[1]||(a[1]=s=>d(p)?p.value=s:null)},[(i(!0),u(m,null,S(K.value,s=>(i(),u("option",{key:s.uid,value:s.uid},g(A(s)),9,Se))),128))],512),[[M,n(p)]])]),t("label",ge,[we,c(t("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":a[2]||(a[2]=s=>d(b)?b.value=s:null)},[xe,(i(!0),u(m,null,S(n(V),s=>(i(),u("option",{key:s.uid,value:s.uid},g(s.name),9,We))),128))],512),[[M,n(b)]])]),t("label",Te,[Ue,c(t("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":a[3]||(a[3]=s=>d(v)?v.value=s:null),min:"1"},null,512),[[re,n(v)]])])]),Ae,t("button",{type:"button",onClick:a[4]||(a[4]=R(s=>n($)(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):le("",!0)],64))}});export{Ne as default};
