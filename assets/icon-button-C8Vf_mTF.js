import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{h as r,j as i,q as a,w as o}from"./dist-C3Cy1YK6.js";import{A as s,B as c,C as l,D as u,K as d,P as f,V as p,W as m,g as h,i as g,w as _,y as v}from"./registry-DXcVqgdp.js";import{i as y,t as b}from"./DocPage-DUnq_TLt.js";var x=n();function S(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{icon:(0,x.jsx)(g,{}),ariaLabel:`Add`,onClick:()=>alert(`Add`)}),(0,x.jsx)(i,{icon:(0,x.jsx)(c,{}),ariaLabel:`Settings`}),(0,x.jsx)(i,{icon:(0,x.jsx)(m,{}),ariaLabel:`Delete`})]})}function C(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{icon:(0,x.jsx)(l,{}),color:`#f59e0b`,bgColor:`rgba(245, 158, 11, 0.12)`,hoverColor:`rgba(245, 158, 11, 0.24)`,ariaLabel:`Energy`}),(0,x.jsx)(i,{icon:(0,x.jsx)(s,{}),color:`#ffffff`,bgColor:`#16a34a`,ariaLabel:`Eco mode`}),(0,x.jsx)(i,{icon:(0,x.jsx)(d,{}),color:`#0ea5e9`,activeColor:`#0369a1`,active:!0,ariaLabel:`Water`})]})}var w=Object.keys(o);function T(){return(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(110px, 1fr))`,gap:16,width:`100%`},children:w.map(e=>(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,x.jsx)(a,{type:e}),(0,x.jsx)(`code`,{children:e})]},e))})}var E=e(t(),1);function D(){let[e,t]=(0,E.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a,{type:`like`,pressed:e,onChange:t}),(0,x.jsx)(`span`,{children:e?`Liked`:`Not liked yet`}),(0,x.jsx)(r,{size:`small`,variant:`secondary`,onClick:()=>t(!1),children:`Reset`}),(0,x.jsx)(a,{type:`bookmark`,defaultPressed:!0}),(0,x.jsx)(a,{type:`star`,size:`large`,shape:`square`,ariaLabel:`Star this article`}),(0,x.jsx)(a,{type:`notification`,disabled:!0})]})}function O(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{icon:(0,x.jsx)(p,{}),size:`small`,ariaLabel:`Small`}),(0,x.jsx)(i,{icon:(0,x.jsx)(p,{}),size:`medium`,ariaLabel:`Medium`}),(0,x.jsx)(i,{icon:(0,x.jsx)(p,{}),size:`large`,ariaLabel:`Large`}),(0,x.jsx)(i,{icon:(0,x.jsx)(p,{}),shape:`square`,size:`small`,ariaLabel:`Small square`}),(0,x.jsx)(i,{icon:(0,x.jsx)(p,{}),shape:`square`,ariaLabel:`Medium square`}),(0,x.jsx)(i,{icon:(0,x.jsx)(p,{}),shape:`square`,size:`large`,ariaLabel:`Large square`})]})}function k(){let[e,t]=(0,E.useState)(!1),[n,r]=(0,E.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{icon:(0,x.jsx)(h,{}),variant:`primary`,loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},ariaLabel:`Upload`}),(0,x.jsx)(i,{icon:(0,x.jsx)(f,{}),active:n,"aria-pressed":n,onClick:()=>r(e=>!e),ariaLabel:`Mute microphone`}),(0,x.jsx)(i,{icon:(0,x.jsx)(m,{}),disabled:!0,ariaLabel:`Delete`})]})}function A(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{icon:(0,x.jsx)(v,{}),ariaLabel:`Copy`,showTooltip:!0,tooltip:{content:`Copy to clipboard`}}),(0,x.jsx)(i,{icon:(0,x.jsx)(u,{}),variant:`info`,ariaLabel:`More information`,showTooltip:!0,tooltip:{content:`Hover or focus to see me`,arrow:!0}})]})}var j=[`primary`,`secondary`,`success`,`warning`,`error`,`info`];function M(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{icon:(0,x.jsx)(_,{}),ariaLabel:`Default`}),j.map(e=>(0,x.jsx)(i,{icon:(0,x.jsx)(_,{}),variant:e,ariaLabel:e},e))]})}var N=y(Object.assign({"./demos/basic.tsx":S,"./demos/custom-colors.tsx":C,"./demos/interactive-types.tsx":T,"./demos/interactive.tsx":D,"./demos/sizes-and-shapes.tsx":O,"./demos/states.tsx":k,"./demos/tooltip.tsx":A,"./demos/variants.tsx":M}),Object.assign({"./demos/basic.tsx":`import { IconButton } from "@minerva/lib-core";
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
`,"./demos/custom-colors.tsx":`import { IconButton } from "@minerva/lib-core";
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
`,"./demos/interactive-types.tsx":`import {
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
`,"./demos/interactive.tsx":`import { useState } from "react";
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
`,"./demos/sizes-and-shapes.tsx":`import { IconButton } from "@minerva/lib-core";
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
`,"./demos/states.tsx":`import { useState } from "react";
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
`,"./demos/tooltip.tsx":`import { IconButton } from "@minerva/lib-core";
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
`,"./demos/variants.tsx":`import { IconButton } from "@minerva/lib-core";
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
`})),P=()=>(0,x.jsx)(b,{id:`icon-button`,demos:N});export{P as default};