import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{n as a,t as o}from"./useI18n-DtQV8aM0.js";import{n as s,t as c}from"./Button-CG2pPO-r.js";import{n as l,t as u}from"./useControllableState-NzKJCN8h.js";import{a as d,i as f,n as p,r as m}from"./Modal-DNMCOBFU.js";import{c as h,n as g,s as _,t as v}from"./DocPage-DzKszXiH.js";var y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{y=`_dialog_c7c53_1`,b=`_header_c7c53_6`,x=`_kbd_c7c53_22`,S=`_enterHint_c7c53_23`,C=`_search_c7c53_35`,w=`_results_c7c53_36`,T=`_searchIcon_c7c53_57`,E=`_input_c7c53_61`,D=`_item_c7c53_85`,O=`_copy_c7c53_131`,k=`_group_c7c53_151`,A=`_empty_c7c53_161`,j={dialog:y,header:b,kbd:x,enterHint:S,search:C,results:w,searchIcon:T,input:E,item:D,copy:O,group:k,empty:A}})))()}function ee(e){return(Array.isArray(e)?e:[e]).filter(e=>typeof e==`string`&&e.trim()!==``)}function te(e,t){if(typeof t!=`string`)return!1;let n=t.trim().toLowerCase().split(`+`).map(e=>e.trim()).filter(Boolean),r=n[n.length-1];if(!r||String(e.key??``).toLowerCase()!==r)return!1;let i=(...e)=>e.some(e=>n.includes(e));return!(i(`mod`)&&!e.metaKey&&!e.ctrlKey||i(`ctrl`)&&!e.ctrlKey||i(`meta`,`cmd`)&&!e.metaKey||i(`shift`)&&!e.shiftKey||i(`alt`,`option`)&&!e.altKey)}var N,P,F,I,L,R,z;function B(){return(B=e((()=>{i(),a(),l(),d(),M(),N=t(),P=n(),F=e=>e.trim().toLowerCase(),I=e=>`${e.group??``} ${e.title} ${e.description??``} ${e.keywords??``}`,L=e=>e instanceof HTMLElement?e.isContentEditable||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?!0:e instanceof HTMLInputElement&&![`button`,`checkbox`,`color`,`file`,`image`,`radio`,`range`,`reset`,`submit`].includes(e.type):!1,R=({items:e,maxResults:t,placeholder:n,emptyText:r,resultsLabel:i,enterLabel:a,onSelect:o})=>{let[s,c]=(0,N.useState)(``),[l,u]=(0,N.useState)(0),d=(0,N.useId)(),f=`${d}-results`,p=(0,N.useMemo)(()=>{let n=F(s);return e.filter(e=>!e.disabled).filter(e=>!n||F(I(e)).includes(n)).slice(0,t)},[e,t,s]),m=e=>`${d}-option-${e}`,h=p[l]?m(l):void 0;return(0,N.useEffect)(()=>{h&&document.getElementById(h)?.scrollIntoView?.({block:`nearest`})},[h]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`div`,{className:j.search,children:[(0,P.jsx)(`span`,{className:j.searchIcon,"aria-hidden":`true`,children:`⌕`}),(0,P.jsx)(`input`,{className:j.input,type:`text`,role:`combobox`,"aria-label":n,"aria-autocomplete":`list`,"aria-expanded":!0,"aria-controls":f,"aria-activedescendant":h,autoComplete:`off`,spellCheck:!1,value:s,placeholder:n,onChange:e=>{c(e.target.value),u(0)},onKeyDown:e=>{let t=Math.max(p.length-1,0),n={ArrowDown:e=>Math.min(e+1,t),ArrowUp:e=>Math.max(e-1,0),Home:()=>0,End:()=>t}[e.key];if(n&&(e.key.startsWith(`Arrow`)||!s)){e.preventDefault(),u(n);return}e.key===`Enter`&&p[l]&&(e.preventDefault(),o(p[l]))}}),(0,P.jsx)(`kbd`,{className:j.enterHint,"aria-hidden":`true`,children:a})]}),(0,P.jsx)(`div`,{id:f,className:j.results,role:`listbox`,"aria-label":i,children:p.length===0?(0,P.jsx)(`div`,{className:j.empty,children:r}):p.map((e,t)=>{let n=t===l;return(0,P.jsxs)(`button`,{id:m(t),type:`button`,role:`option`,tabIndex:-1,"aria-selected":n,"data-active":n||void 0,className:j.item,onMouseEnter:()=>u(t),onClick:()=>o(e),children:[(0,P.jsxs)(`span`,{className:j.copy,children:[(0,P.jsx)(`strong`,{children:e.title}),e.description&&(0,P.jsx)(`small`,{children:e.description})]}),e.group&&(0,P.jsx)(`span`,{className:j.group,children:e.group})]},e.id)})})]})},z=({open:e,defaultOpen:t=!1,onOpenChange:n,items:i,onSelect:a,title:s,description:c,placeholder:l,emptyText:d,shortcutLabel:h,shortcut:g,maxResults:_=12,resultsLabel:v,enterLabel:y,className:b})=>{let{t:x}=o(),[S,C]=u({value:e,defaultValue:t,onChange:n}),w=ee(g).join(`
`);return(0,N.useEffect)(()=>{if(!w)return;let e=w.split(`
`),t=t=>{L(t.target)&&!t.ctrlKey&&!t.metaKey&&!t.altKey||t.isComposing||e.some(e=>te(t,e))&&(t.preventDefault(),t.stopPropagation(),C(!0))};return document.addEventListener(`keydown`,t,{capture:!0}),()=>document.removeEventListener(`keydown`,t,!0)},[C,w]),(0,P.jsx)(p,{open:S,onOpenChange:C,children:(0,P.jsxs)(f,{className:r(j.dialog,b),description:c??x(`command.description`),hideCloseButton:!0,size:`large`,children:[(0,P.jsxs)(m,{className:j.header,children:[(0,P.jsx)(`span`,{children:s??x(`command.title`)}),h&&(0,P.jsx)(`kbd`,{className:j.kbd,children:h})]}),(0,P.jsx)(R,{items:i,maxResults:_,placeholder:l??x(`command.placeholder`),emptyText:d??x(`command.empty`),resultsLabel:v??x(`command.results`),enterLabel:y??x(`command.enter`),onSelect:e=>{a(e),C(!1)}})]})})}})))()}function ne(){let[e,t]=(0,V.useState)(!1),[n,r]=(0,V.useState)(`—`);return(0,H.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,H.jsx)(c,{onClick:()=>t(!0),children:`Search…`}),(0,H.jsxs)(`span`,{children:[`Selected: `,n]}),(0,H.jsx)(z,{open:e,onOpenChange:t,items:U,onSelect:e=>r(e.title)})]})}var V,H,U;function W(){return(W=e((()=>{V=t(),s(),B(),H=n(),U=[{id:`books`,title:`Books`,description:`/books`,group:`Content`},{id:`reviews`,title:`Reviews`,description:`/reviews`,group:`Content`},{id:`users`,title:`Users`,description:`/users`,group:`Admin`},{id:`seo`,title:`SEO settings`,description:`/seo`,keywords:`sitemap meta`}]})))()}function re(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`p`,{children:[`Press `,(0,G.jsx)(`kbd`,{children:`Ctrl`}),` / `,(0,G.jsx)(`kbd`,{children:`⌘`}),` + `,(0,G.jsx)(`kbd`,{children:`K`}),` to open the palette.`]}),(0,G.jsx)(z,{items:K,shortcut:`mod+k`,shortcutLabel:`⌘K`,title:`Quick actions`,onSelect:e=>console.log(e.id)})]})}var G,K;function q(){return(q=e((()=>{B(),G=n(),K=[{id:`new`,title:`New document`},{id:`open`,title:`Open recent`,description:`Last 10 documents`},{id:`theme`,title:`Toggle theme`,keywords:`dark light`}]})))()}var J;function Y(){return(Y=e((()=>{J=`import { useState } from "react";
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
`})))()}var X;function Z(){return(Z=e((()=>{X=`import { CommandDialog, type CommandItem } from "@minerva/lib-core";

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
`})))()}var Q,$,ie;function ae(){return(ae=e((()=>{W(),q(),Y(),Z(),t(),g(),h(),Q=n(),$=_(Object.assign({"./demos/basic.tsx":ne,"./demos/shortcut.tsx":re}),Object.assign({"./demos/basic.tsx":J,"./demos/shortcut.tsx":X})),ie=()=>(0,Q.jsx)(v,{id:`command`,demos:$})})))()}ae();export{ie as default};