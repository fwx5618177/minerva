import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{O as r,c as i,k as a,n as o,s,t as c}from"./DocPage-HgWiqH91.js";import{t as l}from"./space-Cvu1KikX.js";import{n as u,t as d}from"./Box-KoucklKP.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{f=`_root_1qyjx_1`,p=`_grid_1qyjx_7`,m=`_main_1qyjx_15`,h=`_aside_1qyjx_16`,g=`_md_1qyjx_21`,_=`_hasAside_1qyjx_21`,v=`_lg_1qyjx_26`,y={root:f,grid:p,main:m,aside:h,md:g,hasAside:_,lg:v}})))()}var x,S;function C(){return(C=e((()=>{r(),b(),x=n(),S=({aside:e,asideWidth:t=320,collapseBelow:n=`md`,gap:r=6,children:i,className:o,style:s,...c})=>{if(!Number.isFinite(t)||t<=0)throw RangeError(`SplitLayout asideWidth must be a finite positive number`);let u=e!=null&&e!==!1;return(0,x.jsx)(`div`,{className:a(y.root,o),style:{"--split-layout-aside-width":`${t}px`,"--split-layout-gap":l(r),...s},...c,children:(0,x.jsxs)(`div`,{className:a(y.grid,y[n],u&&y.hasAside),children:[(0,x.jsx)(`div`,{className:y.main,children:i}),u&&(0,x.jsx)(`div`,{className:y.aside,children:e})]})})}})))()}function w(){return(0,T.jsx)(S,{aside:(0,T.jsx)(u,{as:`section`,"aria-label":`Properties`,p:4,bg:`bg.muted`,rounded:`md`,children:`Properties`}),children:(0,T.jsx)(u,{as:`section`,"aria-label":`Content`,p:4,bg:`bg.subtle`,rounded:`md`,children:`Main content comes first in reading order.`})})}var T;function E(){return(E=e((()=>{d(),C(),T=n()})))()}function D(){return(0,O.jsx)(S,{asideWidth:200,collapseBelow:`lg`,gap:3,aside:(0,O.jsx)(u,{p:4,bg:`bg.muted`,rounded:`md`,children:`200px aside`}),children:(0,O.jsx)(u,{p:4,bg:`bg.subtle`,rounded:`md`,children:`Splits only when the layout is at least 1200px wide.`})})}var O;function k(){return(k=e((()=>{d(),C(),O=n()})))()}var A;function j(){return(j=e((()=>{A=`import { Box, SplitLayout } from "@minerva/lib-core";

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
`})))()}var P,F,I;function L(){return(L=e((()=>{E(),k(),j(),N(),t(),o(),i(),P=n(),F=s(Object.assign({"./demos/basic.tsx":w,"./demos/options.tsx":D}),Object.assign({"./demos/basic.tsx":A,"./demos/options.tsx":M})),I=()=>(0,P.jsx)(c,{id:`split-layout`,demos:F})})))()}L();export{I as default};