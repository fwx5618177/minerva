import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{f as t,t as n}from"./react-vendor-CUe5nroo.js";import{M as r,O as i,dt as a,rt as o,st as s}from"./dist-DAjZNDC0.js";import{i as c,t as l}from"./DocPage-B1L0vw6V.js";var u=n();function d(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{label:`Design`}),(0,u.jsx)(r,{label:`Engineering`,color:`primary`})]})}var f=e(t(),1),p=[`All`,`Open`,`In review`,`Closed`];function m(){let[e,t]=(0,f.useState)(`All`);return(0,u.jsx)(u.Fragment,{children:p.map(n=>(0,u.jsx)(r,{label:n,variant:`outlined`,color:`primary`,clickable:!0,selected:e===n,onClick:()=>t(n)},n))})}var h=[`default`,`primary`,`secondary`,`success`,`error`,`warning`,`info`];function g(){return(0,u.jsx)(u.Fragment,{children:h.map(e=>(0,u.jsx)(r,{label:e,color:e},e))})}function _(){let[e,t]=(0,f.useState)([`React`,`TypeScript`,`Vite`,`Sass`]),n=e=>t(t=>t.filter(t=>t!==e));return(0,u.jsxs)(u.Fragment,{children:[e.map((e,t)=>(0,u.jsx)(r,{label:e,color:`primary`,variant:`soft`,onDelete:()=>n(e),deleteIcon:t===0?(0,u.jsx)(a,{size:12,"aria-hidden":!0}):void 0,deleteLabel:`Remove ${e} filter`},e)),e.length===0&&(0,u.jsx)(`span`,{children:`All chips removed`})]})}function v(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{label:`Frontend`,icon:(0,u.jsx)(o,{}),color:`info`,variant:`soft`}),(0,u.jsx)(r,{label:`Paris`,icon:(0,u.jsx)(s,{}),variant:`outlined`}),(0,u.jsx)(r,{label:`Mia Rossi`,avatar:(0,u.jsx)(i,{name:`Mia Rossi`,size:`small`})})]})}function y(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{label:`Small`,size:`small`,color:`primary`}),(0,u.jsx)(r,{label:`Medium`,size:`medium`,color:`primary`}),(0,u.jsx)(r,{label:`Large`,size:`large`,color:`primary`})]})}function b(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{label:`Uploading`,loading:!0,color:`info`}),(0,u.jsx)(r,{label:`Disabled`,disabled:!0,onDelete:()=>{}}),(0,u.jsx)(r,{label:`Disabled clickable`,disabled:!0,clickable:!0,color:`primary`})]})}function x(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{label:`Filled`,variant:`filled`,color:`primary`}),(0,u.jsx)(r,{label:`Outlined`,variant:`outlined`,color:`primary`}),(0,u.jsx)(r,{label:`Soft`,variant:`soft`,color:`primary`})]})}var S=c(Object.assign({"./demos/basic.tsx":d,"./demos/clickable.tsx":m,"./demos/colors.tsx":g,"./demos/deletable.tsx":_,"./demos/icon-avatar.tsx":v,"./demos/sizes.tsx":y,"./demos/states.tsx":b,"./demos/variants.tsx":x}),Object.assign({"./demos/basic.tsx":`import { Chip } from "@minerva/lib-core";

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

export default function DeletableDemo() {
  const [tags, setTags] = useState(["React", "TypeScript", "Vite", "Sass"]);

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
        />
      ))}
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
`})),C=()=>(0,u.jsx)(l,{id:`chip`,demos:S});export{C as default};