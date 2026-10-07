import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{$ as t,$n as n,$t as r,An as i,At as a,Bt as o,Cn as s,Ct as ee,Dn as te,Dt as ne,Et as re,Fn as ie,Ft as ae,Gn as c,Gt as oe,Hn as se,Ht as ce,In as le,It as ue,Jn as de,Jt as fe,Kt as pe,Ln as me,Lt as he,Nn as ge,Nt as _e,On as ve,Ot as ye,Pn as be,Pt as xe,Q as Se,Qt as Ce,Rn as l,Rt as we,Sn as Te,St as Ee,Tn as De,Tt as Oe,Un as ke,Ut as Ae,Vn as je,Vt as Me,Wn as Ne,Wt as Pe,X as Fe,Xt as Ie,Y as Le,Yn as Re,Yt as ze,Z as Be,Zt as Ve,_r as u,_t as He,an as Ue,ar as d,at as We,bn as Ge,bt as Ke,cn as qe,cr as f,ct as Je,dn as Ye,dr as p,dt as Xe,en as Ze,er as m,et as Qe,fn as $e,fr as et,ft as tt,gn as nt,gr as h,gt as rt,hn as it,hr as at,ht as ot,in as st,ir as g,it as ct,jn as lt,kt as ut,ln as dt,lr as _,lt as ft,mn as pt,mr as mt,mt as ht,nn as gt,nr as _t,on as vt,or as v,ot as yt,pn as bt,pt as xt,qt as St,rn as Ct,rr as wt,rt as Tt,sn as Et,sr as y,st as Dt,tn as Ot,tr as b,un as kt,ur as x,ut as At,vt as jt,wn as Mt,wt as Nt,xn as Pt,xt as Ft,yn as It,yt as Lt,zn as Rt,zt}from"./minerva-web-components-DtfX8X6J.js";import{$ as Bt,A as S,At as Vt,B as C,Bt as Ht,C as w,D as T,E,Ft as Ut,H as D,I as O,It as Wt,L as k,Lt as Gt,M as A,Mt as Kt,N as j,Ot as qt,Pt as Jt,Rt as Yt,S as M,St as Xt,Tt as Zt,_ as Qt,a as $t,at as en,b as tn,c as nn,d as rn,dt as an,et as on,g as sn,h as cn,i as ln,l as un,lt as dn,n as fn,o as pn,p as mn,r as hn,rt as gn,t as _n,tt as vn,u as yn,ut as bn,vt as xn,w as N,wt as Sn,xt as Cn,y as wn,yt as Tn,z as En}from"./minerva-web-components-U-_2I7Ao.js";import{t as P}from"./minerva-web-components-DB7tn7hP.js";import{a as Dn,c as On,d as kn,f as An,h as jn,l as Mn,m as Nn,o as Pn,p as Fn,s as In,u as Ln}from"./minerva-web-components-BkNADi7Q.js";import{Dt as Rn,Et as zn,Ft as Bn,It as Vn,Mt as Hn,Nt as Un,Ot as Wn,Pt as Gn,kt as Kn}from"./minerva-web-components-BXwcqGHF.js";var qn,Jn,F;function Yn(){return(Yn=e((()=>{wt(),h(),m(),l(),_(),y(),d(),j(),E(),w(),tn(),qt(),qn={info:te,success:nt,warning:ve,danger:Re},Jn=[`slideIn`,`fadeIn`,`bounce`,`zoom`],F=class e extends f{constructor(...e){super(...e),this.color=`info`,this.variant=`subtle`,this.size=`medium`,this.heading=``,this.hideIcon=!1,this.closable=!1,this.noAnimation=!1,this.animationName=`slideIn`,this.banner=!1,this.elevation=!1,this.square=!1,this.collapsible=!1,this.collapsed=!1,this.locale=new x(this),this.aria=new u(this),this.slots=new g(this)}static{this.tagName=`minerva-alert`}static{this.styles=[v,C`
      :host {
        display: block;
      }
      .icon svg,
      .expandButton svg,
      .closeButton svg {
        display: block;
      }
    `,D(_t)]}get hasHeading(){return!!this.heading||this.slots.test(`heading`)}handleExpand(){let e=this.collapsed;this.emit(`minerva-expanded-change`,{expanded:e},{cancelable:!0})&&(this.collapsed=!e)}handleClose(){let e=this.adjacentTabbable(),t=this.parentElement;this.emit(`minerva-close`,{},{cancelable:!0})&&(this.isFocusInsideOrLost()&&this.moveFocusOut(e,t),this.hidden=!0)}isFocusInsideOrLost(){let e=this.ownerDocument,t=Zt(e);return!t||t===e.body||!t.isConnected||Xt(this,t)}adjacentTabbable(){let e=Wt(this.ownerDocument.body),t=e.map((e,t)=>Xt(this,e)?t:-1).filter(e=>e>=0);if(!t.length)return null;let n=e=>!Xt(this,e)&&Tn(e);return e.slice(t[t.length-1]+1).find(n)??e.slice(0,t[0]).filter(n).pop()??null}moveFocusOut(e,t){let n=typeof this.returnFocus==`function`?this.returnFocus():this.returnFocus;n?.isConnected&&Vt(n)||e?.isConnected&&Vt(e)||this.focusContainer(t)}focusContainer(e){let t=this.ownerDocument;if(e?.isConnected){for(let n=e;n&&n!==t.body;n=n.parentElement)if(n.hasAttribute(`tabindex`)&&Vt(n))return;e!==t.body&&e!==t.documentElement&&(e.setAttribute(`tabindex`,`-1`),e.addEventListener(`blur`,()=>{e.getAttribute(`tabindex`)===`-1`&&e.removeAttribute(`tabindex`)},{once:!0}),Vt(e,{preventScroll:!0}))}}updated(){n&&this.collapsible&&!this.hasHeading&&b(e.tagName,`collapsible needs a heading (the toggle lives in the title): set heading or fill the heading slot.`)}render(){let e=this.locale.t,t=this.hasHeading,n=this.collapsible&&t,r=!this.collapsed,i=this.slots.test(`[default]`),a=!this.noAnimation,o=this.borderRadius,s=this.alertRole??(this.color===`danger`||this.color===`warning`?`alert`:`status`);return k`<div
      part="base"
      class=${N({alert:!0,[this.color]:!0,[this.variant]:!0,[this.size]:!0,withIcon:!this.hideIcon,withTitle:t,banner:this.banner,withAnimation:a,[`animation-${this.animationName}`]:a&&Jn.includes(this.animationName),withElevation:this.elevation,rounded:!this.square,expanded:r,collapsible:n})}
      style=${M({borderRadius:o==null||o===``?void 0:/^\d+(\.\d+)?$/.test(String(o))?`${o}px`:String(o)})}
      role=${s}
      aria-label=${this.aria.label??O}
    >
      ${this.hideIcon?O:k`<span
              part="icon"
              class="icon"
              role="img"
              aria-label=${this.iconLabel??e(`alert.icon.${this.color}`)}
              ><slot name="icon">${qn[this.color]??qn.info}</slot></span
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
                        ${r?Ne:be}
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
              <slot name="close-icon">${c}</slot>
            </button>`:O}
    </div>`}},P([A({reflect:!0})],F.prototype,`color`,void 0),P([A({reflect:!0})],F.prototype,`variant`,void 0),P([A({reflect:!0})],F.prototype,`size`,void 0),P([A()],F.prototype,`heading`,void 0),P([A({type:Boolean,attribute:`hide-icon`})],F.prototype,`hideIcon`,void 0),P([A({type:Boolean,reflect:!0})],F.prototype,`closable`,void 0),P([A({type:Boolean,attribute:`no-animation`})],F.prototype,`noAnimation`,void 0),P([A({attribute:`animation-name`})],F.prototype,`animationName`,void 0),P([A({type:Boolean,reflect:!0})],F.prototype,`banner`,void 0),P([A({type:Boolean,reflect:!0})],F.prototype,`elevation`,void 0),P([A({type:Boolean,reflect:!0})],F.prototype,`square`,void 0),P([A({attribute:`border-radius`})],F.prototype,`borderRadius`,void 0),P([A({type:Boolean,reflect:!0})],F.prototype,`collapsible`,void 0),P([A({type:Boolean,reflect:!0})],F.prototype,`collapsed`,void 0),P([A({attribute:`close-label`})],F.prototype,`closeLabel`,void 0),P([A({attribute:`expand-label`})],F.prototype,`expandLabel`,void 0),P([A({attribute:`collapse-label`})],F.prototype,`collapseLabel`,void 0),P([A({attribute:`icon-label`})],F.prototype,`iconLabel`,void 0),P([A({attribute:`alert-role`})],F.prototype,`alertRole`,void 0),P([A({attribute:!1})],F.prototype,`returnFocus`,void 0)})))()}var Xn,Zn,Qn,$n,I;function er(){return(er=e((()=>{m(),l(),_(),y(),d(),$e(),kt(),Nn(),Ln(),On(),Dn(),j(),E(),w(),qt(),Xn=[`expanded`,`compact`,`floating`],Zn=`(max-width: 768px)`,Qn=()=>typeof window<`u`&&typeof window.matchMedia==`function`?window.matchMedia(Zn):null,$n={iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,control:!0},I=class e extends f{constructor(...e){super(...e),this.brand=``,this.sidebarMode=`expanded`,this.noSkipLink=!1,this.collapsed=!1,this.mobile=!1,this.drawerOpen=!1,this.hovered=!1,this.keyboardFocus=!1,this.locale=new x(this),this.slots=new g(this),this.modal=new Pn(this),this.focusScope=new kn(this,()=>({trapped:!0,loop:!0,restoreFocus:!1})),this.layer=new jn(this,()=>({disableOutsidePointerEvents:!0,branches:()=>[this.headerToggle],onFocusOutside:e=>e.preventDefault(),onDismiss:()=>this.requestDrawer(!1)})),this.query=null,this.drawerActive=!1,this.handleMediaChange=()=>this.syncMobile()}static{this.tagName=`minerva-app-shell`}static{this.styles=[v,Mn,C`
      :host {
        display: block;
      }
    `,D(dt),D(Ye)]}openNavigation(){this.mobile&&(this.drawerOpen=!0)}closeNavigation(){this.drawerOpen=!1}expandNavigation(){this.sidebarMode=`expanded`}focusMain(){this.main?.focus()}connectedCallback(){super.connectedCallback(),this.query=Qn(),this.query?.addEventListener(`change`,this.handleMediaChange),this.syncMobile()}disconnectedCallback(){super.disconnectedCallback(),this.query?.removeEventListener(`change`,this.handleMediaChange),this.query=null,this.deactivateDrawer()}syncMobile(){let e=!!this.query?.matches;e!==this.mobile&&(this.mobile=e,this.hovered=!1,this.keyboardFocus=!1,this.drawerOpen=!1)}get mode(){return Xn.includes(this.sidebarMode)?this.sidebarMode:`expanded`}setMode(e){e!==this.mode&&this.emit(`minerva-sidebar-mode-change`,{mode:e},{cancelable:!0})&&(this.sidebarMode=e)}requestDrawer(e){e!==this.drawerOpen&&this.emit(`minerva-open-change`,{open:e},{cancelable:!0})&&(this.drawerOpen=e)}willUpdate(e){e.has(`navigationKey`)&&e.get(`navigationKey`)!==void 0&&(this.drawerOpen=!1),this.mobile||(this.drawerOpen=!1),this.collapsed=!this.mobile&&this.mode!==`expanded`&&(this.mode!==`floating`||!this.hovered&&!this.keyboardFocus)}updated(t){let r=this.mobile&&this.drawerOpen;r&&!this.drawerActive&&this.drawer?(this.drawerActive=!0,et(this.overlay),et(this.drawer),this.modal.activate(this),this.layer.activate(this.drawer),this.focusScope.activate(this.drawer)):!r&&this.drawerActive&&(this.deactivateDrawer(),this.headerToggle?.focus()),n&&t.has(`sidebarMode`)&&!Xn.includes(this.sidebarMode)&&b(e.tagName,`unknown sidebar-mode="${this.sidebarMode}" (expected ${Xn.join(`, `)}); using "expanded".`),n&&!this.slots.test(`navigation`)&&b(e.tagName,`put the navigation in the "navigation" slot (e.g. <nav slot="navigation">).`)}deactivateDrawer(){this.drawerActive&&(this.drawerActive=!1,this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate(),p(this.drawer),p(this.overlay))}label(e,t){return e??this.locale.t(`appShell.${t}`)}handleSkip(e){e.preventDefault(),this.focusMain()}handleSidebarFocusIn(e){let t=e.composedPath()[0],n;try{n=!!t?.matches?.(`:focus-visible`)}catch{n=!1}n&&(this.keyboardFocus=!0)}handleSidebarFocusOut(e){let t=e.relatedTarget;(!t||!this.sidebar||!Xt(this.sidebar,t))&&(this.keyboardFocus=!1)}renderHeaderToggle(){return this.mobile?k`<button
        type="button"
        class=${N($n)}
        aria-label=${this.label(this.openNavigationLabel,`openNavigation`)}
        aria-haspopup="dialog"
        aria-expanded=${String(this.drawerOpen)}
        aria-controls=${this.drawerOpen?`drawer`:O}
        @click=${()=>this.requestDrawer(!this.drawerOpen)}
      >
        ${s}
      </button>`:this.renderCollapseControl()}renderCollapseControl(){let e=this.mode!==`expanded`;return k`<button
      type="button"
      class=${N($n)}
      aria-label=${e?this.label(this.expandLabel,`expand`):this.label(this.collapseLabel,`collapse`)}
      aria-controls="sidebar"
      aria-expanded=${String(!this.collapsed)}
      @click=${()=>this.setMode(e?`expanded`:`compact`)}
    >
      ${e?s:Te}
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
          class=${N($n)}
          aria-pressed=${String(e)}
          aria-label=${e?this.label(this.disableFloatingLabel,`disableFloating`):this.label(this.enableFloatingLabel,`enableFloating`)}
          @click=${()=>this.setMode(e?`compact`:`floating`)}
        >
          ${e?It:De}
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
          ${c}
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
      ${this.mobile&&this.drawerOpen?this.renderDrawer():O}`}},P([A()],I.prototype,`brand`,void 0),P([A({attribute:`sidebar-mode`,reflect:!0})],I.prototype,`sidebarMode`,void 0),P([A({attribute:`navigation-label`})],I.prototype,`navigationLabel`,void 0),P([A({attribute:`navigation-key`})],I.prototype,`navigationKey`,void 0),P([A({attribute:`skip-link`})],I.prototype,`skipLink`,void 0),P([A({type:Boolean,attribute:`no-skip-link`})],I.prototype,`noSkipLink`,void 0),P([A({attribute:`expand-label`})],I.prototype,`expandLabel`,void 0),P([A({attribute:`collapse-label`})],I.prototype,`collapseLabel`,void 0),P([A({attribute:`enable-floating-label`})],I.prototype,`enableFloatingLabel`,void 0),P([A({attribute:`disable-floating-label`})],I.prototype,`disableFloatingLabel`,void 0),P([A({attribute:`open-navigation-label`})],I.prototype,`openNavigationLabel`,void 0),P([A({attribute:`close-navigation-label`})],I.prototype,`closeNavigationLabel`,void 0),P([A({type:Boolean,reflect:!0})],I.prototype,`collapsed`,void 0),P([A({type:Boolean,reflect:!0})],I.prototype,`mobile`,void 0),P([S()],I.prototype,`drawerOpen`,void 0),P([S()],I.prototype,`hovered`,void 0),P([S()],I.prototype,`keyboardFocus`,void 0),P([T(`.header button`)],I.prototype,`headerToggle`,void 0),P([T(`.drawer`)],I.prototype,`drawer`,void 0),P([T(`.overlay`)],I.prototype,`overlay`,void 0),P([T(`main`)],I.prototype,`main`,void 0),P([T(`aside`)],I.prototype,`sidebar`,void 0)})))()}var tr,L;function nr(){return(nr=e((()=>{h(),m(),l(),_(),y(),d(),On(),st(),gt(),vt(),j(),E(),w(),tn(),Qt(),tr={top:`top-start`,bottom:`bottom-start`,left:`left-start`,right:`right-start`},L=class e extends Ue{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.options=[],this.open=!1,this.label=``,this.placeholder=``,this.mode=`basic`,this.size=`medium`,this.variant=`outline`,this.invalid=!1,this.readonly=!1,this.loading=!1,this.placement=`bottom`,this.offset={x:0,y:4},this.noAnimation=!1,this.autoHighlight=!1,this.noFillOnSelect=!1,this.groupMode=`first`,this.focusedIndex=-1,this.hoveredIndex=-1,this.locale=new x(this),this.aria=new u(this,()=>this.labels),this.slots=new g(this),this.floating=new In(this,()=>{let e=this.placement===`top`||this.placement===`bottom`,t=this.offset??{x:0,y:4};return{anchor:()=>this.container,floating:()=>this.popup,placement:tr[this.placement]??`bottom-start`,offset:{mainAxis:e?t.y:t.x,crossAxis:e?t.x:t.y},matchAnchorWidth:`min`,branches:()=>[this.container],onEscapeKeyDown:e=>{(this.composing||e.isComposing)&&e.preventDefault()},onDismiss:()=>this.close(),returnFocusOnEscape:()=>this.input}}),this.composing=!1,this.dirty=!1}static{this.tagName=`minerva-autocomplete`}static{this.shadowRootOptions={...Ue.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[v,Mn,D(Ct),D(Ot),C`
      :host {
        display: block;
        width: 100%;
      }
      /* Input's .disabled shares the class name of disabled options */
      .optionItem.disabled:not(.active):not(.highlight) {
        background-color: transparent;
      }
      .popup .dropdown .optionList .loading svg {
        font-size: 1.5em;
        animation: minerva-autocomplete-spin 1s linear infinite;
      }
      .empty svg {
        display: block;
        margin: 0 auto var(--space-2);
        font-size: 40px;
        color: var(--text-muted-color);
      }
      @keyframes minerva-autocomplete-spin {
        to {
          transform: rotate(360deg);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .popup .dropdown .optionList .loading svg {
          animation: none;
        }
      }
    `]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get blocked(){return this.isDisabled||this.readonly}get shown(){return this.open&&!this.blocked}getFormValue(){return this.value}getValidity(){return this.required&&this.value===``?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.focusedIndex=-1}restoreFormState(e){typeof e==`string`&&(this.value=e)}get processedOptions(){let e=this.value,t=e.toLowerCase(),n=(this.options??[]).filter(n=>this.filterOption?this.filterOption(e,n):n.label.toLowerCase().includes(t));return this.sortOption?[...n].sort(this.sortOption):n}groupOptions(e){let t=this.groupBy;if(!t)return null;if(this.groupMode===`adjacent`){let n=[];for(let r of e){let e=t(r),i=n[n.length-1];i&&i[0]===e?i[1].push(r):n.push([e,[r]])}return n}let n=new Map;for(let r of e){let e=t(r),i=n.get(e);i?i.push(r):n.set(e,[r])}return Array.from(n.entries())}get navigableOptions(){let e=this.processedOptions,t=this.groupOptions(e);return t?t.flatMap(([,e])=>e):e}activeIndex(e){return this.focusedIndex>=0?this.focusedIndex:this.autoHighlight&&this.shown?e.findIndex(e=>!e.disabled):-1}requestOpen(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}openDropdown(){this.blocked||this.requestOpen(!0)}close(){this.requestOpen(!1),this.focusedIndex=-1}setText(e,t){e!==this.value&&(this.value=e,this.emit(`minerva-input`,{value:e}),t&&this.emit(`minerva-change`,{value:e}))}moveFocus(e){let t=this.navigableOptions,n=t.length;if(n===0)return;let r=this.activeIndex(t),i=r>=0?r:e===1?-1:n;for(let r=0;r<n;r+=1)if(i=(i+e+n)%n,!t[i].disabled){this.focusedIndex=i;return}}selectOption(e){e.disabled||(this.noFillOnSelect||this.setText(e.label,!0),this.close(),this.emit(`minerva-select`,{value:e.value,option:e}))}handleKeyDown(e){if(!(this.blocked||this.composing||e.isComposing||e.keyCode===229))switch(e.key){case`ArrowDown`:case`ArrowUp`:e.preventDefault(),this.open||this.openDropdown(),this.moveFocus(e.key===`ArrowDown`?1:-1);break;case`Enter`:{let t=this.navigableOptions,n=this.shown?t[this.activeIndex(t)]:void 0,r=this.value.trim();n?(e.preventDefault(),this.selectOption(n)):r&&(e.preventDefault(),this.emit(`minerva-submit`,{value:r}),this.close());break}case`Escape`:!this.shown&&!this.floating.isOpen&&this.value!==``&&(e.preventDefault(),this.setText(``,!0),this.focusedIndex=-1)}}handleInput(){this.setText(this.input.value,!1),this.focusedIndex=-1,this.openDropdown()}handleChange(){this.value=this.input.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}handleBlur(e){let t=e.relatedTarget;t&&(this.popup?.contains(t)||this.container?.contains(t))||this.close()}handleOptionClick(e){e.disabled||this.composing||(this.selectOption(e),this.input?.focus())}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.value=this.defaultValue),this.open&&this.blocked&&(this.open=!1,this.focusedIndex=-1)}updated(t){if(super.updated(t),this.floating.sync(this.shown),t.has(`focusedIndex`)&&this.focusedIndex>=0&&this.shadowRoot?.getElementById(`option-${this.focusedIndex}`)?.scrollIntoView?.({block:`nearest`}),n&&t.has(`options`)){let t=new Set;for(let n of this.options??[]){if(t.has(n.value)){b(e.tagName,`several options have the value "${n.value}"; option values must be unique.`);break}t.add(n.value)}}}renderOptionContent(e){return this.mode===`custom`&&this.renderOption?this.renderOption(e):k`<div class="basicOption">
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
          >${Pt}</span
        >
      </div>`;let t=this.processedOptions;if(t.length===0)return k`<div role="presentation" class="empty" part="empty">
        ${this.renderEmpty?.()||k`${Ge}<span>${e(`empty.description`)}</span>`}
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
          .value=${wn(this.value)}
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
    </div>`}},P([A({attribute:!1})],L.prototype,`value`,void 0),P([A({attribute:`value`})],L.prototype,`defaultValue`,void 0),P([A({attribute:!1})],L.prototype,`options`,void 0),P([A({type:Boolean,reflect:!0})],L.prototype,`open`,void 0),P([A()],L.prototype,`label`,void 0),P([A()],L.prototype,`placeholder`,void 0),P([A({reflect:!0})],L.prototype,`mode`,void 0),P([A({reflect:!0})],L.prototype,`size`,void 0),P([A({reflect:!0})],L.prototype,`variant`,void 0),P([A({type:Boolean,reflect:!0})],L.prototype,`invalid`,void 0),P([A({type:Boolean,reflect:!0})],L.prototype,`readonly`,void 0),P([A({type:Boolean,reflect:!0})],L.prototype,`loading`,void 0),P([A({reflect:!0})],L.prototype,`placement`,void 0),P([A({attribute:!1})],L.prototype,`offset`,void 0),P([A({type:Boolean,attribute:`no-animation`})],L.prototype,`noAnimation`,void 0),P([A({type:Boolean,attribute:`auto-highlight`})],L.prototype,`autoHighlight`,void 0),P([A({type:Boolean,attribute:`no-fill-on-select`})],L.prototype,`noFillOnSelect`,void 0),P([A({attribute:`group-mode`})],L.prototype,`groupMode`,void 0),P([A({attribute:!1})],L.prototype,`filterOption`,void 0),P([A({attribute:!1})],L.prototype,`sortOption`,void 0),P([A({attribute:!1})],L.prototype,`groupBy`,void 0),P([A({attribute:!1})],L.prototype,`renderOption`,void 0),P([A({attribute:!1})],L.prototype,`renderEmpty`,void 0),P([S()],L.prototype,`focusedIndex`,void 0),P([S()],L.prototype,`hoveredIndex`,void 0),P([T(`input`)],L.prototype,`input`,void 0),P([T(`.autoComplete`)],L.prototype,`container`,void 0),P([T(`.popup`)],L.prototype,`popup`,void 0)})))()}function rr(e){let t=e?.trim()??``;return t?ar.test(t[0])?t[0]:t.split(/\s+/).slice(0,2).map(e=>e[0].toUpperCase()).join(``):``}var ir,ar,or,sr,cr;function lr(){return(lr=e((()=>{h(),m(),_(),y(),d(),Ze(),Ce(),j(),E(),w(),tn(),ir=[`xsmall`,`small`,`medium`,`large`,`xlarge`,`xxlarge`],ar=/[㐀-鿿豈-﫿]/,or={fromAttribute:e=>e&&/^\d+(\.\d+)?$/.test(e)?Number(e):e??`medium`,toAttribute:e=>String(e)},sr=class e extends f{constructor(...e){super(...e),this.name=``,this.shape=`circle`,this.size=`medium`,this.stacked=!1,this.locale=new x(this),this.aria=new u(this),this.slots=new g(this)}static{this.tagName=`minerva-avatar`}static{this.styles=[v,C`
      :host {
        display: inline-block;
        flex-shrink: 0;
        vertical-align: middle;
        line-height: 0;
      }
      .avatarText {
        line-height: 1;
      }
    `,D(r)]}updated(t){n&&t.has(`size`)&&typeof this.size!=`number`&&!ir.includes(this.size)&&b(e.tagName,`unknown size "${this.size}": use a preset (${ir.join(`, `)}) or a number of pixels.`)}render(){let e=!!this.src&&this.failedSrc!==this.src,t=this.aria.label??(this.name||this.locale.t(`avatar.default`)),n=typeof this.size==`number`,r=N({avatar:!0,[this.shape]:!0,[String(this.size)]:!n,stacked:this.stacked}),i=M(n?{"--avatar-size":`${this.size}px`,width:`${this.size}px`,height:`${this.size}px`}:{});if(e)return k`<span part="base" class=${r} style=${i}
        ><img
          part="image"
          class="avatarImg"
          alt=${this.alt??t}
          src=${this.src}
          draggable="false"
          @error=${()=>this.failedSrc=this.src}
      /></span>`;let a=rr(this.name),o=this.slots.test(`fallback`)?k`<slot name="fallback"></slot>`:a||k`<slot></slot>`;return k`<span
      part="base"
      role="img"
      aria-label=${t}
      class=${r}
      style=${i}
      ><span part="text" class="avatarText" aria-hidden="true"
        >${o}</span
      ></span
    >`}},P([A()],sr.prototype,`src`,void 0),P([A()],sr.prototype,`name`,void 0),P([A()],sr.prototype,`alt`,void 0),P([A({reflect:!0})],sr.prototype,`shape`,void 0),P([A({reflect:!0,converter:or})],sr.prototype,`size`,void 0),P([A({type:Boolean,reflect:!0})],sr.prototype,`stacked`,void 0),P([S()],sr.prototype,`failedSrc`,void 0),cr=class e extends f{constructor(...e){super(...e),this.locale=new x(this),this.aria=new u(this),this.slots=new g(this)}static{this.tagName=`minerva-avatar-group`}static{this.shadowRootOptions={...f.shadowRootOptions,slotAssignment:`manual`}}static{this.styles=[v,C`
      :host {
        display: flex;
      }
      .avatarGroup {
        flex: 1 1 auto;
        min-width: 0;
      }
    `,D(Ve)]}visibleAvatars(){let e=Array.from(this.children);return this.max===void 0||this.max===null?e:e.slice(0,Math.max(0,this.max))}updated(t){let r=this.visibleAvatars();Array.from(this.renderRoot.querySelectorAll(`slot[data-item]`)).forEach((e,t)=>{let n=r[t];n&&typeof e.assign==`function`&&e.assign(n)}),n&&t.has(`max`)&&this.max!==void 0&&this.max!==null&&!(Number.isInteger(this.max)&&this.max>=0)&&b(e.tagName,`max must be a non-negative integer (got ${this.max}).`)}render(){this.slots;let e=this.children.length,t=this.visibleAvatars(),n=(Number(this.count)||0)+e-t.length,r=this.aria.label??(n>0?this.locale.t(`avatar.groupWithMore`,{count:n}):this.locale.t(`avatar.group`));return k`<div
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
    </div>`}},P([A({type:Number})],cr.prototype,`count`,void 0),P([A({type:Number})],cr.prototype,`max`,void 0)})))()}var ur;function dr(){return(dr=e((()=>{h(),m(),_(),y(),d(),Ie(),j(),E(),w(),tn(),ur=class e extends f{constructor(...e){super(...e),this.color=`primary`,this.variant=`solid`,this.size=`medium`,this.position=`top-right`,this.dot=!1,this.badgeRole=`status`,this.locale=new x(this),this.aria=new u(this),this.slots=new g(this)}static{this.tagName=`minerva-badge`}static{this.styles=[v,C`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }
    `,D(ze)]}hasElementChildren(){return Array.from(this.children).some(e=>!e.hasAttribute(`slot`)||e.getAttribute(`slot`)===``)}updated(){n&&this.dot&&!this.aria.label&&![`presentation`,`none`].includes(this.badgeRole)&&b(e.tagName,`a dot badge has no text: set aria-label (e.g. "New messages") or badge-role="presentation".`)}render(){let e=this.slots.test(`[default]`),t=e&&!this.hasElementChildren(),n=this.content!==void 0&&this.content!==null||this.slots.test(`content`),r=!e||t&&!n,i=O;this.dot||(n?i=k`<slot name="content">${this.content}</slot>`:t?i=k`<slot></slot>`:e&&(i=this.locale.t(`badge.default`)));let a=k`<span
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
    </div>`}},P([A({reflect:!0})],ur.prototype,`color`,void 0),P([A({reflect:!0})],ur.prototype,`variant`,void 0),P([A({reflect:!0})],ur.prototype,`size`,void 0),P([A()],ur.prototype,`content`,void 0),P([A({reflect:!0})],ur.prototype,`position`,void 0),P([A({type:Boolean,reflect:!0})],ur.prototype,`dot`,void 0),P([A({attribute:`border-radius`})],ur.prototype,`borderRadius`,void 0),P([A({attribute:`border-width`})],ur.prototype,`borderWidth`,void 0),P([A({attribute:`badge-role`})],ur.prototype,`badgeRole`,void 0)})))()}function fr(e){let t=String(e).trim();return typeof e!=`number`&&!/^\d+(\.\d+)?$/.test(t)?t:`var(--space-${t.replace(`.`,`-`)})`}function pr(e){let t=String(e).trim();return typeof e==`number`||/^-?\d+(\.\d+)?$/.test(t)?`${t}px`:t}function mr(e){return e.replace(/[;{}<>]/g,``)}var hr;function gr(){return(gr=e((()=>{hr={fromAttribute:e=>{if(e===null)return;let t=e.trim();return/^-?\d+(\.\d+)?$/.test(t)?Number(t):t},toAttribute:e=>e===void 0?null:String(e)}})))()}var _r,vr,yr,R,z;function br(){return(br=e((()=>{m(),y(),gr(),j(),E(),_r={bg:`var(--surface-color)`,"bg.subtle":`var(--surface-subtle-color)`,"bg.muted":`var(--surface-muted-color)`,"bg.emphasis":`var(--surface-muted-color)`,"bg.canvas":`var(--canvas-color)`,"bg.elevated":`var(--surface-elevated-color)`},vr=[`none`,`sm`,`md`,`lg`,`xl`,`2xl`,`full`],yr=[`sm`,`md`,`lg`,`xl`],R={converter:hr},z=class e extends f{static{this.tagName=`minerva-box`}static{this.styles=[v,C`
      :host {
        display: block;
      }
    `]}declarations(){let e=[],t=(t,...n)=>{if(t!==void 0&&t!==``)for(let r of n)e.push([r,fr(t)])},n=(t,n)=>{t!==void 0&&t!==``&&e.push([n,pr(t)])};return t(this.p,`padding`),t(this.px,`padding-left`,`padding-right`),t(this.py,`padding-top`,`padding-bottom`),t(this.pt,`padding-top`),t(this.pr,`padding-right`),t(this.pb,`padding-bottom`),t(this.pl,`padding-left`),t(this.m,`margin`),t(this.mx,`margin-left`,`margin-right`),t(this.my,`margin-top`,`margin-bottom`),t(this.mt,`margin-top`),t(this.mr,`margin-right`),t(this.mb,`margin-bottom`),t(this.ml,`margin-left`),n(this.w,`width`),n(this.h,`height`),n(this.minW,`min-width`),n(this.minH,`min-height`),n(this.maxW,`max-width`),n(this.maxH,`max-height`),this.bg&&e.push([`background`,_r[this.bg]??this.bg]),this.rounded&&e.push([`border-radius`,vr.includes(this.rounded)?`var(--radius-${this.rounded})`:this.rounded]),this.boxShadow&&e.push([`box-shadow`,yr.includes(this.boxShadow)?`var(--shadow-${this.boxShadow})`:this.boxShadow]),this.border&&e.push([`border`,this.border]),e}updated(){n&&this.bg?.startsWith(`bg.`)&&!(this.bg in _r)&&b(e.tagName,`unknown surface alias bg="${this.bg}" (expected one of ${Object.keys(_r).join(`, `)}).`)}render(){let e=this.declarations().map(([e,t])=>`${e}:${mr(t)};`).join(``);return k`<style>
        :host{${e}}
      </style>
      <slot></slot>`}},P([A(R)],z.prototype,`p`,void 0),P([A(R)],z.prototype,`px`,void 0),P([A(R)],z.prototype,`py`,void 0),P([A(R)],z.prototype,`pt`,void 0),P([A(R)],z.prototype,`pr`,void 0),P([A(R)],z.prototype,`pb`,void 0),P([A(R)],z.prototype,`pl`,void 0),P([A(R)],z.prototype,`m`,void 0),P([A(R)],z.prototype,`mx`,void 0),P([A(R)],z.prototype,`my`,void 0),P([A(R)],z.prototype,`mt`,void 0),P([A(R)],z.prototype,`mr`,void 0),P([A(R)],z.prototype,`mb`,void 0),P([A(R)],z.prototype,`ml`,void 0),P([A(R)],z.prototype,`w`,void 0),P([A(R)],z.prototype,`h`,void 0),P([A({converter:hr,attribute:`min-w`})],z.prototype,`minW`,void 0),P([A({converter:hr,attribute:`min-h`})],z.prototype,`minH`,void 0),P([A({converter:hr,attribute:`max-w`})],z.prototype,`maxW`,void 0),P([A({converter:hr,attribute:`max-h`})],z.prototype,`maxH`,void 0),P([A()],z.prototype,`bg`,void 0),P([A()],z.prototype,`rounded`,void 0),P([A({attribute:`box-shadow`})],z.prototype,`boxShadow`,void 0),P([A()],z.prototype,`border`,void 0)})))()}var xr,B;function Sr(){return(Sr=e((()=>{h(),m(),y(),d(),vt(),fe(),j(),E(),w(),tn(),xr=e=>`borderRadius${e.charAt(0).toUpperCase()}${e.slice(1)}`,B=class e extends f{constructor(...e){super(...e),this.color=`primary`,this.variant=`solid`,this.size=`medium`,this.disabled=!1,this.loading=!1,this.fullWidth=!1,this.active=!1,this.type=`button`,this.internals=qe(this),this.aria=new u(this),this.slots=new g(this),this.blockInactiveClicks=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-button`}static{this.formAssociated=!0}static{this.styles=[v,C`
      :host {
        display: inline-flex;
        max-width: 100%;
        vertical-align: middle;
      }
      :host([full-width]) {
        display: flex;
        width: 100%;
      }
    `,D(St)]}get form(){return this.internals?.form??null}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}handleClick(e){if(this.loading||this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockInactiveClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockInactiveClicks,!0)}updated(){n&&this.shape===`circle`&&!this.aria.label&&(this.textContent?.trim()||b(e.tagName,`shape="circle" buttons usually only contain an icon: set aria-label to give them an accessible name.`))}render(){let e=this.borderRadius,t=typeof e==`number`||typeof e==`string`&&/^\d+(\.\d+)?$/.test(e),n=this.loading&&this.slots.test(`loading`),r=this.loading&&!n,i=k`<span
      class="loadingSpinner"
      part="spinner"
      aria-hidden="true"
    ></span>`;return k`<button
      part="button"
      type="button"
      class=${N({customButton:!0,[this.color]:!0,[`variant-${this.variant}`]:!0,[this.size]:!0,[this.shape??``]:!!this.shape,[xr(String(e??``))]:!!e&&!t,fullWidth:this.fullWidth,active:this.active,loading:this.loading})}
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
    </button>`}},P([A({reflect:!0})],B.prototype,`color`,void 0),P([A({reflect:!0})],B.prototype,`variant`,void 0),P([A({reflect:!0})],B.prototype,`size`,void 0),P([A({reflect:!0})],B.prototype,`shape`,void 0),P([A({attribute:`border-radius`})],B.prototype,`borderRadius`,void 0),P([A({type:Boolean,reflect:!0})],B.prototype,`disabled`,void 0),P([A({type:Boolean,reflect:!0})],B.prototype,`loading`,void 0),P([A({type:Boolean,reflect:!0,attribute:`full-width`})],B.prototype,`fullWidth`,void 0),P([A({type:Boolean,reflect:!0})],B.prototype,`active`,void 0),P([A({reflect:!0})],B.prototype,`type`,void 0),P([T(`button`)],B.prototype,`button`,void 0)})))()}var Cr,wr,Tr,Er,Dr,Or,V,kr,Ar,jr,Mr,Nr,Pr,Fr;function Ir(){return(Ir=e((()=>{h(),m(),y(),vt(),pe(),j(),E(),w(),mn(),Cr=[`div`,`article`,`section`,`a`,`button`],wr=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`],Tr=[`none`,`small`,`medium`,`large`],Er=`minerva-card-header, minerva-card-content, minerva-card-footer, minerva-card-title, minerva-card-description`,Dr=e=>e&&Tr.includes(e)?`pad-${e}`:``,Or=e=>{let t=e.parentElement??e.getRootNode().host;return!!(t?at(t,`minerva-card`):null)?.hasAttribute(`padding`)},V=class e extends f{constructor(...e){super(...e),this.variant=`default`,this.interactive=!1,this.as=`div`,this.disabled=!1,this.type=`button`,this.internals=qe(this),this.aria=new u(this),this.syncParts=()=>{for(let e of Array.from(this.querySelectorAll(Er)))e.requestUpdate()},this.blockDisabledClicks=e=>{this.tag===`button`&&this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-card`}static{this.formAssociated=!0}static{this.styles=[v,C`
      :host {
        display: block;
        min-width: 0;
      }
      .card ::slotted(minerva-card-content) {
        flex: 1;
      }
      a.card,
      button.card {
        width: 100%;
        box-sizing: border-box;
      }
      button.card {
        margin: 0;
        padding: 0;
      }
    `,D(oe)]}get tag(){return Cr.includes(this.as)?this.as:`div`}focus(e){this.tag===`a`||this.tag===`button`?this.root?.focus(e):super.focus(e)}handleClick(e){if(this.tag!==`button`)return;if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.internals?.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockDisabledClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockDisabledClicks,!0)}updated(t){t.has(`padding`)&&this.syncParts(),n&&(this.as&&!Cr.includes(this.as)&&b(e.tagName,`unsupported as="${this.as}" (expected ${Cr.join(`, `)}); rendering a div.`),this.tag===`a`&&!this.href&&b(e.tagName,`as="a" needs an href to be a link (focusable, activatable with Enter).`),this.interactive&&this.tag!==`a`&&this.tag!==`button`&&b(e.tagName,`interactive cards should be links or buttons (as="a" with href, or as="button") so keyboard users can activate them.`))}render(){let e=this.tag,t=N({card:!0,[this.variant]:!0,padded:!!this.padding,[Dr(this.padding)]:!!Dr(this.padding),interactive:this.interactive}),n=this.aria.label??O,r=sn`<slot @slotchange=${this.syncParts}></slot>`;if(e===`a`)return sn`<a
        part="base"
        class=${t}
        href=${this.href??O}
        target=${this.target??O}
        rel=${this.rel??O}
        download=${this.download??O}
        aria-label=${n}
        >${r}</a
      >`;if(e===`button`)return sn`<button
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
      </button>`;let i=cn(e);return sn`<${i} part="base" class=${t}>${r}</${i}>`}},P([A({reflect:!0})],V.prototype,`variant`,void 0),P([A({reflect:!0})],V.prototype,`padding`,void 0),P([A({type:Boolean,reflect:!0})],V.prototype,`interactive`,void 0),P([A({reflect:!0})],V.prototype,`as`,void 0),P([A()],V.prototype,`href`,void 0),P([A()],V.prototype,`target`,void 0),P([A()],V.prototype,`rel`,void 0),P([A()],V.prototype,`download`,void 0),P([A({type:Boolean,reflect:!0})],V.prototype,`disabled`,void 0),P([A()],V.prototype,`type`,void 0),P([T(`[part=base]`)],V.prototype,`root`,void 0),kr=C`
  :host {
    display: block;
    min-width: 0;
  }
  .cardHeader {
    padding: var(--card-padding, var(--space-4));
    background-color: var(--card-header-bg-color, var(--surface-muted-color));
    border-bottom: 1px solid var(--card-border-color, var(--border-color));
  }
  .cardContent {
    padding: var(--card-padding, var(--space-4));
    flex: 1;
    background-color: var(--card-bg-color-content, var(--surface-color));
    border-bottom: 1px solid var(--card-border-color, var(--border-color));
    min-width: 0;
    overflow-wrap: anywhere;
  }
  .cardFooter {
    padding: var(--card-padding, var(--space-4));
    background-color: color-mix(
      in srgb,
      var(--surface-muted-color) 60%,
      transparent
    );
    text-align: end;
    border-top: 1px solid var(--card-border-color, var(--border-color));
  }
  .padded {
    padding: 0;
    border: 0;
    background-color: transparent;
    text-align: start;
    white-space: normal;
    overflow: visible;
  }
  .padded.cardContent.afterHeader {
    margin-top: var(--space-3);
  }
  .padded.cardFooter.afterContent,
  .padded.cardFooter.afterHeader {
    margin-top: var(--space-4);
    padding-top: var(--space-4);
    border-top: 1px solid var(--card-border-color, var(--border-color));
  }
  .pad-none {
    padding: 0;
  }
  .pad-small {
    padding: var(--space-3);
  }
  .pad-medium {
    padding: var(--space-5);
  }
  .pad-large {
    padding: var(--space-8);
  }
`,Ar=class extends f{constructor(...e){super(...e),this.sectionClass=``}static{this.styles=[v,kr]}layoutClasses(){let e=this.previousElementSibling?.localName,t=Dr(this.padding);return{[this.sectionClass]:!0,padded:Or(this),afterHeader:e===`minerva-card-header`,afterContent:e===`minerva-card-content`,[t]:!!t}}render(){return sn`<div part="base" class=${N(this.layoutClasses())}>
      <slot></slot>
    </div>`}},P([A({reflect:!0})],Ar.prototype,`padding`,void 0),jr=class extends Ar{constructor(...e){super(...e),this.sectionClass=`cardHeader`}static{this.tagName=`minerva-card-header`}},Mr=class extends Ar{constructor(...e){super(...e),this.sectionClass=`cardContent`}static{this.tagName=`minerva-card-content`}static{this.styles=[v,kr,C`
      :host {
        display: flex;
        flex-direction: column;
      }
      .fadeIn {
        animation: fadeIn 1s ease-in-out;
      }
      .slideIn {
        animation: slideIn 1s ease-in-out;
      }
      .zoomIn {
        animation: zoomIn 1s ease-in-out;
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes slideIn {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0);
        }
      }
      @keyframes zoomIn {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .fadeIn,
        .slideIn,
        .zoomIn {
          animation: none;
        }
      }
    `]}layoutClasses(){let e=super.layoutClasses();return this.animation&&(e[this.animation]=!0),e}},P([A({reflect:!0})],Mr.prototype,`animation`,void 0),Nr=class extends Ar{constructor(...e){super(...e),this.sectionClass=`cardFooter`}static{this.tagName=`minerva-card-footer`}},Pr=class extends f{constructor(...e){super(...e),this.as=`h3`}static{this.tagName=`minerva-card-title`}static{this.styles=[v,C`
      :host {
        display: block;
        min-width: 0;
      }
      .cardTitle {
        font-size: var(--card-title-font-size, 1.25rem);
        font-weight: var(--font-weight-bold);
        color: var(--text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .cardTitle.padded {
        margin: 0;
        font-family: var(--font-family-sans);
        font-size: var(--card-title-font-size, var(--font-size-lg));
        font-weight: var(--font-weight-semibold);
        line-height: var(--line-height-tight);
        white-space: normal;
      }
    `]}render(){let e=cn(wr.includes(this.as)?this.as:`h3`);return sn`<${e}
      part="base"
      class=${N({cardTitle:!0,padded:Or(this)})}
    ><slot></slot></${e}>`}},P([A({reflect:!0})],Pr.prototype,`as`,void 0),Fr=class extends f{static{this.tagName=`minerva-card-description`}static{this.styles=[v,C`
      :host {
        display: block;
        min-width: 0;
      }
      .cardDescription {
        font-size: var(--font-size-md);
        color: var(--text-secondary-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .cardDescription.padded {
        margin: var(--space-1) 0 0;
        font-family: var(--font-family-sans);
        line-height: var(--line-height-base);
        white-space: normal;
      }
    `]}render(){return sn`<p
      part="base"
      class=${N({cardDescription:!0,padded:Or(this)})}
    >
      <slot></slot>
    </p>`}}})))()}var Lr,Rr,zr,Br,Vr,Hr,Ur,H;function Wr(){return(Wr=e((()=>{h(),m(),l(),_(),y(),On(),vt(),Pe(),j(),E(),w(),qt(),Qt(),Lr=(e,t)=>{let n=[],r=e;for(let e of t){let t=r?.find(t=>t.value===e);if(!t)break;n.push(t),r=t.children}return n},Rr=(e,t=[])=>e.flatMap(e=>{if(e.disabled)return[];let n=[...t,e];return[{option:e,path:n},...e.children?Rr(e.children,n):[]]}),zr=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),Br=e=>{let t=new Set;for(let n of e){if(t.has(n.value))return n.value;t.add(n.value);let e=n.children?Br(n.children):void 0;if(e!==void 0)return e}},Vr={fromAttribute(e){let t=e?.trim()??``;if(!t)return[];if(t.startsWith(`[`))try{let e=JSON.parse(t);if(Array.isArray(e))return e.filter(e=>typeof e==`string`||typeof e==`number`)}catch{}return t.split(`,`).map(e=>e.trim())},toAttribute(e){return JSON.stringify(e)}},Hr=`[role="option"]:not([aria-disabled="true"])`,Ur=0,H=class e extends Ue{constructor(...e){super(...e),this.options=[],this.value=[],this.defaultValue=[],this.open=!1,this.label=``,this.invalid=!1,this.readonly=!1,this.hideClearButton=!1,this.expandTrigger=`click`,this.showSearch=!1,this.maxLevel=6,this.width=240,this.expandedValues=[],this.searchValue=``,this.idPrefix=`minerva-cascader-${Ur++}`,this.locale=new x(this),this.aria=new u(this,()=>this.labels),this.floating=new In(this,()=>({anchor:()=>this.anchor,floating:()=>this.dropdown,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,branches:()=>[this.anchor],onDismiss:()=>this.closeDropdown(),returnFocusOnEscape:()=>this.input,focusable:!0})),this.pendingFocus=null,this.dirty=!1}static{this.tagName=`minerva-cascader`}static{this.shadowRootOptions={...Ue.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[v,Mn,C`
      :host {
        display: inline-block;
        width: 240px;
        vertical-align: middle;
      }
      .cascader {
        width: 100%;
      }
      /* lib-core's unstyled <Input> inside the selector */
      .input {
        --_input-pad-x: var(--input-padding-x, var(--control-padding-x-sm));
        position: relative;
        display: inline-flex;
        align-items: center;
        width: 100%;
        min-width: 0;
        min-height: var(--input-height, var(--control-height-md));
        background: transparent;
        border: 1px solid transparent;
        border-radius: var(--input-radius, var(--radius-lg));
        color: var(--text-color);
      }
      .input[data-disabled] {
        background-color: var(--surface-subtle-color);
        opacity: 0.6;
      }
      .field {
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
      .field::placeholder {
        color: var(--text-muted-color);
      }
      .field:disabled {
        cursor: not-allowed;
      }
      .clearIcon svg,
      .arrow svg {
        display: block;
      }
      .expandIcon {
        display: inline-flex;
      }
      :host(:dir(rtl)) .expandIcon {
        transform: scaleX(-1);
      }
    `,D(Ae)]}get selectedOptions(){return Lr(this.options,this.value)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}show(){this.open=!0}hide(){this.open=!1}get displayText(){let e=this.selectedOptions,t=e.map(e=>String(e.label));return this.displayRender?this.displayRender(t,e):t.join(` / `)}getFormValue(){return this.displayText}syncFormState(){super.syncFormState(),this.internals&&!this.isDisabled&&this.internals.setFormValue(this.getFormValue(),JSON.stringify(this.value))}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.selectMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=[...this.defaultValue],this.open=!1}restoreFormState(e){if(typeof e==`string`)try{let t=JSON.parse(e);Array.isArray(t)&&(this.value=t)}catch{}}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=!zr(this.value,this.defaultValue)||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.value=[...this.defaultValue]),e.has(`open`)&&(this.open?this.expandedValues=[...this.value]:(this.searchValue=``,this.pendingFocus=null)),n&&this.checkDev(e)}checkDev(t){if(t.has(`options`)){let t=Br(this.options);t!==void 0&&b(e.tagName,`duplicate option value "${t}" among siblings: values must be unique within a level.`)}(t.has(`options`)||t.has(`value`))&&this.options.length>0&&this.value.length>0&&Lr(this.options,this.value).length<this.value.length&&b(e.tagName,`value ${JSON.stringify(this.value)} is not a path of the options tree: it is shown partially (or not at all).`)}updated(e){if(super.updated(e),e.has(`width`)){let e=this.width;this.style.width=e===void 0||e===``?``:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e}this.floating.sync(this.open&&!this.isDisabled);let t=this.pendingFocus;if(t!==null&&this.open){let e=t===-1?this.columns().length-1:t;this.focusColumn(e)&&(this.pendingFocus=null)}}requestOpen(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}openDropdown(e=!1){this.isDisabled||this.readonly||this.requestOpen(!0)&&(this.expandedValues=[...this.value],this.pendingFocus=e?-1:null)}closeDropdown(e=!1){this.requestOpen(!1)&&(this.searchValue=``,e&&this.input?.focus())}select(e){this.value=e.map(e=>e.value),this.emitChange(e),this.closeDropdown(!0)}emitChange(e){this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:[...this.value],selectedOptions:e})}handleActivate(e,t){let n=e[e.length-1];if(n.disabled)return;let r=t>=this.maxLevel-1,i=!!n.children?.length,a=!!this.loadData&&!n.isLeaf&&!n.children;if(!r&&(i||a)){this.expandedValues=e.map(e=>e.value),a&&!n.loading&&this.loadData?.(e);return}this.select(e)}clear(e){e.stopPropagation(),this.value=[],this.searchValue=``,this.emitChange([]),this.emit(`minerva-clear`),this.input?.focus()}get expandedPath(){return Lr(this.options,this.expandedValues)}columns(){let e=this.expandedPath,t=[this.options];for(let n=0;n<e.length&&n<this.maxLevel-1;n+=1){let r=e[n].children;if(!r?.length)break;t.push(r)}return t}columnId(e){return`${this.idPrefix}-column-${e}`}focusColumn(e){let t=this.dropdown?.querySelector(`[data-level="${e}"]`);if(!t)return!1;let n=t.querySelector(`[data-expanded="true"]`)??t.querySelector(Hr);return n?.focus(),!!n}canExpand(e,t){return t<this.maxLevel-1&&(!!e.children?.length||!e.isLeaf&&e.children===void 0)}pathTo(e,t){return[...this.expandedPath.slice(0,t),e]}get searching(){return this.showSearch&&this.searchValue!==``}searchResults(){if(!this.searching)return[];let{searchValue:e,filter:t}=this,n=e.toLowerCase();return Rr(this.options).filter(({path:r})=>t?t(e,r):r.some(e=>String(e.label).toLowerCase().includes(n)))}focusFirstSearchResult(){this.dropdown?.querySelector(`[role="option"]`)?.focus()}handleSelectorClick(){this.isDisabled||this.readonly||(this.open?this.showSearch||this.closeDropdown():this.openDropdown())}handleInput(e){let t=e.target.value;this.showSearch&&!this.readonly&&(this.searchValue=t,this.emit(`minerva-input`,{value:t}),this.open||this.openDropdown())}handleInputKeyDown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this.open?this.searching?this.focusFirstSearchResult():(this.pendingFocus=-1,this.requestUpdate()):this.openDropdown(!0);break;case`Enter`:e.preventDefault(),this.open||this.openDropdown(!0);break;case` `:if(this.showSearch)break;e.preventDefault(),this.open||this.openDropdown(!0)}}handleFocusOut(e){let t=e.relatedTarget;this.open&&t&&(this.anchor&&Xt(this.anchor,t)||this.dropdown&&Xt(this.dropdown,t)||this.closeDropdown())}handleDropdownMouseDown(e){e.target.closest?.(`[role="option"]`)||e.preventDefault()}handleDropdownKeyDown(e){e.key===`Tab`&&this.closeDropdown()}handleOptionKeyDown(e,t,n){let r=e.currentTarget,i=Array.from(r.parentElement?.querySelectorAll(Hr)??[]),a=i.indexOf(r),o=e=>i[(e+i.length)%i.length]?.focus(),s=e.key;switch(mt(this)===`rtl`&&(s===`ArrowLeft`?s=`ArrowRight`:s===`ArrowRight`&&(s=`ArrowLeft`)),s){case`ArrowDown`:e.preventDefault(),o(a+1);break;case`ArrowUp`:e.preventDefault(),o(a-1);break;case`Home`:e.preventDefault(),o(0);break;case`End`:e.preventDefault(),o(i.length-1);break;case`ArrowRight`:if(e.preventDefault(),t.disabled||!this.canExpand(t,n))break;this.pendingFocus=n+1,this.handleActivate(this.pathTo(t,n),n),this.requestUpdate();break;case`Enter`:case` `:if(e.preventDefault(),t.disabled)break;this.canExpand(t,n)&&(this.pendingFocus=n+1),this.handleActivate(this.pathTo(t,n),n),this.requestUpdate();break;case`ArrowLeft`:e.preventDefault(),n===0?this.closeDropdown(!0):this.focusColumn(n-1)}}handleSearchKeyDown(e){let t=e.currentTarget,n=Array.from(t.querySelectorAll(`[role="option"]`)),r=n.indexOf(e.target);(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),n[(r+(e.key===`ArrowDown`?1:-1)+n.length)%n.length]?.focus())}renderSearchResults(){let e=this.searchResults();return k`<div
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
                                  >${ie}</span
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
              .value=${wn(i)}
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
                  <span class="icon" aria-hidden="true">${c}</span>
                </button>`:O}
          <span
            class=${N({arrow:!0,open:n})}
            part="arrow"
            aria-hidden="true"
            ><span class="icon">${be}</span></span
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
            </div>`:O}`}},P([A({attribute:!1})],H.prototype,`options`,void 0),P([A({attribute:!1})],H.prototype,`value`,void 0),P([A({attribute:`value`,converter:Vr})],H.prototype,`defaultValue`,void 0),P([A({type:Boolean,reflect:!0})],H.prototype,`open`,void 0),P([A()],H.prototype,`label`,void 0),P([A()],H.prototype,`placeholder`,void 0),P([A({type:Boolean,reflect:!0})],H.prototype,`invalid`,void 0),P([A({type:Boolean,reflect:!0})],H.prototype,`readonly`,void 0),P([A({type:Boolean,attribute:`hide-clear-button`})],H.prototype,`hideClearButton`,void 0),P([A({attribute:`expand-trigger`,reflect:!0})],H.prototype,`expandTrigger`,void 0),P([A({type:Boolean,attribute:`show-search`,reflect:!0})],H.prototype,`showSearch`,void 0),P([A({type:Number,attribute:`max-level`})],H.prototype,`maxLevel`,void 0),P([A()],H.prototype,`width`,void 0),P([A({attribute:!1})],H.prototype,`displayRender`,void 0),P([A({attribute:!1})],H.prototype,`filter`,void 0),P([A({attribute:!1})],H.prototype,`loadData`,void 0),P([A({attribute:!1})],H.prototype,`optionRender`,void 0),P([S()],H.prototype,`expandedValues`,void 0),P([S()],H.prototype,`searchValue`,void 0),P([T(`input`)],H.prototype,`input`,void 0),P([T(`.cascader`)],H.prototype,`anchor`,void 0),P([T(`.dropdown`)],H.prototype,`dropdown`,void 0)})))()}var Gr,U;function Kr(){return(Kr=e((()=>{h(),m(),l(),_(),y(),d(),vt(),ce(),j(),E(),w(),Qt(),Gr=e=>e.charAt(0).toUpperCase()+e.slice(1),U=class e extends Ue{constructor(...e){super(...e),this.checked=!1,this.defaultChecked=!1,this.indeterminate=!1,this.value=`on`,this.label=``,this.shape=`square`,this.size=`medium`,this.color=`primary`,this.labelPlacement=`end`,this.error=!1,this.helperText=``,this.readonly=!1,this.locale=new x(this),this.aria=new u(this,()=>this.labels),this.slots=new g(this),this.dirty=!1}static{this.tagName=`minerva-checkbox`}static{this.shadowRootOptions={...Ue.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[v,C`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }
      .checkmark ::slotted(*) {
        position: relative;
        z-index: 1;
        display: inline-flex;
        color: var(--checkbox-checkmark-color, var(--text-inverse-color));
      }
    `,D(Me)]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}click(){this.input?.click()}getFormValue(){return this.checked?this.value:null}getValidity(){return this.required&&!this.checked?{flags:{valueMissing:!0},message:this.locale.t(`validation.checkMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.checked=this.defaultChecked}restoreFormState(e){this.checked=e!=null&&e!==``}willUpdate(e){e.has(`defaultChecked`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`checked`))&&(this.checked=this.defaultChecked)}updated(t){super.updated(t),this.input&&(this.input.indeterminate=this.indeterminate),n&&!this.aria.label&&!this.label&&!this.textContent?.trim()&&b(e.tagName,`no label: set the label attribute, slot a label, or use aria-label / <label for>.`)}handleClick(e){this.readonly&&e.preventDefault()}handleChange(){this.readonly||(this.dirty=!0,this.input.indeterminate=this.indeterminate,this.checked=this.input.checked,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{checked:this.checked,value:this.value}))}render(){let e=this.isDisabled,t=!!this.label||this.slots.test(`[default]`),n=[this.helperText,this.aria.description].filter(Boolean).join(` `),r=this.error||this.aria.attr(`aria-invalid`)===`true`;return k`<div
      part="base"
      class=${N({checkboxWrapper:!0,error:r})}
    >
      <label
        part="control"
        class=${N({checkbox:!0,[this.size]:!0,[this.shape]:!0,[`label${Gr(this.labelPlacement)}`]:!0,[`color${Gr(this.color)}`]:this.color!==`primary`,disabled:e,error:r})}
      >
        <input
          part="input"
          type="checkbox"
          class="input"
          .checked=${wn(this.checked)}
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
                      >${te}</span
                    >`:O}
              <span
                part="helper-text"
                class=${N({helperText:!0,errorText:r})}
                >${this.helperText}</span
              >
            </div>`:O}
    </div>`}},P([A({attribute:!1})],U.prototype,`checked`,void 0),P([A({type:Boolean,attribute:`checked`,reflect:!0})],U.prototype,`defaultChecked`,void 0),P([A({type:Boolean,reflect:!0})],U.prototype,`indeterminate`,void 0),P([A()],U.prototype,`value`,void 0),P([A()],U.prototype,`label`,void 0),P([A({reflect:!0})],U.prototype,`shape`,void 0),P([A({reflect:!0})],U.prototype,`size`,void 0),P([A({reflect:!0})],U.prototype,`color`,void 0),P([A({attribute:`label-placement`,reflect:!0})],U.prototype,`labelPlacement`,void 0),P([A({type:Boolean,reflect:!0})],U.prototype,`error`,void 0),P([A({attribute:`helper-text`})],U.prototype,`helperText`,void 0),P([A({type:Boolean,reflect:!0})],U.prototype,`readonly`,void 0),P([T(`input`)],U.prototype,`input`,void 0)})))()}var qr,Jr,Yr;function Xr(){return(Xr=e((()=>{h(),m(),l(),_(),y(),d(),kt(),o(),j(),E(),w(),tn(),qr=2e3,Jr=e=>e===void 0||e===``?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Yr=class e extends f{constructor(...e){super(...e),this.noWrap=!1,this.maxHeight=`24rem`,this.copyable=!1,this.status=`idle`,this.locale=new x(this),this.aria=new u(this),this.slots=new g(this)}static{this.tagName=`minerva-code-block`}static{this.styles=[v,C`
      :host {
        display: block;
        min-width: 0;
        max-width: 100%;
      }
      .actions {
        align-items: center;
        gap: var(--space-2);
      }
      .language {
        color: var(--text-muted-color);
        font-family: var(--font-family-mono);
        font-size: var(--font-size-xs);
        line-height: 1;
        user-select: none;
      }
      .iconButton svg {
        width: 16px;
        height: 16px;
      }
    `,D(dt),D(zt)]}get text(){return this.code??this.textContent??``}async copy(){let e=this.text,t=typeof navigator>`u`?void 0:navigator.clipboard,n=!1;if(typeof t?.writeText==`function`)try{await t.writeText(e),n=!0}catch{n=!1}return this.isConnected?(this.showStatus(n?`copied`:`failed`),this.emit(`minerva-copy`,{value:e,success:n}),n):n}showStatus(e){clearTimeout(this.timer),this.status=e,this.timer=setTimeout(()=>this.status=`idle`,qr)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timer),this.status=`idle`}updated(){n&&this.copyable&&!this.text.trim()&&b(e.tagName,`copyable is set but there is no text to copy (set code or the text content).`)}render(){this.slots;let e=this.locale.t,t=this.aria.label??e(`codeBlock.label`),n=Jr(this.maxHeight),r=this.copyable||!!this.language,a=k`<pre
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
      >${this.text}</code></pre>`;if(!r)return a;let o=this.status,s=o===`copied`?e(`codeBlock.copied`):o===`failed`?e(`codeBlock.copyFailed`):``,ee=s||e(`codeBlock.copy`),te=o===`failed`?`danger`:o===`copied`?`success`:`neutral`;return k`<div part="base" class="root" style=${M({maxHeight:n})}>
      ${a}
      <div class="actions">
        ${this.language?k`<span part="language" class="language" aria-hidden="true"
                >${this.language}</span
              >`:O}
        ${this.copyable?k`<button
                type="button"
                part="copy-button"
                class="iconButton ${te} variant-ghost small square"
                aria-label=${ee}
                title=${ee}
                @click=${()=>void this.copy()}
              >
                ${o===`copied`?me:o===`failed`?c:i}
              </button>`:O}
      </div>
      ${this.copyable?k`<span class="visuallyHidden" aria-live="polite"
              >${s}</span
            >`:O}
    </div>`}},P([A()],Yr.prototype,`code`,void 0),P([A({reflect:!0})],Yr.prototype,`language`,void 0),P([A({type:Boolean,attribute:`no-wrap`,reflect:!0})],Yr.prototype,`noWrap`,void 0),P([A({attribute:`max-height`})],Yr.prototype,`maxHeight`,void 0),P([A({type:Boolean,reflect:!0})],Yr.prototype,`copyable`,void 0),P([S()],Yr.prototype,`status`,void 0)})))()}function Zr(e){return(Array.isArray(e)?e:[e]).filter(e=>typeof e==`string`&&e.trim()!==``)}function Qr(e,t){if(typeof t!=`string`)return!1;let n=t.trim().toLowerCase().split(`+`).map(e=>e.trim()).filter(Boolean),r=n[n.length-1];if(!r||String(e.key??``).toLowerCase()!==r)return!1;let i=(...e)=>e.some(e=>n.includes(e));return!(i(`mod`)&&!e.metaKey&&!e.ctrlKey||i(`ctrl`)&&!e.ctrlKey||i(`meta`,`cmd`)&&!e.metaKey||i(`shift`)&&!e.shiftKey||i(`alt`,`option`)&&!e.altKey)}function $r(e){return typeof HTMLElement>`u`||!(e instanceof HTMLElement)?!1:e.isContentEditable||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?!0:e instanceof HTMLInputElement&&![`button`,`checkbox`,`color`,`file`,`image`,`radio`,`range`,`reset`,`submit`].includes(e.type)}function ei(){return(ei=e((()=>{})))()}var ti,ni,ri,W;function ii(){return(ii=e((()=>{m(),_(),y(),Nn(),Ln(),On(),Dn(),we(),ue(),_e(),j(),E(),Qt(),ti=e=>e.trim().toLowerCase(),ni=e=>`${e.group??``} ${e.title} ${e.description??``} ${e.keywords??``}`,ri={fromAttribute:e=>e===null?void 0:e.split(`,`).map(e=>e.trim()).filter(Boolean),toAttribute:e=>Array.isArray(e)?e.join(`, `):e},W=class e extends f{constructor(...e){super(...e),this.open=!1,this.items=[],this.maxResults=12,this.query=``,this.activeIndex=0,this.locale=new x(this),this.presence=new xe(this,()=>this.panel),this.modal=new Pn(this),this.focusScope=new kn(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new jn(this,()=>({disableOutsidePointerEvents:!0,onFocusOutside:()=>!1,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleShortcut=e=>{let t=Zr(this.shortcut);t.length!==0&&($r(e.composedPath()[0]??e.target)&&!e.ctrlKey&&!e.metaKey&&!e.altKey||e.isComposing||t.some(t=>Qr(e,t))&&(e.preventDefault(),e.stopPropagation(),this.requestOpenChange(!0,`shortcut`)))}}static{this.tagName=`minerva-command-dialog`}static{this.styles=[v,Mn,C`
      :host {
        display: contents;
      }
    `,D(he),D(ae)]}show(){this.open=!0}hide(){this.open=!1}get results(){let e=ti(this.query);return(Array.isArray(this.items)?this.items:[]).filter(e=>!e.disabled).filter(t=>!e||ti(ni(t)).includes(e)).slice(0,Math.max(0,this.maxResults))}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}select(e){this.emit(`minerva-select`,{value:e.id,item:e}),this.requestOpenChange(!1,`select`)}handleKeyDown(e){let t=this.results,n=Math.max(t.length-1,0),r={ArrowDown:e=>Math.min(e+1,n),ArrowUp:e=>Math.max(e-1,0),Home:()=>0,End:()=>n}[e.key];if(r&&(e.key.startsWith(`Arrow`)||!this.query)){e.preventDefault(),this.activeIndex=r(Math.min(this.activeIndex,n));return}let i=t[this.activeIndex];e.key===`Enter`&&i&&!e.isComposing&&(e.preventDefault(),this.select(i))}handleInput(e){this.query=e.target.value,this.activeIndex=0}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this.handleShortcut,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleShortcut,!0),p(this.panel),p(this.overlay)}willUpdate(e){e.has(`open`)&&(this.presence.sync(this.open),this.open&&(this.query=``,this.activeIndex=0)),e.has(`items`)&&n&&this.checkItems();let t=this.results.length;this.activeIndex>0&&this.activeIndex>=t&&(this.activeIndex=Math.max(t-1,0))}checkItems(){if(!Array.isArray(this.items)){b(e.tagName,"`items` must be an array of { id, title, ... } objects.");return}let t=new Set;for(let n of this.items)t.has(n.id)&&b(e.tagName,`duplicate item id "${n.id}": ids identify the chosen command in minerva-select and must be unique.`),t.add(n.id)}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)){let e=this.panel;this.open&&e?(et(this.overlay),et(e),this.modal.activate(this),this.layer.activate(e),this.focusScope.activate(e),this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.open&&(e.has(`activeIndex`)||e.has(`query`))&&this.renderRoot.querySelector(`#option-${this.activeIndex}`)?.scrollIntoView?.({block:`nearest`}),this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}afterClose(){p(this.panel),p(this.overlay),this.emit(`minerva-after-close`)}render(){if(!(this.open||this.presence.present))return O;let e=this.locale.t,t=this.open?`open`:`closed`,n=this.results,r=n[this.activeIndex]?`option-${this.activeIndex}`:void 0,i=this.placeholder??e(`command.placeholder`);return k`<div
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
            .value=${wn(this.query)}
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
      </div>`}},P([A({type:Boolean,reflect:!0})],W.prototype,`open`,void 0),P([A({attribute:!1})],W.prototype,`items`,void 0),P([A()],W.prototype,`label`,void 0),P([A()],W.prototype,`description`,void 0),P([A()],W.prototype,`placeholder`,void 0),P([A({attribute:`empty-text`})],W.prototype,`emptyText`,void 0),P([A({attribute:`shortcut-label`})],W.prototype,`shortcutLabel`,void 0),P([A({converter:ri})],W.prototype,`shortcut`,void 0),P([A({type:Number,attribute:`max-results`})],W.prototype,`maxResults`,void 0),P([A({attribute:`results-label`})],W.prototype,`resultsLabel`,void 0),P([A({attribute:`enter-label`})],W.prototype,`enterLabel`,void 0),P([S()],W.prototype,`query`,void 0),P([S()],W.prototype,`activeIndex`,void 0),P([T(`.content`)],W.prototype,`panel`,void 0),P([T(`.overlay`)],W.prototype,`overlay`,void 0)})))()}var ai,oi,si;function ci(){return(ci=e((()=>{y(),j(),E(),qt(),ai=`(prefers-color-scheme: dark)`,oi=`data-minerva-theme-scope`,si=class extends f{constructor(...e){super(...e),this.root=!1,this.media=null,this.mode=null,this.onSchemeChange=()=>this.apply()}static{this.tagName=`minerva-config`}static{this.styles=C`
    :host {
      display: contents;
    }
  `}get resolvedMode(){return this.mode}connectedCallback(){super.connectedCallback(),typeof window<`u`&&window.matchMedia&&(this.media=window.matchMedia(ai),this.media.addEventListener(`change`,this.onSchemeChange))}disconnectedCallback(){super.disconnectedCallback(),this.media?.removeEventListener(`change`,this.onSchemeChange),this.media=null,this.root&&this.clear(document.documentElement)}updated(e){e.has(`root`)&&e.get(`root`)!==void 0&&this.clear(e.get(`root`)?document.documentElement:this),this.apply()}target(){return this.root?document.documentElement:this}clear(e){for(let t of[`data-theme`,`data-palette`,oi,`lang`])(e!==this||t!==`lang`)&&e.removeAttribute(t);Yt(e,null),dn(e.style,{}),e.style.removeProperty(`color-scheme`)}apply(){let e=this.target(),t=(t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},n=this.theme,r=this.media?.matches?`dark`:`light`,i=n===`system`?r:n===`github-dark`?`dark`:n===`light`||n===`dark`?n:null,a=Ut(this.design)?this.design:void 0,o=Ht(this.palette)?this.palette:Sn(a),s=!!o&&n!==`github-dark`;t(`data-theme`,i),t(`data-palette`,s?o:null),this.root||t(oi,i!==null||s||a!==void 0||[this.density,this.radius,this.shadow,this.fontScale].some(Boolean)?``:null),i?e.style.colorScheme=i:e.style.removeProperty(`color-scheme`),dn(e.style,n===`github-dark`&&on(n)?bn[n]:{}),Yt(e,{preset:a,density:xn(this.density)?this.density:void 0,radius:Cn(this.radius)?this.radius:void 0,shadow:Jt(this.shadow)?this.shadow:void 0,fontScale:Kt(this.fontScale)?this.fontScale:void 0},{all:!this.root&&a!==void 0}),this.root&&this.locale&&(document.documentElement.lang=this.locale),i!==this.mode&&(this.mode=i,i&&this.emit(`minerva-theme-change`,{mode:i}))}render(){return k`<slot></slot>`}},P([A({reflect:!0})],si.prototype,`theme`,void 0),P([A({reflect:!0})],si.prototype,`palette`,void 0),P([A({reflect:!0})],si.prototype,`design`,void 0),P([A({reflect:!0})],si.prototype,`density`,void 0),P([A({reflect:!0})],si.prototype,`radius`,void 0),P([A({reflect:!0})],si.prototype,`shadow`,void 0),P([A({reflect:!0,attribute:`font-scale`})],si.prototype,`fontScale`,void 0),P([A({reflect:!0})],si.prototype,`locale`,void 0),P([A({type:Boolean,reflect:!0})],si.prototype,`root`,void 0)})))()}var G;function li(){return(li=e((()=>{h(),m(),l(),_(),y(),d(),Nn(),Ln(),On(),Dn(),Sr(),we(),_e(),j(),E(),G=class e extends f{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.color=`primary`,this.loading=!1,this.confirmDisabled=!1,this.busy=!1,this.locale=new x(this),this.aria=new u(this),this.slots=new g(this),this.presence=new xe(this,()=>this.panel),this.modal=new Pn(this),this.focusScope=new kn(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new jn(this,()=>({disableOutsidePointerEvents:!0,onFocusOutside:()=>!1,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestClose(this.reason)})),this.reason=`outside`,this.wasPresent=!1}static{this.tagName=`minerva-confirm-dialog`}static{this.dependencies=[B]}static{this.styles=[v,Mn,C`
      :host {
        display: contents;
      }
      .content .body {
        flex: 1 1 auto;
      }
    `,D(he)]}show(){this.open=!0}hide(){this.open=!1}requestClose(e){return!this.open||!this.emit(`minerva-open-change`,{open:!1,reason:e},{cancelable:!0})?!1:(this.open=!1,e!==`confirm`&&this.emit(`minerva-cancel`,{reason:e}),!0)}async handleConfirm(){if(!this.open||this.loading||this.busy||this.confirmDisabled||!this.emit(`minerva-confirm`,void 0,{cancelable:!0}))return;let e=this.onConfirm?.();if(e&&typeof e.then==`function`){this.busy=!0;try{await e}catch{return}finally{this.busy=!1}}this.requestClose(`confirm`)}willUpdate(e){e.has(`open`)&&this.presence.sync(this.open)}updated(t){let r=this.open||this.presence.present;if(t.has(`open`)){let t=this.panel;this.open&&t?(n&&!this.label&&!this.slots.test(`header`)&&!this.aria.label&&b(e.tagName,"set `label` (or the `header` slot / aria-label) to give the alertdialog an accessible name."),et(this.overlay),et(t),this.modal.activate(this),this.layer.activate(t),this.focusInitial(t)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!r&&this.afterClose(),this.wasPresent=r}async focusInitial(e){let t=Array.from(e.querySelectorAll(`minerva-button`));await Promise.all(t.map(e=>e.updateComplete)),this.open&&this.panel===e&&(this.focusScope.activate(e),this.emit(`minerva-after-open`))}disconnectedCallback(){super.disconnectedCallback(),p(this.panel),p(this.overlay)}afterClose(){p(this.panel),p(this.overlay),this.emit(`minerva-after-close`)}render(){if(!(this.open||this.presence.present))return O;let e=this.open?`open`:`closed`,t=this.locale.t,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description,i=this.loading||this.busy;return k`<div
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
          ${c}
        </button>
      </div>`}},P([A({type:Boolean,reflect:!0})],G.prototype,`open`,void 0),P([A()],G.prototype,`label`,void 0),P([A()],G.prototype,`description`,void 0),P([A({attribute:`confirm-label`})],G.prototype,`confirmLabel`,void 0),P([A({attribute:`cancel-label`})],G.prototype,`cancelLabel`,void 0),P([A({attribute:`close-label`})],G.prototype,`closeLabel`,void 0),P([A({reflect:!0})],G.prototype,`color`,void 0),P([A({type:Boolean,reflect:!0})],G.prototype,`loading`,void 0),P([A({type:Boolean,reflect:!0,attribute:`confirm-disabled`})],G.prototype,`confirmDisabled`,void 0),P([A({attribute:!1})],G.prototype,`onConfirm`,void 0),P([S()],G.prototype,`busy`,void 0),P([T(`.content`)],G.prototype,`panel`,void 0),P([T(`.overlay`)],G.prototype,`overlay`,void 0)})))()}function ui(){let e=di.shift();if(!e){fi=null;return}let{options:t,resolve:r}=e,i=t.container??document.body;i.isConnected||(n&&b(G.tagName,"confirm(): `container` is not connected to the document; the dialog is appended to document.body instead."),i=document.body);let a=document.createElement(G.tagName);a.label=t.title,t.description&&(a.description=t.description),t.confirmLabel&&(a.confirmLabel=t.confirmLabel),t.cancelLabel&&(a.cancelLabel=t.cancelLabel),t.closeLabel&&(a.closeLabel=t.closeLabel),t.color&&(a.color=t.color);let o=!1,s=!1,ee=e=>{o||(o=!0,r(e))},te=new MutationObserver(()=>{a.isConnected||ne()}),ne=()=>{s||(s=!0,te.disconnect(),ee(!1),a.remove(),ui())};a.addEventListener(`minerva-open-change`,e=>{let{open:t,reason:n}=e.detail;queueMicrotask(()=>{!t&&!e.defaultPrevented&&ee(n===`confirm`)})}),a.addEventListener(`minerva-after-close`,ne,{once:!0}),fi=a,i.append(a),te.observe(document,{childList:!0,subtree:!0}),a.open=!0}var di,fi,pi;function mi(){return(mi=e((()=>{m(),bt(),li(),di=[],fi=null,pi=e=>typeof document>`u`?(n&&b(G.tagName,`confirm() called without a document (server render): resolving false.`),Promise.resolve(!1)):(pt(G),new Promise(t=>{di.push({options:e,resolve:t}),fi||ui()}))})))()}function hi(e){let t={},n={},r=0;for(let n of e)n.fixed===`left`&&(t[n.key]=r,r+=gi(n.width));let i=0;for(let t=e.length-1;t>=0;t--){let r=e[t];r.fixed===`right`&&(n[r.key]=i,i+=gi(r.width))}let a;for(let t of e)if(t.fixed===`left`)a=t.key;else if(a!==void 0)break;let o;for(let t=e.length-1;t>=0;t--){let n=e[t];if(n.fixed===`right`)o=n.key;else if(o!==void 0)break}return{leftOffsets:t,rightOffsets:n,lastLeftFixedKey:a,firstRightFixedKey:o}}var gi;function _i(){return(_i=e((()=>{gi=e=>{if(typeof e==`number`)return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:0}return 0}})))()}var vi,yi,bi,xi,Si,Ci,wi,Ti,K,Ei;function Di(){return(Di=e((()=>{h(),m(),l(),_(),y(),fe(),a(),Vn(),_i(),j(),E(),w(),tn(),Qt(),yn(),vi=e=>e===void 0?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,yi=e=>e==null||e===``,bi=null,xi=(e,t)=>yi(e)||yi(t)?yi(e)?+!yi(t):-1:typeof e==`number`&&typeof t==`number`?e-t:e instanceof Date&&t instanceof Date?e.getTime()-t.getTime():typeof e==`boolean`&&typeof t==`boolean`?Number(e)-Number(t):(bi??=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`}),bi.compare(String(e),String(t))),Si=e=>typeof e.sortable==`function`?e.sortable:e.sortable?(t,n)=>xi(t[e.key],n[e.key]):null,Ci=(e,t)=>{let n=e?.key===t?e.order:null;return{key:t,order:n===null?`ascend`:n===`ascend`?`descend`:null}},wi={ascend:`ascending`,descend:`descending`},Ti=48,K=class e extends f{constructor(...e){super(...e),this.columns=[],this.rows=[],this.loading=!1,this.loadingRows=5,this.sortState=null,this.manualSort=!1,this.selectable=!1,this.selectedRowKeys=[],this.size=`medium`,this.variant=`simple`,this.hoverable=!1,this.retryable=!1,this.overflowing=!1,this.aria=new u(this),this.locale=new x(this),this.resize=null,this.handlePageChange=e=>{let{page:t,pageSize:n}=e.detail;queueMicrotask(()=>{e.defaultPrevented||(this.pagination={...this.pagination,current:t,pageSize:n})})}}static{this.tagName=`minerva-data-table`}static{this.dependencies=[Bn]}static{this.styles=[v,C`
      :host {
        display: block;
        min-width: 0;
      }
      .retry {
        align-self: center;
      }
      .sortIcon {
        display: inline-flex;
      }
    `,D(St),D(ut)]}disconnectedCallback(){super.disconnectedCallback(),this.resize?.disconnect(),this.resize=null}keyOf(e,t){let n=this.rowKey;return typeof n==`function`?n(e,t):typeof n==`string`&&n?e[n]:t}entries(){return(this.rows??[]).map((e,t)=>({row:e,index:t,key:this.keyOf(e,t)}))}rowDisabled(e){return!!this.isRowDisabled?.(e)}willUpdate(t){if(n&&(t.has(`rows`)||t.has(`rowKey`))){let t=this.entries().map(e=>e.key);new Set(t).size!==t.length&&b(e.tagName,`rows have duplicate keys: set row-key to a unique field (or a function).`)}}updated(){this.observeOverflow();let e=this.shadowRoot?.querySelector(`minerva-pagination`);e&&this.pagination&&Object.assign(e,this.pagination)}observeOverflow(){let e=this.wrapper;if(!e){this.resize?.disconnect(),this.resize=null;return}let t=()=>{let t=e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight;t!==this.overflowing&&(this.overflowing=t)};t(),!this.resize&&typeof ResizeObserver<`u`&&(this.resize=new ResizeObserver(t),this.resize.observe(e),e.firstElementChild&&this.resize.observe(e.firstElementChild))}changeSort(e){let t=Ci(this.sortState,e);this.emit(`minerva-sort-change`,t,{cancelable:!0})&&(this.sortState=t)}commitSelection(e){let t=new Set(e),n={selectedRowKeys:e,selectedRows:this.entries().filter(e=>t.has(e.key)).map(e=>e.row)};if(!this.emit(`minerva-selection-change`,n,{cancelable:!0})){this.requestUpdate();return}this.selectedRowKeys=e}toggleRow(e,t){let n=this.selectedRowKeys;this.commitSelection(t?[...n.filter(t=>t!==e),e]:n.filter(t=>t!==e))}renderTable(){let e=this.columns??[],t=this.locale.t,n=hi(e),r=this.selectable,i=r&&e[0]?.fixed===`left`,a=i?Ti:0,o=this.entries(),s=this.sortState,ee=s?.order??null,te=ee===null?void 0:e.find(e=>e.key===s?.key),ne=te?Si(te):null,re=!this.manualSort&&ne?[...o].sort((e,t)=>ee===`descend`?ne(t.row,e.row):ne(e.row,t.row)):o,ie=new Set(this.selectedRowKeys),ae=o.filter(e=>!this.rowDisabled(e.row)),c=ae.length>0&&ae.every(e=>ie.has(e.key)),oe=!c&&o.some(e=>ie.has(e.key)),ce=()=>{let e=new Set(ae.map(e=>e.key)),t=this.selectedRowKeys;this.commitSelection(c?t.filter(t=>!e.has(t)):[...t,...ae.map(e=>e.key).filter(e=>!ie.has(e))])},le=e=>{let t={textAlign:e.align},r=vi(e.width);return r!==void 0&&(t.width=r,t.minWidth=r),e.fixed===`left`?t.left=`${(n.leftOffsets[e.key]??0)+a}px`:e.fixed===`right`&&(t.right=`${n.rightOffsets[e.key]??0}px`),t},ue=e=>e.fixed===`left`&&e.key===n.lastLeftFixedKey?`left`:e.fixed===`right`&&e.key===n.firstRightFixedKey?`right`:O,de=M({width:`${Ti}px`,minWidth:`${Ti}px`,...i?{left:`0px`}:{}}),fe=i?`left`:O,pe=e.length+ +!!r,me=e=>{if(!e.sortable)return k`<th
          scope="col"
          style=${M(le(e))}
          data-ellipsis=${e.ellipsis?`true`:O}
          data-fixed=${e.fixed??O}
          data-fixed-edge=${ue(e)}
        >
          ${e.header}
        </th>`;let t=s?.key===e.key?s.order:null,n=t===`ascend`?Ne:t===`descend`?be:se;return k`<th
        scope="col"
        aria-sort=${t?wi[t]:`none`}
        style=${M(le(e))}
        data-ellipsis=${e.ellipsis?`true`:O}
        data-fixed=${e.fixed??O}
        data-fixed-edge=${ue(e)}
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
      </th>`},he;he=this.loading?Array.from({length:this.loadingRows},()=>k`<tr aria-hidden="true">
            ${r?k`<td
                    class="selectionCell"
                    style=${de}
                    data-fixed=${fe}
                  ></td>`:O}
            ${e.map(e=>k`<td
                  style=${M(le(e))}
                  data-fixed=${e.fixed??O}
                  data-fixed-edge=${ue(e)}
                >
                  <span class="skeleton"></span>
                </td>`)}
          </tr>`):o.length===0?k`<tr>
        <td colspan=${pe} class="empty">
          <slot name="empty">${this.emptyText??t(`table.empty`)}</slot>
        </td>
      </tr>`:rn(re,e=>e.key,({row:n,index:i,key:a},o)=>{let s=r&&ie.has(a);return k`<tr
            aria-selected=${s?`true`:O}
            ?data-selected=${s}
          >
            ${r?k`<td
                    class="selectionCell"
                    style=${de}
                    data-fixed=${fe}
                  >
                    <input
                      type="checkbox"
                      part="checkbox"
                      class="checkbox"
                      .checked=${wn(s)}
                      ?disabled=${this.rowDisabled(n)}
                      aria-label=${t(`table.selectRow`,{row:this.getRowLabel?.(n,i)??String(a)})}
                      @change=${e=>this.toggleRow(a,e.target.checked)}
                    />
                  </td>`:O}
            ${e.map(e=>k`<td
                  style=${M(le(e))}
                  data-ellipsis=${e.ellipsis?`true`:O}
                  data-fixed=${e.fixed??O}
                  data-fixed-edge=${ue(e)}
                >
                  ${e.render?e.render(n,o):n[e.key]}
                </td>`)}
          </tr>`});let ge=vi(this.scrollX),_e=vi(this.scrollY),ve=!!(ge||_e)||this.overflowing,ye=this.aria.label;return k`<div
      part="wrapper"
      class=${N({wrapper:!0,wrapperBordered:this.variant===`bordered`,wrapperScrollY:!!_e})}
      role=${ve?`region`:O}
      tabindex=${ve?0:O}
      aria-label=${ve?ye??t(`table.scrollRegion`):O}
      style=${M(_e?{maxHeight:_e,overflowY:`auto`}:{})}
    >
      <table
        part="table"
        class=${N({table:!0,[this.size]:!0,[this.variant]:!0,hoverable:this.hoverable,scrollX:!!ge})}
        style=${M(ge?{minWidth:ge}:{})}
        aria-label=${ye??O}
        aria-description=${this.aria.description??O}
      >
        <thead>
          <tr>
            ${r?k`<th
                    scope="col"
                    class="selectionCell"
                    style=${de}
                    data-fixed=${fe}
                  >
                    <input
                      type="checkbox"
                      part="checkbox"
                      class="checkbox"
                      .checked=${wn(c)}
                      .indeterminate=${oe}
                      ?disabled=${ae.length===0||this.loading}
                      aria-label=${t(`table.selectAll`)}
                      @change=${ce}
                    />
                  </th>`:O}
            ${e.map(me)}
          </tr>
        </thead>
        <tbody>
          ${he}
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
                          >${je}</span
                        >${this.retryLabel??this.locale.t(`table.retry`)}</span
                      >
                    </button>`:O}
            </div>`:k`${this.renderTable()}
            ${this.pagination?k`<minerva-pagination
                    part="pagination"
                    exportparts="base: pagination-base, item: pagination-item"
                    @minerva-page-change=${this.handlePageChange}
                  ></minerva-pagination>`:O}`}
    </div>`}},P([A({attribute:!1})],K.prototype,`columns`,void 0),P([A({attribute:!1})],K.prototype,`rows`,void 0),P([A({attribute:`row-key`})],K.prototype,`rowKey`,void 0),P([A({attribute:`empty-text`})],K.prototype,`emptyText`,void 0),P([A({type:Boolean,reflect:!0})],K.prototype,`loading`,void 0),P([A({type:Number,attribute:`loading-rows`})],K.prototype,`loadingRows`,void 0),P([A({attribute:!1})],K.prototype,`sortState`,void 0),P([A({type:Boolean,attribute:`manual-sort`})],K.prototype,`manualSort`,void 0),P([A({type:Boolean,reflect:!0})],K.prototype,`selectable`,void 0),P([A({attribute:!1})],K.prototype,`selectedRowKeys`,void 0),P([A({attribute:!1})],K.prototype,`isRowDisabled`,void 0),P([A({attribute:!1})],K.prototype,`getRowLabel`,void 0),P([A({reflect:!0})],K.prototype,`size`,void 0),P([A({reflect:!0})],K.prototype,`variant`,void 0),P([A({type:Boolean,reflect:!0})],K.prototype,`hoverable`,void 0),P([A({attribute:`scroll-x`})],K.prototype,`scrollX`,void 0),P([A({attribute:`scroll-y`})],K.prototype,`scrollY`,void 0),P([A({attribute:!1})],K.prototype,`pagination`,void 0),P([A()],K.prototype,`error`,void 0),P([A({type:Boolean})],K.prototype,`retryable`,void 0),P([A({attribute:`retry-label`})],K.prototype,`retryLabel`,void 0),P([S()],K.prototype,`overflowing`,void 0),P([T(`.wrapper`)],K.prototype,`wrapper`,void 0),Ei=class extends f{constructor(...e){super(...e),this.primary=``,this.monospace=!1,this.maxWidth=360,this.observer=null}static{this.tagName=`minerva-table-cell-content`}static{this.styles=[v,C`
      :host {
        display: block;
        min-width: 0;
      }
    `,D(ut)]}hasSecondarySlot(){return Array.from(this.children).some(e=>e.getAttribute(`slot`)===`secondary`)}connectedCallback(){super.connectedCallback(),this.observer??=typeof MutationObserver>`u`?null:new MutationObserver(()=>this.requestUpdate()),this.observer?.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}render(){let e=this.secondary!==void 0&&this.secondary!==null||this.hasSecondarySlot(),t=N({cellPrimary:!0,cellMono:this.monospace,cellStrong:e}),n=k`<slot>${this.primary}</slot>`;return k`<div
      part="base"
      class="cellContent"
      style=${M({maxWidth:vi(this.maxWidth)})}
    >
      ${this.monospace?k`<code class=${t}>${n}</code>`:k`<div class=${t}>${n}</div>`}
      ${e?k`<div class="cellSecondary">
              <slot name="secondary">${this.secondary}</slot>
            </div>`:O}
    </div>`}},P([A()],Ei.prototype,`primary`,void 0),P([A()],Ei.prototype,`secondary`,void 0),P([A({type:Boolean,reflect:!0})],Ei.prototype,`monospace`,void 0),P([A({attribute:`max-width`})],Ei.prototype,`maxWidth`,void 0)})))()}var Oi,ki;function Ai(){return(Ai=e((()=>{m(),y(),ye(),j(),E(),Oi=class extends f{constructor(...e){super(...e),this.label=``}static{this.tagName=`minerva-description-item`}static{this.styles=[v,C`
      :host {
        display: contents;
      }
    `]}render(){return k`<slot></slot>`}},P([A({reflect:!0})],Oi.prototype,`label`,void 0),ki=class e extends f{constructor(...e){super(...e),this.items=[],this.observer=null}static{this.tagName=`minerva-description-list`}static{this.dependencies=[Oi]}static{this.shadowRootOptions={...f.shadowRootOptions,slotAssignment:`manual`}}static{this.styles=[v,C`
      :host {
        display: block;
      }
    `,D(ne)]}declarativeItems(){return Array.from(this.children).filter(e=>e.localName===Oi.tagName)}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.requestUpdate()),this.observer.observe(this,{childList:!0,attributes:!0,subtree:!0,attributeFilter:[`label`]}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null}updated(){let t=this.declarativeItems();if(Array.from(this.renderRoot.querySelectorAll(`slot[data-item]`)).forEach((e,n)=>{let r=t[n];r&&typeof e.assign==`function`&&e.assign(r)}),n){let t=Array.from(this.children).filter(e=>e.localName!==Oi.tagName);t.length&&b(e.tagName,`only <minerva-description-item> children are rendered (ignored: <${t[0].localName}>).`)}}render(){let e=this.declarativeItems();return k`<dl part="base" class="descriptionList">
      ${(this.items??[]).map(e=>k`<div part="row" class="row">
            <dt part="term">${e.label}</dt>
            <dd part="description">${e.value}</dd>
          </div>`)}
      ${e.map(e=>k`<div part="row" class="row">
            <dt part="term">${e.label}</dt>
            <dd part="description"><slot data-item></slot></dd>
          </div>`)}
    </dl>`}},P([A({attribute:!1})],ki.prototype,`items`,void 0)})))()}var ji,Mi;function Ni(){return(Ni=e((()=>{m(),y(),d(),re(),j(),E(),w(),tn(),ji=e=>typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Mi=class e extends f{constructor(...e){super(...e),this.variant=`solid`,this.orientation=`horizontal`,this.thickness=1,this.spacing=16,this.textAlign=`center`,this.elevation=!1,this.flexItem=!1,this.slots=new g(this)}static{this.tagName=`minerva-divider`}static{this.styles=[v,C`
      :host {
        display: block;
      }
      :host([orientation="vertical"]) {
        display: inline-flex;
        vertical-align: middle;
      }
      :host([orientation="vertical"][flex-item]) {
        align-self: stretch;
      }
    `,D(Oe)]}updated(){n&&this.orientation===`vertical`&&this.slots.test(`[default]`)&&b(e.tagName,`text is only rendered by horizontal dividers; it is ignored when orientation is vertical.`)}render(){let e=this.orientation===`horizontal`,t=e&&this.slots.test(`[default]`),n=this.textAlign,r={};if(this.thickness!=null&&!Number.isNaN(this.thickness)&&(r.borderWidth=`${this.thickness}px`),this.length!=null&&this.length!==``&&(r[e?`width`:`height`]=ji(this.length)),this.spacing!=null&&!Number.isNaN(this.spacing)){let t=`${this.spacing}px`;r.marginTop=e?t:`0`,r.marginBottom=e?t:`0`,r.marginLeft=e?`0`:t,r.marginRight=e?`0`:t}let i=N({divider:!0,[this.variant]:!0,[this.orientation]:!0,withText:t,[`text${n.charAt(0).toUpperCase()}${n.slice(1)}`]:t,elevation:this.elevation,flexItem:this.flexItem});return t?k`<div
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
    />`}},P([A({reflect:!0})],Mi.prototype,`variant`,void 0),P([A({reflect:!0})],Mi.prototype,`orientation`,void 0),P([A({type:Number})],Mi.prototype,`thickness`,void 0),P([A()],Mi.prototype,`length`,void 0),P([A({type:Number})],Mi.prototype,`spacing`,void 0),P([A({attribute:`text-align`})],Mi.prototype,`textAlign`,void 0),P([A({type:Boolean,reflect:!0})],Mi.prototype,`elevation`,void 0),P([A({type:Boolean,reflect:!0,attribute:`flex-item`})],Mi.prototype,`flexItem`,void 0)})))()}var Pi,q;function Fi(){return(Fi=e((()=>{h(),m(),l(),_(),y(),d(),Nn(),Ln(),On(),Dn(),_e(),Nt(),j(),E(),w(),Pi=[`left`,`right`,`top`,`bottom`],q=class e extends f{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.side=`right`,this.size=`medium`,this.hideCloseButton=!1,this.dialogRole=`dialog`,this.nonModal=!1,this.locale=new x(this),this.aria=new u(this),this.slots=new g(this),this.presence=new xe(this,()=>this.panel),this.modal=new Pn(this),this.focusScope=new kn(this,()=>({trapped:!this.nonModal,loop:!0,restoreFocus:!0})),this.layer=new jn(this,()=>({disableOutsidePointerEvents:!this.nonModal,branches:()=>[this.triggerElement()],onFocusOutside:()=>this.nonModal,onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleClick=e=>{if(e.defaultPrevented)return;let t=e.composedPath(),n=this.triggerElement();if(n&&t.includes(n)){this.requestOpenChange(!this.open,`trigger`);return}let r=t.find(e=>e instanceof Element&&e.hasAttribute(`data-drawer-close`));r&&this.contains(r)&&this.requestOpenChange(!1,`close-slot`)}}static{this.tagName=`minerva-drawer`}static{this.styles=[v,Mn,C`
      :host {
        display: contents;
      }
    `,D(ee)]}show(){this.open=!0}hide(){this.open=!1}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleClick)}willUpdate(t){t.has(`open`)&&this.presence.sync(this.open),n&&t.has(`side`)&&!Pi.includes(this.side)&&b(e.tagName,`invalid side "${this.side}" (expected left, right, top or bottom).`)}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)||e.has(`nonModal`)&&this.open){let t=this.panel;this.open&&t?(e.has(`nonModal`)&&!e.has(`open`)&&(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate()),et(this.overlay),et(t),this.nonModal||this.modal.activate(this),this.layer.activate(t),this.focusScope.activate(t),e.has(`open`)&&this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleClick),p(this.panel),p(this.overlay)}afterClose(){p(this.panel),p(this.overlay),this.emit(`minerva-after-close`)}render(){let e=this.open||this.presence.present,t=this.open?`open`:`closed`,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description,i=Pi.includes(this.side)?this.side:`right`;return k`<slot name="trigger"></slot> ${e?k`${this.nonModal?O:k`<div
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
                        ${c}
                      </button>`}
              </div>`:O}`}},P([A({type:Boolean,reflect:!0})],q.prototype,`open`,void 0),P([A()],q.prototype,`label`,void 0),P([A()],q.prototype,`description`,void 0),P([A({attribute:`hidden-description`})],q.prototype,`hiddenDescription`,void 0),P([A({reflect:!0})],q.prototype,`side`,void 0),P([A({reflect:!0})],q.prototype,`size`,void 0),P([A({type:Boolean,attribute:`hide-close-button`})],q.prototype,`hideCloseButton`,void 0),P([A({attribute:`close-label`})],q.prototype,`closeLabel`,void 0),P([A({attribute:`dialog-role`})],q.prototype,`dialogRole`,void 0),P([A({type:Boolean,reflect:!0,attribute:`non-modal`})],q.prototype,`nonModal`,void 0),P([T(`.content`)],q.prototype,`panel`,void 0),P([T(`.overlay`)],q.prototype,`overlay`,void 0)})))()}var Ii,Li,Ri,zi;function Bi(){return(Bi=e((()=>{h(),m(),_(),y(),d(),Ee(),j(),E(),w(),tn(),Ii=En`<svg class="defaultIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none" aria-hidden="true" focusable="false"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM5 5v9h4a3 3 0 0 0 6 0h4V5ZM5 16v3h14v-3h-2.54a5 5 0 0 1-8.92 0Z" /></svg>`,Li=En`<svg class="defaultIcon" aria-hidden="true" focusable="false" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse style="fill: var(--surface-muted-color)" cx="32" cy="33" rx="32" ry="7" /><g fill-rule="nonzero" style="stroke: var(--border-strong-color)"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" /><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" style="fill: var(--surface-color)" /></g></g></svg>`,Ri=e=>e&&/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,zi=class e extends f{constructor(...e){super(...e),this.heading=``,this.hideDescription=!1,this.hideIcon=!1,this.useSvg=!1,this.showShadow=!1,this.locale=new x(this),this.aria=new u(this),this.slots=new g(this)}static{this.tagName=`minerva-empty`}static{this.styles=[v,C`
      :host {
        display: block;
      }
    `,D(Ft)]}updated(){n&&this.hideDescription&&this.description&&b(e.tagName,`description is ignored while hide-description is set.`)}render(){let e=!!this.heading||this.slots.test(`heading`),t=this.slots.test(`description`),n=this.description??this.locale.t(`empty.description`),r=!this.hideDescription&&(t||n!==``),i=this.slots.test(`action`)||this.slots.test(`secondary-action`),a=this.aria.label;return k`<div
      part="base"
      class=${N({empty:!0,showShadow:this.showShadow,sized:!!this.size,[`size-${this.size}`]:!!this.size})}
      style=${M({width:Ri(this.width),height:Ri(this.height)})}
      role="status"
      aria-label=${a??O}
      aria-labelledby=${a?O:e?`title`:r?`description`:O}
      aria-describedby=${e&&r?`description`:O}
    >
      ${this.hideIcon?O:k`<div part="icon" class="iconWrapper">
              <slot name="icon">${this.useSvg?Li:Ii}</slot>
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
    </div>`}},P([A()],zi.prototype,`heading`,void 0),P([A()],zi.prototype,`description`,void 0),P([A({type:Boolean,attribute:`hide-description`})],zi.prototype,`hideDescription`,void 0),P([A({type:Boolean,attribute:`hide-icon`})],zi.prototype,`hideIcon`,void 0),P([A({reflect:!0})],zi.prototype,`size`,void 0),P([A({type:Boolean,attribute:`use-svg`})],zi.prototype,`useSvg`,void 0),P([A()],zi.prototype,`width`,void 0),P([A()],zi.prototype,`height`,void 0),P([A({type:Boolean,attribute:`show-shadow`})],zi.prototype,`showShadow`,void 0)})))()}var Vi,Hi;function Ui(){return(Ui=e((()=>{m(),y(),d(),Ke(),j(),E(),Vi=e=>e.localName===`minerva-checkbox`||e.localName===`minerva-switch`||e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`),Hi=class e extends f{constructor(...e){super(...e),this.label=``,this.helperText=``,this.errorMessage=``,this.invalid=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.requiredIndicator=`*`,this.slots=new g(this),this.observer=null,this.control=null,this.saved=new Map}static{this.tagName=`minerva-form-control`}static{this.styles=[v,C`
      :host {
        display: block;
      }
      .label {
        cursor: default;
      }
    `,D(Lt)]}get controlElement(){return Array.from(this.children).find(e=>!e.hasAttribute(`slot`))??null}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.sync()),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.release()}updated(){this.sync()}get labelText(){return this.label?this.label:Array.from(this.children).filter(e=>e.getAttribute(`slot`)===`label`).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `)}slotText(e){return Array.from(this.children).filter(t=>t.getAttribute(`slot`)===e).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `)}get descriptionText(){return this.invalid?this.errorMessage||this.slotText(`error-message`):this.helperText||this.slotText(`helper-text`)}save(e,t){this.saved.has(e)||this.saved.set(e,t)}setAttr(e,t,n){let r=`@${t}`;if(n===null){if(!this.saved.has(r))return;let n=this.saved.get(r);this.saved.delete(r),n===null?e.removeAttribute(t):e.setAttribute(t,n);return}this.save(r,e.getAttribute(t)),e.getAttribute(t)!==n&&e.setAttribute(t,n)}setProp(e,t,n){let r=`.${t}`;if(!n){if(!this.saved.has(r))return;e[t]=this.saved.get(r),this.saved.delete(r);return}this.save(r,e[t]),e[t]=!0}propFor(e,t){return{invalid:[`invalid`,`error`],required:[`required`],disabled:[`disabled`],readonly:[`readonly`,`readOnly`]}[t].find(t=>t in e&&typeof e[t]==`boolean`)??null}release(){let e=this.control;if(e){for(let[t,n]of this.saved)if(t.startsWith(`@`)){let r=t.slice(1);n===null?e.removeAttribute(r):e.setAttribute(r,n)}else e[t.slice(1)]=n;this.saved.clear(),this.control=null}}sync(){let t=this.controlElement;if(t!==this.control&&(this.release(),this.control=t),!t)return;let r=this.labelText,i=this.saved.has(`@aria-label`);r&&(i||!t.hasAttribute(`aria-label`))?this.setAttr(t,`aria-label`,r):r||this.setAttr(t,`aria-label`,null);let a=this.descriptionText;this.setAttr(t,`aria-description`,a||null);for(let e of[`invalid`,`required`,`disabled`,`readonly`]){let n=this.propFor(t,e);n&&this.setProp(t,n,this[e])}if(this.setAttr(t,`aria-invalid`,this.invalid?`true`:null),this.setAttr(t,`aria-required`,this.required?`true`:null),this.setAttr(t,`aria-readonly`,this.readonly?`true`:null),n&&this.children.length>0){let t=Array.from(this.children).filter(e=>!e.hasAttribute(`slot`));t.length>1&&b(e.tagName,`wraps ONE control, found ${t.length} elements in the default slot: only the first one is wired.`)}}handleLabelClick(e){let t=this.controlElement;t&&!this.disabled&&(e.preventDefault(),Vi(t)?t.click():t.focus())}render(){let e=!!this.label||this.slots.test(`label`),t=!!this.helperText||this.slots.test(`helper-text`),n=!!this.errorMessage||this.slots.test(`error-message`);return k`<div class="root" part="base">
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
    </div>`}},P([A()],Hi.prototype,`label`,void 0),P([A({attribute:`helper-text`})],Hi.prototype,`helperText`,void 0),P([A({attribute:`error-message`})],Hi.prototype,`errorMessage`,void 0),P([A({type:Boolean,reflect:!0})],Hi.prototype,`invalid`,void 0),P([A({type:Boolean,reflect:!0})],Hi.prototype,`required`,void 0),P([A({type:Boolean,reflect:!0})],Hi.prototype,`disabled`,void 0),P([A({type:Boolean,reflect:!0})],Hi.prototype,`readonly`,void 0),P([A({attribute:`required-indicator`})],Hi.prototype,`requiredIndicator`,void 0)})))()}var Wi;function Gi(){return(Gi=e((()=>{y(),gr(),jt(),rt(),Un(),j(),E(),tn(),Wi=class e extends f{constructor(...e){super(...e),this.columns=1,this.gap=4}static{this.tagName=`minerva-form-layout`}static{this.styles=[v,C`
      :host {
        display: block;
        min-width: 0;
      }
      .layout ::slotted(*) {
        min-width: 0;
      }
    `,D(He),D(ot)]}render(){let t=Hn(e.tagName,this.columns,this.rowGap??this.gap,this.columnGap??this.gap);return k`<div class="root" part="base" style=${M(t)}>
      <div class="layout" part="layout"><slot></slot></div>
    </div>`}},P([A({converter:Gn})],Wi.prototype,`columns`,void 0),P([A({converter:hr})],Wi.prototype,`gap`,void 0),P([A({attribute:`row-gap`,converter:hr})],Wi.prototype,`rowGap`,void 0),P([A({attribute:`column-gap`,converter:hr})],Wi.prototype,`columnGap`,void 0)})))()}function Ki(e){let t=``;if(e&&typeof window<`u`){let n=un(window);n.isSupported&&(n.addHook(`uponSanitizeAttribute`,(e,t)=>{t.attrName===`src`&&(e.nodeName!==`IMG`||!/^data:image\/(?:png|jpeg|gif|webp|avif);base64,[a-z0-9+/=\s]+$/i.test(t.attrValue))&&(t.keepAttr=!1)}),n.sanitize(Yi,Ji)===Xi&&(t=n.sanitize(e,Ji)))}return`<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="${qi}"><meta name="referrer" content="no-referrer"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>${t}</body></html>`}var qi,Ji,Yi,Xi;function Zi(){return(Zi=e((()=>{nn(),qi=`default-src 'none'; script-src 'none'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'; object-src 'none'; frame-src 'none'; font-src 'none'; media-src 'none'; form-action 'none'; base-uri 'none'`,Ji={ALLOWED_TAGS:`a abbr b bdi bdo blockquote br caption center code col colgroup dd del div dl dt em figcaption figure h1 h2 h3 h4 h5 h6 hr i img ins li ol p pre s section small span strong style sub sup table tbody td tfoot th thead tr u ul wbr`.split(` `),ALLOWED_ATTR:`alt title class style lang dir role width height align valign bgcolor border cellpadding cellspacing colspan rowspan scope src`.split(` `),ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!0,FORBID_TAGS:[`base`,`meta`,`link`,`script`,`form`,`input`,`button`,`iframe`,`object`,`embed`,`svg`,`math`],FORBID_ATTR:[`href`,`srcdoc`,`srcset`,`action`,`formaction`,`target`,`ping`,`id`,`name`],FORCE_BODY:!0,RETURN_TRUSTED_TYPE:!1},Yi=`<p title="t" onclick="x()">ok</p><script>x()<\/script><img alt="a" src="https://x.invalid/p" onerror="x()">`,Xi=`<p title="t">ok</p><img alt="a">`})))()}var Qi;function $i(){return($i=e((()=>{h(),m(),y(),ht(),Zi(),j(),E(),tn(),$t(),Qi=class e extends f{constructor(...e){super(...e),this.html=``,this.label=``,this.viewport=`desktop`,this.mobileWidth=375,this.height=600,this.doc=Ki(),this.aria=new u(this)}static{this.tagName=`minerva-html-preview`}static{this.styles=[v,C`
      :host {
        display: block;
      }
    `,D(xt)]}willUpdate(e){e.has(`html`)&&(this.doc=Ki(this.html))}updated(){n&&!this.label&&!this.aria.label&&b(e.tagName,`set label (or aria-label): the iframe needs a title for assistive technologies.`)}render(){let e=Number.isFinite(this.mobileWidth)&&this.mobileWidth>0?this.mobileWidth:375,t=Number.isFinite(this.height)&&this.height>0?this.height:600;return k`<div part="base" class="preview">
      ${pn(this.doc,k`<iframe
          part="frame"
          class="frame"
          title=${this.label||this.aria.label||``}
          sandbox=""
          referrerpolicy="no-referrer"
          srcdoc=${this.doc}
          style=${M({width:this.viewport===`mobile`?`${e}px`:`100%`,height:`${t}px`})}
        ></iframe>`)}
    </div>`}},P([A()],Qi.prototype,`html`,void 0),P([A()],Qi.prototype,`label`,void 0),P([A({reflect:!0})],Qi.prototype,`viewport`,void 0),P([A({type:Number,attribute:`mobile-width`})],Qi.prototype,`mobileWidth`,void 0),P([A({type:Number})],Qi.prototype,`height`,void 0),P([S()],Qi.prototype,`doc`,void 0)})))()}var ea,ta,J;function na(){return(na=e((()=>{h(),m(),l(),_(),y(),kt(),On(),vt(),tt(),j(),E(),w(),ea=200,ta=300,J=class e extends f{constructor(...e){super(...e),this.color=`neutral`,this.variant=`ghost`,this.size=`medium`,this.shape=`circle`,this.disabled=!1,this.loading=!1,this.toggle=!1,this.pressed=!1,this.tooltipPlacement=`top`,this.noTooltip=!1,this.type=`button`,this.tooltipOpen=!1,this.tooltipPositioned=!1,this.internals=qe(this),this.aria=new u(this),this.locale=new x(this),this.floating=new In(this,()=>({anchor:()=>this.button,floating:()=>this.tooltipElement,branches:()=>[this],placement:this.tooltipPlacement,offset:{mainAxis:8},dismissOnPointerDownOutside:!1,dismissOnFocusOutside:!1,onDismiss:()=>this.hideTooltip(),onPosition:()=>{this.tooltipPositioned=!0}})),this.handlePointerEnter=()=>{if(!this.tooltipEnabled||this.tooltipOpen){this.clearTimers();return}this.clearTimers(),this.enterTimer=setTimeout(()=>this.showTooltip(),ea)},this.handlePointerLeave=()=>{this.clearTimers(),this.tooltipOpen&&(this.leaveTimer=setTimeout(()=>this.hideTooltip(),ta))},this.blockInactiveClicks=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.tagName=`minerva-icon-button`}static{this.formAssociated=!0}static{this.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[v,Mn,C`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }
      .spinner {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: currentColor;
      }
      .spinner svg {
        animation: minerva-icon-button-spin 1s linear infinite;
      }
      .spinner.xsmall {
        font-size: var(--progress-size, 12px);
      }
      .spinner.small {
        font-size: var(--progress-size, 16px);
      }
      .spinner.medium {
        font-size: var(--progress-size, 24px);
      }
      .spinner.large {
        font-size: var(--progress-size, 32px);
      }
      @keyframes minerva-icon-button-spin {
        to {
          transform: rotate(360deg);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .spinner svg {
          animation: none;
        }
      }
    `,D(dt),D(Xe)]}get form(){return this.internals?.form??null}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}get tooltipContent(){return this.tooltip||this.label||void 0}get tooltipEnabled(){return!this.noTooltip&&!!this.tooltipContent&&!this.disabled&&!this.loading}clearTimers(){clearTimeout(this.enterTimer),clearTimeout(this.leaveTimer)}showTooltip(){this.tooltipEnabled&&(this.clearTimers(),this.tooltipOpen=!0)}hideTooltip(){this.clearTimers(),this.tooltipOpen=!1,this.tooltipPositioned=!1}handleClick(e){if(this.loading||this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}if(this.toggle){let e=!this.pressed;this.emit(`minerva-pressed-change`,{pressed:e},{cancelable:!0})&&(this.pressed=e)}let t=this.form;t&&(this.type===`submit`?t.requestSubmit():this.type===`reset`&&t.reset())}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.blockInactiveClicks,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.blockInactiveClicks,!0),this.clearTimers(),this.tooltipOpen=!1}willUpdate(e){(e.has(`disabled`)||e.has(`loading`)||e.has(`noTooltip`))&&!this.tooltipEnabled&&this.hideTooltip()}updated(){this.floating.sync(this.tooltipOpen&&this.tooltipEnabled),n&&!this.label&&!this.aria.label&&b(e.tagName,`icon buttons only contain an icon: set label (or aria-label) to give them an accessible name.`)}render(){let e=this.tooltipOpen&&this.tooltipEnabled;return k`<button
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
                >${Pt}</span
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
            </div>`:O}`}},P([A()],J.prototype,`label`,void 0),P([A({reflect:!0})],J.prototype,`color`,void 0),P([A({reflect:!0})],J.prototype,`variant`,void 0),P([A({reflect:!0})],J.prototype,`size`,void 0),P([A({reflect:!0})],J.prototype,`shape`,void 0),P([A({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),P([A({type:Boolean,reflect:!0})],J.prototype,`loading`,void 0),P([A({type:Boolean,reflect:!0})],J.prototype,`toggle`,void 0),P([A({type:Boolean,reflect:!0})],J.prototype,`pressed`,void 0),P([A()],J.prototype,`tooltip`,void 0),P([A({attribute:`tooltip-placement`})],J.prototype,`tooltipPlacement`,void 0),P([A({type:Boolean,attribute:`no-tooltip`})],J.prototype,`noTooltip`,void 0),P([A({reflect:!0})],J.prototype,`type`,void 0),P([S()],J.prototype,`tooltipOpen`,void 0),P([S()],J.prototype,`tooltipPositioned`,void 0),P([T(`button`)],J.prototype,`button`,void 0),P([T(`.tooltip`)],J.prototype,`tooltipElement`,void 0)})))()}var ra,Y;function ia(){return(ia=e((()=>{h(),m(),l(),_(),y(),d(),st(),vt(),j(),E(),w(),Qt(),ra=0,Y=class e extends Ue{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.type=`text`,this.variant=`outline`,this.size=`medium`,this.invalid=!1,this.placeholder=``,this.readonly=!1,this.clearable=!1,this.showCharCount=!1,this.passwordVisible=!1,this.countId=`minerva-input-count-${ra++}`,this.locale=new x(this),this.aria=new u(this,()=>this.labels),this.slots=new g(this),this.dirty=!1}static{this.tagName=`minerva-input`}static{this.shadowRootOptions={...Ue.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[v,C`
      :host {
        display: inline-flex;
        width: 100%;
        min-width: 0;
        vertical-align: middle;
      }
    `,D(Ct)]}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}select(){this.input?.select()}getFormValue(){return this.value}getValidity(){let e=this.input;return e?{flags:Et(e.validity),message:e.validationMessage,anchor:e}:this.required&&!this.value?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`)}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.passwordVisible=!1}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`value`)&&t.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),t.has(`defaultValue`)&&!this.dirty&&(this.value=this.defaultValue),n&&t.has(`maxlength`)&&this.minlength!==void 0&&this.maxlength!==void 0&&this.minlength>this.maxlength&&b(e.tagName,`minlength (${this.minlength}) is greater than maxlength (${this.maxlength}): no value can be valid.`)}handleInput(){this.value=this.input.value,this.emit(`minerva-input`,{value:this.value})}handleChange(){this.value=this.input.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}clear(){this.value=``,this.input.value=``,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.emit(`minerva-input`,{value:``}),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:``}),this.emit(`minerva-clear`),this.input.focus()}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.type===`password`,r=this.clearable&&this.value!==``&&!t&&!this.readonly,i=this.passwordVisible?this.hidePasswordLabel??e(`input.hidePassword`):this.showPasswordLabel??e(`input.showPassword`),a=this.showCharCount?this.countId:void 0;return k`<div
      part="base"
      class=${N({root:!0,[this.variant]:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
      data-component="input"
    >
      ${this.slots.test(`prefix`)?k`<span class="addon start"><slot name="prefix"></slot></span>`:O}
      <input
        part="input"
        class="field"
        .value=${wn(this.value)}
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
              ${c}
            </button>`:O}
      ${n?k`<button
              part="password-toggle"
              type="button"
              class="action"
              aria-label=${i}
              ?disabled=${t}
              @click=${()=>this.passwordVisible=!this.passwordVisible}
            >
              ${this.passwordVisible?Rt:it}
            </button>`:O}
      ${this.showCharCount?k`<span id=${this.countId} class="count" part="count"
              >${this.maxlength!=null&&this.maxlength>=0?`${this.value.length} / ${this.maxlength}`:this.value.length}</span
            >`:O}
      ${this.slots.test(`suffix`)?k`<span class="addon end"><slot name="suffix"></slot></span>`:O}
    </div>`}},P([A({attribute:!1})],Y.prototype,`value`,void 0),P([A({attribute:`value`})],Y.prototype,`defaultValue`,void 0),P([A({reflect:!0})],Y.prototype,`type`,void 0),P([A({reflect:!0})],Y.prototype,`variant`,void 0),P([A({reflect:!0})],Y.prototype,`size`,void 0),P([A({type:Boolean,reflect:!0})],Y.prototype,`invalid`,void 0),P([A()],Y.prototype,`placeholder`,void 0),P([A({type:Boolean,reflect:!0})],Y.prototype,`readonly`,void 0),P([A({type:Number})],Y.prototype,`minlength`,void 0),P([A({type:Number})],Y.prototype,`maxlength`,void 0),P([A()],Y.prototype,`pattern`,void 0),P([A()],Y.prototype,`min`,void 0),P([A()],Y.prototype,`max`,void 0),P([A()],Y.prototype,`step`,void 0),P([A()],Y.prototype,`autocomplete`,void 0),P([A()],Y.prototype,`inputmode`,void 0),P([A({type:Boolean,reflect:!0})],Y.prototype,`clearable`,void 0),P([A({attribute:`clear-label`})],Y.prototype,`clearLabel`,void 0),P([A({type:Boolean,attribute:`show-char-count`})],Y.prototype,`showCharCount`,void 0),P([A({attribute:`show-password-label`})],Y.prototype,`showPasswordLabel`,void 0),P([A({attribute:`hide-password-label`})],Y.prototype,`hidePasswordLabel`,void 0),P([S()],Y.prototype,`passwordVisible`,void 0),P([T(`input`)],Y.prototype,`input`,void 0)})))()}function aa(e){if(!e.trim())return{status:`empty`};try{return JSON.parse(e),{status:`valid`}}catch(e){return{status:`invalid`,error:e instanceof Error?e.message:String(e)}}}function oa(e,t){let n=Math.min(10,Math.max(0,Math.trunc(t)||0));if(n>0)return _n(e,hn(e,void 0,{tabSize:n,insertSpaces:!0,eol:`
`}));let r=fn(e,!0),i=[];for(;r.getPosition()<e.length;){r.scan();let t=r.getTokenOffset();i.push(e.slice(t,t+r.getTokenLength()))}return i.join(``)}var X;function sa(){return(sa=e((()=>{h(),m(),l(),_(),y(),kt(),vt(),At(),Je(),j(),E(),w(),Qt(),ln(),X=class e extends Ue{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.rows=8,this.hideToolbar=!1,this.indent=2,this.invalid=!1,this.readonly=!1,this.placeholder=``,this.focused=!1,this.locale=new x(this),this.aria=new u(this,()=>this.labels),this.dirty=!1}static{this.tagName=`minerva-json-field`}static{this.shadowRootOptions={...Ue.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[v,C`
      :host {
        display: block;
        width: 100%;
        min-width: 0;
      }
    `,D(ft),D(dt),D(Dt),C`
      /* the textarea's size classes are global here: keep the icon button's own size */
      .toolbar .iconButton {
        min-height: 0;
      }
      .status > svg {
        width: 16px;
        height: 16px;
      }
    `]}focus(e){this.textarea?.focus(e)}blur(){this.textarea?.blur()}formatValue(){aa(this.value).status===`valid`&&(this.value=oa(this.value,this.indent))}getFormValue(){return this.value}getValidity(){let e=this.textarea,t=aa(this.value);return t.status===`invalid`?{flags:{badInput:!0},message:`${this.invalidLabel??this.locale.t(`jsonField.invalid`)}: ${t.error}`,anchor:e}:this.required&&t.status===`empty`?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:e}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),n&&t.has(`indent`)&&(this.indent<0||this.indent>10)&&b(e.tagName,`indent (${this.indent}) is clamped to 0..10.`)}get locked(){return this.isDisabled||this.readonly}formatNow(){if(this.locked||aa(this.value).status!==`valid`)return;let e=oa(this.value,this.indent);e!==this.value&&(this.dirty=!0,this.value=e,this.emit(`minerva-input`,{value:e}),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e}))}handleInput(){this.locked||(this.dirty=!0,this.value=String(this.textarea.value),this.emit(`minerva-input`,{value:this.value}))}handleChange(){this.value=String(this.textarea.value),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.focused?{status:`empty`}:aa(this.value),r=n.status===`invalid`,i=r||this.invalid,a=this.locked||!this.value.trim(),o=n.status===`valid`?this.validLabel??e(`jsonField.valid`):n.status===`invalid`?`${this.invalidLabel??e(`jsonField.invalid`)}: ${n.error}`:``,s=[this.aria.description,r?o:void 0].filter(Boolean).join(` `);return k`<div class="root" part="base">
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
        .value=${wn(this.value)}
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
        ${n.status===`valid`?k`${de}<span>${o}</span>`:n.status===`invalid`?k`${lt}<span>${o}</span>`:O}
      </div>
    </div>`}},P([A({attribute:!1})],X.prototype,`value`,void 0),P([A({attribute:`value`})],X.prototype,`defaultValue`,void 0),P([A({type:Number})],X.prototype,`rows`,void 0),P([A({type:Boolean,attribute:`hide-toolbar`})],X.prototype,`hideToolbar`,void 0),P([A({type:Number})],X.prototype,`indent`,void 0),P([A({type:Boolean,reflect:!0})],X.prototype,`invalid`,void 0),P([A({type:Boolean,reflect:!0})],X.prototype,`readonly`,void 0),P([A()],X.prototype,`placeholder`,void 0),P([A({attribute:`format-label`})],X.prototype,`formatLabel`,void 0),P([A({attribute:`valid-label`})],X.prototype,`validLabel`,void 0),P([A({attribute:`invalid-label`})],X.prototype,`invalidLabel`,void 0),P([S()],X.prototype,`focused`,void 0),P([T(`textarea`)],X.prototype,`textarea`,void 0)})))()}function ca(e){if(!e)return[];try{let t=JSON.parse(e);if(Array.isArray(t))return t.filter(e=>e&&typeof e==`object`).map(e=>({id:typeof e.id==`string`?e.id:``,key:String(e.key??``),value:String(e.value??``)}));if(t&&typeof t==`object`)return Object.entries(t).map(([e,t])=>({id:``,key:e,value:typeof t==`string`?t:JSON.stringify(t)}))}catch{}return[]}var la,ua;function da(){return(da=e((()=>{h(),m(),l(),_(),y(),kt(),vt(),Sr(),Ui(),yt(),Kn(),j(),E(),yn(),la=0,ua=class e extends Ue{constructor(...e){super(...e),this.value=[],this.defaultValue=[],this.editorId=`kv-${la++}`,this.nextId=0,this.dirty=!1,this.pendingFocus=null,this.locale=new x(this),this.aria=new u(this,()=>this.labels)}static{this.tagName=`minerva-key-value-editor`}static{this.dependencies=[B,Hi,Wn]}static{this.styles=[v,C`
      :host {
        display: block;
        width: 100%;
        min-width: 0;
      }
    `,D(dt),D(We),C`
      /* lib-core sizes the key <textarea>; reach it through its variable */
      .key {
        --textarea-min-height: var(
          --key-value-editor-control-height,
          var(--control-height-sm)
        );
      }
    `]}focus(e){(this.renderRoot.querySelector(`minerva-textarea`)??this.renderRoot.querySelector(`minerva-button`))?.focus(e)}getFormValue(){return JSON.stringify(this.value.map(({key:e,value:t})=>({key:e,value:t})))}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.renderRoot.querySelector(`minerva-button`)??null}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=ca(e))}willUpdate(t){if(t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),t.has(`value`)&&(this.value.some(e=>!e.id)&&(this.value=this.value.map(e=>e.id?e:{...e,id:this.newId()})),n)){let t=this.value.map(e=>e.id);new Set(t).size!==t.length&&b(e.tagName,`entries have duplicate ids: rows are tracked by id, make them unique.`)}}updated(e){super.updated(e);let t=this.pendingFocus;if(!t)return;this.pendingFocus=null;let n=e=>this.value.some(t=>t.id===e),r=e=>Array.from(this.renderRoot.querySelectorAll(`[data-entry-id]`)).find(t=>e!==void 0&&t.dataset.entryId===e)??null;if(t.kind===`add`){let e=n(t.id)?r(t.id)?.querySelector(`.key`):null;e&&e.updateComplete.then(()=>e.focus())}else n(t.id)||(r(t.nextId)?.querySelector(`.remove`)??this.renderRoot.querySelector(`minerva-button`))?.focus()}newId(){let e;do e=`${this.editorId}-${this.nextId++}`;while(this.value.some(t=>t.id===e));return e}commit(e){this.dirty=!0,this.value=e,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e})}add(){if(this.isDisabled)return;let e=this.newId();this.pendingFocus={kind:`add`,id:e},this.commit([...this.value,{id:e,key:``,value:``}])}removeEntry(e){if(this.isDisabled)return;let t=this.value.findIndex(t=>t.id===e),n=this.value[t+1]??this.value[t-1];this.pendingFocus={kind:`remove`,id:e,nextId:n?.id},this.commit(this.value.filter(t=>t.id!==e))}handleInput(e,t,n){if(e.stopPropagation(),this.isDisabled)return;let r=e.target.value;this.dirty=!0,this.value=this.value.map(e=>e.id===t?{...e,[n]:r}:e),this.emit(`minerva-input`,{value:this.value})}handleFieldChange(e){e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}renderField(e,t,n,r){let i=this.errors?.[e.id]?.[n];return k`<minerva-form-control
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
      ${rn(this.value,e=>e.id,(e,a)=>k`<div class="row" part="row" data-entry-id=${e.id}>
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
              ${c}
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
        <span slot="start">${ke}</span>
        <span>${this.addLabel??e(`keyValueEditor.add`)}</span>
      </minerva-button>
    </div>`}},P([A({attribute:!1})],ua.prototype,`value`,void 0),P([A({attribute:`value`,converter:{fromAttribute:e=>ca(e)}})],ua.prototype,`defaultValue`,void 0),P([A({attribute:`key-label`})],ua.prototype,`keyLabel`,void 0),P([A({attribute:`value-label`})],ua.prototype,`valueLabel`,void 0),P([A({attribute:`add-label`})],ua.prototype,`addLabel`,void 0),P([A({attribute:`remove-label`})],ua.prototype,`removeLabel`,void 0),P([A({attribute:!1})],ua.prototype,`errors`,void 0)})))()}function fa(e,t,n){t&&`role`in t?t.role=n:e.hasAttribute(`role`)||e.setAttribute(`role`,n)}var pa,ma;function ha(){return(ha=e((()=>{m(),y(),d(),vt(),ct(),j(),E(),w(),pa=class e extends f{constructor(...e){super(...e),this.density=`default`,this.noDividers=!1,this.internals=qe(this)}static{this.tagName=`minerva-list`}static{this.styles=[v,C`
      :host {
        display: block;
        /* density of the items (consumed by minerva-list-item) */
        --_minerva-list-item-min-height: initial;
        --_minerva-list-item-padding-y: initial;
      }
      :host([density="compact"]) {
        --_minerva-list-item-min-height: calc(
          2 * var(--row-padding-y) + 1.5rem
        );
        --_minerva-list-item-padding-y: var(--row-padding-y);
      }
      :host(:not([no-dividers]))
        ::slotted(minerva-list-item:not(:first-child)) {
        border-top: 1px solid var(--list-divider-color, var(--border-color));
      }
    `,D(Tt)]}connectedCallback(){super.connectedCallback(),fa(this,this.internals,`list`)}updated(){if(n){let t=Array.from(this.children).find(e=>e.localName!==ma.tagName);t&&b(e.tagName,`children should be <minerva-list-item> elements (found <${t.localName}>): other elements break the list semantics.`)}}render(){return k`<div
      part="base"
      class=${N({list:!0,compact:this.density===`compact`,dividers:!this.noDividers})}
    >
      <slot @slotchange=${()=>this.requestUpdate()}></slot>
    </div>`}},P([A({reflect:!0})],pa.prototype,`density`,void 0),P([A({type:Boolean,reflect:!0,attribute:`no-dividers`})],pa.prototype,`noDividers`,void 0),ma=class extends f{constructor(...e){super(...e),this.primary=``,this.secondary=``,this.internals=qe(this),this.slots=new g(this)}static{this.tagName=`minerva-list-item`}static{this.styles=[v,D(Tt),C`
      :host {
        display: block;
      }
      /* density inherited from the parent minerva-list */
      .item {
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
    `]}connectedCallback(){super.connectedCallback(),fa(this,this.internals,`listitem`)}render(){let e=this.secondary!==``||this.slots.test(`secondary`);return k`<div part="base" class="item">
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
    </div>`}},P([A()],ma.prototype,`primary`,void 0),P([A()],ma.prototype,`secondary`,void 0)})))()}var ga,_a;function va(){return(va=e((()=>{m(),_(),y(),Qe(),zn(),j(),E(),w(),ga=[`small`,`medium`,`large`],_a=class e extends f{constructor(...e){super(...e),this.size=`medium`,this.locale=new x(this)}static{this.tagName=`minerva-loading-state`}static{this.dependencies=[Rn]}static{this.styles=[v,C`
      :host {
        display: block;
      }
    `,D(t)]}updated(){n&&!ga.includes(this.size)&&b(e.tagName,`unknown size "${this.size}" (expected ${ga.join(`, `)}).`)}render(){return k`<div
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
    </div>`}},P([A()],_a.prototype,`label`,void 0),P([A({reflect:!0})],_a.prototype,`size`,void 0)})))()}function ya(e){let t=Array.from(e.childNodes).filter(e=>!ka(e)&&(e.nodeType!==1||e.getAttribute(`slot`)!==`icon`));return t.every(e=>e.nodeType===3)?t.map(e=>e.textContent??``).join(``).trim():t.map(e=>e.cloneNode(!0))}function ba(e){return{value:Ma(e,`value`)??ja(e),label:ya(e),textValue:Ma(e,`text-value`),shortcut:Ma(e,`shortcut`),disabled:Na(e,`disabled`),closeOnSelect:Na(e,`close-on-select`),element:e}}function xa(e,t=`e`){let n=[],r=null;return Array.from(e.children).forEach((e,i)=>{let a=`${t}-${i}`;switch(e.localName!==Z.tagName&&(r=null),e.localName){case Ca.tagName:{let t=xa(e,a),r=e.querySelector(`:scope > [slot='icon']`);n.push({key:Ma(e,`value`)||ja(e),label:ya(e),textValue:Ma(e,`text-value`),icon:r?r.cloneNode(!0):void 0,shortcut:Ma(e,`shortcut`),disabled:Na(e,`disabled`),closeOnSelect:!Na(e,`keep-open`)&&void 0,children:t.length?t:void 0,element:e});break}case wa.tagName:n.push({type:`checkbox`,key:Ma(e,`value`)||ja(e),label:ya(e),textValue:Ma(e,`text-value`),shortcut:Ma(e,`shortcut`),disabled:Na(e,`disabled`),checked:Na(e,`checked`),closeOnSelect:Na(e,`close-on-select`),element:e});break;case Z.tagName:{r||(r={type:`radio-group`,key:a,items:[]},n.push(r));let t=ba(e);r.items.push(t),Na(e,`checked`)&&(r.value=t.value);break}case Ea.tagName:n.push({type:`separator`,key:a});break;case Da.tagName:n.push({type:`label`,key:a,label:ya(e)});break;case Ta.tagName:{let t=Array.from(e.children),r=Ma(e,`label`);if(t.length>0&&t.every(e=>e.localName===Z.tagName)){let i=t.map(ba);n.push({type:`radio-group`,key:a,label:r,items:i,value:i.find(e=>e.element?.hasAttribute(`checked`))?.value,closeOnSelect:Na(e,`close-on-select`),element:e})}else n.push({type:`group`,key:a,label:r??``,items:xa(e,a)});break}}}),n}var Sa,Ca,wa,Z,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na;function Pa(){return(Pa=e((()=>{y(),j(),E(),Sa=C`
  :host {
    display: none !important;
  }
`,Ca=class extends f{constructor(...e){super(...e),this.value=``,this.disabled=!1,this.shortcut=``,this.textValue=``,this.keepOpen=!1}static{this.tagName=`minerva-menu-item`}static{this.styles=Sa}},P([A({reflect:!0})],Ca.prototype,`value`,void 0),P([A({type:Boolean,reflect:!0})],Ca.prototype,`disabled`,void 0),P([A()],Ca.prototype,`shortcut`,void 0),P([A({attribute:`text-value`})],Ca.prototype,`textValue`,void 0),P([A({type:Boolean,attribute:`keep-open`})],Ca.prototype,`keepOpen`,void 0),wa=class extends f{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1,this.shortcut=``,this.textValue=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-checkbox-item`}static{this.styles=Sa}},P([A({reflect:!0})],wa.prototype,`value`,void 0),P([A({type:Boolean,reflect:!0})],wa.prototype,`checked`,void 0),P([A({type:Boolean,reflect:!0})],wa.prototype,`disabled`,void 0),P([A()],wa.prototype,`shortcut`,void 0),P([A({attribute:`text-value`})],wa.prototype,`textValue`,void 0),P([A({type:Boolean,attribute:`close-on-select`})],wa.prototype,`closeOnSelect`,void 0),Z=class extends f{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1,this.shortcut=``,this.textValue=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-radio-item`}static{this.styles=Sa}},P([A({reflect:!0})],Z.prototype,`value`,void 0),P([A({type:Boolean,reflect:!0})],Z.prototype,`checked`,void 0),P([A({type:Boolean,reflect:!0})],Z.prototype,`disabled`,void 0),P([A()],Z.prototype,`shortcut`,void 0),P([A({attribute:`text-value`})],Z.prototype,`textValue`,void 0),P([A({type:Boolean,attribute:`close-on-select`})],Z.prototype,`closeOnSelect`,void 0),Ta=class extends f{constructor(...e){super(...e),this.label=``,this.closeOnSelect=!1}static{this.tagName=`minerva-menu-group`}static{this.styles=Sa}},P([A()],Ta.prototype,`label`,void 0),P([A({type:Boolean,attribute:`close-on-select`})],Ta.prototype,`closeOnSelect`,void 0),Ea=class extends f{static{this.tagName=`minerva-menu-separator`}static{this.styles=Sa}},Da=class extends f{static{this.tagName=`minerva-menu-label`}static{this.styles=Sa}},Oa=[Ca.tagName,wa.tagName,Z.tagName,Ta.tagName,Ea.tagName,Da.tagName],ka=e=>e.nodeType===1&&Oa.includes(e.localName),Aa=e=>!!(e.nodeType===1?e:e.parentElement)?.closest(Oa.join(`,`)),ja=e=>Array.from(e.childNodes).filter(e=>!ka(e)).map(e=>e.textContent??``).join(``).trim(),Ma=(e,t)=>e.getAttribute(t)??void 0,Na=(e,t)=>e.hasAttribute(t)})))()}var Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Q;function Wa(){return(Wa=e((()=>{m(),l(),y(),Nn(),An(),Ln(),On(),Dn(),Se(),Pa(),j(),E(),w(),qt(),$t(),Fa=100,Ia=`[data-minerva-menu-item]`,La={mainAxis:4,crossAxis:-5},Ra=e=>e.hasAttribute(`data-disabled`),za=e=>e.dataset.textValue??e.querySelector(`.text`)?.textContent??e.textContent??``,Ba=e=>e?Array.from(e.querySelectorAll(Ia)):[],Va=e=>Vt(e,{preventScroll:!0}),Ha=e=>typeof e==`string`?e:void 0,Ua=class{constructor(e,t,n){this.grace=Gt(),this.typeahead=gn(),this.lastTypeahead=0,this.element=null,this.uid=null,this.position=new Fn(e,()=>n===0?{placement:t.rootPlacement(),offset:t.rootOffset(),padding:8}:{placement:t.direction===`rtl`?`left-start`:`right-start`,offset:La,padding:8}),this.layer=new jn(e,()=>n===0?t.rootLayerOptions():t.subLayerOptions(n)),this.scope=new kn(e,()=>({trapped:n===0&&t.isModal,autoFocus:!1,restoreFocus:!1}))}clearTimer(){clearTimeout(this.openTimer),this.openTimer=void 0}},Q=class extends f{constructor(...e){super(...e),this.items=[],this.open=!1,this.size=`medium`,this.keepOpen=!1,this.disabled=!1,this.nonModal=!1,this.noLoop=!1,this.declarative=[],this.openPath=[],this.stored=new Map,this.levels=[],this.modalController=new Pn(this),this.observer=null,this.intent=`content`,this.subIntent=`none`,this.restoreOverride=void 0,this.reason=`outside`,this.direction=`ltr`,this.onPanelKeyDown=e=>{let t=e.currentTarget,n=this.panelDepth(t),r=this.levels[n],{key:i}=e;if(i===`Tab`){e.preventDefault(),this.closeWithTab(e.shiftKey);return}if(e.defaultPrevented||!r||e.altKey||e.ctrlKey||e.metaKey)return;let a=Ba(t),o=e.composedPath()[0],s=a.find(e=>e===o)??null,ee=s?a.indexOf(s):-1,te=this.direction===`rtl`,ne=te?`ArrowLeft`:`ArrowRight`,re=te?`ArrowRight`:`ArrowLeft`;if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(i)){e.preventDefault(),r.typeahead.reset();let t=Bt({currentIndex:ee,count:a.length,key:i,orientation:`vertical`,loop:!this.noLoop,isDisabled:e=>Ra(a[e])});t!==null&&Va(a[t]);return}if(i===ne&&s?.hasAttribute(`aria-haspopup`)){e.preventDefault(),Ra(s)||this.openSubmenu(n,s.dataset.uid??``,`first`);return}if(i===re&&n>0){e.preventDefault(),Va(this.parentItem(n)),this.closeSubmenu(n);return}if(i.length===1){let t=Date.now();t-r.lastTypeahead>500&&r.typeahead.reset();let n=r.typeahead.getBuffer()!==``;if(i!==` `||n){r.lastTypeahead=t,e.preventDefault();let n=r.typeahead.search(i,a.map(e=>({text:za(e),disabled:Ra(e)})),ee);n!==-1&&Va(a[n]);return}}(i===`Enter`||i===` `)&&s&&(e.preventDefault(),Ra(s)||this.activateItem(s,`first`))},this.itemActions=new Map,this.onPanelFocusIn=e=>{let t=e.composedPath()[0];t.matches?.(Ia)&&t.setAttribute(`data-highlighted`,``)},this.onPanelFocusOut=e=>{let t=e.composedPath()[0];t.matches?.(Ia)&&t.removeAttribute(`data-highlighted`)}}static{this.styles=[v,Mn,C`
      :host {
        display: contents;
      }
    `,D(Be)]}onRootPointerDownOutside(e){}get isModal(){return!this.nonModal}get entries(){return this.items.length?this.items:this.declarative}show(){this.open=!0}hide(){this.open=!1}requestOpenChange(e,t){if(e===this.open)return!0;let n=this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0});return n&&(this.open=e,e||this.closeLevels()),n}openWith(e,t){this.intent=e,this.requestOpenChange(!0,t)}closeAll(e){this.requestOpenChange(!1,e)}closeWithTab(e){let t=this.restoreTarget(),n;if(t){let r=en().find(e=>e.element===this.levels[0]?.element)?.parent??document.body,i=vn(r).filter(e=>e===t||!Xt(this,e)||!this.isPanelNode(e)),a=i.indexOf(t);n=a===-1?t:i[e?a-1:a+1]??t}this.restoreOverride=n??void 0,this.requestOpenChange(!1,`tab`)&&Va(n)}isPanelNode(e){return this.levels.some(t=>Xt(t.element,e))}level(e){return this.levels[e]??=new Ua(this,this,e),this.levels[e]}parentItem(e){let t=this.openPath[e-1];return t?this.renderRoot.querySelector(`[data-uid="${t}"]`)??null:null}rootLayerOptions(){return{disableOutsidePointerEvents:this.isModal,branches:()=>this.branches(),onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:e=>{this.reason=`outside`,this.onRootPointerDownOutside(e),!e.defaultPrevented&&(!this.isModal||e.button===2)&&(this.restoreOverride=null)},onFocusOutside:e=>(this.reason=`focus-outside`,!this.isModal||(e.preventDefault(),!1)),onDismiss:()=>this.closeAll(this.reason)}}subLayerOptions(e){return{parent:this.levels[e-1]?.element??void 0,branches:()=>[this.parentItem(e)],onEscapeKeyDown:()=>{Va(this.parentItem(e))},onDismiss:()=>this.closeSubmenu(e)}}closeLevels(e=0){for(let t=this.levels.length-1;t>=e;t--){let e=this.levels[t];e.element&&(e.clearTimer(),e.grace.clear(),e.typeahead.reset(),e.scope.deactivate(),e.layer.deactivate(),e.position.end(),p(e.element),e.element=null,e.uid=null,t===0&&(this.modalController.deactivate(),this.scheduleRestore()))}}scheduleRestore(){let e=this.restoreOverride;this.restoreOverride=void 0;let t=e===void 0?this.restoreTarget():e;t&&setTimeout(()=>{if(this.open||!t.isConnected)return;let e=Zt(document);(!e||e===document.body||!e.isConnected||(this.shadowRoot?.contains(e)??!1))&&Va(t)},0)}syncLevels(){let e=this.open&&!this.disabled?this.openPath.length+1:0;this.closeLevels(e);for(let t=0;t<e;t++){let e=t===0?``:this.openPath[t-1],n=this.renderRoot.querySelector(`[data-level="${t}"]`);if(!n)return;let r=this.level(t);if(r.element===n&&r.uid===e)continue;r.element&&this.closeLevels(t);let i=t===0?this.anchorElement():this.parentItem(t);if(!i)return;r.element=n,r.uid=e,et(n),r.position.start(i,n),t===0&&this.isModal&&this.modalController.activate(this),r.layer.activate(n),r.scope.activate(n);let a=t===0?this.intent:this.subIntent;t===0?this.intent=`content`:this.subIntent=`none`,this.focusIntent(n,a)}}focusIntent(e,t){if(t===`none`)return;let n=Ba(e).filter(e=>!Ra(e));Va((t===`first`?n[0]:t===`last`?n[n.length-1]:void 0)??e)}reanchor(){let e=this.levels[0],t=this.anchorElement();e?.element&&t&&e.position.start(t,e.element)}openSubmenu(e,t,n){if(this.openPath[e]===t&&this.levels[e+1]?.element){n===`first`&&Va(Ba(this.levels[e+1].element).find(e=>!Ra(e)));return}this.subIntent=n,this.openPath=[...this.openPath.slice(0,e),t]}closeSubmenu(e){this.openPath.length<e||(this.closeLevels(e),this.openPath=this.openPath.slice(0,e-1))}stateOf(e,t){return this.stored.has(e)?this.stored.get(e):t}isChecked(e){return e.element?e.element.hasAttribute(`checked`):this.stateOf(e.key,e.checked??e.defaultChecked??!1)}radioValue(e){return e.items.some(e=>e.element)?e.items.find(e=>e.element?.hasAttribute(`checked`))?.value:this.stateOf(e.key,e.value??e.defaultValue)}activateAction(e){this.emit(`minerva-select`,{value:e.key,item:e},{cancelable:!0})&&(e.closeOnSelect??!this.keepOpen)&&this.closeAll(`select`)}toggleCheckbox(e){let t=!this.isChecked(e);this.emit(`minerva-change`,{value:e.key,checked:t,item:e},{cancelable:!0})&&(e.element?e.element.toggleAttribute(`checked`,t):this.stored.set(e.key,t),this.requestUpdate()),e.closeOnSelect&&this.closeAll(`select`)}chooseRadio(e,t){let n=this.radioValue(e);if(t.value!==n&&this.emit(`minerva-change`,{value:t.value,group:e.key,item:t},{cancelable:!0})){if(t.element)for(let n of e.items)n.element?.toggleAttribute(`checked`,n===t);else this.stored.set(e.key,t.value);this.requestUpdate()}(e.closeOnSelect||t.closeOnSelect)&&this.closeAll(`select`)}panelDepth(e){return Number(e.dataset.level??0)}activateItem(e,t){this.itemActions.get(e.dataset.uid??``)?.(t)}onItemClick(e){let t=e.currentTarget;Ra(t)||this.activateItem(t,`none`)}onItemPointerMove(e){let t=e.currentTarget,n=t.closest(`[data-level]`);if(!n)return;let r=this.panelDepth(n),i=this.levels[r];if(!i||e.pointerType===`touch`||i.grace.isInGraceArea({x:e.clientX,y:e.clientY}))return;i.grace.clear();let a=Zt(document);if(Ra(t)){a!==n&&Va(n);return}a!==t&&Va(t);let o=t.dataset.uid??``;t.hasAttribute(`aria-haspopup`)&&this.openPath[r]!==o&&i.openTimer===void 0&&(i.openTimer=setTimeout(()=>{i.openTimer=void 0,this.open&&this.openSubmenu(r,o,`none`)},100))}onItemPointerLeave(e){if(e.pointerType===`touch`)return;let t=e.currentTarget,n=t.closest(`[data-level]`);if(!n)return;let r=this.panelDepth(n),i=this.levels[r];if(!i)return;i.clearTimer();let a=this.levels[r+1]?.element;if(t.hasAttribute(`aria-haspopup`)&&this.openPath[r]===t.dataset.uid&&a){let t=a.getAttribute(`data-side`)??`right`;i.grace.start({x:e.clientX,y:e.clientY},a.getBoundingClientRect(),t);return}i.grace.isInGraceArea({x:e.clientX,y:e.clientY})||Zt(document)===t&&Va(n)}readEntries(){this.declarative=xa(this)}connectedCallback(){super.connectedCallback(),this.readEntries(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(e=>{e.some(e=>Aa(e.target)||Array.from(e.addedNodes).some(Aa)||Array.from(e.removedNodes).some(e=>e.nodeType===1&&e.localName.startsWith(`minerva-menu-`)))&&this.readEntries()}),this.observer.observe(this,{subtree:!0,childList:!0,attributes:!0,characterData:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.closeLevels()}willUpdate(e){if(e.has(`items`)&&(this.stored=new Map,n&&this.checkKeys(this.items)),e.has(`open`)&&this.open){let e=this.anchorElement(),t=e&&`nodeType`in e?e:this;this.direction=this.isConnected?mt(t):`ltr`}e.has(`open`)&&!this.open&&(this.openPath=[])}checkKeys(e,t=new Set){for(let n of e)if(!(`type`in n&&n.type===`separator`)){if(`type`in n&&(n.type===`group`||n.type===`label`)){n.type===`group`&&this.checkKeys(n.items,t);continue}t.has(n.key)&&b(this.constructor.tagName,`duplicate item key "${n.key}": keys must be unique (checkbox / radio state and minerva-select values are keyed by it).`),t.add(n.key),!(`type`in n)&&n.children&&this.checkKeys(n.children,t)}}updated(e){this.syncTrigger(),(e.has(`open`)||e.has(`openPath`)||e.has(`disabled`))&&this.syncLevels()}renderPanels(){if(!this.open||this.disabled)return O;this.itemActions.clear();let e=[this.renderPanel(0,``,this.entries,this.rootLabel())],t=this.entries;return this.openPath.forEach((n,r)=>{let i=this.findSubmenu(t,n,`${r}:`);i&&(t=i.children??[],e.push(pn(n,this.renderPanel(r+1,n,t,Ha(i.label)??i.textValue))))}),e}findSubmenu(e,t,n){for(let[r,i]of e.entries()){let e=`${n}${r}`;if(`type`in i){if(i.type===`group`){let n=this.findSubmenu(i.items,t,`${e}.`);if(n)return n}continue}if(i.children?.length&&e===t)return i}return null}renderPanel(e,t,n,r){let i=e===0?``:`item-${t}`;return k`<div
      part="menu"
      id=${e===0?`menu`:`menu-${t}`}
      class=${N({content:!0,small:this.size===`small`})}
      popover="manual"
      role="menu"
      aria-orientation="vertical"
      aria-label=${e===0?r??O:O}
      aria-labelledby=${e>0?i:O}
      tabindex="-1"
      dir=${this.direction}
      data-state="open"
      data-level=${e}
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
            </div>`}case`checkbox`:return this.renderCheckbox(e,i);case`radio-group`:return this.renderRadioGroup(e,i)}return this.renderAction(e,t,i)})}renderItem(e){let{uid:t,disabled:n=!1,submenu:r}=e;this.itemActions.set(t,e.activate);let i=e.textValue??Ha(e.label),a=e.checked===void 0?r?r.open?`open`:`closed`:void 0:e.checked?`checked`:`unchecked`;return k`<div
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
          >${ie}</span
        >`,activate:e=>this.openSubmenu(t,n,e)})}return this.renderItem({uid:n,role:`menuitem`,label:e.label,textValue:e.textValue,icon:e.icon,shortcut:e.shortcut,disabled:e.disabled,activate:()=>this.activateAction(e)})}renderCheckbox(e,t){let n=this.isChecked(e);return this.renderItem({uid:t,role:`menuitemcheckbox`,label:e.label,textValue:e.textValue,shortcut:e.shortcut,disabled:e.disabled,checked:n,indicator:k`<span class="indicator" aria-hidden="true"
        >${n?me:O}</span
      >`,activate:()=>this.toggleCheckbox(e)})}renderRadioGroup(e,t){let n=this.radioValue(e),r=`label-${t.replace(/[:.]/g,`-`)}`,i=e.label!=null&&e.label!==``;return k`<div
      role="group"
      aria-labelledby=${i?r:O}
    >
      ${i?k`<div id=${r} class="label" part="label">${e.label}</div>`:O}
      ${e.items.map((r,i)=>{let a=r.value===n;return this.renderItem({uid:`${t}.${i}`,role:`menuitemradio`,label:r.label,textValue:r.textValue,shortcut:r.shortcut,disabled:r.disabled,checked:a,indicator:k`<span class="indicator" aria-hidden="true"
            >${a?k`<span class="dot"></span>`:O}</span
          >`,activate:()=>this.chooseRadio(e,r)})})}
    </div>`}},P([A({attribute:!1})],Q.prototype,`items`,void 0),P([A({type:Boolean,reflect:!0})],Q.prototype,`open`,void 0),P([A({reflect:!0})],Q.prototype,`size`,void 0),P([A({type:Boolean,attribute:`keep-open`})],Q.prototype,`keepOpen`,void 0),P([A({type:Boolean,reflect:!0})],Q.prototype,`disabled`,void 0),P([A({type:Boolean,reflect:!0,attribute:`non-modal`})],Q.prototype,`nonModal`,void 0),P([A({type:Boolean,attribute:`no-loop`})],Q.prototype,`noLoop`,void 0),P([S()],Q.prototype,`declarative`,void 0),P([S()],Q.prototype,`openPath`,void 0)})))()}function Ga(e,t,n){n===null?e.hasAttribute(t)&&e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}var Ka,qa;function Ja(){return(Ja=e((()=>{m(),Pa(),Wa(),j(),E(),qt(),Ka={mainAxis:6,crossAxis:0},qa=class e extends Q{constructor(...e){super(...e),this.side=`bottom`,this.align=`end`,this.disabledTrigger=null,this.handleKeyDown=e=>{if(!(this.disabled||e.defaultPrevented||!this.fromTrigger(e)))switch(e.key){case`Enter`:case` `:e.preventDefault(),this.open?this.requestOpenChange(!1,`trigger`):this.openWith(`first`,`keyboard`);break;case`ArrowDown`:e.preventDefault(),this.openWith(`first`,`keyboard`);break;case`ArrowUp`:e.preventDefault(),this.openWith(`last`,`keyboard`)}},this.handleClick=e=>{this.disabled||e.defaultPrevented||!this.fromTrigger(e)||(this.open?this.requestOpenChange(!1,`trigger`):this.openWith(e.detail===0?`first`:`content`,`trigger`))}}static{this.tagName=`minerva-menu`}static{this.dependencies=[Ca,wa,Z,Ta,Ea,Da]}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}anchorElement(){return this.triggerElement()}rootPlacement(){return an(this.side,this.align)}rootOffset(){return Ka}restoreTarget(){return this.triggerElement()}branches(){return[this.triggerElement()]}rootLabel(){let e=this.getAttribute(`aria-label`);if(e)return e;let t=this.triggerElement();return t?.getAttribute(`aria-label`)??(t?.textContent?.trim()||void 0)}syncTrigger(){let e=this.triggerElement();e&&(Ga(e,`aria-haspopup`,`menu`),Ga(e,`aria-expanded`,String(this.open)),Ga(e,`data-state`,this.open?`open`:`closed`),Ga(e,`data-disabled`,this.disabled?``:null),this.disabled&&!e.hasAttribute(`disabled`)?(e.setAttribute(`disabled`,``),this.disabledTrigger=e):!this.disabled&&this.disabledTrigger===e&&(e.removeAttribute(`disabled`),this.disabledTrigger=null))}fromTrigger(e){let t=this.triggerElement();return!!t&&e.composedPath().includes(t)}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`click`,this.handleClick)}firstUpdated(t){super.firstUpdated(t),n&&!this.triggerElement()&&b(e.tagName,`no slot="trigger" element: nothing opens the menu (add e.g. <button slot="trigger">).`)}render(){return k`<slot name="trigger"></slot>${this.renderPanels()}`}},P([A({reflect:!0})],qa.prototype,`side`,void 0),P([A({reflect:!0})],qa.prototype,`align`,void 0)})))()}var Ya,Xa,Za,Qa,$a;function eo(){return(eo=e((()=>{Pa(),Wa(),Ja(),j(),qt(),Ya=700,Xa={mainAxis:2,crossAxis:0},Za={mainAxis:4,crossAxis:0},Qa=(e,t,n)=>({contextElement:n,getBoundingClientRect:()=>({x:e,y:t,left:e,top:t,right:e,bottom:t,width:0,height:0})}),$a=class extends Q{constructor(...e){super(...e),this.position=null,this.restoreTo=null,this.areaPointerEvents=null,this.handleContextMenu=e=>{this.disabled||e.defaultPrevented||!this.inArea(e)||(e.preventDefault(),this.clearLongPress(),this.openAtPoint(e.clientX,e.clientY))},this.handleKeyDown=e=>{if(!(this.disabled||e.defaultPrevented||!this.inArea(e))&&(e.key===`ContextMenu`||e.shiftKey&&e.key===`F10`)){let t=this.area();if(!t)return;e.preventDefault();let n=mt(t)===`rtl`;this.openAt({anchor:t,placement:n?`bottom-end`:`bottom-start`,offset:Za})}},this.handlePointerDown=e=>{if(this.disabled||e.pointerType!==`touch`||!this.inArea(e))return;this.clearLongPress();let{clientX:t,clientY:n}=e;this.longPress=setTimeout(()=>{this.longPress=void 0,this.openAtPoint(t,n)},700)},this.handleTouchEnd=e=>{e.pointerType===`touch`&&this.clearLongPress()}}static{this.tagName=`minerva-context-menu`}static{this.dependencies=[Ca,wa,Z,Ta,Ea,Da]}static{this.styles=[...Q.styles,C`
      :host(:not([disabled])) ::slotted(*) {
        -webkit-touch-callout: none;
      }
    `]}area(){return Array.from(this.children).find(e=>!Oa.includes(e.localName))??null}anchorElement(){return this.position?.anchor??null}rootPlacement(){return this.position?.placement??`right-start`}rootOffset(){return this.position?.offset??Xa}restoreTarget(){return this.restoreTo}branches(){return[]}rootLabel(){return this.getAttribute(`aria-label`)??void 0}onRootPointerDownOutside(e){let t=this.area(),n=e.composedPath()[0];e.button===2&&t&&n instanceof Node&&Xt(t,n)&&e.preventDefault()}syncTrigger(){let e=this.area();if(!e)return;Ga(e,`data-state`,this.open?`open`:`closed`),Ga(e,`data-disabled`,this.disabled?``:null);let t=this.open&&this.isModal&&!this.disabled;t&&this.areaPointerEvents===null?(this.areaPointerEvents=e.style.pointerEvents,e.style.pointerEvents=`auto`):!t&&this.areaPointerEvents!==null&&(e.style.pointerEvents=this.areaPointerEvents,this.areaPointerEvents=null)}openAt(e){let t=this.area();if(t){if(!this.open){let e=Zt(document);this.restoreTo=e instanceof HTMLElement&&Xt(t,e)?e:t}if(this.position=e,this.open){this.reanchor();return}this.openWith(`first`,`contextmenu`)}}openAtPoint(e,t){let n=this.area();if(!n)return;let r=mt(n)===`rtl`;this.openAt({anchor:Qa(e,t,n),placement:r?`left-start`:`right-start`,offset:Xa})}inArea(e){let t=this.area(),n=e.composedPath()[0];return!!t&&n instanceof Node&&Xt(t,n)}clearLongPress(){clearTimeout(this.longPress),this.longPress=void 0}connectedCallback(){super.connectedCallback(),this.addEventListener(`contextmenu`,this.handleContextMenu),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`pointerdown`,this.handlePointerDown),this.addEventListener(`pointermove`,this.handleTouchEnd),this.addEventListener(`pointerup`,this.handleTouchEnd),this.addEventListener(`pointercancel`,this.handleTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.clearLongPress(),this.removeEventListener(`contextmenu`,this.handleContextMenu),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`pointerdown`,this.handlePointerDown),this.removeEventListener(`pointermove`,this.handleTouchEnd),this.removeEventListener(`pointerup`,this.handleTouchEnd),this.removeEventListener(`pointercancel`,this.handleTouchEnd)}render(){return k`<slot></slot>${this.renderPanels()}`}}})))()}var to;function no(){return(no=e((()=>{h(),l(),_(),y(),d(),Nn(),Ln(),On(),Dn(),we(),_e(),j(),E(),w(),to=class extends f{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.size=`medium`,this.hideCloseButton=!1,this.dialogRole=`dialog`,this.locale=new x(this),this.aria=new u(this),this.slots=new g(this),this.presence=new xe(this,()=>this.panel),this.modal=new Pn(this),this.focusScope=new kn(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new jn(this,()=>({disableOutsidePointerEvents:!0,branches:()=>[this.triggerElement()],onFocusOutside:e=>e.preventDefault(),onEscapeKeyDown:()=>this.lastReason(`escape`),onPointerDownOutside:()=>this.lastReason(`outside`),onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleClick=e=>{let t=this.triggerElement();!e.defaultPrevented&&t&&e.composedPath().includes(t)&&this.requestOpenChange(!this.open,`trigger`)}}static{this.tagName=`minerva-modal`}static{this.styles=[v,Mn,C`
      :host {
        display: contents;
      }
      .content .body {
        flex: 1 1 auto;
      }
    `,D(he)]}lastReason(e){this.reason=e}show(){this.open=!0}hide(){this.open=!1}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleClick)}willUpdate(e){e.has(`open`)&&this.presence.sync(this.open)}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)){let e=this.panel;this.open&&e?(et(this.overlay),et(e),this.modal.activate(this),this.layer.activate(e),this.focusScope.activate(e),this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleClick),p(this.panel),p(this.overlay)}afterClose(){p(this.panel),p(this.overlay),this.emit(`minerva-after-close`)}render(){let e=this.open||this.presence.present,t=this.open?`open`:`closed`,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description;return k`<slot name="trigger"></slot> ${e?k`<div
                part="overlay"
                class="overlay"
                popover="manual"
                data-state=${t}
                aria-hidden="true"
              ></div>
              <div
                part="panel"
                class=${N({content:!0,[this.size]:!0})}
                popover="manual"
                role=${this.dialogRole}
                aria-modal="true"
                aria-labelledby=${n?`title`:O}
                aria-label=${n?O:this.aria.label??O}
                aria-describedby=${r?`description`:O}
                tabindex="-1"
                data-state=${t}
              >
                ${r?k`<p
                        id="description"
                        class="description"
                        part="description"
                      >
                        ${r}
                      </p>`:O}
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
                        aria-label=${this.closeLabel??this.locale.t(`modal.close`)}
                        @click=${()=>this.requestOpenChange(!1,`close-button`)}
                      >
                        ${c}
                      </button>`}
              </div>`:O}`}},P([A({type:Boolean,reflect:!0})],to.prototype,`open`,void 0),P([A()],to.prototype,`label`,void 0),P([A()],to.prototype,`description`,void 0),P([A({reflect:!0})],to.prototype,`size`,void 0),P([A({type:Boolean,attribute:`hide-close-button`})],to.prototype,`hideCloseButton`,void 0),P([A({attribute:`close-label`})],to.prototype,`closeLabel`,void 0),P([A({attribute:`dialog-role`})],to.prototype,`dialogRole`,void 0),P([T(`.content`)],to.prototype,`panel`,void 0),P([T(`.overlay`)],to.prototype,`overlay`,void 0)})))()}function ro(e,t,n){let r=new Date(0);return r.setFullYear(e,t,n),r.setHours(0,0,0,0),r}function io(e){return`${String(e.getFullYear()).padStart(4,`0`)}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function ao(e,t){return ro(e.getFullYear(),e.getMonth(),e.getDate()+t)}function oo(e,t=0){return ro(e.getFullYear(),e.getMonth()+t,1)}function so(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}var co,lo,uo,$;function fo(){return(fo=e((()=>{h(),m(),l(),_(),y(),Fe(),j(),E(),co=[`mon`,`tue`,`wed`,`thu`,`fri`,`sat`,`sun`],lo=/^\d{4}-\d{2}-\d{2}$/,uo={fromAttribute(e){let t=e?.trim().match(/^(\d{4})-(\d{1,2})(?:-\d{1,2})?$/);return t?ro(Number(t[1]),Number(t[2])-1,1):void 0},toAttribute(e){return e instanceof Date&&!Number.isNaN(e.getTime())?io(e).slice(0,7):null}},$=class e extends f{constructor(...e){super(...e),this.events=[],this.clickableEvents=!1,this.disabled=!1,this.hideEvents=!1,this.focusedKey=``,this.pendingFocus=null,this.i18n=new x(this),this.aria=new u(this)}static{this.tagName=`minerva-month-calendar`}static{this.styles=[v,C`
      :host {
        display: block;
      }
      .navButton svg {
        flex-shrink: 0;
      }
    `,D(Le)]}get displayed(){let e=this.month;return e instanceof Date&&!Number.isNaN(e.getTime())?oo(e):oo(new Date)}focus(e){this.renderRoot.querySelector(`[role="gridcell"][tabindex="0"]`)?.focus(e)}goToMonth(e){let t=oo(e);io(t)!==io(this.displayed)&&(this.month=t,this.emit(`minerva-month-change`,{month:t}))}select(e){if(this.disabled)return;let t=io(e);t!==this.value&&(this.value=t,this.emit(`minerva-change`,{value:t})),so(e,this.displayed)||this.goToMonth(e)}handleKeyDown(e,t){if(this.disabled)return;if(e.key===`Enter`||e.key===` `){e.preventDefault(),e.repeat||this.select(t);return}let n=mt(this)===`rtl`,r=n&&e.key===`ArrowLeft`?`ArrowRight`:n&&e.key===`ArrowRight`?`ArrowLeft`:e.key,i=(t.getDay()+6)%7,a;switch(r){case`ArrowLeft`:a=ao(t,-1);break;case`ArrowRight`:a=ao(t,1);break;case`ArrowUp`:a=ao(t,-7);break;case`ArrowDown`:a=ao(t,7);break;case`Home`:a=ao(t,-i);break;case`End`:a=ao(t,6-i);break;case`PageUp`:case`PageDown`:{let n=oo(t,(e.key===`PageUp`?-1:1)*(e.shiftKey?12:1)),r=ao(oo(n,1),-1).getDate();a=ro(n.getFullYear(),n.getMonth(),Math.min(t.getDate(),r));break}default:return}e.preventDefault(),this.pendingFocus=io(a),this.focusedKey=io(a),so(a,this.displayed)||this.goToMonth(a)}willUpdate(t){n&&t.has(`value`)&&this.value&&!lo.test(this.value)&&b(e.tagName,`value "${this.value}" is not a "YYYY-MM-DD" day: nothing is selected.`)}updated(){if(this.disabled||!this.pendingFocus)return;let e=this.renderRoot.querySelector(`[data-date="${this.pendingFocus}"]`);e&&(this.pendingFocus=null,e.focus())}render(){let e=this.i18n.t,t=this.displayed,n=ao(t,-((t.getDay()+6)%7)),r=Array.from({length:42},(e,t)=>ao(n,t)),i=r.map(io),a=new Date,o=io(a),s=this.value||void 0,ee=[this.focusedKey,s,so(a,t)?o:``,io(t)].find(e=>e&&i.includes(e)),te=this.events??[],ne=new Map;for(let e of te)ne.set(e.date,(ne.get(e.date)??0)+1);let re=te.filter(e=>e.date===s),ae;try{ae=new Intl.DateTimeFormat(this.locale??this.i18n.language,{year:`numeric`,month:`long`}).format(t)}catch{ae=io(t).slice(0,7)}let c=this.disabled;return k`<section
      part="base"
      class="monthCalendar"
      aria-label=${this.aria.label??e(`monthCalendar.label`)}
    >
      <div class="toolbar">
        <h2 id="heading" part="heading" class="heading" aria-live="polite">
          ${ae}
        </h2>
        <div class="navigation">
          <button
            type="button"
            part="nav-button"
            class="navButton iconButton"
            aria-label=${this.previousMonthLabel??e(`monthCalendar.previousMonth`)}
            ?disabled=${c}
            @click=${()=>this.goToMonth(oo(t,-1))}
          >
            ${le}
          </button>
          <button
            type="button"
            part="nav-button"
            class="navButton"
            ?disabled=${c}
            @click=${()=>this.goToMonth(new Date)}
          >
            ${Mt} ${this.todayLabel??e(`monthCalendar.today`)}
          </button>
          <button
            type="button"
            part="nav-button"
            class="navButton iconButton"
            aria-label=${this.nextMonthLabel??e(`monthCalendar.nextMonth`)}
            ?disabled=${c}
            @click=${()=>this.goToMonth(oo(t,1))}
          >
            ${ie}
          </button>
        </div>
      </div>
      <div
        part="grid"
        role="grid"
        aria-labelledby="heading"
        aria-disabled=${c?`true`:O}
        class="grid"
      >
        <div role="row" class="week">
          ${co.map((t,n)=>k`<div role="columnheader" class="weekday">
                ${this.weekdayLabels?.[n]??e(`monthCalendar.weekdays.${t}`)}
              </div>`)}
        </div>
        ${Array.from({length:6},(n,i)=>k`<div role="row" class="week">
              ${r.slice(i*7,i*7+7).map(n=>{let r=io(n),i=ne.get(r)??0,a=this.getDayLabel?this.getDayLabel(r,i):i?e(`monthCalendar.dayWithEvents`,{date:r,count:i}):r;return k`<div
                  role="gridcell"
                  part="day"
                  class="day"
                  data-date=${r}
                  data-outside=${so(n,t)?O:`true`}
                  aria-label=${a}
                  aria-selected=${String(s===r)}
                  aria-current=${r===o?`date`:O}
                  aria-disabled=${c?`true`:O}
                  tabindex=${!c&&r===ee?`0`:`-1`}
                  @focus=${()=>this.focusedKey=r}
                  @click=${()=>this.select(n)}
                  @keydown=${e=>this.handleKeyDown(e,n)}
                >
                  <span>${n.getDate()}</span>
                  <span class="count" aria-hidden="true"
                    >${i?i>99?`99+`:i:` `}</span
                  >
                </div>`})}
            </div>`)}
      </div>
      ${!this.hideEvents&&s?k`<section
              part="events"
              class="events"
              aria-label=${this.getEventsLabel?this.getEventsLabel(s):e(`monthCalendar.eventsLabel`,{date:s})}
            >
              <h3 class="eventsHeading">${s}</h3>
              ${re.length?k`<ul class="eventList">
                      ${re.map(e=>k`<li class="eventItem">
                            ${this.clickableEvents?k`<button
                                    type="button"
                                    part="event"
                                    class="eventButton"
                                    ?disabled=${c}
                                    @click=${()=>this.emit(`minerva-event-click`,{event:e})}
                                  >
                                    ${e.title}
                                  </button>`:k`<span part="event">${e.title}</span>`}
                          </li>`)}
                    </ul>`:k`<p class="empty">
                      ${this.emptyEventsText??e(`monthCalendar.noEvents`)}
                    </p>`}
            </section>`:O}
    </section>`}},P([A({converter:uo,reflect:!0})],$.prototype,`month`,void 0),P([A({reflect:!0})],$.prototype,`value`,void 0),P([A({attribute:!1})],$.prototype,`events`,void 0),P([A({type:Boolean,attribute:`clickable-events`})],$.prototype,`clickableEvents`,void 0),P([A({type:Boolean,reflect:!0})],$.prototype,`disabled`,void 0),P([A({type:Boolean,attribute:`hide-events`})],$.prototype,`hideEvents`,void 0),P([A({attribute:`previous-month-label`})],$.prototype,`previousMonthLabel`,void 0),P([A({attribute:`next-month-label`})],$.prototype,`nextMonthLabel`,void 0),P([A({attribute:`today-label`})],$.prototype,`todayLabel`,void 0),P([A({attribute:`empty-events-text`})],$.prototype,`emptyEventsText`,void 0),P([A()],$.prototype,`locale`,void 0),P([A({attribute:!1})],$.prototype,`weekdayLabels`,void 0),P([A({attribute:!1})],$.prototype,`getDayLabel`,void 0),P([A({attribute:!1})],$.prototype,`getEventsLabel`,void 0),P([S()],$.prototype,`focusedKey`,void 0)})))()}export{Di as $,X as A,br as At,Ui as B,L as Bt,va as C,Nr as Ct,ha as D,Sr as Dt,pa as E,Pr as Et,na as F,ur as Ft,Fi as G,Yn as Gt,zi as H,I as Ht,Qi as I,dr as It,ki as J,Ni as K,$i as L,cr as Lt,Y as M,gr as Mt,ia as N,hr as Nt,da as O,B as Ot,J as P,pr as Pt,K as Q,Gi as R,sr as Rt,xa as S,jr as St,ma as T,Ir as Tt,Bi as U,er as Ut,Hi as V,nr as Vt,q as W,F as Wt,Oi as X,Ai as Y,Ei as Z,Ea as _,Wr as _t,eo as a,li as at,Z as b,V as bt,Ja as c,ii as ct,Fa as d,ei as dt,_i as et,Wa as f,Qr as ft,Pa as g,U as gt,Oa as h,Kr as ht,no as i,G as it,sa as j,fr as jt,ua as k,z as kt,Ga as l,W as lt,Ta as m,Xr as mt,fo as n,mi as nt,Ya as o,ci as ot,Ca as p,Yr as pt,Mi as q,to as r,pi as rt,$a as s,si as st,$ as t,hi as tt,qa as u,Zr as ut,wa as v,H as vt,_a as w,Ar as wt,Da as x,Mr as xt,Aa as y,Fr as yt,Wi as z,lr as zt};