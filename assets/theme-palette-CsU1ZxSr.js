import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{K as r,U as i,f as a,j as o,s}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{i as c,r as l}from"./iconBase-BbuKeGtN.js";import{Kt as ee,Pt as u,Rt as d,St as f,_ as p,gn as m,hn as h,vt as te}from"./dist-DkgrNLMS.js";import{a as g,c as _,l as v,n as y,o as b,s as ne,t as re,u as ie}from"./DocPage-Bnv84vTs.js";function ae(){return(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(220px, 1fr))`,gap:12},children:o.flatMap(e=>S.map(t=>{let n=i[e][t];return(0,x.jsxs)(`figure`,{style:{margin:0,padding:14,borderRadius:10,border:`1px solid ${n[`border-color`]}`,background:n[`background-color`],color:n[`text-color`],fontFamily:n[`font-family-sans`]},children:[(0,x.jsxs)(`figcaption`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:10,fontWeight:600},children:[(0,x.jsx)(`span`,{children:e}),(0,x.jsx)(`span`,{style:{color:n[`text-muted-color`]},children:t})]}),(0,x.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`},children:C.map(e=>(0,x.jsx)(`span`,{title:`--${e}: ${n[e]}`,style:{width:22,height:22,borderRadius:6,background:n[e],border:`1px solid ${n[`border-strong-color`]}`}},e))}),(0,x.jsxs)(`div`,{style:{marginTop:10,padding:`6px 8px`,borderRadius:6,background:n[`surface-subtle-color`],color:n[`text-secondary-color`],fontSize:12},children:[n[`primary-color`],` / `,n[`accent-color`]]})]},`${e}-${t}`)}))})}var x,S,C;function w(){return(w=e((()=>{d(),r(),x=n(),S=[`light`,`dark`],C=[`primary-color`,`accent-color`,`success-color`,`warning-color`,`danger-color`,`info-color`,`border-color`]})))()}function T(){let{resolvedTheme:e,palette:t}=u();return(0,D.jsxs)(`div`,{style:{display:`grid`,gap:16,padding:20,borderRadius:12,border:`1px solid var(--border-color)`,background:`var(--background-color)`,color:`var(--text-color)`,fontFamily:`var(--font-family-sans)`},children:[(0,D.jsxs)(p,{gap:4,wrap:!0,children:[(0,D.jsx)(te,{}),(0,D.jsx)(m,{})]}),(0,D.jsxs)(p,{gap:4,wrap:!0,children:[(0,D.jsx)(a,{color:`primary`,children:`Primary`}),(0,D.jsx)(a,{color:`neutral`,variant:`outline`,children:`Secondary`}),(0,D.jsx)(h,{color:`primary`,children:t??`default`}),(0,D.jsx)(h,{color:`info`,children:e}),(0,D.jsx)(f,{label:`Switch`,defaultChecked:!0})]}),(0,D.jsxs)(`p`,{style:{margin:0,color:`var(--text-muted-color)`},children:[`data-theme="`,e,`" data-palette="`,t??``,`"`]})]})}function E(){return(0,D.jsx)(ee,{defaultTheme:`system`,defaultPalette:`editorial`,children:(0,D.jsx)(T,{})})}var D;function O(){return(O=e((()=>{d(),D=n()})))()}function k(){let{theme:e,resolvedTheme:t,palette:n}=u(),r=s(),i=[[`useTheme().theme`,e],[`useTheme().resolvedTheme`,t],[`useTheme().palette`,n??`null`],[`useConfig().mode`,r.mode??`undefined`],[`useConfig().resolvedMode`,r.resolvedMode??`undefined`],[`useConfig().palette`,r.palette??`null`]];return(0,A.jsx)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`,gap:`8px 16px`,margin:0},children:i.map(([e,t])=>(0,A.jsxs)(`div`,{style:{display:`contents`},children:[(0,A.jsx)(`dt`,{children:(0,A.jsx)(`code`,{children:e})}),(0,A.jsx)(`dd`,{style:{margin:0},children:(0,A.jsx)(h,{color:`primary`,children:t})})]},e))})}var A;function j(){return(j=e((()=>{d(),A=n()})))()}var M;function N(){return(N=e((()=>{M=`import { palettes } from "@minerva/lib-core";
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
`})))()}var P;function F(){return(F=e((()=>{P=`import {
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
`})))()}var I;function L(){return(L=e((()=>{I=`import { Tag, useConfig, useTheme } from "@minerva/lib-core";

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
`})))()}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{w(),O(),j(),N(),F(),L(),t(),l(),ie(),y(),b(),_(),R=n(),z=ne(Object.assign({"./demos/palette-swatches.tsx":ae,"./demos/toggles.tsx":E,"./demos/use-theme.tsx":k}),Object.assign({"./demos/palette-swatches.tsx":M,"./demos/toggles.tsx":P,"./demos/use-theme.tsx":I})),B=`import { ThemeProvider, ThemeToggle, PaletteToggle } from "@minerva/lib-core";
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
}`,V=`import { ConfigProvider } from "@minerva/lib-core";

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
</ConfigProvider>;`,H=`import { useTheme } from "@minerva/lib-core";

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
}`,U=`<!-- palette + light / dark / system: tokens come from style.css -->
<html data-theme="dark" data-palette="tech" style="color-scheme: dark">

<!-- no palette, or github-dark / a custom theme object: inline variables -->
<html data-theme="light" style="color-scheme: light; --primary-color: #2563eb; ...">`,W=`import {
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
response.headers.append("Set-Cookie", serializeThemeCookie(THEME_COOKIE_NAME, "dark"));`,G=`// app/layout.tsx: a Server Component (no "use client")
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
}`,K=`// server.tsx: any SSR setup (Express, Hono, a Vite SSR server...)
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
});`,q=`import { createThemeInitScript } from "@minerva/lib-core/theme-utils";

// Dark by default, "graphite" when the visitor has no palette cookie yet
export const themeInitScript = createThemeInitScript({
  defaultTheme: "dark",
  defaultPalette: "graphite",
});`,J=`// A nested provider scopes a palette / mode to its subtree (and to the
// overlays opened from it). <html> and the cookies are left to the root one.
<ThemeProvider defaultTheme="dark" defaultPalette="tech">
  <Button color="primary">Always tech / dark</Button>
</ThemeProvider>

// Without a provider: palette token blocks match any element, not only
// <html>. Set both attributes and give the wrapper a background.
<div data-palette="tech" data-theme="dark" style={{ background: "var(--background-color)" }}>
  <Button color="primary">Always tech / dark</Button>
</div>`,Y=[`surface-subtle-color`,`canvas-color`,`control-color`,`hover-color`,`selected-color`,`text-muted-color`,`accent-color`],X=[{key:`spacing`,tokens:`--space-0 … --space-24 (--space-0-5, --space-1-5, --space-2-5)`},{key:`radius`,tokens:`--radius-none, --radius-xl, --radius-2xl, --radius-full`},{key:`fontSize`,tokens:`--font-size-xs, -sm, -md, -lg, -xl, -2xl … -6xl`},{key:`fontWeight`,tokens:`--font-weight-regular | medium | semibold | bold, --line-height-tight | base | relaxed`},{key:`fontFamily`,tokens:`--font-family-sans, --font-family-display, --font-family-mono`},{key:`zIndex`,tokens:`--z-base, --z-raised, --z-dropdown, --z-sticky, --z-overlay, --z-modal, --z-popover, --z-toast`},{key:`motion`,tokens:`--transition-fast | base | slow, --ease-out, --ease-spring, --ease-in`},{key:`rhythm`,tokens:`--rhythm-section | block | tight, --elevation-flat | subtle | raised | floating`},{key:`focus`,tokens:`--focus-ring-width, --focus-ring-offset`}],Z=({token:e})=>(0,R.jsx)(`span`,{"aria-hidden":`true`,style:{display:`inline-block`,width:20,height:20,marginRight:8,verticalAlign:`middle`,border:`1px solid var(--border-color)`,borderRadius:4,background:`var(--${e})`}}),Q=()=>{let{t:e}=c(),t=t=>e(`docs.theme-palette.${t}`),n=[{value:`"light" | "dark"`,text:t(`axes.modeFixed`)},{value:`"system"`,text:t(`axes.modeSystem`)},{value:`"editorial"`,text:t(`axes.editorial`)},{value:`"tech"`,text:t(`axes.tech`)},{value:`"graphite"`,text:t(`axes.graphite`)},{value:`"cool"`,text:t(`axes.cool`)},{value:`null`,text:t(`axes.none`)}],r=[{name:`THEME_INIT_SCRIPT`,text:t(`helpers.initScript`)},{name:`createThemeInitScript(options?)`,text:t(`helpers.create`)},{name:`parseThemeCookies(cookieHeader, defaults?)`,text:t(`helpers.parseAll`)},{name:`parseThemeCookie(value, fallback?)`,text:t(`helpers.parseTheme`)},{name:`parsePaletteCookie(value, fallback?)`,text:t(`helpers.parsePalette`)},{name:`readCookieValue(cookieHeader, name)`,text:t(`helpers.read`)},{name:`serializeThemeCookie(name, value)`,text:t(`helpers.serialize`)},{name:`isThemeMode(value) / isPalette(value)`,text:t(`helpers.guards`)},{name:`PALETTES`,text:t(`helpers.palettes`)},{name:`THEME_COOKIE_NAME / PALETTE_COOKIE_NAME / THEME_COOKIE_MAX_AGE`,text:t(`helpers.cookieNames`)}],i=[{name:`defaultTheme`,value:`"system"`,text:t(`init.defaultTheme`)},{name:`defaultPalette`,value:`null`,text:t(`init.defaultPalette`)}],a=(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(`section`,{className:g.section,"aria-labelledby":`axes`,children:[(0,R.jsx)(`h2`,{id:`axes`,children:t(`axes.title`)}),(0,R.jsx)(`p`,{className:g.prose,children:t(`axes.text`)}),(0,R.jsx)(`div`,{className:g.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`axes.title`),children:(0,R.jsxs)(`table`,{className:g.propsTable,children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`col`,children:t(`axes.value`)}),(0,R.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,R.jsx)(`tbody`,{children:n.map(e=>(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`row`,children:(0,R.jsx)(`code`,{className:g.propName,children:e.value})}),(0,R.jsx)(`td`,{children:e.text})]},e.value))})]})})]}),(0,R.jsxs)(`section`,{className:g.section,"aria-labelledby":`provider`,children:[(0,R.jsx)(`h2`,{id:`provider`,children:t(`provider.title`)}),(0,R.jsx)(`p`,{className:g.prose,children:t(`provider.text`)}),(0,R.jsx)(v,{code:B,language:`tsx`}),(0,R.jsx)(`p`,{className:g.prose,children:t(`provider.config`)}),(0,R.jsx)(v,{code:V,language:`tsx`}),(0,R.jsx)(`p`,{className:g.prose,children:t(`provider.hook`)}),(0,R.jsx)(v,{code:H,language:`tsx`})]}),(0,R.jsxs)(`section`,{className:g.section,"aria-labelledby":`applied`,children:[(0,R.jsx)(`h2`,{id:`applied`,children:t(`applied.title`)}),(0,R.jsx)(`p`,{className:g.prose,children:t(`applied.text`)}),(0,R.jsx)(v,{code:U,language:`html`}),(0,R.jsx)(`p`,{className:g.prose,children:t(`applied.precedence`)}),(0,R.jsxs)(`ol`,{className:g.prose,children:[(0,R.jsx)(`li`,{children:t(`applied.p1`)}),(0,R.jsx)(`li`,{children:t(`applied.p2`)}),(0,R.jsx)(`li`,{children:t(`applied.p3`)}),(0,R.jsx)(`li`,{children:t(`applied.p4`)})]}),(0,R.jsx)(`p`,{className:g.callout,children:t(`applied.global`)})]})]});return(0,R.jsxs)(re,{id:`theme-palette`,demos:z,intro:a,children:[(0,R.jsxs)(`section`,{className:g.section,"aria-labelledby":`persistence`,children:[(0,R.jsx)(`h2`,{id:`persistence`,children:t(`persistence.title`)}),(0,R.jsx)(`p`,{className:g.prose,children:t(`persistence.text`)}),(0,R.jsx)(v,{code:W,language:`tsx`})]}),(0,R.jsxs)(`section`,{className:g.section,"aria-labelledby":`ssr`,children:[(0,R.jsx)(`h2`,{id:`ssr`,children:t(`ssr.title`)}),(0,R.jsx)(`p`,{className:g.prose,children:t(`ssr.text`)}),(0,R.jsx)(`h3`,{children:t(`ssr.next`)}),(0,R.jsx)(v,{code:G,language:`tsx`,title:`app/layout.tsx`}),(0,R.jsx)(`h3`,{children:t(`ssr.generic`)}),(0,R.jsx)(v,{code:K,language:`tsx`,title:`server.tsx`}),(0,R.jsx)(`p`,{className:g.callout,children:t(`ssr.hydration`)})]}),(0,R.jsxs)(`section`,{className:g.section,"aria-labelledby":`init-script`,children:[(0,R.jsx)(`h2`,{id:`init-script`,children:t(`init.title`)}),(0,R.jsx)(`p`,{className:g.prose,children:t(`init.text`)}),(0,R.jsx)(`div`,{className:g.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`init.title`),children:(0,R.jsxs)(`table`,{className:g.propsTable,children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`col`,children:t(`init.option`)}),(0,R.jsx)(`th`,{scope:`col`,children:t(`init.default`)}),(0,R.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,R.jsx)(`tbody`,{children:i.map(e=>(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`row`,children:(0,R.jsx)(`code`,{className:g.propName,children:e.name})}),(0,R.jsx)(`td`,{children:(0,R.jsx)(`code`,{className:g.propType,children:e.value})}),(0,R.jsx)(`td`,{children:e.text})]},e.name))})]})}),(0,R.jsx)(v,{code:q,language:`tsx`}),(0,R.jsx)(`p`,{className:g.prose,children:t(`init.order`)})]}),(0,R.jsxs)(`section`,{className:g.section,"aria-labelledby":`helpers`,children:[(0,R.jsx)(`h2`,{id:`helpers`,children:t(`helpers.title`)}),(0,R.jsx)(`p`,{className:g.prose,children:t(`helpers.text`)}),(0,R.jsx)(`div`,{className:g.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`helpers.title`),children:(0,R.jsxs)(`table`,{className:g.propsTable,children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`col`,children:t(`helpers.name`)}),(0,R.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,R.jsx)(`tbody`,{children:r.map(e=>(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`row`,children:(0,R.jsx)(`code`,{className:g.propName,children:e.name})}),(0,R.jsx)(`td`,{children:e.text})]},e.name))})]})})]}),(0,R.jsxs)(`section`,{className:g.section,"aria-labelledby":`scoped`,children:[(0,R.jsx)(`h2`,{id:`scoped`,children:t(`scoped.title`)}),(0,R.jsx)(`p`,{className:g.prose,children:t(`scoped.text`)}),(0,R.jsx)(v,{code:J,language:`tsx`})]}),(0,R.jsxs)(`section`,{className:g.section,"aria-labelledby":`tokens`,children:[(0,R.jsx)(`h2`,{id:`tokens`,children:t(`tokens.title`)}),(0,R.jsx)(`p`,{className:g.prose,children:t(`tokens.text`)}),(0,R.jsx)(`h3`,{children:t(`tokens.semantic`)}),(0,R.jsx)(`div`,{className:g.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`tokens.semantic`),children:(0,R.jsxs)(`table`,{className:g.propsTable,children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`col`,children:t(`tokens.variable`)}),(0,R.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,R.jsx)(`tbody`,{children:Y.map(e=>(0,R.jsxs)(`tr`,{children:[(0,R.jsxs)(`th`,{scope:`row`,children:[(0,R.jsx)(Z,{token:e}),(0,R.jsxs)(`code`,{className:g.propName,children:[`--`,e]})]}),(0,R.jsx)(`td`,{children:t(`tokens.items.${e}`)})]},e))})]})}),(0,R.jsx)(`p`,{className:g.prose,children:t(`tokens.accentRole`)}),(0,R.jsx)(`h3`,{style:{marginTop:`var(--spacing-8)`},children:t(`tokens.scales`)}),(0,R.jsx)(`p`,{className:g.prose,children:t(`tokens.scalesText`)}),(0,R.jsx)(`div`,{className:g.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`tokens.scales`),children:(0,R.jsxs)(`table`,{className:g.propsTable,children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`col`,children:t(`tokens.group`)}),(0,R.jsx)(`th`,{scope:`col`,children:t(`tokens.variables`)}),(0,R.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,R.jsx)(`tbody`,{children:X.map(e=>(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`row`,children:t(`tokens.groups.${e.key}.name`)}),(0,R.jsx)(`td`,{children:(0,R.jsx)(`code`,{className:g.propType,children:e.tokens})}),(0,R.jsx)(`td`,{children:t(`tokens.groups.${e.key}.text`)})]},e.key))})]})})]})]})}})))()}$();export{Q as default};