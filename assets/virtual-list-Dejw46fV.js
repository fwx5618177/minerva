import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,t as n}from"./react-vendor-fq7Q804H.js";import{C as r,Vt as i}from"./dist-dg6ajl7p.js";import{c as a,n as o,s,t as c}from"./DocPage-Kqmidh_0.js";function l(){return(0,u.jsx)(`div`,{style:{width:`100%`},children:(0,u.jsx)(r,{items:d,maxHeight:300,itemPadding:12,renderItem:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`strong`,{children:e.metadata?.name}),(0,u.jsx)(`div`,{style:{fontSize:12,opacity:.7},children:e.metadata?.email})]})})})}var u,d;function f(){return(f=e((()=>{i(),u=n(),d=Array.from({length:1e3},(e,t)=>({id:`user-${t}`,metadata:{name:`User ${t+1}`,email:`user${t+1}@example.com`}}))})))()}function p(){return(0,m.jsx)(`div`,{style:{width:`100%`},children:(0,m.jsx)(r,{items:h,itemHeight:40,maxHeight:300,ariaLabel:`Rows`,renderItem:e=>(0,m.jsx)(`span`,{children:e.metadata?.title})})})}var m,h;function g(){return(g=e((()=>{i(),m=n(),h=Array.from({length:1e4},(e,t)=>({id:t,metadata:{title:`Row ${t+1}`}}))})))()}function _(){return(0,v.jsx)(`div`,{style:{width:`100%`},children:(0,v.jsx)(r,{items:y,itemHeight:36,maxHeight:300,overscan:10,highPerformance:!0,renderItem:(e,t)=>(0,v.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,v.jsxs)(`span`,{children:[`#`,t+1,` `,e.metadata?.title]}),(0,v.jsx)(`code`,{children:e.metadata?.value})]})})})}var v,y;function b(){return(b=e((()=>{i(),v=n(),y=Array.from({length:1e5},(e,t)=>({id:t,metadata:{title:`Item ${t+1}`,value:Math.round(Math.random()*1e3)}}))})))()}function x(){let[e,t]=(0,S.useState)(()=>E(0)),[n,i]=(0,S.useState)(!1),a=(0,S.useCallback)(async()=>{e.length>=T||(i(!0),await new Promise(e=>setTimeout(e,800)),t(e=>[...e,...E(e.length)]),i(!1))},[e.length]);return(0,C.jsxs)(`div`,{style:{width:`100%`},children:[(0,C.jsxs)(`p`,{style:{marginTop:0},children:[e.length,` / `,T,` loaded`]}),(0,C.jsx)(r,{items:e,itemHeight:40,maxHeight:300,loading:n,onLoadMore:a,loadMoreThreshold:120,renderItem:e=>(0,C.jsx)(`span`,{children:e.metadata?.title})})]})}var S,C,w,T,E;function D(){return(D=e((()=>{S=t(),i(),C=n(),w=30,T=300,E=e=>Array.from({length:w},(t,n)=>({id:e+n,metadata:{title:`Message ${e+n+1}`}}))})))()}var O;function k(){return(k=e((()=>{O=`import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

const items: VirtualListItem[] = Array.from({ length: 1000 }, (_, i) => ({
  id: \`user-\${i}\`,
  metadata: { name: \`User \${i + 1}\`, email: \`user\${i + 1}@example.com\` },
}));

export default function AutoHeightDemo() {
  return (
    <div style={{ width: "100%" }}>
      <VirtualList
        items={items}
        maxHeight={300}
        itemPadding={12}
        renderItem={(item) => (
          <div>
            <strong>{item.metadata?.name}</strong>
            <div style={{ fontSize: 12, opacity: 0.7 }}>
              {item.metadata?.email}
            </div>
          </div>
        )}
      />
    </div>
  );
}
`})))()}var A;function j(){return(j=e((()=>{A=`import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

const items: VirtualListItem[] = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  metadata: { title: \`Row \${i + 1}\` },
}));

export default function BasicDemo() {
  return (
    <div style={{ width: "100%" }}>
      <VirtualList
        items={items}
        itemHeight={40}
        maxHeight={300}
        ariaLabel="Rows"
        renderItem={(item) => <span>{item.metadata?.title}</span>}
      />
    </div>
  );
}
`})))()}var M;function N(){return(N=e((()=>{M=`import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

const items: VirtualListItem[] = Array.from({ length: 100000 }, (_, i) => ({
  id: i,
  metadata: { title: \`Item \${i + 1}\`, value: Math.round(Math.random() * 1000) },
}));

export default function HighPerformanceDemo() {
  return (
    <div style={{ width: "100%" }}>
      <VirtualList
        items={items}
        itemHeight={36}
        maxHeight={300}
        overscan={10}
        highPerformance
        renderItem={(item, index) => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              #{index + 1} {item.metadata?.title}
            </span>
            <code>{item.metadata?.value}</code>
          </div>
        )}
      />
    </div>
  );
}
`})))()}var P;function F(){return(F=e((()=>{P=`import { useCallback, useState } from "react";
import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

const PAGE_SIZE = 30;
const MAX_ITEMS = 300;

const createPage = (start: number): VirtualListItem[] =>
  Array.from({ length: PAGE_SIZE }, (_, i) => ({
    id: start + i,
    metadata: { title: \`Message \${start + i + 1}\` },
  }));

export default function InfiniteScrollDemo() {
  const [items, setItems] = useState(() => createPage(0));
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    if (items.length >= MAX_ITEMS) return;
    setLoading(true);
    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 800));
    setItems((prev) => [...prev, ...createPage(prev.length)]);
    setLoading(false);
  }, [items.length]);

  return (
    <div style={{ width: "100%" }}>
      <p style={{ marginTop: 0 }}>
        {items.length} / {MAX_ITEMS} loaded
      </p>
      <VirtualList
        items={items}
        itemHeight={40}
        maxHeight={300}
        loading={loading}
        onLoadMore={loadMore}
        loadMoreThreshold={120}
        renderItem={(item) => <span>{item.metadata?.title}</span>}
      />
    </div>
  );
}
`})))()}var I,L,R;function z(){return(z=e((()=>{f(),g(),b(),D(),k(),j(),N(),F(),t(),o(),a(),I=n(),L=s(Object.assign({"./demos/auto-height.tsx":l,"./demos/basic.tsx":p,"./demos/high-performance.tsx":_,"./demos/infinite-scroll.tsx":x}),Object.assign({"./demos/auto-height.tsx":O,"./demos/basic.tsx":A,"./demos/high-performance.tsx":M,"./demos/infinite-scroll.tsx":P})),R=()=>(0,I.jsx)(c,{id:`virtual-list`,demos:L})})))()}z();export{R as default};