import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{f as t,t as n}from"./react-vendor-CUe5nroo.js";import{F as r,G as i,H as a,O as o,T as s,V as c,_ as l,a as u,b as d,j as f,q as p,w as m}from"./registry-DtD9RDtk.js";import{K as h,P as g,W as _}from"./dist-DAjZNDC0.js";import{i as v,t as y}from"./DocPage-B1L0vw6V.js";var b=n();function x(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{icon:(0,b.jsx)(u,{}),ariaLabel:`Add`,onClick:()=>alert(`Add`)}),(0,b.jsx)(g,{icon:(0,b.jsx)(c,{}),ariaLabel:`Settings`}),(0,b.jsx)(g,{icon:(0,b.jsx)(i,{}),ariaLabel:`Delete`})]})}function S(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{icon:(0,b.jsx)(m,{}),color:`#f59e0b`,bgColor:`rgba(245, 158, 11, 0.12)`,hoverColor:`rgba(245, 158, 11, 0.24)`,ariaLabel:`Energy`}),(0,b.jsx)(g,{icon:(0,b.jsx)(f,{}),color:`#ffffff`,bgColor:`#16a34a`,ariaLabel:`Eco mode`}),(0,b.jsx)(g,{icon:(0,b.jsx)(p,{}),color:`#0ea5e9`,activeColor:`#0369a1`,active:!0,ariaLabel:`Water`})]})}var C=Object.keys(h);function w(){return(0,b.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(110px, 1fr))`,gap:16,width:`100%`},children:C.map(e=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,b.jsx)(_,{type:e}),(0,b.jsx)(`code`,{children:e})]},e))})}var T=e(t(),1);function E(){let[e,t]=(0,T.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_,{type:`like`,onChange:t}),(0,b.jsx)(_,{type:`bookmark`,initialState:!0}),(0,b.jsx)(_,{type:`star`,size:`large`,shape:`square`}),(0,b.jsx)(_,{type:`notification`,disabled:!0}),(0,b.jsx)(`span`,{children:e?`Liked`:`Not liked yet`})]})}function D(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{icon:(0,b.jsx)(a,{}),size:`small`,ariaLabel:`Small`}),(0,b.jsx)(g,{icon:(0,b.jsx)(a,{}),size:`medium`,ariaLabel:`Medium`}),(0,b.jsx)(g,{icon:(0,b.jsx)(a,{}),size:`large`,ariaLabel:`Large`}),(0,b.jsx)(g,{icon:(0,b.jsx)(a,{}),shape:`square`,size:`small`,ariaLabel:`Small square`}),(0,b.jsx)(g,{icon:(0,b.jsx)(a,{}),shape:`square`,ariaLabel:`Medium square`}),(0,b.jsx)(g,{icon:(0,b.jsx)(a,{}),shape:`square`,size:`large`,ariaLabel:`Large square`})]})}function O(){let[e,t]=(0,T.useState)(!1),[n,a]=(0,T.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{icon:(0,b.jsx)(l,{}),variant:`primary`,loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},ariaLabel:`Upload`}),(0,b.jsx)(g,{icon:(0,b.jsx)(r,{}),active:n,"aria-pressed":n,onClick:()=>a(e=>!e),ariaLabel:`Mute microphone`}),(0,b.jsx)(g,{icon:(0,b.jsx)(i,{}),disabled:!0,ariaLabel:`Delete`})]})}function k(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{icon:(0,b.jsx)(d,{}),ariaLabel:`Copy`,showTooltip:!0,tooltip:{content:`Copy to clipboard`}}),(0,b.jsx)(g,{icon:(0,b.jsx)(o,{}),variant:`info`,ariaLabel:`More information`,showTooltip:!0,tooltip:{content:`Hover or focus to see me`,arrow:!0}})]})}var A=[`primary`,`secondary`,`success`,`warning`,`error`,`info`];function j(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{icon:(0,b.jsx)(s,{}),ariaLabel:`Default`}),A.map(e=>(0,b.jsx)(g,{icon:(0,b.jsx)(s,{}),variant:e,ariaLabel:e},e))]})}var M=v(Object.assign({"./demos/basic.tsx":x,"./demos/custom-colors.tsx":S,"./demos/interactive-types.tsx":w,"./demos/interactive.tsx":E,"./demos/sizes-and-shapes.tsx":D,"./demos/states.tsx":O,"./demos/tooltip.tsx":k,"./demos/variants.tsx":j}),Object.assign({"./demos/basic.tsx":`import { IconButton } from "@minerva/lib-core";
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
import { InteractiveIconButton } from "@minerva/lib-core";

export default function InteractiveDemo() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <InteractiveIconButton type="like" onChange={setLiked} />
      <InteractiveIconButton type="bookmark" initialState />
      <InteractiveIconButton type="star" size="large" shape="square" />
      <InteractiveIconButton type="notification" disabled />
      <span>{liked ? "Liked" : "Not liked yet"}</span>
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
`})),N=()=>(0,b.jsx)(y,{id:`icon-button`,demos:M});export{N as default};