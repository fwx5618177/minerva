import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{x as r}from"./dist-C3Cy1YK6.js";import{I as i,J as a,L as o,a as s,o as c}from"./registry-DXcVqgdp.js";import{i as l,r as u,t as d}from"./DocPage-DUnq_TLt.js";var f=n();function p(){return(0,f.jsx)(r,{defaultCurrent:1,total:50})}var m=e(t(),1);function h(){let[e,t]=(0,m.useState)(1);return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,f.jsx)(r,{current:e,total:100,onChange:t,icons:{prev:(0,f.jsx)(s,{}),next:(0,f.jsx)(c,{}),jumpPrev:(0,f.jsx)(i,{}),jumpNext:(0,f.jsx)(o,{})}}),(0,f.jsx)(r,{current:e,total:100,onChange:t,itemRender:(e,t)=>t===`prev`?`Prev`:t===`next`?`Next`:t===`page`?e:`…`})]})}function g(){return(0,f.jsx)(r,{current:2,total:50,disabled:!0})}function _(){let[e,t]=(0,m.useState)(6);return(0,f.jsx)(r,{current:e,total:500,onChange:t})}function v(){let[e,t]=(0,m.useState)(1);return(0,f.jsx)(r,{responsive:!0,current:e,total:300,onChange:t,showTotal:!0,showSizeChanger:!0})}function y(){let[e,t]=(0,m.useState)(2),n={current:e,total:50,onChange:t};return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,f.jsx)(r,{...n,shape:`rounded`,variant:`filled`}),(0,f.jsx)(r,{...n,shape:`circle`,variant:`outlined`}),(0,f.jsx)(r,{...n,shape:`square`,variant:`text`})]})}function b(){let[e,t]=(0,m.useState)(1);return(0,f.jsx)(r,{simple:!0,current:e,total:120,onChange:t})}function x(){let[e,t]=(0,m.useState)(1),[n,i]=(0,m.useState)(20);return(0,f.jsx)(r,{current:e,pageSize:n,total:500,showSizeChanger:!0,pageSizeOptions:[10,20,50],onChange:(e,n)=>{t(e),i(n)}})}var S=[`small`,`medium`,`large`];function C(){let[e,t]=(0,m.useState)(2);return(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:S.map(n=>(0,f.jsx)(r,{size:n,current:e,total:50,onChange:t},n))})}function w(){let[e,t]=(0,m.useState)(1);return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,f.jsx)(r,{current:e,total:200,onChange:t,showTotal:!0,showQuickJumper:!0}),(0,f.jsx)(r,{current:e,total:200,onChange:t,showTotal:!0,totalRender:(e,[t,n])=>`${t}-${n} of ${e} items`})]})}var T=l(Object.assign({"./demos/basic.tsx":p,"./demos/custom-render.tsx":h,"./demos/disabled.tsx":g,"./demos/many-pages.tsx":_,"./demos/responsive.tsx":v,"./demos/shapes-and-variants.tsx":y,"./demos/simple.tsx":b,"./demos/size-changer.tsx":x,"./demos/sizes.tsx":C,"./demos/total-and-jumper.tsx":w}),Object.assign({"./demos/basic.tsx":`import { Pagination } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Pagination defaultCurrent={1} total={50} />;
}
`,"./demos/custom-render.tsx":`import { useState } from "react";
import { Pagination } from "@minerva/lib-core";
import {
  IoArrowBack,
  IoArrowForward,
  IoPlayBack,
  IoPlayForward,
} from "react-icons/io5";

export default function CustomRenderDemo() {
  const [page, setPage] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Pagination
        current={page}
        total={100}
        onChange={setPage}
        icons={{
          prev: <IoArrowBack />,
          next: <IoArrowForward />,
          jumpPrev: <IoPlayBack />,
          jumpNext: <IoPlayForward />,
        }}
      />
      <Pagination
        current={page}
        total={100}
        onChange={setPage}
        itemRender={(p, type) =>
          type === "prev"
            ? "Prev"
            : type === "next"
              ? "Next"
              : type === "page"
                ? p
                : "…"
        }
      />
    </div>
  );
}
`,"./demos/disabled.tsx":`import { Pagination } from "@minerva/lib-core";

export default function DisabledDemo() {
  return <Pagination current={2} total={50} disabled />;
}
`,"./demos/many-pages.tsx":`import { useState } from "react";
import { Pagination } from "@minerva/lib-core";

export default function ManyPagesDemo() {
  const [page, setPage] = useState(6);

  return <Pagination current={page} total={500} onChange={setPage} />;
}
`,"./demos/responsive.tsx":`import { useState } from "react";
import { Pagination } from "@minerva/lib-core";

export default function ResponsiveDemo() {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      responsive
      current={page}
      total={300}
      onChange={setPage}
      showTotal
      showSizeChanger
    />
  );
}
`,"./demos/shapes-and-variants.tsx":`import { useState } from "react";
import { Pagination } from "@minerva/lib-core";

export default function ShapesAndVariantsDemo() {
  const [page, setPage] = useState(2);
  const common = { current: page, total: 50, onChange: setPage };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Pagination {...common} shape="rounded" variant="filled" />
      <Pagination {...common} shape="circle" variant="outlined" />
      <Pagination {...common} shape="square" variant="text" />
    </div>
  );
}
`,"./demos/simple.tsx":`import { useState } from "react";
import { Pagination } from "@minerva/lib-core";

export default function SimpleDemo() {
  const [page, setPage] = useState(1);

  return <Pagination simple current={page} total={120} onChange={setPage} />;
}
`,"./demos/size-changer.tsx":`import { useState } from "react";
import { Pagination } from "@minerva/lib-core";

export default function SizeChangerDemo() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  return (
    <Pagination
      current={page}
      pageSize={pageSize}
      total={500}
      showSizeChanger
      pageSizeOptions={[10, 20, 50]}
      onChange={(nextPage, nextSize) => {
        setPage(nextPage);
        setPageSize(nextSize);
      }}
    />
  );
}
`,"./demos/sizes.tsx":`import { useState } from "react";
import { Pagination } from "@minerva/lib-core";

const sizes = ["small", "medium", "large"] as const;

export default function SizesDemo() {
  const [page, setPage] = useState(2);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {sizes.map((size) => (
        <Pagination
          key={size}
          size={size}
          current={page}
          total={50}
          onChange={setPage}
        />
      ))}
    </div>
  );
}
`,"./demos/total-and-jumper.tsx":`import { useState } from "react";
import { Pagination } from "@minerva/lib-core";

export default function TotalAndJumperDemo() {
  const [page, setPage] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Pagination
        current={page}
        total={200}
        onChange={setPage}
        showTotal
        showQuickJumper
      />
      <Pagination
        current={page}
        total={200}
        onChange={setPage}
        showTotal
        totalRender={(total, [from, to]) => \`\${from}-\${to} of \${total} items\`}
      />
    </div>
  );
}
`})),E=()=>{let{t:e}=a();return(0,f.jsx)(d,{id:`pagination`,demos:T,children:(0,f.jsxs)(`section`,{className:u.section,"aria-labelledby":`accessibility`,children:[(0,f.jsx)(`h2`,{id:`accessibility`,children:e(`docs.pagination.a11y.title`)}),(0,f.jsx)(`p`,{className:u.prose,children:e(`docs.pagination.a11y.body`)})]})})};export{E as default};