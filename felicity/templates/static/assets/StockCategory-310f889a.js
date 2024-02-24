import{d as x,bi as k,r as d,Q as v,t as w,e,h as r,f as p,H as m,z as C,A as T,B as S}from"./index-236e333a.js";import{b as A,c as _}from"./inventory.mutations-9be22269.js";const E=C(()=>T(()=>import("./SimpleModal-ac8fb9e7.js"),["assets/SimpleModal-ac8fb9e7.js","assets/index-236e333a.js","assets/index-a964bbb1.css","assets/SimpleModal-98e7299b.css"])),F=x({name:"stock-category",setup(t,D){const l=k(),{withClientMutation:c}=S();let n=d(!1),u=d(""),o=v({});const i=d(!0);l.fetchCategories();const b=w(()=>l.getCategories);function h(){const s={...o};c(A,{payload:s},"createStockCategory").then(a=>l.addCategory(a))}function g(){const s={name:o.name,description:o.description};c(_,{uid:o.uid,payload:s},"updateStockCategory").then(a=>l.updateCategory(a))}function y(s,a){i.value=s,u.value=(s?"CREATE":"EDIT")+" STOCK CATEGORY",n.value=!0,s?Object.assign(o,{}):Object.assign(o,{...a})}function f(){i.value===!0&&h(),i.value===!1&&g(),n.value=!1}return{form:o,FormManager:y,saveForm:f,stockCategories:b,showModal:n,formTitle:u}},render(){return e("div",{class:"container w-full my-4"},[e("hr",null,null),e("button",{onClick:()=>this.FormManager(!0,null),class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[r("Add Stock Category")]),e("hr",null,null),e("div",{class:"overflow-x-auto mt-4"},[e("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},[e("table",{class:"min-w-full"},[e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[r("Category Name")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[r("Description")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"},null)])]),e("tbody",{class:"bg-white"},[this.stockCategories.map(t=>e("tr",{key:t?.uid},[e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",{class:"flex items-center"},[e("div",{class:"text-sm leading-5 text-gray-800"},[t?.name])])]),e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",{class:"text-sm leading-5 text-sky-800"},[t?.description])]),e("td",{class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},[e("button",{onClick:()=>this.FormManager(!1,t),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[r("Edit")])])]))])])])]),this.showModal?e(E,{onClose:()=>this.showModal=!1,contentWidth:"w-1/4"},{header:()=>e("h3",null,[this.formTitle]),body:()=>e("form",{action:"post",class:"p-1"},[e("div",{class:"grid grid-cols-2 gap-x-4 mb-4"},[e("label",{class:"block col-span-2 mb-2"},[e("span",{class:"text-gray-700"},[r("Stock Category Name")]),p(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t=>this.form.name=t,placeholder:"Name ..."},null),[[m,this.form.name]])]),e("label",{class:"block col-span-2 mb-2"},[e("span",{class:"text-gray-700"},[r("Description")]),p(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t=>this.form.description=t,placeholder:"Description ..."},null),[[m,this.form.description]])])]),e("hr",null,null),e("button",{type:"button",onClick:()=>this.saveForm(),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},[r("Save Form")])])}):null])}});export{F as StockCategory,F as default};
