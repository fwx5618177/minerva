import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- UploadBasic.vue -->

<template>
  <div style="display: grid; gap: 16px; max-width: 480px">
    <minerva-upload
      label="Avatar (image, 1 MB max)"
      accept="image/*"
      max-size="1048576"
      replace
      removable
    ></minerva-upload>
    <minerva-upload
      label="Attachments (up to 3 files)"
      multiple
      max-count="3"
      removable
    ></minerva-upload>
  </div>
</template>
`,angular:`// upload-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-upload-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px; max-width: 480px">
      <minerva-upload
        label="Avatar (image, 1 MB max)"
        accept="image/*"
        max-size="1048576"
        replace
        removable
      ></minerva-upload>
      <minerva-upload
        label="Attachments (up to 3 files)"
        multiple
        max-count="3"
        removable
      ></minerva-upload>
    </div>
  \`,
})
export class UploadBasicComponent {}
`,svelte:`<!-- UploadBasic.svelte -->

<div style="display: grid; gap: 16px; max-width: 480px">
  <minerva-upload
    label="Avatar (image, 1 MB max)"
    accept="image/*"
    max-size="1048576"
    replace
    removable
  ></minerva-upload>
  <minerva-upload
    label="Attachments (up to 3 files)"
    multiple
    max-count="3"
    removable
  ></minerva-upload>
</div>
`,solid:`// UploadBasic.tsx

export default function UploadBasic() {
  return (
    <div style="display: grid; gap: 16px; max-width: 480px">
      <minerva-upload
        label="Avatar (image, 1 MB max)"
        accept="image/*"
        max-size="1048576"
        replace
        removable
      ></minerva-upload>
      <minerva-upload
        label="Attachments (up to 3 files)"
        multiple
        max-count="3"
        removable
      ></minerva-upload>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px; max-width: 480px">
  <minerva-upload
    label="Avatar (image, 1 MB max)"
    accept="image/*"
    max-size="1048576"
    replace
    removable
  ></minerva-upload>
  <minerva-upload
    label="Attachments (up to 3 files)"
    multiple
    max-count="3"
    removable
  ></minerva-upload>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};