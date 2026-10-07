import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{n as a,t as o}from"./useI18n-DtQV8aM0.js";import{n as s,t as c}from"./Button-CG2pPO-r.js";import{T as l,j as ee}from"./icons-CtD3xdmP.js";import{n as u,t as d}from"./mergeRefs-CWbOvZcQ.js";import{t as f}from"./dataAttributes-C-grv0bs.js";import{n as p,t as m}from"./useControllableState-NzKJCN8h.js";import{n as h,t as te}from"./direction-BdBdG3Jn.js";import{c as g,n as _,s as v,t as y}from"./DocPage-DzKszXiH.js";import{S as b,g as x,l as S,r as ne,s as C,u as re,w}from"./lu-DBH5Ve51.js";var T,E,D,O,k,A,j,ie,ae,oe,se,ce,le,M,N,P,F,I,L,R;function z(){return(z=e((()=>{T=`_navTree_l3f8s_1`,E=`_section_l3f8s_8`,D=`_sectionTitle_l3f8s_20`,O=`_list_l3f8s_28`,k=`_children_l3f8s_29`,A=`_branch_l3f8s_30`,j=`_item_l3f8s_42`,ie=`_active_l3f8s_70`,ae=`_disabled_l3f8s_85`,oe=`_icon_l3f8s_90`,se=`_copy_l3f8s_108`,ce=`_label_l3f8s_114`,le=`_description_l3f8s_115`,M=`_wrapLabels_l3f8s_136`,N=`_trailing_l3f8s_147`,P=`_end_l3f8s_155`,F=`_chevron_l3f8s_161`,I=`_nested_l3f8s_189`,L=`_collapsed_l3f8s_204`,R={navTree:T,section:E,sectionTitle:D,list:O,children:k,branch:A,item:j,active:ie,disabled:ae,icon:oe,copy:se,label:ce,description:le,wrapLabels:M,trailing:N,end:P,chevron:F,nested:I,collapsed:L}})))()}function B(e,t,n){for(let r of e){if(r.id===t)return!0;if(r.children&&B(r.children,t,n))return n.add(r.id),!0}return!1}function V(e){let t=e.currentTarget,n=e.target.closest(W);if(!n)return;let r=ue(t),i=r.indexOf(n),a;switch(te(e.key,t)){case`ArrowDown`:a=r[i+1];break;case`ArrowUp`:a=i>0?r[i-1]:void 0;break;case`Home`:a=r[0];break;case`End`:a=r[r.length-1];break;case`ArrowLeft`:if(n.getAttribute(`aria-expanded`)===`true`)return;a=n.closest(G)?.parentElement?.querySelector(`:scope > ${W}`);break;default:return}a&&(e.preventDefault(),a.focus())}var H,U,W,G,ue,K;function q(){return(q=e((()=>{i(),a(),l(),d(),p(),h(),z(),H=t(),U=n(),W=`.${R.item}`,G=`.${R.children}`,ue=e=>Array.from(e.querySelectorAll(W)).filter(e=>!e.disabled&&e.getAttribute(`aria-disabled`)!==`true`),K=({sections:e,activeId:t,collapsed:n=!1,wrapLabels:i=!1,defaultExpandedIds:a,expandedIds:s,onExpandedChange:c,onItemSelect:l,renderLink:d,className:p,style:h,"aria-label":g,"aria-labelledby":_,id:v,ref:y,...b})=>{let{t:x}=o(),S=(0,H.useRef)(null),ne=u(S,y);(0,H.useEffect)(()=>{let e=S.current;if(e)return e.addEventListener(`keydown`,V),()=>e.removeEventListener(`keydown`,V)},[]);let[C,re]=m({value:s,defaultValue:()=>a??[],onChange:c}),[w,T]=(0,H.useState)(()=>new Set),E=(0,H.useMemo)(()=>{let n=new Set;for(let r of e)B(r.items,t,n);return n},[t,e]),D=(0,H.useMemo)(()=>new Set(C),[C]),O=e=>D.has(e)||!w.has(e)&&E.has(e),k=(e,t)=>{let n=new Set(D),r=new Set(w);t?(n.add(e.id),r.delete(e.id)):(n.delete(e.id),r.add(e.id)),re(Array.from(n)),T(r)},A=e=>{k(e,!O(e.id)),l?.(e)},j=(e,i)=>{let a=!!e.children?.length,o=e.id===t,s=E.has(e.id),c=a&&O(e.id),u=!!e.disabled,f=r(R.item,i>0&&R.nested,o&&R.active,u&&R.disabled),p={active:o,ancestorActive:s,expanded:c,depth:i,collapsed:n,hasChildren:a,disabled:u,className:f},m=e.description?`${e.label} / ${e.description}`:e.label,h=(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`span`,{className:R.icon,"aria-hidden":`true`,children:e.icon}),(0,U.jsxs)(`span`,{className:R.copy,children:[(0,U.jsx)(`span`,{className:R.label,children:e.label}),e.description&&(0,U.jsx)(`small`,{className:R.description,children:e.description})]}),!n&&(e.endContent||a)&&(0,U.jsxs)(`span`,{className:R.trailing,children:[e.endContent&&(0,U.jsx)(`span`,{className:R.end,children:e.endContent}),a&&(0,U.jsx)(`span`,{className:R.chevron,"aria-hidden":`true`,children:(0,U.jsx)(ee,{size:16,strokeWidth:2})})]})]});if(a)return(0,U.jsxs)(`div`,{className:R.branch,children:[(0,U.jsx)(`button`,{className:f,type:`button`,title:m,"aria-expanded":c,"data-active":o||void 0,"data-ancestor-active":s||void 0,"data-expanded":c||void 0,disabled:u,onClick:()=>A(e),onKeyDown:t=>{if(n)return;let r=te(t.key,t.currentTarget);r===`ArrowRight`?(t.preventDefault(),c?t.currentTarget.parentElement?.querySelector(`${G} ${W}`)?.focus():k(e,!0)):r===`ArrowLeft`&&c&&(t.preventDefault(),k(e,!1))},children:h}),c&&!n&&(0,U.jsx)(`div`,{className:R.children,children:e.children?.map(e=>j(e,i+1))})]},e.id);if(d)return(0,U.jsx)(H.Fragment,{children:d(e,h,p)},e.id);let g={className:f,title:m,"data-active":o||void 0};return u?(0,U.jsx)(`span`,{...g,role:`link`,"aria-disabled":`true`,children:h},e.id):e.href===void 0?(0,U.jsx)(`button`,{...g,type:`button`,"aria-current":o?`page`:void 0,onClick:()=>l?.(e),children:h},e.id):(0,U.jsx)(`a`,{...g,href:e.href,"aria-current":o?`page`:void 0,onClick:()=>l?.(e),children:h},e.id)};return(0,U.jsx)(`nav`,{ref:ne,className:r(R.navTree,n&&R.collapsed,i&&!n&&R.wrapLabels,p),...f(b),id:v,style:h,"aria-label":g??(_?void 0:x(`navTree.label`)),"aria-labelledby":_,children:e.map(e=>(0,U.jsxs)(`section`,{className:R.section,children:[e.title&&(0,U.jsx)(`h2`,{className:R.sectionTitle,children:e.title}),(0,U.jsx)(`div`,{className:R.list,children:e.items.map(e=>j(e,0))})]},e.id))})}})))()}function de(){let[e,t]=(0,fe.useState)(`traffic`);return(0,J.jsx)(`div`,{style:{maxWidth:260},children:(0,J.jsx)(K,{"aria-label":`Main navigation`,sections:pe,activeId:e,onItemSelect:e=>{e.children||t(e.id)}})})}var fe,J,pe;function me(){return(me=e((()=>{fe=t(),q(),w(),J=n(),pe=[{id:`main`,items:[{id:`home`,label:`Home`,href:`#home`,icon:(0,J.jsx)(S,{})},{id:`analytics`,label:`Analytics`,description:`Traffic and conversions`,icon:(0,J.jsx)(ne,{}),children:[{id:`traffic`,label:`Traffic`,href:`#traffic`},{id:`funnels`,label:`Funnels`,href:`#funnels`}]}]},{id:`admin`,title:`Administration`,items:[{id:`users`,label:`Users`,href:`#users`,icon:(0,J.jsx)(b,{}),endContent:(0,J.jsx)(`small`,{children:`12`})},{id:`settings`,label:`Settings`,href:`#settings`,icon:(0,J.jsx)(x,{}),disabled:!0}]}]})))()}function he(){let[e,t]=(0,ge.useState)(!1);return(0,Y.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,Y.jsx)(c,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>!e),children:e?`Expand sidebar`:`Collapse sidebar`}),(0,Y.jsx)(`div`,{style:{width:e?56:220},children:(0,Y.jsx)(K,{sections:_e,activeId:`inbox`,collapsed:e,wrapLabels:!0})})]})}var ge,Y,_e;function ve(){return(ve=e((()=>{ge=t(),s(),q(),w(),Y=n(),_e=[{id:`main`,items:[{id:`home`,label:`Home`,href:`#home`,icon:(0,Y.jsx)(S,{})},{id:`inbox`,label:`Inbox`,href:`#inbox`,icon:(0,Y.jsx)(re,{})},{id:`docs`,label:`Documents with a rather long name`,description:`Shared with the whole team`,href:`#docs`,icon:(0,Y.jsx)(C,{})}]}]})))()}function ye(){let[e,t]=(0,X.useState)(`/ssr`),[n,r]=(0,X.useState)([`advanced`]);return(0,Z.jsx)(`div`,{style:{maxWidth:260},children:(0,Z.jsx)(K,{sections:Q,activeId:Q[0].items.flatMap(e=>[e,...e.children??[]]).find(t=>t.href===e)?.id,expandedIds:n,onExpandedChange:r,renderLink:(e,n,r)=>(0,Z.jsx)(`a`,{href:`#${e.href}`,className:r.className,"aria-current":r.active?`page`:void 0,onClick:n=>{n.preventDefault(),t(e.href??`/`)},children:n},e.id)})})}var X,Z,Q;function be(){return(be=e((()=>{X=t(),q(),Z=n(),Q=[{id:`docs`,title:`Guides`,items:[{id:`intro`,label:`Introduction`,href:`/intro`},{id:`advanced`,label:`Advanced`,children:[{id:`ssr`,label:`Server rendering`,href:`/ssr`},{id:`theming`,label:`Theming`,href:`/theming`}]}]}]})))()}var xe;function Se(){return(Se=e((()=>{xe=`import { useState } from "react";
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
`})))()}var Ee,De,Oe;function ke(){return(ke=e((()=>{me(),ve(),be(),Se(),$(),Te(),t(),_(),g(),Ee=n(),De=v(Object.assign({"./demos/basic.tsx":de,"./demos/collapsed.tsx":he,"./demos/custom-link.tsx":ye}),Object.assign({"./demos/basic.tsx":xe,"./demos/collapsed.tsx":Ce,"./demos/custom-link.tsx":we})),Oe=()=>(0,Ee.jsx)(y,{id:`nav-tree`,demos:De})})))()}ke();export{Oe as default};