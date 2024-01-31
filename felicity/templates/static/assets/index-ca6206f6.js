import{d as L,af as $,b3 as O,t as d,Q as R,a as u,M as B,o as m,c as h,f as s,b as e,x as a,e as y,v as r}from"./index-60c5f486.js";import{u as D}from"./shipment-dbf9018b.js";const j={class:""},E={class:"bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-4 py-4"},N={class:"grid grid-cols-12 gap-1"},z={class:"col-span-12 flex justify-between font-bold text-medium mb-2"},A={class:"flex"},F={class:"mr-10"},I={type:"button",class:"bg-sky-800 text-white px-2 py-1 rounded-sm leading-none"},U={class:"ml-2"},V={class:"absolute mt-4 py-0 bg-gray-300 rounded-sm shadow-xl z-20"},M={class:"col-span-12 sm:col-end-13 px-3 sm:px-0"},Q=e("hr",null,null,-1),T={class:"grid grid-cols-2 mt-2"},q={class:"col-span-1"},G={class:"flex"},H=e("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"External Laboratory",-1),J={class:"text-gray-600 text-sm md:text-md"},K={class:"flex"},P=e("span",{class:"text-gray-800 text-md font-semibold w-1/6"},"Courier:",-1),W={class:"text-gray-600 text-sm md:text-md"},X={class:"flex"},Y=e("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"Assigned Count:",-1),Z={class:"text-gray-600 text-sm md:text-md"},ee={class:"col-span-1"},te={class:"flex"},oe=e("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"Comment:",-1),se={class:"text-gray-600 text-sm md:text-md"},ie=L({__name:"index",setup(re){const x=$(),c=O(),{actionShipment:_}=D();c.fetchReferralLaboratories(),c.fetchShipmentByUid(x.params.shipmentUid);const t=d(()=>c.getShipment),l=R({dropdownOpen:!1}),p=d(()=>!!["due"].includes(t?.value?.state?.toLowerCase())),b=d(()=>!!["preperation"].includes(t?.value?.state?.toLowerCase())),g=d(()=>!!["preperation","ready"].includes(t?.value?.state?.toLowerCase())),f=d(()=>!!["ready"].includes(t?.value?.state?.toLowerCase())),w=d(()=>!!["failed"].includes(t?.value?.state?.toLowerCase())),i=v=>{if(!t.value?.incoming&&!(t.value?.laboratory?.url&&t.value?.laboratory?.password&&t.value?.laboratory?.username&&t.value?.courier)){alert("The External Laboratory has missing information or the courier missing");return}_(t.value?.uid,v)};return(v,o)=>{const k=u("font-awesome-icon"),C=u("router-view"),S=B("motion-slide-top");return m(),h("div",j,[s((m(),h("div",E,[e("div",N,[e("div",z,[e("div",A,[e("h3",F,a(t.value?.shipmentId),1),e("h3",null,a(t.value?.incoming?"InBound":"OutBound"),1)]),e("div",null,[e("div",{onClick:o[0]||(o[0]=n=>l.dropdownOpen=!l.dropdownOpen),class:"hidden md:block md:flex md:items-center ml-2 mt-2"},[e("button",I,a(t.value?.state||"unknown"),1),e("div",U,[y(k,{icon:"chevron-down",class:"text-gray-400"})])]),s(e("div",{onClick:o[1]||(o[1]=n=>l.dropdownOpen=!1),class:"fixed inset-0 h-full w-full z-10"},null,512),[[r,l.dropdownOpen]]),s(e("div",V,[s(e("div",{onClick:o[2]||(o[2]=n=>i("reject")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Reject ",512),[[r,p.value]]),s(e("div",{onClick:o[3]||(o[3]=n=>i("receive")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Receive ",512),[[r,p.value]]),s(e("div",{onClick:o[4]||(o[4]=n=>i("finalise")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Finalise ",512),[[r,b.value]]),s(e("div",{onClick:o[5]||(o[5]=n=>i("dispatch")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Dispatch ",512),[[r,f.value]]),s(e("div",{onClick:o[6]||(o[6]=n=>i("dispatch-now")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Retry Notification ",512),[[r,w.value]]),s(e("div",{onClick:o[7]||(o[7]=n=>i("cancel")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Cancel ",512),[[r,g.value]])],512),[[r,l.dropdownOpen]])])]),e("div",M,[Q,e("div",T,[e("div",q,[e("div",G,[H,e("span",J,a(t.value?.laboratory?.name),1)]),e("div",K,[P,e("span",W,a(t.value?.courier),1)]),e("div",X,[Y,e("span",Z,a(t.value?.assignedCount),1)])]),e("div",ee,[e("div",te,[oe,e("span",se,a(t.value?.comment),1)])])])])])])),[[S]]),y(C)])}}});export{ie as default};