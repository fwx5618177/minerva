import"./rolldown-runtime-CbXtAM7H.js";import{f as e,t}from"./react-vendor-CUe5nroo.js";import{D as n,a as r,f as i,h as a}from"./dist-DAjZNDC0.js";import{i as o,t as s}from"./DocPage-B1L0vw6V.js";var c=t(),l=e=>(0,c.jsx)(`div`,{style:{height:e,width:48,borderRadius:4,background:`var(--surface-muted-color)`,border:`1px solid var(--border-color)`}});function u(){return(0,c.jsxs)(i,{direction:`vertical`,block:!0,children:[(0,c.jsxs)(i,{align:`center`,children:[l(24),l(48),l(72),(0,c.jsx)(`span`,{children:`align="center"`})]}),(0,c.jsxs)(i,{align:`end`,children:[l(24),l(48),l(72),(0,c.jsx)(`span`,{children:`align="end"`})]}),(0,c.jsxs)(i,{block:!0,justify:`space-between`,children:[(0,c.jsx)(r,{variant:`back`,children:`Back`}),(0,c.jsx)(r,{children:`Next`})]})]})}function d(){return(0,c.jsxs)(i,{children:[(0,c.jsx)(r,{children:`Save`}),(0,c.jsx)(r,{variant:`secondary`,children:`Cancel`}),(0,c.jsx)(r,{variant:`error`,children:`Delete`})]})}function f(){return(0,c.jsxs)(i,{direction:`vertical`,block:!0,children:[(0,c.jsxs)(i,{compact:!0,children:[(0,c.jsx)(r,{size:`small`,children:`Compact`}),(0,c.jsx)(r,{size:`small`,children:`gap`}),(0,c.jsx)(r,{size:`small`,children:`halved`})]}),(0,c.jsxs)(i,{block:!0,justify:`center`,style:{background:`var(--surface-muted-color)`,padding:8},children:[(0,c.jsx)(r,{size:`small`,children:`Block`}),(0,c.jsx)(r,{size:`small`,children:`full width`})]})]})}var p=[`small`,`medium`,`large`,40];function m(){return(0,c.jsx)(i,{direction:`vertical`,size:`small`,children:p.map(e=>(0,c.jsxs)(i,{size:e,align:`center`,children:[(0,c.jsx)(`code`,{style:{width:64},children:e}),(0,c.jsx)(r,{size:`small`,children:`One`}),(0,c.jsx)(r,{size:`small`,children:`Two`}),(0,c.jsx)(r,{size:`small`,children:`Three`})]},e))})}function h(){return(0,c.jsxs)(i,{size:`small`,align:`center`,split:(0,c.jsx)(n,{orientation:`vertical`,length:16,spacing:0}),children:[(0,c.jsx)(`a`,{href:`#docs`,children:`Docs`}),(0,c.jsx)(`a`,{href:`#blog`,children:`Blog`}),(0,c.jsx)(`a`,{href:`#changelog`,children:`Changelog`})]})}function g(){return(0,c.jsxs)(i,{direction:`vertical`,children:[(0,c.jsx)(r,{children:`First`}),(0,c.jsx)(r,{children:`Second`}),(0,c.jsx)(r,{children:`Third`})]})}var _=[`React`,`TypeScript`,`Vite`,`SCSS`,`Vitest`,`Storybook`,`Web Components`,`Accessibility`,`Theming`,`i18n`];function v(){return(0,c.jsx)(`div`,{style:{maxWidth:360},children:(0,c.jsx)(i,{wrap:!0,size:`small`,children:_.map(e=>(0,c.jsx)(a,{children:e},e))})})}var y=`import { Button, Space } from "@minerva/lib-core";

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
`,b=`import { Button, Space } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <Space>
      <Button>Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="error">Delete</Button>
    </Space>
  );
}
`,x=`import { Button, Space } from "@minerva/lib-core";

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
`,S=`import { Button, Space } from "@minerva/lib-core";

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
`,C=`import { Divider, Space } from "@minerva/lib-core";

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
`,w=`import { Button, Space } from "@minerva/lib-core";

export default function VerticalDemo() {
  return (
    <Space direction="vertical">
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </Space>
  );
}
`,T=`import { Space, Tag } from "@minerva/lib-core";

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
`;e();var E=o(Object.assign({"./demos/alignment.tsx":u,"./demos/basic.tsx":d,"./demos/compact-and-block.tsx":f,"./demos/sizes.tsx":m,"./demos/split.tsx":h,"./demos/vertical.tsx":g,"./demos/wrap.tsx":v}),Object.assign({"./demos/alignment.tsx":y,"./demos/basic.tsx":b,"./demos/compact-and-block.tsx":x,"./demos/sizes.tsx":S,"./demos/split.tsx":C,"./demos/vertical.tsx":w,"./demos/wrap.tsx":T})),D=()=>(0,c.jsx)(s,{id:`space`,demos:E});export{D as default};