import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ConfigProviderBasic.vue -->

<template>
  <div
    style="
      display: grid;
      gap: 12px;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    "
  >
    <minerva-config theme="light">
      <minerva-card variant="outline" padding="medium">
        <minerva-card-header>
          <minerva-card-title>Light scope</minerva-card-title>
        </minerva-card-header>
        <minerva-card-content>
          <minerva-button>Primary</minerva-button>
        </minerva-card-content>
      </minerva-card>
    </minerva-config>
    <minerva-config theme="dark">
      <minerva-card variant="outline" padding="medium">
        <minerva-card-header>
          <minerva-card-title>Dark scope</minerva-card-title>
        </minerva-card-header>
        <minerva-card-content>
          <minerva-button>Primary</minerva-button>
        </minerva-card-content>
      </minerva-card>
    </minerva-config>
  </div>
</template>
`,angular:`// config-provider-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-config-provider-basic",
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
      <minerva-config theme="light">
        <minerva-card variant="outline" padding="medium">
          <minerva-card-header>
            <minerva-card-title>Light scope</minerva-card-title>
          </minerva-card-header>
          <minerva-card-content>
            <minerva-button>Primary</minerva-button>
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
      <minerva-config theme="dark">
        <minerva-card variant="outline" padding="medium">
          <minerva-card-header>
            <minerva-card-title>Dark scope</minerva-card-title>
          </minerva-card-header>
          <minerva-card-content>
            <minerva-button>Primary</minerva-button>
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
    </div>
  \`,
})
export class ConfigProviderBasicComponent {}
`,svelte:`<!-- ConfigProviderBasic.svelte -->

<div
  style="
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  "
>
  <minerva-config theme="light">
    <minerva-card variant="outline" padding="medium">
      <minerva-card-header>
        <minerva-card-title>Light scope</minerva-card-title>
      </minerva-card-header>
      <minerva-card-content>
        <minerva-button>Primary</minerva-button>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
  <minerva-config theme="dark">
    <minerva-card variant="outline" padding="medium">
      <minerva-card-header>
        <minerva-card-title>Dark scope</minerva-card-title>
      </minerva-card-header>
      <minerva-card-content>
        <minerva-button>Primary</minerva-button>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
</div>
`,solid:`// ConfigProviderBasic.tsx

export default function ConfigProviderBasic() {
  return (
    <div
      style="
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      "
    >
      <minerva-config theme="light">
        <minerva-card variant="outline" padding="medium">
          <minerva-card-header>
            <minerva-card-title>Light scope</minerva-card-title>
          </minerva-card-header>
          <minerva-card-content>
            <minerva-button>Primary</minerva-button>
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
      <minerva-config theme="dark">
        <minerva-card variant="outline" padding="medium">
          <minerva-card-header>
            <minerva-card-title>Dark scope</minerva-card-title>
          </minerva-card-header>
          <minerva-card-content>
            <minerva-button>Primary</minerva-button>
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
  <minerva-config theme="light">
    <minerva-card variant="outline" padding="medium">
      <minerva-card-header>
        <minerva-card-title>Light scope</minerva-card-title>
      </minerva-card-header>
      <minerva-card-content>
        <minerva-button>Primary</minerva-button>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
  <minerva-config theme="dark">
    <minerva-card variant="outline" padding="medium">
      <minerva-card-header>
        <minerva-card-title>Dark scope</minerva-card-title>
      </minerva-card-header>
      <minerva-card-content>
        <minerva-button>Primary</minerva-button>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};