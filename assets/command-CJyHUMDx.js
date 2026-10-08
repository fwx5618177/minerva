import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{n as r,t as i}from"./Button-BfJfx3BZ.js";import{n as a,t as o}from"./Command-DZ7KV-rD.js";import{m as s,n as c,p as l,t as u}from"./DocPage-44Ak-YGP.js";function d(){let[e,t]=(0,f.useState)(!1),[n,i]=(0,f.useState)(`—`);return(0,p.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,p.jsx)(r,{onClick:()=>t(!0),children:`Search…`}),(0,p.jsxs)(`span`,{children:[`Selected: `,n]}),(0,p.jsx)(a,{open:e,onOpenChange:t,items:m,onSelect:e=>i(e.title)})]})}var f,p,m;function h(){return(h=e((()=>{f=t(),i(),o(),p=n(),m=[{id:`books`,title:`Books`,description:`/books`,group:`Content`},{id:`reviews`,title:`Reviews`,description:`/reviews`,group:`Content`},{id:`users`,title:`Users`,description:`/users`,group:`Admin`},{id:`seo`,title:`SEO settings`,description:`/seo`,keywords:`sitemap meta`}]})))()}function g(){let[e,t]=(0,_.useState)(!1),[n,i]=(0,_.useState)(`—`);return(0,v.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,v.jsx)(r,{onClick:()=>t(!0),children:`Search “invoice”…`}),(0,v.jsxs)(`span`,{children:[`Selected: `,n]}),(0,v.jsx)(a,{open:e,onOpenChange:t,items:y,filter:x,onSelect:e=>i(e.title)})]})}var _,v,y,b,x;function S(){return(S=e((()=>{_=t(),i(),o(),v=n(),y=[{id:`billing`,title:`Billing history`,keywords:`invoice`},{id:`invoices`,title:`Invoices`,group:`Billing`},{id:`new-invoice`,title:`New invoice`,keywords:`create`},{id:`tax`,title:`Tax settings`,description:`Invoice numbering`}],b=(e,t)=>{let n=e.title.toLowerCase();return n.startsWith(t)?0:n.split(` `).some(e=>e.startsWith(t))?1:2},x=(e,t)=>{let n=t.toLowerCase();return e.filter(e=>[e.title,e.description,e.group,e.keywords].join(` `).toLowerCase().includes(n)).sort((e,t)=>b(e,n)-b(t,n))}})))()}function C(){let[e,t]=(0,w.useState)(null);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(`p`,{children:[`Press `,(0,T.jsx)(`kbd`,{children:`Ctrl`}),` / `,(0,T.jsx)(`kbd`,{children:`⌘`}),` + `,(0,T.jsx)(`kbd`,{children:`K`}),` to open the palette.`]}),(0,T.jsx)(a,{items:E,shortcut:`mod+k`,shortcutLabel:`⌘K`,title:`Quick actions`,onSelect:e=>t(e.title)}),(0,T.jsx)(`p`,{"aria-live":`polite`,children:e?`Selected: ${e}`:`Nothing selected yet`})]})}var w,T,E;function D(){return(D=e((()=>{w=t(),o(),T=n(),E=[{id:`new`,title:`New document`},{id:`open`,title:`Open recent`,description:`Last 10 documents`},{id:`theme`,title:`Toggle theme`,keywords:`dark light`}]})))()}var O;function k(){return(k=e((()=>{O=`import { useState } from "react";
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
`})))()}var A;function j(){return(j=e((()=>{A=`import { useState } from "react";
import { Button, CommandDialog, type CommandItem } from "@minerva/lib-core";

const ITEMS: CommandItem[] = [
  { id: "billing", title: "Billing history", keywords: "invoice" },
  { id: "invoices", title: "Invoices", group: "Billing" },
  { id: "new-invoice", title: "New invoice", keywords: "create" },
  { id: "tax", title: "Tax settings", description: "Invoice numbering" },
];

// Rank: title starts with the query > a title word does > anywhere else
const rank = (item: CommandItem, query: string) => {
  const title = item.title.toLowerCase();
  if (title.startsWith(query)) return 0;
  if (title.split(" ").some((word) => word.startsWith(query))) return 1;
  return 2;
};

const filter = (items: CommandItem[], raw: string) => {
  const query = raw.toLowerCase();
  return items
    .filter((item) =>
      [item.title, item.description, item.group, item.keywords]
        .join(" ")
        .toLowerCase()
        .includes(query),
    )
    .sort((a, b) => rank(a, query) - rank(b, query));
};

export default function CustomFilterDemo() {
  const [open, setOpen] = useState(false);
  const [last, setLast] = useState("—");
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button onClick={() => setOpen(true)}>Search “invoice”…</Button>
      <span>Selected: {last}</span>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        items={ITEMS}
        filter={filter}
        onSelect={(item) => setLast(item.title)}
      />
    </div>
  );
}
`})))()}var M;function N(){return(N=e((()=>{M=`import { useState } from "react";
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
`})))()}var P,F,I;function L(){return(L=e((()=>{h(),S(),D(),k(),j(),N(),t(),c(),s(),P=n(),F=l(Object.assign({"./demos/basic.tsx":d,"./demos/custom-filter.tsx":g,"./demos/shortcut.tsx":C}),Object.assign({"./demos/basic.tsx":O,"./demos/custom-filter.tsx":A,"./demos/shortcut.tsx":M})),I=()=>(0,P.jsx)(u,{id:`command`,demos:F})})))()}L();export{I as default};