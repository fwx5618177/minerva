import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Nt as r,k as i}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d as a}from"./dist-CcA3uxH5.js";import{c as o,n as s,s as c,t as l}from"./DocPage-Dm1vTl9w.js";function u(){return(0,d.jsx)(r,{aside:(0,d.jsx)(i,{as:`section`,"aria-label":`Properties`,p:4,bg:`bg.muted`,rounded:`md`,children:`Properties`}),children:(0,d.jsx)(i,{as:`section`,"aria-label":`Content`,p:4,bg:`bg.subtle`,rounded:`md`,children:`Main content comes first in reading order.`})})}var d;function f(){return(f=e((()=>{a(),d=n()})))()}function p(){return(0,m.jsx)(r,{asideWidth:200,collapseBelow:`lg`,gap:3,aside:(0,m.jsx)(i,{p:4,bg:`bg.muted`,rounded:`md`,children:`200px aside`}),children:(0,m.jsx)(i,{p:4,bg:`bg.subtle`,rounded:`md`,children:`Splits only when the layout is at least 1200px wide.`})})}var m;function h(){return(h=e((()=>{a(),m=n()})))()}var g;function _(){return(_=e((()=>{g=`import { Box, SplitLayout } from "@minerva/lib-core";

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
`})))()}var v;function y(){return(y=e((()=>{v=`import { Box, SplitLayout } from "@minerva/lib-core";

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
`})))()}var b,x,S;function C(){return(C=e((()=>{f(),h(),_(),y(),t(),s(),o(),b=n(),x=c(Object.assign({"./demos/basic.tsx":u,"./demos/options.tsx":p}),Object.assign({"./demos/basic.tsx":g,"./demos/options.tsx":v})),S=()=>(0,b.jsx)(l,{id:`split-layout`,demos:x})})))()}C();export{S as default};