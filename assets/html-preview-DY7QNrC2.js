import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{f as r}from"./ConfigProvider-dyyJePWz-Ft1cOGmJ.js";import{Rt as i,u as a}from"./dist-DkgrNLMS.js";import{c as o,n as s,s as c,t as l}from"./DocPage-Bnv84vTs.js";function u(){return(0,d.jsx)(a,{title:`Welcome email preview`,html:f,height:320})}var d,f;function p(){return(p=e((()=>{i(),d=n(),f=`
<style>
  .card { font-family: sans-serif; max-width: 480px; margin: 24px auto; padding: 24px;
          border: 1px solid #ddd; border-radius: 8px; }
  .cta { display: inline-block; padding: 8px 16px; background: #4f46e5; color: #fff; }
</style>
<div class="card">
  <h2>Welcome aboard!</h2>
  <p>Thanks for signing up. Scripts, forms and remote images are removed.</p>
  <script>alert("never runs")<\/script>
  <img src="https://example.com/tracking-pixel.png" alt="tracking pixel">
  <span class="cta">Get started</span>
</div>`})))()}function m(){let[e,t]=(0,h.useState)(`mobile`);return(0,g.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,g.jsxs)(r,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>e===`mobile`?`desktop`:`mobile`),children:[`Switch to `,e===`mobile`?`desktop`:`mobile`]}),(0,g.jsx)(a,{title:`Newsletter preview`,html:_,viewport:e,mobileWidth:360,height:240})]})}var h,g,_;function v(){return(v=e((()=>{h=t(),i(),g=n(),_=`<div style="font-family: sans-serif; padding: 16px">
  <h3>Responsive newsletter</h3>
  <p>Resize the preview between desktop and mobile widths.</p>
</div>`})))()}var y;function b(){return(b=e((()=>{y=`import { HtmlPreview } from "@minerva/lib-core";

const email = \`
<style>
  .card { font-family: sans-serif; max-width: 480px; margin: 24px auto; padding: 24px;
          border: 1px solid #ddd; border-radius: 8px; }
  .cta { display: inline-block; padding: 8px 16px; background: #4f46e5; color: #fff; }
</style>
<div class="card">
  <h2>Welcome aboard!</h2>
  <p>Thanks for signing up. Scripts, forms and remote images are removed.</p>
  <script>alert("never runs")<\/script>
  <img src="https://example.com/tracking-pixel.png" alt="tracking pixel">
  <span class="cta">Get started</span>
</div>\`;

export default function BasicDemo() {
  return (
    <HtmlPreview title="Welcome email preview" html={email} height={320} />
  );
}
`})))()}var x;function S(){return(S=e((()=>{x=`import { useState } from "react";
import {
  Button,
  HtmlPreview,
  type HtmlPreviewViewport,
} from "@minerva/lib-core";

const html = \`<div style="font-family: sans-serif; padding: 16px">
  <h3>Responsive newsletter</h3>
  <p>Resize the preview between desktop and mobile widths.</p>
</div>\`;

export default function ViewportsDemo() {
  const [viewport, setViewport] = useState<HtmlPreviewViewport>("mobile");
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <Button
        color="neutral"
        variant="outline"
        size="small"
        onClick={() =>
          setViewport((v) => (v === "mobile" ? "desktop" : "mobile"))
        }
      >
        Switch to {viewport === "mobile" ? "desktop" : "mobile"}
      </Button>
      <HtmlPreview
        title="Newsletter preview"
        html={html}
        viewport={viewport}
        mobileWidth={360}
        height={240}
      />
    </div>
  );
}
`})))()}var C,w,T;function E(){return(E=e((()=>{p(),v(),b(),S(),t(),s(),o(),C=n(),w=c(Object.assign({"./demos/basic.tsx":u,"./demos/viewports.tsx":m}),Object.assign({"./demos/basic.tsx":y,"./demos/viewports.tsx":x})),T=()=>(0,C.jsx)(l,{id:`html-preview`,demos:w})})))()}E();export{T as default};