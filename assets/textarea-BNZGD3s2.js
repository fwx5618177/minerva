import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{a as r,r as i}from"./FormControl-s2LFIZKG.js";import{n as a,t as o}from"./Textarea-B1tNFzIA.js";import{m as s,n as c,p as l,t as u}from"./DocPage-44Ak-YGP.js";function d(){let[e,t]=(0,f.useState)(``);return(0,p.jsx)(a,{"aria-label":`Bio`,rows:4,placeholder:`Tell us about yourself`,value:e,onChange:e=>t(e.target.value)})}var f,p;function m(){return(m=e((()=>{o(),f=t(),p=n()})))()}function h(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{label:`Summary`,helperText:`At most 200 characters.`,required:!0,children:(0,g.jsx)(a,{rows:3,maxLength:200})}),(0,g.jsx)(i,{label:`Notes`,errorMessage:`Notes are too long.`,children:(0,g.jsx)(a,{rows:3,defaultValue:`Lorem ipsum…`})})]})}var g;function _(){return(_=e((()=>{r(),o(),g=n()})))()}function v(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{"aria-label":`Small`,size:`small`,placeholder:`small`}),(0,y.jsx)(a,{"aria-label":`Large`,size:`large`,placeholder:`large`}),(0,y.jsx)(a,{"aria-label":`Filled`,variant:`filled`,placeholder:`filled`}),(0,y.jsx)(a,{"aria-label":`Unstyled`,variant:`unstyled`,placeholder:`unstyled`})]})}var y;function b(){return(b=e((()=>{o(),y=n()})))()}var x;function S(){return(S=e((()=>{x=`import { Textarea } from "@minerva/lib-core";
import { useState } from "react";

export default function BasicDemo() {
  const [bio, setBio] = useState("");
  return (
    <Textarea
      aria-label="Bio"
      rows={4}
      placeholder="Tell us about yourself"
      value={bio}
      onChange={(event) => setBio(event.target.value)}
    />
  );
}
`})))()}var C;function w(){return(w=e((()=>{C=`import { FormField, Textarea } from "@minerva/lib-core";

export default function FormControlDemo() {
  return (
    <>
      <FormField label="Summary" helperText="At most 200 characters." required>
        <Textarea rows={3} maxLength={200} />
      </FormField>
      <FormField label="Notes" errorMessage="Notes are too long.">
        <Textarea rows={3} defaultValue="Lorem ipsum…" />
      </FormField>
    </>
  );
}
`})))()}var T;function E(){return(E=e((()=>{T=`import { Textarea } from "@minerva/lib-core";

export default function SizesVariantsDemo() {
  return (
    <>
      <Textarea aria-label="Small" size="small" placeholder="small" />
      <Textarea aria-label="Large" size="large" placeholder="large" />
      <Textarea aria-label="Filled" variant="filled" placeholder="filled" />
      <Textarea
        aria-label="Unstyled"
        variant="unstyled"
        placeholder="unstyled"
      />
    </>
  );
}
`})))()}var D,O,k;function A(){return(A=e((()=>{m(),_(),b(),S(),w(),E(),t(),c(),s(),D=n(),O=l(Object.assign({"./demos/basic.tsx":d,"./demos/form-control.tsx":h,"./demos/sizes-variants.tsx":v}),Object.assign({"./demos/basic.tsx":x,"./demos/form-control.tsx":C,"./demos/sizes-variants.tsx":T})),k=()=>(0,D.jsx)(u,{id:`textarea`,demos:O})})))()}A();export{k as default};