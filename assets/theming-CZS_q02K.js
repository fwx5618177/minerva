import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{t as r}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{i,r as a}from"./iconBase-DWTUFqgC.js";import{At as o,Ht as s,J as c,Mt as l,fn as u,p as d,wn as f}from"./dist-BWNqkmth.js";import{a as p,i as m,n as h}from"./ThemeModeContext-BU1G7HLf.js";import{a as g,c as _,i as v,l as y,n as b,o as x,r as S,s as C,t as w,u as T}from"./DocPage-DGOZswYH.js";function E(){let[e,t]=(0,D.useState)(`violet`);return(0,O.jsxs)(u,{direction:`vertical`,size:`medium`,children:[(0,O.jsx)(`div`,{role:`group`,"aria-label":`Brand color`,style:{display:`flex`,gap:8},children:Object.keys(k).map(n=>(0,O.jsx)(r,{size:`small`,variant:n===e?`primary`:`secondary`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))}),(0,O.jsx)(`div`,{style:A(k[e]),children:(0,O.jsxs)(u,{wrap:!0,align:`center`,children:[(0,O.jsx)(r,{variant:`primary`,children:`Scoped primary`}),(0,O.jsx)(d,{label:`Switch`,defaultChecked:!0}),(0,O.jsx)(l,{label:`Checkbox`,defaultChecked:!0}),(0,O.jsx)(f,{variant:`primary`,children:`Tag`})]})})]})}var D,O,k,A;function j(){return(j=e((()=>{D=t(),s(),O=n(),k={violet:`#7c3aed`,teal:`#0d9488`,orange:`#c2410c`},A=e=>({"--primary-color":e,"--primary-color-hover":`color-mix(in srgb, var(--primary-color) 85%, var(--foreground-color))`,"--primary-color-active":`color-mix(in srgb, var(--primary-color) 72%, var(--foreground-color))`,"--primary-color-subtle":`color-mix(in srgb, var(--primary-color) 12%, var(--surface-color))`,"--primary-color-text":`color-mix(in srgb, var(--primary-color) 80%, var(--foreground-color))`,"--focus-ring-color":`color-mix(in srgb, var(--primary-color) 45%, transparent)`,padding:16,borderRadius:8,border:`1px dashed var(--border-color)`})})))()}var M;function N(){return(N=e((()=>{M=`import type React from "react";
import { useState } from "react";
import { Button, Checkbox, Space, Switch, Tag } from "@minerva/lib-core";

const BRANDS = {
  violet: "#7c3aed",
  teal: "#0d9488",
  orange: "#c2410c",
};

type Brand = keyof typeof BRANDS;

// Theme tokens are plain CSS custom properties, so they can be overridden
// for a single subtree. Derived tokens (hover, subtle, focus ring...) are
// computed on :root, so redeclare them to make them follow the new value.
const brandStyle = (primary: string) =>
  ({
    "--primary-color": primary,
    "--primary-color-hover":
      "color-mix(in srgb, var(--primary-color) 85%, var(--foreground-color))",
    "--primary-color-active":
      "color-mix(in srgb, var(--primary-color) 72%, var(--foreground-color))",
    "--primary-color-subtle":
      "color-mix(in srgb, var(--primary-color) 12%, var(--surface-color))",
    "--primary-color-text":
      "color-mix(in srgb, var(--primary-color) 80%, var(--foreground-color))",
    "--focus-ring-color":
      "color-mix(in srgb, var(--primary-color) 45%, transparent)",
    padding: 16,
    borderRadius: 8,
    border: "1px dashed var(--border-color)",
  }) as React.CSSProperties;

export default function ScopedThemeDemo() {
  const [brand, setBrand] = useState<Brand>("violet");

  return (
    <Space direction="vertical" size="medium">
      <div
        role="group"
        aria-label="Brand color"
        style={{ display: "flex", gap: 8 }}
      >
        {(Object.keys(BRANDS) as Brand[]).map((name) => (
          <Button
            key={name}
            size="small"
            variant={name === brand ? "primary" : "secondary"}
            aria-pressed={name === brand}
            onClick={() => setBrand(name)}
          >
            {name}
          </Button>
        ))}
      </div>

      <div style={brandStyle(BRANDS[brand])}>
        <Space wrap align="center">
          <Button variant="primary">Scoped primary</Button>
          <Switch label="Switch" defaultChecked />
          <Checkbox label="Checkbox" defaultChecked />
          <Tag variant="primary">Tag</Tag>
        </Space>
      </div>
    </Space>
  );
}
`})))()}var P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{j(),N(),t(),a(),s(),T(),b(),x(),_(),v(),m(),P=n(),F=C(Object.assign({"./demos/scoped-theme.tsx":E}),Object.assign({"./demos/scoped-theme.tsx":M})),I={auto:`header.theme.auto`,light:`header.theme.light`,dark:`header.theme.dark`,"github-dark":`header.theme.githubDark`},L=[`primary`,`secondary`,`success`,`warning`,`danger`,`info`],R=[``,`-hover`,`-active`,`-subtle`,`-border`,`-text`],z=`import { ConfigProvider } from "@minerva/lib-core";
import "@minerva/lib-core/style.css";

export default function App() {
  // "auto" (default) follows the operating system's color scheme
  return <ConfigProvider theme="github-dark">{/* your app */}</ConfigProvider>;
}`,B=`<!-- what ConfigProvider writes on the document root -->
<html style="--primary-color: #58a6ff; --background-color: #0d1117; ...">`,V=`/* Component-level tokens are not set by the built-in themes,
   so a plain stylesheet can define them */
:root {
  --card-bg-color: #fdf6e3;
  --btn-bg-color-hover: #1e40af;
}

/* Theme tokens are written as inline styles on <html> by ConfigProvider,
   which beat :root rules: use !important to force a value globally... */
:root {
  --radius-md: 10px !important;
}

/* ...or override them for one part of the page */
.checkout {
  --primary-color: #16a34a;
  /* derived tokens are computed on :root: redeclare the ones you need */
  --primary-color-hover: color-mix(in srgb, var(--primary-color) 85%, var(--foreground-color));
}`,H=`import { ConfigProvider, themes, type ComponentTheme } from "@minerva/lib-core";

// Start from a built-in theme and override the tokens you need.
// Derived tokens (hover, subtle, focus ring...) follow automatically.
const brandLight: ComponentTheme = {
  ...themes.light,
  "primary-color": "#7c3aed",
  "link-color": "#6d28d9",
};

const brandDark: ComponentTheme = {
  ...themes.dark,
  "primary-color": "#a78bfa",
  "focus-ring-color": "rgba(167, 139, 250, 0.55)",
};

export default function App() {
  return (
    // a single object: always this theme
    // <ConfigProvider theme={brandLight}>
    // a { light, dark } pair: follows the system color scheme
    <ConfigProvider theme={{ light: brandLight, dark: brandDark }}>
      {/* your app */}
    </ConfigProvider>
  );
}`,U=e=>!e.startsWith(`shadow-`)&&!e.startsWith(`radius-`),W=({token:e})=>{let t=e.startsWith(`shadow-`)?{boxShadow:`var(--${e})`,background:`var(--surface-color)`}:e.startsWith(`radius-`)?{borderRadius:`var(--${e})`,background:`var(--primary-color-subtle)`}:{background:`var(--${e})`};return(0,P.jsx)(`span`,{"aria-hidden":`true`,style:{display:`inline-block`,width:20,height:20,marginRight:8,verticalAlign:`middle`,border:U(e)?`1px solid var(--border-color)`:0,borderRadius:4,...t}})},G=({name:e})=>{let{t}=i(),n=S(e);return!n||n.kind!==`interface`?null:(0,P.jsx)(`div`,{className:g.tableWrapper,tabIndex:0,role:`region`,"aria-label":e,children:(0,P.jsxs)(`table`,{className:g.propsTable,children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`th`,{scope:`col`,children:t(`docs.theming.tokens.variable`)}),(0,P.jsx)(`th`,{scope:`col`,children:t(`doc.description`)})]})}),(0,P.jsx)(`tbody`,{children:n.props.map(n=>(0,P.jsxs)(`tr`,{children:[(0,P.jsxs)(`th`,{scope:`row`,children:[(0,P.jsx)(W,{token:n.name}),(0,P.jsxs)(`code`,{className:g.propName,children:[`--`,n.name]})]}),(0,P.jsx)(`td`,{children:t(`docs.theme-utils.api.${e}.${n.name}`,{defaultValue:n.description??``})})]},n.name))})]})})},K=()=>{let{t:e}=i(),{mode:t,setMode:n,resolved:a}=p();return(0,P.jsxs)(`div`,{className:g.demo,children:[(0,P.jsxs)(`div`,{className:g.demoHeader,children:[(0,P.jsx)(`div`,{role:`group`,"aria-label":e(`header.theme.label`),style:{display:`flex`,flexWrap:`wrap`,gap:8},children:h.map(i=>(0,P.jsx)(r,{size:`small`,variant:i===t?`primary`:`secondary`,"aria-pressed":i===t,onClick:()=>n(i),children:e(I[i])},i))}),(0,P.jsxs)(`p`,{className:g.demoDescription,children:[e(`docs.theming.live.current`),` `,(0,P.jsx)(`code`,{children:a})]})]}),(0,P.jsx)(`div`,{className:g.demoPreview,children:(0,P.jsxs)(u,{direction:`vertical`,size:`medium`,style:{width:`100%`},children:[(0,P.jsxs)(u,{wrap:!0,children:[(0,P.jsx)(r,{variant:`primary`,children:`Primary`}),(0,P.jsx)(r,{variant:`secondary`,children:`Secondary`}),(0,P.jsx)(r,{variant:`success`,children:`Success`}),(0,P.jsx)(r,{variant:`error`,children:`Error`}),(0,P.jsx)(f,{variant:`primary`,children:`Tag`}),(0,P.jsx)(f,{variant:`success`,children:`Success`})]}),(0,P.jsxs)(u,{wrap:!0,align:`center`,children:[(0,P.jsx)(d,{label:`Switch`,defaultChecked:!0}),(0,P.jsx)(l,{label:`Checkbox`,defaultChecked:!0}),(0,P.jsx)(c,{name:`theming-showcase`,label:`Text field`,placeholder:`Type here`})]}),(0,P.jsx)(o,{variant:`info`,title:`Alert`,children:e(`docs.theming.live.alert`)})]})})]})},q=()=>{let{t:e}=i(),t=[{value:`"auto"`,text:e(`docs.theming.values.auto`)},{value:`"light"`,text:e(`docs.theming.values.light`)},{value:`"dark"`,text:e(`docs.theming.values.dark`)},{value:`"github-dark"`,text:e(`docs.theming.values.githubDark`)},{value:`ThemeMap`,text:e(`docs.theming.values.object`)},{value:`{ light, dark }`,text:e(`docs.theming.values.pair`)}],n=(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`section`,{className:g.section,"aria-labelledby":`built-in`,children:[(0,P.jsx)(`h2`,{id:`built-in`,children:e(`docs.theming.builtIn.title`)}),(0,P.jsx)(`p`,{className:g.prose,children:e(`docs.theming.builtIn.text`)}),(0,P.jsx)(y,{code:z,language:`tsx`})]}),(0,P.jsxs)(`section`,{className:g.section,"aria-labelledby":`live`,children:[(0,P.jsx)(`h2`,{id:`live`,children:e(`docs.theming.live.title`)}),(0,P.jsx)(`p`,{className:g.prose,children:e(`docs.theming.live.text`)}),(0,P.jsx)(K,{})]}),(0,P.jsxs)(`section`,{className:g.section,"aria-labelledby":`theme-values`,children:[(0,P.jsx)(`h2`,{id:`theme-values`,children:e(`docs.theming.values.title`)}),(0,P.jsx)(`p`,{className:g.prose,children:e(`docs.theming.values.text`)}),(0,P.jsx)(`div`,{className:g.tableWrapper,tabIndex:0,role:`region`,"aria-label":e(`docs.theming.values.title`),children:(0,P.jsxs)(`table`,{className:g.propsTable,children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`th`,{scope:`col`,children:e(`docs.theming.values.value`)}),(0,P.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,P.jsx)(`tbody`,{children:t.map(e=>(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`th`,{scope:`row`,children:(0,P.jsx)(`code`,{className:g.propName,children:e.value})}),(0,P.jsx)(`td`,{children:e.text})]},e.value))})]})})]}),(0,P.jsxs)(`section`,{className:g.section,"aria-labelledby":`how-it-works`,children:[(0,P.jsx)(`h2`,{id:`how-it-works`,children:e(`docs.theming.how.title`)}),(0,P.jsx)(`p`,{className:g.prose,children:e(`docs.theming.how.p1`)}),(0,P.jsx)(y,{code:B,language:`html`}),(0,P.jsx)(`p`,{className:g.prose,children:e(`docs.theming.how.p2`)})]})]});return(0,P.jsxs)(w,{id:`theming`,demos:F,intro:n,children:[(0,P.jsxs)(`section`,{className:g.section,"aria-labelledby":`custom-theme`,children:[(0,P.jsx)(`h2`,{id:`custom-theme`,children:e(`docs.theming.custom.title`)}),(0,P.jsx)(`p`,{className:g.prose,children:e(`docs.theming.custom.text`)}),(0,P.jsx)(y,{code:H,language:`tsx`})]}),(0,P.jsxs)(`section`,{className:g.section,"aria-labelledby":`css-overrides`,children:[(0,P.jsx)(`h2`,{id:`css-overrides`,children:e(`docs.theming.css.title`)}),(0,P.jsx)(`p`,{className:g.prose,children:e(`docs.theming.css.text`)}),(0,P.jsx)(y,{code:V,language:`scss`}),(0,P.jsx)(`p`,{className:g.callout,children:e(`docs.theming.css.note`)})]}),(0,P.jsxs)(`section`,{className:g.section,"aria-labelledby":`tokens`,children:[(0,P.jsx)(`h2`,{id:`tokens`,children:e(`docs.theming.tokens.title`)}),(0,P.jsx)(`p`,{className:g.prose,children:e(`docs.theming.tokens.text`)}),(0,P.jsx)(`h3`,{children:e(`docs.theming.tokens.base`)}),(0,P.jsx)(`p`,{className:g.prose,children:e(`docs.theming.tokens.baseText`)}),(0,P.jsx)(G,{name:`ThemeProps`}),(0,P.jsx)(`h3`,{style:{marginTop:`var(--spacing-8)`},children:e(`docs.theming.tokens.semantic`)}),(0,P.jsx)(`p`,{className:g.prose,children:e(`docs.theming.tokens.semanticText`)}),(0,P.jsx)(G,{name:`SemanticThemeProps`}),(0,P.jsx)(`h3`,{style:{marginTop:`var(--spacing-8)`},children:e(`docs.theming.tokens.roles`)}),(0,P.jsx)(`p`,{className:g.prose,children:e(`docs.theming.tokens.rolesText`)}),(0,P.jsx)(`div`,{className:g.tableWrapper,tabIndex:0,role:`region`,"aria-label":e(`docs.theming.tokens.roles`),children:(0,P.jsxs)(`table`,{className:g.propsTable,children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`th`,{scope:`col`,children:e(`docs.theming.tokens.role`)}),R.map(e=>(0,P.jsx)(`th`,{scope:`col`,children:(0,P.jsx)(`code`,{children:`--<role>-color${e}`})},e))]})}),(0,P.jsx)(`tbody`,{children:L.map(e=>(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`th`,{scope:`row`,children:(0,P.jsx)(`code`,{className:g.propName,children:e})}),R.map(t=>(0,P.jsx)(`td`,{title:`--${e}-color${t}`,children:(0,P.jsx)(W,{token:`${e}-color${t}`})},t))]},e))})]})}),(0,P.jsx)(`h3`,{style:{marginTop:`var(--spacing-8)`},children:e(`docs.theming.tokens.component`)}),(0,P.jsx)(`p`,{className:g.prose,children:e(`docs.theming.tokens.componentText`)}),(0,P.jsx)(G,{name:`ComponentThemeProps`})]})]})}})))()}J();export{q as default};