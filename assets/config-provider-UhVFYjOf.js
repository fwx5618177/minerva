import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,n,s as r,t as i}from"./react-vendor-aZSMfLKR.js";import{Tn as ee,cn as a,mn as te}from"./minerva-web-components-e9i9Tzii.js";import{nt as ne,rt as re}from"./io5-Db3ldn2O.js";import{n as o,t as ie}from"./useI18n-Brv-VDVY.js";import{n as s,t as c}from"./Button-DP6INRXF.js";import{n as l,t as u}from"./Tag-ahws5dRH.js";import{n as d,t as f}from"./Switch-CnmBQGfX.js";import{n as p,t as ae}from"./Pagination-DiiB6JXt.js";import{n as m,r as h,t as g}from"./ConfigProvider-Cjobfnxn.js";import{n as _,r as oe,t as se}from"./Stack-BKDv4gra.js";import{i as v,n as ce,r as le}from"./Select-Cq-3IVZP.js";import{c as y,i as b,l as x,n as ue,r as S,s as de,t as fe,u as pe}from"./DocPage-BeqNKFhE.js";function me(){return(0,C.jsx)(g,{theme:w,children:(0,C.jsx)(`div`,{style:{padding:16,borderRadius:8,border:`1px solid var(--border-color)`,background:`var(--surface-color)`,color:`var(--text-color)`},children:(0,C.jsxs)(oe,{gap:4,align:`start`,children:[(0,C.jsx)(`strong`,{children:`Sepia theme`}),(0,C.jsx)(`span`,{children:`Only this container uses the custom theme.`}),(0,C.jsxs)(se,{gap:4,wrap:!0,children:[(0,C.jsx)(c,{color:`primary`,children:`Primary`}),(0,C.jsx)(c,{color:`primary`,disabled:!0,children:`Disabled`}),(0,C.jsx)(f,{label:`Reading mode`,defaultChecked:!0}),(0,C.jsxs)(ce,{"aria-label":`Paper`,defaultValue:`cream`,children:[(0,C.jsx)(v,{value:`cream`,children:`Cream`}),(0,C.jsx)(v,{value:`ivory`,children:`Ivory`}),(0,C.jsx)(v,{value:`kraft`,children:`Kraft`})]})]})]})})})}var C,w;function T(){return(T=e((()=>{s(),h(),_(),le(),d(),a(),C=i(),w={...ee.light,"primary-color":`#9a3412`,"primary-color-hover":`#7c2d12`,"primary-color-active":`#6c2710`,"background-color":`#fbf5e9`,"foreground-color":`#3b2f2a`,"border-color":`#e0d2b8`,"text-gray":`#6b5b4e`,"focus-ring-color":`rgba(154, 52, 18, 0.45)`}})))()}function he(){let{locale:e,palette:t}=m(),{t:n}=ie();return(0,D.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,D.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[`locale: `,(0,D.jsx)(l,{color:`primary`,children:e?.language}),` `,O,`:`,` `,(0,D.jsx)(l,{color:`info`,children:n(O)}),` palette:`,` `,(0,D.jsx)(l,{color:`success`,children:t??`default`})]}),(0,D.jsx)(ae,{total:50,defaultCurrent:2,showTotal:!0})]})}function ge(){let[e,t]=(0,E.useState)(`en`);return(0,D.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,D.jsx)(`div`,{role:`group`,"aria-label":`Language`,style:{display:`flex`,gap:8},children:k.map(n=>(0,D.jsx)(c,{size:`small`,color:n===e?`primary`:`neutral`,variant:n===e?`solid`:`outline`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))}),(0,D.jsx)(g,{locale:{language:e},children:(0,D.jsx)(he,{})})]})}var E,D,O,k;function A(){return(A=e((()=>{E=t(),s(),h(),p(),u(),o(),D=i(),O=`avatar.default`,k=[`en`,`zh`,`ja`,`fr`]})))()}function j(){let{resolvedMode:e=`light`,palette:t}=m();return(0,M.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:12},children:te.map(n=>(0,M.jsx)(g,{theme:e,palette:n,children:(0,M.jsxs)(`div`,{style:{display:`grid`,gap:10,padding:14,borderRadius:10,border:`1px solid var(--border-color)`,background:`var(--background-color)`,color:`var(--text-color)`,fontFamily:`var(--font-family-sans)`},children:[(0,M.jsxs)(`strong`,{children:[`palette="`,n,`"`,` `,t===n&&(0,M.jsx)(l,{color:`success`,children:`active`})]}),(0,M.jsx)(c,{size:`small`,color:`primary`,children:`Primary`}),(0,M.jsxs)(`span`,{style:{color:`var(--text-muted-color)`,fontSize:13},children:[`data-theme="`,e,`"`]})]})},n))})}var M;function N(){return(N=e((()=>{s(),h(),u(),a(),M=i()})))()}function P(){let{theme:e,resolvedTheme:t,palette:n,locale:r}=m(),i=e=>typeof e==`string`?e:`custom theme object`;return(0,F.jsxs)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`,gap:`8px 16px`,margin:0},children:[(0,F.jsx)(`dt`,{children:`theme`}),(0,F.jsx)(`dd`,{style:{margin:0},children:(0,F.jsx)(l,{color:`primary`,children:i(e)})}),(0,F.jsx)(`dt`,{children:`resolvedTheme`}),(0,F.jsx)(`dd`,{style:{margin:0},children:(0,F.jsx)(l,{color:`info`,children:i(t)})}),(0,F.jsx)(`dt`,{children:`palette`}),(0,F.jsx)(`dd`,{style:{margin:0},children:(0,F.jsx)(l,{color:`warning`,children:n??`null`})}),(0,F.jsx)(`dt`,{children:`locale.language`}),(0,F.jsx)(`dd`,{style:{margin:0},children:(0,F.jsx)(l,{color:`success`,children:r?.language??`en`})})]})}var F;function I(){return(I=e((()=>{u(),h(),F=i()})))()}var L;function R(){return(R=e((()=>{L=`import {
  Button,
  ConfigProvider,
  HStack,
  Select,
  SelectItem,
  Switch,
  themes,
  type ComponentTheme,
  VStack,
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
        <VStack gap={4} align="start">
          <strong>Sepia theme</strong>
          <span>Only this container uses the custom theme.</span>
          <HStack gap={4} wrap>
            <Button color="primary">Primary</Button>
            <Button color="primary" disabled>
              Disabled
            </Button>
            <Switch label="Reading mode" defaultChecked />
            <Select aria-label="Paper" defaultValue="cream">
              <SelectItem value="cream">Cream</SelectItem>
              <SelectItem value="ivory">Ivory</SelectItem>
              <SelectItem value="kraft">Kraft</SelectItem>
            </Select>
          </HStack>
        </VStack>
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
        locale: <Tag color="primary">{locale?.language}</Tag> {AVATAR_KEY}:{" "}
        <Tag color="info">{t(AVATAR_KEY)}</Tag> palette:{" "}
        <Tag color="success">{palette ?? "default"}</Tag>
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
            color={lng === language ? "primary" : "neutral"}
            variant={lng === language ? "solid" : "outline"}
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
              {palette === name && <Tag color="success">active</Tag>}
            </strong>
            <Button size="small" color="primary">
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
        <Tag color="primary">{describe(theme)}</Tag>
      </dd>
      <dt>resolvedTheme</dt>
      <dd style={{ margin: 0 }}>
        <Tag color="info">{describe(resolvedTheme)}</Tag>
      </dd>
      <dt>palette</dt>
      <dd style={{ margin: 0 }}>
        <Tag color="warning">{palette ?? "null"}</Tag>
      </dd>
      <dt>locale.language</dt>
      <dd style={{ margin: 0 }}>
        <Tag color="success">{locale?.language ?? "en"}</Tag>
      </dd>
    </dl>
  );
}
`})))()}var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{T(),A(),N(),I(),R(),B(),H(),W(),t(),ne(),r(),pe(),ue(),b(),y(),G=i(),K=de(Object.assign({"./demos/custom-theme.tsx":me,"./demos/locale.tsx":ge,"./demos/palette.tsx":j,"./demos/use-config.tsx":P}),Object.assign({"./demos/custom-theme.tsx":L,"./demos/locale.tsx":z,"./demos/palette.tsx":V,"./demos/use-config.tsx":U})),q=`import { ConfigProvider } from "@minerva/lib-core";
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
}`,Q=()=>{let{t:e}=re(),t=(0,G.jsxs)(`section`,{className:S.section,"aria-labelledby":`usage`,children:[(0,G.jsx)(`h2`,{id:`usage`,children:e(`docs.config-provider.usage.title`)}),(0,G.jsx)(`p`,{className:S.prose,children:e(`docs.config-provider.usage.text`)}),(0,G.jsx)(x,{code:q,language:`tsx`}),(0,G.jsx)(`p`,{className:S.prose,children:e(`docs.config-provider.usage.dynamic`)}),(0,G.jsx)(x,{code:J,language:`tsx`}),(0,G.jsx)(`p`,{className:S.callout,children:e(`docs.config-provider.usage.global`)}),(0,G.jsx)(`h3`,{children:e(`docs.config-provider.palette.title`)}),(0,G.jsx)(`p`,{className:S.prose,children:e(`docs.config-provider.palette.text`)}),(0,G.jsx)(x,{code:Y,language:`tsx`}),(0,G.jsxs)(`p`,{className:S.prose,children:[e(`docs.config-provider.palette.setters`),` `,(0,G.jsx)(n,{to:`/theme-palette`,children:e(`docs.theme-palette.title`)})]})]});return(0,G.jsxs)(fe,{id:`config-provider`,demos:K,intro:t,children:[(0,G.jsxs)(`section`,{className:S.section,"aria-labelledby":`nesting`,children:[(0,G.jsx)(`h2`,{id:`nesting`,children:e(`docs.config-provider.nesting.title`)}),(0,G.jsx)(`p`,{className:S.prose,children:e(`docs.config-provider.nesting.text`)}),(0,G.jsxs)(`ul`,{className:S.prose,children:[(0,G.jsx)(`li`,{children:e(`docs.config-provider.nesting.inherit`)}),(0,G.jsx)(`li`,{children:e(`docs.config-provider.nesting.scoped`)}),(0,G.jsx)(`li`,{children:e(`docs.config-provider.nesting.locale`)}),(0,G.jsx)(`li`,{children:e(`docs.config-provider.nesting.portal`)}),(0,G.jsx)(`li`,{children:e(`docs.config-provider.nesting.document`)})]}),(0,G.jsx)(x,{code:X,language:`tsx`})]}),(0,G.jsxs)(`section`,{className:S.section,"aria-labelledby":`config-context`,children:[(0,G.jsx)(`h2`,{id:`config-context`,children:e(`docs.config-provider.context.title`)}),(0,G.jsx)(`p`,{className:S.prose,children:e(`docs.config-provider.context.text`)}),(0,G.jsx)(x,{code:Z,language:`tsx`})]})]})}})))()}$();export{Q as default};