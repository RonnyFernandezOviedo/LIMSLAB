import{_ as u,aE as P,w as k}from"./shipment-53265c2d.js";import{G as c,f as x,c as y,r as l,C as d,d as w,B as e,al as t,ag as i,F as A}from"./_plugin-vue_export-helper-dacf3d65.js";import{a as _}from"./inventory.mutations-f4d79d64.js";import{v as f,d as C}from"./runtime-dom.esm-bundler-98433118.js";const T=c(()=>u(()=>import("./DataTable-f385048e.js"),["assets/DataTable-f385048e.js","assets/_plugin-vue_export-helper-dacf3d65.js","assets/runtime-dom.esm-bundler-98433118.js"])),B=c(()=>u(()=>import("./Drawer-87b382b6.js"),["assets/Drawer-87b382b6.js","assets/_plugin-vue_export-helper-dacf3d65.js"])),b=c(()=>u(()=>import("./SimpleModal-9e28c074.js"),["assets/SimpleModal-9e28c074.js","assets/_plugin-vue_export-helper-dacf3d65.js","assets/runtime-dom.esm-bundler-98433118.js","assets/SimpleModal-f645a074.css"])),D=c(()=>u(()=>import("./StockProductForm-5ba6c493.js"),["assets/StockProductForm-5ba6c493.js","assets/shipment-53265c2d.js","assets/_plugin-vue_export-helper-dacf3d65.js","assets/vue-multiselect.esm-51069c0e.js","assets/runtime-dom.esm-bundler-98433118.js","assets/array-9d3d6c63.js","assets/inventory.mutations-f4d79d64.js"])),E=x({name:"stock-listing",setup(o,M){const{withClientMutation:g}=k(),r=P();r.fetchProducts({first:50,after:"",text:"",sortBy:["-uid"]});const a=y({product:{},quantity:0,type:"",remarks:""}),p=l(!1),h=l(!1),v=l([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"Name",value:"name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Department",value:"department.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Supplier",value:"supplier.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Lot Number",value:"lotNumber",sortable:!1,sortBy:"asc",hidden:!1},{name:"Batch",value:"batch",sortable:!1,sortBy:"asc",hidden:!1},{name:"Size",value:"size",sortable:!1,sortBy:"asc",hidden:!1},{name:"Unit",value:"unit.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Packaging",value:"packaging.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Quantity Received",value:"quantityReceived",sortable:!1,sortBy:"asc",hidden:!1},{name:"Quantity Available",value:"remaining",sortable:!1,sortBy:"asc",hidden:!1},{name:"Expiration",value:"expiryDate",sortable:!1,sortBy:"asc",hidden:!1},{name:"Actions",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(s,m){return d("div",{class:"flex justify-between align-items-center"},[d("button",{type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none",innerHTML:"+ Basket",onClick:()=>{a.product=s,a.quantity=0,p.value=!0}},[]),d("button",{type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none",innerHTML:"+/- Adjust",onClick:()=>{a.product=s,a.quantity=0,h.value=!0}},[])])}}]);let n=y({first:50,before:"",text:"",sortBy:["-uid"],filterAction:!1});return{tableColumns:v,inventoryStore:r,openDrawer:l(!1),openAddProduct:p,choiceProduct:a,openAdjustProduct:h,filterProducts:s=>{n.first=50,n.before="",n.text=s.filterText,n.filterAction=!0,r.fetchProducts(n)},showMoreProducts:s=>{n.first=s.fetchCount,n.before=r.productsPaging?.pageInfo?.endCursor??"",n.text=s.filterText,n.filterAction=!1,r.fetchProducts(n)},countNone:w(()=>r.products?.length+" of "+r.productsPaging.totalCount+" products"),validateMinMax:s=>{const m=Math.max(0,Math.min(a.product.remaining??0,Number(s.target.value)));a.quantity=m},adjustStock:()=>{g(_,{payload:{productUid:a.product.uid,adjustmentType:a.type,adjust:a.quantity,remarks:a.remarks}},"createStockAjustment").then(s=>{console.log(s)})}}},render(){return e(A,null,[e("div",null,[e("button",{onClick:()=>this.openDrawer=!0,class:"px-4 my-2 p-1 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},[t("New Stock")])]),e(T,{columns:this.tableColumns,data:this.inventoryStore.products,toggleColumns:!1,loading:!1,paginable:!0,pageMeta:{fetchCount:10,hasNextPage:!1,countNone:this.countNone},searchable:!0,filterable:!1,selectable:!1,onOnSearch:o=>this.filterProducts(o),onOnPaginate:o=>this.showMoreProducts(o)},null),e(B,{show:this.openDrawer,onClose:()=>this.openDrawer=!1},{header:()=>"New Stock",body:()=>[e(D,{product:void 0,onClose:()=>this.openDrawer=!1},null)],footer:()=>[e("span",null,[t("one")]),e("span",null,[t("two")])]}),this.openAddProduct&&e(b,{onClose:()=>this.openAddProduct=!1,contentWidth:"w-1/4"},{header:()=>e("h3",null,[this.choiceProduct.product.name]),body:()=>e("form",{action:"post",class:"p-1"},[e("label",{class:"flex justify-between items-center gap-4 mb-4"},[e("span",{class:"text-gray-700"},[t("Quantiy")]),i(e("input",{class:"form-input mt-1 block w-full",type:"number",onChange:this.validateMinMax,"onUpdate:modelValue":o=>this.choiceProduct.quantity=o,placeholder:"Name ..."},null),[[f,this.choiceProduct.quantity]])]),e("hr",null,null),e("button",{type:"button",onClick:()=>{this.inventoryStore.addToBasket(this.choiceProduct.product.uid,this.choiceProduct.quantity),this.openAddProduct=!1},class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},[t("Add to basket")])])}),this.openAdjustProduct&&e(b,{onClose:()=>this.openAdjustProduct=!1,contentWidth:"w-1/4"},{header:()=>e("h3",null,[this.choiceProduct.product.name]),body:()=>e("form",{action:"post",class:"p-1"},[e("label",{class:"flex justify-between items-center gap-4 mb-4"},[e("span",{class:"text-gray-700"},[t("Adjustmet")]),i(e("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":o=>this.choiceProduct.type=o},[e("option",{value:"lost"},[t("Lost")]),e("option",{value:"theft"},[t("Theft")]),e("option",{value:"transfer-in"},[t("Transfer In")]),e("option",{value:"transfer-out"},[t("Transfer Out")])]),[[C,this.choiceProduct.type]])]),e("label",{class:"flex justify-between items-center gap-4 mb-4"},[e("span",{class:"text-gray-700"},[t("Quantiy")]),i(e("input",{class:"form-input mt-1 block w-full",type:"number",onChange:this.validateMinMax,"onUpdate:modelValue":o=>this.choiceProduct.quantity=o,placeholder:"Name ..."},null),[[f,this.choiceProduct.quantity]])]),e("label",{class:"flex justify-between items-center gap-4 mb-4"},[e("span",{class:"text-gray-700"},[t("Remarks")]),i(e("textarea",{class:"form-input mt-1 block w-full",rows:"3","onUpdate:modelValue":o=>this.choiceProduct.remarks=o,placeholder:"Remarks ..."},null),[[f,this.choiceProduct.remarks]])]),e("hr",null,null),e("button",{type:"button",onClick:()=>{this.adjustStock(),this.openAdjustProduct=!1},class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},[t("Adjust")])])})])}});export{E as InventoryListing,E as default};