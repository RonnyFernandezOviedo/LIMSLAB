import{d as J,a8 as X,aI as Y,K as Z,af as ee,r as k,ai as _,aj as te,Q as se,b2 as ae,t as C,o as i,c as u,e as E,u as n,b as t,f as c,v as oe,G as R,I as d,w as y,L as ne,F as m,y as g,x as S,aa as M,H as re,i as le,z as w,B as ie,A as x}from"./index-08b76645.js";import{c as ue,d as f,u as de,b as h}from"./array-90ee850b.js";import{h as ce,o as me,a as fe}from"./constants-514fb6d1.js";const he={class:"flex justify-between items-center"},ve=t("h3",null,"Create Worksheet",-1),pe=t("hr",null,null,-1),be={action:"post",class:"p-1"},ke={class:"grid grid-cols-3 gap-x-4 mb-4"},_e={class:"block col-span-1 mb-2"},ye=t("span",{class:"text-gray-700"},"Analyst",-1),ge=["value"],Se={class:"block col-span-1 mb-2"},we=t("span",{class:"text-gray-700"},"Worksheet Template",-1),xe=t("option",{value:"undefined"},null,-1),We=["value"],Ae={class:"block col-span-1 mb-2"},Te=t("span",{class:"text-gray-700"},"How Many",-1),Ue=t("hr",null,null,-1),Ie=J({__name:"WorkSheetListing",setup(Ce){const I=w(()=>x(()=>import("./SimpleModal-726a79fc.js"),["assets/SimpleModal-726a79fc.js","assets/index-08b76645.js","assets/index-5bc4f6f2.css","assets/SimpleModal-98e7299b.css"])),N=w(()=>x(()=>import("./DataTable-05c18ae8.js"),["assets/DataTable-05c18ae8.js","assets/DataTable.vue_vue_type_script_setup_true_lang-8271d382.js","assets/index-08b76645.js","assets/index-5bc4f6f2.css"])),B=w(()=>x(()=>import("./PageHeading-5d3910e1.js"),["assets/PageHeading-5d3910e1.js","assets/PageHeading.vue_vue_type_script_setup_true_lang-f63b1c5e.js","assets/index-08b76645.js","assets/index-5bc4f6f2.css"])),l=X(),W=Y(),{withClientMutation:P}=ie(),{workSheets:A,fetchingWorkSheets:L,workSheetPageInfo:T,workSheetTemplates:V}=Z(l);ee();let r=k(!1);const D=k([{name:"All",value:""},{name:"Pending",value:"pending"},{name:"Awaiting",value:"awaiting"},{name:"Approved",value:"approved"},{name:"Empty",value:"empty"}]),O=k([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"WorkSheet Id",value:"workSheetId",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,a){return _(te,{to:{name:"worksheet-detail",params:{workSheetUid:e?.uid}},innerHTML:e?.worksheetId})}},{name:"Analysis/Test",value:"analysis.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Samples",value:"assignedCount",sortable:!1,sortBy:"asc",hidden:!1},{name:"Instrument",value:"instrument.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Analyst",value:"clientPatientId",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,a){return _("div",{innerHTML:U(e?.analyst)})}},{name:"Status",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,a){return _("button",{type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none",innerHTML:e?.state||"unknown"})}}]);l.removeWorksheet();let o=se({first:25,before:"",status:"",text:"",sort:["-uid"],filterAction:!1});l.fetchWorkSheets(o),l.fetchWorkSheetTemplates(),W.fetchUsers({});const H=ue({analystUid:f().required("Analyst is Required").typeError("Analyst is Required"),templateUid:f().typeError("Worksheet Template is required"),instrumentUid:f(),count:f().typeError("Required number of worksheets must be defined")}),{handleSubmit:F,errors:q}=de({validationSchema:H,initialValues:{count:1,analystUid:void 0,templateUid:void 0,instrumentUid:void 0}}),{value:v}=h("count"),{value:p}=h("analystUid"),{value:b}=h("templateUid");h("instrumentUid");const j=F(e=>{r.value=!1,P(ae,e,"createWorksheet").then(a=>{l.addWorksheet(a),r.value=!1})});function $(e){o.first=e.fetchCount,o.before=T?.value?.endCursor??"",o.text=e.filterText,o.status=e.filterStatus,o.filterAction=!1,l.fetchWorkSheets(o)}function K(e){o.first=25,o.before="",o.text=e.filterText,o.status=e.filterStatus,o.filterAction=!0,l.fetchWorkSheets(o)}const z=C(()=>W.getUsers),U=e=>e?.auth?.userName?e?.auth?.userName:e?.firstName?e.firstName+" "+e.lastName:"----",G=C(()=>A?.value?.length+" of "+l.getWorkSheetCount+" WorkSheets");return(e,a)=>(i(),u(m,null,[E(n(B),{title:"Worksheets"}),t("div",he,[t("div",null,[c(t("button",{onClick:a[0]||(a[0]=R(s=>d(r)?r.value=!0:r=!0,["prevent"])),class:"p-2 h-10 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add WorkSheet ",512),[[oe,ce(fe.CREATE,me.WORKSHEET)]])])]),E(n(N),{columns:O.value,data:n(A),toggleColumns:!0,loading:n(L),paginable:!0,pageMeta:{fetchCount:n(o).first,hasNextPage:n(T)?.hasNextPage,countNone:G.value},searchable:!0,filterable:!0,filterMeta:{defaultFilter:n(o).status,filters:D.value},onOnSearch:K,onOnPaginate:$,selectable:!1},{footer:y(()=>[]),_:1},8,["columns","data","loading","pageMeta","filterMeta"]),n(r)?(i(),ne(n(I),{key:0,onClose:a[5]||(a[5]=s=>d(r)?r.value=!1:r=!1)},{header:y(()=>[t("div",null,[ve,pe,t("ul",null,[(i(!0),u(m,null,g(Object.values(n(q)),(s,Q)=>(i(),u("li",{key:Q,class:"text-orange-600"},S(s),1))),128))])])]),body:y(()=>[t("form",be,[t("div",ke,[t("label",_e,[ye,c(t("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":a[1]||(a[1]=s=>d(p)?p.value=s:null)},[(i(!0),u(m,null,g(z.value,s=>(i(),u("option",{key:s.uid,value:s.uid},S(U(s)),9,ge))),128))],512),[[M,n(p)]])]),t("label",Se,[we,c(t("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":a[2]||(a[2]=s=>d(b)?b.value=s:null)},[xe,(i(!0),u(m,null,g(n(V),s=>(i(),u("option",{key:s.uid,value:s.uid},S(s.name),9,We))),128))],512),[[M,n(b)]])]),t("label",Ae,[Te,c(t("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":a[3]||(a[3]=s=>d(v)?v.value=s:null),min:"1"},null,512),[[re,n(v)]])])]),Ue,t("button",{type:"button",onClick:a[4]||(a[4]=R(s=>n(j)(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):le("",!0)],64))}});export{Ie as default};
