import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{G as ee,Q as r,S as i,T as a,k as te,tt as o}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{Et as s,Ht as c}from"./dist-BWNqkmth.js";import{c as ne,n as l,s as u,t as d}from"./DocPage-DGOZswYH.js";function f(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{appearance:`subtle`,children:`NEW`}),(0,p.jsx)(s,{appearance:`subtle`,variant:`success`,children:`Published`}),(0,p.jsx)(s,{appearance:`outline`,variant:`warning`,children:`Draft`}),(0,p.jsx)(s,{appearance:`solid`,variant:`neutral`,children:`Archived`}),(0,p.jsx)(s,{dot:!0,variant:`danger`,ariaLabel:`Offline`})]})}var p;function m(){return(m=e((()=>{c(),p=n()})))()}function re(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{content:5,ariaLabel:`5 unread notifications`,children:(0,h.jsx)(i,{size:24,"aria-label":`Notifications`})}),(0,h.jsx)(s,{content:`99+`,ariaLabel:`More than 99 messages`,children:(0,h.jsx)(te,{size:24,"aria-label":`Messages`})}),(0,h.jsxs)(`span`,{children:[`Inbox `,(0,h.jsx)(s,{content:12,variant:`info`,ariaLabel:`12 unread`}),` and changelog `,(0,h.jsx)(s,{variant:`success`,children:`New`})]})]})}var h;function g(){return(g=e((()=>{c(),o(),h=n()})))()}function ie(){return(0,_.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,_.jsx)(s,{content:1,bgColor:`#7c3aed`,textColor:`#ffffff`,borderRadius:`12px`,children:(0,_.jsx)(i,{size:24})}),(0,_.jsx)(s,{content:2,bgColor:`#ff9800`,textColor:`#ffffff`,borderWidth:`2px`,borderColor:`#e65100`,children:(0,_.jsx)(i,{size:24})})]})}var _;function v(){return(v=e((()=>{c(),o(),_=n()})))()}function y(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s,{dot:!0,variant:`primary`,ariaLabel:`New activity`,children:(0,b.jsx)(i,{size:24})}),(0,b.jsx)(s,{dot:!0,variant:`success`,ariaLabel:`Online`,children:(0,b.jsx)(i,{size:24})}),(0,b.jsx)(s,{dot:!0,variant:`error`,ariaLabel:`Error`,children:(0,b.jsx)(i,{size:24})})]})}var b;function x(){return(x=e((()=>{c(),o(),b=n()})))()}function ae(){return(0,S.jsx)(`div`,{style:{display:`flex`,gap:32},children:C.map((e,t)=>(0,S.jsx)(s,{position:e,content:t+1,children:(0,S.jsx)(i,{size:24})},e))})}var S,C;function w(){return(w=e((()=>{c(),o(),S=n(),C=[`top-right`,`top-left`,`bottom-right`,`bottom-left`]})))()}function oe(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(s,{size:`small`,content:`S`,children:(0,T.jsx)(i,{size:24})}),(0,T.jsx)(s,{size:`medium`,content:`M`,children:(0,T.jsx)(i,{size:24})}),(0,T.jsx)(s,{size:`large`,content:`L`,children:(0,T.jsx)(i,{size:24})})]})}var T;function E(){return(E=e((()=>{c(),o(),T=n()})))()}function D(){return(0,O.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:24},children:k.map((e,t)=>(0,O.jsx)(s,{variant:e,content:t+1,ariaLabel:`${e} badge`,children:(0,O.jsx)(i,{size:24,title:e})},e))})}var O,k;function A(){return(A=e((()=>{c(),o(),O=n(),k=[`primary`,`secondary`,`success`,`danger`,`warning`,`error`,`info`,`light`,`dark`]})))()}function j(){return(0,M.jsxs)(`div`,{style:{display:`flex`,gap:48},children:[(0,M.jsx)(s,{variant:`success`,icon:(0,M.jsx)(a,{}),content:`OK`,ariaLabel:`Verified`,children:(0,M.jsx)(r,{size:24})}),(0,M.jsx)(s,{variant:`warning`,icon:(0,M.jsx)(ee,{}),content:`Top`,ariaLabel:`Top rated`,children:(0,M.jsx)(r,{size:24})})]})}var M;function N(){return(N=e((()=>{c(),o(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { Badge } from "@minerva/lib-core";

export default function AppearanceDemo() {
  return (
    <>
      <Badge appearance="subtle">NEW</Badge>
      <Badge appearance="subtle" variant="success">
        Published
      </Badge>
      <Badge appearance="outline" variant="warning">
        Draft
      </Badge>
      <Badge appearance="solid" variant="neutral">
        Archived
      </Badge>
      <Badge dot variant="danger" ariaLabel="Offline" />
    </>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { Badge } from "@minerva/lib-core";
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
        Inbox <Badge content={12} variant="info" ariaLabel="12 unread" /> and
        changelog <Badge variant="success">New</Badge>
      </span>
    </>
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { Badge } from "@minerva/lib-core";
import { FaBell } from "react-icons/fa";

export default function CustomStyleDemo() {
  return (
    <div style={{ display: "flex", gap: 24 }}>
      <Badge
        content={1}
        bgColor="#7c3aed"
        textColor="#ffffff"
        borderRadius="12px"
      >
        <FaBell size={24} />
      </Badge>
      <Badge
        content={2}
        bgColor="#ff9800"
        textColor="#ffffff"
        borderWidth="2px"
        borderColor="#e65100"
      >
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
      <Badge dot variant="primary" ariaLabel="New activity">
        <FaBell size={24} />
      </Badge>
      <Badge dot variant="success" ariaLabel="Online">
        <FaBell size={24} />
      </Badge>
      <Badge dot variant="error" ariaLabel="Error">
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
`})))()}var K;function q(){return(q=e((()=>{K=`import { Badge } from "@minerva/lib-core";
import { FaBell } from "react-icons/fa";

const variants = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "error",
  "info",
  "light",
  "dark",
] as const;

export default function VariantsDemo() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
      {variants.map((variant, index) => (
        <Badge
          key={variant}
          variant={variant}
          content={index + 1}
          ariaLabel={\`\${variant} badge\`}
        >
          <FaBell size={24} title={variant} />
        </Badge>
      ))}
    </div>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Badge } from "@minerva/lib-core";
import { FaCheck, FaStar, FaUser } from "react-icons/fa";

export default function WithIconDemo() {
  return (
    <div style={{ display: "flex", gap: 48 }}>
      <Badge
        variant="success"
        icon={<FaCheck />}
        content="OK"
        ariaLabel="Verified"
      >
        <FaUser size={24} />
      </Badge>
      <Badge
        variant="warning"
        icon={<FaStar />}
        content="Top"
        ariaLabel="Top rated"
      >
        <FaUser size={24} />
      </Badge>
    </div>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{m(),g(),v(),x(),w(),E(),A(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),l(),ne(),X=n(),Z=u(Object.assign({"./demos/appearance.tsx":f,"./demos/basic.tsx":re,"./demos/custom-style.tsx":ie,"./demos/dot.tsx":y,"./demos/positions.tsx":ae,"./demos/sizes.tsx":oe,"./demos/variants.tsx":D,"./demos/with-icon.tsx":j}),Object.assign({"./demos/appearance.tsx":P,"./demos/basic.tsx":I,"./demos/custom-style.tsx":R,"./demos/dot.tsx":B,"./demos/positions.tsx":H,"./demos/sizes.tsx":W,"./demos/variants.tsx":K,"./demos/with-icon.tsx":J})),Q=()=>(0,X.jsx)(d,{id:`badge`,demos:Z})})))()}$();export{Q as default};