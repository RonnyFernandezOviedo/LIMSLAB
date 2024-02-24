import{d as D,K as w,L as I,r as p,s as L,D as A,o as h,c as y,u as _,e as k,i as z,b as a,x as v,F as N,z as S,A as R}from"./index-236e333a.js";import{C as f}from"./index-bcc686eb.js";const j={key:0,class:"text-start my-4 w-100"},B=a("h1",{class:"text-xl text-gray-700 font-semibold"},"Retrasada e incompleta",-1),C=a("hr",{class:"my-2"},null,-1),F={class:"flex justify-start items-center"},V={class:"content-middle bg-white shadow rounded-sm px-6 pt-3 pb-5 border border-white mr-8 text-center"},E={class:"mr-4 font-bold text-gray-600 text-2xl"},M=a("div",{class:"font-semibold text-gray-400 text-l"},"Ya retrasada",-1),P=a("div",{id:"late-active",class:"flex justify-start items-center ms-8"},[a("div",{class:"me-8"},[a("div",{id:"late-active-donut"})]),a("div",null,[a("div",{id:"late-active-since"})])],-1),W=a("h1",{class:"mt-4 text-xl text-gray-700 font-semibold"},"Autorizada ya retrasada",-1),$=a("hr",{class:"my-2"},null,-1),K={class:"flex justify-start items-center"},O={class:"content-middle bg-white shadow rounded-sm px-6 pt-3 pb-5 border border-white mr-8 text-center"},Y={class:"mr-4 font-bold text-gray-600 text-2xl"},q=a("div",{class:"font-semibold text-gray-400 text-l"},"Liberada como retrasada",-1),G=a("div",{id:"late-auth",class:"flex justify-start items-center ms-8"},[a("div",{class:"me-8"},[a("div",{id:"late-auth-donut"})]),a("div",null,[a("div",{id:"late-auth-since"})])],-1),U=D({__name:"Laggard",setup(H){const g=S(()=>R(()=>import("./LoadingMessage-80ee7b63.js"),["assets/LoadingMessage-80ee7b63.js","assets/LoadingMessage.vue_vue_type_script_setup_true_lang-f84223a1.js","assets/index-236e333a.js","assets/index-a964bbb1.css"])),i=w(),{dashboard:c}=I(i),r=p(0),d=p(0);L(()=>{i.getSampleLaggards()}),A(()=>c.value.laggards,(s,n)=>{const t=s?.filter(l=>l?.category==="delayed_and_incomplete")[0],e=s?.filter(l=>l?.category==="authorised_already_delayed")[0];r.value=t?.counts?.totalIncomplete??0;const o=[{item:"A tiempo",count:t?.counts?.totalDelayed,percent:t?.counts?.totalIncomplete>0?t?.counts?.totalDelayed/t?.counts?.totalIncomplete*100:0},{item:"Retrasado",count:t?.counts?.totalNotDelayed,percent:t?.counts?.totalIncomplete>0?t?.counts?.totalNotDelayed/t?.counts?.totalIncomplete*100:0}];m(o,"late-active-donut");const x=[{type:"<10",value:t?.counts?.lessThanTen},{type:"10 - 20",value:t?.counts?.tenToTwenty},{type:"20 - 30",value:t?.counts?.twentyToThirty},{type:"> 30",value:t?.counts?.graterThanThirty}];u(x,"late-active-since","dias desde creacion","numero de muetsra"),d.value=e?.counts?.totalIncomplete??0;const b=[{item:"A tiempo",count:e?.counts?.totalDelayed,percent:e?.counts?.totalIncomplete>0?e?.counts?.totalDelayed/e?.counts?.totalIncomplete*100:0},{item:"Retrasado",count:e?.counts?.totalNotDelayed,percent:e?.counts?.totalIncomplete>0?e?.counts?.totalNotDelayed/e?.counts?.totalIncomplete*100:0}];m(b,"late-auth-donut");const T=[{type:"<10",value:e?.counts?.lessThanTen},{type:"10 - 20",value:e?.counts?.tenToTwenty},{type:"20 - 30",value:e?.counts?.twentyToThirty},{type:"> 30",value:e?.counts?.graterThanThirty}];u(T,"late-auth-since","dias: creada a autorizada","numero de muestras")});const u=(s,n,t,e)=>{const o=new f({container:n,autoFit:!0,height:200,width:600});o.data(s),o.scale({value:{max:150,min:0,alias:e},type:{alias:t}}),o.axis("type",{title:{offset:60,style:{fontSize:12,fontWeight:300}},tickLine:null,line:null}),o.axis("value",{label:null,title:{offset:30,style:{fontSize:12,fontWeight:300}}}),o.legend(!1),o.coordinate().transpose(),o.interval().position("type*value").size(26).label("value",{style:{fill:"#8d8d8d"},offset:10}),o.interaction("element-active"),o.render()},m=(s,n)=>{const t=new f({container:n,autoFit:!0,height:150,width:300});t.data(s),t.scale("percent",{formatter:e=>(e=e*100+"%",e)}),t.coordinate("theta",{radius:.75,innerRadius:.6}),t.tooltip({showTitle:!1,showMarkers:!1,itemTpl:'<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'}),t.annotation(),t.interval().adjust("stack").position("percent").color("item").label("percent",e=>({content:o=>`${o.item}: ${e*100}%`})).tooltip("item*percent",(e,o)=>(o=o*100+"%",{name:e,value:o})),t.interaction("element-active"),t.render()};return(s,n)=>(h(),y(N,null,[_(c).fetchingLaggards?(h(),y("div",j,[k(_(g),{message:"obteniendo estadísticas rezagadas..."})])):z("",!0),a("section",null,[B,C,a("div",F,[a("div",V,[a("div",E,v(r.value),1),M]),P]),W,$,a("div",K,[a("div",O,[a("div",Y,v(d.value),1),q]),G])])],64))}});export{U as default};
