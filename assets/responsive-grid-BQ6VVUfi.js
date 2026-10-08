import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{n as r,t as i}from"./Box-BGeGtk6C.js";import{n as a,t as o}from"./ResponsiveGrid-oyyaSgfj.js";import{n as s,t as c}from"./GridItem-zAjLXTh8.js";import{c as l,n as u,s as d,t as f}from"./DocPage-DEXoN4OO.js";function p(){return(0,m.jsx)(o,{columns:{base:1,sm:2,md:4},gap:3,children:[`One`,`Two`,`Three`,`Four`].map(e=>(0,m.jsx)(r,{p:4,bg:`bg.subtle`,rounded:`md`,children:e},e))})}var m;function h(){return(h=e((()=>{i(),a(),m=n()})))()}function g(){return(0,_.jsxs)(o,{columns:{base:1,sm:2},rowGap:2,columnGap:4,children:[(0,_.jsx)(r,{p:3,bg:`bg.subtle`,rounded:`md`,children:`Title`}),(0,_.jsx)(r,{p:3,bg:`bg.subtle`,rounded:`md`,children:`Author`}),(0,_.jsx)(c,{fullWidth:!0,children:(0,_.jsx)(r,{p:3,bg:`bg.muted`,rounded:`md`,children:`Description spans the whole row`})})]})}var _;function v(){return(v=e((()=>{i(),s(),a(),_=n()})))()}var y;function b(){return(b=e((()=>{y=`import { Box, ResponsiveGrid } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <ResponsiveGrid columns={{ base: 1, sm: 2, md: 4 }} gap={3}>
      {["One", "Two", "Three", "Four"].map((label) => (
        <Box key={label} p={4} bg="bg.subtle" rounded="md">
          {label}
        </Box>
      ))}
    </ResponsiveGrid>
  );
}
`})))()}var x;function S(){return(S=e((()=>{x=`import { Box, GridItem, ResponsiveGrid } from "@minerva/lib-core";

export default function FullWidthDemo() {
  return (
    <ResponsiveGrid columns={{ base: 1, sm: 2 }} rowGap={2} columnGap={4}>
      <Box p={3} bg="bg.subtle" rounded="md">
        Title
      </Box>
      <Box p={3} bg="bg.subtle" rounded="md">
        Author
      </Box>
      <GridItem fullWidth>
        <Box p={3} bg="bg.muted" rounded="md">
          Description spans the whole row
        </Box>
      </GridItem>
    </ResponsiveGrid>
  );
}
`})))()}var C,w,T;function E(){return(E=e((()=>{h(),v(),b(),S(),t(),u(),l(),C=n(),w=d(Object.assign({"./demos/basic.tsx":p,"./demos/full-width.tsx":g}),Object.assign({"./demos/basic.tsx":y,"./demos/full-width.tsx":x})),T=()=>(0,C.jsx)(f,{id:`responsive-grid`,demos:w})})))()}E();export{T as default};