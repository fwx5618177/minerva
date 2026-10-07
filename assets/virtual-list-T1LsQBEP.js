import{i as e,n as t}from"./rolldown-runtime-8BhlS34s.js";import{h as n,t as r}from"./react-vendor-fq7Q804H.js";import{n as i,t as a}from"./cn-CJDie0PQ.js";import{n as ee,t as o}from"./ProgressIndicator-D2C5-puu.js";import{n as te,t as s}from"./mergeRefs-CWbOvZcQ.js";import{c,n as l,s as u,t as d}from"./DocPage-DzKszXiH.js";var f,p,m,h,g,_;function v(){return(v=t((()=>{f=`_virtualList_150w2_1`,p=`_virtualListContent_150w2_13`,m=`_virtualListItem_150w2_16`,h=`_clickable_150w2_22`,g=`_loadingWrapper_150w2_25`,_={virtualList:f,virtualListContent:p,virtualListItem:m,clickable:h,loadingWrapper:g}})))()}var y,b,x;function S(){return(S=t((()=>{a(),o(),s(),v(),y=e(n(),1),b=r(),x=y.memo(({items:e,itemHeight:t,maxHeight:n,overscan:r=5,renderItem:a,className:o=``,style:s,onLoadMore:c,loadMoreThreshold:l=100,highPerformance:u=!1,loading:d=!1,itemPadding:f=8,onItemClick:p,"aria-label":m,onScroll:h,ref:g,...v})=>{let[x,S]=(0,y.useState)(0),[C,w]=(0,y.useState)(0),T=(0,y.useRef)(0),E=(0,y.useRef)(!1),D=(0,y.useRef)(void 0),O=(0,y.useRef)(void 0),[k,A]=(0,y.useState)(null),j=(0,y.useMemo)(()=>k===null?null:e.findIndex(e=>e.id===k),[k,e]),[M,N]=(0,y.useState)(0),P=!t&&M===0&&e.length>0,F=(0,y.useCallback)(e=>{if(!e||(w(e.clientHeight),typeof ResizeObserver>`u`))return;let t=new ResizeObserver(e=>{for(let t of e)w(t.contentRect.height)});return t.observe(e),()=>t.disconnect()},[]),I=te(F,g),L=(0,y.useCallback)(e=>{if(!e)return;let t=()=>{let t=e.offsetHeight;t>0&&N(t)};if(t(),typeof ResizeObserver>`u`)return;let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]),R=t||(M>0?M+f*2:0),z=(0,y.useMemo)(()=>{if(!R)return{start:0,end:1,visibleCount:1};let t=Math.max(0,Math.floor(x/R)-r),n=Math.ceil(C/R)+2*r;return{start:t,end:Math.min(e.length,t+n),visibleCount:n}},[x,C,R,r,e.length]),B=(0,y.useCallback)(()=>{D.current!==void 0&&(cancelAnimationFrame(D.current),D.current=void 0),O.current!==void 0&&(`cancelIdleCallback`in window&&cancelIdleCallback(O.current),O.current=void 0)},[]),V=(0,y.useCallback)(e=>{u?(B(),D.current=requestAnimationFrame(()=>{D.current=void 0,`requestIdleCallback`in window?O.current=requestIdleCallback(()=>{O.current=void 0,e()},{timeout:100}):e()})):e()},[u,B]),H=(0,y.useMemo)(()=>{let e=[];for(let t=z.start;t<z.end;t++)e.push({index:t,start:t*R,height:R});if(j!==null&&j>=0&&(j<z.start||j>=z.end)){let t={index:j,start:j*R,height:R};j<z.start?e.unshift(t):e.push(t)}return e},[z,R,j]),U=(0,y.useCallback)(e=>{let{scrollTop:t,scrollHeight:n,clientHeight:r}=e.currentTarget,i=t>T.current;T.current=t,V(()=>{S(t),i&&c&&!E.current&&!d&&n-t-r<l&&n>r&&(E.current=!0,Promise.resolve(c()).finally(()=>{E.current=!1}))})},[c,d,l,V]),W=e=>{h?.(e),U(e)};return(0,y.useEffect)(()=>B,[B]),(0,b.jsxs)(`div`,{...v,ref:I,role:`region`,"aria-label":m,tabIndex:0,"aria-busy":d||void 0,className:i(_.virtualList,o),style:{...s,maxHeight:n,overflow:`auto`,position:`relative`},onScroll:W,children:[P&&(0,b.jsx)(`div`,{ref:L,className:_.measureItem,"aria-hidden":`true`,children:a(e[0],0)}),(0,b.jsx)(`div`,{style:{height:R?e.length*R:`auto`,position:`relative`,willChange:`transform`},className:_.virtualListContent,role:`list`,"aria-label":m,children:R>0&&H.map(t=>(0,b.jsx)(`div`,{style:{position:`absolute`,top:0,transform:`translateY(${t.start}px)`,width:`100%`,height:R,willChange:`transform`,padding:f},className:i(_.virtualListItem,p&&_.clickable),tabIndex:p?0:void 0,onClick:p?n=>p(e[t.index],t.index,n):void 0,onKeyDown:p?n=>{n.target===n.currentTarget&&(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),p(e[t.index],t.index,n))}:void 0,role:`listitem`,"aria-setsize":e.length,"aria-posinset":t.index+1,onFocus:()=>A(e[t.index].id),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||A(null)},children:a(e[t.index],t.index)},e[t.index].id))}),d&&(0,b.jsx)(`div`,{className:_.loadingWrapper,children:(0,b.jsx)(ee,{variant:`wave`,size:`small`})})]})})})))()}function C(){return(0,w.jsx)(`div`,{style:{width:`100%`},children:(0,w.jsx)(x,{items:T,maxHeight:300,itemPadding:12,renderItem:e=>(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:e.metadata?.name}),(0,w.jsx)(`div`,{style:{fontSize:12,opacity:.7},children:e.metadata?.email})]})})})}var w,T;function E(){return(E=t((()=>{S(),w=r(),T=Array.from({length:1e3},(e,t)=>({id:`user-${t}`,metadata:{name:`User ${t+1}`,email:`user${t+1}@example.com`}}))})))()}function D(){return(0,O.jsx)(`div`,{style:{width:`100%`},children:(0,O.jsx)(x,{items:k,itemHeight:40,maxHeight:300,"aria-label":`Rows`,renderItem:e=>(0,O.jsx)(`span`,{children:e.metadata?.title})})})}var O,k;function A(){return(A=t((()=>{S(),O=r(),k=Array.from({length:1e4},(e,t)=>({id:t,metadata:{title:`Row ${t+1}`}}))})))()}function j(){let[e,t]=(0,M.useState)();return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:12,width:`100%`},children:[(0,N.jsx)(x,{items:P,itemHeight:40,maxHeight:240,"aria-label":`Invoices`,id:`invoice-list`,"data-section":`billing`,onItemClick:e=>t(String(e.metadata?.title)),renderItem:e=>(0,N.jsx)(`span`,{children:e.metadata?.title})}),(0,N.jsxs)(`span`,{"aria-live":`polite`,children:[`Selected: `,e??`none`]})]})}var M,N,P;function F(){return(F=t((()=>{M=n(),S(),N=r(),P=Array.from({length:1e3},(e,t)=>({id:t,metadata:{title:`Invoice #${1e3+t}`}}))})))()}function I(){return(0,L.jsx)(`div`,{style:{width:`100%`},children:(0,L.jsx)(x,{items:R,itemHeight:36,maxHeight:300,overscan:10,highPerformance:!0,renderItem:(e,t)=>(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,L.jsxs)(`span`,{children:[`#`,t+1,` `,e.metadata?.title]}),(0,L.jsx)(`code`,{children:e.metadata?.value})]})})})}var L,R;function z(){return(z=t((()=>{S(),L=r(),R=Array.from({length:1e5},(e,t)=>({id:t,metadata:{title:`Item ${t+1}`,value:Math.round(Math.random()*1e3)}}))})))()}function B(){let[e,t]=(0,V.useState)(()=>G(0)),[n,r]=(0,V.useState)(!1),i=(0,V.useCallback)(async()=>{e.length>=W||(r(!0),await new Promise(e=>setTimeout(e,800)),t(e=>[...e,...G(e.length)]),r(!1))},[e.length]);return(0,H.jsxs)(`div`,{style:{width:`100%`},children:[(0,H.jsxs)(`p`,{style:{marginTop:0},children:[e.length,` / `,W,` loaded`]}),(0,H.jsx)(x,{items:e,itemHeight:40,maxHeight:300,loading:n,onLoadMore:i,loadMoreThreshold:120,renderItem:e=>(0,H.jsx)(`span`,{children:e.metadata?.title})})]})}var V,H,U,W,G;function K(){return(K=t((()=>{V=n(),S(),H=r(),U=30,W=300,G=e=>Array.from({length:U},(t,n)=>({id:e+n,metadata:{title:`Message ${e+n+1}`}}))})))()}var q;function J(){return(J=t((()=>{q=`import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

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
`})))()}var Y;function X(){return(X=t((()=>{Y=`import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

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
`})))()}var Z;function Q(){return(Q=t((()=>{Z=`import { useState } from "react";
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
`})))()}var ne;function $(){return($=t((()=>{ne=`import { VirtualList, type VirtualListItem } from "@minerva/lib-core";

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
`})))()}var re;function ie(){return(ie=t((()=>{re=`import { useCallback, useState } from "react";
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
`})))()}var ae,oe,se;function ce(){return(ce=t((()=>{E(),A(),F(),z(),K(),J(),X(),Q(),$(),ie(),n(),l(),c(),ae=r(),oe=u(Object.assign({"./demos/auto-height.tsx":C,"./demos/basic.tsx":D,"./demos/clickable-rows.tsx":j,"./demos/high-performance.tsx":I,"./demos/infinite-scroll.tsx":B}),Object.assign({"./demos/auto-height.tsx":q,"./demos/basic.tsx":Y,"./demos/clickable-rows.tsx":Z,"./demos/high-performance.tsx":ne,"./demos/infinite-scroll.tsx":re})),se=()=>(0,ae.jsx)(d,{id:`virtual-list`,demos:oe})})))()}ce();export{se as default};