import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-EhfBFkcC.js";import{c as r,l as i}from"./minerva-web-components-BCL_6rcP.js";import{O as a,c as o,k as s,n as c,s as l,t as u}from"./DocPage-HgWiqH91.js";import{n as d,t as f}from"./Button-CwqLLYn6.js";import{t as p}from"./dataAttributes-C-grv0bs.js";function m(e){let t=``;if(e&&typeof window<`u`){let n=i(window);n.isSupported&&(n.addHook(`uponSanitizeAttribute`,(e,t)=>{t.attrName===`src`&&(e.nodeName!==`IMG`||!/^data:image\/(?:png|jpeg|gif|webp|avif);base64,[a-z0-9+/=\s]+$/i.test(t.attrValue))&&(t.keepAttr=!1)}),n.sanitize(_,g)===v&&(t=n.sanitize(e,g)))}return`<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="${h}"><meta name="referrer" content="no-referrer"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>${t}</body></html>`}var h,g,_,v;function y(){return(y=e((()=>{r(),h=`default-src 'none'; script-src 'none'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'; object-src 'none'; frame-src 'none'; font-src 'none'; media-src 'none'; form-action 'none'; base-uri 'none'`,g={ALLOWED_TAGS:`a abbr b bdi bdo blockquote br caption center code col colgroup dd del div dl dt em figcaption figure h1 h2 h3 h4 h5 h6 hr i img ins li ol p pre s section small span strong style sub sup table tbody td tfoot th thead tr u ul wbr`.split(` `),ALLOWED_ATTR:`alt title class style lang dir role width height align valign bgcolor border cellpadding cellspacing colspan rowspan scope src`.split(` `),ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!0,FORBID_TAGS:[`base`,`meta`,`link`,`script`,`form`,`input`,`button`,`iframe`,`object`,`embed`,`svg`,`math`],FORBID_ATTR:[`href`,`srcdoc`,`srcset`,`action`,`formaction`,`target`,`ping`,`id`,`name`],FORCE_BODY:!0,RETURN_TRUSTED_TYPE:!1},_=`<p title="t" onclick="x()">ok</p><script>x()<\/script><img alt="a" src="https://x.invalid/p" onerror="x()">`,v=`<p title="t">ok</p><img alt="a">`})))()}var b,x,S;function C(){return(C=e((()=>{b=`_preview_1d6x9_1`,x=`_frame_1d6x9_8`,S={preview:b,frame:x}})))()}var w,T,E;function D(){return(D=e((()=>{a(),y(),C(),w=t(),T=n(),E=({html:e,title:t,viewport:n=`desktop`,mobileWidth:r=375,height:i=600,className:a,style:o,ref:c,...l})=>{let[u,d]=(0,w.useState)(()=>m());(0,w.useEffect)(()=>d(m(e)),[e]);let f=Number.isFinite(r)&&r>0?r:375,h=Number.isFinite(i)&&i>0?i:600;return(0,T.jsx)(`div`,{...p(l),ref:c,className:s(S.preview,a),style:o,children:(0,T.jsx)(`iframe`,{title:t,sandbox:``,referrerPolicy:`no-referrer`,srcDoc:u,className:S.frame,style:{width:n===`mobile`?f:`100%`,height:h}},u)})}})))()}function O(){return(0,k.jsx)(E,{title:`Welcome email preview`,html:A,height:320})}var k,A;function j(){return(j=e((()=>{D(),k=n(),A=`
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
</div>`})))()}function M(){let[e,t]=(0,N.useState)(`mobile`);return(0,P.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,P.jsxs)(f,{color:`neutral`,variant:`outline`,size:`small`,onClick:()=>t(e=>e===`mobile`?`desktop`:`mobile`),children:[`Switch to `,e===`mobile`?`desktop`:`mobile`]}),(0,P.jsx)(E,{title:`Newsletter preview`,html:F,viewport:e,mobileWidth:360,height:240})]})}var N,P,F;function I(){return(I=e((()=>{N=t(),d(),D(),P=n(),F=`<div style="font-family: sans-serif; padding: 16px">
  <h3>Responsive newsletter</h3>
  <p>Resize the preview between desktop and mobile widths.</p>
</div>`})))()}var L;function R(){return(R=e((()=>{L=`import { HtmlPreview } from "@minerva/lib-core";

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
`})))()}var z;function B(){return(B=e((()=>{z=`import { useState } from "react";
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
`})))()}var V,H,U;function W(){return(W=e((()=>{j(),I(),R(),B(),t(),c(),o(),V=n(),H=l(Object.assign({"./demos/basic.tsx":O,"./demos/viewports.tsx":M}),Object.assign({"./demos/basic.tsx":L,"./demos/viewports.tsx":z})),U=()=>(0,V.jsx)(u,{id:`html-preview`,demos:H})})))()}W();export{U as default};