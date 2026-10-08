import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TagInputSeparators.vue -->

<template>
  <minerva-tag-input
    aria-label="Recipients"
    placeholder='Type or paste "a; b, c"'
    value="alice@example.com"
    separators=", ; Enter"
    no-commit-on-blur
  ></minerva-tag-input>
</template>
`,angular:`// tag-input-separators.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-tag-input-separators",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-tag-input
      aria-label="Recipients"
      placeholder='Type or paste "a; b, c"'
      value="alice@example.com"
      separators=", ; Enter"
      no-commit-on-blur
    ></minerva-tag-input>
  \`,
})
export class TagInputSeparatorsComponent {}
`,svelte:`<!-- TagInputSeparators.svelte -->

<minerva-tag-input
  aria-label="Recipients"
  placeholder='Type or paste "a; b, c"'
  value="alice@example.com"
  separators=", ; Enter"
  no-commit-on-blur
></minerva-tag-input>
`,solid:`// TagInputSeparators.tsx

export default function TagInputSeparators() {
  return (
    <minerva-tag-input
      aria-label="Recipients"
      placeholder='Type or paste "a; b, c"'
      value="alice@example.com"
      separators=", ; Enter"
      no-commit-on-blur
    ></minerva-tag-input>
  );
}
`,html:`<minerva-tag-input
  aria-label="Recipients"
  placeholder='Type or paste "a; b, c"'
  value="alice@example.com"
  separators=", ; Enter"
  no-commit-on-blur
></minerva-tag-input>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};