import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{Ot as r,Ut as i,it as a}from"./minerva-web-components-U-_2I7Ao.js";import{O as o,c as s,i as c,k as l,l as u,n as d,r as f,s as ee,t as te,u as ne}from"./DocPage-BvqFnACE.js";import{n as p,t as m}from"./useI18n-s5sAv-jy.js";import{n as re,t as h}from"./Button-CVTxJPft.js";import{n as g,t as _}from"./Tag-BTXWZMQr.js";import{n as ie,t as ae}from"./Switch-9XJZ76J2.js";import{n as oe,t as v}from"./Stack-DOZ17svE.js";import{H as se,I as ce,L as le,Q as ue,R as y,U as de,Z as fe,z as pe}from"./sample-DdQB_zfN.js";function me({defaultTheme:e,defaultPalette:t,disableStorage:n=!1,locale:r,onThemeChange:i,onPaletteChange:a,children:o}){let s=(0,x.useContext)(de)===null;return(0,S.jsx)(ce,{theme:e??(s?`system`:void 0),palette:t,persist:!n,locale:r,onThemeChange:i?e=>{e===`light`||e===`dark`?i(e):(e===`auto`||e===`system`)&&i(`system`)}:void 0,onPaletteChange:a,children:o})}function b(){let e=(0,x.useContext)(pe);if(!e)throw Error(`useTheme must be used within a ThemeProvider (or ConfigProvider)`);let{mode:t,resolvedMode:n,palette:r=null,setTheme:i,setPalette:a}=e,o=(0,x.useCallback)(e=>i?.(e),[i]),s=(0,x.useCallback)(e=>a?.(e),[a]);return(0,x.useMemo)(()=>({theme:t??`system`,resolvedTheme:n??`light`,palette:r,setTheme:o,setPalette:s}),[t,n,r,o,s])}var x,S;function C(){return(C=e((()=>{se(),y(),x=t(),S=n()})))()}var w,T,E;function D(){return(D=e((()=>{w=`_group_yzrbv_1`,T=`_item_yzrbv_11`,E={group:w,item:T}})))()}var O,k;function A(){return(A=e((()=>{o(),p(),C(),D(),O=n(),k=({showSystem:e=!0,labels:t,className:n,ref:r,...i})=>{let{theme:a,resolvedTheme:o,setTheme:s}=b(),{t:c}=m(),u=e?[`light`,`dark`,`system`]:[`light`,`dark`];return(0,O.jsx)(`div`,{ref:r,className:l(E.group,n),role:`group`,"aria-label":c(`themeToggle.label`,{theme:o}),...i,children:u.map(e=>(0,O.jsx)(`button`,{type:`button`,className:E.item,"data-active":a===e||void 0,"aria-pressed":a===e,onClick:()=>s(e),children:t?.[e]??c(`themeToggle.${e}`)},e))})}})))()}var j,M;function N(){return(N=e((()=>{o(),p(),C(),D(),r(),j=n(),M=({palettes:e=[...i],showDefault:t=!1,labels:n,className:r,ref:a,...o})=>{let{palette:s,setPalette:c}=b(),{t:u}=m(),d=t?[null,...e]:e;return(0,j.jsx)(`div`,{ref:a,className:l(E.group,r),role:`group`,"aria-label":u(`paletteToggle.label`,{palette:s??u(`paletteToggle.default`)}),...o,children:d.map(e=>{let t=e??`default`,r=s===e;return(0,j.jsx)(`button`,{type:`button`,className:E.item,"data-active":r||void 0,"aria-pressed":r,onClick:()=>c(e),children:n?.[t]??u(`paletteToggle.${t}`)},t)})})}})))()}function he(){return(0,P.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(220px, 1fr))`,gap:12},children:i.flatMap(e=>F.map(t=>{let n=a[e][t];return(0,P.jsxs)(`figure`,{style:{margin:0,padding:14,borderRadius:10,border:`1px solid ${n[`border-color`]}`,background:n[`background-color`],color:n[`text-color`],fontFamily:n[`font-family-sans`]},children:[(0,P.jsxs)(`figcaption`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:10,fontWeight:600},children:[(0,P.jsx)(`span`,{children:e}),(0,P.jsx)(`span`,{style:{color:n[`text-muted-color`]},children:t})]}),(0,P.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`},children:ge.map(e=>(0,P.jsx)(`span`,{title:`--${e}: ${n[e]}`,style:{width:22,height:22,borderRadius:6,background:n[e],border:`1px solid ${n[`border-strong-color`]}`}},e))}),(0,P.jsxs)(`div`,{style:{marginTop:10,padding:`6px 8px`,borderRadius:6,background:n[`surface-subtle-color`],color:n[`text-secondary-color`],fontSize:12},children:[n[`primary-color`],` / `,n[`accent-color`]]})]},`${e}-${t}`)}))})}var P,F,ge;function I(){return(I=e((()=>{r(),P=n(),F=[`light`,`dark`],ge=[`primary-color`,`accent-color`,`success-color`,`warning-color`,`danger-color`,`info-color`,`border-color`]})))()}function _e(){let{resolvedTheme:e,palette:t}=b();return(0,L.jsxs)(`div`,{style:{display:`grid`,gap:16,padding:20,borderRadius:12,border:`1px solid var(--border-color)`,background:`var(--background-color)`,color:`var(--text-color)`,fontFamily:`var(--font-family-sans)`},children:[(0,L.jsxs)(v,{gap:4,wrap:!0,children:[(0,L.jsx)(k,{}),(0,L.jsx)(M,{})]}),(0,L.jsxs)(v,{gap:4,wrap:!0,children:[(0,L.jsx)(h,{color:`primary`,children:`Primary`}),(0,L.jsx)(h,{color:`neutral`,variant:`outline`,children:`Secondary`}),(0,L.jsx)(g,{color:`primary`,children:t??`default`}),(0,L.jsx)(g,{color:`info`,children:e}),(0,L.jsx)(ae,{label:`Switch`,defaultChecked:!0})]}),(0,L.jsxs)(`p`,{style:{margin:0,color:`var(--text-muted-color)`},children:[`data-theme="`,e,`" data-palette="`,t??``,`"`]})]})}function ve(){return(0,L.jsx)(me,{defaultTheme:`system`,defaultPalette:`editorial`,children:(0,L.jsx)(_e,{})})}var L;function R(){return(R=e((()=>{re(),oe(),N(),ie(),_(),C(),A(),L=n()})))()}function ye(){let{theme:e,resolvedTheme:t,palette:n}=b(),r=le(),i=[[`useTheme().theme`,e],[`useTheme().resolvedTheme`,t],[`useTheme().palette`,n??`null`],[`useConfig().mode`,r.mode??`undefined`],[`useConfig().resolvedMode`,r.resolvedMode??`undefined`],[`useConfig().palette`,r.palette??`null`]];return(0,z.jsx)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`,gap:`8px 16px`,margin:0},children:i.map(([e,t])=>(0,z.jsxs)(`div`,{style:{display:`contents`},children:[(0,z.jsx)(`dt`,{children:(0,z.jsx)(`code`,{children:e})}),(0,z.jsx)(`dd`,{style:{margin:0},children:(0,z.jsx)(g,{color:`primary`,children:t})})]},e))})}var z;function B(){return(B=e((()=>{_(),y(),C(),z=n()})))()}var V;function H(){return(H=e((()=>{V=`import { palettes } from "@minerva/lib-core";
import { PALETTES } from "@minerva/lib-core/theme-utils";

const MODES = ["light", "dark"] as const;

// Tokens shown for each palette x mode (values read from \`palettes\`)
const TOKENS = [
  "primary-color",
  "accent-color",
  "success-color",
  "warning-color",
  "danger-color",
  "info-color",
  "border-color",
] as const;

export default function PaletteSwatchesDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 12,
      }}
    >
      {PALETTES.flatMap((name) =>
        MODES.map((mode) => {
          const tokens = palettes[name][mode];
          return (
            <figure
              key={\`\${name}-\${mode}\`}
              style={{
                margin: 0,
                padding: 14,
                borderRadius: 10,
                border: \`1px solid \${tokens["border-color"]}\`,
                background: tokens["background-color"],
                color: tokens["text-color"],
                fontFamily: tokens["font-family-sans"],
              }}
            >
              <figcaption
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 10,
                  fontWeight: 600,
                }}
              >
                <span>{name}</span>
                <span style={{ color: tokens["text-muted-color"] }}>
                  {mode}
                </span>
              </figcaption>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {TOKENS.map((token) => (
                  <span
                    key={token}
                    title={\`--\${token}: \${tokens[token]}\`}
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: tokens[token],
                      border: \`1px solid \${tokens["border-strong-color"]}\`,
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  marginTop: 10,
                  padding: "6px 8px",
                  borderRadius: 6,
                  background: tokens["surface-subtle-color"],
                  color: tokens["text-secondary-color"],
                  fontSize: 12,
                }}
              >
                {tokens["primary-color"]} / {tokens["accent-color"]}
              </div>
            </figure>
          );
        }),
      )}
    </div>
  );
}
`})))()}var U;function W(){return(W=e((()=>{U=`import {
  Button,
  HStack,
  PaletteToggle,
  Switch,
  Tag,
  ThemeProvider,
  ThemeToggle,
  useTheme,
} from "@minerva/lib-core";

// In an application, one provider at the root is all you need:
//
//   <ThemeProvider defaultPalette="editorial">
//     <ThemeToggle />
//     <PaletteToggle />
//   </ThemeProvider>
//
// Here a nested ThemeProvider is used: it scopes its mode and palette to its
// own subtree (no <html> attributes, no cookies), so the toggles re-theme
// this preview without touching the rest of the docs site.
function Preview() {
  const { resolvedTheme, palette } = useTheme();
  return (
    <div
      style={{
        display: "grid",
        gap: 16,
        padding: 20,
        borderRadius: 12,
        border: "1px solid var(--border-color)",
        background: "var(--background-color)",
        color: "var(--text-color)",
        fontFamily: "var(--font-family-sans)",
      }}
    >
      <HStack gap={4} wrap>
        <ThemeToggle />
        <PaletteToggle />
      </HStack>
      <HStack gap={4} wrap>
        <Button color="primary">Primary</Button>
        <Button color="neutral" variant="outline">
          Secondary
        </Button>
        <Tag color="primary">{palette ?? "default"}</Tag>
        <Tag color="info">{resolvedTheme}</Tag>
        <Switch label="Switch" defaultChecked />
      </HStack>
      <p style={{ margin: 0, color: "var(--text-muted-color)" }}>
        data-theme=&quot;{resolvedTheme}&quot; data-palette=&quot;
        {palette ?? ""}&quot;
      </p>
    </div>
  );
}

export default function TogglesDemo() {
  return (
    <ThemeProvider defaultTheme="system" defaultPalette="editorial">
      <Preview />
    </ThemeProvider>
  );
}
`})))()}var G;function K(){return(K=e((()=>{G=`import { Tag, useConfig, useTheme } from "@minerva/lib-core";

// useTheme() reads the closest ThemeProvider / ConfigProvider. This site wraps
// every page in one: change the theme or palette in the header and the values
// below follow. (github-dark is not a light / dark / system mode, so useTheme
// falls back to "system" while useConfig().mode is undefined.)
export default function UseThemeDemo() {
  const { theme, resolvedTheme, palette } = useTheme();
  const config = useConfig();

  const rows: [string, string][] = [
    ["useTheme().theme", theme],
    ["useTheme().resolvedTheme", resolvedTheme],
    ["useTheme().palette", palette ?? "null"],
    ["useConfig().mode", config.mode ?? "undefined"],
    ["useConfig().resolvedMode", config.resolvedMode ?? "undefined"],
    ["useConfig().palette", config.palette ?? "null"],
  ];

  return (
    <dl
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "8px 16px",
        margin: 0,
      }}
    >
      {rows.map(([label, value]) => (
        <div key={label} style={{ display: "contents" }}>
          <dt>
            <code>{label}</code>
          </dt>
          <dd style={{ margin: 0 }}>
            <Tag color="primary">{value}</Tag>
          </dd>
        </div>
      ))}
    </dl>
  );
}
`})))()}var q,J,Y,X,Z,Q,be,$,xe,Se,Ce,we,Te,Ee,De;function Oe(){return(Oe=e((()=>{I(),R(),B(),H(),W(),K(),t(),fe(),ne(),d(),c(),s(),q=n(),J=ee(Object.assign({"./demos/palette-swatches.tsx":he,"./demos/toggles.tsx":ve,"./demos/use-theme.tsx":ye}),Object.assign({"./demos/palette-swatches.tsx":V,"./demos/toggles.tsx":U,"./demos/use-theme.tsx":G})),Y=`import { ThemeProvider, ThemeToggle, PaletteToggle } from "@minerva/lib-core";
import "@minerva/lib-core/style.css";

export default function Root() {
  return (
    // mode: "light" | "dark" | "system" (default)
    // palette: "editorial" | "tech" | "graphite" | "cool" | null (default look)
    <ThemeProvider defaultTheme="system" defaultPalette="editorial">
      <header>
        <ThemeToggle />
        <PaletteToggle showDefault />
      </header>
      <App />
    </ThemeProvider>
  );
}`,X=`import { ConfigProvider } from "@minerva/lib-core";

// The same thing with ConfigProvider (ThemeProvider is a preset over it):
// "system" is an alias of "auto"; persist turns on the cookies.
<ConfigProvider
  theme="system"
  palette="editorial"
  persist
  onThemeChange={(theme) => console.log("theme", theme)}
  onPaletteChange={(palette) => console.log("palette", palette)}
>
  <App />
</ConfigProvider>;`,Z=`import { useTheme } from "@minerva/lib-core";

function Settings() {
  const { theme, resolvedTheme, palette, setTheme, setPalette } = useTheme();
  return (
    <>
      <p>{theme} → {resolvedTheme} · {palette ?? "default"}</p>
      <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
        Toggle mode
      </button>
      <button onClick={() => setPalette("tech")}>Tech palette</button>
    </>
  );
}`,Q=`<!-- palette + light / dark / system: tokens come from style.css -->
<html data-theme="dark" data-palette="tech" style="color-scheme: dark">

<!-- no palette, or github-dark / a custom theme object: inline variables -->
<html data-theme="light" style="color-scheme: light; --primary-color: #2563eb; ...">`,be=`import {
  THEME_COOKIE_NAME,     // "theme"   -> "light" | "dark" | "system"
  PALETTE_COOKIE_NAME,   // "palette" -> "editorial" | "tech" | "graphite" | "cool"
  readCookieValue,
  parseThemeCookie,
  parsePaletteCookie,
  serializeThemeCookie,
} from "@minerva/lib-core/theme-utils";

// Read on the server (or from document.cookie)
const theme = parseThemeCookie(readCookieValue(cookieHeader, THEME_COOKIE_NAME));
const palette = parsePaletteCookie(readCookieValue(cookieHeader, PALETTE_COOKIE_NAME));

// Write from a route handler / server action (path=/, one year, SameSite=Lax)
response.headers.append("Set-Cookie", serializeThemeCookie(THEME_COOKIE_NAME, "dark"));`,$=`// app/layout.tsx: a Server Component (no "use client")
import { headers } from "next/headers";
import { ThemeProvider } from "@minerva/lib-core";
import {
  THEME_INIT_SCRIPT,
  parseThemeCookies,
} from "@minerva/lib-core/theme-utils";
import "@minerva/lib-core/style.css";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme, palette } = parseThemeCookies((await headers()).get("cookie"), {
    palette: "editorial",
  });

  return (
    // the init script changes <html> attributes before React hydrates
    <html
      lang="en"
      suppressHydrationWarning
      data-theme={theme === "system" ? undefined : theme}
      data-palette={palette ?? undefined}
    >
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme={theme} defaultPalette={palette}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`,xe=`// server.tsx: any SSR setup (Express, Hono, a Vite SSR server...)
import { renderToString } from "react-dom/server";
import { ThemeProvider } from "@minerva/lib-core";
import { THEME_INIT_SCRIPT, parseThemeCookies } from "@minerva/lib-core/theme-utils";

app.get("*", (req, res) => {
  const { theme, palette } = parseThemeCookies(req.headers.cookie);
  const body = renderToString(
    <ThemeProvider defaultTheme={theme} defaultPalette={palette}>
      <App url={req.url} />
    </ThemeProvider>,
  );
  res.send(\`<!doctype html>
<html\${palette ? \` data-palette="\${palette}"\` : ""}>
  <head>
    <script>\${THEME_INIT_SCRIPT}<\/script>
    <link rel="stylesheet" href="/assets/style.css" />
  </head>
  <body><div id="root">\${body}</div></body>
</html>\`);
});`,Se=`import { createThemeInitScript } from "@minerva/lib-core/theme-utils";

// Dark by default, "graphite" when the visitor has no palette cookie yet
export const themeInitScript = createThemeInitScript({
  defaultTheme: "dark",
  defaultPalette: "graphite",
});`,Ce=`// A nested provider scopes a palette / mode to its subtree (and to the
// overlays opened from it). <html> and the cookies are left to the root one.
<ThemeProvider defaultTheme="dark" defaultPalette="tech">
  <Button color="primary">Always tech / dark</Button>
</ThemeProvider>

// Without a provider: palette token blocks match any element, not only
// <html>. Set both attributes and give the wrapper a background.
<div data-palette="tech" data-theme="dark" style={{ background: "var(--background-color)" }}>
  <Button color="primary">Always tech / dark</Button>
</div>`,we=[`surface-subtle-color`,`canvas-color`,`control-color`,`hover-color`,`selected-color`,`text-muted-color`,`accent-color`],Te=[{key:`spacing`,tokens:`--space-0 … --space-24 (--space-0-5, --space-1-5, --space-2-5)`},{key:`radius`,tokens:`--radius-none, --radius-xl, --radius-2xl, --radius-full`},{key:`fontSize`,tokens:`--font-size-xs, -sm, -md, -lg, -xl, -2xl … -6xl`},{key:`fontWeight`,tokens:`--font-weight-regular | medium | semibold | bold, --line-height-tight | base | relaxed`},{key:`fontFamily`,tokens:`--font-family-sans, --font-family-display, --font-family-mono`},{key:`zIndex`,tokens:`--z-base, --z-raised, --z-dropdown, --z-sticky, --z-overlay, --z-modal, --z-popover, --z-toast`},{key:`motion`,tokens:`--transition-fast | base | slow, --ease-out, --ease-spring, --ease-in`},{key:`rhythm`,tokens:`--rhythm-section | block | tight, --elevation-flat | subtle | raised | floating`},{key:`focus`,tokens:`--focus-ring-width, --focus-ring-offset`}],Ee=({token:e})=>(0,q.jsx)(`span`,{"aria-hidden":`true`,style:{display:`inline-block`,width:20,height:20,marginRight:8,verticalAlign:`middle`,border:`1px solid var(--border-color)`,borderRadius:4,background:`var(--${e})`}}),De=()=>{let{t:e}=ue(),t=t=>e(`docs.theme-palette.${t}`),n=[{value:`"light" | "dark"`,text:t(`axes.modeFixed`)},{value:`"system"`,text:t(`axes.modeSystem`)},{value:`"editorial"`,text:t(`axes.editorial`)},{value:`"tech"`,text:t(`axes.tech`)},{value:`"graphite"`,text:t(`axes.graphite`)},{value:`"cool"`,text:t(`axes.cool`)},{value:`null`,text:t(`axes.none`)}],r=[{name:`THEME_INIT_SCRIPT`,text:t(`helpers.initScript`)},{name:`createThemeInitScript(options?)`,text:t(`helpers.create`)},{name:`parseThemeCookies(cookieHeader, defaults?)`,text:t(`helpers.parseAll`)},{name:`parseThemeCookie(value, fallback?)`,text:t(`helpers.parseTheme`)},{name:`parsePaletteCookie(value, fallback?)`,text:t(`helpers.parsePalette`)},{name:`readCookieValue(cookieHeader, name)`,text:t(`helpers.read`)},{name:`serializeThemeCookie(name, value)`,text:t(`helpers.serialize`)},{name:`isThemeMode(value) / isPalette(value)`,text:t(`helpers.guards`)},{name:`PALETTES`,text:t(`helpers.palettes`)},{name:`THEME_COOKIE_NAME / PALETTE_COOKIE_NAME / THEME_COOKIE_MAX_AGE`,text:t(`helpers.cookieNames`)}],i=[{name:`defaultTheme`,value:`"system"`,text:t(`init.defaultTheme`)},{name:`defaultPalette`,value:`null`,text:t(`init.defaultPalette`)}],a=(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`section`,{className:f.section,"aria-labelledby":`axes`,children:[(0,q.jsx)(`h2`,{id:`axes`,children:t(`axes.title`)}),(0,q.jsx)(`p`,{className:f.prose,children:t(`axes.text`)}),(0,q.jsx)(`div`,{className:f.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`axes.title`),children:(0,q.jsxs)(`table`,{className:f.propsTable,children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`col`,children:t(`axes.value`)}),(0,q.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,q.jsx)(`tbody`,{children:n.map(e=>(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`row`,children:(0,q.jsx)(`code`,{className:f.propName,children:e.value})}),(0,q.jsx)(`td`,{children:e.text})]},e.value))})]})})]}),(0,q.jsxs)(`section`,{className:f.section,"aria-labelledby":`provider`,children:[(0,q.jsx)(`h2`,{id:`provider`,children:t(`provider.title`)}),(0,q.jsx)(`p`,{className:f.prose,children:t(`provider.text`)}),(0,q.jsx)(u,{code:Y,language:`tsx`}),(0,q.jsx)(`p`,{className:f.prose,children:t(`provider.config`)}),(0,q.jsx)(u,{code:X,language:`tsx`}),(0,q.jsx)(`p`,{className:f.prose,children:t(`provider.hook`)}),(0,q.jsx)(u,{code:Z,language:`tsx`})]}),(0,q.jsxs)(`section`,{className:f.section,"aria-labelledby":`applied`,children:[(0,q.jsx)(`h2`,{id:`applied`,children:t(`applied.title`)}),(0,q.jsx)(`p`,{className:f.prose,children:t(`applied.text`)}),(0,q.jsx)(u,{code:Q,language:`html`}),(0,q.jsx)(`p`,{className:f.prose,children:t(`applied.precedence`)}),(0,q.jsxs)(`ol`,{className:f.prose,children:[(0,q.jsx)(`li`,{children:t(`applied.p1`)}),(0,q.jsx)(`li`,{children:t(`applied.p2`)}),(0,q.jsx)(`li`,{children:t(`applied.p3`)}),(0,q.jsx)(`li`,{children:t(`applied.p4`)})]}),(0,q.jsx)(`p`,{className:f.callout,children:t(`applied.global`)})]})]});return(0,q.jsxs)(te,{id:`theme-palette`,demos:J,intro:a,children:[(0,q.jsxs)(`section`,{className:f.section,"aria-labelledby":`persistence`,children:[(0,q.jsx)(`h2`,{id:`persistence`,children:t(`persistence.title`)}),(0,q.jsx)(`p`,{className:f.prose,children:t(`persistence.text`)}),(0,q.jsx)(u,{code:be,language:`tsx`})]}),(0,q.jsxs)(`section`,{className:f.section,"aria-labelledby":`ssr`,children:[(0,q.jsx)(`h2`,{id:`ssr`,children:t(`ssr.title`)}),(0,q.jsx)(`p`,{className:f.prose,children:t(`ssr.text`)}),(0,q.jsx)(`h3`,{children:t(`ssr.next`)}),(0,q.jsx)(u,{code:$,language:`tsx`,title:`app/layout.tsx`}),(0,q.jsx)(`h3`,{children:t(`ssr.generic`)}),(0,q.jsx)(u,{code:xe,language:`tsx`,title:`server.tsx`}),(0,q.jsx)(`p`,{className:f.callout,children:t(`ssr.hydration`)})]}),(0,q.jsxs)(`section`,{className:f.section,"aria-labelledby":`init-script`,children:[(0,q.jsx)(`h2`,{id:`init-script`,children:t(`init.title`)}),(0,q.jsx)(`p`,{className:f.prose,children:t(`init.text`)}),(0,q.jsx)(`div`,{className:f.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`init.title`),children:(0,q.jsxs)(`table`,{className:f.propsTable,children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`col`,children:t(`init.option`)}),(0,q.jsx)(`th`,{scope:`col`,children:t(`init.default`)}),(0,q.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,q.jsx)(`tbody`,{children:i.map(e=>(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`row`,children:(0,q.jsx)(`code`,{className:f.propName,children:e.name})}),(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{className:f.propType,children:e.value})}),(0,q.jsx)(`td`,{children:e.text})]},e.name))})]})}),(0,q.jsx)(u,{code:Se,language:`tsx`}),(0,q.jsx)(`p`,{className:f.prose,children:t(`init.order`)})]}),(0,q.jsxs)(`section`,{className:f.section,"aria-labelledby":`helpers`,children:[(0,q.jsx)(`h2`,{id:`helpers`,children:t(`helpers.title`)}),(0,q.jsx)(`p`,{className:f.prose,children:t(`helpers.text`)}),(0,q.jsx)(`div`,{className:f.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`helpers.title`),children:(0,q.jsxs)(`table`,{className:f.propsTable,children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`col`,children:t(`helpers.name`)}),(0,q.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,q.jsx)(`tbody`,{children:r.map(e=>(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`row`,children:(0,q.jsx)(`code`,{className:f.propName,children:e.name})}),(0,q.jsx)(`td`,{children:e.text})]},e.name))})]})})]}),(0,q.jsxs)(`section`,{className:f.section,"aria-labelledby":`scoped`,children:[(0,q.jsx)(`h2`,{id:`scoped`,children:t(`scoped.title`)}),(0,q.jsx)(`p`,{className:f.prose,children:t(`scoped.text`)}),(0,q.jsx)(u,{code:Ce,language:`tsx`})]}),(0,q.jsxs)(`section`,{className:f.section,"aria-labelledby":`tokens`,children:[(0,q.jsx)(`h2`,{id:`tokens`,children:t(`tokens.title`)}),(0,q.jsx)(`p`,{className:f.prose,children:t(`tokens.text`)}),(0,q.jsx)(`h3`,{children:t(`tokens.semantic`)}),(0,q.jsx)(`div`,{className:f.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`tokens.semantic`),children:(0,q.jsxs)(`table`,{className:f.propsTable,children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`col`,children:t(`tokens.variable`)}),(0,q.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,q.jsx)(`tbody`,{children:we.map(e=>(0,q.jsxs)(`tr`,{children:[(0,q.jsxs)(`th`,{scope:`row`,children:[(0,q.jsx)(Ee,{token:e}),(0,q.jsxs)(`code`,{className:f.propName,children:[`--`,e]})]}),(0,q.jsx)(`td`,{children:t(`tokens.items.${e}`)})]},e))})]})}),(0,q.jsx)(`p`,{className:f.prose,children:t(`tokens.accentRole`)}),(0,q.jsx)(`h3`,{style:{marginTop:`var(--spacing-8)`},children:t(`tokens.scales`)}),(0,q.jsx)(`p`,{className:f.prose,children:t(`tokens.scalesText`)}),(0,q.jsx)(`div`,{className:f.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`tokens.scales`),children:(0,q.jsxs)(`table`,{className:f.propsTable,children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`col`,children:t(`tokens.group`)}),(0,q.jsx)(`th`,{scope:`col`,children:t(`tokens.variables`)}),(0,q.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,q.jsx)(`tbody`,{children:Te.map(e=>(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`row`,children:t(`tokens.groups.${e.key}.name`)}),(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{className:f.propType,children:e.tokens})}),(0,q.jsx)(`td`,{children:t(`tokens.groups.${e.key}.text`)})]},e.key))})]})})]})]})}})))()}Oe();export{De as default};