import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{O as r,_ as i,c as a,k as o,n as s,s as c,t as l,v as u}from"./DocPage-HgWiqH91.js";import{n as d,t as ee}from"./useI18n-CYdr3eVz.js";import{S as te,T as f,g as ne}from"./icons-BaZJL-85.js";import{n as p,t as m}from"./Tooltip-BdS1dkCH.js";import{n as h,t as g}from"./IconButton-BvJguNAN.js";import{i as _,n as v,r as y,t as b}from"./ContextMenu-DXyPAAj1.js";import{C as x,l as S,o as C,s as w,w as T}from"./lu-D4WkY8Ju.js";var E,D,O,k,A,j,re,M,N,ie,P;function F(){return(F=e((()=>{E=`_pageTabs_1t7c9_1`,D=`_viewport_1t7c9_13`,O=`_list_1t7c9_24`,k=`_pageTab_1t7c9_1`,A=`_trigger_1t7c9_70`,j=`_icon_1t7c9_97`,re=`_label_1t7c9_106`,M=`_action_1t7c9_113`,N=`_actions_1t7c9_114`,ie=`_scroll_1t7c9_125`,P={pageTabs:E,viewport:D,list:O,pageTab:k,trigger:A,icon:j,label:re,action:M,actions:N,scroll:ie}})))()}var I,L,R,z,B;function V(){return(V=e((()=>{r(),d(),f(),i(),m(),h(),F(),I=t(),L=n(),R=`.${P.pageTab}`,z=({"aria-label":e,activeValue:t,children:n,actions:r,scrollLeftLabel:i,scrollRightLabel:a,className:s,onFocusCapture:c,onContextMenuCapture:l,...d})=>{let{t:f}=ee(),p=(0,I.useRef)(null),m=(0,I.useRef)(null),h=(0,I.useRef)(null),_=(0,I.useRef)(null),v=(0,I.useRef)(null),y=(0,I.useRef)(null),b=(0,I.useRef)(null),[x,S]=(0,I.useState)({overflow:!1,left:!1,right:!1,rtl:!1}),C=(0,I.useCallback)(()=>{let e=p.current;if(!e)return;let t=u(e)===`rtl`,n=e.scrollWidth-e.clientWidth,r={overflow:e.scrollWidth>e.clientWidth+1,left:t?e.scrollLeft>-n+1:e.scrollLeft>1,right:t?e.scrollLeft<-1:e.scrollLeft<n-1,rtl:t};S(e=>e.overflow===r.overflow&&e.left===r.left&&e.right===r.right&&e.rtl===r.rtl?e:r)},[]),w=(0,I.useCallback)(()=>{let e=p.current;if(!e)return;let t=m.current?.querySelector(`${R}[data-active]`);if(t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();r.width>n.width?e.scrollLeft+=r.left-n.left:r.left<n.left?e.scrollLeft-=n.left-r.left:r.right>n.right&&(e.scrollLeft+=r.right-n.right)}C()},[C]);(0,I.useEffect)(()=>{let e=JSON.stringify([t,...Array.from(m.current?.querySelectorAll(R)??[],e=>[e.dataset.value,e.dataset.active])]);e!==_.current&&(_.current=e,w()),h.current&&!h.current.isConnected&&document.activeElement===document.body&&m.current?.querySelector(`[aria-current="page"]`)?.focus({preventScroll:!0});let n=b.current;n?.disabled&&(b.current=null,(document.activeElement===n||document.activeElement===document.body)&&(n===v.current?y:v).current?.focus({preventScroll:!0}))}),(0,I.useEffect)(()=>{if(typeof ResizeObserver>`u`)return;let e=new ResizeObserver(()=>w());return p.current&&e.observe(p.current),m.current&&e.observe(m.current),()=>e.disconnect()},[w]);let T=e=>{let t=p.current;t&&(b.current=e<0?v.current:y.current,t.scrollLeft+=e*Math.max(1,t.clientWidth*.8),C())},E=(0,L.jsx)(g,{ref:v,className:P.scroll,"aria-label":i??f(`pageTabs.scrollLeft`),size:`small`,shape:`square`,disabled:!x.left,onClick:()=>T(-1),icon:(0,L.jsx)(te,{size:18,"aria-hidden":`true`})}),D=(0,L.jsx)(g,{ref:y,className:P.scroll,"aria-label":a??f(`pageTabs.scrollRight`),size:`small`,shape:`square`,disabled:!x.right,onClick:()=>T(1),icon:(0,L.jsx)(ne,{size:18,"aria-hidden":`true`})});return(0,L.jsxs)(`nav`,{...d,"aria-label":e,className:o(P.pageTabs,s),onFocusCapture:e=>{e.currentTarget.contains(e.target)&&(h.current=e.target.closest(R)?e.target:null),c?.(e)},onContextMenuCapture:e=>{let t=e.target.closest(R);t&&(h.current=t.querySelector(`.${P.trigger}`)),l?.(e)},children:[x.overflow&&(x.rtl?D:E),(0,L.jsx)(`div`,{ref:p,className:P.viewport,onScroll:C,children:(0,L.jsx)(`div`,{ref:m,className:P.list,children:n})}),x.overflow&&(x.rtl?E:D),r&&(0,L.jsx)(`div`,{className:P.actions,children:r})]})},B=({ref:e,value:t,label:n,active:r=!1,disabled:i=!1,icon:a,action:s,onSelect:c,className:l,...u})=>(0,L.jsxs)(`div`,{...u,ref:e,className:o(P.pageTab,l),"data-value":t,"data-active":r||void 0,"data-disabled":i||void 0,children:[(0,L.jsx)(p,{content:n,placement:`bottom-start`,variant:`glass`,disabled:i,asChild:!0,children:(0,L.jsxs)(`button`,{type:`button`,className:P.trigger,"aria-current":r?`page`:void 0,disabled:i,onClick:c,children:[a&&(0,L.jsx)(`span`,{className:P.icon,"aria-hidden":`true`,children:a}),(0,L.jsx)(`span`,{className:P.label,children:n})]})}),s&&(0,L.jsx)(`span`,{className:P.action,children:s})]})})))()}function ae(){let[e,t]=(0,H.useState)(W),[n,r]=(0,H.useState)(`books`),i=i=>{let a=e.filter(e=>e.value!==i);t(a),i===n&&r(a[0]?.value??``)};return(0,U.jsx)(z,{"aria-label":`Open pages`,activeValue:n,children:e.map(e=>(0,U.jsx)(B,{value:e.value,label:e.label,icon:e.value===`home`?(0,U.jsx)(S,{}):(0,U.jsx)(w,{}),active:e.value===n,onSelect:()=>r(e.value),action:e.value!==`home`&&(0,U.jsx)(g,{size:`small`,"aria-label":`Close ${e.label}`,icon:(0,U.jsx)(x,{}),onClick:()=>i(e.value)})},e.value))})}var H,U,W;function G(){return(G=e((()=>{H=t(),h(),V(),T(),U=n(),W=[{value:`home`,label:`Dashboard`},{value:`books`,label:`Books`},{value:`article`,label:`A very long article title that gets truncated`}]})))()}function oe(){let[e,t]=(0,K.useState)(J),[n,r]=(0,K.useState)(`Reports`),i=e=>{t([e]),r(e)};return(0,q.jsx)(z,{"aria-label":`Open pages`,activeValue:n,actions:(0,q.jsx)(y,{items:[{key:`reset`,label:`Reopen all pages`}],onSelect:()=>t(J),children:(0,q.jsx)(g,{size:`small`,"aria-label":`Page menu`,icon:(0,q.jsx)(C,{})})}),children:e.map(e=>(0,q.jsx)(b,{items:[{key:`close-others`,label:`Close other pages`}],onSelect:()=>i(e),children:(0,q.jsx)(B,{value:e,label:e,active:e===n,onSelect:()=>r(e)})},e))})}var K,q,J;function Y(){return(Y=e((()=>{K=t(),v(),h(),_(),V(),T(),q=n(),J=[`Overview`,`Reports`,`Settings`,`Users`,`Billing`]})))()}function se(){let[e,t]=(0,X.useState)(Q[9]);return(0,Z.jsx)(`div`,{style:{maxWidth:520},children:(0,Z.jsx)(z,{"aria-label":`Chapters`,activeValue:e,children:Q.map(n=>(0,Z.jsx)(B,{value:n,label:n,active:n===e,disabled:n===`Chapter 3`,onSelect:()=>t(n)},n))})})}var X,Z,Q;function ce(){return(ce=e((()=>{X=t(),V(),Z=n(),Q=Array.from({length:12},(e,t)=>`Chapter ${t+1}`)})))()}var le;function ue(){return(ue=e((()=>{le=`import { useState } from "react";
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
`})))()}var pe;function $(){return($=e((()=>{pe=`import { useState } from "react";
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
`})))()}var me,he,ge;function _e(){return(_e=e((()=>{G(),Y(),ce(),ue(),fe(),$(),t(),s(),a(),me=n(),he=c(Object.assign({"./demos/basic.tsx":ae,"./demos/context-menu.tsx":oe,"./demos/overflow.tsx":se}),Object.assign({"./demos/basic.tsx":le,"./demos/context-menu.tsx":de,"./demos/overflow.tsx":pe})),ge=()=>(0,me.jsx)(l,{id:`page-tabs`,demos:he})})))()}_e();export{ge as default};