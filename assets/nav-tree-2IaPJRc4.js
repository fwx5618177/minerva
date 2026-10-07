import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{C as r,D as i,E as a,O as o,_ as s,c,g as l,k as ee,n as u,s as d,t as f,w as p}from"./DocPage-BvqFnACE.js";import{n as m,t as h}from"./useI18n-s5sAv-jy.js";import{n as g,t as _}from"./Button-CVTxJPft.js";import{T as v,j as te}from"./icons-BaZJL-85.js";import{t as ne}from"./dataAttributes-C-grv0bs.js";import{S as re,g as ie,l as y,r as ae,s as b,u as x,w as S}from"./lu-oN_z8qzA.js";var C,w,T,E,D,O,k,oe,se,ce,le,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{C=`_navTree_l3f8s_1`,w=`_section_l3f8s_8`,T=`_sectionTitle_l3f8s_20`,E=`_list_l3f8s_28`,D=`_children_l3f8s_29`,O=`_branch_l3f8s_30`,k=`_item_l3f8s_42`,oe=`_active_l3f8s_70`,se=`_disabled_l3f8s_85`,ce=`_icon_l3f8s_90`,le=`_copy_l3f8s_108`,A=`_label_l3f8s_114`,j=`_description_l3f8s_115`,M=`_wrapLabels_l3f8s_136`,N=`_trailing_l3f8s_147`,P=`_end_l3f8s_155`,F=`_chevron_l3f8s_161`,I=`_nested_l3f8s_189`,L=`_collapsed_l3f8s_204`,R={navTree:C,section:w,sectionTitle:T,list:E,children:D,branch:O,item:k,active:oe,disabled:se,icon:ce,copy:le,label:A,description:j,wrapLabels:M,trailing:N,end:P,chevron:F,nested:I,collapsed:L}})))()}function B(e,t,n){for(let r of e){if(r.id===t)return!0;if(r.children&&B(r.children,t,n))return n.add(r.id),!0}return!1}function V(e){let t=e.currentTarget,n=e.target.closest(W);if(!n)return;let r=ue(t),i=r.indexOf(n),a;switch(l(e.key,t)){case`ArrowDown`:a=r[i+1];break;case`ArrowUp`:a=i>0?r[i-1]:void 0;break;case`Home`:a=r[0];break;case`End`:a=r[r.length-1];break;case`ArrowLeft`:if(n.getAttribute(`aria-expanded`)===`true`)return;a=n.closest(G)?.parentElement?.querySelector(`:scope > ${W}`);break;default:return}a&&(e.preventDefault(),a.focus())}var H,U,W,G,ue,K;function q(){return(q=e((()=>{o(),m(),v(),a(),p(),s(),z(),H=t(),U=n(),W=`.${R.item}`,G=`.${R.children}`,ue=e=>Array.from(e.querySelectorAll(W)).filter(e=>!e.disabled&&e.getAttribute(`aria-disabled`)!==`true`),K=({sections:e,activeId:t,collapsed:n=!1,wrapLabels:a=!1,defaultExpandedIds:o,expandedIds:s,onExpandedChange:c,onItemSelect:u,renderLink:d,className:f,style:p,"aria-label":m,"aria-labelledby":g,id:_,ref:v,...re})=>{let{t:ie}=h(),y=(0,H.useRef)(null),ae=i(y,v);(0,H.useEffect)(()=>{let e=y.current;if(e)return e.addEventListener(`keydown`,V),()=>e.removeEventListener(`keydown`,V)},[]);let[b,x]=r({value:s,defaultValue:()=>o??[],onChange:c,name:`NavTree`,prop:`expandedIds`}),[S,C]=(0,H.useState)(()=>new Set),w=(0,H.useMemo)(()=>{let n=new Set;for(let r of e)B(r.items,t,n);return n},[t,e]),T=(0,H.useMemo)(()=>new Set(b),[b]),E=e=>T.has(e)||!S.has(e)&&w.has(e),D=(e,t)=>{let n=new Set(T),r=new Set(S);t?(n.add(e.id),r.delete(e.id)):(n.delete(e.id),r.add(e.id)),x(Array.from(n)),C(r)},O=e=>{D(e,!E(e.id)),u?.(e)},k=(e,r)=>{let i=!!e.children?.length,a=e.id===t,o=w.has(e.id),s=i&&E(e.id),c=!!e.disabled,f=ee(R.item,r>0&&R.nested,a&&R.active,c&&R.disabled),p={active:a,ancestorActive:o,expanded:s,depth:r,collapsed:n,hasChildren:i,disabled:c,className:f},m=e.description?`${e.label} / ${e.description}`:e.label,h=(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`span`,{className:R.icon,"aria-hidden":`true`,children:e.icon}),(0,U.jsxs)(`span`,{className:R.copy,children:[(0,U.jsx)(`span`,{className:R.label,children:e.label}),e.description&&(0,U.jsx)(`small`,{className:R.description,children:e.description})]}),!n&&(e.endContent||i)&&(0,U.jsxs)(`span`,{className:R.trailing,children:[e.endContent&&(0,U.jsx)(`span`,{className:R.end,children:e.endContent}),i&&(0,U.jsx)(`span`,{className:R.chevron,"aria-hidden":`true`,children:(0,U.jsx)(te,{size:16,strokeWidth:2})})]})]});if(i)return(0,U.jsxs)(`div`,{className:R.branch,children:[(0,U.jsx)(`button`,{className:f,type:`button`,title:m,"aria-expanded":s,"data-active":a||void 0,"data-ancestor-active":o||void 0,"data-expanded":s||void 0,disabled:c,onClick:()=>O(e),onKeyDown:t=>{if(n)return;let r=l(t.key,t.currentTarget);r===`ArrowRight`?(t.preventDefault(),s?t.currentTarget.parentElement?.querySelector(`${G} ${W}`)?.focus():D(e,!0)):r===`ArrowLeft`&&s&&(t.preventDefault(),D(e,!1))},children:h}),s&&!n&&(0,U.jsx)(`div`,{className:R.children,children:e.children?.map(e=>k(e,r+1))})]},e.id);if(d)return(0,U.jsx)(H.Fragment,{children:d(e,h,p)},e.id);let g={className:f,title:m,"data-active":a||void 0};return c?(0,U.jsx)(`span`,{...g,role:`link`,"aria-disabled":`true`,children:h},e.id):e.href===void 0?(0,U.jsx)(`button`,{...g,type:`button`,"aria-current":a?`page`:void 0,onClick:()=>u?.(e),children:h},e.id):(0,U.jsx)(`a`,{...g,href:e.href,"aria-current":a?`page`:void 0,onClick:()=>u?.(e),children:h},e.id)};return(0,U.jsx)(`nav`,{ref:ae,className:ee(R.navTree,n&&R.collapsed,a&&!n&&R.wrapLabels,f),...ne(re),id:_,style:p,"aria-label":m??(g?void 0:ie(`navTree.label`)),"aria-labelledby":g,children:e.map(e=>(0,U.jsxs)(`section`,{className:R.section,children:[e.title&&(0,U.jsx)(`h2`,{className:R.sectionTitle,children:e.title}),(0,U.jsx)(`div`,{className:R.list,children:e.items.map(e=>k(e,0))})]},e.id))})}})))()}function de(){let[e,t]=(0,fe.useState)(`traffic`);return(0,J.jsx)(`div`,{style:{maxWidth:260},children:(0,J.jsx)(K,{"aria-label":`Main navigation`,sections:pe,activeId:e,onItemSelect:e=>{e.children||t(e.id)}})})}var fe,J,pe;function me(){return(me=e((()=>{fe=t(),q(),S(),J=n(),pe=[{id:`main`,items:[{id:`home`,label:`Home`,href:`#home`,icon:(0,J.jsx)(y,{})},{id:`analytics`,label:`Analytics`,description:`Traffic and conversions`,icon:(0,J.jsx)(ae,{}),children:[{id:`traffic`,label:`Traffic`,href:`#traffic`},{id:`funnels`,label:`Funnels`,href:`#funnels`}]}]},{id:`admin`,title:`Administration`,items:[{id:`users`,label:`Users`,href:`#users`,icon:(0,J.jsx)(re,{}),endContent:(0,J.jsx)(`small`,{children:`12`})},{id:`settings`,label:`Settings`,href:`#settings`,icon:(0,J.jsx)(ie,{}),disabled:!0}]}]})))()}function he(){let[e,t]=(0,ge.useState)(!1);return(0,Y.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,Y.jsx)(_,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>!e),children:e?`Expand sidebar`:`Collapse sidebar`}),(0,Y.jsx)(`div`,{style:{width:e?56:220},children:(0,Y.jsx)(K,{sections:_e,activeId:`inbox`,collapsed:e,wrapLabels:!0})})]})}var ge,Y,_e;function ve(){return(ve=e((()=>{ge=t(),g(),q(),S(),Y=n(),_e=[{id:`main`,items:[{id:`home`,label:`Home`,href:`#home`,icon:(0,Y.jsx)(y,{})},{id:`inbox`,label:`Inbox`,href:`#inbox`,icon:(0,Y.jsx)(x,{})},{id:`docs`,label:`Documents with a rather long name`,description:`Shared with the whole team`,href:`#docs`,icon:(0,Y.jsx)(b,{})}]}]})))()}function ye(){let[e,t]=(0,X.useState)(`/ssr`),[n,r]=(0,X.useState)([`advanced`]);return(0,Z.jsx)(`div`,{style:{maxWidth:260},children:(0,Z.jsx)(K,{sections:Q,activeId:Q[0].items.flatMap(e=>[e,...e.children??[]]).find(t=>t.href===e)?.id,expandedIds:n,onExpandedChange:r,renderLink:(e,n,r)=>(0,Z.jsx)(`a`,{href:`#${e.href}`,className:r.className,"aria-current":r.active?`page`:void 0,onClick:n=>{n.preventDefault(),t(e.href??`/`)},children:n},e.id)})})}var X,Z,Q;function be(){return(be=e((()=>{X=t(),q(),Z=n(),Q=[{id:`docs`,title:`Guides`,items:[{id:`intro`,label:`Introduction`,href:`/intro`},{id:`advanced`,label:`Advanced`,children:[{id:`ssr`,label:`Server rendering`,href:`/ssr`},{id:`theming`,label:`Theming`,href:`/theming`}]}]}]})))()}var xe;function Se(){return(Se=e((()=>{xe=`import { useState } from "react";
import { NavTree, type NavTreeSection } from "@minerva/lib-core";
import { LuChartBar, LuHouse, LuSettings, LuUsers } from "react-icons/lu";

const sections: NavTreeSection[] = [
  {
    id: "main",
    items: [
      { id: "home", label: "Home", href: "#home", icon: <LuHouse /> },
      {
        id: "analytics",
        label: "Analytics",
        description: "Traffic and conversions",
        icon: <LuChartBar />,
        children: [
          { id: "traffic", label: "Traffic", href: "#traffic" },
          { id: "funnels", label: "Funnels", href: "#funnels" },
        ],
      },
    ],
  },
  {
    id: "admin",
    title: "Administration",
    items: [
      {
        id: "users",
        label: "Users",
        href: "#users",
        icon: <LuUsers />,
        endContent: <small>12</small>,
      },
      {
        id: "settings",
        label: "Settings",
        href: "#settings",
        icon: <LuSettings />,
        disabled: true,
      },
    ],
  },
];

export default function BasicDemo() {
  const [active, setActive] = useState("traffic");
  return (
    <div style={{ maxWidth: 260 }}>
      <NavTree
        aria-label="Main navigation"
        sections={sections}
        activeId={active}
        onItemSelect={(item) => {
          if (!item.children) setActive(item.id);
        }}
      />
    </div>
  );
}
`})))()}var Ce;function $(){return($=e((()=>{Ce=`import { useState } from "react";
import { Button, NavTree, type NavTreeSection } from "@minerva/lib-core";
import { LuFileText, LuHouse, LuInbox } from "react-icons/lu";

const sections: NavTreeSection[] = [
  {
    id: "main",
    items: [
      { id: "home", label: "Home", href: "#home", icon: <LuHouse /> },
      { id: "inbox", label: "Inbox", href: "#inbox", icon: <LuInbox /> },
      {
        id: "docs",
        label: "Documents with a rather long name",
        description: "Shared with the whole team",
        href: "#docs",
        icon: <LuFileText />,
      },
    ],
  },
];

export default function CollapsedDemo() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <Button
        color="neutral"
        variant="outline"
        size="small"
        onClick={() => setCollapsed((c) => !c)}
      >
        {collapsed ? "Expand sidebar" : "Collapse sidebar"}
      </Button>
      <div style={{ width: collapsed ? 56 : 220 }}>
        <NavTree
          sections={sections}
          activeId="inbox"
          collapsed={collapsed}
          wrapLabels
        />
      </div>
    </div>
  );
}
`})))()}var we;function Te(){return(Te=e((()=>{we=`import { useState } from "react";
import { NavTree, type NavTreeSection } from "@minerva/lib-core";

const sections: NavTreeSection[] = [
  {
    id: "docs",
    title: "Guides",
    items: [
      { id: "intro", label: "Introduction", href: "/intro" },
      {
        id: "advanced",
        label: "Advanced",
        children: [
          { id: "ssr", label: "Server rendering", href: "/ssr" },
          { id: "theming", label: "Theming", href: "/theming" },
        ],
      },
    ],
  },
];

export default function CustomLinkDemo() {
  const [path, setPath] = useState("/ssr");
  const [expanded, setExpanded] = useState<string[]>(["advanced"]);
  return (
    <div style={{ maxWidth: 260 }}>
      <NavTree
        sections={sections}
        activeId={
          sections[0].items
            .flatMap((i) => [i, ...(i.children ?? [])])
            .find((i) => i.href === path)?.id
        }
        expandedIds={expanded}
        onExpandedChange={setExpanded}
        // Render your router's link component; keep state.className on it.
        renderLink={(item, content, state) => (
          <a
            key={item.id}
            href={\`#\${item.href}\`}
            className={state.className}
            aria-current={state.active ? "page" : undefined}
            onClick={(event) => {
              event.preventDefault();
              setPath(item.href ?? "/");
            }}
          >
            {content}
          </a>
        )}
      />
    </div>
  );
}
`})))()}var Ee,De,Oe;function ke(){return(ke=e((()=>{me(),ve(),be(),Se(),$(),Te(),t(),u(),c(),Ee=n(),De=d(Object.assign({"./demos/basic.tsx":de,"./demos/collapsed.tsx":he,"./demos/custom-link.tsx":ye}),Object.assign({"./demos/basic.tsx":xe,"./demos/collapsed.tsx":Ce,"./demos/custom-link.tsx":we})),Oe=()=>(0,Ee.jsx)(f,{id:`nav-tree`,demos:De})})))()}ke();export{Oe as default};