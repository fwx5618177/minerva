import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Ht as r,Jt as i,a}from"./dist-BWNqkmth.js";import{c as o,n as s,s as c,t as l}from"./DocPage-DGOZswYH.js";function u(){return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,d.jsx)(i,{value:8.6,size:`small`}),(0,d.jsx)(i,{value:7,showValue:!0,ratingCount:3214}),(0,d.jsx)(i,{value:3.5,max:5,size:`large`,showValue:!0})]})}var d;function f(){return(f=e((()=>{r(),d=n()})))()}function p(){let[e,t]=(0,m.useState)(6);return(0,h.jsx)(i,{value:e,onChange:t,showValue:!0,size:`large`})}var m,h;function g(){return(g=e((()=>{m=t(),r(),h=n()})))()}function _(){let[e,t]=(0,v.useState)({plot:8.2,characters:7.5,writing:9});return(0,y.jsx)(a,{dimensions:[{key:`plot`,label:`Plot`,value:e.plot,hint:`Story and pacing`},{key:`characters`,label:`Characters`,value:e.characters},{key:`writing`,label:`Writing`,value:e.writing}],onChange:(e,n)=>t(t=>({...t,[e]:n}))})}var v,y;function b(){return(b=e((()=>{v=t(),r(),y=n()})))()}var x;function S(){return(S=e((()=>{x=`import { Rating } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Rating value={8.6} size="small" />
      <Rating value={7} showValue ratingCount={3214} />
      <Rating value={3.5} max={5} size="large" showValue />
    </div>
  );
}
`})))()}var C;function w(){return(w=e((()=>{C=`import { useState } from "react";
import { Rating } from "@minerva/lib-core";

export default function InteractiveDemo() {
  const [value, setValue] = useState(6);

  return <Rating value={value} onChange={setValue} showValue size="large" />;
}
`})))()}var T;function E(){return(E=e((()=>{T=`import { useState } from "react";
import { RatingScale } from "@minerva/lib-core";

export default function ScaleDemo() {
  const [scores, setScores] = useState({
    plot: 8.2,
    characters: 7.5,
    writing: 9,
  });

  return (
    <RatingScale
      dimensions={[
        {
          key: "plot",
          label: "Plot",
          value: scores.plot,
          hint: "Story and pacing",
        },
        { key: "characters", label: "Characters", value: scores.characters },
        { key: "writing", label: "Writing", value: scores.writing },
      ]}
      onChange={(key, value) =>
        setScores((prev) => ({ ...prev, [key]: value }))
      }
    />
  );
}
`})))()}var D,O,k;function A(){return(A=e((()=>{f(),g(),b(),S(),w(),E(),t(),s(),o(),D=n(),O=c(Object.assign({"./demos/basic.tsx":u,"./demos/interactive.tsx":p,"./demos/scale.tsx":_}),Object.assign({"./demos/basic.tsx":x,"./demos/interactive.tsx":C,"./demos/scale.tsx":T})),k=()=>(0,D.jsx)(l,{id:`rating`,demos:O})})))()}A();export{k as default};