import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- StackAttached.vue -->

<template>
  <minerva-hstack attached aria-label="Text alignment">
    <button
      type="button"
      style="
        padding: 6px 12px;
        border: 1px solid var(--border-color);
        background: var(--surface-color);
        color: inherit;
      "
    >
      Left
    </button>
    <button
      type="button"
      style="
        padding: 6px 12px;
        border: 1px solid var(--border-color);
        background: var(--surface-color);
        color: inherit;
      "
    >
      Center
    </button>
    <button
      type="button"
      style="
        padding: 6px 12px;
        border: 1px solid var(--border-color);
        background: var(--surface-color);
        color: inherit;
      "
    >
      Right
    </button>
  </minerva-hstack>
  <minerva-vstack
    attached
    aria-label="Account fields"
    style="margin-top: 16px; max-width: 280px"
  >
    <input
      aria-label="Email"
      placeholder="Email"
      style="padding: 8px; border: 1px solid var(--border-color)"
    />
    <input
      aria-label="Password"
      type="password"
      placeholder="Password"
      style="padding: 8px; border: 1px solid var(--border-color)"
    />
  </minerva-vstack>
</template>
`,angular:`// stack-attached.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-stack-attached",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-hstack attached aria-label="Text alignment">
      <button
        type="button"
        style="
          padding: 6px 12px;
          border: 1px solid var(--border-color);
          background: var(--surface-color);
          color: inherit;
        "
      >
        Left
      </button>
      <button
        type="button"
        style="
          padding: 6px 12px;
          border: 1px solid var(--border-color);
          background: var(--surface-color);
          color: inherit;
        "
      >
        Center
      </button>
      <button
        type="button"
        style="
          padding: 6px 12px;
          border: 1px solid var(--border-color);
          background: var(--surface-color);
          color: inherit;
        "
      >
        Right
      </button>
    </minerva-hstack>
    <minerva-vstack
      attached
      aria-label="Account fields"
      style="margin-top: 16px; max-width: 280px"
    >
      <input
        aria-label="Email"
        placeholder="Email"
        style="padding: 8px; border: 1px solid var(--border-color)"
      />
      <input
        aria-label="Password"
        type="password"
        placeholder="Password"
        style="padding: 8px; border: 1px solid var(--border-color)"
      />
    </minerva-vstack>
  \`,
})
export class StackAttachedComponent {}
`,svelte:`<!-- StackAttached.svelte -->

<minerva-hstack attached aria-label="Text alignment">
  <button
    type="button"
    style="
      padding: 6px 12px;
      border: 1px solid var(--border-color);
      background: var(--surface-color);
      color: inherit;
    "
  >
    Left
  </button>
  <button
    type="button"
    style="
      padding: 6px 12px;
      border: 1px solid var(--border-color);
      background: var(--surface-color);
      color: inherit;
    "
  >
    Center
  </button>
  <button
    type="button"
    style="
      padding: 6px 12px;
      border: 1px solid var(--border-color);
      background: var(--surface-color);
      color: inherit;
    "
  >
    Right
  </button>
</minerva-hstack>
<minerva-vstack
  attached
  aria-label="Account fields"
  style="margin-top: 16px; max-width: 280px"
>
  <input
    aria-label="Email"
    placeholder="Email"
    style="padding: 8px; border: 1px solid var(--border-color)"
  />
  <input
    aria-label="Password"
    type="password"
    placeholder="Password"
    style="padding: 8px; border: 1px solid var(--border-color)"
  />
</minerva-vstack>
`,solid:`// StackAttached.tsx

export default function StackAttached() {
  return (
    <>
      <minerva-hstack attached aria-label="Text alignment">
        <button
          type="button"
          style="
            padding: 6px 12px;
            border: 1px solid var(--border-color);
            background: var(--surface-color);
            color: inherit;
          "
        >
          Left
        </button>
        <button
          type="button"
          style="
            padding: 6px 12px;
            border: 1px solid var(--border-color);
            background: var(--surface-color);
            color: inherit;
          "
        >
          Center
        </button>
        <button
          type="button"
          style="
            padding: 6px 12px;
            border: 1px solid var(--border-color);
            background: var(--surface-color);
            color: inherit;
          "
        >
          Right
        </button>
      </minerva-hstack>
      <minerva-vstack
        attached
        aria-label="Account fields"
        style="margin-top: 16px; max-width: 280px"
      >
        <input
          aria-label="Email"
          placeholder="Email"
          style="padding: 8px; border: 1px solid var(--border-color)"
        />
        <input
          aria-label="Password"
          type="password"
          placeholder="Password"
          style="padding: 8px; border: 1px solid var(--border-color)"
        />
      </minerva-vstack>
    </>
  );
}
`,html:`<minerva-hstack attached aria-label="Text alignment">
  <button
    type="button"
    style="
      padding: 6px 12px;
      border: 1px solid var(--border-color);
      background: var(--surface-color);
      color: inherit;
    "
  >
    Left
  </button>
  <button
    type="button"
    style="
      padding: 6px 12px;
      border: 1px solid var(--border-color);
      background: var(--surface-color);
      color: inherit;
    "
  >
    Center
  </button>
  <button
    type="button"
    style="
      padding: 6px 12px;
      border: 1px solid var(--border-color);
      background: var(--surface-color);
      color: inherit;
    "
  >
    Right
  </button>
</minerva-hstack>
<minerva-vstack
  attached
  aria-label="Account fields"
  style="margin-top: 16px; max-width: 280px"
>
  <input
    aria-label="Email"
    placeholder="Email"
    style="padding: 8px; border: 1px solid var(--border-color)"
  />
  <input
    aria-label="Password"
    type="password"
    placeholder="Password"
    style="padding: 8px; border: 1px solid var(--border-color)"
  />
</minerva-vstack>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};