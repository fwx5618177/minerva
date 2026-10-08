import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ButtonBasic.vue -->

<template>
  <minerva-button>Save</minerva-button>
  <minerva-button color="neutral" variant="outline">Cancel</minerva-button>
  <minerva-button variant="ghost">More</minerva-button>
</template>
`,angular:`// button-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-button-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-button>Save</minerva-button>
    <minerva-button color="neutral" variant="outline">Cancel</minerva-button>
    <minerva-button variant="ghost">More</minerva-button>
  \`,
})
export class ButtonBasicComponent {}
`,svelte:`<!-- ButtonBasic.svelte -->

<minerva-button>Save</minerva-button>
<minerva-button color="neutral" variant="outline">Cancel</minerva-button>
<minerva-button variant="ghost">More</minerva-button>
`,solid:`// ButtonBasic.tsx

export default function ButtonBasic() {
  return (
    <>
      <minerva-button>Save</minerva-button>
      <minerva-button color="neutral" variant="outline">
        Cancel
      </minerva-button>
      <minerva-button variant="ghost">More</minerva-button>
    </>
  );
}
`,html:`<minerva-button>Save</minerva-button>
<minerva-button color="neutral" variant="outline">Cancel</minerva-button>
<minerva-button variant="ghost">More</minerva-button>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};