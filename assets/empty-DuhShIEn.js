import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{m as r,n as i,p as a,t as o}from"./DocPage-9P1WMt4D.js";import{n as s,t as c}from"./Button-DN5Do18G.js";import{n as l,t as u}from"./Empty-CQVJ9xu8.js";import{a as d,r as f}from"./fi-Ch-SisMe.js";function p(){return(0,m.jsx)(u,{})}var m;function h(){return(h=e((()=>{l(),m=n()})))()}function g(){return(0,_.jsx)(u,{icon:(0,_.jsx)(f,{size:36}),description:(0,_.jsxs)(`span`,{children:[`No matches for `,(0,_.jsx)(`strong`,{children:`“minerva”`})]})})}var _;function v(){return(v=e((()=>{l(),d(),_=n()})))()}function y(){return(0,b.jsxs)(`div`,{style:{display:`grid`,gap:24},children:[(0,b.jsx)(u,{size:`small`,title:`No results`,description:`Try another keyword.`}),(0,b.jsx)(u,{size:`medium`,title:`No reviews yet`,description:`The first reader to write one will be featured here.`,action:(0,b.jsx)(s,{size:`small`,children:`Write a review`}),secondaryAction:(0,b.jsx)(s,{size:`small`,color:`neutral`,variant:`outline`,children:`Browse books`})})]})}var b;function x(){return(x=e((()=>{c(),l(),b=n()})))()}function S(){return(0,C.jsx)(u,{useSvg:!0,showShadow:!0,width:320,height:200,style:{backgroundColor:`#f0f7ff`,color:`#1d4ed8`},description:`Inbox zero`})}var C;function w(){return(w=e((()=>{l(),C=n()})))()}function T(){return(0,E.jsx)(u,{useSvg:!0,description:`No results found`})}var E;function D(){return(D=e((()=>{l(),E=n()})))()}function O(){return(0,k.jsx)(u,{description:`You have no projects yet`,children:(0,k.jsx)(s,{size:`small`,children:`Create project`})})}var k;function A(){return(A=e((()=>{c(),l(),k=n()})))()}var j;function M(){return(M=e((()=>{j=`import { Empty } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Empty />;
}
`})))()}var N;function P(){return(P=e((()=>{N=`import { Empty } from "@minerva/lib-core";
import { FiSearch } from "react-icons/fi";

export default function CustomIconDemo() {
  return (
    <Empty
      icon={<FiSearch size={36} />}
      description={
        <span>
          No matches for <strong>“minerva”</strong>
        </span>
      }
    />
  );
}
`})))()}var F;function I(){return(I=e((()=>{F=`import { Button, Empty } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <div style={{ display: "grid", gap: 24 }}>
      <Empty
        size="small"
        title="No results"
        description="Try another keyword."
      />
      <Empty
        size="medium"
        title="No reviews yet"
        description="The first reader to write one will be featured here."
        action={<Button size="small">Write a review</Button>}
        secondaryAction={
          <Button size="small" color="neutral" variant="outline">
            Browse books
          </Button>
        }
      />
    </div>
  );
}
`})))()}var L;function R(){return(R=e((()=>{L=`import { Empty } from "@minerva/lib-core";

export default function StyledDemo() {
  return (
    <Empty
      useSvg
      showShadow
      width={320}
      height={200}
      style={{ backgroundColor: "#f0f7ff", color: "#1d4ed8" }}
      description="Inbox zero"
    />
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { Empty } from "@minerva/lib-core";

export default function SvgDemo() {
  return <Empty useSvg description="No results found" />;
}
`})))()}var V;function H(){return(H=e((()=>{V=`import { Button, Empty } from "@minerva/lib-core";

export default function WithActionDemo() {
  return (
    <Empty description="You have no projects yet">
      <Button size="small">Create project</Button>
    </Empty>
  );
}
`})))()}var U,W,G;function K(){return(K=e((()=>{h(),v(),x(),w(),D(),A(),M(),P(),I(),R(),B(),H(),t(),i(),r(),U=n(),W=a(Object.assign({"./demos/basic.tsx":p,"./demos/custom-icon.tsx":g,"./demos/sizes.tsx":y,"./demos/styled.tsx":S,"./demos/svg.tsx":T,"./demos/with-action.tsx":O}),Object.assign({"./demos/basic.tsx":j,"./demos/custom-icon.tsx":N,"./demos/sizes.tsx":F,"./demos/styled.tsx":L,"./demos/svg.tsx":z,"./demos/with-action.tsx":V})),G=()=>(0,U.jsx)(o,{id:`empty`,demos:W})})))()}K();export{G as default};