import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Ct as r,X as i,cn as a}from"./minerva-web-components-e9i9Tzii.js";import{n as o,t as ee}from"./useI18n-Brv-VDVY.js";import{t as s}from"./stylingHooks-GjssfG7q.js";import{n as c,t as l}from"./Button-BfJfx3BZ.js";import{m as u,n as d,p as f,t as p}from"./DocPage-44Ak-YGP.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,te,ne,k,A,j,M;function N(){return(N=e((()=>{m=`_skeletonRoot_1px63_1`,h=`_withAvatar_1px63_5`,g=`_content_1px63_10`,_=`_skeleton_1px63_1`,v=`_text_1px63_20`,y=`_circular_1px63_27`,b=`_rectangular_1px63_30`,x=`_rounded_1px63_35`,S=`_button_1px63_38`,C=`_image_1px63_42`,w=`_title_1px63_47`,T=`_paragraph_1px63_54`,E=`_avatar_1px63_63`,D=`_card_1px63_73`,O=`_cardContent_1px63_81`,te=`_active_1px63_85`,ne=`_pulse_1px63_1`,k=`_wave_1px63_1`,A=`_decorative_1px63_116`,j=`_skeletonText_1px63_136`,M={skeletonRoot:m,withAvatar:h,content:g,skeleton:_,text:v,circular:y,rectangular:b,rounded:x,button:S,image:C,title:w,paragraph:T,avatar:E,"avatar-circle":`_avatar-circle_1px63_66`,"avatar-square":`_avatar-square_1px63_69`,card:D,cardContent:O,active:te,"animation-pulse":`_animation-pulse_1px63_89`,pulse:ne,"animation-wave":`_animation-wave_1px63_93`,wave:k,decorative:A,skeletonText:j}})))()}var P,F,I;function L(){return(L=e((()=>{a(),o(),N(),t(),P=n(),F=e=>typeof e==`number`?`${e}px`:e,I=({variant:e=`text`,animation:t=`pulse`,width:n,height:r,className:a,children:o,loading:c=!0,borderRadius:l,style:u,lines:d=1,avatar:f=!1,avatarSize:p=40,avatarShape:m=`circle`,active:h=!1,paragraph:g=!1,title:_=!1,"aria-label":v,decorative:y=!1,size:b,ref:x,...S})=>{let{t:C}=ee();if(!c)return(0,P.jsx)(P.Fragment,{children:o});if(y){let o=e===`circular`?F(b??n??32):void 0;return(0,P.jsx)(`span`,{ref:x,"aria-hidden":`true`,...S,className:i(M.skeleton,M.decorative,M[e],M[`animation-${t}`],a),style:{width:o??F(n),height:o??F(r),borderRadius:l,...u},...s(`skeleton`,`root`,{variant:e})})}let w=()=>g||_?null:Array(Number.isFinite(d)?Math.max(0,Math.floor(d)):0).fill(null).map((a,o)=>(0,P.jsx)(`div`,{className:i(M.skeleton,M[e],M[`animation-${t}`]),style:{width:typeof n==`number`?`${n}px`:n,height:typeof r==`number`?`${r}px`:r,borderRadius:l,...u},...s(`skeleton`,`line`)},o)),T=()=>f?(0,P.jsx)(`div`,{className:i(M.skeleton,M.avatar,M[`animation-${t}`],M[`avatar-${m}`]),style:{width:typeof p==`number`?`${p}px`:p,height:typeof p==`number`?`${p}px`:p},...s(`skeleton`,`avatar`)}):null,E=()=>g?(0,P.jsx)(`div`,{className:M.paragraph,children:[{width:`100%`,height:`16px`},{width:`100%`,height:`16px`},{width:`92%`,height:`16px`},{width:`60%`,height:`16px`}].map((e,n)=>(0,P.jsx)(`div`,{className:i(M.skeleton,M[`animation-${t}`]),style:{width:e.width,height:e.height},...s(`skeleton`,`line`)},`p-${n}`))}):null,D=()=>_?(0,P.jsx)(`div`,{className:i(M.skeleton,M.title,M[`animation-${t}`]),...s(`skeleton`,`title`)}):null,O=()=>e===`card`?(0,P.jsxs)(`div`,{className:i(M.card,{[M.active]:h}),children:[T(),(0,P.jsxs)(`div`,{className:M.cardContent,children:[D(),E()]})]}):(0,P.jsxs)(P.Fragment,{children:[T(),(0,P.jsxs)(`div`,{className:M.content,children:[D(),w(),E()]})]});return(0,P.jsx)(`div`,{ref:x,role:`status`,"aria-busy":`true`,"aria-label":v??C(`common.loading`),className:i(M.skeletonRoot,f&&M.withAvatar,a),...S,...s(`skeleton`,`root`,{variant:e}),children:O()})}})))()}var R,z;function re(){return(re=e((()=>{a(),N(),R=n(),z=({lines:e=3,lineHeight:t=`1em`,gap:n=2,shrinkLast:a=!0,animation:o=`pulse`,className:ee,style:c,ref:l,...u})=>{let d=Number.isFinite(e)?Math.max(0,Math.floor(e)):0;return(0,R.jsx)(`div`,{ref:l,"aria-hidden":`true`,...u,className:i(M.skeletonText,ee),style:{gap:r(n),...c},...s(`skeleton-text`,`root`),children:Array.from({length:d},(e,n)=>(0,R.jsx)(`span`,{"aria-hidden":`true`,className:i(M.skeleton,M.decorative,M.text,M[`animation-${o}`]),style:{width:a&&n===d-1?`70%`:`100%`,height:typeof t==`number`?`${t}px`:t},...s(`skeleton-text`,`line`)},n))})}})))()}function ie(){return(0,B.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`},children:[(0,B.jsx)(I,{animation:`pulse`,lines:2}),(0,B.jsx)(I,{animation:`wave`,lines:2}),(0,B.jsx)(I,{animation:`false`,lines:2})]})}var B;function V(){return(V=e((()=>{L(),B=n()})))()}function ae(){return(0,H.jsx)(I,{lines:3})}var H;function U(){return(U=e((()=>{L(),H=n()})))()}function oe(){return(0,W.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`,maxWidth:420},children:[(0,W.jsx)(I,{variant:`card`,avatar:!0,title:!0,paragraph:!0}),(0,W.jsx)(I,{variant:`card`,avatar:!0,title:!0,paragraph:!0,active:!0,animation:`wave`})]})}var W;function G(){return(G=e((()=>{L(),W=n()})))()}function se(){return(0,K.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,K.jsx)(I,{avatar:!0,title:!0,paragraph:!0}),(0,K.jsx)(I,{avatar:!0,avatarShape:`square`,avatarSize:56,lines:2})]})}var K;function q(){return(q=e((()=>{L(),K=n()})))()}function ce(){return(0,J.jsxs)(`div`,{role:`status`,"aria-busy":`true`,"aria-label":`Loading profile`,style:{display:`flex`,gap:12,alignItems:`center`,width:320},children:[(0,J.jsx)(I,{decorative:!0,variant:`circular`,size:40,animation:`wave`}),(0,J.jsxs)(`div`,{style:{flex:1,display:`grid`,gap:8},children:[(0,J.jsx)(I,{decorative:!0,width:`60%`,animation:`wave`}),(0,J.jsx)(I,{decorative:!0,width:`90%`,animation:`wave`})]})]})}var J;function Y(){return(Y=e((()=>{L(),J=n()})))()}function le(){let[e,t]=(0,ue.useState)(!0);return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`,maxWidth:420},children:[(0,X.jsx)(c,{size:`small`,onClick:()=>t(e=>!e),children:e?`Show content`:`Show skeleton`}),(0,X.jsx)(I,{loading:e,avatar:!0,title:!0,paragraph:!0,children:(0,X.jsxs)(`article`,{children:[(0,X.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Minerva UI`}),(0,X.jsx)(`p`,{style:{margin:0},children:`The content is rendered as soon as loading becomes false.`})]})})]})}var ue,X;function de(){return(de=e((()=>{ue=t(),l(),L(),X=n()})))()}function fe(){return(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:24,width:360},children:[(0,Z.jsx)(z,{}),(0,Z.jsx)(z,{lines:5,lineHeight:12,gap:3,animation:`wave`})]})}var Z;function pe(){return(pe=e((()=>{re(),Z=n()})))()}function me(){return(0,Q.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:16,alignItems:`center`,width:`100%`},children:[(0,Q.jsx)(I,{variant:`text`,width:120}),(0,Q.jsx)(I,{variant:`circular`,width:48,height:48}),(0,Q.jsx)(I,{variant:`rectangular`,width:120,height:60}),(0,Q.jsx)(I,{variant:`rounded`,width:120,height:60}),(0,Q.jsx)(I,{variant:`button`}),(0,Q.jsx)(I,{variant:`image`,width:120,height:80})]})}var Q;function he(){return(he=e((()=>{L(),Q=n()})))()}var ge;function _e(){return(_e=e((()=>{ge=`import { Skeleton } from "@minerva/lib-core";

export default function AnimationsDemo() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%" }}>
      <Skeleton animation="pulse" lines={2} />
      <Skeleton animation="wave" lines={2} />
      <Skeleton animation="false" lines={2} />
    </div>
  );
}
`})))()}var ve;function ye(){return(ye=e((()=>{ve=`import { Skeleton } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Skeleton lines={3} />;
}
`})))()}var be;function xe(){return(xe=e((()=>{be=`import { Skeleton } from "@minerva/lib-core";

export default function CardDemo() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 420 }}>
      <Skeleton variant="card" avatar title paragraph />
      <Skeleton variant="card" avatar title paragraph active animation="wave" />
    </div>
  );
}
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`import { Skeleton } from "@minerva/lib-core";

export default function CompositionDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: "100%" }}>
      <Skeleton avatar title paragraph />
      <Skeleton avatar avatarShape="square" avatarSize={56} lines={2} />
    </div>
  );
}
`})))()}var we;function Te(){return(Te=e((()=>{we=`import { Skeleton } from "@minerva/lib-core";

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
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`import { useState } from "react";
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
`})))()}var $;function Oe(){return(Oe=e((()=>{$=`import { SkeletonText } from "@minerva/lib-core";

export default function SkeletonTextDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: 360 }}>
      <SkeletonText />
      <SkeletonText lines={5} lineHeight={12} gap={3} animation="wave" />
    </div>
  );
}
`})))()}var ke;function Ae(){return(Ae=e((()=>{ke=`import { Skeleton } from "@minerva/lib-core";

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
`})))()}var je,Me,Ne;function Pe(){return(Pe=e((()=>{V(),U(),G(),q(),Y(),de(),pe(),he(),_e(),ye(),xe(),Ce(),Te(),De(),Oe(),Ae(),t(),d(),u(),je=n(),Me=f(Object.assign({"./demos/animations.tsx":ie,"./demos/basic.tsx":ae,"./demos/card.tsx":oe,"./demos/composition.tsx":se,"./demos/decorative.tsx":ce,"./demos/loading.tsx":le,"./demos/skeleton-text.tsx":fe,"./demos/variants.tsx":me}),Object.assign({"./demos/animations.tsx":ge,"./demos/basic.tsx":ve,"./demos/card.tsx":be,"./demos/composition.tsx":Se,"./demos/decorative.tsx":we,"./demos/loading.tsx":Ee,"./demos/skeleton-text.tsx":$,"./demos/variants.tsx":ke})),Ne=()=>(0,je.jsx)(p,{id:`skeleton`,demos:Me})})))()}Pe();export{Ne as default};