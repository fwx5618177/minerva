import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{Qt as i,Rt as a}from"./dist-DkgrNLMS.js";import{H as o,N as s,W as c,_ as l,a as u,b as d,y as f}from"./lu-ChkgBQsL.js";import{c as p,n as m,s as h,t as g}from"./DocPage-Bnv84vTs.js";function _(){let[e,t]=(0,v.useState)(`traffic`);return(0,y.jsx)(`div`,{style:{maxWidth:260},children:(0,y.jsx)(i,{ariaLabel:`Main navigation`,sections:b,activeId:e,onItemSelect:e=>{e.children||t(e.id)}})})}var v,y,b;function x(){return(x=e((()=>{v=t(),a(),c(),y=n(),b=[{id:`main`,items:[{id:`home`,label:`Home`,href:`#home`,icon:(0,y.jsx)(f,{})},{id:`analytics`,label:`Analytics`,description:`Traffic and conversions`,icon:(0,y.jsx)(u,{}),children:[{id:`traffic`,label:`Traffic`,href:`#traffic`},{id:`funnels`,label:`Funnels`,href:`#funnels`}]}]},{id:`admin`,title:`Administration`,items:[{id:`users`,label:`Users`,href:`#users`,icon:(0,y.jsx)(o,{}),endContent:(0,y.jsx)(`small`,{children:`12`})},{id:`settings`,label:`Settings`,href:`#settings`,icon:(0,y.jsx)(s,{}),disabled:!0}]}]})))()}function S(){let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,w.jsx)(r,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>!e),children:e?`Expand sidebar`:`Collapse sidebar`}),(0,w.jsx)(`div`,{style:{width:e?56:220},children:(0,w.jsx)(i,{sections:T,activeId:`inbox`,collapsed:e,wrapLabels:!0})})]})}var C,w,T;function E(){return(E=e((()=>{C=t(),a(),c(),w=n(),T=[{id:`main`,items:[{id:`home`,label:`Home`,href:`#home`,icon:(0,w.jsx)(f,{})},{id:`inbox`,label:`Inbox`,href:`#inbox`,icon:(0,w.jsx)(d,{})},{id:`docs`,label:`Documents with a rather long name`,description:`Shared with the whole team`,href:`#docs`,icon:(0,w.jsx)(l,{})}]}]})))()}function D(){let[e,t]=(0,O.useState)(`/ssr`),[n,r]=(0,O.useState)([`advanced`]);return(0,k.jsx)(`div`,{style:{maxWidth:260},children:(0,k.jsx)(i,{sections:A,activeId:A[0].items.flatMap(e=>[e,...e.children??[]]).find(t=>t.href===e)?.id,expandedIds:n,onExpandedChange:r,renderLink:(e,n,r)=>(0,k.jsx)(`a`,{href:`#${e.href}`,className:r.className,"aria-current":r.active?`page`:void 0,onClick:n=>{n.preventDefault(),t(e.href??`/`)},children:n},e.id)})})}var O,k,A;function j(){return(j=e((()=>{O=t(),a(),k=n(),A=[{id:`docs`,title:`Guides`,items:[{id:`intro`,label:`Introduction`,href:`/intro`},{id:`advanced`,label:`Advanced`,children:[{id:`ssr`,label:`Server rendering`,href:`/ssr`},{id:`theming`,label:`Theming`,href:`/theming`}]}]}]})))()}var M;function N(){return(N=e((()=>{M=`import { useState } from "react";
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
        ariaLabel="Main navigation"
        sections={sections}
        activeId={active}
        onItemSelect={(item) => {
          if (!item.children) setActive(item.id);
        }}
      />
    </div>
  );
}
`})))()}var P;function F(){return(F=e((()=>{P=`import { useState } from "react";
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
`})))()}var I;function L(){return(L=e((()=>{I=`import { useState } from "react";
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
`})))()}var R,z,B;function V(){return(V=e((()=>{x(),E(),j(),N(),F(),L(),t(),m(),p(),R=n(),z=h(Object.assign({"./demos/basic.tsx":_,"./demos/collapsed.tsx":S,"./demos/custom-link.tsx":D}),Object.assign({"./demos/basic.tsx":M,"./demos/collapsed.tsx":P,"./demos/custom-link.tsx":I})),B=()=>(0,R.jsx)(g,{id:`nav-tree`,demos:z})})))()}V();export{B as default};