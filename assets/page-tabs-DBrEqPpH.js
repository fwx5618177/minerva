import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{O as r,Ot as i,en as a}from"./minerva-web-components-gmidRbuG.js";import{m as o,n as s,p as c,t as l}from"./DocPage-OkRujup2.js";import{n as u,t as ee}from"./useI18n-7NNo_JVm.js";import{t as d}from"./stylingHooks-GjssfG7q.js";import{S as te,T as f,g as ne}from"./icons-Dj0E45-e.js";import{n as p,t as m}from"./Tooltip-BP79a_4N.js";import{t as h}from"./direction-DP7if3Ff.js";import{n as g,t as _}from"./IconButton-btF6mazk.js";import{n as v,t as y}from"./Menu-CF2Fe1xN.js";import{n as b,t as x}from"./ContextMenu-pP9K32GV.js";import{T as S,o as C,s as w,u as T,w as E}from"./lu-COW_cFGB.js";var D,O,k,A,j,M,N,P,F,I,L;function re(){return(re=e((()=>{D=`_pageTabs_tblqv_1`,O=`_viewport_tblqv_28`,k=`_list_tblqv_39`,A=`_pageTab_tblqv_1`,j=`_trigger_tblqv_85`,M=`_icon_tblqv_112`,N=`_label_tblqv_121`,P=`_action_tblqv_128`,F=`_actions_tblqv_129`,I=`_scroll_tblqv_140`,L={pageTabs:D,viewport:O,list:k,pageTab:A,trigger:j,icon:M,label:N,action:P,actions:F,scroll:I}})))()}var R,z,B,V,H;function U(){return(U=e((()=>{i(),u(),f(),h(),p(),g(),re(),R=t(),z=n(),B=`.${L.pageTab}`,V=({"aria-label":e,activeValue:t,children:n,actions:i,scrollLeftLabel:o,scrollRightLabel:s,className:c,onFocusCapture:l,onContextMenuCapture:u,...f})=>{let{t:p}=ee(),m=(0,R.useRef)(null),h=(0,R.useRef)(null),g=(0,R.useRef)(null),v=(0,R.useRef)(null),y=(0,R.useRef)(null),b=(0,R.useRef)(null),x=(0,R.useRef)(null),[S,C]=(0,R.useState)({overflow:!1,left:!1,right:!1,rtl:!1}),w=(0,R.useCallback)(()=>{let e=m.current;if(!e)return;let t=r(e)===`rtl`,n=e.scrollWidth-e.clientWidth,i={overflow:e.scrollWidth>e.clientWidth+1,left:t?e.scrollLeft>-n+1:e.scrollLeft>1,right:t?e.scrollLeft<-1:e.scrollLeft<n-1,rtl:t};C(e=>e.overflow===i.overflow&&e.left===i.left&&e.right===i.right&&e.rtl===i.rtl?e:i)},[]),T=(0,R.useCallback)(()=>{let e=m.current;if(!e)return;let t=h.current?.querySelector(`${B}[data-current]`);if(t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();r.width>n.width?e.scrollLeft+=r.left-n.left:r.left<n.left?e.scrollLeft-=n.left-r.left:r.right>n.right&&(e.scrollLeft+=r.right-n.right)}w()},[w]);(0,R.useEffect)(()=>{let e=JSON.stringify([t,...Array.from(h.current?.querySelectorAll(B)??[],e=>[e.dataset.value,e.dataset.active])]);e!==v.current&&(v.current=e,T()),g.current&&!g.current.isConnected&&document.activeElement===document.body&&h.current?.querySelector(`[aria-current="page"]`)?.focus({preventScroll:!0});let n=x.current;n?.disabled&&(x.current=null,(document.activeElement===n||document.activeElement===document.body)&&(n===y.current?b:y).current?.focus({preventScroll:!0}))}),(0,R.useEffect)(()=>{if(typeof ResizeObserver>`u`)return;let e=new ResizeObserver(()=>T());return m.current&&e.observe(m.current),h.current&&e.observe(h.current),()=>e.disconnect()},[T]);let E=e=>{let t=m.current;t&&(x.current=e<0?y.current:b.current,t.scrollLeft+=e*Math.max(1,t.clientWidth*.8),w())},D=(0,z.jsx)(_,{ref:y,className:L.scroll,"aria-label":o??p(`pageTabs.scrollLeft`),size:`small`,shape:`square`,disabled:!S.left,onClick:()=>E(-1),icon:(0,z.jsx)(te,{size:18,"aria-hidden":`true`})}),O=(0,z.jsx)(_,{ref:b,className:L.scroll,"aria-label":s??p(`pageTabs.scrollRight`),size:`small`,shape:`square`,disabled:!S.right,onClick:()=>E(1),icon:(0,z.jsx)(ne,{size:18,"aria-hidden":`true`})});return(0,z.jsxs)(`nav`,{...f,"aria-label":e,className:a(L.pageTabs,c),onFocusCapture:e=>{e.currentTarget.contains(e.target)&&(g.current=e.target.closest(B)?e.target:null),l?.(e)},onContextMenuCapture:e=>{let t=e.target.closest(B);t&&(g.current=t.querySelector(`.${L.trigger}`)),u?.(e)},...d(`page-tabs`,`root`),children:[S.overflow&&(S.rtl?O:D),(0,z.jsx)(`div`,{ref:m,className:L.viewport,onScroll:w,...d(`page-tabs`,`viewport`),children:(0,z.jsx)(`div`,{ref:h,className:L.list,...d(`page-tabs`,`list`),children:n})}),S.overflow&&(S.rtl?D:O),i&&(0,z.jsx)(`div`,{className:L.actions,...d(`page-tabs`,`actions`),children:i})]})},H=({ref:e,value:t,label:n,active:r=!1,disabled:i=!1,icon:o,action:s,onSelect:c,className:l,...u})=>(0,z.jsxs)(`div`,{...u,ref:e,className:a(L.pageTab,l),"data-value":t,...d(`page-tab`,`root`,{current:r,disabled:i}),children:[(0,z.jsx)(m,{content:n,placement:`bottom-start`,variant:`glass`,disabled:i,asChild:!0,children:(0,z.jsxs)(`button`,{type:`button`,className:L.trigger,...d(`page-tab`,`trigger`),"aria-current":r?`page`:void 0,disabled:i,onClick:c,children:[o&&(0,z.jsx)(`span`,{className:L.icon,"aria-hidden":`true`,...d(`page-tab`,`icon`),children:o}),(0,z.jsx)(`span`,{className:L.label,...d(`page-tab`,`label`),children:n})]})}),s&&(0,z.jsx)(`span`,{className:L.action,...d(`page-tab`,`action`),children:s})]})})))()}function ie(){let[e,t]=(0,W.useState)(K),[n,r]=(0,W.useState)(`books`),i=i=>{let a=e.filter(e=>e.value!==i);t(a),i===n&&r(a[0]?.value??``)};return(0,G.jsx)(V,{"aria-label":`Open pages`,activeValue:n,children:e.map(e=>(0,G.jsx)(H,{value:e.value,label:e.label,icon:e.value===`home`?(0,G.jsx)(T,{}):(0,G.jsx)(w,{}),active:e.value===n,onSelect:()=>r(e.value),action:e.value!==`home`&&(0,G.jsx)(_,{size:`small`,"aria-label":`Close ${e.label}`,icon:(0,G.jsx)(E,{}),onClick:()=>i(e.value)})},e.value))})}var W,G,K;function q(){return(q=e((()=>{W=t(),g(),U(),S(),G=n(),K=[{value:`home`,label:`Dashboard`},{value:`books`,label:`Books`},{value:`article`,label:`A very long article title that gets truncated`}]})))()}function ae(){let[e,t]=(0,J.useState)(X),[n,r]=(0,J.useState)(`Reports`),i=e=>{t([e]),r(e)};return(0,Y.jsx)(V,{"aria-label":`Open pages`,activeValue:n,actions:(0,Y.jsx)(y,{items:[{key:`reset`,label:`Reopen all pages`}],onSelect:()=>t(X),children:(0,Y.jsx)(_,{size:`small`,"aria-label":`Page menu`,icon:(0,Y.jsx)(C,{})})}),children:e.map(e=>(0,Y.jsx)(x,{items:[{key:`close-others`,label:`Close other pages`}],onSelect:()=>i(e),children:(0,Y.jsx)(H,{value:e,label:e,active:e===n,onSelect:()=>r(e)})},e))})}var J,Y,X;function Z(){return(Z=e((()=>{J=t(),b(),g(),v(),U(),S(),Y=n(),X=[`Overview`,`Reports`,`Settings`,`Users`,`Billing`]})))()}function oe(){let[e,t]=(0,se.useState)($[9]);return(0,Q.jsx)(`div`,{style:{maxWidth:520},children:(0,Q.jsx)(V,{"aria-label":`Chapters`,activeValue:e,children:$.map(n=>(0,Q.jsx)(H,{value:n,label:n,active:n===e,disabled:n===`Chapter 3`,onSelect:()=>t(n)},n))})})}var se,Q,$;function ce(){return(ce=e((()=>{se=t(),U(),Q=n(),$=Array.from({length:12},(e,t)=>`Chapter ${t+1}`)})))()}var le;function ue(){return(ue=e((()=>{le=`import { useState } from "react";
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
`})))()}var de;function fe(){return(fe=e((()=>{de=`import { useState } from "react";
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
`})))()}var pe;function me(){return(me=e((()=>{pe=`import { useState } from "react";
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
`})))()}var he,ge,_e;function ve(){return(ve=e((()=>{q(),Z(),ce(),ue(),fe(),me(),t(),s(),o(),he=n(),ge=c(Object.assign({"./demos/basic.tsx":ie,"./demos/context-menu.tsx":ae,"./demos/overflow.tsx":oe}),Object.assign({"./demos/basic.tsx":le,"./demos/context-menu.tsx":de,"./demos/overflow.tsx":pe})),_e=()=>(0,he.jsx)(l,{id:`page-tabs`,demos:ge})})))()}ve();export{_e as default};