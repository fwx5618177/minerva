import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{$ as t,$n as n,$t as r,An as i,At as a,Bn as o,Bt as s,Cr as ee,Ct as te,Dn as ne,Dt as re,En as ie,Er as c,Et as ae,Fn as oe,Ft as se,Gt as ce,Hn as le,Ht as ue,In as de,It as fe,Jn as pe,Jt as me,Kn as he,Kt as ge,Ln as _e,Lt as ve,Mn as ye,Mt as be,Nn as xe,On as Se,Ot as Ce,Qt as we,Rn as Te,Rt as Ee,Sr as De,St as Oe,Tn as ke,Tr as l,Tt as Ae,Un as u,Ut as je,Vt as Me,Wn as Ne,Wt as Pe,Xn as Fe,Xt as Ie,Yn as Le,Yt as Re,Zt as ze,_n as Be,_r as d,_t as Ve,an as He,ar as f,at as Ue,bn as We,br as Ge,bt as Ke,cn as qe,cr as Je,ct as Ye,dn as Xe,dr as p,dt as Ze,en as Qe,er as $e,et,fn as tt,fr as m,ft as nt,gn as rt,gr as it,gt as at,hn as ot,hr as st,ht as ct,in as lt,ir as h,jt as ut,kt as dt,ln as ft,lr as g,lt as pt,mn as mt,mr as ht,mt as gt,n as _t,nn as vt,nt as yt,on as bt,or as _,ot as xt,pn as St,pr as v,pt as Ct,qn as wt,qt as Tt,rn as Et,sn as Dt,sr as Ot,st as kt,t as At,tn as jt,tt as Mt,un as Nt,ur as y,ut as Pt,vn as b,vr as x,vt as Ft,wn as It,wr as Lt,wt as Rt,xn as zt,xr as Bt,xt as Vt,yn as S,yr as C,yt as Ht,zn as Ut,zt as Wt}from"./minerva-web-components-FVTxT03l.js";import{$ as Gt,$t as Kt,A as w,An as qt,Bt as Jt,C as T,Ct as Yt,D as E,Dn as Xt,Dt as Zt,E as D,Et as Qt,Gt as $t,H as O,I as k,In as en,Kt as tn,L as A,M as j,Mt as nn,N as M,Nt as rn,On as an,Pn as on,Pt as sn,Q as cn,Rt as ln,S as N,Sn as un,Tn as dn,Tt as fn,Xt as pn,_ as mn,_n as hn,a as gn,an as _n,at as vn,b as yn,c as bn,cn as xn,d as Sn,en as Cn,et as wn,fn as Tn,ft as En,g as Dn,h as On,ht as kn,i as An,kn as jn,kt as Mn,l as Nn,n as Pn,nn as Fn,nt as In,o as Ln,p as Rn,pn as zn,r as Bn,rn as Vn,t as Hn,tn as Un,u as Wn,w as P,wt as Gn,xt as Kn,y as qn,yn as Jn,z as Yn}from"./minerva-web-components-e9i9Tzii.js";import{t as F}from"./minerva-web-components-DB7tn7hP.js";import{a as Xn,c as Zn,d as Qn,f as $n,h as er,l as tr,m as nr,o as rr,p as ir,s as ar,u as or}from"./minerva-web-components-BzRtUb-M.js";import{At as sr,Bt as cr,It as lr,Lt as ur,Mt as dr,Nt as fr,Rt as pr,jt as mr,zt as hr}from"./minerva-web-components-64cgW7W1.js";var gr,_r,I;function vr(){return(vr=e((()=>{Je(),l(),h(),u(),d(),v(),y(),b(),M(),D(),T(),yn(),xn(),gr={info:ye,success:zt,warning:xe,danger:$e},_r=[`slideIn`,`fadeIn`,`bounce`,`zoom`],I=class e extends p{constructor(...e){super(...e),this.color=`info`,this.variant=`subtle`,this.size=`medium`,this.heading=``,this.hideIcon=!1,this.closable=!1,this.noAnimation=!1,this.animationName=`slideIn`,this.banner=!1,this.elevation=!1,this.square=!1,this.collapsible=!1,this.collapsed=!1,this.locale=new x(this),this.aria=new c(this),this.slots=new g(this)}static{this.tagName=`minerva-alert`}static{this.styles=[m,O`
:host{
display: block;
}
.icon svg,
.expandButton svg,
.closeButton svg{
display: block;
}
`,S(Ot)]}get hasHeading(){return!!this.heading||this.slots.test(`heading`)}handleExpand(){let e=this.collapsed;this.emit(`minerva-expanded-change`,{expanded:e},{cancelable:!0})&&(this.collapsed=!e)}handleClose(){let e=this.adjacentTabbable(),t=this.parentElement;this.emit(`minerva-close`,{},{cancelable:!0})&&(this.isFocusInsideOrLost()&&this.moveFocusOut(e,t),this.hidden=!0)}isFocusInsideOrLost(){let e=this.ownerDocument,t=_n(e);return!t||t===e.body||!t.isConnected||Vn(this,t)}adjacentTabbable(){let e=Gt(this.ownerDocument.body),t=e.map((e,t)=>Vn(this,e)?t:-1).filter(e=>e>=0);if(!t.length)return null;let n=e=>!Vn(this,e)&&an(e);return e.slice(t[t.length-1]+1).find(n)??e.slice(0,t[0]).filter(n).pop()??null}moveFocusOut(e,t){let n=typeof this.returnFocus==`function`?this.returnFocus():this.returnFocus;n?.isConnected&&Tn(n)||e?.isConnected&&Tn(e)||this.focusContainer(t)}focusContainer(e){let t=this.ownerDocument;if(e?.isConnected){for(let n=e;n&&n!==t.body;n=n.parentElement)if(n.hasAttribute(`tabindex`)&&Tn(n))return;e!==t.body&&e!==t.documentElement&&(e.setAttribute(`tabindex`,`-1`),e.addEventListener(`blur`,()=>{e.getAttribute(`tabindex`)===`-1`&&e.removeAttribute(`tabindex`)},{once:!0}),Tn(e,{preventScroll:!0}))}}updated(){_&&this.collapsible&&!this.hasHeading&&f(e.tagName,`collapsible needs a heading (the toggle lives in the title): set heading or fill the heading slot.`)}hookStates(){return{state:this.collapsible&&this.hasHeading?this.collapsed?`closed`:`open`:void 0,size:this.size,variant:this.variant,color:this.color}}render(){let e=this.locale.t,t=this.hasHeading,n=this.collapsible&&t,r=!this.collapsed,i=this.slots.test(`[default]`),a=!this.noAnimation,o=this.borderRadius,s=this.alertRole??(this.color===`danger`||this.color===`warning`?`alert`:`status`);return A`<div
part="root"
class=${P({alert:!0,[this.color]:!0,[this.variant]:!0,[this.size]:!0,withIcon:!this.hideIcon,withTitle:t,banner:this.banner,withAnimation:a,[`animation-${this.animationName}`]:a&&_r.includes(this.animationName),withElevation:this.elevation,rounded:!this.square,expanded:r,collapsible:n})}
style=${N({borderRadius:o==null||o===``?void 0:/^\d+(\.\d+)?$/.test(String(o))?`${o}px`:String(o)})}
role=${s}
aria-label=${this.aria.label??k}
>
${this.hideIcon?k:A`<span
part="icon"
class="icon"
role="img"
aria-label=${this.iconLabel??e(`alert.icon.${this.color}`)}
><slot name="icon">${gr[this.color]??gr.info}</slot></span
>`}
<div class="content">
${t?A`<div class="title" part="title">
<slot name="heading">${this.heading}</slot>
${n?A`<button
type="button"
part="trigger"
class="expandButton"
aria-label=${r?this.collapseLabel??e(`alert.collapse`):this.expandLabel??e(`alert.expand`)}
aria-expanded=${String(r)}
aria-controls=${r&&i?`message`:k}
@click=${this.handleExpand}
>
${r?Le:Ut}
</button>`:k}
</div>`:k}
${i&&(!n||r)?A`<div id="message" class="message" part="description">
<slot></slot>
</div>`:k}
</div>
${this.slots.test(`action`)?A`<div class="action" part="action">
<slot name="action"></slot>
</div>`:k}
${this.closable?A`<button
type="button"
part="close-button"
class="closeButton"
aria-label=${this.closeLabel??e(`alert.close`)}
@click=${this.handleClose}
>
<slot name="close-icon">${Fe}</slot>
</button>`:k}
</div>`}},F([j({reflect:!0})],I.prototype,`color`,void 0),F([j({reflect:!0})],I.prototype,`variant`,void 0),F([j({reflect:!0})],I.prototype,`size`,void 0),F([j()],I.prototype,`heading`,void 0),F([j({type:Boolean,attribute:`hide-icon`})],I.prototype,`hideIcon`,void 0),F([j({type:Boolean,reflect:!0})],I.prototype,`closable`,void 0),F([j({type:Boolean,attribute:`no-animation`})],I.prototype,`noAnimation`,void 0),F([j({attribute:`animation-name`})],I.prototype,`animationName`,void 0),F([j({type:Boolean,reflect:!0})],I.prototype,`banner`,void 0),F([j({type:Boolean,reflect:!0})],I.prototype,`elevation`,void 0),F([j({type:Boolean,reflect:!0})],I.prototype,`square`,void 0),F([j({attribute:`border-radius`})],I.prototype,`borderRadius`,void 0),F([j({type:Boolean,reflect:!0})],I.prototype,`collapsible`,void 0),F([j({type:Boolean,reflect:!0})],I.prototype,`collapsed`,void 0),F([j({attribute:`close-label`})],I.prototype,`closeLabel`,void 0),F([j({attribute:`expand-label`})],I.prototype,`expandLabel`,void 0),F([j({attribute:`collapse-label`})],I.prototype,`collapseLabel`,void 0),F([j({attribute:`icon-label`})],I.prototype,`iconLabel`,void 0),F([j({attribute:`alert-role`})],I.prototype,`alertRole`,void 0),F([j({attribute:!1})],I.prototype,`returnFocus`,void 0)})))()}var yr,br,xr,Sr,L;function Cr(){return(Cr=e((()=>{h(),u(),Bt(),d(),v(),y(),b(),ot(),St(),nr(),or(),Zn(),Xn(),M(),D(),T(),xn(),yr=[`expanded`,`compact`,`floating`],br=`(max-width: 768px)`,xr=()=>typeof window<`u`&&typeof window.matchMedia==`function`?window.matchMedia(br):null,Sr={iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,control:!0},L=class e extends p{constructor(...e){super(...e),this.brand=``,this.sidebarMode=`expanded`,this.noSkipLink=!1,this.collapsed=!1,this.mobile=!1,this.drawerOpen=!1,this.hovered=!1,this.keyboardFocus=!1,this.locale=new x(this),this.slots=new g(this),this.modal=new rr(this),this.focusScope=new Qn(this,()=>({trapped:!0,loop:!0,restoreFocus:!1})),this.layer=new er(this,()=>({disableOutsidePointerEvents:!0,branches:()=>[this.headerToggle],onFocusOutside:e=>e.preventDefault(),onDismiss:()=>this.requestDrawer(!1)})),this.query=null,this.drawerActive=!1,this.handleMediaChange=()=>this.syncMobile()}static{this.tagName=`minerva-app-shell`}static{this.styles=[m,tr,O`
:host{
display: block;
}
`,S(tt),S(mt)]}openNavigation(){this.mobile&&(this.drawerOpen=!0)}closeNavigation(){this.drawerOpen=!1}expandNavigation(){this.sidebarMode=`expanded`}focusMain(){this.main?.focus()}connectedCallback(){super.connectedCallback(),this.query=xr(),this.query?.addEventListener(`change`,this.handleMediaChange),this.syncMobile()}disconnectedCallback(){super.disconnectedCallback(),this.query?.removeEventListener(`change`,this.handleMediaChange),this.query=null,this.deactivateDrawer()}syncMobile(){let e=!!this.query?.matches;e!==this.mobile&&(this.mobile=e,this.hovered=!1,this.keyboardFocus=!1,this.drawerOpen=!1)}get mode(){return yr.includes(this.sidebarMode)?this.sidebarMode:`expanded`}setMode(e){e!==this.mode&&this.emit(`minerva-sidebar-mode-change`,{mode:e},{cancelable:!0})&&(this.sidebarMode=e)}requestDrawer(e){e!==this.drawerOpen&&this.emit(`minerva-open-change`,{open:e},{cancelable:!0})&&(this.drawerOpen=e)}willUpdate(e){e.has(`navigationKey`)&&e.get(`navigationKey`)!==void 0&&(this.drawerOpen=!1),this.mobile||(this.drawerOpen=!1),this.collapsed=!this.mobile&&this.mode!==`expanded`&&(this.mode!==`floating`||!this.hovered&&!this.keyboardFocus)}updated(t){let n=this.mobile&&this.drawerOpen;n&&!this.drawerActive&&this.drawer?(this.drawerActive=!0,Ge(this.overlay),Ge(this.drawer),this.modal.activate(this),this.layer.activate(this.drawer),this.focusScope.activate(this.drawer)):!n&&this.drawerActive&&(this.deactivateDrawer(),this.headerToggle?.focus()),_&&t.has(`sidebarMode`)&&!yr.includes(this.sidebarMode)&&f(e.tagName,`unknown sidebar-mode="${this.sidebarMode}" (expected ${yr.join(`, `)}); using "expanded".`),_&&!this.slots.test(`navigation`)&&f(e.tagName,`put the navigation in the "navigation" slot (e.g. <nav slot="navigation">).`)}hookStates(){return{state:this.mobile&&this.drawerOpen?`open`:`closed`}}deactivateDrawer(){this.drawerActive&&(this.drawerActive=!1,this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate(),C(this.drawer),C(this.overlay))}label(e,t){return e??this.locale.t(`appShell.${t}`)}handleSkip(e){e.preventDefault(),this.focusMain()}handleSidebarFocusIn(e){let t=e.composedPath()[0],n;try{n=!!t?.matches?.(`:focus-visible`)}catch{n=!1}n&&(this.keyboardFocus=!0)}handleSidebarFocusOut(e){let t=e.relatedTarget;(!t||!this.sidebar||!Vn(this.sidebar,t))&&(this.keyboardFocus=!1)}renderHeaderToggle(){return this.mobile?A`<button
type="button"
class=${P(Sr)}
aria-label=${this.label(this.openNavigationLabel,`openNavigation`)}
aria-haspopup="dialog"
aria-expanded=${String(this.drawerOpen)}
aria-controls=${this.drawerOpen?`drawer`:k}
@click=${()=>this.requestDrawer(!this.drawerOpen)}
>
${Se}
</button>`:this.renderCollapseControl()}renderCollapseControl(){let e=this.mode!==`expanded`;return A`<button
type="button"
class=${P(Sr)}
aria-label=${e?this.label(this.expandLabel,`expand`):this.label(this.collapseLabel,`collapse`)}
aria-controls="sidebar"
aria-expanded=${String(!this.collapsed)}
@click=${()=>this.setMode(e?`expanded`:`compact`)}
>
${e?Se:ne}
</button>`}renderSidebar(){let e=this.mode===`floating`,t=this.label(this.navigationLabel,`navigation`);return A`<aside
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
${this.slots.test(`brand-icon`)?A`<span class="brandIcon" aria-hidden="true"
><slot name="brand-icon"></slot
></span>`:k}
<span class="brandLabel"><slot name="brand">${this.brand}</slot></span>
</div>
<div class="navigation"><slot name="navigation"></slot></div>
<div class="sidebarActions">
${this.renderCollapseControl()}
<button
type="button"
class=${P(Sr)}
aria-pressed=${String(e)}
aria-label=${e?this.label(this.disableFloatingLabel,`disableFloating`):this.label(this.enableFloatingLabel,`enableFloating`)}
@click=${()=>this.setMode(e?`compact`:`floating`)}
>
${e?It:i}
</button>
</div>
</aside>`}renderDrawer(){let e=this.label(this.navigationLabel,`navigation`);return A`<div
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
${Fe}
</button>
</div>`}render(){let e=this.skipLink||this.locale.t(`appShell.skipToContent`);return A`<div
class="shell"
part="root"
data-sidebar-mode=${this.mode}
data-sidebar-expanded=${this.collapsed?k:`true`}
>
${this.noSkipLink?k:A`<a
class="skipLink"
part="skip-link"
href="#main"
@click=${this.handleSkip}
>${e}</a
>`}
${this.mobile?k:this.renderSidebar()}
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
${this.mobile&&this.drawerOpen?this.renderDrawer():k}`}},F([j()],L.prototype,`brand`,void 0),F([j({attribute:`sidebar-mode`,reflect:!0})],L.prototype,`sidebarMode`,void 0),F([j({attribute:`navigation-label`})],L.prototype,`navigationLabel`,void 0),F([j({attribute:`navigation-key`})],L.prototype,`navigationKey`,void 0),F([j({attribute:`skip-link`})],L.prototype,`skipLink`,void 0),F([j({type:Boolean,attribute:`no-skip-link`})],L.prototype,`noSkipLink`,void 0),F([j({attribute:`expand-label`})],L.prototype,`expandLabel`,void 0),F([j({attribute:`collapse-label`})],L.prototype,`collapseLabel`,void 0),F([j({attribute:`enable-floating-label`})],L.prototype,`enableFloatingLabel`,void 0),F([j({attribute:`disable-floating-label`})],L.prototype,`disableFloatingLabel`,void 0),F([j({attribute:`open-navigation-label`})],L.prototype,`openNavigationLabel`,void 0),F([j({attribute:`close-navigation-label`})],L.prototype,`closeNavigationLabel`,void 0),F([j({type:Boolean,reflect:!0})],L.prototype,`collapsed`,void 0),F([j({type:Boolean,reflect:!0})],L.prototype,`mobile`,void 0),F([w()],L.prototype,`drawerOpen`,void 0),F([w()],L.prototype,`hovered`,void 0),F([w()],L.prototype,`keyboardFocus`,void 0),F([E(`.header button`)],L.prototype,`headerToggle`,void 0),F([E(`.drawer`)],L.prototype,`drawer`,void 0),F([E(`.overlay`)],L.prototype,`overlay`,void 0),F([E(`main`)],L.prototype,`main`,void 0),F([E(`aside`)],L.prototype,`sidebar`,void 0)})))()}var wr,R;function Tr(){return(Tr=e((()=>{l(),h(),u(),d(),v(),y(),b(),Zn(),qe(),bt(),Nt(),M(),D(),T(),yn(),xn(),mn(),wr={top:`top-start`,bottom:`bottom-start`,left:`left-start`,right:`right-start`},R=class e extends ft{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.options=[],this.open=!1,this.label=``,this.placeholder=``,this.mode=`basic`,this.size=`medium`,this.variant=`outline`,this.invalid=!1,this.readOnly=!1,this.loading=!1,this.placement=`bottom`,this.offset={x:0,y:4},this.noAnimation=!1,this.autoHighlight=!1,this.noFillOnSelect=!1,this.groupMode=`first`,this.focusedIndex=-1,this.hoveredIndex=-1,this.locale=new x(this),this.aria=new c(this,()=>this.labels),this.slots=new g(this),this.floating=new ar(this,()=>{let e=this.placement===`top`||this.placement===`bottom`,t=this.offset??{x:0,y:4};return{anchor:()=>this.container,floating:()=>this.popup,placement:wr[this.placement]??`bottom-start`,offset:{mainAxis:e?t.y:t.x,crossAxis:e?t.x:t.y},matchAnchorWidth:`min`,branches:()=>[this.container],onEscapeKeyDown:e=>{(this.composing||e.isComposing)&&e.preventDefault()},onDismiss:()=>this.close(),returnFocusOnEscape:()=>this.input,onPosition:()=>this.syncHookStates()}}),this.composing=!1,this.dirty=!1}static{this.tagName=`minerva-autocomplete`}static{this.shadowRootOptions={...ft.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[m,tr,S(Dt),S(He),O`
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
`]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get blocked(){return this.isDisabled||this.readOnly}get shown(){return this.open&&!this.blocked}getFormValue(){return this.value}getValidity(){return this.required&&this.value===``?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.focusedIndex=-1}restoreFormState(e){typeof e==`string`&&(this.value=e)}get processedOptions(){let e=this.value,t=e.toLowerCase(),n=(this.options??[]).filter(n=>this.filterOption?this.filterOption(e,n):n.label.toLowerCase().includes(t));return this.sortOption?[...n].sort(this.sortOption):n}groupOptions(e){let t=this.groupBy;if(!t)return null;if(this.groupMode===`adjacent`){let n=[];for(let r of e){let e=t(r),i=n[n.length-1];i&&i[0]===e?i[1].push(r):n.push([e,[r]])}return n}let n=new Map;for(let r of e){let e=t(r),i=n.get(e);i?i.push(r):n.set(e,[r])}return Array.from(n.entries())}get navigableOptions(){let e=this.processedOptions,t=this.groupOptions(e);return t?t.flatMap(([,e])=>e):e}activeIndex(e){return this.focusedIndex>=0?this.focusedIndex:this.autoHighlight&&this.shown?e.findIndex(e=>!e.disabled):-1}requestOpen(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}openDropdown(){this.blocked||this.requestOpen(!0)}close(){this.requestOpen(!1),this.focusedIndex=-1}setText(e,t){e!==this.value&&(this.value=e,this.emit(`minerva-input`,{value:e}),t&&this.emit(`minerva-change`,{value:e}))}moveFocus(e){let t=this.navigableOptions,n=t.length;if(n===0)return;let r=this.activeIndex(t),i=r>=0?r:e===1?-1:n;for(let r=0;r<n;r+=1)if(i=(i+e+n)%n,!t[i].disabled){this.focusedIndex=i;return}}selectOption(e){e.disabled||(this.noFillOnSelect||this.setText(e.label,!0),this.close(),this.emit(`minerva-select`,{value:e.value,option:e}))}handleKeyDown(e){if(!(this.blocked||this.composing||e.isComposing||e.keyCode===229))switch(e.key){case`ArrowDown`:case`ArrowUp`:e.preventDefault(),this.open||this.openDropdown(),this.moveFocus(e.key===`ArrowDown`?1:-1);break;case`Enter`:{let t=this.navigableOptions,n=this.shown?t[this.activeIndex(t)]:void 0,r=this.value.trim();n?(e.preventDefault(),this.selectOption(n)):r&&(e.preventDefault(),this.emit(`minerva-submit`,{value:r}),this.close());break}case`Escape`:!this.shown&&!this.floating.isOpen&&this.value!==``&&(e.preventDefault(),this.setText(``,!0),this.focusedIndex=-1)}}handleInput(){this.setText(this.input.value,!1),this.focusedIndex=-1,this.openDropdown()}handleChange(){this.value=this.input.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}handleBlur(e){let t=e.relatedTarget;t&&(this.popup?.contains(t)||this.container?.contains(t))||this.close()}handleOptionClick(e){e.disabled||this.composing||(this.selectOption(e),this.input?.focus())}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),this.open&&this.blocked&&(this.open=!1,this.focusedIndex=-1)}hookStates(){let e=this.shown&&this.floating.isOpen?this.floating.position.placement:void 0,{side:t,align:n}=e?Jt(e):{side:void 0,align:void 0};return{state:this.shown?`open`:`closed`,disabled:this.isDisabled,readonly:this.readOnly,loading:this.loading,side:t,align:n,placement:e}}updated(t){if(super.updated(t),this.floating.sync(this.shown),t.has(`focusedIndex`)&&this.focusedIndex>=0&&this.shadowRoot?.getElementById(`option-${this.focusedIndex}`)?.scrollIntoView?.({block:`nearest`}),_&&t.has(`options`)){let t=new Set;for(let n of this.options??[]){if(t.has(n.value)){f(e.tagName,`several options have the value "${n.value}"; option values must be unique.`);break}t.add(n.value)}}}renderOptionContent(e){return this.mode===`custom`&&this.renderOption?this.renderOption(e):A`<div class="basicOption">
${e.icon?A`<span class="icon">${e.icon}</span>`:k}
<div class="content">
<div class="label">${e.label}</div>
${e.description?A`<div class="description">${e.description}</div>`:k}
</div>
</div>`}renderOptionItem(e,t,n){let r=n===t;return A`<div
part="item"
class=${P({optionItem:!0,disabled:!!e.disabled,highlight:!!e.highlight,active:this.hoveredIndex===t||r})}
style=${e.style?N(e.style):k}
role="option"
tabindex="-1"
id=${`option-${t}`}
aria-selected=${String(r)}
aria-disabled=${e.disabled?`true`:k}
@mousedown=${e=>e.preventDefault()}
@click=${()=>this.handleOptionClick(e)}
@keydown=${t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),t.stopPropagation(),this.handleOptionClick(e))}}
@mouseenter=${()=>this.hoveredIndex=t}
@mouseleave=${()=>this.hoveredIndex=-1}
>
${this.renderOptionContent(e)}
</div>`}renderList(){let{t:e}=this.locale;if(this.loading)return A`<div role="presentation" class="loading" part="loading">
<span role="progressbar" aria-label=${e(`common.loading`)}
>${ie}</span
>
</div>`;let t=this.processedOptions;if(t.length===0)return A`<div role="presentation" class="empty" part="empty">
${this.renderEmpty?.()||A`${ke}<span>${e(`empty.description`)}</span>`}
</div>`;let n=this.groupOptions(t),r=n?n.flatMap(([,e])=>e):t,i=this.activeIndex(r);return n?n.map(([e,t])=>{let n=t.map(e=>this.renderOptionItem(e,r.indexOf(e),i));return e===``?n:A`<div class="optionGroup" role="group" aria-label=${e}>
<div class="groupLabel" part="group-label" aria-hidden="true">
${e}
</div>
${n}
</div>`}):t.map((e,t)=>this.renderOptionItem(e,t,i))}render(){let e=this.shown,t=this.isDisabled,n=e?this.navigableOptions:[],r=e?this.activeIndex(n):-1,i=e&&r>=0&&r<n.length?`option-${r}`:void 0,a=this.label?void 0:this.aria.label;return A`<div
part="root"
class="autoComplete"
@compositionstart=${()=>this.composing=!0}
@compositionend=${()=>this.composing=!1}
>
${this.label?A`<label for="input" class="label" part="label"
>${this.label}</label
>`:k}
<div
part="field"
class=${P({root:!0,[this.variant]:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
data-component="input"
>
${this.slots.test(`prefix`)?A`<span class="addon start"><slot name="prefix"></slot></span>`:k}
<input
id="input"
part="input"
class="field"
type="text"
role="combobox"
aria-autocomplete="list"
aria-expanded=${String(e)}
aria-controls=${e?`listbox`:k}
aria-activedescendant=${i??k}
aria-label=${a??k}
aria-description=${this.aria.description??k}
aria-required=${this.required?`true`:k}
aria-invalid=${this.invalid||this.aria.attr(`aria-invalid`)===`true`?`true`:k}
data-minerva-escape-consumer=${!e&&this.value!==``?``:k}
autocomplete="off"
.value=${qn(this.value)}
placeholder=${this.placeholder||k}
?disabled=${t}
?readonly=${this.readOnly}
@input=${this.handleInput}
@change=${this.handleChange}
@focus=${()=>this.openDropdown()}
@click=${()=>{this.open||this.openDropdown()}}
@blur=${this.handleBlur}
@keydown=${this.handleKeyDown}
/>
${this.slots.test(`suffix`)?A`<span class="addon end"><slot name="suffix"></slot></span>`:k}
</div>
${e?A`<div class="popup" part="content" popover="manual">
<div
class=${P({dropdown:!0,animated:!this.noAnimation})}
>
<div
class="optionList"
part="list"
role="listbox"
id="listbox"
aria-label=${this.label||a||k}
aria-busy=${this.loading?`true`:k}
>
${this.renderList()}
</div>
</div>
</div>`:k}
</div>`}},F([j({attribute:!1})],R.prototype,`value`,void 0),F([j({attribute:`value`})],R.prototype,`defaultValue`,void 0),F([j({attribute:!1})],R.prototype,`options`,void 0),F([j({type:Boolean,reflect:!0})],R.prototype,`open`,void 0),F([j()],R.prototype,`label`,void 0),F([j()],R.prototype,`placeholder`,void 0),F([j({reflect:!0})],R.prototype,`mode`,void 0),F([j({reflect:!0})],R.prototype,`size`,void 0),F([j({reflect:!0})],R.prototype,`variant`,void 0),F([j({type:Boolean,reflect:!0})],R.prototype,`invalid`,void 0),F([j({type:Boolean,reflect:!0,attribute:`readonly`})],R.prototype,`readOnly`,void 0),F([j({type:Boolean,reflect:!0})],R.prototype,`loading`,void 0),F([j({reflect:!0})],R.prototype,`placement`,void 0),F([j({attribute:!1})],R.prototype,`offset`,void 0),F([j({type:Boolean,attribute:`no-animation`})],R.prototype,`noAnimation`,void 0),F([j({type:Boolean,attribute:`auto-highlight`})],R.prototype,`autoHighlight`,void 0),F([j({type:Boolean,attribute:`no-fill-on-select`})],R.prototype,`noFillOnSelect`,void 0),F([j({attribute:`group-mode`})],R.prototype,`groupMode`,void 0),F([j({attribute:!1})],R.prototype,`filterOption`,void 0),F([j({attribute:!1})],R.prototype,`sortOption`,void 0),F([j({attribute:!1})],R.prototype,`groupBy`,void 0),F([j({attribute:!1})],R.prototype,`renderOption`,void 0),F([j({attribute:!1})],R.prototype,`renderEmpty`,void 0),F([w()],R.prototype,`focusedIndex`,void 0),F([w()],R.prototype,`hoveredIndex`,void 0),F([E(`input`)],R.prototype,`input`,void 0),F([E(`.autoComplete`)],R.prototype,`container`,void 0),F([E(`.popup`)],R.prototype,`popup`,void 0)})))()}function Er(e){let t=e?.trim()??``;return t?Or.test(t[0])?t[0]:t.split(/\s+/).slice(0,2).map(e=>e[0].toUpperCase()).join(``):``}var Dr,Or,kr,Ar,jr;function Mr(){return(Mr=e((()=>{l(),h(),d(),v(),y(),b(),lt(),vt(),M(),D(),T(),yn(),Dr=[`xsmall`,`small`,`medium`,`large`,`xlarge`,`xxlarge`],Or=/[㐀-鿿豈-﫿]/,kr={fromAttribute:e=>e&&/^\d+(\.\d+)?$/.test(e)?Number(e):e??`medium`,toAttribute:e=>String(e)},Ar=class e extends p{constructor(...e){super(...e),this.name=``,this.shape=`circle`,this.size=`medium`,this.stacked=!1,this.locale=new x(this),this.aria=new c(this),this.slots=new g(this)}static{this.tagName=`minerva-avatar`}static{this.styles=[m,O`
:host{
display: inline-block;
flex-shrink: 0;
vertical-align: middle;
line-height: 0;
}
.avatarText{
line-height: 1;
}
`,S(Et)]}hookStates(){return{size:typeof this.size==`number`?void 0:this.size,shape:this.shape}}updated(t){_&&t.has(`size`)&&typeof this.size!=`number`&&!Dr.includes(this.size)&&f(e.tagName,`unknown size "${this.size}": use a preset (${Dr.join(`, `)}) or a number of pixels.`)}render(){let e=!!this.src&&this.failedSrc!==this.src,t=this.aria.label??(this.name||this.locale.t(`avatar.default`)),n=typeof this.size==`number`,r=P({avatar:!0,[this.shape]:!0,[String(this.size)]:!n,stacked:this.stacked}),i=N(n?{"--avatar-size":`${this.size}px`,width:`${this.size}px`,height:`${this.size}px`}:{});if(e)return A`<span part="root" class=${r} style=${i}
><img
part="image"
class="avatarImg"
alt=${this.alt??t}
src=${this.src}
draggable="false"
@error=${()=>this.failedSrc=this.src}
/></span>`;let a=Er(this.name),o=this.slots.test(`fallback`)?A`<slot name="fallback"></slot>`:a||A`<slot></slot>`;return A`<span
part="root"
role="img"
aria-label=${t}
class=${r}
style=${i}
><span part="fallback" class="avatarText" aria-hidden="true"
>${o}</span
></span
>`}},F([j()],Ar.prototype,`src`,void 0),F([j()],Ar.prototype,`name`,void 0),F([j()],Ar.prototype,`alt`,void 0),F([j({reflect:!0})],Ar.prototype,`shape`,void 0),F([j({reflect:!0,converter:kr})],Ar.prototype,`size`,void 0),F([j({type:Boolean,reflect:!0})],Ar.prototype,`stacked`,void 0),F([w()],Ar.prototype,`failedSrc`,void 0),jr=class e extends p{constructor(...e){super(...e),this.locale=new x(this),this.aria=new c(this),this.slots=new g(this)}static{this.tagName=`minerva-avatar-group`}static{this.shadowRootOptions={...p.shadowRootOptions,slotAssignment:`manual`}}static{this.styles=[m,O`
:host{
display: flex;
}
.avatarGroup{
flex: 1 1 auto;
min-width: 0;
}
`,S(jt)]}visibleAvatars(){let e=Array.from(this.children);return this.max===void 0||this.max===null?e:e.slice(0,Math.max(0,this.max))}updated(t){let n=this.visibleAvatars();Array.from(this.renderRoot.querySelectorAll(`slot[data-item]`)).forEach((e,t)=>{let r=n[t];r&&typeof e.assign==`function`&&e.assign(r)}),_&&t.has(`max`)&&this.max!==void 0&&this.max!==null&&!(Number.isInteger(this.max)&&this.max>=0)&&f(e.tagName,`max must be a non-negative integer (got ${this.max}).`)}render(){this.slots;let e=this.children.length,t=this.visibleAvatars(),n=(Number(this.count)||0)+e-t.length,r=this.aria.label??(n>0?this.locale.t(`avatar.groupWithMore`,{count:n}):this.locale.t(`avatar.group`));return A`<div
part="root"
role="group"
class="avatarGroup"
aria-label=${r}
>
${t.map(()=>A`<div part="item" class="avatarGroupItem">
<slot data-item></slot>
</div>`)}
${n>0?A`<div part="count" class="count" aria-hidden="true">
+${n}
</div>`:k}
</div>`}},F([j({type:Number})],jr.prototype,`count`,void 0),F([j({type:Number})],jr.prototype,`max`,void 0)})))()}var Nr;function Pr(){return(Pr=e((()=>{l(),h(),d(),v(),y(),b(),Qe(),M(),D(),T(),yn(),Nr=class e extends p{constructor(...e){super(...e),this.color=`primary`,this.variant=`solid`,this.size=`medium`,this.position=`top-right`,this.dot=!1,this.badgeRole=`status`,this.locale=new x(this),this.aria=new c(this),this.slots=new g(this)}static{this.tagName=`minerva-badge`}static{this.styles=[m,O`
:host{
display: inline-flex;
vertical-align: middle;
}
`,S(r)]}hasElementChildren(){return Array.from(this.children).some(e=>!e.hasAttribute(`slot`)||e.getAttribute(`slot`)===``)}hookStates(){return{size:this.size,variant:this.variant,color:this.color}}updated(){_&&this.dot&&!this.aria.label&&![`presentation`,`none`].includes(this.badgeRole)&&f(e.tagName,`a dot badge has no text: set aria-label (e.g. "New messages") or badge-role="presentation".`)}render(){let e=this.slots.test(`[default]`),t=e&&!this.hasElementChildren(),n=this.content!==void 0&&this.content!==null||this.slots.test(`content`),r=!e||t&&!n,i=k;this.dot||(n?i=A`<slot name="content">${this.content}</slot>`:t?i=A`<slot></slot>`:e&&(i=this.locale.t(`badge.default`)));let a=A`<span
part=${r?`root`:`badge`}
class=${P({badge:!0,[this.color]:!0,[this.variant]:!0,[this.size]:!0,standalone:r,[this.position]:!r,dot:this.dot})}
role=${this.badgeRole||k}
aria-label=${this.aria.label??k}
style=${N({borderRadius:this.borderRadius,borderWidth:this.borderWidth})}
>${this.slots.test(`icon`)?A`<span class="icon" part="icon"
><slot name="icon"></slot
></span>`:k}${i}</span
>`;return r?a:A`<div part="root" class="badgeWrapper">
<div class="content"><slot></slot></div>
${a}
</div>`}},F([j({reflect:!0})],Nr.prototype,`color`,void 0),F([j({reflect:!0})],Nr.prototype,`variant`,void 0),F([j({reflect:!0})],Nr.prototype,`size`,void 0),F([j()],Nr.prototype,`content`,void 0),F([j({reflect:!0})],Nr.prototype,`position`,void 0),F([j({type:Boolean,reflect:!0})],Nr.prototype,`dot`,void 0),F([j({attribute:`border-radius`})],Nr.prototype,`borderRadius`,void 0),F([j({attribute:`border-width`})],Nr.prototype,`borderWidth`,void 0),F([j({attribute:`badge-role`})],Nr.prototype,`badgeRole`,void 0)})))()}function Fr(e){return e.replace(/[;{}<>]/g,``)}var Ir;function Lr(){return(Lr=e((()=>{xn(),Ir={fromAttribute:e=>{if(e===null)return;let t=e.trim();return/^-?\d+(\.\d+)?$/.test(t)?Number(t):t},toAttribute:e=>e===void 0?null:String(e)}})))()}var Rr,zr,Br,z,B;function Vr(){return(Vr=e((()=>{h(),v(),Lr(),M(),D(),Rr={bg:`var(--surface-color)`,"bg.subtle":`var(--surface-subtle-color)`,"bg.muted":`var(--surface-muted-color)`,"bg.emphasis":`var(--surface-muted-color)`,"bg.canvas":`var(--canvas-color)`,"bg.elevated":`var(--surface-elevated-color)`},zr=[`none`,`sm`,`md`,`lg`,`xl`,`2xl`,`full`],Br=[`sm`,`md`,`lg`,`xl`],z={converter:Ir},B=class e extends p{static{this.tagName=`minerva-box`}static{this.styles=[m,O`
:host{
display: block;
}
`]}declarations(){let e=[],t=(t,...n)=>{if(t!==void 0&&t!==``)for(let r of n)e.push([r,Yt(t)])},n=(t,n)=>{t!==void 0&&t!==``&&e.push([n,zn(t)])};return t(this.p,`padding`),t(this.px,`padding-left`,`padding-right`),t(this.py,`padding-top`,`padding-bottom`),t(this.pt,`padding-top`),t(this.pr,`padding-right`),t(this.pb,`padding-bottom`),t(this.pl,`padding-left`),t(this.m,`margin`),t(this.mx,`margin-left`,`margin-right`),t(this.my,`margin-top`,`margin-bottom`),t(this.mt,`margin-top`),t(this.mr,`margin-right`),t(this.mb,`margin-bottom`),t(this.ml,`margin-left`),n(this.w,`width`),n(this.h,`height`),n(this.minW,`min-width`),n(this.minH,`min-height`),n(this.maxW,`max-width`),n(this.maxH,`max-height`),this.bg&&e.push([`background`,Rr[this.bg]??this.bg]),this.rounded&&e.push([`border-radius`,zr.includes(this.rounded)?`var(--radius-${this.rounded})`:this.rounded]),this.boxShadow&&e.push([`box-shadow`,Br.includes(this.boxShadow)?`var(--shadow-${this.boxShadow})`:this.boxShadow]),this.border&&e.push([`border`,this.border]),e}updated(){_&&this.bg?.startsWith(`bg.`)&&!(this.bg in Rr)&&f(e.tagName,`unknown surface alias bg="${this.bg}" (expected one of ${Object.keys(Rr).join(`, `)}).`)}render(){let e=this.declarations().map(([e,t])=>`${e}:${Fr(t)};`).join(``);return A`<style>
:host{${e}}
</style>
<slot></slot>`}},F([j(z)],B.prototype,`p`,void 0),F([j(z)],B.prototype,`px`,void 0),F([j(z)],B.prototype,`py`,void 0),F([j(z)],B.prototype,`pt`,void 0),F([j(z)],B.prototype,`pr`,void 0),F([j(z)],B.prototype,`pb`,void 0),F([j(z)],B.prototype,`pl`,void 0),F([j(z)],B.prototype,`m`,void 0),F([j(z)],B.prototype,`mx`,void 0),F([j(z)],B.prototype,`my`,void 0),F([j(z)],B.prototype,`mt`,void 0),F([j(z)],B.prototype,`mr`,void 0),F([j(z)],B.prototype,`mb`,void 0),F([j(z)],B.prototype,`ml`,void 0),F([j(z)],B.prototype,`w`,void 0),F([j(z)],B.prototype,`h`,void 0),F([j({converter:Ir,attribute:`min-w`})],B.prototype,`minW`,void 0),F([j({converter:Ir,attribute:`min-h`})],B.prototype,`minH`,void 0),F([j({converter:Ir,attribute:`max-w`})],B.prototype,`maxW`,void 0),F([j({converter:Ir,attribute:`max-h`})],B.prototype,`maxH`,void 0),F([j()],B.prototype,`bg`,void 0),F([j()],B.prototype,`rounded`,void 0),F([j({attribute:`box-shadow`})],B.prototype,`boxShadow`,void 0),F([j()],B.prototype,`border`,void 0)})))()}var Hr,V;function Ur(){return(Ur=e((()=>{l(),h(),ht(),v(),y(),b(),we(),M(),D(),T(),yn(),Hr=e=>`borderRadius${e.charAt(0).toUpperCase()}${e.slice(1)}`,V=class e extends p{constructor(...e){super(...e),this.color=`primary`,this.variant=`solid`,this.size=`medium`,this.disabled=!1,this.loading=!1,this.fullWidth=!1,this.active=!1,this.type=`button`,this.internals=st(this),this.aria=new c(this),this.slots=new g(this),this.blockInactiveClicks=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-button`}static{this.formAssociated=!0}static{this.styles=[m,O`
:host{
display: inline-flex;
max-width: 100%;
vertical-align: middle;
}
:host([full-width]){
display: flex;
width: 100%;
}
`,S(ze)]}get form(){return this.internals?.form??null}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}handleClick(e){if(this.loading||this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockInactiveClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockInactiveClicks,!0)}hookStates(){return{state:this.active?`active`:`inactive`,disabled:this.disabled,loading:this.loading,size:this.size,variant:this.variant,color:this.color,shape:this.shape}}updated(){_&&this.shape===`circle`&&!this.aria.label&&(this.textContent?.trim()||f(e.tagName,`shape="circle" buttons usually only contain an icon: set aria-label to give them an accessible name.`))}render(){let e=this.borderRadius,t=typeof e==`number`||typeof e==`string`&&/^\d+(\.\d+)?$/.test(e),n=this.loading&&this.slots.test(`loading`),r=this.loading&&!n,i=A`<span
class="loadingSpinner"
part="spinner"
aria-hidden="true"
></span>`;return A`<button
part="root"
type="button"
class=${P({customButton:!0,[this.color]:!0,[`variant-${this.variant}`]:!0,[this.size]:!0,[this.shape??``]:!!this.shape,[Hr(String(e??``))]:!!e&&!t,fullWidth:this.fullWidth,active:this.active,loading:this.loading})}
style=${N(t?{borderRadius:`${Number(e)}px`}:{})}
?disabled=${this.disabled}
aria-label=${this.aria.label??k}
aria-description=${this.aria.description??k}
aria-pressed=${this.aria.attr(`aria-pressed`)??k}
aria-expanded=${this.aria.attr(`aria-expanded`)??k}
aria-haspopup=${this.aria.attr(`aria-haspopup`)??k}
aria-busy=${this.loading?`true`:k}
aria-disabled=${this.loading?`true`:k}
@click=${this.handleClick}
>
${n?A`${i}<span class="label" part="label"
><slot name="loading"></slot
></span>`:A`${this.loading?i:k}
${this.slots.test(`start`)?A`<span
class=${P({icon:!0,hidden:r})}
part="start-icon"
><slot name="start"></slot
></span>`:k}
<span class=${P({label:!0,hidden:r})} part="label"
><slot></slot
></span>
${this.slots.test(`end`)?A`<span
class=${P({icon:!0,hidden:r})}
part="end-icon"
><slot name="end"></slot
></span>`:k}`}
</button>`}},F([j({reflect:!0})],V.prototype,`color`,void 0),F([j({reflect:!0})],V.prototype,`variant`,void 0),F([j({reflect:!0})],V.prototype,`size`,void 0),F([j({reflect:!0})],V.prototype,`shape`,void 0),F([j({attribute:`border-radius`})],V.prototype,`borderRadius`,void 0),F([j({type:Boolean,reflect:!0})],V.prototype,`disabled`,void 0),F([j({type:Boolean,reflect:!0})],V.prototype,`loading`,void 0),F([j({type:Boolean,reflect:!0,attribute:`full-width`})],V.prototype,`fullWidth`,void 0),F([j({type:Boolean,reflect:!0})],V.prototype,`active`,void 0),F([j({reflect:!0})],V.prototype,`type`,void 0),F([E(`button`)],V.prototype,`button`,void 0)})))()}var Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri;function ii(){return(ii=e((()=>{l(),h(),Bt(),ht(),v(),b(),Ie(),Tt(),M(),D(),T(),xn(),Rn(),Wr=[`div`,`article`,`section`,`a`,`button`],Gr=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`],Kr=[`none`,`small`,`medium`,`large`],qr=`minerva-card-header, minerva-card-content, minerva-card-footer, minerva-card-title, minerva-card-description`,Jr=e=>e&&Kr.includes(e)?`pad-${e}`:``,Yr=e=>{let t=e.parentElement??e.getRootNode().host;return!!(t?De(t,`minerva-card`):null)?.hasAttribute(`padding`)},Xr=class e extends p{constructor(...e){super(...e),this.variant=`default`,this.interactive=!1,this.as=`div`,this.disabled=!1,this.type=`button`,this.internals=st(this),this.aria=new c(this),this.syncParts=()=>{for(let e of Array.from(this.querySelectorAll(qr)))e.requestUpdate()},this.blockDisabledClicks=e=>{this.tag===`button`&&this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-card`}static{this.formAssociated=!0}static{this.styles=[m,O`
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
`,S(Re)]}get tag(){return Wr.includes(this.as)?this.as:`div`}focus(e){this.tag===`a`||this.tag===`button`?this.root?.focus(e):super.focus(e)}handleClick(e){if(this.tag!==`button`)return;if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.internals?.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockDisabledClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockDisabledClicks,!0)}hookStates(){return{variant:this.variant,disabled:this.tag===`button`&&this.disabled}}updated(t){t.has(`padding`)&&this.syncParts(),_&&(this.as&&!Wr.includes(this.as)&&f(e.tagName,`unsupported as="${this.as}" (expected ${Wr.join(`, `)}); rendering a div.`),this.tag===`a`&&!this.href&&f(e.tagName,`as="a" needs an href to be a link (focusable, activatable with Enter).`),this.interactive&&this.tag!==`a`&&this.tag!==`button`&&f(e.tagName,`interactive cards should be links or buttons (as="a" with href, or as="button") so keyboard users can activate them.`))}render(){let t=this.tag,n=P({card:!0,[this.variant]:!0,padded:!!this.padding,[Jr(this.padding)]:!!Jr(this.padding),interactive:this.interactive}),r=this.aria.label??k,i=Dn`<slot @slotchange=${this.syncParts}></slot>`;if(t===`a`)return Dn`<a
part="root"
class=${n}
href=${me(e.tagName,this.href)??k}
target=${this.target??k}
rel=${hn(this.target,this.rel)??k}
download=${this.download??k}
aria-label=${r}
>${i}</a
>`;if(t===`button`)return Dn`<button
part="root"
class=${n}
type="button"
?disabled=${this.disabled}
aria-label=${r}
aria-pressed=${this.aria.attr(`aria-pressed`)??k}
aria-expanded=${this.aria.attr(`aria-expanded`)??k}
@click=${this.handleClick}
>
${i}
</button>`;let a=On(t);return Dn`<${a} part="root" class=${n}>${i}</${a}>`}},F([j({reflect:!0})],Xr.prototype,`variant`,void 0),F([j({reflect:!0})],Xr.prototype,`padding`,void 0),F([j({type:Boolean,reflect:!0})],Xr.prototype,`interactive`,void 0),F([j({reflect:!0})],Xr.prototype,`as`,void 0),F([j()],Xr.prototype,`href`,void 0),F([j()],Xr.prototype,`target`,void 0),F([j()],Xr.prototype,`rel`,void 0),F([j()],Xr.prototype,`download`,void 0),F([j({type:Boolean,reflect:!0})],Xr.prototype,`disabled`,void 0),F([j()],Xr.prototype,`type`,void 0),F([E(`[part=root]`)],Xr.prototype,`root`,void 0),Zr=O`
:host{
display: block;
min-width: 0;
}
.cardHeader{
padding: var(--card-padding,var(--space-4));
background-color: var(--card-header-bg-color,var(--surface-muted-color));
border-bottom: 1px solid var(--card-border-color,var(--border-color));
}
.cardContent{
padding: var(--card-padding,var(--space-4));
flex: 1;
background-color: var(--card-bg-color-content,var(--surface-color));
border-bottom: 1px solid var(--card-border-color,var(--border-color));
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
text-align: end;
border-top: 1px solid var(--card-border-color,var(--border-color));
}
.padded{
padding: 0;
border: 0;
background-color: transparent;
text-align: start;
white-space: normal;
overflow: visible;
}
.padded.cardContent.afterHeader{
margin-top: var(--space-3);
}
.padded.cardFooter.afterContent,
.padded.cardFooter.afterHeader{
margin-top: var(--space-4);
padding-top: var(--space-4);
border-top: 1px solid var(--card-border-color,var(--border-color));
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
`,Qr=class extends p{constructor(...e){super(...e),this.sectionClass=``}static{this.styles=[m,Zr]}layoutClasses(){let e=this.previousElementSibling?.localName,t=Jr(this.padding);return{[this.sectionClass]:!0,padded:Yr(this),afterHeader:e===`minerva-card-header`,afterContent:e===`minerva-card-content`,[t]:!!t}}render(){return Dn`<div part="root" class=${P(this.layoutClasses())}>
<slot></slot>
</div>`}},F([j({reflect:!0})],Qr.prototype,`padding`,void 0),$r=class extends Qr{constructor(...e){super(...e),this.sectionClass=`cardHeader`}static{this.tagName=`minerva-card-header`}},ei=class extends Qr{constructor(...e){super(...e),this.sectionClass=`cardContent`}static{this.tagName=`minerva-card-content`}static{this.styles=[m,Zr,O`
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
`]}layoutClasses(){let e=super.layoutClasses();return this.animation&&(e[this.animation]=!0),e}},F([j({reflect:!0})],ei.prototype,`animation`,void 0),ti=class extends Qr{constructor(...e){super(...e),this.sectionClass=`cardFooter`}static{this.tagName=`minerva-card-footer`}},ni=class extends p{constructor(...e){super(...e),this.as=`h3`}static{this.tagName=`minerva-card-title`}static{this.styles=[m,O`
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
`]}render(){let e=On(Gr.includes(this.as)?this.as:`h3`);return Dn`<${e}
part="root"
class=${P({cardTitle:!0,padded:Yr(this)})}
><slot></slot></${e}>`}},F([j({reflect:!0})],ni.prototype,`as`,void 0),ri=class extends p{static{this.tagName=`minerva-card-description`}static{this.styles=[m,O`
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
`]}render(){return Dn`<p
part="root"
class=${P({cardDescription:!0,padded:Yr(this)})}
>
<slot></slot>
</p>`}}})))()}var ai,oi,si,ci,li,H;function ui(){return(ui=e((()=>{l(),h(),u(),d(),v(),b(),Zn(),Nt(),ge(),M(),D(),T(),xn(),mn(),ai=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),oi=e=>{let t=new Set;for(let n of e){if(t.has(n.value))return n.value;t.add(n.value);let e=n.children?oi(n.children):void 0;if(e!==void 0)return e}},si={fromAttribute(e){let t=e?.trim()??``;if(!t)return[];if(t.startsWith(`[`))try{let e=JSON.parse(t);if(Array.isArray(e))return e.filter(e=>typeof e==`string`||typeof e==`number`)}catch{}return t.split(`,`).map(e=>e.trim())},toAttribute(e){return JSON.stringify(e)}},ci=`[role="option"]:not([aria-disabled="true"])`,li=0,H=class e extends ft{constructor(...e){super(...e),this.options=[],this.value=[],this.defaultValue=[],this.open=!1,this.label=``,this.invalid=!1,this.readOnly=!1,this.hideClearButton=!1,this.expandTrigger=`click`,this.showSearch=!1,this.maxLevel=6,this.width=240,this.expandedValues=[],this.searchValue=``,this.idPrefix=`minerva-cascader-${li++}`,this.locale=new x(this),this.aria=new c(this,()=>this.labels),this.floating=new ar(this,()=>({anchor:()=>this.anchor,floating:()=>this.dropdown,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,branches:()=>[this.anchor],onDismiss:()=>this.closeDropdown(),returnFocusOnEscape:()=>this.input,focusable:!0,onPosition:()=>this.syncHookStates()})),this.pendingFocus=null,this.dirty=!1,this.widthApplied=!1}static{this.tagName=`minerva-cascader`}static{this.shadowRootOptions={...ft.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[m,tr,O`
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
`,S(ce)]}get selectedOptions(){return fn(this.options,this.value)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}show(){this.open=!0}hide(){this.open=!1}get displayText(){let e=this.selectedOptions,t=e.map(e=>String(e.label));return this.displayRender?this.displayRender(t,e):t.join(` / `)}getFormValue(){return this.displayText}syncFormState(){super.syncFormState(),this.internals&&!this.isDisabled&&this.internals.setFormValue(this.getFormValue(),JSON.stringify(this.value))}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.selectMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=[...this.defaultValue],this.open=!1}restoreFormState(e){if(typeof e==`string`)try{let t=JSON.parse(e);Array.isArray(t)&&(this.value=t)}catch{}}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=!ai(this.value,this.defaultValue)||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=[...this.defaultValue]),e.has(`open`)&&(this.open?this.expandedValues=[...this.value]:(this.searchValue=``,this.pendingFocus=null)),_&&this.checkDev(e)}checkDev(t){if(t.has(`options`)){let t=oi(this.options);t!==void 0&&f(e.tagName,`duplicate option value "${t}" among siblings: values must be unique within a level.`)}(t.has(`options`)||t.has(`value`))&&this.options.length>0&&this.value.length>0&&fn(this.options,this.value).length<this.value.length&&f(e.tagName,`value ${JSON.stringify(this.value)} is not a path of the options tree: it is shown partially (or not at all).`)}hookStates(){let e=this.open&&!this.isDisabled,t=e&&this.floating.isOpen?this.floating.position.placement:void 0,{side:n,align:r}=t?Jt(t):{side:void 0,align:void 0};return{state:e?`open`:`closed`,disabled:this.isDisabled,readonly:this.readOnly,invalid:this.invalid,side:n,align:r,placement:t}}updated(e){if(super.updated(e),e.has(`width`)){let e=this.width,t=e===void 0||e===``?``:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,n=t!==``&&t!==`240px`;(n||this.widthApplied)&&(this.style.width=n?t:``),this.widthApplied=n}this.floating.sync(this.open&&!this.isDisabled);let t=this.pendingFocus;if(t!==null&&this.open){let e=t===-1?this.columns().length-1:t;this.focusColumn(e)&&(this.pendingFocus=null)}}requestOpen(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}openDropdown(e=!1){this.isDisabled||this.readOnly||this.requestOpen(!0)&&(this.expandedValues=[...this.value],this.pendingFocus=e?-1:null)}closeDropdown(e=!1){this.requestOpen(!1)&&(this.searchValue=``,e&&this.input?.focus())}select(e){this.value=e.map(e=>e.value),this.emitChange(e),this.closeDropdown(!0)}emitChange(e){this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:[...this.value],selectedOptions:e})}handleActivate(e,t){let n=e[e.length-1];if(n.disabled)return;let r=t>=this.maxLevel-1,i=!!n.children?.length,a=!!this.loadData&&!n.isLeaf&&!n.children;if(!r&&(i||a)){this.expandedValues=e.map(e=>e.value),a&&!n.loading&&this.loadData?.(e);return}this.select(e)}clear(e){e.stopPropagation(),this.value=[],this.searchValue=``,this.emitChange([]),this.emit(`minerva-clear`),this.input?.focus()}get expandedPath(){return fn(this.options,this.expandedValues)}columns(){let e=this.expandedPath,t=[this.options];for(let n=0;n<e.length&&n<this.maxLevel-1;n+=1){let r=e[n].children;if(!r?.length)break;t.push(r)}return t}columnId(e){return`${this.idPrefix}-column-${e}`}focusColumn(e){let t=this.dropdown?.querySelector(`[data-level="${e}"]`);if(!t)return!1;let n=t.querySelector(`[data-expanded="true"]`)??t.querySelector(ci);return n?.focus(),!!n}canExpand(e,t){return t<this.maxLevel-1&&(!!e.children?.length||!e.isLeaf&&e.children===void 0)}pathTo(e,t){return[...this.expandedPath.slice(0,t),e]}get searching(){return this.showSearch&&this.searchValue!==``}searchResults(){if(!this.searching)return[];let{searchValue:e,filter:t}=this,n=e.toLowerCase();return vn(this.options).filter(({path:r})=>t?t(e,r):r.some(e=>String(e.label).toLowerCase().includes(n)))}focusFirstSearchResult(){this.dropdown?.querySelector(`[role="option"]`)?.focus()}handleSelectorClick(){this.isDisabled||this.readOnly||(this.open?this.showSearch||this.closeDropdown():this.openDropdown())}handleInput(e){let t=e.target.value;this.showSearch&&!this.readOnly&&(this.searchValue=t,this.emit(`minerva-input`,{value:t}),this.open||this.openDropdown())}handleInputKeyDown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this.open?this.searching?this.focusFirstSearchResult():(this.pendingFocus=-1,this.requestUpdate()):this.openDropdown(!0);break;case`Enter`:e.preventDefault(),this.open||this.openDropdown(!0);break;case` `:if(this.showSearch)break;e.preventDefault(),this.open||this.openDropdown(!0)}}handleFocusOut(e){let t=e.relatedTarget;this.open&&t&&(this.anchor&&Vn(this.anchor,t)||this.dropdown&&Vn(this.dropdown,t)||this.closeDropdown())}handleDropdownMouseDown(e){e.target.closest?.(`[role="option"]`)||e.preventDefault()}handleDropdownKeyDown(e){e.key===`Tab`&&this.closeDropdown()}handleOptionKeyDown(e,t,n){let r=e.currentTarget,i=Array.from(r.parentElement?.querySelectorAll(ci)??[]),a=i.indexOf(r),o=e=>i[(e+i.length)%i.length]?.focus();switch(wn(e.key,this)){case`ArrowDown`:e.preventDefault(),o(a+1);break;case`ArrowUp`:e.preventDefault(),o(a-1);break;case`Home`:e.preventDefault(),o(0);break;case`End`:e.preventDefault(),o(i.length-1);break;case`ArrowRight`:if(e.preventDefault(),t.disabled||!this.canExpand(t,n))break;this.pendingFocus=n+1,this.handleActivate(this.pathTo(t,n),n),this.requestUpdate();break;case`Enter`:case` `:if(e.preventDefault(),t.disabled)break;this.canExpand(t,n)&&(this.pendingFocus=n+1),this.handleActivate(this.pathTo(t,n),n),this.requestUpdate();break;case`ArrowLeft`:e.preventDefault(),n===0?this.closeDropdown(!0):this.focusColumn(n-1)}}handleSearchKeyDown(e){let t=e.currentTarget,n=Array.from(t.querySelectorAll(`[role="option"]`)),r=n.indexOf(e.target);(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),n[(r+(e.key===`ArrowDown`?1:-1)+n.length)%n.length]?.focus())}renderSearchResults(){let e=this.searchResults();return A`<div
class="searchResults"
role="listbox"
aria-label=${this.label||this.aria.label||k}
tabindex="-1"
@keydown=${this.handleSearchKeyDown}
>
${e.length>0?e.map(({path:e})=>A`<div
class="searchOption"
part="item"
role="option"
aria-selected="false"
tabindex="0"
@keydown=${t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),this.select(e))}}
@click=${()=>this.select(e)}
>
${e.map(e=>e.label).join(` / `)}
</div>`):A`<div class="empty" role="status">
${this.locale.t(`cascader.noResults`)}
</div>`}
</div>`}renderPanel(){let{t:e}=this.locale,t=this.columns(),n=this.expandedPath,r=this.selectedOptions,i=this.label||this.aria.label||e(`cascader.options`);return A`<div class="panel">
${t.map((a,s)=>A`<ul
id=${this.columnId(s)}
data-level=${s}
class="column"
part="column"
role="listbox"
aria-label=${e(`cascader.level`,{label:i,level:s+1})}
>
${a.map(e=>{let i=n[s]?.value===e.value,a=r[s]?.value===e.value,ee=this.canExpand(e,s)&&!(!e.children?.length&&e.isLeaf);return A`<li
data-expanded=${i?`true`:k}
class=${P({option:!0,active:i||a,disabled:!!e.disabled,loading:!!e.loading})}
part="item"
role="option"
aria-selected=${a?`true`:`false`}
aria-disabled=${e.disabled?`true`:k}
aria-busy=${e.loading?`true`:k}
aria-controls=${i&&s+1<t.length?this.columnId(s+1):k}
tabindex=${e.disabled?-1:0}
@keydown=${t=>this.handleOptionKeyDown(t,e,s)}
@click=${()=>{e.disabled||this.handleActivate(this.pathTo(e,s),s)}}
@mouseenter=${()=>{this.expandTrigger===`hover`&&!e.disabled&&e.children?.length&&s<this.maxLevel-1&&(this.expandedValues=this.pathTo(e,s).map(e=>e.value))}}
>
${this.optionRender?this.optionRender(e,s):A`<span class="label">${e.label}</span>${e.loading?A`<span
class="loadingIndicator"
aria-hidden="true"
>...</span
>`:ee?A`<span class="expandIcon" aria-hidden="true"
>${o}</span
>`:k}`}
</li>`})}
</ul>`)}
</div>`}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.open&&!t,r=!this.hideClearButton&&this.value.length>0&&!t&&!this.readOnly,i=this.searching?this.searchValue:this.displayText,a=this.invalid||this.aria.attr(`aria-invalid`)===`true`;return A`<div
class="cascader"
part="root"
@focusout=${this.handleFocusOut}
>
<div
class=${P({selector:!0,disabled:t,focused:n})}
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
aria-autocomplete=${this.showSearch?`list`:k}
aria-label=${this.aria.label??(this.label||k)}
aria-description=${this.aria.description??k}
aria-invalid=${a?`true`:k}
aria-required=${this.required?`true`:k}
aria-readonly=${this.showSearch&&this.readOnly?`true`:k}
name=${this.name||k}
.value=${qn(i)}
?readonly=${!this.showSearch||this.readOnly}
?disabled=${t}
?required=${this.required}
autocomplete="off"
placeholder=${this.placeholder??e(`cascader.placeholder`)}
@input=${this.handleInput}
@keydown=${this.handleInputKeyDown}
/>
</div>
${r?A`<button
type="button"
class="clearIcon"
part="clear-button"
aria-label=${e(`cascader.clear`)}
@click=${this.clear}
>
<span class="icon" aria-hidden="true">${Fe}</span>
</button>`:k}
<span
class=${P({arrow:!0,open:n})}
part="icon"
aria-hidden="true"
><span class="icon">${Ut}</span></span
>
</div>
</div>
${n?A`<div
class="dropdown"
part="content"
popover="manual"
@mousedown=${this.handleDropdownMouseDown}
@focusout=${this.handleFocusOut}
@keydown=${this.handleDropdownKeyDown}
>
${this.searching?this.renderSearchResults():this.renderPanel()}
</div>`:k}`}},F([j({attribute:!1})],H.prototype,`options`,void 0),F([j({attribute:!1})],H.prototype,`value`,void 0),F([j({attribute:`value`,converter:si})],H.prototype,`defaultValue`,void 0),F([j({type:Boolean,reflect:!0})],H.prototype,`open`,void 0),F([j()],H.prototype,`label`,void 0),F([j()],H.prototype,`placeholder`,void 0),F([j({type:Boolean,reflect:!0})],H.prototype,`invalid`,void 0),F([j({type:Boolean,reflect:!0,attribute:`readonly`})],H.prototype,`readOnly`,void 0),F([j({type:Boolean,attribute:`hide-clear-button`})],H.prototype,`hideClearButton`,void 0),F([j({attribute:`expand-trigger`,reflect:!0})],H.prototype,`expandTrigger`,void 0),F([j({type:Boolean,attribute:`show-search`,reflect:!0})],H.prototype,`showSearch`,void 0),F([j({type:Number,attribute:`max-level`})],H.prototype,`maxLevel`,void 0),F([j()],H.prototype,`width`,void 0),F([j({attribute:!1})],H.prototype,`displayRender`,void 0),F([j({attribute:!1})],H.prototype,`filter`,void 0),F([j({attribute:!1})],H.prototype,`loadData`,void 0),F([j({attribute:!1})],H.prototype,`optionRender`,void 0),F([w()],H.prototype,`expandedValues`,void 0),F([w()],H.prototype,`searchValue`,void 0),F([E(`input`)],H.prototype,`input`,void 0),F([E(`.cascader`)],H.prototype,`anchor`,void 0),F([E(`.dropdown`)],H.prototype,`dropdown`,void 0)})))()}var di,U;function fi(){return(fi=e((()=>{l(),h(),u(),d(),v(),y(),b(),Nt(),Pe(),M(),D(),T(),mn(),di=e=>e.charAt(0).toUpperCase()+e.slice(1),U=class e extends ft{constructor(...e){super(...e),this.checked=!1,this.defaultChecked=!1,this.indeterminate=!1,this.value=`on`,this.label=``,this.shape=`square`,this.size=`medium`,this.color=`primary`,this.labelPlacement=`end`,this.error=!1,this.helperText=``,this.readOnly=!1,this.locale=new x(this),this.aria=new c(this,()=>this.labels),this.slots=new g(this),this.dirty=!1}static{this.tagName=`minerva-checkbox`}static{this.shadowRootOptions={...ft.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[m,O`
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
`,S(je)]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}click(){this.input?.click()}getFormValue(){return this.checked?this.value:null}getValidity(){return this.required&&!this.checked?{flags:{valueMissing:!0},message:this.locale.t(`validation.checkMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.checked=this.defaultChecked}restoreFormState(e){this.checked=e!=null&&e!==``}willUpdate(e){e.has(`defaultChecked`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`checked`))&&(this.checked=this.defaultChecked)}updated(t){super.updated(t),this.input&&(this.input.indeterminate=this.indeterminate),_&&!this.aria.label&&!this.label&&!this.textContent?.trim()&&f(e.tagName,`no label: set the label attribute, slot a label, or use aria-label / <label for>.`)}handleClick(e){this.readOnly&&e.preventDefault()}handleChange(){this.readOnly||(this.dirty=!0,this.input.indeterminate=this.indeterminate,this.checked=this.input.checked,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{checked:this.checked,value:this.value}))}hookStates(){return{state:this.indeterminate?`indeterminate`:this.checked?`checked`:`unchecked`,disabled:this.isDisabled,invalid:this.error||this.aria.attr(`aria-invalid`)===`true`,readonly:this.readOnly,required:this.required,size:this.size,color:this.color,shape:this.shape}}render(){let e=this.isDisabled,t=!!this.label||this.slots.test(`[default]`),n=[this.helperText,this.aria.description].filter(Boolean).join(` `),r=this.error||this.aria.attr(`aria-invalid`)===`true`;return A`<div
part="root"
class=${P({checkboxWrapper:!0,error:r})}
>
<label
class=${P({checkbox:!0,[this.size]:!0,[this.shape]:!0,[`label${di(this.labelPlacement)}`]:!0,[`color${di(this.color)}`]:this.color!==`primary`,disabled:e,error:r})}
>
<input
part="input"
type="checkbox"
class="input"
.checked=${qn(this.checked)}
?disabled=${e}
?required=${this.required}
aria-checked=${this.indeterminate?`mixed`:k}
aria-label=${this.aria.label??k}
aria-description=${n||k}
aria-invalid=${r?`true`:k}
aria-readonly=${this.readOnly?`true`:k}
@click=${this.handleClick}
@change=${this.handleChange}
/>
<span class="checkmark" part="control"
>${this.checked&&!this.indeterminate?A`<slot name="icon"></slot>`:k}</span
>
${t?A`<span class="label" part="label"
>${this.label||A`<slot></slot>`}</span
>`:k}
</label>
${this.helperText?A`<div class="helperTextWrapper">
${r?A`<span class="errorIcon" aria-hidden="true"
>${ye}</span
>`:k}
<span
part="helper-text"
class=${P({helperText:!0,errorText:r})}
>${this.helperText}</span
>
</div>`:k}
</div>`}},F([j({attribute:!1})],U.prototype,`checked`,void 0),F([j({type:Boolean,attribute:`checked`,reflect:!0})],U.prototype,`defaultChecked`,void 0),F([j({type:Boolean,reflect:!0})],U.prototype,`indeterminate`,void 0),F([j()],U.prototype,`value`,void 0),F([j()],U.prototype,`label`,void 0),F([j({reflect:!0})],U.prototype,`shape`,void 0),F([j({reflect:!0})],U.prototype,`size`,void 0),F([j({reflect:!0})],U.prototype,`color`,void 0),F([j({attribute:`label-placement`,reflect:!0})],U.prototype,`labelPlacement`,void 0),F([j({type:Boolean,reflect:!0})],U.prototype,`error`,void 0),F([j({attribute:`helper-text`})],U.prototype,`helperText`,void 0),F([j({type:Boolean,reflect:!0,attribute:`readonly`})],U.prototype,`readOnly`,void 0),F([E(`input`)],U.prototype,`input`,void 0)})))()}var pi,mi,hi;function gi(){return(gi=e((()=>{l(),h(),u(),d(),v(),y(),b(),St(),ue(),M(),D(),T(),yn(),pi=2e3,mi=e=>e===void 0||e===``?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,hi=class e extends p{constructor(...e){super(...e),this.noWrap=!1,this.maxHeight=`24rem`,this.copyable=!1,this.status=`idle`,this.locale=new x(this),this.aria=new c(this),this.slots=new g(this)}static{this.tagName=`minerva-code-block`}static{this.styles=[m,O`
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
`,S(tt),S(Me)]}get text(){return this.code??this.textContent??``}async copy(){let e=this.text,t=typeof navigator>`u`?void 0:navigator.clipboard,n=!1;if(typeof t?.writeText==`function`)try{await t.writeText(e),n=!0}catch{n=!1}return this.isConnected?(this.showStatus(n?`copied`:`failed`),this.emit(`minerva-copy`,{text:e,success:n}),n):n}showStatus(e){clearTimeout(this.timer),this.status=e,this.timer=setTimeout(()=>this.status=`idle`,pi)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timer),this.status=`idle`}updated(){_&&this.copyable&&!this.text.trim()&&f(e.tagName,`copyable is set but there is no text to copy (set code or the text content).`)}render(){this.slots;let e=this.locale.t,t=this.aria.label??e(`codeBlock.label`),n=mi(this.maxHeight),r=this.copyable||!!this.language,i=A`<pre
      part="region"
      role="region"
      tabindex="0"
      aria-label=${t}
      aria-description=${this.aria.description??k}
      data-wrap=${String(!this.noWrap)}
      class=${P({codeBlock:!0,copyable:r})}
      style=${N(r?{}:{maxHeight:n})}
    ><code
        part="code"
        class=${this.language?`language-${this.language}`:k}
        data-language=${this.language??k}
      >${this.text}</code></pre>`;if(!r)return i;let a=this.status,o=a===`copied`?e(`codeBlock.copied`):a===`failed`?e(`codeBlock.copyFailed`):``,s=o||e(`codeBlock.copy`),ee=a===`failed`?`danger`:a===`copied`?`success`:`neutral`;return A`<div part="root" class="root" style=${N({maxHeight:n})}>
${i}
<div class="actions">
${this.language?A`<span part="language" class="language" aria-hidden="true"
>${this.language}</span
>`:k}
${this.copyable?A`<button
type="button"
part="copy-button"
class="iconButton ${ee} variant-ghost small square"
aria-label=${s}
title=${s}
@click=${()=>void this.copy()}
>
${a===`copied`?le:a===`failed`?Fe:oe}
</button>`:k}
</div>
${this.copyable?A`<span class="visuallyHidden" aria-live="polite"
>${o}</span
>`:k}
</div>`}},F([j()],hi.prototype,`code`,void 0),F([j({reflect:!0})],hi.prototype,`language`,void 0),F([j({type:Boolean,attribute:`no-wrap`,reflect:!0})],hi.prototype,`noWrap`,void 0),F([j({attribute:`max-height`})],hi.prototype,`maxHeight`,void 0),F([j({type:Boolean,reflect:!0})],hi.prototype,`copyable`,void 0),F([w()],hi.prototype,`status`,void 0)})))()}var _i,W;function vi(){return(vi=e((()=>{h(),Bt(),d(),v(),b(),nr(),or(),Zn(),Xn(),s(),Ee(),se(),M(),D(),xn(),mn(),_i={fromAttribute:e=>e===null?void 0:e.split(`,`).map(e=>e.trim()).filter(Boolean),toAttribute:e=>Array.isArray(e)?e.join(`, `):e},W=class e extends p{constructor(...e){super(...e),this.open=!1,this.items=[],this.maxResults=12,this.query=``,this.activeIndex=0,this.locale=new x(this),this.presence=new fe(this,()=>this.panel),this.modal=new rr(this),this.focusScope=new Qn(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new er(this,()=>({disableOutsidePointerEvents:!0,onFocusOutside:()=>!1,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleShortcut=e=>{let t=tn(this.shortcut);if(t.length===0)return;let n=e.composedPath()[0]??e.target;Un(n)&&!e.ctrlKey&&!e.metaKey&&!e.altKey||e.isComposing||t.some(t=>Zt(e,t))&&(e.preventDefault(),e.stopPropagation(),this.requestOpenChange(!0,`shortcut`))}}static{this.tagName=`minerva-command-dialog`}static{this.styles=[m,tr,O`
:host{
display: contents;
}
`,S(Wt),S(ve)]}show(){this.open=!0}hide(){this.open=!1}get results(){let e=Math.max(0,this.maxResults),t=(Array.isArray(this.items)?this.items:[]).filter(e=>!e.disabled),n=this.query.trim();if(!n)return t.slice(0,e);if(typeof this.filter==`function`)return this.filter(t,n).slice(0,e);let r=qt(n);return t.filter(e=>qt(Jn(e)).includes(r)).slice(0,e)}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}select(e){this.emit(`minerva-select`,{value:e.id,item:e}),this.requestOpenChange(!1,`select`)}handleKeyDown(e){let t=this.results,n=Math.max(t.length-1,0),r={ArrowDown:e=>Math.min(e+1,n),ArrowUp:e=>Math.max(e-1,0),Home:()=>0,End:()=>n}[e.key];if(r&&(e.key.startsWith(`Arrow`)||!this.query)){e.preventDefault(),this.activeIndex=r(Math.min(this.activeIndex,n));return}let i=t[this.activeIndex];e.key===`Enter`&&i&&!e.isComposing&&(e.preventDefault(),this.select(i))}handleInput(e){this.query=e.target.value,this.activeIndex=0}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this.handleShortcut,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleShortcut,!0),C(this.panel),C(this.overlay)}willUpdate(e){e.has(`open`)&&(this.presence.sync(this.open),this.open&&(this.query=``,this.activeIndex=0)),e.has(`items`)&&_&&this.checkItems();let t=this.results.length;this.activeIndex>0&&this.activeIndex>=t&&(this.activeIndex=Math.max(t-1,0))}checkItems(){if(!Array.isArray(this.items)){f(e.tagName,"`items` must be an array of { id, title, ... } objects.");return}let t=new Set;for(let n of this.items)t.has(n.id)&&f(e.tagName,`duplicate item id "${n.id}": ids identify the chosen command in minerva-select and must be unique.`),t.add(n.id)}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)){let e=this.panel;this.open&&e?(Ge(this.overlay),Ge(e),this.modal.activate(this),this.layer.activate(e),this.focusScope.activate(e),this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.open&&(e.has(`activeIndex`)||e.has(`query`))&&this.renderRoot.querySelector(`#option-${this.activeIndex}`)?.scrollIntoView?.({block:`nearest`}),this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}hookStates(){return{state:this.open?`open`:`closed`}}afterClose(){C(this.panel),C(this.overlay),this.emit(`minerva-after-close`)}render(){if(!(this.open||this.presence.present))return k;let e=this.locale.t,t=this.open?`open`:`closed`,n=this.results,r=n[this.activeIndex]?`option-${this.activeIndex}`:void 0,i=this.placeholder??e(`command.placeholder`);return A`<div
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
${this.shortcutLabel?A`<kbd class="kbd">${this.shortcutLabel}</kbd>`:k}
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
aria-activedescendant=${r??k}
autocomplete="off"
spellcheck="false"
placeholder=${i}
.value=${qn(this.query)}
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
${n.length===0?A`<div class="empty" part="empty">
${this.emptyText??e(`command.empty`)}
</div>`:n.map((e,t)=>{let n=t===this.activeIndex;return A`<button
id=${`option-${t}`}
part="item"
type="button"
role="option"
tabindex="-1"
aria-selected=${n?`true`:`false`}
data-active=${n?`true`:k}
class="item"
@mouseenter=${()=>this.activeIndex=t}
@click=${()=>this.select(e)}
>
<span class="copy"
><strong>${e.title}</strong>${e.description?A`<small>${e.description}</small>`:k}</span
>${e.group?A`<span class="group">${e.group}</span>`:k}
</button>`})}
</div>
</div>`}},F([j({type:Boolean,reflect:!0})],W.prototype,`open`,void 0),F([j({attribute:!1})],W.prototype,`items`,void 0),F([j()],W.prototype,`label`,void 0),F([j()],W.prototype,`description`,void 0),F([j()],W.prototype,`placeholder`,void 0),F([j({attribute:`empty-text`})],W.prototype,`emptyText`,void 0),F([j({attribute:`shortcut-label`})],W.prototype,`shortcutLabel`,void 0),F([j({converter:_i})],W.prototype,`shortcut`,void 0),F([j({type:Number,attribute:`max-results`})],W.prototype,`maxResults`,void 0),F([j({attribute:!1})],W.prototype,`filter`,void 0),F([j({attribute:`results-label`})],W.prototype,`resultsLabel`,void 0),F([j({attribute:`enter-label`})],W.prototype,`enterLabel`,void 0),F([w()],W.prototype,`query`,void 0),F([w()],W.prototype,`activeIndex`,void 0),F([E(`.content`)],W.prototype,`panel`,void 0),F([E(`.overlay`)],W.prototype,`overlay`,void 0)})))()}var yi,bi,xi;function Si(){return(Si=e((()=>{v(),M(),D(),xn(),yi=`(prefers-color-scheme: dark)`,bi=`data-minerva-theme-scope`,xi=class extends p{constructor(...e){super(...e),this.root=!1,this.media=null,this.mode=null,this.onSchemeChange=()=>this.apply()}static{this.tagName=`minerva-config`}static{this.styles=O`
:host{
display: contents;
}
`}get resolvedMode(){return this.mode}connectedCallback(){super.connectedCallback(),typeof window<`u`&&window.matchMedia&&(this.media=window.matchMedia(yi),this.media.addEventListener(`change`,this.onSchemeChange))}disconnectedCallback(){super.disconnectedCallback(),this.media?.removeEventListener(`change`,this.onSchemeChange),this.media=null,this.root&&this.clear(document.documentElement)}updated(e){e.has(`root`)&&e.get(`root`)!==void 0&&this.clear(e.get(`root`)?document.documentElement:this),this.apply()}target(){return this.root?document.documentElement:this}clear(e){for(let t of[`data-theme`,`data-palette`,bi,`lang`])(e!==this||t!==`lang`)&&e.removeAttribute(t);Gn(e,null),jn(e.style,{}),e.style.removeProperty(`color-scheme`)}apply(){let e=this.target(),t=(t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},n=this.theme,r=this.media?.matches?`dark`:`light`,i=n===`system`?r:n===`github-dark`?`dark`:n===`light`||n===`dark`?n:null,a=ln(this.design)?this.design:void 0,o=Qt(this.palette)?this.palette:In(a),s=!!o&&n!==`github-dark`;t(`data-theme`,i),t(`data-palette`,s?o:null),this.root||t(bi,i!==null||s||a!==void 0||[this.density,this.radius,this.shadow,this.fontScale].some(Boolean)?``:null),i?e.style.colorScheme=i:e.style.removeProperty(`color-scheme`),jn(e.style,n===`github-dark`&&En(n)?dn[n]:{}),Gn(e,{preset:a,density:en(this.density)?this.density:void 0,radius:nn(this.radius)?this.radius:void 0,shadow:cn(this.shadow)?this.shadow:void 0,fontScale:on(this.fontScale)?this.fontScale:void 0},{all:!this.root&&a!==void 0}),this.root&&this.locale&&(document.documentElement.lang=this.locale),i!==this.mode&&(this.mode=i,i&&this.emit(`minerva-theme-change`,{mode:i}))}render(){return A`<slot></slot>`}},F([j({reflect:!0})],xi.prototype,`theme`,void 0),F([j({reflect:!0})],xi.prototype,`palette`,void 0),F([j({reflect:!0})],xi.prototype,`design`,void 0),F([j({reflect:!0})],xi.prototype,`density`,void 0),F([j({reflect:!0})],xi.prototype,`radius`,void 0),F([j({reflect:!0})],xi.prototype,`shadow`,void 0),F([j({reflect:!0,attribute:`font-scale`})],xi.prototype,`fontScale`,void 0),F([j({reflect:!0})],xi.prototype,`locale`,void 0),F([j({type:Boolean,reflect:!0})],xi.prototype,`root`,void 0)})))()}var G;function Ci(){return(Ci=e((()=>{l(),h(),u(),Bt(),d(),v(),y(),b(),nr(),or(),Zn(),Xn(),Ur(),s(),se(),M(),D(),G=class e extends p{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.color=`primary`,this.loading=!1,this.confirmDisabled=!1,this.busy=!1,this.locale=new x(this),this.aria=new c(this),this.slots=new g(this),this.presence=new fe(this,()=>this.panel),this.modal=new rr(this),this.focusScope=new Qn(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new er(this,()=>({disableOutsidePointerEvents:!0,onFocusOutside:()=>!1,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestClose(this.reason)})),this.reason=`outside`,this.wasPresent=!1}static{this.tagName=`minerva-confirm-dialog`}static{this.dependencies=[V]}static{this.styles=[m,tr,O`
:host{
display: contents;
}
.content .body{
flex: 1 1 auto;
}
`,S(Wt)]}show(){this.open=!0}hide(){this.open=!1}requestClose(e){return!this.open||!this.emit(`minerva-open-change`,{open:!1,reason:e},{cancelable:!0})?!1:(this.open=!1,e!==`confirm`&&this.emit(`minerva-cancel`,{reason:e}),!0)}async handleConfirm(){if(!this.open||this.loading||this.busy||this.confirmDisabled||!this.emit(`minerva-confirm`,void 0,{cancelable:!0}))return;let e=this.onConfirm?.();if(e&&typeof e.then==`function`){this.busy=!0;try{await e}catch{return}finally{this.busy=!1}}this.requestClose(`confirm`)}willUpdate(e){e.has(`open`)&&this.presence.sync(this.open)}hookStates(){return{state:this.open?`open`:`closed`,color:this.color,loading:this.loading||this.busy}}updated(t){let n=this.open||this.presence.present;if(t.has(`open`)){let t=this.panel;this.open&&t?(_&&!this.label&&!this.slots.test(`header`)&&!this.aria.label&&f(e.tagName,"set `label` (or the `header` slot / aria-label) to give the alertdialog an accessible name."),Ge(this.overlay),Ge(t),this.modal.activate(this),this.layer.activate(t),this.focusInitial(t)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!n&&this.afterClose(),this.wasPresent=n}async focusInitial(e){let t=Array.from(e.querySelectorAll(`minerva-button`));await Promise.all(t.map(e=>e.updateComplete)),this.open&&this.panel===e&&(this.focusScope.activate(e),this.emit(`minerva-after-open`))}disconnectedCallback(){super.disconnectedCallback(),C(this.panel),C(this.overlay)}afterClose(){C(this.panel),C(this.overlay),this.emit(`minerva-after-close`)}render(){if(!(this.open||this.presence.present))return k;let e=this.open?`open`:`closed`,t=this.locale.t,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description,i=this.loading||this.busy;return A`<div
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
aria-labelledby=${n?`title`:k}
aria-label=${n?k:this.aria.label??k}
aria-describedby=${r?`description`:k}
tabindex="-1"
data-state=${e}
>
${r?A`<p id="description" class="description" part="description">
${r}
</p>`:k}
${n?A`<div id="title" class="header" part="header">
<slot name="header">${this.label}</slot>
</div>`:k}
<div class="body" part="body">
${this.slots.test(`[default]`)?A`<slot></slot>`:k}
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
${Fe}
</button>
</div>`}},F([j({type:Boolean,reflect:!0})],G.prototype,`open`,void 0),F([j()],G.prototype,`label`,void 0),F([j()],G.prototype,`description`,void 0),F([j({attribute:`confirm-label`})],G.prototype,`confirmLabel`,void 0),F([j({attribute:`cancel-label`})],G.prototype,`cancelLabel`,void 0),F([j({attribute:`close-label`})],G.prototype,`closeLabel`,void 0),F([j({reflect:!0})],G.prototype,`color`,void 0),F([j({type:Boolean,reflect:!0})],G.prototype,`loading`,void 0),F([j({type:Boolean,reflect:!0,attribute:`confirm-disabled`})],G.prototype,`confirmDisabled`,void 0),F([j({attribute:!1})],G.prototype,`onConfirm`,void 0),F([w()],G.prototype,`busy`,void 0),F([E(`.content`)],G.prototype,`panel`,void 0),F([E(`.overlay`)],G.prototype,`overlay`,void 0)})))()}function wi(e){let t=De(e,ki);if(!t)return null;let n=e.ownerDocument;return t===n.documentElement||t===n.body?null:t}function Ti(e,t){for(let n=e;n;n=ee(n))if(n===t)return!0;return!1}function Ei(e){return ji.push(e),()=>{let t=ji.lastIndexOf(e);t>=0&&ji.splice(t,1)}}function Di(e){let t=e?.isConnected===!0?De(e,Ni):null;if(t&&`confirmQueue`in t)return t.confirmQueue;let n=ji[ji.length-1];return n?n.confirmQueue:(Mi??=new Ai(()=>document.body),Mi)}function Oi(e){return t=>Fi({...t,host:t.host??e})}var ki,Ai,ji,Mi,Ni,Pi,Fi;function Ii(){return(Ii=e((()=>{h(),Bt(),d(),rt(),Ci(),ki=`minerva-config:not([root]), [data-minerva-theme-scope], [data-theme], [data-palette]`,Ai=class{constructor(e){this.defaultContainer=e,this.requests=[],this.current=null,this.settles=new Set}enqueue(e){return Be(G),new Promise(t=>{this.requests.push({options:e,resolve:t}),this.current||this.showNext()})}cancelAll(){let e=this.requests.splice(0);for(let t of e)t.resolve(!1);for(let e of[...this.settles])e(!1);this.current?.remove()}container(e){let t=typeof document>`u`?null:document,n=e.container;if(n)return n.isConnected?n:(_&&f(G.tagName,"confirm(): `container` is not connected to the document; the dialog is appended to document.body instead."),t.body);let r=e.host?.isConnected===!0?wi(e.host):null,i=this.defaultContainer();return r&&!Ti(i,r)?r:i}showNext(){let e=this.requests.shift();if(!e){this.current=null;return}let{options:t,resolve:n}=e,r=this.container(t),i=document.createElement(G.tagName);i.label=t.title,t.description&&(i.description=t.description),t.confirmLabel&&(i.confirmLabel=t.confirmLabel),t.cancelLabel&&(i.cancelLabel=t.cancelLabel),t.closeLabel&&(i.closeLabel=t.closeLabel),t.color&&(i.color=t.color);let a=t.host;if(a?.isConnected&&!t.container){let e=it(a);e!==it(r)&&i.setAttribute(`lang`,e)}let o=!1,s=!1,ee=e=>{o||(o=!0,this.settles.delete(ee),n(e))};this.settles.add(ee);let te=new MutationObserver(()=>{i.isConnected||ne()}),ne=()=>{s||(s=!0,te.disconnect(),ee(!1),i.remove(),this.showNext())};i.addEventListener(`minerva-open-change`,e=>{let{open:t,reason:n}=e.detail;queueMicrotask(()=>{!t&&!e.defaultPrevented&&ee(n===`confirm`)})}),i.addEventListener(`minerva-after-close`,ne,{once:!0}),this.current=i,r.append(i),te.observe(document,{childList:!0,subtree:!0}),i.open=!0}},ji=[],Mi=null,Ni=`minerva-confirm-provider`,Pi=()=>(_&&f(G.tagName,`confirm() called without a document (server render): resolving false.`),Promise.resolve(!1)),Fi=e=>typeof document>`u`?Pi():Di(e.host).enqueue(e)})))()}var Li;function Ri(){return(Ri=e((()=>{v(),Ci(),Ii(),M(),Li=class extends p{constructor(...e){super(...e),this.confirmQueue=new Ai(()=>this),this.unregister=null,this.confirm=e=>this.confirmQueue.enqueue(e)}static{this.tagName=`minerva-confirm-provider`}static{this.dependencies=[G]}static{this.styles=O`
:host{
display: contents;
}
`}connectedCallback(){super.connectedCallback(),this.unregister=Ei(this)}disconnectedCallback(){super.disconnectedCallback(),this.unregister?.(),this.unregister=null,this.confirmQueue.cancelAll()}render(){return A`<slot></slot>`}}})))()}var zi,Bi,Vi,K,Hi;function Ui(){return(Ui=e((()=>{l(),h(),u(),d(),v(),b(),we(),be(),hr(),M(),D(),T(),yn(),xn(),mn(),Wn(),zi=e=>e===void 0?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Bi={ascend:`ascending`,descend:`descending`},Vi=48,K=class e extends p{constructor(...e){super(...e),this.columns=[],this.rows=[],this.loading=!1,this.loadingRows=5,this.sortState=null,this.manualSort=!1,this.selectable=!1,this.selectedRowKeys=[],this.size=`medium`,this.variant=`simple`,this.hoverable=!1,this.retryable=!1,this.overflowing=!1,this.aria=new c(this),this.locale=new x(this),this.resize=null,this.handlePageChange=e=>{let{page:t,pageSize:n}=e.detail;queueMicrotask(()=>{e.defaultPrevented||(this.pagination={...this.pagination,current:t,pageSize:n})})}}static{this.tagName=`minerva-data-table`}static{this.dependencies=[cr]}static{this.styles=[m,O`
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
`,S(ze),S(ut)]}disconnectedCallback(){super.disconnectedCallback(),this.resize?.disconnect(),this.resize=null}keyOf(e,t){let n=this.rowKey;return typeof n==`function`?n(e,t):typeof n==`string`&&n?e[n]:t}entries(){return(this.rows??[]).map((e,t)=>({row:e,index:t,key:this.keyOf(e,t)}))}rowDisabled(e){return!!this.isRowDisabled?.(e)}willUpdate(t){if(_&&(t.has(`rows`)||t.has(`rowKey`))){let t=this.entries().map(e=>e.key);new Set(t).size!==t.length&&f(e.tagName,`rows have duplicate keys: set row-key to a unique field (or a function).`)}}updated(){this.observeOverflow();let e=this.shadowRoot?.querySelector(`minerva-pagination`);e&&this.pagination&&Object.assign(e,this.pagination)}observeOverflow(){let e=this.wrapper;if(!e){this.resize?.disconnect(),this.resize=null;return}let t=()=>{let t=e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight;t!==this.overflowing&&(this.overflowing=t)};t(),!this.resize&&typeof ResizeObserver<`u`&&(this.resize=new ResizeObserver(t),this.resize.observe(e),e.firstElementChild&&this.resize.observe(e.firstElementChild))}changeSort(e){let t=Fn(this.sortState,e);this.emit(`minerva-sort-change`,t,{cancelable:!0})&&(this.sortState=t)}commitSelection(e){let t=new Set(e),n={selectedRowKeys:e,selectedRows:this.entries().filter(e=>t.has(e.key)).map(e=>e.row)};if(!this.emit(`minerva-selection-change`,n,{cancelable:!0})){this.requestUpdate();return}this.selectedRowKeys=e}toggleRow(e,t){let n=this.selectedRowKeys;this.commitSelection(t?[...n.filter(t=>t!==e),e]:n.filter(t=>t!==e))}renderTable(){let e=this.columns??[],t=this.locale.t,n=Kt(e),r=this.selectable,i=r&&e[0]?.fixed===`left`,a=i?Vi:0,o=this.entries(),s=this.sortState,ee=s?.order??null,te=ee===null?void 0:e.find(e=>e.key===s?.key),ne=te?Cn(te):null,re=!this.manualSort&&ne?[...o].sort((e,t)=>ee===`descend`?ne(t.row,e.row):ne(e.row,t.row)):o,ie=new Set(this.selectedRowKeys),c=o.filter(e=>!this.rowDisabled(e.row)),ae=c.length>0&&c.every(e=>ie.has(e.key)),oe=!ae&&o.some(e=>ie.has(e.key)),se=()=>{let e=new Set(c.map(e=>e.key)),t=this.selectedRowKeys;this.commitSelection(ae?t.filter(t=>!e.has(t)):[...t,...c.map(e=>e.key).filter(e=>!ie.has(e))])},ce=e=>{let t={textAlign:e.align},r=zi(e.width);return r!==void 0&&(t.width=r,t.minWidth=r),e.fixed===`left`?t.left=`${(n.leftOffsets[e.key]??0)+a}px`:e.fixed===`right`&&(t.right=`${n.rightOffsets[e.key]??0}px`),t},le=e=>e.fixed===`left`&&e.key===n.lastLeftFixedKey?`left`:e.fixed===`right`&&e.key===n.firstRightFixedKey?`right`:k,ue=N({width:`${Vi}px`,minWidth:`${Vi}px`,...i?{left:`0px`}:{}}),de=i?`left`:k,fe=e.length+ +!!r,pe=e=>{if(!e.sortable)return A`<th
part="header-cell"
scope="col"
style=${N(ce(e))}
data-ellipsis=${e.ellipsis?`true`:k}
data-fixed=${e.fixed??k}
data-fixed-edge=${le(e)}
>
${e.header}
</th>`;let t=s?.key===e.key?s.order:null,n=t===`ascend`?Le:t===`descend`?Ut:wt;return A`<th
part="header-cell"
scope="col"
aria-sort=${t?Bi[t]:`none`}
style=${N(ce(e))}
data-ellipsis=${e.ellipsis?`true`:k}
data-fixed=${e.fixed??k}
data-fixed-edge=${le(e)}
>
<button
type="button"
part="sort-button"
class="sortButton"
data-sort-order=${t??k}
@click=${()=>this.changeSort(e.key)}
>
<span class="sortLabel">${e.header}</span
><span class="sortIcon" aria-hidden="true">${n}</span>
</button>
</th>`},me;me=this.loading?Array.from({length:this.loadingRows},()=>A`<tr part="row" aria-hidden="true">
${r?A`<td
part="cell"
class="selectionCell"
style=${ue}
data-fixed=${de}
></td>`:k}
${e.map(e=>A`<td
part="cell"
style=${N(ce(e))}
data-fixed=${e.fixed??k}
data-fixed-edge=${le(e)}
>
<span part="skeleton" class="skeleton"></span>
</td>`)}
</tr>`):o.length===0?A`<tr part="row">
<td part="empty" colspan=${fe} class="empty">
<slot name="empty">${this.emptyText??t(`table.empty`)}</slot>
</td>
</tr>`:Sn(re,e=>e.key,({row:n,index:i,key:a},o)=>{let s=r&&ie.has(a);return A`<tr
part="row"
aria-selected=${s?`true`:k}
?data-selected=${s}
>
${r?A`<td
part="cell"
class="selectionCell"
style=${ue}
data-fixed=${de}
>
<input
type="checkbox"
part="checkbox"
class="checkbox"
.checked=${qn(s)}
?disabled=${this.rowDisabled(n)}
aria-label=${t(`table.selectRow`,{row:this.getRowLabel?.(n,i)??String(a)})}
@change=${e=>this.toggleRow(a,e.target.checked)}
/>
</td>`:k}
${e.map(e=>A`<td
part="cell"
style=${N(ce(e))}
data-ellipsis=${e.ellipsis?`true`:k}
data-fixed=${e.fixed??k}
data-fixed-edge=${le(e)}
>
${e.render?e.render(n,o):n[e.key]}
</td>`)}
</tr>`});let he=zi(this.scrollX),ge=zi(this.scrollY),_e=!!(he||ge)||this.overflowing,ve=this.aria.label;return A`<div
part="viewport"
class=${P({wrapper:!0,wrapperBordered:this.variant===`bordered`,wrapperScrollY:!!ge})}
role=${_e?`region`:k}
tabindex=${_e?0:k}
aria-label=${_e?ve??t(`table.scrollRegion`):k}
style=${N(ge?{maxHeight:ge,overflowY:`auto`}:{})}
>
<table
part="table"
class=${P({table:!0,[this.size]:!0,[this.variant]:!0,hoverable:this.hoverable,scrollX:!!he})}
style=${N(he?{minWidth:he}:{})}
aria-label=${ve??k}
aria-description=${this.aria.description??k}
>
<thead>
<tr part="row">
${r?A`<th
part="header-cell"
scope="col"
class="selectionCell"
style=${ue}
data-fixed=${de}
>
<input
type="checkbox"
part="checkbox"
class="checkbox"
.checked=${qn(ae)}
.indeterminate=${oe}
?disabled=${c.length===0||this.loading}
aria-label=${t(`table.selectAll`)}
@change=${se}
/>
</th>`:k}
${e.map(pe)}
</tr>
</thead>
<tbody>
${me}
</tbody>
</table>
</div>`}hookStates(){return{loading:this.loading,size:this.size,variant:this.variant}}render(){let e=!!this.error&&!this.loading;return A`<div
part="root"
class="dataTable"
aria-busy=${this.loading?`true`:k}
>
${e?A`<div part="error" class="error" role="alert">
<div class="errorTitle">
<slot name="error">${this.error}</slot>
</div>
${this.retryable?A`<button
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
</button>`:k}
</div>`:A`${this.renderTable()}
${this.pagination?A`<minerva-pagination
part="pagination"
exportparts="root: pagination-root, item: pagination-item"
@minerva-page-change=${this.handlePageChange}
></minerva-pagination>`:k}`}
</div>`}},F([j({attribute:!1})],K.prototype,`columns`,void 0),F([j({attribute:!1})],K.prototype,`rows`,void 0),F([j({attribute:`row-key`})],K.prototype,`rowKey`,void 0),F([j({attribute:`empty-text`})],K.prototype,`emptyText`,void 0),F([j({type:Boolean,reflect:!0})],K.prototype,`loading`,void 0),F([j({type:Number,attribute:`loading-rows`})],K.prototype,`loadingRows`,void 0),F([j({attribute:!1})],K.prototype,`sortState`,void 0),F([j({type:Boolean,attribute:`manual-sort`})],K.prototype,`manualSort`,void 0),F([j({type:Boolean,reflect:!0})],K.prototype,`selectable`,void 0),F([j({attribute:!1})],K.prototype,`selectedRowKeys`,void 0),F([j({attribute:!1})],K.prototype,`isRowDisabled`,void 0),F([j({attribute:!1})],K.prototype,`getRowLabel`,void 0),F([j({reflect:!0})],K.prototype,`size`,void 0),F([j({reflect:!0})],K.prototype,`variant`,void 0),F([j({type:Boolean,reflect:!0})],K.prototype,`hoverable`,void 0),F([j({attribute:`scroll-x`})],K.prototype,`scrollX`,void 0),F([j({attribute:`scroll-y`})],K.prototype,`scrollY`,void 0),F([j({attribute:!1})],K.prototype,`pagination`,void 0),F([j()],K.prototype,`error`,void 0),F([j({type:Boolean})],K.prototype,`retryable`,void 0),F([j({attribute:`retry-label`})],K.prototype,`retryLabel`,void 0),F([w()],K.prototype,`overflowing`,void 0),F([E(`.wrapper`)],K.prototype,`wrapper`,void 0),Hi=class extends p{constructor(...e){super(...e),this.primary=``,this.monospace=!1,this.maxWidth=360,this.observer=null}static{this.tagName=`minerva-table-cell-content`}static{this.styles=[m,O`
:host{
display: block;
min-width: 0;
}
`,S(ut)]}hasSecondarySlot(){return Array.from(this.children).some(e=>e.getAttribute(`slot`)===`secondary`)}connectedCallback(){super.connectedCallback(),this.observer??=typeof MutationObserver>`u`?null:new MutationObserver(()=>this.requestUpdate()),this.observer?.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}render(){let e=this.secondary!==void 0&&this.secondary!==null||this.hasSecondarySlot(),t=P({cellPrimary:!0,cellMono:this.monospace,cellStrong:e}),n=A`<slot>${this.primary}</slot>`;return A`<div
part="root"
class="cellContent"
style=${N({maxWidth:zi(this.maxWidth)})}
>
${this.monospace?A`<code part="primary" class=${t}>${n}</code>`:A`<div part="primary" class=${t}>${n}</div>`}
${e?A`<div part="secondary" class="cellSecondary">
<slot name="secondary">${this.secondary}</slot>
</div>`:k}
</div>`}},F([j()],Hi.prototype,`primary`,void 0),F([j()],Hi.prototype,`secondary`,void 0),F([j({type:Boolean,reflect:!0})],Hi.prototype,`monospace`,void 0),F([j({attribute:`max-width`})],Hi.prototype,`maxWidth`,void 0)})))()}var Wi,Gi;function Ki(){return(Ki=e((()=>{h(),v(),b(),a(),M(),D(),Wi=class extends p{constructor(...e){super(...e),this.label=``}static{this.tagName=`minerva-description-item`}static{this.styles=[m,O`
:host{
display: contents;
}
`]}render(){return A`<slot></slot>`}},F([j({reflect:!0})],Wi.prototype,`label`,void 0),Gi=class e extends p{constructor(...e){super(...e),this.items=[],this.observer=null}static{this.tagName=`minerva-description-list`}static{this.dependencies=[Wi]}static{this.shadowRootOptions={...p.shadowRootOptions,slotAssignment:`manual`}}static{this.styles=[m,O`
:host{
display: block;
}
`,S(dt)]}declarativeItems(){return Array.from(this.children).filter(e=>e.localName===Wi.tagName)}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.requestUpdate()),this.observer.observe(this,{childList:!0,attributes:!0,subtree:!0,attributeFilter:[`label`]}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null}updated(){let t=this.declarativeItems();if(Array.from(this.renderRoot.querySelectorAll(`slot[data-item]`)).forEach((e,n)=>{let r=t[n];r&&typeof e.assign==`function`&&e.assign(r)}),_){let t=Array.from(this.children).filter(e=>e.localName!==Wi.tagName);t.length&&f(e.tagName,`only <minerva-description-item> children are rendered (ignored: <${t[0].localName}>).`)}}render(){let e=this.declarativeItems();return A`<dl part="root" class="descriptionList">
${(this.items??[]).map(e=>A`<div part="row" class="row">
<dt part="term">${e.label}</dt>
<dd part="description">${e.value}</dd>
</div>`)}
${e.map(e=>A`<div part="row" class="row">
<dt part="term">${e.label}</dt>
<dd part="description"><slot data-item></slot></dd>
</div>`)}
</dl>`}},F([j({attribute:!1})],Gi.prototype,`items`,void 0)})))()}var qi,Ji;function Yi(){return(Yi=e((()=>{h(),v(),y(),b(),Ce(),M(),D(),T(),yn(),qi=e=>typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Ji=class e extends p{constructor(...e){super(...e),this.variant=`solid`,this.orientation=`horizontal`,this.thickness=1,this.spacing=16,this.textAlign=`center`,this.elevation=!1,this.flexItem=!1,this.slots=new g(this)}static{this.tagName=`minerva-divider`}static{this.styles=[m,O`
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
`,S(re)]}hookStates(){let e=this.orientation===`horizontal`&&this.slots.test(`[default]`);return{orientation:this.orientation,variant:this.variant,align:e?this.textAlign:void 0}}updated(){_&&this.orientation===`vertical`&&this.slots.test(`[default]`)&&f(e.tagName,`text is only rendered by horizontal dividers; it is ignored when orientation is vertical.`)}render(){let e=this.orientation===`horizontal`,t=e&&this.slots.test(`[default]`),n=this.textAlign,r={};if(this.thickness!=null&&!Number.isNaN(this.thickness)&&(r.borderWidth=`${this.thickness}px`),this.length!=null&&this.length!==``&&(r[e?`width`:`height`]=qi(this.length)),this.spacing!=null&&!Number.isNaN(this.spacing)){let t=`${this.spacing}px`;r.marginTop=e?t:`0`,r.marginBottom=e?t:`0`,r.marginLeft=e?`0`:t,r.marginRight=e?`0`:t}let i=P({divider:!0,[this.variant]:!0,[this.orientation]:!0,withText:t,[`text${n.charAt(0).toUpperCase()}${n.slice(1)}`]:t,elevation:this.elevation,flexItem:this.flexItem});return t?A`<div
part="root"
role="separator"
aria-orientation=${this.orientation}
class=${i}
style=${N(r)}
>
<span class="text" part="label"><slot></slot></span>
</div>`:A`<hr
part="root"
aria-orientation=${this.orientation}
class=${i}
style=${N(r)}
/>`}},F([j({reflect:!0})],Ji.prototype,`variant`,void 0),F([j({reflect:!0})],Ji.prototype,`orientation`,void 0),F([j({type:Number})],Ji.prototype,`thickness`,void 0),F([j()],Ji.prototype,`length`,void 0),F([j({type:Number})],Ji.prototype,`spacing`,void 0),F([j({attribute:`text-align`})],Ji.prototype,`textAlign`,void 0),F([j({type:Boolean,reflect:!0})],Ji.prototype,`elevation`,void 0),F([j({type:Boolean,reflect:!0,attribute:`flex-item`})],Ji.prototype,`flexItem`,void 0)})))()}var Xi,q;function Zi(){return(Zi=e((()=>{l(),h(),u(),Bt(),d(),v(),y(),b(),nr(),or(),Zn(),Xn(),se(),ae(),M(),D(),T(),Xi=[`left`,`right`,`top`,`bottom`],q=class e extends p{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.side=`right`,this.size=`medium`,this.hideCloseButton=!1,this.dialogRole=`dialog`,this.nonModal=!1,this.locale=new x(this),this.aria=new c(this),this.slots=new g(this),this.presence=new fe(this,()=>this.panel),this.modal=new rr(this),this.focusScope=new Qn(this,()=>({trapped:!this.nonModal,loop:!0,restoreFocus:!0})),this.layer=new er(this,()=>({disableOutsidePointerEvents:!this.nonModal,branches:()=>[this.triggerElement()],onFocusOutside:()=>this.nonModal,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleClick=e=>{if(e.defaultPrevented)return;let t=e.composedPath(),n=this.triggerElement();if(n&&t.includes(n)){this.requestOpenChange(!this.open,`trigger`);return}let r=t.find(e=>e instanceof Element&&e.hasAttribute(`data-drawer-close`));r&&this.contains(r)&&this.requestOpenChange(!1,`close-slot`)}}static{this.tagName=`minerva-drawer`}static{this.styles=[m,tr,O`
:host{
display: contents;
}
`,S(Ae)]}show(){this.open=!0}hide(){this.open=!1}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleClick)}willUpdate(t){t.has(`open`)&&this.presence.sync(this.open),_&&t.has(`side`)&&!Xi.includes(this.side)&&f(e.tagName,`invalid side "${this.side}" (expected left, right, top or bottom).`)}hookStates(){return{state:this.open?`open`:`closed`,side:Xi.includes(this.side)?this.side:`right`,size:this.size}}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)||e.has(`nonModal`)&&this.open){let t=this.panel;this.open&&t?(e.has(`nonModal`)&&!e.has(`open`)&&(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate()),Ge(this.overlay),Ge(t),this.nonModal||this.modal.activate(this),this.layer.activate(t),this.focusScope.activate(t),e.has(`open`)&&this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleClick),C(this.panel),C(this.overlay)}afterClose(){C(this.panel),C(this.overlay),this.emit(`minerva-after-close`)}render(){let e=this.open||this.presence.present,t=this.open?`open`:`closed`,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description,i=Xi.includes(this.side)?this.side:`right`;return A`<slot name="trigger"></slot> ${e?A`${this.nonModal?k:A`<div
part="overlay"
class="overlay"
popover="manual"
data-state=${t}
aria-hidden="true"
></div>`}
<div
part="content"
class=${P({content:!0,[i]:!0,[this.size]:!0})}
popover="manual"
role=${this.dialogRole}
aria-modal=${this.nonModal?k:`true`}
aria-labelledby=${n?`title`:k}
aria-label=${n?k:this.aria.label??k}
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
${n?A`<div id="title" class="header" part="header">
<slot name="header">${this.label}</slot>
</div>`:k}
<div class="body" part="body"><slot></slot></div>
${this.slots.test(`footer`)?A`<div class="footer" part="footer">
<slot name="footer"></slot>
</div>`:k}
${this.hideCloseButton?k:A`<button
type="button"
class="close"
part="close-button"
aria-label=${this.closeLabel??this.locale.t(`drawer.close`)}
@click=${()=>this.requestOpenChange(!1,`close-button`)}
>
${Fe}
</button>`}
</div>`:k}`}},F([j({type:Boolean,reflect:!0})],q.prototype,`open`,void 0),F([j()],q.prototype,`label`,void 0),F([j()],q.prototype,`description`,void 0),F([j({attribute:`hidden-description`})],q.prototype,`hiddenDescription`,void 0),F([j({reflect:!0})],q.prototype,`side`,void 0),F([j({reflect:!0})],q.prototype,`size`,void 0),F([j({type:Boolean,attribute:`hide-close-button`})],q.prototype,`hideCloseButton`,void 0),F([j({attribute:`close-label`})],q.prototype,`closeLabel`,void 0),F([j({attribute:`dialog-role`})],q.prototype,`dialogRole`,void 0),F([j({type:Boolean,reflect:!0,attribute:`non-modal`})],q.prototype,`nonModal`,void 0),F([E(`.content`)],q.prototype,`panel`,void 0),F([E(`.overlay`)],q.prototype,`overlay`,void 0)})))()}var Qi,$i,ea,ta;function na(){return(na=e((()=>{l(),h(),d(),v(),y(),b(),Rt(),M(),D(),T(),yn(),Qi=Yn`<svg class="defaultIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none" aria-hidden="true" focusable="false"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM5 5v9h4a3 3 0 0 0 6 0h4V5ZM5 16v3h14v-3h-2.54a5 5 0 0 1-8.92 0Z" /></svg>`,$i=Yn`<svg class="defaultIcon" aria-hidden="true" focusable="false" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse style="fill: var(--surface-muted-color)" cx="32" cy="33" rx="32" ry="7" /><g fill-rule="nonzero" style="stroke: var(--border-strong-color)"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" /><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" style="fill: var(--surface-color)" /></g></g></svg>`,ea=e=>e&&/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,ta=class e extends p{constructor(...e){super(...e),this.heading=``,this.hideDescription=!1,this.hideIcon=!1,this.useSvg=!1,this.showShadow=!1,this.locale=new x(this),this.aria=new c(this),this.slots=new g(this)}static{this.tagName=`minerva-empty`}static{this.styles=[m,O`
:host{
display: block;
}
`,S(te)]}hookStates(){return{size:this.size}}updated(){_&&this.hideDescription&&this.description&&f(e.tagName,`description is ignored while hide-description is set.`)}render(){let e=!!this.heading||this.slots.test(`heading`),t=this.slots.test(`description`),n=this.description??this.locale.t(`empty.description`),r=!this.hideDescription&&(t||n!==``),i=this.slots.test(`action`)||this.slots.test(`secondary-action`),a=this.aria.label;return A`<div
part="root"
class=${P({empty:!0,showShadow:this.showShadow,sized:!!this.size,[`size-${this.size}`]:!!this.size})}
style=${N({width:ea(this.width),height:ea(this.height)})}
role="status"
aria-label=${a??k}
aria-labelledby=${a?k:e?`title`:r?`description`:k}
aria-describedby=${e&&r?`description`:k}
>
${this.hideIcon?k:A`<div part="icon" class="iconWrapper">
<slot name="icon">${this.useSvg?$i:Qi}</slot>
</div>`}
${e?A`<div id="title" part="title" class="title">
<slot name="heading">${this.heading}</slot>
</div>`:k}
${r?A`<div id="description" part="description" class="description">
<slot name="description">${n}</slot>
</div>`:k}
${i?A`<div part="actions" class="actions">
<slot name="action"></slot><slot name="secondary-action"></slot>
</div>`:k}
${this.slots.test(`[default]`)?A`<div part="footer" class="footer"><slot></slot></div>`:k}
</div>`}},F([j()],ta.prototype,`heading`,void 0),F([j()],ta.prototype,`description`,void 0),F([j({type:Boolean,attribute:`hide-description`})],ta.prototype,`hideDescription`,void 0),F([j({type:Boolean,attribute:`hide-icon`})],ta.prototype,`hideIcon`,void 0),F([j({reflect:!0})],ta.prototype,`size`,void 0),F([j({type:Boolean,attribute:`use-svg`})],ta.prototype,`useSvg`,void 0),F([j()],ta.prototype,`width`,void 0),F([j()],ta.prototype,`height`,void 0),F([j({type:Boolean,attribute:`show-shadow`})],ta.prototype,`showShadow`,void 0)})))()}var ra,ia;function aa(){return(aa=e((()=>{h(),v(),y(),b(),Oe(),M(),D(),ra=e=>e.localName===`minerva-checkbox`||e.localName===`minerva-switch`||e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`),ia=class e extends p{constructor(...e){super(...e),this.label=``,this.helperText=``,this.errorMessage=``,this.invalid=!1,this.required=!1,this.disabled=!1,this.readOnly=!1,this.requiredIndicator=`*`,this.slots=new g(this),this.observer=null,this.control=null,this.saved=new Map}static{this.tagName=`minerva-form-control`}static{this.styles=[m,O`
:host{
display: block;
}
.label{
cursor: default;
}
`,S(Vt)]}get controlElement(){return Array.from(this.children).find(e=>!e.hasAttribute(`slot`))??null}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.sync()),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.release()}updated(){this.sync()}get labelText(){return this.label?this.label:Array.from(this.children).filter(e=>e.getAttribute(`slot`)===`label`).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `)}slotText(e){return Array.from(this.children).filter(t=>t.getAttribute(`slot`)===e).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `)}get descriptionText(){return this.invalid?this.errorMessage||this.slotText(`error-message`):this.helperText||this.slotText(`helper-text`)}save(e,t){this.saved.has(e)||this.saved.set(e,t)}setAttr(e,t,n){let r=`@${t}`;if(n===null){if(!this.saved.has(r))return;let n=this.saved.get(r);this.saved.delete(r),n===null?e.removeAttribute(t):e.setAttribute(t,n);return}this.save(r,e.getAttribute(t)),e.getAttribute(t)!==n&&e.setAttribute(t,n)}setProp(e,t,n){let r=`.${t}`;if(!n){if(!this.saved.has(r))return;e[t]=this.saved.get(r),this.saved.delete(r);return}this.save(r,e[t]),e[t]=!0}propFor(e,t){return{invalid:[`invalid`,`error`],required:[`required`],disabled:[`disabled`],readOnly:[`readOnly`,`readonly`]}[t].find(t=>t in e&&typeof e[t]==`boolean`)??null}release(){let e=this.control;if(e){for(let[t,n]of this.saved)if(t.startsWith(`@`)){let r=t.slice(1);n===null?e.removeAttribute(r):e.setAttribute(r,n)}else e[t.slice(1)]=n;this.saved.clear(),this.control=null}}sync(){let t=this.controlElement;if(t!==this.control&&(this.release(),this.control=t),!t)return;let n=this.labelText,r=this.saved.has(`@aria-label`);n&&(r||!t.hasAttribute(`aria-label`))?this.setAttr(t,`aria-label`,n):n||this.setAttr(t,`aria-label`,null);let i=this.descriptionText;this.setAttr(t,`aria-description`,i||null);for(let e of[`invalid`,`required`,`disabled`,`readOnly`]){let n=this.propFor(t,e);n&&this.setProp(t,n,this[e])}if(this.setAttr(t,`aria-invalid`,this.invalid?`true`:null),this.setAttr(t,`aria-required`,this.required?`true`:null),this.setAttr(t,`aria-readonly`,this.readOnly?`true`:null),_&&this.children.length>0){let t=Array.from(this.children).filter(e=>!e.hasAttribute(`slot`));t.length>1&&f(e.tagName,`wraps ONE control, found ${t.length} elements in the default slot: only the first one is wired.`)}}handleLabelClick(e){let t=this.controlElement;t&&!this.disabled&&(e.preventDefault(),ra(t)?t.click():t.focus())}hookStates(){return{disabled:this.disabled,invalid:this.invalid,readonly:this.readOnly,required:this.required}}render(){let e=!!this.label||this.slots.test(`label`),t=!!this.helperText||this.slots.test(`helper-text`),n=!!this.errorMessage||this.slots.test(`error-message`);return A`<div class="root" part="root">
${e?A`<label
id="label"
class="label"
part="label"
@click=${this.handleLabelClick}
>${this.label||A`<slot name="label"></slot>`}${this.required?A`<span
class="required"
part="required-indicator"
aria-hidden="true"
>${this.requiredIndicator}</span
>`:k}</label
>`:k}
<slot @slotchange=${()=>this.sync()}></slot>
${!this.invalid&&t?A`<div id="helper" class="helper" part="helper-text">
${this.helperText||A`<slot name="helper-text"></slot>`}
</div>`:k}
${this.invalid&&n?A`<div
id="error"
class="error"
part="error-message"
role="alert"
>
${this.errorMessage||A`<slot name="error-message"></slot>`}
</div>`:k}
</div>`}},F([j()],ia.prototype,`label`,void 0),F([j({attribute:`helper-text`})],ia.prototype,`helperText`,void 0),F([j({attribute:`error-message`})],ia.prototype,`errorMessage`,void 0),F([j({type:Boolean,reflect:!0})],ia.prototype,`invalid`,void 0),F([j({type:Boolean,reflect:!0})],ia.prototype,`required`,void 0),F([j({type:Boolean,reflect:!0})],ia.prototype,`disabled`,void 0),F([j({type:Boolean,reflect:!0,attribute:`readonly`})],ia.prototype,`readOnly`,void 0),F([j({attribute:`required-indicator`})],ia.prototype,`requiredIndicator`,void 0)})))()}var oa;function sa(){return(sa=e((()=>{v(),b(),Lr(),Ke(),Ft(),ur(),M(),D(),yn(),oa=class e extends p{constructor(...e){super(...e),this.columns=1,this.gap=4}static{this.tagName=`minerva-form-layout`}static{this.styles=[m,O`
:host{
display: block;
min-width: 0;
}
.layout ::slotted(*){
min-width: 0;
}
`,S(Ht),S(Ve)]}render(){let t=lr(e.tagName,this.columns,this.rowGap??this.gap,this.columnGap??this.gap);return A`<div class="root" part="root" style=${N(t)}>
<div class="layout" part="layout"><slot></slot></div>
</div>`}},F([j({converter:pr})],oa.prototype,`columns`,void 0),F([j({converter:Ir})],oa.prototype,`gap`,void 0),F([j({attribute:`row-gap`,converter:Ir})],oa.prototype,`rowGap`,void 0),F([j({attribute:`column-gap`,converter:Ir})],oa.prototype,`columnGap`,void 0)})))()}function ca(e){let t=``;if(e&&typeof window<`u`){let n=Nn(window);n.isSupported&&(n.addHook(`uponSanitizeAttribute`,(e,t)=>{t.attrName===`src`&&(e.nodeName!==`IMG`||!/^data:image\/(?:png|jpeg|gif|webp|avif);base64,[a-z0-9+/=\s]+$/i.test(t.attrValue))&&(t.keepAttr=!1)}),n.sanitize(da,ua)===fa&&(t=n.sanitize(e,ua)))}return`<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="${la}"><meta name="referrer" content="no-referrer"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>${t}</body></html>`}var la,ua,da,fa;function pa(){return(pa=e((()=>{bn(),la=`default-src 'none'; script-src 'none'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'; object-src 'none'; frame-src 'none'; font-src 'none'; media-src 'none'; form-action 'none'; base-uri 'none'`,ua={ALLOWED_TAGS:`a abbr b bdi bdo blockquote br caption center code col colgroup dd del div dl dt em figcaption figure h1 h2 h3 h4 h5 h6 hr i img ins li ol p pre s section small span strong style sub sup table tbody td tfoot th thead tr u ul wbr`.split(` `),ALLOWED_ATTR:`alt title class style lang dir role width height align valign bgcolor border cellpadding cellspacing colspan rowspan scope src`.split(` `),ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!0,FORBID_TAGS:[`base`,`meta`,`link`,`script`,`form`,`input`,`button`,`iframe`,`object`,`embed`,`svg`,`math`],FORBID_ATTR:[`href`,`srcdoc`,`srcset`,`action`,`formaction`,`target`,`ping`,`id`,`name`],FORCE_BODY:!0,RETURN_TRUSTED_TYPE:!1},da=`<p title="t" onclick="x()">ok</p><script>x()<\/script><img alt="a" src="https://x.invalid/p" onerror="x()">`,fa=`<p title="t">ok</p><img alt="a">`})))()}var ma;function ha(){return(ha=e((()=>{l(),h(),v(),b(),at(),pa(),M(),D(),yn(),gn(),ma=class e extends p{constructor(...e){super(...e),this.html=``,this.label=``,this.viewport=`desktop`,this.mobileWidth=375,this.height=600,this.doc=ca(),this.aria=new c(this)}static{this.tagName=`minerva-html-preview`}static{this.styles=[m,O`
:host{
display: block;
}
`,S(ct)]}willUpdate(e){e.has(`html`)&&(this.doc=ca(this.html))}updated(){_&&!this.label&&!this.aria.label&&f(e.tagName,`set label (or aria-label): the iframe needs a title for assistive technologies.`)}render(){let e=Number.isFinite(this.mobileWidth)&&this.mobileWidth>0?this.mobileWidth:375,t=Number.isFinite(this.height)&&this.height>0?this.height:600;return A`<div part="root" class="preview">
${Ln(this.doc,A`<iframe
part="frame"
class="frame"
title=${this.label||this.aria.label||``}
sandbox=""
referrerpolicy="no-referrer"
srcdoc=${this.doc}
style=${N({width:this.viewport===`mobile`?`${e}px`:`100%`,height:`${t}px`})}
></iframe>`)}
</div>`}},F([j()],ma.prototype,`html`,void 0),F([j()],ma.prototype,`label`,void 0),F([j({reflect:!0})],ma.prototype,`viewport`,void 0),F([j({type:Number,attribute:`mobile-width`})],ma.prototype,`mobileWidth`,void 0),F([j({type:Number})],ma.prototype,`height`,void 0),F([w()],ma.prototype,`doc`,void 0)})))()}var ga,_a,J;function va(){return(va=e((()=>{l(),h(),u(),d(),ht(),v(),b(),St(),Zn(),gt(),M(),D(),T(),ga=200,_a=300,J=class e extends p{constructor(...e){super(...e),this.color=`neutral`,this.variant=`ghost`,this.size=`medium`,this.shape=`circle`,this.disabled=!1,this.loading=!1,this.toggle=!1,this.pressed=!1,this.tooltipPlacement=`top`,this.noTooltip=!1,this.type=`button`,this.tooltipOpen=!1,this.tooltipPositioned=!1,this.internals=st(this),this.aria=new c(this),this.locale=new x(this),this.floating=new ar(this,()=>({anchor:()=>this.button,floating:()=>this.tooltipElement,branches:()=>[this],placement:this.tooltipPlacement,offset:{mainAxis:8},dismissOnPointerDownOutside:!1,dismissOnFocusOutside:!1,onDismiss:()=>this.hideTooltip(),onPosition:()=>{this.tooltipPositioned=!0}})),this.handlePointerEnter=()=>{if(!this.tooltipEnabled||this.tooltipOpen){this.clearTimers();return}this.clearTimers(),this.enterTimer=setTimeout(()=>this.showTooltip(),ga)},this.handlePointerLeave=()=>{this.clearTimers(),this.tooltipOpen&&(this.leaveTimer=setTimeout(()=>this.hideTooltip(),_a))},this.blockInactiveClicks=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-icon-button`}static{this.formAssociated=!0}static{this.shadowRootOptions={...p.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[m,tr,O`
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
`,S(tt),S(Ct)]}get form(){return this.internals?.form??null}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}get tooltipContent(){return this.tooltip||this.label||void 0}get tooltipEnabled(){return!this.noTooltip&&!!this.tooltipContent&&!this.disabled&&!this.loading}clearTimers(){clearTimeout(this.enterTimer),clearTimeout(this.leaveTimer)}showTooltip(){this.tooltipEnabled&&(this.clearTimers(),this.tooltipOpen=!0)}hideTooltip(){this.clearTimers(),this.tooltipOpen=!1,this.tooltipPositioned=!1}handleClick(e){if(this.loading||this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}if(this.toggle){let e=!this.pressed;this.emit(`minerva-pressed-change`,{pressed:e},{cancelable:!0})&&(this.pressed=e)}let t=this.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockInactiveClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockInactiveClicks,!0),this.clearTimers(),this.tooltipOpen=!1}hookStates(){return{state:this.toggle&&this.pressed?`active`:`inactive`,disabled:this.disabled,loading:this.loading,size:this.size,variant:this.variant,color:this.color,shape:this.shape}}willUpdate(e){(e.has(`disabled`)||e.has(`loading`)||e.has(`noTooltip`))&&!this.tooltipEnabled&&this.hideTooltip()}updated(){this.floating.sync(this.tooltipOpen&&this.tooltipEnabled),_&&!this.label&&!this.aria.label&&f(e.tagName,`icon buttons only contain an icon: set label (or aria-label) to give them an accessible name.`)}render(){let e=this.tooltipOpen&&this.tooltipEnabled;return A`<button
part="root"
type="button"
class=${P({iconButton:!0,[this.color]:!0,[`variant-${this.variant}`]:!0,[this.size]:!0,[this.shape]:!0,disabled:this.disabled,loading:this.loading,pressed:this.toggle&&this.pressed})}
?disabled=${this.disabled}
tabindex=${this.disabled?`-1`:`0`}
aria-label=${this.label??this.aria.label??this.locale.t(`iconButton.default`)}
aria-description=${this.aria.description??k}
aria-describedby=${e?`tooltip`:k}
aria-pressed=${this.toggle?String(this.pressed):k}
aria-expanded=${this.aria.attr(`aria-expanded`)??k}
aria-haspopup=${this.aria.attr(`aria-haspopup`)??k}
aria-busy=${this.loading?`true`:k}
aria-disabled=${this.loading&&!this.disabled?`true`:k}
@click=${this.handleClick}
@mouseenter=${this.handlePointerEnter}
@mouseleave=${this.handlePointerLeave}
@focus=${()=>this.showTooltip()}
@blur=${()=>this.hideTooltip()}
>
${this.loading?A`<span
class=${P({spinner:!0,[this.size]:!0})}
part="spinner"
role="progressbar"
aria-label=${this.locale.t(`common.loading`)}
>${ie}</span
>`:A`<span class="glyph" part="icon" aria-hidden="true"
><slot></slot
></span>`}
</button>
${e?A`<div
id="tooltip"
part="tooltip"
role="tooltip"
popover="manual"
class=${P({tooltip:!0,neutral:!0,solid:!0,default:!0,"animation-fade":!0,show:this.tooltipPositioned})}
@mouseenter=${()=>this.clearTimers()}
@mouseleave=${this.handlePointerLeave}
>
${this.tooltipContent}
</div>`:k}`}},F([j()],J.prototype,`label`,void 0),F([j({reflect:!0})],J.prototype,`color`,void 0),F([j({reflect:!0})],J.prototype,`variant`,void 0),F([j({reflect:!0})],J.prototype,`size`,void 0),F([j({reflect:!0})],J.prototype,`shape`,void 0),F([j({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),F([j({type:Boolean,reflect:!0})],J.prototype,`loading`,void 0),F([j({type:Boolean,reflect:!0})],J.prototype,`toggle`,void 0),F([j({type:Boolean,reflect:!0})],J.prototype,`pressed`,void 0),F([j()],J.prototype,`tooltip`,void 0),F([j({attribute:`tooltip-placement`})],J.prototype,`tooltipPlacement`,void 0),F([j({type:Boolean,attribute:`no-tooltip`})],J.prototype,`noTooltip`,void 0),F([j({reflect:!0})],J.prototype,`type`,void 0),F([w()],J.prototype,`tooltipOpen`,void 0),F([w()],J.prototype,`tooltipPositioned`,void 0),F([E(`button`)],J.prototype,`button`,void 0),F([E(`.tooltip`)],J.prototype,`tooltipElement`,void 0)})))()}var ya,Y;function ba(){return(ba=e((()=>{l(),h(),u(),d(),v(),y(),b(),qe(),Nt(),M(),D(),T(),mn(),ya=0,Y=class e extends ft{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.type=`text`,this.variant=`outline`,this.size=`medium`,this.invalid=!1,this.placeholder=``,this.readOnly=!1,this.clearable=!1,this.showCharCount=!1,this.passwordVisible=!1,this.countId=`minerva-input-count-${ya++}`,this.locale=new x(this),this.aria=new c(this,()=>this.labels),this.slots=new g(this),this.dirty=!1}static{this.tagName=`minerva-input`}static{this.shadowRootOptions={...ft.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[m,O`
:host{
display: inline-flex;
width: 100%;
min-width: 0;
vertical-align: middle;
}
`,S(Dt)]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}select(){this.input?.select()}getFormValue(){return this.value}getValidity(){let e=this.input;return e?{flags:Xe(e.validity),message:e.validationMessage,anchor:e}:this.required&&!this.value?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`)}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.passwordVisible=!1}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`value`)&&t.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),_&&t.has(`maxLength`)&&this.minLength!==void 0&&this.maxLength!==void 0&&this.minLength>this.maxLength&&f(e.tagName,`minlength (${this.minLength}) is greater than maxlength (${this.maxLength}): no value can be valid.`)}handleInput(){this.value=this.input.value,this.emit(`minerva-input`,{value:this.value})}handleChange(){this.value=this.input.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}clear(){this.value=``,this.input.value=``,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.emit(`minerva-input`,{value:``}),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:``}),this.emit(`minerva-clear`),this.input.focus()}hookStates(){return{disabled:this.isDisabled,invalid:this.invalid||this.aria.attr(`aria-invalid`)===`true`,readonly:this.readOnly,required:this.required,size:this.size,variant:this.variant}}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.type===`password`,r=this.clearable&&this.value!==``&&!t&&!this.readOnly,i=this.passwordVisible?this.hidePasswordLabel??e(`input.hidePassword`):this.showPasswordLabel??e(`input.showPassword`),a=this.showCharCount?this.countId:void 0;return A`<div
part="root"
class=${P({root:!0,[this.variant]:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
data-component="input"
>
${this.slots.test(`prefix`)?A`<span class="addon start" part="prefix"
><slot name="prefix"></slot
></span>`:k}
<input
part="input"
class="field"
.value=${qn(this.value)}
type=${n&&this.passwordVisible?`text`:this.type}
name=${this.name||k}
placeholder=${this.placeholder||k}
?disabled=${t}
?readonly=${this.readOnly}
?required=${this.required}
minlength=${this.minLength??k}
maxlength=${this.maxLength??k}
pattern=${this.pattern??k}
min=${this.min??k}
max=${this.max??k}
step=${this.step??k}
autocomplete=${this.autocomplete??k}
inputmode=${this.inputmode??k}
aria-label=${this.aria.label??k}
aria-description=${this.aria.description??k}
aria-describedby=${a??k}
aria-invalid=${this.invalid||this.aria.attr(`aria-invalid`)===`true`?`true`:k}
@input=${this.handleInput}
@change=${this.handleChange}
/>
${r?A`<button
part="clear-button"
type="button"
class="action"
aria-label=${this.clearLabel??e(`input.clear`)}
@click=${this.clear}
>
${Fe}
</button>`:k}
${n?A`<button
part="password-toggle"
type="button"
class="action"
aria-label=${i}
?disabled=${t}
@click=${()=>this.passwordVisible=!this.passwordVisible}
>
${this.passwordVisible?Ne:We}
</button>`:k}
${this.showCharCount?A`<span id=${this.countId} class="count" part="count"
>${this.maxLength!=null&&this.maxLength>=0?`${this.value.length} / ${this.maxLength}`:this.value.length}</span
>`:k}
${this.slots.test(`suffix`)?A`<span class="addon end" part="suffix"
><slot name="suffix"></slot
></span>`:k}
</div>`}},F([j({attribute:!1})],Y.prototype,`value`,void 0),F([j({attribute:`value`})],Y.prototype,`defaultValue`,void 0),F([j({reflect:!0})],Y.prototype,`type`,void 0),F([j({reflect:!0})],Y.prototype,`variant`,void 0),F([j({reflect:!0})],Y.prototype,`size`,void 0),F([j({type:Boolean,reflect:!0})],Y.prototype,`invalid`,void 0),F([j()],Y.prototype,`placeholder`,void 0),F([j({type:Boolean,reflect:!0,attribute:`readonly`})],Y.prototype,`readOnly`,void 0),F([j({type:Number,attribute:`minlength`})],Y.prototype,`minLength`,void 0),F([j({type:Number,attribute:`maxlength`})],Y.prototype,`maxLength`,void 0),F([j()],Y.prototype,`pattern`,void 0),F([j()],Y.prototype,`min`,void 0),F([j()],Y.prototype,`max`,void 0),F([j()],Y.prototype,`step`,void 0),F([j()],Y.prototype,`autocomplete`,void 0),F([j()],Y.prototype,`inputmode`,void 0),F([j({type:Boolean,reflect:!0})],Y.prototype,`clearable`,void 0),F([j({attribute:`clear-label`})],Y.prototype,`clearLabel`,void 0),F([j({type:Boolean,attribute:`show-char-count`})],Y.prototype,`showCharCount`,void 0),F([j({attribute:`show-password-label`})],Y.prototype,`showPasswordLabel`,void 0),F([j({attribute:`hide-password-label`})],Y.prototype,`hidePasswordLabel`,void 0),F([w()],Y.prototype,`passwordVisible`,void 0),F([E(`input`)],Y.prototype,`input`,void 0)})))()}function xa(e){if(!e.trim())return{status:`empty`};try{return JSON.parse(e),{status:`valid`}}catch(e){return{status:`invalid`,error:e instanceof Error?e.message:String(e)}}}function Sa(e,t){let n=Math.min(10,Math.max(0,Math.trunc(t)||0));if(n>0)return Hn(e,Bn(e,void 0,{tabSize:n,insertSpaces:!0,eol:`
`}));let r=Pn(e,!0),i=[];for(;r.getPosition()<e.length;){r.scan();let t=r.getTokenOffset();i.push(e.slice(t,t+r.getTokenLength()))}return i.join(``)}var X;function Ca(){return(Ca=e((()=>{l(),h(),u(),d(),v(),b(),St(),Nt(),nt(),Pt(),M(),D(),T(),mn(),An(),X=class e extends ft{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.rows=8,this.hideToolbar=!1,this.indent=2,this.invalid=!1,this.readOnly=!1,this.placeholder=``,this.focused=!1,this.locale=new x(this),this.aria=new c(this,()=>this.labels),this.dirty=!1}static{this.tagName=`minerva-json-field`}static{this.shadowRootOptions={...ft.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[m,O`
:host{
display: block;
width: 100%;
min-width: 0;
}
`,S(Ze),S(tt),S(pt),O`

.toolbar .iconButton{
min-height: 0;
}
.status > svg{
width: 16px;
height: 16px;
}
`]}focus(e){this.textarea?.focus(e)}blur(){this.textarea?.blur()}formatValue(){xa(this.value).status===`valid`&&(this.value=Sa(this.value,this.indent))}getFormValue(){return this.value}getValidity(){let e=this.textarea,t=xa(this.value);return t.status===`invalid`?{flags:{badInput:!0},message:`${this.invalidLabel??this.locale.t(`jsonField.invalid`)}: ${t.error}`,anchor:e}:this.required&&t.status===`empty`?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:e}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),_&&t.has(`indent`)&&(this.indent<0||this.indent>10)&&f(e.tagName,`indent (${this.indent}) is clamped to 0..10.`)}get locked(){return this.isDisabled||this.readOnly}formatNow(){if(this.locked||xa(this.value).status!==`valid`)return;let e=Sa(this.value,this.indent);e!==this.value&&(this.dirty=!0,this.value=e,this.emit(`minerva-input`,{value:e}),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e}))}handleInput(){this.locked||(this.dirty=!0,this.value=String(this.textarea.value),this.emit(`minerva-input`,{value:this.value}))}handleChange(){this.value=String(this.textarea.value),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}hookStates(){let e=!this.focused&&xa(this.value).status===`invalid`;return{disabled:this.isDisabled,invalid:e||this.invalid,readonly:this.readOnly,required:this.required}}render(){let{t:e}=this.locale,t=this.isDisabled,r=this.focused?{status:`empty`}:xa(this.value),i=r.status===`invalid`,a=i||this.invalid,o=this.locked||!this.value.trim(),s=r.status===`valid`?this.validLabel??e(`jsonField.valid`):r.status===`invalid`?`${this.invalidLabel??e(`jsonField.invalid`)}: ${r.error}`:``,ee=[this.aria.description,i?s:void 0].filter(Boolean).join(` `);return A`<div class="root" part="root">
      ${this.hideToolbar?k:A`<div class="toolbar" part="toolbar">
              <button
                part="format-button"
                type="button"
                class=${P({iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,disabled:o})}
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
        class=${P({textarea:!0,outline:!0,medium:!0,invalid:a})}
        style="resize: none"
        rows=${this.rows}
        spellcheck="false"
        .value=${qn(this.value)}
        name=${this.name||k}
        placeholder=${this.placeholder||k}
        ?disabled=${t}
        ?readonly=${this.readOnly}
        ?required=${this.required}
        aria-label=${this.aria.label??k}
        aria-description=${ee||k}
        aria-invalid=${a?`true`:k}
        @input=${this.handleInput}
        @change=${this.handleChange}
        @focus=${()=>this.focused=!0}
        @blur=${()=>this.focused=!1}
      ></textarea>
      <div
        part="status"
        role="status"
        aria-live="polite"
        class=${P({status:!0,statusInvalid:i})}
      >
        ${r.status===`valid`?A`${n}<span>${s}</span>`:r.status===`invalid`?A`${de}<span>${s}</span>`:k}
      </div>
    </div>`}},F([j({attribute:!1})],X.prototype,`value`,void 0),F([j({attribute:`value`})],X.prototype,`defaultValue`,void 0),F([j({type:Number})],X.prototype,`rows`,void 0),F([j({type:Boolean,attribute:`hide-toolbar`})],X.prototype,`hideToolbar`,void 0),F([j({type:Number})],X.prototype,`indent`,void 0),F([j({type:Boolean,reflect:!0})],X.prototype,`invalid`,void 0),F([j({type:Boolean,reflect:!0,attribute:`readonly`})],X.prototype,`readOnly`,void 0),F([j()],X.prototype,`placeholder`,void 0),F([j({attribute:`format-label`})],X.prototype,`formatLabel`,void 0),F([j({attribute:`valid-label`})],X.prototype,`validLabel`,void 0),F([j({attribute:`invalid-label`})],X.prototype,`invalidLabel`,void 0),F([w()],X.prototype,`focused`,void 0),F([E(`textarea`)],X.prototype,`textarea`,void 0)})))()}function wa(e){if(!e)return[];try{let t=JSON.parse(e);if(Array.isArray(t))return t.filter(e=>e&&typeof e==`object`).map(e=>({id:typeof e.id==`string`?e.id:``,key:String(e.key??``),value:String(e.value??``)}));if(t&&typeof t==`object`)return Object.entries(t).map(([e,t])=>({id:``,key:e,value:typeof t==`string`?t:JSON.stringify(t)}))}catch{}return[]}var Ta,Ea;function Da(){return(Da=e((()=>{l(),h(),u(),d(),v(),b(),St(),Nt(),Ur(),aa(),Ye(),fr(),M(),D(),Wn(),Ta=0,Ea=class e extends ft{constructor(...e){super(...e),this.value=[],this.defaultValue=[],this.editorId=`kv-${Ta++}`,this.nextId=0,this.dirty=!1,this.pendingFocus=null,this.locale=new x(this),this.aria=new c(this,()=>this.labels)}static{this.tagName=`minerva-key-value-editor`}static{this.dependencies=[V,ia,dr]}static{this.styles=[m,O`
:host{
display: block;
width: 100%;
min-width: 0;
}
`,S(tt),S(kt),O`

.key{
--textarea-min-height: var(
--key-value-editor-control-height,
var(--control-height-sm)
);
}
`]}focus(e){(this.renderRoot.querySelector(`minerva-textarea`)??this.renderRoot.querySelector(`minerva-button`))?.focus(e)}getFormValue(){return JSON.stringify(this.value.map(({key:e,value:t})=>({key:e,value:t})))}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.renderRoot.querySelector(`minerva-button`)??null}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=wa(e))}willUpdate(t){if(t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),t.has(`value`)&&(this.value.some(e=>!e.id)&&(this.value=this.value.map(e=>e.id?e:{...e,id:this.newId()})),_)){let t=this.value.map(e=>e.id);new Set(t).size!==t.length&&f(e.tagName,`entries have duplicate ids: rows are tracked by id, make them unique.`)}}updated(e){super.updated(e);let t=this.pendingFocus;if(!t)return;this.pendingFocus=null;let n=e=>this.value.some(t=>t.id===e),r=e=>Array.from(this.renderRoot.querySelectorAll(`[data-entry-id]`)).find(t=>e!==void 0&&t.dataset.entryId===e)??null;if(t.kind===`add`){let e=n(t.id)?r(t.id)?.querySelector(`.key`):null;e&&e.updateComplete.then(()=>e.focus())}else n(t.id)||(r(t.nextId)?.querySelector(`.remove`)??this.renderRoot.querySelector(`minerva-button`))?.focus()}newId(){let e;do e=`${this.editorId}-${this.nextId++}`;while(this.value.some(t=>t.id===e));return e}commit(e){this.dirty=!0,this.value=e,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e})}add(){if(this.isDisabled)return;let e=this.newId();this.pendingFocus={kind:`add`,id:e},this.commit([...this.value,{id:e,key:``,value:``}])}removeEntry(e){if(this.isDisabled)return;let t=this.value.findIndex(t=>t.id===e),n=this.value[t+1]??this.value[t-1];this.pendingFocus={kind:`remove`,id:e,nextId:n?.id},this.commit(this.value.filter(t=>t.id!==e))}handleInput(e,t,n){if(e.stopPropagation(),this.isDisabled)return;let r=e.target.value;this.dirty=!0,this.value=this.value.map(e=>e.id===t?{...e,[n]:r}:e),this.emit(`minerva-input`,{value:this.value})}handleFieldChange(e){e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}renderField(e,t,n,r){let i=this.errors?.[e.id]?.[n];return A`<minerva-form-control
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
</minerva-form-control>`}hookStates(){return{disabled:this.isDisabled}}render(){let{t:e}=this.locale,t=this.keyLabel??e(`keyValueEditor.key`),n=this.valueLabel??e(`keyValueEditor.value`),r=this.removeLabel??e(`keyValueEditor.remove`),i=this.isDisabled,a=this.aria.label;return A`<div
class="root"
part="root"
role=${a?`group`:k}
aria-label=${a??k}
aria-description=${this.aria.description??k}
>
${Sn(this.value,e=>e.id,(e,a)=>A`<div class="row" part="row" data-entry-id=${e.id}>
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
${Fe}
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
</div>`}},F([j({attribute:!1})],Ea.prototype,`value`,void 0),F([j({attribute:`value`,converter:{fromAttribute:e=>wa(e)}})],Ea.prototype,`defaultValue`,void 0),F([j({attribute:`key-label`})],Ea.prototype,`keyLabel`,void 0),F([j({attribute:`value-label`})],Ea.prototype,`valueLabel`,void 0),F([j({attribute:`add-label`})],Ea.prototype,`addLabel`,void 0),F([j({attribute:`remove-label`})],Ea.prototype,`removeLabel`,void 0),F([j({attribute:!1})],Ea.prototype,`errors`,void 0)})))()}var Oa,ka;function Aa(){return(Aa=e((()=>{l(),h(),ht(),v(),y(),b(),xt(),M(),D(),T(),Oa=class e extends p{constructor(...e){super(...e),this.density=`default`,this.noDividers=!1,this.internals=st(this)}static{this.tagName=`minerva-list`}static{this.styles=[m,O`
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
:host(:not([no-dividers]))
::slotted(minerva-list-item:not(:first-child)){
border-top: 1px solid var(--list-divider-color,var(--border-color));
}
`,S(Ue)]}connectedCallback(){super.connectedCallback(),Lt(this,this.internals,{role:`list`})}updated(){if(_){let t=Array.from(this.children).find(e=>e.localName!==ka.tagName);t&&f(e.tagName,`children should be <minerva-list-item> elements (found <${t.localName}>): other elements break the list semantics.`)}}render(){return A`<div
part="root"
class=${P({list:!0,compact:this.density===`compact`,dividers:!this.noDividers})}
>
<slot @slotchange=${()=>this.requestUpdate()}></slot>
</div>`}},F([j({reflect:!0})],Oa.prototype,`density`,void 0),F([j({type:Boolean,reflect:!0,attribute:`no-dividers`})],Oa.prototype,`noDividers`,void 0),ka=class extends p{constructor(...e){super(...e),this.primary=``,this.secondary=``,this.internals=st(this),this.slots=new g(this)}static{this.tagName=`minerva-list-item`}static{this.styles=[m,S(Ue),O`
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
`]}connectedCallback(){super.connectedCallback(),Lt(this,this.internals,{role:`listitem`})}render(){let e=this.secondary!==``||this.slots.test(`secondary`);return A`<div part="root" class="item">
${this.slots.test(`icon`)?A`<div part="icon" class="icon" aria-hidden="true">
<slot name="icon"></slot>
</div>`:k}
<div class="content">
<div part="label" class="primary"><slot>${this.primary}</slot></div>
${e?A`<div part="description" class="secondary">
<slot name="secondary">${this.secondary}</slot>
</div>`:k}
</div>
${this.slots.test(`actions`)?A`<div part="actions" class="actions">
<slot name="actions"></slot>
</div>`:k}
</div>`}},F([j()],ka.prototype,`primary`,void 0),F([j()],ka.prototype,`secondary`,void 0)})))()}var ja,Ma;function Na(){return(Na=e((()=>{h(),d(),v(),b(),yt(),sr(),M(),D(),T(),ja=[`small`,`medium`,`large`],Ma=class e extends p{constructor(...e){super(...e),this.size=`medium`,this.locale=new x(this)}static{this.tagName=`minerva-loading-state`}static{this.dependencies=[mr]}static{this.styles=[m,O`
:host{
display: block;
}
`,S(Mt)]}hookStates(){return{size:this.size}}updated(){_&&!ja.includes(this.size)&&f(e.tagName,`unknown size "${this.size}" (expected ${ja.join(`, `)}).`)}render(){return A`<div
part="root"
class=${P({loadingState:!0,[this.size]:!0})}
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
</div>`}},F([j()],Ma.prototype,`label`,void 0),F([j({reflect:!0})],Ma.prototype,`size`,void 0)})))()}function Pa(e){let t=Array.from(e.childNodes).filter(e=>!Wa(e)&&(e.nodeType!==1||e.getAttribute(`slot`)!==`icon`));return t.every(e=>e.nodeType===3)?t.map(e=>e.textContent??``).join(``).trim():t.map(e=>e.cloneNode(!0))}function Fa(e){return{value:qa(e,`value`)??Ka(e),label:Pa(e),textValue:qa(e,`text-value`),shortcut:qa(e,`shortcut`),disabled:Ja(e,`disabled`),closeOnSelect:Ja(e,`close-on-select`),element:e}}function Ia(e,t=`e`){let n=[],r=null;return Array.from(e.children).forEach((e,i)=>{let a=`${t}-${i}`;switch(e.localName!==Z.tagName&&(r=null),e.localName){case Ra.tagName:{let t=Ia(e,a),r=e.querySelector(`:scope > [slot='icon']`);n.push({key:qa(e,`value`)||Ka(e),label:Pa(e),textValue:qa(e,`text-value`),icon:r?r.cloneNode(!0):void 0,shortcut:qa(e,`shortcut`),disabled:Ja(e,`disabled`),closeOnSelect:!Ja(e,`keep-open`)&&void 0,children:t.length?t:void 0,element:e});break}case za.tagName:n.push({type:`checkbox`,key:qa(e,`value`)||Ka(e),label:Pa(e),textValue:qa(e,`text-value`),shortcut:qa(e,`shortcut`),disabled:Ja(e,`disabled`),checked:Ja(e,`checked`),closeOnSelect:Ja(e,`close-on-select`),element:e});break;case Z.tagName:{r||(r={type:`radio-group`,key:a,items:[]},n.push(r));let t=Fa(e);r.items.push(t),Ja(e,`checked`)&&(r.value=t.value);break}case Va.tagName:n.push({type:`separator`,key:a});break;case Ha.tagName:n.push({type:`label`,key:a,label:Pa(e)});break;case Ba.tagName:{let t=Array.from(e.children),r=qa(e,`label`);if(t.length>0&&t.every(e=>e.localName===Z.tagName)){let i=t.map(Fa);n.push({type:`radio-group`,key:a,label:r,items:i,value:i.find(e=>e.element?.hasAttribute(`checked`))?.value,closeOnSelect:Ja(e,`close-on-select`),element:e})}else n.push({type:`group`,key:a,label:r??``,items:Ia(e,a)});break}}}),n}var La,Ra,za,Z,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja;function Ya(){return(Ya=e((()=>{v(),M(),D(),La=O`
:host{
display: none !important;
}
`,Ra=class extends p{constructor(...e){super(...e),this.value=``,this.disabled=!1,this.shortcut=``,this.textValue=``,this.keepOpen=!1}static{this.tagName=`minerva-menu-item`}static{this.styles=La}},F([j({reflect:!0})],Ra.prototype,`value`,void 0),F([j({type:Boolean,reflect:!0})],Ra.prototype,`disabled`,void 0),F([j()],Ra.prototype,`shortcut`,void 0),F([j({attribute:`text-value`})],Ra.prototype,`textValue`,void 0),F([j({type:Boolean,attribute:`keep-open`})],Ra.prototype,`keepOpen`,void 0),za=class extends p{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1,this.shortcut=``,this.textValue=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-checkbox-item`}static{this.styles=La}},F([j({reflect:!0})],za.prototype,`value`,void 0),F([j({type:Boolean,reflect:!0})],za.prototype,`checked`,void 0),F([j({type:Boolean,reflect:!0})],za.prototype,`disabled`,void 0),F([j()],za.prototype,`shortcut`,void 0),F([j({attribute:`text-value`})],za.prototype,`textValue`,void 0),F([j({type:Boolean,attribute:`close-on-select`})],za.prototype,`closeOnSelect`,void 0),Z=class extends p{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1,this.shortcut=``,this.textValue=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-radio-item`}static{this.styles=La}},F([j({reflect:!0})],Z.prototype,`value`,void 0),F([j({type:Boolean,reflect:!0})],Z.prototype,`checked`,void 0),F([j({type:Boolean,reflect:!0})],Z.prototype,`disabled`,void 0),F([j()],Z.prototype,`shortcut`,void 0),F([j({attribute:`text-value`})],Z.prototype,`textValue`,void 0),F([j({type:Boolean,attribute:`close-on-select`})],Z.prototype,`closeOnSelect`,void 0),Ba=class extends p{constructor(...e){super(...e),this.label=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-group`}static{this.styles=La}},F([j()],Ba.prototype,`label`,void 0),F([j({type:Boolean,attribute:`close-on-select`})],Ba.prototype,`closeOnSelect`,void 0),Va=class extends p{static{this.tagName=`minerva-menu-separator`}static{this.styles=La}},Ha=class extends p{static{this.tagName=`minerva-menu-label`}static{this.styles=La}},Ua=[Ra.tagName,za.tagName,Z.tagName,Ba.tagName,Va.tagName,Ha.tagName],Wa=e=>e.nodeType===1&&Ua.includes(e.localName),Ga=e=>!!(e.nodeType===1?e:e.parentElement)?.closest(Ua.join(`,`)),Ka=e=>Array.from(e.childNodes).filter(e=>!Wa(e)).map(e=>e.textContent??``).join(``).trim(),qa=(e,t)=>e.getAttribute(t)??void 0,Ja=(e,t)=>e.hasAttribute(t)})))()}var Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,Q;function so(){return(so=e((()=>{h(),u(),Bt(),v(),b(),nr(),$n(),or(),Zn(),Xn(),et(),Ya(),M(),D(),T(),xn(),Wn(),Xa=100,Za=`[data-minerva-menu-item]`,Qa={mainAxis:4,crossAxis:-5},$a=e=>e.hasAttribute(`data-menu-disabled`),eo=e=>e.dataset.textValue??e.querySelector(`.text`)?.textContent??e.textContent??``,to=e=>e?Array.from(e.querySelectorAll(Za)):[],no=e=>Tn(e,{preventScroll:!0}),ro=e=>typeof e==`string`?e:void 0,io=e=>e.join(`/`),ao=0,oo=class{constructor(e,t,n){this.grace=pn(),this.typeahead=Mn(),this.lastTypeahead=0,this.element=null,this.uid=null,this.path=[],this.position=new ir(e,()=>n===0?{placement:t.rootPlacement(),offset:t.rootOffset(),padding:8}:{placement:t.direction===`rtl`?`left-start`:`right-start`,offset:Qa,padding:8}),this.layer=new er(e,()=>n===0?t.rootLayerOptions():t.subLayerOptions(n)),this.scope=new Qn(e,()=>({trapped:n===0&&t.isModal,autoFocus:!1,restoreFocus:!1}))}clearTimer(){clearTimeout(this.openTimer),this.openTimer=void 0}},Q=class extends p{constructor(...e){super(...e),this.items=[],this.open=!1,this.size=`medium`,this.keepOpen=!1,this.disabled=!1,this.nonModal=!1,this.noLoop=!1,this.declarative=[],this.openPath=[],this.exiting=[],this.stored=new Map,this.levels=[],this.modalController=new rr(this),this.observer=null,this.intent=`content`,this.subIntent=`none`,this.restoreOverride=void 0,this.reason=`outside`,this.direction=`ltr`,this.onPanelKeyDown=e=>{let t=e.currentTarget,n=this.panelDepth(t),r=this.levels[n],{key:i}=e;if(i===`Tab`){e.preventDefault(),this.closeWithTab(e.shiftKey);return}if(e.defaultPrevented||!r||e.altKey||e.ctrlKey||e.metaKey)return;let a=to(t),o=e.composedPath()[0],s=a.find(e=>e===o)??null,ee=s?a.indexOf(s):-1,te=this.direction===`rtl`,ne=te?`ArrowLeft`:`ArrowRight`,re=te?`ArrowRight`:`ArrowLeft`;if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(i)){e.preventDefault(),r.typeahead.reset();let t=kn({currentIndex:ee,count:a.length,key:i,orientation:`vertical`,loop:!this.noLoop,isDisabled:e=>$a(a[e])});t!==null&&no(a[t]);return}if(i===ne&&s?.hasAttribute(`aria-haspopup`)){e.preventDefault(),$a(s)||this.openSubmenu(n,s.dataset.uid??``,`first`);return}if(i===re&&n>0){e.preventDefault(),no(this.parentItem(n)),this.closeSubmenu(n);return}if(i.length===1){let t=Date.now();t-r.lastTypeahead>500&&r.typeahead.reset();let n=r.typeahead.getBuffer()!==``;if(i!==` `||n){r.lastTypeahead=t,e.preventDefault();let n=r.typeahead.search(i,a.map(e=>({text:eo(e),disabled:$a(e)})),ee);n!==-1&&no(a[n]);return}}(i===`Enter`||i===` `)&&s&&(e.preventDefault(),$a(s)||this.activateItem(s,`first`))},this.itemActions=new Map,this.onPanelFocusIn=e=>{let t=e.composedPath()[0];t.matches?.(Za)&&t.setAttribute(`data-menu-highlighted`,``)},this.onPanelFocusOut=e=>{let t=e.composedPath()[0];t.matches?.(Za)&&t.removeAttribute(`data-menu-highlighted`)}}static{this.styles=[m,tr,O`
:host{
display: contents;
}
`,S(t)]}onRootPointerDownOutside(e){}get isModal(){return!this.nonModal}get entries(){return this.items.length?this.items:this.declarative}show(){this.open=!0}hide(){this.open=!1}requestOpenChange(e,t){if(e===this.open)return!0;let n=this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0});return n&&(this.open=e,e||this.closeLevels()),n}openWith(e,t){this.intent=e,this.requestOpenChange(!0,t)}closeAll(e){this.requestOpenChange(!1,e)}closeWithTab(e){let t=this.restoreTarget(),n;if(t){let r=rn().find(e=>e.element===this.levels[0]?.element)?.parent??document.body,i=Kn(r).filter(e=>e===t||!Vn(this,e)||!this.isPanelNode(e)),a=i.indexOf(t);n=a===-1?t:i[e?a-1:a+1]??t}this.restoreOverride=n??void 0,this.requestOpenChange(!1,`tab`)&&no(n)}isPanelNode(e){return this.levels.some(t=>Vn(t.element,e))}level(e){return this.levels[e]??=new oo(this,this,e),this.levels[e]}parentItem(e){let t=this.openPath[e-1];return t?this.renderRoot.querySelector(`[data-uid="${t}"]`)??null:null}rootLayerOptions(){return{disableOutsidePointerEvents:this.isModal,branches:()=>this.branches(),onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:e=>{this.reason=`outside`,this.onRootPointerDownOutside(e),!e.defaultPrevented&&(!this.isModal||e.button===2)&&(this.restoreOverride=null)},onFocusOutside:e=>(this.reason=`focus-outside`,!this.isModal||(e.preventDefault(),!1)),onDismiss:()=>this.closeAll(this.reason)}}subLayerOptions(e){return{parent:this.levels[e-1]?.element??void 0,branches:()=>[this.parentItem(e)],onEscapeKeyDown:()=>{no(this.parentItem(e))},onDismiss:()=>this.closeSubmenu(e)}}closeLevels(e=0,t=!0){for(let n=this.levels.length-1;n>=e;n--){let e=this.levels[n],r=e.element;r&&(e.clearTimer(),e.grace.clear(),e.typeahead.reset(),e.scope.deactivate(),e.layer.deactivate(),e.position.end(),t&&this.isConnected?this.exit(r,n,e.path):C(r),e.element=null,e.uid=null,n===0&&(this.modalController.deactivate(),this.scheduleRestore()))}}exit(e,t,n){if(e.setAttribute(`data-state`,`closed`),un(e)<=0){C(e);return}let r=++ao,i=io(n);this.exiting=[...this.exiting.filter(e=>io(e.path)!==i),{id:r,depth:t,path:n}],Xt(e).then(()=>{this.exiting.some(e=>e.id===r)&&(C(e),this.exiting=this.exiting.filter(e=>e.id!==r))})}clearExiting(){if(this.exiting.length!==0){for(let e of this.exiting)C(this.renderRoot.querySelector(`[data-panel-key="${io(e.path)}"]`));this.exiting=[]}}scheduleRestore(){let e=this.restoreOverride;this.restoreOverride=void 0;let t=e===void 0?this.restoreTarget():e;t&&setTimeout(()=>{if(this.open||!t.isConnected)return;let e=_n(document);(!e||e===document.body||!e.isConnected||(this.shadowRoot?.contains(e)??!1))&&no(t)},0)}syncLevels(){let e=this.open&&!this.disabled?this.openPath.length+1:0;this.closeLevels(e);for(let t=0;t<e;t++){let e=t===0?``:this.openPath[t-1],n=this.renderRoot.querySelector(`[data-panel-key="${io(this.openPath.slice(0,t))}"]`);if(!n)return;let r=this.level(t);if(r.element===n&&r.uid===e)continue;r.element&&this.closeLevels(t);let i=t===0?this.anchorElement():this.parentItem(t);if(!i)return;r.element=n,r.uid=e,r.path=this.openPath.slice(0,t),n.setAttribute(`data-state`,`open`),Ge(n),r.position.start(i,n),t===0&&this.isModal&&this.modalController.activate(this),r.layer.activate(n),r.scope.activate(n);let a=t===0?this.intent:this.subIntent;t===0?this.intent=`content`:this.subIntent=`none`,this.focusIntent(n,a)}}focusIntent(e,t){if(t===`none`)return;let n=to(e).filter(e=>!$a(e));no((t===`first`?n[0]:t===`last`?n[n.length-1]:void 0)??e)}reanchor(){let e=this.levels[0],t=this.anchorElement();e?.element&&t&&e.position.start(t,e.element)}openSubmenu(e,t,n){if(this.openPath[e]===t&&this.levels[e+1]?.element){n===`first`&&no(to(this.levels[e+1].element).find(e=>!$a(e)));return}this.subIntent=n,this.openPath=[...this.openPath.slice(0,e),t]}closeSubmenu(e){this.openPath.length<e||(this.closeLevels(e),this.openPath=this.openPath.slice(0,e-1))}stateOf(e,t){return this.stored.has(e)?this.stored.get(e):t}isChecked(e){return e.element?e.element.hasAttribute(`checked`):this.stateOf(e.key,e.checked??e.defaultChecked??!1)}radioValue(e){return e.items.some(e=>e.element)?e.items.find(e=>e.element?.hasAttribute(`checked`))?.value:this.stateOf(e.key,e.value??e.defaultValue)}activateAction(e){this.emit(`minerva-select`,{value:e.key,item:e},{cancelable:!0})&&(e.closeOnSelect??!this.keepOpen)&&this.closeAll(`select`)}toggleCheckbox(e){let t=!this.isChecked(e);this.emit(`minerva-change`,{value:e.key,checked:t,item:e},{cancelable:!0})&&(e.element?e.element.toggleAttribute(`checked`,t):this.stored.set(e.key,t),this.requestUpdate()),e.closeOnSelect&&this.closeAll(`select`)}chooseRadio(e,t){let n=this.radioValue(e);if(t.value!==n&&this.emit(`minerva-change`,{value:t.value,group:e.key,item:t},{cancelable:!0})){if(t.element)for(let n of e.items)n.element?.toggleAttribute(`checked`,n===t);else this.stored.set(e.key,t.value);this.requestUpdate()}(e.closeOnSelect||t.closeOnSelect)&&this.closeAll(`select`)}panelDepth(e){return Number(e.dataset.level??0)}activateItem(e,t){this.itemActions.get(e.dataset.uid??``)?.(t)}onItemClick(e){let t=e.currentTarget;$a(t)||this.activateItem(t,`none`)}onItemPointerMove(e){let t=e.currentTarget,n=t.closest(`[data-level]`);if(!n)return;let r=this.panelDepth(n),i=this.levels[r];if(!i||e.pointerType===`touch`||i.grace.isInGraceArea({x:e.clientX,y:e.clientY}))return;i.grace.clear();let a=_n(document);if($a(t)){a!==n&&no(n);return}a!==t&&no(t);let o=t.dataset.uid??``;t.hasAttribute(`aria-haspopup`)&&this.openPath[r]!==o&&i.openTimer===void 0&&(i.openTimer=setTimeout(()=>{i.openTimer=void 0,this.open&&this.openSubmenu(r,o,`none`)},100))}onItemPointerLeave(e){if(e.pointerType===`touch`)return;let t=e.currentTarget,n=t.closest(`[data-level]`);if(!n)return;let r=this.panelDepth(n),i=this.levels[r];if(!i)return;i.clearTimer();let a=this.levels[r+1]?.element;if(t.hasAttribute(`aria-haspopup`)&&this.openPath[r]===t.dataset.uid&&a){let t=a.getAttribute(`data-side`)??`right`;i.grace.start({x:e.clientX,y:e.clientY},a.getBoundingClientRect(),t);return}i.grace.isInGraceArea({x:e.clientX,y:e.clientY})||_n(document)===t&&no(n)}readEntries(){this.declarative=Ia(this)}connectedCallback(){super.connectedCallback(),this.readEntries(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(e=>{e.some(e=>Ga(e.target)||Array.from(e.addedNodes).some(Ga)||Array.from(e.removedNodes).some(e=>e.nodeType===1&&e.localName.startsWith(`minerva-menu-`)))&&this.readEntries()}),this.observer.observe(this,{subtree:!0,childList:!0,attributes:!0,characterData:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.closeLevels(0,!1),this.clearExiting()}willUpdate(e){if(e.has(`items`)&&(this.stored=new Map,_&&this.checkKeys(this.items)),e.has(`open`)&&this.open){let e=this.anchorElement(),t=e&&`nodeType`in e?e:this;this.direction=this.isConnected?sn(t):`ltr`}e.has(`open`)&&!this.open&&(this.openPath=[]);let t=this.open&&!this.disabled?this.openPath.length+1:0,n=this.levels.findIndex((e,n)=>e.element!==null&&(n>=t||io(e.path)!==io(this.openPath.slice(0,n))));if(n!==-1&&this.closeLevels(n),this.exiting.length){let e=this.openKeys();this.exiting.some(t=>e.has(io(t.path)))&&(this.exiting=this.exiting.filter(t=>!e.has(io(t.path))))}}openKeys(){return!this.open||this.disabled?new Set:new Set([[],...this.openPath.map((e,t)=>this.openPath.slice(0,t+1))].map(io))}checkKeys(e,t=new Set){for(let n of e)if(!(`type`in n&&n.type===`separator`)){if(`type`in n&&(n.type===`group`||n.type===`label`)){n.type===`group`&&this.checkKeys(n.items,t);continue}t.has(n.key)&&f(this.constructor.tagName,`duplicate item key "${n.key}": keys must be unique (checkbox / radio state and minerva-select values are keyed by it).`),t.add(n.key),!(`type`in n)&&n.children&&this.checkKeys(n.children,t)}}hookStates(){let e=this.levels[0]?.position.running?this.levels[0].position.placement:this.rootPlacement();return{state:this.open&&!this.disabled?`open`:`closed`,size:this.size,...Jt(e),placement:e}}updated(e){this.syncTrigger(),(e.has(`open`)||e.has(`openPath`)||e.has(`disabled`))&&this.syncLevels()}renderPanels(){let e=this.open&&!this.disabled;if(!e&&this.exiting.length===0)return k;this.itemActions.clear();let t=[];e&&(t.push({key:``,depth:0,path:[],state:`open`}),this.openPath.forEach((e,n)=>{let r=this.openPath.slice(0,n+1);t.push({key:io(r),depth:n+1,path:r,state:`open`})}));let n=new Set(t.map(e=>e.key));for(let e of this.exiting){let r=io(e.path);n.has(r)||(n.add(r),t.push({key:r,depth:e.depth,path:e.path,state:`closed`}))}return Sn(t,e=>e.key,e=>this.renderPanelAt(e.depth,e.path,e.state))}renderPanelAt(e,t,n){let r=this.entries,i=e===0?this.rootLabel():void 0;for(let[e,n]of t.entries()){let t=this.findSubmenu(r,n,`${e}:`);if(!t)return k;r=t.children??[],i=ro(t.label)??t.textValue}return this.renderPanel(e,t.at(-1)??``,r,i,n,io(t))}findSubmenu(e,t,n){for(let[r,i]of e.entries()){let e=`${n}${r}`;if(`type`in i){if(i.type===`group`){let n=this.findSubmenu(i.items,t,`${e}.`);if(n)return n}continue}if(i.children?.length&&e===t)return i}return null}renderPanel(e,t,n,r,i,a){let o=e===0?``:`item-${t}`;return A`<div
part="content"
id=${e===0?`menu`:`menu-${t}`}
class=${P({content:!0,small:this.size===`small`})}
popover="manual"
role="menu"
aria-orientation="vertical"
aria-label=${e===0?r??k:k}
aria-labelledby=${e>0?o:k}
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
</div>`}renderEntries(e,t,n){return e.map((e,r)=>{let i=`${n}${r}`;if(`type`in e)switch(e.type){case`separator`:return A`<div
role="separator"
aria-orientation="horizontal"
class="separator"
part="separator"
></div>`;case`label`:return A`<div class="label" part="label">${e.label}</div>`;case`group`:{let n=`label-${i.replace(/[:.]/g,`-`)}`;return A`<div
role="group"
part="group"
aria-labelledby=${n}
>
<div id=${n} class="label" part="label">${e.label}</div>
${this.renderEntries(e.items,t,`${i}.`)}
</div>`}case`checkbox`:return this.renderCheckbox(e,i);case`radio-group`:return this.renderRadioGroup(e,i)}return this.renderAction(e,t,i)})}renderItem(e){let{uid:t,disabled:n=!1,submenu:r}=e;this.itemActions.set(t,e.activate);let i=e.textValue??ro(e.label),a=e.checked===void 0?r?r.open?`open`:`closed`:void 0:e.checked?`checked`:`unchecked`;return A`<div
id=${`item-${t}`}
part="item"
role=${e.role}
tabindex="-1"
class="item"
data-minerva-menu-item=""
data-uid=${t}
data-text-value=${i??k}
data-menu-disabled=${n?``:k}
data-menu-state=${a??k}
aria-disabled=${n?`true`:k}
aria-checked=${e.checked===void 0?k:String(e.checked)}
aria-haspopup=${r?`menu`:k}
aria-expanded=${r?String(r.open):k}
aria-controls=${r?.open?`menu-${t}`:k}
@click=${this.onItemClick}
@pointermove=${this.onItemPointerMove}
@pointerleave=${this.onItemPointerLeave}
>
${e.indicator??k}
${e.icon?A`<span class="icon" part="icon" aria-hidden="true"
>${e.icon}</span
>`:k}
<span class="text" part="item-label">${e.label}</span>
${e.shortcut?A`<span class="shortcut" part="shortcut">${e.shortcut}</span>`:k}
${e.trailing??k}
</div>`}renderAction(e,t,n){if(e.children?.length){let r=this.openPath[t]===n&&!e.disabled;return this.renderItem({uid:n,role:`menuitem`,label:e.label,textValue:e.textValue,icon:e.icon,shortcut:e.shortcut,disabled:e.disabled,submenu:{open:r},trailing:A`<span class="chevron" aria-hidden="true"
>${o}</span
>`,activate:e=>this.openSubmenu(t,n,e)})}return this.renderItem({uid:n,role:`menuitem`,label:e.label,textValue:e.textValue,icon:e.icon,shortcut:e.shortcut,disabled:e.disabled,activate:()=>this.activateAction(e)})}renderCheckbox(e,t){let n=this.isChecked(e);return this.renderItem({uid:t,role:`menuitemcheckbox`,label:e.label,textValue:e.textValue,shortcut:e.shortcut,disabled:e.disabled,checked:n,indicator:A`<span
class="indicator"
part="item-indicator"
aria-hidden="true"
>${n?le:k}</span
>`,activate:()=>this.toggleCheckbox(e)})}renderRadioGroup(e,t){let n=this.radioValue(e),r=`label-${t.replace(/[:.]/g,`-`)}`,i=e.label!=null&&e.label!==``;return A`<div
role="group"
part="group"
aria-labelledby=${i?r:k}
>
${i?A`<div id=${r} class="label" part="label">${e.label}</div>`:k}
${e.items.map((r,i)=>{let a=r.value===n;return this.renderItem({uid:`${t}.${i}`,role:`menuitemradio`,label:r.label,textValue:r.textValue,shortcut:r.shortcut,disabled:r.disabled,checked:a,indicator:A`<span
class="indicator"
part="item-indicator"
aria-hidden="true"
>${a?A`<span class="dot"></span>`:k}</span
>`,activate:()=>this.chooseRadio(e,r)})})}
</div>`}},F([j({attribute:!1})],Q.prototype,`items`,void 0),F([j({type:Boolean,reflect:!0})],Q.prototype,`open`,void 0),F([j({reflect:!0})],Q.prototype,`size`,void 0),F([j({type:Boolean,attribute:`keep-open`})],Q.prototype,`keepOpen`,void 0),F([j({type:Boolean,reflect:!0})],Q.prototype,`disabled`,void 0),F([j({type:Boolean,reflect:!0,attribute:`non-modal`})],Q.prototype,`nonModal`,void 0),F([j({type:Boolean,attribute:`no-loop`})],Q.prototype,`noLoop`,void 0),F([w()],Q.prototype,`declarative`,void 0),F([w()],Q.prototype,`openPath`,void 0),F([w()],Q.prototype,`exiting`,void 0)})))()}function co(e,t,n){n===null?e.hasAttribute(t)&&e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}var lo,uo;function fo(){return(fo=e((()=>{h(),Ya(),so(),M(),D(),xn(),lo={mainAxis:6,crossAxis:0},uo=class e extends Q{constructor(...e){super(...e),this.side=`bottom`,this.align=`end`,this.disabledTrigger=null,this.handleKeyDown=e=>{if(!(this.disabled||e.defaultPrevented||!this.fromTrigger(e)))switch(e.key){case`Enter`:case` `:e.preventDefault(),this.open?this.requestOpenChange(!1,`trigger`):this.openWith(`first`,`keyboard`);break;case`ArrowDown`:e.preventDefault(),this.openWith(`first`,`keyboard`);break;case`ArrowUp`:e.preventDefault(),this.openWith(`last`,`keyboard`)}},this.handleClick=e=>{this.disabled||e.defaultPrevented||!this.fromTrigger(e)||(this.open?this.requestOpenChange(!1,`trigger`):this.openWith(e.detail===0?`first`:`content`,`trigger`))}}static{this.tagName=`minerva-menu`}static{this.dependencies=[Ra,za,Z,Ba,Va,Ha]}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}anchorElement(){return this.triggerElement()}rootPlacement(){return $t(this.side,this.align)}rootOffset(){return lo}restoreTarget(){return this.triggerElement()}branches(){return[this.triggerElement()]}rootLabel(){let e=this.getAttribute(`aria-label`);if(e)return e;let t=this.triggerElement();return t?.getAttribute(`aria-label`)??(t?.textContent?.trim()||void 0)}syncTrigger(){let e=this.triggerElement();e&&(co(e,`aria-haspopup`,`menu`),co(e,`aria-expanded`,String(this.open)),co(e,`data-state`,this.open?`open`:`closed`),co(e,`data-disabled`,this.disabled?``:null),this.disabled&&!e.hasAttribute(`disabled`)?(e.setAttribute(`disabled`,``),this.disabledTrigger=e):!this.disabled&&this.disabledTrigger===e&&(e.removeAttribute(`disabled`),this.disabledTrigger=null))}fromTrigger(e){let t=this.triggerElement();return!!t&&e.composedPath().includes(t)}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`click`,this.handleClick)}firstUpdated(t){super.firstUpdated(t),_&&!this.triggerElement()&&f(e.tagName,`no slot="trigger" element: nothing opens the menu (add e.g. <button slot="trigger">).`)}render(){return A`<slot name="trigger"></slot>${this.renderPanels()}`}},F([j({reflect:!0})],uo.prototype,`side`,void 0),F([j({reflect:!0})],uo.prototype,`align`,void 0)})))()}var po,mo,ho,go,_o;function vo(){return(vo=e((()=>{Bt(),Ya(),so(),fo(),M(),xn(),po=700,mo={mainAxis:2,crossAxis:0},ho={mainAxis:4,crossAxis:0},go=(e,t,n)=>({contextElement:n,getBoundingClientRect:()=>({x:e,y:t,left:e,top:t,right:e,bottom:t,width:0,height:0})}),_o=class extends Q{constructor(...e){super(...e),this.position=null,this.restoreTo=null,this.areaPointerEvents=null,this.handleContextMenu=e=>{this.disabled||e.defaultPrevented||!this.inArea(e)||(e.preventDefault(),this.clearLongPress(),this.openAtPoint(e.clientX,e.clientY))},this.handleKeyDown=e=>{if(!(this.disabled||e.defaultPrevented||!this.inArea(e))&&(e.key===`ContextMenu`||e.shiftKey&&e.key===`F10`)){let t=this.area();if(!t)return;e.preventDefault();let n=sn(t)===`rtl`;this.openAt({anchor:t,placement:n?`bottom-end`:`bottom-start`,offset:ho})}},this.handlePointerDown=e=>{if(this.disabled||e.pointerType!==`touch`||!this.inArea(e))return;this.clearLongPress();let{clientX:t,clientY:n}=e;this.longPress=setTimeout(()=>{this.longPress=void 0,this.openAtPoint(t,n)},700)},this.handleTouchEnd=e=>{e.pointerType===`touch`&&this.clearLongPress()}}static{this.tagName=`minerva-context-menu`}static{this.dependencies=[Ra,za,Z,Ba,Va,Ha]}static{this.styles=[...Q.styles,O`
:host(:not([disabled])) ::slotted(*){
-webkit-touch-callout: none;
}
`]}area(){return Array.from(this.children).find(e=>!Ua.includes(e.localName))??null}anchorElement(){return this.position?.anchor??null}rootPlacement(){return this.position?.placement??`right-start`}rootOffset(){return this.position?.offset??mo}restoreTarget(){return this.restoreTo}branches(){return[]}rootLabel(){return this.getAttribute(`aria-label`)??void 0}onRootPointerDownOutside(e){let t=this.area(),n=e.composedPath()[0];e.button===2&&t&&n instanceof Node&&Vn(t,n)&&e.preventDefault()}syncTrigger(){let e=this.area();if(!e)return;co(e,`data-state`,this.open?`open`:`closed`),co(e,`data-disabled`,this.disabled?``:null);let t=this.open&&this.isModal&&!this.disabled;t&&this.areaPointerEvents===null?(this.areaPointerEvents=e.style.pointerEvents,e.style.pointerEvents=`auto`):!t&&this.areaPointerEvents!==null&&(e.style.pointerEvents=this.areaPointerEvents,this.areaPointerEvents=null)}openAt(e){let t=this.area();if(t){if(!this.open){let e=_n(document);this.restoreTo=e instanceof HTMLElement&&Vn(t,e)?e:t}if(this.position=e,this.open){this.reanchor();return}this.openWith(`first`,`contextmenu`)}}openAtPoint(e,t){let n=this.area();if(!n)return;let r=sn(n)===`rtl`;this.openAt({anchor:go(e,t,n),placement:r?`left-start`:`right-start`,offset:mo})}inArea(e){let t=this.area(),n=e.composedPath()[0];return!!t&&n instanceof Node&&Vn(t,n)}clearLongPress(){clearTimeout(this.longPress),this.longPress=void 0}connectedCallback(){super.connectedCallback(),this.addEventListener(`contextmenu`,this.handleContextMenu),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`pointerdown`,this.handlePointerDown),this.addEventListener(`pointermove`,this.handleTouchEnd),this.addEventListener(`pointerup`,this.handleTouchEnd),this.addEventListener(`pointercancel`,this.handleTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.clearLongPress(),this.removeEventListener(`contextmenu`,this.handleContextMenu),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`pointerdown`,this.handlePointerDown),this.removeEventListener(`pointermove`,this.handleTouchEnd),this.removeEventListener(`pointerup`,this.handleTouchEnd),this.removeEventListener(`pointercancel`,this.handleTouchEnd)}render(){return A`<slot></slot>${this.renderPanels()}`}}})))()}function yo(e){return Co.add(e),!wo&&typeof MutationObserver<`u`&&(wo=new MutationObserver(()=>{for(let e of[...Co])e()}),wo.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`],subtree:!0})),()=>{Co.delete(e),Co.size===0&&(wo?.disconnect(),wo=null)}}var bo,xo,So,Co,wo,$;function To(){return(To=e((()=>{h(),u(),Bt(),d(),v(),b(),Nt(),Ur(),sr(),_t(),M(),D(),yn(),mn(),bo=(e,t)=>Number.isFinite(e)&&e>0?e:t,xo=e=>e===`dark`||e===`github-dark`?`dark`:e===`light`?`light`:void 0,So=e=>typeof e?.editor?.create==`function`,Co=new Set,wo=null,$=class e extends ft{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.language=`plaintext`,this.label=``,this.height=420,this.minHeight=160,this.maxHeight=800,this.loadTimeout=1e4,this.status=`loading`,this.scopeTheme=`light`,this.locale=new x(this),this.editor=null,this.engine=null,this.container=null,this.subscriptions=[],this.applying=!1,this.edited=!1,this.dirty=!1,this.unobserveTheme=null,this.started=!1}static{this.tagName=`minerva-code-editor`}static{this.dependencies=[V,mr]}static{this.styles=[m,O`
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
`,S(At)]}get resolvedTheme(){return this.theme===`dark`||this.theme===`light`?this.theme:this.scopeTheme}focus(e){this.editor?this.editor.focus():this.fallback?.focus(e)}retry(){this.load()}getFormValue(){return this.value}getValidity(){return this.required&&!this.value?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.fallback??null}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}connectedCallback(){super.connectedCallback(),this.syncScopeTheme(),this.unobserveTheme=yo(()=>this.syncScopeTheme()),this.started&&this.load()}disconnectedCallback(){super.disconnectedCallback(),this.unobserveTheme?.(),this.unobserveTheme=null,this.teardown()}syncScopeTheme(){let e=De(this,`[data-theme]`);this.scopeTheme=xo(e?.getAttribute(`data-theme`))??`light`}get monacoTheme(){return this.resolvedTheme===`dark`?`vs-dark`:`vs`}teardown(){clearTimeout(this.timer),this.timer=void 0;for(let e of this.subscriptions)e.dispose();this.subscriptions=[];try{this.editor?.dispose()}catch{}this.editor=null,this.engine=null,this.container?.remove(),this.container=null}fail(){let e=this.status===`error`;this.teardown(),this.status=`error`,e||this.emit(`minerva-error`)}load(){this.teardown(),this.status=`loading`,this.isConnected&&(this.timer=setTimeout(()=>this.fail(),this.loadTimeout),this.monaco!==void 0&&this.mount())}mount(){let t=this.monaco;if(!So(t)){_&&f(e.tagName,'`monaco` is not a Monaco engine (expected `import * as monaco from "monaco-editor"`); showing the textarea fallback.'),this.fail();return}let n=document.createElement(`div`);n.slot=`editor`,n.setAttribute(`data-minerva-code-editor`,``),this.append(n),this.container=n;try{t.editor.setTheme(this.monacoTheme);let e=t.editor.create(n,{value:this.value,language:this.language,theme:this.monacoTheme,readOnly:this.isDisabled,domReadOnly:this.isDisabled,ariaLabel:this.label,automaticLayout:!0,minimap:{enabled:!1},wordWrap:`on`,scrollBeyondLastLine:!1});this.editor=e,this.engine=t,this.subscriptions.push(e.onDidChangeModelContent(()=>this.handleEdit()),e.onDidBlurEditorText(()=>this.commit()))}catch{this.fail();return}clearTimeout(this.timer),this.timer=void 0,this.status=`mounted`}handleEdit(){let e=this.editor;e&&!this.applying&&(this.isDisabled||(this.value=e.getValue(),this.dirty=!0,this.edited=!0,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.emit(`minerva-input`,{value:this.value})))}commit(){this.edited&&(this.edited=!1,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value}))}handleFallbackInput(e){this.isDisabled||(this.value=e.target.value,this.dirty=!0,this.edited=!0,this.emit(`minerva-input`,{value:this.value}))}applyValue(){let e=this.editor;if(e&&e.getValue()!==this.value){this.applying=!0;try{let t=e.getModel();this.isDisabled||!t?e.setValue(this.value):(e.executeEdits(``,[{range:t.getFullModelRange(),text:this.value,forceMoveMarkers:!0}]),e.pushUndoStop())}finally{this.applying=!1}}}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue)}updated(t){if(super.updated(t),!this.started){this.started=!0,_&&!this.label&&f(e.tagName,`set label: it is the visible label and the accessible name of the editor.`),this.load();return}if(t.has(`monaco`)&&t.get(`monaco`)!==void 0){this.load();return}t.has(`monaco`)&&this.monaco!==void 0&&!this.editor&&(this.status===`loading`&&this.timer!==void 0?this.mount():this.status===`error`&&this.load());let n=this.editor,r=this.engine;if(n&&r)try{t.has(`value`)&&this.applyValue(),t.has(`language`)&&r.editor.setModelLanguage(n.getModel(),this.language),(t.has(`disabled`)||t.has(`formDisabled`)||t.has(`label`))&&n.updateOptions({readOnly:this.isDisabled,domReadOnly:this.isDisabled,ariaLabel:this.label}),(t.has(`theme`)||t.has(`scopeTheme`))&&r.editor.setTheme(this.monacoTheme)}catch{this.fail()}}hookStates(){return{disabled:this.isDisabled,loading:this.status===`loading`}}render(){let e=bo(this.minHeight,160),t=Math.max(e,bo(this.maxHeight,800)),n=Math.min(t,Math.max(e,bo(this.height,420))),r=this.locale.t,i=this.status;return A`<div
part="root"
class="root"
role="group"
aria-label=${this.label||k}
>
<label
part="label"
class="label"
for=${i===`error`?`fallback`:k}
@click=${()=>this.editor?.focus()}
>${this.label}</label
>
<div
part="surface"
class="surface"
style=${N({height:`${n}px`})}
aria-busy=${i===`loading`?`true`:`false`}
>
${i===`error`?A`<div part="error" class="error">
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
                  aria-label=${this.label||k}
                  spellcheck="false"
                  .value=${qn(this.value)}
                  ?disabled=${this.isDisabled}
                  @input=${this.handleFallbackInput}
                  @change=${()=>this.commit()}
                ></textarea>`:A`${i===`loading`?A`<div part="loading" class="loading" role="status">
<minerva-progress
size="small"
aria-label=${this.loadingLabel??r(`monacoCodeEditor.loading`)}
></minerva-progress>
</div>`:k}<slot name="editor"></slot>`}
</div>
</div>`}},F([j({attribute:!1})],$.prototype,`monaco`,void 0),F([j({attribute:!1})],$.prototype,`value`,void 0),F([j({attribute:`value`})],$.prototype,`defaultValue`,void 0),F([j({reflect:!0})],$.prototype,`language`,void 0),F([j()],$.prototype,`label`,void 0),F([j({type:Number})],$.prototype,`height`,void 0),F([j({type:Number,attribute:`min-height`})],$.prototype,`minHeight`,void 0),F([j({type:Number,attribute:`max-height`})],$.prototype,`maxHeight`,void 0),F([j({reflect:!0})],$.prototype,`theme`,void 0),F([j({type:Number,attribute:`load-timeout`})],$.prototype,`loadTimeout`,void 0),F([j({attribute:`unavailable-text`})],$.prototype,`unavailableText`,void 0),F([j({attribute:`retry-text`})],$.prototype,`retryText`,void 0),F([j({attribute:`retry-label`})],$.prototype,`retryLabel`,void 0),F([j({attribute:`loading-label`})],$.prototype,`loadingLabel`,void 0),F([w()],$.prototype,`status`,void 0),F([w()],$.prototype,`scopeTheme`,void 0),F([E(`textarea`)],$.prototype,`fallback`,void 0)})))()}export{Li as $,Y as A,Nr as At,ta as B,vr as Bt,ka as C,ei as Ct,Ea as D,Vr as Dt,Da as E,B as Et,ha as F,R as Ft,Ji as G,q as H,sa as I,Tr as It,Wi as J,Gi as K,oa as L,L as Lt,J as M,jr as Mt,va as N,Ar as Nt,X as O,Lr as Ot,ma as P,Mr as Pt,Ri as Q,aa as R,Cr as Rt,Ma as S,ni as St,Aa as T,V as Tt,Zi as U,na as V,Yi as W,Ui as X,Hi as Y,K as Z,Ga as _,Qr as _t,_o as a,Ci as at,Ia as b,Xr as bt,uo as c,vi as ct,Ra as d,gi as dt,Fi as et,Ba as f,fi as ft,za as g,ti as gt,Va as h,ui as ht,po as i,G as it,ba as j,Pr as jt,Ca as k,Ir as kt,Xa as l,W as lt,Ya as m,H as mt,To as n,Ii as nt,fo as o,Si as ot,Ua as p,U as pt,Ki as q,vo as r,Oi as rt,co as s,xi as st,$ as t,wi as tt,so as u,hi as ut,Z as v,ri as vt,Oa as w,Ur as wt,Na as x,ii as xt,Ha as y,$r as yt,ia as z,I as zt};