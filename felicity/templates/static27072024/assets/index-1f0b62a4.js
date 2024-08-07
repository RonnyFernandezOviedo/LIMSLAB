import{R as f,d as W,P as X,r as w,Q as k,t as O,a as Z,o as r,c,b as t,F as x,y as j,n as T,u as i,G as D,x as P,e as I,i as U,N as ee,w as E,f as S,H as R,I as te,z as oe,j as ne,k as se,A as ie,B as ae,_ as re}from"./index-7e8465c2.js";const ce=f`
    mutation AddCountry($payload: CountryInputType!) {
        createCountry(payload: $payload) {
            ... on CountryType {
                __typename
                uid
                name
                code
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,le=f`
    mutation editCountry($uid: String!, $payload: CountryInputType!) {
        updateCountry(uid: $uid, payload: $payload) {
            ... on CountryType {
                __typename
                uid
                name
                code
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,de=f`
    mutation AddProvince($payload: ProvinceInputType!) {
        createProvince(payload: $payload) {
            ... on ProvinceType {
                __typename
                uid
                name
                code
                countryUid
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,ue=f`
    mutation editProvince($uid: String!, $payload: ProvinceInputType!) {
        updateProvince(uid: $uid, payload: $payload) {
            ... on ProvinceType {
                __typename
                uid
                name
                code
                countryUid
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,pe=f`
    mutation AddDistrict($payload: DistrictInputType!) {
        createDistrict(payload: $payload) {
            ... on DistrictType {
                __typename
                uid
                name
                code
                provinceUid
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,ye=f`
    mutation editDistrict($uid: String!, $payload: DistrictInputType!) {
        updateDistrict(uid: $uid, payload: $payload) {
            ... on DistrictType {
                __typename
                uid
                name
                code
                provinceUid
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,_=h=>(ne("data-v-b185f683"),h=h(),se(),h),me={class:"mt-4"},ve={class:"grid grid-cols-12 gap-4 mt-2"},fe={class:"col-span-3"},_e={class:"w-full flex justify-between items-center pr-4"},be=_(()=>t("h2",{class:"text-l font-semibold inline uppercase"},"Pais",-1)),ge={class:"overflow-y-scroll overscroll-contain scroll-section"},he=["onClick"],Ce=["onClick"],we={key:0,class:"col-span-4"},ke={class:"w-full flex justify-between items-center pr-4"},xe=_(()=>t("h2",{class:"text-l font-semibold inline uppercase"},"Provincia",-1)),De={class:"overflow-y-scroll overscroll-contain scroll-section"},Pe=["onClick"],$e=["onClick"],Oe={key:1,class:"col-span-5"},je={class:"w-full flex justify-between items-center pr-4"},Te=_(()=>t("h2",{class:"text-l font-semibold inline uppercase"},"Distrito",-1)),Ie={class:"overflow-y-scroll overscroll-contain scroll-section"},Ue=["onClick"],Ae=["onClick"],Ee={action:"post",class:"p-1"},Se={class:"grid grid-cols-2 gap-x-4 mb-4"},Re={class:"block col-span-1 mb-2"},Ne=_(()=>t("span",{class:"text-gray-700"},"Nombre",-1)),Ve={class:"block col-span-1 mb-2"},Be=_(()=>t("span",{class:"text-gray-700"},"Codigo",-1)),Le=_(()=>t("hr",null,null,-1)),Me=W({__name:"index",setup(h){const N=oe(()=>ie(()=>import("./SimpleModal-16734371.js"),["assets/SimpleModal-16734371.js","assets/index-7e8465c2.js","assets/index-fff21e38.css","assets/SimpleModal-98e7299b.css"])),a=X(),{withClientMutation:y}=ae();let d=w(!0),m=w(!1),C=w(""),u=k({}),l=k({}),p=k({}),s=k({}),A=w("");a.fetchCountries();const V=O(()=>a.getCountries);function B(){const n={name:s.name,code:s.code};y(ce,{payload:n},"createCountry").then(e=>{a.addCountry(e),Object.assign(u,e)})}function L(){const n={name:s.name,code:s.code,active:!0};y(le,{uid:s.uid,payload:n},"updateCountry").then(e=>{a.updateCountry(e),Object.assign(u,e)})}function M(){const n={name:s.name,code:s.code,countryUid:u.uid};y(de,{payload:n},"createProvince").then(e=>{a.addProvince(e),Object.assign(l,e)})}function F(){const n={name:s.name,code:s.code,active:!0,countryUid:+s.countryUid};y(ue,{uid:s.uid,payload:n},"updateProvince").then(e=>{a.updateProvince(e),Object.assign(l,e)})}function z(){const n={name:s.name,code:s.code,provinceUid:l.uid};y(pe,{payload:n},"createDistrict").then(e=>{a.addDistrict(e),Object.assign(p,e)})}function G(){const n={name:s.name,code:s.code,active:!0,provinceUid:+s.provinceUid};y(ye,{uid:s.uid,payload:n},"updateDistrict").then(e=>{a.updateDistrict(e),Object.assign(p,e)})}function Y(){return u.uid!==void 0}function q(){return l.uid!==void 0}const H=O(()=>a.getProvinces),Q=O(()=>a.getDistricts);let $=(n,e)=>{n==="country"&&(Object.assign(u,{...e}),a.filterProvincesByCountry(e.uid)),n==="province"&&(Object.assign(l,{...e}),a.filterDistrictsByProvince(e.uid)),n==="district"&&Object.assign(p,{...e})},J=n=>{n==="country"&&(Object.assign(u,{}),Object.assign(l,{}),Object.assign(p,{})),n==="province"&&(Object.assign(l,{}),Object.assign(p,{})),n==="district"&&Object.assign(p,{})};function v(n,e,b={}){d.value=n,C.value=e,m.value=!0,A.value=(n?"CREAR":"EDITAR")+" "+e.toUpperCase(),n?(J(e),Object.assign(s,{})):Object.assign(s,{...b})}function K(){C.value==="country"&&(d.value===!0&&B(),d.value===!1&&L()),C.value==="province"&&(d.value===!0&&M(),d.value===!1&&F()),C.value==="district"&&(d.value===!0&&z(),d.value===!1&&G()),m.value=!1}return(n,e)=>{const b=Z("font-awesome-icon");return r(),c(x,null,[t("div",me,[t("div",ve,[t("section",fe,[t("div",_e,[be,t("button",{class:"p-2 my-2 ml-8 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100",onClick:e[0]||(e[0]=o=>v(!0,"Pais"))}," Agregar Pais ")]),t("div",ge,[(r(!0),c(x,null,j(V.value,o=>(r(),c("div",{key:o.uid,class:T(i(u)?.uid===o.uid?"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border c-active":"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border")},[t("a",{onClick:D(g=>i($)("country",o),["prevent","stop"]),class:"font-semibold text-gray-700"},[t("span",null,P(o.name),1)],8,he),t("a",{onClick:g=>v(!1,"Pais",o),class:"px-2 cursor"},[I(b,{icon:"pen"})],8,Ce)],2))),128))])]),Y()?(r(),c("section",we,[t("div",ke,[xe,t("button",{class:"p-2 my-2 ml-8 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100",onClick:e[1]||(e[1]=o=>v(!0,"provincia"))}," Agregar Provincia ")]),t("div",De,[(r(!0),c(x,null,j(H.value,o=>(r(),c("div",{key:o.uid,class:T(i(l)?.uid===o.uid?"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border c-active":"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border")},[t("a",{onClick:D(g=>i($)("province",o),["prevent","stop"]),class:"font-semibold text-gray-700"},[t("span",null,P(o.name),1)],8,Pe),t("a",{onClick:g=>v(!1,"provincia",o),class:"px-2 cursor"},[I(b,{icon:"pen"})],8,$e)],2))),128))])])):U("",!0),q()?(r(),c("section",Oe,[t("div",je,[Te,t("button",{class:"p-2 my-2 ml-8 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100",onClick:e[2]||(e[2]=o=>v(!0,"distrito"))}," Agregar Distrito ")]),t("div",Ie,[(r(!0),c(x,null,j(Q.value,o=>(r(),c("div",{key:o.uid,class:T(i(p)?.uid===o.uid?"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border c-active":"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border")},[t("a",{onClick:D(g=>i($)("district",o),["prevent","stop"]),class:"font-semibold text-gray-700"},[t("span",null,P(o.name),1)],8,Ue),t("a",{onClick:g=>v(!1,"distrito",o),class:"px-2 cursor"},[I(b,{icon:"pen"})],8,Ae)],2))),128))])])):U("",!0)])]),i(m)?(r(),ee(i(N),{key:0,onClose:e[6]||(e[6]=o=>te(m)?m.value=!1:m=!1)},{header:E(()=>[t("h3",null,P(i(A)),1)]),body:E(()=>[t("form",Ee,[t("div",Se,[t("label",Re,[Ne,S(t("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[3]||(e[3]=o=>i(s).name=o),placeholder:"Nombre ..."},null,512),[[R,i(s).name]])]),t("label",Ve,[Be,S(t("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[4]||(e[4]=o=>i(s).code=o),placeholder:"Codigo ..."},null,512),[[R,i(s).code]])])]),Le,t("button",{type:"button",onClick:e[5]||(e[5]=D(o=>K(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Guardar forma ")])]),_:1})):U("",!0)],64)}}});const ze=re(Me,[["__scopeId","data-v-b185f683"]]);export{ze as default};
