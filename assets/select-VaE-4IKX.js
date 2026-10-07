import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{a as r,o as i,r as a,t as o}from"./FormControl-D04MZLog.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./Select-cxB34WTG.js";import{Q as p,Z as m}from"./sample-Dya6Jarx.js";import{a as h,c as g,n as _,o as v,s as y,t as b}from"./DocPage-DzKszXiH.js";function x(){let[e,t]=(0,S.useState)(`en`);return(0,C.jsx)(`div`,{style:{width:240},children:(0,C.jsxs)(l,{"aria-label":`Language`,value:e,onChange:t,children:[(0,C.jsx)(f,{value:`en`,children:`English`}),(0,C.jsx)(f,{value:`zh`,children:`Chinese`}),(0,C.jsx)(f,{value:`fr`,children:`French`})]})})}var S,C;function w(){return(w=e((()=>{S=t(),c(),C=n()})))()}function T(){return(0,E.jsx)(`div`,{style:{width:240},children:(0,E.jsxs)(l,{"aria-label":`Fruit`,placeholder:`Pick a fruit`,children:[(0,E.jsxs)(u,{children:[(0,E.jsx)(s,{children:`Fruits`}),(0,E.jsx)(f,{value:`apple`,children:`Apple`}),(0,E.jsx)(f,{value:`banana`,children:`Banana`})]}),(0,E.jsx)(d,{}),(0,E.jsxs)(u,{children:[(0,E.jsx)(s,{children:`Out of season`}),(0,E.jsx)(f,{value:`cherry`,disabled:!0,children:`Cherry`})]})]})})}var E;function D(){return(D=e((()=>{c(),E=n()})))()}function O(){return(0,k.jsxs)(`div`,{style:{display:`grid`,gap:12,width:260},children:[(0,k.jsx)(l,{"aria-label":`Small`,size:`small`,placeholder:`Small`,children:A}),(0,k.jsx)(l,{"aria-label":`Large`,size:`large`,placeholder:`Large`,children:A}),(0,k.jsx)(l,{"aria-label":`Invalid`,invalid:!0,placeholder:`Invalid`,children:A}),(0,k.jsx)(l,{"aria-label":`Disabled`,disabled:!0,placeholder:`Disabled`,children:A}),(0,k.jsxs)(i,{required:!0,children:[(0,k.jsx)(o,{children:`Genre`}),(0,k.jsx)(l,{placeholder:`Pick a genre`,name:`genre`,children:A}),(0,k.jsx)(r,{children:`Shown on the book page`})]})]})}var k,A;function j(){return(j=e((()=>{a(),c(),k=n(),A=(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f,{value:`a`,children:`Option A`}),(0,k.jsx)(f,{value:`b`,children:`Option B`})]})})))()}var M;function N(){return(N=e((()=>{M=`import { useState } from "react";
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
`})))()}var R,z,B;function V(){return(V=e((()=>{w(),D(),j(),N(),F(),L(),t(),m(),_(),g(),v(),R=n(),z=y(Object.assign({"./demos/basic.tsx":x,"./demos/groups.tsx":T,"./demos/sizes-and-states.tsx":O}),Object.assign({"./demos/basic.tsx":M,"./demos/groups.tsx":P,"./demos/sizes-and-states.tsx":I})),B=()=>{let{t:e}=p();return(0,R.jsx)(b,{id:`select`,demos:z,children:(0,R.jsxs)(`section`,{className:h.section,"aria-labelledby":`behavior`,children:[(0,R.jsx)(`h2`,{id:`behavior`,children:e(`docs.select.behavior.title`)}),(0,R.jsxs)(`ul`,{className:h.prose,children:[(0,R.jsx)(`li`,{children:e(`docs.select.behavior.keyboard`)}),(0,R.jsx)(`li`,{children:e(`docs.select.behavior.typeahead`)}),(0,R.jsx)(`li`,{children:e(`docs.select.behavior.positioning`)}),(0,R.jsx)(`li`,{children:e(`docs.select.behavior.forms`)}),(0,R.jsx)(`li`,{children:e(`docs.select.behavior.layers`)})]})]})})}})))()}V();export{B as default};