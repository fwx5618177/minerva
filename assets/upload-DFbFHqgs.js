import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-DuLeTlZP.js";import{bt as r,o as i,vt as a}from"./minerva-web-components-ByJsjP0z.js";import{m as o,n as s,p as c,t as l}from"./DocPage-BIGX2Gcv.js";import{n as u,t as ee}from"./useI18n-Dk-DwhiM.js";import{t as d}from"./stylingHooks-GjssfG7q.js";import{n as te,t as f}from"./Button-CMVP9rb9.js";import{O as ne,T as p,b as m,w as h}from"./icons-Dj0E45-e.js";import{n as g,t as _}from"./IconButton-CW7bVPsl.js";import{n as v,t as y}from"./Alert-XtJJBuNr.js";var b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{b=`_upload_1bq76_1`,x=`_label_1bq76_11`,S=`_dropzone_1bq76_15`,C=`_dragging_1bq76_32`,w=`_error_1bq76_39`,T=`_list_1bq76_43`,E=`_item_1bq76_51`,D=`_statusError_1bq76_65`,O=`_preview_1bq76_70`,k=`_info_1bq76_79`,A=`_status_1bq76_65`,j=`_actions_1bq76_98`,M={upload:b,label:x,dropzone:S,dragging:C,error:w,list:T,item:E,statusError:D,preview:O,info:k,status:A,actions:j}})))()}var P,F,I;function L(){return(L=e((()=>{a(),u(),f(),p(),g(),v(),N(),P=t(),F=n(),I=({label:e,value:t,onFilesSelected:n,onRemove:a,onRetry:o,accept:s=`*`,multiple:c=!1,replace:l=!1,maxCount:u=c?50:1,maxSize:f,loading:p=!1,disabled:g=!1,labels:v,className:b,ref:x,...S})=>{let{t:C}=ee(),w=`${(0,P.useId)()}-label`,T=(0,P.useRef)(null),E=(0,P.useRef)(null),D=(0,P.useRef)(new Map),O=(0,P.useRef)(null);(0,P.useEffect)(()=>{let e=O.current;if(!e||t.some(t=>t.id===e.id))return;O.current=null;let n=document.activeElement;n&&n!==document.body||(e.nextId&&D.current.get(e.nextId)||E.current)?.focus()},[t]);let[k,A]=(0,P.useState)(``),[j,N]=(0,P.useState)(!1),I=l&&!c?0:t.length,L=g||p||I>=u,R=e=>{if(L||e.length===0)return;if(!c&&e.length>1||e.length+I>u){A(v?.tooMany?.(u)??C(`upload.tooMany`,{count:u}));return}let t=e.find(e=>!r(e,s));if(t){A(v?.invalidType?.(t.name)??C(`upload.invalidType`,{name:t.name}));return}let i=f===void 0?void 0:e.find(e=>e.size>f);if(i){A(v?.tooLarge?.(i.name)??C(`upload.tooLarge`,{name:i.name}));return}A(``),n(e)},z=e=>e.status===`uploading`?v?.uploading??C(`upload.uploading`):e.status===`error`?e.error||(v?.failed??C(`upload.failed`)):v?.done??C(`upload.done`);return(0,F.jsxs)(`div`,{...S,ref:x,className:i(M.upload,b),role:`group`,"aria-labelledby":w,"aria-busy":p,...d(`upload`,`root`,{disabled:g,loading:p,dragging:j&&!L}),children:[(0,F.jsx)(`span`,{id:w,className:M.label,...d(`upload`,`label`),children:e}),(0,F.jsxs)(`div`,{className:i(M.dropzone,{[M.dragging]:j&&!L}),...d(`upload`,`dropzone`),onDragOver:e=>{e.preventDefault(),L||N(!0)},onDragLeave:e=>{e.currentTarget.contains(e.relatedTarget)||N(!1)},onDrop:e=>{e.preventDefault(),N(!1),R(Array.from(e.dataTransfer.files))},children:[(0,F.jsx)(te,{type:`button`,variant:`outline`,disabled:L,loading:p,ref:E,startIcon:(0,F.jsx)(m,{"aria-hidden":`true`}),onClick:()=>T.current?.click(),children:v?.select??C(`upload.select`)}),(0,F.jsx)(`input`,{ref:T,type:`file`,hidden:!0,tabIndex:-1,"aria-label":e,disabled:L,accept:s,multiple:c,onChange:e=>{let t=Array.from(e.currentTarget.files??[]);e.currentTarget.value=``,R(t)}})]}),k&&(0,F.jsx)(y,{color:`danger`,animation:!1,className:M.error,children:k}),t.length>0&&(0,F.jsx)(`ul`,{className:M.list,...d(`upload`,`list`),children:t.map(e=>(0,F.jsxs)(`li`,{className:M.item,...d(`upload`,`item`,{status:e.status}),children:[e.previewUrl&&(0,F.jsx)(`img`,{src:e.previewUrl,alt:``,className:M.preview}),(0,F.jsxs)(`div`,{className:M.info,children:[(0,F.jsx)(`span`,{children:e.name}),(0,F.jsx)(`span`,{role:e.status===`error`?`alert`:`status`,className:i(M.status,{[M.statusError]:e.status===`error`}),children:z(e)})]}),(0,F.jsxs)(`div`,{className:M.actions,children:[e.status===`error`&&o&&(0,F.jsx)(_,{label:v?.retry?.(e.name)??C(`upload.retry`,{name:e.name}),size:`small`,shape:`square`,disabled:g||p,onClick:()=>o(e),icon:(0,F.jsx)(ne,{"aria-hidden":`true`})}),a&&(0,F.jsx)(_,{label:v?.remove?.(e.name)??C(`upload.remove`,{name:e.name}),size:`small`,shape:`square`,disabled:g,ref:t=>{t?D.current.set(e.id,t):D.current.delete(e.id)},onClick:()=>{let n=t.indexOf(e),r=t[n+1]??t[n-1];O.current={id:e.id,nextId:r?.id},a(e)},icon:(0,F.jsx)(h,{"aria-hidden":`true`})})]})]},e.id))})]})}})))()}function R(){let[e,t]=(0,z.useState)([]);return(0,B.jsx)(I,{label:`Cover image`,accept:`image/*`,maxSize:5242880,replace:!0,value:e,onFilesSelected:e=>{let n=e[0],r={id:crypto.randomUUID(),name:n.name,status:`uploading`,previewUrl:URL.createObjectURL(n)};t([r]),setTimeout(()=>t([{...r,status:`done`}]),1e3)},onRemove:()=>t([])})}var z,B;function V(){return(V=e((()=>{z=t(),L(),B=n()})))()}function re(){let[e,t]=(0,H.useState)(W);return(0,U.jsx)(I,{label:`Attachments`,accept:`.pdf,.csv`,multiple:!0,maxCount:5,value:e,onFilesSelected:e=>t(t=>[...t,...e.map(e=>({id:crypto.randomUUID(),name:e.name,status:`done`}))]),onRetry:e=>t(t=>t.map(t=>t.id===e.id?{...t,status:`done`}:t)),onRemove:e=>t(t=>t.filter(t=>t.id!==e.id))})}var H,U,W;function G(){return(G=e((()=>{H=t(),L(),U=n(),W=[{id:`1`,name:`report.pdf`,status:`done`},{id:`2`,name:`data.csv`,status:`error`,error:`Network error`}]})))()}var K;function q(){return(q=e((()=>{K=`import { useState } from "react";
import { Upload, type UploadItem } from "minerva-design";

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
import { Upload, type UploadItem } from "minerva-design";

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
`})))()}var X,Z,Q;function $(){return($=e((()=>{V(),G(),q(),Y(),t(),s(),o(),X=n(),Z=c(Object.assign({"./demos/basic.tsx":R,"./demos/multiple.tsx":re}),Object.assign({"./demos/basic.tsx":K,"./demos/multiple.tsx":J})),Q=()=>(0,X.jsx)(l,{id:`upload`,demos:Z})})))()}$();export{Q as default};