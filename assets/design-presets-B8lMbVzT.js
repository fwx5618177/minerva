import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{g as r,h as i,l as a,m as ee,n as te,p as ne,t as o,u as s}from"./DocPage-9P1WMt4D.js";import{nt as c,rt as l}from"./io5-ChQeTV8D.js";import{n as u,t as d}from"./Button-DN5Do18G.js";import{a as re,i as f,r as p,s as ie,t as ae}from"./Card-QAWDX-p9.js";import{n as oe,t as se}from"./Input-DbQUT3J4.js";import{i as m,n as h,r as g,t as _}from"./Radio-BivND5hO.js";import{n as v,t as y}from"./Alert-BScYerjT.js";import{n as b,t as x}from"./Tag-Ucl1zTUA.js";import{n as ce,t as le}from"./Switch-DwO7xn9c.js";import{r as S,t as C}from"./ConfigProvider-Cjobfnxn.js";import{i as w,n as T,r as E}from"./Stack-NtusJivt.js";import{i as ue,o as de,t as D}from"./Select-DkmnvQoK.js";function O(){return(0,k.jsxs)(ae,{style:{maxWidth:520,width:`100%`},children:[(0,k.jsx)(re,{children:(0,k.jsx)(ie,{children:`Weekly digest`})}),(0,k.jsx)(p,{children:(0,k.jsxs)(T,{gap:3,children:[(0,k.jsx)(`p`,{style:{margin:0,lineHeight:`var(--line-height-base)`},children:`A restrained, reading-oriented look keeps long texts comfortable; a compact one fits more data on dense screens.`}),(0,k.jsxs)(w,{gap:2,wrap:!0,children:[(0,k.jsx)(x,{color:`primary`,children:`Essay`}),(0,k.jsx)(x,{color:`success`,children:`Published`})]}),(0,k.jsx)(oe,{name:`design-title`,"aria-label":`Title`,defaultValue:`On craft`}),(0,k.jsxs)(de,{"aria-label":`Section`,defaultValue:`essays`,children:[(0,k.jsx)(D,{value:`essays`,children:`Essays`}),(0,k.jsx)(D,{value:`notes`,children:`Notes`})]}),(0,k.jsx)(le,{label:`Send as newsletter`,defaultChecked:!0}),(0,k.jsx)(y,{color:`info`,title:`Scheduled for Monday`}),(0,k.jsxs)(w,{gap:2,children:[(0,k.jsx)(u,{children:`Publish`}),(0,k.jsx)(u,{color:`neutral`,variant:`outline`,children:`Save draft`})]})]})})]})}var k;function A(){return(A=e((()=>{v(),d(),f(),E(),se(),ue(),ce(),b(),k=n()})))()}function j(){let[e,t]=(0,M.useState)({density:`standard`,radius:`medium`,shadow:`standard`,fontScale:`standard`});return(0,N.jsxs)(T,{gap:4,align:`start`,children:[Object.keys(P).map(n=>(0,N.jsx)(m,{label:n,direction:`horizontal`,value:e[n],onChange:e=>t(t=>({...t,[n]:String(e)})),children:P[n].map(e=>(0,N.jsx)(_,{value:e,label:e},e))},n)),(0,N.jsx)(C,{...e,children:(0,N.jsx)(O,{})})]})}var M,N,P;function F(){return(F=e((()=>{M=t(),S(),h(),g(),E(),A(),N=n(),P={density:[`compact`,`standard`,`comfortable`],radius:[`none`,`small`,`medium`,`large`],shadow:[`none`,`subtle`,`standard`],fontScale:[`small`,`standard`,`large`]}})))()}function I(){let[e,t]=(0,L.useState)(`editorial`);return(0,R.jsxs)(T,{gap:4,align:`start`,children:[(0,R.jsx)(w,{gap:2,role:`group`,"aria-label":`Design preset`,children:z.map(n=>(0,R.jsx)(u,{size:`small`,color:n===e?`primary`:`neutral`,variant:n===e?`solid`:`outline`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))}),(0,R.jsx)(C,{preset:e,children:(0,R.jsx)(O,{})})]})}var L,R,z;function B(){return(B=e((()=>{L=t(),d(),S(),E(),A(),R=n(),z=[`minerva`,`editorial`,`compact`]})))()}var V;function H(){return(H=e((()=>{V=`import { useState } from "react";
import { ConfigProvider, Radio, RadioGroup, VStack } from "@minerva/lib-core";
import type {
  Density,
  FontScale,
  RadiusScale,
  ShadowScale,
} from "@minerva/lib-core";
import { Showcase } from "../Showcase";

const AXES = {
  density: ["compact", "standard", "comfortable"],
  radius: ["none", "small", "medium", "large"],
  shadow: ["none", "subtle", "standard"],
  fontScale: ["small", "standard", "large"],
} as const;

type Design = {
  density: Density;
  radius: RadiusScale;
  shadow: ShadowScale;
  fontScale: FontScale;
};

// Each axis can be set on its own (and overrides the preset's value)
export default function AxesDemo() {
  const [design, setDesign] = useState<Design>({
    density: "standard",
    radius: "medium",
    shadow: "standard",
    fontScale: "standard",
  });
  return (
    <VStack gap={4} align="start">
      {(Object.keys(AXES) as Array<keyof Design>).map((axis) => (
        <RadioGroup
          key={axis}
          label={axis}
          direction="horizontal"
          value={design[axis]}
          onChange={(value) =>
            setDesign(
              (current) => ({ ...current, [axis]: String(value) }) as Design,
            )
          }
        >
          {AXES[axis].map((value) => (
            <Radio key={value} value={value} label={value} />
          ))}
        </RadioGroup>
      ))}
      <ConfigProvider {...design}>
        <Showcase />
      </ConfigProvider>
    </VStack>
  );
}
`})))()}var U;function W(){return(W=e((()=>{U=`import { useState } from "react";
import { Button, ConfigProvider, HStack, VStack } from "@minerva/lib-core";
import type { DesignPreset } from "@minerva/lib-core";
import { Showcase } from "../Showcase";

const PRESETS: DesignPreset[] = ["minerva", "editorial", "compact"];

// A nested ConfigProvider scopes the design to its subtree; at the root of
// an app the same props switch the whole document (<html data-*>).
export default function PresetsDemo() {
  const [preset, setPreset] = useState<DesignPreset>("editorial");
  return (
    <VStack gap={4} align="start">
      <HStack gap={2} role="group" aria-label="Design preset">
        {PRESETS.map((name) => (
          <Button
            key={name}
            size="small"
            color={name === preset ? "primary" : "neutral"}
            variant={name === preset ? "solid" : "outline"}
            aria-pressed={name === preset}
            onClick={() => setPreset(name)}
          >
            {name}
          </Button>
        ))}
      </HStack>
      <ConfigProvider preset={preset}>
        <Showcase />
      </ConfigProvider>
    </VStack>
  );
}
`})))()}var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{F(),B(),H(),W(),t(),c(),r(),te(),s(),ee(),G=n(),K=ne(Object.assign({"./demos/axes.tsx":j,"./demos/presets.tsx":I}),Object.assign({"./demos/axes.tsx":V,"./demos/presets.tsx":U})),q=`import { ConfigProvider } from "@minerva/lib-core";
import "@minerva/lib-core/style.css";

export default function App() {
  // The whole app gets the editorial look: editorial palette, comfortable
  // density, small radius, subtle shadows and a reading-oriented type scale.
  return (
    <ConfigProvider preset="editorial" density="standard">
      {/* your app */}
    </ConfigProvider>
  );
}`,J=`// app/layout.tsx (React Server Component, e.g. Next.js App Router)
import {
  createThemeInitScript,
  designAttributes,
} from "@minerva/lib-core/theme-utils";
import { Providers } from "./providers"; // "use client": <ConfigProvider preset="editorial">

const design = { preset: "editorial" } as const;
const themeScript = createThemeInitScript({ design });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-density / data-radius / data-shadow / data-font-scale in the HTML:
    // the first paint already has the right look
    <html lang="en" suppressHydrationWarning {...designAttributes(design)}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}`,Y=`<ConfigProvider preset="compact">
  {/* dense admin screens */}
  <ConfigProvider preset="editorial">
    {/* an article preview: editorial look, portals (Modal, Popover...) included */}
  </ConfigProvider>
  <ConfigProvider radius="none">
    {/* inherits compact, only the radius changes */}
  </ConfigProvider>
</ConfigProvider>`,X=`/* The axes only set design tokens, so your own CSS can use them too */
.panel {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--row-padding-y) var(--row-padding-x);
  font-size: var(--font-size-md);
}

/* ...or react to the active design */
[data-density="compact"] .panel {
  gap: var(--space-1);
}`,Z=[{axis:`preset`,attribute:`-`,values:`"minerva" | "editorial" | "compact"`},{axis:`density`,attribute:`data-density`,values:`"compact" | "standard" | "comfortable"`},{axis:`radius`,attribute:`data-radius`,values:`"none" | "small" | "medium" | "large"`},{axis:`shadow`,attribute:`data-shadow`,values:`"none" | "subtle" | "standard"`},{axis:`fontScale`,attribute:`data-font-scale`,values:`"small" | "standard" | "large"`}],Q=()=>{let{t:e}=l(),t=(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`section`,{className:a.section,"aria-labelledby":`design-axes`,children:[(0,G.jsx)(`h2`,{id:`design-axes`,children:e(`docs.design-presets.axes.title`)}),(0,G.jsx)(`p`,{className:a.prose,children:e(`docs.design-presets.axes.text`)}),(0,G.jsx)(`div`,{className:a.tableWrapper,tabIndex:0,role:`region`,"aria-label":e(`docs.design-presets.axes.title`),children:(0,G.jsxs)(`table`,{className:a.propsTable,children:[(0,G.jsx)(`thead`,{children:(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`th`,{scope:`col`,children:e(`doc.prop`)}),(0,G.jsx)(`th`,{scope:`col`,children:e(`docs.design-presets.axes.attribute`)}),(0,G.jsx)(`th`,{scope:`col`,children:e(`doc.type`)}),(0,G.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,G.jsx)(`tbody`,{children:Z.map(({axis:t,attribute:n,values:r})=>(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`th`,{scope:`row`,children:(0,G.jsx)(`code`,{className:a.propName,children:t})}),(0,G.jsx)(`td`,{children:(0,G.jsx)(`code`,{children:n})}),(0,G.jsx)(`td`,{children:(0,G.jsx)(`code`,{className:a.propType,children:r})}),(0,G.jsx)(`td`,{children:e(`docs.design-presets.axes.${t}`)})]},t))})]})})]}),(0,G.jsxs)(`section`,{className:a.section,"aria-labelledby":`design-root`,children:[(0,G.jsx)(`h2`,{id:`design-root`,children:e(`docs.design-presets.root.title`)}),(0,G.jsx)(`p`,{className:a.prose,children:e(`docs.design-presets.root.text`)}),(0,G.jsx)(i,{code:q,language:`tsx`})]}),(0,G.jsxs)(`section`,{className:a.section,"aria-labelledby":`design-ssr`,children:[(0,G.jsx)(`h2`,{id:`design-ssr`,children:e(`docs.design-presets.ssr.title`)}),(0,G.jsx)(`p`,{className:a.prose,children:e(`docs.design-presets.ssr.text`)}),(0,G.jsx)(i,{code:J,language:`tsx`})]}),(0,G.jsxs)(`section`,{className:a.section,"aria-labelledby":`design-nested`,children:[(0,G.jsx)(`h2`,{id:`design-nested`,children:e(`docs.design-presets.nested.title`)}),(0,G.jsx)(`p`,{className:a.prose,children:e(`docs.design-presets.nested.text`)}),(0,G.jsx)(i,{code:Y,language:`tsx`})]})]});return(0,G.jsx)(o,{id:`design-presets`,demos:K,intro:t,children:(0,G.jsxs)(`section`,{className:a.section,"aria-labelledby":`design-css`,children:[(0,G.jsx)(`h2`,{id:`design-css`,children:e(`docs.design-presets.css.title`)}),(0,G.jsx)(`p`,{className:a.prose,children:e(`docs.design-presets.css.text`)}),(0,G.jsx)(i,{code:X,language:`css`})]})})}})))()}$();export{Q as default};