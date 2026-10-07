import"./rolldown-runtime-CbXtAM7H.js";import{f as e,t}from"./react-vendor-CUe5nroo.js";import{$ as n,ft as r,it as i,lt as a,q as o,tt as s}from"./dist-DAjZNDC0.js";import{i as c,t as l}from"./DocPage-B1L0vw6V.js";var u=t();function d(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{content:5,ariaLabel:`5 unread notifications`,children:(0,u.jsx)(n,{size:24,"aria-label":`Notifications`})}),(0,u.jsx)(o,{content:`99+`,ariaLabel:`More than 99 messages`,children:(0,u.jsx)(i,{size:24,"aria-label":`Messages`})})]})}function f(){return(0,u.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,u.jsx)(o,{content:1,bgColor:`#7c3aed`,textColor:`#ffffff`,borderRadius:`12px`,children:(0,u.jsx)(n,{size:24})}),(0,u.jsx)(o,{content:2,bgColor:`#ff9800`,textColor:`#ffffff`,borderWidth:`2px`,borderColor:`#e65100`,children:(0,u.jsx)(n,{size:24})})]})}function p(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{dot:!0,variant:`primary`,ariaLabel:`New activity`,children:(0,u.jsx)(n,{size:24})}),(0,u.jsx)(o,{dot:!0,variant:`success`,ariaLabel:`Online`,children:(0,u.jsx)(n,{size:24})}),(0,u.jsx)(o,{dot:!0,variant:`error`,ariaLabel:`Error`,children:(0,u.jsx)(n,{size:24})})]})}var m=[`top-right`,`top-left`,`bottom-right`,`bottom-left`];function h(){return(0,u.jsx)(`div`,{style:{display:`flex`,gap:32},children:m.map((e,t)=>(0,u.jsx)(o,{position:e,content:t+1,children:(0,u.jsx)(n,{size:24})},e))})}function g(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{size:`small`,content:`S`,children:(0,u.jsx)(n,{size:24})}),(0,u.jsx)(o,{size:`medium`,content:`M`,children:(0,u.jsx)(n,{size:24})}),(0,u.jsx)(o,{size:`large`,content:`L`,children:(0,u.jsx)(n,{size:24})})]})}var _=[`primary`,`secondary`,`success`,`danger`,`warning`,`error`,`info`,`light`,`dark`];function v(){return(0,u.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:24},children:_.map((e,t)=>(0,u.jsx)(o,{variant:e,content:t+1,ariaLabel:`${e} badge`,children:(0,u.jsx)(n,{size:24,title:e})},e))})}function y(){return(0,u.jsxs)(`div`,{style:{display:`flex`,gap:48},children:[(0,u.jsx)(o,{variant:`success`,icon:(0,u.jsx)(s,{}),content:`OK`,ariaLabel:`Verified`,children:(0,u.jsx)(r,{size:24})}),(0,u.jsx)(o,{variant:`warning`,icon:(0,u.jsx)(a,{}),content:`Top`,ariaLabel:`Top rated`,children:(0,u.jsx)(r,{size:24})})]})}var b=`import { Badge } from "@minerva/lib-core";
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
    </>
  );
}
`,x=`import { Badge } from "@minerva/lib-core";
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
`,S=`import { Badge } from "@minerva/lib-core";
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
`,C=`import { Badge } from "@minerva/lib-core";
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
`,w=`import { Badge } from "@minerva/lib-core";
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
`,T=`import { Badge } from "@minerva/lib-core";
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
`,E=`import { Badge } from "@minerva/lib-core";
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
`;e();var D=c(Object.assign({"./demos/basic.tsx":d,"./demos/custom-style.tsx":f,"./demos/dot.tsx":p,"./demos/positions.tsx":h,"./demos/sizes.tsx":g,"./demos/variants.tsx":v,"./demos/with-icon.tsx":y}),Object.assign({"./demos/basic.tsx":b,"./demos/custom-style.tsx":x,"./demos/dot.tsx":S,"./demos/positions.tsx":C,"./demos/sizes.tsx":w,"./demos/variants.tsx":T,"./demos/with-icon.tsx":E})),O=()=>(0,u.jsx)(l,{id:`badge`,demos:D});export{O as default};