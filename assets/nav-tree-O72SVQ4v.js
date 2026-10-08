import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i,et as ee}from"./minerva-web-components-e9i9Tzii.js";import{Q as a,Z as o,et as s,tt as c}from"./io5-CkIs6v-8.js";import{n as l,t as u}from"./useI18n-Brv-VDVY.js";import{t as d}from"./stylingHooks-GjssfG7q.js";import{n as f,t as p}from"./Button-BfJfx3BZ.js";import{n as te,t as m}from"./safeUrl-DtfYpZcw.js";import{T as h,j as ne}from"./icons-C9qyBhWC.js";import{t as g}from"./dataAttributes-C-grv0bs.js";import{t as _}from"./direction-B2fcyo3I.js";import{m as v,n as y,p as re,t as ie}from"./DocPage-BUvZl8IZ.js";import{S as ae,g as b,l as x,r as S,s as oe,u as C,w}from"./lu-D-zbR8l9.js";var T,E,D,O,k,A,se,ce,le,ue,de,fe,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{T=`_navTree_1h2mn_1`,E=`_section_1h2mn_8`,D=`_sectionTitle_1h2mn_20`,O=`_list_1h2mn_28`,k=`_children_1h2mn_29`,A=`_branch_1h2mn_30`,se=`_item_1h2mn_42`,ce=`_active_1h2mn_70`,le=`_disabled_1h2mn_85`,ue=`_icon_1h2mn_90`,de=`_copy_1h2mn_108`,fe=`_label_1h2mn_114`,j=`_description_1h2mn_115`,M=`_wrapLabels_1h2mn_136`,N=`_trailing_1h2mn_147`,P=`_end_1h2mn_155`,F=`_chevron_1h2mn_161`,I=`_nested_1h2mn_189`,L=`_collapsed_1h2mn_204`,R={navTree:T,section:E,sectionTitle:D,list:O,children:k,branch:A,item:se,active:ce,disabled:le,icon:ue,copy:de,label:fe,description:j,wrapLabels:M,trailing:N,end:P,chevron:F,nested:I,collapsed:L}})))()}function B(e,t,n){for(let r of e){if(r.id===t)return!0;if(r.children&&B(r.children,t,n))return n.add(r.id),!0}return!1}function V(e){let t=e.currentTarget,n=e.target.closest(W);if(!n)return;let r=pe(t),i=r.indexOf(n),a;switch(ee(e.key,t)){case`ArrowDown`:a=r[i+1];break;case`ArrowUp`:a=i>0?r[i-1]:void 0;break;case`Home`:a=r[0];break;case`End`:a=r[r.length-1];break;case`ArrowLeft`:if(n.getAttribute(`aria-expanded`)===`true`)return;a=n.closest(G)?.parentElement?.querySelector(`:scope > ${W}`);break;default:return}a&&(e.preventDefault(),a.focus())}var H,U,W,G,pe,K;function q(){return(q=e((()=>{i(),l(),m(),h(),s(),a(),_(),z(),H=t(),U=n(),W=`.${R.item}`,G=`.${R.children}`,pe=e=>Array.from(e.querySelectorAll(W)).filter(e=>!e.disabled&&e.getAttribute(`aria-disabled`)!==`true`),K=({sections:e,activeId:t,collapsed:n=!1,wrapLabels:i=!1,defaultExpandedIds:a,expandedIds:s,onExpandedChange:l,onItemSelect:f,renderLink:p,className:m,style:h,"aria-label":_,"aria-labelledby":v,id:y,ref:re,...ie})=>{let{t:ae}=u(),b=(0,H.useRef)(null),x=c(b,re);(0,H.useEffect)(()=>{let e=b.current;if(e)return e.addEventListener(`keydown`,V),()=>e.removeEventListener(`keydown`,V)},[]);let[S,oe]=o({value:s,defaultValue:()=>a??[],onChange:l,name:`NavTree`,prop:`expandedIds`}),[C,w]=(0,H.useState)(()=>new Set),T=(0,H.useMemo)(()=>{let n=new Set;for(let r of e)B(r.items,t,n);return n},[t,e]),E=(0,H.useMemo)(()=>new Set(S),[S]),D=e=>E.has(e)||!C.has(e)&&T.has(e),O=(e,t)=>{let n=new Set(E),r=new Set(C);t?(n.add(e.id),r.delete(e.id)):(n.delete(e.id),r.add(e.id)),oe(Array.from(n)),w(r)},k=e=>{O(e,!D(e.id)),f?.(e)},A=(e,i)=>{let a=!!e.children?.length,o=e.id===t,s=T.has(e.id),c=a&&D(e.id),l=!!e.disabled,u=r(R.item,i>0&&R.nested,o&&R.active,l&&R.disabled),m={active:o,ancestorActive:s,expanded:c,depth:i,collapsed:n,hasChildren:a,disabled:l,className:u},h=e.description?`${e.label} / ${e.description}`:e.label,g=(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`span`,{className:R.icon,"aria-hidden":`true`,...d(`nav-tree`,`icon`),children:e.icon}),(0,U.jsxs)(`span`,{className:R.copy,children:[(0,U.jsx)(`span`,{className:R.label,...d(`nav-tree`,`label`),children:e.label}),e.description&&(0,U.jsx)(`small`,{className:R.description,...d(`nav-tree`,`description`),children:e.description})]}),!n&&(e.endContent||a)&&(0,U.jsxs)(`span`,{className:R.trailing,children:[e.endContent&&(0,U.jsx)(`span`,{className:R.end,children:e.endContent}),a&&(0,U.jsx)(`span`,{className:R.chevron,"aria-hidden":`true`,children:(0,U.jsx)(ne,{size:16,strokeWidth:2})})]})]});if(a)return(0,U.jsxs)(`div`,{className:R.branch,children:[(0,U.jsx)(`button`,{className:u,type:`button`,title:h,"aria-expanded":c,"data-ancestor-active":s||void 0,disabled:l,onClick:()=>k(e),onKeyDown:t=>{if(n)return;let r=ee(t.key,t.currentTarget);r===`ArrowRight`?(t.preventDefault(),c?t.currentTarget.parentElement?.querySelector(`${G} ${W}`)?.focus():O(e,!0)):r===`ArrowLeft`&&c&&(t.preventDefault(),O(e,!1))},...d(`nav-tree`,`item`,{current:o,expanded:c,disabled:l}),children:g}),c&&!n&&(0,U.jsx)(`div`,{className:R.children,children:e.children?.map(e=>A(e,i+1))})]},e.id);if(p)return(0,U.jsx)(H.Fragment,{children:p(e,g,m)},e.id);let _={className:u,title:h,...d(`nav-tree`,`item`,{current:o,disabled:l})};return l?(0,U.jsx)(`span`,{..._,role:`link`,"aria-disabled":`true`,children:g},e.id):e.href===void 0?(0,U.jsx)(`button`,{..._,type:`button`,"aria-current":o?`page`:void 0,onClick:()=>f?.(e),children:g},e.id):(0,U.jsx)(`a`,{..._,href:te(`NavTree`,e.href),"aria-current":o?`page`:void 0,onClick:()=>f?.(e),children:g},e.id)};return(0,U.jsx)(`nav`,{ref:x,className:r(R.navTree,n&&R.collapsed,i&&!n&&R.wrapLabels,m),...g(ie),id:y,style:h,"aria-label":_??(v?void 0:ae(`navTree.label`)),"aria-labelledby":v,...d(`nav-tree`,`root`),children:e.map(e=>(0,U.jsxs)(`section`,{className:R.section,...d(`nav-tree`,`group`),children:[e.title&&(0,U.jsx)(`h2`,{className:R.sectionTitle,...d(`nav-tree`,`group-label`),children:e.title}),(0,U.jsx)(`div`,{className:R.list,children:e.items.map(e=>A(e,0))})]},e.id))})}})))()}function me(){let[e,t]=(0,he.useState)(`traffic`);return(0,J.jsx)(`div`,{style:{maxWidth:260},children:(0,J.jsx)(K,{"aria-label":`Main navigation`,sections:ge,activeId:e,onItemSelect:e=>{e.children||t(e.id)}})})}var he,J,ge;function _e(){return(_e=e((()=>{he=t(),q(),w(),J=n(),ge=[{id:`main`,items:[{id:`home`,label:`Home`,href:`#home`,icon:(0,J.jsx)(x,{})},{id:`analytics`,label:`Analytics`,description:`Traffic and conversions`,icon:(0,J.jsx)(S,{}),children:[{id:`traffic`,label:`Traffic`,href:`#traffic`},{id:`funnels`,label:`Funnels`,href:`#funnels`}]}]},{id:`admin`,title:`Administration`,items:[{id:`users`,label:`Users`,href:`#users`,icon:(0,J.jsx)(ae,{}),endContent:(0,J.jsx)(`small`,{children:`12`})},{id:`settings`,label:`Settings`,href:`#settings`,icon:(0,J.jsx)(b,{}),disabled:!0}]}]})))()}function ve(){let[e,t]=(0,ye.useState)(!1);return(0,Y.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,Y.jsx)(f,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>!e),children:e?`Expand sidebar`:`Collapse sidebar`}),(0,Y.jsx)(`div`,{style:{width:e?56:220},children:(0,Y.jsx)(K,{sections:be,activeId:`inbox`,collapsed:e,wrapLabels:!0})})]})}var ye,Y,be;function xe(){return(xe=e((()=>{ye=t(),p(),q(),w(),Y=n(),be=[{id:`main`,items:[{id:`home`,label:`Home`,href:`#home`,icon:(0,Y.jsx)(x,{})},{id:`inbox`,label:`Inbox`,href:`#inbox`,icon:(0,Y.jsx)(C,{})},{id:`docs`,label:`Documents with a rather long name`,description:`Shared with the whole team`,href:`#docs`,icon:(0,Y.jsx)(oe,{})}]}]})))()}function Se(){let[e,t]=(0,X.useState)(`/ssr`),[n,r]=(0,X.useState)([`advanced`]);return(0,Z.jsx)(`div`,{style:{maxWidth:260},children:(0,Z.jsx)(K,{sections:Q,activeId:Q[0].items.flatMap(e=>[e,...e.children??[]]).find(t=>t.href===e)?.id,expandedIds:n,onExpandedChange:r,renderLink:(e,n,r)=>(0,Z.jsx)(`a`,{href:`#${e.href}`,className:r.className,"aria-current":r.active?`page`:void 0,onClick:n=>{n.preventDefault(),t(e.href??`/`)},children:n},e.id)})})}var X,Z,Q;function Ce(){return(Ce=e((()=>{X=t(),q(),Z=n(),Q=[{id:`docs`,title:`Guides`,items:[{id:`intro`,label:`Introduction`,href:`/intro`},{id:`advanced`,label:`Advanced`,children:[{id:`ssr`,label:`Server rendering`,href:`/ssr`},{id:`theming`,label:`Theming`,href:`/theming`}]}]}]})))()}var $;function we(){return(we=e((()=>{$=`import { useState } from "react";
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
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`import { useState } from "react";
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
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`import { useState } from "react";
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
`})))()}var ke,Ae,je;function Me(){return(Me=e((()=>{_e(),xe(),Ce(),we(),Ee(),Oe(),t(),y(),v(),ke=n(),Ae=re(Object.assign({"./demos/basic.tsx":me,"./demos/collapsed.tsx":ve,"./demos/custom-link.tsx":Se}),Object.assign({"./demos/basic.tsx":$,"./demos/collapsed.tsx":Te,"./demos/custom-link.tsx":De})),je=()=>(0,ke.jsx)(ie,{id:`nav-tree`,demos:Ae})})))()}Me();export{je as default};