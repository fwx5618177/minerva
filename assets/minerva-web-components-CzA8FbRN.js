import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{$ as t,$n as n,$t as r,At as i,Bt as a,Cn as o,Cr as s,Ct as ee,Dn as te,Dt as ne,En as re,Et as ie,Fn as ae,Ft as oe,Gn as se,Gt as ce,Hn as c,Ht as le,In as ue,It as de,Jn as fe,Jt as pe,Kn as me,Kt as he,Ln as ge,Lt as _e,Mn as ve,Mt as ye,Ot as be,Pn as xe,Qn as Se,Qt as Ce,Rn as we,Rt as Te,Sr as l,St as Ee,Tn as De,Tt as Oe,Un as ke,Ut as Ae,Vn as je,Vt as Me,Wt as Ne,Xt as Pe,Yn as Fe,Yt as Ie,Zt as Le,_n as u,_r as Re,_t as ze,an as Be,ar as d,at as Ve,bn as He,br as Ue,bt as We,cn as Ge,cr as f,ct as Ke,dn as qe,dr as p,dt as Je,en as Ye,et as Xe,fn as Ze,fr as m,ft as Qe,gn as $e,gr as h,gt as et,hn as tt,hr as g,ht as nt,in as rt,ir as _,jn as it,jt as at,kn as ot,kt as st,ln as ct,lr as v,lt,mn as ut,mr as y,mt as dt,n as ft,nn as pt,nt as mt,on as ht,or as gt,ot as _t,pn as vt,pr as yt,pt as bt,qn as xt,qt as St,rn as Ct,rr as b,sn as wt,sr as Tt,st as Et,t as Dt,tn as Ot,tt as kt,un as At,ur as x,ut as jt,vn as S,vr as Mt,vt as Nt,wn as Pt,wt as Ft,xr as It,xt as Lt,yn as Rt,yt as zt,zn as Bt,zt as Vt}from"./minerva-web-components-BPjqS5uR.js";import{A as C,B as w,Bt as Ht,C as T,Ct as Ut,D as E,Dt as Wt,E as D,G as Gt,Ht as Kt,I as O,It as qt,J as Jt,L as k,M as A,N as j,Ot as Yt,Pt as Xt,Q as Zt,Rt as Qt,S as M,St as $t,Tt as en,Ut as tn,_ as nn,a as rn,at as an,b as on,c as sn,d as cn,ft as ln,g as un,h as dn,i as fn,it as pn,jt as mn,l as hn,n as gn,o as _n,ot as vn,p as yn,pt as bn,q as xn,r as Sn,st as Cn,t as wn,u as Tn,vt as En,w as N,wt as Dn,xt as On,y as kn,z as An}from"./minerva-web-components-BCL_6rcP.js";import{t as P}from"./minerva-web-components-DB7tn7hP.js";import{a as jn,c as Mn,d as Nn,f as Pn,h as Fn,l as In,m as Ln,o as Rn,p as zn,s as Bn,u as Vn}from"./minerva-web-components-Baqgrh4_.js";import{At as Hn,Bt as Un,It as Wn,Lt as Gn,Mt as Kn,Nt as qn,Rt as Jn,jt as Yn,zt as Xn}from"./minerva-web-components-Cc_Bhmo4.js";var Zn,Qn,F;function $n(){return($n=e((()=>{Tt(),l(),b(),c(),y(),p(),v(),u(),j(),D(),T(),on(),Wt(),Zn={info:it,success:He,warning:ve,danger:n},Qn=[`slideIn`,`fadeIn`,`bounce`,`zoom`],F=class e extends m{constructor(...e){super(...e),this.color=`info`,this.variant=`subtle`,this.size=`medium`,this.heading=``,this.hideIcon=!1,this.closable=!1,this.noAnimation=!1,this.animationName=`slideIn`,this.banner=!1,this.elevation=!1,this.square=!1,this.collapsible=!1,this.collapsed=!1,this.locale=new g(this),this.aria=new s(this),this.slots=new f(this)}static{this.tagName=`minerva-alert`}static{this.styles=[x,w`
:host{
display: block;
}
.icon svg,
.expandButton svg,
.closeButton svg{
display: block;
}
`,S(gt)]}get hasHeading(){return!!this.heading||this.slots.test(`heading`)}handleExpand(){let e=this.collapsed;this.emit(`minerva-expanded-change`,{expanded:e},{cancelable:!0})&&(this.collapsed=!e)}handleClose(){let e=this.adjacentTabbable(),t=this.parentElement;this.emit(`minerva-close`,{},{cancelable:!0})&&(this.isFocusInsideOrLost()&&this.moveFocusOut(e,t),this.hidden=!0)}isFocusInsideOrLost(){let e=this.ownerDocument,t=en(e);return!t||t===e.body||!t.isConnected||Ut(this,t)}adjacentTabbable(){let e=Xt(this.ownerDocument.body),t=e.map((e,t)=>Ut(this,e)?t:-1).filter(e=>e>=0);if(!t.length)return null;let n=e=>!Ut(this,e)&&$t(e);return e.slice(t[t.length-1]+1).find(n)??e.slice(0,t[0]).filter(n).pop()??null}moveFocusOut(e,t){let n=typeof this.returnFocus==`function`?this.returnFocus():this.returnFocus;n?.isConnected&&Yt(n)||e?.isConnected&&Yt(e)||this.focusContainer(t)}focusContainer(e){let t=this.ownerDocument;if(e?.isConnected){for(let n=e;n&&n!==t.body;n=n.parentElement)if(n.hasAttribute(`tabindex`)&&Yt(n))return;e!==t.body&&e!==t.documentElement&&(e.setAttribute(`tabindex`,`-1`),e.addEventListener(`blur`,()=>{e.getAttribute(`tabindex`)===`-1`&&e.removeAttribute(`tabindex`)},{once:!0}),Yt(e,{preventScroll:!0}))}}updated(){d&&this.collapsible&&!this.hasHeading&&_(e.tagName,`collapsible needs a heading (the toggle lives in the title): set heading or fill the heading slot.`)}render(){let e=this.locale.t,t=this.hasHeading,n=this.collapsible&&t,r=!this.collapsed,i=this.slots.test(`[default]`),a=!this.noAnimation,o=this.borderRadius,s=this.alertRole??(this.color===`danger`||this.color===`warning`?`alert`:`status`);return k`<div
part="base"
class=${N({alert:!0,[this.color]:!0,[this.variant]:!0,[this.size]:!0,withIcon:!this.hideIcon,withTitle:t,banner:this.banner,withAnimation:a,[`animation-${this.animationName}`]:a&&Qn.includes(this.animationName),withElevation:this.elevation,rounded:!this.square,expanded:r,collapsible:n})}
style=${M({borderRadius:o==null||o===``?void 0:/^\d+(\.\d+)?$/.test(String(o))?`${o}px`:String(o)})}
role=${s}
aria-label=${this.aria.label??O}
>
${this.hideIcon?O:k`<span
part="icon"
class="icon"
role="img"
aria-label=${this.iconLabel??e(`alert.icon.${this.color}`)}
><slot name="icon">${Zn[this.color]??Zn.info}</slot></span
>`}
<div class="content">
${t?k`<div class="title" part="heading">
<slot name="heading">${this.heading}</slot>
${n?k`<button
type="button"
part="toggle"
class="expandButton"
aria-label=${r?this.collapseLabel??e(`alert.collapse`):this.expandLabel??e(`alert.expand`)}
aria-expanded=${String(r)}
aria-controls=${r&&i?`message`:O}
@click=${this.handleExpand}
>
${r?fe:we}
</button>`:O}
</div>`:O}
${i&&(!n||r)?k`<div id="message" class="message" part="message">
<slot></slot>
</div>`:O}
</div>
${this.slots.test(`action`)?k`<div class="action" part="action">
<slot name="action"></slot>
</div>`:O}
${this.closable?k`<button
type="button"
part="close-button"
class="closeButton"
aria-label=${this.closeLabel??e(`alert.close`)}
@click=${this.handleClose}
>
<slot name="close-icon">${Fe}</slot>
</button>`:O}
</div>`}},P([A({reflect:!0})],F.prototype,`color`,void 0),P([A({reflect:!0})],F.prototype,`variant`,void 0),P([A({reflect:!0})],F.prototype,`size`,void 0),P([A()],F.prototype,`heading`,void 0),P([A({type:Boolean,attribute:`hide-icon`})],F.prototype,`hideIcon`,void 0),P([A({type:Boolean,reflect:!0})],F.prototype,`closable`,void 0),P([A({type:Boolean,attribute:`no-animation`})],F.prototype,`noAnimation`,void 0),P([A({attribute:`animation-name`})],F.prototype,`animationName`,void 0),P([A({type:Boolean,reflect:!0})],F.prototype,`banner`,void 0),P([A({type:Boolean,reflect:!0})],F.prototype,`elevation`,void 0),P([A({type:Boolean,reflect:!0})],F.prototype,`square`,void 0),P([A({attribute:`border-radius`})],F.prototype,`borderRadius`,void 0),P([A({type:Boolean,reflect:!0})],F.prototype,`collapsible`,void 0),P([A({type:Boolean,reflect:!0})],F.prototype,`collapsed`,void 0),P([A({attribute:`close-label`})],F.prototype,`closeLabel`,void 0),P([A({attribute:`expand-label`})],F.prototype,`expandLabel`,void 0),P([A({attribute:`collapse-label`})],F.prototype,`collapseLabel`,void 0),P([A({attribute:`icon-label`})],F.prototype,`iconLabel`,void 0),P([A({attribute:`alert-role`})],F.prototype,`alertRole`,void 0),P([A({attribute:!1})],F.prototype,`returnFocus`,void 0)})))()}var er,tr,nr,rr,I;function ir(){return(ir=e((()=>{b(),c(),y(),p(),v(),u(),ut(),Ze(),Ln(),Vn(),Mn(),jn(),j(),D(),T(),Wt(),er=[`expanded`,`compact`,`floating`],tr=`(max-width: 768px)`,nr=()=>typeof window<`u`&&typeof window.matchMedia==`function`?window.matchMedia(tr):null,rr={iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,control:!0},I=class e extends m{constructor(...e){super(...e),this.brand=``,this.sidebarMode=`expanded`,this.noSkipLink=!1,this.collapsed=!1,this.mobile=!1,this.drawerOpen=!1,this.hovered=!1,this.keyboardFocus=!1,this.locale=new g(this),this.slots=new f(this),this.modal=new Rn(this),this.focusScope=new Nn(this,()=>({trapped:!0,loop:!0,restoreFocus:!1})),this.layer=new Fn(this,()=>({disableOutsidePointerEvents:!0,branches:()=>[this.headerToggle],onFocusOutside:e=>e.preventDefault(),onDismiss:()=>this.requestDrawer(!1)})),this.query=null,this.drawerActive=!1,this.handleMediaChange=()=>this.syncMobile()}static{this.tagName=`minerva-app-shell`}static{this.styles=[x,In,w`
:host{
display: block;
}
`,S(qe),S(vt)]}openNavigation(){this.mobile&&(this.drawerOpen=!0)}closeNavigation(){this.drawerOpen=!1}expandNavigation(){this.sidebarMode=`expanded`}focusMain(){this.main?.focus()}connectedCallback(){super.connectedCallback(),this.query=nr(),this.query?.addEventListener(`change`,this.handleMediaChange),this.syncMobile()}disconnectedCallback(){super.disconnectedCallback(),this.query?.removeEventListener(`change`,this.handleMediaChange),this.query=null,this.deactivateDrawer()}syncMobile(){let e=!!this.query?.matches;e!==this.mobile&&(this.mobile=e,this.hovered=!1,this.keyboardFocus=!1,this.drawerOpen=!1)}get mode(){return er.includes(this.sidebarMode)?this.sidebarMode:`expanded`}setMode(e){e!==this.mode&&this.emit(`minerva-sidebar-mode-change`,{mode:e},{cancelable:!0})&&(this.sidebarMode=e)}requestDrawer(e){e!==this.drawerOpen&&this.emit(`minerva-open-change`,{open:e},{cancelable:!0})&&(this.drawerOpen=e)}willUpdate(e){e.has(`navigationKey`)&&e.get(`navigationKey`)!==void 0&&(this.drawerOpen=!1),this.mobile||(this.drawerOpen=!1),this.collapsed=!this.mobile&&this.mode!==`expanded`&&(this.mode!==`floating`||!this.hovered&&!this.keyboardFocus)}updated(t){let n=this.mobile&&this.drawerOpen;n&&!this.drawerActive&&this.drawer?(this.drawerActive=!0,Mt(this.overlay),Mt(this.drawer),this.modal.activate(this),this.layer.activate(this.drawer),this.focusScope.activate(this.drawer)):!n&&this.drawerActive&&(this.deactivateDrawer(),this.headerToggle?.focus()),d&&t.has(`sidebarMode`)&&!er.includes(this.sidebarMode)&&_(e.tagName,`unknown sidebar-mode="${this.sidebarMode}" (expected ${er.join(`, `)}); using "expanded".`),d&&!this.slots.test(`navigation`)&&_(e.tagName,`put the navigation in the "navigation" slot (e.g. <nav slot="navigation">).`)}deactivateDrawer(){this.drawerActive&&(this.drawerActive=!1,this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate(),h(this.drawer),h(this.overlay))}label(e,t){return e??this.locale.t(`appShell.${t}`)}handleSkip(e){e.preventDefault(),this.focusMain()}handleSidebarFocusIn(e){let t=e.composedPath()[0],n;try{n=!!t?.matches?.(`:focus-visible`)}catch{n=!1}n&&(this.keyboardFocus=!0)}handleSidebarFocusOut(e){let t=e.relatedTarget;(!t||!this.sidebar||!Ut(this.sidebar,t))&&(this.keyboardFocus=!1)}renderHeaderToggle(){return this.mobile?k`<button
type="button"
class=${N(rr)}
aria-label=${this.label(this.openNavigationLabel,`openNavigation`)}
aria-haspopup="dialog"
aria-expanded=${String(this.drawerOpen)}
aria-controls=${this.drawerOpen?`drawer`:O}
@click=${()=>this.requestDrawer(!this.drawerOpen)}
>
${te}
</button>`:this.renderCollapseControl()}renderCollapseControl(){let e=this.mode!==`expanded`;return k`<button
type="button"
class=${N(rr)}
aria-label=${e?this.label(this.expandLabel,`expand`):this.label(this.collapseLabel,`collapse`)}
aria-controls="sidebar"
aria-expanded=${String(!this.collapsed)}
@click=${()=>this.setMode(e?`expanded`:`compact`)}
>
${e?te:re}
</button>`}renderSidebar(){let e=this.mode===`floating`,t=this.label(this.navigationLabel,`navigation`);return k`<aside
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
${this.slots.test(`brand-icon`)?k`<span class="brandIcon" aria-hidden="true"
><slot name="brand-icon"></slot
></span>`:O}
<span class="brandLabel"><slot name="brand">${this.brand}</slot></span>
</div>
<div class="navigation"><slot name="navigation"></slot></div>
<div class="sidebarActions">
${this.renderCollapseControl()}
<button
type="button"
class=${N(rr)}
aria-pressed=${String(e)}
aria-label=${e?this.label(this.disableFloatingLabel,`disableFloating`):this.label(this.enableFloatingLabel,`enableFloating`)}
@click=${()=>this.setMode(e?`compact`:`floating`)}
>
${e?o:ot}
</button>
</div>
</aside>`}renderDrawer(){let e=this.label(this.navigationLabel,`navigation`);return k`<div
class="overlay"
part="overlay"
popover="manual"
aria-hidden="true"
></div>
<div
id="drawer"
class="drawer"
part="drawer"
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
aria-label=${this.label(this.closeNavigationLabel,`closeNavigation`)}
@click=${()=>this.requestDrawer(!1)}
>
${Fe}
</button>
</div>`}render(){let e=this.skipLink||this.locale.t(`appShell.skipToContent`);return k`<div
class="shell"
part="shell"
data-sidebar-mode=${this.mode}
data-sidebar-expanded=${this.collapsed?O:`true`}
>
${this.noSkipLink?O:k`<a
class="skipLink"
part="skip-link"
href="#main"
@click=${this.handleSkip}
>${e}</a
>`}
${this.mobile?O:this.renderSidebar()}
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
${this.mobile&&this.drawerOpen?this.renderDrawer():O}`}},P([A()],I.prototype,`brand`,void 0),P([A({attribute:`sidebar-mode`,reflect:!0})],I.prototype,`sidebarMode`,void 0),P([A({attribute:`navigation-label`})],I.prototype,`navigationLabel`,void 0),P([A({attribute:`navigation-key`})],I.prototype,`navigationKey`,void 0),P([A({attribute:`skip-link`})],I.prototype,`skipLink`,void 0),P([A({type:Boolean,attribute:`no-skip-link`})],I.prototype,`noSkipLink`,void 0),P([A({attribute:`expand-label`})],I.prototype,`expandLabel`,void 0),P([A({attribute:`collapse-label`})],I.prototype,`collapseLabel`,void 0),P([A({attribute:`enable-floating-label`})],I.prototype,`enableFloatingLabel`,void 0),P([A({attribute:`disable-floating-label`})],I.prototype,`disableFloatingLabel`,void 0),P([A({attribute:`open-navigation-label`})],I.prototype,`openNavigationLabel`,void 0),P([A({attribute:`close-navigation-label`})],I.prototype,`closeNavigationLabel`,void 0),P([A({type:Boolean,reflect:!0})],I.prototype,`collapsed`,void 0),P([A({type:Boolean,reflect:!0})],I.prototype,`mobile`,void 0),P([C()],I.prototype,`drawerOpen`,void 0),P([C()],I.prototype,`hovered`,void 0),P([C()],I.prototype,`keyboardFocus`,void 0),P([E(`.header button`)],I.prototype,`headerToggle`,void 0),P([E(`.drawer`)],I.prototype,`drawer`,void 0),P([E(`.overlay`)],I.prototype,`overlay`,void 0),P([E(`main`)],I.prototype,`main`,void 0),P([E(`aside`)],I.prototype,`sidebar`,void 0)})))()}var ar,L;function or(){return(or=e((()=>{l(),b(),c(),y(),p(),v(),u(),Mn(),ht(),rt(),Ge(),j(),D(),T(),on(),nn(),ar={top:`top-start`,bottom:`bottom-start`,left:`left-start`,right:`right-start`},L=class e extends wt{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.options=[],this.open=!1,this.label=``,this.placeholder=``,this.mode=`basic`,this.size=`medium`,this.variant=`outline`,this.invalid=!1,this.readonly=!1,this.loading=!1,this.placement=`bottom`,this.offset={x:0,y:4},this.noAnimation=!1,this.autoHighlight=!1,this.noFillOnSelect=!1,this.groupMode=`first`,this.focusedIndex=-1,this.hoveredIndex=-1,this.locale=new g(this),this.aria=new s(this,()=>this.labels),this.slots=new f(this),this.floating=new Bn(this,()=>{let e=this.placement===`top`||this.placement===`bottom`,t=this.offset??{x:0,y:4};return{anchor:()=>this.container,floating:()=>this.popup,placement:ar[this.placement]??`bottom-start`,offset:{mainAxis:e?t.y:t.x,crossAxis:e?t.x:t.y},matchAnchorWidth:`min`,branches:()=>[this.container],onEscapeKeyDown:e=>{(this.composing||e.isComposing)&&e.preventDefault()},onDismiss:()=>this.close(),returnFocusOnEscape:()=>this.input}}),this.composing=!1,this.dirty=!1}static{this.tagName=`minerva-autocomplete`}static{this.shadowRootOptions={...wt.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[x,In,S(Be),S(Ct),w`
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
`]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get blocked(){return this.isDisabled||this.readonly}get shown(){return this.open&&!this.blocked}getFormValue(){return this.value}getValidity(){return this.required&&this.value===``?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.focusedIndex=-1}restoreFormState(e){typeof e==`string`&&(this.value=e)}get processedOptions(){let e=this.value,t=e.toLowerCase(),n=(this.options??[]).filter(n=>this.filterOption?this.filterOption(e,n):n.label.toLowerCase().includes(t));return this.sortOption?[...n].sort(this.sortOption):n}groupOptions(e){let t=this.groupBy;if(!t)return null;if(this.groupMode===`adjacent`){let n=[];for(let r of e){let e=t(r),i=n[n.length-1];i&&i[0]===e?i[1].push(r):n.push([e,[r]])}return n}let n=new Map;for(let r of e){let e=t(r),i=n.get(e);i?i.push(r):n.set(e,[r])}return Array.from(n.entries())}get navigableOptions(){let e=this.processedOptions,t=this.groupOptions(e);return t?t.flatMap(([,e])=>e):e}activeIndex(e){return this.focusedIndex>=0?this.focusedIndex:this.autoHighlight&&this.shown?e.findIndex(e=>!e.disabled):-1}requestOpen(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}openDropdown(){this.blocked||this.requestOpen(!0)}close(){this.requestOpen(!1),this.focusedIndex=-1}setText(e,t){e!==this.value&&(this.value=e,this.emit(`minerva-input`,{value:e}),t&&this.emit(`minerva-change`,{value:e}))}moveFocus(e){let t=this.navigableOptions,n=t.length;if(n===0)return;let r=this.activeIndex(t),i=r>=0?r:e===1?-1:n;for(let r=0;r<n;r+=1)if(i=(i+e+n)%n,!t[i].disabled){this.focusedIndex=i;return}}selectOption(e){e.disabled||(this.noFillOnSelect||this.setText(e.label,!0),this.close(),this.emit(`minerva-select`,{value:e.value,option:e}))}handleKeyDown(e){if(!(this.blocked||this.composing||e.isComposing||e.keyCode===229))switch(e.key){case`ArrowDown`:case`ArrowUp`:e.preventDefault(),this.open||this.openDropdown(),this.moveFocus(e.key===`ArrowDown`?1:-1);break;case`Enter`:{let t=this.navigableOptions,n=this.shown?t[this.activeIndex(t)]:void 0,r=this.value.trim();n?(e.preventDefault(),this.selectOption(n)):r&&(e.preventDefault(),this.emit(`minerva-submit`,{value:r}),this.close());break}case`Escape`:!this.shown&&!this.floating.isOpen&&this.value!==``&&(e.preventDefault(),this.setText(``,!0),this.focusedIndex=-1)}}handleInput(){this.setText(this.input.value,!1),this.focusedIndex=-1,this.openDropdown()}handleChange(){this.value=this.input.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}handleBlur(e){let t=e.relatedTarget;t&&(this.popup?.contains(t)||this.container?.contains(t))||this.close()}handleOptionClick(e){e.disabled||this.composing||(this.selectOption(e),this.input?.focus())}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.value=this.defaultValue),this.open&&this.blocked&&(this.open=!1,this.focusedIndex=-1)}updated(t){if(super.updated(t),this.floating.sync(this.shown),t.has(`focusedIndex`)&&this.focusedIndex>=0&&this.shadowRoot?.getElementById(`option-${this.focusedIndex}`)?.scrollIntoView?.({block:`nearest`}),d&&t.has(`options`)){let t=new Set;for(let n of this.options??[]){if(t.has(n.value)){_(e.tagName,`several options have the value "${n.value}"; option values must be unique.`);break}t.add(n.value)}}}renderOptionContent(e){return this.mode===`custom`&&this.renderOption?this.renderOption(e):k`<div class="basicOption">
${e.icon?k`<span class="icon">${e.icon}</span>`:O}
<div class="content">
<div class="label">${e.label}</div>
${e.description?k`<div class="description">${e.description}</div>`:O}
</div>
</div>`}renderOptionItem(e,t,n){let r=n===t;return k`<div
part="option"
class=${N({optionItem:!0,disabled:!!e.disabled,highlight:!!e.highlight,active:this.hoveredIndex===t||r})}
style=${e.style?M(e.style):O}
role="option"
tabindex="-1"
id=${`option-${t}`}
aria-selected=${String(r)}
aria-disabled=${e.disabled?`true`:O}
@mousedown=${e=>e.preventDefault()}
@click=${()=>this.handleOptionClick(e)}
@keydown=${t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),t.stopPropagation(),this.handleOptionClick(e))}}
@mouseenter=${()=>this.hoveredIndex=t}
@mouseleave=${()=>this.hoveredIndex=-1}
>
${this.renderOptionContent(e)}
</div>`}renderList(){let{t:e}=this.locale;if(this.loading)return k`<div role="presentation" class="loading" part="loading">
<span role="progressbar" aria-label=${e(`common.loading`)}
>${De}</span
>
</div>`;let t=this.processedOptions;if(t.length===0)return k`<div role="presentation" class="empty" part="empty">
${this.renderEmpty?.()||k`${Pt}<span>${e(`empty.description`)}</span>`}
</div>`;let n=this.groupOptions(t),r=n?n.flatMap(([,e])=>e):t,i=this.activeIndex(r);return n?n.map(([e,t])=>{let n=t.map(e=>this.renderOptionItem(e,r.indexOf(e),i));return e===``?n:k`<div class="optionGroup" role="group" aria-label=${e}>
<div class="groupLabel" part="group-label" aria-hidden="true">
${e}
</div>
${n}
</div>`}):t.map((e,t)=>this.renderOptionItem(e,t,i))}render(){let e=this.shown,t=this.isDisabled,n=e?this.navigableOptions:[],r=e?this.activeIndex(n):-1,i=e&&r>=0&&r<n.length?`option-${r}`:void 0,a=this.label?void 0:this.aria.label;return k`<div
part="base"
class="autoComplete"
@compositionstart=${()=>this.composing=!0}
@compositionend=${()=>this.composing=!1}
>
${this.label?k`<label for="input" class="label" part="label"
>${this.label}</label
>`:O}
<div
part="field"
class=${N({root:!0,[this.variant]:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
data-component="input"
>
${this.slots.test(`prefix`)?k`<span class="addon start"><slot name="prefix"></slot></span>`:O}
<input
id="input"
part="input"
class="field"
type="text"
role="combobox"
aria-autocomplete="list"
aria-expanded=${String(e)}
aria-controls=${e?`listbox`:O}
aria-activedescendant=${i??O}
aria-label=${a??O}
aria-description=${this.aria.description??O}
aria-required=${this.required?`true`:O}
aria-invalid=${this.invalid||this.aria.attr(`aria-invalid`)===`true`?`true`:O}
data-minerva-escape-consumer=${!e&&this.value!==``?``:O}
autocomplete="off"
.value=${kn(this.value)}
placeholder=${this.placeholder||O}
?disabled=${t}
?readonly=${this.readonly}
@input=${this.handleInput}
@change=${this.handleChange}
@focus=${()=>this.openDropdown()}
@click=${()=>{this.open||this.openDropdown()}}
@blur=${this.handleBlur}
@keydown=${this.handleKeyDown}
/>
${this.slots.test(`suffix`)?k`<span class="addon end"><slot name="suffix"></slot></span>`:O}
</div>
${e?k`<div class="popup" part="popup" popover="manual">
<div
class=${N({dropdown:!0,animated:!this.noAnimation})}
>
<div
class="optionList"
part="listbox"
role="listbox"
id="listbox"
aria-label=${this.label||a||O}
aria-busy=${this.loading?`true`:O}
>
${this.renderList()}
</div>
</div>
</div>`:O}
</div>`}},P([A({attribute:!1})],L.prototype,`value`,void 0),P([A({attribute:`value`})],L.prototype,`defaultValue`,void 0),P([A({attribute:!1})],L.prototype,`options`,void 0),P([A({type:Boolean,reflect:!0})],L.prototype,`open`,void 0),P([A()],L.prototype,`label`,void 0),P([A()],L.prototype,`placeholder`,void 0),P([A({reflect:!0})],L.prototype,`mode`,void 0),P([A({reflect:!0})],L.prototype,`size`,void 0),P([A({reflect:!0})],L.prototype,`variant`,void 0),P([A({type:Boolean,reflect:!0})],L.prototype,`invalid`,void 0),P([A({type:Boolean,reflect:!0})],L.prototype,`readonly`,void 0),P([A({type:Boolean,reflect:!0})],L.prototype,`loading`,void 0),P([A({reflect:!0})],L.prototype,`placement`,void 0),P([A({attribute:!1})],L.prototype,`offset`,void 0),P([A({type:Boolean,attribute:`no-animation`})],L.prototype,`noAnimation`,void 0),P([A({type:Boolean,attribute:`auto-highlight`})],L.prototype,`autoHighlight`,void 0),P([A({type:Boolean,attribute:`no-fill-on-select`})],L.prototype,`noFillOnSelect`,void 0),P([A({attribute:`group-mode`})],L.prototype,`groupMode`,void 0),P([A({attribute:!1})],L.prototype,`filterOption`,void 0),P([A({attribute:!1})],L.prototype,`sortOption`,void 0),P([A({attribute:!1})],L.prototype,`groupBy`,void 0),P([A({attribute:!1})],L.prototype,`renderOption`,void 0),P([A({attribute:!1})],L.prototype,`renderEmpty`,void 0),P([C()],L.prototype,`focusedIndex`,void 0),P([C()],L.prototype,`hoveredIndex`,void 0),P([E(`input`)],L.prototype,`input`,void 0),P([E(`.autoComplete`)],L.prototype,`container`,void 0),P([E(`.popup`)],L.prototype,`popup`,void 0)})))()}function sr(e){let t=e?.trim()??``;return t?lr.test(t[0])?t[0]:t.split(/\s+/).slice(0,2).map(e=>e[0].toUpperCase()).join(``):``}var cr,lr,ur,dr,fr;function pr(){return(pr=e((()=>{l(),b(),y(),p(),v(),u(),pt(),Ye(),j(),D(),T(),on(),cr=[`xsmall`,`small`,`medium`,`large`,`xlarge`,`xxlarge`],lr=/[㐀-鿿豈-﫿]/,ur={fromAttribute:e=>e&&/^\d+(\.\d+)?$/.test(e)?Number(e):e??`medium`,toAttribute:e=>String(e)},dr=class e extends m{constructor(...e){super(...e),this.name=``,this.shape=`circle`,this.size=`medium`,this.stacked=!1,this.locale=new g(this),this.aria=new s(this),this.slots=new f(this)}static{this.tagName=`minerva-avatar`}static{this.styles=[x,w`
:host{
display: inline-block;
flex-shrink: 0;
vertical-align: middle;
line-height: 0;
}
.avatarText{
line-height: 1;
}
`,S(Ot)]}updated(t){d&&t.has(`size`)&&typeof this.size!=`number`&&!cr.includes(this.size)&&_(e.tagName,`unknown size "${this.size}": use a preset (${cr.join(`, `)}) or a number of pixels.`)}render(){let e=!!this.src&&this.failedSrc!==this.src,t=this.aria.label??(this.name||this.locale.t(`avatar.default`)),n=typeof this.size==`number`,r=N({avatar:!0,[this.shape]:!0,[String(this.size)]:!n,stacked:this.stacked}),i=M(n?{"--avatar-size":`${this.size}px`,width:`${this.size}px`,height:`${this.size}px`}:{});if(e)return k`<span part="base" class=${r} style=${i}
><img
part="image"
class="avatarImg"
alt=${this.alt??t}
src=${this.src}
draggable="false"
@error=${()=>this.failedSrc=this.src}
/></span>`;let a=sr(this.name),o=this.slots.test(`fallback`)?k`<slot name="fallback"></slot>`:a||k`<slot></slot>`;return k`<span
part="base"
role="img"
aria-label=${t}
class=${r}
style=${i}
><span part="text" class="avatarText" aria-hidden="true"
>${o}</span
></span
>`}},P([A()],dr.prototype,`src`,void 0),P([A()],dr.prototype,`name`,void 0),P([A()],dr.prototype,`alt`,void 0),P([A({reflect:!0})],dr.prototype,`shape`,void 0),P([A({reflect:!0,converter:ur})],dr.prototype,`size`,void 0),P([A({type:Boolean,reflect:!0})],dr.prototype,`stacked`,void 0),P([C()],dr.prototype,`failedSrc`,void 0),fr=class e extends m{constructor(...e){super(...e),this.locale=new g(this),this.aria=new s(this),this.slots=new f(this)}static{this.tagName=`minerva-avatar-group`}static{this.shadowRootOptions={...m.shadowRootOptions,slotAssignment:`manual`}}static{this.styles=[x,w`
:host{
display: flex;
}
.avatarGroup{
flex: 1 1 auto;
min-width: 0;
}
`,S(r)]}visibleAvatars(){let e=Array.from(this.children);return this.max===void 0||this.max===null?e:e.slice(0,Math.max(0,this.max))}updated(t){let n=this.visibleAvatars();Array.from(this.renderRoot.querySelectorAll(`slot[data-item]`)).forEach((e,t)=>{let r=n[t];r&&typeof e.assign==`function`&&e.assign(r)}),d&&t.has(`max`)&&this.max!==void 0&&this.max!==null&&!(Number.isInteger(this.max)&&this.max>=0)&&_(e.tagName,`max must be a non-negative integer (got ${this.max}).`)}render(){this.slots;let e=this.children.length,t=this.visibleAvatars(),n=(Number(this.count)||0)+e-t.length,r=this.aria.label??(n>0?this.locale.t(`avatar.groupWithMore`,{count:n}):this.locale.t(`avatar.group`));return k`<div
part="base"
role="group"
class="avatarGroup"
aria-label=${r}
>
${t.map(()=>k`<div part="item" class="avatarGroupItem">
<slot data-item></slot>
</div>`)}
${n>0?k`<div part="count" class="count" aria-hidden="true">
+${n}
</div>`:O}
</div>`}},P([A({type:Number})],fr.prototype,`count`,void 0),P([A({type:Number})],fr.prototype,`max`,void 0)})))()}var mr;function hr(){return(hr=e((()=>{l(),b(),y(),p(),v(),u(),Ce(),j(),D(),T(),on(),mr=class e extends m{constructor(...e){super(...e),this.color=`primary`,this.variant=`solid`,this.size=`medium`,this.position=`top-right`,this.dot=!1,this.badgeRole=`status`,this.locale=new g(this),this.aria=new s(this),this.slots=new f(this)}static{this.tagName=`minerva-badge`}static{this.styles=[x,w`
:host{
display: inline-flex;
vertical-align: middle;
}
`,S(Le)]}hasElementChildren(){return Array.from(this.children).some(e=>!e.hasAttribute(`slot`)||e.getAttribute(`slot`)===``)}updated(){d&&this.dot&&!this.aria.label&&![`presentation`,`none`].includes(this.badgeRole)&&_(e.tagName,`a dot badge has no text: set aria-label (e.g. "New messages") or badge-role="presentation".`)}render(){let e=this.slots.test(`[default]`),t=e&&!this.hasElementChildren(),n=this.content!==void 0&&this.content!==null||this.slots.test(`content`),r=!e||t&&!n,i=O;this.dot||(n?i=k`<slot name="content">${this.content}</slot>`:t?i=k`<slot></slot>`:e&&(i=this.locale.t(`badge.default`)));let a=k`<span
part=${r?`base badge`:`badge`}
class=${N({badge:!0,[this.color]:!0,[this.variant]:!0,[this.size]:!0,standalone:r,[this.position]:!r,dot:this.dot})}
role=${this.badgeRole||O}
aria-label=${this.aria.label??O}
style=${M({borderRadius:this.borderRadius,borderWidth:this.borderWidth})}
>${this.slots.test(`icon`)?k`<span class="icon" part="icon"
><slot name="icon"></slot
></span>`:O}${i}</span
>`;return r?a:k`<div part="base" class="badgeWrapper">
<div class="content"><slot></slot></div>
${a}
</div>`}},P([A({reflect:!0})],mr.prototype,`color`,void 0),P([A({reflect:!0})],mr.prototype,`variant`,void 0),P([A({reflect:!0})],mr.prototype,`size`,void 0),P([A()],mr.prototype,`content`,void 0),P([A({reflect:!0})],mr.prototype,`position`,void 0),P([A({type:Boolean,reflect:!0})],mr.prototype,`dot`,void 0),P([A({attribute:`border-radius`})],mr.prototype,`borderRadius`,void 0),P([A({attribute:`border-width`})],mr.prototype,`borderWidth`,void 0),P([A({attribute:`badge-role`})],mr.prototype,`badgeRole`,void 0)})))()}function gr(e){let t=String(e).trim();return typeof e!=`number`&&!/^\d+(\.\d+)?$/.test(t)?t:`var(--space-${t.replace(`.`,`-`)})`}function _r(e){let t=String(e).trim();return typeof e==`number`||/^-?\d+(\.\d+)?$/.test(t)?`${t}px`:t}function vr(e){return e.replace(/[;{}<>]/g,``)}var yr;function br(){return(br=e((()=>{yr={fromAttribute:e=>{if(e===null)return;let t=e.trim();return/^-?\d+(\.\d+)?$/.test(t)?Number(t):t},toAttribute:e=>e===void 0?null:String(e)}})))()}var xr,Sr,Cr,R,z;function wr(){return(wr=e((()=>{b(),p(),br(),j(),D(),xr={bg:`var(--surface-color)`,"bg.subtle":`var(--surface-subtle-color)`,"bg.muted":`var(--surface-muted-color)`,"bg.emphasis":`var(--surface-muted-color)`,"bg.canvas":`var(--canvas-color)`,"bg.elevated":`var(--surface-elevated-color)`},Sr=[`none`,`sm`,`md`,`lg`,`xl`,`2xl`,`full`],Cr=[`sm`,`md`,`lg`,`xl`],R={converter:yr},z=class e extends m{static{this.tagName=`minerva-box`}static{this.styles=[x,w`
:host{
display: block;
}
`]}declarations(){let e=[],t=(t,...n)=>{if(t!==void 0&&t!==``)for(let r of n)e.push([r,gr(t)])},n=(t,n)=>{t!==void 0&&t!==``&&e.push([n,_r(t)])};return t(this.p,`padding`),t(this.px,`padding-left`,`padding-right`),t(this.py,`padding-top`,`padding-bottom`),t(this.pt,`padding-top`),t(this.pr,`padding-right`),t(this.pb,`padding-bottom`),t(this.pl,`padding-left`),t(this.m,`margin`),t(this.mx,`margin-left`,`margin-right`),t(this.my,`margin-top`,`margin-bottom`),t(this.mt,`margin-top`),t(this.mr,`margin-right`),t(this.mb,`margin-bottom`),t(this.ml,`margin-left`),n(this.w,`width`),n(this.h,`height`),n(this.minW,`min-width`),n(this.minH,`min-height`),n(this.maxW,`max-width`),n(this.maxH,`max-height`),this.bg&&e.push([`background`,xr[this.bg]??this.bg]),this.rounded&&e.push([`border-radius`,Sr.includes(this.rounded)?`var(--radius-${this.rounded})`:this.rounded]),this.boxShadow&&e.push([`box-shadow`,Cr.includes(this.boxShadow)?`var(--shadow-${this.boxShadow})`:this.boxShadow]),this.border&&e.push([`border`,this.border]),e}updated(){d&&this.bg?.startsWith(`bg.`)&&!(this.bg in xr)&&_(e.tagName,`unknown surface alias bg="${this.bg}" (expected one of ${Object.keys(xr).join(`, `)}).`)}render(){let e=this.declarations().map(([e,t])=>`${e}:${vr(t)};`).join(``);return k`<style>
:host{${e}}
</style>
<slot></slot>`}},P([A(R)],z.prototype,`p`,void 0),P([A(R)],z.prototype,`px`,void 0),P([A(R)],z.prototype,`py`,void 0),P([A(R)],z.prototype,`pt`,void 0),P([A(R)],z.prototype,`pr`,void 0),P([A(R)],z.prototype,`pb`,void 0),P([A(R)],z.prototype,`pl`,void 0),P([A(R)],z.prototype,`m`,void 0),P([A(R)],z.prototype,`mx`,void 0),P([A(R)],z.prototype,`my`,void 0),P([A(R)],z.prototype,`mt`,void 0),P([A(R)],z.prototype,`mr`,void 0),P([A(R)],z.prototype,`mb`,void 0),P([A(R)],z.prototype,`ml`,void 0),P([A(R)],z.prototype,`w`,void 0),P([A(R)],z.prototype,`h`,void 0),P([A({converter:yr,attribute:`min-w`})],z.prototype,`minW`,void 0),P([A({converter:yr,attribute:`min-h`})],z.prototype,`minH`,void 0),P([A({converter:yr,attribute:`max-w`})],z.prototype,`maxW`,void 0),P([A({converter:yr,attribute:`max-h`})],z.prototype,`maxH`,void 0),P([A()],z.prototype,`bg`,void 0),P([A()],z.prototype,`rounded`,void 0),P([A({attribute:`box-shadow`})],z.prototype,`boxShadow`,void 0),P([A()],z.prototype,`border`,void 0)})))()}var Tr,B;function Er(){return(Er=e((()=>{l(),b(),p(),v(),u(),Ge(),Pe(),j(),D(),T(),on(),Tr=e=>`borderRadius${e.charAt(0).toUpperCase()}${e.slice(1)}`,B=class e extends m{constructor(...e){super(...e),this.color=`primary`,this.variant=`solid`,this.size=`medium`,this.disabled=!1,this.loading=!1,this.fullWidth=!1,this.active=!1,this.type=`button`,this.internals=At(this),this.aria=new s(this),this.slots=new f(this),this.blockInactiveClicks=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-button`}static{this.formAssociated=!0}static{this.styles=[x,w`
:host{
display: inline-flex;
max-width: 100%;
vertical-align: middle;
}
:host([full-width]){
display: flex;
width: 100%;
}
`,S(Ie)]}get form(){return this.internals?.form??null}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}handleClick(e){if(this.loading||this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockInactiveClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockInactiveClicks,!0)}updated(){d&&this.shape===`circle`&&!this.aria.label&&(this.textContent?.trim()||_(e.tagName,`shape="circle" buttons usually only contain an icon: set aria-label to give them an accessible name.`))}render(){let e=this.borderRadius,t=typeof e==`number`||typeof e==`string`&&/^\d+(\.\d+)?$/.test(e),n=this.loading&&this.slots.test(`loading`),r=this.loading&&!n,i=k`<span
class="loadingSpinner"
part="spinner"
aria-hidden="true"
></span>`;return k`<button
part="button"
type="button"
class=${N({customButton:!0,[this.color]:!0,[`variant-${this.variant}`]:!0,[this.size]:!0,[this.shape??``]:!!this.shape,[Tr(String(e??``))]:!!e&&!t,fullWidth:this.fullWidth,active:this.active,loading:this.loading})}
style=${M(t?{borderRadius:`${Number(e)}px`}:{})}
?disabled=${this.disabled}
aria-label=${this.aria.label??O}
aria-description=${this.aria.description??O}
aria-pressed=${this.aria.attr(`aria-pressed`)??O}
aria-expanded=${this.aria.attr(`aria-expanded`)??O}
aria-haspopup=${this.aria.attr(`aria-haspopup`)??O}
aria-busy=${this.loading?`true`:O}
aria-disabled=${this.loading?`true`:O}
@click=${this.handleClick}
>
${n?k`${i}<span class="label" part="label"
><slot name="loading"></slot
></span>`:k`${this.loading?i:O}
${this.slots.test(`start`)?k`<span class=${N({icon:!0,hidden:r})}
><slot name="start"></slot
></span>`:O}
<span class=${N({label:!0,hidden:r})} part="label"
><slot></slot
></span>
${this.slots.test(`end`)?k`<span class=${N({icon:!0,hidden:r})}
><slot name="end"></slot
></span>`:O}`}
</button>`}},P([A({reflect:!0})],B.prototype,`color`,void 0),P([A({reflect:!0})],B.prototype,`variant`,void 0),P([A({reflect:!0})],B.prototype,`size`,void 0),P([A({reflect:!0})],B.prototype,`shape`,void 0),P([A({attribute:`border-radius`})],B.prototype,`borderRadius`,void 0),P([A({type:Boolean,reflect:!0})],B.prototype,`disabled`,void 0),P([A({type:Boolean,reflect:!0})],B.prototype,`loading`,void 0),P([A({type:Boolean,reflect:!0,attribute:`full-width`})],B.prototype,`fullWidth`,void 0),P([A({type:Boolean,reflect:!0})],B.prototype,`active`,void 0),P([A({reflect:!0})],B.prototype,`type`,void 0),P([E(`button`)],B.prototype,`button`,void 0)})))()}var Dr,Or,kr,Ar,jr,Mr,V,Nr,Pr,Fr,Ir,Lr,Rr,zr;function Br(){return(Br=e((()=>{l(),b(),p(),u(),Ge(),pe(),j(),D(),T(),yn(),Dr=[`div`,`article`,`section`,`a`,`button`],Or=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`],kr=[`none`,`small`,`medium`,`large`],Ar=`minerva-card-header, minerva-card-content, minerva-card-footer, minerva-card-title, minerva-card-description`,jr=e=>e&&kr.includes(e)?`pad-${e}`:``,Mr=e=>{let t=e.parentElement??e.getRootNode().host;return!!(t?It(t,`minerva-card`):null)?.hasAttribute(`padding`)},V=class e extends m{constructor(...e){super(...e),this.variant=`default`,this.interactive=!1,this.as=`div`,this.disabled=!1,this.type=`button`,this.internals=At(this),this.aria=new s(this),this.syncParts=()=>{for(let e of Array.from(this.querySelectorAll(Ar)))e.requestUpdate()},this.blockDisabledClicks=e=>{this.tag===`button`&&this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-card`}static{this.formAssociated=!0}static{this.styles=[x,w`
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
`,S(St)]}get tag(){return Dr.includes(this.as)?this.as:`div`}focus(e){this.tag===`a`||this.tag===`button`?this.root?.focus(e):super.focus(e)}handleClick(e){if(this.tag!==`button`)return;if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.internals?.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockDisabledClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockDisabledClicks,!0)}updated(t){t.has(`padding`)&&this.syncParts(),d&&(this.as&&!Dr.includes(this.as)&&_(e.tagName,`unsupported as="${this.as}" (expected ${Dr.join(`, `)}); rendering a div.`),this.tag===`a`&&!this.href&&_(e.tagName,`as="a" needs an href to be a link (focusable, activatable with Enter).`),this.interactive&&this.tag!==`a`&&this.tag!==`button`&&_(e.tagName,`interactive cards should be links or buttons (as="a" with href, or as="button") so keyboard users can activate them.`))}render(){let e=this.tag,t=N({card:!0,[this.variant]:!0,padded:!!this.padding,[jr(this.padding)]:!!jr(this.padding),interactive:this.interactive}),n=this.aria.label??O,r=un`<slot @slotchange=${this.syncParts}></slot>`;if(e===`a`)return un`<a
part="base"
class=${t}
href=${this.href??O}
target=${this.target??O}
rel=${this.rel??O}
download=${this.download??O}
aria-label=${n}
>${r}</a
>`;if(e===`button`)return un`<button
part="base"
class=${t}
type="button"
?disabled=${this.disabled}
aria-label=${n}
aria-pressed=${this.aria.attr(`aria-pressed`)??O}
aria-expanded=${this.aria.attr(`aria-expanded`)??O}
@click=${this.handleClick}
>
${r}
</button>`;let i=dn(e);return un`<${i} part="base" class=${t}>${r}</${i}>`}},P([A({reflect:!0})],V.prototype,`variant`,void 0),P([A({reflect:!0})],V.prototype,`padding`,void 0),P([A({type:Boolean,reflect:!0})],V.prototype,`interactive`,void 0),P([A({reflect:!0})],V.prototype,`as`,void 0),P([A()],V.prototype,`href`,void 0),P([A()],V.prototype,`target`,void 0),P([A()],V.prototype,`rel`,void 0),P([A()],V.prototype,`download`,void 0),P([A({type:Boolean,reflect:!0})],V.prototype,`disabled`,void 0),P([A()],V.prototype,`type`,void 0),P([E(`[part=base]`)],V.prototype,`root`,void 0),Nr=w`
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
`,Pr=class extends m{constructor(...e){super(...e),this.sectionClass=``}static{this.styles=[x,Nr]}layoutClasses(){let e=this.previousElementSibling?.localName,t=jr(this.padding);return{[this.sectionClass]:!0,padded:Mr(this),afterHeader:e===`minerva-card-header`,afterContent:e===`minerva-card-content`,[t]:!!t}}render(){return un`<div part="base" class=${N(this.layoutClasses())}>
<slot></slot>
</div>`}},P([A({reflect:!0})],Pr.prototype,`padding`,void 0),Fr=class extends Pr{constructor(...e){super(...e),this.sectionClass=`cardHeader`}static{this.tagName=`minerva-card-header`}},Ir=class extends Pr{constructor(...e){super(...e),this.sectionClass=`cardContent`}static{this.tagName=`minerva-card-content`}static{this.styles=[x,Nr,w`
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
`]}layoutClasses(){let e=super.layoutClasses();return this.animation&&(e[this.animation]=!0),e}},P([A({reflect:!0})],Ir.prototype,`animation`,void 0),Lr=class extends Pr{constructor(...e){super(...e),this.sectionClass=`cardFooter`}static{this.tagName=`minerva-card-footer`}},Rr=class extends m{constructor(...e){super(...e),this.as=`h3`}static{this.tagName=`minerva-card-title`}static{this.styles=[x,w`
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
`]}render(){let e=dn(Or.includes(this.as)?this.as:`h3`);return un`<${e}
part="base"
class=${N({cardTitle:!0,padded:Mr(this)})}
><slot></slot></${e}>`}},P([A({reflect:!0})],Rr.prototype,`as`,void 0),zr=class extends m{static{this.tagName=`minerva-card-description`}static{this.styles=[x,w`
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
`]}render(){return un`<p
part="base"
class=${N({cardDescription:!0,padded:Mr(this)})}
>
<slot></slot>
</p>`}}})))()}var Vr,Hr,Ur,Wr,Gr,Kr,qr,H;function Jr(){return(Jr=e((()=>{l(),b(),c(),y(),p(),u(),Mn(),Ge(),he(),j(),D(),T(),Wt(),nn(),Vr=(e,t)=>{let n=[],r=e;for(let e of t){let t=r?.find(t=>t.value===e);if(!t)break;n.push(t),r=t.children}return n},Hr=(e,t=[])=>e.flatMap(e=>{if(e.disabled)return[];let n=[...t,e];return[{option:e,path:n},...e.children?Hr(e.children,n):[]]}),Ur=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),Wr=e=>{let t=new Set;for(let n of e){if(t.has(n.value))return n.value;t.add(n.value);let e=n.children?Wr(n.children):void 0;if(e!==void 0)return e}},Gr={fromAttribute(e){let t=e?.trim()??``;if(!t)return[];if(t.startsWith(`[`))try{let e=JSON.parse(t);if(Array.isArray(e))return e.filter(e=>typeof e==`string`||typeof e==`number`)}catch{}return t.split(`,`).map(e=>e.trim())},toAttribute(e){return JSON.stringify(e)}},Kr=`[role="option"]:not([aria-disabled="true"])`,qr=0,H=class e extends wt{constructor(...e){super(...e),this.options=[],this.value=[],this.defaultValue=[],this.open=!1,this.label=``,this.invalid=!1,this.readonly=!1,this.hideClearButton=!1,this.expandTrigger=`click`,this.showSearch=!1,this.maxLevel=6,this.width=240,this.expandedValues=[],this.searchValue=``,this.idPrefix=`minerva-cascader-${qr++}`,this.locale=new g(this),this.aria=new s(this,()=>this.labels),this.floating=new Bn(this,()=>({anchor:()=>this.anchor,floating:()=>this.dropdown,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,branches:()=>[this.anchor],onDismiss:()=>this.closeDropdown(),returnFocusOnEscape:()=>this.input,focusable:!0})),this.pendingFocus=null,this.dirty=!1}static{this.tagName=`minerva-cascader`}static{this.shadowRootOptions={...wt.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[x,In,w`
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
`,S(ce)]}get selectedOptions(){return Vr(this.options,this.value)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}show(){this.open=!0}hide(){this.open=!1}get displayText(){let e=this.selectedOptions,t=e.map(e=>String(e.label));return this.displayRender?this.displayRender(t,e):t.join(` / `)}getFormValue(){return this.displayText}syncFormState(){super.syncFormState(),this.internals&&!this.isDisabled&&this.internals.setFormValue(this.getFormValue(),JSON.stringify(this.value))}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.selectMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=[...this.defaultValue],this.open=!1}restoreFormState(e){if(typeof e==`string`)try{let t=JSON.parse(e);Array.isArray(t)&&(this.value=t)}catch{}}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=!Ur(this.value,this.defaultValue)||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.value=[...this.defaultValue]),e.has(`open`)&&(this.open?this.expandedValues=[...this.value]:(this.searchValue=``,this.pendingFocus=null)),d&&this.checkDev(e)}checkDev(t){if(t.has(`options`)){let t=Wr(this.options);t!==void 0&&_(e.tagName,`duplicate option value "${t}" among siblings: values must be unique within a level.`)}(t.has(`options`)||t.has(`value`))&&this.options.length>0&&this.value.length>0&&Vr(this.options,this.value).length<this.value.length&&_(e.tagName,`value ${JSON.stringify(this.value)} is not a path of the options tree: it is shown partially (or not at all).`)}updated(e){if(super.updated(e),e.has(`width`)){let e=this.width;this.style.width=e===void 0||e===``?``:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e}this.floating.sync(this.open&&!this.isDisabled);let t=this.pendingFocus;if(t!==null&&this.open){let e=t===-1?this.columns().length-1:t;this.focusColumn(e)&&(this.pendingFocus=null)}}requestOpen(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}openDropdown(e=!1){this.isDisabled||this.readonly||this.requestOpen(!0)&&(this.expandedValues=[...this.value],this.pendingFocus=e?-1:null)}closeDropdown(e=!1){this.requestOpen(!1)&&(this.searchValue=``,e&&this.input?.focus())}select(e){this.value=e.map(e=>e.value),this.emitChange(e),this.closeDropdown(!0)}emitChange(e){this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:[...this.value],selectedOptions:e})}handleActivate(e,t){let n=e[e.length-1];if(n.disabled)return;let r=t>=this.maxLevel-1,i=!!n.children?.length,a=!!this.loadData&&!n.isLeaf&&!n.children;if(!r&&(i||a)){this.expandedValues=e.map(e=>e.value),a&&!n.loading&&this.loadData?.(e);return}this.select(e)}clear(e){e.stopPropagation(),this.value=[],this.searchValue=``,this.emitChange([]),this.emit(`minerva-clear`),this.input?.focus()}get expandedPath(){return Vr(this.options,this.expandedValues)}columns(){let e=this.expandedPath,t=[this.options];for(let n=0;n<e.length&&n<this.maxLevel-1;n+=1){let r=e[n].children;if(!r?.length)break;t.push(r)}return t}columnId(e){return`${this.idPrefix}-column-${e}`}focusColumn(e){let t=this.dropdown?.querySelector(`[data-level="${e}"]`);if(!t)return!1;let n=t.querySelector(`[data-expanded="true"]`)??t.querySelector(Kr);return n?.focus(),!!n}canExpand(e,t){return t<this.maxLevel-1&&(!!e.children?.length||!e.isLeaf&&e.children===void 0)}pathTo(e,t){return[...this.expandedPath.slice(0,t),e]}get searching(){return this.showSearch&&this.searchValue!==``}searchResults(){if(!this.searching)return[];let{searchValue:e,filter:t}=this,n=e.toLowerCase();return Hr(this.options).filter(({path:r})=>t?t(e,r):r.some(e=>String(e.label).toLowerCase().includes(n)))}focusFirstSearchResult(){this.dropdown?.querySelector(`[role="option"]`)?.focus()}handleSelectorClick(){this.isDisabled||this.readonly||(this.open?this.showSearch||this.closeDropdown():this.openDropdown())}handleInput(e){let t=e.target.value;this.showSearch&&!this.readonly&&(this.searchValue=t,this.emit(`minerva-input`,{value:t}),this.open||this.openDropdown())}handleInputKeyDown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this.open?this.searching?this.focusFirstSearchResult():(this.pendingFocus=-1,this.requestUpdate()):this.openDropdown(!0);break;case`Enter`:e.preventDefault(),this.open||this.openDropdown(!0);break;case` `:if(this.showSearch)break;e.preventDefault(),this.open||this.openDropdown(!0)}}handleFocusOut(e){let t=e.relatedTarget;this.open&&t&&(this.anchor&&Ut(this.anchor,t)||this.dropdown&&Ut(this.dropdown,t)||this.closeDropdown())}handleDropdownMouseDown(e){e.target.closest?.(`[role="option"]`)||e.preventDefault()}handleDropdownKeyDown(e){e.key===`Tab`&&this.closeDropdown()}handleOptionKeyDown(e,t,n){let r=e.currentTarget,i=Array.from(r.parentElement?.querySelectorAll(Kr)??[]),a=i.indexOf(r),o=e=>i[(e+i.length)%i.length]?.focus(),s=e.key;switch(Ue(this)===`rtl`&&(s===`ArrowLeft`?s=`ArrowRight`:s===`ArrowRight`&&(s=`ArrowLeft`)),s){case`ArrowDown`:e.preventDefault(),o(a+1);break;case`ArrowUp`:e.preventDefault(),o(a-1);break;case`Home`:e.preventDefault(),o(0);break;case`End`:e.preventDefault(),o(i.length-1);break;case`ArrowRight`:if(e.preventDefault(),t.disabled||!this.canExpand(t,n))break;this.pendingFocus=n+1,this.handleActivate(this.pathTo(t,n),n),this.requestUpdate();break;case`Enter`:case` `:if(e.preventDefault(),t.disabled)break;this.canExpand(t,n)&&(this.pendingFocus=n+1),this.handleActivate(this.pathTo(t,n),n),this.requestUpdate();break;case`ArrowLeft`:e.preventDefault(),n===0?this.closeDropdown(!0):this.focusColumn(n-1)}}handleSearchKeyDown(e){let t=e.currentTarget,n=Array.from(t.querySelectorAll(`[role="option"]`)),r=n.indexOf(e.target);(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),n[(r+(e.key===`ArrowDown`?1:-1)+n.length)%n.length]?.focus())}renderSearchResults(){let e=this.searchResults();return k`<div
class="searchResults"
role="listbox"
aria-label=${this.label||this.aria.label||O}
tabindex="-1"
@keydown=${this.handleSearchKeyDown}
>
${e.length>0?e.map(({path:e})=>k`<div
class="searchOption"
part="option"
role="option"
aria-selected="false"
tabindex="0"
@keydown=${t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),this.select(e))}}
@click=${()=>this.select(e)}
>
${e.map(e=>e.label).join(` / `)}
</div>`):k`<div class="empty" role="status">
${this.locale.t(`cascader.noResults`)}
</div>`}
</div>`}renderPanel(){let{t:e}=this.locale,t=this.columns(),n=this.expandedPath,r=this.selectedOptions,i=this.label||this.aria.label||e(`cascader.options`);return k`<div class="panel">
${t.map((a,o)=>k`<ul
id=${this.columnId(o)}
data-level=${o}
class="column"
part="column"
role="listbox"
aria-label=${e(`cascader.level`,{label:i,level:o+1})}
>
${a.map(e=>{let i=n[o]?.value===e.value,a=r[o]?.value===e.value,s=this.canExpand(e,o)&&!(!e.children?.length&&e.isLeaf);return k`<li
data-expanded=${i?`true`:O}
class=${N({option:!0,active:i||a,disabled:!!e.disabled,loading:!!e.loading})}
part="option"
role="option"
aria-selected=${a?`true`:`false`}
aria-disabled=${e.disabled?`true`:O}
aria-busy=${e.loading?`true`:O}
aria-controls=${i&&o+1<t.length?this.columnId(o+1):O}
tabindex=${e.disabled?-1:0}
@keydown=${t=>this.handleOptionKeyDown(t,e,o)}
@click=${()=>{e.disabled||this.handleActivate(this.pathTo(e,o),o)}}
@mouseenter=${()=>{this.expandTrigger===`hover`&&!e.disabled&&e.children?.length&&o<this.maxLevel-1&&(this.expandedValues=this.pathTo(e,o).map(e=>e.value))}}
>
${this.optionRender?this.optionRender(e,o):k`<span class="label">${e.label}</span>${e.loading?k`<span
class="loadingIndicator"
aria-hidden="true"
>...</span
>`:s?k`<span class="expandIcon" aria-hidden="true"
>${Bt}</span
>`:O}`}
</li>`})}
</ul>`)}
</div>`}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.open&&!t,r=!this.hideClearButton&&this.value.length>0&&!t&&!this.readonly,i=this.searching?this.searchValue:this.displayText,a=this.invalid||this.aria.attr(`aria-invalid`)===`true`;return k`<div
class="cascader"
part="base"
@focusout=${this.handleFocusOut}
>
<div
class=${N({selector:!0,disabled:t,focused:n})}
part="selector"
@click=${this.handleSelectorClick}
>
<div class="input" data-component="input" ?data-disabled=${t}>
<input
part="input"
class="field"
role="combobox"
aria-haspopup="listbox"
aria-expanded=${n?`true`:`false`}
aria-autocomplete=${this.showSearch?`list`:O}
aria-label=${this.aria.label??(this.label||O)}
aria-description=${this.aria.description??O}
aria-invalid=${a?`true`:O}
aria-required=${this.required?`true`:O}
aria-readonly=${this.showSearch&&this.readonly?`true`:O}
name=${this.name||O}
.value=${kn(i)}
?readonly=${!this.showSearch||this.readonly}
?disabled=${t}
?required=${this.required}
autocomplete="off"
placeholder=${this.placeholder??e(`cascader.placeholder`)}
@input=${this.handleInput}
@keydown=${this.handleInputKeyDown}
/>
</div>
${r?k`<button
type="button"
class="clearIcon"
part="clear-button"
aria-label=${e(`cascader.clear`)}
@click=${this.clear}
>
<span class="icon" aria-hidden="true">${Fe}</span>
</button>`:O}
<span
class=${N({arrow:!0,open:n})}
part="arrow"
aria-hidden="true"
><span class="icon">${we}</span></span
>
</div>
</div>
${n?k`<div
class="dropdown"
part="dropdown"
popover="manual"
@mousedown=${this.handleDropdownMouseDown}
@focusout=${this.handleFocusOut}
@keydown=${this.handleDropdownKeyDown}
>
${this.searching?this.renderSearchResults():this.renderPanel()}
</div>`:O}`}},P([A({attribute:!1})],H.prototype,`options`,void 0),P([A({attribute:!1})],H.prototype,`value`,void 0),P([A({attribute:`value`,converter:Gr})],H.prototype,`defaultValue`,void 0),P([A({type:Boolean,reflect:!0})],H.prototype,`open`,void 0),P([A()],H.prototype,`label`,void 0),P([A()],H.prototype,`placeholder`,void 0),P([A({type:Boolean,reflect:!0})],H.prototype,`invalid`,void 0),P([A({type:Boolean,reflect:!0})],H.prototype,`readonly`,void 0),P([A({type:Boolean,attribute:`hide-clear-button`})],H.prototype,`hideClearButton`,void 0),P([A({attribute:`expand-trigger`,reflect:!0})],H.prototype,`expandTrigger`,void 0),P([A({type:Boolean,attribute:`show-search`,reflect:!0})],H.prototype,`showSearch`,void 0),P([A({type:Number,attribute:`max-level`})],H.prototype,`maxLevel`,void 0),P([A()],H.prototype,`width`,void 0),P([A({attribute:!1})],H.prototype,`displayRender`,void 0),P([A({attribute:!1})],H.prototype,`filter`,void 0),P([A({attribute:!1})],H.prototype,`loadData`,void 0),P([A({attribute:!1})],H.prototype,`optionRender`,void 0),P([C()],H.prototype,`expandedValues`,void 0),P([C()],H.prototype,`searchValue`,void 0),P([E(`input`)],H.prototype,`input`,void 0),P([E(`.cascader`)],H.prototype,`anchor`,void 0),P([E(`.dropdown`)],H.prototype,`dropdown`,void 0)})))()}var Yr,U;function Xr(){return(Xr=e((()=>{l(),b(),c(),y(),p(),v(),u(),Ge(),Ne(),j(),D(),T(),nn(),Yr=e=>e.charAt(0).toUpperCase()+e.slice(1),U=class e extends wt{constructor(...e){super(...e),this.checked=!1,this.defaultChecked=!1,this.indeterminate=!1,this.value=`on`,this.label=``,this.shape=`square`,this.size=`medium`,this.color=`primary`,this.labelPlacement=`end`,this.error=!1,this.helperText=``,this.readonly=!1,this.locale=new g(this),this.aria=new s(this,()=>this.labels),this.slots=new f(this),this.dirty=!1}static{this.tagName=`minerva-checkbox`}static{this.shadowRootOptions={...wt.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[x,w`
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
`,S(Ae)]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}click(){this.input?.click()}getFormValue(){return this.checked?this.value:null}getValidity(){return this.required&&!this.checked?{flags:{valueMissing:!0},message:this.locale.t(`validation.checkMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.checked=this.defaultChecked}restoreFormState(e){this.checked=e!=null&&e!==``}willUpdate(e){e.has(`defaultChecked`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`checked`))&&(this.checked=this.defaultChecked)}updated(t){super.updated(t),this.input&&(this.input.indeterminate=this.indeterminate),d&&!this.aria.label&&!this.label&&!this.textContent?.trim()&&_(e.tagName,`no label: set the label attribute, slot a label, or use aria-label / <label for>.`)}handleClick(e){this.readonly&&e.preventDefault()}handleChange(){this.readonly||(this.dirty=!0,this.input.indeterminate=this.indeterminate,this.checked=this.input.checked,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{checked:this.checked,value:this.value}))}render(){let e=this.isDisabled,t=!!this.label||this.slots.test(`[default]`),n=[this.helperText,this.aria.description].filter(Boolean).join(` `),r=this.error||this.aria.attr(`aria-invalid`)===`true`;return k`<div
part="base"
class=${N({checkboxWrapper:!0,error:r})}
>
<label
part="control"
class=${N({checkbox:!0,[this.size]:!0,[this.shape]:!0,[`label${Yr(this.labelPlacement)}`]:!0,[`color${Yr(this.color)}`]:this.color!==`primary`,disabled:e,error:r})}
>
<input
part="input"
type="checkbox"
class="input"
.checked=${kn(this.checked)}
?disabled=${e}
?required=${this.required}
aria-checked=${this.indeterminate?`mixed`:O}
aria-label=${this.aria.label??O}
aria-description=${n||O}
aria-invalid=${r?`true`:O}
aria-readonly=${this.readonly?`true`:O}
@click=${this.handleClick}
@change=${this.handleChange}
/>
<span class="checkmark" part="checkmark"
>${this.checked&&!this.indeterminate?k`<slot name="icon"></slot>`:O}</span
>
${t?k`<span class="label" part="label"
>${this.label||k`<slot></slot>`}</span
>`:O}
</label>
${this.helperText?k`<div class="helperTextWrapper">
${r?k`<span class="errorIcon" aria-hidden="true"
>${it}</span
>`:O}
<span
part="helper-text"
class=${N({helperText:!0,errorText:r})}
>${this.helperText}</span
>
</div>`:O}
</div>`}},P([A({attribute:!1})],U.prototype,`checked`,void 0),P([A({type:Boolean,attribute:`checked`,reflect:!0})],U.prototype,`defaultChecked`,void 0),P([A({type:Boolean,reflect:!0})],U.prototype,`indeterminate`,void 0),P([A()],U.prototype,`value`,void 0),P([A()],U.prototype,`label`,void 0),P([A({reflect:!0})],U.prototype,`shape`,void 0),P([A({reflect:!0})],U.prototype,`size`,void 0),P([A({reflect:!0})],U.prototype,`color`,void 0),P([A({attribute:`label-placement`,reflect:!0})],U.prototype,`labelPlacement`,void 0),P([A({type:Boolean,reflect:!0})],U.prototype,`error`,void 0),P([A({attribute:`helper-text`})],U.prototype,`helperText`,void 0),P([A({type:Boolean,reflect:!0})],U.prototype,`readonly`,void 0),P([E(`input`)],U.prototype,`input`,void 0)})))()}var Zr,Qr,$r;function ei(){return(ei=e((()=>{l(),b(),c(),y(),p(),v(),u(),Ze(),le(),j(),D(),T(),on(),Zr=2e3,Qr=e=>e===void 0||e===``?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,$r=class e extends m{constructor(...e){super(...e),this.noWrap=!1,this.maxHeight=`24rem`,this.copyable=!1,this.status=`idle`,this.locale=new g(this),this.aria=new s(this),this.slots=new f(this)}static{this.tagName=`minerva-code-block`}static{this.styles=[x,w`
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
`,S(qe),S(Me)]}get text(){return this.code??this.textContent??``}async copy(){let e=this.text,t=typeof navigator>`u`?void 0:navigator.clipboard,n=!1;if(typeof t?.writeText==`function`)try{await t.writeText(e),n=!0}catch{n=!1}return this.isConnected?(this.showStatus(n?`copied`:`failed`),this.emit(`minerva-copy`,{value:e,success:n}),n):n}showStatus(e){clearTimeout(this.timer),this.status=e,this.timer=setTimeout(()=>this.status=`idle`,Zr)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timer),this.status=`idle`}updated(){d&&this.copyable&&!this.text.trim()&&_(e.tagName,`copyable is set but there is no text to copy (set code or the text content).`)}render(){this.slots;let e=this.locale.t,t=this.aria.label??e(`codeBlock.label`),n=Qr(this.maxHeight),r=this.copyable||!!this.language,i=k`<pre
      part="region"
      role="region"
      tabindex="0"
      aria-label=${t}
      aria-description=${this.aria.description??O}
      data-wrap=${String(!this.noWrap)}
      class=${N({codeBlock:!0,copyable:r})}
      style=${M(r?{}:{maxHeight:n})}
    ><code
        part="code"
        class=${this.language?`language-${this.language}`:O}
        data-language=${this.language??O}
      >${this.text}</code></pre>`;if(!r)return i;let a=this.status,o=a===`copied`?e(`codeBlock.copied`):a===`failed`?e(`codeBlock.copyFailed`):``,s=o||e(`codeBlock.copy`),ee=a===`failed`?`danger`:a===`copied`?`success`:`neutral`;return k`<div part="base" class="root" style=${M({maxHeight:n})}>
${i}
<div class="actions">
${this.language?k`<span part="language" class="language" aria-hidden="true"
>${this.language}</span
>`:O}
${this.copyable?k`<button
type="button"
part="copy-button"
class="iconButton ${ee} variant-ghost small square"
aria-label=${s}
title=${s}
@click=${()=>void this.copy()}
>
${a===`copied`?je:a===`failed`?Fe:xe}
</button>`:O}
</div>
${this.copyable?k`<span class="visuallyHidden" aria-live="polite"
>${o}</span
>`:O}
</div>`}},P([A()],$r.prototype,`code`,void 0),P([A({reflect:!0})],$r.prototype,`language`,void 0),P([A({type:Boolean,attribute:`no-wrap`,reflect:!0})],$r.prototype,`noWrap`,void 0),P([A({attribute:`max-height`})],$r.prototype,`maxHeight`,void 0),P([A({type:Boolean,reflect:!0})],$r.prototype,`copyable`,void 0),P([C()],$r.prototype,`status`,void 0)})))()}function ti(e){return(Array.isArray(e)?e:[e]).filter(e=>typeof e==`string`&&e.trim()!==``)}function ni(e,t){if(typeof t!=`string`)return!1;let n=t.trim().toLowerCase().split(`+`).map(e=>e.trim()).filter(Boolean),r=n[n.length-1];if(!r||String(e.key??``).toLowerCase()!==r)return!1;let i=(...e)=>e.some(e=>n.includes(e));return!(i(`mod`)&&!e.metaKey&&!e.ctrlKey||i(`ctrl`)&&!e.ctrlKey||i(`meta`,`cmd`)&&!e.metaKey||i(`shift`)&&!e.shiftKey||i(`alt`,`option`)&&!e.altKey)}function ri(e){return typeof HTMLElement>`u`||!(e instanceof HTMLElement)?!1:e.isContentEditable||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?!0:e instanceof HTMLInputElement&&![`button`,`checkbox`,`color`,`file`,`image`,`radio`,`range`,`reset`,`submit`].includes(e.type)}function ii(){return(ii=e((()=>{})))()}var ai,oi,si,W;function ci(){return(ci=e((()=>{b(),y(),p(),u(),Ln(),Vn(),Mn(),jn(),a(),Te(),oe(),j(),D(),nn(),ai=e=>e.trim().toLowerCase(),oi=e=>`${e.group??``} ${e.title} ${e.description??``} ${e.keywords??``}`,si={fromAttribute:e=>e===null?void 0:e.split(`,`).map(e=>e.trim()).filter(Boolean),toAttribute:e=>Array.isArray(e)?e.join(`, `):e},W=class e extends m{constructor(...e){super(...e),this.open=!1,this.items=[],this.maxResults=12,this.query=``,this.activeIndex=0,this.locale=new g(this),this.presence=new de(this,()=>this.panel),this.modal=new Rn(this),this.focusScope=new Nn(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new Fn(this,()=>({disableOutsidePointerEvents:!0,onFocusOutside:()=>!1,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleShortcut=e=>{let t=ti(this.shortcut);t.length!==0&&(ri(e.composedPath()[0]??e.target)&&!e.ctrlKey&&!e.metaKey&&!e.altKey||e.isComposing||t.some(t=>ni(e,t))&&(e.preventDefault(),e.stopPropagation(),this.requestOpenChange(!0,`shortcut`)))}}static{this.tagName=`minerva-command-dialog`}static{this.styles=[x,In,w`
:host{
display: contents;
}
`,S(Vt),S(_e)]}show(){this.open=!0}hide(){this.open=!1}get results(){let e=ai(this.query);return(Array.isArray(this.items)?this.items:[]).filter(e=>!e.disabled).filter(t=>!e||ai(oi(t)).includes(e)).slice(0,Math.max(0,this.maxResults))}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}select(e){this.emit(`minerva-select`,{value:e.id,item:e}),this.requestOpenChange(!1,`select`)}handleKeyDown(e){let t=this.results,n=Math.max(t.length-1,0),r={ArrowDown:e=>Math.min(e+1,n),ArrowUp:e=>Math.max(e-1,0),Home:()=>0,End:()=>n}[e.key];if(r&&(e.key.startsWith(`Arrow`)||!this.query)){e.preventDefault(),this.activeIndex=r(Math.min(this.activeIndex,n));return}let i=t[this.activeIndex];e.key===`Enter`&&i&&!e.isComposing&&(e.preventDefault(),this.select(i))}handleInput(e){this.query=e.target.value,this.activeIndex=0}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this.handleShortcut,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleShortcut,!0),h(this.panel),h(this.overlay)}willUpdate(e){e.has(`open`)&&(this.presence.sync(this.open),this.open&&(this.query=``,this.activeIndex=0)),e.has(`items`)&&d&&this.checkItems();let t=this.results.length;this.activeIndex>0&&this.activeIndex>=t&&(this.activeIndex=Math.max(t-1,0))}checkItems(){if(!Array.isArray(this.items)){_(e.tagName,"`items` must be an array of { id, title, ... } objects.");return}let t=new Set;for(let n of this.items)t.has(n.id)&&_(e.tagName,`duplicate item id "${n.id}": ids identify the chosen command in minerva-select and must be unique.`),t.add(n.id)}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)){let e=this.panel;this.open&&e?(Mt(this.overlay),Mt(e),this.modal.activate(this),this.layer.activate(e),this.focusScope.activate(e),this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.open&&(e.has(`activeIndex`)||e.has(`query`))&&this.renderRoot.querySelector(`#option-${this.activeIndex}`)?.scrollIntoView?.({block:`nearest`}),this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}afterClose(){h(this.panel),h(this.overlay),this.emit(`minerva-after-close`)}render(){if(!(this.open||this.presence.present))return O;let e=this.locale.t,t=this.open?`open`:`closed`,n=this.results,r=n[this.activeIndex]?`option-${this.activeIndex}`:void 0,i=this.placeholder??e(`command.placeholder`);return k`<div
part="overlay"
class="overlay"
popover="manual"
data-state=${t}
aria-hidden="true"
></div>
<div
part="panel"
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
${this.shortcutLabel?k`<kbd class="kbd">${this.shortcutLabel}</kbd>`:O}
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
aria-activedescendant=${r??O}
autocomplete="off"
spellcheck="false"
placeholder=${i}
.value=${kn(this.query)}
@input=${this.handleInput}
@keydown=${this.handleKeyDown}
/>
<kbd class="enterHint" aria-hidden="true"
>${this.enterLabel??e(`command.enter`)}</kbd
>
</div>
<div
id="results"
part="listbox"
class="results"
role="listbox"
aria-label=${this.resultsLabel??e(`command.results`)}
>
${n.length===0?k`<div class="empty" part="empty">
${this.emptyText??e(`command.empty`)}
</div>`:n.map((e,t)=>{let n=t===this.activeIndex;return k`<button
id=${`option-${t}`}
part="item"
type="button"
role="option"
tabindex="-1"
aria-selected=${n?`true`:`false`}
data-active=${n?`true`:O}
class="item"
@mouseenter=${()=>this.activeIndex=t}
@click=${()=>this.select(e)}
>
<span class="copy"
><strong>${e.title}</strong>${e.description?k`<small>${e.description}</small>`:O}</span
>${e.group?k`<span class="group">${e.group}</span>`:O}
</button>`})}
</div>
</div>`}},P([A({type:Boolean,reflect:!0})],W.prototype,`open`,void 0),P([A({attribute:!1})],W.prototype,`items`,void 0),P([A()],W.prototype,`label`,void 0),P([A()],W.prototype,`description`,void 0),P([A()],W.prototype,`placeholder`,void 0),P([A({attribute:`empty-text`})],W.prototype,`emptyText`,void 0),P([A({attribute:`shortcut-label`})],W.prototype,`shortcutLabel`,void 0),P([A({converter:si})],W.prototype,`shortcut`,void 0),P([A({type:Number,attribute:`max-results`})],W.prototype,`maxResults`,void 0),P([A({attribute:`results-label`})],W.prototype,`resultsLabel`,void 0),P([A({attribute:`enter-label`})],W.prototype,`enterLabel`,void 0),P([C()],W.prototype,`query`,void 0),P([C()],W.prototype,`activeIndex`,void 0),P([E(`.content`)],W.prototype,`panel`,void 0),P([E(`.overlay`)],W.prototype,`overlay`,void 0)})))()}var li,ui,di;function fi(){return(fi=e((()=>{p(),j(),D(),Wt(),li=`(prefers-color-scheme: dark)`,ui=`data-minerva-theme-scope`,di=class extends m{constructor(...e){super(...e),this.root=!1,this.media=null,this.mode=null,this.onSchemeChange=()=>this.apply()}static{this.tagName=`minerva-config`}static{this.styles=w`
:host{
display: contents;
}
`}get resolvedMode(){return this.mode}connectedCallback(){super.connectedCallback(),typeof window<`u`&&window.matchMedia&&(this.media=window.matchMedia(li),this.media.addEventListener(`change`,this.onSchemeChange))}disconnectedCallback(){super.disconnectedCallback(),this.media?.removeEventListener(`change`,this.onSchemeChange),this.media=null,this.root&&this.clear(document.documentElement)}updated(e){e.has(`root`)&&e.get(`root`)!==void 0&&this.clear(e.get(`root`)?document.documentElement:this),this.apply()}target(){return this.root?document.documentElement:this}clear(e){for(let t of[`data-theme`,`data-palette`,ui,`lang`])(e!==this||t!==`lang`)&&e.removeAttribute(t);xn(e,null),Zt(e.style,{}),e.style.removeProperty(`color-scheme`)}apply(){let e=this.target(),t=(t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},n=this.theme,r=this.media?.matches?`dark`:`light`,i=n===`system`?r:n===`github-dark`?`dark`:n===`light`||n===`dark`?n:null,a=ln(this.design)?this.design:void 0,o=bn(this.palette)?this.palette:Ht(a),s=!!o&&n!==`github-dark`;t(`data-theme`,i),t(`data-palette`,s?o:null),this.root||t(ui,i!==null||s||a!==void 0||[this.density,this.radius,this.shadow,this.fontScale].some(Boolean)?``:null),i?e.style.colorScheme=i:e.style.removeProperty(`color-scheme`),Zt(e.style,n===`github-dark`&&Cn(n)?an[n]:{}),xn(e,{preset:a,density:Dn(this.density)?this.density:void 0,radius:En(this.radius)?this.radius:void 0,shadow:Qt(this.shadow)?this.shadow:void 0,fontScale:Kt(this.fontScale)?this.fontScale:void 0},{all:!this.root&&a!==void 0}),this.root&&this.locale&&(document.documentElement.lang=this.locale),i!==this.mode&&(this.mode=i,i&&this.emit(`minerva-theme-change`,{mode:i}))}render(){return k`<slot></slot>`}},P([A({reflect:!0})],di.prototype,`theme`,void 0),P([A({reflect:!0})],di.prototype,`palette`,void 0),P([A({reflect:!0})],di.prototype,`design`,void 0),P([A({reflect:!0})],di.prototype,`density`,void 0),P([A({reflect:!0})],di.prototype,`radius`,void 0),P([A({reflect:!0})],di.prototype,`shadow`,void 0),P([A({reflect:!0,attribute:`font-scale`})],di.prototype,`fontScale`,void 0),P([A({reflect:!0})],di.prototype,`locale`,void 0),P([A({type:Boolean,reflect:!0})],di.prototype,`root`,void 0)})))()}var G;function pi(){return(pi=e((()=>{l(),b(),c(),y(),p(),v(),u(),Ln(),Vn(),Mn(),jn(),Er(),a(),oe(),j(),D(),G=class e extends m{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.color=`primary`,this.loading=!1,this.confirmDisabled=!1,this.busy=!1,this.locale=new g(this),this.aria=new s(this),this.slots=new f(this),this.presence=new de(this,()=>this.panel),this.modal=new Rn(this),this.focusScope=new Nn(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new Fn(this,()=>({disableOutsidePointerEvents:!0,onFocusOutside:()=>!1,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestClose(this.reason)})),this.reason=`outside`,this.wasPresent=!1}static{this.tagName=`minerva-confirm-dialog`}static{this.dependencies=[B]}static{this.styles=[x,In,w`
:host{
display: contents;
}
.content .body{
flex: 1 1 auto;
}
`,S(Vt)]}show(){this.open=!0}hide(){this.open=!1}requestClose(e){return!this.open||!this.emit(`minerva-open-change`,{open:!1,reason:e},{cancelable:!0})?!1:(this.open=!1,e!==`confirm`&&this.emit(`minerva-cancel`,{reason:e}),!0)}async handleConfirm(){if(!this.open||this.loading||this.busy||this.confirmDisabled||!this.emit(`minerva-confirm`,void 0,{cancelable:!0}))return;let e=this.onConfirm?.();if(e&&typeof e.then==`function`){this.busy=!0;try{await e}catch{return}finally{this.busy=!1}}this.requestClose(`confirm`)}willUpdate(e){e.has(`open`)&&this.presence.sync(this.open)}updated(t){let n=this.open||this.presence.present;if(t.has(`open`)){let t=this.panel;this.open&&t?(d&&!this.label&&!this.slots.test(`header`)&&!this.aria.label&&_(e.tagName,"set `label` (or the `header` slot / aria-label) to give the alertdialog an accessible name."),Mt(this.overlay),Mt(t),this.modal.activate(this),this.layer.activate(t),this.focusInitial(t)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!n&&this.afterClose(),this.wasPresent=n}async focusInitial(e){let t=Array.from(e.querySelectorAll(`minerva-button`));await Promise.all(t.map(e=>e.updateComplete)),this.open&&this.panel===e&&(this.focusScope.activate(e),this.emit(`minerva-after-open`))}disconnectedCallback(){super.disconnectedCallback(),h(this.panel),h(this.overlay)}afterClose(){h(this.panel),h(this.overlay),this.emit(`minerva-after-close`)}render(){if(!(this.open||this.presence.present))return O;let e=this.open?`open`:`closed`,t=this.locale.t,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description,i=this.loading||this.busy;return k`<div
part="overlay"
class="overlay"
popover="manual"
data-state=${e}
aria-hidden="true"
></div>
<div
part="panel"
class="content small"
popover="manual"
role="alertdialog"
aria-modal="true"
aria-labelledby=${n?`title`:O}
aria-label=${n?O:this.aria.label??O}
aria-describedby=${r?`description`:O}
tabindex="-1"
data-state=${e}
>
${r?k`<p id="description" class="description" part="description">
${r}
</p>`:O}
${n?k`<div id="title" class="header" part="header">
<slot name="header">${this.label}</slot>
</div>`:O}
<div class="body" part="body">
${this.slots.test(`[default]`)?k`<slot></slot>`:O}
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
</div>`}},P([A({type:Boolean,reflect:!0})],G.prototype,`open`,void 0),P([A()],G.prototype,`label`,void 0),P([A()],G.prototype,`description`,void 0),P([A({attribute:`confirm-label`})],G.prototype,`confirmLabel`,void 0),P([A({attribute:`cancel-label`})],G.prototype,`cancelLabel`,void 0),P([A({attribute:`close-label`})],G.prototype,`closeLabel`,void 0),P([A({reflect:!0})],G.prototype,`color`,void 0),P([A({type:Boolean,reflect:!0})],G.prototype,`loading`,void 0),P([A({type:Boolean,reflect:!0,attribute:`confirm-disabled`})],G.prototype,`confirmDisabled`,void 0),P([A({attribute:!1})],G.prototype,`onConfirm`,void 0),P([C()],G.prototype,`busy`,void 0),P([E(`.content`)],G.prototype,`panel`,void 0),P([E(`.overlay`)],G.prototype,`overlay`,void 0)})))()}function mi(e){let t=It(e,yi);if(!t)return null;let n=e.ownerDocument;return t===n.documentElement||t===n.body?null:t}function hi(e,t){for(let n=e;n;n=Re(n))if(n===t)return!0;return!1}function gi(e){return xi.push(e),()=>{let t=xi.lastIndexOf(e);t>=0&&xi.splice(t,1)}}function _i(e){let t=e?.isConnected===!0?It(e,Ci):null;if(t&&`confirmQueue`in t)return t.confirmQueue;let n=xi[xi.length-1];return n?n.confirmQueue:(Si??=new bi(()=>document.body),Si)}function vi(e){return t=>Ti({...t,host:t.host??e})}var yi,bi,xi,Si,Ci,wi,Ti;function Ei(){return(Ei=e((()=>{b(),y(),tt(),pi(),yi=`minerva-config:not([root]), [data-minerva-theme-scope], [data-theme], [data-palette]`,bi=class{constructor(e){this.defaultContainer=e,this.requests=[],this.current=null,this.settles=new Set}enqueue(e){return $e(G),new Promise(t=>{this.requests.push({options:e,resolve:t}),this.current||this.showNext()})}cancelAll(){let e=this.requests.splice(0);for(let t of e)t.resolve(!1);for(let e of[...this.settles])e(!1);this.current?.remove()}container(e){let t=typeof document>`u`?null:document,n=e.container;if(n)return n.isConnected?n:(d&&_(G.tagName,"confirm(): `container` is not connected to the document; the dialog is appended to document.body instead."),t.body);let r=e.host?.isConnected===!0?mi(e.host):null,i=this.defaultContainer();return r&&!hi(i,r)?r:i}showNext(){let e=this.requests.shift();if(!e){this.current=null;return}let{options:t,resolve:n}=e,r=this.container(t),i=document.createElement(G.tagName);i.label=t.title,t.description&&(i.description=t.description),t.confirmLabel&&(i.confirmLabel=t.confirmLabel),t.cancelLabel&&(i.cancelLabel=t.cancelLabel),t.closeLabel&&(i.closeLabel=t.closeLabel),t.color&&(i.color=t.color);let a=t.host;if(a?.isConnected&&!t.container){let e=yt(a);e!==yt(r)&&i.setAttribute(`lang`,e)}let o=!1,s=!1,ee=e=>{o||(o=!0,this.settles.delete(ee),n(e))};this.settles.add(ee);let te=new MutationObserver(()=>{i.isConnected||ne()}),ne=()=>{s||(s=!0,te.disconnect(),ee(!1),i.remove(),this.showNext())};i.addEventListener(`minerva-open-change`,e=>{let{open:t,reason:n}=e.detail;queueMicrotask(()=>{!t&&!e.defaultPrevented&&ee(n===`confirm`)})}),i.addEventListener(`minerva-after-close`,ne,{once:!0}),this.current=i,r.append(i),te.observe(document,{childList:!0,subtree:!0}),i.open=!0}},xi=[],Si=null,Ci=`minerva-confirm-provider`,wi=()=>(d&&_(G.tagName,`confirm() called without a document (server render): resolving false.`),Promise.resolve(!1)),Ti=e=>typeof document>`u`?wi():_i(e.host).enqueue(e)})))()}var Di;function Oi(){return(Oi=e((()=>{p(),pi(),Ei(),j(),Di=class extends m{constructor(...e){super(...e),this.confirmQueue=new bi(()=>this),this.unregister=null,this.confirm=e=>this.confirmQueue.enqueue(e)}static{this.tagName=`minerva-confirm-provider`}static{this.dependencies=[G]}static{this.styles=w`
:host{
display: contents;
}
`}connectedCallback(){super.connectedCallback(),this.unregister=gi(this)}disconnectedCallback(){super.disconnectedCallback(),this.unregister?.(),this.unregister=null,this.confirmQueue.cancelAll()}render(){return k`<slot></slot>`}}})))()}function ki(e){let t={},n={},r=0;for(let n of e)n.fixed===`left`&&(t[n.key]=r,r+=Ai(n.width));let i=0;for(let t=e.length-1;t>=0;t--){let r=e[t];r.fixed===`right`&&(n[r.key]=i,i+=Ai(r.width))}let a;for(let t of e)if(t.fixed===`left`)a=t.key;else if(a!==void 0)break;let o;for(let t=e.length-1;t>=0;t--){let n=e[t];if(n.fixed===`right`)o=n.key;else if(o!==void 0)break}return{leftOffsets:t,rightOffsets:n,lastLeftFixedKey:a,firstRightFixedKey:o}}var Ai;function ji(){return(ji=e((()=>{Ai=e=>{if(typeof e==`number`)return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:0}return 0}})))()}var Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,K,Bi;function Vi(){return(Vi=e((()=>{l(),b(),c(),y(),p(),u(),Pe(),ye(),Un(),ji(),j(),D(),T(),on(),nn(),Tn(),Mi=e=>e===void 0?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Ni=e=>e==null||e===``,Pi=null,Fi=(e,t)=>Ni(e)||Ni(t)?Ni(e)?+!Ni(t):-1:typeof e==`number`&&typeof t==`number`?e-t:e instanceof Date&&t instanceof Date?e.getTime()-t.getTime():typeof e==`boolean`&&typeof t==`boolean`?Number(e)-Number(t):(Pi??=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`}),Pi.compare(String(e),String(t))),Ii=e=>typeof e.sortable==`function`?e.sortable:e.sortable?(t,n)=>Fi(t[e.key],n[e.key]):null,Li=(e,t)=>{let n=e?.key===t?e.order:null;return{key:t,order:n===null?`ascend`:n===`ascend`?`descend`:null}},Ri={ascend:`ascending`,descend:`descending`},zi=48,K=class e extends m{constructor(...e){super(...e),this.columns=[],this.rows=[],this.loading=!1,this.loadingRows=5,this.sortState=null,this.manualSort=!1,this.selectable=!1,this.selectedRowKeys=[],this.size=`medium`,this.variant=`simple`,this.hoverable=!1,this.retryable=!1,this.overflowing=!1,this.aria=new s(this),this.locale=new g(this),this.resize=null,this.handlePageChange=e=>{let{page:t,pageSize:n}=e.detail;queueMicrotask(()=>{e.defaultPrevented||(this.pagination={...this.pagination,current:t,pageSize:n})})}}static{this.tagName=`minerva-data-table`}static{this.dependencies=[Xn]}static{this.styles=[x,w`
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
`,S(Ie),S(at)]}disconnectedCallback(){super.disconnectedCallback(),this.resize?.disconnect(),this.resize=null}keyOf(e,t){let n=this.rowKey;return typeof n==`function`?n(e,t):typeof n==`string`&&n?e[n]:t}entries(){return(this.rows??[]).map((e,t)=>({row:e,index:t,key:this.keyOf(e,t)}))}rowDisabled(e){return!!this.isRowDisabled?.(e)}willUpdate(t){if(d&&(t.has(`rows`)||t.has(`rowKey`))){let t=this.entries().map(e=>e.key);new Set(t).size!==t.length&&_(e.tagName,`rows have duplicate keys: set row-key to a unique field (or a function).`)}}updated(){this.observeOverflow();let e=this.shadowRoot?.querySelector(`minerva-pagination`);e&&this.pagination&&Object.assign(e,this.pagination)}observeOverflow(){let e=this.wrapper;if(!e){this.resize?.disconnect(),this.resize=null;return}let t=()=>{let t=e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight;t!==this.overflowing&&(this.overflowing=t)};t(),!this.resize&&typeof ResizeObserver<`u`&&(this.resize=new ResizeObserver(t),this.resize.observe(e),e.firstElementChild&&this.resize.observe(e.firstElementChild))}changeSort(e){let t=Li(this.sortState,e);this.emit(`minerva-sort-change`,t,{cancelable:!0})&&(this.sortState=t)}commitSelection(e){let t=new Set(e),n={selectedRowKeys:e,selectedRows:this.entries().filter(e=>t.has(e.key)).map(e=>e.row)};if(!this.emit(`minerva-selection-change`,n,{cancelable:!0})){this.requestUpdate();return}this.selectedRowKeys=e}toggleRow(e,t){let n=this.selectedRowKeys;this.commitSelection(t?[...n.filter(t=>t!==e),e]:n.filter(t=>t!==e))}renderTable(){let e=this.columns??[],t=this.locale.t,n=ki(e),r=this.selectable,i=r&&e[0]?.fixed===`left`,a=i?zi:0,o=this.entries(),s=this.sortState,ee=s?.order??null,te=ee===null?void 0:e.find(e=>e.key===s?.key),ne=te?Ii(te):null,re=!this.manualSort&&ne?[...o].sort((e,t)=>ee===`descend`?ne(t.row,e.row):ne(e.row,t.row)):o,ie=new Set(this.selectedRowKeys),ae=o.filter(e=>!this.rowDisabled(e.row)),oe=ae.length>0&&ae.every(e=>ie.has(e.key)),se=!oe&&o.some(e=>ie.has(e.key)),ce=()=>{let e=new Set(ae.map(e=>e.key)),t=this.selectedRowKeys;this.commitSelection(oe?t.filter(t=>!e.has(t)):[...t,...ae.map(e=>e.key).filter(e=>!ie.has(e))])},c=e=>{let t={textAlign:e.align},r=Mi(e.width);return r!==void 0&&(t.width=r,t.minWidth=r),e.fixed===`left`?t.left=`${(n.leftOffsets[e.key]??0)+a}px`:e.fixed===`right`&&(t.right=`${n.rightOffsets[e.key]??0}px`),t},le=e=>e.fixed===`left`&&e.key===n.lastLeftFixedKey?`left`:e.fixed===`right`&&e.key===n.firstRightFixedKey?`right`:O,ue=M({width:`${zi}px`,minWidth:`${zi}px`,...i?{left:`0px`}:{}}),de=i?`left`:O,pe=e.length+ +!!r,he=e=>{if(!e.sortable)return k`<th
scope="col"
style=${M(c(e))}
data-ellipsis=${e.ellipsis?`true`:O}
data-fixed=${e.fixed??O}
data-fixed-edge=${le(e)}
>
${e.header}
</th>`;let t=s?.key===e.key?s.order:null,n=t===`ascend`?fe:t===`descend`?we:me;return k`<th
scope="col"
aria-sort=${t?Ri[t]:`none`}
style=${M(c(e))}
data-ellipsis=${e.ellipsis?`true`:O}
data-fixed=${e.fixed??O}
data-fixed-edge=${le(e)}
>
<button
type="button"
part="sort-button"
class="sortButton"
data-sort-order=${t??O}
@click=${()=>this.changeSort(e.key)}
>
<span class="sortLabel">${e.header}</span
><span class="sortIcon" aria-hidden="true">${n}</span>
</button>
</th>`},ge;ge=this.loading?Array.from({length:this.loadingRows},()=>k`<tr aria-hidden="true">
${r?k`<td
class="selectionCell"
style=${ue}
data-fixed=${de}
></td>`:O}
${e.map(e=>k`<td
style=${M(c(e))}
data-fixed=${e.fixed??O}
data-fixed-edge=${le(e)}
>
<span class="skeleton"></span>
</td>`)}
</tr>`):o.length===0?k`<tr>
<td colspan=${pe} class="empty">
<slot name="empty">${this.emptyText??t(`table.empty`)}</slot>
</td>
</tr>`:cn(re,e=>e.key,({row:n,index:i,key:a},o)=>{let s=r&&ie.has(a);return k`<tr
aria-selected=${s?`true`:O}
?data-selected=${s}
>
${r?k`<td
class="selectionCell"
style=${ue}
data-fixed=${de}
>
<input
type="checkbox"
part="checkbox"
class="checkbox"
.checked=${kn(s)}
?disabled=${this.rowDisabled(n)}
aria-label=${t(`table.selectRow`,{row:this.getRowLabel?.(n,i)??String(a)})}
@change=${e=>this.toggleRow(a,e.target.checked)}
/>
</td>`:O}
${e.map(e=>k`<td
style=${M(c(e))}
data-ellipsis=${e.ellipsis?`true`:O}
data-fixed=${e.fixed??O}
data-fixed-edge=${le(e)}
>
${e.render?e.render(n,o):n[e.key]}
</td>`)}
</tr>`});let _e=Mi(this.scrollX),ve=Mi(this.scrollY),ye=!!(_e||ve)||this.overflowing,be=this.aria.label;return k`<div
part="wrapper"
class=${N({wrapper:!0,wrapperBordered:this.variant===`bordered`,wrapperScrollY:!!ve})}
role=${ye?`region`:O}
tabindex=${ye?0:O}
aria-label=${ye?be??t(`table.scrollRegion`):O}
style=${M(ve?{maxHeight:ve,overflowY:`auto`}:{})}
>
<table
part="table"
class=${N({table:!0,[this.size]:!0,[this.variant]:!0,hoverable:this.hoverable,scrollX:!!_e})}
style=${M(_e?{minWidth:_e}:{})}
aria-label=${be??O}
aria-description=${this.aria.description??O}
>
<thead>
<tr>
${r?k`<th
scope="col"
class="selectionCell"
style=${ue}
data-fixed=${de}
>
<input
type="checkbox"
part="checkbox"
class="checkbox"
.checked=${kn(oe)}
.indeterminate=${se}
?disabled=${ae.length===0||this.loading}
aria-label=${t(`table.selectAll`)}
@change=${ce}
/>
</th>`:O}
${e.map(he)}
</tr>
</thead>
<tbody>
${ge}
</tbody>
</table>
</div>`}render(){let e=!!this.error&&!this.loading;return k`<div
part="base"
class="dataTable"
aria-busy=${this.loading?`true`:O}
>
${e?k`<div part="error" class="error" role="alert">
<div class="errorTitle">
<slot name="error">${this.error}</slot>
</div>
${this.retryable?k`<button
type="button"
part="retry-button"
class="customButton neutral variant-outline small retry"
@click=${()=>this.emit(`minerva-retry`)}
>
<span class="label"
><span class="retryIcon" aria-hidden="true"
>${se}</span
>${this.retryLabel??this.locale.t(`table.retry`)}</span
>
</button>`:O}
</div>`:k`${this.renderTable()}
${this.pagination?k`<minerva-pagination
part="pagination"
exportparts="base: pagination-base, item: pagination-item"
@minerva-page-change=${this.handlePageChange}
></minerva-pagination>`:O}`}
</div>`}},P([A({attribute:!1})],K.prototype,`columns`,void 0),P([A({attribute:!1})],K.prototype,`rows`,void 0),P([A({attribute:`row-key`})],K.prototype,`rowKey`,void 0),P([A({attribute:`empty-text`})],K.prototype,`emptyText`,void 0),P([A({type:Boolean,reflect:!0})],K.prototype,`loading`,void 0),P([A({type:Number,attribute:`loading-rows`})],K.prototype,`loadingRows`,void 0),P([A({attribute:!1})],K.prototype,`sortState`,void 0),P([A({type:Boolean,attribute:`manual-sort`})],K.prototype,`manualSort`,void 0),P([A({type:Boolean,reflect:!0})],K.prototype,`selectable`,void 0),P([A({attribute:!1})],K.prototype,`selectedRowKeys`,void 0),P([A({attribute:!1})],K.prototype,`isRowDisabled`,void 0),P([A({attribute:!1})],K.prototype,`getRowLabel`,void 0),P([A({reflect:!0})],K.prototype,`size`,void 0),P([A({reflect:!0})],K.prototype,`variant`,void 0),P([A({type:Boolean,reflect:!0})],K.prototype,`hoverable`,void 0),P([A({attribute:`scroll-x`})],K.prototype,`scrollX`,void 0),P([A({attribute:`scroll-y`})],K.prototype,`scrollY`,void 0),P([A({attribute:!1})],K.prototype,`pagination`,void 0),P([A()],K.prototype,`error`,void 0),P([A({type:Boolean})],K.prototype,`retryable`,void 0),P([A({attribute:`retry-label`})],K.prototype,`retryLabel`,void 0),P([C()],K.prototype,`overflowing`,void 0),P([E(`.wrapper`)],K.prototype,`wrapper`,void 0),Bi=class extends m{constructor(...e){super(...e),this.primary=``,this.monospace=!1,this.maxWidth=360,this.observer=null}static{this.tagName=`minerva-table-cell-content`}static{this.styles=[x,w`
:host{
display: block;
min-width: 0;
}
`,S(at)]}hasSecondarySlot(){return Array.from(this.children).some(e=>e.getAttribute(`slot`)===`secondary`)}connectedCallback(){super.connectedCallback(),this.observer??=typeof MutationObserver>`u`?null:new MutationObserver(()=>this.requestUpdate()),this.observer?.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}render(){let e=this.secondary!==void 0&&this.secondary!==null||this.hasSecondarySlot(),t=N({cellPrimary:!0,cellMono:this.monospace,cellStrong:e}),n=k`<slot>${this.primary}</slot>`;return k`<div
part="base"
class="cellContent"
style=${M({maxWidth:Mi(this.maxWidth)})}
>
${this.monospace?k`<code class=${t}>${n}</code>`:k`<div class=${t}>${n}</div>`}
${e?k`<div class="cellSecondary">
<slot name="secondary">${this.secondary}</slot>
</div>`:O}
</div>`}},P([A()],Bi.prototype,`primary`,void 0),P([A()],Bi.prototype,`secondary`,void 0),P([A({type:Boolean,reflect:!0})],Bi.prototype,`monospace`,void 0),P([A({attribute:`max-width`})],Bi.prototype,`maxWidth`,void 0)})))()}var Hi,Ui;function Wi(){return(Wi=e((()=>{b(),p(),u(),i(),j(),D(),Hi=class extends m{constructor(...e){super(...e),this.label=``}static{this.tagName=`minerva-description-item`}static{this.styles=[x,w`
:host{
display: contents;
}
`]}render(){return k`<slot></slot>`}},P([A({reflect:!0})],Hi.prototype,`label`,void 0),Ui=class e extends m{constructor(...e){super(...e),this.items=[],this.observer=null}static{this.tagName=`minerva-description-list`}static{this.dependencies=[Hi]}static{this.shadowRootOptions={...m.shadowRootOptions,slotAssignment:`manual`}}static{this.styles=[x,w`
:host{
display: block;
}
`,S(st)]}declarativeItems(){return Array.from(this.children).filter(e=>e.localName===Hi.tagName)}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.requestUpdate()),this.observer.observe(this,{childList:!0,attributes:!0,subtree:!0,attributeFilter:[`label`]}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null}updated(){let t=this.declarativeItems();if(Array.from(this.renderRoot.querySelectorAll(`slot[data-item]`)).forEach((e,n)=>{let r=t[n];r&&typeof e.assign==`function`&&e.assign(r)}),d){let t=Array.from(this.children).filter(e=>e.localName!==Hi.tagName);t.length&&_(e.tagName,`only <minerva-description-item> children are rendered (ignored: <${t[0].localName}>).`)}}render(){let e=this.declarativeItems();return k`<dl part="base" class="descriptionList">
${(this.items??[]).map(e=>k`<div part="row" class="row">
<dt part="term">${e.label}</dt>
<dd part="description">${e.value}</dd>
</div>`)}
${e.map(e=>k`<div part="row" class="row">
<dt part="term">${e.label}</dt>
<dd part="description"><slot data-item></slot></dd>
</div>`)}
</dl>`}},P([A({attribute:!1})],Ui.prototype,`items`,void 0)})))()}var Gi,Ki;function qi(){return(qi=e((()=>{b(),p(),v(),u(),be(),j(),D(),T(),on(),Gi=e=>typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Ki=class e extends m{constructor(...e){super(...e),this.variant=`solid`,this.orientation=`horizontal`,this.thickness=1,this.spacing=16,this.textAlign=`center`,this.elevation=!1,this.flexItem=!1,this.slots=new f(this)}static{this.tagName=`minerva-divider`}static{this.styles=[x,w`
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
`,S(ne)]}updated(){d&&this.orientation===`vertical`&&this.slots.test(`[default]`)&&_(e.tagName,`text is only rendered by horizontal dividers; it is ignored when orientation is vertical.`)}render(){let e=this.orientation===`horizontal`,t=e&&this.slots.test(`[default]`),n=this.textAlign,r={};if(this.thickness!=null&&!Number.isNaN(this.thickness)&&(r.borderWidth=`${this.thickness}px`),this.length!=null&&this.length!==``&&(r[e?`width`:`height`]=Gi(this.length)),this.spacing!=null&&!Number.isNaN(this.spacing)){let t=`${this.spacing}px`;r.marginTop=e?t:`0`,r.marginBottom=e?t:`0`,r.marginLeft=e?`0`:t,r.marginRight=e?`0`:t}let i=N({divider:!0,[this.variant]:!0,[this.orientation]:!0,withText:t,[`text${n.charAt(0).toUpperCase()}${n.slice(1)}`]:t,elevation:this.elevation,flexItem:this.flexItem});return t?k`<div
part="base"
role="separator"
aria-orientation=${this.orientation}
class=${i}
style=${M(r)}
>
<span class="text" part="text"><slot></slot></span>
</div>`:k`<hr
part="base"
aria-orientation=${this.orientation}
class=${i}
style=${M(r)}
/>`}},P([A({reflect:!0})],Ki.prototype,`variant`,void 0),P([A({reflect:!0})],Ki.prototype,`orientation`,void 0),P([A({type:Number})],Ki.prototype,`thickness`,void 0),P([A()],Ki.prototype,`length`,void 0),P([A({type:Number})],Ki.prototype,`spacing`,void 0),P([A({attribute:`text-align`})],Ki.prototype,`textAlign`,void 0),P([A({type:Boolean,reflect:!0})],Ki.prototype,`elevation`,void 0),P([A({type:Boolean,reflect:!0,attribute:`flex-item`})],Ki.prototype,`flexItem`,void 0)})))()}var Ji,q;function Yi(){return(Yi=e((()=>{l(),b(),c(),y(),p(),v(),u(),Ln(),Vn(),Mn(),jn(),oe(),ie(),j(),D(),T(),Ji=[`left`,`right`,`top`,`bottom`],q=class e extends m{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.side=`right`,this.size=`medium`,this.hideCloseButton=!1,this.dialogRole=`dialog`,this.nonModal=!1,this.locale=new g(this),this.aria=new s(this),this.slots=new f(this),this.presence=new de(this,()=>this.panel),this.modal=new Rn(this),this.focusScope=new Nn(this,()=>({trapped:!this.nonModal,loop:!0,restoreFocus:!0})),this.layer=new Fn(this,()=>({disableOutsidePointerEvents:!this.nonModal,branches:()=>[this.triggerElement()],onFocusOutside:()=>this.nonModal,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleClick=e=>{if(e.defaultPrevented)return;let t=e.composedPath(),n=this.triggerElement();if(n&&t.includes(n)){this.requestOpenChange(!this.open,`trigger`);return}let r=t.find(e=>e instanceof Element&&e.hasAttribute(`data-drawer-close`));r&&this.contains(r)&&this.requestOpenChange(!1,`close-slot`)}}static{this.tagName=`minerva-drawer`}static{this.styles=[x,In,w`
:host{
display: contents;
}
`,S(Oe)]}show(){this.open=!0}hide(){this.open=!1}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleClick)}willUpdate(t){t.has(`open`)&&this.presence.sync(this.open),d&&t.has(`side`)&&!Ji.includes(this.side)&&_(e.tagName,`invalid side "${this.side}" (expected left, right, top or bottom).`)}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)||e.has(`nonModal`)&&this.open){let t=this.panel;this.open&&t?(e.has(`nonModal`)&&!e.has(`open`)&&(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate()),Mt(this.overlay),Mt(t),this.nonModal||this.modal.activate(this),this.layer.activate(t),this.focusScope.activate(t),e.has(`open`)&&this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleClick),h(this.panel),h(this.overlay)}afterClose(){h(this.panel),h(this.overlay),this.emit(`minerva-after-close`)}render(){let e=this.open||this.presence.present,t=this.open?`open`:`closed`,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description,i=Ji.includes(this.side)?this.side:`right`;return k`<slot name="trigger"></slot> ${e?k`${this.nonModal?O:k`<div
part="overlay"
class="overlay"
popover="manual"
data-state=${t}
aria-hidden="true"
></div>`}
<div
part="panel"
class=${N({content:!0,[i]:!0,[this.size]:!0})}
popover="manual"
role=${this.dialogRole}
aria-modal=${this.nonModal?O:`true`}
aria-labelledby=${n?`title`:O}
aria-label=${n?O:this.aria.label??O}
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
${n?k`<div id="title" class="header" part="header">
<slot name="header">${this.label}</slot>
</div>`:O}
<div class="body" part="body"><slot></slot></div>
${this.slots.test(`footer`)?k`<div class="footer" part="footer">
<slot name="footer"></slot>
</div>`:O}
${this.hideCloseButton?O:k`<button
type="button"
class="close"
part="close-button"
aria-label=${this.closeLabel??this.locale.t(`drawer.close`)}
@click=${()=>this.requestOpenChange(!1,`close-button`)}
>
${Fe}
</button>`}
</div>`:O}`}},P([A({type:Boolean,reflect:!0})],q.prototype,`open`,void 0),P([A()],q.prototype,`label`,void 0),P([A()],q.prototype,`description`,void 0),P([A({attribute:`hidden-description`})],q.prototype,`hiddenDescription`,void 0),P([A({reflect:!0})],q.prototype,`side`,void 0),P([A({reflect:!0})],q.prototype,`size`,void 0),P([A({type:Boolean,attribute:`hide-close-button`})],q.prototype,`hideCloseButton`,void 0),P([A({attribute:`close-label`})],q.prototype,`closeLabel`,void 0),P([A({attribute:`dialog-role`})],q.prototype,`dialogRole`,void 0),P([A({type:Boolean,reflect:!0,attribute:`non-modal`})],q.prototype,`nonModal`,void 0),P([E(`.content`)],q.prototype,`panel`,void 0),P([E(`.overlay`)],q.prototype,`overlay`,void 0)})))()}var Xi,Zi,Qi,$i;function ea(){return(ea=e((()=>{l(),b(),y(),p(),v(),u(),Ft(),j(),D(),T(),on(),Xi=An`<svg class="defaultIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none" aria-hidden="true" focusable="false"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM5 5v9h4a3 3 0 0 0 6 0h4V5ZM5 16v3h14v-3h-2.54a5 5 0 0 1-8.92 0Z" /></svg>`,Zi=An`<svg class="defaultIcon" aria-hidden="true" focusable="false" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse style="fill: var(--surface-muted-color)" cx="32" cy="33" rx="32" ry="7" /><g fill-rule="nonzero" style="stroke: var(--border-strong-color)"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" /><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" style="fill: var(--surface-color)" /></g></g></svg>`,Qi=e=>e&&/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,$i=class e extends m{constructor(...e){super(...e),this.heading=``,this.hideDescription=!1,this.hideIcon=!1,this.useSvg=!1,this.showShadow=!1,this.locale=new g(this),this.aria=new s(this),this.slots=new f(this)}static{this.tagName=`minerva-empty`}static{this.styles=[x,w`
:host{
display: block;
}
`,S(ee)]}updated(){d&&this.hideDescription&&this.description&&_(e.tagName,`description is ignored while hide-description is set.`)}render(){let e=!!this.heading||this.slots.test(`heading`),t=this.slots.test(`description`),n=this.description??this.locale.t(`empty.description`),r=!this.hideDescription&&(t||n!==``),i=this.slots.test(`action`)||this.slots.test(`secondary-action`),a=this.aria.label;return k`<div
part="base"
class=${N({empty:!0,showShadow:this.showShadow,sized:!!this.size,[`size-${this.size}`]:!!this.size})}
style=${M({width:Qi(this.width),height:Qi(this.height)})}
role="status"
aria-label=${a??O}
aria-labelledby=${a?O:e?`title`:r?`description`:O}
aria-describedby=${e&&r?`description`:O}
>
${this.hideIcon?O:k`<div part="icon" class="iconWrapper">
<slot name="icon">${this.useSvg?Zi:Xi}</slot>
</div>`}
${e?k`<div id="title" part="heading" class="title">
<slot name="heading">${this.heading}</slot>
</div>`:O}
${r?k`<div id="description" part="description" class="description">
<slot name="description">${n}</slot>
</div>`:O}
${i?k`<div part="actions" class="actions">
<slot name="action"></slot><slot name="secondary-action"></slot>
</div>`:O}
${this.slots.test(`[default]`)?k`<div part="footer" class="footer"><slot></slot></div>`:O}
</div>`}},P([A()],$i.prototype,`heading`,void 0),P([A()],$i.prototype,`description`,void 0),P([A({type:Boolean,attribute:`hide-description`})],$i.prototype,`hideDescription`,void 0),P([A({type:Boolean,attribute:`hide-icon`})],$i.prototype,`hideIcon`,void 0),P([A({reflect:!0})],$i.prototype,`size`,void 0),P([A({type:Boolean,attribute:`use-svg`})],$i.prototype,`useSvg`,void 0),P([A()],$i.prototype,`width`,void 0),P([A()],$i.prototype,`height`,void 0),P([A({type:Boolean,attribute:`show-shadow`})],$i.prototype,`showShadow`,void 0)})))()}var ta,na;function ra(){return(ra=e((()=>{b(),p(),v(),u(),Ee(),j(),D(),ta=e=>e.localName===`minerva-checkbox`||e.localName===`minerva-switch`||e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`),na=class e extends m{constructor(...e){super(...e),this.label=``,this.helperText=``,this.errorMessage=``,this.invalid=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.requiredIndicator=`*`,this.slots=new f(this),this.observer=null,this.control=null,this.saved=new Map}static{this.tagName=`minerva-form-control`}static{this.styles=[x,w`
:host{
display: block;
}
.label{
cursor: default;
}
`,S(Lt)]}get controlElement(){return Array.from(this.children).find(e=>!e.hasAttribute(`slot`))??null}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.sync()),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.release()}updated(){this.sync()}get labelText(){return this.label?this.label:Array.from(this.children).filter(e=>e.getAttribute(`slot`)===`label`).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `)}slotText(e){return Array.from(this.children).filter(t=>t.getAttribute(`slot`)===e).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `)}get descriptionText(){return this.invalid?this.errorMessage||this.slotText(`error-message`):this.helperText||this.slotText(`helper-text`)}save(e,t){this.saved.has(e)||this.saved.set(e,t)}setAttr(e,t,n){let r=`@${t}`;if(n===null){if(!this.saved.has(r))return;let n=this.saved.get(r);this.saved.delete(r),n===null?e.removeAttribute(t):e.setAttribute(t,n);return}this.save(r,e.getAttribute(t)),e.getAttribute(t)!==n&&e.setAttribute(t,n)}setProp(e,t,n){let r=`.${t}`;if(!n){if(!this.saved.has(r))return;e[t]=this.saved.get(r),this.saved.delete(r);return}this.save(r,e[t]),e[t]=!0}propFor(e,t){return{invalid:[`invalid`,`error`],required:[`required`],disabled:[`disabled`],readonly:[`readonly`,`readOnly`]}[t].find(t=>t in e&&typeof e[t]==`boolean`)??null}release(){let e=this.control;if(e){for(let[t,n]of this.saved)if(t.startsWith(`@`)){let r=t.slice(1);n===null?e.removeAttribute(r):e.setAttribute(r,n)}else e[t.slice(1)]=n;this.saved.clear(),this.control=null}}sync(){let t=this.controlElement;if(t!==this.control&&(this.release(),this.control=t),!t)return;let n=this.labelText,r=this.saved.has(`@aria-label`);n&&(r||!t.hasAttribute(`aria-label`))?this.setAttr(t,`aria-label`,n):n||this.setAttr(t,`aria-label`,null);let i=this.descriptionText;this.setAttr(t,`aria-description`,i||null);for(let e of[`invalid`,`required`,`disabled`,`readonly`]){let n=this.propFor(t,e);n&&this.setProp(t,n,this[e])}if(this.setAttr(t,`aria-invalid`,this.invalid?`true`:null),this.setAttr(t,`aria-required`,this.required?`true`:null),this.setAttr(t,`aria-readonly`,this.readonly?`true`:null),d&&this.children.length>0){let t=Array.from(this.children).filter(e=>!e.hasAttribute(`slot`));t.length>1&&_(e.tagName,`wraps ONE control, found ${t.length} elements in the default slot: only the first one is wired.`)}}handleLabelClick(e){let t=this.controlElement;t&&!this.disabled&&(e.preventDefault(),ta(t)?t.click():t.focus())}render(){let e=!!this.label||this.slots.test(`label`),t=!!this.helperText||this.slots.test(`helper-text`),n=!!this.errorMessage||this.slots.test(`error-message`);return k`<div class="root" part="base">
${e?k`<label
id="label"
class="label"
part="label"
@click=${this.handleLabelClick}
>${this.label||k`<slot name="label"></slot>`}${this.required?k`<span
class="required"
part="required-indicator"
aria-hidden="true"
>${this.requiredIndicator}</span
>`:O}</label
>`:O}
<slot @slotchange=${()=>this.sync()}></slot>
${!this.invalid&&t?k`<div id="helper" class="helper" part="helper-text">
${this.helperText||k`<slot name="helper-text"></slot>`}
</div>`:O}
${this.invalid&&n?k`<div
id="error"
class="error"
part="error-message"
role="alert"
>
${this.errorMessage||k`<slot name="error-message"></slot>`}
</div>`:O}
</div>`}},P([A()],na.prototype,`label`,void 0),P([A({attribute:`helper-text`})],na.prototype,`helperText`,void 0),P([A({attribute:`error-message`})],na.prototype,`errorMessage`,void 0),P([A({type:Boolean,reflect:!0})],na.prototype,`invalid`,void 0),P([A({type:Boolean,reflect:!0})],na.prototype,`required`,void 0),P([A({type:Boolean,reflect:!0})],na.prototype,`disabled`,void 0),P([A({type:Boolean,reflect:!0})],na.prototype,`readonly`,void 0),P([A({attribute:`required-indicator`})],na.prototype,`requiredIndicator`,void 0)})))()}var ia;function aa(){return(aa=e((()=>{p(),u(),br(),We(),Nt(),Gn(),j(),D(),on(),ia=class e extends m{constructor(...e){super(...e),this.columns=1,this.gap=4}static{this.tagName=`minerva-form-layout`}static{this.styles=[x,w`
:host{
display: block;
min-width: 0;
}
.layout ::slotted(*){
min-width: 0;
}
`,S(zt),S(ze)]}render(){let t=Wn(e.tagName,this.columns,this.rowGap??this.gap,this.columnGap??this.gap);return k`<div class="root" part="base" style=${M(t)}>
<div class="layout" part="layout"><slot></slot></div>
</div>`}},P([A({converter:Jn})],ia.prototype,`columns`,void 0),P([A({converter:yr})],ia.prototype,`gap`,void 0),P([A({attribute:`row-gap`,converter:yr})],ia.prototype,`rowGap`,void 0),P([A({attribute:`column-gap`,converter:yr})],ia.prototype,`columnGap`,void 0)})))()}function oa(e){let t=``;if(e&&typeof window<`u`){let n=hn(window);n.isSupported&&(n.addHook(`uponSanitizeAttribute`,(e,t)=>{t.attrName===`src`&&(e.nodeName!==`IMG`||!/^data:image\/(?:png|jpeg|gif|webp|avif);base64,[a-z0-9+/=\s]+$/i.test(t.attrValue))&&(t.keepAttr=!1)}),n.sanitize(la,ca)===ua&&(t=n.sanitize(e,ca)))}return`<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="${sa}"><meta name="referrer" content="no-referrer"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>${t}</body></html>`}var sa,ca,la,ua;function da(){return(da=e((()=>{sn(),sa=`default-src 'none'; script-src 'none'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'; object-src 'none'; frame-src 'none'; font-src 'none'; media-src 'none'; form-action 'none'; base-uri 'none'`,ca={ALLOWED_TAGS:`a abbr b bdi bdo blockquote br caption center code col colgroup dd del div dl dt em figcaption figure h1 h2 h3 h4 h5 h6 hr i img ins li ol p pre s section small span strong style sub sup table tbody td tfoot th thead tr u ul wbr`.split(` `),ALLOWED_ATTR:`alt title class style lang dir role width height align valign bgcolor border cellpadding cellspacing colspan rowspan scope src`.split(` `),ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!0,FORBID_TAGS:[`base`,`meta`,`link`,`script`,`form`,`input`,`button`,`iframe`,`object`,`embed`,`svg`,`math`],FORBID_ATTR:[`href`,`srcdoc`,`srcset`,`action`,`formaction`,`target`,`ping`,`id`,`name`],FORCE_BODY:!0,RETURN_TRUSTED_TYPE:!1},la=`<p title="t" onclick="x()">ok</p><script>x()<\/script><img alt="a" src="https://x.invalid/p" onerror="x()">`,ua=`<p title="t">ok</p><img alt="a">`})))()}var fa;function pa(){return(pa=e((()=>{l(),b(),p(),u(),et(),da(),j(),D(),on(),rn(),fa=class e extends m{constructor(...e){super(...e),this.html=``,this.label=``,this.viewport=`desktop`,this.mobileWidth=375,this.height=600,this.doc=oa(),this.aria=new s(this)}static{this.tagName=`minerva-html-preview`}static{this.styles=[x,w`
:host{
display: block;
}
`,S(nt)]}willUpdate(e){e.has(`html`)&&(this.doc=oa(this.html))}updated(){d&&!this.label&&!this.aria.label&&_(e.tagName,`set label (or aria-label): the iframe needs a title for assistive technologies.`)}render(){let e=Number.isFinite(this.mobileWidth)&&this.mobileWidth>0?this.mobileWidth:375,t=Number.isFinite(this.height)&&this.height>0?this.height:600;return k`<div part="base" class="preview">
${_n(this.doc,k`<iframe
part="frame"
class="frame"
title=${this.label||this.aria.label||``}
sandbox=""
referrerpolicy="no-referrer"
srcdoc=${this.doc}
style=${M({width:this.viewport===`mobile`?`${e}px`:`100%`,height:`${t}px`})}
></iframe>`)}
</div>`}},P([A()],fa.prototype,`html`,void 0),P([A()],fa.prototype,`label`,void 0),P([A({reflect:!0})],fa.prototype,`viewport`,void 0),P([A({type:Number,attribute:`mobile-width`})],fa.prototype,`mobileWidth`,void 0),P([A({type:Number})],fa.prototype,`height`,void 0),P([C()],fa.prototype,`doc`,void 0)})))()}var ma,ha,J;function ga(){return(ga=e((()=>{l(),b(),c(),y(),p(),u(),Ze(),Mn(),Ge(),dt(),j(),D(),T(),ma=200,ha=300,J=class e extends m{constructor(...e){super(...e),this.color=`neutral`,this.variant=`ghost`,this.size=`medium`,this.shape=`circle`,this.disabled=!1,this.loading=!1,this.toggle=!1,this.pressed=!1,this.tooltipPlacement=`top`,this.noTooltip=!1,this.type=`button`,this.tooltipOpen=!1,this.tooltipPositioned=!1,this.internals=At(this),this.aria=new s(this),this.locale=new g(this),this.floating=new Bn(this,()=>({anchor:()=>this.button,floating:()=>this.tooltipElement,branches:()=>[this],placement:this.tooltipPlacement,offset:{mainAxis:8},dismissOnPointerDownOutside:!1,dismissOnFocusOutside:!1,onDismiss:()=>this.hideTooltip(),onPosition:()=>{this.tooltipPositioned=!0}})),this.handlePointerEnter=()=>{if(!this.tooltipEnabled||this.tooltipOpen){this.clearTimers();return}this.clearTimers(),this.enterTimer=setTimeout(()=>this.showTooltip(),ma)},this.handlePointerLeave=()=>{this.clearTimers(),this.tooltipOpen&&(this.leaveTimer=setTimeout(()=>this.hideTooltip(),ha))},this.blockInactiveClicks=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-icon-button`}static{this.formAssociated=!0}static{this.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[x,In,w`
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
`,S(qe),S(bt)]}get form(){return this.internals?.form??null}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}get tooltipContent(){return this.tooltip||this.label||void 0}get tooltipEnabled(){return!this.noTooltip&&!!this.tooltipContent&&!this.disabled&&!this.loading}clearTimers(){clearTimeout(this.enterTimer),clearTimeout(this.leaveTimer)}showTooltip(){this.tooltipEnabled&&(this.clearTimers(),this.tooltipOpen=!0)}hideTooltip(){this.clearTimers(),this.tooltipOpen=!1,this.tooltipPositioned=!1}handleClick(e){if(this.loading||this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}if(this.toggle){let e=!this.pressed;this.emit(`minerva-pressed-change`,{pressed:e},{cancelable:!0})&&(this.pressed=e)}let t=this.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockInactiveClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockInactiveClicks,!0),this.clearTimers(),this.tooltipOpen=!1}willUpdate(e){(e.has(`disabled`)||e.has(`loading`)||e.has(`noTooltip`))&&!this.tooltipEnabled&&this.hideTooltip()}updated(){this.floating.sync(this.tooltipOpen&&this.tooltipEnabled),d&&!this.label&&!this.aria.label&&_(e.tagName,`icon buttons only contain an icon: set label (or aria-label) to give them an accessible name.`)}render(){let e=this.tooltipOpen&&this.tooltipEnabled;return k`<button
part="button"
type="button"
class=${N({iconButton:!0,[this.color]:!0,[`variant-${this.variant}`]:!0,[this.size]:!0,[this.shape]:!0,disabled:this.disabled,loading:this.loading,pressed:this.toggle&&this.pressed})}
?disabled=${this.disabled}
tabindex=${this.disabled?`-1`:`0`}
aria-label=${this.label??this.aria.label??this.locale.t(`iconButton.default`)}
aria-description=${this.aria.description??O}
aria-describedby=${e?`tooltip`:O}
aria-pressed=${this.toggle?String(this.pressed):O}
aria-expanded=${this.aria.attr(`aria-expanded`)??O}
aria-haspopup=${this.aria.attr(`aria-haspopup`)??O}
aria-busy=${this.loading?`true`:O}
aria-disabled=${this.loading&&!this.disabled?`true`:O}
@click=${this.handleClick}
@mouseenter=${this.handlePointerEnter}
@mouseleave=${this.handlePointerLeave}
@focus=${()=>this.showTooltip()}
@blur=${()=>this.hideTooltip()}
>
${this.loading?k`<span
class=${N({spinner:!0,[this.size]:!0})}
part="spinner"
role="progressbar"
aria-label=${this.locale.t(`common.loading`)}
>${De}</span
>`:k`<span class="glyph" part="glyph" aria-hidden="true"
><slot></slot
></span>`}
</button>
${e?k`<div
id="tooltip"
part="tooltip"
role="tooltip"
popover="manual"
class=${N({tooltip:!0,neutral:!0,solid:!0,default:!0,"animation-fade":!0,show:this.tooltipPositioned})}
@mouseenter=${()=>this.clearTimers()}
@mouseleave=${this.handlePointerLeave}
>
${this.tooltipContent}
</div>`:O}`}},P([A()],J.prototype,`label`,void 0),P([A({reflect:!0})],J.prototype,`color`,void 0),P([A({reflect:!0})],J.prototype,`variant`,void 0),P([A({reflect:!0})],J.prototype,`size`,void 0),P([A({reflect:!0})],J.prototype,`shape`,void 0),P([A({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),P([A({type:Boolean,reflect:!0})],J.prototype,`loading`,void 0),P([A({type:Boolean,reflect:!0})],J.prototype,`toggle`,void 0),P([A({type:Boolean,reflect:!0})],J.prototype,`pressed`,void 0),P([A()],J.prototype,`tooltip`,void 0),P([A({attribute:`tooltip-placement`})],J.prototype,`tooltipPlacement`,void 0),P([A({type:Boolean,attribute:`no-tooltip`})],J.prototype,`noTooltip`,void 0),P([A({reflect:!0})],J.prototype,`type`,void 0),P([C()],J.prototype,`tooltipOpen`,void 0),P([C()],J.prototype,`tooltipPositioned`,void 0),P([E(`button`)],J.prototype,`button`,void 0),P([E(`.tooltip`)],J.prototype,`tooltipElement`,void 0)})))()}var _a,Y;function va(){return(va=e((()=>{l(),b(),c(),y(),p(),v(),u(),ht(),Ge(),j(),D(),T(),nn(),_a=0,Y=class e extends wt{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.type=`text`,this.variant=`outline`,this.size=`medium`,this.invalid=!1,this.placeholder=``,this.readonly=!1,this.clearable=!1,this.showCharCount=!1,this.passwordVisible=!1,this.countId=`minerva-input-count-${_a++}`,this.locale=new g(this),this.aria=new s(this,()=>this.labels),this.slots=new f(this),this.dirty=!1}static{this.tagName=`minerva-input`}static{this.shadowRootOptions={...wt.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[x,w`
:host{
display: inline-flex;
width: 100%;
min-width: 0;
vertical-align: middle;
}
`,S(Be)]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}select(){this.input?.select()}getFormValue(){return this.value}getValidity(){let e=this.input;return e?{flags:ct(e.validity),message:e.validationMessage,anchor:e}:this.required&&!this.value?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`)}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.passwordVisible=!1}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`value`)&&t.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),t.has(`defaultValue`)&&!this.dirty&&(this.value=this.defaultValue),d&&t.has(`maxlength`)&&this.minlength!==void 0&&this.maxlength!==void 0&&this.minlength>this.maxlength&&_(e.tagName,`minlength (${this.minlength}) is greater than maxlength (${this.maxlength}): no value can be valid.`)}handleInput(){this.value=this.input.value,this.emit(`minerva-input`,{value:this.value})}handleChange(){this.value=this.input.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}clear(){this.value=``,this.input.value=``,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.emit(`minerva-input`,{value:``}),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:``}),this.emit(`minerva-clear`),this.input.focus()}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.type===`password`,r=this.clearable&&this.value!==``&&!t&&!this.readonly,i=this.passwordVisible?this.hidePasswordLabel??e(`input.hidePassword`):this.showPasswordLabel??e(`input.showPassword`),a=this.showCharCount?this.countId:void 0;return k`<div
part="base"
class=${N({root:!0,[this.variant]:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
data-component="input"
>
${this.slots.test(`prefix`)?k`<span class="addon start"><slot name="prefix"></slot></span>`:O}
<input
part="input"
class="field"
.value=${kn(this.value)}
type=${n&&this.passwordVisible?`text`:this.type}
name=${this.name||O}
placeholder=${this.placeholder||O}
?disabled=${t}
?readonly=${this.readonly}
?required=${this.required}
minlength=${this.minlength??O}
maxlength=${this.maxlength??O}
pattern=${this.pattern??O}
min=${this.min??O}
max=${this.max??O}
step=${this.step??O}
autocomplete=${this.autocomplete??O}
inputmode=${this.inputmode??O}
aria-label=${this.aria.label??O}
aria-description=${this.aria.description??O}
aria-describedby=${a??O}
aria-invalid=${this.invalid||this.aria.attr(`aria-invalid`)===`true`?`true`:O}
@input=${this.handleInput}
@change=${this.handleChange}
/>
${r?k`<button
part="clear-button"
type="button"
class="action"
aria-label=${this.clearLabel??e(`input.clear`)}
@click=${this.clear}
>
${Fe}
</button>`:O}
${n?k`<button
part="password-toggle"
type="button"
class="action"
aria-label=${i}
?disabled=${t}
@click=${()=>this.passwordVisible=!this.passwordVisible}
>
${this.passwordVisible?ke:Rt}
</button>`:O}
${this.showCharCount?k`<span id=${this.countId} class="count" part="count"
>${this.maxlength!=null&&this.maxlength>=0?`${this.value.length} / ${this.maxlength}`:this.value.length}</span
>`:O}
${this.slots.test(`suffix`)?k`<span class="addon end"><slot name="suffix"></slot></span>`:O}
</div>`}},P([A({attribute:!1})],Y.prototype,`value`,void 0),P([A({attribute:`value`})],Y.prototype,`defaultValue`,void 0),P([A({reflect:!0})],Y.prototype,`type`,void 0),P([A({reflect:!0})],Y.prototype,`variant`,void 0),P([A({reflect:!0})],Y.prototype,`size`,void 0),P([A({type:Boolean,reflect:!0})],Y.prototype,`invalid`,void 0),P([A()],Y.prototype,`placeholder`,void 0),P([A({type:Boolean,reflect:!0})],Y.prototype,`readonly`,void 0),P([A({type:Number})],Y.prototype,`minlength`,void 0),P([A({type:Number})],Y.prototype,`maxlength`,void 0),P([A()],Y.prototype,`pattern`,void 0),P([A()],Y.prototype,`min`,void 0),P([A()],Y.prototype,`max`,void 0),P([A()],Y.prototype,`step`,void 0),P([A()],Y.prototype,`autocomplete`,void 0),P([A()],Y.prototype,`inputmode`,void 0),P([A({type:Boolean,reflect:!0})],Y.prototype,`clearable`,void 0),P([A({attribute:`clear-label`})],Y.prototype,`clearLabel`,void 0),P([A({type:Boolean,attribute:`show-char-count`})],Y.prototype,`showCharCount`,void 0),P([A({attribute:`show-password-label`})],Y.prototype,`showPasswordLabel`,void 0),P([A({attribute:`hide-password-label`})],Y.prototype,`hidePasswordLabel`,void 0),P([C()],Y.prototype,`passwordVisible`,void 0),P([E(`input`)],Y.prototype,`input`,void 0)})))()}function ya(e){if(!e.trim())return{status:`empty`};try{return JSON.parse(e),{status:`valid`}}catch(e){return{status:`invalid`,error:e instanceof Error?e.message:String(e)}}}function ba(e,t){let n=Math.min(10,Math.max(0,Math.trunc(t)||0));if(n>0)return wn(e,Sn(e,void 0,{tabSize:n,insertSpaces:!0,eol:`
`}));let r=gn(e,!0),i=[];for(;r.getPosition()<e.length;){r.scan();let t=r.getTokenOffset();i.push(e.slice(t,t+r.getTokenLength()))}return i.join(``)}var X;function xa(){return(xa=e((()=>{l(),b(),c(),y(),p(),u(),Ze(),Ge(),Qe(),jt(),j(),D(),T(),nn(),fn(),X=class e extends wt{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.rows=8,this.hideToolbar=!1,this.indent=2,this.invalid=!1,this.readonly=!1,this.placeholder=``,this.focused=!1,this.locale=new g(this),this.aria=new s(this,()=>this.labels),this.dirty=!1}static{this.tagName=`minerva-json-field`}static{this.shadowRootOptions={...wt.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[x,w`
:host{
display: block;
width: 100%;
min-width: 0;
}
`,S(Je),S(qe),S(lt),w`

.toolbar .iconButton{
min-height: 0;
}
.status > svg{
width: 16px;
height: 16px;
}
`]}focus(e){this.textarea?.focus(e)}blur(){this.textarea?.blur()}formatValue(){ya(this.value).status===`valid`&&(this.value=ba(this.value,this.indent))}getFormValue(){return this.value}getValidity(){let e=this.textarea,t=ya(this.value);return t.status===`invalid`?{flags:{badInput:!0},message:`${this.invalidLabel??this.locale.t(`jsonField.invalid`)}: ${t.error}`,anchor:e}:this.required&&t.status===`empty`?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:e}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),d&&t.has(`indent`)&&(this.indent<0||this.indent>10)&&_(e.tagName,`indent (${this.indent}) is clamped to 0..10.`)}get locked(){return this.isDisabled||this.readonly}formatNow(){if(this.locked||ya(this.value).status!==`valid`)return;let e=ba(this.value,this.indent);e!==this.value&&(this.dirty=!0,this.value=e,this.emit(`minerva-input`,{value:e}),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e}))}handleInput(){this.locked||(this.dirty=!0,this.value=String(this.textarea.value),this.emit(`minerva-input`,{value:this.value}))}handleChange(){this.value=String(this.textarea.value),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.focused?{status:`empty`}:ya(this.value),r=n.status===`invalid`,i=r||this.invalid,a=this.locked||!this.value.trim(),o=n.status===`valid`?this.validLabel??e(`jsonField.valid`):n.status===`invalid`?`${this.invalidLabel??e(`jsonField.invalid`)}: ${n.error}`:``,s=[this.aria.description,r?o:void 0].filter(Boolean).join(` `);return k`<div class="root" part="base">
      ${this.hideToolbar?O:k`<div class="toolbar">
              <button
                part="format-button"
                type="button"
                class=${N({iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,disabled:a})}
                ?disabled=${a}
                tabindex=${a?`-1`:`0`}
                aria-label=${this.formatLabel??e(`jsonField.format`)}
                @click=${this.formatNow}
              >
                ${ge}
              </button>
            </div>`}
      <textarea
        part="textarea"
        class=${N({textarea:!0,outline:!0,medium:!0,invalid:i})}
        style="resize: none"
        rows=${this.rows}
        spellcheck="false"
        .value=${kn(this.value)}
        name=${this.name||O}
        placeholder=${this.placeholder||O}
        ?disabled=${t}
        ?readonly=${this.readonly}
        ?required=${this.required}
        aria-label=${this.aria.label??O}
        aria-description=${s||O}
        aria-invalid=${i?`true`:O}
        @input=${this.handleInput}
        @change=${this.handleChange}
        @focus=${()=>this.focused=!0}
        @blur=${()=>this.focused=!1}
      ></textarea>
      <div
        part="status"
        role="status"
        aria-live="polite"
        class=${N({status:!0,statusInvalid:r})}
      >
        ${n.status===`valid`?k`${Se}<span>${o}</span>`:n.status===`invalid`?k`${ae}<span>${o}</span>`:O}
      </div>
    </div>`}},P([A({attribute:!1})],X.prototype,`value`,void 0),P([A({attribute:`value`})],X.prototype,`defaultValue`,void 0),P([A({type:Number})],X.prototype,`rows`,void 0),P([A({type:Boolean,attribute:`hide-toolbar`})],X.prototype,`hideToolbar`,void 0),P([A({type:Number})],X.prototype,`indent`,void 0),P([A({type:Boolean,reflect:!0})],X.prototype,`invalid`,void 0),P([A({type:Boolean,reflect:!0})],X.prototype,`readonly`,void 0),P([A()],X.prototype,`placeholder`,void 0),P([A({attribute:`format-label`})],X.prototype,`formatLabel`,void 0),P([A({attribute:`valid-label`})],X.prototype,`validLabel`,void 0),P([A({attribute:`invalid-label`})],X.prototype,`invalidLabel`,void 0),P([C()],X.prototype,`focused`,void 0),P([E(`textarea`)],X.prototype,`textarea`,void 0)})))()}function Sa(e){if(!e)return[];try{let t=JSON.parse(e);if(Array.isArray(t))return t.filter(e=>e&&typeof e==`object`).map(e=>({id:typeof e.id==`string`?e.id:``,key:String(e.key??``),value:String(e.value??``)}));if(t&&typeof t==`object`)return Object.entries(t).map(([e,t])=>({id:``,key:e,value:typeof t==`string`?t:JSON.stringify(t)}))}catch{}return[]}var Ca,wa;function Ta(){return(Ta=e((()=>{l(),b(),c(),y(),p(),u(),Ze(),Ge(),Er(),ra(),Ke(),qn(),j(),D(),Tn(),Ca=0,wa=class e extends wt{constructor(...e){super(...e),this.value=[],this.defaultValue=[],this.editorId=`kv-${Ca++}`,this.nextId=0,this.dirty=!1,this.pendingFocus=null,this.locale=new g(this),this.aria=new s(this,()=>this.labels)}static{this.tagName=`minerva-key-value-editor`}static{this.dependencies=[B,na,Kn]}static{this.styles=[x,w`
:host{
display: block;
width: 100%;
min-width: 0;
}
`,S(qe),S(Et),w`

.key{
--textarea-min-height: var(
--key-value-editor-control-height,
var(--control-height-sm)
);
}
`]}focus(e){(this.renderRoot.querySelector(`minerva-textarea`)??this.renderRoot.querySelector(`minerva-button`))?.focus(e)}getFormValue(){return JSON.stringify(this.value.map(({key:e,value:t})=>({key:e,value:t})))}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.renderRoot.querySelector(`minerva-button`)??null}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=Sa(e))}willUpdate(t){if(t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),t.has(`value`)&&(this.value.some(e=>!e.id)&&(this.value=this.value.map(e=>e.id?e:{...e,id:this.newId()})),d)){let t=this.value.map(e=>e.id);new Set(t).size!==t.length&&_(e.tagName,`entries have duplicate ids: rows are tracked by id, make them unique.`)}}updated(e){super.updated(e);let t=this.pendingFocus;if(!t)return;this.pendingFocus=null;let n=e=>this.value.some(t=>t.id===e),r=e=>Array.from(this.renderRoot.querySelectorAll(`[data-entry-id]`)).find(t=>e!==void 0&&t.dataset.entryId===e)??null;if(t.kind===`add`){let e=n(t.id)?r(t.id)?.querySelector(`.key`):null;e&&e.updateComplete.then(()=>e.focus())}else n(t.id)||(r(t.nextId)?.querySelector(`.remove`)??this.renderRoot.querySelector(`minerva-button`))?.focus()}newId(){let e;do e=`${this.editorId}-${this.nextId++}`;while(this.value.some(t=>t.id===e));return e}commit(e){this.dirty=!0,this.value=e,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e})}add(){if(this.isDisabled)return;let e=this.newId();this.pendingFocus={kind:`add`,id:e},this.commit([...this.value,{id:e,key:``,value:``}])}removeEntry(e){if(this.isDisabled)return;let t=this.value.findIndex(t=>t.id===e),n=this.value[t+1]??this.value[t-1];this.pendingFocus={kind:`remove`,id:e,nextId:n?.id},this.commit(this.value.filter(t=>t.id!==e))}handleInput(e,t,n){if(e.stopPropagation(),this.isDisabled)return;let r=e.target.value;this.dirty=!0,this.value=this.value.map(e=>e.id===t?{...e,[n]:r}:e),this.emit(`minerva-input`,{value:this.value})}handleFieldChange(e){e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}renderField(e,t,n,r){let i=this.errors?.[e.id]?.[n];return k`<minerva-form-control
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
</minerva-form-control>`}render(){let{t:e}=this.locale,t=this.keyLabel??e(`keyValueEditor.key`),n=this.valueLabel??e(`keyValueEditor.value`),r=this.removeLabel??e(`keyValueEditor.remove`),i=this.isDisabled,a=this.aria.label;return k`<div
class="root"
part="base"
role=${a?`group`:O}
aria-label=${a??O}
aria-description=${this.aria.description??O}
>
${cn(this.value,e=>e.id,(e,a)=>k`<div class="row" part="row" data-entry-id=${e.id}>
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
<span slot="start">${xt}</span>
<span>${this.addLabel??e(`keyValueEditor.add`)}</span>
</minerva-button>
</div>`}},P([A({attribute:!1})],wa.prototype,`value`,void 0),P([A({attribute:`value`,converter:{fromAttribute:e=>Sa(e)}})],wa.prototype,`defaultValue`,void 0),P([A({attribute:`key-label`})],wa.prototype,`keyLabel`,void 0),P([A({attribute:`value-label`})],wa.prototype,`valueLabel`,void 0),P([A({attribute:`add-label`})],wa.prototype,`addLabel`,void 0),P([A({attribute:`remove-label`})],wa.prototype,`removeLabel`,void 0),P([A({attribute:!1})],wa.prototype,`errors`,void 0)})))()}function Ea(e,t,n){t&&`role`in t?t.role=n:e.hasAttribute(`role`)||e.setAttribute(`role`,n)}var Da,Oa;function ka(){return(ka=e((()=>{b(),p(),v(),u(),Ge(),_t(),j(),D(),T(),Da=class e extends m{constructor(...e){super(...e),this.density=`default`,this.noDividers=!1,this.internals=At(this)}static{this.tagName=`minerva-list`}static{this.styles=[x,w`
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
`,S(Ve)]}connectedCallback(){super.connectedCallback(),Ea(this,this.internals,`list`)}updated(){if(d){let t=Array.from(this.children).find(e=>e.localName!==Oa.tagName);t&&_(e.tagName,`children should be <minerva-list-item> elements (found <${t.localName}>): other elements break the list semantics.`)}}render(){return k`<div
part="base"
class=${N({list:!0,compact:this.density===`compact`,dividers:!this.noDividers})}
>
<slot @slotchange=${()=>this.requestUpdate()}></slot>
</div>`}},P([A({reflect:!0})],Da.prototype,`density`,void 0),P([A({type:Boolean,reflect:!0,attribute:`no-dividers`})],Da.prototype,`noDividers`,void 0),Oa=class extends m{constructor(...e){super(...e),this.primary=``,this.secondary=``,this.internals=At(this),this.slots=new f(this)}static{this.tagName=`minerva-list-item`}static{this.styles=[x,S(Ve),w`
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
`]}connectedCallback(){super.connectedCallback(),Ea(this,this.internals,`listitem`)}render(){let e=this.secondary!==``||this.slots.test(`secondary`);return k`<div part="base" class="item">
${this.slots.test(`icon`)?k`<div part="icon" class="icon" aria-hidden="true">
<slot name="icon"></slot>
</div>`:O}
<div class="content">
<div part="primary" class="primary"><slot>${this.primary}</slot></div>
${e?k`<div part="secondary" class="secondary">
<slot name="secondary">${this.secondary}</slot>
</div>`:O}
</div>
${this.slots.test(`actions`)?k`<div part="actions" class="actions">
<slot name="actions"></slot>
</div>`:O}
</div>`}},P([A()],Oa.prototype,`primary`,void 0),P([A()],Oa.prototype,`secondary`,void 0)})))()}var Aa,ja;function Ma(){return(Ma=e((()=>{b(),y(),p(),u(),mt(),Hn(),j(),D(),T(),Aa=[`small`,`medium`,`large`],ja=class e extends m{constructor(...e){super(...e),this.size=`medium`,this.locale=new g(this)}static{this.tagName=`minerva-loading-state`}static{this.dependencies=[Yn]}static{this.styles=[x,w`
:host{
display: block;
}
`,S(kt)]}updated(){d&&!Aa.includes(this.size)&&_(e.tagName,`unknown size "${this.size}" (expected ${Aa.join(`, `)}).`)}render(){return k`<div
part="base"
class=${N({loadingState:!0,[this.size]:!0})}
role="status"
aria-live="polite"
aria-atomic="true"
>
<minerva-progress
part="indicator"
class="indicator"
color="current"
decorative
></minerva-progress>
<span part="label" class="label"
><slot>${this.label??this.locale.t(`loadingState.label`)}</slot></span
>
</div>`}},P([A()],ja.prototype,`label`,void 0),P([A({reflect:!0})],ja.prototype,`size`,void 0)})))()}function Na(e){let t=Array.from(e.childNodes).filter(e=>!Ua(e)&&(e.nodeType!==1||e.getAttribute(`slot`)!==`icon`));return t.every(e=>e.nodeType===3)?t.map(e=>e.textContent??``).join(``).trim():t.map(e=>e.cloneNode(!0))}function Pa(e){return{value:Ka(e,`value`)??Ga(e),label:Na(e),textValue:Ka(e,`text-value`),shortcut:Ka(e,`shortcut`),disabled:qa(e,`disabled`),closeOnSelect:qa(e,`close-on-select`),element:e}}function Fa(e,t=`e`){let n=[],r=null;return Array.from(e.children).forEach((e,i)=>{let a=`${t}-${i}`;switch(e.localName!==Z.tagName&&(r=null),e.localName){case La.tagName:{let t=Fa(e,a),r=e.querySelector(`:scope > [slot='icon']`);n.push({key:Ka(e,`value`)||Ga(e),label:Na(e),textValue:Ka(e,`text-value`),icon:r?r.cloneNode(!0):void 0,shortcut:Ka(e,`shortcut`),disabled:qa(e,`disabled`),closeOnSelect:!qa(e,`keep-open`)&&void 0,children:t.length?t:void 0,element:e});break}case Ra.tagName:n.push({type:`checkbox`,key:Ka(e,`value`)||Ga(e),label:Na(e),textValue:Ka(e,`text-value`),shortcut:Ka(e,`shortcut`),disabled:qa(e,`disabled`),checked:qa(e,`checked`),closeOnSelect:qa(e,`close-on-select`),element:e});break;case Z.tagName:{r||(r={type:`radio-group`,key:a,items:[]},n.push(r));let t=Pa(e);r.items.push(t),qa(e,`checked`)&&(r.value=t.value);break}case Ba.tagName:n.push({type:`separator`,key:a});break;case Va.tagName:n.push({type:`label`,key:a,label:Na(e)});break;case za.tagName:{let t=Array.from(e.children),r=Ka(e,`label`);if(t.length>0&&t.every(e=>e.localName===Z.tagName)){let i=t.map(Pa);n.push({type:`radio-group`,key:a,label:r,items:i,value:i.find(e=>e.element?.hasAttribute(`checked`))?.value,closeOnSelect:qa(e,`close-on-select`),element:e})}else n.push({type:`group`,key:a,label:r??``,items:Fa(e,a)});break}}}),n}var Ia,La,Ra,Z,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa;function Ja(){return(Ja=e((()=>{p(),j(),D(),Ia=w`
:host{
display: none !important;
}
`,La=class extends m{constructor(...e){super(...e),this.value=``,this.disabled=!1,this.shortcut=``,this.textValue=``,this.keepOpen=!1}static{this.tagName=`minerva-menu-item`}static{this.styles=Ia}},P([A({reflect:!0})],La.prototype,`value`,void 0),P([A({type:Boolean,reflect:!0})],La.prototype,`disabled`,void 0),P([A()],La.prototype,`shortcut`,void 0),P([A({attribute:`text-value`})],La.prototype,`textValue`,void 0),P([A({type:Boolean,attribute:`keep-open`})],La.prototype,`keepOpen`,void 0),Ra=class extends m{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1,this.shortcut=``,this.textValue=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-checkbox-item`}static{this.styles=Ia}},P([A({reflect:!0})],Ra.prototype,`value`,void 0),P([A({type:Boolean,reflect:!0})],Ra.prototype,`checked`,void 0),P([A({type:Boolean,reflect:!0})],Ra.prototype,`disabled`,void 0),P([A()],Ra.prototype,`shortcut`,void 0),P([A({attribute:`text-value`})],Ra.prototype,`textValue`,void 0),P([A({type:Boolean,attribute:`close-on-select`})],Ra.prototype,`closeOnSelect`,void 0),Z=class extends m{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1,this.shortcut=``,this.textValue=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-radio-item`}static{this.styles=Ia}},P([A({reflect:!0})],Z.prototype,`value`,void 0),P([A({type:Boolean,reflect:!0})],Z.prototype,`checked`,void 0),P([A({type:Boolean,reflect:!0})],Z.prototype,`disabled`,void 0),P([A()],Z.prototype,`shortcut`,void 0),P([A({attribute:`text-value`})],Z.prototype,`textValue`,void 0),P([A({type:Boolean,attribute:`close-on-select`})],Z.prototype,`closeOnSelect`,void 0),za=class extends m{constructor(...e){super(...e),this.label=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-group`}static{this.styles=Ia}},P([A()],za.prototype,`label`,void 0),P([A({type:Boolean,attribute:`close-on-select`})],za.prototype,`closeOnSelect`,void 0),Ba=class extends m{static{this.tagName=`minerva-menu-separator`}static{this.styles=Ia}},Va=class extends m{static{this.tagName=`minerva-menu-label`}static{this.styles=Ia}},Ha=[La.tagName,Ra.tagName,Z.tagName,za.tagName,Ba.tagName,Va.tagName],Ua=e=>e.nodeType===1&&Ha.includes(e.localName),Wa=e=>!!(e.nodeType===1?e:e.parentElement)?.closest(Ha.join(`,`)),Ga=e=>Array.from(e.childNodes).filter(e=>!Ua(e)).map(e=>e.textContent??``).join(``).trim(),Ka=(e,t)=>e.getAttribute(t)??void 0,qa=(e,t)=>e.hasAttribute(t)})))()}var Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,Q;function oo(){return(oo=e((()=>{b(),c(),p(),u(),Ln(),Pn(),Vn(),Mn(),jn(),Xe(),Ja(),j(),D(),T(),Wt(),Tn(),Ya=100,Xa=`[data-minerva-menu-item]`,Za={mainAxis:4,crossAxis:-5},Qa=e=>e.hasAttribute(`data-disabled`),$a=e=>e.dataset.textValue??e.querySelector(`.text`)?.textContent??e.textContent??``,eo=e=>e?Array.from(e.querySelectorAll(Xa)):[],to=e=>Yt(e,{preventScroll:!0}),no=e=>typeof e==`string`?e:void 0,ro=e=>e.join(`/`),io=0,ao=class{constructor(e,t,n){this.grace=mn(),this.typeahead=Gt(),this.lastTypeahead=0,this.element=null,this.uid=null,this.path=[],this.position=new zn(e,()=>n===0?{placement:t.rootPlacement(),offset:t.rootOffset(),padding:8}:{placement:t.direction===`rtl`?`left-start`:`right-start`,offset:Za,padding:8}),this.layer=new Fn(e,()=>n===0?t.rootLayerOptions():t.subLayerOptions(n)),this.scope=new Nn(e,()=>({trapped:n===0&&t.isModal,autoFocus:!1,restoreFocus:!1}))}clearTimer(){clearTimeout(this.openTimer),this.openTimer=void 0}},Q=class extends m{constructor(...e){super(...e),this.items=[],this.open=!1,this.size=`medium`,this.keepOpen=!1,this.disabled=!1,this.nonModal=!1,this.noLoop=!1,this.declarative=[],this.openPath=[],this.exiting=[],this.stored=new Map,this.levels=[],this.modalController=new Rn(this),this.observer=null,this.intent=`content`,this.subIntent=`none`,this.restoreOverride=void 0,this.reason=`outside`,this.direction=`ltr`,this.onPanelKeyDown=e=>{let t=e.currentTarget,n=this.panelDepth(t),r=this.levels[n],{key:i}=e;if(i===`Tab`){e.preventDefault(),this.closeWithTab(e.shiftKey);return}if(e.defaultPrevented||!r||e.altKey||e.ctrlKey||e.metaKey)return;let a=eo(t),o=e.composedPath()[0],s=a.find(e=>e===o)??null,ee=s?a.indexOf(s):-1,te=this.direction===`rtl`,ne=te?`ArrowLeft`:`ArrowRight`,re=te?`ArrowRight`:`ArrowLeft`;if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(i)){e.preventDefault(),r.typeahead.reset();let t=tn({currentIndex:ee,count:a.length,key:i,orientation:`vertical`,loop:!this.noLoop,isDisabled:e=>Qa(a[e])});t!==null&&to(a[t]);return}if(i===ne&&s?.hasAttribute(`aria-haspopup`)){e.preventDefault(),Qa(s)||this.openSubmenu(n,s.dataset.uid??``,`first`);return}if(i===re&&n>0){e.preventDefault(),to(this.parentItem(n)),this.closeSubmenu(n);return}if(i.length===1){let t=Date.now();t-r.lastTypeahead>500&&r.typeahead.reset();let n=r.typeahead.getBuffer()!==``;if(i!==` `||n){r.lastTypeahead=t,e.preventDefault();let n=r.typeahead.search(i,a.map(e=>({text:$a(e),disabled:Qa(e)})),ee);n!==-1&&to(a[n]);return}}(i===`Enter`||i===` `)&&s&&(e.preventDefault(),Qa(s)||this.activateItem(s,`first`))},this.itemActions=new Map,this.onPanelFocusIn=e=>{let t=e.composedPath()[0];t.matches?.(Xa)&&t.setAttribute(`data-highlighted`,``)},this.onPanelFocusOut=e=>{let t=e.composedPath()[0];t.matches?.(Xa)&&t.removeAttribute(`data-highlighted`)}}static{this.styles=[x,In,w`
:host{
display: contents;
}
`,S(t)]}onRootPointerDownOutside(e){}get isModal(){return!this.nonModal}get entries(){return this.items.length?this.items:this.declarative}show(){this.open=!0}hide(){this.open=!1}requestOpenChange(e,t){if(e===this.open)return!0;let n=this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0});return n&&(this.open=e,e||this.closeLevels()),n}openWith(e,t){this.intent=e,this.requestOpenChange(!0,t)}closeAll(e){this.requestOpenChange(!1,e)}closeWithTab(e){let t=this.restoreTarget(),n;if(t){let r=Jt().find(e=>e.element===this.levels[0]?.element)?.parent??document.body,i=pn(r).filter(e=>e===t||!Ut(this,e)||!this.isPanelNode(e)),a=i.indexOf(t);n=a===-1?t:i[e?a-1:a+1]??t}this.restoreOverride=n??void 0,this.requestOpenChange(!1,`tab`)&&to(n)}isPanelNode(e){return this.levels.some(t=>Ut(t.element,e))}level(e){return this.levels[e]??=new ao(this,this,e),this.levels[e]}parentItem(e){let t=this.openPath[e-1];return t?this.renderRoot.querySelector(`[data-uid="${t}"]`)??null:null}rootLayerOptions(){return{disableOutsidePointerEvents:this.isModal,branches:()=>this.branches(),onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:e=>{this.reason=`outside`,this.onRootPointerDownOutside(e),!e.defaultPrevented&&(!this.isModal||e.button===2)&&(this.restoreOverride=null)},onFocusOutside:e=>(this.reason=`focus-outside`,!this.isModal||(e.preventDefault(),!1)),onDismiss:()=>this.closeAll(this.reason)}}subLayerOptions(e){return{parent:this.levels[e-1]?.element??void 0,branches:()=>[this.parentItem(e)],onEscapeKeyDown:()=>{to(this.parentItem(e))},onDismiss:()=>this.closeSubmenu(e)}}closeLevels(e=0,t=!0){for(let n=this.levels.length-1;n>=e;n--){let e=this.levels[n],r=e.element;r&&(e.clearTimer(),e.grace.clear(),e.typeahead.reset(),e.scope.deactivate(),e.layer.deactivate(),e.position.end(),t&&this.isConnected?this.exit(r,n,e.path):h(r),e.element=null,e.uid=null,n===0&&(this.modalController.deactivate(),this.scheduleRestore()))}}exit(e,t,n){if(e.setAttribute(`data-state`,`closed`),qt(e)<=0){h(e);return}let r=++io,i=ro(n);this.exiting=[...this.exiting.filter(e=>ro(e.path)!==i),{id:r,depth:t,path:n}],On(e).then(()=>{this.exiting.some(e=>e.id===r)&&(h(e),this.exiting=this.exiting.filter(e=>e.id!==r))})}clearExiting(){if(this.exiting.length!==0){for(let e of this.exiting)h(this.renderRoot.querySelector(`[data-panel-key="${ro(e.path)}"]`));this.exiting=[]}}scheduleRestore(){let e=this.restoreOverride;this.restoreOverride=void 0;let t=e===void 0?this.restoreTarget():e;t&&setTimeout(()=>{if(this.open||!t.isConnected)return;let e=en(document);(!e||e===document.body||!e.isConnected||(this.shadowRoot?.contains(e)??!1))&&to(t)},0)}syncLevels(){let e=this.open&&!this.disabled?this.openPath.length+1:0;this.closeLevels(e);for(let t=0;t<e;t++){let e=t===0?``:this.openPath[t-1],n=this.renderRoot.querySelector(`[data-panel-key="${ro(this.openPath.slice(0,t))}"]`);if(!n)return;let r=this.level(t);if(r.element===n&&r.uid===e)continue;r.element&&this.closeLevels(t);let i=t===0?this.anchorElement():this.parentItem(t);if(!i)return;r.element=n,r.uid=e,r.path=this.openPath.slice(0,t),n.setAttribute(`data-state`,`open`),Mt(n),r.position.start(i,n),t===0&&this.isModal&&this.modalController.activate(this),r.layer.activate(n),r.scope.activate(n);let a=t===0?this.intent:this.subIntent;t===0?this.intent=`content`:this.subIntent=`none`,this.focusIntent(n,a)}}focusIntent(e,t){if(t===`none`)return;let n=eo(e).filter(e=>!Qa(e));to((t===`first`?n[0]:t===`last`?n[n.length-1]:void 0)??e)}reanchor(){let e=this.levels[0],t=this.anchorElement();e?.element&&t&&e.position.start(t,e.element)}openSubmenu(e,t,n){if(this.openPath[e]===t&&this.levels[e+1]?.element){n===`first`&&to(eo(this.levels[e+1].element).find(e=>!Qa(e)));return}this.subIntent=n,this.openPath=[...this.openPath.slice(0,e),t]}closeSubmenu(e){this.openPath.length<e||(this.closeLevels(e),this.openPath=this.openPath.slice(0,e-1))}stateOf(e,t){return this.stored.has(e)?this.stored.get(e):t}isChecked(e){return e.element?e.element.hasAttribute(`checked`):this.stateOf(e.key,e.checked??e.defaultChecked??!1)}radioValue(e){return e.items.some(e=>e.element)?e.items.find(e=>e.element?.hasAttribute(`checked`))?.value:this.stateOf(e.key,e.value??e.defaultValue)}activateAction(e){this.emit(`minerva-select`,{value:e.key,item:e},{cancelable:!0})&&(e.closeOnSelect??!this.keepOpen)&&this.closeAll(`select`)}toggleCheckbox(e){let t=!this.isChecked(e);this.emit(`minerva-change`,{value:e.key,checked:t,item:e},{cancelable:!0})&&(e.element?e.element.toggleAttribute(`checked`,t):this.stored.set(e.key,t),this.requestUpdate()),e.closeOnSelect&&this.closeAll(`select`)}chooseRadio(e,t){let n=this.radioValue(e);if(t.value!==n&&this.emit(`minerva-change`,{value:t.value,group:e.key,item:t},{cancelable:!0})){if(t.element)for(let n of e.items)n.element?.toggleAttribute(`checked`,n===t);else this.stored.set(e.key,t.value);this.requestUpdate()}(e.closeOnSelect||t.closeOnSelect)&&this.closeAll(`select`)}panelDepth(e){return Number(e.dataset.level??0)}activateItem(e,t){this.itemActions.get(e.dataset.uid??``)?.(t)}onItemClick(e){let t=e.currentTarget;Qa(t)||this.activateItem(t,`none`)}onItemPointerMove(e){let t=e.currentTarget,n=t.closest(`[data-level]`);if(!n)return;let r=this.panelDepth(n),i=this.levels[r];if(!i||e.pointerType===`touch`||i.grace.isInGraceArea({x:e.clientX,y:e.clientY}))return;i.grace.clear();let a=en(document);if(Qa(t)){a!==n&&to(n);return}a!==t&&to(t);let o=t.dataset.uid??``;t.hasAttribute(`aria-haspopup`)&&this.openPath[r]!==o&&i.openTimer===void 0&&(i.openTimer=setTimeout(()=>{i.openTimer=void 0,this.open&&this.openSubmenu(r,o,`none`)},100))}onItemPointerLeave(e){if(e.pointerType===`touch`)return;let t=e.currentTarget,n=t.closest(`[data-level]`);if(!n)return;let r=this.panelDepth(n),i=this.levels[r];if(!i)return;i.clearTimer();let a=this.levels[r+1]?.element;if(t.hasAttribute(`aria-haspopup`)&&this.openPath[r]===t.dataset.uid&&a){let t=a.getAttribute(`data-side`)??`right`;i.grace.start({x:e.clientX,y:e.clientY},a.getBoundingClientRect(),t);return}i.grace.isInGraceArea({x:e.clientX,y:e.clientY})||en(document)===t&&to(n)}readEntries(){this.declarative=Fa(this)}connectedCallback(){super.connectedCallback(),this.readEntries(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(e=>{e.some(e=>Wa(e.target)||Array.from(e.addedNodes).some(Wa)||Array.from(e.removedNodes).some(e=>e.nodeType===1&&e.localName.startsWith(`minerva-menu-`)))&&this.readEntries()}),this.observer.observe(this,{subtree:!0,childList:!0,attributes:!0,characterData:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.closeLevels(0,!1),this.clearExiting()}willUpdate(e){if(e.has(`items`)&&(this.stored=new Map,d&&this.checkKeys(this.items)),e.has(`open`)&&this.open){let e=this.anchorElement(),t=e&&`nodeType`in e?e:this;this.direction=this.isConnected?Ue(t):`ltr`}e.has(`open`)&&!this.open&&(this.openPath=[]);let t=this.open&&!this.disabled?this.openPath.length+1:0,n=this.levels.findIndex((e,n)=>e.element!==null&&(n>=t||ro(e.path)!==ro(this.openPath.slice(0,n))));if(n!==-1&&this.closeLevels(n),this.exiting.length){let e=this.openKeys();this.exiting.some(t=>e.has(ro(t.path)))&&(this.exiting=this.exiting.filter(t=>!e.has(ro(t.path))))}}openKeys(){return!this.open||this.disabled?new Set:new Set([[],...this.openPath.map((e,t)=>this.openPath.slice(0,t+1))].map(ro))}checkKeys(e,t=new Set){for(let n of e)if(!(`type`in n&&n.type===`separator`)){if(`type`in n&&(n.type===`group`||n.type===`label`)){n.type===`group`&&this.checkKeys(n.items,t);continue}t.has(n.key)&&_(this.constructor.tagName,`duplicate item key "${n.key}": keys must be unique (checkbox / radio state and minerva-select values are keyed by it).`),t.add(n.key),!(`type`in n)&&n.children&&this.checkKeys(n.children,t)}}updated(e){this.syncTrigger(),(e.has(`open`)||e.has(`openPath`)||e.has(`disabled`))&&this.syncLevels()}renderPanels(){let e=this.open&&!this.disabled;if(!e&&this.exiting.length===0)return O;this.itemActions.clear();let t=[];e&&(t.push({key:``,depth:0,path:[],state:`open`}),this.openPath.forEach((e,n)=>{let r=this.openPath.slice(0,n+1);t.push({key:ro(r),depth:n+1,path:r,state:`open`})}));let n=new Set(t.map(e=>e.key));for(let e of this.exiting){let r=ro(e.path);n.has(r)||(n.add(r),t.push({key:r,depth:e.depth,path:e.path,state:`closed`}))}return cn(t,e=>e.key,e=>this.renderPanelAt(e.depth,e.path,e.state))}renderPanelAt(e,t,n){let r=this.entries,i=e===0?this.rootLabel():void 0;for(let[e,n]of t.entries()){let t=this.findSubmenu(r,n,`${e}:`);if(!t)return O;r=t.children??[],i=no(t.label)??t.textValue}return this.renderPanel(e,t.at(-1)??``,r,i,n,ro(t))}findSubmenu(e,t,n){for(let[r,i]of e.entries()){let e=`${n}${r}`;if(`type`in i){if(i.type===`group`){let n=this.findSubmenu(i.items,t,`${e}.`);if(n)return n}continue}if(i.children?.length&&e===t)return i}return null}renderPanel(e,t,n,r,i,a){let o=e===0?``:`item-${t}`;return k`<div
part="menu"
id=${e===0?`menu`:`menu-${t}`}
class=${N({content:!0,small:this.size===`small`})}
popover="manual"
role="menu"
aria-orientation="vertical"
aria-label=${e===0?r??O:O}
aria-labelledby=${e>0?o:O}
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
</div>`}renderEntries(e,t,n){return e.map((e,r)=>{let i=`${n}${r}`;if(`type`in e)switch(e.type){case`separator`:return k`<div
role="separator"
aria-orientation="horizontal"
class="separator"
part="separator"
></div>`;case`label`:return k`<div class="label" part="label">${e.label}</div>`;case`group`:{let n=`label-${i.replace(/[:.]/g,`-`)}`;return k`<div role="group" aria-labelledby=${n}>
<div id=${n} class="label" part="label">${e.label}</div>
${this.renderEntries(e.items,t,`${i}.`)}
</div>`}case`checkbox`:return this.renderCheckbox(e,i);case`radio-group`:return this.renderRadioGroup(e,i)}return this.renderAction(e,t,i)})}renderItem(e){let{uid:t,disabled:n=!1,submenu:r}=e;this.itemActions.set(t,e.activate);let i=e.textValue??no(e.label),a=e.checked===void 0?r?r.open?`open`:`closed`:void 0:e.checked?`checked`:`unchecked`;return k`<div
id=${`item-${t}`}
part="item"
role=${e.role}
tabindex="-1"
class="item"
data-minerva-menu-item=""
data-uid=${t}
data-text-value=${i??O}
data-disabled=${n?``:O}
data-state=${a??O}
aria-disabled=${n?`true`:O}
aria-checked=${e.checked===void 0?O:String(e.checked)}
aria-haspopup=${r?`menu`:O}
aria-expanded=${r?String(r.open):O}
aria-controls=${r?.open?`menu-${t}`:O}
@click=${this.onItemClick}
@pointermove=${this.onItemPointerMove}
@pointerleave=${this.onItemPointerLeave}
>
${e.indicator??O}
${e.icon?k`<span class="icon" part="icon" aria-hidden="true"
>${e.icon}</span
>`:O}
<span class="text">${e.label}</span>
${e.shortcut?k`<span class="shortcut">${e.shortcut}</span>`:O}
${e.trailing??O}
</div>`}renderAction(e,t,n){if(e.children?.length){let r=this.openPath[t]===n&&!e.disabled;return this.renderItem({uid:n,role:`menuitem`,label:e.label,textValue:e.textValue,icon:e.icon,shortcut:e.shortcut,disabled:e.disabled,submenu:{open:r},trailing:k`<span class="chevron" aria-hidden="true"
>${Bt}</span
>`,activate:e=>this.openSubmenu(t,n,e)})}return this.renderItem({uid:n,role:`menuitem`,label:e.label,textValue:e.textValue,icon:e.icon,shortcut:e.shortcut,disabled:e.disabled,activate:()=>this.activateAction(e)})}renderCheckbox(e,t){let n=this.isChecked(e);return this.renderItem({uid:t,role:`menuitemcheckbox`,label:e.label,textValue:e.textValue,shortcut:e.shortcut,disabled:e.disabled,checked:n,indicator:k`<span class="indicator" aria-hidden="true"
>${n?je:O}</span
>`,activate:()=>this.toggleCheckbox(e)})}renderRadioGroup(e,t){let n=this.radioValue(e),r=`label-${t.replace(/[:.]/g,`-`)}`,i=e.label!=null&&e.label!==``;return k`<div
role="group"
aria-labelledby=${i?r:O}
>
${i?k`<div id=${r} class="label" part="label">${e.label}</div>`:O}
${e.items.map((r,i)=>{let a=r.value===n;return this.renderItem({uid:`${t}.${i}`,role:`menuitemradio`,label:r.label,textValue:r.textValue,shortcut:r.shortcut,disabled:r.disabled,checked:a,indicator:k`<span class="indicator" aria-hidden="true"
>${a?k`<span class="dot"></span>`:O}</span
>`,activate:()=>this.chooseRadio(e,r)})})}
</div>`}},P([A({attribute:!1})],Q.prototype,`items`,void 0),P([A({type:Boolean,reflect:!0})],Q.prototype,`open`,void 0),P([A({reflect:!0})],Q.prototype,`size`,void 0),P([A({type:Boolean,attribute:`keep-open`})],Q.prototype,`keepOpen`,void 0),P([A({type:Boolean,reflect:!0})],Q.prototype,`disabled`,void 0),P([A({type:Boolean,reflect:!0,attribute:`non-modal`})],Q.prototype,`nonModal`,void 0),P([A({type:Boolean,attribute:`no-loop`})],Q.prototype,`noLoop`,void 0),P([C()],Q.prototype,`declarative`,void 0),P([C()],Q.prototype,`openPath`,void 0),P([C()],Q.prototype,`exiting`,void 0)})))()}function so(e,t,n){n===null?e.hasAttribute(t)&&e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}var co,lo;function uo(){return(uo=e((()=>{b(),Ja(),oo(),j(),D(),Wt(),co={mainAxis:6,crossAxis:0},lo=class e extends Q{constructor(...e){super(...e),this.side=`bottom`,this.align=`end`,this.disabledTrigger=null,this.handleKeyDown=e=>{if(!(this.disabled||e.defaultPrevented||!this.fromTrigger(e)))switch(e.key){case`Enter`:case` `:e.preventDefault(),this.open?this.requestOpenChange(!1,`trigger`):this.openWith(`first`,`keyboard`);break;case`ArrowDown`:e.preventDefault(),this.openWith(`first`,`keyboard`);break;case`ArrowUp`:e.preventDefault(),this.openWith(`last`,`keyboard`)}},this.handleClick=e=>{this.disabled||e.defaultPrevented||!this.fromTrigger(e)||(this.open?this.requestOpenChange(!1,`trigger`):this.openWith(e.detail===0?`first`:`content`,`trigger`))}}static{this.tagName=`minerva-menu`}static{this.dependencies=[La,Ra,Z,za,Ba,Va]}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}anchorElement(){return this.triggerElement()}rootPlacement(){return vn(this.side,this.align)}rootOffset(){return co}restoreTarget(){return this.triggerElement()}branches(){return[this.triggerElement()]}rootLabel(){let e=this.getAttribute(`aria-label`);if(e)return e;let t=this.triggerElement();return t?.getAttribute(`aria-label`)??(t?.textContent?.trim()||void 0)}syncTrigger(){let e=this.triggerElement();e&&(so(e,`aria-haspopup`,`menu`),so(e,`aria-expanded`,String(this.open)),so(e,`data-state`,this.open?`open`:`closed`),so(e,`data-disabled`,this.disabled?``:null),this.disabled&&!e.hasAttribute(`disabled`)?(e.setAttribute(`disabled`,``),this.disabledTrigger=e):!this.disabled&&this.disabledTrigger===e&&(e.removeAttribute(`disabled`),this.disabledTrigger=null))}fromTrigger(e){let t=this.triggerElement();return!!t&&e.composedPath().includes(t)}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`click`,this.handleClick)}firstUpdated(t){super.firstUpdated(t),d&&!this.triggerElement()&&_(e.tagName,`no slot="trigger" element: nothing opens the menu (add e.g. <button slot="trigger">).`)}render(){return k`<slot name="trigger"></slot>${this.renderPanels()}`}},P([A({reflect:!0})],lo.prototype,`side`,void 0),P([A({reflect:!0})],lo.prototype,`align`,void 0)})))()}var fo,po,mo,ho,go;function _o(){return(_o=e((()=>{Ja(),oo(),uo(),j(),Wt(),fo=700,po={mainAxis:2,crossAxis:0},mo={mainAxis:4,crossAxis:0},ho=(e,t,n)=>({contextElement:n,getBoundingClientRect:()=>({x:e,y:t,left:e,top:t,right:e,bottom:t,width:0,height:0})}),go=class extends Q{constructor(...e){super(...e),this.position=null,this.restoreTo=null,this.areaPointerEvents=null,this.handleContextMenu=e=>{this.disabled||e.defaultPrevented||!this.inArea(e)||(e.preventDefault(),this.clearLongPress(),this.openAtPoint(e.clientX,e.clientY))},this.handleKeyDown=e=>{if(!(this.disabled||e.defaultPrevented||!this.inArea(e))&&(e.key===`ContextMenu`||e.shiftKey&&e.key===`F10`)){let t=this.area();if(!t)return;e.preventDefault();let n=Ue(t)===`rtl`;this.openAt({anchor:t,placement:n?`bottom-end`:`bottom-start`,offset:mo})}},this.handlePointerDown=e=>{if(this.disabled||e.pointerType!==`touch`||!this.inArea(e))return;this.clearLongPress();let{clientX:t,clientY:n}=e;this.longPress=setTimeout(()=>{this.longPress=void 0,this.openAtPoint(t,n)},700)},this.handleTouchEnd=e=>{e.pointerType===`touch`&&this.clearLongPress()}}static{this.tagName=`minerva-context-menu`}static{this.dependencies=[La,Ra,Z,za,Ba,Va]}static{this.styles=[...Q.styles,w`
:host(:not([disabled])) ::slotted(*){
-webkit-touch-callout: none;
}
`]}area(){return Array.from(this.children).find(e=>!Ha.includes(e.localName))??null}anchorElement(){return this.position?.anchor??null}rootPlacement(){return this.position?.placement??`right-start`}rootOffset(){return this.position?.offset??po}restoreTarget(){return this.restoreTo}branches(){return[]}rootLabel(){return this.getAttribute(`aria-label`)??void 0}onRootPointerDownOutside(e){let t=this.area(),n=e.composedPath()[0];e.button===2&&t&&n instanceof Node&&Ut(t,n)&&e.preventDefault()}syncTrigger(){let e=this.area();if(!e)return;so(e,`data-state`,this.open?`open`:`closed`),so(e,`data-disabled`,this.disabled?``:null);let t=this.open&&this.isModal&&!this.disabled;t&&this.areaPointerEvents===null?(this.areaPointerEvents=e.style.pointerEvents,e.style.pointerEvents=`auto`):!t&&this.areaPointerEvents!==null&&(e.style.pointerEvents=this.areaPointerEvents,this.areaPointerEvents=null)}openAt(e){let t=this.area();if(t){if(!this.open){let e=en(document);this.restoreTo=e instanceof HTMLElement&&Ut(t,e)?e:t}if(this.position=e,this.open){this.reanchor();return}this.openWith(`first`,`contextmenu`)}}openAtPoint(e,t){let n=this.area();if(!n)return;let r=Ue(n)===`rtl`;this.openAt({anchor:ho(e,t,n),placement:r?`left-start`:`right-start`,offset:po})}inArea(e){let t=this.area(),n=e.composedPath()[0];return!!t&&n instanceof Node&&Ut(t,n)}clearLongPress(){clearTimeout(this.longPress),this.longPress=void 0}connectedCallback(){super.connectedCallback(),this.addEventListener(`contextmenu`,this.handleContextMenu),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`pointerdown`,this.handlePointerDown),this.addEventListener(`pointermove`,this.handleTouchEnd),this.addEventListener(`pointerup`,this.handleTouchEnd),this.addEventListener(`pointercancel`,this.handleTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.clearLongPress(),this.removeEventListener(`contextmenu`,this.handleContextMenu),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`pointerdown`,this.handlePointerDown),this.removeEventListener(`pointermove`,this.handleTouchEnd),this.removeEventListener(`pointerup`,this.handleTouchEnd),this.removeEventListener(`pointercancel`,this.handleTouchEnd)}render(){return k`<slot></slot>${this.renderPanels()}`}}})))()}function vo(e){return So.add(e),!Co&&typeof MutationObserver<`u`&&(Co=new MutationObserver(()=>{for(let e of[...So])e()}),Co.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`],subtree:!0})),()=>{So.delete(e),So.size===0&&(Co?.disconnect(),Co=null)}}var yo,bo,xo,So,Co,$;function wo(){return(wo=e((()=>{b(),c(),y(),p(),u(),Ge(),Er(),Hn(),ft(),j(),D(),on(),nn(),yo=(e,t)=>Number.isFinite(e)&&e>0?e:t,bo=e=>e===`dark`||e===`github-dark`?`dark`:e===`light`?`light`:void 0,xo=e=>typeof e?.editor?.create==`function`,So=new Set,Co=null,$=class e extends wt{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.language=`plaintext`,this.label=``,this.height=420,this.minHeight=160,this.maxHeight=800,this.loadTimeout=1e4,this.status=`loading`,this.scopeTheme=`light`,this.locale=new g(this),this.editor=null,this.engine=null,this.container=null,this.subscriptions=[],this.applying=!1,this.edited=!1,this.dirty=!1,this.unobserveTheme=null,this.started=!1}static{this.tagName=`minerva-code-editor`}static{this.dependencies=[B,Yn]}static{this.styles=[x,w`
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
`,S(Dt)]}get resolvedTheme(){return this.theme===`dark`||this.theme===`light`?this.theme:this.scopeTheme}focus(e){this.editor?this.editor.focus():this.fallback?.focus(e)}retry(){this.load()}getFormValue(){return this.value}getValidity(){return this.required&&!this.value?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.fallback??null}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}connectedCallback(){super.connectedCallback(),this.syncScopeTheme(),this.unobserveTheme=vo(()=>this.syncScopeTheme()),this.started&&this.load()}disconnectedCallback(){super.disconnectedCallback(),this.unobserveTheme?.(),this.unobserveTheme=null,this.teardown()}syncScopeTheme(){let e=It(this,`[data-theme]`);this.scopeTheme=bo(e?.getAttribute(`data-theme`))??`light`}get monacoTheme(){return this.resolvedTheme===`dark`?`vs-dark`:`vs`}teardown(){clearTimeout(this.timer),this.timer=void 0;for(let e of this.subscriptions)e.dispose();this.subscriptions=[];try{this.editor?.dispose()}catch{}this.editor=null,this.engine=null,this.container?.remove(),this.container=null}fail(){let e=this.status===`error`;this.teardown(),this.status=`error`,e||this.emit(`minerva-error`)}load(){this.teardown(),this.status=`loading`,this.isConnected&&(this.timer=setTimeout(()=>this.fail(),this.loadTimeout),this.monaco!==void 0&&this.mount())}mount(){let t=this.monaco;if(!xo(t)){d&&_(e.tagName,'`monaco` is not a Monaco engine (expected `import * as monaco from "monaco-editor"`); showing the textarea fallback.'),this.fail();return}let n=document.createElement(`div`);n.slot=`editor`,n.setAttribute(`data-minerva-code-editor`,``),this.append(n),this.container=n;try{t.editor.setTheme(this.monacoTheme);let e=t.editor.create(n,{value:this.value,language:this.language,theme:this.monacoTheme,readOnly:this.isDisabled,domReadOnly:this.isDisabled,ariaLabel:this.label,automaticLayout:!0,minimap:{enabled:!1},wordWrap:`on`,scrollBeyondLastLine:!1});this.editor=e,this.engine=t,this.subscriptions.push(e.onDidChangeModelContent(()=>this.handleEdit()),e.onDidBlurEditorText(()=>this.commit()))}catch{this.fail();return}clearTimeout(this.timer),this.timer=void 0,this.status=`mounted`}handleEdit(){let e=this.editor;e&&!this.applying&&(this.isDisabled||(this.value=e.getValue(),this.dirty=!0,this.edited=!0,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.emit(`minerva-input`,{value:this.value})))}commit(){this.edited&&(this.edited=!1,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value}))}handleFallbackInput(e){this.isDisabled||(this.value=e.target.value,this.dirty=!0,this.edited=!0,this.emit(`minerva-input`,{value:this.value}))}applyValue(){let e=this.editor;if(e&&e.getValue()!==this.value){this.applying=!0;try{let t=e.getModel();this.isDisabled||!t?e.setValue(this.value):(e.executeEdits(``,[{range:t.getFullModelRange(),text:this.value,forceMoveMarkers:!0}]),e.pushUndoStop())}finally{this.applying=!1}}}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue)}updated(t){if(super.updated(t),!this.started){this.started=!0,d&&!this.label&&_(e.tagName,`set label: it is the visible label and the accessible name of the editor.`),this.load();return}if(t.has(`monaco`)&&t.get(`monaco`)!==void 0){this.load();return}t.has(`monaco`)&&this.monaco!==void 0&&!this.editor&&(this.status===`loading`&&this.timer!==void 0?this.mount():this.status===`error`&&this.load());let n=this.editor,r=this.engine;if(n&&r)try{t.has(`value`)&&this.applyValue(),t.has(`language`)&&r.editor.setModelLanguage(n.getModel(),this.language),(t.has(`disabled`)||t.has(`formDisabled`)||t.has(`label`))&&n.updateOptions({readOnly:this.isDisabled,domReadOnly:this.isDisabled,ariaLabel:this.label}),(t.has(`theme`)||t.has(`scopeTheme`))&&r.editor.setTheme(this.monacoTheme)}catch{this.fail()}}render(){let e=yo(this.minHeight,160),t=Math.max(e,yo(this.maxHeight,800)),n=Math.min(t,Math.max(e,yo(this.height,420))),r=this.locale.t,i=this.status;return k`<div
part="base"
class="root"
role="group"
aria-label=${this.label||O}
>
<label
part="label"
class="label"
for=${i===`error`?`fallback`:O}
@click=${()=>this.editor?.focus()}
>${this.label}</label
>
<div
part="surface"
class="surface"
style=${M({height:`${n}px`})}
aria-busy=${i===`loading`?`true`:`false`}
>
${i===`error`?k`<div class="error">
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
                      >${ue}</span
                    >
                    ${this.retryText??r(`monacoCodeEditor.retry`)}
                  </minerva-button>
                </div>
                <textarea
                  id="fallback"
                  part="fallback"
                  class="fallback"
                  aria-label=${this.label||O}
                  spellcheck="false"
                  .value=${kn(this.value)}
                  ?disabled=${this.isDisabled}
                  @input=${this.handleFallbackInput}
                  @change=${()=>this.commit()}
                ></textarea>`:k`${i===`loading`?k`<div class="loading" role="status">
<minerva-progress
size="small"
aria-label=${this.loadingLabel??r(`monacoCodeEditor.loading`)}
></minerva-progress>
</div>`:O}<slot name="editor"></slot>`}
</div>
</div>`}},P([A({attribute:!1})],$.prototype,`monaco`,void 0),P([A({attribute:!1})],$.prototype,`value`,void 0),P([A({attribute:`value`})],$.prototype,`defaultValue`,void 0),P([A({reflect:!0})],$.prototype,`language`,void 0),P([A()],$.prototype,`label`,void 0),P([A({type:Number})],$.prototype,`height`,void 0),P([A({type:Number,attribute:`min-height`})],$.prototype,`minHeight`,void 0),P([A({type:Number,attribute:`max-height`})],$.prototype,`maxHeight`,void 0),P([A({reflect:!0})],$.prototype,`theme`,void 0),P([A({type:Number,attribute:`load-timeout`})],$.prototype,`loadTimeout`,void 0),P([A({attribute:`unavailable-text`})],$.prototype,`unavailableText`,void 0),P([A({attribute:`retry-text`})],$.prototype,`retryText`,void 0),P([A({attribute:`retry-label`})],$.prototype,`retryLabel`,void 0),P([A({attribute:`loading-label`})],$.prototype,`loadingLabel`,void 0),P([C()],$.prototype,`status`,void 0),P([C()],$.prototype,`scopeTheme`,void 0),P([E(`textarea`)],$.prototype,`fallback`,void 0)})))()}export{ki as $,Y as A,B as At,$i as B,dr as Bt,Oa as C,Ir as Ct,wa as D,Br as Dt,Ta as E,Pr as Et,pa as F,yr as Ft,Ki as G,ir as Gt,q as H,L as Ht,aa as I,_r as It,Hi as J,Ui as K,F as Kt,ia as L,mr as Lt,J as M,wr as Mt,ga as N,gr as Nt,X as O,Rr as Ot,fa as P,br as Pt,ji as Q,ra as R,hr as Rt,ja as S,V as St,ka as T,Lr as Tt,Yi as U,or as Ut,ea as V,pr as Vt,qi as W,I as Wt,K as X,Bi as Y,Vi as Z,Wa as _,Xr as _t,go as a,vi as at,Fa as b,H as bt,lo as c,fi as ct,La as d,W as dt,Oi as et,za as f,ti as ft,Ra as g,ei as gt,Ba as h,$r as ht,fo as i,Ei as it,va as j,z as jt,xa as k,Er as kt,Ya as l,di as lt,Ja as m,ni as mt,wo as n,Ti as nt,uo as o,G as ot,Ha as p,ii as pt,Wi as q,$n as qt,_o as r,mi as rt,so as s,pi as st,$ as t,Di as tt,oo as u,ci as ut,Z as v,U as vt,Da as w,Fr as wt,Ma as x,zr as xt,Va as y,Jr as yt,na as z,fr as zt};