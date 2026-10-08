import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{Kt as r,Ot as i,Qt as a,en as o,vt as s,x as c}from"./minerva-web-components-gmidRbuG.js";import{m as l,n as u,p as d,t as f}from"./DocPage-OkRujup2.js";import{t as p}from"./stylingHooks-GjssfG7q.js";import{D as ee,T as m,u as h}from"./icons-Dj0E45-e.js";import{t as g}from"./direction-DP7if3Ff.js";import{o as _,s as te}from"./Tabs-Of4Imq8c.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{v=`_rating_1wtkq_1`,y=`_stars_1wtkq_10`,b=`_star_1wtkq_10`,x=`_empty_1wtkq_21`,S=`_halfBase_1wtkq_27`,C=`_half_1wtkq_27`,w=`_halfFill_1wtkq_42`,T=`_interactive_1wtkq_55`,E=`_starButton_1wtkq_65`,D=`_value_1wtkq_90`,O=`_small_1wtkq_101`,k=`_large_1wtkq_104`,A=`_count_1wtkq_108`,j=`_scale_1wtkq_113`,M=`_scaleRow_1wtkq_120`,N=`_scaleLabel_1wtkq_127`,P={rating:v,stars:y,star:b,empty:x,halfBase:S,half:C,halfFill:w,interactive:T,starButton:E,value:D,small:O,large:k,count:A,scale:j,scaleRow:M,scaleLabel:N}})))()}var I,L,R,z,B,V;function H(){return(H=e((()=>{i(),m(),g(),_(),F(),t(),I=n(),L={small:12,medium:16,large:20},R=Array.from({length:5},(e,t)=>t),z=({fill:e,size:t})=>{let n=o(P.star,P[e]);return e===`half`?(0,I.jsxs)(`span`,{className:n,style:{width:t,height:t},...p(`rating`,`star`,{fill:e}),children:[(0,I.jsx)(h,{size:t,strokeWidth:1.5,className:P.halfBase}),(0,I.jsx)(ee,{size:t,fill:`currentColor`,strokeWidth:1.5,className:P.halfFill})]}):(0,I.jsx)(h,{size:t,className:n,fill:e===`full`?`currentColor`:`none`,strokeWidth:1.5,"aria-hidden":!0,focusable:!1,...p(`rating`,`star`,{fill:e})})},B=({value:e,max:t=10,size:n=`medium`,showValue:i=!1,ratingCount:l,onChange:u,readOnly:d=!1,"aria-label":f,onKeyDown:ee,className:m,style:h,ref:g,..._})=>{let v=!!u&&!d,[y,b]=te(s,{value:e,max:t,readOnly:!v,onValueChange:u}),x=a(y,t),S=e=>x[e],C=(e,t)=>{let n=e.currentTarget.getBoundingClientRect(),r=e.clientX-n.left<n.width/2;b({type:`PICK`,index:t,half:r})},w=n=>{if(ee?.(n),n.defaultPrevented||!v)return;let i=c(n.key,n.currentTarget);r(i,e,t)!==null&&(n.preventDefault(),b({type:`KEY`,key:i}))},T=L[n],E=f??`${e.toFixed(1)} / ${t}`,D=o(P.rating,P[n],v&&P.interactive,m),O=p(`rating`,`root`,{readonly:!v,size:n}),k=(0,I.jsx)(`span`,{className:P.stars,"aria-hidden":!0,...p(`rating`,`stars`),children:R.map(e=>v?(0,I.jsx)(`button`,{type:`button`,tabIndex:-1,className:P.starButton,onClick:t=>C(t,e),onMouseEnter:()=>b({type:`HOVER`,index:e}),children:(0,I.jsx)(z,{fill:S(e),size:T})},e):(0,I.jsx)(z,{fill:S(e),size:T},e))}),A=i&&(0,I.jsxs)(`span`,{className:P.value,...p(`rating`,`value`),children:[(0,I.jsx)(`strong`,{children:e.toFixed(1)}),l!==void 0&&(0,I.jsxs)(`span`,{className:P.count,...p(`rating`,`count`),children:[`(`,l.toLocaleString(`en-US`),`)`]})]});return v?(0,I.jsxs)(`span`,{..._,ref:g,className:D,style:h,role:`slider`,"aria-label":E,"aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":t,tabIndex:0,onKeyDown:w,onMouseLeave:()=>b({type:`HOVER_END`}),...O,children:[k,A]}):(0,I.jsxs)(`span`,{..._,ref:g,className:D,style:h,"aria-label":E,role:`img`,...O,children:[k,A]})},V=({dimensions:e,max:t=10,size:n=`medium`,onChange:r,readOnly:i,showValue:a=!0,className:s,ref:c})=>(0,I.jsx)(`div`,{ref:c,className:o(P.scale,s),...p(`rating-scale`,`root`,{readonly:!r||!!i,size:n}),children:e.map(e=>(0,I.jsxs)(`div`,{className:P.scaleRow,title:typeof e.hint==`string`?e.hint:void 0,...p(`rating-scale`,`row`),children:[(0,I.jsx)(`span`,{className:P.scaleLabel,...p(`rating-scale`,`label`),children:e.label}),(0,I.jsx)(B,{value:e.value,max:t,size:n,showValue:a,readOnly:i,onChange:r?t=>r(e.key,t):void 0,"aria-label":`${e.label} ${e.value.toFixed(1)} / ${t}`})]},e.key))})})))()}function ne(){return(0,U.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,U.jsx)(B,{value:8.6,size:`small`}),(0,U.jsx)(B,{value:7,showValue:!0,ratingCount:3214}),(0,U.jsx)(B,{value:3.5,max:5,size:`large`,showValue:!0})]})}var U;function W(){return(W=e((()=>{H(),U=n()})))()}function re(){let[e,t]=(0,G.useState)(6);return(0,K.jsx)(B,{value:e,onChange:t,showValue:!0,size:`large`})}var G,K;function q(){return(q=e((()=>{G=t(),H(),K=n()})))()}function ie(){let[e,t]=(0,J.useState)({plot:8.2,characters:7.5,writing:9});return(0,Y.jsx)(V,{dimensions:[{key:`plot`,label:`Plot`,value:e.plot,hint:`Story and pacing`},{key:`characters`,label:`Characters`,value:e.characters},{key:`writing`,label:`Writing`,value:e.writing}],onChange:(e,n)=>t(t=>({...t,[e]:n}))})}var J,Y;function X(){return(X=e((()=>{J=t(),H(),Y=n()})))()}var Z;function Q(){return(Q=e((()=>{Z=`import { Rating } from "minerva-design";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Rating value={8.6} size="small" />
      <Rating value={7} showValue ratingCount={3214} />
      <Rating value={3.5} max={5} size="large" showValue />
    </div>
  );
}
`})))()}var $;function ae(){return(ae=e((()=>{$=`import { useState } from "react";
import { Rating } from "minerva-design";

export default function InteractiveDemo() {
  const [value, setValue] = useState(6);

  return <Rating value={value} onChange={setValue} showValue size="large" />;
}
`})))()}var oe;function se(){return(se=e((()=>{oe=`import { useState } from "react";
import { RatingScale } from "minerva-design";

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
`})))()}var ce,le,ue;function de(){return(de=e((()=>{W(),q(),X(),Q(),ae(),se(),t(),u(),l(),ce=n(),le=d(Object.assign({"./demos/basic.tsx":ne,"./demos/interactive.tsx":re,"./demos/scale.tsx":ie}),Object.assign({"./demos/basic.tsx":Z,"./demos/interactive.tsx":$,"./demos/scale.tsx":oe})),ue=()=>(0,ce.jsx)(f,{id:`rating`,demos:le})})))()}de();export{ue as default};