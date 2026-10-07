import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{c as r,n as i,s as a,t as o}from"./DocPage-HgWiqH91.js";import{n as s,t as c}from"./Button-CwqLLYn6.js";import{n as l,t as u}from"./Divider-CIZ2zJ9I.js";import{n as d,t as f}from"./Tag-Djm3dntE.js";import{i as p,n as m,r as h,t as g}from"./Stack-DLvvJ-CJ.js";function _(){let[e,t]=(0,v.useState)(`Week`);return(0,y.jsx)(g,{attached:!0,"aria-label":`Calendar view`,children:b.map(n=>(0,y.jsx)(c,{size:`small`,color:n===e?`primary`:`neutral`,variant:n===e?`solid`:`outline`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))})}var v,y,b;function x(){return(x=e((()=>{v=t(),s(),m(),y=n(),b=[`Day`,`Week`,`Month`]})))()}function S(){return(0,C.jsxs)(h,{gap:3,style:{maxWidth:240},children:[(0,C.jsx)(c,{children:`First`}),(0,C.jsx)(c,{color:`neutral`,variant:`outline`,children:`Second`}),(0,C.jsx)(c,{color:`neutral`,variant:`outline`,children:`Third`})]})}var C;function w(){return(w=e((()=>{s(),m(),C=n()})))()}function ee(){return(0,T.jsxs)(h,{gap:4,align:`start`,children:[E.map(e=>(0,T.jsxs)(g,{gap:e,children:[(0,T.jsx)(`code`,{style:{minWidth:120},children:`gap={${e}}`}),(0,T.jsx)(c,{size:`small`,children:`One`}),(0,T.jsx)(c,{size:`small`,children:`Two`}),(0,T.jsx)(c,{size:`small`,children:`Three`})]},e)),(0,T.jsxs)(g,{gap:`12px`,children:[(0,T.jsx)(`code`,{style:{minWidth:120},children:`gap="12px"`}),(0,T.jsx)(c,{size:`small`,children:`One`}),(0,T.jsx)(c,{size:`small`,children:`Two`})]})]})}var T,E;function D(){return(D=e((()=>{s(),m(),T=n(),E=[2,4,6]})))()}function O(){return(0,k.jsxs)(g,{gap:2,justify:`between`,style:{width:`100%`},children:[(0,k.jsx)(`span`,{children:`Unsaved changes`}),(0,k.jsxs)(g,{gap:2,children:[(0,k.jsx)(c,{color:`neutral`,variant:`outline`,children:`Discard`}),(0,k.jsx)(c,{children:`Save`})]})]})}var k;function A(){return(A=e((()=>{s(),m(),k=n()})))()}function j(){return(0,M.jsxs)(g,{as:`nav`,"aria-label":`Resources`,gap:2,separator:(0,M.jsx)(u,{orientation:`vertical`,length:16,spacing:0}),children:[(0,M.jsx)(`a`,{href:`#docs`,children:`Docs`}),(0,M.jsx)(`a`,{href:`#blog`,children:`Blog`}),(0,M.jsx)(`a`,{href:`#changelog`,children:`Changelog`})]})}var M;function N(){return(N=e((()=>{l(),m(),M=n()})))()}function P(){return(0,F.jsx)(p,{as:`ul`,direction:`row`,gap:`0.5rem`,wrap:!0,style:{padding:0,maxWidth:260,listStyle:`none`},children:I.map(e=>(0,F.jsx)(`li`,{children:(0,F.jsx)(d,{children:e})},e))})}var F,I;function L(){return(L=e((()=>{m(),f(),F=n(),I=[`Fantasy`,`Mystery`,`Romance`,`Sci-fi`,`History`,`Poetry`]})))()}var R;function z(){return(z=e((()=>{R=`import { useState } from "react";
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
`})))()}var B;function V(){return(V=e((()=>{B=`import { Button, VStack } from "@minerva/lib-core";

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
`})))()}var H;function U(){return(U=e((()=>{H=`import { Button, HStack, VStack } from "@minerva/lib-core";

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
`})))()}var W;function G(){return(G=e((()=>{W=`import { Button, HStack } from "@minerva/lib-core";

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
`})))()}var K;function q(){return(q=e((()=>{K=`import { Divider, HStack } from "@minerva/lib-core";

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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Stack, Tag } from "@minerva/lib-core";

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
`})))()}var X,Z,Q;function $(){return($=e((()=>{x(),w(),D(),A(),N(),L(),z(),V(),U(),G(),q(),Y(),t(),i(),r(),X=n(),Z=a(Object.assign({"./demos/attached.tsx":_,"./demos/basic.tsx":S,"./demos/gap.tsx":ee,"./demos/horizontal.tsx":O,"./demos/separator.tsx":j,"./demos/wrap.tsx":P}),Object.assign({"./demos/attached.tsx":R,"./demos/basic.tsx":B,"./demos/gap.tsx":H,"./demos/horizontal.tsx":W,"./demos/separator.tsx":K,"./demos/wrap.tsx":J})),Q=()=>(0,X.jsx)(o,{id:`stack`,demos:Z})})))()}$();export{Q as default};