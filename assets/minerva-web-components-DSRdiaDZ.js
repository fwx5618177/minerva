import{n as e}from"./rolldown-runtime-B0Z9INg1.js";import{_ as t,g as n,h as r,m as i}from"./native-preview-C-OsNMso.js";import{At as a,D as o,E as s,Gt as ee,Ht as te,L as c,Lt as ne,N as re,Nt as ie,O as ae,Q as oe,T as se,Ut as ce,Wt as le,X as ue,Xt as de,Y as fe,Z as pe,a as me,b as he,c as ge,ct as _e,dt as ve,en as ye,et as be,ft as xe,gt as Se,h as Ce,j as we,k as Te,ln as Ee,n as De,ot as Oe,pt as ke,s as Ae,sn as je,t as Me,v as Ne,wt as Pe,x as Fe,y as Ie,yt as Le}from"./angular-preview-Cs02Aw4a.js";import{A as l,B as Re,D as u,E as d,I as f,N as ze,_ as p,a as Be,b as m,d as Ve,g as h,i as He,j as g,l as Ue,m as We,n as Ge,p as Ke,s as qe,t as Je,u as Ye,v as _,w as v,x as y,z as Xe}from"./minerva-web-components-Csj0uz1j.js";import{$ as Ze,$n as Qe,$t as $e,An as et,At as tt,Bn as nt,Bt as rt,Cr as it,Ct as at,Dn as ot,Dr as b,Dt as st,En as ct,Er as lt,Et as ut,Fn as dt,Ft as ft,Gt as pt,Hn as mt,Ht as ht,In as gt,It as _t,Jn as vt,Jt as yt,Kn as bt,Kt as xt,Ln as St,Lt as Ct,Mn as wt,Mt as Tt,Nn as Et,On as Dt,Or as x,Ot,Qt as kt,Rn as At,Rt as jt,Sr as Mt,St as Nt,Tn as Pt,Tr as Ft,Tt as It,Un as S,Ut as Lt,Vt as Rt,Wn as zt,Wt as Bt,Xn as Vt,Xt as Ht,Yn as Ut,Yt as Wt,Zt as Gt,_n as Kt,_r as qt,_t as Jt,an as Yt,ar as C,at as Xt,bn as Zt,br as w,bt as Qt,cn as $t,cr as en,ct as tn,dn as nn,dr as T,dt as rn,en as an,er as on,et as sn,fn as cn,fr as E,ft as ln,gn as un,gr as dn,gt as fn,hn as pn,hr as mn,ht as hn,in as gn,ir as D,jt as _n,kt as vn,ln as yn,lr as O,lt as bn,mn as xn,mr as Sn,mt as Cn,n as wn,nn as Tn,nt as En,on as Dn,or as k,ot as On,pn as kn,pr as A,pt as An,qn as jn,qt as Mn,rn as Nn,sn as Pn,sr as Fn,st as In,t as Ln,tn as Rn,tt as zn,un as Bn,ur as j,ut as Vn,vn as M,vr as Hn,vt as Un,wn as Wn,wr as Gn,wt as Kn,xn as qn,xr as N,xt as Jn,yn as P,yr as F,yt as Yn,zn as Xn,zt as Zn}from"./minerva-web-components-BWS4e5WD.js";import{t as I}from"./minerva-web-components-D61_qRVd.js";import{_ as Qn,c as $n,d as er,f as tr,g as nr,h as rr,l as ir,m as ar,p as or,s as sr,u as cr}from"./minerva-web-components-DcZaDYYc.js";import{At as lr,Bt as ur,It as dr,Lt as fr,Mt as pr,Nt as mr,Rt as hr,jt as gr,zt as _r}from"./minerva-web-components-CxfNZxlg.js";var vr,yr,L;function br(){return(br=e((()=>{en(),b(),D(),S(),F(),A(),j(),M(),u(),m(),p(),We(),se(),vr={info:wt,success:qn,warning:Et,danger:on},yr=[`slideIn`,`fadeIn`,`bounce`,`zoom`],L=class e extends T{constructor(...e){super(...e),this.color=`info`,this.variant=`subtle`,this.size=`medium`,this.heading=``,this.hideIcon=!1,this.closable=!1,this.noAnimation=!1,this.animationName=`slideIn`,this.banner=!1,this.elevation=!1,this.square=!1,this.collapsible=!1,this.collapsed=!1,this.locale=new w(this),this.aria=new x(this),this.slots=new O(this)}static{this.tagName=`minerva-alert`}static{this.styles=[E,f`
:host{
display: block;
}
.icon svg,
.expandButton svg,
.closeButton svg{
display: block;
}
`,P(Fn)]}get hasHeading(){return!!this.heading||this.slots.test(`heading`)}handleExpand(){let e=this.collapsed;this.emit(`minerva-expanded-change`,{expanded:e},{cancelable:!0})&&(this.collapsed=!e)}handleClose(){let e=this.adjacentTabbable(),t=this.parentElement;this.emit(`minerva-close`,{},{cancelable:!0})&&(this.isFocusInsideOrLost()&&this.moveFocusOut(e,t),this.hidden=!0)}isFocusInsideOrLost(){let e=this.ownerDocument,t=Me(e);return!t||t===e.body||!t.isConnected||c(this,t)}adjacentTabbable(){let e=s(this.ownerDocument.body),t=e.map((e,t)=>c(this,e)?t:-1).filter(e=>e>=0);if(!t.length)return null;let n=e=>!c(this,e)&&Ne(e);return e.slice(t[t.length-1]+1).find(n)??e.slice(0,t[0]).filter(n).pop()??null}moveFocusOut(e,t){let n=typeof this.returnFocus==`function`?this.returnFocus():this.returnFocus;n?.isConnected&&Ae(n)||e?.isConnected&&Ae(e)||this.focusContainer(t)}focusContainer(e){let t=this.ownerDocument;if(e?.isConnected){for(let n=e;n&&n!==t.body;n=n.parentElement)if(n.hasAttribute(`tabindex`)&&Ae(n))return;e!==t.body&&e!==t.documentElement&&(e.setAttribute(`tabindex`,`-1`),e.addEventListener(`blur`,()=>{e.getAttribute(`tabindex`)===`-1`&&e.removeAttribute(`tabindex`)},{once:!0}),Ae(e,{preventScroll:!0}))}}updated(){k&&this.collapsible&&!this.hasHeading&&C(e.tagName,`collapsible needs a heading (the toggle lives in the title): set heading or fill the heading slot.`)}hookStates(){return{state:this.collapsible&&this.hasHeading?this.collapsed?`closed`:`open`:void 0,size:this.size,variant:this.variant,color:this.color}}render(){let e=this.locale.t,t=this.hasHeading,n=this.collapsible&&t,r=!this.collapsed,i=this.slots.test(`[default]`),a=!this.noAnimation,o=this.borderRadius,s=this.alertRole??(this.color===`danger`||this.color===`warning`?`alert`:`status`);return g`<div
part="root"
class=${_({alert:!0,[this.color]:!0,[this.variant]:!0,[this.size]:!0,withIcon:!this.hideIcon,withTitle:t,banner:this.banner,withAnimation:a,[`animation-${this.animationName}`]:a&&yr.includes(this.animationName),withElevation:this.elevation,rounded:!this.square,expanded:r,collapsible:n})}
style=${h({borderRadius:o==null||o===``?void 0:/^\d+(\.\d+)?$/.test(String(o))?`${o}px`:String(o)})}
role=${s}
aria-label=${this.aria.label??l}
>
${this.hideIcon?l:g`<span
part="icon"
class="icon"
role="img"
aria-label=${this.iconLabel??e(`alert.icon.${this.color}`)}
><slot name="icon">${vr[this.color]??vr.info}</slot></span
>`}
<div class="content">
${t?g`<div class="title" part="title">
<slot name="heading">${this.heading}</slot>
${n?g`<button
type="button"
part="trigger"
class="expandButton"
aria-label=${r?this.collapseLabel??e(`alert.collapse`):this.expandLabel??e(`alert.expand`)}
aria-expanded=${String(r)}
aria-controls=${r&&i?`message`:l}
@click=${this.handleExpand}
>
${r?Ut:Xn}
</button>`:l}
</div>`:l}
${i&&(!n||r)?g`<div id="message" class="message" part="description">
<slot></slot>
</div>`:l}
</div>
${this.slots.test(`action`)?g`<div class="action" part="action">
<slot name="action"></slot>
</div>`:l}
${this.closable?g`<button
type="button"
part="close-button"
class="closeButton"
aria-label=${this.closeLabel??e(`alert.close`)}
@click=${this.handleClose}
>
<slot name="close-icon">${Vt}</slot>
</button>`:l}
</div>`}},I([d({reflect:!0})],L.prototype,`color`,void 0),I([d({reflect:!0})],L.prototype,`variant`,void 0),I([d({reflect:!0})],L.prototype,`size`,void 0),I([d()],L.prototype,`heading`,void 0),I([d({type:Boolean,attribute:`hide-icon`})],L.prototype,`hideIcon`,void 0),I([d({type:Boolean,reflect:!0})],L.prototype,`closable`,void 0),I([d({type:Boolean,attribute:`no-animation`})],L.prototype,`noAnimation`,void 0),I([d({attribute:`animation-name`})],L.prototype,`animationName`,void 0),I([d({type:Boolean,reflect:!0})],L.prototype,`banner`,void 0),I([d({type:Boolean,reflect:!0})],L.prototype,`elevation`,void 0),I([d({type:Boolean,reflect:!0})],L.prototype,`square`,void 0),I([d({attribute:`border-radius`})],L.prototype,`borderRadius`,void 0),I([d({type:Boolean,reflect:!0})],L.prototype,`collapsible`,void 0),I([d({type:Boolean,reflect:!0})],L.prototype,`collapsed`,void 0),I([d({attribute:`close-label`})],L.prototype,`closeLabel`,void 0),I([d({attribute:`expand-label`})],L.prototype,`expandLabel`,void 0),I([d({attribute:`collapse-label`})],L.prototype,`collapseLabel`,void 0),I([d({attribute:`icon-label`})],L.prototype,`iconLabel`,void 0),I([d({attribute:`alert-role`})],L.prototype,`alertRole`,void 0),I([d({attribute:!1})],L.prototype,`returnFocus`,void 0)})))()}var xr,Sr,Cr,wr,R;function Tr(){return(Tr=e((()=>{D(),S(),it(),F(),A(),j(),M(),pn(),kn(),nr(),tr(),cr(),sr(),u(),m(),p(),se(),xr=[`expanded`,`compact`,`floating`],Sr=`(max-width: 768px)`,Cr=()=>typeof window<`u`&&typeof window.matchMedia==`function`?window.matchMedia(Sr):null,wr={iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,control:!0},R=class e extends T{constructor(...e){super(...e),this.brand=``,this.sidebarMode=`expanded`,this.noSkipLink=!1,this.collapsed=!1,this.mobile=!1,this.drawerOpen=!1,this.hovered=!1,this.keyboardFocus=!1,this.locale=new w(this),this.slots=new O(this),this.modal=new $n(this),this.focusScope=new or(this,()=>({trapped:!0,loop:!0,restoreFocus:!1})),this.layer=new Qn(this,()=>({disableOutsidePointerEvents:!0,branches:()=>[this.headerToggle],onFocusOutside:e=>e.preventDefault(),onDismiss:()=>this.requestDrawer(!1)})),this.query=null,this.drawerActive=!1,this.handleMediaChange=()=>this.syncMobile()}static{this.tagName=`minerva-app-shell`}static{this.styles=[E,er,f`
:host{
display: block;
}
`,P(cn),P(xn)]}openNavigation(){this.mobile&&(this.drawerOpen=!0)}closeNavigation(){this.drawerOpen=!1}expandNavigation(){this.sidebarMode=`expanded`}focusMain(){this.main?.focus()}connectedCallback(){super.connectedCallback(),this.query=Cr(),this.query?.addEventListener(`change`,this.handleMediaChange),this.syncMobile()}disconnectedCallback(){super.disconnectedCallback(),this.query?.removeEventListener(`change`,this.handleMediaChange),this.query=null,this.deactivateDrawer()}syncMobile(){let e=!!this.query?.matches;e!==this.mobile&&(this.mobile=e,this.hovered=!1,this.keyboardFocus=!1,this.drawerOpen=!1)}get mode(){return xr.includes(this.sidebarMode)?this.sidebarMode:`expanded`}setMode(e){e!==this.mode&&this.emit(`minerva-sidebar-mode-change`,{mode:e},{cancelable:!0})&&(this.sidebarMode=e)}requestDrawer(e){e!==this.drawerOpen&&this.emit(`minerva-open-change`,{open:e},{cancelable:!0})&&(this.drawerOpen=e)}willUpdate(e){e.has(`navigationKey`)&&e.get(`navigationKey`)!==void 0&&(this.drawerOpen=!1),this.mobile||(this.drawerOpen=!1),this.collapsed=!this.mobile&&this.mode!==`expanded`&&(this.mode!==`floating`||!this.hovered&&!this.keyboardFocus)}updated(t){let n=this.mobile&&this.drawerOpen;n&&!this.drawerActive&&this.drawer?(this.drawerActive=!0,Mt(this.overlay),Mt(this.drawer),this.modal.activate(this),this.layer.activate(this.drawer),this.focusScope.activate(this.drawer)):!n&&this.drawerActive&&(this.deactivateDrawer(),this.headerToggle?.focus()),k&&t.has(`sidebarMode`)&&!xr.includes(this.sidebarMode)&&C(e.tagName,`unknown sidebar-mode="${this.sidebarMode}" (expected ${xr.join(`, `)}); using "expanded".`),k&&!this.slots.test(`navigation`)&&C(e.tagName,`put the navigation in the "navigation" slot (e.g. <nav slot="navigation">).`)}hookStates(){return{state:this.mobile&&this.drawerOpen?`open`:`closed`}}deactivateDrawer(){this.drawerActive&&(this.drawerActive=!1,this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate(),N(this.drawer),N(this.overlay))}label(e,t){return e??this.locale.t(`appShell.${t}`)}handleSkip(e){e.preventDefault(),this.focusMain()}handleSidebarFocusIn(e){let t=e.composedPath()[0],n;try{n=!!t?.matches?.(`:focus-visible`)}catch{n=!1}n&&(this.keyboardFocus=!0)}handleSidebarFocusOut(e){let t=e.relatedTarget;(!t||!this.sidebar||!c(this.sidebar,t))&&(this.keyboardFocus=!1)}renderHeaderToggle(){return this.mobile?g`<button
type="button"
class=${_(wr)}
aria-label=${this.label(this.openNavigationLabel,`openNavigation`)}
aria-haspopup="dialog"
aria-expanded=${String(this.drawerOpen)}
aria-controls=${this.drawerOpen?`drawer`:l}
@click=${()=>this.requestDrawer(!this.drawerOpen)}
>
${Dt}
</button>`:this.renderCollapseControl()}renderCollapseControl(){let e=this.mode!==`expanded`;return g`<button
type="button"
class=${_(wr)}
aria-label=${e?this.label(this.expandLabel,`expand`):this.label(this.collapseLabel,`collapse`)}
aria-controls="sidebar"
aria-expanded=${String(!this.collapsed)}
@click=${()=>this.setMode(e?`expanded`:`compact`)}
>
${e?Dt:ot}
</button>`}renderSidebar(){let e=this.mode===`floating`,t=this.label(this.navigationLabel,`navigation`);return g`<aside
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
${this.slots.test(`brand-icon`)?g`<span class="brandIcon" aria-hidden="true"
><slot name="brand-icon"></slot
></span>`:l}
<span class="brandLabel"><slot name="brand">${this.brand}</slot></span>
</div>
<div class="navigation"><slot name="navigation"></slot></div>
<div class="sidebarActions">
${this.renderCollapseControl()}
<button
type="button"
class=${_(wr)}
aria-pressed=${String(e)}
aria-label=${e?this.label(this.disableFloatingLabel,`disableFloating`):this.label(this.enableFloatingLabel,`enableFloating`)}
@click=${()=>this.setMode(e?`compact`:`floating`)}
>
${e?Wn:et}
</button>
</div>
</aside>`}renderDrawer(){let e=this.label(this.navigationLabel,`navigation`);return g`<div
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
${Vt}
</button>
</div>`}render(){let e=this.skipLink||this.locale.t(`appShell.skipToContent`);return g`<div
class="shell"
part="root"
data-sidebar-mode=${this.mode}
data-sidebar-expanded=${this.collapsed?l:`true`}
>
${this.noSkipLink?l:g`<a
class="skipLink"
part="skip-link"
href="#main"
@click=${this.handleSkip}
>${e}</a
>`}
${this.mobile?l:this.renderSidebar()}
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
${this.mobile&&this.drawerOpen?this.renderDrawer():l}`}},I([d()],R.prototype,`brand`,void 0),I([d({attribute:`sidebar-mode`,reflect:!0})],R.prototype,`sidebarMode`,void 0),I([d({attribute:`navigation-label`})],R.prototype,`navigationLabel`,void 0),I([d({attribute:`navigation-key`})],R.prototype,`navigationKey`,void 0),I([d({attribute:`skip-link`})],R.prototype,`skipLink`,void 0),I([d({type:Boolean,attribute:`no-skip-link`})],R.prototype,`noSkipLink`,void 0),I([d({attribute:`expand-label`})],R.prototype,`expandLabel`,void 0),I([d({attribute:`collapse-label`})],R.prototype,`collapseLabel`,void 0),I([d({attribute:`enable-floating-label`})],R.prototype,`enableFloatingLabel`,void 0),I([d({attribute:`disable-floating-label`})],R.prototype,`disableFloatingLabel`,void 0),I([d({attribute:`open-navigation-label`})],R.prototype,`openNavigationLabel`,void 0),I([d({attribute:`close-navigation-label`})],R.prototype,`closeNavigationLabel`,void 0),I([d({type:Boolean,reflect:!0})],R.prototype,`collapsed`,void 0),I([d({type:Boolean,reflect:!0})],R.prototype,`mobile`,void 0),I([v()],R.prototype,`drawerOpen`,void 0),I([v()],R.prototype,`hovered`,void 0),I([v()],R.prototype,`keyboardFocus`,void 0),I([y(`.header button`)],R.prototype,`headerToggle`,void 0),I([y(`.drawer`)],R.prototype,`drawer`,void 0),I([y(`.overlay`)],R.prototype,`overlay`,void 0),I([y(`main`)],R.prototype,`main`,void 0),I([y(`aside`)],R.prototype,`sidebar`,void 0)})))()}var Er,z;function Dr(){return(Dr=e((()=>{b(),D(),S(),F(),Sn(),A(),j(),M(),cr(),$t(),Dn(),Bn(),u(),m(),p(),We(),se(),Ve(),Er={top:`top-start`,bottom:`bottom-start`,left:`left-start`,right:`right-start`},z=class e extends yn{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.options=[],this.open=!1,this.label=``,this.placeholder=``,this.mode=`basic`,this.size=`medium`,this.variant=`outline`,this.invalid=!1,this.readOnly=!1,this.loading=!1,this.placement=`bottom`,this.offset={x:0,y:4},this.noAnimation=!1,this.autoHighlight=!1,this.noFillOnSelect=!1,this.groupMode=`first`,this.focusedIndex=-1,this.hoveredIndex=-1,this.locale=new w(this),this.aria=new x(this,()=>this.labels),this.slots=new O(this),this.floating=new ir(this,()=>{let e=this.placement===`top`||this.placement===`bottom`,t=this.offset??{x:0,y:4};return{anchor:()=>this.container,floating:()=>this.popup,placement:Er[this.placement]??`bottom-start`,offset:{mainAxis:e?t.y:t.x,crossAxis:e?t.x:t.y},matchAnchorWidth:`min`,branches:()=>[this.container],onEscapeKeyDown:e=>{(this.composing||e.isComposing)&&e.preventDefault()},onDismiss:()=>this.close(),returnFocusOnEscape:()=>this.input,onPosition:()=>this.syncHookStates()}}),this.composing=!1,this.dirty=!1}static{this.tagName=`minerva-autocomplete`}static{this.shadowRootOptions={...yn.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[E,er,P(Pn),P(Yt),f`
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
`]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get blocked(){return this.isDisabled||this.readOnly}get shown(){return this.open&&!this.blocked}getFormValue(){return this.value}getValidity(){return this.required&&this.value===``?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.focusedIndex=-1}restoreFormState(e){typeof e==`string`&&(this.value=e)}get processedOptions(){let e=this.value,t=e.toLowerCase(),n=(this.options??[]).filter(n=>this.filterOption?this.filterOption(e,n):n.label.toLowerCase().includes(t));return this.sortOption?[...n].sort(this.sortOption):n}groupOptions(e){let t=this.groupBy;if(!t)return null;if(this.groupMode===`adjacent`){let n=[];for(let r of e){let e=t(r),i=n[n.length-1];i&&i[0]===e?i[1].push(r):n.push([e,[r]])}return n}let n=new Map;for(let r of e){let e=t(r),i=n.get(e);i?i.push(r):n.set(e,[r])}return Array.from(n.entries())}get navigableOptions(){let e=this.processedOptions,t=this.groupOptions(e);return t?t.flatMap(([,e])=>e):e}activeIndex(e){return this.focusedIndex>=0?this.focusedIndex:this.autoHighlight&&this.shown?e.findIndex(e=>!e.disabled):-1}requestOpen(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}openDropdown(){this.blocked||this.requestOpen(!0)}close(){this.requestOpen(!1),this.focusedIndex=-1}setText(e,t){e!==this.value&&(this.value=e,this.emit(`minerva-input`,{value:e}),t&&this.emit(`minerva-change`,{value:e}))}moveFocus(e){let t=this.navigableOptions,n=t.length;if(n===0)return;let r=this.activeIndex(t),i=r>=0?r:e===1?-1:n;for(let r=0;r<n;r+=1)if(i=(i+e+n)%n,!t[i].disabled){this.focusedIndex=i;return}}selectOption(e){e.disabled||(this.noFillOnSelect||this.setText(e.label,!0),this.close(),this.emit(`minerva-select`,{value:e.value,option:e}))}handleKeyDown(e){if(!(this.blocked||this.composing||e.isComposing||e.keyCode===229))switch(e.key){case`ArrowDown`:case`ArrowUp`:e.preventDefault(),this.open||this.openDropdown(),this.moveFocus(e.key===`ArrowDown`?1:-1);break;case`Enter`:{let t=this.navigableOptions,n=this.shown?t[this.activeIndex(t)]:void 0,r=this.value.trim();n?(e.preventDefault(),this.selectOption(n)):r&&(e.preventDefault(),this.emit(`minerva-submit`,{value:r}),this.close());break}case`Escape`:!this.shown&&!this.floating.isOpen&&this.value!==``&&(e.preventDefault(),this.setText(``,!0),this.focusedIndex=-1)}}handleInput(){this.setText(this.input.value,!1),this.focusedIndex=-1,this.openDropdown()}handleChange(){this.value=this.input.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}handleBlur(e){let t=e.relatedTarget;t&&(this.popup?.contains(t)||this.container?.contains(t))||this.close()}handleOptionClick(e){e.disabled||this.composing||(this.selectOption(e),this.input?.focus())}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),this.open&&this.blocked&&(this.open=!1,this.focusedIndex=-1)}hookStates(){let e=this.shown&&this.floating.isOpen?this.floating.position.placement:void 0,{side:t,align:n}=e?De(e):{side:void 0,align:void 0};return{state:this.shown?`open`:`closed`,disabled:this.isDisabled,readonly:this.readOnly,loading:this.loading,side:t,align:n,placement:e}}updated(t){if(super.updated(t),this.floating.sync(this.shown),t.has(`focusedIndex`)&&this.focusedIndex>=0&&this.shadowRoot?.getElementById(`option-${this.focusedIndex}`)?.scrollIntoView?.({block:`nearest`}),k&&t.has(`options`)){let t=new Set;for(let n of this.options??[]){if(t.has(n.value)){C(e.tagName,`several options have the value "${n.value}"; option values must be unique.`);break}t.add(n.value)}}}renderOptionContent(e){return this.mode===`custom`&&this.renderOption?this.renderOption(e):g`<div class="basicOption">
${e.icon?g`<span class="icon">${e.icon}</span>`:l}
<div class="content">
<div class="label">${e.label}</div>
${e.description?g`<div class="description">${e.description}</div>`:l}
</div>
</div>`}renderOptionItem(e,t,n){let r=n===t,i=this.hoveredIndex===t||r,a=!!e.disabled;return g`<div
part=${mn(`item`,{highlighted:i,disabled:a})}
class=${_({optionItem:!0,disabled:a,highlight:!!e.highlight,active:i})}
style=${e.style?h(e.style):l}
role="option"
tabindex="-1"
id=${`option-${t}`}
aria-selected=${String(r)}
aria-disabled=${e.disabled?`true`:l}
@mousedown=${e=>e.preventDefault()}
@click=${()=>this.handleOptionClick(e)}
@keydown=${t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),t.stopPropagation(),this.handleOptionClick(e))}}
@mouseenter=${()=>this.hoveredIndex=t}
@mouseleave=${()=>this.hoveredIndex=-1}
>
${this.renderOptionContent(e)}
</div>`}renderList(){let{t:e}=this.locale;if(this.loading)return g`<div role="presentation" class="loading" part="loading">
<span role="progressbar" aria-label=${e(`common.loading`)}
>${ct}</span
>
</div>`;let t=this.processedOptions;if(t.length===0)return g`<div role="presentation" class="empty" part="empty">
${this.renderEmpty?.()||g`${Pt}<span>${e(`empty.description`)}</span>`}
</div>`;let n=this.groupOptions(t),r=n?n.flatMap(([,e])=>e):t,i=this.activeIndex(r);return n?n.map(([e,t])=>{let n=t.map(e=>this.renderOptionItem(e,r.indexOf(e),i));return e===``?n:g`<div class="optionGroup" role="group" aria-label=${e}>
<div class="groupLabel" part="group-label" aria-hidden="true">
${e}
</div>
${n}
</div>`}):t.map((e,t)=>this.renderOptionItem(e,t,i))}render(){let e=this.shown,t=this.isDisabled,n=e?this.navigableOptions:[],r=e?this.activeIndex(n):-1,i=e&&r>=0&&r<n.length?`option-${r}`:void 0,a=this.label?void 0:this.aria.label;return g`<div
part="root"
class="autoComplete"
@compositionstart=${()=>this.composing=!0}
@compositionend=${()=>this.composing=!1}
>
${this.label?g`<label for="input" class="label" part="label"
>${this.label}</label
>`:l}
<div
part="field"
class=${_({root:!0,[this.variant]:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
data-component="input"
>
${this.slots.test(`prefix`)?g`<span class="addon start"><slot name="prefix"></slot></span>`:l}
<input
id="input"
part="input"
class="field"
type="text"
role="combobox"
aria-autocomplete="list"
aria-expanded=${String(e)}
aria-controls=${e?`listbox`:l}
aria-activedescendant=${i??l}
aria-label=${a??l}
aria-description=${this.aria.description??l}
aria-required=${this.required?`true`:l}
aria-invalid=${this.invalid||this.aria.attr(`aria-invalid`)===`true`?`true`:l}
data-minerva-escape-consumer=${!e&&this.value!==``?``:l}
autocomplete="off"
.value=${Ke(this.value)}
placeholder=${this.placeholder||l}
?disabled=${t}
?readonly=${this.readOnly}
@input=${this.handleInput}
@change=${this.handleChange}
@focus=${()=>this.openDropdown()}
@click=${()=>{this.open||this.openDropdown()}}
@blur=${this.handleBlur}
@keydown=${this.handleKeyDown}
/>
${this.slots.test(`suffix`)?g`<span class="addon end"><slot name="suffix"></slot></span>`:l}
</div>
${e?g`<div class="popup" part="content" popover="manual">
<div
class=${_({dropdown:!0,animated:!this.noAnimation})}
>
<div
class="optionList"
part="list"
role="listbox"
id="listbox"
aria-label=${this.label||a||l}
aria-busy=${this.loading?`true`:l}
>
${this.renderList()}
</div>
</div>
</div>`:l}
</div>`}},I([d({attribute:!1})],z.prototype,`value`,void 0),I([d({attribute:`value`})],z.prototype,`defaultValue`,void 0),I([d({attribute:!1})],z.prototype,`options`,void 0),I([d({type:Boolean,reflect:!0})],z.prototype,`open`,void 0),I([d()],z.prototype,`label`,void 0),I([d()],z.prototype,`placeholder`,void 0),I([d({reflect:!0})],z.prototype,`mode`,void 0),I([d({reflect:!0})],z.prototype,`size`,void 0),I([d({reflect:!0})],z.prototype,`variant`,void 0),I([d({type:Boolean,reflect:!0})],z.prototype,`invalid`,void 0),I([d({type:Boolean,reflect:!0,attribute:`readonly`})],z.prototype,`readOnly`,void 0),I([d({type:Boolean,reflect:!0})],z.prototype,`loading`,void 0),I([d({reflect:!0})],z.prototype,`placement`,void 0),I([d({attribute:!1})],z.prototype,`offset`,void 0),I([d({type:Boolean,attribute:`no-animation`})],z.prototype,`noAnimation`,void 0),I([d({type:Boolean,attribute:`auto-highlight`})],z.prototype,`autoHighlight`,void 0),I([d({type:Boolean,attribute:`no-fill-on-select`})],z.prototype,`noFillOnSelect`,void 0),I([d({attribute:`group-mode`})],z.prototype,`groupMode`,void 0),I([d({attribute:!1})],z.prototype,`filterOption`,void 0),I([d({attribute:!1})],z.prototype,`sortOption`,void 0),I([d({attribute:!1})],z.prototype,`groupBy`,void 0),I([d({attribute:!1})],z.prototype,`renderOption`,void 0),I([d({attribute:!1})],z.prototype,`renderEmpty`,void 0),I([v()],z.prototype,`focusedIndex`,void 0),I([v()],z.prototype,`hoveredIndex`,void 0),I([y(`input`)],z.prototype,`input`,void 0),I([y(`.autoComplete`)],z.prototype,`container`,void 0),I([y(`.popup`)],z.prototype,`popup`,void 0)})))()}function Or(e){let t=e?.trim()??``;return t?Ar.test(t[0])?t[0]:t.split(/\s+/).slice(0,2).map(e=>e[0].toUpperCase()).join(``):``}var kr,Ar,jr,Mr,Nr;function Pr(){return(Pr=e((()=>{b(),D(),F(),A(),j(),M(),gn(),Tn(),u(),m(),p(),We(),kr=[`xsmall`,`small`,`medium`,`large`,`xlarge`,`xxlarge`],Ar=/[㐀-鿿豈-﫿]/,jr={fromAttribute:e=>e&&/^\d+(\.\d+)?$/.test(e)?Number(e):e??`medium`,toAttribute:e=>String(e)},Mr=class e extends T{constructor(...e){super(...e),this.name=``,this.shape=`circle`,this.size=`medium`,this.stacked=!1,this.locale=new w(this),this.aria=new x(this),this.slots=new O(this)}static{this.tagName=`minerva-avatar`}static{this.styles=[E,f`
:host{
display: inline-block;
flex-shrink: 0;
vertical-align: middle;
line-height: 0;
}
.avatarText{
line-height: 1;
}
`,P(Nn)]}hookStates(){return{size:typeof this.size==`number`?void 0:this.size,shape:this.shape}}updated(t){k&&t.has(`size`)&&typeof this.size!=`number`&&!kr.includes(this.size)&&C(e.tagName,`unknown size "${this.size}": use a preset (${kr.join(`, `)}) or a number of pixels.`)}render(){let e=!!this.src&&this.failedSrc!==this.src,t=this.aria.label??(this.name||this.locale.t(`avatar.default`)),n=typeof this.size==`number`,r=_({avatar:!0,[this.shape]:!0,[String(this.size)]:!n,stacked:this.stacked}),i=h(n?{"--avatar-size":`${this.size}px`,width:`${this.size}px`,height:`${this.size}px`}:{});if(e)return g`<span part="root" class=${r} style=${i}
><img
part="image"
class="avatarImg"
alt=${this.alt??t}
src=${this.src}
draggable="false"
@error=${()=>this.failedSrc=this.src}
/></span>`;let a=Or(this.name),o=this.slots.test(`fallback`)?g`<slot name="fallback"></slot>`:a||g`<slot></slot>`;return g`<span
part="root"
role="img"
aria-label=${t}
class=${r}
style=${i}
><span part="fallback" class="avatarText" aria-hidden="true"
>${o}</span
></span
>`}},I([d()],Mr.prototype,`src`,void 0),I([d()],Mr.prototype,`name`,void 0),I([d()],Mr.prototype,`alt`,void 0),I([d({reflect:!0})],Mr.prototype,`shape`,void 0),I([d({reflect:!0,converter:jr})],Mr.prototype,`size`,void 0),I([d({type:Boolean,reflect:!0})],Mr.prototype,`stacked`,void 0),I([v()],Mr.prototype,`failedSrc`,void 0),Nr=class e extends T{constructor(...e){super(...e),this.locale=new w(this),this.aria=new x(this),this.slots=new O(this)}static{this.tagName=`minerva-avatar-group`}static{this.shadowRootOptions={...T.shadowRootOptions,slotAssignment:`manual`}}static{this.styles=[E,f`
:host{
display: flex;
}
.avatarGroup{
flex: 1 1 auto;
min-width: 0;
}
`,P(Rn)]}visibleAvatars(){let e=Array.from(this.children);return this.max===void 0||this.max===null?e:e.slice(0,Math.max(0,this.max))}updated(t){let n=this.visibleAvatars();Array.from(this.renderRoot.querySelectorAll(`slot[data-item]`)).forEach((e,t)=>{let r=n[t];r&&typeof e.assign==`function`&&e.assign(r)}),k&&t.has(`max`)&&this.max!==void 0&&this.max!==null&&!(Number.isInteger(this.max)&&this.max>=0)&&C(e.tagName,`max must be a non-negative integer (got ${this.max}).`)}render(){this.slots;let e=this.children.length,t=this.visibleAvatars(),n=(Number(this.count)||0)+e-t.length,r=this.aria.label??(n>0?this.locale.t(`avatar.groupWithMore`,{count:n}):this.locale.t(`avatar.group`));return g`<div
part="root"
role="group"
class="avatarGroup"
aria-label=${r}
>
${t.map(()=>g`<div part="item" class="avatarGroupItem">
<slot data-item></slot>
</div>`)}
${n>0?g`<div part="count" class="count" aria-hidden="true">
+${n}
</div>`:l}
</div>`}},I([d({type:Number})],Nr.prototype,`count`,void 0),I([d({type:Number})],Nr.prototype,`max`,void 0)})))()}var Fr;function Ir(){return(Ir=e((()=>{b(),D(),F(),A(),j(),M(),an(),u(),m(),p(),We(),Fr=class e extends T{constructor(...e){super(...e),this.color=`primary`,this.variant=`solid`,this.size=`medium`,this.position=`top-right`,this.dot=!1,this.badgeRole=`status`,this.locale=new w(this),this.aria=new x(this),this.slots=new O(this)}static{this.tagName=`minerva-badge`}static{this.styles=[E,f`
:host{
display: inline-flex;
vertical-align: middle;
}
`,P($e)]}hasElementChildren(){return Array.from(this.children).some(e=>!e.hasAttribute(`slot`)||e.getAttribute(`slot`)===``)}hookStates(){return{size:this.size,variant:this.variant,color:this.color}}updated(){k&&this.dot&&!this.aria.label&&![`presentation`,`none`].includes(this.badgeRole)&&C(e.tagName,`a dot badge has no text: set aria-label (e.g. "New messages") or badge-role="presentation".`)}render(){let e=this.slots.test(`[default]`),t=e&&!this.hasElementChildren(),n=this.content!==void 0&&this.content!==null||this.slots.test(`content`),r=!e||t&&!n,i=l;this.dot||(n?i=g`<slot name="content">${this.content}</slot>`:t?i=g`<slot></slot>`:e&&(i=this.locale.t(`badge.default`)));let a=g`<span
part=${r?`root`:`badge`}
class=${_({badge:!0,[this.color]:!0,[this.variant]:!0,[this.size]:!0,standalone:r,[this.position]:!r,dot:this.dot})}
role=${this.badgeRole||l}
aria-label=${this.aria.label??l}
style=${h({borderRadius:this.borderRadius,borderWidth:this.borderWidth})}
>${this.slots.test(`icon`)?g`<span class="icon" part="icon"
><slot name="icon"></slot
></span>`:l}${i}</span
>`;return r?a:g`<div part="root" class="badgeWrapper">
<div class="content"><slot></slot></div>
${a}
</div>`}},I([d({reflect:!0})],Fr.prototype,`color`,void 0),I([d({reflect:!0})],Fr.prototype,`variant`,void 0),I([d({reflect:!0})],Fr.prototype,`size`,void 0),I([d()],Fr.prototype,`content`,void 0),I([d({reflect:!0})],Fr.prototype,`position`,void 0),I([d({type:Boolean,reflect:!0})],Fr.prototype,`dot`,void 0),I([d({attribute:`border-radius`})],Fr.prototype,`borderRadius`,void 0),I([d({attribute:`border-width`})],Fr.prototype,`borderWidth`,void 0),I([d({attribute:`badge-role`})],Fr.prototype,`badgeRole`,void 0)})))()}function Lr(e){return e.replace(/[;{}<>]/g,``)}var Rr;function zr(){return(zr=e((()=>{ne(),Rr={fromAttribute:e=>{if(e===null)return;let t=e.trim();return/^-?\d+(\.\d+)?$/.test(t)?Number(t):t},toAttribute:e=>e===void 0?null:String(e)}})))()}var Br,Vr,Hr,B,V;function Ur(){return(Ur=e((()=>{D(),A(),zr(),u(),m(),Br={bg:`var(--surface-color)`,"bg.subtle":`var(--surface-subtle-color)`,"bg.muted":`var(--surface-muted-color)`,"bg.emphasis":`var(--surface-muted-color)`,"bg.canvas":`var(--canvas-color)`,"bg.elevated":`var(--surface-elevated-color)`},Vr=[`none`,`sm`,`md`,`lg`,`xl`,`2xl`,`full`],Hr=[`sm`,`md`,`lg`,`xl`],B={converter:Rr},V=class e extends T{static{this.tagName=`minerva-box`}static{this.styles=[E,f`
:host{
display: block;
}
`]}declarations(){let e=[],t=(t,...n)=>{if(t!==void 0&&t!==``)for(let r of n)e.push([r,Pe(t)])},n=(t,n)=>{t!==void 0&&t!==``&&e.push([n,ce(t)])};return t(this.p,`padding`),t(this.px,`padding-left`,`padding-right`),t(this.py,`padding-top`,`padding-bottom`),t(this.pt,`padding-top`),t(this.pr,`padding-right`),t(this.pb,`padding-bottom`),t(this.pl,`padding-left`),t(this.m,`margin`),t(this.mx,`margin-left`,`margin-right`),t(this.my,`margin-top`,`margin-bottom`),t(this.mt,`margin-top`),t(this.mr,`margin-right`),t(this.mb,`margin-bottom`),t(this.ml,`margin-left`),n(this.w,`width`),n(this.h,`height`),n(this.minW,`min-width`),n(this.minH,`min-height`),n(this.maxW,`max-width`),n(this.maxH,`max-height`),this.bg&&e.push([`background`,Br[this.bg]??this.bg]),this.rounded&&e.push([`border-radius`,Vr.includes(this.rounded)?`var(--radius-${this.rounded})`:this.rounded]),this.boxShadow&&e.push([`box-shadow`,Hr.includes(this.boxShadow)?`var(--shadow-${this.boxShadow})`:this.boxShadow]),this.border&&e.push([`border`,this.border]),e}updated(){k&&this.bg?.startsWith(`bg.`)&&!(this.bg in Br)&&C(e.tagName,`unknown surface alias bg="${this.bg}" (expected one of ${Object.keys(Br).join(`, `)}).`)}render(){let e=this.declarations().map(([e,t])=>`${e}:${Lr(t)};`).join(``);return g`<style>
:host{${e}}
</style>
<slot></slot>`}},I([d(B)],V.prototype,`p`,void 0),I([d(B)],V.prototype,`px`,void 0),I([d(B)],V.prototype,`py`,void 0),I([d(B)],V.prototype,`pt`,void 0),I([d(B)],V.prototype,`pr`,void 0),I([d(B)],V.prototype,`pb`,void 0),I([d(B)],V.prototype,`pl`,void 0),I([d(B)],V.prototype,`m`,void 0),I([d(B)],V.prototype,`mx`,void 0),I([d(B)],V.prototype,`my`,void 0),I([d(B)],V.prototype,`mt`,void 0),I([d(B)],V.prototype,`mr`,void 0),I([d(B)],V.prototype,`mb`,void 0),I([d(B)],V.prototype,`ml`,void 0),I([d(B)],V.prototype,`w`,void 0),I([d(B)],V.prototype,`h`,void 0),I([d({converter:Rr,attribute:`min-w`})],V.prototype,`minW`,void 0),I([d({converter:Rr,attribute:`min-h`})],V.prototype,`minH`,void 0),I([d({converter:Rr,attribute:`max-w`})],V.prototype,`maxW`,void 0),I([d({converter:Rr,attribute:`max-h`})],V.prototype,`maxH`,void 0),I([d()],V.prototype,`bg`,void 0),I([d()],V.prototype,`rounded`,void 0),I([d({attribute:`box-shadow`})],V.prototype,`boxShadow`,void 0),I([d()],V.prototype,`border`,void 0)})))()}var Wr,H;function Gr(){return(Gr=e((()=>{b(),D(),dn(),A(),j(),M(),kt(),u(),m(),p(),We(),Wr=e=>`borderRadius${e.charAt(0).toUpperCase()}${e.slice(1)}`,H=class e extends T{constructor(...e){super(...e),this.color=`primary`,this.variant=`solid`,this.size=`medium`,this.disabled=!1,this.loading=!1,this.fullWidth=!1,this.active=!1,this.type=`button`,this.internals=qt(this),this.aria=new x(this),this.slots=new O(this),this.blockInactiveClicks=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-button`}static{this.formAssociated=!0}static{this.styles=[E,f`
:host{
display: inline-flex;
max-width: 100%;
vertical-align: middle;
}
:host([full-width]){
display: flex;
width: 100%;
}
`,P(Gt)]}get form(){return this.internals?.form??null}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}handleClick(e){if(this.loading||this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockInactiveClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockInactiveClicks,!0)}hookStates(){return{state:this.active?`active`:`inactive`,disabled:this.disabled,loading:this.loading,size:this.size,variant:this.variant,color:this.color,shape:this.shape}}updated(){k&&this.shape===`circle`&&!this.aria.label&&(this.textContent?.trim()||C(e.tagName,`shape="circle" buttons usually only contain an icon: set aria-label to give them an accessible name.`))}render(){let e=this.borderRadius,t=typeof e==`number`||typeof e==`string`&&/^\d+(\.\d+)?$/.test(e),n=this.loading&&this.slots.test(`loading`),r=this.loading&&!n,i=g`<span
class="loadingSpinner"
part="spinner"
aria-hidden="true"
></span>`;return g`<button
part="root"
type="button"
class=${_({customButton:!0,[this.color]:!0,[`variant-${this.variant}`]:!0,[this.size]:!0,[this.shape??``]:!!this.shape,[Wr(String(e??``))]:!!e&&!t,fullWidth:this.fullWidth,active:this.active,loading:this.loading})}
style=${h(t?{borderRadius:`${Number(e)}px`}:{})}
?disabled=${this.disabled}
aria-label=${this.aria.label??l}
aria-description=${this.aria.description??l}
aria-pressed=${this.aria.attr(`aria-pressed`)??l}
aria-expanded=${this.aria.attr(`aria-expanded`)??l}
aria-haspopup=${this.aria.attr(`aria-haspopup`)??l}
aria-busy=${this.loading?`true`:l}
aria-disabled=${this.loading?`true`:l}
@click=${this.handleClick}
>
${n?g`${i}<span class="label" part="label"
><slot name="loading"></slot
></span>`:g`${this.loading?i:l}
${this.slots.test(`start`)?g`<span
class=${_({icon:!0,hidden:r})}
part="start-icon"
><slot name="start"></slot
></span>`:l}
<span class=${_({label:!0,hidden:r})} part="label"
><slot></slot
></span>
${this.slots.test(`end`)?g`<span
class=${_({icon:!0,hidden:r})}
part="end-icon"
><slot name="end"></slot
></span>`:l}`}
</button>`}},I([d({reflect:!0})],H.prototype,`color`,void 0),I([d({reflect:!0})],H.prototype,`variant`,void 0),I([d({reflect:!0})],H.prototype,`size`,void 0),I([d({reflect:!0})],H.prototype,`shape`,void 0),I([d({attribute:`border-radius`})],H.prototype,`borderRadius`,void 0),I([d({type:Boolean,reflect:!0})],H.prototype,`disabled`,void 0),I([d({type:Boolean,reflect:!0})],H.prototype,`loading`,void 0),I([d({type:Boolean,reflect:!0,attribute:`full-width`})],H.prototype,`fullWidth`,void 0),I([d({type:Boolean,reflect:!0})],H.prototype,`active`,void 0),I([d({reflect:!0})],H.prototype,`type`,void 0),I([y(`button`)],H.prototype,`button`,void 0)})))()}var Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai;function oi(){return(oi=e((()=>{b(),D(),it(),dn(),A(),M(),Ht(),Mn(),u(),m(),p(),ne(),qe(),Kr=[`div`,`article`,`section`,`a`,`button`],qr=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`],Jr=[`none`,`small`,`medium`,`large`],Yr=`minerva-card-header, minerva-card-content, minerva-card-footer, minerva-card-title, minerva-card-description`,Xr=e=>e&&Jr.includes(e)?`pad-${e}`:``,Zr=e=>{let t=e.parentElement??e.getRootNode().host;return!!(t?Gn(t,`minerva-card`):null)?.hasAttribute(`padding`)},Qr=class e extends T{constructor(...e){super(...e),this.variant=`default`,this.interactive=!1,this.as=`div`,this.disabled=!1,this.type=`button`,this.internals=qt(this),this.aria=new x(this),this.syncParts=()=>{for(let e of Array.from(this.querySelectorAll(Yr)))e.requestUpdate()},this.blockDisabledClicks=e=>{this.tag===`button`&&this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-card`}static{this.formAssociated=!0}static{this.styles=[E,f`
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
`,P(Wt)]}get tag(){return Kr.includes(this.as)?this.as:`div`}focus(e){this.tag===`a`||this.tag===`button`?this.root?.focus(e):super.focus(e)}handleClick(e){if(this.tag!==`button`)return;if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.internals?.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockDisabledClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockDisabledClicks,!0)}hookStates(){return{variant:this.variant,disabled:this.tag===`button`&&this.disabled}}updated(t){t.has(`padding`)&&this.syncParts(),k&&(this.as&&!Kr.includes(this.as)&&C(e.tagName,`unsupported as="${this.as}" (expected ${Kr.join(`, `)}); rendering a div.`),this.tag===`a`&&!this.href&&C(e.tagName,`as="a" needs an href to be a link (focusable, activatable with Enter).`),this.interactive&&this.tag!==`a`&&this.tag!==`button`&&C(e.tagName,`interactive cards should be links or buttons (as="a" with href, or as="button") so keyboard users can activate them.`))}render(){let t=this.tag,n=_({card:!0,[this.variant]:!0,padded:!!this.padding,[Xr(this.padding)]:!!Xr(this.padding),interactive:this.interactive}),r=this.aria.label??l,i=Ye`<slot @slotchange=${this.syncParts}></slot>`;if(t===`a`)return Ye`<a
part="root"
class=${n}
href=${yt(e.tagName,this.href)??l}
target=${this.target??l}
rel=${te(this.target,this.rel)??l}
download=${this.download??l}
aria-label=${r}
>${i}</a
>`;if(t===`button`)return Ye`<button
part="root"
class=${n}
type="button"
?disabled=${this.disabled}
aria-label=${r}
aria-pressed=${this.aria.attr(`aria-pressed`)??l}
aria-expanded=${this.aria.attr(`aria-expanded`)??l}
@click=${this.handleClick}
>
${i}
</button>`;let a=Ue(t);return Ye`<${a} part="root" class=${n}>${i}</${a}>`}},I([d({reflect:!0})],Qr.prototype,`variant`,void 0),I([d({reflect:!0})],Qr.prototype,`padding`,void 0),I([d({type:Boolean,reflect:!0})],Qr.prototype,`interactive`,void 0),I([d({reflect:!0})],Qr.prototype,`as`,void 0),I([d()],Qr.prototype,`href`,void 0),I([d()],Qr.prototype,`target`,void 0),I([d()],Qr.prototype,`rel`,void 0),I([d()],Qr.prototype,`download`,void 0),I([d({type:Boolean,reflect:!0})],Qr.prototype,`disabled`,void 0),I([d()],Qr.prototype,`type`,void 0),I([y(`[part=root]`)],Qr.prototype,`root`,void 0),$r=f`
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
`,ei=class extends T{constructor(...e){super(...e),this.sectionClass=``}static{this.styles=[E,$r]}layoutClasses(){let e=this.previousElementSibling?.localName,t=Xr(this.padding);return{[this.sectionClass]:!0,padded:Zr(this),afterHeader:e===`minerva-card-header`,afterContent:e===`minerva-card-content`,[t]:!!t}}render(){return Ye`<div part="root" class=${_(this.layoutClasses())}>
<slot></slot>
</div>`}},I([d({reflect:!0})],ei.prototype,`padding`,void 0),ti=class extends ei{constructor(...e){super(...e),this.sectionClass=`cardHeader`}static{this.tagName=`minerva-card-header`}},ni=class extends ei{constructor(...e){super(...e),this.sectionClass=`cardContent`}static{this.tagName=`minerva-card-content`}static{this.styles=[E,$r,f`
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
`]}layoutClasses(){let e=super.layoutClasses();return this.animation&&(e[this.animation]=!0),e}},I([d({reflect:!0})],ni.prototype,`animation`,void 0),ri=class extends ei{constructor(...e){super(...e),this.sectionClass=`cardFooter`}static{this.tagName=`minerva-card-footer`}},ii=class extends T{constructor(...e){super(...e),this.as=`h3`}static{this.tagName=`minerva-card-title`}static{this.styles=[E,f`
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
`]}render(){let e=Ue(qr.includes(this.as)?this.as:`h3`);return Ye`<${e}
part="root"
class=${_({cardTitle:!0,padded:Zr(this)})}
><slot></slot></${e}>`}},I([d({reflect:!0})],ii.prototype,`as`,void 0),ai=class extends T{static{this.tagName=`minerva-card-description`}static{this.styles=[E,f`
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
`]}render(){return Ye`<p
part="root"
class=${_({cardDescription:!0,padded:Zr(this)})}
>
<slot></slot>
</p>`}}})))()}var si,ci,li,ui,di,U;function fi(){return(fi=e((()=>{b(),D(),S(),F(),Sn(),A(),M(),cr(),Bn(),xt(),u(),m(),p(),se(),ne(),Ve(),si=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),ci=e=>{let t=new Set;for(let n of e){if(t.has(n.value))return n.value;t.add(n.value);let e=n.children?ci(n.children):void 0;if(e!==void 0)return e}},li={fromAttribute(e){let t=e?.trim()??``;if(!t)return[];if(t.startsWith(`[`))try{let e=JSON.parse(t);if(Array.isArray(e))return e.filter(e=>typeof e==`string`||typeof e==`number`)}catch{}return t.split(`,`).map(e=>e.trim())},toAttribute(e){return JSON.stringify(e)}},ui=`[role="option"]:not([aria-disabled="true"])`,di=0,U=class e extends yn{constructor(...e){super(...e),this.options=[],this.value=[],this.defaultValue=[],this.open=!1,this.label=``,this.invalid=!1,this.readOnly=!1,this.hideClearButton=!1,this.expandTrigger=`click`,this.showSearch=!1,this.maxLevel=6,this.width=240,this.expandedValues=[],this.searchValue=``,this.idPrefix=`minerva-cascader-${di++}`,this.locale=new w(this),this.aria=new x(this,()=>this.labels),this.floating=new ir(this,()=>({anchor:()=>this.anchor,floating:()=>this.dropdown,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,branches:()=>[this.anchor],onDismiss:()=>this.closeDropdown(),returnFocusOnEscape:()=>this.input,focusable:!0,onPosition:()=>this.syncHookStates()})),this.pendingFocus=null,this.dirty=!1,this.widthApplied=!1}static{this.tagName=`minerva-cascader`}static{this.shadowRootOptions={...yn.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[E,er,f`
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
`,P(pt)]}get selectedOptions(){return le(this.options,this.value)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}show(){this.open=!0}hide(){this.open=!1}get displayText(){let e=this.selectedOptions,t=e.map(e=>String(e.label));return this.displayRender?this.displayRender(t,e):t.join(` / `)}getFormValue(){return this.displayText}syncFormState(){super.syncFormState(),this.internals&&!this.isDisabled&&this.internals.setFormValue(this.getFormValue(),JSON.stringify(this.value))}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.selectMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=[...this.defaultValue],this.open=!1}restoreFormState(e){if(typeof e==`string`)try{let t=JSON.parse(e);Array.isArray(t)&&(this.value=t)}catch{}}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=!si(this.value,this.defaultValue)||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=[...this.defaultValue]),e.has(`open`)&&(this.open?this.expandedValues=[...this.value]:(this.searchValue=``,this.pendingFocus=null)),k&&this.checkDev(e)}checkDev(t){if(t.has(`options`)){let t=ci(this.options);t!==void 0&&C(e.tagName,`duplicate option value "${t}" among siblings: values must be unique within a level.`)}(t.has(`options`)||t.has(`value`))&&this.options.length>0&&this.value.length>0&&le(this.options,this.value).length<this.value.length&&C(e.tagName,`value ${JSON.stringify(this.value)} is not a path of the options tree: it is shown partially (or not at all).`)}hookStates(){let e=this.open&&!this.isDisabled,t=e&&this.floating.isOpen?this.floating.position.placement:void 0,{side:n,align:r}=t?De(t):{side:void 0,align:void 0};return{state:e?`open`:`closed`,disabled:this.isDisabled,readonly:this.readOnly,invalid:this.invalid,side:n,align:r,placement:t}}updated(e){if(super.updated(e),e.has(`width`)){let e=this.width,t=e===void 0||e===``?``:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,n=t!==``&&t!==`240px`;(n||this.widthApplied)&&(this.style.width=n?t:``),this.widthApplied=n}this.floating.sync(this.open&&!this.isDisabled);let t=this.pendingFocus;if(t!==null&&this.open){let e=t===-1?this.columns().length-1:t;this.focusColumn(e)&&(this.pendingFocus=null)}}requestOpen(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}openDropdown(e=!1){this.isDisabled||this.readOnly||this.requestOpen(!0)&&(this.expandedValues=[...this.value],this.pendingFocus=e?-1:null)}closeDropdown(e=!1){this.requestOpen(!1)&&(this.searchValue=``,e&&this.input?.focus())}select(e){this.value=e.map(e=>e.value),this.emitChange(e),this.closeDropdown(!0)}emitChange(e){this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:[...this.value],selectedOptions:e})}handleActivate(e,t){let n=e[e.length-1];if(n.disabled)return;let r=t>=this.maxLevel-1,i=!!n.children?.length,a=!!this.loadData&&!n.isLeaf&&!n.children;if(!r&&(i||a)){this.expandedValues=e.map(e=>e.value),a&&!n.loading&&this.loadData?.(e);return}this.select(e)}clear(e){e.stopPropagation(),this.value=[],this.searchValue=``,this.emitChange([]),this.emit(`minerva-clear`),this.input?.focus()}get expandedPath(){return le(this.options,this.expandedValues)}columns(){let e=this.expandedPath,t=[this.options];for(let n=0;n<e.length&&n<this.maxLevel-1;n+=1){let r=e[n].children;if(!r?.length)break;t.push(r)}return t}columnId(e){return`${this.idPrefix}-column-${e}`}focusColumn(e){let t=this.dropdown?.querySelector(`[data-level="${e}"]`);if(!t)return!1;let n=t.querySelector(`[data-expanded]`)??t.querySelector(`[data-selected]`)??t.querySelector(ui);return n?.focus(),!!n}canExpand(e,t){return t<this.maxLevel-1&&(!!e.children?.length||!e.isLeaf&&e.children===void 0)}pathTo(e,t){return[...this.expandedPath.slice(0,t),e]}get searching(){return this.showSearch&&this.searchValue!==``}searchResults(){if(!this.searching)return[];let{searchValue:e,filter:t}=this,n=e.toLowerCase();return ie(this.options).filter(({path:r})=>t?t(e,r):r.some(e=>String(e.label).toLowerCase().includes(n)))}focusFirstSearchResult(){this.dropdown?.querySelector(`[role="option"]`)?.focus()}handleSelectorClick(){this.isDisabled||this.readOnly||(this.open?this.showSearch||this.closeDropdown():this.openDropdown())}handleInput(e){let t=e.target.value;this.showSearch&&!this.readOnly&&(this.searchValue=t,this.emit(`minerva-input`,{value:t}),this.open||this.openDropdown())}handleInputKeyDown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this.open?this.searching?this.focusFirstSearchResult():(this.pendingFocus=-1,this.requestUpdate()):this.openDropdown(!0);break;case`Enter`:e.preventDefault(),this.open||this.openDropdown(!0);break;case` `:if(this.showSearch)break;e.preventDefault(),this.open||this.openDropdown(!0)}}handleFocusOut(e){let t=e.relatedTarget;this.open&&t&&(this.anchor&&c(this.anchor,t)||this.dropdown&&c(this.dropdown,t)||this.closeDropdown())}handleDropdownMouseDown(e){e.target.closest?.(`[role="option"]`)||e.preventDefault()}handleDropdownKeyDown(e){e.key===`Tab`&&this.closeDropdown()}handleOptionKeyDown(e,t,n){let r=e.currentTarget,i=Array.from(r.parentElement?.querySelectorAll(ui)??[]),a=i.indexOf(r),o=e=>i[(e+i.length)%i.length]?.focus();switch(Fe(e.key,this)){case`ArrowDown`:e.preventDefault(),o(a+1);break;case`ArrowUp`:e.preventDefault(),o(a-1);break;case`Home`:e.preventDefault(),o(0);break;case`End`:e.preventDefault(),o(i.length-1);break;case`ArrowRight`:if(e.preventDefault(),t.disabled||!this.canExpand(t,n))break;this.pendingFocus=n+1,this.handleActivate(this.pathTo(t,n),n),this.requestUpdate();break;case`Enter`:case` `:if(e.preventDefault(),t.disabled)break;this.canExpand(t,n)&&(this.pendingFocus=n+1),this.handleActivate(this.pathTo(t,n),n),this.requestUpdate();break;case`ArrowLeft`:e.preventDefault(),n===0?this.closeDropdown(!0):this.focusColumn(n-1)}}handleSearchKeyDown(e){let t=e.currentTarget,n=Array.from(t.querySelectorAll(`[role="option"]`)),r=n.indexOf(e.target);(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),n[(r+(e.key===`ArrowDown`?1:-1)+n.length)%n.length]?.focus())}renderSearchResults(){let e=this.searchResults();return g`<div
class="searchResults"
role="listbox"
aria-label=${this.label||this.aria.label||l}
tabindex="-1"
@keydown=${this.handleSearchKeyDown}
>
${e.length>0?e.map(({path:e})=>g`<div
class="searchOption"
part="item"
role="option"
aria-selected="false"
tabindex="0"
@keydown=${t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),this.select(e))}}
@click=${()=>this.select(e)}
>
${e.map(e=>e.label).join(` / `)}
</div>`):g`<div class="empty" role="status">
${this.locale.t(`cascader.noResults`)}
</div>`}
</div>`}renderPanel(){let{t:e}=this.locale,t=this.columns(),n=this.expandedPath,r=this.selectedOptions,i=this.label||this.aria.label||e(`cascader.options`);return g`<div class="panel">
${t.map((a,o)=>g`<ul
id=${this.columnId(o)}
data-level=${o}
class="column"
part="column"
role="listbox"
aria-label=${e(`cascader.level`,{label:i,level:o+1})}
>
${a.map(e=>{let i=n[o]?.value===e.value,a=r[o]?.value===e.value,s=this.canExpand(e,o)&&!(!e.children?.length&&e.isLeaf),ee=i&&!(a&&o===r.length-1);return g`<li
?data-expanded=${ee}
?data-selected=${a}
class=${_({option:!0,active:i||a,disabled:!!e.disabled,loading:!!e.loading})}
part=${mn(`item`,{selected:a,expanded:ee,disabled:e.disabled,loading:e.loading})}
role="option"
aria-selected=${a?`true`:`false`}
aria-disabled=${e.disabled?`true`:l}
aria-busy=${e.loading?`true`:l}
aria-controls=${i&&o+1<t.length?this.columnId(o+1):l}
tabindex=${e.disabled?-1:0}
@keydown=${t=>this.handleOptionKeyDown(t,e,o)}
@click=${()=>{e.disabled||this.handleActivate(this.pathTo(e,o),o)}}
@mouseenter=${()=>{this.expandTrigger===`hover`&&!e.disabled&&e.children?.length&&o<this.maxLevel-1&&(this.expandedValues=this.pathTo(e,o).map(e=>e.value))}}
>
${this.optionRender?this.optionRender(e,o):g`<span class="label">${e.label}</span>${e.loading?g`<span
class="loadingIndicator"
aria-hidden="true"
>...</span
>`:s?g`<span class="expandIcon" aria-hidden="true"
>${nt}</span
>`:l}`}
</li>`})}
</ul>`)}
</div>`}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.open&&!t,r=!this.hideClearButton&&this.value.length>0&&!t&&!this.readOnly,i=this.searching?this.searchValue:this.displayText,a=this.invalid||this.aria.attr(`aria-invalid`)===`true`;return g`<div
class="cascader"
part="root"
@focusout=${this.handleFocusOut}
>
<div
class=${_({selector:!0,disabled:t,focused:n})}
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
aria-autocomplete=${this.showSearch?`list`:l}
aria-label=${this.aria.label??(this.label||l)}
aria-description=${this.aria.description??l}
aria-invalid=${a?`true`:l}
aria-required=${this.required?`true`:l}
aria-readonly=${this.showSearch&&this.readOnly?`true`:l}
name=${this.name||l}
.value=${Ke(i)}
?readonly=${!this.showSearch||this.readOnly}
?disabled=${t}
?required=${this.required}
autocomplete="off"
placeholder=${this.placeholder??e(`cascader.placeholder`)}
@input=${this.handleInput}
@keydown=${this.handleInputKeyDown}
/>
</div>
${r?g`<button
type="button"
class="clearIcon"
part="clear-button"
aria-label=${e(`cascader.clear`)}
@click=${this.clear}
>
<span class="icon" aria-hidden="true">${Vt}</span>
</button>`:l}
<span
class=${_({arrow:!0,open:n})}
part="icon"
aria-hidden="true"
><span class="icon">${Xn}</span></span
>
</div>
</div>
${n?g`<div
class="dropdown"
part="content"
popover="manual"
@mousedown=${this.handleDropdownMouseDown}
@focusout=${this.handleFocusOut}
@keydown=${this.handleDropdownKeyDown}
>
${this.searching?this.renderSearchResults():this.renderPanel()}
</div>`:l}`}},I([d({attribute:!1})],U.prototype,`options`,void 0),I([d({attribute:!1})],U.prototype,`value`,void 0),I([d({attribute:`value`,converter:li})],U.prototype,`defaultValue`,void 0),I([d({type:Boolean,reflect:!0})],U.prototype,`open`,void 0),I([d()],U.prototype,`label`,void 0),I([d()],U.prototype,`placeholder`,void 0),I([d({type:Boolean,reflect:!0})],U.prototype,`invalid`,void 0),I([d({type:Boolean,reflect:!0,attribute:`readonly`})],U.prototype,`readOnly`,void 0),I([d({type:Boolean,attribute:`hide-clear-button`})],U.prototype,`hideClearButton`,void 0),I([d({attribute:`expand-trigger`,reflect:!0})],U.prototype,`expandTrigger`,void 0),I([d({type:Boolean,attribute:`show-search`,reflect:!0})],U.prototype,`showSearch`,void 0),I([d({type:Number,attribute:`max-level`})],U.prototype,`maxLevel`,void 0),I([d()],U.prototype,`width`,void 0),I([d({attribute:!1})],U.prototype,`displayRender`,void 0),I([d({attribute:!1})],U.prototype,`filter`,void 0),I([d({attribute:!1})],U.prototype,`loadData`,void 0),I([d({attribute:!1})],U.prototype,`optionRender`,void 0),I([v()],U.prototype,`expandedValues`,void 0),I([v()],U.prototype,`searchValue`,void 0),I([y(`input`)],U.prototype,`input`,void 0),I([y(`.cascader`)],U.prototype,`anchor`,void 0),I([y(`.dropdown`)],U.prototype,`dropdown`,void 0)})))()}var pi,W;function mi(){return(mi=e((()=>{b(),D(),S(),F(),A(),j(),M(),Bn(),Bt(),u(),m(),p(),Ve(),pi=e=>e.charAt(0).toUpperCase()+e.slice(1),W=class e extends yn{constructor(...e){super(...e),this.checked=!1,this.defaultChecked=!1,this.indeterminate=!1,this.value=`on`,this.label=``,this.shape=`square`,this.size=`medium`,this.color=`primary`,this.labelPlacement=`end`,this.error=!1,this.helperText=``,this.readOnly=!1,this.locale=new w(this),this.aria=new x(this,()=>this.labels),this.slots=new O(this),this.dirty=!1}static{this.tagName=`minerva-checkbox`}static{this.shadowRootOptions={...yn.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[E,f`
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
`,P(Lt)]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}click(){this.input?.click()}getFormValue(){return this.checked?this.value:null}getValidity(){return this.required&&!this.checked?{flags:{valueMissing:!0},message:this.locale.t(`validation.checkMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.checked=this.defaultChecked}restoreFormState(e){this.checked=e!=null&&e!==``}willUpdate(e){e.has(`defaultChecked`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`checked`))&&(this.checked=this.defaultChecked)}updated(t){super.updated(t),this.input&&(this.input.indeterminate=this.indeterminate),k&&!this.aria.label&&!this.label&&!this.textContent?.trim()&&C(e.tagName,`no label: set the label attribute, slot a label, or use aria-label / <label for>.`)}handleClick(e){this.readOnly&&e.preventDefault()}handleChange(){this.readOnly||(this.dirty=!0,this.input.indeterminate=this.indeterminate,this.checked=this.input.checked,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{checked:this.checked,value:this.value}))}hookStates(){return{state:this.indeterminate?`indeterminate`:this.checked?`checked`:`unchecked`,disabled:this.isDisabled,invalid:this.error||this.aria.attr(`aria-invalid`)===`true`,readonly:this.readOnly,required:this.required,size:this.size,color:this.color,shape:this.shape}}render(){let e=this.isDisabled,t=!!this.label||this.slots.test(`[default]`),n=[this.helperText,this.aria.description].filter(Boolean).join(` `),r=this.error||this.aria.attr(`aria-invalid`)===`true`;return g`<div
part="root"
class=${_({checkboxWrapper:!0,error:r})}
>
<label
class=${_({checkbox:!0,[this.size]:!0,[this.shape]:!0,[`label${pi(this.labelPlacement)}`]:!0,[`color${pi(this.color)}`]:this.color!==`primary`,disabled:e,error:r})}
>
<input
part="input"
type="checkbox"
class="input"
.checked=${Ke(this.checked)}
?disabled=${e}
?required=${this.required}
aria-checked=${this.indeterminate?`mixed`:l}
aria-label=${this.aria.label??l}
aria-description=${n||l}
aria-invalid=${r?`true`:l}
aria-readonly=${this.readOnly?`true`:l}
@click=${this.handleClick}
@change=${this.handleChange}
/>
<span class="checkmark" part="control"
>${this.checked&&!this.indeterminate?g`<slot name="icon"></slot>`:l}</span
>
${t?g`<span class="label" part="label"
>${this.label||g`<slot></slot>`}</span
>`:l}
</label>
${this.helperText?g`<div class="helperTextWrapper">
${r?g`<span class="errorIcon" aria-hidden="true"
>${wt}</span
>`:l}
<span
part="helper-text"
class=${_({helperText:!0,errorText:r})}
>${this.helperText}</span
>
</div>`:l}
</div>`}},I([d({attribute:!1})],W.prototype,`checked`,void 0),I([d({type:Boolean,attribute:`checked`,reflect:!0})],W.prototype,`defaultChecked`,void 0),I([d({type:Boolean,reflect:!0})],W.prototype,`indeterminate`,void 0),I([d()],W.prototype,`value`,void 0),I([d()],W.prototype,`label`,void 0),I([d({reflect:!0})],W.prototype,`shape`,void 0),I([d({reflect:!0})],W.prototype,`size`,void 0),I([d({reflect:!0})],W.prototype,`color`,void 0),I([d({attribute:`label-placement`,reflect:!0})],W.prototype,`labelPlacement`,void 0),I([d({type:Boolean,reflect:!0})],W.prototype,`error`,void 0),I([d({attribute:`helper-text`})],W.prototype,`helperText`,void 0),I([d({type:Boolean,reflect:!0,attribute:`readonly`})],W.prototype,`readOnly`,void 0),I([y(`input`)],W.prototype,`input`,void 0)})))()}var hi,gi,_i;function vi(){return(vi=e((()=>{b(),D(),S(),F(),A(),j(),M(),kn(),ht(),u(),m(),p(),We(),hi=2e3,gi=e=>e===void 0||e===``?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,_i=class e extends T{constructor(...e){super(...e),this.noWrap=!1,this.maxHeight=`24rem`,this.copyable=!1,this.status=`idle`,this.locale=new w(this),this.aria=new x(this),this.slots=new O(this)}static{this.tagName=`minerva-code-block`}static{this.styles=[E,f`
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
`,P(cn),P(Rt)]}get text(){return this.code??this.textContent??``}async copy(){let e=this.text,t=typeof navigator>`u`?void 0:navigator.clipboard,n=!1;if(typeof t?.writeText==`function`)try{await t.writeText(e),n=!0}catch{n=!1}return this.isConnected?(this.showStatus(n?`copied`:`failed`),this.emit(`minerva-copy`,{text:e,success:n}),n):n}showStatus(e){clearTimeout(this.timer),this.status=e,this.timer=setTimeout(()=>this.status=`idle`,hi)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timer),this.status=`idle`}updated(){k&&this.copyable&&!this.text.trim()&&C(e.tagName,`copyable is set but there is no text to copy (set code or the text content).`)}render(){this.slots;let e=this.locale.t,t=this.aria.label??e(`codeBlock.label`),n=gi(this.maxHeight),r=this.copyable||!!this.language,i=g`<pre
      part="region"
      role="region"
      tabindex="0"
      aria-label=${t}
      aria-description=${this.aria.description??l}
      data-wrap=${String(!this.noWrap)}
      class=${_({codeBlock:!0,copyable:r})}
      style=${h(r?{}:{maxHeight:n})}
    ><code
        part="code"
        class=${this.language?`language-${this.language}`:l}
        data-language=${this.language??l}
      >${this.text}</code></pre>`;if(!r)return i;let a=this.status,o=a===`copied`?e(`codeBlock.copied`):a===`failed`?e(`codeBlock.copyFailed`):``,s=o||e(`codeBlock.copy`),ee=a===`failed`?`danger`:a===`copied`?`success`:`neutral`;return g`<div part="root" class="root" style=${h({maxHeight:n})}>
${i}
<div class="actions">
${this.language?g`<span part="language" class="language" aria-hidden="true"
>${this.language}</span
>`:l}
${this.copyable?g`<button
type="button"
part="copy-button"
class="iconButton ${ee} variant-ghost small square"
aria-label=${s}
title=${s}
@click=${()=>void this.copy()}
>
${a===`copied`?mt:a===`failed`?Vt:dt}
</button>`:l}
</div>
${this.copyable?g`<span class="visuallyHidden" aria-live="polite"
>${o}</span
>`:l}
</div>`}},I([d()],_i.prototype,`code`,void 0),I([d({reflect:!0})],_i.prototype,`language`,void 0),I([d({type:Boolean,attribute:`no-wrap`,reflect:!0})],_i.prototype,`noWrap`,void 0),I([d({attribute:`max-height`})],_i.prototype,`maxHeight`,void 0),I([d({type:Boolean,reflect:!0})],_i.prototype,`copyable`,void 0),I([v()],_i.prototype,`status`,void 0)})))()}var yi,G;function bi(){return(bi=e((()=>{D(),it(),F(),Sn(),A(),M(),nr(),tr(),cr(),sr(),rt(),jt(),ft(),u(),m(),se(),ne(),Ve(),yi={fromAttribute:e=>e===null?void 0:e.split(`,`).map(e=>e.trim()).filter(Boolean),toAttribute:e=>Array.isArray(e)?e.join(`, `):e},G=class e extends T{constructor(...e){super(...e),this.open=!1,this.items=[],this.maxResults=12,this.query=``,this.activeIndex=0,this.locale=new w(this),this.presence=new _t(this,()=>this.panel),this.modal=new $n(this),this.focusScope=new or(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new Qn(this,()=>({disableOutsidePointerEvents:!0,onFocusOutside:()=>!1,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleShortcut=e=>{let t=Oe(this.shortcut);if(t.length===0)return;let n=e.composedPath()[0]??e.target;Te(n)&&!e.ctrlKey&&!e.metaKey&&!e.altKey||e.isComposing||t.some(t=>fe(e,t))&&(e.preventDefault(),e.stopPropagation(),this.requestOpenChange(!0,`shortcut`))}}static{this.tagName=`minerva-command-dialog`}static{this.styles=[E,er,f`
:host{
display: contents;
}
`,P(Zn),P(Ct)]}show(){this.open=!0}hide(){this.open=!1}get results(){let e=Math.max(0,this.maxResults),t=(Array.isArray(this.items)?this.items:[]).filter(e=>!e.disabled),n=this.query.trim();if(!n)return t.slice(0,e);if(typeof this.filter==`function`)return this.filter(t,n).slice(0,e);let r=oe(n);return t.filter(e=>oe(be(e)).includes(r)).slice(0,e)}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}select(e){this.emit(`minerva-select`,{value:e.id,item:e}),this.requestOpenChange(!1,`select`)}handleKeyDown(e){let t=this.results,n=Math.max(t.length-1,0),r={ArrowDown:e=>Math.min(e+1,n),ArrowUp:e=>Math.max(e-1,0),Home:()=>0,End:()=>n}[e.key];if(r&&(e.key.startsWith(`Arrow`)||!this.query)){e.preventDefault(),this.activeIndex=r(Math.min(this.activeIndex,n));return}let i=t[this.activeIndex];e.key===`Enter`&&i&&!e.isComposing&&(e.preventDefault(),this.select(i))}handleInput(e){this.query=e.target.value,this.activeIndex=0}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this.handleShortcut,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleShortcut,!0),N(this.panel),N(this.overlay)}willUpdate(e){e.has(`open`)&&(this.presence.sync(this.open),this.open&&(this.query=``,this.activeIndex=0)),e.has(`items`)&&k&&this.checkItems();let t=this.results.length;this.activeIndex>0&&this.activeIndex>=t&&(this.activeIndex=Math.max(t-1,0))}checkItems(){if(!Array.isArray(this.items)){C(e.tagName,"`items` must be an array of { id, title, ... } objects.");return}let t=new Set;for(let n of this.items)t.has(n.id)&&C(e.tagName,`duplicate item id "${n.id}": ids identify the chosen command in minerva-select and must be unique.`),t.add(n.id)}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)){let e=this.panel;this.open&&e?(Mt(this.overlay),Mt(e),this.modal.activate(this),this.layer.activate(e),this.focusScope.activate(e),this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.open&&(e.has(`activeIndex`)||e.has(`query`))&&this.renderRoot.querySelector(`#option-${this.activeIndex}`)?.scrollIntoView?.({block:`nearest`}),this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}hookStates(){return{state:this.open?`open`:`closed`}}afterClose(){N(this.panel),N(this.overlay),this.emit(`minerva-after-close`)}render(){if(!(this.open||this.presence.present))return l;let e=this.locale.t,t=this.open?`open`:`closed`,n=this.results,r=n[this.activeIndex]?`option-${this.activeIndex}`:void 0,i=this.placeholder??e(`command.placeholder`);return g`<div
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
${this.shortcutLabel?g`<kbd class="kbd">${this.shortcutLabel}</kbd>`:l}
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
aria-activedescendant=${r??l}
autocomplete="off"
spellcheck="false"
placeholder=${i}
.value=${Ke(this.query)}
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
${n.length===0?g`<div class="empty" part="empty">
${this.emptyText??e(`command.empty`)}
</div>`:n.map((e,t)=>{let n=t===this.activeIndex;return g`<button
id=${`option-${t}`}
part=${mn(`item`,{highlighted:n})}
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
><strong>${e.title}</strong>${e.description?g`<small>${e.description}</small>`:l}</span
>${e.group?g`<span class="group">${e.group}</span>`:l}
</button>`})}
</div>
</div>`}},I([d({type:Boolean,reflect:!0})],G.prototype,`open`,void 0),I([d({attribute:!1})],G.prototype,`items`,void 0),I([d()],G.prototype,`label`,void 0),I([d()],G.prototype,`description`,void 0),I([d()],G.prototype,`placeholder`,void 0),I([d({attribute:`empty-text`})],G.prototype,`emptyText`,void 0),I([d({attribute:`shortcut-label`})],G.prototype,`shortcutLabel`,void 0),I([d({converter:yi})],G.prototype,`shortcut`,void 0),I([d({type:Number,attribute:`max-results`})],G.prototype,`maxResults`,void 0),I([d({attribute:!1})],G.prototype,`filter`,void 0),I([d({attribute:`results-label`})],G.prototype,`resultsLabel`,void 0),I([d({attribute:`enter-label`})],G.prototype,`enterLabel`,void 0),I([v()],G.prototype,`query`,void 0),I([v()],G.prototype,`activeIndex`,void 0),I([y(`.content`)],G.prototype,`panel`,void 0),I([y(`.overlay`)],G.prototype,`overlay`,void 0)})))()}var xi,Si,Ci;function wi(){return(wi=e((()=>{A(),u(),m(),se(),ne(),xi=`(prefers-color-scheme: dark)`,Si=`data-minerva-theme-scope`,Ci=class extends T{constructor(...e){super(...e),this.root=!1,this.media=null,this.mode=null,this.onSchemeChange=()=>this.apply()}static{this.tagName=`minerva-config`}static{this.styles=f`
:host{
display: contents;
}
`}get resolvedMode(){return this.mode}connectedCallback(){super.connectedCallback(),typeof window<`u`&&window.matchMedia&&(this.media=window.matchMedia(xi),this.media.addEventListener(`change`,this.onSchemeChange))}disconnectedCallback(){super.disconnectedCallback(),this.media?.removeEventListener(`change`,this.onSchemeChange),this.media=null,this.root&&this.clear(document.documentElement)}updated(e){e.has(`root`)&&e.get(`root`)!==void 0&&this.clear(e.get(`root`)?document.documentElement:this),this.apply()}target(){return this.root?document.documentElement:this}clear(e){for(let t of[`data-theme`,`data-palette`,Si,`lang`])(e!==this||t!==`lang`)&&e.removeAttribute(t);ge(e,null),he(e.style,{}),e.style.removeProperty(`color-scheme`)}apply(){let e=this.target(),t=(t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},n=this.theme,r=this.media?.matches?`dark`:`light`,i=n===`system`?r:n===`github-dark`?`dark`:n===`light`||n===`dark`?n:null,o=Le(this.design)?this.design:void 0,s=a(this.palette)?this.palette:Se(o),te=!!s&&n!==`github-dark`;t(`data-theme`,i),t(`data-palette`,te?s:null),this.root||t(Si,i!==null||te||o!==void 0||[this.density,this.radius,this.shadow,this.fontScale].some(Boolean)?``:null),i?e.style.colorScheme=i:e.style.removeProperty(`color-scheme`),he(e.style,n===`github-dark`&&Ee(n)?_e[n]:{}),ge(e,{preset:o,density:je(this.density)?this.density:void 0,radius:ye(this.radius)?this.radius:void 0,shadow:ee(this.shadow)?this.shadow:void 0,fontScale:de(this.fontScale)?this.fontScale:void 0},{all:!this.root&&o!==void 0}),this.root&&this.locale&&(document.documentElement.lang=this.locale),i!==this.mode&&(this.mode=i,i&&this.emit(`minerva-theme-change`,{mode:i}))}render(){return g`<slot></slot>`}},I([d({reflect:!0})],Ci.prototype,`theme`,void 0),I([d({reflect:!0})],Ci.prototype,`palette`,void 0),I([d({reflect:!0})],Ci.prototype,`design`,void 0),I([d({reflect:!0})],Ci.prototype,`density`,void 0),I([d({reflect:!0})],Ci.prototype,`radius`,void 0),I([d({reflect:!0})],Ci.prototype,`shadow`,void 0),I([d({reflect:!0,attribute:`font-scale`})],Ci.prototype,`fontScale`,void 0),I([d({reflect:!0})],Ci.prototype,`locale`,void 0),I([d({type:Boolean,reflect:!0})],Ci.prototype,`root`,void 0)})))()}var K;function Ti(){return(Ti=e((()=>{b(),D(),S(),it(),F(),A(),j(),M(),nr(),tr(),cr(),sr(),Gr(),rt(),ft(),u(),m(),K=class e extends T{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.color=`primary`,this.loading=!1,this.confirmDisabled=!1,this.busy=!1,this.locale=new w(this),this.aria=new x(this),this.slots=new O(this),this.presence=new _t(this,()=>this.panel),this.modal=new $n(this),this.focusScope=new or(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new Qn(this,()=>({disableOutsidePointerEvents:!0,onFocusOutside:()=>!1,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestClose(this.reason)})),this.reason=`outside`,this.wasPresent=!1}static{this.tagName=`minerva-confirm-dialog`}static{this.dependencies=[H]}static{this.styles=[E,er,f`
:host{
display: contents;
}
.content .body{
flex: 1 1 auto;
}
`,P(Zn)]}show(){this.open=!0}hide(){this.open=!1}requestClose(e){return!this.open||!this.emit(`minerva-open-change`,{open:!1,reason:e},{cancelable:!0})?!1:(this.open=!1,e!==`confirm`&&this.emit(`minerva-cancel`,{reason:e}),!0)}async handleConfirm(){if(!this.open||this.loading||this.busy||this.confirmDisabled||!this.emit(`minerva-confirm`,void 0,{cancelable:!0}))return;let e=this.onConfirm?.();if(e&&typeof e.then==`function`){this.busy=!0;try{await e}catch{return}finally{this.busy=!1}}this.requestClose(`confirm`)}willUpdate(e){e.has(`open`)&&this.presence.sync(this.open)}hookStates(){return{state:this.open?`open`:`closed`,color:this.color,loading:this.loading||this.busy}}updated(t){let n=this.open||this.presence.present;if(t.has(`open`)){let t=this.panel;this.open&&t?(k&&!this.label&&!this.slots.test(`header`)&&!this.aria.label&&C(e.tagName,"set `label` (or the `header` slot / aria-label) to give the alertdialog an accessible name."),Mt(this.overlay),Mt(t),this.modal.activate(this),this.layer.activate(t),this.focusInitial(t)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!n&&this.afterClose(),this.wasPresent=n}async focusInitial(e){let t=Array.from(e.querySelectorAll(`minerva-button`));await Promise.all(t.map(e=>e.updateComplete)),this.open&&this.panel===e&&(this.focusScope.activate(e),this.emit(`minerva-after-open`))}disconnectedCallback(){super.disconnectedCallback(),N(this.panel),N(this.overlay)}afterClose(){N(this.panel),N(this.overlay),this.emit(`minerva-after-close`)}render(){if(!(this.open||this.presence.present))return l;let e=this.open?`open`:`closed`,t=this.locale.t,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description,i=this.loading||this.busy;return g`<div
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
aria-labelledby=${n?`title`:l}
aria-label=${n?l:this.aria.label??l}
aria-describedby=${r?`description`:l}
tabindex="-1"
data-state=${e}
>
${r?g`<p id="description" class="description" part="description">
${r}
</p>`:l}
${n?g`<div id="title" class="header" part="header">
<slot name="header">${this.label}</slot>
</div>`:l}
<div class="body" part="body">
${this.slots.test(`[default]`)?g`<slot></slot>`:l}
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
${Vt}
</button>
</div>`}},I([d({type:Boolean,reflect:!0})],K.prototype,`open`,void 0),I([d()],K.prototype,`label`,void 0),I([d()],K.prototype,`description`,void 0),I([d({attribute:`confirm-label`})],K.prototype,`confirmLabel`,void 0),I([d({attribute:`cancel-label`})],K.prototype,`cancelLabel`,void 0),I([d({attribute:`close-label`})],K.prototype,`closeLabel`,void 0),I([d({reflect:!0})],K.prototype,`color`,void 0),I([d({type:Boolean,reflect:!0})],K.prototype,`loading`,void 0),I([d({type:Boolean,reflect:!0,attribute:`confirm-disabled`})],K.prototype,`confirmDisabled`,void 0),I([d({attribute:!1})],K.prototype,`onConfirm`,void 0),I([v()],K.prototype,`busy`,void 0),I([y(`.content`)],K.prototype,`panel`,void 0),I([y(`.overlay`)],K.prototype,`overlay`,void 0)})))()}function Ei(e){let t=Gn(e,ji);if(!t)return null;let n=e.ownerDocument;return t===n.documentElement||t===n.body?null:t}function Di(e,t){for(let n=e;n;n=Ft(n))if(n===t)return!0;return!1}function Oi(e){return Ni.push(e),()=>{let t=Ni.lastIndexOf(e);t>=0&&Ni.splice(t,1)}}function ki(e){let t=e?.isConnected===!0?Gn(e,Fi):null;if(t&&`confirmQueue`in t)return t.confirmQueue;let n=Ni[Ni.length-1];return n?n.confirmQueue:(Pi??=new Mi(()=>document.body),Pi)}function Ai(e){return t=>Li({...t,host:t.host??e})}var ji,Mi,Ni,Pi,Fi,Ii,Li;function Ri(){return(Ri=e((()=>{D(),it(),F(),un(),Ti(),ji=`minerva-config:not([root]), [data-minerva-theme-scope], [data-theme], [data-palette]`,Mi=class{constructor(e){this.defaultContainer=e,this.requests=[],this.current=null,this.settles=new Set}enqueue(e){return Kt(K),new Promise(t=>{this.requests.push({options:e,resolve:t}),this.current||this.showNext()})}cancelAll(){let e=this.requests.splice(0);for(let t of e)t.resolve(!1);for(let e of[...this.settles])e(!1);this.current?.remove()}container(e){let t=typeof document>`u`?null:document,n=e.container;if(n)return n.isConnected?n:(k&&C(K.tagName,"confirm(): `container` is not connected to the document; the dialog is appended to document.body instead."),t.body);let r=e.host?.isConnected===!0?Ei(e.host):null,i=this.defaultContainer();return r&&!Di(i,r)?r:i}showNext(){let e=this.requests.shift();if(!e){this.current=null;return}let{options:t,resolve:n}=e,r=this.container(t),i=document.createElement(K.tagName);i.label=t.title,t.description&&(i.description=t.description),t.confirmLabel&&(i.confirmLabel=t.confirmLabel),t.cancelLabel&&(i.cancelLabel=t.cancelLabel),t.closeLabel&&(i.closeLabel=t.closeLabel),t.color&&(i.color=t.color);let a=t.host;if(a?.isConnected&&!t.container){let e=Hn(a);e!==Hn(r)&&i.setAttribute(`lang`,e)}let o=!1,s=!1,ee=e=>{o||(o=!0,this.settles.delete(ee),n(e))};this.settles.add(ee);let te=new MutationObserver(()=>{i.isConnected||c()}),c=()=>{s||(s=!0,te.disconnect(),ee(!1),i.remove(),this.showNext())};i.addEventListener(`minerva-open-change`,e=>{let{open:t,reason:n}=e.detail;queueMicrotask(()=>{!t&&!e.defaultPrevented&&ee(n===`confirm`)})}),i.addEventListener(`minerva-after-close`,c,{once:!0}),this.current=i,r.append(i),te.observe(document,{childList:!0,subtree:!0}),i.open=!0}},Ni=[],Pi=null,Fi=`minerva-confirm-provider`,Ii=()=>(k&&C(K.tagName,`confirm() called without a document (server render): resolving false.`),Promise.resolve(!1)),Li=e=>typeof document>`u`?Ii():ki(e.host).enqueue(e)})))()}var zi;function Bi(){return(Bi=e((()=>{A(),Ti(),Ri(),u(),zi=class extends T{constructor(...e){super(...e),this.confirmQueue=new Mi(()=>this),this.unregister=null,this.confirm=e=>this.confirmQueue.enqueue(e)}static{this.tagName=`minerva-confirm-provider`}static{this.dependencies=[K]}static{this.styles=f`
:host{
display: contents;
}
`}connectedCallback(){super.connectedCallback(),this.unregister=Oi(this)}disconnectedCallback(){super.disconnectedCallback(),this.unregister?.(),this.unregister=null,this.confirmQueue.cancelAll()}render(){return g`<slot></slot>`}}})))()}var Vi,Hi,Ui,q,Wi;function Gi(){return(Gi=e((()=>{b(),D(),S(),F(),Sn(),A(),M(),kt(),Tt(),_r(),u(),m(),p(),We(),ne(),Ve(),He(),Vi=e=>e===void 0?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Hi={ascend:`ascending`,descend:`descending`},Ui=48,q=class e extends T{constructor(...e){super(...e),this.columns=[],this.rows=[],this.loading=!1,this.loadingRows=5,this.sortState=null,this.manualSort=!1,this.selectable=!1,this.selectedRowKeys=[],this.size=`medium`,this.variant=`simple`,this.hoverable=!1,this.retryable=!1,this.overflowing=!1,this.aria=new x(this),this.locale=new w(this),this.resize=null,this.handlePageChange=e=>{let{page:t,pageSize:n}=e.detail;queueMicrotask(()=>{e.defaultPrevented||(this.pagination={...this.pagination,current:t,pageSize:n})})}}static{this.tagName=`minerva-data-table`}static{this.dependencies=[ur]}static{this.styles=[E,f`
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
`,P(Gt),P(_n)]}disconnectedCallback(){super.disconnectedCallback(),this.resize?.disconnect(),this.resize=null}keyOf(e,t){let n=this.rowKey;return typeof n==`function`?n(e,t):typeof n==`string`&&n?e[n]:t}entries(){return(this.rows??[]).map((e,t)=>({row:e,index:t,key:this.keyOf(e,t)}))}rowDisabled(e){return!!this.isRowDisabled?.(e)}willUpdate(t){if(k&&(t.has(`rows`)||t.has(`rowKey`))){let t=this.entries().map(e=>e.key);new Set(t).size!==t.length&&C(e.tagName,`rows have duplicate keys: set row-key to a unique field (or a function).`)}}updated(){this.observeOverflow();let e=this.shadowRoot?.querySelector(`minerva-pagination`);e&&this.pagination&&Object.assign(e,this.pagination)}observeOverflow(){let e=this.wrapper;if(!e){this.resize?.disconnect(),this.resize=null;return}let t=()=>{let t=e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight;t!==this.overflowing&&(this.overflowing=t)};t(),!this.resize&&typeof ResizeObserver<`u`&&(this.resize=new ResizeObserver(t),this.resize.observe(e),e.firstElementChild&&this.resize.observe(e.firstElementChild))}changeSort(e){let t=xe(this.sortState,e);this.emit(`minerva-sort-change`,t,{cancelable:!0})&&(this.sortState=t)}commitSelection(e){let t=new Set(e),n={selectedRowKeys:e,selectedRows:this.entries().filter(e=>t.has(e.key)).map(e=>e.row)};if(!this.emit(`minerva-selection-change`,n,{cancelable:!0})){this.requestUpdate();return}this.selectedRowKeys=e}toggleRow(e,t){let n=this.selectedRowKeys;this.commitSelection(t?[...n.filter(t=>t!==e),e]:n.filter(t=>t!==e))}renderTable(){let e=this.columns??[],t=this.locale.t,n=ue(e),r=this.selectable,i=r&&e[0]?.fixed===`left`,a=i?Ui:0,o=this.entries(),s=this.sortState,ee=s?.order??null,te=ee===null?void 0:e.find(e=>e.key===s?.key),c=te?ke(te):null,ne=!this.manualSort&&c?[...o].sort((e,t)=>ee===`descend`?c(t.row,e.row):c(e.row,t.row)):o,re=new Set(this.selectedRowKeys),ie=o.filter(e=>!this.rowDisabled(e.row)),ae=ie.length>0&&ie.every(e=>re.has(e.key)),oe=!ae&&o.some(e=>re.has(e.key)),se=()=>{let e=new Set(ie.map(e=>e.key)),t=this.selectedRowKeys;this.commitSelection(ae?t.filter(t=>!e.has(t)):[...t,...ie.map(e=>e.key).filter(e=>!re.has(e))])},ce=e=>{let t={textAlign:e.align},r=Vi(e.width);return r!==void 0&&(t.width=r,t.minWidth=r),e.fixed===`left`?t.left=`${(n.leftOffsets[e.key]??0)+a}px`:e.fixed===`right`&&(t.right=`${n.rightOffsets[e.key]??0}px`),t},le=e=>e.fixed===`left`&&e.key===n.lastLeftFixedKey?`left`:e.fixed===`right`&&e.key===n.firstRightFixedKey?`right`:l,de=h({width:`${Ui}px`,minWidth:`${Ui}px`,...i?{left:`0px`}:{}}),fe=i?`left`:l,pe=e.length+ +!!r,me=e=>{if(!e.sortable)return g`<th
part="header-cell"
scope="col"
style=${h(ce(e))}
data-ellipsis=${e.ellipsis?`true`:l}
data-fixed=${e.fixed??l}
data-fixed-edge=${le(e)}
>
${e.header}
</th>`;let t=s?.key===e.key?s.order:null,n=t===`ascend`?Ut:t===`descend`?Xn:jn,r=t?Hi[t]:`none`;return g`<th
part=${mn(`header-cell`,{sort:r})}
scope="col"
aria-sort=${r}
data-sort=${r}
style=${h(ce(e))}
data-ellipsis=${e.ellipsis?`true`:l}
data-fixed=${e.fixed??l}
data-fixed-edge=${le(e)}
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
</th>`},he;he=this.loading?Array.from({length:this.loadingRows},()=>g`<tr part="row" aria-hidden="true">
${r?g`<td
part="cell"
class="selectionCell"
style=${de}
data-fixed=${fe}
></td>`:l}
${e.map(e=>g`<td
part="cell"
style=${h(ce(e))}
data-fixed=${e.fixed??l}
data-fixed-edge=${le(e)}
>
<span part="skeleton" class="skeleton"></span>
</td>`)}
</tr>`):o.length===0?g`<tr part="row">
<td part="empty" colspan=${pe} class="empty">
<slot name="empty">${this.emptyText??t(`table.empty`)}</slot>
</td>
</tr>`:Be(ne,e=>e.key,({row:n,index:i,key:a},o)=>{let s=r&&re.has(a);return g`<tr
part=${mn(`row`,{selected:s})}
aria-selected=${s?`true`:l}
?data-selected=${s}
>
${r?g`<td
part="cell"
class="selectionCell"
style=${de}
data-fixed=${fe}
>
<input
type="checkbox"
part="checkbox"
class="checkbox"
.checked=${Ke(s)}
?disabled=${this.rowDisabled(n)}
aria-label=${t(`table.selectRow`,{row:this.getRowLabel?.(n,i)??String(a)})}
@change=${e=>this.toggleRow(a,e.target.checked)}
/>
</td>`:l}
${e.map(e=>g`<td
part="cell"
style=${h(ce(e))}
data-ellipsis=${e.ellipsis?`true`:l}
data-fixed=${e.fixed??l}
data-fixed-edge=${le(e)}
>
${e.render?e.render(n,o):n[e.key]}
</td>`)}
</tr>`});let ge=Vi(this.scrollX),_e=Vi(this.scrollY),ve=!!(ge||_e)||this.overflowing,ye=this.aria.label;return g`<div
part="viewport"
class=${_({wrapper:!0,wrapperBordered:this.variant===`bordered`,wrapperScrollY:!!_e})}
role=${ve?`region`:l}
tabindex=${ve?0:l}
aria-label=${ve?ye??t(`table.scrollRegion`):l}
style=${h(_e?{maxHeight:_e,overflowY:`auto`}:{})}
>
<table
part="table"
class=${_({table:!0,[this.size]:!0,[this.variant]:!0,hoverable:this.hoverable,scrollX:!!ge})}
style=${h(ge?{minWidth:ge}:{})}
aria-label=${ye??l}
aria-description=${this.aria.description??l}
>
<thead>
<tr part="row">
${r?g`<th
part="header-cell"
scope="col"
class="selectionCell"
style=${de}
data-fixed=${fe}
>
<input
type="checkbox"
part="checkbox"
class="checkbox"
.checked=${Ke(ae)}
.indeterminate=${oe}
?disabled=${ie.length===0||this.loading}
aria-label=${t(`table.selectAll`)}
@change=${se}
/>
</th>`:l}
${e.map(me)}
</tr>
</thead>
<tbody>
${he}
</tbody>
</table>
</div>`}hookStates(){return{loading:this.loading,size:this.size,variant:this.variant}}render(){let e=!!this.error&&!this.loading;return g`<div
part="root"
class="dataTable"
aria-busy=${this.loading?`true`:l}
>
${e?g`<div part="error" class="error" role="alert">
<div class="errorTitle">
<slot name="error">${this.error}</slot>
</div>
${this.retryable?g`<button
type="button"
part="retry-button"
class="customButton neutral variant-outline small retry"
@click=${()=>this.emit(`minerva-retry`)}
>
<span class="label"
><span class="retryIcon" aria-hidden="true"
>${bt}</span
>${this.retryLabel??this.locale.t(`table.retry`)}</span
>
</button>`:l}
</div>`:g`${this.renderTable()}
${this.pagination?g`<minerva-pagination
part="pagination"
exportparts="root: pagination-root, item: pagination-item"
@minerva-page-change=${this.handlePageChange}
></minerva-pagination>`:l}`}
</div>`}},I([d({attribute:!1})],q.prototype,`columns`,void 0),I([d({attribute:!1})],q.prototype,`rows`,void 0),I([d({attribute:`row-key`})],q.prototype,`rowKey`,void 0),I([d({attribute:`empty-text`})],q.prototype,`emptyText`,void 0),I([d({type:Boolean,reflect:!0})],q.prototype,`loading`,void 0),I([d({type:Number,attribute:`loading-rows`})],q.prototype,`loadingRows`,void 0),I([d({attribute:!1})],q.prototype,`sortState`,void 0),I([d({type:Boolean,attribute:`manual-sort`})],q.prototype,`manualSort`,void 0),I([d({type:Boolean,reflect:!0})],q.prototype,`selectable`,void 0),I([d({attribute:!1})],q.prototype,`selectedRowKeys`,void 0),I([d({attribute:!1})],q.prototype,`isRowDisabled`,void 0),I([d({attribute:!1})],q.prototype,`getRowLabel`,void 0),I([d({reflect:!0})],q.prototype,`size`,void 0),I([d({reflect:!0})],q.prototype,`variant`,void 0),I([d({type:Boolean,reflect:!0})],q.prototype,`hoverable`,void 0),I([d({attribute:`scroll-x`})],q.prototype,`scrollX`,void 0),I([d({attribute:`scroll-y`})],q.prototype,`scrollY`,void 0),I([d({attribute:!1})],q.prototype,`pagination`,void 0),I([d()],q.prototype,`error`,void 0),I([d({type:Boolean})],q.prototype,`retryable`,void 0),I([d({attribute:`retry-label`})],q.prototype,`retryLabel`,void 0),I([v()],q.prototype,`overflowing`,void 0),I([y(`.wrapper`)],q.prototype,`wrapper`,void 0),Wi=class extends T{constructor(...e){super(...e),this.primary=``,this.monospace=!1,this.maxWidth=360,this.observer=null}static{this.tagName=`minerva-table-cell-content`}static{this.styles=[E,f`
:host{
display: block;
min-width: 0;
}
`,P(_n)]}hasSecondarySlot(){return Array.from(this.children).some(e=>e.getAttribute(`slot`)===`secondary`)}connectedCallback(){super.connectedCallback(),this.observer??=typeof MutationObserver>`u`?null:new MutationObserver(()=>this.requestUpdate()),this.observer?.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}render(){let e=this.secondary!==void 0&&this.secondary!==null||this.hasSecondarySlot(),t=_({cellPrimary:!0,cellMono:this.monospace,cellStrong:e}),n=g`<slot>${this.primary}</slot>`;return g`<div
part="root"
class="cellContent"
style=${h({maxWidth:Vi(this.maxWidth)})}
>
${this.monospace?g`<code part="primary" class=${t}>${n}</code>`:g`<div part="primary" class=${t}>${n}</div>`}
${e?g`<div part="secondary" class="cellSecondary">
<slot name="secondary">${this.secondary}</slot>
</div>`:l}
</div>`}},I([d()],Wi.prototype,`primary`,void 0),I([d()],Wi.prototype,`secondary`,void 0),I([d({type:Boolean,reflect:!0})],Wi.prototype,`monospace`,void 0),I([d({attribute:`max-width`})],Wi.prototype,`maxWidth`,void 0)})))()}var Ki,qi;function Ji(){return(Ji=e((()=>{D(),A(),M(),tt(),u(),m(),p(),Ki=class extends T{constructor(...e){super(...e),this.label=``}static{this.tagName=`minerva-description-item`}static{this.styles=[E,f`
:host{
display: contents;
}
`]}render(){return g`<slot></slot>`}},I([d({reflect:!0})],Ki.prototype,`label`,void 0),qi=class e extends T{constructor(...e){super(...e),this.items=[],this.bordered=!1,this.striped=!1,this.observer=null}static{this.tagName=`minerva-description-list`}static{this.dependencies=[Ki]}static{this.shadowRootOptions={...T.shadowRootOptions,slotAssignment:`manual`}}static{this.styles=[E,f`
:host{
display: block;
}
`,P(vn)]}declarativeItems(){return Array.from(this.children).filter(e=>e.localName===Ki.tagName)}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.requestUpdate()),this.observer.observe(this,{childList:!0,attributes:!0,subtree:!0,attributeFilter:[`label`]}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null}updated(){let t=this.declarativeItems();if(Array.from(this.renderRoot.querySelectorAll(`slot[data-item]`)).forEach((e,n)=>{let r=t[n];r&&typeof e.assign==`function`&&e.assign(r)}),k){let t=Array.from(this.children).filter(e=>e.localName!==Ki.tagName);t.length&&C(e.tagName,`only <minerva-description-item> children are rendered (ignored: <${t[0].localName}>).`)}}render(){let e=this.declarativeItems();return g`<dl
part="root"
class=${_({descriptionList:!0,bordered:this.bordered,striped:this.striped})}
>
${(this.items??[]).map(e=>g`<div part="row" class="row">
<dt part="term">${e.label}</dt>
<dd part="description">${e.value}</dd>
</div>`)}
${e.map(e=>g`<div part="row" class="row">
<dt part="term">${e.label}</dt>
<dd part="description"><slot data-item></slot></dd>
</div>`)}
</dl>`}},I([d({attribute:!1})],qi.prototype,`items`,void 0),I([d({type:Boolean,reflect:!0})],qi.prototype,`bordered`,void 0),I([d({type:Boolean,reflect:!0})],qi.prototype,`striped`,void 0)})))()}var Yi,Xi;function Zi(){return(Zi=e((()=>{D(),A(),j(),M(),Ot(),u(),m(),p(),We(),Yi=e=>typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Xi=class e extends T{constructor(...e){super(...e),this.variant=`solid`,this.orientation=`horizontal`,this.thickness=1,this.spacing=16,this.textAlign=`center`,this.elevation=!1,this.flexItem=!1,this.slots=new O(this)}static{this.tagName=`minerva-divider`}static{this.styles=[E,f`
:host{
display: block;
width: 100%;
}
:host([orientation="vertical"]){
display: inline-flex;
width: auto;
vertical-align: middle;
}
:host([orientation="vertical"][flex-item]){
align-self: stretch;
}
`,P(st)]}hookStates(){let e=this.orientation===`horizontal`&&this.slots.test(`[default]`);return{orientation:this.orientation,variant:this.variant,align:e?this.textAlign:void 0}}updated(){k&&this.orientation===`vertical`&&this.slots.test(`[default]`)&&C(e.tagName,`text is only rendered by horizontal dividers; it is ignored when orientation is vertical.`)}render(){let e=this.orientation===`horizontal`,t=e&&this.slots.test(`[default]`),n=this.textAlign,r={};if(this.thickness!=null&&!Number.isNaN(this.thickness)&&(r.borderWidth=`${this.thickness}px`,r[`--_divider-thickness`]=`${this.thickness}px`),this.length!=null&&this.length!==``&&(r[e?`width`:`height`]=Yi(this.length)),this.spacing!=null&&!Number.isNaN(this.spacing)){let t=`${this.spacing}px`;r.marginTop=e?t:`0`,r.marginBottom=e?t:`0`,r.marginLeft=e?`0`:t,r.marginRight=e?`0`:t}let i=_({divider:!0,[this.variant]:!0,[this.orientation]:!0,withText:t,[`text${n.charAt(0).toUpperCase()}${n.slice(1)}`]:t,elevation:this.elevation,flexItem:this.flexItem});return t?g`<div
part="root"
role="separator"
aria-orientation=${this.orientation}
class=${i}
style=${h(r)}
>
<span class="text" part="label"><slot></slot></span>
</div>`:g`<hr
part="root"
aria-orientation=${this.orientation}
class=${i}
style=${h(r)}
/>`}},I([d({reflect:!0})],Xi.prototype,`variant`,void 0),I([d({reflect:!0})],Xi.prototype,`orientation`,void 0),I([d({type:Number})],Xi.prototype,`thickness`,void 0),I([d()],Xi.prototype,`length`,void 0),I([d({type:Number})],Xi.prototype,`spacing`,void 0),I([d({attribute:`text-align`})],Xi.prototype,`textAlign`,void 0),I([d({type:Boolean,reflect:!0})],Xi.prototype,`elevation`,void 0),I([d({type:Boolean,reflect:!0,attribute:`flex-item`})],Xi.prototype,`flexItem`,void 0)})))()}var Qi,J;function $i(){return($i=e((()=>{b(),D(),S(),it(),F(),A(),j(),M(),nr(),tr(),cr(),sr(),ft(),ut(),u(),m(),p(),Qi=[`left`,`right`,`top`,`bottom`],J=class e extends T{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.side=`right`,this.size=`medium`,this.hideCloseButton=!1,this.dialogRole=`dialog`,this.nonModal=!1,this.locale=new w(this),this.aria=new x(this),this.slots=new O(this),this.presence=new _t(this,()=>this.panel),this.modal=new $n(this),this.focusScope=new or(this,()=>({trapped:!this.nonModal,loop:!0,restoreFocus:!0})),this.layer=new Qn(this,()=>({disableOutsidePointerEvents:!this.nonModal,branches:()=>[this.triggerElement()],onFocusOutside:()=>this.nonModal,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleClick=e=>{if(e.defaultPrevented)return;let t=e.composedPath(),n=this.triggerElement();if(n&&t.includes(n)){this.requestOpenChange(!this.open,`trigger`);return}let r=t.find(e=>e instanceof Element&&e.hasAttribute(`data-drawer-close`));r&&this.contains(r)&&this.requestOpenChange(!1,`close-slot`)}}static{this.tagName=`minerva-drawer`}static{this.styles=[E,er,f`
:host{
display: contents;
}
`,P(It)]}show(){this.open=!0}hide(){this.open=!1}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleClick)}willUpdate(t){t.has(`open`)&&this.presence.sync(this.open),k&&t.has(`side`)&&!Qi.includes(this.side)&&C(e.tagName,`invalid side "${this.side}" (expected left, right, top or bottom).`)}hookStates(){return{state:this.open?`open`:`closed`,side:Qi.includes(this.side)?this.side:`right`,size:this.size}}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)||e.has(`nonModal`)&&this.open){let t=this.panel;this.open&&t?(e.has(`nonModal`)&&!e.has(`open`)&&(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate()),Mt(this.overlay),Mt(t),this.nonModal||this.modal.activate(this),this.layer.activate(t),this.focusScope.activate(t),e.has(`open`)&&this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleClick),N(this.panel),N(this.overlay)}afterClose(){N(this.panel),N(this.overlay),this.emit(`minerva-after-close`)}render(){let e=this.open||this.presence.present,t=this.open?`open`:`closed`,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description,i=Qi.includes(this.side)?this.side:`right`;return g`<slot name="trigger"></slot> ${e?g`${this.nonModal?l:g`<div
part="overlay"
class="overlay"
popover="manual"
data-state=${t}
aria-hidden="true"
></div>`}
<div
part="content"
class=${_({content:!0,[i]:!0,[this.size]:!0})}
popover="manual"
role=${this.dialogRole}
aria-modal=${this.nonModal?l:`true`}
aria-labelledby=${n?`title`:l}
aria-label=${n?l:this.aria.label??l}
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
${n?g`<div id="title" class="header" part="header">
<slot name="header">${this.label}</slot>
</div>`:l}
<div class="body" part="body"><slot></slot></div>
${this.slots.test(`footer`)?g`<div class="footer" part="footer">
<slot name="footer"></slot>
</div>`:l}
${this.hideCloseButton?l:g`<button
type="button"
class="close"
part="close-button"
aria-label=${this.closeLabel??this.locale.t(`drawer.close`)}
@click=${()=>this.requestOpenChange(!1,`close-button`)}
>
${Vt}
</button>`}
</div>`:l}`}},I([d({type:Boolean,reflect:!0})],J.prototype,`open`,void 0),I([d()],J.prototype,`label`,void 0),I([d()],J.prototype,`description`,void 0),I([d({attribute:`hidden-description`})],J.prototype,`hiddenDescription`,void 0),I([d({reflect:!0})],J.prototype,`side`,void 0),I([d({reflect:!0})],J.prototype,`size`,void 0),I([d({type:Boolean,attribute:`hide-close-button`})],J.prototype,`hideCloseButton`,void 0),I([d({attribute:`close-label`})],J.prototype,`closeLabel`,void 0),I([d({attribute:`dialog-role`})],J.prototype,`dialogRole`,void 0),I([d({type:Boolean,reflect:!0,attribute:`non-modal`})],J.prototype,`nonModal`,void 0),I([y(`.content`)],J.prototype,`panel`,void 0),I([y(`.overlay`)],J.prototype,`overlay`,void 0)})))()}var ea,ta,na,ra;function ia(){return(ia=e((()=>{b(),D(),F(),A(),j(),M(),Kn(),u(),m(),p(),We(),ea=ze`<svg class="defaultIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none" aria-hidden="true" focusable="false"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM5 5v9h4a3 3 0 0 0 6 0h4V5ZM5 16v3h14v-3h-2.54a5 5 0 0 1-8.92 0Z" /></svg>`,ta=ze`<svg class="defaultIcon" aria-hidden="true" focusable="false" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse style="fill: var(--surface-muted-color)" cx="32" cy="33" rx="32" ry="7" /><g fill-rule="nonzero" style="stroke: var(--border-strong-color)"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" /><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" style="fill: var(--surface-color)" /></g></g></svg>`,na=e=>e&&/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,ra=class e extends T{constructor(...e){super(...e),this.heading=``,this.hideDescription=!1,this.hideIcon=!1,this.useSvg=!1,this.showShadow=!1,this.locale=new w(this),this.aria=new x(this),this.slots=new O(this)}static{this.tagName=`minerva-empty`}static{this.styles=[E,f`
:host{
display: block;
}
`,P(at)]}hookStates(){return{size:this.size}}updated(){k&&this.hideDescription&&this.description&&C(e.tagName,`description is ignored while hide-description is set.`)}render(){let e=!!this.heading||this.slots.test(`heading`),t=this.slots.test(`description`),n=this.description??this.locale.t(`empty.description`),r=!this.hideDescription&&(t||n!==``),i=this.slots.test(`action`)||this.slots.test(`secondary-action`),a=this.aria.label;return g`<div
part="root"
class=${_({empty:!0,showShadow:this.showShadow,sized:!!this.size,[`size-${this.size}`]:!!this.size})}
style=${h({width:na(this.width),height:na(this.height)})}
role="status"
aria-label=${a??l}
aria-labelledby=${a?l:e?`title`:r?`description`:l}
aria-describedby=${e&&r?`description`:l}
>
${this.hideIcon?l:g`<div part="icon" class="iconWrapper">
<slot name="icon">${this.useSvg?ta:ea}</slot>
</div>`}
${e?g`<div id="title" part="title" class="title">
<slot name="heading">${this.heading}</slot>
</div>`:l}
${r?g`<div id="description" part="description" class="description">
<slot name="description">${n}</slot>
</div>`:l}
${i?g`<div part="actions" class="actions">
<slot name="action"></slot><slot name="secondary-action"></slot>
</div>`:l}
${this.slots.test(`[default]`)?g`<div part="footer" class="footer"><slot></slot></div>`:l}
</div>`}},I([d()],ra.prototype,`heading`,void 0),I([d()],ra.prototype,`description`,void 0),I([d({type:Boolean,attribute:`hide-description`})],ra.prototype,`hideDescription`,void 0),I([d({type:Boolean,attribute:`hide-icon`})],ra.prototype,`hideIcon`,void 0),I([d({reflect:!0})],ra.prototype,`size`,void 0),I([d({type:Boolean,attribute:`use-svg`})],ra.prototype,`useSvg`,void 0),I([d()],ra.prototype,`width`,void 0),I([d()],ra.prototype,`height`,void 0),I([d({type:Boolean,attribute:`show-shadow`})],ra.prototype,`showShadow`,void 0)})))()}var aa,oa;function sa(){return(sa=e((()=>{D(),A(),j(),M(),Nt(),u(),m(),aa=e=>e.localName===`minerva-checkbox`||e.localName===`minerva-switch`||e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`),oa=class e extends T{constructor(...e){super(...e),this.label=``,this.helperText=``,this.errorMessage=``,this.invalid=!1,this.required=!1,this.disabled=!1,this.readOnly=!1,this.requiredIndicator=`*`,this.slots=new O(this),this.observer=null,this.control=null,this.saved=new Map}static{this.tagName=`minerva-form-control`}static{this.styles=[E,f`
:host{
display: block;
}
.label{
cursor: default;
}
`,P(Jn)]}get controlElement(){return Array.from(this.children).find(e=>!e.hasAttribute(`slot`))??null}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.sync()),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.release()}updated(){this.sync()}get labelText(){return this.label?this.label:Array.from(this.children).filter(e=>e.getAttribute(`slot`)===`label`).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `)}slotText(e){return Array.from(this.children).filter(t=>t.getAttribute(`slot`)===e).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `)}get descriptionText(){return this.invalid?this.errorMessage||this.slotText(`error-message`):this.helperText||this.slotText(`helper-text`)}save(e,t){this.saved.has(e)||this.saved.set(e,t)}setAttr(e,t,n){let r=`@${t}`;if(n===null){if(!this.saved.has(r))return;let n=this.saved.get(r);this.saved.delete(r),n===null?e.removeAttribute(t):e.setAttribute(t,n);return}this.save(r,e.getAttribute(t)),e.getAttribute(t)!==n&&e.setAttribute(t,n)}setProp(e,t,n){let r=`.${t}`;if(!n){if(!this.saved.has(r))return;e[t]=this.saved.get(r),this.saved.delete(r);return}this.save(r,e[t]),e[t]=!0}propFor(e,t){return{invalid:[`invalid`,`error`],required:[`required`],disabled:[`disabled`],readOnly:[`readOnly`,`readonly`]}[t].find(t=>t in e&&typeof e[t]==`boolean`)??null}release(){let e=this.control;if(e){for(let[t,n]of this.saved)if(t.startsWith(`@`)){let r=t.slice(1);n===null?e.removeAttribute(r):e.setAttribute(r,n)}else e[t.slice(1)]=n;this.saved.clear(),this.control=null}}sync(){let t=this.controlElement;if(t!==this.control&&(this.release(),this.control=t),!t)return;let n=this.labelText,r=this.saved.has(`@aria-label`);n&&(r||!t.hasAttribute(`aria-label`))?this.setAttr(t,`aria-label`,n):n||this.setAttr(t,`aria-label`,null);let i=this.descriptionText;this.setAttr(t,`aria-description`,i||null);for(let e of[`invalid`,`required`,`disabled`,`readOnly`]){let n=this.propFor(t,e);n&&this.setProp(t,n,this[e])}if(this.setAttr(t,`aria-invalid`,this.invalid?`true`:null),this.setAttr(t,`aria-required`,this.required?`true`:null),this.setAttr(t,`aria-readonly`,this.readOnly?`true`:null),k&&this.children.length>0){let t=Array.from(this.children).filter(e=>!e.hasAttribute(`slot`));t.length>1&&C(e.tagName,`wraps ONE control, found ${t.length} elements in the default slot: only the first one is wired.`)}}handleLabelClick(e){let t=this.controlElement;t&&!this.disabled&&(e.preventDefault(),aa(t)?t.click():t.focus())}hookStates(){return{disabled:this.disabled,invalid:this.invalid,readonly:this.readOnly,required:this.required}}render(){let e=!!this.label||this.slots.test(`label`),t=!!this.helperText||this.slots.test(`helper-text`),n=!!this.errorMessage||this.slots.test(`error-message`);return g`<div class="root" part="root">
${e?g`<label
id="label"
class="label"
part="label"
@click=${this.handleLabelClick}
>${this.label||g`<slot name="label"></slot>`}${this.required?g`<span
class="required"
part="required-indicator"
aria-hidden="true"
>${this.requiredIndicator}</span
>`:l}</label
>`:l}
<slot @slotchange=${()=>this.sync()}></slot>
${!this.invalid&&t?g`<div id="helper" class="helper" part="helper-text">
${this.helperText||g`<slot name="helper-text"></slot>`}
</div>`:l}
${this.invalid&&n?g`<div
id="error"
class="error"
part="error-message"
role="alert"
>
${this.errorMessage||g`<slot name="error-message"></slot>`}
</div>`:l}
</div>`}},I([d()],oa.prototype,`label`,void 0),I([d({attribute:`helper-text`})],oa.prototype,`helperText`,void 0),I([d({attribute:`error-message`})],oa.prototype,`errorMessage`,void 0),I([d({type:Boolean,reflect:!0})],oa.prototype,`invalid`,void 0),I([d({type:Boolean,reflect:!0})],oa.prototype,`required`,void 0),I([d({type:Boolean,reflect:!0})],oa.prototype,`disabled`,void 0),I([d({type:Boolean,reflect:!0,attribute:`readonly`})],oa.prototype,`readOnly`,void 0),I([d({attribute:`required-indicator`})],oa.prototype,`requiredIndicator`,void 0)})))()}var ca;function la(){return(la=e((()=>{A(),M(),zr(),Qt(),Un(),fr(),u(),m(),We(),ca=class e extends T{constructor(...e){super(...e),this.columns=1,this.gap=4}static{this.tagName=`minerva-form-layout`}static{this.styles=[E,f`
:host{
display: block;
min-width: 0;
}
.layout ::slotted(*){
min-width: 0;
}
`,P(Yn),P(Jt)]}render(){let t=dr(e.tagName,this.columns,this.rowGap??this.gap,this.columnGap??this.gap);return g`<div class="root" part="root" style=${h(t)}>
<div class="layout" part="layout"><slot></slot></div>
</div>`}},I([d({converter:hr})],ca.prototype,`columns`,void 0),I([d({converter:Rr})],ca.prototype,`gap`,void 0),I([d({attribute:`row-gap`,converter:Rr})],ca.prototype,`rowGap`,void 0),I([d({attribute:`column-gap`,converter:Rr})],ca.prototype,`columnGap`,void 0)})))()}function ua(e){let t=``;if(e&&typeof window<`u`){let n=Re(window);n.isSupported&&(n.addHook(`uponSanitizeAttribute`,(e,t)=>{t.attrName===`src`&&(e.nodeName!==`IMG`||!/^data:image\/(?:png|jpeg|gif|webp|avif);base64,[a-z0-9+/=\s]+$/i.test(t.attrValue))&&(t.keepAttr=!1)}),n.sanitize(pa,fa)===ma&&(t=n.sanitize(e,fa)))}return`<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="${da}"><meta name="referrer" content="no-referrer"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>${t}</body></html>`}var da,fa,pa,ma;function ha(){return(ha=e((()=>{Xe(),da=`default-src 'none'; script-src 'none'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'; object-src 'none'; frame-src 'none'; font-src 'none'; media-src 'none'; form-action 'none'; base-uri 'none'`,fa={ALLOWED_TAGS:`a abbr b bdi bdo blockquote br caption center code col colgroup dd del div dl dt em figcaption figure h1 h2 h3 h4 h5 h6 hr i img ins li ol p pre s section small span strong style sub sup table tbody td tfoot th thead tr u ul wbr`.split(` `),ALLOWED_ATTR:`alt title class style lang dir role width height align valign bgcolor border cellpadding cellspacing colspan rowspan scope src`.split(` `),ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!0,FORBID_TAGS:[`base`,`meta`,`link`,`script`,`form`,`input`,`button`,`iframe`,`object`,`embed`,`svg`,`math`],FORBID_ATTR:[`href`,`srcdoc`,`srcset`,`action`,`formaction`,`target`,`ping`,`id`,`name`],FORCE_BODY:!0,RETURN_TRUSTED_TYPE:!1},pa=`<p title="t" onclick="x()">ok</p><script>x()<\/script><img alt="a" src="https://x.invalid/p" onerror="x()">`,ma=`<p title="t">ok</p><img alt="a">`})))()}var ga;function _a(){return(_a=e((()=>{b(),D(),A(),M(),fn(),ha(),u(),m(),We(),Je(),ga=class e extends T{constructor(...e){super(...e),this.html=``,this.label=``,this.viewport=`desktop`,this.mobileWidth=375,this.height=600,this.doc=ua(),this.aria=new x(this)}static{this.tagName=`minerva-html-preview`}static{this.styles=[E,f`
:host{
display: block;
}
`,P(hn)]}willUpdate(e){e.has(`html`)&&(this.doc=ua(this.html))}updated(){k&&!this.label&&!this.aria.label&&C(e.tagName,`set label (or aria-label): the iframe needs a title for assistive technologies.`)}render(){let e=Number.isFinite(this.mobileWidth)&&this.mobileWidth>0?this.mobileWidth:375,t=Number.isFinite(this.height)&&this.height>0?this.height:600;return g`<div part="root" class="preview">
${Ge(this.doc,g`<iframe
part="frame"
class="frame"
title=${this.label||this.aria.label||``}
sandbox=""
referrerpolicy="no-referrer"
srcdoc=${this.doc}
style=${h({width:this.viewport===`mobile`?`${e}px`:`100%`,height:`${t}px`})}
></iframe>`)}
</div>`}},I([d()],ga.prototype,`html`,void 0),I([d()],ga.prototype,`label`,void 0),I([d({reflect:!0})],ga.prototype,`viewport`,void 0),I([d({type:Number,attribute:`mobile-width`})],ga.prototype,`mobileWidth`,void 0),I([d({type:Number})],ga.prototype,`height`,void 0),I([v()],ga.prototype,`doc`,void 0)})))()}var va,ya,Y;function ba(){return(ba=e((()=>{b(),D(),S(),F(),dn(),A(),M(),kn(),cr(),Cn(),u(),m(),p(),va=200,ya=300,Y=class e extends T{constructor(...e){super(...e),this.color=`neutral`,this.variant=`ghost`,this.size=`medium`,this.shape=`circle`,this.disabled=!1,this.loading=!1,this.toggle=!1,this.pressed=!1,this.tooltipPlacement=`top`,this.noTooltip=!1,this.type=`button`,this.tooltipOpen=!1,this.tooltipPositioned=!1,this.internals=qt(this),this.aria=new x(this),this.locale=new w(this),this.floating=new ir(this,()=>({anchor:()=>this.button,floating:()=>this.tooltipElement,branches:()=>[this],placement:this.tooltipPlacement,offset:{mainAxis:8},dismissOnPointerDownOutside:!1,dismissOnFocusOutside:!1,onDismiss:()=>this.hideTooltip(),onPosition:()=>{this.tooltipPositioned=!0}})),this.handlePointerEnter=()=>{if(!this.tooltipEnabled||this.tooltipOpen){this.clearTimers();return}this.clearTimers(),this.enterTimer=setTimeout(()=>this.showTooltip(),va)},this.handlePointerLeave=()=>{this.clearTimers(),this.tooltipOpen&&(this.leaveTimer=setTimeout(()=>this.hideTooltip(),ya))},this.blockInactiveClicks=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-icon-button`}static{this.formAssociated=!0}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[E,er,f`
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
`,P(cn),P(An)]}get form(){return this.internals?.form??null}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}get tooltipContent(){return this.tooltip||this.label||void 0}get tooltipEnabled(){return!this.noTooltip&&!!this.tooltipContent&&!this.disabled&&!this.loading}clearTimers(){clearTimeout(this.enterTimer),clearTimeout(this.leaveTimer)}showTooltip(){this.tooltipEnabled&&(this.clearTimers(),this.tooltipOpen=!0)}hideTooltip(){this.clearTimers(),this.tooltipOpen=!1,this.tooltipPositioned=!1}handleClick(e){if(this.loading||this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}if(this.toggle){let e=!this.pressed;this.emit(`minerva-pressed-change`,{pressed:e},{cancelable:!0})&&(this.pressed=e)}let t=this.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockInactiveClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockInactiveClicks,!0),this.clearTimers(),this.tooltipOpen=!1}hookStates(){return{state:this.toggle&&this.pressed?`active`:`inactive`,disabled:this.disabled,loading:this.loading,size:this.size,variant:this.variant,color:this.color,shape:this.shape}}willUpdate(e){(e.has(`disabled`)||e.has(`loading`)||e.has(`noTooltip`))&&!this.tooltipEnabled&&this.hideTooltip()}updated(){this.floating.sync(this.tooltipOpen&&this.tooltipEnabled),k&&!this.label&&!this.aria.label&&C(e.tagName,`icon buttons only contain an icon: set label (or aria-label) to give them an accessible name.`)}render(){let e=this.tooltipOpen&&this.tooltipEnabled;return g`<button
part="root"
type="button"
class=${_({iconButton:!0,[this.color]:!0,[`variant-${this.variant}`]:!0,[this.size]:!0,[this.shape]:!0,disabled:this.disabled,loading:this.loading,pressed:this.toggle&&this.pressed})}
?disabled=${this.disabled}
tabindex=${this.disabled?`-1`:`0`}
aria-label=${this.label??this.aria.label??this.locale.t(`iconButton.default`)}
aria-description=${this.aria.description??l}
aria-describedby=${e?`tooltip`:l}
aria-pressed=${this.toggle?String(this.pressed):l}
aria-expanded=${this.aria.attr(`aria-expanded`)??l}
aria-haspopup=${this.aria.attr(`aria-haspopup`)??l}
aria-busy=${this.loading?`true`:l}
aria-disabled=${this.loading&&!this.disabled?`true`:l}
@click=${this.handleClick}
@mouseenter=${this.handlePointerEnter}
@mouseleave=${this.handlePointerLeave}
@focus=${()=>this.showTooltip()}
@blur=${()=>this.hideTooltip()}
>
${this.loading?g`<span
class=${_({spinner:!0,[this.size]:!0})}
part="spinner"
role="progressbar"
aria-label=${this.locale.t(`common.loading`)}
>${ct}</span
>`:g`<span class="glyph" part="icon" aria-hidden="true"
><slot></slot
></span>`}
</button>
${e?g`<div
id="tooltip"
part="tooltip"
role="tooltip"
popover="manual"
class=${_({tooltip:!0,neutral:!0,solid:!0,default:!0,"animation-fade":!0,show:this.tooltipPositioned})}
@mouseenter=${()=>this.clearTimers()}
@mouseleave=${this.handlePointerLeave}
>
${this.tooltipContent}
</div>`:l}`}},I([d()],Y.prototype,`label`,void 0),I([d({reflect:!0})],Y.prototype,`color`,void 0),I([d({reflect:!0})],Y.prototype,`variant`,void 0),I([d({reflect:!0})],Y.prototype,`size`,void 0),I([d({reflect:!0})],Y.prototype,`shape`,void 0),I([d({type:Boolean,reflect:!0})],Y.prototype,`disabled`,void 0),I([d({type:Boolean,reflect:!0})],Y.prototype,`loading`,void 0),I([d({type:Boolean,reflect:!0})],Y.prototype,`toggle`,void 0),I([d({type:Boolean,reflect:!0})],Y.prototype,`pressed`,void 0),I([d()],Y.prototype,`tooltip`,void 0),I([d({attribute:`tooltip-placement`})],Y.prototype,`tooltipPlacement`,void 0),I([d({type:Boolean,attribute:`no-tooltip`})],Y.prototype,`noTooltip`,void 0),I([d({reflect:!0})],Y.prototype,`type`,void 0),I([v()],Y.prototype,`tooltipOpen`,void 0),I([v()],Y.prototype,`tooltipPositioned`,void 0),I([y(`button`)],Y.prototype,`button`,void 0),I([y(`.tooltip`)],Y.prototype,`tooltipElement`,void 0)})))()}var xa,X;function Sa(){return(Sa=e((()=>{b(),D(),S(),F(),A(),j(),M(),$t(),Bn(),u(),m(),p(),Ve(),xa=0,X=class e extends yn{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.type=`text`,this.variant=`outline`,this.size=`medium`,this.invalid=!1,this.placeholder=``,this.readOnly=!1,this.clearable=!1,this.showCharCount=!1,this.passwordVisible=!1,this.countId=`minerva-input-count-${xa++}`,this.locale=new w(this),this.aria=new x(this,()=>this.labels),this.slots=new O(this),this.dirty=!1}static{this.tagName=`minerva-input`}static{this.shadowRootOptions={...yn.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[E,f`
:host{
display: inline-flex;
width: 100%;
min-width: 0;
vertical-align: middle;
}
`,P(Pn)]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}select(){this.input?.select()}getFormValue(){return this.value}getValidity(){let e=this.input;return e?{flags:nn(e.validity),message:e.validationMessage,anchor:e}:this.required&&!this.value?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`)}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.passwordVisible=!1}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`value`)&&t.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),k&&t.has(`maxLength`)&&this.minLength!==void 0&&this.maxLength!==void 0&&this.minLength>this.maxLength&&C(e.tagName,`minlength (${this.minLength}) is greater than maxlength (${this.maxLength}): no value can be valid.`)}handleInput(){this.value=this.input.value,this.emit(`minerva-input`,{value:this.value})}handleChange(){this.value=this.input.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}clear(){this.value=``,this.input.value=``,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.emit(`minerva-input`,{value:``}),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:``}),this.emit(`minerva-clear`),this.input.focus()}hookStates(){return{disabled:this.isDisabled,invalid:this.invalid||this.aria.attr(`aria-invalid`)===`true`,readonly:this.readOnly,required:this.required,size:this.size,variant:this.variant}}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.type===`password`,r=this.clearable&&this.value!==``&&!t&&!this.readOnly,i=this.passwordVisible?this.hidePasswordLabel??e(`input.hidePassword`):this.showPasswordLabel??e(`input.showPassword`),a=this.showCharCount?this.countId:void 0;return g`<div
part="root"
class=${_({root:!0,[this.variant]:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
data-component="input"
>
${this.slots.test(`prefix`)?g`<span class="addon start" part="prefix"
><slot name="prefix"></slot
></span>`:l}
<input
part="input"
class="field"
.value=${Ke(this.value)}
type=${n&&this.passwordVisible?`text`:this.type}
name=${this.name||l}
placeholder=${this.placeholder||l}
?disabled=${t}
?readonly=${this.readOnly}
?required=${this.required}
minlength=${this.minLength??l}
maxlength=${this.maxLength??l}
pattern=${this.pattern??l}
min=${this.min??l}
max=${this.max??l}
step=${this.step??l}
autocomplete=${this.autocomplete??l}
inputmode=${this.inputmode??l}
aria-label=${this.aria.label??l}
aria-description=${this.aria.description??l}
aria-describedby=${a??l}
aria-invalid=${this.invalid||this.aria.attr(`aria-invalid`)===`true`?`true`:l}
@input=${this.handleInput}
@change=${this.handleChange}
/>
${r?g`<button
part="clear-button"
type="button"
class="action"
aria-label=${this.clearLabel??e(`input.clear`)}
@click=${this.clear}
>
${Vt}
</button>`:l}
${n?g`<button
part="password-toggle"
type="button"
class="action"
aria-label=${i}
?disabled=${t}
@click=${()=>this.passwordVisible=!this.passwordVisible}
>
${this.passwordVisible?zt:Zt}
</button>`:l}
${this.showCharCount?g`<span id=${this.countId} class="count" part="count"
>${this.maxLength!=null&&this.maxLength>=0?`${this.value.length} / ${this.maxLength}`:this.value.length}</span
>`:l}
${this.slots.test(`suffix`)?g`<span class="addon end" part="suffix"
><slot name="suffix"></slot
></span>`:l}
</div>`}},I([d({attribute:!1})],X.prototype,`value`,void 0),I([d({attribute:`value`})],X.prototype,`defaultValue`,void 0),I([d({reflect:!0})],X.prototype,`type`,void 0),I([d({reflect:!0})],X.prototype,`variant`,void 0),I([d({reflect:!0})],X.prototype,`size`,void 0),I([d({type:Boolean,reflect:!0})],X.prototype,`invalid`,void 0),I([d()],X.prototype,`placeholder`,void 0),I([d({type:Boolean,reflect:!0,attribute:`readonly`})],X.prototype,`readOnly`,void 0),I([d({type:Number,attribute:`minlength`})],X.prototype,`minLength`,void 0),I([d({type:Number,attribute:`maxlength`})],X.prototype,`maxLength`,void 0),I([d()],X.prototype,`pattern`,void 0),I([d()],X.prototype,`min`,void 0),I([d()],X.prototype,`max`,void 0),I([d()],X.prototype,`step`,void 0),I([d()],X.prototype,`autocomplete`,void 0),I([d()],X.prototype,`inputmode`,void 0),I([d({type:Boolean,reflect:!0})],X.prototype,`clearable`,void 0),I([d({attribute:`clear-label`})],X.prototype,`clearLabel`,void 0),I([d({type:Boolean,attribute:`show-char-count`})],X.prototype,`showCharCount`,void 0),I([d({attribute:`show-password-label`})],X.prototype,`showPasswordLabel`,void 0),I([d({attribute:`hide-password-label`})],X.prototype,`hidePasswordLabel`,void 0),I([v()],X.prototype,`passwordVisible`,void 0),I([y(`input`)],X.prototype,`input`,void 0)})))()}function Ca(e){if(!e.trim())return{status:`empty`};try{return JSON.parse(e),{status:`valid`}}catch(e){return{status:`invalid`,error:e instanceof Error?e.message:String(e)}}}function wa(e,t){let a=Math.min(10,Math.max(0,Math.trunc(t)||0));if(a>0)return i(e,n(e,void 0,{tabSize:a,insertSpaces:!0,eol:`
`}));let o=r(e,!0),s=[];for(;o.getPosition()<e.length;){o.scan();let t=o.getTokenOffset();s.push(e.slice(t,t+o.getTokenLength()))}return s.join(``)}var Z;function Ta(){return(Ta=e((()=>{b(),D(),S(),F(),A(),M(),kn(),Bn(),ln(),Vn(),u(),m(),p(),Ve(),t(),Z=class e extends yn{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.rows=8,this.hideToolbar=!1,this.indent=2,this.invalid=!1,this.readOnly=!1,this.placeholder=``,this.focused=!1,this.locale=new w(this),this.aria=new x(this,()=>this.labels),this.dirty=!1}static{this.tagName=`minerva-json-field`}static{this.shadowRootOptions={...yn.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[E,f`
:host{
display: block;
width: 100%;
min-width: 0;
}
`,P(rn),P(cn),P(bn),f`

.toolbar .iconButton{
min-height: 0;
}
.status > svg{
width: 16px;
height: 16px;
}
`]}focus(e){this.textarea?.focus(e)}blur(){this.textarea?.blur()}formatValue(){Ca(this.value).status===`valid`&&(this.value=wa(this.value,this.indent))}getFormValue(){return this.value}getValidity(){let e=this.textarea,t=Ca(this.value);return t.status===`invalid`?{flags:{badInput:!0},message:`${this.invalidLabel??this.locale.t(`jsonField.invalid`)}: ${t.error}`,anchor:e}:this.required&&t.status===`empty`?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:e}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),k&&t.has(`indent`)&&(this.indent<0||this.indent>10)&&C(e.tagName,`indent (${this.indent}) is clamped to 0..10.`)}get locked(){return this.isDisabled||this.readOnly}formatNow(){if(this.locked||Ca(this.value).status!==`valid`)return;let e=wa(this.value,this.indent);e!==this.value&&(this.dirty=!0,this.value=e,this.emit(`minerva-input`,{value:e}),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e}))}handleInput(){this.locked||(this.dirty=!0,this.value=String(this.textarea.value),this.emit(`minerva-input`,{value:this.value}))}handleChange(){this.value=String(this.textarea.value),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}hookStates(){let e=!this.focused&&Ca(this.value).status===`invalid`;return{disabled:this.isDisabled,invalid:e||this.invalid,readonly:this.readOnly,required:this.required}}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.focused?{status:`empty`}:Ca(this.value),r=n.status===`invalid`,i=r||this.invalid,a=this.locked||!this.value.trim(),o=n.status===`valid`?this.validLabel??e(`jsonField.valid`):n.status===`invalid`?`${this.invalidLabel??e(`jsonField.invalid`)}: ${n.error}`:``,s=[this.aria.description,r?o:void 0].filter(Boolean).join(` `);return g`<div class="root" part="root">
      ${this.hideToolbar?l:g`<div class="toolbar" part="toolbar">
              <button
                part="format-button"
                type="button"
                class=${_({iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,disabled:a})}
                ?disabled=${a}
                tabindex=${a?`-1`:`0`}
                aria-label=${this.formatLabel??e(`jsonField.format`)}
                @click=${this.formatNow}
              >
                ${At}
              </button>
            </div>`}
      <textarea
        part="input"
        class=${_({textarea:!0,outline:!0,medium:!0,invalid:i})}
        style="resize: none"
        rows=${this.rows}
        spellcheck="false"
        .value=${Ke(this.value)}
        name=${this.name||l}
        placeholder=${this.placeholder||l}
        ?disabled=${t}
        ?readonly=${this.readOnly}
        ?required=${this.required}
        aria-label=${this.aria.label??l}
        aria-description=${s||l}
        aria-invalid=${i?`true`:l}
        @input=${this.handleInput}
        @change=${this.handleChange}
        @focus=${()=>this.focused=!0}
        @blur=${()=>this.focused=!1}
      ></textarea>
      <div
        part="status"
        role="status"
        aria-live="polite"
        class=${_({status:!0,statusInvalid:r})}
      >
        ${n.status===`valid`?g`${Qe}<span>${o}</span>`:n.status===`invalid`?g`${gt}<span>${o}</span>`:l}
      </div>
    </div>`}},I([d({attribute:!1})],Z.prototype,`value`,void 0),I([d({attribute:`value`})],Z.prototype,`defaultValue`,void 0),I([d({type:Number})],Z.prototype,`rows`,void 0),I([d({type:Boolean,attribute:`hide-toolbar`})],Z.prototype,`hideToolbar`,void 0),I([d({type:Number})],Z.prototype,`indent`,void 0),I([d({type:Boolean,reflect:!0})],Z.prototype,`invalid`,void 0),I([d({type:Boolean,reflect:!0,attribute:`readonly`})],Z.prototype,`readOnly`,void 0),I([d()],Z.prototype,`placeholder`,void 0),I([d({attribute:`format-label`})],Z.prototype,`formatLabel`,void 0),I([d({attribute:`valid-label`})],Z.prototype,`validLabel`,void 0),I([d({attribute:`invalid-label`})],Z.prototype,`invalidLabel`,void 0),I([v()],Z.prototype,`focused`,void 0),I([y(`textarea`)],Z.prototype,`textarea`,void 0)})))()}function Ea(e){if(!e)return[];try{let t=JSON.parse(e);if(Array.isArray(t))return t.filter(e=>e&&typeof e==`object`).map(e=>({id:typeof e.id==`string`?e.id:``,key:String(e.key??``),value:String(e.value??``)}));if(t&&typeof t==`object`)return Object.entries(t).map(([e,t])=>({id:``,key:e,value:typeof t==`string`?t:JSON.stringify(t)}))}catch{}return[]}var Da,Oa;function ka(){return(ka=e((()=>{b(),D(),S(),F(),Sn(),A(),M(),kn(),Bn(),Gr(),sa(),tn(),mr(),u(),m(),He(),Da=0,Oa=class e extends yn{constructor(...e){super(...e),this.value=[],this.defaultValue=[],this.editorId=`kv-${Da++}`,this.nextId=0,this.dirty=!1,this.pendingFocus=null,this.locale=new w(this),this.aria=new x(this,()=>this.labels)}static{this.tagName=`minerva-key-value-editor`}static{this.dependencies=[H,oa,pr]}static{this.styles=[E,f`
:host{
display: block;
width: 100%;
min-width: 0;
}
`,P(cn),P(In),f`

.key{
--textarea-min-height: var(
--key-value-editor-control-height,
var(--control-height-sm)
);
}
`]}focus(e){(this.renderRoot.querySelector(`minerva-textarea`)??this.renderRoot.querySelector(`minerva-button`))?.focus(e)}getFormValue(){return JSON.stringify(this.value.map(({key:e,value:t})=>({key:e,value:t})))}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.renderRoot.querySelector(`minerva-button`)??null}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=Ea(e))}willUpdate(t){if(t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),t.has(`value`)&&(this.value.some(e=>!e.id)&&(this.value=this.value.map(e=>e.id?e:{...e,id:this.newId()})),k)){let t=this.value.map(e=>e.id);new Set(t).size!==t.length&&C(e.tagName,`entries have duplicate ids: rows are tracked by id, make them unique.`)}}updated(e){super.updated(e);let t=this.pendingFocus;if(!t)return;this.pendingFocus=null;let n=e=>this.value.some(t=>t.id===e),r=e=>Array.from(this.renderRoot.querySelectorAll(`[data-entry-id]`)).find(t=>e!==void 0&&t.dataset.entryId===e)??null;if(t.kind===`add`){let e=n(t.id)?r(t.id)?.querySelector(`.key`):null;e&&e.updateComplete.then(()=>e.focus())}else n(t.id)||(r(t.nextId)?.querySelector(`.remove`)??this.renderRoot.querySelector(`minerva-button`))?.focus()}newId(){let e;do e=`${this.editorId}-${this.nextId++}`;while(this.value.some(t=>t.id===e));return e}commit(e){this.dirty=!0,this.value=e,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e})}add(){if(this.isDisabled)return;let e=this.newId();this.pendingFocus={kind:`add`,id:e},this.commit([...this.value,{id:e,key:``,value:``}])}removeEntry(e){if(this.isDisabled)return;let t=this.value.findIndex(t=>t.id===e),n=this.value[t+1]??this.value[t-1];this.pendingFocus={kind:`remove`,id:e,nextId:n?.id},this.commit(this.value.filter(t=>t.id!==e))}handleInput(e,t,n){if(e.stopPropagation(),this.isDisabled)return;let r=e.target.value;this.dirty=!0,this.value=this.value.map(e=>e.id===t?{...e,[n]:r}:e),this.emit(`minerva-input`,{value:this.value})}handleFieldChange(e){e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}isRowInvalid(e){let t=this.errors?.[e.id];return!!(t?.key||t?.value)}renderField(e,t,n,r){let i=this.errors?.[e.id]?.[n];return g`<minerva-form-control
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
</minerva-form-control>`}hookStates(){return{disabled:this.isDisabled}}render(){let{t:e}=this.locale,t=this.keyLabel??e(`keyValueEditor.key`),n=this.valueLabel??e(`keyValueEditor.value`),r=this.removeLabel??e(`keyValueEditor.remove`),i=this.isDisabled,a=this.aria.label;return g`<div
class="root"
part="root"
role=${a?`group`:l}
aria-label=${a??l}
aria-description=${this.aria.description??l}
>
${Be(this.value,e=>e.id,(e,a)=>g`<div
class="row"
part=${mn(`row`,{invalid:this.isRowInvalid(e)})}
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
${Vt}
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
<span slot="start">${vt}</span>
<span>${this.addLabel??e(`keyValueEditor.add`)}</span>
</minerva-button>
</div>`}},I([d({attribute:!1})],Oa.prototype,`value`,void 0),I([d({attribute:`value`,converter:{fromAttribute:e=>Ea(e)}})],Oa.prototype,`defaultValue`,void 0),I([d({attribute:`key-label`})],Oa.prototype,`keyLabel`,void 0),I([d({attribute:`value-label`})],Oa.prototype,`valueLabel`,void 0),I([d({attribute:`add-label`})],Oa.prototype,`addLabel`,void 0),I([d({attribute:`remove-label`})],Oa.prototype,`removeLabel`,void 0),I([d({attribute:!1})],Oa.prototype,`errors`,void 0)})))()}var Aa,ja;function Ma(){return(Ma=e((()=>{b(),D(),dn(),A(),j(),M(),On(),u(),m(),p(),Aa=class e extends T{constructor(...e){super(...e),this.density=`default`,this.bordered=!1,this.noDividers=!1,this.internals=qt(this)}static{this.tagName=`minerva-list`}static{this.styles=[E,f`
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
`,P(Xt)]}connectedCallback(){super.connectedCallback(),lt(this,this.internals,{role:`list`})}updated(){if(k){let t=Array.from(this.children).find(e=>e.localName!==ja.tagName);t&&C(e.tagName,`children should be <minerva-list-item> elements (found <${t.localName}>): other elements break the list semantics.`)}}render(){return g`<div
part="root"
class=${_({list:!0,compact:this.density===`compact`,comfortable:this.density===`comfortable`,bordered:this.bordered,dividers:!this.noDividers})}
>
<slot @slotchange=${()=>this.requestUpdate()}></slot>
</div>`}},I([d({reflect:!0})],Aa.prototype,`density`,void 0),I([d({type:Boolean,reflect:!0})],Aa.prototype,`bordered`,void 0),I([d({type:Boolean,reflect:!0,attribute:`no-dividers`})],Aa.prototype,`noDividers`,void 0),ja=class extends T{constructor(...e){super(...e),this.primary=``,this.secondary=``,this.internals=qt(this),this.slots=new O(this)}static{this.tagName=`minerva-list-item`}static{this.styles=[E,P(Xt),f`
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
`]}connectedCallback(){super.connectedCallback(),lt(this,this.internals,{role:`listitem`})}render(){let e=this.secondary!==``||this.slots.test(`secondary`);return g`<div part="root" class="item">
${this.slots.test(`icon`)?g`<div part="icon" class="icon" aria-hidden="true">
<slot name="icon"></slot>
</div>`:l}
<div class="content">
<div part="label" class="primary"><slot>${this.primary}</slot></div>
${e?g`<div part="description" class="secondary">
<slot name="secondary">${this.secondary}</slot>
</div>`:l}
</div>
${this.slots.test(`actions`)?g`<div part="actions" class="actions">
<slot name="actions"></slot>
</div>`:l}
</div>`}},I([d()],ja.prototype,`primary`,void 0),I([d()],ja.prototype,`secondary`,void 0)})))()}var Na,Pa;function Fa(){return(Fa=e((()=>{D(),F(),A(),M(),En(),lr(),u(),m(),p(),Na=[`small`,`medium`,`large`],Pa=class e extends T{constructor(...e){super(...e),this.size=`medium`,this.locale=new w(this)}static{this.tagName=`minerva-loading-state`}static{this.dependencies=[gr]}static{this.styles=[E,f`
:host{
display: block;
}
`,P(zn)]}hookStates(){return{size:this.size}}updated(){k&&!Na.includes(this.size)&&C(e.tagName,`unknown size "${this.size}" (expected ${Na.join(`, `)}).`)}render(){return g`<div
part="root"
class=${_({loadingState:!0,[this.size]:!0})}
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
</div>`}},I([d()],Pa.prototype,`label`,void 0),I([d({reflect:!0})],Pa.prototype,`size`,void 0)})))()}function Ia(e){let t=Array.from(e.childNodes).filter(e=>!Ka(e)&&(e.nodeType!==1||e.getAttribute(`slot`)!==`icon`));return t.every(e=>e.nodeType===3)?t.map(e=>e.textContent??``).join(``).trim():t.map(e=>e.cloneNode(!0))}function La(e){return{value:Ya(e,`value`)??Ja(e),label:Ia(e),textValue:Ya(e,`text-value`),shortcut:Ya(e,`shortcut`),disabled:Xa(e,`disabled`),closeOnSelect:Xa(e,`close-on-select`),element:e}}function Ra(e,t=`e`){let n=[],r=null;return Array.from(e.children).forEach((e,i)=>{let a=`${t}-${i}`;switch(e.localName!==Q.tagName&&(r=null),e.localName){case Ba.tagName:{let t=Ra(e,a),r=e.querySelector(`:scope > [slot='icon']`);n.push({key:Ya(e,`value`)||Ja(e),label:Ia(e),textValue:Ya(e,`text-value`),icon:r?r.cloneNode(!0):void 0,shortcut:Ya(e,`shortcut`),disabled:Xa(e,`disabled`),closeOnSelect:!Xa(e,`keep-open`)&&void 0,children:t.length?t:void 0,element:e});break}case Va.tagName:n.push({type:`checkbox`,key:Ya(e,`value`)||Ja(e),label:Ia(e),textValue:Ya(e,`text-value`),shortcut:Ya(e,`shortcut`),disabled:Xa(e,`disabled`),checked:Xa(e,`checked`),closeOnSelect:Xa(e,`close-on-select`),element:e});break;case Q.tagName:{r||(r={type:`radio-group`,key:a,items:[]},n.push(r));let t=La(e);r.items.push(t),Xa(e,`checked`)&&(r.value=t.value);break}case Ua.tagName:n.push({type:`separator`,key:a});break;case Wa.tagName:n.push({type:`label`,key:a,label:Ia(e)});break;case Ha.tagName:{let t=Array.from(e.children),r=Ya(e,`label`);if(t.length>0&&t.every(e=>e.localName===Q.tagName)){let i=t.map(La);n.push({type:`radio-group`,key:a,label:r,items:i,value:i.find(e=>e.element?.hasAttribute(`checked`))?.value,closeOnSelect:Xa(e,`close-on-select`),element:e})}else n.push({type:`group`,key:a,label:r??``,items:Ra(e,a)});break}}}),n}var za,Ba,Va,Q,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa;function Za(){return(Za=e((()=>{A(),u(),m(),za=f`
:host{
display: none !important;
}
`,Ba=class extends T{constructor(...e){super(...e),this.value=``,this.disabled=!1,this.shortcut=``,this.textValue=``,this.keepOpen=!1}static{this.tagName=`minerva-menu-item`}static{this.styles=za}},I([d({reflect:!0})],Ba.prototype,`value`,void 0),I([d({type:Boolean,reflect:!0})],Ba.prototype,`disabled`,void 0),I([d()],Ba.prototype,`shortcut`,void 0),I([d({attribute:`text-value`})],Ba.prototype,`textValue`,void 0),I([d({type:Boolean,attribute:`keep-open`})],Ba.prototype,`keepOpen`,void 0),Va=class extends T{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1,this.shortcut=``,this.textValue=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-checkbox-item`}static{this.styles=za}},I([d({reflect:!0})],Va.prototype,`value`,void 0),I([d({type:Boolean,reflect:!0})],Va.prototype,`checked`,void 0),I([d({type:Boolean,reflect:!0})],Va.prototype,`disabled`,void 0),I([d()],Va.prototype,`shortcut`,void 0),I([d({attribute:`text-value`})],Va.prototype,`textValue`,void 0),I([d({type:Boolean,attribute:`close-on-select`})],Va.prototype,`closeOnSelect`,void 0),Q=class extends T{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1,this.shortcut=``,this.textValue=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-radio-item`}static{this.styles=za}},I([d({reflect:!0})],Q.prototype,`value`,void 0),I([d({type:Boolean,reflect:!0})],Q.prototype,`checked`,void 0),I([d({type:Boolean,reflect:!0})],Q.prototype,`disabled`,void 0),I([d()],Q.prototype,`shortcut`,void 0),I([d({attribute:`text-value`})],Q.prototype,`textValue`,void 0),I([d({type:Boolean,attribute:`close-on-select`})],Q.prototype,`closeOnSelect`,void 0),Ha=class extends T{constructor(...e){super(...e),this.label=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-group`}static{this.styles=za}},I([d()],Ha.prototype,`label`,void 0),I([d({type:Boolean,attribute:`close-on-select`})],Ha.prototype,`closeOnSelect`,void 0),Ua=class extends T{static{this.tagName=`minerva-menu-separator`}static{this.styles=za}},Wa=class extends T{static{this.tagName=`minerva-menu-label`}static{this.styles=za}},Ga=[Ba.tagName,Va.tagName,Q.tagName,Ha.tagName,Ua.tagName,Wa.tagName],Ka=e=>e.nodeType===1&&Ga.includes(e.localName),qa=e=>!!(e.nodeType===1?e:e.parentElement)?.closest(Ga.join(`,`)),Ja=e=>Array.from(e.childNodes).filter(e=>!Ka(e)).map(e=>e.textContent??``).join(``).trim(),Ya=(e,t)=>e.getAttribute(t)??void 0,Xa=(e,t)=>e.hasAttribute(t)})))()}var Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo;function uo(){return(uo=e((()=>{D(),S(),it(),Sn(),A(),M(),nr(),ar(),tr(),cr(),sr(),sn(),Za(),u(),m(),p(),se(),ne(),He(),Qa=100,$a=`[data-minerva-menu-item]`,eo={mainAxis:4,crossAxis:-5},to=e=>e.hasAttribute(`data-disabled`),no=e=>e.dataset.textValue??e.querySelector(`.text`)?.textContent??e.textContent??``,ro=e=>e?Array.from(e.querySelectorAll($a)):[],io=e=>Ae(e,{preventScroll:!0}),ao=e=>typeof e==`string`?e:void 0,oo=e=>e.join(`/`),so=0,co=class{constructor(e,t,n){this.grace=Ie(),this.typeahead=ve(),this.lastTypeahead=0,this.element=null,this.uid=null,this.path=[],this.position=new rr(e,()=>n===0?{placement:t.rootPlacement(),offset:t.rootOffset(),padding:8}:{placement:t.direction===`rtl`?`left-start`:`right-start`,offset:eo,padding:8}),this.layer=new Qn(e,()=>n===0?t.rootLayerOptions():t.subLayerOptions(n)),this.scope=new or(e,()=>({trapped:n===0&&t.isModal,autoFocus:!1,restoreFocus:!1}))}clearTimer(){clearTimeout(this.openTimer),this.openTimer=void 0}},lo=class extends T{constructor(...e){super(...e),this.items=[],this.open=!1,this.size=`medium`,this.keepOpen=!1,this.disabled=!1,this.nonModal=!1,this.noLoop=!1,this.declarative=[],this.openPath=[],this.exiting=[],this.stored=new Map,this.levels=[],this.modalController=new $n(this),this.observer=null,this.intent=`content`,this.subIntent=`none`,this.restoreOverride=void 0,this.reason=`outside`,this.direction=`ltr`,this.onPanelKeyDown=e=>{let t=e.currentTarget,n=this.panelDepth(t),r=this.levels[n],{key:i}=e;if(i===`Tab`){e.preventDefault(),this.closeWithTab(e.shiftKey);return}if(e.defaultPrevented||!r||e.altKey||e.ctrlKey||e.metaKey)return;let a=ro(t),o=e.composedPath()[0],s=a.find(e=>e===o)??null,ee=s?a.indexOf(s):-1,te=this.direction===`rtl`,c=te?`ArrowLeft`:`ArrowRight`,ne=te?`ArrowRight`:`ArrowLeft`;if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(i)){e.preventDefault(),r.typeahead.reset();let t=pe({currentIndex:ee,count:a.length,key:i,orientation:`vertical`,loop:!this.noLoop,isDisabled:e=>to(a[e])});t!==null&&io(a[t]);return}if(i===c&&s?.hasAttribute(`aria-haspopup`)){e.preventDefault(),to(s)||this.openSubmenu(n,s.dataset.uid??``,`first`);return}if(i===ne&&n>0){e.preventDefault(),io(this.parentItem(n)),this.closeSubmenu(n);return}if(i.length===1){let t=Date.now();t-r.lastTypeahead>500&&r.typeahead.reset();let n=r.typeahead.getBuffer()!==``;if(i!==` `||n){r.lastTypeahead=t,e.preventDefault();let n=r.typeahead.search(i,a.map(e=>({text:no(e),disabled:to(e)})),ee);n!==-1&&io(a[n]);return}}(i===`Enter`||i===` `)&&s&&(e.preventDefault(),to(s)||this.activateItem(s,`first`))},this.itemActions=new Map,this.highlightedItem=null,this.onPanelFocusIn=e=>{let t=e.composedPath()[0];t.matches?.($a)&&this.highlightItem(t,!0)},this.onPanelFocusOut=e=>{let t=e.composedPath()[0];t.matches?.($a)&&this.highlightItem(t,!1)}}static{this.styles=[E,er,f`
:host{
display: contents;
}
`,P(Ze)]}onRootPointerDownOutside(e){}get isModal(){return!this.nonModal}get entries(){return this.items.length?this.items:this.declarative}show(){this.open=!0}hide(){this.open=!1}requestOpenChange(e,t){if(e===this.open)return!0;let n=this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0});return n&&(this.open=e,e||this.closeLevels()),n}openWith(e,t){this.intent=e,this.requestOpenChange(!0,t)}closeAll(e){this.requestOpenChange(!1,e)}closeWithTab(e){let t=this.restoreTarget(),n;if(t){let r=o().find(e=>e.element===this.levels[0]?.element)?.parent??document.body,i=me(r).filter(e=>e===t||!c(this,e)||!this.isPanelNode(e)),a=i.indexOf(t);n=a===-1?t:i[e?a-1:a+1]??t}this.restoreOverride=n??void 0,this.requestOpenChange(!1,`tab`)&&io(n)}isPanelNode(e){return this.levels.some(t=>c(t.element,e))}level(e){return this.levels[e]??=new co(this,this,e),this.levels[e]}parentItem(e){let t=this.openPath[e-1];return t?this.renderRoot.querySelector(`[data-uid="${t}"]`)??null:null}rootLayerOptions(){return{disableOutsidePointerEvents:this.isModal,branches:()=>this.branches(),onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:e=>{this.reason=`outside`,this.onRootPointerDownOutside(e),!e.defaultPrevented&&(!this.isModal||e.button===2)&&(this.restoreOverride=null)},onFocusOutside:e=>(this.reason=`focus-outside`,!this.isModal||(e.preventDefault(),!1)),onDismiss:()=>this.closeAll(this.reason)}}subLayerOptions(e){return{parent:this.levels[e-1]?.element??void 0,branches:()=>[this.parentItem(e)],onEscapeKeyDown:()=>{io(this.parentItem(e))},onDismiss:()=>this.closeSubmenu(e)}}closeLevels(e=0,t=!0){for(let n=this.levels.length-1;n>=e;n--){let e=this.levels[n],r=e.element;r&&(e.clearTimer(),e.grace.clear(),e.typeahead.reset(),e.scope.deactivate(),e.layer.deactivate(),e.position.end(),t&&this.isConnected?this.exit(r,n,e.path):N(r),e.element=null,e.uid=null,n===0&&(this.modalController.deactivate(),this.scheduleRestore()))}}exit(e,t,n){if(e.setAttribute(`data-state`,`closed`),we(e)<=0){N(e);return}let r=++so,i=oo(n);this.exiting=[...this.exiting.filter(e=>oo(e.path)!==i),{id:r,depth:t,path:n}],re(e).then(()=>{this.exiting.some(e=>e.id===r)&&(N(e),this.exiting=this.exiting.filter(e=>e.id!==r))})}clearExiting(){if(this.exiting.length!==0){for(let e of this.exiting)N(this.renderRoot.querySelector(`[data-panel-key="${oo(e.path)}"]`));this.exiting=[]}}scheduleRestore(){let e=this.restoreOverride;this.restoreOverride=void 0;let t=e===void 0?this.restoreTarget():e;t&&setTimeout(()=>{if(this.open||!t.isConnected)return;let e=Me(document);(!e||e===document.body||!e.isConnected||(this.shadowRoot?.contains(e)??!1))&&io(t)},0)}syncLevels(){let e=this.open&&!this.disabled?this.openPath.length+1:0;this.closeLevels(e);for(let t=0;t<e;t++){let e=t===0?``:this.openPath[t-1],n=this.renderRoot.querySelector(`[data-panel-key="${oo(this.openPath.slice(0,t))}"]`);if(!n)return;let r=this.level(t);if(r.element===n&&r.uid===e)continue;r.element&&this.closeLevels(t);let i=t===0?this.anchorElement():this.parentItem(t);if(!i)return;r.element=n,r.uid=e,r.path=this.openPath.slice(0,t),n.setAttribute(`data-state`,`open`),Mt(n),r.position.start(i,n),t===0&&this.isModal&&this.modalController.activate(this),r.layer.activate(n),r.scope.activate(n);let a=t===0?this.intent:this.subIntent;t===0?this.intent=`content`:this.subIntent=`none`,this.focusIntent(n,a)}}focusIntent(e,t){if(t===`none`)return;let n=ro(e).filter(e=>!to(e));io((t===`first`?n[0]:t===`last`?n[n.length-1]:void 0)??e)}reanchor(){let e=this.levels[0],t=this.anchorElement();e?.element&&t&&e.position.start(t,e.element)}openSubmenu(e,t,n){if(this.openPath[e]===t&&this.levels[e+1]?.element){n===`first`&&io(ro(this.levels[e+1].element).find(e=>!to(e)));return}this.subIntent=n,this.openPath=[...this.openPath.slice(0,e),t]}closeSubmenu(e){this.openPath.length<e||(this.closeLevels(e),this.openPath=this.openPath.slice(0,e-1))}stateOf(e,t){return this.stored.has(e)?this.stored.get(e):t}isChecked(e){return e.element?e.element.hasAttribute(`checked`):this.stateOf(e.key,e.checked??e.defaultChecked??!1)}radioValue(e){return e.items.some(e=>e.element)?e.items.find(e=>e.element?.hasAttribute(`checked`))?.value:this.stateOf(e.key,e.value??e.defaultValue)}activateAction(e){this.emit(`minerva-select`,{value:e.key,item:e},{cancelable:!0})&&(e.closeOnSelect??!this.keepOpen)&&this.closeAll(`select`)}toggleCheckbox(e){let t=!this.isChecked(e);this.emit(`minerva-change`,{value:e.key,checked:t,item:e},{cancelable:!0})&&(e.element?e.element.toggleAttribute(`checked`,t):this.stored.set(e.key,t),this.requestUpdate()),e.closeOnSelect&&this.closeAll(`select`)}chooseRadio(e,t){let n=this.radioValue(e);if(t.value!==n&&this.emit(`minerva-change`,{value:t.value,group:e.key,item:t},{cancelable:!0})){if(t.element)for(let n of e.items)n.element?.toggleAttribute(`checked`,n===t);else this.stored.set(e.key,t.value);this.requestUpdate()}(e.closeOnSelect||t.closeOnSelect)&&this.closeAll(`select`)}panelDepth(e){return Number(e.dataset.level??0)}activateItem(e,t){this.itemActions.get(e.dataset.uid??``)?.(t)}highlightItem(e,t){t?this.highlightedItem=e.dataset.uid??null:this.highlightedItem===e.dataset.uid&&(this.highlightedItem=null),e.toggleAttribute(`data-highlighted`,t),e.setAttribute(`part`,mn(`item`,{state:e.dataset.state,highlighted:t,disabled:e.hasAttribute(`data-disabled`),expanded:e.hasAttribute(`data-expanded`)}))}onItemClick(e){let t=e.currentTarget;to(t)||this.activateItem(t,`none`)}onItemPointerMove(e){let t=e.currentTarget,n=t.closest(`[data-level]`);if(!n)return;let r=this.panelDepth(n),i=this.levels[r];if(!i||e.pointerType===`touch`||i.grace.isInGraceArea({x:e.clientX,y:e.clientY}))return;i.grace.clear();let a=Me(document);if(to(t)){a!==n&&io(n);return}a!==t&&io(t);let o=t.dataset.uid??``;t.hasAttribute(`aria-haspopup`)&&this.openPath[r]!==o&&i.openTimer===void 0&&(i.openTimer=setTimeout(()=>{i.openTimer=void 0,this.open&&this.openSubmenu(r,o,`none`)},100))}onItemPointerLeave(e){if(e.pointerType===`touch`)return;let t=e.currentTarget,n=t.closest(`[data-level]`);if(!n)return;let r=this.panelDepth(n),i=this.levels[r];if(!i)return;i.clearTimer();let a=this.levels[r+1]?.element;if(t.hasAttribute(`aria-haspopup`)&&this.openPath[r]===t.dataset.uid&&a){let t=a.getAttribute(`data-side`)??`right`;i.grace.start({x:e.clientX,y:e.clientY},a.getBoundingClientRect(),t);return}i.grace.isInGraceArea({x:e.clientX,y:e.clientY})||Me(document)===t&&io(n)}readEntries(){this.declarative=Ra(this)}connectedCallback(){super.connectedCallback(),this.readEntries(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(e=>{e.some(e=>qa(e.target)||Array.from(e.addedNodes).some(qa)||Array.from(e.removedNodes).some(e=>e.nodeType===1&&e.localName.startsWith(`minerva-menu-`)))&&this.readEntries()}),this.observer.observe(this,{subtree:!0,childList:!0,attributes:!0,characterData:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.closeLevels(0,!1),this.clearExiting()}willUpdate(e){if(e.has(`items`)&&(this.stored=new Map,k&&this.checkKeys(this.items)),e.has(`open`)&&this.open){let e=this.anchorElement(),t=e&&`nodeType`in e?e:this;this.direction=this.isConnected?ae(t):`ltr`}e.has(`open`)&&!this.open&&(this.openPath=[]);let t=this.open&&!this.disabled?this.openPath.length+1:0,n=this.levels.findIndex((e,n)=>e.element!==null&&(n>=t||oo(e.path)!==oo(this.openPath.slice(0,n))));if(n!==-1&&this.closeLevels(n),this.exiting.length){let e=this.openKeys();this.exiting.some(t=>e.has(oo(t.path)))&&(this.exiting=this.exiting.filter(t=>!e.has(oo(t.path))))}}openKeys(){return!this.open||this.disabled?new Set:new Set([[],...this.openPath.map((e,t)=>this.openPath.slice(0,t+1))].map(oo))}checkKeys(e,t=new Set){for(let n of e)if(!(`type`in n&&n.type===`separator`)){if(`type`in n&&(n.type===`group`||n.type===`label`)){n.type===`group`&&this.checkKeys(n.items,t);continue}t.has(n.key)&&C(this.constructor.tagName,`duplicate item key "${n.key}": keys must be unique (checkbox / radio state and minerva-select values are keyed by it).`),t.add(n.key),!(`type`in n)&&n.children&&this.checkKeys(n.children,t)}}hookStates(){let e=this.levels[0]?.position.running?this.levels[0].position.placement:this.rootPlacement();return{state:this.open&&!this.disabled?`open`:`closed`,disabled:this.disabled,size:this.size,...De(e),placement:e}}updated(e){this.syncTrigger(),(e.has(`open`)||e.has(`openPath`)||e.has(`disabled`))&&this.syncLevels()}renderPanels(){let e=this.open&&!this.disabled;if(!e&&this.exiting.length===0)return l;this.itemActions.clear();let t=[];e&&(t.push({key:``,depth:0,path:[],state:`open`}),this.openPath.forEach((e,n)=>{let r=this.openPath.slice(0,n+1);t.push({key:oo(r),depth:n+1,path:r,state:`open`})}));let n=new Set(t.map(e=>e.key));for(let e of this.exiting){let r=oo(e.path);n.has(r)||(n.add(r),t.push({key:r,depth:e.depth,path:e.path,state:`closed`}))}return Be(t,e=>e.key,e=>this.renderPanelAt(e.depth,e.path,e.state))}renderPanelAt(e,t,n){let r=this.entries,i=e===0?this.rootLabel():void 0;for(let[e,n]of t.entries()){let t=this.findSubmenu(r,n,`${e}:`);if(!t)return l;r=t.children??[],i=ao(t.label)??t.textValue}return this.renderPanel(e,t.at(-1)??``,r,i,n,oo(t))}findSubmenu(e,t,n){for(let[r,i]of e.entries()){let e=`${n}${r}`;if(`type`in i){if(i.type===`group`){let n=this.findSubmenu(i.items,t,`${e}.`);if(n)return n}continue}if(i.children?.length&&e===t)return i}return null}renderPanel(e,t,n,r,i,a){let o=e===0?``:`item-${t}`;return g`<div
part="content"
id=${e===0?`menu`:`menu-${t}`}
class=${_({content:!0,small:this.size===`small`})}
popover="manual"
role="menu"
aria-orientation="vertical"
aria-label=${e===0?r??l:l}
aria-labelledby=${e>0?o:l}
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
</div>`}renderEntries(e,t,n){return e.map((e,r)=>{let i=`${n}${r}`;if(`type`in e)switch(e.type){case`separator`:return g`<div
role="separator"
aria-orientation="horizontal"
class="separator"
part="separator"
></div>`;case`label`:return g`<div class="label" part="label">${e.label}</div>`;case`group`:{let n=`label-${i.replace(/[:.]/g,`-`)}`;return g`<div
role="group"
part="group"
aria-labelledby=${n}
>
<div id=${n} class="label" part="label">${e.label}</div>
${this.renderEntries(e.items,t,`${i}.`)}
</div>`}case`checkbox`:return this.renderCheckbox(e,i);case`radio-group`:return this.renderRadioGroup(e,i)}return this.renderAction(e,t,i)})}renderItem(e){let{uid:t,disabled:n=!1,submenu:r}=e;this.itemActions.set(t,e.activate);let i=e.textValue??ao(e.label),a={state:e.checked===void 0?void 0:e.checked?`checked`:`unchecked`,highlighted:this.highlightedItem===t,disabled:n,expanded:r?.open};return g`<div
id=${`item-${t}`}
part=${mn(`item`,a)}
role=${e.role}
tabindex="-1"
class="item"
data-minerva-menu-item=""
data-uid=${t}
data-text-value=${i??l}
data-state=${a.state??l}
?data-highlighted=${a.highlighted}
?data-disabled=${n}
?data-expanded=${r?.open}
aria-disabled=${n?`true`:l}
aria-checked=${e.checked===void 0?l:String(e.checked)}
aria-haspopup=${r?`menu`:l}
aria-expanded=${r?String(r.open):l}
aria-controls=${r?.open?`menu-${t}`:l}
@click=${this.onItemClick}
@pointermove=${this.onItemPointerMove}
@pointerleave=${this.onItemPointerLeave}
>
${e.indicator??l}
${e.icon?g`<span class="icon" part="icon" aria-hidden="true"
>${e.icon}</span
>`:l}
<span class="text" part="item-label">${e.label}</span>
${e.shortcut?g`<span class="shortcut" part="shortcut">${e.shortcut}</span>`:l}
${e.trailing??l}
</div>`}renderAction(e,t,n){if(e.children?.length){let r=this.openPath[t]===n&&!e.disabled;return this.renderItem({uid:n,role:`menuitem`,label:e.label,textValue:e.textValue,icon:e.icon,shortcut:e.shortcut,disabled:e.disabled,submenu:{open:r},trailing:g`<span class="chevron" aria-hidden="true"
>${nt}</span
>`,activate:e=>this.openSubmenu(t,n,e)})}return this.renderItem({uid:n,role:`menuitem`,label:e.label,textValue:e.textValue,icon:e.icon,shortcut:e.shortcut,disabled:e.disabled,activate:()=>this.activateAction(e)})}renderCheckbox(e,t){let n=this.isChecked(e);return this.renderItem({uid:t,role:`menuitemcheckbox`,label:e.label,textValue:e.textValue,shortcut:e.shortcut,disabled:e.disabled,checked:n,indicator:g`<span
class="indicator"
part="item-indicator"
aria-hidden="true"
>${n?mt:l}</span
>`,activate:()=>this.toggleCheckbox(e)})}renderRadioGroup(e,t){let n=this.radioValue(e),r=`label-${t.replace(/[:.]/g,`-`)}`,i=e.label!=null&&e.label!==``;return g`<div
role="group"
part="group"
aria-labelledby=${i?r:l}
>
${i?g`<div id=${r} class="label" part="label">${e.label}</div>`:l}
${e.items.map((r,i)=>{let a=r.value===n;return this.renderItem({uid:`${t}.${i}`,role:`menuitemradio`,label:r.label,textValue:r.textValue,shortcut:r.shortcut,disabled:r.disabled,checked:a,indicator:g`<span
class="indicator"
part="item-indicator"
aria-hidden="true"
>${a?g`<span class="dot"></span>`:l}</span
>`,activate:()=>this.chooseRadio(e,r)})})}
</div>`}},I([d({attribute:!1})],lo.prototype,`items`,void 0),I([d({type:Boolean,reflect:!0})],lo.prototype,`open`,void 0),I([d({reflect:!0})],lo.prototype,`size`,void 0),I([d({type:Boolean,attribute:`keep-open`})],lo.prototype,`keepOpen`,void 0),I([d({type:Boolean,reflect:!0})],lo.prototype,`disabled`,void 0),I([d({type:Boolean,reflect:!0,attribute:`non-modal`})],lo.prototype,`nonModal`,void 0),I([d({type:Boolean,attribute:`no-loop`})],lo.prototype,`noLoop`,void 0),I([v()],lo.prototype,`declarative`,void 0),I([v()],lo.prototype,`openPath`,void 0),I([v()],lo.prototype,`exiting`,void 0)})))()}function fo(e,t,n){n===null?e.hasAttribute(t)&&e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}var po,mo;function ho(){return(ho=e((()=>{D(),Za(),uo(),u(),m(),se(),po={mainAxis:6,crossAxis:0},mo=class e extends lo{constructor(...e){super(...e),this.side=`bottom`,this.align=`end`,this.disabledTrigger=null,this.handleKeyDown=e=>{if(!(this.disabled||e.defaultPrevented||!this.fromTrigger(e)))switch(e.key){case`Enter`:case` `:e.preventDefault(),this.open?this.requestOpenChange(!1,`trigger`):this.openWith(`first`,`keyboard`);break;case`ArrowDown`:e.preventDefault(),this.openWith(`first`,`keyboard`);break;case`ArrowUp`:e.preventDefault(),this.openWith(`last`,`keyboard`)}},this.handleClick=e=>{this.disabled||e.defaultPrevented||!this.fromTrigger(e)||(this.open?this.requestOpenChange(!1,`trigger`):this.openWith(e.detail===0?`first`:`content`,`trigger`))}}static{this.tagName=`minerva-menu`}static{this.dependencies=[Ba,Va,Q,Ha,Ua,Wa]}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}anchorElement(){return this.triggerElement()}rootPlacement(){return Ce(this.side,this.align)}rootOffset(){return po}restoreTarget(){return this.triggerElement()}branches(){return[this.triggerElement()]}rootLabel(){let e=this.getAttribute(`aria-label`);if(e)return e;let t=this.triggerElement();return t?.getAttribute(`aria-label`)??(t?.textContent?.trim()||void 0)}syncTrigger(){let e=this.triggerElement();e&&(fo(e,`aria-haspopup`,`menu`),fo(e,`aria-expanded`,String(this.open)),fo(e,`data-state`,this.open?`open`:`closed`),fo(e,`data-disabled`,this.disabled?``:null),this.disabled&&!e.hasAttribute(`disabled`)?(e.setAttribute(`disabled`,``),this.disabledTrigger=e):!this.disabled&&this.disabledTrigger===e&&(e.removeAttribute(`disabled`),this.disabledTrigger=null))}fromTrigger(e){let t=this.triggerElement();return!!t&&e.composedPath().includes(t)}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`click`,this.handleClick)}firstUpdated(t){super.firstUpdated(t),k&&!this.triggerElement()&&C(e.tagName,`no slot="trigger" element: nothing opens the menu (add e.g. <button slot="trigger">).`)}render(){return g`<slot name="trigger"></slot>${this.renderPanels()}`}},I([d({reflect:!0})],mo.prototype,`side`,void 0),I([d({reflect:!0})],mo.prototype,`align`,void 0)})))()}var go,_o,vo,yo,bo;function xo(){return(xo=e((()=>{it(),Za(),uo(),ho(),u(),se(),go=700,_o={mainAxis:2,crossAxis:0},vo={mainAxis:4,crossAxis:0},yo=(e,t,n)=>({contextElement:n,getBoundingClientRect:()=>({x:e,y:t,left:e,top:t,right:e,bottom:t,width:0,height:0})}),bo=class extends lo{constructor(...e){super(...e),this.position=null,this.restoreTo=null,this.areaPointerEvents=null,this.handleContextMenu=e=>{this.disabled||e.defaultPrevented||!this.inArea(e)||(e.preventDefault(),this.clearLongPress(),this.openAtPoint(e.clientX,e.clientY))},this.handleKeyDown=e=>{if(!(this.disabled||e.defaultPrevented||!this.inArea(e))&&(e.key===`ContextMenu`||e.shiftKey&&e.key===`F10`)){let t=this.area();if(!t)return;e.preventDefault();let n=ae(t)===`rtl`;this.openAt({anchor:t,placement:n?`bottom-end`:`bottom-start`,offset:vo})}},this.handlePointerDown=e=>{if(this.disabled||e.pointerType!==`touch`||!this.inArea(e))return;this.clearLongPress();let{clientX:t,clientY:n}=e;this.longPress=setTimeout(()=>{this.longPress=void 0,this.openAtPoint(t,n)},700)},this.handleTouchEnd=e=>{e.pointerType===`touch`&&this.clearLongPress()}}static{this.tagName=`minerva-context-menu`}static{this.dependencies=[Ba,Va,Q,Ha,Ua,Wa]}static{this.styles=[...lo.styles,f`
:host(:not([disabled])) ::slotted(*){
-webkit-touch-callout: none;
}
`]}area(){return Array.from(this.children).find(e=>!Ga.includes(e.localName))??null}anchorElement(){return this.position?.anchor??null}rootPlacement(){return this.position?.placement??`right-start`}rootOffset(){return this.position?.offset??_o}restoreTarget(){return this.restoreTo}branches(){return[]}rootLabel(){return this.getAttribute(`aria-label`)??void 0}onRootPointerDownOutside(e){let t=this.area(),n=e.composedPath()[0];e.button===2&&t&&n instanceof Node&&c(t,n)&&e.preventDefault()}syncTrigger(){let e=this.area();if(!e)return;fo(e,`data-state`,this.open?`open`:`closed`),fo(e,`data-disabled`,this.disabled?``:null);let t=this.open&&this.isModal&&!this.disabled;t&&this.areaPointerEvents===null?(this.areaPointerEvents=e.style.pointerEvents,e.style.pointerEvents=`auto`):!t&&this.areaPointerEvents!==null&&(e.style.pointerEvents=this.areaPointerEvents,this.areaPointerEvents=null)}openAt(e){let t=this.area();if(t){if(!this.open){let e=Me(document);this.restoreTo=e instanceof HTMLElement&&c(t,e)?e:t}if(this.position=e,this.open){this.reanchor();return}this.openWith(`first`,`contextmenu`)}}openAtPoint(e,t){let n=this.area();if(!n)return;let r=ae(n)===`rtl`;this.openAt({anchor:yo(e,t,n),placement:r?`left-start`:`right-start`,offset:_o})}inArea(e){let t=this.area(),n=e.composedPath()[0];return!!t&&n instanceof Node&&c(t,n)}clearLongPress(){clearTimeout(this.longPress),this.longPress=void 0}connectedCallback(){super.connectedCallback(),this.addEventListener(`contextmenu`,this.handleContextMenu),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`pointerdown`,this.handlePointerDown),this.addEventListener(`pointermove`,this.handleTouchEnd),this.addEventListener(`pointerup`,this.handleTouchEnd),this.addEventListener(`pointercancel`,this.handleTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.clearLongPress(),this.removeEventListener(`contextmenu`,this.handleContextMenu),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`pointerdown`,this.handlePointerDown),this.removeEventListener(`pointermove`,this.handleTouchEnd),this.removeEventListener(`pointerup`,this.handleTouchEnd),this.removeEventListener(`pointercancel`,this.handleTouchEnd)}render(){return g`<slot></slot>${this.renderPanels()}`}}})))()}function So(e){return Eo.add(e),!Do&&typeof MutationObserver<`u`&&(Do=new MutationObserver(()=>{for(let e of[...Eo])e()}),Do.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`],subtree:!0})),()=>{Eo.delete(e),Eo.size===0&&(Do?.disconnect(),Do=null)}}var Co,wo,To,Eo,Do,$;function Oo(){return(Oo=e((()=>{D(),S(),it(),F(),A(),M(),Bn(),Gr(),lr(),wn(),u(),m(),We(),Ve(),Co=(e,t)=>Number.isFinite(e)&&e>0?e:t,wo=e=>e===`dark`||e===`github-dark`?`dark`:e===`light`?`light`:void 0,To=e=>typeof e?.editor?.create==`function`,Eo=new Set,Do=null,$=class e extends yn{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.language=`plaintext`,this.label=``,this.height=420,this.minHeight=160,this.maxHeight=800,this.loadTimeout=1e4,this.status=`loading`,this.scopeTheme=`light`,this.locale=new w(this),this.editor=null,this.engine=null,this.container=null,this.subscriptions=[],this.applying=!1,this.edited=!1,this.dirty=!1,this.unobserveTheme=null,this.started=!1}static{this.tagName=`minerva-code-editor`}static{this.dependencies=[H,gr]}static{this.styles=[E,f`
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
`,P(Ln)]}get resolvedTheme(){return this.theme===`dark`||this.theme===`light`?this.theme:this.scopeTheme}focus(e){this.editor?this.editor.focus():this.fallback?.focus(e)}retry(){this.load()}getFormValue(){return this.value}getValidity(){return this.required&&!this.value?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.fallback??null}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}connectedCallback(){super.connectedCallback(),this.syncScopeTheme(),this.unobserveTheme=So(()=>this.syncScopeTheme()),this.started&&this.load()}disconnectedCallback(){super.disconnectedCallback(),this.unobserveTheme?.(),this.unobserveTheme=null,this.teardown()}syncScopeTheme(){let e=Gn(this,`[data-theme]`);this.scopeTheme=wo(e?.getAttribute(`data-theme`))??`light`}get monacoTheme(){return this.resolvedTheme===`dark`?`vs-dark`:`vs`}teardown(){clearTimeout(this.timer),this.timer=void 0;for(let e of this.subscriptions)e.dispose();this.subscriptions=[];try{this.editor?.dispose()}catch{}this.editor=null,this.engine=null,this.container?.remove(),this.container=null}fail(){let e=this.status===`error`;this.teardown(),this.status=`error`,e||this.emit(`minerva-error`)}load(){this.teardown(),this.status=`loading`,this.isConnected&&(this.timer=setTimeout(()=>this.fail(),this.loadTimeout),this.monaco!==void 0&&this.mount())}mount(){let t=this.monaco;if(!To(t)){k&&C(e.tagName,'`monaco` is not a Monaco engine (expected `import * as monaco from "monaco-editor"`); showing the textarea fallback.'),this.fail();return}let n=document.createElement(`div`);n.slot=`editor`,n.setAttribute(`data-minerva-code-editor`,``),this.append(n),this.container=n;try{t.editor.setTheme(this.monacoTheme);let e=t.editor.create(n,{value:this.value,language:this.language,theme:this.monacoTheme,readOnly:this.isDisabled,domReadOnly:this.isDisabled,ariaLabel:this.label,automaticLayout:!0,minimap:{enabled:!1},wordWrap:`on`,scrollBeyondLastLine:!1});this.editor=e,this.engine=t,this.subscriptions.push(e.onDidChangeModelContent(()=>this.handleEdit()),e.onDidBlurEditorText(()=>this.commit()))}catch{this.fail();return}clearTimeout(this.timer),this.timer=void 0,this.status=`mounted`}handleEdit(){let e=this.editor;e&&!this.applying&&(this.isDisabled||(this.value=e.getValue(),this.dirty=!0,this.edited=!0,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.emit(`minerva-input`,{value:this.value})))}commit(){this.edited&&(this.edited=!1,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value}))}handleFallbackInput(e){this.isDisabled||(this.value=e.target.value,this.dirty=!0,this.edited=!0,this.emit(`minerva-input`,{value:this.value}))}applyValue(){let e=this.editor;if(e&&e.getValue()!==this.value){this.applying=!0;try{let t=e.getModel();this.isDisabled||!t?e.setValue(this.value):(e.executeEdits(``,[{range:t.getFullModelRange(),text:this.value,forceMoveMarkers:!0}]),e.pushUndoStop())}finally{this.applying=!1}}}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue)}updated(t){if(super.updated(t),!this.started){this.started=!0,k&&!this.label&&C(e.tagName,`set label: it is the visible label and the accessible name of the editor.`),this.load();return}if(t.has(`monaco`)&&t.get(`monaco`)!==void 0){this.load();return}t.has(`monaco`)&&this.monaco!==void 0&&!this.editor&&(this.status===`loading`&&this.timer!==void 0?this.mount():this.status===`error`&&this.load());let n=this.editor,r=this.engine;if(n&&r)try{t.has(`value`)&&this.applyValue(),t.has(`language`)&&r.editor.setModelLanguage(n.getModel(),this.language),(t.has(`disabled`)||t.has(`formDisabled`)||t.has(`label`))&&n.updateOptions({readOnly:this.isDisabled,domReadOnly:this.isDisabled,ariaLabel:this.label}),(t.has(`theme`)||t.has(`scopeTheme`))&&r.editor.setTheme(this.monacoTheme)}catch{this.fail()}}hookStates(){return{disabled:this.isDisabled,loading:this.status===`loading`}}render(){let e=Co(this.minHeight,160),t=Math.max(e,Co(this.maxHeight,800)),n=Math.min(t,Math.max(e,Co(this.height,420))),r=this.locale.t,i=this.status;return g`<div
part="root"
class="root"
role="group"
aria-label=${this.label||l}
>
<label
part="label"
class="label"
for=${i===`error`?`fallback`:l}
@click=${()=>this.editor?.focus()}
>${this.label}</label
>
<div
part="surface"
class="surface"
style=${h({height:`${n}px`})}
aria-busy=${i===`loading`?`true`:`false`}
>
${i===`error`?g`<div part="error" class="error">
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
                      >${St}</span
                    >
                    ${this.retryText??r(`monacoCodeEditor.retry`)}
                  </minerva-button>
                </div>
                <textarea
                  id="fallback"
                  part="fallback"
                  class="fallback"
                  aria-label=${this.label||l}
                  spellcheck="false"
                  .value=${Ke(this.value)}
                  ?disabled=${this.isDisabled}
                  @input=${this.handleFallbackInput}
                  @change=${()=>this.commit()}
                ></textarea>`:g`${i===`loading`?g`<div part="loading" class="loading" role="status">
<minerva-progress
size="small"
aria-label=${this.loadingLabel??r(`monacoCodeEditor.loading`)}
></minerva-progress>
</div>`:l}<slot name="editor"></slot>`}
</div>
</div>`}},I([d({attribute:!1})],$.prototype,`monaco`,void 0),I([d({attribute:!1})],$.prototype,`value`,void 0),I([d({attribute:`value`})],$.prototype,`defaultValue`,void 0),I([d({reflect:!0})],$.prototype,`language`,void 0),I([d()],$.prototype,`label`,void 0),I([d({type:Number})],$.prototype,`height`,void 0),I([d({type:Number,attribute:`min-height`})],$.prototype,`minHeight`,void 0),I([d({type:Number,attribute:`max-height`})],$.prototype,`maxHeight`,void 0),I([d({reflect:!0})],$.prototype,`theme`,void 0),I([d({type:Number,attribute:`load-timeout`})],$.prototype,`loadTimeout`,void 0),I([d({attribute:`unavailable-text`})],$.prototype,`unavailableText`,void 0),I([d({attribute:`retry-text`})],$.prototype,`retryText`,void 0),I([d({attribute:`retry-label`})],$.prototype,`retryLabel`,void 0),I([d({attribute:`loading-label`})],$.prototype,`loadingLabel`,void 0),I([v()],$.prototype,`status`,void 0),I([v()],$.prototype,`scopeTheme`,void 0),I([y(`textarea`)],$.prototype,`fallback`,void 0)})))()}export{zi as $,X as A,Fr as At,ra as B,br as Bt,ja as C,ni as Ct,ka as D,Ur as Dt,Oa as E,V as Et,_a as F,z as Ft,Xi as G,J as H,la as I,Dr as It,Ji as J,Ki as K,ca as L,R as Lt,Y as M,Nr as Mt,ba as N,Mr as Nt,Z as O,zr as Ot,ga as P,Pr as Pt,Bi as Q,sa as R,Tr as Rt,Pa as S,ii as St,Ma as T,H as Tt,$i as U,ia as V,Zi as W,Wi as X,q as Y,Gi as Z,qa as _,ei as _t,bo as a,Ti as at,Ra as b,Qr as bt,mo as c,G as ct,Ba as d,vi as dt,Li as et,Ha as f,mi as ft,Va as g,ri as gt,Ua as h,fi as ht,go as i,K as it,Sa as j,Ir as jt,Ta as k,Rr as kt,Qa as l,bi as lt,Za as m,U as mt,Oo as n,Ri as nt,ho as o,wi as ot,Ga as p,W as pt,qi as q,xo as r,Ai as rt,fo as s,Ci as st,$ as t,Ei as tt,uo as u,_i as ut,Q as v,ai as vt,Aa as w,Gr as wt,Fa as x,oi as xt,Wa as y,ti as yt,oa as z,L as zt};