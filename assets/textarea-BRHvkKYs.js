import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{m as r,n as i,p as a,t as o}from"./DocPage-CVA4UCUb.js";import{a as s,r as c}from"./FormControl-BvD1TVJl.js";import{n as l,t as u}from"./Textarea-Cm6BVL6i.js";function d(){let[e,t]=(0,f.useState)(``);return(0,p.jsx)(l,{"aria-label":`Bio`,rows:4,placeholder:`Tell us about yourself`,value:e,onChange:e=>t(e.target.value)})}var f,p;function m(){return(m=e((()=>{u(),f=t(),p=n()})))()}function h(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{label:`Summary`,helperText:`At most 200 characters.`,required:!0,children:(0,g.jsx)(l,{rows:3,maxLength:200})}),(0,g.jsx)(c,{label:`Notes`,errorMessage:`Notes are too long.`,children:(0,g.jsx)(l,{rows:3,defaultValue:`Lorem ipsum…`})})]})}var g;function _(){return(_=e((()=>{s(),u(),g=n()})))()}function v(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{"aria-label":`Small`,size:`small`,placeholder:`small`}),(0,y.jsx)(l,{"aria-label":`Large`,size:`large`,placeholder:`large`}),(0,y.jsx)(l,{"aria-label":`Filled`,variant:`filled`,placeholder:`filled`}),(0,y.jsx)(l,{"aria-label":`Unstyled`,variant:`unstyled`,placeholder:`unstyled`})]})}var y;function b(){return(b=e((()=>{u(),y=n()})))()}var x;function S(){return(S=e((()=>{x=`import { Textarea } from "minerva-design";
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
`})))()}var C;function w(){return(w=e((()=>{C=`import { FormField, Textarea } from "minerva-design";

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
`})))()}var T;function E(){return(E=e((()=>{T=`import { Textarea } from "minerva-design";

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
`})))()}var D,O,k;function A(){return(A=e((()=>{m(),_(),b(),S(),w(),E(),t(),i(),r(),D=n(),O=a(Object.assign({"./demos/basic.tsx":d,"./demos/form-control.tsx":h,"./demos/sizes-variants.tsx":v}),Object.assign({"./demos/basic.tsx":x,"./demos/form-control.tsx":C,"./demos/sizes-variants.tsx":T})),k=()=>(0,D.jsx)(o,{id:`textarea`,demos:O})})))()}A();export{k as default};