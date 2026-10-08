import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{N as r,o as i,vt as a}from"./minerva-web-components-ByJsjP0z.js";import{m as o,n as s,p as c,t as l}from"./DocPage-CVA4UCUb.js";import{t as u}from"./stylingHooks-GjssfG7q.js";import{n as d,t as f}from"./Box-DeqpNKSL.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{p=`_root_1qyjx_1`,m=`_grid_1qyjx_7`,h=`_main_1qyjx_15`,g=`_aside_1qyjx_16`,_=`_md_1qyjx_21`,v=`_hasAside_1qyjx_21`,y=`_lg_1qyjx_26`,b={root:p,grid:m,main:h,aside:g,md:_,hasAside:v,lg:y}})))()}var S,C;function w(){return(w=e((()=>{a(),x(),S=n(),C=({aside:e,asideWidth:t=320,collapseBelow:n=`md`,gap:a=6,children:o,className:s,style:c,...l})=>{if(!Number.isFinite(t)||t<=0)throw RangeError(`SplitLayout asideWidth must be a finite positive number`);let d=e!=null&&e!==!1;return(0,S.jsx)(`div`,{className:i(b.root,s),style:{"--split-layout-aside-width":`${t}px`,"--split-layout-gap":r(a),...c},...l,...u(`split-layout`,`root`),children:(0,S.jsxs)(`div`,{className:i(b.grid,b[n],d&&b.hasAside),children:[(0,S.jsx)(`div`,{className:b.main,...u(`split-layout`,`main`),children:o}),d&&(0,S.jsx)(`div`,{className:b.aside,...u(`split-layout`,`aside`),children:e})]})})}})))()}function T(){return(0,E.jsx)(C,{aside:(0,E.jsx)(d,{as:`section`,"aria-label":`Properties`,p:4,bg:`bg.muted`,rounded:`md`,children:`Properties`}),children:(0,E.jsx)(d,{as:`section`,"aria-label":`Content`,p:4,bg:`bg.subtle`,rounded:`md`,children:`Main content comes first in reading order.`})})}var E;function D(){return(D=e((()=>{f(),w(),E=n()})))()}function O(){return(0,k.jsx)(C,{asideWidth:200,collapseBelow:`lg`,gap:3,aside:(0,k.jsx)(d,{p:4,bg:`bg.muted`,rounded:`md`,children:`200px aside`}),children:(0,k.jsx)(d,{p:4,bg:`bg.subtle`,rounded:`md`,children:`Splits only when the layout is at least 1200px wide.`})})}var k;function A(){return(A=e((()=>{f(),w(),k=n()})))()}var j;function M(){return(M=e((()=>{j=`import { Box, SplitLayout } from "minerva-design";

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
`})))()}var N;function P(){return(P=e((()=>{N=`import { Box, SplitLayout } from "minerva-design";

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
`})))()}var F,I,L;function R(){return(R=e((()=>{D(),A(),M(),P(),t(),s(),o(),F=n(),I=c(Object.assign({"./demos/basic.tsx":T,"./demos/options.tsx":O}),Object.assign({"./demos/basic.tsx":j,"./demos/options.tsx":N})),L=()=>(0,F.jsx)(l,{id:`split-layout`,demos:I})})))()}R();export{L as default};