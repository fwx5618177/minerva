import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{s as r}from"./ConfigProvider-DJ6uO8m_-B80Bd_Y7.js";import{$ as ee,A as i,Vt as a,W as te,at as o,kn as s,lt as c,o as l,w as ne,x as u}from"./dist-dg6ajl7p.js";import{c as re,n as ie,s as ae,t as oe}from"./DocPage-Kqmidh_0.js";function se(){return(0,d.jsx)(u,{"aria-label":`Books`,columns:p,data:f,rowKey:e=>e.id,hoverable:!0})}var d,f,p;function m(){return(m=e((()=>{a(),d=n(),f=[{id:1,title:`Dune`,author:`Frank Herbert`,score:9.1},{id:2,title:`Solaris`,author:`Stanisław Lem`,score:8.7},{id:3,title:`Hyperion`,author:`Dan Simmons`,score:8.9}],p=[{key:`title`,header:`Title`},{key:`author`,header:`Author`},{key:`score`,header:`Score`,align:`right`}]})))()}function ce(){return(0,h.jsx)(u,{"aria-label":`Pages`,rowKey:e=>e.id,data:g,columns:[{key:`title`,header:`Page`,render:e=>(0,h.jsx)(c,{primary:e.title,secondary:e.description})},{key:`url`,header:`URL`,render:e=>(0,h.jsx)(c,{primary:e.url,monospace:!0,maxWidth:260})}]})}var h,g;function _(){return(_=e((()=>{a(),h=n(),g=[{id:1,title:`Getting started`,description:`Install the package, load the stylesheet and render your first component.`,url:`https://example.com/docs/getting-started/installation?ref=sidebar`},{id:2,title:`Theming`,description:`Customize tokens, palettes and the dark theme.`,url:`https://example.com/docs/theming`}]})))()}function le(){return(0,v.jsxs)(ne,{"aria-label":`Quarterly sales`,variant:`bordered`,size:`small`,children:[(0,v.jsxs)(i,{children:[(0,v.jsxs)(s,{children:[(0,v.jsx)(l,{scope:`col`,rowSpan:2,children:`Region`}),(0,v.jsx)(l,{scope:`colgroup`,colSpan:2,children:`2025`})]}),(0,v.jsxs)(s,{children:[(0,v.jsx)(l,{scope:`col`,children:`H1`}),(0,v.jsx)(l,{scope:`col`,children:`H2`})]})]}),(0,v.jsxs)(te,{children:[(0,v.jsxs)(s,{children:[(0,v.jsx)(o,{children:`Europe`}),(0,v.jsx)(o,{children:`1.2M`}),(0,v.jsx)(o,{children:`1.5M`})]}),(0,v.jsxs)(s,{children:[(0,v.jsx)(o,{children:`Asia`}),(0,v.jsx)(o,{colSpan:2,children:`2.9M (full year)`})]})]})]})}var v;function y(){return(y=e((()=>{a(),v=n()})))()}function ue(){let[e,t]=(0,b.useState)(1),[n,i]=(0,b.useState)(!1),a=S.slice((e-1)*5,e*5);return(0,x.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,x.jsx)(r,{variant:`secondary`,size:`small`,onClick:()=>i(!0),children:`Simulate an error`}),(0,x.jsx)(ee,{"aria-label":`Users`,columns:C,data:a,rowKey:e=>e.id,error:n?`Could not load the users.`:void 0,onRetry:()=>i(!1),pagination:{current:e,pageSize:5,total:S.length,onChange:t}})]})}var b,x,S,C;function w(){return(w=e((()=>{b=t(),a(),x=n(),S=Array.from({length:42},(e,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`})),C=[{key:`id`,header:`ID`,width:60},{key:`name`,header:`Name`},{key:`email`,header:`Email`}]})))()}function de(){return(0,T.jsx)(u,{"aria-label":`Orders`,columns:D,data:E,rowKey:e=>e.id,scroll:{x:1100,y:240}})}var T,E,D;function O(){return(O=e((()=>{a(),T=n(),E=Array.from({length:6},(e,t)=>({id:`#10${t+1}`,customer:[`Alice`,`Bob`,`Carol`][t%3],address:`221B Baker Street, Marylebone, London NW1 6XE, United Kingdom`,note:`Leave the parcel with the concierge if nobody answers the door`,total:`€${(t+1)*42}.00`})),D=[{key:`id`,header:`Order`,width:90,fixed:`left`},{key:`customer`,header:`Customer`,width:120,fixed:`left`},{key:`address`,header:`Address`,width:320},{key:`note`,header:`Note`,width:240,ellipsis:!0},{key:`total`,header:`Total`,width:100,align:`right`},{key:`actions`,header:`Actions`,width:110,fixed:`right`,render:()=>(0,T.jsx)(r,{size:`small`,variant:`secondary`,children:`Details`})}]})))()}function fe(){let[e,t]=(0,k.useState)(!0);return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,A.jsx)(r,{variant:`secondary`,size:`small`,onClick:()=>t(e=>!e),children:e?`Show empty state`:`Show loading state`}),(0,A.jsx)(u,{"aria-label":`Jobs`,columns:j,data:[],loading:e,loadingRows:3,emptyText:`No jobs yet`})]})}var k,A,j;function pe(){return(pe=e((()=>{k=t(),a(),A=n(),j=[{key:`name`,header:`Name`},{key:`status`,header:`Status`}]})))()}function me(){return(0,M.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,M.jsx)(u,{"aria-label":`Striped`,columns:P,data:N,variant:`striped`,size:`small`}),(0,M.jsx)(u,{"aria-label":`Bordered`,columns:P,data:N,variant:`bordered`}),(0,M.jsx)(u,{"aria-label":`Large`,columns:P,data:N,size:`large`,hoverable:!0})]})}var M,N,P;function F(){return(F=e((()=>{a(),M=n(),N=[{id:1,name:`Alice`,role:`Admin`},{id:2,name:`Bob`,role:`Editor`},{id:3,name:`Carol`,role:`Viewer`}],P=[{key:`name`,header:`Name`},{key:`role`,header:`Role`}]})))()}var I;function L(){return(L=e((()=>{I=`import { Table, type TableColumn } from "@minerva/lib-core";

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
`})))()}var R;function z(){return(z=e((()=>{R=`import { Table, TableCellContent } from "@minerva/lib-core";

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
`})))()}var B;function V(){return(V=e((()=>{B=`import {
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
`})))()}var H;function U(){return(U=e((()=>{H=`import { useState } from "react";
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
`})))()}var W;function G(){return(G=e((()=>{W=`import { Button, Table, type TableColumn } from "@minerva/lib-core";

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
`})))()}var K;function q(){return(q=e((()=>{K=`import { useState } from "react";
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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { Table } from "@minerva/lib-core";

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
`})))()}var X,Z,Q;function $(){return($=e((()=>{m(),_(),y(),w(),O(),pe(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),ie(),re(),X=n(),Z=ae(Object.assign({"./demos/basic.tsx":se,"./demos/cell-content.tsx":ce,"./demos/compound.tsx":le,"./demos/data-table.tsx":ue,"./demos/fixed-columns.tsx":de,"./demos/states.tsx":fe,"./demos/variants.tsx":me}),Object.assign({"./demos/basic.tsx":I,"./demos/cell-content.tsx":R,"./demos/compound.tsx":B,"./demos/data-table.tsx":H,"./demos/fixed-columns.tsx":W,"./demos/states.tsx":K,"./demos/variants.tsx":J})),Q=()=>(0,X.jsx)(oe,{id:`table`,demos:Z})})))()}$();export{Q as default};