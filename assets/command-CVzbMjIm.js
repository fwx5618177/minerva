import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{Gt as i,Rt as a}from"./dist-DkgrNLMS.js";import{c as o,n as s,s as c,t as l}from"./DocPage-Bnv84vTs.js";function u(){let[e,t]=(0,d.useState)(!1),[n,a]=(0,d.useState)(`—`);return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,f.jsx)(r,{onClick:()=>t(!0),children:`Search…`}),(0,f.jsxs)(`span`,{children:[`Selected: `,n]}),(0,f.jsx)(i,{open:e,onOpenChange:t,items:p,onSelect:e=>a(e.title)})]})}var d,f,p;function m(){return(m=e((()=>{d=t(),a(),f=n(),p=[{id:`books`,title:`Books`,description:`/books`,group:`Content`},{id:`reviews`,title:`Reviews`,description:`/reviews`,group:`Content`},{id:`users`,title:`Users`,description:`/users`,group:`Admin`},{id:`seo`,title:`SEO settings`,description:`/seo`,keywords:`sitemap meta`}]})))()}function h(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`p`,{children:[`Press `,(0,g.jsx)(`kbd`,{children:`Ctrl`}),` / `,(0,g.jsx)(`kbd`,{children:`⌘`}),` + `,(0,g.jsx)(`kbd`,{children:`K`}),` to open the palette.`]}),(0,g.jsx)(i,{items:_,shortcut:`mod+k`,shortcutLabel:`⌘K`,title:`Quick actions`,onSelect:e=>console.log(e.id)})]})}var g,_;function v(){return(v=e((()=>{a(),g=n(),_=[{id:`new`,title:`New document`},{id:`open`,title:`Open recent`,description:`Last 10 documents`},{id:`theme`,title:`Toggle theme`,keywords:`dark light`}]})))()}var y;function b(){return(b=e((()=>{y=`import { useState } from "react";
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
`})))()}var x;function S(){return(S=e((()=>{x=`import { CommandDialog, type CommandItem } from "@minerva/lib-core";

const ITEMS: CommandItem[] = [
  { id: "new", title: "New document" },
  { id: "open", title: "Open recent", description: "Last 10 documents" },
  { id: "theme", title: "Toggle theme", keywords: "dark light" },
];

export default function ShortcutDemo() {
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
        onSelect={(item) => console.log(item.id)}
      />
    </>
  );
}
`})))()}var C,w,T;function E(){return(E=e((()=>{m(),v(),b(),S(),t(),s(),o(),C=n(),w=c(Object.assign({"./demos/basic.tsx":u,"./demos/shortcut.tsx":h}),Object.assign({"./demos/basic.tsx":y,"./demos/shortcut.tsx":x})),T=()=>(0,C.jsx)(l,{id:`command`,demos:w})})))()}E();export{T as default};