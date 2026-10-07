import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{A as r,E as i,K as a,N as o,O as s,P as c,h as l}from"./dist-C3Cy1YK6.js";import{J as u}from"./registry-DXcVqgdp.js";import{n as d,t as f}from"./index-CE9n_auY.js";import{a as p,i as m,n as h,r as g,t as _}from"./DocPage-DUnq_TLt.js";var v=e(t(),1),y=n(),b={violet:`#7c3aed`,teal:`#0d9488`,orange:`#c2410c`},x=e=>({"--primary-color":e,"--primary-color-hover":`color-mix(in srgb, var(--primary-color) 85%, var(--foreground-color))`,"--primary-color-active":`color-mix(in srgb, var(--primary-color) 72%, var(--foreground-color))`,"--primary-color-subtle":`color-mix(in srgb, var(--primary-color) 12%, var(--surface-color))`,"--primary-color-text":`color-mix(in srgb, var(--primary-color) 80%, var(--foreground-color))`,"--focus-ring-color":`color-mix(in srgb, var(--primary-color) 45%, transparent)`,padding:16,borderRadius:8,border:`1px dashed var(--border-color)`});function S(){let[e,t]=(0,v.useState)(`violet`);return(0,y.jsxs)(s,{direction:`vertical`,size:`medium`,children:[(0,y.jsx)(`div`,{role:`group`,"aria-label":`Brand color`,style:{display:`flex`,gap:8},children:Object.keys(b).map(n=>(0,y.jsx)(l,{size:`small`,variant:n===e?`primary`:`secondary`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))}),(0,y.jsx)(`div`,{style:x(b[e]),children:(0,y.jsxs)(s,{wrap:!0,align:`center`,children:[(0,y.jsx)(l,{variant:`primary`,children:`Scoped primary`}),(0,y.jsx)(a,{label:`Switch`,defaultChecked:!0}),(0,y.jsx)(c,{label:`Checkbox`,defaultChecked:!0}),(0,y.jsx)(r,{variant:`primary`,children:`Tag`})]})})]})}var C=m(Object.assign({"./demos/scoped-theme.tsx":S}),Object.assign({"./demos/scoped-theme.tsx":`import type React from "react";
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
`})),w={auto:`header.theme.auto`,light:`header.theme.light`,dark:`header.theme.dark`,"github-dark":`header.theme.githubDark`},T=[`primary`,`secondary`,`success`,`warning`,`danger`,`info`],E=[``,`-hover`,`-active`,`-subtle`,`-border`,`-text`],D=`import { ConfigProvider } from "@minerva/lib-core";
import "@minerva/lib-core/style.css";

export default function App() {
  // "auto" (default) follows the operating system's color scheme
  return <ConfigProvider theme="github-dark">{/* your app */}</ConfigProvider>;
}`,O=`<!-- what ConfigProvider writes on the document root -->
<html style="--primary-color: #58a6ff; --background-color: #0d1117; ...">`,k=`/* Component-level tokens are not set by the built-in themes,
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
}`,A=`import { ConfigProvider, themes, type ComponentTheme } from "@minerva/lib-core";

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
}`,j=e=>!e.startsWith(`shadow-`)&&!e.startsWith(`radius-`),M=({token:e})=>{let t=e.startsWith(`shadow-`)?{boxShadow:`var(--${e})`,background:`var(--surface-color)`}:e.startsWith(`radius-`)?{borderRadius:`var(--${e})`,background:`var(--primary-color-subtle)`}:{background:`var(--${e})`};return(0,y.jsx)(`span`,{"aria-hidden":`true`,style:{display:`inline-block`,width:20,height:20,marginRight:8,verticalAlign:`middle`,border:j(e)?`1px solid var(--border-color)`:0,borderRadius:4,...t}})},N=({name:e})=>{let{t}=u(),n=h(e);return!n||n.kind!==`interface`?null:(0,y.jsx)(`div`,{className:g.tableWrapper,tabIndex:0,role:`region`,"aria-label":e,children:(0,y.jsxs)(`table`,{className:g.propsTable,children:[(0,y.jsx)(`thead`,{children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{scope:`col`,children:t(`docs.theming.tokens.variable`)}),(0,y.jsx)(`th`,{scope:`col`,children:t(`doc.description`)})]})}),(0,y.jsx)(`tbody`,{children:n.props.map(n=>(0,y.jsxs)(`tr`,{children:[(0,y.jsxs)(`th`,{scope:`row`,children:[(0,y.jsx)(M,{token:n.name}),(0,y.jsxs)(`code`,{className:g.propName,children:[`--`,n.name]})]}),(0,y.jsx)(`td`,{children:t(`docs.theme-utils.api.${e}.${n.name}`,{defaultValue:n.description??``})})]},n.name))})]})})},P=()=>{let{t:e}=u(),{mode:t,setMode:n,resolved:p}=d();return(0,y.jsxs)(`div`,{className:g.demo,children:[(0,y.jsxs)(`div`,{className:g.demoHeader,children:[(0,y.jsx)(`div`,{role:`group`,"aria-label":e(`header.theme.label`),style:{display:`flex`,flexWrap:`wrap`,gap:8},children:f.map(r=>(0,y.jsx)(l,{size:`small`,variant:r===t?`primary`:`secondary`,"aria-pressed":r===t,onClick:()=>n(r),children:e(w[r])},r))}),(0,y.jsxs)(`p`,{className:g.demoDescription,children:[e(`docs.theming.live.current`),` `,(0,y.jsx)(`code`,{children:p})]})]}),(0,y.jsx)(`div`,{className:g.demoPreview,children:(0,y.jsxs)(s,{direction:`vertical`,size:`medium`,style:{width:`100%`},children:[(0,y.jsxs)(s,{wrap:!0,children:[(0,y.jsx)(l,{variant:`primary`,children:`Primary`}),(0,y.jsx)(l,{variant:`secondary`,children:`Secondary`}),(0,y.jsx)(l,{variant:`success`,children:`Success`}),(0,y.jsx)(l,{variant:`error`,children:`Error`}),(0,y.jsx)(r,{variant:`primary`,children:`Tag`}),(0,y.jsx)(r,{variant:`success`,children:`Success`})]}),(0,y.jsxs)(s,{wrap:!0,align:`center`,children:[(0,y.jsx)(a,{label:`Switch`,defaultChecked:!0}),(0,y.jsx)(c,{label:`Checkbox`,defaultChecked:!0}),(0,y.jsx)(i,{name:`theming-showcase`,label:`Text field`,placeholder:`Type here`})]}),(0,y.jsx)(o,{variant:`info`,title:`Alert`,children:e(`docs.theming.live.alert`)})]})})]})},F=()=>{let{t:e}=u(),t=[{value:`"auto"`,text:e(`docs.theming.values.auto`)},{value:`"light"`,text:e(`docs.theming.values.light`)},{value:`"dark"`,text:e(`docs.theming.values.dark`)},{value:`"github-dark"`,text:e(`docs.theming.values.githubDark`)},{value:`ThemeMap`,text:e(`docs.theming.values.object`)},{value:`{ light, dark }`,text:e(`docs.theming.values.pair`)}],n=(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`section`,{className:g.section,"aria-labelledby":`built-in`,children:[(0,y.jsx)(`h2`,{id:`built-in`,children:e(`docs.theming.builtIn.title`)}),(0,y.jsx)(`p`,{className:g.prose,children:e(`docs.theming.builtIn.text`)}),(0,y.jsx)(p,{code:D,language:`tsx`})]}),(0,y.jsxs)(`section`,{className:g.section,"aria-labelledby":`live`,children:[(0,y.jsx)(`h2`,{id:`live`,children:e(`docs.theming.live.title`)}),(0,y.jsx)(`p`,{className:g.prose,children:e(`docs.theming.live.text`)}),(0,y.jsx)(P,{})]}),(0,y.jsxs)(`section`,{className:g.section,"aria-labelledby":`theme-values`,children:[(0,y.jsx)(`h2`,{id:`theme-values`,children:e(`docs.theming.values.title`)}),(0,y.jsx)(`p`,{className:g.prose,children:e(`docs.theming.values.text`)}),(0,y.jsx)(`div`,{className:g.tableWrapper,tabIndex:0,role:`region`,"aria-label":e(`docs.theming.values.title`),children:(0,y.jsxs)(`table`,{className:g.propsTable,children:[(0,y.jsx)(`thead`,{children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{scope:`col`,children:e(`docs.theming.values.value`)}),(0,y.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,y.jsx)(`tbody`,{children:t.map(e=>(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{scope:`row`,children:(0,y.jsx)(`code`,{className:g.propName,children:e.value})}),(0,y.jsx)(`td`,{children:e.text})]},e.value))})]})})]}),(0,y.jsxs)(`section`,{className:g.section,"aria-labelledby":`how-it-works`,children:[(0,y.jsx)(`h2`,{id:`how-it-works`,children:e(`docs.theming.how.title`)}),(0,y.jsx)(`p`,{className:g.prose,children:e(`docs.theming.how.p1`)}),(0,y.jsx)(p,{code:O,language:`html`}),(0,y.jsx)(`p`,{className:g.prose,children:e(`docs.theming.how.p2`)})]})]});return(0,y.jsxs)(_,{id:`theming`,demos:C,intro:n,children:[(0,y.jsxs)(`section`,{className:g.section,"aria-labelledby":`custom-theme`,children:[(0,y.jsx)(`h2`,{id:`custom-theme`,children:e(`docs.theming.custom.title`)}),(0,y.jsx)(`p`,{className:g.prose,children:e(`docs.theming.custom.text`)}),(0,y.jsx)(p,{code:A,language:`tsx`})]}),(0,y.jsxs)(`section`,{className:g.section,"aria-labelledby":`css-overrides`,children:[(0,y.jsx)(`h2`,{id:`css-overrides`,children:e(`docs.theming.css.title`)}),(0,y.jsx)(`p`,{className:g.prose,children:e(`docs.theming.css.text`)}),(0,y.jsx)(p,{code:k,language:`scss`}),(0,y.jsx)(`p`,{className:g.callout,children:e(`docs.theming.css.note`)})]}),(0,y.jsxs)(`section`,{className:g.section,"aria-labelledby":`tokens`,children:[(0,y.jsx)(`h2`,{id:`tokens`,children:e(`docs.theming.tokens.title`)}),(0,y.jsx)(`p`,{className:g.prose,children:e(`docs.theming.tokens.text`)}),(0,y.jsx)(`h3`,{children:e(`docs.theming.tokens.base`)}),(0,y.jsx)(`p`,{className:g.prose,children:e(`docs.theming.tokens.baseText`)}),(0,y.jsx)(N,{name:`ThemeProps`}),(0,y.jsx)(`h3`,{style:{marginTop:`var(--spacing-8)`},children:e(`docs.theming.tokens.semantic`)}),(0,y.jsx)(`p`,{className:g.prose,children:e(`docs.theming.tokens.semanticText`)}),(0,y.jsx)(N,{name:`SemanticThemeProps`}),(0,y.jsx)(`h3`,{style:{marginTop:`var(--spacing-8)`},children:e(`docs.theming.tokens.roles`)}),(0,y.jsx)(`p`,{className:g.prose,children:e(`docs.theming.tokens.rolesText`)}),(0,y.jsx)(`div`,{className:g.tableWrapper,tabIndex:0,role:`region`,"aria-label":e(`docs.theming.tokens.roles`),children:(0,y.jsxs)(`table`,{className:g.propsTable,children:[(0,y.jsx)(`thead`,{children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{scope:`col`,children:e(`docs.theming.tokens.role`)}),E.map(e=>(0,y.jsx)(`th`,{scope:`col`,children:(0,y.jsx)(`code`,{children:`--<role>-color${e}`})},e))]})}),(0,y.jsx)(`tbody`,{children:T.map(e=>(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{scope:`row`,children:(0,y.jsx)(`code`,{className:g.propName,children:e})}),E.map(t=>(0,y.jsx)(`td`,{title:`--${e}-color${t}`,children:(0,y.jsx)(M,{token:`${e}-color${t}`})},t))]},e))})]})}),(0,y.jsx)(`h3`,{style:{marginTop:`var(--spacing-8)`},children:e(`docs.theming.tokens.component`)}),(0,y.jsx)(`p`,{className:g.prose,children:e(`docs.theming.tokens.componentText`)}),(0,y.jsx)(N,{name:`ComponentThemeProps`})]})]})};export{F as default};