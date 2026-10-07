import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,h as n,t as r}from"./react-vendor-EhfBFkcC.js";import{At as i,Ot as a,tt as o}from"./minerva-web-components-U-_2I7Ao.js";import{O as s,c,i as l,k as u,l as d,n as f,r as p,s as m,t as h,u as ee}from"./DocPage-BvqFnACE.js";import{n as g,t as _}from"./useI18n-s5sAv-jy.js";import{n as v,t as y}from"./Button-CVTxJPft.js";import{L as te,P as b,T as ne,p as re,v as ie,w as ae}from"./icons-BaZJL-85.js";import{n as oe,t as se}from"./ProgressIndicator-DWpNyYe1.js";import{n as ce,t as le}from"./useIsClient-DDtLrFta.js";import{n as ue,t as de}from"./focusAfterRemoval-BY1R9GNu.js";import{n as x,r as fe,t as S}from"./Stack-DOZ17svE.js";import{B as pe,H as me,I as he,Q as ge,R as _e,U as ve,V as ye,Z as be}from"./sample-DdQB_zfN.js";import{a as xe,t as Se}from"./fi-vR-Bo1q7.js";var C;function w(){return(w=e((()=>{C=typeof window<`u`&&typeof document<`u`})))()}var Ce,T,E,D,O,k,A;function j(){return(j=e((()=>{w(),Ce=4e3,T=e=>e&&(e.portalContainer||e.language)?e:void 0,E=class{constructor(){this.toasts=[],this.listeners=new Set,this.idCounter=0,this.timers=new Map,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)}),this.getSnapshot=()=>this.toasts}emit(){for(let e of this.listeners)e(this.toasts)}clearTimer(e){let t=this.timers.get(e);t&&clearTimeout(t.handle),this.timers.delete(e)}schedule(e,t){this.clearTimer(e),!(t<=0)&&this.timers.set(e,{handle:setTimeout(()=>this.dismiss(e),t),deadline:Date.now()+t,remaining:t,paused:!1})}push(e,t){let n=e.id??++this.idCounter;if(!C)return n;let r=e.loading??!1,i={id:n,color:e.color??`info`,loading:r,title:e.title,description:e.description,duration:e.duration??(r?0:4e3),icon:e.icon,closable:e.closable??!0,action:e.action,onClose:e.onClose,state:`open`,scope:t},a=this.toasts.findIndex(e=>e.id===n);if(a>=0){let e=this.toasts.slice();e[a]=i,this.toasts=e}else this.toasts=[...this.toasts,i];return this.emit(),this.schedule(n,i.duration),n}update(e,t){let n=this.toasts.find(t=>t.id===e&&t.state===`open`);if(!n)return;let r=t.loading!==void 0&&t.loading!==n.loading,i=n.loading?0:Ce,a=t.duration??(r&&n.duration===i?void 0:n.duration);this.push({...n,...t,id:e,duration:a},n.scope)}dismiss(e){this.clearTimer(e);let t=this.toasts.find(t=>t.id===e&&t.state===`open`);t&&(this.toasts=this.toasts.map(t=>t.id===e?{...t,state:`closing`}:t),this.emit(),t.onClose?.(e),setTimeout(()=>{this.toasts.find(t=>t.id===e)?.state===`closing`&&(this.toasts=this.toasts.filter(t=>t.id!==e),this.emit())},200))}dismissAll(){for(let e of this.toasts)this.dismiss(e.id)}pause(e){let t=this.timers.get(e);t&&!t.paused&&(clearTimeout(t.handle),t.remaining=Math.max(0,t.deadline-Date.now()),t.paused=!0)}resume(e){let t=this.timers.get(e);t?.paused&&(t.paused=!1,t.deadline=Date.now()+t.remaining,t.handle=setTimeout(()=>this.dismiss(e),t.remaining))}peek(){return this.toasts}reset(){for(let e of[...this.timers.keys()])this.clearTimer(e);this.toasts=[],this.emit()}},D=new E,O=new class{constructor(){this.mounted=new Set,this.owner=null,this.listeners=new Set,this.sequence=0,this.nextOrder=()=>++this.sequence,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)}),this.getOwner=()=>this.owner}register(e){return this.mounted.add(e),this.elect(),()=>{this.mounted.delete(e),this.elect()}}elect(){let e=null;for(let t of this.mounted)(e===null||t<e)&&(e=t);if(e!==this.owner){this.owner=e;for(let e of this.listeners)e()}}},k=(e,t)=>{let n=n=>e.push(n,t),r=(e=>n(e));return r.info=(e,t)=>n({...t,title:e,color:`info`}),r.success=(e,t)=>n({...t,title:e,color:`success`}),r.warning=(e,t)=>n({...t,title:e,color:`warning`}),r.danger=(e,t)=>n({...t,title:e,color:`danger`}),r.loading=(e,t)=>n({...t,title:e,loading:!0}),r.promise=(e,t,r)=>{let i=n({...r,title:t.loading,loading:!0,duration:0}),a=(e,t)=>n({...r,id:i,title:t,color:e,loading:!1});return e.then(e=>a(`success`,typeof t.success==`function`?t.success(e):t.success),e=>a(`danger`,typeof t.error==`function`?t.error(e):t.error)),e},r.update=(t,n)=>e.update(t,n),r.dismiss=t=>t===void 0?e.dismissAll():e.dismiss(t),r},A=k(D)})))()}var M,N,P,F,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,I;function He(){return(He=e((()=>{M=`_viewport_18vnp_1`,N=`_topRight_18vnp_13`,P=`_topLeft_18vnp_18`,F=`_topCenter_18vnp_23`,we=`_bottomRight_18vnp_29`,Te=`_bottomLeft_18vnp_35`,Ee=`_bottomCenter_18vnp_41`,De=`_toast_18vnp_48`,Oe=`_toastSlideIn_18vnp_1`,ke=`_toastSlideOut_18vnp_1`,Ae=`_progress_18vnp_72`,je=`_icon_18vnp_76`,Me=`_content_18vnp_88`,Ne=`_title_18vnp_94`,Pe=`_description_18vnp_98`,Fe=`_close_18vnp_103`,Ie=`_action_18vnp_129`,Le=`_toastProgress_18vnp_1`,Re=`_info_18vnp_168`,ze=`_success_18vnp_174`,Be=`_warning_18vnp_180`,Ve=`_danger_18vnp_186`,I={viewport:M,topRight:N,topLeft:P,topCenter:F,bottomRight:we,bottomLeft:Te,bottomCenter:Ee,toast:De,toastSlideIn:Oe,toastSlideOut:ke,progress:Ae,icon:je,content:Me,title:Ne,description:Pe,close:Fe,action:Ie,toastProgress:Le,info:Re,success:ze,warning:Be,danger:Ve}})))()}var L,R,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,z,Qe,$e,B,et,V,tt,H,nt,rt,it;function U(){return(U=e((()=>{s(),me(),g(),ne(),se(),le(),ue(),j(),He(),L=t(),a(),R=r(),Ue=n(),We={info:(0,R.jsx)(b,{"aria-hidden":`true`}),success:(0,R.jsx)(te,{"aria-hidden":`true`}),warning:(0,R.jsx)(re,{"aria-hidden":`true`}),danger:(0,R.jsx)(ie,{"aria-hidden":`true`})},Ge=(0,R.jsx)(oe,{variant:`spinner`,size:`small`,color:`current`,decorative:!0}),Ke=[],qe=[`F8`],Je=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`],Ye=(e,t)=>t.length>0&&t.every(t=>Je.includes(t)?e[t]:e.code===t||e.key===t),Xe=e=>e.map(e=>e.replace(/Key$/,``).replace(/^Key(?=.)/,``).replace(/^Digit/,``).replace(/^./,e=>e.toUpperCase())).join(`+`),Ze=(e,t)=>{let n=e.parentElement;if(!n)return;let r=Array.from(n.querySelectorAll(`:scope > [data-state="open"]`)).filter(t=>t!==e),a=r.find(t=>e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)??r[r.length-1];if(a){let e=a.querySelector(`[data-toast-close]`)??o(a)[0];if(i(e))return}let s=t.getReturnFocus();s?.isConnected&&!n.contains(s)&&i(s)||i(de(n))||(n.setAttribute(`tabindex`,`-1`),i(n,{preventScroll:!0}))},z=()=>Ke,Qe=()=>null,$e=()=>()=>{},B=()=>{let e=T(ye());return(0,L.useMemo)(()=>e?k(D,e):A,[e])},et=({item:e,pauseOnHover:t,closeLabel:n,tracker:r})=>{let{t:i}=_(),a=(0,L.useRef)(null),o=()=>{let t=a.current;t?.contains(t.ownerDocument.activeElement)&&Ze(t,r),D.dismiss(e.id)},s=n??i(`toast.close`),c=()=>{t&&D.pause(e.id)},l=()=>{t&&D.resume(e.id)},d=e.state===`closing`;return(0,R.jsxs)(`div`,{ref:a,className:u(I.toast,I[e.color]),"data-state":d?`closing`:`open`,"data-loading":e.loading||void 0,role:e.color===`danger`&&!e.loading?`alert`:`status`,style:e.duration>0?{"--toast-duration":`${e.duration}ms`}:void 0,onMouseEnter:c,onMouseLeave:l,onFocus:c,onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||l()},onKeyDown:e=>{e.key!==`Escape`||d||e.nativeEvent.isComposing||(e.preventDefault(),e.stopPropagation(),o())},children:[e.icon!==null&&(0,R.jsx)(`span`,{className:I.icon,"aria-hidden":`true`,children:e.icon===void 0?e.loading?Ge:We[e.color]:e.icon}),(0,R.jsxs)(`div`,{className:I.content,children:[e.title&&(0,R.jsx)(`div`,{className:I.title,children:e.title}),e.description&&(0,R.jsx)(`div`,{className:I.description,children:e.description})]}),e.action&&(0,R.jsx)(`button`,{type:`button`,className:I.action,onClick:()=>{e.action?.onClick(),o()},children:e.action.label}),e.closable&&(0,R.jsx)(`button`,{type:`button`,className:I.close,"aria-label":s,"data-toast-close":``,onClick:o,children:(0,R.jsx)(ae,{"aria-hidden":`true`})}),e.duration>0&&!d&&(0,R.jsx)(`span`,{className:I.progress,"aria-hidden":`true`})]})},V=(e,t,n)=>e?(0,R.jsx)(ve.Provider,{value:e,children:t},n):t,tt=({items:e,position:t,pauseOnHover:n,"aria-label":r,closeLabel:i,hotkeyLabel:a,tracker:o,viewportKey:s})=>{let{t:c}=_();return(0,R.jsx)(`div`,{ref:e=>(o.registerViewport(s,e),()=>o.registerViewport(s,null)),className:u(I.viewport,I[t]),role:`region`,"aria-label":r??(a?c(`toast.regionWithHotkey`,{hotkey:a}):c(`toast.region`)),onFocus:e=>{let t=e.relatedTarget;t&&!e.currentTarget.contains(t)&&o.setReturnFocus(t)},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||e.currentTarget.removeAttribute(`tabindex`)},children:e.map(e=>V(e.scope,(0,R.jsx)(et,{item:e,pauseOnHover:n,closeLabel:i,tracker:o},e.id),e.id))})},H=new WeakMap,nt=0,rt=e=>{let t=H.get(e);return t===void 0&&(t=++nt,H.set(e,t)),`scope-${t}`},it=({position:e=`topRight`,children:t,max:n=1/0,pauseOnHover:r=!0,"aria-label":a,closeLabel:o,hotkey:s=qe})=>{let[c]=(0,L.useState)(O.nextOrder);(0,L.useEffect)(()=>O.register(c),[c]);let l=(0,L.useSyncExternalStore)(O.subscribe,O.getOwner,Qe)===c,u=(0,L.useSyncExternalStore)(l?D.subscribe:$e,l?D.getSnapshot:z,z),d=ce(),f=pe(),p=(0,L.useRef)(new Map),m=(0,L.useRef)(null),h=(0,L.useMemo)(()=>({getReturnFocus:()=>m.current,setReturnFocus:e=>{m.current=e},registerViewport:(e,t)=>{t?p.current.set(e,t):p.current.delete(e)}}),[]),ee=Xe(s),g=s.join(`\0`);(0,L.useEffect)(()=>{if(!l||!g)return;let e=g.split(`\0`),t=t=>{if(!Ye(t,e))return;let n=p.current,r=n.get(`own`),a=[...r?[r]:[],...[...n.values()].filter(e=>e!==r)].find(e=>e.isConnected&&e.querySelector(`[data-state="open"]`));if(!a)return;t.preventDefault();let o=a.ownerDocument,s=o.activeElement;s&&s!==o.body&&!a.contains(s)&&h.setReturnFocus(s),a.setAttribute(`tabindex`,`-1`),i(a)};return document.addEventListener(`keydown`,t),()=>document.removeEventListener(`keydown`,t)},[l,g,h]);let _=new Set,v=[];for(let e=u.length-1;e>=0;--e)_.has(u[e].id)||(_.add(u[e].id),v.unshift(u[e]));let y=v.filter(e=>e.state===`open`),te=Math.max(0,y.length-n),b=y.slice(0,te).map(e=>String(e.id)).join(`\0`);return(0,L.useEffect)(()=>{if(!l||!b)return;let e=D.getSnapshot().filter(e=>e.state===`open`);for(let t of e.slice(0,Math.max(0,e.length-n)))D.dismiss(t.id)},[l,b,n]),(0,R.jsxs)(R.Fragment,{children:[t,d&&l&&(()=>{let t=f??document.body,n=new Map([[t,{scope:void 0,items:[]}]]);for(let e of v){let r=e.scope?.portalContainer,i=r?.isConnected?r:t,a=n.get(i);a||(a={scope:e.scope,items:[]},n.set(i,a)),a.items.push(e)}return[...n].map(([n,i])=>{let s=n===t?`own`:rt(n);return(0,Ue.createPortal)(V(i.scope,(0,R.jsx)(tt,{items:i.items,position:e,pauseOnHover:r,"aria-label":a,closeLabel:o,hotkeyLabel:ee,tracker:h,viewportKey:s})),n,s)})})()]})}})))()}function at(){return(0,W.jsxs)(S,{gap:2,wrap:!0,children:[(0,W.jsx)(y,{color:`neutral`,variant:`outline`,onClick:()=>A.info(`Conversation archived`,{duration:8e3,action:{label:`Undo`,onClick:()=>A.success(`Conversation restored`)}}),children:`With action`}),(0,W.jsx)(y,{color:`neutral`,variant:`outline`,onClick:()=>A.info(`Reminder set for 9:00`,{icon:(0,W.jsx)(Se,{}),closable:!1}),children:`Custom icon, no close button`}),(0,W.jsx)(y,{color:`neutral`,variant:`outline`,onClick:()=>A.success(`Exported`,{onClose:()=>A.info(`Export toast closed`)}),children:`onClose`})]})}var W;function ot(){return(ot=e((()=>{v(),x(),j(),xe(),W=r()})))()}function st(){let[e,t]=(0,ct.useState)(`topRight`);return(0,G.jsx)(it,{position:e,max:3,children:(0,G.jsxs)(fe,{gap:4,align:`start`,children:[(0,G.jsxs)(S,{gap:2,wrap:!0,children:[(0,G.jsx)(y,{color:`success`,onClick:()=>A.success(`Saved`),children:`Success`}),(0,G.jsx)(y,{color:`danger`,onClick:()=>A.danger(`Request failed`),children:`Danger`}),(0,G.jsx)(y,{color:`warning`,onClick:()=>A.warning(`Unsaved changes`),children:`Warning`}),(0,G.jsx)(y,{color:`neutral`,variant:`outline`,onClick:()=>A.info(`New version`),children:`Info`})]}),(0,G.jsx)(S,{attached:!0,wrap:!0,"aria-label":`Position`,children:lt.map(n=>(0,G.jsx)(y,{size:`small`,color:n===e?`primary`:`neutral`,variant:n===e?`solid`:`outline`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))})]})})}var ct,G,lt;function ut(){return(ut=e((()=>{ct=t(),v(),x(),U(),j(),G=r(),lt=[`topLeft`,`topCenter`,`topRight`,`bottomLeft`,`bottomCenter`,`bottomRight`]})))()}function dt(){return(0,K.jsx)(S,{gap:2,wrap:!0,children:ft.map(e=>(0,K.jsx)(y,{color:`neutral`,variant:`outline`,onClick:()=>A({color:e,title:`A ${e} toast`,description:`color sets the accent, the icon and the role.`}),children:e},e))})}var K,ft;function pt(){return(pt=e((()=>{v(),x(),j(),K=r(),ft=[`info`,`success`,`warning`,`danger`]})))()}function mt(){let e=B();return(0,ht.jsx)(y,{color:`neutral`,variant:`outline`,onClick:()=>e.danger(`Sync failed at ${new Date().toLocaleTimeString()}`,{id:`sync-error`}),children:`Fail again`})}var ht;function gt(){return(gt=e((()=>{v(),U(),ht=r()})))()}function _t(){return(0,q.jsxs)(S,{gap:2,wrap:!0,children:[(0,q.jsx)(y,{color:`neutral`,variant:`outline`,onClick:()=>{A.info(`Build started`,{duration:0}),A.success(`Tests passed`,{duration:0}),A.warning(`Coverage dropped by 2%`,{duration:0,action:{label:`Details`,onClick:()=>{}}})},children:`Show three toasts, then press F8`}),(0,q.jsx)(y,{color:`neutral`,variant:`ghost`,onClick:()=>A.dismiss(),children:`Dismiss all`})]})}var q;function vt(){return(vt=e((()=>{v(),x(),j(),q=r()})))()}function yt(){return(0,J.jsxs)(S,{gap:2,wrap:!0,children:[(0,J.jsx)(y,{onClick:()=>{let e=A.loading(`Saving…`);setTimeout(()=>{A.update(e,{color:`success`,loading:!1,title:`Saved!`})},1500)},children:`Save (update)`}),(0,J.jsx)(y,{color:`neutral`,variant:`outline`,onClick:()=>A.promise(new Promise((e,t)=>setTimeout(()=>Math.random()>.3?e(3):t(Error()),1500)),{loading:`Uploading files…`,success:e=>`${e} files uploaded`,error:`Upload failed, try again`}).catch(()=>void 0),children:`Upload (promise)`}),(0,J.jsx)(y,{color:`danger`,variant:`outline`,onClick:()=>{let e=A({color:`danger`,loading:!0,title:`Deleting…`});setTimeout(()=>{A.update(e,{loading:!1,title:`Project deleted`})},1500)},children:`Delete (loading option)`})]})}var J;function bt(){return(bt=e((()=>{v(),x(),j(),J=r()})))()}function xt(){return(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,Y.jsx)(y,{color:`neutral`,variant:`outline`,onClick:()=>A({color:`success`,title:`Book published`,description:`Readers can now find it in the catalog.`,duration:8e3}),children:`With description`}),(0,Y.jsx)(y,{color:`neutral`,variant:`outline`,onClick:()=>A.warning(`Stays until closed`,{duration:0}),children:`Persistent`}),(0,Y.jsx)(y,{color:`neutral`,variant:`outline`,onClick:()=>A.dismiss(),children:`Dismiss all`})]})}var Y;function St(){return(St=e((()=>{v(),j(),Y=r()})))()}function Ct(){let e=B();return(0,X.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,X.jsx)(y,{onClick:()=>e.success(`Saved (useToast(): dark, tech, 中文)`),children:`useToast()`}),(0,X.jsx)(y,{color:`neutral`,variant:`outline`,onClick:Tt,children:`toast()`})]})}function wt(){return(0,X.jsx)(he,{theme:`dark`,palette:`tech`,locale:{language:`zh`},children:(0,X.jsx)(Ct,{})})}var X,Tt;function Et(){return(Et=e((()=>{v(),_e(),j(),U(),X=r(),Tt=()=>A.info(`Synced (toast(): root scope)`)})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`import { Button, HStack, toast } from "@minerva/lib-core";
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
`})))()}var kt;function At(){return(At=e((()=>{kt=`import { useState } from "react";
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
`})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`import { Button, HStack, toast } from "@minerva/lib-core";

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
`})))()}var Nt;function Pt(){return(Pt=e((()=>{Nt=`import { Button, useToast } from "@minerva/lib-core";

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
`})))()}var Ft;function Z(){return(Z=e((()=>{Ft=`import { Button, HStack, toast } from "@minerva/lib-core";

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
`})))()}var It;function Lt(){return(Lt=e((()=>{It=`import { Button, HStack, toast } from "@minerva/lib-core";

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
`})))()}var Rt;function zt(){return(zt=e((()=>{Rt=`import { Button, toast } from "@minerva/lib-core";

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
`})))()}var Bt;function Vt(){return(Vt=e((()=>{Bt=`import { Button, ConfigProvider, toast, useToast } from "@minerva/lib-core";

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
`})))()}var Q,Ht,Ut,Wt;function $(){return($=e((()=>{ot(),ut(),pt(),gt(),vt(),bt(),St(),Et(),Ot(),At(),Mt(),Pt(),Z(),Lt(),zt(),Vt(),t(),be(),ee(),f(),l(),c(),Q=r(),Ht=m(Object.assign({"./demos/action.tsx":at,"./demos/basic.tsx":st,"./demos/colors.tsx":dt,"./demos/dedupe.tsx":mt,"./demos/keyboard.tsx":_t,"./demos/loading.tsx":yt,"./demos/options.tsx":xt,"./demos/scoped.tsx":wt}),Object.assign({"./demos/action.tsx":Dt,"./demos/basic.tsx":kt,"./demos/colors.tsx":jt,"./demos/dedupe.tsx":Nt,"./demos/keyboard.tsx":Ft,"./demos/loading.tsx":It,"./demos/options.tsx":Rt,"./demos/scoped.tsx":Bt})),Ut=`// Inside a component: follows the nearest ConfigProvider scope
function SaveButton() {
  const toast = useToast();
  return <Button onClick={() => toast.success("Saved")}>Save</Button>;
}

// Outside React (API client, event bus, store...): root scope
import { toast } from "@minerva/lib-core";
apiClient.onError((error) => toast.danger(error.message));`,Wt=()=>{let{t:e}=ge(),t=(0,Q.jsxs)(`section`,{className:p.section,"aria-labelledby":`when-to-use`,children:[(0,Q.jsx)(`h2`,{id:`when-to-use`,children:e(`docs.toast.usage.title`)}),(0,Q.jsxs)(`ul`,{className:p.prose,children:[(0,Q.jsx)(`li`,{children:e(`docs.toast.usage.hook`)}),(0,Q.jsx)(`li`,{children:e(`docs.toast.usage.function`)})]}),(0,Q.jsx)(d,{code:Ut,language:`tsx`})]});return(0,Q.jsx)(h,{id:`toast`,demos:Ht,intro:t})}})))()}$();export{Wt as default};