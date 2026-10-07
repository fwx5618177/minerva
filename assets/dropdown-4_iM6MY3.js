import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{h as r,j as i,t as a}from"./dist-C3Cy1YK6.js";import{J as o,x as s}from"./registry-DXcVqgdp.js";import{i as c,r as l,t as u}from"./DocPage-DUnq_TLt.js";var d=e(t(),1),f=n(),p=[{label:`Edit`,value:`edit`},{label:`Duplicate`,value:`duplicate`},{label:`Archive`,value:`archive`}];function m(){let[e,t]=(0,d.useState)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{items:p,ariaLabel:`Actions`,onSelect:t}),(0,f.jsxs)(`span`,{children:[`Selected: `,e?.label??`none`]})]})}var h=[{label:`Profile`,value:`profile`},{label:`Settings`,value:`settings`},{label:`Sign out`,value:`sign-out`}];function g(){let[e,t]=(0,d.useState)(!1);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{items:h,ariaLabel:`Account`,open:e,onOpenChange:t,children:(0,f.jsx)(r,{size:`small`,variant:`secondary`,children:`Account`})}),(0,f.jsx)(r,{size:`small`,onClick:()=>t(e=>!e),children:e?`Close menu`:`Open menu`}),(0,f.jsxs)(`span`,{children:[`Menu is `,e?`open`:`closed`]})]})}var _=[{label:`Light`,value:`light`},{label:`Dark`,value:`dark`},{label:`System`,value:`system`}];function v(){return(0,f.jsx)(a,{items:_,ariaLabel:`Theme`,menuBgColor:`#1e1b4b`,menuTextColor:`#e0e7ff`,menuBoxShadow:`0 8px 24px rgba(30, 27, 75, 0.4)`,children:(0,f.jsx)(r,{size:`small`,children:`Theme`})})}var y=[{label:`Profile`,value:`profile`},{label:`Settings`,value:`settings`},{label:`Sign out`,value:`sign-out`}];function b(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{items:y,ariaLabel:`Account`,children:(0,f.jsx)(r,{variant:`secondary`,children:`Account ▾`})}),(0,f.jsx)(a,{items:y,ariaLabel:`More actions`,children:(0,f.jsx)(i,{icon:(0,f.jsx)(s,{}),ariaLabel:`More actions`})}),(0,f.jsx)(a,{items:y,ariaLabel:`Account`,children:(0,f.jsx)(`span`,{style:{textDecoration:`underline`,cursor:`pointer`},children:`Text trigger`})})]})}var x=[{label:`First`,value:`1`},{label:`Second`,value:`2`},{label:`Third`,value:`3`}],S=[`down`,`up`,`left`,`right`];function C(){return(0,f.jsx)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`,padding:`120px 96px`},children:S.map(e=>(0,f.jsx)(a,{items:x,direction:e,ariaLabel:e,children:(0,f.jsx)(r,{size:`small`,variant:`secondary`,children:e})},e))})}var w=[{label:`Copy`,value:`copy`},{label:`Paste (clipboard empty)`,value:`paste`,disabled:!0},{label:`Delete`,value:`delete`}];function T(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{items:w,ariaLabel:`Edit`,children:(0,f.jsx)(r,{size:`small`,children:`Disabled item`})}),(0,f.jsx)(a,{items:w,ariaLabel:`Edit`,disabled:!0,children:(0,f.jsx)(r,{size:`small`,disabled:!0,children:`Disabled dropdown`})})]})}var E=c(Object.assign({"./demos/basic.tsx":m,"./demos/controlled.tsx":g,"./demos/custom-menu.tsx":v,"./demos/custom-trigger.tsx":b,"./demos/directions.tsx":C,"./demos/disabled.tsx":T}),Object.assign({"./demos/basic.tsx":`import { useState } from "react";
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
`,"./demos/controlled.tsx":`import { useState } from "react";
import { Button, Dropdown, type DropdownOption } from "@minerva/lib-core";

const items: DropdownOption[] = [
  { label: "Profile", value: "profile" },
  { label: "Settings", value: "settings" },
  { label: "Sign out", value: "sign-out" },
];

export default function ControlledDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dropdown
        items={items}
        ariaLabel="Account"
        open={open}
        onOpenChange={setOpen}
      >
        <Button size="small" variant="secondary">
          Account
        </Button>
      </Dropdown>
      <Button size="small" onClick={() => setOpen((prev) => !prev)}>
        {open ? "Close menu" : "Open menu"}
      </Button>
      <span>Menu is {open ? "open" : "closed"}</span>
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
`})),D=()=>{let{t:e}=o();return(0,f.jsx)(u,{id:`dropdown`,demos:E,children:(0,f.jsxs)(`section`,{className:l.section,"aria-labelledby":`accessibility`,children:[(0,f.jsx)(`h2`,{id:`accessibility`,children:e(`docs.dropdown.a11y.title`)}),(0,f.jsx)(`p`,{className:l.prose,children:e(`docs.dropdown.a11y.body`)})]})})};export{D as default};