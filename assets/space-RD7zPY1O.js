import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{Ht as i,fn as a,wn as o,zt as s}from"./dist-BWNqkmth.js";import{c,n as l,s as u,t as d}from"./DocPage-DGOZswYH.js";function f(){return(0,p.jsxs)(a,{direction:`vertical`,block:!0,children:[(0,p.jsxs)(a,{align:`center`,children:[m(24),m(48),m(72),(0,p.jsx)(`span`,{children:`align="center"`})]}),(0,p.jsxs)(a,{align:`end`,children:[m(24),m(48),m(72),(0,p.jsx)(`span`,{children:`align="end"`})]}),(0,p.jsxs)(a,{block:!0,justify:`space-between`,children:[(0,p.jsx)(r,{variant:`back`,children:`Back`}),(0,p.jsx)(r,{children:`Next`})]})]})}var p,m;function h(){return(h=e((()=>{i(),p=n(),m=e=>(0,p.jsx)(`div`,{style:{height:e,width:48,borderRadius:4,background:`var(--surface-muted-color)`,border:`1px solid var(--border-color)`}})})))()}function g(){return(0,_.jsxs)(a,{children:[(0,_.jsx)(r,{children:`Save`}),(0,_.jsx)(r,{variant:`secondary`,children:`Cancel`}),(0,_.jsx)(r,{variant:`error`,children:`Delete`})]})}var _;function v(){return(v=e((()=>{i(),_=n()})))()}function y(){return(0,b.jsxs)(a,{direction:`vertical`,block:!0,children:[(0,b.jsxs)(a,{compact:!0,children:[(0,b.jsx)(r,{size:`small`,children:`Compact`}),(0,b.jsx)(r,{size:`small`,children:`gap`}),(0,b.jsx)(r,{size:`small`,children:`halved`})]}),(0,b.jsxs)(a,{block:!0,justify:`center`,style:{background:`var(--surface-muted-color)`,padding:8},children:[(0,b.jsx)(r,{size:`small`,children:`Block`}),(0,b.jsx)(r,{size:`small`,children:`full width`})]})]})}var b;function x(){return(x=e((()=>{i(),b=n()})))()}function S(){return(0,C.jsx)(a,{direction:`vertical`,size:`small`,children:w.map(e=>(0,C.jsxs)(a,{size:e,align:`center`,children:[(0,C.jsx)(`code`,{style:{width:64},children:e}),(0,C.jsx)(r,{size:`small`,children:`One`}),(0,C.jsx)(r,{size:`small`,children:`Two`}),(0,C.jsx)(r,{size:`small`,children:`Three`})]},e))})}var C,w;function T(){return(T=e((()=>{i(),C=n(),w=[`small`,`medium`,`large`,40]})))()}function E(){return(0,D.jsxs)(a,{size:`small`,align:`center`,split:(0,D.jsx)(s,{orientation:`vertical`,length:16,spacing:0}),children:[(0,D.jsx)(`a`,{href:`#docs`,children:`Docs`}),(0,D.jsx)(`a`,{href:`#blog`,children:`Blog`}),(0,D.jsx)(`a`,{href:`#changelog`,children:`Changelog`})]})}var D;function O(){return(O=e((()=>{i(),D=n()})))()}function k(){return(0,A.jsxs)(a,{direction:`vertical`,children:[(0,A.jsx)(r,{children:`First`}),(0,A.jsx)(r,{children:`Second`}),(0,A.jsx)(r,{children:`Third`})]})}var A;function j(){return(j=e((()=>{i(),A=n()})))()}function M(){return(0,N.jsx)(`div`,{style:{maxWidth:360},children:(0,N.jsx)(a,{wrap:!0,size:`small`,children:P.map(e=>(0,N.jsx)(o,{children:e},e))})})}var N,P;function F(){return(F=e((()=>{i(),N=n(),P=[`React`,`TypeScript`,`Vite`,`SCSS`,`Vitest`,`Storybook`,`Web Components`,`Accessibility`,`Theming`,`i18n`]})))()}var I;function L(){return(L=e((()=>{I=`import { Button, Space } from "@minerva/lib-core";

const box = (height: number) => (
  <div
    style={{
      height,
      width: 48,
      borderRadius: 4,
      background: "var(--surface-muted-color)",
      border: "1px solid var(--border-color)",
    }}
  />
);

export default function AlignmentDemo() {
  return (
    <Space direction="vertical" block>
      <Space align="center">
        {box(24)}
        {box(48)}
        {box(72)}
        <span>align=&quot;center&quot;</span>
      </Space>
      <Space align="end">
        {box(24)}
        {box(48)}
        {box(72)}
        <span>align=&quot;end&quot;</span>
      </Space>
      <Space block justify="space-between">
        <Button variant="back">Back</Button>
        <Button>Next</Button>
      </Space>
    </Space>
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { Button, Space } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <Space>
      <Button>Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="error">Delete</Button>
    </Space>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { Button, Space } from "@minerva/lib-core";

export default function CompactAndBlockDemo() {
  return (
    <Space direction="vertical" block>
      <Space compact>
        <Button size="small">Compact</Button>
        <Button size="small">gap</Button>
        <Button size="small">halved</Button>
      </Space>
      <Space
        block
        justify="center"
        style={{ background: "var(--surface-muted-color)", padding: 8 }}
      >
        <Button size="small">Block</Button>
        <Button size="small">full width</Button>
      </Space>
    </Space>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { Button, Space } from "@minerva/lib-core";

const sizes = ["small", "medium", "large", 40] as const;

export default function SizesDemo() {
  return (
    <Space direction="vertical" size="small">
      {sizes.map((size) => (
        <Space key={size} size={size} align="center">
          <code style={{ width: 64 }}>{size}</code>
          <Button size="small">One</Button>
          <Button size="small">Two</Button>
          <Button size="small">Three</Button>
        </Space>
      ))}
    </Space>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { Divider, Space } from "@minerva/lib-core";

export default function SplitDemo() {
  return (
    <Space
      size="small"
      align="center"
      split={<Divider orientation="vertical" length={16} spacing={0} />}
    >
      <a href="#docs">Docs</a>
      <a href="#blog">Blog</a>
      <a href="#changelog">Changelog</a>
    </Space>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { Button, Space } from "@minerva/lib-core";

export default function VerticalDemo() {
  return (
    <Space direction="vertical">
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </Space>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Space, Tag } from "@minerva/lib-core";

const tags = [
  "React",
  "TypeScript",
  "Vite",
  "SCSS",
  "Vitest",
  "Storybook",
  "Web Components",
  "Accessibility",
  "Theming",
  "i18n",
];

export default function WrapDemo() {
  return (
    <div style={{ maxWidth: 360 }}>
      <Space wrap size="small">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Space>
    </div>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{h(),v(),x(),T(),O(),j(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),l(),c(),X=n(),Z=u(Object.assign({"./demos/alignment.tsx":f,"./demos/basic.tsx":g,"./demos/compact-and-block.tsx":y,"./demos/sizes.tsx":S,"./demos/split.tsx":E,"./demos/vertical.tsx":k,"./demos/wrap.tsx":M}),Object.assign({"./demos/alignment.tsx":I,"./demos/basic.tsx":R,"./demos/compact-and-block.tsx":B,"./demos/sizes.tsx":H,"./demos/split.tsx":W,"./demos/vertical.tsx":K,"./demos/wrap.tsx":J})),Q=()=>(0,X.jsx)(d,{id:`space`,demos:Z})})))()}$();export{Q as default};