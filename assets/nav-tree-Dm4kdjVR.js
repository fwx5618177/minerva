import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i,et as ee}from"./minerva-web-components-e9i9Tzii.js";import{Q as a,Z as o,et as s,tt as c}from"./io5-Db3ldn2O.js";import{n as l,t as u}from"./useI18n-Brv-VDVY.js";import{n as d,t as f}from"./Button-DP6INRXF.js";import{n as te,t as p}from"./safeUrl-DtfYpZcw.js";import{T as m,j as ne}from"./icons-C9qyBhWC.js";import{t as h}from"./dataAttributes-C-grv0bs.js";import{t as g}from"./direction-B2fcyo3I.js";import{c as _,n as v,s as y,t as re}from"./DocPage-BeqNKFhE.js";import{S as ie,g as b,l as x,r as S,s as ae,u as C,w}from"./lu-DukeLmz9.js";var T,E,D,O,k,A,oe,se,ce,le,ue,de,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{T=`_navTree_l3f8s_1`,E=`_section_l3f8s_8`,D=`_sectionTitle_l3f8s_20`,O=`_list_l3f8s_28`,k=`_children_l3f8s_29`,A=`_branch_l3f8s_30`,oe=`_item_l3f8s_42`,se=`_active_l3f8s_70`,ce=`_disabled_l3f8s_85`,le=`_icon_l3f8s_90`,ue=`_copy_l3f8s_108`,de=`_label_l3f8s_114`,j=`_description_l3f8s_115`,M=`_wrapLabels_l3f8s_136`,N=`_trailing_l3f8s_147`,P=`_end_l3f8s_155`,F=`_chevron_l3f8s_161`,I=`_nested_l3f8s_189`,L=`_collapsed_l3f8s_204`,R={navTree:T,section:E,sectionTitle:D,list:O,children:k,branch:A,item:oe,active:se,disabled:ce,icon:le,copy:ue,label:de,description:j,wrapLabels:M,trailing:N,end:P,chevron:F,nested:I,collapsed:L}})))()}function B(e,t,n){for(let r of e){if(r.id===t)return!0;if(r.children&&B(r.children,t,n))return n.add(r.id),!0}return!1}function V(e){let t=e.currentTarget,n=e.target.closest(W);if(!n)return;let r=fe(t),i=r.indexOf(n),a;switch(ee(e.key,t)){case`ArrowDown`:a=r[i+1];break;case`ArrowUp`:a=i>0?r[i-1]:void 0;break;case`Home`:a=r[0];break;case`End`:a=r[r.length-1];break;case`ArrowLeft`:if(n.getAttribute(`aria-expanded`)===`true`)return;a=n.closest(G)?.parentElement?.querySelector(`:scope > ${W}`);break;default:return}a&&(e.preventDefault(),a.focus())}var H,U,W,G,fe,K;function q(){return(q=e((()=>{i(),l(),p(),m(),s(),a(),g(),z(),H=t(),U=n(),W=`.${R.item}`,G=`.${R.children}`,fe=e=>Array.from(e.querySelectorAll(W)).filter(e=>!e.disabled&&e.getAttribute(`aria-disabled`)!==`true`),K=({sections:e,activeId:t,collapsed:n=!1,wrapLabels:i=!1,defaultExpandedIds:a,expandedIds:s,onExpandedChange:l,onItemSelect:d,renderLink:f,className:p,style:m,"aria-label":g,"aria-labelledby":_,id:v,ref:y,...re})=>{let{t:ie}=u(),b=(0,H.useRef)(null),x=c(b,y);(0,H.useEffect)(()=>{let e=b.current;if(e)return e.addEventListener(`keydown`,V),()=>e.removeEventListener(`keydown`,V)},[]);let[S,ae]=o({value:s,defaultValue:()=>a??[],onChange:l,name:`NavTree`,prop:`expandedIds`}),[C,w]=(0,H.useState)(()=>new Set),T=(0,H.useMemo)(()=>{let n=new Set;for(let r of e)B(r.items,t,n);return n},[t,e]),E=(0,H.useMemo)(()=>new Set(S),[S]),D=e=>E.has(e)||!C.has(e)&&T.has(e),O=(e,t)=>{let n=new Set(E),r=new Set(C);t?(n.add(e.id),r.delete(e.id)):(n.delete(e.id),r.add(e.id)),ae(Array.from(n)),w(r)},k=e=>{O(e,!D(e.id)),d?.(e)},A=(e,i)=>{let a=!!e.children?.length,o=e.id===t,s=T.has(e.id),c=a&&D(e.id),l=!!e.disabled,u=r(R.item,i>0&&R.nested,o&&R.active,l&&R.disabled),p={active:o,ancestorActive:s,expanded:c,depth:i,collapsed:n,hasChildren:a,disabled:l,className:u},m=e.description?`${e.label} / ${e.description}`:e.label,h=(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`span`,{className:R.icon,"aria-hidden":`true`,children:e.icon}),(0,U.jsxs)(`span`,{className:R.copy,children:[(0,U.jsx)(`span`,{className:R.label,children:e.label}),e.description&&(0,U.jsx)(`small`,{className:R.description,children:e.description})]}),!n&&(e.endContent||a)&&(0,U.jsxs)(`span`,{className:R.trailing,children:[e.endContent&&(0,U.jsx)(`span`,{className:R.end,children:e.endContent}),a&&(0,U.jsx)(`span`,{className:R.chevron,"aria-hidden":`true`,children:(0,U.jsx)(ne,{size:16,strokeWidth:2})})]})]});if(a)return(0,U.jsxs)(`div`,{className:R.branch,children:[(0,U.jsx)(`button`,{className:u,type:`button`,title:m,"aria-expanded":c,"data-active":o||void 0,"data-ancestor-active":s||void 0,"data-expanded":c||void 0,disabled:l,onClick:()=>k(e),onKeyDown:t=>{if(n)return;let r=ee(t.key,t.currentTarget);r===`ArrowRight`?(t.preventDefault(),c?t.currentTarget.parentElement?.querySelector(`${G} ${W}`)?.focus():O(e,!0)):r===`ArrowLeft`&&c&&(t.preventDefault(),O(e,!1))},children:h}),c&&!n&&(0,U.jsx)(`div`,{className:R.children,children:e.children?.map(e=>A(e,i+1))})]},e.id);if(f)return(0,U.jsx)(H.Fragment,{children:f(e,h,p)},e.id);let g={className:u,title:m,"data-active":o||void 0};return l?(0,U.jsx)(`span`,{...g,role:`link`,"aria-disabled":`true`,children:h},e.id):e.href===void 0?(0,U.jsx)(`button`,{...g,type:`button`,"aria-current":o?`page`:void 0,onClick:()=>d?.(e),children:h},e.id):(0,U.jsx)(`a`,{...g,href:te(`NavTree`,e.href),"aria-current":o?`page`:void 0,onClick:()=>d?.(e),children:h},e.id)};return(0,U.jsx)(`nav`,{ref:x,className:r(R.navTree,n&&R.collapsed,i&&!n&&R.wrapLabels,p),...h(re),id:v,style:m,"aria-label":g??(_?void 0:ie(`navTree.label`)),"aria-labelledby":_,children:e.map(e=>(0,U.jsxs)(`section`,{className:R.section,children:[e.title&&(0,U.jsx)(`h2`,{className:R.sectionTitle,children:e.title}),(0,U.jsx)(`div`,{className:R.list,children:e.items.map(e=>A(e,0))})]},e.id))})}})))()}function pe(){let[e,t]=(0,me.useState)(`traffic`);return(0,J.jsx)(`div`,{style:{maxWidth:260},children:(0,J.jsx)(K,{"aria-label":`Main navigation`,sections:he,activeId:e,onItemSelect:e=>{e.children||t(e.id)}})})}var me,J,he;function ge(){return(ge=e((()=>{me=t(),q(),w(),J=n(),he=[{id:`main`,items:[{id:`home`,label:`Home`,href:`#home`,icon:(0,J.jsx)(x,{})},{id:`analytics`,label:`Analytics`,description:`Traffic and conversions`,icon:(0,J.jsx)(S,{}),children:[{id:`traffic`,label:`Traffic`,href:`#traffic`},{id:`funnels`,label:`Funnels`,href:`#funnels`}]}]},{id:`admin`,title:`Administration`,items:[{id:`users`,label:`Users`,href:`#users`,icon:(0,J.jsx)(ie,{}),endContent:(0,J.jsx)(`small`,{children:`12`})},{id:`settings`,label:`Settings`,href:`#settings`,icon:(0,J.jsx)(b,{}),disabled:!0}]}]})))()}function _e(){let[e,t]=(0,ve.useState)(!1);return(0,Y.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,Y.jsx)(f,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>!e),children:e?`Expand sidebar`:`Collapse sidebar`}),(0,Y.jsx)(`div`,{style:{width:e?56:220},children:(0,Y.jsx)(K,{sections:ye,activeId:`inbox`,collapsed:e,wrapLabels:!0})})]})}var ve,Y,ye;function be(){return(be=e((()=>{ve=t(),d(),q(),w(),Y=n(),ye=[{id:`main`,items:[{id:`home`,label:`Home`,href:`#home`,icon:(0,Y.jsx)(x,{})},{id:`inbox`,label:`Inbox`,href:`#inbox`,icon:(0,Y.jsx)(C,{})},{id:`docs`,label:`Documents with a rather long name`,description:`Shared with the whole team`,href:`#docs`,icon:(0,Y.jsx)(ae,{})}]}]})))()}function xe(){let[e,t]=(0,X.useState)(`/ssr`),[n,r]=(0,X.useState)([`advanced`]);return(0,Z.jsx)(`div`,{style:{maxWidth:260},children:(0,Z.jsx)(K,{sections:Q,activeId:Q[0].items.flatMap(e=>[e,...e.children??[]]).find(t=>t.href===e)?.id,expandedIds:n,onExpandedChange:r,renderLink:(e,n,r)=>(0,Z.jsx)(`a`,{href:`#${e.href}`,className:r.className,"aria-current":r.active?`page`:void 0,onClick:n=>{n.preventDefault(),t(e.href??`/`)},children:n},e.id)})})}var X,Z,Q;function Se(){return(Se=e((()=>{X=t(),q(),Z=n(),Q=[{id:`docs`,title:`Guides`,items:[{id:`intro`,label:`Introduction`,href:`/intro`},{id:`advanced`,label:`Advanced`,children:[{id:`ssr`,label:`Server rendering`,href:`/ssr`},{id:`theming`,label:`Theming`,href:`/theming`}]}]}]})))()}var Ce;function $(){return($=e((()=>{Ce=`import { useState } from "react";
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
`})))()}var we;function Te(){return(Te=e((()=>{we=`import { useState } from "react";
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
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`import { useState } from "react";
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
`})))()}var Oe,ke,Ae;function je(){return(je=e((()=>{ge(),be(),Se(),$(),Te(),De(),t(),v(),_(),Oe=n(),ke=y(Object.assign({"./demos/basic.tsx":pe,"./demos/collapsed.tsx":_e,"./demos/custom-link.tsx":xe}),Object.assign({"./demos/basic.tsx":Ce,"./demos/collapsed.tsx":we,"./demos/custom-link.tsx":Ee})),Ae=()=>(0,Oe.jsx)(re,{id:`nav-tree`,demos:ke})})))()}je();export{Ae as default};