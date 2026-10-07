import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{c as t,h as n,n as r,t as i}from"./react-vendor-fq7Q804H.js";import{d as a,et as o,h as s,m as ee,r as c,tt as l,u}from"./ConfigProvider-BGZRMKW0-zZcUK1pN.js";import{i as d,r as f}from"./iconBase-DGdXj6CY.js";import{f as p,hn as m}from"./useDisclosure-KPd2IizR-djK-Zlxq.js";import{d as h,m as g}from"./dist-CcA3uxH5.js";import{a as _,c as te,l as v,n as y,o as b,s as x,t as S,u as ne}from"./DocPage-Dm1vTl9w.js";function re(){return(0,C.jsx)(`div`,{style:{...T(w),padding:16,borderRadius:8,border:`1px solid var(--border-color)`,background:`var(--surface-color)`,color:`var(--text-color)`},children:(0,C.jsxs)(g,{direction:`vertical`,size:`medium`,children:[(0,C.jsx)(`strong`,{children:`Sepia theme`}),(0,C.jsx)(`span`,{children:`Only this container uses the custom theme.`}),(0,C.jsxs)(g,{wrap:!0,align:`center`,children:[(0,C.jsx)(a,{variant:`primary`,children:`Primary`}),(0,C.jsx)(a,{variant:`primary`,disabled:!0,children:`Disabled`}),(0,C.jsx)(p,{label:`Reading mode`,defaultChecked:!0})]})]})})}var C,w,T;function E(){return(E=e((()=>{h(),C=i(),w={...c.light,"primary-color":`#9a3412`,"primary-color-hover":`#7c2d12`,"primary-color-active":`#6c2710`,"background-color":`#fbf5e9`,"foreground-color":`#3b2f2a`,"border-color":`#e0d2b8`,"text-gray":`#6b5b4e`,"focus-ring-color":`rgba(154, 52, 18, 0.45)`},T=e=>Object.fromEntries(Object.entries(e).map(([e,t])=>[`--${e}`,t]))})))()}function D(){let{locale:e}=u(),{t}=s();return(0,A.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`locale: `,(0,A.jsx)(m,{variant:`primary`,children:e?.language}),` `,j,`:`,` `,(0,A.jsx)(m,{variant:`info`,children:t(j)})]})}function O(){let{theme:e}=u(),{i18n:t}=s(),[n,r]=(0,k.useState)(`en`);return(0,k.useEffect)(()=>()=>{t.changeLanguage(`en`)},[t]),(0,A.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,A.jsx)(`div`,{role:`group`,"aria-label":`Language`,style:{display:`flex`,gap:8},children:M.map(e=>(0,A.jsx)(a,{size:`small`,variant:e===n?`primary`:`secondary`,"aria-pressed":e===n,onClick:()=>r(e),children:e},e))}),(0,A.jsx)(ee,{theme:e,locale:{language:n},children:(0,A.jsx)(D,{})})]})}var k,A,j,M;function N(){return(N=e((()=>{k=n(),h(),A=i(),j=`avatar.default`,M=[`en`,`zh`,`fr`]})))()}function ie(){let{resolvedMode:e=`light`,palette:t}=u();return(0,P.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:12},children:o.map(n=>(0,P.jsxs)(`div`,{"data-palette":n,"data-theme":e,style:{display:`grid`,gap:10,padding:14,borderRadius:10,border:`1px solid var(--border-color)`,background:`var(--background-color)`,color:`var(--text-color)`,fontFamily:`var(--font-family-sans)`},children:[(0,P.jsxs)(`strong`,{children:[`palette="`,n,`"`,` `,t===n&&(0,P.jsx)(m,{variant:`success`,children:`active`})]}),(0,P.jsx)(a,{size:`small`,variant:`primary`,children:`Primary`}),(0,P.jsxs)(`span`,{style:{color:`var(--text-muted-color)`,fontSize:13},children:[`data-theme="`,e,`"`]})]},n))})}var P;function F(){return(F=e((()=>{h(),l(),P=i()})))()}function ae(){let{theme:e,resolvedTheme:t,locale:n}=u(),r=e=>typeof e==`string`?e:`custom theme object`;return(0,I.jsxs)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`,gap:`8px 16px`,margin:0},children:[(0,I.jsx)(`dt`,{children:`theme`}),(0,I.jsx)(`dd`,{style:{margin:0},children:(0,I.jsx)(m,{variant:`primary`,children:r(e)})}),(0,I.jsx)(`dt`,{children:`resolvedTheme`}),(0,I.jsx)(`dd`,{style:{margin:0},children:(0,I.jsx)(m,{variant:`info`,children:r(t)})}),(0,I.jsx)(`dt`,{children:`locale.language`}),(0,I.jsx)(`dd`,{style:{margin:0},children:(0,I.jsx)(m,{variant:`success`,children:n?.language??`en`})})]})}var I;function L(){return(L=e((()=>{h(),I=i()})))()}var R;function z(){return(z=e((()=>{R=`import type React from "react";
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
`})))()}var B;function V(){return(V=e((()=>{B=`import { useEffect, useState } from "react";
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
`})))()}var H;function U(){return(U=e((()=>{H=`import { Button, Tag, useConfig } from "@minerva/lib-core";
import { PALETTES } from "@minerva/lib-core/theme-utils";

// <ConfigProvider palette="tech"> sets data-palette="tech" on <html>. The
// palette blocks of style.css are attribute selectors, so this demo previews
// every palette side by side on local elements, in the site's current mode.
export default function PaletteDemo() {
  const { resolvedMode = "light", palette } = useConfig();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: 12,
      }}
    >
      {PALETTES.map((name) => (
        <div
          key={name}
          data-palette={name}
          data-theme={resolvedMode}
          style={{
            display: "grid",
            gap: 10,
            padding: 14,
            borderRadius: 10,
            border: "1px solid var(--border-color)",
            background: "var(--background-color)",
            color: "var(--text-color)",
            fontFamily: "var(--font-family-sans)",
          }}
        >
          <strong>
            palette=&quot;{name}&quot;{" "}
            {palette === name && <Tag variant="success">active</Tag>}
          </strong>
          <Button size="small" variant="primary">
            Primary
          </Button>
          <span style={{ color: "var(--text-muted-color)", fontSize: 13 }}>
            data-theme=&quot;{resolvedMode}&quot;
          </span>
        </div>
      ))}
    </div>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { Tag, useConfig } from "@minerva/lib-core";

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
`})))()}var K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{E(),N(),F(),L(),z(),V(),U(),G(),n(),f(),t(),ne(),y(),b(),te(),K=i(),q=x(Object.assign({"./demos/custom-theme.tsx":re,"./demos/locale.tsx":O,"./demos/palette.tsx":ie,"./demos/use-config.tsx":ae}),Object.assign({"./demos/custom-theme.tsx":R,"./demos/locale.tsx":B,"./demos/palette.tsx":H,"./demos/use-config.tsx":W})),J=`import { ConfigProvider } from "@minerva/lib-core";
import "@minerva/lib-core/style.css";

export default function Root() {
  return (
    <ConfigProvider theme="auto" locale={{ language: "en" }}>
      <App />
    </ConfigProvider>
  );
}`,Y=`import { useState } from "react";
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
}`,X=`import { ConfigProvider, useConfig } from "@minerva/lib-core";

export default function Root() {
  return (
    // "system" is an alias of "auto". palette applies with light / dark / system.
    <ConfigProvider
      theme="system"
      palette="editorial"
      persist // restore / save the "theme" and "palette" cookies
      onThemeChange={(theme) => analytics.track("theme", theme)}
      onPaletteChange={(palette) => analytics.track("palette", palette)}
    >
      <App />
    </ConfigProvider>
  );
}

function Settings() {
  const { mode, resolvedMode, palette, setTheme, setPalette } = useConfig();
  // mode: "light" | "dark" | "system"; resolvedMode: "light" | "dark"
  return (
    <>
      <button onClick={() => setTheme(resolvedMode === "dark" ? "light" : "dark")}>
        {mode}
      </button>
      <button onClick={() => setPalette(palette === "tech" ? null : "tech")}>
        {palette ?? "default"}
      </button>
    </>
  );
}`,Z=`import { useContext } from "react";
import { ConfigContext } from "@minerva/lib-core";

// Unlike useConfig(), reading the context directly does not throw outside a
// provider: it returns undefined, which is handy for optional integrations.
function useOptionalConfig() {
  return useContext(ConfigContext);
}`,Q=()=>{let{t:e}=d(),t=(0,K.jsxs)(`section`,{className:_.section,"aria-labelledby":`usage`,children:[(0,K.jsx)(`h2`,{id:`usage`,children:e(`docs.config-provider.usage.title`)}),(0,K.jsx)(`p`,{className:_.prose,children:e(`docs.config-provider.usage.text`)}),(0,K.jsx)(v,{code:J,language:`tsx`}),(0,K.jsx)(`p`,{className:_.prose,children:e(`docs.config-provider.usage.dynamic`)}),(0,K.jsx)(v,{code:Y,language:`tsx`}),(0,K.jsx)(`p`,{className:_.callout,children:e(`docs.config-provider.usage.global`)}),(0,K.jsx)(`h3`,{children:e(`docs.config-provider.palette.title`)}),(0,K.jsx)(`p`,{className:_.prose,children:e(`docs.config-provider.palette.text`)}),(0,K.jsx)(v,{code:X,language:`tsx`}),(0,K.jsxs)(`p`,{className:_.prose,children:[e(`docs.config-provider.palette.setters`),` `,(0,K.jsx)(r,{to:`/theme-palette`,children:e(`docs.theme-palette.title`)})]})]});return(0,K.jsx)(S,{id:`config-provider`,demos:q,intro:t,children:(0,K.jsxs)(`section`,{className:_.section,"aria-labelledby":`config-context`,children:[(0,K.jsx)(`h2`,{id:`config-context`,children:e(`docs.config-provider.context.title`)}),(0,K.jsx)(`p`,{className:_.prose,children:e(`docs.config-provider.context.text`)}),(0,K.jsx)(v,{code:Z,language:`tsx`})]})})}})))()}$();export{Q as default};