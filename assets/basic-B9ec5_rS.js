import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CardBasic.vue -->

<template>
  <minerva-card style="max-width: 360px">
    <minerva-card-header>
      <minerva-card-title>Project Atlas</minerva-card-title>
      <minerva-card-description>Updated 2 hours ago</minerva-card-description>
    </minerva-card-header>
    <minerva-card-content>
      Migrate the billing service to the new event pipeline before the end of
      the quarter.
    </minerva-card-content>
    <minerva-card-footer>
      <minerva-button size="small" variant="outline" color="neutral"
        >Details</minerva-button
      >
    </minerva-card-footer>
  </minerva-card>
</template>
`,angular:`// card-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-card-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-card style="max-width: 360px">
      <minerva-card-header>
        <minerva-card-title>Project Atlas</minerva-card-title>
        <minerva-card-description>Updated 2 hours ago</minerva-card-description>
      </minerva-card-header>
      <minerva-card-content>
        Migrate the billing service to the new event pipeline before the end of
        the quarter.
      </minerva-card-content>
      <minerva-card-footer>
        <minerva-button size="small" variant="outline" color="neutral"
          >Details</minerva-button
        >
      </minerva-card-footer>
    </minerva-card>
  \`,
})
export class CardBasicComponent {}
`,svelte:`<!-- CardBasic.svelte -->

<minerva-card style="max-width: 360px">
  <minerva-card-header>
    <minerva-card-title>Project Atlas</minerva-card-title>
    <minerva-card-description>Updated 2 hours ago</minerva-card-description>
  </minerva-card-header>
  <minerva-card-content>
    Migrate the billing service to the new event pipeline before the end of the
    quarter.
  </minerva-card-content>
  <minerva-card-footer>
    <minerva-button size="small" variant="outline" color="neutral"
      >Details</minerva-button>
  </minerva-card-footer>
</minerva-card>
`,solid:`// CardBasic.tsx

export default function CardBasic() {
  return (
    <minerva-card style="max-width: 360px">
      <minerva-card-header>
        <minerva-card-title>Project Atlas</minerva-card-title>
        <minerva-card-description>Updated 2 hours ago</minerva-card-description>
      </minerva-card-header>
      <minerva-card-content>
        Migrate the billing service to the new event pipeline before the end of
        the quarter.
      </minerva-card-content>
      <minerva-card-footer>
        <minerva-button size="small" variant="outline" color="neutral">
          Details
        </minerva-button>
      </minerva-card-footer>
    </minerva-card>
  );
}
`,html:`<minerva-card style="max-width: 360px">
  <minerva-card-header>
    <minerva-card-title>Project Atlas</minerva-card-title>
    <minerva-card-description>Updated 2 hours ago</minerva-card-description>
  </minerva-card-header>
  <minerva-card-content>
    Migrate the billing service to the new event pipeline before the end of the
    quarter.
  </minerva-card-content>
  <minerva-card-footer>
    <minerva-button size="small" variant="outline" color="neutral"
      >Details</minerva-button
    >
  </minerva-card-footer>
</minerva-card>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};