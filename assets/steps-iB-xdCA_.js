import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{o as r,vt as i}from"./minerva-web-components-ByJsjP0z.js";import{m as a,n as o,p as s,t as c}from"./DocPage-CVA4UCUb.js";import{Q as l,Z as u}from"./io5-BO4aBax7.js";import{n as d,t as f}from"./useI18n-B2tkKcqQ.js";import{t as p}from"./stylingHooks-GjssfG7q.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{m=`_steps_1bf09_1`,h=`_step_1bf09_1`,g=`_complete_1bf09_30`,_=`_button_1bf09_34`,v=`_number_1bf09_57`,y=`_current_1bf09_80`,b={steps:m,step:h,complete:g,button:_,static:`_static_1bf09_48`,number:v,current:y}})))()}var S,C;function w(){return(w=e((()=>{i(),d(),l(),x(),S=n(),C=({items:e,value:t,defaultValue:n,onChange:i,readOnly:a=i===void 0,"aria-label":o,className:s,ref:c,...l})=>{let{t:d}=f(),[m,h]=u({value:t,defaultValue:n??``,onChange:i,name:`Steps`}),g=e.findIndex(e=>e.value===m);return(0,S.jsx)(`ol`,{"aria-label":o??d(`steps.label`),...l,ref:c,className:r(b.steps,s),...p(`steps`,`root`,{readonly:a}),children:e.map((e,t)=>{let n=t===g,i=g>-1&&t<g,o=(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`span`,{className:b.number,"aria-hidden":`true`,...p(`steps`,`indicator`),children:t+1}),(0,S.jsx)(`span`,{className:b.label,...p(`steps`,`label`),children:e.label})]});return(0,S.jsx)(`li`,{className:r(b.step,{[b.current]:n,[b.complete]:i}),"aria-current":a&&n?`step`:void 0,...p(`steps`,`item`,{current:n,disabled:!a&&e.disabled,status:n?void 0:i?`complete`:`upcoming`}),children:a?(0,S.jsx)(`span`,{className:r(b.button,b.static),...p(`steps`,`button`),children:o}):(0,S.jsx)(`button`,{type:`button`,className:b.button,disabled:e.disabled,"aria-current":n?`step`:void 0,...p(`steps`,`button`),onClick:()=>{n||h(e.value)},children:o})},e.value)})})}})))()}function T(){let[e,t]=(0,E.useState)(`review`);return(0,D.jsx)(C,{items:O,value:e,onChange:t})}var E,D,O;function k(){return(k=e((()=>{E=t(),w(),D=n(),O=[{value:`draft`,label:`Draft`},{value:`review`,label:`Review`},{value:`publish`,label:`Publish`,disabled:!0}]})))()}function A(){return(0,j.jsx)(C,{"aria-label":`Order progress`,value:`shipped`,items:[{value:`paid`,label:`Paid`},{value:`shipped`,label:`Shipped`},{value:`delivered`,label:`Delivered`}]})}var j;function M(){return(M=e((()=>{w(),j=n()})))()}function N(){return(0,P.jsx)(C,{"aria-label":`Deployment`,value:`deploy`,style:F,items:[{value:`build`,label:`Build`},{value:`test`,label:`Test`},{value:`deploy`,label:`Deploy`},{value:`verify`,label:`Verify`}]})}var P,F;function I(){return(I=e((()=>{w(),P=n(),F={"--steps-accent-color":`var(--success-color)`,"--steps-connector-min-width":`3rem`}})))()}var L;function R(){return(R=e((()=>{L=`import { useState } from "react";
import { Steps } from "minerva-design";

const items = [
  { value: "draft", label: "Draft" },
  { value: "review", label: "Review" },
  { value: "publish", label: "Publish", disabled: true },
];

export default function BasicDemo() {
  const [step, setStep] = useState("review");
  return <Steps items={items} value={step} onChange={setStep} />;
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { Steps } from "minerva-design";

export default function ReadOnlyDemo() {
  return (
    <Steps
      aria-label="Order progress"
      value="shipped"
      items={[
        { value: "paid", label: "Paid" },
        { value: "shipped", label: "Shipped" },
        { value: "delivered", label: "Delivered" },
      ]}
    />
  );
}
`})))()}var V;function H(){return(H=e((()=>{V=`import type { CSSProperties } from "react";
import { Steps } from "minerva-design";

// Completed steps show a check on a solid disc, the current one a halo;
// connectors fill in as the steps complete.
const style = {
  "--steps-accent-color": "var(--success-color)",
  "--steps-connector-min-width": "3rem",
} as CSSProperties;

export default function StylingDemo() {
  return (
    <Steps
      aria-label="Deployment"
      value="deploy"
      style={style}
      items={[
        { value: "build", label: "Build" },
        { value: "test", label: "Test" },
        { value: "deploy", label: "Deploy" },
        { value: "verify", label: "Verify" },
      ]}
    />
  );
}
`})))()}var U,W,G;function K(){return(K=e((()=>{k(),M(),I(),R(),B(),H(),t(),o(),a(),U=n(),W=s(Object.assign({"./demos/basic.tsx":T,"./demos/read-only.tsx":A,"./demos/styling.tsx":N}),Object.assign({"./demos/basic.tsx":L,"./demos/read-only.tsx":z,"./demos/styling.tsx":V})),G=()=>(0,U.jsx)(c,{id:`steps`,demos:W})})))()}K();export{G as default};