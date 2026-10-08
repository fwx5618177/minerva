import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,n,s as r,t as i}from"./react-vendor-aZSMfLKR.js";import{nt as a,rt as o}from"./io5-DyQ46fG2.js";import{i as s,l as c,n as l,r as u,t as d,u as f}from"./DocPage-DEXoN4OO.js";var p,m,h,g,_,v;function y(){return(y=e((()=>{t(),a(),r(),f(),l(),s(),p=i(),m=[{name:`@minerva/core`,key:`core`},{name:`@minerva/lib-core`,key:`libCore`},{name:`@minerva/lib-web-components`,key:`webComponents`}],h=[`focusScope`,`dismissableLayer`,`scrollLock`,`hideOthers`,`rovingFocus`,`positioning`,`pointerGrace`,`portal`,`state`,`theme`],g=`@minerva/core            framework-agnostic TypeScript, DOM only
  ├─ interaction primitives (focus, layers, scroll lock, roving focus, ...)
  ├─ positioning (the only place @floating-ui/dom is used)
  └─ theme utilities, palettes, design tokens (tokens.css), i18n messages + translator
        ▲                                ▲
        │ thin React hooks               │ Lit controllers
@minerva/lib-core                 @minerva/lib-web-components
  React 19 components               Web Components (Lit custom elements)
  + style.css                       + tokens.css, CDN bundle`,_=`import { createDismissableLayer, createFocusScope, lockScroll } from "@minerva/core";

// A framework-free modal: trap focus, dismiss on Escape / outside click,
// lock page scroll. Every lib-core overlay is built from the same pieces.
const scope = createFocusScope(dialog, { trapped: true, loop: true });
const layer = createDismissableLayer(dialog, { onDismiss: close });
const unlock = lockScroll();
scope.activate();

function close() {
  layer.destroy();
  scope.deactivate(); // restores focus to the opener
  unlock();
}`,v=()=>{let{t:e}=o(),t=t=>e(`docs.architecture.${t}`),r=(0,p.jsxs)(`section`,{className:u.section,"aria-labelledby":`packages`,children:[(0,p.jsx)(`h2`,{id:`packages`,children:t(`packages.title`)}),(0,p.jsx)(`p`,{className:u.prose,children:t(`packages.text`)}),(0,p.jsx)(`div`,{className:u.tableWrapper,tabIndex:0,role:`region`,"aria-label":t(`packages.title`),children:(0,p.jsxs)(`table`,{className:u.propsTable,children:[(0,p.jsx)(`thead`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{scope:`col`,children:t(`packages.package`)}),(0,p.jsx)(`th`,{scope:`col`,children:e(`doc.description`)})]})}),(0,p.jsx)(`tbody`,{children:m.map(e=>(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{scope:`row`,children:(0,p.jsx)(`code`,{className:u.propName,children:e.name})}),(0,p.jsx)(`td`,{children:t(`packages.${e.key}`)})]},e.name))})]})}),(0,p.jsx)(c,{code:g,language:`text`})]});return(0,p.jsxs)(d,{id:`architecture`,intro:r,children:[(0,p.jsxs)(`section`,{className:u.section,"aria-labelledby":`primitives`,children:[(0,p.jsx)(`h2`,{id:`primitives`,children:t(`primitives.title`)}),(0,p.jsx)(`p`,{className:u.prose,children:t(`primitives.text`)}),(0,p.jsx)(`ul`,{className:u.prose,children:h.map(e=>(0,p.jsx)(`li`,{children:t(`primitives.${e}`)},e))}),(0,p.jsx)(c,{code:_,language:`ts`})]}),(0,p.jsxs)(`section`,{className:u.section,"aria-labelledby":`overlays`,children:[(0,p.jsx)(`h2`,{id:`overlays`,children:t(`overlays.title`)}),(0,p.jsx)(`p`,{className:u.prose,children:t(`overlays.p1`)}),(0,p.jsx)(`p`,{className:u.prose,children:t(`overlays.p2`)})]}),(0,p.jsxs)(`section`,{className:u.section,"aria-labelledby":`dependencies`,children:[(0,p.jsx)(`h2`,{id:`dependencies`,children:t(`dependencies.title`)}),(0,p.jsx)(`p`,{className:u.prose,children:t(`dependencies.text`)})]}),(0,p.jsxs)(`section`,{className:u.section,"aria-labelledby":`next-steps`,children:[(0,p.jsx)(`h2`,{id:`next-steps`,children:t(`next.title`)}),(0,p.jsxs)(`div`,{className:u.cardGrid,children:[(0,p.jsxs)(n,{to:`/installation`,className:u.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.installation.title`)}),(0,p.jsx)(`span`,{children:t(`next.installation`)})]}),(0,p.jsxs)(n,{to:`/web-components`,className:u.linkCard,children:[(0,p.jsx)(`strong`,{children:e(`docs.web-components.title`)}),(0,p.jsx)(`span`,{children:t(`next.webComponents`)})]})]})]})]})}})))()}y();export{v as default};