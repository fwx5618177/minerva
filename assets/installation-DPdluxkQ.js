import"./rolldown-runtime-CbXtAM7H.js";import{f as e,n as t,t as n}from"./react-vendor-CUe5nroo.js";import{Y as r}from"./registry-DtD9RDtk.js";import{a as i,r as a,t as o}from"./DocPage-B1L0vw6V.js";e();var s=n(),c=`pnpm add @minerva/lib-core react react-dom`,l=`npm install @minerva/lib-core react react-dom`,u=`yarn add @minerva/lib-core react react-dom`,d=`// main.tsx (your entry file) — import the stylesheet exactly once
import "@minerva/lib-core/style.css";`,f=`import { createRoot } from "react-dom/client";
import { Button, ConfigProvider, message } from "@minerva/lib-core";
import "@minerva/lib-core/style.css";

function App() {
  return (
    // theme: "auto" (default) | "light" | "dark" | "github-dark" | custom
    <ConfigProvider theme="auto" locale={{ language: "en" }}>
      <Button variant="primary" onClick={() => message.success("Hello!")}>
        Say hello
      </Button>
    </ConfigProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);`,p=`pnpm add @minerva/lib-web-components`,m=`// registers <minerva-button> (and future custom elements) once
import "@minerva/lib-web-components";`,h=`// src/global.d.ts — JSX typings for <minerva-button> in React
/// <reference types="@minerva/lib-web-components/react" />

// or, in a module file:
import type {} from "@minerva/lib-web-components/react";`,g=`import { themes } from "@minerva/lib-core";
import type { ButtonProps, ComponentTheme } from "@minerva/lib-core";

// every component exports its props type
const saveButton: Partial<ButtonProps> = { variant: "success", size: "large" };

// themes are typed too: missing or misspelled tokens are compile errors
const brand: ComponentTheme = { ...themes.light, "primary-color": "#7c3aed" };`,_=()=>{let{t:e}=r(),n=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(`section`,{className:a.section,"aria-labelledby":`requirements`,children:[(0,s.jsx)(`h2`,{id:`requirements`,children:e(`docs.installation.requirements.title`)}),(0,s.jsxs)(`ul`,{children:[(0,s.jsx)(`li`,{children:e(`docs.installation.requirements.react`)}),(0,s.jsx)(`li`,{children:e(`docs.installation.requirements.bundler`)}),(0,s.jsx)(`li`,{children:e(`docs.installation.requirements.browsers`)})]})]}),(0,s.jsxs)(`section`,{className:a.section,"aria-labelledby":`install-core`,children:[(0,s.jsx)(`h2`,{id:`install-core`,children:e(`docs.installation.core.title`)}),(0,s.jsx)(`p`,{className:a.prose,children:e(`docs.installation.core.text`)}),(0,s.jsx)(i,{code:c,language:`bash`,title:`pnpm`}),(0,s.jsx)(i,{code:l,language:`bash`,title:`npm`}),(0,s.jsx)(i,{code:u,language:`bash`,title:`yarn`}),(0,s.jsx)(`p`,{className:a.prose,children:e(`docs.installation.core.peers`)})]}),(0,s.jsxs)(`section`,{className:a.section,"aria-labelledby":`styles`,children:[(0,s.jsx)(`h2`,{id:`styles`,children:e(`docs.installation.styles.title`)}),(0,s.jsx)(`p`,{className:a.prose,children:e(`docs.installation.styles.text`)}),(0,s.jsx)(i,{code:d,language:`tsx`}),(0,s.jsx)(`p`,{className:a.callout,children:e(`docs.installation.styles.note`)})]}),(0,s.jsxs)(`section`,{className:a.section,"aria-labelledby":`first-app`,children:[(0,s.jsx)(`h2`,{id:`first-app`,children:e(`docs.installation.app.title`)}),(0,s.jsx)(`p`,{className:a.prose,children:e(`docs.installation.app.text`)}),(0,s.jsx)(i,{code:f,language:`tsx`}),(0,s.jsx)(`p`,{className:a.prose,children:e(`docs.installation.app.provider`)})]}),(0,s.jsxs)(`section`,{className:a.section,"aria-labelledby":`install-wc`,children:[(0,s.jsx)(`h2`,{id:`install-wc`,children:e(`docs.installation.webComponents.title`)}),(0,s.jsx)(`p`,{className:a.prose,children:e(`docs.installation.webComponents.text`)}),(0,s.jsx)(i,{code:p,language:`bash`}),(0,s.jsx)(i,{code:m,language:`tsx`}),(0,s.jsx)(`p`,{className:a.prose,children:e(`docs.installation.webComponents.typings`)}),(0,s.jsx)(i,{code:h,language:`tsx`})]}),(0,s.jsxs)(`section`,{className:a.section,"aria-labelledby":`typescript`,children:[(0,s.jsx)(`h2`,{id:`typescript`,children:e(`docs.installation.typescript.title`)}),(0,s.jsx)(`p`,{className:a.prose,children:e(`docs.installation.typescript.text`)}),(0,s.jsx)(i,{code:g,language:`tsx`})]}),(0,s.jsxs)(`section`,{className:a.section,"aria-labelledby":`next-steps`,children:[(0,s.jsx)(`h2`,{id:`next-steps`,children:e(`docs.installation.next.title`)}),(0,s.jsxs)(`div`,{className:a.cardGrid,children:[(0,s.jsxs)(t,{to:`/introduction`,className:a.linkCard,children:[(0,s.jsx)(`strong`,{children:e(`docs.introduction.title`)}),(0,s.jsx)(`span`,{children:e(`docs.installation.next.introduction`)})]}),(0,s.jsxs)(t,{to:`/theming`,className:a.linkCard,children:[(0,s.jsx)(`strong`,{children:e(`docs.theming.title`)}),(0,s.jsx)(`span`,{children:e(`docs.installation.next.theming`)})]}),(0,s.jsxs)(t,{to:`/button`,className:a.linkCard,children:[(0,s.jsx)(`strong`,{children:e(`docs.button.title`)}),(0,s.jsx)(`span`,{children:e(`docs.installation.next.components`)})]})]})]})]});return(0,s.jsx)(o,{id:`installation`,intro:n})};export{_ as default};