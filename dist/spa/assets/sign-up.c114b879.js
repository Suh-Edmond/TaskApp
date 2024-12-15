import{Q,a as S,b as U,c as u,d as I}from"./QPage.1df79671.js";import{R as $,Q as B,r as _,O as M,c as f,k as N,l as g,m as R,n as a,u as s,f as t,p as v,S as w,a9 as x,aa as b,U as A,q as F,t as z,W as m}from"./index.a5bfcc32.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";import"./focus-manager.cac92c31.js";const n=d=>(F("data-v-8fb880ce"),d=d(),z(),d),L=n(()=>s("div",{class:"col-4 col-md-4 col-lg-4 col-sm-12 col-xs-12"},null,-1)),j={class:"col-md-4 col-lg-4 col-sm-12 col-xs-12"},O=n(()=>s("div",{class:"text_h6 text-center q-pt-sm q-pb-sm"},"Register",-1)),T=n(()=>s("div",{class:"text-subtitle2 text-center q-pb-xs"}," Create an account to get started ",-1)),W=n(()=>s("label",{for:"credential",class:"form_field"},[m("Name "),s("span",{class:"text-red"},"*")],-1)),D=n(()=>s("label",{for:"credential",class:"form_field"},[m("Email "),s("span",{class:"text-red"},"*")],-1)),G=n(()=>s("label",{for:"password",class:"form_field"},[m("Password "),s("span",{class:"text-red"},"*")],-1)),H={key:0,class:"text-red"},J=n(()=>s("label",{for:"confirm_password",class:"form_field"},[m("Confirm Password "),s("span",{class:"text-red"},"*")],-1)),K={key:0,class:"text-red"},X={class:"q-mt-lg q-mb-lg"},Y={class:"row justify-center q-mb-md"},Z=n(()=>s("span",{class:"forgot_password text-right"},"Already an Account? Login",-1)),ss=n(()=>s("div",{class:"col-4 col-md-4 col-lg-4 col-sm-12 col-xs-12"},null,-1)),es={__name:"sign-up",setup(d){const h=$(),q=B(),p=_(!1),i=_(!0),c=_(!0),e=M({email:null,password:null,name:null,password_confirmation:null}),y=async()=>{let r={url:"public/auth/register",data:e,has_commit:!1,successMsg:"Account created Successful",errorMsg:"Account creation Failed"};p.value=!0,h.dispatch("example/postRequest",r).then(l=>{l.success&&q.push({name:"login"}),p.value=!1})},V=f(()=>e.password!==e.password_confirmation),k=f(()=>e.password!=null&&e.password.length<8),C=f(()=>e.password==null||e.name==null||e.email==null||e.password!==null&&e.password.length<8||e.password!==e.password_confirmation);return(r,l)=>{const P=N("router-link");return g(),R(Q,{class:"page"},{default:a(()=>[s("div",{class:v(["row q-px-sm",r.$q.screen.lg?"q-pt-lg flex flex-center":"q-pt-sm"])},[L,s("div",j,[t(I,{class:v(r.$q.screen.lg?"q-mt-lg login-card":"q-mt-xl login-card")},{default:a(()=>[t(S,null,{default:a(()=>[O,T,t(U,{onSubmit:y,class:v(["q-gutter-md q-mt-lg q-px-lg",r.$q.screen.lg?"q-px-md":""])},{default:a(()=>[s("div",null,[W,t(u,{modelValue:e.name,"onUpdate:modelValue":l[0]||(l[0]=o=>e.name=o),outlined:"",dense:"",type:"text"},null,8,["modelValue"])]),s("div",null,[D,t(u,{modelValue:e.email,"onUpdate:modelValue":l[1]||(l[1]=o=>e.email=o),outlined:"",dense:"",type:"email"},null,8,["modelValue"])]),s("div",null,[G,t(u,{modelValue:e.password,"onUpdate:modelValue":l[3]||(l[3]=o=>e.password=o),type:i.value?"password":"text",outlined:"",dense:""},{append:a(()=>[t(w,{name:i.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[2]||(l[2]=o=>i.value=!i.value)},null,8,["name"])]),hint:a(()=>[k.value?(g(),x("span",H,"Password length must be 8")):b("",!0)]),_:1},8,["modelValue","type"])]),s("div",null,[J,t(u,{modelValue:e.password_confirmation,"onUpdate:modelValue":l[5]||(l[5]=o=>e.password_confirmation=o),type:c.value?"password":"text",outlined:"","bottom-slots":"",dense:""},{append:a(()=>[t(w,{name:c.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[4]||(l[4]=o=>c.value=!c.value)},null,8,["name"])]),hint:a(()=>[V.value?(g(),x("span",K,"Password Mismatch")):b("",!0)]),_:1},8,["modelValue","type"])]),s("div",X,[t(A,{class:"form_button",label:"Register",loading:p.value,disabled:C.value,color:"primary","no-caps":"",type:"submit"},{default:a(()=>[t(w,{name:"arrow_forward",size:"xs",class:"q-pl-lg"})]),_:1},8,["loading","disabled"])]),s("div",Y,[s("label",null,[t(P,{to:{name:"login"},class:"sign_link"},{default:a(()=>[Z]),_:1})])])]),_:1},8,["class"])]),_:1})]),_:1},8,["class"])]),ss],2)]),_:1})}}};var ns=E(es,[["__scopeId","data-v-8fb880ce"]]);export{ns as default};