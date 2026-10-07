import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{h as t,m as n,t as r}from"./react-vendor-fq7Q804H.js";import{n as i,t as a}from"./cn-CJDie0PQ.js";import{j as o,k as s,t as c}from"./dist-DvR9hbhy.js";import{n as l,t as u}from"./useI18n-DtQV8aM0.js";import{n as d,t as f}from"./Button-CG2pPO-r.js";import{L as p,P as m,T as h,p as g,v as _,w as v}from"./icons-CtD3xdmP.js";import{n as y,t as b}from"./ProgressIndicator-D2C5-puu.js";import{n as ee,t as x}from"./useIsClient-BHVQFeDh.js";import{n as S,t as te}from"./focusAfterRemoval-ChK_3I3B.js";import{n as C,r as ne,t as w}from"./Stack-CTQLvSFR.js";import{B as re,H as ie,I as ae,Q as oe,R as se,U as ce,V as le,Z as ue}from"./sample-Dya6Jarx.js";import{a as de,t as fe}from"./fi-B6zIUMgu.js";import{a as pe,c as me,l as he,n as ge,o as _e,s as ve,t as ye,u as be}from"./DocPage-DzKszXiH.js";var T;function E(){return(E=e((()=>{T=typeof window<`u`&&typeof document<`u`})))()}var D,O,k,A,j,M,N;function P(){return(P=e((()=>{E(),D=4e3,O=e=>e&&(e.portalContainer||e.language)?e:void 0,k=class{constructor(){this.toasts=[],this.listeners=new Set,this.idCounter=0,this.timers=new Map,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)}),this.getSnapshot=()=>this.toasts}emit(){for(let e of this.listeners)e(this.toasts)}clearTimer(e){let t=this.timers.get(e);t&&clearTimeout(t.handle),this.timers.delete(e)}schedule(e,t){this.clearTimer(e),!(t<=0)&&this.timers.set(e,{handle:setTimeout(()=>this.dismiss(e),t),deadline:Date.now()+t,remaining:t,paused:!1})}push(e,t){let n=e.id??++this.idCounter;if(!T)return n;let r=e.loading??!1,i={id:n,color:e.color??`info`,loading:r,title:e.title,description:e.description,duration:e.duration??(r?0:4e3),icon:e.icon,closable:e.closable??!0,action:e.action,onClose:e.onClose,state:`open`,scope:t},a=this.toasts.findIndex(e=>e.id===n);if(a>=0){let e=this.toasts.slice();e[a]=i,this.toasts=e}else this.toasts=[...this.toasts,i];return this.emit(),this.schedule(n,i.duration),n}update(e,t){let n=this.toasts.find(t=>t.id===e&&t.state===`open`);if(!n)return;let r=t.loading!==void 0&&t.loading!==n.loading,i=n.loading?0:D,a=t.duration??(r&&n.duration===i?void 0:n.duration);this.push({...n,...t,id:e,duration:a},n.scope)}dismiss(e){this.clearTimer(e);let t=this.toasts.find(t=>t.id===e&&t.state===`open`);t&&(this.toasts=this.toasts.map(t=>t.id===e?{...t,state:`closing`}:t),this.emit(),t.onClose?.(e),setTimeout(()=>{this.toasts.find(t=>t.id===e)?.state===`closing`&&(this.toasts=this.toasts.filter(t=>t.id!==e),this.emit())},200))}dismissAll(){for(let e of this.toasts)this.dismiss(e.id)}pause(e){let t=this.timers.get(e);t&&!t.paused&&(clearTimeout(t.handle),t.remaining=Math.max(0,t.deadline-Date.now()),t.paused=!0)}resume(e){let t=this.timers.get(e);t?.paused&&(t.paused=!1,t.deadline=Date.now()+t.remaining,t.handle=setTimeout(()=>this.dismiss(e),t.remaining))}peek(){return this.toasts}reset(){for(let e of[...this.timers.keys()])this.clearTimer(e);this.toasts=[],this.emit()}},A=new k,j=new class{constructor(){this.mounted=new Set,this.owner=null,this.listeners=new Set,this.sequence=0,this.nextOrder=()=>++this.sequence,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)}),this.getOwner=()=>this.owner}register(e){return this.mounted.add(e),this.elect(),()=>{this.mounted.delete(e),this.elect()}}elect(){let e=null;for(let t of this.mounted)(e===null||t<e)&&(e=t);if(e!==this.owner){this.owner=e;for(let e of this.listeners)e()}}},M=(e,t)=>{let n=n=>e.push(n,t),r=(e=>n(e));return r.info=(e,t)=>n({...t,title:e,color:`info`}),r.success=(e,t)=>n({...t,title:e,color:`success`}),r.warning=(e,t)=>n({...t,title:e,color:`warning`}),r.danger=(e,t)=>n({...t,title:e,color:`danger`}),r.loading=(e,t)=>n({...t,title:e,loading:!0}),r.promise=(e,t,r)=>{let i=n({...r,title:t.loading,loading:!0,duration:0}),a=(e,t)=>n({...r,id:i,title:t,color:e,loading:!1});return e.then(e=>a(`success`,typeof t.success==`function`?t.success(e):t.success),e=>a(`danger`,typeof t.error==`function`?t.error(e):t.error)),e},r.update=(t,n)=>e.update(t,n),r.dismiss=t=>t===void 0?e.dismissAll():e.dismiss(t),r},N=M(A)})))()}var F,I,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,L;function Ve(){return(Ve=e((()=>{F=`_viewport_18vnp_1`,I=`_topRight_18vnp_13`,xe=`_topLeft_18vnp_18`,Se=`_topCenter_18vnp_23`,Ce=`_bottomRight_18vnp_29`,we=`_bottomLeft_18vnp_35`,Te=`_bottomCenter_18vnp_41`,Ee=`_toast_18vnp_48`,De=`_toastSlideIn_18vnp_1`,Oe=`_toastSlideOut_18vnp_1`,ke=`_progress_18vnp_72`,Ae=`_icon_18vnp_76`,je=`_content_18vnp_88`,Me=`_title_18vnp_94`,Ne=`_description_18vnp_98`,Pe=`_close_18vnp_103`,Fe=`_action_18vnp_129`,Ie=`_toastProgress_18vnp_1`,Le=`_info_18vnp_168`,Re=`_success_18vnp_174`,ze=`_warning_18vnp_180`,Be=`_danger_18vnp_186`,L={viewport:F,topRight:I,topLeft:xe,topCenter:Se,bottomRight:Ce,bottomLeft:we,bottomCenter:Te,toast:Ee,toastSlideIn:De,toastSlideOut:Oe,progress:ke,icon:Ae,content:je,title:Me,description:Ne,close:Pe,action:Fe,toastProgress:Ie,info:Le,success:Re,warning:ze,danger:Be}})))()}var R,z,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,B,Ze,Qe,V,$e,H,et,U,tt,nt,rt;function W(){return(W=e((()=>{a(),ie(),l(),h(),b(),x(),S(),P(),Ve(),R=t(),s(),z=r(),He=n(),Ue={info:(0,z.jsx)(m,{"aria-hidden":`true`}),success:(0,z.jsx)(p,{"aria-hidden":`true`}),warning:(0,z.jsx)(g,{"aria-hidden":`true`}),danger:(0,z.jsx)(_,{"aria-hidden":`true`})},We=(0,z.jsx)(y,{variant:`spinner`,size:`small`,color:`current`,decorative:!0}),Ge=[],Ke=[`F8`],qe=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`],Je=(e,t)=>t.length>0&&t.every(t=>qe.includes(t)?e[t]:e.code===t||e.key===t),Ye=e=>e.map(e=>e.replace(/Key$/,``).replace(/^Key(?=.)/,``).replace(/^Digit/,``).replace(/^./,e=>e.toUpperCase())).join(`+`),Xe=(e,t)=>{let n=e.parentElement;if(!n)return;let r=Array.from(n.querySelectorAll(`:scope > [data-state="open"]`)).filter(t=>t!==e),i=r.find(t=>e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)??r[r.length-1];if(i){let e=i.querySelector(`[data-toast-close]`)??o(i)[0];if(c(e))return}let a=t.getReturnFocus();a?.isConnected&&!n.contains(a)&&c(a)||c(te(n))||(n.setAttribute(`tabindex`,`-1`),c(n,{preventScroll:!0}))},B=()=>Ge,Ze=()=>null,Qe=()=>()=>{},V=()=>{let e=O(le());return(0,R.useMemo)(()=>e?M(A,e):N,[e])},$e=({item:e,pauseOnHover:t,closeLabel:n,tracker:r})=>{let{t:a}=u(),o=(0,R.useRef)(null),s=()=>{let t=o.current;t?.contains(t.ownerDocument.activeElement)&&Xe(t,r),A.dismiss(e.id)},c=n??a(`toast.close`),l=()=>{t&&A.pause(e.id)},d=()=>{t&&A.resume(e.id)},f=e.state===`closing`;return(0,z.jsxs)(`div`,{ref:o,className:i(L.toast,L[e.color]),"data-state":f?`closing`:`open`,"data-loading":e.loading||void 0,role:e.color===`danger`&&!e.loading?`alert`:`status`,style:e.duration>0?{"--toast-duration":`${e.duration}ms`}:void 0,onMouseEnter:l,onMouseLeave:d,onFocus:l,onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||d()},onKeyDown:e=>{e.key!==`Escape`||f||e.nativeEvent.isComposing||(e.preventDefault(),e.stopPropagation(),s())},children:[e.icon!==null&&(0,z.jsx)(`span`,{className:L.icon,"aria-hidden":`true`,children:e.icon===void 0?e.loading?We:Ue[e.color]:e.icon}),(0,z.jsxs)(`div`,{className:L.content,children:[e.title&&(0,z.jsx)(`div`,{className:L.title,children:e.title}),e.description&&(0,z.jsx)(`div`,{className:L.description,children:e.description})]}),e.action&&(0,z.jsx)(`button`,{type:`button`,className:L.action,onClick:()=>{e.action?.onClick(),s()},children:e.action.label}),e.closable&&(0,z.jsx)(`button`,{type:`button`,className:L.close,"aria-label":c,"data-toast-close":``,onClick:s,children:(0,z.jsx)(v,{"aria-hidden":`true`})}),e.duration>0&&!f&&(0,z.jsx)(`span`,{className:L.progress,"aria-hidden":`true`})]})},H=(e,t,n)=>e?(0,z.jsx)(ce.Provider,{value:e,children:t},n):t,et=({items:e,position:t,pauseOnHover:n,"aria-label":r,closeLabel:a,hotkeyLabel:o,tracker:s,viewportKey:c})=>{let{t:l}=u();return(0,z.jsx)(`div`,{ref:e=>(s.registerViewport(c,e),()=>s.registerViewport(c,null)),className:i(L.viewport,L[t]),role:`region`,"aria-label":r??(o?l(`toast.regionWithHotkey`,{hotkey:o}):l(`toast.region`)),onFocus:e=>{let t=e.relatedTarget;t&&!e.currentTarget.contains(t)&&s.setReturnFocus(t)},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||e.currentTarget.removeAttribute(`tabindex`)},children:e.map(e=>H(e.scope,(0,z.jsx)($e,{item:e,pauseOnHover:n,closeLabel:a,tracker:s},e.id),e.id))})},U=new WeakMap,tt=0,nt=e=>{let t=U.get(e);return t===void 0&&(t=++tt,U.set(e,t)),`scope-${t}`},rt=({position:e=`topRight`,children:t,max:n=1/0,pauseOnHover:r=!0,"aria-label":i,closeLabel:a,hotkey:o=Ke})=>{let[s]=(0,R.useState)(j.nextOrder);(0,R.useEffect)(()=>j.register(s),[s]);let l=(0,R.useSyncExternalStore)(j.subscribe,j.getOwner,Ze)===s,u=(0,R.useSyncExternalStore)(l?A.subscribe:Qe,l?A.getSnapshot:B,B),d=ee(),f=re(),p=(0,R.useRef)(new Map),m=(0,R.useRef)(null),h=(0,R.useMemo)(()=>({getReturnFocus:()=>m.current,setReturnFocus:e=>{m.current=e},registerViewport:(e,t)=>{t?p.current.set(e,t):p.current.delete(e)}}),[]),g=Ye(o),_=o.join(`\0`);(0,R.useEffect)(()=>{if(!l||!_)return;let e=_.split(`\0`),t=t=>{if(!Je(t,e))return;let n=p.current,r=n.get(`own`),i=[...r?[r]:[],...[...n.values()].filter(e=>e!==r)].find(e=>e.isConnected&&e.querySelector(`[data-state="open"]`));if(!i)return;t.preventDefault();let a=i.ownerDocument,o=a.activeElement;o&&o!==a.body&&!i.contains(o)&&h.setReturnFocus(o),i.setAttribute(`tabindex`,`-1`),c(i)};return document.addEventListener(`keydown`,t),()=>document.removeEventListener(`keydown`,t)},[l,_,h]);let v=new Set,y=[];for(let e=u.length-1;e>=0;--e)v.has(u[e].id)||(v.add(u[e].id),y.unshift(u[e]));let b=y.filter(e=>e.state===`open`),x=Math.max(0,b.length-n),S=b.slice(0,x).map(e=>String(e.id)).join(`\0`);return(0,R.useEffect)(()=>{if(!l||!S)return;let e=A.getSnapshot().filter(e=>e.state===`open`);for(let t of e.slice(0,Math.max(0,e.length-n)))A.dismiss(t.id)},[l,S,n]),(0,z.jsxs)(z.Fragment,{children:[t,d&&l&&(()=>{let t=f??document.body,n=new Map([[t,{scope:void 0,items:[]}]]);for(let e of y){let r=e.scope?.portalContainer,i=r?.isConnected?r:t,a=n.get(i);a||(a={scope:e.scope,items:[]},n.set(i,a)),a.items.push(e)}return[...n].map(([n,o])=>{let s=n===t?`own`:nt(n);return(0,He.createPortal)(H(o.scope,(0,z.jsx)(et,{items:o.items,position:e,pauseOnHover:r,"aria-label":i,closeLabel:a,hotkeyLabel:g,tracker:h,viewportKey:s})),n,s)})})()]})}})))()}function it(){return(0,G.jsxs)(w,{gap:2,wrap:!0,children:[(0,G.jsx)(f,{color:`neutral`,variant:`outline`,onClick:()=>N.info(`Conversation archived`,{duration:8e3,action:{label:`Undo`,onClick:()=>N.success(`Conversation restored`)}}),children:`With action`}),(0,G.jsx)(f,{color:`neutral`,variant:`outline`,onClick:()=>N.info(`Reminder set for 9:00`,{icon:(0,G.jsx)(fe,{}),closable:!1}),children:`Custom icon, no close button`}),(0,G.jsx)(f,{color:`neutral`,variant:`outline`,onClick:()=>N.success(`Exported`,{onClose:()=>N.info(`Export toast closed`)}),children:`onClose`})]})}var G;function at(){return(at=e((()=>{d(),C(),P(),de(),G=r()})))()}function ot(){let[e,t]=(0,st.useState)(`topRight`);return(0,K.jsx)(rt,{position:e,max:3,children:(0,K.jsxs)(ne,{gap:4,align:`start`,children:[(0,K.jsxs)(w,{gap:2,wrap:!0,children:[(0,K.jsx)(f,{color:`success`,onClick:()=>N.success(`Saved`),children:`Success`}),(0,K.jsx)(f,{color:`danger`,onClick:()=>N.danger(`Request failed`),children:`Danger`}),(0,K.jsx)(f,{color:`warning`,onClick:()=>N.warning(`Unsaved changes`),children:`Warning`}),(0,K.jsx)(f,{color:`neutral`,variant:`outline`,onClick:()=>N.info(`New version`),children:`Info`})]}),(0,K.jsx)(w,{attached:!0,wrap:!0,"aria-label":`Position`,children:ct.map(n=>(0,K.jsx)(f,{size:`small`,color:n===e?`primary`:`neutral`,variant:n===e?`solid`:`outline`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))})]})})}var st,K,ct;function lt(){return(lt=e((()=>{st=t(),d(),C(),W(),P(),K=r(),ct=[`topLeft`,`topCenter`,`topRight`,`bottomLeft`,`bottomCenter`,`bottomRight`]})))()}function ut(){return(0,q.jsx)(w,{gap:2,wrap:!0,children:dt.map(e=>(0,q.jsx)(f,{color:`neutral`,variant:`outline`,onClick:()=>N({color:e,title:`A ${e} toast`,description:`color sets the accent, the icon and the role.`}),children:e},e))})}var q,dt;function ft(){return(ft=e((()=>{d(),C(),P(),q=r(),dt=[`info`,`success`,`warning`,`danger`]})))()}function pt(){let e=V();return(0,mt.jsx)(f,{color:`neutral`,variant:`outline`,onClick:()=>e.danger(`Sync failed at ${new Date().toLocaleTimeString()}`,{id:`sync-error`}),children:`Fail again`})}var mt;function ht(){return(ht=e((()=>{d(),W(),mt=r()})))()}function gt(){return(0,J.jsxs)(w,{gap:2,wrap:!0,children:[(0,J.jsx)(f,{color:`neutral`,variant:`outline`,onClick:()=>{N.info(`Build started`,{duration:0}),N.success(`Tests passed`,{duration:0}),N.warning(`Coverage dropped by 2%`,{duration:0,action:{label:`Details`,onClick:()=>{}}})},children:`Show three toasts, then press F8`}),(0,J.jsx)(f,{color:`neutral`,variant:`ghost`,onClick:()=>N.dismiss(),children:`Dismiss all`})]})}var J;function _t(){return(_t=e((()=>{d(),C(),P(),J=r()})))()}function vt(){return(0,Y.jsxs)(w,{gap:2,wrap:!0,children:[(0,Y.jsx)(f,{onClick:()=>{let e=N.loading(`Saving…`);setTimeout(()=>{N.update(e,{color:`success`,loading:!1,title:`Saved!`})},1500)},children:`Save (update)`}),(0,Y.jsx)(f,{color:`neutral`,variant:`outline`,onClick:()=>N.promise(new Promise((e,t)=>setTimeout(()=>Math.random()>.3?e(3):t(Error()),1500)),{loading:`Uploading files…`,success:e=>`${e} files uploaded`,error:`Upload failed, try again`}).catch(()=>void 0),children:`Upload (promise)`}),(0,Y.jsx)(f,{color:`danger`,variant:`outline`,onClick:()=>{let e=N({color:`danger`,loading:!0,title:`Deleting…`});setTimeout(()=>{N.update(e,{loading:!1,title:`Project deleted`})},1500)},children:`Delete (loading option)`})]})}var Y;function yt(){return(yt=e((()=>{d(),C(),P(),Y=r()})))()}function bt(){return(0,X.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,X.jsx)(f,{color:`neutral`,variant:`outline`,onClick:()=>N({color:`success`,title:`Book published`,description:`Readers can now find it in the catalog.`,duration:8e3}),children:`With description`}),(0,X.jsx)(f,{color:`neutral`,variant:`outline`,onClick:()=>N.warning(`Stays until closed`,{duration:0}),children:`Persistent`}),(0,X.jsx)(f,{color:`neutral`,variant:`outline`,onClick:()=>N.dismiss(),children:`Dismiss all`})]})}var X;function xt(){return(xt=e((()=>{d(),P(),X=r()})))()}function St(){let e=V();return(0,Z.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,Z.jsx)(f,{onClick:()=>e.success(`Saved (useToast(): dark, tech, 中文)`),children:`useToast()`}),(0,Z.jsx)(f,{color:`neutral`,variant:`outline`,onClick:wt,children:`toast()`})]})}function Ct(){return(0,Z.jsx)(ae,{theme:`dark`,palette:`tech`,locale:{language:`zh`},children:(0,Z.jsx)(St,{})})}var Z,wt;function Tt(){return(Tt=e((()=>{d(),se(),P(),W(),Z=r(),wt=()=>N.info(`Synced (toast(): root scope)`)})))()}var Et;function Dt(){return(Dt=e((()=>{Et=`import { Button, HStack, toast } from "@minerva/lib-core";
import { FiBell } from "react-icons/fi";

export default function ActionDemo() {
  return (
    <HStack gap={2} wrap>
      <Button
        color="neutral"
        variant="outline"
        onClick={() =>
          toast.info("Conversation archived", {
            duration: 8000,
            action: {
              label: "Undo",
              onClick: () => toast.success("Conversation restored"),
            },
          })
        }
      >
        With action
      </Button>
      <Button
        color="neutral"
        variant="outline"
        onClick={() =>
          toast.info("Reminder set for 9:00", {
            icon: <FiBell />,
            closable: false,
          })
        }
      >
        Custom icon, no close button
      </Button>
      <Button
        color="neutral"
        variant="outline"
        onClick={() =>
          toast.success("Exported", {
            onClose: () => toast.info("Export toast closed"),
          })
        }
      >
        onClose
      </Button>
    </HStack>
  );
}
`})))()}var Ot;function kt(){return(kt=e((()=>{Ot=`import { useState } from "react";
import {
  Button,
  HStack,
  ToastProvider,
  VStack,
  toast,
  type ToastPosition,
} from "@minerva/lib-core";

const positions: ToastPosition[] = [
  "topLeft",
  "topCenter",
  "topRight",
  "bottomLeft",
  "bottomCenter",
  "bottomRight",
];

export default function BasicDemo() {
  const [position, setPosition] = useState<ToastPosition>("topRight");
  return (
    // Mount one ToastProvider near the root of the app; max={3} closes the
    // oldest toast when a fourth one appears
    <ToastProvider position={position} max={3}>
      <VStack gap={4} align="start">
        <HStack gap={2} wrap>
          <Button color="success" onClick={() => toast.success("Saved")}>
            Success
          </Button>
          <Button color="danger" onClick={() => toast.danger("Request failed")}>
            Danger
          </Button>
          <Button
            color="warning"
            onClick={() => toast.warning("Unsaved changes")}
          >
            Warning
          </Button>
          <Button
            color="neutral"
            variant="outline"
            onClick={() => toast.info("New version")}
          >
            Info
          </Button>
        </HStack>
        <HStack attached wrap aria-label="Position">
          {positions.map((name) => (
            <Button
              key={name}
              size="small"
              color={name === position ? "primary" : "neutral"}
              variant={name === position ? "solid" : "outline"}
              aria-pressed={name === position}
              onClick={() => setPosition(name)}
            >
              {name}
            </Button>
          ))}
        </HStack>
      </VStack>
    </ToastProvider>
  );
}
`})))()}var At;function jt(){return(jt=e((()=>{At=`import { Button, HStack, toast } from "@minerva/lib-core";

const colors = ["info", "success", "warning", "danger"] as const;

export default function ColorsDemo() {
  return (
    <HStack gap={2} wrap>
      {colors.map((color) => (
        <Button
          key={color}
          color="neutral"
          variant="outline"
          onClick={() =>
            toast({
              color,
              title: \`A \${color} toast\`,
              description: "color sets the accent, the icon and the role.",
            })
          }
        >
          {color}
        </Button>
      ))}
    </HStack>
  );
}
`})))()}var Mt;function Nt(){return(Nt=e((()=>{Mt=`import { Button, useToast } from "@minerva/lib-core";

export default function DedupeDemo() {
  const toast = useToast();
  return (
    <Button
      color="neutral"
      variant="outline"
      onClick={() =>
        // Same id: replaces the visible toast and restarts its timer
        toast.danger(\`Sync failed at \${new Date().toLocaleTimeString()}\`, {
          id: "sync-error",
        })
      }
    >
      Fail again
    </Button>
  );
}
`})))()}var Pt;function Q(){return(Q=e((()=>{Pt=`import { Button, HStack, toast } from "@minerva/lib-core";

// The ToastProvider of the first demo uses the default hotkey (F8); set
// \`hotkey\` (e.g. ["altKey", "KeyT"]) to change it. Show a
// few toasts, press F8 to jump to them, Tab between them, then Escape (or a
// close button): focus moves to the next toast, then back here.
export default function KeyboardDemo() {
  return (
    <HStack gap={2} wrap>
      <Button
        color="neutral"
        variant="outline"
        onClick={() => {
          toast.info("Build started", { duration: 0 });
          toast.success("Tests passed", { duration: 0 });
          toast.warning("Coverage dropped by 2%", {
            duration: 0,
            action: { label: "Details", onClick: () => {} },
          });
        }}
      >
        Show three toasts, then press F8
      </Button>
      <Button color="neutral" variant="ghost" onClick={() => toast.dismiss()}>
        Dismiss all
      </Button>
    </HStack>
  );
}
`})))()}var Ft;function It(){return(It=e((()=>{Ft=`import { Button, HStack, toast } from "@minerva/lib-core";

export default function LoadingDemo() {
  const save = () => {
    // Loading toasts stay open until they are updated or dismissed
    const id = toast.loading("Saving…");
    setTimeout(() => {
      // loading: false swaps the spinner for the icon and starts the timer
      toast.update(id, { color: "success", loading: false, title: "Saved!" });
    }, 1500);
  };

  const remove = () => {
    // Any color can be loading; it stays a polite status while pending
    const id = toast({ color: "danger", loading: true, title: "Deleting…" });
    setTimeout(() => {
      toast.update(id, { loading: false, title: "Project deleted" });
    }, 1500);
  };

  const upload = () =>
    toast
      .promise(
        new Promise<number>((resolve, reject) =>
          setTimeout(
            () => (Math.random() > 0.3 ? resolve(3) : reject(new Error())),
            1500,
          ),
        ),
        {
          loading: "Uploading files…",
          success: (count) => \`\${count} files uploaded\`,
          error: "Upload failed, try again",
        },
      )
      .catch(() => undefined);

  return (
    <HStack gap={2} wrap>
      <Button onClick={save}>Save (update)</Button>
      <Button color="neutral" variant="outline" onClick={upload}>
        Upload (promise)
      </Button>
      <Button color="danger" variant="outline" onClick={remove}>
        Delete (loading option)
      </Button>
    </HStack>
  );
}
`})))()}var Lt;function Rt(){return(Rt=e((()=>{Lt=`import { Button, toast } from "@minerva/lib-core";

export default function OptionsDemo() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Button
        color="neutral"
        variant="outline"
        onClick={() =>
          toast({
            color: "success",
            title: "Book published",
            description: "Readers can now find it in the catalog.",
            duration: 8000,
          })
        }
      >
        With description
      </Button>
      <Button
        color="neutral"
        variant="outline"
        onClick={() => toast.warning("Stays until closed", { duration: 0 })}
      >
        Persistent
      </Button>
      <Button color="neutral" variant="outline" onClick={() => toast.dismiss()}>
        Dismiss all
      </Button>
    </div>
  );
}
`})))()}var zt;function Bt(){return(Bt=e((()=>{zt=`import { Button, ConfigProvider, toast, useToast } from "@minerva/lib-core";

// Code outside React (API client, event bus...): no hook available, so it
// uses toast(), rendered with the root theme and language.
const notifySyncDone = () => toast.info("Synced (toast(): root scope)");

function Actions() {
  // Inside a component: bound to the nearest ConfigProvider scope
  const scopedToast = useToast();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Button
        onClick={() =>
          scopedToast.success("Saved (useToast(): dark, tech, 中文)")
        }
      >
        useToast()
      </Button>
      <Button color="neutral" variant="outline" onClick={notifySyncDone}>
        toast()
      </Button>
    </div>
  );
}

export default function ScopedDemo() {
  return (
    <ConfigProvider theme="dark" palette="tech" locale={{ language: "zh" }}>
      <Actions />
    </ConfigProvider>
  );
}
`})))()}var $,Vt,Ht,Ut;function Wt(){return(Wt=e((()=>{at(),lt(),ft(),ht(),_t(),yt(),xt(),Tt(),Dt(),kt(),jt(),Nt(),Q(),It(),Rt(),Bt(),t(),ue(),be(),ge(),_e(),me(),$=r(),Vt=ve(Object.assign({"./demos/action.tsx":it,"./demos/basic.tsx":ot,"./demos/colors.tsx":ut,"./demos/dedupe.tsx":pt,"./demos/keyboard.tsx":gt,"./demos/loading.tsx":vt,"./demos/options.tsx":bt,"./demos/scoped.tsx":Ct}),Object.assign({"./demos/action.tsx":Et,"./demos/basic.tsx":Ot,"./demos/colors.tsx":At,"./demos/dedupe.tsx":Mt,"./demos/keyboard.tsx":Pt,"./demos/loading.tsx":Ft,"./demos/options.tsx":Lt,"./demos/scoped.tsx":zt})),Ht=`// Inside a component: follows the nearest ConfigProvider scope
function SaveButton() {
  const toast = useToast();
  return <Button onClick={() => toast.success("Saved")}>Save</Button>;
}

// Outside React (API client, event bus, store...): root scope
import { toast } from "@minerva/lib-core";
apiClient.onError((error) => toast.danger(error.message));`,Ut=()=>{let{t:e}=oe(),t=(0,$.jsxs)(`section`,{className:pe.section,"aria-labelledby":`when-to-use`,children:[(0,$.jsx)(`h2`,{id:`when-to-use`,children:e(`docs.toast.usage.title`)}),(0,$.jsxs)(`ul`,{className:pe.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.toast.usage.hook`)}),(0,$.jsx)(`li`,{children:e(`docs.toast.usage.function`)})]}),(0,$.jsx)(he,{code:Ht,language:`tsx`})]});return(0,$.jsx)(ye,{id:`toast`,demos:Vt,intro:t})}})))()}Wt();export{Ut as default};