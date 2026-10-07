import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{f as t,t as n}from"./react-vendor-CUe5nroo.js";import{p as r}from"./dist-DAjZNDC0.js";import{i,t as a}from"./DocPage-B1L0vw6V.js";var o=n();function s(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{animation:`expand`,ariaLabel:`Search (expand)`}),(0,o.jsx)(r,{animation:`shrink`,ariaLabel:`Search (shrink)`}),(0,o.jsx)(r,{animation:`shake`,ariaLabel:`Search (shake)`})]})}function c(){return(0,o.jsx)(r,{ariaLabel:`Search`,onClick:()=>alert(`Search`)})}function l(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{bgColor:`#7c3aed`,iconColor:`#ffffff`,ariaLabel:`Search`}),(0,o.jsx)(r,{bgColor:`#fde68a`,iconColor:`#92400e`,color:`#92400e`,children:`Search`})]})}function u(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{shape:`circle`,ariaLabel:`Search (circle)`}),(0,o.jsx)(r,{shape:`rounded`,ariaLabel:`Search (rounded)`}),(0,o.jsx)(r,{shape:`square`,ariaLabel:`Search (square)`})]})}function d(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{size:`small`,ariaLabel:`Search (small)`}),(0,o.jsx)(r,{size:`medium`,ariaLabel:`Search (medium)`}),(0,o.jsx)(r,{size:`large`,ariaLabel:`Search (large)`}),(0,o.jsx)(r,{size:`xlarge`,ariaLabel:`Search (xlarge)`})]})}var f=e(t(),1);function p(){let[e,t]=(0,f.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:e?`Searching…`:`Search`}),(0,o.jsx)(r,{loading:!0,ariaLabel:`Searching`}),(0,o.jsx)(r,{disabled:!0,ariaLabel:`Search (disabled)`})]})}var m=[`primary`,`success`,`warning`,`error`,`info`];function h(){return(0,o.jsx)(o.Fragment,{children:m.map(e=>(0,o.jsx)(r,{variant:e,ariaLabel:`Search (${e})`},e))})}function g(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:`Search`}),(0,o.jsx)(r,{variant:`success`,size:`large`,children:`Find products`})]})}var _=i(Object.assign({"./demos/animations.tsx":s,"./demos/basic.tsx":c,"./demos/custom-colors.tsx":l,"./demos/shapes.tsx":u,"./demos/sizes.tsx":d,"./demos/states.tsx":p,"./demos/variants.tsx":h,"./demos/with-text.tsx":g}),Object.assign({"./demos/animations.tsx":`import { SearchButton } from "@minerva/lib-core";

export default function AnimationsDemo() {
  return (
    <>
      <SearchButton animation="expand" ariaLabel="Search (expand)" />
      <SearchButton animation="shrink" ariaLabel="Search (shrink)" />
      <SearchButton animation="shake" ariaLabel="Search (shake)" />
    </>
  );
}
`,"./demos/basic.tsx":`import { SearchButton } from "@minerva/lib-core";

export default function BasicDemo() {
  return <SearchButton ariaLabel="Search" onClick={() => alert("Search")} />;
}
`,"./demos/custom-colors.tsx":`import { SearchButton } from "@minerva/lib-core";

export default function CustomColorsDemo() {
  return (
    <>
      <SearchButton bgColor="#7c3aed" iconColor="#ffffff" ariaLabel="Search" />
      <SearchButton bgColor="#fde68a" iconColor="#92400e" color="#92400e">
        Search
      </SearchButton>
    </>
  );
}
`,"./demos/shapes.tsx":`import { SearchButton } from "@minerva/lib-core";

export default function ShapesDemo() {
  return (
    <>
      <SearchButton shape="circle" ariaLabel="Search (circle)" />
      <SearchButton shape="rounded" ariaLabel="Search (rounded)" />
      <SearchButton shape="square" ariaLabel="Search (square)" />
    </>
  );
}
`,"./demos/sizes.tsx":`import { SearchButton } from "@minerva/lib-core";

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
`,"./demos/states.tsx":`import { useState } from "react";
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
`,"./demos/variants.tsx":`import { SearchButton } from "@minerva/lib-core";

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
`,"./demos/with-text.tsx":`import { SearchButton } from "@minerva/lib-core";

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
`})),v=()=>(0,o.jsx)(a,{id:`search-button`,demos:_});export{v as default};