import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{E as r,T as i,X as ee,tt as a,w as te}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{i as ne,r as re}from"./iconBase-DWTUFqgC.js";import{Ht as o,wn as s}from"./dist-BWNqkmth.js";import{a as c,c as ie,n as l,o as ae,s as oe,t as se}from"./DocPage-DGOZswYH.js";function u(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{children:`Default`}),(0,d.jsx)(s,{variant:`primary`,children:`Primary`}),(0,d.jsx)(s,{variant:`success`,children:`Success`}),(0,d.jsx)(s,{variant:`warning`,children:`Warning`}),(0,d.jsx)(s,{variant:`error`,children:`Error`}),(0,d.jsx)(s,{variant:`info`,children:`Info`})]})}var d;function f(){return(f=e((()=>{o(),d=n()})))()}function p(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{bordered:!0,variant:`primary`,children:`Bordered`}),(0,m.jsx)(s,{elevation:!0,variant:`success`,children:`Elevation`}),(0,m.jsx)(s,{bordered:!0,elevation:!0,children:`Both`})]})}var m;function h(){return(h=e((()=>{o(),m=n()})))()}function g(){let[e,t]=(0,_.useState)([`Frontend`]),n=e=>t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:y.map(t=>(0,v.jsx)(s,{clickable:!0,pressed:e.includes(t),variant:e.includes(t)?`primary`:`default`,bordered:!0,onClick:()=>n(t),children:t},t))}),(0,v.jsxs)(`p`,{children:[`Selected: `,e.join(`, `)||`none`]})]})}var _,v,y;function b(){return(b=e((()=>{_=t(),o(),v=n(),y=[`Design`,`Frontend`,`Backend`,`Testing`,`DevOps`]})))()}function ce(){let[e,t]=(0,x.useState)(C),[n,r]=(0,x.useState)();return(0,S.jsxs)(S.Fragment,{children:[e.map((e,n)=>(0,S.jsx)(s,{closable:!0,closeLabel:`Remove ${e}`,closeIcon:n===2?(0,S.jsx)(ee,{"aria-hidden":!0}):void 0,onClose:()=>t(t=>t.filter(t=>t!==e)),clickable:n===0,onClick:()=>r(e),children:e},e)),n&&(0,S.jsxs)(`span`,{children:[`Opened: `,n]}),e.length===0&&(0,S.jsx)(`button`,{type:`button`,onClick:()=>t(C),children:`Reset`})]})}var x,S,C;function w(){return(w=e((()=>{x=t(),o(),a(),S=n(),C=[`Tag 1`,`Tag 2`,`Tag 3`]})))()}function le(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(s,{bgColor:`#ede9fe`,textColor:`#5b21b6`,borderColor:`#7c3aed`,bordered:!0,children:`Violet`}),(0,T.jsx)(s,{bgColor:`#0f172a`,textColor:`#f8fafc`,children:`Dark`}),(0,T.jsx)(s,{style:{fontStyle:`italic`},ripple:!1,clickable:!0,children:`No ripple`})]})}var T;function E(){return(E=e((()=>{o(),T=n()})))()}function D(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(s,{disabled:!0,children:`Disabled`}),(0,O.jsx)(s,{disabled:!0,closable:!0,variant:`primary`,children:`Disabled closable`}),(0,O.jsx)(s,{disabled:!0,clickable:!0,variant:`info`,children:`Disabled clickable`})]})}var O;function k(){return(k=e((()=>{o(),O=n()})))()}function ue(){return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,A.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,A.jsx)(s,{size:`small`,variant:`primary`,children:`Small`}),(0,A.jsx)(s,{size:`medium`,variant:`primary`,children:`Medium`}),(0,A.jsx)(s,{size:`large`,variant:`primary`,children:`Large`})]}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,A.jsx)(s,{shape:`square`,variant:`info`,children:`Square`}),(0,A.jsx)(s,{shape:`rounded`,variant:`info`,children:`Rounded`}),(0,A.jsx)(s,{shape:`circle`,variant:`info`,children:`Circle`})]})]})}var A;function j(){return(j=e((()=>{o(),A=n()})))()}function de(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s,{icon:(0,M.jsx)(i,{}),variant:`success`,children:`Done`}),(0,M.jsx)(s,{icon:(0,M.jsx)(r,{}),variant:`warning`,children:`In progress`}),(0,M.jsx)(s,{icon:(0,M.jsx)(te,{}),variant:`error`,children:`Bug`})]})}var M;function N(){return(N=e((()=>{o(),a(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { Tag } from "@minerva/lib-core";

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
`})))()}var X,Z,Q;function $(){return($=e((()=>{f(),h(),b(),w(),E(),k(),j(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),re(),l(),ie(),ae(),X=n(),Z=oe(Object.assign({"./demos/basic.tsx":u,"./demos/bordered-elevation.tsx":p,"./demos/clickable.tsx":g,"./demos/closable.tsx":ce,"./demos/custom-colors.tsx":le,"./demos/disabled.tsx":D,"./demos/sizes-shapes.tsx":ue,"./demos/with-icon.tsx":de}),Object.assign({"./demos/basic.tsx":P,"./demos/bordered-elevation.tsx":I,"./demos/clickable.tsx":R,"./demos/closable.tsx":B,"./demos/custom-colors.tsx":H,"./demos/disabled.tsx":W,"./demos/sizes-shapes.tsx":K,"./demos/with-icon.tsx":J})),Q=()=>{let{t:e}=ne();return(0,X.jsx)(se,{id:`tag`,demos:Z,children:(0,X.jsxs)(`section`,{className:c.section,"aria-labelledby":`accessibility`,children:[(0,X.jsx)(`h2`,{id:`accessibility`,children:e(`docs.tag.accessibility.title`)}),(0,X.jsxs)(`ul`,{className:c.prose,children:[(0,X.jsx)(`li`,{children:e(`docs.tag.accessibility.clickable`)}),(0,X.jsx)(`li`,{children:e(`docs.tag.accessibility.closable`)}),(0,X.jsx)(`li`,{children:e(`docs.tag.accessibility.disabled`)})]})]})})}})))()}$();export{Q as default};