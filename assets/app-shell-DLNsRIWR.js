import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{C as ee,O as r,c as i,k as te,n as ne,s as a,t as o,w as s}from"./DocPage-HgWiqH91.js";import{n as c,t as re}from"./useI18n-CYdr3eVz.js";import{n as l,t as u}from"./Button-CwqLLYn6.js";import{T as d,a as f,d as ie,o as ae,s as oe,w as se}from"./icons-BaZJL-85.js";import{n as ce,t as p}from"./IconButton-BvJguNAN.js";import{a as m,i as le,n as ue,o as de,r as fe,t as pe}from"./Dialog-CtqysUZd.js";import{a as h,r as g,t as _}from"./Page-CwxuqIAx.js";import{d as v,w as y}from"./lu-D4WkY8Ju.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{b=`_shell_lrje7_1`,x=`_brand_lrje7_17`,S=`_brandLabel_lrje7_22`,C=`_sidebar_lrje7_25`,w=`_brandIcon_lrje7_56`,T=`_navigation_lrje7_71`,E=`_sidebarActions_lrje7_79`,D=`_workspace_lrje7_89`,O=`_header_lrje7_96`,k=`_control_lrje7_110`,A=`_headerActions_lrje7_114`,j=`_content_lrje7_124`,M=`_skipLink_lrje7_131`,N=`_overlay_lrje7_160`,P=`_drawer_lrje7_168`,F=`_drawerHeader_lrje7_195`,I=`_drawerBody_lrje7_204`,L=`_drawerClose_lrje7_211`,R={shell:b,brand:x,brandLabel:S,sidebar:C,brandIcon:w,navigation:T,sidebarActions:E,workspace:D,header:O,control:k,headerActions:A,content:j,skipLink:M,overlay:N,"fade-in":`_fade-in_lrje7_1`,drawer:P,"slide-in":`_slide-in_lrje7_1`,"slide-in-rtl":`_slide-in-rtl_lrje7_1`,drawerHeader:F,drawerBody:I,drawerClose:L}})))()}var B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{r(),c(),d(),s(),ce(),m(),z(),B=t(),V=n(),H=`(max-width: 768px)`,U=()=>typeof window<`u`&&typeof window.matchMedia==`function`,W=e=>{if(!U())return()=>{};let t=window.matchMedia(H);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)},G=()=>U()&&window.matchMedia(H).matches,K=()=>!1,q=({brand:e,brandIcon:t,navigation:n,navigationLabel:r,navigationKey:i,headerActions:ne,pageNavigation:a,children:o,sidebarMode:s,defaultSidebarMode:c,onSidebarModeChange:l,labels:u,skipLink:d=!0,className:ce,...m})=>{let{t:h}=re(),g={expand:u?.expand??h(`appShell.expand`),collapse:u?.collapse??h(`appShell.collapse`),enableFloating:u?.enableFloating??h(`appShell.enableFloating`),disableFloating:u?.disableFloating??h(`appShell.disableFloating`),openNavigation:u?.openNavigation??h(`appShell.openNavigation`),closeNavigation:u?.closeNavigation??h(`appShell.closeNavigation`)},_=r??h(`appShell.navigation`),[v,y]=ee({value:s,defaultValue:c??`expanded`,onChange:l,name:`AppShell`,prop:`sidebarMode`}),b=(0,B.useSyncExternalStore)(W,G,K),[x,S]=(0,B.useState)(!1),[C,w]=(0,B.useState)(!1),[T,E]=(0,B.useState)(!1),[D,O]=(0,B.useState)({navigationKey:i,isMobile:b});(D.navigationKey!==i||D.isMobile!==b)&&(O({navigationKey:i,isMobile:b}),S(!1),D.isMobile!==b&&(w(!1),E(!1)));let k=(0,B.useRef)(null),A=(0,B.useId)(),j=(0,B.useId)(),M=(0,B.useRef)(null),N=typeof d==`string`?d:h(`appShell.skipToContent`),P=b&&x,F=(0,B.useRef)(!1);(0,B.useEffect)(()=>{!b&&F.current&&k.current?.focus()},[b]),(0,B.useEffect)(()=>{F.current=P});let I=!b&&v!==`expanded`&&(v!==`floating`||!C&&!T),L=v!==`expanded`,z={collapsed:I,isMobile:b,closeNavigation:()=>S(!1),expandNavigation:()=>y(`expanded`)},H=e=>(0,V.jsx)(p,{ref:e?k:void 0,size:`small`,shape:`square`,className:R.control,"aria-label":L?g.expand:g.collapse,"aria-controls":A,"aria-expanded":!I,onClick:()=>y(L?`expanded`:`compact`),icon:(0,V.jsx)(L?f:ie,{"aria-hidden":`true`})});return(0,V.jsxs)(le,{open:P,onOpenChange:S,children:[(0,V.jsxs)(`div`,{className:te(R.shell,ce),"data-sidebar-mode":v,"data-sidebar-expanded":!I||void 0,...m,children:[d!==!1&&(0,V.jsx)(`a`,{className:R.skipLink,href:`#${j}`,onClick:e=>{e.preventDefault(),M.current?.focus()},children:N}),!b&&(0,V.jsxs)(`aside`,{id:A,className:R.sidebar,"aria-label":_,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),onFocusCapture:e=>{e.target.matches(`:focus-visible`)&&E(!0)},onKeyDownCapture:e=>{e.key===`Tab`&&E(!0)},onPointerDownCapture:()=>E(!1),onBlurCapture:e=>{e.currentTarget.contains(e.relatedTarget)||E(!1)},children:[(0,V.jsxs)(`div`,{className:R.brand,children:[t&&(0,V.jsx)(`span`,{className:R.brandIcon,"aria-hidden":`true`,children:t}),(0,V.jsx)(`span`,{className:R.brandLabel,children:e})]}),(0,V.jsx)(`div`,{className:R.navigation,children:n(z)}),(0,V.jsxs)(`div`,{className:R.sidebarActions,children:[H(!1),(0,V.jsx)(p,{size:`small`,shape:`square`,className:R.control,"aria-pressed":v===`floating`,"aria-label":v===`floating`?g.disableFloating:g.enableFloating,onClick:()=>y(v===`floating`?`compact`:`floating`),icon:(0,V.jsx)(v===`floating`?oe:ae,{"aria-hidden":`true`})})]})]}),(0,V.jsxs)(`div`,{className:R.workspace,children:[(0,V.jsxs)(`header`,{className:R.header,children:[b?(0,V.jsx)(ue,{asChild:!0,children:(0,V.jsx)(p,{ref:k,size:`small`,shape:`square`,className:R.control,"aria-label":g.openNavigation,icon:(0,V.jsx)(f,{"aria-hidden":`true`})})}):H(!0),(0,V.jsx)(`div`,{className:R.headerActions,children:ne})]}),a,(0,V.jsx)(`main`,{ref:M,id:j,tabIndex:-1,className:R.content,children:o})]})]}),b&&(0,V.jsxs)(de,{overlayClassName:R.overlay,className:R.drawer,onCloseAutoFocus:e=>{e.preventDefault(),k.current?.focus()},children:[(0,V.jsx)(fe,{className:R.drawerHeader,children:_}),(0,V.jsx)(`div`,{className:R.drawerBody,children:n(z)}),(0,V.jsx)(pe,{className:R.drawerClose,"aria-label":g.closeNavigation,children:(0,V.jsx)(se,{"aria-hidden":`true`})})]})]})}})))()}function me(){return(0,Y.jsx)(`div`,{style:{height:360,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,Y.jsx)(q,{brand:`Publishing Admin`,brandIcon:(0,Y.jsx)(v,{}),navigationLabel:`Workspace navigation`,style:{minHeight:`100%`},headerActions:(0,Y.jsx)(u,{size:`small`,children:`Account`}),navigation:({collapsed:e,closeNavigation:t})=>(0,Y.jsx)(`nav`,{children:X.map(n=>(0,Y.jsx)(`a`,{href:`#${n.toLowerCase()}`,title:n,onClick:t,style:{display:`block`,padding:`6px 8px`},children:e?n[0]:n},n))}),children:(0,Y.jsx)(h,{children:(0,Y.jsx)(_,{title:`Dashboard`,description:`Main content area`})})})})}var Y,X;function he(){return(he=e((()=>{J(),l(),g(),y(),Y=n(),X=[`Dashboard`,`Books`,`Reviews`,`Settings`]})))()}function ge(){let[e,t]=(0,_e.useState)(`floating`);return(0,Z.jsx)(`div`,{style:{height:300,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,Z.jsx)(q,{brand:`Admin`,sidebarMode:e,onSidebarModeChange:t,style:{minHeight:`100%`},navigation:({collapsed:e})=>(0,Z.jsx)(`nav`,{children:e?`…`:`Navigation`}),children:(0,Z.jsxs)(`p`,{style:{padding:24,margin:0},children:[`Sidebar mode: `,e]})})})}var _e,Z;function ve(){return(ve=e((()=>{_e=t(),J(),Z=n()})))()}function ye(){return(0,Q.jsx)(`div`,{style:{height:320,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,Q.jsx)(q,{brand:`Publishing Admin`,brandIcon:(0,Q.jsx)(v,{}),skipLink:`Skip to the book list`,style:{minHeight:`100%`},headerActions:(0,Q.jsx)(u,{size:`small`,children:`Account`}),navigation:({collapsed:e})=>(0,Q.jsx)(`nav`,{children:be.map(t=>(0,Q.jsx)(`a`,{href:`#${t.toLowerCase()}`,title:t,style:{display:`block`,padding:`6px 8px`},children:e?t[0]:t},t))}),children:(0,Q.jsxs)(h,{children:[(0,Q.jsx)(_,{title:`Books`,description:`Focus the frame and press Tab: the skip link appears first`}),(0,Q.jsx)(u,{size:`small`,children:`First action of the content`})]})})})}var Q,be;function $(){return($=e((()=>{J(),l(),g(),y(),Q=n(),be=[`Dashboard`,`Books`,`Reviews`,`Settings`]})))()}var xe;function Se(){return(Se=e((()=>{xe=`import { AppShell, Button, Page, PageHeader } from "@minerva/lib-core";
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
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`import { useState } from "react";
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
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`import { AppShell, Button, Page, PageHeader } from "@minerva/lib-core";
import { LuLayoutDashboard } from "react-icons/lu";

const links = ["Dashboard", "Books", "Reviews", "Settings"];

export default function SkipLinkDemo() {
  return (
    // The transform makes the fixed sidebar relative to this preview frame.
    <div
      style={{
        height: 320,
        overflow: "auto",
        transform: "translateZ(0)",
        width: "100%",
      }}
    >
      <AppShell
        brand="Publishing Admin"
        brandIcon={<LuLayoutDashboard />}
        skipLink="Skip to the book list"
        style={{ minHeight: "100%" }}
        headerActions={<Button size="small">Account</Button>}
        navigation={({ collapsed }) => (
          <nav>
            {links.map((link) => (
              <a
                key={link}
                href={\`#\${link.toLowerCase()}\`}
                title={link}
                style={{ display: "block", padding: "6px 8px" }}
              >
                {collapsed ? link[0] : link}
              </a>
            ))}
          </nav>
        )}
      >
        <Page>
          <PageHeader
            title="Books"
            description="Focus the frame and press Tab: the skip link appears first"
          />
          <Button size="small">First action of the content</Button>
        </Page>
      </AppShell>
    </div>
  );
}
`})))()}var De,Oe,ke;function Ae(){return(Ae=e((()=>{he(),ve(),$(),Se(),we(),Ee(),t(),ne(),i(),De=n(),Oe=a(Object.assign({"./demos/basic.tsx":me,"./demos/controlled.tsx":ge,"./demos/skip-link.tsx":ye}),Object.assign({"./demos/basic.tsx":xe,"./demos/controlled.tsx":Ce,"./demos/skip-link.tsx":Te})),ke=()=>(0,De.jsx)(o,{id:`app-shell`,demos:Oe})})))()}Ae();export{ke as default};