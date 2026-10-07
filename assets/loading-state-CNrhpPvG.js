import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{O as r,c as i,k as a,n as o,s,t as c}from"./DocPage-HgWiqH91.js";import{n as l,t as u}from"./useI18n-CYdr3eVz.js";import{n as d,t as f}from"./ProgressIndicator-6_LFe5-H.js";var p,m,h,g,_,v,y;function b(){return(b=e((()=>{p=`_loadingState_pj65y_1`,m=`_label_pj65y_17`,h=`_small_pj65y_24`,g=`_medium_pj65y_28`,_=`_large_pj65y_32`,v=`_indicator_pj65y_37`,y={loadingState:p,label:m,small:h,medium:g,large:_,indicator:v}})))()}var x,S;function C(){return(C=e((()=>{r(),l(),f(),b(),x=n(),S=({label:e,size:t=`medium`,className:n,ref:r,...i})=>{let{t:o}=u();return(0,x.jsxs)(`div`,{ref:r,className:a(y.loadingState,y[t],n),role:`status`,"aria-live":`polite`,"aria-atomic":`true`,...i,children:[(0,x.jsx)(d,{className:y.indicator,color:`current`,decorative:!0}),(0,x.jsx)(`span`,{className:y.label,children:e??o(`loadingState.label`)})]})}})))()}function w(){return(0,T.jsx)(S,{})}var T;function E(){return(E=e((()=>{C(),T=n()})))()}function D(){return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,O.jsx)(S,{size:`small`,label:`Loading records...`}),(0,O.jsx)(S,{size:`large`,label:`Loading calendar...`})]})}var O;function k(){return(k=e((()=>{C(),O=n()})))()}var A;function j(){return(j=e((()=>{A=`import { LoadingState } from "@minerva/lib-core";

export default function BasicDemo() {
  return <LoadingState />;
}
`})))()}var M;function N(){return(N=e((()=>{M=`import { LoadingState } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <LoadingState size="small" label="Loading records..." />
      <LoadingState size="large" label="Loading calendar..." />
    </div>
  );
}
`})))()}var P,F,I;function L(){return(L=e((()=>{E(),k(),j(),N(),t(),o(),i(),P=n(),F=s(Object.assign({"./demos/basic.tsx":w,"./demos/sizes.tsx":D}),Object.assign({"./demos/basic.tsx":A,"./demos/sizes.tsx":M})),I=()=>(0,P.jsx)(c,{id:`loading-state`,demos:F})})))()}L();export{I as default};