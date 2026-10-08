import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i}from"./minerva-web-components-e9i9Tzii.js";import{t as a}from"./stylingHooks-GjssfG7q.js";import{n as o,t as s}from"./IconButton-EM8CzPwt.js";import{m as c,n as l,p as u,t as d}from"./DocPage-44Ak-YGP.js";import{b as f,v as p,w as m}from"./lu-CClVBj5g.js";var h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{h=`_list_oz29b_1`,g=`_item_oz29b_13`,_=`_compact_oz29b_24`,v=`_dividers_oz29b_29`,y=`_content_oz29b_33`,b=`_primary_oz29b_38`,x=`_secondary_oz29b_39`,S=`_icon_oz29b_60`,C=`_actions_oz29b_74`,w={list:h,item:g,compact:_,dividers:v,content:y,primary:b,secondary:x,icon:S,actions:C}})))()}var E,D;function O(){return(O=e((()=>{i(),T(),E=n(),D=({density:e=`default`,dividers:t=!0,role:n=`list`,className:i,ref:o,...s})=>(0,E.jsx)(`ul`,{ref:o,role:n,className:r(w.list,e===`compact`&&w.compact,t&&w.dividers,i),...s,...a(`list`,`root`)})})))()}var k,A,j;function M(){return(M=e((()=>{i(),T(),k=n(),A=e=>e!=null&&typeof e!=`boolean`&&e!==``,j=({primary:e,secondary:t,icon:n,actions:i,className:o,ref:s,...c})=>(0,k.jsxs)(`li`,{ref:s,className:r(w.item,o),...c,...a(`list-item`,`root`),children:[A(n)&&(0,k.jsx)(`div`,{className:w.icon,"aria-hidden":`true`,...a(`list-item`,`icon`),children:n}),(0,k.jsxs)(`div`,{className:w.content,children:[(0,k.jsx)(`div`,{className:w.primary,...a(`list-item`,`label`),children:e}),A(t)&&(0,k.jsx)(`div`,{className:w.secondary,...a(`list-item`,`description`),children:t})]}),A(i)&&(0,k.jsx)(`div`,{className:w.actions,...a(`list-item`,`actions`),children:i})]})})))()}function N(){return(0,P.jsx)(D,{"aria-label":`Registered devices`,style:{width:`100%`},children:F.map(e=>(0,P.jsx)(j,{icon:(0,P.jsx)(p,{}),primary:(0,P.jsx)(`span`,{id:`device-${e.id}`,children:e.name}),secondary:e.lastUsed,actions:(0,P.jsx)(s,{"aria-label":`Delete device`,"aria-describedby":`device-${e.id}`,children:(0,P.jsx)(f,{})})},e.id))})}var P,F;function I(){return(I=e((()=>{o(),O(),M(),m(),P=n(),F=[{id:`phone`,name:`iPhone 16`,lastUsed:`Used 2 hours ago`},{id:`laptop`,name:`MacBook Air`,lastUsed:`Used yesterday`}]})))()}function L(){return(0,R.jsxs)(D,{density:`compact`,dividers:!1,"aria-label":`Queue totals`,children:[(0,R.jsx)(j,{primary:`Pending`,secondary:0}),(0,R.jsx)(j,{primary:`Completed`,secondary:24})]})}var R;function z(){return(z=e((()=>{O(),M(),R=n()})))()}var B;function V(){return(V=e((()=>{B=`import { IconButton, List, ListItem } from "@minerva/lib-core";
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
`})))()}var H;function U(){return(U=e((()=>{H=`import { List, ListItem } from "@minerva/lib-core";

export default function CompactDemo() {
  return (
    <List density="compact" dividers={false} aria-label="Queue totals">
      <ListItem primary="Pending" secondary={0} />
      <ListItem primary="Completed" secondary={24} />
    </List>
  );
}
`})))()}var W,G,K;function q(){return(q=e((()=>{I(),z(),V(),U(),t(),l(),c(),W=n(),G=u(Object.assign({"./demos/basic.tsx":N,"./demos/compact.tsx":L}),Object.assign({"./demos/basic.tsx":B,"./demos/compact.tsx":H})),K=()=>(0,W.jsx)(d,{id:`list`,demos:G})})))()}q();export{K as default};