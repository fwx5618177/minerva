import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{s as r}from"./ConfigProvider-DJ6uO8m_-B80Bd_Y7.js";import{D as i,T as a,Vt as o,dt as s,vt as c,z as l}from"./dist-dg6ajl7p.js";import{c as u,n as d,s as f,t as p}from"./DocPage-Kqmidh_0.js";function m(){return(0,h.jsxs)(a,{columns:{base:1,sm:2},onSubmit:e=>{e.preventDefault(),alert(JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))))},children:[(0,h.jsx)(c,{fullWidth:!0,asChild:!0,children:(0,h.jsx)(i,{label:`Title`,children:(0,h.jsx)(s,{name:`title`,defaultValue:`Draft`,required:!0})})}),(0,h.jsx)(i,{label:`Language`,children:(0,h.jsx)(s,{name:`language`})}),(0,h.jsx)(i,{label:`Category`,children:(0,h.jsx)(s,{name:`category`})}),(0,h.jsx)(c,{fullWidth:!0,asChild:!0,children:(0,h.jsx)(i,{label:`Summary`,children:(0,h.jsx)(l,{name:`summary`,rows:3})})}),(0,h.jsx)(c,{fullWidth:!0,children:(0,h.jsx)(r,{type:`submit`,children:`Save`})})]})}var h;function g(){return(g=e((()=>{o(),h=n()})))()}function _(){return(0,v.jsxs)(a,{columns:3,rowGap:2,columnGap:`24px`,children:[(0,v.jsx)(i,{label:`First name`,children:(0,v.jsx)(s,{name:`first`})}),(0,v.jsx)(i,{label:`Last name`,children:(0,v.jsx)(s,{name:`last`})}),(0,v.jsx)(i,{label:`Nickname`,children:(0,v.jsx)(s,{name:`nickname`})})]})}var v;function y(){return(y=e((()=>{o(),v=n()})))()}var b;function x(){return(x=e((()=>{b=`import {
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
`})))()}var S;function C(){return(C=e((()=>{S=`import { FormField, FormLayout, Input } from "@minerva/lib-core";

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
`})))()}var w,T,E;function D(){return(D=e((()=>{g(),y(),x(),C(),t(),d(),u(),w=n(),T=f(Object.assign({"./demos/basic.tsx":m,"./demos/gaps.tsx":_}),Object.assign({"./demos/basic.tsx":b,"./demos/gaps.tsx":S})),E=()=>(0,w.jsx)(p,{id:`form-layout`,demos:T})})))()}D();export{E as default};