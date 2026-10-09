import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TimePickerFormats.vue -->

<template>
  <div style="display: grid; gap: 12px; justify-items: start">
    <minerva-time-picker
      label="Meeting"
      format="HH:mm"
      hide-second
      value="14:00"
    ></minerva-time-picker>
    <minerva-time-picker
      label="Pickup"
      format="hh:mm a"
      use-12-hours
      hide-second
      value="18:45"
    ></minerva-time-picker>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <minerva-time-picker size="small" label="Small"></minerva-time-picker>
      <minerva-time-picker size="medium" label="Medium"></minerva-time-picker>
      <minerva-time-picker size="large" label="Large"></minerva-time-picker>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <minerva-time-picker value="09:00:00" readonly label="Read-only">
      </minerva-time-picker>
      <minerva-time-picker value="09:00:00" disabled label="Disabled">
      </minerva-time-picker>
      <minerva-time-picker invalid label="Invalid"></minerva-time-picker>
    </div>
  </div>
</template>
`,angular:`// time-picker-formats.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-time-picker-formats",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; justify-items: start">
      <minerva-time-picker
        label="Meeting"
        format="HH:mm"
        hide-second
        value="14:00"
      ></minerva-time-picker>
      <minerva-time-picker
        label="Pickup"
        format="hh:mm a"
        use-12-hours
        hide-second
        value="18:45"
      ></minerva-time-picker>
      <div
        style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center"
      >
        <minerva-time-picker size="small" label="Small"></minerva-time-picker>
        <minerva-time-picker size="medium" label="Medium"></minerva-time-picker>
        <minerva-time-picker size="large" label="Large"></minerva-time-picker>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-time-picker value="09:00:00" readonly label="Read-only">
        </minerva-time-picker>
        <minerva-time-picker value="09:00:00" disabled label="Disabled">
        </minerva-time-picker>
        <minerva-time-picker invalid label="Invalid"></minerva-time-picker>
      </div>
    </div>
  \`,
})
export class TimePickerFormatsComponent {}
`,svelte:`<!-- TimePickerFormats.svelte -->

<div style="display: grid; gap: 12px; justify-items: start">
  <minerva-time-picker
    label="Meeting"
    format="HH:mm"
    hide-second
    value="14:00"
  ></minerva-time-picker>
  <minerva-time-picker
    label="Pickup"
    format="hh:mm a"
    use-12-hours
    hide-second
    value="18:45"
  ></minerva-time-picker>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-time-picker size="small" label="Small"></minerva-time-picker>
    <minerva-time-picker size="medium" label="Medium"></minerva-time-picker>
    <minerva-time-picker size="large" label="Large"></minerva-time-picker>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-time-picker value="09:00:00" readonly label="Read-only">
    </minerva-time-picker>
    <minerva-time-picker value="09:00:00" disabled label="Disabled">
    </minerva-time-picker>
    <minerva-time-picker invalid label="Invalid"></minerva-time-picker>
  </div>
</div>
`,solid:`// TimePickerFormats.tsx

export default function TimePickerFormats() {
  return (
    <div style="display: grid; gap: 12px; justify-items: start">
      <minerva-time-picker
        label="Meeting"
        format="HH:mm"
        hide-second
        value="14:00"
      ></minerva-time-picker>
      <minerva-time-picker
        label="Pickup"
        format="hh:mm a"
        use-12-hours
        hide-second
        value="18:45"
      ></minerva-time-picker>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
        <minerva-time-picker size="small" label="Small"></minerva-time-picker>
        <minerva-time-picker size="medium" label="Medium"></minerva-time-picker>
        <minerva-time-picker size="large" label="Large"></minerva-time-picker>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-time-picker
          value="09:00:00"
          readonly
          label="Read-only"
        ></minerva-time-picker>
        <minerva-time-picker
          value="09:00:00"
          disabled
          label="Disabled"
        ></minerva-time-picker>
        <minerva-time-picker invalid label="Invalid"></minerva-time-picker>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; justify-items: start">
  <minerva-time-picker
    label="Meeting"
    format="HH:mm"
    hide-second
    value="14:00"
  ></minerva-time-picker>
  <minerva-time-picker
    label="Pickup"
    format="hh:mm a"
    use-12-hours
    hide-second
    value="18:45"
  ></minerva-time-picker>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-time-picker size="small" label="Small"></minerva-time-picker>
    <minerva-time-picker size="medium" label="Medium"></minerva-time-picker>
    <minerva-time-picker size="large" label="Large"></minerva-time-picker>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-time-picker value="09:00:00" readonly label="Read-only">
    </minerva-time-picker>
    <minerva-time-picker value="09:00:00" disabled label="Disabled">
    </minerva-time-picker>
    <minerva-time-picker invalid label="Invalid"></minerva-time-picker>
  </div>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};