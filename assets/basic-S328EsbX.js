import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ThemePaletteBasic.vue -->

<template>
  <minerva-config theme="light">
    <minerva-card variant="outline" padding="medium" style="max-width: 420px">
      <minerva-card-header>
        <minerva-card-title>Appearance</minerva-card-title>
        <minerva-card-description
          >The toggle drives the theme of the closest minerva-config
          only.</minerva-card-description
        >
      </minerva-card-header>
      <minerva-card-content>
        <minerva-theme-toggle></minerva-theme-toggle>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
</template>
`,angular:`// theme-palette-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-theme-palette-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-config theme="light">
      <minerva-card variant="outline" padding="medium" style="max-width: 420px">
        <minerva-card-header>
          <minerva-card-title>Appearance</minerva-card-title>
          <minerva-card-description
            >The toggle drives the theme of the closest minerva-config
            only.</minerva-card-description
          >
        </minerva-card-header>
        <minerva-card-content>
          <minerva-theme-toggle></minerva-theme-toggle>
        </minerva-card-content>
      </minerva-card>
    </minerva-config>
  \`,
})
export class ThemePaletteBasicComponent {}
`,svelte:`<!-- ThemePaletteBasic.svelte -->

<minerva-config theme="light">
  <minerva-card variant="outline" padding="medium" style="max-width: 420px">
    <minerva-card-header>
      <minerva-card-title>Appearance</minerva-card-title>
      <minerva-card-description
        >The toggle drives the theme of the closest minerva-config
        only.</minerva-card-description>
    </minerva-card-header>
    <minerva-card-content>
      <minerva-theme-toggle></minerva-theme-toggle>
    </minerva-card-content>
  </minerva-card>
</minerva-config>
`,solid:`// ThemePaletteBasic.tsx

export default function ThemePaletteBasic() {
  return (
    <minerva-config theme="light">
      <minerva-card variant="outline" padding="medium" style="max-width: 420px">
        <minerva-card-header>
          <minerva-card-title>Appearance</minerva-card-title>
          <minerva-card-description>
            The toggle drives the theme of the closest minerva-config only.
          </minerva-card-description>
        </minerva-card-header>
        <minerva-card-content>
          <minerva-theme-toggle></minerva-theme-toggle>
        </minerva-card-content>
      </minerva-card>
    </minerva-config>
  );
}
`,html:`<minerva-config theme="light">
  <minerva-card variant="outline" padding="medium" style="max-width: 420px">
    <minerva-card-header>
      <minerva-card-title>Appearance</minerva-card-title>
      <minerva-card-description
        >The toggle drives the theme of the closest minerva-config
        only.</minerva-card-description
      >
    </minerva-card-header>
    <minerva-card-content>
      <minerva-theme-toggle></minerva-theme-toggle>
    </minerva-card-content>
  </minerva-card>
</minerva-config>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};