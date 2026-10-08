import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{n as a,t as o}from"./useI18n-Brv-VDVY.js";import{t as s}from"./stylingHooks-GjssfG7q.js";import{n as c,t as l}from"./ProgressIndicator-CLa7Qw7I.js";import{m as u,n as d,p as f,t as p}from"./DocPage-BUvZl8IZ.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{m=`_loadingState_8hf4k_1`,h=`_indicator_8hf4k_17`,g=`_label_8hf4k_21`,_=`_small_8hf4k_28`,v=`_medium_8hf4k_32`,y=`_large_8hf4k_36`,b={loadingState:m,indicator:h,label:g,small:_,medium:v,large:y}})))()}var S,C;function w(){return(w=e((()=>{i(),a(),c(),x(),S=n(),C=({label:e,size:t=`medium`,className:n,ref:i,...a})=>{let{t:c}=o();return(0,S.jsxs)(`div`,{ref:i,className:r(b.loadingState,b[t],n),role:`status`,"aria-live":`polite`,"aria-atomic":`true`,...a,...s(`loading-state`,`root`,{size:t}),children:[(0,S.jsx)(`span`,{className:b.indicator,...s(`loading-state`,`spinner`),children:(0,S.jsx)(l,{color:`current`,decorative:!0})}),(0,S.jsx)(`span`,{className:b.label,...s(`loading-state`,`label`),children:e??c(`loadingState.label`)})]})}})))()}function T(){return(0,E.jsx)(C,{})}var E;function D(){return(D=e((()=>{w(),E=n()})))()}function O(){return(0,k.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,k.jsx)(C,{size:`small`,label:`Loading records...`}),(0,k.jsx)(C,{size:`large`,label:`Loading calendar...`})]})}var k;function A(){return(A=e((()=>{w(),k=n()})))()}var j;function M(){return(M=e((()=>{j=`import { LoadingState } from "@minerva/lib-core";

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
`})))()}var F,I,L;function R(){return(R=e((()=>{D(),A(),M(),P(),t(),d(),u(),F=n(),I=f(Object.assign({"./demos/basic.tsx":T,"./demos/sizes.tsx":O}),Object.assign({"./demos/basic.tsx":j,"./demos/sizes.tsx":N})),L=()=>(0,F.jsx)(p,{id:`loading-state`,demos:I})})))()}R();export{L as default};