import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{n as r,t as i}from"./Pagination-CQqn4H9S.js";import{N as ee,Q as te,T as ne,Z as re,d as ie,u as ae,w as oe}from"./sample-Dya6Jarx.js";import{a as se,c as ce,n as le,o as ue,s as de,t as fe}from"./DocPage-DzKszXiH.js";function pe(){return(0,a.jsx)(r,{defaultCurrent:1,total:50})}var a;function o(){return(o=e((()=>{i(),a=n()})))()}function me(){return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,s.jsx)(r,{total:300,defaultCurrent:8,siblingCount:1,boundaryCount:1}),(0,s.jsx)(r,{total:300,defaultCurrent:8,siblingCount:2,boundaryCount:2}),(0,s.jsx)(r,{total:300,defaultCurrent:3,hideNumbers:!0,showTotal:!0}),(0,s.jsx)(r,{total:70,defaultCurrent:2,hideEdges:!0})]})}var s;function c(){return(c=e((()=>{i(),s=n()})))()}function he(){let[e,t]=(0,l.useState)(1);return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,u.jsx)(r,{current:e,total:100,onChange:t,icons:{prev:(0,u.jsx)(ae,{}),next:(0,u.jsx)(ie,{}),jumpPrev:(0,u.jsx)(oe,{}),jumpNext:(0,u.jsx)(ne,{})}}),(0,u.jsx)(r,{current:e,total:100,onChange:t,itemRender:(e,t)=>t===`prev`?`Prev`:t===`next`?`Next`:t===`page`?e:`…`})]})}var l,u;function d(){return(d=e((()=>{l=t(),i(),ee(),u=n()})))()}function ge(){return(0,f.jsx)(r,{current:2,total:50,disabled:!0})}var f;function p(){return(p=e((()=>{i(),f=n()})))()}function _e(){let[e,t]=(0,m.useState)(6);return(0,h.jsx)(r,{current:e,total:500,onChange:t})}var m,h;function g(){return(g=e((()=>{m=t(),i(),h=n()})))()}function ve(){let[e,t]=(0,_.useState)(1);return(0,v.jsx)(r,{responsive:!0,current:e,total:300,onChange:t,showTotal:!0,showSizeChanger:!0})}var _,v;function y(){return(y=e((()=>{_=t(),i(),v=n()})))()}function ye(){let[e,t]=(0,b.useState)(2),n={current:e,total:50,onChange:t};return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,x.jsx)(r,{...n,shape:`rounded`,variant:`solid`}),(0,x.jsx)(r,{...n,shape:`circle`,variant:`outline`}),(0,x.jsx)(r,{...n,shape:`square`,variant:`ghost`})]})}var b,x;function S(){return(S=e((()=>{b=t(),i(),x=n()})))()}function be(){let[e,t]=(0,C.useState)(1);return(0,w.jsx)(r,{simple:!0,current:e,total:120,onChange:t})}var C,w;function T(){return(T=e((()=>{C=t(),i(),w=n()})))()}function xe(){let[e,t]=(0,E.useState)(1),[n,i]=(0,E.useState)(20);return(0,D.jsx)(r,{current:e,pageSize:n,total:500,showSizeChanger:!0,pageSizeOptions:[10,20,50],onChange:(e,n)=>{t(e),i(n)}})}var E,D;function O(){return(O=e((()=>{E=t(),i(),D=n()})))()}function Se(){let[e,t]=(0,k.useState)(2);return(0,A.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:j.map(n=>(0,A.jsx)(r,{size:n,current:e,total:50,onChange:t},n))})}var k,A,j;function M(){return(M=e((()=>{k=t(),i(),A=n(),j=[`small`,`medium`,`large`]})))()}function Ce(){let[e,t]=(0,we.useState)(1);return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,N.jsx)(r,{current:e,total:200,onChange:t,showTotal:!0,showQuickJumper:!0}),(0,N.jsx)(r,{current:e,total:200,onChange:t,showTotal:!0,totalRender:(e,[t,n])=>`${t}-${n} of ${e} items`})]})}var we,N;function P(){return(P=e((()=>{we=t(),i(),N=n()})))()}var F;function I(){return(I=e((()=>{F=`import { Pagination } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Pagination defaultCurrent={1} total={50} />;
}
`})))()}var L;function R(){return(R=e((()=>{L=`import { Pagination } from "@minerva/lib-core";

export default function CompactDemo() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Pagination
        total={300}
        defaultCurrent={8}
        siblingCount={1}
        boundaryCount={1}
      />
      <Pagination
        total={300}
        defaultCurrent={8}
        siblingCount={2}
        boundaryCount={2}
      />
      <Pagination total={300} defaultCurrent={3} hideNumbers showTotal />
      <Pagination total={70} defaultCurrent={2} hideEdges />
    </div>
  );
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { useState } from "react";
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
`})))()}var V;function H(){return(H=e((()=>{V=`import { Pagination } from "@minerva/lib-core";

export default function DisabledDemo() {
  return <Pagination current={2} total={50} disabled />;
}
`})))()}var U;function W(){return(W=e((()=>{U=`import { useState } from "react";
import { Pagination } from "@minerva/lib-core";

export default function ManyPagesDemo() {
  const [page, setPage] = useState(6);

  return <Pagination current={page} total={500} onChange={setPage} />;
}
`})))()}var G;function K(){return(K=e((()=>{G=`import { useState } from "react";
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
`})))()}var q;function J(){return(J=e((()=>{q=`import { useState } from "react";
import { Pagination } from "@minerva/lib-core";

export default function ShapesAndVariantsDemo() {
  const [page, setPage] = useState(2);
  const common = { current: page, total: 50, onChange: setPage };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Pagination {...common} shape="rounded" variant="solid" />
      <Pagination {...common} shape="circle" variant="outline" />
      <Pagination {...common} shape="square" variant="ghost" />
    </div>
  );
}
`})))()}var Y;function X(){return(X=e((()=>{Y=`import { useState } from "react";
import { Pagination } from "@minerva/lib-core";

export default function SimpleDemo() {
  const [page, setPage] = useState(1);

  return <Pagination simple current={page} total={120} onChange={setPage} />;
}
`})))()}var Z;function Te(){return(Te=e((()=>{Z=`import { useState } from "react";
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
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`import { useState } from "react";
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
`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`import { useState } from "react";
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
`})))()}var Q,Ae,je;function $(){return($=e((()=>{o(),c(),d(),p(),g(),y(),S(),T(),O(),M(),P(),I(),R(),B(),H(),W(),K(),J(),X(),Te(),De(),ke(),t(),re(),le(),ce(),ue(),Q=n(),Ae=de(Object.assign({"./demos/basic.tsx":pe,"./demos/compact.tsx":me,"./demos/custom-render.tsx":he,"./demos/disabled.tsx":ge,"./demos/many-pages.tsx":_e,"./demos/responsive.tsx":ve,"./demos/shapes-and-variants.tsx":ye,"./demos/simple.tsx":be,"./demos/size-changer.tsx":xe,"./demos/sizes.tsx":Se,"./demos/total-and-jumper.tsx":Ce}),Object.assign({"./demos/basic.tsx":F,"./demos/compact.tsx":L,"./demos/custom-render.tsx":z,"./demos/disabled.tsx":V,"./demos/many-pages.tsx":U,"./demos/responsive.tsx":G,"./demos/shapes-and-variants.tsx":q,"./demos/simple.tsx":Y,"./demos/size-changer.tsx":Z,"./demos/sizes.tsx":Ee,"./demos/total-and-jumper.tsx":Oe})),je=()=>{let{t:e}=te();return(0,Q.jsx)(fe,{id:`pagination`,demos:Ae,children:(0,Q.jsxs)(`section`,{className:se.section,"aria-labelledby":`accessibility`,children:[(0,Q.jsx)(`h2`,{id:`accessibility`,children:e(`docs.pagination.a11y.title`)}),(0,Q.jsx)(`p`,{className:se.prose,children:e(`docs.pagination.a11y.body`)})]})})}})))()}$();export{je as default};