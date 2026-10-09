import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TimePickerRangeSteps.vue -->

<template>
  <minerva-time-picker
    label="Opening hours slot"
    placeholder="09:00 – 18:00"
    format="HH:mm"
    hide-second
    min-time="09:00"
    max-time="18:00"
    minute-step="15"
  ></minerva-time-picker>
</template>
`,angular:`// time-picker-range-steps.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-time-picker-range-steps",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-time-picker
      label="Opening hours slot"
      placeholder="09:00 – 18:00"
      format="HH:mm"
      hide-second
      min-time="09:00"
      max-time="18:00"
      minute-step="15"
    ></minerva-time-picker>
  \`,
})
export class TimePickerRangeStepsComponent {}
`,svelte:`<!-- TimePickerRangeSteps.svelte -->

<minerva-time-picker
  label="Opening hours slot"
  placeholder="09:00 – 18:00"
  format="HH:mm"
  hide-second
  min-time="09:00"
  max-time="18:00"
  minute-step="15"
></minerva-time-picker>
`,solid:`// TimePickerRangeSteps.tsx

export default function TimePickerRangeSteps() {
  return (
    <minerva-time-picker
      label="Opening hours slot"
      placeholder="09:00 – 18:00"
      format="HH:mm"
      hide-second
      min-time="09:00"
      max-time="18:00"
      minute-step="15"
    ></minerva-time-picker>
  );
}
`,html:`<minerva-time-picker
  label="Opening hours slot"
  placeholder="09:00 – 18:00"
  format="HH:mm"
  hide-second
  min-time="09:00"
  max-time="18:00"
  minute-step="15"
></minerva-time-picker>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};