import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{s as r}from"./ConfigProvider-DJ6uO8m_-B80Bd_Y7.js";import{Ft as i,Ot as a,Vt as o,dn as s,t as c}from"./dist-dg6ajl7p.js";import{c as l,n as u,s as d,t as f}from"./DocPage-Kqmidh_0.js";function p(){return(0,m.jsxs)(s,{gap:3,style:{maxWidth:240},children:[(0,m.jsx)(r,{children:`First`}),(0,m.jsx)(r,{variant:`secondary`,children:`Second`}),(0,m.jsx)(r,{variant:`secondary`,children:`Third`})]})}var m;function h(){return(h=e((()=>{o(),m=n()})))()}function g(){return(0,_.jsxs)(a,{gap:2,justify:`between`,style:{width:`100%`},children:[(0,_.jsx)(`span`,{children:`Unsaved changes`}),(0,_.jsxs)(a,{gap:2,children:[(0,_.jsx)(r,{variant:`secondary`,children:`Discard`}),(0,_.jsx)(r,{children:`Save`})]})]})}var _;function v(){return(v=e((()=>{o(),_=n()})))()}function y(){return(0,b.jsx)(c,{as:`ul`,direction:`row`,gap:`0.5rem`,wrap:!0,style:{padding:0,maxWidth:260,listStyle:`none`},children:x.map(e=>(0,b.jsx)(`li`,{children:(0,b.jsx)(i,{children:e})},e))})}var b,x;function S(){return(S=e((()=>{o(),b=n(),x=[`Fantasy`,`Mystery`,`Romance`,`Sci-fi`,`History`,`Poetry`]})))()}var C;function w(){return(w=e((()=>{C=`import { Button, VStack } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <VStack gap={3} style={{ maxWidth: 240 }}>
      <Button>First</Button>
      <Button variant="secondary">Second</Button>
      <Button variant="secondary">Third</Button>
    </VStack>
  );
}
`})))()}var T;function E(){return(E=e((()=>{T=`import { Button, HStack } from "@minerva/lib-core";

export default function HorizontalDemo() {
  return (
    <HStack gap={2} justify="between" style={{ width: "100%" }}>
      <span>Unsaved changes</span>
      <HStack gap={2}>
        <Button variant="secondary">Discard</Button>
        <Button>Save</Button>
      </HStack>
    </HStack>
  );
}
`})))()}var D;function O(){return(O=e((()=>{D=`import { Stack, Tag } from "@minerva/lib-core";

const tags = ["Fantasy", "Mystery", "Romance", "Sci-fi", "History", "Poetry"];

export default function WrapDemo() {
  return (
    <Stack
      as="ul"
      direction="row"
      gap="0.5rem"
      wrap
      style={{ padding: 0, maxWidth: 260, listStyle: "none" }}
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </Stack>
  );
}
`})))()}var k,A,j;function M(){return(M=e((()=>{h(),v(),S(),w(),E(),O(),t(),u(),l(),k=n(),A=d(Object.assign({"./demos/basic.tsx":p,"./demos/horizontal.tsx":g,"./demos/wrap.tsx":y}),Object.assign({"./demos/basic.tsx":C,"./demos/horizontal.tsx":T,"./demos/wrap.tsx":D})),j=()=>(0,k.jsx)(f,{id:`stack`,demos:A})})))()}M();export{j as default};