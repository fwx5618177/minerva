import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{$ as r,A as i,et as a,lt as o,tt as s}from"./dist-C3Cy1YK6.js";import{J as c}from"./registry-DXcVqgdp.js";import{i as l,r as u,t as d}from"./DocPage-DUnq_TLt.js";var f=n();function p(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{children:`Default`}),(0,f.jsx)(i,{variant:`primary`,children:`Primary`}),(0,f.jsx)(i,{variant:`success`,children:`Success`}),(0,f.jsx)(i,{variant:`warning`,children:`Warning`}),(0,f.jsx)(i,{variant:`error`,children:`Error`}),(0,f.jsx)(i,{variant:`info`,children:`Info`})]})}function m(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{bordered:!0,variant:`primary`,children:`Bordered`}),(0,f.jsx)(i,{elevation:!0,variant:`success`,children:`Elevation`}),(0,f.jsx)(i,{bordered:!0,elevation:!0,children:`Both`})]})}var h=e(t(),1),g=[`Design`,`Frontend`,`Backend`,`Testing`,`DevOps`];function _(){let[e,t]=(0,h.useState)([`Frontend`]),n=e=>t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:g.map(t=>(0,f.jsx)(i,{clickable:!0,pressed:e.includes(t),variant:e.includes(t)?`primary`:`default`,bordered:!0,onClick:()=>n(t),children:t},t))}),(0,f.jsxs)(`p`,{children:[`Selected: `,e.join(`, `)||`none`]})]})}var v=[`Tag 1`,`Tag 2`,`Tag 3`];function y(){let[e,t]=(0,h.useState)(v),[n,r]=(0,h.useState)();return(0,f.jsxs)(f.Fragment,{children:[e.map((e,n)=>(0,f.jsx)(i,{closable:!0,closeLabel:`Remove ${e}`,closeIcon:n===2?(0,f.jsx)(o,{"aria-hidden":!0}):void 0,onClose:()=>t(t=>t.filter(t=>t!==e)),clickable:n===0,onClick:()=>r(e),children:e},e)),n&&(0,f.jsxs)(`span`,{children:[`Opened: `,n]}),e.length===0&&(0,f.jsx)(`button`,{type:`button`,onClick:()=>t(v),children:`Reset`})]})}function b(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{bgColor:`#ede9fe`,textColor:`#5b21b6`,borderColor:`#7c3aed`,bordered:!0,children:`Violet`}),(0,f.jsx)(i,{bgColor:`#0f172a`,textColor:`#f8fafc`,children:`Dark`}),(0,f.jsx)(i,{style:{fontStyle:`italic`},ripple:!1,clickable:!0,children:`No ripple`})]})}function x(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{disabled:!0,children:`Disabled`}),(0,f.jsx)(i,{disabled:!0,closable:!0,variant:`primary`,children:`Disabled closable`}),(0,f.jsx)(i,{disabled:!0,clickable:!0,variant:`info`,children:`Disabled clickable`})]})}function S(){return(0,f.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,f.jsx)(i,{size:`small`,variant:`primary`,children:`Small`}),(0,f.jsx)(i,{size:`medium`,variant:`primary`,children:`Medium`}),(0,f.jsx)(i,{size:`large`,variant:`primary`,children:`Large`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,f.jsx)(i,{shape:`square`,variant:`info`,children:`Square`}),(0,f.jsx)(i,{shape:`rounded`,variant:`info`,children:`Rounded`}),(0,f.jsx)(i,{shape:`circle`,variant:`info`,children:`Circle`})]})]})}function C(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{icon:(0,f.jsx)(a,{}),variant:`success`,children:`Done`}),(0,f.jsx)(i,{icon:(0,f.jsx)(s,{}),variant:`warning`,children:`In progress`}),(0,f.jsx)(i,{icon:(0,f.jsx)(r,{}),variant:`error`,children:`Bug`})]})}var w=l(Object.assign({"./demos/basic.tsx":p,"./demos/bordered-elevation.tsx":m,"./demos/clickable.tsx":_,"./demos/closable.tsx":y,"./demos/custom-colors.tsx":b,"./demos/disabled.tsx":x,"./demos/sizes-shapes.tsx":S,"./demos/with-icon.tsx":C}),Object.assign({"./demos/basic.tsx":`import { Tag } from "@minerva/lib-core";

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
`,"./demos/bordered-elevation.tsx":`import { Tag } from "@minerva/lib-core";

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
`,"./demos/clickable.tsx":`import { useState } from "react";
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
`,"./demos/closable.tsx":`import { useState } from "react";
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
`,"./demos/custom-colors.tsx":`import { Tag } from "@minerva/lib-core";

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
`,"./demos/disabled.tsx":`import { Tag } from "@minerva/lib-core";

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
`,"./demos/sizes-shapes.tsx":`import { Tag } from "@minerva/lib-core";

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
`,"./demos/with-icon.tsx":`import { Tag } from "@minerva/lib-core";
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
`})),T=()=>{let{t:e}=c();return(0,f.jsx)(d,{id:`tag`,demos:w,children:(0,f.jsxs)(`section`,{className:u.section,"aria-labelledby":`accessibility`,children:[(0,f.jsx)(`h2`,{id:`accessibility`,children:e(`docs.tag.accessibility.title`)}),(0,f.jsxs)(`ul`,{className:u.prose,children:[(0,f.jsx)(`li`,{children:e(`docs.tag.accessibility.clickable`)}),(0,f.jsx)(`li`,{children:e(`docs.tag.accessibility.closable`)}),(0,f.jsx)(`li`,{children:e(`docs.tag.accessibility.disabled`)})]})]})})};export{T as default};