import{d as m,m as p,u as o,o as s,c as r,e as n,z as _,A as a}from"./index-b75e268d.js";const c={key:0},f={key:1},l=m({__name:"Auth",setup(v){const d=_(()=>a(()=>import("./Login-5bc6fcce.js"),["assets/Login-5bc6fcce.js","assets/index-b75e268d.js","assets/index-a964bbb1.css","assets/array-66ec393a.js"])),i=_(()=>a(()=>import("./PasswordReset-db1b384c.js"),["assets/PasswordReset-db1b384c.js","assets/index-b75e268d.js","assets/index-a964bbb1.css"])),t=p();return t.reset(),(P,e)=>o(t).auth.forgotPassword?(s(),r("div",c,[n(o(i),{onForgot:e[0]||(e[0]=u=>o(t).setForgotPassword(!1))})])):(s(),r("div",f,[n(o(d),{onForgot:e[1]||(e[1]=u=>o(t).setForgotPassword(!0))})]))}});export{l as default};