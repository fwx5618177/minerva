import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{d as r}from"./ConfigProvider-BGZRMKW0-zZcUK1pN.js";import{A as i,G as a,S as o,T as ee,a as s,et as te,ot as c,rt as l,vn as u}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d}from"./dist-CcA3uxH5.js";import{c as ne,n as re,s as ie,t as ae}from"./DocPage-Dm1vTl9w.js";function oe(){return(0,f.jsx)(o,{"aria-label":`Books`,columns:m,data:p,rowKey:e=>e.id,hoverable:!0})}var f,p,m;function h(){return(h=e((()=>{d(),f=n(),p=[{id:1,title:`Dune`,author:`Frank Herbert`,score:9.1},{id:2,title:`Solaris`,author:`Stanisław Lem`,score:8.7},{id:3,title:`Hyperion`,author:`Dan Simmons`,score:8.9}],m=[{key:`title`,header:`Title`},{key:`author`,header:`Author`},{key:`score`,header:`Score`,align:`right`}]})))()}function se(){return(0,g.jsx)(o,{"aria-label":`Pages`,rowKey:e=>e.id,data:_,columns:[{key:`title`,header:`Page`,render:e=>(0,g.jsx)(c,{primary:e.title,secondary:e.description})},{key:`url`,header:`URL`,render:e=>(0,g.jsx)(c,{primary:e.url,monospace:!0,maxWidth:260})}]})}var g,_;function v(){return(v=e((()=>{d(),g=n(),_=[{id:1,title:`Getting started`,description:`Install the package, load the stylesheet and render your first component.`,url:`https://example.com/docs/getting-started/installation?ref=sidebar`},{id:2,title:`Theming`,description:`Customize tokens, palettes and the dark theme.`,url:`https://example.com/docs/theming`}]})))()}function ce(){return(0,y.jsxs)(ee,{"aria-label":`Quarterly sales`,variant:`bordered`,size:`small`,children:[(0,y.jsxs)(i,{children:[(0,y.jsxs)(u,{children:[(0,y.jsx)(s,{scope:`col`,rowSpan:2,children:`Region`}),(0,y.jsx)(s,{scope:`colgroup`,colSpan:2,children:`2025`})]}),(0,y.jsxs)(u,{children:[(0,y.jsx)(s,{scope:`col`,children:`H1`}),(0,y.jsx)(s,{scope:`col`,children:`H2`})]})]}),(0,y.jsxs)(a,{children:[(0,y.jsxs)(u,{children:[(0,y.jsx)(l,{children:`Europe`}),(0,y.jsx)(l,{children:`1.2M`}),(0,y.jsx)(l,{children:`1.5M`})]}),(0,y.jsxs)(u,{children:[(0,y.jsx)(l,{children:`Asia`}),(0,y.jsx)(l,{colSpan:2,children:`2.9M (full year)`})]})]})]})}var y;function b(){return(b=e((()=>{d(),y=n()})))()}function le(){let[e,t]=(0,x.useState)(1),[n,i]=(0,x.useState)(!1),a=C.slice((e-1)*5,e*5);return(0,S.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,S.jsx)(r,{variant:`secondary`,size:`small`,onClick:()=>i(!0),children:`Simulate an error`}),(0,S.jsx)(te,{"aria-label":`Users`,columns:w,data:a,rowKey:e=>e.id,error:n?`Could not load the users.`:void 0,onRetry:()=>i(!1),pagination:{current:e,pageSize:5,total:C.length,onChange:t}})]})}var x,S,C,w;function T(){return(T=e((()=>{x=t(),d(),S=n(),C=Array.from({length:42},(e,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`})),w=[{key:`id`,header:`ID`,width:60},{key:`name`,header:`Name`},{key:`email`,header:`Email`}]})))()}function ue(){return(0,E.jsx)(o,{"aria-label":`Orders`,columns:O,data:D,rowKey:e=>e.id,scroll:{x:1100,y:240}})}var E,D,O;function k(){return(k=e((()=>{d(),E=n(),D=Array.from({length:6},(e,t)=>({id:`#10${t+1}`,customer:[`Alice`,`Bob`,`Carol`][t%3],address:`221B Baker Street, Marylebone, London NW1 6XE, United Kingdom`,note:`Leave the parcel with the concierge if nobody answers the door`,total:`€${(t+1)*42}.00`})),O=[{key:`id`,header:`Order`,width:90,fixed:`left`},{key:`customer`,header:`Customer`,width:120,fixed:`left`},{key:`address`,header:`Address`,width:320},{key:`note`,header:`Note`,width:240,ellipsis:!0},{key:`total`,header:`Total`,width:100,align:`right`},{key:`actions`,header:`Actions`,width:110,fixed:`right`,render:()=>(0,E.jsx)(r,{size:`small`,variant:`secondary`,children:`Details`})}]})))()}function de(){let[e,t]=(0,A.useState)(!0);return(0,j.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,j.jsx)(r,{variant:`secondary`,size:`small`,onClick:()=>t(e=>!e),children:e?`Show empty state`:`Show loading state`}),(0,j.jsx)(o,{"aria-label":`Jobs`,columns:M,data:[],loading:e,loadingRows:3,emptyText:`No jobs yet`})]})}var A,j,M;function fe(){return(fe=e((()=>{A=t(),d(),j=n(),M=[{key:`name`,header:`Name`},{key:`status`,header:`Status`}]})))()}function pe(){return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,N.jsx)(o,{"aria-label":`Striped`,columns:F,data:P,variant:`striped`,size:`small`}),(0,N.jsx)(o,{"aria-label":`Bordered`,columns:F,data:P,variant:`bordered`}),(0,N.jsx)(o,{"aria-label":`Large`,columns:F,data:P,size:`large`,hoverable:!0})]})}var N,P,F;function I(){return(I=e((()=>{d(),N=n(),P=[{id:1,name:`Alice`,role:`Admin`},{id:2,name:`Bob`,role:`Editor`},{id:3,name:`Carol`,role:`Viewer`}],F=[{key:`name`,header:`Name`},{key:`role`,header:`Role`}]})))()}var L;function R(){return(R=e((()=>{L=`import { Table, type TableColumn } from "@minerva/lib-core";

interface Book {
  id: number;
  title: string;
  author: string;
  score: number;
}

const books: Book[] = [
  { id: 1, title: "Dune", author: "Frank Herbert", score: 9.1 },
  { id: 2, title: "Solaris", author: "Stanisław Lem", score: 8.7 },
  { id: 3, title: "Hyperion", author: "Dan Simmons", score: 8.9 },
];

const columns: TableColumn<Book>[] = [
  { key: "title", header: "Title" },
  { key: "author", header: "Author" },
  { key: "score", header: "Score", align: "right" },
];

export default function BasicDemo() {
  return (
    <Table
      aria-label="Books"
      columns={columns}
      data={books}
      rowKey={(book) => book.id}
      hoverable
    />
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { Table, TableCellContent } from "@minerva/lib-core";

const pages = [
  {
    id: 1,
    title: "Getting started",
    description:
      "Install the package, load the stylesheet and render your first component.",
    url: "https://example.com/docs/getting-started/installation?ref=sidebar",
  },
  {
    id: 2,
    title: "Theming",
    description: "Customize tokens, palettes and the dark theme.",
    url: "https://example.com/docs/theming",
  },
];

export default function CellContentDemo() {
  return (
    <Table
      aria-label="Pages"
      rowKey={(row) => row.id}
      data={pages}
      columns={[
        {
          key: "title",
          header: "Page",
          render: (row) => (
            <TableCellContent primary={row.title} secondary={row.description} />
          ),
        },
        {
          key: "url",
          header: "URL",
          render: (row) => (
            <TableCellContent primary={row.url} monospace maxWidth={260} />
          ),
        },
      ]}
    />
  );
}
`})))()}var V;function H(){return(H=e((()=>{V=`import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from "@minerva/lib-core";

export default function CompoundDemo() {
  return (
    <TableRoot aria-label="Quarterly sales" variant="bordered" size="small">
      <TableHead>
        <TableRow>
          <TableHeader scope="col" rowSpan={2}>
            Region
          </TableHeader>
          <TableHeader scope="colgroup" colSpan={2}>
            2025
          </TableHeader>
        </TableRow>
        <TableRow>
          <TableHeader scope="col">H1</TableHeader>
          <TableHeader scope="col">H2</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Europe</TableCell>
          <TableCell>1.2M</TableCell>
          <TableCell>1.5M</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Asia</TableCell>
          <TableCell colSpan={2}>2.9M (full year)</TableCell>
        </TableRow>
      </TableBody>
    </TableRoot>
  );
}
`})))()}var U;function W(){return(W=e((()=>{U=`import { useState } from "react";
import { Button, DataTable } from "@minerva/lib-core";

const all = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  name: \`User \${i + 1}\`,
  email: \`user\${i + 1}@example.com\`,
}));

const columns = [
  { key: "id", header: "ID", width: 60 },
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
];

export default function DataTableDemo() {
  const [page, setPage] = useState(1);
  const [failed, setFailed] = useState(false);
  // Rows are paginated by the data owner (here: a slice of a local array).
  const rows = all.slice((page - 1) * 5, page * 5);
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <Button variant="secondary" size="small" onClick={() => setFailed(true)}>
        Simulate an error
      </Button>
      <DataTable
        aria-label="Users"
        columns={columns}
        data={rows}
        rowKey={(row) => row.id}
        error={failed ? "Could not load the users." : undefined}
        onRetry={() => setFailed(false)}
        pagination={{
          current: page,
          pageSize: 5,
          total: all.length,
          onChange: setPage,
        }}
      />
    </div>
  );
}
`})))()}var G;function K(){return(K=e((()=>{G=`import { Button, Table, type TableColumn } from "@minerva/lib-core";

interface Order {
  id: string;
  customer: string;
  address: string;
  note: string;
  total: string;
}

const orders: Order[] = Array.from({ length: 6 }, (_, i) => ({
  id: \`#10\${i + 1}\`,
  customer: ["Alice", "Bob", "Carol"][i % 3],
  address: "221B Baker Street, Marylebone, London NW1 6XE, United Kingdom",
  note: "Leave the parcel with the concierge if nobody answers the door",
  total: \`€\${(i + 1) * 42}.00\`,
}));

const columns: TableColumn<Order>[] = [
  { key: "id", header: "Order", width: 90, fixed: "left" },
  { key: "customer", header: "Customer", width: 120, fixed: "left" },
  { key: "address", header: "Address", width: 320 },
  { key: "note", header: "Note", width: 240, ellipsis: true },
  { key: "total", header: "Total", width: 100, align: "right" },
  {
    key: "actions",
    header: "Actions",
    width: 110,
    fixed: "right",
    render: () => (
      <Button size="small" variant="secondary">
        Details
      </Button>
    ),
  },
];

export default function FixedColumnsDemo() {
  return (
    <Table
      aria-label="Orders"
      columns={columns}
      data={orders}
      rowKey={(order) => order.id}
      scroll={{ x: 1100, y: 240 }}
    />
  );
}
`})))()}var q;function J(){return(J=e((()=>{q=`import { useState } from "react";
import { Button, Table } from "@minerva/lib-core";

const columns = [
  { key: "name", header: "Name" },
  { key: "status", header: "Status" },
];

export default function StatesDemo() {
  const [loading, setLoading] = useState(true);
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <Button
        variant="secondary"
        size="small"
        onClick={() => setLoading((v) => !v)}
      >
        {loading ? "Show empty state" : "Show loading state"}
      </Button>
      <Table
        aria-label="Jobs"
        columns={columns}
        data={[]}
        loading={loading}
        loadingRows={3}
        emptyText="No jobs yet"
      />
    </div>
  );
}
`})))()}var Y;function X(){return(X=e((()=>{Y=`import { Table } from "@minerva/lib-core";

const rows = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "Editor" },
  { id: 3, name: "Carol", role: "Viewer" },
];

const columns = [
  { key: "name", header: "Name" },
  { key: "role", header: "Role" },
];

export default function VariantsDemo() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Table
        aria-label="Striped"
        columns={columns}
        data={rows}
        variant="striped"
        size="small"
      />
      <Table
        aria-label="Bordered"
        columns={columns}
        data={rows}
        variant="bordered"
      />
      <Table
        aria-label="Large"
        columns={columns}
        data={rows}
        size="large"
        hoverable
      />
    </div>
  );
}
`})))()}var Z,Q,$;function me(){return(me=e((()=>{h(),v(),b(),T(),k(),fe(),I(),R(),B(),H(),W(),K(),J(),X(),t(),re(),ne(),Z=n(),Q=ie(Object.assign({"./demos/basic.tsx":oe,"./demos/cell-content.tsx":se,"./demos/compound.tsx":ce,"./demos/data-table.tsx":le,"./demos/fixed-columns.tsx":ue,"./demos/states.tsx":de,"./demos/variants.tsx":pe}),Object.assign({"./demos/basic.tsx":L,"./demos/cell-content.tsx":z,"./demos/compound.tsx":V,"./demos/data-table.tsx":U,"./demos/fixed-columns.tsx":G,"./demos/states.tsx":q,"./demos/variants.tsx":Y})),$=()=>(0,Z.jsx)(ae,{id:`table`,demos:Q})})))()}me();export{$ as default};