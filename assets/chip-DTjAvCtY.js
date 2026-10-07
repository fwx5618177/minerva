import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{D as r,V as i,Z as ee,tt as a}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{B as o,Bt as s,Ht as c}from"./dist-BWNqkmth.js";import{c as te,n as ne,s as re,t as l}from"./DocPage-DGOZswYH.js";function u(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{label:`Design`}),(0,d.jsx)(o,{label:`Engineering`,color:`primary`})]})}var d;function f(){return(f=e((()=>{c(),d=n()})))()}function ie(){let[e,t]=(0,p.useState)(`All`);return(0,m.jsx)(m.Fragment,{children:h.map(n=>(0,m.jsx)(o,{label:n,variant:`outlined`,color:`primary`,clickable:!0,selected:e===n,onClick:()=>t(n)},n))})}var p,m,h;function g(){return(g=e((()=>{p=t(),c(),m=n(),h=[`All`,`Open`,`In review`,`Closed`]})))()}function ae(){return(0,_.jsx)(_.Fragment,{children:v.map(e=>(0,_.jsx)(o,{label:e,color:e},e))})}var _,v;function y(){return(y=e((()=>{c(),_=n(),v=[`default`,`primary`,`secondary`,`success`,`error`,`warning`,`info`]})))()}function b(){let[e,t]=(0,x.useState)(C),[n,r]=(0,x.useState)(),i=e=>t(t=>t.filter(t=>t!==e));return(0,S.jsxs)(S.Fragment,{children:[e.map((e,t)=>(0,S.jsx)(o,{label:e,color:`primary`,variant:`soft`,onDelete:()=>i(e),deleteIcon:t===0?(0,S.jsx)(ee,{size:12,"aria-hidden":!0}):void 0,deleteLabel:`Remove ${e} filter`,clickable:t===1,onClick:()=>r(e)},e)),n&&(0,S.jsxs)(`span`,{children:[`Opened: `,n]}),e.length===0&&(0,S.jsx)(`span`,{children:`All chips removed`})]})}var x,S,C;function w(){return(w=e((()=>{x=t(),c(),a(),S=n(),C=[`React`,`TypeScript`,`Vite`,`Sass`]})))()}function oe(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(o,{label:`Frontend`,icon:(0,T.jsx)(r,{}),color:`info`,variant:`soft`}),(0,T.jsx)(o,{label:`Paris`,icon:(0,T.jsx)(i,{}),variant:`outlined`}),(0,T.jsx)(o,{label:`Mia Rossi`,avatar:(0,T.jsx)(s,{name:`Mia Rossi`,size:`small`})})]})}var T;function E(){return(E=e((()=>{c(),a(),T=n()})))()}function se(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(o,{label:`Small`,size:`small`,color:`primary`}),(0,D.jsx)(o,{label:`Medium`,size:`medium`,color:`primary`}),(0,D.jsx)(o,{label:`Large`,size:`large`,color:`primary`})]})}var D;function O(){return(O=e((()=>{c(),D=n()})))()}function k(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o,{label:`Uploading`,loading:!0,color:`info`}),(0,A.jsx)(o,{label:`Disabled`,disabled:!0,onDelete:()=>{}}),(0,A.jsx)(o,{label:`Disabled clickable`,disabled:!0,clickable:!0,color:`primary`})]})}var A;function j(){return(j=e((()=>{c(),A=n()})))()}function ce(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(o,{label:`Filled`,variant:`filled`,color:`primary`}),(0,M.jsx)(o,{label:`Outlined`,variant:`outlined`,color:`primary`}),(0,M.jsx)(o,{label:`Soft`,variant:`soft`,color:`primary`})]})}var M;function N(){return(N=e((()=>{c(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { Chip } from "@minerva/lib-core";

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
`})))()}var X,Z,Q;function $(){return($=e((()=>{f(),g(),y(),w(),E(),O(),j(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),ne(),te(),X=n(),Z=re(Object.assign({"./demos/basic.tsx":u,"./demos/clickable.tsx":ie,"./demos/colors.tsx":ae,"./demos/deletable.tsx":b,"./demos/icon-avatar.tsx":oe,"./demos/sizes.tsx":se,"./demos/states.tsx":k,"./demos/variants.tsx":ce}),Object.assign({"./demos/basic.tsx":P,"./demos/clickable.tsx":I,"./demos/colors.tsx":R,"./demos/deletable.tsx":B,"./demos/icon-avatar.tsx":H,"./demos/sizes.tsx":W,"./demos/states.tsx":K,"./demos/variants.tsx":J})),Q=()=>(0,X.jsx)(l,{id:`chip`,demos:Z})})))()}$();export{Q as default};