import{Q as h,a as w,b as y,c as m,d as V}from"./QPage.1df79671.js";import{Q as k,R as I,r as p,O as Q,c as S,k as C,l as $,m as B,n as t,u as s,f as l,p as u,S as _,U as P,V as R,q as L,t as N,W as g}from"./index.a5bfcc32.js";import{_ as U}from"./plugin-vue_export-helper.21dcd24c.js";import"./focus-manager.cac92c31.js";const o=d=>(L("data-v-1b7e89bf"),d=d(),N(),d),z=o(()=>s("div",{class:"col-4 col-md-4 col-lg-4 col-sm-12 col-xs-12"},null,-1)),F={class:"col-md-4 col-lg-4 col-sm-12 col-xs-12"},M=o(()=>s("div",{class:"text_h6 text-center q-pt-sm q-pb-sm"},"Login",-1)),T=o(()=>s("div",{class:"text-subtitle2 text-center q-pb-xs"}," Welcome back login to create Tasks ",-1)),W=o(()=>s("label",{for:"credential",class:"form_field"},[g("Email "),s("span",{class:"text-red"},"*")],-1)),j=o(()=>s("label",{for:"password",class:"form_field"},[g("Password "),s("span",{class:"text-red"},"*")],-1)),A={class:"q-mt-lg q-mb-lg"},D={class:"row justify-center q-mb-md"},E=o(()=>s("span",{class:"forgot_password text-right"},"Don't have an Account? Register",-1)),O=o(()=>s("div",{class:"col-4 col-md-4 col-lg-4 col-sm-12 col-xs-12"},null,-1)),G={__name:"log-in",setup(d){const f=k(),v=I(),i=p(!1),c=p(!0),a=Q({email:"",password:""}),b=async()=>{let n={url:"/public/auth/login",has_commit:!1,data:a,successMsg:"Login Successful",errorMsg:"Invalid Credentials"};i.value=!0,v.dispatch("example/postRequest",n).then(e=>{e.success&&(f.push({name:"dashboard"}),R.set("data",e.data)),i.value=!1})},x=S(()=>a.email==""||a.password=="");return(n,e)=>{const q=C("router-link");return $(),B(h,{class:"page"},{default:t(()=>[s("div",{class:u(["row q-px-sm",n.$q.screen.lg?"q-pt-lg flex flex-center":"q-pt-sm"])},[z,s("div",F,[l(V,{class:u(n.$q.screen.lg?"q-mt-lg":"q-mt-xl login-card")},{default:t(()=>[l(w,null,{default:t(()=>[M,T,l(y,{onSubmit:b,class:u(["q-gutter-md q-mt-lg q-px-lg",n.$q.screen.lg?"q-px-md":""])},{default:t(()=>[s("div",null,[W,l(m,{modelValue:a.email,"onUpdate:modelValue":e[0]||(e[0]=r=>a.email=r),outlined:"",dense:"",type:"email"},null,8,["modelValue"])]),s("div",null,[j,l(m,{modelValue:a.password,"onUpdate:modelValue":e[2]||(e[2]=r=>a.password=r),type:c.value?"password":"text",outlined:"",dense:""},{append:t(()=>[l(_,{name:c.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[1]||(e[1]=r=>c.value=!c.value)},null,8,["name"])]),_:1},8,["modelValue","type"])]),s("div",A,[l(P,{class:"form_button",label:"Login",loading:i.value,disabled:x.value,color:"primary","no-caps":"",type:"submit"},{default:t(()=>[l(_,{name:"arrow_forward",size:"xs",class:"q-pl-lg"})]),_:1},8,["loading","disabled"])]),s("div",D,[s("label",null,[l(q,{to:{name:"register"},class:"sign_link"},{default:t(()=>[E]),_:1})])])]),_:1},8,["class"])]),_:1})]),_:1},8,["class"])]),O],2)]),_:1})}}};var Y=U(G,[["__scopeId","data-v-1b7e89bf"]]);export{Y as default};