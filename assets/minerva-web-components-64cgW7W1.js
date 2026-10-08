import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{$n as t,A as n,Ar as r,B as i,Bn as a,Bt as o,C as s,Cn as c,D as l,Dr as ee,E as te,En as ne,Er as u,F as re,Ft as ie,G as ae,Gn as oe,H as se,Hn as ce,I as le,It as ue,J as de,Jn as fe,Jt as pe,K as me,L as he,Ln as ge,M as _e,Mn as ve,N as ye,Nt as be,O as xe,Or as Se,P as Ce,Pn as we,Pt as Te,Q as Ee,Qn as De,R as Oe,S as ke,Sn as Ae,Sr as je,T as Me,Tr as d,U as Ne,Un as f,V as Pe,Vn as Fe,W as Ie,X as Le,Xn as Re,Y as ze,Yn as Be,Z as Ve,Zn as He,_ as Ue,_r as p,a as We,ar as m,b as Ge,br as Ke,bt as qe,c as Je,cn as Ye,d as Xe,dn as Ze,dr as h,dt as Qe,f as $e,fn as et,fr as g,ft as tt,g as nt,h as rt,hr as it,ir as _,it as at,j as ot,jn as st,jr as ct,k as lt,kn as ut,kr as dt,l as ft,ln as v,lr as pt,m as mt,mr as ht,mt as gt,nr as _t,o as vt,or as y,p as yt,pn as bt,pr as b,pt as xt,q as St,qt as Ct,rr as wt,rt as Tt,s as Et,sn as Dt,tr as Ot,u as kt,un as At,ur as jt,v as Mt,vn as x,vr as S,w as Nt,wr as Pt,x as Ft,xr as It,y as Lt,yn as C,yr as Rt,yt as zt,z as Bt,zn as Vt,zt as Ht}from"./minerva-web-components-FVTxT03l.js";import{A as w,At as Ut,Bt as Wt,C as T,Ct as Gt,D as E,E as D,En as Kt,Et as qt,Fn as Jt,G as Yt,Gt as Xt,H as O,I as k,It as Zt,J as Qt,Jt as $t,L as A,Ln as en,M as j,Mn as tn,N as M,Nt as nn,Pt as rn,S as N,Ut as an,Vt as on,Xt as sn,Yt as cn,Z as ln,Zt as un,_ as dn,_n as fn,_t as pn,an as mn,b as hn,bt as gn,cn as P,ct as _n,d as vn,dn as yn,dt as bn,et as xn,fn as Sn,gn as Cn,gt as wn,ht as Tn,in as En,jt as Dn,kt as On,ln as kn,mn as An,mt as jn,on as Mn,pn as Nn,q as Pn,rn as Fn,sn as In,st as Ln,u as Rn,un as zn,vt as Bn,w as F,xn as Vn,xt as Hn,y as Un,yt as Wn,zn as Gn,zt as Kn}from"./minerva-web-components-e9i9Tzii.js";import{t as I}from"./minerva-web-components-DB7tn7hP.js";import{Ot as qn,Tt as Jn,kt as Yn,wt as Xn}from"./minerva-web-components-BNYYTKbx.js";import{a as Zn,c as Qn,d as $n,f as er,h as tr,i as nr,l as rr,m as ir,n as ar,o as or,p as sr,r as cr,s as lr,t as ur,u as dr}from"./minerva-web-components-BzRtUb-M.js";var fr,L;function pr(){return(pr=e((()=>{d(),_(),f(),It(),p(),b(),x(),Te(),M(),D(),T(),P(),Rn(),fr={fromAttribute:e=>(e??``).split(/[\s,]+/).map(e=>parseInt(e,10)).filter(e=>!isNaN(e)&&e>0),toAttribute:e=>e.join(`,`)},L=class e extends h{constructor(...e){super(...e),this.current=1,this.total=0,this.pageSize=10,this.disabled=!1,this.showQuickJumper=!1,this.showSizeChanger=!1,this.pageSizeOptions=[10,20,50,100],this.showTotal=!1,this.size=`medium`,this.shape=`rounded`,this.variant=`solid`,this.simple=!1,this.hideEdges=!1,this.hideNumbers=!1,this.responsive=!1,this.jumpValue=``,this.simpleDraft=null,this.ripples=[],this.aria=new u(this),this.locale=new S(this),this.nextRippleId=0,this.restoreFocus=null,this.handleKeyDown=e=>{let t=e.key;(t===`ArrowLeft`||t===`ArrowRight`)&&rn(this)===`rtl`&&(t=t===`ArrowLeft`?`ArrowRight`:`ArrowLeft`);let n=this.current,r=t===`ArrowLeft`?n-1:t===`ArrowRight`?n+1:t===`Home`?1:t===`End`?this.totalPages:null;r!==null&&(e.preventDefault(),this.changePage(r,`active`))},this.handleJump=e=>{if(e.key!==`Enter`)return;e.preventDefault();let t=parseInt(this.jumpValue,10);!isNaN(t)&&t>=1&&t<=this.totalPages&&(this.changePage(t),this.jumpValue=``,e.target.value=``)},this.handleSizeChange=e=>{let t=e.target,n=parseInt(t.value,10);this.request(1,n)||(t.value=String(this.pageSize))},this.commitSimpleDraft=()=>{let e=this.simpleDraft;if(e===null)return;this.simpleDraft=null;let t=parseInt(e,10);isNaN(t)||this.changePage(Math.min(Math.max(t,1),this.totalPages))}}static{this.tagName=`minerva-pagination`}static{this.styles=[g,O`
:host{
display: block;
}
`,C(be)]}get totalPages(){return Math.max(1,this.pageSize>0?Math.ceil(this.total/this.pageSize):0)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.rippleTimer)}request(e,t){let n={page:e,pageSize:t};return this.emit(`minerva-page-change`,n,{cancelable:!0})?(this.current=e,this.pageSize=t,!0):!1}changePage(e,t=`if-lost`){let n=this.current;this.disabled||e===n||e<1||e>this.totalPages||(this.restoreFocus={mode:t,page:e},this.request(e,this.pageSize))}willUpdate(t){y&&(t.has(`current`)||t.has(`total`))&&this.total>0&&this.current>this.totalPages&&m(e.tagName,`current (${this.current}) is greater than the number of pages (${this.totalPages}).`)}updated(){let e=this.restoreFocus;this.restoreFocus=null;let t=this.shadowRoot;if(!e||!t||e.page!==this.current)return;let n=t.activeElement,r=!n||n.disabled===!0;(e.mode===`active`||r)&&(t.querySelector(`[aria-current="page"]`)??t.querySelector(`button:not(:disabled), input`))?.focus()}handleItemClick(e,t,n){let r=this.current;if(!(this.disabled||e===r||e<1||e>this.totalPages)){if(n.detail>0){let e=n.currentTarget.getBoundingClientRect();this.ripples=[...this.ripples,{x:n.clientX-e.left,y:n.clientY-e.top,id:this.nextRippleId++,itemKey:t}],clearTimeout(this.rippleTimer),this.rippleTimer=setTimeout(()=>this.ripples=[],1e3)}this.changePage(e)}}label(e,t){let n=this.labels,r=this.locale.t;switch(e){case`prev`:return n?.prev??r(`pagination.prev`);case`next`:return n?.next??r(`pagination.next`);case`jump-prev`:return n?.jumpPrev??r(`pagination.jumpPrev`);case`jump-next`:return n?.jumpNext??r(`pagination.jumpNext`);default:return n?.page?.(t)??r(`pagination.page`,{page:t})}}hookStates(){return{disabled:this.disabled,size:this.size,shape:this.shape,variant:this.variant}}renderItem(e){let{type:t,target:n,key:r}=e;if(t===`ellipsis`)return A`<span class="ellipsis" aria-hidden="true">…</span>`;let i=this.current,o=t===`page`&&n===i,s=this.disabled||(t===`prev`?i<=1:t===`next`&&i>=this.totalPages),c;switch(t){case`prev`:c=A`<slot name="prev-icon">${Fe}</slot>`;break;case`next`:c=A`<slot name="next-icon">${a}</slot>`;break;case`jump-prev`:case`jump-next`:c=A`<span class="jumpWrapper"
><slot
name=${t===`jump-prev`?`jump-prev-icon`:`jump-next-icon`}
>${He}</slot
><span class="jumpHint" aria-hidden="true"
>${this.label(t,n)}</span
></span
>`;break;default:c=n}return this.itemRender&&(c=this.itemRender(n,t)),A`<button
type="button"
part="item"
data-key=${r}
class=${F({item:!0,active:o,disabled:s,prev:t===`prev`,next:t===`next`,jump:t===`jump-prev`||t===`jump-next`})}
?disabled=${s}
aria-label=${this.label(t,n)}
aria-current=${o?`page`:k}
@keydown=${this.handleKeyDown}
@click=${e=>this.handleItemClick(n,r,e)}
>
${c}
${this.ripples.filter(e=>e.itemKey===r).map(e=>A`<span
class="ripple"
style="left:${e.x}px;top:${e.y}px"
aria-hidden="true"
></span>`)}
</button>`}items(){let e=this.current,t=this.totalPages,n=t=>this.hideEdges?[]:[{key:t,type:t,target:t===`prev`?e-1:e+1}],r=e=>({key:`page-${e}`,type:`page`,target:e});if(this.siblingCount!==void 0||this.boundaryCount!==void 0){let i=In(t,e,Math.max(0,this.siblingCount??1),Math.max(1,this.boundaryCount??1));return[...n(`prev`),...i.map(e=>typeof e==`number`?r(e):{key:e,type:`ellipsis`,target:0}),...n(`next`)]}let i=Cn(e,t),a=[...n(`prev`)];i.length>0&&i[0]>1&&(a.push(r(1)),i[0]>2&&a.push({key:`jump-prev`,type:`jump-prev`,target:Math.max(1,e-5)})),i.forEach(e=>a.push(r(e)));let o=i[i.length-1];return i.length>0&&o<t&&(o<t-1&&a.push({key:`jump-next`,type:`jump-next`,target:Math.min(t,e+5)}),a.push(r(t))),a.push(...n(`next`)),a}renderPageList(){let e=this.current,t=t=>this.hideEdges?k:this.renderItem({key:t,type:t,target:t===`prev`?e-1:e+1});return this.simple?A`${t(`prev`)}
<div class="simpleInput">
<input
part="simple-input"
.value=${this.simpleDraft??String(e)}
?disabled=${this.disabled}
aria-label=${this.labels?.currentPage??this.locale.t(`pagination.currentPage`)}
inputmode="numeric"
@input=${e=>this.simpleDraft=e.target.value}
@keydown=${e=>{e.key===`Enter`&&(e.preventDefault(),this.commitSimpleDraft())}}
@blur=${this.commitSimpleDraft}
/>
<span class="simpleDivider" aria-hidden="true">/</span>
<span>${this.totalPages}</span>
</div>
${t(`next`)}`:this.hideNumbers?A`${t(`prev`)}
<span class="counter" aria-live="polite"
>${e} / ${this.totalPages}</span
>
${t(`next`)}`:vn(this.items(),e=>e.key,e=>this.renderItem(e))}render(){let e=this.locale.t,t=this.labels,n=this.total,r=this.pageSize,i=Math.min(Math.max(1,this.current),this.totalPages),a=n>0?[(i-1)*r+1,Math.min(i*r,n)]:[0,0],o=this.pageSizeOptions.includes(r)?this.pageSizeOptions:[...this.pageSizeOptions,r].sort((e,t)=>e-t),s=n=>t?.pageSizeOption?.(n)??e(`pagination.pageSizeOption`,{size:n});return A`<nav
part="root"
aria-label=${this.aria.label??t?.nav??e(`pagination.nav`)}
class=${F({pagination:!0,disabled:this.disabled,small:this.size===`small`,large:this.size===`large`,circle:this.shape===`circle`,square:this.shape===`square`,[this.variant]:!0,responsive:this.responsive})}
>
${this.showTotal?A`<div
part="total"
class="total"
aria-live="polite"
aria-atomic="true"
>
${this.totalRender?this.totalRender(n,a):t?.total?.(n)??e(`pagination.total`,{total:n})}
</div>`:k}
${this.renderPageList()}
${this.showQuickJumper?A`<label part="jumper" class="jumper">
${t?.jumpTo??e(`pagination.jumpTo`)}
<input
.value=${this.jumpValue}
?disabled=${this.disabled}
inputmode="numeric"
aria-label=${t?.jumpToInput??e(`pagination.jumpToInput`)}
@input=${e=>this.jumpValue=e.target.value}
@keydown=${this.handleJump}
/>
</label>`:k}
${this.showSizeChanger?A`<div class="sizeChanger">
<select
part="size-changer"
?disabled=${this.disabled}
aria-label=${t?.pageSize??e(`pagination.pageSize`)}
@change=${this.handleSizeChange}
>
${o.map(e=>A`<option
value=${e}
.selected=${e===r}
>
${s(e)}
</option>`)}
</select>
</div>`:k}
</nav>`}},I([j({type:Number,reflect:!0})],L.prototype,`current`,void 0),I([j({type:Number})],L.prototype,`total`,void 0),I([j({type:Number,reflect:!0,attribute:`page-size`})],L.prototype,`pageSize`,void 0),I([j({type:Boolean,reflect:!0})],L.prototype,`disabled`,void 0),I([j({type:Boolean,attribute:`show-quick-jumper`})],L.prototype,`showQuickJumper`,void 0),I([j({type:Boolean,attribute:`show-size-changer`})],L.prototype,`showSizeChanger`,void 0),I([j({attribute:`page-size-options`,converter:fr})],L.prototype,`pageSizeOptions`,void 0),I([j({type:Boolean,attribute:`show-total`})],L.prototype,`showTotal`,void 0),I([j({attribute:!1})],L.prototype,`totalRender`,void 0),I([j({attribute:!1})],L.prototype,`itemRender`,void 0),I([j({reflect:!0})],L.prototype,`size`,void 0),I([j({reflect:!0})],L.prototype,`shape`,void 0),I([j({reflect:!0})],L.prototype,`variant`,void 0),I([j({type:Boolean,reflect:!0})],L.prototype,`simple`,void 0),I([j({type:Number,attribute:`sibling-count`})],L.prototype,`siblingCount`,void 0),I([j({type:Number,attribute:`boundary-count`})],L.prototype,`boundaryCount`,void 0),I([j({type:Boolean,attribute:`hide-edges`})],L.prototype,`hideEdges`,void 0),I([j({type:Boolean,attribute:`hide-numbers`})],L.prototype,`hideNumbers`,void 0),I([j({type:Boolean,reflect:!0})],L.prototype,`responsive`,void 0),I([j({attribute:!1})],L.prototype,`labels`,void 0),I([w()],L.prototype,`jumpValue`,void 0),I([w()],L.prototype,`simpleDraft`,void 0),I([w()],L.prototype,`ripples`,void 0)})))()}function mr(e,t,n,r){let i=t==null?{base:1}:typeof t==`number`?{base:t}:t,a={},o=1;for(let t of hr){let n=i[t]??o;(!Number.isInteger(n)||n<1||n>12)&&(y&&m(e,`columns must be integers from 1 to 12 (got ${String(n)} for "${t}"); using ${o}.`),n=o),a[`--grid-columns-${t}`]=String(n),o=n}return a[`--grid-row-gap`]=Gt(n),a[`--grid-column-gap`]=Gt(r),a}var hr,gr,_r,vr;function yr(){return(yr=e((()=>{_(),b(),x(),qn(),qe(),M(),D(),hn(),hr=[`base`,`sm`,`md`,`lg`],gr={fromAttribute(e){if(e===null)return;let t=e.trim();if(t.startsWith(`{`))try{return JSON.parse(t)}catch{return NaN}let n=t.split(/[\s,]+/).filter(Boolean).map(Number);if(n.length<=1)return n[0]??NaN;let[r,i,a,o]=n;return{base:r,sm:i,md:a,lg:o}},toAttribute(e){return e===void 0?null:typeof e==`number`?String(e):JSON.stringify(e)}},_r=class e extends h{constructor(...e){super(...e),this.columns=1,this.gap=4}static{this.tagName=`minerva-responsive-grid`}static{this.styles=[g,O`
:host{
display: block;
min-width: 0;
}
.layout ::slotted(*){
min-width: 0;
}
`,C(zt)]}render(){let t=mr(e.tagName,this.columns,this.rowGap??this.gap,this.columnGap??this.gap);return A`<div class="root" part="root" style=${N(t)}>
<div class="layout" part="layout"><slot></slot></div>
</div>`}},I([j({converter:gr})],_r.prototype,`columns`,void 0),I([j({converter:Yn})],_r.prototype,`gap`,void 0),I([j({attribute:`row-gap`,converter:Yn})],_r.prototype,`rowGap`,void 0),I([j({attribute:`column-gap`,converter:Yn})],_r.prototype,`columnGap`,void 0),vr=class extends h{constructor(...e){super(...e),this.fullWidth=!1}static{this.tagName=`minerva-grid-item`}static{this.styles=[g,O`
:host{
display: block;
min-width: 0;
}
:host([full-width]){
grid-column: 1 / -1;
}
`]}render(){return A`<slot></slot>`}},I([j({type:Boolean,reflect:!0,attribute:`full-width`})],vr.prototype,`fullWidth`,void 0)})))()}var R;function br(){return(br=e((()=>{d(),_(),p(),b(),x(),At(),tt(),M(),D(),T(),dn(),R=class e extends v{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.variant=`outline`,this.size=`medium`,this.invalid=!1,this.placeholder=``,this.readOnly=!1,this.locale=new S(this),this.aria=new u(this,()=>this.labels),this.dirty=!1}static{this.tagName=`minerva-textarea`}static{this.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[g,O`
:host{
display: block;
width: 100%;
min-width: 0;
}
`,C(Qe)]}focus(e){this.textarea?.focus(e)}blur(){this.textarea?.blur()}select(){this.textarea?.select()}getFormValue(){return this.value}getValidity(){let e=this.textarea;return e?{flags:Ze(e.validity),message:e.validationMessage,anchor:e}:this.required&&!this.value?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`)}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`value`)&&t.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),y&&(t.has(`minLength`)||t.has(`maxLength`))&&this.minLength!==void 0&&this.maxLength!==void 0&&this.minLength>this.maxLength&&m(e.tagName,`minlength (${this.minLength}) is greater than maxlength (${this.maxLength}): no value can be valid.`)}handleInput(){this.value=String(this.textarea.value),this.emit(`minerva-input`,{value:this.value})}handleChange(){this.value=String(this.textarea.value),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}hookStates(){return{disabled:this.isDisabled,invalid:this.invalid||this.aria.attr(`aria-invalid`)===`true`,readonly:this.readOnly,required:this.required,size:this.size,variant:this.variant}}render(){let e=this.invalid||this.aria.attr(`aria-invalid`)===`true`;return A`<textarea
      part="root"
      class=${F({textarea:!0,[this.variant]:!0,[this.size]:!0,invalid:e})}
      style="resize: none"
      .value=${Un(this.value)}
      name=${this.name||k}
      placeholder=${this.placeholder||k}
      rows=${this.rows??k}
      ?disabled=${this.isDisabled}
      ?readonly=${this.readOnly}
      ?required=${this.required}
      minlength=${this.minLength??k}
      maxlength=${this.maxLength??k}
      autocomplete=${this.autocomplete??k}
      wrap=${this.wrap??k}
      aria-label=${this.aria.label??k}
      aria-description=${this.aria.description??k}
      aria-invalid=${e?`true`:k}
      aria-required=${this.aria.attr(`aria-required`)??k}
      aria-readonly=${this.aria.attr(`aria-readonly`)??k}
      @input=${this.handleInput}
      @change=${this.handleChange}
    ></textarea>`}},I([j({attribute:!1})],R.prototype,`value`,void 0),I([j({attribute:`value`})],R.prototype,`defaultValue`,void 0),I([j({reflect:!0})],R.prototype,`variant`,void 0),I([j({reflect:!0})],R.prototype,`size`,void 0),I([j({type:Boolean,reflect:!0})],R.prototype,`invalid`,void 0),I([j()],R.prototype,`placeholder`,void 0),I([j({type:Boolean,reflect:!0,attribute:`readonly`})],R.prototype,`readOnly`,void 0),I([j({type:Number})],R.prototype,`rows`,void 0),I([j({type:Number,attribute:`minlength`})],R.prototype,`minLength`,void 0),I([j({type:Number,attribute:`maxlength`})],R.prototype,`maxLength`,void 0),I([j()],R.prototype,`autocomplete`,void 0),I([j()],R.prototype,`wrap`,void 0),I([E(`textarea`)],R.prototype,`textarea`,void 0)})))()}var xr;function Sr(){return(Sr=e((()=>{d(),_(),f(),p(),b(),jt(),x(),at(),M(),D(),T(),hn(),xr=class e extends h{constructor(...e){super(...e),this.variant=`spinner`,this.size=`medium`,this.color=`primary`,this.label=``,this.decorative=!1,this.full=!1,this.locale=new S(this),this.aria=new u(this),this.slots=new pt(this)}static{this.tagName=`minerva-progress`}static{this.styles=[g,O`
:host{
display: inline-flex;
vertical-align: middle;
max-width: 100%;
}
:host([full]){
display: flex;
width: 100%;
}

.spinner,
.circle,
.wave{
display: inline-flex;
}
.spinner svg,
.circle svg,
.wave svg{
display: block;
}
`,C(Tt)]}hookStates(){return{variant:this.variant===`dottedBar`?`dotted-bar`:this.variant,size:this.size,color:this.color}}updated(){y&&this.full&&this.width&&m(e.tagName,`width is ignored when full is set.`)}renderIndicator(){let e=this.size;switch(this.variant){case`bar`:return A`<div part="indicator" class="barContainer ${e}">
<div class="bar"></div>
</div>`;case`dottedBar`:return A`<div part="indicator" class="dottedBarContainer ${e}">
<div class="dottedBar"></div>
</div>`;case`wave`:return A`<div part="indicator" class="waveContainer ${e}">
<span class="wave" aria-hidden="true">${wt}</span>
</div>`;case`circle`:return A`<span
part="indicator"
class="circle ${e}"
aria-hidden="true"
>${st}</span
>`;case`spinner`:return A`<span
part="indicator"
class="spinner ${e}"
aria-hidden="true"
>${ne}</span
>`;default:return k}}render(){let e=this.variant===`bar`||this.variant===`dottedBar`,t=!!this.label||this.slots.test(`label`),n=this.aria.label;return A`<div
part="root"
class=${F({progressIndicator:!0,[this.color]:!0,fullWidth:this.full,defaultWidth:!this.full&&!this.width&&e})}
style=${N({width:this.width&&!this.full?this.width:void 0})}
role=${this.decorative?k:`progressbar`}
aria-hidden=${this.decorative?`true`:k}
aria-label=${this.decorative?k:n??(t?k:this.locale.t(`common.loading`))}
aria-labelledby=${!this.decorative&&!n&&t?`label`:k}
>
${this.slots.test(`icon`)?A`<span class="icon" part="icon"
><slot name="icon"></slot
></span>`:k}
${this.renderIndicator()}
${t?A`<span id="label" part="label" class="label"
><slot name="label">${this.label}</slot></span
>`:k}
</div>`}},I([j({reflect:!0})],xr.prototype,`variant`,void 0),I([j({reflect:!0})],xr.prototype,`size`,void 0),I([j({reflect:!0})],xr.prototype,`color`,void 0),I([j()],xr.prototype,`label`,void 0),I([j({type:Boolean,reflect:!0})],xr.prototype,`decorative`,void 0),I([j()],xr.prototype,`width`,void 0),I([j({type:Boolean,reflect:!0})],xr.prototype,`full`,void 0)})))()}var Cr;function wr(){return(wr=e((()=>{d(),f(),It(),p(),b(),jt(),x(),ir(),dr(),Qn(),Zn(),o(),ie(),M(),D(),T(),Cr=class extends h{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.size=`medium`,this.hideCloseButton=!1,this.dialogRole=`dialog`,this.locale=new S(this),this.aria=new u(this),this.slots=new pt(this),this.presence=new ue(this,()=>this.panel),this.modal=new or(this),this.focusScope=new $n(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new tr(this,()=>({disableOutsidePointerEvents:!0,branches:()=>[this.triggerElement()],onFocusOutside:e=>e.preventDefault(),onEscapeKeyDown:()=>this.lastReason(`escape`),onPointerDownOutside:()=>this.lastReason(`outside`),onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleClick=e=>{let t=this.triggerElement();!e.defaultPrevented&&t&&e.composedPath().includes(t)&&this.requestOpenChange(!this.open,`trigger`)}}static{this.tagName=`minerva-modal`}static{this.styles=[g,rr,O`
:host{
display: contents;
}
.content .body{
flex: 1 1 auto;
}
`,C(Ht)]}lastReason(e){this.reason=e}show(){this.open=!0}hide(){this.open=!1}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleClick)}willUpdate(e){e.has(`open`)&&this.presence.sync(this.open)}hookStates(){return{state:this.open?`open`:`closed`,size:this.size}}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)){let e=this.panel;this.open&&e?(Ke(this.overlay),Ke(e),this.modal.activate(this),this.layer.activate(e),this.focusScope.activate(e),this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleClick),Rt(this.panel),Rt(this.overlay)}afterClose(){Rt(this.panel),Rt(this.overlay),this.emit(`minerva-after-close`)}render(){let e=this.open||this.presence.present,t=this.open?`open`:`closed`,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description;return A`<slot name="trigger"></slot> ${e?A`<div
part="overlay"
class="overlay"
popover="manual"
data-state=${t}
aria-hidden="true"
></div>
<div
part="content"
class=${F({content:!0,[this.size]:!0})}
popover="manual"
role=${this.dialogRole}
aria-modal="true"
aria-labelledby=${n?`title`:k}
aria-label=${n?k:this.aria.label??k}
aria-describedby=${r?`description`:k}
tabindex="-1"
data-state=${t}
>
${r?A`<p
id="description"
class="description"
part="description"
>
${r}
</p>`:k}
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
aria-label=${this.closeLabel??this.locale.t(`modal.close`)}
@click=${()=>this.requestOpenChange(!1,`close-button`)}
>
${Re}
</button>`}
</div>`:k}`}},I([j({type:Boolean,reflect:!0})],Cr.prototype,`open`,void 0),I([j()],Cr.prototype,`label`,void 0),I([j()],Cr.prototype,`description`,void 0),I([j({reflect:!0})],Cr.prototype,`size`,void 0),I([j({type:Boolean,attribute:`hide-close-button`})],Cr.prototype,`hideCloseButton`,void 0),I([j({attribute:`close-label`})],Cr.prototype,`closeLabel`,void 0),I([j({attribute:`dialog-role`})],Cr.prototype,`dialogRole`,void 0),I([E(`.content`)],Cr.prototype,`panel`,void 0),I([E(`.overlay`)],Cr.prototype,`overlay`,void 0)})))()}var Tr,Er,Dr,z;function Or(){return(Or=e((()=>{d(),_(),f(),p(),b(),x(),Ee(),M(),D(),P(),Tr=[`mon`,`tue`,`wed`,`thu`,`fri`,`sat`,`sun`],Er=/^\d{4}-\d{2}-\d{2}$/,Dr={fromAttribute(e){let t=e?.trim().match(/^(\d{4})-(\d{1,2})(?:-\d{1,2})?$/);return t?Yt(Number(t[1]),Number(t[2])-1,1):void 0},toAttribute(e){return e instanceof Date&&!Number.isNaN(e.getTime())?En(e).slice(0,7):null}},z=class e extends h{constructor(...e){super(...e),this.events=[],this.clickableEvents=!1,this.disabled=!1,this.hideEvents=!1,this.focusedKey=``,this.pendingFocus=null,this.i18n=new S(this),this.aria=new u(this)}static{this.tagName=`minerva-month-calendar`}static{this.styles=[g,O`
:host{
display: block;
}
.navButton svg{
flex-shrink: 0;
}
`,C(Ve)]}get displayed(){let e=this.month;return e instanceof Date&&!Number.isNaN(e.getTime())?tn(e):tn(new Date)}focus(e){this.renderRoot.querySelector(`[role="gridcell"][tabindex="0"]`)?.focus(e)}goToMonth(e){let t=tn(e);En(t)!==En(this.displayed)&&(this.month=t,this.emit(`minerva-month-change`,{month:t}))}select(e){if(this.disabled)return;let t=En(e);t!==this.value&&(this.value=t,this.emit(`minerva-change`,{value:t})),en(e,this.displayed)||this.goToMonth(e)}handleKeyDown(e,t){if(this.disabled)return;if(e.key===`Enter`||e.key===` `){e.preventDefault(),e.repeat||this.select(t);return}let n=xn(e.key,this),r=(t.getDay()+6)%7,i;switch(n){case`ArrowLeft`:i=$t(t,-1);break;case`ArrowRight`:i=$t(t,1);break;case`ArrowUp`:i=$t(t,-7);break;case`ArrowDown`:i=$t(t,7);break;case`Home`:i=$t(t,-r);break;case`End`:i=$t(t,6-r);break;case`PageUp`:case`PageDown`:{let n=(e.key===`PageUp`?-1:1)*(e.shiftKey?12:1),r=tn(t,n),a=$t(tn(r,1),-1).getDate();i=Yt(r.getFullYear(),r.getMonth(),Math.min(t.getDate(),a));break}default:return}e.preventDefault(),this.pendingFocus=En(i),this.focusedKey=En(i),en(i,this.displayed)||this.goToMonth(i)}willUpdate(t){y&&t.has(`value`)&&this.value&&!Er.test(this.value)&&m(e.tagName,`value "${this.value}" is not a "YYYY-MM-DD" day: nothing is selected.`)}updated(){if(this.disabled||!this.pendingFocus)return;let e=this.renderRoot.querySelector(`[data-date="${this.pendingFocus}"]`);e&&(this.pendingFocus=null,e.focus())}hookStates(){return{disabled:this.disabled}}render(){let e=this.i18n.t,t=this.displayed,n=$t(t,-((t.getDay()+6)%7)),r=Array.from({length:42},(e,t)=>$t(n,t)),i=r.map(En),o=new Date,s=En(o),c=this.value||void 0,l=[this.focusedKey,c,en(o,t)?s:``,En(t)].find(e=>e&&i.includes(e)),ee=this.events??[],te=new Map;for(let e of ee)te.set(e.date,(te.get(e.date)??0)+1);let ne=ee.filter(e=>e.date===c),u;try{u=new Intl.DateTimeFormat(this.locale??this.i18n.language,{year:`numeric`,month:`long`}).format(t)}catch{u=En(t).slice(0,7)}let re=this.disabled;return A`<section
part="root"
class="monthCalendar"
aria-label=${this.aria.label??e(`monthCalendar.label`)}
>
<div class="toolbar">
<h2 id="heading" part="heading" class="heading" aria-live="polite">
${u}
</h2>
<div class="navigation">
<button
type="button"
part="nav-button"
class="navButton iconButton"
aria-label=${this.previousMonthLabel??e(`monthCalendar.previousMonth`)}
?disabled=${re}
@click=${()=>this.goToMonth(tn(t,-1))}
>
${Fe}
</button>
<button
type="button"
part="nav-button"
class="navButton"
?disabled=${re}
@click=${()=>this.goToMonth(new Date)}
>
${ut} ${this.todayLabel??e(`monthCalendar.today`)}
</button>
<button
type="button"
part="nav-button"
class="navButton iconButton"
aria-label=${this.nextMonthLabel??e(`monthCalendar.nextMonth`)}
?disabled=${re}
@click=${()=>this.goToMonth(tn(t,1))}
>
${a}
</button>
</div>
</div>
<div
part="grid"
role="grid"
aria-labelledby="heading"
aria-disabled=${re?`true`:k}
class="grid"
>
<div role="row" class="week">
${Tr.map((t,n)=>A`<div role="columnheader" class="weekday">
${this.weekdayLabels?.[n]??e(`monthCalendar.weekdays.${t}`)}
</div>`)}
</div>
${Array.from({length:6},(n,i)=>A`<div role="row" class="week">
${r.slice(i*7,i*7+7).map(n=>{let r=En(n),i=te.get(r)??0,a=this.getDayLabel?this.getDayLabel(r,i):i?e(`monthCalendar.dayWithEvents`,{date:r,count:i}):r;return A`<div
role="gridcell"
part="day"
class="day"
data-date=${r}
data-outside=${en(n,t)?k:`true`}
aria-label=${a}
aria-selected=${String(c===r)}
aria-current=${r===s?`date`:k}
aria-disabled=${re?`true`:k}
tabindex=${!re&&r===l?`0`:`-1`}
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
${!this.hideEvents&&c?A`<section
part="events"
class="events"
aria-label=${this.getEventsLabel?this.getEventsLabel(c):e(`monthCalendar.eventsLabel`,{date:c})}
>
<h3 class="eventsHeading">${c}</h3>
${ne.length?A`<ul class="eventList">
${ne.map(e=>A`<li class="eventItem">
${this.clickableEvents?A`<button
type="button"
part="event"
class="eventButton"
?disabled=${re}
@click=${()=>this.emit(`minerva-event-click`,{event:e})}
>
${e.title}
</button>`:A`<span part="event">${e.title}</span>`}
</li>`)}
</ul>`:A`<p class="empty" part="empty">
${this.emptyEventsText??e(`monthCalendar.noEvents`)}
</p>`}
</section>`:k}
</section>`}},I([j({converter:Dr,reflect:!0})],z.prototype,`month`,void 0),I([j({reflect:!0})],z.prototype,`value`,void 0),I([j({attribute:!1})],z.prototype,`events`,void 0),I([j({type:Boolean,attribute:`clickable-events`})],z.prototype,`clickableEvents`,void 0),I([j({type:Boolean,reflect:!0})],z.prototype,`disabled`,void 0),I([j({type:Boolean,attribute:`hide-events`})],z.prototype,`hideEvents`,void 0),I([j({attribute:`previous-month-label`})],z.prototype,`previousMonthLabel`,void 0),I([j({attribute:`next-month-label`})],z.prototype,`nextMonthLabel`,void 0),I([j({attribute:`today-label`})],z.prototype,`todayLabel`,void 0),I([j({attribute:`empty-events-text`})],z.prototype,`emptyEventsText`,void 0),I([j()],z.prototype,`locale`,void 0),I([j({attribute:!1})],z.prototype,`weekdayLabels`,void 0),I([j({attribute:!1})],z.prototype,`getDayLabel`,void 0),I([j({attribute:!1})],z.prototype,`getEventsLabel`,void 0),I([w()],z.prototype,`focusedKey`,void 0)})))()}function kr(e,t,n){for(let r of e){if(r.id===t)return!0;if(r.children&&kr(r.children,t,n))return n.add(r.id),!0}return!1}var Ar,jr,Mr;function Nr(){return(Nr=e((()=>{d(),_(),f(),It(),p(),b(),x(),Ct(),Le(),cr(),M(),D(),T(),Rn(),Ar=`.item`,jr=`.children`,Mr=class e extends h{constructor(...e){super(...e),this.sections=[],this.collapsed=!1,this.wrapLabels=!1,this.expandedIds=[],this.explicitlyCollapsed=new Set,this.aria=new u(this),this.locale=new S(this),this.typeahead=new nr(this),this.handleNavKeyDown=e=>{if(e.defaultPrevented)return;let t=e.composedPath()[0]?.closest?.(Ar);if(!t||!this.shadowRoot?.contains(t))return;let n=this.focusableItems(),r=n.indexOf(t),i;switch(this.logicalKey(e.key)){case`ArrowDown`:i=n[r+1];break;case`ArrowUp`:i=r>0?n[r-1]:void 0;break;case`Home`:i=n[0];break;case`End`:i=n[n.length-1];break;case`ArrowLeft`:if(t.getAttribute(`aria-expanded`)===`true`)return;i=t.closest(jr)?.parentElement?.querySelector(`:scope > ${Ar}`);break;default:{if(e.altKey||e.ctrlKey||e.metaKey)return;let t=this.typeahead.search(e.key,n.map(e=>({text:e.querySelector(`.label`)?.textContent??``})),r);if(t===-1)return;i=n[t]}}i&&(e.preventDefault(),i.focus())}}static{this.tagName=`minerva-nav-tree`}static{this.styles=[g,O`
:host{
display: block;
}
`,C(ze)]}activeAncestors(){let e=new Set;for(let t of this.sections)kr(t.items,this.activeId,e);return e}isExpanded(e,t){return this.expandedIds.includes(e)||!this.explicitlyCollapsed.has(e)&&t.has(e)}willUpdate(t){if(y&&t.has(`sections`)){let t=new Set,n=r=>{for(let i of r)t.has(i.id)&&m(e.tagName,`duplicate item id "${i.id}": ids must be unique.`),t.add(i.id),i.children&&n(i.children)};for(let e of this.sections??[])n(e.items??[])}}setItemExpanded(e,t){let n=new Set(this.expandedIds);t?n.add(e.id):n.delete(e.id);let r=Array.from(n),i={expandedIds:r,item:e,expanded:t};if(!this.emit(`minerva-expanded-change`,i,{cancelable:!0}))return;let a=new Set(this.explicitlyCollapsed);t?a.delete(e.id):a.add(e.id),this.explicitlyCollapsed=a,this.expandedIds=r}select(e,t){let n={value:e.id,item:e};this.emit(`minerva-select`,n,{cancelable:!0})||t?.preventDefault()}toggleItem(e){this.setItemExpanded(e,!this.isExpanded(e.id,this.activeAncestors())),this.select(e)}focusableItems(){return Array.from(this.shadowRoot?.querySelectorAll(Ar)??[]).filter(e=>!e.disabled&&e.getAttribute(`aria-disabled`)!==`true`)}logicalKey(e){return e!==`ArrowLeft`&&e!==`ArrowRight`||rn(this)!==`rtl`?e:e===`ArrowLeft`?`ArrowRight`:`ArrowLeft`}renderSectionTitle(e){return A`<h2 part="group-label" class="sectionTitle">${e}</h2>`}renderContent(e,t){return A`<span part="icon" class="icon" aria-hidden="true"
>${e.icon??k}</span
><span class="copy"
><span part="label" class="label">${e.label}</span>${e.description?A`<small part="description" class="description"
>${e.description}</small
>`:k}</span
>${!this.collapsed&&(e.endContent||t)?A`<span class="trailing"
>${e.endContent?A`<span class="end">${e.endContent}</span>`:k}${t?A`<span class="chevron" aria-hidden="true"
>${Vt}</span
>`:k}</span
>`:k}`}renderItem(t,n,r){let i=!!t.children?.length,a=t.id===this.activeId,o=r.has(t.id),s=i&&this.isExpanded(t.id,r),c=!!t.disabled,l={item:!0,nested:n>0,active:a,disabled:c},ee=Object.entries(l).filter(([,e])=>e).map(([e])=>e).join(` `),te=t.description?`${t.label} / ${t.description}`:t.label,ne=this.renderContent(t,i);return i?A`<div class="branch">
<button
part="item"
class=${F(l)}
type="button"
title=${te}
aria-expanded=${s?`true`:`false`}
data-id=${t.id}
data-active=${a?`true`:k}
data-ancestor-active=${o?`true`:k}
data-expanded=${s?`true`:k}
?disabled=${c}
@click=${()=>this.toggleItem(t)}
@keydown=${e=>{if(this.collapsed)return;let n=this.logicalKey(e.key);n===`ArrowRight`?(e.preventDefault(),s?e.currentTarget.parentElement?.querySelector(`${jr} ${Ar}`)?.focus():this.setItemExpanded(t,!0)):n===`ArrowLeft`&&s&&(e.preventDefault(),this.setItemExpanded(t,!1))}}
>
${ne}
</button>
${s&&!this.collapsed?A`<div class="children">
${vn(t.children??[],e=>e.id,e=>this.renderItem(e,n+1,r))}
</div>`:k}
</div>`:this.renderLink?this.renderLink(t,ne,{active:a,ancestorActive:o,expanded:!1,depth:n,collapsed:this.collapsed,hasChildren:i,disabled:c,className:ee}):c?A`<span
part="item"
class=${F(l)}
title=${te}
data-id=${t.id}
data-active=${a?`true`:k}
role="link"
aria-disabled="true"
>${ne}</span
>`:t.href===void 0?A`<button
part="item"
class=${F(l)}
type="button"
title=${te}
data-id=${t.id}
data-active=${a?`true`:k}
aria-current=${a?`page`:k}
@click=${()=>this.select(t)}
>
${ne}
</button>`:A`<a
part="item"
class=${F(l)}
href=${pe(e.tagName,t.href)??k}
title=${te}
data-id=${t.id}
data-active=${a?`true`:k}
aria-current=${a?`page`:k}
@click=${e=>this.select(t,e)}
>${ne}</a
>`}render(){let e=this.activeAncestors(),t=this.getAttribute(`aria-labelledby`);return A`<nav
part="root"
class=${F({navTree:!0,collapsed:this.collapsed,wrapLabels:this.wrapLabels&&!this.collapsed})}
aria-label=${this.aria.label??(t?k:this.locale.t(`navTree.label`))}
@keydown=${this.handleNavKeyDown}
>
${vn(this.sections??[],e=>e.id,t=>A`<section part="group" class="section">
${t.title?this.renderSectionTitle(t.title):k}
<div class="list">
${vn(t.items,e=>e.id,t=>this.renderItem(t,0,e))}
</div>
</section>`)}
</nav>`}},I([j({attribute:!1})],Mr.prototype,`sections`,void 0),I([j({attribute:`active-id`,reflect:!0})],Mr.prototype,`activeId`,void 0),I([j({type:Boolean,reflect:!0})],Mr.prototype,`collapsed`,void 0),I([j({type:Boolean,reflect:!0,attribute:`wrap-labels`})],Mr.prototype,`wrapLabels`,void 0),I([j({attribute:!1})],Mr.prototype,`expandedIds`,void 0),I([j({attribute:!1})],Mr.prototype,`renderLink`,void 0),I([w()],Mr.prototype,`explicitlyCollapsed`,void 0)})))()}var Pr,B;function Fr(){return(Fr=e((()=>{d(),_(),f(),p(),b(),x(),At(),de(),M(),D(),T(),P(),dn(),Pr={fromAttribute:e=>e===null||e.trim()===``||Number.isNaN(Number(e))?null:Number(e),toAttribute:e=>e===null?null:String(e)},B=class e extends v{constructor(...e){super(...e),this.value=null,this.defaultValue=null,this.step=1,this.size=`medium`,this.invalid=!1,this.readOnly=!1,this.showStepper=!1,this.noEmpty=!1,this.placeholder=``,this.draft=``,this.locale=new S(this),this.aria=new u(this,()=>this.labels),this.dirty=!1}static{this.tagName=`minerva-number-input`}static{this.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[g,O`
:host{
display: inline-flex;
width: 100%;
min-width: 0;
vertical-align: middle;
}
`,C(St)]}get resolvedPrecision(){return this.precision??un(this.step)}get locked(){return this.isDisabled||this.readOnly}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}stepUp(){this.value=this.stepped(this.step)}stepDown(){this.value=this.stepped(-this.step)}getFormValue(){return Dn(this.value,this.resolvedPrecision)}getValidity(){let{t:e}=this.locale,t=this.input,n=this.draft.trim();if(n&&n!==`-`&&n!==`.`){let r=ln(n);return r===null?{flags:{badInput:!0},message:this.notANumberMessage??e(`numberInput.notANumber`),anchor:t}:this.min!==void 0&&r<this.min?{flags:{rangeUnderflow:!0},message:this.belowMinMessage??e(`validation.rangeUnderflow`,{min:this.min}),anchor:t}:this.max!==void 0&&r>this.max?{flags:{rangeOverflow:!0},message:this.aboveMaxMessage??e(`validation.rangeOverflow`,{max:this.max}),anchor:t}:{flags:{},message:``}}return this.required&&this.value===null?{flags:{valueMissing:!0},message:e(`validation.valueMissing`),anchor:t}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.draft=Dn(this.value,this.resolvedPrecision)}restoreFormState(e){typeof e==`string`&&(this.value=ln(e))}willUpdate(t){if(t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),t.has(`value`)||t.has(`precision`)||t.has(`step`)){let e=ln(this.draft);(e===null||e!==this.value)&&(this.draft=Dn(this.value,this.resolvedPrecision))}y&&(t.has(`min`)||t.has(`max`))&&this.min!==void 0&&this.max!==void 0&&this.min>this.max&&m(e.tagName,`min (${this.min}) is greater than max (${this.max}): every value is clamped.`)}stepped(e){let t=ln(this.draft)??this.value??0;return Number(Jt(t+e,this.min,this.max).toFixed(this.resolvedPrecision))}commitValue(e){let t=this.resolvedPrecision,n=e===null?null:Number(e.toFixed(t));this.draft=Dn(n,t),n!==this.value&&(this.dirty=!0,this.value=n,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:n}))}commit(e){if(this.locked)return;let t=e.trim();if(t===``||t===`-`){this.noEmpty?this.commitValue(Jt(this.min??0,this.min,this.max)):this.commitValue(null);return}let n=ln(t);if(n===null){this.draft=Dn(this.value,this.resolvedPrecision);return}this.commitValue(Jt(n,this.min,this.max))}adjust(e){this.locked||this.commitValue(this.stepped(e))}handleInput(){this.draft=String(this.input.value),this.emit(`minerva-input`,{value:ln(this.draft)})}handleKeyDown(e){if(this.locked||e.defaultPrevented)return;let{key:t}=e;t===`ArrowUp`||t===`ArrowDown`?(e.preventDefault(),this.adjust(t===`ArrowUp`?this.step:-this.step)):t===`PageUp`||t===`PageDown`?(e.preventDefault(),this.adjust((t===`PageUp`?10:-10)*this.step)):t===`Home`&&this.min!==void 0?(e.preventDefault(),this.commitValue(this.min)):t===`End`&&this.max!==void 0?(e.preventDefault(),this.commitValue(this.max)):t===`Enter`&&this.input.blur()}handleBlur(){this.commit(String(this.input.value))}draftError(){let{t:e}=this.locale,t=this.draft.trim();if(!t||t===`-`||t===`.`)return;let n=ln(t);if(n===null)return this.notANumberMessage??e(`numberInput.notANumber`);if(this.min!==void 0&&n<this.min)return this.belowMinMessage??e(`numberInput.belowMin`,{min:this.min});if(this.max!==void 0&&n>this.max)return this.aboveMaxMessage??e(`numberInput.aboveMax`,{max:this.max})}hookStates(){return{disabled:this.isDisabled,invalid:this.invalid||this.draftError()!==void 0||this.aria.attr(`aria-invalid`)===`true`,readonly:this.readOnly,required:this.required,size:this.size}}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.locked,r=this.draftError(),i=r!==void 0,a=this.invalid||i||this.aria.attr(`aria-invalid`)===`true`,o=this.value??0;return A`<div
part="root"
class=${F({root:!0,[this.size]:!0,invalid:a,shake:i,disabled:t})}
title=${r??k}
>
<input
part="input"
class="field"
type="text"
inputmode="decimal"
role="spinbutton"
.value=${Un(this.draft)}
placeholder=${this.placeholder||k}
?disabled=${t}
?readonly=${this.readOnly}
?required=${this.required}
aria-valuemin=${this.min??k}
aria-valuemax=${this.max??k}
aria-valuenow=${this.value??k}
aria-label=${this.aria.label??k}
aria-description=${this.aria.description??k}
aria-invalid=${a?`true`:k}
aria-required=${this.aria.attr(`aria-required`)??k}
@input=${this.handleInput}
@blur=${this.handleBlur}
@keydown=${this.handleKeyDown}
/>
${this.showStepper?A`<div class="stepper" part="stepper" aria-hidden="true">
<button
part="increment"
type="button"
class="step stepUp"
tabindex="-1"
?disabled=${n||this.max!==void 0&&o>=this.max}
aria-label=${this.incrementLabel??e(`numberInput.increment`)}
@click=${()=>this.adjust(this.step)}
>
${Be}
</button>
<button
part="decrement"
type="button"
class="step stepDown"
tabindex="-1"
?disabled=${n||this.min!==void 0&&o<=this.min}
aria-label=${this.decrementLabel??e(`numberInput.decrement`)}
@click=${()=>this.adjust(-this.step)}
>
${Vt}
</button>
</div>`:k}
</div>`}},I([j({attribute:!1})],B.prototype,`value`,void 0),I([j({attribute:`value`,converter:Pr})],B.prototype,`defaultValue`,void 0),I([j({type:Number})],B.prototype,`min`,void 0),I([j({type:Number})],B.prototype,`max`,void 0),I([j({type:Number})],B.prototype,`step`,void 0),I([j({type:Number})],B.prototype,`precision`,void 0),I([j({reflect:!0})],B.prototype,`size`,void 0),I([j({type:Boolean,reflect:!0})],B.prototype,`invalid`,void 0),I([j({type:Boolean,reflect:!0,attribute:`readonly`})],B.prototype,`readOnly`,void 0),I([j({type:Boolean,attribute:`show-stepper`})],B.prototype,`showStepper`,void 0),I([j({type:Boolean,attribute:`no-empty`})],B.prototype,`noEmpty`,void 0),I([j()],B.prototype,`placeholder`,void 0),I([j({attribute:`increment-label`})],B.prototype,`incrementLabel`,void 0),I([j({attribute:`decrement-label`})],B.prototype,`decrementLabel`,void 0),I([j({attribute:`not-a-number-message`})],B.prototype,`notANumberMessage`,void 0),I([j({attribute:`below-min-message`})],B.prototype,`belowMinMessage`,void 0),I([j({attribute:`above-max-message`})],B.prototype,`aboveMaxMessage`,void 0),I([w()],B.prototype,`draft`,void 0),I([E(`input`)],B.prototype,`input`,void 0)})))()}var Ir,Lr,Rr,zr,Br;function Vr(){return(Vr=e((()=>{d(),_(),b(),jt(),x(),qn(),me(),M(),D(),T(),hn(),Ir=class extends h{static{this.tagName=`minerva-page`}static{this.styles=[g,C(ae),O`
:host{
display: block;
min-width: 0;
}
`]}render(){let e=this.maxWidth===void 0||this.maxWidth===``?void 0:Nn(this.maxWidth);return A`<div class="page" part="root" style=${N({maxWidth:e})}>
<slot></slot>
</div>`}},I([j({attribute:`max-width`,converter:Yn})],Ir.prototype,`maxWidth`,void 0),Lr=class extends h{constructor(...e){super(...e),this.heading=``,this.description=``,this.slots=new pt(this)}static{this.tagName=`minerva-page-header`}static{this.styles=[g,C(ae),O`
:host{
display: block;
min-width: 0;
}
`]}updated(){y&&!this.heading&&!this.slots.test(`heading`)&&m(this.constructor.tagName,`set the heading attribute (or fill the heading slot): the heading names the region.`)}renderHeading(){let e=!!this.description||this.slots.test(`description`);return A`<div class="heading">
<h1 part="title"><slot name="heading">${this.heading}</slot></h1>
${e?A`<p part="description">
<slot name="description">${this.description}</slot>
</p>`:k}
</div>`}renderActions(){return this.slots.test(`actions`)?A`<div class="actions" part="actions">
<slot name="actions"></slot>
</div>`:k}render(){return A`<header class="header" part="root">
${this.renderHeading()} ${this.renderActions()}
</header>`}},I([j()],Lr.prototype,`heading`,void 0),I([j()],Lr.prototype,`description`,void 0),Rr=class extends Lr{static{this.tagName=`minerva-page-section`}static{this.styles=[g,C(ae),O`
:host{
display: block;
min-width: 0;
}
.section ::slotted(minerva-tag),
.section ::slotted([data-component="tag"]){
align-self: flex-start;
}
`]}renderHeading(){let e=!!this.description||this.slots.test(`description`);return A`<div class="heading">
<h2 id="heading" part="title">
${this.slots.test(`icon`)?A`<span class="sectionIcon" part="icon" aria-hidden="true"
><slot name="icon"></slot
></span>`:k}<slot name="heading">${this.heading}</slot>
</h2>
${e?A`<p part="description">
<slot name="description">${this.description}</slot>
</p>`:k}
</div>`}render(){return A`<section class="section" part="root" aria-labelledby="heading">
<div class="sectionHeader" part="header">
${this.renderHeading()} ${this.renderActions()}
</div>
<slot></slot>
</section>`}},zr=class extends h{constructor(...e){super(...e),this.nowrap=!1,this.density=`default`,this.aria=new u(this)}static{this.tagName=`minerva-toolbar`}static{this.styles=[g,C(ae),O`
:host{
display: block;
min-width: 0;
max-width: 100%;
}
.toolbar ::slotted(*){
max-width: 100%;
min-width: 0;
}
.toolbar ::slotted(minerva-input),
.toolbar ::slotted([data-component="input"]){
flex: 1 1 16rem;
}
.toolbar ::slotted(minerva-select),
.toolbar ::slotted([data-component="select"]){
width: auto;
flex: 0 1 12rem;
}
.nowrap ::slotted(minerva-select),
.nowrap ::slotted([data-component="select"]){
width: 12rem;
}
.compact ::slotted(minerva-divider[orientation="vertical"]),
.compact ::slotted(hr[aria-orientation="vertical"]),
.compact ::slotted([role="separator"][aria-orientation="vertical"]){
height: var(--space-5);
align-self: center;
flex: 0 0 auto;
}
`]}render(){return A`<div
part="root"
role="group"
aria-label=${this.aria.label??k}
aria-description=${this.aria.description??k}
class=${F({toolbar:!0,compact:this.density===`compact`,nowrap:this.nowrap})}
>
<slot></slot>
</div>`}},I([j({type:Boolean,reflect:!0})],zr.prototype,`nowrap`,void 0),I([j({reflect:!0})],zr.prototype,`density`,void 0),Br=class extends h{constructor(...e){super(...e),this.label=``,this.value=``,this.slots=new pt(this)}static{this.tagName=`minerva-stat-card`}static{this.styles=[g,C(ae),O`
:host{
display: block;
min-width: 0;
}
`]}render(){let e=this.description!==void 0&&this.description!==null||this.slots.test(`description`);return A`<div class="statCard" part="root">
${this.slots.test(`icon`)?A`<span class="statIcon" part="icon" aria-hidden="true"
><slot name="icon"></slot
></span>`:k}
<div class="statContent">
<dl>
<dt part="label"><slot name="label">${this.label}</slot></dt>
<dd part="value"><slot name="value">${this.value}</slot></dd>
</dl>
${e?A`<p class="statDescription" part="description">
<slot name="description">${this.description}</slot>
</p>`:k}
</div>
</div>`}},I([j()],Br.prototype,`label`,void 0),I([j()],Br.prototype,`value`,void 0),I([j()],Br.prototype,`description`,void 0)})))()}var Hr,Ur,V;function Wr(){return(Wr=e((()=>{d(),_(),f(),It(),p(),b(),jt(),x(),bt(),Ie(),M(),D(),T(),Hr=(e,t)=>({iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,disabled:e,[t]:!0}),Ur=class e extends h{constructor(...e){super(...e),this.scrollState={overflow:!1,left:!1,right:!1,rtl:!1},this.aria=new u(this),this.locale=new S(this),this.slots=new pt(this),this.focused=null,this.previousItems=null,this.movedWith=null,this.mutations=null,this.resize=null,this.handleFocusIn=e=>{let t=e.target;this.focused=t instanceof V&&this.items.includes(t)?t:null},this.handleSelect=e=>{let t=e.target;t instanceof V&&this.items.includes(t)&&!e.defaultPrevented&&queueMicrotask(()=>{e.defaultPrevented||(this.activeValue=t.value)})},this.measure=()=>{let e=this.viewport;if(!e)return;let t=rn(this)===`rtl`,n=e.scrollWidth-e.clientWidth,r={overflow:e.scrollWidth>e.clientWidth+1,left:t?e.scrollLeft>-n+1:e.scrollLeft>1,right:t?e.scrollLeft<-1:e.scrollLeft<n-1,rtl:t},i=this.scrollState;(i.overflow!==r.overflow||i.left!==r.left||i.right!==r.right||i.rtl!==r.rtl)&&(this.scrollState=r)}}static{this.tagName=`minerva-page-tabs`}static{this.styles=[g,O`
:host{
display: block;
min-width: 0;
}
`,C(et),C(Ne)]}get items(){return Array.from(this.children).filter(e=>e instanceof V)}connectedCallback(){super.connectedCallback(),this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`minerva-select`,this.handleSelect),typeof MutationObserver<`u`&&(this.mutations=new MutationObserver(()=>this.itemsChanged()),this.mutations.observe(this,{childList:!0,attributes:!0,attributeFilter:[`value`,`active`,`disabled`],subtree:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`focusin`,this.handleFocusIn),this.removeEventListener(`minerva-select`,this.handleSelect),this.mutations?.disconnect(),this.mutations=null,this.resize?.disconnect(),this.resize=null}firstUpdated(){this.observeViewport()}reconnectedCallback(){super.reconnectedCallback(),this.observeViewport()}observeViewport(){this.resize||typeof ResizeObserver>`u`||(this.resize=new ResizeObserver(()=>this.revealActive()),this.resize.observe(this.viewport))}updated(t){y&&!this.aria.label&&m(e.tagName,`set aria-label (e.g. "Open pages") to name the navigation landmark.`),t.has(`activeValue`)&&this.itemsChanged();let n=this.movedWith;if(n){let e=n===`left`?this.leftButton:this.rightButton;if(e?.disabled){this.movedWith=null;let t=this.shadowRoot?.activeElement;(!t||t===e)&&(n===`left`?this.rightButton:this.leftButton)?.focus({preventScroll:!0})}}}itemsChanged(){let e=this.items;if(this.activeValue!==void 0)for(let t of e)t.active=t.value===this.activeValue;let t=JSON.stringify([this.activeValue,...e.map(e=>[e.value,e.active])]);t!==this.previousItems&&(this.previousItems=t,this.revealActive());let n=this.focused;if(n&&!n.isConnected){this.focused=null;let t=document.activeElement;(!t||t===document.body||!t.isConnected)&&e.find(e=>e.active)?.focus({preventScroll:!0})}}revealActive(){let e=this.viewport;if(!e)return;let t=this.items.find(e=>e.active),n=t?.surface;if(t&&!n&&t.updateComplete.then(()=>{t.surface&&this.revealActive()}),n){let t=e.getBoundingClientRect(),r=n.getBoundingClientRect();r.width>t.width?e.scrollLeft+=r.left-t.left:r.left<t.left?e.scrollLeft-=t.left-r.left:r.right>t.right&&(e.scrollLeft+=r.right-t.right)}this.measure()}move(e){let t=this.viewport;t&&(this.movedWith=e<0?`left`:`right`,t.scrollLeft+=e*Math.max(1,t.clientWidth*.8),this.measure())}renderScrollButton(e){let t=e===`left`,n=t?this.scrollLeftLabel??this.locale.t(`pageTabs.scrollLeft`):this.scrollRightLabel??this.locale.t(`pageTabs.scrollRight`),r=t?!this.scrollState.left:!this.scrollState.right;return A`<button
type="button"
part="scroll-button"
class=${F({...Hr(r,`scroll`),[`scroll-${e}`]:!0})}
aria-label=${n}
?disabled=${r}
tabindex=${r?-1:0}
@click=${()=>this.move(t?-1:1)}
>
${t?Fe:a}
</button>`}render(){let{overflow:e,rtl:t}=this.scrollState,n=()=>this.renderScrollButton(`left`),r=()=>this.renderScrollButton(`right`);return A`<nav
part="root"
class="pageTabs"
aria-label=${this.aria.label??k}
>
${e?t?r():n():k}
<div part="viewport" class="viewport" @scroll=${this.measure}>
<div part="list" class="list">
<slot @slotchange=${()=>this.itemsChanged()}></slot>
</div>
</div>
${e?t?n():r():k}
${this.slots.test(`actions`)?A`<div part="actions" class="actions">
<slot name="actions"></slot>
</div>`:k}
</nav>`}},I([j({reflect:!0,attribute:`active-value`})],Ur.prototype,`activeValue`,void 0),I([j({attribute:`scroll-left-label`})],Ur.prototype,`scrollLeftLabel`,void 0),I([j({attribute:`scroll-right-label`})],Ur.prototype,`scrollRightLabel`,void 0),I([w()],Ur.prototype,`scrollState`,void 0),I([E(`.viewport`)],Ur.prototype,`viewport`,void 0),I([E(`.scroll-left`)],Ur.prototype,`leftButton`,void 0),I([E(`.scroll-right`)],Ur.prototype,`rightButton`,void 0),V=class e extends h{constructor(...e){super(...e),this.value=``,this.label=``,this.active=!1,this.disabled=!1,this.closable=!1,this.locale=new S(this),this.slots=new pt(this)}static{this.tagName=`minerva-page-tab`}static{this.shadowRootOptions={...h.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[g,O`
:host{
display: contents;
}
.icon ::slotted(svg){
width: 16px;
height: 16px;
}
`,C(et),C(Ne)]}get surface(){return this.wrapper??null}focus(e){this.trigger?.focus(e)}handleSelect(){this.disabled||this.emit(`minerva-select`,{value:this.value},{cancelable:!0})}handleClose(){this.emit(`minerva-close`,{value:this.value})}hookStates(){return{current:this.active,disabled:this.disabled}}updated(){y&&!this.label&&m(e.tagName,`set label to name the page.`)}render(){return A`<div
part="root"
class="pageTab"
data-value=${this.value}
?data-active=${this.active}
?data-disabled=${this.disabled}
>
<button
type="button"
part="trigger"
class="trigger"
title=${this.label||k}
aria-current=${this.active?`page`:k}
?disabled=${this.disabled}
@click=${this.handleSelect}
>
${this.slots.test(`icon`)?A`<span part="icon" class="icon" aria-hidden="true"
><slot name="icon"></slot
></span>`:k}
<span part="label" class="label">${this.label}</span>
</button>
${this.closable||this.slots.test(`action`)?A`<span part="action" class="action"
><slot name="action"></slot>${this.closable?A`<button
type="button"
part="close-button"
class=${F(Hr(!1,`close`))}
aria-label=${this.closeLabel??this.locale.t(`pageTabs.close`,{label:this.label,defaultValue:`Close {{label}}`})}
@click=${this.handleClose}
>
${Re}
</button>`:k}</span
>`:k}
</div>`}},I([j({reflect:!0})],V.prototype,`value`,void 0),I([j()],V.prototype,`label`,void 0),I([j({type:Boolean,reflect:!0})],V.prototype,`active`,void 0),I([j({type:Boolean,reflect:!0})],V.prototype,`disabled`,void 0),I([j({type:Boolean,reflect:!0})],V.prototype,`closable`,void 0),I([j({attribute:`close-label`})],V.prototype,`closeLabel`,void 0),I([E(`.trigger`)],V.prototype,`trigger`,void 0),I([E(`.pageTab`)],V.prototype,`wrapper`,void 0)})))()}function Gr(e,t,n,r){let i=Hn(t).filter(t=>t===e||!r||!Fn(r,t)),a=i.indexOf(e);return a===-1?null:(n?i[a-1]:i[a+1])??null}var Kr,qr,H;function Jr(){return(Jr=e((()=>{d(),_(),It(),b(),x(),ir(),er(),dr(),Qn(),Zn(),ie(),se(),M(),D(),P(),Kr=10,qr=5,H=class e extends h{constructor(...e){super(...e),this.open=!1,this.modal=!1,this.side=`bottom`,this.align=`center`,this.sideOffset=6,this.alignOffset=0,this.collisionPadding=8,this.matchAnchorWidth=!1,this.arrow=!1,this.label=``,this.anchorElement=null,this.anchor=``,this.aria=new u(this),this.presence=new ue(this,()=>this.panel),this.modalController=new or(this),this.position=new sr(this,()=>({placement:Xt(this.side,this.align),offset:{mainAxis:this.sideOffset+(this.arrow?qr:0),crossAxis:this.alignOffset},matchAnchorWidth:this.matchAnchorWidth||!1,padding:this.collisionPadding,arrowElement:this.arrow?this.arrowEl??null:null,arrowSize:Kr,onPosition:e=>{let t=this.arrowEl;t&&(t.style.left=e.arrow.x==null?``:`${e.arrow.x}px`,t.style.top=e.arrow.y==null?``:`${e.arrow.y}px`)}})),this.layer=new tr(this,()=>({disableOutsidePointerEvents:this.modal,branches:()=>[this.triggerElement()],onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onFocusOutside:()=>(this.reason=`focus-outside`,!this.modal),onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.focusScope=new $n(this,()=>({trapped:this.modal,loop:this.modal,restoreFocus:this.triggerElement()??!0})),this.reason=`outside`,this.wasPresent=!1,this.handleClick=e=>{if(e.defaultPrevented)return;let t=e.composedPath(),n=this.triggerElement();if(n&&t.includes(n)){this.requestOpenChange(!this.open,`trigger`);return}let r=t.find(e=>e instanceof Element&&e.hasAttribute(`data-popover-close`));r&&this.contains(r)&&this.requestOpenChange(!1,`close-slot`)},this.handleKeyDown=e=>{let t=this.panel,n=this.triggerElement();if(this.modal||!t||!n||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey||e.defaultPrevented)return;let r=e.shiftKey,i=mn(document);if(!i||!Fn(t,i))return;let a=Hn(t);if(!(a.length===0||(r?i===t||i===a[0]:i===a[a.length-1])))return;e.preventDefault();let o=Gr(n,this.tabContainer(),r,this.positioner)??n;this.requestOpenChange(!1,`tab`),this.open||o.focus()}}static{this.tagName=`minerva-popover`}static{this.styles=[g,rr,O`
:host{
display: contents;
}
`,C(Pe)]}show(){this.open=!0}hide(){this.open=!1}toggle(){this.open=!this.open}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}anchorTarget(){if(this.anchorElement)return this.anchorElement;if(this.anchor){let e=this.getRootNode().getElementById?.(this.anchor);if(e)return e}return this.triggerElement()??this}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}tabContainer(){return nn().find(e=>e.element===this.positioner)?.parent??document.body}syncTrigger(){let e=this.triggerElement();e&&(e.setAttribute(`aria-haspopup`,`dialog`),e.setAttribute(`aria-expanded`,String(this.open)),e.setAttribute(`data-state`,this.open?`open`:`closed`))}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleClick),this.deactivate(),Rt(this.positioner)}willUpdate(e){e.has(`open`)&&this.presence.sync(this.open)}firstUpdated(){y&&!this.triggerElement()&&!this.anchor&&!this.anchorElement&&m(e.tagName,`no slot="trigger" element nor anchor: the panel is anchored to the element itself and nothing opens it.`)}deactivate(){this.focusScope.deactivate(),this.layer.deactivate(),this.modalController.deactivate()}updated(e){this.syncTrigger();let t=this.open||this.presence.present,n=this.positioner;if(t&&n&&!this.position.running){Ke(n);let e=this.anchorTarget();e&&this.position.start(e,n)}e.has(`open`)&&(this.open&&n?(this.modal&&this.modalController.activate(this),this.layer.activate(n),this.focusScope.activate(n),this.emit(`minerva-after-open`)):this.open||this.deactivate()),this.wasPresent&&!t&&(this.position.end(),Rt(n),this.emit(`minerva-after-close`)),this.wasPresent=t}hookStates(){let e=this.position.placement,{side:t,align:n}=Wt(e);return{state:this.open?`open`:`closed`,side:t,align:n,placement:e}}render(){if(!(this.open||this.presence.present))return A`<slot name="trigger"></slot>`;let{side:e,align:t}=Wt(this.position.placement),n=this.open?`open`:`closed`,r=this.label||this.aria.label,i=this.isConnected?rn(this):`ltr`;return A`<slot name="trigger"></slot>
<div
class="positioner"
popover="manual"
data-side=${e}
data-align=${t}
>
<div
part="content"
class="content"
role="dialog"
aria-modal=${this.modal?`true`:k}
aria-label=${r||k}
tabindex="-1"
dir=${i}
data-state=${n}
data-side=${e}
data-align=${t}
@keydown=${this.handleKeyDown}
>
<slot></slot>
${this.arrow?A`<span part="arrow" class="arrowWrapper" aria-hidden="true">
<svg
class="arrow"
width=${Kr}
height=${qr}
viewBox="0 0 30 10"
preserveAspectRatio="none"
>
<polygon points="0,0 30,0 15,10"></polygon>
</svg>
</span>`:k}
</div>
</div>`}},I([j({type:Boolean,reflect:!0})],H.prototype,`open`,void 0),I([j({type:Boolean,reflect:!0})],H.prototype,`modal`,void 0),I([j({reflect:!0})],H.prototype,`side`,void 0),I([j({reflect:!0})],H.prototype,`align`,void 0),I([j({type:Number,attribute:`side-offset`})],H.prototype,`sideOffset`,void 0),I([j({type:Number,attribute:`align-offset`})],H.prototype,`alignOffset`,void 0),I([j({type:Number,attribute:`collision-padding`})],H.prototype,`collisionPadding`,void 0),I([j({attribute:`match-anchor-width`})],H.prototype,`matchAnchorWidth`,void 0),I([j({type:Boolean,reflect:!0})],H.prototype,`arrow`,void 0),I([j()],H.prototype,`label`,void 0),I([j({attribute:!1})],H.prototype,`anchorElement`,void 0),I([j()],H.prototype,`anchor`,void 0),I([E(`.positioner`)],H.prototype,`positioner`,void 0),I([E(`.content`)],H.prototype,`panel`,void 0),I([E(`[part=arrow]`)],H.prototype,`arrowEl`,void 0)})))()}var Yr;function Xr(){return(Xr=e((()=>{Yr=`minerva-prose{min-width:0;max-width:100%;color:var(--text-color,#1f2937);font-family:var(--font-family-sans,system-ui, -apple-system, "Segoe UI", sans-serif);font-size:var(--prose-font-size,var(--font-size-lg,1rem));font-weight:var(--font-weight-regular,400);font-style:normal;line-height:var(--line-height-relaxed,1.7);letter-spacing:0;overflow-wrap:anywhere}minerva-prose :where(h1,h2,h3,h4,h5,h6){color:inherit;font-family:inherit;font-style:inherit;font-weight:var(--font-weight-semibold,600);letter-spacing:0;background:0 0;border:0;margin:1.5em 0 .5em;padding:0;line-height:1.35}minerva-prose :where(h1){font-size:var(--font-size-3xl,1.75rem)}minerva-prose :where(h2){font-size:var(--font-size-2xl,1.375rem)}minerva-prose :where(h3){font-size:var(--font-size-xl,1.125rem)}minerva-prose :where(h4){font-size:var(--font-size-lg,1rem)}minerva-prose :where(h5,h6){font-size:var(--font-size-md,.875rem)}minerva-prose :where(h6){color:var(--text-muted-color,#6b7280)}minerva-prose :where(p,ul,ol,li,blockquote){font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;line-height:inherit;letter-spacing:inherit}minerva-prose :where(p){background:0 0;border:0;padding:0}minerva-prose :where(p,ul,ol,blockquote,pre,table,figure){margin:1em 0}minerva-prose>:first-child{margin-top:0}minerva-prose>:last-child{margin-bottom:0}minerva-prose :where(ul,ol){padding:0;padding-inline-start:1.5em}minerva-prose :where(li){margin:.25em 0}minerva-prose :where(li>ul,li>ol,li>p){margin-block:.25em}minerva-prose :where(blockquote){border:0;border-inline-start:3px solid var(--prose-border-color,var(--border-color,#d9dde3));color:inherit;background:0 0;padding:.25em 1em}minerva-prose :where(a){color:var(--primary-color-text,#1e4fbd);text-underline-offset:.18em;text-decoration:underline;text-decoration-thickness:1px}minerva-prose :where(a:hover){text-decoration-thickness:2px}minerva-prose :where(a:focus-visible){outline:2px solid var(--primary-color,#2563eb);outline-offset:3px}minerva-prose :where(code,kbd,samp){font-family:var(--font-family-mono,ui-monospace, Menlo, Consolas, monospace);font-size:.875em}minerva-prose :where(code){border-radius:calc(var(--prose-radius,var(--radius-sm,4px)) - 1px);background:var(--prose-code-bg,var(--control-color,#f6f7f9));padding:.12em .3em}minerva-prose :where(pre){max-width:100%;padding:var(--space-4,1rem);border:1px solid var(--prose-border-color,var(--border-color,#d9dde3));border-radius:var(--prose-radius,var(--radius-sm,4px));background:var(--prose-pre-bg,var(--surface-elevated-color,#fff));color:var(--text-color,#1f2937);font-family:var(--font-family-mono,ui-monospace, Menlo, Consolas, monospace);line-height:var(--line-height-base,1.5);white-space:pre;overflow-wrap:normal;tab-size:2;overflow-x:auto}minerva-prose :where(pre code){color:inherit;white-space:pre;background:0 0;border:0;border-radius:0;padding:0}minerva-prose :where(pre:focus-visible){outline:2px solid var(--primary-color,#2563eb);outline-offset:2px}minerva-prose :where(.hljs-comment,.hljs-quote){color:var(--text-muted-color,#6b7280)}minerva-prose :where(.hljs-keyword,.hljs-selector-tag,.hljs-name,.hljs-tag,.hljs-attr,.hljs-attribute,.hljs-doctag){color:var(--primary-color-text,#1e4fbd)}minerva-prose :where(.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-regexp,.hljs-type,.hljs-literal){color:var(--success-color-text,#15803d)}minerva-prose :where(.hljs-number,.hljs-title,.hljs-section,.hljs-built_in,.hljs-meta,.hljs-variable){color:var(--warning-color-text,#b45309)}minerva-prose :where(.hljs-subst,.hljs-operator,.hljs-punctuation,.hljs-params){color:var(--text-color,#1f2937)}minerva-prose :where(.hljs-addition){background:var(--success-color-subtle,#e7f6ec);color:var(--success-color-text,#15803d)}minerva-prose :where(.hljs-deletion){background:var(--danger-color-subtle,#fcebeb);color:var(--danger-color-text,#b91c1c)}minerva-prose :where(.hljs-strong){font-weight:var(--font-weight-bold,700)}minerva-prose :where(.hljs-emphasis){font-style:italic}minerva-prose :where(mark){background:var(--warning-color-subtle,#fdf3e1);color:inherit}minerva-prose :where(img,video){max-width:100%;height:auto}minerva-prose :where(figure){max-width:100%}minerva-prose :where(figcaption){margin-top:var(--space-2,.5rem);font-size:var(--font-size-md,.875rem);color:var(--text-muted-color,#6b7280)}minerva-prose :where(table){border-collapse:collapse;width:100%;color:inherit;overflow-wrap:normal;display:table}minerva-prose :where(tr){background:0 0;border:0}minerva-prose :where(th,td){border:1px solid var(--prose-border-color,var(--border-color,#d9dde3));text-align:start;vertical-align:top;white-space:normal;padding:.5em .75em}minerva-prose :where(th){background:var(--prose-code-bg,var(--control-color,#f6f7f9));font-weight:var(--font-weight-semibold,600)}minerva-prose :where(th>p,td>p){margin:0}minerva-prose :where(hr){border:0;border-top:1px solid var(--prose-border-color,var(--border-color,#d9dde3));background:0 0;height:0;margin:1.5em 0;padding:0}minerva-prose :where(sub,sup){font-size:.75em;line-height:0}@media print{minerva-prose :where(pre){overflow:visible}minerva-prose :where(pre,pre code){white-space:pre-wrap;overflow-wrap:anywhere}minerva-prose :where(pre,blockquote,figure,img,tr){break-inside:avoid}}`})))()}function Zr(){if(ti!==void 0)return ti;ti=null;try{if(typeof CSSStyleSheet<`u`&&`replaceSync`in CSSStyleSheet.prototype){let e=new CSSStyleSheet;e.replaceSync(Yr),ti=e}}catch{ti=null}return ti}function Qr(e){if(ei.has(e))return;ei.add(e);let t=Zr();if(t&&`adoptedStyleSheets`in e)try{e.adoptedStyleSheets=[...e.adoptedStyleSheets,t];return}catch{}let n=e.nodeType===9?e:e.ownerDocument;if(!n)return;let r=e.nodeType===9?n.head??n.documentElement:e;if(r.querySelector?.(`#${$r}`))return;let i=n.createElement(`style`);i.id=$r,i.textContent=Yr,r.appendChild(i)}var $r,ei,ti,ni;function ri(){return(ri=e((()=>{b(),Xr(),M(),$r=`minerva-prose-styles`,ei=new WeakSet,ni=class extends h{static{this.tagName=`minerva-prose`}static{this.styles=[g,O`
:host{
display: block;
}
`]}connectedCallback(){super.connectedCallback();let e=this.getRootNode();(e.nodeType===9||e.nodeType===11)&&Qr(e)}render(){return A`<slot></slot>`}}})))()}var ii,U,ai;function oi(){return(oi=e((()=>{dt(),d(),_(),f(),It(),p(),ht(),b(),jt(),x(),At(),i(),ur(),M(),D(),T(),ii=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Home`,`End`]),U=class extends h{constructor(...e){super(...e),this.hostInternals=it(this),this.ownedAria=new Set,this.value=``,this.checked=!1,this.disabled=!1,this.label=``,this.size=`medium`,this.color=`primary`,this.error=!1,this.helperText=``,this.errorMessage=``,this.slots=new pt(this),this.ownsDescription=!1,this.handleClick=e=>{if(this.isDisabled){e.preventDefault(),e.stopImmediatePropagation();return}this.group||this.checked||(this.checked=!0,this.emit(`minerva-change`,{checked:!0,value:this.value}))},this.handleKeyDown=e=>{e.key===` `&&(e.preventDefault(),this.isDisabled||this.click())}}static{this.tagName=`minerva-radio`}static{this.styles=[g,O`
:host{
display: inline-flex;
outline: none;
vertical-align: middle;
}
.input{
pointer-events: none;
}
:host(:focus-visible) .radioMark{
box-shadow: 0 0 0 3px var(--focus-ring-color);
}
@media (forced-colors: active){
:host(:focus-visible) .radioMark{
outline: 2px solid Highlight;
outline-offset: 2px;
}
}
`,C(Bt)]}get group(){let e=this.parentElement?.closest(`minerva-radio-group`);return e instanceof ai?e:null}get isDisabled(){return this.disabled||!!this.group?.isDisabled}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleClick),this.addEventListener(`keydown`,this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleClick),this.removeEventListener(`keydown`,this.handleKeyDown)}updated(){let e=this.isDisabled;Pt(this,this.hostInternals,{role:`radio`,ariaChecked:String(this.checked),ariaDisabled:e?`true`:null},this.ownedAria),this.group||r(this,`tabindex`,e?`-1`:`0`);let t=this.error?this.errorMessage:this.helperText;t&&(this.ownsDescription||!this.hasAttribute(`aria-description`))?(this.ownsDescription=!0,r(this,`aria-description`,t)):!t&&this.ownsDescription&&(this.ownsDescription=!1,r(this,`aria-description`,null))}hookStates(){let e=this.group;return{state:this.checked?`checked`:`unchecked`,disabled:this.isDisabled,invalid:this.error,size:e?.size??this.size,color:e?.color??this.color}}render(){let e=this.group,t=e?.size??this.size,n=e?.color??this.color,r=this.error?this.errorMessage:this.helperText,i=!!this.label||this.slots.test(`[default]`);return A`<div
part="root"
class=${F({radioWrapper:!0,[t]:!0,[n]:!0,error:this.error})}
>
<span class=${F({radio:!0,disabled:this.isDisabled})}>
<input
type="radio"
class="input"
tabindex="-1"
aria-hidden="true"
inert
.checked=${this.checked}
/>
<span class="radioMark" part="control"></span>
${i?A`<span class="label" part="label"
>${this.label||A`<slot></slot>`}</span
>`:k}
</span>
${r?A`<div class="helperTextWrapper" aria-hidden="true">
${this.error&&this.errorMessage?A`<span class="errorIcon">${ve}</span>`:k}
<span
part="helper-text"
class=${F({helperText:!0,errorText:this.error})}
>${r}</span
>
</div>`:k}
</div>`}},I([j()],U.prototype,`value`,void 0),I([j({type:Boolean,reflect:!0})],U.prototype,`checked`,void 0),I([j({type:Boolean,reflect:!0})],U.prototype,`disabled`,void 0),I([j()],U.prototype,`label`,void 0),I([j({reflect:!0})],U.prototype,`size`,void 0),I([j({reflect:!0})],U.prototype,`color`,void 0),I([j({type:Boolean,reflect:!0})],U.prototype,`error`,void 0),I([j({attribute:`helper-text`})],U.prototype,`helperText`,void 0),I([j({attribute:`error-message`})],U.prototype,`errorMessage`,void 0),ai=class e extends v{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.label=``,this.helperText=``,this.error=!1,this.direction=`vertical`,this.locale=new S(this),this.aria=new u(this,()=>this.labels),this.roving=new ar(this,()=>({getItems:()=>this.radios,isItemDisabled:e=>this.isDisabled||e.disabled,orientation:`both`,dir:rn(this),loop:!0})),this.observer=null,this.dirty=!1,this.rovingAttached=!1,this.settleQueued=!1,this.handleClick=e=>{let t=e.target?.closest?.(`minerva-radio`);t instanceof U&&t.group===this&&this.select(t)},this.handleKeyDown=e=>{if(!e.defaultPrevented||!ii.has(e.key))return;let t=this.roving.getActive();t instanceof U&&this.select(t)}}static{this.tagName=`minerva-radio-group`}static{this.dependencies=[U]}static{this.styles=[g,O`
:host{
display: block;
}
`,C(Bt)]}get radios(){return Array.from(this.querySelectorAll(`minerva-radio`)).filter(e=>e instanceof U&&e.group===this)}focus(e){let t=this.radios;(t.find(e=>e.checked&&!e.disabled)??t.find(e=>!e.disabled))?.focus(e)}connectedCallback(){super.connectedCallback(),ee(this)||this.attachRoving(),this.addEventListener(`click`,this.handleClick),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.requestUpdate()),this.observer.observe(this,{childList:!0,subtree:!0}))}attachRoving(){this.rovingAttached||(this.rovingAttached=!0,this.roving.attach(this),this.addEventListener(`keydown`,this.handleKeyDown))}disconnectedCallback(){super.disconnectedCallback(),this.rovingAttached=!1,this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`click`,this.handleClick),this.observer?.disconnect(),this.observer=null}getFormValue(){return this.value===``?null:this.value}getValidity(){return this.required&&this.value===``?{flags:{valueMissing:!0},message:this.locale.t(`validation.radioMissing`),anchor:this.radios.find(e=>!e.disabled)??null}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`?this.value=e:e===null&&(this.value=``)}willUpdate(e){e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue)}updated(t){super.updated(t);let n=this.radios,r;for(let e of n)e.checked=this.value!==``&&e.value===this.value,e.checked&&(r??=e),e.requestUpdate();this.syncRoving(n,r),y&&this.value!==``&&n.length>0&&!r&&m(e.tagName,`value "${this.value}" matches no <minerva-radio> of the group.`)}syncRoving(e,t){let n=[this,...e].find(ee);if(n){this.settleQueued||(this.settleQueued=!0,Se(n,()=>{this.settleQueued=!1,this.requestUpdate()}));return}this.attachRoving(),t&&!t.disabled&&!this.isDisabled?this.roving.setActive(t,{focus:!1}):this.roving.refresh();for(let t of e)(this.isDisabled||t.disabled)&&t.setAttribute(`tabindex`,`-1`)}select(e){this.isDisabled||e.disabled||e.value===this.value||(this.dirty=!0,this.value=e.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value}))}hookStates(){return{disabled:this.isDisabled,invalid:this.error||this.aria.attr(`aria-invalid`)===`true`,required:this.required,orientation:this.direction,size:this.size,color:this.color}}render(){let e=this.error||this.aria.attr(`aria-invalid`)===`true`,t=this.label,n=[this.helperText,this.aria.description].filter(Boolean).join(` `);return A`<div
part="root"
class=${F({radioGroupWrapper:!0,error:e})}
>
${t?A`<div id="label" part="label" class="groupLabel">${t}</div>`:k}
<div
part="list"
class=${F({radioGroup:!0,[this.direction]:!0})}
role="radiogroup"
aria-labelledby=${t?`label`:k}
aria-label=${t?k:this.aria.label??k}
aria-description=${n||k}
aria-required=${this.required?`true`:`false`}
aria-invalid=${e?`true`:`false`}
aria-disabled=${this.isDisabled?`true`:k}
>
<slot></slot>
</div>
${this.helperText?A`<div
part="helper-text"
aria-hidden="true"
class=${F({helperText:!0,errorText:e})}
>
${this.helperText}
</div>`:k}
</div>`}},I([j({attribute:!1})],ai.prototype,`value`,void 0),I([j({attribute:`value`})],ai.prototype,`defaultValue`,void 0),I([j()],ai.prototype,`label`,void 0),I([j({attribute:`helper-text`})],ai.prototype,`helperText`,void 0),I([j({type:Boolean,reflect:!0})],ai.prototype,`error`,void 0),I([j({reflect:!0})],ai.prototype,`direction`,void 0),I([j({reflect:!0})],ai.prototype,`size`,void 0),I([j({reflect:!0})],ai.prototype,`color`,void 0)})))()}var si,ci,li,ui,W,di;function fi(){return(fi=e((()=>{d(),_(),f(),p(),b(),x(),At(),Oe(),M(),D(),T(),hn(),P(),si={small:12,medium:16,large:20},ci=[0,1,2,3,4],li=Math.max(1,Math.round(ci.length/5)),ui=O`
.star svg{
display: block;
width: 100%;
height: 100%;
stroke-width: 1.5;
}
.full svg,
.halfFill svg{
fill: currentColor;
}
`,W=class e extends v{constructor(...e){super(...e),this.value=0,this.defaultValue=0,this.max=10,this.size=`medium`,this.showValue=!1,this.interactive=!1,this.readOnly=!1,this.hoverIndex=null,this.locale=new S(this),this.aria=new u(this,()=>this.labels),this.dirty=!1}static{this.tagName=`minerva-rating`}static{this.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[g,O`
:host{
display: inline-flex;
vertical-align: middle;
}
`,C(he),ui]}get isInteractive(){return this.interactive&&!this.readOnly&&!this.isDisabled}focus(e){this.root?.focus(e)}blur(){this.root?.blur()}getFormValue(){return String(this.value)}getValidity(){return this.required&&!(this.value>0)?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.root}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){if(typeof e==`string`&&e.trim()!==``){let t=Number(e);Number.isFinite(t)&&(this.value=t)}}willUpdate(t){t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),y&&(t.has(`value`)||t.has(`max`))&&(this.value<0||this.value>this.max)&&m(e.tagName,`value (${this.value}) is outside 0..max (${this.max}).`)}commit(e){e!==this.value&&(this.dirty=!0,this.value=e,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e}))}handleStarClick(e,t){if(!this.isInteractive)return;let n=e.currentTarget.getBoundingClientRect(),r=t+(e.clientX-n.left<n.width/2?.5:1);this.commit(_n(r/5*this.max))}handleKeyDown(e){if(e.defaultPrevented||!this.isInteractive)return;let{max:t,value:n}=this,r=t/(ci.length*2),i=t/ci.length*li,a=xn(e.key,this),o;switch(a){case`ArrowRight`:case`ArrowUp`:o=Math.min(t,_n(n+r));break;case`ArrowLeft`:case`ArrowDown`:o=Math.max(0,_n(n-r));break;case`PageUp`:o=Math.min(t,_n(n+i));break;case`PageDown`:o=Math.max(0,_n(n-i));break;case`Home`:o=0;break;case`End`:o=t;break;default:return}e.preventDefault(),this.commit(o)}hookStates(){return{readonly:!this.isInteractive,size:this.size}}renderStar(e,t){let n=N({width:`${t}px`,height:`${t}px`,fontSize:`${t}px`});return e===`half`?A`<span part="star" class="star half" style=${n}
><span class="halfBase">${c}</span
><span class="halfFill">${Ae}</span></span
>`:A`<span
part="star"
class=${F({star:!0,[e]:!0})}
style=${n}
>${c}</span
>`}render(){let e=this.isInteractive,{value:t,max:n}=this,r=e&&this.hoverIndex!==null?this.hoverIndex:wn(t,n),i=e=>Ut(e,r),a=si[this.size]??si.medium,o=this.aria.label??`${t.toFixed(1)} / ${n}`,s=A`<span class="stars" part="stars" aria-hidden="true">
${ci.map(t=>e?A`<button
type="button"
tabindex="-1"
class="starButton"
@click=${e=>this.handleStarClick(e,t)}
@mouseenter=${()=>this.hoverIndex=t+1}
>
${this.renderStar(i(t),a)}
</button>`:this.renderStar(i(t),a))}
</span>`,c=this.showValue?A`<span class="value" part="value"
><strong>${t.toFixed(1)}</strong>${this.ratingCount===void 0?k:A`<span class="count" part="count"
>(${this.ratingCount.toLocaleString(`en-US`)})</span
>`}</span
>`:k,l=F({rating:!0,[this.size]:!0,interactive:e});return e?A`<span
part="root"
class=${l}
role="slider"
tabindex="0"
aria-label=${o}
aria-description=${this.aria.description??k}
aria-valuenow=${t}
aria-valuemin="0"
aria-valuemax=${n}
aria-required=${this.required?`true`:k}
@keydown=${this.handleKeyDown}
@mouseleave=${()=>this.hoverIndex=null}
>${s}${c}</span
>`:A`<span
part="root"
class=${l}
role="img"
aria-label=${o}
aria-description=${this.aria.description??k}
aria-disabled=${this.isDisabled?`true`:k}
>${s}${c}</span
>`}},I([j({attribute:!1})],W.prototype,`value`,void 0),I([j({type:Number,attribute:`value`})],W.prototype,`defaultValue`,void 0),I([j({type:Number})],W.prototype,`max`,void 0),I([j({reflect:!0})],W.prototype,`size`,void 0),I([j({type:Boolean,attribute:`show-value`})],W.prototype,`showValue`,void 0),I([j({type:Number,attribute:`rating-count`})],W.prototype,`ratingCount`,void 0),I([j({type:Boolean,reflect:!0})],W.prototype,`interactive`,void 0),I([j({type:Boolean,reflect:!0,attribute:`readonly`})],W.prototype,`readOnly`,void 0),I([w()],W.prototype,`hoverIndex`,void 0),I([E(`.rating`)],W.prototype,`root`,void 0),di=class extends h{constructor(...e){super(...e),this.dimensions=[],this.max=10,this.size=`medium`,this.interactive=!1,this.readOnly=!1,this.hideValue=!1}static{this.tagName=`minerva-rating-scale`}static{this.dependencies=[W]}static{this.styles=[g,O`
:host{
display: block;
}
`,C(he)]}handleChange(e,t){e.stopPropagation();let{value:n}=e.detail;this.dimensions=this.dimensions.map(e=>e.key===t?{...e,value:n}:e),this.emit(`minerva-change`,{key:t,value:n,dimensions:this.dimensions})}hookStates(){return{readonly:!this.interactive||this.readOnly,size:this.size}}render(){return A`<div class="scale" part="root">
${this.dimensions.map(e=>A`<div class="scaleRow" part="row" title=${e.hint??k}>
<span class="scaleLabel" part="label">${e.label}</span>
<minerva-rating
.value=${e.value}
.max=${this.max}
.size=${this.size}
?show-value=${!this.hideValue}
?interactive=${this.interactive}
?readonly=${this.readOnly}
aria-label=${`${e.label} ${e.value.toFixed(1)} / ${this.max}`}
@minerva-change=${t=>this.handleChange(t,e.key)}
></minerva-rating>
</div>`)}
</div>`}},I([j({attribute:!1})],di.prototype,`dimensions`,void 0),I([j({type:Number})],di.prototype,`max`,void 0),I([j({reflect:!0})],di.prototype,`size`,void 0),I([j({type:Boolean,reflect:!0})],di.prototype,`interactive`,void 0),I([j({type:Boolean,reflect:!0,attribute:`readonly`})],di.prototype,`readOnly`,void 0),I([j({type:Boolean,attribute:`hide-value`})],di.prototype,`hideValue`,void 0)})))()}var pi,mi,hi,gi,_i;function vi(){return(vi=e((()=>{dt(),d(),_(),f(),ht(),b(),x(),le(),M(),D(),pi=0,mi=class e extends h{constructor(...e){super(...e),this.internals=it(this),this.ownedAria=new Set,this.value=``,this.disabled=!1,this.label=``,this.selected=!1,this.highlighted=!1}static{this.tagName=`minerva-option`}static{this.styles=[g,O`
:host{
display: block;
outline: none;
}
`,C(re)]}get text(){return this.textValue??(this.label||this.textContent?.trim()||``)}get displayLabel(){return this.label||this.textContent?.trim()||``}connectedCallback(){super.connectedCallback(),Pt(this,this.internals,{role:`option`},this.ownedAria)}updated(t){super.updated(t),Pt(this,this.internals,{ariaSelected:String(this.selected),ariaDisabled:this.disabled?`true`:null},this.ownedAria),r(this,`data-highlighted`,this.highlighted),r(this,`data-disabled`,this.disabled),r(this,`data-state`,this.selected?`checked`:null),y&&t.has(`value`)&&this.value===``&&this.isConnected&&m(e.tagName,`an option needs a non-empty "value" (the empty value means "nothing selected").`)}hookStates(){return{state:this.selected?`checked`:`unchecked`,highlighted:this.highlighted,disabled:this.disabled}}render(){return A`<div
part="root"
class="item"
data-state=${this.selected?`checked`:`unchecked`}
?data-highlighted=${this.highlighted}
?data-disabled=${this.disabled}
>
<span class="itemText" part="label"><slot></slot></span>
${this.selected?A`<span class="itemIndicator" part="indicator" aria-hidden="true"
>${ce}</span
>`:k}
</div>`}},I([j({reflect:!0})],mi.prototype,`value`,void 0),I([j({type:Boolean,reflect:!0})],mi.prototype,`disabled`,void 0),I([j()],mi.prototype,`label`,void 0),I([j({attribute:`text-value`})],mi.prototype,`textValue`,void 0),I([j({type:Boolean,attribute:!1})],mi.prototype,`selected`,void 0),I([j({type:Boolean,attribute:!1})],mi.prototype,`highlighted`,void 0),hi=class extends h{constructor(...e){super(...e),this.internals=it(this),this.observer=null}static{this.tagName=`minerva-option-group`}static{this.styles=[g,O`
:host{
display: block;
}
`]}connectedCallback(){super.connectedCallback(),Pt(this,this.internals,{role:`group`}),this.syncLabel(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.syncLabel()),this.observer.observe(this,{childList:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null}syncLabel(){let e=this.querySelector(`:scope > minerva-select-label`);if(e){let t=ct(e,`id`);t||(t=`minerva-select-label-${pi++}`,r(e,`id`,t,this)),r(this,`aria-labelledby`,t)}else r(this,`aria-labelledby`,null)}render(){return A`<div part="root"><slot></slot></div>`}},gi=class extends h{static{this.tagName=`minerva-select-label`}static{this.styles=[g,O`
:host{
display: block;
}
`,C(re)]}render(){return A`<div class="label" part="root"><slot></slot></div>`}},_i=class extends h{constructor(...e){super(...e),this.internals=it(this)}static{this.tagName=`minerva-select-separator`}static{this.styles=[g,O`
:host{
display: block;
}
`,C(re)]}connectedCallback(){super.connectedCallback(),Pt(this,this.internals,{ariaHidden:`true`})}render(){return A`<div class="separator" part="root"></div>`}}})))()}var yi,bi,xi,Si,Ci,G;function wi(){return(wi=e((()=>{d(),_(),f(),p(),b(),x(),Qn(),At(),le(),vi(),M(),D(),T(),P(),yi=10,bi=e=>Array.isArray(e.options),xi=e=>e.getAttribute(`aria-disabled`)===`true`,Si=e=>e instanceof mi?e.value:e.dataset.value??``,Ci=e=>e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey,G=class e extends v{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.options=[],this.open=!1,this.placeholder=``,this.size=`medium`,this.invalid=!1,this.highlighted=null,this.locale=new S(this),this.aria=new u(this,()=>this.labels),this.typeahead=On(),this.floating=new lr(this,()=>({anchor:()=>this.trigger,floating:()=>this.positioner,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,fitViewportHeight:!0,branches:()=>[this.trigger],onDismiss:()=>this.requestOpen(!1),returnFocusOnEscape:()=>this.trigger,focusable:!0,onPosition:()=>this.syncHookStates()})),this.openIntent=`selected`,this.scrollPending=!1,this.dirty=!1,this.observer=null}static{this.tagName=`minerva-select`}static{this.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[g,rr,O`
:host{
display: inline-flex;
width: 100%;
min-width: 0;
vertical-align: middle;
}
`,C(re)]}focus(e){this.trigger?.focus(e)}blur(){this.trigger?.blur()}show(){this.open=!0}hide(){this.open=!1}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.requestUpdate()),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:[`value`,`disabled`,`label`,`text-value`]}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.typeahead.reset()}get lightOptions(){return Array.from(this.querySelectorAll(`minerva-option`)).filter(e=>e instanceof mi)}get dataOptions(){return(this.options??[]).flatMap(e=>bi(e)?e.options:[e])}get items(){return[...this.dataOptions.map(e=>({value:e.value,disabled:!!e.disabled,text:e.textValue??e.label,label:e.label})),...this.lightOptions.map(e=>({value:e.value,disabled:e.disabled,text:e.text,label:e.displayLabel}))]}getOptions(){let e=this.listbox;return e?[...Array.from(e.querySelectorAll(`[role=option]`)),...this.lightOptions]:[]}findOption(e){if(e!==null)return this.getOptions().find(t=>Si(t)===e)}getFormValue(){return this.value}getValidity(){return this.required&&this.value===``?{flags:{valueMissing:!0},message:this.locale.t(`validation.selectMissing`),anchor:this.trigger}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}requestOpen(e){e!==this.open&&(e&&this.isDisabled||this.emit(`minerva-open-change`,{open:e},{cancelable:!0})&&(this.open=e))}openWith(e){this.openIntent=e,this.requestOpen(!0)}close(e){e&&this.trigger?.focus(),this.requestOpen(!1)}commitValue(e){e!==this.value&&(this.value=e,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e}))}selectValue(e){this.commitValue(e),this.close(!0)}willUpdate(e){if(e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),e.has(`open`)&&this.open){let e=this.openIntent;this.openIntent=`selected`;let t=this.items.filter(e=>!e.disabled),n=e===`last`?t[t.length-1]:e===`first`?t[0]:t.find(e=>e.value===this.value)??t[0];this.typeahead.reset(),this.scrollPending=!0,this.highlighted=n?.value??null}e.has(`open`)&&!this.open&&(this.highlighted=null)}hookStates(){let e=this.open&&this.floating.isOpen?this.floating.position.placement:void 0,{side:t,align:n}=e?Wt(e):{side:void 0,align:void 0};return{state:this.open?`open`:`closed`,disabled:this.isDisabled,invalid:this.invalid,required:this.required,size:this.size,side:t,align:n,placement:e}}updated(e){super.updated(e);for(let e of this.lightOptions)e.selected=e.value===this.value,e.highlighted=this.open&&e.value===this.highlighted;if(this.floating.sync(this.open),this.open&&this.listbox){if(e.has(`open`)||e.has(`highlighted`)){let e=this.findOption(this.highlighted)??this.listbox;e.getRootNode()===this.shadowRoot?this.shadowRoot?.activeElement!==e&&e.focus({preventScroll:!0}):document.activeElement!==e&&(e.hasAttribute(`tabindex`)||(e.tabIndex=-1),e.focus({preventScroll:!0}))}this.scrollPending&&(this.scrollPending=!1,this.findOption(this.highlighted)?.scrollIntoView?.({block:`nearest`}))}y&&this.checkOptions()}checkOptions(){let t=this.items;if(t.length===0)return;let n=new Set;for(let r of t)n.has(r.value)&&m(e.tagName,`several options have the value "${r.value}"; option values must be unique.`),n.add(r.value);this.value!==``&&!n.has(this.value)&&m(e.tagName,`value "${this.value}" does not match any option.`)}handleTriggerKeyDown(e){if(this.open)return;let{key:t}=e;if(Ci(e)&&(t!==` `||this.typeahead.getBuffer()!==``)){let n=this.items,r=this.typeahead.search(t,n,n.findIndex(e=>e.value===this.value));e.preventDefault(),r!==-1&&this.commitValue(n[r].value);return}let n={Enter:`selected`," ":`selected`,ArrowDown:`selected`,ArrowUp:this.value===``?`last`:`selected`,Home:`first`,End:`last`};t in n&&(e.preventDefault(),this.openWith(n[t]))}handleListboxKeyDown(e){let{key:t}=e;if(t===`Tab`){this.close(!0);return}let n=this.getOptions(),r=n.findIndex(e=>Si(e)===this.highlighted),i=r===-1?void 0:n[r],a=()=>{i&&!xi(i)&&this.selectValue(Si(i))};if(t===`Enter`||t===`ArrowUp`&&e.altKey){e.preventDefault(),a();return}if(t===` `&&this.typeahead.getBuffer()===``){e.preventDefault(),a();return}if(e.ctrlKey||e.metaKey||e.altKey)return;let o=Tn({currentIndex:r,count:n.length,key:t,loop:!1,isDisabled:e=>xi(n[e]),pageSize:yi});if((o!==null||t.startsWith(`Arrow`)||t.startsWith(`Page`))&&e.preventDefault(),o===null&&Ci(e)){let i=this.typeahead.search(t,n.map(e=>({text:e instanceof mi?e.text:e.dataset.textValue??e.textContent??``,disabled:xi(e)})),r);i!==-1&&(e.preventDefault(),this.scrollPending=!0,this.highlighted=Si(n[i]));return}o!==null&&(this.typeahead.reset(),this.scrollPending=!0,this.highlighted=Si(n[o]))}optionFromEvent(e){let t=this.getOptions();return e.composedPath().find(e=>t.includes(e))}handleListboxPointerMove(e){let t=this.optionFromEvent(e);if(!t||xi(t))return;let n=Si(t);this.highlighted!==n&&(this.scrollPending=!1,this.highlighted=n)}handleListboxClick(e){let t=this.optionFromEvent(e);t&&!xi(t)&&this.selectValue(Si(t))}renderDataOption(e){let t=e.value===this.value;return A`<div
part="item"
class="item"
role="option"
tabindex="-1"
aria-selected=${String(t)}
aria-disabled=${e.disabled?`true`:k}
data-state=${t?`checked`:`unchecked`}
?data-highlighted=${this.highlighted===e.value}
?data-disabled=${!!e.disabled}
data-value=${e.value}
data-text-value=${e.textValue??k}
>
<span class="itemText">${e.label}</span>
${t?A`<span class="itemIndicator" aria-hidden="true"
>${ce}</span
>`:k}
</div>`}renderDataOptions(){return(this.options??[]).map((e,t)=>{if(!bi(e))return this.renderDataOption(e);let n=`group-label-${t}`;return A`<div role="group" aria-labelledby=${n}>
<div id=${n} class="label" part="group-label">${e.label}</div>
${e.options.map(e=>this.renderDataOption(e))}
</div>`})}render(){let e=this.isDisabled,t=this.value===``,n=t?void 0:this.items.find(e=>e.value===this.value),r=this.aria.label,{side:i,align:a}=Wt(this.floating.position.placement);return A`<button
part="root"
type="button"
role="combobox"
aria-haspopup="listbox"
aria-expanded=${String(this.open)}
aria-controls=${this.open?`listbox`:k}
aria-autocomplete="none"
aria-label=${r??k}
aria-description=${this.aria.description??k}
aria-required=${this.required?`true`:k}
aria-invalid=${this.invalid||this.aria.attr(`aria-invalid`)===`true`?`true`:k}
?disabled=${e}
data-state=${this.open?`open`:`closed`}
?data-placeholder=${t}
data-component="select"
class=${F({trigger:!0,[this.size]:!0,invalid:this.invalid})}
@click=${()=>this.requestOpen(!this.open)}
@keydown=${this.handleTriggerKeyDown}
@keyup=${e=>{e.key===` `&&e.preventDefault()}}
>
<span class="value" part="value"
><span
>${t?this.placeholder:n?.label??this.value}</span
></span
>
<span class="icon" part="icon" aria-hidden="true"
>${Vt}</span
>
</button>
${this.open?A`<div class="positioner" popover="manual" data-side=${i}>
<div
id="listbox"
part="content"
role="listbox"
tabindex="-1"
aria-label=${r??k}
data-state="open"
data-side=${i}
data-align=${a}
class="content"
@keydown=${this.handleListboxKeyDown}
@pointermove=${this.handleListboxPointerMove}
@click=${this.handleListboxClick}
>
${this.renderDataOptions()}
<slot></slot>
</div>
</div>`:k}`}},I([j({attribute:!1})],G.prototype,`value`,void 0),I([j({attribute:`value`})],G.prototype,`defaultValue`,void 0),I([j({attribute:!1})],G.prototype,`options`,void 0),I([j({type:Boolean,reflect:!0})],G.prototype,`open`,void 0),I([j()],G.prototype,`placeholder`,void 0),I([j({reflect:!0})],G.prototype,`size`,void 0),I([j({type:Boolean,reflect:!0})],G.prototype,`invalid`,void 0),I([w()],G.prototype,`highlighted`,void 0),I([E(`.trigger`)],G.prototype,`trigger`,void 0),I([E(`.positioner`)],G.prototype,`positioner`,void 0),I([E(`[role=listbox]`)],G.prototype,`listbox`,void 0)})))()}var Ti,Ei,Di,K,Oi;function ki(){return(ki=e((()=>{d(),_(),p(),b(),x(),Ce(),M(),D(),T(),hn(),Ti=e=>e==null||e===``?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,Ei=e=>typeof e!=`number`&&!/^\d+(\.\d+)?$/.test(e)?e:`var(--space-${String(e).replace(`.`,`-`)})`,Di=[g,O`

:host(:dir(rtl)) .animation-wave{
animation-direction: reverse;
}
`],K=class e extends h{constructor(...e){super(...e),this.variant=`text`,this.animation=`pulse`,this.loaded=!1,this.decorative=!1,this.lines=1,this.avatar=!1,this.avatarSize=`40`,this.avatarShape=`circle`,this.active=!1,this.paragraph=!1,this.heading=!1,this.locale=new S(this),this.aria=new u(this)}static{this.tagName=`minerva-skeleton`}static{this.styles=[...Di,O`
:host{
display: block;
}
:host([decorative][variant="circular"]){
display: inline-block;
vertical-align: middle;
}
`,C(ye)]}hookStates(){return{variant:this.variant}}updated(t){y&&t.has(`lines`)&&!(Number.isInteger(this.lines)&&this.lines>=0)&&m(e.tagName,`lines must be a non-negative integer (got ${this.lines}).`)}block(e,t,n={}){return A`<div
part=${e}
class=${F({skeleton:!0,[`animation-${this.animation}`]:!0,...t})}
style=${N(n)}
></div>`}renderAvatar(){if(!this.avatar)return k;let e=Ti(this.avatarSize);return this.block(`avatar`,{avatar:!0,[`avatar-${this.avatarShape}`]:!0},{width:e,height:e})}renderTitle(){return this.heading?this.block(`title`,{title:!0}):k}renderParagraph(){return this.paragraph?A`<div class="paragraph">
${[`100%`,`100%`,`92%`,`60%`].map(e=>this.block(`line`,{},{width:e,height:`16px`}))}
</div>`:k}renderLines(){if(this.paragraph||this.heading)return k;let e=Number.isFinite(this.lines)?Math.max(0,Math.floor(this.lines)):0;return Array.from({length:e},()=>this.block(`line`,{[this.variant]:!0},{width:Ti(this.width),height:Ti(this.height),borderRadius:Ti(this.borderRadius)}))}render(){if(this.loaded)return A`<slot></slot>`;if(this.decorative){let e=this.variant===`circular`?Ti(this.size??this.width??`32`):void 0;return A`<span
part="root"
aria-hidden="true"
class=${F({skeleton:!0,decorative:!0,[this.variant]:!0,[`animation-${this.animation}`]:!0})}
style=${N({width:e??Ti(this.width),height:e??Ti(this.height),borderRadius:Ti(this.borderRadius)})}
></span>`}let e=this.variant===`card`?A`<div class=${F({card:!0,active:this.active})}>
${this.renderAvatar()}
<div class="cardContent">
${this.renderTitle()} ${this.renderParagraph()}
</div>
</div>`:A`${this.renderAvatar()}
<div class="content">
${this.renderTitle()} ${this.renderLines()}
${this.renderParagraph()}
</div>`;return A`<div
part="root"
role="status"
aria-busy="true"
aria-label=${this.aria.label??this.locale.t(`common.loading`)}
class=${F({skeletonRoot:!0,withAvatar:this.avatar})}
>
${e}
</div>`}},I([j({reflect:!0})],K.prototype,`variant`,void 0),I([j({reflect:!0})],K.prototype,`animation`,void 0),I([j({type:Boolean,reflect:!0})],K.prototype,`loaded`,void 0),I([j({type:Boolean,reflect:!0})],K.prototype,`decorative`,void 0),I([j()],K.prototype,`size`,void 0),I([j()],K.prototype,`width`,void 0),I([j()],K.prototype,`height`,void 0),I([j({attribute:`border-radius`})],K.prototype,`borderRadius`,void 0),I([j({type:Number})],K.prototype,`lines`,void 0),I([j({type:Boolean})],K.prototype,`avatar`,void 0),I([j({attribute:`avatar-size`})],K.prototype,`avatarSize`,void 0),I([j({attribute:`avatar-shape`})],K.prototype,`avatarShape`,void 0),I([j({type:Boolean})],K.prototype,`active`,void 0),I([j({type:Boolean})],K.prototype,`paragraph`,void 0),I([j({type:Boolean})],K.prototype,`heading`,void 0),Oi=class e extends h{constructor(...e){super(...e),this.lines=3,this.lineHeight=`1em`,this.gap=`2`,this.noShrinkLast=!1,this.animation=`pulse`}static{this.tagName=`minerva-skeleton-text`}static{this.styles=[...Di,O`
:host{
display: block;
}
`,C(ye)]}updated(t){y&&t.has(`lines`)&&!(Number.isInteger(this.lines)&&this.lines>=0)&&m(e.tagName,`lines must be a non-negative integer (got ${this.lines}).`)}render(){let e=Number.isFinite(this.lines)?Math.max(0,Math.floor(this.lines)):0;return A`<div
part="root"
aria-hidden="true"
class="skeletonText"
style=${N({gap:Ei(this.gap)})}
>
${Array.from({length:e},(t,n)=>A`<span
part="line"
class="skeleton decorative text animation-${this.animation}"
style=${N({height:Ti(this.lineHeight),width:!this.noShrinkLast&&n===e-1?`70%`:`100%`})}
></span>`)}
</div>`}},I([j({type:Number})],Oi.prototype,`lines`,void 0),I([j({attribute:`line-height`})],Oi.prototype,`lineHeight`,void 0),I([j()],Oi.prototype,`gap`,void 0),I([j({type:Boolean,attribute:`no-shrink-last`})],Oi.prototype,`noShrinkLast`,void 0),I([j({reflect:!0})],Oi.prototype,`animation`,void 0)})))()}var Ai,ji;function Mi(){return(Mi=e((()=>{_(),b(),jt(),x(),qn(),_e(),M(),D(),T(),hn(),Ai=320,ji=class e extends h{constructor(...e){super(...e),this.asideWidth=Ai,this.collapseBelow=`md`,this.gap=6,this.slots=new pt(this)}static{this.tagName=`minerva-split-layout`}static{this.styles=[g,O`
:host{
display: block;
min-width: 0;
}
`,C(ot)]}get validAsideWidth(){return Number.isFinite(this.asideWidth)&&this.asideWidth>0}updated(){y&&!this.validAsideWidth&&m(e.tagName,`aside-width must be a finite positive number (got ${String(this.asideWidth)}); using ${Ai}.`)}render(){let e=this.slots.test(`aside`),t=this.validAsideWidth?this.asideWidth:Ai;return A`<div
class="root"
part="root"
style=${N({"--split-layout-aside-width":`${t}px`,"--split-layout-gap":Gt(this.gap)})}
>
<div
class=${F({grid:!0,[this.collapseBelow]:!0,hasAside:e})}
>
<div class="main" part="main"><slot></slot></div>
${e?A`<div class="aside" part="aside">
<slot name="aside"></slot>
</div>`:k}
</div>
</div>`}},I([j({type:Number,attribute:`aside-width`})],ji.prototype,`asideWidth`,void 0),I([j({attribute:`collapse-below`,reflect:!0})],ji.prototype,`collapseBelow`,void 0),I([j({converter:Yn})],ji.prototype,`gap`,void 0)})))()}var Ni,Pi,Fi,Ii,Li,Ri,zi,Bi;function Vi(){return(Vi=e((()=>{d(),_(),b(),jt(),x(),qn(),n(),M(),D(),T(),hn(),Ni={start:`flex-start`,center:`center`,end:`flex-end`,stretch:`stretch`,baseline:`baseline`},Pi={start:`flex-start`,center:`center`,end:`flex-end`,between:`space-between`,around:`space-around`,evenly:`space-evenly`},Fi=()=>typeof HTMLSlotElement<`u`&&typeof HTMLSlotElement.prototype.assign==`function`,Ii=`minerva-stack-item-`,Li=e=>Array.from(e.childNodes).filter(e=>e.nodeType===1||e.nodeType===3&&!!e.textContent?.trim()),Ri=class extends h{constructor(...e){super(...e),this.direction=`column`,this.wrap=!1,this.attached=!1,this.aria=new u(this),this.slots=new pt(this),this.manualSlots=!1,this.fallbackSlotted=new Set}static{this.tagName=`minerva-stack`}static{this.styles=[g,O`
:host{
display: block;
min-width: 0;
}

.attached ::slotted(*){
position: relative;
margin: 0;
}
.attached ::slotted(:hover),
.attached ::slotted(:focus-visible),
.attached ::slotted(:focus-within){
z-index: 1;
}
.attached.row ::slotted(:not(:first-child)){
margin-inline-start: -1px;
}
.attached.row-reverse ::slotted(:not(:first-child)){
margin-inline-end: -1px;
}
.attached.row ::slotted(:not(:first-child)),
.attached.row-reverse ::slotted(:not(:last-child)){
border-start-start-radius: 0;
border-end-start-radius: 0;
}
.attached.row ::slotted(:not(:last-child)),
.attached.row-reverse ::slotted(:not(:first-child)){
border-start-end-radius: 0;
border-end-end-radius: 0;
}
.attached.column ::slotted(:not(:first-child)){
margin-block-start: -1px;
}
.attached.column-reverse ::slotted(:not(:first-child)){
margin-block-end: -1px;
}
.attached.column ::slotted(:not(:first-child)),
.attached.column-reverse ::slotted(:not(:last-child)){
border-start-start-radius: 0;
border-start-end-radius: 0;
}
.attached.column ::slotted(:not(:last-child)),
.attached.column-reverse ::slotted(:not(:first-child)){
border-end-start-radius: 0;
border-end-end-radius: 0;
}
`,C(lt)]}get resolvedDirection(){return this.direction}get resolvedAlign(){return this.align}createRenderRoot(){if(!this.shadowRoot){this.manualSlots=Fi();let e=this.constructor;this.attachShadow({...e.shadowRootOptions,slotAssignment:this.manualSlots?`manual`:`named`})}return super.createRenderRoot()}renderSeparator(){let e=this.separator;return typeof e==`function`?e():e}get hasSeparator(){let e=this.separator;return e!=null&&e!==``}fallbackItems(){return Array.from(this.children).filter(e=>{let t=e.getAttribute(`slot`);return t===null||this.fallbackSlotted.has(e)&&t!==``})}releaseFallbackSlots(e=[]){for(let t of this.fallbackSlotted)e.includes(t)||(t.getAttribute(`slot`)?.startsWith(Ii)&&t.removeAttribute(`slot`),this.fallbackSlotted.delete(t))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this.releaseFallbackSlots()}updated(){if(this.manualSlots){let e=Li(this),t=Array.from(this.renderRoot.querySelectorAll(`slot`));t.length===1?t[0].assign(...e):t.forEach((t,n)=>t.assign(e[n]))}else if(this.hasSeparator){let e=this.fallbackItems();e.forEach((e,t)=>{let n=`${Ii}${t}`;this.fallbackSlotted.add(e),e.getAttribute(`slot`)!==n&&e.setAttribute(`slot`,n)}),this.releaseFallbackSlots(e)}else this.releaseFallbackSlots();y&&this.attached&&!this.aria.label&&m(this.constructor.tagName,`attached stacks are exposed as role="group": set aria-label (or aria-labelledby) to name the group.`)}renderItems(){return this.hasSeparator?this.manualSlots?Array.from({length:Li(this).length},(e,t)=>A`${t>0?this.renderSeparator():k}<slot></slot>`):A`${Array.from({length:this.fallbackItems().length},(e,t)=>A`${t>0?this.renderSeparator():k}<slot
name=${`${Ii}${t}`}
></slot>`)}<slot></slot>`:A`<slot></slot>`}hookStates(){return{orientation:this.resolvedDirection.startsWith(`row`)?`horizontal`:`vertical`}}render(){this.slots;let e=this.resolvedDirection,t=this.resolvedAlign,n={};return this.gap!==void 0&&this.gap!==``&&!this.attached&&(n.gap=Gt(this.gap)),t&&Ni[t]&&(n.alignItems=Ni[t]),this.justify&&Pi[this.justify]&&(n.justifyContent=Pi[this.justify]),A`<div
part="root"
class=${F({stack:!0,[e]:!0,wrap:this.wrap,attached:this.attached})}
style=${N(n)}
role=${this.attached?`group`:k}
aria-label=${this.attached?this.aria.label??k:k}
>
${this.renderItems()}
</div>`}},I([j({reflect:!0})],Ri.prototype,`direction`,void 0),I([j({converter:Yn})],Ri.prototype,`gap`,void 0),I([j({reflect:!0})],Ri.prototype,`align`,void 0),I([j({reflect:!0})],Ri.prototype,`justify`,void 0),I([j({type:Boolean,reflect:!0})],Ri.prototype,`wrap`,void 0),I([j({attribute:`separator`})],Ri.prototype,`separator`,void 0),I([j({type:Boolean,reflect:!0})],Ri.prototype,`attached`,void 0),zi=class extends Ri{static{this.tagName=`minerva-hstack`}constructor(){super(),this.direction=`row`}get resolvedDirection(){return`row`}hookStates(){return{}}get resolvedAlign(){return this.align??`center`}},Bi=class extends Ri{static{this.tagName=`minerva-vstack`}constructor(){super(),this.direction=`column`}get resolvedDirection(){return`column`}hookStates(){return{}}get resolvedAlign(){return this.align??`stretch`}}})))()}var Hi;function Ui(){return(Ui=e((()=>{d(),_(),p(),b(),x(),xe(),M(),D(),T(),Rn(),Hi=class e extends h{constructor(...e){super(...e),this.items=[],this.value=``,this.navigable=!1,this.locale=new S(this),this.aria=new u(this)}static{this.tagName=`minerva-steps`}static{this.styles=[g,O`
:host{
display: block;
}
`,C(l)]}select(e){e.disabled||e.value===this.value||this.emit(`minerva-change`,{value:e.value},{cancelable:!0})&&(this.value=e.value)}updated(){y&&this.value&&this.items.length&&!this.items.some(e=>e.value===this.value)&&m(e.tagName,`value "${this.value}" matches no step: no step is marked current.`)}hookStates(){return{readonly:!this.navigable}}render(){let e=this.items??[],t=e.findIndex(e=>e.value===this.value),n=!this.navigable;return A`<ol
part="root"
class="steps"
aria-label=${this.aria.label??this.locale.t(`steps.label`)}
>
${vn(e,e=>e.value,(e,r)=>{let i=r===t,a=t>-1&&r<t,o=A`<span
part="indicator"
class="number"
aria-hidden="true"
>${r+1}</span
><span part="label" class="label">${e.label}</span>`;return A`<li
part="item"
class=${F({step:!0,current:i,complete:a})}
aria-current=${n&&i?`step`:k}
>
${n?A`<span part="button" class="button static"
>${o}</span
>`:A`<button
type="button"
part="button"
class="button"
?disabled=${!!e.disabled}
aria-current=${i?`step`:k}
@click=${()=>this.select(e)}
>
${o}
</button>`}
</li>`})}
</ol>`}},I([j({attribute:!1})],Hi.prototype,`items`,void 0),I([j({reflect:!0})],Hi.prototype,`value`,void 0),I([j({type:Boolean,reflect:!0})],Hi.prototype,`navigable`,void 0)})))()}var Wi,Gi,q;function Ki(){return(Ki=e((()=>{d(),_(),p(),b(),jt(),x(),At(),te(),M(),D(),T(),dn(),Wi=400,Gi={start:`labelStart`,end:`labelEnd`,top:`labelTop`,bottom:`labelBottom`},q=class e extends v{constructor(...e){super(...e),this.checked=!1,this.defaultChecked=!1,this.value=`on`,this.label=``,this.offLabel=``,this.onLabel=``,this.variant=`slider`,this.size=`medium`,this.color=`primary`,this.shape=`round`,this.labelPlacement=`end`,this.iconPlacement=`start`,this.loading=!1,this.noRipple=!1,this.readOnly=!1,this.invalid=!1,this.rippleActive=!1,this.dirty=!1,this.locale=new S(this),this.aria=new u(this,()=>this.labels),this.slots=new pt(this)}static{this.tagName=`minerva-switch`}static{this.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[g,O`
:host{
display: inline-flex;
vertical-align: middle;
}
`,C(Me)]}get bilateral(){return!!this.offLabel&&!!this.onLabel}get segmented(){return this.variant===`segmented`&&this.bilateral}get blocked(){return this.isDisabled||this.loading||this.readOnly}focus(e){if(this.segmented){this.renderRoot.querySelector(`.segmentActive`)?.focus(e);return}this.input?.focus(e)}blur(){(this.shadowRoot?.activeElement)?.blur()}click(){this.input?.click()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.rippleTimer)}getFormValue(){return this.checked?this.value:null}getValidity(){return this.required&&!this.checked?{flags:{valueMissing:!0},message:this.locale.t(`validation.checkMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.checked=this.defaultChecked}restoreFormState(e){this.checked=e!=null&&e!==``}willUpdate(t){t.has(`defaultChecked`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`checked`))&&(this.checked=this.defaultChecked),y&&t.has(`variant`)&&this.variant===`segmented`&&!this.bilateral&&m(e.tagName,`variant="segmented" needs both off-label and on-label; rendering a slider.`)}handleChange(){if(this.blocked){this.input.checked=this.checked;return}this.dirty=!0,this.checked=this.input.checked,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{checked:this.checked,value:this.value})}handleKeyDown(e){e.key===`Enter`&&(e.preventDefault(),!this.blocked&&this.input.click())}handleClick(e){if(this.readOnly){e.preventDefault();return}this.noRipple||this.blocked||(clearTimeout(this.rippleTimer),this.rippleActive=!0,this.rippleTimer=setTimeout(()=>this.rippleActive=!1,Wi))}setState(e){this.blocked||e===this.checked||this.input.click()}hookStates(){return{state:this.checked?`checked`:`unchecked`,disabled:this.isDisabled,loading:this.loading,invalid:this.invalid||this.aria.attr(`aria-invalid`)===`true`,readonly:this.readOnly,required:this.required,size:this.size,color:this.color,shape:this.shape,variant:this.segmented?`segmented`:`slider`}}renderInput(e){let t=this.invalid||this.aria.attr(`aria-invalid`)===`true`;return A`<input
part="input"
type="checkbox"
role=${e?k:`switch`}
class=${e?`hiddenInput`:``}
.checked=${Un(this.checked)}
?disabled=${this.isDisabled||this.loading}
?required=${this.required}
tabindex=${e?`-1`:k}
aria-hidden=${e?`true`:k}
aria-label=${e?k:this.aria.label??k}
aria-description=${e?k:this.aria.description??k}
aria-checked=${e?k:String(this.checked)}
aria-disabled=${!e&&(this.isDisabled||this.loading)?`true`:k}
aria-busy=${this.loading?`true`:k}
aria-invalid=${!e&&t?`true`:k}
aria-readonly=${!e&&this.readOnly?`true`:k}
aria-required=${!e&&this.required?`true`:k}
@change=${this.handleChange}
@click=${this.handleClick}
@keydown=${this.handleKeyDown}
/>`}render(){let e=this.blocked,t=this.isDisabled;if(this.segmented)return A`<span
part="root"
role="group"
aria-label=${this.aria.label??k}
aria-description=${this.aria.description??k}
aria-disabled=${e?`true`:k}
class=${F({segmented:!0,[this.size]:!0,[this.color]:!0,disabled:e})}
>
${this.renderInput(!0)}
${[!1,!0].map(t=>{let n=this.checked===t;return A`<button
part="segment"
type="button"
class=${F({segment:!0,segmentActive:n})}
?disabled=${e}
aria-pressed=${String(n)}
@click=${()=>this.setState(t)}
>
${t?this.onLabel:this.offLabel}
</button>`})}
</span>`;let n=this.bilateral,r=this.slots.test(`icon`),i=F({switch:!0,[this.size]:!0,[Gi[this.labelPlacement]]:!n,[this.color]:!0,checked:this.checked,checkedLarge:this.checked&&this.size===`large`,disabled:t,loading:this.loading,square:this.shape===`square`,ripple:!this.noRipple&&this.rippleActive,bilateral:n}),a=A`<span class="switchBase" part="control">
${this.renderInput(!1)}
<span class="track" part="track"></span>
<span class="thumb" part="thumb"
>${this.iconPlacement===`start`&&r?A`<span class="icon" part="icon"
><slot name="icon"></slot
></span>`:k}</span
>
${this.noRipple?k:A`<span class="rippleEffect"></span>`}
</span>`,o=this.iconPlacement===`end`&&r?A`<span class="icon" part="icon"><slot name="icon"></slot></span>`:k;if(n){let t=t=>A`<button
part="side"
type="button"
class=${F({side:!0,sideActive:this.checked===t})}
?disabled=${e}
@click=${()=>this.setState(t)}
>
${t?this.onLabel:this.offLabel}
</button>`;return A`<span part="root" class=${i}
>${t(!1)}${a}${t(!0)}${o}</span
>`}let s=this.label||this.slots.test(`[default]`)?A`<span class="label" part="label"
>${this.label||A`<slot></slot>`}</span
>`:k,c=this.labelPlacement===`start`||this.labelPlacement===`top`;return A`<label part="root" class=${i}
>${c?s:k}${a}${o}${c?k:s}</label
>`}},I([j({attribute:!1})],q.prototype,`checked`,void 0),I([j({type:Boolean,attribute:`checked`,reflect:!0})],q.prototype,`defaultChecked`,void 0),I([j()],q.prototype,`value`,void 0),I([j()],q.prototype,`label`,void 0),I([j({attribute:`off-label`})],q.prototype,`offLabel`,void 0),I([j({attribute:`on-label`})],q.prototype,`onLabel`,void 0),I([j({reflect:!0})],q.prototype,`variant`,void 0),I([j({reflect:!0})],q.prototype,`size`,void 0),I([j({reflect:!0})],q.prototype,`color`,void 0),I([j({reflect:!0})],q.prototype,`shape`,void 0),I([j({attribute:`label-placement`,reflect:!0})],q.prototype,`labelPlacement`,void 0),I([j({attribute:`icon-placement`})],q.prototype,`iconPlacement`,void 0),I([j({type:Boolean,reflect:!0})],q.prototype,`loading`,void 0),I([j({type:Boolean,attribute:`no-ripple`})],q.prototype,`noRipple`,void 0),I([j({type:Boolean,reflect:!0,attribute:`readonly`})],q.prototype,`readOnly`,void 0),I([j({type:Boolean,reflect:!0})],q.prototype,`invalid`,void 0),I([w()],q.prototype,`rippleActive`,void 0),I([E(`input`)],q.prototype,`input`,void 0)})))()}var qi,Ji,Yi,Xi,Zi;function Qi(){return(Qi=e((()=>{dt(),d(),_(),It(),ht(),b(),x(),ur(),Nt(),M(),D(),T(),qi=0,Ji=e=>e.parentElement?.closest(`minerva-tabs`)??null,Yi=class e extends h{constructor(...e){super(...e),this.variant=`line`,this.color=`primary`,this.orientation=`horizontal`,this.activationMode=`automatic`,this.noLoop=!1,this.label=``,this.aria=new u(this),this.baseId=`minerva-tabs-${++qi}`,this.rovingKey=``,this.observer=null,this.settleQueued=!1,this.roving=new ar(this,()=>({getItems:()=>this.tabs,orientation:this.orientation,dir:rn(this),loop:!this.noLoop})),this.handleKeyDownCapture=()=>this.ensureRoving(),this.handleFocusIn=e=>{if(this.activationMode!==`automatic`)return;let t=this.tabs.find(t=>t===e.target);t&&!t.disabled&&this.select(t.value)}}static{this.tagName=`minerva-tabs`}static{this.styles=[g,O`
:host{
display: block;
min-width: 0;
}
`,C(s)]}get tabs(){return Array.from(this.querySelectorAll(`minerva-tab`)).filter(e=>Ji(e)===this)}get panels(){return Array.from(this.querySelectorAll(`minerva-tab-panel`)).filter(e=>Ji(e)===this)}select(e){e!==this.value&&this.emit(`minerva-change`,{value:e},{cancelable:!0})&&(this.value=e)}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.sync()),this.observer.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`,`disabled`]}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.rovingKey=``}updated(t){t.has(`value`)&&y&&this.value!==void 0&&this.tabs.length>0&&!this.tabs.some(e=>e.value===this.value)&&m(e.tagName,`value "${this.value}" does not match any <minerva-tab>.`),this.sync()}ensureRoving(){if(!this.tablist)return;let e=`${this.orientation}|${rn(this)}|${this.noLoop}`;e!==this.rovingKey&&(this.rovingKey=e,this.roving.detach(),this.roving.attach(this.tablist))}sync(){if(!this.tablist)return;let e=this.tabs,t=this.panels,n=new Map;for(let t of e)n.set(t,t.id||`${this.baseId}-tab-${t.value}`),t.id||r(t,`id`,n.get(t),this);for(let e of t)n.set(e,e.id||`${this.baseId}-panel-${e.value}`),e.id||r(e,`id`,n.get(e),this);for(let r of e){let e=t.find(e=>e.value===r.value);r.sync(this,r.value===this.value,e&&n.get(e))}for(let r of t){let t=e.find(e=>e.value===r.value);r.sync(this,r.value===this.value,t&&n.get(t))}let i=[this,...e,...t].find(ee);if(i){this.settleQueued||(this.settleQueued=!0,Se(i,()=>{this.settleQueued=!1,this.requestUpdate()}));return}this.ensureRoving();let a=e.find(e=>e.value===this.value&&!e.disabled)??e.find(e=>!e.disabled);a?this.roving.setActive(a,{focus:!1}):this.roving.refresh()}hookStates(){return{orientation:this.orientation,variant:this.variant,color:this.color}}render(){return A`<div
part="root"
class=${F({tabs:!0,[this.color]:!0,vertical:this.orientation===`vertical`})}
data-orientation=${this.orientation}
@keydown=${{handleEvent:this.handleKeyDownCapture,capture:!0}}
>
<div
part="list"
role="tablist"
aria-label=${this.label||this.aria.label||k}
aria-orientation=${this.orientation}
data-orientation=${this.orientation}
class=${F({list:!0,[`${this.variant}List`]:!0,verticalList:this.orientation===`vertical`})}
@focusin=${this.handleFocusIn}
>
<slot name="tab" @slotchange=${()=>this.sync()}></slot>
</div>
<slot @slotchange=${()=>this.sync()}></slot>
</div>`}},I([j({reflect:!0})],Yi.prototype,`value`,void 0),I([j({reflect:!0})],Yi.prototype,`variant`,void 0),I([j({reflect:!0})],Yi.prototype,`color`,void 0),I([j({reflect:!0})],Yi.prototype,`orientation`,void 0),I([j({reflect:!0,attribute:`activation-mode`})],Yi.prototype,`activationMode`,void 0),I([j({type:Boolean,reflect:!0,attribute:`no-loop`})],Yi.prototype,`noLoop`,void 0),I([j()],Yi.prototype,`label`,void 0),I([E(`[role="tablist"]`)],Yi.prototype,`tablist`,void 0),Xi=class extends h{constructor(...e){super(...e),this.internals=it(this),this.ownedAria=new Set,this.value=``,this.disabled=!1,this.selected=!1,this.group=null,this.handleMouseDown=e=>{if(this.disabled){e.preventDefault();return}e.button===0&&!e.ctrlKey?this.select():e.preventDefault()},this.handleKeyDown=e=>{e.defaultPrevented||this.disabled||e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),this.select())},this.handleClick=e=>{!this.disabled&&e.detail===0&&this.select()}}static{this.tagName=`minerva-tab`}static{this.styles=[g,O`
:host{
display: inline-flex;
flex: 0 0 auto;
min-width: 0;
max-width: 100%;
outline: none;
}
:host([disabled]){
pointer-events: none;
}
.trigger{
width: 100%;
}
.verticalTrigger{
justify-content: flex-start;
}
:host(:focus-visible) .trigger{
outline: var(--focus-ring-width) solid var(--tabs-accent);
outline-offset: -2px;
}
:host([disabled]) .trigger{
opacity: 0.5;
cursor: not-allowed;
}
`,C(s)]}sync(e,t,n){this.group=e,this.selected=t,r(this,`aria-controls`,n??null),this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.hasAttribute(`slot`)||r(this,`slot`,`tab`),Pt(this,this.internals,{role:`tab`},this.ownedAria),this.addEventListener(`mousedown`,this.handleMouseDown),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mousedown`,this.handleMouseDown),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`click`,this.handleClick),this.group=null}select(){(this.group??Ji(this))?.select(this.value)}updated(){Pt(this,this.internals,{ariaSelected:String(this.selected),ariaDisabled:this.disabled?`true`:null},this.ownedAria),r(this,`data-state`,this.selected?`active`:`inactive`),r(this,`data-disabled`,this.disabled);let e=this.group?.orientation??`horizontal`;r(this,`data-orientation`,e)}hookStates(){return{state:this.selected?`active`:`inactive`,disabled:this.disabled,orientation:this.group?.orientation??`horizontal`,variant:this.group?.variant??`line`,color:this.color}}render(){let e=this.group,t=e?.variant??`line`,n=e?.orientation===`vertical`;return A`<span
part="root"
class=${F({trigger:!0,[`${t}Trigger`]:!0,verticalTrigger:n,[this.color??``]:!!this.color,colored:!!this.color})}
data-state=${this.selected?`active`:`inactive`}
data-orientation=${e?.orientation??`horizontal`}
><slot></slot
></span>`}},I([j({reflect:!0})],Xi.prototype,`value`,void 0),I([j({type:Boolean,reflect:!0})],Xi.prototype,`disabled`,void 0),I([j({reflect:!0})],Xi.prototype,`color`,void 0),I([j({type:Boolean,reflect:!0})],Xi.prototype,`selected`,void 0),Zi=class extends h{constructor(...e){super(...e),this.internals=it(this),this.value=``,this.forceMount=!1,this.orientation=`horizontal`,this.selected=!1,this.stamped=[]}static{this.tagName=`minerva-tab-panel`}static{this.styles=[g,O`
:host{
display: block;
flex: 1;
min-width: 0;
outline: none;
}
:host(:focus-visible) .panel{
outline: var(--focus-ring-width) solid var(--primary-color);
outline-offset: var(--focus-ring-offset);
}
`,C(s)]}get template(){return Array.from(this.children).find(e=>e instanceof HTMLTemplateElement)??null}syncContent(){if(ee(this))return;let e=this.template;if(this.selected||this.forceMount){if(e&&!this.stamped.length){let t=this.ownerDocument.importNode(e.content,!0);this.stamped=Array.from(t.childNodes),e.after(t)}return}for(let e of this.stamped)e.parentNode?.removeChild(e);this.stamped=[]}sync(e,t,n){this.orientation=e.orientation,this.selected=t,r(this,`hidden`,!t),this.syncContent(),r(this,`data-state`,t?`active`:`inactive`),r(this,`data-orientation`,e.orientation),r(this,`aria-labelledby`,n??null),this.requestUpdate()}willUpdate(e){e.has(`forceMount`)&&this.hasUpdated&&this.syncContent()}connectedCallback(){super.connectedCallback(),Pt(this,this.internals,{role:`tabpanel`}),this.hasAttribute(`tabindex`)||r(this,`tabindex`,`0`)}hookStates(){return{state:this.selected?`active`:`inactive`,orientation:this.orientation}}render(){return A`<div
part="root"
class="panel"
data-orientation=${this.orientation}
?hidden=${!this.selected&&ee(this)&&!!Ji(this)}
>
<slot></slot>
</div>`}},I([j({reflect:!0})],Zi.prototype,`value`,void 0),I([j({type:Boolean,reflect:!0,attribute:`force-mount`})],Zi.prototype,`forceMount`,void 0)})))()}var $i,J;function ea(){return(ea=e((()=>{d(),_(),f(),p(),b(),jt(),x(),ke(),M(),D(),T(),hn(),Rn(),$i=600,J=class e extends h{constructor(...e){super(...e),this.color=`neutral`,this.variant=`subtle`,this.size=`medium`,this.shape=`rounded`,this.closable=!1,this.clickable=!1,this.toggle=!1,this.loading=!1,this.elevation=!1,this.disabled=!1,this.noRipple=!1,this.ripples=[],this.nextRippleId=0,this.rippleTimers=new Set,this.locale=new S(this),this.aria=new u(this),this.slots=new pt(this)}static{this.tagName=`minerva-tag`}static{this.shadowRootOptions={...h.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[g,O`
:host{
display: inline-flex;
max-width: 100%;
vertical-align: middle;
}
.closeIcon svg{
display: block;
}
`,C(Ft)]}focus(e){(this.actionButton??this.closeButton)?.focus(e)}disconnectedCallback(){super.disconnectedCallback(),this.rippleTimers.forEach(clearTimeout),this.rippleTimers.clear(),this.ripples=[]}labelText(){return Array.from(this.childNodes).filter(e=>e.nodeType===3||e.nodeType===1&&!e.hasAttribute(`slot`)).map(e=>e.textContent??``).join(``).replace(/\s+/g,` `).trim()}get inactive(){return this.disabled||this.loading}handleClick(e){this.inactive||(this.addRipple(e),this.toggle&&(this.pressed=!this.pressed,this.emit(`minerva-change`,{pressed:this.pressed})))}handleClose(e){e.stopPropagation(),!this.disabled&&this.emit(`minerva-close`,{})}addRipple(e){if(this.noRipple)return;let t=e.currentTarget.parentElement;if(!t)return;let n=t.getBoundingClientRect(),r=e.detail===0,i=Math.max(n.width,n.height),a=i/2,o=this.nextRippleId++,s=r?n.width/2-a:e.clientX-n.left-a,c=r?n.height/2-a:e.clientY-n.top-a;this.ripples=[...this.ripples,{id:o,style:{width:`${i}px`,height:`${i}px`,left:`${s}px`,top:`${c}px`}}];let l=setTimeout(()=>{this.rippleTimers.delete(l),this.ripples=this.ripples.filter(e=>e.id!==o)},$i);this.rippleTimers.add(l)}hookStates(){return{state:this.clickable&&this.pressed?`active`:`inactive`,disabled:this.disabled,loading:this.loading,size:this.size,variant:this.variant,color:this.color,shape:this.shape}}updated(){y&&(this.toggle||this.pressed!==void 0)&&!this.clickable&&m(e.tagName,`pressed / toggle require clickable: the tag is not a button otherwise.`)}render(){let e=this.toggle||this.pressed!==void 0,t=this.closable?this.labelText():``,n=this.closeLabel??(t?this.locale.t(`tag.closeWithLabel`,{label:t}):this.locale.t(`tag.close`)),r=A`${this.loading?A`<span
class="spinner"
part="spinner"
aria-hidden="true"
></span>`:A`${this.slots.test(`icon`)?A`<span class="icon" part="icon"
><slot name="icon"></slot
></span>`:k}${this.slots.test(`avatar`)?A`<span class="avatar" part="avatar"
><slot name="avatar"></slot
></span>`:k}`}<span class="content" part="label"><slot></slot></span>`;return A`<div
part="root"
class=${F({tag:!0,[this.color]:!0,[this.variant]:!0,[this.size]:!0,[this.shape]:!0,clickable:this.clickable&&!this.inactive,pressed:this.clickable&&!!this.pressed,elevation:this.elevation,disabled:this.disabled,loading:this.loading})}
aria-busy=${this.loading?`true`:k}
data-component="tag"
>
${this.clickable?A`<button
type="button"
part="action"
class="action"
?disabled=${this.inactive}
aria-pressed=${e?String(!!this.pressed):k}
aria-label=${this.aria.label??k}
aria-description=${this.aria.description??k}
@click=${this.handleClick}
>
${r}
</button>`:r}
${this.closable&&!this.loading?A`<button
type="button"
part="close-button"
class="closeIcon"
?disabled=${this.disabled}
aria-label=${n}
title=${n}
@click=${this.handleClose}
>
<slot name="close-icon">${Re}</slot>
</button>`:k}
${vn(this.ripples,e=>e.id,e=>A`<span class="ripple" style=${N(e.style)}></span>`)}
</div>`}},I([j({reflect:!0})],J.prototype,`color`,void 0),I([j({reflect:!0})],J.prototype,`variant`,void 0),I([j({reflect:!0})],J.prototype,`size`,void 0),I([j({reflect:!0})],J.prototype,`shape`,void 0),I([j({type:Boolean,reflect:!0})],J.prototype,`closable`,void 0),I([j({type:Boolean,reflect:!0})],J.prototype,`clickable`,void 0),I([j({type:Boolean,reflect:!0})],J.prototype,`pressed`,void 0),I([j({type:Boolean,reflect:!0})],J.prototype,`toggle`,void 0),I([j({type:Boolean,reflect:!0})],J.prototype,`loading`,void 0),I([j({type:Boolean,reflect:!0})],J.prototype,`elevation`,void 0),I([j({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),I([j({attribute:`close-label`})],J.prototype,`closeLabel`,void 0),I([j({type:Boolean,attribute:`no-ripple`})],J.prototype,`noRipple`,void 0),I([w()],J.prototype,`ripples`,void 0),I([E(`.action`)],J.prototype,`actionButton`,void 0),I([E(`.closeIcon`)],J.prototype,`closeButton`,void 0)})))()}function ta(e,t){try{let t=JSON.parse(e);if(Array.isArray(t))return t.filter(e=>typeof e==`string`)}catch{}return y&&m(ia,`the ${t} attribute is not a JSON array of strings.`),null}function na(e,t){let n=(e??``).trim();return n?n.startsWith(`[`)?ta(n,t)??[]:n.split(`,`).map(e=>e.trim()).filter(Boolean):[]}function ra(e){let t=(e??``).trim();return t?t.startsWith(`[`)?ta(t,`separators`)??[...Bn]:t.split(/\s+/):[]}var ia,aa,oa,sa,Y;function ca(){return(ca=e((()=>{d(),_(),f(),p(),b(),x(),bt(),Qn(),Ye(),At(),ke(),Ge(),M(),D(),T(),P(),dn(),Rn(),ia=`minerva-tag-input`,aa=`Enter`,oa=[`\r
`,`
`,`\r`],sa=0,Y=class extends v{constructor(...e){super(...e),this._value=[],this.defaultValue=[],this.options=[],this.separators=[...Bn],this.noCommitOnBlur=!1,this.placeholder=``,this.size=`medium`,this.invalid=!1,this.readOnly=!1,this.draft=``,this.requestedOpen=!1,this.highlight=0,this.listId=`minerva-tag-input-list-${sa++}`,this.locale=new S(this),this.aria=new u(this,()=>this.labels),this.floating=new lr(this,()=>({anchor:()=>this.combobox,floating:()=>this.list,branches:()=>[this],placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`exact`,onDismiss:()=>this.setOpen(!1)})),this.dirty=!1,this.composing=!1,this.navigating=!1,this.highlightKey=``}static{this.tagName=ia}static{this.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[g,rr,O`
:host{
display: block;
min-width: 0;
}
`,C(Ft),C(et),C(`.combobox { ${Dt.replace(/@charset[^;]*;/g,``)} }`),C(Lt),O`

.combobox > .root{
flex-direction: row;
gap: 0;
}

.list{
inset: auto;
}
`]}get value(){return this._value}set value(e){this.dirty=!0,this.setValue(e)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}setValue(e){let t=this._value;this._value=Array.isArray(e)?e.map(String):typeof e==`string`?na(e,`value`):[],this.requestUpdate(`value`,t)}get blocked(){return this.isDisabled||this.readOnly}get isOpen(){return this.requestedOpen&&!this.blocked}get filtered(){let e=this.value,t=this.draft.trim(),n=[...new Set(this.options.map(e=>e.trim()).filter(Boolean))].filter(t=>!e.includes(t)),r=n.map(e=>({tag:e,label:e,filterValue:e}));t&&!e.includes(t)&&!n.includes(t)&&r.unshift({tag:t,label:this.createLabel?this.createLabel(t):this.locale.t(`tagInput.create`,{tag:t}),filterValue:t});let i=t.toLowerCase();return i?r.filter(e=>e.filterValue.toLowerCase().includes(i)):r}get enterCommits(){return this.separators.includes(aa)}get splitters(){return this.separators.filter(e=>e!==aa&&e!==``)}getFormValue(){if(!this.name)return null;let e=new FormData;for(let t of this.value)e.append(this.name,t);return e}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.setValue([...this.defaultValue]),this.draft=``,this.requestedOpen=!1,this.navigating=!1}restoreFormState(e){e instanceof FormData?this.value=e.getAll(this.name).filter(e=>typeof e==`string`):typeof e==`string`&&(this.value=[e])}willUpdate(e){e.has(`defaultValue`)&&!this.dirty&&this.setValue([...this.defaultValue]),this.blocked&&(this.requestedOpen=!1);let t=`${this.filtered.length}\u0000${this.draft}`;if(t!==this.highlightKey&&(this.highlightKey=t,this.highlight=0),y&&e.has(`value`)){let e=new Set,t=this.value.find(t=>e.size===e.add(t).size);t!==void 0&&m(ia,`value contains the tag "${t}" more than once: tags are unique (removing one removes its position only).`)}}updated(e){super.updated(e),this.floating.sync(this.isOpen),this.input?.toggleAttribute(Mn,!this.isOpen&&this.draft!==``)}setOpen(e){e&&this.blocked||e!==this.requestedOpen&&this.emit(`minerva-open-change`,{open:e},{cancelable:!0})&&(this.requestedOpen=e)}setTags(e){this.value=e,this.emit(`minerva-change`,{value:[...e]})}setDraft(e){this.draft=e,this.input&&this.input.value!==e&&(this.input.value=e)}commitAll(e,t=``){if(this.blocked||this.composing)return;let n=this.value,r=[...n];for(let t of e){let e=t.trim();e&&!r.includes(e)&&r.push(e)}r.length!==n.length&&this.setTags(r),this.navigating=!1,this.setDraft(t)}commit(e){this.commitAll([e])}select(e){this.commit(e.tag),this.setOpen(!1)}removeAt(e){this.blocked||(this.setTags(this.value.filter((t,n)=>n!==e)),this.input?.focus())}handleInput(){let e=this.input.value;if(this.blocked){this.input.value=this.draft;return}this.navigating=!1;let t=this.splitters,n=this.composing||t.length===0?[e]:Wn(e,t);n.length>1?this.commitAll(n.slice(0,-1),n[n.length-1]):this.draft=e,this.setOpen(!0),this.emit(`minerva-input`,{value:this.draft})}handlePaste(e){if(this.blocked||this.composing)return;let t=e.clipboardData?.getData(`text`)??``,n=this.enterCommits?[...this.splitters,...oa]:this.splitters;if(!n.some(e=>t.includes(e)))return;e.preventDefault();let r=this.draft,i=this.input.selectionStart??r.length,a=this.input.selectionEnd??r.length,o=r.slice(0,i)+t+r.slice(a);this.commitAll(Wn(o,n)),this.setOpen(!1)}handleKeyDown(e){if(this.blocked||this.composing||e.isComposing||e.keyCode===229)return;let t=this.filtered,n=t.length,r=this.isOpen,i=this.draft.trim(),a=this.value;switch(e.key){case`ArrowDown`:case`ArrowUp`:if(e.preventDefault(),this.navigating=!0,this.setOpen(!0),n>0){let t=e.key===`ArrowDown`?1:-1;this.highlight=(this.highlight+t+n)%n}break;case`Enter`:e.preventDefault(),this.enterCommits?!this.navigating&&(!i||a.includes(i))?this.commit(this.draft):r&&t[this.highlight]?this.select(t[this.highlight]):(this.commit(this.draft),this.setOpen(!1)):this.navigating&&r&&t[this.highlight]&&this.select(t[this.highlight]);break;case`Escape`:this.navigating=!1,this.setDraft(``),r&&!e.defaultPrevented&&(e.preventDefault(),this.setOpen(!1));break;case`Backspace`:this.draft===``&&a.length>0&&(e.preventDefault(),this.setTags(a.slice(0,-1)))}}handleFocus(){this.blocked||this.setOpen(!0)}handleBlur(){this.setOpen(!1),this.noCommitOnBlur||this.commit(this.draft)}clearAll(){this.setDraft(``),this.setTags([]),this.emit(`minerva-clear`),this.input?.focus()}renderTag(e,t){let n=this.isDisabled,r=this.removeLabel?this.removeLabel(e):this.locale.t(`tagInput.remove`,{tag:e});return A`<div
part="tag"
class=${F({tag:!0,neutral:!0,subtle:!0,large:!0,rounded:!0,disabled:n})}
data-component="tag"
>
<span class="content"><span class="label">${e}</span></span>
${this.readOnly?k:A`<button
part="remove-button"
type="button"
class="closeIcon"
aria-label=${r}
title=${r}
?disabled=${n}
@click=${e=>{e.stopPropagation(),this.removeAt(t)}}
>
${Re}
</button>`}
</div>`}hookStates(){return{state:this.isOpen?`open`:`closed`,disabled:this.isDisabled,invalid:this.invalid,readonly:this.readOnly,required:this.required,size:this.size}}renderList(e){let t=this.aria.label;return A`<ul
part="list"
id=${this.listId}
role="listbox"
popover="manual"
aria-label=${t??k}
class="list"
>
${e.length===0?A`<li class="empty" part="empty" role="presentation">
${this.emptyText??this.locale.t(`tagInput.empty`)}
</li>`:k}
${e.map((e,t)=>A`<li
part="option"
id=${`${this.listId}-option-${t}`}
role="option"
aria-selected=${t===this.highlight?`true`:`false`}
tabindex="-1"
class="option"
?data-active=${t===this.highlight}
@mousedown=${t=>{t.preventDefault(),this.select(e)}}
@mouseenter=${()=>this.highlight=t}
>
${e.label}
</li>`)}
</ul>`}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.value,r=this.isOpen,i=this.filtered,a=this.draft.trim(),o=r?i[this.highlight]:void 0,s=e=>e.preventDefault();return A`<div part="root" class="root">
${n.length>0?A`<div part="tags" class="values">
${vn(n,(e,t)=>`${t}-${e}`,(e,t)=>this.renderTag(e,t))}
</div>`:k}
<div class="entry">
<div class="combobox">
<div
part="control"
class=${F({root:!0,outline:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
data-component="input"
>
<input
part="input"
class="field"
type="text"
role="combobox"
aria-label=${this.aria.label??k}
aria-description=${this.aria.description??k}
aria-expanded=${r?`true`:`false`}
aria-controls=${r?this.listId:k}
aria-autocomplete="list"
aria-activedescendant=${o?`${this.listId}-option-${this.highlight}`:k}
aria-invalid=${this.invalid?`true`:k}
aria-required=${this.required?`true`:k}
autocomplete="off"
spellcheck="false"
placeholder=${this.placeholder||k}
.value=${Un(this.draft)}
?disabled=${t}
?readonly=${this.readOnly}
@input=${this.handleInput}
@focus=${this.handleFocus}
@click=${this.handleFocus}
@blur=${this.handleBlur}
@compositionstart=${()=>this.composing=!0}
@compositionend=${()=>this.composing=!1}
@keydown=${this.handleKeyDown}
@paste=${this.handlePaste}
/>
</div>
${r?this.renderList(i):k}
</div>
${this.readOnly?k:A`<button
part="add-button"
type="button"
class=${F({iconButton:!0,neutral:!0,"variant-ghost":!0,medium:!0,square:!0,disabled:t||!a||n.includes(a)})}
aria-label=${this.addLabel??e(`tagInput.add`)}
?disabled=${t||!a||n.includes(a)}
@mousedown=${s}
@click=${()=>{this.commit(this.draft),this.input?.focus()}}
>
${fe}
</button>
<button
part="clear-button"
type="button"
class=${F({iconButton:!0,neutral:!0,"variant-ghost":!0,medium:!0,square:!0,disabled:t||n.length===0})}
aria-label=${this.clearLabel??e(`tagInput.clear`)}
?disabled=${t||n.length===0}
@mousedown=${s}
@click=${this.clearAll}
>
${Re}
</button>`}
</div>
</div>`}},I([j({attribute:!1})],Y.prototype,`value`,null),I([j({attribute:`value`,converter:{fromAttribute:e=>na(e,`value`)}})],Y.prototype,`defaultValue`,void 0),I([j({converter:{fromAttribute:e=>na(e,`options`)}})],Y.prototype,`options`,void 0),I([j({converter:{fromAttribute:ra}})],Y.prototype,`separators`,void 0),I([j({type:Boolean,attribute:`no-commit-on-blur`})],Y.prototype,`noCommitOnBlur`,void 0),I([j()],Y.prototype,`placeholder`,void 0),I([j({reflect:!0})],Y.prototype,`size`,void 0),I([j({type:Boolean,reflect:!0})],Y.prototype,`invalid`,void 0),I([j({type:Boolean,reflect:!0,attribute:`readonly`})],Y.prototype,`readOnly`,void 0),I([j({attribute:`empty-text`})],Y.prototype,`emptyText`,void 0),I([j({attribute:`add-label`})],Y.prototype,`addLabel`,void 0),I([j({attribute:`clear-label`})],Y.prototype,`clearLabel`,void 0),I([j({attribute:!1})],Y.prototype,`removeLabel`,void 0),I([j({attribute:!1})],Y.prototype,`createLabel`,void 0),I([w()],Y.prototype,`draft`,void 0),I([w()],Y.prototype,`requestedOpen`,void 0),I([w()],Y.prototype,`highlight`,void 0),I([E(`input.field`)],Y.prototype,`input`,void 0),I([E(`.combobox`)],Y.prototype,`combobox`,void 0),I([E(`.list`)],Y.prototype,`list`,void 0)})))()}var la;function ua(){return(ua=e((()=>{d(),_(),f(),b(),x(),Ct(),Mt(),M(),D(),T(),P(),la=class e extends h{constructor(...e){super(...e),this.variant=`default`,this.aria=new u(this)}static{this.tagName=`minerva-text-link`}static{this.shadowRootOptions={...h.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[g,O`
:host{
display: inline;
}
:host([variant="action"]){
display: block;
}
:host([variant="subtle"]){
display: inline-flex;
}
`,C(Ue)]}focus(e){this.anchor?.focus(e)}blur(){this.anchor?.blur()}click(){this.anchor?.click()}hookStates(){return{variant:this.variant}}updated(){y&&!this.href&&m(e.tagName,`href is missing: without it the link is not focusable nor announced as a link (use a button for actions).`)}render(){return A`<a
part="root"
class=${F({textLink:!0,[this.variant]:!0})}
href=${pe(e.tagName,this.href)??k}
target=${this.target??k}
rel=${fn(this.target,this.rel)??k}
download=${this.download??k}
hreflang=${this.hreflang??k}
aria-label=${this.aria.label??k}
aria-description=${this.aria.description??k}
aria-current=${this.aria.attr(`aria-current`)??k}
><slot></slot>${this.variant===`subtle`?a:k}</a
>`}},I([j({reflect:!0})],la.prototype,`variant`,void 0),I([j()],la.prototype,`href`,void 0),I([j()],la.prototype,`target`,void 0),I([j()],la.prototype,`rel`,void 0),I([j()],la.prototype,`download`,void 0),I([j()],la.prototype,`hreflang`,void 0),I([E(`a`)],la.prototype,`anchor`,void 0)})))()}function da(){pa=null}var fa,pa,ma,ha,ga,_a,va;function ya(){return(ya=e((()=>{_(),It(),p(),b(),x(),nt(),M(),D(),P(),fa=`(prefers-color-scheme: dark)`,pa=null,ma=()=>typeof window<`u`&&window.matchMedia?.(fa).matches?`dark`:`light`,ha=(e,t)=>{typeof document<`u`&&(document.cookie=t===null?`${e}=; path=/; max-age=0; SameSite=Lax`:Gn(e,t))},ga=class extends h{constructor(...e){super(...e),this.persist=!1,this.locale=new S(this),this.observer=null,this.media=null,this.onScheme=()=>this.onSystemChange()}static{this.styles=[g,O`
:host{
display: inline-flex;
vertical-align: middle;
}
`,C(rt)]}get config(){return je(this,`minerva-config`)}onSystemChange(){this.requestUpdate()}connectedCallback(){if(super.connectedCallback(),typeof MutationObserver<`u`){this.observer=new MutationObserver(()=>this.requestUpdate());let e=this.config;this.observer.observe(e??document.documentElement,{attributes:!0,attributeFilter:e?[`theme`,`palette`,`data-theme`]:[`data-theme`,`data-palette`]})}typeof window<`u`&&window.matchMedia&&(this.media=window.matchMedia(fa),this.media.addEventListener?.(`change`,this.onScheme))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.media?.removeEventListener?.(`change`,this.onScheme),this.media=null}renderGroup(e,t,n){return A`<div part="root" class="group" role="group" aria-label=${e}>
${t.map(e=>A`<button
type="button"
part="item"
class="item"
data-active=${e.active?`true`:k}
aria-pressed=${e.active?`true`:`false`}
@click=${()=>n(e.value)}
>
${e.text}
</button>`)}
</div>`}},I([j({type:Boolean,reflect:!0})],ga.prototype,`persist`,void 0),_a=class extends ga{constructor(...e){super(...e),this.hideSystem=!1,this.select=e=>{e!==this.theme&&this.emit(`minerva-change`,{value:e},{cancelable:!0})&&this.apply(e)}}static{this.tagName=`minerva-theme-toggle`}get theme(){let e=this.config;if(e){let t=e.theme;return t===`github-dark`?`dark`:gn(t)?t:null}if(pa)return pa;let t=this.persist?pn(document.cookie,Qt):void 0;if(gn(t))return t;let n=document.documentElement.getAttribute(`data-theme`);return gn(n)?n:`system`}get resolvedTheme(){let e=this.config;if(e)return e.resolvedMode??ma();let t=this.theme;return t===`light`||t===`dark`?t:ma()}connectedCallback(){if(super.connectedCallback(),!this.config&&this.persist&&!pa){let e=pn(document.cookie,Qt);gn(e)&&this.apply(e,!1)}}onSystemChange(){!this.config&&pa===`system`&&this.apply(`system`,!1),super.onSystemChange()}apply(e,t=this.persist){let n=this.config;if(n){n.theme=e;return}pa=e;let r=document.documentElement,i=e===`system`?ma():e;r.setAttribute(`data-theme`,i),r.style.colorScheme=i,t&&ha(`theme`,e),this.requestUpdate()}render(){let e=this.locale.t,t=this.theme,n=this.hideSystem?[`light`,`dark`]:[`light`,`dark`,`system`];return this.renderGroup(e(`themeToggle.label`,{theme:this.resolvedTheme}),n.map(n=>({value:n,text:this.labels?.[n]??e(`themeToggle.${n}`),active:t===n})),this.select)}},I([j({type:Boolean,reflect:!0,attribute:`hide-system`})],_a.prototype,`hideSystem`,void 0),I([j({attribute:!1})],_a.prototype,`labels`,void 0),va=class e extends ga{constructor(...e){super(...e),this.palettes=[...An],this.showDefault=!1,this.select=e=>{e!==this.palette&&this.emit(`minerva-change`,{value:e},{cancelable:!0})&&this.apply(e)}}static{this.tagName=`minerva-palette-toggle`}get palette(){let e=this.config,t=e?e.palette:document.documentElement.getAttribute(`data-palette`);return qt(t)?t:null}connectedCallback(){if(super.connectedCallback(),!this.config&&this.persist){let e=pn(document.cookie,yn);qt(e)&&!this.palette&&this.apply(e,!1)}}willUpdate(){if(y){let t=(this.palettes??[]).filter(e=>!qt(e));t.length&&m(e.tagName,`unknown palette(s) ${t.join(`, `)}: use ${An.join(`, `)}.`)}}apply(e,t=this.persist){let n=this.config;if(n){n.palette=e??void 0;return}let r=document.documentElement;e?r.setAttribute(`data-palette`,e):r.removeAttribute(`data-palette`),t&&ha(`palette`,e),this.requestUpdate()}render(){let e=this.locale.t,t=this.palette,n=this.showDefault?[null,...this.palettes.filter(qt)]:this.palettes.filter(qt);return this.renderGroup(e(`paletteToggle.label`,{palette:t??e(`paletteToggle.default`)}),n.map(n=>{let r=n??`default`;return{value:n,text:this.labels?.[r]??e(`paletteToggle.${r}`),active:t===n}}),this.select)}},I([j({converter:{fromAttribute:e=>(e??``).split(/[\s,]+/).filter(Boolean),toAttribute:e=>e.join(` `)}})],va.prototype,`palettes`,void 0),I([j({type:Boolean,reflect:!0,attribute:`show-default`})],va.prototype,`showDefault`,void 0),I([j({attribute:!1})],va.prototype,`labels`,void 0)})))()}var ba,X;function xa(){return(xa=e((()=>{d(),_(),f(),p(),b(),x(),bt(),Qn(),Ye(),At(),mt(),$e(),M(),D(),T(),P(),dn(),ba=(e,t,n=0,r=()=>!1)=>{let i=[];for(let a=n;a<n+e;a+=Math.max(1,t))i.push({value:a,disabled:r(a),label:String(a).padStart(2,`0`)});return i},X=class e extends v{constructor(...e){super(...e),this.name=`time-picker`,this.value=``,this.defaultValue=``,this.open=!1,this.format=`HH:mm:ss`,this.use12Hours=!1,this.size=`medium`,this.invalid=!1,this.readOnly=!1,this.hideClearButton=!1,this.hideSecond=!1,this.hourStep=1,this.minuteStep=1,this.secondStep=1,this.draft=null,this.locale=new S(this),this.aria=new u(this,()=>this.labels),this.floating=new lr(this,()=>({anchor:()=>this.input,floating:()=>this.popup,placement:`bottom-start`,branches:()=>[this.field],onDismiss:()=>this.requestOpenChange(!1),returnFocusOnEscape:()=>this.input,focusable:!0,onPosition:()=>this.syncHookStates()})),this.dirty=!1,this.focusPanelOnOpen=!1}static{this.tagName=`minerva-time-picker`}static{this.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[g,rr,O`
:host{
display: inline-block;
vertical-align: middle;
}
.timePicker{
display: block;
}
.timePicker .root{
width: 100%;
}
`,C(Dt),C(et),C(yt),C(Xe)]}get valueAsDate(){return jn(this.value)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}show(){this.open=!0}hide(){this.open=!1}get effectiveFormat(){return on(this.format,!this.hideSecond)}get withSeconds(){return an(this.effectiveFormat)}get interactive(){return!this.isDisabled&&!this.readOnly}getFormValue(){let e=this.valueAsDate;return e?Kt(e,this.withSeconds):``}getValidity(){return this.required&&!this.valueAsDate?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.draft=null,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),y&&this.checkUsage(e)}checkUsage(t){let n=e.tagName;if(t.has(`value`)&&this.value&&!jn(this.value)&&m(n,`value "${this.value}" is not a valid time: use 24-hour "HH:mm" or "HH:mm:ss".`),t.has(`minTime`)||t.has(`maxTime`)){for(let[e,t]of[[`min-time`,this.minTime],[`max-time`,this.maxTime]])t&&!jn(t)&&m(n,`${e} "${t}" is not a valid time: use 24-hour "HH:mm" or "HH:mm:ss".`);let e=jn(this.minTime),t=jn(this.maxTime);e&&t&&bn(e)>bn(t)&&m(n,`min-time (${this.minTime}) is later than max-time (${this.maxTime}): no time can be selected.`)}}updated(e){super.updated(e);let t=this.open&&this.interactive;if(this.floating.sync(t),!t){this.focusPanelOnOpen=!1;return}(e.has(`open`)||e.has(`disabled`))&&(this.popup?.querySelectorAll(`[aria-selected="true"]`).forEach(e=>e.scrollIntoView?.({block:`nearest`})),this.focusPanelOnOpen&&this.focusFirstColumn())}focusFirstColumn(){this.popup?.querySelector(`[role="option"][tabindex="0"]`)?.focus()}requestOpenChange(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}commit(e){this.value=e?Kt(e,this.withSeconds):``,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}handleTimeChange(e,t){let n=new Date(this.valueAsDate??Kn());if(e===`hour`)n.setHours(t);else if(e===`minute`)n.setMinutes(t);else if(e===`second`)n.setSeconds(t);else{let e=n.getHours()%12;n.setHours(t===1?e+12:e)}this.draft=null,this.commit(n)}handleInput(e){let t=e.target.value;this.draft=t,this.emit(`minerva-input`,{value:t});let n=Zt(t,this.effectiveFormat,{strict:!0,base:this.valueAsDate??void 0});n&&this.commit(n)}handleBlur(){let e=this.draft;if(e===null)return;let t=this.valueAsDate;if(e.trim()===``)t&&this.commit(null);else{let n=Zt(e,this.effectiveFormat,{strict:!1,base:t??void 0});n&&n.getTime()!==t?.getTime()&&this.commit(n)}this.draft=null}handleClear(){this.draft=null,this.commit(null),this.emit(`minerva-clear`),this.input?.focus()}handleInputClick(){this.interactive&&(this.focusPanelOnOpen=!1,this.requestOpenChange(!this.open))}handleInputKeyDown(e){e.key===`ArrowDown`&&(e.preventDefault(),this.interactive&&(this.open?this.focusFirstColumn():(this.focusPanelOnOpen=!0,this.requestOpenChange(!0)||(this.focusPanelOnOpen=!1))))}handlePanelKeyDown(e){let t=e.currentTarget,n=this.input;if(!n||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey)return;let r=this.shadowRoot?.activeElement??null;if(!r||!t.contains(r))return;let i=Hn(t);(i.length===0||(e.shiftKey?r===t||r===i[0]:r===i[i.length-1]))&&(e.preventDefault(),(e.shiftKey?n:this.shadowRoot?.querySelector(`.clearButton`)??this.tabbableAfter()??n).focus(),this.requestOpenChange(!1))}tabbableAfter(){let e=Hn(this.ownerDocument.body),t=-1;return e.forEach((e,n)=>{Fn(this,e)&&(t=n)}),t===-1?e.find(e=>!!(this.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING))??null:e.slice(t+1).find(e=>!Fn(this,e))??null}handleColumnKeyDown(e,t){let n=e.currentTarget,r=e.target,i=Array.from(n.querySelectorAll(`[role="option"]`)).filter(e=>e.getAttribute(`aria-disabled`)!==`true`),a=i.indexOf(r),o=this.popup?.querySelectorAll(`[role="listbox"]`),s=o?.length??0,c=e=>o?.[e]?.querySelector(`[tabindex="0"]`)?.focus();switch(xn(e.key,this)){case`ArrowDown`:e.preventDefault(),i[Math.min(i.length-1,a+1)]?.focus();break;case`ArrowUp`:e.preventDefault(),i[Math.max(0,a-1)]?.focus();break;case`Home`:e.preventDefault(),i[0]?.focus();break;case`End`:e.preventDefault(),i[i.length-1]?.focus();break;case`ArrowRight`:e.preventDefault(),c(Math.min(s-1,t+1));break;case`ArrowLeft`:e.preventDefault(),c(Math.max(0,t-1))}}pick(e,t){t.disabled||this.handleTimeChange(e.kind,e.toValue(t.value))}columns(e){let{t}=this.locale,n=this.use12Hours,r=jn(this.minTime),i=jn(this.maxTime),a=e.getHours(),o=e.getMinutes(),s=e.getSeconds(),c=a>=12,l=e=>n?e%12+(c?12:0):e,ee=ba(n?12:24,this.hourStep,+!!n,e=>{let t=l(e);return!!(r&&t<r.getHours()||i&&t>i.getHours())}),te=ba(60,this.minuteStep,0,e=>!!(r&&a===r.getHours()&&e<r.getMinutes()||i&&a===i.getHours()&&e>i.getMinutes())),ne=ba(60,this.secondStep,0,e=>{let t=r&&a===r.getHours()&&o===r.getMinutes(),n=i&&a===i.getHours()&&o===i.getMinutes();return!!(t&&e<r.getSeconds()||n&&e>i.getSeconds())}),u=[{kind:`hour`,label:t(`timePicker.hours`),items:ee,selected:n?a%12||12:a,toValue:l},{kind:`minute`,label:t(`timePicker.minutes`),items:te,selected:o,toValue:e=>e}];return this.withSeconds&&u.push({kind:`second`,label:t(`timePicker.seconds`),items:ne,selected:s,toValue:e=>e}),n&&u.push({kind:`ampm`,label:t(`timePicker.period`),items:[{value:0,label:`AM`,disabled:!1},{value:1,label:`PM`,disabled:!1}],selected:+!!c,toValue:e=>e}),u}renderPanel(e,t){let n=e!==null,r=this.columns(e??Kn());return A`<div
part="content"
class="popup"
popover="manual"
role="dialog"
tabindex="-1"
aria-label=${t}
@keydown=${this.handlePanelKeyDown}
>
<div class="timePickerPanel">
<div class="timeColumns">
${r.map((e,t)=>{let r=e.items.find(e=>!e.disabled)?.value,i=e.items.some(t=>t.value===e.selected&&!t.disabled)?e.selected:r;return A`<div
part="column"
class="timeColumn"
role="listbox"
aria-label=${e.label}
tabindex="-1"
data-kind=${e.kind}
@keydown=${e=>this.handleColumnKeyDown(e,t)}
>
${e.items.map(t=>{let r=n&&t.value===e.selected;return A`<div
part="item"
role="option"
aria-selected=${r?`true`:`false`}
aria-disabled=${t.disabled?`true`:k}
tabindex=${t.value===i?`0`:`-1`}
class=${F({timeUnit:!0,selected:r,disabled:t.disabled})}
@click=${()=>this.pick(e,t)}
@keydown=${n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),this.pick(e,t))}}
>
${t.label}
</div>`})}
</div>`})}
</div>
</div>
</div>`}hookStates(){let e=this.open&&!this.isDisabled&&!this.readOnly,t=e&&this.floating.isOpen?this.floating.position.placement:void 0,{side:n,align:r}=t?Wt(t):{side:void 0,align:void 0};return{state:e?`open`:`closed`,disabled:this.isDisabled,readonly:this.readOnly,invalid:this.invalid,size:this.size,side:n,align:r,placement:t}}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.readOnly,r=this.valueAsDate,i=this.label||this.aria.label||e(`timePicker.label`),a=this.draft??(r?Ln(r,this.effectiveFormat):``),o=!this.hideClearButton&&!!r&&!t&&!n;return A`<div part="root" class="timePicker">
<div
part="control"
class=${F({root:!0,outline:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
data-component="input"
>
<input
part="input"
class="field"
.value=${Un(a)}
placeholder=${this.placeholder??e(`timePicker.placeholder`)}
?disabled=${t}
?readonly=${n}
?required=${this.required}
autocomplete="off"
aria-label=${i}
aria-description=${this.aria.description??k}
aria-invalid=${this.invalid||this.aria.attr(`aria-invalid`)===`true`?`true`:k}
aria-readonly=${n?`true`:k}
@input=${this.handleInput}
@blur=${this.handleBlur}
@click=${this.handleInputClick}
@keydown=${this.handleInputKeyDown}
/>
<span class="addon end">
${o?A`<button
part="clear-button"
type="button"
class="iconButton neutral variant-ghost small circle clearButton"
aria-label=${e(`timePicker.clear`)}
@click=${this.handleClear}
>
${Re}
</button>`:A`<span part="icon" class="clockIcon" aria-hidden="true"
>${oe}</span
>`}
</span>
</div>
</div>
${this.open&&!t&&!n?this.renderPanel(r,i):k}`}},I([j({reflect:!0})],X.prototype,`name`,void 0),I([j({attribute:!1})],X.prototype,`value`,void 0),I([j({attribute:`value`})],X.prototype,`defaultValue`,void 0),I([j({type:Boolean,reflect:!0})],X.prototype,`open`,void 0),I([j({reflect:!0})],X.prototype,`format`,void 0),I([j({type:Boolean,reflect:!0,attribute:`use-12-hours`})],X.prototype,`use12Hours`,void 0),I([j()],X.prototype,`placeholder`,void 0),I([j()],X.prototype,`label`,void 0),I([j({reflect:!0})],X.prototype,`size`,void 0),I([j({type:Boolean,reflect:!0})],X.prototype,`invalid`,void 0),I([j({type:Boolean,reflect:!0,attribute:`readonly`})],X.prototype,`readOnly`,void 0),I([j({type:Boolean,reflect:!0,attribute:`hide-clear-button`})],X.prototype,`hideClearButton`,void 0),I([j({type:Boolean,reflect:!0,attribute:`hide-second`})],X.prototype,`hideSecond`,void 0),I([j({attribute:`min-time`})],X.prototype,`minTime`,void 0),I([j({attribute:`max-time`})],X.prototype,`maxTime`,void 0),I([j({type:Number,attribute:`hour-step`})],X.prototype,`hourStep`,void 0),I([j({type:Number,attribute:`minute-step`})],X.prototype,`minuteStep`,void 0),I([j({type:Number,attribute:`second-step`})],X.prototype,`secondStep`,void 0),I([w()],X.prototype,`draft`,void 0),I([E(`input`)],X.prototype,`input`,void 0),I([E(`.timePicker`)],X.prototype,`field`,void 0),I([E(`.popup`)],X.prototype,`popup`,void 0)})))()}function Sa(e){if(e===void 0)return;if(typeof e!=`string`)return e;if(!Ea())return;let t=document.getElementById(e)??void 0;return y&&!t&&m(`minerva-toast-region`,`toast(): no element with id "${e}"; the toast is shown in the default region.`),t}var Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma;function Na(){return(Na=e((()=>{_(),Ca=4e3,wa=200,Ta=`minerva-toast-region`,Ea=()=>typeof window<`u`&&typeof document<`u`,Da=class{constructor(e={}){this.toasts=[],this.listeners=new Set,this.lifecycle=new Set,this.idCounter=0,this.timers=new Map,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)}),this.subscribeLifecycle=e=>(this.lifecycle.add(e),()=>{this.lifecycle.delete(e)}),this.getSnapshot=()=>this.toasts,this.isClient=e.isClient??Ea}emit(){for(let e of[...this.listeners])e(this.toasts)}notify(e){for(let t of[...this.lifecycle])t(e)}clearTimer(e){let t=this.timers.get(e);t&&clearTimeout(t.handle),this.timers.delete(e)}schedule(e,t){this.clearTimer(e),!(t<=0)&&this.timers.set(e,{handle:setTimeout(()=>this.dismiss(e,`timeout`),t),deadline:Date.now()+t,remaining:t,paused:!1})}push(e,t){let n=e.id??++this.idCounter;if(!this.isClient())return n;let r=e.loading??!1,i={id:n,color:e.color??`info`,loading:r,title:e.title,description:e.description,duration:e.duration??(r?0:4e3),icon:e.icon,closable:e.closable??!0,action:e.action,onClose:e.onClose,state:`open`,region:t},a=this.toasts.findIndex(e=>e.id===n);if(a>=0){let e=this.toasts.slice();e[a]=i,this.toasts=e}else this.toasts=[...this.toasts,i];return this.emit(),this.schedule(n,i.duration),n}update(e,t){let n=this.toasts.find(t=>t.id===e&&t.state===`open`);if(!n)return;let r=t.loading!==void 0&&t.loading!==n.loading,i=n.loading?0:Ca,a=t.duration??(r&&n.duration===i?void 0:n.duration);this.push({...n,...t,id:e,duration:a},n.region)}dismiss(e,t=`dismiss`){this.clearTimer(e);let n=this.toasts.find(t=>t.id===e&&t.state===`open`);n&&(this.toasts=this.toasts.map(t=>t.id===e?{...t,state:`closing`}:t),this.emit(),n.onClose?.(e),this.notify({type:`close`,item:n,reason:t}),setTimeout(()=>{let t=this.toasts.find(t=>t.id===e);t?.state===`closing`&&(this.toasts=this.toasts.filter(t=>t.id!==e),this.emit(),this.notify({type:`remove`,item:t}))},200))}dismissAll(){for(let e of this.toasts)this.dismiss(e.id)}pause(e){let t=this.timers.get(e);t&&!t.paused&&(clearTimeout(t.handle),t.remaining=Math.max(0,t.deadline-Date.now()),t.paused=!0)}resume(e){let t=this.timers.get(e);t?.paused&&(t.paused=!1,t.deadline=Date.now()+t.remaining,t.handle=setTimeout(()=>this.dismiss(e,`timeout`),t.remaining))}peek(){return this.toasts}reset(){for(let e of[...this.timers.keys()])this.clearTimer(e);this.toasts=[],this.emit()}},Oa=new Da,ka=`data-minerva-auto`,Aa=new class{constructor(){this.regions=[],this.listeners=new Set,this.autoPending=!1,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)})}changed(){for(let e of[...this.listeners])e()}ordered(){return this.regions.slice().sort((e,t)=>{let n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_DISCONNECTED?0:n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}get owner(){return this.ordered()[0]??null}register(e){if(!this.regions.includes(e)){if(this.regions.push(e),!e.hasAttribute(`data-minerva-auto`))for(let e of this.regions.filter(e=>e.hasAttribute(ka)))e.remove();this.changed()}}unregister(e){let t=this.regions.indexOf(e);t<0||(this.regions.splice(t,1),this.changed())}regionOf(e){let t=e.region;return t&&this.regions.includes(t)?t:this.owner}ensureRegion(){this.autoPending||this.regions.length>0||!Ea()||(this.autoPending=!0,queueMicrotask(()=>{if(this.autoPending=!1,this.regions.length>0||!document.body||!Oa.getSnapshot().length)return;let e=document.createElement(`minerva-toast-region`);e.setAttribute(`data-minerva-auto`,``),document.body.append(e)}))}},ja=(e,t)=>{let n=n=>{y&&!Ea()&&m(`minerva-toast-region`,`toast() called without a document (server side): the toast is ignored.`);let{region:r,...i}=n,a=Sa(r??t),o=e.push(i,a);return Ea()&&Aa.ensureRegion(),o},r=(e=>n(e));return r.info=(e,t)=>n({...t,title:e,color:`info`}),r.success=(e,t)=>n({...t,title:e,color:`success`}),r.warning=(e,t)=>n({...t,title:e,color:`warning`}),r.danger=(e,t)=>n({...t,title:e,color:`danger`}),r.loading=(e,t)=>n({...t,title:e,loading:!0}),r.promise=(e,t,r)=>{let i=n({...r,title:t.loading,loading:!0,duration:0}),a=(e,t)=>n({...r,id:i,title:t,color:e,loading:!1});return e.then(e=>a(`success`,typeof t.success==`function`?t.success(e):t.success),e=>a(`danger`,typeof t.error==`function`?t.error(e):t.error)),e},r.update=(t,n)=>{let{region:r,...i}=n;e.update(t,i)},r.dismiss=t=>t===void 0?e.dismissAll():e.dismiss(t),r.region=t=>ja(e,t),r},Ma=ja(Oa)})))()}var Pa,Fa,Ia,La,Ra,za,Ba;function Va(){return(Va=e((()=>{d(),_(),f(),It(),p(),b(),x(),Qn(),kt(),Na(),M(),D(),T(),hn(),P(),Rn(),Pa={info:we,success:t,warning:Ot,danger:_t},Fa=[`top-right`,`top-left`,`top-center`,`bottom-right`,`bottom-left`,`bottom-center`],Ia=[`F8`],La={fromAttribute:e=>e===null?Ia:e.split(/[\s,+]+/).map(e=>e.trim()).filter(Boolean)},Ra=0,za=e=>{for(let t of Aa.ordered())if(t instanceof Ba&&t.handleHotkey(e))return},Ba=class extends h{constructor(...e){super(...e),this.position=`top-right`,this.max=1/0,this.noPauseOnHover=!1,this.hotkey=Ia,this.items=[],this.locale=new S(this),this.aria=new u(this),this.cleanups=[],this.returnFocus=null,this.refresh=()=>{if(!this.isConnected)return;let e=new Set,t=[],n=Oa.getSnapshot();for(let r=n.length-1;r>=0;--r){let i=n[r];e.has(i.id)||Aa.regionOf(i)!==this||(e.add(i.id),t.unshift(i))}let r=t.filter(e=>e.state===`open`),i=r.slice(0,Math.max(0,r.length-this.max));if(i.length>0){for(let e of i)Oa.dismiss(e.id,`overflow`);return}let a=new Set(this.items.map(e=>e.id)),o=t.some(e=>!a.has(e.id));this.items=t,o&&this.raise()},this.raise=()=>{let e=this.viewport;e&&!Fn(e,mn())&&(Rt(e),Ke(e))},this.onLifecycle=e=>{Aa.regionOf(e.item)===this&&(e.type===`close`?this.emit(`minerva-close`,{id:e.item.id,reason:e.reason}):this.emit(`minerva-after-close`,{id:e.item.id}))},this.onViewportFocusIn=e=>{let t=e.relatedTarget,n=e.currentTarget;t&&!Fn(n,t)&&(this.returnFocus=t)},this.onViewportFocusOut=e=>{let t=e.currentTarget;Fn(t,e.relatedTarget)||t.removeAttribute(`tabindex`)}}static{this.tagName=Ta}static{this.styles=[g,rr,O`
:host{
display: contents;
}


.progressIndicator{
display: inline-flex;
width: 100%;
height: 100%;
color: currentColor;
}
.spinner{
display: inline-flex;
width: 100%;
height: 100%;
animation: spin 1s linear infinite;
}
@keyframes spin{
to{
transform: rotate(360deg);
}
}
@media (prefers-reduced-motion: reduce){
.spinner{
animation-duration: 2s;
}
}
`,C(ft)]}get toast(){return this.boundApi??=ja(Oa,this),this.boundApi}connectedCallback(){super.connectedCallback(),this.cleanups=[Oa.subscribe(()=>this.refresh()),Aa.subscribe(()=>this.refresh()),Oa.subscribeLifecycle(this.onLifecycle)];let e=this.ownerDocument;e.addEventListener(`minerva-after-open`,this.raise),this.cleanups.push(()=>e.removeEventListener(`minerva-after-open`,this.raise)),Ra++===0&&e.addEventListener(`keydown`,za),this.cleanups.push(()=>{--Ra===0&&e.removeEventListener(`keydown`,za)}),Aa.register(this),this.refresh(),this.hasUpdated&&Ke(this.viewport)}disconnectedCallback(){super.disconnectedCallback();for(let e of this.cleanups)e();this.cleanups=[],Aa.unregister(this),Rt(this.viewport)}handleHotkey(e){let t=this.viewport;if(!t||!kn(e,this.hotkey)||!t.querySelector(`[data-toast-state="open"]`))return!1;e.preventDefault();let n=mn();return n&&n!==this.ownerDocument.body&&!Fn(t,n)&&(this.returnFocus=n),t.setAttribute(`tabindex`,`-1`),Sn(t),!0}focus(e){let t=this.viewport;t&&(t.setAttribute(`tabindex`,`-1`),t.focus(e))}willUpdate(e){y&&e.has(`position`)&&!Fa.includes(this.position)&&m(`minerva-toast-region`,`invalid position "${this.position}" (expected ${Fa.join(` | `)}).`)}firstUpdated(){Ke(this.viewport)}updated(e){e.has(`max`)&&e.get(`max`)!==void 0&&queueMicrotask(()=>this.refresh())}moveFocusFrom(e){let t=this.viewport;if(!t)return;let n=Array.from(t.querySelectorAll(`:scope > [data-toast-state="open"]`)).filter(t=>t!==e),r=n.find(t=>e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)??n[n.length-1];if(r){let e=r.querySelector(`[data-toast-close]`)??Hn(r)[0];if(Sn(e))return}let i=this.returnFocus;i?.isConnected&&!Fn(t,i)&&Sn(i)||Sn(Vn(this))||(t.setAttribute(`tabindex`,`-1`),Sn(t,{preventScroll:!0}))}close(e,t,n){Fn(t,mn())&&this.moveFocusFrom(t),Oa.dismiss(e.id,n)}pause(e){this.noPauseOnHover||Oa.pause(e.id)}resume(e){this.noPauseOnHover||Oa.resume(e.id)}renderIcon(e){if(e.icon===null)return k;let t=e.icon===void 0?e.loading?A`<div class="progressIndicator current" aria-hidden="true">
<span class="spinner small">${ne}</span>
</div>`:Pa[e.color]:e.icon;return A`<span class="icon" part="icon" aria-hidden="true"
>${t}</span
>`}renderItem(e){let t=e.state===`closing`,n=e=>e.currentTarget.closest(`.toast`);return A`<div
part="toast"
class=${F({toast:!0,[e.color]:!0})}
data-toast-state=${t?`closing`:`open`}
data-toast-loading=${e.loading?`true`:k}
role=${e.color===`danger`&&!e.loading?`alert`:`status`}
style=${N(e.duration>0?{"--toast-duration":`${e.duration}ms`}:{})}
@mouseenter=${()=>this.pause(e)}
@mouseleave=${()=>this.resume(e)}
@focusin=${()=>this.pause(e)}
@focusout=${t=>{Fn(n(t),t.relatedTarget)||this.resume(e)}}
@keydown=${r=>{r.key!==`Escape`||t||r.isComposing||(r.preventDefault(),r.stopPropagation(),this.close(e,n(r),`escape`))}}
>
${this.renderIcon(e)}
<div class="content">
${e.title?A`<div class="title" part="title">${e.title}</div>`:k}
${e.description?A`<div class="description" part="description">
${e.description}
</div>`:k}
</div>
${e.action?A`<button
type="button"
class="action"
part="action"
@click=${t=>{e.action?.onClick(),this.close(e,n(t),`action`)}}
>
${e.action.label}
</button>`:k}
${e.closable?A`<button
type="button"
class="close"
part="close-button"
aria-label=${this.closeLabel??this.locale.t(`toast.close`)}
data-toast-close=""
@click=${t=>this.close(e,n(t),`close-button`)}
>
${Re}
</button>`:k}
${e.duration>0&&!t?A`<span
class="progress"
part="progress"
aria-hidden="true"
></span>`:k}
</div>`}render(){let e=cn(this.hotkey),t=this.aria.label??(e?this.locale.t(`toast.regionWithHotkey`,{hotkey:e}):this.locale.t(`toast.region`)),n=Fa.includes(this.position)?this.position:`top-right`;return A`<div
part="root"
class=${F({viewport:!0,[n]:!0})}
popover="manual"
role="region"
aria-label=${t}
dir=${rn(this)}
@focusin=${this.onViewportFocusIn}
@focusout=${this.onViewportFocusOut}
>
${vn(this.items,e=>e.id,e=>this.renderItem(e))}
</div>`}},I([j({reflect:!0})],Ba.prototype,`position`,void 0),I([j({type:Number})],Ba.prototype,`max`,void 0),I([j({type:Boolean,attribute:`no-pause-on-hover`})],Ba.prototype,`noPauseOnHover`,void 0),I([j({attribute:`close-label`})],Ba.prototype,`closeLabel`,void 0),I([j({attribute:`hotkey`,converter:La})],Ba.prototype,`hotkey`,void 0),I([w()],Ba.prototype,`items`,void 0),I([E(`.viewport`)],Ba.prototype,`viewport`,void 0)})))()}var Ha,Ua,Wa,Ga,Ka,qa,Z;function Ja(){return(Ja=e((()=>{d(),_(),It(),b(),x(),Qn(),gt(),M(),D(),T(),P(),Ha=6,Ua=300,Wa=200,Ga=0,Ka={fromAttribute(e){if(!e)return;let t=e.trim().split(/[\s,]+/).map(Number);return t.length===2&&t.every(Number.isFinite)?[t[0],t[1]]:void 0},toAttribute(e){return e?e.join(` `):null}},qa=class extends h{constructor(...e){super(...e),this.skipDelay=300,this.lastClosedAt=0}static{this.tagName=`minerva-tooltip-provider`}static{this.styles=[g,O`
:host{
display: contents;
}
`]}markClosed(){this.lastClosedAt=Date.now()}shouldSkipDelay(){return Date.now()-this.lastClosedAt<this.skipDelay}render(){return A`<slot></slot>`}},I([j({type:Number,attribute:`enter-delay`})],qa.prototype,`enterDelay`,void 0),I([j({type:Number,attribute:`leave-delay`})],qa.prototype,`leaveDelay`,void 0),I([j({type:Number,attribute:`skip-delay`})],qa.prototype,`skipDelay`,void 0),Z=class e extends h{constructor(...e){super(...e),this.content=``,this.open=!1,this.placement=`top`,this.color=`neutral`,this.variant=`solid`,this.shape=`default`,this.animation=`fade`,this.arrow=!1,this.disabled=!1,this.followCursor=!1,this.positioned=!1,this.aria=new u(this),this.grace=sn({timeout:0}),this.cursor=null,this.described=null,this.describedPrev=null,this.floating=new lr(this,()=>{let e=this.placement,t=e.startsWith(`top`)||e.startsWith(`bottom`),n=this.arrow?Ha:0,r=this.offset;return{placement:e,offset:r?{mainAxis:(t?r[1]:r[0])+n,crossAxis:t?r[0]:r[1]}:{mainAxis:8+n},arrowElement:this.arrow?this.arrowEl:null,autoUpdate:this.followCursor?{animationFrame:!0}:void 0,anchor:()=>this.anchor(),floating:()=>this.panel,branches:()=>[this.wrapper],dismissOnPointerDownOutside:!1,dismissOnFocusOutside:!1,focusable:!1,onDismiss:()=>{this.clearTimers(),this.requestOpen(!1)},onPosition:e=>this.handlePosition(e)}}),this.handleMouseEnter=e=>{if(this.disabled)return;this.followCursor&&(this.cursor={x:e.clientX,y:e.clientY}),this.clearTimers();let t=this.resolvedEnterDelay;if(t<=0||this.provider()?.shouldSkipDelay()){this.requestOpen(!0);return}this.enterTimer=setTimeout(()=>this.requestOpen(!0),t)},this.handleMouseLeave=e=>{if(this.disabled)return;this.clearTimers();let t=this.panel?.getBoundingClientRect();if(this.open&&!this.followCursor&&t&&t.width>0&&t.height>0){this.grace.start({x:e.clientX,y:e.clientY},t,Wt(this.currentPlacement).side),this.leaveTimer=setTimeout(()=>this.requestOpen(!1),Math.max(this.resolvedLeaveDelay,Ua));return}this.scheduleHide()},this.handlePanelMouseEnter=()=>{this.disabled||this.clearTimers()},this.handlePanelMouseLeave=()=>{this.disabled||this.followCursor||this.scheduleHide()},this.handleDocumentPointerMove=e=>{if(!this.grace.getArea())return;let t=e.composedPath();this.wrapper&&t.includes(this.wrapper)||this.panel&&t.includes(this.panel)||this.grace.isInGraceArea({x:e.clientX,y:e.clientY})||(this.grace.clear(),this.scheduleHide())},this.handleDocumentMouseMove=e=>{this.cursor={x:e.clientX,y:e.clientY}},this.handleFocusIn=e=>{this.disabled||this.inPanel(e)||(this.clearTimers(),this.requestOpen(!0))},this.handleFocusOut=e=>{this.disabled||this.inPanel(e)||(this.clearTimers(),this.requestOpen(!1))},this.listening=!1,this.handleSlotChange=()=>this.requestUpdate()}static{this.tagName=`minerva-tooltip`}static{this.styles=[g,rr,O`
:host{
display: inline-flex;
}
`,C(xt)]}show(){this.open=!0}hide(){this.open=!1}toggle(){this.open=!this.open}get currentPlacement(){return this.positioned?this.floating.position.placement:this.placement}get visible(){return this.open&&!this.disabled}provider(){let e=je(this,`minerva-tooltip-provider`);return e instanceof qa?e:null}get resolvedEnterDelay(){return this.enterDelay??this.provider()?.enterDelay??Wa}get resolvedLeaveDelay(){return this.leaveDelay??this.provider()?.leaveDelay??Ga}triggerElement(){return Array.from(this.children).find(e=>!e.hasAttribute(`slot`))??null}get text(){return this.aria.label||(this.content.trim()?this.content.trim():Array.from(this.children).filter(e=>e.getAttribute(`slot`)===`content`).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `))}anchor(){return this.followCursor&&this.cursor?{getBoundingClientRect:()=>{let{x:e,y:t}=this.cursor??{x:0,y:0};return DOMRect.fromRect({x:e,y:t,width:0,height:0})}}:this.wrapper}requestOpen(e){e!==this.open&&(e||this.provider()?.markClosed(),this.emit(`minerva-open-change`,{open:e},{cancelable:!0})&&(this.open=e))}clearTimers(){clearTimeout(this.enterTimer),clearTimeout(this.leaveTimer),this.grace.clear()}scheduleHide(){clearTimeout(this.leaveTimer),this.leaveTimer=setTimeout(()=>this.requestOpen(!1),this.resolvedLeaveDelay)}handlePosition(e){let t=this.arrowEl;t&&(t.style.left=e.arrow.x==null?``:`${e.arrow.x}px`,t.style.top=e.arrow.y==null?``:`${e.arrow.y}px`),this.positioned||=!0}inPanel(e){return!!this.panel&&e.composedPath().includes(this.panel)}connectedCallback(){super.connectedCallback(),this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`focusin`,this.handleFocusIn),this.removeEventListener(`focusout`,this.handleFocusOut),this.listenDocument(!1),clearTimeout(this.enterTimer),clearTimeout(this.leaveTimer),this.restoreDescription()}listenDocument(e){e!==this.listening&&(this.listening=e,e?(document.addEventListener(`pointermove`,this.handleDocumentPointerMove),document.addEventListener(`mousemove`,this.handleDocumentMouseMove)):(document.removeEventListener(`pointermove`,this.handleDocumentPointerMove),document.removeEventListener(`mousemove`,this.handleDocumentMouseMove)))}firstUpdated(){y&&setTimeout(()=>this.checkUsage())}checkUsage(){if(!this.isConnected)return;this.text||m(e.tagName,`has no content: set the "content" attribute, aria-label or slot="content".`);let t=this.triggerElement();!this.disabled&&t&&Hn(t,{includeContainer:!0}).length===0&&m(e.tagName,`the trigger is not focusable, so keyboard users cannot reach the tooltip; wrap a button / link or add tabindex="0".`)}willUpdate(e){(e.has(`open`)||e.has(`disabled`))&&(!this.open||this.disabled)&&(this.positioned=!1,this.grace.clear())}updated(){let e=this.visible;this.floating.sync(e),this.listenDocument(e),this.syncDescription(e)}syncDescription(e){let t=e?this.text:``,n=t?this.triggerElement():null;if(this.described&&this.described!==n&&this.restoreDescription(),!n)return;this.described!==n&&(this.described=n,this.describedPrev=n.getAttribute(`aria-description`));let r=this.describedPrev?`${this.describedPrev} ${t}`:t;n.getAttribute(`aria-description`)!==r&&n.setAttribute(`aria-description`,r)}restoreDescription(){let e=this.described;e&&(this.describedPrev===null?e.removeAttribute(`aria-description`):e.setAttribute(`aria-description`,this.describedPrev),this.described=null,this.describedPrev=null)}hookStates(){let e=this.currentPlacement;return{state:this.visible?`open`:`closed`,disabled:this.disabled,color:this.color,variant:this.variant,shape:this.shape,...Wt(e),placement:e}}render(){let e=this.visible,t=this.currentPlacement,n=e&&!this.triggerElement();return A`<div
class="tooltipTrigger"
part="trigger"
aria-describedby=${n?`tooltip`:k}
@mouseenter=${this.handleMouseEnter}
@mouseleave=${this.handleMouseLeave}
>
<slot @slotchange=${this.handleSlotChange}></slot>
</div>
${e?A`<div
id="tooltip"
part="content"
popover="manual"
role="tooltip"
dir=${rn(this)}
aria-label=${this.aria.label??k}
data-placement=${t}
class=${F({tooltip:!0,[this.color]:!0,[this.variant]:!0,[this.shape]:!0,[`animation-${this.animation}`]:!0,followCursor:this.followCursor,arrow:this.arrow,show:this.positioned})}
@mouseenter=${this.handlePanelMouseEnter}
@mouseleave=${this.handlePanelMouseLeave}
>
<slot name="content" @slotchange=${this.handleSlotChange}
>${this.content}</slot
>${this.arrow?A`<div class="tooltipArrow" part="arrow"></div>`:k}
</div>`:k}`}},I([j()],Z.prototype,`content`,void 0),I([j({type:Boolean,reflect:!0})],Z.prototype,`open`,void 0),I([j({reflect:!0})],Z.prototype,`placement`,void 0),I([j({reflect:!0})],Z.prototype,`color`,void 0),I([j({reflect:!0})],Z.prototype,`variant`,void 0),I([j({reflect:!0})],Z.prototype,`shape`,void 0),I([j({reflect:!0})],Z.prototype,`animation`,void 0),I([j({type:Boolean,reflect:!0})],Z.prototype,`arrow`,void 0),I([j({type:Boolean,reflect:!0})],Z.prototype,`disabled`,void 0),I([j({type:Number,attribute:`enter-delay`})],Z.prototype,`enterDelay`,void 0),I([j({type:Number,attribute:`leave-delay`})],Z.prototype,`leaveDelay`,void 0),I([j({converter:Ka})],Z.prototype,`offset`,void 0),I([j({type:Boolean,reflect:!0,attribute:`follow-cursor`})],Z.prototype,`followCursor`,void 0),I([E(`.tooltipTrigger`)],Z.prototype,`wrapper`,void 0),I([E(`[part=content]`)],Z.prototype,`panel`,void 0),I([E(`.tooltipArrow`)],Z.prototype,`arrowEl`,void 0),I([w()],Z.prototype,`positioned`,void 0)})))()}var Ya,Q;function Xa(){return(Xa=e((()=>{d(),_(),f(),p(),b(),x(),bt(),At(),Xn(),Je(),M(),D(),T(),P(),Rn(),Ya=0,Q=class e extends v{constructor(...e){super(...e),this.label=``,this.items=[],this.accept=`*`,this.multiple=!1,this.replace=!1,this.loading=!1,this.removable=!1,this.retryable=!1,this.error=``,this.dragging=!1,this.uploadId=`upload-${Ya++}`,this.nextId=0,this.pendingRemoval=null,this.locale=new S(this),this.aria=new u(this,()=>this.labels)}static{this.tagName=`minerva-upload`}static{this.dependencies=[Jn]}static{this.styles=[g,O`
:host{
display: block;
min-width: 0;
}
`,C(et),C(Et),O`

.error{
display: flex;
align-items: center;
gap: var(--space-2);
padding: var(--space-3) var(--space-4);
border: 1px solid var(--danger-color);
border-radius: var(--radius-md);
background: var(--danger-color-subtle);
color: var(--danger-color-text,var(--danger-color));
}
`]}get files(){return this.items.flatMap(e=>e.file?[e.file]:[])}get resolvedMaxCount(){return this.maxCount??(this.multiple?50:1)}get existingCount(){return this.replace&&!this.multiple?0:this.items.length}get blocked(){return this.isDisabled||this.loading||this.existingCount>=this.resolvedMaxCount}focus(e){this.renderRoot.querySelector(`[part=select-button]`)?.focus(e)}showPicker(){this.blocked||this.input?.click()}getFormValue(){if(!this.name)return null;let e=new FormData;for(let t of this.files)e.append(this.name,t);return e}getValidity(){return this.required&&this.files.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.fileMissing`),anchor:this.renderRoot.querySelector(`[part=select-button]`)??null}:{flags:{},message:``}}resetFormValue(){this.items=[],this.error=``}restoreFormState(e){e instanceof FormData&&(this.items=e.getAll(this.name).filter(e=>e instanceof File).map(e=>this.toItem(e)))}willUpdate(t){y&&(t.has(`maxCount`)||t.has(`multiple`))&&!this.multiple&&this.maxCount!==void 0&&this.maxCount>1&&m(e.tagName,`max-count (${this.maxCount}) has no effect without multiple: one file is picked at a time.`)}updated(e){super.updated(e);let t=this.pendingRemoval;if(!t||this.items.some(e=>e.id===t.id))return;this.pendingRemoval=null;let n=t.nextId?Array.from(this.renderRoot.querySelectorAll(`[data-item-id]`)).find(e=>e.dataset.itemId===t.nextId)?.querySelector(`[part=remove-button]`):null;n?n.focus():this.focus()}toItem(e){return{id:`${this.uploadId}-${this.nextId++}`,name:e.name,status:`done`,file:e}}select(e){if(this.blocked||e.length===0)return;let{t}=this.locale,n=this.texts,r=this.resolvedMaxCount;if(!this.multiple&&e.length>1||e.length+this.existingCount>r){this.error=n?.tooMany?.(r)??t(`upload.tooMany`,{count:r});return}let i=e.find(e=>!zn(e,this.accept));if(i){this.error=n?.invalidType?.(i.name)??t(`upload.invalidType`,{name:i.name});return}let a=this.maxSize,o=a===void 0?void 0:e.find(e=>e.size>a);if(o){this.error=n?.tooLarge?.(o.name)??t(`upload.tooLarge`,{name:o.name});return}if(this.error=``,!this.emit(`minerva-files-selected`,{files:e},{cancelable:!0}))return;let s=e.map(e=>this.toItem(e));this.items=this.replace&&!this.multiple?s:[...this.items,...s],this.notifyChange()}notifyChange(){this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.items})}removeItem(e){if(this.isDisabled)return;let t=this.items.indexOf(e),n=this.items[t+1]??this.items[t-1];this.pendingRemoval={id:e.id,nextId:n?.id},this.emit(`minerva-remove`,{item:e},{cancelable:!0})&&(this.items=this.items.filter(t=>t!==e),this.notifyChange())}retry(e){this.isDisabled||this.loading||this.emit(`minerva-retry`,{item:e})}handleInputChange(){let e=Array.from(this.input.files??[]);this.input.value=``,this.select(e)}handleDragOver(e){e.preventDefault(),this.blocked||(this.dragging=!0)}handleDragLeave(e){e.currentTarget.contains(e.relatedTarget)||(this.dragging=!1)}handleDrop(e){e.preventDefault(),this.dragging=!1,this.select(Array.from(e.dataTransfer?.files??[]))}statusText(e){let{t}=this.locale,n=this.texts;return e.status===`uploading`?n?.uploading??t(`upload.uploading`):e.status===`error`?e.error||(n?.failed??t(`upload.failed`)):n?.done??t(`upload.done`)}hookStates(){return{disabled:this.isDisabled,loading:this.loading,dragging:this.dragging&&!this.blocked}}render(){let{t:e}=this.locale,t=this.texts,n=this.blocked,r=this.isDisabled,i=this.label||this.aria.label;return A`<div
part="root"
class="upload"
role="group"
aria-labelledby=${this.label?`label`:k}
aria-label=${!this.label&&i?i:k}
aria-description=${this.aria.description??k}
aria-busy=${this.loading?`true`:`false`}
>
<span id="label" part="label" class="label">${this.label}</span>
<div
part="dropzone"
class=${F({dropzone:!0,dragging:this.dragging&&!n})}
@dragover=${this.handleDragOver}
@dragleave=${this.handleDragLeave}
@drop=${this.handleDrop}
>
<minerva-button
part="select-button"
variant="outline"
?disabled=${n}
?loading=${this.loading}
@click=${()=>this.input.click()}
>
<span slot="start">${De}</span>
${t?.select??e(`upload.select`)}
</minerva-button>
<input
type="file"
hidden
tabindex="-1"
aria-label=${i||k}
?disabled=${n}
accept=${this.accept}
?multiple=${this.multiple}
@change=${this.handleInputChange}
/>
</div>
${this.error?A`<div part="error" class="error" role="alert">
${this.error}
</div>`:k}
${this.items.length>0?A`<ul part="list" class="list">
${vn(this.items,e=>e.id,n=>A`<li part="item" class="item" data-item-id=${n.id}>
${n.previewUrl?A`<img
src=${n.previewUrl}
alt=""
class="preview"
/>`:k}
<div class="info">
<span>${n.name}</span>
<span
role=${n.status===`error`?`alert`:`status`}
class=${F({status:!0,statusError:n.status===`error`})}
>${this.statusText(n)}</span
>
</div>
<div class="actions">
${n.status===`error`&&this.retryable?A`<button
part="retry-button"
type="button"
class=${F({iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,disabled:r||this.loading})}
aria-label=${t?.retry?.(n.name)??e(`upload.retry`,{name:n.name})}
?disabled=${r||this.loading}
@click=${()=>this.retry(n)}
>
${ge}
</button>`:k}
${this.removable?A`<button
part="remove-button"
type="button"
class=${F({iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,disabled:r})}
aria-label=${t?.remove?.(n.name)??e(`upload.remove`,{name:n.name})}
?disabled=${r}
@click=${()=>this.removeItem(n)}
>
${Re}
</button>`:k}
</div>
</li>`)}
</ul>`:k}
</div>`}},I([j()],Q.prototype,`label`,void 0),I([j({attribute:!1})],Q.prototype,`items`,void 0),I([j()],Q.prototype,`accept`,void 0),I([j({type:Boolean,reflect:!0})],Q.prototype,`multiple`,void 0),I([j({type:Boolean})],Q.prototype,`replace`,void 0),I([j({type:Number,attribute:`max-count`})],Q.prototype,`maxCount`,void 0),I([j({type:Number,attribute:`max-size`})],Q.prototype,`maxSize`,void 0),I([j({type:Boolean,reflect:!0})],Q.prototype,`loading`,void 0),I([j({type:Boolean})],Q.prototype,`removable`,void 0),I([j({type:Boolean})],Q.prototype,`retryable`,void 0),I([j({attribute:!1})],Q.prototype,`texts`,void 0),I([w()],Q.prototype,`error`,void 0),I([w()],Q.prototype,`dragging`,void 0),I([E(`input[type=file]`)],Q.prototype,`input`,void 0)})))()}var $;function Za(){return(Za=e((()=>{d(),_(),f(),p(),b(),x(),at(),vt(),M(),D(),T(),hn(),P(),Rn(),$=class e extends h{constructor(...e){super(...e),this.items=[],this.itemPadding=8,this.overscan=5,this.loadMoreThreshold=100,this.highPerformance=!1,this.loading=!1,this.clickable=!1,this.scrollOffset=0,this.containerHeight=0,this.measuredHeight=0,this.focusedId=null,this.aria=new u(this),this.locale=new S(this),this.resizeObserver=null,this.measureObserver=null,this.lastScrollTop=0,this.loadingMore=!1}static{this.tagName=`minerva-virtual-list`}static{this.styles=[g,O`
:host{
display: block;
}
.wave{
display: inline-flex;
}
`,C(Tt),C(We)]}get scrollContainer(){return this.container??null}scrollToIndex(e){let t=this.container,n=this.rowHeight;t&&n&&(t.scrollTop=Math.max(0,e)*n,this.updateScroll(t.scrollTop))}get rowHeight(){return this.itemHeight?this.itemHeight:this.measuredHeight>0?this.measuredHeight+this.itemPadding*2:0}get needsMeasure(){return!this.itemHeight&&this.measuredHeight===0&&this.items.length>0}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.resizeObserver=null,this.measureObserver?.disconnect(),this.measureObserver=null,this.cancelScheduled()}firstUpdated(){this.observeContainer()}reconnectedCallback(){super.reconnectedCallback(),this.observeContainer()}observeContainer(){let e=this.container;e&&(this.containerHeight=e.clientHeight,!(this.resizeObserver||typeof ResizeObserver>`u`)&&(this.resizeObserver=new ResizeObserver(e=>{for(let t of e)this.containerHeight=t.contentRect.height}),this.resizeObserver.observe(e)))}willUpdate(e){(e.has(`items`)||e.has(`loading`))&&(this.loadingMore=!1),this.focusedId!==null&&e.has(`items`)&&!this.items.some(e=>e.id===this.focusedId)&&(this.focusedId=null)}updated(){this.syncMeasure(),y&&this.items.length>0&&!this.renderItem&&m(e.tagName,`set the renderItem property (a function returning the content of a row); rows show the item id meanwhile.`),y&&this.maxHeight===void 0&&m(e.tagName,`set max-height (pixels): without a bounded height the list cannot scroll, so every row is rendered.`)}syncMeasure(){let e=this.needsMeasure?this.measureElement:void 0;if(!e){this.measureObserver?.disconnect(),this.measureObserver=null;return}let t=()=>{let t=e.offsetHeight;t>0&&(this.measuredHeight=t)};t(),!(this.measureObserver||typeof ResizeObserver>`u`)&&(this.measureObserver=new ResizeObserver(t),this.measureObserver.observe(e))}cancelScheduled(){this.raf!==void 0&&(cancelAnimationFrame(this.raf),this.raf=void 0),this.idle!==void 0&&(typeof cancelIdleCallback==`function`&&cancelIdleCallback(this.idle),this.idle=void 0)}schedule(e){if(!this.highPerformance){e();return}this.cancelScheduled(),this.raf=requestAnimationFrame(()=>{this.raf=void 0,typeof requestIdleCallback==`function`?this.idle=requestIdleCallback(()=>{this.idle=void 0,e()},{timeout:100}):e()})}updateScroll(e){this.scrollOffset=e}handleScroll(e){let{scrollTop:t,scrollHeight:n,clientHeight:r}=e.currentTarget,i=t>this.lastScrollTop;this.lastScrollTop=t,this.schedule(()=>{this.updateScroll(t),i&&!this.loadingMore&&!this.loading&&n-t-r<this.loadMoreThreshold&&n>r&&(this.loadingMore=!0,this.emit(`minerva-load-more`))})}visibleWindow(){let e=this.rowHeight;if(!e)return[];let{start:t,end:n}=Pn({scrollTop:this.scrollOffset,viewportHeight:this.containerHeight,itemHeight:e,itemCount:this.items.length,overscan:this.overscan}),r=[];for(let i=t;i<n;i++)r.push({index:i,start:i*e});if(this.focusedId!==null){let i=this.items.findIndex(e=>e.id===this.focusedId);if(i>=0&&(i<t||i>=n)){let n={index:i,start:i*e};i<t?r.unshift(n):r.push(n)}}return r}renderContent(e,t){return this.renderItem?this.renderItem(e,t):String(e.id)}activate(e,t){this.emit(`minerva-item-click`,{item:e,index:t})}handleRowKeyDown(e,t,n){e.composedPath()[0]===e.currentTarget&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.activate(t,n))}handleRowFocusOut(e){let t=e.currentTarget,n=e.relatedTarget;(!n||!t.contains(n))&&(this.focusedId=null)}hookStates(){return{loading:this.loading}}render(){let e=this.rowHeight,t=this.aria.label??k,n=this.visibleWindow(),r=this.items.length;return A`<div
class="virtualList"
part="root"
role="region"
tabindex="0"
aria-label=${t}
aria-busy=${this.loading?`true`:k}
style=${N({maxHeight:this.maxHeight===void 0?void 0:`${this.maxHeight}px`,overflow:`auto`,position:`relative`})}
@scroll=${this.handleScroll}
>
${this.needsMeasure?A`<div class="measureItem" aria-hidden="true">
${this.renderContent(this.items[0],0)}
</div>`:k}
<div
class="virtualListContent"
part="list"
role="list"
aria-label=${t}
style=${N({height:e?`${r*e}px`:`auto`,position:`relative`,willChange:`transform`})}
>
${vn(n,e=>this.items[e.index].id,t=>{let n=this.items[t.index];return A`<div
part="item"
role="listitem"
class=${F({virtualListItem:!0,clickable:this.clickable})}
style=${N({position:`absolute`,top:`0`,transform:`translateY(${t.start}px)`,width:`100%`,height:`${e}px`,willChange:`transform`,padding:`${this.itemPadding}px`})}
tabindex=${this.clickable?`0`:k}
aria-setsize=${r}
aria-posinset=${t.index+1}
@click=${this.clickable?()=>this.activate(n,t.index):k}
@keydown=${this.clickable?e=>this.handleRowKeyDown(e,n,t.index):k}
@focusin=${()=>this.focusedId=n.id}
@focusout=${this.handleRowFocusOut}
>
${this.renderContent(n,t.index)}
</div>`})}
</div>
${this.loading?A`<div class="loadingWrapper" part="loading">
<div
class="progressIndicator primary"
role="progressbar"
aria-label=${this.locale.t(`common.loading`)}
>
<div class="waveContainer small">
<span class="wave" aria-hidden="true">${wt}</span>
</div>
</div>
</div>`:k}
</div>`}},I([j({attribute:!1})],$.prototype,`items`,void 0),I([j({attribute:!1})],$.prototype,`renderItem`,void 0),I([j({type:Number,attribute:`item-height`})],$.prototype,`itemHeight`,void 0),I([j({type:Number,attribute:`item-padding`})],$.prototype,`itemPadding`,void 0),I([j({type:Number})],$.prototype,`overscan`,void 0),I([j({type:Number,attribute:`max-height`})],$.prototype,`maxHeight`,void 0),I([j({type:Number,attribute:`load-more-threshold`})],$.prototype,`loadMoreThreshold`,void 0),I([j({type:Boolean,attribute:`high-performance`})],$.prototype,`highPerformance`,void 0),I([j({type:Boolean,reflect:!0})],$.prototype,`loading`,void 0),I([j({type:Boolean,reflect:!0})],$.prototype,`clickable`,void 0),I([w()],$.prototype,`scrollOffset`,void 0),I([w()],$.prototype,`containerHeight`,void 0),I([w()],$.prototype,`measuredHeight`,void 0),I([w()],$.prototype,`focusedId`,void 0),I([E(`.virtualList`)],$.prototype,`container`,void 0),I([E(`.measureItem`)],$.prototype,`measureElement`,void 0)})))()}export{vi as $,ea as A,Sr as At,zi as B,L as Bt,va as C,B as Ct,ua as D,Or as Dt,la as E,z as Et,Xi as F,_r as Ft,Mi as G,Vi as H,q as I,mr as It,Oi as J,ki as K,Ki as L,yr as Lt,Yi as M,R as Mt,Zi as N,br as Nt,Y as O,Cr as Ot,Qi as P,vr as Pt,_i as Q,Hi as R,gr as Rt,da as S,Fr as St,ya as T,Nr as Tt,Bi as U,Ri as V,ji as W,G as X,wi as Y,mi as Z,Da as _,zr as _t,qa as a,ai as at,X as b,Br as bt,Ba as c,ri as ct,ja as d,Jr as dt,hi as et,Ma as f,H as ft,Ca as g,Ir as gt,Aa as h,V as ht,Q as i,di as it,J as j,xr as jt,ca as k,wr as kt,Va as l,ni as lt,Na as m,Wr as mt,$ as n,W as nt,Z as o,U as ot,Ta as p,Ur as pt,K as q,Xa as r,fi as rt,Ja as s,oi as st,Za as t,gi as tt,ka as u,Gr as ut,wa as v,Vr as vt,_a as w,Mr as wt,xa as x,Rr as xt,Oa as y,Lr as yt,Ui as z,pr as zt};