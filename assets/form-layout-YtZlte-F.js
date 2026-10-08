import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{n as a,t as o}from"./Button-DP6INRXF.js";import{n as s,t as c}from"./Input-CiKMXnCh.js";import{n as l,t as u}from"./ResponsiveGrid-oyyaSgfj.js";import{n as d,t as f}from"./GridItem-zAjLXTh8.js";import{n as p,r as m}from"./FormControl-BajGuK_0.js";import{n as h,t as g}from"./Textarea-BOqkwuLU.js";import{c as _,n as v,s as y,t as b}from"./DocPage-DEXoN4OO.js";var x,S;function C(){return(C=e((()=>{x=`_root_2xvpd_1`,S={root:x}})))()}var w,T;function E(){return(E=e((()=>{i(),l(),C(),w=n(),T=({columns:e,gap:t,rowGap:n,columnGap:i,className:a,children:o,ref:s,...c})=>(0,w.jsx)(`form`,{ref:s,className:r(S.root,a),...c,children:(0,w.jsx)(u,{columns:e,gap:t,rowGap:n,columnGap:i,children:o})})})))()}function D(){return(0,O.jsxs)(T,{columns:{base:1,sm:2},onSubmit:e=>{e.preventDefault(),alert(JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))))},children:[(0,O.jsx)(f,{fullWidth:!0,asChild:!0,children:(0,O.jsx)(p,{label:`Title`,children:(0,O.jsx)(s,{name:`title`,defaultValue:`Draft`,required:!0})})}),(0,O.jsx)(p,{label:`Language`,children:(0,O.jsx)(s,{name:`language`})}),(0,O.jsx)(p,{label:`Category`,children:(0,O.jsx)(s,{name:`category`})}),(0,O.jsx)(f,{fullWidth:!0,asChild:!0,children:(0,O.jsx)(p,{label:`Summary`,children:(0,O.jsx)(h,{name:`summary`,rows:3})})}),(0,O.jsx)(f,{fullWidth:!0,children:(0,O.jsx)(o,{type:`submit`,children:`Save`})})]})}var O;function k(){return(k=e((()=>{a(),m(),E(),d(),c(),g(),O=n()})))()}function A(){return(0,j.jsxs)(T,{columns:3,rowGap:2,columnGap:`24px`,children:[(0,j.jsx)(p,{label:`First name`,children:(0,j.jsx)(s,{name:`first`})}),(0,j.jsx)(p,{label:`Last name`,children:(0,j.jsx)(s,{name:`last`})}),(0,j.jsx)(p,{label:`Nickname`,children:(0,j.jsx)(s,{name:`nickname`})})]})}var j;function M(){return(M=e((()=>{m(),E(),c(),j=n()})))()}var N;function P(){return(P=e((()=>{N=`import {
  Button,
  FormField,
  FormLayout,
  GridItem,
  Input,
  Textarea,
} from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <FormLayout
      columns={{ base: 1, sm: 2 }}
      onSubmit={(event) => {
        event.preventDefault();
        alert(
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
    </FormLayout>
  );
}
`})))()}var F;function I(){return(I=e((()=>{F=`import { FormField, FormLayout, Input } from "@minerva/lib-core";

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
`})))()}var L,R,z;function B(){return(B=e((()=>{k(),M(),P(),I(),t(),v(),_(),L=n(),R=y(Object.assign({"./demos/basic.tsx":D,"./demos/gaps.tsx":A}),Object.assign({"./demos/basic.tsx":N,"./demos/gaps.tsx":F})),z=()=>(0,L.jsx)(b,{id:`form-layout`,demos:R})})))()}B();export{z as default};