import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{f as t,t as n}from"./react-vendor-CUe5nroo.js";import{R as r,_ as i,a,c as o,t as s,u as c,x as l}from"./dist-DAjZNDC0.js";import{i as u,t as d}from"./DocPage-B1L0vw6V.js";var f=e(t(),1),p=n(),m=[`fadeIn`,`slideIn`,`zoomIn`];function h(){let[e,t]=(0,f.useState)(0);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:`100%`},children:[(0,p.jsx)(`div`,{children:(0,p.jsx)(a,{size:`small`,onClick:()=>t(e=>e+1),children:`Replay`})}),(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:16},children:m.map(t=>(0,p.jsxs)(l,{type:`noFooter`,children:[(0,p.jsx)(c,{children:(0,p.jsx)(o,{children:t})}),(0,p.jsx)(r,{animation:t,children:`Animated content`},e)]},t))})]})}function g(){return(0,p.jsx)(`div`,{style:{width:340},children:(0,p.jsxs)(l,{children:[(0,p.jsxs)(c,{children:[(0,p.jsx)(o,{children:`Project Apollo`}),(0,p.jsx)(i,{children:`Updated 2 hours ago`})]}),(0,p.jsx)(r,{children:`A design system for building accessible, themeable interfaces.`}),(0,p.jsx)(s,{children:(0,p.jsx)(a,{size:`small`,children:`Open`})})]})})}function _(){return(0,p.jsx)(`div`,{style:{width:340},children:(0,p.jsxs)(l,{variant:`outlined`,children:[(0,p.jsxs)(c,{bgColor:`#4f46e5`,textColor:`#ffffff`,children:[(0,p.jsx)(o,{children:`Pro plan`}),(0,p.jsx)(i,{children:`Everything in Free, plus more`})]}),(0,p.jsx)(r,{bgColor:`#eef2ff`,textColor:`#312e81`,children:`Unlimited projects, priority support and advanced analytics.`}),(0,p.jsx)(s,{bgColor:`#e0e7ff`,textColor:`#312e81`,children:(0,p.jsx)(a,{size:`small`,children:`Upgrade`})})]})})}var v=[`default`,`noHeader`,`noFooter`,`noHeaderFooter`];function y(){return(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:16,width:`100%`},children:v.map(e=>(0,p.jsxs)(l,{type:e,children:[(0,p.jsx)(c,{children:(0,p.jsx)(o,{children:`Header`})}),(0,p.jsxs)(r,{children:[`type="`,e,`"`]}),(0,p.jsx)(s,{children:`Footer`})]},e))})}var b=[`default`,`outlined`,`shadow`,`elevated`,`filled`];function x(){return(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:16,width:`100%`},children:b.map(e=>(0,p.jsxs)(l,{variant:e,type:`noFooter`,children:[(0,p.jsx)(c,{children:(0,p.jsx)(o,{children:e})}),(0,p.jsxs)(r,{children:[`variant="`,e,`"`]})]},e))})}var S=u(Object.assign({"./demos/animation.tsx":h,"./demos/basic.tsx":g,"./demos/custom-colors.tsx":_,"./demos/types.tsx":y,"./demos/variants.tsx":x}),Object.assign({"./demos/animation.tsx":`import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@minerva/lib-core";

const animations = ["fadeIn", "slideIn", "zoomIn"] as const;

export default function AnimationDemo() {
  const [round, setRound] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        width: "100%",
      }}
    >
      <div>
        <Button size="small" onClick={() => setRound((r) => r + 1)}>
          Replay
        </Button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 16,
        }}
      >
        {animations.map((animation) => (
          <Card key={animation} type="noFooter">
            <CardHeader>
              <CardTitle>{animation}</CardTitle>
            </CardHeader>
            <CardContent key={round} animation={animation}>
              Animated content
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
`,"./demos/basic.tsx":`import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <div style={{ width: 340 }}>
      <Card>
        <CardHeader>
          <CardTitle>Project Apollo</CardTitle>
          <CardDescription>Updated 2 hours ago</CardDescription>
        </CardHeader>
        <CardContent>
          A design system for building accessible, themeable interfaces.
        </CardContent>
        <CardFooter>
          <Button size="small">Open</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
`,"./demos/custom-colors.tsx":`import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@minerva/lib-core";

export default function CustomColorsDemo() {
  return (
    <div style={{ width: 340 }}>
      <Card variant="outlined">
        <CardHeader bgColor="#4f46e5" textColor="#ffffff">
          <CardTitle>Pro plan</CardTitle>
          <CardDescription>Everything in Free, plus more</CardDescription>
        </CardHeader>
        <CardContent bgColor="#eef2ff" textColor="#312e81">
          Unlimited projects, priority support and advanced analytics.
        </CardContent>
        <CardFooter bgColor="#e0e7ff" textColor="#312e81">
          <Button size="small">Upgrade</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
`,"./demos/types.tsx":`import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@minerva/lib-core";

const types = ["default", "noHeader", "noFooter", "noHeaderFooter"] as const;

export default function TypesDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: 16,
        width: "100%",
      }}
    >
      {types.map((type) => (
        <Card key={type} type={type}>
          <CardHeader>
            <CardTitle>Header</CardTitle>
          </CardHeader>
          <CardContent>type=&quot;{type}&quot;</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      ))}
    </div>
  );
}
`,"./demos/variants.tsx":`import { Card, CardContent, CardHeader, CardTitle } from "@minerva/lib-core";

const variants = [
  "default",
  "outlined",
  "shadow",
  "elevated",
  "filled",
] as const;

export default function VariantsDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: 16,
        width: "100%",
      }}
    >
      {variants.map((variant) => (
        <Card key={variant} variant={variant} type="noFooter">
          <CardHeader>
            <CardTitle>{variant}</CardTitle>
          </CardHeader>
          <CardContent>variant=&quot;{variant}&quot;</CardContent>
        </Card>
      ))}
    </div>
  );
}
`})),C=()=>(0,p.jsx)(d,{id:`card`,demos:S});export{C as default};