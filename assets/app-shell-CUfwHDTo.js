import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as ee,cn as te}from"./minerva-web-components-e9i9Tzii.js";import{Q as r,Z as ne}from"./io5-BOy5_xXs.js";import{n as i,t as re}from"./useI18n-Brv-VDVY.js";import{t as a}from"./stylingHooks-GjssfG7q.js";import{n as o,t as s}from"./Button-BfJfx3BZ.js";import{T as c,a as l,d as ie,o as ae,s as oe,w as se}from"./icons-C9qyBhWC.js";import{n as u,t as d}from"./IconButton-EM8CzPwt.js";import{a as f,i as ce,n as le,o as ue,r as de,t as fe}from"./Dialog-RXR6JrNo.js";import{a as p,i as m,t as h}from"./Page-CAsbH9Pb.js";import{m as g,n as _,p as v,t as y}from"./DocPage-44Ak-YGP.js";import{d as b,w as x}from"./lu-CClVBj5g.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{S=`_shell_lrje7_1`,C=`_brand_lrje7_17`,w=`_brandLabel_lrje7_22`,T=`_sidebar_lrje7_25`,E=`_brandIcon_lrje7_56`,D=`_navigation_lrje7_71`,O=`_sidebarActions_lrje7_79`,k=`_workspace_lrje7_89`,A=`_header_lrje7_96`,j=`_control_lrje7_110`,M=`_headerActions_lrje7_114`,N=`_content_lrje7_124`,P=`_skipLink_lrje7_131`,F=`_overlay_lrje7_160`,I=`_drawer_lrje7_168`,L=`_drawerHeader_lrje7_195`,R=`_drawerBody_lrje7_204`,z=`_drawerClose_lrje7_211`,B={shell:S,brand:C,brandLabel:w,sidebar:T,brandIcon:E,navigation:D,sidebarActions:O,workspace:k,header:A,control:j,headerActions:M,content:N,skipLink:P,overlay:F,"fade-in":`_fade-in_lrje7_1`,drawer:I,"slide-in":`_slide-in_lrje7_1`,"slide-in-rtl":`_slide-in-rtl_lrje7_1`,drawerHeader:L,drawerBody:R,drawerClose:z}})))()}var H,U,W,G,K,pe,me,q;function J(){return(J=e((()=>{te(),i(),c(),r(),u(),f(),V(),H=t(),U=n(),W=`(max-width: 768px)`,G=()=>typeof window<`u`&&typeof window.matchMedia==`function`,K=e=>{if(!G())return()=>{};let t=window.matchMedia(W);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)},pe=()=>G()&&window.matchMedia(W).matches,me=()=>!1,q=({brand:e,brandIcon:t,navigation:n,navigationLabel:te,navigationKey:r,headerActions:i,pageNavigation:o,children:s,sidebarMode:c,defaultSidebarMode:u,onSidebarModeChange:f,labels:p,skipLink:m=!0,className:h,...g})=>{let{t:_}=re(),v={expand:p?.expand??_(`appShell.expand`),collapse:p?.collapse??_(`appShell.collapse`),enableFloating:p?.enableFloating??_(`appShell.enableFloating`),disableFloating:p?.disableFloating??_(`appShell.disableFloating`),openNavigation:p?.openNavigation??_(`appShell.openNavigation`),closeNavigation:p?.closeNavigation??_(`appShell.closeNavigation`)},y=te??_(`appShell.navigation`),[b,x]=ne({value:c,defaultValue:u??`expanded`,onChange:f,name:`AppShell`,prop:`sidebarMode`}),S=(0,H.useSyncExternalStore)(K,pe,me),[C,w]=(0,H.useState)(!1),[T,E]=(0,H.useState)(!1),[D,O]=(0,H.useState)(!1),[k,A]=(0,H.useState)({navigationKey:r,isMobile:S});(k.navigationKey!==r||k.isMobile!==S)&&(A({navigationKey:r,isMobile:S}),w(!1),k.isMobile!==S&&(E(!1),O(!1)));let j=(0,H.useRef)(null),M=(0,H.useId)(),N=(0,H.useId)(),P=(0,H.useRef)(null),F=typeof m==`string`?m:_(`appShell.skipToContent`),I=S&&C,L=(0,H.useRef)(!1);(0,H.useEffect)(()=>{!S&&L.current&&j.current?.focus()},[S]),(0,H.useEffect)(()=>{L.current=I});let R=!S&&b!==`expanded`&&(b!==`floating`||!T&&!D),z=b!==`expanded`,V={collapsed:R,isMobile:S,closeNavigation:()=>w(!1),expandNavigation:()=>x(`expanded`)},W=e=>(0,U.jsx)(d,{ref:e?j:void 0,size:`small`,shape:`square`,className:B.control,"aria-label":z?v.expand:v.collapse,"aria-controls":M,"aria-expanded":!R,onClick:()=>x(z?`expanded`:`compact`),icon:(0,U.jsx)(z?l:ie,{"aria-hidden":`true`})});return(0,U.jsxs)(ce,{open:I,onOpenChange:w,children:[(0,U.jsxs)(`div`,{className:ee(B.shell,h),"data-sidebar-mode":b,"data-sidebar-expanded":!R||void 0,...g,...a(`app-shell`,`root`,{state:I?`open`:`closed`}),children:[m!==!1&&(0,U.jsx)(`a`,{className:B.skipLink,href:`#${N}`,...a(`app-shell`,`skip-link`),onClick:e=>{e.preventDefault(),P.current?.focus()},children:F}),!S&&(0,U.jsxs)(`aside`,{id:M,className:B.sidebar,"aria-label":y,...a(`app-shell`,`sidebar`),onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1),onFocusCapture:e=>{e.target.matches(`:focus-visible`)&&O(!0)},onKeyDownCapture:e=>{e.key===`Tab`&&O(!0)},onPointerDownCapture:()=>O(!1),onBlurCapture:e=>{e.currentTarget.contains(e.relatedTarget)||O(!1)},children:[(0,U.jsxs)(`div`,{className:B.brand,children:[t&&(0,U.jsx)(`span`,{className:B.brandIcon,"aria-hidden":`true`,children:t}),(0,U.jsx)(`span`,{className:B.brandLabel,children:e})]}),(0,U.jsx)(`div`,{className:B.navigation,children:n(V)}),(0,U.jsxs)(`div`,{className:B.sidebarActions,children:[W(!1),(0,U.jsx)(d,{size:`small`,shape:`square`,className:B.control,"aria-pressed":b===`floating`,"aria-label":b===`floating`?v.disableFloating:v.enableFloating,onClick:()=>x(b===`floating`?`compact`:`floating`),icon:(0,U.jsx)(b===`floating`?oe:ae,{"aria-hidden":`true`})})]})]}),(0,U.jsxs)(`div`,{className:B.workspace,children:[(0,U.jsxs)(`header`,{className:B.header,...a(`app-shell`,`header`),children:[S?(0,U.jsx)(le,{asChild:!0,children:(0,U.jsx)(d,{ref:j,size:`small`,shape:`square`,className:B.control,"aria-label":v.openNavigation,icon:(0,U.jsx)(l,{"aria-hidden":`true`})})}):W(!0),(0,U.jsx)(`div`,{className:B.headerActions,children:i})]}),o,(0,U.jsx)(`main`,{ref:P,id:N,tabIndex:-1,className:B.content,...a(`app-shell`,`main`),children:s})]})]}),S&&(0,U.jsxs)(ue,{overlayClassName:B.overlay,overlayAttributes:a(`app-shell`,`overlay`),className:B.drawer,...a(`app-shell`,`content`),onCloseAutoFocus:e=>{e.preventDefault(),j.current?.focus()},children:[(0,U.jsx)(de,{className:B.drawerHeader,children:y}),(0,U.jsx)(`div`,{className:B.drawerBody,children:n(V)}),(0,U.jsx)(fe,{className:B.drawerClose,"aria-label":v.closeNavigation,...a(`app-shell`,`close-button`),children:(0,U.jsx)(se,{"aria-hidden":`true`})})]})]})}})))()}function he(){return(0,Y.jsx)(`div`,{style:{height:360,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,Y.jsx)(q,{brand:`Publishing Admin`,brandIcon:(0,Y.jsx)(b,{}),navigationLabel:`Workspace navigation`,style:{minHeight:`100%`},headerActions:(0,Y.jsx)(o,{size:`small`,children:`Account`}),navigation:({collapsed:e,closeNavigation:t})=>(0,Y.jsx)(`nav`,{children:ge.map(n=>(0,Y.jsx)(`a`,{href:`#${n.toLowerCase()}`,title:n,onClick:t,style:{display:`block`,padding:`6px 8px`},children:e?n[0]:n},n))}),children:(0,Y.jsx)(h,{children:(0,Y.jsx)(p,{title:`Dashboard`,description:`Main content area`})})})})}var Y,ge;function _e(){return(_e=e((()=>{J(),s(),m(),x(),Y=n(),ge=[`Dashboard`,`Books`,`Reviews`,`Settings`]})))()}function ve(){let[e,t]=(0,ye.useState)(`floating`);return(0,X.jsx)(`div`,{style:{height:300,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,X.jsx)(q,{brand:`Admin`,sidebarMode:e,onSidebarModeChange:t,style:{minHeight:`100%`},navigation:({collapsed:e})=>(0,X.jsx)(`nav`,{children:e?`…`:`Navigation`}),children:(0,X.jsxs)(`p`,{style:{padding:24,margin:0},children:[`Sidebar mode: `,e]})})})}var ye,X;function be(){return(be=e((()=>{ye=t(),J(),X=n()})))()}function xe(){return(0,Z.jsx)(`div`,{style:{height:320,overflow:`auto`,transform:`translateZ(0)`,width:`100%`},children:(0,Z.jsx)(q,{brand:`Publishing Admin`,brandIcon:(0,Z.jsx)(b,{}),skipLink:`Skip to the book list`,style:{minHeight:`100%`},headerActions:(0,Z.jsx)(o,{size:`small`,children:`Account`}),navigation:({collapsed:e})=>(0,Z.jsx)(`nav`,{children:Se.map(t=>(0,Z.jsx)(`a`,{href:`#${t.toLowerCase()}`,title:t,style:{display:`block`,padding:`6px 8px`},children:e?t[0]:t},t))}),children:(0,Z.jsxs)(h,{children:[(0,Z.jsx)(p,{title:`Books`,description:`Focus the frame and press Tab: the skip link appears first`}),(0,Z.jsx)(o,{size:`small`,children:`First action of the content`})]})})})}var Z,Se;function Ce(){return(Ce=e((()=>{J(),s(),m(),x(),Z=n(),Se=[`Dashboard`,`Books`,`Reviews`,`Settings`]})))()}var we;function Q(){return(Q=e((()=>{we=`import { AppShell, Button, Page, PageHeader } from "@minerva/lib-core";
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
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`import { useState } from "react";
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
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`import { AppShell, Button, Page, PageHeader } from "@minerva/lib-core";
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
`})))()}var ke,Ae,je;function $(){return($=e((()=>{_e(),be(),Ce(),Q(),Ee(),Oe(),t(),_(),g(),ke=n(),Ae=v(Object.assign({"./demos/basic.tsx":he,"./demos/controlled.tsx":ve,"./demos/skip-link.tsx":xe}),Object.assign({"./demos/basic.tsx":we,"./demos/controlled.tsx":Te,"./demos/skip-link.tsx":De})),je=()=>(0,ke.jsx)(y,{id:`app-shell`,demos:Ae})})))()}$();export{je as default};