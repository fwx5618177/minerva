import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as ee,t as r}from"./cn-CJDie0PQ.js";import{n as i,t as te}from"./useI18n-DtQV8aM0.js";import{n as a,t as o}from"./Button-CG2pPO-r.js";import{T as s,a as ne,d as re,o as ie,s as ae,w as oe}from"./icons-CtD3xdmP.js";import{n as c,t as se}from"./useControllableState-NzKJCN8h.js";import{n as l,t as ce}from"./IconButton-CmtS4-FY.js";import{a as le,n as ue,o as u,r as de,s as fe,t as pe}from"./Dialog-C5kbNHq2.js";import{a as d,r as f,t as p}from"./Page-zOqE_hLa.js";import{c as m,n as h,s as g,t as _}from"./DocPage-DzKszXiH.js";import{d as v,w as y}from"./lu-DBH5Ve51.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{b=`_shell_lrje7_1`,x=`_brand_lrje7_17`,S=`_brandLabel_lrje7_22`,C=`_sidebar_lrje7_25`,w=`_brandIcon_lrje7_56`,T=`_navigation_lrje7_71`,E=`_sidebarActions_lrje7_79`,D=`_workspace_lrje7_89`,O=`_header_lrje7_96`,k=`_control_lrje7_110`,A=`_headerActions_lrje7_114`,j=`_content_lrje7_124`,M=`_skipLink_lrje7_131`,N=`_overlay_lrje7_160`,P=`_drawer_lrje7_168`,F=`_drawerHeader_lrje7_195`,I=`_drawerBody_lrje7_204`,L=`_drawerClose_lrje7_211`,R={shell:b,brand:x,brandLabel:S,sidebar:C,brandIcon:w,navigation:T,sidebarActions:E,workspace:D,header:O,control:k,headerActions:A,content:j,skipLink:M,overlay:N,"fade-in":`_fade-in_lrje7_1`,drawer:P,"slide-in":`_slide-in_lrje7_1`,"slide-in-rtl":`_slide-in-rtl_lrje7_1`,drawerHeader:F,drawerBody:I,drawerClose:L}})))()}var B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{r(),i(),s(),c(),ce(),u(),z(),B=t(),V=n(),H=`(max-width: 768px)`,U=()=>typeof window<`u`&&typeof window.matchMedia==`function`,W=e=>{if(!U())return()=>{};let t=window.matchMedia(H);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)},G=()=>U()&&window.matchMedia(H).matches,K=()=>!1,q=({brand:e,brandIcon:t,navigation:n,navigationLabel:r,navigationKey:i,headerActions:a,pageNavigation:o,children:s,sidebarMode:c,defaultSidebarMode:ce=`expanded`,onSidebarModeChange:u,labels:d,skipLink:f=!0,className:p,...m})=>{let{t:h}=te(),g={expand:d?.expand??h(`appShell.expand`),collapse:d?.collapse??h(`appShell.collapse`),enableFloating:d?.enableFloating??h(`appShell.enableFloating`),disableFloating:d?.disableFloating??h(`appShell.disableFloating`),openNavigation:d?.openNavigation??h(`appShell.openNavigation`),closeNavigation:d?.closeNavigation??h(`appShell.closeNavigation`)},_=r??h(`appShell.navigation`),[v,y]=se({value:c,defaultValue:ce,onChange:u}),b=(0,B.useSyncExternalStore)(W,G,K),[x,S]=(0,B.useState)(!1),[C,w]=(0,B.useState)(!1),[T,E]=(0,B.useState)(!1),[D,O]=(0,B.useState)({navigationKey:i,isMobile:b});(D.navigationKey!==i||D.isMobile!==b)&&(O({navigationKey:i,isMobile:b}),S(!1),D.isMobile!==b&&(w(!1),E(!1)));let k=(0,B.useRef)(null),A=(0,B.useId)(),j=(0,B.useId)(),M=(0,B.useRef)(null),N=typeof f==`string`?f:h(`appShell.skipToContent`),P=b&&x,F=(0,B.useRef)(!1);(0,B.useEffect)(()=>{!b&&F.current&&k.current?.focus()},[b]),(0,B.useEffect)(()=>{F.current=P});let I=!b&&v!==`expanded`&&(v!==`floating`||!C&&!T),L=v!==`expanded`,z={collapsed:I,isMobile:b,closeNavigation:()=>S(!1),expandNavigation:()=>y(`expanded`)},H=e=>(0,V.jsx)(l,{ref:e?k:void 0,size:`small`,shape:`square`,className:R.control,"aria-label":L?g.expand:g.collapse,"aria-controls":A,"aria-expanded":!I,onClick:()=>y(L?`expanded`:`compact`),icon:(0,V.jsx)(L?ne:re,{"aria-hidden":`true`})});return(0,V.jsxs)(fe,{open:P,onOpenChange:S,children:[(0,V.jsxs)(`div`,{className:ee(R.shell,p),"data-sidebar-mode":v,"data-sidebar-expanded":!I||void 0,...m,children:[f!==!1&&(0,V.jsx)(`a`,{className:R.skipLink,href:`#${j}`,onClick:e=>{e.preventDefault(),M.current?.focus()},children:N}),!b&&(0,V.jsxs)(`aside`,{id:A,className:R.sidebar,"aria-label":_,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),onFocusCapture:e=>{e.target.matches(`:focus-visible`)&&E(!0)},onKeyDownCapture:e=>{e.key===`Tab`&&E(!0)},onPointerDownCapture:()=>E(!1),onBlurCapture:e=>{e.currentTarget.contains(e.relatedTarget)||E(!1)},children:[(0,V.jsxs)(`div`,{className:R.brand,children:[t&&(0,V.jsx)(`span`,{className:R.brandIcon,"aria-hidden":`true`,children:t}),(0,V.jsx)(`span`,{className:R.brandLabel,children:e})]}),(0,V.jsx)(`div`,{className:R.navigation,children:n(z)}),(0,V.jsxs)(`div`,{className:R.sidebarActions,children:[H(!1),(0,V.jsx)(l,{size:`small`,shape:`square`,className:R.control,"aria-pressed":v===`floating`,"aria-label":v===`floating`?g.disableFloating:g.enableFloating,onClick:()=>y(v===`floating`?`compact`:`floating`),icon:(0,V.jsx)(v===`floating`?ae:ie,{"aria-hidden":`true`})})]})]}),(0,V.jsxs)(`div`,{className:R.workspace,children:[(0,V.jsxs)(`header`,{className:R.header,children:[b?(0,V.jsx)(le,{asChild:!0,children:(0,V.jsx)(l,{ref:k,size:`small`,shape:`square`,className:R.control,"aria-label":g.openNavigation,icon:(0,V.jsx)(ne,{"aria-hidden":`true`})})}):H(!0),(0,V.jsx)(`div`,{className:R.headerActions,children:a})]}),o,(0,V.jsx)(`main`,{ref:M,id:j,tabIndex:-1,className:R.content,children:s})]})]}),b&&(0,V.jsxs)(pe,{overlayClassName:R.overlay,className:R.drawer,onCloseAutoFocus:e=>{e.preventDefault(),k.current?.focus()},children:[(0,V.jsx)(ue,{className:R.drawerHeader,children:_}),(0,V.jsx)(`div`,{className:R.drawerBody,children:n(z)}),(0,V.jsx)(de,{className:R.drawerClose,"aria-label":g.closeNavigation,children:(0,V.jsx)(oe,{"aria-hidden":`true`})})]})]})}})))()}function me(){return(0,Y.jsx)(`div`,{style:{height:360,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,Y.jsx)(q,{brand:`Publishing Admin`,brandIcon:(0,Y.jsx)(v,{}),navigationLabel:`Workspace navigation`,style:{minHeight:`100%`},headerActions:(0,Y.jsx)(o,{size:`small`,children:`Account`}),navigation:({collapsed:e,closeNavigation:t})=>(0,Y.jsx)(`nav`,{children:he.map(n=>(0,Y.jsx)(`a`,{href:`#${n.toLowerCase()}`,title:n,onClick:t,style:{display:`block`,padding:`6px 8px`},children:e?n[0]:n},n))}),children:(0,Y.jsx)(d,{children:(0,Y.jsx)(p,{title:`Dashboard`,description:`Main content area`})})})})}var Y,he;function ge(){return(ge=e((()=>{J(),a(),f(),y(),Y=n(),he=[`Dashboard`,`Books`,`Reviews`,`Settings`]})))()}function _e(){let[e,t]=(0,ve.useState)(`floating`);return(0,X.jsx)(`div`,{style:{height:300,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,X.jsx)(q,{brand:`Admin`,sidebarMode:e,onSidebarModeChange:t,style:{minHeight:`100%`},navigation:({collapsed:e})=>(0,X.jsx)(`nav`,{children:e?`…`:`Navigation`}),children:(0,X.jsxs)(`p`,{style:{padding:24,margin:0},children:[`Sidebar mode: `,e]})})})}var ve,X;function ye(){return(ye=e((()=>{ve=t(),J(),X=n()})))()}function be(){return(0,Z.jsx)(`div`,{style:{height:320,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,Z.jsx)(q,{brand:`Publishing Admin`,brandIcon:(0,Z.jsx)(v,{}),skipLink:`Skip to the book list`,style:{minHeight:`100%`},headerActions:(0,Z.jsx)(o,{size:`small`,children:`Account`}),navigation:({collapsed:e})=>(0,Z.jsx)(`nav`,{children:xe.map(t=>(0,Z.jsx)(`a`,{href:`#${t.toLowerCase()}`,title:t,style:{display:`block`,padding:`6px 8px`},children:e?t[0]:t},t))}),children:(0,Z.jsxs)(d,{children:[(0,Z.jsx)(p,{title:`Books`,description:`Focus the frame and press Tab: the skip link appears first`}),(0,Z.jsx)(o,{size:`small`,children:`First action of the content`})]})})})}var Z,xe;function Se(){return(Se=e((()=>{J(),a(),f(),y(),Z=n(),xe=[`Dashboard`,`Books`,`Reviews`,`Settings`]})))()}var Ce;function we(){return(we=e((()=>{Ce=`import { AppShell, Button, Page, PageHeader } from "@minerva/lib-core";
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
`})))()}var Q;function Te(){return(Te=e((()=>{Q=`import { useState } from "react";
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
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`import { AppShell, Button, Page, PageHeader } from "@minerva/lib-core";
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
`})))()}var Oe,ke,Ae;function $(){return($=e((()=>{ge(),ye(),Se(),we(),Te(),De(),t(),h(),m(),Oe=n(),ke=g(Object.assign({"./demos/basic.tsx":me,"./demos/controlled.tsx":_e,"./demos/skip-link.tsx":be}),Object.assign({"./demos/basic.tsx":Ce,"./demos/controlled.tsx":Q,"./demos/skip-link.tsx":Ee})),Ae=()=>(0,Oe.jsx)(_,{id:`app-shell`,demos:ke})})))()}$();export{Ae as default};