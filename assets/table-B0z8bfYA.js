import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{$t as r,X as i,cn as a,en as o,nn as s}from"./minerva-web-components-e9i9Tzii.js";import{Q as c,Z as l}from"./io5-Db3ldn2O.js";import{n as u,t as ee}from"./useI18n-Brv-VDVY.js";import{n as d,t as f}from"./Button-DP6INRXF.js";import{C as te,N as p,T as m,j as ne,k as re}from"./icons-C9qyBhWC.js";import{n as h,t as g}from"./Pagination-DiiB6JXt.js";import{c as ie,n as ae,s as oe,t as _}from"./DocPage-BeqNKFhE.js";function se(e){return r(e)}function v(){return(v=e((()=>{a()})))()}var ce,y,le,b,ue,de,x,fe,S,C,pe,w,T,E,D,me,O,he,ge,_e,k,A,ve,j,ye,be,xe,M;function N(){return(N=e((()=>{ce=`_wrapper_1bm9i_1`,y=`_dataTable_1bm9i_15`,le=`_table_1bm9i_25`,b=`_scrollX_1bm9i_80`,ue=`_wrapperScrollY_1bm9i_84`,de=`_striped_1bm9i_94`,x=`_wrapperBordered_1bm9i_99`,fe=`_hoverable_1bm9i_104`,S=`_selectionCell_1bm9i_114`,C=`_checkbox_1bm9i_119`,pe=`_sortButton_1bm9i_135`,w=`_sortLabel_1bm9i_158`,T=`_sortIcon_1bm9i_164`,E=`_small_1bm9i_173`,D=`_medium_1bm9i_179`,me=`_large_1bm9i_185`,O=`_empty_1bm9i_191`,he=`_skeleton_1bm9i_197`,ge=`_tableSkeletonPulse_1bm9i_1`,_e=`_error_1bm9i_216`,k=`_errorTitle_1bm9i_228`,A=`_retryIcon_1bm9i_235`,ve=`_cellContent_1bm9i_240`,j=`_cellPrimary_1bm9i_249`,ye=`_cellStrong_1bm9i_253`,be=`_cellMono_1bm9i_257`,xe=`_cellSecondary_1bm9i_261`,M={wrapper:ce,dataTable:y,table:le,scrollX:b,wrapperScrollY:ue,striped:de,wrapperBordered:x,hoverable:fe,selectionCell:S,checkbox:C,sortButton:pe,sortLabel:w,sortIcon:T,small:E,medium:D,large:me,empty:O,skeleton:he,tableSkeletonPulse:ge,error:_e,errorTitle:k,retryIcon:A,cellContent:ve,cellPrimary:j,cellStrong:ye,cellMono:be,cellSecondary:xe}})))()}function P({columns:e,data:t,rowKey:n,emptyText:r,loading:i=!1,loadingRows:a=5,sortState:c,defaultSortState:u,onSortChange:d,manualSort:f=!1,rowSelection:p,...m}){let{t:h}=ee(),g=se(e),{rightOffsets:ie,lastLeftFixedKey:ae,firstRightFixedKey:oe}=g,_=p!==void 0,v=_&&e[0]?.fixed===`left`,ce=v?V:0,[y,le]=l({value:c,defaultValue:u??null,onChange:e=>{e&&d?.(e)},name:`Table`,prop:`sortState`}),[b,ue]=l({value:p?.selectedRowKeys,defaultValue:p?.defaultSelectedRowKeys??[],name:`Table`,prop:`rowSelection.selectedRowKeys`,defaultProp:`rowSelection.defaultSelectedRowKeys`}),de=(e,t)=>n?n(e,t):t,x=t.map((e,t)=>({row:e,index:t,key:de(e,t)})),fe=y?.order??null,S=fe===null?void 0:e.find(e=>e.key===y?.key),C=S?o(S):null,pe=!f&&C?[...x].sort((e,t)=>fe===`descend`?C(t.row,e.row):C(e.row,t.row)):x,w=new Set(b),T=e=>!!p?.getCheckboxProps?.(e).disabled,E=x.filter(e=>!T(e.row)),D=E.length>0&&E.every(e=>w.has(e.key)),me=!D&&x.some(e=>w.has(e.key)),O=e=>{ue(e);let t=new Set(e);p?.onChange?.(e,x.filter(e=>t.has(e.key)).map(e=>e.row))},he=(e,t)=>O(t?[...b.filter(t=>t!==e),e]:b.filter(t=>t!==e)),ge=()=>{let e=new Set(E.map(e=>e.key));O(D?b.filter(t=>!e.has(t)):[...b,...E.map(e=>e.key).filter(e=>!w.has(e))])},_e=e=>{let t={textAlign:e.align},n=L(e.width);return n!==void 0&&(t.width=n,t.minWidth=n),e.fixed===`left`?t.left=`${(g.leftOffsets[e.key]??0)+ce}px`:e.fixed===`right`&&(t.right=`${ie[e.key]??0}px`),t},k=e=>({style:_e(e),"data-ellipsis":e.ellipsis?`true`:void 0,"data-fixed":e.fixed,"data-fixed-edge":e.fixed===`left`&&e.key===ae?`left`:e.fixed===`right`&&e.key===oe?`right`:void 0}),A={className:M.selectionCell,style:{width:V,minWidth:V,...v?{left:0}:{}},"data-fixed":v?`left`:void 0},ve=e.length+ +!!_,j;j=i?Array.from({length:a},(t,n)=>(0,I.jsxs)(R,{"aria-hidden":`true`,children:[_&&(0,I.jsx)(B,{...A}),e.map(e=>(0,I.jsx)(B,{...k(e),"data-ellipsis":void 0,children:(0,I.jsx)(`span`,{className:M.skeleton})},e.key))]},`skeleton-${n}`)):t.length===0?(0,I.jsx)(R,{children:(0,I.jsx)(B,{colSpan:ve,className:M.empty,children:r??h(`table.empty`)})}):pe.map(({row:t,index:n,key:r},i)=>{let a=_&&w.has(r);return(0,I.jsxs)(R,{"aria-selected":a||void 0,"data-selected":a||void 0,children:[_&&(0,I.jsx)(B,{...A,children:(0,I.jsx)(`input`,{type:`checkbox`,className:M.checkbox,checked:a,disabled:T(t),"aria-label":h(`table.selectRow`,{row:p.getRowLabel?.(t,n)??String(r)}),onChange:e=>he(r,e.target.checked)})}),e.map(e=>(0,I.jsx)(B,{...k(e),children:e.render?e.render(t,i):t[e.key]},e.key))]},r)});let ye=e=>{if(!e.sortable)return(0,I.jsx)(z,{scope:`col`,...k(e),children:e.header},e.key);let t=y?.key===e.key?y.order:null,n=t===`ascend`?re:t===`descend`?ne:te;return(0,I.jsx)(z,{scope:`col`,"aria-sort":t?Te[t]:`none`,...k(e),children:(0,I.jsxs)(`button`,{type:`button`,className:M.sortButton,"data-sort-order":t??void 0,onClick:()=>le(s(y,e.key)),children:[(0,I.jsx)(`span`,{className:M.sortLabel,children:e.header}),(0,I.jsx)(n,{"aria-hidden":`true`,className:M.sortIcon})]})},e.key)};return(0,I.jsxs)(Se,{...m,children:[(0,I.jsx)(Ce,{children:(0,I.jsxs)(R,{children:[_&&(0,I.jsx)(z,{scope:`col`,...A,children:(0,I.jsx)(`input`,{type:`checkbox`,className:M.checkbox,checked:D,disabled:E.length===0||i,"aria-label":h(`table.selectAll`),ref:e=>{e&&(e.indeterminate=me)},onChange:ge})}),e.map(ye)]})}),(0,I.jsx)(we,{children:j})]})}var F,I,L,Se,Ce,we,R,z,B,Te,V;function H(){return(H=e((()=>{a(),u(),m(),c(),v(),N(),F=t(),I=n(),L=e=>e===void 0?void 0:typeof e==`number`?`${e}px`:e,Se=({size:e=`medium`,variant:t=`simple`,hoverable:n=!1,scroll:r,className:a,style:o,ref:s,...c})=>{let{t:l}=ee(),u=L(r?.x),d=L(r?.y),f=(0,F.useRef)(null),[te,p]=(0,F.useState)(!1);(0,F.useEffect)(()=>{let e=f.current;if(!e)return;let t=()=>p(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight);if(t(),typeof ResizeObserver>`u`)return;let n=new ResizeObserver(t);return n.observe(e),e.firstElementChild&&n.observe(e.firstElementChild),()=>n.disconnect()},[]);let m=!!(u||d)||te,ne=c[`aria-labelledby`],re=m?{role:`region`,tabIndex:0,"aria-labelledby":ne,"aria-label":ne?void 0:c[`aria-label`]??l(`table.scrollRegion`)}:void 0,h=d?{maxHeight:d,overflowY:`auto`}:void 0,g=u||o?{...u?{minWidth:u}:{},...o}:void 0;return(0,I.jsx)(`div`,{ref:f,...re,className:i(M.wrapper,t===`bordered`&&M.wrapperBordered,d&&M.wrapperScrollY),style:h,children:(0,I.jsx)(`table`,{ref:s,className:i(M.table,M[e],M[t],n&&M.hoverable,u&&M.scrollX,a),style:g,...c})})},Ce=({ref:e,...t})=>(0,I.jsx)(`thead`,{ref:e,...t}),we=({ref:e,...t})=>(0,I.jsx)(`tbody`,{ref:e,...t}),R=({ref:e,...t})=>(0,I.jsx)(`tr`,{ref:e,...t}),z=({ref:e,...t})=>(0,I.jsx)(`th`,{ref:e,...t}),B=({ref:e,...t})=>(0,I.jsx)(`td`,{ref:e,...t}),Te={ascend:`ascending`,descend:`descending`},V=48})))()}function Ee({pagination:e,error:t,onRetry:n,retryLabel:r,loading:i,...a}){let{t:o}=ee(),s=!!t&&!i;return(0,U.jsx)(`div`,{className:M.dataTable,"aria-busy":i||void 0,children:s?(0,U.jsxs)(`div`,{className:M.error,role:`alert`,children:[(0,U.jsx)(`div`,{className:M.errorTitle,children:t}),n&&(0,U.jsxs)(f,{color:`neutral`,variant:`outline`,size:`small`,onClick:n,children:[(0,U.jsx)(p,{"aria-hidden":`true`,className:M.retryIcon}),r??o(`table.retry`)]})]}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(P,{...a,loading:i}),e&&(0,U.jsx)(g,{...e})]})})}var U;function De(){return(De=e((()=>{u(),d(),m(),h(),N(),H(),U=n()})))()}var W,Oe;function ke(){return(ke=e((()=>{a(),N(),W=n(),Oe=({primary:e,secondary:t,monospace:n=!1,maxWidth:r=360,className:a,style:o,ref:s,...c})=>{let l=n?`code`:`div`,u=t!=null;return(0,W.jsxs)(`div`,{ref:s,className:i(M.cellContent,a),style:{maxWidth:r,...o},...c,children:[(0,W.jsx)(l,{className:i(M.cellPrimary,n&&M.cellMono,u&&M.cellStrong),children:e}),u&&(0,W.jsx)(`div`,{className:M.cellSecondary,children:t})]})}})))()}function Ae(){return(0,je.jsx)(P,{"aria-label":`Books`,columns:Ne,data:Me,rowKey:e=>e.id,hoverable:!0})}var je,Me,Ne;function Pe(){return(Pe=e((()=>{H(),je=n(),Me=[{id:1,title:`Dune`,author:`Frank Herbert`,score:9.1},{id:2,title:`Solaris`,author:`Stanisław Lem`,score:8.7},{id:3,title:`Hyperion`,author:`Dan Simmons`,score:8.9}],Ne=[{key:`title`,header:`Title`},{key:`author`,header:`Author`},{key:`score`,header:`Score`,align:`right`}]})))()}function Fe(){return(0,G.jsx)(P,{"aria-label":`Pages`,rowKey:e=>e.id,data:Ie,columns:[{key:`title`,header:`Page`,render:e=>(0,G.jsx)(Oe,{primary:e.title,secondary:e.description})},{key:`url`,header:`URL`,render:e=>(0,G.jsx)(Oe,{primary:e.url,monospace:!0,maxWidth:260})}]})}var G,Ie;function Le(){return(Le=e((()=>{H(),ke(),G=n(),Ie=[{id:1,title:`Getting started`,description:`Install the package, load the stylesheet and render your first component.`,url:`https://example.com/docs/getting-started/installation?ref=sidebar`},{id:2,title:`Theming`,description:`Customize tokens, palettes and the dark theme.`,url:`https://example.com/docs/theming`}]})))()}function Re(){return(0,K.jsxs)(Se,{"aria-label":`Quarterly sales`,variant:`bordered`,size:`small`,children:[(0,K.jsxs)(Ce,{children:[(0,K.jsxs)(R,{children:[(0,K.jsx)(z,{scope:`col`,rowSpan:2,children:`Region`}),(0,K.jsx)(z,{scope:`colgroup`,colSpan:2,children:`2025`})]}),(0,K.jsxs)(R,{children:[(0,K.jsx)(z,{scope:`col`,children:`H1`}),(0,K.jsx)(z,{scope:`col`,children:`H2`})]})]}),(0,K.jsxs)(we,{children:[(0,K.jsxs)(R,{children:[(0,K.jsx)(B,{children:`Europe`}),(0,K.jsx)(B,{children:`1.2M`}),(0,K.jsx)(B,{children:`1.5M`})]}),(0,K.jsxs)(R,{children:[(0,K.jsx)(B,{children:`Asia`}),(0,K.jsx)(B,{colSpan:2,children:`2.9M (full year)`})]})]})]})}var K;function ze(){return(ze=e((()=>{H(),K=n()})))()}function Be(){let[e,t]=(0,Ve.useState)(1),[n,r]=(0,Ve.useState)(!1),i=He.slice((e-1)*5,e*5);return(0,q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,q.jsx)(f,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>r(!0),children:`Simulate an error`}),(0,q.jsx)(Ee,{"aria-label":`Users`,columns:Ue,data:i,rowKey:e=>e.id,error:n?`Could not load the users.`:void 0,onRetry:()=>r(!1),pagination:{current:e,pageSize:5,total:He.length,onChange:t}})]})}var Ve,q,He,Ue;function We(){return(We=e((()=>{Ve=t(),d(),De(),q=n(),He=Array.from({length:42},(e,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`})),Ue=[{key:`id`,header:`ID`,width:60},{key:`name`,header:`Name`},{key:`email`,header:`Email`}]})))()}function Ge(){return(0,Ke.jsx)(P,{"aria-label":`Orders`,columns:Je,data:qe,rowKey:e=>e.id,scroll:{x:1100,y:240}})}var Ke,qe,Je;function Ye(){return(Ye=e((()=>{d(),H(),Ke=n(),qe=Array.from({length:6},(e,t)=>({id:`#10${t+1}`,customer:[`Alice`,`Bob`,`Carol`][t%3],address:`221B Baker Street, Marylebone, London NW1 6XE, United Kingdom`,note:`Leave the parcel with the concierge if nobody answers the door`,total:`€${(t+1)*42}.00`})),Je=[{key:`id`,header:`Order`,width:90,fixed:`left`},{key:`customer`,header:`Customer`,width:120,fixed:`left`},{key:`address`,header:`Address`,width:320},{key:`note`,header:`Note`,width:240,ellipsis:!0},{key:`total`,header:`Total`,width:100,align:`right`},{key:`actions`,header:`Actions`,width:110,fixed:`right`,render:()=>(0,Ke.jsx)(f,{size:`small`,color:`neutral`,variant:`outline`,children:`Details`})}]})))()}function Xe(){let[e,t]=(0,Ze.useState)([2]);return(0,J.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,J.jsx)(P,{"aria-label":`Members`,rowKey:e=>e.id,data:Qe,hoverable:!0,rowSelection:{selectedRowKeys:e,onChange:e=>t(e),getCheckboxProps:e=>({disabled:e.role===`Owner`}),getRowLabel:e=>e.name},columns:[{key:`name`,header:`Name`,sortable:!0},{key:`role`,header:`Role`}]}),(0,J.jsx)(`small`,{children:`${e.length} selected`})]})}var Ze,J,Qe;function $e(){return($e=e((()=>{Ze=t(),H(),J=n(),Qe=[{id:1,name:`Ada Lovelace`,role:`Owner`},{id:2,name:`Alan Turing`,role:`Admin`},{id:3,name:`Grace Hopper`,role:`Editor`},{id:4,name:`Linus Torvalds`,role:`Viewer`}]})))()}function et(){let[e,t]=(0,tt.useState)({key:`latency`,order:`ascend`});return(0,Y.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,Y.jsx)(P,{"aria-label":`Services`,rowKey:e=>e.id,data:nt,sortState:e,onSortChange:t,columns:[{key:`name`,header:`Service`,sortable:!0},{key:`region`,header:`Region`,sortable:!0},{key:`latency`,header:`Latency`,align:`right`,sortable:(e,t)=>e.latency-t.latency,render:e=>`${e.latency} ms`}]}),(0,Y.jsx)(`small`,{children:e?.order?`Sorted by ${e.key} (${e.order})`:`Unsorted`})]})}var tt,Y,nt;function rt(){return(rt=e((()=>{tt=t(),H(),Y=n(),nt=[{id:1,name:`auth-api`,region:`eu-west`,latency:42},{id:2,name:`billing`,region:`us-east`,latency:118},{id:3,name:`search`,region:`ap-south`,latency:73},{id:4,name:`gateway`,region:`eu-west`,latency:9}]})))()}function it(){let[e,t]=(0,at.useState)(!0);return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,X.jsx)(f,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>!e),children:e?`Show empty state`:`Show loading state`}),(0,X.jsx)(P,{"aria-label":`Jobs`,columns:ot,data:[],loading:e,loadingRows:3,emptyText:`No jobs yet`})]})}var at,X,ot;function st(){return(st=e((()=>{at=t(),d(),H(),X=n(),ot=[{key:`name`,header:`Name`},{key:`status`,header:`Status`}]})))()}function ct(){return(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,Z.jsx)(P,{"aria-label":`Striped`,columns:$,data:Q,variant:`striped`,size:`small`}),(0,Z.jsx)(P,{"aria-label":`Bordered`,columns:$,data:Q,variant:`bordered`}),(0,Z.jsx)(P,{"aria-label":`Large`,columns:$,data:Q,size:`large`,hoverable:!0})]})}var Z,Q,$;function lt(){return(lt=e((()=>{H(),Z=n(),Q=[{id:1,name:`Alice`,role:`Admin`},{id:2,name:`Bob`,role:`Editor`},{id:3,name:`Carol`,role:`Viewer`}],$=[{key:`name`,header:`Name`},{key:`role`,header:`Role`}]})))()}var ut;function dt(){return(dt=e((()=>{ut=`import { Table, type TableColumn } from "@minerva/lib-core";

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
`})))()}var ft;function pt(){return(pt=e((()=>{ft=`import { Table, TableCellContent } from "@minerva/lib-core";

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
`})))()}var mt;function ht(){return(ht=e((()=>{mt=`import {
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
`})))()}var gt;function _t(){return(_t=e((()=>{gt=`import { useState } from "react";
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
`})))()}var vt;function yt(){return(yt=e((()=>{vt=`import { Button, Table, type TableColumn } from "@minerva/lib-core";

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
`})))()}var bt;function xt(){return(xt=e((()=>{bt=`import { useState } from "react";
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
`})))()}var St;function Ct(){return(Ct=e((()=>{St=`import { useState } from "react";
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
`})))()}var wt;function Tt(){return(Tt=e((()=>{wt=`import { useState } from "react";
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
`})))()}var Et;function Dt(){return(Dt=e((()=>{Et=`import { Table } from "@minerva/lib-core";

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
`})))()}var Ot,kt,At;function jt(){return(jt=e((()=>{Pe(),Le(),ze(),We(),Ye(),$e(),rt(),st(),lt(),dt(),pt(),ht(),_t(),yt(),xt(),Ct(),Tt(),Dt(),t(),ae(),ie(),Ot=n(),kt=oe(Object.assign({"./demos/basic.tsx":Ae,"./demos/cell-content.tsx":Fe,"./demos/compound.tsx":Re,"./demos/data-table.tsx":Be,"./demos/fixed-columns.tsx":Ge,"./demos/selection.tsx":Xe,"./demos/sorting.tsx":et,"./demos/states.tsx":it,"./demos/variants.tsx":ct}),Object.assign({"./demos/basic.tsx":ut,"./demos/cell-content.tsx":ft,"./demos/compound.tsx":mt,"./demos/data-table.tsx":gt,"./demos/fixed-columns.tsx":vt,"./demos/selection.tsx":bt,"./demos/sorting.tsx":St,"./demos/states.tsx":wt,"./demos/variants.tsx":Et})),At=()=>(0,Ot.jsx)(_,{id:`table`,demos:kt})})))()}jt();export{At as default};