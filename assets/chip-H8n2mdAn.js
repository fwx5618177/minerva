import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{a as r,m as i,nt as a,ot as o,ut as s}from"./dist-C3Cy1YK6.js";import{i as c,t as l}from"./DocPage-DUnq_TLt.js";var u=n();function d(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{label:`Design`}),(0,u.jsx)(i,{label:`Engineering`,color:`primary`})]})}var f=e(t(),1),p=[`All`,`Open`,`In review`,`Closed`];function m(){let[e,t]=(0,f.useState)(`All`);return(0,u.jsx)(u.Fragment,{children:p.map(n=>(0,u.jsx)(i,{label:n,variant:`outlined`,color:`primary`,clickable:!0,selected:e===n,onClick:()=>t(n)},n))})}var h=[`default`,`primary`,`secondary`,`success`,`error`,`warning`,`info`];function g(){return(0,u.jsx)(u.Fragment,{children:h.map(e=>(0,u.jsx)(i,{label:e,color:e},e))})}var _=[`React`,`TypeScript`,`Vite`,`Sass`];function v(){let[e,t]=(0,f.useState)(_),[n,r]=(0,f.useState)(),a=e=>t(t=>t.filter(t=>t!==e));return(0,u.jsxs)(u.Fragment,{children:[e.map((e,t)=>(0,u.jsx)(i,{label:e,color:`primary`,variant:`soft`,onDelete:()=>a(e),deleteIcon:t===0?(0,u.jsx)(s,{size:12,"aria-hidden":!0}):void 0,deleteLabel:`Remove ${e} filter`,clickable:t===1,onClick:()=>r(e)},e)),n&&(0,u.jsxs)(`span`,{children:[`Opened: `,n]}),e.length===0&&(0,u.jsx)(`span`,{children:`All chips removed`})]})}function y(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{label:`Frontend`,icon:(0,u.jsx)(a,{}),color:`info`,variant:`soft`}),(0,u.jsx)(i,{label:`Paris`,icon:(0,u.jsx)(o,{}),variant:`outlined`}),(0,u.jsx)(i,{label:`Mia Rossi`,avatar:(0,u.jsx)(r,{name:`Mia Rossi`,size:`small`})})]})}function b(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{label:`Small`,size:`small`,color:`primary`}),(0,u.jsx)(i,{label:`Medium`,size:`medium`,color:`primary`}),(0,u.jsx)(i,{label:`Large`,size:`large`,color:`primary`})]})}function x(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{label:`Uploading`,loading:!0,color:`info`}),(0,u.jsx)(i,{label:`Disabled`,disabled:!0,onDelete:()=>{}}),(0,u.jsx)(i,{label:`Disabled clickable`,disabled:!0,clickable:!0,color:`primary`})]})}function S(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{label:`Filled`,variant:`filled`,color:`primary`}),(0,u.jsx)(i,{label:`Outlined`,variant:`outlined`,color:`primary`}),(0,u.jsx)(i,{label:`Soft`,variant:`soft`,color:`primary`})]})}var C=c(Object.assign({"./demos/basic.tsx":d,"./demos/clickable.tsx":m,"./demos/colors.tsx":g,"./demos/deletable.tsx":v,"./demos/icon-avatar.tsx":y,"./demos/sizes.tsx":b,"./demos/states.tsx":x,"./demos/variants.tsx":S}),Object.assign({"./demos/basic.tsx":`import { Chip } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <>
      <Chip label="Design" />
      <Chip label="Engineering" color="primary" />
    </>
  );
}
`,"./demos/clickable.tsx":`import { useState } from "react";
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
`,"./demos/colors.tsx":`import { Chip } from "@minerva/lib-core";

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
`,"./demos/deletable.tsx":`import { useState } from "react";
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
`,"./demos/icon-avatar.tsx":`import { Avatar, Chip } from "@minerva/lib-core";
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
`,"./demos/sizes.tsx":`import { Chip } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <>
      <Chip label="Small" size="small" color="primary" />
      <Chip label="Medium" size="medium" color="primary" />
      <Chip label="Large" size="large" color="primary" />
    </>
  );
}
`,"./demos/states.tsx":`import { Chip } from "@minerva/lib-core";

export default function StatesDemo() {
  return (
    <>
      <Chip label="Uploading" loading color="info" />
      <Chip label="Disabled" disabled onDelete={() => {}} />
      <Chip label="Disabled clickable" disabled clickable color="primary" />
    </>
  );
}
`,"./demos/variants.tsx":`import { Chip } from "@minerva/lib-core";

export default function VariantsDemo() {
  return (
    <>
      <Chip label="Filled" variant="filled" color="primary" />
      <Chip label="Outlined" variant="outlined" color="primary" />
      <Chip label="Soft" variant="soft" color="primary" />
    </>
  );
}
`})),w=()=>(0,u.jsx)(l,{id:`chip`,demos:C});export{w as default};