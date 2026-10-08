import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- EmptyBasic.vue -->

<template>
  <minerva-empty></minerva-empty>
</template>
`,angular:`// empty-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-empty-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \` <minerva-empty></minerva-empty> \`,
})
export class EmptyBasicComponent {}
`,svelte:`<!-- EmptyBasic.svelte -->

<minerva-empty></minerva-empty>
`,solid:`// EmptyBasic.tsx

export default function EmptyBasic() {
  return <minerva-empty></minerva-empty>;
}
`,html:`<minerva-empty></minerva-empty>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};