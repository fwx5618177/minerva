import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{m as a,n as o,p as s,t as ee}from"./DocPage-9P1WMt4D.js";import{t as c}from"./stylingHooks-GjssfG7q.js";import{n as l,t as u}from"./Button-DN5Do18G.js";import{n as te,t as ne}from"./IconButton-CG7CH5Tv.js";import{T as d,l as f,x as p,y as re}from"./lu-C86Y0jCu.js";var m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{m=`_list_12kkq_1`,h=`_item_12kkq_13`,g=`_compact_12kkq_24`,_=`_comfortable_12kkq_29`,v=`_bordered_12kkq_34`,y=`_dividers_12kkq_74`,b=`_content_12kkq_78`,x=`_primary_12kkq_83`,S=`_secondary_12kkq_84`,C=`_icon_12kkq_105`,w=`_actions_12kkq_119`,T={list:m,item:h,compact:g,comfortable:_,bordered:v,dividers:y,content:b,primary:x,secondary:S,icon:C,actions:w}})))()}var D,O;function k(){return(k=e((()=>{i(),E(),D=n(),O=({density:e=`default`,dividers:t=!0,bordered:n=!1,role:i=`list`,className:a,ref:o,...s})=>(0,D.jsx)(`ul`,{ref:o,role:i,className:r(T.list,e===`compact`&&T.compact,e===`comfortable`&&T.comfortable,n&&T.bordered,t&&T.dividers,a),...s,...c(`list`,`root`)})})))()}var A,j,M;function N(){return(N=e((()=>{i(),E(),A=n(),j=e=>e!=null&&typeof e!=`boolean`&&e!==``,M=({primary:e,secondary:t,icon:n,actions:i,className:a,ref:o,...s})=>(0,A.jsxs)(`li`,{ref:o,className:r(T.item,a),...s,...c(`list-item`,`root`),children:[j(n)&&(0,A.jsx)(`div`,{className:T.icon,"aria-hidden":`true`,...c(`list-item`,`icon`),children:n}),(0,A.jsxs)(`div`,{className:T.content,children:[(0,A.jsx)(`div`,{className:T.primary,...c(`list-item`,`label`),children:e}),j(t)&&(0,A.jsx)(`div`,{className:T.secondary,...c(`list-item`,`description`),children:t})]}),j(i)&&(0,A.jsx)(`div`,{className:T.actions,...c(`list-item`,`actions`),children:i})]})})))()}function P(){return(0,F.jsx)(O,{"aria-label":`Registered devices`,style:{width:`100%`},children:I.map(e=>(0,F.jsx)(M,{icon:(0,F.jsx)(re,{}),primary:(0,F.jsx)(`span`,{id:`device-${e.id}`,children:e.name}),secondary:e.lastUsed,actions:(0,F.jsx)(ne,{"aria-label":`Delete device`,"aria-describedby":`device-${e.id}`,children:(0,F.jsx)(p,{})})},e.id))})}var F,I;function L(){return(L=e((()=>{te(),k(),N(),d(),F=n(),I=[{id:`phone`,name:`iPhone 16`,lastUsed:`Used 2 hours ago`},{id:`laptop`,name:`MacBook Air`,lastUsed:`Used yesterday`}]})))()}function R(){return(0,z.jsx)(O,{bordered:!0,density:`comfortable`,"aria-label":`Branches`,style:{maxWidth:560},children:B.map(e=>(0,z.jsx)(M,{icon:(0,z.jsx)(f,{}),primary:(0,z.jsx)(`span`,{id:`branch-${e.id}`,children:e.name}),secondary:e.meta,actions:(0,z.jsx)(l,{size:`small`,variant:`outline`,"aria-describedby":`branch-${e.id}`,children:`Visit`})},e.id))})}var z,B;function V(){return(V=e((()=>{u(),k(),N(),d(),z=n(),B=[{id:`main`,name:`main`,meta:`Production · deployed 3 min ago`},{id:`preview`,name:`feat/checkout`,meta:`Preview · 2 commits ahead`},{id:`docs`,name:`docs/install`,meta:`Preview · building`}]})))()}function ie(){return(0,H.jsxs)(O,{density:`compact`,dividers:!1,"aria-label":`Queue totals`,children:[(0,H.jsx)(M,{primary:`Pending`,secondary:0}),(0,H.jsx)(M,{primary:`Completed`,secondary:24})]})}var H;function U(){return(U=e((()=>{k(),N(),H=n()})))()}var W;function G(){return(G=e((()=>{W=`import { IconButton, List, ListItem } from "@minerva/lib-core";
import { LuSmartphone, LuTrash2 } from "react-icons/lu";

const devices = [
  { id: "phone", name: "iPhone 16", lastUsed: "Used 2 hours ago" },
  { id: "laptop", name: "MacBook Air", lastUsed: "Used yesterday" },
];

export default function BasicDemo() {
  return (
    <List aria-label="Registered devices" style={{ width: "100%" }}>
      {devices.map((device) => (
        <ListItem
          key={device.id}
          icon={<LuSmartphone />}
          primary={<span id={\`device-\${device.id}\`}>{device.name}</span>}
          secondary={device.lastUsed}
          actions={
            <IconButton
              aria-label="Delete device"
              aria-describedby={\`device-\${device.id}\`}
            >
              <LuTrash2 />
            </IconButton>
          }
        />
      ))}
    </List>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { Button, List, ListItem } from "@minerva/lib-core";
import { LuGitBranch } from "react-icons/lu";

const branches = [
  { id: "main", name: "main", meta: "Production · deployed 3 min ago" },
  { id: "preview", name: "feat/checkout", meta: "Preview · 2 commits ahead" },
  { id: "docs", name: "docs/install", meta: "Preview · building" },
];

export default function BorderedDemo() {
  return (
    <List
      bordered
      density="comfortable"
      aria-label="Branches"
      style={{ maxWidth: 560 }}
    >
      {branches.map((branch) => (
        <ListItem
          key={branch.id}
          icon={<LuGitBranch />}
          primary={<span id={\`branch-\${branch.id}\`}>{branch.name}</span>}
          secondary={branch.meta}
          actions={
            <Button
              size="small"
              variant="outline"
              aria-describedby={\`branch-\${branch.id}\`}
            >
              Visit
            </Button>
          }
        />
      ))}
    </List>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { List, ListItem } from "@minerva/lib-core";

export default function CompactDemo() {
  return (
    <List density="compact" dividers={false} aria-label="Queue totals">
      <ListItem primary="Pending" secondary={0} />
      <ListItem primary="Completed" secondary={24} />
    </List>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{L(),V(),U(),G(),q(),Y(),t(),o(),a(),X=n(),Z=s(Object.assign({"./demos/basic.tsx":P,"./demos/bordered.tsx":R,"./demos/compact.tsx":ie}),Object.assign({"./demos/basic.tsx":W,"./demos/bordered.tsx":K,"./demos/compact.tsx":J})),Q=()=>(0,X.jsx)(ee,{id:`list`,demos:Z})})))()}$();export{Q as default};