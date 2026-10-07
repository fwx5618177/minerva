import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{O as r,_ as i,c as a,g as o,k as s,n as c,s as l,t as u}from"./DocPage-HgWiqH91.js";import{D as d,T as f,u as p}from"./icons-BaZJL-85.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{m=`_rating_1pjh6_1`,h=`_stars_1pjh6_10`,g=`_star_1pjh6_10`,_=`_empty_1pjh6_21`,v=`_half_1pjh6_25`,y=`_halfBase_1pjh6_29`,b=`_halfFill_1pjh6_35`,x=`_interactive_1pjh6_48`,S=`_starButton_1pjh6_56`,C=`_value_1pjh6_77`,w=`_small_1pjh6_88`,T=`_large_1pjh6_91`,E=`_count_1pjh6_95`,D=`_scale_1pjh6_100`,O=`_scaleRow_1pjh6_107`,k=`_scaleLabel_1pjh6_114`,A={rating:m,stars:h,star:g,empty:_,half:v,halfBase:y,halfFill:b,interactive:x,starButton:S,value:C,small:w,large:T,count:E,scale:D,scaleRow:O,scaleLabel:k}})))()}var M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{r(),f(),i(),j(),M=t(),N=n(),P={small:12,medium:16,large:20},F=[0,1,2,3,4],I=Math.max(1,Math.round(F.length/5)),L=e=>Math.round(e*10)/10,R=({fill:e,size:t})=>{let n=s(A.star,A[e]);return e===`half`?(0,N.jsxs)(`span`,{className:n,style:{width:t,height:t},children:[(0,N.jsx)(p,{size:t,strokeWidth:1.5,className:A.halfBase}),(0,N.jsx)(d,{size:t,fill:`currentColor`,strokeWidth:1.5,className:A.halfFill})]}):(0,N.jsx)(p,{size:t,className:n,fill:e===`full`?`currentColor`:`none`,strokeWidth:1.5,"aria-hidden":!0,focusable:!1})},z=({value:e,max:t=10,size:n=`medium`,showValue:r=!1,ratingCount:i,onChange:a,readOnly:c=!1,"aria-label":l,onKeyDown:u,className:d,style:f,ref:p,...m})=>{let h=!!a&&!c,[g,_]=(0,M.useState)(null),v=e/t*5,y=Math.floor(v),b=v-y,x=b>=.25&&b<.75,S=b>=.75?y+1:y,C=h&&g!==null?g:S+(x?.5:0),w=e=>e<Math.floor(C)?`full`:e<C?`half`:`empty`,T=(e,n)=>{let r=e.currentTarget.getBoundingClientRect(),i=n+(e.clientX-r.left<r.width/2?.5:1);a?.(L(i/5*t))},E=n=>{if(u?.(n),n.defaultPrevented||!h)return;let r=t/(F.length*2),i=t/F.length*I,s;switch(o(n.key,n.currentTarget)){case`ArrowRight`:case`ArrowUp`:s=Math.min(t,L(e+r));break;case`ArrowLeft`:case`ArrowDown`:s=Math.max(0,L(e-r));break;case`PageUp`:s=Math.min(t,L(e+i));break;case`PageDown`:s=Math.max(0,L(e-i));break;case`Home`:s=0;break;case`End`:s=t;break;default:return}n.preventDefault(),a?.(s)},D=P[n],O=l??`${e.toFixed(1)} / ${t}`,k=s(A.rating,A[n],h&&A.interactive,d),j=(0,N.jsx)(`span`,{className:A.stars,"aria-hidden":!0,children:F.map(e=>h?(0,N.jsx)(`button`,{type:`button`,tabIndex:-1,className:A.starButton,onClick:t=>T(t,e),onMouseEnter:()=>_(e+1),children:(0,N.jsx)(R,{fill:w(e),size:D})},e):(0,N.jsx)(R,{fill:w(e),size:D},e))}),z=r&&(0,N.jsxs)(`span`,{className:A.value,children:[(0,N.jsx)(`strong`,{children:e.toFixed(1)}),i!==void 0&&(0,N.jsxs)(`span`,{className:A.count,children:[`(`,i.toLocaleString(`en-US`),`)`]})]});return h?(0,N.jsxs)(`span`,{...m,ref:p,className:k,style:f,role:`slider`,"aria-label":O,"aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":t,tabIndex:0,onKeyDown:E,onMouseLeave:()=>_(null),children:[j,z]}):(0,N.jsxs)(`span`,{...m,ref:p,className:k,style:f,"aria-label":O,role:`img`,children:[j,z]})},B=({dimensions:e,max:t=10,size:n=`medium`,onChange:r,readOnly:i,showValue:a=!0,className:o,ref:c})=>(0,N.jsx)(`div`,{ref:c,className:s(A.scale,o),children:e.map(e=>(0,N.jsxs)(`div`,{className:A.scaleRow,title:typeof e.hint==`string`?e.hint:void 0,children:[(0,N.jsx)(`span`,{className:A.scaleLabel,children:e.label}),(0,N.jsx)(z,{value:e.value,max:t,size:n,showValue:a,readOnly:i,onChange:r?t=>r(e.key,t):void 0,"aria-label":`${e.label} ${e.value.toFixed(1)} / ${t}`})]},e.key))})})))()}function ee(){return(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,H.jsx)(z,{value:8.6,size:`small`}),(0,H.jsx)(z,{value:7,showValue:!0,ratingCount:3214}),(0,H.jsx)(z,{value:3.5,max:5,size:`large`,showValue:!0})]})}var H;function U(){return(U=e((()=>{V(),H=n()})))()}function te(){let[e,t]=(0,W.useState)(6);return(0,G.jsx)(z,{value:e,onChange:t,showValue:!0,size:`large`})}var W,G;function K(){return(K=e((()=>{W=t(),V(),G=n()})))()}function ne(){let[e,t]=(0,q.useState)({plot:8.2,characters:7.5,writing:9});return(0,J.jsx)(B,{dimensions:[{key:`plot`,label:`Plot`,value:e.plot,hint:`Story and pacing`},{key:`characters`,label:`Characters`,value:e.characters},{key:`writing`,label:`Writing`,value:e.writing}],onChange:(e,n)=>t(t=>({...t,[e]:n}))})}var q,J;function Y(){return(Y=e((()=>{q=t(),V(),J=n()})))()}var X;function Z(){return(Z=e((()=>{X=`import { Rating } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Rating value={8.6} size="small" />
      <Rating value={7} showValue ratingCount={3214} />
      <Rating value={3.5} max={5} size="large" showValue />
    </div>
  );
}
`})))()}var Q;function $(){return($=e((()=>{Q=`import { useState } from "react";
import { Rating } from "@minerva/lib-core";

export default function InteractiveDemo() {
  const [value, setValue] = useState(6);

  return <Rating value={value} onChange={setValue} showValue size="large" />;
}
`})))()}var re;function ie(){return(ie=e((()=>{re=`import { useState } from "react";
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
`})))()}var ae,oe,se;function ce(){return(ce=e((()=>{U(),K(),Y(),Z(),$(),ie(),t(),c(),a(),ae=n(),oe=l(Object.assign({"./demos/basic.tsx":ee,"./demos/interactive.tsx":te,"./demos/scale.tsx":ne}),Object.assign({"./demos/basic.tsx":X,"./demos/interactive.tsx":Q,"./demos/scale.tsx":re})),se=()=>(0,ae.jsx)(u,{id:`rating`,demos:oe})})))()}ce();export{se as default};