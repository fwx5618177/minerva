import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{Dt as r,W as i,ot as a}from"./minerva-web-components-BCL_6rcP.js";import{C as o,D as s,E as c,O as l,_ as u,b as d,c as f,k as p,n as ee,s as m,t as h,w as g,x as _}from"./DocPage-HgWiqH91.js";import{n as v,t as y}from"./Button-CwqLLYn6.js";import{n as b,t as x}from"./Slot-CZmJE3VD.js";import{a as te,c as ne,i as S,n as re,o as ie,r as ae,s as C,t as oe}from"./useFocusScope-aglc55tz.js";import{n as se,t as ce}from"./useAnchoredPosition-DWgvGmft.js";import{n as le,r as ue,t as w}from"./tabbing-KfxVZe50.js";import{a as T,i as E,n as de,o as fe,r as pe,t as D}from"./useScrollLock-BpjMdnPM.js";var O,k,A,j,M;function N(){return(N=e((()=>{O=`_positioner_13juh_1`,k=`_content_13juh_5`,A=`_arrowWrapper_13juh_23`,j=`_arrow_13juh_23`,M={positioner:O,content:k,"popover-fade-in":`_popover-fade-in_13juh_1`,"popover-fade-out":`_popover-fade-out_13juh_1`,arrowWrapper:A,arrow:j}})))()}var P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{l(),c(),g(),x(),C(),ce(),S(),oe(),u(),w(),T(),E(),D(),N(),P=t(),r(),F=n(),I=10,L=5,R=(0,P.createContext)(null),z=e=>{let t=(0,P.useContext)(R);if(!t)throw Error(`<${e}> must be used inside <Popover>`);return t},B=({open:e,defaultOpen:t,onOpenChange:n,modal:r=!1,children:i})=>{let[a,s]=o({value:e,defaultValue:t??!1,onChange:n,name:`Popover`,prop:`open`}),c=(0,P.useId)(),[l,u]=(0,P.useState)(null),[d,f]=(0,P.useState)(null),p=(0,P.useMemo)(()=>({open:a,setOpen:s,modal:r,contentId:c,trigger:l,setTrigger:u,anchor:d,setAnchor:f}),[a,s,r,c,l,d]);return(0,F.jsx)(R.Provider,{value:p,children:i})},V=({asChild:e=!1,onClick:t,ref:n,...r})=>{let{open:i,setOpen:a,contentId:o,setTrigger:c}=z(`PopoverTrigger`),l=s(c,n),u={"aria-haspopup":`dialog`,"aria-expanded":i,"aria-controls":i?o:void 0,"data-state":i?`open`:`closed`,...r,onClick:_(t,()=>a(!i))};return e?(0,F.jsx)(b,{ref:l,...u}):(0,F.jsx)(`button`,{type:`button`,ref:l,...u})},H=({asChild:e=!1,ref:t,...n})=>{let{setAnchor:r}=z(`PopoverAnchor`),i=s(r,t);return(0,F.jsx)(e?b:`div`,{ref:i,...n})},U=({asChild:e=!1,onClick:t,...n})=>{let{setOpen:r}=z(`PopoverClose`),i={...n,onClick:_(t,()=>r(!1))};return e?(0,F.jsx)(b,{...i}):(0,F.jsx)(`button`,{type:`button`,...i})},W={transform:`translate(0, -200%)`},G=({ref:e,className:t,style:n,children:r,side:o=`bottom`,align:c=`center`,sideOffset:l=6,alignOffset:u=0,collisionPadding:f=8,matchAnchorWidth:ee=!1,arrow:m=!1,portal:h=!0,forceMount:g=!1,onOpenAutoFocus:v,onCloseAutoFocus:y,onEscapeKeyDown:b,onPointerDownOutside:x,onFocusOutside:S,onInteractOutside:C,onKeyDown:oe,...ce})=>{let{open:w,setOpen:T,modal:E,contentId:D,trigger:O,anchor:k}=z(`PopoverContent`),A=te(),[j,N]=(0,P.useState)(null),[R,B]=(0,P.useState)(null),V=pe(w,j),H=w&&!!j,{setFloating:U,floatingStyles:G,placement:K,arrowStyles:me,isPositioned:q}=se({open:V,anchor:k??O,placement:a(o,c),offset:{mainAxis:l+(m?L:0),crossAxis:u},matchAnchorWidth:ee,padding:f,arrowElement:m?R:null}),J=s(N,e),he=d(j,k??O,w),Y=i(K);ie(j,{enabled:H,disableOutsidePointerEvents:E,branches:()=>[O],onEscapeKeyDown:b,onPointerDownOutside:x,onFocusOutside:e=>{S?.(e),E&&e.preventDefault()},onInteractOutside:C,onDismiss:()=>T(!1)}),re(j,{enabled:H,trapped:E,loop:E,restoreFocus:()=>O,onMountAutoFocus:v,onUnmountAutoFocus:y}),de(H&&E),fe(j,H&&E);let X=e=>{if(E||!j||!O||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey)return;let t=e.shiftKey;if(!le(j,e.target,t))return;e.preventDefault();let n=A??O.ownerDocument.body;(ue(O,n,t)??O).focus(),T(!1)};if(!V&&!g)return null;let Z=w?`open`:`closed`,Q=(0,F.jsx)(`div`,{ref:U,className:M.positioner,style:q?G:{...G,...W},"data-side":Y.side,"data-align":Y.align,children:(0,F.jsx)(ae.Provider,{value:j,children:(0,F.jsxs)(`div`,{ref:J,id:D,role:`dialog`,"aria-modal":E||void 0,tabIndex:-1,dir:he,"data-state":Z,"data-side":Y.side,"data-align":Y.align,className:p(M.content,t),style:n,...ce,onKeyDown:_(oe,X),children:[r,m&&(0,F.jsx)(`span`,{ref:B,className:M.arrowWrapper,style:me,"aria-hidden":`true`,children:(0,F.jsx)(`svg`,{className:M.arrow,width:I,height:L,viewBox:`0 0 30 10`,preserveAspectRatio:`none`,children:(0,F.jsx)(`polygon`,{points:`0,0 30,0 15,10`})})})]})})});return h?(0,F.jsx)(ne,{children:Q}):Q}})))()}function me(){return(0,q.jsxs)(B,{children:[(0,q.jsx)(V,{asChild:!0,children:(0,q.jsx)(y,{color:`neutral`,variant:`outline`,children:`Filter`})}),(0,q.jsxs)(G,{"aria-label":`Filters`,arrow:!0,children:[(0,q.jsxs)(`label`,{style:{display:`block`},children:[(0,q.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Read`]}),(0,q.jsxs)(`label`,{style:{display:`block`},children:[(0,q.jsx)(`input`,{type:`checkbox`}),` Unread`]}),(0,q.jsx)(U,{asChild:!0,children:(0,q.jsx)(y,{size:`small`,children:`Apply`})})]})]})}var q;function J(){return(J=e((()=>{v(),K(),q=n()})))()}function he(){let[e,t]=(0,Y.useState)(!1);return(0,X.jsxs)(B,{open:e,onOpenChange:t,children:[(0,X.jsx)(H,{asChild:!0,children:(0,X.jsx)(`div`,{style:{display:`inline-flex`,gap:8,padding:8,border:`1px dashed`},children:(0,X.jsx)(V,{asChild:!0,children:(0,X.jsxs)(y,{children:[e?`Close`:`Open`,` account menu`]})})})}),(0,X.jsx)(G,{align:`end`,"aria-label":`Account`,children:`Signed in as reader@example.com`})]})}var Y,X;function Z(){return(Z=e((()=>{Y=t(),v(),K(),X=n()})))()}function Q(){return(0,$.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:ge.map(e=>(0,$.jsxs)(B,{children:[(0,$.jsx)(V,{asChild:!0,children:(0,$.jsx)(y,{color:`neutral`,variant:`outline`,children:e})}),(0,$.jsxs)(G,{side:e,align:`start`,sideOffset:10,arrow:!0,children:[`Placed on the `,e,`, aligned to the start.`]})]},e))})}var $,ge;function _e(){return(_e=e((()=>{v(),K(),$=n(),ge=[`top`,`right`,`bottom`,`left`]})))()}var ve;function ye(){return(ye=e((()=>{ve=`import {
  Button,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button color="neutral" variant="outline">
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent aria-label="Filters" arrow>
        <label style={{ display: "block" }}>
          <input type="checkbox" defaultChecked /> Read
        </label>
        <label style={{ display: "block" }}>
          <input type="checkbox" /> Unread
        </label>
        <PopoverClose asChild>
          <Button size="small">Apply</Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
`})))()}var be;function xe(){return(xe=e((()=>{be=`import { useState } from "react";
import {
  Button,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@minerva/lib-core";

export default function ControlledDemo() {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor asChild>
        <div
          style={{
            display: "inline-flex",
            gap: 8,
            padding: 8,
            border: "1px dashed",
          }}
        >
          <PopoverTrigger asChild>
            <Button>{open ? "Close" : "Open"} account menu</Button>
          </PopoverTrigger>
        </div>
      </PopoverAnchor>
      <PopoverContent align="end" aria-label="Account">
        Signed in as reader@example.com
      </PopoverContent>
    </Popover>
  );
}
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  type PopoverSide,
} from "@minerva/lib-core";

const SIDES: PopoverSide[] = ["top", "right", "bottom", "left"];

export default function PlacementDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {SIDES.map((side) => (
        <Popover key={side}>
          <PopoverTrigger asChild>
            <Button color="neutral" variant="outline">
              {side}
            </Button>
          </PopoverTrigger>
          <PopoverContent side={side} align="start" sideOffset={10} arrow>
            Placed on the {side}, aligned to the start.
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
`})))()}var we,Te,Ee;function De(){return(De=e((()=>{J(),Z(),_e(),ye(),xe(),Ce(),t(),ee(),f(),we=n(),Te=m(Object.assign({"./demos/basic.tsx":me,"./demos/controlled.tsx":he,"./demos/placement.tsx":Q}),Object.assign({"./demos/basic.tsx":ve,"./demos/controlled.tsx":be,"./demos/placement.tsx":Se})),Ee=()=>(0,we.jsx)(h,{id:`popover`,demos:Te})})))()}De();export{Ee as default};