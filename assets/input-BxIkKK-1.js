import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Kt as r,tt as i}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{B as a,k as o}from"./lu-BRLciF5v.js";import{d as s}from"./dist-CcA3uxH5.js";import{c,n as l,s as u,t as d}from"./DocPage-Dm1vTl9w.js";function f(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{"aria-label":`Search`,prefix:(0,p.jsx)(o,{}),placeholder:`Search`}),(0,p.jsx)(r,{"aria-label":`Handle`,prefix:`@`,defaultValue:`minerva`}),(0,p.jsx)(r,{"aria-label":`Price`,prefix:`$`,suffix:`USD`,inputMode:`decimal`})]})}var p;function m(){return(m=e((()=>{s(),a(),p=n()})))()}function h(){let[e,t]=(0,g.useState)(``);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r,{"aria-label":`Name`,placeholder:`Uncontrolled`}),(0,_.jsx)(r,{"aria-label":`Controlled`,placeholder:`Controlled`,value:e,onChange:e=>t(e.target.value)})]})}var g,_;function v(){return(v=e((()=>{s(),g=t(),_=n()})))()}function y(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{"aria-label":`Small`,size:`small`,placeholder:`small`}),(0,b.jsx)(r,{"aria-label":`Medium`,placeholder:`medium (outline)`}),(0,b.jsx)(r,{"aria-label":`Large`,size:`large`,placeholder:`large`}),(0,b.jsx)(r,{"aria-label":`Filled`,variant:`filled`,placeholder:`filled`}),(0,b.jsx)(r,{"aria-label":`Unstyled`,variant:`unstyled`,placeholder:`unstyled`})]})}var b;function x(){return(x=e((()=>{s(),b=n()})))()}function S(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(r,{"aria-label":`Invalid`,invalid:!0,defaultValue:`Invalid`}),(0,C.jsx)(r,{"aria-label":`Disabled`,disabled:!0,defaultValue:`Disabled`}),(0,C.jsx)(r,{"aria-label":`Read-only`,readOnly:!0,defaultValue:`Read-only`}),(0,C.jsx)(i,{label:`Inside a FormField`,errorMessage:`Inherits the error`,children:(0,C.jsx)(r,{})})]})}var C;function w(){return(w=e((()=>{s(),C=n()})))()}var T;function E(){return(E=e((()=>{T=`import { Input } from "@minerva/lib-core";
import { LuSearch } from "react-icons/lu";

export default function AddonsDemo() {
  return (
    <>
      <Input aria-label="Search" prefix={<LuSearch />} placeholder="Search" />
      <Input aria-label="Handle" prefix="@" defaultValue="minerva" />
      <Input aria-label="Price" prefix="$" suffix="USD" inputMode="decimal" />
    </>
  );
}
`})))()}var D;function O(){return(O=e((()=>{D=`import { Input } from "@minerva/lib-core";
import { useState } from "react";

export default function BasicDemo() {
  const [value, setValue] = useState("");
  return (
    <>
      <Input aria-label="Name" placeholder="Uncontrolled" />
      <Input
        aria-label="Controlled"
        placeholder="Controlled"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
}
`})))()}var k;function A(){return(A=e((()=>{k=`import { Input } from "@minerva/lib-core";

export default function SizesVariantsDemo() {
  return (
    <>
      <Input aria-label="Small" size="small" placeholder="small" />
      <Input aria-label="Medium" placeholder="medium (outline)" />
      <Input aria-label="Large" size="large" placeholder="large" />
      <Input aria-label="Filled" variant="filled" placeholder="filled" />
      <Input aria-label="Unstyled" variant="unstyled" placeholder="unstyled" />
    </>
  );
}
`})))()}var j;function M(){return(M=e((()=>{j=`import { FormField, Input } from "@minerva/lib-core";

export default function StatesDemo() {
  return (
    <>
      <Input aria-label="Invalid" invalid defaultValue="Invalid" />
      <Input aria-label="Disabled" disabled defaultValue="Disabled" />
      <Input aria-label="Read-only" readOnly defaultValue="Read-only" />
      <FormField label="Inside a FormField" errorMessage="Inherits the error">
        <Input />
      </FormField>
    </>
  );
}
`})))()}var N,P,F;function I(){return(I=e((()=>{m(),v(),x(),w(),E(),O(),A(),M(),t(),l(),c(),N=n(),P=u(Object.assign({"./demos/addons.tsx":f,"./demos/basic.tsx":h,"./demos/sizes-variants.tsx":y,"./demos/states.tsx":S}),Object.assign({"./demos/addons.tsx":T,"./demos/basic.tsx":D,"./demos/sizes-variants.tsx":k,"./demos/states.tsx":j})),F=()=>(0,N.jsx)(d,{id:`input`,demos:P})})))()}I();export{F as default};