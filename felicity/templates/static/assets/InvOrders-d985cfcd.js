import{d as _,S as C,bi as D,r as m,Q as f,ai as g,t as T,e,F as c,h as s,f as n,aa as R,M as b,H as y,z as x,A as k,B as U,bV as I}from"./index-236e333a.js";import{I as N,E as B,S as A}from"./inventory.mutations-9be22269.js";const P=x(()=>k(()=>import("./Drawer-8222541e.js"),["assets/Drawer-8222541e.js","assets/index-236e333a.js","assets/index-a964bbb1.css"])),E=x(()=>k(()=>import("./DataTable-9a1502f3.js"),["assets/DataTable-9a1502f3.js","assets/DataTable.vue_vue_type_script_setup_true_lang-559a40a5.js","assets/index-236e333a.js","assets/index-a964bbb1.css"])),V=_({name:"stock-orders",setup(t,u){const{withClientQuery:O,withClientMutation:p}=U(),w=C(),o=D();o.fetchStockOrders({first:50,after:"",text:"",status:"preperation",sortBy:["-uid"]});const i=m(!1),d=f({order:{},products:[],departmentUid:""}),S=async r=>{await O(I,{stockOrderUid:r},"stockOrderProductAll").then(a=>{d.products=a?.map(h=>({...h,issue:h.quantity}))})},v=m([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"Order Number",value:"orderNumber",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(r){return g("span",{innerHTML:r?.orderNumber,onClick:()=>{d.order=r,d.departmentUid=r?.department?.uid,S(r?.uid),i.value=!0}},[])}},{name:"Department",value:"department.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Orderer",value:"orderBy",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(r){return g("span",{innerHTML:`${r?.orderBy?.firstName??"---"} ${r?.orderBy?.lastName??""}`},[])}},{name:"Issued By",value:"status",sortable:!1,sortBy:"asc",hidden:!1},{name:"Status",value:"status",sortable:!1,sortBy:"asc",hidden:!1}]);let l=f({first:50,before:"",text:"",sortBy:["-uid"],filterAction:!1,status:"preperation"});return{tableColumns:v,inventoryStore:o,setupStore:w,slectedStockOrder:d,openDrawer:i,stockOrderParams:l,filterOptions:[{name:"All",value:""},{name:"Preperation",value:"preperation"},{name:"Submitted",value:"submitted"},{name:"Processed",value:"processed"}],filterStockOrders:r=>{console.log(r),l.first=50,l.before="",l.text=r.filterText,l.status=r.filterStatus,l.filterAction=!0,o.fetchStockOrders(l)},showMoreStockOrders:r=>{l.first=r.fetchCount,l.before=o.stockOrdersPaging?.pageInfo?.endCursor??"",l.text=r.filterText,l.status=r.filterStatus,l.filterAction=!1,o.fetchStockOrders(l)},countNone:T(()=>o.stockOrders?.length+" of "+o.stockOrdersPaging.totalCount+" orders"),issueOrder:()=>{const r=[];for(const a of d.products)r.push({productUid:a.product.uid,quantity:a.issue,remarks:""});p(N,{uid:d?.order?.uid,payload:r},"issueStockOrder").then(a=>{o.issueStockOrder(a),i.value=!1})},removeOrderProduct:r=>{d.products=[...d.products.filter(a=>a.product.uid!==r)]},updateOrder:()=>{const r=[];for(const a of d.products)r.push({productUid:a.product.uid,quantity:a.quantity,remarks:""});p(B,{uid:d.order.uid,payload:{orderProducts:r,departmentUid:d.departmentUid}},"updateStockOrder").then(a=>{o.updateStockOrder(a?.stockOrder),i.value=!1})},submitOrder:()=>{p(A,{uid:d.order.uid},"submitStockOrder").then(r=>{o.updateStockOrder(r),i.value=!1})}}},render(){return e("div",{class:"mt-2"},[e(E,{columns:this.tableColumns,data:this.inventoryStore.stockOrders,toggleColumns:!1,loading:!1,paginable:!0,pageMeta:{fetchCount:10,hasNextPage:!1,countNone:this.countNone},searchable:!0,filterable:!0,filterMeta:{defaultFilter:this.stockOrderParams.status,filters:this.filterOptions},selectable:!1,onOnSearch:t=>this.filterStockOrders(t),onOnPaginate:t=>this.showMoreStockOrders(t)},null),e(P,{show:this.openDrawer,onClose:()=>this.openDrawer=!1},{header:()=>`Order: ${this.slectedStockOrder?.order.orderNumber}`,body:()=>e(c,null,[this.slectedStockOrder?.order?.status=="preparation"&&e(c,null,[e("div",null,[s("Status: "),this.slectedStockOrder?.order?.status]),e("hr",null,null),e("label",{class:"flex justify-between items-center gap-4 mb-4"},[e("span",{class:"text-gray-700"},[s("Department")]),n(e("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":t=>this.slectedStockOrder.departmentUid=t},[this.setupStore.departments.map(t=>e("option",{value:t.uid},[t.name]))]),[[R,this.slectedStockOrder.departmentUid]])]),e("hr",null,null),e("div",{class:"overflow-x-auto mt-2 mb-4"},[e("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},[e("table",{class:"min-w-full"},[e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},[s("Product Name")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Quantity")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},null)])]),e("tbody",{class:"bg-white"},[this.slectedStockOrder.products.map(t=>n(e("tr",{key:t.product.uid},[e("td",null,[e("p",null,[t.product.name])]),e("td",{class:"px-1 py-1 whitespace-no-wrap"},[e("label",{class:"block"},[n(e("input",{class:"form-input",type:"number","onUpdate:modelValue":u=>t.quantity=u,placeholder:""},null),[[y,t.quantity]])])]),e("td",{class:"px-1 whitespace-no-wrap"},[e("button",{type:"button",class:"bg-sky-800 text-white rounded-sm leading-none px-2 py-1",onClick:()=>this.removeOrderProduct(t.product.uid)},[s("Remove")])])]),[[b("motion-slide-right")]]))])])])]),e("hr",null,null),e("div",{class:"my-2"},[e("p",{class:"italic text-red-400 text-xs"},[s("If you made any changes here please update order first before finalising else your changes wont be saved")])]),e("hr",null,null),e("div",{class:"flex justify-start gap-x-4"},[e("button",{type:"button",class:"mt-4 bg-sky-800 text-white rounded-sm leading-none px-2 py-1",onClick:()=>this.updateOrder()},[s("Update Order")]),e("button",{type:"button",class:"mt-4 bg-sky-800 text-white rounded-sm leading-none px-2 py-1",onClick:()=>this.submitOrder()},[s("Finalize Order")])])]),["pending","submitted"].includes(this.slectedStockOrder?.order?.status??"")&&e(c,null,[e("div",null,[s("Status: "),this.slectedStockOrder?.order?.status]),e("hr",null,null),e("div",{class:"overflow-x-auto mt-4 mb-4"},[e("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},[e("table",{class:"min-w-full"},[e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},[s("Product Name")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Available")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Requested")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Issue")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},null)])]),e("tbody",{class:"bg-white"},[this.slectedStockOrder.products.map(t=>n(e("tr",{key:t.uid},[e("td",null,[e("p",null,[t.product.name])]),e("td",null,[e("p",null,[t.product.remaining])]),e("td",null,[e("p",null,[t.quantity])]),e("td",{class:"px-1 py-1 whitespace-no-wrap"},[e("label",{class:"block"},[n(e("input",{class:"form-input",type:"number","onUpdate:modelValue":u=>t.issue=u,placeholder:""},null),[[y,t.issue]])])])]),[[b("motion-slide-right")]]))])])])]),e("hr",null,null),e("button",{type:"button",class:"mt-4 bg-sky-800 text-white rounded-sm leading-none px-2 py-1",onClick:()=>this.issueOrder()},[s("Issue Order")])]),["processed"].includes(this.slectedStockOrder?.order?.status??"")&&e(c,null,[e("div",null,[s("Status: "),this.slectedStockOrder?.order?.status]),e("hr",null,null),e("h4",null,[s("Request Details")]),e("hr",null,null),e("div",{class:"overflow-x-auto mt-4 mb-4"},[e("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},[e("table",{class:"min-w-full"},[e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},[s("Product Name")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Available")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Requested")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},null)])]),e("tbody",{class:"bg-white"},[this.slectedStockOrder.products.map(t=>n(e("tr",{key:t.uid},[e("td",null,[e("p",null,[t.product.name])]),e("td",null,[e("p",null,[t.product.remaining])]),e("td",null,[e("p",null,[t.quantity])])]),[[b("motion-slide-right")]]))])])])]),e("hr",null,null)])]),footer:()=>[]})])}});export{V as InventoryOrders,V as default};
