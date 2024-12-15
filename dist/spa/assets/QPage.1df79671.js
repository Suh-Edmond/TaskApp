import{r as L,X as Me,g as U,i as ue,w as N,o as oe,z as le,Y as ye,c as k,Z as Re,_ as ke,$ as ie,B as Y,a0 as xe,a1 as Ce,h as x,a2 as J,S as fe,a3 as Fe,x as W,a4 as Ve,a5 as Ae,a6 as _e,v as ee,a7 as ce,H as Ee,a8 as Be,D as G,G as $e,I as Pe}from"./index.a5bfcc32.js";import{a as de,u as we,b as Oe,r as Ie,c as Se}from"./focus-manager.cac92c31.js";const ve=/^on[A-Z]/;function Te(){const{attrs:e,vnode:t}=U(),u={listeners:L({}),attributes:L({})};function r(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&ve.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)ve.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return Me(r),r(),u}function ze({validate:e,resetValidation:t,requiresQForm:u}){const r=ue(ye,!1);if(r!==!1){const{props:f,proxy:d}=U();Object.assign(d,{validate:e,resetValidation:t}),N(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),r.unbindComponent(d)):r.bindComponent(d)}),oe(()=>{f.disable!==!0&&r.bindComponent(d)}),le(()=>{f.disable!==!0&&r.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const ge=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,me=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,he=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ne=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,re={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ge.test(e),hexaColor:e=>me.test(e),hexOrHexaColor:e=>he.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>ne.test(e),rgbOrRgbaColor:e=>te.test(e)||ne.test(e),hexOrRgbColor:e=>ge.test(e)||te.test(e),hexaOrRgbaColor:e=>me.test(e)||ne.test(e),anyColor:e=>he.test(e)||te.test(e)||ne.test(e)},De=[!0,!1,"ondemand"],je={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>De.includes(e)}};function Ke(e,t){const{props:u,proxy:r}=U(),f=L(!1),d=L(null),c=L(!1);ze({validate:T,resetValidation:_});let h=0,A;const R=k(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),w=k(()=>u.disable!==!0&&R.value===!0&&t.value===!1),g=k(()=>u.error===!0||f.value===!0),Z=k(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);N(()=>u.modelValue,()=>{c.value=!0,w.value===!0&&u.lazyRules===!1&&z()});function v(){u.lazyRules!=="ondemand"&&w.value===!0&&c.value===!0&&z()}N(()=>u.reactiveRules,j=>{j===!0?A===void 0&&(A=N(()=>u.rules,v,{immediate:!0,deep:!0})):A!==void 0&&(A(),A=void 0)},{immediate:!0}),N(()=>u.lazyRules,v),N(e,j=>{j===!0?c.value=!0:w.value===!0&&u.lazyRules!=="ondemand"&&z()});function _(){h++,t.value=!1,c.value=!1,f.value=!1,d.value=null,z.cancel()}function T(j=u.modelValue){if(u.disable===!0||R.value===!1)return!0;const O=++h,F=t.value!==!0?()=>{c.value=!0}:()=>{},V=(q,S)=>{q===!0&&F(),f.value=q,d.value=S||null,t.value=!1},E=[];for(let q=0;q<u.rules.length;q++){const S=u.rules[q];let D;if(typeof S=="function"?D=S(j,re):typeof S=="string"&&re[S]!==void 0&&(D=re[S](j)),D===!1||typeof D=="string")return V(!0,D),!1;D!==!0&&D!==void 0&&E.push(D)}return E.length===0?(V(!1),!0):(t.value=!0,Promise.all(E).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return O===h&&V(!1),!0;const S=q.find(D=>D===!1||typeof D=="string");return O===h&&V(S!==void 0,S),S===void 0},q=>(O===h&&(console.error(q),V(!0)),!1)))}const z=Re(T,0);return le(()=>{A!==void 0&&A(),z.cancel()}),Object.assign(r,{resetValidation:_,validate:T}),ke(r,"hasError",()=>g.value),{isDirtyModel:c,hasRules:R,hasError:g,errorMessage:Z,validate:T,resetValidation:_}}function se(e){return e!=null&&(""+e).length!==0}const Le={...Se,...je,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Ne={...Le,maxlength:[Number,String]},Qe=["update:modelValue","clear","focus","blur"];function Ze({requiredForAttr:e=!0,tagProp:t,changeEvent:u=!1}={}){const{props:r,proxy:f}=U(),d=we(r,f.$q),c=Oe({required:e,getValue:()=>r.for});return{requiredForAttr:e,changeEvent:u,tag:t===!0?k(()=>r.tag):{value:"label"},isDark:d,editable:k(()=>r.disable!==!0&&r.readonly!==!0),innerLoading:L(!1),focused:L(!1),hasPopupOpen:!1,splitAttrs:Te(),targetUid:c,rootRef:L(null),targetRef:L(null),controlRef:L(null)}}function He(e){const{props:t,emit:u,slots:r,attrs:f,proxy:d}=U(),{$q:c}=d;let h=null;e.hasValue===void 0&&(e.hasValue=k(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=i=>{u("update:modelValue",i)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:a}),Object.assign(e,{clearValue:s,onControlFocusin:o,onControlFocusout:a,focus:S}),e.computedCounter===void 0&&(e.computedCounter=k(()=>{if(t.counter!==!1){const i=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,m=t.maxlength!==void 0?t.maxlength:t.maxValues;return i+(m!==void 0?" / "+m:"")}}));const{isDirtyModel:A,hasRules:R,hasError:w,errorMessage:g,resetValidation:Z}=Ke(e.focused,e.innerLoading),v=e.floatingLabel!==void 0?k(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):k(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),_=k(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),T=k(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),z=k(()=>`q-field row no-wrap items-start q-field--${T.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(v.value===!0?" q-field--float":"")+(O.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&_.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),j=k(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),O=k(()=>t.labelSlot===!0||t.label!==void 0),F=k(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),V=k(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:v.value,modelValue:t.modelValue,emitValue:e.emitValue})),E=k(()=>{const i={};return e.targetUid.value&&(i.for=e.targetUid.value),t.disable===!0&&(i["aria-disabled"]="true"),i});function q(){const i=document.activeElement;let m=e.targetRef!==void 0&&e.targetRef.value;m&&(i===null||i.id!==e.targetUid.value)&&(m.hasAttribute("tabindex")===!0||(m=m.querySelector("[tabindex]")),m&&m!==i&&m.focus({preventScroll:!0}))}function S(){de(q)}function D(){Ie(q);const i=document.activeElement;i!==null&&e.rootRef.value.contains(i)&&i.blur()}function o(i){h!==null&&(clearTimeout(h),h=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",i))}function a(i,m){h!==null&&clearTimeout(h),h=setTimeout(()=>{h=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",i)),m!==void 0&&m())})}function s(i){ie(i),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),e.changeEvent===!0&&u("change",null),u("clear",t.modelValue),Y(()=>{const m=A.value;Z(),A.value=m})}function l(i){[13,32].includes(i.keyCode)&&s(i)}function y(){const i=[];return r.prepend!==void 0&&i.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},r.prepend())),i.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},b())),w.value===!0&&t.noErrorIcon===!1&&i.push(p("error",[x(fe,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?i.push(p("inner-loading-append",r.loading!==void 0?r.loading():[x(Fe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&i.push(p("inner-clearable-append",[x(fe,{class:"q-field__focusable-action",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,role:"button","aria-label":c.lang.label.clear,onKeyup:l,onClick:s})])),r.append!==void 0&&i.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},r.append())),e.getInnerAppend!==void 0&&i.push(p("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&i.push(e.getControlChild()),i}function b(){const i=[];return t.prefix!==void 0&&t.prefix!==null&&i.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&i.push(e.getShadowControl()),e.getControl!==void 0?i.push(e.getControl()):r.rawControl!==void 0?i.push(r.rawControl()):r.control!==void 0&&i.push(x("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},r.control(V.value))),O.value===!0&&i.push(x("div",{class:F.value},W(r.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&i.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),i.concat(W(r.default))}function B(){let i,m;w.value===!0?g.value!==null?(i=[x("div",{role:"alert"},g.value)],m=`q--slot-error-${g.value}`):(i=W(r.error),m="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(i=[x("div",t.hint)],m=`q--slot-hint-${t.hint}`):(i=W(r.hint),m="q--slot-hint"));const M=t.counter===!0||r.counter!==void 0;if(t.hideBottomSpace===!0&&M===!1&&i===void 0)return;const $=x("div",{key:m,class:"q-field__messages col"},i);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?$:x(Ve,{name:"q-transition--field-message"},()=>$),M===!0?x("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function p(i,m){return m===null?null:x("div",{key:i,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},m)}let C=!1;return xe(()=>{C=!0}),Ce(()=>{C===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&oe(()=>{d.focus()}),le(()=>{h!==null&&clearTimeout(h)}),Object.assign(d,{focus:S,blur:D}),function(){const m=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...E.value}:E.value;return x(e.tag.value,{ref:e.rootRef,class:[z.value,f.class],style:f.style,...m},[r.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},r.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:e.controlRef,class:j.value,tabindex:-1,...e.controlEvents},y()),_.value===!0?B():null]),r.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},r.after()):null])}}const be={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ae={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},qe=Object.keys(ae);qe.forEach(e=>{ae[e].regex=new RegExp(ae[e].pattern)});const Ue=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+qe.join("")+"])|(.)","g"),pe=/[.*+?^${}()|[\]\\]/g,I=String.fromCharCode(1),Ye={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function We(e,t,u,r){let f,d,c,h,A,R;const w=L(null),g=L(v());function Z(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,T),N(()=>e.mask,o=>{if(o!==void 0)z(g.value,!0);else{const a=S(g.value);T(),e.modelValue!==a&&t("update:modelValue",a)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&z(g.value,!0)}),N(()=>e.unmaskedValue,()=>{w.value===!0&&z(g.value)});function v(){if(T(),w.value===!0){const o=E(S(e.modelValue));return e.fillMask!==!1?D(o):o}return e.modelValue}function _(o){if(o<f.length)return f.slice(-o);let a="",s=f;const l=s.indexOf(I);if(l!==-1){for(let y=o-s.length;y>0;y--)a+=I;s=s.slice(0,l)+a+s.slice(l)}return s}function T(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&Z(),w.value===!1){h=void 0,f="",d="";return}const o=be[e.mask]===void 0?e.mask:be[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=a.replace(pe,"\\$&"),l=[],y=[],b=[];let B=e.reverseFillMask===!0,p="",C="";o.replace(Ue,($,n,P,H,Q)=>{if(H!==void 0){const K=ae[H];b.push(K),C=K.negate,B===!0&&(y.push("(?:"+C+"+)?("+K.pattern+"+)?(?:"+C+"+)?("+K.pattern+"+)?"),B=!1),y.push("(?:"+C+"+)?("+K.pattern+")?")}else if(P!==void 0)p="\\"+(P==="\\"?"":P),b.push(P),l.push("([^"+p+"]+)?"+p+"?");else{const K=n!==void 0?n:Q;p=K==="\\"?"\\\\\\\\":K.replace(pe,"\\\\$&"),b.push(K),l.push("([^"+p+"]+)?"+p+"?")}});const i=new RegExp("^"+l.join("")+"("+(p===""?".":"[^"+p+"]")+"+)?"+(p===""?"":"["+p+"]*")+"$"),m=y.length-1,M=y.map(($,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+$):n===m?new RegExp("^"+$+"("+(C===""?".":C)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+$));c=b,h=$=>{const n=i.exec(e.reverseFillMask===!0?$:$.slice(0,b.length+1));n!==null&&($=n.slice(1).join(""));const P=[],H=M.length;for(let Q=0,K=$;Q<H;Q++){const X=M[Q].exec(K);if(X===null)break;K=K.slice(X.shift().length),P.push(...X)}return P.length!==0?P.join(""):$},f=b.map($=>typeof $=="string"?$:I).join(""),d=f.split(I).join(a)}function z(o,a,s){const l=r.value,y=l.selectionEnd,b=l.value.length-y,B=S(o);a===!0&&T();const p=E(B),C=e.fillMask!==!1?D(p):p,i=g.value!==C;l.value!==C&&(l.value=C),i===!0&&(g.value=C),document.activeElement===l&&Y(()=>{if(C===d){const M=e.reverseFillMask===!0?d.length:0;l.setSelectionRange(M,M,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const M=l.selectionEnd;let $=y-1;for(let n=A;n<=$&&n<M;n++)f[n]!==I&&$++;O.right(l,$);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const M=e.reverseFillMask===!0?y===0?C.length>p.length?1:0:Math.max(0,C.length-(C===d?0:Math.min(p.length,b)+1))+1:y;l.setSelectionRange(M,M,"forward");return}if(e.reverseFillMask===!0)if(i===!0){const M=Math.max(0,C.length-(C===d?0:Math.min(p.length,b+1)));M===1&&y===1?l.setSelectionRange(M,M,"forward"):O.rightReverse(l,M)}else{const M=C.length-b;l.setSelectionRange(M,M,"backward")}else if(i===!0){const M=Math.max(0,f.indexOf(I),Math.min(p.length,y)-1);O.right(l,M)}else{const M=y-1;O.right(l,M)}});const m=e.unmaskedValue===!0?S(C):C;String(e.modelValue)!==m&&(e.modelValue!==null||m!=="")&&u(m,!0)}function j(o,a,s){const l=E(S(o.value));a=Math.max(0,f.indexOf(I),Math.min(l.length,a)),A=a,o.setSelectionRange(a,s,"forward")}const O={left(o,a){const s=f.slice(a-1).indexOf(I)===-1;let l=Math.max(0,a-1);for(;l>=0;l--)if(f[l]===I){a=l,s===!0&&a++;break}if(l<0&&f[a]!==void 0&&f[a]!==I)return O.right(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},right(o,a){const s=o.value.length;let l=Math.min(s,a+1);for(;l<=s;l++)if(f[l]===I){a=l;break}else f[l-1]===I&&(a=l);if(l>s&&f[a-1]!==void 0&&f[a-1]!==I)return O.left(o,s);o.setSelectionRange(a,a,"forward")},leftReverse(o,a){const s=_(o.value.length);let l=Math.max(0,a-1);for(;l>=0;l--)if(s[l-1]===I){a=l;break}else if(s[l]===I&&(a=l,l===0))break;if(l<0&&s[a]!==void 0&&s[a]!==I)return O.rightReverse(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},rightReverse(o,a){const s=o.value.length,l=_(s),y=l.slice(0,a+1).indexOf(I)===-1;let b=Math.min(s,a+1);for(;b<=s;b++)if(l[b-1]===I){a=b,a>0&&y===!0&&a--;break}if(b>s&&l[a-1]!==void 0&&l[a-1]!==I)return O.leftReverse(o,s);o.setSelectionRange(a,a,"forward")}};function F(o){t("click",o),R=void 0}function V(o){if(t("keydown",o),Ae(o)===!0||o.altKey===!0)return;const a=r.value,s=a.selectionStart,l=a.selectionEnd;if(o.shiftKey||(R=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&R===void 0&&(R=a.selectionDirection==="forward"?s:l);const y=O[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),y(a,R===s?l:s),o.shiftKey){const b=a.selectionStart;a.setSelectionRange(Math.min(R,b),Math.max(R,b),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&s===l?(O.left(a,s),a.setSelectionRange(a.selectionStart,l,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&s===l&&(O.rightReverse(a,l),a.setSelectionRange(s,a.selectionEnd,"forward"))}function E(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return q(o);const a=c;let s=0,l="";for(let y=0;y<a.length;y++){const b=o[s],B=a[y];if(typeof B=="string")l+=B,b===B&&s++;else if(b!==void 0&&B.regex.test(b))l+=B.transform!==void 0?B.transform(b):b,s++;else return l}return l}function q(o){const a=c,s=f.indexOf(I);let l=o.length-1,y="";for(let b=a.length-1;b>=0&&l!==-1;b--){const B=a[b];let p=o[l];if(typeof B=="string")y=B+y,p===B&&l--;else if(p!==void 0&&B.regex.test(p))do y=(B.transform!==void 0?B.transform(p):p)+y,l--,p=o[l];while(s===b&&p!==void 0&&B.regex.test(p));else return y}return y}function S(o){return typeof o!="string"||h===void 0?typeof o=="number"?h(""+o):o:h(o)}function D(o){return d.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?d.slice(0,-o.length)+o:o+d.slice(o.length)}return{innerValue:g,hasMask:w,moveCursorForPaste:j,updateMaskValue:z,onMaskedKeydown:V,onMaskedClick:F}}const Xe={name:String};function ut(e={}){return(t,u,r)=>{t[u](x("input",{class:"hidden"+(r||""),...e.value}))}}function Ge(e){return k(()=>e.name||e.for)}function Je(e,t){function u(){const r=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(r)===r&&("length"in r?Array.from(r):[r]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?k(()=>{if(e.type==="file")return u()}):k(u)}const et=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,tt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,nt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,at=/[a-z0-9_ -]$/i;function ot(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(_e.is.firefox===!0?at.test(u.data)===!1:et.test(u.data)===!0||tt.test(u.data)===!0||nt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var it=ee({name:"QInput",inheritAttrs:!1,props:{...Ne,...Ye,...Xe,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Qe,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:r}=U(),{$q:f}=r,d={};let c=NaN,h,A,R=null,w;const g=L(null),Z=Ge(e),{innerValue:v,hasMask:_,moveCursorForPaste:T,updateMaskValue:z,onMaskedKeydown:j,onMaskedClick:O}=We(e,t,p,g),F=Je(e,!0),V=k(()=>se(v.value)),E=ot(b),q=Ze({changeEvent:!0}),S=k(()=>e.type==="textarea"||e.autogrow===!0),D=k(()=>S.value===!0||["text","search","url","tel","password"].includes(e.type)),o=k(()=>{const n={...q.splitAttrs.listeners.value,onInput:b,onPaste:y,onChange:i,onBlur:m,onFocus:ce};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=E,_.value===!0&&(n.onKeydown=j,n.onClick=O),e.autogrow===!0&&(n.onAnimationend=B),n}),a=k(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Z.value,...q.splitAttrs.attributes.value,id:q.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return S.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});N(()=>e.type,()=>{g.value&&(g.value.value=e.modelValue)}),N(()=>e.modelValue,n=>{if(_.value===!0){if(A===!0&&(A=!1,String(n)===c))return;z(n)}else v.value!==n&&(v.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(h===!0?h=!1:delete d.value));e.autogrow===!0&&Y(C)}),N(()=>e.autogrow,n=>{n===!0?Y(C):g.value!==null&&u.rows>0&&(g.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&Y(C)});function s(){de(()=>{const n=document.activeElement;g.value!==null&&g.value!==n&&(n===null||n.id!==q.targetUid.value)&&g.value.focus({preventScroll:!0})})}function l(){g.value!==null&&g.value.select()}function y(n){if(_.value===!0&&e.reverseFillMask!==!0){const P=n.target;T(P,P.selectionStart,P.selectionEnd)}t("paste",n)}function b(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const P=n.target.value;if(n.target.qComposing===!0){d.value=P;return}if(_.value===!0)z(P,!1,n.inputType);else if(p(P),D.value===!0&&n.target===document.activeElement){const{selectionStart:H,selectionEnd:Q}=n.target;H!==void 0&&Q!==void 0&&Y(()=>{n.target===document.activeElement&&P.indexOf(n.target.value)===0&&n.target.setSelectionRange(H,Q)})}e.autogrow===!0&&C()}function B(n){t("animationend",n),C()}function p(n,P){w=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&c!==n&&(c=n,P===!0&&(A=!0),t("update:modelValue",n),Y(()=>{c===n&&(c=NaN)})),w=void 0},e.type==="number"&&(h=!0,d.value=n),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=n,R=setTimeout(w,e.debounce)):w()}function C(){requestAnimationFrame(()=>{const n=g.value;if(n!==null){const P=n.parentNode.style,{scrollTop:H}=n,{overflowY:Q,maxHeight:K}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),X=Q!==void 0&&Q!=="scroll";X===!0&&(n.style.overflowY="hidden"),P.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",X===!0&&(n.style.overflowY=parseInt(K,10)<n.scrollHeight?"auto":"hidden"),P.marginBottom="",n.scrollTop=H}})}function i(n){E(n),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),t("change",n.target.value)}function m(n){n!==void 0&&ce(n),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),h=!1,A=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{g.value!==null&&(g.value.value=v.value!==void 0?v.value:"")})}function M(){return d.hasOwnProperty("value")===!0?d.value:v.value!==void 0?v.value:""}le(()=>{m()}),oe(()=>{e.autogrow===!0&&C()}),Object.assign(q,{innerValue:v,fieldClass:k(()=>`q-${S.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:k(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:g,emitValue:p,hasValue:V,floatingLabel:k(()=>V.value===!0&&(e.type!=="number"||isNaN(v.value)===!1)||se(e.displayValue)),getControl:()=>x(S.value===!0?"textarea":"input",{ref:g,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...o.value,...e.type!=="file"?{value:M()}:F.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(S.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},M()),x("span",e.shadowText)])});const $=He(q);return Object.assign(r,{focus:s,select:l,getNativeElement:()=>g.value}),ke(r,"nativeEl",()=>g.value),$}}),st=ee({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:u}){const r=U(),f=L(null);let d=0;const c=[];function h(v){const _=typeof v=="boolean"?v:e.noErrorFocus!==!0,T=++d,z=(F,V)=>{u(`validation${F===!0?"Success":"Error"}`,V)},j=F=>{const V=F.validate();return typeof V.then=="function"?V.then(E=>({valid:E,comp:F}),E=>({valid:!1,comp:F,err:E})):Promise.resolve({valid:V,comp:F})};return(e.greedy===!0?Promise.all(c.map(j)).then(F=>F.filter(V=>V.valid!==!0)):c.reduce((F,V)=>F.then(()=>j(V).then(E=>{if(E.valid===!1)return Promise.reject(E)})),Promise.resolve()).catch(F=>[F])).then(F=>{if(F===void 0||F.length===0)return T===d&&z(!0),!0;if(T===d){const{comp:V,err:E}=F[0];if(E!==void 0&&console.error(E),z(!1,V),_===!0){const q=F.find(({comp:S})=>typeof S.focus=="function"&&Be(S.$)===!1);q!==void 0&&q.comp.focus()}}return!1})}function A(){d++,c.forEach(v=>{typeof v.resetValidation=="function"&&v.resetValidation()})}function R(v){v!==void 0&&ie(v);const _=d+1;h().then(T=>{_===d&&T===!0&&(e.onSubmit!==void 0?u("submit",v):v!==void 0&&v.target!==void 0&&typeof v.target.submit=="function"&&v.target.submit())})}function w(v){v!==void 0&&ie(v),u("reset"),Y(()=>{A(),e.autofocus===!0&&e.noResetFocus!==!0&&g()})}function g(){de(()=>{if(f.value===null)return;const v=f.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),_=>_.tabIndex!==-1);v!=null&&v.focus({preventScroll:!0})})}Ee(ye,{bindComponent(v){c.push(v)},unbindComponent(v){const _=c.indexOf(v);_!==-1&&c.splice(_,1)}});let Z=!1;return xe(()=>{Z=!0}),Ce(()=>{Z===!0&&e.autofocus===!0&&g()}),oe(()=>{e.autofocus===!0&&g()}),Object.assign(r.proxy,{validate:h,resetValidation:A,submit:R,reset:w,focus:g,getValidationComponents:()=>c}),()=>x("form",{class:"q-form",ref:f,onSubmit:R,onReset:w},W(t.default))}}),dt=ee({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const u=k(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>x(e.tag,{class:u.value},W(t.default))}}),ft=ee({name:"QCard",props:{...Se,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:u}}=U(),r=we(e,u),f=k(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>x(e.tag,{class:f.value},W(t.default))}}),ct=ee({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:u}}=U(),r=ue($e,G);if(r===G)return console.error("QPage needs to be a deep child of QLayout"),G;if(ue(Pe,G)===G)return console.error("QPage needs to be child of QPageContainer"),G;const d=k(()=>{const h=(r.header.space===!0?r.header.size:0)+(r.footer.space===!0?r.footer.size:0);if(typeof e.styleFn=="function"){const A=r.isContainer.value===!0?r.containerHeight.value:u.screen.height;return e.styleFn(h,A)}return{minHeight:r.isContainer.value===!0?r.containerHeight.value-h+"px":u.screen.height===0?h!==0?`calc(100vh - ${h}px)`:"100vh":u.screen.height-h+"px"}}),c=k(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>x("main",{class:c.value,style:d.value},W(t.default))}});export{ct as Q,dt as a,st as b,it as c,ft as d,Qe as e,He as f,Ze as g,Xe as h,Ge as i,se as j,ot as k,ut as l,Ne as u};