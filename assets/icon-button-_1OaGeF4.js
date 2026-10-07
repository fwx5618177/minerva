import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{d as r}from"./ConfigProvider-BGZRMKW0-zZcUK1pN.js";import{I as i}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{E as ee,H as te,I as ne,J as re,K as a,M as ie,T as ae,U as o,Y as s,_ as oe,a as se,k as ce,x as le}from"./registry-B5r3N_Su.js";import{B as ue,C as de,D as fe,P as pe}from"./lu-BRLciF5v.js";import{c,d as l,l as me}from"./dist-CcA3uxH5.js";import{c as he,n as ge,s as _e,t as ve}from"./DocPage-Dm1vTl9w.js";function ye(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{icon:(0,u.jsx)(se,{}),ariaLabel:`Add`,onClick:()=>alert(`Add`)}),(0,u.jsx)(i,{icon:(0,u.jsx)(te,{}),ariaLabel:`Settings`}),(0,u.jsx)(i,{icon:(0,u.jsx)(a,{}),ariaLabel:`Delete`})]})}var u;function d(){return(d=e((()=>{l(),s(),u=n()})))()}function be(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{icon:(0,f.jsx)(ae,{}),color:`#f59e0b`,bgColor:`rgba(245, 158, 11, 0.12)`,hoverColor:`rgba(245, 158, 11, 0.24)`,ariaLabel:`Energy`}),(0,f.jsx)(i,{icon:(0,f.jsx)(ie,{}),color:`#ffffff`,bgColor:`#16a34a`,ariaLabel:`Eco mode`}),(0,f.jsx)(i,{icon:(0,f.jsx)(re,{}),color:`#0ea5e9`,activeColor:`#0369a1`,active:!0,ariaLabel:`Water`})]})}var f;function p(){return(p=e((()=>{l(),s(),f=n()})))()}function xe(){return(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(110px, 1fr))`,gap:16,width:`100%`},children:h.map(e=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,m.jsx)(c,{type:e}),(0,m.jsx)(`code`,{children:e})]},e))})}var m,h;function g(){return(g=e((()=>{l(),m=n(),h=Object.keys(me)})))()}function Se(){let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c,{type:`like`,pressed:e,onChange:t}),(0,v.jsx)(`span`,{children:e?`Liked`:`Not liked yet`}),(0,v.jsx)(r,{size:`small`,variant:`secondary`,onClick:()=>t(!1),children:`Reset`}),(0,v.jsx)(c,{type:`bookmark`,defaultPressed:!0}),(0,v.jsx)(c,{type:`star`,size:`large`,shape:`square`,ariaLabel:`Star this article`}),(0,v.jsx)(c,{type:`notification`,disabled:!0})]})}var _,v;function y(){return(y=e((()=>{_=t(),l(),v=n()})))()}function Ce(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i,{label:`Refresh`,shape:`square`,children:(0,b.jsx)(fe,{})}),(0,b.jsx)(i,{label:`Edit`,appearance:`outline`,variant:`primary`,children:(0,b.jsx)(de,{})}),(0,b.jsx)(i,{label:`Delete`,appearance:`solid`,variant:`danger`,size:`small`,children:(0,b.jsx)(pe,{})})]})}var b;function x(){return(x=e((()=>{l(),ue(),b=n()})))()}function we(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(i,{icon:(0,S.jsx)(o,{}),size:`small`,ariaLabel:`Small`}),(0,S.jsx)(i,{icon:(0,S.jsx)(o,{}),size:`medium`,ariaLabel:`Medium`}),(0,S.jsx)(i,{icon:(0,S.jsx)(o,{}),size:`large`,ariaLabel:`Large`}),(0,S.jsx)(i,{icon:(0,S.jsx)(o,{}),shape:`square`,size:`small`,ariaLabel:`Small square`}),(0,S.jsx)(i,{icon:(0,S.jsx)(o,{}),shape:`square`,ariaLabel:`Medium square`}),(0,S.jsx)(i,{icon:(0,S.jsx)(o,{}),shape:`square`,size:`large`,ariaLabel:`Large square`})]})}var S;function C(){return(C=e((()=>{l(),s(),S=n()})))()}function Te(){let[e,t]=(0,w.useState)(!1),[n,r]=(0,w.useState)(!1);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(i,{icon:(0,T.jsx)(oe,{}),variant:`primary`,loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},ariaLabel:`Upload`}),(0,T.jsx)(i,{icon:(0,T.jsx)(ne,{}),active:n,"aria-pressed":n,onClick:()=>r(e=>!e),ariaLabel:`Mute microphone`}),(0,T.jsx)(i,{icon:(0,T.jsx)(a,{}),disabled:!0,ariaLabel:`Delete`})]})}var w,T;function E(){return(E=e((()=>{w=t(),l(),s(),T=n()})))()}function Ee(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(i,{icon:(0,D.jsx)(le,{}),ariaLabel:`Copy`,showTooltip:!0,tooltip:{content:`Copy to clipboard`}}),(0,D.jsx)(i,{icon:(0,D.jsx)(ce,{}),variant:`info`,ariaLabel:`More information`,showTooltip:!0,tooltip:{content:`Hover or focus to see me`,arrow:!0}})]})}var D;function O(){return(O=e((()=>{l(),s(),D=n()})))()}function De(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i,{icon:(0,k.jsx)(ee,{}),ariaLabel:`Default`}),A.map(e=>(0,k.jsx)(i,{icon:(0,k.jsx)(ee,{}),variant:e,ariaLabel:e},e))]})}var k,A;function j(){return(j=e((()=>{l(),s(),k=n(),A=[`primary`,`secondary`,`success`,`warning`,`error`,`info`]})))()}var M;function N(){return(N=e((()=>{M=`import { IconButton } from "@minerva/lib-core";
import { IoAdd, IoSettingsOutline, IoTrashOutline } from "react-icons/io5";

export default function BasicDemo() {
  return (
    <>
      <IconButton
        icon={<IoAdd />}
        ariaLabel="Add"
        onClick={() => alert("Add")}
      />
      <IconButton icon={<IoSettingsOutline />} ariaLabel="Settings" />
      <IconButton icon={<IoTrashOutline />} ariaLabel="Delete" />
    </>
  );
}
`})))()}var P;function F(){return(F=e((()=>{P=`import { IconButton } from "@minerva/lib-core";
import { IoFlash, IoLeaf, IoWater } from "react-icons/io5";

export default function CustomColorsDemo() {
  return (
    <>
      <IconButton
        icon={<IoFlash />}
        color="#f59e0b"
        bgColor="rgba(245, 158, 11, 0.12)"
        hoverColor="rgba(245, 158, 11, 0.24)"
        ariaLabel="Energy"
      />
      <IconButton
        icon={<IoLeaf />}
        color="#ffffff"
        bgColor="#16a34a"
        ariaLabel="Eco mode"
      />
      <IconButton
        icon={<IoWater />}
        color="#0ea5e9"
        activeColor="#0369a1"
        active
        ariaLabel="Water"
      />
    </>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import {
  InteractiveIconButton,
  interactiveIconsMap,
  type InteractiveIconType,
} from "@minerva/lib-core";

const types = Object.keys(interactiveIconsMap) as InteractiveIconType[];

export default function InteractiveTypesDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
        gap: 16,
        width: "100%",
      }}
    >
      {types.map((type) => (
        <div
          key={type}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <InteractiveIconButton type={type} />
          <code>{type}</code>
        </div>
      ))}
    </div>
  );
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { useState } from "react";
import { Button, InteractiveIconButton } from "@minerva/lib-core";

export default function InteractiveDemo() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      {/* controlled: the button exposes aria-pressed={liked} */}
      <InteractiveIconButton type="like" pressed={liked} onChange={setLiked} />
      <span>{liked ? "Liked" : "Not liked yet"}</span>
      <Button size="small" variant="secondary" onClick={() => setLiked(false)}>
        Reset
      </Button>
      {/* uncontrolled */}
      <InteractiveIconButton type="bookmark" defaultPressed />
      <InteractiveIconButton
        type="star"
        size="large"
        shape="square"
        ariaLabel="Star this article"
      />
      <InteractiveIconButton type="notification" disabled />
    </>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { IconButton } from "@minerva/lib-core";
import { LuPencil, LuRefreshCw, LuTrash2 } from "react-icons/lu";

export default function LabelDemo() {
  return (
    <>
      <IconButton label="Refresh" shape="square">
        <LuRefreshCw />
      </IconButton>
      <IconButton label="Edit" appearance="outline" variant="primary">
        <LuPencil />
      </IconButton>
      <IconButton
        label="Delete"
        appearance="solid"
        variant="danger"
        size="small"
      >
        <LuTrash2 />
      </IconButton>
    </>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { IconButton } from "@minerva/lib-core";
import { IoStar } from "react-icons/io5";

export default function SizesAndShapesDemo() {
  return (
    <>
      <IconButton icon={<IoStar />} size="small" ariaLabel="Small" />
      <IconButton icon={<IoStar />} size="medium" ariaLabel="Medium" />
      <IconButton icon={<IoStar />} size="large" ariaLabel="Large" />
      <IconButton
        icon={<IoStar />}
        shape="square"
        size="small"
        ariaLabel="Small square"
      />
      <IconButton icon={<IoStar />} shape="square" ariaLabel="Medium square" />
      <IconButton
        icon={<IoStar />}
        shape="square"
        size="large"
        ariaLabel="Large square"
      />
    </>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { useState } from "react";
import { IconButton } from "@minerva/lib-core";
import { IoCloudUploadOutline, IoMic, IoTrashOutline } from "react-icons/io5";

export default function StatesDemo() {
  const [loading, setLoading] = useState(false);
  const [muted, setMuted] = useState(false);

  const upload = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <>
      <IconButton
        icon={<IoCloudUploadOutline />}
        variant="primary"
        loading={loading}
        onClick={upload}
        ariaLabel="Upload"
      />
      <IconButton
        icon={<IoMic />}
        active={muted}
        aria-pressed={muted}
        onClick={() => setMuted((m) => !m)}
        ariaLabel="Mute microphone"
      />
      <IconButton icon={<IoTrashOutline />} disabled ariaLabel="Delete" />
    </>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { IconButton } from "@minerva/lib-core";
import { IoCopyOutline, IoInformationCircleOutline } from "react-icons/io5";

export default function TooltipDemo() {
  return (
    <>
      <IconButton
        icon={<IoCopyOutline />}
        ariaLabel="Copy"
        showTooltip
        tooltip={{ content: "Copy to clipboard" }}
      />
      <IconButton
        icon={<IoInformationCircleOutline />}
        variant="info"
        ariaLabel="More information"
        showTooltip
        tooltip={{ content: "Hover or focus to see me", arrow: true }}
      />
    </>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { IconButton } from "@minerva/lib-core";
import { IoHeart } from "react-icons/io5";

const variants = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
] as const;

export default function VariantsDemo() {
  return (
    <>
      <IconButton icon={<IoHeart />} ariaLabel="Default" />
      {variants.map((variant) => (
        <IconButton
          key={variant}
          icon={<IoHeart />}
          variant={variant}
          ariaLabel={variant}
        />
      ))}
    </>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{d(),p(),g(),y(),x(),C(),E(),O(),j(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),ge(),he(),X=n(),Z=_e(Object.assign({"./demos/basic.tsx":ye,"./demos/custom-colors.tsx":be,"./demos/interactive-types.tsx":xe,"./demos/interactive.tsx":Se,"./demos/label.tsx":Ce,"./demos/sizes-and-shapes.tsx":we,"./demos/states.tsx":Te,"./demos/tooltip.tsx":Ee,"./demos/variants.tsx":De}),Object.assign({"./demos/basic.tsx":M,"./demos/custom-colors.tsx":P,"./demos/interactive-types.tsx":I,"./demos/interactive.tsx":R,"./demos/label.tsx":B,"./demos/sizes-and-shapes.tsx":H,"./demos/states.tsx":W,"./demos/tooltip.tsx":K,"./demos/variants.tsx":J})),Q=()=>(0,X.jsx)(ve,{id:`icon-button`,demos:Z})})))()}$();export{Q as default};