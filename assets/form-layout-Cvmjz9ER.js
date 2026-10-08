import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{t as a}from"./stylingHooks-GjssfG7q.js";import{n as o,t as s}from"./Button-BfJfx3BZ.js";import{n as c,t as l}from"./Input-f1MrbxB_.js";import{n as u,t as d}from"./ResponsiveGrid-CUcU7KVT.js";import{n as f,t as p}from"./GridItem-DFSCrZpb.js";import{a as m,r as h}from"./FormControl-s2LFIZKG.js";import{n as g,t as _}from"./Textarea-B1tNFzIA.js";import{m as v,n as y,p as b,t as x}from"./DocPage-BUvZl8IZ.js";var S,C;function w(){return(w=e((()=>{S=`_root_2xvpd_1`,C={root:S}})))()}var T,E;function D(){return(D=e((()=>{i(),d(),w(),T=n(),E=({columns:e,gap:t,rowGap:n,columnGap:i,className:o,children:s,ref:c,...l})=>(0,T.jsx)(`form`,{ref:c,className:r(C.root,o),...l,...a(`form-layout`,`root`),children:(0,T.jsx)(u,{columns:e,gap:t,rowGap:n,columnGap:i,children:s})})})))()}function O(){return(0,k.jsxs)(E,{columns:{base:1,sm:2},onSubmit:e=>{e.preventDefault(),alert(JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))))},children:[(0,k.jsx)(p,{fullWidth:!0,asChild:!0,children:(0,k.jsx)(h,{label:`Title`,children:(0,k.jsx)(c,{name:`title`,defaultValue:`Draft`,required:!0})})}),(0,k.jsx)(h,{label:`Language`,children:(0,k.jsx)(c,{name:`language`})}),(0,k.jsx)(h,{label:`Category`,children:(0,k.jsx)(c,{name:`category`})}),(0,k.jsx)(p,{fullWidth:!0,asChild:!0,children:(0,k.jsx)(h,{label:`Summary`,children:(0,k.jsx)(g,{name:`summary`,rows:3})})}),(0,k.jsx)(p,{fullWidth:!0,children:(0,k.jsx)(o,{type:`submit`,children:`Save`})})]})}var k;function A(){return(A=e((()=>{s(),m(),D(),f(),l(),_(),k=n()})))()}function j(){return(0,M.jsxs)(E,{columns:3,rowGap:2,columnGap:`24px`,children:[(0,M.jsx)(h,{label:`First name`,children:(0,M.jsx)(c,{name:`first`})}),(0,M.jsx)(h,{label:`Last name`,children:(0,M.jsx)(c,{name:`last`})}),(0,M.jsx)(h,{label:`Nickname`,children:(0,M.jsx)(c,{name:`nickname`})})]})}var M;function N(){return(N=e((()=>{m(),D(),l(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import {
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
`})))()}var I;function L(){return(L=e((()=>{I=`import { FormField, FormLayout, Input } from "@minerva/lib-core";

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
`})))()}var R,z,B;function V(){return(V=e((()=>{A(),N(),F(),L(),t(),y(),v(),R=n(),z=b(Object.assign({"./demos/basic.tsx":O,"./demos/gaps.tsx":j}),Object.assign({"./demos/basic.tsx":P,"./demos/gaps.tsx":I})),B=()=>(0,R.jsx)(x,{id:`form-layout`,demos:z})})))()}V();export{B as default};