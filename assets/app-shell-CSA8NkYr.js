import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as ee,cn as r}from"./minerva-web-components-e9i9Tzii.js";import{Q as i,Z as te}from"./io5-Db3ldn2O.js";import{n as ne,t as re}from"./useI18n-Brv-VDVY.js";import{n as a,t as o}from"./Button-DP6INRXF.js";import{T as s,a as c,d as ie,o as ae,s as oe,w as se}from"./icons-C9qyBhWC.js";import{n as l,t as u}from"./IconButton-B4tqbPo6.js";import{a as d,i as ce,n as le,o as ue,r as de,t as fe}from"./Dialog-n_DEqS30.js";import{a as f,r as p,t as m}from"./Page-4mxSrDl3.js";import{c as h,n as g,s as _,t as v}from"./DocPage-BeqNKFhE.js";import{d as y,w as b}from"./lu-DukeLmz9.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{x=`_shell_lrje7_1`,S=`_brand_lrje7_17`,C=`_brandLabel_lrje7_22`,w=`_sidebar_lrje7_25`,T=`_brandIcon_lrje7_56`,E=`_navigation_lrje7_71`,D=`_sidebarActions_lrje7_79`,O=`_workspace_lrje7_89`,k=`_header_lrje7_96`,A=`_control_lrje7_110`,j=`_headerActions_lrje7_114`,M=`_content_lrje7_124`,N=`_skipLink_lrje7_131`,P=`_overlay_lrje7_160`,F=`_drawer_lrje7_168`,I=`_drawerHeader_lrje7_195`,L=`_drawerBody_lrje7_204`,R=`_drawerClose_lrje7_211`,z={shell:x,brand:S,brandLabel:C,sidebar:w,brandIcon:T,navigation:E,sidebarActions:D,workspace:O,header:k,control:A,headerActions:j,content:M,skipLink:N,overlay:P,"fade-in":`_fade-in_lrje7_1`,drawer:F,"slide-in":`_slide-in_lrje7_1`,"slide-in-rtl":`_slide-in-rtl_lrje7_1`,drawerHeader:I,drawerBody:L,drawerClose:R}})))()}var V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{r(),ne(),s(),i(),l(),d(),B(),V=t(),H=n(),U=`(max-width: 768px)`,W=()=>typeof window<`u`&&typeof window.matchMedia==`function`,G=e=>{if(!W())return()=>{};let t=window.matchMedia(U);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)},K=()=>W()&&window.matchMedia(U).matches,q=()=>!1,J=({brand:e,brandIcon:t,navigation:n,navigationLabel:r,navigationKey:i,headerActions:ne,pageNavigation:a,children:o,sidebarMode:s,defaultSidebarMode:l,onSidebarModeChange:d,labels:f,skipLink:p=!0,className:m,...h})=>{let{t:g}=re(),_={expand:f?.expand??g(`appShell.expand`),collapse:f?.collapse??g(`appShell.collapse`),enableFloating:f?.enableFloating??g(`appShell.enableFloating`),disableFloating:f?.disableFloating??g(`appShell.disableFloating`),openNavigation:f?.openNavigation??g(`appShell.openNavigation`),closeNavigation:f?.closeNavigation??g(`appShell.closeNavigation`)},v=r??g(`appShell.navigation`),[y,b]=te({value:s,defaultValue:l??`expanded`,onChange:d,name:`AppShell`,prop:`sidebarMode`}),x=(0,V.useSyncExternalStore)(G,K,q),[S,C]=(0,V.useState)(!1),[w,T]=(0,V.useState)(!1),[E,D]=(0,V.useState)(!1),[O,k]=(0,V.useState)({navigationKey:i,isMobile:x});(O.navigationKey!==i||O.isMobile!==x)&&(k({navigationKey:i,isMobile:x}),C(!1),O.isMobile!==x&&(T(!1),D(!1)));let A=(0,V.useRef)(null),j=(0,V.useId)(),M=(0,V.useId)(),N=(0,V.useRef)(null),P=typeof p==`string`?p:g(`appShell.skipToContent`),F=x&&S,I=(0,V.useRef)(!1);(0,V.useEffect)(()=>{!x&&I.current&&A.current?.focus()},[x]),(0,V.useEffect)(()=>{I.current=F});let L=!x&&y!==`expanded`&&(y!==`floating`||!w&&!E),R=y!==`expanded`,B={collapsed:L,isMobile:x,closeNavigation:()=>C(!1),expandNavigation:()=>b(`expanded`)},U=e=>(0,H.jsx)(u,{ref:e?A:void 0,size:`small`,shape:`square`,className:z.control,"aria-label":R?_.expand:_.collapse,"aria-controls":j,"aria-expanded":!L,onClick:()=>b(R?`expanded`:`compact`),icon:(0,H.jsx)(R?c:ie,{"aria-hidden":`true`})});return(0,H.jsxs)(ce,{open:F,onOpenChange:C,children:[(0,H.jsxs)(`div`,{className:ee(z.shell,m),"data-sidebar-mode":y,"data-sidebar-expanded":!L||void 0,...h,children:[p!==!1&&(0,H.jsx)(`a`,{className:z.skipLink,href:`#${M}`,onClick:e=>{e.preventDefault(),N.current?.focus()},children:P}),!x&&(0,H.jsxs)(`aside`,{id:j,className:z.sidebar,"aria-label":v,onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),onFocusCapture:e=>{e.target.matches(`:focus-visible`)&&D(!0)},onKeyDownCapture:e=>{e.key===`Tab`&&D(!0)},onPointerDownCapture:()=>D(!1),onBlurCapture:e=>{e.currentTarget.contains(e.relatedTarget)||D(!1)},children:[(0,H.jsxs)(`div`,{className:z.brand,children:[t&&(0,H.jsx)(`span`,{className:z.brandIcon,"aria-hidden":`true`,children:t}),(0,H.jsx)(`span`,{className:z.brandLabel,children:e})]}),(0,H.jsx)(`div`,{className:z.navigation,children:n(B)}),(0,H.jsxs)(`div`,{className:z.sidebarActions,children:[U(!1),(0,H.jsx)(u,{size:`small`,shape:`square`,className:z.control,"aria-pressed":y===`floating`,"aria-label":y===`floating`?_.disableFloating:_.enableFloating,onClick:()=>b(y===`floating`?`compact`:`floating`),icon:(0,H.jsx)(y===`floating`?oe:ae,{"aria-hidden":`true`})})]})]}),(0,H.jsxs)(`div`,{className:z.workspace,children:[(0,H.jsxs)(`header`,{className:z.header,children:[x?(0,H.jsx)(le,{asChild:!0,children:(0,H.jsx)(u,{ref:A,size:`small`,shape:`square`,className:z.control,"aria-label":_.openNavigation,icon:(0,H.jsx)(c,{"aria-hidden":`true`})})}):U(!0),(0,H.jsx)(`div`,{className:z.headerActions,children:ne})]}),a,(0,H.jsx)(`main`,{ref:N,id:M,tabIndex:-1,className:z.content,children:o})]})]}),x&&(0,H.jsxs)(ue,{overlayClassName:z.overlay,className:z.drawer,onCloseAutoFocus:e=>{e.preventDefault(),A.current?.focus()},children:[(0,H.jsx)(de,{className:z.drawerHeader,children:v}),(0,H.jsx)(`div`,{className:z.drawerBody,children:n(B)}),(0,H.jsx)(fe,{className:z.drawerClose,"aria-label":_.closeNavigation,children:(0,H.jsx)(se,{"aria-hidden":`true`})})]})]})}})))()}function pe(){return(0,X.jsx)(`div`,{style:{height:360,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,X.jsx)(J,{brand:`Publishing Admin`,brandIcon:(0,X.jsx)(y,{}),navigationLabel:`Workspace navigation`,style:{minHeight:`100%`},headerActions:(0,X.jsx)(o,{size:`small`,children:`Account`}),navigation:({collapsed:e,closeNavigation:t})=>(0,X.jsx)(`nav`,{children:me.map(n=>(0,X.jsx)(`a`,{href:`#${n.toLowerCase()}`,title:n,onClick:t,style:{display:`block`,padding:`6px 8px`},children:e?n[0]:n},n))}),children:(0,X.jsx)(f,{children:(0,X.jsx)(m,{title:`Dashboard`,description:`Main content area`})})})})}var X,me;function he(){return(he=e((()=>{Y(),a(),p(),b(),X=n(),me=[`Dashboard`,`Books`,`Reviews`,`Settings`]})))()}function ge(){let[e,t]=(0,_e.useState)(`floating`);return(0,Z.jsx)(`div`,{style:{height:300,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,Z.jsx)(J,{brand:`Admin`,sidebarMode:e,onSidebarModeChange:t,style:{minHeight:`100%`},navigation:({collapsed:e})=>(0,Z.jsx)(`nav`,{children:e?`…`:`Navigation`}),children:(0,Z.jsxs)(`p`,{style:{padding:24,margin:0},children:[`Sidebar mode: `,e]})})})}var _e,Z;function ve(){return(ve=e((()=>{_e=t(),Y(),Z=n()})))()}function ye(){return(0,Q.jsx)(`div`,{style:{height:320,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,Q.jsx)(J,{brand:`Publishing Admin`,brandIcon:(0,Q.jsx)(y,{}),skipLink:`Skip to the book list`,style:{minHeight:`100%`},headerActions:(0,Q.jsx)(o,{size:`small`,children:`Account`}),navigation:({collapsed:e})=>(0,Q.jsx)(`nav`,{children:be.map(t=>(0,Q.jsx)(`a`,{href:`#${t.toLowerCase()}`,title:t,style:{display:`block`,padding:`6px 8px`},children:e?t[0]:t},t))}),children:(0,Q.jsxs)(f,{children:[(0,Q.jsx)(m,{title:`Books`,description:`Focus the frame and press Tab: the skip link appears first`}),(0,Q.jsx)(o,{size:`small`,children:`First action of the content`})]})})})}var Q,be;function $(){return($=e((()=>{Y(),a(),p(),b(),Q=n(),be=[`Dashboard`,`Books`,`Reviews`,`Settings`]})))()}var xe;function Se(){return(Se=e((()=>{xe=`import { AppShell, Button, Page, PageHeader } from "@minerva/lib-core";
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
`})))()}var De,Oe,ke;function Ae(){return(Ae=e((()=>{he(),ve(),$(),Se(),we(),Ee(),t(),g(),h(),De=n(),Oe=_(Object.assign({"./demos/basic.tsx":pe,"./demos/controlled.tsx":ge,"./demos/skip-link.tsx":ye}),Object.assign({"./demos/basic.tsx":xe,"./demos/controlled.tsx":Ce,"./demos/skip-link.tsx":Te})),ke=()=>(0,De.jsx)(v,{id:`app-shell`,demos:Oe})})))()}Ae();export{ke as default};