import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{i,r as ee}from"./iconBase-DWTUFqgC.js";import{Ht as a,ct as o,kt as s}from"./dist-BWNqkmth.js";import{C as c,Y as l}from"./registry-CQpv28AQ.js";import{a as u,c as te,n as ne,o as d,s as f,t as re}from"./DocPage-DGOZswYH.js";function p(){let[e,t]=(0,m.useState)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{items:g,ariaLabel:`Actions`,onSelect:t}),(0,h.jsxs)(`span`,{children:[`Selected: `,e?.label??`none`]})]})}var m,h,g;function _(){return(_=e((()=>{m=t(),a(),h=n(),g=[{label:`Edit`,value:`edit`},{label:`Duplicate`,value:`duplicate`},{label:`Archive`,value:`archive`}]})))()}function ie(){let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{items:b,ariaLabel:`Account`,open:e,onOpenChange:t,children:(0,y.jsx)(r,{size:`small`,variant:`secondary`,children:`Account`})}),(0,y.jsx)(r,{size:`small`,onClick:()=>t(e=>!e),children:e?`Close menu`:`Open menu`}),(0,y.jsxs)(`span`,{children:[`Menu is `,e?`open`:`closed`]})]})}var v,y,b;function x(){return(x=e((()=>{v=t(),a(),y=n(),b=[{label:`Profile`,value:`profile`},{label:`Settings`,value:`settings`},{label:`Sign out`,value:`sign-out`}]})))()}function S(){return(0,C.jsx)(o,{items:w,ariaLabel:`Theme`,menuBgColor:`#1e1b4b`,menuTextColor:`#e0e7ff`,menuBoxShadow:`0 8px 24px rgba(30, 27, 75, 0.4)`,children:(0,C.jsx)(r,{size:`small`,children:`Theme`})})}var C,w;function T(){return(T=e((()=>{a(),C=n(),w=[{label:`Light`,value:`light`},{label:`Dark`,value:`dark`},{label:`System`,value:`system`}]})))()}function E(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(o,{items:O,ariaLabel:`Account`,children:(0,D.jsx)(r,{variant:`secondary`,children:`Account ▾`})}),(0,D.jsx)(o,{items:O,ariaLabel:`More actions`,children:(0,D.jsx)(s,{icon:(0,D.jsx)(c,{}),ariaLabel:`More actions`})}),(0,D.jsx)(o,{items:O,ariaLabel:`Account`,children:(0,D.jsx)(`span`,{style:{textDecoration:`underline`,cursor:`pointer`},children:`Text trigger`})})]})}var D,O;function k(){return(k=e((()=>{a(),l(),D=n(),O=[{label:`Profile`,value:`profile`},{label:`Settings`,value:`settings`},{label:`Sign out`,value:`sign-out`}]})))()}function A(){return(0,j.jsx)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`,padding:`120px 96px`},children:N.map(e=>(0,j.jsx)(o,{items:M,direction:e,ariaLabel:e,children:(0,j.jsx)(r,{size:`small`,variant:`secondary`,children:e})},e))})}var j,M,N;function P(){return(P=e((()=>{a(),j=n(),M=[{label:`First`,value:`1`},{label:`Second`,value:`2`},{label:`Third`,value:`3`}],N=[`down`,`up`,`left`,`right`]})))()}function ae(){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(o,{items:I,ariaLabel:`Edit`,children:(0,F.jsx)(r,{size:`small`,children:`Disabled item`})}),(0,F.jsx)(o,{items:I,ariaLabel:`Edit`,disabled:!0,children:(0,F.jsx)(r,{size:`small`,disabled:!0,children:`Disabled dropdown`})})]})}var F,I;function L(){return(L=e((()=>{a(),F=n(),I=[{label:`Copy`,value:`copy`},{label:`Paste (clipboard empty)`,value:`paste`,disabled:!0},{label:`Delete`,value:`delete`}]})))()}var R;function z(){return(z=e((()=>{R=`import { useState } from "react";
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
`})))()}var B;function V(){return(V=e((()=>{B=`import { useState } from "react";
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
`})))()}var H;function U(){return(U=e((()=>{H=`import { Button, Dropdown } from "@minerva/lib-core";

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
`})))()}var W;function G(){return(G=e((()=>{W=`import { Button, Dropdown, IconButton } from "@minerva/lib-core";
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
`})))()}var K;function q(){return(q=e((()=>{K=`import { Button, Dropdown } from "@minerva/lib-core";

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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Button, Dropdown } from "@minerva/lib-core";

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
`})))()}var X,Z,Q;function $(){return($=e((()=>{_(),x(),T(),k(),P(),L(),z(),V(),U(),G(),q(),Y(),t(),ee(),ne(),te(),d(),X=n(),Z=f(Object.assign({"./demos/basic.tsx":p,"./demos/controlled.tsx":ie,"./demos/custom-menu.tsx":S,"./demos/custom-trigger.tsx":E,"./demos/directions.tsx":A,"./demos/disabled.tsx":ae}),Object.assign({"./demos/basic.tsx":R,"./demos/controlled.tsx":B,"./demos/custom-menu.tsx":H,"./demos/custom-trigger.tsx":W,"./demos/directions.tsx":K,"./demos/disabled.tsx":J})),Q=()=>{let{t:e}=i();return(0,X.jsx)(re,{id:`dropdown`,demos:Z,children:(0,X.jsxs)(`section`,{className:u.section,"aria-labelledby":`accessibility`,children:[(0,X.jsx)(`h2`,{id:`accessibility`,children:e(`docs.dropdown.a11y.title`)}),(0,X.jsx)(`p`,{className:u.prose,children:e(`docs.dropdown.a11y.body`)})]})})}})))()}$();export{Q as default};