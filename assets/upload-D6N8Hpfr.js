import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{X as r,cn as i,un as a}from"./minerva-web-components-e9i9Tzii.js";import{n as o,t as s}from"./useI18n-Brv-VDVY.js";import{n as c,t as l}from"./Button-DP6INRXF.js";import{O as ee,T as u,b as te,w as d}from"./icons-C9qyBhWC.js";import{n as f,t as p}from"./IconButton-B4tqbPo6.js";import{n as m,t as h}from"./Alert-BANnrAFf.js";import{c as g,n as _,s as v,t as y}from"./DocPage-BeqNKFhE.js";var b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{b=`_upload_wpk5j_1`,x=`_label_wpk5j_11`,S=`_dropzone_wpk5j_15`,C=`_dragging_wpk5j_22`,w=`_error_wpk5j_27`,T=`_list_wpk5j_31`,E=`_item_wpk5j_39`,D=`_preview_wpk5j_48`,O=`_info_wpk5j_56`,k=`_status_wpk5j_64`,A=`_statusError_wpk5j_68`,j=`_actions_wpk5j_72`,M={upload:b,label:x,dropzone:S,dragging:C,error:w,list:T,item:E,preview:D,info:O,status:k,statusError:A,actions:j}})))()}var P,F,I;function L(){return(L=e((()=>{i(),o(),c(),u(),f(),h(),N(),P=t(),F=n(),I=({label:e,value:t,onFilesSelected:n,onRemove:i,onRetry:o,accept:c=`*`,multiple:u=!1,replace:f=!1,maxCount:h=u?50:1,maxSize:g,loading:_=!1,disabled:v=!1,labels:y,className:b,ref:x,...S})=>{let{t:C}=s(),w=`${(0,P.useId)()}-label`,T=(0,P.useRef)(null),E=(0,P.useRef)(null),D=(0,P.useRef)(new Map),O=(0,P.useRef)(null);(0,P.useEffect)(()=>{let e=O.current;if(!e||t.some(t=>t.id===e.id))return;O.current=null;let n=document.activeElement;n&&n!==document.body||(e.nextId&&D.current.get(e.nextId)||E.current)?.focus()},[t]);let[k,A]=(0,P.useState)(``),[j,N]=(0,P.useState)(!1),I=f&&!u?0:t.length,L=v||_||I>=h,R=e=>{if(L||e.length===0)return;if(!u&&e.length>1||e.length+I>h){A(y?.tooMany?.(h)??C(`upload.tooMany`,{count:h}));return}let t=e.find(e=>!a(e,c));if(t){A(y?.invalidType?.(t.name)??C(`upload.invalidType`,{name:t.name}));return}let r=g===void 0?void 0:e.find(e=>e.size>g);if(r){A(y?.tooLarge?.(r.name)??C(`upload.tooLarge`,{name:r.name}));return}A(``),n(e)},z=e=>e.status===`uploading`?y?.uploading??C(`upload.uploading`):e.status===`error`?e.error||(y?.failed??C(`upload.failed`)):y?.done??C(`upload.done`);return(0,F.jsxs)(`div`,{...S,ref:x,className:r(M.upload,b),role:`group`,"aria-labelledby":w,"aria-busy":_,children:[(0,F.jsx)(`span`,{id:w,className:M.label,children:e}),(0,F.jsxs)(`div`,{className:r(M.dropzone,{[M.dragging]:j&&!L}),onDragOver:e=>{e.preventDefault(),L||N(!0)},onDragLeave:e=>{e.currentTarget.contains(e.relatedTarget)||N(!1)},onDrop:e=>{e.preventDefault(),N(!1),R(Array.from(e.dataTransfer.files))},children:[(0,F.jsx)(l,{type:`button`,variant:`outline`,disabled:L,loading:_,ref:E,startIcon:(0,F.jsx)(te,{"aria-hidden":`true`}),onClick:()=>T.current?.click(),children:y?.select??C(`upload.select`)}),(0,F.jsx)(`input`,{ref:T,type:`file`,hidden:!0,tabIndex:-1,"aria-label":e,disabled:L,accept:c,multiple:u,onChange:e=>{let t=Array.from(e.currentTarget.files??[]);e.currentTarget.value=``,R(t)}})]}),k&&(0,F.jsx)(m,{color:`danger`,animation:!1,className:M.error,children:k}),t.length>0&&(0,F.jsx)(`ul`,{className:M.list,children:t.map(e=>(0,F.jsxs)(`li`,{className:M.item,children:[e.previewUrl&&(0,F.jsx)(`img`,{src:e.previewUrl,alt:``,className:M.preview}),(0,F.jsxs)(`div`,{className:M.info,children:[(0,F.jsx)(`span`,{children:e.name}),(0,F.jsx)(`span`,{role:e.status===`error`?`alert`:`status`,className:r(M.status,{[M.statusError]:e.status===`error`}),children:z(e)})]}),(0,F.jsxs)(`div`,{className:M.actions,children:[e.status===`error`&&o&&(0,F.jsx)(p,{label:y?.retry?.(e.name)??C(`upload.retry`,{name:e.name}),size:`small`,shape:`square`,disabled:v||_,onClick:()=>o(e),icon:(0,F.jsx)(ee,{"aria-hidden":`true`})}),i&&(0,F.jsx)(p,{label:y?.remove?.(e.name)??C(`upload.remove`,{name:e.name}),size:`small`,shape:`square`,disabled:v,ref:t=>{t?D.current.set(e.id,t):D.current.delete(e.id)},onClick:()=>{let n=t.indexOf(e),r=t[n+1]??t[n-1];O.current={id:e.id,nextId:r?.id},i(e)},icon:(0,F.jsx)(d,{"aria-hidden":`true`})})]})]},e.id))})]})}})))()}function R(){let[e,t]=(0,z.useState)([]);return(0,B.jsx)(I,{label:`Cover image`,accept:`image/*`,maxSize:5242880,replace:!0,value:e,onFilesSelected:e=>{let n=e[0],r={id:crypto.randomUUID(),name:n.name,status:`uploading`,previewUrl:URL.createObjectURL(n)};t([r]),setTimeout(()=>t([{...r,status:`done`}]),1e3)},onRemove:()=>t([])})}var z,B;function V(){return(V=e((()=>{z=t(),L(),B=n()})))()}function ne(){let[e,t]=(0,H.useState)(W);return(0,U.jsx)(I,{label:`Attachments`,accept:`.pdf,.csv`,multiple:!0,maxCount:5,value:e,onFilesSelected:e=>t(t=>[...t,...e.map(e=>({id:crypto.randomUUID(),name:e.name,status:`done`}))]),onRetry:e=>t(t=>t.map(t=>t.id===e.id?{...t,status:`done`}:t)),onRemove:e=>t(t=>t.filter(t=>t.id!==e.id))})}var H,U,W;function G(){return(G=e((()=>{H=t(),L(),U=n(),W=[{id:`1`,name:`report.pdf`,status:`done`},{id:`2`,name:`data.csv`,status:`error`,error:`Network error`}]})))()}var K;function q(){return(q=e((()=>{K=`import { useState } from "react";
import { Upload, type UploadItem } from "@minerva/lib-core";

export default function BasicDemo() {
  const [items, setItems] = useState<UploadItem[]>([]);

  const upload = (files: File[]) => {
    const file = files[0];
    const item: UploadItem = {
      id: crypto.randomUUID(),
      name: file.name,
      status: "uploading",
      previewUrl: URL.createObjectURL(file),
    };
    setItems([item]);
    // simulate the transfer; a real app uploads the file here
    setTimeout(() => setItems([{ ...item, status: "done" }]), 1000);
  };

  return (
    <Upload
      label="Cover image"
      accept="image/*"
      maxSize={5 * 1024 * 1024}
      replace
      value={items}
      onFilesSelected={upload}
      onRemove={() => setItems([])}
    />
  );
}
`})))()}var J;function Y(){return(Y=e((()=>{J=`import { useState } from "react";
import { Upload, type UploadItem } from "@minerva/lib-core";

const initial: UploadItem[] = [
  { id: "1", name: "report.pdf", status: "done" },
  { id: "2", name: "data.csv", status: "error", error: "Network error" },
];

export default function MultipleDemo() {
  const [items, setItems] = useState(initial);

  return (
    <Upload
      label="Attachments"
      accept=".pdf,.csv"
      multiple
      maxCount={5}
      value={items}
      onFilesSelected={(files) =>
        setItems((prev) => [
          ...prev,
          ...files.map((file) => ({
            id: crypto.randomUUID(),
            name: file.name,
            status: "done" as const,
          })),
        ])
      }
      onRetry={(item) =>
        setItems((prev) =>
          prev.map((it) =>
            it.id === item.id ? { ...it, status: "done" } : it,
          ),
        )
      }
      onRemove={(item) =>
        setItems((prev) => prev.filter((it) => it.id !== item.id))
      }
    />
  );
}
`})))()}var X,Z,Q;function $(){return($=e((()=>{V(),G(),q(),Y(),t(),_(),g(),X=n(),Z=v(Object.assign({"./demos/basic.tsx":R,"./demos/multiple.tsx":ne}),Object.assign({"./demos/basic.tsx":K,"./demos/multiple.tsx":J})),Q=()=>(0,X.jsx)(y,{id:`upload`,demos:Z})})))()}$();export{Q as default};