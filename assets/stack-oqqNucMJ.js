import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{B as i,D as a,I as o,Rt as s,_ as c,hn as l}from"./dist-DkgrNLMS.js";import{c as u,n as d,s as f,t as p}from"./DocPage-Bnv84vTs.js";function m(){let[e,t]=(0,h.useState)(`Week`);return(0,g.jsx)(c,{attached:!0,"aria-label":`Calendar view`,children:_.map(n=>(0,g.jsx)(r,{size:`small`,color:n===e?`primary`:`neutral`,variant:n===e?`solid`:`outline`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))})}var h,g,_;function v(){return(v=e((()=>{h=t(),s(),g=n(),_=[`Day`,`Week`,`Month`]})))()}function y(){return(0,b.jsxs)(a,{gap:3,style:{maxWidth:240},children:[(0,b.jsx)(r,{children:`First`}),(0,b.jsx)(r,{color:`neutral`,variant:`outline`,children:`Second`}),(0,b.jsx)(r,{color:`neutral`,variant:`outline`,children:`Third`})]})}var b;function x(){return(x=e((()=>{s(),b=n()})))()}function S(){return(0,C.jsxs)(a,{gap:4,align:`start`,children:[w.map(e=>(0,C.jsxs)(c,{gap:e,children:[(0,C.jsx)(`code`,{style:{minWidth:120},children:`gap={${e}}`}),(0,C.jsx)(r,{size:`small`,children:`One`}),(0,C.jsx)(r,{size:`small`,children:`Two`}),(0,C.jsx)(r,{size:`small`,children:`Three`})]},e)),(0,C.jsxs)(c,{gap:`12px`,children:[(0,C.jsx)(`code`,{style:{minWidth:120},children:`gap="12px"`}),(0,C.jsx)(r,{size:`small`,children:`One`}),(0,C.jsx)(r,{size:`small`,children:`Two`})]})]})}var C,w;function T(){return(T=e((()=>{s(),C=n(),w=[2,4,6]})))()}function E(){return(0,D.jsxs)(c,{gap:2,justify:`between`,style:{width:`100%`},children:[(0,D.jsx)(`span`,{children:`Unsaved changes`}),(0,D.jsxs)(c,{gap:2,children:[(0,D.jsx)(r,{color:`neutral`,variant:`outline`,children:`Discard`}),(0,D.jsx)(r,{children:`Save`})]})]})}var D;function O(){return(O=e((()=>{s(),D=n()})))()}function k(){return(0,A.jsxs)(c,{as:`nav`,"aria-label":`Resources`,gap:2,separator:(0,A.jsx)(i,{orientation:`vertical`,length:16,spacing:0}),children:[(0,A.jsx)(`a`,{href:`#docs`,children:`Docs`}),(0,A.jsx)(`a`,{href:`#blog`,children:`Blog`}),(0,A.jsx)(`a`,{href:`#changelog`,children:`Changelog`})]})}var A;function j(){return(j=e((()=>{s(),A=n()})))()}function M(){return(0,N.jsx)(o,{as:`ul`,direction:`row`,gap:`0.5rem`,wrap:!0,style:{padding:0,maxWidth:260,listStyle:`none`},children:P.map(e=>(0,N.jsx)(`li`,{children:(0,N.jsx)(l,{children:e})},e))})}var N,P;function F(){return(F=e((()=>{s(),N=n(),P=[`Fantasy`,`Mystery`,`Romance`,`Sci-fi`,`History`,`Poetry`]})))()}var I;function L(){return(L=e((()=>{I=`import { useState } from "react";
import { Button, HStack } from "@minerva/lib-core";

const views = ["Day", "Week", "Month"] as const;

export default function AttachedDemo() {
  const [view, setView] = useState<(typeof views)[number]>("Week");
  return (
    <HStack attached aria-label="Calendar view">
      {views.map((name) => (
        <Button
          key={name}
          size="small"
          color={name === view ? "primary" : "neutral"}
          variant={name === view ? "solid" : "outline"}
          aria-pressed={name === view}
          onClick={() => setView(name)}
        >
          {name}
        </Button>
      ))}
    </HStack>
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { Button, VStack } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <VStack gap={3} style={{ maxWidth: 240 }}>
      <Button>First</Button>
      <Button color="neutral" variant="outline">
        Second
      </Button>
      <Button color="neutral" variant="outline">
        Third
      </Button>
    </VStack>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { Button, HStack, VStack } from "@minerva/lib-core";

const gaps = [2, 4, 6] as const;

export default function GapDemo() {
  return (
    <VStack gap={4} align="start">
      {gaps.map((gap) => (
        <HStack key={gap} gap={gap}>
          <code style={{ minWidth: 120 }}>{\`gap={\${gap}}\`}</code>
          <Button size="small">One</Button>
          <Button size="small">Two</Button>
          <Button size="small">Three</Button>
        </HStack>
      ))}
      <HStack gap="12px">
        <code style={{ minWidth: 120 }}>gap=&quot;12px&quot;</code>
        <Button size="small">One</Button>
        <Button size="small">Two</Button>
      </HStack>
    </VStack>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { Button, HStack } from "@minerva/lib-core";

export default function HorizontalDemo() {
  return (
    <HStack gap={2} justify="between" style={{ width: "100%" }}>
      <span>Unsaved changes</span>
      <HStack gap={2}>
        <Button color="neutral" variant="outline">
          Discard
        </Button>
        <Button>Save</Button>
      </HStack>
    </HStack>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { Divider, HStack } from "@minerva/lib-core";

export default function SeparatorDemo() {
  return (
    <HStack
      as="nav"
      aria-label="Resources"
      gap={2}
      separator={<Divider orientation="vertical" length={16} spacing={0} />}
    >
      <a href="#docs">Docs</a>
      <a href="#blog">Blog</a>
      <a href="#changelog">Changelog</a>
    </HStack>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { Stack, Tag } from "@minerva/lib-core";

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
`})))()}var J,Y,X;function Z(){return(Z=e((()=>{v(),x(),T(),O(),j(),F(),L(),z(),V(),U(),G(),q(),t(),d(),u(),J=n(),Y=f(Object.assign({"./demos/attached.tsx":m,"./demos/basic.tsx":y,"./demos/gap.tsx":S,"./demos/horizontal.tsx":E,"./demos/separator.tsx":k,"./demos/wrap.tsx":M}),Object.assign({"./demos/attached.tsx":I,"./demos/basic.tsx":R,"./demos/gap.tsx":B,"./demos/horizontal.tsx":H,"./demos/separator.tsx":W,"./demos/wrap.tsx":K})),X=()=>(0,J.jsx)(p,{id:`stack`,demos:Y})})))()}Z();export{X as default};