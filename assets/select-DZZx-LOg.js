import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{i as r,r as i}from"./iconBase-BbuKeGtN.js";import{$ as a,Ot as o,Rt as s,at as c,cn as l,g as u,h as d,mn as f,rt as p}from"./dist-DkgrNLMS.js";import{a as m,c as h,n as g,o as _,s as v,t as y}from"./DocPage-Bnv84vTs.js";function b(){let[e,t]=(0,x.useState)(`en`);return(0,S.jsx)(`div`,{style:{width:240},children:(0,S.jsxs)(p,{ariaLabel:`Language`,value:e,onChange:t,children:[(0,S.jsx)(u,{value:`en`,children:`English`}),(0,S.jsx)(u,{value:`zh`,children:`Chinese`}),(0,S.jsx)(u,{value:`fr`,children:`French`})]})})}var x,S;function C(){return(C=e((()=>{x=t(),s(),S=n()})))()}function w(){return(0,T.jsx)(`div`,{style:{width:240},children:(0,T.jsxs)(p,{ariaLabel:`Fruit`,placeholder:`Pick a fruit`,children:[(0,T.jsxs)(a,{children:[(0,T.jsx)(c,{children:`Fruits`}),(0,T.jsx)(u,{value:`apple`,children:`Apple`}),(0,T.jsx)(u,{value:`banana`,children:`Banana`})]}),(0,T.jsx)(d,{}),(0,T.jsxs)(a,{children:[(0,T.jsx)(c,{children:`Out of season`}),(0,T.jsx)(u,{value:`cherry`,disabled:!0,children:`Cherry`})]})]})})}var T;function E(){return(E=e((()=>{s(),T=n()})))()}function D(){return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:12,width:260},children:[(0,O.jsx)(p,{ariaLabel:`Small`,size:`small`,placeholder:`Small`,children:k}),(0,O.jsx)(p,{ariaLabel:`Large`,size:`large`,placeholder:`Large`,children:k}),(0,O.jsx)(p,{ariaLabel:`Invalid`,invalid:!0,placeholder:`Invalid`,children:k}),(0,O.jsx)(p,{ariaLabel:`Disabled`,disabled:!0,placeholder:`Disabled`,children:k}),(0,O.jsxs)(o,{required:!0,children:[(0,O.jsx)(f,{children:`Genre`}),(0,O.jsx)(p,{placeholder:`Pick a genre`,name:`genre`,children:k}),(0,O.jsx)(l,{children:`Shown on the book page`})]})]})}var O,k;function A(){return(A=e((()=>{s(),O=n(),k=(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(u,{value:`a`,children:`Option A`}),(0,O.jsx)(u,{value:`b`,children:`Option B`})]})})))()}var j;function M(){return(M=e((()=>{j=`import { useState } from "react";
import { Select, SelectItem } from "@minerva/lib-core";

export default function BasicDemo() {
  const [language, setLanguage] = useState("en");

  return (
    <div style={{ width: 240 }}>
      <Select ariaLabel="Language" value={language} onChange={setLanguage}>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="zh">Chinese</SelectItem>
        <SelectItem value="fr">French</SelectItem>
      </Select>
    </div>
  );
}
`})))()}var N;function P(){return(P=e((()=>{N=`import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from "@minerva/lib-core";

export default function GroupsDemo() {
  return (
    <div style={{ width: 240 }}>
      <Select ariaLabel="Fruit" placeholder="Pick a fruit">
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
`})))()}var F;function I(){return(I=e((()=>{F=`import {
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
      <Select ariaLabel="Small" size="small" placeholder="Small">
        {items}
      </Select>
      <Select ariaLabel="Large" size="large" placeholder="Large">
        {items}
      </Select>
      <Select ariaLabel="Invalid" invalid placeholder="Invalid">
        {items}
      </Select>
      <Select ariaLabel="Disabled" disabled placeholder="Disabled">
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
`})))()}var L,R,z;function B(){return(B=e((()=>{C(),E(),A(),M(),P(),I(),t(),i(),g(),h(),_(),L=n(),R=v(Object.assign({"./demos/basic.tsx":b,"./demos/groups.tsx":w,"./demos/sizes-and-states.tsx":D}),Object.assign({"./demos/basic.tsx":j,"./demos/groups.tsx":N,"./demos/sizes-and-states.tsx":F})),z=()=>{let{t:e}=r();return(0,L.jsx)(y,{id:`select`,demos:R,children:(0,L.jsxs)(`section`,{className:m.section,"aria-labelledby":`behavior`,children:[(0,L.jsx)(`h2`,{id:`behavior`,children:e(`docs.select.behavior.title`)}),(0,L.jsxs)(`ul`,{className:m.prose,children:[(0,L.jsx)(`li`,{children:e(`docs.select.behavior.keyboard`)}),(0,L.jsx)(`li`,{children:e(`docs.select.behavior.typeahead`)}),(0,L.jsx)(`li`,{children:e(`docs.select.behavior.positioning`)}),(0,L.jsx)(`li`,{children:e(`docs.select.behavior.forms`)}),(0,L.jsx)(`li`,{children:e(`docs.select.behavior.layers`)})]})]})})}})))()}B();export{z as default};