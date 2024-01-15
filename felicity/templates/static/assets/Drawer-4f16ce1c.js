import{d as f,r as i,D as h,o as w,c as m,b as e,n as v,an as a,h as r}from"./index-e479c930.js";const x={class:"flex items-center justify-between"},g={tabindex:"0",class:"focus:outline-none text-2xl font-semibold leading-6 text-gray-800"},p=e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M18 6L6 18",stroke:"#4B5563","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M6 6L18 18",stroke:"#4B5563","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"})],-1),y=[p],b={class:"w-full my-4 py-1 px-2 bg-white shadow-xs flex-1"},k={class:"w-full my-1 py-1 px-2 flex items-center"},B=f({__name:"Drawer",props:{show:Boolean,contentWidth:String},emits:["close"],setup(o,{emit:d}){const c=o,u=d;let t=i(null),l=i(null);return h(()=>c.show,(s,n)=>{s!==!0?(t.value?.classList.add("translate-x-full"),t.value?.classList.remove("translate-x-0"),setTimeout(function(){l.value?.classList.add("hidden")},500)):(setTimeout(function(){t.value?.classList.remove("translate-x-full"),t.value?.classList.add("translate-x-0")},500),l.value?.classList.remove("hidden"))}),(s,n)=>(w(),m("div",{ref_key:"drawerNode",ref:l,class:"w-full h-screen bg-gray-800 bg-opacity-90 top-0 left-0 overflow-y-auto hidden overflow-x-hidden fixed sticky-0 z-10"},[e("div",{ref_key:"notification",ref:t,class:"w-full absolute z-20 right-0 h-full overflow-x-hidden transform translate-x-full transition ease-in-out duration-700"},[e("div",{class:v(["",["bg-gray-50 h-screen overflow-y-auto p-8 absolute right-0 flex flex-col",o.contentWidth?o.contentWidth:"w-1/3"]])},[e("div",x,[e("p",g,[a(s.$slots,"header",{},()=>[r("Drawer Title")])]),e("button",{role:"button","aria-label":"close modal",class:"focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-sm cursor-pointer",onClick:n[0]||(n[0]=()=>u("close"))},y)]),e("div",b,[a(s.$slots,"body",{},()=>[r("Drawer Body")])]),e("div",k,[a(s.$slots,"footer")])],2)],512)],512))}});export{B as default};