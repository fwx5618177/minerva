import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{s as r}from"./ConfigProvider-DJ6uO8m_-B80Bd_Y7.js";import{Vt as i,it as a}from"./dist-dg6ajl7p.js";import{a as o,r as s}from"./fi-Dx6NEDLG.js";import{c,n as l,s as u,t as d}from"./DocPage-Kqmidh_0.js";function f(){return(0,p.jsx)(a,{})}var p;function m(){return(m=e((()=>{i(),p=n()})))()}function h(){return(0,g.jsx)(a,{icon:(0,g.jsx)(s,{size:36}),description:(0,g.jsxs)(`span`,{children:[`No matches for `,(0,g.jsx)(`strong`,{children:`“minerva”`})]})})}var g;function _(){return(_=e((()=>{i(),o(),g=n()})))()}function v(){return(0,y.jsxs)(`div`,{style:{display:`grid`,gap:24},children:[(0,y.jsx)(a,{size:`small`,title:`No results`,description:`Try another keyword.`}),(0,y.jsx)(a,{size:`medium`,title:`No reviews yet`,description:`The first reader to write one will be featured here.`,action:(0,y.jsx)(r,{size:`small`,children:`Write a review`}),secondaryAction:(0,y.jsx)(r,{size:`small`,variant:`secondary`,children:`Browse books`})})]})}var y;function b(){return(b=e((()=>{i(),y=n()})))()}function x(){return(0,S.jsx)(a,{useSvg:!0,showShadow:!0,width:320,height:200,backgroundColor:`#f0f7ff`,color:`#1d4ed8`,description:`Inbox zero`})}var S;function C(){return(C=e((()=>{i(),S=n()})))()}function w(){return(0,T.jsx)(a,{useSvg:!0,description:`No results found`})}var T;function E(){return(E=e((()=>{i(),T=n()})))()}function D(){return(0,O.jsx)(a,{description:`You have no projects yet`,children:(0,O.jsx)(r,{size:`small`,children:`Create project`})})}var O;function k(){return(k=e((()=>{i(),O=n()})))()}var A;function j(){return(j=e((()=>{A=`import { Empty } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Empty />;
}
`})))()}var M;function N(){return(N=e((()=>{M=`import { Empty } from "@minerva/lib-core";
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
`})))()}var P;function F(){return(F=e((()=>{P=`import { Button, Empty } from "@minerva/lib-core";

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
          <Button size="small" variant="secondary">
            Browse books
          </Button>
        }
      />
    </div>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { Empty } from "@minerva/lib-core";

export default function StyledDemo() {
  return (
    <Empty
      useSvg
      showShadow
      width={320}
      height={200}
      backgroundColor="#f0f7ff"
      color="#1d4ed8"
      description="Inbox zero"
    />
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { Empty } from "@minerva/lib-core";

export default function SvgDemo() {
  return <Empty useSvg description="No results found" />;
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { Button, Empty } from "@minerva/lib-core";

export default function WithActionDemo() {
  return (
    <Empty description="You have no projects yet">
      <Button size="small">Create project</Button>
    </Empty>
  );
}
`})))()}var H,U,W;function G(){return(G=e((()=>{m(),_(),b(),C(),E(),k(),j(),N(),F(),L(),z(),V(),t(),l(),c(),H=n(),U=u(Object.assign({"./demos/basic.tsx":f,"./demos/custom-icon.tsx":h,"./demos/sizes.tsx":v,"./demos/styled.tsx":x,"./demos/svg.tsx":w,"./demos/with-action.tsx":D}),Object.assign({"./demos/basic.tsx":A,"./demos/custom-icon.tsx":M,"./demos/sizes.tsx":P,"./demos/styled.tsx":I,"./demos/svg.tsx":R,"./demos/with-action.tsx":B})),W=()=>(0,H.jsx)(d,{id:`empty`,demos:U})})))()}G();export{W as default};