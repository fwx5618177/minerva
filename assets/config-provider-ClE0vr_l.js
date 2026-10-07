import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{A as r,G as i,K as a,O as o,c as s,f as c,h as l,k as u}from"./dist-C3Cy1YK6.js";import{J as d}from"./registry-DXcVqgdp.js";import{a as f,i as p,r as m,t as h}from"./DocPage-DUnq_TLt.js";var g=n(),_={...c.light,"primary-color":`#9a3412`,"primary-color-hover":`#7c2d12`,"primary-color-active":`#6c2710`,"background-color":`#fbf5e9`,"foreground-color":`#3b2f2a`,"border-color":`#e0d2b8`,"text-gray":`#6b5b4e`,"focus-ring-color":`rgba(154, 52, 18, 0.45)`},v=e=>Object.fromEntries(Object.entries(e).map(([e,t])=>[`--${e}`,t]));function y(){return(0,g.jsx)(`div`,{style:{...v(_),padding:16,borderRadius:8,border:`1px solid var(--border-color)`,background:`var(--surface-color)`,color:`var(--text-color)`},children:(0,g.jsxs)(o,{direction:`vertical`,size:`medium`,children:[(0,g.jsx)(`strong`,{children:`Sepia theme`}),(0,g.jsx)(`span`,{children:`Only this container uses the custom theme.`}),(0,g.jsxs)(o,{wrap:!0,align:`center`,children:[(0,g.jsx)(l,{variant:`primary`,children:`Primary`}),(0,g.jsx)(l,{variant:`primary`,disabled:!0,children:`Disabled`}),(0,g.jsx)(a,{label:`Reading mode`,defaultChecked:!0})]})]})})}var b=e(t(),1),x=`avatar.default`,S=[`en`,`zh`,`fr`];function C(){let{locale:e}=i(),{t}=s();return(0,g.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`locale: `,(0,g.jsx)(r,{variant:`primary`,children:e?.language}),` `,x,`:`,` `,(0,g.jsx)(r,{variant:`info`,children:t(x)})]})}function w(){let{theme:e}=i(),{i18n:t}=s(),[n,r]=(0,b.useState)(`en`);return(0,b.useEffect)(()=>()=>{t.changeLanguage(`en`)},[t]),(0,g.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,g.jsx)(`div`,{role:`group`,"aria-label":`Language`,style:{display:`flex`,gap:8},children:S.map(e=>(0,g.jsx)(l,{size:`small`,variant:e===n?`primary`:`secondary`,"aria-pressed":e===n,onClick:()=>r(e),children:e},e))}),(0,g.jsx)(u,{theme:e,locale:{language:n},children:(0,g.jsx)(C,{})})]})}function T(){let{theme:e,resolvedTheme:t,locale:n}=i(),a=e=>typeof e==`string`?e:`custom theme object`;return(0,g.jsxs)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`,gap:`8px 16px`,margin:0},children:[(0,g.jsx)(`dt`,{children:`theme`}),(0,g.jsx)(`dd`,{style:{margin:0},children:(0,g.jsx)(r,{variant:`primary`,children:a(e)})}),(0,g.jsx)(`dt`,{children:`resolvedTheme`}),(0,g.jsx)(`dd`,{style:{margin:0},children:(0,g.jsx)(r,{variant:`info`,children:a(t)})}),(0,g.jsx)(`dt`,{children:`locale.language`}),(0,g.jsx)(`dd`,{style:{margin:0},children:(0,g.jsx)(r,{variant:`success`,children:n?.language??`en`})})]})}var E=p(Object.assign({"./demos/custom-theme.tsx":y,"./demos/locale.tsx":w,"./demos/use-config.tsx":T}),Object.assign({"./demos/custom-theme.tsx":`import type React from "react";
import {
  Button,
  Space,
  Switch,
  themes,
  type ComponentTheme,
} from "@minerva/lib-core";

// A custom theme: start from a built-in one and override tokens.
const sepia: ComponentTheme = {
  ...themes.light,
  "primary-color": "#9a3412",
  "primary-color-hover": "#7c2d12",
  "primary-color-active": "#6c2710",
  "background-color": "#fbf5e9",
  "foreground-color": "#3b2f2a",
  "border-color": "#e0d2b8",
  "text-gray": "#6b5b4e",
  "focus-ring-color": "rgba(154, 52, 18, 0.45)",
};

// <ConfigProvider theme={sepia}> writes these tokens on <html> and re-themes
// the whole page. To preview a theme in one container only, write the same
// tokens as CSS custom properties on a wrapper element.
const toCssVariables = (theme: ComponentTheme) =>
  Object.fromEntries(
    Object.entries(theme).map(([key, value]) => [\`--\${key}\`, value]),
  ) as React.CSSProperties;

export default function CustomThemeDemo() {
  return (
    <div
      style={{
        ...toCssVariables(sepia),
        padding: 16,
        borderRadius: 8,
        border: "1px solid var(--border-color)",
        background: "var(--surface-color)",
        color: "var(--text-color)",
      }}
    >
      <Space direction="vertical" size="medium">
        <strong>Sepia theme</strong>
        <span>Only this container uses the custom theme.</span>
        <Space wrap align="center">
          <Button variant="primary">Primary</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Switch label="Reading mode" defaultChecked />
        </Space>
      </Space>
    </div>
  );
}
`,"./demos/locale.tsx":`import { useEffect, useState } from "react";
import {
  Button,
  ConfigProvider,
  Tag,
  useConfig,
  useI18n,
  type SupportedLanguage,
} from "@minerva/lib-core";

// a key from lib-core's built-in translations
const AVATAR_KEY = "avatar.default";
const LANGUAGES: SupportedLanguage[] = ["en", "zh", "fr"];

function Preview() {
  const { locale } = useConfig();
  const { t } = useI18n();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 8,
      }}
    >
      locale: <Tag variant="primary">{locale?.language}</Tag> {AVATAR_KEY}:{" "}
      <Tag variant="info">{t(AVATAR_KEY)}</Tag>
    </div>
  );
}

export default function LocaleDemo() {
  // Reuse the outer provider's theme so the nested one doesn't change it
  const { theme } = useConfig();
  const { i18n } = useI18n();
  const [language, setLanguage] = useState<SupportedLanguage>("en");

  // lib-core's language is global: restore the default when leaving
  useEffect(
    () => () => {
      void i18n.changeLanguage("en");
    },
    [i18n],
  );

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div
        role="group"
        aria-label="Language"
        style={{ display: "flex", gap: 8 }}
      >
        {LANGUAGES.map((lng) => (
          <Button
            key={lng}
            size="small"
            variant={lng === language ? "primary" : "secondary"}
            aria-pressed={lng === language}
            onClick={() => setLanguage(lng)}
          >
            {lng}
          </Button>
        ))}
      </div>
      <ConfigProvider theme={theme} locale={{ language }}>
        <Preview />
      </ConfigProvider>
    </div>
  );
}
`,"./demos/use-config.tsx":`import { Tag, useConfig } from "@minerva/lib-core";

// useConfig() reads the nearest ConfigProvider. This site wraps every page in
// one, so the values below change when you pick another theme in the header.
export default function UseConfigDemo() {
  const { theme, resolvedTheme, locale } = useConfig();

  const describe = (value: unknown) =>
    typeof value === "string" ? value : "custom theme object";

  return (
    <dl
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "8px 16px",
        margin: 0,
      }}
    >
      <dt>theme</dt>
      <dd style={{ margin: 0 }}>
        <Tag variant="primary">{describe(theme)}</Tag>
      </dd>
      <dt>resolvedTheme</dt>
      <dd style={{ margin: 0 }}>
        <Tag variant="info">{describe(resolvedTheme)}</Tag>
      </dd>
      <dt>locale.language</dt>
      <dd style={{ margin: 0 }}>
        <Tag variant="success">{locale?.language ?? "en"}</Tag>
      </dd>
    </dl>
  );
}
`})),D=`import { ConfigProvider } from "@minerva/lib-core";
import "@minerva/lib-core/style.css";

export default function Root() {
  return (
    <ConfigProvider theme="auto" locale={{ language: "en" }}>
      <App />
    </ConfigProvider>
  );
}`,O=`import { useState } from "react";
import { Button, ConfigProvider, type Theme } from "@minerva/lib-core";

export default function Root() {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <ConfigProvider theme={theme}>
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </Button>
    </ConfigProvider>
  );
}`,k=`import { useContext } from "react";
import { ConfigContext } from "@minerva/lib-core";

// Unlike useConfig(), reading the context directly does not throw outside a
// provider: it returns undefined, which is handy for optional integrations.
function useOptionalConfig() {
  return useContext(ConfigContext);
}`,A=()=>{let{t:e}=d(),t=(0,g.jsxs)(`section`,{className:m.section,"aria-labelledby":`usage`,children:[(0,g.jsx)(`h2`,{id:`usage`,children:e(`docs.config-provider.usage.title`)}),(0,g.jsx)(`p`,{className:m.prose,children:e(`docs.config-provider.usage.text`)}),(0,g.jsx)(f,{code:D,language:`tsx`}),(0,g.jsx)(`p`,{className:m.prose,children:e(`docs.config-provider.usage.dynamic`)}),(0,g.jsx)(f,{code:O,language:`tsx`}),(0,g.jsx)(`p`,{className:m.callout,children:e(`docs.config-provider.usage.global`)})]});return(0,g.jsx)(h,{id:`config-provider`,demos:E,intro:t,children:(0,g.jsxs)(`section`,{className:m.section,"aria-labelledby":`config-context`,children:[(0,g.jsx)(`h2`,{id:`config-context`,children:e(`docs.config-provider.context.title`)}),(0,g.jsx)(`p`,{className:m.prose,children:e(`docs.config-provider.context.text`)}),(0,g.jsx)(f,{code:k,language:`tsx`})]})})};export{A as default};