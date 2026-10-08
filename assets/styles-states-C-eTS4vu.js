import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- RadioStylesStates.vue -->

<template>
  <div style="display: grid; gap: 20px">
    <minerva-radio-group
      label="Small, horizontal"
      direction="horizontal"
      size="small"
      value="a"
    >
      <minerva-radio value="a" label="Option A"></minerva-radio>
      <minerva-radio value="b" label="Option B"></minerva-radio>
      <minerva-radio value="c" label="Option C"></minerva-radio>
    </minerva-radio-group>
    <minerva-radio-group
      label="Large, success"
      direction="horizontal"
      size="large"
      color="success"
      value="b"
    >
      <minerva-radio value="a" label="Option A"></minerva-radio>
      <minerva-radio value="b" label="Option B"></minerva-radio>
      <minerva-radio value="c" label="Option C"></minerva-radio>
    </minerva-radio-group>
    <minerva-radio-group
      label="Delivery"
      value="standard"
      error
      helper-text="Express delivery is not available for your address."
    >
      <minerva-radio
        value="standard"
        label="Standard"
        helper-text="3 to 5 business days"
      ></minerva-radio>
      <minerva-radio
        value="express"
        label="Express"
        error
        error-message="Not available"
      ></minerva-radio>
    </minerva-radio-group>
    <minerva-radio-group label="Disabled group" disabled value="a">
      <minerva-radio value="a" label="Option A"></minerva-radio>
      <minerva-radio value="b" label="Option B"></minerva-radio>
    </minerva-radio-group>
  </div>
</template>
`,angular:`// radio-styles-states.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-radio-styles-states",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 20px">
      <minerva-radio-group
        label="Small, horizontal"
        direction="horizontal"
        size="small"
        value="a"
      >
        <minerva-radio value="a" label="Option A"></minerva-radio>
        <minerva-radio value="b" label="Option B"></minerva-radio>
        <minerva-radio value="c" label="Option C"></minerva-radio>
      </minerva-radio-group>
      <minerva-radio-group
        label="Large, success"
        direction="horizontal"
        size="large"
        color="success"
        value="b"
      >
        <minerva-radio value="a" label="Option A"></minerva-radio>
        <minerva-radio value="b" label="Option B"></minerva-radio>
        <minerva-radio value="c" label="Option C"></minerva-radio>
      </minerva-radio-group>
      <minerva-radio-group
        label="Delivery"
        value="standard"
        error
        helper-text="Express delivery is not available for your address."
      >
        <minerva-radio
          value="standard"
          label="Standard"
          helper-text="3 to 5 business days"
        ></minerva-radio>
        <minerva-radio
          value="express"
          label="Express"
          error
          error-message="Not available"
        ></minerva-radio>
      </minerva-radio-group>
      <minerva-radio-group label="Disabled group" disabled value="a">
        <minerva-radio value="a" label="Option A"></minerva-radio>
        <minerva-radio value="b" label="Option B"></minerva-radio>
      </minerva-radio-group>
    </div>
  \`,
})
export class RadioStylesStatesComponent {}
`,svelte:`<!-- RadioStylesStates.svelte -->

<div style="display: grid; gap: 20px">
  <minerva-radio-group
    label="Small, horizontal"
    direction="horizontal"
    size="small"
    value="a"
  >
    <minerva-radio value="a" label="Option A"></minerva-radio>
    <minerva-radio value="b" label="Option B"></minerva-radio>
    <minerva-radio value="c" label="Option C"></minerva-radio>
  </minerva-radio-group>
  <minerva-radio-group
    label="Large, success"
    direction="horizontal"
    size="large"
    color="success"
    value="b"
  >
    <minerva-radio value="a" label="Option A"></minerva-radio>
    <minerva-radio value="b" label="Option B"></minerva-radio>
    <minerva-radio value="c" label="Option C"></minerva-radio>
  </minerva-radio-group>
  <minerva-radio-group
    label="Delivery"
    value="standard"
    error
    helper-text="Express delivery is not available for your address."
  >
    <minerva-radio
      value="standard"
      label="Standard"
      helper-text="3 to 5 business days"
    ></minerva-radio>
    <minerva-radio
      value="express"
      label="Express"
      error
      error-message="Not available"
    ></minerva-radio>
  </minerva-radio-group>
  <minerva-radio-group label="Disabled group" disabled value="a">
    <minerva-radio value="a" label="Option A"></minerva-radio>
    <minerva-radio value="b" label="Option B"></minerva-radio>
  </minerva-radio-group>
</div>
`,solid:`// RadioStylesStates.tsx

export default function RadioStylesStates() {
  return (
    <div style="display: grid; gap: 20px">
      <minerva-radio-group
        label="Small, horizontal"
        direction="horizontal"
        size="small"
        value="a"
      >
        <minerva-radio value="a" label="Option A"></minerva-radio>
        <minerva-radio value="b" label="Option B"></minerva-radio>
        <minerva-radio value="c" label="Option C"></minerva-radio>
      </minerva-radio-group>
      <minerva-radio-group
        label="Large, success"
        direction="horizontal"
        size="large"
        color="success"
        value="b"
      >
        <minerva-radio value="a" label="Option A"></minerva-radio>
        <minerva-radio value="b" label="Option B"></minerva-radio>
        <minerva-radio value="c" label="Option C"></minerva-radio>
      </minerva-radio-group>
      <minerva-radio-group
        label="Delivery"
        value="standard"
        error
        helper-text="Express delivery is not available for your address."
      >
        <minerva-radio
          value="standard"
          label="Standard"
          helper-text="3 to 5 business days"
        ></minerva-radio>
        <minerva-radio
          value="express"
          label="Express"
          error
          error-message="Not available"
        ></minerva-radio>
      </minerva-radio-group>
      <minerva-radio-group label="Disabled group" disabled value="a">
        <minerva-radio value="a" label="Option A"></minerva-radio>
        <minerva-radio value="b" label="Option B"></minerva-radio>
      </minerva-radio-group>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 20px">
  <minerva-radio-group
    label="Small, horizontal"
    direction="horizontal"
    size="small"
    value="a"
  >
    <minerva-radio value="a" label="Option A"></minerva-radio>
    <minerva-radio value="b" label="Option B"></minerva-radio>
    <minerva-radio value="c" label="Option C"></minerva-radio>
  </minerva-radio-group>
  <minerva-radio-group
    label="Large, success"
    direction="horizontal"
    size="large"
    color="success"
    value="b"
  >
    <minerva-radio value="a" label="Option A"></minerva-radio>
    <minerva-radio value="b" label="Option B"></minerva-radio>
    <minerva-radio value="c" label="Option C"></minerva-radio>
  </minerva-radio-group>
  <minerva-radio-group
    label="Delivery"
    value="standard"
    error
    helper-text="Express delivery is not available for your address."
  >
    <minerva-radio
      value="standard"
      label="Standard"
      helper-text="3 to 5 business days"
    ></minerva-radio>
    <minerva-radio
      value="express"
      label="Express"
      error
      error-message="Not available"
    ></minerva-radio>
  </minerva-radio-group>
  <minerva-radio-group label="Disabled group" disabled value="a">
    <minerva-radio value="a" label="Option A"></minerva-radio>
    <minerva-radio value="b" label="Option B"></minerva-radio>
  </minerva-radio-group>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};