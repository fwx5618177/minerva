import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{$ as t,$n as n,$t as r,An as i,At as a,Bn as o,Bt as s,Cr as c,Ct as ee,Dn as te,Dr as l,Dt as ne,En as re,Er as ie,Et as ae,Fn as oe,Ft as se,Gt as ce,Hn as le,Ht as ue,In as de,It as fe,Jn as pe,Jt as me,Kn as he,Kt as ge,Ln as _e,Lt as ve,Mn as ye,Mt as be,Nn as xe,On as Se,Or as u,Ot as Ce,Qt as we,Rn as Te,Rt as Ee,Sr as De,St as Oe,Tn as ke,Tr as Ae,Tt as je,Un as d,Ut as Me,Vt as Ne,Wn as Pe,Wt as Fe,Xn as Ie,Xt as Le,Yn as Re,Yt as ze,Zt as Be,_n as Ve,_r as He,_t as Ue,an as We,ar as f,at as Ge,bn as Ke,br as p,bt as qe,cn as Je,cr as Ye,ct as Xe,dn as Ze,dr as m,dt as Qe,en as $e,er as et,et as tt,fn as nt,fr as h,ft as rt,gn as it,gr as at,gt as ot,hn as st,hr as ct,ht as lt,in as ut,ir as g,jt as dt,kt as ft,ln as pt,lr as _,lt as mt,mn as ht,mr as gt,mt as _t,n as vt,nn as yt,nt as bt,on as xt,or as v,ot as St,pn as Ct,pr as y,pt as wt,qn as Tt,qt as Et,rn as Dt,sn as Ot,sr as kt,st as At,t as jt,tn as Mt,tt as Nt,un as Pt,ur as b,ut as Ft,vn as x,vr as It,vt as Lt,wn as Rt,wr as zt,wt as Bt,xn as Vt,xr as S,xt as Ht,yn as C,yr as w,yt as Ut,zn as Wt,zt as Gt}from"./minerva-web-components-CYJfg4zL.js";import{$ as Kt,D as qt,E as Jt,Et as Yt,Ft as Xt,Ht as Zt,It as Qt,Jt as $t,K as en,L as tn,N as nn,Nt as rn,O as an,Ot as on,St as sn,T as cn,Ut as ln,Vt as un,Y as dn,a as fn,an as pn,b as mn,c as hn,dt as gn,gt as _n,h as vn,it as yn,j as bn,k as xn,n as Sn,nt as Cn,ot as wn,pt as Tn,qt as En,rn as Dn,s as On,t as kn,tt as An,ut as jn,v as Mn,x as Nn,y as Pn}from"./minerva-web-components-gmidRbuG.js";import{A as T,C as E,D,E as O,H as k,I as A,L as j,M,N,S as P,_ as Fn,a as In,b as Ln,c as Rn,d as zn,g as Bn,h as Vn,i as Hn,l as Un,n as Wn,o as Gn,p as Kn,r as qn,t as Jn,u as Yn,w as F,y as Xn,z as Zn}from"./minerva-web-components-BT-6l4L2.js";import{t as I}from"./minerva-web-components-DB7tn7hP.js";import{_ as Qn,c as $n,d as er,f as tr,g as nr,h as rr,l as ir,m as ar,p as or,s as sr,u as cr}from"./minerva-web-components-DMqCZG--.js";import{At as lr,Bt as ur,It as dr,Lt as fr,Mt as pr,Nt as mr,Rt as hr,jt as gr,zt as _r}from"./minerva-web-components-CV5ySKpa.js";var vr,yr,L;function br(){return(br=e((()=>{Ye(),l(),g(),d(),w(),y(),b(),x(),N(),O(),E(),Ln(),cn(),vr={info:ye,success:Vt,warning:xe,danger:et},yr=[`slideIn`,`fadeIn`,`bounce`,`zoom`],L=class e extends m{constructor(...e){super(...e),this.color=`info`,this.variant=`subtle`,this.size=`medium`,this.heading=``,this.hideIcon=!1,this.closable=!1,this.noAnimation=!1,this.animationName=`slideIn`,this.banner=!1,this.elevation=!1,this.square=!1,this.collapsible=!1,this.collapsed=!1,this.locale=new p(this),this.aria=new u(this),this.slots=new _(this)}static{this.tagName=`minerva-alert`}static{this.styles=[h,k`
:host{
display: block;
}
.icon svg,
.expandButton svg,
.closeButton svg{
display: block;
}
`,C(kt)]}get hasHeading(){return!!this.heading||this.slots.test(`heading`)}handleExpand(){let e=this.collapsed;this.emit(`minerva-expanded-change`,{expanded:e},{cancelable:!0})&&(this.collapsed=!e)}handleClose(){let e=this.adjacentTabbable(),t=this.parentElement;this.emit(`minerva-close`,{},{cancelable:!0})&&(this.isFocusInsideOrLost()&&this.moveFocusOut(e,t),this.hidden=!0)}isFocusInsideOrLost(){let e=this.ownerDocument,t=kn(e);return!t||t===e.body||!t.isConnected||tn(this,t)}adjacentTabbable(){let e=Jt(this.ownerDocument.body),t=e.map((e,t)=>tn(this,e)?t:-1).filter(e=>e>=0);if(!t.length)return null;let n=e=>!tn(this,e)&&Mn(e);return e.slice(t[t.length-1]+1).find(n)??e.slice(0,t[0]).filter(n).pop()??null}moveFocusOut(e,t){let n=typeof this.returnFocus==`function`?this.returnFocus():this.returnFocus;n?.isConnected&&On(n)||e?.isConnected&&On(e)||this.focusContainer(t)}focusContainer(e){let t=this.ownerDocument;if(e?.isConnected){for(let n=e;n&&n!==t.body;n=n.parentElement)if(n.hasAttribute(`tabindex`)&&On(n))return;e!==t.body&&e!==t.documentElement&&(e.setAttribute(`tabindex`,`-1`),e.addEventListener(`blur`,()=>{e.getAttribute(`tabindex`)===`-1`&&e.removeAttribute(`tabindex`)},{once:!0}),On(e,{preventScroll:!0}))}}updated(){v&&this.collapsible&&!this.hasHeading&&f(e.tagName,`collapsible needs a heading (the toggle lives in the title): set heading or fill the heading slot.`)}hookStates(){return{state:this.collapsible&&this.hasHeading?this.collapsed?`closed`:`open`:void 0,size:this.size,variant:this.variant,color:this.color}}render(){let e=this.locale.t,t=this.hasHeading,n=this.collapsible&&t,r=!this.collapsed,i=this.slots.test(`[default]`),a=!this.noAnimation,o=this.borderRadius,s=this.alertRole??(this.color===`danger`||this.color===`warning`?`alert`:`status`);return j`<div
part="root"
class=${F({alert:!0,[this.color]:!0,[this.variant]:!0,[this.size]:!0,withIcon:!this.hideIcon,withTitle:t,banner:this.banner,withAnimation:a,[`animation-${this.animationName}`]:a&&yr.includes(this.animationName),withElevation:this.elevation,rounded:!this.square,expanded:r,collapsible:n})}
style=${P({borderRadius:o==null||o===``?void 0:/^\d+(\.\d+)?$/.test(String(o))?`${o}px`:String(o)})}
role=${s}
aria-label=${this.aria.label??A}
>
${this.hideIcon?A:j`<span
part="icon"
class="icon"
role="img"
aria-label=${this.iconLabel??e(`alert.icon.${this.color}`)}
><slot name="icon">${vr[this.color]??vr.info}</slot></span
>`}
<div class="content">
${t?j`<div class="title" part="title">
<slot name="heading">${this.heading}</slot>
${n?j`<button
type="button"
part="trigger"
class="expandButton"
aria-label=${r?this.collapseLabel??e(`alert.collapse`):this.expandLabel??e(`alert.expand`)}
aria-expanded=${String(r)}
aria-controls=${r&&i?`message`:A}
@click=${this.handleExpand}
>
${r?Re:Wt}
</button>`:A}
</div>`:A}
${i&&(!n||r)?j`<div id="message" class="message" part="description">
<slot></slot>
</div>`:A}
</div>
${this.slots.test(`action`)?j`<div class="action" part="action">
<slot name="action"></slot>
</div>`:A}
${this.closable?j`<button
type="button"
part="close-button"
class="closeButton"
aria-label=${this.closeLabel??e(`alert.close`)}
@click=${this.handleClose}
>
<slot name="close-icon">${Ie}</slot>
</button>`:A}
</div>`}},I([M({reflect:!0})],L.prototype,`color`,void 0),I([M({reflect:!0})],L.prototype,`variant`,void 0),I([M({reflect:!0})],L.prototype,`size`,void 0),I([M()],L.prototype,`heading`,void 0),I([M({type:Boolean,attribute:`hide-icon`})],L.prototype,`hideIcon`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`closable`,void 0),I([M({type:Boolean,attribute:`no-animation`})],L.prototype,`noAnimation`,void 0),I([M({attribute:`animation-name`})],L.prototype,`animationName`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`banner`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`elevation`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`square`,void 0),I([M({attribute:`border-radius`})],L.prototype,`borderRadius`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`collapsible`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`collapsed`,void 0),I([M({attribute:`close-label`})],L.prototype,`closeLabel`,void 0),I([M({attribute:`expand-label`})],L.prototype,`expandLabel`,void 0),I([M({attribute:`collapse-label`})],L.prototype,`collapseLabel`,void 0),I([M({attribute:`icon-label`})],L.prototype,`iconLabel`,void 0),I([M({attribute:`alert-role`})],L.prototype,`alertRole`,void 0),I([M({attribute:!1})],L.prototype,`returnFocus`,void 0)})))()}var xr,Sr,Cr,wr,R;function Tr(){return(Tr=e((()=>{g(),d(),c(),w(),y(),b(),x(),st(),Ct(),nr(),tr(),cr(),sr(),N(),O(),E(),cn(),xr=[`expanded`,`compact`,`floating`],Sr=`(max-width: 768px)`,Cr=()=>typeof window<`u`&&typeof window.matchMedia==`function`?window.matchMedia(Sr):null,wr={iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,control:!0},R=class e extends m{constructor(...e){super(...e),this.brand=``,this.sidebarMode=`expanded`,this.noSkipLink=!1,this.collapsed=!1,this.mobile=!1,this.drawerOpen=!1,this.hovered=!1,this.keyboardFocus=!1,this.locale=new p(this),this.slots=new _(this),this.modal=new $n(this),this.focusScope=new or(this,()=>({trapped:!0,loop:!0,restoreFocus:!1})),this.layer=new Qn(this,()=>({disableOutsidePointerEvents:!0,branches:()=>[this.headerToggle],onFocusOutside:e=>e.preventDefault(),onDismiss:()=>this.requestDrawer(!1)})),this.query=null,this.drawerActive=!1,this.handleMediaChange=()=>this.syncMobile()}static{this.tagName=`minerva-app-shell`}static{this.styles=[h,er,k`
:host{
display: block;
}
`,C(nt),C(ht)]}openNavigation(){this.mobile&&(this.drawerOpen=!0)}closeNavigation(){this.drawerOpen=!1}expandNavigation(){this.sidebarMode=`expanded`}focusMain(){this.main?.focus()}connectedCallback(){super.connectedCallback(),this.query=Cr(),this.query?.addEventListener(`change`,this.handleMediaChange),this.syncMobile()}disconnectedCallback(){super.disconnectedCallback(),this.query?.removeEventListener(`change`,this.handleMediaChange),this.query=null,this.deactivateDrawer()}syncMobile(){let e=!!this.query?.matches;e!==this.mobile&&(this.mobile=e,this.hovered=!1,this.keyboardFocus=!1,this.drawerOpen=!1)}get mode(){return xr.includes(this.sidebarMode)?this.sidebarMode:`expanded`}setMode(e){e!==this.mode&&this.emit(`minerva-sidebar-mode-change`,{mode:e},{cancelable:!0})&&(this.sidebarMode=e)}requestDrawer(e){e!==this.drawerOpen&&this.emit(`minerva-open-change`,{open:e},{cancelable:!0})&&(this.drawerOpen=e)}willUpdate(e){e.has(`navigationKey`)&&e.get(`navigationKey`)!==void 0&&(this.drawerOpen=!1),this.mobile||(this.drawerOpen=!1),this.collapsed=!this.mobile&&this.mode!==`expanded`&&(this.mode!==`floating`||!this.hovered&&!this.keyboardFocus)}updated(t){let n=this.mobile&&this.drawerOpen;n&&!this.drawerActive&&this.drawer?(this.drawerActive=!0,De(this.overlay),De(this.drawer),this.modal.activate(this),this.layer.activate(this.drawer),this.focusScope.activate(this.drawer)):!n&&this.drawerActive&&(this.deactivateDrawer(),this.headerToggle?.focus()),v&&t.has(`sidebarMode`)&&!xr.includes(this.sidebarMode)&&f(e.tagName,`unknown sidebar-mode="${this.sidebarMode}" (expected ${xr.join(`, `)}); using "expanded".`),v&&!this.slots.test(`navigation`)&&f(e.tagName,`put the navigation in the "navigation" slot (e.g. <nav slot="navigation">).`)}hookStates(){return{state:this.mobile&&this.drawerOpen?`open`:`closed`}}deactivateDrawer(){this.drawerActive&&(this.drawerActive=!1,this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate(),S(this.drawer),S(this.overlay))}label(e,t){return e??this.locale.t(`appShell.${t}`)}handleSkip(e){e.preventDefault(),this.focusMain()}handleSidebarFocusIn(e){let t=e.composedPath()[0],n;try{n=!!t?.matches?.(`:focus-visible`)}catch{n=!1}n&&(this.keyboardFocus=!0)}handleSidebarFocusOut(e){let t=e.relatedTarget;(!t||!this.sidebar||!tn(this.sidebar,t))&&(this.keyboardFocus=!1)}renderHeaderToggle(){return this.mobile?j`<button
type="button"
class=${F(wr)}
aria-label=${this.label(this.openNavigationLabel,`openNavigation`)}
aria-haspopup="dialog"
aria-expanded=${String(this.drawerOpen)}
aria-controls=${this.drawerOpen?`drawer`:A}
@click=${()=>this.requestDrawer(!this.drawerOpen)}
>
${Se}
</button>`:this.renderCollapseControl()}renderCollapseControl(){let e=this.mode!==`expanded`;return j`<button
type="button"
class=${F(wr)}
aria-label=${e?this.label(this.expandLabel,`expand`):this.label(this.collapseLabel,`collapse`)}
aria-controls="sidebar"
aria-expanded=${String(!this.collapsed)}
@click=${()=>this.setMode(e?`expanded`:`compact`)}
>
${e?Se:te}
</button>`}renderSidebar(){let e=this.mode===`floating`,t=this.label(this.navigationLabel,`navigation`);return j`<aside
id="sidebar"
class="sidebar"
part="sidebar"
aria-label=${t}
@mouseenter=${()=>this.hovered=!0}
@mouseleave=${()=>this.hovered=!1}
@focusin=${this.handleSidebarFocusIn}
@focusout=${this.handleSidebarFocusOut}
@keydown=${e=>{e.key===`Tab`&&(this.keyboardFocus=!0)}}
@pointerdown=${()=>this.keyboardFocus=!1}
>
<div class="brand">
${this.slots.test(`brand-icon`)?j`<span class="brandIcon" aria-hidden="true"
><slot name="brand-icon"></slot
></span>`:A}
<span class="brandLabel"><slot name="brand">${this.brand}</slot></span>
</div>
<div class="navigation"><slot name="navigation"></slot></div>
<div class="sidebarActions">
${this.renderCollapseControl()}
<button
type="button"
class=${F(wr)}
aria-pressed=${String(e)}
aria-label=${e?this.label(this.disableFloatingLabel,`disableFloating`):this.label(this.enableFloatingLabel,`enableFloating`)}
@click=${()=>this.setMode(e?`compact`:`floating`)}
>
${e?Rt:i}
</button>
</div>
</aside>`}renderDrawer(){let e=this.label(this.navigationLabel,`navigation`);return j`<div
class="overlay"
part="overlay"
popover="manual"
aria-hidden="true"
></div>
<div
id="drawer"
class="drawer"
part="content"
popover="manual"
role="dialog"
aria-modal="true"
aria-labelledby="drawer-title"
tabindex="-1"
>
<h2 id="drawer-title" class="drawerHeader">${e}</h2>
<div class="drawerBody"><slot name="navigation"></slot></div>
<button
type="button"
class="drawerClose"
part="close-button"
aria-label=${this.label(this.closeNavigationLabel,`closeNavigation`)}
@click=${()=>this.requestDrawer(!1)}
>
${Ie}
</button>
</div>`}render(){let e=this.skipLink||this.locale.t(`appShell.skipToContent`);return j`<div
class="shell"
part="root"
data-sidebar-mode=${this.mode}
data-sidebar-expanded=${this.collapsed?A:`true`}
>
${this.noSkipLink?A:j`<a
class="skipLink"
part="skip-link"
href="#main"
@click=${this.handleSkip}
>${e}</a
>`}
${this.mobile?A:this.renderSidebar()}
<div class="workspace">
<header class="header" part="header">
${this.renderHeaderToggle()}
<div class="headerActions">
<slot name="header-actions"></slot>
</div>
</header>
<slot name="page-navigation"></slot>
<main id="main" class="content" part="main" tabindex="-1">
<slot></slot>
</main>
</div>
</div>
${this.mobile&&this.drawerOpen?this.renderDrawer():A}`}},I([M()],R.prototype,`brand`,void 0),I([M({attribute:`sidebar-mode`,reflect:!0})],R.prototype,`sidebarMode`,void 0),I([M({attribute:`navigation-label`})],R.prototype,`navigationLabel`,void 0),I([M({attribute:`navigation-key`})],R.prototype,`navigationKey`,void 0),I([M({attribute:`skip-link`})],R.prototype,`skipLink`,void 0),I([M({type:Boolean,attribute:`no-skip-link`})],R.prototype,`noSkipLink`,void 0),I([M({attribute:`expand-label`})],R.prototype,`expandLabel`,void 0),I([M({attribute:`collapse-label`})],R.prototype,`collapseLabel`,void 0),I([M({attribute:`enable-floating-label`})],R.prototype,`enableFloatingLabel`,void 0),I([M({attribute:`disable-floating-label`})],R.prototype,`disableFloatingLabel`,void 0),I([M({attribute:`open-navigation-label`})],R.prototype,`openNavigationLabel`,void 0),I([M({attribute:`close-navigation-label`})],R.prototype,`closeNavigationLabel`,void 0),I([M({type:Boolean,reflect:!0})],R.prototype,`collapsed`,void 0),I([M({type:Boolean,reflect:!0})],R.prototype,`mobile`,void 0),I([T()],R.prototype,`drawerOpen`,void 0),I([T()],R.prototype,`hovered`,void 0),I([T()],R.prototype,`keyboardFocus`,void 0),I([D(`.header button`)],R.prototype,`headerToggle`,void 0),I([D(`.drawer`)],R.prototype,`drawer`,void 0),I([D(`.overlay`)],R.prototype,`overlay`,void 0),I([D(`main`)],R.prototype,`main`,void 0),I([D(`aside`)],R.prototype,`sidebar`,void 0)})))()}var Er,z;function Dr(){return(Dr=e((()=>{l(),g(),d(),w(),gt(),y(),b(),x(),cr(),Je(),xt(),Pt(),N(),O(),E(),Ln(),cn(),Fn(),Er={top:`top-start`,bottom:`bottom-start`,left:`left-start`,right:`right-start`},z=class e extends pt{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.options=[],this.open=!1,this.label=``,this.placeholder=``,this.mode=`basic`,this.size=`medium`,this.variant=`outline`,this.invalid=!1,this.readOnly=!1,this.loading=!1,this.placement=`bottom`,this.offset={x:0,y:4},this.noAnimation=!1,this.autoHighlight=!1,this.noFillOnSelect=!1,this.groupMode=`first`,this.focusedIndex=-1,this.hoveredIndex=-1,this.locale=new p(this),this.aria=new u(this,()=>this.labels),this.slots=new _(this),this.floating=new ir(this,()=>{let e=this.placement===`top`||this.placement===`bottom`,t=this.offset??{x:0,y:4};return{anchor:()=>this.container,floating:()=>this.popup,placement:Er[this.placement]??`bottom-start`,offset:{mainAxis:e?t.y:t.x,crossAxis:e?t.x:t.y},matchAnchorWidth:`min`,branches:()=>[this.container],onEscapeKeyDown:e=>{(this.composing||e.isComposing)&&e.preventDefault()},onDismiss:()=>this.close(),returnFocusOnEscape:()=>this.input,onPosition:()=>this.syncHookStates()}}),this.composing=!1,this.dirty=!1}static{this.tagName=`minerva-autocomplete`}static{this.shadowRootOptions={...pt.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,er,C(Ot),C(We),k`
:host{
display: block;
width: 100%;
}

.optionItem.disabled:not(.active):not(.highlight){
background-color: transparent;
}
.popup .dropdown .optionList .loading svg{
font-size: 1.5em;
animation: minerva-autocomplete-spin 1s linear infinite;
}
.empty svg{
display: block;
margin: 0 auto var(--space-2);
font-size: 40px;
color: var(--text-muted-color);
}
@keyframes minerva-autocomplete-spin{
to{
transform: rotate(360deg);
}
}
@media (prefers-reduced-motion: reduce){
.popup .dropdown .optionList .loading svg{
animation: none;
}
}
`]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get blocked(){return this.isDisabled||this.readOnly}get shown(){return this.open&&!this.blocked}getFormValue(){return this.value}getValidity(){return this.required&&this.value===``?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.focusedIndex=-1}restoreFormState(e){typeof e==`string`&&(this.value=e)}get processedOptions(){let e=this.value,t=e.toLowerCase(),n=(this.options??[]).filter(n=>this.filterOption?this.filterOption(e,n):n.label.toLowerCase().includes(t));return this.sortOption?[...n].sort(this.sortOption):n}groupOptions(e){let t=this.groupBy;if(!t)return null;if(this.groupMode===`adjacent`){let n=[];for(let r of e){let e=t(r),i=n[n.length-1];i&&i[0]===e?i[1].push(r):n.push([e,[r]])}return n}let n=new Map;for(let r of e){let e=t(r),i=n.get(e);i?i.push(r):n.set(e,[r])}return Array.from(n.entries())}get navigableOptions(){let e=this.processedOptions,t=this.groupOptions(e);return t?t.flatMap(([,e])=>e):e}activeIndex(e){return this.focusedIndex>=0?this.focusedIndex:this.autoHighlight&&this.shown?e.findIndex(e=>!e.disabled):-1}requestOpen(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}openDropdown(){this.blocked||this.requestOpen(!0)}close(){this.requestOpen(!1),this.focusedIndex=-1}setText(e,t){e!==this.value&&(this.value=e,this.emit(`minerva-input`,{value:e}),t&&this.emit(`minerva-change`,{value:e}))}moveFocus(e){let t=this.navigableOptions,n=t.length;if(n===0)return;let r=this.activeIndex(t),i=r>=0?r:e===1?-1:n;for(let r=0;r<n;r+=1)if(i=(i+e+n)%n,!t[i].disabled){this.focusedIndex=i;return}}selectOption(e){e.disabled||(this.noFillOnSelect||this.setText(e.label,!0),this.close(),this.emit(`minerva-select`,{value:e.value,option:e}))}handleKeyDown(e){if(!(this.blocked||this.composing||e.isComposing||e.keyCode===229))switch(e.key){case`ArrowDown`:case`ArrowUp`:e.preventDefault(),this.open||this.openDropdown(),this.moveFocus(e.key===`ArrowDown`?1:-1);break;case`Enter`:{let t=this.navigableOptions,n=this.shown?t[this.activeIndex(t)]:void 0,r=this.value.trim();n?(e.preventDefault(),this.selectOption(n)):r&&(e.preventDefault(),this.emit(`minerva-submit`,{value:r}),this.close());break}case`Escape`:!this.shown&&!this.floating.isOpen&&this.value!==``&&(e.preventDefault(),this.setText(``,!0),this.focusedIndex=-1)}}handleInput(){this.setText(this.input.value,!1),this.focusedIndex=-1,this.openDropdown()}handleChange(){this.value=this.input.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}handleBlur(e){let t=e.relatedTarget;t&&(this.popup?.contains(t)||this.container?.contains(t))||this.close()}handleOptionClick(e){e.disabled||this.composing||(this.selectOption(e),this.input?.focus())}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),this.open&&this.blocked&&(this.open=!1,this.focusedIndex=-1)}hookStates(){let e=this.shown&&this.floating.isOpen?this.floating.position.placement:void 0,{side:t,align:n}=e?Sn(e):{side:void 0,align:void 0};return{state:this.shown?`open`:`closed`,disabled:this.isDisabled,readonly:this.readOnly,loading:this.loading,side:t,align:n,placement:e}}updated(t){if(super.updated(t),this.floating.sync(this.shown),t.has(`focusedIndex`)&&this.focusedIndex>=0&&this.shadowRoot?.getElementById(`option-${this.focusedIndex}`)?.scrollIntoView?.({block:`nearest`}),v&&t.has(`options`)){let t=new Set;for(let n of this.options??[]){if(t.has(n.value)){f(e.tagName,`several options have the value "${n.value}"; option values must be unique.`);break}t.add(n.value)}}}renderOptionContent(e){return this.mode===`custom`&&this.renderOption?this.renderOption(e):j`<div class="basicOption">
${e.icon?j`<span class="icon">${e.icon}</span>`:A}
<div class="content">
<div class="label">${e.label}</div>
${e.description?j`<div class="description">${e.description}</div>`:A}
</div>
</div>`}renderOptionItem(e,t,n){let r=n===t,i=this.hoveredIndex===t||r,a=!!e.disabled;return j`<div
part=${ct(`item`,{highlighted:i,disabled:a})}
class=${F({optionItem:!0,disabled:a,highlight:!!e.highlight,active:i})}
style=${e.style?P(e.style):A}
role="option"
tabindex="-1"
id=${`option-${t}`}
aria-selected=${String(r)}
aria-disabled=${e.disabled?`true`:A}
@mousedown=${e=>e.preventDefault()}
@click=${()=>this.handleOptionClick(e)}
@keydown=${t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),t.stopPropagation(),this.handleOptionClick(e))}}
@mouseenter=${()=>this.hoveredIndex=t}
@mouseleave=${()=>this.hoveredIndex=-1}
>
${this.renderOptionContent(e)}
</div>`}renderList(){let{t:e}=this.locale;if(this.loading)return j`<div role="presentation" class="loading" part="loading">
<span role="progressbar" aria-label=${e(`common.loading`)}
>${re}</span
>
</div>`;let t=this.processedOptions;if(t.length===0)return j`<div role="presentation" class="empty" part="empty">
${this.renderEmpty?.()||j`${ke}<span>${e(`empty.description`)}</span>`}
</div>`;let n=this.groupOptions(t),r=n?n.flatMap(([,e])=>e):t,i=this.activeIndex(r);return n?n.map(([e,t])=>{let n=t.map(e=>this.renderOptionItem(e,r.indexOf(e),i));return e===``?n:j`<div class="optionGroup" role="group" aria-label=${e}>
<div class="groupLabel" part="group-label" aria-hidden="true">
${e}
</div>
${n}
</div>`}):t.map((e,t)=>this.renderOptionItem(e,t,i))}render(){let e=this.shown,t=this.isDisabled,n=e?this.navigableOptions:[],r=e?this.activeIndex(n):-1,i=e&&r>=0&&r<n.length?`option-${r}`:void 0,a=this.label?void 0:this.aria.label;return j`<div
part="root"
class="autoComplete"
@compositionstart=${()=>this.composing=!0}
@compositionend=${()=>this.composing=!1}
>
${this.label?j`<label for="input" class="label" part="label"
>${this.label}</label
>`:A}
<div
part="field"
class=${F({root:!0,[this.variant]:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
data-component="input"
>
${this.slots.test(`prefix`)?j`<span class="addon start"><slot name="prefix"></slot></span>`:A}
<input
id="input"
part="input"
class="field"
type="text"
role="combobox"
aria-autocomplete="list"
aria-expanded=${String(e)}
aria-controls=${e?`listbox`:A}
aria-activedescendant=${i??A}
aria-label=${a??A}
aria-description=${this.aria.description??A}
aria-required=${this.required?`true`:A}
aria-invalid=${this.invalid||this.aria.attr(`aria-invalid`)===`true`?`true`:A}
data-minerva-escape-consumer=${!e&&this.value!==``?``:A}
autocomplete="off"
.value=${Xn(this.value)}
placeholder=${this.placeholder||A}
?disabled=${t}
?readonly=${this.readOnly}
@input=${this.handleInput}
@change=${this.handleChange}
@focus=${()=>this.openDropdown()}
@click=${()=>{this.open||this.openDropdown()}}
@blur=${this.handleBlur}
@keydown=${this.handleKeyDown}
/>
${this.slots.test(`suffix`)?j`<span class="addon end"><slot name="suffix"></slot></span>`:A}
</div>
${e?j`<div class="popup" part="content" popover="manual">
<div
class=${F({dropdown:!0,animated:!this.noAnimation})}
>
<div
class="optionList"
part="list"
role="listbox"
id="listbox"
aria-label=${this.label||a||A}
aria-busy=${this.loading?`true`:A}
>
${this.renderList()}
</div>
</div>
</div>`:A}
</div>`}},I([M({attribute:!1})],z.prototype,`value`,void 0),I([M({attribute:`value`})],z.prototype,`defaultValue`,void 0),I([M({attribute:!1})],z.prototype,`options`,void 0),I([M({type:Boolean,reflect:!0})],z.prototype,`open`,void 0),I([M()],z.prototype,`label`,void 0),I([M()],z.prototype,`placeholder`,void 0),I([M({reflect:!0})],z.prototype,`mode`,void 0),I([M({reflect:!0})],z.prototype,`size`,void 0),I([M({reflect:!0})],z.prototype,`variant`,void 0),I([M({type:Boolean,reflect:!0})],z.prototype,`invalid`,void 0),I([M({type:Boolean,reflect:!0,attribute:`readonly`})],z.prototype,`readOnly`,void 0),I([M({type:Boolean,reflect:!0})],z.prototype,`loading`,void 0),I([M({reflect:!0})],z.prototype,`placement`,void 0),I([M({attribute:!1})],z.prototype,`offset`,void 0),I([M({type:Boolean,attribute:`no-animation`})],z.prototype,`noAnimation`,void 0),I([M({type:Boolean,attribute:`auto-highlight`})],z.prototype,`autoHighlight`,void 0),I([M({type:Boolean,attribute:`no-fill-on-select`})],z.prototype,`noFillOnSelect`,void 0),I([M({attribute:`group-mode`})],z.prototype,`groupMode`,void 0),I([M({attribute:!1})],z.prototype,`filterOption`,void 0),I([M({attribute:!1})],z.prototype,`sortOption`,void 0),I([M({attribute:!1})],z.prototype,`groupBy`,void 0),I([M({attribute:!1})],z.prototype,`renderOption`,void 0),I([M({attribute:!1})],z.prototype,`renderEmpty`,void 0),I([T()],z.prototype,`focusedIndex`,void 0),I([T()],z.prototype,`hoveredIndex`,void 0),I([D(`input`)],z.prototype,`input`,void 0),I([D(`.autoComplete`)],z.prototype,`container`,void 0),I([D(`.popup`)],z.prototype,`popup`,void 0)})))()}function Or(e){let t=e?.trim()??``;return t?Ar.test(t[0])?t[0]:t.split(/\s+/).slice(0,2).map(e=>e[0].toUpperCase()).join(``):``}var kr,Ar,jr,Mr,Nr;function Pr(){return(Pr=e((()=>{l(),g(),w(),y(),b(),x(),ut(),yt(),N(),O(),E(),Ln(),kr=[`xsmall`,`small`,`medium`,`large`,`xlarge`,`xxlarge`],Ar=/[㐀-鿿豈-﫿]/,jr={fromAttribute:e=>e&&/^\d+(\.\d+)?$/.test(e)?Number(e):e??`medium`,toAttribute:e=>String(e)},Mr=class e extends m{constructor(...e){super(...e),this.name=``,this.shape=`circle`,this.size=`medium`,this.stacked=!1,this.locale=new p(this),this.aria=new u(this),this.slots=new _(this)}static{this.tagName=`minerva-avatar`}static{this.styles=[h,k`
:host{
display: inline-block;
flex-shrink: 0;
vertical-align: middle;
line-height: 0;
}
.avatarText{
line-height: 1;
}
`,C(Dt)]}hookStates(){return{size:typeof this.size==`number`?void 0:this.size,shape:this.shape}}updated(t){v&&t.has(`size`)&&typeof this.size!=`number`&&!kr.includes(this.size)&&f(e.tagName,`unknown size "${this.size}": use a preset (${kr.join(`, `)}) or a number of pixels.`)}render(){let e=!!this.src&&this.failedSrc!==this.src,t=this.aria.label??(this.name||this.locale.t(`avatar.default`)),n=typeof this.size==`number`,r=F({avatar:!0,[this.shape]:!0,[String(this.size)]:!n,stacked:this.stacked}),i=P(n?{"--avatar-size":`${this.size}px`,width:`${this.size}px`,height:`${this.size}px`}:{});if(e)return j`<span part="root" class=${r} style=${i}
><img
part="image"
class="avatarImg"
alt=${this.alt??t}
src=${this.src}
draggable="false"
@error=${()=>this.failedSrc=this.src}
/></span>`;let a=Or(this.name),o=this.slots.test(`fallback`)?j`<slot name="fallback"></slot>`:a||j`<slot></slot>`;return j`<span
part="root"
role="img"
aria-label=${t}
class=${r}
style=${i}
><span part="fallback" class="avatarText" aria-hidden="true"
>${o}</span
></span
>`}},I([M()],Mr.prototype,`src`,void 0),I([M()],Mr.prototype,`name`,void 0),I([M()],Mr.prototype,`alt`,void 0),I([M({reflect:!0})],Mr.prototype,`shape`,void 0),I([M({reflect:!0,converter:jr})],Mr.prototype,`size`,void 0),I([M({type:Boolean,reflect:!0})],Mr.prototype,`stacked`,void 0),I([T()],Mr.prototype,`failedSrc`,void 0),Nr=class e extends m{constructor(...e){super(...e),this.locale=new p(this),this.aria=new u(this),this.slots=new _(this)}static{this.tagName=`minerva-avatar-group`}static{this.shadowRootOptions={...m.shadowRootOptions,slotAssignment:`manual`}}static{this.styles=[h,k`
:host{
display: flex;
}
.avatarGroup{
flex: 1 1 auto;
min-width: 0;
}
`,C(Mt)]}visibleAvatars(){let e=Array.from(this.children);return this.max===void 0||this.max===null?e:e.slice(0,Math.max(0,this.max))}updated(t){let n=this.visibleAvatars();Array.from(this.renderRoot.querySelectorAll(`slot[data-item]`)).forEach((e,t)=>{let r=n[t];r&&typeof e.assign==`function`&&e.assign(r)}),v&&t.has(`max`)&&this.max!==void 0&&this.max!==null&&!(Number.isInteger(this.max)&&this.max>=0)&&f(e.tagName,`max must be a non-negative integer (got ${this.max}).`)}render(){this.slots;let e=this.children.length,t=this.visibleAvatars(),n=(Number(this.count)||0)+e-t.length,r=this.aria.label??(n>0?this.locale.t(`avatar.groupWithMore`,{count:n}):this.locale.t(`avatar.group`));return j`<div
part="root"
role="group"
class="avatarGroup"
aria-label=${r}
>
${t.map(()=>j`<div part="item" class="avatarGroupItem">
<slot data-item></slot>
</div>`)}
${n>0?j`<div part="count" class="count" aria-hidden="true">
+${n}
</div>`:A}
</div>`}},I([M({type:Number})],Nr.prototype,`count`,void 0),I([M({type:Number})],Nr.prototype,`max`,void 0)})))()}var Fr;function Ir(){return(Ir=e((()=>{l(),g(),w(),y(),b(),x(),$e(),N(),O(),E(),Ln(),Fr=class e extends m{constructor(...e){super(...e),this.color=`primary`,this.variant=`solid`,this.size=`medium`,this.position=`top-right`,this.dot=!1,this.badgeRole=`status`,this.locale=new p(this),this.aria=new u(this),this.slots=new _(this)}static{this.tagName=`minerva-badge`}static{this.styles=[h,k`
:host{
display: inline-flex;
vertical-align: middle;
}
`,C(r)]}hasElementChildren(){return Array.from(this.children).some(e=>!e.hasAttribute(`slot`)||e.getAttribute(`slot`)===``)}hookStates(){return{size:this.size,variant:this.variant,color:this.color}}updated(){v&&this.dot&&!this.aria.label&&![`presentation`,`none`].includes(this.badgeRole)&&f(e.tagName,`a dot badge has no text: set aria-label (e.g. "New messages") or badge-role="presentation".`)}render(){let e=this.slots.test(`[default]`),t=e&&!this.hasElementChildren(),n=this.content!==void 0&&this.content!==null||this.slots.test(`content`),r=!e||t&&!n,i=A;this.dot||(n?i=j`<slot name="content">${this.content}</slot>`:t?i=j`<slot></slot>`:e&&(i=this.locale.t(`badge.default`)));let a=j`<span
part=${r?`root`:`badge`}
class=${F({badge:!0,[this.color]:!0,[this.variant]:!0,[this.size]:!0,standalone:r,[this.position]:!r,dot:this.dot})}
role=${this.badgeRole||A}
aria-label=${this.aria.label??A}
style=${P({borderRadius:this.borderRadius,borderWidth:this.borderWidth})}
>${this.slots.test(`icon`)?j`<span class="icon" part="icon"
><slot name="icon"></slot
></span>`:A}${i}</span
>`;return r?a:j`<div part="root" class="badgeWrapper">
<div class="content"><slot></slot></div>
${a}
</div>`}},I([M({reflect:!0})],Fr.prototype,`color`,void 0),I([M({reflect:!0})],Fr.prototype,`variant`,void 0),I([M({reflect:!0})],Fr.prototype,`size`,void 0),I([M()],Fr.prototype,`content`,void 0),I([M({reflect:!0})],Fr.prototype,`position`,void 0),I([M({type:Boolean,reflect:!0})],Fr.prototype,`dot`,void 0),I([M({attribute:`border-radius`})],Fr.prototype,`borderRadius`,void 0),I([M({attribute:`border-width`})],Fr.prototype,`borderWidth`,void 0),I([M({attribute:`badge-role`})],Fr.prototype,`badgeRole`,void 0)})))()}function Lr(e){return e.replace(/[;{}<>]/g,``)}var Rr;function zr(){return(zr=e((()=>{on(),Rr={fromAttribute:e=>{if(e===null)return;let t=e.trim();return/^-?\d+(\.\d+)?$/.test(t)?Number(t):t},toAttribute:e=>e===void 0?null:String(e)}})))()}var Br,Vr,Hr,B,V;function Ur(){return(Ur=e((()=>{g(),y(),zr(),N(),O(),Br={bg:`var(--surface-color)`,"bg.subtle":`var(--surface-subtle-color)`,"bg.muted":`var(--surface-muted-color)`,"bg.emphasis":`var(--surface-muted-color)`,"bg.canvas":`var(--canvas-color)`,"bg.elevated":`var(--surface-elevated-color)`},Vr=[`none`,`sm`,`md`,`lg`,`xl`,`2xl`,`full`],Hr=[`sm`,`md`,`lg`,`xl`],B={converter:Rr},V=class e extends m{static{this.tagName=`minerva-box`}static{this.styles=[h,k`
:host{
display: block;
}
`]}declarations(){let e=[],t=(t,...n)=>{if(t!==void 0&&t!==``)for(let r of n)e.push([r,En(t)])},n=(t,n)=>{t!==void 0&&t!==``&&e.push([n,_n(t)])};return t(this.p,`padding`),t(this.px,`padding-left`,`padding-right`),t(this.py,`padding-top`,`padding-bottom`),t(this.pt,`padding-top`),t(this.pr,`padding-right`),t(this.pb,`padding-bottom`),t(this.pl,`padding-left`),t(this.m,`margin`),t(this.mx,`margin-left`,`margin-right`),t(this.my,`margin-top`,`margin-bottom`),t(this.mt,`margin-top`),t(this.mr,`margin-right`),t(this.mb,`margin-bottom`),t(this.ml,`margin-left`),n(this.w,`width`),n(this.h,`height`),n(this.minW,`min-width`),n(this.minH,`min-height`),n(this.maxW,`max-width`),n(this.maxH,`max-height`),this.bg&&e.push([`background`,Br[this.bg]??this.bg]),this.rounded&&e.push([`border-radius`,Vr.includes(this.rounded)?`var(--radius-${this.rounded})`:this.rounded]),this.boxShadow&&e.push([`box-shadow`,Hr.includes(this.boxShadow)?`var(--shadow-${this.boxShadow})`:this.boxShadow]),this.border&&e.push([`border`,this.border]),e}updated(){v&&this.bg?.startsWith(`bg.`)&&!(this.bg in Br)&&f(e.tagName,`unknown surface alias bg="${this.bg}" (expected one of ${Object.keys(Br).join(`, `)}).`)}render(){let e=this.declarations().map(([e,t])=>`${e}:${Lr(t)};`).join(``);return j`<style>
:host{${e}}
</style>
<slot></slot>`}},I([M(B)],V.prototype,`p`,void 0),I([M(B)],V.prototype,`px`,void 0),I([M(B)],V.prototype,`py`,void 0),I([M(B)],V.prototype,`pt`,void 0),I([M(B)],V.prototype,`pr`,void 0),I([M(B)],V.prototype,`pb`,void 0),I([M(B)],V.prototype,`pl`,void 0),I([M(B)],V.prototype,`m`,void 0),I([M(B)],V.prototype,`mx`,void 0),I([M(B)],V.prototype,`my`,void 0),I([M(B)],V.prototype,`mt`,void 0),I([M(B)],V.prototype,`mr`,void 0),I([M(B)],V.prototype,`mb`,void 0),I([M(B)],V.prototype,`ml`,void 0),I([M(B)],V.prototype,`w`,void 0),I([M(B)],V.prototype,`h`,void 0),I([M({converter:Rr,attribute:`min-w`})],V.prototype,`minW`,void 0),I([M({converter:Rr,attribute:`min-h`})],V.prototype,`minH`,void 0),I([M({converter:Rr,attribute:`max-w`})],V.prototype,`maxW`,void 0),I([M({converter:Rr,attribute:`max-h`})],V.prototype,`maxH`,void 0),I([M()],V.prototype,`bg`,void 0),I([M()],V.prototype,`rounded`,void 0),I([M({attribute:`box-shadow`})],V.prototype,`boxShadow`,void 0),I([M()],V.prototype,`border`,void 0)})))()}var Wr,H;function Gr(){return(Gr=e((()=>{l(),g(),at(),y(),b(),x(),we(),N(),O(),E(),Ln(),Wr=e=>`borderRadius${e.charAt(0).toUpperCase()}${e.slice(1)}`,H=class e extends m{constructor(...e){super(...e),this.color=`primary`,this.variant=`solid`,this.size=`medium`,this.disabled=!1,this.loading=!1,this.fullWidth=!1,this.active=!1,this.type=`button`,this.internals=He(this),this.aria=new u(this),this.slots=new _(this),this.blockInactiveClicks=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-button`}static{this.formAssociated=!0}static{this.styles=[h,k`
:host{
display: inline-flex;
max-width: 100%;
vertical-align: middle;
}
:host([full-width]){
display: flex;
width: 100%;
}
`,C(Be)]}get form(){return this.internals?.form??null}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}handleClick(e){if(this.loading||this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockInactiveClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockInactiveClicks,!0)}hookStates(){return{state:this.active?`active`:`inactive`,disabled:this.disabled,loading:this.loading,size:this.size,variant:this.variant,color:this.color,shape:this.shape}}updated(){v&&this.shape===`circle`&&!this.aria.label&&(this.textContent?.trim()||f(e.tagName,`shape="circle" buttons usually only contain an icon: set aria-label to give them an accessible name.`))}render(){let e=this.borderRadius,t=typeof e==`number`||typeof e==`string`&&/^\d+(\.\d+)?$/.test(e),n=this.loading&&this.slots.test(`loading`),r=this.loading&&!n,i=j`<span
class="loadingSpinner"
part="spinner"
aria-hidden="true"
></span>`;return j`<button
part="root"
type="button"
class=${F({customButton:!0,[this.color]:!0,[`variant-${this.variant}`]:!0,[this.size]:!0,[this.shape??``]:!!this.shape,[Wr(String(e??``))]:!!e&&!t,fullWidth:this.fullWidth,active:this.active,loading:this.loading})}
style=${P(t?{borderRadius:`${Number(e)}px`}:{})}
?disabled=${this.disabled}
aria-label=${this.aria.label??A}
aria-description=${this.aria.description??A}
aria-pressed=${this.aria.attr(`aria-pressed`)??A}
aria-expanded=${this.aria.attr(`aria-expanded`)??A}
aria-haspopup=${this.aria.attr(`aria-haspopup`)??A}
aria-busy=${this.loading?`true`:A}
aria-disabled=${this.loading?`true`:A}
@click=${this.handleClick}
>
${n?j`${i}<span class="label" part="label"
><slot name="loading"></slot
></span>`:j`${this.loading?i:A}
${this.slots.test(`start`)?j`<span
class=${F({icon:!0,hidden:r})}
part="start-icon"
><slot name="start"></slot
></span>`:A}
<span class=${F({label:!0,hidden:r})} part="label"
><slot></slot
></span>
${this.slots.test(`end`)?j`<span
class=${F({icon:!0,hidden:r})}
part="end-icon"
><slot name="end"></slot
></span>`:A}`}
</button>`}},I([M({reflect:!0})],H.prototype,`color`,void 0),I([M({reflect:!0})],H.prototype,`variant`,void 0),I([M({reflect:!0})],H.prototype,`size`,void 0),I([M({reflect:!0})],H.prototype,`shape`,void 0),I([M({attribute:`border-radius`})],H.prototype,`borderRadius`,void 0),I([M({type:Boolean,reflect:!0})],H.prototype,`disabled`,void 0),I([M({type:Boolean,reflect:!0})],H.prototype,`loading`,void 0),I([M({type:Boolean,reflect:!0,attribute:`full-width`})],H.prototype,`fullWidth`,void 0),I([M({type:Boolean,reflect:!0})],H.prototype,`active`,void 0),I([M({reflect:!0})],H.prototype,`type`,void 0),I([D(`button`)],H.prototype,`button`,void 0)})))()}var Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai;function oi(){return(oi=e((()=>{l(),g(),c(),at(),y(),x(),Le(),Et(),N(),O(),E(),on(),Kn(),Kr=[`div`,`article`,`section`,`a`,`button`],qr=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`],Jr=[`none`,`small`,`medium`,`large`],Yr=`minerva-card-header, minerva-card-content, minerva-card-footer, minerva-card-title, minerva-card-description`,Xr=e=>e&&Jr.includes(e)?`pad-${e}`:``,Zr=e=>{let t=e.parentElement??e.getRootNode().host;return!!(t?zt(t,`minerva-card`):null)?.hasAttribute(`padding`)},Qr=class e extends m{constructor(...e){super(...e),this.variant=`default`,this.interactive=!1,this.as=`div`,this.disabled=!1,this.type=`button`,this.internals=He(this),this.aria=new u(this),this.syncParts=()=>{for(let e of Array.from(this.querySelectorAll(Yr)))e.requestUpdate()},this.blockDisabledClicks=e=>{this.tag===`button`&&this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-card`}static{this.formAssociated=!0}static{this.styles=[h,k`
:host{
display: block;
min-width: 0;
}
.card ::slotted(minerva-card-content){
flex: 1;
}
a.card,
button.card{
width: 100%;
box-sizing: border-box;
}
button.card{
margin: 0;
padding: 0;
}
`,C(ze)]}get tag(){return Kr.includes(this.as)?this.as:`div`}focus(e){this.tag===`a`||this.tag===`button`?this.root?.focus(e):super.focus(e)}handleClick(e){if(this.tag!==`button`)return;if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.internals?.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockDisabledClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockDisabledClicks,!0)}hookStates(){return{variant:this.variant,disabled:this.tag===`button`&&this.disabled}}updated(t){t.has(`padding`)&&this.syncParts(),v&&(this.as&&!Kr.includes(this.as)&&f(e.tagName,`unsupported as="${this.as}" (expected ${Kr.join(`, `)}); rendering a div.`),this.tag===`a`&&!this.href&&f(e.tagName,`as="a" needs an href to be a link (focusable, activatable with Enter).`),this.interactive&&this.tag!==`a`&&this.tag!==`button`&&f(e.tagName,`interactive cards should be links or buttons (as="a" with href, or as="button") so keyboard users can activate them.`))}render(){let t=this.tag,n=F({card:!0,[this.variant]:!0,padded:!!this.padding,[Xr(this.padding)]:!!Xr(this.padding),interactive:this.interactive}),r=this.aria.label??A,i=Bn`<slot @slotchange=${this.syncParts}></slot>`;if(t===`a`)return Bn`<a
part="root"
class=${n}
href=${me(e.tagName,this.href)??A}
target=${this.target??A}
rel=${rn(this.target,this.rel)??A}
download=${this.download??A}
aria-label=${r}
>${i}</a
>`;if(t===`button`)return Bn`<button
part="root"
class=${n}
type="button"
?disabled=${this.disabled}
aria-label=${r}
aria-pressed=${this.aria.attr(`aria-pressed`)??A}
aria-expanded=${this.aria.attr(`aria-expanded`)??A}
@click=${this.handleClick}
>
${i}
</button>`;let a=Vn(t);return Bn`<${a} part="root" class=${n}>${i}</${a}>`}},I([M({reflect:!0})],Qr.prototype,`variant`,void 0),I([M({reflect:!0})],Qr.prototype,`padding`,void 0),I([M({type:Boolean,reflect:!0})],Qr.prototype,`interactive`,void 0),I([M({reflect:!0})],Qr.prototype,`as`,void 0),I([M()],Qr.prototype,`href`,void 0),I([M()],Qr.prototype,`target`,void 0),I([M()],Qr.prototype,`rel`,void 0),I([M()],Qr.prototype,`download`,void 0),I([M({type:Boolean,reflect:!0})],Qr.prototype,`disabled`,void 0),I([M()],Qr.prototype,`type`,void 0),I([D(`[part=root]`)],Qr.prototype,`root`,void 0),$r=k`
:host{
display: block;
min-width: 0;
}
.cardHeader{
padding: var(--card-padding,var(--space-4));
position: relative;
background-color: var(--card-header-bg-color,var(--surface-muted-color));
}

.cardHeader::after{
content: "";
position: absolute;
inset-inline: 0;
bottom: 0;
height: 1px;
background-color: var(--card-border-color,var(--border-color));
pointer-events: none;
}
.cardContent{
padding: var(--card-padding,var(--space-4));
flex: 1;
background-color: var(--card-bg-color-content,var(--surface-color));
min-width: 0;
overflow-wrap: anywhere;
}
.cardFooter{
padding: var(--card-padding,var(--space-4));
background-color: color-mix(
in srgb,
var(--surface-muted-color) 60%,
transparent
);
position: relative;
text-align: end;
}
.cardFooter::before{
content: "";
position: absolute;
inset-inline: 0;
top: 0;
height: 1px;
background-color: var(--card-border-color,var(--border-color));
pointer-events: none;
}
@media (forced-colors: active){
.cardHeader::after,
.cardFooter::before{
forced-color-adjust: none;
background-color: CanvasText;
}
}
.padded{
padding: 0;
border: 0;
background-color: transparent;
text-align: start;
white-space: normal;
overflow: visible;
}
.padded.cardHeader::after,
.padded.cardFooter::before{
content: none;
}
.padded.cardContent.afterHeader{
margin-top: var(--space-3);
}
.padded.cardFooter.afterContent,
.padded.cardFooter.afterHeader{
margin-top: var(--space-4);
padding-top: var(--space-4);
}
.padded.cardFooter.afterContent::before,
.padded.cardFooter.afterHeader::before{
content: "";
}
.pad-none{
padding: 0;
}
.pad-small{
padding: var(--space-3);
}
.pad-medium{
padding: var(--space-5);
}
.pad-large{
padding: var(--space-8);
}
`,ei=class extends m{constructor(...e){super(...e),this.sectionClass=``}static{this.styles=[h,$r]}layoutClasses(){let e=this.previousElementSibling?.localName,t=Xr(this.padding);return{[this.sectionClass]:!0,padded:Zr(this),afterHeader:e===`minerva-card-header`,afterContent:e===`minerva-card-content`,[t]:!!t}}render(){return Bn`<div part="root" class=${F(this.layoutClasses())}>
<slot></slot>
</div>`}},I([M({reflect:!0})],ei.prototype,`padding`,void 0),ti=class extends ei{constructor(...e){super(...e),this.sectionClass=`cardHeader`}static{this.tagName=`minerva-card-header`}},ni=class extends ei{constructor(...e){super(...e),this.sectionClass=`cardContent`}static{this.tagName=`minerva-card-content`}static{this.styles=[h,$r,k`
:host{
display: flex;
flex-direction: column;
}
.fadeIn{
animation: fadeIn 1s ease-in-out;
}
.slideIn{
animation: slideIn 1s ease-in-out;
}
.zoomIn{
animation: zoomIn 1s ease-in-out;
}
@keyframes fadeIn{
0%{
opacity: 0;
}
100%{
opacity: 1;
}
}
@keyframes slideIn{
0%{
transform: translateX(-100%);
}
100%{
transform: translateX(0);
}
}
@keyframes zoomIn{
0%{
transform: scale(0);
}
100%{
transform: scale(1);
}
}
@media (prefers-reduced-motion: reduce){
.fadeIn,
.slideIn,
.zoomIn{
animation: none;
}
}
`]}layoutClasses(){let e=super.layoutClasses();return this.animation&&(e[this.animation]=!0),e}},I([M({reflect:!0})],ni.prototype,`animation`,void 0),ri=class extends ei{constructor(...e){super(...e),this.sectionClass=`cardFooter`}static{this.tagName=`minerva-card-footer`}},ii=class extends m{constructor(...e){super(...e),this.as=`h3`}static{this.tagName=`minerva-card-title`}static{this.styles=[h,k`
:host{
display: block;
min-width: 0;
}
.cardTitle{
font-size: var(--card-title-font-size,1.25rem);
font-weight: var(--font-weight-bold);
color: var(--text-color);
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}
.cardTitle.padded{
margin: 0;
font-family: var(--font-family-sans);
font-size: var(--card-title-font-size,var(--font-size-lg));
font-weight: var(--font-weight-semibold);
line-height: var(--line-height-tight);
white-space: normal;
}
`]}render(){let e=Vn(qr.includes(this.as)?this.as:`h3`);return Bn`<${e}
part="root"
class=${F({cardTitle:!0,padded:Zr(this)})}
><slot></slot></${e}>`}},I([M({reflect:!0})],ii.prototype,`as`,void 0),ai=class extends m{static{this.tagName=`minerva-card-description`}static{this.styles=[h,k`
:host{
display: block;
min-width: 0;
}
.cardDescription{
font-size: var(--font-size-md);
color: var(--text-secondary-color);
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}
.cardDescription.padded{
margin: var(--space-1) 0 0;
font-family: var(--font-family-sans);
line-height: var(--line-height-base);
white-space: normal;
}
`]}render(){return Bn`<p
part="root"
class=${F({cardDescription:!0,padded:Zr(this)})}
>
<slot></slot>
</p>`}}})))()}var si,ci,li,ui,di,U;function fi(){return(fi=e((()=>{l(),g(),d(),w(),gt(),y(),x(),cr(),Pt(),ge(),N(),O(),E(),cn(),on(),Fn(),si=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),ci=e=>{let t=new Set;for(let n of e){if(t.has(n.value))return n.value;t.add(n.value);let e=n.children?ci(n.children):void 0;if(e!==void 0)return e}},li={fromAttribute(e){let t=e?.trim()??``;if(!t)return[];if(t.startsWith(`[`))try{let e=JSON.parse(t);if(Array.isArray(e))return e.filter(e=>typeof e==`string`||typeof e==`number`)}catch{}return t.split(`,`).map(e=>e.trim())},toAttribute(e){return JSON.stringify(e)}},ui=`[role="option"]:not([aria-disabled="true"])`,di=0,U=class e extends pt{constructor(...e){super(...e),this.options=[],this.value=[],this.defaultValue=[],this.open=!1,this.label=``,this.invalid=!1,this.readOnly=!1,this.hideClearButton=!1,this.expandTrigger=`click`,this.showSearch=!1,this.maxLevel=6,this.width=240,this.expandedValues=[],this.searchValue=``,this.idPrefix=`minerva-cascader-${di++}`,this.locale=new p(this),this.aria=new u(this,()=>this.labels),this.floating=new ir(this,()=>({anchor:()=>this.anchor,floating:()=>this.dropdown,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,branches:()=>[this.anchor],onDismiss:()=>this.closeDropdown(),returnFocusOnEscape:()=>this.input,focusable:!0,onPosition:()=>this.syncHookStates()})),this.pendingFocus=null,this.dirty=!1,this.widthApplied=!1}static{this.tagName=`minerva-cascader`}static{this.shadowRootOptions={...pt.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,er,k`
:host{
display: inline-block;
width: 240px;
vertical-align: middle;
}
.cascader{
width: 100%;
}

.input{
--_input-pad-x: var(--input-padding-x,var(--control-padding-x-sm));
position: relative;
display: inline-flex;
align-items: center;
width: 100%;
min-width: 0;
min-height: var(--input-height,var(--control-height-md));
background: transparent;
border: 1px solid transparent;
border-radius: var(--input-radius,var(--radius-lg));
color: var(--text-color);
}
.input[data-disabled]{
background-color: var(--surface-subtle-color);
opacity: 0.6;
}
.field{
flex: 1;
align-self: stretch;
min-width: 0;
border: none;
outline: none;
background: transparent;
padding: 0 var(--_input-pad-x);
font: inherit;
color: inherit;
}
.field::placeholder{
color: var(--text-muted-color);
}
.field:disabled{
cursor: not-allowed;
}
.clearIcon svg,
.arrow svg{
display: block;
}
.expandIcon{
display: inline-flex;
}
:host(:dir(rtl)) .expandIcon{
transform: scaleX(-1);
}
`,C(ce)]}get selectedOptions(){return un(this.options,this.value)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}show(){this.open=!0}hide(){this.open=!1}get displayText(){let e=this.selectedOptions,t=e.map(e=>String(e.label));return this.displayRender?this.displayRender(t,e):t.join(` / `)}getFormValue(){return this.displayText}syncFormState(){super.syncFormState(),this.internals&&!this.isDisabled&&this.internals.setFormValue(this.getFormValue(),JSON.stringify(this.value))}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.selectMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=[...this.defaultValue],this.open=!1}restoreFormState(e){if(typeof e==`string`)try{let t=JSON.parse(e);Array.isArray(t)&&(this.value=t)}catch{}}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=!si(this.value,this.defaultValue)||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=[...this.defaultValue]),e.has(`open`)&&(this.open?this.expandedValues=[...this.value]:(this.searchValue=``,this.pendingFocus=null)),v&&this.checkDev(e)}checkDev(t){if(t.has(`options`)){let t=ci(this.options);t!==void 0&&f(e.tagName,`duplicate option value "${t}" among siblings: values must be unique within a level.`)}(t.has(`options`)||t.has(`value`))&&this.options.length>0&&this.value.length>0&&un(this.options,this.value).length<this.value.length&&f(e.tagName,`value ${JSON.stringify(this.value)} is not a path of the options tree: it is shown partially (or not at all).`)}hookStates(){let e=this.open&&!this.isDisabled,t=e&&this.floating.isOpen?this.floating.position.placement:void 0,{side:n,align:r}=t?Sn(t):{side:void 0,align:void 0};return{state:e?`open`:`closed`,disabled:this.isDisabled,readonly:this.readOnly,invalid:this.invalid,side:n,align:r,placement:t}}updated(e){if(super.updated(e),e.has(`width`)){let e=this.width,t=e===void 0||e===``?``:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,n=t!==``&&t!==`240px`;(n||this.widthApplied)&&(this.style.width=n?t:``),this.widthApplied=n}this.floating.sync(this.open&&!this.isDisabled);let t=this.pendingFocus;if(t!==null&&this.open){let e=t===-1?this.columns().length-1:t;this.focusColumn(e)&&(this.pendingFocus=null)}}requestOpen(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}openDropdown(e=!1){this.isDisabled||this.readOnly||this.requestOpen(!0)&&(this.expandedValues=[...this.value],this.pendingFocus=e?-1:null)}closeDropdown(e=!1){this.requestOpen(!1)&&(this.searchValue=``,e&&this.input?.focus())}select(e){this.value=e.map(e=>e.value),this.emitChange(e),this.closeDropdown(!0)}emitChange(e){this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:[...this.value],selectedOptions:e})}handleActivate(e,t){let n=e[e.length-1];if(n.disabled)return;let r=t>=this.maxLevel-1,i=!!n.children?.length,a=!!this.loadData&&!n.isLeaf&&!n.children;if(!r&&(i||a)){this.expandedValues=e.map(e=>e.value),a&&!n.loading&&this.loadData?.(e);return}this.select(e)}clear(e){e.stopPropagation(),this.value=[],this.searchValue=``,this.emitChange([]),this.emit(`minerva-clear`),this.input?.focus()}get expandedPath(){return un(this.options,this.expandedValues)}columns(){let e=this.expandedPath,t=[this.options];for(let n=0;n<e.length&&n<this.maxLevel-1;n+=1){let r=e[n].children;if(!r?.length)break;t.push(r)}return t}columnId(e){return`${this.idPrefix}-column-${e}`}focusColumn(e){let t=this.dropdown?.querySelector(`[data-level="${e}"]`);if(!t)return!1;let n=t.querySelector(`[data-expanded]`)??t.querySelector(`[data-selected]`)??t.querySelector(ui);return n?.focus(),!!n}canExpand(e,t){return t<this.maxLevel-1&&(!!e.children?.length||!e.isLeaf&&e.children===void 0)}pathTo(e,t){return[...this.expandedPath.slice(0,t),e]}get searching(){return this.showSearch&&this.searchValue!==``}searchResults(){if(!this.searching)return[];let{searchValue:e,filter:t}=this,n=e.toLowerCase();return Xt(this.options).filter(({path:r})=>t?t(e,r):r.some(e=>String(e.label).toLowerCase().includes(n)))}focusFirstSearchResult(){this.dropdown?.querySelector(`[role="option"]`)?.focus()}handleSelectorClick(){this.isDisabled||this.readOnly||(this.open?this.showSearch||this.closeDropdown():this.openDropdown())}handleInput(e){let t=e.target.value;this.showSearch&&!this.readOnly&&(this.searchValue=t,this.emit(`minerva-input`,{value:t}),this.open||this.openDropdown())}handleInputKeyDown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this.open?this.searching?this.focusFirstSearchResult():(this.pendingFocus=-1,this.requestUpdate()):this.openDropdown(!0);break;case`Enter`:e.preventDefault(),this.open||this.openDropdown(!0);break;case` `:if(this.showSearch)break;e.preventDefault(),this.open||this.openDropdown(!0)}}handleFocusOut(e){let t=e.relatedTarget;this.open&&t&&(this.anchor&&tn(this.anchor,t)||this.dropdown&&tn(this.dropdown,t)||this.closeDropdown())}handleDropdownMouseDown(e){e.target.closest?.(`[role="option"]`)||e.preventDefault()}handleDropdownKeyDown(e){e.key===`Tab`&&this.closeDropdown()}handleOptionKeyDown(e,t,n){let r=e.currentTarget,i=Array.from(r.parentElement?.querySelectorAll(ui)??[]),a=i.indexOf(r),o=e=>i[(e+i.length)%i.length]?.focus();switch(Nn(e.key,this)){case`ArrowDown`:e.preventDefault(),o(a+1);break;case`ArrowUp`:e.preventDefault(),o(a-1);break;case`Home`:e.preventDefault(),o(0);break;case`End`:e.preventDefault(),o(i.length-1);break;case`ArrowRight`:if(e.preventDefault(),t.disabled||!this.canExpand(t,n))break;this.pendingFocus=n+1,this.handleActivate(this.pathTo(t,n),n),this.requestUpdate();break;case`Enter`:case` `:if(e.preventDefault(),t.disabled)break;this.canExpand(t,n)&&(this.pendingFocus=n+1),this.handleActivate(this.pathTo(t,n),n),this.requestUpdate();break;case`ArrowLeft`:e.preventDefault(),n===0?this.closeDropdown(!0):this.focusColumn(n-1)}}handleSearchKeyDown(e){let t=e.currentTarget,n=Array.from(t.querySelectorAll(`[role="option"]`)),r=n.indexOf(e.target);(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),n[(r+(e.key===`ArrowDown`?1:-1)+n.length)%n.length]?.focus())}renderSearchResults(){let e=this.searchResults();return j`<div
class="searchResults"
role="listbox"
aria-label=${this.label||this.aria.label||A}
tabindex="-1"
@keydown=${this.handleSearchKeyDown}
>
${e.length>0?e.map(({path:e})=>j`<div
class="searchOption"
part="item"
role="option"
aria-selected="false"
tabindex="0"
@keydown=${t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),this.select(e))}}
@click=${()=>this.select(e)}
>
${e.map(e=>e.label).join(` / `)}
</div>`):j`<div class="empty" role="status">
${this.locale.t(`cascader.noResults`)}
</div>`}
</div>`}renderPanel(){let{t:e}=this.locale,t=this.columns(),n=this.expandedPath,r=this.selectedOptions,i=this.label||this.aria.label||e(`cascader.options`);return j`<div class="panel">
${t.map((a,s)=>j`<ul
id=${this.columnId(s)}
data-level=${s}
class="column"
part="column"
role="listbox"
aria-label=${e(`cascader.level`,{label:i,level:s+1})}
>
${a.map(e=>{let i=n[s]?.value===e.value,a=r[s]?.value===e.value,c=this.canExpand(e,s)&&!(!e.children?.length&&e.isLeaf),ee=i&&!(a&&s===r.length-1);return j`<li
?data-expanded=${ee}
?data-selected=${a}
class=${F({option:!0,active:i||a,disabled:!!e.disabled,loading:!!e.loading})}
part=${ct(`item`,{selected:a,expanded:ee,disabled:e.disabled,loading:e.loading})}
role="option"
aria-selected=${a?`true`:`false`}
aria-disabled=${e.disabled?`true`:A}
aria-busy=${e.loading?`true`:A}
aria-controls=${i&&s+1<t.length?this.columnId(s+1):A}
tabindex=${e.disabled?-1:0}
@keydown=${t=>this.handleOptionKeyDown(t,e,s)}
@click=${()=>{e.disabled||this.handleActivate(this.pathTo(e,s),s)}}
@mouseenter=${()=>{this.expandTrigger===`hover`&&!e.disabled&&e.children?.length&&s<this.maxLevel-1&&(this.expandedValues=this.pathTo(e,s).map(e=>e.value))}}
>
${this.optionRender?this.optionRender(e,s):j`<span class="label">${e.label}</span>${e.loading?j`<span
class="loadingIndicator"
aria-hidden="true"
>...</span
>`:c?j`<span class="expandIcon" aria-hidden="true"
>${o}</span
>`:A}`}
</li>`})}
</ul>`)}
</div>`}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.open&&!t,r=!this.hideClearButton&&this.value.length>0&&!t&&!this.readOnly,i=this.searching?this.searchValue:this.displayText,a=this.invalid||this.aria.attr(`aria-invalid`)===`true`;return j`<div
class="cascader"
part="root"
@focusout=${this.handleFocusOut}
>
<div
class=${F({selector:!0,disabled:t,focused:n})}
part="control"
@click=${this.handleSelectorClick}
>
<div class="input" data-component="input" ?data-disabled=${t}>
<input
part="input"
class="field"
role="combobox"
aria-haspopup="listbox"
aria-expanded=${n?`true`:`false`}
aria-autocomplete=${this.showSearch?`list`:A}
aria-label=${this.aria.label??(this.label||A)}
aria-description=${this.aria.description??A}
aria-invalid=${a?`true`:A}
aria-required=${this.required?`true`:A}
aria-readonly=${this.showSearch&&this.readOnly?`true`:A}
name=${this.name||A}
.value=${Xn(i)}
?readonly=${!this.showSearch||this.readOnly}
?disabled=${t}
?required=${this.required}
autocomplete="off"
placeholder=${this.placeholder??e(`cascader.placeholder`)}
@input=${this.handleInput}
@keydown=${this.handleInputKeyDown}
/>
</div>
${r?j`<button
type="button"
class="clearIcon"
part="clear-button"
aria-label=${e(`cascader.clear`)}
@click=${this.clear}
>
<span class="icon" aria-hidden="true">${Ie}</span>
</button>`:A}
<span
class=${F({arrow:!0,open:n})}
part="icon"
aria-hidden="true"
><span class="icon">${Wt}</span></span
>
</div>
</div>
${n?j`<div
class="dropdown"
part="content"
popover="manual"
@mousedown=${this.handleDropdownMouseDown}
@focusout=${this.handleFocusOut}
@keydown=${this.handleDropdownKeyDown}
>
${this.searching?this.renderSearchResults():this.renderPanel()}
</div>`:A}`}},I([M({attribute:!1})],U.prototype,`options`,void 0),I([M({attribute:!1})],U.prototype,`value`,void 0),I([M({attribute:`value`,converter:li})],U.prototype,`defaultValue`,void 0),I([M({type:Boolean,reflect:!0})],U.prototype,`open`,void 0),I([M()],U.prototype,`label`,void 0),I([M()],U.prototype,`placeholder`,void 0),I([M({type:Boolean,reflect:!0})],U.prototype,`invalid`,void 0),I([M({type:Boolean,reflect:!0,attribute:`readonly`})],U.prototype,`readOnly`,void 0),I([M({type:Boolean,attribute:`hide-clear-button`})],U.prototype,`hideClearButton`,void 0),I([M({attribute:`expand-trigger`,reflect:!0})],U.prototype,`expandTrigger`,void 0),I([M({type:Boolean,attribute:`show-search`,reflect:!0})],U.prototype,`showSearch`,void 0),I([M({type:Number,attribute:`max-level`})],U.prototype,`maxLevel`,void 0),I([M()],U.prototype,`width`,void 0),I([M({attribute:!1})],U.prototype,`displayRender`,void 0),I([M({attribute:!1})],U.prototype,`filter`,void 0),I([M({attribute:!1})],U.prototype,`loadData`,void 0),I([M({attribute:!1})],U.prototype,`optionRender`,void 0),I([T()],U.prototype,`expandedValues`,void 0),I([T()],U.prototype,`searchValue`,void 0),I([D(`input`)],U.prototype,`input`,void 0),I([D(`.cascader`)],U.prototype,`anchor`,void 0),I([D(`.dropdown`)],U.prototype,`dropdown`,void 0)})))()}var pi,W;function mi(){return(mi=e((()=>{l(),g(),d(),w(),y(),b(),x(),Pt(),Fe(),N(),O(),E(),Fn(),pi=e=>e.charAt(0).toUpperCase()+e.slice(1),W=class e extends pt{constructor(...e){super(...e),this.checked=!1,this.defaultChecked=!1,this.indeterminate=!1,this.value=`on`,this.label=``,this.shape=`square`,this.size=`medium`,this.color=`primary`,this.labelPlacement=`end`,this.error=!1,this.helperText=``,this.readOnly=!1,this.locale=new p(this),this.aria=new u(this,()=>this.labels),this.slots=new _(this),this.dirty=!1}static{this.tagName=`minerva-checkbox`}static{this.shadowRootOptions={...pt.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,k`
:host{
display: inline-flex;
vertical-align: middle;
}
.checkmark ::slotted(*){
position: relative;
z-index: 1;
display: inline-flex;
color: var(--checkbox-checkmark-color,var(--text-inverse-color));
}
`,C(Me)]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}click(){this.input?.click()}getFormValue(){return this.checked?this.value:null}getValidity(){return this.required&&!this.checked?{flags:{valueMissing:!0},message:this.locale.t(`validation.checkMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.checked=this.defaultChecked}restoreFormState(e){this.checked=e!=null&&e!==``}willUpdate(e){e.has(`defaultChecked`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`checked`))&&(this.checked=this.defaultChecked)}updated(t){super.updated(t),this.input&&(this.input.indeterminate=this.indeterminate),v&&!this.aria.label&&!this.label&&!this.textContent?.trim()&&f(e.tagName,`no label: set the label attribute, slot a label, or use aria-label / <label for>.`)}handleClick(e){this.readOnly&&e.preventDefault()}handleChange(){this.readOnly||(this.dirty=!0,this.input.indeterminate=this.indeterminate,this.checked=this.input.checked,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{checked:this.checked,value:this.value}))}hookStates(){return{state:this.indeterminate?`indeterminate`:this.checked?`checked`:`unchecked`,disabled:this.isDisabled,invalid:this.error||this.aria.attr(`aria-invalid`)===`true`,readonly:this.readOnly,required:this.required,size:this.size,color:this.color,shape:this.shape}}render(){let e=this.isDisabled,t=!!this.label||this.slots.test(`[default]`),n=[this.helperText,this.aria.description].filter(Boolean).join(` `),r=this.error||this.aria.attr(`aria-invalid`)===`true`;return j`<div
part="root"
class=${F({checkboxWrapper:!0,error:r})}
>
<label
class=${F({checkbox:!0,[this.size]:!0,[this.shape]:!0,[`label${pi(this.labelPlacement)}`]:!0,[`color${pi(this.color)}`]:this.color!==`primary`,disabled:e,error:r})}
>
<input
part="input"
type="checkbox"
class="input"
.checked=${Xn(this.checked)}
?disabled=${e}
?required=${this.required}
aria-checked=${this.indeterminate?`mixed`:A}
aria-label=${this.aria.label??A}
aria-description=${n||A}
aria-invalid=${r?`true`:A}
aria-readonly=${this.readOnly?`true`:A}
@click=${this.handleClick}
@change=${this.handleChange}
/>
<span class="checkmark" part="control"
>${this.checked&&!this.indeterminate?j`<slot name="icon"></slot>`:A}</span
>
${t?j`<span class="label" part="label"
>${this.label||j`<slot></slot>`}</span
>`:A}
</label>
${this.helperText?j`<div class="helperTextWrapper">
${r?j`<span class="errorIcon" aria-hidden="true"
>${ye}</span
>`:A}
<span
part="helper-text"
class=${F({helperText:!0,errorText:r})}
>${this.helperText}</span
>
</div>`:A}
</div>`}},I([M({attribute:!1})],W.prototype,`checked`,void 0),I([M({type:Boolean,attribute:`checked`,reflect:!0})],W.prototype,`defaultChecked`,void 0),I([M({type:Boolean,reflect:!0})],W.prototype,`indeterminate`,void 0),I([M()],W.prototype,`value`,void 0),I([M()],W.prototype,`label`,void 0),I([M({reflect:!0})],W.prototype,`shape`,void 0),I([M({reflect:!0})],W.prototype,`size`,void 0),I([M({reflect:!0})],W.prototype,`color`,void 0),I([M({attribute:`label-placement`,reflect:!0})],W.prototype,`labelPlacement`,void 0),I([M({type:Boolean,reflect:!0})],W.prototype,`error`,void 0),I([M({attribute:`helper-text`})],W.prototype,`helperText`,void 0),I([M({type:Boolean,reflect:!0,attribute:`readonly`})],W.prototype,`readOnly`,void 0),I([D(`input`)],W.prototype,`input`,void 0)})))()}var hi,gi,_i;function vi(){return(vi=e((()=>{l(),g(),d(),w(),y(),b(),x(),Ct(),ue(),N(),O(),E(),Ln(),hi=2e3,gi=e=>e===void 0||e===``?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,_i=class e extends m{constructor(...e){super(...e),this.noWrap=!1,this.maxHeight=`24rem`,this.copyable=!1,this.status=`idle`,this.locale=new p(this),this.aria=new u(this),this.slots=new _(this)}static{this.tagName=`minerva-code-block`}static{this.styles=[h,k`
:host{
display: block;
min-width: 0;
max-width: 100%;
}
.actions{
align-items: center;
gap: var(--space-2);
}
.language{
color: var(--text-muted-color);
font-family: var(--font-family-mono);
font-size: var(--font-size-xs);
line-height: 1;
user-select: none;
}
.iconButton svg{
width: 16px;
height: 16px;
}
`,C(nt),C(Ne)]}get text(){return this.code??this.textContent??``}async copy(){let e=this.text,t=typeof navigator>`u`?void 0:navigator.clipboard,n=!1;if(typeof t?.writeText==`function`)try{await t.writeText(e),n=!0}catch{n=!1}return this.isConnected?(this.showStatus(n?`copied`:`failed`),this.emit(`minerva-copy`,{text:e,success:n}),n):n}showStatus(e){clearTimeout(this.timer),this.status=e,this.timer=setTimeout(()=>this.status=`idle`,hi)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timer),this.status=`idle`}updated(){v&&this.copyable&&!this.text.trim()&&f(e.tagName,`copyable is set but there is no text to copy (set code or the text content).`)}render(){this.slots;let e=this.locale.t,t=this.aria.label??e(`codeBlock.label`),n=gi(this.maxHeight),r=this.copyable||!!this.language,i=j`<pre
      part="region"
      role="region"
      tabindex="0"
      aria-label=${t}
      aria-description=${this.aria.description??A}
      data-wrap=${String(!this.noWrap)}
      class=${F({codeBlock:!0,copyable:r})}
      style=${P(r?{}:{maxHeight:n})}
    ><code
        part="code"
        class=${this.language?`language-${this.language}`:A}
        data-language=${this.language??A}
      >${this.text}</code></pre>`;if(!r)return i;let a=this.status,o=a===`copied`?e(`codeBlock.copied`):a===`failed`?e(`codeBlock.copyFailed`):``,s=o||e(`codeBlock.copy`),c=a===`failed`?`danger`:a===`copied`?`success`:`neutral`;return j`<div part="root" class="root" style=${P({maxHeight:n})}>
${i}
<div class="actions">
${this.language?j`<span part="language" class="language" aria-hidden="true"
>${this.language}</span
>`:A}
${this.copyable?j`<button
type="button"
part="copy-button"
class="iconButton ${c} variant-ghost small square"
aria-label=${s}
title=${s}
@click=${()=>void this.copy()}
>
${a===`copied`?le:a===`failed`?Ie:oe}
</button>`:A}
</div>
${this.copyable?j`<span class="visuallyHidden" aria-live="polite"
>${o}</span
>`:A}
</div>`}},I([M()],_i.prototype,`code`,void 0),I([M({reflect:!0})],_i.prototype,`language`,void 0),I([M({type:Boolean,attribute:`no-wrap`,reflect:!0})],_i.prototype,`noWrap`,void 0),I([M({attribute:`max-height`})],_i.prototype,`maxHeight`,void 0),I([M({type:Boolean,reflect:!0})],_i.prototype,`copyable`,void 0),I([T()],_i.prototype,`status`,void 0)})))()}var yi,G;function bi(){return(bi=e((()=>{g(),c(),w(),gt(),y(),x(),nr(),tr(),cr(),sr(),s(),Ee(),se(),N(),O(),cn(),on(),Fn(),yi={fromAttribute:e=>e===null?void 0:e.split(`,`).map(e=>e.trim()).filter(Boolean),toAttribute:e=>Array.isArray(e)?e.join(`, `):e},G=class e extends m{constructor(...e){super(...e),this.open=!1,this.items=[],this.maxResults=12,this.query=``,this.activeIndex=0,this.locale=new p(this),this.presence=new fe(this,()=>this.panel),this.modal=new $n(this),this.focusScope=new or(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new Qn(this,()=>({disableOutsidePointerEvents:!0,onFocusOutside:()=>!1,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleShortcut=e=>{let t=An(this.shortcut);if(t.length===0)return;let n=e.composedPath()[0]??e.target;xn(n)&&!e.ctrlKey&&!e.metaKey&&!e.altKey||e.isComposing||t.some(t=>Cn(e,t))&&(e.preventDefault(),e.stopPropagation(),this.requestOpenChange(!0,`shortcut`))}}static{this.tagName=`minerva-command-dialog`}static{this.styles=[h,er,k`
:host{
display: contents;
}
`,C(Gt),C(ve)]}show(){this.open=!0}hide(){this.open=!1}get results(){let e=Math.max(0,this.maxResults),t=(Array.isArray(this.items)?this.items:[]).filter(e=>!e.disabled),n=this.query.trim();if(!n)return t.slice(0,e);if(typeof this.filter==`function`)return this.filter(t,n).slice(0,e);let r=yn(n);return t.filter(e=>yn(dn(e)).includes(r)).slice(0,e)}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}select(e){this.emit(`minerva-select`,{value:e.id,item:e}),this.requestOpenChange(!1,`select`)}handleKeyDown(e){let t=this.results,n=Math.max(t.length-1,0),r={ArrowDown:e=>Math.min(e+1,n),ArrowUp:e=>Math.max(e-1,0),Home:()=>0,End:()=>n}[e.key];if(r&&(e.key.startsWith(`Arrow`)||!this.query)){e.preventDefault(),this.activeIndex=r(Math.min(this.activeIndex,n));return}let i=t[this.activeIndex];e.key===`Enter`&&i&&!e.isComposing&&(e.preventDefault(),this.select(i))}handleInput(e){this.query=e.target.value,this.activeIndex=0}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this.handleShortcut,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleShortcut,!0),S(this.panel),S(this.overlay)}willUpdate(e){e.has(`open`)&&(this.presence.sync(this.open),this.open&&(this.query=``,this.activeIndex=0)),e.has(`items`)&&v&&this.checkItems();let t=this.results.length;this.activeIndex>0&&this.activeIndex>=t&&(this.activeIndex=Math.max(t-1,0))}checkItems(){if(!Array.isArray(this.items)){f(e.tagName,"`items` must be an array of { id, title, ... } objects.");return}let t=new Set;for(let n of this.items)t.has(n.id)&&f(e.tagName,`duplicate item id "${n.id}": ids identify the chosen command in minerva-select and must be unique.`),t.add(n.id)}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)){let e=this.panel;this.open&&e?(De(this.overlay),De(e),this.modal.activate(this),this.layer.activate(e),this.focusScope.activate(e),this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.open&&(e.has(`activeIndex`)||e.has(`query`))&&this.renderRoot.querySelector(`#option-${this.activeIndex}`)?.scrollIntoView?.({block:`nearest`}),this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}hookStates(){return{state:this.open?`open`:`closed`}}afterClose(){S(this.panel),S(this.overlay),this.emit(`minerva-after-close`)}render(){if(!(this.open||this.presence.present))return A;let e=this.locale.t,t=this.open?`open`:`closed`,n=this.results,r=n[this.activeIndex]?`option-${this.activeIndex}`:void 0,i=this.placeholder??e(`command.placeholder`);return j`<div
part="overlay"
class="overlay"
popover="manual"
data-state=${t}
aria-hidden="true"
></div>
<div
part="content"
class="content large dialog"
popover="manual"
role="dialog"
aria-modal="true"
aria-labelledby="title"
aria-describedby="description"
tabindex="-1"
data-state=${t}
>
<p id="description" class="description" part="description">
${this.description??e(`command.description`)}
</p>
<div id="title" class="header" part="header">
<span>${this.label??e(`command.title`)}</span>
${this.shortcutLabel?j`<kbd class="kbd">${this.shortcutLabel}</kbd>`:A}
</div>
<div class="search" part="search">
<span class="searchIcon" aria-hidden="true">⌕</span>
<input
part="input"
class="input"
type="text"
role="combobox"
aria-label=${i}
aria-autocomplete="list"
aria-expanded="true"
aria-controls="results"
aria-activedescendant=${r??A}
autocomplete="off"
spellcheck="false"
placeholder=${i}
.value=${Xn(this.query)}
@input=${this.handleInput}
@keydown=${this.handleKeyDown}
/>
<kbd class="enterHint" aria-hidden="true"
>${this.enterLabel??e(`command.enter`)}</kbd
>
</div>
<div
id="results"
part="list"
class="results"
role="listbox"
aria-label=${this.resultsLabel??e(`command.results`)}
>
${n.length===0?j`<div class="empty" part="empty">
${this.emptyText??e(`command.empty`)}
</div>`:n.map((e,t)=>{let n=t===this.activeIndex;return j`<button
id=${`option-${t}`}
part=${ct(`item`,{highlighted:n})}
type="button"
role="option"
tabindex="-1"
aria-selected=${n?`true`:`false`}
?data-highlighted=${n}
class="item"
@mouseenter=${()=>this.activeIndex=t}
@click=${()=>this.select(e)}
>
<span class="copy"
><strong>${e.title}</strong>${e.description?j`<small>${e.description}</small>`:A}</span
>${e.group?j`<span class="group">${e.group}</span>`:A}
</button>`})}
</div>
</div>`}},I([M({type:Boolean,reflect:!0})],G.prototype,`open`,void 0),I([M({attribute:!1})],G.prototype,`items`,void 0),I([M()],G.prototype,`label`,void 0),I([M()],G.prototype,`description`,void 0),I([M()],G.prototype,`placeholder`,void 0),I([M({attribute:`empty-text`})],G.prototype,`emptyText`,void 0),I([M({attribute:`shortcut-label`})],G.prototype,`shortcutLabel`,void 0),I([M({converter:yi})],G.prototype,`shortcut`,void 0),I([M({type:Number,attribute:`max-results`})],G.prototype,`maxResults`,void 0),I([M({attribute:!1})],G.prototype,`filter`,void 0),I([M({attribute:`results-label`})],G.prototype,`resultsLabel`,void 0),I([M({attribute:`enter-label`})],G.prototype,`enterLabel`,void 0),I([T()],G.prototype,`query`,void 0),I([T()],G.prototype,`activeIndex`,void 0),I([D(`.content`)],G.prototype,`panel`,void 0),I([D(`.overlay`)],G.prototype,`overlay`,void 0)})))()}var xi,Si,Ci;function wi(){return(wi=e((()=>{y(),N(),O(),cn(),on(),xi=`(prefers-color-scheme: dark)`,Si=`data-minerva-theme-scope`,Ci=class extends m{constructor(...e){super(...e),this.root=!1,this.media=null,this.mode=null,this.onSchemeChange=()=>this.apply()}static{this.tagName=`minerva-config`}static{this.styles=k`
:host{
display: contents;
}
`}get resolvedMode(){return this.mode}connectedCallback(){super.connectedCallback(),typeof window<`u`&&window.matchMedia&&(this.media=window.matchMedia(xi),this.media.addEventListener(`change`,this.onSchemeChange))}disconnectedCallback(){super.disconnectedCallback(),this.media?.removeEventListener(`change`,this.onSchemeChange),this.media=null,this.root&&this.clear(document.documentElement)}updated(e){e.has(`root`)&&e.get(`root`)!==void 0&&this.clear(e.get(`root`)?document.documentElement:this),this.apply()}target(){return this.root?document.documentElement:this}clear(e){for(let t of[`data-theme`,`data-palette`,Si,`lang`])(e!==this||t!==`lang`)&&e.removeAttribute(t);hn(e,null),mn(e.style,{}),e.style.removeProperty(`color-scheme`)}apply(){let e=this.target(),t=(t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},n=this.theme,r=this.media?.matches?`dark`:`light`,i=n===`system`?r:n===`github-dark`?`dark`:n===`light`||n===`dark`?n:null,a=Tn(this.design)?this.design:void 0,o=sn(this.palette)?this.palette:Yt(a),s=!!o&&n!==`github-dark`;t(`data-theme`,i),t(`data-palette`,s?o:null),this.root||t(Si,i!==null||s||a!==void 0||[this.density,this.radius,this.shadow,this.fontScale].some(Boolean)?``:null),i?e.style.colorScheme=i:e.style.removeProperty(`color-scheme`),mn(e.style,n===`github-dark`&&pn(n)?wn[n]:{}),hn(e,{preset:a,density:Dn(this.density)?this.density:void 0,radius:$t(this.radius)?this.radius:void 0,shadow:Qt(this.shadow)?this.shadow:void 0,fontScale:ln(this.fontScale)?this.fontScale:void 0},{all:!this.root&&a!==void 0}),this.root&&this.locale&&(document.documentElement.lang=this.locale),i!==this.mode&&(this.mode=i,i&&this.emit(`minerva-theme-change`,{mode:i}))}render(){return j`<slot></slot>`}},I([M({reflect:!0})],Ci.prototype,`theme`,void 0),I([M({reflect:!0})],Ci.prototype,`palette`,void 0),I([M({reflect:!0})],Ci.prototype,`design`,void 0),I([M({reflect:!0})],Ci.prototype,`density`,void 0),I([M({reflect:!0})],Ci.prototype,`radius`,void 0),I([M({reflect:!0})],Ci.prototype,`shadow`,void 0),I([M({reflect:!0,attribute:`font-scale`})],Ci.prototype,`fontScale`,void 0),I([M({reflect:!0})],Ci.prototype,`locale`,void 0),I([M({type:Boolean,reflect:!0})],Ci.prototype,`root`,void 0)})))()}var K;function Ti(){return(Ti=e((()=>{l(),g(),d(),c(),w(),y(),b(),x(),nr(),tr(),cr(),sr(),Gr(),s(),se(),N(),O(),K=class e extends m{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.color=`primary`,this.loading=!1,this.confirmDisabled=!1,this.busy=!1,this.locale=new p(this),this.aria=new u(this),this.slots=new _(this),this.presence=new fe(this,()=>this.panel),this.modal=new $n(this),this.focusScope=new or(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new Qn(this,()=>({disableOutsidePointerEvents:!0,onFocusOutside:()=>!1,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestClose(this.reason)})),this.reason=`outside`,this.wasPresent=!1}static{this.tagName=`minerva-confirm-dialog`}static{this.dependencies=[H]}static{this.styles=[h,er,k`
:host{
display: contents;
}
.content .body{
flex: 1 1 auto;
}
`,C(Gt)]}show(){this.open=!0}hide(){this.open=!1}requestClose(e){return!this.open||!this.emit(`minerva-open-change`,{open:!1,reason:e},{cancelable:!0})?!1:(this.open=!1,e!==`confirm`&&this.emit(`minerva-cancel`,{reason:e}),!0)}async handleConfirm(){if(!this.open||this.loading||this.busy||this.confirmDisabled||!this.emit(`minerva-confirm`,void 0,{cancelable:!0}))return;let e=this.onConfirm?.();if(e&&typeof e.then==`function`){this.busy=!0;try{await e}catch{return}finally{this.busy=!1}}this.requestClose(`confirm`)}willUpdate(e){e.has(`open`)&&this.presence.sync(this.open)}hookStates(){return{state:this.open?`open`:`closed`,color:this.color,loading:this.loading||this.busy}}updated(t){let n=this.open||this.presence.present;if(t.has(`open`)){let t=this.panel;this.open&&t?(v&&!this.label&&!this.slots.test(`header`)&&!this.aria.label&&f(e.tagName,"set `label` (or the `header` slot / aria-label) to give the alertdialog an accessible name."),De(this.overlay),De(t),this.modal.activate(this),this.layer.activate(t),this.focusInitial(t)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!n&&this.afterClose(),this.wasPresent=n}async focusInitial(e){let t=Array.from(e.querySelectorAll(`minerva-button`));await Promise.all(t.map(e=>e.updateComplete)),this.open&&this.panel===e&&(this.focusScope.activate(e),this.emit(`minerva-after-open`))}disconnectedCallback(){super.disconnectedCallback(),S(this.panel),S(this.overlay)}afterClose(){S(this.panel),S(this.overlay),this.emit(`minerva-after-close`)}render(){if(!(this.open||this.presence.present))return A;let e=this.open?`open`:`closed`,t=this.locale.t,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description,i=this.loading||this.busy;return j`<div
part="overlay"
class="overlay"
popover="manual"
data-state=${e}
aria-hidden="true"
></div>
<div
part="content"
class="content small"
popover="manual"
role="alertdialog"
aria-modal="true"
aria-labelledby=${n?`title`:A}
aria-label=${n?A:this.aria.label??A}
aria-describedby=${r?`description`:A}
tabindex="-1"
data-state=${e}
>
${r?j`<p id="description" class="description" part="description">
${r}
</p>`:A}
${n?j`<div id="title" class="header" part="header">
<slot name="header">${this.label}</slot>
</div>`:A}
<div class="body" part="body">
${this.slots.test(`[default]`)?j`<slot></slot>`:A}
</div>
<div class="footer" part="footer">
<minerva-button
part="cancel-button"
type="button"
color="neutral"
variant="outline"
?disabled=${i}
@click=${()=>this.requestClose(`cancel-button`)}
>${this.cancelLabel??t(`confirm.cancel`)}</minerva-button
>
<minerva-button
part="confirm-button"
type="button"
color=${this.color}
variant="solid"
?loading=${i}
?disabled=${this.confirmDisabled}
@click=${()=>void this.handleConfirm()}
>${this.confirmLabel??(this.color===`danger`?t(`confirm.delete`):t(`confirm.confirm`))}</minerva-button
>
</div>
<button
type="button"
class="close"
part="close-button"
aria-label=${this.closeLabel??t(`modal.close`)}
@click=${()=>this.requestClose(`close-button`)}
>
${Ie}
</button>
</div>`}},I([M({type:Boolean,reflect:!0})],K.prototype,`open`,void 0),I([M()],K.prototype,`label`,void 0),I([M()],K.prototype,`description`,void 0),I([M({attribute:`confirm-label`})],K.prototype,`confirmLabel`,void 0),I([M({attribute:`cancel-label`})],K.prototype,`cancelLabel`,void 0),I([M({attribute:`close-label`})],K.prototype,`closeLabel`,void 0),I([M({reflect:!0})],K.prototype,`color`,void 0),I([M({type:Boolean,reflect:!0})],K.prototype,`loading`,void 0),I([M({type:Boolean,reflect:!0,attribute:`confirm-disabled`})],K.prototype,`confirmDisabled`,void 0),I([M({attribute:!1})],K.prototype,`onConfirm`,void 0),I([T()],K.prototype,`busy`,void 0),I([D(`.content`)],K.prototype,`panel`,void 0),I([D(`.overlay`)],K.prototype,`overlay`,void 0)})))()}function Ei(e){let t=zt(e,ji);if(!t)return null;let n=e.ownerDocument;return t===n.documentElement||t===n.body?null:t}function Di(e,t){for(let n=e;n;n=Ae(n))if(n===t)return!0;return!1}function Oi(e){return Ni.push(e),()=>{let t=Ni.lastIndexOf(e);t>=0&&Ni.splice(t,1)}}function ki(e){let t=e?.isConnected===!0?zt(e,Fi):null;if(t&&`confirmQueue`in t)return t.confirmQueue;let n=Ni[Ni.length-1];return n?n.confirmQueue:(Pi??=new Mi(()=>document.body),Pi)}function Ai(e){return t=>Li({...t,host:t.host??e})}var ji,Mi,Ni,Pi,Fi,Ii,Li;function Ri(){return(Ri=e((()=>{g(),c(),w(),it(),Ti(),ji=`minerva-config:not([root]), [data-minerva-theme-scope], [data-theme], [data-palette]`,Mi=class{constructor(e){this.defaultContainer=e,this.requests=[],this.current=null,this.settles=new Set}enqueue(e){return Ve(K),new Promise(t=>{this.requests.push({options:e,resolve:t}),this.current||this.showNext()})}cancelAll(){let e=this.requests.splice(0);for(let t of e)t.resolve(!1);for(let e of[...this.settles])e(!1);this.current?.remove()}container(e){let t=typeof document>`u`?null:document,n=e.container;if(n)return n.isConnected?n:(v&&f(K.tagName,"confirm(): `container` is not connected to the document; the dialog is appended to document.body instead."),t.body);let r=e.host?.isConnected===!0?Ei(e.host):null,i=this.defaultContainer();return r&&!Di(i,r)?r:i}showNext(){let e=this.requests.shift();if(!e){this.current=null;return}let{options:t,resolve:n}=e,r=this.container(t),i=document.createElement(K.tagName);i.label=t.title,t.description&&(i.description=t.description),t.confirmLabel&&(i.confirmLabel=t.confirmLabel),t.cancelLabel&&(i.cancelLabel=t.cancelLabel),t.closeLabel&&(i.closeLabel=t.closeLabel),t.color&&(i.color=t.color);let a=t.host;if(a?.isConnected&&!t.container){let e=It(a);e!==It(r)&&i.setAttribute(`lang`,e)}let o=!1,s=!1,c=e=>{o||(o=!0,this.settles.delete(c),n(e))};this.settles.add(c);let ee=new MutationObserver(()=>{i.isConnected||te()}),te=()=>{s||(s=!0,ee.disconnect(),c(!1),i.remove(),this.showNext())};i.addEventListener(`minerva-open-change`,e=>{let{open:t,reason:n}=e.detail;queueMicrotask(()=>{!t&&!e.defaultPrevented&&c(n===`confirm`)})}),i.addEventListener(`minerva-after-close`,te,{once:!0}),this.current=i,r.append(i),ee.observe(document,{childList:!0,subtree:!0}),i.open=!0}},Ni=[],Pi=null,Fi=`minerva-confirm-provider`,Ii=()=>(v&&f(K.tagName,`confirm() called without a document (server render): resolving false.`),Promise.resolve(!1)),Li=e=>typeof document>`u`?Ii():ki(e.host).enqueue(e)})))()}var zi;function Bi(){return(Bi=e((()=>{y(),Ti(),Ri(),N(),zi=class extends m{constructor(...e){super(...e),this.confirmQueue=new Mi(()=>this),this.unregister=null,this.confirm=e=>this.confirmQueue.enqueue(e)}static{this.tagName=`minerva-confirm-provider`}static{this.dependencies=[K]}static{this.styles=k`
:host{
display: contents;
}
`}connectedCallback(){super.connectedCallback(),this.unregister=Oi(this)}disconnectedCallback(){super.disconnectedCallback(),this.unregister?.(),this.unregister=null,this.confirmQueue.cancelAll()}render(){return j`<slot></slot>`}}})))()}var Vi,Hi,Ui,q,Wi;function Gi(){return(Gi=e((()=>{l(),g(),d(),w(),gt(),y(),x(),we(),be(),_r(),N(),O(),E(),Ln(),on(),Fn(),Yn(),Vi=e=>e===void 0?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Hi={ascend:`ascending`,descend:`descending`},Ui=48,q=class e extends m{constructor(...e){super(...e),this.columns=[],this.rows=[],this.loading=!1,this.loadingRows=5,this.sortState=null,this.manualSort=!1,this.selectable=!1,this.selectedRowKeys=[],this.size=`medium`,this.variant=`simple`,this.hoverable=!1,this.retryable=!1,this.overflowing=!1,this.aria=new u(this),this.locale=new p(this),this.resize=null,this.handlePageChange=e=>{let{page:t,pageSize:n}=e.detail;queueMicrotask(()=>{e.defaultPrevented||(this.pagination={...this.pagination,current:t,pageSize:n})})}}static{this.tagName=`minerva-data-table`}static{this.dependencies=[ur]}static{this.styles=[h,k`
:host{
display: block;
min-width: 0;
}
.retry{
align-self: center;
}
.sortIcon{
display: inline-flex;
}
`,C(Be),C(dt)]}disconnectedCallback(){super.disconnectedCallback(),this.resize?.disconnect(),this.resize=null}keyOf(e,t){let n=this.rowKey;return typeof n==`function`?n(e,t):typeof n==`string`&&n?e[n]:t}entries(){return(this.rows??[]).map((e,t)=>({row:e,index:t,key:this.keyOf(e,t)}))}rowDisabled(e){return!!this.isRowDisabled?.(e)}willUpdate(t){if(v&&(t.has(`rows`)||t.has(`rowKey`))){let t=this.entries().map(e=>e.key);new Set(t).size!==t.length&&f(e.tagName,`rows have duplicate keys: set row-key to a unique field (or a function).`)}}updated(){this.observeOverflow();let e=this.shadowRoot?.querySelector(`minerva-pagination`);e&&this.pagination&&Object.assign(e,this.pagination)}observeOverflow(){let e=this.wrapper;if(!e){this.resize?.disconnect(),this.resize=null;return}let t=()=>{let t=e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight;t!==this.overflowing&&(this.overflowing=t)};t(),!this.resize&&typeof ResizeObserver<`u`&&(this.resize=new ResizeObserver(t),this.resize.observe(e),e.firstElementChild&&this.resize.observe(e.firstElementChild))}changeSort(e){let t=Kt(this.sortState,e);this.emit(`minerva-sort-change`,t,{cancelable:!0})&&(this.sortState=t)}commitSelection(e){let t=new Set(e),n={selectedRowKeys:e,selectedRows:this.entries().filter(e=>t.has(e.key)).map(e=>e.row)};if(!this.emit(`minerva-selection-change`,n,{cancelable:!0})){this.requestUpdate();return}this.selectedRowKeys=e}toggleRow(e,t){let n=this.selectedRowKeys;this.commitSelection(t?[...n.filter(t=>t!==e),e]:n.filter(t=>t!==e))}renderTable(){let e=this.columns??[],t=this.locale.t,n=jn(e),r=this.selectable,i=r&&e[0]?.fixed===`left`,a=i?Ui:0,o=this.entries(),s=this.sortState,c=s?.order??null,ee=c===null?void 0:e.find(e=>e.key===s?.key),te=ee?Zt(ee):null,l=!this.manualSort&&te?[...o].sort((e,t)=>c===`descend`?te(t.row,e.row):te(e.row,t.row)):o,ne=new Set(this.selectedRowKeys),re=o.filter(e=>!this.rowDisabled(e.row)),ie=re.length>0&&re.every(e=>ne.has(e.key)),ae=!ie&&o.some(e=>ne.has(e.key)),oe=()=>{let e=new Set(re.map(e=>e.key)),t=this.selectedRowKeys;this.commitSelection(ie?t.filter(t=>!e.has(t)):[...t,...re.map(e=>e.key).filter(e=>!ne.has(e))])},se=e=>{let t={textAlign:e.align},r=Vi(e.width);return r!==void 0&&(t.width=r,t.minWidth=r),e.fixed===`left`?t.left=`${(n.leftOffsets[e.key]??0)+a}px`:e.fixed===`right`&&(t.right=`${n.rightOffsets[e.key]??0}px`),t},ce=e=>e.fixed===`left`&&e.key===n.lastLeftFixedKey?`left`:e.fixed===`right`&&e.key===n.firstRightFixedKey?`right`:A,le=P({width:`${Ui}px`,minWidth:`${Ui}px`,...i?{left:`0px`}:{}}),ue=i?`left`:A,de=e.length+ +!!r,fe=e=>{if(!e.sortable)return j`<th
part="header-cell"
scope="col"
style=${P(se(e))}
data-ellipsis=${e.ellipsis?`true`:A}
data-fixed=${e.fixed??A}
data-fixed-edge=${ce(e)}
>
${e.header}
</th>`;let t=s?.key===e.key?s.order:null,n=t===`ascend`?Re:t===`descend`?Wt:Tt,r=t?Hi[t]:`none`;return j`<th
part=${ct(`header-cell`,{sort:r})}
scope="col"
aria-sort=${r}
data-sort=${r}
style=${P(se(e))}
data-ellipsis=${e.ellipsis?`true`:A}
data-fixed=${e.fixed??A}
data-fixed-edge=${ce(e)}
>
<button
type="button"
part="sort-button"
class="sortButton"
@click=${()=>this.changeSort(e.key)}
>
<span class="sortLabel">${e.header}</span
><span class="sortIcon" aria-hidden="true">${n}</span>
</button>
</th>`},pe;pe=this.loading?Array.from({length:this.loadingRows},()=>j`<tr part="row" aria-hidden="true">
${r?j`<td
part="cell"
class="selectionCell"
style=${le}
data-fixed=${ue}
></td>`:A}
${e.map(e=>j`<td
part="cell"
style=${P(se(e))}
data-fixed=${e.fixed??A}
data-fixed-edge=${ce(e)}
>
<span part="skeleton" class="skeleton"></span>
</td>`)}
</tr>`):o.length===0?j`<tr part="row">
<td part="empty" colspan=${de} class="empty">
<slot name="empty">${this.emptyText??t(`table.empty`)}</slot>
</td>
</tr>`:zn(l,e=>e.key,({row:n,index:i,key:a},o)=>{let s=r&&ne.has(a);return j`<tr
part=${ct(`row`,{selected:s})}
aria-selected=${s?`true`:A}
?data-selected=${s}
>
${r?j`<td
part="cell"
class="selectionCell"
style=${le}
data-fixed=${ue}
>
<input
type="checkbox"
part="checkbox"
class="checkbox"
.checked=${Xn(s)}
?disabled=${this.rowDisabled(n)}
aria-label=${t(`table.selectRow`,{row:this.getRowLabel?.(n,i)??String(a)})}
@change=${e=>this.toggleRow(a,e.target.checked)}
/>
</td>`:A}
${e.map(e=>j`<td
part="cell"
style=${P(se(e))}
data-ellipsis=${e.ellipsis?`true`:A}
data-fixed=${e.fixed??A}
data-fixed-edge=${ce(e)}
>
${e.render?e.render(n,o):n[e.key]}
</td>`)}
</tr>`});let me=Vi(this.scrollX),he=Vi(this.scrollY),ge=!!(me||he)||this.overflowing,_e=this.aria.label;return j`<div
part="viewport"
class=${F({wrapper:!0,wrapperBordered:this.variant===`bordered`,wrapperScrollY:!!he})}
role=${ge?`region`:A}
tabindex=${ge?0:A}
aria-label=${ge?_e??t(`table.scrollRegion`):A}
style=${P(he?{maxHeight:he,overflowY:`auto`}:{})}
>
<table
part="table"
class=${F({table:!0,[this.size]:!0,[this.variant]:!0,hoverable:this.hoverable,scrollX:!!me})}
style=${P(me?{minWidth:me}:{})}
aria-label=${_e??A}
aria-description=${this.aria.description??A}
>
<thead>
<tr part="row">
${r?j`<th
part="header-cell"
scope="col"
class="selectionCell"
style=${le}
data-fixed=${ue}
>
<input
type="checkbox"
part="checkbox"
class="checkbox"
.checked=${Xn(ie)}
.indeterminate=${ae}
?disabled=${re.length===0||this.loading}
aria-label=${t(`table.selectAll`)}
@change=${oe}
/>
</th>`:A}
${e.map(fe)}
</tr>
</thead>
<tbody>
${pe}
</tbody>
</table>
</div>`}hookStates(){return{loading:this.loading,size:this.size,variant:this.variant}}render(){let e=!!this.error&&!this.loading;return j`<div
part="root"
class="dataTable"
aria-busy=${this.loading?`true`:A}
>
${e?j`<div part="error" class="error" role="alert">
<div class="errorTitle">
<slot name="error">${this.error}</slot>
</div>
${this.retryable?j`<button
type="button"
part="retry-button"
class="customButton neutral variant-outline small retry"
@click=${()=>this.emit(`minerva-retry`)}
>
<span class="label"
><span class="retryIcon" aria-hidden="true"
>${he}</span
>${this.retryLabel??this.locale.t(`table.retry`)}</span
>
</button>`:A}
</div>`:j`${this.renderTable()}
${this.pagination?j`<minerva-pagination
part="pagination"
exportparts="root: pagination-root, item: pagination-item"
@minerva-page-change=${this.handlePageChange}
></minerva-pagination>`:A}`}
</div>`}},I([M({attribute:!1})],q.prototype,`columns`,void 0),I([M({attribute:!1})],q.prototype,`rows`,void 0),I([M({attribute:`row-key`})],q.prototype,`rowKey`,void 0),I([M({attribute:`empty-text`})],q.prototype,`emptyText`,void 0),I([M({type:Boolean,reflect:!0})],q.prototype,`loading`,void 0),I([M({type:Number,attribute:`loading-rows`})],q.prototype,`loadingRows`,void 0),I([M({attribute:!1})],q.prototype,`sortState`,void 0),I([M({type:Boolean,attribute:`manual-sort`})],q.prototype,`manualSort`,void 0),I([M({type:Boolean,reflect:!0})],q.prototype,`selectable`,void 0),I([M({attribute:!1})],q.prototype,`selectedRowKeys`,void 0),I([M({attribute:!1})],q.prototype,`isRowDisabled`,void 0),I([M({attribute:!1})],q.prototype,`getRowLabel`,void 0),I([M({reflect:!0})],q.prototype,`size`,void 0),I([M({reflect:!0})],q.prototype,`variant`,void 0),I([M({type:Boolean,reflect:!0})],q.prototype,`hoverable`,void 0),I([M({attribute:`scroll-x`})],q.prototype,`scrollX`,void 0),I([M({attribute:`scroll-y`})],q.prototype,`scrollY`,void 0),I([M({attribute:!1})],q.prototype,`pagination`,void 0),I([M()],q.prototype,`error`,void 0),I([M({type:Boolean})],q.prototype,`retryable`,void 0),I([M({attribute:`retry-label`})],q.prototype,`retryLabel`,void 0),I([T()],q.prototype,`overflowing`,void 0),I([D(`.wrapper`)],q.prototype,`wrapper`,void 0),Wi=class extends m{constructor(...e){super(...e),this.primary=``,this.monospace=!1,this.maxWidth=360,this.observer=null}static{this.tagName=`minerva-table-cell-content`}static{this.styles=[h,k`
:host{
display: block;
min-width: 0;
}
`,C(dt)]}hasSecondarySlot(){return Array.from(this.children).some(e=>e.getAttribute(`slot`)===`secondary`)}connectedCallback(){super.connectedCallback(),this.observer??=typeof MutationObserver>`u`?null:new MutationObserver(()=>this.requestUpdate()),this.observer?.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}render(){let e=this.secondary!==void 0&&this.secondary!==null||this.hasSecondarySlot(),t=F({cellPrimary:!0,cellMono:this.monospace,cellStrong:e}),n=j`<slot>${this.primary}</slot>`;return j`<div
part="root"
class="cellContent"
style=${P({maxWidth:Vi(this.maxWidth)})}
>
${this.monospace?j`<code part="primary" class=${t}>${n}</code>`:j`<div part="primary" class=${t}>${n}</div>`}
${e?j`<div part="secondary" class="cellSecondary">
<slot name="secondary">${this.secondary}</slot>
</div>`:A}
</div>`}},I([M()],Wi.prototype,`primary`,void 0),I([M()],Wi.prototype,`secondary`,void 0),I([M({type:Boolean,reflect:!0})],Wi.prototype,`monospace`,void 0),I([M({attribute:`max-width`})],Wi.prototype,`maxWidth`,void 0)})))()}var Ki,qi;function Ji(){return(Ji=e((()=>{g(),y(),x(),a(),N(),O(),E(),Ki=class extends m{constructor(...e){super(...e),this.label=``}static{this.tagName=`minerva-description-item`}static{this.styles=[h,k`
:host{
display: contents;
}
`]}render(){return j`<slot></slot>`}},I([M({reflect:!0})],Ki.prototype,`label`,void 0),qi=class e extends m{constructor(...e){super(...e),this.items=[],this.bordered=!1,this.striped=!1,this.observer=null}static{this.tagName=`minerva-description-list`}static{this.dependencies=[Ki]}static{this.shadowRootOptions={...m.shadowRootOptions,slotAssignment:`manual`}}static{this.styles=[h,k`
:host{
display: block;
}
`,C(ft)]}declarativeItems(){return Array.from(this.children).filter(e=>e.localName===Ki.tagName)}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.requestUpdate()),this.observer.observe(this,{childList:!0,attributes:!0,subtree:!0,attributeFilter:[`label`]}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null}updated(){let t=this.declarativeItems();if(Array.from(this.renderRoot.querySelectorAll(`slot[data-item]`)).forEach((e,n)=>{let r=t[n];r&&typeof e.assign==`function`&&e.assign(r)}),v){let t=Array.from(this.children).filter(e=>e.localName!==Ki.tagName);t.length&&f(e.tagName,`only <minerva-description-item> children are rendered (ignored: <${t[0].localName}>).`)}}render(){let e=this.declarativeItems();return j`<dl
part="root"
class=${F({descriptionList:!0,bordered:this.bordered,striped:this.striped})}
>
${(this.items??[]).map(e=>j`<div part="row" class="row">
<dt part="term">${e.label}</dt>
<dd part="description">${e.value}</dd>
</div>`)}
${e.map(e=>j`<div part="row" class="row">
<dt part="term">${e.label}</dt>
<dd part="description"><slot data-item></slot></dd>
</div>`)}
</dl>`}},I([M({attribute:!1})],qi.prototype,`items`,void 0),I([M({type:Boolean,reflect:!0})],qi.prototype,`bordered`,void 0),I([M({type:Boolean,reflect:!0})],qi.prototype,`striped`,void 0)})))()}var Yi,Xi;function Zi(){return(Zi=e((()=>{g(),y(),b(),x(),Ce(),N(),O(),E(),Ln(),Yi=e=>typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Xi=class e extends m{constructor(...e){super(...e),this.variant=`solid`,this.orientation=`horizontal`,this.thickness=1,this.spacing=16,this.textAlign=`center`,this.elevation=!1,this.flexItem=!1,this.slots=new _(this)}static{this.tagName=`minerva-divider`}static{this.styles=[h,k`
:host{
display: block;
}
:host([orientation="vertical"]){
display: inline-flex;
vertical-align: middle;
}
:host([orientation="vertical"][flex-item]){
align-self: stretch;
}
`,C(ne)]}hookStates(){let e=this.orientation===`horizontal`&&this.slots.test(`[default]`);return{orientation:this.orientation,variant:this.variant,align:e?this.textAlign:void 0}}updated(){v&&this.orientation===`vertical`&&this.slots.test(`[default]`)&&f(e.tagName,`text is only rendered by horizontal dividers; it is ignored when orientation is vertical.`)}render(){let e=this.orientation===`horizontal`,t=e&&this.slots.test(`[default]`),n=this.textAlign,r={};if(this.thickness!=null&&!Number.isNaN(this.thickness)&&(r.borderWidth=`${this.thickness}px`),this.length!=null&&this.length!==``&&(r[e?`width`:`height`]=Yi(this.length)),this.spacing!=null&&!Number.isNaN(this.spacing)){let t=`${this.spacing}px`;r.marginTop=e?t:`0`,r.marginBottom=e?t:`0`,r.marginLeft=e?`0`:t,r.marginRight=e?`0`:t}let i=F({divider:!0,[this.variant]:!0,[this.orientation]:!0,withText:t,[`text${n.charAt(0).toUpperCase()}${n.slice(1)}`]:t,elevation:this.elevation,flexItem:this.flexItem});return t?j`<div
part="root"
role="separator"
aria-orientation=${this.orientation}
class=${i}
style=${P(r)}
>
<span class="text" part="label"><slot></slot></span>
</div>`:j`<hr
part="root"
aria-orientation=${this.orientation}
class=${i}
style=${P(r)}
/>`}},I([M({reflect:!0})],Xi.prototype,`variant`,void 0),I([M({reflect:!0})],Xi.prototype,`orientation`,void 0),I([M({type:Number})],Xi.prototype,`thickness`,void 0),I([M()],Xi.prototype,`length`,void 0),I([M({type:Number})],Xi.prototype,`spacing`,void 0),I([M({attribute:`text-align`})],Xi.prototype,`textAlign`,void 0),I([M({type:Boolean,reflect:!0})],Xi.prototype,`elevation`,void 0),I([M({type:Boolean,reflect:!0,attribute:`flex-item`})],Xi.prototype,`flexItem`,void 0)})))()}var Qi,J;function $i(){return($i=e((()=>{l(),g(),d(),c(),w(),y(),b(),x(),nr(),tr(),cr(),sr(),se(),ae(),N(),O(),E(),Qi=[`left`,`right`,`top`,`bottom`],J=class e extends m{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.side=`right`,this.size=`medium`,this.hideCloseButton=!1,this.dialogRole=`dialog`,this.nonModal=!1,this.locale=new p(this),this.aria=new u(this),this.slots=new _(this),this.presence=new fe(this,()=>this.panel),this.modal=new $n(this),this.focusScope=new or(this,()=>({trapped:!this.nonModal,loop:!0,restoreFocus:!0})),this.layer=new Qn(this,()=>({disableOutsidePointerEvents:!this.nonModal,branches:()=>[this.triggerElement()],onFocusOutside:()=>this.nonModal,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleClick=e=>{if(e.defaultPrevented)return;let t=e.composedPath(),n=this.triggerElement();if(n&&t.includes(n)){this.requestOpenChange(!this.open,`trigger`);return}let r=t.find(e=>e instanceof Element&&e.hasAttribute(`data-drawer-close`));r&&this.contains(r)&&this.requestOpenChange(!1,`close-slot`)}}static{this.tagName=`minerva-drawer`}static{this.styles=[h,er,k`
:host{
display: contents;
}
`,C(je)]}show(){this.open=!0}hide(){this.open=!1}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleClick)}willUpdate(t){t.has(`open`)&&this.presence.sync(this.open),v&&t.has(`side`)&&!Qi.includes(this.side)&&f(e.tagName,`invalid side "${this.side}" (expected left, right, top or bottom).`)}hookStates(){return{state:this.open?`open`:`closed`,side:Qi.includes(this.side)?this.side:`right`,size:this.size}}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)||e.has(`nonModal`)&&this.open){let t=this.panel;this.open&&t?(e.has(`nonModal`)&&!e.has(`open`)&&(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate()),De(this.overlay),De(t),this.nonModal||this.modal.activate(this),this.layer.activate(t),this.focusScope.activate(t),e.has(`open`)&&this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleClick),S(this.panel),S(this.overlay)}afterClose(){S(this.panel),S(this.overlay),this.emit(`minerva-after-close`)}render(){let e=this.open||this.presence.present,t=this.open?`open`:`closed`,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description,i=Qi.includes(this.side)?this.side:`right`;return j`<slot name="trigger"></slot> ${e?j`${this.nonModal?A:j`<div
part="overlay"
class="overlay"
popover="manual"
data-state=${t}
aria-hidden="true"
></div>`}
<div
part="content"
class=${F({content:!0,[i]:!0,[this.size]:!0})}
popover="manual"
role=${this.dialogRole}
aria-modal=${this.nonModal?A:`true`}
aria-labelledby=${n?`title`:A}
aria-label=${n?A:this.aria.label??A}
aria-describedby="description"
tabindex="-1"
data-state=${t}
>
<p
id="description"
part="description"
class=${r?`description`:`visuallyHidden`}
>
${r||this.hiddenDescription||this.locale.t(`drawer.description`)}
</p>
${n?j`<div id="title" class="header" part="header">
<slot name="header">${this.label}</slot>
</div>`:A}
<div class="body" part="body"><slot></slot></div>
${this.slots.test(`footer`)?j`<div class="footer" part="footer">
<slot name="footer"></slot>
</div>`:A}
${this.hideCloseButton?A:j`<button
type="button"
class="close"
part="close-button"
aria-label=${this.closeLabel??this.locale.t(`drawer.close`)}
@click=${()=>this.requestOpenChange(!1,`close-button`)}
>
${Ie}
</button>`}
</div>`:A}`}},I([M({type:Boolean,reflect:!0})],J.prototype,`open`,void 0),I([M()],J.prototype,`label`,void 0),I([M()],J.prototype,`description`,void 0),I([M({attribute:`hidden-description`})],J.prototype,`hiddenDescription`,void 0),I([M({reflect:!0})],J.prototype,`side`,void 0),I([M({reflect:!0})],J.prototype,`size`,void 0),I([M({type:Boolean,attribute:`hide-close-button`})],J.prototype,`hideCloseButton`,void 0),I([M({attribute:`close-label`})],J.prototype,`closeLabel`,void 0),I([M({attribute:`dialog-role`})],J.prototype,`dialogRole`,void 0),I([M({type:Boolean,reflect:!0,attribute:`non-modal`})],J.prototype,`nonModal`,void 0),I([D(`.content`)],J.prototype,`panel`,void 0),I([D(`.overlay`)],J.prototype,`overlay`,void 0)})))()}var ea,ta,na,ra;function ia(){return(ia=e((()=>{l(),g(),w(),y(),b(),x(),Bt(),N(),O(),E(),Ln(),ea=Zn`<svg class="defaultIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none" aria-hidden="true" focusable="false"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM5 5v9h4a3 3 0 0 0 6 0h4V5ZM5 16v3h14v-3h-2.54a5 5 0 0 1-8.92 0Z" /></svg>`,ta=Zn`<svg class="defaultIcon" aria-hidden="true" focusable="false" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse style="fill: var(--surface-muted-color)" cx="32" cy="33" rx="32" ry="7" /><g fill-rule="nonzero" style="stroke: var(--border-strong-color)"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" /><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" style="fill: var(--surface-color)" /></g></g></svg>`,na=e=>e&&/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,ra=class e extends m{constructor(...e){super(...e),this.heading=``,this.hideDescription=!1,this.hideIcon=!1,this.useSvg=!1,this.showShadow=!1,this.locale=new p(this),this.aria=new u(this),this.slots=new _(this)}static{this.tagName=`minerva-empty`}static{this.styles=[h,k`
:host{
display: block;
}
`,C(ee)]}hookStates(){return{size:this.size}}updated(){v&&this.hideDescription&&this.description&&f(e.tagName,`description is ignored while hide-description is set.`)}render(){let e=!!this.heading||this.slots.test(`heading`),t=this.slots.test(`description`),n=this.description??this.locale.t(`empty.description`),r=!this.hideDescription&&(t||n!==``),i=this.slots.test(`action`)||this.slots.test(`secondary-action`),a=this.aria.label;return j`<div
part="root"
class=${F({empty:!0,showShadow:this.showShadow,sized:!!this.size,[`size-${this.size}`]:!!this.size})}
style=${P({width:na(this.width),height:na(this.height)})}
role="status"
aria-label=${a??A}
aria-labelledby=${a?A:e?`title`:r?`description`:A}
aria-describedby=${e&&r?`description`:A}
>
${this.hideIcon?A:j`<div part="icon" class="iconWrapper">
<slot name="icon">${this.useSvg?ta:ea}</slot>
</div>`}
${e?j`<div id="title" part="title" class="title">
<slot name="heading">${this.heading}</slot>
</div>`:A}
${r?j`<div id="description" part="description" class="description">
<slot name="description">${n}</slot>
</div>`:A}
${i?j`<div part="actions" class="actions">
<slot name="action"></slot><slot name="secondary-action"></slot>
</div>`:A}
${this.slots.test(`[default]`)?j`<div part="footer" class="footer"><slot></slot></div>`:A}
</div>`}},I([M()],ra.prototype,`heading`,void 0),I([M()],ra.prototype,`description`,void 0),I([M({type:Boolean,attribute:`hide-description`})],ra.prototype,`hideDescription`,void 0),I([M({type:Boolean,attribute:`hide-icon`})],ra.prototype,`hideIcon`,void 0),I([M({reflect:!0})],ra.prototype,`size`,void 0),I([M({type:Boolean,attribute:`use-svg`})],ra.prototype,`useSvg`,void 0),I([M()],ra.prototype,`width`,void 0),I([M()],ra.prototype,`height`,void 0),I([M({type:Boolean,attribute:`show-shadow`})],ra.prototype,`showShadow`,void 0)})))()}var aa,oa;function sa(){return(sa=e((()=>{g(),y(),b(),x(),Oe(),N(),O(),aa=e=>e.localName===`minerva-checkbox`||e.localName===`minerva-switch`||e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`),oa=class e extends m{constructor(...e){super(...e),this.label=``,this.helperText=``,this.errorMessage=``,this.invalid=!1,this.required=!1,this.disabled=!1,this.readOnly=!1,this.requiredIndicator=`*`,this.slots=new _(this),this.observer=null,this.control=null,this.saved=new Map}static{this.tagName=`minerva-form-control`}static{this.styles=[h,k`
:host{
display: block;
}
.label{
cursor: default;
}
`,C(Ht)]}get controlElement(){return Array.from(this.children).find(e=>!e.hasAttribute(`slot`))??null}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.sync()),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.release()}updated(){this.sync()}get labelText(){return this.label?this.label:Array.from(this.children).filter(e=>e.getAttribute(`slot`)===`label`).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `)}slotText(e){return Array.from(this.children).filter(t=>t.getAttribute(`slot`)===e).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `)}get descriptionText(){return this.invalid?this.errorMessage||this.slotText(`error-message`):this.helperText||this.slotText(`helper-text`)}save(e,t){this.saved.has(e)||this.saved.set(e,t)}setAttr(e,t,n){let r=`@${t}`;if(n===null){if(!this.saved.has(r))return;let n=this.saved.get(r);this.saved.delete(r),n===null?e.removeAttribute(t):e.setAttribute(t,n);return}this.save(r,e.getAttribute(t)),e.getAttribute(t)!==n&&e.setAttribute(t,n)}setProp(e,t,n){let r=`.${t}`;if(!n){if(!this.saved.has(r))return;e[t]=this.saved.get(r),this.saved.delete(r);return}this.save(r,e[t]),e[t]=!0}propFor(e,t){return{invalid:[`invalid`,`error`],required:[`required`],disabled:[`disabled`],readOnly:[`readOnly`,`readonly`]}[t].find(t=>t in e&&typeof e[t]==`boolean`)??null}release(){let e=this.control;if(e){for(let[t,n]of this.saved)if(t.startsWith(`@`)){let r=t.slice(1);n===null?e.removeAttribute(r):e.setAttribute(r,n)}else e[t.slice(1)]=n;this.saved.clear(),this.control=null}}sync(){let t=this.controlElement;if(t!==this.control&&(this.release(),this.control=t),!t)return;let n=this.labelText,r=this.saved.has(`@aria-label`);n&&(r||!t.hasAttribute(`aria-label`))?this.setAttr(t,`aria-label`,n):n||this.setAttr(t,`aria-label`,null);let i=this.descriptionText;this.setAttr(t,`aria-description`,i||null);for(let e of[`invalid`,`required`,`disabled`,`readOnly`]){let n=this.propFor(t,e);n&&this.setProp(t,n,this[e])}if(this.setAttr(t,`aria-invalid`,this.invalid?`true`:null),this.setAttr(t,`aria-required`,this.required?`true`:null),this.setAttr(t,`aria-readonly`,this.readOnly?`true`:null),v&&this.children.length>0){let t=Array.from(this.children).filter(e=>!e.hasAttribute(`slot`));t.length>1&&f(e.tagName,`wraps ONE control, found ${t.length} elements in the default slot: only the first one is wired.`)}}handleLabelClick(e){let t=this.controlElement;t&&!this.disabled&&(e.preventDefault(),aa(t)?t.click():t.focus())}hookStates(){return{disabled:this.disabled,invalid:this.invalid,readonly:this.readOnly,required:this.required}}render(){let e=!!this.label||this.slots.test(`label`),t=!!this.helperText||this.slots.test(`helper-text`),n=!!this.errorMessage||this.slots.test(`error-message`);return j`<div class="root" part="root">
${e?j`<label
id="label"
class="label"
part="label"
@click=${this.handleLabelClick}
>${this.label||j`<slot name="label"></slot>`}${this.required?j`<span
class="required"
part="required-indicator"
aria-hidden="true"
>${this.requiredIndicator}</span
>`:A}</label
>`:A}
<slot @slotchange=${()=>this.sync()}></slot>
${!this.invalid&&t?j`<div id="helper" class="helper" part="helper-text">
${this.helperText||j`<slot name="helper-text"></slot>`}
</div>`:A}
${this.invalid&&n?j`<div
id="error"
class="error"
part="error-message"
role="alert"
>
${this.errorMessage||j`<slot name="error-message"></slot>`}
</div>`:A}
</div>`}},I([M()],oa.prototype,`label`,void 0),I([M({attribute:`helper-text`})],oa.prototype,`helperText`,void 0),I([M({attribute:`error-message`})],oa.prototype,`errorMessage`,void 0),I([M({type:Boolean,reflect:!0})],oa.prototype,`invalid`,void 0),I([M({type:Boolean,reflect:!0})],oa.prototype,`required`,void 0),I([M({type:Boolean,reflect:!0})],oa.prototype,`disabled`,void 0),I([M({type:Boolean,reflect:!0,attribute:`readonly`})],oa.prototype,`readOnly`,void 0),I([M({attribute:`required-indicator`})],oa.prototype,`requiredIndicator`,void 0)})))()}var ca;function la(){return(la=e((()=>{y(),x(),zr(),qe(),Lt(),fr(),N(),O(),Ln(),ca=class e extends m{constructor(...e){super(...e),this.columns=1,this.gap=4}static{this.tagName=`minerva-form-layout`}static{this.styles=[h,k`
:host{
display: block;
min-width: 0;
}
.layout ::slotted(*){
min-width: 0;
}
`,C(Ut),C(Ue)]}render(){let t=dr(e.tagName,this.columns,this.rowGap??this.gap,this.columnGap??this.gap);return j`<div class="root" part="root" style=${P(t)}>
<div class="layout" part="layout"><slot></slot></div>
</div>`}},I([M({converter:hr})],ca.prototype,`columns`,void 0),I([M({converter:Rr})],ca.prototype,`gap`,void 0),I([M({attribute:`row-gap`,converter:Rr})],ca.prototype,`rowGap`,void 0),I([M({attribute:`column-gap`,converter:Rr})],ca.prototype,`columnGap`,void 0)})))()}function ua(e){let t=``;if(e&&typeof window<`u`){let n=Un(window);n.isSupported&&(n.addHook(`uponSanitizeAttribute`,(e,t)=>{t.attrName===`src`&&(e.nodeName!==`IMG`||!/^data:image\/(?:png|jpeg|gif|webp|avif);base64,[a-z0-9+/=\s]+$/i.test(t.attrValue))&&(t.keepAttr=!1)}),n.sanitize(pa,fa)===ma&&(t=n.sanitize(e,fa)))}return`<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="${da}"><meta name="referrer" content="no-referrer"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>${t}</body></html>`}var da,fa,pa,ma;function ha(){return(ha=e((()=>{Rn(),da=`default-src 'none'; script-src 'none'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'; object-src 'none'; frame-src 'none'; font-src 'none'; media-src 'none'; form-action 'none'; base-uri 'none'`,fa={ALLOWED_TAGS:`a abbr b bdi bdo blockquote br caption center code col colgroup dd del div dl dt em figcaption figure h1 h2 h3 h4 h5 h6 hr i img ins li ol p pre s section small span strong style sub sup table tbody td tfoot th thead tr u ul wbr`.split(` `),ALLOWED_ATTR:`alt title class style lang dir role width height align valign bgcolor border cellpadding cellspacing colspan rowspan scope src`.split(` `),ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!0,FORBID_TAGS:[`base`,`meta`,`link`,`script`,`form`,`input`,`button`,`iframe`,`object`,`embed`,`svg`,`math`],FORBID_ATTR:[`href`,`srcdoc`,`srcset`,`action`,`formaction`,`target`,`ping`,`id`,`name`],FORCE_BODY:!0,RETURN_TRUSTED_TYPE:!1},pa=`<p title="t" onclick="x()">ok</p><script>x()<\/script><img alt="a" src="https://x.invalid/p" onerror="x()">`,ma=`<p title="t">ok</p><img alt="a">`})))()}var ga;function _a(){return(_a=e((()=>{l(),g(),y(),x(),ot(),ha(),N(),O(),Ln(),In(),ga=class e extends m{constructor(...e){super(...e),this.html=``,this.label=``,this.viewport=`desktop`,this.mobileWidth=375,this.height=600,this.doc=ua(),this.aria=new u(this)}static{this.tagName=`minerva-html-preview`}static{this.styles=[h,k`
:host{
display: block;
}
`,C(lt)]}willUpdate(e){e.has(`html`)&&(this.doc=ua(this.html))}updated(){v&&!this.label&&!this.aria.label&&f(e.tagName,`set label (or aria-label): the iframe needs a title for assistive technologies.`)}render(){let e=Number.isFinite(this.mobileWidth)&&this.mobileWidth>0?this.mobileWidth:375,t=Number.isFinite(this.height)&&this.height>0?this.height:600;return j`<div part="root" class="preview">
${Gn(this.doc,j`<iframe
part="frame"
class="frame"
title=${this.label||this.aria.label||``}
sandbox=""
referrerpolicy="no-referrer"
srcdoc=${this.doc}
style=${P({width:this.viewport===`mobile`?`${e}px`:`100%`,height:`${t}px`})}
></iframe>`)}
</div>`}},I([M()],ga.prototype,`html`,void 0),I([M()],ga.prototype,`label`,void 0),I([M({reflect:!0})],ga.prototype,`viewport`,void 0),I([M({type:Number,attribute:`mobile-width`})],ga.prototype,`mobileWidth`,void 0),I([M({type:Number})],ga.prototype,`height`,void 0),I([T()],ga.prototype,`doc`,void 0)})))()}var va,ya,Y;function ba(){return(ba=e((()=>{l(),g(),d(),w(),at(),y(),x(),Ct(),cr(),_t(),N(),O(),E(),va=200,ya=300,Y=class e extends m{constructor(...e){super(...e),this.color=`neutral`,this.variant=`ghost`,this.size=`medium`,this.shape=`circle`,this.disabled=!1,this.loading=!1,this.toggle=!1,this.pressed=!1,this.tooltipPlacement=`top`,this.noTooltip=!1,this.type=`button`,this.tooltipOpen=!1,this.tooltipPositioned=!1,this.internals=He(this),this.aria=new u(this),this.locale=new p(this),this.floating=new ir(this,()=>({anchor:()=>this.button,floating:()=>this.tooltipElement,branches:()=>[this],placement:this.tooltipPlacement,offset:{mainAxis:8},dismissOnPointerDownOutside:!1,dismissOnFocusOutside:!1,onDismiss:()=>this.hideTooltip(),onPosition:()=>{this.tooltipPositioned=!0}})),this.handlePointerEnter=()=>{if(!this.tooltipEnabled||this.tooltipOpen){this.clearTimers();return}this.clearTimers(),this.enterTimer=setTimeout(()=>this.showTooltip(),va)},this.handlePointerLeave=()=>{this.clearTimers(),this.tooltipOpen&&(this.leaveTimer=setTimeout(()=>this.hideTooltip(),ya))},this.blockInactiveClicks=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-icon-button`}static{this.formAssociated=!0}static{this.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,er,k`
:host{
display: inline-flex;
vertical-align: middle;
}
.spinner{
display: inline-flex;
align-items: center;
justify-content: center;
color: currentColor;
}
.spinner svg{
animation: minerva-icon-button-spin 1s linear infinite;
}
.spinner.xsmall{
font-size: var(--progress-size,12px);
}
.spinner.small{
font-size: var(--progress-size,16px);
}
.spinner.medium{
font-size: var(--progress-size,24px);
}
.spinner.large{
font-size: var(--progress-size,32px);
}
@keyframes minerva-icon-button-spin{
to{
transform: rotate(360deg);
}
}
@media (prefers-reduced-motion: reduce){
.spinner svg{
animation: none;
}
}
`,C(nt),C(wt)]}get form(){return this.internals?.form??null}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}get tooltipContent(){return this.tooltip||this.label||void 0}get tooltipEnabled(){return!this.noTooltip&&!!this.tooltipContent&&!this.disabled&&!this.loading}clearTimers(){clearTimeout(this.enterTimer),clearTimeout(this.leaveTimer)}showTooltip(){this.tooltipEnabled&&(this.clearTimers(),this.tooltipOpen=!0)}hideTooltip(){this.clearTimers(),this.tooltipOpen=!1,this.tooltipPositioned=!1}handleClick(e){if(this.loading||this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}if(this.toggle){let e=!this.pressed;this.emit(`minerva-pressed-change`,{pressed:e},{cancelable:!0})&&(this.pressed=e)}let t=this.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockInactiveClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockInactiveClicks,!0),this.clearTimers(),this.tooltipOpen=!1}hookStates(){return{state:this.toggle&&this.pressed?`active`:`inactive`,disabled:this.disabled,loading:this.loading,size:this.size,variant:this.variant,color:this.color,shape:this.shape}}willUpdate(e){(e.has(`disabled`)||e.has(`loading`)||e.has(`noTooltip`))&&!this.tooltipEnabled&&this.hideTooltip()}updated(){this.floating.sync(this.tooltipOpen&&this.tooltipEnabled),v&&!this.label&&!this.aria.label&&f(e.tagName,`icon buttons only contain an icon: set label (or aria-label) to give them an accessible name.`)}render(){let e=this.tooltipOpen&&this.tooltipEnabled;return j`<button
part="root"
type="button"
class=${F({iconButton:!0,[this.color]:!0,[`variant-${this.variant}`]:!0,[this.size]:!0,[this.shape]:!0,disabled:this.disabled,loading:this.loading,pressed:this.toggle&&this.pressed})}
?disabled=${this.disabled}
tabindex=${this.disabled?`-1`:`0`}
aria-label=${this.label??this.aria.label??this.locale.t(`iconButton.default`)}
aria-description=${this.aria.description??A}
aria-describedby=${e?`tooltip`:A}
aria-pressed=${this.toggle?String(this.pressed):A}
aria-expanded=${this.aria.attr(`aria-expanded`)??A}
aria-haspopup=${this.aria.attr(`aria-haspopup`)??A}
aria-busy=${this.loading?`true`:A}
aria-disabled=${this.loading&&!this.disabled?`true`:A}
@click=${this.handleClick}
@mouseenter=${this.handlePointerEnter}
@mouseleave=${this.handlePointerLeave}
@focus=${()=>this.showTooltip()}
@blur=${()=>this.hideTooltip()}
>
${this.loading?j`<span
class=${F({spinner:!0,[this.size]:!0})}
part="spinner"
role="progressbar"
aria-label=${this.locale.t(`common.loading`)}
>${re}</span
>`:j`<span class="glyph" part="icon" aria-hidden="true"
><slot></slot
></span>`}
</button>
${e?j`<div
id="tooltip"
part="tooltip"
role="tooltip"
popover="manual"
class=${F({tooltip:!0,neutral:!0,solid:!0,default:!0,"animation-fade":!0,show:this.tooltipPositioned})}
@mouseenter=${()=>this.clearTimers()}
@mouseleave=${this.handlePointerLeave}
>
${this.tooltipContent}
</div>`:A}`}},I([M()],Y.prototype,`label`,void 0),I([M({reflect:!0})],Y.prototype,`color`,void 0),I([M({reflect:!0})],Y.prototype,`variant`,void 0),I([M({reflect:!0})],Y.prototype,`size`,void 0),I([M({reflect:!0})],Y.prototype,`shape`,void 0),I([M({type:Boolean,reflect:!0})],Y.prototype,`disabled`,void 0),I([M({type:Boolean,reflect:!0})],Y.prototype,`loading`,void 0),I([M({type:Boolean,reflect:!0})],Y.prototype,`toggle`,void 0),I([M({type:Boolean,reflect:!0})],Y.prototype,`pressed`,void 0),I([M()],Y.prototype,`tooltip`,void 0),I([M({attribute:`tooltip-placement`})],Y.prototype,`tooltipPlacement`,void 0),I([M({type:Boolean,attribute:`no-tooltip`})],Y.prototype,`noTooltip`,void 0),I([M({reflect:!0})],Y.prototype,`type`,void 0),I([T()],Y.prototype,`tooltipOpen`,void 0),I([T()],Y.prototype,`tooltipPositioned`,void 0),I([D(`button`)],Y.prototype,`button`,void 0),I([D(`.tooltip`)],Y.prototype,`tooltipElement`,void 0)})))()}var xa,X;function Sa(){return(Sa=e((()=>{l(),g(),d(),w(),y(),b(),x(),Je(),Pt(),N(),O(),E(),Fn(),xa=0,X=class e extends pt{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.type=`text`,this.variant=`outline`,this.size=`medium`,this.invalid=!1,this.placeholder=``,this.readOnly=!1,this.clearable=!1,this.showCharCount=!1,this.passwordVisible=!1,this.countId=`minerva-input-count-${xa++}`,this.locale=new p(this),this.aria=new u(this,()=>this.labels),this.slots=new _(this),this.dirty=!1}static{this.tagName=`minerva-input`}static{this.shadowRootOptions={...pt.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,k`
:host{
display: inline-flex;
width: 100%;
min-width: 0;
vertical-align: middle;
}
`,C(Ot)]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}select(){this.input?.select()}getFormValue(){return this.value}getValidity(){let e=this.input;return e?{flags:Ze(e.validity),message:e.validationMessage,anchor:e}:this.required&&!this.value?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`)}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.passwordVisible=!1}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`value`)&&t.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),v&&t.has(`maxLength`)&&this.minLength!==void 0&&this.maxLength!==void 0&&this.minLength>this.maxLength&&f(e.tagName,`minlength (${this.minLength}) is greater than maxlength (${this.maxLength}): no value can be valid.`)}handleInput(){this.value=this.input.value,this.emit(`minerva-input`,{value:this.value})}handleChange(){this.value=this.input.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}clear(){this.value=``,this.input.value=``,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.emit(`minerva-input`,{value:``}),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:``}),this.emit(`minerva-clear`),this.input.focus()}hookStates(){return{disabled:this.isDisabled,invalid:this.invalid||this.aria.attr(`aria-invalid`)===`true`,readonly:this.readOnly,required:this.required,size:this.size,variant:this.variant}}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.type===`password`,r=this.clearable&&this.value!==``&&!t&&!this.readOnly,i=this.passwordVisible?this.hidePasswordLabel??e(`input.hidePassword`):this.showPasswordLabel??e(`input.showPassword`),a=this.showCharCount?this.countId:void 0;return j`<div
part="root"
class=${F({root:!0,[this.variant]:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
data-component="input"
>
${this.slots.test(`prefix`)?j`<span class="addon start" part="prefix"
><slot name="prefix"></slot
></span>`:A}
<input
part="input"
class="field"
.value=${Xn(this.value)}
type=${n&&this.passwordVisible?`text`:this.type}
name=${this.name||A}
placeholder=${this.placeholder||A}
?disabled=${t}
?readonly=${this.readOnly}
?required=${this.required}
minlength=${this.minLength??A}
maxlength=${this.maxLength??A}
pattern=${this.pattern??A}
min=${this.min??A}
max=${this.max??A}
step=${this.step??A}
autocomplete=${this.autocomplete??A}
inputmode=${this.inputmode??A}
aria-label=${this.aria.label??A}
aria-description=${this.aria.description??A}
aria-describedby=${a??A}
aria-invalid=${this.invalid||this.aria.attr(`aria-invalid`)===`true`?`true`:A}
@input=${this.handleInput}
@change=${this.handleChange}
/>
${r?j`<button
part="clear-button"
type="button"
class="action"
aria-label=${this.clearLabel??e(`input.clear`)}
@click=${this.clear}
>
${Ie}
</button>`:A}
${n?j`<button
part="password-toggle"
type="button"
class="action"
aria-label=${i}
?disabled=${t}
@click=${()=>this.passwordVisible=!this.passwordVisible}
>
${this.passwordVisible?Pe:Ke}
</button>`:A}
${this.showCharCount?j`<span id=${this.countId} class="count" part="count"
>${this.maxLength!=null&&this.maxLength>=0?`${this.value.length} / ${this.maxLength}`:this.value.length}</span
>`:A}
${this.slots.test(`suffix`)?j`<span class="addon end" part="suffix"
><slot name="suffix"></slot
></span>`:A}
</div>`}},I([M({attribute:!1})],X.prototype,`value`,void 0),I([M({attribute:`value`})],X.prototype,`defaultValue`,void 0),I([M({reflect:!0})],X.prototype,`type`,void 0),I([M({reflect:!0})],X.prototype,`variant`,void 0),I([M({reflect:!0})],X.prototype,`size`,void 0),I([M({type:Boolean,reflect:!0})],X.prototype,`invalid`,void 0),I([M()],X.prototype,`placeholder`,void 0),I([M({type:Boolean,reflect:!0,attribute:`readonly`})],X.prototype,`readOnly`,void 0),I([M({type:Number,attribute:`minlength`})],X.prototype,`minLength`,void 0),I([M({type:Number,attribute:`maxlength`})],X.prototype,`maxLength`,void 0),I([M()],X.prototype,`pattern`,void 0),I([M()],X.prototype,`min`,void 0),I([M()],X.prototype,`max`,void 0),I([M()],X.prototype,`step`,void 0),I([M()],X.prototype,`autocomplete`,void 0),I([M()],X.prototype,`inputmode`,void 0),I([M({type:Boolean,reflect:!0})],X.prototype,`clearable`,void 0),I([M({attribute:`clear-label`})],X.prototype,`clearLabel`,void 0),I([M({type:Boolean,attribute:`show-char-count`})],X.prototype,`showCharCount`,void 0),I([M({attribute:`show-password-label`})],X.prototype,`showPasswordLabel`,void 0),I([M({attribute:`hide-password-label`})],X.prototype,`hidePasswordLabel`,void 0),I([T()],X.prototype,`passwordVisible`,void 0),I([D(`input`)],X.prototype,`input`,void 0)})))()}function Ca(e){if(!e.trim())return{status:`empty`};try{return JSON.parse(e),{status:`valid`}}catch(e){return{status:`invalid`,error:e instanceof Error?e.message:String(e)}}}function wa(e,t){let n=Math.min(10,Math.max(0,Math.trunc(t)||0));if(n>0)return Jn(e,qn(e,void 0,{tabSize:n,insertSpaces:!0,eol:`
`}));let r=Wn(e,!0),i=[];for(;r.getPosition()<e.length;){r.scan();let t=r.getTokenOffset();i.push(e.slice(t,t+r.getTokenLength()))}return i.join(``)}var Z;function Ta(){return(Ta=e((()=>{l(),g(),d(),w(),y(),x(),Ct(),Pt(),rt(),Ft(),N(),O(),E(),Fn(),Hn(),Z=class e extends pt{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.rows=8,this.hideToolbar=!1,this.indent=2,this.invalid=!1,this.readOnly=!1,this.placeholder=``,this.focused=!1,this.locale=new p(this),this.aria=new u(this,()=>this.labels),this.dirty=!1}static{this.tagName=`minerva-json-field`}static{this.shadowRootOptions={...pt.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,k`
:host{
display: block;
width: 100%;
min-width: 0;
}
`,C(Qe),C(nt),C(mt),k`

.toolbar .iconButton{
min-height: 0;
}
.status > svg{
width: 16px;
height: 16px;
}
`]}focus(e){this.textarea?.focus(e)}blur(){this.textarea?.blur()}formatValue(){Ca(this.value).status===`valid`&&(this.value=wa(this.value,this.indent))}getFormValue(){return this.value}getValidity(){let e=this.textarea,t=Ca(this.value);return t.status===`invalid`?{flags:{badInput:!0},message:`${this.invalidLabel??this.locale.t(`jsonField.invalid`)}: ${t.error}`,anchor:e}:this.required&&t.status===`empty`?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:e}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),v&&t.has(`indent`)&&(this.indent<0||this.indent>10)&&f(e.tagName,`indent (${this.indent}) is clamped to 0..10.`)}get locked(){return this.isDisabled||this.readOnly}formatNow(){if(this.locked||Ca(this.value).status!==`valid`)return;let e=wa(this.value,this.indent);e!==this.value&&(this.dirty=!0,this.value=e,this.emit(`minerva-input`,{value:e}),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e}))}handleInput(){this.locked||(this.dirty=!0,this.value=String(this.textarea.value),this.emit(`minerva-input`,{value:this.value}))}handleChange(){this.value=String(this.textarea.value),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}hookStates(){let e=!this.focused&&Ca(this.value).status===`invalid`;return{disabled:this.isDisabled,invalid:e||this.invalid,readonly:this.readOnly,required:this.required}}render(){let{t:e}=this.locale,t=this.isDisabled,r=this.focused?{status:`empty`}:Ca(this.value),i=r.status===`invalid`,a=i||this.invalid,o=this.locked||!this.value.trim(),s=r.status===`valid`?this.validLabel??e(`jsonField.valid`):r.status===`invalid`?`${this.invalidLabel??e(`jsonField.invalid`)}: ${r.error}`:``,c=[this.aria.description,i?s:void 0].filter(Boolean).join(` `);return j`<div class="root" part="root">
      ${this.hideToolbar?A:j`<div class="toolbar" part="toolbar">
              <button
                part="format-button"
                type="button"
                class=${F({iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,disabled:o})}
                ?disabled=${o}
                tabindex=${o?`-1`:`0`}
                aria-label=${this.formatLabel??e(`jsonField.format`)}
                @click=${this.formatNow}
              >
                ${Te}
              </button>
            </div>`}
      <textarea
        part="input"
        class=${F({textarea:!0,outline:!0,medium:!0,invalid:a})}
        style="resize: none"
        rows=${this.rows}
        spellcheck="false"
        .value=${Xn(this.value)}
        name=${this.name||A}
        placeholder=${this.placeholder||A}
        ?disabled=${t}
        ?readonly=${this.readOnly}
        ?required=${this.required}
        aria-label=${this.aria.label??A}
        aria-description=${c||A}
        aria-invalid=${a?`true`:A}
        @input=${this.handleInput}
        @change=${this.handleChange}
        @focus=${()=>this.focused=!0}
        @blur=${()=>this.focused=!1}
      ></textarea>
      <div
        part="status"
        role="status"
        aria-live="polite"
        class=${F({status:!0,statusInvalid:i})}
      >
        ${r.status===`valid`?j`${n}<span>${s}</span>`:r.status===`invalid`?j`${de}<span>${s}</span>`:A}
      </div>
    </div>`}},I([M({attribute:!1})],Z.prototype,`value`,void 0),I([M({attribute:`value`})],Z.prototype,`defaultValue`,void 0),I([M({type:Number})],Z.prototype,`rows`,void 0),I([M({type:Boolean,attribute:`hide-toolbar`})],Z.prototype,`hideToolbar`,void 0),I([M({type:Number})],Z.prototype,`indent`,void 0),I([M({type:Boolean,reflect:!0})],Z.prototype,`invalid`,void 0),I([M({type:Boolean,reflect:!0,attribute:`readonly`})],Z.prototype,`readOnly`,void 0),I([M()],Z.prototype,`placeholder`,void 0),I([M({attribute:`format-label`})],Z.prototype,`formatLabel`,void 0),I([M({attribute:`valid-label`})],Z.prototype,`validLabel`,void 0),I([M({attribute:`invalid-label`})],Z.prototype,`invalidLabel`,void 0),I([T()],Z.prototype,`focused`,void 0),I([D(`textarea`)],Z.prototype,`textarea`,void 0)})))()}function Ea(e){if(!e)return[];try{let t=JSON.parse(e);if(Array.isArray(t))return t.filter(e=>e&&typeof e==`object`).map(e=>({id:typeof e.id==`string`?e.id:``,key:String(e.key??``),value:String(e.value??``)}));if(t&&typeof t==`object`)return Object.entries(t).map(([e,t])=>({id:``,key:e,value:typeof t==`string`?t:JSON.stringify(t)}))}catch{}return[]}var Da,Oa;function ka(){return(ka=e((()=>{l(),g(),d(),w(),gt(),y(),x(),Ct(),Pt(),Gr(),sa(),Xe(),mr(),N(),O(),Yn(),Da=0,Oa=class e extends pt{constructor(...e){super(...e),this.value=[],this.defaultValue=[],this.editorId=`kv-${Da++}`,this.nextId=0,this.dirty=!1,this.pendingFocus=null,this.locale=new p(this),this.aria=new u(this,()=>this.labels)}static{this.tagName=`minerva-key-value-editor`}static{this.dependencies=[H,oa,pr]}static{this.styles=[h,k`
:host{
display: block;
width: 100%;
min-width: 0;
}
`,C(nt),C(At),k`

.key{
--textarea-min-height: var(
--key-value-editor-control-height,
var(--control-height-sm)
);
}
`]}focus(e){(this.renderRoot.querySelector(`minerva-textarea`)??this.renderRoot.querySelector(`minerva-button`))?.focus(e)}getFormValue(){return JSON.stringify(this.value.map(({key:e,value:t})=>({key:e,value:t})))}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.renderRoot.querySelector(`minerva-button`)??null}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=Ea(e))}willUpdate(t){if(t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),t.has(`value`)&&(this.value.some(e=>!e.id)&&(this.value=this.value.map(e=>e.id?e:{...e,id:this.newId()})),v)){let t=this.value.map(e=>e.id);new Set(t).size!==t.length&&f(e.tagName,`entries have duplicate ids: rows are tracked by id, make them unique.`)}}updated(e){super.updated(e);let t=this.pendingFocus;if(!t)return;this.pendingFocus=null;let n=e=>this.value.some(t=>t.id===e),r=e=>Array.from(this.renderRoot.querySelectorAll(`[data-entry-id]`)).find(t=>e!==void 0&&t.dataset.entryId===e)??null;if(t.kind===`add`){let e=n(t.id)?r(t.id)?.querySelector(`.key`):null;e&&e.updateComplete.then(()=>e.focus())}else n(t.id)||(r(t.nextId)?.querySelector(`.remove`)??this.renderRoot.querySelector(`minerva-button`))?.focus()}newId(){let e;do e=`${this.editorId}-${this.nextId++}`;while(this.value.some(t=>t.id===e));return e}commit(e){this.dirty=!0,this.value=e,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e})}add(){if(this.isDisabled)return;let e=this.newId();this.pendingFocus={kind:`add`,id:e},this.commit([...this.value,{id:e,key:``,value:``}])}removeEntry(e){if(this.isDisabled)return;let t=this.value.findIndex(t=>t.id===e),n=this.value[t+1]??this.value[t-1];this.pendingFocus={kind:`remove`,id:e,nextId:n?.id},this.commit(this.value.filter(t=>t.id!==e))}handleInput(e,t,n){if(e.stopPropagation(),this.isDisabled)return;let r=e.target.value;this.dirty=!0,this.value=this.value.map(e=>e.id===t?{...e,[n]:r}:e),this.emit(`minerva-input`,{value:this.value})}handleFieldChange(e){e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}isRowInvalid(e){let t=this.errors?.[e.id];return!!(t?.key||t?.value)}renderField(e,t,n,r){let i=this.errors?.[e.id]?.[n];return j`<minerva-form-control
?disabled=${this.isDisabled}
?invalid=${!!i}
error-message=${i??``}
>
<span slot="label"
>${r}<span class="srOnly"> ${t+1}</span></span
>
<minerva-textarea
class=${n===`key`?`key`:``}
size="small"
rows=${n===`key`?1:2}
.value=${e[n]}
@minerva-input=${t=>this.handleInput(t,e.id,n)}
@minerva-change=${this.handleFieldChange}
></minerva-textarea>
</minerva-form-control>`}hookStates(){return{disabled:this.isDisabled}}render(){let{t:e}=this.locale,t=this.keyLabel??e(`keyValueEditor.key`),n=this.valueLabel??e(`keyValueEditor.value`),r=this.removeLabel??e(`keyValueEditor.remove`),i=this.isDisabled,a=this.aria.label;return j`<div
class="root"
part="root"
role=${a?`group`:A}
aria-label=${a??A}
aria-description=${this.aria.description??A}
>
${zn(this.value,e=>e.id,(e,a)=>j`<div
class="row"
part=${ct(`row`,{invalid:this.isRowInvalid(e)})}
data-entry-id=${e.id}
>
${this.renderField(e,a,`key`,t)}
${this.renderField(e,a,`value`,n)}
<button
part="remove-button"
type="button"
class="remove iconButton neutral variant-ghost small square ${i?`disabled`:``}"
aria-label=${`${r} ${a+1}`}
?disabled=${i}
@click=${()=>this.removeEntry(e.id)}
>
${Ie}
</button>
</div>`)}
<minerva-button
part="add-button"
class="add"
color="neutral"
variant="outline"
size="small"
?disabled=${i}
@click=${this.add}
>
<span slot="start">${pe}</span>
<span>${this.addLabel??e(`keyValueEditor.add`)}</span>
</minerva-button>
</div>`}},I([M({attribute:!1})],Oa.prototype,`value`,void 0),I([M({attribute:`value`,converter:{fromAttribute:e=>Ea(e)}})],Oa.prototype,`defaultValue`,void 0),I([M({attribute:`key-label`})],Oa.prototype,`keyLabel`,void 0),I([M({attribute:`value-label`})],Oa.prototype,`valueLabel`,void 0),I([M({attribute:`add-label`})],Oa.prototype,`addLabel`,void 0),I([M({attribute:`remove-label`})],Oa.prototype,`removeLabel`,void 0),I([M({attribute:!1})],Oa.prototype,`errors`,void 0)})))()}var Aa,ja;function Ma(){return(Ma=e((()=>{l(),g(),at(),y(),b(),x(),St(),N(),O(),E(),Aa=class e extends m{constructor(...e){super(...e),this.density=`default`,this.bordered=!1,this.noDividers=!1,this.internals=He(this)}static{this.tagName=`minerva-list`}static{this.styles=[h,k`
:host{
display: block;

--_minerva-list-item-min-height: initial;
--_minerva-list-item-padding-y: initial;
}
:host([density="compact"]){
--_minerva-list-item-min-height: calc(
2 * var(--row-padding-y) + 1.5rem
);
--_minerva-list-item-padding-y: var(--row-padding-y);
}
:host([density="comfortable"]){
--_minerva-list-item-min-height: calc(
2 * var(--row-padding-y) + 3.5rem
);
--_minerva-list-item-padding-y: calc(
var(--row-padding-y) + var(--space-2)
);
}

:host([bordered]) ::slotted(minerva-list-item){
transition: background-color var(--transition-fast);
}
:host([bordered]) ::slotted(minerva-list-item:hover),
:host([bordered]) ::slotted(minerva-list-item:focus-within){
background-color: var(
--list-item-hover-background,
var(--surface-subtle-color)
);
}

::slotted(minerva-list-item){
--_list-divider: 0;
}
:host(:not([no-dividers]))
::slotted(minerva-list-item:not(:first-child)){
--_list-divider: 1;
}
`,C(Ge)]}connectedCallback(){super.connectedCallback(),ie(this,this.internals,{role:`list`})}updated(){if(v){let t=Array.from(this.children).find(e=>e.localName!==ja.tagName);t&&f(e.tagName,`children should be <minerva-list-item> elements (found <${t.localName}>): other elements break the list semantics.`)}}render(){return j`<div
part="root"
class=${F({list:!0,compact:this.density===`compact`,comfortable:this.density===`comfortable`,bordered:this.bordered,dividers:!this.noDividers})}
>
<slot @slotchange=${()=>this.requestUpdate()}></slot>
</div>`}},I([M({reflect:!0})],Aa.prototype,`density`,void 0),I([M({type:Boolean,reflect:!0})],Aa.prototype,`bordered`,void 0),I([M({type:Boolean,reflect:!0,attribute:`no-dividers`})],Aa.prototype,`noDividers`,void 0),ja=class extends m{constructor(...e){super(...e),this.primary=``,this.secondary=``,this.internals=He(this),this.slots=new _(this)}static{this.tagName=`minerva-list-item`}static{this.styles=[h,C(Ge),k`
:host{
display: block;
}

.item{
min-height: var(
--list-item-min-height,
var(
--_minerva-list-item-min-height,
calc(2 * var(--row-padding-y) + 2.5rem)
)
);
padding-block: var(
--list-item-padding-y,
var(
--_minerva-list-item-padding-y,
calc(var(--row-padding-y) + var(--space-1))
)
);
}
`]}connectedCallback(){super.connectedCallback(),ie(this,this.internals,{role:`listitem`})}render(){let e=this.secondary!==``||this.slots.test(`secondary`);return j`<div part="root" class="item">
${this.slots.test(`icon`)?j`<div part="icon" class="icon" aria-hidden="true">
<slot name="icon"></slot>
</div>`:A}
<div class="content">
<div part="label" class="primary"><slot>${this.primary}</slot></div>
${e?j`<div part="description" class="secondary">
<slot name="secondary">${this.secondary}</slot>
</div>`:A}
</div>
${this.slots.test(`actions`)?j`<div part="actions" class="actions">
<slot name="actions"></slot>
</div>`:A}
</div>`}},I([M()],ja.prototype,`primary`,void 0),I([M()],ja.prototype,`secondary`,void 0)})))()}var Na,Pa;function Fa(){return(Fa=e((()=>{g(),w(),y(),x(),bt(),lr(),N(),O(),E(),Na=[`small`,`medium`,`large`],Pa=class e extends m{constructor(...e){super(...e),this.size=`medium`,this.locale=new p(this)}static{this.tagName=`minerva-loading-state`}static{this.dependencies=[gr]}static{this.styles=[h,k`
:host{
display: block;
}
`,C(Nt)]}hookStates(){return{size:this.size}}updated(){v&&!Na.includes(this.size)&&f(e.tagName,`unknown size "${this.size}" (expected ${Na.join(`, `)}).`)}render(){return j`<div
part="root"
class=${F({loadingState:!0,[this.size]:!0})}
role="status"
aria-live="polite"
aria-atomic="true"
>
<minerva-progress
part="spinner"
class="indicator"
color="current"
decorative
></minerva-progress>
<span part="label" class="label"
><slot>${this.label??this.locale.t(`loadingState.label`)}</slot></span
>
</div>`}},I([M()],Pa.prototype,`label`,void 0),I([M({reflect:!0})],Pa.prototype,`size`,void 0)})))()}function Ia(e){let t=Array.from(e.childNodes).filter(e=>!Ka(e)&&(e.nodeType!==1||e.getAttribute(`slot`)!==`icon`));return t.every(e=>e.nodeType===3)?t.map(e=>e.textContent??``).join(``).trim():t.map(e=>e.cloneNode(!0))}function La(e){return{value:Ya(e,`value`)??Ja(e),label:Ia(e),textValue:Ya(e,`text-value`),shortcut:Ya(e,`shortcut`),disabled:Xa(e,`disabled`),closeOnSelect:Xa(e,`close-on-select`),element:e}}function Ra(e,t=`e`){let n=[],r=null;return Array.from(e.children).forEach((e,i)=>{let a=`${t}-${i}`;switch(e.localName!==Q.tagName&&(r=null),e.localName){case Ba.tagName:{let t=Ra(e,a),r=e.querySelector(`:scope > [slot='icon']`);n.push({key:Ya(e,`value`)||Ja(e),label:Ia(e),textValue:Ya(e,`text-value`),icon:r?r.cloneNode(!0):void 0,shortcut:Ya(e,`shortcut`),disabled:Xa(e,`disabled`),closeOnSelect:!Xa(e,`keep-open`)&&void 0,children:t.length?t:void 0,element:e});break}case Va.tagName:n.push({type:`checkbox`,key:Ya(e,`value`)||Ja(e),label:Ia(e),textValue:Ya(e,`text-value`),shortcut:Ya(e,`shortcut`),disabled:Xa(e,`disabled`),checked:Xa(e,`checked`),closeOnSelect:Xa(e,`close-on-select`),element:e});break;case Q.tagName:{r||(r={type:`radio-group`,key:a,items:[]},n.push(r));let t=La(e);r.items.push(t),Xa(e,`checked`)&&(r.value=t.value);break}case Ua.tagName:n.push({type:`separator`,key:a});break;case Wa.tagName:n.push({type:`label`,key:a,label:Ia(e)});break;case Ha.tagName:{let t=Array.from(e.children),r=Ya(e,`label`);if(t.length>0&&t.every(e=>e.localName===Q.tagName)){let i=t.map(La);n.push({type:`radio-group`,key:a,label:r,items:i,value:i.find(e=>e.element?.hasAttribute(`checked`))?.value,closeOnSelect:Xa(e,`close-on-select`),element:e})}else n.push({type:`group`,key:a,label:r??``,items:Ra(e,a)});break}}}),n}var za,Ba,Va,Q,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa;function Za(){return(Za=e((()=>{y(),N(),O(),za=k`
:host{
display: none !important;
}
`,Ba=class extends m{constructor(...e){super(...e),this.value=``,this.disabled=!1,this.shortcut=``,this.textValue=``,this.keepOpen=!1}static{this.tagName=`minerva-menu-item`}static{this.styles=za}},I([M({reflect:!0})],Ba.prototype,`value`,void 0),I([M({type:Boolean,reflect:!0})],Ba.prototype,`disabled`,void 0),I([M()],Ba.prototype,`shortcut`,void 0),I([M({attribute:`text-value`})],Ba.prototype,`textValue`,void 0),I([M({type:Boolean,attribute:`keep-open`})],Ba.prototype,`keepOpen`,void 0),Va=class extends m{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1,this.shortcut=``,this.textValue=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-checkbox-item`}static{this.styles=za}},I([M({reflect:!0})],Va.prototype,`value`,void 0),I([M({type:Boolean,reflect:!0})],Va.prototype,`checked`,void 0),I([M({type:Boolean,reflect:!0})],Va.prototype,`disabled`,void 0),I([M()],Va.prototype,`shortcut`,void 0),I([M({attribute:`text-value`})],Va.prototype,`textValue`,void 0),I([M({type:Boolean,attribute:`close-on-select`})],Va.prototype,`closeOnSelect`,void 0),Q=class extends m{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1,this.shortcut=``,this.textValue=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-radio-item`}static{this.styles=za}},I([M({reflect:!0})],Q.prototype,`value`,void 0),I([M({type:Boolean,reflect:!0})],Q.prototype,`checked`,void 0),I([M({type:Boolean,reflect:!0})],Q.prototype,`disabled`,void 0),I([M()],Q.prototype,`shortcut`,void 0),I([M({attribute:`text-value`})],Q.prototype,`textValue`,void 0),I([M({type:Boolean,attribute:`close-on-select`})],Q.prototype,`closeOnSelect`,void 0),Ha=class extends m{constructor(...e){super(...e),this.label=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-group`}static{this.styles=za}},I([M()],Ha.prototype,`label`,void 0),I([M({type:Boolean,attribute:`close-on-select`})],Ha.prototype,`closeOnSelect`,void 0),Ua=class extends m{static{this.tagName=`minerva-menu-separator`}static{this.styles=za}},Wa=class extends m{static{this.tagName=`minerva-menu-label`}static{this.styles=za}},Ga=[Ba.tagName,Va.tagName,Q.tagName,Ha.tagName,Ua.tagName,Wa.tagName],Ka=e=>e.nodeType===1&&Ga.includes(e.localName),qa=e=>!!(e.nodeType===1?e:e.parentElement)?.closest(Ga.join(`,`)),Ja=e=>Array.from(e.childNodes).filter(e=>!Ka(e)).map(e=>e.textContent??``).join(``).trim(),Ya=(e,t)=>e.getAttribute(t)??void 0,Xa=(e,t)=>e.hasAttribute(t)})))()}var Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo;function uo(){return(uo=e((()=>{g(),d(),c(),gt(),y(),x(),nr(),ar(),tr(),cr(),sr(),tt(),Za(),N(),O(),E(),cn(),on(),Yn(),Qa=100,$a=`[data-minerva-menu-item]`,eo={mainAxis:4,crossAxis:-5},to=e=>e.hasAttribute(`data-disabled`),no=e=>e.dataset.textValue??e.querySelector(`.text`)?.textContent??e.textContent??``,ro=e=>e?Array.from(e.querySelectorAll($a)):[],io=e=>On(e,{preventScroll:!0}),ao=e=>typeof e==`string`?e:void 0,oo=e=>e.join(`/`),so=0,co=class{constructor(e,t,n){this.grace=Pn(),this.typeahead=gn(),this.lastTypeahead=0,this.element=null,this.uid=null,this.path=[],this.position=new rr(e,()=>n===0?{placement:t.rootPlacement(),offset:t.rootOffset(),padding:8}:{placement:t.direction===`rtl`?`left-start`:`right-start`,offset:eo,padding:8}),this.layer=new Qn(e,()=>n===0?t.rootLayerOptions():t.subLayerOptions(n)),this.scope=new or(e,()=>({trapped:n===0&&t.isModal,autoFocus:!1,restoreFocus:!1}))}clearTimer(){clearTimeout(this.openTimer),this.openTimer=void 0}},lo=class extends m{constructor(...e){super(...e),this.items=[],this.open=!1,this.size=`medium`,this.keepOpen=!1,this.disabled=!1,this.nonModal=!1,this.noLoop=!1,this.declarative=[],this.openPath=[],this.exiting=[],this.stored=new Map,this.levels=[],this.modalController=new $n(this),this.observer=null,this.intent=`content`,this.subIntent=`none`,this.restoreOverride=void 0,this.reason=`outside`,this.direction=`ltr`,this.onPanelKeyDown=e=>{let t=e.currentTarget,n=this.panelDepth(t),r=this.levels[n],{key:i}=e;if(i===`Tab`){e.preventDefault(),this.closeWithTab(e.shiftKey);return}if(e.defaultPrevented||!r||e.altKey||e.ctrlKey||e.metaKey)return;let a=ro(t),o=e.composedPath()[0],s=a.find(e=>e===o)??null,c=s?a.indexOf(s):-1,ee=this.direction===`rtl`,te=ee?`ArrowLeft`:`ArrowRight`,l=ee?`ArrowRight`:`ArrowLeft`;if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(i)){e.preventDefault(),r.typeahead.reset();let t=en({currentIndex:c,count:a.length,key:i,orientation:`vertical`,loop:!this.noLoop,isDisabled:e=>to(a[e])});t!==null&&io(a[t]);return}if(i===te&&s?.hasAttribute(`aria-haspopup`)){e.preventDefault(),to(s)||this.openSubmenu(n,s.dataset.uid??``,`first`);return}if(i===l&&n>0){e.preventDefault(),io(this.parentItem(n)),this.closeSubmenu(n);return}if(i.length===1){let t=Date.now();t-r.lastTypeahead>500&&r.typeahead.reset();let n=r.typeahead.getBuffer()!==``;if(i!==` `||n){r.lastTypeahead=t,e.preventDefault();let n=r.typeahead.search(i,a.map(e=>({text:no(e),disabled:to(e)})),c);n!==-1&&io(a[n]);return}}(i===`Enter`||i===` `)&&s&&(e.preventDefault(),to(s)||this.activateItem(s,`first`))},this.itemActions=new Map,this.highlightedItem=null,this.onPanelFocusIn=e=>{let t=e.composedPath()[0];t.matches?.($a)&&this.highlightItem(t,!0)},this.onPanelFocusOut=e=>{let t=e.composedPath()[0];t.matches?.($a)&&this.highlightItem(t,!1)}}static{this.styles=[h,er,k`
:host{
display: contents;
}
`,C(t)]}onRootPointerDownOutside(e){}get isModal(){return!this.nonModal}get entries(){return this.items.length?this.items:this.declarative}show(){this.open=!0}hide(){this.open=!1}requestOpenChange(e,t){if(e===this.open)return!0;let n=this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0});return n&&(this.open=e,e||this.closeLevels()),n}openWith(e,t){this.intent=e,this.requestOpenChange(!0,t)}closeAll(e){this.requestOpenChange(!1,e)}closeWithTab(e){let t=this.restoreTarget(),n;if(t){let r=qt().find(e=>e.element===this.levels[0]?.element)?.parent??document.body,i=fn(r).filter(e=>e===t||!tn(this,e)||!this.isPanelNode(e)),a=i.indexOf(t);n=a===-1?t:i[e?a-1:a+1]??t}this.restoreOverride=n??void 0,this.requestOpenChange(!1,`tab`)&&io(n)}isPanelNode(e){return this.levels.some(t=>tn(t.element,e))}level(e){return this.levels[e]??=new co(this,this,e),this.levels[e]}parentItem(e){let t=this.openPath[e-1];return t?this.renderRoot.querySelector(`[data-uid="${t}"]`)??null:null}rootLayerOptions(){return{disableOutsidePointerEvents:this.isModal,branches:()=>this.branches(),onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:e=>{this.reason=`outside`,this.onRootPointerDownOutside(e),!e.defaultPrevented&&(!this.isModal||e.button===2)&&(this.restoreOverride=null)},onFocusOutside:e=>(this.reason=`focus-outside`,!this.isModal||(e.preventDefault(),!1)),onDismiss:()=>this.closeAll(this.reason)}}subLayerOptions(e){return{parent:this.levels[e-1]?.element??void 0,branches:()=>[this.parentItem(e)],onEscapeKeyDown:()=>{io(this.parentItem(e))},onDismiss:()=>this.closeSubmenu(e)}}closeLevels(e=0,t=!0){for(let n=this.levels.length-1;n>=e;n--){let e=this.levels[n],r=e.element;r&&(e.clearTimer(),e.grace.clear(),e.typeahead.reset(),e.scope.deactivate(),e.layer.deactivate(),e.position.end(),t&&this.isConnected?this.exit(r,n,e.path):S(r),e.element=null,e.uid=null,n===0&&(this.modalController.deactivate(),this.scheduleRestore()))}}exit(e,t,n){if(e.setAttribute(`data-state`,`closed`),bn(e)<=0){S(e);return}let r=++so,i=oo(n);this.exiting=[...this.exiting.filter(e=>oo(e.path)!==i),{id:r,depth:t,path:n}],nn(e).then(()=>{this.exiting.some(e=>e.id===r)&&(S(e),this.exiting=this.exiting.filter(e=>e.id!==r))})}clearExiting(){if(this.exiting.length!==0){for(let e of this.exiting)S(this.renderRoot.querySelector(`[data-panel-key="${oo(e.path)}"]`));this.exiting=[]}}scheduleRestore(){let e=this.restoreOverride;this.restoreOverride=void 0;let t=e===void 0?this.restoreTarget():e;t&&setTimeout(()=>{if(this.open||!t.isConnected)return;let e=kn(document);(!e||e===document.body||!e.isConnected||(this.shadowRoot?.contains(e)??!1))&&io(t)},0)}syncLevels(){let e=this.open&&!this.disabled?this.openPath.length+1:0;this.closeLevels(e);for(let t=0;t<e;t++){let e=t===0?``:this.openPath[t-1],n=this.renderRoot.querySelector(`[data-panel-key="${oo(this.openPath.slice(0,t))}"]`);if(!n)return;let r=this.level(t);if(r.element===n&&r.uid===e)continue;r.element&&this.closeLevels(t);let i=t===0?this.anchorElement():this.parentItem(t);if(!i)return;r.element=n,r.uid=e,r.path=this.openPath.slice(0,t),n.setAttribute(`data-state`,`open`),De(n),r.position.start(i,n),t===0&&this.isModal&&this.modalController.activate(this),r.layer.activate(n),r.scope.activate(n);let a=t===0?this.intent:this.subIntent;t===0?this.intent=`content`:this.subIntent=`none`,this.focusIntent(n,a)}}focusIntent(e,t){if(t===`none`)return;let n=ro(e).filter(e=>!to(e));io((t===`first`?n[0]:t===`last`?n[n.length-1]:void 0)??e)}reanchor(){let e=this.levels[0],t=this.anchorElement();e?.element&&t&&e.position.start(t,e.element)}openSubmenu(e,t,n){if(this.openPath[e]===t&&this.levels[e+1]?.element){n===`first`&&io(ro(this.levels[e+1].element).find(e=>!to(e)));return}this.subIntent=n,this.openPath=[...this.openPath.slice(0,e),t]}closeSubmenu(e){this.openPath.length<e||(this.closeLevels(e),this.openPath=this.openPath.slice(0,e-1))}stateOf(e,t){return this.stored.has(e)?this.stored.get(e):t}isChecked(e){return e.element?e.element.hasAttribute(`checked`):this.stateOf(e.key,e.checked??e.defaultChecked??!1)}radioValue(e){return e.items.some(e=>e.element)?e.items.find(e=>e.element?.hasAttribute(`checked`))?.value:this.stateOf(e.key,e.value??e.defaultValue)}activateAction(e){this.emit(`minerva-select`,{value:e.key,item:e},{cancelable:!0})&&(e.closeOnSelect??!this.keepOpen)&&this.closeAll(`select`)}toggleCheckbox(e){let t=!this.isChecked(e);this.emit(`minerva-change`,{value:e.key,checked:t,item:e},{cancelable:!0})&&(e.element?e.element.toggleAttribute(`checked`,t):this.stored.set(e.key,t),this.requestUpdate()),e.closeOnSelect&&this.closeAll(`select`)}chooseRadio(e,t){let n=this.radioValue(e);if(t.value!==n&&this.emit(`minerva-change`,{value:t.value,group:e.key,item:t},{cancelable:!0})){if(t.element)for(let n of e.items)n.element?.toggleAttribute(`checked`,n===t);else this.stored.set(e.key,t.value);this.requestUpdate()}(e.closeOnSelect||t.closeOnSelect)&&this.closeAll(`select`)}panelDepth(e){return Number(e.dataset.level??0)}activateItem(e,t){this.itemActions.get(e.dataset.uid??``)?.(t)}highlightItem(e,t){t?this.highlightedItem=e.dataset.uid??null:this.highlightedItem===e.dataset.uid&&(this.highlightedItem=null),e.toggleAttribute(`data-highlighted`,t),e.setAttribute(`part`,ct(`item`,{state:e.dataset.state,highlighted:t,disabled:e.hasAttribute(`data-disabled`),expanded:e.hasAttribute(`data-expanded`)}))}onItemClick(e){let t=e.currentTarget;to(t)||this.activateItem(t,`none`)}onItemPointerMove(e){let t=e.currentTarget,n=t.closest(`[data-level]`);if(!n)return;let r=this.panelDepth(n),i=this.levels[r];if(!i||e.pointerType===`touch`||i.grace.isInGraceArea({x:e.clientX,y:e.clientY}))return;i.grace.clear();let a=kn(document);if(to(t)){a!==n&&io(n);return}a!==t&&io(t);let o=t.dataset.uid??``;t.hasAttribute(`aria-haspopup`)&&this.openPath[r]!==o&&i.openTimer===void 0&&(i.openTimer=setTimeout(()=>{i.openTimer=void 0,this.open&&this.openSubmenu(r,o,`none`)},100))}onItemPointerLeave(e){if(e.pointerType===`touch`)return;let t=e.currentTarget,n=t.closest(`[data-level]`);if(!n)return;let r=this.panelDepth(n),i=this.levels[r];if(!i)return;i.clearTimer();let a=this.levels[r+1]?.element;if(t.hasAttribute(`aria-haspopup`)&&this.openPath[r]===t.dataset.uid&&a){let t=a.getAttribute(`data-side`)??`right`;i.grace.start({x:e.clientX,y:e.clientY},a.getBoundingClientRect(),t);return}i.grace.isInGraceArea({x:e.clientX,y:e.clientY})||kn(document)===t&&io(n)}readEntries(){this.declarative=Ra(this)}connectedCallback(){super.connectedCallback(),this.readEntries(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(e=>{e.some(e=>qa(e.target)||Array.from(e.addedNodes).some(qa)||Array.from(e.removedNodes).some(e=>e.nodeType===1&&e.localName.startsWith(`minerva-menu-`)))&&this.readEntries()}),this.observer.observe(this,{subtree:!0,childList:!0,attributes:!0,characterData:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.closeLevels(0,!1),this.clearExiting()}willUpdate(e){if(e.has(`items`)&&(this.stored=new Map,v&&this.checkKeys(this.items)),e.has(`open`)&&this.open){let e=this.anchorElement(),t=e&&`nodeType`in e?e:this;this.direction=this.isConnected?an(t):`ltr`}e.has(`open`)&&!this.open&&(this.openPath=[]);let t=this.open&&!this.disabled?this.openPath.length+1:0,n=this.levels.findIndex((e,n)=>e.element!==null&&(n>=t||oo(e.path)!==oo(this.openPath.slice(0,n))));if(n!==-1&&this.closeLevels(n),this.exiting.length){let e=this.openKeys();this.exiting.some(t=>e.has(oo(t.path)))&&(this.exiting=this.exiting.filter(t=>!e.has(oo(t.path))))}}openKeys(){return!this.open||this.disabled?new Set:new Set([[],...this.openPath.map((e,t)=>this.openPath.slice(0,t+1))].map(oo))}checkKeys(e,t=new Set){for(let n of e)if(!(`type`in n&&n.type===`separator`)){if(`type`in n&&(n.type===`group`||n.type===`label`)){n.type===`group`&&this.checkKeys(n.items,t);continue}t.has(n.key)&&f(this.constructor.tagName,`duplicate item key "${n.key}": keys must be unique (checkbox / radio state and minerva-select values are keyed by it).`),t.add(n.key),!(`type`in n)&&n.children&&this.checkKeys(n.children,t)}}hookStates(){let e=this.levels[0]?.position.running?this.levels[0].position.placement:this.rootPlacement();return{state:this.open&&!this.disabled?`open`:`closed`,disabled:this.disabled,size:this.size,...Sn(e),placement:e}}updated(e){this.syncTrigger(),(e.has(`open`)||e.has(`openPath`)||e.has(`disabled`))&&this.syncLevels()}renderPanels(){let e=this.open&&!this.disabled;if(!e&&this.exiting.length===0)return A;this.itemActions.clear();let t=[];e&&(t.push({key:``,depth:0,path:[],state:`open`}),this.openPath.forEach((e,n)=>{let r=this.openPath.slice(0,n+1);t.push({key:oo(r),depth:n+1,path:r,state:`open`})}));let n=new Set(t.map(e=>e.key));for(let e of this.exiting){let r=oo(e.path);n.has(r)||(n.add(r),t.push({key:r,depth:e.depth,path:e.path,state:`closed`}))}return zn(t,e=>e.key,e=>this.renderPanelAt(e.depth,e.path,e.state))}renderPanelAt(e,t,n){let r=this.entries,i=e===0?this.rootLabel():void 0;for(let[e,n]of t.entries()){let t=this.findSubmenu(r,n,`${e}:`);if(!t)return A;r=t.children??[],i=ao(t.label)??t.textValue}return this.renderPanel(e,t.at(-1)??``,r,i,n,oo(t))}findSubmenu(e,t,n){for(let[r,i]of e.entries()){let e=`${n}${r}`;if(`type`in i){if(i.type===`group`){let n=this.findSubmenu(i.items,t,`${e}.`);if(n)return n}continue}if(i.children?.length&&e===t)return i}return null}renderPanel(e,t,n,r,i,a){let o=e===0?``:`item-${t}`;return j`<div
part="content"
id=${e===0?`menu`:`menu-${t}`}
class=${F({content:!0,small:this.size===`small`})}
popover="manual"
role="menu"
aria-orientation="vertical"
aria-label=${e===0?r??A:A}
aria-labelledby=${e>0?o:A}
tabindex="-1"
dir=${this.direction}
data-state=${i}
data-level=${e}
data-panel-key=${a}
@keydown=${this.onPanelKeyDown}
@focusin=${this.onPanelFocusIn}
@focusout=${this.onPanelFocusOut}
>
${this.renderEntries(n,e,`${e}:`)}
</div>`}renderEntries(e,t,n){return e.map((e,r)=>{let i=`${n}${r}`;if(`type`in e)switch(e.type){case`separator`:return j`<div
role="separator"
aria-orientation="horizontal"
class="separator"
part="separator"
></div>`;case`label`:return j`<div class="label" part="label">${e.label}</div>`;case`group`:{let n=`label-${i.replace(/[:.]/g,`-`)}`;return j`<div
role="group"
part="group"
aria-labelledby=${n}
>
<div id=${n} class="label" part="label">${e.label}</div>
${this.renderEntries(e.items,t,`${i}.`)}
</div>`}case`checkbox`:return this.renderCheckbox(e,i);case`radio-group`:return this.renderRadioGroup(e,i)}return this.renderAction(e,t,i)})}renderItem(e){let{uid:t,disabled:n=!1,submenu:r}=e;this.itemActions.set(t,e.activate);let i=e.textValue??ao(e.label),a={state:e.checked===void 0?void 0:e.checked?`checked`:`unchecked`,highlighted:this.highlightedItem===t,disabled:n,expanded:r?.open};return j`<div
id=${`item-${t}`}
part=${ct(`item`,a)}
role=${e.role}
tabindex="-1"
class="item"
data-minerva-menu-item=""
data-uid=${t}
data-text-value=${i??A}
data-state=${a.state??A}
?data-highlighted=${a.highlighted}
?data-disabled=${n}
?data-expanded=${r?.open}
aria-disabled=${n?`true`:A}
aria-checked=${e.checked===void 0?A:String(e.checked)}
aria-haspopup=${r?`menu`:A}
aria-expanded=${r?String(r.open):A}
aria-controls=${r?.open?`menu-${t}`:A}
@click=${this.onItemClick}
@pointermove=${this.onItemPointerMove}
@pointerleave=${this.onItemPointerLeave}
>
${e.indicator??A}
${e.icon?j`<span class="icon" part="icon" aria-hidden="true"
>${e.icon}</span
>`:A}
<span class="text" part="item-label">${e.label}</span>
${e.shortcut?j`<span class="shortcut" part="shortcut">${e.shortcut}</span>`:A}
${e.trailing??A}
</div>`}renderAction(e,t,n){if(e.children?.length){let r=this.openPath[t]===n&&!e.disabled;return this.renderItem({uid:n,role:`menuitem`,label:e.label,textValue:e.textValue,icon:e.icon,shortcut:e.shortcut,disabled:e.disabled,submenu:{open:r},trailing:j`<span class="chevron" aria-hidden="true"
>${o}</span
>`,activate:e=>this.openSubmenu(t,n,e)})}return this.renderItem({uid:n,role:`menuitem`,label:e.label,textValue:e.textValue,icon:e.icon,shortcut:e.shortcut,disabled:e.disabled,activate:()=>this.activateAction(e)})}renderCheckbox(e,t){let n=this.isChecked(e);return this.renderItem({uid:t,role:`menuitemcheckbox`,label:e.label,textValue:e.textValue,shortcut:e.shortcut,disabled:e.disabled,checked:n,indicator:j`<span
class="indicator"
part="item-indicator"
aria-hidden="true"
>${n?le:A}</span
>`,activate:()=>this.toggleCheckbox(e)})}renderRadioGroup(e,t){let n=this.radioValue(e),r=`label-${t.replace(/[:.]/g,`-`)}`,i=e.label!=null&&e.label!==``;return j`<div
role="group"
part="group"
aria-labelledby=${i?r:A}
>
${i?j`<div id=${r} class="label" part="label">${e.label}</div>`:A}
${e.items.map((r,i)=>{let a=r.value===n;return this.renderItem({uid:`${t}.${i}`,role:`menuitemradio`,label:r.label,textValue:r.textValue,shortcut:r.shortcut,disabled:r.disabled,checked:a,indicator:j`<span
class="indicator"
part="item-indicator"
aria-hidden="true"
>${a?j`<span class="dot"></span>`:A}</span
>`,activate:()=>this.chooseRadio(e,r)})})}
</div>`}},I([M({attribute:!1})],lo.prototype,`items`,void 0),I([M({type:Boolean,reflect:!0})],lo.prototype,`open`,void 0),I([M({reflect:!0})],lo.prototype,`size`,void 0),I([M({type:Boolean,attribute:`keep-open`})],lo.prototype,`keepOpen`,void 0),I([M({type:Boolean,reflect:!0})],lo.prototype,`disabled`,void 0),I([M({type:Boolean,reflect:!0,attribute:`non-modal`})],lo.prototype,`nonModal`,void 0),I([M({type:Boolean,attribute:`no-loop`})],lo.prototype,`noLoop`,void 0),I([T()],lo.prototype,`declarative`,void 0),I([T()],lo.prototype,`openPath`,void 0),I([T()],lo.prototype,`exiting`,void 0)})))()}function fo(e,t,n){n===null?e.hasAttribute(t)&&e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}var po,mo;function ho(){return(ho=e((()=>{g(),Za(),uo(),N(),O(),cn(),po={mainAxis:6,crossAxis:0},mo=class e extends lo{constructor(...e){super(...e),this.side=`bottom`,this.align=`end`,this.disabledTrigger=null,this.handleKeyDown=e=>{if(!(this.disabled||e.defaultPrevented||!this.fromTrigger(e)))switch(e.key){case`Enter`:case` `:e.preventDefault(),this.open?this.requestOpenChange(!1,`trigger`):this.openWith(`first`,`keyboard`);break;case`ArrowDown`:e.preventDefault(),this.openWith(`first`,`keyboard`);break;case`ArrowUp`:e.preventDefault(),this.openWith(`last`,`keyboard`)}},this.handleClick=e=>{this.disabled||e.defaultPrevented||!this.fromTrigger(e)||(this.open?this.requestOpenChange(!1,`trigger`):this.openWith(e.detail===0?`first`:`content`,`trigger`))}}static{this.tagName=`minerva-menu`}static{this.dependencies=[Ba,Va,Q,Ha,Ua,Wa]}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}anchorElement(){return this.triggerElement()}rootPlacement(){return vn(this.side,this.align)}rootOffset(){return po}restoreTarget(){return this.triggerElement()}branches(){return[this.triggerElement()]}rootLabel(){let e=this.getAttribute(`aria-label`);if(e)return e;let t=this.triggerElement();return t?.getAttribute(`aria-label`)??(t?.textContent?.trim()||void 0)}syncTrigger(){let e=this.triggerElement();e&&(fo(e,`aria-haspopup`,`menu`),fo(e,`aria-expanded`,String(this.open)),fo(e,`data-state`,this.open?`open`:`closed`),fo(e,`data-disabled`,this.disabled?``:null),this.disabled&&!e.hasAttribute(`disabled`)?(e.setAttribute(`disabled`,``),this.disabledTrigger=e):!this.disabled&&this.disabledTrigger===e&&(e.removeAttribute(`disabled`),this.disabledTrigger=null))}fromTrigger(e){let t=this.triggerElement();return!!t&&e.composedPath().includes(t)}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`click`,this.handleClick)}firstUpdated(t){super.firstUpdated(t),v&&!this.triggerElement()&&f(e.tagName,`no slot="trigger" element: nothing opens the menu (add e.g. <button slot="trigger">).`)}render(){return j`<slot name="trigger"></slot>${this.renderPanels()}`}},I([M({reflect:!0})],mo.prototype,`side`,void 0),I([M({reflect:!0})],mo.prototype,`align`,void 0)})))()}var go,_o,vo,yo,bo;function xo(){return(xo=e((()=>{c(),Za(),uo(),ho(),N(),cn(),go=700,_o={mainAxis:2,crossAxis:0},vo={mainAxis:4,crossAxis:0},yo=(e,t,n)=>({contextElement:n,getBoundingClientRect:()=>({x:e,y:t,left:e,top:t,right:e,bottom:t,width:0,height:0})}),bo=class extends lo{constructor(...e){super(...e),this.position=null,this.restoreTo=null,this.areaPointerEvents=null,this.handleContextMenu=e=>{this.disabled||e.defaultPrevented||!this.inArea(e)||(e.preventDefault(),this.clearLongPress(),this.openAtPoint(e.clientX,e.clientY))},this.handleKeyDown=e=>{if(!(this.disabled||e.defaultPrevented||!this.inArea(e))&&(e.key===`ContextMenu`||e.shiftKey&&e.key===`F10`)){let t=this.area();if(!t)return;e.preventDefault();let n=an(t)===`rtl`;this.openAt({anchor:t,placement:n?`bottom-end`:`bottom-start`,offset:vo})}},this.handlePointerDown=e=>{if(this.disabled||e.pointerType!==`touch`||!this.inArea(e))return;this.clearLongPress();let{clientX:t,clientY:n}=e;this.longPress=setTimeout(()=>{this.longPress=void 0,this.openAtPoint(t,n)},700)},this.handleTouchEnd=e=>{e.pointerType===`touch`&&this.clearLongPress()}}static{this.tagName=`minerva-context-menu`}static{this.dependencies=[Ba,Va,Q,Ha,Ua,Wa]}static{this.styles=[...lo.styles,k`
:host(:not([disabled])) ::slotted(*){
-webkit-touch-callout: none;
}
`]}area(){return Array.from(this.children).find(e=>!Ga.includes(e.localName))??null}anchorElement(){return this.position?.anchor??null}rootPlacement(){return this.position?.placement??`right-start`}rootOffset(){return this.position?.offset??_o}restoreTarget(){return this.restoreTo}branches(){return[]}rootLabel(){return this.getAttribute(`aria-label`)??void 0}onRootPointerDownOutside(e){let t=this.area(),n=e.composedPath()[0];e.button===2&&t&&n instanceof Node&&tn(t,n)&&e.preventDefault()}syncTrigger(){let e=this.area();if(!e)return;fo(e,`data-state`,this.open?`open`:`closed`),fo(e,`data-disabled`,this.disabled?``:null);let t=this.open&&this.isModal&&!this.disabled;t&&this.areaPointerEvents===null?(this.areaPointerEvents=e.style.pointerEvents,e.style.pointerEvents=`auto`):!t&&this.areaPointerEvents!==null&&(e.style.pointerEvents=this.areaPointerEvents,this.areaPointerEvents=null)}openAt(e){let t=this.area();if(t){if(!this.open){let e=kn(document);this.restoreTo=e instanceof HTMLElement&&tn(t,e)?e:t}if(this.position=e,this.open){this.reanchor();return}this.openWith(`first`,`contextmenu`)}}openAtPoint(e,t){let n=this.area();if(!n)return;let r=an(n)===`rtl`;this.openAt({anchor:yo(e,t,n),placement:r?`left-start`:`right-start`,offset:_o})}inArea(e){let t=this.area(),n=e.composedPath()[0];return!!t&&n instanceof Node&&tn(t,n)}clearLongPress(){clearTimeout(this.longPress),this.longPress=void 0}connectedCallback(){super.connectedCallback(),this.addEventListener(`contextmenu`,this.handleContextMenu),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`pointerdown`,this.handlePointerDown),this.addEventListener(`pointermove`,this.handleTouchEnd),this.addEventListener(`pointerup`,this.handleTouchEnd),this.addEventListener(`pointercancel`,this.handleTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.clearLongPress(),this.removeEventListener(`contextmenu`,this.handleContextMenu),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`pointerdown`,this.handlePointerDown),this.removeEventListener(`pointermove`,this.handleTouchEnd),this.removeEventListener(`pointerup`,this.handleTouchEnd),this.removeEventListener(`pointercancel`,this.handleTouchEnd)}render(){return j`<slot></slot>${this.renderPanels()}`}}})))()}function So(e){return Eo.add(e),!Do&&typeof MutationObserver<`u`&&(Do=new MutationObserver(()=>{for(let e of[...Eo])e()}),Do.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`],subtree:!0})),()=>{Eo.delete(e),Eo.size===0&&(Do?.disconnect(),Do=null)}}var Co,wo,To,Eo,Do,$;function Oo(){return(Oo=e((()=>{g(),d(),c(),w(),y(),x(),Pt(),Gr(),lr(),vt(),N(),O(),Ln(),Fn(),Co=(e,t)=>Number.isFinite(e)&&e>0?e:t,wo=e=>e===`dark`||e===`github-dark`?`dark`:e===`light`?`light`:void 0,To=e=>typeof e?.editor?.create==`function`,Eo=new Set,Do=null,$=class e extends pt{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.language=`plaintext`,this.label=``,this.height=420,this.minHeight=160,this.maxHeight=800,this.loadTimeout=1e4,this.status=`loading`,this.scopeTheme=`light`,this.locale=new p(this),this.editor=null,this.engine=null,this.container=null,this.subscriptions=[],this.applying=!1,this.edited=!1,this.dirty=!1,this.unobserveTheme=null,this.started=!1}static{this.tagName=`minerva-code-editor`}static{this.dependencies=[H,gr]}static{this.styles=[h,k`
:host{
display: block;
min-width: 0;
}
::slotted([slot="editor"]){
flex: 1;
min-height: 0;
width: 100%;
}
.label{
cursor: default;
}
`,C(jt)]}get resolvedTheme(){return this.theme===`dark`||this.theme===`light`?this.theme:this.scopeTheme}focus(e){this.editor?this.editor.focus():this.fallback?.focus(e)}retry(){this.load()}getFormValue(){return this.value}getValidity(){return this.required&&!this.value?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.fallback??null}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}connectedCallback(){super.connectedCallback(),this.syncScopeTheme(),this.unobserveTheme=So(()=>this.syncScopeTheme()),this.started&&this.load()}disconnectedCallback(){super.disconnectedCallback(),this.unobserveTheme?.(),this.unobserveTheme=null,this.teardown()}syncScopeTheme(){let e=zt(this,`[data-theme]`);this.scopeTheme=wo(e?.getAttribute(`data-theme`))??`light`}get monacoTheme(){return this.resolvedTheme===`dark`?`vs-dark`:`vs`}teardown(){clearTimeout(this.timer),this.timer=void 0;for(let e of this.subscriptions)e.dispose();this.subscriptions=[];try{this.editor?.dispose()}catch{}this.editor=null,this.engine=null,this.container?.remove(),this.container=null}fail(){let e=this.status===`error`;this.teardown(),this.status=`error`,e||this.emit(`minerva-error`)}load(){this.teardown(),this.status=`loading`,this.isConnected&&(this.timer=setTimeout(()=>this.fail(),this.loadTimeout),this.monaco!==void 0&&this.mount())}mount(){let t=this.monaco;if(!To(t)){v&&f(e.tagName,'`monaco` is not a Monaco engine (expected `import * as monaco from "monaco-editor"`); showing the textarea fallback.'),this.fail();return}let n=document.createElement(`div`);n.slot=`editor`,n.setAttribute(`data-minerva-code-editor`,``),this.append(n),this.container=n;try{t.editor.setTheme(this.monacoTheme);let e=t.editor.create(n,{value:this.value,language:this.language,theme:this.monacoTheme,readOnly:this.isDisabled,domReadOnly:this.isDisabled,ariaLabel:this.label,automaticLayout:!0,minimap:{enabled:!1},wordWrap:`on`,scrollBeyondLastLine:!1});this.editor=e,this.engine=t,this.subscriptions.push(e.onDidChangeModelContent(()=>this.handleEdit()),e.onDidBlurEditorText(()=>this.commit()))}catch{this.fail();return}clearTimeout(this.timer),this.timer=void 0,this.status=`mounted`}handleEdit(){let e=this.editor;e&&!this.applying&&(this.isDisabled||(this.value=e.getValue(),this.dirty=!0,this.edited=!0,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.emit(`minerva-input`,{value:this.value})))}commit(){this.edited&&(this.edited=!1,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value}))}handleFallbackInput(e){this.isDisabled||(this.value=e.target.value,this.dirty=!0,this.edited=!0,this.emit(`minerva-input`,{value:this.value}))}applyValue(){let e=this.editor;if(e&&e.getValue()!==this.value){this.applying=!0;try{let t=e.getModel();this.isDisabled||!t?e.setValue(this.value):(e.executeEdits(``,[{range:t.getFullModelRange(),text:this.value,forceMoveMarkers:!0}]),e.pushUndoStop())}finally{this.applying=!1}}}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue)}updated(t){if(super.updated(t),!this.started){this.started=!0,v&&!this.label&&f(e.tagName,`set label: it is the visible label and the accessible name of the editor.`),this.load();return}if(t.has(`monaco`)&&t.get(`monaco`)!==void 0){this.load();return}t.has(`monaco`)&&this.monaco!==void 0&&!this.editor&&(this.status===`loading`&&this.timer!==void 0?this.mount():this.status===`error`&&this.load());let n=this.editor,r=this.engine;if(n&&r)try{t.has(`value`)&&this.applyValue(),t.has(`language`)&&r.editor.setModelLanguage(n.getModel(),this.language),(t.has(`disabled`)||t.has(`formDisabled`)||t.has(`label`))&&n.updateOptions({readOnly:this.isDisabled,domReadOnly:this.isDisabled,ariaLabel:this.label}),(t.has(`theme`)||t.has(`scopeTheme`))&&r.editor.setTheme(this.monacoTheme)}catch{this.fail()}}hookStates(){return{disabled:this.isDisabled,loading:this.status===`loading`}}render(){let e=Co(this.minHeight,160),t=Math.max(e,Co(this.maxHeight,800)),n=Math.min(t,Math.max(e,Co(this.height,420))),r=this.locale.t,i=this.status;return j`<div
part="root"
class="root"
role="group"
aria-label=${this.label||A}
>
<label
part="label"
class="label"
for=${i===`error`?`fallback`:A}
@click=${()=>this.editor?.focus()}
>${this.label}</label
>
<div
part="surface"
class="surface"
style=${P({height:`${n}px`})}
aria-busy=${i===`loading`?`true`:`false`}
>
${i===`error`?j`<div part="error" class="error">
                  <div class="message" role="alert">
                    ${this.unavailableText??r(`monacoCodeEditor.unavailable`)}
                  </div>
                  <minerva-button
                    part="retry-button"
                    color="neutral"
                    variant="outline"
                    size="small"
                    aria-label=${this.retryLabel??r(`monacoCodeEditor.retryLabel`)}
                    @click=${()=>this.retry()}
                  >
                    <span slot="start" class="retryIcon" aria-hidden="true"
                      >${_e}</span
                    >
                    ${this.retryText??r(`monacoCodeEditor.retry`)}
                  </minerva-button>
                </div>
                <textarea
                  id="fallback"
                  part="fallback"
                  class="fallback"
                  aria-label=${this.label||A}
                  spellcheck="false"
                  .value=${Xn(this.value)}
                  ?disabled=${this.isDisabled}
                  @input=${this.handleFallbackInput}
                  @change=${()=>this.commit()}
                ></textarea>`:j`${i===`loading`?j`<div part="loading" class="loading" role="status">
<minerva-progress
size="small"
aria-label=${this.loadingLabel??r(`monacoCodeEditor.loading`)}
></minerva-progress>
</div>`:A}<slot name="editor"></slot>`}
</div>
</div>`}},I([M({attribute:!1})],$.prototype,`monaco`,void 0),I([M({attribute:!1})],$.prototype,`value`,void 0),I([M({attribute:`value`})],$.prototype,`defaultValue`,void 0),I([M({reflect:!0})],$.prototype,`language`,void 0),I([M()],$.prototype,`label`,void 0),I([M({type:Number})],$.prototype,`height`,void 0),I([M({type:Number,attribute:`min-height`})],$.prototype,`minHeight`,void 0),I([M({type:Number,attribute:`max-height`})],$.prototype,`maxHeight`,void 0),I([M({reflect:!0})],$.prototype,`theme`,void 0),I([M({type:Number,attribute:`load-timeout`})],$.prototype,`loadTimeout`,void 0),I([M({attribute:`unavailable-text`})],$.prototype,`unavailableText`,void 0),I([M({attribute:`retry-text`})],$.prototype,`retryText`,void 0),I([M({attribute:`retry-label`})],$.prototype,`retryLabel`,void 0),I([M({attribute:`loading-label`})],$.prototype,`loadingLabel`,void 0),I([T()],$.prototype,`status`,void 0),I([T()],$.prototype,`scopeTheme`,void 0),I([D(`textarea`)],$.prototype,`fallback`,void 0)})))()}export{zi as $,X as A,Fr as At,ra as B,br as Bt,ja as C,ni as Ct,ka as D,Ur as Dt,Oa as E,V as Et,_a as F,z as Ft,Xi as G,J as H,la as I,Dr as It,Ji as J,Ki as K,ca as L,R as Lt,Y as M,Nr as Mt,ba as N,Mr as Nt,Z as O,zr as Ot,ga as P,Pr as Pt,Bi as Q,sa as R,Tr as Rt,Pa as S,ii as St,Ma as T,H as Tt,$i as U,ia as V,Zi as W,Wi as X,q as Y,Gi as Z,qa as _,ei as _t,bo as a,Ti as at,Ra as b,Qr as bt,mo as c,G as ct,Ba as d,vi as dt,Li as et,Ha as f,mi as ft,Va as g,ri as gt,Ua as h,fi as ht,go as i,K as it,Sa as j,Ir as jt,Ta as k,Rr as kt,Qa as l,bi as lt,Za as m,U as mt,Oo as n,Ri as nt,ho as o,wi as ot,Ga as p,W as pt,qi as q,xo as r,Ai as rt,fo as s,Ci as st,$ as t,Ei as tt,uo as u,_i as ut,Q as v,ai as vt,Aa as w,Gr as wt,Fa as x,oi as xt,Wa as y,ti as yt,oa as z,L as zt};