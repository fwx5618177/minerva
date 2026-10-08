import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{m as a,n as o,p as s,t as c}from"./DocPage-9P1WMt4D.js";import{n as l,t as u}from"./useI18n-Brv-VDVY.js";import{t as d}from"./stylingHooks-GjssfG7q.js";import{n as f,t as p}from"./ProgressIndicator-CLa7Qw7I.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{m=`_loadingState_8hf4k_1`,h=`_indicator_8hf4k_17`,g=`_label_8hf4k_21`,_=`_small_8hf4k_28`,v=`_medium_8hf4k_32`,y=`_large_8hf4k_36`,b={loadingState:m,indicator:h,label:g,small:_,medium:v,large:y}})))()}var S,C;function w(){return(w=e((()=>{i(),l(),f(),x(),S=n(),C=({label:e,size:t=`medium`,className:n,ref:i,...a})=>{let{t:o}=u();return(0,S.jsxs)(`div`,{ref:i,className:r(b.loadingState,b[t],n),role:`status`,"aria-live":`polite`,"aria-atomic":`true`,...a,...d(`loading-state`,`root`,{size:t}),children:[(0,S.jsx)(`span`,{className:b.indicator,...d(`loading-state`,`spinner`),children:(0,S.jsx)(p,{color:`current`,decorative:!0})}),(0,S.jsx)(`span`,{className:b.label,...d(`loading-state`,`label`),children:e??o(`loadingState.label`)})]})}})))()}function T(){return(0,E.jsx)(C,{})}var E;function D(){return(D=e((()=>{w(),E=n()})))()}function O(){return(0,k.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,k.jsx)(C,{size:`small`,label:`Loading records...`}),(0,k.jsx)(C,{size:`large`,label:`Loading calendar...`})]})}var k;function A(){return(A=e((()=>{w(),k=n()})))()}var j;function M(){return(M=e((()=>{j=`import { LoadingState } from "@minerva/lib-core";

export default function BasicDemo() {
  return <LoadingState />;
}
`})))()}var N;function P(){return(P=e((()=>{N=`import { LoadingState } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <LoadingState size="small" label="Loading records..." />
      <LoadingState size="large" label="Loading calendar..." />
    </div>
  );
}
`})))()}var F,I,L;function R(){return(R=e((()=>{D(),A(),M(),P(),t(),o(),a(),F=n(),I=s(Object.assign({"./demos/basic.tsx":T,"./demos/sizes.tsx":O}),Object.assign({"./demos/basic.tsx":j,"./demos/sizes.tsx":N})),L=()=>(0,F.jsx)(c,{id:`loading-state`,demos:I})})))()}R();export{L as default};