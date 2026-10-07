import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{J as r,Q as i,R as a,w as ee}from"./ConfigProvider-BGZRMKW0-zZcUK1pN.js";import{K as te}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d as o,u as s}from"./dist-CcA3uxH5.js";import{c,n as ne,s as re,t as l}from"./DocPage-Dm1vTl9w.js";function ie(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s,{label:`Design`}),(0,u.jsx)(s,{label:`Engineering`,color:`primary`})]})}var u;function d(){return(d=e((()=>{o(),u=n()})))()}function f(){let[e,t]=(0,p.useState)(`All`);return(0,m.jsx)(m.Fragment,{children:h.map(n=>(0,m.jsx)(s,{label:n,variant:`outlined`,color:`primary`,clickable:!0,selected:e===n,onClick:()=>t(n)},n))})}var p,m,h;function g(){return(g=e((()=>{p=t(),o(),m=n(),h=[`All`,`Open`,`In review`,`Closed`]})))()}function ae(){return(0,_.jsx)(_.Fragment,{children:v.map(e=>(0,_.jsx)(s,{label:e,color:e},e))})}var _,v;function y(){return(y=e((()=>{o(),_=n(),v=[`default`,`primary`,`secondary`,`success`,`error`,`warning`,`info`]})))()}function oe(){let[e,t]=(0,b.useState)(S),[n,i]=(0,b.useState)(),a=e=>t(t=>t.filter(t=>t!==e));return(0,x.jsxs)(x.Fragment,{children:[e.map((e,t)=>(0,x.jsx)(s,{label:e,color:`primary`,variant:`soft`,onDelete:()=>a(e),deleteIcon:t===0?(0,x.jsx)(r,{size:12,"aria-hidden":!0}):void 0,deleteLabel:`Remove ${e} filter`,clickable:t===1,onClick:()=>i(e)},e)),n&&(0,x.jsxs)(`span`,{children:[`Opened: `,n]}),e.length===0&&(0,x.jsx)(`span`,{children:`All chips removed`})]})}var b,x,S;function C(){return(C=e((()=>{b=t(),o(),i(),x=n(),S=[`React`,`TypeScript`,`Vite`,`Sass`]})))()}function se(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{label:`Frontend`,icon:(0,w.jsx)(ee,{}),color:`info`,variant:`soft`}),(0,w.jsx)(s,{label:`Paris`,icon:(0,w.jsx)(a,{}),variant:`outlined`}),(0,w.jsx)(s,{label:`Mia Rossi`,avatar:(0,w.jsx)(te,{name:`Mia Rossi`,size:`small`})})]})}var w;function T(){return(T=e((()=>{o(),i(),w=n()})))()}function ce(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(s,{label:`Small`,size:`small`,color:`primary`}),(0,E.jsx)(s,{label:`Medium`,size:`medium`,color:`primary`}),(0,E.jsx)(s,{label:`Large`,size:`large`,color:`primary`})]})}var E;function D(){return(D=e((()=>{o(),E=n()})))()}function O(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s,{label:`Uploading`,loading:!0,color:`info`}),(0,k.jsx)(s,{label:`Disabled`,disabled:!0,onDelete:()=>{}}),(0,k.jsx)(s,{label:`Disabled clickable`,disabled:!0,clickable:!0,color:`primary`})]})}var k;function A(){return(A=e((()=>{o(),k=n()})))()}function j(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s,{label:`Filled`,variant:`filled`,color:`primary`}),(0,M.jsx)(s,{label:`Outlined`,variant:`outlined`,color:`primary`}),(0,M.jsx)(s,{label:`Soft`,variant:`soft`,color:`primary`})]})}var M;function N(){return(N=e((()=>{o(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { Chip } from "@minerva/lib-core";

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
`})))()}var X,Z,Q;function $(){return($=e((()=>{d(),g(),y(),C(),T(),D(),A(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),ne(),c(),X=n(),Z=re(Object.assign({"./demos/basic.tsx":ie,"./demos/clickable.tsx":f,"./demos/colors.tsx":ae,"./demos/deletable.tsx":oe,"./demos/icon-avatar.tsx":se,"./demos/sizes.tsx":ce,"./demos/states.tsx":O,"./demos/variants.tsx":j}),Object.assign({"./demos/basic.tsx":P,"./demos/clickable.tsx":I,"./demos/colors.tsx":R,"./demos/deletable.tsx":B,"./demos/icon-avatar.tsx":H,"./demos/sizes.tsx":W,"./demos/states.tsx":K,"./demos/variants.tsx":J})),Q=()=>(0,X.jsx)(l,{id:`chip`,demos:Z})})))()}$();export{Q as default};