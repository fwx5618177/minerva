import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- LoadingStateBasic.vue -->

<template>
  <div style="display: grid; gap: 16px">
    <minerva-loading-state></minerva-loading-state>
    <minerva-loading-state
      label="Loading your dashboard…"
    ></minerva-loading-state>
  </div>
</template>
`,angular:`// loading-state-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-loading-state-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px">
      <minerva-loading-state></minerva-loading-state>
      <minerva-loading-state
        label="Loading your dashboard…"
      ></minerva-loading-state>
    </div>
  \`,
})
export class LoadingStateBasicComponent {}
`,svelte:`<!-- LoadingStateBasic.svelte -->

<div style="display: grid; gap: 16px">
  <minerva-loading-state></minerva-loading-state>
  <minerva-loading-state
    label="Loading your dashboard…"
  ></minerva-loading-state>
</div>
`,solid:`// LoadingStateBasic.tsx

export default function LoadingStateBasic() {
  return (
    <div style="display: grid; gap: 16px">
      <minerva-loading-state></minerva-loading-state>
      <minerva-loading-state label="Loading your dashboard…"></minerva-loading-state>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px">
  <minerva-loading-state></minerva-loading-state>
  <minerva-loading-state
    label="Loading your dashboard…"
  ></minerva-loading-state>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};