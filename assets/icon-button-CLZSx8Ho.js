import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{Ft as ee,Ht as i,en as a,kt as o}from"./dist-BWNqkmth.js";import{E as s,H as te,I as ne,J as re,K as c,M as ie,T as ae,U as l,Y as u,_ as oe,a as se,k as ce,x as le}from"./registry-CQpv28AQ.js";import{B as ue,C as de,D as fe,P as pe}from"./lu-B0X0EWxp.js";import{c as me,n as he,s as ge,t as _e}from"./DocPage-DGOZswYH.js";function ve(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{icon:(0,d.jsx)(se,{}),ariaLabel:`Add`,onClick:()=>alert(`Add`)}),(0,d.jsx)(o,{icon:(0,d.jsx)(te,{}),ariaLabel:`Settings`}),(0,d.jsx)(o,{icon:(0,d.jsx)(c,{}),ariaLabel:`Delete`})]})}var d;function f(){return(f=e((()=>{i(),u(),d=n()})))()}function ye(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{icon:(0,p.jsx)(ae,{}),color:`#f59e0b`,bgColor:`rgba(245, 158, 11, 0.12)`,hoverColor:`rgba(245, 158, 11, 0.24)`,ariaLabel:`Energy`}),(0,p.jsx)(o,{icon:(0,p.jsx)(ie,{}),color:`#ffffff`,bgColor:`#16a34a`,ariaLabel:`Eco mode`}),(0,p.jsx)(o,{icon:(0,p.jsx)(re,{}),color:`#0ea5e9`,activeColor:`#0369a1`,active:!0,ariaLabel:`Water`})]})}var p;function m(){return(m=e((()=>{i(),u(),p=n()})))()}function be(){return(0,h.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(110px, 1fr))`,gap:16,width:`100%`},children:g.map(e=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,h.jsx)(a,{type:e}),(0,h.jsx)(`code`,{children:e})]},e))})}var h,g;function _(){return(_=e((()=>{i(),h=n(),g=Object.keys(ee)})))()}function xe(){let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{type:`like`,pressed:e,onChange:t}),(0,y.jsx)(`span`,{children:e?`Liked`:`Not liked yet`}),(0,y.jsx)(r,{size:`small`,variant:`secondary`,onClick:()=>t(!1),children:`Reset`}),(0,y.jsx)(a,{type:`bookmark`,defaultPressed:!0}),(0,y.jsx)(a,{type:`star`,size:`large`,shape:`square`,ariaLabel:`Star this article`}),(0,y.jsx)(a,{type:`notification`,disabled:!0})]})}var v,y;function b(){return(b=e((()=>{v=t(),i(),y=n()})))()}function Se(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{label:`Refresh`,shape:`square`,children:(0,x.jsx)(fe,{})}),(0,x.jsx)(o,{label:`Edit`,appearance:`outline`,variant:`primary`,children:(0,x.jsx)(de,{})}),(0,x.jsx)(o,{label:`Delete`,appearance:`solid`,variant:`danger`,size:`small`,children:(0,x.jsx)(pe,{})})]})}var x;function S(){return(S=e((()=>{i(),ue(),x=n()})))()}function Ce(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(o,{icon:(0,C.jsx)(l,{}),size:`small`,ariaLabel:`Small`}),(0,C.jsx)(o,{icon:(0,C.jsx)(l,{}),size:`medium`,ariaLabel:`Medium`}),(0,C.jsx)(o,{icon:(0,C.jsx)(l,{}),size:`large`,ariaLabel:`Large`}),(0,C.jsx)(o,{icon:(0,C.jsx)(l,{}),shape:`square`,size:`small`,ariaLabel:`Small square`}),(0,C.jsx)(o,{icon:(0,C.jsx)(l,{}),shape:`square`,ariaLabel:`Medium square`}),(0,C.jsx)(o,{icon:(0,C.jsx)(l,{}),shape:`square`,size:`large`,ariaLabel:`Large square`})]})}var C;function w(){return(w=e((()=>{i(),u(),C=n()})))()}function we(){let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(!1);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(o,{icon:(0,E.jsx)(oe,{}),variant:`primary`,loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},ariaLabel:`Upload`}),(0,E.jsx)(o,{icon:(0,E.jsx)(ne,{}),active:n,"aria-pressed":n,onClick:()=>r(e=>!e),ariaLabel:`Mute microphone`}),(0,E.jsx)(o,{icon:(0,E.jsx)(c,{}),disabled:!0,ariaLabel:`Delete`})]})}var T,E;function D(){return(D=e((()=>{T=t(),i(),u(),E=n()})))()}function Te(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(o,{icon:(0,O.jsx)(le,{}),ariaLabel:`Copy`,showTooltip:!0,tooltip:{content:`Copy to clipboard`}}),(0,O.jsx)(o,{icon:(0,O.jsx)(ce,{}),variant:`info`,ariaLabel:`More information`,showTooltip:!0,tooltip:{content:`Hover or focus to see me`,arrow:!0}})]})}var O;function k(){return(k=e((()=>{i(),u(),O=n()})))()}function Ee(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o,{icon:(0,A.jsx)(s,{}),ariaLabel:`Default`}),j.map(e=>(0,A.jsx)(o,{icon:(0,A.jsx)(s,{}),variant:e,ariaLabel:e},e))]})}var A,j;function M(){return(M=e((()=>{i(),u(),A=n(),j=[`primary`,`secondary`,`success`,`warning`,`error`,`info`]})))()}var N;function De(){return(De=e((()=>{N=`import { IconButton } from "@minerva/lib-core";
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
`})))()}var X,Z,Q;function $(){return($=e((()=>{f(),m(),_(),b(),S(),w(),D(),k(),M(),De(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),he(),me(),X=n(),Z=ge(Object.assign({"./demos/basic.tsx":ve,"./demos/custom-colors.tsx":ye,"./demos/interactive-types.tsx":be,"./demos/interactive.tsx":xe,"./demos/label.tsx":Se,"./demos/sizes-and-shapes.tsx":Ce,"./demos/states.tsx":we,"./demos/tooltip.tsx":Te,"./demos/variants.tsx":Ee}),Object.assign({"./demos/basic.tsx":N,"./demos/custom-colors.tsx":P,"./demos/interactive-types.tsx":I,"./demos/interactive.tsx":R,"./demos/label.tsx":B,"./demos/sizes-and-shapes.tsx":H,"./demos/states.tsx":W,"./demos/tooltip.tsx":K,"./demos/variants.tsx":J})),Q=()=>(0,X.jsx)(_e,{id:`icon-button`,demos:Z})})))()}$();export{Q as default};