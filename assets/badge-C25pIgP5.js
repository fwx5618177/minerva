import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{D as r,T as ee,_ as te,h as i,k as a,y as ne}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{D as re,Rt as o,Ut as s,_ as c}from"./dist-DkgrNLMS.js";import{c as ie,n as ae,s as oe,t as se}from"./DocPage-Bnv84vTs.js";function ce(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{content:5,ariaLabel:`5 unread notifications`,children:(0,l.jsx)(i,{size:24,"aria-label":`Notifications`})}),(0,l.jsx)(s,{content:`99+`,ariaLabel:`More than 99 messages`,children:(0,l.jsx)(ne,{size:24,"aria-label":`Messages`})}),(0,l.jsxs)(`span`,{children:[`Inbox `,(0,l.jsx)(s,{content:12,color:`info`,ariaLabel:`12 unread`}),` and changelog `,(0,l.jsx)(s,{color:`success`,children:`New`})]})]})}var l;function u(){return(u=e((()=>{o(),a(),l=n()})))()}function le(){return(0,d.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:24},children:f.map((e,t)=>(0,d.jsx)(s,{color:e,content:t+1,ariaLabel:`${e} badge`,children:(0,d.jsx)(i,{size:24,title:e})},e))})}var d,f;function p(){return(p=e((()=>{o(),a(),d=n(),f=[`primary`,`neutral`,`success`,`warning`,`danger`,`info`]})))()}function ue(){return(0,m.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,m.jsx)(s,{content:1,borderRadius:`12px`,style:h,children:(0,m.jsx)(i,{size:24})}),(0,m.jsx)(s,{content:2,variant:`outline`,borderWidth:`2px`,style:g,children:(0,m.jsx)(i,{size:24})})]})}var m,h,g;function _(){return(_=e((()=>{o(),a(),m=n(),h={"--badge-bg":`#7c3aed`,"--badge-fg":`#ffffff`},g={"--badge-fg":`#e65100`,"--badge-border":`#e65100`}})))()}function de(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{dot:!0,color:`primary`,ariaLabel:`New activity`,children:(0,v.jsx)(i,{size:24})}),(0,v.jsx)(s,{dot:!0,color:`success`,ariaLabel:`Online`,children:(0,v.jsx)(i,{size:24})}),(0,v.jsx)(s,{dot:!0,color:`danger`,ariaLabel:`Danger`,children:(0,v.jsx)(i,{size:24})})]})}var v;function y(){return(y=e((()=>{o(),a(),v=n()})))()}function fe(){return(0,b.jsx)(`div`,{style:{display:`flex`,gap:32},children:x.map((e,t)=>(0,b.jsx)(s,{position:e,content:t+1,children:(0,b.jsx)(i,{size:24})},e))})}var b,x;function S(){return(S=e((()=>{o(),a(),b=n(),x=[`top-right`,`top-left`,`bottom-right`,`bottom-left`]})))()}function pe(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(s,{size:`small`,content:`S`,children:(0,C.jsx)(i,{size:24})}),(0,C.jsx)(s,{size:`medium`,content:`M`,children:(0,C.jsx)(i,{size:24})}),(0,C.jsx)(s,{size:`large`,content:`L`,children:(0,C.jsx)(i,{size:24})})]})}var C;function w(){return(w=e((()=>{o(),a(),C=n()})))()}function me(){return(0,T.jsx)(c,{gap:4,wrap:!0,children:E.map(({color:e,label:t})=>(0,T.jsxs)(c,{gap:2,align:`center`,children:[(0,T.jsx)(s,{dot:!0,color:e,role:`presentation`}),(0,T.jsx)(`span`,{children:t})]},t))})}var T,E;function he(){return(he=e((()=>{o(),T=n(),E=[{color:`success`,label:`Online`},{color:`warning`,label:`Away`},{color:`danger`,label:`Busy`},{color:`neutral`,label:`Offline`}]})))()}function ge(){return(0,D.jsx)(re,{gap:3,children:O.map(e=>(0,D.jsx)(c,{gap:2,wrap:!0,children:k.map(t=>(0,D.jsxs)(s,{variant:e,color:t,children:[e,` `,t]},t))},e))})}var D,O,k;function A(){return(A=e((()=>{o(),D=n(),O=[`solid`,`subtle`,`outline`],k=[`primary`,`neutral`,`success`,`warning`,`danger`,`info`]})))()}function _e(){return(0,j.jsxs)(`div`,{style:{display:`flex`,gap:48},children:[(0,j.jsx)(s,{color:`success`,icon:(0,j.jsx)(te,{}),content:`OK`,ariaLabel:`Verified`,children:(0,j.jsx)(r,{size:24})}),(0,j.jsx)(s,{color:`warning`,icon:(0,j.jsx)(ee,{}),content:`Top`,ariaLabel:`Top rated`,children:(0,j.jsx)(r,{size:24})})]})}var j;function M(){return(M=e((()=>{o(),a(),j=n()})))()}var N;function P(){return(P=e((()=>{N=`import { Badge } from "@minerva/lib-core";
import { FaBell, FaEnvelope } from "react-icons/fa";

export default function BasicDemo() {
  return (
    <>
      <Badge content={5} ariaLabel="5 unread notifications">
        <FaBell size={24} aria-label="Notifications" />
      </Badge>
      <Badge content="99+" ariaLabel="More than 99 messages">
        <FaEnvelope size={24} aria-label="Messages" />
      </Badge>
      <span>
        Inbox <Badge content={12} color="info" ariaLabel="12 unread" /> and
        changelog <Badge color="success">New</Badge>
      </span>
    </>
  );
}
`})))()}var F;function I(){return(I=e((()=>{F=`import { Badge } from "@minerva/lib-core";
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
          ariaLabel={\`\${color} badge\`}
        >
          <FaBell size={24} title={color} />
        </Badge>
      ))}
    </div>
  );
}
`})))()}var L;function R(){return(R=e((()=>{L=`import type { CSSProperties } from "react";
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
`})))()}var z;function B(){return(B=e((()=>{z=`import { Badge } from "@minerva/lib-core";
import { FaBell } from "react-icons/fa";

export default function DotDemo() {
  return (
    <>
      <Badge dot color="primary" ariaLabel="New activity">
        <FaBell size={24} />
      </Badge>
      <Badge dot color="success" ariaLabel="Online">
        <FaBell size={24} />
      </Badge>
      <Badge dot color="danger" ariaLabel="Danger">
        <FaBell size={24} />
      </Badge>
    </>
  );
}
`})))()}var V;function H(){return(H=e((()=>{V=`import { Badge } from "@minerva/lib-core";
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
`})))()}var U;function W(){return(W=e((()=>{U=`import { Badge } from "@minerva/lib-core";
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
`})))()}var G;function K(){return(K=e((()=>{G=`import { Badge, HStack } from "@minerva/lib-core";

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
`})))()}var q;function J(){return(J=e((()=>{q=`import { Badge, HStack, VStack } from "@minerva/lib-core";

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
`})))()}var Y;function X(){return(X=e((()=>{Y=`import { Badge } from "@minerva/lib-core";
import { FaCheck, FaStar, FaUser } from "react-icons/fa";

export default function WithIconDemo() {
  return (
    <div style={{ display: "flex", gap: 48 }}>
      <Badge
        color="success"
        icon={<FaCheck />}
        content="OK"
        ariaLabel="Verified"
      >
        <FaUser size={24} />
      </Badge>
      <Badge
        color="warning"
        icon={<FaStar />}
        content="Top"
        ariaLabel="Top rated"
      >
        <FaUser size={24} />
      </Badge>
    </div>
  );
}
`})))()}var Z,Q,$;function ve(){return(ve=e((()=>{u(),p(),_(),y(),S(),w(),he(),A(),M(),P(),I(),R(),B(),H(),W(),K(),J(),X(),t(),ae(),ie(),Z=n(),Q=oe(Object.assign({"./demos/basic.tsx":ce,"./demos/colors.tsx":le,"./demos/custom-style.tsx":ue,"./demos/dot.tsx":de,"./demos/positions.tsx":fe,"./demos/sizes.tsx":pe,"./demos/status.tsx":me,"./demos/variants.tsx":ge,"./demos/with-icon.tsx":_e}),Object.assign({"./demos/basic.tsx":N,"./demos/colors.tsx":F,"./demos/custom-style.tsx":L,"./demos/dot.tsx":z,"./demos/positions.tsx":V,"./demos/sizes.tsx":U,"./demos/status.tsx":G,"./demos/variants.tsx":q,"./demos/with-icon.tsx":Y})),$=()=>(0,Z.jsx)(se,{id:`badge`,demos:Q})})))()}ve();export{$ as default};