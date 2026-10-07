import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{Z as i,w as a}from"./registry-BWHeIt51.js";import{A as o,D as ee,Rt as s,Vt as c,Xt as te,_ as l}from"./dist-DkgrNLMS.js";import{E as ne,P as re,R as ie,W as u,h as ae,v as oe}from"./lu-ChkgBQsL.js";import{c as se,n as ce,s as le,t as ue}from"./DocPage-Bnv84vTs.js";function de(){let[e,t]=(0,d.useState)();return(0,f.jsxs)(l,{gap:4,wrap:!0,children:[(0,f.jsx)(c,{items:[{key:`edit`,label:`Edit`,icon:(0,f.jsx)(ne,{}),shortcut:`⌘E`},{key:`copy`,label:`Duplicate`,icon:(0,f.jsx)(ae,{}),shortcut:`⌘D`},{type:`separator`,key:`sep`},{key:`delete`,label:`Delete`,icon:(0,f.jsx)(ie,{})}],onSelect:e=>t(e.key),children:(0,f.jsx)(r,{color:`neutral`,variant:`outline`,children:`Actions`})}),(0,f.jsxs)(`span`,{role:`status`,children:[`Selected: `,e??`none`]})]})}var d,f;function p(){return(p=e((()=>{d=t(),s(),u(),f=n()})))()}function fe(){let[e,t]=(0,m.useState)(!0),[n,i]=(0,m.useState)(!1),[a,o]=(0,m.useState)(`100`);return(0,h.jsxs)(l,{gap:4,wrap:!0,children:[(0,h.jsx)(c,{align:`start`,items:[{type:`checkbox`,key:`grid`,label:`Show grid`,shortcut:`⌘'`,checked:e,onCheckedChange:t},{type:`checkbox`,key:`rulers`,label:`Show rulers`,checked:n,onCheckedChange:i},{type:`separator`,key:`sep`},{type:`radio-group`,key:`zoom`,label:`Zoom`,value:a,onValueChange:o,items:[{value:`50`,label:`50%`},{value:`100`,label:`100%`},{value:`200`,label:`200%`}]}],children:(0,h.jsx)(r,{color:`neutral`,variant:`outline`,children:`View`})}),(0,h.jsxs)(`span`,{role:`status`,children:[`Grid: `,e?`on`:`off`,` · Rulers: `,n?`on`:`off`,` · Zoom: `,a,`%`]})]})}var m,h;function g(){return(g=e((()=>{m=t(),s(),h=n()})))()}function pe(){let[e,t]=(0,_.useState)(),[n,i]=(0,_.useState)(!1);return(0,v.jsxs)(ee,{gap:4,children:[(0,v.jsx)(o,{items:[{key:`open`,label:`Open in new tab`},{key:`rename`,label:`Rename`,shortcut:`F2`},{type:`checkbox`,key:`pin`,label:`Pinned`,checked:n,onCheckedChange:i},{key:`copy`,label:`Copy`,children:[{key:`copy-link`,label:`Link`},{key:`copy-path`,label:`Path`}]},{type:`separator`,key:`sep`},{key:`delete`,label:`Delete`}],onSelect:e=>t(e.key),children:(0,v.jsxs)(`div`,{style:{display:`grid`,placeItems:`center`,alignContent:`center`,gap:8,height:120,border:`1px dashed var(--border-color)`,borderRadius:8},children:[(0,v.jsx)(`span`,{children:`Right-click here`}),(0,v.jsx)(r,{size:`small`,color:`neutral`,variant:`outline`,children:`Or focus me and press Shift+F10`})]})}),(0,v.jsxs)(`span`,{role:`status`,children:[`Selected: `,e??`none`,` · Pinned: `,n?`yes`:`no`]})]})}var _,v;function y(){return(y=e((()=>{_=t(),s(),v=n()})))()}function me(){let[e,t]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,x.jsx)(c,{open:e,onOpenChange:t,items:[{key:`a`,label:`Archive`},{key:`b`,label:`Move…`}],children:(0,x.jsx)(r,{color:`neutral`,variant:`outline`,children:`Menu`})}),(0,x.jsx)(`span`,{children:e?`Open`:`Closed`})]})}var b,x;function S(){return(S=e((()=>{b=t(),s(),x=n()})))()}function he(){return(0,C.jsxs)(l,{gap:4,children:[(0,C.jsx)(c,{items:w,align:`start`,children:(0,C.jsx)(r,{size:`small`,color:`neutral`,variant:`outline`,children:`Disabled item`})}),(0,C.jsx)(c,{items:w,disabled:!0,children:(0,C.jsx)(r,{size:`small`,color:`neutral`,variant:`outline`,children:`Disabled menu`})})]})}var C,w;function T(){return(T=e((()=>{s(),C=n(),w=[{key:`copy`,label:`Copy`},{key:`paste`,label:`Paste (clipboard empty)`,disabled:!0},{key:`delete`,label:`Delete`}]})))()}function ge(){let[e,t]=(0,E.useState)();return(0,D.jsxs)(l,{gap:4,wrap:!0,children:[(0,D.jsx)(c,{size:`small`,side:`bottom`,align:`start`,items:[{type:`group`,key:`file`,label:`File`,items:[{key:`new`,label:`New`},{key:`open`,label:`Open…`}]},{type:`separator`,key:`sep`},{key:`export`,label:`Export as`,children:[{key:`csv`,label:`CSV`},{key:`json`,label:`JSON`},{key:`pdf`,label:`PDF`,disabled:!0}]}],onSelect:e=>t(e.key),children:(0,D.jsx)(r,{color:`neutral`,variant:`outline`,children:`File`})}),(0,D.jsxs)(`span`,{role:`status`,children:[`Selected: `,e??`none`]})]})}var E,D;function O(){return(O=e((()=>{E=t(),s(),D=n()})))()}function _e(){return(0,k.jsx)(l,{gap:4,wrap:!0,style:{padding:`120px 96px`},children:A.map(e=>(0,k.jsx)(c,{items:j,side:e,align:`start`,children:(0,k.jsx)(r,{size:`small`,color:`neutral`,variant:`outline`,children:e})},e))})}var k,A,j;function M(){return(M=e((()=>{s(),k=n(),A=[`bottom`,`top`,`left`,`right`],j=[{key:`first`,label:`First`},{key:`second`,label:`Second`},{key:`third`,label:`Third`}]})))()}function ve(){let[e,t]=(0,ye.useState)();return(0,N.jsxs)(l,{gap:4,wrap:!0,children:[(0,N.jsx)(c,{align:`start`,items:P,onSelect:e=>t(e.key),children:(0,N.jsx)(r,{color:`neutral`,variant:`outline`,children:`File actions`})}),(0,N.jsx)(c,{dir:`rtl`,align:`start`,items:P,onSelect:e=>t(e.key),children:(0,N.jsx)(r,{color:`neutral`,variant:`outline`,children:`RTL`})}),(0,N.jsxs)(`span`,{role:`status`,children:[`Selected: `,e??`none`]})]})}var ye,N,P;function F(){return(F=e((()=>{ye=t(),s(),u(),N=n(),P=[{key:`rename`,label:`Rename`,shortcut:`F2`},{key:`move`,label:`Move to`,icon:(0,N.jsx)(oe,{}),children:[{key:`inbox`,label:`Inbox`},{key:`archive`,label:`Archive`},{key:`projects`,label:`Projects`,children:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`}]}]},{key:`share`,label:`Share`,icon:(0,N.jsx)(re,{}),children:[{key:`email`,label:`Email`},{key:`link`,label:`Copy link`}]},{type:`separator`,key:`sep`},{key:`delete`,label:`Delete`}]})))()}function be(){return(0,I.jsxs)(l,{gap:4,children:[(0,I.jsx)(c,{items:L,align:`start`,children:(0,I.jsx)(r,{color:`neutral`,variant:`outline`,children:`Account ▾`})}),(0,I.jsx)(c,{items:L,ariaLabel:`More actions`,children:(0,I.jsx)(te,{icon:(0,I.jsx)(a,{}),label:`More actions`})})]})}var I,L;function R(){return(R=e((()=>{s(),i(),I=n(),L=[{key:`profile`,label:`Profile`},{key:`settings`,label:`Settings`},{type:`separator`,key:`sep`},{key:`sign-out`,label:`Sign out`}]})))()}var z;function B(){return(B=e((()=>{z=`import { useState } from "react";
import { Button, HStack, Menu } from "@minerva/lib-core";
import { LuCopy, LuPencil, LuTrash2 } from "react-icons/lu";

export default function BasicDemo() {
  const [selected, setSelected] = useState<string>();
  return (
    <HStack gap={4} wrap>
      <Menu
        items={[
          { key: "edit", label: "Edit", icon: <LuPencil />, shortcut: "⌘E" },
          { key: "copy", label: "Duplicate", icon: <LuCopy />, shortcut: "⌘D" },
          { type: "separator", key: "sep" },
          { key: "delete", label: "Delete", icon: <LuTrash2 /> },
        ]}
        onSelect={(item) => setSelected(item.key)}
      >
        <Button color="neutral" variant="outline">
          Actions
        </Button>
      </Menu>
      <span role="status">Selected: {selected ?? "none"}</span>
    </HStack>
  );
}
`})))()}var V;function H(){return(H=e((()=>{V=`import { useState } from "react";
import { Button, HStack, Menu } from "@minerva/lib-core";

export default function CheckboxRadioDemo() {
  const [showGrid, setShowGrid] = useState(true);
  const [showRulers, setShowRulers] = useState(false);
  const [zoom, setZoom] = useState("100");
  return (
    <HStack gap={4} wrap>
      <Menu
        align="start"
        items={[
          {
            type: "checkbox",
            key: "grid",
            label: "Show grid",
            shortcut: "⌘'",
            checked: showGrid,
            onCheckedChange: setShowGrid,
          },
          {
            type: "checkbox",
            key: "rulers",
            label: "Show rulers",
            checked: showRulers,
            onCheckedChange: setShowRulers,
          },
          { type: "separator", key: "sep" },
          {
            type: "radio-group",
            key: "zoom",
            label: "Zoom",
            value: zoom,
            onValueChange: setZoom,
            items: [
              { value: "50", label: "50%" },
              { value: "100", label: "100%" },
              { value: "200", label: "200%" },
            ],
          },
        ]}
      >
        <Button color="neutral" variant="outline">
          View
        </Button>
      </Menu>
      <span role="status">
        Grid: {showGrid ? "on" : "off"} · Rulers: {showRulers ? "on" : "off"} ·
        Zoom: {zoom}%
      </span>
    </HStack>
  );
}
`})))()}var U;function W(){return(W=e((()=>{U=`import { useState } from "react";
import { Button, ContextMenu, VStack } from "@minerva/lib-core";

export default function ContextMenuDemo() {
  const [selected, setSelected] = useState<string>();
  const [pinned, setPinned] = useState(false);
  return (
    <VStack gap={4}>
      <ContextMenu
        items={[
          { key: "open", label: "Open in new tab" },
          { key: "rename", label: "Rename", shortcut: "F2" },
          {
            type: "checkbox",
            key: "pin",
            label: "Pinned",
            checked: pinned,
            onCheckedChange: setPinned,
          },
          {
            key: "copy",
            label: "Copy",
            children: [
              { key: "copy-link", label: "Link" },
              { key: "copy-path", label: "Path" },
            ],
          },
          { type: "separator", key: "sep" },
          { key: "delete", label: "Delete" },
        ]}
        onSelect={(item) => setSelected(item.key)}
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
            alignContent: "center",
            gap: 8,
            height: 120,
            border: "1px dashed var(--border-color)",
            borderRadius: 8,
          }}
        >
          <span>Right-click here</span>
          <Button size="small" color="neutral" variant="outline">
            Or focus me and press Shift+F10
          </Button>
        </div>
      </ContextMenu>
      <span role="status">
        Selected: {selected ?? "none"} · Pinned: {pinned ? "yes" : "no"}
      </span>
    </VStack>
  );
}
`})))()}var G;function K(){return(K=e((()=>{G=`import { useState } from "react";
import { Button, Menu } from "@minerva/lib-core";

export default function ControlledDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Menu
        open={open}
        onOpenChange={setOpen}
        items={[
          { key: "a", label: "Archive" },
          { key: "b", label: "Move…" },
        ]}
      >
        <Button color="neutral" variant="outline">
          Menu
        </Button>
      </Menu>
      <span>{open ? "Open" : "Closed"}</span>
    </div>
  );
}
`})))()}var q;function J(){return(J=e((()=>{q=`import { Button, HStack, Menu } from "@minerva/lib-core";

const items = [
  { key: "copy", label: "Copy" },
  { key: "paste", label: "Paste (clipboard empty)", disabled: true },
  { key: "delete", label: "Delete" },
];

export default function DisabledDemo() {
  return (
    <HStack gap={4}>
      <Menu items={items} align="start">
        <Button size="small" color="neutral" variant="outline">
          Disabled item
        </Button>
      </Menu>
      <Menu items={items} disabled>
        <Button size="small" color="neutral" variant="outline">
          Disabled menu
        </Button>
      </Menu>
    </HStack>
  );
}
`})))()}var Y;function X(){return(X=e((()=>{Y=`import { useState } from "react";
import { Button, HStack, Menu } from "@minerva/lib-core";

export default function GroupsDemo() {
  const [selected, setSelected] = useState<string>();
  return (
    <HStack gap={4} wrap>
      <Menu
        size="small"
        side="bottom"
        align="start"
        items={[
          {
            type: "group",
            key: "file",
            label: "File",
            items: [
              { key: "new", label: "New" },
              { key: "open", label: "Open…" },
            ],
          },
          { type: "separator", key: "sep" },
          {
            key: "export",
            label: "Export as",
            children: [
              { key: "csv", label: "CSV" },
              { key: "json", label: "JSON" },
              { key: "pdf", label: "PDF", disabled: true },
            ],
          },
        ]}
        onSelect={(item) => setSelected(item.key)}
      >
        <Button color="neutral" variant="outline">
          File
        </Button>
      </Menu>
      <span role="status">Selected: {selected ?? "none"}</span>
    </HStack>
  );
}
`})))()}var Z;function Q(){return(Q=e((()=>{Z=`import { Button, HStack, Menu, type MenuSide } from "@minerva/lib-core";

const sides: MenuSide[] = ["bottom", "top", "left", "right"];
const items = [
  { key: "first", label: "First" },
  { key: "second", label: "Second" },
  { key: "third", label: "Third" },
];

export default function PlacementDemo() {
  return (
    <HStack gap={4} wrap style={{ padding: "120px 96px" }}>
      {sides.map((side) => (
        <Menu key={side} items={items} side={side} align="start">
          <Button size="small" color="neutral" variant="outline">
            {side}
          </Button>
        </Menu>
      ))}
    </HStack>
  );
}
`})))()}var $;function xe(){return(xe=e((()=>{$=`import { useState } from "react";
import { Button, HStack, Menu, type MenuEntry } from "@minerva/lib-core";
import { LuFolderInput, LuShare2 } from "react-icons/lu";

const items: MenuEntry[] = [
  { key: "rename", label: "Rename", shortcut: "F2" },
  {
    key: "move",
    label: "Move to",
    icon: <LuFolderInput />,
    children: [
      { key: "inbox", label: "Inbox" },
      { key: "archive", label: "Archive" },
      {
        key: "projects",
        label: "Projects",
        children: [
          { key: "alpha", label: "Alpha" },
          { key: "beta", label: "Beta" },
        ],
      },
    ],
  },
  {
    key: "share",
    label: "Share",
    icon: <LuShare2 />,
    children: [
      { key: "email", label: "Email" },
      { key: "link", label: "Copy link" },
    ],
  },
  { type: "separator", key: "sep" },
  { key: "delete", label: "Delete" },
];

export default function SubmenusDemo() {
  const [selected, setSelected] = useState<string>();
  return (
    <HStack gap={4} wrap>
      <Menu
        align="start"
        items={items}
        onSelect={(item) => setSelected(item.key)}
      >
        <Button color="neutral" variant="outline">
          File actions
        </Button>
      </Menu>
      <Menu
        dir="rtl"
        align="start"
        items={items}
        onSelect={(item) => setSelected(item.key)}
      >
        <Button color="neutral" variant="outline">
          RTL
        </Button>
      </Menu>
      <span role="status">Selected: {selected ?? "none"}</span>
    </HStack>
  );
}
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`import { Button, HStack, IconButton, Menu } from "@minerva/lib-core";
import { IoEllipsisVertical } from "react-icons/io5";

const items = [
  { key: "profile", label: "Profile" },
  { key: "settings", label: "Settings" },
  { type: "separator" as const, key: "sep" },
  { key: "sign-out", label: "Sign out" },
];

export default function TriggersDemo() {
  return (
    <HStack gap={4}>
      <Menu items={items} align="start">
        <Button color="neutral" variant="outline">
          Account ▾
        </Button>
      </Menu>
      <Menu items={items} ariaLabel="More actions">
        <IconButton icon={<IoEllipsisVertical />} label="More actions" />
      </Menu>
    </HStack>
  );
}
`})))()}var we,Te,Ee;function De(){return(De=e((()=>{p(),g(),y(),S(),T(),O(),M(),F(),R(),B(),H(),W(),K(),J(),X(),Q(),xe(),Ce(),t(),ce(),se(),we=n(),Te=le(Object.assign({"./demos/basic.tsx":de,"./demos/checkbox-radio.tsx":fe,"./demos/context-menu.tsx":pe,"./demos/controlled.tsx":me,"./demos/disabled.tsx":he,"./demos/groups.tsx":ge,"./demos/placement.tsx":_e,"./demos/submenus.tsx":ve,"./demos/triggers.tsx":be}),Object.assign({"./demos/basic.tsx":z,"./demos/checkbox-radio.tsx":V,"./demos/context-menu.tsx":U,"./demos/controlled.tsx":G,"./demos/disabled.tsx":q,"./demos/groups.tsx":Y,"./demos/placement.tsx":Z,"./demos/submenus.tsx":$,"./demos/triggers.tsx":Se})),Ee=()=>(0,we.jsx)(ue,{id:`menu`,demos:Te})})))()}De();export{Ee as default};