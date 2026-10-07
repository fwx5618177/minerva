import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Ht as r,U as i,h as a,kt as o,o as s,ot as c}from"./dist-BWNqkmth.js";import{B as l,_ as u,g as d,h as f,z as p}from"./lu-B0X0EWxp.js";import{c as m,n as h,s as g,t as _}from"./DocPage-DGOZswYH.js";function v(){let[e,t]=(0,y.useState)(x),[n,r]=(0,y.useState)(`books`),i=i=>{let a=e.filter(e=>e.value!==i);t(a),i===n&&r(a[0]?.value??``)};return(0,b.jsx)(s,{ariaLabel:`Open pages`,activeValue:n,children:e.map(e=>(0,b.jsx)(c,{value:e.value,label:e.label,icon:e.value===`home`?(0,b.jsx)(u,{}):(0,b.jsx)(d,{}),active:e.value===n,onSelect:()=>r(e.value),action:e.value!==`home`&&(0,b.jsx)(o,{size:`small`,ariaLabel:`Close ${e.label}`,icon:(0,b.jsx)(p,{}),onClick:()=>i(e.value)})},e.value))})}var y,b,x;function S(){return(S=e((()=>{y=t(),r(),l(),b=n(),x=[{value:`home`,label:`Dashboard`},{value:`books`,label:`Books`},{value:`article`,label:`A very long article title that gets truncated`}]})))()}function C(){let[e,t]=(0,w.useState)(E),[n,r]=(0,w.useState)(`Reports`),l=e=>{t([e]),r(e)};return(0,T.jsx)(s,{ariaLabel:`Open pages`,activeValue:n,actions:(0,T.jsx)(a,{items:[{key:`reset`,label:`Reopen all pages`}],onSelect:()=>t(E),children:(0,T.jsx)(o,{size:`small`,ariaLabel:`Page menu`,icon:(0,T.jsx)(f,{})})}),children:e.map(e=>(0,T.jsx)(i,{items:[{key:`close-others`,label:`Close other pages`}],onSelect:()=>l(e),children:(0,T.jsx)(c,{value:e,label:e,active:e===n,onSelect:()=>r(e)})},e))})}var w,T,E;function D(){return(D=e((()=>{w=t(),r(),l(),T=n(),E=[`Overview`,`Reports`,`Settings`,`Users`,`Billing`]})))()}function O(){let[e,t]=(0,k.useState)(j[9]);return(0,A.jsx)(`div`,{style:{maxWidth:520},children:(0,A.jsx)(s,{ariaLabel:`Chapters`,activeValue:e,children:j.map(n=>(0,A.jsx)(c,{value:n,label:n,active:n===e,disabled:n===`Chapter 3`,onSelect:()=>t(n)},n))})})}var k,A,j;function M(){return(M=e((()=>{k=t(),r(),A=n(),j=Array.from({length:12},(e,t)=>`Chapter ${t+1}`)})))()}var N;function P(){return(P=e((()=>{N=`import { useState } from "react";
import { IconButton, PageTab, PageTabs } from "@minerva/lib-core";
import { LuFileText, LuHouse, LuX } from "react-icons/lu";

const initial = [
  { value: "home", label: "Dashboard" },
  { value: "books", label: "Books" },
  { value: "article", label: "A very long article title that gets truncated" },
];

export default function BasicDemo() {
  const [pages, setPages] = useState(initial);
  const [active, setActive] = useState("books");

  const close = (value: string) => {
    const rest = pages.filter((page) => page.value !== value);
    setPages(rest);
    if (value === active) setActive(rest[0]?.value ?? "");
  };

  return (
    <PageTabs ariaLabel="Open pages" activeValue={active}>
      {pages.map((page) => (
        <PageTab
          key={page.value}
          value={page.value}
          label={page.label}
          icon={page.value === "home" ? <LuHouse /> : <LuFileText />}
          active={page.value === active}
          onSelect={() => setActive(page.value)}
          action={
            page.value !== "home" && (
              <IconButton
                size="small"
                ariaLabel={\`Close \${page.label}\`}
                icon={<LuX />}
                onClick={() => close(page.value)}
              />
            )
          }
        />
      ))}
    </PageTabs>
  );
}
`})))()}var F;function I(){return(I=e((()=>{F=`import { useState } from "react";
import {
  ContextMenu,
  IconButton,
  Menu,
  PageTab,
  PageTabs,
} from "@minerva/lib-core";
import { LuEllipsis } from "react-icons/lu";

const all = ["Overview", "Reports", "Settings", "Users", "Billing"];

export default function ContextMenuDemo() {
  const [pages, setPages] = useState(all);
  const [active, setActive] = useState("Reports");

  const closeOthers = (keep: string) => {
    setPages([keep]);
    setActive(keep);
  };

  return (
    <PageTabs
      ariaLabel="Open pages"
      activeValue={active}
      actions={
        <Menu
          items={[{ key: "reset", label: "Reopen all pages" }]}
          onSelect={() => setPages(all)}
        >
          <IconButton
            size="small"
            ariaLabel="Page menu"
            icon={<LuEllipsis />}
          />
        </Menu>
      }
    >
      {pages.map((page) => (
        <ContextMenu
          key={page}
          items={[{ key: "close-others", label: "Close other pages" }]}
          onSelect={() => closeOthers(page)}
        >
          <PageTab
            value={page}
            label={page}
            active={page === active}
            onSelect={() => setActive(page)}
          />
        </ContextMenu>
      ))}
    </PageTabs>
  );
}
`})))()}var L;function R(){return(R=e((()=>{L=`import { useState } from "react";
import { PageTab, PageTabs } from "@minerva/lib-core";

const pages = Array.from({ length: 12 }, (_, i) => \`Chapter \${i + 1}\`);

export default function OverflowDemo() {
  const [active, setActive] = useState(pages[9]);
  return (
    <div style={{ maxWidth: 520 }}>
      <PageTabs ariaLabel="Chapters" activeValue={active}>
        {pages.map((page) => (
          <PageTab
            key={page}
            value={page}
            label={page}
            active={page === active}
            disabled={page === "Chapter 3"}
            onSelect={() => setActive(page)}
          />
        ))}
      </PageTabs>
    </div>
  );
}
`})))()}var z,B,V;function H(){return(H=e((()=>{S(),D(),M(),P(),I(),R(),t(),h(),m(),z=n(),B=g(Object.assign({"./demos/basic.tsx":v,"./demos/context-menu.tsx":C,"./demos/overflow.tsx":O}),Object.assign({"./demos/basic.tsx":N,"./demos/context-menu.tsx":F,"./demos/overflow.tsx":L})),V=()=>(0,z.jsx)(_,{id:`page-tabs`,demos:B})})))()}H();export{V as default};