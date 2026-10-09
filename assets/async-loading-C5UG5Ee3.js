import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AutoCompleteAsyncLoading.vue -->

<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";

// minerva-input fires on every keystroke: fetch the matches (simulated
// here with a timer) and show \`loading\` meanwhile. The options are already
// filtered, so filterOption accepts everything.

type Option = { label: string; value: string };
type Autocomplete = HTMLElement & {
  options: Option[];
  loading: boolean;
  filterOption: () => boolean;
};

const CITIES = [
  "Paris",
  "Pau",
  "Perth",
  "Porto",
  "Prague",
  "Tokyo",
  "Toronto",
  "Turin",
];

const input = ref<Autocomplete>();
const logText = ref("");

let timer: ReturnType<typeof setTimeout> | undefined;
const inputFilterOption = () => true;
const onInput = (event: Event) => {
  const text = (event as CustomEvent<{ value: string }>).detail.value;
  clearTimeout(timer);
  input.value!.options = [];
  input.value!.loading = text.trim().length >= 2;
  if (!input.value!.loading) return;
  timer = setTimeout(() => {
    const query = text.trim().toLowerCase();
    input.value!.options = CITIES.filter((city) =>
      city.toLowerCase().startsWith(query),
    ).map((city) => ({ label: city, value: city.toLowerCase() }));
    input.value!.loading = false;
  }, 600);
};
const onChange = (event: Event) => {
  const { value } = (event as CustomEvent<{ value: string }>).detail;
  logText.value = \`minerva-change: \${value}\`;
};

onBeforeUnmount(() => {
  clearTimeout(timer);
});
<\/script>

<template>
  <div style="display: grid; gap: 12px; max-width: 360px">
    <minerva-autocomplete
      id="city"
      label="City"
      placeholder="Type at least 2 letters"
      no-animation
      ref="input"
      :filterOption.prop="inputFilterOption"
      @minerva-input="onInput"
      @minerva-change="onChange"
    >
      <span slot="prefix" aria-hidden="true">🔍</span>
    </minerva-autocomplete>
    <output id="log">{{ logText }}</output>
  </div>
</template>
`,angular:`// auto-complete-async-loading.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type OnDestroy,
} from "@angular/core";

// minerva-input fires on every keystroke: fetch the matches (simulated
// here with a timer) and show \`loading\` meanwhile. The options are already
// filtered, so filterOption accepts everything.
type Option = { label: string; value: string };
type Autocomplete = HTMLElement & {
  options: Option[];
  loading: boolean;
  filterOption: () => boolean;
};

const CITIES = [
  "Paris",
  "Pau",
  "Perth",
  "Porto",
  "Prague",
  "Tokyo",
  "Toronto",
  "Turin",
];

@Component({
  selector: "app-auto-complete-async-loading",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 360px">
      <minerva-autocomplete
        id="city"
        label="City"
        placeholder="Type at least 2 letters"
        no-animation
        #input
        [filterOption]="inputFilterOption"
        (minerva-input)="onInput($event)"
        (minerva-change)="onChange($event)"
      >
        <span slot="prefix" aria-hidden="true">🔍</span>
      </minerva-autocomplete>
      <output id="log">{{ logText }}</output>
    </div>
  \`,
})
export class AutoCompleteAsyncLoadingComponent implements OnDestroy {
  @ViewChild("input") input!: ElementRef<Autocomplete>;
  logText = "";

  timer: ReturnType<typeof setTimeout> | undefined;
  inputFilterOption = () => true;
  onInput = (event: Event) => {
    const text = (event as CustomEvent<{ value: string }>).detail.value;
    clearTimeout(this.timer);
    this.input.nativeElement.options = [];
    this.input.nativeElement.loading = text.trim().length >= 2;
    if (!this.input.nativeElement.loading) return;
    this.timer = setTimeout(() => {
      const query = text.trim().toLowerCase();
      this.input.nativeElement.options = CITIES.filter((city) =>
        city.toLowerCase().startsWith(query),
      ).map((city) => ({ label: city, value: city.toLowerCase() }));
      this.input.nativeElement.loading = false;
    }, 600);
  };
  onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    this.logText = \`minerva-change: \${value}\`;
  };

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
`,svelte:`<!-- AutoCompleteAsyncLoading.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // minerva-input fires on every keystroke: fetch the matches (simulated
  // here with a timer) and show \`loading\` meanwhile. The options are already
  // filtered, so filterOption accepts everything.

  type Option = { label: string; value: string };
  type Autocomplete = HTMLElement & {
    options: Option[];
    loading: boolean;
    filterOption: () => boolean;
  };

  const CITIES = [
    "Paris",
    "Pau",
    "Perth",
    "Porto",
    "Prague",
    "Tokyo",
    "Toronto",
    "Turin",
  ];

  let input: Autocomplete;
  let logText = $state("");

  let timer: ReturnType<typeof setTimeout> | undefined;
  const inputFilterOption = () => true;
  const onInput = (event: Event) => {
    const text = (event as CustomEvent<{ value: string }>).detail.value;
    clearTimeout(timer);
    input.options = [];
    input.loading = text.trim().length >= 2;
    if (!input.loading) return;
    timer = setTimeout(() => {
      const query = text.trim().toLowerCase();
      input.options = CITIES.filter((city) =>
        city.toLowerCase().startsWith(query),
      ).map((city) => ({ label: city, value: city.toLowerCase() }));
      input.loading = false;
    }, 600);
  };
  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    logText = \`minerva-change: \${value}\`;
  };

  onMount(() => {
    return () => {
      clearTimeout(timer);
    };
  });
<\/script>

<div style="display: grid; gap: 12px; max-width: 360px">
  <minerva-autocomplete
    id="city"
    label="City"
    placeholder="Type at least 2 letters"
    no-animation
    bind:this={input}
    filterOption={inputFilterOption}
    onminerva-input={onInput}
    onminerva-change={onChange}
  >
    <span slot="prefix" aria-hidden="true">🔍</span>
  </minerva-autocomplete>
  <output id="log">{logText}</output>
</div>
`,solid:`// AutoCompleteAsyncLoading.tsx

import { createSignal, onCleanup } from "solid-js";

// minerva-input fires on every keystroke: fetch the matches (simulated
// here with a timer) and show \`loading\` meanwhile. The options are already
// filtered, so filterOption accepts everything.
type Option = { label: string; value: string };
type Autocomplete = HTMLElement & {
  options: Option[];
  loading: boolean;
  filterOption: () => boolean;
};

const CITIES = [
  "Paris",
  "Pau",
  "Perth",
  "Porto",
  "Prague",
  "Tokyo",
  "Toronto",
  "Turin",
];

export default function AutoCompleteAsyncLoading() {
  let input!: Autocomplete;
  const [logText, setLogText] = createSignal("");

  let timer: ReturnType<typeof setTimeout> | undefined;
  const inputFilterOption = () => true;
  const onInput = (event: Event) => {
    const text = (event as CustomEvent<{ value: string }>).detail.value;
    clearTimeout(timer);
    input.options = [];
    input.loading = text.trim().length >= 2;
    if (!input.loading) return;
    timer = setTimeout(() => {
      const query = text.trim().toLowerCase();
      input.options = CITIES.filter((city) =>
        city.toLowerCase().startsWith(query),
      ).map((city) => ({ label: city, value: city.toLowerCase() }));
      input.loading = false;
    }, 600);
  };
  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    setLogText(\`minerva-change: \${value}\`);
  };

  onCleanup(() => {
    clearTimeout(timer);
  });

  return (
    <div style="display: grid; gap: 12px; max-width: 360px">
      <minerva-autocomplete
        id="city"
        label="City"
        placeholder="Type at least 2 letters"
        no-animation
        ref={input}
        prop:filterOption={inputFilterOption}
        on:minerva-input={onInput}
        on:minerva-change={onChange}
      >
        <span slot="prefix" aria-hidden="true">
          🔍
        </span>
      </minerva-autocomplete>
      <output id="log">{logText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 360px">
  <minerva-autocomplete
    id="city"
    label="City"
    placeholder="Type at least 2 letters"
    no-animation
  >
    <span slot="prefix" aria-hidden="true">🔍</span>
  </minerva-autocomplete>
  <output id="log"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // minerva-input fires on every keystroke: fetch the matches (simulated
  // here with a timer) and show \`loading\` meanwhile. The options are already
  // filtered, so filterOption accepts everything.
  const CITIES = [
    "Paris",
    "Pau",
    "Perth",
    "Porto",
    "Prague",
    "Tokyo",
    "Toronto",
    "Turin",
  ];

  const input = document.querySelector("#city");
  const log = document.querySelector("#log");
  let timer;
  input.filterOption = () => true;
  const onInput = (event) => {
    const text = event.detail.value;
    clearTimeout(timer);
    input.options = [];
    input.loading = text.trim().length >= 2;
    if (!input.loading) return;
    timer = setTimeout(() => {
      const query = text.trim().toLowerCase();
      input.options = CITIES.filter((city) =>
        city.toLowerCase().startsWith(query),
      ).map((city) => ({ label: city, value: city.toLowerCase() }));
      input.loading = false;
    }, 600);
  };
  const onChange = (event) => {
    const { value } = event.detail;
    log.value = \`minerva-change: \${value}\`;
  };
  input.addEventListener("minerva-input", onInput);
  input.addEventListener("minerva-change", onChange);
<\/script>
`}})))()}n();export{t as default};