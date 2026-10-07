import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{d as r}from"./ConfigProvider-BGZRMKW0-zZcUK1pN.js";import{Dt as i,H as a,Ut as o,an as s,pt as c,t as l}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d as u}from"./dist-CcA3uxH5.js";import{c as ee,n as d,s as f,t as te}from"./DocPage-Dm1vTl9w.js";function p(){let[e,t]=(0,m.useState)(0);return(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:`100%`},children:[(0,h.jsx)(`div`,{children:(0,h.jsx)(r,{size:`small`,onClick:()=>t(e=>e+1),children:`Replay`})}),(0,h.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:16},children:g.map(t=>(0,h.jsxs)(c,{type:`noFooter`,children:[(0,h.jsx)(a,{children:(0,h.jsx)(l,{children:t})}),(0,h.jsx)(s,{animation:t,children:`Animated content`},e)]},t))})]})}var m,h,g;function _(){return(_=e((()=>{m=t(),u(),h=n(),g=[`fadeIn`,`slideIn`,`zoomIn`]})))()}function v(){return(0,y.jsx)(`div`,{style:{width:340},children:(0,y.jsxs)(c,{children:[(0,y.jsxs)(a,{children:[(0,y.jsx)(l,{children:`Project Apollo`}),(0,y.jsx)(i,{children:`Updated 2 hours ago`})]}),(0,y.jsx)(s,{children:`A design system for building accessible, themeable interfaces.`}),(0,y.jsx)(o,{children:(0,y.jsx)(r,{size:`small`,children:`Open`})})]})})}var y;function b(){return(b=e((()=>{u(),y=n()})))()}function x(){return(0,S.jsx)(`div`,{style:{width:340},children:(0,S.jsxs)(c,{variant:`outlined`,children:[(0,S.jsxs)(a,{bgColor:`#4f46e5`,textColor:`#ffffff`,children:[(0,S.jsx)(l,{children:`Pro plan`}),(0,S.jsx)(i,{children:`Everything in Free, plus more`})]}),(0,S.jsx)(s,{bgColor:`#eef2ff`,textColor:`#312e81`,children:`Unlimited projects, priority support and advanced analytics.`}),(0,S.jsx)(o,{bgColor:`#e0e7ff`,textColor:`#312e81`,children:(0,S.jsx)(r,{size:`small`,children:`Upgrade`})})]})})}var S;function C(){return(C=e((()=>{u(),S=n()})))()}function ne(){return(0,w.jsxs)(`div`,{style:{display:`grid`,gap:12,width:320},children:[(0,w.jsxs)(c,{as:`a`,href:`#books/1`,variant:`outlined`,padding:`small`,interactive:!0,children:[(0,w.jsx)(l,{as:`h4`,children:`The Three-Body Problem`}),(0,w.jsx)(i,{children:`A link card with hover and focus feedback`})]}),(0,w.jsxs)(c,{as:`button`,variant:`ghost`,padding:`small`,interactive:!0,children:[(0,w.jsx)(l,{as:`h4`,children:`Ghost button card`}),(0,w.jsx)(i,{children:`Transparent until hovered`})]})]})}var w;function T(){return(T=e((()=>{u(),w=n()})))()}function E(){return(0,D.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(220px, 1fr))`,gap:16,width:`100%`},children:[`outlined`,`elevated`,`subtle`,`ghost`].map(e=>(0,D.jsxs)(c,{variant:e,padding:`medium`,children:[(0,D.jsxs)(a,{children:[(0,D.jsx)(l,{children:e}),(0,D.jsx)(i,{children:`padding="medium"`})]}),(0,D.jsx)(s,{children:`The card pads itself; sections sit flush.`}),(0,D.jsx)(o,{children:(0,D.jsx)(r,{size:`small`,variant:`secondary`,children:`Details`})})]},e))})}var D;function O(){return(O=e((()=>{u(),D=n()})))()}function k(){return(0,A.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:16,width:`100%`},children:j.map(e=>(0,A.jsxs)(c,{type:e,children:[(0,A.jsx)(a,{children:(0,A.jsx)(l,{children:`Header`})}),(0,A.jsxs)(s,{children:[`type="`,e,`"`]}),(0,A.jsx)(o,{children:`Footer`})]},e))})}var A,j;function M(){return(M=e((()=>{u(),A=n(),j=[`default`,`noHeader`,`noFooter`,`noHeaderFooter`]})))()}function re(){return(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:16,width:`100%`},children:P.map(e=>(0,N.jsxs)(c,{variant:e,type:`noFooter`,children:[(0,N.jsx)(a,{children:(0,N.jsx)(l,{children:e})}),(0,N.jsxs)(s,{children:[`variant="`,e,`"`]})]},e))})}var N,P;function F(){return(F=e((()=>{u(),N=n(),P=[`default`,`outlined`,`shadow`,`elevated`,`filled`,`subtle`,`ghost`]})))()}var I;function L(){return(L=e((()=>{I=`import { useState } from "react";
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
`})))()}var H;function U(){return(U=e((()=>{H=`import { Card, CardDescription, CardTitle } from "@minerva/lib-core";

export default function InteractiveDemo() {
  return (
    <div style={{ display: "grid", gap: 12, width: 320 }}>
      <Card
        as="a"
        href="#books/1"
        variant="outlined"
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
      {(["outlined", "elevated", "subtle", "ghost"] as const).map((variant) => (
        <Card key={variant} variant={variant} padding="medium">
          <CardHeader>
            <CardTitle>{variant}</CardTitle>
            <CardDescription>padding=&quot;medium&quot;</CardDescription>
          </CardHeader>
          <CardContent>The card pads itself; sections sit flush.</CardContent>
          <CardFooter>
            <Button size="small" variant="secondary">
              Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import {
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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Card, CardContent, CardHeader, CardTitle } from "@minerva/lib-core";

const variants = [
  "default",
  "outlined",
  "shadow",
  "elevated",
  "filled",
  "subtle",
  "ghost",
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
`})))()}var X,Z,Q;function $(){return($=e((()=>{_(),b(),C(),T(),O(),M(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),d(),ee(),X=n(),Z=f(Object.assign({"./demos/animation.tsx":p,"./demos/basic.tsx":v,"./demos/custom-colors.tsx":x,"./demos/interactive.tsx":ne,"./demos/padded.tsx":E,"./demos/types.tsx":k,"./demos/variants.tsx":re}),Object.assign({"./demos/animation.tsx":I,"./demos/basic.tsx":R,"./demos/custom-colors.tsx":B,"./demos/interactive.tsx":H,"./demos/padded.tsx":W,"./demos/types.tsx":K,"./demos/variants.tsx":J})),Q=()=>(0,X.jsx)(te,{id:`card`,demos:Z})})))()}$();export{Q as default};