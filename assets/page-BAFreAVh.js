import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{$t as i,Ht as a,J as o,Lt as s,Pt as c,Rt as l,on as u,un as d,zt as f}from"./dist-BWNqkmth.js";import{B as p,M as m,R as h,n as g,t as _}from"./lu-B0X0EWxp.js";import{c as v,n as y,s as b,t as x}from"./DocPage-DGOZswYH.js";function S(){return(0,C.jsxs)(c,{maxWidth:720,style:{padding:0},children:[(0,C.jsx)(d,{title:`Books`,description:`Every title in the catalogue.`,actions:(0,C.jsx)(r,{children:`New book`})}),(0,C.jsx)(i,{title:`Recently added`,icon:(0,C.jsx)(g,{}),actions:(0,C.jsx)(r,{variant:`secondary`,children:`View all`}),children:(0,C.jsx)(`p`,{style:{margin:0},children:`Section content`})})]})}var C;function w(){return(w=e((()=>{a(),p(),C=n()})))()}function T(){return(0,E.jsxs)(u,{as:`section`,"aria-label":`Metrics`,columns:{base:1,sm:3},children:[(0,E.jsx)(s,{label:`Books`,value:`1,284`,icon:(0,E.jsx)(_,{})}),(0,E.jsx)(s,{label:`Readers`,value:`9.6k`,icon:(0,E.jsx)(h,{})}),(0,E.jsx)(s,{label:`Reviews`,value:0,icon:(0,E.jsx)(m,{}),description:`No reviews yet`})]})}var E;function D(){return(D=e((()=>{a(),p(),E=n()})))()}function O(){return(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,k.jsxs)(l,{"aria-label":`Filters`,children:[(0,k.jsx)(o,{name:`query`,label:`Search books`}),(0,k.jsx)(r,{variant:`secondary`,children:`Reset`}),(0,k.jsx)(r,{children:`Apply`})]}),(0,k.jsxs)(l,{density:`compact`,wrap:!1,"aria-label":`Formatting`,children:[(0,k.jsx)(r,{size:`small`,variant:`secondary`,children:`Bold`}),(0,k.jsx)(f,{orientation:`vertical`}),(0,k.jsx)(r,{size:`small`,variant:`secondary`,children:`Italic`})]})]})}var k;function A(){return(A=e((()=>{a(),k=n()})))()}var j;function M(){return(M=e((()=>{j=`import { Button, Page, PageHeader, PageSection } from "@minerva/lib-core";
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
        actions={<Button variant="secondary">View all</Button>}
      >
        <p style={{ margin: 0 }}>Section content</p>
      </PageSection>
    </Page>
  );
}
`})))()}var N;function P(){return(P=e((()=>{N=`import { ResponsiveGrid, StatCard } from "@minerva/lib-core";
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
`})))()}var F;function I(){return(I=e((()=>{F=`import { Button, Divider, TextField, Toolbar } from "@minerva/lib-core";

export default function ToolbarDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Toolbar aria-label="Filters">
        <TextField name="query" label="Search books" />
        <Button variant="secondary">Reset</Button>
        <Button>Apply</Button>
      </Toolbar>
      <Toolbar density="compact" wrap={false} aria-label="Formatting">
        <Button size="small" variant="secondary">
          Bold
        </Button>
        <Divider orientation="vertical" />
        <Button size="small" variant="secondary">
          Italic
        </Button>
      </Toolbar>
    </div>
  );
}
`})))()}var L,R,z;function B(){return(B=e((()=>{w(),D(),A(),M(),P(),I(),t(),y(),v(),L=n(),R=b(Object.assign({"./demos/basic.tsx":S,"./demos/stat-cards.tsx":T,"./demos/toolbar.tsx":O}),Object.assign({"./demos/basic.tsx":j,"./demos/stat-cards.tsx":N,"./demos/toolbar.tsx":F})),z=()=>(0,L.jsx)(x,{id:`page`,demos:R})})))()}B();export{z as default};