import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- IconButtonBasic.vue -->

<template>
  <minerva-icon-button label="Edit">✎</minerva-icon-button>
  <minerva-icon-button label="Delete" color="danger">🗑</minerva-icon-button>
  <minerva-icon-button label="Share" variant="outline">⤴</minerva-icon-button>
  <minerva-icon-button label="Add" variant="solid" color="primary"
    >+</minerva-icon-button
  >
</template>
`,angular:`// icon-button-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-icon-button-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-icon-button label="Edit">✎</minerva-icon-button>
    <minerva-icon-button label="Delete" color="danger">🗑</minerva-icon-button>
    <minerva-icon-button label="Share" variant="outline">⤴</minerva-icon-button>
    <minerva-icon-button label="Add" variant="solid" color="primary"
      >+</minerva-icon-button
    >
  \`,
})
export class IconButtonBasicComponent {}
`,svelte:`<!-- IconButtonBasic.svelte -->

<minerva-icon-button label="Edit">✎</minerva-icon-button>
<minerva-icon-button label="Delete" color="danger">🗑</minerva-icon-button>
<minerva-icon-button label="Share" variant="outline">⤴</minerva-icon-button>
<minerva-icon-button label="Add" variant="solid" color="primary"
  >+</minerva-icon-button>
`,solid:`// IconButtonBasic.tsx

export default function IconButtonBasic() {
  return (
    <>
      <minerva-icon-button label="Edit">✎</minerva-icon-button>
      <minerva-icon-button label="Delete" color="danger">
        🗑
      </minerva-icon-button>
      <minerva-icon-button label="Share" variant="outline">
        ⤴
      </minerva-icon-button>
      <minerva-icon-button label="Add" variant="solid" color="primary">
        +
      </minerva-icon-button>
    </>
  );
}
`,html:`<minerva-icon-button label="Edit">✎</minerva-icon-button>
<minerva-icon-button label="Delete" color="danger">🗑</minerva-icon-button>
<minerva-icon-button label="Share" variant="outline">⤴</minerva-icon-button>
<minerva-icon-button label="Add" variant="solid" color="primary"
  >+</minerva-icon-button
>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};