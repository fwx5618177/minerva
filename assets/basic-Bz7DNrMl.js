import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ProseBasic.vue -->

<template>
  <minerva-prose style="max-width: 640px">
    <h2>Release notes</h2>
    <p>
      Version 2.4 brings <strong>Web Components</strong> for every primitive,
      sharing the <a href="https://example.com/tokens">design tokens</a> of the
      React library. Install it with <code>npm install</code>.
    </p>
    <h3>Highlights</h3>
    <ul>
      <li>
        Form-associated inputs that work in a plain <code>&lt;form&gt;</code>
      </li>
      <li>
        Theme scopes with <code>&lt;minerva-config&gt;</code>
        <ul>
          <li>Light, dark and system modes</li>
          <li>Four palettes</li>
        </ul>
      </li>
    </ul>
    <blockquote>
      <p>Nested descendants are styled too: the rules live in the light DOM.</p>
    </blockquote>
  </minerva-prose>
</template>
`,angular:`// prose-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-prose-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-prose style="max-width: 640px">
      <h2>Release notes</h2>
      <p>
        Version 2.4 brings <strong>Web Components</strong> for every primitive,
        sharing the <a href="https://example.com/tokens">design tokens</a> of
        the React library. Install it with <code>npm install</code>.
      </p>
      <h3>Highlights</h3>
      <ul>
        <li>
          Form-associated inputs that work in a plain <code>&lt;form&gt;</code>
        </li>
        <li>
          Theme scopes with <code>&lt;minerva-config&gt;</code>
          <ul>
            <li>Light, dark and system modes</li>
            <li>Four palettes</li>
          </ul>
        </li>
      </ul>
      <blockquote>
        <p>
          Nested descendants are styled too: the rules live in the light DOM.
        </p>
      </blockquote>
    </minerva-prose>
  \`,
})
export class ProseBasicComponent {}
`,svelte:`<!-- ProseBasic.svelte -->

<minerva-prose style="max-width: 640px">
  <h2>Release notes</h2>
  <p>
    Version 2.4 brings <strong>Web Components</strong> for every primitive,
    sharing the <a href="https://example.com/tokens">design tokens</a> of the
    React library. Install it with <code>npm install</code>.
  </p>
  <h3>Highlights</h3>
  <ul>
    <li>
      Form-associated inputs that work in a plain <code>&lt;form&gt;</code>
    </li>
    <li>
      Theme scopes with <code>&lt;minerva-config&gt;</code>
      <ul>
        <li>Light, dark and system modes</li>
        <li>Four palettes</li>
      </ul>
    </li>
  </ul>
  <blockquote>
    <p>Nested descendants are styled too: the rules live in the light DOM.</p>
  </blockquote>
</minerva-prose>
`,solid:`// ProseBasic.tsx

export default function ProseBasic() {
  return (
    <minerva-prose style="max-width: 640px">
      <h2>Release notes</h2>
      <p>
        Version 2.4 brings <strong>Web Components</strong> for every primitive,
        sharing the <a href="https://example.com/tokens">design tokens</a> of
        the React library. Install it with <code>npm install</code>.
      </p>
      <h3>Highlights</h3>
      <ul>
        <li>
          Form-associated inputs that work in a plain <code>&lt;form&gt;</code>
        </li>
        <li>
          Theme scopes with <code>&lt;minerva-config&gt;</code>
          <ul>
            <li>Light, dark and system modes</li>
            <li>Four palettes</li>
          </ul>
        </li>
      </ul>
      <blockquote>
        <p>
          Nested descendants are styled too: the rules live in the light DOM.
        </p>
      </blockquote>
    </minerva-prose>
  );
}
`,html:`<minerva-prose style="max-width: 640px">
  <h2>Release notes</h2>
  <p>
    Version 2.4 brings <strong>Web Components</strong> for every primitive,
    sharing the <a href="https://example.com/tokens">design tokens</a> of the
    React library. Install it with <code>npm install</code>.
  </p>
  <h3>Highlights</h3>
  <ul>
    <li>
      Form-associated inputs that work in a plain <code>&lt;form&gt;</code>
    </li>
    <li>
      Theme scopes with <code>&lt;minerva-config&gt;</code>
      <ul>
        <li>Light, dark and system modes</li>
        <li>Four palettes</li>
      </ul>
    </li>
  </ul>
  <blockquote>
    <p>Nested descendants are styled too: the rules live in the light DOM.</p>
  </blockquote>
</minerva-prose>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};