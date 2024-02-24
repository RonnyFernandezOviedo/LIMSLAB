import{d as S,bi as M,S as D,r as m,Q as f,t as h,e,h as s,f as n,H as i,aa as T,z as C,A as U,B as _}from"./index-236e333a.js";import{d as E,e as A}from"./inventory.mutations-9be22269.js";const V=C(()=>U(()=>import("./SimpleModal-ac8fb9e7.js"),["assets/SimpleModal-ac8fb9e7.js","assets/index-236e333a.js","assets/index-a964bbb1.css","assets/SimpleModal-98e7299b.css"])),N=S({name:"stock-item",setup(t,L){const l=M(),u=D(),{withClientMutation:p}=_();let d=m(!1),b=m(""),a=f({});const c=m(!0);let y=f({first:50,after:"",text:"",sortBy:["-uid"]});u.fetchDepartments({});const x=h(()=>u.getDepartments);l.fetchAllDependencies(),l.fetchItems(y);const g=h(()=>l.getStockItems);function k(){const o={...a};p(E,{payload:o},"createStockItem").then(r=>l.addItem(r))}function v(){const o={name:a.name,description:a.description,departmentUid:a.departmentUid};p(A,{uid:a.uid,payload:o},"updateStockItem").then(r=>l.updateItem(r))}function w(o,r){c.value=o,b.value=(o?"CREATE":"EDIT")+" STOCK ITEM",d.value=!0,o?Object.assign(a,{}):Object.assign(a,{...r})}function I(){c.value===!0&&k(),c.value===!1&&v(),d.value=!1}return{form:a,FormManager:w,saveForm:I,stockItems:g,showModal:d,formTitle:b,departments:x}},render(){return e("div",{class:"container w-full my-4"},[e("hr",null,null),e("button",{onClick:()=>this.FormManager(!0,null),class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[s("Add Stock Item")]),e("hr",null,null),e("div",{class:"overflow-x-auto mt-4"},[e("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},[e("table",{class:"min-w-full"},[e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Item Name")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Description")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Main User (Department)")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"},null)])]),e("tbody",{class:"bg-white"},[this.stockItems?.map(t=>e("tr",{key:t?.uid},[e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",{class:"flex items-center"},[e("div",{class:"text-sm leading-5 text-gray-800"},[t?.name])])]),e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",{class:"text-sm leading-5 text-sky-800"},[t?.description])]),e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",{class:"text-sm leading-5 text-sky-800"},[t?.department?.name])]),e("td",{class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},[e("button",{onClick:()=>this.FormManager(!1,t),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[s("Edit")])])]))])])])]),this.showModal?e(V,{onClose:()=>this.showModal=!1,contentWidth:"w-1/4"},{header:()=>e("h3",null,[this.formTitle]),body:()=>e("form",{action:"post",class:"p-1"},[e("div",{class:"grid grid-cols-2 gap-x-4 mb-4"},[e("label",{class:"block col-span-2 mb-2"},[e("span",{class:"text-gray-700"},[s("Stock Item Name")]),n(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t=>this.form.name=t,placeholder:"Name ..."},null),[[i,this.form.name]])]),e("label",{class:"block col-span-1 mb-2"},[e("span",{class:"text-gray-700"},[s("Min Level")]),n(e("input",{class:"form-input mt-1 block w-full",type:"number","onUpdate:modelValue":t=>this.form.minimumLevel=t},null),[[i,this.form.minimumLevel]])]),e("label",{class:"block col-span-1 mb-2"},[e("span",{class:"text-gray-700"},[s("Max Level")]),n(e("input",{class:"form-input mt-1 block w-full",type:"number","onUpdate:modelValue":t=>this.form.maximumLevel=t},null),[[i,this.form.maximumLevel]])]),e("label",{class:"block col-span-2 mb-2"},[e("span",{class:"text-gray-700"},[s("Description")]),n(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t=>this.form.description=t,placeholder:"Description ..."},null),[[i,this.form.description]])]),e("label",{class:"block col-span-1 mb-2"},[e("span",{class:"text-gray-700"},[s("Department")]),n(e("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":t=>this.form.departmentUid=t},[e("option",null,null),this.departments.map(t=>e("option",{key:t.uid,value:t?.uid},[t.name]))]),[[T,this.form.departmentUid]])])]),e("hr",null,null),e("button",{type:"button",onClick:()=>this.saveForm(),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},[s("Save Form")])])}):null])}});export{N as StockItem,N as default};