import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{c as t,g as n,n as r,t as i}from"./react-vendor-EhfBFkcC.js";import{i as a,l as o,n as s,r as c,t as l,u}from"./DocPage-HgWiqH91.js";import{Q as d,Z as f}from"./sample-DbiIiloN.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),f(),t(),u(),s(),a(),p=i(),m=[{entry:`@minerva/lib-core`,client:!0,key:`main`},{entry:`@minerva/lib-core/monaco`,client:!0,key:`monaco`},{entry:`@minerva/lib-core/theme-utils`,client:!1,key:`themeUtils`}],h=`// dist/index.js and dist/monaco.js start with
"use client";

// dist/theme-utils.js does not: it holds plain functions and strings,
// safe to run on the server`,g=`// app/page.tsx: a Server Component (no "use client")
import { Card, Tag } from "@minerva/lib-core";
import { SaveButton } from "./save-button";

export default async function Page() {
  const posts = await getPosts(); // server-only data access

  return posts.map((post) => (
    // serializable props only: strings, numbers, booleans, JSX children...
    <Card key={post.id} padding="medium">
      <Tag color="info">{post.category}</Tag>
      <h2>{post.title}</h2>
      <SaveButton id={post.id} />
    </Card>
  ));
}`,_=`// app/save-button.tsx
"use client";

import { Button, toast } from "@minerva/lib-core";

// Event handlers and imperative APIs live in a client component
export function SaveButton({ id }: { id: string }) {
  return (
    <Button
      color="primary"
      onClick={async () => {
        await fetch(\`/api/save/\${id}\`, { method: "POST" });
        toast.success("Saved"); // shown by the ToastProvider in your layout
      }}
    >
      Save
    </Button>
  );
}`,v=`// app/layout.tsx: a Server Component
import { cookies } from "next/headers";
import {
  THEME_COOKIE_NAME,
  THEME_INIT_SCRIPT,
  parseThemeCookie,
} from "@minerva/lib-core/theme-utils"; // server-safe: runs here
import { ThemeProvider } from "@minerva/lib-core"; // rendered, not called

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = parseThemeCookie((await cookies()).get(THEME_COOKIE_NAME)?.value);
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}

// Not on the server: main-entry functions are client references there
// import { toast } from "@minerva/lib-core";
// toast.success("Hi"); // call it from a client component instead`,y=`// Next.js App Router: import global CSS once, in the root layout
// app/layout.tsx
import "@minerva/lib-core/style.css";

// Vite / other setups: import it in the client entry file (main.tsx)`,b=()=>{let{t:e}=d(),t=t=>e(`docs.rsc-guide.${t}`),n=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`entries`,children:[(0,p.jsx)(`h2`,{id:`entries`,children:t(`entries.title`)}),(0,p.jsx)(`p`,{className:c.prose,children:t(`entries.text`)}),(0,p.jsx)(`div`,{className:c.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`entries.title`),children:(0,p.jsxs)(`table`,{className:c.propsTable,children:[(0,p.jsx)(`thead`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{scope:`col`,children:t(`entries.entry`)}),(0,p.jsx)(`th`,{scope:`col`,children:t(`entries.banner`)}),(0,p.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,p.jsx)(`tbody`,{children:m.map(e=>(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{scope:`row`,children:(0,p.jsx)(`code`,{className:c.propName,children:e.entry})}),(0,p.jsx)(`td`,{children:e.client?t(`entries.yes`):t(`entries.no`)}),(0,p.jsx)(`td`,{children:t(`entries.${e.key}`)})]},e.entry))})]})}),(0,p.jsx)(o,{code:h,language:`tsx`})]}),(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`why`,children:[(0,p.jsx)(`h2`,{id:`why`,children:t(`why.title`)}),(0,p.jsx)(`p`,{className:c.prose,children:t(`why.p1`)}),(0,p.jsx)(`p`,{className:c.prose,children:t(`why.p2`)})]})]});return(0,p.jsxs)(l,{id:`rsc-guide`,intro:n,children:[(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`render`,children:[(0,p.jsx)(`h2`,{id:`render`,children:t(`render.title`)}),(0,p.jsx)(`p`,{className:c.prose,children:t(`render.text`)}),(0,p.jsx)(o,{code:g,language:`tsx`}),(0,p.jsx)(`p`,{className:c.prose,children:t(`render.props`)}),(0,p.jsx)(o,{code:_,language:`tsx`})]}),(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`server-functions`,children:[(0,p.jsx)(`h2`,{id:`server-functions`,children:t(`functions.title`)}),(0,p.jsx)(`p`,{className:c.prose,children:t(`functions.text`)}),(0,p.jsx)(o,{code:v,language:`tsx`}),(0,p.jsx)(`p`,{className:c.callout,children:t(`functions.imperative`)})]}),(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`css`,children:[(0,p.jsx)(`h2`,{id:`css`,children:t(`css.title`)}),(0,p.jsx)(`p`,{className:c.prose,children:t(`css.text`)}),(0,p.jsx)(o,{code:y,language:`tsx`})]}),(0,p.jsxs)(`section`,{className:c.section,"aria-labelledby":`next-steps`,children:[(0,p.jsx)(`h2`,{id:`next-steps`,children:t(`next.title`)}),(0,p.jsxs)(`div`,{className:c.cardGrid,children:[(0,p.jsxs)(r,{to:`/theme-palette`,className:c.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.theme-palette.title`)}),(0,p.jsx)(`span`,{children:t(`next.themePalette`)})]}),(0,p.jsxs)(r,{to:`/installation`,className:c.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.installation.title`)}),(0,p.jsx)(`span`,{children:t(`next.installation`)})]})]})]})]})}})))()}x();export{b as default};