import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{p as t,t as n}from"./react-vendor-BvKcNA9t.js";import{l as r}from"./dist-C3Cy1YK6.js";import{i,t as a}from"./DocPage-DUnq_TLt.js";var o=n(),s=Array.from({length:1e3},(e,t)=>({id:`user-${t}`,metadata:{name:`User ${t+1}`,email:`user${t+1}@example.com`}}));function c(){return(0,o.jsx)(`div`,{style:{width:`100%`},children:(0,o.jsx)(r,{items:s,maxHeight:300,itemPadding:12,renderItem:e=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`strong`,{children:e.metadata?.name}),(0,o.jsx)(`div`,{style:{fontSize:12,opacity:.7},children:e.metadata?.email})]})})})}var l=Array.from({length:1e4},(e,t)=>({id:t,metadata:{title:`Row ${t+1}`}}));function u(){return(0,o.jsx)(`div`,{style:{width:`100%`},children:(0,o.jsx)(r,{items:l,itemHeight:40,maxHeight:300,ariaLabel:`Rows`,renderItem:e=>(0,o.jsx)(`span`,{children:e.metadata?.title})})})}var d=Array.from({length:1e5},(e,t)=>({id:t,metadata:{title:`Item ${t+1}`,value:Math.round(Math.random()*1e3)}}));function f(){return(0,o.jsx)(`div`,{style:{width:`100%`},children:(0,o.jsx)(r,{items:d,itemHeight:36,maxHeight:300,overscan:10,highPerformance:!0,renderItem:(e,t)=>(0,o.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,o.jsxs)(`span`,{children:[`#`,t+1,` `,e.metadata?.title]}),(0,o.jsx)(`code`,{children:e.metadata?.value})]})})})}var p=e(t(),1),m=30,h=300,g=e=>Array.from({length:m},(t,n)=>({id:e+n,metadata:{title:`Message ${e+n+1}`}}));function _(){let[e,t]=(0,p.useState)(()=>g(0)),[n,i]=(0,p.useState)(!1),a=(0,p.useCallback)(async()=>{e.length>=h||(i(!0),await new Promise(e=>setTimeout(e,800)),t(e=>[...e,...g(e.length)]),i(!1))},[e.length]);return(0,o.jsxs)(`div`,{style:{width:`100%`},children:[(0,o.jsxs)(`p`,{style:{marginTop:0},children:[e.length,` / `,h,` loaded`]}),(0,o.jsx)(r,{items:e,itemHeight:40,maxHeight:300,loading:n,onLoadMore:a,loadMoreThreshold:120,renderItem:e=>(0,o.jsx)(`span`,{children:e.metadata?.title})})]})}var v=i(Object.assign({"./demos/auto-height.tsx":c,"./demos/basic.tsx":u,"./demos/high-performance.tsx":f,"./demos/infinite-scroll.tsx":_}),Object.assign({"./demos/auto-height.tsx":`import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

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
`,"./demos/basic.tsx":`import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

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
`,"./demos/high-performance.tsx":`import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

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
`,"./demos/infinite-scroll.tsx":`import { useCallback, useState } from "react";
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
`})),y=()=>(0,o.jsx)(a,{id:`virtual-list`,demos:v});export{y as default};