import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,o as i,tt as a,vt as o}from"./minerva-web-components-ByJsjP0z.js";import{m as s,n as c,p as l,t as u}from"./DocPage-CVA4UCUb.js";import{Q as d,Y as f,Z as p,et as m,tt as h}from"./io5-BO4aBax7.js";import{t as g}from"./stylingHooks-GjssfG7q.js";import{n as _,t as v}from"./Button-DoMjJPcZ.js";import{n as y,t as b}from"./Slot-BkGCus0Y.js";import{a as ee,c as te,i as x,n as ne,o as re,r as ie,s as S,t as ae}from"./useFocusScope-CcExWoOG.js";import{a as oe,i as C,r as se,t as w}from"./direction-BB7i66oX.js";import{n as ce,r as le,t as ue}from"./tabbing-nh1t7Piu.js";import{a as T,i as E,n as de,o as fe,r as pe,t as D}from"./useScrollLock-ZXBx-Jv0.js";var O,k,A,j,M;function N(){return(N=e((()=>{O=`_positioner_13juh_1`,k=`_content_13juh_5`,A=`_arrowWrapper_13juh_23`,j=`_arrow_13juh_23`,M={positioner:O,content:k,"popover-fade-in":`_popover-fade-in_13juh_1`,"popover-fade-out":`_popover-fade-out_13juh_1`,arrowWrapper:A,arrow:j}})))()}var P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{o(),m(),d(),b(),S(),C(),x(),ae(),w(),ue(),T(),E(),D(),N(),P=t(),F=n(),I=10,L=5,R=(0,P.createContext)(null),z=e=>{let t=(0,P.useContext)(R);if(!t)throw Error(`<${e}> must be used inside <Popover>`);return t},B=({open:e,defaultOpen:t,onOpenChange:n,modal:r=!1,children:i})=>{let[a,o]=p({value:e,defaultValue:t??!1,onChange:n,name:`Popover`,prop:`open`}),s=(0,P.useId)(),[c,l]=(0,P.useState)(null),[u,d]=(0,P.useState)(null),f=(0,P.useMemo)(()=>({open:a,setOpen:o,modal:r,contentId:s,trigger:c,setTrigger:l,anchor:u,setAnchor:d}),[a,o,r,s,c,u]);return(0,F.jsx)(R.Provider,{value:f,children:i})},V=({asChild:e=!1,onClick:t,ref:n,...r})=>{let{open:i,setOpen:a,contentId:o,setTrigger:s}=z(`PopoverTrigger`),c=h(s,n),l={"aria-haspopup":`dialog`,"aria-expanded":i,"aria-controls":i?o:void 0,...r,...e?void 0:g(`popover`,`trigger`,{state:i?`open`:`closed`}),onClick:f(t,()=>a(!i))};return e?(0,F.jsx)(y,{ref:c,...l}):(0,F.jsx)(`button`,{type:`button`,ref:c,...l})},H=({asChild:e=!1,ref:t,...n})=>{let{setAnchor:r}=z(`PopoverAnchor`),i=h(r,t);return(0,F.jsx)(e?y:`div`,{ref:i,...n})},U=({asChild:e=!1,onClick:t,...n})=>{let{setOpen:r}=z(`PopoverClose`),i={...n,onClick:f(t,()=>r(!1))};return e?(0,F.jsx)(y,{...i}):(0,F.jsx)(`button`,{type:`button`,...i})},W={transform:`translate(0, -200%)`},G=({ref:e,className:t,style:n,children:o,side:s=`bottom`,align:c=`center`,sideOffset:l=6,alignOffset:u=0,collisionPadding:d=8,matchAnchorWidth:p=!1,arrow:m=!1,portal:_=!0,forceMount:v=!1,onOpenAutoFocus:y,onCloseAutoFocus:b,onEscapeKeyDown:x,onPointerDownOutside:S,onFocusOutside:ae,onInteractOutside:C,onKeyDown:w,...ue})=>{let{open:T,setOpen:E,modal:D,contentId:O,trigger:k,anchor:A}=z(`PopoverContent`),j=ee(),[N,R]=(0,P.useState)(null),[B,V]=(0,P.useState)(null),H=pe(T,N),U=T&&!!N,{setFloating:G,floatingStyles:K,placement:q,arrowStyles:J,isPositioned:Y}=oe({open:H,anchor:A??k,placement:a(s,c),offset:{mainAxis:l+(m?L:0),crossAxis:u},matchAnchorWidth:p,padding:d,arrowElement:m?B:null}),me=h(R,e),X=se(N,A??k,T),Z=r(q);re(N,{enabled:U,disableOutsidePointerEvents:D,branches:()=>[k],onEscapeKeyDown:x,onPointerDownOutside:S,onFocusOutside:e=>{ae?.(e),D&&e.preventDefault()},onInteractOutside:C,onDismiss:()=>E(!1)}),ne(N,{enabled:U,trapped:D,loop:D,restoreFocus:()=>k,onMountAutoFocus:y,onUnmountAutoFocus:b}),de(U&&D),fe(N,U&&D);let Q=e=>{if(D||!N||!k||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey)return;let t=e.shiftKey;if(!ce(N,e.target,t))return;e.preventDefault();let n=j??k.ownerDocument.body;(le(k,n,t)??k).focus(),E(!1)};if(!H&&!v)return null;let he=T?`open`:`closed`,$=(0,F.jsx)(`div`,{ref:G,className:M.positioner,style:Y?K:{...K,...W},"data-side":Z.side,"data-align":Z.align,children:(0,F.jsx)(ie.Provider,{value:N,children:(0,F.jsxs)(`div`,{ref:me,id:O,role:`dialog`,"aria-modal":D||void 0,tabIndex:-1,dir:X,className:i(M.content,t),style:n,...ue,...g(`popover`,`content`,{state:he,side:Z.side,align:Z.align,placement:q}),onKeyDown:f(w,Q),children:[o,m&&(0,F.jsx)(`span`,{ref:V,className:M.arrowWrapper,style:J,"aria-hidden":`true`,...g(`popover`,`arrow`),children:(0,F.jsx)(`svg`,{className:M.arrow,width:I,height:L,viewBox:`0 0 30 10`,preserveAspectRatio:`none`,children:(0,F.jsx)(`polygon`,{points:`0,0 30,0 15,10`})})})]})})});return _?(0,F.jsx)(te,{children:$}):$}})))()}function q(){return(0,J.jsxs)(B,{children:[(0,J.jsx)(V,{asChild:!0,children:(0,J.jsx)(_,{color:`neutral`,variant:`outline`,children:`Filter`})}),(0,J.jsxs)(G,{"aria-label":`Filters`,arrow:!0,children:[(0,J.jsxs)(`label`,{style:{display:`block`},children:[(0,J.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Read`]}),(0,J.jsxs)(`label`,{style:{display:`block`},children:[(0,J.jsx)(`input`,{type:`checkbox`}),` Unread`]}),(0,J.jsx)(U,{asChild:!0,children:(0,J.jsx)(_,{size:`small`,children:`Apply`})})]})]})}var J;function Y(){return(Y=e((()=>{v(),K(),J=n()})))()}function me(){let[e,t]=(0,X.useState)(!1);return(0,Z.jsxs)(B,{open:e,onOpenChange:t,children:[(0,Z.jsx)(H,{asChild:!0,children:(0,Z.jsx)(`div`,{style:{display:`inline-flex`,gap:8,padding:8,border:`1px dashed`},children:(0,Z.jsx)(V,{asChild:!0,children:(0,Z.jsxs)(_,{children:[e?`Close`:`Open`,` account menu`]})})})}),(0,Z.jsx)(G,{align:`end`,"aria-label":`Account`,children:`Signed in as reader@example.com`})]})}var X,Z;function Q(){return(Q=e((()=>{X=t(),v(),K(),Z=n()})))()}function he(){return(0,$.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:ge.map(e=>(0,$.jsxs)(B,{children:[(0,$.jsx)(V,{asChild:!0,children:(0,$.jsx)(_,{color:`neutral`,variant:`outline`,children:e})}),(0,$.jsxs)(G,{side:e,align:`start`,sideOffset:10,arrow:!0,children:[`Placed on the `,e,`, aligned to the start.`]})]},e))})}var $,ge;function _e(){return(_e=e((()=>{v(),K(),$=n(),ge=[`top`,`right`,`bottom`,`left`]})))()}var ve;function ye(){return(ye=e((()=>{ve=`import {
  Button,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "minerva-design";

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
} from "minerva-design";

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
} from "minerva-design";

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
`})))()}var we,Te,Ee;function De(){return(De=e((()=>{Y(),Q(),_e(),ye(),xe(),Ce(),t(),c(),s(),we=n(),Te=l(Object.assign({"./demos/basic.tsx":q,"./demos/controlled.tsx":me,"./demos/placement.tsx":he}),Object.assign({"./demos/basic.tsx":ve,"./demos/controlled.tsx":be,"./demos/placement.tsx":Se})),Ee=()=>(0,we.jsx)(u,{id:`popover`,demos:Te})})))()}De();export{Ee as default};