import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TextLinkBasic.vue -->

<template>
  <p style="margin: 0">
    Read the
    <minerva-text-link
      href="https://developer.mozilla.org/docs/Web/HTML/Element/a"
      target="_blank"
      rel="noopener noreferrer"
      hreflang="en"
      >anchor reference</minerva-text-link
    >
    before writing your own links, or
    <minerva-text-link href="data:text/plain,Minerva" download="minerva.txt"
      >download a sample file</minerva-text-link
    >.
  </p>
</template>
`,angular:`// text-link-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-text-link-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <p style="margin: 0">
      Read the
      <minerva-text-link
        href="https://developer.mozilla.org/docs/Web/HTML/Element/a"
        target="_blank"
        rel="noopener noreferrer"
        hreflang="en"
        >anchor reference</minerva-text-link
      >
      before writing your own links, or
      <minerva-text-link href="data:text/plain,Minerva" download="minerva.txt"
        >download a sample file</minerva-text-link
      >.
    </p>
  \`,
})
export class TextLinkBasicComponent {}
`,svelte:`<!-- TextLinkBasic.svelte -->

<p style="margin: 0">
  Read the
  <minerva-text-link
    href="https://developer.mozilla.org/docs/Web/HTML/Element/a"
    target="_blank"
    rel="noopener noreferrer"
    hreflang="en"
    >anchor reference</minerva-text-link>
  before writing your own links, or
  <minerva-text-link href="data:text/plain,Minerva" download="minerva.txt"
    >download a sample file</minerva-text-link>.
</p>
`,solid:`// TextLinkBasic.tsx

export default function TextLinkBasic() {
  return (
    <p style="margin: 0">
      Read the
      <minerva-text-link
        href="https://developer.mozilla.org/docs/Web/HTML/Element/a"
        target="_blank"
        rel="noopener noreferrer"
        hreflang="en"
      >
        anchor reference
      </minerva-text-link>
      before writing your own links, or
      <minerva-text-link href="data:text/plain,Minerva" download="minerva.txt">
        download a sample file
      </minerva-text-link>
      .
    </p>
  );
}
`,html:`<p style="margin: 0">
  Read the
  <minerva-text-link
    href="https://developer.mozilla.org/docs/Web/HTML/Element/a"
    target="_blank"
    rel="noopener noreferrer"
    hreflang="en"
    >anchor reference</minerva-text-link
  >
  before writing your own links, or
  <minerva-text-link href="data:text/plain,Minerva" download="minerva.txt"
    >download a sample file</minerva-text-link
  >.
</p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};