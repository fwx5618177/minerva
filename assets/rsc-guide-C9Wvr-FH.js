import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{c as t,h as n,n as r,t as i}from"./react-vendor-fq7Q804H.js";import{i as a,r as o}from"./iconBase-DWTUFqgC.js";import{a as s,l as c,n as l,o as u,t as d,u as f}from"./DocPage-DGOZswYH.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),o(),t(),f(),l(),u(),p=i(),m=[{entry:`@minerva/lib-core`,client:!0,key:`main`},{entry:`@minerva/lib-core/monaco`,client:!0,key:`monaco`},{entry:`@minerva/lib-core/theme-utils`,client:!1,key:`themeUtils`}],h=`// dist/index.js and dist/monaco.js start with
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
      <Tag variant="info">{post.category}</Tag>
      <h2>{post.title}</h2>
      <SaveButton id={post.id} />
    </Card>
  ));
}`,_=`// app/save-button.tsx
"use client";

import { Button, message } from "@minerva/lib-core";

// Event handlers and imperative APIs live in a client component
export function SaveButton({ id }: { id: string }) {
  return (
    <Button
      variant="primary"
      onClick={async () => {
        await fetch(\`/api/save/\${id}\`, { method: "POST" });
        message.success("Saved");
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
// import { message } from "@minerva/lib-core";
// message.success("Hi"); // call it from a client component instead`,y=`// Next.js App Router: import global CSS once, in the root layout
// app/layout.tsx
import "@minerva/lib-core/style.css";

// Vite / other setups: import it in the client entry file (main.tsx)`,b=()=>{let{t:e}=a(),t=t=>e(`docs.rsc-guide.${t}`),n=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`entries`,children:[(0,p.jsx)(`h2`,{id:`entries`,children:t(`entries.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`entries.text`)}),(0,p.jsx)(`div`,{className:s.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`entries.title`),children:(0,p.jsxs)(`table`,{className:s.propsTable,children:[(0,p.jsx)(`thead`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{scope:`col`,children:t(`entries.entry`)}),(0,p.jsx)(`th`,{scope:`col`,children:t(`entries.banner`)}),(0,p.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,p.jsx)(`tbody`,{children:m.map(e=>(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{scope:`row`,children:(0,p.jsx)(`code`,{className:s.propName,children:e.entry})}),(0,p.jsx)(`td`,{children:e.client?t(`entries.yes`):t(`entries.no`)}),(0,p.jsx)(`td`,{children:t(`entries.${e.key}`)})]},e.entry))})]})}),(0,p.jsx)(c,{code:h,language:`tsx`})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`why`,children:[(0,p.jsx)(`h2`,{id:`why`,children:t(`why.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`why.p1`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`why.p2`)})]})]});return(0,p.jsxs)(d,{id:`rsc-guide`,intro:n,children:[(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`render`,children:[(0,p.jsx)(`h2`,{id:`render`,children:t(`render.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`render.text`)}),(0,p.jsx)(c,{code:g,language:`tsx`}),(0,p.jsx)(`p`,{className:s.prose,children:t(`render.props`)}),(0,p.jsx)(c,{code:_,language:`tsx`})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`server-functions`,children:[(0,p.jsx)(`h2`,{id:`server-functions`,children:t(`functions.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`functions.text`)}),(0,p.jsx)(c,{code:v,language:`tsx`}),(0,p.jsx)(`p`,{className:s.callout,children:t(`functions.imperative`)})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`css`,children:[(0,p.jsx)(`h2`,{id:`css`,children:t(`css.title`)}),(0,p.jsx)(`p`,{className:s.prose,children:t(`css.text`)}),(0,p.jsx)(c,{code:y,language:`tsx`})]}),(0,p.jsxs)(`section`,{className:s.section,"aria-labelledby":`next-steps`,children:[(0,p.jsx)(`h2`,{id:`next-steps`,children:t(`next.title`)}),(0,p.jsxs)(`div`,{className:s.cardGrid,children:[(0,p.jsxs)(r,{to:`/theme-palette`,className:s.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.theme-palette.title`)}),(0,p.jsx)(`span`,{children:t(`next.themePalette`)})]}),(0,p.jsxs)(r,{to:`/installation`,className:s.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.installation.title`)}),(0,p.jsx)(`span`,{children:t(`next.installation`)})]})]})]})]})}})))()}x();export{b as default};