import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./cn-CJDie0PQ.js";import{D as a,T as o,u as s}from"./icons-CtD3xdmP.js";import{n as c,t as ee}from"./direction-BdBdG3Jn.js";import{c as l,n as u,s as d,t as f}from"./DocPage-DzKszXiH.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{p=`_rating_1pjh6_1`,m=`_stars_1pjh6_10`,h=`_star_1pjh6_10`,g=`_empty_1pjh6_21`,_=`_half_1pjh6_25`,v=`_halfBase_1pjh6_29`,y=`_halfFill_1pjh6_35`,b=`_interactive_1pjh6_48`,x=`_starButton_1pjh6_56`,S=`_value_1pjh6_77`,C=`_small_1pjh6_88`,w=`_large_1pjh6_91`,T=`_count_1pjh6_95`,E=`_scale_1pjh6_100`,D=`_scaleRow_1pjh6_107`,O=`_scaleLabel_1pjh6_114`,k={rating:p,stars:m,star:h,empty:g,half:_,halfBase:v,halfFill:y,interactive:b,starButton:x,value:S,small:C,large:w,count:T,scale:E,scaleRow:D,scaleLabel:O}})))()}var j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{i(),o(),c(),A(),j=t(),M=n(),N={small:12,medium:16,large:20},P=[0,1,2,3,4],F=Math.max(1,Math.round(P.length/5)),I=e=>Math.round(e*10)/10,L=({fill:e,size:t})=>{let n=r(k.star,k[e]);return e===`half`?(0,M.jsxs)(`span`,{className:n,style:{width:t,height:t},children:[(0,M.jsx)(s,{size:t,strokeWidth:1.5,className:k.halfBase}),(0,M.jsx)(a,{size:t,fill:`currentColor`,strokeWidth:1.5,className:k.halfFill})]}):(0,M.jsx)(s,{size:t,className:n,fill:e===`full`?`currentColor`:`none`,strokeWidth:1.5,"aria-hidden":!0,focusable:!1})},R=({value:e,max:t=10,size:n=`medium`,showValue:i=!1,ratingCount:a,onChange:o,readOnly:s=!1,"aria-label":c,onKeyDown:l,className:u,style:d,ref:f,...p})=>{let m=!!o&&!s,[h,g]=(0,j.useState)(null),_=e/t*5,v=Math.floor(_),y=_-v,b=y>=.25&&y<.75,x=y>=.75?v+1:v,S=m&&h!==null?h:x+(b?.5:0),C=e=>e<Math.floor(S)?`full`:e<S?`half`:`empty`,w=(e,n)=>{let r=e.currentTarget.getBoundingClientRect(),i=n+(e.clientX-r.left<r.width/2?.5:1);o?.(I(i/5*t))},T=n=>{if(l?.(n),n.defaultPrevented||!m)return;let r=t/(P.length*2),i=t/P.length*F,a;switch(ee(n.key,n.currentTarget)){case`ArrowRight`:case`ArrowUp`:a=Math.min(t,I(e+r));break;case`ArrowLeft`:case`ArrowDown`:a=Math.max(0,I(e-r));break;case`PageUp`:a=Math.min(t,I(e+i));break;case`PageDown`:a=Math.max(0,I(e-i));break;case`Home`:a=0;break;case`End`:a=t;break;default:return}n.preventDefault(),o?.(a)},E=N[n],D=c??`${e.toFixed(1)} / ${t}`,O=r(k.rating,k[n],m&&k.interactive,u),A=(0,M.jsx)(`span`,{className:k.stars,"aria-hidden":!0,children:P.map(e=>m?(0,M.jsx)(`button`,{type:`button`,tabIndex:-1,className:k.starButton,onClick:t=>w(t,e),onMouseEnter:()=>g(e+1),children:(0,M.jsx)(L,{fill:C(e),size:E})},e):(0,M.jsx)(L,{fill:C(e),size:E},e))}),R=i&&(0,M.jsxs)(`span`,{className:k.value,children:[(0,M.jsx)(`strong`,{children:e.toFixed(1)}),a!==void 0&&(0,M.jsxs)(`span`,{className:k.count,children:[`(`,a.toLocaleString(`en-US`),`)`]})]});return m?(0,M.jsxs)(`span`,{...p,ref:f,className:O,style:d,role:`slider`,"aria-label":D,"aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":t,tabIndex:0,onKeyDown:T,onMouseLeave:()=>g(null),children:[A,R]}):(0,M.jsxs)(`span`,{...p,ref:f,className:O,style:d,"aria-label":D,role:`img`,children:[A,R]})},z=({dimensions:e,max:t=10,size:n=`medium`,onChange:i,readOnly:a,showValue:o=!0,className:s,ref:c})=>(0,M.jsx)(`div`,{ref:c,className:r(k.scale,s),children:e.map(e=>(0,M.jsxs)(`div`,{className:k.scaleRow,title:typeof e.hint==`string`?e.hint:void 0,children:[(0,M.jsx)(`span`,{className:k.scaleLabel,children:e.label}),(0,M.jsx)(R,{value:e.value,max:t,size:n,showValue:o,readOnly:a,onChange:i?t=>i(e.key,t):void 0,"aria-label":`${e.label} ${e.value.toFixed(1)} / ${t}`})]},e.key))})})))()}function te(){return(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,V.jsx)(R,{value:8.6,size:`small`}),(0,V.jsx)(R,{value:7,showValue:!0,ratingCount:3214}),(0,V.jsx)(R,{value:3.5,max:5,size:`large`,showValue:!0})]})}var V;function H(){return(H=e((()=>{B(),V=n()})))()}function ne(){let[e,t]=(0,U.useState)(6);return(0,W.jsx)(R,{value:e,onChange:t,showValue:!0,size:`large`})}var U,W;function G(){return(G=e((()=>{U=t(),B(),W=n()})))()}function re(){let[e,t]=(0,K.useState)({plot:8.2,characters:7.5,writing:9});return(0,q.jsx)(z,{dimensions:[{key:`plot`,label:`Plot`,value:e.plot,hint:`Story and pacing`},{key:`characters`,label:`Characters`,value:e.characters},{key:`writing`,label:`Writing`,value:e.writing}],onChange:(e,n)=>t(t=>({...t,[e]:n}))})}var K,q;function J(){return(J=e((()=>{K=t(),B(),q=n()})))()}var Y;function X(){return(X=e((()=>{Y=`import { Rating } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Rating value={8.6} size="small" />
      <Rating value={7} showValue ratingCount={3214} />
      <Rating value={3.5} max={5} size="large" showValue />
    </div>
  );
}
`})))()}var Z;function Q(){return(Q=e((()=>{Z=`import { useState } from "react";
import { Rating } from "@minerva/lib-core";

export default function InteractiveDemo() {
  const [value, setValue] = useState(6);

  return <Rating value={value} onChange={setValue} showValue size="large" />;
}
`})))()}var $;function ie(){return(ie=e((()=>{$=`import { useState } from "react";
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
`})))()}var ae,oe,se;function ce(){return(ce=e((()=>{H(),G(),J(),X(),Q(),ie(),t(),u(),l(),ae=n(),oe=d(Object.assign({"./demos/basic.tsx":te,"./demos/interactive.tsx":ne,"./demos/scale.tsx":re}),Object.assign({"./demos/basic.tsx":Y,"./demos/interactive.tsx":Z,"./demos/scale.tsx":$})),se=()=>(0,ae.jsx)(f,{id:`rating`,demos:oe})})))()}ce();export{se as default};