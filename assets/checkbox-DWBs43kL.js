import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{f as t,t as n}from"./react-vendor-CUe5nroo.js";import{T as r}from"./registry-DtD9RDtk.js";import{V as i}from"./dist-DAjZNDC0.js";import{i as a,t as o}from"./DocPage-B1L0vw6V.js";var s=n();function c(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{label:`Remember me`}),(0,s.jsx)(i,{label:`Checked by default`,defaultChecked:!0})]})}var l=e(t(),1);function u(){let[e,t]=(0,l.useState)(!0);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{label:`Subscribe to the newsletter`,checked:e,onChange:t}),(0,s.jsx)(`span`,{children:e?`Subscribed`:`Not subscribed`})]})}function d(){let[e,t]=(0,l.useState)(!0);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{label:`Custom colors`,defaultChecked:!0,boxColor:`#7c3aed`,boxBorderColor:`#7c3aed`,checkmarkColor:`#fde68a`}),(0,s.jsx)(i,{label:`Custom icon`,checked:e,onChange:t,icon:(0,s.jsx)(r,{color:`#e11d48`})})]})}function f(){let[e,t]=(0,l.useState)(!1);return(0,s.jsx)(i,{label:`I accept the terms and conditions`,checked:e,onChange:t,error:!e,helperText:e?`Thanks!`:`You must accept the terms to continue`})}var p=[`Apple`,`Banana`,`Cherry`];function m(){let[e,t]=(0,l.useState)([`Apple`]),n=e.length===p.length,r=e.length>0&&!n,a=(e,n)=>t(t=>n?[...t,e]:t.filter(t=>t!==e));return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,s.jsx)(i,{label:`Select all`,checked:n,indeterminate:r,onChange:e=>t(e?p:[])}),(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,paddingLeft:24},children:p.map(t=>(0,s.jsx)(i,{label:t,checked:e.includes(t),onChange:e=>a(t,e)},t))})]})}var h=[`start`,`end`,`top`,`bottom`];function g(){return(0,s.jsx)(s.Fragment,{children:h.map(e=>(0,s.jsx)(i,{label:e,labelPlacement:e},e))})}function _(){return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,s.jsx)(i,{label:`Small`,size:`small`,defaultChecked:!0}),(0,s.jsx)(i,{label:`Medium`,size:`medium`,defaultChecked:!0}),(0,s.jsx)(i,{label:`Large`,size:`large`,defaultChecked:!0})]}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,s.jsx)(i,{label:`Square`,shape:`square`,defaultChecked:!0}),(0,s.jsx)(i,{label:`Rounded`,shape:`rounded`,defaultChecked:!0}),(0,s.jsx)(i,{label:`Circle`,shape:`circle`,defaultChecked:!0})]})]})}function v(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{label:`Disabled`,disabled:!0}),(0,s.jsx)(i,{label:`Disabled and checked`,disabled:!0,defaultChecked:!0}),(0,s.jsx)(i,{label:`Required`,name:`terms`,required:!0})]})}var y=a(Object.assign({"./demos/basic.tsx":c,"./demos/controlled.tsx":u,"./demos/custom-style.tsx":d,"./demos/error.tsx":f,"./demos/indeterminate.tsx":m,"./demos/label-placement.tsx":g,"./demos/sizes-and-shapes.tsx":_,"./demos/states.tsx":v}),Object.assign({"./demos/basic.tsx":`import { Checkbox } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <>
      <Checkbox label="Remember me" />
      <Checkbox label="Checked by default" defaultChecked />
    </>
  );
}
`,"./demos/controlled.tsx":`import { useState } from "react";
import { Checkbox } from "@minerva/lib-core";

export default function ControlledDemo() {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <Checkbox
        label="Subscribe to the newsletter"
        checked={checked}
        onChange={setChecked}
      />
      <span>{checked ? "Subscribed" : "Not subscribed"}</span>
    </>
  );
}
`,"./demos/custom-style.tsx":`import { useState } from "react";
import { Checkbox } from "@minerva/lib-core";
import { IoHeart } from "react-icons/io5";

export default function CustomStyleDemo() {
  const [favorite, setFavorite] = useState(true);

  return (
    <>
      <Checkbox
        label="Custom colors"
        defaultChecked
        boxColor="#7c3aed"
        boxBorderColor="#7c3aed"
        checkmarkColor="#fde68a"
      />
      <Checkbox
        label="Custom icon"
        checked={favorite}
        onChange={setFavorite}
        icon={<IoHeart color="#e11d48" />}
      />
    </>
  );
}
`,"./demos/error.tsx":`import { useState } from "react";
import { Checkbox } from "@minerva/lib-core";

export default function ErrorDemo() {
  const [accepted, setAccepted] = useState(false);

  return (
    <Checkbox
      label="I accept the terms and conditions"
      checked={accepted}
      onChange={setAccepted}
      error={!accepted}
      helperText={
        accepted ? "Thanks!" : "You must accept the terms to continue"
      }
    />
  );
}
`,"./demos/indeterminate.tsx":`import { useState } from "react";
import { Checkbox } from "@minerva/lib-core";

const fruits = ["Apple", "Banana", "Cherry"];

export default function IndeterminateDemo() {
  const [selected, setSelected] = useState<string[]>(["Apple"]);
  const allChecked = selected.length === fruits.length;
  const someChecked = selected.length > 0 && !allChecked;

  const toggle = (fruit: string, checked: boolean) =>
    setSelected((prev) =>
      checked ? [...prev, fruit] : prev.filter((f) => f !== fruit),
    );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Checkbox
        label="Select all"
        checked={allChecked}
        indeterminate={someChecked}
        onChange={(checked) => setSelected(checked ? fruits : [])}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          paddingLeft: 24,
        }}
      >
        {fruits.map((fruit) => (
          <Checkbox
            key={fruit}
            label={fruit}
            checked={selected.includes(fruit)}
            onChange={(checked) => toggle(fruit, checked)}
          />
        ))}
      </div>
    </div>
  );
}
`,"./demos/label-placement.tsx":`import { Checkbox } from "@minerva/lib-core";

const placements = ["start", "end", "top", "bottom"] as const;

export default function LabelPlacementDemo() {
  return (
    <>
      {placements.map((placement) => (
        <Checkbox
          key={placement}
          label={placement}
          labelPlacement={placement}
        />
      ))}
    </>
  );
}
`,"./demos/sizes-and-shapes.tsx":`import { Checkbox } from "@minerva/lib-core";

export default function SizesAndShapesDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <Checkbox label="Small" size="small" defaultChecked />
        <Checkbox label="Medium" size="medium" defaultChecked />
        <Checkbox label="Large" size="large" defaultChecked />
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <Checkbox label="Square" shape="square" defaultChecked />
        <Checkbox label="Rounded" shape="rounded" defaultChecked />
        <Checkbox label="Circle" shape="circle" defaultChecked />
      </div>
    </div>
  );
}
`,"./demos/states.tsx":`import { Checkbox } from "@minerva/lib-core";

export default function StatesDemo() {
  return (
    <>
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled and checked" disabled defaultChecked />
      <Checkbox label="Required" name="terms" required />
    </>
  );
}
`})),b=()=>(0,s.jsx)(o,{id:`checkbox`,demos:y});export{b as default};