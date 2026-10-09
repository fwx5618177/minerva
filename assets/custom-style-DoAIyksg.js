import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DividerCustomStyle.vue -->

<template>
  <div style="width: 100%">
    <minerva-divider
      style="--divider-color: #7c3aed"
      thickness="2"
    ></minerva-divider
    ><minerva-divider
      style="--divider-color: #16a34a"
      thickness="3"
      variant="dashed"
      length="50%"
    ></minerva-divider
    ><minerva-divider style="--divider-color: #7c3aed">Section</minerva-divider
    ><minerva-divider spacing="32" elevation></minerva-divider>
  </div>
</template>
`,angular:`// divider-custom-style.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-divider-custom-style",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="width: 100%">
      <minerva-divider
        style="--divider-color: #7c3aed"
        thickness="2"
      ></minerva-divider
      ><minerva-divider
        style="--divider-color: #16a34a"
        thickness="3"
        variant="dashed"
        length="50%"
      ></minerva-divider
      ><minerva-divider style="--divider-color: #7c3aed"
        >Section</minerva-divider
      ><minerva-divider spacing="32" elevation></minerva-divider>
    </div>
  \`,
})
export class DividerCustomStyleComponent {}
`,svelte:`<!-- DividerCustomStyle.svelte -->

<div style="width: 100%">
  <minerva-divider
    style="--divider-color: #7c3aed"
    thickness="2"
  ></minerva-divider><minerva-divider
    style="--divider-color: #16a34a"
    thickness="3"
    variant="dashed"
    length="50%"
  ></minerva-divider><minerva-divider style="--divider-color: #7c3aed">Section</minerva-divider><minerva-divider spacing="32" elevation></minerva-divider>
</div>
`,solid:`// DividerCustomStyle.tsx

export default function DividerCustomStyle() {
  return (
    <div style="width: 100%">
      <minerva-divider
        style="--divider-color: #7c3aed"
        thickness="2"
      ></minerva-divider>
      <minerva-divider
        style="--divider-color: #16a34a"
        thickness="3"
        variant="dashed"
        length="50%"
      ></minerva-divider>
      <minerva-divider style="--divider-color: #7c3aed">
        Section
      </minerva-divider>
      <minerva-divider spacing="32" elevation></minerva-divider>
    </div>
  );
}
`,html:`<div style="width: 100%">
  <minerva-divider
    style="--divider-color: #7c3aed"
    thickness="2"
  ></minerva-divider
  ><minerva-divider
    style="--divider-color: #16a34a"
    thickness="3"
    variant="dashed"
    length="50%"
  ></minerva-divider
  ><minerva-divider style="--divider-color: #7c3aed">Section</minerva-divider
  ><minerva-divider spacing="32" elevation></minerva-divider>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};