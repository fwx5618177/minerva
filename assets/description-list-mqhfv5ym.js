import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{m as a,n as o,p as s,t as c}from"./DocPage-9P1WMt4D.js";import{t as l}from"./stylingHooks-GjssfG7q.js";var u,d,f,p,m;function h(){return(h=e((()=>{u=`_descriptionList_1v9yl_1`,d=`_row_1v9yl_11`,f=`_bordered_1v9yl_51`,p=`_striped_1v9yl_61`,m={descriptionList:u,row:d,bordered:f,striped:p}})))()}var g,_;function v(){return(v=e((()=>{i(),h(),g=n(),_=({items:e,bordered:t=!1,striped:n=!1,className:i,ref:a,...o})=>(0,g.jsx)(`dl`,{ref:a,className:r(m.descriptionList,t&&m.bordered,n&&m.striped,i),...o,...l(`description-list`,`root`),children:e.map(e=>(0,g.jsxs)(`div`,{className:m.row,...l(`description-list`,`row`),children:[(0,g.jsx)(`dt`,{...l(`description-list`,`term`),children:e.label}),(0,g.jsx)(`dd`,{...l(`description-list`,`description`),children:e.value})]},e.key))})})))()}function y(){return(0,b.jsx)(_,{"aria-label":`Account`,items:[{key:`name`,label:`Display name`,value:`Lu Xun`},{key:`id`,label:`Account ID`,value:(0,b.jsx)(`code`,{children:`12345678-1234-4234-8234-123456789012`})},{key:`keys`,label:`Passkeys`,value:0}]})}var b;function x(){return(x=e((()=>{v(),b=n()})))()}function S(){return(0,C.jsxs)(`div`,{style:{display:`grid`,gap:24,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,alignItems:`start`},children:[(0,C.jsx)(_,{bordered:!0,items:w}),(0,C.jsx)(_,{striped:!0,items:w})]})}var C,w;function T(){return(T=e((()=>{v(),C=n(),w=[{key:`project`,label:`Project`,value:`minerva-docs`},{key:`region`,label:`Region`,value:`Frankfurt (fra1)`},{key:`runtime`,label:`Runtime`,value:`Node.js 22`},{key:`updated`,label:`Updated`,value:`2 minutes ago`}]})))()}var E;function D(){return(D=e((()=>{E=`import { DescriptionList } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <DescriptionList
      aria-label="Account"
      items={[
        { key: "name", label: "Display name", value: "Lu Xun" },
        {
          key: "id",
          label: "Account ID",
          value: <code>12345678-1234-4234-8234-123456789012</code>,
        },
        { key: "keys", label: "Passkeys", value: 0 },
      ]}
    />
  );
}
`})))()}var O;function k(){return(k=e((()=>{O=`import { DescriptionList } from "@minerva/lib-core";

const items = [
  { key: "project", label: "Project", value: "minerva-docs" },
  { key: "region", label: "Region", value: "Frankfurt (fra1)" },
  { key: "runtime", label: "Runtime", value: "Node.js 22" },
  { key: "updated", label: "Updated", value: "2 minutes ago" },
];

export default function VariantsDemo() {
  return (
    <div
      style={{
        display: "grid",
        gap: 24,
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        alignItems: "start",
      }}
    >
      <DescriptionList bordered items={items} />
      <DescriptionList striped items={items} />
    </div>
  );
}
`})))()}var A,j,M;function N(){return(N=e((()=>{x(),T(),D(),k(),t(),o(),a(),A=n(),j=s(Object.assign({"./demos/basic.tsx":y,"./demos/variants.tsx":S}),Object.assign({"./demos/basic.tsx":E,"./demos/variants.tsx":O})),M=()=>(0,A.jsx)(c,{id:`description-list`,demos:j})})))()}N();export{M as default};