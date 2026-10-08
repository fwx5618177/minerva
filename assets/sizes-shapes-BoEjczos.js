import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- IconButtonSizesShapes.vue -->

<template>
  <div style="display: grid; gap: 12px">
    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <minerva-icon-button
        label="Extra small"
        size="xsmall"
        variant="solid"
        color="primary"
        >★</minerva-icon-button
      >
      <minerva-icon-button
        label="Small"
        size="small"
        variant="solid"
        color="primary"
        >★</minerva-icon-button
      >
      <minerva-icon-button
        label="Medium"
        size="medium"
        variant="solid"
        color="primary"
        >★</minerva-icon-button
      >
      <minerva-icon-button
        label="Large"
        size="large"
        variant="solid"
        color="primary"
        >★</minerva-icon-button
      >
      <minerva-icon-button label="Square" shape="square" variant="outline"
        >★</minerva-icon-button
      >
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <minerva-icon-button label="Primary" color="primary" variant="solid"
        >★</minerva-icon-button
      >
      <minerva-icon-button label="Success" color="success" variant="solid"
        >✓</minerva-icon-button
      >
      <minerva-icon-button label="Warning" color="warning" variant="outline"
        >!</minerva-icon-button
      >
      <minerva-icon-button label="Danger" color="danger" variant="outline"
        >✕</minerva-icon-button
      >
      <minerva-icon-button label="Info" color="info">i</minerva-icon-button>
    </div>
  </div>
</template>
`,angular:`// icon-button-sizes-shapes.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-icon-button-sizes-shapes",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <div
        style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center"
      >
        <minerva-icon-button
          label="Extra small"
          size="xsmall"
          variant="solid"
          color="primary"
          >★</minerva-icon-button
        >
        <minerva-icon-button
          label="Small"
          size="small"
          variant="solid"
          color="primary"
          >★</minerva-icon-button
        >
        <minerva-icon-button
          label="Medium"
          size="medium"
          variant="solid"
          color="primary"
          >★</minerva-icon-button
        >
        <minerva-icon-button
          label="Large"
          size="large"
          variant="solid"
          color="primary"
          >★</minerva-icon-button
        >
        <minerva-icon-button label="Square" shape="square" variant="outline"
          >★</minerva-icon-button
        >
      </div>
      <div
        style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center"
      >
        <minerva-icon-button label="Primary" color="primary" variant="solid"
          >★</minerva-icon-button
        >
        <minerva-icon-button label="Success" color="success" variant="solid"
          >✓</minerva-icon-button
        >
        <minerva-icon-button label="Warning" color="warning" variant="outline"
          >!</minerva-icon-button
        >
        <minerva-icon-button label="Danger" color="danger" variant="outline"
          >✕</minerva-icon-button
        >
        <minerva-icon-button label="Info" color="info">i</minerva-icon-button>
      </div>
    </div>
  \`,
})
export class IconButtonSizesShapesComponent {}
`,svelte:`<!-- IconButtonSizesShapes.svelte -->

<div style="display: grid; gap: 12px">
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-icon-button
      label="Extra small"
      size="xsmall"
      variant="solid"
      color="primary"
      >★</minerva-icon-button>
    <minerva-icon-button
      label="Small"
      size="small"
      variant="solid"
      color="primary"
      >★</minerva-icon-button>
    <minerva-icon-button
      label="Medium"
      size="medium"
      variant="solid"
      color="primary"
      >★</minerva-icon-button>
    <minerva-icon-button
      label="Large"
      size="large"
      variant="solid"
      color="primary"
      >★</minerva-icon-button>
    <minerva-icon-button label="Square" shape="square" variant="outline"
      >★</minerva-icon-button>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-icon-button label="Primary" color="primary" variant="solid"
      >★</minerva-icon-button>
    <minerva-icon-button label="Success" color="success" variant="solid"
      >✓</minerva-icon-button>
    <minerva-icon-button label="Warning" color="warning" variant="outline"
      >!</minerva-icon-button>
    <minerva-icon-button label="Danger" color="danger" variant="outline"
      >✕</minerva-icon-button>
    <minerva-icon-button label="Info" color="info">i</minerva-icon-button>
  </div>
</div>
`,solid:`// IconButtonSizesShapes.tsx

export default function IconButtonSizesShapes() {
  return (
    <div style="display: grid; gap: 12px">
      <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
        <minerva-icon-button
          label="Extra small"
          size="xsmall"
          variant="solid"
          color="primary"
        >
          ★
        </minerva-icon-button>
        <minerva-icon-button
          label="Small"
          size="small"
          variant="solid"
          color="primary"
        >
          ★
        </minerva-icon-button>
        <minerva-icon-button
          label="Medium"
          size="medium"
          variant="solid"
          color="primary"
        >
          ★
        </minerva-icon-button>
        <minerva-icon-button
          label="Large"
          size="large"
          variant="solid"
          color="primary"
        >
          ★
        </minerva-icon-button>
        <minerva-icon-button label="Square" shape="square" variant="outline">
          ★
        </minerva-icon-button>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
        <minerva-icon-button label="Primary" color="primary" variant="solid">
          ★
        </minerva-icon-button>
        <minerva-icon-button label="Success" color="success" variant="solid">
          ✓
        </minerva-icon-button>
        <minerva-icon-button label="Warning" color="warning" variant="outline">
          !
        </minerva-icon-button>
        <minerva-icon-button label="Danger" color="danger" variant="outline">
          ✕
        </minerva-icon-button>
        <minerva-icon-button label="Info" color="info">
          i
        </minerva-icon-button>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-icon-button
      label="Extra small"
      size="xsmall"
      variant="solid"
      color="primary"
      >★</minerva-icon-button
    >
    <minerva-icon-button
      label="Small"
      size="small"
      variant="solid"
      color="primary"
      >★</minerva-icon-button
    >
    <minerva-icon-button
      label="Medium"
      size="medium"
      variant="solid"
      color="primary"
      >★</minerva-icon-button
    >
    <minerva-icon-button
      label="Large"
      size="large"
      variant="solid"
      color="primary"
      >★</minerva-icon-button
    >
    <minerva-icon-button label="Square" shape="square" variant="outline"
      >★</minerva-icon-button
    >
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-icon-button label="Primary" color="primary" variant="solid"
      >★</minerva-icon-button
    >
    <minerva-icon-button label="Success" color="success" variant="solid"
      >✓</minerva-icon-button
    >
    <minerva-icon-button label="Warning" color="warning" variant="outline"
      >!</minerva-icon-button
    >
    <minerva-icon-button label="Danger" color="danger" variant="outline"
      >✕</minerva-icon-button
    >
    <minerva-icon-button label="Info" color="info">i</minerva-icon-button>
  </div>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};