import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{Ot as r,en as i}from"./minerva-web-components-gmidRbuG.js";import{m as a,n as o,p as s,t as ee}from"./DocPage-OkRujup2.js";import{n as c,t as l}from"./useI18n-7NNo_JVm.js";import{t as u}from"./stylingHooks-GjssfG7q.js";import{n as d,t as f}from"./Button-BJTVw8sA.js";import{N as te,T as ne}from"./icons-Dj0E45-e.js";import{n as re,t as ie}from"./Pagination-DJwcQRzs.js";import{a as ae,c as oe,i as p,l as m,n as h,o as g,r as se,s as _,t as v,u as y}from"./Table-Be-dQKP2.js";function ce({pagination:e,error:t,onRetry:n,retryLabel:r,loading:i,...a}){let{t:o}=l(),s=!!t&&!i;return(0,b.jsx)(`div`,{className:m.dataTable,"aria-busy":i||void 0,...u(`data-table`,`root`,{loading:i,size:a.size??`medium`,variant:a.variant??`simple`}),children:s?(0,b.jsxs)(`div`,{className:m.error,role:`alert`,...u(`data-table`,`error`),children:[(0,b.jsx)(`div`,{className:m.errorTitle,children:t}),n&&(0,b.jsxs)(d,{color:`neutral`,variant:`outline`,size:`small`,onClick:n,children:[(0,b.jsx)(te,{"aria-hidden":`true`,className:m.retryIcon}),r??o(`table.retry`)]})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h,{...a,loading:i}),e&&(0,b.jsx)(re,{...e})]})})}var b;function le(){return(le=e((()=>{c(),f(),ne(),ie(),y(),p(),b=n()})))()}var x,S;function ue(){return(ue=e((()=>{r(),y(),x=n(),S=({primary:e,secondary:t,monospace:n=!1,maxWidth:r=360,className:a,style:o,ref:s,...ee})=>{let c=n?`code`:`div`,l=t!=null;return(0,x.jsxs)(`div`,{ref:s,className:i(m.cellContent,a),style:{maxWidth:r,...o},...ee,...u(`table-cell-content`,`root`),children:[(0,x.jsx)(c,{className:i(m.cellPrimary,n&&m.cellMono,l&&m.cellStrong),...u(`table-cell-content`,`primary`),children:e}),l&&(0,x.jsx)(`div`,{className:m.cellSecondary,...u(`table-cell-content`,`secondary`),children:t})]})}})))()}function de(){return(0,C.jsx)(h,{"aria-label":`Books`,columns:T,data:w,rowKey:e=>e.id,hoverable:!0})}var C,w,T;function E(){return(E=e((()=>{p(),C=n(),w=[{id:1,title:`Dune`,author:`Frank Herbert`,score:9.1},{id:2,title:`Solaris`,author:`Stanisław Lem`,score:8.7},{id:3,title:`Hyperion`,author:`Dan Simmons`,score:8.9}],T=[{key:`title`,header:`Title`},{key:`author`,header:`Author`},{key:`score`,header:`Score`,align:`right`}]})))()}function fe(){return(0,D.jsx)(h,{"aria-label":`Pages`,rowKey:e=>e.id,data:O,columns:[{key:`title`,header:`Page`,render:e=>(0,D.jsx)(S,{primary:e.title,secondary:e.description})},{key:`url`,header:`URL`,render:e=>(0,D.jsx)(S,{primary:e.url,monospace:!0,maxWidth:260})}]})}var D,O;function k(){return(k=e((()=>{p(),ue(),D=n(),O=[{id:1,title:`Getting started`,description:`Install the package, load the stylesheet and render your first component.`,url:`https://example.com/docs/getting-started/installation?ref=sidebar`},{id:2,title:`Theming`,description:`Customize tokens, palettes and the dark theme.`,url:`https://example.com/docs/theming`}]})))()}function pe(){return(0,A.jsxs)(ae,{"aria-label":`Quarterly sales`,variant:`bordered`,size:`small`,children:[(0,A.jsxs)(oe,{children:[(0,A.jsxs)(_,{children:[(0,A.jsx)(v,{scope:`col`,rowSpan:2,children:`Region`}),(0,A.jsx)(v,{scope:`colgroup`,colSpan:2,children:`2025`})]}),(0,A.jsxs)(_,{children:[(0,A.jsx)(v,{scope:`col`,children:`H1`}),(0,A.jsx)(v,{scope:`col`,children:`H2`})]})]}),(0,A.jsxs)(se,{children:[(0,A.jsxs)(_,{children:[(0,A.jsx)(g,{children:`Europe`}),(0,A.jsx)(g,{children:`1.2M`}),(0,A.jsx)(g,{children:`1.5M`})]}),(0,A.jsxs)(_,{children:[(0,A.jsx)(g,{children:`Asia`}),(0,A.jsx)(g,{colSpan:2,children:`2.9M (full year)`})]})]})]})}var A;function j(){return(j=e((()=>{p(),A=n()})))()}function me(){let[e,t]=(0,M.useState)(1),[n,r]=(0,M.useState)(!1),i=P.slice((e-1)*5,e*5);return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,N.jsx)(d,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>r(!0),children:`Simulate an error`}),(0,N.jsx)(ce,{"aria-label":`Users`,columns:F,data:i,rowKey:e=>e.id,error:n?`Could not load the users.`:void 0,onRetry:()=>r(!1),pagination:{current:e,pageSize:5,total:P.length,onChange:t}})]})}var M,N,P,F;function I(){return(I=e((()=>{M=t(),f(),le(),N=n(),P=Array.from({length:42},(e,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`})),F=[{key:`id`,header:`ID`,width:60},{key:`name`,header:`Name`},{key:`email`,header:`Email`}]})))()}function he(){return(0,L.jsx)(h,{"aria-label":`Orders`,columns:z,data:R,rowKey:e=>e.id,scroll:{x:1100,y:240}})}var L,R,z;function B(){return(B=e((()=>{f(),p(),L=n(),R=Array.from({length:6},(e,t)=>({id:`#10${t+1}`,customer:[`Alice`,`Bob`,`Carol`][t%3],address:`221B Baker Street, Marylebone, London NW1 6XE, United Kingdom`,note:`Leave the parcel with the concierge if nobody answers the door`,total:`€${(t+1)*42}.00`})),z=[{key:`id`,header:`Order`,width:90,fixed:`left`},{key:`customer`,header:`Customer`,width:120,fixed:`left`},{key:`address`,header:`Address`,width:320},{key:`note`,header:`Note`,width:240,ellipsis:!0},{key:`total`,header:`Total`,width:100,align:`right`},{key:`actions`,header:`Actions`,width:110,fixed:`right`,render:()=>(0,L.jsx)(d,{size:`small`,color:`neutral`,variant:`outline`,children:`Details`})}]})))()}function ge(){let[e,t]=(0,V.useState)([2]);return(0,H.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,H.jsx)(h,{"aria-label":`Members`,rowKey:e=>e.id,data:U,hoverable:!0,rowSelection:{selectedRowKeys:e,onChange:e=>t(e),getCheckboxProps:e=>({disabled:e.role===`Owner`}),getRowLabel:e=>e.name},columns:[{key:`name`,header:`Name`,sortable:!0},{key:`role`,header:`Role`}]}),(0,H.jsx)(`small`,{children:`${e.length} selected`})]})}var V,H,U;function W(){return(W=e((()=>{V=t(),p(),H=n(),U=[{id:1,name:`Ada Lovelace`,role:`Owner`},{id:2,name:`Alan Turing`,role:`Admin`},{id:3,name:`Grace Hopper`,role:`Editor`},{id:4,name:`Linus Torvalds`,role:`Viewer`}]})))()}function _e(){let[e,t]=(0,G.useState)({key:`latency`,order:`ascend`});return(0,K.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,K.jsx)(h,{"aria-label":`Services`,rowKey:e=>e.id,data:q,sortState:e,onSortChange:t,columns:[{key:`name`,header:`Service`,sortable:!0},{key:`region`,header:`Region`,sortable:!0},{key:`latency`,header:`Latency`,align:`right`,sortable:(e,t)=>e.latency-t.latency,render:e=>`${e.latency} ms`}]}),(0,K.jsx)(`small`,{children:e?.order?`Sorted by ${e.key} (${e.order})`:`Unsorted`})]})}var G,K,q;function J(){return(J=e((()=>{G=t(),p(),K=n(),q=[{id:1,name:`auth-api`,region:`eu-west`,latency:42},{id:2,name:`billing`,region:`us-east`,latency:118},{id:3,name:`search`,region:`ap-south`,latency:73},{id:4,name:`gateway`,region:`eu-west`,latency:9}]})))()}function ve(){let[e,t]=(0,ye.useState)(!0);return(0,Y.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Y.jsx)(d,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>!e),children:e?`Show empty state`:`Show loading state`}),(0,Y.jsx)(h,{"aria-label":`Jobs`,columns:be,data:[],loading:e,loadingRows:3,emptyText:`No jobs yet`})]})}var ye,Y,be;function xe(){return(xe=e((()=>{ye=t(),f(),p(),Y=n(),be=[{key:`name`,header:`Name`},{key:`status`,header:`Status`}]})))()}function Se(){return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,X.jsx)(h,{"aria-label":`Striped`,columns:Q,data:Z,variant:`striped`,size:`small`}),(0,X.jsx)(h,{"aria-label":`Bordered`,columns:Q,data:Z,variant:`bordered`}),(0,X.jsx)(h,{"aria-label":`Large`,columns:Q,data:Z,size:`large`,hoverable:!0})]})}var X,Z,Q;function Ce(){return(Ce=e((()=>{p(),X=n(),Z=[{id:1,name:`Alice`,role:`Admin`},{id:2,name:`Bob`,role:`Editor`},{id:3,name:`Carol`,role:`Viewer`}],Q=[{key:`name`,header:`Name`},{key:`role`,header:`Role`}]})))()}var we;function Te(){return(Te=e((()=>{we=`import { Table, type TableColumn } from "minerva-design";

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
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`import { Table, TableCellContent } from "minerva-design";

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
} from "minerva-design";

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
import { Button, DataTable } from "minerva-design";

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
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`import { Button, Table, type TableColumn } from "minerva-design";

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
import { Table, type TableRowKey } from "minerva-design";

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
import { Table, type TableSortState } from "minerva-design";

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
import { Button, Table } from "minerva-design";

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
`})))()}var ze;function Be(){return(Be=e((()=>{ze=`import { Table } from "minerva-design";

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
`})))()}var Ve,He,Ue;function We(){return(We=e((()=>{E(),k(),j(),I(),B(),W(),J(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),$(),Ie(),Re(),Be(),t(),o(),a(),Ve=n(),He=s(Object.assign({"./demos/basic.tsx":de,"./demos/cell-content.tsx":fe,"./demos/compound.tsx":pe,"./demos/data-table.tsx":me,"./demos/fixed-columns.tsx":he,"./demos/selection.tsx":ge,"./demos/sorting.tsx":_e,"./demos/states.tsx":ve,"./demos/variants.tsx":Se}),Object.assign({"./demos/basic.tsx":we,"./demos/cell-content.tsx":Ee,"./demos/compound.tsx":Oe,"./demos/data-table.tsx":Ae,"./demos/fixed-columns.tsx":Me,"./demos/selection.tsx":Pe,"./demos/sorting.tsx":Fe,"./demos/states.tsx":Le,"./demos/variants.tsx":ze})),Ue=()=>(0,Ve.jsx)(ee,{id:`table`,demos:He})})))()}We();export{Ue as default};