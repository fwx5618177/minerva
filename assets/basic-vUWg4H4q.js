import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- HtmlPreviewBasic.vue -->

<template>
  <minerva-html-preview
    label="Welcome email preview"
    height="220"
    html="<div style='font-family: sans-serif; padding: 24px'><h1 style='color: #4f46e5'>Welcome aboard!</h1><p>Your workspace is ready. <a href='https://example.com'>Open it</a></p></div>"
  ></minerva-html-preview>
</template>
`,angular:`// html-preview-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-html-preview-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-html-preview
      label="Welcome email preview"
      height="220"
      html="<div style='font-family: sans-serif; padding: 24px'><h1 style='color: #4f46e5'>Welcome aboard!</h1><p>Your workspace is ready. <a href='https://example.com'>Open it</a></p></div>"
    ></minerva-html-preview>
  \`,
})
export class HtmlPreviewBasicComponent {}
`,svelte:`<!-- HtmlPreviewBasic.svelte -->

<minerva-html-preview
  label="Welcome email preview"
  height="220"
  html="<div style='font-family: sans-serif; padding: 24px'><h1 style='color: #4f46e5'>Welcome aboard!</h1><p>Your workspace is ready. <a href='https://example.com'>Open it</a></p></div>"
></minerva-html-preview>
`,solid:`// HtmlPreviewBasic.tsx

export default function HtmlPreviewBasic() {
  return (
    <minerva-html-preview
      label="Welcome email preview"
      height="220"
      html="<div style='font-family: sans-serif; padding: 24px'><h1 style='color: #4f46e5'>Welcome aboard!</h1><p>Your workspace is ready. <a href='https://example.com'>Open it</a></p></div>"
    ></minerva-html-preview>
  );
}
`,html:`<minerva-html-preview
  label="Welcome email preview"
  height="220"
  html="<div style='font-family: sans-serif; padding: 24px'><h1 style='color: #4f46e5'>Welcome aboard!</h1><p>Your workspace is ready. <a href='https://example.com'>Open it</a></p></div>"
></minerva-html-preview>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};