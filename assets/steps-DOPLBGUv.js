import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{n as a,t as o}from"./useI18n-DtQV8aM0.js";import{n as s,t as c}from"./useControllableState-NzKJCN8h.js";import{c as l,n as u,s as d,t as f}from"./DocPage-DzKszXiH.js";var p,m,h,g,_,v,y;function b(){return(b=e((()=>{p=`_steps_zdgow_1`,m=`_step_zdgow_1`,h=`_button_zdgow_16`,g=`_number_zdgow_39`,_=`_current_zdgow_50`,v=`_complete_zdgow_61`,y={steps:p,step:m,button:h,static:`_static_zdgow_30`,number:g,current:_,complete:v}})))()}var x,S;function C(){return(C=e((()=>{i(),a(),s(),b(),x=n(),S=({items:e,value:t,defaultValue:n,onChange:i,readOnly:a=i===void 0,"aria-label":s,className:l,ref:u,...d})=>{let{t:f}=o(),[p,m]=c({value:t,defaultValue:n??``,onChange:i}),h=e.findIndex(e=>e.value===p);return(0,x.jsx)(`ol`,{"aria-label":s??f(`steps.label`),...d,ref:u,className:r(y.steps,l),children:e.map((e,t)=>{let n=t===h,i=h>-1&&t<h,o=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`span`,{className:y.number,"aria-hidden":`true`,children:t+1}),(0,x.jsx)(`span`,{className:y.label,children:e.label})]});return(0,x.jsx)(`li`,{className:r(y.step,{[y.current]:n,[y.complete]:i}),"aria-current":a&&n?`step`:void 0,children:a?(0,x.jsx)(`span`,{className:r(y.button,y.static),children:o}):(0,x.jsx)(`button`,{type:`button`,className:y.button,disabled:e.disabled,"aria-current":n?`step`:void 0,onClick:()=>{n||m(e.value)},children:o})},e.value)})})}})))()}function w(){let[e,t]=(0,T.useState)(`review`);return(0,E.jsx)(S,{items:D,value:e,onChange:t})}var T,E,D;function O(){return(O=e((()=>{T=t(),C(),E=n(),D=[{value:`draft`,label:`Draft`},{value:`review`,label:`Review`},{value:`publish`,label:`Publish`,disabled:!0}]})))()}function k(){return(0,A.jsx)(S,{"aria-label":`Order progress`,value:`shipped`,items:[{value:`paid`,label:`Paid`},{value:`shipped`,label:`Shipped`},{value:`delivered`,label:`Delivered`}]})}var A;function j(){return(j=e((()=>{C(),A=n()})))()}var M;function N(){return(N=e((()=>{M=`import { useState } from "react";
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
`})))()}var I,L,R;function z(){return(z=e((()=>{O(),j(),N(),F(),t(),u(),l(),I=n(),L=d(Object.assign({"./demos/basic.tsx":w,"./demos/read-only.tsx":k}),Object.assign({"./demos/basic.tsx":M,"./demos/read-only.tsx":P})),R=()=>(0,I.jsx)(f,{id:`steps`,demos:L})})))()}z();export{R as default};