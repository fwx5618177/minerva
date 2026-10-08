import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ConfigProviderPaletteDesign.vue -->

<template>
  <div
    style="
      display: grid;
      gap: 12px;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    "
  >
    <minerva-config palette="editorial">
      <minerva-card variant="outline" padding="medium">
        <minerva-card-header>
          <minerva-card-title>palette="editorial"</minerva-card-title>
        </minerva-card-header>
        <minerva-card-content>
          <minerva-button>Primary</minerva-button>
          <minerva-button variant="outline">Outline</minerva-button>
        </minerva-card-content>
      </minerva-card>
    </minerva-config>
    <minerva-config palette="tech" theme="dark">
      <minerva-card variant="outline" padding="medium">
        <minerva-card-header>
          <minerva-card-title>palette="tech" + dark</minerva-card-title>
        </minerva-card-header>
        <minerva-card-content>
          <minerva-button>Primary</minerva-button>
          <minerva-button variant="outline">Outline</minerva-button>
        </minerva-card-content>
      </minerva-card>
    </minerva-config>
    <minerva-config design="compact" radius="none">
      <minerva-card variant="outline" padding="medium">
        <minerva-card-header>
          <minerva-card-title
            >design="compact" radius="none"</minerva-card-title
          >
        </minerva-card-header>
        <minerva-card-content>
          <minerva-button>Primary</minerva-button>
          <minerva-button variant="outline">Outline</minerva-button>
        </minerva-card-content>
      </minerva-card>
    </minerva-config>
    <minerva-config density="comfortable" radius="large" font-scale="large">
      <minerva-card variant="outline" padding="medium">
        <minerva-card-header>
          <minerva-card-title>Comfortable, large</minerva-card-title>
        </minerva-card-header>
        <minerva-card-content>
          <minerva-button>Primary</minerva-button>
          <minerva-button variant="outline">Outline</minerva-button>
        </minerva-card-content>
      </minerva-card>
    </minerva-config>
  </div>
</template>
`,angular:`// config-provider-palette-design.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-config-provider-palette-design",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      style="
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      "
    >
      <minerva-config palette="editorial">
        <minerva-card variant="outline" padding="medium">
          <minerva-card-header>
            <minerva-card-title>palette="editorial"</minerva-card-title>
          </minerva-card-header>
          <minerva-card-content>
            <minerva-button>Primary</minerva-button>
            <minerva-button variant="outline">Outline</minerva-button>
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
      <minerva-config palette="tech" theme="dark">
        <minerva-card variant="outline" padding="medium">
          <minerva-card-header>
            <minerva-card-title>palette="tech" + dark</minerva-card-title>
          </minerva-card-header>
          <minerva-card-content>
            <minerva-button>Primary</minerva-button>
            <minerva-button variant="outline">Outline</minerva-button>
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
      <minerva-config design="compact" radius="none">
        <minerva-card variant="outline" padding="medium">
          <minerva-card-header>
            <minerva-card-title
              >design="compact" radius="none"</minerva-card-title
            >
          </minerva-card-header>
          <minerva-card-content>
            <minerva-button>Primary</minerva-button>
            <minerva-button variant="outline">Outline</minerva-button>
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
      <minerva-config density="comfortable" radius="large" font-scale="large">
        <minerva-card variant="outline" padding="medium">
          <minerva-card-header>
            <minerva-card-title>Comfortable, large</minerva-card-title>
          </minerva-card-header>
          <minerva-card-content>
            <minerva-button>Primary</minerva-button>
            <minerva-button variant="outline">Outline</minerva-button>
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
    </div>
  \`,
})
export class ConfigProviderPaletteDesignComponent {}
`,svelte:`<!-- ConfigProviderPaletteDesign.svelte -->

<div
  style="
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  "
>
  <minerva-config palette="editorial">
    <minerva-card variant="outline" padding="medium">
      <minerva-card-header>
        <minerva-card-title>palette="editorial"</minerva-card-title>
      </minerva-card-header>
      <minerva-card-content>
        <minerva-button>Primary</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
  <minerva-config palette="tech" theme="dark">
    <minerva-card variant="outline" padding="medium">
      <minerva-card-header>
        <minerva-card-title>palette="tech" + dark</minerva-card-title>
      </minerva-card-header>
      <minerva-card-content>
        <minerva-button>Primary</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
  <minerva-config design="compact" radius="none">
    <minerva-card variant="outline" padding="medium">
      <minerva-card-header>
        <minerva-card-title>design="compact" radius="none"</minerva-card-title>
      </minerva-card-header>
      <minerva-card-content>
        <minerva-button>Primary</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
  <minerva-config density="comfortable" radius="large" font-scale="large">
    <minerva-card variant="outline" padding="medium">
      <minerva-card-header>
        <minerva-card-title>Comfortable, large</minerva-card-title>
      </minerva-card-header>
      <minerva-card-content>
        <minerva-button>Primary</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
</div>
`,solid:`// ConfigProviderPaletteDesign.tsx

export default function ConfigProviderPaletteDesign() {
  return (
    <div
      style="
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      "
    >
      <minerva-config palette="editorial">
        <minerva-card variant="outline" padding="medium">
          <minerva-card-header>
            <minerva-card-title>palette="editorial"</minerva-card-title>
          </minerva-card-header>
          <minerva-card-content>
            <minerva-button>Primary</minerva-button>
            <minerva-button variant="outline">Outline</minerva-button>
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
      <minerva-config palette="tech" theme="dark">
        <minerva-card variant="outline" padding="medium">
          <minerva-card-header>
            <minerva-card-title>palette="tech" + dark</minerva-card-title>
          </minerva-card-header>
          <minerva-card-content>
            <minerva-button>Primary</minerva-button>
            <minerva-button variant="outline">Outline</minerva-button>
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
      <minerva-config design="compact" radius="none">
        <minerva-card variant="outline" padding="medium">
          <minerva-card-header>
            <minerva-card-title>
              design="compact" radius="none"
            </minerva-card-title>
          </minerva-card-header>
          <minerva-card-content>
            <minerva-button>Primary</minerva-button>
            <minerva-button variant="outline">Outline</minerva-button>
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
      <minerva-config density="comfortable" radius="large" font-scale="large">
        <minerva-card variant="outline" padding="medium">
          <minerva-card-header>
            <minerva-card-title>Comfortable, large</minerva-card-title>
          </minerva-card-header>
          <minerva-card-content>
            <minerva-button>Primary</minerva-button>
            <minerva-button variant="outline">Outline</minerva-button>
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
    </div>
  );
}
`,html:`<div
  style="
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  "
>
  <minerva-config palette="editorial">
    <minerva-card variant="outline" padding="medium">
      <minerva-card-header>
        <minerva-card-title>palette="editorial"</minerva-card-title>
      </minerva-card-header>
      <minerva-card-content>
        <minerva-button>Primary</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
  <minerva-config palette="tech" theme="dark">
    <minerva-card variant="outline" padding="medium">
      <minerva-card-header>
        <minerva-card-title>palette="tech" + dark</minerva-card-title>
      </minerva-card-header>
      <minerva-card-content>
        <minerva-button>Primary</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
  <minerva-config design="compact" radius="none">
    <minerva-card variant="outline" padding="medium">
      <minerva-card-header>
        <minerva-card-title>design="compact" radius="none"</minerva-card-title>
      </minerva-card-header>
      <minerva-card-content>
        <minerva-button>Primary</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
  <minerva-config density="comfortable" radius="large" font-scale="large">
    <minerva-card variant="outline" padding="medium">
      <minerva-card-header>
        <minerva-card-title>Comfortable, large</minerva-card-title>
      </minerva-card-header>
      <minerva-card-content>
        <minerva-button>Primary</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};