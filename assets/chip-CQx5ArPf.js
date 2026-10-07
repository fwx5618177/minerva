import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{J as ee,Q as r,R as i,w as te}from"./ConfigProvider-DJ6uO8m_-B80Bd_Y7.js";import{Vt as a,i as o,nn as ne}from"./dist-dg6ajl7p.js";import{c as re,n as s,s as c,t as ie}from"./DocPage-Kqmidh_0.js";function l(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{label:`Design`}),(0,u.jsx)(o,{label:`Engineering`,color:`primary`})]})}var u;function d(){return(d=e((()=>{a(),u=n()})))()}function f(){let[e,t]=(0,p.useState)(`All`);return(0,m.jsx)(m.Fragment,{children:h.map(n=>(0,m.jsx)(o,{label:n,variant:`outlined`,color:`primary`,clickable:!0,selected:e===n,onClick:()=>t(n)},n))})}var p,m,h;function g(){return(g=e((()=>{p=t(),a(),m=n(),h=[`All`,`Open`,`In review`,`Closed`]})))()}function ae(){return(0,_.jsx)(_.Fragment,{children:v.map(e=>(0,_.jsx)(o,{label:e,color:e},e))})}var _,v;function y(){return(y=e((()=>{a(),_=n(),v=[`default`,`primary`,`secondary`,`success`,`error`,`warning`,`info`]})))()}function oe(){let[e,t]=(0,b.useState)(S),[n,r]=(0,b.useState)(),i=e=>t(t=>t.filter(t=>t!==e));return(0,x.jsxs)(x.Fragment,{children:[e.map((e,t)=>(0,x.jsx)(o,{label:e,color:`primary`,variant:`soft`,onDelete:()=>i(e),deleteIcon:t===0?(0,x.jsx)(ee,{size:12,"aria-hidden":!0}):void 0,deleteLabel:`Remove ${e} filter`,clickable:t===1,onClick:()=>r(e)},e)),n&&(0,x.jsxs)(`span`,{children:[`Opened: `,n]}),e.length===0&&(0,x.jsx)(`span`,{children:`All chips removed`})]})}var b,x,S;function C(){return(C=e((()=>{b=t(),a(),r(),x=n(),S=[`React`,`TypeScript`,`Vite`,`Sass`]})))()}function se(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(o,{label:`Frontend`,icon:(0,w.jsx)(te,{}),color:`info`,variant:`soft`}),(0,w.jsx)(o,{label:`Paris`,icon:(0,w.jsx)(i,{}),variant:`outlined`}),(0,w.jsx)(o,{label:`Mia Rossi`,avatar:(0,w.jsx)(ne,{name:`Mia Rossi`,size:`small`})})]})}var w;function T(){return(T=e((()=>{a(),r(),w=n()})))()}function ce(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(o,{label:`Small`,size:`small`,color:`primary`}),(0,E.jsx)(o,{label:`Medium`,size:`medium`,color:`primary`}),(0,E.jsx)(o,{label:`Large`,size:`large`,color:`primary`})]})}var E;function D(){return(D=e((()=>{a(),E=n()})))()}function O(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(o,{label:`Uploading`,loading:!0,color:`info`}),(0,k.jsx)(o,{label:`Disabled`,disabled:!0,onDelete:()=>{}}),(0,k.jsx)(o,{label:`Disabled clickable`,disabled:!0,clickable:!0,color:`primary`})]})}var k;function A(){return(A=e((()=>{a(),k=n()})))()}function j(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(o,{label:`Filled`,variant:`filled`,color:`primary`}),(0,M.jsx)(o,{label:`Outlined`,variant:`outlined`,color:`primary`}),(0,M.jsx)(o,{label:`Soft`,variant:`soft`,color:`primary`})]})}var M;function N(){return(N=e((()=>{a(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { Chip } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <>
      <Chip label="Design" />
      <Chip label="Engineering" color="primary" />
    </>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { useState } from "react";
import { Chip } from "@minerva/lib-core";

const filters = ["All", "Open", "In review", "Closed"];

export default function ClickableDemo() {
  const [active, setActive] = useState("All");

  return (
    <>
      {filters.map((filter) => (
        <Chip
          key={filter}
          label={filter}
          variant="outlined"
          color="primary"
          clickable
          selected={active === filter}
          onClick={() => setActive(filter)}
        />
      ))}
    </>
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { Chip } from "@minerva/lib-core";

const colors = [
  "default",
  "primary",
  "secondary",
  "success",
  "error",
  "warning",
  "info",
] as const;

export default function ColorsDemo() {
  return (
    <>
      {colors.map((color) => (
        <Chip key={color} label={color} color={color} />
      ))}
    </>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { useState } from "react";
import { Chip } from "@minerva/lib-core";
import { FaTrash } from "react-icons/fa";

const initialTags = ["React", "TypeScript", "Vite", "Sass"];

export default function DeletableDemo() {
  const [tags, setTags] = useState(initialTags);
  const [opened, setOpened] = useState<string>();

  const remove = (tag: string) =>
    setTags((prev) => prev.filter((t) => t !== tag));

  return (
    <>
      {tags.map((tag, index) => (
        <Chip
          key={tag}
          label={tag}
          color="primary"
          variant="soft"
          onDelete={() => remove(tag)}
          deleteIcon={
            index === 0 ? <FaTrash size={12} aria-hidden /> : undefined
          }
          deleteLabel={\`Remove \${tag} filter\`}
          // clickable + deletable: two sibling buttons, both reachable with Tab
          clickable={index === 1}
          onClick={() => setOpened(tag)}
        />
      ))}
      {opened && <span>Opened: {opened}</span>}
      {tags.length === 0 && <span>All chips removed</span>}
    </>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { Avatar, Chip } from "@minerva/lib-core";
import { FaCode, FaMapMarkerAlt } from "react-icons/fa";

export default function IconAvatarDemo() {
  return (
    <>
      <Chip label="Frontend" icon={<FaCode />} color="info" variant="soft" />
      <Chip label="Paris" icon={<FaMapMarkerAlt />} variant="outlined" />
      <Chip
        label="Mia Rossi"
        avatar={<Avatar name="Mia Rossi" size="small" />}
      />
    </>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { Chip } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <>
      <Chip label="Small" size="small" color="primary" />
      <Chip label="Medium" size="medium" color="primary" />
      <Chip label="Large" size="large" color="primary" />
    </>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { Chip } from "@minerva/lib-core";

export default function StatesDemo() {
  return (
    <>
      <Chip label="Uploading" loading color="info" />
      <Chip label="Disabled" disabled onDelete={() => {}} />
      <Chip label="Disabled clickable" disabled clickable color="primary" />
    </>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Chip } from "@minerva/lib-core";

export default function VariantsDemo() {
  return (
    <>
      <Chip label="Filled" variant="filled" color="primary" />
      <Chip label="Outlined" variant="outlined" color="primary" />
      <Chip label="Soft" variant="soft" color="primary" />
    </>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{d(),g(),y(),C(),T(),D(),A(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),s(),re(),X=n(),Z=c(Object.assign({"./demos/basic.tsx":l,"./demos/clickable.tsx":f,"./demos/colors.tsx":ae,"./demos/deletable.tsx":oe,"./demos/icon-avatar.tsx":se,"./demos/sizes.tsx":ce,"./demos/states.tsx":O,"./demos/variants.tsx":j}),Object.assign({"./demos/basic.tsx":P,"./demos/clickable.tsx":I,"./demos/colors.tsx":R,"./demos/deletable.tsx":B,"./demos/icon-avatar.tsx":H,"./demos/sizes.tsx":W,"./demos/states.tsx":K,"./demos/variants.tsx":J})),Q=()=>(0,X.jsx)(ie,{id:`chip`,demos:Z})})))()}$();export{Q as default};