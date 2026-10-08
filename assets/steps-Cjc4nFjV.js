import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{Q as a,Z as o}from"./io5-CkIs6v-8.js";import{n as s,t as c}from"./useI18n-Brv-VDVY.js";import{t as l}from"./stylingHooks-GjssfG7q.js";import{m as u,n as d,p as f,t as p}from"./DocPage-BUvZl8IZ.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{m=`_steps_zdgow_1`,h=`_step_zdgow_1`,g=`_button_zdgow_16`,_=`_number_zdgow_39`,v=`_current_zdgow_50`,y=`_complete_zdgow_61`,b={steps:m,step:h,button:g,static:`_static_zdgow_30`,number:_,current:v,complete:y}})))()}var S,C;function w(){return(w=e((()=>{i(),s(),a(),x(),S=n(),C=({items:e,value:t,defaultValue:n,onChange:i,readOnly:a=i===void 0,"aria-label":s,className:u,ref:d,...f})=>{let{t:p}=c(),[m,h]=o({value:t,defaultValue:n??``,onChange:i,name:`Steps`}),g=e.findIndex(e=>e.value===m);return(0,S.jsx)(`ol`,{"aria-label":s??p(`steps.label`),...f,ref:d,className:r(b.steps,u),...l(`steps`,`root`,{readonly:a}),children:e.map((e,t)=>{let n=t===g,i=g>-1&&t<g,o=(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`span`,{className:b.number,"aria-hidden":`true`,...l(`steps`,`indicator`),children:t+1}),(0,S.jsx)(`span`,{className:b.label,...l(`steps`,`label`),children:e.label})]});return(0,S.jsx)(`li`,{className:r(b.step,{[b.current]:n,[b.complete]:i}),"aria-current":a&&n?`step`:void 0,...l(`steps`,`item`,{current:n,disabled:!a&&e.disabled,status:n?void 0:i?`complete`:`upcoming`}),children:a?(0,S.jsx)(`span`,{className:r(b.button,b.static),...l(`steps`,`button`),children:o}):(0,S.jsx)(`button`,{type:`button`,className:b.button,disabled:e.disabled,"aria-current":n?`step`:void 0,...l(`steps`,`button`),onClick:()=>{n||h(e.value)},children:o})},e.value)})})}})))()}function T(){let[e,t]=(0,E.useState)(`review`);return(0,D.jsx)(C,{items:O,value:e,onChange:t})}var E,D,O;function k(){return(k=e((()=>{E=t(),w(),D=n(),O=[{value:`draft`,label:`Draft`},{value:`review`,label:`Review`},{value:`publish`,label:`Publish`,disabled:!0}]})))()}function A(){return(0,j.jsx)(C,{"aria-label":`Order progress`,value:`shipped`,items:[{value:`paid`,label:`Paid`},{value:`shipped`,label:`Shipped`},{value:`delivered`,label:`Delivered`}]})}var j;function M(){return(M=e((()=>{w(),j=n()})))()}var N;function P(){return(P=e((()=>{N=`import { useState } from "react";
import { Steps } from "@minerva/lib-core";

const items = [
  { value: "draft", label: "Draft" },
  { value: "review", label: "Review" },
  { value: "publish", label: "Publish", disabled: true },
];

export default function BasicDemo() {
  const [step, setStep] = useState("review");
  return <Steps items={items} value={step} onChange={setStep} />;
}
`})))()}var F;function I(){return(I=e((()=>{F=`import { Steps } from "@minerva/lib-core";

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
`})))()}var L,R,z;function B(){return(B=e((()=>{k(),M(),P(),I(),t(),d(),u(),L=n(),R=f(Object.assign({"./demos/basic.tsx":T,"./demos/read-only.tsx":A}),Object.assign({"./demos/basic.tsx":N,"./demos/read-only.tsx":F})),z=()=>(0,L.jsx)(p,{id:`steps`,demos:R})})))()}B();export{z as default};