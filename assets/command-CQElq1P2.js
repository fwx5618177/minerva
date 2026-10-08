import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{n as r,t as i}from"./Button-DP6INRXF.js";import{n as a,t as o}from"./Command-DHbyEf9y.js";import{c as s,n as c,s as l,t as u}from"./DocPage-DEXoN4OO.js";function d(){let[e,t]=(0,f.useState)(!1),[n,r]=(0,f.useState)(`—`);return(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,p.jsx)(i,{onClick:()=>t(!0),children:`Search…`}),(0,p.jsxs)(`span`,{children:[`Selected: `,n]}),(0,p.jsx)(a,{open:e,onOpenChange:t,items:m,onSelect:e=>r(e.title)})]})}var f,p,m;function h(){return(h=e((()=>{f=t(),r(),o(),p=n(),m=[{id:`books`,title:`Books`,description:`/books`,group:`Content`},{id:`reviews`,title:`Reviews`,description:`/reviews`,group:`Content`},{id:`users`,title:`Users`,description:`/users`,group:`Admin`},{id:`seo`,title:`SEO settings`,description:`/seo`,keywords:`sitemap meta`}]})))()}function g(){let[e,t]=(0,_.useState)(null);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`p`,{children:[`Press `,(0,v.jsx)(`kbd`,{children:`Ctrl`}),` / `,(0,v.jsx)(`kbd`,{children:`⌘`}),` + `,(0,v.jsx)(`kbd`,{children:`K`}),` to open the palette.`]}),(0,v.jsx)(a,{items:y,shortcut:`mod+k`,shortcutLabel:`⌘K`,title:`Quick actions`,onSelect:e=>t(e.title)}),(0,v.jsx)(`p`,{"aria-live":`polite`,children:e?`Selected: ${e}`:`Nothing selected yet`})]})}var _,v,y;function b(){return(b=e((()=>{_=t(),o(),v=n(),y=[{id:`new`,title:`New document`},{id:`open`,title:`Open recent`,description:`Last 10 documents`},{id:`theme`,title:`Toggle theme`,keywords:`dark light`}]})))()}var x;function S(){return(S=e((()=>{x=`import { useState } from "react";
import { Button, CommandDialog, type CommandItem } from "@minerva/lib-core";

const ITEMS: CommandItem[] = [
  { id: "books", title: "Books", description: "/books", group: "Content" },
  {
    id: "reviews",
    title: "Reviews",
    description: "/reviews",
    group: "Content",
  },
  { id: "users", title: "Users", description: "/users", group: "Admin" },
  {
    id: "seo",
    title: "SEO settings",
    description: "/seo",
    keywords: "sitemap meta",
  },
];

export default function BasicDemo() {
  const [open, setOpen] = useState(false);
  const [last, setLast] = useState("—");
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button onClick={() => setOpen(true)}>Search…</Button>
      <span>Selected: {last}</span>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        items={ITEMS}
        onSelect={(item) => setLast(item.title)}
      />
    </div>
  );
}
`})))()}var C;function w(){return(w=e((()=>{C=`import { useState } from "react";
import { CommandDialog, type CommandItem } from "@minerva/lib-core";

const ITEMS: CommandItem[] = [
  { id: "new", title: "New document" },
  { id: "open", title: "Open recent", description: "Last 10 documents" },
  { id: "theme", title: "Toggle theme", keywords: "dark light" },
];

export default function ShortcutDemo() {
  const [last, setLast] = useState<string | null>(null);
  return (
    <>
      <p>
        Press <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>K</kbd> to open the palette.
      </p>
      <CommandDialog
        items={ITEMS}
        shortcut="mod+k"
        shortcutLabel="⌘K"
        title="Quick actions"
        onSelect={(item) => setLast(item.title)}
      />
      <p aria-live="polite">
        {last ? \`Selected: \${last}\` : "Nothing selected yet"}
      </p>
    </>
  );
}
`})))()}var T,E,D;function O(){return(O=e((()=>{h(),b(),S(),w(),t(),c(),s(),T=n(),E=l(Object.assign({"./demos/basic.tsx":d,"./demos/shortcut.tsx":g}),Object.assign({"./demos/basic.tsx":x,"./demos/shortcut.tsx":C})),D=()=>(0,T.jsx)(u,{id:`command`,demos:E})})))()}O();export{D as default};