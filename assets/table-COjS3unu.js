import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{n as a,t as ee}from"./useI18n-Brv-VDVY.js";import{t as o}from"./stylingHooks-GjssfG7q.js";import{n as s,t as c}from"./Button-BfJfx3BZ.js";import{N as l,T as u}from"./icons-C9qyBhWC.js";import{n as te,t as ne}from"./Pagination-CMks5iRn.js";import{a as d,c as re,i as ie,l as f,n as p,o as ae,r as m,s as h,t as g,u as _}from"./Table-ljyhwXdR.js";import{m as oe,n as se,p as ce,t as le}from"./DocPage-44Ak-YGP.js";function ue({pagination:e,error:t,onRetry:n,retryLabel:r,loading:i,...a}){let{t:c}=ee(),u=!!t&&!i;return(0,v.jsx)(`div`,{className:f.dataTable,"aria-busy":i||void 0,...o(`data-table`,`root`,{loading:i,size:a.size??`medium`,variant:a.variant??`simple`}),children:u?(0,v.jsxs)(`div`,{className:f.error,role:`alert`,...o(`data-table`,`error`),children:[(0,v.jsx)(`div`,{className:f.errorTitle,children:t}),n&&(0,v.jsxs)(s,{color:`neutral`,variant:`outline`,size:`small`,onClick:n,children:[(0,v.jsx)(l,{"aria-hidden":`true`,className:f.retryIcon}),r??c(`table.retry`)]})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p,{...a,loading:i}),e&&(0,v.jsx)(ne,{...e})]})})}var v;function de(){return(de=e((()=>{a(),c(),u(),te(),_(),d(),v=n()})))()}var y,b;function x(){return(x=e((()=>{i(),_(),y=n(),b=({primary:e,secondary:t,monospace:n=!1,maxWidth:i=360,className:a,style:ee,ref:s,...c})=>{let l=n?`code`:`div`,u=t!=null;return(0,y.jsxs)(`div`,{ref:s,className:r(f.cellContent,a),style:{maxWidth:i,...ee},...c,...o(`table-cell-content`,`root`),children:[(0,y.jsx)(l,{className:r(f.cellPrimary,n&&f.cellMono,u&&f.cellStrong),...o(`table-cell-content`,`primary`),children:e}),u&&(0,y.jsx)(`div`,{className:f.cellSecondary,...o(`table-cell-content`,`secondary`),children:t})]})}})))()}function fe(){return(0,S.jsx)(p,{"aria-label":`Books`,columns:w,data:C,rowKey:e=>e.id,hoverable:!0})}var S,C,w;function T(){return(T=e((()=>{d(),S=n(),C=[{id:1,title:`Dune`,author:`Frank Herbert`,score:9.1},{id:2,title:`Solaris`,author:`Stanisław Lem`,score:8.7},{id:3,title:`Hyperion`,author:`Dan Simmons`,score:8.9}],w=[{key:`title`,header:`Title`},{key:`author`,header:`Author`},{key:`score`,header:`Score`,align:`right`}]})))()}function pe(){return(0,E.jsx)(p,{"aria-label":`Pages`,rowKey:e=>e.id,data:D,columns:[{key:`title`,header:`Page`,render:e=>(0,E.jsx)(b,{primary:e.title,secondary:e.description})},{key:`url`,header:`URL`,render:e=>(0,E.jsx)(b,{primary:e.url,monospace:!0,maxWidth:260})}]})}var E,D;function O(){return(O=e((()=>{d(),x(),E=n(),D=[{id:1,title:`Getting started`,description:`Install the package, load the stylesheet and render your first component.`,url:`https://example.com/docs/getting-started/installation?ref=sidebar`},{id:2,title:`Theming`,description:`Customize tokens, palettes and the dark theme.`,url:`https://example.com/docs/theming`}]})))()}function me(){return(0,k.jsxs)(ae,{"aria-label":`Quarterly sales`,variant:`bordered`,size:`small`,children:[(0,k.jsxs)(re,{children:[(0,k.jsxs)(h,{children:[(0,k.jsx)(m,{scope:`col`,rowSpan:2,children:`Region`}),(0,k.jsx)(m,{scope:`colgroup`,colSpan:2,children:`2025`})]}),(0,k.jsxs)(h,{children:[(0,k.jsx)(m,{scope:`col`,children:`H1`}),(0,k.jsx)(m,{scope:`col`,children:`H2`})]})]}),(0,k.jsxs)(ie,{children:[(0,k.jsxs)(h,{children:[(0,k.jsx)(g,{children:`Europe`}),(0,k.jsx)(g,{children:`1.2M`}),(0,k.jsx)(g,{children:`1.5M`})]}),(0,k.jsxs)(h,{children:[(0,k.jsx)(g,{children:`Asia`}),(0,k.jsx)(g,{colSpan:2,children:`2.9M (full year)`})]})]})]})}var k;function A(){return(A=e((()=>{d(),k=n()})))()}function he(){let[e,t]=(0,j.useState)(1),[n,r]=(0,j.useState)(!1),i=N.slice((e-1)*5,e*5);return(0,M.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,M.jsx)(s,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>r(!0),children:`Simulate an error`}),(0,M.jsx)(ue,{"aria-label":`Users`,columns:P,data:i,rowKey:e=>e.id,error:n?`Could not load the users.`:void 0,onRetry:()=>r(!1),pagination:{current:e,pageSize:5,total:N.length,onChange:t}})]})}var j,M,N,P;function F(){return(F=e((()=>{j=t(),c(),de(),M=n(),N=Array.from({length:42},(e,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`})),P=[{key:`id`,header:`ID`,width:60},{key:`name`,header:`Name`},{key:`email`,header:`Email`}]})))()}function ge(){return(0,I.jsx)(p,{"aria-label":`Orders`,columns:R,data:L,rowKey:e=>e.id,scroll:{x:1100,y:240}})}var I,L,R;function z(){return(z=e((()=>{c(),d(),I=n(),L=Array.from({length:6},(e,t)=>({id:`#10${t+1}`,customer:[`Alice`,`Bob`,`Carol`][t%3],address:`221B Baker Street, Marylebone, London NW1 6XE, United Kingdom`,note:`Leave the parcel with the concierge if nobody answers the door`,total:`€${(t+1)*42}.00`})),R=[{key:`id`,header:`Order`,width:90,fixed:`left`},{key:`customer`,header:`Customer`,width:120,fixed:`left`},{key:`address`,header:`Address`,width:320},{key:`note`,header:`Note`,width:240,ellipsis:!0},{key:`total`,header:`Total`,width:100,align:`right`},{key:`actions`,header:`Actions`,width:110,fixed:`right`,render:()=>(0,I.jsx)(s,{size:`small`,color:`neutral`,variant:`outline`,children:`Details`})}]})))()}function _e(){let[e,t]=(0,B.useState)([2]);return(0,V.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,V.jsx)(p,{"aria-label":`Members`,rowKey:e=>e.id,data:H,hoverable:!0,rowSelection:{selectedRowKeys:e,onChange:e=>t(e),getCheckboxProps:e=>({disabled:e.role===`Owner`}),getRowLabel:e=>e.name},columns:[{key:`name`,header:`Name`,sortable:!0},{key:`role`,header:`Role`}]}),(0,V.jsx)(`small`,{children:`${e.length} selected`})]})}var B,V,H;function U(){return(U=e((()=>{B=t(),d(),V=n(),H=[{id:1,name:`Ada Lovelace`,role:`Owner`},{id:2,name:`Alan Turing`,role:`Admin`},{id:3,name:`Grace Hopper`,role:`Editor`},{id:4,name:`Linus Torvalds`,role:`Viewer`}]})))()}function ve(){let[e,t]=(0,W.useState)({key:`latency`,order:`ascend`});return(0,G.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,G.jsx)(p,{"aria-label":`Services`,rowKey:e=>e.id,data:K,sortState:e,onSortChange:t,columns:[{key:`name`,header:`Service`,sortable:!0},{key:`region`,header:`Region`,sortable:!0},{key:`latency`,header:`Latency`,align:`right`,sortable:(e,t)=>e.latency-t.latency,render:e=>`${e.latency} ms`}]}),(0,G.jsx)(`small`,{children:e?.order?`Sorted by ${e.key} (${e.order})`:`Unsorted`})]})}var W,G,K;function q(){return(q=e((()=>{W=t(),d(),G=n(),K=[{id:1,name:`auth-api`,region:`eu-west`,latency:42},{id:2,name:`billing`,region:`us-east`,latency:118},{id:3,name:`search`,region:`ap-south`,latency:73},{id:4,name:`gateway`,region:`eu-west`,latency:9}]})))()}function ye(){let[e,t]=(0,be.useState)(!0);return(0,J.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,J.jsx)(s,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>!e),children:e?`Show empty state`:`Show loading state`}),(0,J.jsx)(p,{"aria-label":`Jobs`,columns:Y,data:[],loading:e,loadingRows:3,emptyText:`No jobs yet`})]})}var be,J,Y;function xe(){return(xe=e((()=>{be=t(),c(),d(),J=n(),Y=[{key:`name`,header:`Name`},{key:`status`,header:`Status`}]})))()}function Se(){return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,X.jsx)(p,{"aria-label":`Striped`,columns:Q,data:Z,variant:`striped`,size:`small`}),(0,X.jsx)(p,{"aria-label":`Bordered`,columns:Q,data:Z,variant:`bordered`}),(0,X.jsx)(p,{"aria-label":`Large`,columns:Q,data:Z,size:`large`,hoverable:!0})]})}var X,Z,Q;function Ce(){return(Ce=e((()=>{d(),X=n(),Z=[{id:1,name:`Alice`,role:`Admin`},{id:2,name:`Bob`,role:`Editor`},{id:3,name:`Carol`,role:`Viewer`}],Q=[{key:`name`,header:`Name`},{key:`role`,header:`Role`}]})))()}var we;function Te(){return(Te=e((()=>{we=`import { Table, type TableColumn } from "@minerva/lib-core";

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
`})))()}var Ve,He,Ue;function We(){return(We=e((()=>{T(),O(),A(),F(),z(),U(),q(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),$(),Ie(),Re(),Be(),t(),se(),oe(),Ve=n(),He=ce(Object.assign({"./demos/basic.tsx":fe,"./demos/cell-content.tsx":pe,"./demos/compound.tsx":me,"./demos/data-table.tsx":he,"./demos/fixed-columns.tsx":ge,"./demos/selection.tsx":_e,"./demos/sorting.tsx":ve,"./demos/states.tsx":ye,"./demos/variants.tsx":Se}),Object.assign({"./demos/basic.tsx":we,"./demos/cell-content.tsx":Ee,"./demos/compound.tsx":Oe,"./demos/data-table.tsx":Ae,"./demos/fixed-columns.tsx":Me,"./demos/selection.tsx":Pe,"./demos/sorting.tsx":Fe,"./demos/states.tsx":Le,"./demos/variants.tsx":ze})),Ue=()=>(0,Ve.jsx)(le,{id:`table`,demos:He})})))()}We();export{Ue as default};