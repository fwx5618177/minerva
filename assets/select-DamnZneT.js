import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Dn as r,St as i,Tn as a,Vt as o,_n as s,_t as c,nt as l,st as u,y as d}from"./dist-dg6ajl7p.js";import{c as f,n as p,s as m,t as h}from"./DocPage-Kqmidh_0.js";function g(){let[e,t]=(0,_.useState)(`en`);return(0,v.jsx)(`div`,{style:{width:240},children:(0,v.jsxs)(c,{ariaLabel:`Language`,value:e,onChange:t,children:[(0,v.jsx)(s,{value:`en`,children:`English`}),(0,v.jsx)(s,{value:`zh`,children:`Chinese`}),(0,v.jsx)(s,{value:`fr`,children:`French`})]})})}var _,v;function y(){return(y=e((()=>{_=t(),o(),v=n()})))()}function b(){return(0,x.jsx)(`div`,{style:{width:240},children:(0,x.jsxs)(c,{ariaLabel:`Fruit`,placeholder:`Pick a fruit`,children:[(0,x.jsxs)(r,{children:[(0,x.jsx)(i,{children:`Fruits`}),(0,x.jsx)(s,{value:`apple`,children:`Apple`}),(0,x.jsx)(s,{value:`banana`,children:`Banana`})]}),(0,x.jsx)(a,{}),(0,x.jsxs)(r,{children:[(0,x.jsx)(i,{children:`Out of season`}),(0,x.jsx)(s,{value:`cherry`,disabled:!0,children:`Cherry`})]})]})})}var x;function S(){return(S=e((()=>{o(),x=n()})))()}function C(){return(0,w.jsxs)(`div`,{style:{display:`grid`,gap:12,width:260},children:[(0,w.jsx)(c,{ariaLabel:`Small`,size:`small`,placeholder:`Small`,children:T}),(0,w.jsx)(c,{ariaLabel:`Large`,size:`large`,placeholder:`Large`,children:T}),(0,w.jsx)(c,{ariaLabel:`Invalid`,invalid:!0,placeholder:`Invalid`,children:T}),(0,w.jsx)(c,{ariaLabel:`Disabled`,disabled:!0,placeholder:`Disabled`,children:T}),(0,w.jsxs)(l,{required:!0,children:[(0,w.jsx)(d,{children:`Genre`}),(0,w.jsx)(c,{placeholder:`Pick a genre`,name:`genre`,children:T}),(0,w.jsx)(u,{children:`Shown on the book page`})]})]})}var w,T;function E(){return(E=e((()=>{o(),w=n(),T=(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{value:`a`,children:`Option A`}),(0,w.jsx)(s,{value:`b`,children:`Option B`})]})})))()}var D;function O(){return(O=e((()=>{D=`import { useState } from "react";
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
`})))()}var k;function A(){return(A=e((()=>{k=`import {
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
`})))()}var j;function M(){return(M=e((()=>{j=`import {
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
`})))()}var N,P,F;function I(){return(I=e((()=>{y(),S(),E(),O(),A(),M(),t(),p(),f(),N=n(),P=m(Object.assign({"./demos/basic.tsx":g,"./demos/groups.tsx":b,"./demos/sizes-and-states.tsx":C}),Object.assign({"./demos/basic.tsx":D,"./demos/groups.tsx":k,"./demos/sizes-and-states.tsx":j})),F=()=>(0,N.jsx)(h,{id:`select`,demos:P})})))()}I();export{F as default};