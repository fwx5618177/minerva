import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{n as r,t as i}from"./Button-BfJfx3BZ.js";import{a,i as o,n as s,o as c,r as l,s as u,t as d}from"./Card-km2tK_v2.js";import{m as f,n as p,p as m,t as h}from"./DocPage-44Ak-YGP.js";function g(){let[e,t]=(0,_.useState)(0);return(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:`100%`},children:[(0,v.jsx)(`div`,{children:(0,v.jsx)(r,{size:`small`,onClick:()=>t(e=>e+1),children:`Replay`})}),(0,v.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:16},children:y.map(t=>(0,v.jsxs)(d,{children:[(0,v.jsx)(a,{children:(0,v.jsx)(u,{children:t})}),(0,v.jsx)(l,{animation:t,children:`Animated content`},e)]},t))})]})}var _,v,y;function b(){return(b=e((()=>{_=t(),i(),o(),v=n(),y=[`fadeIn`,`slideIn`,`zoomIn`]})))()}function x(){return(0,S.jsx)(`div`,{style:{width:340},children:(0,S.jsxs)(d,{children:[(0,S.jsxs)(a,{children:[(0,S.jsx)(u,{children:`Project Apollo`}),(0,S.jsx)(s,{children:`Updated 2 hours ago`})]}),(0,S.jsx)(l,{children:`A design system for building accessible, themeable interfaces.`}),(0,S.jsx)(c,{children:(0,S.jsx)(r,{size:`small`,children:`Open`})})]})})}var S;function C(){return(C=e((()=>{i(),o(),S=n()})))()}function w(){return(0,T.jsx)(`div`,{style:{width:340},children:(0,T.jsxs)(d,{variant:`outline`,children:[(0,T.jsxs)(a,{style:{backgroundColor:`#4f46e5`,color:`#ffffff`},children:[(0,T.jsx)(u,{children:`Pro plan`}),(0,T.jsx)(s,{children:`Everything in Free, plus more`})]}),(0,T.jsx)(l,{style:{backgroundColor:`#eef2ff`,color:`#312e81`},children:`Unlimited projects, priority support and advanced analytics.`}),(0,T.jsx)(c,{style:{backgroundColor:`#e0e7ff`,color:`#312e81`},children:(0,T.jsx)(r,{size:`small`,children:`Upgrade`})})]})})}var T;function E(){return(E=e((()=>{i(),o(),T=n()})))()}function D(){return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:12,width:320},children:[(0,O.jsxs)(d,{as:`a`,href:`#books/1`,variant:`outline`,padding:`small`,interactive:!0,children:[(0,O.jsx)(u,{as:`h4`,children:`The Three-Body Problem`}),(0,O.jsx)(s,{children:`A link card with hover and focus feedback`})]}),(0,O.jsxs)(d,{as:`button`,variant:`ghost`,padding:`small`,interactive:!0,children:[(0,O.jsx)(u,{as:`h4`,children:`Ghost button card`}),(0,O.jsx)(s,{children:`Transparent until hovered`})]})]})}var O;function k(){return(k=e((()=>{o(),O=n()})))()}function A(){return(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(220px, 1fr))`,gap:16,width:`100%`},children:[`outline`,`elevated`,`filled`,`ghost`].map(e=>(0,j.jsxs)(d,{variant:e,padding:`medium`,children:[(0,j.jsxs)(a,{children:[(0,j.jsx)(u,{children:e}),(0,j.jsx)(s,{children:`padding="medium"`})]}),(0,j.jsx)(l,{children:`The card pads itself; sections sit flush.`}),(0,j.jsx)(c,{children:(0,j.jsx)(r,{size:`small`,color:`neutral`,variant:`outline`,children:`Details`})})]},e))})}var j;function M(){return(M=e((()=>{i(),o(),j=n()})))()}function N(){return(0,P.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:16,width:`100%`},children:F.map(e=>(0,P.jsxs)(d,{variant:e,children:[(0,P.jsx)(a,{children:(0,P.jsx)(u,{children:e})}),(0,P.jsxs)(l,{children:[`variant="`,e,`"`]})]},e))})}var P,F;function I(){return(I=e((()=>{o(),P=n(),F=[`default`,`outline`,`elevated`,`filled`,`ghost`]})))()}var L;function R(){return(R=e((()=>{L=`import { useState } from "react";
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
          <Card key={animation}>
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
`})))()}var z;function B(){return(B=e((()=>{z=`import {
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
`})))()}var V;function H(){return(H=e((()=>{V=`import {
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
      <Card variant="outline">
        <CardHeader style={{ backgroundColor: "#4f46e5", color: "#ffffff" }}>
          <CardTitle>Pro plan</CardTitle>
          <CardDescription>Everything in Free, plus more</CardDescription>
        </CardHeader>
        <CardContent style={{ backgroundColor: "#eef2ff", color: "#312e81" }}>
          Unlimited projects, priority support and advanced analytics.
        </CardContent>
        <CardFooter style={{ backgroundColor: "#e0e7ff", color: "#312e81" }}>
          <Button size="small">Upgrade</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
`})))()}var U;function W(){return(W=e((()=>{U=`import { Card, CardDescription, CardTitle } from "@minerva/lib-core";

export default function InteractiveDemo() {
  return (
    <div style={{ display: "grid", gap: 12, width: 320 }}>
      <Card
        as="a"
        href="#books/1"
        variant="outline"
        padding="small"
        interactive
      >
        <CardTitle as="h4">The Three-Body Problem</CardTitle>
        <CardDescription>
          A link card with hover and focus feedback
        </CardDescription>
      </Card>
      <Card as="button" variant="ghost" padding="small" interactive>
        <CardTitle as="h4">Ghost button card</CardTitle>
        <CardDescription>Transparent until hovered</CardDescription>
      </Card>
    </div>
  );
}
`})))()}var G;function K(){return(K=e((()=>{G=`import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@minerva/lib-core";

export default function PaddedDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 16,
        width: "100%",
      }}
    >
      {(["outline", "elevated", "filled", "ghost"] as const).map((variant) => (
        <Card key={variant} variant={variant} padding="medium">
          <CardHeader>
            <CardTitle>{variant}</CardTitle>
            <CardDescription>padding=&quot;medium&quot;</CardDescription>
          </CardHeader>
          <CardContent>The card pads itself; sections sit flush.</CardContent>
          <CardFooter>
            <Button size="small" color="neutral" variant="outline">
              Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
`})))()}var q;function J(){return(J=e((()=>{q=`import { Card, CardContent, CardHeader, CardTitle } from "@minerva/lib-core";

const variants = ["default", "outline", "elevated", "filled", "ghost"] as const;

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
        <Card key={variant} variant={variant}>
          <CardHeader>
            <CardTitle>{variant}</CardTitle>
          </CardHeader>
          <CardContent>variant=&quot;{variant}&quot;</CardContent>
        </Card>
      ))}
    </div>
  );
}
`})))()}var Y,X,Z;function Q(){return(Q=e((()=>{b(),C(),E(),k(),M(),I(),R(),B(),H(),W(),K(),J(),t(),p(),f(),Y=n(),X=m(Object.assign({"./demos/animation.tsx":g,"./demos/basic.tsx":x,"./demos/custom-colors.tsx":w,"./demos/interactive.tsx":D,"./demos/padded.tsx":A,"./demos/variants.tsx":N}),Object.assign({"./demos/animation.tsx":L,"./demos/basic.tsx":z,"./demos/custom-colors.tsx":V,"./demos/interactive.tsx":U,"./demos/padded.tsx":G,"./demos/variants.tsx":q})),Z=()=>(0,Y.jsx)(h,{id:`card`,demos:X})})))()}Q();export{Z as default};