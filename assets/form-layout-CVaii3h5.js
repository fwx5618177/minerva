import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{o as r,vt as i}from"./minerva-web-components-ByJsjP0z.js";import{m as a,n as o,p as s,t as c}from"./DocPage-BIGX2Gcv.js";import{t as l}from"./stylingHooks-GjssfG7q.js";import{n as u,t as d}from"./Button-CMVP9rb9.js";import{n as f,t as p}from"./Input-CqCrBpST.js";import{n as m,t as h}from"./Alert-XtJJBuNr.js";import{n as g,t as _}from"./ResponsiveGrid-DBoY2g7O.js";import{n as v,t as y}from"./GridItem-DEGGYRhL.js";import{a as b,r as x}from"./FormControl-CJZ6FbrF.js";import{n as S,t as C}from"./Textarea-Ddksf-_o.js";var w,T;function E(){return(E=e((()=>{w=`_root_2xvpd_1`,T={root:w}})))()}var D,O;function k(){return(k=e((()=>{i(),_(),E(),D=n(),O=({columns:e,gap:t,rowGap:n,columnGap:i,className:a,children:o,ref:s,...c})=>(0,D.jsx)(`form`,{ref:s,className:r(T.root,a),...c,...l(`form-layout`,`root`),children:(0,D.jsx)(g,{columns:e,gap:t,rowGap:n,columnGap:i,children:o})})})))()}function A(){let[e,t]=(0,j.useState)(null);return(0,M.jsxs)(O,{columns:{base:1,sm:2},onSubmit:e=>{e.preventDefault(),t(JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))))},children:[(0,M.jsx)(y,{fullWidth:!0,asChild:!0,children:(0,M.jsx)(x,{label:`Title`,children:(0,M.jsx)(f,{name:`title`,defaultValue:`Draft`,required:!0})})}),(0,M.jsx)(x,{label:`Language`,children:(0,M.jsx)(f,{name:`language`})}),(0,M.jsx)(x,{label:`Category`,children:(0,M.jsx)(f,{name:`category`})}),(0,M.jsx)(y,{fullWidth:!0,asChild:!0,children:(0,M.jsx)(x,{label:`Summary`,children:(0,M.jsx)(S,{name:`summary`,rows:3})})}),(0,M.jsx)(y,{fullWidth:!0,children:(0,M.jsx)(u,{type:`submit`,children:`Save`})}),e&&(0,M.jsx)(y,{fullWidth:!0,children:(0,M.jsx)(h,{color:`success`,title:`Saved`,children:(0,M.jsx)(`code`,{children:e})})})]})}var j,M;function N(){return(N=e((()=>{j=t(),m(),d(),b(),k(),v(),p(),C(),M=n()})))()}function P(){return(0,F.jsxs)(O,{columns:3,rowGap:2,columnGap:`24px`,children:[(0,F.jsx)(x,{label:`First name`,children:(0,F.jsx)(f,{name:`first`})}),(0,F.jsx)(x,{label:`Last name`,children:(0,F.jsx)(f,{name:`last`})}),(0,F.jsx)(x,{label:`Nickname`,children:(0,F.jsx)(f,{name:`nickname`})})]})}var F;function I(){return(I=e((()=>{b(),k(),p(),F=n()})))()}var L;function R(){return(R=e((()=>{L=`import { useState } from "react";
import {
  Alert,
  Button,
  FormField,
  FormLayout,
  GridItem,
  Input,
  Textarea,
} from "minerva-design";

export default function BasicDemo() {
  const [saved, setSaved] = useState<string | null>(null);
  return (
    <FormLayout
      columns={{ base: 1, sm: 2 }}
      onSubmit={(event) => {
        event.preventDefault();
        setSaved(
          JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),
        );
      }}
    >
      <GridItem fullWidth asChild>
        <FormField label="Title">
          <Input name="title" defaultValue="Draft" required />
        </FormField>
      </GridItem>
      <FormField label="Language">
        <Input name="language" />
      </FormField>
      <FormField label="Category">
        <Input name="category" />
      </FormField>
      <GridItem fullWidth asChild>
        <FormField label="Summary">
          <Textarea name="summary" rows={3} />
        </FormField>
      </GridItem>
      <GridItem fullWidth>
        <Button type="submit">Save</Button>
      </GridItem>
      {saved && (
        <GridItem fullWidth>
          <Alert color="success" title="Saved">
            <code>{saved}</code>
          </Alert>
        </GridItem>
      )}
    </FormLayout>
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { FormField, FormLayout, Input } from "minerva-design";

export default function GapsDemo() {
  return (
    <FormLayout columns={3} rowGap={2} columnGap="24px">
      <FormField label="First name">
        <Input name="first" />
      </FormField>
      <FormField label="Last name">
        <Input name="last" />
      </FormField>
      <FormField label="Nickname">
        <Input name="nickname" />
      </FormField>
    </FormLayout>
  );
}
`})))()}var V,H,U;function W(){return(W=e((()=>{N(),I(),R(),B(),t(),o(),a(),V=n(),H=s(Object.assign({"./demos/basic.tsx":A,"./demos/gaps.tsx":P}),Object.assign({"./demos/basic.tsx":L,"./demos/gaps.tsx":z})),U=()=>(0,V.jsx)(c,{id:`form-layout`,demos:H})})))()}W();export{U as default};