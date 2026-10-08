import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- NumberInputPrecision.vue -->

<script setup lang="ts">
import { ref } from "vue";

// stepUp() / stepDown() change the value programmatically (clamped, no event).

type NumberInput = HTMLElement & { stepUp(): void; stepDown(): void };

const price = ref<NumberInput>();

const onUp = () => price.value!.stepUp();
const onDown = () => price.value!.stepDown();
<\/script>

<template>
  <div style="display: grid; gap: 12px; max-width: 280px">
    <label for="ni-price">Price (step 0.25, two decimals, never empty)</label>
    <div style="display: flex; gap: 8px; align-items: center">
      <minerva-number-input
        id="ni-price"
        value="9.5"
        min="0"
        step="0.25"
        precision="2"
        no-empty
        ref="price"
      ></minerva-number-input>
      <minerva-button
        id="ni-down"
        variant="outline"
        color="neutral"
        aria-label="Step down"
        @click="onDown"
        >−</minerva-button
      >
      <minerva-button
        id="ni-up"
        variant="outline"
        color="neutral"
        aria-label="Step up"
        @click="onUp"
        >+</minerva-button
      >
    </div>
    <minerva-number-input
      size="small"
      value="3"
      readonly
      aria-label="Read-only"
    ></minerva-number-input>
    <minerva-number-input
      size="large"
      value="42"
      disabled
      show-stepper
      aria-label="Disabled"
    ></minerva-number-input>
  </div>
</template>
`,angular:`// number-input-precision.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// stepUp() / stepDown() change the value programmatically (clamped, no event).
type NumberInput = HTMLElement & { stepUp(): void; stepDown(): void };

@Component({
  selector: "app-number-input-precision",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 280px">
      <label for="ni-price">Price (step 0.25, two decimals, never empty)</label>
      <div style="display: flex; gap: 8px; align-items: center">
        <minerva-number-input
          id="ni-price"
          value="9.5"
          min="0"
          step="0.25"
          precision="2"
          no-empty
          #price
        ></minerva-number-input>
        <minerva-button
          id="ni-down"
          variant="outline"
          color="neutral"
          aria-label="Step down"
          (click)="onDown($event)"
          >−</minerva-button
        >
        <minerva-button
          id="ni-up"
          variant="outline"
          color="neutral"
          aria-label="Step up"
          (click)="onUp($event)"
          >+</minerva-button
        >
      </div>
      <minerva-number-input
        size="small"
        value="3"
        readonly
        aria-label="Read-only"
      ></minerva-number-input>
      <minerva-number-input
        size="large"
        value="42"
        disabled
        show-stepper
        aria-label="Disabled"
      ></minerva-number-input>
    </div>
  \`,
})
export class NumberInputPrecisionComponent {
  @ViewChild("price") price!: ElementRef<NumberInput>;

  onUp = () => this.price.nativeElement.stepUp();
  onDown = () => this.price.nativeElement.stepDown();
}
`,svelte:`<!-- NumberInputPrecision.svelte -->

<script lang="ts">
  // stepUp() / stepDown() change the value programmatically (clamped, no event).

  type NumberInput = HTMLElement & { stepUp(): void; stepDown(): void };

  let price: NumberInput;

  const onUp = () => price.stepUp();
  const onDown = () => price.stepDown();
<\/script>

<div style="display: grid; gap: 12px; max-width: 280px">
  <label for="ni-price">Price (step 0.25, two decimals, never empty)</label>
  <div style="display: flex; gap: 8px; align-items: center">
    <minerva-number-input
      id="ni-price"
      value="9.5"
      min="0"
      step="0.25"
      precision="2"
      no-empty
      bind:this={price}
    ></minerva-number-input>
    <minerva-button
      id="ni-down"
      variant="outline"
      color="neutral"
      aria-label="Step down"
      onclick={onDown}
    >−</minerva-button>
    <minerva-button
      id="ni-up"
      variant="outline"
      color="neutral"
      aria-label="Step up"
      onclick={onUp}
    >+</minerva-button>
  </div>
  <minerva-number-input
    size="small"
    value="3"
    readonly
    aria-label="Read-only"
  ></minerva-number-input>
  <minerva-number-input
    size="large"
    value="42"
    disabled
    show-stepper
    aria-label="Disabled"
  ></minerva-number-input>
</div>
`,solid:`// NumberInputPrecision.tsx

// stepUp() / stepDown() change the value programmatically (clamped, no event).
type NumberInput = HTMLElement & { stepUp(): void; stepDown(): void };

export default function NumberInputPrecision() {
  let price!: NumberInput;

  const onUp = () => price.stepUp();
  const onDown = () => price.stepDown();

  return (
    <div style="display: grid; gap: 12px; max-width: 280px">
      <label for="ni-price">Price (step 0.25, two decimals, never empty)</label>
      <div style="display: flex; gap: 8px; align-items: center">
        <minerva-number-input
          id="ni-price"
          value="9.5"
          min="0"
          step="0.25"
          precision="2"
          no-empty
          ref={price}
        ></minerva-number-input>
        <minerva-button
          id="ni-down"
          variant="outline"
          color="neutral"
          aria-label="Step down"
          on:click={onDown}
        >
          −
        </minerva-button>
        <minerva-button
          id="ni-up"
          variant="outline"
          color="neutral"
          aria-label="Step up"
          on:click={onUp}
        >
          +
        </minerva-button>
      </div>
      <minerva-number-input
        size="small"
        value="3"
        readonly
        aria-label="Read-only"
      ></minerva-number-input>
      <minerva-number-input
        size="large"
        value="42"
        disabled
        show-stepper
        aria-label="Disabled"
      ></minerva-number-input>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 280px">
  <label for="ni-price">Price (step 0.25, two decimals, never empty)</label>
  <div style="display: flex; gap: 8px; align-items: center">
    <minerva-number-input
      id="ni-price"
      value="9.5"
      min="0"
      step="0.25"
      precision="2"
      no-empty
    ></minerva-number-input>
    <minerva-button
      id="ni-down"
      variant="outline"
      color="neutral"
      aria-label="Step down"
      >−</minerva-button
    >
    <minerva-button
      id="ni-up"
      variant="outline"
      color="neutral"
      aria-label="Step up"
      >+</minerva-button
    >
  </div>
  <minerva-number-input
    size="small"
    value="3"
    readonly
    aria-label="Read-only"
  ></minerva-number-input>
  <minerva-number-input
    size="large"
    value="42"
    disabled
    show-stepper
    aria-label="Disabled"
  ></minerva-number-input>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // stepUp() / stepDown() change the value programmatically (clamped, no event).
  const price = document.querySelector("#ni-price");
  const up = document.querySelector("#ni-up");
  const down = document.querySelector("#ni-down");
  const onUp = () => price.stepUp();
  const onDown = () => price.stepDown();
  up.addEventListener("click", onUp);
  down.addEventListener("click", onDown);
<\/script>
`}})))()}n();export{t as default};