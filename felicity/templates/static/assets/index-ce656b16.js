import{R as y,d as $,S as A,T as B,m as I,L as O,Q as L,t as h,s as V,o as s,c as d,e as p,u as i,b as e,G as P,F as b,y as R,i as x,N as F,w as f,x as _,z as l,A as c,U,B as j}from"./index-236e333a.js";const ie=y`
    mutation AddNotice($payload: NoticeInputType!) {
        createNotice(payload: $payload) {
            ... on NoticeType {
                __typename
                uid
                title
                body
                expiry
                createdByUid
                departments {
                    uid
                    name
                }
                groups {
                    uid
                    name
                }
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,ae=y`
    mutation editNotice($uid: String!, $payload: NoticeInputType!) {
        updateNotice(uid: $uid, payload: $payload) {
            ... on NoticeType {
                __typename
                uid
                title
                body
                expiry
                createdByUid
                departments {
                    uid
                    name
                }
                groups {
                    uid
                    name
                }
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,z=y`
    mutation deleteNotice($uid: String!) {
        deleteNotice(uid: $uid) {
            ... on DeletedItem {
                __typename
                uid
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,Y={class:"overflow-x-auto mt-4"},q={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},G={class:"min-w-full"},H=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Notice Title "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Expiration "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),Q={class:"bg-white"},J={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},K={class:"flex items-center"},W=["onClick"],X={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Z={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},ee=["onClick"],te=["onClick"],oe={key:0,class:"py-4 text-center"},ne=$({__name:"index",setup(re){const w=l(()=>c(()=>import("./PageHeading-e8840135.js"),["assets/PageHeading-e8840135.js","assets/PageHeading.vue_vue_type_script_setup_true_lang-7471f287.js","assets/index-236e333a.js","assets/index-a964bbb1.css"])),N=l(()=>c(()=>import("./LoadingMessage-80ee7b63.js"),["assets/LoadingMessage-80ee7b63.js","assets/LoadingMessage.vue_vue_type_script_setup_true_lang-f84223a1.js","assets/index-236e333a.js","assets/index-a964bbb1.css"])),v=l(()=>c(()=>import("./NoticeForm-c7d122c7.js"),["assets/NoticeForm-c7d122c7.js","assets/index-236e333a.js","assets/index-a964bbb1.css","assets/array-324ecb18.js"])),E=l(()=>c(()=>import("./SimpleModal-ac8fb9e7.js"),["assets/SimpleModal-ac8fb9e7.js","assets/index-236e333a.js","assets/index-a964bbb1.css","assets/SimpleModal-98e7299b.css"]));let k=A();const a=B(),C=I(),{withClientMutation:T}=j(),{fetchingNotices:D}=O(a),n=L({notice:{},title:"",showModal:!1,newNotice:!0}),m=h(()=>C?.auth?.user);V(async()=>{k.fetchDepartments({}),await a.fetchMyNotices(m.value?.uid)});async function S(r){await U.fire({title:"Are you sure?",text:"You want to delete these notice",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete now!",cancelButtonText:"No, do not delete!"}).then(async o=>{o.isConfirmed&&T(z,{uid:r},"deleteNotice").then(t=>a.deleteNotice(t))})}function u(r,o={}){n.showModal=!0,n.title=(r?"ADD":"EDIT")+" Notice",r?n.notice={}:n.notice={...o}}const M=h(()=>a.getMyNotices(m.value?.uid));return(r,o)=>(s(),d(b,null,[p(i(w),{title:"Notice Manager"}),e("button",{onClick:o[0]||(o[0]=P(t=>u(!0),["prevent"])),class:"px-4 my-2 p-1 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"}," New Notice "),e("div",Y,[e("div",q,[e("table",G,[H,e("tbody",Q,[(s(!0),d(b,null,R(M.value,t=>(s(),d("tr",{key:t.uid},[e("td",J,[e("div",K,[e("div",{class:"text-sm leading-5 text-gray-800",onClick:g=>u(!1,t)},_(t.title),9,W)])]),e("td",X,_(t.status),1),e("td",Z,[e("button",{class:"px-2 py-1 mr-2 border-grey-500 border text-grey-500rounded-smtransition duration-300 hover:bg-gray-100 hover:text-black-700 focus:outline-none",onClick:g=>u(!1,t)}," View/Edit ",8,ee),e("button",{class:"px-2 py-1 mr-2 ml-2 border-orange-600 border text-orange-600rounded-smtransition duration-300 hover:bg-orange-600 hover:text-black-700 focus:outline-none",onClick:g=>S(t.uid)}," Delete ",8,te)])]))),128))])]),i(D)?(s(),d("div",oe,[p(i(N),{message:"Fetching notices ..."})])):x("",!0)])]),n.showModal?(s(),F(i(E),{key:0,onClose:o[2]||(o[2]=t=>n.showModal=!1)},{header:f(()=>[e("h3",null,_(n.title),1)]),body:f(()=>[p(i(v),{notice:n.notice,onClose:o[1]||(o[1]=t=>n.showModal=!1)},null,8,["notice"])]),_:1})):x("",!0)],64))}}),de=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}));export{ie as A,ae as E,de as i};
