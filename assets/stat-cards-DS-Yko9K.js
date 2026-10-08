import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- PageStatCards.vue -->

<template>
  <minerva-page-section
    heading="This month"
    description="Compared with last month."
  >
    <span slot="icon">📈</span>
    <minerva-responsive-grid columns="1 2 3" gap="3">
      <minerva-stat-card
        label="Revenue"
        value="$48,200"
        description="+12% vs. last month"
      >
        <span slot="icon">💰</span>
      </minerva-stat-card>
      <minerva-stat-card label="Active users" value="3,104">
        <span slot="icon">👥</span>
      </minerva-stat-card>
      <minerva-stat-card label="Churn">
        <span slot="value">1.8<small>%</small></span>
        <span slot="description">Down from <strong>2.4%</strong></span>
      </minerva-stat-card>
    </minerva-responsive-grid>
  </minerva-page-section>
</template>
`,angular:`// page-stat-cards.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-page-stat-cards",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-page-section
      heading="This month"
      description="Compared with last month."
    >
      <span slot="icon">📈</span>
      <minerva-responsive-grid columns="1 2 3" gap="3">
        <minerva-stat-card
          label="Revenue"
          value="$48,200"
          description="+12% vs. last month"
        >
          <span slot="icon">💰</span>
        </minerva-stat-card>
        <minerva-stat-card label="Active users" value="3,104">
          <span slot="icon">👥</span>
        </minerva-stat-card>
        <minerva-stat-card label="Churn">
          <span slot="value">1.8<small>%</small></span>
          <span slot="description">Down from <strong>2.4%</strong></span>
        </minerva-stat-card>
      </minerva-responsive-grid>
    </minerva-page-section>
  \`,
})
export class PageStatCardsComponent {}
`,svelte:`<!-- PageStatCards.svelte -->

<minerva-page-section
  heading="This month"
  description="Compared with last month."
>
  <span slot="icon">📈</span>
  <minerva-responsive-grid columns="1 2 3" gap="3">
    <minerva-stat-card
      label="Revenue"
      value="$48,200"
      description="+12% vs. last month"
    >
      <span slot="icon">💰</span>
    </minerva-stat-card>
    <minerva-stat-card label="Active users" value="3,104">
      <span slot="icon">👥</span>
    </minerva-stat-card>
    <minerva-stat-card label="Churn">
      <span slot="value">1.8<small>%</small></span>
      <span slot="description">Down from <strong>2.4%</strong></span>
    </minerva-stat-card>
  </minerva-responsive-grid>
</minerva-page-section>
`,solid:`// PageStatCards.tsx

export default function PageStatCards() {
  return (
    <minerva-page-section
      heading="This month"
      description="Compared with last month."
    >
      <span slot="icon">📈</span>
      <minerva-responsive-grid columns="1 2 3" gap="3">
        <minerva-stat-card
          label="Revenue"
          value="$48,200"
          description="+12% vs. last month"
        >
          <span slot="icon">💰</span>
        </minerva-stat-card>
        <minerva-stat-card label="Active users" value="3,104">
          <span slot="icon">👥</span>
        </minerva-stat-card>
        <minerva-stat-card label="Churn">
          <span slot="value">
            1.8<small>%</small>
          </span>
          <span slot="description">
            Down from <strong>2.4%</strong>
          </span>
        </minerva-stat-card>
      </minerva-responsive-grid>
    </minerva-page-section>
  );
}
`,html:`<minerva-page-section
  heading="This month"
  description="Compared with last month."
>
  <span slot="icon">📈</span>
  <minerva-responsive-grid columns="1 2 3" gap="3">
    <minerva-stat-card
      label="Revenue"
      value="$48,200"
      description="+12% vs. last month"
    >
      <span slot="icon">💰</span>
    </minerva-stat-card>
    <minerva-stat-card label="Active users" value="3,104">
      <span slot="icon">👥</span>
    </minerva-stat-card>
    <minerva-stat-card label="Churn">
      <span slot="value">1.8<small>%</small></span>
      <span slot="description">Down from <strong>2.4%</strong></span>
    </minerva-stat-card>
  </minerva-responsive-grid>
</minerva-page-section>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};