import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{O as r,c as i,k as a,n as o,s,t as c}from"./DocPage-BvqFnACE.js";import{n as l,t as u}from"./IconButton-CIvDcJLq.js";import{b as d,v as f,w as p}from"./lu-oN_z8qzA.js";var m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{m=`_list_oz29b_1`,h=`_item_oz29b_13`,g=`_compact_oz29b_24`,_=`_dividers_oz29b_29`,v=`_content_oz29b_33`,y=`_primary_oz29b_38`,b=`_secondary_oz29b_39`,x=`_icon_oz29b_60`,S=`_actions_oz29b_74`,C={list:m,item:h,compact:g,dividers:_,content:v,primary:y,secondary:b,icon:x,actions:S}})))()}var T,E;function D(){return(D=e((()=>{r(),w(),T=n(),E=({density:e=`default`,dividers:t=!0,role:n=`list`,className:r,ref:i,...o})=>(0,T.jsx)(`ul`,{ref:i,role:n,className:a(C.list,e===`compact`&&C.compact,t&&C.dividers,r),...o})})))()}var O,k,A;function j(){return(j=e((()=>{r(),w(),O=n(),k=e=>e!=null&&typeof e!=`boolean`&&e!==``,A=({primary:e,secondary:t,icon:n,actions:r,className:i,ref:o,...s})=>(0,O.jsxs)(`li`,{ref:o,className:a(C.item,i),...s,children:[k(n)&&(0,O.jsx)(`div`,{className:C.icon,"aria-hidden":`true`,children:n}),(0,O.jsxs)(`div`,{className:C.content,children:[(0,O.jsx)(`div`,{className:C.primary,children:e}),k(t)&&(0,O.jsx)(`div`,{className:C.secondary,children:t})]}),k(r)&&(0,O.jsx)(`div`,{className:C.actions,children:r})]})})))()}function M(){return(0,N.jsx)(E,{"aria-label":`Registered devices`,style:{width:`100%`},children:P.map(e=>(0,N.jsx)(A,{icon:(0,N.jsx)(f,{}),primary:(0,N.jsx)(`span`,{id:`device-${e.id}`,children:e.name}),secondary:e.lastUsed,actions:(0,N.jsx)(u,{"aria-label":`Delete device`,"aria-describedby":`device-${e.id}`,children:(0,N.jsx)(d,{})})},e.id))})}var N,P;function F(){return(F=e((()=>{l(),D(),j(),p(),N=n(),P=[{id:`phone`,name:`iPhone 16`,lastUsed:`Used 2 hours ago`},{id:`laptop`,name:`MacBook Air`,lastUsed:`Used yesterday`}]})))()}function I(){return(0,L.jsxs)(E,{density:`compact`,dividers:!1,"aria-label":`Queue totals`,children:[(0,L.jsx)(A,{primary:`Pending`,secondary:0}),(0,L.jsx)(A,{primary:`Completed`,secondary:24})]})}var L;function R(){return(R=e((()=>{D(),j(),L=n()})))()}var z;function B(){return(B=e((()=>{z=`import { IconButton, List, ListItem } from "@minerva/lib-core";
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
`})))()}var V;function H(){return(H=e((()=>{V=`import { List, ListItem } from "@minerva/lib-core";

export default function CompactDemo() {
  return (
    <List density="compact" dividers={false} aria-label="Queue totals">
      <ListItem primary="Pending" secondary={0} />
      <ListItem primary="Completed" secondary={24} />
    </List>
  );
}
`})))()}var U,W,G;function K(){return(K=e((()=>{F(),R(),B(),H(),t(),o(),i(),U=n(),W=s(Object.assign({"./demos/basic.tsx":M,"./demos/compact.tsx":I}),Object.assign({"./demos/basic.tsx":z,"./demos/compact.tsx":V})),G=()=>(0,U.jsx)(c,{id:`list`,demos:W})})))()}K();export{G as default};