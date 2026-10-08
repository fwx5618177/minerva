import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{Ot as r,T as i,en as a,h as o,n as s}from"./minerva-web-components-gmidRbuG.js";import{m as c,n as l,p as u,t as d}from"./DocPage-OkRujup2.js";import{Q as f,Y as p,Z as m,et as h,tt as g}from"./io5-CFVaALQJ.js";import{t as _}from"./stylingHooks-GjssfG7q.js";import{n as v,t as y}from"./Button-BJTVw8sA.js";import{n as b,t as ee}from"./Slot-uSB1_F29.js";import{a as te,c as ne,i as re,n as ie,o as ae,r as oe,s as se,t as x}from"./useFocusScope-ryn0QnOL.js";import{a as ce,i as S,r as le,t as ue}from"./direction-DP7if3Ff.js";import{n as de,r as fe,t as C}from"./tabbing-BANIAeP0.js";import{a as w,i as T,n as pe,o as me,r as he,t as E}from"./useScrollLock-Ve3-y-iH.js";var D,O,k,A,j;function M(){return(M=e((()=>{D=`_positioner_13juh_1`,O=`_content_13juh_5`,k=`_arrowWrapper_13juh_23`,A=`_arrow_13juh_23`,j={positioner:D,content:O,"popover-fade-in":`_popover-fade-in_13juh_1`,"popover-fade-out":`_popover-fade-out_13juh_1`,arrowWrapper:k,arrow:A}})))()}var N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{r(),h(),f(),ee(),se(),S(),re(),x(),ue(),C(),w(),T(),E(),M(),N=t(),P=n(),i(),F=10,I=5,L=(0,N.createContext)(null),R=e=>{let t=(0,N.useContext)(L);if(!t)throw Error(`<${e}> must be used inside <Popover>`);return t},z=({open:e,defaultOpen:t,onOpenChange:n,modal:r=!1,children:i})=>{let[a,o]=m({value:e,defaultValue:t??!1,onChange:n,name:`Popover`,prop:`open`}),s=(0,N.useId)(),[c,l]=(0,N.useState)(null),[u,d]=(0,N.useState)(null),f=(0,N.useMemo)(()=>({open:a,setOpen:o,modal:r,contentId:s,trigger:c,setTrigger:l,anchor:u,setAnchor:d}),[a,o,r,s,c,u]);return(0,P.jsx)(L.Provider,{value:f,children:i})},B=({asChild:e=!1,onClick:t,ref:n,...r})=>{let{open:i,setOpen:a,contentId:o,setTrigger:s}=R(`PopoverTrigger`),c=g(s,n),l={"aria-haspopup":`dialog`,"aria-expanded":i,"aria-controls":i?o:void 0,...r,...e?void 0:_(`popover`,`trigger`,{state:i?`open`:`closed`}),onClick:p(t,()=>a(!i))};return e?(0,P.jsx)(b,{ref:c,...l}):(0,P.jsx)(`button`,{type:`button`,ref:c,...l})},V=({asChild:e=!1,ref:t,...n})=>{let{setAnchor:r}=R(`PopoverAnchor`),i=g(r,t);return(0,P.jsx)(e?b:`div`,{ref:i,...n})},H=({asChild:e=!1,onClick:t,...n})=>{let{setOpen:r}=R(`PopoverClose`),i={...n,onClick:p(t,()=>r(!1))};return e?(0,P.jsx)(b,{...i}):(0,P.jsx)(`button`,{type:`button`,...i})},U={transform:`translate(0, -200%)`},W=({ref:e,className:t,style:n,children:r,side:i=`bottom`,align:c=`center`,sideOffset:l=6,alignOffset:u=0,collisionPadding:d=8,matchAnchorWidth:f=!1,arrow:m=!1,portal:h=!0,forceMount:v=!1,onOpenAutoFocus:y,onCloseAutoFocus:b,onEscapeKeyDown:ee,onPointerDownOutside:re,onFocusOutside:se,onInteractOutside:x,onKeyDown:S,...ue})=>{let{open:C,setOpen:w,modal:T,contentId:E,trigger:D,anchor:O}=R(`PopoverContent`),k=te(),[A,M]=(0,N.useState)(null),[L,z]=(0,N.useState)(null),B=he(C,A),V=C&&!!A,{setFloating:H,floatingStyles:W,placement:G,arrowStyles:ge,isPositioned:K}=ce({open:B,anchor:O??D,placement:o(i,c),offset:{mainAxis:l+(m?I:0),crossAxis:u},matchAnchorWidth:f,padding:d,arrowElement:m?L:null}),q=g(M,e),_e=le(A,O??D,C),J=s(G);ae(A,{enabled:V,disableOutsidePointerEvents:T,branches:()=>[D],onEscapeKeyDown:ee,onPointerDownOutside:re,onFocusOutside:e=>{se?.(e),T&&e.preventDefault()},onInteractOutside:x,onDismiss:()=>w(!1)}),ie(A,{enabled:V,trapped:T,loop:T,restoreFocus:()=>D,onMountAutoFocus:y,onUnmountAutoFocus:b}),pe(V&&T),me(A,V&&T);let Y=e=>{if(T||!A||!D||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey)return;let t=e.shiftKey;if(!de(A,e.target,t))return;e.preventDefault();let n=k??D.ownerDocument.body;(fe(D,n,t)??D).focus(),w(!1)};if(!B&&!v)return null;let X=C?`open`:`closed`,Z=(0,P.jsx)(`div`,{ref:H,className:j.positioner,style:K?W:{...W,...U},"data-side":J.side,"data-align":J.align,children:(0,P.jsx)(oe.Provider,{value:A,children:(0,P.jsxs)(`div`,{ref:q,id:E,role:`dialog`,"aria-modal":T||void 0,tabIndex:-1,dir:_e,className:a(j.content,t),style:n,...ue,..._(`popover`,`content`,{state:X,side:J.side,align:J.align,placement:G}),onKeyDown:p(S,Y),children:[r,m&&(0,P.jsx)(`span`,{ref:z,className:j.arrowWrapper,style:ge,"aria-hidden":`true`,..._(`popover`,`arrow`),children:(0,P.jsx)(`svg`,{className:j.arrow,width:F,height:I,viewBox:`0 0 30 10`,preserveAspectRatio:`none`,children:(0,P.jsx)(`polygon`,{points:`0,0 30,0 15,10`})})})]})})});return h?(0,P.jsx)(ne,{children:Z}):Z}})))()}function ge(){return(0,K.jsxs)(z,{children:[(0,K.jsx)(B,{asChild:!0,children:(0,K.jsx)(v,{color:`neutral`,variant:`outline`,children:`Filter`})}),(0,K.jsxs)(W,{"aria-label":`Filters`,arrow:!0,children:[(0,K.jsxs)(`label`,{style:{display:`block`},children:[(0,K.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` Read`]}),(0,K.jsxs)(`label`,{style:{display:`block`},children:[(0,K.jsx)(`input`,{type:`checkbox`}),` Unread`]}),(0,K.jsx)(H,{asChild:!0,children:(0,K.jsx)(v,{size:`small`,children:`Apply`})})]})]})}var K;function q(){return(q=e((()=>{y(),G(),K=n()})))()}function _e(){let[e,t]=(0,J.useState)(!1);return(0,Y.jsxs)(z,{open:e,onOpenChange:t,children:[(0,Y.jsx)(V,{asChild:!0,children:(0,Y.jsx)(`div`,{style:{display:`inline-flex`,gap:8,padding:8,border:`1px dashed`},children:(0,Y.jsx)(B,{asChild:!0,children:(0,Y.jsxs)(v,{children:[e?`Close`:`Open`,` account menu`]})})})}),(0,Y.jsx)(W,{align:`end`,"aria-label":`Account`,children:`Signed in as reader@example.com`})]})}var J,Y;function X(){return(X=e((()=>{J=t(),y(),G(),Y=n()})))()}function Z(){return(0,Q.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:ve.map(e=>(0,Q.jsxs)(z,{children:[(0,Q.jsx)(B,{asChild:!0,children:(0,Q.jsx)(v,{color:`neutral`,variant:`outline`,children:e})}),(0,Q.jsxs)(W,{side:e,align:`start`,sideOffset:10,arrow:!0,children:[`Placed on the `,e,`, aligned to the start.`]})]},e))})}var Q,ve;function ye(){return(ye=e((()=>{y(),G(),Q=n(),ve=[`top`,`right`,`bottom`,`left`]})))()}var be;function xe(){return(xe=e((()=>{be=`import {
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
`})))()}var $;function Se(){return(Se=e((()=>{$=`import { useState } from "react";
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
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`import {
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
`})))()}var Te,Ee,De;function Oe(){return(Oe=e((()=>{q(),X(),ye(),xe(),Se(),we(),t(),l(),c(),Te=n(),Ee=u(Object.assign({"./demos/basic.tsx":ge,"./demos/controlled.tsx":_e,"./demos/placement.tsx":Z}),Object.assign({"./demos/basic.tsx":be,"./demos/controlled.tsx":$,"./demos/placement.tsx":Ce})),De=()=>(0,Te.jsx)(d,{id:`popover`,demos:Ee})})))()}Oe();export{De as default};