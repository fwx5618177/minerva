import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,c as i,cn as a,l as o}from"./minerva-web-components-e9i9Tzii.js";import{m as s,n as c,p as l,t as u}from"./DocPage-9P1WMt4D.js";import{t as d}from"./stylingHooks-GjssfG7q.js";import{n as f,t as p}from"./Button-DN5Do18G.js";import{t as m}from"./dataAttributes-C-grv0bs.js";function h(e){let t=``;if(e&&typeof window<`u`){let n=o(window);n.isSupported&&(n.addHook(`uponSanitizeAttribute`,(e,t)=>{t.attrName===`src`&&(e.nodeName!==`IMG`||!/^data:image\/(?:png|jpeg|gif|webp|avif);base64,[a-z0-9+/=\s]+$/i.test(t.attrValue))&&(t.keepAttr=!1)}),n.sanitize(v,_)===y&&(t=n.sanitize(e,_)))}return`<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="${g}"><meta name="referrer" content="no-referrer"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>${t}</body></html>`}var g,_,v,y;function b(){return(b=e((()=>{i(),g=`default-src 'none'; script-src 'none'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'; object-src 'none'; frame-src 'none'; font-src 'none'; media-src 'none'; form-action 'none'; base-uri 'none'`,_={ALLOWED_TAGS:`a abbr b bdi bdo blockquote br caption center code col colgroup dd del div dl dt em figcaption figure h1 h2 h3 h4 h5 h6 hr i img ins li ol p pre s section small span strong style sub sup table tbody td tfoot th thead tr u ul wbr`.split(` `),ALLOWED_ATTR:`alt title class style lang dir role width height align valign bgcolor border cellpadding cellspacing colspan rowspan scope src`.split(` `),ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!0,FORBID_TAGS:[`base`,`meta`,`link`,`script`,`form`,`input`,`button`,`iframe`,`object`,`embed`,`svg`,`math`],FORBID_ATTR:[`href`,`srcdoc`,`srcset`,`action`,`formaction`,`target`,`ping`,`id`,`name`],FORCE_BODY:!0,RETURN_TRUSTED_TYPE:!1},v=`<p title="t" onclick="x()">ok</p><script>x()<\/script><img alt="a" src="https://x.invalid/p" onerror="x()">`,y=`<p title="t">ok</p><img alt="a">`})))()}var x,S,C;function w(){return(w=e((()=>{x=`_preview_1d6x9_1`,S=`_frame_1d6x9_8`,C={preview:x,frame:S}})))()}var T,E,D;function O(){return(O=e((()=>{a(),b(),w(),T=t(),E=n(),D=({html:e,title:t,viewport:n=`desktop`,mobileWidth:i=375,height:a=600,className:o,style:s,ref:c,...l})=>{let[u,f]=(0,T.useState)(()=>h());(0,T.useEffect)(()=>f(h(e)),[e]);let p=Number.isFinite(i)&&i>0?i:375,g=Number.isFinite(a)&&a>0?a:600;return(0,E.jsx)(`div`,{...m(l),ref:c,className:r(C.preview,o),style:s,...d(`html-preview`,`root`),children:(0,E.jsx)(`iframe`,{title:t,sandbox:``,referrerPolicy:`no-referrer`,srcDoc:u,className:C.frame,...d(`html-preview`,`frame`),style:{width:n===`mobile`?p:`100%`,height:g}},u)})}})))()}function k(){return(0,A.jsx)(D,{title:`Welcome email preview`,html:j,height:320})}var A,j;function M(){return(M=e((()=>{O(),A=n(),j=`
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
</div>`})))()}function N(){let[e,t]=(0,P.useState)(`mobile`);return(0,F.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,F.jsxs)(f,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>e===`mobile`?`desktop`:`mobile`),children:[`Switch to `,e===`mobile`?`desktop`:`mobile`]}),(0,F.jsx)(D,{title:`Newsletter preview`,html:I,viewport:e,mobileWidth:360,height:240})]})}var P,F,I;function L(){return(L=e((()=>{P=t(),p(),O(),F=n(),I=`<div style="font-family: sans-serif; padding: 16px">
  <h3>Responsive newsletter</h3>
  <p>Resize the preview between desktop and mobile widths.</p>
</div>`})))()}var R;function z(){return(z=e((()=>{R=`import { HtmlPreview } from "@minerva/lib-core";

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
`})))()}var B;function V(){return(V=e((()=>{B=`import { useState } from "react";
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
`})))()}var H,U,W;function G(){return(G=e((()=>{M(),L(),z(),V(),t(),c(),s(),H=n(),U=l(Object.assign({"./demos/basic.tsx":k,"./demos/viewports.tsx":N}),Object.assign({"./demos/basic.tsx":R,"./demos/viewports.tsx":B})),W=()=>(0,H.jsx)(u,{id:`html-preview`,demos:U})})))()}G();export{W as default};