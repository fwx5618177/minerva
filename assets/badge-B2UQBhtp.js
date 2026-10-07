import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{E as ee,H as r,Q as i,S as te,Y as a,y as o}from"./ConfigProvider-BGZRMKW0-zZcUK1pN.js";import{st as s}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d as c}from"./dist-CcA3uxH5.js";import{c as ne,n as l,s as re,t as u}from"./DocPage-Dm1vTl9w.js";function d(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{appearance:`subtle`,children:`NEW`}),(0,f.jsx)(s,{appearance:`subtle`,variant:`success`,children:`Published`}),(0,f.jsx)(s,{appearance:`outline`,variant:`warning`,children:`Draft`}),(0,f.jsx)(s,{appearance:`solid`,variant:`neutral`,children:`Archived`}),(0,f.jsx)(s,{dot:!0,variant:`danger`,ariaLabel:`Offline`})]})}var f;function p(){return(p=e((()=>{c(),f=n()})))()}function ie(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{content:5,ariaLabel:`5 unread notifications`,children:(0,m.jsx)(o,{size:24,"aria-label":`Notifications`})}),(0,m.jsx)(s,{content:`99+`,ariaLabel:`More than 99 messages`,children:(0,m.jsx)(ee,{size:24,"aria-label":`Messages`})}),(0,m.jsxs)(`span`,{children:[`Inbox `,(0,m.jsx)(s,{content:12,variant:`info`,ariaLabel:`12 unread`}),` and changelog `,(0,m.jsx)(s,{variant:`success`,children:`New`})]})]})}var m;function h(){return(h=e((()=>{c(),i(),m=n()})))()}function ae(){return(0,g.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,g.jsx)(s,{content:1,bgColor:`#7c3aed`,textColor:`#ffffff`,borderRadius:`12px`,children:(0,g.jsx)(o,{size:24})}),(0,g.jsx)(s,{content:2,bgColor:`#ff9800`,textColor:`#ffffff`,borderWidth:`2px`,borderColor:`#e65100`,children:(0,g.jsx)(o,{size:24})})]})}var g;function _(){return(_=e((()=>{c(),i(),g=n()})))()}function v(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{dot:!0,variant:`primary`,ariaLabel:`New activity`,children:(0,y.jsx)(o,{size:24})}),(0,y.jsx)(s,{dot:!0,variant:`success`,ariaLabel:`Online`,children:(0,y.jsx)(o,{size:24})}),(0,y.jsx)(s,{dot:!0,variant:`error`,ariaLabel:`Error`,children:(0,y.jsx)(o,{size:24})})]})}var y;function b(){return(b=e((()=>{c(),i(),y=n()})))()}function oe(){return(0,x.jsx)(`div`,{style:{display:`flex`,gap:32},children:S.map((e,t)=>(0,x.jsx)(s,{position:e,content:t+1,children:(0,x.jsx)(o,{size:24})},e))})}var x,S;function C(){return(C=e((()=>{c(),i(),x=n(),S=[`top-right`,`top-left`,`bottom-right`,`bottom-left`]})))()}function w(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(s,{size:`small`,content:`S`,children:(0,T.jsx)(o,{size:24})}),(0,T.jsx)(s,{size:`medium`,content:`M`,children:(0,T.jsx)(o,{size:24})}),(0,T.jsx)(s,{size:`large`,content:`L`,children:(0,T.jsx)(o,{size:24})})]})}var T;function E(){return(E=e((()=>{c(),i(),T=n()})))()}function D(){return(0,O.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:24},children:k.map((e,t)=>(0,O.jsx)(s,{variant:e,content:t+1,ariaLabel:`${e} badge`,children:(0,O.jsx)(o,{size:24,title:e})},e))})}var O,k;function A(){return(A=e((()=>{c(),i(),O=n(),k=[`primary`,`secondary`,`success`,`danger`,`warning`,`error`,`info`,`light`,`dark`]})))()}function j(){return(0,M.jsxs)(`div`,{style:{display:`flex`,gap:48},children:[(0,M.jsx)(s,{variant:`success`,icon:(0,M.jsx)(te,{}),content:`OK`,ariaLabel:`Verified`,children:(0,M.jsx)(a,{size:24})}),(0,M.jsx)(s,{variant:`warning`,icon:(0,M.jsx)(r,{}),content:`Top`,ariaLabel:`Top rated`,children:(0,M.jsx)(a,{size:24})})]})}var M;function N(){return(N=e((()=>{c(),i(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { Badge } from "@minerva/lib-core";

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
`})))()}var X,Z,Q;function $(){return($=e((()=>{p(),h(),_(),b(),C(),E(),A(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),l(),ne(),X=n(),Z=re(Object.assign({"./demos/appearance.tsx":d,"./demos/basic.tsx":ie,"./demos/custom-style.tsx":ae,"./demos/dot.tsx":v,"./demos/positions.tsx":oe,"./demos/sizes.tsx":w,"./demos/variants.tsx":D,"./demos/with-icon.tsx":j}),Object.assign({"./demos/appearance.tsx":P,"./demos/basic.tsx":I,"./demos/custom-style.tsx":R,"./demos/dot.tsx":B,"./demos/positions.tsx":H,"./demos/sizes.tsx":W,"./demos/variants.tsx":K,"./demos/with-icon.tsx":J})),Q=()=>(0,X.jsx)(u,{id:`badge`,demos:Z})})))()}$();export{Q as default};