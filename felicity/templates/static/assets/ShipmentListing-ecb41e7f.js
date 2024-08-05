import{d as Q,b0 as J,L as K,af as W,r as p,ai as i,aj as X,Q as Y,b1 as Z,t as ee,o as u,c as m,e as C,u as n,b as e,G as M,I as c,w as h,f,ab as te,h as se,N as ae,F as x,y as A,x as B,aa as oe,H as S,i as ne,z as I,B as le,A as L}from"./index-7e8465c2.js";import re from"./SimpleModal-16734371.js";import{c as ie,d as T,a as R,u as ue,b}from"./array-631ae7c2.js";const ce={class:"flex justify-between items-center"},de={class:"flex"},me=e("span",{class:"mx-2"},"InBound",-1),fe=e("h3",null,"Create Shipment",-1),pe=e("hr",null,null,-1),he={action:"post",class:"p-1"},be={class:"grid grid-cols-3 gap-x-4 mb-4"},ve={class:"block col-span-1 mb-2"},ge=e("span",{class:"text-gray-700"},"External Laboratory",-1),_e=["value"],ye={class:"block col-span-1 mb-2"},xe=e("span",{class:"text-gray-700"},"Courier",-1),Se={class:"block col-span-1 mb-2"},ke=e("span",{class:"text-gray-700"},"How Many",-1),we={class:"grid grid-cols-3 gap-x-4 mb-4"},Ce={class:"block col-span-3 mb-2"},Me=e("span",{class:"text-gray-700"},"Comment",-1),Ae=e("hr",null,null,-1),Re=Q({__name:"ShipmentListing",setup(Be){const U=I(()=>L(()=>import("./PageHeading-e084e044.js"),["assets/PageHeading-e084e044.js","assets/PageHeading.vue_vue_type_script_setup_true_lang-11482800.js","assets/index-7e8465c2.js","assets/index-fff21e38.css"])),V=I(()=>L(()=>import("./DataTable-2b458e5e.js"),["assets/DataTable-2b458e5e.js","assets/DataTable.vue_vue_type_script_setup_true_lang-a5014fb4.js","assets/index-7e8465c2.js","assets/index-fff21e38.css"])),l=J(),{withClientMutation:N}=le(),{shipments:k,fetchingShipments:D,shipmentPageInfo:w}=K(l);W();let r=p(!1);const d=p(!1),P=p([{name:"All",value:""},{name:"Due",value:"due"},{name:"Awaiting",value:"esperando"},{name:"Failed",value:"failed"}]),E=p([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"Shipment Id",value:"shipmentId",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(o,t){return i(X,{to:{name:"shipment-detail",params:{shipmentUid:o?.uid}},innerHTML:o?.shipmentId})}},{name:"External Laboratory",value:"laboratory.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Courier",value:"courier",sortable:!1,sortBy:"asc",hidden:!1},{name:"Flow Detail",value:"",sortable:!1,sortBy:"asc",hidden:!1},{name:"Assigned Count",value:"assignedCount",sortable:!1,sortBy:"asc",hidden:!1},{name:"Current Status",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(o,t){return i("button",{type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none",innerHTML:o?.state||"unknown"})}},{name:"",value:"",sortable:!1,showInToggler:!1,hidden:!1,customRender:function(o,t){return o.incoming?i("span",{class:"text-green-600"},i("i",{class:"fa fa-reply-all"})):i("span",{class:"text-orange-600"},i("i",{class:"fa fa-share-from-square"}))}}]);l.removeShipment();let a=Y({first:25,before:"",incoming:d.value,status:"",text:"",sort:["-uid"],filterAction:!1});l.fetcShipments(a),l.fetchReferralLaboratories();const F=ie({laboratoryUid:T().required("Laboratory is Required").typeError("Laboratory is Required"),comment:R().nullable(),courier:R().required("Courier is required"),count:T()}),{handleSubmit:q,errors:H}=ue({validationSchema:F,initialValues:{laboratoryUid:void 0,comment:"",courier:"",count:1}}),{value:v}=b("laboratoryUid"),{value:g}=b("comment"),{value:_}=b("courier"),{value:y}=b("count"),O=q(o=>{r.value=!1,N(Z,{payload:o},"createShipment").then(t=>{l.addShipment(t),r.value=!1})});function $(o){a.first=o.fetchCount,a.before=w?.value?.endCursor??"",a.text=o.filterText,a.status=o.filterStatus,a.incoming=d.value,a.filterAction=!1,l.fetcShipments(a)}function j(o){a.first=25,a.before="",a.text=o.filterText,a.status=o.filterStatus,a.incoming=d.value,a.filterAction=!0,l.clearShipment(),l.fetcShipments(a)}const z=ee(()=>k?.value?.length+" of "+l.getShipmentCount+" Shipments");return(o,t)=>(u(),m(x,null,[C(n(U),{title:"Shipments"}),e("div",ce,[e("div",null,[e("button",{onClick:t[0]||(t[0]=M(s=>c(r)?r.value=!0:r=!0,["prevent"])),class:"p-2 h-10 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add Shipment ")])]),C(n(V),{columns:E.value,data:n(k),toggleColumns:!0,loading:n(D),paginable:!0,pageMeta:{fetchCount:n(a).first,hasNextPage:n(w)?.hasNextPage,countNone:z.value},searchable:!0,filterable:!0,filterMeta:{defaultFilter:n(a).status,filters:P.value},onOnSearch:j,onOnPaginate:$,selectable:!1},{"pre-filter":h(()=>[e("label",de,[f(e("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=s=>d.value=s)},null,512),[[te,d.value]]),se(),me])]),footer:h(()=>[]),_:1},8,["columns","data","loading","pageMeta","filterMeta"]),n(r)?(u(),ae(re,{key:0,onClose:t[7]||(t[7]=s=>c(r)?r.value=!1:r=!1)},{header:h(()=>[e("div",null,[fe,pe,e("ul",null,[(u(!0),m(x,null,A(Object.values(n(H)),(s,G)=>(u(),m("li",{key:G,class:"text-orange-600"},B(s),1))),128))])])]),body:h(()=>[e("form",he,[e("div",be,[e("label",ve,[ge,f(e("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":t[2]||(t[2]=s=>c(v)?v.value=s:null)},[(u(!0),m(x,null,A(n(l).laboratories,s=>(u(),m("option",{key:s.uid,value:s.uid},B(s.name),9,_e))),128))],512),[[oe,n(v)]])]),e("label",ye,[xe,f(e("input",{type:"text",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[3]||(t[3]=s=>c(_)?_.value=s:null)},null,512),[[S,n(_)]])]),e("label",Se,[ke,f(e("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[4]||(t[4]=s=>c(y)?y.value=s:null),min:"1",default:"1/"},null,512),[[S,n(y)]])])]),e("div",we,[e("label",Ce,[Me,f(e("textarea",{class:"form-input mt-1 block w-full",rows:"2",placeholder:"Notes ...","onUpdate:modelValue":t[5]||(t[5]=s=>c(g)?g.value=s:null)},null,512),[[S,n(g)]])])]),Ae,e("button",{type:"button",onClick:t[6]||(t[6]=M(s=>n(O)(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Create Shipment ")])]),_:1})):ne("",!0)],64))}});export{Re as default};
