import{d as i,Q as n,o as u,N as p,u as h,z as f,A as _}from"./index-b75e268d.js";const v=i({__name:"index",setup(b){const s=f(()=>_(()=>import("./DataTable-c38a1d26.js"),["assets/DataTable-c38a1d26.js","assets/DataTable.vue_vue_type_script_setup_true_lang-82b65dd3.js","assets/index-b75e268d.js","assets/index-a964bbb1.css"])),l=n([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,hidden:!0},{name:"Patient Name",value:"patient.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Gender",value:"patient.gender",sortable:!1,sortBy:"asc",hidden:!0},{name:"BirthDate",value:"patient.birthDate",sortable:!1,sortBy:"asc",hidden:!0},{name:"Sample ID",value:"sampleId",sortable:!1,sortBy:"asc",hidden:!1},{name:"Sample Type",value:"sampleType.name",sortable:!1,sortBy:"asc",hidden:!1}]),a=n([{sampleId:"BP23-982392",sampleType:{name:"Blood Plasma"},patient:{name:"Aurthur",gender:"Female",birthDate:"2020-12-12"}},{sampleId:"DBS23-0001",sampleType:{name:"Dry Blood Spot"},patient:{name:"Tatenda",gender:"Female",birthDate:"2020-12-12"}}]),r=e=>{},o=e=>{},c=e=>{},d=e=>{Object.assign(a,[...a.map(t=>t.sampleId===e.entry.sampleId?{...t,checked:!0}:t)])},m=()=>Object.assign(a,[...a.map(e=>({...e,checked:!0}))]);return(e,t)=>(u(),p(h(s),{columns:l,data:a,toggleColumns:!0,loading:!1,onOnSort:r,paginable:!0,pageMeta:{fetchCount:50,hasNextPage:!1},onOnPaginate:o,searchable:!0,searchMeta:{defaultFilter:"all",filters:[{name:"All",value:"all"}]},onOnSearch:c,onOnCheck:d,onOnCheckAll:m},null,8,["columns","data"]))}});export{v as default};
