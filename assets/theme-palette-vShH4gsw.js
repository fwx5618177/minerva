import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{Wt as r,X as i,cn as a,mn as o}from"./minerva-web-components-e9i9Tzii.js";import{g as s,h as c,l,m as u,n as d,p as ee,t as te,u as ne}from"./DocPage-9P1WMt4D.js";import{nt as re,rt as ie}from"./io5-ChQeTV8D.js";import{n as f,t as p}from"./useI18n-Brv-VDVY.js";import{i as ae,r as oe}from"./themeScope-CVsq4AXR.js";import{t as m}from"./stylingHooks-GjssfG7q.js";import{n as h,t as se}from"./Button-DN5Do18G.js";import{n as ce,t as g}from"./Tag-Ucl1zTUA.js";import{n as le,t as ue}from"./Switch-DwO7xn9c.js";import{i as de,n as fe,r as _,t as pe}from"./ConfigProvider-Cjobfnxn.js";import{i as v,r as me}from"./Stack-NtusJivt.js";function he({defaultTheme:e,defaultPalette:t,disableStorage:n=!1,locale:r,onThemeChange:i,onPaletteChange:a,children:o}){let s=(0,b.useContext)(ae)===null;return(0,x.jsx)(pe,{theme:e??(s?`system`:void 0),palette:t,persist:!n,locale:r,onThemeChange:i?e=>{e===`light`||e===`dark`?i(e):(e===`auto`||e===`system`)&&i(`system`)}:void 0,onPaletteChange:a,children:o})}function y(){let e=(0,b.useContext)(de);if(!e)throw Error(`useTheme must be used within a ThemeProvider (or ConfigProvider)`);let{mode:t,resolvedMode:n,palette:r=null,setTheme:i,setPalette:a}=e,o=(0,b.useCallback)(e=>i?.(e),[i]),s=(0,b.useCallback)(e=>a?.(e),[a]);return(0,b.useMemo)(()=>({theme:t??`system`,resolvedTheme:n??`light`,palette:r,setTheme:o,setPalette:s}),[t,n,r,o,s])}var b,x;function S(){return(S=e((()=>{oe(),_(),b=t(),x=n()})))()}var C,w,T;function E(){return(E=e((()=>{C=`_group_1q9wp_1`,w=`_item_1q9wp_11`,T={group:C,item:w}})))()}var D,O;function k(){return(k=e((()=>{a(),f(),S(),E(),D=n(),O=({showSystem:e=!0,labels:t,className:n,ref:r,...a})=>{let{theme:o,resolvedTheme:s,setTheme:c}=y(),{t:l}=p(),u=e?[`light`,`dark`,`system`]:[`light`,`dark`];return(0,D.jsx)(`div`,{ref:r,className:i(T.group,n),role:`group`,"aria-label":l(`themeToggle.label`,{theme:s}),...a,...m(`theme-toggle`,`root`),children:u.map(e=>(0,D.jsx)(`button`,{type:`button`,className:T.item,"aria-pressed":o===e,onClick:()=>c(e),...m(`theme-toggle`,`item`,{state:o===e?`active`:`inactive`}),children:t?.[e]??l(`themeToggle.${e}`)},e))})}})))()}var A,j;function M(){return(M=e((()=>{a(),f(),S(),E(),A=n(),j=({palettes:e=[...o],showDefault:t=!1,labels:n,className:r,ref:a,...s})=>{let{palette:c,setPalette:l}=y(),{t:u}=p(),d=t?[null,...e]:e;return(0,A.jsx)(`div`,{ref:a,className:i(T.group,r),role:`group`,"aria-label":u(`paletteToggle.label`,{palette:c??u(`paletteToggle.default`)}),...s,...m(`palette-toggle`,`root`),children:d.map(e=>{let t=e??`default`,r=c===e;return(0,A.jsx)(`button`,{type:`button`,className:T.item,"aria-pressed":r,onClick:()=>l(e),...m(`palette-toggle`,`item`,{state:r?`active`:`inactive`}),children:n?.[t]??u(`paletteToggle.${t}`)},t)})})}})))()}function ge(){return(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(220px, 1fr))`,gap:12},children:o.flatMap(e=>P.map(t=>{let n=r[e][t];return(0,N.jsxs)(`figure`,{style:{margin:0,padding:14,borderRadius:10,border:`1px solid ${n[`border-color`]}`,background:n[`background-color`],color:n[`text-color`],fontFamily:n[`font-family-sans`]},children:[(0,N.jsxs)(`figcaption`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:10,fontWeight:600},children:[(0,N.jsx)(`span`,{children:e}),(0,N.jsx)(`span`,{style:{color:n[`text-muted-color`]},children:t})]}),(0,N.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`},children:F.map(e=>(0,N.jsx)(`span`,{title:`--${e}: ${n[e]}`,style:{width:22,height:22,borderRadius:6,background:n[e],border:`1px solid ${n[`border-strong-color`]}`}},e))}),(0,N.jsxs)(`div`,{style:{marginTop:10,padding:`6px 8px`,borderRadius:6,background:n[`surface-subtle-color`],color:n[`text-secondary-color`],fontSize:12},children:[n[`primary-color`],` / `,n[`accent-color`]]})]},`${e}-${t}`)}))})}var N,P,F;function _e(){return(_e=e((()=>{a(),N=n(),P=[`light`,`dark`],F=[`primary-color`,`accent-color`,`success-color`,`warning-color`,`danger-color`,`info-color`,`border-color`]})))()}function ve(){let{resolvedTheme:e,palette:t}=y();return(0,I.jsxs)(`div`,{style:{display:`grid`,gap:16,padding:20,borderRadius:12,border:`1px solid var(--border-color)`,background:`var(--background-color)`,color:`var(--text-color)`,fontFamily:`var(--font-family-sans)`},children:[(0,I.jsxs)(v,{gap:4,wrap:!0,children:[(0,I.jsx)(O,{}),(0,I.jsx)(j,{})]}),(0,I.jsxs)(v,{gap:4,wrap:!0,children:[(0,I.jsx)(h,{color:`primary`,children:`Primary`}),(0,I.jsx)(h,{color:`neutral`,variant:`outline`,children:`Secondary`}),(0,I.jsx)(g,{color:`primary`,children:t??`default`}),(0,I.jsx)(g,{color:`info`,children:e}),(0,I.jsx)(ue,{label:`Switch`,defaultChecked:!0})]}),(0,I.jsxs)(`p`,{style:{margin:0,color:`var(--text-muted-color)`},children:[`data-theme="`,e,`" data-palette="`,t??``,`"`]})]})}function ye(){return(0,I.jsx)(he,{defaultTheme:`system`,defaultPalette:`editorial`,children:(0,I.jsx)(ve,{})})}var I;function L(){return(L=e((()=>{se(),me(),M(),le(),ce(),S(),k(),I=n()})))()}function be(){let{theme:e,resolvedTheme:t,palette:n}=y(),r=fe(),i=[[`useTheme().theme`,e],[`useTheme().resolvedTheme`,t],[`useTheme().palette`,n??`null`],[`useConfig().mode`,r.mode??`undefined`],[`useConfig().resolvedMode`,r.resolvedMode??`undefined`],[`useConfig().palette`,r.palette??`null`]];return(0,R.jsx)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`,gap:`8px 16px`,margin:0},children:i.map(([e,t])=>(0,R.jsxs)(`div`,{style:{display:`contents`},children:[(0,R.jsx)(`dt`,{children:(0,R.jsx)(`code`,{children:e})}),(0,R.jsx)(`dd`,{style:{margin:0},children:(0,R.jsx)(g,{color:`primary`,children:t})})]},e))})}var R;function z(){return(z=e((()=>{ce(),_(),S(),R=n()})))()}var B;function V(){return(V=e((()=>{B=`import { palettes } from "@minerva/lib-core";
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
`})))()}var H;function U(){return(U=e((()=>{H=`import {
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
`})))()}var W;function G(){return(G=e((()=>{W=`import { Tag, useConfig, useTheme } from "@minerva/lib-core";

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
`})))()}var K,q,J,Y,X,Z,xe,Q,Se,Ce,we,Te,Ee,De,Oe;function $(){return($=e((()=>{_e(),L(),z(),V(),U(),G(),t(),re(),s(),d(),ne(),u(),K=n(),q=ee(Object.assign({"./demos/palette-swatches.tsx":ge,"./demos/toggles.tsx":ye,"./demos/use-theme.tsx":be}),Object.assign({"./demos/palette-swatches.tsx":B,"./demos/toggles.tsx":H,"./demos/use-theme.tsx":W})),J=`import { ThemeProvider, ThemeToggle, PaletteToggle } from "@minerva/lib-core";
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
}`,Y=`import { ConfigProvider, ToastProvider, toast } from "@minerva/lib-core";

// The same thing with ConfigProvider (ThemeProvider is a preset over it):
// "system" is an alias of "auto"; persist turns on the cookies.
<ConfigProvider
  theme="system"
  palette="editorial"
  persist
  onThemeChange={(theme) => toast.info(\`Theme: \${theme}\`)}
  onPaletteChange={(palette) => toast.info(\`Palette: \${palette}\`)}
>
  <ToastProvider>
    <App />
  </ToastProvider>
</ConfigProvider>;`,X=`import { useTheme } from "@minerva/lib-core";

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
}`,Z=`<!-- palette + light / dark / system: tokens come from style.css -->
<html data-theme="dark" data-palette="tech" style="color-scheme: dark">

<!-- no palette, or github-dark / a custom theme object: inline variables -->
<html data-theme="light" style="color-scheme: light; --primary-color: #2563eb; ...">`,xe=`import {
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
response.headers.append("Set-Cookie", serializeThemeCookie(THEME_COOKIE_NAME, "dark"));`,Q=`// app/layout.tsx: a Server Component (no "use client")
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
}`,Se=`// server.tsx: any SSR setup (Express, Hono, a Vite SSR server...)
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
});`,Ce=`import { createThemeInitScript } from "@minerva/lib-core/theme-utils";

// Dark by default, "graphite" when the visitor has no palette cookie yet
export const themeInitScript = createThemeInitScript({
  defaultTheme: "dark",
  defaultPalette: "graphite",
});`,we=`// A nested provider scopes a palette / mode to its subtree (and to the
// overlays opened from it). <html> and the cookies are left to the root one.
<ThemeProvider defaultTheme="dark" defaultPalette="tech">
  <Button color="primary">Always tech / dark</Button>
</ThemeProvider>

// Without a provider: palette token blocks match any element, not only
// <html>. Set both attributes and give the wrapper a background.
<div data-palette="tech" data-theme="dark" style={{ background: "var(--background-color)" }}>
  <Button color="primary">Always tech / dark</Button>
</div>`,Te=[`surface-subtle-color`,`canvas-color`,`control-color`,`hover-color`,`selected-color`,`text-muted-color`,`accent-color`],Ee=[{key:`spacing`,tokens:`--space-0 … --space-24 (--space-0-5, --space-1-5, --space-2-5)`},{key:`radius`,tokens:`--radius-none, --radius-xl, --radius-2xl, --radius-full`},{key:`fontSize`,tokens:`--font-size-xs, -sm, -md, -lg, -xl, -2xl … -6xl`},{key:`fontWeight`,tokens:`--font-weight-regular | medium | semibold | bold, --line-height-tight | base | relaxed`},{key:`fontFamily`,tokens:`--font-family-sans, --font-family-display, --font-family-mono`},{key:`zIndex`,tokens:`--z-base, --z-raised, --z-dropdown, --z-sticky, --z-overlay, --z-modal, --z-popover, --z-toast`},{key:`motion`,tokens:`--transition-fast | base | slow, --ease-out, --ease-spring, --ease-in`},{key:`rhythm`,tokens:`--rhythm-section | block | tight, --elevation-flat | subtle | raised | floating`},{key:`focus`,tokens:`--focus-ring-width, --focus-ring-offset`}],De=({token:e})=>(0,K.jsx)(`span`,{"aria-hidden":`true`,style:{display:`inline-block`,width:20,height:20,marginRight:8,verticalAlign:`middle`,border:`1px solid var(--border-color)`,borderRadius:4,background:`var(--${e})`}}),Oe=()=>{let{t:e}=ie(),t=t=>e(`docs.theme-palette.${t}`),n=[{value:`"light" | "dark"`,text:t(`axes.modeFixed`)},{value:`"system"`,text:t(`axes.modeSystem`)},{value:`"editorial"`,text:t(`axes.editorial`)},{value:`"tech"`,text:t(`axes.tech`)},{value:`"graphite"`,text:t(`axes.graphite`)},{value:`"cool"`,text:t(`axes.cool`)},{value:`null`,text:t(`axes.none`)}],r=[{name:`THEME_INIT_SCRIPT`,text:t(`helpers.initScript`)},{name:`createThemeInitScript(options?)`,text:t(`helpers.create`)},{name:`parseThemeCookies(cookieHeader, defaults?)`,text:t(`helpers.parseAll`)},{name:`parseThemeCookie(value, fallback?)`,text:t(`helpers.parseTheme`)},{name:`parsePaletteCookie(value, fallback?)`,text:t(`helpers.parsePalette`)},{name:`readCookieValue(cookieHeader, name)`,text:t(`helpers.read`)},{name:`serializeThemeCookie(name, value)`,text:t(`helpers.serialize`)},{name:`isThemeMode(value) / isPalette(value)`,text:t(`helpers.guards`)},{name:`PALETTES`,text:t(`helpers.palettes`)},{name:`THEME_COOKIE_NAME / PALETTE_COOKIE_NAME / THEME_COOKIE_MAX_AGE`,text:t(`helpers.cookieNames`)}],i=[{name:`defaultTheme`,value:`"system"`,text:t(`init.defaultTheme`)},{name:`defaultPalette`,value:`null`,text:t(`init.defaultPalette`)}],a=(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`section`,{className:l.section,"aria-labelledby":`axes`,children:[(0,K.jsx)(`h2`,{id:`axes`,children:t(`axes.title`)}),(0,K.jsx)(`p`,{className:l.prose,children:t(`axes.text`)}),(0,K.jsx)(`div`,{className:l.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`axes.title`),children:(0,K.jsxs)(`table`,{className:l.propsTable,children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`col`,children:t(`axes.value`)}),(0,K.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,K.jsx)(`tbody`,{children:n.map(e=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`row`,children:(0,K.jsx)(`code`,{className:l.propName,children:e.value})}),(0,K.jsx)(`td`,{children:e.text})]},e.value))})]})})]}),(0,K.jsxs)(`section`,{className:l.section,"aria-labelledby":`provider`,children:[(0,K.jsx)(`h2`,{id:`provider`,children:t(`provider.title`)}),(0,K.jsx)(`p`,{className:l.prose,children:t(`provider.text`)}),(0,K.jsx)(c,{code:J,language:`tsx`}),(0,K.jsx)(`p`,{className:l.prose,children:t(`provider.config`)}),(0,K.jsx)(c,{code:Y,language:`tsx`}),(0,K.jsx)(`p`,{className:l.prose,children:t(`provider.hook`)}),(0,K.jsx)(c,{code:X,language:`tsx`})]}),(0,K.jsxs)(`section`,{className:l.section,"aria-labelledby":`applied`,children:[(0,K.jsx)(`h2`,{id:`applied`,children:t(`applied.title`)}),(0,K.jsx)(`p`,{className:l.prose,children:t(`applied.text`)}),(0,K.jsx)(c,{code:Z,language:`html`}),(0,K.jsx)(`p`,{className:l.prose,children:t(`applied.precedence`)}),(0,K.jsxs)(`ol`,{className:l.prose,children:[(0,K.jsx)(`li`,{children:t(`applied.p1`)}),(0,K.jsx)(`li`,{children:t(`applied.p2`)}),(0,K.jsx)(`li`,{children:t(`applied.p3`)}),(0,K.jsx)(`li`,{children:t(`applied.p4`)})]}),(0,K.jsx)(`p`,{className:l.callout,children:t(`applied.global`)})]})]});return(0,K.jsxs)(te,{id:`theme-palette`,demos:q,intro:a,children:[(0,K.jsxs)(`section`,{className:l.section,"aria-labelledby":`persistence`,children:[(0,K.jsx)(`h2`,{id:`persistence`,children:t(`persistence.title`)}),(0,K.jsx)(`p`,{className:l.prose,children:t(`persistence.text`)}),(0,K.jsx)(c,{code:xe,language:`tsx`})]}),(0,K.jsxs)(`section`,{className:l.section,"aria-labelledby":`ssr`,children:[(0,K.jsx)(`h2`,{id:`ssr`,children:t(`ssr.title`)}),(0,K.jsx)(`p`,{className:l.prose,children:t(`ssr.text`)}),(0,K.jsx)(`h3`,{children:t(`ssr.next`)}),(0,K.jsx)(c,{code:Q,language:`tsx`,title:`app/layout.tsx`}),(0,K.jsx)(`h3`,{children:t(`ssr.generic`)}),(0,K.jsx)(c,{code:Se,language:`tsx`,title:`server.tsx`}),(0,K.jsx)(`p`,{className:l.callout,children:t(`ssr.hydration`)})]}),(0,K.jsxs)(`section`,{className:l.section,"aria-labelledby":`init-script`,children:[(0,K.jsx)(`h2`,{id:`init-script`,children:t(`init.title`)}),(0,K.jsx)(`p`,{className:l.prose,children:t(`init.text`)}),(0,K.jsx)(`div`,{className:l.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`init.title`),children:(0,K.jsxs)(`table`,{className:l.propsTable,children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`col`,children:t(`init.option`)}),(0,K.jsx)(`th`,{scope:`col`,children:t(`init.default`)}),(0,K.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,K.jsx)(`tbody`,{children:i.map(e=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`row`,children:(0,K.jsx)(`code`,{className:l.propName,children:e.name})}),(0,K.jsx)(`td`,{children:(0,K.jsx)(`code`,{className:l.propType,children:e.value})}),(0,K.jsx)(`td`,{children:e.text})]},e.name))})]})}),(0,K.jsx)(c,{code:Ce,language:`tsx`}),(0,K.jsx)(`p`,{className:l.prose,children:t(`init.order`)})]}),(0,K.jsxs)(`section`,{className:l.section,"aria-labelledby":`helpers`,children:[(0,K.jsx)(`h2`,{id:`helpers`,children:t(`helpers.title`)}),(0,K.jsx)(`p`,{className:l.prose,children:t(`helpers.text`)}),(0,K.jsx)(`div`,{className:l.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`helpers.title`),children:(0,K.jsxs)(`table`,{className:l.propsTable,children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`col`,children:t(`helpers.name`)}),(0,K.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,K.jsx)(`tbody`,{children:r.map(e=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`row`,children:(0,K.jsx)(`code`,{className:l.propName,children:e.name})}),(0,K.jsx)(`td`,{children:e.text})]},e.name))})]})})]}),(0,K.jsxs)(`section`,{className:l.section,"aria-labelledby":`scoped`,children:[(0,K.jsx)(`h2`,{id:`scoped`,children:t(`scoped.title`)}),(0,K.jsx)(`p`,{className:l.prose,children:t(`scoped.text`)}),(0,K.jsx)(c,{code:we,language:`tsx`})]}),(0,K.jsxs)(`section`,{className:l.section,"aria-labelledby":`tokens`,children:[(0,K.jsx)(`h2`,{id:`tokens`,children:t(`tokens.title`)}),(0,K.jsx)(`p`,{className:l.prose,children:t(`tokens.text`)}),(0,K.jsx)(`h3`,{children:t(`tokens.semantic`)}),(0,K.jsx)(`div`,{className:l.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`tokens.semantic`),children:(0,K.jsxs)(`table`,{className:l.propsTable,children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`col`,children:t(`tokens.variable`)}),(0,K.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,K.jsx)(`tbody`,{children:Te.map(e=>(0,K.jsxs)(`tr`,{children:[(0,K.jsxs)(`th`,{scope:`row`,children:[(0,K.jsx)(De,{token:e}),(0,K.jsxs)(`code`,{className:l.propName,children:[`--`,e]})]}),(0,K.jsx)(`td`,{children:t(`tokens.items.${e}`)})]},e))})]})}),(0,K.jsx)(`p`,{className:l.prose,children:t(`tokens.accentRole`)}),(0,K.jsx)(`h3`,{style:{marginTop:`var(--spacing-8)`},children:t(`tokens.scales`)}),(0,K.jsx)(`p`,{className:l.prose,children:t(`tokens.scalesText`)}),(0,K.jsx)(`div`,{className:l.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`tokens.scales`),children:(0,K.jsxs)(`table`,{className:l.propsTable,children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`col`,children:t(`tokens.group`)}),(0,K.jsx)(`th`,{scope:`col`,children:t(`tokens.variables`)}),(0,K.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,K.jsx)(`tbody`,{children:Ee.map(e=>(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{scope:`row`,children:t(`tokens.groups.${e.key}.name`)}),(0,K.jsx)(`td`,{children:(0,K.jsx)(`code`,{className:l.propType,children:e.tokens})}),(0,K.jsx)(`td`,{children:t(`tokens.groups.${e.key}.text`)})]},e.key))})]})})]})]})}})))()}$();export{Oe as default};