import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{O as r,c as i,k as a,n as o,s,t as c}from"./DocPage-HgWiqH91.js";import{n as l,t as u}from"./useI18n-CYdr3eVz.js";import{n as d,t as f}from"./Button-CwqLLYn6.js";import{t as p}from"./space-Cvu1KikX.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,te,j,M;function N(){return(N=e((()=>{m=`_skeletonRoot_1px63_1`,h=`_withAvatar_1px63_5`,g=`_content_1px63_10`,_=`_skeleton_1px63_1`,v=`_text_1px63_20`,y=`_circular_1px63_27`,b=`_rectangular_1px63_30`,x=`_rounded_1px63_35`,S=`_button_1px63_38`,C=`_image_1px63_42`,w=`_title_1px63_47`,T=`_paragraph_1px63_54`,E=`_avatar_1px63_63`,D=`_card_1px63_73`,O=`_cardContent_1px63_81`,k=`_active_1px63_85`,A=`_pulse_1px63_1`,ee=`_wave_1px63_1`,te=`_decorative_1px63_116`,j=`_skeletonText_1px63_136`,M={skeletonRoot:m,withAvatar:h,content:g,skeleton:_,text:v,circular:y,rectangular:b,rounded:x,button:S,image:C,title:w,paragraph:T,avatar:E,"avatar-circle":`_avatar-circle_1px63_66`,"avatar-square":`_avatar-square_1px63_69`,card:D,cardContent:O,active:k,"animation-pulse":`_animation-pulse_1px63_89`,pulse:A,"animation-wave":`_animation-wave_1px63_93`,wave:ee,decorative:te,skeletonText:j}})))()}var P,F,I;function L(){return(L=e((()=>{r(),l(),N(),t(),P=n(),F=e=>typeof e==`number`?`${e}px`:e,I=({variant:e=`text`,animation:t=`pulse`,width:n,height:r,className:i,children:o,loading:s=!0,borderRadius:c,style:l,lines:d=1,avatar:f=!1,avatarSize:p=40,avatarShape:m=`circle`,active:h=!1,paragraph:g=!1,title:_=!1,"aria-label":v,decorative:y=!1,size:b,ref:x,...S})=>{let{t:C}=u();if(!s)return(0,P.jsx)(P.Fragment,{children:o});if(y){let o=e===`circular`?F(b??n??32):void 0;return(0,P.jsx)(`span`,{ref:x,"aria-hidden":`true`,...S,className:a(M.skeleton,M.decorative,M[e],M[`animation-${t}`],i),style:{width:o??F(n),height:o??F(r),borderRadius:c,...l}})}let w=()=>g||_?null:Array(Number.isFinite(d)?Math.max(0,Math.floor(d)):0).fill(null).map((i,o)=>(0,P.jsx)(`div`,{className:a(M.skeleton,M[e],M[`animation-${t}`]),style:{width:typeof n==`number`?`${n}px`:n,height:typeof r==`number`?`${r}px`:r,borderRadius:c,...l}},o)),T=()=>f?(0,P.jsx)(`div`,{className:a(M.skeleton,M.avatar,M[`animation-${t}`],M[`avatar-${m}`]),style:{width:typeof p==`number`?`${p}px`:p,height:typeof p==`number`?`${p}px`:p}}):null,E=()=>g?(0,P.jsx)(`div`,{className:M.paragraph,children:[{width:`100%`,height:`16px`},{width:`100%`,height:`16px`},{width:`92%`,height:`16px`},{width:`60%`,height:`16px`}].map((e,n)=>(0,P.jsx)(`div`,{className:a(M.skeleton,M[`animation-${t}`]),style:{width:e.width,height:e.height}},`p-${n}`))}):null,D=()=>_?(0,P.jsx)(`div`,{className:a(M.skeleton,M.title,M[`animation-${t}`])}):null,O=()=>e===`card`?(0,P.jsxs)(`div`,{className:a(M.card,{[M.active]:h}),children:[T(),(0,P.jsxs)(`div`,{className:M.cardContent,children:[D(),E()]})]}):(0,P.jsxs)(P.Fragment,{children:[T(),(0,P.jsxs)(`div`,{className:M.content,children:[D(),w(),E()]})]});return(0,P.jsx)(`div`,{ref:x,role:`status`,"aria-busy":`true`,"aria-label":v??C(`common.loading`),className:a(M.skeletonRoot,f&&M.withAvatar,i),...S,children:O()})}})))()}var R,z;function ne(){return(ne=e((()=>{r(),N(),L(),R=n(),z=({lines:e=3,lineHeight:t=`1em`,gap:n=2,shrinkLast:r=!0,animation:i=`pulse`,className:o,style:s,ref:c,...l})=>{let u=Number.isFinite(e)?Math.max(0,Math.floor(e)):0;return(0,R.jsx)(`div`,{ref:c,"aria-hidden":`true`,...l,className:a(M.skeletonText,o),style:{gap:p(n),...s},children:Array.from({length:u},(e,n)=>(0,R.jsx)(I,{decorative:!0,variant:`text`,animation:i,height:t,width:r&&n===u-1?`70%`:`100%`},n))})}})))()}function re(){return(0,B.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`},children:[(0,B.jsx)(I,{animation:`pulse`,lines:2}),(0,B.jsx)(I,{animation:`wave`,lines:2}),(0,B.jsx)(I,{animation:`false`,lines:2})]})}var B;function ie(){return(ie=e((()=>{L(),B=n()})))()}function ae(){return(0,V.jsx)(I,{lines:3})}var V;function H(){return(H=e((()=>{L(),V=n()})))()}function oe(){return(0,U.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`,maxWidth:420},children:[(0,U.jsx)(I,{variant:`card`,avatar:!0,title:!0,paragraph:!0}),(0,U.jsx)(I,{variant:`card`,avatar:!0,title:!0,paragraph:!0,active:!0,animation:`wave`})]})}var U;function W(){return(W=e((()=>{L(),U=n()})))()}function se(){return(0,G.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,G.jsx)(I,{avatar:!0,title:!0,paragraph:!0}),(0,G.jsx)(I,{avatar:!0,avatarShape:`square`,avatarSize:56,lines:2})]})}var G;function K(){return(K=e((()=>{L(),G=n()})))()}function ce(){return(0,q.jsxs)(`div`,{role:`status`,"aria-busy":`true`,"aria-label":`Loading profile`,style:{display:`flex`,gap:12,alignItems:`center`,width:320},children:[(0,q.jsx)(I,{decorative:!0,variant:`circular`,size:40,animation:`wave`}),(0,q.jsxs)(`div`,{style:{flex:1,display:`grid`,gap:8},children:[(0,q.jsx)(I,{decorative:!0,width:`60%`,animation:`wave`}),(0,q.jsx)(I,{decorative:!0,width:`90%`,animation:`wave`})]})]})}var q;function J(){return(J=e((()=>{L(),q=n()})))()}function le(){let[e,t]=(0,ue.useState)(!0);return(0,Y.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`,maxWidth:420},children:[(0,Y.jsx)(f,{size:`small`,onClick:()=>t(e=>!e),children:e?`Show content`:`Show skeleton`}),(0,Y.jsx)(I,{loading:e,avatar:!0,title:!0,paragraph:!0,children:(0,Y.jsxs)(`article`,{children:[(0,Y.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Minerva UI`}),(0,Y.jsx)(`p`,{style:{margin:0},children:`The content is rendered as soon as loading becomes false.`})]})})]})}var ue,Y;function de(){return(de=e((()=>{ue=t(),d(),L(),Y=n()})))()}function fe(){return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:24,width:360},children:[(0,X.jsx)(z,{}),(0,X.jsx)(z,{lines:5,lineHeight:12,gap:3,animation:`wave`})]})}var X;function pe(){return(pe=e((()=>{ne(),X=n()})))()}function me(){return(0,Z.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:16,alignItems:`center`,width:`100%`},children:[(0,Z.jsx)(I,{variant:`text`,width:120}),(0,Z.jsx)(I,{variant:`circular`,width:48,height:48}),(0,Z.jsx)(I,{variant:`rectangular`,width:120,height:60}),(0,Z.jsx)(I,{variant:`rounded`,width:120,height:60}),(0,Z.jsx)(I,{variant:`button`}),(0,Z.jsx)(I,{variant:`image`,width:120,height:80})]})}var Z;function he(){return(he=e((()=>{L(),Z=n()})))()}var ge;function _e(){return(_e=e((()=>{ge=`import { Skeleton } from "@minerva/lib-core";

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
`})))()}var Oe;function Q(){return(Q=e((()=>{Oe=`import { SkeletonText } from "@minerva/lib-core";

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
`})))()}var je,Me,Ne;function $(){return($=e((()=>{ie(),H(),W(),K(),J(),de(),pe(),he(),_e(),ye(),xe(),Ce(),Te(),De(),Q(),Ae(),t(),o(),i(),je=n(),Me=s(Object.assign({"./demos/animations.tsx":re,"./demos/basic.tsx":ae,"./demos/card.tsx":oe,"./demos/composition.tsx":se,"./demos/decorative.tsx":ce,"./demos/loading.tsx":le,"./demos/skeleton-text.tsx":fe,"./demos/variants.tsx":me}),Object.assign({"./demos/animations.tsx":ge,"./demos/basic.tsx":ve,"./demos/card.tsx":be,"./demos/composition.tsx":Se,"./demos/decorative.tsx":we,"./demos/loading.tsx":Ee,"./demos/skeleton-text.tsx":Oe,"./demos/variants.tsx":ke})),Ne=()=>(0,je.jsx)(c,{id:`skeleton`,demos:Me})})))()}$();export{Ne as default};