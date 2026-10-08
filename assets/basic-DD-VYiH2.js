import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TooltipBasic.vue -->

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; padding: 32px 0">
    <minerva-tooltip content="Shown on top (default)">
      <minerva-button variant="outline">Top</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Right side" placement="right" arrow>
      <minerva-button variant="outline">Right</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip
      content="Bottom, start aligned"
      placement="bottom-start"
      arrow
    >
      <minerva-button variant="outline">Bottom start</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Left side" placement="left" arrow>
      <minerva-button variant="outline">Left</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Disabled tooltips never open" disabled>
      <minerva-button variant="outline">Disabled tooltip</minerva-button>
    </minerva-tooltip>
  </div>
</template>
`,angular:`// tooltip-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-tooltip-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 8px; padding: 32px 0">
      <minerva-tooltip content="Shown on top (default)">
        <minerva-button variant="outline">Top</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip content="Right side" placement="right" arrow>
        <minerva-button variant="outline">Right</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip
        content="Bottom, start aligned"
        placement="bottom-start"
        arrow
      >
        <minerva-button variant="outline">Bottom start</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip content="Left side" placement="left" arrow>
        <minerva-button variant="outline">Left</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip content="Disabled tooltips never open" disabled>
        <minerva-button variant="outline">Disabled tooltip</minerva-button>
      </minerva-tooltip>
    </div>
  \`,
})
export class TooltipBasicComponent {}
`,svelte:`<!-- TooltipBasic.svelte -->

<div style="display: flex; flex-wrap: wrap; gap: 8px; padding: 32px 0">
  <minerva-tooltip content="Shown on top (default)">
    <minerva-button variant="outline">Top</minerva-button>
  </minerva-tooltip>
  <minerva-tooltip content="Right side" placement="right" arrow>
    <minerva-button variant="outline">Right</minerva-button>
  </minerva-tooltip>
  <minerva-tooltip
    content="Bottom, start aligned"
    placement="bottom-start"
    arrow
  >
    <minerva-button variant="outline">Bottom start</minerva-button>
  </minerva-tooltip>
  <minerva-tooltip content="Left side" placement="left" arrow>
    <minerva-button variant="outline">Left</minerva-button>
  </minerva-tooltip>
  <minerva-tooltip content="Disabled tooltips never open" disabled>
    <minerva-button variant="outline">Disabled tooltip</minerva-button>
  </minerva-tooltip>
</div>
`,solid:`// TooltipBasic.tsx

export default function TooltipBasic() {
  return (
    <div style="display: flex; flex-wrap: wrap; gap: 8px; padding: 32px 0">
      <minerva-tooltip content="Shown on top (default)">
        <minerva-button variant="outline">Top</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip content="Right side" placement="right" arrow>
        <minerva-button variant="outline">Right</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip
        content="Bottom, start aligned"
        placement="bottom-start"
        arrow
      >
        <minerva-button variant="outline">Bottom start</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip content="Left side" placement="left" arrow>
        <minerva-button variant="outline">Left</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip content="Disabled tooltips never open" disabled>
        <minerva-button variant="outline">Disabled tooltip</minerva-button>
      </minerva-tooltip>
    </div>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 8px; padding: 32px 0">
  <minerva-tooltip content="Shown on top (default)">
    <minerva-button variant="outline">Top</minerva-button>
  </minerva-tooltip>
  <minerva-tooltip content="Right side" placement="right" arrow>
    <minerva-button variant="outline">Right</minerva-button>
  </minerva-tooltip>
  <minerva-tooltip
    content="Bottom, start aligned"
    placement="bottom-start"
    arrow
  >
    <minerva-button variant="outline">Bottom start</minerva-button>
  </minerva-tooltip>
  <minerva-tooltip content="Left side" placement="left" arrow>
    <minerva-button variant="outline">Left</minerva-button>
  </minerva-tooltip>
  <minerva-tooltip content="Disabled tooltips never open" disabled>
    <minerva-button variant="outline">Disabled tooltip</minerva-button>
  </minerva-tooltip>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};