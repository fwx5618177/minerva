import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{At as r,X as i,cn as a,ct as o,et as s,gt as c}from"./minerva-web-components-e9i9Tzii.js";import{m as l,n as u,p as d,t as f}from"./DocPage-9P1WMt4D.js";import{t as p}from"./stylingHooks-GjssfG7q.js";import{D as m,T as h,u as g}from"./icons-C9qyBhWC.js";import{t as _}from"./direction-B2fcyo3I.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,ee,N;function P(){return(P=e((()=>{v=`_rating_1wtkq_1`,y=`_stars_1wtkq_10`,b=`_star_1wtkq_10`,x=`_empty_1wtkq_21`,S=`_halfBase_1wtkq_27`,C=`_half_1wtkq_27`,w=`_halfFill_1wtkq_42`,T=`_interactive_1wtkq_55`,E=`_starButton_1wtkq_65`,D=`_value_1wtkq_90`,O=`_small_1wtkq_101`,k=`_large_1wtkq_104`,A=`_count_1wtkq_108`,j=`_scale_1wtkq_113`,M=`_scaleRow_1wtkq_120`,ee=`_scaleLabel_1wtkq_127`,N={rating:v,stars:y,star:b,empty:x,halfBase:S,half:C,halfFill:w,interactive:T,starButton:E,value:D,small:O,large:k,count:A,scale:j,scaleRow:M,scaleLabel:ee}})))()}var F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{a(),h(),_(),P(),F=t(),I=n(),L={small:12,medium:16,large:20},R=[0,1,2,3,4],z=Math.max(1,Math.round(R.length/5)),B=({fill:e,size:t})=>{let n=i(N.star,N[e]);return e===`half`?(0,I.jsxs)(`span`,{className:n,style:{width:t,height:t},...p(`rating`,`star`,{fill:e}),children:[(0,I.jsx)(g,{size:t,strokeWidth:1.5,className:N.halfBase}),(0,I.jsx)(m,{size:t,fill:`currentColor`,strokeWidth:1.5,className:N.halfFill})]}):(0,I.jsx)(g,{size:t,className:n,fill:e===`full`?`currentColor`:`none`,strokeWidth:1.5,"aria-hidden":!0,focusable:!1,...p(`rating`,`star`,{fill:e})})},V=({value:e,max:t=10,size:n=`medium`,showValue:a=!1,ratingCount:l,onChange:u,readOnly:d=!1,"aria-label":f,onKeyDown:m,className:h,style:g,ref:_,...v})=>{let y=!!u&&!d,[b,x]=(0,F.useState)(null),S=y&&b!==null?b:c(e,t),C=e=>r(e,S),w=(e,n)=>{let r=e.currentTarget.getBoundingClientRect(),i=n+(e.clientX-r.left<r.width/2?.5:1);u?.(o(i/5*t))},T=n=>{if(m?.(n),n.defaultPrevented||!y)return;let r=t/(R.length*2),i=t/R.length*z,a;switch(s(n.key,n.currentTarget)){case`ArrowRight`:case`ArrowUp`:a=Math.min(t,o(e+r));break;case`ArrowLeft`:case`ArrowDown`:a=Math.max(0,o(e-r));break;case`PageUp`:a=Math.min(t,o(e+i));break;case`PageDown`:a=Math.max(0,o(e-i));break;case`Home`:a=0;break;case`End`:a=t;break;default:return}n.preventDefault(),u?.(a)},E=L[n],D=f??`${e.toFixed(1)} / ${t}`,O=i(N.rating,N[n],y&&N.interactive,h),k=p(`rating`,`root`,{readonly:!y,size:n}),A=(0,I.jsx)(`span`,{className:N.stars,"aria-hidden":!0,...p(`rating`,`stars`),children:R.map(e=>y?(0,I.jsx)(`button`,{type:`button`,tabIndex:-1,className:N.starButton,onClick:t=>w(t,e),onMouseEnter:()=>x(e+1),children:(0,I.jsx)(B,{fill:C(e),size:E})},e):(0,I.jsx)(B,{fill:C(e),size:E},e))}),j=a&&(0,I.jsxs)(`span`,{className:N.value,...p(`rating`,`value`),children:[(0,I.jsx)(`strong`,{children:e.toFixed(1)}),l!==void 0&&(0,I.jsxs)(`span`,{className:N.count,...p(`rating`,`count`),children:[`(`,l.toLocaleString(`en-US`),`)`]})]});return y?(0,I.jsxs)(`span`,{...v,ref:_,className:O,style:g,role:`slider`,"aria-label":D,"aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":t,tabIndex:0,onKeyDown:T,onMouseLeave:()=>x(null),...k,children:[A,j]}):(0,I.jsxs)(`span`,{...v,ref:_,className:O,style:g,"aria-label":D,role:`img`,...k,children:[A,j]})},H=({dimensions:e,max:t=10,size:n=`medium`,onChange:r,readOnly:a,showValue:o=!0,className:s,ref:c})=>(0,I.jsx)(`div`,{ref:c,className:i(N.scale,s),...p(`rating-scale`,`root`,{readonly:!r||!!a,size:n}),children:e.map(e=>(0,I.jsxs)(`div`,{className:N.scaleRow,title:typeof e.hint==`string`?e.hint:void 0,...p(`rating-scale`,`row`),children:[(0,I.jsx)(`span`,{className:N.scaleLabel,...p(`rating-scale`,`label`),children:e.label}),(0,I.jsx)(V,{value:e.value,max:t,size:n,showValue:o,readOnly:a,onChange:r?t=>r(e.key,t):void 0,"aria-label":`${e.label} ${e.value.toFixed(1)} / ${t}`})]},e.key))})})))()}function te(){return(0,W.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,W.jsx)(V,{value:8.6,size:`small`}),(0,W.jsx)(V,{value:7,showValue:!0,ratingCount:3214}),(0,W.jsx)(V,{value:3.5,max:5,size:`large`,showValue:!0})]})}var W;function G(){return(G=e((()=>{U(),W=n()})))()}function ne(){let[e,t]=(0,K.useState)(6);return(0,q.jsx)(V,{value:e,onChange:t,showValue:!0,size:`large`})}var K,q;function J(){return(J=e((()=>{K=t(),U(),q=n()})))()}function re(){let[e,t]=(0,Y.useState)({plot:8.2,characters:7.5,writing:9});return(0,X.jsx)(H,{dimensions:[{key:`plot`,label:`Plot`,value:e.plot,hint:`Story and pacing`},{key:`characters`,label:`Characters`,value:e.characters},{key:`writing`,label:`Writing`,value:e.writing}],onChange:(e,n)=>t(t=>({...t,[e]:n}))})}var Y,X;function Z(){return(Z=e((()=>{Y=t(),U(),X=n()})))()}var Q;function ie(){return(ie=e((()=>{Q=`import { Rating } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Rating value={8.6} size="small" />
      <Rating value={7} showValue ratingCount={3214} />
      <Rating value={3.5} max={5} size="large" showValue />
    </div>
  );
}
`})))()}var ae;function oe(){return(oe=e((()=>{ae=`import { useState } from "react";
import { Rating } from "@minerva/lib-core";

export default function InteractiveDemo() {
  const [value, setValue] = useState(6);

  return <Rating value={value} onChange={setValue} showValue size="large" />;
}
`})))()}var $;function se(){return(se=e((()=>{$=`import { useState } from "react";
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
`})))()}var ce,le,ue;function de(){return(de=e((()=>{G(),J(),Z(),ie(),oe(),se(),t(),u(),l(),ce=n(),le=d(Object.assign({"./demos/basic.tsx":te,"./demos/interactive.tsx":ne,"./demos/scale.tsx":re}),Object.assign({"./demos/basic.tsx":Q,"./demos/interactive.tsx":ae,"./demos/scale.tsx":$})),ue=()=>(0,ce.jsx)(f,{id:`rating`,demos:le})})))()}de();export{ue as default};