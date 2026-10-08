import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- BoxSurfaces.vue -->

<template>
  <div
    style="
      display: grid;
      gap: 12px;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    "
  >
    <minerva-box
      p="4"
      bg="bg"
      rounded="md"
      border="1px solid var(--border-color)"
      >bg</minerva-box
    >
    <minerva-box p="4" bg="bg.subtle" rounded="md">bg.subtle</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">bg.muted</minerva-box>
    <minerva-box p="4" bg="bg.canvas" rounded="md">bg.canvas</minerva-box>
    <minerva-box p="4" bg="bg.elevated" rounded="lg" box-shadow="sm"
      >box-shadow="sm"</minerva-box
    >
    <minerva-box p="4" bg="bg.elevated" rounded="xl" box-shadow="lg"
      >box-shadow="lg"</minerva-box
    >
    <minerva-box p="4" bg="bg.muted" rounded="full" style="text-align: center"
      >rounded="full"</minerva-box
    >
    <minerva-box
      p="4"
      rounded="md"
      bg="linear-gradient(135deg, var(--primary-color), var(--info-color))"
      style="color: white"
      >CSS gradient</minerva-box
    >
  </div>
</template>
`,angular:`// box-surfaces.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-box-surfaces",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      style="
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      "
    >
      <minerva-box
        p="4"
        bg="bg"
        rounded="md"
        border="1px solid var(--border-color)"
        >bg</minerva-box
      >
      <minerva-box p="4" bg="bg.subtle" rounded="md">bg.subtle</minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">bg.muted</minerva-box>
      <minerva-box p="4" bg="bg.canvas" rounded="md">bg.canvas</minerva-box>
      <minerva-box p="4" bg="bg.elevated" rounded="lg" box-shadow="sm"
        >box-shadow="sm"</minerva-box
      >
      <minerva-box p="4" bg="bg.elevated" rounded="xl" box-shadow="lg"
        >box-shadow="lg"</minerva-box
      >
      <minerva-box p="4" bg="bg.muted" rounded="full" style="text-align: center"
        >rounded="full"</minerva-box
      >
      <minerva-box
        p="4"
        rounded="md"
        bg="linear-gradient(135deg, var(--primary-color), var(--info-color))"
        style="color: white"
        >CSS gradient</minerva-box
      >
    </div>
  \`,
})
export class BoxSurfacesComponent {}
`,svelte:`<!-- BoxSurfaces.svelte -->

<div
  style="
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  "
>
  <minerva-box p="4" bg="bg" rounded="md" border="1px solid var(--border-color)"
    >bg</minerva-box>
  <minerva-box p="4" bg="bg.subtle" rounded="md">bg.subtle</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">bg.muted</minerva-box>
  <minerva-box p="4" bg="bg.canvas" rounded="md">bg.canvas</minerva-box>
  <minerva-box p="4" bg="bg.elevated" rounded="lg" box-shadow="sm"
    >box-shadow="sm"</minerva-box>
  <minerva-box p="4" bg="bg.elevated" rounded="xl" box-shadow="lg"
    >box-shadow="lg"</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="full" style="text-align: center"
    >rounded="full"</minerva-box>
  <minerva-box
    p="4"
    rounded="md"
    bg="linear-gradient(135deg, var(--primary-color), var(--info-color))"
    style="color: white"
    >CSS gradient</minerva-box>
</div>
`,solid:`// BoxSurfaces.tsx

export default function BoxSurfaces() {
  return (
    <div
      style="
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      "
    >
      <minerva-box
        p="4"
        bg="bg"
        rounded="md"
        border="1px solid var(--border-color)"
      >
        bg
      </minerva-box>
      <minerva-box p="4" bg="bg.subtle" rounded="md">
        bg.subtle
      </minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">
        bg.muted
      </minerva-box>
      <minerva-box p="4" bg="bg.canvas" rounded="md">
        bg.canvas
      </minerva-box>
      <minerva-box p="4" bg="bg.elevated" rounded="lg" box-shadow="sm">
        box-shadow="sm"
      </minerva-box>
      <minerva-box p="4" bg="bg.elevated" rounded="xl" box-shadow="lg">
        box-shadow="lg"
      </minerva-box>
      <minerva-box
        p="4"
        bg="bg.muted"
        rounded="full"
        style="text-align: center"
      >
        rounded="full"
      </minerva-box>
      <minerva-box
        p="4"
        rounded="md"
        bg="linear-gradient(135deg, var(--primary-color), var(--info-color))"
        style="color: white"
      >
        CSS gradient
      </minerva-box>
    </div>
  );
}
`,html:`<div
  style="
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  "
>
  <minerva-box p="4" bg="bg" rounded="md" border="1px solid var(--border-color)"
    >bg</minerva-box
  >
  <minerva-box p="4" bg="bg.subtle" rounded="md">bg.subtle</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">bg.muted</minerva-box>
  <minerva-box p="4" bg="bg.canvas" rounded="md">bg.canvas</minerva-box>
  <minerva-box p="4" bg="bg.elevated" rounded="lg" box-shadow="sm"
    >box-shadow="sm"</minerva-box
  >
  <minerva-box p="4" bg="bg.elevated" rounded="xl" box-shadow="lg"
    >box-shadow="lg"</minerva-box
  >
  <minerva-box p="4" bg="bg.muted" rounded="full" style="text-align: center"
    >rounded="full"</minerva-box
  >
  <minerva-box
    p="4"
    rounded="md"
    bg="linear-gradient(135deg, var(--primary-color), var(--info-color))"
    style="color: white"
    >CSS gradient</minerva-box
  >
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};