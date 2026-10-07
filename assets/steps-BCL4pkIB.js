import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{C as r,O as i,c as a,k as o,n as s,s as c,t as l,w as u}from"./DocPage-HgWiqH91.js";import{n as d,t as f}from"./useI18n-CYdr3eVz.js";var p,m,h,g,_,v,y;function b(){return(b=e((()=>{p=`_steps_zdgow_1`,m=`_step_zdgow_1`,h=`_button_zdgow_16`,g=`_number_zdgow_39`,_=`_current_zdgow_50`,v=`_complete_zdgow_61`,y={steps:p,step:m,button:h,static:`_static_zdgow_30`,number:g,current:_,complete:v}})))()}var x,S;function C(){return(C=e((()=>{i(),d(),u(),b(),x=n(),S=({items:e,value:t,defaultValue:n,onChange:i,readOnly:a=i===void 0,"aria-label":s,className:c,ref:l,...u})=>{let{t:d}=f(),[p,m]=r({value:t,defaultValue:n??``,onChange:i,name:`Steps`}),h=e.findIndex(e=>e.value===p);return(0,x.jsx)(`ol`,{"aria-label":s??d(`steps.label`),...u,ref:l,className:o(y.steps,c),children:e.map((e,t)=>{let n=t===h,r=h>-1&&t<h,i=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`span`,{className:y.number,"aria-hidden":`true`,children:t+1}),(0,x.jsx)(`span`,{className:y.label,children:e.label})]});return(0,x.jsx)(`li`,{className:o(y.step,{[y.current]:n,[y.complete]:r}),"aria-current":a&&n?`step`:void 0,children:a?(0,x.jsx)(`span`,{className:o(y.button,y.static),children:i}):(0,x.jsx)(`button`,{type:`button`,className:y.button,disabled:e.disabled,"aria-current":n?`step`:void 0,onClick:()=>{n||m(e.value)},children:i})},e.value)})})}})))()}function w(){let[e,t]=(0,T.useState)(`review`);return(0,E.jsx)(S,{items:D,value:e,onChange:t})}var T,E,D;function O(){return(O=e((()=>{T=t(),C(),E=n(),D=[{value:`draft`,label:`Draft`},{value:`review`,label:`Review`},{value:`publish`,label:`Publish`,disabled:!0}]})))()}function k(){return(0,A.jsx)(S,{"aria-label":`Order progress`,value:`shipped`,items:[{value:`paid`,label:`Paid`},{value:`shipped`,label:`Shipped`},{value:`delivered`,label:`Delivered`}]})}var A;function j(){return(j=e((()=>{C(),A=n()})))()}var M;function N(){return(N=e((()=>{M=`import { useState } from "react";
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
`})))()}var P;function F(){return(F=e((()=>{P=`import { Steps } from "@minerva/lib-core";

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
`})))()}var I,L,R;function z(){return(z=e((()=>{O(),j(),N(),F(),t(),s(),a(),I=n(),L=c(Object.assign({"./demos/basic.tsx":w,"./demos/read-only.tsx":k}),Object.assign({"./demos/basic.tsx":M,"./demos/read-only.tsx":P})),R=()=>(0,I.jsx)(l,{id:`steps`,demos:L})})))()}z();export{R as default};