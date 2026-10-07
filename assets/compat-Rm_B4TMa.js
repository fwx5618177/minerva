import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{i as r,r as i}from"./iconBase-DGdXj6CY.js";import{a,l as o,n as s,o as c,t as l,u}from"./DocPage-Dm1vTl9w.js";var d,f,p,m,h;function g(){return(g=e((()=>{t(),i(),u(),s(),c(),d=n(),f=`// @novel-isr/ui/src/index.ts
export * from "@minerva/lib-core/compat";

// @novel-isr/ui/src/components/theme-utils.ts (no "use client")
export * from "@minerva/lib-core/compat/theme-utils";

// @novel-isr/ui/src/monaco.ts
export * from "@minerva/lib-core/compat/monaco";`,p=`// replaces "@novel-isr/ui/styles.css"
import "@minerva/lib-core/style.css";
// --ui-* tokens, novel's reset and .ui-stagger / .ui-enter-* utilities
import "@minerva/lib-core/compat.css";`,m=`import { Button, Modal, ThemeProvider, toast } from "@minerva/lib-core/compat";

// exactly @novel-isr/ui's API
<ThemeProvider defaultTheme="system" defaultPalette="editorial">
  <Button colorScheme="danger" isLoading={saving} leftIcon={<Trash />}>
    删除
  </Button>
  <Modal isOpen={open} onClose={close} size="lg" title="编辑" />
</ThemeProvider>;`,h=()=>{let{t:e}=r(),t=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`section`,{className:a.section,"aria-labelledby":`entries`,children:[(0,d.jsx)(`h2`,{id:`entries`,children:e(`docs.compat.entries.title`)}),(0,d.jsx)(`p`,{className:a.prose,children:e(`docs.compat.entries.text`)}),(0,d.jsx)(o,{code:f,language:`ts`}),(0,d.jsx)(o,{code:p,language:`ts`})]}),(0,d.jsxs)(`section`,{className:a.section,"aria-labelledby":`usage`,children:[(0,d.jsx)(`h2`,{id:`usage`,children:e(`docs.compat.usage.title`)}),(0,d.jsx)(o,{code:m,language:`tsx`})]}),(0,d.jsxs)(`section`,{className:a.section,"aria-labelledby":`guarantees`,children:[(0,d.jsx)(`h2`,{id:`guarantees`,children:e(`docs.compat.guarantees.title`)}),(0,d.jsx)(`ul`,{className:a.prose,children:[`names`,`strings`,`hooks`,`tokens`,`sideEffects`,`proof`].map(t=>(0,d.jsx)(`li`,{children:e(`docs.compat.guarantees.${t}`)},t))}),(0,d.jsx)(`p`,{className:a.callout,children:e(`docs.compat.guarantees.note`)})]})]});return(0,d.jsx)(l,{id:`compat`,intro:t})}})))()}g();export{h as default};