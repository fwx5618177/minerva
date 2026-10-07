import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{en as r,tt as i}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d as a}from"./dist-CcA3uxH5.js";import{c as o,n as s,s as c,t as l}from"./DocPage-Dm1vTl9w.js";function u(){let[e,t]=(0,d.useState)(1);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{"aria-label":`Quantity`,min:0,max:10,value:e,onChange:t}),(0,f.jsxs)(`p`,{children:[`Value: `,e===null?`empty`:e]})]})}var d,f;function p(){return(p=e((()=>{a(),d=t(),f=n()})))()}function m(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{label:`HTTP status`,helperText:`Between 100 and 599.`,required:!0,children:(0,h.jsx)(r,{defaultValue:200,min:100,max:599})}),(0,h.jsx)(i,{label:`Retries`,readOnly:!0,children:(0,h.jsx)(r,{defaultValue:3})})]})}var h;function g(){return(g=e((()=>{a(),h=n()})))()}function _(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r,{"aria-label":`Rate`,defaultValue:.5,min:0,max:1,step:.01,showStepper:!0}),(0,v.jsx)(r,{"aria-label":`Price`,defaultValue:9.9,precision:2,size:`large`}),(0,v.jsx)(r,{"aria-label":`Latency`,defaultValue:100,step:50,allowEmpty:!1,size:`small`})]})}var v;function y(){return(y=e((()=>{a(),v=n()})))()}var b;function x(){return(x=e((()=>{b=`import { NumberInput } from "@minerva/lib-core";
import { useState } from "react";

export default function BasicDemo() {
  const [quantity, setQuantity] = useState<number | null>(1);
  return (
    <>
      <NumberInput
        aria-label="Quantity"
        min={0}
        max={10}
        value={quantity}
        onChange={setQuantity}
      />
      <p>Value: {quantity === null ? "empty" : quantity}</p>
    </>
  );
}
`})))()}var S;function C(){return(C=e((()=>{S=`import { FormField, NumberInput } from "@minerva/lib-core";

export default function FormControlDemo() {
  return (
    <>
      <FormField label="HTTP status" helperText="Between 100 and 599." required>
        <NumberInput defaultValue={200} min={100} max={599} />
      </FormField>
      <FormField label="Retries" readOnly>
        <NumberInput defaultValue={3} />
      </FormField>
    </>
  );
}
`})))()}var w;function T(){return(T=e((()=>{w=`import { NumberInput } from "@minerva/lib-core";

export default function StepperPrecisionDemo() {
  return (
    <>
      <NumberInput
        aria-label="Rate"
        defaultValue={0.5}
        min={0}
        max={1}
        step={0.01}
        showStepper
      />
      <NumberInput
        aria-label="Price"
        defaultValue={9.9}
        precision={2}
        size="large"
      />
      <NumberInput
        aria-label="Latency"
        defaultValue={100}
        step={50}
        allowEmpty={false}
        size="small"
      />
    </>
  );
}
`})))()}var E,D,O;function k(){return(k=e((()=>{p(),g(),y(),x(),C(),T(),t(),s(),o(),E=n(),D=c(Object.assign({"./demos/basic.tsx":u,"./demos/form-control.tsx":m,"./demos/stepper-precision.tsx":_}),Object.assign({"./demos/basic.tsx":b,"./demos/form-control.tsx":S,"./demos/stepper-precision.tsx":w})),O=()=>(0,E.jsx)(l,{id:`number-input`,demos:D})})))()}k();export{O as default};