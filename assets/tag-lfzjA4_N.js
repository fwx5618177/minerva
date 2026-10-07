import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{C as r,Q as i,S as a,q as o,x as s}from"./ConfigProvider-BGZRMKW0-zZcUK1pN.js";import{i as ee,r as te}from"./iconBase-DGdXj6CY.js";import{hn as c}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d as l}from"./dist-CcA3uxH5.js";import{a as u,c as ne,n as d,o as re,s as ie,t as ae}from"./DocPage-Dm1vTl9w.js";function f(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{children:`Default`}),(0,p.jsx)(c,{variant:`primary`,children:`Primary`}),(0,p.jsx)(c,{variant:`success`,children:`Success`}),(0,p.jsx)(c,{variant:`warning`,children:`Warning`}),(0,p.jsx)(c,{variant:`error`,children:`Error`}),(0,p.jsx)(c,{variant:`info`,children:`Info`})]})}var p;function m(){return(m=e((()=>{l(),p=n()})))()}function oe(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{bordered:!0,variant:`primary`,children:`Bordered`}),(0,h.jsx)(c,{elevation:!0,variant:`success`,children:`Elevation`}),(0,h.jsx)(c,{bordered:!0,elevation:!0,children:`Both`})]})}var h;function g(){return(g=e((()=>{l(),h=n()})))()}function se(){let[e,t]=(0,_.useState)([`Frontend`]),n=e=>t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:y.map(t=>(0,v.jsx)(c,{clickable:!0,pressed:e.includes(t),variant:e.includes(t)?`primary`:`default`,bordered:!0,onClick:()=>n(t),children:t},t))}),(0,v.jsxs)(`p`,{children:[`Selected: `,e.join(`, `)||`none`]})]})}var _,v,y;function b(){return(b=e((()=>{_=t(),l(),v=n(),y=[`Design`,`Frontend`,`Backend`,`Testing`,`DevOps`]})))()}function ce(){let[e,t]=(0,x.useState)(C),[n,r]=(0,x.useState)();return(0,S.jsxs)(S.Fragment,{children:[e.map((e,n)=>(0,S.jsx)(c,{closable:!0,closeLabel:`Remove ${e}`,closeIcon:n===2?(0,S.jsx)(o,{"aria-hidden":!0}):void 0,onClose:()=>t(t=>t.filter(t=>t!==e)),clickable:n===0,onClick:()=>r(e),children:e},e)),n&&(0,S.jsxs)(`span`,{children:[`Opened: `,n]}),e.length===0&&(0,S.jsx)(`button`,{type:`button`,onClick:()=>t(C),children:`Reset`})]})}var x,S,C;function w(){return(w=e((()=>{x=t(),l(),i(),S=n(),C=[`Tag 1`,`Tag 2`,`Tag 3`]})))()}function le(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(c,{bgColor:`#ede9fe`,textColor:`#5b21b6`,borderColor:`#7c3aed`,bordered:!0,children:`Violet`}),(0,T.jsx)(c,{bgColor:`#0f172a`,textColor:`#f8fafc`,children:`Dark`}),(0,T.jsx)(c,{style:{fontStyle:`italic`},ripple:!1,clickable:!0,children:`No ripple`})]})}var T;function E(){return(E=e((()=>{l(),T=n()})))()}function D(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{disabled:!0,children:`Disabled`}),(0,O.jsx)(c,{disabled:!0,closable:!0,variant:`primary`,children:`Disabled closable`}),(0,O.jsx)(c,{disabled:!0,clickable:!0,variant:`info`,children:`Disabled clickable`})]})}var O;function k(){return(k=e((()=>{l(),O=n()})))()}function ue(){return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,A.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,A.jsx)(c,{size:`small`,variant:`primary`,children:`Small`}),(0,A.jsx)(c,{size:`medium`,variant:`primary`,children:`Medium`}),(0,A.jsx)(c,{size:`large`,variant:`primary`,children:`Large`})]}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,A.jsx)(c,{shape:`square`,variant:`info`,children:`Square`}),(0,A.jsx)(c,{shape:`rounded`,variant:`info`,children:`Rounded`}),(0,A.jsx)(c,{shape:`circle`,variant:`info`,children:`Circle`})]})]})}var A;function j(){return(j=e((()=>{l(),A=n()})))()}function de(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(c,{icon:(0,M.jsx)(a,{}),variant:`success`,children:`Done`}),(0,M.jsx)(c,{icon:(0,M.jsx)(r,{}),variant:`warning`,children:`In progress`}),(0,M.jsx)(c,{icon:(0,M.jsx)(s,{}),variant:`error`,children:`Bug`})]})}var M;function N(){return(N=e((()=>{l(),i(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { Tag } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <>
      <Tag>Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="info">Info</Tag>
    </>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { Tag } from "@minerva/lib-core";

export default function BorderedElevationDemo() {
  return (
    <>
      <Tag bordered variant="primary">
        Bordered
      </Tag>
      <Tag elevation variant="success">
        Elevation
      </Tag>
      <Tag bordered elevation>
        Both
      </Tag>
    </>
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { useState } from "react";
import { Tag } from "@minerva/lib-core";

const topics = ["Design", "Frontend", "Backend", "Testing", "DevOps"];

export default function ClickableDemo() {
  const [selected, setSelected] = useState<string[]>(["Frontend"]);

  const toggle = (topic: string) =>
    setSelected((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {topics.map((topic) => (
          <Tag
            key={topic}
            clickable
            pressed={selected.includes(topic)}
            variant={selected.includes(topic) ? "primary" : "default"}
            bordered
            onClick={() => toggle(topic)}
          >
            {topic}
          </Tag>
        ))}
      </div>
      <p>Selected: {selected.join(", ") || "none"}</p>
    </div>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { useState } from "react";
import { Tag } from "@minerva/lib-core";
import { FaTimesCircle } from "react-icons/fa";

const initialTags = ["Tag 1", "Tag 2", "Tag 3"];

export default function ClosableDemo() {
  const [tags, setTags] = useState(initialTags);
  const [opened, setOpened] = useState<string>();

  return (
    <>
      {tags.map((tag, index) => (
        <Tag
          key={tag}
          closable
          closeLabel={\`Remove \${tag}\`}
          closeIcon={index === 2 ? <FaTimesCircle aria-hidden /> : undefined}
          onClose={() => setTags((prev) => prev.filter((t) => t !== tag))}
          // clickable + closable: the tag and its close button are two
          // separate buttons, both reachable with Tab
          clickable={index === 0}
          onClick={() => setOpened(tag)}
        >
          {tag}
        </Tag>
      ))}
      {opened && <span>Opened: {opened}</span>}
      {tags.length === 0 && (
        <button type="button" onClick={() => setTags(initialTags)}>
          Reset
        </button>
      )}
    </>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { Tag } from "@minerva/lib-core";

export default function CustomColorsDemo() {
  return (
    <>
      <Tag bgColor="#ede9fe" textColor="#5b21b6" borderColor="#7c3aed" bordered>
        Violet
      </Tag>
      <Tag bgColor="#0f172a" textColor="#f8fafc">
        Dark
      </Tag>
      <Tag style={{ fontStyle: "italic" }} ripple={false} clickable>
        No ripple
      </Tag>
    </>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { Tag } from "@minerva/lib-core";

export default function DisabledDemo() {
  return (
    <>
      <Tag disabled>Disabled</Tag>
      <Tag disabled closable variant="primary">
        Disabled closable
      </Tag>
      <Tag disabled clickable variant="info">
        Disabled clickable
      </Tag>
    </>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { Tag } from "@minerva/lib-core";

export default function SizesShapesDemo() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Tag size="small" variant="primary">
          Small
        </Tag>
        <Tag size="medium" variant="primary">
          Medium
        </Tag>
        <Tag size="large" variant="primary">
          Large
        </Tag>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Tag shape="square" variant="info">
          Square
        </Tag>
        <Tag shape="rounded" variant="info">
          Rounded
        </Tag>
        <Tag shape="circle" variant="info">
          Circle
        </Tag>
      </div>
    </div>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Tag } from "@minerva/lib-core";
import { FaBug, FaCheck, FaClock } from "react-icons/fa";

export default function WithIconDemo() {
  return (
    <>
      <Tag icon={<FaCheck />} variant="success">
        Done
      </Tag>
      <Tag icon={<FaClock />} variant="warning">
        In progress
      </Tag>
      <Tag icon={<FaBug />} variant="error">
        Bug
      </Tag>
    </>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{m(),g(),b(),w(),E(),k(),j(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),te(),d(),ne(),re(),X=n(),Z=ie(Object.assign({"./demos/basic.tsx":f,"./demos/bordered-elevation.tsx":oe,"./demos/clickable.tsx":se,"./demos/closable.tsx":ce,"./demos/custom-colors.tsx":le,"./demos/disabled.tsx":D,"./demos/sizes-shapes.tsx":ue,"./demos/with-icon.tsx":de}),Object.assign({"./demos/basic.tsx":P,"./demos/bordered-elevation.tsx":I,"./demos/clickable.tsx":R,"./demos/closable.tsx":B,"./demos/custom-colors.tsx":H,"./demos/disabled.tsx":W,"./demos/sizes-shapes.tsx":K,"./demos/with-icon.tsx":J})),Q=()=>{let{t:e}=ee();return(0,X.jsx)(ae,{id:`tag`,demos:Z,children:(0,X.jsxs)(`section`,{className:u.section,"aria-labelledby":`accessibility`,children:[(0,X.jsx)(`h2`,{id:`accessibility`,children:e(`docs.tag.accessibility.title`)}),(0,X.jsxs)(`ul`,{className:u.prose,children:[(0,X.jsx)(`li`,{children:e(`docs.tag.accessibility.clickable`)}),(0,X.jsx)(`li`,{children:e(`docs.tag.accessibility.closable`)}),(0,X.jsx)(`li`,{children:e(`docs.tag.accessibility.disabled`)})]})]})})}})))()}$();export{Q as default};