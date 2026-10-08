import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Ct as r,X as i,cn as a}from"./minerva-web-components-e9i9Tzii.js";import{t as o}from"./stylingHooks-GjssfG7q.js";import{n as s,t as c}from"./Box-COgmB1hH.js";import{m as l,n as u,p as d,t as f}from"./DocPage-BUvZl8IZ.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{p=`_root_1qyjx_1`,m=`_grid_1qyjx_7`,h=`_main_1qyjx_15`,g=`_aside_1qyjx_16`,_=`_md_1qyjx_21`,v=`_hasAside_1qyjx_21`,y=`_lg_1qyjx_26`,b={root:p,grid:m,main:h,aside:g,md:_,hasAside:v,lg:y}})))()}var S,C;function w(){return(w=e((()=>{a(),x(),S=n(),C=({aside:e,asideWidth:t=320,collapseBelow:n=`md`,gap:a=6,children:s,className:c,style:l,...u})=>{if(!Number.isFinite(t)||t<=0)throw RangeError(`SplitLayout asideWidth must be a finite positive number`);let d=e!=null&&e!==!1;return(0,S.jsx)(`div`,{className:i(b.root,c),style:{"--split-layout-aside-width":`${t}px`,"--split-layout-gap":r(a),...l},...u,...o(`split-layout`,`root`),children:(0,S.jsxs)(`div`,{className:i(b.grid,b[n],d&&b.hasAside),children:[(0,S.jsx)(`div`,{className:b.main,...o(`split-layout`,`main`),children:s}),d&&(0,S.jsx)(`div`,{className:b.aside,...o(`split-layout`,`aside`),children:e})]})})}})))()}function T(){return(0,E.jsx)(C,{aside:(0,E.jsx)(s,{as:`section`,"aria-label":`Properties`,p:4,bg:`bg.muted`,rounded:`md`,children:`Properties`}),children:(0,E.jsx)(s,{as:`section`,"aria-label":`Content`,p:4,bg:`bg.subtle`,rounded:`md`,children:`Main content comes first in reading order.`})})}var E;function D(){return(D=e((()=>{c(),w(),E=n()})))()}function O(){return(0,k.jsx)(C,{asideWidth:200,collapseBelow:`lg`,gap:3,aside:(0,k.jsx)(s,{p:4,bg:`bg.muted`,rounded:`md`,children:`200px aside`}),children:(0,k.jsx)(s,{p:4,bg:`bg.subtle`,rounded:`md`,children:`Splits only when the layout is at least 1200px wide.`})})}var k;function A(){return(A=e((()=>{c(),w(),k=n()})))()}var j;function M(){return(M=e((()=>{j=`import { Box, SplitLayout } from "@minerva/lib-core";

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
`})))()}var N;function P(){return(P=e((()=>{N=`import { Box, SplitLayout } from "@minerva/lib-core";

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
`})))()}var F,I,L;function R(){return(R=e((()=>{D(),A(),M(),P(),t(),u(),l(),F=n(),I=d(Object.assign({"./demos/basic.tsx":T,"./demos/options.tsx":O}),Object.assign({"./demos/basic.tsx":j,"./demos/options.tsx":N})),L=()=>(0,F.jsx)(f,{id:`split-layout`,demos:I})})))()}R();export{L as default};