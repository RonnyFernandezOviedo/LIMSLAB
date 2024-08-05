import{d as u,S as c,V as i,r as p,t as _,e as t,z as s,A as a}from"./index-7e8465c2.js";const m=s(()=>a(()=>import("./StockCategory-ebbe58ce.js"),["assets/StockCategory-ebbe58ce.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/inventory.mutations-85f310b8.js"])),d=s(()=>a(()=>import("./StockItem-13bd5c6c.js"),["assets/StockItem-13bd5c6c.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/inventory.mutations-85f310b8.js"])),v=s(()=>a(()=>import("./StockPackaging-7bcc94f4.js"),["assets/StockPackaging-7bcc94f4.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/inventory.mutations-85f310b8.js"])),k=s(()=>a(()=>import("./StockUnit-1a8bf5f6.js"),["assets/StockUnit-1a8bf5f6.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/inventory.mutations-85f310b8.js"])),g=s(()=>a(()=>import("./Hazard-311c3af8.js"),["assets/Hazard-311c3af8.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/inventory.mutations-85f310b8.js"])),y=u({name:"InventoryHome",setup(e){const n=c(),o=i();let l=p("stock-items");const r=["stock-items","stock-categories","hazards","stock-units","stock-packaging"];return _(()=>"tab-"+l.value),o.fetchSampleTypes(),n.fetchDepartments({}),{exposed:{currentTab:l,tabs:r}}},render(){const{currentTab:e,tabs:n}=this.exposed;return t("div",{class:"mt-4"},[t("nav",{class:"bg-white shadow-md mt-2"},[t("div",{class:"-mb-px flex justify-start"},[n.map(o=>t("a",{key:o,class:["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":e.value===o}],onClick:()=>e.value=o,role:"tab"},[o]))])]),e.value==="stock-items"?t(d,null,null):null,e.value==="stock-categories"?t(m,null,null):null,e.value==="stock-packaging"?t(v,null,null):null,e.value==="stock-units"?t(k,null,null):null,e.value==="hazards"?t(g,null,null):null])}});export{y as InventoryHome,y as default};
