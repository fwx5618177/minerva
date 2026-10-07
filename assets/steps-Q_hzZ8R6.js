import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Pt as r,Vt as i}from"./dist-dg6ajl7p.js";import{c as a,n as o,s,t as c}from"./DocPage-Kqmidh_0.js";function l(){let[e,t]=(0,u.useState)(`review`);return(0,d.jsx)(r,{items:f,value:e,onChange:t})}var u,d,f;function p(){return(p=e((()=>{u=t(),i(),d=n(),f=[{value:`draft`,label:`Draft`},{value:`review`,label:`Review`},{value:`publish`,label:`Publish`,disabled:!0}]})))()}function m(){return(0,h.jsx)(r,{ariaLabel:`Order progress`,value:`shipped`,items:[{value:`paid`,label:`Paid`},{value:`shipped`,label:`Shipped`},{value:`delivered`,label:`Delivered`}]})}var h;function g(){return(g=e((()=>{i(),h=n()})))()}var _;function v(){return(v=e((()=>{_=`import { useState } from "react";
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
`})))()}var y;function b(){return(b=e((()=>{y=`import { Steps } from "@minerva/lib-core";

export default function ReadOnlyDemo() {
  return (
    <Steps
      ariaLabel="Order progress"
      value="shipped"
      items={[
        { value: "paid", label: "Paid" },
        { value: "shipped", label: "Shipped" },
        { value: "delivered", label: "Delivered" },
      ]}
    />
  );
}
`})))()}var x,S,C;function w(){return(w=e((()=>{p(),g(),v(),b(),t(),o(),a(),x=n(),S=s(Object.assign({"./demos/basic.tsx":l,"./demos/read-only.tsx":m}),Object.assign({"./demos/basic.tsx":_,"./demos/read-only.tsx":y})),C=()=>(0,x.jsx)(c,{id:`steps`,demos:S})})))()}w();export{C as default};