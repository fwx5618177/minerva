import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{f as t,t as n}from"./react-vendor-CUe5nroo.js";import{S as r,Y as i}from"./registry-DtD9RDtk.js";import{P as a,a as o,v as s}from"./dist-DAjZNDC0.js";import{i as c,r as l,t as u}from"./DocPage-B1L0vw6V.js";var d=e(t(),1),f=n(),p=[{label:`Edit`,value:`edit`},{label:`Duplicate`,value:`duplicate`},{label:`Archive`,value:`archive`}];function m(){let[e,t]=(0,d.useState)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{items:p,ariaLabel:`Actions`,onSelect:t}),(0,f.jsxs)(`span`,{children:[`Selected: `,e?.label??`none`]})]})}var h=[{label:`Light`,value:`light`},{label:`Dark`,value:`dark`},{label:`System`,value:`system`}];function g(){return(0,f.jsx)(s,{items:h,ariaLabel:`Theme`,menuBgColor:`#1e1b4b`,menuTextColor:`#e0e7ff`,menuBoxShadow:`0 8px 24px rgba(30, 27, 75, 0.4)`,children:(0,f.jsx)(o,{size:`small`,children:`Theme`})})}var _=[{label:`Profile`,value:`profile`},{label:`Settings`,value:`settings`},{label:`Sign out`,value:`sign-out`}];function v(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{items:_,ariaLabel:`Account`,children:(0,f.jsx)(o,{variant:`secondary`,children:`Account ▾`})}),(0,f.jsx)(s,{items:_,ariaLabel:`More actions`,children:(0,f.jsx)(a,{icon:(0,f.jsx)(r,{}),ariaLabel:`More actions`})}),(0,f.jsx)(s,{items:_,ariaLabel:`Account`,children:(0,f.jsx)(`span`,{style:{textDecoration:`underline`,cursor:`pointer`},children:`Text trigger`})})]})}var y=[{label:`First`,value:`1`},{label:`Second`,value:`2`},{label:`Third`,value:`3`}],b=[`down`,`up`,`left`,`right`];function x(){return(0,f.jsx)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`,padding:`120px 96px`},children:b.map(e=>(0,f.jsx)(s,{items:y,direction:e,ariaLabel:e,children:(0,f.jsx)(o,{size:`small`,variant:`secondary`,children:e})},e))})}var S=[{label:`Copy`,value:`copy`},{label:`Paste (clipboard empty)`,value:`paste`,disabled:!0},{label:`Delete`,value:`delete`}];function C(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{items:S,ariaLabel:`Edit`,children:(0,f.jsx)(o,{size:`small`,children:`Disabled item`})}),(0,f.jsx)(s,{items:S,ariaLabel:`Edit`,disabled:!0,children:(0,f.jsx)(o,{size:`small`,disabled:!0,children:`Disabled dropdown`})})]})}var w=c(Object.assign({"./demos/basic.tsx":m,"./demos/custom-menu.tsx":g,"./demos/custom-trigger.tsx":v,"./demos/directions.tsx":x,"./demos/disabled.tsx":C}),Object.assign({"./demos/basic.tsx":`import { useState } from "react";
import { Dropdown, type DropdownOption } from "@minerva/lib-core";

const items: DropdownOption[] = [
  { label: "Edit", value: "edit" },
  { label: "Duplicate", value: "duplicate" },
  { label: "Archive", value: "archive" },
];

export default function BasicDemo() {
  const [selected, setSelected] = useState<DropdownOption>();

  return (
    <>
      <Dropdown items={items} ariaLabel="Actions" onSelect={setSelected} />
      <span>Selected: {selected?.label ?? "none"}</span>
    </>
  );
}
`,"./demos/custom-menu.tsx":`import { Button, Dropdown } from "@minerva/lib-core";

const items = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

export default function CustomMenuDemo() {
  return (
    <Dropdown
      items={items}
      ariaLabel="Theme"
      menuBgColor="#1e1b4b"
      menuTextColor="#e0e7ff"
      menuBoxShadow="0 8px 24px rgba(30, 27, 75, 0.4)"
    >
      <Button size="small">Theme</Button>
    </Dropdown>
  );
}
`,"./demos/custom-trigger.tsx":`import { Button, Dropdown, IconButton } from "@minerva/lib-core";
import { IoEllipsisVertical } from "react-icons/io5";

const items = [
  { label: "Profile", value: "profile" },
  { label: "Settings", value: "settings" },
  { label: "Sign out", value: "sign-out" },
];

export default function CustomTriggerDemo() {
  return (
    <>
      <Dropdown items={items} ariaLabel="Account">
        <Button variant="secondary">Account ▾</Button>
      </Dropdown>
      <Dropdown items={items} ariaLabel="More actions">
        <IconButton icon={<IoEllipsisVertical />} ariaLabel="More actions" />
      </Dropdown>
      <Dropdown items={items} ariaLabel="Account">
        <span style={{ textDecoration: "underline", cursor: "pointer" }}>
          Text trigger
        </span>
      </Dropdown>
    </>
  );
}
`,"./demos/directions.tsx":`import { Button, Dropdown } from "@minerva/lib-core";

const items = [
  { label: "First", value: "1" },
  { label: "Second", value: "2" },
  { label: "Third", value: "3" },
];

const directions = ["down", "up", "left", "right"] as const;

export default function DirectionsDemo() {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        flexWrap: "wrap",
        padding: "120px 96px",
      }}
    >
      {directions.map((direction) => (
        <Dropdown
          key={direction}
          items={items}
          direction={direction}
          ariaLabel={direction}
        >
          <Button size="small" variant="secondary">
            {direction}
          </Button>
        </Dropdown>
      ))}
    </div>
  );
}
`,"./demos/disabled.tsx":`import { Button, Dropdown } from "@minerva/lib-core";

const items = [
  { label: "Copy", value: "copy" },
  { label: "Paste (clipboard empty)", value: "paste", disabled: true },
  { label: "Delete", value: "delete" },
];

export default function DisabledDemo() {
  return (
    <>
      <Dropdown items={items} ariaLabel="Edit">
        <Button size="small">Disabled item</Button>
      </Dropdown>
      <Dropdown items={items} ariaLabel="Edit" disabled>
        <Button size="small" disabled>
          Disabled dropdown
        </Button>
      </Dropdown>
    </>
  );
}
`})),T=()=>{let{t:e}=i();return(0,f.jsx)(u,{id:`dropdown`,demos:w,children:(0,f.jsxs)(`section`,{className:l.section,"aria-labelledby":`accessibility`,children:[(0,f.jsx)(`h2`,{id:`accessibility`,children:e(`docs.dropdown.a11y.title`)}),(0,f.jsx)(`p`,{className:l.prose,children:e(`docs.dropdown.a11y.body`)})]})})};export{T as default};