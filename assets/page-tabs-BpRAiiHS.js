import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{W as r,o as i,vt as a}from"./minerva-web-components-ByJsjP0z.js";import{m as o,n as s,p as c,t as l}from"./DocPage-BIGX2Gcv.js";import{n as u,t as ee}from"./useI18n-Dk-DwhiM.js";import{t as d}from"./stylingHooks-GjssfG7q.js";import{S as te,T as f,g as ne}from"./icons-Dj0E45-e.js";import{n as p,t as m}from"./Tooltip-G3KR4RBB.js";import{t as h}from"./direction-BqlSRjrA.js";import{n as g,t as _}from"./IconButton-CW7bVPsl.js";import{n as v,t as y}from"./Menu-DWHa1-IW.js";import{n as b,t as x}from"./ContextMenu-0PWqtWJX.js";import{T as S,o as C,s as w,u as T,w as E}from"./lu-DYIKOxW-.js";var D,O,re,k,A,j,M,N,P,F,I;function ie(){return(ie=e((()=>{D=`_pageTabs_tblqv_1`,O=`_viewport_tblqv_28`,re=`_list_tblqv_39`,k=`_pageTab_tblqv_1`,A=`_trigger_tblqv_85`,j=`_icon_tblqv_112`,M=`_label_tblqv_121`,N=`_action_tblqv_128`,P=`_actions_tblqv_129`,F=`_scroll_tblqv_140`,I={pageTabs:D,viewport:O,list:re,pageTab:k,trigger:A,icon:j,label:M,action:N,actions:P,scroll:F}})))()}var L,R,z,B,V;function H(){return(H=e((()=>{a(),u(),f(),h(),p(),g(),ie(),L=t(),R=n(),z=`.${I.pageTab}`,B=({"aria-label":e,activeValue:t,children:n,actions:a,scrollLeftLabel:o,scrollRightLabel:s,className:c,onFocusCapture:l,onContextMenuCapture:u,...f})=>{let{t:p}=ee(),m=(0,L.useRef)(null),h=(0,L.useRef)(null),g=(0,L.useRef)(null),v=(0,L.useRef)(null),y=(0,L.useRef)(null),b=(0,L.useRef)(null),x=(0,L.useRef)(null),[S,C]=(0,L.useState)({overflow:!1,left:!1,right:!1,rtl:!1}),w=(0,L.useCallback)(()=>{let e=m.current;if(!e)return;let t=r(e)===`rtl`,n=e.scrollWidth-e.clientWidth,i={overflow:e.scrollWidth>e.clientWidth+1,left:t?e.scrollLeft>-n+1:e.scrollLeft>1,right:t?e.scrollLeft<-1:e.scrollLeft<n-1,rtl:t};C(e=>e.overflow===i.overflow&&e.left===i.left&&e.right===i.right&&e.rtl===i.rtl?e:i)},[]),T=(0,L.useCallback)(()=>{let e=m.current;if(!e)return;let t=h.current?.querySelector(`${z}[data-current]`);if(t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();r.width>n.width?e.scrollLeft+=r.left-n.left:r.left<n.left?e.scrollLeft-=n.left-r.left:r.right>n.right&&(e.scrollLeft+=r.right-n.right)}w()},[w]);(0,L.useEffect)(()=>{let e=JSON.stringify([t,...Array.from(h.current?.querySelectorAll(z)??[],e=>[e.dataset.value,e.dataset.active])]);e!==v.current&&(v.current=e,T()),g.current&&!g.current.isConnected&&document.activeElement===document.body&&h.current?.querySelector(`[aria-current="page"]`)?.focus({preventScroll:!0});let n=x.current;n?.disabled&&(x.current=null,(document.activeElement===n||document.activeElement===document.body)&&(n===y.current?b:y).current?.focus({preventScroll:!0}))}),(0,L.useEffect)(()=>{if(typeof ResizeObserver>`u`)return;let e=new ResizeObserver(()=>T());return m.current&&e.observe(m.current),h.current&&e.observe(h.current),()=>e.disconnect()},[T]);let E=e=>{let t=m.current;t&&(x.current=e<0?y.current:b.current,t.scrollLeft+=e*Math.max(1,t.clientWidth*.8),w())},D=(0,R.jsx)(_,{ref:y,className:I.scroll,"aria-label":o??p(`pageTabs.scrollLeft`),size:`small`,shape:`square`,disabled:!S.left,onClick:()=>E(-1),icon:(0,R.jsx)(te,{size:18,"aria-hidden":`true`})}),O=(0,R.jsx)(_,{ref:b,className:I.scroll,"aria-label":s??p(`pageTabs.scrollRight`),size:`small`,shape:`square`,disabled:!S.right,onClick:()=>E(1),icon:(0,R.jsx)(ne,{size:18,"aria-hidden":`true`})});return(0,R.jsxs)(`nav`,{...f,"aria-label":e,className:i(I.pageTabs,c),onFocusCapture:e=>{e.currentTarget.contains(e.target)&&(g.current=e.target.closest(z)?e.target:null),l?.(e)},onContextMenuCapture:e=>{let t=e.target.closest(z);t&&(g.current=t.querySelector(`.${I.trigger}`)),u?.(e)},...d(`page-tabs`,`root`),children:[S.overflow&&(S.rtl?O:D),(0,R.jsx)(`div`,{ref:m,className:I.viewport,onScroll:w,...d(`page-tabs`,`viewport`),children:(0,R.jsx)(`div`,{ref:h,className:I.list,...d(`page-tabs`,`list`),children:n})}),S.overflow&&(S.rtl?D:O),a&&(0,R.jsx)(`div`,{className:I.actions,...d(`page-tabs`,`actions`),children:a})]})},V=({ref:e,value:t,label:n,active:r=!1,disabled:a=!1,icon:o,action:s,onSelect:c,className:l,...u})=>(0,R.jsxs)(`div`,{...u,ref:e,className:i(I.pageTab,l),"data-value":t,...d(`page-tab`,`root`,{current:r,disabled:a}),children:[(0,R.jsx)(m,{content:n,placement:`bottom-start`,variant:`glass`,disabled:a,asChild:!0,children:(0,R.jsxs)(`button`,{type:`button`,className:I.trigger,...d(`page-tab`,`trigger`),"aria-current":r?`page`:void 0,disabled:a,onClick:c,children:[o&&(0,R.jsx)(`span`,{className:I.icon,"aria-hidden":`true`,...d(`page-tab`,`icon`),children:o}),(0,R.jsx)(`span`,{className:I.label,...d(`page-tab`,`label`),children:n})]})}),s&&(0,R.jsx)(`span`,{className:I.action,...d(`page-tab`,`action`),children:s})]})})))()}function ae(){let[e,t]=(0,U.useState)(G),[n,r]=(0,U.useState)(`books`),i=i=>{let a=e.filter(e=>e.value!==i);t(a),i===n&&r(a[0]?.value??``)};return(0,W.jsx)(B,{"aria-label":`Open pages`,activeValue:n,children:e.map(e=>(0,W.jsx)(V,{value:e.value,label:e.label,icon:e.value===`home`?(0,W.jsx)(T,{}):(0,W.jsx)(w,{}),active:e.value===n,onSelect:()=>r(e.value),action:e.value!==`home`&&(0,W.jsx)(_,{size:`small`,"aria-label":`Close ${e.label}`,icon:(0,W.jsx)(E,{}),onClick:()=>i(e.value)})},e.value))})}var U,W,G;function K(){return(K=e((()=>{U=t(),g(),H(),S(),W=n(),G=[{value:`home`,label:`Dashboard`},{value:`books`,label:`Books`},{value:`article`,label:`A very long article title that gets truncated`}]})))()}function oe(){let[e,t]=(0,q.useState)(Y),[n,r]=(0,q.useState)(`Reports`),i=e=>{t([e]),r(e)};return(0,J.jsx)(B,{"aria-label":`Open pages`,activeValue:n,actions:(0,J.jsx)(y,{items:[{key:`reset`,label:`Reopen all pages`}],onSelect:()=>t(Y),children:(0,J.jsx)(_,{size:`small`,"aria-label":`Page menu`,icon:(0,J.jsx)(C,{})})}),children:e.map(e=>(0,J.jsx)(x,{items:[{key:`close-others`,label:`Close other pages`}],onSelect:()=>i(e),children:(0,J.jsx)(V,{value:e,label:e,active:e===n,onSelect:()=>r(e)})},e))})}var q,J,Y;function X(){return(X=e((()=>{q=t(),b(),g(),v(),H(),S(),J=n(),Y=[`Overview`,`Reports`,`Settings`,`Users`,`Billing`]})))()}function se(){let[e,t]=(0,ce.useState)(Q[9]);return(0,Z.jsx)(`div`,{style:{maxWidth:520},children:(0,Z.jsx)(B,{"aria-label":`Chapters`,activeValue:e,children:Q.map(n=>(0,Z.jsx)(V,{value:n,label:n,active:n===e,disabled:n===`Chapter 3`,onSelect:()=>t(n)},n))})})}var ce,Z,Q;function le(){return(le=e((()=>{ce=t(),H(),Z=n(),Q=Array.from({length:12},(e,t)=>`Chapter ${t+1}`)})))()}var ue;function de(){return(de=e((()=>{ue=`import { useState } from "react";
import { IconButton, PageTab, PageTabs } from "minerva-design";
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
`})))()}var fe;function pe(){return(pe=e((()=>{fe=`import { useState } from "react";
import {
  ContextMenu,
  IconButton,
  Menu,
  PageTab,
  PageTabs,
} from "minerva-design";
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
`})))()}var $;function me(){return(me=e((()=>{$=`import { useState } from "react";
import { PageTab, PageTabs } from "minerva-design";

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
`})))()}var he,ge,_e;function ve(){return(ve=e((()=>{K(),X(),le(),de(),pe(),me(),t(),s(),o(),he=n(),ge=c(Object.assign({"./demos/basic.tsx":ae,"./demos/context-menu.tsx":oe,"./demos/overflow.tsx":se}),Object.assign({"./demos/basic.tsx":ue,"./demos/context-menu.tsx":fe,"./demos/overflow.tsx":$})),_e=()=>(0,he.jsx)(l,{id:`page-tabs`,demos:ge})})))()}ve();export{_e as default};