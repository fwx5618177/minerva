import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{L as r,Rt as i,Xt as a,v as o}from"./dist-DkgrNLMS.js";import{F as s,R as c,W as l}from"./lu-ChkgBQsL.js";import{c as u,n as d,s as f,t as p}from"./DocPage-Bnv84vTs.js";function m(){return(0,h.jsx)(r,{"aria-label":`Registered devices`,style:{width:`100%`},children:g.map(e=>(0,h.jsx)(o,{icon:(0,h.jsx)(s,{}),primary:(0,h.jsx)(`span`,{id:`device-${e.id}`,children:e.name}),secondary:e.lastUsed,actions:(0,h.jsx)(a,{ariaLabel:`Delete device`,"aria-describedby":`device-${e.id}`,children:(0,h.jsx)(c,{})})},e.id))})}var h,g;function _(){return(_=e((()=>{i(),l(),h=n(),g=[{id:`phone`,name:`iPhone 16`,lastUsed:`Used 2 hours ago`},{id:`laptop`,name:`MacBook Air`,lastUsed:`Used yesterday`}]})))()}function v(){return(0,y.jsxs)(r,{density:`compact`,dividers:!1,"aria-label":`Queue totals`,children:[(0,y.jsx)(o,{primary:`Pending`,secondary:0}),(0,y.jsx)(o,{primary:`Completed`,secondary:24})]})}var y;function b(){return(b=e((()=>{i(),y=n()})))()}var x;function S(){return(S=e((()=>{x=`import { IconButton, List, ListItem } from "@minerva/lib-core";
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
              ariaLabel="Delete device"
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
`})))()}var C;function w(){return(w=e((()=>{C=`import { List, ListItem } from "@minerva/lib-core";

export default function CompactDemo() {
  return (
    <List density="compact" dividers={false} aria-label="Queue totals">
      <ListItem primary="Pending" secondary={0} />
      <ListItem primary="Completed" secondary={24} />
    </List>
  );
}
`})))()}var T,E,D;function O(){return(O=e((()=>{_(),b(),S(),w(),t(),d(),u(),T=n(),E=f(Object.assign({"./demos/basic.tsx":m,"./demos/compact.tsx":v}),Object.assign({"./demos/basic.tsx":x,"./demos/compact.tsx":C})),D=()=>(0,T.jsx)(p,{id:`list`,demos:E})})))()}O();export{D as default};