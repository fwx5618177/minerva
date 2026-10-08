import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{n as r,t as i}from"./Badge-D03sAsrR.js";import{n as a,r as ee,t as o}from"./Stack-BKDv4gra.js";import{c as te,n as ne,s as re,t as ie}from"./DocPage-BeqNKFhE.js";import{a as ae,f as oe,g as s,m as c,r as l,s as se}from"./fa-BpzsXjlQ.js";function ce(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{content:5,"aria-label":`5 unread notifications`,children:(0,u.jsx)(l,{size:24,"aria-label":`Notifications`})}),(0,u.jsx)(r,{content:`99+`,"aria-label":`More than 99 messages`,children:(0,u.jsx)(se,{size:24,"aria-label":`Messages`})}),(0,u.jsxs)(`span`,{children:[`Inbox `,(0,u.jsx)(r,{content:12,color:`info`,"aria-label":`12 unread`}),` and changelog `,(0,u.jsx)(r,{color:`success`,children:`New`})]})]})}var u;function d(){return(d=e((()=>{i(),s(),u=n()})))()}function le(){return(0,f.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:24},children:p.map((e,t)=>(0,f.jsx)(r,{color:e,content:t+1,"aria-label":`${e} badge`,children:(0,f.jsx)(l,{size:24,title:e})},e))})}var f,p;function m(){return(m=e((()=>{i(),s(),f=n(),p=[`primary`,`neutral`,`success`,`warning`,`danger`,`info`]})))()}function ue(){return(0,h.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,h.jsx)(r,{content:1,borderRadius:`12px`,style:g,children:(0,h.jsx)(l,{size:24})}),(0,h.jsx)(r,{content:2,variant:`outline`,borderWidth:`2px`,style:_,children:(0,h.jsx)(l,{size:24})})]})}var h,g,_;function v(){return(v=e((()=>{i(),s(),h=n(),g={"--badge-bg":`#7c3aed`,"--badge-fg":`#ffffff`},_={"--badge-fg":`#e65100`,"--badge-border":`#e65100`}})))()}function de(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r,{dot:!0,color:`primary`,"aria-label":`New activity`,children:(0,y.jsx)(l,{size:24})}),(0,y.jsx)(r,{dot:!0,color:`success`,"aria-label":`Online`,children:(0,y.jsx)(l,{size:24})}),(0,y.jsx)(r,{dot:!0,color:`danger`,"aria-label":`Danger`,children:(0,y.jsx)(l,{size:24})})]})}var y;function b(){return(b=e((()=>{i(),s(),y=n()})))()}function fe(){return(0,x.jsx)(`div`,{style:{display:`flex`,gap:32},children:S.map((e,t)=>(0,x.jsx)(r,{position:e,content:t+1,children:(0,x.jsx)(l,{size:24})},e))})}var x,S;function C(){return(C=e((()=>{i(),s(),x=n(),S=[`top-right`,`top-left`,`bottom-right`,`bottom-left`]})))()}function pe(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(r,{size:`small`,content:`S`,children:(0,w.jsx)(l,{size:24})}),(0,w.jsx)(r,{size:`medium`,content:`M`,children:(0,w.jsx)(l,{size:24})}),(0,w.jsx)(r,{size:`large`,content:`L`,children:(0,w.jsx)(l,{size:24})})]})}var w;function T(){return(T=e((()=>{i(),s(),w=n()})))()}function me(){return(0,E.jsx)(o,{gap:4,wrap:!0,children:D.map(({color:e,label:t})=>(0,E.jsxs)(o,{gap:2,align:`center`,children:[(0,E.jsx)(r,{dot:!0,color:e,role:`presentation`}),(0,E.jsx)(`span`,{children:t})]},t))})}var E,D;function O(){return(O=e((()=>{i(),a(),E=n(),D=[{color:`success`,label:`Online`},{color:`warning`,label:`Away`},{color:`danger`,label:`Busy`},{color:`neutral`,label:`Offline`}]})))()}function he(){return(0,k.jsx)(ee,{gap:3,children:A.map(e=>(0,k.jsx)(o,{gap:2,wrap:!0,children:j.map(t=>(0,k.jsxs)(r,{variant:e,color:t,children:[e,` `,t]},t))},e))})}var k,A,j;function ge(){return(ge=e((()=>{i(),a(),k=n(),A=[`solid`,`subtle`,`outline`],j=[`primary`,`neutral`,`success`,`warning`,`danger`,`info`]})))()}function _e(){return(0,M.jsxs)(`div`,{style:{display:`flex`,gap:48},children:[(0,M.jsx)(r,{color:`success`,icon:(0,M.jsx)(ae,{}),content:`OK`,"aria-label":`Verified`,children:(0,M.jsx)(c,{size:24})}),(0,M.jsx)(r,{color:`warning`,icon:(0,M.jsx)(oe,{}),content:`Top`,"aria-label":`Top rated`,children:(0,M.jsx)(c,{size:24})})]})}var M;function N(){return(N=e((()=>{i(),s(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { Badge } from "@minerva/lib-core";
import { FaBell, FaEnvelope } from "react-icons/fa";

export default function BasicDemo() {
  return (
    <>
      <Badge content={5} aria-label="5 unread notifications">
        <FaBell size={24} aria-label="Notifications" />
      </Badge>
      <Badge content="99+" aria-label="More than 99 messages">
        <FaEnvelope size={24} aria-label="Messages" />
      </Badge>
      <span>
        Inbox <Badge content={12} color="info" aria-label="12 unread" /> and
        changelog <Badge color="success">New</Badge>
      </span>
    </>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { Badge } from "@minerva/lib-core";
import { FaBell } from "react-icons/fa";

const colors = [
  "primary",
  "neutral",
  "success",
  "warning",
  "danger",
  "info",
] as const;

export default function ColorsDemo() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
      {colors.map((color, index) => (
        <Badge
          key={color}
          color={color}
          content={index + 1}
          aria-label={\`\${color} badge\`}
        >
          <FaBell size={24} title={color} />
        </Badge>
      ))}
    </div>
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import type { CSSProperties } from "react";
import { Badge } from "@minerva/lib-core";
import { FaBell } from "react-icons/fa";

// --badge-bg, --badge-fg and --badge-border override the theme colors; they
// can also be set from a stylesheet, for a single badge or a whole subtree.
const brand = {
  "--badge-bg": "#7c3aed",
  "--badge-fg": "#ffffff",
} as CSSProperties;

const outlined = {
  "--badge-fg": "#e65100",
  "--badge-border": "#e65100",
} as CSSProperties;

export default function CustomStyleDemo() {
  return (
    <div style={{ display: "flex", gap: 24 }}>
      <Badge content={1} borderRadius="12px" style={brand}>
        <FaBell size={24} />
      </Badge>
      <Badge content={2} variant="outline" borderWidth="2px" style={outlined}>
        <FaBell size={24} />
      </Badge>
    </div>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { Badge } from "@minerva/lib-core";
import { FaBell } from "react-icons/fa";

export default function DotDemo() {
  return (
    <>
      <Badge dot color="primary" aria-label="New activity">
        <FaBell size={24} />
      </Badge>
      <Badge dot color="success" aria-label="Online">
        <FaBell size={24} />
      </Badge>
      <Badge dot color="danger" aria-label="Danger">
        <FaBell size={24} />
      </Badge>
    </>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { Badge } from "@minerva/lib-core";
import { FaBell } from "react-icons/fa";

const positions = [
  "top-right",
  "top-left",
  "bottom-right",
  "bottom-left",
] as const;

export default function PositionsDemo() {
  return (
    <div style={{ display: "flex", gap: 32 }}>
      {positions.map((position, index) => (
        <Badge key={position} position={position} content={index + 1}>
          <FaBell size={24} />
        </Badge>
      ))}
    </div>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { Badge } from "@minerva/lib-core";
import { FaBell } from "react-icons/fa";

export default function SizesDemo() {
  return (
    <>
      <Badge size="small" content="S">
        <FaBell size={24} />
      </Badge>
      <Badge size="medium" content="M">
        <FaBell size={24} />
      </Badge>
      <Badge size="large" content="L">
        <FaBell size={24} />
      </Badge>
    </>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { Badge, HStack } from "@minerva/lib-core";

const statuses = [
  { color: "success", label: "Online" },
  { color: "warning", label: "Away" },
  { color: "danger", label: "Busy" },
  { color: "neutral", label: "Offline" },
] as const;

export default function StatusDemo() {
  return (
    <HStack gap={4} wrap>
      {statuses.map(({ color, label }) => (
        <HStack key={label} gap={2} align="center">
          {/* The visible text names the status, so the dot is decorative */}
          <Badge dot color={color} role="presentation" />
          <span>{label}</span>
        </HStack>
      ))}
    </HStack>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Badge, HStack, VStack } from "@minerva/lib-core";

const variants = ["solid", "subtle", "outline"] as const;
const colors = [
  "primary",
  "neutral",
  "success",
  "warning",
  "danger",
  "info",
] as const;

export default function VariantsDemo() {
  return (
    <VStack gap={3}>
      {variants.map((variant) => (
        <HStack key={variant} gap={2} wrap>
          {colors.map((color) => (
            <Badge key={color} variant={variant} color={color}>
              {variant} {color}
            </Badge>
          ))}
        </HStack>
      ))}
    </VStack>
  );
}
`})))()}var X;function Z(){return(Z=e((()=>{X=`import { Badge } from "@minerva/lib-core";
import { FaCheck, FaStar, FaUser } from "react-icons/fa";

export default function WithIconDemo() {
  return (
    <div style={{ display: "flex", gap: 48 }}>
      <Badge
        color="success"
        icon={<FaCheck />}
        content="OK"
        aria-label="Verified"
      >
        <FaUser size={24} />
      </Badge>
      <Badge
        color="warning"
        icon={<FaStar />}
        content="Top"
        aria-label="Top rated"
      >
        <FaUser size={24} />
      </Badge>
    </div>
  );
}
`})))()}var Q,ve,ye;function $(){return($=e((()=>{d(),m(),v(),b(),C(),T(),O(),ge(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),Z(),t(),ne(),te(),Q=n(),ve=re(Object.assign({"./demos/basic.tsx":ce,"./demos/colors.tsx":le,"./demos/custom-style.tsx":ue,"./demos/dot.tsx":de,"./demos/positions.tsx":fe,"./demos/sizes.tsx":pe,"./demos/status.tsx":me,"./demos/variants.tsx":he,"./demos/with-icon.tsx":_e}),Object.assign({"./demos/basic.tsx":P,"./demos/colors.tsx":I,"./demos/custom-style.tsx":R,"./demos/dot.tsx":B,"./demos/positions.tsx":H,"./demos/sizes.tsx":W,"./demos/status.tsx":K,"./demos/variants.tsx":J,"./demos/with-icon.tsx":X})),ye=()=>(0,Q.jsx)(ie,{id:`badge`,demos:ve})})))()}$();export{ye as default};