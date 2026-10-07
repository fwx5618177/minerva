import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{i as r,r as ee}from"./iconBase-BbuKeGtN.js";import{B as te,Z as ne,o as re,s as ie,z as ae}from"./registry-BWHeIt51.js";import{Rt as i,tn as a}from"./dist-DkgrNLMS.js";import{a as oe,c as se,n as ce,o as le,s as ue,t as de}from"./DocPage-Bnv84vTs.js";function fe(){return(0,o.jsx)(a,{defaultCurrent:1,total:50})}var o;function s(){return(s=e((()=>{i(),o=n()})))()}function pe(){return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,c.jsx)(a,{total:300,defaultCurrent:8,siblingCount:1,boundaryCount:1}),(0,c.jsx)(a,{total:300,defaultCurrent:8,siblingCount:2,boundaryCount:2}),(0,c.jsx)(a,{total:300,defaultCurrent:3,hideNumbers:!0,showTotal:!0}),(0,c.jsx)(a,{total:70,defaultCurrent:2,hideEdges:!0})]})}var c;function l(){return(l=e((()=>{i(),c=n()})))()}function me(){let[e,t]=(0,u.useState)(1);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,d.jsx)(a,{current:e,total:100,onChange:t,icons:{prev:(0,d.jsx)(re,{}),next:(0,d.jsx)(ie,{}),jumpPrev:(0,d.jsx)(ae,{}),jumpNext:(0,d.jsx)(te,{})}}),(0,d.jsx)(a,{current:e,total:100,onChange:t,itemRender:(e,t)=>t===`prev`?`Prev`:t===`next`?`Next`:t===`page`?e:`…`})]})}var u,d;function f(){return(f=e((()=>{u=t(),i(),ne(),d=n()})))()}function he(){return(0,p.jsx)(a,{current:2,total:50,disabled:!0})}var p;function m(){return(m=e((()=>{i(),p=n()})))()}function ge(){let[e,t]=(0,h.useState)(6);return(0,g.jsx)(a,{current:e,total:500,onChange:t})}var h,g;function _(){return(_=e((()=>{h=t(),i(),g=n()})))()}function _e(){let[e,t]=(0,v.useState)(1);return(0,y.jsx)(a,{responsive:!0,current:e,total:300,onChange:t,showTotal:!0,showSizeChanger:!0})}var v,y;function b(){return(b=e((()=>{v=t(),i(),y=n()})))()}function ve(){let[e,t]=(0,x.useState)(2),n={current:e,total:50,onChange:t};return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,S.jsx)(a,{...n,shape:`rounded`,variant:`solid`}),(0,S.jsx)(a,{...n,shape:`circle`,variant:`outline`}),(0,S.jsx)(a,{...n,shape:`square`,variant:`ghost`})]})}var x,S;function C(){return(C=e((()=>{x=t(),i(),S=n()})))()}function ye(){let[e,t]=(0,w.useState)(1);return(0,T.jsx)(a,{simple:!0,current:e,total:120,onChange:t})}var w,T;function E(){return(E=e((()=>{w=t(),i(),T=n()})))()}function be(){let[e,t]=(0,D.useState)(1),[n,r]=(0,D.useState)(20);return(0,xe.jsx)(a,{current:e,pageSize:n,total:500,showSizeChanger:!0,pageSizeOptions:[10,20,50],onChange:(e,n)=>{t(e),r(n)}})}var D,xe;function O(){return(O=e((()=>{D=t(),i(),xe=n()})))()}function Se(){let[e,t]=(0,k.useState)(2);return(0,A.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:j.map(n=>(0,A.jsx)(a,{size:n,current:e,total:50,onChange:t},n))})}var k,A,j;function M(){return(M=e((()=>{k=t(),i(),A=n(),j=[`small`,`medium`,`large`]})))()}function Ce(){let[e,t]=(0,N.useState)(1);return(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,P.jsx)(a,{current:e,total:200,onChange:t,showTotal:!0,showQuickJumper:!0}),(0,P.jsx)(a,{current:e,total:200,onChange:t,showTotal:!0,totalRender:(e,[t,n])=>`${t}-${n} of ${e} items`})]})}var N,P;function F(){return(F=e((()=>{N=t(),i(),P=n()})))()}var I;function L(){return(L=e((()=>{I=`import { Pagination } from "@minerva/lib-core";

export default function BasicDemo() {
  return <Pagination defaultCurrent={1} total={50} />;
}
`})))()}var R;function z(){return(z=e((()=>{R=`import { Pagination } from "@minerva/lib-core";

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
`})))()}var B;function V(){return(V=e((()=>{B=`import { useState } from "react";
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
`})))()}var H;function U(){return(U=e((()=>{H=`import { Pagination } from "@minerva/lib-core";

export default function DisabledDemo() {
  return <Pagination current={2} total={50} disabled />;
}
`})))()}var W;function G(){return(G=e((()=>{W=`import { useState } from "react";
import { Pagination } from "@minerva/lib-core";

export default function ManyPagesDemo() {
  const [page, setPage] = useState(6);

  return <Pagination current={page} total={500} onChange={setPage} />;
}
`})))()}var K;function q(){return(q=e((()=>{K=`import { useState } from "react";
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
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { useState } from "react";
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
`})))()}var X;function Z(){return(Z=e((()=>{X=`import { useState } from "react";
import { Pagination } from "@minerva/lib-core";

export default function SimpleDemo() {
  const [page, setPage] = useState(1);

  return <Pagination simple current={page} total={120} onChange={setPage} />;
}
`})))()}var we;function Te(){return(Te=e((()=>{we=`import { useState } from "react";
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
`})))()}var Q,Ae,je;function $(){return($=e((()=>{s(),l(),f(),m(),_(),b(),C(),E(),O(),M(),F(),L(),z(),V(),U(),G(),q(),Y(),Z(),Te(),De(),ke(),t(),ee(),ce(),se(),le(),Q=n(),Ae=ue(Object.assign({"./demos/basic.tsx":fe,"./demos/compact.tsx":pe,"./demos/custom-render.tsx":me,"./demos/disabled.tsx":he,"./demos/many-pages.tsx":ge,"./demos/responsive.tsx":_e,"./demos/shapes-and-variants.tsx":ve,"./demos/simple.tsx":ye,"./demos/size-changer.tsx":be,"./demos/sizes.tsx":Se,"./demos/total-and-jumper.tsx":Ce}),Object.assign({"./demos/basic.tsx":I,"./demos/compact.tsx":R,"./demos/custom-render.tsx":B,"./demos/disabled.tsx":H,"./demos/many-pages.tsx":W,"./demos/responsive.tsx":K,"./demos/shapes-and-variants.tsx":J,"./demos/simple.tsx":X,"./demos/size-changer.tsx":we,"./demos/sizes.tsx":Ee,"./demos/total-and-jumper.tsx":Oe})),je=()=>{let{t:e}=r();return(0,Q.jsx)(de,{id:`pagination`,demos:Ae,children:(0,Q.jsxs)(`section`,{className:oe.section,"aria-labelledby":`accessibility`,children:[(0,Q.jsx)(`h2`,{id:`accessibility`,children:e(`docs.pagination.a11y.title`)}),(0,Q.jsx)(`p`,{className:oe.prose,children:e(`docs.pagination.a11y.body`)})]})})}})))()}$();export{je as default};