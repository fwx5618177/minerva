import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{n as a,t as ee}from"./useI18n-Brv-VDVY.js";import{t as o}from"./stylingHooks-GjssfG7q.js";import{n as s,t as c}from"./Button-BfJfx3BZ.js";import{N as te,T as l}from"./icons-C9qyBhWC.js";import{n as ne,t as re}from"./Pagination-BxzlKL_P.js";import{a as ie,c as ae,i as u,l as d,n as f,o as p,r as oe,s as m,t as h,u as g}from"./Table-uZLlqWKg.js";import{m as se,n as ce,p as le,t as ue}from"./DocPage-BUvZl8IZ.js";function de({pagination:e,error:t,onRetry:n,retryLabel:r,loading:i,...a}){let{t:c}=ee(),l=!!t&&!i;return(0,_.jsx)(`div`,{className:d.dataTable,"aria-busy":i||void 0,...o(`data-table`,`root`,{loading:i,size:a.size??`medium`,variant:a.variant??`simple`}),children:l?(0,_.jsxs)(`div`,{className:d.error,role:`alert`,...o(`data-table`,`error`),children:[(0,_.jsx)(`div`,{className:d.errorTitle,children:t}),n&&(0,_.jsxs)(s,{color:`neutral`,variant:`outline`,size:`small`,onClick:n,children:[(0,_.jsx)(te,{"aria-hidden":`true`,className:d.retryIcon}),r??c(`table.retry`)]})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f,{...a,loading:i}),e&&(0,_.jsx)(re,{...e})]})})}var _;function fe(){return(fe=e((()=>{a(),c(),l(),ne(),g(),u(),_=n()})))()}var v,y;function b(){return(b=e((()=>{i(),g(),v=n(),y=({primary:e,secondary:t,monospace:n=!1,maxWidth:i=360,className:a,style:ee,ref:s,...c})=>{let te=n?`code`:`div`,l=t!=null;return(0,v.jsxs)(`div`,{ref:s,className:r(d.cellContent,a),style:{maxWidth:i,...ee},...c,...o(`table-cell-content`,`root`),children:[(0,v.jsx)(te,{className:r(d.cellPrimary,n&&d.cellMono,l&&d.cellStrong),...o(`table-cell-content`,`primary`),children:e}),l&&(0,v.jsx)(`div`,{className:d.cellSecondary,...o(`table-cell-content`,`secondary`),children:t})]})}})))()}function pe(){return(0,x.jsx)(f,{"aria-label":`Books`,columns:C,data:S,rowKey:e=>e.id,hoverable:!0})}var x,S,C;function w(){return(w=e((()=>{u(),x=n(),S=[{id:1,title:`Dune`,author:`Frank Herbert`,score:9.1},{id:2,title:`Solaris`,author:`Stanisław Lem`,score:8.7},{id:3,title:`Hyperion`,author:`Dan Simmons`,score:8.9}],C=[{key:`title`,header:`Title`},{key:`author`,header:`Author`},{key:`score`,header:`Score`,align:`right`}]})))()}function me(){return(0,T.jsx)(f,{"aria-label":`Pages`,rowKey:e=>e.id,data:E,columns:[{key:`title`,header:`Page`,render:e=>(0,T.jsx)(y,{primary:e.title,secondary:e.description})},{key:`url`,header:`URL`,render:e=>(0,T.jsx)(y,{primary:e.url,monospace:!0,maxWidth:260})}]})}var T,E;function D(){return(D=e((()=>{u(),b(),T=n(),E=[{id:1,title:`Getting started`,description:`Install the package, load the stylesheet and render your first component.`,url:`https://example.com/docs/getting-started/installation?ref=sidebar`},{id:2,title:`Theming`,description:`Customize tokens, palettes and the dark theme.`,url:`https://example.com/docs/theming`}]})))()}function he(){return(0,O.jsxs)(ie,{"aria-label":`Quarterly sales`,variant:`bordered`,size:`small`,children:[(0,O.jsxs)(ae,{children:[(0,O.jsxs)(m,{children:[(0,O.jsx)(h,{scope:`col`,rowSpan:2,children:`Region`}),(0,O.jsx)(h,{scope:`colgroup`,colSpan:2,children:`2025`})]}),(0,O.jsxs)(m,{children:[(0,O.jsx)(h,{scope:`col`,children:`H1`}),(0,O.jsx)(h,{scope:`col`,children:`H2`})]})]}),(0,O.jsxs)(oe,{children:[(0,O.jsxs)(m,{children:[(0,O.jsx)(p,{children:`Europe`}),(0,O.jsx)(p,{children:`1.2M`}),(0,O.jsx)(p,{children:`1.5M`})]}),(0,O.jsxs)(m,{children:[(0,O.jsx)(p,{children:`Asia`}),(0,O.jsx)(p,{colSpan:2,children:`2.9M (full year)`})]})]})]})}var O;function k(){return(k=e((()=>{u(),O=n()})))()}function ge(){let[e,t]=(0,A.useState)(1),[n,r]=(0,A.useState)(!1),i=M.slice((e-1)*5,e*5);return(0,j.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,j.jsx)(s,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>r(!0),children:`Simulate an error`}),(0,j.jsx)(de,{"aria-label":`Users`,columns:N,data:i,rowKey:e=>e.id,error:n?`Could not load the users.`:void 0,onRetry:()=>r(!1),pagination:{current:e,pageSize:5,total:M.length,onChange:t}})]})}var A,j,M,N;function P(){return(P=e((()=>{A=t(),c(),fe(),j=n(),M=Array.from({length:42},(e,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`})),N=[{key:`id`,header:`ID`,width:60},{key:`name`,header:`Name`},{key:`email`,header:`Email`}]})))()}function _e(){return(0,F.jsx)(f,{"aria-label":`Orders`,columns:L,data:I,rowKey:e=>e.id,scroll:{x:1100,y:240}})}var F,I,L;function R(){return(R=e((()=>{c(),u(),F=n(),I=Array.from({length:6},(e,t)=>({id:`#10${t+1}`,customer:[`Alice`,`Bob`,`Carol`][t%3],address:`221B Baker Street, Marylebone, London NW1 6XE, United Kingdom`,note:`Leave the parcel with the concierge if nobody answers the door`,total:`€${(t+1)*42}.00`})),L=[{key:`id`,header:`Order`,width:90,fixed:`left`},{key:`customer`,header:`Customer`,width:120,fixed:`left`},{key:`address`,header:`Address`,width:320},{key:`note`,header:`Note`,width:240,ellipsis:!0},{key:`total`,header:`Total`,width:100,align:`right`},{key:`actions`,header:`Actions`,width:110,fixed:`right`,render:()=>(0,F.jsx)(s,{size:`small`,color:`neutral`,variant:`outline`,children:`Details`})}]})))()}function ve(){let[e,t]=(0,z.useState)([2]);return(0,B.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,B.jsx)(f,{"aria-label":`Members`,rowKey:e=>e.id,data:V,hoverable:!0,rowSelection:{selectedRowKeys:e,onChange:e=>t(e),getCheckboxProps:e=>({disabled:e.role===`Owner`}),getRowLabel:e=>e.name},columns:[{key:`name`,header:`Name`,sortable:!0},{key:`role`,header:`Role`}]}),(0,B.jsx)(`small`,{children:`${e.length} selected`})]})}var z,B,V;function H(){return(H=e((()=>{z=t(),u(),B=n(),V=[{id:1,name:`Ada Lovelace`,role:`Owner`},{id:2,name:`Alan Turing`,role:`Admin`},{id:3,name:`Grace Hopper`,role:`Editor`},{id:4,name:`Linus Torvalds`,role:`Viewer`}]})))()}function ye(){let[e,t]=(0,U.useState)({key:`latency`,order:`ascend`});return(0,W.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,W.jsx)(f,{"aria-label":`Services`,rowKey:e=>e.id,data:G,sortState:e,onSortChange:t,columns:[{key:`name`,header:`Service`,sortable:!0},{key:`region`,header:`Region`,sortable:!0},{key:`latency`,header:`Latency`,align:`right`,sortable:(e,t)=>e.latency-t.latency,render:e=>`${e.latency} ms`}]}),(0,W.jsx)(`small`,{children:e?.order?`Sorted by ${e.key} (${e.order})`:`Unsorted`})]})}var U,W,G;function K(){return(K=e((()=>{U=t(),u(),W=n(),G=[{id:1,name:`auth-api`,region:`eu-west`,latency:42},{id:2,name:`billing`,region:`us-east`,latency:118},{id:3,name:`search`,region:`ap-south`,latency:73},{id:4,name:`gateway`,region:`eu-west`,latency:9}]})))()}function be(){let[e,t]=(0,xe.useState)(!0);return(0,q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,q.jsx)(s,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>!e),children:e?`Show empty state`:`Show loading state`}),(0,q.jsx)(f,{"aria-label":`Jobs`,columns:J,data:[],loading:e,loadingRows:3,emptyText:`No jobs yet`})]})}var xe,q,J;function Y(){return(Y=e((()=>{xe=t(),c(),u(),q=n(),J=[{key:`name`,header:`Name`},{key:`status`,header:`Status`}]})))()}function Se(){return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,X.jsx)(f,{"aria-label":`Striped`,columns:Q,data:Z,variant:`striped`,size:`small`}),(0,X.jsx)(f,{"aria-label":`Bordered`,columns:Q,data:Z,variant:`bordered`}),(0,X.jsx)(f,{"aria-label":`Large`,columns:Q,data:Z,size:`large`,hoverable:!0})]})}var X,Z,Q;function Ce(){return(Ce=e((()=>{u(),X=n(),Z=[{id:1,name:`Alice`,role:`Admin`},{id:2,name:`Bob`,role:`Editor`},{id:3,name:`Carol`,role:`Viewer`}],Q=[{key:`name`,header:`Name`},{key:`role`,header:`Role`}]})))()}var we;function Te(){return(Te=e((()=>{we=`import { Table, type TableColumn } from "@minerva/lib-core";

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
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`import { Table, TableCellContent } from "@minerva/lib-core";

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
`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`import {
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
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`import { useState } from "react";
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
      <Button
        color="neutral"
        variant="outline"
        size="small"
        onClick={() => setFailed(true)}
      >
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
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`import { Button, Table, type TableColumn } from "@minerva/lib-core";

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
      <Button size="small" color="neutral" variant="outline">
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
`})))()}var Pe;function $(){return($=e((()=>{Pe=`import { useState } from "react";
import { Table, type TableRowKey } from "@minerva/lib-core";

interface Member {
  id: number;
  name: string;
  role: string;
}

const members: Member[] = [
  { id: 1, name: "Ada Lovelace", role: "Owner" },
  { id: 2, name: "Alan Turing", role: "Admin" },
  { id: 3, name: "Grace Hopper", role: "Editor" },
  { id: 4, name: "Linus Torvalds", role: "Viewer" },
];

export default function SelectionDemo() {
  const [selected, setSelected] = useState<TableRowKey[]>([2]);
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <Table
        aria-label="Members"
        rowKey={(row) => row.id}
        data={members}
        hoverable
        rowSelection={{
          selectedRowKeys: selected,
          onChange: (keys) => setSelected(keys),
          // The owner cannot be selected (skipped by "select all")
          getCheckboxProps: (row) => ({ disabled: row.role === "Owner" }),
          getRowLabel: (row) => row.name,
        }}
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "role", header: "Role" },
        ]}
      />
      <small>{\`\${selected.length} selected\`}</small>
    </div>
  );
}
`})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=`import { useState } from "react";
import { Table, type TableSortState } from "@minerva/lib-core";

interface Service {
  id: number;
  name: string;
  region: string;
  latency: number;
}

const services: Service[] = [
  { id: 1, name: "auth-api", region: "eu-west", latency: 42 },
  { id: 2, name: "billing", region: "us-east", latency: 118 },
  { id: 3, name: "search", region: "ap-south", latency: 73 },
  { id: 4, name: "gateway", region: "eu-west", latency: 9 },
];

export default function SortingDemo() {
  // Controlled: the sort state lives here (a server could sort with manualSort).
  const [sort, setSort] = useState<TableSortState | null>({
    key: "latency",
    order: "ascend",
  });
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <Table
        aria-label="Services"
        rowKey={(row) => row.id}
        data={services}
        sortState={sort}
        onSortChange={setSort}
        columns={[
          { key: "name", header: "Service", sortable: true },
          { key: "region", header: "Region", sortable: true },
          {
            key: "latency",
            header: "Latency",
            align: "right",
            // Custom compare: ascending order of two rows
            sortable: (a, b) => a.latency - b.latency,
            render: (row) => \`\${row.latency} ms\`,
          },
        ]}
      />
      <small>
        {sort?.order ? \`Sorted by \${sort.key} (\${sort.order})\` : "Unsorted"}
      </small>
    </div>
  );
}
`})))()}var Le;function Re(){return(Re=e((()=>{Le=`import { useState } from "react";
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
        color="neutral"
        variant="outline"
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
`})))()}var ze;function Be(){return(Be=e((()=>{ze=`import { Table } from "@minerva/lib-core";

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
`})))()}var Ve,He,Ue;function We(){return(We=e((()=>{w(),D(),k(),P(),R(),H(),K(),Y(),Ce(),Te(),De(),ke(),je(),Ne(),$(),Ie(),Re(),Be(),t(),ce(),se(),Ve=n(),He=le(Object.assign({"./demos/basic.tsx":pe,"./demos/cell-content.tsx":me,"./demos/compound.tsx":he,"./demos/data-table.tsx":ge,"./demos/fixed-columns.tsx":_e,"./demos/selection.tsx":ve,"./demos/sorting.tsx":ye,"./demos/states.tsx":be,"./demos/variants.tsx":Se}),Object.assign({"./demos/basic.tsx":we,"./demos/cell-content.tsx":Ee,"./demos/compound.tsx":Oe,"./demos/data-table.tsx":Ae,"./demos/fixed-columns.tsx":Me,"./demos/selection.tsx":Pe,"./demos/sorting.tsx":Fe,"./demos/states.tsx":Le,"./demos/variants.tsx":ze})),Ue=()=>(0,Ve.jsx)(ue,{id:`table`,demos:He})})))()}We();export{Ue as default};