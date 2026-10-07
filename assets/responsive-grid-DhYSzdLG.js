import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Ht as r,_n as i,gt as a,on as o}from"./dist-BWNqkmth.js";import{c as s,n as c,s as l,t as u}from"./DocPage-DGOZswYH.js";function d(){return(0,f.jsx)(o,{columns:{base:1,sm:2,md:4},gap:3,children:[`One`,`Two`,`Three`,`Four`].map(e=>(0,f.jsx)(a,{p:4,bg:`bg.subtle`,rounded:`md`,children:e},e))})}var f;function p(){return(p=e((()=>{r(),f=n()})))()}function m(){return(0,h.jsxs)(o,{columns:{base:1,sm:2},rowGap:2,columnGap:4,children:[(0,h.jsx)(a,{p:3,bg:`bg.subtle`,rounded:`md`,children:`Title`}),(0,h.jsx)(a,{p:3,bg:`bg.subtle`,rounded:`md`,children:`Author`}),(0,h.jsx)(i,{fullWidth:!0,children:(0,h.jsx)(a,{p:3,bg:`bg.muted`,rounded:`md`,children:`Description spans the whole row`})})]})}var h;function g(){return(g=e((()=>{r(),h=n()})))()}var _;function v(){return(v=e((()=>{_=`import { Box, ResponsiveGrid } from "@minerva/lib-core";

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
`})))()}var y;function b(){return(b=e((()=>{y=`import { Box, GridItem, ResponsiveGrid } from "@minerva/lib-core";

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
`})))()}var x,S,C;function w(){return(w=e((()=>{p(),g(),v(),b(),t(),c(),s(),x=n(),S=l(Object.assign({"./demos/basic.tsx":d,"./demos/full-width.tsx":m}),Object.assign({"./demos/basic.tsx":_,"./demos/full-width.tsx":y})),C=()=>(0,x.jsx)(u,{id:`responsive-grid`,demos:S})})))()}w();export{C as default};