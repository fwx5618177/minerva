import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Ct as r,X as i,cn as a}from"./minerva-web-components-e9i9Tzii.js";import{n as o,t as ee}from"./useI18n-Brv-VDVY.js";import{n as s,t as c}from"./Button-DP6INRXF.js";import{c as l,n as u,s as d,t as f}from"./DocPage-BeqNKFhE.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,te,ne,O,k,A,j;function M(){return(M=e((()=>{p=`_skeletonRoot_1px63_1`,m=`_withAvatar_1px63_5`,h=`_content_1px63_10`,g=`_skeleton_1px63_1`,_=`_text_1px63_20`,v=`_circular_1px63_27`,y=`_rectangular_1px63_30`,b=`_rounded_1px63_35`,x=`_button_1px63_38`,S=`_image_1px63_42`,C=`_title_1px63_47`,w=`_paragraph_1px63_54`,T=`_avatar_1px63_63`,E=`_card_1px63_73`,D=`_cardContent_1px63_81`,te=`_active_1px63_85`,ne=`_pulse_1px63_1`,O=`_wave_1px63_1`,k=`_decorative_1px63_116`,A=`_skeletonText_1px63_136`,j={skeletonRoot:p,withAvatar:m,content:h,skeleton:g,text:_,circular:v,rectangular:y,rounded:b,button:x,image:S,title:C,paragraph:w,avatar:T,"avatar-circle":`_avatar-circle_1px63_66`,"avatar-square":`_avatar-square_1px63_69`,card:E,cardContent:D,active:te,"animation-pulse":`_animation-pulse_1px63_89`,pulse:ne,"animation-wave":`_animation-wave_1px63_93`,wave:O,decorative:k,skeletonText:A}})))()}var N,P,F;function I(){return(I=e((()=>{a(),o(),M(),t(),N=n(),P=e=>typeof e==`number`?`${e}px`:e,F=({variant:e=`text`,animation:t=`pulse`,width:n,height:r,className:a,children:o,loading:s=!0,borderRadius:c,style:l,lines:u=1,avatar:d=!1,avatarSize:f=40,avatarShape:p=`circle`,active:m=!1,paragraph:h=!1,title:g=!1,"aria-label":_,decorative:v=!1,size:y,ref:b,...x})=>{let{t:S}=ee();if(!s)return(0,N.jsx)(N.Fragment,{children:o});if(v){let o=e===`circular`?P(y??n??32):void 0;return(0,N.jsx)(`span`,{ref:b,"aria-hidden":`true`,...x,className:i(j.skeleton,j.decorative,j[e],j[`animation-${t}`],a),style:{width:o??P(n),height:o??P(r),borderRadius:c,...l}})}let C=()=>h||g?null:Array(Number.isFinite(u)?Math.max(0,Math.floor(u)):0).fill(null).map((a,o)=>(0,N.jsx)(`div`,{className:i(j.skeleton,j[e],j[`animation-${t}`]),style:{width:typeof n==`number`?`${n}px`:n,height:typeof r==`number`?`${r}px`:r,borderRadius:c,...l}},o)),w=()=>d?(0,N.jsx)(`div`,{className:i(j.skeleton,j.avatar,j[`animation-${t}`],j[`avatar-${p}`]),style:{width:typeof f==`number`?`${f}px`:f,height:typeof f==`number`?`${f}px`:f}}):null,T=()=>h?(0,N.jsx)(`div`,{className:j.paragraph,children:[{width:`100%`,height:`16px`},{width:`100%`,height:`16px`},{width:`92%`,height:`16px`},{width:`60%`,height:`16px`}].map((e,n)=>(0,N.jsx)(`div`,{className:i(j.skeleton,j[`animation-${t}`]),style:{width:e.width,height:e.height}},`p-${n}`))}):null,E=()=>g?(0,N.jsx)(`div`,{className:i(j.skeleton,j.title,j[`animation-${t}`])}):null,D=()=>e===`card`?(0,N.jsxs)(`div`,{className:i(j.card,{[j.active]:m}),children:[w(),(0,N.jsxs)(`div`,{className:j.cardContent,children:[E(),T()]})]}):(0,N.jsxs)(N.Fragment,{children:[w(),(0,N.jsxs)(`div`,{className:j.content,children:[E(),C(),T()]})]});return(0,N.jsx)(`div`,{ref:b,role:`status`,"aria-busy":`true`,"aria-label":_??S(`common.loading`),className:i(j.skeletonRoot,d&&j.withAvatar,a),...x,children:D()})}})))()}var L,R;function re(){return(re=e((()=>{a(),M(),I(),L=n(),R=({lines:e=3,lineHeight:t=`1em`,gap:n=2,shrinkLast:a=!0,animation:o=`pulse`,className:ee,style:s,ref:c,...l})=>{let u=Number.isFinite(e)?Math.max(0,Math.floor(e)):0;return(0,L.jsx)(`div`,{ref:c,"aria-hidden":`true`,...l,className:i(j.skeletonText,ee),style:{gap:r(n),...s},children:Array.from({length:u},(e,n)=>(0,L.jsx)(F,{decorative:!0,variant:`text`,animation:o,height:t,width:a&&n===u-1?`70%`:`100%`},n))})}})))()}function ie(){return(0,z.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`},children:[(0,z.jsx)(F,{animation:`pulse`,lines:2}),(0,z.jsx)(F,{animation:`wave`,lines:2}),(0,z.jsx)(F,{animation:`false`,lines:2})]})}var z;function B(){return(B=e((()=>{I(),z=n()})))()}function ae(){return(0,V.jsx)(F,{lines:3})}var V;function H(){return(H=e((()=>{I(),V=n()})))()}function oe(){return(0,U.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`,maxWidth:420},children:[(0,U.jsx)(F,{variant:`card`,avatar:!0,title:!0,paragraph:!0}),(0,U.jsx)(F,{variant:`card`,avatar:!0,title:!0,paragraph:!0,active:!0,animation:`wave`})]})}var U;function W(){return(W=e((()=>{I(),U=n()})))()}function se(){return(0,G.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,G.jsx)(F,{avatar:!0,title:!0,paragraph:!0}),(0,G.jsx)(F,{avatar:!0,avatarShape:`square`,avatarSize:56,lines:2})]})}var G;function K(){return(K=e((()=>{I(),G=n()})))()}function ce(){return(0,q.jsxs)(`div`,{role:`status`,"aria-busy":`true`,"aria-label":`Loading profile`,style:{display:`flex`,gap:12,alignItems:`center`,width:320},children:[(0,q.jsx)(F,{decorative:!0,variant:`circular`,size:40,animation:`wave`}),(0,q.jsxs)(`div`,{style:{flex:1,display:`grid`,gap:8},children:[(0,q.jsx)(F,{decorative:!0,width:`60%`,animation:`wave`}),(0,q.jsx)(F,{decorative:!0,width:`90%`,animation:`wave`})]})]})}var q;function J(){return(J=e((()=>{I(),q=n()})))()}function le(){let[e,t]=(0,Y.useState)(!0);return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`,maxWidth:420},children:[(0,X.jsx)(c,{size:`small`,onClick:()=>t(e=>!e),children:e?`Show content`:`Show skeleton`}),(0,X.jsx)(F,{loading:e,avatar:!0,title:!0,paragraph:!0,children:(0,X.jsxs)(`article`,{children:[(0,X.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Minerva UI`}),(0,X.jsx)(`p`,{style:{margin:0},children:`The content is rendered as soon as loading becomes false.`})]})})]})}var Y,X;function ue(){return(ue=e((()=>{Y=t(),s(),I(),X=n()})))()}function de(){return(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:24,width:360},children:[(0,Z.jsx)(R,{}),(0,Z.jsx)(R,{lines:5,lineHeight:12,gap:3,animation:`wave`})]})}var Z;function fe(){return(fe=e((()=>{re(),Z=n()})))()}function pe(){return(0,Q.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:16,alignItems:`center`,width:`100%`},children:[(0,Q.jsx)(F,{variant:`text`,width:120}),(0,Q.jsx)(F,{variant:`circular`,width:48,height:48}),(0,Q.jsx)(F,{variant:`rectangular`,width:120,height:60}),(0,Q.jsx)(F,{variant:`rounded`,width:120,height:60}),(0,Q.jsx)(F,{variant:`button`}),(0,Q.jsx)(F,{variant:`image`,width:120,height:80})]})}var Q;function me(){return(me=e((()=>{I(),Q=n()})))()}var he;function ge(){return(ge=e((()=>{he=`import { Skeleton } from "@minerva/lib-core";

export default function AnimationsDemo() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%" }}>
      <Skeleton animation="pulse" lines={2} />
      <Skeleton animation="wave" lines={2} />
      <Skeleton animation="false" lines={2} />
    </div>
  );
}
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`import { Skeleton } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Skeleton lines={3} />;
}
`})))()}var ye;function be(){return(be=e((()=>{ye=`import { Skeleton } from "@minerva/lib-core";

export default function CardDemo() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 420 }}>
      <Skeleton variant="card" avatar title paragraph />
      <Skeleton variant="card" avatar title paragraph active animation="wave" />
    </div>
  );
}
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`import { Skeleton } from "@minerva/lib-core";

export default function CompositionDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: "100%" }}>
      <Skeleton avatar title paragraph />
      <Skeleton avatar avatarShape="square" avatarSize={56} lines={2} />
    </div>
  );
}
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`import { Skeleton } from "@minerva/lib-core";

export default function DecorativeDemo() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading profile"
      style={{ display: "flex", gap: 12, alignItems: "center", width: 320 }}
    >
      <Skeleton decorative variant="circular" size={40} animation="wave" />
      <div style={{ flex: 1, display: "grid", gap: 8 }}>
        <Skeleton decorative width="60%" animation="wave" />
        <Skeleton decorative width="90%" animation="wave" />
      </div>
    </div>
  );
}
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`import { useState } from "react";
import { Button, Skeleton } from "@minerva/lib-core";

export default function LoadingDemo() {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 420 }}>
      <Button size="small" onClick={() => setLoading((prev) => !prev)}>
        {loading ? "Show content" : "Show skeleton"}
      </Button>
      <Skeleton loading={loading} avatar title paragraph>
        <article>
          <h4 style={{ margin: "0 0 8px" }}>Minerva UI</h4>
          <p style={{ margin: 0 }}>
            The content is rendered as soon as loading becomes false.
          </p>
        </article>
      </Skeleton>
    </div>
  );
}
`})))()}var De;function $(){return($=e((()=>{De=`import { SkeletonText } from "@minerva/lib-core";

export default function SkeletonTextDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: 360 }}>
      <SkeletonText />
      <SkeletonText lines={5} lineHeight={12} gap={3} animation="wave" />
    </div>
  );
}
`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`import { Skeleton } from "@minerva/lib-core";

export default function VariantsDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 16,
        alignItems: "center",
        width: "100%",
      }}
    >
      <Skeleton variant="text" width={120} />
      <Skeleton variant="circular" width={48} height={48} />
      <Skeleton variant="rectangular" width={120} height={60} />
      <Skeleton variant="rounded" width={120} height={60} />
      <Skeleton variant="button" />
      <Skeleton variant="image" width={120} height={80} />
    </div>
  );
}
`})))()}var Ae,je,Me;function Ne(){return(Ne=e((()=>{B(),H(),W(),K(),J(),ue(),fe(),me(),ge(),ve(),be(),Se(),we(),Ee(),$(),ke(),t(),u(),l(),Ae=n(),je=d(Object.assign({"./demos/animations.tsx":ie,"./demos/basic.tsx":ae,"./demos/card.tsx":oe,"./demos/composition.tsx":se,"./demos/decorative.tsx":ce,"./demos/loading.tsx":le,"./demos/skeleton-text.tsx":de,"./demos/variants.tsx":pe}),Object.assign({"./demos/animations.tsx":he,"./demos/basic.tsx":_e,"./demos/card.tsx":ye,"./demos/composition.tsx":xe,"./demos/decorative.tsx":Ce,"./demos/loading.tsx":Te,"./demos/skeleton-text.tsx":De,"./demos/variants.tsx":Oe})),Me=()=>(0,Ae.jsx)(f,{id:`skeleton`,demos:je})})))()}Ne();export{Me as default};