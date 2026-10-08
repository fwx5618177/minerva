import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CardPadded.vue -->

<template>
  <div
    style="
      display: grid;
      gap: 12px;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    "
  >
    <minerva-card padding="large" variant="outline">
      <minerva-card-header>
        <minerva-card-title as="h4">Padded layout</minerva-card-title>
        <minerva-card-description
          >The card pads itself; sections sit flush and the footer gets a
          rule.</minerva-card-description
        >
      </minerva-card-header>
      <minerva-card-content animation="fadeIn">
        Content fades in when the card is rendered.
      </minerva-card-content>
      <minerva-card-footer>
        <minerva-button size="small">Continue</minerva-button>
      </minerva-card-footer>
    </minerva-card>
    <minerva-card>
      <minerva-card-header padding="small">
        <minerva-card-title as="h4">Section padding</minerva-card-title>
      </minerva-card-header>
      <minerva-card-content padding="large" animation="slideIn">
        Each section can override its own spacing.
      </minerva-card-content>
      <minerva-card-footer padding="none">
        <minerva-button size="small" variant="ghost" full-width
          >Flush footer</minerva-button
        >
      </minerva-card-footer>
    </minerva-card>
  </div>
</template>
`,angular:`// card-padded.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-card-padded",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      style="
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      "
    >
      <minerva-card padding="large" variant="outline">
        <minerva-card-header>
          <minerva-card-title as="h4">Padded layout</minerva-card-title>
          <minerva-card-description
            >The card pads itself; sections sit flush and the footer gets a
            rule.</minerva-card-description
          >
        </minerva-card-header>
        <minerva-card-content animation="fadeIn">
          Content fades in when the card is rendered.
        </minerva-card-content>
        <minerva-card-footer>
          <minerva-button size="small">Continue</minerva-button>
        </minerva-card-footer>
      </minerva-card>
      <minerva-card>
        <minerva-card-header padding="small">
          <minerva-card-title as="h4">Section padding</minerva-card-title>
        </minerva-card-header>
        <minerva-card-content padding="large" animation="slideIn">
          Each section can override its own spacing.
        </minerva-card-content>
        <minerva-card-footer padding="none">
          <minerva-button size="small" variant="ghost" full-width
            >Flush footer</minerva-button
          >
        </minerva-card-footer>
      </minerva-card>
    </div>
  \`,
})
export class CardPaddedComponent {}
`,svelte:`<!-- CardPadded.svelte -->

<div
  style="
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  "
>
  <minerva-card padding="large" variant="outline">
    <minerva-card-header>
      <minerva-card-title as="h4">Padded layout</minerva-card-title>
      <minerva-card-description
        >The card pads itself; sections sit flush and the footer gets a
        rule.</minerva-card-description>
    </minerva-card-header>
    <minerva-card-content animation="fadeIn">
      Content fades in when the card is rendered.
    </minerva-card-content>
    <minerva-card-footer>
      <minerva-button size="small">Continue</minerva-button>
    </minerva-card-footer>
  </minerva-card>
  <minerva-card>
    <minerva-card-header padding="small">
      <minerva-card-title as="h4">Section padding</minerva-card-title>
    </minerva-card-header>
    <minerva-card-content padding="large" animation="slideIn">
      Each section can override its own spacing.
    </minerva-card-content>
    <minerva-card-footer padding="none">
      <minerva-button size="small" variant="ghost" full-width
        >Flush footer</minerva-button>
    </minerva-card-footer>
  </minerva-card>
</div>
`,solid:`// CardPadded.tsx

export default function CardPadded() {
  return (
    <div
      style="
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      "
    >
      <minerva-card padding="large" variant="outline">
        <minerva-card-header>
          <minerva-card-title as="h4">Padded layout</minerva-card-title>
          <minerva-card-description>
            The card pads itself; sections sit flush and the footer gets a rule.
          </minerva-card-description>
        </minerva-card-header>
        <minerva-card-content animation="fadeIn">
          Content fades in when the card is rendered.
        </minerva-card-content>
        <minerva-card-footer>
          <minerva-button size="small">Continue</minerva-button>
        </minerva-card-footer>
      </minerva-card>
      <minerva-card>
        <minerva-card-header padding="small">
          <minerva-card-title as="h4">Section padding</minerva-card-title>
        </minerva-card-header>
        <minerva-card-content padding="large" animation="slideIn">
          Each section can override its own spacing.
        </minerva-card-content>
        <minerva-card-footer padding="none">
          <minerva-button size="small" variant="ghost" full-width>
            Flush footer
          </minerva-button>
        </minerva-card-footer>
      </minerva-card>
    </div>
  );
}
`,html:`<div
  style="
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  "
>
  <minerva-card padding="large" variant="outline">
    <minerva-card-header>
      <minerva-card-title as="h4">Padded layout</minerva-card-title>
      <minerva-card-description
        >The card pads itself; sections sit flush and the footer gets a
        rule.</minerva-card-description
      >
    </minerva-card-header>
    <minerva-card-content animation="fadeIn">
      Content fades in when the card is rendered.
    </minerva-card-content>
    <minerva-card-footer>
      <minerva-button size="small">Continue</minerva-button>
    </minerva-card-footer>
  </minerva-card>
  <minerva-card>
    <minerva-card-header padding="small">
      <minerva-card-title as="h4">Section padding</minerva-card-title>
    </minerva-card-header>
    <minerva-card-content padding="large" animation="slideIn">
      Each section can override its own spacing.
    </minerva-card-content>
    <minerva-card-footer padding="none">
      <minerva-button size="small" variant="ghost" full-width
        >Flush footer</minerva-button
      >
    </minerva-card-footer>
  </minerva-card>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};