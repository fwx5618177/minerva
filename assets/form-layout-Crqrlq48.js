import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{O as r,c as i,k as a,n as o,s,t as c}from"./DocPage-HgWiqH91.js";import{n as l,t as u}from"./Button-CwqLLYn6.js";import{n as d,t as f}from"./Input-Bol6v7xp.js";import{n as p,t as m}from"./ResponsiveGrid-CdGHq5pO.js";import{n as h,t as g}from"./GridItem-DGZuw3p4.js";import{n as _,r as v}from"./FormControl-DSGbEYF3.js";import{n as y,t as b}from"./Textarea-bk223wtZ.js";var x,S;function C(){return(C=e((()=>{x=`_root_2xvpd_1`,S={root:x}})))()}var w,T;function E(){return(E=e((()=>{r(),p(),C(),w=n(),T=({columns:e,gap:t,rowGap:n,columnGap:r,className:i,children:o,ref:s,...c})=>(0,w.jsx)(`form`,{ref:s,className:a(S.root,i),...c,children:(0,w.jsx)(m,{columns:e,gap:t,rowGap:n,columnGap:r,children:o})})})))()}function D(){return(0,O.jsxs)(T,{columns:{base:1,sm:2},onSubmit:e=>{e.preventDefault(),alert(JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))))},children:[(0,O.jsx)(g,{fullWidth:!0,asChild:!0,children:(0,O.jsx)(_,{label:`Title`,children:(0,O.jsx)(d,{name:`title`,defaultValue:`Draft`,required:!0})})}),(0,O.jsx)(_,{label:`Language`,children:(0,O.jsx)(d,{name:`language`})}),(0,O.jsx)(_,{label:`Category`,children:(0,O.jsx)(d,{name:`category`})}),(0,O.jsx)(g,{fullWidth:!0,asChild:!0,children:(0,O.jsx)(_,{label:`Summary`,children:(0,O.jsx)(y,{name:`summary`,rows:3})})}),(0,O.jsx)(g,{fullWidth:!0,children:(0,O.jsx)(u,{type:`submit`,children:`Save`})})]})}var O;function k(){return(k=e((()=>{l(),v(),E(),h(),f(),b(),O=n()})))()}function A(){return(0,j.jsxs)(T,{columns:3,rowGap:2,columnGap:`24px`,children:[(0,j.jsx)(_,{label:`First name`,children:(0,j.jsx)(d,{name:`first`})}),(0,j.jsx)(_,{label:`Last name`,children:(0,j.jsx)(d,{name:`last`})}),(0,j.jsx)(_,{label:`Nickname`,children:(0,j.jsx)(d,{name:`nickname`})})]})}var j;function M(){return(M=e((()=>{v(),E(),f(),j=n()})))()}var N;function P(){return(P=e((()=>{N=`import {
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
`})))()}var L,R,z;function B(){return(B=e((()=>{k(),M(),P(),I(),t(),o(),i(),L=n(),R=s(Object.assign({"./demos/basic.tsx":D,"./demos/gaps.tsx":A}),Object.assign({"./demos/basic.tsx":N,"./demos/gaps.tsx":F})),z=()=>(0,L.jsx)(c,{id:`form-layout`,demos:R})})))()}B();export{z as default};