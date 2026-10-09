import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CascaderBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`options\` is a JS property; \`minerva-change\` reports the selected path.

type Option = { value: string; label: string; children?: Option[] };
type Cascader = HTMLElement & { options: Option[] };

const resultText = ref("");

const cascaderOptions = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          { value: "xihu", label: "West Lake" },
          { value: "binjiang", label: "Binjiang" },
        ],
      },
      { value: "ningbo", label: "Ningbo" },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [{ value: "zhonghuamen", label: "Zhonghuamen" }],
      },
      { value: "suzhou", label: "Suzhou" },
    ],
  },
];
const onChange = (event: Event) => {
  const { value } = (event as CustomEvent<{ value: string[] }>).detail;
  resultText.value = value.length ? \`Path: \${value.join(" > ")}\` : "Cleared";
};
<\/script>

<template>
  <div style="display: grid; gap: 8px">
    <minerva-cascader
      id="region"
      label="Region"
      placeholder="Select a city"
      value="zhejiang,hangzhou,xihu"
      :options.prop="cascaderOptions"
      @minerva-change="onChange"
    ></minerva-cascader>
    <output id="result">{{ resultText }}</output>
  </div>
</template>
`,angular:`// cascader-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// \`options\` is a JS property; \`minerva-change\` reports the selected path.
type Option = { value: string; label: string; children?: Option[] };
type Cascader = HTMLElement & { options: Option[] };

@Component({
  selector: "app-cascader-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 8px">
      <minerva-cascader
        id="region"
        label="Region"
        placeholder="Select a city"
        value="zhejiang,hangzhou,xihu"
        [options]="cascaderOptions"
        (minerva-change)="onChange($event)"
      ></minerva-cascader>
      <output id="result">{{ resultText }}</output>
    </div>
  \`,
})
export class CascaderBasicComponent {
  resultText = "";

  cascaderOptions = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            { value: "xihu", label: "West Lake" },
            { value: "binjiang", label: "Binjiang" },
          ],
        },
        { value: "ningbo", label: "Ningbo" },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [{ value: "zhonghuamen", label: "Zhonghuamen" }],
        },
        { value: "suzhou", label: "Suzhou" },
      ],
    },
  ];
  onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string[] }>).detail;
    this.resultText = value.length ? \`Path: \${value.join(" > ")}\` : "Cleared";
  };
}
`,svelte:`<!-- CascaderBasic.svelte -->

<script lang="ts">
  // \`options\` is a JS property; \`minerva-change\` reports the selected path.

  type Option = { value: string; label: string; children?: Option[] };
  type Cascader = HTMLElement & { options: Option[] };

  let resultText = $state("");

  const cascaderOptions = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            { value: "xihu", label: "West Lake" },
            { value: "binjiang", label: "Binjiang" },
          ],
        },
        { value: "ningbo", label: "Ningbo" },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [{ value: "zhonghuamen", label: "Zhonghuamen" }],
        },
        { value: "suzhou", label: "Suzhou" },
      ],
    },
  ];
  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string[] }>).detail;
    resultText = value.length ? \`Path: \${value.join(" > ")}\` : "Cleared";
  };
<\/script>

<div style="display: grid; gap: 8px">
  <minerva-cascader
    id="region"
    label="Region"
    placeholder="Select a city"
    value="zhejiang,hangzhou,xihu"
    options={cascaderOptions}
    onminerva-change={onChange}
  ></minerva-cascader>
  <output id="result">{resultText}</output>
</div>
`,solid:`// CascaderBasic.tsx

import { createSignal } from "solid-js";

// \`options\` is a JS property; \`minerva-change\` reports the selected path.
type Option = { value: string; label: string; children?: Option[] };
type Cascader = HTMLElement & { options: Option[] };

export default function CascaderBasic() {
  const [resultText, setResultText] = createSignal("");

  const cascaderOptions = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            { value: "xihu", label: "West Lake" },
            { value: "binjiang", label: "Binjiang" },
          ],
        },
        { value: "ningbo", label: "Ningbo" },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [{ value: "zhonghuamen", label: "Zhonghuamen" }],
        },
        { value: "suzhou", label: "Suzhou" },
      ],
    },
  ];
  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string[] }>).detail;
    setResultText(value.length ? \`Path: \${value.join(" > ")}\` : "Cleared");
  };

  return (
    <div style="display: grid; gap: 8px">
      <minerva-cascader
        id="region"
        label="Region"
        placeholder="Select a city"
        value="zhejiang,hangzhou,xihu"
        prop:options={cascaderOptions}
        on:minerva-change={onChange}
      ></minerva-cascader>
      <output id="result">{resultText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px">
  <minerva-cascader
    id="region"
    label="Region"
    placeholder="Select a city"
    value="zhejiang,hangzhou,xihu"
  ></minerva-cascader>
  <output id="result"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`options\` is a JS property; \`minerva-change\` reports the selected path.
  const cascader = document.querySelector("#region");
  const result = document.querySelector("#result");
  cascader.options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            { value: "xihu", label: "West Lake" },
            { value: "binjiang", label: "Binjiang" },
          ],
        },
        { value: "ningbo", label: "Ningbo" },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [{ value: "zhonghuamen", label: "Zhonghuamen" }],
        },
        { value: "suzhou", label: "Suzhou" },
      ],
    },
  ];
  const onChange = (event) => {
    const { value } = event.detail;
    result.value = value.length ? \`Path: \${value.join(" > ")}\` : "Cleared";
  };
  cascader.addEventListener("minerva-change", onChange);
<\/script>
`}})))()}n();export{t as default};