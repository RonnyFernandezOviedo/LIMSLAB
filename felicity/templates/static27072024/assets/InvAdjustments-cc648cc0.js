import{d as s,bi as l,r as n,ai as r,e,F as o,z as d,A as u}from"./index-7e8465c2.js";const f=d(()=>u(()=>import("./DataTable-2b458e5e.js"),["assets/DataTable-2b458e5e.js","assets/DataTable.vue_vue_type_script_setup_true_lang-a5014fb4.js","assets/index-7e8465c2.js","assets/index-fff21e38.css"])),b=s({name:"stock-adjustments",setup(m,i){const a=l();return a.fetchAdjustments({first:50,after:"",text:"",sortBy:["-uid"]}),{tableColumns:n([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"ID",value:"uid",sortable:!1,sortBy:"asc",hidden:!1},{name:"Product",value:"product.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Adjustment Type",value:"adjustmentType",sortable:!1,sortBy:"asc",hidden:!1},{name:"Adjustment",value:"adjust",sortable:!1,sortBy:"asc",hidden:!1},{name:"Date Adjusted",value:"adjustmentDate",sortable:!1,sortBy:"asc",hidden:!1},{name:"Remarks",value:"remarks",sortable:!1,sortBy:"asc",hidden:!1},{name:"Adjusted by",value:"adjustmentBy.firstName",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(t){return r("span",{innerHTML:`${t?.adjustmentBy?.firstName??"---"} ${t?.adjustmentBy?.lastName??""}`},[])}}]),inventoryStore:a}},render(){return e(o,null,[e("div",null,null),e(f,{columns:this.tableColumns,data:this.inventoryStore.adjustments,toggleColumns:!1,loading:!1,paginable:!1,pageMeta:{fetchCount:10,hasNextPage:!1,countNone:""},searchable:!1,filterable:!1,filterMeta:{defaultFilter:"",filters:[]},selectable:!1,allChecked:!1},null)])}});export{b as InventoryAdjustments,b as default};
