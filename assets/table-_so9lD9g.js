import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{n as a,t as o}from"./useI18n-DtQV8aM0.js";import{n as s,t as c}from"./Button-CG2pPO-r.js";import{C as l,N as u,T as d,j as f,k as ee}from"./icons-CtD3xdmP.js";import{n as p,t as te}from"./useControllableState-NzKJCN8h.js";import{n as ne,t as m}from"./Pagination-CQqn4H9S.js";import{c as h,n as re,s as ie,t as ae}from"./DocPage-DzKszXiH.js";function oe(e){let t={},n={},r=0;for(let n of e)n.fixed===`left`&&(t[n.key]=r,r+=g(n.width));let i=0;for(let t=e.length-1;t>=0;t--){let r=e[t];r.fixed===`right`&&(n[r.key]=i,i+=g(r.width))}let a;for(let t of e)if(t.fixed===`left`)a=t.key;else if(a!==void 0)break;let o;for(let t=e.length-1;t>=0;t--){let n=e[t];if(n.fixed===`right`)o=n.key;else if(o!==void 0)break}return{leftOffsets:t,rightOffsets:n,lastLeftFixedKey:a,firstRightFixedKey:o}}var g;function _(){return(_=e((()=>{g=e=>{if(typeof e==`number`)return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:0}return 0}})))()}var se,v,ce,y,le,ue,b,x,S,C,de,w,T,E,D,fe,pe,me,he,ge,O,k,_e,A,ve,ye,be,j;function M(){return(M=e((()=>{se=`_wrapper_1bm9i_1`,v=`_dataTable_1bm9i_15`,ce=`_table_1bm9i_25`,y=`_scrollX_1bm9i_80`,le=`_wrapperScrollY_1bm9i_84`,ue=`_striped_1bm9i_94`,b=`_wrapperBordered_1bm9i_99`,x=`_hoverable_1bm9i_104`,S=`_selectionCell_1bm9i_114`,C=`_checkbox_1bm9i_119`,de=`_sortButton_1bm9i_135`,w=`_sortLabel_1bm9i_158`,T=`_sortIcon_1bm9i_164`,E=`_small_1bm9i_173`,D=`_medium_1bm9i_179`,fe=`_large_1bm9i_185`,pe=`_empty_1bm9i_191`,me=`_skeleton_1bm9i_197`,he=`_tableSkeletonPulse_1bm9i_1`,ge=`_error_1bm9i_216`,O=`_errorTitle_1bm9i_228`,k=`_retryIcon_1bm9i_235`,_e=`_cellContent_1bm9i_240`,A=`_cellPrimary_1bm9i_249`,ve=`_cellStrong_1bm9i_253`,ye=`_cellMono_1bm9i_257`,be=`_cellSecondary_1bm9i_261`,j={wrapper:se,dataTable:v,table:ce,scrollX:y,wrapperScrollY:le,striped:ue,wrapperBordered:b,hoverable:x,selectionCell:S,checkbox:C,sortButton:de,sortLabel:w,sortIcon:T,small:E,medium:D,large:fe,empty:pe,skeleton:me,tableSkeletonPulse:he,error:ge,errorTitle:O,retryIcon:k,cellContent:_e,cellPrimary:A,cellStrong:ve,cellMono:ye,cellSecondary:be}})))()}function N({columns:e,data:t,rowKey:n,emptyText:r,loading:i=!1,loadingRows:a=5,sortState:s,defaultSortState:c=null,onSortChange:u,manualSort:d=!1,rowSelection:p,...ne}){let{t:m}=o(),h=oe(e),{rightOffsets:re,lastLeftFixedKey:ie,firstRightFixedKey:ae}=h,g=p!==void 0,_=g&&e[0]?.fixed===`left`,se=_?V:0,[v,ce]=te({value:s,defaultValue:c,onChange:e=>{e&&u?.(e)}}),[y,le]=te({value:p?.selectedRowKeys,defaultValue:p?.defaultSelectedRowKeys??[]}),ue=(e,t)=>n?n(e,t):t,b=t.map((e,t)=>({row:e,index:t,key:ue(e,t)})),x=v?.order??null,S=x===null?void 0:e.find(e=>e.key===v?.key),C=S?Ee(S):null,de=!d&&C?[...b].sort((e,t)=>x===`descend`?C(t.row,e.row):C(e.row,t.row)):b,w=new Set(y),T=e=>!!p?.getCheckboxProps?.(e).disabled,E=b.filter(e=>!T(e.row)),D=E.length>0&&E.every(e=>w.has(e.key)),fe=!D&&b.some(e=>w.has(e.key)),pe=e=>{le(e);let t=new Set(e);p?.onChange?.(e,b.filter(e=>t.has(e.key)).map(e=>e.row))},me=(e,t)=>pe(t?[...y.filter(t=>t!==e),e]:y.filter(t=>t!==e)),he=()=>{let e=new Set(E.map(e=>e.key));pe(D?y.filter(t=>!e.has(t)):[...y,...E.map(e=>e.key).filter(e=>!w.has(e))])},ge=e=>{let t={textAlign:e.align},n=I(e.width);return n!==void 0&&(t.width=n,t.minWidth=n),e.fixed===`left`?t.left=`${(h.leftOffsets[e.key]??0)+se}px`:e.fixed===`right`&&(t.right=`${re[e.key]??0}px`),t},O=e=>({style:ge(e),"data-ellipsis":e.ellipsis?`true`:void 0,"data-fixed":e.fixed,"data-fixed-edge":e.fixed===`left`&&e.key===ie?`left`:e.fixed===`right`&&e.key===ae?`right`:void 0}),k={className:j.selectionCell,style:{width:V,minWidth:V,..._?{left:0}:{}},"data-fixed":_?`left`:void 0},_e=e.length+ +!!g,A;A=i?Array.from({length:a},(t,n)=>(0,F.jsxs)(L,{"aria-hidden":`true`,children:[g&&(0,F.jsx)(z,{...k}),e.map(e=>(0,F.jsx)(z,{...O(e),"data-ellipsis":void 0,children:(0,F.jsx)(`span`,{className:j.skeleton})},e.key))]},`skeleton-${n}`)):t.length===0?(0,F.jsx)(L,{children:(0,F.jsx)(z,{colSpan:_e,className:j.empty,children:r??m(`table.empty`)})}):de.map(({row:t,index:n,key:r},i)=>{let a=g&&w.has(r);return(0,F.jsxs)(L,{"aria-selected":a||void 0,"data-selected":a||void 0,children:[g&&(0,F.jsx)(z,{...k,children:(0,F.jsx)(`input`,{type:`checkbox`,className:j.checkbox,checked:a,disabled:T(t),"aria-label":m(`table.selectRow`,{row:p.getRowLabel?.(t,n)??String(r)}),onChange:e=>me(r,e.target.checked)})}),e.map(e=>(0,F.jsx)(z,{...O(e),children:e.render?e.render(t,i):t[e.key]},e.key))]},r)});let ve=e=>{if(!e.sortable)return(0,F.jsx)(R,{scope:`col`,...O(e),children:e.header},e.key);let t=v?.key===e.key?v.order:null,n=t===`ascend`?ee:t===`descend`?f:l;return(0,F.jsx)(R,{scope:`col`,"aria-sort":t?Oe[t]:`none`,...O(e),children:(0,F.jsxs)(`button`,{type:`button`,className:j.sortButton,"data-sort-order":t??void 0,onClick:()=>ce(De(v,e.key)),children:[(0,F.jsx)(`span`,{className:j.sortLabel,children:e.header}),(0,F.jsx)(n,{"aria-hidden":`true`,className:j.sortIcon})]})},e.key)};return(0,F.jsxs)(xe,{...ne,children:[(0,F.jsx)(Se,{children:(0,F.jsxs)(L,{children:[g&&(0,F.jsx)(R,{scope:`col`,...k,children:(0,F.jsx)(`input`,{type:`checkbox`,className:j.checkbox,checked:D,disabled:E.length===0||i,"aria-label":m(`table.selectAll`),ref:e=>{e&&(e.indeterminate=fe)},onChange:he})}),e.map(ve)]})}),(0,F.jsx)(Ce,{children:A})]})}var P,F,I,xe,Se,Ce,L,R,z,B,we,Te,Ee,De,Oe,V;function H(){return(H=e((()=>{i(),a(),d(),p(),_(),M(),P=t(),F=n(),I=e=>e===void 0?void 0:typeof e==`number`?`${e}px`:e,xe=({size:e=`medium`,variant:t=`simple`,hoverable:n=!1,scroll:i,className:a,style:s,ref:c,...l})=>{let{t:u}=o(),d=I(i?.x),f=I(i?.y),ee=(0,P.useRef)(null),[p,te]=(0,P.useState)(!1);(0,P.useEffect)(()=>{let e=ee.current;if(!e)return;let t=()=>te(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight);if(t(),typeof ResizeObserver>`u`)return;let n=new ResizeObserver(t);return n.observe(e),e.firstElementChild&&n.observe(e.firstElementChild),()=>n.disconnect()},[]);let ne=!!(d||f)||p,m=l[`aria-labelledby`],h=ne?{role:`region`,tabIndex:0,"aria-labelledby":m,"aria-label":m?void 0:l[`aria-label`]??u(`table.scrollRegion`)}:void 0,re=f?{maxHeight:f,overflowY:`auto`}:void 0,ie=d||s?{...d?{minWidth:d}:{},...s}:void 0;return(0,F.jsx)(`div`,{ref:ee,...h,className:r(j.wrapper,t===`bordered`&&j.wrapperBordered,f&&j.wrapperScrollY),style:re,children:(0,F.jsx)(`table`,{ref:c,className:r(j.table,j[e],j[t],n&&j.hoverable,d&&j.scrollX,a),style:ie,...l})})},Se=({ref:e,...t})=>(0,F.jsx)(`thead`,{ref:e,...t}),Ce=({ref:e,...t})=>(0,F.jsx)(`tbody`,{ref:e,...t}),L=({ref:e,...t})=>(0,F.jsx)(`tr`,{ref:e,...t}),R=({ref:e,...t})=>(0,F.jsx)(`th`,{ref:e,...t}),z=({ref:e,...t})=>(0,F.jsx)(`td`,{ref:e,...t}),B=e=>e==null||e===``,we=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`}),Te=(e,t)=>B(e)||B(t)?B(e)?+!B(t):-1:typeof e==`number`&&typeof t==`number`?e-t:e instanceof Date&&t instanceof Date?e.getTime()-t.getTime():typeof e==`boolean`&&typeof t==`boolean`?Number(e)-Number(t):we.compare(String(e),String(t)),Ee=e=>typeof e.sortable==`function`?e.sortable:e.sortable?(t,n)=>Te(t[e.key],n[e.key]):null,De=(e,t)=>{let n=e?.key===t?e.order:null;return{key:t,order:n===null?`ascend`:n===`ascend`?`descend`:null}},Oe={ascend:`ascending`,descend:`descending`},V=48})))()}function ke({pagination:e,error:t,onRetry:n,retryLabel:r,loading:i,...a}){let{t:s}=o(),l=!!t&&!i;return(0,U.jsx)(`div`,{className:j.dataTable,"aria-busy":i||void 0,children:l?(0,U.jsxs)(`div`,{className:j.error,role:`alert`,children:[(0,U.jsx)(`div`,{className:j.errorTitle,children:t}),n&&(0,U.jsxs)(c,{color:`neutral`,variant:`outline`,size:`small`,onClick:n,children:[(0,U.jsx)(u,{"aria-hidden":`true`,className:j.retryIcon}),r??s(`table.retry`)]})]}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(N,{...a,loading:i}),e&&(0,U.jsx)(ne,{...e})]})})}var U;function Ae(){return(Ae=e((()=>{a(),s(),d(),m(),M(),H(),U=n()})))()}var W,je;function Me(){return(Me=e((()=>{i(),M(),W=n(),je=({primary:e,secondary:t,monospace:n=!1,maxWidth:i=360,className:a,style:o,ref:s,...c})=>{let l=n?`code`:`div`,u=t!=null;return(0,W.jsxs)(`div`,{ref:s,className:r(j.cellContent,a),style:{maxWidth:i,...o},...c,children:[(0,W.jsx)(l,{className:r(j.cellPrimary,n&&j.cellMono,u&&j.cellStrong),children:e}),u&&(0,W.jsx)(`div`,{className:j.cellSecondary,children:t})]})}})))()}function Ne(){return(0,Pe.jsx)(N,{"aria-label":`Books`,columns:Ie,data:Fe,rowKey:e=>e.id,hoverable:!0})}var Pe,Fe,Ie;function Le(){return(Le=e((()=>{H(),Pe=n(),Fe=[{id:1,title:`Dune`,author:`Frank Herbert`,score:9.1},{id:2,title:`Solaris`,author:`Stanisław Lem`,score:8.7},{id:3,title:`Hyperion`,author:`Dan Simmons`,score:8.9}],Ie=[{key:`title`,header:`Title`},{key:`author`,header:`Author`},{key:`score`,header:`Score`,align:`right`}]})))()}function Re(){return(0,G.jsx)(N,{"aria-label":`Pages`,rowKey:e=>e.id,data:ze,columns:[{key:`title`,header:`Page`,render:e=>(0,G.jsx)(je,{primary:e.title,secondary:e.description})},{key:`url`,header:`URL`,render:e=>(0,G.jsx)(je,{primary:e.url,monospace:!0,maxWidth:260})}]})}var G,ze;function Be(){return(Be=e((()=>{H(),Me(),G=n(),ze=[{id:1,title:`Getting started`,description:`Install the package, load the stylesheet and render your first component.`,url:`https://example.com/docs/getting-started/installation?ref=sidebar`},{id:2,title:`Theming`,description:`Customize tokens, palettes and the dark theme.`,url:`https://example.com/docs/theming`}]})))()}function Ve(){return(0,K.jsxs)(xe,{"aria-label":`Quarterly sales`,variant:`bordered`,size:`small`,children:[(0,K.jsxs)(Se,{children:[(0,K.jsxs)(L,{children:[(0,K.jsx)(R,{scope:`col`,rowSpan:2,children:`Region`}),(0,K.jsx)(R,{scope:`colgroup`,colSpan:2,children:`2025`})]}),(0,K.jsxs)(L,{children:[(0,K.jsx)(R,{scope:`col`,children:`H1`}),(0,K.jsx)(R,{scope:`col`,children:`H2`})]})]}),(0,K.jsxs)(Ce,{children:[(0,K.jsxs)(L,{children:[(0,K.jsx)(z,{children:`Europe`}),(0,K.jsx)(z,{children:`1.2M`}),(0,K.jsx)(z,{children:`1.5M`})]}),(0,K.jsxs)(L,{children:[(0,K.jsx)(z,{children:`Asia`}),(0,K.jsx)(z,{colSpan:2,children:`2.9M (full year)`})]})]})]})}var K;function He(){return(He=e((()=>{H(),K=n()})))()}function Ue(){let[e,t]=(0,We.useState)(1),[n,r]=(0,We.useState)(!1),i=Ge.slice((e-1)*5,e*5);return(0,q.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,q.jsx)(c,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>r(!0),children:`Simulate an error`}),(0,q.jsx)(ke,{"aria-label":`Users`,columns:Ke,data:i,rowKey:e=>e.id,error:n?`Could not load the users.`:void 0,onRetry:()=>r(!1),pagination:{current:e,pageSize:5,total:Ge.length,onChange:t}})]})}var We,q,Ge,Ke;function qe(){return(qe=e((()=>{We=t(),s(),Ae(),q=n(),Ge=Array.from({length:42},(e,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`})),Ke=[{key:`id`,header:`ID`,width:60},{key:`name`,header:`Name`},{key:`email`,header:`Email`}]})))()}function Je(){return(0,Ye.jsx)(N,{"aria-label":`Orders`,columns:Ze,data:Xe,rowKey:e=>e.id,scroll:{x:1100,y:240}})}var Ye,Xe,Ze;function Qe(){return(Qe=e((()=>{s(),H(),Ye=n(),Xe=Array.from({length:6},(e,t)=>({id:`#10${t+1}`,customer:[`Alice`,`Bob`,`Carol`][t%3],address:`221B Baker Street, Marylebone, London NW1 6XE, United Kingdom`,note:`Leave the parcel with the concierge if nobody answers the door`,total:`€${(t+1)*42}.00`})),Ze=[{key:`id`,header:`Order`,width:90,fixed:`left`},{key:`customer`,header:`Customer`,width:120,fixed:`left`},{key:`address`,header:`Address`,width:320},{key:`note`,header:`Note`,width:240,ellipsis:!0},{key:`total`,header:`Total`,width:100,align:`right`},{key:`actions`,header:`Actions`,width:110,fixed:`right`,render:()=>(0,Ye.jsx)(c,{size:`small`,color:`neutral`,variant:`outline`,children:`Details`})}]})))()}function $e(){let[e,t]=(0,et.useState)([2]);return(0,J.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,J.jsx)(N,{"aria-label":`Members`,rowKey:e=>e.id,data:tt,hoverable:!0,rowSelection:{selectedRowKeys:e,onChange:e=>t(e),getCheckboxProps:e=>({disabled:e.role===`Owner`}),getRowLabel:e=>e.name},columns:[{key:`name`,header:`Name`,sortable:!0},{key:`role`,header:`Role`}]}),(0,J.jsx)(`small`,{children:`${e.length} selected`})]})}var et,J,tt;function nt(){return(nt=e((()=>{et=t(),H(),J=n(),tt=[{id:1,name:`Ada Lovelace`,role:`Owner`},{id:2,name:`Alan Turing`,role:`Admin`},{id:3,name:`Grace Hopper`,role:`Editor`},{id:4,name:`Linus Torvalds`,role:`Viewer`}]})))()}function rt(){let[e,t]=(0,it.useState)({key:`latency`,order:`ascend`});return(0,Y.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,Y.jsx)(N,{"aria-label":`Services`,rowKey:e=>e.id,data:at,sortState:e,onSortChange:t,columns:[{key:`name`,header:`Service`,sortable:!0},{key:`region`,header:`Region`,sortable:!0},{key:`latency`,header:`Latency`,align:`right`,sortable:(e,t)=>e.latency-t.latency,render:e=>`${e.latency} ms`}]}),(0,Y.jsx)(`small`,{children:e?.order?`Sorted by ${e.key} (${e.order})`:`Unsorted`})]})}var it,Y,at;function ot(){return(ot=e((()=>{it=t(),H(),Y=n(),at=[{id:1,name:`auth-api`,region:`eu-west`,latency:42},{id:2,name:`billing`,region:`us-east`,latency:118},{id:3,name:`search`,region:`ap-south`,latency:73},{id:4,name:`gateway`,region:`eu-west`,latency:9}]})))()}function st(){let[e,t]=(0,ct.useState)(!0);return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,X.jsx)(c,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>!e),children:e?`Show empty state`:`Show loading state`}),(0,X.jsx)(N,{"aria-label":`Jobs`,columns:lt,data:[],loading:e,loadingRows:3,emptyText:`No jobs yet`})]})}var ct,X,lt;function ut(){return(ut=e((()=>{ct=t(),s(),H(),X=n(),lt=[{key:`name`,header:`Name`},{key:`status`,header:`Status`}]})))()}function dt(){return(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,Z.jsx)(N,{"aria-label":`Striped`,columns:$,data:Q,variant:`striped`,size:`small`}),(0,Z.jsx)(N,{"aria-label":`Bordered`,columns:$,data:Q,variant:`bordered`}),(0,Z.jsx)(N,{"aria-label":`Large`,columns:$,data:Q,size:`large`,hoverable:!0})]})}var Z,Q,$;function ft(){return(ft=e((()=>{H(),Z=n(),Q=[{id:1,name:`Alice`,role:`Admin`},{id:2,name:`Bob`,role:`Editor`},{id:3,name:`Carol`,role:`Viewer`}],$=[{key:`name`,header:`Name`},{key:`role`,header:`Role`}]})))()}var pt;function mt(){return(mt=e((()=>{pt=`import { Table, type TableColumn } from "@minerva/lib-core";

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
`})))()}var ht;function gt(){return(gt=e((()=>{ht=`import { Table, TableCellContent } from "@minerva/lib-core";

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
`})))()}var _t;function vt(){return(vt=e((()=>{_t=`import {
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
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`import { useState } from "react";
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
`})))()}var xt;function St(){return(St=e((()=>{xt=`import { Button, Table, type TableColumn } from "@minerva/lib-core";

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
`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`import { useState } from "react";
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
`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`import { useState } from "react";
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
`})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`import { useState } from "react";
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
`})))()}var kt;function At(){return(At=e((()=>{kt=`import { Table } from "@minerva/lib-core";

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
`})))()}var jt,Mt,Nt;function Pt(){return(Pt=e((()=>{Le(),Be(),He(),qe(),Qe(),nt(),ot(),ut(),ft(),mt(),gt(),vt(),bt(),St(),wt(),Et(),Ot(),At(),t(),re(),h(),jt=n(),Mt=ie(Object.assign({"./demos/basic.tsx":Ne,"./demos/cell-content.tsx":Re,"./demos/compound.tsx":Ve,"./demos/data-table.tsx":Ue,"./demos/fixed-columns.tsx":Je,"./demos/selection.tsx":$e,"./demos/sorting.tsx":rt,"./demos/states.tsx":st,"./demos/variants.tsx":dt}),Object.assign({"./demos/basic.tsx":pt,"./demos/cell-content.tsx":ht,"./demos/compound.tsx":_t,"./demos/data-table.tsx":yt,"./demos/fixed-columns.tsx":xt,"./demos/selection.tsx":Ct,"./demos/sorting.tsx":Tt,"./demos/states.tsx":Dt,"./demos/variants.tsx":kt})),Nt=()=>(0,jt.jsx)(ae,{id:`table`,demos:Mt})})))()}Pt();export{Nt as default};