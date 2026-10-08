import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Pt as r,X as i,cn as a}from"./minerva-web-components-e9i9Tzii.js";import{n as o,t as s}from"./useI18n-Brv-VDVY.js";import{t as c}from"./stylingHooks-GjssfG7q.js";import{S as l,T as u,g as d}from"./icons-C9qyBhWC.js";import{n as f,t as p}from"./Tooltip-Cj2KNQxF.js";import{t as m}from"./direction-B2fcyo3I.js";import{n as h,t as g}from"./IconButton-EM8CzPwt.js";import{n as _,t as v}from"./Menu-BFv6jT0x.js";import{n as y,t as b}from"./ContextMenu-BAfi1gLW.js";import{m as x,n as S,p as C,t as w}from"./DocPage-44Ak-YGP.js";import{C as T,l as ee,o as E,s as D,w as O}from"./lu-CClVBj5g.js";var k,A,j,M,N,P,F,I,te,ne,L;function R(){return(R=e((()=>{k=`_pageTabs_1t7c9_1`,A=`_viewport_1t7c9_13`,j=`_list_1t7c9_24`,M=`_pageTab_1t7c9_1`,N=`_trigger_1t7c9_70`,P=`_icon_1t7c9_97`,F=`_label_1t7c9_106`,I=`_action_1t7c9_113`,te=`_actions_1t7c9_114`,ne=`_scroll_1t7c9_125`,L={pageTabs:k,viewport:A,list:j,pageTab:M,trigger:N,icon:P,label:F,action:I,actions:te,scroll:ne}})))()}var z,B,V,H,U;function W(){return(W=e((()=>{a(),o(),u(),m(),f(),h(),R(),z=t(),B=n(),V=`.${L.pageTab}`,H=({"aria-label":e,activeValue:t,children:n,actions:a,scrollLeftLabel:o,scrollRightLabel:u,className:f,onFocusCapture:p,onContextMenuCapture:m,...h})=>{let{t:_}=s(),v=(0,z.useRef)(null),y=(0,z.useRef)(null),b=(0,z.useRef)(null),x=(0,z.useRef)(null),S=(0,z.useRef)(null),C=(0,z.useRef)(null),w=(0,z.useRef)(null),[T,ee]=(0,z.useState)({overflow:!1,left:!1,right:!1,rtl:!1}),E=(0,z.useCallback)(()=>{let e=v.current;if(!e)return;let t=r(e)===`rtl`,n=e.scrollWidth-e.clientWidth,i={overflow:e.scrollWidth>e.clientWidth+1,left:t?e.scrollLeft>-n+1:e.scrollLeft>1,right:t?e.scrollLeft<-1:e.scrollLeft<n-1,rtl:t};ee(e=>e.overflow===i.overflow&&e.left===i.left&&e.right===i.right&&e.rtl===i.rtl?e:i)},[]),D=(0,z.useCallback)(()=>{let e=v.current;if(!e)return;let t=y.current?.querySelector(`${V}[data-active]`);if(t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();r.width>n.width?e.scrollLeft+=r.left-n.left:r.left<n.left?e.scrollLeft-=n.left-r.left:r.right>n.right&&(e.scrollLeft+=r.right-n.right)}E()},[E]);(0,z.useEffect)(()=>{let e=JSON.stringify([t,...Array.from(y.current?.querySelectorAll(V)??[],e=>[e.dataset.value,e.dataset.active])]);e!==x.current&&(x.current=e,D()),b.current&&!b.current.isConnected&&document.activeElement===document.body&&y.current?.querySelector(`[aria-current="page"]`)?.focus({preventScroll:!0});let n=w.current;n?.disabled&&(w.current=null,(document.activeElement===n||document.activeElement===document.body)&&(n===S.current?C:S).current?.focus({preventScroll:!0}))}),(0,z.useEffect)(()=>{if(typeof ResizeObserver>`u`)return;let e=new ResizeObserver(()=>D());return v.current&&e.observe(v.current),y.current&&e.observe(y.current),()=>e.disconnect()},[D]);let O=e=>{let t=v.current;t&&(w.current=e<0?S.current:C.current,t.scrollLeft+=e*Math.max(1,t.clientWidth*.8),E())},k=(0,B.jsx)(g,{ref:S,className:L.scroll,"aria-label":o??_(`pageTabs.scrollLeft`),size:`small`,shape:`square`,disabled:!T.left,onClick:()=>O(-1),icon:(0,B.jsx)(l,{size:18,"aria-hidden":`true`})}),A=(0,B.jsx)(g,{ref:C,className:L.scroll,"aria-label":u??_(`pageTabs.scrollRight`),size:`small`,shape:`square`,disabled:!T.right,onClick:()=>O(1),icon:(0,B.jsx)(d,{size:18,"aria-hidden":`true`})});return(0,B.jsxs)(`nav`,{...h,"aria-label":e,className:i(L.pageTabs,f),onFocusCapture:e=>{e.currentTarget.contains(e.target)&&(b.current=e.target.closest(V)?e.target:null),p?.(e)},onContextMenuCapture:e=>{let t=e.target.closest(V);t&&(b.current=t.querySelector(`.${L.trigger}`)),m?.(e)},...c(`page-tabs`,`root`),children:[T.overflow&&(T.rtl?A:k),(0,B.jsx)(`div`,{ref:v,className:L.viewport,onScroll:E,...c(`page-tabs`,`viewport`),children:(0,B.jsx)(`div`,{ref:y,className:L.list,...c(`page-tabs`,`list`),children:n})}),T.overflow&&(T.rtl?k:A),a&&(0,B.jsx)(`div`,{className:L.actions,...c(`page-tabs`,`actions`),children:a})]})},U=({ref:e,value:t,label:n,active:r=!1,disabled:a=!1,icon:o,action:s,onSelect:l,className:u,...d})=>(0,B.jsxs)(`div`,{...d,ref:e,className:i(L.pageTab,u),"data-value":t,"data-active":r||void 0,...c(`page-tab`,`root`,{current:r,disabled:a}),children:[(0,B.jsx)(p,{content:n,placement:`bottom-start`,variant:`glass`,disabled:a,asChild:!0,children:(0,B.jsxs)(`button`,{type:`button`,className:L.trigger,...c(`page-tab`,`trigger`),"aria-current":r?`page`:void 0,disabled:a,onClick:l,children:[o&&(0,B.jsx)(`span`,{className:L.icon,"aria-hidden":`true`,...c(`page-tab`,`icon`),children:o}),(0,B.jsx)(`span`,{className:L.label,...c(`page-tab`,`label`),children:n})]})}),s&&(0,B.jsx)(`span`,{className:L.action,...c(`page-tab`,`action`),children:s})]})})))()}function re(){let[e,t]=(0,G.useState)(q),[n,r]=(0,G.useState)(`books`),i=i=>{let a=e.filter(e=>e.value!==i);t(a),i===n&&r(a[0]?.value??``)};return(0,K.jsx)(H,{"aria-label":`Open pages`,activeValue:n,children:e.map(e=>(0,K.jsx)(U,{value:e.value,label:e.label,icon:e.value===`home`?(0,K.jsx)(ee,{}):(0,K.jsx)(D,{}),active:e.value===n,onSelect:()=>r(e.value),action:e.value!==`home`&&(0,K.jsx)(g,{size:`small`,"aria-label":`Close ${e.label}`,icon:(0,K.jsx)(T,{}),onClick:()=>i(e.value)})},e.value))})}var G,K,q;function J(){return(J=e((()=>{G=t(),h(),W(),O(),K=n(),q=[{value:`home`,label:`Dashboard`},{value:`books`,label:`Books`},{value:`article`,label:`A very long article title that gets truncated`}]})))()}function ie(){let[e,t]=(0,Y.useState)(Z),[n,r]=(0,Y.useState)(`Reports`),i=e=>{t([e]),r(e)};return(0,X.jsx)(H,{"aria-label":`Open pages`,activeValue:n,actions:(0,X.jsx)(v,{items:[{key:`reset`,label:`Reopen all pages`}],onSelect:()=>t(Z),children:(0,X.jsx)(g,{size:`small`,"aria-label":`Page menu`,icon:(0,X.jsx)(E,{})})}),children:e.map(e=>(0,X.jsx)(b,{items:[{key:`close-others`,label:`Close other pages`}],onSelect:()=>i(e),children:(0,X.jsx)(U,{value:e,label:e,active:e===n,onSelect:()=>r(e)})},e))})}var Y,X,Z;function ae(){return(ae=e((()=>{Y=t(),y(),h(),_(),W(),O(),X=n(),Z=[`Overview`,`Reports`,`Settings`,`Users`,`Billing`]})))()}function oe(){let[e,t]=(0,se.useState)($[9]);return(0,Q.jsx)(`div`,{style:{maxWidth:520},children:(0,Q.jsx)(H,{"aria-label":`Chapters`,activeValue:e,children:$.map(n=>(0,Q.jsx)(U,{value:n,label:n,active:n===e,disabled:n===`Chapter 3`,onSelect:()=>t(n)},n))})})}var se,Q,$;function ce(){return(ce=e((()=>{se=t(),W(),Q=n(),$=Array.from({length:12},(e,t)=>`Chapter ${t+1}`)})))()}var le;function ue(){return(ue=e((()=>{le=`import { useState } from "react";
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
    <PageTabs aria-label="Open pages" activeValue={active}>
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
                aria-label={\`Close \${page.label}\`}
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
`})))()}var de;function fe(){return(fe=e((()=>{de=`import { useState } from "react";
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
      aria-label="Open pages"
      activeValue={active}
      actions={
        <Menu
          items={[{ key: "reset", label: "Reopen all pages" }]}
          onSelect={() => setPages(all)}
        >
          <IconButton
            size="small"
            aria-label="Page menu"
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
`})))()}var pe;function me(){return(me=e((()=>{pe=`import { useState } from "react";
import { PageTab, PageTabs } from "@minerva/lib-core";

const pages = Array.from({ length: 12 }, (_, i) => \`Chapter \${i + 1}\`);

export default function OverflowDemo() {
  const [active, setActive] = useState(pages[9]);
  return (
    <div style={{ maxWidth: 520 }}>
      <PageTabs aria-label="Chapters" activeValue={active}>
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
`})))()}var he,ge,_e;function ve(){return(ve=e((()=>{J(),ae(),ce(),ue(),fe(),me(),t(),S(),x(),he=n(),ge=C(Object.assign({"./demos/basic.tsx":re,"./demos/context-menu.tsx":ie,"./demos/overflow.tsx":oe}),Object.assign({"./demos/basic.tsx":le,"./demos/context-menu.tsx":de,"./demos/overflow.tsx":pe})),_e=()=>(0,he.jsx)(w,{id:`page-tabs`,demos:ge})})))()}ve();export{_e as default};