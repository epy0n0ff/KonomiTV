import{dr as F,z as V,A as R,cG as X,C as T,cM as Y,c6 as w,b as n,D as P,E as Z,b6 as $,al as p,ak as ee,cr as x,ca as te,bD as ae,cy as M,cA as ne,bw as h,$ as re,W as C,b9 as se,a5 as ie,a3 as le,w as W,a as oe,F as ce,cc as ue,v as ve,cz as de,c7 as ge,df as me,B as fe,ce as ye,cI as Se,cf as be,cL as _e,c9 as he,dg as ze,cP as Pe,cD as Ve,cO as ke}from"./index-VVm0Ak2F.js";function Ie(e,l){if(!F)return;const s=l.modifiers||{},t=l.value,{handler:u,options:v}=typeof t=="object"?t:{handler:t,options:{}},m=new IntersectionObserver(function(){var g;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const r=(g=e._observe)==null?void 0:g[l.instance.$.uid];if(!r)return;const i=d.some(S=>S.isIntersecting);u&&(!s.quiet||r.init)&&(!s.once||i||r.init)&&u(i,d,f),i&&s.once?q(e,l):r.init=!0},v);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:m},m.observe(e)}function q(e,l){var t;const s=(t=e._observe)==null?void 0:t[l.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const Ce={mounted:Ie,unmounted:q};function Re(e){return{aspectStyles:P(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const H=V({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...R(),...X()},"VResponsive"),E=T()({name:"VResponsive",props:H(),setup(e,l){let{slots:s}=l;const{aspectStyles:t}=Re(e),{dimensionStyles:u}=Y(e);return w(()=>{var v;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[u.value,e.style]},[n("div",{class:"v-responsive__sizer",style:t.value},null),(v=s.additional)==null?void 0:v.call(s),s.default&&n("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),Te=V({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),z=(e,l)=>{let{slots:s}=l;const{transition:t,disabled:u,group:v,...m}=e,{component:d=v?p:ee,...f}=typeof t=="object"?t:{};return Z(d,$(typeof t=="string"?{name:u?"":t}:f,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:u,group:v}).filter(r=>{let[i,g]=r;return g!==void 0})),m),s)},we=V({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...H(),...R(),...x(),...Te()},"VImg"),Be=T()({name:"VImg",directives:{intersect:Ce},props:we(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:s,slots:t}=l;const{backgroundColorClasses:u,backgroundColorStyles:v}=te(ae(e,"color")),{roundedClasses:m}=M(e),d=ne("VImg"),f=h(""),r=re(),i=h(e.eager?"loading":"idle"),g=h(),S=h(),c=P(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=P(()=>c.value.aspect||g.value/S.value||0);C(()=>e.src,()=>{k(i.value!=="idle")}),C(b,(a,o)=>{!a&&o&&r.value&&_(r.value)}),se(()=>k());function k(a){if(!(e.eager&&a)&&!(F&&!a&&!e.eager)){if(i.value="loading",c.value.lazySrc){const o=new Image;o.src=c.value.lazySrc,_(o,null)}c.value.src&&ie(()=>{var o;s("loadstart",((o=r.value)==null?void 0:o.currentSrc)||c.value.src),setTimeout(()=>{var y;if(!d.isUnmounted)if((y=r.value)!=null&&y.complete){if(r.value.naturalWidth||j(),i.value==="error")return;b.value||_(r.value,null),i.value==="loading"&&B()}else b.value||_(r.value),O()})})}}function B(){var a;d.isUnmounted||(O(),_(r.value),i.value="loaded",s("load",((a=r.value)==null?void 0:a.currentSrc)||c.value.src))}function j(){var a;d.isUnmounted||(i.value="error",s("error",((a=r.value)==null?void 0:a.currentSrc)||c.value.src))}function O(){const a=r.value;a&&(f.value=a.currentSrc||a.src)}let I=-1;le(()=>{clearTimeout(I)});function _(a){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{if(clearTimeout(I),d.isUnmounted)return;const{naturalHeight:N,naturalWidth:U}=a;N||U?(g.value=U,S.value=N):!a.complete&&i.value==="loading"&&o!=null?I=window.setTimeout(y,o):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,S.value=1)};y()}const D=P(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),L=()=>{var y;if(!c.value.src||i.value==="idle")return null;const a=n("img",{class:["v-img__img",D.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:B,onError:j},null),o=(y=t.sources)==null?void 0:y.call(t);return n(z,{transition:e.transition,appear:!0},{default:()=>[W(o?n("picture",{class:"v-img__picture"},[o,a]):a,[[ve,i.value==="loaded"]])]})},G=()=>n(z,{transition:e.transition},{default:()=>[c.value.lazySrc&&i.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",D.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),J=()=>t.placeholder?n(z,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!t.error)&&n("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,K=()=>t.error?n(z,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&n("div",{class:"v-img__error"},[t.error()])]}):null,Q=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,A=h(!1);{const a=C(b,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{A.value=!0})}),a())})}return w(()=>{const a=E.filterProps(e);return W(n(E,$({class:["v-img",{"v-img--booting":!A.value},u.value,m.value,e.class],style:[{width:ue(e.width==="auto"?g.value:e.width)},v.value,e.style]},a,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(ce,null,[n(L,null,null),n(G,null,null),n(Q,null,null),n(J,null,null),n(K,null,null)]),default:t.default}),[[oe("intersect"),{handler:k,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:r,state:i,naturalWidth:g,naturalHeight:S}}}),je=V({start:Boolean,end:Boolean,icon:de,image:String,text:String,...R(),...ge(),...x(),...me(),...fe(),...ye(),...Se({variant:"flat"})},"VAvatar"),De=T()({name:"VAvatar",props:je(),setup(e,l){let{slots:s}=l;const{themeClasses:t}=be(e),{colorClasses:u,colorStyles:v,variantClasses:m}=_e(e),{densityClasses:d}=he(e),{roundedClasses:f}=M(e),{sizeClasses:r,sizeStyles:i}=ze(e);return w(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,u.value,d.value,f.value,r.value,m.value,e.class],style:[v.value,i.value,e.style]},{default:()=>[s.default?n(Ve,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[s.default()]}):e.image?n(Be,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(Pe,{key:"icon",icon:e.icon},null):e.text,ke(!1,"v-avatar")]})),{}}});export{Ce as I,z as M,De as V,Be as a,Te as m};
