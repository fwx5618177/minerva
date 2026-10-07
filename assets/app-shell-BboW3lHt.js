import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{Ht as i,Pt as a,u as o,un as s}from"./dist-BWNqkmth.js";import{B as c,b as l}from"./lu-B0X0EWxp.js";import{c as u,n as d,s as f,t as p}from"./DocPage-DGOZswYH.js";function m(){return(0,h.jsx)(`div`,{style:{height:360,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,h.jsx)(o,{brand:`Publishing Admin`,brandIcon:(0,h.jsx)(l,{}),navigationLabel:`Workspace navigation`,style:{minHeight:`100%`},headerActions:(0,h.jsx)(r,{size:`small`,children:`Account`}),navigation:({collapsed:e,closeNavigation:t})=>(0,h.jsx)(`nav`,{children:g.map(n=>(0,h.jsx)(`a`,{href:`#${n.toLowerCase()}`,title:n,onClick:t,style:{display:`block`,padding:`6px 8px`},children:e?n[0]:n},n))}),children:(0,h.jsx)(a,{children:(0,h.jsx)(s,{title:`Dashboard`,description:`Main content area`})})})})}var h,g;function _(){return(_=e((()=>{i(),c(),h=n(),g=[`Dashboard`,`Books`,`Reviews`,`Settings`]})))()}function v(){let[e,t]=(0,y.useState)(`floating`);return(0,b.jsx)(`div`,{style:{height:300,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,b.jsx)(o,{brand:`Admin`,sidebarMode:e,onSidebarModeChange:t,style:{minHeight:`100%`},navigation:({collapsed:e})=>(0,b.jsx)(`nav`,{children:e?`…`:`Navigation`}),children:(0,b.jsxs)(`p`,{style:{padding:24,margin:0},children:[`Sidebar mode: `,e]})})})}var y,b;function x(){return(x=e((()=>{y=t(),i(),b=n()})))()}var S;function C(){return(C=e((()=>{S=`import { AppShell, Button, Page, PageHeader } from "@minerva/lib-core";
import { LuLayoutDashboard } from "react-icons/lu";

const links = ["Dashboard", "Books", "Reviews", "Settings"];

export default function BasicDemo() {
  return (
    // The transform makes the fixed sidebar relative to this preview frame.
    <div
      style={{
        height: 360,
        overflow: "auto",
        transform: "translateZ(0)",
        width: "100%",
      }}
    >
      <AppShell
        brand="Publishing Admin"
        brandIcon={<LuLayoutDashboard />}
        navigationLabel="Workspace navigation"
        style={{ minHeight: "100%" }}
        headerActions={<Button size="small">Account</Button>}
        navigation={({ collapsed, closeNavigation }) => (
          <nav>
            {links.map((link) => (
              <a
                key={link}
                href={\`#\${link.toLowerCase()}\`}
                title={link}
                onClick={closeNavigation}
                style={{ display: "block", padding: "6px 8px" }}
              >
                {collapsed ? link[0] : link}
              </a>
            ))}
          </nav>
        )}
      >
        <Page>
          <PageHeader title="Dashboard" description="Main content area" />
        </Page>
      </AppShell>
    </div>
  );
}
`})))()}var w;function T(){return(T=e((()=>{w=`import { useState } from "react";
import { AppShell, type AppShellSidebarMode } from "@minerva/lib-core";

export default function ControlledDemo() {
  const [mode, setMode] = useState<AppShellSidebarMode>("floating");

  return (
    <div
      style={{
        height: 300,
        overflow: "auto",
        transform: "translateZ(0)",
        width: "100%",
      }}
    >
      <AppShell
        brand="Admin"
        sidebarMode={mode}
        onSidebarModeChange={setMode}
        style={{ minHeight: "100%" }}
        navigation={({ collapsed }) => (
          <nav>{collapsed ? "…" : "Navigation"}</nav>
        )}
      >
        <p style={{ padding: 24, margin: 0 }}>Sidebar mode: {mode}</p>
      </AppShell>
    </div>
  );
}
`})))()}var E,D,O;function k(){return(k=e((()=>{_(),x(),C(),T(),t(),d(),u(),E=n(),D=f(Object.assign({"./demos/basic.tsx":m,"./demos/controlled.tsx":v}),Object.assign({"./demos/basic.tsx":S,"./demos/controlled.tsx":w})),O=()=>(0,E.jsx)(p,{id:`app-shell`,demos:D})})))()}k();export{O as default};