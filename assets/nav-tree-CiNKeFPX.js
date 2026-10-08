import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{Ot as r,en as i,x as ee}from"./minerva-web-components-gmidRbuG.js";import{m as a,n as o,p as s,t as c}from"./DocPage-OkRujup2.js";import{Q as l,Z as u,et as d,tt as f}from"./io5-CFVaALQJ.js";import{n as p,t as m}from"./useI18n-7NNo_JVm.js";import{t as h}from"./stylingHooks-GjssfG7q.js";import{n as g,t as _}from"./Button-BJTVw8sA.js";import{n as te,t as ne}from"./safeUrl-VK__ajXQ.js";import{T as re,j as ie}from"./icons-Dj0E45-e.js";import{t as ae}from"./dataAttributes-C-grv0bs.js";import{t as oe}from"./direction-DP7if3Ff.js";import{C as se,T as v,_ as ce,d as y,r as b,s as x,u as S}from"./lu-COW_cFGB.js";var C,w,T,E,D,O,le,ue,de,fe,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{C=`_navTree_1g1w4_1`,w=`_section_1g1w4_8`,T=`_sectionTitle_1g1w4_37`,E=`_list_1g1w4_45`,D=`_children_1g1w4_46`,O=`_branch_1g1w4_47`,le=`_active_1g1w4_79`,ue=`_item_1g1w4_83`,de=`_disabled_1g1w4_107`,fe=`_icon_1g1w4_134`,k=`_copy_1g1w4_152`,A=`_label_1g1w4_158`,j=`_description_1g1w4_159`,M=`_wrapLabels_1g1w4_180`,N=`_trailing_1g1w4_191`,P=`_end_1g1w4_199`,F=`_chevron_1g1w4_205`,I=`_nested_1g1w4_233`,L=`_collapsed_1g1w4_248`,R={navTree:C,section:w,sectionTitle:T,list:E,children:D,branch:O,active:le,item:ue,disabled:de,icon:fe,copy:k,label:A,description:j,wrapLabels:M,trailing:N,end:P,chevron:F,nested:I,collapsed:L}})))()}function B(e,t,n){for(let r of e){if(r.id===t)return!0;if(r.children&&B(r.children,t,n))return n.add(r.id),!0}return!1}function V(e){let t=e.currentTarget,n=e.target.closest(W);if(!n)return;let r=pe(t),i=r.indexOf(n),a;switch(ee(e.key,t)){case`ArrowDown`:a=r[i+1];break;case`ArrowUp`:a=i>0?r[i-1]:void 0;break;case`Home`:a=r[0];break;case`End`:a=r[r.length-1];break;case`ArrowLeft`:if(n.getAttribute(`aria-expanded`)===`true`)return;a=n.closest(G)?.parentElement?.querySelector(`:scope > ${W}`);break;default:return}a&&(e.preventDefault(),a.focus())}var H,U,W,G,pe,K;function q(){return(q=e((()=>{r(),p(),ne(),re(),d(),l(),oe(),z(),H=t(),U=n(),W=`.${R.item}`,G=`.${R.children}`,pe=e=>Array.from(e.querySelectorAll(W)).filter(e=>!e.disabled&&e.getAttribute(`aria-disabled`)!==`true`),K=({sections:e,activeId:t,collapsed:n=!1,wrapLabels:r=!1,defaultExpandedIds:a,expandedIds:o,onExpandedChange:s,onItemSelect:c,renderLink:l,className:d,style:p,"aria-label":g,"aria-labelledby":_,id:ne,ref:re,...oe})=>{let{t:se}=m(),v=(0,H.useRef)(null),ce=f(v,re);(0,H.useEffect)(()=>{let e=v.current;if(e)return e.addEventListener(`keydown`,V),()=>e.removeEventListener(`keydown`,V)},[]);let[y,b]=u({value:o,defaultValue:()=>a??[],onChange:s,name:`NavTree`,prop:`expandedIds`}),[x,S]=(0,H.useState)(()=>new Set),C=(0,H.useMemo)(()=>{let n=new Set;for(let r of e)B(r.items,t,n);return n},[t,e]),w=(0,H.useMemo)(()=>new Set(y),[y]),T=e=>w.has(e)||!x.has(e)&&C.has(e),E=(e,t)=>{let n=new Set(w),r=new Set(x);t?(n.add(e.id),r.delete(e.id)):(n.delete(e.id),r.add(e.id)),b(Array.from(n)),S(r)},D=e=>{E(e,!T(e.id)),c?.(e)},O=(e,r)=>{let a=!!e.children?.length,o=e.id===t,s=C.has(e.id),u=a&&T(e.id),d=!!e.disabled,f=i(R.item,r>0&&R.nested,o&&R.active,d&&R.disabled),p={active:o,ancestorActive:s,expanded:u,depth:r,collapsed:n,hasChildren:a,disabled:d,className:f},m=e.description?`${e.label} / ${e.description}`:e.label,g=(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`span`,{className:R.icon,"aria-hidden":`true`,...h(`nav-tree`,`icon`),children:e.icon}),(0,U.jsxs)(`span`,{className:R.copy,children:[(0,U.jsx)(`span`,{className:R.label,...h(`nav-tree`,`label`),children:e.label}),e.description&&(0,U.jsx)(`small`,{className:R.description,...h(`nav-tree`,`description`),children:e.description})]}),!n&&(e.endContent||a)&&(0,U.jsxs)(`span`,{className:R.trailing,children:[e.endContent&&(0,U.jsx)(`span`,{className:R.end,children:e.endContent}),a&&(0,U.jsx)(`span`,{className:R.chevron,"aria-hidden":`true`,children:(0,U.jsx)(ie,{size:16,strokeWidth:2})})]})]});if(a)return(0,U.jsxs)(`div`,{className:R.branch,children:[(0,U.jsx)(`button`,{className:f,type:`button`,title:m,"aria-expanded":u,"data-ancestor-active":s||void 0,disabled:d,onClick:()=>D(e),onKeyDown:t=>{if(n)return;let r=ee(t.key,t.currentTarget);r===`ArrowRight`?(t.preventDefault(),u?t.currentTarget.parentElement?.querySelector(`${G} ${W}`)?.focus():E(e,!0)):r===`ArrowLeft`&&u&&(t.preventDefault(),E(e,!1))},...h(`nav-tree`,`item`,{current:o,expanded:u,disabled:d}),children:g}),u&&!n&&(0,U.jsx)(`div`,{className:R.children,children:e.children?.map(e=>O(e,r+1))})]},e.id);if(l)return(0,U.jsx)(H.Fragment,{children:l(e,g,p)},e.id);let _={className:f,title:m,...h(`nav-tree`,`item`,{current:o,disabled:d})};return d?(0,U.jsx)(`span`,{..._,role:`link`,"aria-disabled":`true`,children:g},e.id):e.href===void 0?(0,U.jsx)(`button`,{..._,type:`button`,"aria-current":o?`page`:void 0,onClick:()=>c?.(e),children:g},e.id):(0,U.jsx)(`a`,{..._,href:te(`NavTree`,e.href),"aria-current":o?`page`:void 0,onClick:()=>c?.(e),children:g},e.id)};return(0,U.jsx)(`nav`,{ref:ce,className:i(R.navTree,n&&R.collapsed,r&&!n&&R.wrapLabels,d),...ae(oe),id:ne,style:p,"aria-label":g??(_?void 0:se(`navTree.label`)),"aria-labelledby":_,...h(`nav-tree`,`root`),children:e.map(e=>(0,U.jsxs)(`section`,{className:R.section,...h(`nav-tree`,`group`),children:[e.title&&(0,U.jsx)(`h2`,{className:R.sectionTitle,...h(`nav-tree`,`group-label`),children:e.title}),(0,U.jsx)(`div`,{className:R.list,children:e.items.map(e=>O(e,0))})]},e.id))})}})))()}function me(){let[e,t]=(0,he.useState)(`traffic`);return(0,J.jsx)(`div`,{style:{maxWidth:260},children:(0,J.jsx)(K,{"aria-label":`Main navigation`,sections:ge,activeId:e,onItemSelect:e=>{e.children||t(e.id)}})})}var he,J,ge;function _e(){return(_e=e((()=>{he=t(),q(),v(),J=n(),ge=[{id:`main`,items:[{id:`home`,label:`Home`,href:`#home`,icon:(0,J.jsx)(S,{})},{id:`analytics`,label:`Analytics`,description:`Traffic and conversions`,icon:(0,J.jsx)(b,{}),children:[{id:`traffic`,label:`Traffic`,href:`#traffic`},{id:`funnels`,label:`Funnels`,href:`#funnels`}]}]},{id:`admin`,title:`Administration`,items:[{id:`users`,label:`Users`,href:`#users`,icon:(0,J.jsx)(se,{}),endContent:(0,J.jsx)(`small`,{children:`12`})},{id:`settings`,label:`Settings`,href:`#settings`,icon:(0,J.jsx)(ce,{}),disabled:!0}]}]})))()}function ve(){let[e,t]=(0,ye.useState)(!1);return(0,Y.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,Y.jsx)(g,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>!e),children:e?`Expand sidebar`:`Collapse sidebar`}),(0,Y.jsx)(`div`,{style:{width:e?56:220},children:(0,Y.jsx)(K,{sections:be,activeId:`inbox`,collapsed:e,wrapLabels:!0})})]})}var ye,Y,be;function xe(){return(xe=e((()=>{ye=t(),_(),q(),v(),Y=n(),be=[{id:`main`,items:[{id:`home`,label:`Home`,href:`#home`,icon:(0,Y.jsx)(S,{})},{id:`inbox`,label:`Inbox`,href:`#inbox`,icon:(0,Y.jsx)(y,{})},{id:`docs`,label:`Documents with a rather long name`,description:`Shared with the whole team`,href:`#docs`,icon:(0,Y.jsx)(x,{})}]}]})))()}function Se(){let[e,t]=(0,X.useState)(`/ssr`),[n,r]=(0,X.useState)([`advanced`]);return(0,Z.jsx)(`div`,{style:{maxWidth:260},children:(0,Z.jsx)(K,{sections:Q,activeId:Q[0].items.flatMap(e=>[e,...e.children??[]]).find(t=>t.href===e)?.id,expandedIds:n,onExpandedChange:r,renderLink:(e,n,r)=>(0,Z.jsx)(`a`,{href:`#${e.href}`,className:r.className,"aria-current":r.active?`page`:void 0,onClick:n=>{n.preventDefault(),t(e.href??`/`)},children:n},e.id)})})}var X,Z,Q;function Ce(){return(Ce=e((()=>{X=t(),q(),Z=n(),Q=[{id:`docs`,title:`Guides`,items:[{id:`intro`,label:`Introduction`,href:`/intro`},{id:`advanced`,label:`Advanced`,children:[{id:`ssr`,label:`Server rendering`,href:`/ssr`},{id:`theming`,label:`Theming`,href:`/theming`}]}]}]})))()}var $;function we(){return(we=e((()=>{$=`import { useState } from "react";
import { NavTree, type NavTreeSection } from "minerva-design";
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
import { Button, NavTree, type NavTreeSection } from "minerva-design";
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
import { NavTree, type NavTreeSection } from "minerva-design";

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
`})))()}var ke,Ae,je;function Me(){return(Me=e((()=>{_e(),xe(),Ce(),we(),Ee(),Oe(),t(),o(),a(),ke=n(),Ae=s(Object.assign({"./demos/basic.tsx":me,"./demos/collapsed.tsx":ve,"./demos/custom-link.tsx":Se}),Object.assign({"./demos/basic.tsx":$,"./demos/collapsed.tsx":Te,"./demos/custom-link.tsx":De})),je=()=>(0,ke.jsx)(c,{id:`nav-tree`,demos:Ae})})))()}Me();export{je as default};