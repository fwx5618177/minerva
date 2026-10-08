import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{o as ee,vt as r}from"./minerva-web-components-ByJsjP0z.js";import{m as i,n as a,p as o,t as te}from"./DocPage-CVA4UCUb.js";import{Q as s,Z as ne}from"./io5-BO4aBax7.js";import{n as c,t as re}from"./useI18n-B2tkKcqQ.js";import{t as l}from"./stylingHooks-GjssfG7q.js";import{n as u,t as d}from"./Button-DoMjJPcZ.js";import{T as f,a as p,d as ie,o as ae,s as oe,w as se}from"./icons-C9qyBhWC.js";import{n as ce,t as m}from"./IconButton-Bs8gNUKQ.js";import{a as h,i as le,n as ue,o as de,r as fe,t as pe}from"./Dialog-CZnL8nH0.js";import{a as g,i as _,t as v}from"./Page-BdDRNhkm.js";import{T as y,f as b}from"./lu-DNouP3-B.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{x=`_shell_nc5ra_1`,S=`_brand_nc5ra_17`,C=`_brandLabel_nc5ra_22`,w=`_sidebar_nc5ra_25`,T=`_brandIcon_nc5ra_85`,E=`_navigation_nc5ra_100`,D=`_sidebarActions_nc5ra_108`,O=`_workspace_nc5ra_133`,k=`_header_nc5ra_140`,A=`_control_nc5ra_168`,j=`_headerActions_nc5ra_172`,M=`_content_nc5ra_182`,N=`_skipLink_nc5ra_189`,P=`_overlay_nc5ra_218`,F=`_drawer_nc5ra_226`,I=`_drawerHeader_nc5ra_253`,L=`_drawerBody_nc5ra_262`,R=`_drawerClose_nc5ra_269`,z={shell:x,brand:S,brandLabel:C,sidebar:w,brandIcon:T,navigation:E,sidebarActions:D,workspace:O,header:k,control:A,headerActions:j,content:M,skipLink:N,overlay:P,"fade-in":`_fade-in_nc5ra_1`,drawer:F,"slide-in":`_slide-in_nc5ra_1`,"slide-in-rtl":`_slide-in-rtl_nc5ra_1`,drawerHeader:I,drawerBody:L,drawerClose:R}})))()}var V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{r(),c(),f(),s(),ce(),h(),B(),V=t(),H=n(),U=`(max-width: 768px)`,W=()=>typeof window<`u`&&typeof window.matchMedia==`function`,G=e=>{if(!W())return()=>{};let t=window.matchMedia(U);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)},K=()=>W()&&window.matchMedia(U).matches,q=()=>!1,J=({brand:e,brandIcon:t,navigation:n,navigationLabel:r,navigationKey:i,headerActions:a,pageNavigation:o,children:te,sidebarMode:s,defaultSidebarMode:c,onSidebarModeChange:u,labels:d,skipLink:f=!0,className:ce,...h})=>{let{t:g}=re(),_={expand:d?.expand??g(`appShell.expand`),collapse:d?.collapse??g(`appShell.collapse`),enableFloating:d?.enableFloating??g(`appShell.enableFloating`),disableFloating:d?.disableFloating??g(`appShell.disableFloating`),openNavigation:d?.openNavigation??g(`appShell.openNavigation`),closeNavigation:d?.closeNavigation??g(`appShell.closeNavigation`)},v=r??g(`appShell.navigation`),[y,b]=ne({value:s,defaultValue:c??`expanded`,onChange:u,name:`AppShell`,prop:`sidebarMode`}),x=(0,V.useSyncExternalStore)(G,K,q),[S,C]=(0,V.useState)(!1),[w,T]=(0,V.useState)(!1),[E,D]=(0,V.useState)(!1),[O,k]=(0,V.useState)({navigationKey:i,isMobile:x});(O.navigationKey!==i||O.isMobile!==x)&&(k({navigationKey:i,isMobile:x}),C(!1),O.isMobile!==x&&(T(!1),D(!1)));let A=(0,V.useRef)(null),j=(0,V.useId)(),M=(0,V.useId)(),N=(0,V.useRef)(null),P=typeof f==`string`?f:g(`appShell.skipToContent`),F=x&&S,I=(0,V.useRef)(!1);(0,V.useEffect)(()=>{!x&&I.current&&A.current?.focus()},[x]),(0,V.useEffect)(()=>{I.current=F});let L=!x&&y!==`expanded`&&(y!==`floating`||!w&&!E),R=y!==`expanded`,B={collapsed:L,isMobile:x,closeNavigation:()=>C(!1),expandNavigation:()=>b(`expanded`)},U=e=>(0,H.jsx)(m,{ref:e?A:void 0,size:`small`,shape:`square`,className:z.control,"aria-label":R?_.expand:_.collapse,"aria-controls":j,"aria-expanded":!L,onClick:()=>b(R?`expanded`:`compact`),icon:(0,H.jsx)(R?p:ie,{"aria-hidden":`true`})});return(0,H.jsxs)(le,{open:F,onOpenChange:C,children:[(0,H.jsxs)(`div`,{className:ee(z.shell,ce),"data-sidebar-mode":y,"data-sidebar-expanded":!L||void 0,...h,...l(`app-shell`,`root`,{state:F?`open`:`closed`}),children:[f!==!1&&(0,H.jsx)(`a`,{className:z.skipLink,href:`#${M}`,...l(`app-shell`,`skip-link`),onClick:e=>{e.preventDefault(),N.current?.focus()},children:P}),!x&&(0,H.jsxs)(`aside`,{id:j,className:z.sidebar,"aria-label":v,...l(`app-shell`,`sidebar`),onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),onFocusCapture:e=>{e.target.matches(`:focus-visible`)&&D(!0)},onKeyDownCapture:e=>{e.key===`Tab`&&D(!0)},onPointerDownCapture:()=>D(!1),onBlurCapture:e=>{e.currentTarget.contains(e.relatedTarget)||D(!1)},children:[(0,H.jsxs)(`div`,{className:z.brand,children:[t&&(0,H.jsx)(`span`,{className:z.brandIcon,"aria-hidden":`true`,children:t}),(0,H.jsx)(`span`,{className:z.brandLabel,children:e})]}),(0,H.jsx)(`div`,{className:z.navigation,children:n(B)}),(0,H.jsxs)(`div`,{className:z.sidebarActions,children:[U(!1),(0,H.jsx)(m,{size:`small`,shape:`square`,className:z.control,"aria-pressed":y===`floating`,"aria-label":y===`floating`?_.disableFloating:_.enableFloating,onClick:()=>b(y===`floating`?`compact`:`floating`),icon:(0,H.jsx)(y===`floating`?oe:ae,{"aria-hidden":`true`})})]})]}),(0,H.jsxs)(`div`,{className:z.workspace,children:[(0,H.jsxs)(`header`,{className:z.header,...l(`app-shell`,`header`),children:[x?(0,H.jsx)(ue,{asChild:!0,children:(0,H.jsx)(m,{ref:A,size:`small`,shape:`square`,className:z.control,"aria-label":_.openNavigation,icon:(0,H.jsx)(p,{"aria-hidden":`true`})})}):U(!0),(0,H.jsx)(`div`,{className:z.headerActions,children:a})]}),o,(0,H.jsx)(`main`,{ref:N,id:M,tabIndex:-1,className:z.content,...l(`app-shell`,`main`),children:te})]})]}),x&&(0,H.jsxs)(de,{overlayClassName:z.overlay,overlayAttributes:l(`app-shell`,`overlay`),className:z.drawer,...l(`app-shell`,`content`),onCloseAutoFocus:e=>{e.preventDefault(),A.current?.focus()},children:[(0,H.jsx)(fe,{className:z.drawerHeader,children:v}),(0,H.jsx)(`div`,{className:z.drawerBody,children:n(B)}),(0,H.jsx)(pe,{className:z.drawerClose,"aria-label":_.closeNavigation,...l(`app-shell`,`close-button`),children:(0,H.jsx)(se,{"aria-hidden":`true`})})]})]})}})))()}function me(){return(0,X.jsx)(`div`,{style:{height:360,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,X.jsx)(J,{brand:`Publishing Admin`,brandIcon:(0,X.jsx)(b,{}),navigationLabel:`Workspace navigation`,style:{minHeight:`100%`},headerActions:(0,X.jsx)(u,{size:`small`,children:`Account`}),navigation:({collapsed:e,closeNavigation:t})=>(0,X.jsx)(`nav`,{children:he.map(n=>(0,X.jsx)(`a`,{href:`#${n.toLowerCase()}`,title:n,onClick:t,style:{display:`block`,padding:`6px 8px`},children:e?n[0]:n},n))}),children:(0,X.jsx)(v,{children:(0,X.jsx)(g,{title:`Dashboard`,description:`Main content area`})})})})}var X,he;function ge(){return(ge=e((()=>{Y(),d(),_(),y(),X=n(),he=[`Dashboard`,`Books`,`Reviews`,`Settings`]})))()}function _e(){let[e,t]=(0,ve.useState)(`floating`);return(0,Z.jsx)(`div`,{style:{height:300,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,Z.jsx)(J,{brand:`Admin`,sidebarMode:e,onSidebarModeChange:t,style:{minHeight:`100%`},navigation:({collapsed:e})=>(0,Z.jsx)(`nav`,{children:e?`…`:`Navigation`}),children:(0,Z.jsxs)(`p`,{style:{padding:24,margin:0},children:[`Sidebar mode: `,e]})})})}var ve,Z;function ye(){return(ye=e((()=>{ve=t(),Y(),Z=n()})))()}function be(){return(0,Q.jsx)(`div`,{style:{height:320,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,Q.jsx)(J,{brand:`Publishing Admin`,brandIcon:(0,Q.jsx)(b,{}),skipLink:`Skip to the book list`,style:{minHeight:`100%`},headerActions:(0,Q.jsx)(u,{size:`small`,children:`Account`}),navigation:({collapsed:e})=>(0,Q.jsx)(`nav`,{children:xe.map(t=>(0,Q.jsx)(`a`,{href:`#${t.toLowerCase()}`,title:t,style:{display:`block`,padding:`6px 8px`},children:e?t[0]:t},t))}),children:(0,Q.jsxs)(v,{children:[(0,Q.jsx)(g,{title:`Books`,description:`Focus the frame and press Tab: the skip link appears first`}),(0,Q.jsx)(u,{size:`small`,children:`First action of the content`})]})})})}var Q,xe;function Se(){return(Se=e((()=>{Y(),d(),_(),y(),Q=n(),xe=[`Dashboard`,`Books`,`Reviews`,`Settings`]})))()}var Ce;function $(){return($=e((()=>{Ce=`import { AppShell, Button, Page, PageHeader } from "minerva-design";
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
`})))()}var we;function Te(){return(Te=e((()=>{we=`import { useState } from "react";
import { AppShell, type AppShellSidebarMode } from "minerva-design";

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
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`import { AppShell, Button, Page, PageHeader } from "minerva-design";
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
`})))()}var Oe,ke,Ae;function je(){return(je=e((()=>{ge(),ye(),Se(),$(),Te(),De(),t(),a(),i(),Oe=n(),ke=o(Object.assign({"./demos/basic.tsx":me,"./demos/controlled.tsx":_e,"./demos/skip-link.tsx":be}),Object.assign({"./demos/basic.tsx":Ce,"./demos/controlled.tsx":we,"./demos/skip-link.tsx":Ee})),Ae=()=>(0,Oe.jsx)(te,{id:`app-shell`,demos:ke})})))()}je();export{Ae as default};