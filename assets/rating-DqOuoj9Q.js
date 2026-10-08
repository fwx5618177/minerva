import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{B as r,E as i,o as a,u as o,v as s,vt as c}from"./minerva-web-components-ByJsjP0z.js";import{m as l,n as u,p as d,t as ee}from"./DocPage-CVA4UCUb.js";import{t as f}from"./stylingHooks-GjssfG7q.js";import{D as p,T as m,u as h}from"./icons-C9qyBhWC.js";import{t as g}from"./direction-BB7i66oX.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{_=`_rating_1wtkq_1`,v=`_stars_1wtkq_10`,y=`_star_1wtkq_10`,b=`_empty_1wtkq_21`,x=`_halfBase_1wtkq_27`,S=`_half_1wtkq_27`,C=`_halfFill_1wtkq_42`,w=`_interactive_1wtkq_55`,T=`_starButton_1wtkq_65`,E=`_value_1wtkq_90`,D=`_small_1wtkq_101`,O=`_large_1wtkq_104`,k=`_count_1wtkq_108`,A=`_scale_1wtkq_113`,j=`_scaleRow_1wtkq_120`,M=`_scaleLabel_1wtkq_127`,N={rating:_,stars:v,star:y,empty:b,halfBase:x,half:S,halfFill:C,interactive:w,starButton:T,value:E,small:D,large:O,count:k,scale:A,scaleRow:j,scaleLabel:M}})))()}var F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{c(),m(),g(),P(),F=t(),I=n(),L={small:12,medium:16,large:20},R=[0,1,2,3,4],z=Math.max(1,Math.round(R.length/5)),B=({fill:e,size:t})=>{let n=a(N.star,N[e]);return e===`half`?(0,I.jsxs)(`span`,{className:n,style:{width:t,height:t},...f(`rating`,`star`,{fill:e}),children:[(0,I.jsx)(h,{size:t,strokeWidth:1.5,className:N.halfBase}),(0,I.jsx)(p,{size:t,fill:`currentColor`,strokeWidth:1.5,className:N.halfFill})]}):(0,I.jsx)(h,{size:t,className:n,fill:e===`full`?`currentColor`:`none`,strokeWidth:1.5,"aria-hidden":!0,focusable:!1,...f(`rating`,`star`,{fill:e})})},V=({value:e,max:t=10,size:n=`medium`,showValue:c=!1,ratingCount:l,onChange:u,readOnly:d=!1,"aria-label":ee,onKeyDown:p,className:m,style:h,ref:g,..._})=>{let v=!!u&&!d,[y,b]=(0,F.useState)(null),x=v&&y!==null?y:i(e,t),S=e=>r(e,x),C=(e,n)=>{let r=e.currentTarget.getBoundingClientRect(),i=n+(e.clientX-r.left<r.width/2?.5:1);u?.(s(i/5*t))},w=n=>{if(p?.(n),n.defaultPrevented||!v)return;let r=t/(R.length*2),i=t/R.length*z,a;switch(o(n.key,n.currentTarget)){case`ArrowRight`:case`ArrowUp`:a=Math.min(t,s(e+r));break;case`ArrowLeft`:case`ArrowDown`:a=Math.max(0,s(e-r));break;case`PageUp`:a=Math.min(t,s(e+i));break;case`PageDown`:a=Math.max(0,s(e-i));break;case`Home`:a=0;break;case`End`:a=t;break;default:return}n.preventDefault(),u?.(a)},T=L[n],E=ee??`${e.toFixed(1)} / ${t}`,D=a(N.rating,N[n],v&&N.interactive,m),O=f(`rating`,`root`,{readonly:!v,size:n}),k=(0,I.jsx)(`span`,{className:N.stars,"aria-hidden":!0,...f(`rating`,`stars`),children:R.map(e=>v?(0,I.jsx)(`button`,{type:`button`,tabIndex:-1,className:N.starButton,onClick:t=>C(t,e),onMouseEnter:()=>b(e+1),children:(0,I.jsx)(B,{fill:S(e),size:T})},e):(0,I.jsx)(B,{fill:S(e),size:T},e))}),A=c&&(0,I.jsxs)(`span`,{className:N.value,...f(`rating`,`value`),children:[(0,I.jsx)(`strong`,{children:e.toFixed(1)}),l!==void 0&&(0,I.jsxs)(`span`,{className:N.count,...f(`rating`,`count`),children:[`(`,l.toLocaleString(`en-US`),`)`]})]});return v?(0,I.jsxs)(`span`,{..._,ref:g,className:D,style:h,role:`slider`,"aria-label":E,"aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":t,tabIndex:0,onKeyDown:w,onMouseLeave:()=>b(null),...O,children:[k,A]}):(0,I.jsxs)(`span`,{..._,ref:g,className:D,style:h,"aria-label":E,role:`img`,...O,children:[k,A]})},H=({dimensions:e,max:t=10,size:n=`medium`,onChange:r,readOnly:i,showValue:o=!0,className:s,ref:c})=>(0,I.jsx)(`div`,{ref:c,className:a(N.scale,s),...f(`rating-scale`,`root`,{readonly:!r||!!i,size:n}),children:e.map(e=>(0,I.jsxs)(`div`,{className:N.scaleRow,title:typeof e.hint==`string`?e.hint:void 0,...f(`rating-scale`,`row`),children:[(0,I.jsx)(`span`,{className:N.scaleLabel,...f(`rating-scale`,`label`),children:e.label}),(0,I.jsx)(V,{value:e.value,max:t,size:n,showValue:o,readOnly:i,onChange:r?t=>r(e.key,t):void 0,"aria-label":`${e.label} ${e.value.toFixed(1)} / ${t}`})]},e.key))})})))()}function te(){return(0,W.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,W.jsx)(V,{value:8.6,size:`small`}),(0,W.jsx)(V,{value:7,showValue:!0,ratingCount:3214}),(0,W.jsx)(V,{value:3.5,max:5,size:`large`,showValue:!0})]})}var W;function G(){return(G=e((()=>{U(),W=n()})))()}function ne(){let[e,t]=(0,K.useState)(6);return(0,q.jsx)(V,{value:e,onChange:t,showValue:!0,size:`large`})}var K,q;function J(){return(J=e((()=>{K=t(),U(),q=n()})))()}function re(){let[e,t]=(0,Y.useState)({plot:8.2,characters:7.5,writing:9});return(0,X.jsx)(H,{dimensions:[{key:`plot`,label:`Plot`,value:e.plot,hint:`Story and pacing`},{key:`characters`,label:`Characters`,value:e.characters},{key:`writing`,label:`Writing`,value:e.writing}],onChange:(e,n)=>t(t=>({...t,[e]:n}))})}var Y,X;function Z(){return(Z=e((()=>{Y=t(),U(),X=n()})))()}var Q;function ie(){return(ie=e((()=>{Q=`import { Rating } from "minerva-design";

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
import { Rating } from "minerva-design";

export default function InteractiveDemo() {
  const [value, setValue] = useState(6);

  return <Rating value={value} onChange={setValue} showValue size="large" />;
}
`})))()}var $;function se(){return(se=e((()=>{$=`import { useState } from "react";
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
`})))()}var ce,le,ue;function de(){return(de=e((()=>{G(),J(),Z(),ie(),oe(),se(),t(),u(),l(),ce=n(),le=d(Object.assign({"./demos/basic.tsx":te,"./demos/interactive.tsx":ne,"./demos/scale.tsx":re}),Object.assign({"./demos/basic.tsx":Q,"./demos/interactive.tsx":ae,"./demos/scale.tsx":$})),ue=()=>(0,ce.jsx)(ee,{id:`rating`,demos:le})})))()}de();export{ue as default};