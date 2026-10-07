import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{d as r,h as i}from"./dist-CcA3uxH5.js";import{c as a,n as o,s,t as c}from"./DocPage-Dm1vTl9w.js";function l(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{animation:`expand`,ariaLabel:`Search (expand)`}),(0,u.jsx)(i,{animation:`shrink`,ariaLabel:`Search (shrink)`}),(0,u.jsx)(i,{animation:`shake`,ariaLabel:`Search (shake)`})]})}var u;function d(){return(d=e((()=>{r(),u=n()})))()}function ee(){return(0,f.jsx)(i,{onClick:()=>alert(`Search`)})}var f;function p(){return(p=e((()=>{r(),f=n()})))()}function m(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{bgColor:`#7c3aed`,iconColor:`#ffffff`}),(0,h.jsx)(i,{bgColor:`#fde68a`,iconColor:`#92400e`,color:`#92400e`,children:`Search`})]})}var h;function g(){return(g=e((()=>{r(),h=n()})))()}function _(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{shape:`circle`,ariaLabel:`Search (circle)`}),(0,v.jsx)(i,{shape:`rounded`,ariaLabel:`Search (rounded)`}),(0,v.jsx)(i,{shape:`square`,ariaLabel:`Search (square)`})]})}var v;function y(){return(y=e((()=>{r(),v=n()})))()}function b(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{size:`small`,ariaLabel:`Search (small)`}),(0,x.jsx)(i,{size:`medium`,ariaLabel:`Search (medium)`}),(0,x.jsx)(i,{size:`large`,ariaLabel:`Search (large)`}),(0,x.jsx)(i,{size:`xlarge`,ariaLabel:`Search (xlarge)`})]})}var x;function S(){return(S=e((()=>{r(),x=n()})))()}function C(){let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(i,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:e?`Searching…`:`Search`}),(0,T.jsx)(i,{loading:!0,ariaLabel:`Searching`}),(0,T.jsx)(i,{disabled:!0,ariaLabel:`Search (disabled)`})]})}var w,T;function E(){return(E=e((()=>{w=t(),r(),T=n()})))()}function D(){return(0,O.jsx)(O.Fragment,{children:k.map(e=>(0,O.jsx)(i,{variant:e,ariaLabel:`Search (${e})`},e))})}var O,k;function A(){return(A=e((()=>{r(),O=n(),k=[`primary`,`success`,`warning`,`error`,`info`]})))()}function j(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(i,{children:`Search`}),(0,M.jsx)(i,{variant:`success`,size:`large`,children:`Find products`})]})}var M;function N(){return(N=e((()=>{r(),M=n()})))()}var P;function F(){return(F=e((()=>{P=`import { SearchButton } from "@minerva/lib-core";

export default function AnimationsDemo() {
  return (
    <>
      <SearchButton animation="expand" ariaLabel="Search (expand)" />
      <SearchButton animation="shrink" ariaLabel="Search (shrink)" />
      <SearchButton animation="shake" ariaLabel="Search (shake)" />
    </>
  );
}
`})))()}var I;function L(){return(L=e((()=>{I=`import { SearchButton } from "@minerva/lib-core";

export default function BasicDemo() {
  return <SearchButton onClick={() => alert("Search")} />;
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { SearchButton } from "@minerva/lib-core";

export default function CustomColorsDemo() {
  return (
    <>
      <SearchButton bgColor="#7c3aed" iconColor="#ffffff" />
      <SearchButton bgColor="#fde68a" iconColor="#92400e" color="#92400e">
        Search
      </SearchButton>
    </>
  );
}
`})))()}var B;function V(){return(V=e((()=>{B=`import { SearchButton } from "@minerva/lib-core";

export default function ShapesDemo() {
  return (
    <>
      <SearchButton shape="circle" ariaLabel="Search (circle)" />
      <SearchButton shape="rounded" ariaLabel="Search (rounded)" />
      <SearchButton shape="square" ariaLabel="Search (square)" />
    </>
  );
}
`})))()}var H;function U(){return(U=e((()=>{H=`import { SearchButton } from "@minerva/lib-core";

export default function SizesDemo() {
  return (
    <>
      <SearchButton size="small" ariaLabel="Search (small)" />
      <SearchButton size="medium" ariaLabel="Search (medium)" />
      <SearchButton size="large" ariaLabel="Search (large)" />
      <SearchButton size="xlarge" ariaLabel="Search (xlarge)" />
    </>
  );
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { useState } from "react";
import { SearchButton } from "@minerva/lib-core";

export default function StatesDemo() {
  const [loading, setLoading] = useState(false);

  const search = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <>
      <SearchButton loading={loading} onClick={search}>
        {loading ? "Searching…" : "Search"}
      </SearchButton>
      <SearchButton loading ariaLabel="Searching" />
      <SearchButton disabled ariaLabel="Search (disabled)" />
    </>
  );
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { SearchButton } from "@minerva/lib-core";

const variants = ["primary", "success", "warning", "error", "info"] as const;

export default function VariantsDemo() {
  return (
    <>
      {variants.map((variant) => (
        <SearchButton
          key={variant}
          variant={variant}
          ariaLabel={\`Search (\${variant})\`}
        />
      ))}
    </>
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { SearchButton } from "@minerva/lib-core";

export default function WithTextDemo() {
  return (
    <>
      <SearchButton>Search</SearchButton>
      <SearchButton variant="success" size="large">
        Find products
      </SearchButton>
    </>
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{d(),p(),g(),y(),S(),E(),A(),N(),F(),L(),z(),V(),U(),G(),q(),Y(),t(),o(),a(),X=n(),Z=s(Object.assign({"./demos/animations.tsx":l,"./demos/basic.tsx":ee,"./demos/custom-colors.tsx":m,"./demos/shapes.tsx":_,"./demos/sizes.tsx":b,"./demos/states.tsx":C,"./demos/variants.tsx":D,"./demos/with-text.tsx":j}),Object.assign({"./demos/animations.tsx":P,"./demos/basic.tsx":I,"./demos/custom-colors.tsx":R,"./demos/shapes.tsx":B,"./demos/sizes.tsx":H,"./demos/states.tsx":W,"./demos/variants.tsx":K,"./demos/with-text.tsx":J})),Q=()=>(0,X.jsx)(c,{id:`search-button`,demos:Z})})))()}$();export{Q as default};