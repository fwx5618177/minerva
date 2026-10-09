import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DividerBasic.vue -->

<template>
  <div style="width: 100%">
    <p>Content above the divider.</p>
    <minerva-divider></minerva-divider>
    <p>Content below the divider.</p>
  </div>
</template>
`,angular:`// divider-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-divider-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="width: 100%">
      <p>Content above the divider.</p>
      <minerva-divider></minerva-divider>
      <p>Content below the divider.</p>
    </div>
  \`,
})
export class DividerBasicComponent {}
`,svelte:`<!-- DividerBasic.svelte -->

<div style="width: 100%">
  <p>Content above the divider.</p>
  <minerva-divider></minerva-divider>
  <p>Content below the divider.</p>
</div>
`,solid:`// DividerBasic.tsx

export default function DividerBasic() {
  return (
    <div style="width: 100%">
      <p>Content above the divider.</p>
      <minerva-divider></minerva-divider>
      <p>Content below the divider.</p>
    </div>
  );
}
`,html:`<div style="width: 100%">
  <p>Content above the divider.</p>
  <minerva-divider></minerva-divider>
  <p>Content below the divider.</p>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};