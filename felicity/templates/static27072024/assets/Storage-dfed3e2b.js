import{d as q,aI as X,E as Y,aJ as Z,D as T,t as $,Q as oo,ao as to,e as o,h as r,F as d,f as i,H as l,ab as k,z as g,A as b,ba as eo,bb as no,bc as ao,bd as ro,be as so,bf as io,bg as lo,bh as co,B as mo}from"./index-7e8465c2.js";const h=g(()=>b(()=>import("./SimpleModal-16734371.js"),["assets/SimpleModal-16734371.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/SimpleModal-98e7299b.css"])),uo=g(()=>b(()=>import("./PageHeading-e084e044.js"),["assets/PageHeading-e084e044.js","assets/PageHeading.vue_vue_type_script_setup_true_lang-11482800.js","assets/index-7e8465c2.js","assets/index-fff21e38.css"])),po=g(()=>b(()=>import("./ContainerView-fe842b89.js"),["assets/ContainerView-fe842b89.js","assets/index-7e8465c2.js","assets/index-fff21e38.css"])),ho=g(()=>b(()=>import("./TreeItem-dfa856e8.js"),["assets/TreeItem-dfa856e8.js","assets/index-7e8465c2.js","assets/index-fff21e38.css"])),Fo=q({name:"storage-home",setup(n,go){const{treeData:f,tags:s,activeTree:m,newStoreRoom:v,newStorageLocation:A,newStorageSection:x,newStorageContainer:C,setActiveTree:p}=X(),R=Y(),c=Z(),{withClientMutation:u}=mo();c.fetchStorageTree(),T(()=>m.value,(e,a)=>{e&&e.tag===s.storageContainer&&c.fetchStorageContainer(e.uid)}),T(()=>f.value,(e,a)=>{if(!e)return;const F=R?.options?.history?.state;if(F?.sample){const S=JSON.parse(F?.sample)?.storageContainer,y=S?.storageSection,w=y?.storageLocation,Q=w?.storeRoom;p({...Q,tag:s.storeRoom}),p({...w,tag:s.storageLocation}),p({...y,tag:s.storageSection}),p({...S,tag:s.storageContainer})}});const E=$(()=>m.value?.tag===s.storeRoom?s.storageLocation:m.value?.tag===s.storageLocation?s.storageSection:m.value?.tag===s.storageSection?s.storageContainer:m.value?.tag===s.storageContainer?s.containerView:null),t=oo({roomModalShow:!1,roomFormTitle:"",roomForm:{},roomFormAction:!0,locationModalShow:!1,locationFormTitle:"",locationForm:{},locationFormAction:!0,sectionModalShow:!1,sectionFormTitle:"",sectionForm:{},sectionFormAction:!0,containerModalShow:!1,containerFormTitle:"",containerForm:{},containerFormAction:!0});function O(){const e={...t.roomForm};u(eo,{payload:e},"createStoreRoom").then(a=>{c.addStoreRoom(a),v(a)})}function _(){const e={name:t.roomForm.name,description:t.roomForm.description};u(no,{uid:t.roomForm.uid,payload:e},"updateStoreRoom").then(a=>c.updateStoreRoom(a))}function M(e,a){t.roomFormAction=e,t.roomFormTitle=(e?"CREATE":"EDIT")+" A STORE ROOM",t.roomModalShow=!0,e?Object.assign(t.roomForm,{}):Object.assign(t.roomForm,{...a})}function D(){t.roomFormAction===!0&&O(),t.roomFormAction===!1&&_(),t.roomModalShow=!1}function L(){const e={...t.locationForm,storeRoomUid:m.value.uid};u(ao,{payload:e},"createStorageLocation").then(a=>{c.addStorageLocation(a),A(a)})}function N(){const e={name:t.locationForm.name,description:t.locationForm.description};u(ro,{uid:t.locationForm.uid,payload:e},"updateStorageLocation").then(a=>c.updateStorageLocation(a))}function V(e,a){t.locationFormAction=e,t.locationFormTitle=(e?"CREATE":"EDIT")+" A STORAGE LOCATION",t.locationModalShow=!0,e?Object.assign(t.locationForm,{}):Object.assign(t.locationForm,{...a})}function I(){t.locationFormAction===!0&&L(),t.locationFormAction===!1&&N(),t.locationModalShow=!1}function U(){const e={...t.sectionForm,storageLocationUid:m.value.uid};u(so,{payload:e},"createStorageSection").then(a=>{c.addStorageSection(a),x(a)})}function G(){const e={name:t.sectionForm.name,description:t.sectionForm.description};u(io,{uid:t.sectionForm.uid,payload:e},"updateStorageSection").then(a=>c.updateStorageSection(a))}function j(e,a){t.sectionFormAction=e,t.sectionFormTitle=(e?"CREATE":"EDIT")+" A STORAGE SECTION",t.sectionModalShow=!0,e?Object.assign(t.sectionForm,{}):Object.assign(t.sectionForm,{...a})}function W(){t.sectionFormAction===!0&&U(),t.sectionFormAction===!1&&G(),t.sectionModalShow=!1}function P(){const e={...t.containerForm,storageSectionUid:m.value.uid};u(lo,{payload:e},"createStorageContainer").then(a=>{c.addStorageContainer(a),C(a)})}function H(){const e={name:t.containerForm.name,description:t.containerForm.description};u(co,{uid:t.containerForm.uid,payload:e},"updateStorageContainer").then(a=>c.updateStorageContainer(a))}function J(e,a){t.containerFormAction=e,t.containerFormTitle=(e?"CREATE":"EDIT")+" A STORAGE CONTAINER",t.containerModalShow=!0,e?Object.assign(t.containerForm,{}):Object.assign(t.containerForm,{...a})}function z(){t.containerFormAction===!0&&P(),t.containerFormAction===!1&&H(),t.containerModalShow=!1}function B(e){t.containerForm.grid===!0&&(t.containerForm.rows=Math.ceil(t.containerForm?.slots/t.containerForm?.cols))}function K(e){t.containerForm.grid==!1&&(t.containerForm.cols=void 0,t.containerForm.rows=void 0)}return{...to(t),treeData:f,activeTree:m,nextTreeType:E,tags:s,saveStoreRoomForm:D,roomFormManager:M,locationFormManager:V,saveLocationForm:I,saveStorageSectionForm:W,sectionFormManager:j,saveStorageContainerForm:z,containerFormManager:J,calculateRows:B,changeContainerType:K}},render(){return o(d,null,[o(uo,{title:"Storage "},null),o("div",{class:"grid grid-cols-12 gap-4 min-h-full bg-white"},[o("div",{class:"col-span-2 pt-4 pl-2"},[o("button",{onClick:()=>this.roomFormManager(!0,null),class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[r("Add Store Room")]),o("hr",{class:"mt-2 mb-4"},null),o("ul",null,[this.treeData.map(n=>o(ho,{tree:n},null))])]),this.activeTree?.name&&o("div",{class:"col-span-10 pt-4"},[o("div",{class:"mb-2"},[r("Selected: "),this.activeTree.name]),o("hr",null,null),o("div",{class:"my-4"},[this.nextTreeType===this.tags.storageLocation?o(d,null,[o("button",{onClick:()=>this.locationFormManager(!0,null),class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[r("Add Storage Location")])]):null,this.nextTreeType===this.tags.storageSection?o(d,null,[o("button",{onClick:()=>this.sectionFormManager(!0,null),class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[r("Add Storage Section")])]):null,this.nextTreeType===this.tags.storageContainer?o(d,null,[o("button",{onClick:()=>this.containerFormManager(!0,null),class:"px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[r("Add Storage Container")])]):null,this.nextTreeType===this.tags.containerView?o(po,null,null):null]),o("hr",null,null)])]),this.roomModalShow?o(h,{onClose:()=>this.roomModalShow=!1,contentWidth:"w-1/4"},{header:()=>o("h3",null,[this.roomFormTitle]),body:()=>o("form",{action:"post",class:"p-1"},[o("div",{class:"grid grid-cols-2 gap-x-4 mb-4"},[o("label",{class:"block col-span-2 mb-2"},[o("span",{class:"text-gray-700"},[r("Store Room Name")]),i(o("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":n=>this.roomForm.name=n,placeholder:"Name ..."},null),[[l,this.roomForm.name]])]),o("label",{class:"block col-span-2 mb-2"},[o("span",{class:"text-gray-700"},[r("Description")]),i(o("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":n=>this.roomForm.description=n,placeholder:"Description ..."},null),[[l,this.roomForm.description]])])]),o("hr",null,null),o("button",{type:"button",onClick:()=>this.saveStoreRoomForm(),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},[r("Save Form")])])}):null,this.locationModalShow?o(h,{onClose:()=>this.locationModalShow=!1,contentWidth:"w-1/4"},{header:()=>o("h3",null,[this.locationFormTitle]),body:()=>o("form",{action:"post",class:"p-1"},[o("div",{class:"grid grid-cols-2 gap-x-4 mb-4"},[o("label",{class:"block col-span-2 mb-2"},[o("span",{class:"text-gray-700"},[r("Storage Location Name")]),i(o("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":n=>this.locationForm.name=n,placeholder:"Name ..."},null),[[l,this.locationForm.name]])]),o("label",{class:"block col-span-2 mb-2"},[o("span",{class:"text-gray-700"},[r("Description")]),i(o("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":n=>this.locationForm.description=n,placeholder:"Description ..."},null),[[l,this.locationForm.description]])])]),o("hr",null,null),o("button",{type:"button",onClick:()=>this.saveLocationForm(),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},[r("Save Form")])])}):null,this.sectionModalShow?o(h,{onClose:()=>this.sectionModalShow=!1,contentWidth:"w-1/4"},{header:()=>o("h3",null,[this.sectionFormTitle]),body:()=>o("form",{action:"post",class:"p-1"},[o("div",{class:"grid grid-cols-2 gap-x-4 mb-4"},[o("label",{class:"block col-span-2 mb-2"},[o("span",{class:"text-gray-700"},[r("Storage Section Name")]),i(o("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":n=>this.sectionForm.name=n,placeholder:"Name ..."},null),[[l,this.sectionForm.name]])]),o("label",{class:"block col-span-2 mb-2"},[o("span",{class:"text-gray-700"},[r("Description")]),i(o("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":n=>this.sectionForm.description=n,placeholder:"Description ..."},null),[[l,this.sectionForm.description]])])]),o("hr",null,null),o("button",{type:"button",onClick:()=>this.saveStorageSectionForm(),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},[r("Save Form")])])}):null,this.containerModalShow?o(h,{onClose:()=>this.containerModalShow=!1,contentWidth:"w-1/2"},{header:()=>o("h3",null,[this.containerFormTitle]),body:()=>o("form",{action:"post",class:"p-1"},[o("div",{class:"grid grid-cols-2 gap-x-4 mb-4"},[o("label",{class:"block col-span-2 mb-2"},[o("span",{class:"text-gray-700"},[r("Storage Location Name")]),i(o("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":n=>this.containerForm.name=n,placeholder:"Name ..."},null),[[l,this.containerForm.name]])]),o("label",{class:"block col-span-2 mb-2"},[o("span",{class:"text-gray-700"},[r("Description")]),i(o("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":n=>this.containerForm.description=n,placeholder:"Description ..."},null),[[l,this.containerForm.description]])]),o("label",{class:"block col-span-1 mb-2"},[o("span",{class:"text-gray-700"},[r("Number of Slots")]),i(o("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":n=>this.containerForm.slots=n,placeholder:"Slots ...",type:"number"},null),[[l,this.containerForm.slots]])]),o("label",{class:"block col-span-1 mt-10"},[i(o("input",{type:"checkbox",class:"",onChange:n=>this.changeContainerType(n),"onUpdate:modelValue":n=>this.containerForm.grid=n},null),[[k,this.containerForm.grid]]),o("span",{class:"text-gray-700 ml-3"},[r("Add Grid View")])])]),o("div",{class:"grid grid-cols-4 gap-x-4 mb-4"},[this.containerForm.grid?o(d,null,[o("span",{class:"col-span-3"},[o("div",{class:"grid grid-cols-3 gap-x-4"},[o("label",{class:"block col-span-1 mb-2"},[o("span",{class:"text-gray-700"},[r("Cols")]),i(o("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":n=>this.containerForm.cols=n,onKeyup:n=>this.calculateRows(n),type:"number"},null),[[l,this.containerForm.cols]])]),o("label",{class:"block col-span-1 mb-2"},[o("span",{class:"text-gray-700"},[r("Rows")]),i(o("input",{class:"form-input mt-1 block w-full bg-gray-100","onUpdate:modelValue":n=>this.containerForm.rows=n,type:"number",disabled:!0},null),[[l,this.containerForm.rows]])]),o("label",{class:"block col-span-1 mt-10"},[i(o("input",{type:"checkbox",class:"","onUpdate:modelValue":n=>this.containerForm.rowWise=n},null),[[k,this.containerForm.rowWise]]),o("span",{class:"text-gray-700 ml-3"},[r("Row Wise")])])])])]):null]),o("hr",null,null),o("button",{type:"button",onClick:()=>this.saveStorageContainerForm(),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},[r("Save Form")])])}):null])}});export{Fo as StorageHome,Fo as default};
