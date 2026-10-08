import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- RatingScale.vue -->

<script setup lang="ts">
import { onMounted, ref } from "vue";

// \`dimensions\` is a JS property. The scale updates it itself and re-emits
// each row's change with the dimension key.

interface Dimension {
  key: string;
  label: string;
  value: number;
  hint?: string;
}
type Scale = HTMLElement & { dimensions: readonly Dimension[] };

const scale = ref<Scale>();
const summary = ref<Scale>();
const resultText = ref("");

const scaleDimensions = [
  { key: "plot", label: "Plot", value: 8.2, hint: "Story and pacing" },
  { key: "characters", label: "Characters", value: 7.5 },
  { key: "writing", label: "Writing", value: 9 },
];
const onChange = (event: Event) => {
  const { key, value, dimensions } = (
    event as CustomEvent<{
      key: string;
      value: number;
      dimensions: readonly Dimension[];
    }>
  ).detail;
  summary.value!.dimensions = dimensions;
  resultText.value = \`\${key} = \${value}\`;
};

onMounted(() => {
  summary.value!.dimensions = scale.value!.dimensions;
});
<\/script>

<template>
  <div style="display: grid; gap: 16px">
    <minerva-rating-scale
      id="scale"
      interactive
      ref="scale"
      :dimensions.prop="scaleDimensions"
      @minerva-change="onChange"
    ></minerva-rating-scale>
    <minerva-rating-scale
      id="summary"
      size="small"
      readonly
      hide-value
      ref="summary"
    ></minerva-rating-scale>
    <output id="result">{{ resultText }}</output>
  </div>
</template>
`,angular:`// rating-scale.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
} from "@angular/core";

// \`dimensions\` is a JS property. The scale updates it itself and re-emits
// each row's change with the dimension key.
interface Dimension {
  key: string;
  label: string;
  value: number;
  hint?: string;
}
type Scale = HTMLElement & { dimensions: readonly Dimension[] };

@Component({
  selector: "app-rating-scale",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px">
      <minerva-rating-scale
        id="scale"
        interactive
        #scale
        [dimensions]="scaleDimensions"
        (minerva-change)="onChange($event)"
      ></minerva-rating-scale>
      <minerva-rating-scale
        id="summary"
        size="small"
        readonly
        hide-value
        #summary
      ></minerva-rating-scale>
      <output id="result">{{ resultText }}</output>
    </div>
  \`,
})
export class RatingScaleComponent implements AfterViewInit {
  @ViewChild("scale") scale!: ElementRef<Scale>;
  @ViewChild("summary") summary!: ElementRef<Scale>;
  resultText = "";

  scaleDimensions = [
    { key: "plot", label: "Plot", value: 8.2, hint: "Story and pacing" },
    { key: "characters", label: "Characters", value: 7.5 },
    { key: "writing", label: "Writing", value: 9 },
  ];
  onChange = (event: Event) => {
    const { key, value, dimensions } = (
      event as CustomEvent<{
        key: string;
        value: number;
        dimensions: readonly Dimension[];
      }>
    ).detail;
    this.summary.nativeElement.dimensions = dimensions;
    this.resultText = \`\${key} = \${value}\`;
  };

  ngAfterViewInit(): void {
    this.summary.nativeElement.dimensions = this.scale.nativeElement.dimensions;
  }
}
`,svelte:`<!-- RatingScale.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // \`dimensions\` is a JS property. The scale updates it itself and re-emits
  // each row's change with the dimension key.

  interface Dimension {
    key: string;
    label: string;
    value: number;
    hint?: string;
  }
  type Scale = HTMLElement & { dimensions: readonly Dimension[] };

  let scale: Scale;
  let summary: Scale;
  let resultText = $state("");

  const scaleDimensions = [
    { key: "plot", label: "Plot", value: 8.2, hint: "Story and pacing" },
    { key: "characters", label: "Characters", value: 7.5 },
    { key: "writing", label: "Writing", value: 9 },
  ];
  const onChange = (event: Event) => {
    const { key, value, dimensions } = (
      event as CustomEvent<{
        key: string;
        value: number;
        dimensions: readonly Dimension[];
      }>
    ).detail;
    summary.dimensions = dimensions;
    resultText = \`\${key} = \${value}\`;
  };

  onMount(() => {
    summary.dimensions = scale.dimensions;
  });
<\/script>

<div style="display: grid; gap: 16px">
  <minerva-rating-scale
    id="scale"
    interactive
    bind:this={scale}
    dimensions={scaleDimensions}
    onminerva-change={onChange}
  ></minerva-rating-scale>
  <minerva-rating-scale
    id="summary"
    size="small"
    readonly
    hide-value
    bind:this={summary}
  ></minerva-rating-scale>
  <output id="result">{resultText}</output>
</div>
`,solid:`// RatingScale.tsx

import { createSignal, onMount } from "solid-js";

// \`dimensions\` is a JS property. The scale updates it itself and re-emits
// each row's change with the dimension key.
interface Dimension {
  key: string;
  label: string;
  value: number;
  hint?: string;
}
type Scale = HTMLElement & { dimensions: readonly Dimension[] };

export default function RatingScale() {
  let scale!: Scale;
  let summary!: Scale;
  const [resultText, setResultText] = createSignal("");

  const scaleDimensions = [
    { key: "plot", label: "Plot", value: 8.2, hint: "Story and pacing" },
    { key: "characters", label: "Characters", value: 7.5 },
    { key: "writing", label: "Writing", value: 9 },
  ];
  const onChange = (event: Event) => {
    const { key, value, dimensions } = (
      event as CustomEvent<{
        key: string;
        value: number;
        dimensions: readonly Dimension[];
      }>
    ).detail;
    summary.dimensions = dimensions;
    setResultText(\`\${key} = \${value}\`);
  };

  onMount(() => {
    summary.dimensions = scale.dimensions;
  });

  return (
    <div style="display: grid; gap: 16px">
      <minerva-rating-scale
        id="scale"
        interactive
        ref={scale}
        prop:dimensions={scaleDimensions}
        on:minerva-change={onChange}
      ></minerva-rating-scale>
      <minerva-rating-scale
        id="summary"
        size="small"
        readonly
        hide-value
        ref={summary}
      ></minerva-rating-scale>
      <output id="result">{resultText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px">
  <minerva-rating-scale id="scale" interactive></minerva-rating-scale>
  <minerva-rating-scale
    id="summary"
    size="small"
    readonly
    hide-value
  ></minerva-rating-scale>
  <output id="result"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`dimensions\` is a JS property. The scale updates it itself and re-emits
  // each row's change with the dimension key.
  const scale = document.querySelector("#scale");
  const summary = document.querySelector("#summary");
  const result = document.querySelector("#result");
  scale.dimensions = [
    { key: "plot", label: "Plot", value: 8.2, hint: "Story and pacing" },
    { key: "characters", label: "Characters", value: 7.5 },
    { key: "writing", label: "Writing", value: 9 },
  ];
  summary.dimensions = scale.dimensions;
  const onChange = (event) => {
    const { key, value, dimensions } = event.detail;
    summary.dimensions = dimensions;
    result.value = \`\${key} = \${value}\`;
  };
  scale.addEventListener("minerva-change", onChange);
<\/script>
`}})))()}n();export{t as default};