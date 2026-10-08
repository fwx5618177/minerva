import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{m as r,n as i,p as a,t as o}from"./DocPage-CVA4UCUb.js";import{n as s,t as c}from"./Button-DoMjJPcZ.js";import{n as l,t as u}from"./Input-AV5F_Ft8.js";import{n as d,t as f}from"./Divider-BmCVJVft.js";import{n as p,t as m}from"./ResponsiveGrid-BvhxDDdN.js";import{a as h,i as g,n as _,o as v,r as y,t as b}from"./Page-BdDRNhkm.js";import{C as x,T as S,b as C,n as w,t as T}from"./lu-DNouP3-B.js";function E(){return(0,D.jsxs)(b,{maxWidth:720,style:{padding:0},children:[(0,D.jsx)(h,{title:`Books`,description:`Every title in the catalogue.`,actions:(0,D.jsx)(s,{children:`New book`})}),(0,D.jsx)(v,{title:`Recently added`,icon:(0,D.jsx)(w,{}),actions:(0,D.jsx)(s,{color:`neutral`,variant:`outline`,children:`View all`}),children:(0,D.jsx)(`p`,{style:{margin:0},children:`Section content`})})]})}var D;function O(){return(O=e((()=>{c(),g(),S(),D=n()})))()}function k(){return(0,A.jsxs)(p,{as:`section`,"aria-label":`Metrics`,columns:{base:1,sm:3},children:[(0,A.jsx)(y,{label:`Books`,value:`1,284`,icon:(0,A.jsx)(T,{})}),(0,A.jsx)(y,{label:`Readers`,value:`9.6k`,icon:(0,A.jsx)(x,{})}),(0,A.jsx)(y,{label:`Reviews`,value:0,icon:(0,A.jsx)(C,{}),description:`No reviews yet`})]})}var A;function j(){return(j=e((()=>{m(),g(),S(),A=n()})))()}function M(){return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,N.jsxs)(_,{"aria-label":`Filters`,children:[(0,N.jsx)(l,{name:`query`,"aria-label":`Search books`,placeholder:`Search books`}),(0,N.jsx)(s,{color:`neutral`,variant:`outline`,children:`Reset`}),(0,N.jsx)(s,{children:`Apply`})]}),(0,N.jsxs)(_,{density:`compact`,wrap:!1,"aria-label":`Formatting`,children:[(0,N.jsx)(s,{size:`small`,color:`neutral`,variant:`outline`,children:`Bold`}),(0,N.jsx)(f,{orientation:`vertical`}),(0,N.jsx)(s,{size:`small`,color:`neutral`,variant:`outline`,children:`Italic`})]})]})}var N;function P(){return(P=e((()=>{c(),d(),u(),g(),N=n()})))()}var F;function I(){return(I=e((()=>{F=`import { Button, Page, PageHeader, PageSection } from "minerva-design";
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
`})))()}var L;function R(){return(R=e((()=>{L=`import { ResponsiveGrid, StatCard } from "minerva-design";
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
`})))()}var z;function B(){return(B=e((()=>{z=`import { Button, Divider, Input, Toolbar } from "minerva-design";

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
`})))()}var V,H,U;function W(){return(W=e((()=>{O(),j(),P(),I(),R(),B(),t(),i(),r(),V=n(),H=a(Object.assign({"./demos/basic.tsx":E,"./demos/stat-cards.tsx":k,"./demos/toolbar.tsx":M}),Object.assign({"./demos/basic.tsx":F,"./demos/stat-cards.tsx":L,"./demos/toolbar.tsx":z})),U=()=>(0,V.jsx)(o,{id:`page`,demos:H})})))()}W();export{U as default};