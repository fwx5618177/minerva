import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{Vt as r,tn as i}from"./dist-dg6ajl7p.js";import{c as a,n as o,s,t as c}from"./DocPage-Kqmidh_0.js";function l(){return(0,u.jsxs)(`div`,{style:{width:`100%`},children:[(0,u.jsx)(`p`,{children:`Content above the divider.`}),(0,u.jsx)(i,{}),(0,u.jsx)(`p`,{children:`Content below the divider.`})]})}var u;function d(){return(d=e((()=>{r(),u=n()})))()}function f(){return(0,p.jsxs)(`div`,{style:{width:`100%`},children:[(0,p.jsx)(i,{color:`#7c3aed`,thickness:2}),(0,p.jsx)(i,{color:`#16a34a`,thickness:3,variant:`dashed`,length:`50%`}),(0,p.jsx)(i,{spacing:32,elevation:!0})]})}var p;function m(){return(m=e((()=>{r(),p=n()})))()}function h(){return(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,height:48},children:[(0,g.jsx)(`span`,{children:`Edit`}),(0,g.jsx)(i,{orientation:`vertical`,flexItem:!0,spacing:0}),(0,g.jsx)(`span`,{children:`Share`}),(0,g.jsx)(i,{orientation:`vertical`,flexItem:!0,spacing:0}),(0,g.jsx)(`span`,{children:`Delete`})]})}var g;function _(){return(_=e((()=>{r(),g=n()})))()}function v(){return(0,y.jsxs)(`div`,{style:{width:`100%`},children:[(0,y.jsx)(i,{variant:`solid`}),(0,y.jsx)(i,{variant:`dashed`}),(0,y.jsx)(i,{variant:`dotted`})]})}var y;function b(){return(b=e((()=>{r(),y=n()})))()}function x(){return(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,S.jsx)(`span`,{children:`Home`}),(0,S.jsx)(i,{orientation:`vertical`,length:16,spacing:12}),(0,S.jsx)(`span`,{children:`Products`}),(0,S.jsx)(i,{orientation:`vertical`,length:16,spacing:12}),(0,S.jsx)(`span`,{children:`About`})]})}var S;function C(){return(C=e((()=>{r(),S=n()})))()}function w(){return(0,T.jsxs)(`div`,{style:{width:`100%`},children:[(0,T.jsx)(i,{textAlign:`left`,children:`Left`}),(0,T.jsx)(i,{children:`Center`}),(0,T.jsx)(i,{textAlign:`right`,variant:`dashed`,children:`Right`})]})}var T;function E(){return(E=e((()=>{r(),T=n()})))()}var D;function O(){return(O=e((()=>{D=`import { Divider } from "@minerva/lib-core";

export default function BasicDemo() {
  return (
    <div style={{ width: "100%" }}>
      <p>Content above the divider.</p>
      <Divider />
      <p>Content below the divider.</p>
    </div>
  );
}
`})))()}var k;function A(){return(A=e((()=>{k=`import { Divider } from "@minerva/lib-core";

export default function CustomStyleDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Divider color="#7c3aed" thickness={2} />
      <Divider color="#16a34a" thickness={3} variant="dashed" length="50%" />
      <Divider spacing={32} elevation />
    </div>
  );
}
`})))()}var j;function M(){return(M=e((()=>{j=`import { Divider } from "@minerva/lib-core";

export default function FlexItemDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, height: 48 }}>
      <span>Edit</span>
      <Divider orientation="vertical" flexItem spacing={0} />
      <span>Share</span>
      <Divider orientation="vertical" flexItem spacing={0} />
      <span>Delete</span>
    </div>
  );
}
`})))()}var N;function P(){return(P=e((()=>{N=`import { Divider } from "@minerva/lib-core";

export default function VariantsDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Divider variant="solid" />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
    </div>
  );
}
`})))()}var F;function I(){return(I=e((()=>{F=`import { Divider } from "@minerva/lib-core";

export default function VerticalDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>Home</span>
      <Divider orientation="vertical" length={16} spacing={12} />
      <span>Products</span>
      <Divider orientation="vertical" length={16} spacing={12} />
      <span>About</span>
    </div>
  );
}
`})))()}var L;function R(){return(R=e((()=>{L=`import { Divider } from "@minerva/lib-core";

export default function WithTextDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Divider textAlign="left">Left</Divider>
      <Divider>Center</Divider>
      <Divider textAlign="right" variant="dashed">
        Right
      </Divider>
    </div>
  );
}
`})))()}var z,B,V;function H(){return(H=e((()=>{d(),m(),_(),b(),C(),E(),O(),A(),M(),P(),I(),R(),t(),o(),a(),z=n(),B=s(Object.assign({"./demos/basic.tsx":l,"./demos/custom-style.tsx":f,"./demos/flex-item.tsx":h,"./demos/variants.tsx":v,"./demos/vertical.tsx":x,"./demos/with-text.tsx":w}),Object.assign({"./demos/basic.tsx":D,"./demos/custom-style.tsx":k,"./demos/flex-item.tsx":j,"./demos/variants.tsx":N,"./demos/vertical.tsx":F,"./demos/with-text.tsx":L})),V=()=>(0,z.jsx)(c,{id:`divider`,demos:B})})))()}H();export{V as default};