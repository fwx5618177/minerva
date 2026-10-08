import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{$ as t,$t as n,At as r,Bn as i,Bt as a,Cr as o,Ct as s,Dn as c,Dt as ee,En as te,Et as ne,Ft as re,Gn as ie,Gt as ae,Ht as oe,In as se,It as ce,Jn as le,Jt as ue,Kt as de,Ln as fe,Lt as pe,Mt as me,Nn as he,On as ge,Ot as _e,Pn as ve,Qt as ye,Rn as be,Rt as xe,Sn as Se,Sr as Ce,St as we,Tn as Te,Tr as l,Tt as Ee,Un as De,Ut as Oe,Vn as ke,Vt as Ae,Wn as u,Wt as je,Xn as Me,Xt as Ne,Yn as Pe,Yt as Fe,Zn as Ie,Zt as Le,_n as Re,_r as d,_t as ze,an as Be,ar as f,at as Ve,bn as p,br as He,bt as Ue,cn as We,cr as Ge,ct as Ke,dn as qe,dr as m,dt as Je,en as Ye,er as Xe,et as Ze,fn as Qe,fr as h,ft as $e,gn as et,gr as g,gt as tt,hn as nt,hr as rt,ht as it,in as at,jn as ot,jt as st,kn as ct,kt as lt,ln as ut,lr as dt,lt as ft,mn as pt,mr as _,mt,n as ht,nn as gt,nt as _t,on as vt,or as v,ot as yt,pn as bt,pr as y,pt as xt,qn as St,qt as Ct,rn as wt,sn as Tt,sr as b,st as Et,t as Dt,tn as Ot,tr as kt,tt as At,un as jt,ur as x,ut as Mt,vn as Nt,vr as S,vt as Pt,wr as C,wt as Ft,xn as It,xr as Lt,xt as Rt,yn as w,yr as zt,yt as Bt,zn as Vt,zt as Ht}from"./minerva-web-components-jGnIpGRS.js";import{$ as Ut,$t as Wt,A as T,An as Gt,C as E,Ct as Kt,D,Dn as qt,Dt as Jt,E as O,Et as Yt,Gt as Xt,H as k,I as A,In as Zt,Kt as Qt,L as j,M,Mt as $t,N,Nt as en,On as tn,Pn as nn,Pt as rn,Q as an,Rt as on,S as P,Sn as sn,Tn as cn,Tt as ln,Xt as un,_ as dn,_n as fn,a as pn,an as mn,at as hn,b as gn,c as _n,cn as vn,d as yn,en as bn,et as xn,fn as Sn,ft as Cn,g as wn,h as Tn,ht as En,i as Dn,kn as On,kt as kn,l as An,n as jn,nn as Mn,nt as Nn,o as Pn,p as Fn,pn as In,r as Ln,rn as Rn,t as zn,tn as Bn,u as Vn,w as F,wt as Hn,xt as Un,y as Wn,yn as Gn,z as Kn}from"./minerva-web-components-e9i9Tzii.js";import{t as I}from"./minerva-web-components-DB7tn7hP.js";import{a as qn,c as Jn,d as Yn,f as Xn,h as Zn,l as Qn,m as $n,o as er,p as tr,s as nr,u as rr}from"./minerva-web-components-CWt1QHTd.js";import{At as ir,Bt as ar,It as or,Lt as sr,Mt as cr,Nt as lr,Rt as ur,jt as dr,zt as fr}from"./minerva-web-components-DfwUG3eI.js";var pr,mr,L;function hr(){return(hr=e((()=>{dt(),C(),f(),u(),g(),y(),m(),w(),N(),O(),E(),gn(),vn(),pr={info:he,success:Se,warning:ve,danger:kt},mr=[`slideIn`,`fadeIn`,`bounce`,`zoom`],L=class e extends _{constructor(...e){super(...e),this.color=`info`,this.variant=`subtle`,this.size=`medium`,this.heading=``,this.hideIcon=!1,this.closable=!1,this.noAnimation=!1,this.animationName=`slideIn`,this.banner=!1,this.elevation=!1,this.square=!1,this.collapsible=!1,this.collapsed=!1,this.locale=new d(this),this.aria=new l(this),this.slots=new x(this)}static{this.tagName=`minerva-alert`}static{this.styles=[h,k`
:host{
display: block;
}
.icon svg,
.expandButton svg,
.closeButton svg{
display: block;
}
`,p(Ge)]}get hasHeading(){return!!this.heading||this.slots.test(`heading`)}handleExpand(){let e=this.collapsed;this.emit(`minerva-expanded-change`,{expanded:e},{cancelable:!0})&&(this.collapsed=!e)}handleClose(){let e=this.adjacentTabbable(),t=this.parentElement;this.emit(`minerva-close`,{},{cancelable:!0})&&(this.isFocusInsideOrLost()&&this.moveFocusOut(e,t),this.hidden=!0)}isFocusInsideOrLost(){let e=this.ownerDocument,t=mn(e);return!t||t===e.body||!t.isConnected||Rn(this,t)}adjacentTabbable(){let e=Ut(this.ownerDocument.body),t=e.map((e,t)=>Rn(this,e)?t:-1).filter(e=>e>=0);if(!t.length)return null;let n=e=>!Rn(this,e)&&tn(e);return e.slice(t[t.length-1]+1).find(n)??e.slice(0,t[0]).filter(n).pop()??null}moveFocusOut(e,t){let n=typeof this.returnFocus==`function`?this.returnFocus():this.returnFocus;n?.isConnected&&Sn(n)||e?.isConnected&&Sn(e)||this.focusContainer(t)}focusContainer(e){let t=this.ownerDocument;if(e?.isConnected){for(let n=e;n&&n!==t.body;n=n.parentElement)if(n.hasAttribute(`tabindex`)&&Sn(n))return;e!==t.body&&e!==t.documentElement&&(e.setAttribute(`tabindex`,`-1`),e.addEventListener(`blur`,()=>{e.getAttribute(`tabindex`)===`-1`&&e.removeAttribute(`tabindex`)},{once:!0}),Sn(e,{preventScroll:!0}))}}updated(){b&&this.collapsible&&!this.hasHeading&&v(e.tagName,`collapsible needs a heading (the toggle lives in the title): set heading or fill the heading slot.`)}render(){let e=this.locale.t,t=this.hasHeading,n=this.collapsible&&t,r=!this.collapsed,a=this.slots.test(`[default]`),o=!this.noAnimation,s=this.borderRadius,c=this.alertRole??(this.color===`danger`||this.color===`warning`?`alert`:`status`);return j`<div
part="base"
class=${F({alert:!0,[this.color]:!0,[this.variant]:!0,[this.size]:!0,withIcon:!this.hideIcon,withTitle:t,banner:this.banner,withAnimation:o,[`animation-${this.animationName}`]:o&&mr.includes(this.animationName),withElevation:this.elevation,rounded:!this.square,expanded:r,collapsible:n})}
style=${P({borderRadius:s==null||s===``?void 0:/^\d+(\.\d+)?$/.test(String(s))?`${s}px`:String(s)})}
role=${c}
aria-label=${this.aria.label??A}
>
${this.hideIcon?A:j`<span
part="icon"
class="icon"
role="img"
aria-label=${this.iconLabel??e(`alert.icon.${this.color}`)}
><slot name="icon">${pr[this.color]??pr.info}</slot></span
>`}
<div class="content">
${t?j`<div class="title" part="heading">
<slot name="heading">${this.heading}</slot>
${n?j`<button
type="button"
part="toggle"
class="expandButton"
aria-label=${r?this.collapseLabel??e(`alert.collapse`):this.expandLabel??e(`alert.expand`)}
aria-expanded=${String(r)}
aria-controls=${r&&a?`message`:A}
@click=${this.handleExpand}
>
${r?Me:i}
</button>`:A}
</div>`:A}
${a&&(!n||r)?j`<div id="message" class="message" part="message">
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
</div>`}},I([M({reflect:!0})],L.prototype,`color`,void 0),I([M({reflect:!0})],L.prototype,`variant`,void 0),I([M({reflect:!0})],L.prototype,`size`,void 0),I([M()],L.prototype,`heading`,void 0),I([M({type:Boolean,attribute:`hide-icon`})],L.prototype,`hideIcon`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`closable`,void 0),I([M({type:Boolean,attribute:`no-animation`})],L.prototype,`noAnimation`,void 0),I([M({attribute:`animation-name`})],L.prototype,`animationName`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`banner`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`elevation`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`square`,void 0),I([M({attribute:`border-radius`})],L.prototype,`borderRadius`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`collapsible`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`collapsed`,void 0),I([M({attribute:`close-label`})],L.prototype,`closeLabel`,void 0),I([M({attribute:`expand-label`})],L.prototype,`expandLabel`,void 0),I([M({attribute:`collapse-label`})],L.prototype,`collapseLabel`,void 0),I([M({attribute:`icon-label`})],L.prototype,`iconLabel`,void 0),I([M({attribute:`alert-role`})],L.prototype,`alertRole`,void 0),I([M({attribute:!1})],L.prototype,`returnFocus`,void 0)})))()}var gr,_r,vr,yr,R;function br(){return(br=e((()=>{f(),u(),He(),g(),y(),m(),w(),et(),pt(),$n(),rr(),Jn(),qn(),N(),O(),E(),vn(),gr=[`expanded`,`compact`,`floating`],_r=`(max-width: 768px)`,vr=()=>typeof window<`u`&&typeof window.matchMedia==`function`?window.matchMedia(_r):null,yr={iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,control:!0},R=class e extends _{constructor(...e){super(...e),this.brand=``,this.sidebarMode=`expanded`,this.noSkipLink=!1,this.collapsed=!1,this.mobile=!1,this.drawerOpen=!1,this.hovered=!1,this.keyboardFocus=!1,this.locale=new d(this),this.slots=new x(this),this.modal=new er(this),this.focusScope=new Yn(this,()=>({trapped:!0,loop:!0,restoreFocus:!1})),this.layer=new Zn(this,()=>({disableOutsidePointerEvents:!0,branches:()=>[this.headerToggle],onFocusOutside:e=>e.preventDefault(),onDismiss:()=>this.requestDrawer(!1)})),this.query=null,this.drawerActive=!1,this.handleMediaChange=()=>this.syncMobile()}static{this.tagName=`minerva-app-shell`}static{this.styles=[h,Qn,k`
:host{
display: block;
}
`,p(bt),p(nt)]}openNavigation(){this.mobile&&(this.drawerOpen=!0)}closeNavigation(){this.drawerOpen=!1}expandNavigation(){this.sidebarMode=`expanded`}focusMain(){this.main?.focus()}connectedCallback(){super.connectedCallback(),this.query=vr(),this.query?.addEventListener(`change`,this.handleMediaChange),this.syncMobile()}disconnectedCallback(){super.disconnectedCallback(),this.query?.removeEventListener(`change`,this.handleMediaChange),this.query=null,this.deactivateDrawer()}syncMobile(){let e=!!this.query?.matches;e!==this.mobile&&(this.mobile=e,this.hovered=!1,this.keyboardFocus=!1,this.drawerOpen=!1)}get mode(){return gr.includes(this.sidebarMode)?this.sidebarMode:`expanded`}setMode(e){e!==this.mode&&this.emit(`minerva-sidebar-mode-change`,{mode:e},{cancelable:!0})&&(this.sidebarMode=e)}requestDrawer(e){e!==this.drawerOpen&&this.emit(`minerva-open-change`,{open:e},{cancelable:!0})&&(this.drawerOpen=e)}willUpdate(e){e.has(`navigationKey`)&&e.get(`navigationKey`)!==void 0&&(this.drawerOpen=!1),this.mobile||(this.drawerOpen=!1),this.collapsed=!this.mobile&&this.mode!==`expanded`&&(this.mode!==`floating`||!this.hovered&&!this.keyboardFocus)}updated(t){let n=this.mobile&&this.drawerOpen;n&&!this.drawerActive&&this.drawer?(this.drawerActive=!0,zt(this.overlay),zt(this.drawer),this.modal.activate(this),this.layer.activate(this.drawer),this.focusScope.activate(this.drawer)):!n&&this.drawerActive&&(this.deactivateDrawer(),this.headerToggle?.focus()),b&&t.has(`sidebarMode`)&&!gr.includes(this.sidebarMode)&&v(e.tagName,`unknown sidebar-mode="${this.sidebarMode}" (expected ${gr.join(`, `)}); using "expanded".`),b&&!this.slots.test(`navigation`)&&v(e.tagName,`put the navigation in the "navigation" slot (e.g. <nav slot="navigation">).`)}deactivateDrawer(){this.drawerActive&&(this.drawerActive=!1,this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate(),S(this.drawer),S(this.overlay))}label(e,t){return e??this.locale.t(`appShell.${t}`)}handleSkip(e){e.preventDefault(),this.focusMain()}handleSidebarFocusIn(e){let t=e.composedPath()[0],n;try{n=!!t?.matches?.(`:focus-visible`)}catch{n=!1}n&&(this.keyboardFocus=!0)}handleSidebarFocusOut(e){let t=e.relatedTarget;(!t||!this.sidebar||!Rn(this.sidebar,t))&&(this.keyboardFocus=!1)}renderHeaderToggle(){return this.mobile?j`<button
type="button"
class=${F(yr)}
aria-label=${this.label(this.openNavigationLabel,`openNavigation`)}
aria-haspopup="dialog"
aria-expanded=${String(this.drawerOpen)}
aria-controls=${this.drawerOpen?`drawer`:A}
@click=${()=>this.requestDrawer(!this.drawerOpen)}
>
${ct}
</button>`:this.renderCollapseControl()}renderCollapseControl(){let e=this.mode!==`expanded`;return j`<button
type="button"
class=${F(yr)}
aria-label=${e?this.label(this.expandLabel,`expand`):this.label(this.collapseLabel,`collapse`)}
aria-controls="sidebar"
aria-expanded=${String(!this.collapsed)}
@click=${()=>this.setMode(e?`expanded`:`compact`)}
>
${e?ct:ge}
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
class=${F(yr)}
aria-pressed=${String(e)}
aria-label=${e?this.label(this.disableFloatingLabel,`disableFloating`):this.label(this.enableFloatingLabel,`enableFloating`)}
@click=${()=>this.setMode(e?`compact`:`floating`)}
>
${e?Te:ot}
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
${Ie}
</button>
</div>`}render(){let e=this.skipLink||this.locale.t(`appShell.skipToContent`);return j`<div
class="shell"
part="shell"
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
${this.mobile&&this.drawerOpen?this.renderDrawer():A}`}},I([M()],R.prototype,`brand`,void 0),I([M({attribute:`sidebar-mode`,reflect:!0})],R.prototype,`sidebarMode`,void 0),I([M({attribute:`navigation-label`})],R.prototype,`navigationLabel`,void 0),I([M({attribute:`navigation-key`})],R.prototype,`navigationKey`,void 0),I([M({attribute:`skip-link`})],R.prototype,`skipLink`,void 0),I([M({type:Boolean,attribute:`no-skip-link`})],R.prototype,`noSkipLink`,void 0),I([M({attribute:`expand-label`})],R.prototype,`expandLabel`,void 0),I([M({attribute:`collapse-label`})],R.prototype,`collapseLabel`,void 0),I([M({attribute:`enable-floating-label`})],R.prototype,`enableFloatingLabel`,void 0),I([M({attribute:`disable-floating-label`})],R.prototype,`disableFloatingLabel`,void 0),I([M({attribute:`open-navigation-label`})],R.prototype,`openNavigationLabel`,void 0),I([M({attribute:`close-navigation-label`})],R.prototype,`closeNavigationLabel`,void 0),I([M({type:Boolean,reflect:!0})],R.prototype,`collapsed`,void 0),I([M({type:Boolean,reflect:!0})],R.prototype,`mobile`,void 0),I([T()],R.prototype,`drawerOpen`,void 0),I([T()],R.prototype,`hovered`,void 0),I([T()],R.prototype,`keyboardFocus`,void 0),I([D(`.header button`)],R.prototype,`headerToggle`,void 0),I([D(`.drawer`)],R.prototype,`drawer`,void 0),I([D(`.overlay`)],R.prototype,`overlay`,void 0),I([D(`main`)],R.prototype,`main`,void 0),I([D(`aside`)],R.prototype,`sidebar`,void 0)})))()}var xr,z;function Sr(){return(Sr=e((()=>{C(),f(),u(),g(),y(),m(),w(),Jn(),We(),vt(),jt(),N(),O(),E(),gn(),dn(),xr={top:`top-start`,bottom:`bottom-start`,left:`left-start`,right:`right-start`},z=class e extends ut{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.options=[],this.open=!1,this.label=``,this.placeholder=``,this.mode=`basic`,this.size=`medium`,this.variant=`outline`,this.invalid=!1,this.readOnly=!1,this.loading=!1,this.placement=`bottom`,this.offset={x:0,y:4},this.noAnimation=!1,this.autoHighlight=!1,this.noFillOnSelect=!1,this.groupMode=`first`,this.focusedIndex=-1,this.hoveredIndex=-1,this.locale=new d(this),this.aria=new l(this,()=>this.labels),this.slots=new x(this),this.floating=new nr(this,()=>{let e=this.placement===`top`||this.placement===`bottom`,t=this.offset??{x:0,y:4};return{anchor:()=>this.container,floating:()=>this.popup,placement:xr[this.placement]??`bottom-start`,offset:{mainAxis:e?t.y:t.x,crossAxis:e?t.x:t.y},matchAnchorWidth:`min`,branches:()=>[this.container],onEscapeKeyDown:e=>{(this.composing||e.isComposing)&&e.preventDefault()},onDismiss:()=>this.close(),returnFocusOnEscape:()=>this.input}}),this.composing=!1,this.dirty=!1}static{this.tagName=`minerva-autocomplete`}static{this.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,Qn,p(Tt),p(Be),k`
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
`]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get blocked(){return this.isDisabled||this.readOnly}get shown(){return this.open&&!this.blocked}getFormValue(){return this.value}getValidity(){return this.required&&this.value===``?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.focusedIndex=-1}restoreFormState(e){typeof e==`string`&&(this.value=e)}get processedOptions(){let e=this.value,t=e.toLowerCase(),n=(this.options??[]).filter(n=>this.filterOption?this.filterOption(e,n):n.label.toLowerCase().includes(t));return this.sortOption?[...n].sort(this.sortOption):n}groupOptions(e){let t=this.groupBy;if(!t)return null;if(this.groupMode===`adjacent`){let n=[];for(let r of e){let e=t(r),i=n[n.length-1];i&&i[0]===e?i[1].push(r):n.push([e,[r]])}return n}let n=new Map;for(let r of e){let e=t(r),i=n.get(e);i?i.push(r):n.set(e,[r])}return Array.from(n.entries())}get navigableOptions(){let e=this.processedOptions,t=this.groupOptions(e);return t?t.flatMap(([,e])=>e):e}activeIndex(e){return this.focusedIndex>=0?this.focusedIndex:this.autoHighlight&&this.shown?e.findIndex(e=>!e.disabled):-1}requestOpen(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}openDropdown(){this.blocked||this.requestOpen(!0)}close(){this.requestOpen(!1),this.focusedIndex=-1}setText(e,t){e!==this.value&&(this.value=e,this.emit(`minerva-input`,{value:e}),t&&this.emit(`minerva-change`,{value:e}))}moveFocus(e){let t=this.navigableOptions,n=t.length;if(n===0)return;let r=this.activeIndex(t),i=r>=0?r:e===1?-1:n;for(let r=0;r<n;r+=1)if(i=(i+e+n)%n,!t[i].disabled){this.focusedIndex=i;return}}selectOption(e){e.disabled||(this.noFillOnSelect||this.setText(e.label,!0),this.close(),this.emit(`minerva-select`,{value:e.value,option:e}))}handleKeyDown(e){if(!(this.blocked||this.composing||e.isComposing||e.keyCode===229))switch(e.key){case`ArrowDown`:case`ArrowUp`:e.preventDefault(),this.open||this.openDropdown(),this.moveFocus(e.key===`ArrowDown`?1:-1);break;case`Enter`:{let t=this.navigableOptions,n=this.shown?t[this.activeIndex(t)]:void 0,r=this.value.trim();n?(e.preventDefault(),this.selectOption(n)):r&&(e.preventDefault(),this.emit(`minerva-submit`,{value:r}),this.close());break}case`Escape`:!this.shown&&!this.floating.isOpen&&this.value!==``&&(e.preventDefault(),this.setText(``,!0),this.focusedIndex=-1)}}handleInput(){this.setText(this.input.value,!1),this.focusedIndex=-1,this.openDropdown()}handleChange(){this.value=this.input.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}handleBlur(e){let t=e.relatedTarget;t&&(this.popup?.contains(t)||this.container?.contains(t))||this.close()}handleOptionClick(e){e.disabled||this.composing||(this.selectOption(e),this.input?.focus())}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),this.open&&this.blocked&&(this.open=!1,this.focusedIndex=-1)}updated(t){if(super.updated(t),this.floating.sync(this.shown),t.has(`focusedIndex`)&&this.focusedIndex>=0&&this.shadowRoot?.getElementById(`option-${this.focusedIndex}`)?.scrollIntoView?.({block:`nearest`}),b&&t.has(`options`)){let t=new Set;for(let n of this.options??[]){if(t.has(n.value)){v(e.tagName,`several options have the value "${n.value}"; option values must be unique.`);break}t.add(n.value)}}}renderOptionContent(e){return this.mode===`custom`&&this.renderOption?this.renderOption(e):j`<div class="basicOption">
${e.icon?j`<span class="icon">${e.icon}</span>`:A}
<div class="content">
<div class="label">${e.label}</div>
${e.description?j`<div class="description">${e.description}</div>`:A}
</div>
</div>`}renderOptionItem(e,t,n){let r=n===t;return j`<div
part="option"
class=${F({optionItem:!0,disabled:!!e.disabled,highlight:!!e.highlight,active:this.hoveredIndex===t||r})}
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
>${c}</span
>
</div>`;let t=this.processedOptions;if(t.length===0)return j`<div role="presentation" class="empty" part="empty">
${this.renderEmpty?.()||j`${te}<span>${e(`empty.description`)}</span>`}
</div>`;let n=this.groupOptions(t),r=n?n.flatMap(([,e])=>e):t,i=this.activeIndex(r);return n?n.map(([e,t])=>{let n=t.map(e=>this.renderOptionItem(e,r.indexOf(e),i));return e===``?n:j`<div class="optionGroup" role="group" aria-label=${e}>
<div class="groupLabel" part="group-label" aria-hidden="true">
${e}
</div>
${n}
</div>`}):t.map((e,t)=>this.renderOptionItem(e,t,i))}render(){let e=this.shown,t=this.isDisabled,n=e?this.navigableOptions:[],r=e?this.activeIndex(n):-1,i=e&&r>=0&&r<n.length?`option-${r}`:void 0,a=this.label?void 0:this.aria.label;return j`<div
part="base"
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
.value=${Wn(this.value)}
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
${e?j`<div class="popup" part="popup" popover="manual">
<div
class=${F({dropdown:!0,animated:!this.noAnimation})}
>
<div
class="optionList"
part="listbox"
role="listbox"
id="listbox"
aria-label=${this.label||a||A}
aria-busy=${this.loading?`true`:A}
>
${this.renderList()}
</div>
</div>
</div>`:A}
</div>`}},I([M({attribute:!1})],z.prototype,`value`,void 0),I([M({attribute:`value`})],z.prototype,`defaultValue`,void 0),I([M({attribute:!1})],z.prototype,`options`,void 0),I([M({type:Boolean,reflect:!0})],z.prototype,`open`,void 0),I([M()],z.prototype,`label`,void 0),I([M()],z.prototype,`placeholder`,void 0),I([M({reflect:!0})],z.prototype,`mode`,void 0),I([M({reflect:!0})],z.prototype,`size`,void 0),I([M({reflect:!0})],z.prototype,`variant`,void 0),I([M({type:Boolean,reflect:!0})],z.prototype,`invalid`,void 0),I([M({type:Boolean,reflect:!0,attribute:`readonly`})],z.prototype,`readOnly`,void 0),I([M({type:Boolean,reflect:!0})],z.prototype,`loading`,void 0),I([M({reflect:!0})],z.prototype,`placement`,void 0),I([M({attribute:!1})],z.prototype,`offset`,void 0),I([M({type:Boolean,attribute:`no-animation`})],z.prototype,`noAnimation`,void 0),I([M({type:Boolean,attribute:`auto-highlight`})],z.prototype,`autoHighlight`,void 0),I([M({type:Boolean,attribute:`no-fill-on-select`})],z.prototype,`noFillOnSelect`,void 0),I([M({attribute:`group-mode`})],z.prototype,`groupMode`,void 0),I([M({attribute:!1})],z.prototype,`filterOption`,void 0),I([M({attribute:!1})],z.prototype,`sortOption`,void 0),I([M({attribute:!1})],z.prototype,`groupBy`,void 0),I([M({attribute:!1})],z.prototype,`renderOption`,void 0),I([M({attribute:!1})],z.prototype,`renderEmpty`,void 0),I([T()],z.prototype,`focusedIndex`,void 0),I([T()],z.prototype,`hoveredIndex`,void 0),I([D(`input`)],z.prototype,`input`,void 0),I([D(`.autoComplete`)],z.prototype,`container`,void 0),I([D(`.popup`)],z.prototype,`popup`,void 0)})))()}function Cr(e){let t=e?.trim()??``;return t?Tr.test(t[0])?t[0]:t.split(/\s+/).slice(0,2).map(e=>e[0].toUpperCase()).join(``):``}var wr,Tr,Er,Dr,Or;function kr(){return(kr=e((()=>{C(),f(),g(),y(),m(),w(),at(),gt(),N(),O(),E(),gn(),wr=[`xsmall`,`small`,`medium`,`large`,`xlarge`,`xxlarge`],Tr=/[㐀-鿿豈-﫿]/,Er={fromAttribute:e=>e&&/^\d+(\.\d+)?$/.test(e)?Number(e):e??`medium`,toAttribute:e=>String(e)},Dr=class e extends _{constructor(...e){super(...e),this.name=``,this.shape=`circle`,this.size=`medium`,this.stacked=!1,this.locale=new d(this),this.aria=new l(this),this.slots=new x(this)}static{this.tagName=`minerva-avatar`}static{this.styles=[h,k`
:host{
display: inline-block;
flex-shrink: 0;
vertical-align: middle;
line-height: 0;
}
.avatarText{
line-height: 1;
}
`,p(wt)]}updated(t){b&&t.has(`size`)&&typeof this.size!=`number`&&!wr.includes(this.size)&&v(e.tagName,`unknown size "${this.size}": use a preset (${wr.join(`, `)}) or a number of pixels.`)}render(){let e=!!this.src&&this.failedSrc!==this.src,t=this.aria.label??(this.name||this.locale.t(`avatar.default`)),n=typeof this.size==`number`,r=F({avatar:!0,[this.shape]:!0,[String(this.size)]:!n,stacked:this.stacked}),i=P(n?{"--avatar-size":`${this.size}px`,width:`${this.size}px`,height:`${this.size}px`}:{});if(e)return j`<span part="base" class=${r} style=${i}
><img
part="image"
class="avatarImg"
alt=${this.alt??t}
src=${this.src}
draggable="false"
@error=${()=>this.failedSrc=this.src}
/></span>`;let a=Cr(this.name),o=this.slots.test(`fallback`)?j`<slot name="fallback"></slot>`:a||j`<slot></slot>`;return j`<span
part="base"
role="img"
aria-label=${t}
class=${r}
style=${i}
><span part="text" class="avatarText" aria-hidden="true"
>${o}</span
></span
>`}},I([M()],Dr.prototype,`src`,void 0),I([M()],Dr.prototype,`name`,void 0),I([M()],Dr.prototype,`alt`,void 0),I([M({reflect:!0})],Dr.prototype,`shape`,void 0),I([M({reflect:!0,converter:Er})],Dr.prototype,`size`,void 0),I([M({type:Boolean,reflect:!0})],Dr.prototype,`stacked`,void 0),I([T()],Dr.prototype,`failedSrc`,void 0),Or=class e extends _{constructor(...e){super(...e),this.locale=new d(this),this.aria=new l(this),this.slots=new x(this)}static{this.tagName=`minerva-avatar-group`}static{this.shadowRootOptions={..._.shadowRootOptions,slotAssignment:`manual`}}static{this.styles=[h,k`
:host{
display: flex;
}
.avatarGroup{
flex: 1 1 auto;
min-width: 0;
}
`,p(Ot)]}visibleAvatars(){let e=Array.from(this.children);return this.max===void 0||this.max===null?e:e.slice(0,Math.max(0,this.max))}updated(t){let n=this.visibleAvatars();Array.from(this.renderRoot.querySelectorAll(`slot[data-item]`)).forEach((e,t)=>{let r=n[t];r&&typeof e.assign==`function`&&e.assign(r)}),b&&t.has(`max`)&&this.max!==void 0&&this.max!==null&&!(Number.isInteger(this.max)&&this.max>=0)&&v(e.tagName,`max must be a non-negative integer (got ${this.max}).`)}render(){this.slots;let e=this.children.length,t=this.visibleAvatars(),n=(Number(this.count)||0)+e-t.length,r=this.aria.label??(n>0?this.locale.t(`avatar.groupWithMore`,{count:n}):this.locale.t(`avatar.group`));return j`<div
part="base"
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
</div>`}},I([M({type:Number})],Or.prototype,`count`,void 0),I([M({type:Number})],Or.prototype,`max`,void 0)})))()}var Ar;function jr(){return(jr=e((()=>{C(),f(),g(),y(),m(),w(),Ye(),N(),O(),E(),gn(),Ar=class e extends _{constructor(...e){super(...e),this.color=`primary`,this.variant=`solid`,this.size=`medium`,this.position=`top-right`,this.dot=!1,this.badgeRole=`status`,this.locale=new d(this),this.aria=new l(this),this.slots=new x(this)}static{this.tagName=`minerva-badge`}static{this.styles=[h,k`
:host{
display: inline-flex;
vertical-align: middle;
}
`,p(n)]}hasElementChildren(){return Array.from(this.children).some(e=>!e.hasAttribute(`slot`)||e.getAttribute(`slot`)===``)}updated(){b&&this.dot&&!this.aria.label&&![`presentation`,`none`].includes(this.badgeRole)&&v(e.tagName,`a dot badge has no text: set aria-label (e.g. "New messages") or badge-role="presentation".`)}render(){let e=this.slots.test(`[default]`),t=e&&!this.hasElementChildren(),n=this.content!==void 0&&this.content!==null||this.slots.test(`content`),r=!e||t&&!n,i=A;this.dot||(n?i=j`<slot name="content">${this.content}</slot>`:t?i=j`<slot></slot>`:e&&(i=this.locale.t(`badge.default`)));let a=j`<span
part=${r?`base badge`:`badge`}
class=${F({badge:!0,[this.color]:!0,[this.variant]:!0,[this.size]:!0,standalone:r,[this.position]:!r,dot:this.dot})}
role=${this.badgeRole||A}
aria-label=${this.aria.label??A}
style=${P({borderRadius:this.borderRadius,borderWidth:this.borderWidth})}
>${this.slots.test(`icon`)?j`<span class="icon" part="icon"
><slot name="icon"></slot
></span>`:A}${i}</span
>`;return r?a:j`<div part="base" class="badgeWrapper">
<div class="content"><slot></slot></div>
${a}
</div>`}},I([M({reflect:!0})],Ar.prototype,`color`,void 0),I([M({reflect:!0})],Ar.prototype,`variant`,void 0),I([M({reflect:!0})],Ar.prototype,`size`,void 0),I([M()],Ar.prototype,`content`,void 0),I([M({reflect:!0})],Ar.prototype,`position`,void 0),I([M({type:Boolean,reflect:!0})],Ar.prototype,`dot`,void 0),I([M({attribute:`border-radius`})],Ar.prototype,`borderRadius`,void 0),I([M({attribute:`border-width`})],Ar.prototype,`borderWidth`,void 0),I([M({attribute:`badge-role`})],Ar.prototype,`badgeRole`,void 0)})))()}function Mr(e){return e.replace(/[;{}<>]/g,``)}var Nr;function Pr(){return(Pr=e((()=>{vn(),Nr={fromAttribute:e=>{if(e===null)return;let t=e.trim();return/^-?\d+(\.\d+)?$/.test(t)?Number(t):t},toAttribute:e=>e===void 0?null:String(e)}})))()}var Fr,Ir,Lr,B,V;function Rr(){return(Rr=e((()=>{f(),y(),Pr(),N(),O(),Fr={bg:`var(--surface-color)`,"bg.subtle":`var(--surface-subtle-color)`,"bg.muted":`var(--surface-muted-color)`,"bg.emphasis":`var(--surface-muted-color)`,"bg.canvas":`var(--canvas-color)`,"bg.elevated":`var(--surface-elevated-color)`},Ir=[`none`,`sm`,`md`,`lg`,`xl`,`2xl`,`full`],Lr=[`sm`,`md`,`lg`,`xl`],B={converter:Nr},V=class e extends _{static{this.tagName=`minerva-box`}static{this.styles=[h,k`
:host{
display: block;
}
`]}declarations(){let e=[],t=(t,...n)=>{if(t!==void 0&&t!==``)for(let r of n)e.push([r,Kt(t)])},n=(t,n)=>{t!==void 0&&t!==``&&e.push([n,In(t)])};return t(this.p,`padding`),t(this.px,`padding-left`,`padding-right`),t(this.py,`padding-top`,`padding-bottom`),t(this.pt,`padding-top`),t(this.pr,`padding-right`),t(this.pb,`padding-bottom`),t(this.pl,`padding-left`),t(this.m,`margin`),t(this.mx,`margin-left`,`margin-right`),t(this.my,`margin-top`,`margin-bottom`),t(this.mt,`margin-top`),t(this.mr,`margin-right`),t(this.mb,`margin-bottom`),t(this.ml,`margin-left`),n(this.w,`width`),n(this.h,`height`),n(this.minW,`min-width`),n(this.minH,`min-height`),n(this.maxW,`max-width`),n(this.maxH,`max-height`),this.bg&&e.push([`background`,Fr[this.bg]??this.bg]),this.rounded&&e.push([`border-radius`,Ir.includes(this.rounded)?`var(--radius-${this.rounded})`:this.rounded]),this.boxShadow&&e.push([`box-shadow`,Lr.includes(this.boxShadow)?`var(--shadow-${this.boxShadow})`:this.boxShadow]),this.border&&e.push([`border`,this.border]),e}updated(){b&&this.bg?.startsWith(`bg.`)&&!(this.bg in Fr)&&v(e.tagName,`unknown surface alias bg="${this.bg}" (expected one of ${Object.keys(Fr).join(`, `)}).`)}render(){let e=this.declarations().map(([e,t])=>`${e}:${Mr(t)};`).join(``);return j`<style>
:host{${e}}
</style>
<slot></slot>`}},I([M(B)],V.prototype,`p`,void 0),I([M(B)],V.prototype,`px`,void 0),I([M(B)],V.prototype,`py`,void 0),I([M(B)],V.prototype,`pt`,void 0),I([M(B)],V.prototype,`pr`,void 0),I([M(B)],V.prototype,`pb`,void 0),I([M(B)],V.prototype,`pl`,void 0),I([M(B)],V.prototype,`m`,void 0),I([M(B)],V.prototype,`mx`,void 0),I([M(B)],V.prototype,`my`,void 0),I([M(B)],V.prototype,`mt`,void 0),I([M(B)],V.prototype,`mr`,void 0),I([M(B)],V.prototype,`mb`,void 0),I([M(B)],V.prototype,`ml`,void 0),I([M(B)],V.prototype,`w`,void 0),I([M(B)],V.prototype,`h`,void 0),I([M({converter:Nr,attribute:`min-w`})],V.prototype,`minW`,void 0),I([M({converter:Nr,attribute:`min-h`})],V.prototype,`minH`,void 0),I([M({converter:Nr,attribute:`max-w`})],V.prototype,`maxW`,void 0),I([M({converter:Nr,attribute:`max-h`})],V.prototype,`maxH`,void 0),I([M()],V.prototype,`bg`,void 0),I([M()],V.prototype,`rounded`,void 0),I([M({attribute:`box-shadow`})],V.prototype,`boxShadow`,void 0),I([M()],V.prototype,`border`,void 0)})))()}var zr,H;function Br(){return(Br=e((()=>{C(),f(),y(),m(),w(),jt(),ye(),N(),O(),E(),gn(),zr=e=>`borderRadius${e.charAt(0).toUpperCase()}${e.slice(1)}`,H=class e extends _{constructor(...e){super(...e),this.color=`primary`,this.variant=`solid`,this.size=`medium`,this.disabled=!1,this.loading=!1,this.fullWidth=!1,this.active=!1,this.type=`button`,this.internals=Qe(this),this.aria=new l(this),this.slots=new x(this),this.blockInactiveClicks=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-button`}static{this.formAssociated=!0}static{this.styles=[h,k`
:host{
display: inline-flex;
max-width: 100%;
vertical-align: middle;
}
:host([full-width]){
display: flex;
width: 100%;
}
`,p(Le)]}get form(){return this.internals?.form??null}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}handleClick(e){if(this.loading||this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockInactiveClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockInactiveClicks,!0)}updated(){b&&this.shape===`circle`&&!this.aria.label&&(this.textContent?.trim()||v(e.tagName,`shape="circle" buttons usually only contain an icon: set aria-label to give them an accessible name.`))}render(){let e=this.borderRadius,t=typeof e==`number`||typeof e==`string`&&/^\d+(\.\d+)?$/.test(e),n=this.loading&&this.slots.test(`loading`),r=this.loading&&!n,i=j`<span
class="loadingSpinner"
part="spinner"
aria-hidden="true"
></span>`;return j`<button
part="button"
type="button"
class=${F({customButton:!0,[this.color]:!0,[`variant-${this.variant}`]:!0,[this.size]:!0,[this.shape??``]:!!this.shape,[zr(String(e??``))]:!!e&&!t,fullWidth:this.fullWidth,active:this.active,loading:this.loading})}
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
${this.slots.test(`start`)?j`<span class=${F({icon:!0,hidden:r})}
><slot name="start"></slot
></span>`:A}
<span class=${F({label:!0,hidden:r})} part="label"
><slot></slot
></span>
${this.slots.test(`end`)?j`<span class=${F({icon:!0,hidden:r})}
><slot name="end"></slot
></span>`:A}`}
</button>`}},I([M({reflect:!0})],H.prototype,`color`,void 0),I([M({reflect:!0})],H.prototype,`variant`,void 0),I([M({reflect:!0})],H.prototype,`size`,void 0),I([M({reflect:!0})],H.prototype,`shape`,void 0),I([M({attribute:`border-radius`})],H.prototype,`borderRadius`,void 0),I([M({type:Boolean,reflect:!0})],H.prototype,`disabled`,void 0),I([M({type:Boolean,reflect:!0})],H.prototype,`loading`,void 0),I([M({type:Boolean,reflect:!0,attribute:`full-width`})],H.prototype,`fullWidth`,void 0),I([M({type:Boolean,reflect:!0})],H.prototype,`active`,void 0),I([M({reflect:!0})],H.prototype,`type`,void 0),I([D(`button`)],H.prototype,`button`,void 0)})))()}var Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei;function ti(){return(ti=e((()=>{C(),f(),He(),y(),w(),jt(),Ne(),Ct(),N(),O(),E(),vn(),Fn(),Vr=[`div`,`article`,`section`,`a`,`button`],Hr=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`],Ur=[`none`,`small`,`medium`,`large`],Wr=`minerva-card-header, minerva-card-content, minerva-card-footer, minerva-card-title, minerva-card-description`,Gr=e=>e&&Ur.includes(e)?`pad-${e}`:``,Kr=e=>{let t=e.parentElement??e.getRootNode().host;return!!(t?Lt(t,`minerva-card`):null)?.hasAttribute(`padding`)},qr=class e extends _{constructor(...e){super(...e),this.variant=`default`,this.interactive=!1,this.as=`div`,this.disabled=!1,this.type=`button`,this.internals=Qe(this),this.aria=new l(this),this.syncParts=()=>{for(let e of Array.from(this.querySelectorAll(Wr)))e.requestUpdate()},this.blockDisabledClicks=e=>{this.tag===`button`&&this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-card`}static{this.formAssociated=!0}static{this.styles=[h,k`
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
`,p(Fe)]}get tag(){return Vr.includes(this.as)?this.as:`div`}focus(e){this.tag===`a`||this.tag===`button`?this.root?.focus(e):super.focus(e)}handleClick(e){if(this.tag!==`button`)return;if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.internals?.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockDisabledClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockDisabledClicks,!0)}updated(t){t.has(`padding`)&&this.syncParts(),b&&(this.as&&!Vr.includes(this.as)&&v(e.tagName,`unsupported as="${this.as}" (expected ${Vr.join(`, `)}); rendering a div.`),this.tag===`a`&&!this.href&&v(e.tagName,`as="a" needs an href to be a link (focusable, activatable with Enter).`),this.interactive&&this.tag!==`a`&&this.tag!==`button`&&v(e.tagName,`interactive cards should be links or buttons (as="a" with href, or as="button") so keyboard users can activate them.`))}render(){let t=this.tag,n=F({card:!0,[this.variant]:!0,padded:!!this.padding,[Gr(this.padding)]:!!Gr(this.padding),interactive:this.interactive}),r=this.aria.label??A,i=wn`<slot @slotchange=${this.syncParts}></slot>`;if(t===`a`)return wn`<a
part="base"
class=${n}
href=${ue(e.tagName,this.href)??A}
target=${this.target??A}
rel=${fn(this.target,this.rel)??A}
download=${this.download??A}
aria-label=${r}
>${i}</a
>`;if(t===`button`)return wn`<button
part="base"
class=${n}
type="button"
?disabled=${this.disabled}
aria-label=${r}
aria-pressed=${this.aria.attr(`aria-pressed`)??A}
aria-expanded=${this.aria.attr(`aria-expanded`)??A}
@click=${this.handleClick}
>
${i}
</button>`;let a=Tn(t);return wn`<${a} part="base" class=${n}>${i}</${a}>`}},I([M({reflect:!0})],qr.prototype,`variant`,void 0),I([M({reflect:!0})],qr.prototype,`padding`,void 0),I([M({type:Boolean,reflect:!0})],qr.prototype,`interactive`,void 0),I([M({reflect:!0})],qr.prototype,`as`,void 0),I([M()],qr.prototype,`href`,void 0),I([M()],qr.prototype,`target`,void 0),I([M()],qr.prototype,`rel`,void 0),I([M()],qr.prototype,`download`,void 0),I([M({type:Boolean,reflect:!0})],qr.prototype,`disabled`,void 0),I([M()],qr.prototype,`type`,void 0),I([D(`[part=base]`)],qr.prototype,`root`,void 0),Jr=k`
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
`,Yr=class extends _{constructor(...e){super(...e),this.sectionClass=``}static{this.styles=[h,Jr]}layoutClasses(){let e=this.previousElementSibling?.localName,t=Gr(this.padding);return{[this.sectionClass]:!0,padded:Kr(this),afterHeader:e===`minerva-card-header`,afterContent:e===`minerva-card-content`,[t]:!!t}}render(){return wn`<div part="base" class=${F(this.layoutClasses())}>
<slot></slot>
</div>`}},I([M({reflect:!0})],Yr.prototype,`padding`,void 0),Xr=class extends Yr{constructor(...e){super(...e),this.sectionClass=`cardHeader`}static{this.tagName=`minerva-card-header`}},Zr=class extends Yr{constructor(...e){super(...e),this.sectionClass=`cardContent`}static{this.tagName=`minerva-card-content`}static{this.styles=[h,Jr,k`
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
`]}layoutClasses(){let e=super.layoutClasses();return this.animation&&(e[this.animation]=!0),e}},I([M({reflect:!0})],Zr.prototype,`animation`,void 0),Qr=class extends Yr{constructor(...e){super(...e),this.sectionClass=`cardFooter`}static{this.tagName=`minerva-card-footer`}},$r=class extends _{constructor(...e){super(...e),this.as=`h3`}static{this.tagName=`minerva-card-title`}static{this.styles=[h,k`
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
`]}render(){let e=Tn(Hr.includes(this.as)?this.as:`h3`);return wn`<${e}
part="base"
class=${F({cardTitle:!0,padded:Kr(this)})}
><slot></slot></${e}>`}},I([M({reflect:!0})],$r.prototype,`as`,void 0),ei=class extends _{static{this.tagName=`minerva-card-description`}static{this.styles=[h,k`
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
`]}render(){return wn`<p
part="base"
class=${F({cardDescription:!0,padded:Kr(this)})}
>
<slot></slot>
</p>`}}})))()}var ni,ri,ii,ai,oi,U;function si(){return(si=e((()=>{C(),f(),u(),g(),y(),w(),Jn(),jt(),de(),N(),O(),E(),vn(),dn(),ni=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),ri=e=>{let t=new Set;for(let n of e){if(t.has(n.value))return n.value;t.add(n.value);let e=n.children?ri(n.children):void 0;if(e!==void 0)return e}},ii={fromAttribute(e){let t=e?.trim()??``;if(!t)return[];if(t.startsWith(`[`))try{let e=JSON.parse(t);if(Array.isArray(e))return e.filter(e=>typeof e==`string`||typeof e==`number`)}catch{}return t.split(`,`).map(e=>e.trim())},toAttribute(e){return JSON.stringify(e)}},ai=`[role="option"]:not([aria-disabled="true"])`,oi=0,U=class e extends ut{constructor(...e){super(...e),this.options=[],this.value=[],this.defaultValue=[],this.open=!1,this.label=``,this.invalid=!1,this.readOnly=!1,this.hideClearButton=!1,this.expandTrigger=`click`,this.showSearch=!1,this.maxLevel=6,this.width=240,this.expandedValues=[],this.searchValue=``,this.idPrefix=`minerva-cascader-${oi++}`,this.locale=new d(this),this.aria=new l(this,()=>this.labels),this.floating=new nr(this,()=>({anchor:()=>this.anchor,floating:()=>this.dropdown,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,branches:()=>[this.anchor],onDismiss:()=>this.closeDropdown(),returnFocusOnEscape:()=>this.input,focusable:!0})),this.pendingFocus=null,this.dirty=!1,this.widthApplied=!1}static{this.tagName=`minerva-cascader`}static{this.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,Qn,k`
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
`,p(ae)]}get selectedOptions(){return ln(this.options,this.value)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}show(){this.open=!0}hide(){this.open=!1}get displayText(){let e=this.selectedOptions,t=e.map(e=>String(e.label));return this.displayRender?this.displayRender(t,e):t.join(` / `)}getFormValue(){return this.displayText}syncFormState(){super.syncFormState(),this.internals&&!this.isDisabled&&this.internals.setFormValue(this.getFormValue(),JSON.stringify(this.value))}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.selectMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=[...this.defaultValue],this.open=!1}restoreFormState(e){if(typeof e==`string`)try{let t=JSON.parse(e);Array.isArray(t)&&(this.value=t)}catch{}}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=!ni(this.value,this.defaultValue)||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=[...this.defaultValue]),e.has(`open`)&&(this.open?this.expandedValues=[...this.value]:(this.searchValue=``,this.pendingFocus=null)),b&&this.checkDev(e)}checkDev(t){if(t.has(`options`)){let t=ri(this.options);t!==void 0&&v(e.tagName,`duplicate option value "${t}" among siblings: values must be unique within a level.`)}(t.has(`options`)||t.has(`value`))&&this.options.length>0&&this.value.length>0&&ln(this.options,this.value).length<this.value.length&&v(e.tagName,`value ${JSON.stringify(this.value)} is not a path of the options tree: it is shown partially (or not at all).`)}updated(e){if(super.updated(e),e.has(`width`)){let e=this.width,t=e===void 0||e===``?``:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,n=t!==``&&t!==`240px`;(n||this.widthApplied)&&(this.style.width=n?t:``),this.widthApplied=n}this.floating.sync(this.open&&!this.isDisabled);let t=this.pendingFocus;if(t!==null&&this.open){let e=t===-1?this.columns().length-1:t;this.focusColumn(e)&&(this.pendingFocus=null)}}requestOpen(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}openDropdown(e=!1){this.isDisabled||this.readOnly||this.requestOpen(!0)&&(this.expandedValues=[...this.value],this.pendingFocus=e?-1:null)}closeDropdown(e=!1){this.requestOpen(!1)&&(this.searchValue=``,e&&this.input?.focus())}select(e){this.value=e.map(e=>e.value),this.emitChange(e),this.closeDropdown(!0)}emitChange(e){this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:[...this.value],selectedOptions:e})}handleActivate(e,t){let n=e[e.length-1];if(n.disabled)return;let r=t>=this.maxLevel-1,i=!!n.children?.length,a=!!this.loadData&&!n.isLeaf&&!n.children;if(!r&&(i||a)){this.expandedValues=e.map(e=>e.value),a&&!n.loading&&this.loadData?.(e);return}this.select(e)}clear(e){e.stopPropagation(),this.value=[],this.searchValue=``,this.emitChange([]),this.emit(`minerva-clear`),this.input?.focus()}get expandedPath(){return ln(this.options,this.expandedValues)}columns(){let e=this.expandedPath,t=[this.options];for(let n=0;n<e.length&&n<this.maxLevel-1;n+=1){let r=e[n].children;if(!r?.length)break;t.push(r)}return t}columnId(e){return`${this.idPrefix}-column-${e}`}focusColumn(e){let t=this.dropdown?.querySelector(`[data-level="${e}"]`);if(!t)return!1;let n=t.querySelector(`[data-expanded="true"]`)??t.querySelector(ai);return n?.focus(),!!n}canExpand(e,t){return t<this.maxLevel-1&&(!!e.children?.length||!e.isLeaf&&e.children===void 0)}pathTo(e,t){return[...this.expandedPath.slice(0,t),e]}get searching(){return this.showSearch&&this.searchValue!==``}searchResults(){if(!this.searching)return[];let{searchValue:e,filter:t}=this,n=e.toLowerCase();return hn(this.options).filter(({path:r})=>t?t(e,r):r.some(e=>String(e.label).toLowerCase().includes(n)))}focusFirstSearchResult(){this.dropdown?.querySelector(`[role="option"]`)?.focus()}handleSelectorClick(){this.isDisabled||this.readOnly||(this.open?this.showSearch||this.closeDropdown():this.openDropdown())}handleInput(e){let t=e.target.value;this.showSearch&&!this.readOnly&&(this.searchValue=t,this.emit(`minerva-input`,{value:t}),this.open||this.openDropdown())}handleInputKeyDown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this.open?this.searching?this.focusFirstSearchResult():(this.pendingFocus=-1,this.requestUpdate()):this.openDropdown(!0);break;case`Enter`:e.preventDefault(),this.open||this.openDropdown(!0);break;case` `:if(this.showSearch)break;e.preventDefault(),this.open||this.openDropdown(!0)}}handleFocusOut(e){let t=e.relatedTarget;this.open&&t&&(this.anchor&&Rn(this.anchor,t)||this.dropdown&&Rn(this.dropdown,t)||this.closeDropdown())}handleDropdownMouseDown(e){e.target.closest?.(`[role="option"]`)||e.preventDefault()}handleDropdownKeyDown(e){e.key===`Tab`&&this.closeDropdown()}handleOptionKeyDown(e,t,n){let r=e.currentTarget,i=Array.from(r.parentElement?.querySelectorAll(ai)??[]),a=i.indexOf(r),o=e=>i[(e+i.length)%i.length]?.focus();switch(xn(e.key,this)){case`ArrowDown`:e.preventDefault(),o(a+1);break;case`ArrowUp`:e.preventDefault(),o(a-1);break;case`Home`:e.preventDefault(),o(0);break;case`End`:e.preventDefault(),o(i.length-1);break;case`ArrowRight`:if(e.preventDefault(),t.disabled||!this.canExpand(t,n))break;this.pendingFocus=n+1,this.handleActivate(this.pathTo(t,n),n),this.requestUpdate();break;case`Enter`:case` `:if(e.preventDefault(),t.disabled)break;this.canExpand(t,n)&&(this.pendingFocus=n+1),this.handleActivate(this.pathTo(t,n),n),this.requestUpdate();break;case`ArrowLeft`:e.preventDefault(),n===0?this.closeDropdown(!0):this.focusColumn(n-1)}}handleSearchKeyDown(e){let t=e.currentTarget,n=Array.from(t.querySelectorAll(`[role="option"]`)),r=n.indexOf(e.target);(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),n[(r+(e.key===`ArrowDown`?1:-1)+n.length)%n.length]?.focus())}renderSearchResults(){let e=this.searchResults();return j`<div
class="searchResults"
role="listbox"
aria-label=${this.label||this.aria.label||A}
tabindex="-1"
@keydown=${this.handleSearchKeyDown}
>
${e.length>0?e.map(({path:e})=>j`<div
class="searchOption"
part="option"
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
${t.map((a,o)=>j`<ul
id=${this.columnId(o)}
data-level=${o}
class="column"
part="column"
role="listbox"
aria-label=${e(`cascader.level`,{label:i,level:o+1})}
>
${a.map(e=>{let i=n[o]?.value===e.value,a=r[o]?.value===e.value,s=this.canExpand(e,o)&&!(!e.children?.length&&e.isLeaf);return j`<li
data-expanded=${i?`true`:A}
class=${F({option:!0,active:i||a,disabled:!!e.disabled,loading:!!e.loading})}
part="option"
role="option"
aria-selected=${a?`true`:`false`}
aria-disabled=${e.disabled?`true`:A}
aria-busy=${e.loading?`true`:A}
aria-controls=${i&&o+1<t.length?this.columnId(o+1):A}
tabindex=${e.disabled?-1:0}
@keydown=${t=>this.handleOptionKeyDown(t,e,o)}
@click=${()=>{e.disabled||this.handleActivate(this.pathTo(e,o),o)}}
@mouseenter=${()=>{this.expandTrigger===`hover`&&!e.disabled&&e.children?.length&&o<this.maxLevel-1&&(this.expandedValues=this.pathTo(e,o).map(e=>e.value))}}
>
${this.optionRender?this.optionRender(e,o):j`<span class="label">${e.label}</span>${e.loading?j`<span
class="loadingIndicator"
aria-hidden="true"
>...</span
>`:s?j`<span class="expandIcon" aria-hidden="true"
>${ke}</span
>`:A}`}
</li>`})}
</ul>`)}
</div>`}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.open&&!t,r=!this.hideClearButton&&this.value.length>0&&!t&&!this.readOnly,a=this.searching?this.searchValue:this.displayText,o=this.invalid||this.aria.attr(`aria-invalid`)===`true`;return j`<div
class="cascader"
part="base"
@focusout=${this.handleFocusOut}
>
<div
class=${F({selector:!0,disabled:t,focused:n})}
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
aria-autocomplete=${this.showSearch?`list`:A}
aria-label=${this.aria.label??(this.label||A)}
aria-description=${this.aria.description??A}
aria-invalid=${o?`true`:A}
aria-required=${this.required?`true`:A}
aria-readonly=${this.showSearch&&this.readOnly?`true`:A}
name=${this.name||A}
.value=${Wn(a)}
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
part="arrow"
aria-hidden="true"
><span class="icon">${i}</span></span
>
</div>
</div>
${n?j`<div
class="dropdown"
part="dropdown"
popover="manual"
@mousedown=${this.handleDropdownMouseDown}
@focusout=${this.handleFocusOut}
@keydown=${this.handleDropdownKeyDown}
>
${this.searching?this.renderSearchResults():this.renderPanel()}
</div>`:A}`}},I([M({attribute:!1})],U.prototype,`options`,void 0),I([M({attribute:!1})],U.prototype,`value`,void 0),I([M({attribute:`value`,converter:ii})],U.prototype,`defaultValue`,void 0),I([M({type:Boolean,reflect:!0})],U.prototype,`open`,void 0),I([M()],U.prototype,`label`,void 0),I([M()],U.prototype,`placeholder`,void 0),I([M({type:Boolean,reflect:!0})],U.prototype,`invalid`,void 0),I([M({type:Boolean,reflect:!0,attribute:`readonly`})],U.prototype,`readOnly`,void 0),I([M({type:Boolean,attribute:`hide-clear-button`})],U.prototype,`hideClearButton`,void 0),I([M({attribute:`expand-trigger`,reflect:!0})],U.prototype,`expandTrigger`,void 0),I([M({type:Boolean,attribute:`show-search`,reflect:!0})],U.prototype,`showSearch`,void 0),I([M({type:Number,attribute:`max-level`})],U.prototype,`maxLevel`,void 0),I([M()],U.prototype,`width`,void 0),I([M({attribute:!1})],U.prototype,`displayRender`,void 0),I([M({attribute:!1})],U.prototype,`filter`,void 0),I([M({attribute:!1})],U.prototype,`loadData`,void 0),I([M({attribute:!1})],U.prototype,`optionRender`,void 0),I([T()],U.prototype,`expandedValues`,void 0),I([T()],U.prototype,`searchValue`,void 0),I([D(`input`)],U.prototype,`input`,void 0),I([D(`.cascader`)],U.prototype,`anchor`,void 0),I([D(`.dropdown`)],U.prototype,`dropdown`,void 0)})))()}var ci,W;function li(){return(li=e((()=>{C(),f(),u(),g(),y(),m(),w(),jt(),je(),N(),O(),E(),dn(),ci=e=>e.charAt(0).toUpperCase()+e.slice(1),W=class e extends ut{constructor(...e){super(...e),this.checked=!1,this.defaultChecked=!1,this.indeterminate=!1,this.value=`on`,this.label=``,this.shape=`square`,this.size=`medium`,this.color=`primary`,this.labelPlacement=`end`,this.error=!1,this.helperText=``,this.readOnly=!1,this.locale=new d(this),this.aria=new l(this,()=>this.labels),this.slots=new x(this),this.dirty=!1}static{this.tagName=`minerva-checkbox`}static{this.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,k`
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
`,p(Oe)]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}click(){this.input?.click()}getFormValue(){return this.checked?this.value:null}getValidity(){return this.required&&!this.checked?{flags:{valueMissing:!0},message:this.locale.t(`validation.checkMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.checked=this.defaultChecked}restoreFormState(e){this.checked=e!=null&&e!==``}willUpdate(e){e.has(`defaultChecked`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`checked`))&&(this.checked=this.defaultChecked)}updated(t){super.updated(t),this.input&&(this.input.indeterminate=this.indeterminate),b&&!this.aria.label&&!this.label&&!this.textContent?.trim()&&v(e.tagName,`no label: set the label attribute, slot a label, or use aria-label / <label for>.`)}handleClick(e){this.readOnly&&e.preventDefault()}handleChange(){this.readOnly||(this.dirty=!0,this.input.indeterminate=this.indeterminate,this.checked=this.input.checked,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{checked:this.checked,value:this.value}))}render(){let e=this.isDisabled,t=!!this.label||this.slots.test(`[default]`),n=[this.helperText,this.aria.description].filter(Boolean).join(` `),r=this.error||this.aria.attr(`aria-invalid`)===`true`;return j`<div
part="base"
class=${F({checkboxWrapper:!0,error:r})}
>
<label
part="control"
class=${F({checkbox:!0,[this.size]:!0,[this.shape]:!0,[`label${ci(this.labelPlacement)}`]:!0,[`color${ci(this.color)}`]:this.color!==`primary`,disabled:e,error:r})}
>
<input
part="input"
type="checkbox"
class="input"
.checked=${Wn(this.checked)}
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
<span class="checkmark" part="checkmark"
>${this.checked&&!this.indeterminate?j`<slot name="icon"></slot>`:A}</span
>
${t?j`<span class="label" part="label"
>${this.label||j`<slot></slot>`}</span
>`:A}
</label>
${this.helperText?j`<div class="helperTextWrapper">
${r?j`<span class="errorIcon" aria-hidden="true"
>${he}</span
>`:A}
<span
part="helper-text"
class=${F({helperText:!0,errorText:r})}
>${this.helperText}</span
>
</div>`:A}
</div>`}},I([M({attribute:!1})],W.prototype,`checked`,void 0),I([M({type:Boolean,attribute:`checked`,reflect:!0})],W.prototype,`defaultChecked`,void 0),I([M({type:Boolean,reflect:!0})],W.prototype,`indeterminate`,void 0),I([M()],W.prototype,`value`,void 0),I([M()],W.prototype,`label`,void 0),I([M({reflect:!0})],W.prototype,`shape`,void 0),I([M({reflect:!0})],W.prototype,`size`,void 0),I([M({reflect:!0})],W.prototype,`color`,void 0),I([M({attribute:`label-placement`,reflect:!0})],W.prototype,`labelPlacement`,void 0),I([M({type:Boolean,reflect:!0})],W.prototype,`error`,void 0),I([M({attribute:`helper-text`})],W.prototype,`helperText`,void 0),I([M({type:Boolean,reflect:!0,attribute:`readonly`})],W.prototype,`readOnly`,void 0),I([D(`input`)],W.prototype,`input`,void 0)})))()}var ui,di,fi;function pi(){return(pi=e((()=>{C(),f(),u(),g(),y(),m(),w(),pt(),oe(),N(),O(),E(),gn(),ui=2e3,di=e=>e===void 0||e===``?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,fi=class e extends _{constructor(...e){super(...e),this.noWrap=!1,this.maxHeight=`24rem`,this.copyable=!1,this.status=`idle`,this.locale=new d(this),this.aria=new l(this),this.slots=new x(this)}static{this.tagName=`minerva-code-block`}static{this.styles=[h,k`
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
`,p(bt),p(Ae)]}get text(){return this.code??this.textContent??``}async copy(){let e=this.text,t=typeof navigator>`u`?void 0:navigator.clipboard,n=!1;if(typeof t?.writeText==`function`)try{await t.writeText(e),n=!0}catch{n=!1}return this.isConnected?(this.showStatus(n?`copied`:`failed`),this.emit(`minerva-copy`,{text:e,success:n}),n):n}showStatus(e){clearTimeout(this.timer),this.status=e,this.timer=setTimeout(()=>this.status=`idle`,ui)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timer),this.status=`idle`}updated(){b&&this.copyable&&!this.text.trim()&&v(e.tagName,`copyable is set but there is no text to copy (set code or the text content).`)}render(){this.slots;let e=this.locale.t,t=this.aria.label??e(`codeBlock.label`),n=di(this.maxHeight),r=this.copyable||!!this.language,i=j`<pre
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
      >${this.text}</code></pre>`;if(!r)return i;let a=this.status,o=a===`copied`?e(`codeBlock.copied`):a===`failed`?e(`codeBlock.copyFailed`):``,s=o||e(`codeBlock.copy`),c=a===`failed`?`danger`:a===`copied`?`success`:`neutral`;return j`<div part="base" class="root" style=${P({maxHeight:n})}>
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
${a===`copied`?De:a===`failed`?Ie:se}
</button>`:A}
</div>
${this.copyable?j`<span class="visuallyHidden" aria-live="polite"
>${o}</span
>`:A}
</div>`}},I([M()],fi.prototype,`code`,void 0),I([M({reflect:!0})],fi.prototype,`language`,void 0),I([M({type:Boolean,attribute:`no-wrap`,reflect:!0})],fi.prototype,`noWrap`,void 0),I([M({attribute:`max-height`})],fi.prototype,`maxHeight`,void 0),I([M({type:Boolean,reflect:!0})],fi.prototype,`copyable`,void 0),I([T()],fi.prototype,`status`,void 0)})))()}var mi,G;function hi(){return(hi=e((()=>{f(),He(),g(),y(),w(),$n(),rr(),Jn(),qn(),a(),xe(),re(),N(),O(),vn(),dn(),mi={fromAttribute:e=>e===null?void 0:e.split(`,`).map(e=>e.trim()).filter(Boolean),toAttribute:e=>Array.isArray(e)?e.join(`, `):e},G=class e extends _{constructor(...e){super(...e),this.open=!1,this.items=[],this.maxResults=12,this.query=``,this.activeIndex=0,this.locale=new d(this),this.presence=new ce(this,()=>this.panel),this.modal=new er(this),this.focusScope=new Yn(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new Zn(this,()=>({disableOutsidePointerEvents:!0,onFocusOutside:()=>!1,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleShortcut=e=>{let t=Qt(this.shortcut);if(t.length===0)return;let n=e.composedPath()[0]??e.target;Bn(n)&&!e.ctrlKey&&!e.metaKey&&!e.altKey||e.isComposing||t.some(t=>Jt(e,t))&&(e.preventDefault(),e.stopPropagation(),this.requestOpenChange(!0,`shortcut`))}}static{this.tagName=`minerva-command-dialog`}static{this.styles=[h,Qn,k`
:host{
display: contents;
}
`,p(Ht),p(pe)]}show(){this.open=!0}hide(){this.open=!1}get results(){let e=Math.max(0,this.maxResults),t=(Array.isArray(this.items)?this.items:[]).filter(e=>!e.disabled),n=this.query.trim();if(!n)return t.slice(0,e);if(typeof this.filter==`function`)return this.filter(t,n).slice(0,e);let r=Gt(n);return t.filter(e=>Gt(Gn(e)).includes(r)).slice(0,e)}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}select(e){this.emit(`minerva-select`,{value:e.id,item:e}),this.requestOpenChange(!1,`select`)}handleKeyDown(e){let t=this.results,n=Math.max(t.length-1,0),r={ArrowDown:e=>Math.min(e+1,n),ArrowUp:e=>Math.max(e-1,0),Home:()=>0,End:()=>n}[e.key];if(r&&(e.key.startsWith(`Arrow`)||!this.query)){e.preventDefault(),this.activeIndex=r(Math.min(this.activeIndex,n));return}let i=t[this.activeIndex];e.key===`Enter`&&i&&!e.isComposing&&(e.preventDefault(),this.select(i))}handleInput(e){this.query=e.target.value,this.activeIndex=0}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this.handleShortcut,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleShortcut,!0),S(this.panel),S(this.overlay)}willUpdate(e){e.has(`open`)&&(this.presence.sync(this.open),this.open&&(this.query=``,this.activeIndex=0)),e.has(`items`)&&b&&this.checkItems();let t=this.results.length;this.activeIndex>0&&this.activeIndex>=t&&(this.activeIndex=Math.max(t-1,0))}checkItems(){if(!Array.isArray(this.items)){v(e.tagName,"`items` must be an array of { id, title, ... } objects.");return}let t=new Set;for(let n of this.items)t.has(n.id)&&v(e.tagName,`duplicate item id "${n.id}": ids identify the chosen command in minerva-select and must be unique.`),t.add(n.id)}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)){let e=this.panel;this.open&&e?(zt(this.overlay),zt(e),this.modal.activate(this),this.layer.activate(e),this.focusScope.activate(e),this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.open&&(e.has(`activeIndex`)||e.has(`query`))&&this.renderRoot.querySelector(`#option-${this.activeIndex}`)?.scrollIntoView?.({block:`nearest`}),this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}afterClose(){S(this.panel),S(this.overlay),this.emit(`minerva-after-close`)}render(){if(!(this.open||this.presence.present))return A;let e=this.locale.t,t=this.open?`open`:`closed`,n=this.results,r=n[this.activeIndex]?`option-${this.activeIndex}`:void 0,i=this.placeholder??e(`command.placeholder`);return j`<div
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
.value=${Wn(this.query)}
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
${n.length===0?j`<div class="empty" part="empty">
${this.emptyText??e(`command.empty`)}
</div>`:n.map((e,t)=>{let n=t===this.activeIndex;return j`<button
id=${`option-${t}`}
part="item"
type="button"
role="option"
tabindex="-1"
aria-selected=${n?`true`:`false`}
data-active=${n?`true`:A}
class="item"
@mouseenter=${()=>this.activeIndex=t}
@click=${()=>this.select(e)}
>
<span class="copy"
><strong>${e.title}</strong>${e.description?j`<small>${e.description}</small>`:A}</span
>${e.group?j`<span class="group">${e.group}</span>`:A}
</button>`})}
</div>
</div>`}},I([M({type:Boolean,reflect:!0})],G.prototype,`open`,void 0),I([M({attribute:!1})],G.prototype,`items`,void 0),I([M()],G.prototype,`label`,void 0),I([M()],G.prototype,`description`,void 0),I([M()],G.prototype,`placeholder`,void 0),I([M({attribute:`empty-text`})],G.prototype,`emptyText`,void 0),I([M({attribute:`shortcut-label`})],G.prototype,`shortcutLabel`,void 0),I([M({converter:mi})],G.prototype,`shortcut`,void 0),I([M({type:Number,attribute:`max-results`})],G.prototype,`maxResults`,void 0),I([M({attribute:!1})],G.prototype,`filter`,void 0),I([M({attribute:`results-label`})],G.prototype,`resultsLabel`,void 0),I([M({attribute:`enter-label`})],G.prototype,`enterLabel`,void 0),I([T()],G.prototype,`query`,void 0),I([T()],G.prototype,`activeIndex`,void 0),I([D(`.content`)],G.prototype,`panel`,void 0),I([D(`.overlay`)],G.prototype,`overlay`,void 0)})))()}var gi,_i,vi;function yi(){return(yi=e((()=>{y(),N(),O(),vn(),gi=`(prefers-color-scheme: dark)`,_i=`data-minerva-theme-scope`,vi=class extends _{constructor(...e){super(...e),this.root=!1,this.media=null,this.mode=null,this.onSchemeChange=()=>this.apply()}static{this.tagName=`minerva-config`}static{this.styles=k`
:host{
display: contents;
}
`}get resolvedMode(){return this.mode}connectedCallback(){super.connectedCallback(),typeof window<`u`&&window.matchMedia&&(this.media=window.matchMedia(gi),this.media.addEventListener(`change`,this.onSchemeChange))}disconnectedCallback(){super.disconnectedCallback(),this.media?.removeEventListener(`change`,this.onSchemeChange),this.media=null,this.root&&this.clear(document.documentElement)}updated(e){e.has(`root`)&&e.get(`root`)!==void 0&&this.clear(e.get(`root`)?document.documentElement:this),this.apply()}target(){return this.root?document.documentElement:this}clear(e){for(let t of[`data-theme`,`data-palette`,_i,`lang`])(e!==this||t!==`lang`)&&e.removeAttribute(t);Hn(e,null),On(e.style,{}),e.style.removeProperty(`color-scheme`)}apply(){let e=this.target(),t=(t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},n=this.theme,r=this.media?.matches?`dark`:`light`,i=n===`system`?r:n===`github-dark`?`dark`:n===`light`||n===`dark`?n:null,a=on(this.design)?this.design:void 0,o=Yt(this.palette)?this.palette:Nn(a),s=!!o&&n!==`github-dark`;t(`data-theme`,i),t(`data-palette`,s?o:null),this.root||t(_i,i!==null||s||a!==void 0||[this.density,this.radius,this.shadow,this.fontScale].some(Boolean)?``:null),i?e.style.colorScheme=i:e.style.removeProperty(`color-scheme`),On(e.style,n===`github-dark`&&Cn(n)?cn[n]:{}),Hn(e,{preset:a,density:Zt(this.density)?this.density:void 0,radius:$t(this.radius)?this.radius:void 0,shadow:an(this.shadow)?this.shadow:void 0,fontScale:nn(this.fontScale)?this.fontScale:void 0},{all:!this.root&&a!==void 0}),this.root&&this.locale&&(document.documentElement.lang=this.locale),i!==this.mode&&(this.mode=i,i&&this.emit(`minerva-theme-change`,{mode:i}))}render(){return j`<slot></slot>`}},I([M({reflect:!0})],vi.prototype,`theme`,void 0),I([M({reflect:!0})],vi.prototype,`palette`,void 0),I([M({reflect:!0})],vi.prototype,`design`,void 0),I([M({reflect:!0})],vi.prototype,`density`,void 0),I([M({reflect:!0})],vi.prototype,`radius`,void 0),I([M({reflect:!0})],vi.prototype,`shadow`,void 0),I([M({reflect:!0,attribute:`font-scale`})],vi.prototype,`fontScale`,void 0),I([M({reflect:!0})],vi.prototype,`locale`,void 0),I([M({type:Boolean,reflect:!0})],vi.prototype,`root`,void 0)})))()}var K;function bi(){return(bi=e((()=>{C(),f(),u(),He(),g(),y(),m(),w(),$n(),rr(),Jn(),qn(),Br(),a(),re(),N(),O(),K=class e extends _{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.color=`primary`,this.loading=!1,this.confirmDisabled=!1,this.busy=!1,this.locale=new d(this),this.aria=new l(this),this.slots=new x(this),this.presence=new ce(this,()=>this.panel),this.modal=new er(this),this.focusScope=new Yn(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new Zn(this,()=>({disableOutsidePointerEvents:!0,onFocusOutside:()=>!1,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestClose(this.reason)})),this.reason=`outside`,this.wasPresent=!1}static{this.tagName=`minerva-confirm-dialog`}static{this.dependencies=[H]}static{this.styles=[h,Qn,k`
:host{
display: contents;
}
.content .body{
flex: 1 1 auto;
}
`,p(Ht)]}show(){this.open=!0}hide(){this.open=!1}requestClose(e){return!this.open||!this.emit(`minerva-open-change`,{open:!1,reason:e},{cancelable:!0})?!1:(this.open=!1,e!==`confirm`&&this.emit(`minerva-cancel`,{reason:e}),!0)}async handleConfirm(){if(!this.open||this.loading||this.busy||this.confirmDisabled||!this.emit(`minerva-confirm`,void 0,{cancelable:!0}))return;let e=this.onConfirm?.();if(e&&typeof e.then==`function`){this.busy=!0;try{await e}catch{return}finally{this.busy=!1}}this.requestClose(`confirm`)}willUpdate(e){e.has(`open`)&&this.presence.sync(this.open)}updated(t){let n=this.open||this.presence.present;if(t.has(`open`)){let t=this.panel;this.open&&t?(b&&!this.label&&!this.slots.test(`header`)&&!this.aria.label&&v(e.tagName,"set `label` (or the `header` slot / aria-label) to give the alertdialog an accessible name."),zt(this.overlay),zt(t),this.modal.activate(this),this.layer.activate(t),this.focusInitial(t)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!n&&this.afterClose(),this.wasPresent=n}async focusInitial(e){let t=Array.from(e.querySelectorAll(`minerva-button`));await Promise.all(t.map(e=>e.updateComplete)),this.open&&this.panel===e&&(this.focusScope.activate(e),this.emit(`minerva-after-open`))}disconnectedCallback(){super.disconnectedCallback(),S(this.panel),S(this.overlay)}afterClose(){S(this.panel),S(this.overlay),this.emit(`minerva-after-close`)}render(){if(!(this.open||this.presence.present))return A;let e=this.open?`open`:`closed`,t=this.locale.t,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description,i=this.loading||this.busy;return j`<div
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
</div>`}},I([M({type:Boolean,reflect:!0})],K.prototype,`open`,void 0),I([M()],K.prototype,`label`,void 0),I([M()],K.prototype,`description`,void 0),I([M({attribute:`confirm-label`})],K.prototype,`confirmLabel`,void 0),I([M({attribute:`cancel-label`})],K.prototype,`cancelLabel`,void 0),I([M({attribute:`close-label`})],K.prototype,`closeLabel`,void 0),I([M({reflect:!0})],K.prototype,`color`,void 0),I([M({type:Boolean,reflect:!0})],K.prototype,`loading`,void 0),I([M({type:Boolean,reflect:!0,attribute:`confirm-disabled`})],K.prototype,`confirmDisabled`,void 0),I([M({attribute:!1})],K.prototype,`onConfirm`,void 0),I([T()],K.prototype,`busy`,void 0),I([D(`.content`)],K.prototype,`panel`,void 0),I([D(`.overlay`)],K.prototype,`overlay`,void 0)})))()}function xi(e){let t=Lt(e,Ei);if(!t)return null;let n=e.ownerDocument;return t===n.documentElement||t===n.body?null:t}function Si(e,t){for(let n=e;n;n=Ce(n))if(n===t)return!0;return!1}function Ci(e){return Oi.push(e),()=>{let t=Oi.lastIndexOf(e);t>=0&&Oi.splice(t,1)}}function wi(e){let t=e?.isConnected===!0?Lt(e,Ai):null;if(t&&`confirmQueue`in t)return t.confirmQueue;let n=Oi[Oi.length-1];return n?n.confirmQueue:(ki??=new Di(()=>document.body),ki)}function Ti(e){return t=>Mi({...t,host:t.host??e})}var Ei,Di,Oi,ki,Ai,ji,Mi;function Ni(){return(Ni=e((()=>{f(),He(),g(),Re(),bi(),Ei=`minerva-config:not([root]), [data-minerva-theme-scope], [data-theme], [data-palette]`,Di=class{constructor(e){this.defaultContainer=e,this.requests=[],this.current=null,this.settles=new Set}enqueue(e){return Nt(K),new Promise(t=>{this.requests.push({options:e,resolve:t}),this.current||this.showNext()})}cancelAll(){let e=this.requests.splice(0);for(let t of e)t.resolve(!1);for(let e of[...this.settles])e(!1);this.current?.remove()}container(e){let t=typeof document>`u`?null:document,n=e.container;if(n)return n.isConnected?n:(b&&v(K.tagName,"confirm(): `container` is not connected to the document; the dialog is appended to document.body instead."),t.body);let r=e.host?.isConnected===!0?xi(e.host):null,i=this.defaultContainer();return r&&!Si(i,r)?r:i}showNext(){let e=this.requests.shift();if(!e){this.current=null;return}let{options:t,resolve:n}=e,r=this.container(t),i=document.createElement(K.tagName);i.label=t.title,t.description&&(i.description=t.description),t.confirmLabel&&(i.confirmLabel=t.confirmLabel),t.cancelLabel&&(i.cancelLabel=t.cancelLabel),t.closeLabel&&(i.closeLabel=t.closeLabel),t.color&&(i.color=t.color);let a=t.host;if(a?.isConnected&&!t.container){let e=rt(a);e!==rt(r)&&i.setAttribute(`lang`,e)}let o=!1,s=!1,c=e=>{o||(o=!0,this.settles.delete(c),n(e))};this.settles.add(c);let ee=new MutationObserver(()=>{i.isConnected||te()}),te=()=>{s||(s=!0,ee.disconnect(),c(!1),i.remove(),this.showNext())};i.addEventListener(`minerva-open-change`,e=>{let{open:t,reason:n}=e.detail;queueMicrotask(()=>{!t&&!e.defaultPrevented&&c(n===`confirm`)})}),i.addEventListener(`minerva-after-close`,te,{once:!0}),this.current=i,r.append(i),ee.observe(document,{childList:!0,subtree:!0}),i.open=!0}},Oi=[],ki=null,Ai=`minerva-confirm-provider`,ji=()=>(b&&v(K.tagName,`confirm() called without a document (server render): resolving false.`),Promise.resolve(!1)),Mi=e=>typeof document>`u`?ji():wi(e.host).enqueue(e)})))()}var Pi;function Fi(){return(Fi=e((()=>{y(),bi(),Ni(),N(),Pi=class extends _{constructor(...e){super(...e),this.confirmQueue=new Di(()=>this),this.unregister=null,this.confirm=e=>this.confirmQueue.enqueue(e)}static{this.tagName=`minerva-confirm-provider`}static{this.dependencies=[K]}static{this.styles=k`
:host{
display: contents;
}
`}connectedCallback(){super.connectedCallback(),this.unregister=Ci(this)}disconnectedCallback(){super.disconnectedCallback(),this.unregister?.(),this.unregister=null,this.confirmQueue.cancelAll()}render(){return j`<slot></slot>`}}})))()}var Ii,Li,Ri,q,zi;function Bi(){return(Bi=e((()=>{C(),f(),u(),g(),y(),w(),ye(),me(),fr(),N(),O(),E(),gn(),vn(),dn(),Vn(),Ii=e=>e===void 0?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Li={ascend:`ascending`,descend:`descending`},Ri=48,q=class e extends _{constructor(...e){super(...e),this.columns=[],this.rows=[],this.loading=!1,this.loadingRows=5,this.sortState=null,this.manualSort=!1,this.selectable=!1,this.selectedRowKeys=[],this.size=`medium`,this.variant=`simple`,this.hoverable=!1,this.retryable=!1,this.overflowing=!1,this.aria=new l(this),this.locale=new d(this),this.resize=null,this.handlePageChange=e=>{let{page:t,pageSize:n}=e.detail;queueMicrotask(()=>{e.defaultPrevented||(this.pagination={...this.pagination,current:t,pageSize:n})})}}static{this.tagName=`minerva-data-table`}static{this.dependencies=[ar]}static{this.styles=[h,k`
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
`,p(Le),p(st)]}disconnectedCallback(){super.disconnectedCallback(),this.resize?.disconnect(),this.resize=null}keyOf(e,t){let n=this.rowKey;return typeof n==`function`?n(e,t):typeof n==`string`&&n?e[n]:t}entries(){return(this.rows??[]).map((e,t)=>({row:e,index:t,key:this.keyOf(e,t)}))}rowDisabled(e){return!!this.isRowDisabled?.(e)}willUpdate(t){if(b&&(t.has(`rows`)||t.has(`rowKey`))){let t=this.entries().map(e=>e.key);new Set(t).size!==t.length&&v(e.tagName,`rows have duplicate keys: set row-key to a unique field (or a function).`)}}updated(){this.observeOverflow();let e=this.shadowRoot?.querySelector(`minerva-pagination`);e&&this.pagination&&Object.assign(e,this.pagination)}observeOverflow(){let e=this.wrapper;if(!e){this.resize?.disconnect(),this.resize=null;return}let t=()=>{let t=e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight;t!==this.overflowing&&(this.overflowing=t)};t(),!this.resize&&typeof ResizeObserver<`u`&&(this.resize=new ResizeObserver(t),this.resize.observe(e),e.firstElementChild&&this.resize.observe(e.firstElementChild))}changeSort(e){let t=Mn(this.sortState,e);this.emit(`minerva-sort-change`,t,{cancelable:!0})&&(this.sortState=t)}commitSelection(e){let t=new Set(e),n={selectedRowKeys:e,selectedRows:this.entries().filter(e=>t.has(e.key)).map(e=>e.row)};if(!this.emit(`minerva-selection-change`,n,{cancelable:!0})){this.requestUpdate();return}this.selectedRowKeys=e}toggleRow(e,t){let n=this.selectedRowKeys;this.commitSelection(t?[...n.filter(t=>t!==e),e]:n.filter(t=>t!==e))}renderTable(){let e=this.columns??[],t=this.locale.t,n=Wt(e),r=this.selectable,a=r&&e[0]?.fixed===`left`,o=a?Ri:0,s=this.entries(),c=this.sortState,ee=c?.order??null,te=ee===null?void 0:e.find(e=>e.key===c?.key),ne=te?bn(te):null,re=!this.manualSort&&ne?[...s].sort((e,t)=>ee===`descend`?ne(t.row,e.row):ne(e.row,t.row)):s,ie=new Set(this.selectedRowKeys),ae=s.filter(e=>!this.rowDisabled(e.row)),oe=ae.length>0&&ae.every(e=>ie.has(e.key)),se=!oe&&s.some(e=>ie.has(e.key)),ce=()=>{let e=new Set(ae.map(e=>e.key)),t=this.selectedRowKeys;this.commitSelection(oe?t.filter(t=>!e.has(t)):[...t,...ae.map(e=>e.key).filter(e=>!ie.has(e))])},ue=e=>{let t={textAlign:e.align},r=Ii(e.width);return r!==void 0&&(t.width=r,t.minWidth=r),e.fixed===`left`?t.left=`${(n.leftOffsets[e.key]??0)+o}px`:e.fixed===`right`&&(t.right=`${n.rightOffsets[e.key]??0}px`),t},de=e=>e.fixed===`left`&&e.key===n.lastLeftFixedKey?`left`:e.fixed===`right`&&e.key===n.firstRightFixedKey?`right`:A,fe=P({width:`${Ri}px`,minWidth:`${Ri}px`,...a?{left:`0px`}:{}}),pe=a?`left`:A,me=e.length+ +!!r,he=e=>{if(!e.sortable)return j`<th
scope="col"
style=${P(ue(e))}
data-ellipsis=${e.ellipsis?`true`:A}
data-fixed=${e.fixed??A}
data-fixed-edge=${de(e)}
>
${e.header}
</th>`;let t=c?.key===e.key?c.order:null,n=t===`ascend`?Me:t===`descend`?i:le;return j`<th
scope="col"
aria-sort=${t?Li[t]:`none`}
style=${P(ue(e))}
data-ellipsis=${e.ellipsis?`true`:A}
data-fixed=${e.fixed??A}
data-fixed-edge=${de(e)}
>
<button
type="button"
part="sort-button"
class="sortButton"
data-sort-order=${t??A}
@click=${()=>this.changeSort(e.key)}
>
<span class="sortLabel">${e.header}</span
><span class="sortIcon" aria-hidden="true">${n}</span>
</button>
</th>`},ge;ge=this.loading?Array.from({length:this.loadingRows},()=>j`<tr aria-hidden="true">
${r?j`<td
class="selectionCell"
style=${fe}
data-fixed=${pe}
></td>`:A}
${e.map(e=>j`<td
style=${P(ue(e))}
data-fixed=${e.fixed??A}
data-fixed-edge=${de(e)}
>
<span class="skeleton"></span>
</td>`)}
</tr>`):s.length===0?j`<tr>
<td colspan=${me} class="empty">
<slot name="empty">${this.emptyText??t(`table.empty`)}</slot>
</td>
</tr>`:yn(re,e=>e.key,({row:n,index:i,key:a},o)=>{let s=r&&ie.has(a);return j`<tr
aria-selected=${s?`true`:A}
?data-selected=${s}
>
${r?j`<td
class="selectionCell"
style=${fe}
data-fixed=${pe}
>
<input
type="checkbox"
part="checkbox"
class="checkbox"
.checked=${Wn(s)}
?disabled=${this.rowDisabled(n)}
aria-label=${t(`table.selectRow`,{row:this.getRowLabel?.(n,i)??String(a)})}
@change=${e=>this.toggleRow(a,e.target.checked)}
/>
</td>`:A}
${e.map(e=>j`<td
style=${P(ue(e))}
data-ellipsis=${e.ellipsis?`true`:A}
data-fixed=${e.fixed??A}
data-fixed-edge=${de(e)}
>
${e.render?e.render(n,o):n[e.key]}
</td>`)}
</tr>`});let _e=Ii(this.scrollX),ve=Ii(this.scrollY),ye=!!(_e||ve)||this.overflowing,be=this.aria.label;return j`<div
part="wrapper"
class=${F({wrapper:!0,wrapperBordered:this.variant===`bordered`,wrapperScrollY:!!ve})}
role=${ye?`region`:A}
tabindex=${ye?0:A}
aria-label=${ye?be??t(`table.scrollRegion`):A}
style=${P(ve?{maxHeight:ve,overflowY:`auto`}:{})}
>
<table
part="table"
class=${F({table:!0,[this.size]:!0,[this.variant]:!0,hoverable:this.hoverable,scrollX:!!_e})}
style=${P(_e?{minWidth:_e}:{})}
aria-label=${be??A}
aria-description=${this.aria.description??A}
>
<thead>
<tr>
${r?j`<th
scope="col"
class="selectionCell"
style=${fe}
data-fixed=${pe}
>
<input
type="checkbox"
part="checkbox"
class="checkbox"
.checked=${Wn(oe)}
.indeterminate=${se}
?disabled=${ae.length===0||this.loading}
aria-label=${t(`table.selectAll`)}
@change=${ce}
/>
</th>`:A}
${e.map(he)}
</tr>
</thead>
<tbody>
${ge}
</tbody>
</table>
</div>`}render(){let e=!!this.error&&!this.loading;return j`<div
part="base"
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
>${St}</span
>${this.retryLabel??this.locale.t(`table.retry`)}</span
>
</button>`:A}
</div>`:j`${this.renderTable()}
${this.pagination?j`<minerva-pagination
part="pagination"
exportparts="base: pagination-base, item: pagination-item"
@minerva-page-change=${this.handlePageChange}
></minerva-pagination>`:A}`}
</div>`}},I([M({attribute:!1})],q.prototype,`columns`,void 0),I([M({attribute:!1})],q.prototype,`rows`,void 0),I([M({attribute:`row-key`})],q.prototype,`rowKey`,void 0),I([M({attribute:`empty-text`})],q.prototype,`emptyText`,void 0),I([M({type:Boolean,reflect:!0})],q.prototype,`loading`,void 0),I([M({type:Number,attribute:`loading-rows`})],q.prototype,`loadingRows`,void 0),I([M({attribute:!1})],q.prototype,`sortState`,void 0),I([M({type:Boolean,attribute:`manual-sort`})],q.prototype,`manualSort`,void 0),I([M({type:Boolean,reflect:!0})],q.prototype,`selectable`,void 0),I([M({attribute:!1})],q.prototype,`selectedRowKeys`,void 0),I([M({attribute:!1})],q.prototype,`isRowDisabled`,void 0),I([M({attribute:!1})],q.prototype,`getRowLabel`,void 0),I([M({reflect:!0})],q.prototype,`size`,void 0),I([M({reflect:!0})],q.prototype,`variant`,void 0),I([M({type:Boolean,reflect:!0})],q.prototype,`hoverable`,void 0),I([M({attribute:`scroll-x`})],q.prototype,`scrollX`,void 0),I([M({attribute:`scroll-y`})],q.prototype,`scrollY`,void 0),I([M({attribute:!1})],q.prototype,`pagination`,void 0),I([M()],q.prototype,`error`,void 0),I([M({type:Boolean})],q.prototype,`retryable`,void 0),I([M({attribute:`retry-label`})],q.prototype,`retryLabel`,void 0),I([T()],q.prototype,`overflowing`,void 0),I([D(`.wrapper`)],q.prototype,`wrapper`,void 0),zi=class extends _{constructor(...e){super(...e),this.primary=``,this.monospace=!1,this.maxWidth=360,this.observer=null}static{this.tagName=`minerva-table-cell-content`}static{this.styles=[h,k`
:host{
display: block;
min-width: 0;
}
`,p(st)]}hasSecondarySlot(){return Array.from(this.children).some(e=>e.getAttribute(`slot`)===`secondary`)}connectedCallback(){super.connectedCallback(),this.observer??=typeof MutationObserver>`u`?null:new MutationObserver(()=>this.requestUpdate()),this.observer?.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}render(){let e=this.secondary!==void 0&&this.secondary!==null||this.hasSecondarySlot(),t=F({cellPrimary:!0,cellMono:this.monospace,cellStrong:e}),n=j`<slot>${this.primary}</slot>`;return j`<div
part="base"
class="cellContent"
style=${P({maxWidth:Ii(this.maxWidth)})}
>
${this.monospace?j`<code class=${t}>${n}</code>`:j`<div class=${t}>${n}</div>`}
${e?j`<div class="cellSecondary">
<slot name="secondary">${this.secondary}</slot>
</div>`:A}
</div>`}},I([M()],zi.prototype,`primary`,void 0),I([M()],zi.prototype,`secondary`,void 0),I([M({type:Boolean,reflect:!0})],zi.prototype,`monospace`,void 0),I([M({attribute:`max-width`})],zi.prototype,`maxWidth`,void 0)})))()}var Vi,Hi;function Ui(){return(Ui=e((()=>{f(),y(),w(),r(),N(),O(),Vi=class extends _{constructor(...e){super(...e),this.label=``}static{this.tagName=`minerva-description-item`}static{this.styles=[h,k`
:host{
display: contents;
}
`]}render(){return j`<slot></slot>`}},I([M({reflect:!0})],Vi.prototype,`label`,void 0),Hi=class e extends _{constructor(...e){super(...e),this.items=[],this.observer=null}static{this.tagName=`minerva-description-list`}static{this.dependencies=[Vi]}static{this.shadowRootOptions={..._.shadowRootOptions,slotAssignment:`manual`}}static{this.styles=[h,k`
:host{
display: block;
}
`,p(lt)]}declarativeItems(){return Array.from(this.children).filter(e=>e.localName===Vi.tagName)}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.requestUpdate()),this.observer.observe(this,{childList:!0,attributes:!0,subtree:!0,attributeFilter:[`label`]}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null}updated(){let t=this.declarativeItems();if(Array.from(this.renderRoot.querySelectorAll(`slot[data-item]`)).forEach((e,n)=>{let r=t[n];r&&typeof e.assign==`function`&&e.assign(r)}),b){let t=Array.from(this.children).filter(e=>e.localName!==Vi.tagName);t.length&&v(e.tagName,`only <minerva-description-item> children are rendered (ignored: <${t[0].localName}>).`)}}render(){let e=this.declarativeItems();return j`<dl part="base" class="descriptionList">
${(this.items??[]).map(e=>j`<div part="row" class="row">
<dt part="term">${e.label}</dt>
<dd part="description">${e.value}</dd>
</div>`)}
${e.map(e=>j`<div part="row" class="row">
<dt part="term">${e.label}</dt>
<dd part="description"><slot data-item></slot></dd>
</div>`)}
</dl>`}},I([M({attribute:!1})],Hi.prototype,`items`,void 0)})))()}var Wi,Gi;function Ki(){return(Ki=e((()=>{f(),y(),m(),w(),_e(),N(),O(),E(),gn(),Wi=e=>typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Gi=class e extends _{constructor(...e){super(...e),this.variant=`solid`,this.orientation=`horizontal`,this.thickness=1,this.spacing=16,this.textAlign=`center`,this.elevation=!1,this.flexItem=!1,this.slots=new x(this)}static{this.tagName=`minerva-divider`}static{this.styles=[h,k`
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
`,p(ee)]}updated(){b&&this.orientation===`vertical`&&this.slots.test(`[default]`)&&v(e.tagName,`text is only rendered by horizontal dividers; it is ignored when orientation is vertical.`)}render(){let e=this.orientation===`horizontal`,t=e&&this.slots.test(`[default]`),n=this.textAlign,r={};if(this.thickness!=null&&!Number.isNaN(this.thickness)&&(r.borderWidth=`${this.thickness}px`),this.length!=null&&this.length!==``&&(r[e?`width`:`height`]=Wi(this.length)),this.spacing!=null&&!Number.isNaN(this.spacing)){let t=`${this.spacing}px`;r.marginTop=e?t:`0`,r.marginBottom=e?t:`0`,r.marginLeft=e?`0`:t,r.marginRight=e?`0`:t}let i=F({divider:!0,[this.variant]:!0,[this.orientation]:!0,withText:t,[`text${n.charAt(0).toUpperCase()}${n.slice(1)}`]:t,elevation:this.elevation,flexItem:this.flexItem});return t?j`<div
part="base"
role="separator"
aria-orientation=${this.orientation}
class=${i}
style=${P(r)}
>
<span class="text" part="text"><slot></slot></span>
</div>`:j`<hr
part="base"
aria-orientation=${this.orientation}
class=${i}
style=${P(r)}
/>`}},I([M({reflect:!0})],Gi.prototype,`variant`,void 0),I([M({reflect:!0})],Gi.prototype,`orientation`,void 0),I([M({type:Number})],Gi.prototype,`thickness`,void 0),I([M()],Gi.prototype,`length`,void 0),I([M({type:Number})],Gi.prototype,`spacing`,void 0),I([M({attribute:`text-align`})],Gi.prototype,`textAlign`,void 0),I([M({type:Boolean,reflect:!0})],Gi.prototype,`elevation`,void 0),I([M({type:Boolean,reflect:!0,attribute:`flex-item`})],Gi.prototype,`flexItem`,void 0)})))()}var qi,J;function Ji(){return(Ji=e((()=>{C(),f(),u(),He(),g(),y(),m(),w(),$n(),rr(),Jn(),qn(),re(),ne(),N(),O(),E(),qi=[`left`,`right`,`top`,`bottom`],J=class e extends _{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.side=`right`,this.size=`medium`,this.hideCloseButton=!1,this.dialogRole=`dialog`,this.nonModal=!1,this.locale=new d(this),this.aria=new l(this),this.slots=new x(this),this.presence=new ce(this,()=>this.panel),this.modal=new er(this),this.focusScope=new Yn(this,()=>({trapped:!this.nonModal,loop:!0,restoreFocus:!0})),this.layer=new Zn(this,()=>({disableOutsidePointerEvents:!this.nonModal,branches:()=>[this.triggerElement()],onFocusOutside:()=>this.nonModal,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleClick=e=>{if(e.defaultPrevented)return;let t=e.composedPath(),n=this.triggerElement();if(n&&t.includes(n)){this.requestOpenChange(!this.open,`trigger`);return}let r=t.find(e=>e instanceof Element&&e.hasAttribute(`data-drawer-close`));r&&this.contains(r)&&this.requestOpenChange(!1,`close-slot`)}}static{this.tagName=`minerva-drawer`}static{this.styles=[h,Qn,k`
:host{
display: contents;
}
`,p(Ee)]}show(){this.open=!0}hide(){this.open=!1}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleClick)}willUpdate(t){t.has(`open`)&&this.presence.sync(this.open),b&&t.has(`side`)&&!qi.includes(this.side)&&v(e.tagName,`invalid side "${this.side}" (expected left, right, top or bottom).`)}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)||e.has(`nonModal`)&&this.open){let t=this.panel;this.open&&t?(e.has(`nonModal`)&&!e.has(`open`)&&(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate()),zt(this.overlay),zt(t),this.nonModal||this.modal.activate(this),this.layer.activate(t),this.focusScope.activate(t),e.has(`open`)&&this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleClick),S(this.panel),S(this.overlay)}afterClose(){S(this.panel),S(this.overlay),this.emit(`minerva-after-close`)}render(){let e=this.open||this.presence.present,t=this.open?`open`:`closed`,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description,i=qi.includes(this.side)?this.side:`right`;return j`<slot name="trigger"></slot> ${e?j`${this.nonModal?A:j`<div
part="overlay"
class="overlay"
popover="manual"
data-state=${t}
aria-hidden="true"
></div>`}
<div
part="panel"
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
</div>`:A}`}},I([M({type:Boolean,reflect:!0})],J.prototype,`open`,void 0),I([M()],J.prototype,`label`,void 0),I([M()],J.prototype,`description`,void 0),I([M({attribute:`hidden-description`})],J.prototype,`hiddenDescription`,void 0),I([M({reflect:!0})],J.prototype,`side`,void 0),I([M({reflect:!0})],J.prototype,`size`,void 0),I([M({type:Boolean,attribute:`hide-close-button`})],J.prototype,`hideCloseButton`,void 0),I([M({attribute:`close-label`})],J.prototype,`closeLabel`,void 0),I([M({attribute:`dialog-role`})],J.prototype,`dialogRole`,void 0),I([M({type:Boolean,reflect:!0,attribute:`non-modal`})],J.prototype,`nonModal`,void 0),I([D(`.content`)],J.prototype,`panel`,void 0),I([D(`.overlay`)],J.prototype,`overlay`,void 0)})))()}var Yi,Xi,Zi,Qi;function $i(){return($i=e((()=>{C(),f(),g(),y(),m(),w(),Ft(),N(),O(),E(),gn(),Yi=Kn`<svg class="defaultIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none" aria-hidden="true" focusable="false"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM5 5v9h4a3 3 0 0 0 6 0h4V5ZM5 16v3h14v-3h-2.54a5 5 0 0 1-8.92 0Z" /></svg>`,Xi=Kn`<svg class="defaultIcon" aria-hidden="true" focusable="false" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse style="fill: var(--surface-muted-color)" cx="32" cy="33" rx="32" ry="7" /><g fill-rule="nonzero" style="stroke: var(--border-strong-color)"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" /><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" style="fill: var(--surface-color)" /></g></g></svg>`,Zi=e=>e&&/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Qi=class e extends _{constructor(...e){super(...e),this.heading=``,this.hideDescription=!1,this.hideIcon=!1,this.useSvg=!1,this.showShadow=!1,this.locale=new d(this),this.aria=new l(this),this.slots=new x(this)}static{this.tagName=`minerva-empty`}static{this.styles=[h,k`
:host{
display: block;
}
`,p(s)]}updated(){b&&this.hideDescription&&this.description&&v(e.tagName,`description is ignored while hide-description is set.`)}render(){let e=!!this.heading||this.slots.test(`heading`),t=this.slots.test(`description`),n=this.description??this.locale.t(`empty.description`),r=!this.hideDescription&&(t||n!==``),i=this.slots.test(`action`)||this.slots.test(`secondary-action`),a=this.aria.label;return j`<div
part="base"
class=${F({empty:!0,showShadow:this.showShadow,sized:!!this.size,[`size-${this.size}`]:!!this.size})}
style=${P({width:Zi(this.width),height:Zi(this.height)})}
role="status"
aria-label=${a??A}
aria-labelledby=${a?A:e?`title`:r?`description`:A}
aria-describedby=${e&&r?`description`:A}
>
${this.hideIcon?A:j`<div part="icon" class="iconWrapper">
<slot name="icon">${this.useSvg?Xi:Yi}</slot>
</div>`}
${e?j`<div id="title" part="heading" class="title">
<slot name="heading">${this.heading}</slot>
</div>`:A}
${r?j`<div id="description" part="description" class="description">
<slot name="description">${n}</slot>
</div>`:A}
${i?j`<div part="actions" class="actions">
<slot name="action"></slot><slot name="secondary-action"></slot>
</div>`:A}
${this.slots.test(`[default]`)?j`<div part="footer" class="footer"><slot></slot></div>`:A}
</div>`}},I([M()],Qi.prototype,`heading`,void 0),I([M()],Qi.prototype,`description`,void 0),I([M({type:Boolean,attribute:`hide-description`})],Qi.prototype,`hideDescription`,void 0),I([M({type:Boolean,attribute:`hide-icon`})],Qi.prototype,`hideIcon`,void 0),I([M({reflect:!0})],Qi.prototype,`size`,void 0),I([M({type:Boolean,attribute:`use-svg`})],Qi.prototype,`useSvg`,void 0),I([M()],Qi.prototype,`width`,void 0),I([M()],Qi.prototype,`height`,void 0),I([M({type:Boolean,attribute:`show-shadow`})],Qi.prototype,`showShadow`,void 0)})))()}var ea,ta;function na(){return(na=e((()=>{f(),y(),m(),w(),we(),N(),O(),ea=e=>e.localName===`minerva-checkbox`||e.localName===`minerva-switch`||e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`),ta=class e extends _{constructor(...e){super(...e),this.label=``,this.helperText=``,this.errorMessage=``,this.invalid=!1,this.required=!1,this.disabled=!1,this.readOnly=!1,this.requiredIndicator=`*`,this.slots=new x(this),this.observer=null,this.control=null,this.saved=new Map}static{this.tagName=`minerva-form-control`}static{this.styles=[h,k`
:host{
display: block;
}
.label{
cursor: default;
}
`,p(Rt)]}get controlElement(){return Array.from(this.children).find(e=>!e.hasAttribute(`slot`))??null}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.sync()),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.release()}updated(){this.sync()}get labelText(){return this.label?this.label:Array.from(this.children).filter(e=>e.getAttribute(`slot`)===`label`).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `)}slotText(e){return Array.from(this.children).filter(t=>t.getAttribute(`slot`)===e).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `)}get descriptionText(){return this.invalid?this.errorMessage||this.slotText(`error-message`):this.helperText||this.slotText(`helper-text`)}save(e,t){this.saved.has(e)||this.saved.set(e,t)}setAttr(e,t,n){let r=`@${t}`;if(n===null){if(!this.saved.has(r))return;let n=this.saved.get(r);this.saved.delete(r),n===null?e.removeAttribute(t):e.setAttribute(t,n);return}this.save(r,e.getAttribute(t)),e.getAttribute(t)!==n&&e.setAttribute(t,n)}setProp(e,t,n){let r=`.${t}`;if(!n){if(!this.saved.has(r))return;e[t]=this.saved.get(r),this.saved.delete(r);return}this.save(r,e[t]),e[t]=!0}propFor(e,t){return{invalid:[`invalid`,`error`],required:[`required`],disabled:[`disabled`],readOnly:[`readOnly`,`readonly`]}[t].find(t=>t in e&&typeof e[t]==`boolean`)??null}release(){let e=this.control;if(e){for(let[t,n]of this.saved)if(t.startsWith(`@`)){let r=t.slice(1);n===null?e.removeAttribute(r):e.setAttribute(r,n)}else e[t.slice(1)]=n;this.saved.clear(),this.control=null}}sync(){let t=this.controlElement;if(t!==this.control&&(this.release(),this.control=t),!t)return;let n=this.labelText,r=this.saved.has(`@aria-label`);n&&(r||!t.hasAttribute(`aria-label`))?this.setAttr(t,`aria-label`,n):n||this.setAttr(t,`aria-label`,null);let i=this.descriptionText;this.setAttr(t,`aria-description`,i||null);for(let e of[`invalid`,`required`,`disabled`,`readOnly`]){let n=this.propFor(t,e);n&&this.setProp(t,n,this[e])}if(this.setAttr(t,`aria-invalid`,this.invalid?`true`:null),this.setAttr(t,`aria-required`,this.required?`true`:null),this.setAttr(t,`aria-readonly`,this.readOnly?`true`:null),b&&this.children.length>0){let t=Array.from(this.children).filter(e=>!e.hasAttribute(`slot`));t.length>1&&v(e.tagName,`wraps ONE control, found ${t.length} elements in the default slot: only the first one is wired.`)}}handleLabelClick(e){let t=this.controlElement;t&&!this.disabled&&(e.preventDefault(),ea(t)?t.click():t.focus())}render(){let e=!!this.label||this.slots.test(`label`),t=!!this.helperText||this.slots.test(`helper-text`),n=!!this.errorMessage||this.slots.test(`error-message`);return j`<div class="root" part="base">
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
</div>`}},I([M()],ta.prototype,`label`,void 0),I([M({attribute:`helper-text`})],ta.prototype,`helperText`,void 0),I([M({attribute:`error-message`})],ta.prototype,`errorMessage`,void 0),I([M({type:Boolean,reflect:!0})],ta.prototype,`invalid`,void 0),I([M({type:Boolean,reflect:!0})],ta.prototype,`required`,void 0),I([M({type:Boolean,reflect:!0})],ta.prototype,`disabled`,void 0),I([M({type:Boolean,reflect:!0,attribute:`readonly`})],ta.prototype,`readOnly`,void 0),I([M({attribute:`required-indicator`})],ta.prototype,`requiredIndicator`,void 0)})))()}var ra;function ia(){return(ia=e((()=>{y(),w(),Pr(),Ue(),Pt(),sr(),N(),O(),gn(),ra=class e extends _{constructor(...e){super(...e),this.columns=1,this.gap=4}static{this.tagName=`minerva-form-layout`}static{this.styles=[h,k`
:host{
display: block;
min-width: 0;
}
.layout ::slotted(*){
min-width: 0;
}
`,p(Bt),p(ze)]}render(){let t=or(e.tagName,this.columns,this.rowGap??this.gap,this.columnGap??this.gap);return j`<div class="root" part="base" style=${P(t)}>
<div class="layout" part="layout"><slot></slot></div>
</div>`}},I([M({converter:ur})],ra.prototype,`columns`,void 0),I([M({converter:Nr})],ra.prototype,`gap`,void 0),I([M({attribute:`row-gap`,converter:Nr})],ra.prototype,`rowGap`,void 0),I([M({attribute:`column-gap`,converter:Nr})],ra.prototype,`columnGap`,void 0)})))()}function aa(e){let t=``;if(e&&typeof window<`u`){let n=An(window);n.isSupported&&(n.addHook(`uponSanitizeAttribute`,(e,t)=>{t.attrName===`src`&&(e.nodeName!==`IMG`||!/^data:image\/(?:png|jpeg|gif|webp|avif);base64,[a-z0-9+/=\s]+$/i.test(t.attrValue))&&(t.keepAttr=!1)}),n.sanitize(ca,sa)===la&&(t=n.sanitize(e,sa)))}return`<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="${oa}"><meta name="referrer" content="no-referrer"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>${t}</body></html>`}var oa,sa,ca,la;function ua(){return(ua=e((()=>{_n(),oa=`default-src 'none'; script-src 'none'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'; object-src 'none'; frame-src 'none'; font-src 'none'; media-src 'none'; form-action 'none'; base-uri 'none'`,sa={ALLOWED_TAGS:`a abbr b bdi bdo blockquote br caption center code col colgroup dd del div dl dt em figcaption figure h1 h2 h3 h4 h5 h6 hr i img ins li ol p pre s section small span strong style sub sup table tbody td tfoot th thead tr u ul wbr`.split(` `),ALLOWED_ATTR:`alt title class style lang dir role width height align valign bgcolor border cellpadding cellspacing colspan rowspan scope src`.split(` `),ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!0,FORBID_TAGS:[`base`,`meta`,`link`,`script`,`form`,`input`,`button`,`iframe`,`object`,`embed`,`svg`,`math`],FORBID_ATTR:[`href`,`srcdoc`,`srcset`,`action`,`formaction`,`target`,`ping`,`id`,`name`],FORCE_BODY:!0,RETURN_TRUSTED_TYPE:!1},ca=`<p title="t" onclick="x()">ok</p><script>x()<\/script><img alt="a" src="https://x.invalid/p" onerror="x()">`,la=`<p title="t">ok</p><img alt="a">`})))()}var da;function fa(){return(fa=e((()=>{C(),f(),y(),w(),tt(),ua(),N(),O(),gn(),pn(),da=class e extends _{constructor(...e){super(...e),this.html=``,this.label=``,this.viewport=`desktop`,this.mobileWidth=375,this.height=600,this.doc=aa(),this.aria=new l(this)}static{this.tagName=`minerva-html-preview`}static{this.styles=[h,k`
:host{
display: block;
}
`,p(it)]}willUpdate(e){e.has(`html`)&&(this.doc=aa(this.html))}updated(){b&&!this.label&&!this.aria.label&&v(e.tagName,`set label (or aria-label): the iframe needs a title for assistive technologies.`)}render(){let e=Number.isFinite(this.mobileWidth)&&this.mobileWidth>0?this.mobileWidth:375,t=Number.isFinite(this.height)&&this.height>0?this.height:600;return j`<div part="base" class="preview">
${Pn(this.doc,j`<iframe
part="frame"
class="frame"
title=${this.label||this.aria.label||``}
sandbox=""
referrerpolicy="no-referrer"
srcdoc=${this.doc}
style=${P({width:this.viewport===`mobile`?`${e}px`:`100%`,height:`${t}px`})}
></iframe>`)}
</div>`}},I([M()],da.prototype,`html`,void 0),I([M()],da.prototype,`label`,void 0),I([M({reflect:!0})],da.prototype,`viewport`,void 0),I([M({type:Number,attribute:`mobile-width`})],da.prototype,`mobileWidth`,void 0),I([M({type:Number})],da.prototype,`height`,void 0),I([T()],da.prototype,`doc`,void 0)})))()}var pa,ma,Y;function ha(){return(ha=e((()=>{C(),f(),u(),g(),y(),w(),pt(),Jn(),jt(),mt(),N(),O(),E(),pa=200,ma=300,Y=class e extends _{constructor(...e){super(...e),this.color=`neutral`,this.variant=`ghost`,this.size=`medium`,this.shape=`circle`,this.disabled=!1,this.loading=!1,this.toggle=!1,this.pressed=!1,this.tooltipPlacement=`top`,this.noTooltip=!1,this.type=`button`,this.tooltipOpen=!1,this.tooltipPositioned=!1,this.internals=Qe(this),this.aria=new l(this),this.locale=new d(this),this.floating=new nr(this,()=>({anchor:()=>this.button,floating:()=>this.tooltipElement,branches:()=>[this],placement:this.tooltipPlacement,offset:{mainAxis:8},dismissOnPointerDownOutside:!1,dismissOnFocusOutside:!1,onDismiss:()=>this.hideTooltip(),onPosition:()=>{this.tooltipPositioned=!0}})),this.handlePointerEnter=()=>{if(!this.tooltipEnabled||this.tooltipOpen){this.clearTimers();return}this.clearTimers(),this.enterTimer=setTimeout(()=>this.showTooltip(),pa)},this.handlePointerLeave=()=>{this.clearTimers(),this.tooltipOpen&&(this.leaveTimer=setTimeout(()=>this.hideTooltip(),ma))},this.blockInactiveClicks=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-icon-button`}static{this.formAssociated=!0}static{this.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,Qn,k`
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
`,p(bt),p(xt)]}get form(){return this.internals?.form??null}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}get tooltipContent(){return this.tooltip||this.label||void 0}get tooltipEnabled(){return!this.noTooltip&&!!this.tooltipContent&&!this.disabled&&!this.loading}clearTimers(){clearTimeout(this.enterTimer),clearTimeout(this.leaveTimer)}showTooltip(){this.tooltipEnabled&&(this.clearTimers(),this.tooltipOpen=!0)}hideTooltip(){this.clearTimers(),this.tooltipOpen=!1,this.tooltipPositioned=!1}handleClick(e){if(this.loading||this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}if(this.toggle){let e=!this.pressed;this.emit(`minerva-pressed-change`,{pressed:e},{cancelable:!0})&&(this.pressed=e)}let t=this.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockInactiveClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockInactiveClicks,!0),this.clearTimers(),this.tooltipOpen=!1}willUpdate(e){(e.has(`disabled`)||e.has(`loading`)||e.has(`noTooltip`))&&!this.tooltipEnabled&&this.hideTooltip()}updated(){this.floating.sync(this.tooltipOpen&&this.tooltipEnabled),b&&!this.label&&!this.aria.label&&v(e.tagName,`icon buttons only contain an icon: set label (or aria-label) to give them an accessible name.`)}render(){let e=this.tooltipOpen&&this.tooltipEnabled;return j`<button
part="button"
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
>${c}</span
>`:j`<span class="glyph" part="glyph" aria-hidden="true"
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
</div>`:A}`}},I([M()],Y.prototype,`label`,void 0),I([M({reflect:!0})],Y.prototype,`color`,void 0),I([M({reflect:!0})],Y.prototype,`variant`,void 0),I([M({reflect:!0})],Y.prototype,`size`,void 0),I([M({reflect:!0})],Y.prototype,`shape`,void 0),I([M({type:Boolean,reflect:!0})],Y.prototype,`disabled`,void 0),I([M({type:Boolean,reflect:!0})],Y.prototype,`loading`,void 0),I([M({type:Boolean,reflect:!0})],Y.prototype,`toggle`,void 0),I([M({type:Boolean,reflect:!0})],Y.prototype,`pressed`,void 0),I([M()],Y.prototype,`tooltip`,void 0),I([M({attribute:`tooltip-placement`})],Y.prototype,`tooltipPlacement`,void 0),I([M({type:Boolean,attribute:`no-tooltip`})],Y.prototype,`noTooltip`,void 0),I([M({reflect:!0})],Y.prototype,`type`,void 0),I([T()],Y.prototype,`tooltipOpen`,void 0),I([T()],Y.prototype,`tooltipPositioned`,void 0),I([D(`button`)],Y.prototype,`button`,void 0),I([D(`.tooltip`)],Y.prototype,`tooltipElement`,void 0)})))()}var ga,X;function _a(){return(_a=e((()=>{C(),f(),u(),g(),y(),m(),w(),We(),jt(),N(),O(),E(),dn(),ga=0,X=class e extends ut{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.type=`text`,this.variant=`outline`,this.size=`medium`,this.invalid=!1,this.placeholder=``,this.readOnly=!1,this.clearable=!1,this.showCharCount=!1,this.passwordVisible=!1,this.countId=`minerva-input-count-${ga++}`,this.locale=new d(this),this.aria=new l(this,()=>this.labels),this.slots=new x(this),this.dirty=!1}static{this.tagName=`minerva-input`}static{this.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,k`
:host{
display: inline-flex;
width: 100%;
min-width: 0;
vertical-align: middle;
}
`,p(Tt)]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}select(){this.input?.select()}getFormValue(){return this.value}getValidity(){let e=this.input;return e?{flags:qe(e.validity),message:e.validationMessage,anchor:e}:this.required&&!this.value?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`)}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.passwordVisible=!1}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`value`)&&t.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),b&&t.has(`maxLength`)&&this.minLength!==void 0&&this.maxLength!==void 0&&this.minLength>this.maxLength&&v(e.tagName,`minlength (${this.minLength}) is greater than maxlength (${this.maxLength}): no value can be valid.`)}handleInput(){this.value=this.input.value,this.emit(`minerva-input`,{value:this.value})}handleChange(){this.value=this.input.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}clear(){this.value=``,this.input.value=``,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.emit(`minerva-input`,{value:``}),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:``}),this.emit(`minerva-clear`),this.input.focus()}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.type===`password`,r=this.clearable&&this.value!==``&&!t&&!this.readOnly,i=this.passwordVisible?this.hidePasswordLabel??e(`input.hidePassword`):this.showPasswordLabel??e(`input.showPassword`),a=this.showCharCount?this.countId:void 0;return j`<div
part="base"
class=${F({root:!0,[this.variant]:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
data-component="input"
>
${this.slots.test(`prefix`)?j`<span class="addon start"><slot name="prefix"></slot></span>`:A}
<input
part="input"
class="field"
.value=${Wn(this.value)}
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
${this.passwordVisible?ie:It}
</button>`:A}
${this.showCharCount?j`<span id=${this.countId} class="count" part="count"
>${this.maxLength!=null&&this.maxLength>=0?`${this.value.length} / ${this.maxLength}`:this.value.length}</span
>`:A}
${this.slots.test(`suffix`)?j`<span class="addon end"><slot name="suffix"></slot></span>`:A}
</div>`}},I([M({attribute:!1})],X.prototype,`value`,void 0),I([M({attribute:`value`})],X.prototype,`defaultValue`,void 0),I([M({reflect:!0})],X.prototype,`type`,void 0),I([M({reflect:!0})],X.prototype,`variant`,void 0),I([M({reflect:!0})],X.prototype,`size`,void 0),I([M({type:Boolean,reflect:!0})],X.prototype,`invalid`,void 0),I([M()],X.prototype,`placeholder`,void 0),I([M({type:Boolean,reflect:!0,attribute:`readonly`})],X.prototype,`readOnly`,void 0),I([M({type:Number,attribute:`minlength`})],X.prototype,`minLength`,void 0),I([M({type:Number,attribute:`maxlength`})],X.prototype,`maxLength`,void 0),I([M()],X.prototype,`pattern`,void 0),I([M()],X.prototype,`min`,void 0),I([M()],X.prototype,`max`,void 0),I([M()],X.prototype,`step`,void 0),I([M()],X.prototype,`autocomplete`,void 0),I([M()],X.prototype,`inputmode`,void 0),I([M({type:Boolean,reflect:!0})],X.prototype,`clearable`,void 0),I([M({attribute:`clear-label`})],X.prototype,`clearLabel`,void 0),I([M({type:Boolean,attribute:`show-char-count`})],X.prototype,`showCharCount`,void 0),I([M({attribute:`show-password-label`})],X.prototype,`showPasswordLabel`,void 0),I([M({attribute:`hide-password-label`})],X.prototype,`hidePasswordLabel`,void 0),I([T()],X.prototype,`passwordVisible`,void 0),I([D(`input`)],X.prototype,`input`,void 0)})))()}function va(e){if(!e.trim())return{status:`empty`};try{return JSON.parse(e),{status:`valid`}}catch(e){return{status:`invalid`,error:e instanceof Error?e.message:String(e)}}}function ya(e,t){let n=Math.min(10,Math.max(0,Math.trunc(t)||0));if(n>0)return zn(e,Ln(e,void 0,{tabSize:n,insertSpaces:!0,eol:`
`}));let r=jn(e,!0),i=[];for(;r.getPosition()<e.length;){r.scan();let t=r.getTokenOffset();i.push(e.slice(t,t+r.getTokenLength()))}return i.join(``)}var Z;function ba(){return(ba=e((()=>{C(),f(),u(),g(),y(),w(),pt(),jt(),$e(),Mt(),N(),O(),E(),dn(),Dn(),Z=class e extends ut{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.rows=8,this.hideToolbar=!1,this.indent=2,this.invalid=!1,this.readOnly=!1,this.placeholder=``,this.focused=!1,this.locale=new d(this),this.aria=new l(this,()=>this.labels),this.dirty=!1}static{this.tagName=`minerva-json-field`}static{this.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,k`
:host{
display: block;
width: 100%;
min-width: 0;
}
`,p(Je),p(bt),p(ft),k`

.toolbar .iconButton{
min-height: 0;
}
.status > svg{
width: 16px;
height: 16px;
}
`]}focus(e){this.textarea?.focus(e)}blur(){this.textarea?.blur()}formatValue(){va(this.value).status===`valid`&&(this.value=ya(this.value,this.indent))}getFormValue(){return this.value}getValidity(){let e=this.textarea,t=va(this.value);return t.status===`invalid`?{flags:{badInput:!0},message:`${this.invalidLabel??this.locale.t(`jsonField.invalid`)}: ${t.error}`,anchor:e}:this.required&&t.status===`empty`?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:e}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),b&&t.has(`indent`)&&(this.indent<0||this.indent>10)&&v(e.tagName,`indent (${this.indent}) is clamped to 0..10.`)}get locked(){return this.isDisabled||this.readOnly}formatNow(){if(this.locked||va(this.value).status!==`valid`)return;let e=ya(this.value,this.indent);e!==this.value&&(this.dirty=!0,this.value=e,this.emit(`minerva-input`,{value:e}),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e}))}handleInput(){this.locked||(this.dirty=!0,this.value=String(this.textarea.value),this.emit(`minerva-input`,{value:this.value}))}handleChange(){this.value=String(this.textarea.value),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.focused?{status:`empty`}:va(this.value),r=n.status===`invalid`,i=r||this.invalid,a=this.locked||!this.value.trim(),o=n.status===`valid`?this.validLabel??e(`jsonField.valid`):n.status===`invalid`?`${this.invalidLabel??e(`jsonField.invalid`)}: ${n.error}`:``,s=[this.aria.description,r?o:void 0].filter(Boolean).join(` `);return j`<div class="root" part="base">
      ${this.hideToolbar?A:j`<div class="toolbar">
              <button
                part="format-button"
                type="button"
                class=${F({iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,disabled:a})}
                ?disabled=${a}
                tabindex=${a?`-1`:`0`}
                aria-label=${this.formatLabel??e(`jsonField.format`)}
                @click=${this.formatNow}
              >
                ${Vt}
              </button>
            </div>`}
      <textarea
        part="textarea"
        class=${F({textarea:!0,outline:!0,medium:!0,invalid:i})}
        style="resize: none"
        rows=${this.rows}
        spellcheck="false"
        .value=${Wn(this.value)}
        name=${this.name||A}
        placeholder=${this.placeholder||A}
        ?disabled=${t}
        ?readonly=${this.readOnly}
        ?required=${this.required}
        aria-label=${this.aria.label??A}
        aria-description=${s||A}
        aria-invalid=${i?`true`:A}
        @input=${this.handleInput}
        @change=${this.handleChange}
        @focus=${()=>this.focused=!0}
        @blur=${()=>this.focused=!1}
      ></textarea>
      <div
        part="status"
        role="status"
        aria-live="polite"
        class=${F({status:!0,statusInvalid:r})}
      >
        ${n.status===`valid`?j`${Xe}<span>${o}</span>`:n.status===`invalid`?j`${fe}<span>${o}</span>`:A}
      </div>
    </div>`}},I([M({attribute:!1})],Z.prototype,`value`,void 0),I([M({attribute:`value`})],Z.prototype,`defaultValue`,void 0),I([M({type:Number})],Z.prototype,`rows`,void 0),I([M({type:Boolean,attribute:`hide-toolbar`})],Z.prototype,`hideToolbar`,void 0),I([M({type:Number})],Z.prototype,`indent`,void 0),I([M({type:Boolean,reflect:!0})],Z.prototype,`invalid`,void 0),I([M({type:Boolean,reflect:!0,attribute:`readonly`})],Z.prototype,`readOnly`,void 0),I([M()],Z.prototype,`placeholder`,void 0),I([M({attribute:`format-label`})],Z.prototype,`formatLabel`,void 0),I([M({attribute:`valid-label`})],Z.prototype,`validLabel`,void 0),I([M({attribute:`invalid-label`})],Z.prototype,`invalidLabel`,void 0),I([T()],Z.prototype,`focused`,void 0),I([D(`textarea`)],Z.prototype,`textarea`,void 0)})))()}function xa(e){if(!e)return[];try{let t=JSON.parse(e);if(Array.isArray(t))return t.filter(e=>e&&typeof e==`object`).map(e=>({id:typeof e.id==`string`?e.id:``,key:String(e.key??``),value:String(e.value??``)}));if(t&&typeof t==`object`)return Object.entries(t).map(([e,t])=>({id:``,key:e,value:typeof t==`string`?t:JSON.stringify(t)}))}catch{}return[]}var Sa,Ca;function wa(){return(wa=e((()=>{C(),f(),u(),g(),y(),w(),pt(),jt(),Br(),na(),Ke(),lr(),N(),O(),Vn(),Sa=0,Ca=class e extends ut{constructor(...e){super(...e),this.value=[],this.defaultValue=[],this.editorId=`kv-${Sa++}`,this.nextId=0,this.dirty=!1,this.pendingFocus=null,this.locale=new d(this),this.aria=new l(this,()=>this.labels)}static{this.tagName=`minerva-key-value-editor`}static{this.dependencies=[H,ta,cr]}static{this.styles=[h,k`
:host{
display: block;
width: 100%;
min-width: 0;
}
`,p(bt),p(Et),k`

.key{
--textarea-min-height: var(
--key-value-editor-control-height,
var(--control-height-sm)
);
}
`]}focus(e){(this.renderRoot.querySelector(`minerva-textarea`)??this.renderRoot.querySelector(`minerva-button`))?.focus(e)}getFormValue(){return JSON.stringify(this.value.map(({key:e,value:t})=>({key:e,value:t})))}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.renderRoot.querySelector(`minerva-button`)??null}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=xa(e))}willUpdate(t){if(t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),t.has(`value`)&&(this.value.some(e=>!e.id)&&(this.value=this.value.map(e=>e.id?e:{...e,id:this.newId()})),b)){let t=this.value.map(e=>e.id);new Set(t).size!==t.length&&v(e.tagName,`entries have duplicate ids: rows are tracked by id, make them unique.`)}}updated(e){super.updated(e);let t=this.pendingFocus;if(!t)return;this.pendingFocus=null;let n=e=>this.value.some(t=>t.id===e),r=e=>Array.from(this.renderRoot.querySelectorAll(`[data-entry-id]`)).find(t=>e!==void 0&&t.dataset.entryId===e)??null;if(t.kind===`add`){let e=n(t.id)?r(t.id)?.querySelector(`.key`):null;e&&e.updateComplete.then(()=>e.focus())}else n(t.id)||(r(t.nextId)?.querySelector(`.remove`)??this.renderRoot.querySelector(`minerva-button`))?.focus()}newId(){let e;do e=`${this.editorId}-${this.nextId++}`;while(this.value.some(t=>t.id===e));return e}commit(e){this.dirty=!0,this.value=e,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e})}add(){if(this.isDisabled)return;let e=this.newId();this.pendingFocus={kind:`add`,id:e},this.commit([...this.value,{id:e,key:``,value:``}])}removeEntry(e){if(this.isDisabled)return;let t=this.value.findIndex(t=>t.id===e),n=this.value[t+1]??this.value[t-1];this.pendingFocus={kind:`remove`,id:e,nextId:n?.id},this.commit(this.value.filter(t=>t.id!==e))}handleInput(e,t,n){if(e.stopPropagation(),this.isDisabled)return;let r=e.target.value;this.dirty=!0,this.value=this.value.map(e=>e.id===t?{...e,[n]:r}:e),this.emit(`minerva-input`,{value:this.value})}handleFieldChange(e){e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}renderField(e,t,n,r){let i=this.errors?.[e.id]?.[n];return j`<minerva-form-control
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
</minerva-form-control>`}render(){let{t:e}=this.locale,t=this.keyLabel??e(`keyValueEditor.key`),n=this.valueLabel??e(`keyValueEditor.value`),r=this.removeLabel??e(`keyValueEditor.remove`),i=this.isDisabled,a=this.aria.label;return j`<div
class="root"
part="base"
role=${a?`group`:A}
aria-label=${a??A}
aria-description=${this.aria.description??A}
>
${yn(this.value,e=>e.id,(e,a)=>j`<div class="row" part="row" data-entry-id=${e.id}>
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
<span slot="start">${Pe}</span>
<span>${this.addLabel??e(`keyValueEditor.add`)}</span>
</minerva-button>
</div>`}},I([M({attribute:!1})],Ca.prototype,`value`,void 0),I([M({attribute:`value`,converter:{fromAttribute:e=>xa(e)}})],Ca.prototype,`defaultValue`,void 0),I([M({attribute:`key-label`})],Ca.prototype,`keyLabel`,void 0),I([M({attribute:`value-label`})],Ca.prototype,`valueLabel`,void 0),I([M({attribute:`add-label`})],Ca.prototype,`addLabel`,void 0),I([M({attribute:`remove-label`})],Ca.prototype,`removeLabel`,void 0),I([M({attribute:!1})],Ca.prototype,`errors`,void 0)})))()}var Ta,Ea;function Da(){return(Da=e((()=>{C(),f(),y(),m(),w(),jt(),yt(),N(),O(),E(),Ta=class e extends _{constructor(...e){super(...e),this.density=`default`,this.noDividers=!1,this.internals=Qe(this)}static{this.tagName=`minerva-list`}static{this.styles=[h,k`
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
`,p(Ve)]}connectedCallback(){super.connectedCallback(),o(this,this.internals,{role:`list`})}updated(){if(b){let t=Array.from(this.children).find(e=>e.localName!==Ea.tagName);t&&v(e.tagName,`children should be <minerva-list-item> elements (found <${t.localName}>): other elements break the list semantics.`)}}render(){return j`<div
part="base"
class=${F({list:!0,compact:this.density===`compact`,dividers:!this.noDividers})}
>
<slot @slotchange=${()=>this.requestUpdate()}></slot>
</div>`}},I([M({reflect:!0})],Ta.prototype,`density`,void 0),I([M({type:Boolean,reflect:!0,attribute:`no-dividers`})],Ta.prototype,`noDividers`,void 0),Ea=class extends _{constructor(...e){super(...e),this.primary=``,this.secondary=``,this.internals=Qe(this),this.slots=new x(this)}static{this.tagName=`minerva-list-item`}static{this.styles=[h,p(Ve),k`
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
`]}connectedCallback(){super.connectedCallback(),o(this,this.internals,{role:`listitem`})}render(){let e=this.secondary!==``||this.slots.test(`secondary`);return j`<div part="base" class="item">
${this.slots.test(`icon`)?j`<div part="icon" class="icon" aria-hidden="true">
<slot name="icon"></slot>
</div>`:A}
<div class="content">
<div part="primary" class="primary"><slot>${this.primary}</slot></div>
${e?j`<div part="secondary" class="secondary">
<slot name="secondary">${this.secondary}</slot>
</div>`:A}
</div>
${this.slots.test(`actions`)?j`<div part="actions" class="actions">
<slot name="actions"></slot>
</div>`:A}
</div>`}},I([M()],Ea.prototype,`primary`,void 0),I([M()],Ea.prototype,`secondary`,void 0)})))()}var Oa,ka;function Aa(){return(Aa=e((()=>{f(),g(),y(),w(),_t(),ir(),N(),O(),E(),Oa=[`small`,`medium`,`large`],ka=class e extends _{constructor(...e){super(...e),this.size=`medium`,this.locale=new d(this)}static{this.tagName=`minerva-loading-state`}static{this.dependencies=[dr]}static{this.styles=[h,k`
:host{
display: block;
}
`,p(At)]}updated(){b&&!Oa.includes(this.size)&&v(e.tagName,`unknown size "${this.size}" (expected ${Oa.join(`, `)}).`)}render(){return j`<div
part="base"
class=${F({loadingState:!0,[this.size]:!0})}
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
</div>`}},I([M()],ka.prototype,`label`,void 0),I([M({reflect:!0})],ka.prototype,`size`,void 0)})))()}function ja(e){let t=Array.from(e.childNodes).filter(e=>!Va(e)&&(e.nodeType!==1||e.getAttribute(`slot`)!==`icon`));return t.every(e=>e.nodeType===3)?t.map(e=>e.textContent??``).join(``).trim():t.map(e=>e.cloneNode(!0))}function Ma(e){return{value:Wa(e,`value`)??Ua(e),label:ja(e),textValue:Wa(e,`text-value`),shortcut:Wa(e,`shortcut`),disabled:Ga(e,`disabled`),closeOnSelect:Ga(e,`close-on-select`),element:e}}function Na(e,t=`e`){let n=[],r=null;return Array.from(e.children).forEach((e,i)=>{let a=`${t}-${i}`;switch(e.localName!==Q.tagName&&(r=null),e.localName){case Fa.tagName:{let t=Na(e,a),r=e.querySelector(`:scope > [slot='icon']`);n.push({key:Wa(e,`value`)||Ua(e),label:ja(e),textValue:Wa(e,`text-value`),icon:r?r.cloneNode(!0):void 0,shortcut:Wa(e,`shortcut`),disabled:Ga(e,`disabled`),closeOnSelect:!Ga(e,`keep-open`)&&void 0,children:t.length?t:void 0,element:e});break}case Ia.tagName:n.push({type:`checkbox`,key:Wa(e,`value`)||Ua(e),label:ja(e),textValue:Wa(e,`text-value`),shortcut:Wa(e,`shortcut`),disabled:Ga(e,`disabled`),checked:Ga(e,`checked`),closeOnSelect:Ga(e,`close-on-select`),element:e});break;case Q.tagName:{r||(r={type:`radio-group`,key:a,items:[]},n.push(r));let t=Ma(e);r.items.push(t),Ga(e,`checked`)&&(r.value=t.value);break}case Ra.tagName:n.push({type:`separator`,key:a});break;case za.tagName:n.push({type:`label`,key:a,label:ja(e)});break;case La.tagName:{let t=Array.from(e.children),r=Wa(e,`label`);if(t.length>0&&t.every(e=>e.localName===Q.tagName)){let i=t.map(Ma);n.push({type:`radio-group`,key:a,label:r,items:i,value:i.find(e=>e.element?.hasAttribute(`checked`))?.value,closeOnSelect:Ga(e,`close-on-select`),element:e})}else n.push({type:`group`,key:a,label:r??``,items:Na(e,a)});break}}}),n}var Pa,Fa,Ia,Q,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga;function Ka(){return(Ka=e((()=>{y(),N(),O(),Pa=k`
:host{
display: none !important;
}
`,Fa=class extends _{constructor(...e){super(...e),this.value=``,this.disabled=!1,this.shortcut=``,this.textValue=``,this.keepOpen=!1}static{this.tagName=`minerva-menu-item`}static{this.styles=Pa}},I([M({reflect:!0})],Fa.prototype,`value`,void 0),I([M({type:Boolean,reflect:!0})],Fa.prototype,`disabled`,void 0),I([M()],Fa.prototype,`shortcut`,void 0),I([M({attribute:`text-value`})],Fa.prototype,`textValue`,void 0),I([M({type:Boolean,attribute:`keep-open`})],Fa.prototype,`keepOpen`,void 0),Ia=class extends _{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1,this.shortcut=``,this.textValue=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-checkbox-item`}static{this.styles=Pa}},I([M({reflect:!0})],Ia.prototype,`value`,void 0),I([M({type:Boolean,reflect:!0})],Ia.prototype,`checked`,void 0),I([M({type:Boolean,reflect:!0})],Ia.prototype,`disabled`,void 0),I([M()],Ia.prototype,`shortcut`,void 0),I([M({attribute:`text-value`})],Ia.prototype,`textValue`,void 0),I([M({type:Boolean,attribute:`close-on-select`})],Ia.prototype,`closeOnSelect`,void 0),Q=class extends _{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1,this.shortcut=``,this.textValue=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-radio-item`}static{this.styles=Pa}},I([M({reflect:!0})],Q.prototype,`value`,void 0),I([M({type:Boolean,reflect:!0})],Q.prototype,`checked`,void 0),I([M({type:Boolean,reflect:!0})],Q.prototype,`disabled`,void 0),I([M()],Q.prototype,`shortcut`,void 0),I([M({attribute:`text-value`})],Q.prototype,`textValue`,void 0),I([M({type:Boolean,attribute:`close-on-select`})],Q.prototype,`closeOnSelect`,void 0),La=class extends _{constructor(...e){super(...e),this.label=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-group`}static{this.styles=Pa}},I([M()],La.prototype,`label`,void 0),I([M({type:Boolean,attribute:`close-on-select`})],La.prototype,`closeOnSelect`,void 0),Ra=class extends _{static{this.tagName=`minerva-menu-separator`}static{this.styles=Pa}},za=class extends _{static{this.tagName=`minerva-menu-label`}static{this.styles=Pa}},Ba=[Fa.tagName,Ia.tagName,Q.tagName,La.tagName,Ra.tagName,za.tagName],Va=e=>e.nodeType===1&&Ba.includes(e.localName),Ha=e=>!!(e.nodeType===1?e:e.parentElement)?.closest(Ba.join(`,`)),Ua=e=>Array.from(e.childNodes).filter(e=>!Va(e)).map(e=>e.textContent??``).join(``).trim(),Wa=(e,t)=>e.getAttribute(t)??void 0,Ga=(e,t)=>e.hasAttribute(t)})))()}var qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io;function ao(){return(ao=e((()=>{f(),u(),He(),y(),w(),$n(),Xn(),rr(),Jn(),qn(),Ze(),Ka(),N(),O(),E(),vn(),Vn(),qa=100,Ja=`[data-minerva-menu-item]`,Ya={mainAxis:4,crossAxis:-5},Xa=e=>e.hasAttribute(`data-disabled`),Za=e=>e.dataset.textValue??e.querySelector(`.text`)?.textContent??e.textContent??``,Qa=e=>e?Array.from(e.querySelectorAll(Ja)):[],$a=e=>Sn(e,{preventScroll:!0}),eo=e=>typeof e==`string`?e:void 0,to=e=>e.join(`/`),no=0,ro=class{constructor(e,t,n){this.grace=un(),this.typeahead=kn(),this.lastTypeahead=0,this.element=null,this.uid=null,this.path=[],this.position=new tr(e,()=>n===0?{placement:t.rootPlacement(),offset:t.rootOffset(),padding:8}:{placement:t.direction===`rtl`?`left-start`:`right-start`,offset:Ya,padding:8}),this.layer=new Zn(e,()=>n===0?t.rootLayerOptions():t.subLayerOptions(n)),this.scope=new Yn(e,()=>({trapped:n===0&&t.isModal,autoFocus:!1,restoreFocus:!1}))}clearTimer(){clearTimeout(this.openTimer),this.openTimer=void 0}},io=class extends _{constructor(...e){super(...e),this.items=[],this.open=!1,this.size=`medium`,this.keepOpen=!1,this.disabled=!1,this.nonModal=!1,this.noLoop=!1,this.declarative=[],this.openPath=[],this.exiting=[],this.stored=new Map,this.levels=[],this.modalController=new er(this),this.observer=null,this.intent=`content`,this.subIntent=`none`,this.restoreOverride=void 0,this.reason=`outside`,this.direction=`ltr`,this.onPanelKeyDown=e=>{let t=e.currentTarget,n=this.panelDepth(t),r=this.levels[n],{key:i}=e;if(i===`Tab`){e.preventDefault(),this.closeWithTab(e.shiftKey);return}if(e.defaultPrevented||!r||e.altKey||e.ctrlKey||e.metaKey)return;let a=Qa(t),o=e.composedPath()[0],s=a.find(e=>e===o)??null,c=s?a.indexOf(s):-1,ee=this.direction===`rtl`,te=ee?`ArrowLeft`:`ArrowRight`,ne=ee?`ArrowRight`:`ArrowLeft`;if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(i)){e.preventDefault(),r.typeahead.reset();let t=En({currentIndex:c,count:a.length,key:i,orientation:`vertical`,loop:!this.noLoop,isDisabled:e=>Xa(a[e])});t!==null&&$a(a[t]);return}if(i===te&&s?.hasAttribute(`aria-haspopup`)){e.preventDefault(),Xa(s)||this.openSubmenu(n,s.dataset.uid??``,`first`);return}if(i===ne&&n>0){e.preventDefault(),$a(this.parentItem(n)),this.closeSubmenu(n);return}if(i.length===1){let t=Date.now();t-r.lastTypeahead>500&&r.typeahead.reset();let n=r.typeahead.getBuffer()!==``;if(i!==` `||n){r.lastTypeahead=t,e.preventDefault();let n=r.typeahead.search(i,a.map(e=>({text:Za(e),disabled:Xa(e)})),c);n!==-1&&$a(a[n]);return}}(i===`Enter`||i===` `)&&s&&(e.preventDefault(),Xa(s)||this.activateItem(s,`first`))},this.itemActions=new Map,this.onPanelFocusIn=e=>{let t=e.composedPath()[0];t.matches?.(Ja)&&t.setAttribute(`data-highlighted`,``)},this.onPanelFocusOut=e=>{let t=e.composedPath()[0];t.matches?.(Ja)&&t.removeAttribute(`data-highlighted`)}}static{this.styles=[h,Qn,k`
:host{
display: contents;
}
`,p(t)]}onRootPointerDownOutside(e){}get isModal(){return!this.nonModal}get entries(){return this.items.length?this.items:this.declarative}show(){this.open=!0}hide(){this.open=!1}requestOpenChange(e,t){if(e===this.open)return!0;let n=this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0});return n&&(this.open=e,e||this.closeLevels()),n}openWith(e,t){this.intent=e,this.requestOpenChange(!0,t)}closeAll(e){this.requestOpenChange(!1,e)}closeWithTab(e){let t=this.restoreTarget(),n;if(t){let r=en().find(e=>e.element===this.levels[0]?.element)?.parent??document.body,i=Un(r).filter(e=>e===t||!Rn(this,e)||!this.isPanelNode(e)),a=i.indexOf(t);n=a===-1?t:i[e?a-1:a+1]??t}this.restoreOverride=n??void 0,this.requestOpenChange(!1,`tab`)&&$a(n)}isPanelNode(e){return this.levels.some(t=>Rn(t.element,e))}level(e){return this.levels[e]??=new ro(this,this,e),this.levels[e]}parentItem(e){let t=this.openPath[e-1];return t?this.renderRoot.querySelector(`[data-uid="${t}"]`)??null:null}rootLayerOptions(){return{disableOutsidePointerEvents:this.isModal,branches:()=>this.branches(),onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:e=>{this.reason=`outside`,this.onRootPointerDownOutside(e),!e.defaultPrevented&&(!this.isModal||e.button===2)&&(this.restoreOverride=null)},onFocusOutside:e=>(this.reason=`focus-outside`,!this.isModal||(e.preventDefault(),!1)),onDismiss:()=>this.closeAll(this.reason)}}subLayerOptions(e){return{parent:this.levels[e-1]?.element??void 0,branches:()=>[this.parentItem(e)],onEscapeKeyDown:()=>{$a(this.parentItem(e))},onDismiss:()=>this.closeSubmenu(e)}}closeLevels(e=0,t=!0){for(let n=this.levels.length-1;n>=e;n--){let e=this.levels[n],r=e.element;r&&(e.clearTimer(),e.grace.clear(),e.typeahead.reset(),e.scope.deactivate(),e.layer.deactivate(),e.position.end(),t&&this.isConnected?this.exit(r,n,e.path):S(r),e.element=null,e.uid=null,n===0&&(this.modalController.deactivate(),this.scheduleRestore()))}}exit(e,t,n){if(e.setAttribute(`data-state`,`closed`),sn(e)<=0){S(e);return}let r=++no,i=to(n);this.exiting=[...this.exiting.filter(e=>to(e.path)!==i),{id:r,depth:t,path:n}],qt(e).then(()=>{this.exiting.some(e=>e.id===r)&&(S(e),this.exiting=this.exiting.filter(e=>e.id!==r))})}clearExiting(){if(this.exiting.length!==0){for(let e of this.exiting)S(this.renderRoot.querySelector(`[data-panel-key="${to(e.path)}"]`));this.exiting=[]}}scheduleRestore(){let e=this.restoreOverride;this.restoreOverride=void 0;let t=e===void 0?this.restoreTarget():e;t&&setTimeout(()=>{if(this.open||!t.isConnected)return;let e=mn(document);(!e||e===document.body||!e.isConnected||(this.shadowRoot?.contains(e)??!1))&&$a(t)},0)}syncLevels(){let e=this.open&&!this.disabled?this.openPath.length+1:0;this.closeLevels(e);for(let t=0;t<e;t++){let e=t===0?``:this.openPath[t-1],n=this.renderRoot.querySelector(`[data-panel-key="${to(this.openPath.slice(0,t))}"]`);if(!n)return;let r=this.level(t);if(r.element===n&&r.uid===e)continue;r.element&&this.closeLevels(t);let i=t===0?this.anchorElement():this.parentItem(t);if(!i)return;r.element=n,r.uid=e,r.path=this.openPath.slice(0,t),n.setAttribute(`data-state`,`open`),zt(n),r.position.start(i,n),t===0&&this.isModal&&this.modalController.activate(this),r.layer.activate(n),r.scope.activate(n);let a=t===0?this.intent:this.subIntent;t===0?this.intent=`content`:this.subIntent=`none`,this.focusIntent(n,a)}}focusIntent(e,t){if(t===`none`)return;let n=Qa(e).filter(e=>!Xa(e));$a((t===`first`?n[0]:t===`last`?n[n.length-1]:void 0)??e)}reanchor(){let e=this.levels[0],t=this.anchorElement();e?.element&&t&&e.position.start(t,e.element)}openSubmenu(e,t,n){if(this.openPath[e]===t&&this.levels[e+1]?.element){n===`first`&&$a(Qa(this.levels[e+1].element).find(e=>!Xa(e)));return}this.subIntent=n,this.openPath=[...this.openPath.slice(0,e),t]}closeSubmenu(e){this.openPath.length<e||(this.closeLevels(e),this.openPath=this.openPath.slice(0,e-1))}stateOf(e,t){return this.stored.has(e)?this.stored.get(e):t}isChecked(e){return e.element?e.element.hasAttribute(`checked`):this.stateOf(e.key,e.checked??e.defaultChecked??!1)}radioValue(e){return e.items.some(e=>e.element)?e.items.find(e=>e.element?.hasAttribute(`checked`))?.value:this.stateOf(e.key,e.value??e.defaultValue)}activateAction(e){this.emit(`minerva-select`,{value:e.key,item:e},{cancelable:!0})&&(e.closeOnSelect??!this.keepOpen)&&this.closeAll(`select`)}toggleCheckbox(e){let t=!this.isChecked(e);this.emit(`minerva-change`,{value:e.key,checked:t,item:e},{cancelable:!0})&&(e.element?e.element.toggleAttribute(`checked`,t):this.stored.set(e.key,t),this.requestUpdate()),e.closeOnSelect&&this.closeAll(`select`)}chooseRadio(e,t){let n=this.radioValue(e);if(t.value!==n&&this.emit(`minerva-change`,{value:t.value,group:e.key,item:t},{cancelable:!0})){if(t.element)for(let n of e.items)n.element?.toggleAttribute(`checked`,n===t);else this.stored.set(e.key,t.value);this.requestUpdate()}(e.closeOnSelect||t.closeOnSelect)&&this.closeAll(`select`)}panelDepth(e){return Number(e.dataset.level??0)}activateItem(e,t){this.itemActions.get(e.dataset.uid??``)?.(t)}onItemClick(e){let t=e.currentTarget;Xa(t)||this.activateItem(t,`none`)}onItemPointerMove(e){let t=e.currentTarget,n=t.closest(`[data-level]`);if(!n)return;let r=this.panelDepth(n),i=this.levels[r];if(!i||e.pointerType===`touch`||i.grace.isInGraceArea({x:e.clientX,y:e.clientY}))return;i.grace.clear();let a=mn(document);if(Xa(t)){a!==n&&$a(n);return}a!==t&&$a(t);let o=t.dataset.uid??``;t.hasAttribute(`aria-haspopup`)&&this.openPath[r]!==o&&i.openTimer===void 0&&(i.openTimer=setTimeout(()=>{i.openTimer=void 0,this.open&&this.openSubmenu(r,o,`none`)},100))}onItemPointerLeave(e){if(e.pointerType===`touch`)return;let t=e.currentTarget,n=t.closest(`[data-level]`);if(!n)return;let r=this.panelDepth(n),i=this.levels[r];if(!i)return;i.clearTimer();let a=this.levels[r+1]?.element;if(t.hasAttribute(`aria-haspopup`)&&this.openPath[r]===t.dataset.uid&&a){let t=a.getAttribute(`data-side`)??`right`;i.grace.start({x:e.clientX,y:e.clientY},a.getBoundingClientRect(),t);return}i.grace.isInGraceArea({x:e.clientX,y:e.clientY})||mn(document)===t&&$a(n)}readEntries(){this.declarative=Na(this)}connectedCallback(){super.connectedCallback(),this.readEntries(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(e=>{e.some(e=>Ha(e.target)||Array.from(e.addedNodes).some(Ha)||Array.from(e.removedNodes).some(e=>e.nodeType===1&&e.localName.startsWith(`minerva-menu-`)))&&this.readEntries()}),this.observer.observe(this,{subtree:!0,childList:!0,attributes:!0,characterData:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.closeLevels(0,!1),this.clearExiting()}willUpdate(e){if(e.has(`items`)&&(this.stored=new Map,b&&this.checkKeys(this.items)),e.has(`open`)&&this.open){let e=this.anchorElement(),t=e&&`nodeType`in e?e:this;this.direction=this.isConnected?rn(t):`ltr`}e.has(`open`)&&!this.open&&(this.openPath=[]);let t=this.open&&!this.disabled?this.openPath.length+1:0,n=this.levels.findIndex((e,n)=>e.element!==null&&(n>=t||to(e.path)!==to(this.openPath.slice(0,n))));if(n!==-1&&this.closeLevels(n),this.exiting.length){let e=this.openKeys();this.exiting.some(t=>e.has(to(t.path)))&&(this.exiting=this.exiting.filter(t=>!e.has(to(t.path))))}}openKeys(){return!this.open||this.disabled?new Set:new Set([[],...this.openPath.map((e,t)=>this.openPath.slice(0,t+1))].map(to))}checkKeys(e,t=new Set){for(let n of e)if(!(`type`in n&&n.type===`separator`)){if(`type`in n&&(n.type===`group`||n.type===`label`)){n.type===`group`&&this.checkKeys(n.items,t);continue}t.has(n.key)&&v(this.constructor.tagName,`duplicate item key "${n.key}": keys must be unique (checkbox / radio state and minerva-select values are keyed by it).`),t.add(n.key),!(`type`in n)&&n.children&&this.checkKeys(n.children,t)}}updated(e){this.syncTrigger(),(e.has(`open`)||e.has(`openPath`)||e.has(`disabled`))&&this.syncLevels()}renderPanels(){let e=this.open&&!this.disabled;if(!e&&this.exiting.length===0)return A;this.itemActions.clear();let t=[];e&&(t.push({key:``,depth:0,path:[],state:`open`}),this.openPath.forEach((e,n)=>{let r=this.openPath.slice(0,n+1);t.push({key:to(r),depth:n+1,path:r,state:`open`})}));let n=new Set(t.map(e=>e.key));for(let e of this.exiting){let r=to(e.path);n.has(r)||(n.add(r),t.push({key:r,depth:e.depth,path:e.path,state:`closed`}))}return yn(t,e=>e.key,e=>this.renderPanelAt(e.depth,e.path,e.state))}renderPanelAt(e,t,n){let r=this.entries,i=e===0?this.rootLabel():void 0;for(let[e,n]of t.entries()){let t=this.findSubmenu(r,n,`${e}:`);if(!t)return A;r=t.children??[],i=eo(t.label)??t.textValue}return this.renderPanel(e,t.at(-1)??``,r,i,n,to(t))}findSubmenu(e,t,n){for(let[r,i]of e.entries()){let e=`${n}${r}`;if(`type`in i){if(i.type===`group`){let n=this.findSubmenu(i.items,t,`${e}.`);if(n)return n}continue}if(i.children?.length&&e===t)return i}return null}renderPanel(e,t,n,r,i,a){let o=e===0?``:`item-${t}`;return j`<div
part="menu"
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
></div>`;case`label`:return j`<div class="label" part="label">${e.label}</div>`;case`group`:{let n=`label-${i.replace(/[:.]/g,`-`)}`;return j`<div role="group" aria-labelledby=${n}>
<div id=${n} class="label" part="label">${e.label}</div>
${this.renderEntries(e.items,t,`${i}.`)}
</div>`}case`checkbox`:return this.renderCheckbox(e,i);case`radio-group`:return this.renderRadioGroup(e,i)}return this.renderAction(e,t,i)})}renderItem(e){let{uid:t,disabled:n=!1,submenu:r}=e;this.itemActions.set(t,e.activate);let i=e.textValue??eo(e.label),a=e.checked===void 0?r?r.open?`open`:`closed`:void 0:e.checked?`checked`:`unchecked`;return j`<div
id=${`item-${t}`}
part="item"
role=${e.role}
tabindex="-1"
class="item"
data-minerva-menu-item=""
data-uid=${t}
data-text-value=${i??A}
data-disabled=${n?``:A}
data-state=${a??A}
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
<span class="text">${e.label}</span>
${e.shortcut?j`<span class="shortcut">${e.shortcut}</span>`:A}
${e.trailing??A}
</div>`}renderAction(e,t,n){if(e.children?.length){let r=this.openPath[t]===n&&!e.disabled;return this.renderItem({uid:n,role:`menuitem`,label:e.label,textValue:e.textValue,icon:e.icon,shortcut:e.shortcut,disabled:e.disabled,submenu:{open:r},trailing:j`<span class="chevron" aria-hidden="true"
>${ke}</span
>`,activate:e=>this.openSubmenu(t,n,e)})}return this.renderItem({uid:n,role:`menuitem`,label:e.label,textValue:e.textValue,icon:e.icon,shortcut:e.shortcut,disabled:e.disabled,activate:()=>this.activateAction(e)})}renderCheckbox(e,t){let n=this.isChecked(e);return this.renderItem({uid:t,role:`menuitemcheckbox`,label:e.label,textValue:e.textValue,shortcut:e.shortcut,disabled:e.disabled,checked:n,indicator:j`<span class="indicator" aria-hidden="true"
>${n?De:A}</span
>`,activate:()=>this.toggleCheckbox(e)})}renderRadioGroup(e,t){let n=this.radioValue(e),r=`label-${t.replace(/[:.]/g,`-`)}`,i=e.label!=null&&e.label!==``;return j`<div
role="group"
aria-labelledby=${i?r:A}
>
${i?j`<div id=${r} class="label" part="label">${e.label}</div>`:A}
${e.items.map((r,i)=>{let a=r.value===n;return this.renderItem({uid:`${t}.${i}`,role:`menuitemradio`,label:r.label,textValue:r.textValue,shortcut:r.shortcut,disabled:r.disabled,checked:a,indicator:j`<span class="indicator" aria-hidden="true"
>${a?j`<span class="dot"></span>`:A}</span
>`,activate:()=>this.chooseRadio(e,r)})})}
</div>`}},I([M({attribute:!1})],io.prototype,`items`,void 0),I([M({type:Boolean,reflect:!0})],io.prototype,`open`,void 0),I([M({reflect:!0})],io.prototype,`size`,void 0),I([M({type:Boolean,attribute:`keep-open`})],io.prototype,`keepOpen`,void 0),I([M({type:Boolean,reflect:!0})],io.prototype,`disabled`,void 0),I([M({type:Boolean,reflect:!0,attribute:`non-modal`})],io.prototype,`nonModal`,void 0),I([M({type:Boolean,attribute:`no-loop`})],io.prototype,`noLoop`,void 0),I([T()],io.prototype,`declarative`,void 0),I([T()],io.prototype,`openPath`,void 0),I([T()],io.prototype,`exiting`,void 0)})))()}function oo(e,t,n){n===null?e.hasAttribute(t)&&e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}var so,co;function lo(){return(lo=e((()=>{f(),Ka(),ao(),N(),O(),vn(),so={mainAxis:6,crossAxis:0},co=class e extends io{constructor(...e){super(...e),this.side=`bottom`,this.align=`end`,this.disabledTrigger=null,this.handleKeyDown=e=>{if(!(this.disabled||e.defaultPrevented||!this.fromTrigger(e)))switch(e.key){case`Enter`:case` `:e.preventDefault(),this.open?this.requestOpenChange(!1,`trigger`):this.openWith(`first`,`keyboard`);break;case`ArrowDown`:e.preventDefault(),this.openWith(`first`,`keyboard`);break;case`ArrowUp`:e.preventDefault(),this.openWith(`last`,`keyboard`)}},this.handleClick=e=>{this.disabled||e.defaultPrevented||!this.fromTrigger(e)||(this.open?this.requestOpenChange(!1,`trigger`):this.openWith(e.detail===0?`first`:`content`,`trigger`))}}static{this.tagName=`minerva-menu`}static{this.dependencies=[Fa,Ia,Q,La,Ra,za]}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}anchorElement(){return this.triggerElement()}rootPlacement(){return Xt(this.side,this.align)}rootOffset(){return so}restoreTarget(){return this.triggerElement()}branches(){return[this.triggerElement()]}rootLabel(){let e=this.getAttribute(`aria-label`);if(e)return e;let t=this.triggerElement();return t?.getAttribute(`aria-label`)??(t?.textContent?.trim()||void 0)}syncTrigger(){let e=this.triggerElement();e&&(oo(e,`aria-haspopup`,`menu`),oo(e,`aria-expanded`,String(this.open)),oo(e,`data-state`,this.open?`open`:`closed`),oo(e,`data-disabled`,this.disabled?``:null),this.disabled&&!e.hasAttribute(`disabled`)?(e.setAttribute(`disabled`,``),this.disabledTrigger=e):!this.disabled&&this.disabledTrigger===e&&(e.removeAttribute(`disabled`),this.disabledTrigger=null))}fromTrigger(e){let t=this.triggerElement();return!!t&&e.composedPath().includes(t)}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`click`,this.handleClick)}firstUpdated(t){super.firstUpdated(t),b&&!this.triggerElement()&&v(e.tagName,`no slot="trigger" element: nothing opens the menu (add e.g. <button slot="trigger">).`)}render(){return j`<slot name="trigger"></slot>${this.renderPanels()}`}},I([M({reflect:!0})],co.prototype,`side`,void 0),I([M({reflect:!0})],co.prototype,`align`,void 0)})))()}var uo,fo,po,mo,ho;function go(){return(go=e((()=>{He(),Ka(),ao(),lo(),N(),vn(),uo=700,fo={mainAxis:2,crossAxis:0},po={mainAxis:4,crossAxis:0},mo=(e,t,n)=>({contextElement:n,getBoundingClientRect:()=>({x:e,y:t,left:e,top:t,right:e,bottom:t,width:0,height:0})}),ho=class extends io{constructor(...e){super(...e),this.position=null,this.restoreTo=null,this.areaPointerEvents=null,this.handleContextMenu=e=>{this.disabled||e.defaultPrevented||!this.inArea(e)||(e.preventDefault(),this.clearLongPress(),this.openAtPoint(e.clientX,e.clientY))},this.handleKeyDown=e=>{if(!(this.disabled||e.defaultPrevented||!this.inArea(e))&&(e.key===`ContextMenu`||e.shiftKey&&e.key===`F10`)){let t=this.area();if(!t)return;e.preventDefault();let n=rn(t)===`rtl`;this.openAt({anchor:t,placement:n?`bottom-end`:`bottom-start`,offset:po})}},this.handlePointerDown=e=>{if(this.disabled||e.pointerType!==`touch`||!this.inArea(e))return;this.clearLongPress();let{clientX:t,clientY:n}=e;this.longPress=setTimeout(()=>{this.longPress=void 0,this.openAtPoint(t,n)},700)},this.handleTouchEnd=e=>{e.pointerType===`touch`&&this.clearLongPress()}}static{this.tagName=`minerva-context-menu`}static{this.dependencies=[Fa,Ia,Q,La,Ra,za]}static{this.styles=[...io.styles,k`
:host(:not([disabled])) ::slotted(*){
-webkit-touch-callout: none;
}
`]}area(){return Array.from(this.children).find(e=>!Ba.includes(e.localName))??null}anchorElement(){return this.position?.anchor??null}rootPlacement(){return this.position?.placement??`right-start`}rootOffset(){return this.position?.offset??fo}restoreTarget(){return this.restoreTo}branches(){return[]}rootLabel(){return this.getAttribute(`aria-label`)??void 0}onRootPointerDownOutside(e){let t=this.area(),n=e.composedPath()[0];e.button===2&&t&&n instanceof Node&&Rn(t,n)&&e.preventDefault()}syncTrigger(){let e=this.area();if(!e)return;oo(e,`data-state`,this.open?`open`:`closed`),oo(e,`data-disabled`,this.disabled?``:null);let t=this.open&&this.isModal&&!this.disabled;t&&this.areaPointerEvents===null?(this.areaPointerEvents=e.style.pointerEvents,e.style.pointerEvents=`auto`):!t&&this.areaPointerEvents!==null&&(e.style.pointerEvents=this.areaPointerEvents,this.areaPointerEvents=null)}openAt(e){let t=this.area();if(t){if(!this.open){let e=mn(document);this.restoreTo=e instanceof HTMLElement&&Rn(t,e)?e:t}if(this.position=e,this.open){this.reanchor();return}this.openWith(`first`,`contextmenu`)}}openAtPoint(e,t){let n=this.area();if(!n)return;let r=rn(n)===`rtl`;this.openAt({anchor:mo(e,t,n),placement:r?`left-start`:`right-start`,offset:fo})}inArea(e){let t=this.area(),n=e.composedPath()[0];return!!t&&n instanceof Node&&Rn(t,n)}clearLongPress(){clearTimeout(this.longPress),this.longPress=void 0}connectedCallback(){super.connectedCallback(),this.addEventListener(`contextmenu`,this.handleContextMenu),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`pointerdown`,this.handlePointerDown),this.addEventListener(`pointermove`,this.handleTouchEnd),this.addEventListener(`pointerup`,this.handleTouchEnd),this.addEventListener(`pointercancel`,this.handleTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.clearLongPress(),this.removeEventListener(`contextmenu`,this.handleContextMenu),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`pointerdown`,this.handlePointerDown),this.removeEventListener(`pointermove`,this.handleTouchEnd),this.removeEventListener(`pointerup`,this.handleTouchEnd),this.removeEventListener(`pointercancel`,this.handleTouchEnd)}render(){return j`<slot></slot>${this.renderPanels()}`}}})))()}function _o(e){return xo.add(e),!So&&typeof MutationObserver<`u`&&(So=new MutationObserver(()=>{for(let e of[...xo])e()}),So.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`],subtree:!0})),()=>{xo.delete(e),xo.size===0&&(So?.disconnect(),So=null)}}var vo,yo,bo,xo,So,$;function Co(){return(Co=e((()=>{f(),u(),He(),g(),y(),w(),jt(),Br(),ir(),ht(),N(),O(),gn(),dn(),vo=(e,t)=>Number.isFinite(e)&&e>0?e:t,yo=e=>e===`dark`||e===`github-dark`?`dark`:e===`light`?`light`:void 0,bo=e=>typeof e?.editor?.create==`function`,xo=new Set,So=null,$=class e extends ut{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.language=`plaintext`,this.label=``,this.height=420,this.minHeight=160,this.maxHeight=800,this.loadTimeout=1e4,this.status=`loading`,this.scopeTheme=`light`,this.locale=new d(this),this.editor=null,this.engine=null,this.container=null,this.subscriptions=[],this.applying=!1,this.edited=!1,this.dirty=!1,this.unobserveTheme=null,this.started=!1}static{this.tagName=`minerva-code-editor`}static{this.dependencies=[H,dr]}static{this.styles=[h,k`
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
`,p(Dt)]}get resolvedTheme(){return this.theme===`dark`||this.theme===`light`?this.theme:this.scopeTheme}focus(e){this.editor?this.editor.focus():this.fallback?.focus(e)}retry(){this.load()}getFormValue(){return this.value}getValidity(){return this.required&&!this.value?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.fallback??null}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}connectedCallback(){super.connectedCallback(),this.syncScopeTheme(),this.unobserveTheme=_o(()=>this.syncScopeTheme()),this.started&&this.load()}disconnectedCallback(){super.disconnectedCallback(),this.unobserveTheme?.(),this.unobserveTheme=null,this.teardown()}syncScopeTheme(){let e=Lt(this,`[data-theme]`);this.scopeTheme=yo(e?.getAttribute(`data-theme`))??`light`}get monacoTheme(){return this.resolvedTheme===`dark`?`vs-dark`:`vs`}teardown(){clearTimeout(this.timer),this.timer=void 0;for(let e of this.subscriptions)e.dispose();this.subscriptions=[];try{this.editor?.dispose()}catch{}this.editor=null,this.engine=null,this.container?.remove(),this.container=null}fail(){let e=this.status===`error`;this.teardown(),this.status=`error`,e||this.emit(`minerva-error`)}load(){this.teardown(),this.status=`loading`,this.isConnected&&(this.timer=setTimeout(()=>this.fail(),this.loadTimeout),this.monaco!==void 0&&this.mount())}mount(){let t=this.monaco;if(!bo(t)){b&&v(e.tagName,'`monaco` is not a Monaco engine (expected `import * as monaco from "monaco-editor"`); showing the textarea fallback.'),this.fail();return}let n=document.createElement(`div`);n.slot=`editor`,n.setAttribute(`data-minerva-code-editor`,``),this.append(n),this.container=n;try{t.editor.setTheme(this.monacoTheme);let e=t.editor.create(n,{value:this.value,language:this.language,theme:this.monacoTheme,readOnly:this.isDisabled,domReadOnly:this.isDisabled,ariaLabel:this.label,automaticLayout:!0,minimap:{enabled:!1},wordWrap:`on`,scrollBeyondLastLine:!1});this.editor=e,this.engine=t,this.subscriptions.push(e.onDidChangeModelContent(()=>this.handleEdit()),e.onDidBlurEditorText(()=>this.commit()))}catch{this.fail();return}clearTimeout(this.timer),this.timer=void 0,this.status=`mounted`}handleEdit(){let e=this.editor;e&&!this.applying&&(this.isDisabled||(this.value=e.getValue(),this.dirty=!0,this.edited=!0,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.emit(`minerva-input`,{value:this.value})))}commit(){this.edited&&(this.edited=!1,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value}))}handleFallbackInput(e){this.isDisabled||(this.value=e.target.value,this.dirty=!0,this.edited=!0,this.emit(`minerva-input`,{value:this.value}))}applyValue(){let e=this.editor;if(e&&e.getValue()!==this.value){this.applying=!0;try{let t=e.getModel();this.isDisabled||!t?e.setValue(this.value):(e.executeEdits(``,[{range:t.getFullModelRange(),text:this.value,forceMoveMarkers:!0}]),e.pushUndoStop())}finally{this.applying=!1}}}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue)}updated(t){if(super.updated(t),!this.started){this.started=!0,b&&!this.label&&v(e.tagName,`set label: it is the visible label and the accessible name of the editor.`),this.load();return}if(t.has(`monaco`)&&t.get(`monaco`)!==void 0){this.load();return}t.has(`monaco`)&&this.monaco!==void 0&&!this.editor&&(this.status===`loading`&&this.timer!==void 0?this.mount():this.status===`error`&&this.load());let n=this.editor,r=this.engine;if(n&&r)try{t.has(`value`)&&this.applyValue(),t.has(`language`)&&r.editor.setModelLanguage(n.getModel(),this.language),(t.has(`disabled`)||t.has(`formDisabled`)||t.has(`label`))&&n.updateOptions({readOnly:this.isDisabled,domReadOnly:this.isDisabled,ariaLabel:this.label}),(t.has(`theme`)||t.has(`scopeTheme`))&&r.editor.setTheme(this.monacoTheme)}catch{this.fail()}}render(){let e=vo(this.minHeight,160),t=Math.max(e,vo(this.maxHeight,800)),n=Math.min(t,Math.max(e,vo(this.height,420))),r=this.locale.t,i=this.status;return j`<div
part="base"
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
${i===`error`?j`<div class="error">
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
                      >${be}</span
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
                  .value=${Wn(this.value)}
                  ?disabled=${this.isDisabled}
                  @input=${this.handleFallbackInput}
                  @change=${()=>this.commit()}
                ></textarea>`:j`${i===`loading`?j`<div class="loading" role="status">
<minerva-progress
size="small"
aria-label=${this.loadingLabel??r(`monacoCodeEditor.loading`)}
></minerva-progress>
</div>`:A}<slot name="editor"></slot>`}
</div>
</div>`}},I([M({attribute:!1})],$.prototype,`monaco`,void 0),I([M({attribute:!1})],$.prototype,`value`,void 0),I([M({attribute:`value`})],$.prototype,`defaultValue`,void 0),I([M({reflect:!0})],$.prototype,`language`,void 0),I([M()],$.prototype,`label`,void 0),I([M({type:Number})],$.prototype,`height`,void 0),I([M({type:Number,attribute:`min-height`})],$.prototype,`minHeight`,void 0),I([M({type:Number,attribute:`max-height`})],$.prototype,`maxHeight`,void 0),I([M({reflect:!0})],$.prototype,`theme`,void 0),I([M({type:Number,attribute:`load-timeout`})],$.prototype,`loadTimeout`,void 0),I([M({attribute:`unavailable-text`})],$.prototype,`unavailableText`,void 0),I([M({attribute:`retry-text`})],$.prototype,`retryText`,void 0),I([M({attribute:`retry-label`})],$.prototype,`retryLabel`,void 0),I([M({attribute:`loading-label`})],$.prototype,`loadingLabel`,void 0),I([T()],$.prototype,`status`,void 0),I([T()],$.prototype,`scopeTheme`,void 0),I([D(`textarea`)],$.prototype,`fallback`,void 0)})))()}export{Pi as $,X as A,Ar as At,Qi as B,hr as Bt,Ea as C,Zr as Ct,Ca as D,Rr as Dt,wa as E,V as Et,fa as F,z as Ft,Gi as G,J as H,ia as I,Sr as It,Vi as J,Hi as K,ra as L,R as Lt,Y as M,Or as Mt,ha as N,Dr as Nt,Z as O,Pr as Ot,da as P,kr as Pt,Fi as Q,na as R,br as Rt,ka as S,$r as St,Da as T,H as Tt,Ji as U,$i as V,Ki as W,Bi as X,zi as Y,q as Z,Ha as _,Yr as _t,ho as a,bi as at,Na as b,qr as bt,co as c,hi as ct,Fa as d,pi as dt,Mi as et,La as f,li as ft,Ia as g,Qr as gt,Ra as h,U as ht,uo as i,K as it,_a as j,jr as jt,ba as k,Nr as kt,qa as l,G as lt,Ka as m,si as mt,Co as n,Ni as nt,lo as o,yi as ot,Ba as p,W as pt,Ui as q,go as r,Ti as rt,oo as s,vi as st,$ as t,xi as tt,ao as u,fi as ut,Q as v,ei as vt,Ta as w,Br as wt,Aa as x,ti as xt,za as y,Xr as yt,ta as z,L as zt};