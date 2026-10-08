import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,h as n,t as r}from"./react-vendor-aZSMfLKR.js";import{X as i,Yt as a,cn as o,fn as s,ln as c,xn as l,xt as u}from"./minerva-web-components-e9i9Tzii.js";import{nt as d,rt as f}from"./io5-DyQ46fG2.js";import{n as ee,t as p}from"./useI18n-Brv-VDVY.js";import{i as m,n as h,r as g,t as te}from"./themeScope-CVsq4AXR.js";import{n as _,t as v}from"./Button-DP6INRXF.js";import{L as y,P as b,T as x,p as ne,v as S,w as re}from"./icons-C9qyBhWC.js";import{n as ie,t as ae}from"./ProgressIndicator-MZGP8IFl.js";import{n as oe,t as se}from"./useIsClient-_IWI0CYd.js";import{r as ce,t as le}from"./ConfigProvider-Cjobfnxn.js";import{n as C,r as ue,t as w}from"./Stack-BKDv4gra.js";import{a as de,t as fe}from"./fi-mRCq4IDl.js";import{c as pe,i as me,l as he,n as ge,r as _e,s as ve,t as ye,u as be}from"./DocPage-DEXoN4OO.js";var xe;function Se(){return(Se=e((()=>{xe=typeof window<`u`&&typeof document<`u`})))()}var Ce,T,E,D,O,k,A;function j(){return(j=e((()=>{Se(),Ce=4e3,T=e=>e&&(e.portalContainer||e.language)?e:void 0,E=class{constructor(){this.toasts=[],this.listeners=new Set,this.idCounter=0,this.timers=new Map,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)}),this.getSnapshot=()=>this.toasts}emit(){for(let e of this.listeners)e(this.toasts)}clearTimer(e){let t=this.timers.get(e);t&&clearTimeout(t.handle),this.timers.delete(e)}schedule(e,t){this.clearTimer(e),!(t<=0)&&this.timers.set(e,{handle:setTimeout(()=>this.dismiss(e),t),deadline:Date.now()+t,remaining:t,paused:!1})}push(e,t){let n=e.id??++this.idCounter;if(!xe)return n;let r=e.loading??!1,i={id:n,color:e.color??`info`,loading:r,title:e.title,description:e.description,duration:e.duration??(r?0:4e3),icon:e.icon,closable:e.closable??!0,action:e.action,onClose:e.onClose,state:`open`,scope:t},a=this.toasts.findIndex(e=>e.id===n);if(a>=0){let e=this.toasts.slice();e[a]=i,this.toasts=e}else this.toasts=[...this.toasts,i];return this.emit(),this.schedule(n,i.duration),n}update(e,t){let n=this.toasts.find(t=>t.id===e&&t.state===`open`);if(!n)return;let r=t.loading!==void 0&&t.loading!==n.loading,i=n.loading?0:Ce,a=t.duration??(r&&n.duration===i?void 0:n.duration);this.push({...n,...t,id:e,duration:a},n.scope)}dismiss(e){this.clearTimer(e);let t=this.toasts.find(t=>t.id===e&&t.state===`open`);t&&(this.toasts=this.toasts.map(t=>t.id===e?{...t,state:`closing`}:t),this.emit(),t.onClose?.(e),setTimeout(()=>{this.toasts.find(t=>t.id===e)?.state===`closing`&&(this.toasts=this.toasts.filter(t=>t.id!==e),this.emit())},200))}dismissAll(){for(let e of this.toasts)this.dismiss(e.id)}pause(e){let t=this.timers.get(e);t&&!t.paused&&(clearTimeout(t.handle),t.remaining=Math.max(0,t.deadline-Date.now()),t.paused=!0)}resume(e){let t=this.timers.get(e);t?.paused&&(t.paused=!1,t.deadline=Date.now()+t.remaining,t.handle=setTimeout(()=>this.dismiss(e),t.remaining))}peek(){return this.toasts}reset(){for(let e of[...this.timers.keys()])this.clearTimer(e);this.toasts=[],this.emit()}},D=new E,O=new class{constructor(){this.mounted=new Set,this.owner=null,this.listeners=new Set,this.sequence=0,this.nextOrder=()=>++this.sequence,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)}),this.getOwner=()=>this.owner}register(e){return this.mounted.add(e),this.elect(),()=>{this.mounted.delete(e),this.elect()}}elect(){let e=null;for(let t of this.mounted)(e===null||t<e)&&(e=t);if(e!==this.owner){this.owner=e;for(let e of this.listeners)e()}}},k=(e,t)=>{let n=n=>e.push(n,t),r=(e=>n(e));return r.info=(e,t)=>n({...t,title:e,color:`info`}),r.success=(e,t)=>n({...t,title:e,color:`success`}),r.warning=(e,t)=>n({...t,title:e,color:`warning`}),r.danger=(e,t)=>n({...t,title:e,color:`danger`}),r.loading=(e,t)=>n({...t,title:e,loading:!0}),r.promise=(e,t,r)=>{let i=n({...r,title:t.loading,loading:!0,duration:0}),a=(e,t)=>n({...r,id:i,title:t,color:e,loading:!1});return e.then(e=>a(`success`,typeof t.success==`function`?t.success(e):t.success),e=>a(`danger`,typeof t.error==`function`?t.error(e):t.error)),e},r.update=(t,n)=>e.update(t,n),r.dismiss=t=>t===void 0?e.dismissAll():e.dismiss(t),r},A=k(D)})))()}var M,N,P,F,I,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,L;function Fe(){return(Fe=e((()=>{M=`_viewport_xqbj1_1`,N=`_toast_xqbj1_48`,P=`_toastSlideIn_xqbj1_1`,F=`_toastSlideOut_xqbj1_1`,I=`_progress_xqbj1_72`,we=`_icon_xqbj1_76`,Te=`_content_xqbj1_88`,Ee=`_title_xqbj1_94`,De=`_description_xqbj1_98`,Oe=`_close_xqbj1_103`,ke=`_action_xqbj1_129`,Ae=`_toastProgress_xqbj1_1`,je=`_info_xqbj1_168`,Me=`_success_xqbj1_174`,Ne=`_warning_xqbj1_180`,Pe=`_danger_xqbj1_186`,L={viewport:M,"top-right":`_top-right_xqbj1_13`,"top-left":`_top-left_xqbj1_18`,"top-center":`_top-center_xqbj1_23`,"bottom-right":`_bottom-right_xqbj1_29`,"bottom-left":`_bottom-left_xqbj1_35`,"bottom-center":`_bottom-center_xqbj1_41`,toast:N,toastSlideIn:P,toastSlideOut:F,progress:I,icon:we,content:Te,title:Ee,description:De,close:Oe,action:ke,toastProgress:Ae,info:je,success:Me,warning:Ne,danger:Pe}})))()}var R,z,Ie,Le,Re,ze,Be,Ve,B,He,Ue,V,We,H,Ge,U,Ke,qe,Je;function W(){return(W=e((()=>{o(),g(),ee(),x(),ae(),se(),j(),Fe(),R=t(),z=r(),Ie=n(),Le={info:(0,z.jsx)(b,{"aria-hidden":`true`}),success:(0,z.jsx)(y,{"aria-hidden":`true`}),warning:(0,z.jsx)(ne,{"aria-hidden":`true`}),danger:(0,z.jsx)(S,{"aria-hidden":`true`})},Re=(0,z.jsx)(ie,{variant:`spinner`,size:`small`,color:`current`,decorative:!0}),ze=[],Be=[`F8`],Ve=(e,t)=>{let n=e.parentElement;if(!n)return;let r=Array.from(n.querySelectorAll(`:scope > [data-state="open"]`)).filter(t=>t!==e),i=r.find(t=>e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)??r[r.length-1];if(i){let e=i.querySelector(`[data-toast-close]`)??u(i)[0];if(s(e))return}let a=t.getReturnFocus();a?.isConnected&&!n.contains(a)&&s(a)||s(l(n))||(n.setAttribute(`tabindex`,`-1`),s(n,{preventScroll:!0}))},B=()=>ze,He=()=>null,Ue=()=>()=>{},V=()=>{let e=T(h());return(0,R.useMemo)(()=>e?k(D,e):A,[e])},We=({item:e,pauseOnHover:t,closeLabel:n,tracker:r})=>{let{t:a}=p(),o=(0,R.useRef)(null),s=()=>{let t=o.current;t?.contains(t.ownerDocument.activeElement)&&Ve(t,r),D.dismiss(e.id)},c=n??a(`toast.close`),l=()=>{t&&D.pause(e.id)},u=()=>{t&&D.resume(e.id)},d=e.state===`closing`;return(0,z.jsxs)(`div`,{ref:o,className:i(L.toast,L[e.color]),"data-state":d?`closing`:`open`,"data-loading":e.loading||void 0,role:e.color===`danger`&&!e.loading?`alert`:`status`,style:e.duration>0?{"--toast-duration":`${e.duration}ms`}:void 0,onMouseEnter:l,onMouseLeave:u,onFocus:l,onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||u()},onKeyDown:e=>{e.key!==`Escape`||d||e.nativeEvent.isComposing||(e.preventDefault(),e.stopPropagation(),s())},children:[e.icon!==null&&(0,z.jsx)(`span`,{className:L.icon,"aria-hidden":`true`,children:e.icon===void 0?e.loading?Re:Le[e.color]:e.icon}),(0,z.jsxs)(`div`,{className:L.content,children:[e.title&&(0,z.jsx)(`div`,{className:L.title,children:e.title}),e.description&&(0,z.jsx)(`div`,{className:L.description,children:e.description})]}),e.action&&(0,z.jsx)(`button`,{type:`button`,className:L.action,onClick:()=>{e.action?.onClick(),s()},children:e.action.label}),e.closable&&(0,z.jsx)(`button`,{type:`button`,className:L.close,"aria-label":c,"data-toast-close":``,onClick:s,children:(0,z.jsx)(re,{"aria-hidden":`true`})}),e.duration>0&&!d&&(0,z.jsx)(`span`,{className:L.progress,"aria-hidden":`true`})]})},H=(e,t,n)=>e?(0,z.jsx)(m.Provider,{value:e,children:t},n):t,Ge=({items:e,position:t,pauseOnHover:n,"aria-label":r,closeLabel:a,hotkeyLabel:o,tracker:s,viewportKey:c})=>{let{t:l}=p();return(0,z.jsx)(`div`,{ref:e=>(s.registerViewport(c,e),()=>s.registerViewport(c,null)),className:i(L.viewport,L[t]),role:`region`,"aria-label":r??(o?l(`toast.regionWithHotkey`,{hotkey:o}):l(`toast.region`)),onFocus:e=>{let t=e.relatedTarget;t&&!e.currentTarget.contains(t)&&s.setReturnFocus(t)},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||e.currentTarget.removeAttribute(`tabindex`)},children:e.map(e=>H(e.scope,(0,z.jsx)(We,{item:e,pauseOnHover:n,closeLabel:a,tracker:s},e.id),e.id))})},U=new WeakMap,Ke=0,qe=e=>{let t=U.get(e);return t===void 0&&(t=++Ke,U.set(e,t)),`scope-${t}`},Je=({position:e=`top-right`,children:t,max:n=1/0,pauseOnHover:r=!0,"aria-label":i,closeLabel:o,hotkey:l=Be})=>{let[u]=(0,R.useState)(O.nextOrder);(0,R.useEffect)(()=>O.register(u),[u]);let d=(0,R.useSyncExternalStore)(O.subscribe,O.getOwner,He)===u,f=(0,R.useSyncExternalStore)(d?D.subscribe:Ue,d?D.getSnapshot:B,B),ee=oe(),p=te(),m=(0,R.useRef)(new Map),h=(0,R.useRef)(null),g=(0,R.useMemo)(()=>({getReturnFocus:()=>h.current,setReturnFocus:e=>{h.current=e},registerViewport:(e,t)=>{t?m.current.set(e,t):m.current.delete(e)}}),[]),_=a(l),v=l.join(`\0`);(0,R.useEffect)(()=>{if(!d||!v)return;let e=v.split(`\0`),t=t=>{if(!c(t,e))return;let n=m.current,r=n.get(`own`),i=[...r?[r]:[],...[...n.values()].filter(e=>e!==r)].find(e=>e.isConnected&&e.querySelector(`[data-state="open"]`));if(!i)return;t.preventDefault();let a=i.ownerDocument,o=a.activeElement;o&&o!==a.body&&!i.contains(o)&&g.setReturnFocus(o),i.setAttribute(`tabindex`,`-1`),s(i)};return document.addEventListener(`keydown`,t),()=>document.removeEventListener(`keydown`,t)},[d,v,g]);let y=new Set,b=[];for(let e=f.length-1;e>=0;--e)y.has(f[e].id)||(y.add(f[e].id),b.unshift(f[e]));let x=b.filter(e=>e.state===`open`),ne=Math.max(0,x.length-n),S=x.slice(0,ne).map(e=>String(e.id)).join(`\0`);return(0,R.useEffect)(()=>{if(!d||!S)return;let e=D.getSnapshot().filter(e=>e.state===`open`);for(let t of e.slice(0,Math.max(0,e.length-n)))D.dismiss(t.id)},[d,S,n]),(0,z.jsxs)(z.Fragment,{children:[t,ee&&d&&(()=>{let t=p??document.body,n=new Map([[t,{scope:void 0,items:[]}]]);for(let e of b){let r=e.scope?.portalContainer,i=r?.isConnected?r:t,a=n.get(i);a||(a={scope:e.scope,items:[]},n.set(i,a)),a.items.push(e)}return[...n].map(([n,a])=>{let s=n===t?`own`:qe(n);return(0,Ie.createPortal)(H(a.scope,(0,z.jsx)(Ge,{items:a.items,position:e,pauseOnHover:r,"aria-label":i,closeLabel:o,hotkeyLabel:_,tracker:g,viewportKey:s})),n,s)})})()]})}})))()}function Ye(){return(0,G.jsxs)(w,{gap:2,wrap:!0,children:[(0,G.jsx)(v,{color:`neutral`,variant:`outline`,onClick:()=>A.info(`Conversation archived`,{duration:8e3,action:{label:`Undo`,onClick:()=>A.success(`Conversation restored`)}}),children:`With action`}),(0,G.jsx)(v,{color:`neutral`,variant:`outline`,onClick:()=>A.info(`Reminder set for 9:00`,{icon:(0,G.jsx)(fe,{}),closable:!1}),children:`Custom icon, no close button`}),(0,G.jsx)(v,{color:`neutral`,variant:`outline`,onClick:()=>A.success(`Exported`,{onClose:()=>A.info(`Export toast closed`)}),children:`onClose`})]})}var G;function Xe(){return(Xe=e((()=>{_(),C(),j(),de(),G=r()})))()}function Ze(){let[e,t]=(0,Qe.useState)(`top-right`);return(0,K.jsx)(Je,{position:e,max:3,children:(0,K.jsxs)(ue,{gap:4,align:`start`,children:[(0,K.jsxs)(w,{gap:2,wrap:!0,children:[(0,K.jsx)(v,{color:`success`,onClick:()=>A.success(`Saved`),children:`Success`}),(0,K.jsx)(v,{color:`danger`,onClick:()=>A.danger(`Request failed`),children:`Danger`}),(0,K.jsx)(v,{color:`warning`,onClick:()=>A.warning(`Unsaved changes`),children:`Warning`}),(0,K.jsx)(v,{color:`neutral`,variant:`outline`,onClick:()=>A.info(`New version`),children:`Info`})]}),(0,K.jsx)(w,{attached:!0,wrap:!0,"aria-label":`Position`,children:$e.map(n=>(0,K.jsx)(v,{size:`small`,color:n===e?`primary`:`neutral`,variant:n===e?`solid`:`outline`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))})]})})}var Qe,K,$e;function et(){return(et=e((()=>{Qe=t(),_(),C(),W(),j(),K=r(),$e=[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`]})))()}function tt(){return(0,q.jsx)(w,{gap:2,wrap:!0,children:nt.map(e=>(0,q.jsx)(v,{color:`neutral`,variant:`outline`,onClick:()=>A({color:e,title:`A ${e} toast`,description:`color sets the accent, the icon and the role.`}),children:e},e))})}var q,nt;function rt(){return(rt=e((()=>{_(),C(),j(),q=r(),nt=[`info`,`success`,`warning`,`danger`]})))()}function it(){let e=V();return(0,at.jsx)(v,{color:`neutral`,variant:`outline`,onClick:()=>e.danger(`Sync failed at ${new Date().toLocaleTimeString()}`,{id:`sync-error`}),children:`Fail again`})}var at;function ot(){return(ot=e((()=>{_(),W(),at=r()})))()}function st(){return(0,J.jsxs)(w,{gap:2,wrap:!0,children:[(0,J.jsx)(v,{color:`neutral`,variant:`outline`,onClick:()=>{A.info(`Build started`,{duration:0}),A.success(`Tests passed`,{duration:0}),A.warning(`Coverage dropped by 2%`,{duration:0,action:{label:`Details`,onClick:()=>{}}})},children:`Show three toasts, then press F8`}),(0,J.jsx)(v,{color:`neutral`,variant:`ghost`,onClick:()=>A.dismiss(),children:`Dismiss all`})]})}var J;function ct(){return(ct=e((()=>{_(),C(),j(),J=r()})))()}function lt(){return(0,Y.jsxs)(w,{gap:2,wrap:!0,children:[(0,Y.jsx)(v,{onClick:()=>{let e=A.loading(`Saving…`);setTimeout(()=>{A.update(e,{color:`success`,loading:!1,title:`Saved!`})},1500)},children:`Save (update)`}),(0,Y.jsx)(v,{color:`neutral`,variant:`outline`,onClick:()=>A.promise(new Promise((e,t)=>setTimeout(()=>Math.random()>.3?e(3):t(Error()),1500)),{loading:`Uploading files…`,success:e=>`${e} files uploaded`,error:`Upload failed, try again`}).catch(()=>void 0),children:`Upload (promise)`}),(0,Y.jsx)(v,{color:`danger`,variant:`outline`,onClick:()=>{let e=A({color:`danger`,loading:!0,title:`Deleting…`});setTimeout(()=>{A.update(e,{loading:!1,title:`Project deleted`})},1500)},children:`Delete (loading option)`})]})}var Y;function ut(){return(ut=e((()=>{_(),C(),j(),Y=r()})))()}function dt(){return(0,X.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,X.jsx)(v,{color:`neutral`,variant:`outline`,onClick:()=>A({color:`success`,title:`Book published`,description:`Readers can now find it in the catalog.`,duration:8e3}),children:`With description`}),(0,X.jsx)(v,{color:`neutral`,variant:`outline`,onClick:()=>A.warning(`Stays until closed`,{duration:0}),children:`Persistent`}),(0,X.jsx)(v,{color:`neutral`,variant:`outline`,onClick:()=>A.dismiss(),children:`Dismiss all`})]})}var X;function ft(){return(ft=e((()=>{_(),j(),X=r()})))()}function pt(){let e=V();return(0,Z.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,Z.jsx)(v,{onClick:()=>e.success(`Saved (useToast(): dark, tech, 中文)`),children:`useToast()`}),(0,Z.jsx)(v,{color:`neutral`,variant:`outline`,onClick:ht,children:`toast()`})]})}function mt(){return(0,Z.jsx)(le,{theme:`dark`,palette:`tech`,locale:{language:`zh`},children:(0,Z.jsx)(pt,{})})}var Z,ht;function gt(){return(gt=e((()=>{_(),ce(),j(),W(),Z=r(),ht=()=>A.info(`Synced (toast(): root scope)`)})))()}var _t;function vt(){return(vt=e((()=>{_t=`import { Button, HStack, toast } from "@minerva/lib-core";
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
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`import { useState } from "react";
import {
  Button,
  HStack,
  ToastProvider,
  VStack,
  toast,
  type ToastPosition,
} from "@minerva/lib-core";

const positions: ToastPosition[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

export default function BasicDemo() {
  const [position, setPosition] = useState<ToastPosition>("top-right");
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
`})))()}var xt;function St(){return(St=e((()=>{xt=`import { Button, HStack, toast } from "@minerva/lib-core";

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
`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`import { Button, useToast } from "@minerva/lib-core";

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
`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`import { Button, HStack, toast } from "@minerva/lib-core";

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
`})))()}var Dt;function Q(){return(Q=e((()=>{Dt=`import { Button, HStack, toast } from "@minerva/lib-core";

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
`})))()}var Ot;function kt(){return(kt=e((()=>{Ot=`import { Button, toast } from "@minerva/lib-core";

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
`})))()}var At;function jt(){return(jt=e((()=>{At=`import { Button, ConfigProvider, toast, useToast } from "@minerva/lib-core";

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
`})))()}var $,Mt,Nt,Pt;function Ft(){return(Ft=e((()=>{Xe(),et(),rt(),ot(),ct(),ut(),ft(),gt(),vt(),bt(),St(),wt(),Et(),Q(),kt(),jt(),t(),d(),be(),ge(),me(),pe(),$=r(),Mt=ve(Object.assign({"./demos/action.tsx":Ye,"./demos/basic.tsx":Ze,"./demos/colors.tsx":tt,"./demos/dedupe.tsx":it,"./demos/keyboard.tsx":st,"./demos/loading.tsx":lt,"./demos/options.tsx":dt,"./demos/scoped.tsx":mt}),Object.assign({"./demos/action.tsx":_t,"./demos/basic.tsx":yt,"./demos/colors.tsx":xt,"./demos/dedupe.tsx":Ct,"./demos/keyboard.tsx":Tt,"./demos/loading.tsx":Dt,"./demos/options.tsx":Ot,"./demos/scoped.tsx":At})),Nt=`// Inside a component: follows the nearest ConfigProvider scope
function SaveButton() {
  const toast = useToast();
  return <Button onClick={() => toast.success("Saved")}>Save</Button>;
}

// Outside React (API client, event bus, store...): root scope
import { toast } from "@minerva/lib-core";
apiClient.onError((error) => toast.danger(error.message));`,Pt=()=>{let{t:e}=f(),t=(0,$.jsxs)(`section`,{className:_e.section,"aria-labelledby":`when-to-use`,children:[(0,$.jsx)(`h2`,{id:`when-to-use`,children:e(`docs.toast.usage.title`)}),(0,$.jsxs)(`ul`,{className:_e.prose,children:[(0,$.jsx)(`li`,{children:e(`docs.toast.usage.hook`)}),(0,$.jsx)(`li`,{children:e(`docs.toast.usage.function`)}),(0,$.jsx)(`li`,{children:e(`docs.toast.usage.modal`)})]}),(0,$.jsx)(he,{code:Nt,language:`tsx`})]});return(0,$.jsx)(ye,{id:`toast`,demos:Mt,intro:t})}})))()}Ft();export{Pt as default};