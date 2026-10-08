import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{g as n,t as r}from"./react-vendor-aZSMfLKR.js";import{X as i,cn as a,q as ee}from"./minerva-web-components-e9i9Tzii.js";import{et as o,tt as te}from"./io5-CkIs6v-8.js";import{t as s}from"./stylingHooks-GjssfG7q.js";import{n as c,t as ne}from"./ProgressIndicator-CLa7Qw7I.js";import{m as l,n as u,p as d,t as f}from"./DocPage-BUvZl8IZ.js";var p,m,h,g,_,v;function y(){return(y=t((()=>{p=`_virtualList_150w2_1`,m=`_virtualListContent_150w2_13`,h=`_virtualListItem_150w2_16`,g=`_clickable_150w2_22`,_=`_loadingWrapper_150w2_25`,v={virtualList:p,virtualListContent:m,virtualListItem:h,clickable:g,loadingWrapper:_}})))()}var b,x,S;function C(){return(C=t((()=>{a(),c(),o(),y(),b=e(n(),1),x=r(),S=b.memo(({items:e,itemHeight:t,maxHeight:n,overscan:r=5,renderItem:a,className:o=``,style:c,onLoadMore:l,loadMoreThreshold:u=100,highPerformance:d=!1,loading:f=!1,itemPadding:p=8,onItemClick:m,"aria-label":h,onScroll:g,ref:_,...y})=>{let[S,C]=(0,b.useState)(0),[w,T]=(0,b.useState)(0),E=(0,b.useRef)(0),D=(0,b.useRef)(!1),O=(0,b.useRef)(void 0),k=(0,b.useRef)(void 0),[A,j]=(0,b.useState)(null),M=(0,b.useMemo)(()=>A===null?null:e.findIndex(e=>e.id===A),[A,e]),[N,P]=(0,b.useState)(0),F=!t&&N===0&&e.length>0,I=(0,b.useCallback)(e=>{if(!e||(T(e.clientHeight),typeof ResizeObserver>`u`))return;let t=new ResizeObserver(e=>{for(let t of e)T(t.contentRect.height)});return t.observe(e),()=>t.disconnect()},[]),L=te(I,_),R=(0,b.useCallback)(e=>{if(!e)return;let t=()=>{let t=e.offsetHeight;t>0&&P(t)};if(t(),typeof ResizeObserver>`u`)return;let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]),z=t||(N>0?N+p*2:0),B=(0,b.useMemo)(()=>z?ee({scrollTop:S,viewportHeight:w,itemHeight:z,itemCount:e.length,overscan:r}):{start:0,end:1,visibleCount:1},[S,w,z,r,e.length]),V=(0,b.useCallback)(()=>{O.current!==void 0&&(cancelAnimationFrame(O.current),O.current=void 0),k.current!==void 0&&(`cancelIdleCallback`in window&&cancelIdleCallback(k.current),k.current=void 0)},[]),H=(0,b.useCallback)(e=>{d?(V(),O.current=requestAnimationFrame(()=>{O.current=void 0,`requestIdleCallback`in window?k.current=requestIdleCallback(()=>{k.current=void 0,e()},{timeout:100}):e()})):e()},[d,V]),U=(0,b.useMemo)(()=>{let e=[];for(let t=B.start;t<B.end;t++)e.push({index:t,start:t*z,height:z});if(M!==null&&M>=0&&(M<B.start||M>=B.end)){let t={index:M,start:M*z,height:z};M<B.start?e.unshift(t):e.push(t)}return e},[B,z,M]),W=(0,b.useCallback)(e=>{let{scrollTop:t,scrollHeight:n,clientHeight:r}=e.currentTarget,i=t>E.current;E.current=t,H(()=>{C(t),i&&l&&!D.current&&!f&&n-t-r<u&&n>r&&(D.current=!0,Promise.resolve(l()).finally(()=>{D.current=!1}))})},[l,f,u,H]),G=e=>{g?.(e),W(e)};return(0,b.useEffect)(()=>V,[V]),(0,x.jsxs)(`div`,{...y,ref:L,role:`region`,"aria-label":h,tabIndex:0,"aria-busy":f||void 0,className:i(v.virtualList,o),style:{...c,maxHeight:n,overflow:`auto`,position:`relative`},onScroll:G,...s(`virtual-list`,`root`,{loading:f}),children:[F&&(0,x.jsx)(`div`,{ref:R,className:v.measureItem,"aria-hidden":`true`,children:a(e[0],0)}),(0,x.jsx)(`div`,{style:{height:z?e.length*z:`auto`,position:`relative`,willChange:`transform`},className:v.virtualListContent,role:`list`,"aria-label":h,...s(`virtual-list`,`list`),children:z>0&&U.map(t=>(0,x.jsx)(`div`,{style:{position:`absolute`,top:0,transform:`translateY(${t.start}px)`,width:`100%`,height:z,willChange:`transform`,padding:p},className:i(v.virtualListItem,m&&v.clickable),tabIndex:m?0:void 0,onClick:m?n=>m(e[t.index],t.index,n):void 0,onKeyDown:m?n=>{n.target===n.currentTarget&&(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),m(e[t.index],t.index,n))}:void 0,role:`listitem`,...s(`virtual-list`,`item`),"aria-setsize":e.length,"aria-posinset":t.index+1,onFocus:()=>j(e[t.index].id),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||j(null)},children:a(e[t.index],t.index)},e[t.index].id))}),f&&(0,x.jsx)(`div`,{className:v.loadingWrapper,...s(`virtual-list`,`loading`),children:(0,x.jsx)(ne,{variant:`wave`,size:`small`})})]})})})))()}function w(){return(0,T.jsx)(`div`,{style:{width:`100%`},children:(0,T.jsx)(S,{items:E,maxHeight:300,itemPadding:12,renderItem:e=>(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`strong`,{children:e.metadata?.name}),(0,T.jsx)(`div`,{style:{fontSize:12,opacity:.7},children:e.metadata?.email})]})})})}var T,E;function D(){return(D=t((()=>{C(),T=r(),E=Array.from({length:1e3},(e,t)=>({id:`user-${t}`,metadata:{name:`User ${t+1}`,email:`user${t+1}@example.com`}}))})))()}function O(){return(0,k.jsx)(`div`,{style:{width:`100%`},children:(0,k.jsx)(S,{items:A,itemHeight:40,maxHeight:300,"aria-label":`Rows`,renderItem:e=>(0,k.jsx)(`span`,{children:e.metadata?.title})})})}var k,A;function j(){return(j=t((()=>{C(),k=r(),A=Array.from({length:1e4},(e,t)=>({id:t,metadata:{title:`Row ${t+1}`}}))})))()}function M(){let[e,t]=(0,N.useState)();return(0,P.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,P.jsx)(S,{items:F,itemHeight:40,maxHeight:240,"aria-label":`Invoices`,id:`invoice-list`,"data-section":`billing`,onItemClick:e=>t(String(e.metadata?.title)),renderItem:e=>(0,P.jsx)(`span`,{children:e.metadata?.title})}),(0,P.jsxs)(`span`,{"aria-live":`polite`,children:[`Selected: `,e??`none`]})]})}var N,P,F;function I(){return(I=t((()=>{N=n(),C(),P=r(),F=Array.from({length:1e3},(e,t)=>({id:t,metadata:{title:`Invoice #${1e3+t}`}}))})))()}function L(){return(0,R.jsx)(`div`,{style:{width:`100%`},children:(0,R.jsx)(S,{items:z,itemHeight:36,maxHeight:300,overscan:10,highPerformance:!0,renderItem:(e,t)=>(0,R.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,R.jsxs)(`span`,{children:[`#`,t+1,` `,e.metadata?.title]}),(0,R.jsx)(`code`,{children:e.metadata?.value})]})})})}var R,z;function B(){return(B=t((()=>{C(),R=r(),z=Array.from({length:1e5},(e,t)=>({id:t,metadata:{title:`Item ${t+1}`,value:Math.round(Math.random()*1e3)}}))})))()}function V(){let[e,t]=(0,H.useState)(()=>K(0)),[n,r]=(0,H.useState)(!1),i=(0,H.useCallback)(async()=>{e.length>=G||(r(!0),await new Promise(e=>setTimeout(e,800)),t(e=>[...e,...K(e.length)]),r(!1))},[e.length]);return(0,U.jsxs)(`div`,{style:{width:`100%`},children:[(0,U.jsxs)(`p`,{style:{marginTop:0},children:[e.length,` / `,G,` loaded`]}),(0,U.jsx)(S,{items:e,itemHeight:40,maxHeight:300,loading:n,onLoadMore:i,loadMoreThreshold:120,renderItem:e=>(0,U.jsx)(`span`,{children:e.metadata?.title})})]})}var H,U,W,G,K;function q(){return(q=t((()=>{H=n(),C(),U=r(),W=30,G=300,K=e=>Array.from({length:W},(t,n)=>({id:e+n,metadata:{title:`Message ${e+n+1}`}}))})))()}var J;function Y(){return(Y=t((()=>{J=`import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

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
`})))()}var X;function Z(){return(Z=t((()=>{X=`import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

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
        aria-label="Rows"
        renderItem={(item) => <span>{item.metadata?.title}</span>}
      />
    </div>
  );
}
`})))()}var Q;function $(){return($=t((()=>{Q=`import { useState } from "react";
import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

const items: VirtualListItem[] = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  metadata: { title: \`Invoice #\${1000 + i}\` },
}));

export default function ClickableRowsDemo() {
  const [selected, setSelected] = useState<string>();

  return (
    <div style={{ display: "grid", gap: 12, width: "100%" }}>
      <VirtualList
        items={items}
        itemHeight={40}
        maxHeight={240}
        aria-label="Invoices"
        id="invoice-list"
        data-section="billing"
        onItemClick={(item) => setSelected(String(item.metadata?.title))}
        renderItem={(item) => <span>{item.metadata?.title}</span>}
      />
      <span aria-live="polite">Selected: {selected ?? "none"}</span>
    </div>
  );
}
`})))()}var re;function ie(){return(ie=t((()=>{re=`import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

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
`})))()}var ae;function oe(){return(oe=t((()=>{ae=`import { useCallback, useState } from "react";
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
`})))()}var se,ce,le;function ue(){return(ue=t((()=>{D(),j(),I(),B(),q(),Y(),Z(),$(),ie(),oe(),n(),u(),l(),se=r(),ce=d(Object.assign({"./demos/auto-height.tsx":w,"./demos/basic.tsx":O,"./demos/clickable-rows.tsx":M,"./demos/high-performance.tsx":L,"./demos/infinite-scroll.tsx":V}),Object.assign({"./demos/auto-height.tsx":J,"./demos/basic.tsx":X,"./demos/clickable-rows.tsx":Q,"./demos/high-performance.tsx":re,"./demos/infinite-scroll.tsx":ae})),le=()=>(0,se.jsx)(f,{id:`virtual-list`,demos:ce})})))()}ue();export{le as default};