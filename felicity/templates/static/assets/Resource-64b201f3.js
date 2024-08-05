import{d as B,K as D,L as I,Q as A,r as $,s as j,D as y,a as z,o as i,c as u,b as t,f,v as b,u as o,F as g,y as x,N as w,w as h,h as U,x as p,n as H,I as k,e as P,i as S,H as C,G as O,J as G,z as R,A as F,b5 as T}from"./index-7e8465c2.js";import{C as W}from"./index-1a0e7839.js";const J={class:"flex justify-between"},K={class:"flex justify-end align-items-center mt-4 mb-8"},Q=["onClick"],q={key:0,class:"text-start my-4 w-100"},X=t("h1",{class:"text-xl text-gray-700 font-semibold"},"Matriz Intrumento / Load",-1),Y=t("hr",{class:"my-2"},null,-1),Z={key:0},ee={key:1,class:"flex justify-start"},te={class:"mr-4 font-bold text-gray-600 text-xl"},se={class:"font-semibold text-gray-400 text-l"},oe=G('<h1 class="mt-8 text-xl text-gray-700 font-semibold">Matriz Usuario / Load</h1><hr class="my-2"><div class="flex flex-wrap justify-start" id="user-matrix"><div><div id="registration"></div></div><div><div id="submission"></div></div><div><div id="verification"></div></div><div><div id="publication"></div></div></div>',3),ae=t("h3",null,"Filtro personalizado",-1),re={action:"post",class:"p-1"},ne={class:"grid grid-cols-2 gap-x-4 mb-4"},ie={class:"block col-span-2 mb-2"},le=t("span",{class:"text-gray-700"},"Fecha de",-1),de={class:"block col-span-2 mb-2"},ce=t("span",{class:"text-gray-700"},"Fecha hasta",-1),ue=t("hr",null,null,-1),fe=B({__name:"Resource",setup(me){const M=R(()=>F(()=>import("./SimpleModal-16734371.js"),["assets/SimpleModal-16734371.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/SimpleModal-98e7299b.css"])),V=R(()=>F(()=>import("./LoadingMessage-79e5e3e9.js"),["assets/LoadingMessage-79e5e3e9.js","assets/LoadingMessage.vue_vue_type_script_setup_true_lang-1ac11e1a.js","assets/index-7e8465c2.js","assets/index-fff21e38.css"])),c=D(),{dashboard:a}=I(c),m=A({range:{from:"",to:""}});let l=$(!1);const E=()=>{c.setFilterRange(T(m.range.from),T(m.range.to)),l.value=!1};j(async()=>{_(),c.setShowFilters(!0),c.getResourceStats()}),y(()=>a.value.filterRange.from,(d,s)=>{_(),c.getResourceStats()}),y(()=>a.value.resourceStats?.samples,(d,s)=>{a.value.resourceStats?.samples?.forEach(n=>{let e=[],v=0;n.counts?.forEach(r=>v+=r.count),n.counts?.forEach(r=>{e.push({item:r.group,count:r.count,percent:r.count/v})}),N(e,n.group,n.group)})});const L=d=>{let s=0;return a.value.resourceStats?.instruments?.forEach(e=>s+=e.count),(d/s*100).toFixed(2)+" %"},N=(d,s,n)=>{const e=new W({container:s,autoFit:!0,height:250,width:500,localRefresh:!1});e.coordinate("theta",{radius:.75,innerRadius:.5}),e.data(d),e.scale("percent",{formatter:r=>(r=(r*100).toFixed(2)+"%",r)}),e.tooltip({showTitle:!1,showMarkers:!1}),e.legend(!1),e.interval().position("percent").color("item").label("percent",{layout:[{type:"pie-spider"},{type:"hide-overlap"}],offset:8,labelHeight:38,content:r=>`${r.item} (${r.count})`,labelLine:{style:{lineWidth:.5}}}).adjust("stack"),e.createView().annotation().text({position:["50%","50%"],content:n,style:{fill:"#262626",textAlign:"center"}}),e.interaction("element-active"),e.render()},_=()=>{document.getElementById("user-matrix").innerHTML="";const d=`
      <div>
        <div id="registration"></div>
      </div>
      <div>
        <div id="submission"></div>
      </div>
      <div>
        <div id="verification"></div>
      </div>
      <div>
        <div id="publication"></div>
      </div>
    `;document.getElementById("user-matrix").innerHTML=d};return(d,s)=>{const n=z("VTooltip");return i(),u(g,null,[t("section",J,[f(t("div",K,[(i(!0),u(g,null,x(o(a).filters,(e,v)=>f((i(),w(n,{key:v,placements:["right-start"]},{popper:h(()=>[U(p(o(c).filterToolTip(e)),1)]),default:h(()=>[t("button",{onClick:r=>o(c).setCurrentFilter(e),type:"button",class:H(["px-2 py-1 mr-2 border-gray-800 border text-gray-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",{"bg-sky-800 text-white":o(a).currentFilter===e}])},p(e),11,Q)]),_:2},1024)),[[b,e!==o(a).filters[o(a).filters.length]]])),128)),t("button",{onClick:s[0]||(s[0]=e=>k(l)?l.value=!0:l=!0),class:"ml-4 mr-1 px-2 py-1 border-gray-500 border text-gray-500 rounded-sm transition duration-300 hover:bg-gray-700 hover:text-white focus:outline-none"},p(o(a).filterRange.from)+" - "+p(o(a).filterRange.to),1)],512),[[b,o(a).showFilters]])]),o(a).fetchingResourceStats?(i(),u("div",q,[P(o(V),{message:"obteniendo estadísticas de recursos..."})])):S("",!0),t("section",null,[X,Y,o(a).resourceStats?.instruments?.length===0?(i(),u("div",Z,"SIN DATOS")):(i(),u("div",ee,[(i(!0),u(g,null,x(o(a).resourceStats?.instruments,e=>(i(),u("div",{key:e.group,class:"flex items-center bg-white shadow rounded-sm px-6 pt-3 pb-5 border border-white mr-8"},[t("span",te,p(L(e?.count)),1),t("span",se,p(e.group),1)]))),128))])),oe]),o(l)?(i(),w(o(M),{key:1,onClose:s[4]||(s[4]=e=>k(l)?l.value=!1:l=!1),contentWidth:"w-1/4"},{header:h(()=>[ae]),body:h(()=>[t("form",re,[t("div",ne,[t("label",ie,[le,f(t("input",{type:"datetime-local",class:"form-input mt-1 block w-full",autocomplete:"off","onUpdate:modelValue":s[1]||(s[1]=e=>m.range.from=e),placeholder:"Name ..."},null,512),[[C,m.range.from]])]),t("label",de,[ce,f(t("input",{type:"datetime-local",class:"form-input mt-1 block w-full","onUpdate:modelValue":s[2]||(s[2]=e=>m.range.to=e),placeholder:"Name ..."},null,512),[[C,m.range.to]])])]),ue,t("button",{type:"button",onClick:s[3]||(s[3]=O(e=>E(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Guardar forma ")])]),_:1})):S("",!0)],64)}}});export{fe as default};