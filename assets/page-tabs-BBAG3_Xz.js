import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Pt as r,X as i,cn as a}from"./minerva-web-components-e9i9Tzii.js";import{n as o,t as s}from"./useI18n-Brv-VDVY.js";import{S as c,T as l,g as u}from"./icons-C9qyBhWC.js";import{n as d,t as f}from"./Tooltip-SfXPfzVC.js";import{t as p}from"./direction-B2fcyo3I.js";import{n as m,t as h}from"./IconButton-B4tqbPo6.js";import{n as g,t as _}from"./Menu-BG2Syw2w.js";import{n as v,t as y}from"./ContextMenu-Ci7TQDen.js";import{c as b,n as x,s as S,t as C}from"./DocPage-BeqNKFhE.js";import{C as w,l as ee,o as T,s as E,w as D}from"./lu-DukeLmz9.js";var O,k,A,j,M,N,P,F,te,ne,I;function L(){return(L=e((()=>{O=`_pageTabs_1t7c9_1`,k=`_viewport_1t7c9_13`,A=`_list_1t7c9_24`,j=`_pageTab_1t7c9_1`,M=`_trigger_1t7c9_70`,N=`_icon_1t7c9_97`,P=`_label_1t7c9_106`,F=`_action_1t7c9_113`,te=`_actions_1t7c9_114`,ne=`_scroll_1t7c9_125`,I={pageTabs:O,viewport:k,list:A,pageTab:j,trigger:M,icon:N,label:P,action:F,actions:te,scroll:ne}})))()}var R,z,B,V,H;function U(){return(U=e((()=>{a(),o(),l(),p(),f(),m(),L(),R=t(),z=n(),B=`.${I.pageTab}`,V=({"aria-label":e,activeValue:t,children:n,actions:a,scrollLeftLabel:o,scrollRightLabel:l,className:d,onFocusCapture:f,onContextMenuCapture:p,...m})=>{let{t:g}=s(),_=(0,R.useRef)(null),v=(0,R.useRef)(null),y=(0,R.useRef)(null),b=(0,R.useRef)(null),x=(0,R.useRef)(null),S=(0,R.useRef)(null),C=(0,R.useRef)(null),[w,ee]=(0,R.useState)({overflow:!1,left:!1,right:!1,rtl:!1}),T=(0,R.useCallback)(()=>{let e=_.current;if(!e)return;let t=r(e)===`rtl`,n=e.scrollWidth-e.clientWidth,i={overflow:e.scrollWidth>e.clientWidth+1,left:t?e.scrollLeft>-n+1:e.scrollLeft>1,right:t?e.scrollLeft<-1:e.scrollLeft<n-1,rtl:t};ee(e=>e.overflow===i.overflow&&e.left===i.left&&e.right===i.right&&e.rtl===i.rtl?e:i)},[]),E=(0,R.useCallback)(()=>{let e=_.current;if(!e)return;let t=v.current?.querySelector(`${B}[data-active]`);if(t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();r.width>n.width?e.scrollLeft+=r.left-n.left:r.left<n.left?e.scrollLeft-=n.left-r.left:r.right>n.right&&(e.scrollLeft+=r.right-n.right)}T()},[T]);(0,R.useEffect)(()=>{let e=JSON.stringify([t,...Array.from(v.current?.querySelectorAll(B)??[],e=>[e.dataset.value,e.dataset.active])]);e!==b.current&&(b.current=e,E()),y.current&&!y.current.isConnected&&document.activeElement===document.body&&v.current?.querySelector(`[aria-current="page"]`)?.focus({preventScroll:!0});let n=C.current;n?.disabled&&(C.current=null,(document.activeElement===n||document.activeElement===document.body)&&(n===x.current?S:x).current?.focus({preventScroll:!0}))}),(0,R.useEffect)(()=>{if(typeof ResizeObserver>`u`)return;let e=new ResizeObserver(()=>E());return _.current&&e.observe(_.current),v.current&&e.observe(v.current),()=>e.disconnect()},[E]);let D=e=>{let t=_.current;t&&(C.current=e<0?x.current:S.current,t.scrollLeft+=e*Math.max(1,t.clientWidth*.8),T())},O=(0,z.jsx)(h,{ref:x,className:I.scroll,"aria-label":o??g(`pageTabs.scrollLeft`),size:`small`,shape:`square`,disabled:!w.left,onClick:()=>D(-1),icon:(0,z.jsx)(c,{size:18,"aria-hidden":`true`})}),k=(0,z.jsx)(h,{ref:S,className:I.scroll,"aria-label":l??g(`pageTabs.scrollRight`),size:`small`,shape:`square`,disabled:!w.right,onClick:()=>D(1),icon:(0,z.jsx)(u,{size:18,"aria-hidden":`true`})});return(0,z.jsxs)(`nav`,{...m,"aria-label":e,className:i(I.pageTabs,d),onFocusCapture:e=>{e.currentTarget.contains(e.target)&&(y.current=e.target.closest(B)?e.target:null),f?.(e)},onContextMenuCapture:e=>{let t=e.target.closest(B);t&&(y.current=t.querySelector(`.${I.trigger}`)),p?.(e)},children:[w.overflow&&(w.rtl?k:O),(0,z.jsx)(`div`,{ref:_,className:I.viewport,onScroll:T,children:(0,z.jsx)(`div`,{ref:v,className:I.list,children:n})}),w.overflow&&(w.rtl?O:k),a&&(0,z.jsx)(`div`,{className:I.actions,children:a})]})},H=({ref:e,value:t,label:n,active:r=!1,disabled:a=!1,icon:o,action:s,onSelect:c,className:l,...u})=>(0,z.jsxs)(`div`,{...u,ref:e,className:i(I.pageTab,l),"data-value":t,"data-active":r||void 0,"data-disabled":a||void 0,children:[(0,z.jsx)(d,{content:n,placement:`bottom-start`,variant:`glass`,disabled:a,asChild:!0,children:(0,z.jsxs)(`button`,{type:`button`,className:I.trigger,"aria-current":r?`page`:void 0,disabled:a,onClick:c,children:[o&&(0,z.jsx)(`span`,{className:I.icon,"aria-hidden":`true`,children:o}),(0,z.jsx)(`span`,{className:I.label,children:n})]})}),s&&(0,z.jsx)(`span`,{className:I.action,children:s})]})})))()}function re(){let[e,t]=(0,W.useState)(K),[n,r]=(0,W.useState)(`books`),i=i=>{let a=e.filter(e=>e.value!==i);t(a),i===n&&r(a[0]?.value??``)};return(0,G.jsx)(V,{"aria-label":`Open pages`,activeValue:n,children:e.map(e=>(0,G.jsx)(H,{value:e.value,label:e.label,icon:e.value===`home`?(0,G.jsx)(ee,{}):(0,G.jsx)(E,{}),active:e.value===n,onSelect:()=>r(e.value),action:e.value!==`home`&&(0,G.jsx)(h,{size:`small`,"aria-label":`Close ${e.label}`,icon:(0,G.jsx)(w,{}),onClick:()=>i(e.value)})},e.value))})}var W,G,K;function q(){return(q=e((()=>{W=t(),m(),U(),D(),G=n(),K=[{value:`home`,label:`Dashboard`},{value:`books`,label:`Books`},{value:`article`,label:`A very long article title that gets truncated`}]})))()}function ie(){let[e,t]=(0,J.useState)(X),[n,r]=(0,J.useState)(`Reports`),i=e=>{t([e]),r(e)};return(0,Y.jsx)(V,{"aria-label":`Open pages`,activeValue:n,actions:(0,Y.jsx)(_,{items:[{key:`reset`,label:`Reopen all pages`}],onSelect:()=>t(X),children:(0,Y.jsx)(h,{size:`small`,"aria-label":`Page menu`,icon:(0,Y.jsx)(T,{})})}),children:e.map(e=>(0,Y.jsx)(y,{items:[{key:`close-others`,label:`Close other pages`}],onSelect:()=>i(e),children:(0,Y.jsx)(H,{value:e,label:e,active:e===n,onSelect:()=>r(e)})},e))})}var J,Y,X;function ae(){return(ae=e((()=>{J=t(),v(),m(),g(),U(),D(),Y=n(),X=[`Overview`,`Reports`,`Settings`,`Users`,`Billing`]})))()}function oe(){let[e,t]=(0,se.useState)(Q[9]);return(0,Z.jsx)(`div`,{style:{maxWidth:520},children:(0,Z.jsx)(V,{"aria-label":`Chapters`,activeValue:e,children:Q.map(n=>(0,Z.jsx)(H,{value:n,label:n,active:n===e,disabled:n===`Chapter 3`,onSelect:()=>t(n)},n))})})}var se,Z,Q;function ce(){return(ce=e((()=>{se=t(),U(),Z=n(),Q=Array.from({length:12},(e,t)=>`Chapter ${t+1}`)})))()}var le;function ue(){return(ue=e((()=>{le=`import { useState } from "react";
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
`})))()}var me,he,ge;function _e(){return(_e=e((()=>{q(),ae(),ce(),ue(),fe(),$(),t(),x(),b(),me=n(),he=S(Object.assign({"./demos/basic.tsx":re,"./demos/context-menu.tsx":ie,"./demos/overflow.tsx":oe}),Object.assign({"./demos/basic.tsx":le,"./demos/context-menu.tsx":de,"./demos/overflow.tsx":pe})),ge=()=>(0,me.jsx)(C,{id:`page-tabs`,demos:he})})))()}_e();export{ge as default};