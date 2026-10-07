import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{t as a}from"./space-Cvu1KikX.js";import{n as o,t as s}from"./Box-ByhNhZSL.js";import{c,n as l,s as u,t as d}from"./DocPage-DzKszXiH.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{f=`_root_1qyjx_1`,p=`_grid_1qyjx_7`,m=`_main_1qyjx_15`,h=`_aside_1qyjx_16`,g=`_md_1qyjx_21`,_=`_hasAside_1qyjx_21`,v=`_lg_1qyjx_26`,y={root:f,grid:p,main:m,aside:h,md:g,hasAside:_,lg:v}})))()}var x,S;function C(){return(C=e((()=>{i(),b(),x=n(),S=({aside:e,asideWidth:t=320,collapseBelow:n=`md`,gap:i=6,children:o,className:s,style:c,...l})=>{if(!Number.isFinite(t)||t<=0)throw RangeError(`SplitLayout asideWidth must be a finite positive number`);let u=e!=null&&e!==!1;return(0,x.jsx)(`div`,{className:r(y.root,s),style:{"--split-layout-aside-width":`${t}px`,"--split-layout-gap":a(i),...c},...l,children:(0,x.jsxs)(`div`,{className:r(y.grid,y[n],u&&y.hasAside),children:[(0,x.jsx)(`div`,{className:y.main,children:o}),u&&(0,x.jsx)(`div`,{className:y.aside,children:e})]})})}})))()}function w(){return(0,T.jsx)(S,{aside:(0,T.jsx)(o,{as:`section`,"aria-label":`Properties`,p:4,bg:`bg.muted`,rounded:`md`,children:`Properties`}),children:(0,T.jsx)(o,{as:`section`,"aria-label":`Content`,p:4,bg:`bg.subtle`,rounded:`md`,children:`Main content comes first in reading order.`})})}var T;function E(){return(E=e((()=>{s(),C(),T=n()})))()}function D(){return(0,O.jsx)(S,{asideWidth:200,collapseBelow:`lg`,gap:3,aside:(0,O.jsx)(o,{p:4,bg:`bg.muted`,rounded:`md`,children:`200px aside`}),children:(0,O.jsx)(o,{p:4,bg:`bg.subtle`,rounded:`md`,children:`Splits only when the layout is at least 1200px wide.`})})}var O;function k(){return(k=e((()=>{s(),C(),O=n()})))()}var A;function j(){return(j=e((()=>{A=`import { Box, SplitLayout } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <SplitLayout
      aside={
        <Box
          as="section"
          aria-label="Properties"
          p={4}
          bg="bg.muted"
          rounded="md"
        >
          Properties
        </Box>
      }
    >
      <Box as="section" aria-label="Content" p={4} bg="bg.subtle" rounded="md">
        Main content comes first in reading order.
      </Box>
    </SplitLayout>
  );
}
`})))()}var M;function N(){return(N=e((()=>{M=`import { Box, SplitLayout } from "@minerva/lib-core";

export default function OptionsDemo() {
  return (
    <SplitLayout
      asideWidth={200}
      collapseBelow="lg"
      gap={3}
      aside={
        <Box p={4} bg="bg.muted" rounded="md">
          200px aside
        </Box>
      }
    >
      <Box p={4} bg="bg.subtle" rounded="md">
        Splits only when the layout is at least 1200px wide.
      </Box>
    </SplitLayout>
  );
}
`})))()}var P,F,I;function L(){return(L=e((()=>{E(),k(),j(),N(),t(),l(),c(),P=n(),F=u(Object.assign({"./demos/basic.tsx":w,"./demos/options.tsx":D}),Object.assign({"./demos/basic.tsx":A,"./demos/options.tsx":M})),I=()=>(0,P.jsx)(d,{id:`split-layout`,demos:F})})))()}L();export{I as default};