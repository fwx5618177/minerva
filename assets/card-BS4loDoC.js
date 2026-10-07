import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{At as i,It as a,Jt as o,Nt as s,Rt as c,rn as l,yt as u}from"./dist-DkgrNLMS.js";import{c as d,n as f,s as p,t as m}from"./DocPage-Bnv84vTs.js";function h(){let[e,t]=(0,g.useState)(0);return(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:`100%`},children:[(0,_.jsx)(`div`,{children:(0,_.jsx)(r,{size:`small`,onClick:()=>t(e=>e+1),children:`Replay`})}),(0,_.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:16},children:v.map(t=>(0,_.jsxs)(i,{children:[(0,_.jsx)(l,{children:(0,_.jsx)(o,{children:t})}),(0,_.jsx)(s,{animation:t,children:`Animated content`},e)]},t))})]})}var g,_,v;function y(){return(y=e((()=>{g=t(),c(),_=n(),v=[`fadeIn`,`slideIn`,`zoomIn`]})))()}function b(){return(0,x.jsx)(`div`,{style:{width:340},children:(0,x.jsxs)(i,{children:[(0,x.jsxs)(l,{children:[(0,x.jsx)(o,{children:`Project Apollo`}),(0,x.jsx)(a,{children:`Updated 2 hours ago`})]}),(0,x.jsx)(s,{children:`A design system for building accessible, themeable interfaces.`}),(0,x.jsx)(u,{children:(0,x.jsx)(r,{size:`small`,children:`Open`})})]})})}var x;function S(){return(S=e((()=>{c(),x=n()})))()}function C(){return(0,w.jsx)(`div`,{style:{width:340},children:(0,w.jsxs)(i,{variant:`outline`,children:[(0,w.jsxs)(l,{style:{backgroundColor:`#4f46e5`,color:`#ffffff`},children:[(0,w.jsx)(o,{children:`Pro plan`}),(0,w.jsx)(a,{children:`Everything in Free, plus more`})]}),(0,w.jsx)(s,{style:{backgroundColor:`#eef2ff`,color:`#312e81`},children:`Unlimited projects, priority support and advanced analytics.`}),(0,w.jsx)(u,{style:{backgroundColor:`#e0e7ff`,color:`#312e81`},children:(0,w.jsx)(r,{size:`small`,children:`Upgrade`})})]})})}var w;function T(){return(T=e((()=>{c(),w=n()})))()}function E(){return(0,D.jsxs)(`div`,{style:{display:`grid`,gap:12,width:320},children:[(0,D.jsxs)(i,{as:`a`,href:`#books/1`,variant:`outline`,padding:`small`,interactive:!0,children:[(0,D.jsx)(o,{as:`h4`,children:`The Three-Body Problem`}),(0,D.jsx)(a,{children:`A link card with hover and focus feedback`})]}),(0,D.jsxs)(i,{as:`button`,variant:`ghost`,padding:`small`,interactive:!0,children:[(0,D.jsx)(o,{as:`h4`,children:`Ghost button card`}),(0,D.jsx)(a,{children:`Transparent until hovered`})]})]})}var D;function O(){return(O=e((()=>{c(),D=n()})))()}function k(){return(0,A.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(220px, 1fr))`,gap:16,width:`100%`},children:[`outline`,`elevated`,`filled`,`ghost`].map(e=>(0,A.jsxs)(i,{variant:e,padding:`medium`,children:[(0,A.jsxs)(l,{children:[(0,A.jsx)(o,{children:e}),(0,A.jsx)(a,{children:`padding="medium"`})]}),(0,A.jsx)(s,{children:`The card pads itself; sections sit flush.`}),(0,A.jsx)(u,{children:(0,A.jsx)(r,{size:`small`,color:`neutral`,variant:`outline`,children:`Details`})})]},e))})}var A;function j(){return(j=e((()=>{c(),A=n()})))()}function M(){return(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:16,width:`100%`},children:P.map(e=>(0,N.jsxs)(i,{variant:e,children:[(0,N.jsx)(l,{children:(0,N.jsx)(o,{children:e})}),(0,N.jsxs)(s,{children:[`variant="`,e,`"`]})]},e))})}var N,P;function F(){return(F=e((()=>{c(),N=n(),P=[`default`,`outline`,`elevated`,`filled`,`ghost`]})))()}var I;function L(){return(L=e((()=>{I=`import { useState } from "react";
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
`})))()}var R;function z(){return(z=e((()=>{R=`import {
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
`})))()}var B;function V(){return(V=e((()=>{B=`import {
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
`})))()}var H;function U(){return(U=e((()=>{H=`import { Card, CardDescription, CardTitle } from "@minerva/lib-core";

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
`})))()}var W;function G(){return(G=e((()=>{W=`import {
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
`})))()}var K;function q(){return(q=e((()=>{K=`import { Card, CardContent, CardHeader, CardTitle } from "@minerva/lib-core";

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
`})))()}var J,Y,X;function Z(){return(Z=e((()=>{y(),S(),T(),O(),j(),F(),L(),z(),V(),U(),G(),q(),t(),f(),d(),J=n(),Y=p(Object.assign({"./demos/animation.tsx":h,"./demos/basic.tsx":b,"./demos/custom-colors.tsx":C,"./demos/interactive.tsx":E,"./demos/padded.tsx":k,"./demos/variants.tsx":M}),Object.assign({"./demos/animation.tsx":I,"./demos/basic.tsx":R,"./demos/custom-colors.tsx":B,"./demos/interactive.tsx":H,"./demos/padded.tsx":W,"./demos/variants.tsx":K})),X=()=>(0,J.jsx)(m,{id:`card`,demos:Y})})))()}Z();export{X as default};