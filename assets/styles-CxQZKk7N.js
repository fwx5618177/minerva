import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TooltipStyles.vue -->

<template>
  <div style="display: grid; gap: 12px; padding: 24px 0">
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <minerva-tooltip content="Neutral" arrow>
        <minerva-button color="neutral" variant="outline"
          >neutral</minerva-button
        >
      </minerva-tooltip>
      <minerva-tooltip content="Info" color="info" arrow>
        <minerva-button color="info" variant="outline">info</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip content="Success" color="success" arrow>
        <minerva-button color="success" variant="outline"
          >success</minerva-button
        >
      </minerva-tooltip>
      <minerva-tooltip content="Warning" color="warning" arrow>
        <minerva-button color="warning" variant="outline"
          >warning</minerva-button
        >
      </minerva-tooltip>
      <minerva-tooltip content="Danger" color="danger" arrow>
        <minerva-button color="danger" variant="outline">danger</minerva-button>
      </minerva-tooltip>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <minerva-tooltip content="Subtle variant" variant="subtle" color="info">
        <minerva-button variant="ghost">subtle</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip content="Glass variant" variant="glass">
        <minerva-button variant="ghost">glass</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip
        content="Rounded shape"
        shape="rounded"
        animation="scale"
      >
        <minerva-button variant="ghost">rounded + scale</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip
        content="Thought bubble"
        shape="thought"
        animation="shift-away"
      >
        <minerva-button variant="ghost">thought + shift-away</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip
        content="Square shape"
        shape="square"
        animation="perspective"
      >
        <minerva-button variant="ghost">square + perspective</minerva-button>
      </minerva-tooltip>
    </div>
  </div>
</template>
`,angular:`// tooltip-styles.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-tooltip-styles",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; padding: 24px 0">
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-tooltip content="Neutral" arrow>
          <minerva-button color="neutral" variant="outline"
            >neutral</minerva-button
          >
        </minerva-tooltip>
        <minerva-tooltip content="Info" color="info" arrow>
          <minerva-button color="info" variant="outline">info</minerva-button>
        </minerva-tooltip>
        <minerva-tooltip content="Success" color="success" arrow>
          <minerva-button color="success" variant="outline"
            >success</minerva-button
          >
        </minerva-tooltip>
        <minerva-tooltip content="Warning" color="warning" arrow>
          <minerva-button color="warning" variant="outline"
            >warning</minerva-button
          >
        </minerva-tooltip>
        <minerva-tooltip content="Danger" color="danger" arrow>
          <minerva-button color="danger" variant="outline"
            >danger</minerva-button
          >
        </minerva-tooltip>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-tooltip content="Subtle variant" variant="subtle" color="info">
          <minerva-button variant="ghost">subtle</minerva-button>
        </minerva-tooltip>
        <minerva-tooltip content="Glass variant" variant="glass">
          <minerva-button variant="ghost">glass</minerva-button>
        </minerva-tooltip>
        <minerva-tooltip
          content="Rounded shape"
          shape="rounded"
          animation="scale"
        >
          <minerva-button variant="ghost">rounded + scale</minerva-button>
        </minerva-tooltip>
        <minerva-tooltip
          content="Thought bubble"
          shape="thought"
          animation="shift-away"
        >
          <minerva-button variant="ghost">thought + shift-away</minerva-button>
        </minerva-tooltip>
        <minerva-tooltip
          content="Square shape"
          shape="square"
          animation="perspective"
        >
          <minerva-button variant="ghost">square + perspective</minerva-button>
        </minerva-tooltip>
      </div>
    </div>
  \`,
})
export class TooltipStylesComponent {}
`,svelte:`<!-- TooltipStyles.svelte -->

<div style="display: grid; gap: 12px; padding: 24px 0">
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-tooltip content="Neutral" arrow>
      <minerva-button color="neutral" variant="outline">neutral</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Info" color="info" arrow>
      <minerva-button color="info" variant="outline">info</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Success" color="success" arrow>
      <minerva-button color="success" variant="outline">success</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Warning" color="warning" arrow>
      <minerva-button color="warning" variant="outline">warning</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Danger" color="danger" arrow>
      <minerva-button color="danger" variant="outline">danger</minerva-button>
    </minerva-tooltip>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-tooltip content="Subtle variant" variant="subtle" color="info">
      <minerva-button variant="ghost">subtle</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Glass variant" variant="glass">
      <minerva-button variant="ghost">glass</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Rounded shape" shape="rounded" animation="scale">
      <minerva-button variant="ghost">rounded + scale</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip
      content="Thought bubble"
      shape="thought"
      animation="shift-away"
    >
      <minerva-button variant="ghost">thought + shift-away</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip
      content="Square shape"
      shape="square"
      animation="perspective"
    >
      <minerva-button variant="ghost">square + perspective</minerva-button>
    </minerva-tooltip>
  </div>
</div>
`,solid:`// TooltipStyles.tsx

export default function TooltipStyles() {
  return (
    <div style="display: grid; gap: 12px; padding: 24px 0">
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-tooltip content="Neutral" arrow>
          <minerva-button color="neutral" variant="outline">
            neutral
          </minerva-button>
        </minerva-tooltip>
        <minerva-tooltip content="Info" color="info" arrow>
          <minerva-button color="info" variant="outline">
            info
          </minerva-button>
        </minerva-tooltip>
        <minerva-tooltip content="Success" color="success" arrow>
          <minerva-button color="success" variant="outline">
            success
          </minerva-button>
        </minerva-tooltip>
        <minerva-tooltip content="Warning" color="warning" arrow>
          <minerva-button color="warning" variant="outline">
            warning
          </minerva-button>
        </minerva-tooltip>
        <minerva-tooltip content="Danger" color="danger" arrow>
          <minerva-button color="danger" variant="outline">
            danger
          </minerva-button>
        </minerva-tooltip>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-tooltip content="Subtle variant" variant="subtle" color="info">
          <minerva-button variant="ghost">subtle</minerva-button>
        </minerva-tooltip>
        <minerva-tooltip content="Glass variant" variant="glass">
          <minerva-button variant="ghost">glass</minerva-button>
        </minerva-tooltip>
        <minerva-tooltip
          content="Rounded shape"
          shape="rounded"
          animation="scale"
        >
          <minerva-button variant="ghost">rounded + scale</minerva-button>
        </minerva-tooltip>
        <minerva-tooltip
          content="Thought bubble"
          shape="thought"
          animation="shift-away"
        >
          <minerva-button variant="ghost">thought + shift-away</minerva-button>
        </minerva-tooltip>
        <minerva-tooltip
          content="Square shape"
          shape="square"
          animation="perspective"
        >
          <minerva-button variant="ghost">square + perspective</minerva-button>
        </minerva-tooltip>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; padding: 24px 0">
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-tooltip content="Neutral" arrow>
      <minerva-button color="neutral" variant="outline">neutral</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Info" color="info" arrow>
      <minerva-button color="info" variant="outline">info</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Success" color="success" arrow>
      <minerva-button color="success" variant="outline">success</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Warning" color="warning" arrow>
      <minerva-button color="warning" variant="outline">warning</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Danger" color="danger" arrow>
      <minerva-button color="danger" variant="outline">danger</minerva-button>
    </minerva-tooltip>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-tooltip content="Subtle variant" variant="subtle" color="info">
      <minerva-button variant="ghost">subtle</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Glass variant" variant="glass">
      <minerva-button variant="ghost">glass</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip content="Rounded shape" shape="rounded" animation="scale">
      <minerva-button variant="ghost">rounded + scale</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip
      content="Thought bubble"
      shape="thought"
      animation="shift-away"
    >
      <minerva-button variant="ghost">thought + shift-away</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip
      content="Square shape"
      shape="square"
      animation="perspective"
    >
      <minerva-button variant="ghost">square + perspective</minerva-button>
    </minerva-tooltip>
  </div>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};