import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Ht as r,Nt as i,j as a}from"./dist-BWNqkmth.js";import{c as o,n as s,s as c,t as l}from"./DocPage-DGOZswYH.js";function u(){let[e,t]=(0,d.useState)(``);return(0,f.jsx)(i,{"aria-label":`Bio`,rows:4,placeholder:`Tell us about yourself`,value:e,onChange:e=>t(e.target.value)})}var d,f;function p(){return(p=e((()=>{r(),d=t(),f=n()})))()}function m(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{label:`Summary`,helperText:`At most 200 characters.`,required:!0,children:(0,h.jsx)(i,{rows:3,maxLength:200})}),(0,h.jsx)(a,{label:`Notes`,errorMessage:`Notes are too long.`,children:(0,h.jsx)(i,{rows:3,defaultValue:`Lorem ipsum…`})})]})}var h;function g(){return(g=e((()=>{r(),h=n()})))()}function _(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{"aria-label":`Small`,size:`small`,placeholder:`small`}),(0,v.jsx)(i,{"aria-label":`Large`,size:`large`,placeholder:`large`}),(0,v.jsx)(i,{"aria-label":`Filled`,variant:`filled`,placeholder:`filled`}),(0,v.jsx)(i,{"aria-label":`Unstyled`,variant:`unstyled`,placeholder:`unstyled`})]})}var v;function y(){return(y=e((()=>{r(),v=n()})))()}var b;function x(){return(x=e((()=>{b=`import { Textarea } from "@minerva/lib-core";
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
`})))()}var S;function C(){return(C=e((()=>{S=`import { FormField, Textarea } from "@minerva/lib-core";

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
`})))()}var w;function T(){return(T=e((()=>{w=`import { Textarea } from "@minerva/lib-core";

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
`})))()}var E,D,O;function k(){return(k=e((()=>{p(),g(),y(),x(),C(),T(),t(),s(),o(),E=n(),D=c(Object.assign({"./demos/basic.tsx":u,"./demos/form-control.tsx":m,"./demos/sizes-variants.tsx":_}),Object.assign({"./demos/basic.tsx":b,"./demos/form-control.tsx":S,"./demos/sizes-variants.tsx":w})),O=()=>(0,E.jsx)(l,{id:`textarea`,demos:D})})))()}k();export{O as default};