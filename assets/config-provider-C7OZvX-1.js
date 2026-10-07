import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{c as t,h as n,n as r,t as i}from"./react-vendor-fq7Q804H.js";import{it as ee,l as a,m as o,n as s,rt as c,t as l,v as u}from"./ConfigProvider-BkyyX9P3-kgnUOxy3.js";import{i as d,r as f}from"./iconBase-DWTUFqgC.js";import{An as te,Ht as p,Tt as m,fn as h,mt as g,p as ne,wn as _}from"./dist-BWNqkmth.js";import{a as v,c as y,l as b,n as re,o as ie,s as ae,t as oe,u as x}from"./DocPage-DGOZswYH.js";function S(){return(0,C.jsx)(s,{theme:w,children:(0,C.jsx)(`div`,{style:{padding:16,borderRadius:8,border:`1px solid var(--border-color)`,background:`var(--surface-color)`,color:`var(--text-color)`},children:(0,C.jsxs)(h,{direction:`vertical`,size:`medium`,children:[(0,C.jsx)(`strong`,{children:`Sepia theme`}),(0,C.jsx)(`span`,{children:`Only this container uses the custom theme.`}),(0,C.jsxs)(h,{wrap:!0,align:`center`,children:[(0,C.jsx)(l,{variant:`primary`,children:`Primary`}),(0,C.jsx)(l,{variant:`primary`,disabled:!0,children:`Disabled`}),(0,C.jsx)(ne,{label:`Reading mode`,defaultChecked:!0}),(0,C.jsxs)(te,{ariaLabel:`Paper`,defaultValue:`cream`,children:[(0,C.jsx)(m,{value:`cream`,children:`Cream`}),(0,C.jsx)(m,{value:`ivory`,children:`Ivory`}),(0,C.jsx)(m,{value:`kraft`,children:`Kraft`})]})]})]})})})}var C,w;function T(){return(T=e((()=>{p(),C=i(),w={...u.light,"primary-color":`#9a3412`,"primary-color-hover":`#7c2d12`,"primary-color-active":`#6c2710`,"background-color":`#fbf5e9`,"foreground-color":`#3b2f2a`,"border-color":`#e0d2b8`,"text-gray":`#6b5b4e`,"focus-ring-color":`rgba(154, 52, 18, 0.45)`}})))()}function E(){let{locale:e,palette:t}=o(),{t:n}=a();return(0,k.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,k.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`locale: `,(0,k.jsx)(_,{variant:`primary`,children:e?.language}),` `,A,`:`,` `,(0,k.jsx)(_,{variant:`info`,children:n(A)}),` palette:`,` `,(0,k.jsx)(_,{variant:`success`,children:t??`default`})]}),(0,k.jsx)(g,{total:50,defaultCurrent:2,showTotal:!0})]})}function D(){let[e,t]=(0,O.useState)(`en`);return(0,k.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,k.jsx)(`div`,{role:`group`,"aria-label":`Language`,style:{display:`flex`,gap:8},children:j.map(n=>(0,k.jsx)(l,{size:`small`,variant:n===e?`primary`:`secondary`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))}),(0,k.jsx)(s,{locale:{language:e},children:(0,k.jsx)(E,{})})]})}var O,k,A,j;function M(){return(M=e((()=>{O=n(),p(),k=i(),A=`avatar.default`,j=[`en`,`zh`,`ja`,`fr`]})))()}function se(){let{resolvedMode:e=`light`,palette:t}=o();return(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:12},children:c.map(n=>(0,N.jsx)(s,{theme:e,palette:n,children:(0,N.jsxs)(`div`,{style:{display:`grid`,gap:10,padding:14,borderRadius:10,border:`1px solid var(--border-color)`,background:`var(--background-color)`,color:`var(--text-color)`,fontFamily:`var(--font-family-sans)`},children:[(0,N.jsxs)(`strong`,{children:[`palette="`,n,`"`,` `,t===n&&(0,N.jsx)(_,{variant:`success`,children:`active`})]}),(0,N.jsx)(l,{size:`small`,variant:`primary`,children:`Primary`}),(0,N.jsxs)(`span`,{style:{color:`var(--text-muted-color)`,fontSize:13},children:[`data-theme="`,e,`"`]})]})},n))})}var N;function P(){return(P=e((()=>{p(),ee(),N=i()})))()}function ce(){let{theme:e,resolvedTheme:t,palette:n,locale:r}=o(),i=e=>typeof e==`string`?e:`custom theme object`;return(0,F.jsxs)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`,gap:`8px 16px`,margin:0},children:[(0,F.jsx)(`dt`,{children:`theme`}),(0,F.jsx)(`dd`,{style:{margin:0},children:(0,F.jsx)(_,{variant:`primary`,children:i(e)})}),(0,F.jsx)(`dt`,{children:`resolvedTheme`}),(0,F.jsx)(`dd`,{style:{margin:0},children:(0,F.jsx)(_,{variant:`info`,children:i(t)})}),(0,F.jsx)(`dt`,{children:`palette`}),(0,F.jsx)(`dd`,{style:{margin:0},children:(0,F.jsx)(_,{variant:`warning`,children:n??`null`})}),(0,F.jsx)(`dt`,{children:`locale.language`}),(0,F.jsx)(`dd`,{style:{margin:0},children:(0,F.jsx)(_,{variant:`success`,children:r?.language??`en`})})]})}var F;function I(){return(I=e((()=>{p(),F=i()})))()}var L;function R(){return(R=e((()=>{L=`import {
  Button,
  ConfigProvider,
  Select,
  SelectItem,
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

// A nested ConfigProvider applies its theme to its own subtree only (the
// site's root provider keeps <html>). Portalled content opened from inside,
// like the Select menu below, gets the same theme.
export default function CustomThemeDemo() {
  return (
    <ConfigProvider theme={sepia}>
      <div
        style={{
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
            <Select ariaLabel="Paper" defaultValue="cream">
              <SelectItem value="cream">Cream</SelectItem>
              <SelectItem value="ivory">Ivory</SelectItem>
              <SelectItem value="kraft">Kraft</SelectItem>
            </Select>
          </Space>
        </Space>
      </div>
    </ConfigProvider>
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { useState } from "react";
import {
  Button,
  ConfigProvider,
  Pagination,
  Tag,
  useConfig,
  useI18n,
  type SupportedLanguage,
} from "@minerva/lib-core";

// a key from lib-core's built-in translations
const AVATAR_KEY = "avatar.default";
const LANGUAGES: SupportedLanguage[] = ["en", "zh", "ja", "fr"];

function Preview() {
  const { locale, palette } = useConfig();
  const { t } = useI18n();
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 8,
        }}
      >
        locale: <Tag variant="primary">{locale?.language}</Tag> {AVATAR_KEY}:{" "}
        <Tag variant="info">{t(AVATAR_KEY)}</Tag> palette:{" "}
        <Tag variant="success">{palette ?? "default"}</Tag>
      </div>
      <Pagination total={50} defaultCurrent={2} showTotal />
    </div>
  );
}

export default function LocaleDemo() {
  const [language, setLanguage] = useState<SupportedLanguage>("en");

  // A nested provider that only sets \`locale\`: theme and palette are
  // inherited from the site's provider, <html> is left alone, and the
  // language only applies to this subtree.
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
      <ConfigProvider locale={{ language }}>
        <Preview />
      </ConfigProvider>
    </div>
  );
}
`})))()}var V;function H(){return(H=e((()=>{V=`import { Button, ConfigProvider, Tag, useConfig } from "@minerva/lib-core";
import { PALETTES } from "@minerva/lib-core/theme-utils";

// The site's root provider sets data-palette on <html>. Each card below is a
// nested <ConfigProvider palette={name}>: the palette (in the site's current
// light / dark mode) only applies inside the card.
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
        <ConfigProvider key={name} theme={resolvedMode} palette={name}>
          <div
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
        </ConfigProvider>
      ))}
    </div>
  );
}
`})))()}var U;function W(){return(W=e((()=>{U=`import { Tag, useConfig } from "@minerva/lib-core";

// useConfig() reads the nearest ConfigProvider. This site wraps every page in
// one, so the values below change when you pick another theme, palette or
// language in the header.
export default function UseConfigDemo() {
  const { theme, resolvedTheme, palette, locale } = useConfig();

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
      <dt>palette</dt>
      <dd style={{ margin: 0 }}>
        <Tag variant="warning">{palette ?? "null"}</Tag>
      </dd>
      <dt>locale.language</dt>
      <dd style={{ margin: 0 }}>
        <Tag variant="success">{locale?.language ?? "en"}</Tag>
      </dd>
    </dl>
  );
}
`})))()}var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{T(),M(),P(),I(),R(),B(),H(),W(),n(),f(),t(),x(),re(),ie(),y(),G=i(),K=ae(Object.assign({"./demos/custom-theme.tsx":S,"./demos/locale.tsx":D,"./demos/palette.tsx":se,"./demos/use-config.tsx":ce}),Object.assign({"./demos/custom-theme.tsx":L,"./demos/locale.tsx":z,"./demos/palette.tsx":V,"./demos/use-config.tsx":U})),q=`import { ConfigProvider } from "@minerva/lib-core";
import "@minerva/lib-core/style.css";

export default function Root() {
  return (
    <ConfigProvider theme="auto" locale={{ language: "en" }}>
      <App />
    </ConfigProvider>
  );
}`,J=`import { useState } from "react";
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
}`,Y=`import { ConfigProvider, useConfig } from "@minerva/lib-core";

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
}`,X=`import { ConfigProvider } from "@minerva/lib-core";

export default function Root() {
  return (
    // root provider: owns <html>, the cookies and lib-core's global language
    <ConfigProvider theme="system" palette="editorial" persist>
      <App />

      {/* inherits theme + palette, only this subtree is in Japanese */}
      <ConfigProvider locale={{ language: "ja" }}>
        <Sidebar />
      </ConfigProvider>

      {/* dark + inherited palette for this card and its overlays only */}
      <ConfigProvider theme="dark">
        <PreviewCard />
      </ConfigProvider>
    </ConfigProvider>
  );
}`,Z=`import { useContext } from "react";
import { ConfigContext } from "@minerva/lib-core";

// Unlike useConfig(), reading the context directly does not throw outside a
// provider: it returns undefined, which is handy for optional integrations.
function useOptionalConfig() {
  return useContext(ConfigContext);
}`,Q=()=>{let{t:e}=d(),t=(0,G.jsxs)(`section`,{className:v.section,"aria-labelledby":`usage`,children:[(0,G.jsx)(`h2`,{id:`usage`,children:e(`docs.config-provider.usage.title`)}),(0,G.jsx)(`p`,{className:v.prose,children:e(`docs.config-provider.usage.text`)}),(0,G.jsx)(b,{code:q,language:`tsx`}),(0,G.jsx)(`p`,{className:v.prose,children:e(`docs.config-provider.usage.dynamic`)}),(0,G.jsx)(b,{code:J,language:`tsx`}),(0,G.jsx)(`p`,{className:v.callout,children:e(`docs.config-provider.usage.global`)}),(0,G.jsx)(`h3`,{children:e(`docs.config-provider.palette.title`)}),(0,G.jsx)(`p`,{className:v.prose,children:e(`docs.config-provider.palette.text`)}),(0,G.jsx)(b,{code:Y,language:`tsx`}),(0,G.jsxs)(`p`,{className:v.prose,children:[e(`docs.config-provider.palette.setters`),` `,(0,G.jsx)(r,{to:`/theme-palette`,children:e(`docs.theme-palette.title`)})]})]});return(0,G.jsxs)(oe,{id:`config-provider`,demos:K,intro:t,children:[(0,G.jsxs)(`section`,{className:v.section,"aria-labelledby":`nesting`,children:[(0,G.jsx)(`h2`,{id:`nesting`,children:e(`docs.config-provider.nesting.title`)}),(0,G.jsx)(`p`,{className:v.prose,children:e(`docs.config-provider.nesting.text`)}),(0,G.jsxs)(`ul`,{className:v.prose,children:[(0,G.jsx)(`li`,{children:e(`docs.config-provider.nesting.inherit`)}),(0,G.jsx)(`li`,{children:e(`docs.config-provider.nesting.scoped`)}),(0,G.jsx)(`li`,{children:e(`docs.config-provider.nesting.locale`)}),(0,G.jsx)(`li`,{children:e(`docs.config-provider.nesting.portal`)}),(0,G.jsx)(`li`,{children:e(`docs.config-provider.nesting.document`)})]}),(0,G.jsx)(b,{code:X,language:`tsx`})]}),(0,G.jsxs)(`section`,{className:v.section,"aria-labelledby":`config-context`,children:[(0,G.jsx)(`h2`,{id:`config-context`,children:e(`docs.config-provider.context.title`)}),(0,G.jsx)(`p`,{className:v.prose,children:e(`docs.config-provider.context.text`)}),(0,G.jsx)(b,{code:Z,language:`tsx`})]})]})}})))()}$();export{Q as default};