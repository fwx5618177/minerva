import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{n as r,t as i}from"./Button-DP6INRXF.js";import{a,i as o,n as s,o as c,r as l,s as u,t as d}from"./Card-DSGBUu6Z.js";import{c as f,n as p,s as m,t as h}from"./DocPage-DEXoN4OO.js";function g(){let[e,t]=(0,_.useState)(0);return(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:`100%`},children:[(0,v.jsx)(`div`,{children:(0,v.jsx)(i,{size:`small`,onClick:()=>t(e=>e+1),children:`Replay`})}),(0,v.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:16},children:y.map(t=>(0,v.jsxs)(c,{children:[(0,v.jsx)(d,{children:(0,v.jsx)(a,{children:t})}),(0,v.jsx)(s,{animation:t,children:`Animated content`},e)]},t))})]})}var _,v,y;function b(){return(b=e((()=>{_=t(),r(),o(),v=n(),y=[`fadeIn`,`slideIn`,`zoomIn`]})))()}function x(){return(0,S.jsx)(`div`,{style:{width:340},children:(0,S.jsxs)(c,{children:[(0,S.jsxs)(d,{children:[(0,S.jsx)(a,{children:`Project Apollo`}),(0,S.jsx)(u,{children:`Updated 2 hours ago`})]}),(0,S.jsx)(s,{children:`A design system for building accessible, themeable interfaces.`}),(0,S.jsx)(l,{children:(0,S.jsx)(i,{size:`small`,children:`Open`})})]})})}var S;function C(){return(C=e((()=>{r(),o(),S=n()})))()}function w(){return(0,T.jsx)(`div`,{style:{width:340},children:(0,T.jsxs)(c,{variant:`outline`,children:[(0,T.jsxs)(d,{style:{backgroundColor:`#4f46e5`,color:`#ffffff`},children:[(0,T.jsx)(a,{children:`Pro plan`}),(0,T.jsx)(u,{children:`Everything in Free, plus more`})]}),(0,T.jsx)(s,{style:{backgroundColor:`#eef2ff`,color:`#312e81`},children:`Unlimited projects, priority support and advanced analytics.`}),(0,T.jsx)(l,{style:{backgroundColor:`#e0e7ff`,color:`#312e81`},children:(0,T.jsx)(i,{size:`small`,children:`Upgrade`})})]})})}var T;function E(){return(E=e((()=>{r(),o(),T=n()})))()}function D(){return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:12,width:320},children:[(0,O.jsxs)(c,{as:`a`,href:`#books/1`,variant:`outline`,padding:`small`,interactive:!0,children:[(0,O.jsx)(a,{as:`h4`,children:`The Three-Body Problem`}),(0,O.jsx)(u,{children:`A link card with hover and focus feedback`})]}),(0,O.jsxs)(c,{as:`button`,variant:`ghost`,padding:`small`,interactive:!0,children:[(0,O.jsx)(a,{as:`h4`,children:`Ghost button card`}),(0,O.jsx)(u,{children:`Transparent until hovered`})]})]})}var O;function k(){return(k=e((()=>{o(),O=n()})))()}function A(){return(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(220px, 1fr))`,gap:16,width:`100%`},children:[`outline`,`elevated`,`filled`,`ghost`].map(e=>(0,j.jsxs)(c,{variant:e,padding:`medium`,children:[(0,j.jsxs)(d,{children:[(0,j.jsx)(a,{children:e}),(0,j.jsx)(u,{children:`padding="medium"`})]}),(0,j.jsx)(s,{children:`The card pads itself; sections sit flush.`}),(0,j.jsx)(l,{children:(0,j.jsx)(i,{size:`small`,color:`neutral`,variant:`outline`,children:`Details`})})]},e))})}var j;function M(){return(M=e((()=>{r(),o(),j=n()})))()}function N(){return(0,P.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:16,width:`100%`},children:F.map(e=>(0,P.jsxs)(c,{variant:e,children:[(0,P.jsx)(d,{children:(0,P.jsx)(a,{children:e})}),(0,P.jsxs)(s,{children:[`variant="`,e,`"`]})]},e))})}var P,F;function I(){return(I=e((()=>{o(),P=n(),F=[`default`,`outline`,`elevated`,`filled`,`ghost`]})))()}var L;function R(){return(R=e((()=>{L=`import { useState } from "react";
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