import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ThemePalettePalette.vue -->

<template>
  <minerva-config theme="light" palette="tech">
    <minerva-card variant="outline" padding="medium" style="max-width: 520px">
      <minerva-card-content style="display: grid; gap: 12px">
        <minerva-palette-toggle show-default></minerva-palette-toggle>
        <minerva-theme-toggle hide-system></minerva-theme-toggle>
        <div style="display: flex; flex-wrap: wrap; gap: 8px">
          <minerva-button>Primary</minerva-button>
          <minerva-button variant="outline">Outline</minerva-button>
          <minerva-button color="success" variant="ghost"
            >Success</minerva-button
          >
        </div>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
</template>
`,angular:`// theme-palette-palette.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-theme-palette-palette",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-config theme="light" palette="tech">
      <minerva-card variant="outline" padding="medium" style="max-width: 520px">
        <minerva-card-content style="display: grid; gap: 12px">
          <minerva-palette-toggle show-default></minerva-palette-toggle>
          <minerva-theme-toggle hide-system></minerva-theme-toggle>
          <div style="display: flex; flex-wrap: wrap; gap: 8px">
            <minerva-button>Primary</minerva-button>
            <minerva-button variant="outline">Outline</minerva-button>
            <minerva-button color="success" variant="ghost"
              >Success</minerva-button
            >
          </div>
        </minerva-card-content>
      </minerva-card>
    </minerva-config>
  \`,
})
export class ThemePalettePaletteComponent {}
`,svelte:`<!-- ThemePalettePalette.svelte -->

<minerva-config theme="light" palette="tech">
  <minerva-card variant="outline" padding="medium" style="max-width: 520px">
    <minerva-card-content style="display: grid; gap: 12px">
      <minerva-palette-toggle show-default></minerva-palette-toggle>
      <minerva-theme-toggle hide-system></minerva-theme-toggle>
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-button>Primary</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
        <minerva-button color="success" variant="ghost">Success</minerva-button>
      </div>
    </minerva-card-content>
  </minerva-card>
</minerva-config>
`,solid:`// ThemePalettePalette.tsx

export default function ThemePalettePalette() {
  return (
    <minerva-config theme="light" palette="tech">
      <minerva-card variant="outline" padding="medium" style="max-width: 520px">
        <minerva-card-content style="display: grid; gap: 12px">
          <minerva-palette-toggle show-default></minerva-palette-toggle>
          <minerva-theme-toggle hide-system></minerva-theme-toggle>
          <div style="display: flex; flex-wrap: wrap; gap: 8px">
            <minerva-button>Primary</minerva-button>
            <minerva-button variant="outline">Outline</minerva-button>
            <minerva-button color="success" variant="ghost">
              Success
            </minerva-button>
          </div>
        </minerva-card-content>
      </minerva-card>
    </minerva-config>
  );
}
`,html:`<minerva-config theme="light" palette="tech">
  <minerva-card variant="outline" padding="medium" style="max-width: 520px">
    <minerva-card-content style="display: grid; gap: 12px">
      <minerva-palette-toggle show-default></minerva-palette-toggle>
      <minerva-theme-toggle hide-system></minerva-theme-toggle>
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-button>Primary</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
        <minerva-button color="success" variant="ghost">Success</minerva-button>
      </div>
    </minerva-card-content>
  </minerva-card>
</minerva-config>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};