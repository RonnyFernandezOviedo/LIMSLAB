import{d as y,bi as g,r as d,Q as x,t as v,e as t,h as r,f as k,H as w,z as U,A as T,B as S}from"./index-08b76645.js";import{h as C,i as _}from"./inventory.mutations-4a7f68ed.js";const M=U(()=>T(()=>import("./SimpleModal-726a79fc.js"),["assets/SimpleModal-726a79fc.js","assets/index-08b76645.js","assets/index-5bc4f6f2.css","assets/SimpleModal-98e7299b.css"])),I=y({name:"stock-unit",setup(o,A){const a=g(),{withClientMutation:c}=S();let l=d(!1),u=d(""),s=x({});const i=d(!0);a.fetchUnits();const m=v(()=>a.getUnits);function p(){const e={...s};c(C,{payload:e},"createStockUnit").then(n=>a.addUnit(n))}function b(){const e={name:s.name};c(_,{uid:s.uid,payload:e},"updateStockUnit").then(n=>a.updateUnit(n))}function h(e,n){i.value=e,u.value=(e?"CREATE":"EDIT")+" STOCK UNIT",l.value=!0,e?Object.assign(s,{}):Object.assign(s,{...n})}function f(){i.value===!0&&p(),i.value===!1&&b(),l.value=!1}return{form:s,FormManager:h,saveForm:f,stockUnits:m,showModal:l,formTitle:u}},render(){return t("div",{class:"container w-full my-4"},[t("hr",null,null),t("button",{onClick:()=>this.FormManager(!0,null),class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[r("Add Stock Unit")]),t("hr",null,null),t("div",{class:"overflow-x-auto mt-4"},[t("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},[t("table",{class:"min-w-full"},[t("thead",null,[t("tr",null,[t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[r("Unit Name")]),t("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},null),t("th",{class:"px-1 py-1 border-b-2 border-gray-300"},null)])]),t("tbody",{class:"bg-white"},[this.stockUnits.map(o=>t("tr",{key:o?.uid},[t("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[t("div",{class:"flex items-center"},[t("div",{class:"text-sm leading-5 text-gray-800"},[o?.name])])]),t("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[t("div",{class:"text-sm leading-5 text-sky-800"},null)]),t("td",{class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},[t("button",{onClick:()=>this.FormManager(!1,o),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[r("Edit")])])]))])])])]),this.showModal?t(M,{onClose:()=>this.showModal=!1,contentWidth:"w-1/4"},{header:()=>t("h3",null,[this.formTitle]),body:()=>t("form",{action:"post",class:"p-1"},[t("div",{class:"grid grid-cols-2 gap-x-4 mb-4"},[t("label",{class:"block col-span-2 mb-2"},[t("span",{class:"text-gray-700"},[r("Stock Unit Name")]),k(t("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":o=>this.form.name=o,placeholder:"Name ..."},null),[[w,this.form.name]])])]),t("hr",null,null),t("button",{type:"button",onClick:()=>this.saveForm(),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},[r("Save Form")])])}):null])}});export{I as StockUnit,I as default};
