import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{n as a,t as o}from"./useI18n-DtQV8aM0.js";import{n as s,t as c}from"./ProgressIndicator-D2C5-puu.js";import{c as l,n as u,s as d,t as f}from"./DocPage-DzKszXiH.js";var p,m,h,g,_,v,y;function b(){return(b=e((()=>{p=`_loadingState_pj65y_1`,m=`_label_pj65y_17`,h=`_small_pj65y_24`,g=`_medium_pj65y_28`,_=`_large_pj65y_32`,v=`_indicator_pj65y_37`,y={loadingState:p,label:m,small:h,medium:g,large:_,indicator:v}})))()}var x,S;function C(){return(C=e((()=>{i(),a(),c(),b(),x=n(),S=({label:e,size:t=`medium`,className:n,ref:i,...a})=>{let{t:c}=o();return(0,x.jsxs)(`div`,{ref:i,className:r(y.loadingState,y[t],n),role:`status`,"aria-live":`polite`,"aria-atomic":`true`,...a,children:[(0,x.jsx)(s,{className:y.indicator,color:`current`,decorative:!0}),(0,x.jsx)(`span`,{className:y.label,children:e??c(`loadingState.label`)})]})}})))()}function w(){return(0,T.jsx)(S,{})}var T;function E(){return(E=e((()=>{C(),T=n()})))()}function D(){return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,O.jsx)(S,{size:`small`,label:`Loading records...`}),(0,O.jsx)(S,{size:`large`,label:`Loading calendar...`})]})}var O;function k(){return(k=e((()=>{C(),O=n()})))()}var A;function j(){return(j=e((()=>{A=`import { LoadingState } from "@minerva/lib-core";

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
`})))()}var P,F,I;function L(){return(L=e((()=>{E(),k(),j(),N(),t(),u(),l(),P=n(),F=d(Object.assign({"./demos/basic.tsx":w,"./demos/sizes.tsx":D}),Object.assign({"./demos/basic.tsx":A,"./demos/sizes.tsx":M})),I=()=>(0,P.jsx)(f,{id:`loading-state`,demos:F})})))()}L();export{I as default};