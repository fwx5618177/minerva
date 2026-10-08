import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{nt as r,rt as i}from"./io5-DyQ46fG2.js";import{a,o,r as s,t as c}from"./FormControl-BajGuK_0.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./Select-L8kT1roh.js";import{c as h,i as g,n as _,r as v,s as y,t as b}from"./DocPage-DEXoN4OO.js";function x(){let[e,t]=(0,S.useState)(`en`);return(0,C.jsx)(`div`,{style:{width:240},children:(0,C.jsxs)(d,{"aria-label":`Language`,value:e,onChange:t,children:[(0,C.jsx)(u,{value:`en`,children:`English`}),(0,C.jsx)(u,{value:`zh`,children:`Chinese`}),(0,C.jsx)(u,{value:`fr`,children:`French`})]})})}var S,C;function w(){return(w=e((()=>{S=t(),p(),C=n()})))()}function T(){return(0,E.jsx)(`div`,{style:{width:240},children:(0,E.jsxs)(d,{"aria-label":`Fruit`,placeholder:`Pick a fruit`,children:[(0,E.jsxs)(f,{children:[(0,E.jsx)(l,{children:`Fruits`}),(0,E.jsx)(u,{value:`apple`,children:`Apple`}),(0,E.jsx)(u,{value:`banana`,children:`Banana`})]}),(0,E.jsx)(m,{}),(0,E.jsxs)(f,{children:[(0,E.jsx)(l,{children:`Out of season`}),(0,E.jsx)(u,{value:`cherry`,disabled:!0,children:`Cherry`})]})]})})}var E;function D(){return(D=e((()=>{p(),E=n()})))()}function O(){return(0,k.jsxs)(`div`,{style:{display:`grid`,gap:12,width:260},children:[(0,k.jsx)(d,{"aria-label":`Small`,size:`small`,placeholder:`Small`,children:A}),(0,k.jsx)(d,{"aria-label":`Large`,size:`large`,placeholder:`Large`,children:A}),(0,k.jsx)(d,{"aria-label":`Invalid`,invalid:!0,placeholder:`Invalid`,children:A}),(0,k.jsx)(d,{"aria-label":`Disabled`,disabled:!0,placeholder:`Disabled`,children:A}),(0,k.jsxs)(o,{required:!0,children:[(0,k.jsx)(c,{children:`Genre`}),(0,k.jsx)(d,{placeholder:`Pick a genre`,name:`genre`,children:A}),(0,k.jsx)(a,{children:`Shown on the book page`})]})]})}var k,A;function j(){return(j=e((()=>{s(),p(),k=n(),A=(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u,{value:`a`,children:`Option A`}),(0,k.jsx)(u,{value:`b`,children:`Option B`})]})})))()}var M;function N(){return(N=e((()=>{M=`import { useState } from "react";
import { Select, SelectItem } from "@minerva/lib-core";

export default function BasicDemo() {
  const [language, setLanguage] = useState("en");

  return (
    <div style={{ width: 240 }}>
      <Select aria-label="Language" value={language} onChange={setLanguage}>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="zh">Chinese</SelectItem>
        <SelectItem value="fr">French</SelectItem>
      </Select>
    </div>
  );
}
`})))()}var P;function F(){return(F=e((()=>{P=`import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from "@minerva/lib-core";

export default function GroupsDemo() {
  return (
    <div style={{ width: 240 }}>
      <Select aria-label="Fruit" placeholder="Pick a fruit">
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Out of season</SelectLabel>
          <SelectItem value="cherry" disabled>
            Cherry
          </SelectItem>
        </SelectGroup>
      </Select>
    </div>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select,
  SelectItem,
} from "@minerva/lib-core";

const items = (
  <>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </>
);

export default function SizesAndStatesDemo() {
  return (
    <div style={{ display: "grid", gap: 12, width: 260 }}>
      <Select aria-label="Small" size="small" placeholder="Small">
        {items}
      </Select>
      <Select aria-label="Large" size="large" placeholder="Large">
        {items}
      </Select>
      <Select aria-label="Invalid" invalid placeholder="Invalid">
        {items}
      </Select>
      <Select aria-label="Disabled" disabled placeholder="Disabled">
        {items}
      </Select>
      <FormControl required>
        <FormLabel>Genre</FormLabel>
        <Select placeholder="Pick a genre" name="genre">
          {items}
        </Select>
        <FormHelperText>Shown on the book page</FormHelperText>
      </FormControl>
    </div>
  );
}
`})))()}var R,z,B;function V(){return(V=e((()=>{w(),D(),j(),N(),F(),L(),t(),r(),_(),h(),g(),R=n(),z=y(Object.assign({"./demos/basic.tsx":x,"./demos/groups.tsx":T,"./demos/sizes-and-states.tsx":O}),Object.assign({"./demos/basic.tsx":M,"./demos/groups.tsx":P,"./demos/sizes-and-states.tsx":I})),B=()=>{let{t:e}=i();return(0,R.jsx)(b,{id:`select`,demos:z,children:(0,R.jsxs)(`section`,{className:v.section,"aria-labelledby":`behavior`,children:[(0,R.jsx)(`h2`,{id:`behavior`,children:e(`docs.select.behavior.title`)}),(0,R.jsxs)(`ul`,{className:v.prose,children:[(0,R.jsx)(`li`,{children:e(`docs.select.behavior.keyboard`)}),(0,R.jsx)(`li`,{children:e(`docs.select.behavior.typeahead`)}),(0,R.jsx)(`li`,{children:e(`docs.select.behavior.positioning`)}),(0,R.jsx)(`li`,{children:e(`docs.select.behavior.forms`)}),(0,R.jsx)(`li`,{children:e(`docs.select.behavior.layers`)})]})]})})}})))()}V();export{B as default};