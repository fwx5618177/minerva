import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{At as r,X as i,cn as a,ct as o,et as s,gt as c}from"./minerva-web-components-e9i9Tzii.js";import{D as l,T as u,u as d}from"./icons-C9qyBhWC.js";import{t as f}from"./direction-B2fcyo3I.js";import{c as p,n as m,s as h,t as g}from"./DocPage-DEXoN4OO.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,ee,M;function N(){return(N=e((()=>{_=`_rating_1pjh6_1`,v=`_stars_1pjh6_10`,y=`_star_1pjh6_10`,b=`_empty_1pjh6_21`,x=`_half_1pjh6_25`,S=`_halfBase_1pjh6_29`,C=`_halfFill_1pjh6_35`,w=`_interactive_1pjh6_48`,T=`_starButton_1pjh6_56`,E=`_value_1pjh6_77`,D=`_small_1pjh6_88`,O=`_large_1pjh6_91`,k=`_count_1pjh6_95`,A=`_scale_1pjh6_100`,j=`_scaleRow_1pjh6_107`,ee=`_scaleLabel_1pjh6_114`,M={rating:_,stars:v,star:y,empty:b,half:x,halfBase:S,halfFill:C,interactive:w,starButton:T,value:E,small:D,large:O,count:k,scale:A,scaleRow:j,scaleLabel:ee}})))()}var P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{a(),u(),f(),N(),P=t(),F=n(),I={small:12,medium:16,large:20},L=[0,1,2,3,4],R=Math.max(1,Math.round(L.length/5)),z=({fill:e,size:t})=>{let n=i(M.star,M[e]);return e===`half`?(0,F.jsxs)(`span`,{className:n,style:{width:t,height:t},children:[(0,F.jsx)(d,{size:t,strokeWidth:1.5,className:M.halfBase}),(0,F.jsx)(l,{size:t,fill:`currentColor`,strokeWidth:1.5,className:M.halfFill})]}):(0,F.jsx)(d,{size:t,className:n,fill:e===`full`?`currentColor`:`none`,strokeWidth:1.5,"aria-hidden":!0,focusable:!1})},B=({value:e,max:t=10,size:n=`medium`,showValue:a=!1,ratingCount:l,onChange:u,readOnly:d=!1,"aria-label":f,onKeyDown:p,className:m,style:h,ref:g,..._})=>{let v=!!u&&!d,[y,b]=(0,P.useState)(null),x=v&&y!==null?y:c(e,t),S=e=>r(e,x),C=(e,n)=>{let r=e.currentTarget.getBoundingClientRect(),i=n+(e.clientX-r.left<r.width/2?.5:1);u?.(o(i/5*t))},w=n=>{if(p?.(n),n.defaultPrevented||!v)return;let r=t/(L.length*2),i=t/L.length*R,a;switch(s(n.key,n.currentTarget)){case`ArrowRight`:case`ArrowUp`:a=Math.min(t,o(e+r));break;case`ArrowLeft`:case`ArrowDown`:a=Math.max(0,o(e-r));break;case`PageUp`:a=Math.min(t,o(e+i));break;case`PageDown`:a=Math.max(0,o(e-i));break;case`Home`:a=0;break;case`End`:a=t;break;default:return}n.preventDefault(),u?.(a)},T=I[n],E=f??`${e.toFixed(1)} / ${t}`,D=i(M.rating,M[n],v&&M.interactive,m),O=(0,F.jsx)(`span`,{className:M.stars,"aria-hidden":!0,children:L.map(e=>v?(0,F.jsx)(`button`,{type:`button`,tabIndex:-1,className:M.starButton,onClick:t=>C(t,e),onMouseEnter:()=>b(e+1),children:(0,F.jsx)(z,{fill:S(e),size:T})},e):(0,F.jsx)(z,{fill:S(e),size:T},e))}),k=a&&(0,F.jsxs)(`span`,{className:M.value,children:[(0,F.jsx)(`strong`,{children:e.toFixed(1)}),l!==void 0&&(0,F.jsxs)(`span`,{className:M.count,children:[`(`,l.toLocaleString(`en-US`),`)`]})]});return v?(0,F.jsxs)(`span`,{..._,ref:g,className:D,style:h,role:`slider`,"aria-label":E,"aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":t,tabIndex:0,onKeyDown:w,onMouseLeave:()=>b(null),children:[O,k]}):(0,F.jsxs)(`span`,{..._,ref:g,className:D,style:h,"aria-label":E,role:`img`,children:[O,k]})},V=({dimensions:e,max:t=10,size:n=`medium`,onChange:r,readOnly:a,showValue:o=!0,className:s,ref:c})=>(0,F.jsx)(`div`,{ref:c,className:i(M.scale,s),children:e.map(e=>(0,F.jsxs)(`div`,{className:M.scaleRow,title:typeof e.hint==`string`?e.hint:void 0,children:[(0,F.jsx)(`span`,{className:M.scaleLabel,children:e.label}),(0,F.jsx)(B,{value:e.value,max:t,size:n,showValue:o,readOnly:a,onChange:r?t=>r(e.key,t):void 0,"aria-label":`${e.label} ${e.value.toFixed(1)} / ${t}`})]},e.key))})})))()}function te(){return(0,U.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,U.jsx)(B,{value:8.6,size:`small`}),(0,U.jsx)(B,{value:7,showValue:!0,ratingCount:3214}),(0,U.jsx)(B,{value:3.5,max:5,size:`large`,showValue:!0})]})}var U;function W(){return(W=e((()=>{H(),U=n()})))()}function ne(){let[e,t]=(0,G.useState)(6);return(0,K.jsx)(B,{value:e,onChange:t,showValue:!0,size:`large`})}var G,K;function q(){return(q=e((()=>{G=t(),H(),K=n()})))()}function re(){let[e,t]=(0,J.useState)({plot:8.2,characters:7.5,writing:9});return(0,Y.jsx)(V,{dimensions:[{key:`plot`,label:`Plot`,value:e.plot,hint:`Story and pacing`},{key:`characters`,label:`Characters`,value:e.characters},{key:`writing`,label:`Writing`,value:e.writing}],onChange:(e,n)=>t(t=>({...t,[e]:n}))})}var J,Y;function X(){return(X=e((()=>{J=t(),H(),Y=n()})))()}var Z;function Q(){return(Q=e((()=>{Z=`import { Rating } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Rating value={8.6} size="small" />
      <Rating value={7} showValue ratingCount={3214} />
      <Rating value={3.5} max={5} size="large" showValue />
    </div>
  );
}
`})))()}var ie;function ae(){return(ae=e((()=>{ie=`import { useState } from "react";
import { Rating } from "@minerva/lib-core";

export default function InteractiveDemo() {
  const [value, setValue] = useState(6);

  return <Rating value={value} onChange={setValue} showValue size="large" />;
}
`})))()}var oe;function $(){return($=e((()=>{oe=`import { useState } from "react";
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
`})))()}var se,ce,le;function ue(){return(ue=e((()=>{W(),q(),X(),Q(),ae(),$(),t(),m(),p(),se=n(),ce=h(Object.assign({"./demos/basic.tsx":te,"./demos/interactive.tsx":ne,"./demos/scale.tsx":re}),Object.assign({"./demos/basic.tsx":Z,"./demos/interactive.tsx":ie,"./demos/scale.tsx":oe})),le=()=>(0,se.jsx)(g,{id:`rating`,demos:ce})})))()}ue();export{le as default};