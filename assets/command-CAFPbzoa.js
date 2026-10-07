import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{C as r,O as i,c as a,k as o,n as s,s as c,t as l,w as u}from"./DocPage-BvqFnACE.js";import{n as d,t as f}from"./useI18n-s5sAv-jy.js";import{n as p,t as m}from"./Button-CVTxJPft.js";import{a as h,i as ee,n as te,r as ne}from"./Modal-BYER280a.js";var g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{g=`_dialog_c7c53_1`,_=`_header_c7c53_6`,v=`_kbd_c7c53_22`,y=`_enterHint_c7c53_23`,b=`_search_c7c53_35`,x=`_results_c7c53_36`,S=`_searchIcon_c7c53_57`,C=`_input_c7c53_61`,w=`_item_c7c53_85`,T=`_copy_c7c53_131`,E=`_group_c7c53_151`,D=`_empty_c7c53_161`,O={dialog:g,header:_,kbd:v,enterHint:y,search:b,results:x,searchIcon:S,input:C,item:w,copy:T,group:E,empty:D}})))()}function A(e){return(Array.isArray(e)?e:[e]).filter(e=>typeof e==`string`&&e.trim()!==``)}function re(e,t){if(typeof t!=`string`)return!1;let n=t.trim().toLowerCase().split(`+`).map(e=>e.trim()).filter(Boolean),r=n[n.length-1];if(!r||String(e.key??``).toLowerCase()!==r)return!1;let i=(...e)=>e.some(e=>n.includes(e));return!(i(`mod`)&&!e.metaKey&&!e.ctrlKey||i(`ctrl`)&&!e.ctrlKey||i(`meta`,`cmd`)&&!e.metaKey||i(`shift`)&&!e.shiftKey||i(`alt`,`option`)&&!e.altKey)}var j,M,N,P,F,I,L;function R(){return(R=e((()=>{i(),d(),u(),h(),k(),j=t(),M=n(),N=e=>e.trim().toLowerCase(),P=e=>`${e.group??``} ${e.title} ${e.description??``} ${e.keywords??``}`,F=e=>e instanceof HTMLElement?e.isContentEditable||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?!0:e instanceof HTMLInputElement&&![`button`,`checkbox`,`color`,`file`,`image`,`radio`,`range`,`reset`,`submit`].includes(e.type):!1,I=({items:e,maxResults:t,placeholder:n,emptyText:r,resultsLabel:i,enterLabel:a,onSelect:o})=>{let[s,c]=(0,j.useState)(``),[l,u]=(0,j.useState)(0),d=(0,j.useId)(),f=`${d}-results`,p=(0,j.useMemo)(()=>{let n=N(s);return e.filter(e=>!e.disabled).filter(e=>!n||N(P(e)).includes(n)).slice(0,t)},[e,t,s]),m=e=>`${d}-option-${e}`,h=p[l]?m(l):void 0;return(0,j.useEffect)(()=>{h&&document.getElementById(h)?.scrollIntoView?.({block:`nearest`})},[h]),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:O.search,children:[(0,M.jsx)(`span`,{className:O.searchIcon,"aria-hidden":`true`,children:`⌕`}),(0,M.jsx)(`input`,{className:O.input,type:`text`,role:`combobox`,"aria-label":n,"aria-autocomplete":`list`,"aria-expanded":!0,"aria-controls":f,"aria-activedescendant":h,autoComplete:`off`,spellCheck:!1,value:s,placeholder:n,onChange:e=>{c(e.target.value),u(0)},onKeyDown:e=>{let t=Math.max(p.length-1,0),n={ArrowDown:e=>Math.min(e+1,t),ArrowUp:e=>Math.max(e-1,0),Home:()=>0,End:()=>t}[e.key];if(n&&(e.key.startsWith(`Arrow`)||!s)){e.preventDefault(),u(n);return}e.key===`Enter`&&p[l]&&(e.preventDefault(),o(p[l]))}}),(0,M.jsx)(`kbd`,{className:O.enterHint,"aria-hidden":`true`,children:a})]}),(0,M.jsx)(`div`,{id:f,className:O.results,role:`listbox`,"aria-label":i,children:p.length===0?(0,M.jsx)(`div`,{className:O.empty,children:r}):p.map((e,t)=>{let n=t===l;return(0,M.jsxs)(`button`,{id:m(t),type:`button`,role:`option`,tabIndex:-1,"aria-selected":n,"data-active":n||void 0,className:O.item,onMouseEnter:()=>u(t),onClick:()=>o(e),children:[(0,M.jsxs)(`span`,{className:O.copy,children:[(0,M.jsx)(`strong`,{children:e.title}),e.description&&(0,M.jsx)(`small`,{children:e.description})]}),e.group&&(0,M.jsx)(`span`,{className:O.group,children:e.group})]},e.id)})})]})},L=({open:e,defaultOpen:t,onOpenChange:n,items:i,onSelect:a,title:s,description:c,placeholder:l,emptyText:u,shortcutLabel:d,shortcut:p,maxResults:m=12,resultsLabel:h,enterLabel:g,className:_})=>{let{t:v}=f(),[y,b]=r({value:e,defaultValue:t??!1,onChange:n,name:`CommandDialog`,prop:`open`}),x=A(p).join(`
`);return(0,j.useEffect)(()=>{if(!x)return;let e=x.split(`
`),t=t=>{F(t.target)&&!t.ctrlKey&&!t.metaKey&&!t.altKey||t.isComposing||e.some(e=>re(t,e))&&(t.preventDefault(),t.stopPropagation(),b(!0))};return document.addEventListener(`keydown`,t,{capture:!0}),()=>document.removeEventListener(`keydown`,t,!0)},[b,x]),(0,M.jsx)(te,{open:y,onOpenChange:b,children:(0,M.jsxs)(ee,{className:o(O.dialog,_),description:c??v(`command.description`),hideCloseButton:!0,size:`large`,children:[(0,M.jsxs)(ne,{className:O.header,children:[(0,M.jsx)(`span`,{children:s??v(`command.title`)}),d&&(0,M.jsx)(`kbd`,{className:O.kbd,children:d})]}),(0,M.jsx)(I,{items:i,maxResults:m,placeholder:l??v(`command.placeholder`),emptyText:u??v(`command.empty`),resultsLabel:h??v(`command.results`),enterLabel:g??v(`command.enter`),onSelect:e=>{a(e),b(!1)}})]})})}})))()}function ie(){let[e,t]=(0,z.useState)(!1),[n,r]=(0,z.useState)(`—`);return(0,B.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,B.jsx)(m,{onClick:()=>t(!0),children:`Search…`}),(0,B.jsxs)(`span`,{children:[`Selected: `,n]}),(0,B.jsx)(L,{open:e,onOpenChange:t,items:V,onSelect:e=>r(e.title)})]})}var z,B,V;function H(){return(H=e((()=>{z=t(),p(),R(),B=n(),V=[{id:`books`,title:`Books`,description:`/books`,group:`Content`},{id:`reviews`,title:`Reviews`,description:`/reviews`,group:`Content`},{id:`users`,title:`Users`,description:`/users`,group:`Admin`},{id:`seo`,title:`SEO settings`,description:`/seo`,keywords:`sitemap meta`}]})))()}function ae(){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`p`,{children:[`Press `,(0,U.jsx)(`kbd`,{children:`Ctrl`}),` / `,(0,U.jsx)(`kbd`,{children:`⌘`}),` + `,(0,U.jsx)(`kbd`,{children:`K`}),` to open the palette.`]}),(0,U.jsx)(L,{items:W,shortcut:`mod+k`,shortcutLabel:`⌘K`,title:`Quick actions`,onSelect:e=>console.log(e.id)})]})}var U,W;function G(){return(G=e((()=>{R(),U=n(),W=[{id:`new`,title:`New document`},{id:`open`,title:`Open recent`,description:`Last 10 documents`},{id:`theme`,title:`Toggle theme`,keywords:`dark light`}]})))()}var K;function q(){return(q=e((()=>{K=`import { useState } from "react";
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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { CommandDialog, type CommandItem } from "@minerva/lib-core";

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
`})))()}var X,Z,Q;function $(){return($=e((()=>{H(),G(),q(),Y(),t(),s(),a(),X=n(),Z=c(Object.assign({"./demos/basic.tsx":ie,"./demos/shortcut.tsx":ae}),Object.assign({"./demos/basic.tsx":K,"./demos/shortcut.tsx":J})),Q=()=>(0,X.jsx)(l,{id:`command`,demos:Z})})))()}$();export{Q as default};