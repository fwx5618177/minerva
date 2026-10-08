import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- PopoverBasic.vue -->

<template>
  <minerva-popover label="Share link" arrow>
    <minerva-button slot="trigger" variant="outline">Share</minerva-button>
    <div style="display: grid; gap: 8px; width: 240px">
      <strong>Share this document</strong>
      <input value="https://minerva.dev/d/42" readonly aria-label="Link" />
      <div style="display: flex; justify-content: end; gap: 8px">
        <minerva-button data-popover-close size="small" variant="ghost"
          >Done</minerva-button
        >
      </div>
    </div>
  </minerva-popover>
</template>
`,angular:`// popover-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-popover-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-popover label="Share link" arrow>
      <minerva-button slot="trigger" variant="outline">Share</minerva-button>
      <div style="display: grid; gap: 8px; width: 240px">
        <strong>Share this document</strong>
        <input value="https://minerva.dev/d/42" readonly aria-label="Link" />
        <div style="display: flex; justify-content: end; gap: 8px">
          <minerva-button data-popover-close size="small" variant="ghost"
            >Done</minerva-button
          >
        </div>
      </div>
    </minerva-popover>
  \`,
})
export class PopoverBasicComponent {}
`,svelte:`<!-- PopoverBasic.svelte -->

<minerva-popover label="Share link" arrow>
  <minerva-button slot="trigger" variant="outline">Share</minerva-button>
  <div style="display: grid; gap: 8px; width: 240px">
    <strong>Share this document</strong>
    <input value="https://minerva.dev/d/42" readonly aria-label="Link" />
    <div style="display: flex; justify-content: end; gap: 8px">
      <minerva-button data-popover-close size="small" variant="ghost"
        >Done</minerva-button>
    </div>
  </div>
</minerva-popover>
`,solid:`// PopoverBasic.tsx

export default function PopoverBasic() {
  return (
    <minerva-popover label="Share link" arrow>
      <minerva-button slot="trigger" variant="outline">
        Share
      </minerva-button>
      <div style="display: grid; gap: 8px; width: 240px">
        <strong>Share this document</strong>
        <input value="https://minerva.dev/d/42" readonly aria-label="Link" />
        <div style="display: flex; justify-content: end; gap: 8px">
          <minerva-button data-popover-close size="small" variant="ghost">
            Done
          </minerva-button>
        </div>
      </div>
    </minerva-popover>
  );
}
`,html:`<minerva-popover label="Share link" arrow>
  <minerva-button slot="trigger" variant="outline">Share</minerva-button>
  <div style="display: grid; gap: 8px; width: 240px">
    <strong>Share this document</strong>
    <input value="https://minerva.dev/d/42" readonly aria-label="Link" />
    <div style="display: flex; justify-content: end; gap: 8px">
      <minerva-button data-popover-close size="small" variant="ghost"
        >Done</minerva-button
      >
    </div>
  </div>
</minerva-popover>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};