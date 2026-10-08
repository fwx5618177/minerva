import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TooltipProvider.vue -->

<template>
  <minerva-tooltip-provider enter-delay="600" skip-delay="500">
    <div
      role="toolbar"
      aria-label="Formatting"
      style="display: flex; gap: 4px; padding: 32px 0"
    >
      <minerva-tooltip content="Bold (Ctrl+B)">
        <minerva-button variant="ghost" aria-label="Bold"
          ><b>B</b></minerva-button
        >
      </minerva-tooltip>
      <minerva-tooltip content="Italic (Ctrl+I)">
        <minerva-button variant="ghost" aria-label="Italic"
          ><i>I</i></minerva-button
        >
      </minerva-tooltip>
      <minerva-tooltip content="Underline (Ctrl+U)">
        <minerva-button variant="ghost" aria-label="Underline"
          ><u>U</u></minerva-button
        >
      </minerva-tooltip>
      <minerva-tooltip placement="bottom" arrow leave-delay="200">
        <minerva-button variant="ghost">Rich</minerva-button>
        <span slot="content"
          ><strong>Rich content</strong><br />Use the <code>content</code> slot
          for markup.</span
        >
      </minerva-tooltip>
    </div>
  </minerva-tooltip-provider>
</template>
`,angular:`// tooltip-provider.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-tooltip-provider",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-tooltip-provider enter-delay="600" skip-delay="500">
      <div
        role="toolbar"
        aria-label="Formatting"
        style="display: flex; gap: 4px; padding: 32px 0"
      >
        <minerva-tooltip content="Bold (Ctrl+B)">
          <minerva-button variant="ghost" aria-label="Bold"
            ><b>B</b></minerva-button
          >
        </minerva-tooltip>
        <minerva-tooltip content="Italic (Ctrl+I)">
          <minerva-button variant="ghost" aria-label="Italic"
            ><i>I</i></minerva-button
          >
        </minerva-tooltip>
        <minerva-tooltip content="Underline (Ctrl+U)">
          <minerva-button variant="ghost" aria-label="Underline"
            ><u>U</u></minerva-button
          >
        </minerva-tooltip>
        <minerva-tooltip placement="bottom" arrow leave-delay="200">
          <minerva-button variant="ghost">Rich</minerva-button>
          <span slot="content"
            ><strong>Rich content</strong><br />Use the
            <code>content</code> slot for markup.</span
          >
        </minerva-tooltip>
      </div>
    </minerva-tooltip-provider>
  \`,
})
export class TooltipProviderComponent {}
`,svelte:`<!-- TooltipProvider.svelte -->

<minerva-tooltip-provider enter-delay="600" skip-delay="500">
  <div
    role="toolbar"
    aria-label="Formatting"
    style="display: flex; gap: 4px; padding: 32px 0"
  >
    <minerva-tooltip content="Bold (Ctrl+B)">
      <minerva-button variant="ghost" aria-label="Bold"
        ><b>B</b></minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Italic (Ctrl+I)">
      <minerva-button variant="ghost" aria-label="Italic"
        ><i>I</i></minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Underline (Ctrl+U)">
      <minerva-button variant="ghost" aria-label="Underline"
        ><u>U</u></minerva-button>
    </minerva-tooltip>
    <minerva-tooltip placement="bottom" arrow leave-delay="200">
      <minerva-button variant="ghost">Rich</minerva-button>
      <span slot="content"
        ><strong>Rich content</strong><br />Use the <code>content</code> slot
        for markup.</span>
    </minerva-tooltip>
  </div>
</minerva-tooltip-provider>
`,solid:`// TooltipProvider.tsx

export default function TooltipProvider() {
  return (
    <minerva-tooltip-provider enter-delay="600" skip-delay="500">
      <div
        role="toolbar"
        aria-label="Formatting"
        style="display: flex; gap: 4px; padding: 32px 0"
      >
        <minerva-tooltip content="Bold (Ctrl+B)">
          <minerva-button variant="ghost" aria-label="Bold">
            <b>B</b>
          </minerva-button>
        </minerva-tooltip>
        <minerva-tooltip content="Italic (Ctrl+I)">
          <minerva-button variant="ghost" aria-label="Italic">
            <i>I</i>
          </minerva-button>
        </minerva-tooltip>
        <minerva-tooltip content="Underline (Ctrl+U)">
          <minerva-button variant="ghost" aria-label="Underline">
            <u>U</u>
          </minerva-button>
        </minerva-tooltip>
        <minerva-tooltip placement="bottom" arrow leave-delay="200">
          <minerva-button variant="ghost">Rich</minerva-button>
          <span slot="content">
            <strong>Rich content</strong>
            <br />
            Use the <code>content</code> slot for markup.
          </span>
        </minerva-tooltip>
      </div>
    </minerva-tooltip-provider>
  );
}
`,html:`<minerva-tooltip-provider enter-delay="600" skip-delay="500">
  <div
    role="toolbar"
    aria-label="Formatting"
    style="display: flex; gap: 4px; padding: 32px 0"
  >
    <minerva-tooltip content="Bold (Ctrl+B)">
      <minerva-button variant="ghost" aria-label="Bold"
        ><b>B</b></minerva-button
      >
    </minerva-tooltip>
    <minerva-tooltip content="Italic (Ctrl+I)">
      <minerva-button variant="ghost" aria-label="Italic"
        ><i>I</i></minerva-button
      >
    </minerva-tooltip>
    <minerva-tooltip content="Underline (Ctrl+U)">
      <minerva-button variant="ghost" aria-label="Underline"
        ><u>U</u></minerva-button
      >
    </minerva-tooltip>
    <minerva-tooltip placement="bottom" arrow leave-delay="200">
      <minerva-button variant="ghost">Rich</minerva-button>
      <span slot="content"
        ><strong>Rich content</strong><br />Use the <code>content</code> slot
        for markup.</span
      >
    </minerva-tooltip>
  </div>
</minerva-tooltip-provider>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};