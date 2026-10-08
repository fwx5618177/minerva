import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{n as r,t as i}from"./Button-BfJfx3BZ.js";import{n as a,t as o}from"./Input-BZvM2jO4.js";import{n as s,t as c}from"./Divider-mZ31f_G8.js";import{n as l,t as u}from"./ResponsiveGrid-CUcU7KVT.js";import{a as d,i as f,n as p,o as m,r as h,t as g}from"./Page-CAsbH9Pb.js";import{m as _,n as v,p as y,t as b}from"./DocPage-44Ak-YGP.js";import{S as x,n as S,t as C,w,y as T}from"./lu-CClVBj5g.js";function E(){return(0,D.jsxs)(g,{maxWidth:720,style:{padding:0},children:[(0,D.jsx)(d,{title:`Books`,description:`Every title in the catalogue.`,actions:(0,D.jsx)(r,{children:`New book`})}),(0,D.jsx)(m,{title:`Recently added`,icon:(0,D.jsx)(S,{}),actions:(0,D.jsx)(r,{color:`neutral`,variant:`outline`,children:`View all`}),children:(0,D.jsx)(`p`,{style:{margin:0},children:`Section content`})})]})}var D;function O(){return(O=e((()=>{i(),f(),w(),D=n()})))()}function k(){return(0,A.jsxs)(l,{as:`section`,"aria-label":`Metrics`,columns:{base:1,sm:3},children:[(0,A.jsx)(h,{label:`Books`,value:`1,284`,icon:(0,A.jsx)(C,{})}),(0,A.jsx)(h,{label:`Readers`,value:`9.6k`,icon:(0,A.jsx)(x,{})}),(0,A.jsx)(h,{label:`Reviews`,value:0,icon:(0,A.jsx)(T,{}),description:`No reviews yet`})]})}var A;function j(){return(j=e((()=>{u(),f(),w(),A=n()})))()}function M(){return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,N.jsxs)(p,{"aria-label":`Filters`,children:[(0,N.jsx)(a,{name:`query`,"aria-label":`Search books`,placeholder:`Search books`}),(0,N.jsx)(r,{color:`neutral`,variant:`outline`,children:`Reset`}),(0,N.jsx)(r,{children:`Apply`})]}),(0,N.jsxs)(p,{density:`compact`,wrap:!1,"aria-label":`Formatting`,children:[(0,N.jsx)(r,{size:`small`,color:`neutral`,variant:`outline`,children:`Bold`}),(0,N.jsx)(c,{orientation:`vertical`}),(0,N.jsx)(r,{size:`small`,color:`neutral`,variant:`outline`,children:`Italic`})]})]})}var N;function P(){return(P=e((()=>{i(),s(),o(),f(),N=n()})))()}var F;function I(){return(I=e((()=>{F=`import { Button, Page, PageHeader, PageSection } from "@minerva/lib-core";
import { LuBookOpen } from "react-icons/lu";

export default function BasicDemo() {
  return (
    <Page maxWidth={720} style={{ padding: 0 }}>
      <PageHeader
        title="Books"
        description="Every title in the catalogue."
        actions={<Button>New book</Button>}
      />
      <PageSection
        title="Recently added"
        icon={<LuBookOpen />}
        actions={
          <Button color="neutral" variant="outline">
            View all
          </Button>
        }
      >
        <p style={{ margin: 0 }}>Section content</p>
      </PageSection>
    </Page>
  );
}
`})))()}var L;function R(){return(R=e((()=>{L=`import { ResponsiveGrid, StatCard } from "@minerva/lib-core";
import { LuBook, LuStar, LuUsers } from "react-icons/lu";

export default function StatCardsDemo() {
  return (
    <ResponsiveGrid
      as="section"
      aria-label="Metrics"
      columns={{ base: 1, sm: 3 }}
    >
      <StatCard label="Books" value="1,284" icon={<LuBook />} />
      <StatCard label="Readers" value="9.6k" icon={<LuUsers />} />
      <StatCard
        label="Reviews"
        value={0}
        icon={<LuStar />}
        description="No reviews yet"
      />
    </ResponsiveGrid>
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { Button, Divider, Input, Toolbar } from "@minerva/lib-core";

export default function ToolbarDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Toolbar aria-label="Filters">
        <Input
          name="query"
          aria-label="Search books"
          placeholder="Search books"
        />
        <Button color="neutral" variant="outline">
          Reset
        </Button>
        <Button>Apply</Button>
      </Toolbar>
      <Toolbar density="compact" wrap={false} aria-label="Formatting">
        <Button size="small" color="neutral" variant="outline">
          Bold
        </Button>
        <Divider orientation="vertical" />
        <Button size="small" color="neutral" variant="outline">
          Italic
        </Button>
      </Toolbar>
    </div>
  );
}
`})))()}var V,H,U;function W(){return(W=e((()=>{O(),j(),P(),I(),R(),B(),t(),v(),_(),V=n(),H=y(Object.assign({"./demos/basic.tsx":E,"./demos/stat-cards.tsx":k,"./demos/toolbar.tsx":M}),Object.assign({"./demos/basic.tsx":F,"./demos/stat-cards.tsx":L,"./demos/toolbar.tsx":z})),U=()=>(0,V.jsx)(b,{id:`page`,demos:H})})))()}W();export{U as default};