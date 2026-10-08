import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,n,s as r,t as i}from"./react-vendor-aZSMfLKR.js";import{i as a}from"./minerva-web-components-D1dcODYk.js";import{nt as ee,rt as te}from"./io5-CkIs6v-8.js";import{n as o,t as s}from"./Button-BfJfx3BZ.js";import{n as ne,t as re}from"./Pagination-BxzlKL_P.js";import{a as ie,c as ae,o as oe,r as se,s as ce,t as le}from"./Modal-B-k5GLmb.js";import{i as c,n as l,r as u}from"./Stack-NtusJivt.js";import{n as ue,t as de}from"./Menu-W1-dVpVl.js";import{a as fe,i as pe,n as me,r as he}from"./Toast-BjEJ4M80.js";import{i as d,n as f}from"./Table-uZLlqWKg.js";import{a as ge,i as _e,n as p,r as m,t as ve}from"./Tabs-CEc6cmzr.js";import{i as ye,o as be,t as xe}from"./Select-CsJMhsqY.js";import{a as h,c as Se,g as Ce,h as g,i as _,l as v,m as we,n as Te,o as Ee,p as De,r as y,s as Oe,t as ke,u as Ae}from"./DocPage-BUvZl8IZ.js";function je(){return(0,b.jsxs)(c,{gap:16,wrap:!0,className:`accent-menu-demo`,children:[(0,b.jsx)(`style`,{children:x}),(0,b.jsx)(de,{className:`accent-menu`,items:[{key:`edit`,label:`Edit`,shortcut:`⌘E`},{key:`copy`,label:`Duplicate`,shortcut:`⌘D`},{type:`checkbox`,key:`pin`,label:`Pinned`,defaultChecked:!0},{key:`delete`,label:`Delete`,disabled:!0}],children:(0,b.jsx)(o,{color:`neutral`,variant:`outline`,children:`React menu`})}),(0,b.jsxs)(`minerva-menu`,{class:`accent-menu`,children:[(0,b.jsx)(`minerva-button`,{slot:`trigger`,color:`neutral`,variant:`outline`,children:`Web Component menu`}),(0,b.jsx)(`minerva-menu-item`,{value:`edit`,shortcut:`⌘E`,children:`Edit`}),(0,b.jsx)(`minerva-menu-item`,{value:`copy`,shortcut:`⌘D`,children:`Duplicate`}),(0,b.jsx)(`minerva-menu-checkbox-item`,{value:`pin`,checked:!0,children:`Pinned`}),(0,b.jsx)(`minerva-menu-item`,{value:`delete`,disabled:!0,children:`Delete`})]})]})}var b,x;function S(){return(S=e((()=>{s(),u(),ue(),a(),b=i(),x=`
/* the highlighted item follows the keyboard (arrows) and the pointer
   (React: the panel is portalled, scope it with its className) */
.accent-menu [data-minerva="menu"][data-part="item"][data-highlighted],
minerva-menu.accent-menu::part(item item--highlighted) {
  background: color-mix(in srgb, var(--primary-color) 18%, transparent);
  color: var(--primary-color);
  box-shadow: inset 3px 0 0 var(--primary-color);
}
/* checked checkbox / radio items, disabled items */
.accent-menu [data-minerva="menu"][data-part="item"][data-state="checked"],
minerva-menu.accent-menu::part(item item--checked) {
  font-weight: 600;
}
.accent-menu [data-minerva="menu"][data-part="item"][data-disabled],
minerva-menu.accent-menu::part(item item--disabled) {
  text-decoration: line-through;
}
`})))()}function Me(){return(0,C.jsxs)(l,{className:`ring-pages`,gap:16,children:[(0,C.jsx)(`style`,{children:w}),(0,C.jsx)(re,{defaultCurrent:1,total:50,"aria-label":`React pages`}),(0,C.jsx)(`minerva-pagination`,{current:1,total:50,"aria-label":`Web Component pages`})]})}var C,w;function T(){return(T=e((()=>{ne(),u(),a(),C=i(),w=`
.ring-pages [data-minerva="pagination"][data-part="item"],
.ring-pages minerva-pagination::part(item) {
  border-radius: 999px;
}
/* the current page: aria-current="page" mirrored as a public hook */
.ring-pages [data-minerva="pagination"][data-part="item"][data-current],
.ring-pages minerva-pagination::part(item item--current) {
  background: transparent;
  color: var(--primary-color);
  box-shadow: inset 0 0 0 2px var(--primary-color);
  font-weight: 700;
}
.ring-pages [data-minerva="pagination"][data-part="item"][data-disabled],
.ring-pages minerva-pagination::part(item item--disabled) {
  opacity: 0.3;
}
`})))()}function Ne(){return(0,E.jsxs)(c,{gap:16,wrap:!0,children:[(0,E.jsx)(`style`,{children:O}),(0,E.jsx)(`div`,{style:{width:200},children:(0,E.jsx)(be,{"aria-label":`Language (React)`,defaultValue:`zh`,contentClassName:`bold-options`,children:D.map(e=>(0,E.jsx)(xe,{value:e.value,disabled:e.disabled,children:e.label},e.value))})}),(0,E.jsx)(`div`,{style:{width:200},children:(0,E.jsx)(`minerva-select`,{class:`bold-options`,"aria-label":`Language (options property)`,value:`zh`,options:D})}),(0,E.jsx)(`div`,{style:{width:200},children:(0,E.jsx)(`minerva-select`,{"aria-label":`Language (minerva-option)`,value:`zh`,children:D.map(e=>(0,E.jsx)(`minerva-option`,{class:`bold-option`,value:e.value,disabled:e.disabled||void 0,children:e.label},e.value))})})]})}var E,D,O;function k(){return(k=e((()=>{u(),ye(),a(),E=i(),D=[{value:`en`,label:`English`},{value:`zh`,label:`Chinese`},{value:`fr`,label:`French`},{value:`ja`,label:`Japanese`,disabled:!0}],O=`
/* React options are SelectItem components: data-minerva="option" */
.bold-options [data-minerva="option"][data-selected],
minerva-select.bold-options::part(item item--selected),
minerva-option.bold-option:state(selected)::part(root) {
  background: var(--primary-color);
  color: #fff;
  font-weight: 600;
}
.bold-options [data-minerva="option"][data-highlighted]:not([data-selected]),
minerva-select.bold-options::part(item item--highlighted),
minerva-option.bold-option:state(highlighted)::part(root) {
  outline: 2px dashed var(--primary-color);
  outline-offset: -2px;
}
`})))()}function Pe(){return(0,A.jsxs)(l,{className:`sorted-headers`,gap:24,children:[(0,A.jsx)(`style`,{children:N}),(0,A.jsx)(f,{"aria-label":`Services (React)`,columns:M,data:j,rowKey:e=>e.id,defaultSortState:{key:`latency`,order:`ascend`},rowSelection:{defaultSelectedRowKeys:[2]}}),(0,A.jsx)(`minerva-data-table`,{"aria-label":`Services (Web Component)`,"row-key":`id`,columns:M,rows:j,sortState:{key:`latency`,order:`ascend`},selectable:!0,selectedRowKeys:[2]})]})}var A,j,M,N;function P(){return(P=e((()=>{d(),u(),a(),A=i(),j=[{id:1,name:`auth-api`,latency:42},{id:2,name:`billing`,latency:118},{id:3,name:`search`,latency:73}],M=[{key:`name`,header:`Service`,sortable:!0},{key:`latency`,header:`Latency`,align:`right`,sortable:(e,t)=>e.latency-t.latency}],N=`
/* sorted column header: data-sort / header-cell--sort-<direction> */
.sorted-headers [data-minerva="data-table"][data-part="header-cell"][data-sort="ascending"],
.sorted-headers [data-minerva="data-table"][data-part="header-cell"][data-sort="descending"],
.sorted-headers minerva-data-table::part(header-cell header-cell--sort-ascending),
.sorted-headers minerva-data-table::part(header-cell header-cell--sort-descending) {
  color: var(--primary-color);
  box-shadow: inset 0 -3px 0 var(--primary-color);
}
.sorted-headers [data-minerva="data-table"][data-part="header-cell"][data-sort="none"],
.sorted-headers minerva-data-table::part(header-cell header-cell--sort-none) {
  color: var(--text-secondary-color);
}
/* selected rows */
.sorted-headers [data-minerva="data-table"][data-part="row"][data-selected] [data-part="cell"],
.sorted-headers minerva-data-table::part(row row--selected) {
  background: color-mix(in srgb, var(--primary-color) 12%, transparent);
}
`})))()}function Fe(){let e=(0,F.useRef)(null);return(0,I.jsxs)(c,{gap:8,wrap:!0,children:[(0,I.jsx)(`style`,{children:L}),(0,I.jsx)(me,{position:`bottom-right`}),(0,I.jsx)(o,{color:`success`,onClick:()=>fe.success(`Saved (React)`),children:`React success toast`}),(0,I.jsx)(o,{color:`success`,variant:`outline`,onClick:()=>e.current?.toast.success(`Saved (Web Component)`),children:`Web Component success toast`}),(0,I.jsx)(`minerva-toast-region`,{ref:e,class:`success-toasts`,position:`bottom-left`})]})}var F,I,L;function R(){return(R=e((()=>{F=t(),s(),u(),he(),pe(),a(),I=i(),L=`
/* React toasts are portalled to the toast region: the compound selector
   matches them wherever they render */
[data-minerva="toast-region"][data-part="toast"][data-color="success"],
minerva-toast-region.success-toasts::part(toast toast--color-success) {
  border-inline-start: 6px solid var(--success-color);
  background: var(--success-color-subtle);
}
/* leaving toast (data-state="closed" during its exit animation) */
[data-minerva="toast-region"][data-part="toast"][data-state="closed"],
minerva-toast-region.success-toasts::part(toast toast--closed) {
  opacity: 0.4;
}
`})))()}function Ie(){return(0,z.jsxs)(l,{className:`pill-buttons`,gap:12,children:[(0,z.jsx)(`style`,{children:B}),(0,z.jsxs)(c,{gap:8,wrap:!0,children:[(0,z.jsx)(o,{children:`React`}),(0,z.jsx)(o,{variant:`outline`,children:`Outline`}),(0,z.jsx)(o,{loading:!0,variant:`ghost`,children:`Saving`})]}),(0,z.jsxs)(c,{gap:8,wrap:!0,children:[(0,z.jsx)(`minerva-button`,{children:`Web Component`}),(0,z.jsx)(`minerva-button`,{variant:`outline`,children:`Outline`}),(0,z.jsx)(`minerva-button`,{loading:!0,variant:`ghost`,children:`Saving`})]})]})}var z,B;function V(){return(V=e((()=>{s(),u(),a(),z=i(),B=`
.pill-buttons [data-minerva="button"][data-part="root"],
.pill-buttons minerva-button {
  --button-radius: 999px;
  --button-padding-x: 20px;
}
.pill-buttons [data-minerva="button"][data-part="root"][data-variant="outline"] {
  border-width: 2px;
}
.pill-buttons minerva-button:state(variant-outline)::part(root) {
  border-width: 2px;
}
.pill-buttons [data-minerva="button"][data-part="label"],
.pill-buttons minerva-button::part(label) {
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.pill-buttons [data-minerva="button"][data-loading] [data-part="spinner"],
.pill-buttons minerva-button:state(loading)::part(spinner) {
  color: var(--warning-color);
}
`})))()}function Le(){return(0,H.jsxs)(c,{gap:8,wrap:!0,children:[(0,H.jsx)(`style`,{children:U}),(0,H.jsxs)(ce,{children:[(0,H.jsx)(oe,{asChild:!0,children:(0,H.jsx)(o,{variant:`outline`,children:`React modal`})}),(0,H.jsxs)(se,{className:`glass-content`,overlayClassName:`glass-overlay`,children:[(0,H.jsx)(le,{children:`Restyled with hooks`}),(0,H.jsx)(ae,{children:`The overlay, panel and title are styled from the page.`})]})]}),(0,H.jsxs)(`minerva-modal`,{class:`glass`,label:`Restyled with hooks`,children:[(0,H.jsx)(`minerva-button`,{slot:`trigger`,variant:`outline`,children:`Web Component modal`}),`The overlay, panel and title are styled from the page.`]})]})}var H,U;function W(){return(W=e((()=>{s(),u(),ie(),a(),H=i(),U=`
[data-minerva="modal"][data-part="overlay"].glass-overlay,
minerva-modal.glass::part(overlay) {
  backdrop-filter: blur(6px);
}
[data-minerva="modal"][data-part="content"].glass-content,
minerva-modal.glass::part(content) {
  border: 1px solid var(--primary-color);
  box-shadow: 0 24px 48px color-mix(in srgb, var(--primary-color) 25%, transparent);
}
[data-minerva="modal"][data-part="content"][data-state="open"].glass-content [data-part="header"],
minerva-modal.glass:state(open)::part(header) {
  color: var(--primary-color);
}
`})))()}function Re(){return(0,G.jsxs)(l,{className:`ledger`,gap:24,children:[(0,G.jsx)(`style`,{children:J}),(0,G.jsx)(f,{"aria-label":`Books (React)`,columns:q,data:K,rowKey:e=>e.id}),(0,G.jsx)(`minerva-data-table`,{"aria-label":`Books (Web Component)`,"row-key":`id`,columns:q,rows:K})]})}var G,K,q,J;function Y(){return(Y=e((()=>{d(),u(),a(),G=i(),K=[{id:1,title:`Dune`,author:`Frank Herbert`,score:9.1},{id:2,title:`Solaris`,author:`Stanisław Lem`,score:8.7},{id:3,title:`Hyperion`,author:`Dan Simmons`,score:8.9}],q=[{key:`title`,header:`Title`},{key:`author`,header:`Author`},{key:`score`,header:`Score`,align:`right`}],J=`
.ledger [data-minerva="data-table"][data-part="header-cell"],
.ledger minerva-data-table::part(header-cell) {
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 12px;
  color: var(--primary-color);
}
/* ::part() only takes user-action pseudo-classes (:hover, :focus-visible...):
   keep structural ones (:nth-child) in a React-only rule */
.ledger [data-minerva="data-table"][data-part="row"]:nth-child(even) [data-part="cell"] {
  background: color-mix(in srgb, var(--primary-color) 6%, transparent);
}
.ledger [data-minerva="data-table"][data-part="row"]:hover [data-part="cell"],
.ledger minerva-data-table::part(row):hover {
  background: color-mix(in srgb, var(--primary-color) 14%, transparent);
}
`})))()}function ze(){return(0,X.jsxs)(l,{className:`underline-tabs`,gap:24,children:[(0,X.jsx)(`style`,{children:Z}),(0,X.jsxs)(ve,{defaultValue:`overview`,variant:`soft`,children:[(0,X.jsxs)(ge,{"aria-label":`React tabs`,children:[(0,X.jsx)(m,{value:`overview`,children:`Overview`}),(0,X.jsx)(m,{value:`activity`,children:`Activity`}),(0,X.jsx)(m,{value:`archive`,disabled:!0,children:`Archive`})]}),(0,X.jsx)(p,{value:`overview`,children:`React: data-* hooks`}),(0,X.jsx)(p,{value:`activity`,children:`Activity`}),(0,X.jsx)(p,{value:`archive`,children:`Archive`})]}),(0,X.jsxs)(`minerva-tabs`,{value:`overview`,variant:`soft`,label:`Web Component tabs`,children:[(0,X.jsx)(`minerva-tab`,{value:`overview`,children:`Overview`}),(0,X.jsx)(`minerva-tab`,{value:`activity`,children:`Activity`}),(0,X.jsx)(`minerva-tab`,{value:`archive`,disabled:!0,children:`Archive`}),(0,X.jsx)(`minerva-tab-panel`,{value:`overview`,children:`Web Components: ::part() and :state()`}),(0,X.jsx)(`minerva-tab-panel`,{value:`activity`,children:`Activity`}),(0,X.jsx)(`minerva-tab-panel`,{value:`archive`,children:`Archive`})]})]})}var X,Z;function Q(){return(Q=e((()=>{_e(),u(),a(),X=i(),Z=`
.underline-tabs [data-minerva="tabs"][data-part="list"],
.underline-tabs minerva-tabs::part(list) {
  gap: 4px;
  border-bottom: 1px solid var(--border-color);
}
.underline-tabs [data-minerva="tab"][data-part="root"],
.underline-tabs minerva-tab::part(root) {
  border-radius: 0;
  border-bottom: 2px solid transparent;
  font-weight: 500;
}
.underline-tabs [data-minerva="tab"][data-state="active"],
.underline-tabs minerva-tab:state(active)::part(root) {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}
.underline-tabs [data-minerva="tab"][data-disabled],
.underline-tabs minerva-tab:state(disabled)::part(root) {
  opacity: 0.4;
}
`})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`import { Button, HStack, Menu } from "@minerva/lib-core";
import "@minerva/lib-web-components";

const css = \`
/* the highlighted item follows the keyboard (arrows) and the pointer
   (React: the panel is portalled, scope it with its className) */
.accent-menu [data-minerva="menu"][data-part="item"][data-highlighted],
minerva-menu.accent-menu::part(item item--highlighted) {
  background: color-mix(in srgb, var(--primary-color) 18%, transparent);
  color: var(--primary-color);
  box-shadow: inset 3px 0 0 var(--primary-color);
}
/* checked checkbox / radio items, disabled items */
.accent-menu [data-minerva="menu"][data-part="item"][data-state="checked"],
minerva-menu.accent-menu::part(item item--checked) {
  font-weight: 600;
}
.accent-menu [data-minerva="menu"][data-part="item"][data-disabled],
minerva-menu.accent-menu::part(item item--disabled) {
  text-decoration: line-through;
}
\`;

export default function ItemsMenu() {
  return (
    <HStack gap={16} wrap className="accent-menu-demo">
      <style>{css}</style>
      <Menu
        className="accent-menu"
        items={[
          { key: "edit", label: "Edit", shortcut: "⌘E" },
          { key: "copy", label: "Duplicate", shortcut: "⌘D" },
          {
            type: "checkbox",
            key: "pin",
            label: "Pinned",
            defaultChecked: true,
          },
          { key: "delete", label: "Delete", disabled: true },
        ]}
      >
        <Button color="neutral" variant="outline">
          React menu
        </Button>
      </Menu>
      <minerva-menu class="accent-menu">
        <minerva-button slot="trigger" color="neutral" variant="outline">
          Web Component menu
        </minerva-button>
        <minerva-menu-item value="edit" shortcut="⌘E">
          Edit
        </minerva-menu-item>
        <minerva-menu-item value="copy" shortcut="⌘D">
          Duplicate
        </minerva-menu-item>
        <minerva-menu-checkbox-item value="pin" checked>
          Pinned
        </minerva-menu-checkbox-item>
        <minerva-menu-item value="delete" disabled>
          Delete
        </minerva-menu-item>
      </minerva-menu>
    </HStack>
  );
}
`})))()}var He;function Ue(){return(Ue=e((()=>{He=`import { Pagination, VStack } from "@minerva/lib-core";
import "@minerva/lib-web-components";

const css = \`
.ring-pages [data-minerva="pagination"][data-part="item"],
.ring-pages minerva-pagination::part(item) {
  border-radius: 999px;
}
/* the current page: aria-current="page" mirrored as a public hook */
.ring-pages [data-minerva="pagination"][data-part="item"][data-current],
.ring-pages minerva-pagination::part(item item--current) {
  background: transparent;
  color: var(--primary-color);
  box-shadow: inset 0 0 0 2px var(--primary-color);
  font-weight: 700;
}
.ring-pages [data-minerva="pagination"][data-part="item"][data-disabled],
.ring-pages minerva-pagination::part(item item--disabled) {
  opacity: 0.3;
}
\`;

export default function ItemsPagination() {
  return (
    <VStack className="ring-pages" gap={16}>
      <style>{css}</style>
      <Pagination defaultCurrent={1} total={50} aria-label="React pages" />
      <minerva-pagination
        current={1}
        total={50}
        aria-label="Web Component pages"
      />
    </VStack>
  );
}
`})))()}var We;function Ge(){return(Ge=e((()=>{We=`import { HStack, Select, SelectItem } from "@minerva/lib-core";
import "@minerva/lib-web-components";

const options = [
  { value: "en", label: "English" },
  { value: "zh", label: "Chinese" },
  { value: "fr", label: "French" },
  { value: "ja", label: "Japanese", disabled: true },
];

const css = \`
/* React options are SelectItem components: data-minerva="option" */
.bold-options [data-minerva="option"][data-selected],
minerva-select.bold-options::part(item item--selected),
minerva-option.bold-option:state(selected)::part(root) {
  background: var(--primary-color);
  color: #fff;
  font-weight: 600;
}
.bold-options [data-minerva="option"][data-highlighted]:not([data-selected]),
minerva-select.bold-options::part(item item--highlighted),
minerva-option.bold-option:state(highlighted)::part(root) {
  outline: 2px dashed var(--primary-color);
  outline-offset: -2px;
}
\`;

export default function ItemsSelect() {
  return (
    <HStack gap={16} wrap>
      <style>{css}</style>
      <div style={{ width: 200 }}>
        <Select
          aria-label="Language (React)"
          defaultValue="zh"
          contentClassName="bold-options"
        >
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div style={{ width: 200 }}>
        {/* options property: items rendered in the shadow root (::part) */}
        <minerva-select
          class="bold-options"
          aria-label="Language (options property)"
          value="zh"
          options={options}
        />
      </div>
      <div style={{ width: 200 }}>
        {/* <minerva-option> children: elements of their own (:state) */}
        <minerva-select aria-label="Language (minerva-option)" value="zh">
          {options.map((option) => (
            <minerva-option
              key={option.value}
              class="bold-option"
              value={option.value}
              disabled={option.disabled || undefined}
            >
              {option.label}
            </minerva-option>
          ))}
        </minerva-select>
      </div>
    </HStack>
  );
}
`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`import { Table, VStack, type TableColumn } from "@minerva/lib-core";
import "@minerva/lib-web-components";

interface Service {
  id: number;
  name: string;
  latency: number;
}

const services: Service[] = [
  { id: 1, name: "auth-api", latency: 42 },
  { id: 2, name: "billing", latency: 118 },
  { id: 3, name: "search", latency: 73 },
];

const columns: TableColumn<Service>[] = [
  { key: "name", header: "Service", sortable: true },
  {
    key: "latency",
    header: "Latency",
    align: "right",
    sortable: (a, b) => a.latency - b.latency,
  },
];

const css = \`
/* sorted column header: data-sort / header-cell--sort-<direction> */
.sorted-headers [data-minerva="data-table"][data-part="header-cell"][data-sort="ascending"],
.sorted-headers [data-minerva="data-table"][data-part="header-cell"][data-sort="descending"],
.sorted-headers minerva-data-table::part(header-cell header-cell--sort-ascending),
.sorted-headers minerva-data-table::part(header-cell header-cell--sort-descending) {
  color: var(--primary-color);
  box-shadow: inset 0 -3px 0 var(--primary-color);
}
.sorted-headers [data-minerva="data-table"][data-part="header-cell"][data-sort="none"],
.sorted-headers minerva-data-table::part(header-cell header-cell--sort-none) {
  color: var(--text-secondary-color);
}
/* selected rows */
.sorted-headers [data-minerva="data-table"][data-part="row"][data-selected] [data-part="cell"],
.sorted-headers minerva-data-table::part(row row--selected) {
  background: color-mix(in srgb, var(--primary-color) 12%, transparent);
}
\`;

export default function ItemsTable() {
  return (
    <VStack className="sorted-headers" gap={24}>
      <style>{css}</style>
      <Table
        aria-label="Services (React)"
        columns={columns}
        data={services}
        rowKey={(row) => row.id}
        defaultSortState={{ key: "latency", order: "ascend" }}
        rowSelection={{ defaultSelectedRowKeys: [2] }}
      />
      <minerva-data-table
        aria-label="Services (Web Component)"
        row-key="id"
        columns={columns}
        rows={services}
        sortState={{ key: "latency", order: "ascend" }}
        selectable
        selectedRowKeys={[2]}
      />
    </VStack>
  );
}
`})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`import { useRef } from "react";
import { Button, HStack, ToastProvider, toast } from "@minerva/lib-core";
import "@minerva/lib-web-components";

type Region = HTMLElement & {
  toast: { success: (title: string) => void; info: (title: string) => void };
};

const css = \`
/* React toasts are portalled to the toast region: the compound selector
   matches them wherever they render */
[data-minerva="toast-region"][data-part="toast"][data-color="success"],
minerva-toast-region.success-toasts::part(toast toast--color-success) {
  border-inline-start: 6px solid var(--success-color);
  background: var(--success-color-subtle);
}
/* leaving toast (data-state="closed" during its exit animation) */
[data-minerva="toast-region"][data-part="toast"][data-state="closed"],
minerva-toast-region.success-toasts::part(toast toast--closed) {
  opacity: 0.4;
}
\`;

export default function ItemsToast() {
  const region = useRef<Region>(null);
  return (
    <HStack gap={8} wrap>
      <style>{css}</style>
      {/* mount one ToastProvider near the root of an app */}
      <ToastProvider position="bottom-right" />
      <Button color="success" onClick={() => toast.success("Saved (React)")}>
        React success toast
      </Button>
      <Button
        color="success"
        variant="outline"
        onClick={() => region.current?.toast.success("Saved (Web Component)")}
      >
        Web Component success toast
      </Button>
      <minerva-toast-region
        ref={region}
        class="success-toasts"
        position="bottom-left"
      />
    </HStack>
  );
}
`})))()}var Xe;function Ze(){return(Ze=e((()=>{Xe=`import { Button, HStack, VStack } from "@minerva/lib-core";
import "@minerva/lib-web-components";

// Plain, unlayered CSS: it wins over the library (inside @layer minerva)
// without !important. Variables and hooks combine.
const css = \`
.pill-buttons [data-minerva="button"][data-part="root"],
.pill-buttons minerva-button {
  --button-radius: 999px;
  --button-padding-x: 20px;
}
.pill-buttons [data-minerva="button"][data-part="root"][data-variant="outline"] {
  border-width: 2px;
}
.pill-buttons minerva-button:state(variant-outline)::part(root) {
  border-width: 2px;
}
.pill-buttons [data-minerva="button"][data-part="label"],
.pill-buttons minerva-button::part(label) {
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.pill-buttons [data-minerva="button"][data-loading] [data-part="spinner"],
.pill-buttons minerva-button:state(loading)::part(spinner) {
  color: var(--warning-color);
}
\`;

export default function RestyleButton() {
  return (
    <VStack className="pill-buttons" gap={12}>
      <style>{css}</style>
      <HStack gap={8} wrap>
        <Button>React</Button>
        <Button variant="outline">Outline</Button>
        <Button loading variant="ghost">
          Saving
        </Button>
      </HStack>
      <HStack gap={8} wrap>
        <minerva-button>Web Component</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
        <minerva-button loading variant="ghost">
          Saving
        </minerva-button>
      </HStack>
    </VStack>
  );
}
`})))()}var Qe;function $e(){return($e=e((()=>{Qe=`import {
  Button,
  HStack,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalRoot,
  ModalTrigger,
} from "@minerva/lib-core";
import "@minerva/lib-web-components";

// The React content is portalled to <body>: the compound selector
// [data-minerva][data-part] matches it wherever it renders (a class on the
// trigger's container would not).
const css = \`
[data-minerva="modal"][data-part="overlay"].glass-overlay,
minerva-modal.glass::part(overlay) {
  backdrop-filter: blur(6px);
}
[data-minerva="modal"][data-part="content"].glass-content,
minerva-modal.glass::part(content) {
  border: 1px solid var(--primary-color);
  box-shadow: 0 24px 48px color-mix(in srgb, var(--primary-color) 25%, transparent);
}
[data-minerva="modal"][data-part="content"][data-state="open"].glass-content [data-part="header"],
minerva-modal.glass:state(open)::part(header) {
  color: var(--primary-color);
}
\`;

export default function RestyleModal() {
  return (
    <HStack gap={8} wrap>
      <style>{css}</style>
      <ModalRoot>
        <ModalTrigger asChild>
          <Button variant="outline">React modal</Button>
        </ModalTrigger>
        <ModalContent
          className="glass-content"
          overlayClassName="glass-overlay"
        >
          <ModalHeader>Restyled with hooks</ModalHeader>
          <ModalBody>
            The overlay, panel and title are styled from the page.
          </ModalBody>
        </ModalContent>
      </ModalRoot>
      <minerva-modal class="glass" label="Restyled with hooks">
        <minerva-button slot="trigger" variant="outline">
          Web Component modal
        </minerva-button>
        The overlay, panel and title are styled from the page.
      </minerva-modal>
    </HStack>
  );
}
`})))()}var et;function tt(){return(tt=e((()=>{et=`import { Table, VStack, type TableColumn } from "@minerva/lib-core";
import "@minerva/lib-web-components";

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

const css = \`
.ledger [data-minerva="data-table"][data-part="header-cell"],
.ledger minerva-data-table::part(header-cell) {
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 12px;
  color: var(--primary-color);
}
/* ::part() only takes user-action pseudo-classes (:hover, :focus-visible...):
   keep structural ones (:nth-child) in a React-only rule */
.ledger [data-minerva="data-table"][data-part="row"]:nth-child(even) [data-part="cell"] {
  background: color-mix(in srgb, var(--primary-color) 6%, transparent);
}
.ledger [data-minerva="data-table"][data-part="row"]:hover [data-part="cell"],
.ledger minerva-data-table::part(row):hover {
  background: color-mix(in srgb, var(--primary-color) 14%, transparent);
}
\`;

export default function RestyleTable() {
  return (
    <VStack className="ledger" gap={24}>
      <style>{css}</style>
      <Table
        aria-label="Books (React)"
        columns={columns}
        data={books}
        rowKey={(book) => book.id}
      />
      <minerva-data-table
        aria-label="Books (Web Component)"
        row-key="id"
        columns={columns}
        rows={books}
      />
    </VStack>
  );
}
`})))()}var nt;function rt(){return(rt=e((()=>{nt=`import { Tab, TabList, TabPanel, Tabs, VStack } from "@minerva/lib-core";
import "@minerva/lib-web-components";

const css = \`
.underline-tabs [data-minerva="tabs"][data-part="list"],
.underline-tabs minerva-tabs::part(list) {
  gap: 4px;
  border-bottom: 1px solid var(--border-color);
}
.underline-tabs [data-minerva="tab"][data-part="root"],
.underline-tabs minerva-tab::part(root) {
  border-radius: 0;
  border-bottom: 2px solid transparent;
  font-weight: 500;
}
.underline-tabs [data-minerva="tab"][data-state="active"],
.underline-tabs minerva-tab:state(active)::part(root) {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}
.underline-tabs [data-minerva="tab"][data-disabled],
.underline-tabs minerva-tab:state(disabled)::part(root) {
  opacity: 0.4;
}
\`;

export default function RestyleTabs() {
  return (
    <VStack className="underline-tabs" gap={24}>
      <style>{css}</style>
      <Tabs defaultValue="overview" variant="soft">
        <TabList aria-label="React tabs">
          <Tab value="overview">Overview</Tab>
          <Tab value="activity">Activity</Tab>
          <Tab value="archive" disabled>
            Archive
          </Tab>
        </TabList>
        <TabPanel value="overview">React: data-* hooks</TabPanel>
        <TabPanel value="activity">Activity</TabPanel>
        <TabPanel value="archive">Archive</TabPanel>
      </Tabs>
      <minerva-tabs value="overview" variant="soft" label="Web Component tabs">
        <minerva-tab value="overview">Overview</minerva-tab>
        <minerva-tab value="activity">Activity</minerva-tab>
        <minerva-tab value="archive" disabled>
          Archive
        </minerva-tab>
        <minerva-tab-panel value="overview">
          Web Components: ::part() and :state()
        </minerva-tab-panel>
        <minerva-tab-panel value="activity">Activity</minerva-tab-panel>
        <minerva-tab-panel value="archive">Archive</minerva-tab-panel>
      </minerva-tabs>
    </VStack>
  );
}
`})))()}var $,it,at,ot,st,ct,lt,ut,dt;function ft(){return(ft=e((()=>{S(),T(),k(),P(),R(),V(),W(),Y(),Q(),Ve(),Ue(),Ge(),qe(),Ye(),Ze(),$e(),tt(),rt(),t(),ee(),r(),Ee(),Ce(),Te(),Ae(),we(),$=i(),it=De(Object.assign({"./demos/items-menu.tsx":je,"./demos/items-pagination.tsx":Me,"./demos/items-select.tsx":Ne,"./demos/items-table.tsx":Pe,"./demos/items-toast.tsx":Fe,"./demos/restyle-button.tsx":Ie,"./demos/restyle-modal.tsx":Le,"./demos/restyle-table.tsx":Re,"./demos/restyle-tabs.tsx":ze}),Object.assign({"./demos/items-menu.tsx":Be,"./demos/items-pagination.tsx":He,"./demos/items-select.tsx":We,"./demos/items-table.tsx":Ke,"./demos/items-toast.tsx":Je,"./demos/restyle-button.tsx":Xe,"./demos/restyle-modal.tsx":Qe,"./demos/restyle-table.tsx":et,"./demos/restyle-tabs.tsx":nt})),at=`/* 1. Design tokens: the whole app (or a theme scope) */
:root {
  --primary-color: #7c3aed;
  --radius-md: 10px;
}

/* 2. Component variables (listed on each component page)... */
.toolbar {
  --button-height: 32px;
}

/* 3. ...combined with hooks: variables for one variant / state */
[data-minerva="button"][data-variant="ghost"] {
  --button-radius: 999px;
}
minerva-button:state(variant-ghost) {
  --button-radius: 999px; /* variables inherit into the shadow root */
}`,ot=`/* component root */
[data-minerva="tabs"] { }
/* a part (also matches portalled parts: popups, dialogs) */
[data-minerva="select"][data-part="content"] { }
/* a part in a state */
[data-minerva="modal"][data-part="content"][data-state="open"] { }
/* a part of a component in a state (state on the root) */
[data-minerva="button"][data-loading] [data-part="spinner"] { }`,st=`/* component: the tag */
minerva-tabs { }
/* a part: ::part() */
minerva-select::part(content) { }
/* states are custom states of the host: :state() */
minerva-modal:state(open)::part(content) { }
minerva-button:state(loading)::part(spinner) { }
minerva-button:state(size-small):state(variant-ghost) { }`,ct=`/* React: item states are attributes of the item element itself */
[data-minerva="menu"][data-part="item"][data-highlighted] { }
[data-minerva="menu"][data-part="item"][data-state="checked"] { }
[data-minerva="option"][data-selected] { }
[data-minerva="pagination"][data-part="item"][data-current] { }
[data-minerva="data-table"][data-part="header-cell"][data-sort="ascending"] { }
[data-minerva="toast-region"][data-part="toast"][data-color="success"] { }
/* the trigger of a menu (a native element child) while the menu is open */
[data-minerva="menu"][data-part="trigger"][data-state="open"] { }

/* Web components, items in the shadow root: <part>--<state> part names */
minerva-menu::part(item item--highlighted) { }
minerva-menu::part(item item--checked) { }
minerva-select::part(item item--selected) { }
minerva-pagination::part(item item--current) { }
minerva-data-table::part(header-cell header-cell--sort-ascending) { }
minerva-toast-region::part(toast toast--color-success) { }
minerva-upload::part(item item--status-error) { }

/* Web components, items that are elements of their own: :state() */
minerva-option:state(selected)::part(root) { }
minerva-tab:state(active)::part(root) { }
minerva-page-tab:state(current) { }
/* your slotted trigger, from the states of its host */
minerva-menu:state(open) > [slot="trigger"] { }`,lt=`/* The library ships inside @layer minerva: unlayered rules win,
   whatever their specificity or order */
.my-button {
  border-radius: 0; /* beats the library, no !important */
}

/* Layered app? Declare the order once, before any stylesheet */
@layer reset, minerva, app;

/* Tailwind CSS v4 */
@layer theme, base, minerva, components, utilities;

/* Unlayered resets now beat the library too: layer them */
@import url("modern-normalize.css") layer(reset);`,ut=`import { stylingHooks, wcSelector } from "@minerva/core/styling-hooks";

stylingHooks.modal.parts; // overlay, content, header, description, body, footer, close-button
stylingHooks.modal.states; // { state: ["open", "closed"], size: [...] }
wcSelector("modal", "content", { state: "open" });
// "minerva-modal:state(open)::part(content)"`,dt=()=>{let{t:e}=te(),t=t=>e(`docs.styling.${t}`),r=[[`state`,_.map(e=>`[data-state="${e}"]`).join(` `),_.map(e=>`:state(${y(`state`,e)})`).join(` `),e(`hooks.states.state`)],...Se.map(t=>[t,`[${h(t)}]`,`:state(${y(t)})`,e(`hooks.states.${t}`)]),...Oe.map(t=>[t,`[${h(t)}="…"]`,`:state(${y(t,`…`)})`,e(`hooks.states.${t}`)])],i=(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`section`,{className:v.section,"aria-labelledby":`overview`,children:[(0,$.jsx)(`h2`,{id:`overview`,children:t(`overview.title`)}),(0,$.jsx)(`p`,{className:v.prose,children:t(`overview.text`)}),(0,$.jsxs)(`ol`,{className:v.prose,children:[(0,$.jsx)(`li`,{children:t(`overview.variables`)}),(0,$.jsx)(`li`,{children:t(`overview.hooks`)}),(0,$.jsx)(`li`,{children:t(`overview.layer`)})]})]}),(0,$.jsxs)(`section`,{className:v.section,"aria-labelledby":`variables`,children:[(0,$.jsx)(`h2`,{id:`variables`,children:t(`variables.title`)}),(0,$.jsx)(`p`,{className:v.prose,children:t(`variables.text`)}),(0,$.jsx)(g,{code:at,language:`css`})]}),(0,$.jsxs)(`section`,{className:v.section,"aria-labelledby":`hooks`,children:[(0,$.jsx)(`h2`,{id:`hooks`,children:t(`hooks.title`)}),(0,$.jsx)(`p`,{className:v.prose,children:t(`hooks.text`)}),(0,$.jsx)(g,{code:ot,language:`css`}),(0,$.jsx)(`p`,{className:v.prose,children:t(`hooks.selector`)})]}),(0,$.jsxs)(`section`,{className:v.section,"aria-labelledby":`vocabulary`,children:[(0,$.jsx)(`h2`,{id:`vocabulary`,children:t(`vocabulary.title`)}),(0,$.jsx)(`p`,{className:v.prose,children:t(`vocabulary.text`)}),(0,$.jsx)(`div`,{className:v.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`vocabulary.title`),children:(0,$.jsxs)(`table`,{className:v.propsTable,children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{scope:`col`,children:e(`hooks.state`)}),(0,$.jsx)(`th`,{scope:`col`,children:`React`}),(0,$.jsx)(`th`,{scope:`col`,children:`Web Components`}),(0,$.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,$.jsx)(`tbody`,{children:r.map(([e,t,n,r])=>(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{scope:`row`,children:(0,$.jsx)(`code`,{className:v.propName,children:e})}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{className:v.propType,children:t})}),(0,$.jsx)(`td`,{children:(0,$.jsx)(`code`,{className:v.propType,children:n})}),(0,$.jsx)(`td`,{children:r})]},e))})]})}),(0,$.jsx)(`p`,{className:v.prose,children:t(`vocabulary.parts`)})]}),(0,$.jsxs)(`section`,{className:v.section,"aria-labelledby":`web-components`,children:[(0,$.jsx)(`h2`,{id:`web-components`,children:t(`wc.title`)}),(0,$.jsx)(`p`,{className:v.prose,children:t(`wc.text`)}),(0,$.jsx)(g,{code:st,language:`css`}),(0,$.jsx)(`p`,{className:v.callout,children:t(`wc.support`)})]}),(0,$.jsxs)(`section`,{className:v.section,"aria-labelledby":`items`,children:[(0,$.jsx)(`h2`,{id:`items`,children:t(`items.title`)}),(0,$.jsx)(`p`,{className:v.prose,children:t(`items.text`)}),(0,$.jsxs)(`ul`,{className:v.prose,children:[(0,$.jsx)(`li`,{children:t(`items.react`)}),(0,$.jsx)(`li`,{children:t(`items.wc`)}),(0,$.jsx)(`li`,{children:t(`items.elements`)})]}),(0,$.jsx)(g,{code:ct,language:`css`}),(0,$.jsx)(`p`,{className:v.prose,children:t(`items.dynamic`)}),(0,$.jsx)(`p`,{className:v.callout,children:t(`items.examples`)})]}),(0,$.jsxs)(`section`,{className:v.section,"aria-labelledby":`layers`,children:[(0,$.jsx)(`h2`,{id:`layers`,children:t(`layers.title`)}),(0,$.jsx)(`p`,{className:v.prose,children:t(`layers.text`)}),(0,$.jsx)(g,{code:lt,language:`css`}),(0,$.jsx)(`p`,{className:v.callout,children:t(`layers.resets`)})]})]});return(0,$.jsxs)(ke,{id:`styling`,demos:it,intro:i,children:[(0,$.jsxs)(`section`,{className:v.section,"aria-labelledby":`stability`,children:[(0,$.jsx)(`h2`,{id:`stability`,children:t(`stability.title`)}),(0,$.jsx)(`p`,{className:v.prose,children:t(`stability.text`)}),(0,$.jsx)(g,{code:ut,language:`ts`}),(0,$.jsxs)(`ul`,{className:v.prose,children:[(0,$.jsx)(`li`,{children:t(`stability.minor`)}),(0,$.jsx)(`li`,{children:t(`stability.major`)}),(0,$.jsx)(`li`,{children:t(`stability.private`)})]})]}),(0,$.jsxs)(`section`,{className:v.section,"aria-labelledby":`next`,children:[(0,$.jsx)(`h2`,{id:`next`,children:t(`next.title`)}),(0,$.jsxs)(`div`,{className:v.cardGrid,children:[(0,$.jsxs)(n,{to:`/theming`,className:v.linkCard,children:[(0,$.jsx)(`strong`,{children:e(`docs.theming.title`)}),(0,$.jsx)(`span`,{children:t(`next.theming`)})]}),(0,$.jsxs)(n,{to:`/wc-theming`,className:v.linkCard,children:[(0,$.jsx)(`strong`,{children:e(`docs.wc-theming.title`)}),(0,$.jsx)(`span`,{children:t(`next.wcTheming`)})]})]})]})]})}})))()}ft();export{dt as default};