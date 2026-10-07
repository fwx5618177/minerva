import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{s as r}from"./ConfigProvider-DJ6uO8m_-B80Bd_Y7.js";import{G as i,J as a,Vt as o,m as s}from"./dist-dg6ajl7p.js";import{B as c,C as l,P as u,m as d}from"./lu-NZUEGFhg.js";import{c as f,n as p,s as m,t as h}from"./DocPage-Kqmidh_0.js";function g(){return(0,_.jsx)(a,{items:[{key:`edit`,label:`Edit`,icon:(0,_.jsx)(l,{}),shortcut:`⌘E`},{key:`copy`,label:`Duplicate`,icon:(0,_.jsx)(d,{}),shortcut:`⌘D`},{type:`separator`,key:`sep`},{key:`delete`,label:`Delete`,icon:(0,_.jsx)(u,{})}],onSelect:e=>i.info(`Selected: ${e.key}`),children:(0,_.jsx)(r,{variant:`secondary`,children:`Actions`})})}var _;function v(){return(v=e((()=>{o(),c(),_=n()})))()}function y(){return(0,b.jsx)(s,{items:[{key:`open`,label:`Open in new tab`},{key:`rename`,label:`Rename`,shortcut:`F2`},{type:`separator`,key:`sep`},{key:`delete`,label:`Delete`}],onSelect:e=>i.info(`Selected: ${e.key}`),children:(0,b.jsx)(`div`,{style:{display:`grid`,placeItems:`center`,height:120,border:`1px dashed var(--border-color)`,borderRadius:8},children:`Right-click here`})})}var b;function x(){return(x=e((()=>{o(),b=n()})))()}function S(){let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,w.jsx)(a,{open:e,onOpenChange:t,items:[{key:`a`,label:`Archive`},{key:`b`,label:`Move…`}],children:(0,w.jsx)(r,{variant:`secondary`,children:`Menu`})}),(0,w.jsx)(`span`,{children:e?`Open`:`Closed`})]})}var C,w;function T(){return(T=e((()=>{C=t(),o(),w=n()})))()}function E(){return(0,D.jsx)(a,{size:`small`,side:`bottom`,align:`start`,items:[{type:`group`,key:`file`,label:`File`,items:[{key:`new`,label:`New`},{key:`open`,label:`Open…`}]},{type:`separator`,key:`sep`},{key:`export`,label:`Export as`,children:[{key:`csv`,label:`CSV`},{key:`json`,label:`JSON`},{key:`pdf`,label:`PDF`,disabled:!0}]}],onSelect:e=>i.info(`Selected: ${e.key}`),children:(0,D.jsx)(r,{variant:`secondary`,children:`File`})})}var D;function O(){return(O=e((()=>{o(),D=n()})))()}var k;function A(){return(A=e((()=>{k=`import { Button, Menu, message } from "@minerva/lib-core";
import { LuCopy, LuPencil, LuTrash2 } from "react-icons/lu";

export default function BasicDemo() {
  return (
    <Menu
      items={[
        { key: "edit", label: "Edit", icon: <LuPencil />, shortcut: "⌘E" },
        { key: "copy", label: "Duplicate", icon: <LuCopy />, shortcut: "⌘D" },
        { type: "separator", key: "sep" },
        { key: "delete", label: "Delete", icon: <LuTrash2 /> },
      ]}
      onSelect={(item) => message.info(\`Selected: \${item.key}\`)}
    >
      <Button variant="secondary">Actions</Button>
    </Menu>
  );
}
`})))()}var j;function M(){return(M=e((()=>{j=`import { ContextMenu, message } from "@minerva/lib-core";

export default function ContextMenuDemo() {
  return (
    <ContextMenu
      items={[
        { key: "open", label: "Open in new tab" },
        { key: "rename", label: "Rename", shortcut: "F2" },
        { type: "separator", key: "sep" },
        { key: "delete", label: "Delete" },
      ]}
      onSelect={(item) => message.info(\`Selected: \${item.key}\`)}
    >
      <div
        style={{
          display: "grid",
          placeItems: "center",
          height: 120,
          border: "1px dashed var(--border-color)",
          borderRadius: 8,
        }}
      >
        Right-click here
      </div>
    </ContextMenu>
  );
}
`})))()}var N;function P(){return(P=e((()=>{N=`import { useState } from "react";
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
        <Button variant="secondary">Menu</Button>
      </Menu>
      <span>{open ? "Open" : "Closed"}</span>
    </div>
  );
}
`})))()}var F;function I(){return(I=e((()=>{F=`import { Button, Menu, message } from "@minerva/lib-core";

export default function GroupsDemo() {
  return (
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
      onSelect={(item) => message.info(\`Selected: \${item.key}\`)}
    >
      <Button variant="secondary">File</Button>
    </Menu>
  );
}
`})))()}var L,R,z;function B(){return(B=e((()=>{v(),x(),T(),O(),A(),M(),P(),I(),t(),p(),f(),L=n(),R=m(Object.assign({"./demos/basic.tsx":g,"./demos/context-menu.tsx":y,"./demos/controlled.tsx":S,"./demos/groups.tsx":E}),Object.assign({"./demos/basic.tsx":k,"./demos/context-menu.tsx":j,"./demos/controlled.tsx":N,"./demos/groups.tsx":F})),z=()=>(0,L.jsx)(h,{id:`menu`,demos:R})})))()}B();export{z as default};