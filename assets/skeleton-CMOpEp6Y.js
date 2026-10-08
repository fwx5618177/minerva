import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Ct as r,X as i,cn as a}from"./minerva-web-components-e9i9Tzii.js";import{m as o,n as s,p as c,t as l}from"./DocPage-9P1WMt4D.js";import{n as u,t as d}from"./useI18n-Brv-VDVY.js";import{t as f}from"./stylingHooks-GjssfG7q.js";import{n as p,t as m}from"./Button-DN5Do18G.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,ee,te,M,N;function P(){return(P=e((()=>{h=`_skeletonRoot_euwr6_1`,g=`_withAvatar_euwr6_5`,_=`_content_euwr6_10`,v=`_skeleton_euwr6_1`,y=`_text_euwr6_20`,b=`_circular_euwr6_27`,x=`_rectangular_euwr6_30`,S=`_rounded_euwr6_35`,C=`_button_euwr6_38`,w=`_image_euwr6_42`,T=`_title_euwr6_47`,E=`_paragraph_euwr6_54`,D=`_avatar_euwr6_63`,O=`_card_euwr6_73`,k=`_cardContent_euwr6_82`,A=`_active_euwr6_86`,j=`_pulse_euwr6_1`,ee=`_wave_euwr6_1`,te=`_decorative_euwr6_117`,M=`_skeletonText_euwr6_137`,N={skeletonRoot:h,withAvatar:g,content:_,skeleton:v,text:y,circular:b,rectangular:x,rounded:S,button:C,image:w,title:T,paragraph:E,avatar:D,"avatar-circle":`_avatar-circle_euwr6_66`,"avatar-square":`_avatar-square_euwr6_69`,card:O,cardContent:k,active:A,"animation-pulse":`_animation-pulse_euwr6_90`,pulse:j,"animation-wave":`_animation-wave_euwr6_94`,wave:ee,decorative:te,skeletonText:M}})))()}var F,I,L;function R(){return(R=e((()=>{a(),u(),P(),t(),F=n(),I=e=>typeof e==`number`?`${e}px`:e,L=({variant:e=`text`,animation:t=`pulse`,width:n,height:r,className:a,children:o,loading:s=!0,borderRadius:c,style:l,lines:u=1,avatar:p=!1,avatarSize:m=40,avatarShape:h=`circle`,active:g=!1,paragraph:_=!1,title:v=!1,"aria-label":y,decorative:b=!1,size:x,ref:S,...C})=>{let{t:w}=d();if(!s)return(0,F.jsx)(F.Fragment,{children:o});if(b){let o=e===`circular`?I(x??n??32):void 0;return(0,F.jsx)(`span`,{ref:S,"aria-hidden":`true`,...C,className:i(N.skeleton,N.decorative,N[e],N[`animation-${t}`],a),style:{width:o??I(n),height:o??I(r),borderRadius:c,...l},...f(`skeleton`,`root`,{variant:e})})}let T=()=>_||v?null:Array(Number.isFinite(u)?Math.max(0,Math.floor(u)):0).fill(null).map((a,o)=>(0,F.jsx)(`div`,{className:i(N.skeleton,N[e],N[`animation-${t}`]),style:{width:typeof n==`number`?`${n}px`:n,height:typeof r==`number`?`${r}px`:r,borderRadius:c,...l},...f(`skeleton`,`line`)},o)),E=()=>p?(0,F.jsx)(`div`,{className:i(N.skeleton,N.avatar,N[`animation-${t}`],N[`avatar-${h}`]),style:{width:typeof m==`number`?`${m}px`:m,height:typeof m==`number`?`${m}px`:m},...f(`skeleton`,`avatar`)}):null,D=()=>_?(0,F.jsx)(`div`,{className:N.paragraph,children:[{width:`100%`,height:`16px`},{width:`100%`,height:`16px`},{width:`92%`,height:`16px`},{width:`60%`,height:`16px`}].map((e,n)=>(0,F.jsx)(`div`,{className:i(N.skeleton,N[`animation-${t}`]),style:{width:e.width,height:e.height},...f(`skeleton`,`line`)},`p-${n}`))}):null,O=()=>v?(0,F.jsx)(`div`,{className:i(N.skeleton,N.title,N[`animation-${t}`]),...f(`skeleton`,`title`)}):null,k=()=>e===`card`?(0,F.jsxs)(`div`,{className:i(N.card,{[N.active]:g}),children:[E(),(0,F.jsxs)(`div`,{className:N.cardContent,children:[O(),D()]})]}):(0,F.jsxs)(F.Fragment,{children:[E(),(0,F.jsxs)(`div`,{className:N.content,children:[O(),T(),D()]})]});return(0,F.jsx)(`div`,{ref:S,role:`status`,"aria-busy":`true`,"aria-label":y??w(`common.loading`),className:i(N.skeletonRoot,p&&N.withAvatar,a),...C,...f(`skeleton`,`root`,{variant:e}),children:k()})}})))()}var z,B;function ne(){return(ne=e((()=>{a(),P(),z=n(),B=({lines:e=3,lineHeight:t=`1em`,gap:n=2,shrinkLast:a=!0,animation:o=`pulse`,className:s,style:c,ref:l,...u})=>{let d=Number.isFinite(e)?Math.max(0,Math.floor(e)):0;return(0,z.jsx)(`div`,{ref:l,"aria-hidden":`true`,...u,className:i(N.skeletonText,s),style:{gap:r(n),...c},...f(`skeleton-text`,`root`),children:Array.from({length:d},(e,n)=>(0,z.jsx)(`span`,{"aria-hidden":`true`,className:i(N.skeleton,N.decorative,N.text,N[`animation-${o}`]),style:{width:a&&n===d-1?`70%`:`100%`,height:typeof t==`number`?`${t}px`:t},...f(`skeleton-text`,`line`)},n))})}})))()}function re(){return(0,V.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`},children:[(0,V.jsx)(L,{animation:`pulse`,lines:2}),(0,V.jsx)(L,{animation:`wave`,lines:2}),(0,V.jsx)(L,{animation:`false`,lines:2})]})}var V;function ie(){return(ie=e((()=>{R(),V=n()})))()}function ae(){return(0,H.jsx)(L,{lines:3})}var H;function U(){return(U=e((()=>{R(),H=n()})))()}function oe(){return(0,W.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`,maxWidth:420},children:[(0,W.jsx)(L,{variant:`card`,avatar:!0,title:!0,paragraph:!0}),(0,W.jsx)(L,{variant:`card`,avatar:!0,title:!0,paragraph:!0,active:!0,animation:`wave`})]})}var W;function G(){return(G=e((()=>{R(),W=n()})))()}function se(){return(0,K.jsxs)(`div`,{style:{display:`grid`,gap:24,width:`100%`},children:[(0,K.jsx)(L,{avatar:!0,title:!0,paragraph:!0}),(0,K.jsx)(L,{avatar:!0,avatarShape:`square`,avatarSize:56,lines:2})]})}var K;function q(){return(q=e((()=>{R(),K=n()})))()}function ce(){return(0,J.jsxs)(`div`,{role:`status`,"aria-busy":`true`,"aria-label":`Loading profile`,style:{display:`flex`,gap:12,alignItems:`center`,width:320},children:[(0,J.jsx)(L,{decorative:!0,variant:`circular`,size:40,animation:`wave`}),(0,J.jsxs)(`div`,{style:{flex:1,display:`grid`,gap:8},children:[(0,J.jsx)(L,{decorative:!0,width:`60%`,animation:`wave`}),(0,J.jsx)(L,{decorative:!0,width:`90%`,animation:`wave`})]})]})}var J;function le(){return(le=e((()=>{R(),J=n()})))()}function ue(){let[e,t]=(0,de.useState)(!0);return(0,Y.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`100%`,maxWidth:420},children:[(0,Y.jsx)(p,{size:`small`,onClick:()=>t(e=>!e),children:e?`Show content`:`Show skeleton`}),(0,Y.jsx)(L,{loading:e,avatar:!0,title:!0,paragraph:!0,children:(0,Y.jsxs)(`article`,{children:[(0,Y.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Minerva UI`}),(0,Y.jsx)(`p`,{style:{margin:0},children:`The content is rendered as soon as loading becomes false.`})]})})]})}var de,Y;function fe(){return(fe=e((()=>{de=t(),m(),R(),Y=n()})))()}function pe(){return(0,X.jsxs)(`div`,{style:{display:`grid`,gap:24,width:360},children:[(0,X.jsx)(B,{}),(0,X.jsx)(B,{lines:5,lineHeight:12,gap:3,animation:`wave`})]})}var X;function me(){return(me=e((()=>{ne(),X=n()})))()}function he(){return(0,Z.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:16,alignItems:`center`,width:`100%`},children:[(0,Z.jsx)(L,{variant:`text`,width:120}),(0,Z.jsx)(L,{variant:`circular`,width:48,height:48}),(0,Z.jsx)(L,{variant:`rectangular`,width:120,height:60}),(0,Z.jsx)(L,{variant:`rounded`,width:120,height:60}),(0,Z.jsx)(L,{variant:`button`}),(0,Z.jsx)(L,{variant:`image`,width:120,height:80})]})}var Z;function ge(){return(ge=e((()=>{R(),Z=n()})))()}var _e;function ve(){return(ve=e((()=>{_e=`import { Skeleton } from "@minerva/lib-core";

export default function AnimationsDemo() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%" }}>
      <Skeleton animation="pulse" lines={2} />
      <Skeleton animation="wave" lines={2} />
      <Skeleton animation="false" lines={2} />
    </div>
  );
}
`})))()}var ye;function be(){return(be=e((()=>{ye=`import { Skeleton } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Skeleton lines={3} />;
}
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`import { Skeleton } from "@minerva/lib-core";

export default function CardDemo() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 420 }}>
      <Skeleton variant="card" avatar title paragraph />
      <Skeleton variant="card" avatar title paragraph active animation="wave" />
    </div>
  );
}
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`import { Skeleton } from "@minerva/lib-core";

export default function CompositionDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: "100%" }}>
      <Skeleton avatar title paragraph />
      <Skeleton avatar avatarShape="square" avatarSize={56} lines={2} />
    </div>
  );
}
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`import { Skeleton } from "@minerva/lib-core";

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
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`import { useState } from "react";
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
`})))()}var Q;function ke(){return(ke=e((()=>{Q=`import { SkeletonText } from "@minerva/lib-core";

export default function SkeletonTextDemo() {
  return (
    <div style={{ display: "grid", gap: 24, width: 360 }}>
      <SkeletonText />
      <SkeletonText lines={5} lineHeight={12} gap={3} animation="wave" />
    </div>
  );
}
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`import { Skeleton } from "@minerva/lib-core";

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
`})))()}var Me,Ne,Pe;function $(){return($=e((()=>{ie(),U(),G(),q(),le(),fe(),me(),ge(),ve(),be(),Se(),we(),Ee(),Oe(),ke(),je(),t(),s(),o(),Me=n(),Ne=c(Object.assign({"./demos/animations.tsx":re,"./demos/basic.tsx":ae,"./demos/card.tsx":oe,"./demos/composition.tsx":se,"./demos/decorative.tsx":ce,"./demos/loading.tsx":ue,"./demos/skeleton-text.tsx":pe,"./demos/variants.tsx":he}),Object.assign({"./demos/animations.tsx":_e,"./demos/basic.tsx":ye,"./demos/card.tsx":xe,"./demos/composition.tsx":Ce,"./demos/decorative.tsx":Te,"./demos/loading.tsx":De,"./demos/skeleton-text.tsx":Q,"./demos/variants.tsx":Ae})),Pe=()=>(0,Me.jsx)(l,{id:`skeleton`,demos:Ne})})))()}$();export{Pe as default};