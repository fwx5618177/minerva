import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{A as t,An as n,B as r,Bn as i,Bt as a,C as o,Cr as s,D as c,E as l,F as u,Ft as d,G as ee,H as te,Hn as f,I as ne,In as re,It as ie,J as ae,Jn as oe,K as se,L as ce,M as le,N as ue,Nn as de,Nt as fe,O as pe,On as me,P as he,Pt as ge,Q as _e,Qn as ve,R as ye,Rn as be,S as xe,Sn as Se,Sr as p,T as Ce,Tn as we,U as Te,V as Ee,Vn as De,W as Oe,Wn as ke,X as Ae,Xn as je,Y as Me,Yn as Ne,Z as Pe,Zn as Fe,_ as Ie,_n as m,a as Le,an as Re,ar as h,b as ze,br as Be,bt as Ve,c as He,cn as Ue,cr as We,d as Ge,dn as Ke,dr as g,dt as qe,er as Je,f as Ye,fn as Xe,fr as _,ft as Ze,g as Qe,gr as $e,h as et,hr as v,ir as y,it as tt,j as nt,jn as rt,k as it,l as at,ln as ot,lr as st,m as ct,mr as b,mt as lt,nr as ut,o as dt,on as ft,p as pt,pt as mt,q as ht,qn as gt,rr as x,rt as _t,s as vt,sn as S,tr as yt,u as bt,ur as C,v as xt,vn as w,vr as St,w as Ct,x as wt,xn as Tt,xr as Et,y as Dt,yt as Ot,z as kt,zn as At,zt as jt}from"./minerva-web-components-BPjqS5uR.js";import{A as T,B as E,C as D,Ct as Mt,D as O,Dt as Nt,E as k,Et as Pt,G as Ft,I as A,J as It,L as j,M,N,Nt as Lt,Ot as Rt,Pt as zt,S as P,St as Bt,Tt as Vt,Ut as Ht,W as Ut,Y as Wt,_ as Gt,b as Kt,ct as qt,d as Jt,et as Yt,ht as Xt,it as Zt,jt as Qt,kt as $t,ot as en,pt as tn,u as nn,w as F,y as rn}from"./minerva-web-components-BCL_6rcP.js";import{t as I}from"./minerva-web-components-DB7tn7hP.js";import{At as an,Ft as on,It as sn,Nt as cn,Pt as ln,kt as un}from"./minerva-web-components-CzA8FbRN.js";import{a as dn,c as fn,d as pn,f as mn,h as hn,i as gn,l as _n,m as vn,n as yn,o as bn,p as xn,r as Sn,s as Cn,t as wn,u as Tn}from"./minerva-web-components-Baqgrh4_.js";var En,Dn,On,kn,An,jn,L;function Mn(){return(Mn=e((()=>{p(),x(),f(),b(),g(),m(),ge(),N(),k(),D(),nn(),En=5,Dn=5,On=(e,t)=>{let n=[];for(let r=e;r<=t;r++)n.push(r);return n},kn=(e,t)=>{let n=Math.max(1,e-Math.floor(En/2)),r=Math.min(t,n+En-1);return r-n+1<En&&(n=Math.max(1,r-En+1)),On(n,r)},An=(e,t,n,r)=>{if(e<=r*2+n*2+3)return On(1,e);let i=Math.max(t-n,r+1),a=Math.min(t+n,e-r),o=i>r+2,s=a<e-r-1,c=r+n*2+2;return o?s?[...On(1,r),`ellipsis-start`,...On(i,a),`ellipsis-end`,...On(e-r+1,e)]:[...On(1,r),`ellipsis-start`,...On(e-c+1,e)]:[...On(1,c),`ellipsis-end`,...On(e-r+1,e)]},jn={fromAttribute:e=>(e??``).split(/[\s,]+/).map(e=>parseInt(e,10)).filter(e=>!isNaN(e)&&e>0),toAttribute:e=>e.join(`,`)},L=class e extends _{constructor(...e){super(...e),this.current=1,this.total=0,this.pageSize=10,this.disabled=!1,this.showQuickJumper=!1,this.showSizeChanger=!1,this.pageSizeOptions=[10,20,50,100],this.showTotal=!1,this.size=`medium`,this.shape=`rounded`,this.variant=`solid`,this.simple=!1,this.hideEdges=!1,this.hideNumbers=!1,this.responsive=!1,this.jumpValue=``,this.simpleDraft=null,this.ripples=[],this.aria=new s(this),this.locale=new v(this),this.nextRippleId=0,this.restoreFocus=null,this.handleKeyDown=e=>{let t=e.key;(t===`ArrowLeft`||t===`ArrowRight`)&&Be(this)===`rtl`&&(t=t===`ArrowLeft`?`ArrowRight`:`ArrowLeft`);let n=this.current,r=t===`ArrowLeft`?n-1:t===`ArrowRight`?n+1:t===`Home`?1:t===`End`?this.totalPages:null;r!==null&&(e.preventDefault(),this.changePage(r,`active`))},this.handleJump=e=>{if(e.key!==`Enter`)return;e.preventDefault();let t=parseInt(this.jumpValue,10);!isNaN(t)&&t>=1&&t<=this.totalPages&&(this.changePage(t),this.jumpValue=``,e.target.value=``)},this.handleSizeChange=e=>{let t=e.target,n=parseInt(t.value,10);this.request(1,n)||(t.value=String(this.pageSize))},this.commitSimpleDraft=()=>{let e=this.simpleDraft;if(e===null)return;this.simpleDraft=null;let t=parseInt(e,10);isNaN(t)||this.changePage(Math.min(Math.max(t,1),this.totalPages))}}static{this.tagName=`minerva-pagination`}static{this.styles=[C,E`
:host{
display: block;
}
`,w(fe)]}get totalPages(){return Math.max(1,this.pageSize>0?Math.ceil(this.total/this.pageSize):0)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.rippleTimer)}request(e,t){let n={page:e,pageSize:t};return this.emit(`minerva-page-change`,n,{cancelable:!0})?(this.current=e,this.pageSize=t,!0):!1}changePage(e,t=`if-lost`){let n=this.current;this.disabled||e===n||e<1||e>this.totalPages||(this.restoreFocus={mode:t,page:e},this.request(e,this.pageSize))}willUpdate(t){h&&(t.has(`current`)||t.has(`total`))&&this.total>0&&this.current>this.totalPages&&y(e.tagName,`current (${this.current}) is greater than the number of pages (${this.totalPages}).`)}updated(){let e=this.restoreFocus;this.restoreFocus=null;let t=this.shadowRoot;if(!e||!t||e.page!==this.current)return;let n=t.activeElement,r=!n||n.disabled===!0;(e.mode===`active`||r)&&(t.querySelector(`[aria-current="page"]`)??t.querySelector(`button:not(:disabled), input`))?.focus()}handleItemClick(e,t,n){let r=this.current;if(!(this.disabled||e===r||e<1||e>this.totalPages)){if(n.detail>0){let e=n.currentTarget.getBoundingClientRect();this.ripples=[...this.ripples,{x:n.clientX-e.left,y:n.clientY-e.top,id:this.nextRippleId++,itemKey:t}],clearTimeout(this.rippleTimer),this.rippleTimer=setTimeout(()=>this.ripples=[],1e3)}this.changePage(e)}}label(e,t){let n=this.labels,r=this.locale.t;switch(e){case`prev`:return n?.prev??r(`pagination.prev`);case`next`:return n?.next??r(`pagination.next`);case`jump-prev`:return n?.jumpPrev??r(`pagination.jumpPrev`);case`jump-next`:return n?.jumpNext??r(`pagination.jumpNext`);default:return n?.page?.(t)??r(`pagination.page`,{page:t})}}renderItem(e){let{type:t,target:n,key:r}=e;if(t===`ellipsis`)return j`<span class="ellipsis" aria-hidden="true">…</span>`;let a=this.current,o=t===`page`&&n===a,s=this.disabled||(t===`prev`?a<=1:t===`next`&&a>=this.totalPages),c;switch(t){case`prev`:c=j`<slot name="prev-icon">${i}</slot>`;break;case`next`:c=j`<slot name="next-icon">${At}</slot>`;break;case`jump-prev`:case`jump-next`:c=j`<span class="jumpWrapper"
><slot
name=${t===`jump-prev`?`jump-prev-icon`:`jump-next-icon`}
>${je}</slot
><span class="jumpHint" aria-hidden="true"
>${this.label(t,n)}</span
></span
>`;break;default:c=n}return this.itemRender&&(c=this.itemRender(n,t)),j`<button
type="button"
part="item"
data-key=${r}
class=${F({item:!0,active:o,disabled:s,prev:t===`prev`,next:t===`next`,jump:t===`jump-prev`||t===`jump-next`})}
?disabled=${s}
aria-label=${this.label(t,n)}
aria-current=${o?`page`:A}
@keydown=${this.handleKeyDown}
@click=${e=>this.handleItemClick(n,r,e)}
>
${c}
${this.ripples.filter(e=>e.itemKey===r).map(e=>j`<span
class="ripple"
style="left:${e.x}px;top:${e.y}px"
aria-hidden="true"
></span>`)}
</button>`}items(){let e=this.current,t=this.totalPages,n=t=>this.hideEdges?[]:[{key:t,type:t,target:t===`prev`?e-1:e+1}],r=e=>({key:`page-${e}`,type:`page`,target:e});if(this.siblingCount!==void 0||this.boundaryCount!==void 0){let i=An(t,e,Math.max(0,this.siblingCount??1),Math.max(1,this.boundaryCount??1));return[...n(`prev`),...i.map(e=>typeof e==`number`?r(e):{key:e,type:`ellipsis`,target:0}),...n(`next`)]}let i=kn(e,t),a=[...n(`prev`)];i.length>0&&i[0]>1&&(a.push(r(1)),i[0]>2&&a.push({key:`jump-prev`,type:`jump-prev`,target:Math.max(1,e-Dn)})),i.forEach(e=>a.push(r(e)));let o=i[i.length-1];return i.length>0&&o<t&&(o<t-1&&a.push({key:`jump-next`,type:`jump-next`,target:Math.min(t,e+Dn)}),a.push(r(t))),a.push(...n(`next`)),a}renderPageList(){let e=this.current,t=t=>this.hideEdges?A:this.renderItem({key:t,type:t,target:t===`prev`?e-1:e+1});return this.simple?j`${t(`prev`)}
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
${t(`next`)}`:this.hideNumbers?j`${t(`prev`)}
<span class="counter" aria-live="polite"
>${e} / ${this.totalPages}</span
>
${t(`next`)}`:Jt(this.items(),e=>e.key,e=>this.renderItem(e))}render(){let e=this.locale.t,t=this.labels,n=this.total,r=this.pageSize,i=Math.min(Math.max(1,this.current),this.totalPages),a=n>0?[(i-1)*r+1,Math.min(i*r,n)]:[0,0],o=this.pageSizeOptions.includes(r)?this.pageSizeOptions:[...this.pageSizeOptions,r].sort((e,t)=>e-t),s=n=>t?.pageSizeOption?.(n)??e(`pagination.pageSizeOption`,{size:n});return j`<nav
part="base"
aria-label=${this.aria.label??t?.nav??e(`pagination.nav`)}
class=${F({pagination:!0,disabled:this.disabled,small:this.size===`small`,large:this.size===`large`,circle:this.shape===`circle`,square:this.shape===`square`,[this.variant]:!0,responsive:this.responsive})}
>
${this.showTotal?j`<div
part="total"
class="total"
aria-live="polite"
aria-atomic="true"
>
${this.totalRender?this.totalRender(n,a):t?.total?.(n)??e(`pagination.total`,{total:n})}
</div>`:A}
${this.renderPageList()}
${this.showQuickJumper?j`<label part="jumper" class="jumper">
${t?.jumpTo??e(`pagination.jumpTo`)}
<input
.value=${this.jumpValue}
?disabled=${this.disabled}
inputmode="numeric"
aria-label=${t?.jumpToInput??e(`pagination.jumpToInput`)}
@input=${e=>this.jumpValue=e.target.value}
@keydown=${this.handleJump}
/>
</label>`:A}
${this.showSizeChanger?j`<div class="sizeChanger">
<select
part="size-changer"
?disabled=${this.disabled}
aria-label=${t?.pageSize??e(`pagination.pageSize`)}
@change=${this.handleSizeChange}
>
${o.map(e=>j`<option
value=${e}
.selected=${e===r}
>
${s(e)}
</option>`)}
</select>
</div>`:A}
</nav>`}},I([M({type:Number,reflect:!0})],L.prototype,`current`,void 0),I([M({type:Number})],L.prototype,`total`,void 0),I([M({type:Number,reflect:!0,attribute:`page-size`})],L.prototype,`pageSize`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`disabled`,void 0),I([M({type:Boolean,attribute:`show-quick-jumper`})],L.prototype,`showQuickJumper`,void 0),I([M({type:Boolean,attribute:`show-size-changer`})],L.prototype,`showSizeChanger`,void 0),I([M({attribute:`page-size-options`,converter:jn})],L.prototype,`pageSizeOptions`,void 0),I([M({type:Boolean,attribute:`show-total`})],L.prototype,`showTotal`,void 0),I([M({attribute:!1})],L.prototype,`totalRender`,void 0),I([M({attribute:!1})],L.prototype,`itemRender`,void 0),I([M({reflect:!0})],L.prototype,`size`,void 0),I([M({reflect:!0})],L.prototype,`shape`,void 0),I([M({reflect:!0})],L.prototype,`variant`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`simple`,void 0),I([M({type:Number,attribute:`sibling-count`})],L.prototype,`siblingCount`,void 0),I([M({type:Number,attribute:`boundary-count`})],L.prototype,`boundaryCount`,void 0),I([M({type:Boolean,attribute:`hide-edges`})],L.prototype,`hideEdges`,void 0),I([M({type:Boolean,attribute:`hide-numbers`})],L.prototype,`hideNumbers`,void 0),I([M({type:Boolean,reflect:!0})],L.prototype,`responsive`,void 0),I([M({attribute:!1})],L.prototype,`labels`,void 0),I([T()],L.prototype,`jumpValue`,void 0),I([T()],L.prototype,`simpleDraft`,void 0),I([T()],L.prototype,`ripples`,void 0)})))()}function Nn(e,t,n,r){let i=t==null?{base:1}:typeof t==`number`?{base:t}:t,a={},o=1;for(let t of Pn){let n=i[t]??o;(!Number.isInteger(n)||n<1||n>12)&&(h&&y(e,`columns must be integers from 1 to 12 (got ${String(n)} for "${t}"); using ${o}.`),n=o),a[`--grid-columns-${t}`]=String(n),o=n}return a[`--grid-row-gap`]=cn(n),a[`--grid-column-gap`]=cn(r),a}var Pn,Fn,In,Ln;function Rn(){return(Rn=e((()=>{x(),g(),m(),ln(),Ve(),N(),k(),Kt(),Pn=[`base`,`sm`,`md`,`lg`],Fn={fromAttribute(e){if(e===null)return;let t=e.trim();if(t.startsWith(`{`))try{return JSON.parse(t)}catch{return NaN}let n=t.split(/[\s,]+/).filter(Boolean).map(Number);if(n.length<=1)return n[0]??NaN;let[r,i,a,o]=n;return{base:r,sm:i,md:a,lg:o}},toAttribute(e){return e===void 0?null:typeof e==`number`?String(e):JSON.stringify(e)}},In=class e extends _{constructor(...e){super(...e),this.columns=1,this.gap=4}static{this.tagName=`minerva-responsive-grid`}static{this.styles=[C,E`
:host{
display: block;
min-width: 0;
}
.layout ::slotted(*){
min-width: 0;
}
`,w(Ot)]}render(){let t=Nn(e.tagName,this.columns,this.rowGap??this.gap,this.columnGap??this.gap);return j`<div class="root" part="base" style=${P(t)}>
<div class="layout" part="layout"><slot></slot></div>
</div>`}},I([M({converter:Fn})],In.prototype,`columns`,void 0),I([M({converter:on})],In.prototype,`gap`,void 0),I([M({attribute:`row-gap`,converter:on})],In.prototype,`rowGap`,void 0),I([M({attribute:`column-gap`,converter:on})],In.prototype,`columnGap`,void 0),Ln=class extends _{constructor(...e){super(...e),this.fullWidth=!1}static{this.tagName=`minerva-grid-item`}static{this.styles=[C,E`
:host{
display: block;
min-width: 0;
}
:host([full-width]){
grid-column: 1 / -1;
}
`]}render(){return j`<slot></slot>`}},I([M({type:Boolean,reflect:!0,attribute:`full-width`})],Ln.prototype,`fullWidth`,void 0)})))()}var R;function zn(){return(zn=e((()=>{p(),x(),b(),g(),m(),Ue(),Ze(),N(),k(),D(),Gt(),R=class e extends S{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.variant=`outline`,this.size=`medium`,this.invalid=!1,this.placeholder=``,this.readonly=!1,this.locale=new v(this),this.aria=new s(this,()=>this.labels),this.dirty=!1}static{this.tagName=`minerva-textarea`}static{this.shadowRootOptions={...S.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[C,E`
:host{
display: block;
width: 100%;
min-width: 0;
}
`,w(qe)]}focus(e){this.textarea?.focus(e)}blur(){this.textarea?.blur()}select(){this.textarea?.select()}getFormValue(){return this.value}getValidity(){let e=this.textarea;return e?{flags:ot(e.validity),message:e.validationMessage,anchor:e}:this.required&&!this.value?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`)}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(t){t.has(`value`)&&t.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),h&&(t.has(`minlength`)||t.has(`maxlength`))&&this.minlength!==void 0&&this.maxlength!==void 0&&this.minlength>this.maxlength&&y(e.tagName,`minlength (${this.minlength}) is greater than maxlength (${this.maxlength}): no value can be valid.`)}handleInput(){this.value=String(this.textarea.value),this.emit(`minerva-input`,{value:this.value})}handleChange(){this.value=String(this.textarea.value),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}render(){let e=this.invalid||this.aria.attr(`aria-invalid`)===`true`;return j`<textarea
      part="textarea"
      class=${F({textarea:!0,[this.variant]:!0,[this.size]:!0,invalid:e})}
      style="resize: none"
      .value=${rn(this.value)}
      name=${this.name||A}
      placeholder=${this.placeholder||A}
      rows=${this.rows??A}
      ?disabled=${this.isDisabled}
      ?readonly=${this.readonly}
      ?required=${this.required}
      minlength=${this.minlength??A}
      maxlength=${this.maxlength??A}
      autocomplete=${this.autocomplete??A}
      wrap=${this.wrap??A}
      aria-label=${this.aria.label??A}
      aria-description=${this.aria.description??A}
      aria-invalid=${e?`true`:A}
      aria-required=${this.aria.attr(`aria-required`)??A}
      aria-readonly=${this.aria.attr(`aria-readonly`)??A}
      @input=${this.handleInput}
      @change=${this.handleChange}
    ></textarea>`}},I([M({attribute:!1})],R.prototype,`value`,void 0),I([M({attribute:`value`})],R.prototype,`defaultValue`,void 0),I([M({reflect:!0})],R.prototype,`variant`,void 0),I([M({reflect:!0})],R.prototype,`size`,void 0),I([M({type:Boolean,reflect:!0})],R.prototype,`invalid`,void 0),I([M()],R.prototype,`placeholder`,void 0),I([M({type:Boolean,reflect:!0})],R.prototype,`readonly`,void 0),I([M({type:Number})],R.prototype,`rows`,void 0),I([M({type:Number})],R.prototype,`minlength`,void 0),I([M({type:Number})],R.prototype,`maxlength`,void 0),I([M()],R.prototype,`autocomplete`,void 0),I([M()],R.prototype,`wrap`,void 0),I([O(`textarea`)],R.prototype,`textarea`,void 0)})))()}var Bn;function Vn(){return(Vn=e((()=>{p(),x(),f(),b(),g(),st(),m(),tt(),N(),k(),D(),Kt(),Bn=class e extends _{constructor(...e){super(...e),this.variant=`spinner`,this.size=`medium`,this.color=`primary`,this.label=``,this.decorative=!1,this.full=!1,this.locale=new v(this),this.aria=new s(this),this.slots=new We(this)}static{this.tagName=`minerva-progress`}static{this.styles=[C,E`
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
`,w(_t)]}updated(){h&&this.full&&this.width&&y(e.tagName,`width is ignored when full is set.`)}renderIndicator(){let e=this.size;switch(this.variant){case`bar`:return j`<div part="indicator" class="barContainer ${e}">
<div class="bar"></div>
</div>`;case`dottedBar`:return j`<div part="indicator" class="dottedBarContainer ${e}">
<div class="dottedBar"></div>
</div>`;case`wave`:return j`<div part="indicator" class="waveContainer ${e}">
<span class="wave" aria-hidden="true">${ut}</span>
</div>`;case`circle`:return j`<span
part="indicator"
class="circle ${e}"
aria-hidden="true"
>${n}</span
>`;case`spinner`:return j`<span
part="indicator"
class="spinner ${e}"
aria-hidden="true"
>${we}</span
>`;default:return A}}render(){let e=this.variant===`bar`||this.variant===`dottedBar`,t=!!this.label||this.slots.test(`label`),n=this.aria.label;return j`<div
part="base"
class=${F({progressIndicator:!0,[this.color]:!0,fullWidth:this.full,defaultWidth:!this.full&&!this.width&&e})}
style=${P({width:this.width&&!this.full?this.width:void 0})}
role=${this.decorative?A:`progressbar`}
aria-hidden=${this.decorative?`true`:A}
aria-label=${this.decorative?A:n??(t?A:this.locale.t(`common.loading`))}
aria-labelledby=${!this.decorative&&!n&&t?`label`:A}
>
${this.slots.test(`icon`)?j`<span class="icon"><slot name="icon"></slot></span>`:A}
${this.renderIndicator()}
${t?j`<span id="label" part="label" class="label"
><slot name="label">${this.label}</slot></span
>`:A}
</div>`}},I([M({reflect:!0})],Bn.prototype,`variant`,void 0),I([M({reflect:!0})],Bn.prototype,`size`,void 0),I([M({reflect:!0})],Bn.prototype,`color`,void 0),I([M()],Bn.prototype,`label`,void 0),I([M({type:Boolean,reflect:!0})],Bn.prototype,`decorative`,void 0),I([M()],Bn.prototype,`width`,void 0),I([M({type:Boolean,reflect:!0})],Bn.prototype,`full`,void 0)})))()}var Hn;function Un(){return(Un=e((()=>{p(),f(),b(),g(),st(),m(),vn(),Tn(),fn(),dn(),a(),d(),N(),k(),D(),Hn=class extends _{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.size=`medium`,this.hideCloseButton=!1,this.dialogRole=`dialog`,this.locale=new v(this),this.aria=new s(this),this.slots=new We(this),this.presence=new ie(this,()=>this.panel),this.modal=new bn(this),this.focusScope=new pn(this,()=>({trapped:!0,loop:!0,restoreFocus:!0})),this.layer=new hn(this,()=>({disableOutsidePointerEvents:!0,branches:()=>[this.triggerElement()],onFocusOutside:e=>e.preventDefault(),onEscapeKeyDown:()=>this.lastReason(`escape`),onPointerDownOutside:()=>this.lastReason(`outside`),onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.reason=`outside`,this.wasPresent=!1,this.handleClick=e=>{let t=this.triggerElement();!e.defaultPrevented&&t&&e.composedPath().includes(t)&&this.requestOpenChange(!this.open,`trigger`)}}static{this.tagName=`minerva-modal`}static{this.styles=[C,_n,E`
:host{
display: contents;
}
.content .body{
flex: 1 1 auto;
}
`,w(jt)]}lastReason(e){this.reason=e}show(){this.open=!0}hide(){this.open=!1}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleClick)}willUpdate(e){e.has(`open`)&&this.presence.sync(this.open)}updated(e){let t=this.open||this.presence.present;if(e.has(`open`)){let e=this.panel;this.open&&e?(St(this.overlay),St(e),this.modal.activate(this),this.layer.activate(e),this.focusScope.activate(e),this.emit(`minerva-after-open`)):this.open||(this.focusScope.deactivate(),this.layer.deactivate(),this.modal.deactivate())}this.wasPresent&&!t&&this.afterClose(),this.wasPresent=t}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleClick),$e(this.panel),$e(this.overlay)}afterClose(){$e(this.panel),$e(this.overlay),this.emit(`minerva-after-close`)}render(){let e=this.open||this.presence.present,t=this.open?`open`:`closed`,n=!!this.label||this.slots.test(`header`),r=this.description||this.aria.description;return j`<slot name="trigger"></slot> ${e?j`<div
part="overlay"
class="overlay"
popover="manual"
data-state=${t}
aria-hidden="true"
></div>
<div
part="panel"
class=${F({content:!0,[this.size]:!0})}
popover="manual"
role=${this.dialogRole}
aria-modal="true"
aria-labelledby=${n?`title`:A}
aria-label=${n?A:this.aria.label??A}
aria-describedby=${r?`description`:A}
tabindex="-1"
data-state=${t}
>
${r?j`<p
id="description"
class="description"
part="description"
>
${r}
</p>`:A}
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
aria-label=${this.closeLabel??this.locale.t(`modal.close`)}
@click=${()=>this.requestOpenChange(!1,`close-button`)}
>
${Ne}
</button>`}
</div>`:A}`}},I([M({type:Boolean,reflect:!0})],Hn.prototype,`open`,void 0),I([M()],Hn.prototype,`label`,void 0),I([M()],Hn.prototype,`description`,void 0),I([M({reflect:!0})],Hn.prototype,`size`,void 0),I([M({type:Boolean,attribute:`hide-close-button`})],Hn.prototype,`hideCloseButton`,void 0),I([M({attribute:`close-label`})],Hn.prototype,`closeLabel`,void 0),I([M({attribute:`dialog-role`})],Hn.prototype,`dialogRole`,void 0),I([O(`.content`)],Hn.prototype,`panel`,void 0),I([O(`.overlay`)],Hn.prototype,`overlay`,void 0)})))()}function Wn(e,t,n){let r=new Date(0);return r.setFullYear(e,t,n),r.setHours(0,0,0,0),r}function Gn(e){return`${String(e.getFullYear()).padStart(4,`0`)}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function Kn(e,t){return Wn(e.getFullYear(),e.getMonth(),e.getDate()+t)}function qn(e,t=0){return Wn(e.getFullYear(),e.getMonth()+t,1)}function Jn(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}var Yn,Xn,Zn,z;function Qn(){return(Qn=e((()=>{p(),x(),f(),b(),g(),m(),_e(),N(),k(),Yn=[`mon`,`tue`,`wed`,`thu`,`fri`,`sat`,`sun`],Xn=/^\d{4}-\d{2}-\d{2}$/,Zn={fromAttribute(e){let t=e?.trim().match(/^(\d{4})-(\d{1,2})(?:-\d{1,2})?$/);return t?Wn(Number(t[1]),Number(t[2])-1,1):void 0},toAttribute(e){return e instanceof Date&&!Number.isNaN(e.getTime())?Gn(e).slice(0,7):null}},z=class e extends _{constructor(...e){super(...e),this.events=[],this.clickableEvents=!1,this.disabled=!1,this.hideEvents=!1,this.focusedKey=``,this.pendingFocus=null,this.i18n=new v(this),this.aria=new s(this)}static{this.tagName=`minerva-month-calendar`}static{this.styles=[C,E`
:host{
display: block;
}
.navButton svg{
flex-shrink: 0;
}
`,w(Pe)]}get displayed(){let e=this.month;return e instanceof Date&&!Number.isNaN(e.getTime())?qn(e):qn(new Date)}focus(e){this.renderRoot.querySelector(`[role="gridcell"][tabindex="0"]`)?.focus(e)}goToMonth(e){let t=qn(e);Gn(t)!==Gn(this.displayed)&&(this.month=t,this.emit(`minerva-month-change`,{month:t}))}select(e){if(this.disabled)return;let t=Gn(e);t!==this.value&&(this.value=t,this.emit(`minerva-change`,{value:t})),Jn(e,this.displayed)||this.goToMonth(e)}handleKeyDown(e,t){if(this.disabled)return;if(e.key===`Enter`||e.key===` `){e.preventDefault(),e.repeat||this.select(t);return}let n=Be(this)===`rtl`,r=n&&e.key===`ArrowLeft`?`ArrowRight`:n&&e.key===`ArrowRight`?`ArrowLeft`:e.key,i=(t.getDay()+6)%7,a;switch(r){case`ArrowLeft`:a=Kn(t,-1);break;case`ArrowRight`:a=Kn(t,1);break;case`ArrowUp`:a=Kn(t,-7);break;case`ArrowDown`:a=Kn(t,7);break;case`Home`:a=Kn(t,-i);break;case`End`:a=Kn(t,6-i);break;case`PageUp`:case`PageDown`:{let n=qn(t,(e.key===`PageUp`?-1:1)*(e.shiftKey?12:1)),r=Kn(qn(n,1),-1).getDate();a=Wn(n.getFullYear(),n.getMonth(),Math.min(t.getDate(),r));break}default:return}e.preventDefault(),this.pendingFocus=Gn(a),this.focusedKey=Gn(a),Jn(a,this.displayed)||this.goToMonth(a)}willUpdate(t){h&&t.has(`value`)&&this.value&&!Xn.test(this.value)&&y(e.tagName,`value "${this.value}" is not a "YYYY-MM-DD" day: nothing is selected.`)}updated(){if(this.disabled||!this.pendingFocus)return;let e=this.renderRoot.querySelector(`[data-date="${this.pendingFocus}"]`);e&&(this.pendingFocus=null,e.focus())}render(){let e=this.i18n.t,t=this.displayed,n=Kn(t,-((t.getDay()+6)%7)),r=Array.from({length:42},(e,t)=>Kn(n,t)),a=r.map(Gn),o=new Date,s=Gn(o),c=this.value||void 0,l=[this.focusedKey,c,Jn(o,t)?s:``,Gn(t)].find(e=>e&&a.includes(e)),u=this.events??[],d=new Map;for(let e of u)d.set(e.date,(d.get(e.date)??0)+1);let ee=u.filter(e=>e.date===c),te;try{te=new Intl.DateTimeFormat(this.locale??this.i18n.language,{year:`numeric`,month:`long`}).format(t)}catch{te=Gn(t).slice(0,7)}let f=this.disabled;return j`<section
part="base"
class="monthCalendar"
aria-label=${this.aria.label??e(`monthCalendar.label`)}
>
<div class="toolbar">
<h2 id="heading" part="heading" class="heading" aria-live="polite">
${te}
</h2>
<div class="navigation">
<button
type="button"
part="nav-button"
class="navButton iconButton"
aria-label=${this.previousMonthLabel??e(`monthCalendar.previousMonth`)}
?disabled=${f}
@click=${()=>this.goToMonth(qn(t,-1))}
>
${i}
</button>
<button
type="button"
part="nav-button"
class="navButton"
?disabled=${f}
@click=${()=>this.goToMonth(new Date)}
>
${me} ${this.todayLabel??e(`monthCalendar.today`)}
</button>
<button
type="button"
part="nav-button"
class="navButton iconButton"
aria-label=${this.nextMonthLabel??e(`monthCalendar.nextMonth`)}
?disabled=${f}
@click=${()=>this.goToMonth(qn(t,1))}
>
${At}
</button>
</div>
</div>
<div
part="grid"
role="grid"
aria-labelledby="heading"
aria-disabled=${f?`true`:A}
class="grid"
>
<div role="row" class="week">
${Yn.map((t,n)=>j`<div role="columnheader" class="weekday">
${this.weekdayLabels?.[n]??e(`monthCalendar.weekdays.${t}`)}
</div>`)}
</div>
${Array.from({length:6},(n,i)=>j`<div role="row" class="week">
${r.slice(i*7,i*7+7).map(n=>{let r=Gn(n),i=d.get(r)??0,a=this.getDayLabel?this.getDayLabel(r,i):i?e(`monthCalendar.dayWithEvents`,{date:r,count:i}):r;return j`<div
role="gridcell"
part="day"
class="day"
data-date=${r}
data-outside=${Jn(n,t)?A:`true`}
aria-label=${a}
aria-selected=${String(c===r)}
aria-current=${r===s?`date`:A}
aria-disabled=${f?`true`:A}
tabindex=${!f&&r===l?`0`:`-1`}
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
${!this.hideEvents&&c?j`<section
part="events"
class="events"
aria-label=${this.getEventsLabel?this.getEventsLabel(c):e(`monthCalendar.eventsLabel`,{date:c})}
>
<h3 class="eventsHeading">${c}</h3>
${ee.length?j`<ul class="eventList">
${ee.map(e=>j`<li class="eventItem">
${this.clickableEvents?j`<button
type="button"
part="event"
class="eventButton"
?disabled=${f}
@click=${()=>this.emit(`minerva-event-click`,{event:e})}
>
${e.title}
</button>`:j`<span part="event">${e.title}</span>`}
</li>`)}
</ul>`:j`<p class="empty">
${this.emptyEventsText??e(`monthCalendar.noEvents`)}
</p>`}
</section>`:A}
</section>`}},I([M({converter:Zn,reflect:!0})],z.prototype,`month`,void 0),I([M({reflect:!0})],z.prototype,`value`,void 0),I([M({attribute:!1})],z.prototype,`events`,void 0),I([M({type:Boolean,attribute:`clickable-events`})],z.prototype,`clickableEvents`,void 0),I([M({type:Boolean,reflect:!0})],z.prototype,`disabled`,void 0),I([M({type:Boolean,attribute:`hide-events`})],z.prototype,`hideEvents`,void 0),I([M({attribute:`previous-month-label`})],z.prototype,`previousMonthLabel`,void 0),I([M({attribute:`next-month-label`})],z.prototype,`nextMonthLabel`,void 0),I([M({attribute:`today-label`})],z.prototype,`todayLabel`,void 0),I([M({attribute:`empty-events-text`})],z.prototype,`emptyEventsText`,void 0),I([M()],z.prototype,`locale`,void 0),I([M({attribute:!1})],z.prototype,`weekdayLabels`,void 0),I([M({attribute:!1})],z.prototype,`getDayLabel`,void 0),I([M({attribute:!1})],z.prototype,`getEventsLabel`,void 0),I([T()],z.prototype,`focusedKey`,void 0)})))()}function $n(e,t,n){for(let r of e){if(r.id===t)return!0;if(r.children&&$n(r.children,t,n))return n.add(r.id),!0}return!1}var er,tr,nr;function rr(){return(rr=e((()=>{p(),x(),f(),b(),g(),m(),Ae(),Sn(),N(),k(),D(),nn(),er=`.item`,tr=`.children`,nr=class e extends _{constructor(...e){super(...e),this.sections=[],this.collapsed=!1,this.wrapLabels=!1,this.expandedIds=[],this.explicitlyCollapsed=new Set,this.aria=new s(this),this.locale=new v(this),this.typeahead=new gn(this),this.handleNavKeyDown=e=>{if(e.defaultPrevented)return;let t=e.composedPath()[0]?.closest?.(er);if(!t||!this.shadowRoot?.contains(t))return;let n=this.focusableItems(),r=n.indexOf(t),i;switch(this.logicalKey(e.key)){case`ArrowDown`:i=n[r+1];break;case`ArrowUp`:i=r>0?n[r-1]:void 0;break;case`Home`:i=n[0];break;case`End`:i=n[n.length-1];break;case`ArrowLeft`:if(t.getAttribute(`aria-expanded`)===`true`)return;i=t.closest(tr)?.parentElement?.querySelector(`:scope > ${er}`);break;default:{if(e.altKey||e.ctrlKey||e.metaKey)return;let t=this.typeahead.search(e.key,n.map(e=>({text:e.querySelector(`.label`)?.textContent??``})),r);if(t===-1)return;i=n[t]}}i&&(e.preventDefault(),i.focus())}}static{this.tagName=`minerva-nav-tree`}static{this.styles=[C,E`
:host{
display: block;
}
`,w(Me)]}activeAncestors(){let e=new Set;for(let t of this.sections)$n(t.items,this.activeId,e);return e}isExpanded(e,t){return this.expandedIds.includes(e)||!this.explicitlyCollapsed.has(e)&&t.has(e)}willUpdate(t){if(h&&t.has(`sections`)){let t=new Set,n=r=>{for(let i of r)t.has(i.id)&&y(e.tagName,`duplicate item id "${i.id}": ids must be unique.`),t.add(i.id),i.children&&n(i.children)};for(let e of this.sections??[])n(e.items??[])}}setItemExpanded(e,t){let n=new Set(this.expandedIds);t?n.add(e.id):n.delete(e.id);let r=Array.from(n),i={expandedIds:r,item:e,expanded:t};if(!this.emit(`minerva-expanded-change`,i,{cancelable:!0}))return;let a=new Set(this.explicitlyCollapsed);t?a.delete(e.id):a.add(e.id),this.explicitlyCollapsed=a,this.expandedIds=r}select(e,t){let n={value:e.id,item:e};this.emit(`minerva-select`,n,{cancelable:!0})||t?.preventDefault()}toggleItem(e){this.setItemExpanded(e,!this.isExpanded(e.id,this.activeAncestors())),this.select(e)}focusableItems(){return Array.from(this.shadowRoot?.querySelectorAll(er)??[]).filter(e=>!e.disabled&&e.getAttribute(`aria-disabled`)!==`true`)}logicalKey(e){return e!==`ArrowLeft`&&e!==`ArrowRight`||Be(this)!==`rtl`?e:e===`ArrowLeft`?`ArrowRight`:`ArrowLeft`}renderContent(e,t){return j`<span class="icon" aria-hidden="true"
>${e.icon??A}</span
><span class="copy"
><span class="label">${e.label}</span>${e.description?j`<small class="description">${e.description}</small>`:A}</span
>${!this.collapsed&&(e.endContent||t)?j`<span class="trailing"
>${e.endContent?j`<span class="end">${e.endContent}</span>`:A}${t?j`<span class="chevron" aria-hidden="true"
>${be}</span
>`:A}</span
>`:A}`}renderItem(e,t,n){let r=!!e.children?.length,i=e.id===this.activeId,a=n.has(e.id),o=r&&this.isExpanded(e.id,n),s=!!e.disabled,c={item:!0,nested:t>0,active:i,disabled:s},l=Object.entries(c).filter(([,e])=>e).map(([e])=>e).join(` `),u=e.description?`${e.label} / ${e.description}`:e.label,d=this.renderContent(e,r);return r?j`<div class="branch">
<button
part="item"
class=${F(c)}
type="button"
title=${u}
aria-expanded=${o?`true`:`false`}
data-id=${e.id}
data-active=${i?`true`:A}
data-ancestor-active=${a?`true`:A}
data-expanded=${o?`true`:A}
?disabled=${s}
@click=${()=>this.toggleItem(e)}
@keydown=${t=>{if(this.collapsed)return;let n=this.logicalKey(t.key);n===`ArrowRight`?(t.preventDefault(),o?t.currentTarget.parentElement?.querySelector(`${tr} ${er}`)?.focus():this.setItemExpanded(e,!0)):n===`ArrowLeft`&&o&&(t.preventDefault(),this.setItemExpanded(e,!1))}}
>
${d}
</button>
${o&&!this.collapsed?j`<div class="children">
${Jt(e.children??[],e=>e.id,e=>this.renderItem(e,t+1,n))}
</div>`:A}
</div>`:this.renderLink?this.renderLink(e,d,{active:i,ancestorActive:a,expanded:!1,depth:t,collapsed:this.collapsed,hasChildren:r,disabled:s,className:l}):s?j`<span
part="item"
class=${F(c)}
title=${u}
data-id=${e.id}
data-active=${i?`true`:A}
role="link"
aria-disabled="true"
>${d}</span
>`:e.href===void 0?j`<button
part="item"
class=${F(c)}
type="button"
title=${u}
data-id=${e.id}
data-active=${i?`true`:A}
aria-current=${i?`page`:A}
@click=${()=>this.select(e)}
>
${d}
</button>`:j`<a
part="item"
class=${F(c)}
href=${e.href}
title=${u}
data-id=${e.id}
data-active=${i?`true`:A}
aria-current=${i?`page`:A}
@click=${t=>this.select(e,t)}
>${d}</a
>`}render(){let e=this.activeAncestors(),t=this.getAttribute(`aria-labelledby`);return j`<nav
part="base"
class=${F({navTree:!0,collapsed:this.collapsed,wrapLabels:this.wrapLabels&&!this.collapsed})}
aria-label=${this.aria.label??(t?A:this.locale.t(`navTree.label`))}
@keydown=${this.handleNavKeyDown}
>
${Jt(this.sections??[],e=>e.id,t=>j`<section part="section" class="section">
${t.title?j`<h2 class="sectionTitle">${t.title}</h2>`:A}
<div class="list">
${Jt(t.items,e=>e.id,t=>this.renderItem(t,0,e))}
</div>
</section>`)}
</nav>`}},I([M({attribute:!1})],nr.prototype,`sections`,void 0),I([M({attribute:`active-id`,reflect:!0})],nr.prototype,`activeId`,void 0),I([M({type:Boolean,reflect:!0})],nr.prototype,`collapsed`,void 0),I([M({type:Boolean,reflect:!0,attribute:`wrap-labels`})],nr.prototype,`wrapLabels`,void 0),I([M({attribute:!1})],nr.prototype,`expandedIds`,void 0),I([M({attribute:!1})],nr.prototype,`renderLink`,void 0),I([T()],nr.prototype,`explicitlyCollapsed`,void 0)})))()}function ir(e){if(!e||e>=1)return 0;let t=String(e),n=t.indexOf(`.`);return n===-1?0:t.length-n-1}function ar(e,t,n){let r=e;return t!==void 0&&(r=Math.max(t,r)),n!==void 0&&(r=Math.min(n,r)),r}function or(e,t){return e==null||Number.isNaN(e)?``:e.toFixed(t)}function sr(e){let t=e.trim();if(!t||!/^-?\d*(\.\d*)?$/.test(t))return null;let n=Number(t);return Number.isFinite(n)?n:null}var cr,B;function lr(){return(lr=e((()=>{p(),x(),f(),b(),g(),m(),Ue(),ae(),N(),k(),D(),Gt(),cr={fromAttribute:e=>e===null||e.trim()===``||Number.isNaN(Number(e))?null:Number(e),toAttribute:e=>e===null?null:String(e)},B=class e extends S{constructor(...e){super(...e),this.value=null,this.defaultValue=null,this.step=1,this.size=`medium`,this.invalid=!1,this.readonly=!1,this.showStepper=!1,this.noEmpty=!1,this.placeholder=``,this.draft=``,this.locale=new v(this),this.aria=new s(this,()=>this.labels),this.dirty=!1}static{this.tagName=`minerva-number-input`}static{this.shadowRootOptions={...S.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[C,E`
:host{
display: inline-flex;
width: 100%;
min-width: 0;
vertical-align: middle;
}
`,w(ht)]}get resolvedPrecision(){return this.precision??ir(this.step)}get locked(){return this.isDisabled||this.readonly}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}stepUp(){this.value=this.stepped(this.step)}stepDown(){this.value=this.stepped(-this.step)}getFormValue(){return or(this.value,this.resolvedPrecision)}getValidity(){let{t:e}=this.locale,t=this.input,n=this.draft.trim();if(n&&n!==`-`&&n!==`.`){let r=sr(n);return r===null?{flags:{badInput:!0},message:this.notANumberMessage??e(`numberInput.notANumber`),anchor:t}:this.min!==void 0&&r<this.min?{flags:{rangeUnderflow:!0},message:this.belowMinMessage??e(`validation.rangeUnderflow`,{min:this.min}),anchor:t}:this.max!==void 0&&r>this.max?{flags:{rangeOverflow:!0},message:this.aboveMaxMessage??e(`validation.rangeOverflow`,{max:this.max}),anchor:t}:{flags:{},message:``}}return this.required&&this.value===null?{flags:{valueMissing:!0},message:e(`validation.valueMissing`),anchor:t}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue,this.draft=or(this.value,this.resolvedPrecision)}restoreFormState(e){typeof e==`string`&&(this.value=sr(e))}willUpdate(t){if(t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),t.has(`value`)||t.has(`precision`)||t.has(`step`)){let e=sr(this.draft);(e===null||e!==this.value)&&(this.draft=or(this.value,this.resolvedPrecision))}h&&(t.has(`min`)||t.has(`max`))&&this.min!==void 0&&this.max!==void 0&&this.min>this.max&&y(e.tagName,`min (${this.min}) is greater than max (${this.max}): every value is clamped.`)}stepped(e){let t=sr(this.draft)??this.value??0;return Number(ar(t+e,this.min,this.max).toFixed(this.resolvedPrecision))}commitValue(e){let t=this.resolvedPrecision,n=e===null?null:Number(e.toFixed(t));this.draft=or(n,t),n!==this.value&&(this.dirty=!0,this.value=n,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:n}))}commit(e){if(this.locked)return;let t=e.trim();if(t===``||t===`-`){this.noEmpty?this.commitValue(ar(this.min??0,this.min,this.max)):this.commitValue(null);return}let n=sr(t);if(n===null){this.draft=or(this.value,this.resolvedPrecision);return}this.commitValue(ar(n,this.min,this.max))}adjust(e){this.locked||this.commitValue(this.stepped(e))}handleInput(){this.draft=String(this.input.value),this.emit(`minerva-input`,{value:sr(this.draft)})}handleKeyDown(e){if(this.locked||e.defaultPrevented)return;let{key:t}=e;t===`ArrowUp`||t===`ArrowDown`?(e.preventDefault(),this.adjust(t===`ArrowUp`?this.step:-this.step)):t===`PageUp`||t===`PageDown`?(e.preventDefault(),this.adjust((t===`PageUp`?10:-10)*this.step)):t===`Home`&&this.min!==void 0?(e.preventDefault(),this.commitValue(this.min)):t===`End`&&this.max!==void 0?(e.preventDefault(),this.commitValue(this.max)):t===`Enter`&&this.input.blur()}handleBlur(){this.commit(String(this.input.value))}draftError(){let{t:e}=this.locale,t=this.draft.trim();if(!t||t===`-`||t===`.`)return;let n=sr(t);if(n===null)return this.notANumberMessage??e(`numberInput.notANumber`);if(this.min!==void 0&&n<this.min)return this.belowMinMessage??e(`numberInput.belowMin`,{min:this.min});if(this.max!==void 0&&n>this.max)return this.aboveMaxMessage??e(`numberInput.aboveMax`,{max:this.max})}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.locked,r=this.draftError(),i=r!==void 0,a=this.invalid||i||this.aria.attr(`aria-invalid`)===`true`,o=this.value??0;return j`<div
part="base"
class=${F({root:!0,[this.size]:!0,invalid:a,shake:i,disabled:t})}
title=${r??A}
>
<input
part="input"
class="field"
type="text"
inputmode="decimal"
role="spinbutton"
.value=${rn(this.draft)}
placeholder=${this.placeholder||A}
?disabled=${t}
?readonly=${this.readonly}
?required=${this.required}
aria-valuemin=${this.min??A}
aria-valuemax=${this.max??A}
aria-valuenow=${this.value??A}
aria-label=${this.aria.label??A}
aria-description=${this.aria.description??A}
aria-invalid=${a?`true`:A}
aria-required=${this.aria.attr(`aria-required`)??A}
@input=${this.handleInput}
@blur=${this.handleBlur}
@keydown=${this.handleKeyDown}
/>
${this.showStepper?j`<div class="stepper" part="stepper" aria-hidden="true">
<button
part="increment"
type="button"
class="step stepUp"
tabindex="-1"
?disabled=${n||this.max!==void 0&&o>=this.max}
aria-label=${this.incrementLabel??e(`numberInput.increment`)}
@click=${()=>this.adjust(this.step)}
>
${oe}
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
${be}
</button>
</div>`:A}
</div>`}},I([M({attribute:!1})],B.prototype,`value`,void 0),I([M({attribute:`value`,converter:cr})],B.prototype,`defaultValue`,void 0),I([M({type:Number})],B.prototype,`min`,void 0),I([M({type:Number})],B.prototype,`max`,void 0),I([M({type:Number})],B.prototype,`step`,void 0),I([M({type:Number})],B.prototype,`precision`,void 0),I([M({reflect:!0})],B.prototype,`size`,void 0),I([M({type:Boolean,reflect:!0})],B.prototype,`invalid`,void 0),I([M({type:Boolean,reflect:!0})],B.prototype,`readonly`,void 0),I([M({type:Boolean,attribute:`show-stepper`})],B.prototype,`showStepper`,void 0),I([M({type:Boolean,attribute:`no-empty`})],B.prototype,`noEmpty`,void 0),I([M()],B.prototype,`placeholder`,void 0),I([M({attribute:`increment-label`})],B.prototype,`incrementLabel`,void 0),I([M({attribute:`decrement-label`})],B.prototype,`decrementLabel`,void 0),I([M({attribute:`not-a-number-message`})],B.prototype,`notANumberMessage`,void 0),I([M({attribute:`below-min-message`})],B.prototype,`belowMinMessage`,void 0),I([M({attribute:`above-max-message`})],B.prototype,`aboveMaxMessage`,void 0),I([T()],B.prototype,`draft`,void 0),I([O(`input`)],B.prototype,`input`,void 0)})))()}var ur,dr,fr,pr,mr;function hr(){return(hr=e((()=>{p(),x(),g(),st(),m(),ln(),se(),N(),k(),D(),Kt(),ur=class extends _{static{this.tagName=`minerva-page`}static{this.styles=[C,w(ee),E`
:host{
display: block;
min-width: 0;
}
`]}render(){let e=this.maxWidth===void 0||this.maxWidth===``?void 0:sn(this.maxWidth);return j`<div class="page" part="base" style=${P({maxWidth:e})}>
<slot></slot>
</div>`}},I([M({attribute:`max-width`,converter:on})],ur.prototype,`maxWidth`,void 0),dr=class extends _{constructor(...e){super(...e),this.heading=``,this.description=``,this.slots=new We(this)}static{this.tagName=`minerva-page-header`}static{this.styles=[C,w(ee),E`
:host{
display: block;
min-width: 0;
}
`]}updated(){h&&!this.heading&&!this.slots.test(`heading`)&&y(this.constructor.tagName,`set the heading attribute (or fill the heading slot): the heading names the region.`)}renderHeading(){let e=!!this.description||this.slots.test(`description`);return j`<div class="heading">
<h1 part="heading"><slot name="heading">${this.heading}</slot></h1>
${e?j`<p part="description">
<slot name="description">${this.description}</slot>
</p>`:A}
</div>`}renderActions(){return this.slots.test(`actions`)?j`<div class="actions" part="actions">
<slot name="actions"></slot>
</div>`:A}render(){return j`<header class="header" part="base">
${this.renderHeading()} ${this.renderActions()}
</header>`}},I([M()],dr.prototype,`heading`,void 0),I([M()],dr.prototype,`description`,void 0),fr=class extends dr{static{this.tagName=`minerva-page-section`}static{this.styles=[C,w(ee),E`
:host{
display: block;
min-width: 0;
}
.section ::slotted(minerva-tag),
.section ::slotted([data-component="tag"]){
align-self: flex-start;
}
`]}renderHeading(){let e=!!this.description||this.slots.test(`description`);return j`<div class="heading">
<h2 id="heading" part="heading">
${this.slots.test(`icon`)?j`<span class="sectionIcon" part="icon" aria-hidden="true"
><slot name="icon"></slot
></span>`:A}<slot name="heading">${this.heading}</slot>
</h2>
${e?j`<p part="description">
<slot name="description">${this.description}</slot>
</p>`:A}
</div>`}render(){return j`<section class="section" part="base" aria-labelledby="heading">
<div class="sectionHeader" part="header">
${this.renderHeading()} ${this.renderActions()}
</div>
<slot></slot>
</section>`}},pr=class extends _{constructor(...e){super(...e),this.nowrap=!1,this.density=`default`,this.aria=new s(this)}static{this.tagName=`minerva-toolbar`}static{this.styles=[C,w(ee),E`
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
`]}render(){return j`<div
part="base"
role="group"
aria-label=${this.aria.label??A}
aria-description=${this.aria.description??A}
class=${F({toolbar:!0,compact:this.density===`compact`,nowrap:this.nowrap})}
>
<slot></slot>
</div>`}},I([M({type:Boolean,reflect:!0})],pr.prototype,`nowrap`,void 0),I([M({reflect:!0})],pr.prototype,`density`,void 0),mr=class extends _{constructor(...e){super(...e),this.label=``,this.value=``,this.slots=new We(this)}static{this.tagName=`minerva-stat-card`}static{this.styles=[C,w(ee),E`
:host{
display: block;
min-width: 0;
}
`]}render(){let e=this.description!==void 0&&this.description!==null||this.slots.test(`description`);return j`<div class="statCard" part="base">
${this.slots.test(`icon`)?j`<span class="statIcon" part="icon" aria-hidden="true"
><slot name="icon"></slot
></span>`:A}
<div class="statContent">
<dl>
<dt part="label"><slot name="label">${this.label}</slot></dt>
<dd part="value"><slot name="value">${this.value}</slot></dd>
</dl>
${e?j`<p class="statDescription" part="description">
<slot name="description">${this.description}</slot>
</p>`:A}
</div>
</div>`}},I([M()],mr.prototype,`label`,void 0),I([M()],mr.prototype,`value`,void 0),I([M()],mr.prototype,`description`,void 0)})))()}var gr,_r,V;function vr(){return(vr=e((()=>{p(),x(),f(),b(),g(),st(),m(),Xe(),Oe(),N(),k(),D(),gr=(e,t)=>({iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,disabled:e,[t]:!0}),_r=class e extends _{constructor(...e){super(...e),this.scrollState={overflow:!1,left:!1,right:!1,rtl:!1},this.aria=new s(this),this.locale=new v(this),this.slots=new We(this),this.focused=null,this.previousItems=null,this.movedWith=null,this.mutations=null,this.resize=null,this.handleFocusIn=e=>{let t=e.target;this.focused=t instanceof V&&this.items.includes(t)?t:null},this.handleSelect=e=>{let t=e.target;t instanceof V&&this.items.includes(t)&&!e.defaultPrevented&&queueMicrotask(()=>{e.defaultPrevented||(this.activeValue=t.value)})},this.measure=()=>{let e=this.viewport;if(!e)return;let t=Be(this)===`rtl`,n=e.scrollWidth-e.clientWidth,r={overflow:e.scrollWidth>e.clientWidth+1,left:t?e.scrollLeft>-n+1:e.scrollLeft>1,right:t?e.scrollLeft<-1:e.scrollLeft<n-1,rtl:t},i=this.scrollState;(i.overflow!==r.overflow||i.left!==r.left||i.right!==r.right||i.rtl!==r.rtl)&&(this.scrollState=r)}}static{this.tagName=`minerva-page-tabs`}static{this.styles=[C,E`
:host{
display: block;
min-width: 0;
}
`,w(Ke),w(Te)]}get items(){return Array.from(this.children).filter(e=>e instanceof V)}connectedCallback(){super.connectedCallback(),this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`minerva-select`,this.handleSelect),typeof MutationObserver<`u`&&(this.mutations=new MutationObserver(()=>this.itemsChanged()),this.mutations.observe(this,{childList:!0,attributes:!0,attributeFilter:[`value`,`active`,`disabled`],subtree:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`focusin`,this.handleFocusIn),this.removeEventListener(`minerva-select`,this.handleSelect),this.mutations?.disconnect(),this.mutations=null,this.resize?.disconnect(),this.resize=null}firstUpdated(){typeof ResizeObserver<`u`&&(this.resize=new ResizeObserver(()=>this.revealActive()),this.resize.observe(this.viewport))}updated(t){h&&!this.aria.label&&y(e.tagName,`set aria-label (e.g. "Open pages") to name the navigation landmark.`),t.has(`activeValue`)&&this.itemsChanged();let n=this.movedWith;if(n){let e=n===`left`?this.leftButton:this.rightButton;if(e?.disabled){this.movedWith=null;let t=this.shadowRoot?.activeElement;(!t||t===e)&&(n===`left`?this.rightButton:this.leftButton)?.focus({preventScroll:!0})}}}itemsChanged(){let e=this.items;if(this.activeValue!==void 0)for(let t of e)t.active=t.value===this.activeValue;let t=JSON.stringify([this.activeValue,...e.map(e=>[e.value,e.active])]);t!==this.previousItems&&(this.previousItems=t,this.revealActive());let n=this.focused;if(n&&!n.isConnected){this.focused=null;let t=document.activeElement;(!t||t===document.body||!t.isConnected)&&e.find(e=>e.active)?.focus({preventScroll:!0})}}revealActive(){let e=this.viewport;if(!e)return;let t=this.items.find(e=>e.active),n=t?.surface;if(t&&!n&&t.updateComplete.then(()=>{t.surface&&this.revealActive()}),n){let t=e.getBoundingClientRect(),r=n.getBoundingClientRect();r.width>t.width?e.scrollLeft+=r.left-t.left:r.left<t.left?e.scrollLeft-=t.left-r.left:r.right>t.right&&(e.scrollLeft+=r.right-t.right)}this.measure()}move(e){let t=this.viewport;t&&(this.movedWith=e<0?`left`:`right`,t.scrollLeft+=e*Math.max(1,t.clientWidth*.8),this.measure())}renderScrollButton(e){let t=e===`left`,n=t?this.scrollLeftLabel??this.locale.t(`pageTabs.scrollLeft`):this.scrollRightLabel??this.locale.t(`pageTabs.scrollRight`),r=t?!this.scrollState.left:!this.scrollState.right;return j`<button
type="button"
part="scroll-button"
class=${F({...gr(r,`scroll`),[`scroll-${e}`]:!0})}
aria-label=${n}
?disabled=${r}
tabindex=${r?-1:0}
@click=${()=>this.move(t?-1:1)}
>
${t?i:At}
</button>`}render(){let{overflow:e,rtl:t}=this.scrollState,n=()=>this.renderScrollButton(`left`),r=()=>this.renderScrollButton(`right`);return j`<nav
part="base"
class="pageTabs"
aria-label=${this.aria.label??A}
>
${e?t?r():n():A}
<div part="viewport" class="viewport" @scroll=${this.measure}>
<div part="list" class="list">
<slot @slotchange=${()=>this.itemsChanged()}></slot>
</div>
</div>
${e?t?n():r():A}
${this.slots.test(`actions`)?j`<div part="actions" class="actions">
<slot name="actions"></slot>
</div>`:A}
</nav>`}},I([M({reflect:!0,attribute:`active-value`})],_r.prototype,`activeValue`,void 0),I([M({attribute:`scroll-left-label`})],_r.prototype,`scrollLeftLabel`,void 0),I([M({attribute:`scroll-right-label`})],_r.prototype,`scrollRightLabel`,void 0),I([T()],_r.prototype,`scrollState`,void 0),I([O(`.viewport`)],_r.prototype,`viewport`,void 0),I([O(`.scroll-left`)],_r.prototype,`leftButton`,void 0),I([O(`.scroll-right`)],_r.prototype,`rightButton`,void 0),V=class e extends _{constructor(...e){super(...e),this.value=``,this.label=``,this.active=!1,this.disabled=!1,this.closable=!1,this.locale=new v(this),this.slots=new We(this)}static{this.tagName=`minerva-page-tab`}static{this.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[C,E`
:host{
display: contents;
}
.icon ::slotted(svg){
width: 16px;
height: 16px;
}
`,w(Ke),w(Te)]}get surface(){return this.wrapper??null}focus(e){this.trigger?.focus(e)}handleSelect(){this.disabled||this.emit(`minerva-select`,{value:this.value},{cancelable:!0})}handleClose(){this.emit(`minerva-close`,{value:this.value})}updated(){h&&!this.label&&y(e.tagName,`set label to name the page.`)}render(){return j`<div
part="base"
class="pageTab"
data-value=${this.value}
?data-active=${this.active}
?data-disabled=${this.disabled}
>
<button
type="button"
part="trigger"
class="trigger"
title=${this.label||A}
aria-current=${this.active?`page`:A}
?disabled=${this.disabled}
@click=${this.handleSelect}
>
${this.slots.test(`icon`)?j`<span class="icon" aria-hidden="true"
><slot name="icon"></slot
></span>`:A}
<span part="label" class="label">${this.label}</span>
</button>
${this.closable||this.slots.test(`action`)?j`<span class="action"
><slot name="action"></slot>${this.closable?j`<button
type="button"
part="close-button"
class=${F(gr(!1,`close`))}
aria-label=${this.closeLabel??this.locale.t(`pageTabs.close`,{label:this.label,defaultValue:`Close {{label}}`})}
@click=${this.handleClose}
>
${Ne}
</button>`:A}</span
>`:A}
</div>`}},I([M({reflect:!0})],V.prototype,`value`,void 0),I([M()],V.prototype,`label`,void 0),I([M({type:Boolean,reflect:!0})],V.prototype,`active`,void 0),I([M({type:Boolean,reflect:!0})],V.prototype,`disabled`,void 0),I([M({type:Boolean,reflect:!0})],V.prototype,`closable`,void 0),I([M({attribute:`close-label`})],V.prototype,`closeLabel`,void 0),I([O(`.trigger`)],V.prototype,`trigger`,void 0),I([O(`.pageTab`)],V.prototype,`wrapper`,void 0)})))()}function yr(e,t,n,r){let i=Zt(t).filter(t=>t===e||!r||!Mt(r,t)),a=i.indexOf(e);return a===-1?null:(n?i[a-1]:i[a+1])??null}var br,xr,H;function Sr(){return(Sr=e((()=>{p(),x(),g(),m(),vn(),mn(),Tn(),fn(),dn(),d(),te(),N(),k(),Nt(),br=10,xr=5,H=class e extends _{constructor(...e){super(...e),this.open=!1,this.modal=!1,this.side=`bottom`,this.align=`center`,this.sideOffset=6,this.alignOffset=0,this.collisionPadding=8,this.matchAnchorWidth=!1,this.arrow=!1,this.label=``,this.anchorElement=null,this.anchor=``,this.aria=new s(this),this.presence=new ie(this,()=>this.panel),this.modalController=new bn(this),this.position=new xn(this,()=>({placement:en(this.side,this.align),offset:{mainAxis:this.sideOffset+(this.arrow?xr:0),crossAxis:this.alignOffset},matchAnchorWidth:this.matchAnchorWidth||!1,padding:this.collisionPadding,arrowElement:this.arrow?this.arrowEl??null:null,arrowSize:br,onPosition:e=>{let t=this.arrowEl;t&&(t.style.left=e.arrow.x==null?``:`${e.arrow.x}px`,t.style.top=e.arrow.y==null?``:`${e.arrow.y}px`)}})),this.layer=new hn(this,()=>({disableOutsidePointerEvents:this.modal,branches:()=>[this.triggerElement()],onEscapeKeyDown:()=>{this.reason=`escape`},onPointerDownOutside:()=>{this.reason=`outside`},onFocusOutside:()=>(this.reason=`focus-outside`,!this.modal),onDismiss:()=>this.requestOpenChange(!1,this.reason)})),this.focusScope=new pn(this,()=>({trapped:this.modal,loop:this.modal,restoreFocus:this.triggerElement()??!0})),this.reason=`outside`,this.wasPresent=!1,this.handleClick=e=>{if(e.defaultPrevented)return;let t=e.composedPath(),n=this.triggerElement();if(n&&t.includes(n)){this.requestOpenChange(!this.open,`trigger`);return}let r=t.find(e=>e instanceof Element&&e.hasAttribute(`data-popover-close`));r&&this.contains(r)&&this.requestOpenChange(!1,`close-slot`)},this.handleKeyDown=e=>{let t=this.panel,n=this.triggerElement();if(this.modal||!t||!n||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey||e.defaultPrevented)return;let r=e.shiftKey,i=Vt(document);if(!i||!Mt(t,i))return;let a=Zt(t);if(!(a.length===0||(r?i===t||i===a[0]:i===a[a.length-1])))return;e.preventDefault();let o=yr(n,this.tabContainer(),r,this.positioner)??n;this.requestOpenChange(!1,`tab`),this.open||o.focus()}}static{this.tagName=`minerva-popover`}static{this.styles=[C,_n,E`
:host{
display: contents;
}
`,w(Ee)]}show(){this.open=!0}hide(){this.open=!1}toggle(){this.open=!this.open}triggerElement(){return this.querySelector(`:scope > [slot='trigger']`)}anchorTarget(){if(this.anchorElement)return this.anchorElement;if(this.anchor){let e=this.getRootNode().getElementById?.(this.anchor);if(e)return e}return this.triggerElement()??this}requestOpenChange(e,t){e!==this.open&&this.emit(`minerva-open-change`,{open:e,reason:t},{cancelable:!0})&&(this.open=e)}tabContainer(){return It().find(e=>e.element===this.positioner)?.parent??document.body}syncTrigger(){let e=this.triggerElement();e&&(e.setAttribute(`aria-haspopup`,`dialog`),e.setAttribute(`aria-expanded`,String(this.open)),e.setAttribute(`data-state`,this.open?`open`:`closed`))}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleClick),this.deactivate(),$e(this.positioner)}willUpdate(e){e.has(`open`)&&this.presence.sync(this.open)}firstUpdated(){h&&!this.triggerElement()&&!this.anchor&&!this.anchorElement&&y(e.tagName,`no slot="trigger" element nor anchor: the panel is anchored to the element itself and nothing opens it.`)}deactivate(){this.focusScope.deactivate(),this.layer.deactivate(),this.modalController.deactivate()}updated(e){this.syncTrigger();let t=this.open||this.presence.present,n=this.positioner;if(t&&n&&!this.position.running){St(n);let e=this.anchorTarget();e&&this.position.start(e,n)}e.has(`open`)&&(this.open&&n?(this.modal&&this.modalController.activate(this),this.layer.activate(n),this.focusScope.activate(n),this.emit(`minerva-after-open`)):this.open||this.deactivate()),this.wasPresent&&!t&&(this.position.end(),$e(n),this.emit(`minerva-after-close`)),this.wasPresent=t}render(){if(!(this.open||this.presence.present))return j`<slot name="trigger"></slot>`;let{side:e,align:t}=Ut(this.position.placement),n=this.open?`open`:`closed`,r=this.label||this.aria.label,i=this.isConnected?Be(this):`ltr`;return j`<slot name="trigger"></slot>
<div
part="positioner"
class="positioner"
popover="manual"
data-side=${e}
data-align=${t}
>
<div
part="panel"
class="content"
role="dialog"
aria-modal=${this.modal?`true`:A}
aria-label=${r||A}
tabindex="-1"
dir=${i}
data-state=${n}
data-side=${e}
data-align=${t}
@keydown=${this.handleKeyDown}
>
<slot></slot>
${this.arrow?j`<span part="arrow" class="arrowWrapper" aria-hidden="true">
<svg
class="arrow"
width=${br}
height=${xr}
viewBox="0 0 30 10"
preserveAspectRatio="none"
>
<polygon points="0,0 30,0 15,10"></polygon>
</svg>
</span>`:A}
</div>
</div>`}},I([M({type:Boolean,reflect:!0})],H.prototype,`open`,void 0),I([M({type:Boolean,reflect:!0})],H.prototype,`modal`,void 0),I([M({reflect:!0})],H.prototype,`side`,void 0),I([M({reflect:!0})],H.prototype,`align`,void 0),I([M({type:Number,attribute:`side-offset`})],H.prototype,`sideOffset`,void 0),I([M({type:Number,attribute:`align-offset`})],H.prototype,`alignOffset`,void 0),I([M({type:Number,attribute:`collision-padding`})],H.prototype,`collisionPadding`,void 0),I([M({attribute:`match-anchor-width`})],H.prototype,`matchAnchorWidth`,void 0),I([M({type:Boolean,reflect:!0})],H.prototype,`arrow`,void 0),I([M()],H.prototype,`label`,void 0),I([M({attribute:!1})],H.prototype,`anchorElement`,void 0),I([M()],H.prototype,`anchor`,void 0),I([O(`[part=positioner]`)],H.prototype,`positioner`,void 0),I([O(`[part=panel]`)],H.prototype,`panel`,void 0),I([O(`[part=arrow]`)],H.prototype,`arrowEl`,void 0)})))()}var Cr;function wr(){return(wr=e((()=>{Cr=`minerva-prose{min-width:0;max-width:100%;color:var(--text-color,#1f2937);font-family:var(--font-family-sans,system-ui, -apple-system, "Segoe UI", sans-serif);font-size:var(--prose-font-size,var(--font-size-lg,1rem));font-weight:var(--font-weight-regular,400);font-style:normal;line-height:var(--line-height-relaxed,1.7);letter-spacing:0;overflow-wrap:anywhere}minerva-prose :where(h1,h2,h3,h4,h5,h6){color:inherit;font-family:inherit;font-style:inherit;font-weight:var(--font-weight-semibold,600);letter-spacing:0;background:0 0;border:0;margin:1.5em 0 .5em;padding:0;line-height:1.35}minerva-prose :where(h1){font-size:var(--font-size-3xl,1.75rem)}minerva-prose :where(h2){font-size:var(--font-size-2xl,1.375rem)}minerva-prose :where(h3){font-size:var(--font-size-xl,1.125rem)}minerva-prose :where(h4){font-size:var(--font-size-lg,1rem)}minerva-prose :where(h5,h6){font-size:var(--font-size-md,.875rem)}minerva-prose :where(h6){color:var(--text-muted-color,#6b7280)}minerva-prose :where(p,ul,ol,li,blockquote){font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;line-height:inherit;letter-spacing:inherit}minerva-prose :where(p){background:0 0;border:0;padding:0}minerva-prose :where(p,ul,ol,blockquote,pre,table,figure){margin:1em 0}minerva-prose>:first-child{margin-top:0}minerva-prose>:last-child{margin-bottom:0}minerva-prose :where(ul,ol){padding:0;padding-inline-start:1.5em}minerva-prose :where(li){margin:.25em 0}minerva-prose :where(li>ul,li>ol,li>p){margin-block:.25em}minerva-prose :where(blockquote){border:0;border-inline-start:3px solid var(--prose-border-color,var(--border-color,#d9dde3));color:inherit;background:0 0;padding:.25em 1em}minerva-prose :where(a){color:var(--primary-color-text,#1e4fbd);text-underline-offset:.18em;text-decoration:underline;text-decoration-thickness:1px}minerva-prose :where(a:hover){text-decoration-thickness:2px}minerva-prose :where(a:focus-visible){outline:2px solid var(--primary-color,#2563eb);outline-offset:3px}minerva-prose :where(code,kbd,samp){font-family:var(--font-family-mono,ui-monospace, Menlo, Consolas, monospace);font-size:.875em}minerva-prose :where(code){border-radius:calc(var(--prose-radius,var(--radius-sm,4px)) - 1px);background:var(--prose-code-bg,var(--control-color,#f6f7f9));padding:.12em .3em}minerva-prose :where(pre){max-width:100%;padding:var(--space-4,1rem);border:1px solid var(--prose-border-color,var(--border-color,#d9dde3));border-radius:var(--prose-radius,var(--radius-sm,4px));background:var(--prose-pre-bg,var(--surface-elevated-color,#fff));color:var(--text-color,#1f2937);font-family:var(--font-family-mono,ui-monospace, Menlo, Consolas, monospace);line-height:var(--line-height-base,1.5);white-space:pre;overflow-wrap:normal;tab-size:2;overflow-x:auto}minerva-prose :where(pre code){color:inherit;white-space:pre;background:0 0;border:0;border-radius:0;padding:0}minerva-prose :where(pre:focus-visible){outline:2px solid var(--primary-color,#2563eb);outline-offset:2px}minerva-prose :where(.hljs-comment,.hljs-quote){color:var(--text-muted-color,#6b7280)}minerva-prose :where(.hljs-keyword,.hljs-selector-tag,.hljs-name,.hljs-tag,.hljs-attr,.hljs-attribute,.hljs-doctag){color:var(--primary-color-text,#1e4fbd)}minerva-prose :where(.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-regexp,.hljs-type,.hljs-literal){color:var(--success-color-text,#15803d)}minerva-prose :where(.hljs-number,.hljs-title,.hljs-section,.hljs-built_in,.hljs-meta,.hljs-variable){color:var(--warning-color-text,#b45309)}minerva-prose :where(.hljs-subst,.hljs-operator,.hljs-punctuation,.hljs-params){color:var(--text-color,#1f2937)}minerva-prose :where(.hljs-addition){background:var(--success-color-subtle,#e7f6ec);color:var(--success-color-text,#15803d)}minerva-prose :where(.hljs-deletion){background:var(--danger-color-subtle,#fcebeb);color:var(--danger-color-text,#b91c1c)}minerva-prose :where(.hljs-strong){font-weight:var(--font-weight-bold,700)}minerva-prose :where(.hljs-emphasis){font-style:italic}minerva-prose :where(mark){background:var(--warning-color-subtle,#fdf3e1);color:inherit}minerva-prose :where(img,video){max-width:100%;height:auto}minerva-prose :where(figure){max-width:100%}minerva-prose :where(figcaption){margin-top:var(--space-2,.5rem);font-size:var(--font-size-md,.875rem);color:var(--text-muted-color,#6b7280)}minerva-prose :where(table){border-collapse:collapse;width:100%;color:inherit;overflow-wrap:normal;display:table}minerva-prose :where(tr){background:0 0;border:0}minerva-prose :where(th,td){border:1px solid var(--prose-border-color,var(--border-color,#d9dde3));text-align:start;vertical-align:top;white-space:normal;padding:.5em .75em}minerva-prose :where(th){background:var(--prose-code-bg,var(--control-color,#f6f7f9));font-weight:var(--font-weight-semibold,600)}minerva-prose :where(th>p,td>p){margin:0}minerva-prose :where(hr){border:0;border-top:1px solid var(--prose-border-color,var(--border-color,#d9dde3));background:0 0;height:0;margin:1.5em 0;padding:0}minerva-prose :where(sub,sup){font-size:.75em;line-height:0}@media print{minerva-prose :where(pre){overflow:visible}minerva-prose :where(pre,pre code){white-space:pre-wrap;overflow-wrap:anywhere}minerva-prose :where(pre,blockquote,figure,img,tr){break-inside:avoid}}`})))()}function Tr(){if(kr!==void 0)return kr;kr=null;try{if(typeof CSSStyleSheet<`u`&&`replaceSync`in CSSStyleSheet.prototype){let e=new CSSStyleSheet;e.replaceSync(Cr),kr=e}}catch{kr=null}return kr}function Er(e){if(Or.has(e))return;Or.add(e);let t=Tr();if(t&&`adoptedStyleSheets`in e)try{e.adoptedStyleSheets=[...e.adoptedStyleSheets,t];return}catch{}let n=e.nodeType===9?e:e.ownerDocument;if(!n)return;let r=e.nodeType===9?n.head??n.documentElement:e;if(r.querySelector?.(`#${Dr}`))return;let i=n.createElement(`style`);i.id=Dr,i.textContent=Cr,r.appendChild(i)}var Dr,Or,kr,Ar;function jr(){return(jr=e((()=>{g(),wr(),N(),Dr=`minerva-prose-styles`,Or=new WeakSet,Ar=class extends _{static{this.tagName=`minerva-prose`}static{this.styles=[C,E`
:host{
display: block;
}
`]}connectedCallback(){super.connectedCallback();let e=this.getRootNode();(e.nodeType===9||e.nodeType===11)&&Er(e)}render(){return j`<slot></slot>`}}})))()}var Mr,U,Nr;function Pr(){return(Pr=e((()=>{p(),x(),f(),b(),g(),st(),m(),Ue(),r(),wn(),N(),k(),D(),Mr=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Home`,`End`]),U=class extends _{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1,this.label=``,this.size=`medium`,this.color=`primary`,this.error=!1,this.helperText=``,this.errorMessage=``,this.slots=new We(this),this.ownsDescription=!1,this.handleClick=e=>{if(this.isDisabled){e.preventDefault(),e.stopImmediatePropagation();return}this.group||this.checked||(this.checked=!0,this.emit(`minerva-change`,{checked:!0,value:this.value}))},this.handleKeyDown=e=>{e.key===` `&&(e.preventDefault(),this.isDisabled||this.click())}}static{this.tagName=`minerva-radio`}static{this.styles=[C,E`
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
`,w(kt)]}get group(){let e=this.parentElement?.closest(`minerva-radio-group`);return e instanceof Nr?e:null}get isDisabled(){return this.disabled||!!this.group?.isDisabled}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleClick),this.addEventListener(`keydown`,this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleClick),this.removeEventListener(`keydown`,this.handleKeyDown)}updated(){let e=this.isDisabled;this.setAttribute(`role`,`radio`),this.setAttribute(`aria-checked`,String(this.checked)),e?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`),this.group||this.setAttribute(`tabindex`,e?`-1`:`0`);let t=this.error?this.errorMessage:this.helperText;t&&(this.ownsDescription||!this.hasAttribute(`aria-description`))?(this.ownsDescription=!0,this.setAttribute(`aria-description`,t)):!t&&this.ownsDescription&&(this.ownsDescription=!1,this.removeAttribute(`aria-description`))}render(){let e=this.group,t=e?.size??this.size,n=e?.color??this.color,r=this.error?this.errorMessage:this.helperText,i=!!this.label||this.slots.test(`[default]`);return j`<div
part="base"
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
<span class="radioMark" part="mark"></span>
${i?j`<span class="label" part="label"
>${this.label||j`<slot></slot>`}</span
>`:A}
</span>
${r?j`<div class="helperTextWrapper" aria-hidden="true">
${this.error&&this.errorMessage?j`<span class="errorIcon">${rt}</span>`:A}
<span
part="helper-text"
class=${F({helperText:!0,errorText:this.error})}
>${r}</span
>
</div>`:A}
</div>`}},I([M()],U.prototype,`value`,void 0),I([M({type:Boolean,reflect:!0})],U.prototype,`checked`,void 0),I([M({type:Boolean,reflect:!0})],U.prototype,`disabled`,void 0),I([M()],U.prototype,`label`,void 0),I([M({reflect:!0})],U.prototype,`size`,void 0),I([M({reflect:!0})],U.prototype,`color`,void 0),I([M({type:Boolean,reflect:!0})],U.prototype,`error`,void 0),I([M({attribute:`helper-text`})],U.prototype,`helperText`,void 0),I([M({attribute:`error-message`})],U.prototype,`errorMessage`,void 0),Nr=class e extends S{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.label=``,this.helperText=``,this.error=!1,this.direction=`vertical`,this.locale=new v(this),this.aria=new s(this,()=>this.labels),this.roving=new yn(this,()=>({getItems:()=>this.radios,isItemDisabled:e=>this.isDisabled||e.disabled,orientation:`both`,dir:Be(this),loop:!0})),this.observer=null,this.dirty=!1,this.handleClick=e=>{let t=e.target?.closest?.(`minerva-radio`);t instanceof U&&t.group===this&&this.select(t)},this.handleKeyDown=e=>{if(!e.defaultPrevented||!Mr.has(e.key))return;let t=this.roving.getActive();t instanceof U&&this.select(t)}}static{this.tagName=`minerva-radio-group`}static{this.dependencies=[U]}static{this.styles=[C,E`
:host{
display: block;
}
`,w(kt)]}get radios(){return Array.from(this.querySelectorAll(`minerva-radio`)).filter(e=>e instanceof U&&e.group===this)}focus(e){let t=this.radios;(t.find(e=>e.checked&&!e.disabled)??t.find(e=>!e.disabled))?.focus(e)}connectedCallback(){super.connectedCallback(),this.roving.attach(this),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleClick),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.requestUpdate()),this.observer.observe(this,{childList:!0,subtree:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`click`,this.handleClick),this.observer?.disconnect(),this.observer=null}getFormValue(){return this.value===``?null:this.value}getValidity(){return this.required&&this.value===``?{flags:{valueMissing:!0},message:this.locale.t(`validation.radioMissing`),anchor:this.radios.find(e=>!e.disabled)??null}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`?this.value=e:e===null&&(this.value=``)}willUpdate(e){e.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue)}updated(t){super.updated(t);let n=this.radios,r;for(let e of n)e.checked=this.value!==``&&e.value===this.value,e.checked&&(r??=e),e.requestUpdate();r&&!r.disabled&&!this.isDisabled?this.roving.setActive(r,{focus:!1}):this.roving.refresh();for(let e of n)(this.isDisabled||e.disabled)&&e.setAttribute(`tabindex`,`-1`);h&&this.value!==``&&n.length>0&&!r&&y(e.tagName,`value "${this.value}" matches no <minerva-radio> of the group.`)}select(e){this.isDisabled||e.disabled||e.value===this.value||(this.dirty=!0,this.value=e.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value}))}render(){let e=this.error||this.aria.attr(`aria-invalid`)===`true`,t=this.label,n=[this.helperText,this.aria.description].filter(Boolean).join(` `);return j`<div
part="base"
class=${F({radioGroupWrapper:!0,error:e})}
>
${t?j`<div id="label" part="label" class="groupLabel">${t}</div>`:A}
<div
part="group"
class=${F({radioGroup:!0,[this.direction]:!0})}
role="radiogroup"
aria-labelledby=${t?`label`:A}
aria-label=${t?A:this.aria.label??A}
aria-description=${n||A}
aria-required=${this.required?`true`:`false`}
aria-invalid=${e?`true`:`false`}
aria-disabled=${this.isDisabled?`true`:A}
>
<slot></slot>
</div>
${this.helperText?j`<div
part="helper-text"
aria-hidden="true"
class=${F({helperText:!0,errorText:e})}
>
${this.helperText}
</div>`:A}
</div>`}},I([M({attribute:!1})],Nr.prototype,`value`,void 0),I([M({attribute:`value`})],Nr.prototype,`defaultValue`,void 0),I([M()],Nr.prototype,`label`,void 0),I([M({attribute:`helper-text`})],Nr.prototype,`helperText`,void 0),I([M({type:Boolean,reflect:!0})],Nr.prototype,`error`,void 0),I([M({reflect:!0})],Nr.prototype,`direction`,void 0),I([M({reflect:!0})],Nr.prototype,`size`,void 0),I([M({reflect:!0})],Nr.prototype,`color`,void 0)})))()}var Fr,Ir,Lr,Rr,zr,W,Br;function Vr(){return(Vr=e((()=>{p(),x(),f(),b(),g(),m(),Ue(),ye(),N(),k(),D(),Kt(),Fr={small:12,medium:16,large:20},Ir=[0,1,2,3,4],Lr=Math.max(1,Math.round(Ir.length/5)),Rr=e=>Math.round(e*10)/10,zr=E`
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
`,W=class e extends S{constructor(...e){super(...e),this.value=0,this.defaultValue=0,this.max=10,this.size=`medium`,this.showValue=!1,this.interactive=!1,this.readonly=!1,this.hoverIndex=null,this.locale=new v(this),this.aria=new s(this,()=>this.labels),this.dirty=!1}static{this.tagName=`minerva-rating`}static{this.shadowRootOptions={...S.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[C,E`
:host{
display: inline-flex;
vertical-align: middle;
}
`,w(ce),zr]}get isInteractive(){return this.interactive&&!this.readonly&&!this.isDisabled}focus(e){this.root?.focus(e)}blur(){this.root?.blur()}getFormValue(){return String(this.value)}getValidity(){return this.required&&!(this.value>0)?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.root}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){if(typeof e==`string`&&e.trim()!==``){let t=Number(e);Number.isFinite(t)&&(this.value=t)}}willUpdate(t){t.has(`defaultValue`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`value`))&&(this.value=this.defaultValue),h&&(t.has(`value`)||t.has(`max`))&&(this.value<0||this.value>this.max)&&y(e.tagName,`value (${this.value}) is outside 0..max (${this.max}).`)}commit(e){e!==this.value&&(this.dirty=!0,this.value=e,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e}))}handleStarClick(e,t){if(!this.isInteractive)return;let n=e.currentTarget.getBoundingClientRect(),r=t+(e.clientX-n.left<n.width/2?.5:1);this.commit(Rr(r/5*this.max))}handleKeyDown(e){if(e.defaultPrevented||!this.isInteractive)return;let{max:t,value:n}=this,r=t/(Ir.length*2),i=t/Ir.length*Lr,a=e.key;Be(this)===`rtl`&&(a===`ArrowLeft`?a=`ArrowRight`:a===`ArrowRight`&&(a=`ArrowLeft`));let o;switch(a){case`ArrowRight`:case`ArrowUp`:o=Math.min(t,Rr(n+r));break;case`ArrowLeft`:case`ArrowDown`:o=Math.max(0,Rr(n-r));break;case`PageUp`:o=Math.min(t,Rr(n+i));break;case`PageDown`:o=Math.max(0,Rr(n-i));break;case`Home`:o=0;break;case`End`:o=t;break;default:return}e.preventDefault(),this.commit(o)}renderStar(e,t){let n=P({width:`${t}px`,height:`${t}px`,fontSize:`${t}px`});return e===`half`?j`<span part="star" class="star half" style=${n}
><span class="halfBase">${Se}</span
><span class="halfFill">${Tt}</span></span
>`:j`<span
part="star"
class=${F({star:!0,[e]:!0})}
style=${n}
>${Se}</span
>`}render(){let e=this.isInteractive,{value:t,max:n}=this,r=n>0?t/n*5:0,i=Math.floor(r),a=r-i,o=a>=.25&&a<.75,s=a>=.75?i+1:i,c=e&&this.hoverIndex!==null?this.hoverIndex:s+(o?.5:0),l=e=>e<Math.floor(c)?`full`:e<c?`half`:`empty`,u=Fr[this.size]??Fr.medium,d=this.aria.label??`${t.toFixed(1)} / ${n}`,ee=j`<span class="stars" part="stars" aria-hidden="true">
${Ir.map(t=>e?j`<button
type="button"
tabindex="-1"
class="starButton"
@click=${e=>this.handleStarClick(e,t)}
@mouseenter=${()=>this.hoverIndex=t+1}
>
${this.renderStar(l(t),u)}
</button>`:this.renderStar(l(t),u))}
</span>`,te=this.showValue?j`<span class="value" part="value"
><strong>${t.toFixed(1)}</strong>${this.ratingCount===void 0?A:j`<span class="count"
>(${this.ratingCount.toLocaleString(`en-US`)})</span
>`}</span
>`:A,f=F({rating:!0,[this.size]:!0,interactive:e});return e?j`<span
part="base"
class=${f}
role="slider"
tabindex="0"
aria-label=${d}
aria-description=${this.aria.description??A}
aria-valuenow=${t}
aria-valuemin="0"
aria-valuemax=${n}
aria-required=${this.required?`true`:A}
@keydown=${this.handleKeyDown}
@mouseleave=${()=>this.hoverIndex=null}
>${ee}${te}</span
>`:j`<span
part="base"
class=${f}
role="img"
aria-label=${d}
aria-description=${this.aria.description??A}
aria-disabled=${this.isDisabled?`true`:A}
>${ee}${te}</span
>`}},I([M({attribute:!1})],W.prototype,`value`,void 0),I([M({type:Number,attribute:`value`})],W.prototype,`defaultValue`,void 0),I([M({type:Number})],W.prototype,`max`,void 0),I([M({reflect:!0})],W.prototype,`size`,void 0),I([M({type:Boolean,attribute:`show-value`})],W.prototype,`showValue`,void 0),I([M({type:Number,attribute:`rating-count`})],W.prototype,`ratingCount`,void 0),I([M({type:Boolean,reflect:!0})],W.prototype,`interactive`,void 0),I([M({type:Boolean,reflect:!0})],W.prototype,`readonly`,void 0),I([T()],W.prototype,`hoverIndex`,void 0),I([O(`.rating`)],W.prototype,`root`,void 0),Br=class extends _{constructor(...e){super(...e),this.dimensions=[],this.max=10,this.size=`medium`,this.interactive=!1,this.readonly=!1,this.hideValue=!1}static{this.tagName=`minerva-rating-scale`}static{this.dependencies=[W]}static{this.styles=[C,E`
:host{
display: block;
}
`,w(ce)]}handleChange(e,t){e.stopPropagation();let{value:n}=e.detail;this.dimensions=this.dimensions.map(e=>e.key===t?{...e,value:n}:e),this.emit(`minerva-change`,{key:t,value:n,dimensions:this.dimensions})}render(){return j`<div class="scale" part="base">
${this.dimensions.map(e=>j`<div class="scaleRow" part="row" title=${e.hint??A}>
<span class="scaleLabel" part="label">${e.label}</span>
<minerva-rating
.value=${e.value}
.max=${this.max}
.size=${this.size}
?show-value=${!this.hideValue}
?interactive=${this.interactive}
?readonly=${this.readonly}
aria-label=${`${e.label} ${e.value.toFixed(1)} / ${this.max}`}
@minerva-change=${t=>this.handleChange(t,e.key)}
></minerva-rating>
</div>`)}
</div>`}},I([M({attribute:!1})],Br.prototype,`dimensions`,void 0),I([M({type:Number})],Br.prototype,`max`,void 0),I([M({reflect:!0})],Br.prototype,`size`,void 0),I([M({type:Boolean,reflect:!0})],Br.prototype,`interactive`,void 0),I([M({type:Boolean,reflect:!0})],Br.prototype,`readonly`,void 0),I([M({type:Boolean,attribute:`hide-value`})],Br.prototype,`hideValue`,void 0)})))()}var Hr,Ur,Wr,Gr,Kr;function qr(){return(qr=e((()=>{x(),f(),g(),m(),ne(),N(),k(),Hr=0,Ur=class e extends _{constructor(...e){super(...e),this.value=``,this.disabled=!1,this.label=``,this.selected=!1,this.highlighted=!1}static{this.tagName=`minerva-option`}static{this.styles=[C,E`
:host{
display: block;
outline: none;
}
`,w(u)]}get text(){return this.textValue??(this.label||this.textContent?.trim()||``)}get displayLabel(){return this.label||this.textContent?.trim()||``}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.tabIndex=-1}updated(t){super.updated(t),this.setAttribute(`aria-selected`,String(this.selected)),this.toggleAttribute(`data-highlighted`,this.highlighted),this.toggleAttribute(`data-disabled`,this.disabled),this.dataset.state=this.selected?`checked`:`unchecked`,this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`),h&&t.has(`value`)&&this.value===``&&this.isConnected&&y(e.tagName,`an option needs a non-empty "value" (the empty value means "nothing selected").`)}render(){return j`<div
part="base"
class="item"
data-state=${this.selected?`checked`:`unchecked`}
?data-highlighted=${this.highlighted}
?data-disabled=${this.disabled}
>
<span class="itemText" part="label"><slot></slot></span>
${this.selected?j`<span class="itemIndicator" part="indicator" aria-hidden="true"
>${De}</span
>`:A}
</div>`}},I([M({reflect:!0})],Ur.prototype,`value`,void 0),I([M({type:Boolean,reflect:!0})],Ur.prototype,`disabled`,void 0),I([M()],Ur.prototype,`label`,void 0),I([M({attribute:`text-value`})],Ur.prototype,`textValue`,void 0),I([M({type:Boolean,attribute:!1})],Ur.prototype,`selected`,void 0),I([M({type:Boolean,attribute:!1})],Ur.prototype,`highlighted`,void 0),Wr=class extends _{constructor(...e){super(...e),this.observer=null}static{this.tagName=`minerva-option-group`}static{this.styles=[C,E`
:host{
display: block;
}
`]}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`group`),this.syncLabel(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.syncLabel()),this.observer.observe(this,{childList:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null}syncLabel(){let e=this.querySelector(`:scope > minerva-select-label`);e?(e.id||=`minerva-select-label-${Hr++}`,this.setAttribute(`aria-labelledby`,e.id)):this.removeAttribute(`aria-labelledby`)}render(){return j`<slot></slot>`}},Gr=class extends _{static{this.tagName=`minerva-select-label`}static{this.styles=[C,E`
:host{
display: block;
}
`,w(u)]}render(){return j`<div class="label" part="base"><slot></slot></div>`}},Kr=class extends _{static{this.tagName=`minerva-select-separator`}static{this.styles=[C,E`
:host{
display: block;
}
`,w(u)]}connectedCallback(){super.connectedCallback(),this.setAttribute(`aria-hidden`,`true`)}render(){return j`<div class="separator" part="base"></div>`}}})))()}var Jr,Yr,Xr,Zr,Qr,G;function $r(){return($r=e((()=>{p(),x(),f(),b(),g(),m(),fn(),Ue(),ne(),qr(),N(),k(),D(),Nt(),Jr=10,Yr=e=>Array.isArray(e.options),Xr=e=>e.getAttribute(`aria-disabled`)===`true`,Zr=e=>e instanceof Ur?e.value:e.dataset.value??``,Qr=e=>e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey,G=class e extends S{constructor(...e){super(...e),this.value=``,this.defaultValue=``,this.options=[],this.open=!1,this.placeholder=``,this.size=`medium`,this.invalid=!1,this.highlighted=null,this.locale=new v(this),this.aria=new s(this,()=>this.labels),this.typeahead=Ft(),this.floating=new Cn(this,()=>({anchor:()=>this.trigger,floating:()=>this.positioner,placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`min`,fitViewportHeight:!0,branches:()=>[this.trigger],onDismiss:()=>this.requestOpen(!1),returnFocusOnEscape:()=>this.trigger,focusable:!0})),this.openIntent=`selected`,this.scrollPending=!1,this.dirty=!1,this.observer=null}static{this.tagName=`minerva-select`}static{this.shadowRootOptions={...S.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[C,_n,E`
:host{
display: inline-flex;
width: 100%;
min-width: 0;
vertical-align: middle;
}
`,w(u)]}focus(e){this.trigger?.focus(e)}blur(){this.trigger?.blur()}show(){this.open=!0}hide(){this.open=!1}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.requestUpdate()),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:[`value`,`disabled`,`label`,`text-value`]}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.typeahead.reset()}get lightOptions(){return Array.from(this.querySelectorAll(`minerva-option`)).filter(e=>e instanceof Ur)}get dataOptions(){return(this.options??[]).flatMap(e=>Yr(e)?e.options:[e])}get items(){return[...this.dataOptions.map(e=>({value:e.value,disabled:!!e.disabled,text:e.textValue??e.label,label:e.label})),...this.lightOptions.map(e=>({value:e.value,disabled:e.disabled,text:e.text,label:e.displayLabel}))]}getOptions(){let e=this.listbox;return e?[...Array.from(e.querySelectorAll(`[role=option]`)),...this.lightOptions]:[]}findOption(e){if(e!==null)return this.getOptions().find(t=>Zr(t)===e)}getFormValue(){return this.value}getValidity(){return this.required&&this.value===``?{flags:{valueMissing:!0},message:this.locale.t(`validation.selectMissing`),anchor:this.trigger}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}requestOpen(e){e!==this.open&&(e&&this.isDisabled||this.emit(`minerva-open-change`,{open:e},{cancelable:!0})&&(this.open=e))}openWith(e){this.openIntent=e,this.requestOpen(!0)}close(e){e&&this.trigger?.focus(),this.requestOpen(!1)}commitValue(e){e!==this.value&&(this.value=e,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:e}))}selectValue(e){this.commitValue(e),this.close(!0)}willUpdate(e){if(e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.value=this.defaultValue),e.has(`open`)&&this.open){let e=this.openIntent;this.openIntent=`selected`;let t=this.items.filter(e=>!e.disabled),n=e===`last`?t[t.length-1]:e===`first`?t[0]:t.find(e=>e.value===this.value)??t[0];this.typeahead.reset(),this.scrollPending=!0,this.highlighted=n?.value??null}e.has(`open`)&&!this.open&&(this.highlighted=null)}updated(e){super.updated(e);for(let e of this.lightOptions)e.selected=e.value===this.value,e.highlighted=this.open&&e.value===this.highlighted;if(this.floating.sync(this.open),this.open&&this.listbox){if(e.has(`open`)||e.has(`highlighted`)){let e=this.findOption(this.highlighted)??this.listbox;e.getRootNode()===this.shadowRoot?this.shadowRoot?.activeElement!==e&&e.focus({preventScroll:!0}):document.activeElement!==e&&e.focus({preventScroll:!0})}this.scrollPending&&(this.scrollPending=!1,this.findOption(this.highlighted)?.scrollIntoView?.({block:`nearest`}))}h&&this.checkOptions()}checkOptions(){let t=this.items;if(t.length===0)return;let n=new Set;for(let r of t)n.has(r.value)&&y(e.tagName,`several options have the value "${r.value}"; option values must be unique.`),n.add(r.value);this.value!==``&&!n.has(this.value)&&y(e.tagName,`value "${this.value}" does not match any option.`)}handleTriggerKeyDown(e){if(this.open)return;let{key:t}=e;if(Qr(e)&&(t!==` `||this.typeahead.getBuffer()!==``)){let n=this.items,r=this.typeahead.search(t,n,n.findIndex(e=>e.value===this.value));e.preventDefault(),r!==-1&&this.commitValue(n[r].value);return}let n={Enter:`selected`," ":`selected`,ArrowDown:`selected`,ArrowUp:this.value===``?`last`:`selected`,Home:`first`,End:`last`};t in n&&(e.preventDefault(),this.openWith(n[t]))}handleListboxKeyDown(e){let{key:t}=e;if(t===`Tab`){this.close(!0);return}let n=this.getOptions(),r=n.findIndex(e=>Zr(e)===this.highlighted),i=r===-1?void 0:n[r],a=()=>{i&&!Xr(i)&&this.selectValue(Zr(i))};if(t===`Enter`||t===`ArrowUp`&&e.altKey){e.preventDefault(),a();return}if(t===` `&&this.typeahead.getBuffer()===``){e.preventDefault(),a();return}if(e.ctrlKey||e.metaKey||e.altKey)return;let o=Ht({currentIndex:r,count:n.length,key:t,loop:!1,isDisabled:e=>Xr(n[e]),pageSize:Jr});if((o!==null||t.startsWith(`Arrow`)||t.startsWith(`Page`))&&e.preventDefault(),o===null&&Qr(e)){let i=this.typeahead.search(t,n.map(e=>({text:e instanceof Ur?e.text:e.dataset.textValue??e.textContent??``,disabled:Xr(e)})),r);i!==-1&&(e.preventDefault(),this.scrollPending=!0,this.highlighted=Zr(n[i]));return}o!==null&&(this.typeahead.reset(),this.scrollPending=!0,this.highlighted=Zr(n[o]))}optionFromEvent(e){let t=this.getOptions();return e.composedPath().find(e=>t.includes(e))}handleListboxPointerMove(e){let t=this.optionFromEvent(e);if(!t||Xr(t))return;let n=Zr(t);this.highlighted!==n&&(this.scrollPending=!1,this.highlighted=n)}handleListboxClick(e){let t=this.optionFromEvent(e);t&&!Xr(t)&&this.selectValue(Zr(t))}renderDataOption(e){let t=e.value===this.value;return j`<div
part="option"
class="item"
role="option"
tabindex="-1"
aria-selected=${String(t)}
aria-disabled=${e.disabled?`true`:A}
data-state=${t?`checked`:`unchecked`}
?data-highlighted=${this.highlighted===e.value}
?data-disabled=${!!e.disabled}
data-value=${e.value}
data-text-value=${e.textValue??A}
>
<span class="itemText">${e.label}</span>
${t?j`<span class="itemIndicator" aria-hidden="true"
>${De}</span
>`:A}
</div>`}renderDataOptions(){return(this.options??[]).map((e,t)=>{if(!Yr(e))return this.renderDataOption(e);let n=`group-label-${t}`;return j`<div role="group" aria-labelledby=${n}>
<div id=${n} class="label" part="group-label">${e.label}</div>
${e.options.map(e=>this.renderDataOption(e))}
</div>`})}render(){let e=this.isDisabled,t=this.value===``,n=t?void 0:this.items.find(e=>e.value===this.value),r=this.aria.label,{side:i,align:a}=Ut(this.floating.position.placement);return j`<button
part="trigger"
type="button"
role="combobox"
aria-haspopup="listbox"
aria-expanded=${String(this.open)}
aria-controls=${this.open?`listbox`:A}
aria-autocomplete="none"
aria-label=${r??A}
aria-description=${this.aria.description??A}
aria-required=${this.required?`true`:A}
aria-invalid=${this.invalid||this.aria.attr(`aria-invalid`)===`true`?`true`:A}
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
>${be}</span
>
</button>
${this.open?j`<div
part="positioner"
class="positioner"
popover="manual"
data-side=${i}
>
<div
id="listbox"
part="listbox"
role="listbox"
tabindex="-1"
aria-label=${r??A}
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
</div>`:A}`}},I([M({attribute:!1})],G.prototype,`value`,void 0),I([M({attribute:`value`})],G.prototype,`defaultValue`,void 0),I([M({attribute:!1})],G.prototype,`options`,void 0),I([M({type:Boolean,reflect:!0})],G.prototype,`open`,void 0),I([M()],G.prototype,`placeholder`,void 0),I([M({reflect:!0})],G.prototype,`size`,void 0),I([M({type:Boolean,reflect:!0})],G.prototype,`invalid`,void 0),I([T()],G.prototype,`highlighted`,void 0),I([O(`.trigger`)],G.prototype,`trigger`,void 0),I([O(`.positioner`)],G.prototype,`positioner`,void 0),I([O(`[role=listbox]`)],G.prototype,`listbox`,void 0)})))()}var ei,ti,ni,K,ri;function ii(){return(ii=e((()=>{p(),x(),b(),g(),m(),he(),N(),k(),D(),Kt(),ei=e=>e==null||e===``?void 0:typeof e==`number`||/^\d+(\.\d+)?$/.test(e)?`${e}px`:e,ti=e=>typeof e!=`number`&&!/^\d+(\.\d+)?$/.test(e)?e:`var(--space-${String(e).replace(`.`,`-`)})`,ni=[C,E`

:host(:dir(rtl)) .animation-wave{
animation-direction: reverse;
}
`],K=class e extends _{constructor(...e){super(...e),this.variant=`text`,this.animation=`pulse`,this.loaded=!1,this.decorative=!1,this.lines=1,this.avatar=!1,this.avatarSize=`40`,this.avatarShape=`circle`,this.active=!1,this.paragraph=!1,this.heading=!1,this.locale=new v(this),this.aria=new s(this)}static{this.tagName=`minerva-skeleton`}static{this.styles=[...ni,E`
:host{
display: block;
}
:host([decorative][variant="circular"]){
display: inline-block;
vertical-align: middle;
}
`,w(ue)]}updated(t){h&&t.has(`lines`)&&!(Number.isInteger(this.lines)&&this.lines>=0)&&y(e.tagName,`lines must be a non-negative integer (got ${this.lines}).`)}block(e,t={}){return j`<div
class=${F({skeleton:!0,[`animation-${this.animation}`]:!0,...e})}
style=${P(t)}
></div>`}renderAvatar(){if(!this.avatar)return A;let e=ei(this.avatarSize);return this.block({avatar:!0,[`avatar-${this.avatarShape}`]:!0},{width:e,height:e})}renderTitle(){return this.heading?this.block({title:!0}):A}renderParagraph(){return this.paragraph?j`<div class="paragraph">
${[`100%`,`100%`,`92%`,`60%`].map(e=>this.block({},{width:e,height:`16px`}))}
</div>`:A}renderLines(){if(this.paragraph||this.heading)return A;let e=Number.isFinite(this.lines)?Math.max(0,Math.floor(this.lines)):0;return Array.from({length:e},()=>this.block({[this.variant]:!0},{width:ei(this.width),height:ei(this.height),borderRadius:ei(this.borderRadius)}))}render(){if(this.loaded)return j`<slot></slot>`;if(this.decorative){let e=this.variant===`circular`?ei(this.size??this.width??`32`):void 0;return j`<span
part="base"
aria-hidden="true"
class=${F({skeleton:!0,decorative:!0,[this.variant]:!0,[`animation-${this.animation}`]:!0})}
style=${P({width:e??ei(this.width),height:e??ei(this.height),borderRadius:ei(this.borderRadius)})}
></span>`}let e=this.variant===`card`?j`<div class=${F({card:!0,active:this.active})}>
${this.renderAvatar()}
<div class="cardContent">
${this.renderTitle()} ${this.renderParagraph()}
</div>
</div>`:j`${this.renderAvatar()}
<div class="content">
${this.renderTitle()} ${this.renderLines()}
${this.renderParagraph()}
</div>`;return j`<div
part="base"
role="status"
aria-busy="true"
aria-label=${this.aria.label??this.locale.t(`common.loading`)}
class=${F({skeletonRoot:!0,withAvatar:this.avatar})}
>
${e}
</div>`}},I([M({reflect:!0})],K.prototype,`variant`,void 0),I([M({reflect:!0})],K.prototype,`animation`,void 0),I([M({type:Boolean,reflect:!0})],K.prototype,`loaded`,void 0),I([M({type:Boolean,reflect:!0})],K.prototype,`decorative`,void 0),I([M()],K.prototype,`size`,void 0),I([M()],K.prototype,`width`,void 0),I([M()],K.prototype,`height`,void 0),I([M({attribute:`border-radius`})],K.prototype,`borderRadius`,void 0),I([M({type:Number})],K.prototype,`lines`,void 0),I([M({type:Boolean})],K.prototype,`avatar`,void 0),I([M({attribute:`avatar-size`})],K.prototype,`avatarSize`,void 0),I([M({attribute:`avatar-shape`})],K.prototype,`avatarShape`,void 0),I([M({type:Boolean})],K.prototype,`active`,void 0),I([M({type:Boolean})],K.prototype,`paragraph`,void 0),I([M({type:Boolean})],K.prototype,`heading`,void 0),ri=class e extends _{constructor(...e){super(...e),this.lines=3,this.lineHeight=`1em`,this.gap=`2`,this.noShrinkLast=!1,this.animation=`pulse`}static{this.tagName=`minerva-skeleton-text`}static{this.styles=[...ni,E`
:host{
display: block;
}
`,w(ue)]}updated(t){h&&t.has(`lines`)&&!(Number.isInteger(this.lines)&&this.lines>=0)&&y(e.tagName,`lines must be a non-negative integer (got ${this.lines}).`)}render(){let e=Number.isFinite(this.lines)?Math.max(0,Math.floor(this.lines)):0;return j`<div
part="base"
aria-hidden="true"
class="skeletonText"
style=${P({gap:ti(this.gap)})}
>
${Array.from({length:e},(t,n)=>j`<span
part="line"
class="skeleton decorative text animation-${this.animation}"
style=${P({height:ei(this.lineHeight),width:!this.noShrinkLast&&n===e-1?`70%`:`100%`})}
></span>`)}
</div>`}},I([M({type:Number})],ri.prototype,`lines`,void 0),I([M({attribute:`line-height`})],ri.prototype,`lineHeight`,void 0),I([M()],ri.prototype,`gap`,void 0),I([M({type:Boolean,attribute:`no-shrink-last`})],ri.prototype,`noShrinkLast`,void 0),I([M({reflect:!0})],ri.prototype,`animation`,void 0)})))()}var ai,oi;function si(){return(si=e((()=>{x(),g(),st(),m(),ln(),le(),N(),k(),D(),Kt(),ai=320,oi=class e extends _{constructor(...e){super(...e),this.asideWidth=ai,this.collapseBelow=`md`,this.gap=6,this.slots=new We(this)}static{this.tagName=`minerva-split-layout`}static{this.styles=[C,E`
:host{
display: block;
min-width: 0;
}
`,w(nt)]}get validAsideWidth(){return Number.isFinite(this.asideWidth)&&this.asideWidth>0}updated(){h&&!this.validAsideWidth&&y(e.tagName,`aside-width must be a finite positive number (got ${String(this.asideWidth)}); using ${ai}.`)}render(){let e=this.slots.test(`aside`),t=this.validAsideWidth?this.asideWidth:ai;return j`<div
class="root"
part="base"
style=${P({"--split-layout-aside-width":`${t}px`,"--split-layout-gap":cn(this.gap)})}
>
<div
class=${F({grid:!0,[this.collapseBelow]:!0,hasAside:e})}
>
<div class="main" part="main"><slot></slot></div>
${e?j`<div class="aside" part="aside">
<slot name="aside"></slot>
</div>`:A}
</div>
</div>`}},I([M({type:Number,attribute:`aside-width`})],oi.prototype,`asideWidth`,void 0),I([M({attribute:`collapse-below`,reflect:!0})],oi.prototype,`collapseBelow`,void 0),I([M({converter:on})],oi.prototype,`gap`,void 0)})))()}var ci,li,ui,di,fi,pi,mi,hi;function gi(){return(gi=e((()=>{p(),x(),g(),st(),m(),ln(),t(),N(),k(),D(),Kt(),ci={start:`flex-start`,center:`center`,end:`flex-end`,stretch:`stretch`,baseline:`baseline`},li={start:`flex-start`,center:`center`,end:`flex-end`,between:`space-between`,around:`space-around`,evenly:`space-evenly`},ui=()=>typeof HTMLSlotElement<`u`&&typeof HTMLSlotElement.prototype.assign==`function`,di=`minerva-stack-item-`,fi=e=>Array.from(e.childNodes).filter(e=>e.nodeType===1||e.nodeType===3&&!!e.textContent?.trim()),pi=class extends _{constructor(...e){super(...e),this.direction=`column`,this.wrap=!1,this.attached=!1,this.aria=new s(this),this.slots=new We(this),this.manualSlots=!1,this.fallbackSlotted=new Set}static{this.tagName=`minerva-stack`}static{this.styles=[C,E`
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
`,w(it)]}get resolvedDirection(){return this.direction}get resolvedAlign(){return this.align}createRenderRoot(){if(!this.shadowRoot){this.manualSlots=ui();let e=this.constructor;this.attachShadow({...e.shadowRootOptions,slotAssignment:this.manualSlots?`manual`:`named`})}return super.createRenderRoot()}renderSeparator(){let e=this.separator;return typeof e==`function`?e():e}get hasSeparator(){let e=this.separator;return e!=null&&e!==``}fallbackItems(){return Array.from(this.children).filter(e=>{let t=e.getAttribute(`slot`);return t===null||this.fallbackSlotted.has(e)&&t!==``})}releaseFallbackSlots(e=[]){for(let t of this.fallbackSlotted)e.includes(t)||(t.getAttribute(`slot`)?.startsWith(di)&&t.removeAttribute(`slot`),this.fallbackSlotted.delete(t))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this.releaseFallbackSlots()}updated(){if(this.manualSlots){let e=fi(this),t=Array.from(this.renderRoot.querySelectorAll(`slot`));t.length===1?t[0].assign(...e):t.forEach((t,n)=>t.assign(e[n]))}else if(this.hasSeparator){let e=this.fallbackItems();e.forEach((e,t)=>{let n=`${di}${t}`;this.fallbackSlotted.add(e),e.getAttribute(`slot`)!==n&&e.setAttribute(`slot`,n)}),this.releaseFallbackSlots(e)}else this.releaseFallbackSlots();h&&this.attached&&!this.aria.label&&y(this.constructor.tagName,`attached stacks are exposed as role="group": set aria-label (or aria-labelledby) to name the group.`)}renderItems(){return this.hasSeparator?this.manualSlots?Array.from({length:fi(this).length},(e,t)=>j`${t>0?this.renderSeparator():A}<slot></slot>`):j`${Array.from({length:this.fallbackItems().length},(e,t)=>j`${t>0?this.renderSeparator():A}<slot
name=${`${di}${t}`}
></slot>`)}<slot></slot>`:j`<slot></slot>`}render(){this.slots;let e=this.resolvedDirection,t=this.resolvedAlign,n={};return this.gap!==void 0&&this.gap!==``&&!this.attached&&(n.gap=cn(this.gap)),t&&ci[t]&&(n.alignItems=ci[t]),this.justify&&li[this.justify]&&(n.justifyContent=li[this.justify]),j`<div
part="base"
class=${F({stack:!0,[e]:!0,wrap:this.wrap,attached:this.attached})}
style=${P(n)}
role=${this.attached?`group`:A}
aria-label=${this.attached?this.aria.label??A:A}
>
${this.renderItems()}
</div>`}},I([M({reflect:!0})],pi.prototype,`direction`,void 0),I([M({converter:on})],pi.prototype,`gap`,void 0),I([M({reflect:!0})],pi.prototype,`align`,void 0),I([M({reflect:!0})],pi.prototype,`justify`,void 0),I([M({type:Boolean,reflect:!0})],pi.prototype,`wrap`,void 0),I([M({attribute:`separator`})],pi.prototype,`separator`,void 0),I([M({type:Boolean,reflect:!0})],pi.prototype,`attached`,void 0),mi=class extends pi{static{this.tagName=`minerva-hstack`}constructor(){super(),this.direction=`row`}get resolvedDirection(){return`row`}get resolvedAlign(){return this.align??`center`}},hi=class extends pi{static{this.tagName=`minerva-vstack`}constructor(){super(),this.direction=`column`}get resolvedDirection(){return`column`}get resolvedAlign(){return this.align??`stretch`}}})))()}var _i;function vi(){return(vi=e((()=>{p(),x(),b(),g(),m(),pe(),N(),k(),D(),nn(),_i=class e extends _{constructor(...e){super(...e),this.items=[],this.value=``,this.navigable=!1,this.locale=new v(this),this.aria=new s(this)}static{this.tagName=`minerva-steps`}static{this.styles=[C,E`
:host{
display: block;
}
`,w(c)]}select(e){e.disabled||e.value===this.value||this.emit(`minerva-change`,{value:e.value},{cancelable:!0})&&(this.value=e.value)}updated(){h&&this.value&&this.items.length&&!this.items.some(e=>e.value===this.value)&&y(e.tagName,`value "${this.value}" matches no step: no step is marked current.`)}render(){let e=this.items??[],t=e.findIndex(e=>e.value===this.value),n=!this.navigable;return j`<ol
part="base"
class="steps"
aria-label=${this.aria.label??this.locale.t(`steps.label`)}
>
${Jt(e,e=>e.value,(e,r)=>{let i=r===t,a=t>-1&&r<t,o=j`<span
part="number"
class="number"
aria-hidden="true"
>${r+1}</span
><span part="label" class="label">${e.label}</span>`;return j`<li
part="step"
class=${F({step:!0,current:i,complete:a})}
aria-current=${n&&i?`step`:A}
>
${n?j`<span part="button" class="button static"
>${o}</span
>`:j`<button
type="button"
part="button"
class="button"
?disabled=${!!e.disabled}
aria-current=${i?`step`:A}
@click=${()=>this.select(e)}
>
${o}
</button>`}
</li>`})}
</ol>`}},I([M({attribute:!1})],_i.prototype,`items`,void 0),I([M({reflect:!0})],_i.prototype,`value`,void 0),I([M({type:Boolean,reflect:!0})],_i.prototype,`navigable`,void 0)})))()}var yi,bi,q;function xi(){return(xi=e((()=>{p(),x(),b(),g(),st(),m(),Ue(),l(),N(),k(),D(),Gt(),yi=400,bi={start:`labelStart`,end:`labelEnd`,top:`labelTop`,bottom:`labelBottom`},q=class e extends S{constructor(...e){super(...e),this.checked=!1,this.defaultChecked=!1,this.value=`on`,this.label=``,this.offLabel=``,this.onLabel=``,this.variant=`slider`,this.size=`medium`,this.color=`primary`,this.shape=`round`,this.labelPlacement=`end`,this.iconPlacement=`start`,this.loading=!1,this.noRipple=!1,this.readonly=!1,this.invalid=!1,this.rippleActive=!1,this.dirty=!1,this.locale=new v(this),this.aria=new s(this,()=>this.labels),this.slots=new We(this)}static{this.tagName=`minerva-switch`}static{this.shadowRootOptions={...S.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[C,E`
:host{
display: inline-flex;
vertical-align: middle;
}
`,w(Ce)]}get bilateral(){return!!this.offLabel&&!!this.onLabel}get segmented(){return this.variant===`segmented`&&this.bilateral}get blocked(){return this.isDisabled||this.loading||this.readonly}focus(e){if(this.segmented){this.renderRoot.querySelector(`.segmentActive`)?.focus(e);return}this.input?.focus(e)}blur(){(this.shadowRoot?.activeElement)?.blur()}click(){this.input?.click()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.rippleTimer)}getFormValue(){return this.checked?this.value:null}getValidity(){return this.required&&!this.checked?{flags:{valueMissing:!0},message:this.locale.t(`validation.checkMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.checked=this.defaultChecked}restoreFormState(e){this.checked=e!=null&&e!==``}willUpdate(t){t.has(`defaultChecked`)&&!this.dirty&&(this.hasUpdated||this.hasAttribute(`checked`))&&(this.checked=this.defaultChecked),h&&t.has(`variant`)&&this.variant===`segmented`&&!this.bilateral&&y(e.tagName,`variant="segmented" needs both off-label and on-label; rendering a slider.`)}handleChange(){if(this.blocked){this.input.checked=this.checked;return}this.dirty=!0,this.checked=this.input.checked,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{checked:this.checked,value:this.value})}handleKeyDown(e){e.key===`Enter`&&(e.preventDefault(),!this.blocked&&this.input.click())}handleClick(e){if(this.readonly){e.preventDefault();return}this.noRipple||this.blocked||(clearTimeout(this.rippleTimer),this.rippleActive=!0,this.rippleTimer=setTimeout(()=>this.rippleActive=!1,yi))}setState(e){this.blocked||e===this.checked||this.input.click()}renderInput(e){let t=this.invalid||this.aria.attr(`aria-invalid`)===`true`;return j`<input
part="input"
type="checkbox"
role=${e?A:`switch`}
class=${e?`hiddenInput`:``}
.checked=${rn(this.checked)}
?disabled=${this.isDisabled||this.loading}
?required=${this.required}
tabindex=${e?`-1`:A}
aria-hidden=${e?`true`:A}
aria-label=${e?A:this.aria.label??A}
aria-description=${e?A:this.aria.description??A}
aria-checked=${e?A:String(this.checked)}
aria-disabled=${!e&&(this.isDisabled||this.loading)?`true`:A}
aria-busy=${this.loading?`true`:A}
aria-invalid=${!e&&t?`true`:A}
aria-readonly=${!e&&this.readonly?`true`:A}
aria-required=${!e&&this.required?`true`:A}
@change=${this.handleChange}
@click=${this.handleClick}
@keydown=${this.handleKeyDown}
/>`}render(){let e=this.blocked,t=this.isDisabled;if(this.segmented)return j`<span
part="base"
role="group"
aria-label=${this.aria.label??A}
aria-description=${this.aria.description??A}
aria-disabled=${e?`true`:A}
data-invalid=${this.invalid?`true`:A}
data-required=${this.required?`true`:A}
class=${F({segmented:!0,[this.size]:!0,[this.color]:!0,disabled:e})}
>
${this.renderInput(!0)}
${[!1,!0].map(t=>{let n=this.checked===t;return j`<button
part="segment"
type="button"
class=${F({segment:!0,segmentActive:n})}
?disabled=${e}
aria-pressed=${String(n)}
@click=${()=>this.setState(t)}
>
${t?this.onLabel:this.offLabel}
</button>`})}
</span>`;let n=this.bilateral,r=this.slots.test(`icon`),i=F({switch:!0,[this.size]:!0,[bi[this.labelPlacement]]:!n,[this.color]:!0,checked:this.checked,checkedLarge:this.checked&&this.size===`large`,disabled:t,loading:this.loading,square:this.shape===`square`,ripple:!this.noRipple&&this.rippleActive,bilateral:n}),a=j`<span class="switchBase">
${this.renderInput(!1)}
<span class="track" part="track"></span>
<span class="thumb" part="thumb"
>${this.iconPlacement===`start`&&r?j`<span class="icon"><slot name="icon"></slot></span>`:A}</span
>
${this.noRipple?A:j`<span class="rippleEffect"></span>`}
</span>`,o=this.iconPlacement===`end`&&r?j`<span class="icon"><slot name="icon"></slot></span>`:A;if(n){let t=t=>j`<button
part="side"
type="button"
class=${F({side:!0,sideActive:this.checked===t})}
?disabled=${e}
@click=${()=>this.setState(t)}
>
${t?this.onLabel:this.offLabel}
</button>`;return j`<span part="base" class=${i}
>${t(!1)}${a}${t(!0)}${o}</span
>`}let s=this.label||this.slots.test(`[default]`)?j`<span class="label" part="label"
>${this.label||j`<slot></slot>`}</span
>`:A,c=this.labelPlacement===`start`||this.labelPlacement===`top`;return j`<label part="base" class=${i}
>${c?s:A}${a}${o}${c?A:s}</label
>`}},I([M({attribute:!1})],q.prototype,`checked`,void 0),I([M({type:Boolean,attribute:`checked`,reflect:!0})],q.prototype,`defaultChecked`,void 0),I([M()],q.prototype,`value`,void 0),I([M()],q.prototype,`label`,void 0),I([M({attribute:`off-label`})],q.prototype,`offLabel`,void 0),I([M({attribute:`on-label`})],q.prototype,`onLabel`,void 0),I([M({reflect:!0})],q.prototype,`variant`,void 0),I([M({reflect:!0})],q.prototype,`size`,void 0),I([M({reflect:!0})],q.prototype,`color`,void 0),I([M({reflect:!0})],q.prototype,`shape`,void 0),I([M({attribute:`label-placement`,reflect:!0})],q.prototype,`labelPlacement`,void 0),I([M({attribute:`icon-placement`})],q.prototype,`iconPlacement`,void 0),I([M({type:Boolean,reflect:!0})],q.prototype,`loading`,void 0),I([M({type:Boolean,attribute:`no-ripple`})],q.prototype,`noRipple`,void 0),I([M({type:Boolean,reflect:!0})],q.prototype,`readonly`,void 0),I([M({type:Boolean,reflect:!0})],q.prototype,`invalid`,void 0),I([T()],q.prototype,`rippleActive`,void 0),I([O(`input`)],q.prototype,`input`,void 0)})))()}var Si,Ci,wi,Ti,Ei;function Di(){return(Di=e((()=>{p(),x(),g(),m(),wn(),Ct(),N(),k(),D(),Si=0,Ci=e=>e.parentElement?.closest(`minerva-tabs`)??null,wi=class e extends _{constructor(...e){super(...e),this.variant=`line`,this.color=`primary`,this.orientation=`horizontal`,this.activationMode=`automatic`,this.noLoop=!1,this.label=``,this.aria=new s(this),this.baseId=`minerva-tabs-${++Si}`,this.rovingKey=``,this.observer=null,this.roving=new yn(this,()=>({getItems:()=>this.tabs,orientation:this.orientation,dir:Be(this),loop:!this.noLoop})),this.handleKeyDownCapture=()=>this.ensureRoving(),this.handleFocusIn=e=>{if(this.activationMode!==`automatic`)return;let t=this.tabs.find(t=>t===e.target);t&&!t.disabled&&this.select(t.value)}}static{this.tagName=`minerva-tabs`}static{this.styles=[C,E`
:host{
display: block;
min-width: 0;
}
`,w(o)]}get tabs(){return Array.from(this.querySelectorAll(`minerva-tab`)).filter(e=>Ci(e)===this)}get panels(){return Array.from(this.querySelectorAll(`minerva-tab-panel`)).filter(e=>Ci(e)===this)}select(e){e!==this.value&&this.emit(`minerva-change`,{value:e},{cancelable:!0})&&(this.value=e)}connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(this.observer=new MutationObserver(()=>this.sync()),this.observer.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`,`disabled`]}))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.rovingKey=``}updated(t){t.has(`value`)&&h&&this.value!==void 0&&this.tabs.length>0&&!this.tabs.some(e=>e.value===this.value)&&y(e.tagName,`value "${this.value}" does not match any <minerva-tab>.`),this.sync()}ensureRoving(){if(!this.tablist)return;let e=`${this.orientation}|${Be(this)}|${this.noLoop}`;e!==this.rovingKey&&(this.rovingKey=e,this.roving.detach(),this.roving.attach(this.tablist))}sync(){if(!this.tablist)return;this.ensureRoving();let e=this.tabs,t=this.panels;for(let t of e)t.id||=`${this.baseId}-tab-${t.value}`;for(let e of t)e.id||=`${this.baseId}-panel-${e.value}`;for(let n of e){let e=t.find(e=>e.value===n.value);n.sync(this,n.value===this.value,e?.id)}for(let n of t){let t=e.find(e=>e.value===n.value);n.sync(this,n.value===this.value,t?.id)}let n=e.find(e=>e.value===this.value&&!e.disabled)??e.find(e=>!e.disabled);n?this.roving.setActive(n,{focus:!1}):this.roving.refresh()}render(){return j`<div
part="base"
class=${F({tabs:!0,[this.color]:!0,vertical:this.orientation===`vertical`})}
data-orientation=${this.orientation}
@keydown=${{handleEvent:this.handleKeyDownCapture,capture:!0}}
>
<div
part="tablist"
role="tablist"
aria-label=${this.label||this.aria.label||A}
aria-orientation=${this.orientation}
data-orientation=${this.orientation}
class=${F({list:!0,[`${this.variant}List`]:!0,verticalList:this.orientation===`vertical`})}
@focusin=${this.handleFocusIn}
>
<slot name="tab" @slotchange=${()=>this.sync()}></slot>
</div>
<slot @slotchange=${()=>this.sync()}></slot>
</div>`}},I([M({reflect:!0})],wi.prototype,`value`,void 0),I([M({reflect:!0})],wi.prototype,`variant`,void 0),I([M({reflect:!0})],wi.prototype,`color`,void 0),I([M({reflect:!0})],wi.prototype,`orientation`,void 0),I([M({reflect:!0,attribute:`activation-mode`})],wi.prototype,`activationMode`,void 0),I([M({type:Boolean,reflect:!0,attribute:`no-loop`})],wi.prototype,`noLoop`,void 0),I([M()],wi.prototype,`label`,void 0),I([O(`[role="tablist"]`)],wi.prototype,`tablist`,void 0),Ti=class extends _{constructor(...e){super(...e),this.value=``,this.disabled=!1,this.selected=!1,this.group=null,this.handleMouseDown=e=>{if(this.disabled){e.preventDefault();return}e.button===0&&!e.ctrlKey?this.select():e.preventDefault()},this.handleKeyDown=e=>{e.defaultPrevented||this.disabled||e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),this.select())},this.handleClick=e=>{!this.disabled&&e.detail===0&&this.select()}}static{this.tagName=`minerva-tab`}static{this.styles=[C,E`
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
`,w(o)]}sync(e,t,n){this.group=e,this.selected=t,n?this.setAttribute(`aria-controls`,n):this.removeAttribute(`aria-controls`),this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.hasAttribute(`slot`)||(this.slot=`tab`),this.setAttribute(`role`,`tab`),this.addEventListener(`mousedown`,this.handleMouseDown),this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mousedown`,this.handleMouseDown),this.removeEventListener(`keydown`,this.handleKeyDown),this.removeEventListener(`click`,this.handleClick),this.group=null}select(){(this.group??Ci(this))?.select(this.value)}updated(){this.setAttribute(`aria-selected`,String(this.selected)),this.setAttribute(`data-state`,this.selected?`active`:`inactive`),this.disabled?(this.setAttribute(`aria-disabled`,`true`),this.setAttribute(`data-disabled`,``)):(this.removeAttribute(`aria-disabled`),this.removeAttribute(`data-disabled`));let e=this.group?.orientation??`horizontal`;this.setAttribute(`data-orientation`,e)}render(){let e=this.group,t=e?.variant??`line`,n=e?.orientation===`vertical`;return j`<span
part="base"
class=${F({trigger:!0,[`${t}Trigger`]:!0,verticalTrigger:n,[this.color??``]:!!this.color,colored:!!this.color})}
data-state=${this.selected?`active`:`inactive`}
data-orientation=${e?.orientation??`horizontal`}
><slot></slot
></span>`}},I([M({reflect:!0})],Ti.prototype,`value`,void 0),I([M({type:Boolean,reflect:!0})],Ti.prototype,`disabled`,void 0),I([M({reflect:!0})],Ti.prototype,`color`,void 0),I([M({type:Boolean,reflect:!0})],Ti.prototype,`selected`,void 0),Ei=class extends _{constructor(...e){super(...e),this.value=``,this.forceMount=!1,this.orientation=`horizontal`,this.selected=!1,this.stamped=[]}static{this.tagName=`minerva-tab-panel`}static{this.styles=[C,E`
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
`,w(o)]}get template(){return Array.from(this.children).find(e=>e instanceof HTMLTemplateElement)??null}syncContent(){let e=this.template;if(this.selected||this.forceMount){if(e&&!this.stamped.length){let t=this.ownerDocument.importNode(e.content,!0);this.stamped=Array.from(t.childNodes),e.after(t)}return}for(let e of this.stamped)e.parentNode?.removeChild(e);this.stamped=[]}sync(e,t,n){this.orientation=e.orientation,this.selected=t,this.hidden=!t,this.syncContent(),this.setAttribute(`data-state`,t?`active`:`inactive`),this.setAttribute(`data-orientation`,e.orientation),n?this.setAttribute(`aria-labelledby`,n):this.removeAttribute(`aria-labelledby`),this.requestUpdate()}willUpdate(e){e.has(`forceMount`)&&this.hasUpdated&&this.syncContent()}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tabpanel`),this.hasAttribute(`tabindex`)||(this.tabIndex=0)}render(){return j`<div
part="base"
class="panel"
data-orientation=${this.orientation}
>
<slot></slot>
</div>`}},I([M({reflect:!0})],Ei.prototype,`value`,void 0),I([M({type:Boolean,reflect:!0,attribute:`force-mount`})],Ei.prototype,`forceMount`,void 0)})))()}var Oi,J;function ki(){return(ki=e((()=>{p(),x(),f(),b(),g(),st(),m(),xe(),N(),k(),D(),Kt(),nn(),Oi=600,J=class e extends _{constructor(...e){super(...e),this.color=`neutral`,this.variant=`subtle`,this.size=`medium`,this.shape=`rounded`,this.closable=!1,this.clickable=!1,this.toggle=!1,this.loading=!1,this.elevation=!1,this.disabled=!1,this.noRipple=!1,this.ripples=[],this.nextRippleId=0,this.rippleTimers=new Set,this.locale=new v(this),this.aria=new s(this),this.slots=new We(this)}static{this.tagName=`minerva-tag`}static{this.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[C,E`
:host{
display: inline-flex;
max-width: 100%;
vertical-align: middle;
}
.closeIcon svg{
display: block;
}
`,w(wt)]}focus(e){(this.actionButton??this.closeButton)?.focus(e)}disconnectedCallback(){super.disconnectedCallback(),this.rippleTimers.forEach(clearTimeout),this.rippleTimers.clear(),this.ripples=[]}labelText(){return Array.from(this.childNodes).filter(e=>e.nodeType===3||e.nodeType===1&&!e.hasAttribute(`slot`)).map(e=>e.textContent??``).join(``).replace(/\s+/g,` `).trim()}get inactive(){return this.disabled||this.loading}handleClick(e){this.inactive||(this.addRipple(e),this.toggle&&(this.pressed=!this.pressed,this.emit(`minerva-change`,{pressed:this.pressed})))}handleClose(e){e.stopPropagation(),!this.disabled&&this.emit(`minerva-close`,{})}addRipple(e){if(this.noRipple)return;let t=e.currentTarget.parentElement;if(!t)return;let n=t.getBoundingClientRect(),r=e.detail===0,i=Math.max(n.width,n.height),a=i/2,o=this.nextRippleId++,s=r?n.width/2-a:e.clientX-n.left-a,c=r?n.height/2-a:e.clientY-n.top-a;this.ripples=[...this.ripples,{id:o,style:{width:`${i}px`,height:`${i}px`,left:`${s}px`,top:`${c}px`}}];let l=setTimeout(()=>{this.rippleTimers.delete(l),this.ripples=this.ripples.filter(e=>e.id!==o)},Oi);this.rippleTimers.add(l)}updated(){h&&(this.toggle||this.pressed!==void 0)&&!this.clickable&&y(e.tagName,`pressed / toggle require clickable: the tag is not a button otherwise.`)}render(){let e=this.toggle||this.pressed!==void 0,t=this.closable?this.labelText():``,n=this.closeLabel??(t?this.locale.t(`tag.closeWithLabel`,{label:t}):this.locale.t(`tag.close`)),r=j`${this.loading?j`<span class="spinner" aria-hidden="true"></span>`:j`${this.slots.test(`icon`)?j`<span class="icon"><slot name="icon"></slot></span>`:A}${this.slots.test(`avatar`)?j`<span class="avatar"><slot name="avatar"></slot></span>`:A}`}<span class="content" part="label"><slot></slot></span>`;return j`<div
part="base"
class=${F({tag:!0,[this.color]:!0,[this.variant]:!0,[this.size]:!0,[this.shape]:!0,clickable:this.clickable&&!this.inactive,pressed:this.clickable&&!!this.pressed,elevation:this.elevation,disabled:this.disabled,loading:this.loading})}
aria-busy=${this.loading?`true`:A}
data-component="tag"
>
${this.clickable?j`<button
type="button"
part="action"
class="action"
?disabled=${this.inactive}
aria-pressed=${e?String(!!this.pressed):A}
aria-label=${this.aria.label??A}
aria-description=${this.aria.description??A}
@click=${this.handleClick}
>
${r}
</button>`:r}
${this.closable&&!this.loading?j`<button
type="button"
part="close-button"
class="closeIcon"
?disabled=${this.disabled}
aria-label=${n}
title=${n}
@click=${this.handleClose}
>
<slot name="close-icon">${Ne}</slot>
</button>`:A}
${Jt(this.ripples,e=>e.id,e=>j`<span class="ripple" style=${P(e.style)}></span>`)}
</div>`}},I([M({reflect:!0})],J.prototype,`color`,void 0),I([M({reflect:!0})],J.prototype,`variant`,void 0),I([M({reflect:!0})],J.prototype,`size`,void 0),I([M({reflect:!0})],J.prototype,`shape`,void 0),I([M({type:Boolean,reflect:!0})],J.prototype,`closable`,void 0),I([M({type:Boolean,reflect:!0})],J.prototype,`clickable`,void 0),I([M({type:Boolean,reflect:!0})],J.prototype,`pressed`,void 0),I([M({type:Boolean,reflect:!0})],J.prototype,`toggle`,void 0),I([M({type:Boolean,reflect:!0})],J.prototype,`loading`,void 0),I([M({type:Boolean,reflect:!0})],J.prototype,`elevation`,void 0),I([M({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),I([M({attribute:`close-label`})],J.prototype,`closeLabel`,void 0),I([M({type:Boolean,attribute:`no-ripple`})],J.prototype,`noRipple`,void 0),I([T()],J.prototype,`ripples`,void 0),I([O(`.action`)],J.prototype,`actionButton`,void 0),I([O(`.closeIcon`)],J.prototype,`closeButton`,void 0)})))()}function Ai(e,t){if(t.length===0)return[e];let n=[...t].sort((e,t)=>t.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`);return e.split(new RegExp(n))}function ji(e,t){try{let t=JSON.parse(e);if(Array.isArray(t))return t.filter(e=>typeof e==`string`)}catch{}return h&&y(Pi,`the ${t} attribute is not a JSON array of strings.`),null}function Mi(e,t){let n=(e??``).trim();return n?n.startsWith(`[`)?ji(n,t)??[]:n.split(`,`).map(e=>e.trim()).filter(Boolean):[]}function Ni(e){let t=(e??``).trim();return t?t.startsWith(`[`)?ji(t,`separators`)??[...Fi]:t.split(/\s+/):[]}var Pi,Fi,Ii,Li,Ri,Y;function zi(){return(zi=e((()=>{p(),x(),f(),b(),g(),m(),Xe(),fn(),ft(),Ue(),xe(),ze(),N(),k(),D(),Nt(),Gt(),nn(),Pi=`minerva-tag-input`,Fi=[`,`,`Enter`],Ii=`Enter`,Li=[`\r
`,`
`,`\r`],Ri=0,Y=class extends S{constructor(...e){super(...e),this._value=[],this.defaultValue=[],this.options=[],this.separators=[...Fi],this.noCommitOnBlur=!1,this.placeholder=``,this.size=`medium`,this.invalid=!1,this.readonly=!1,this.draft=``,this.requestedOpen=!1,this.highlight=0,this.listId=`minerva-tag-input-list-${Ri++}`,this.locale=new v(this),this.aria=new s(this,()=>this.labels),this.floating=new Cn(this,()=>({anchor:()=>this.combobox,floating:()=>this.list,branches:()=>[this],placement:`bottom-start`,offset:{mainAxis:4},matchAnchorWidth:`exact`,onDismiss:()=>this.setOpen(!1)})),this.dirty=!1,this.composing=!1,this.navigating=!1,this.highlightKey=``}static{this.tagName=Pi}static{this.shadowRootOptions={...S.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[C,_n,E`
:host{
display: block;
min-width: 0;
}
`,w(wt),w(Ke),w(`.combobox { ${Re.replace(/@charset[^;]*;/g,``)} }`),w(Dt),E`

.combobox > .root{
flex-direction: row;
gap: 0;
}

.list{
inset: auto;
}
`]}get value(){return this._value}set value(e){this.dirty=!0,this.setValue(e)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}setValue(e){let t=this._value;this._value=Array.isArray(e)?e.map(String):typeof e==`string`?Mi(e,`value`):[],this.requestUpdate(`value`,t)}get blocked(){return this.isDisabled||this.readonly}get isOpen(){return this.requestedOpen&&!this.blocked}get filtered(){let e=this.value,t=this.draft.trim(),n=[...new Set(this.options.map(e=>e.trim()).filter(Boolean))].filter(t=>!e.includes(t)),r=n.map(e=>({tag:e,label:e,filterValue:e}));t&&!e.includes(t)&&!n.includes(t)&&r.unshift({tag:t,label:this.createLabel?this.createLabel(t):this.locale.t(`tagInput.create`,{tag:t}),filterValue:t});let i=t.toLowerCase();return i?r.filter(e=>e.filterValue.toLowerCase().includes(i)):r}get enterCommits(){return this.separators.includes(Ii)}get splitters(){return this.separators.filter(e=>e!==Ii&&e!==``)}getFormValue(){if(!this.name)return null;let e=new FormData;for(let t of this.value)e.append(this.name,t);return e}getValidity(){return this.required&&this.value.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.setValue([...this.defaultValue]),this.draft=``,this.requestedOpen=!1,this.navigating=!1}restoreFormState(e){e instanceof FormData?this.value=e.getAll(this.name).filter(e=>typeof e==`string`):typeof e==`string`&&(this.value=[e])}willUpdate(e){e.has(`defaultValue`)&&!this.dirty&&this.setValue([...this.defaultValue]),this.blocked&&(this.requestedOpen=!1);let t=`${this.filtered.length}\u0000${this.draft}`;if(t!==this.highlightKey&&(this.highlightKey=t,this.highlight=0),h&&e.has(`value`)){let e=new Set,t=this.value.find(t=>e.size===e.add(t).size);t!==void 0&&y(Pi,`value contains the tag "${t}" more than once: tags are unique (removing one removes its position only).`)}}updated(e){super.updated(e),this.floating.sync(this.isOpen),this.input?.toggleAttribute(Pt,!this.isOpen&&this.draft!==``)}setOpen(e){e&&this.blocked||e!==this.requestedOpen&&this.emit(`minerva-open-change`,{open:e},{cancelable:!0})&&(this.requestedOpen=e)}setTags(e){this.value=e,this.emit(`minerva-change`,{value:[...e]})}setDraft(e){this.draft=e,this.input&&this.input.value!==e&&(this.input.value=e)}commitAll(e,t=``){if(this.blocked||this.composing)return;let n=this.value,r=[...n];for(let t of e){let e=t.trim();e&&!r.includes(e)&&r.push(e)}r.length!==n.length&&this.setTags(r),this.navigating=!1,this.setDraft(t)}commit(e){this.commitAll([e])}select(e){this.commit(e.tag),this.setOpen(!1)}removeAt(e){this.blocked||(this.setTags(this.value.filter((t,n)=>n!==e)),this.input?.focus())}handleInput(){let e=this.input.value;if(this.blocked){this.input.value=this.draft;return}this.navigating=!1;let t=this.splitters,n=this.composing||t.length===0?[e]:Ai(e,t);n.length>1?this.commitAll(n.slice(0,-1),n[n.length-1]):this.draft=e,this.setOpen(!0),this.emit(`minerva-input`,{value:this.draft})}handlePaste(e){if(this.blocked||this.composing)return;let t=e.clipboardData?.getData(`text`)??``,n=this.enterCommits?[...this.splitters,...Li]:this.splitters;if(!n.some(e=>t.includes(e)))return;e.preventDefault();let r=this.draft,i=this.input.selectionStart??r.length,a=this.input.selectionEnd??r.length,o=r.slice(0,i)+t+r.slice(a);this.commitAll(Ai(o,n)),this.setOpen(!1)}handleKeyDown(e){if(this.blocked||this.composing||e.isComposing||e.keyCode===229)return;let t=this.filtered,n=t.length,r=this.isOpen,i=this.draft.trim(),a=this.value;switch(e.key){case`ArrowDown`:case`ArrowUp`:if(e.preventDefault(),this.navigating=!0,this.setOpen(!0),n>0){let t=e.key===`ArrowDown`?1:-1;this.highlight=(this.highlight+t+n)%n}break;case`Enter`:e.preventDefault(),this.enterCommits?!this.navigating&&(!i||a.includes(i))?this.commit(this.draft):r&&t[this.highlight]?this.select(t[this.highlight]):(this.commit(this.draft),this.setOpen(!1)):this.navigating&&r&&t[this.highlight]&&this.select(t[this.highlight]);break;case`Escape`:this.navigating=!1,this.setDraft(``),r&&!e.defaultPrevented&&(e.preventDefault(),this.setOpen(!1));break;case`Backspace`:this.draft===``&&a.length>0&&(e.preventDefault(),this.setTags(a.slice(0,-1)))}}handleFocus(){this.blocked||this.setOpen(!0)}handleBlur(){this.setOpen(!1),this.noCommitOnBlur||this.commit(this.draft)}clearAll(){this.setDraft(``),this.setTags([]),this.emit(`minerva-clear`),this.input?.focus()}renderTag(e,t){let n=this.isDisabled,r=this.removeLabel?this.removeLabel(e):this.locale.t(`tagInput.remove`,{tag:e});return j`<div
part="tag"
class=${F({tag:!0,neutral:!0,subtle:!0,large:!0,rounded:!0,disabled:n})}
data-component="tag"
>
<span class="content"><span class="label">${e}</span></span>
${this.readonly?A:j`<button
part="remove-button"
type="button"
class="closeIcon"
aria-label=${r}
title=${r}
?disabled=${n}
@click=${e=>{e.stopPropagation(),this.removeAt(t)}}
>
${Ne}
</button>`}
</div>`}renderList(e){let t=this.aria.label;return j`<ul
part="listbox"
id=${this.listId}
role="listbox"
popover="manual"
aria-label=${t??A}
class="list"
>
${e.length===0?j`<li class="empty" role="presentation">
${this.emptyText??this.locale.t(`tagInput.empty`)}
</li>`:A}
${e.map((e,t)=>j`<li
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
</ul>`}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.value,r=this.isOpen,i=this.filtered,a=this.draft.trim(),o=r?i[this.highlight]:void 0,s=e=>e.preventDefault();return j`<div part="base" class="root">
${n.length>0?j`<div part="tags" class="values">
${Jt(n,(e,t)=>`${t}-${e}`,(e,t)=>this.renderTag(e,t))}
</div>`:A}
<div class="entry">
<div class="combobox">
<div
part="field"
class=${F({root:!0,outline:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
data-component="input"
>
<input
part="input"
class="field"
type="text"
role="combobox"
aria-label=${this.aria.label??A}
aria-description=${this.aria.description??A}
aria-expanded=${r?`true`:`false`}
aria-controls=${r?this.listId:A}
aria-autocomplete="list"
aria-activedescendant=${o?`${this.listId}-option-${this.highlight}`:A}
aria-invalid=${this.invalid?`true`:A}
aria-required=${this.required?`true`:A}
autocomplete="off"
spellcheck="false"
placeholder=${this.placeholder||A}
.value=${rn(this.draft)}
?disabled=${t}
?readonly=${this.readonly}
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
${r?this.renderList(i):A}
</div>
${this.readonly?A:j`<button
part="add-button"
type="button"
class=${F({iconButton:!0,neutral:!0,"variant-ghost":!0,medium:!0,square:!0,disabled:t||!a||n.includes(a)})}
aria-label=${this.addLabel??e(`tagInput.add`)}
?disabled=${t||!a||n.includes(a)}
@mousedown=${s}
@click=${()=>{this.commit(this.draft),this.input?.focus()}}
>
${gt}
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
${Ne}
</button>`}
</div>
</div>`}},I([M({attribute:!1})],Y.prototype,`value`,null),I([M({attribute:`value`,converter:{fromAttribute:e=>Mi(e,`value`)}})],Y.prototype,`defaultValue`,void 0),I([M({converter:{fromAttribute:e=>Mi(e,`options`)}})],Y.prototype,`options`,void 0),I([M({converter:{fromAttribute:Ni}})],Y.prototype,`separators`,void 0),I([M({type:Boolean,attribute:`no-commit-on-blur`})],Y.prototype,`noCommitOnBlur`,void 0),I([M()],Y.prototype,`placeholder`,void 0),I([M({reflect:!0})],Y.prototype,`size`,void 0),I([M({type:Boolean,reflect:!0})],Y.prototype,`invalid`,void 0),I([M({type:Boolean,reflect:!0})],Y.prototype,`readonly`,void 0),I([M({attribute:`empty-text`})],Y.prototype,`emptyText`,void 0),I([M({attribute:`add-label`})],Y.prototype,`addLabel`,void 0),I([M({attribute:`clear-label`})],Y.prototype,`clearLabel`,void 0),I([M({attribute:!1})],Y.prototype,`removeLabel`,void 0),I([M({attribute:!1})],Y.prototype,`createLabel`,void 0),I([T()],Y.prototype,`draft`,void 0),I([T()],Y.prototype,`requestedOpen`,void 0),I([T()],Y.prototype,`highlight`,void 0),I([O(`input.field`)],Y.prototype,`input`,void 0),I([O(`.combobox`)],Y.prototype,`combobox`,void 0),I([O(`.list`)],Y.prototype,`list`,void 0)})))()}var Bi;function Vi(){return(Vi=e((()=>{p(),x(),f(),g(),m(),xt(),N(),k(),D(),Bi=class e extends _{constructor(...e){super(...e),this.variant=`default`,this.aria=new s(this)}static{this.tagName=`minerva-text-link`}static{this.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[C,E`
:host{
display: inline;
}
:host([variant="action"]){
display: block;
}
:host([variant="subtle"]){
display: inline-flex;
}
`,w(Ie)]}focus(e){this.anchor?.focus(e)}blur(){this.anchor?.blur()}click(){this.anchor?.click()}updated(){h&&!this.href&&y(e.tagName,`href is missing: without it the link is not focusable nor announced as a link (use a button for actions).`)}render(){return j`<a
part="link"
class=${F({textLink:!0,[this.variant]:!0})}
href=${this.href??A}
target=${this.target??A}
rel=${this.rel??A}
download=${this.download??A}
hreflang=${this.hreflang??A}
aria-label=${this.aria.label??A}
aria-description=${this.aria.description??A}
aria-current=${this.aria.attr(`aria-current`)??A}
><slot></slot>${this.variant===`subtle`?At:A}</a
>`}},I([M({reflect:!0})],Bi.prototype,`variant`,void 0),I([M()],Bi.prototype,`href`,void 0),I([M()],Bi.prototype,`target`,void 0),I([M()],Bi.prototype,`rel`,void 0),I([M()],Bi.prototype,`download`,void 0),I([M()],Bi.prototype,`hreflang`,void 0),I([O(`a`)],Bi.prototype,`anchor`,void 0)})))()}function Hi(){Wi=null}var Ui,Wi,Gi,Ki,qi,Ji,Yi;function Xi(){return(Xi=e((()=>{x(),b(),g(),m(),Qe(),N(),k(),Nt(),Ui=`(prefers-color-scheme: dark)`,Wi=null,Gi=()=>typeof window<`u`&&window.matchMedia?.(Ui).matches?`dark`:`light`,Ki=(e,t)=>{typeof document<`u`&&(document.cookie=t===null?`${e}=; path=/; max-age=0; SameSite=Lax`:$t(e,t))},qi=class extends _{constructor(...e){super(...e),this.persist=!1,this.locale=new v(this),this.observer=null,this.media=null,this.onScheme=()=>this.onSystemChange()}static{this.styles=[C,E`
:host{
display: inline-flex;
vertical-align: middle;
}
`,w(et)]}get config(){return Et(this,`minerva-config`)}onSystemChange(){this.requestUpdate()}connectedCallback(){if(super.connectedCallback(),typeof MutationObserver<`u`){this.observer=new MutationObserver(()=>this.requestUpdate());let e=this.config;this.observer.observe(e??document.documentElement,{attributes:!0,attributeFilter:e?[`theme`,`palette`,`data-theme`]:[`data-theme`,`data-palette`]})}typeof window<`u`&&window.matchMedia&&(this.media=window.matchMedia(Ui),this.media.addEventListener?.(`change`,this.onScheme))}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=null,this.media?.removeEventListener?.(`change`,this.onScheme),this.media=null}renderGroup(e,t,n){return j`<div part="base" class="group" role="group" aria-label=${e}>
${t.map(e=>j`<button
type="button"
part="item"
class="item"
data-active=${e.active?`true`:A}
aria-pressed=${e.active?`true`:`false`}
@click=${()=>n(e.value)}
>
${e.text}
</button>`)}
</div>`}},I([M({type:Boolean,reflect:!0})],qi.prototype,`persist`,void 0),Ji=class extends qi{constructor(...e){super(...e),this.hideSystem=!1,this.select=e=>{e!==this.theme&&this.emit(`minerva-change`,{value:e},{cancelable:!0})&&this.apply(e)}}static{this.tagName=`minerva-theme-toggle`}get theme(){let e=this.config;if(e){let t=e.theme;return t===`github-dark`?`dark`:qt(t)?t:null}if(Wi)return Wi;let t=this.persist?Wt(document.cookie,Yt):void 0;if(qt(t))return t;let n=document.documentElement.getAttribute(`data-theme`);return qt(n)?n:`system`}get resolvedTheme(){let e=this.config;if(e)return e.resolvedMode??Gi();let t=this.theme;return t===`light`||t===`dark`?t:Gi()}connectedCallback(){if(super.connectedCallback(),!this.config&&this.persist&&!Wi){let e=Wt(document.cookie,Yt);qt(e)&&this.apply(e,!1)}}onSystemChange(){!this.config&&Wi===`system`&&this.apply(`system`,!1),super.onSystemChange()}apply(e,t=this.persist){let n=this.config;if(n){n.theme=e;return}Wi=e;let r=document.documentElement,i=e===`system`?Gi():e;r.setAttribute(`data-theme`,i),r.style.colorScheme=i,t&&Ki(`theme`,e),this.requestUpdate()}render(){let e=this.locale.t,t=this.theme,n=this.hideSystem?[`light`,`dark`]:[`light`,`dark`,`system`];return this.renderGroup(e(`themeToggle.label`,{theme:this.resolvedTheme}),n.map(n=>({value:n,text:this.labels?.[n]??e(`themeToggle.${n}`),active:t===n})),this.select)}},I([M({type:Boolean,reflect:!0,attribute:`hide-system`})],Ji.prototype,`hideSystem`,void 0),I([M({attribute:!1})],Ji.prototype,`labels`,void 0),Yi=class e extends qi{constructor(...e){super(...e),this.palettes=[...Lt],this.showDefault=!1,this.select=e=>{e!==this.palette&&this.emit(`minerva-change`,{value:e},{cancelable:!0})&&this.apply(e)}}static{this.tagName=`minerva-palette-toggle`}get palette(){let e=this.config,t=e?e.palette:document.documentElement.getAttribute(`data-palette`);return tn(t)?t:null}connectedCallback(){if(super.connectedCallback(),!this.config&&this.persist){let e=Wt(document.cookie,Xt);tn(e)&&!this.palette&&this.apply(e,!1)}}willUpdate(){if(h){let t=(this.palettes??[]).filter(e=>!tn(e));t.length&&y(e.tagName,`unknown palette(s) ${t.join(`, `)}: use ${Lt.join(`, `)}.`)}}apply(e,t=this.persist){let n=this.config;if(n){n.palette=e??void 0;return}let r=document.documentElement;e?r.setAttribute(`data-palette`,e):r.removeAttribute(`data-palette`),t&&Ki(`palette`,e),this.requestUpdate()}render(){let e=this.locale.t,t=this.palette,n=this.showDefault?[null,...this.palettes.filter(tn)]:this.palettes.filter(tn);return this.renderGroup(e(`paletteToggle.label`,{palette:t??e(`paletteToggle.default`)}),n.map(n=>{let r=n??`default`;return{value:n,text:this.labels?.[r]??e(`paletteToggle.${r}`),active:t===n}}),this.select)}},I([M({converter:{fromAttribute:e=>(e??``).split(/[\s,]+/).filter(Boolean),toAttribute:e=>e.join(` `)}})],Yi.prototype,`palettes`,void 0),I([M({type:Boolean,reflect:!0,attribute:`show-default`})],Yi.prototype,`showDefault`,void 0),I([M({attribute:!1})],Yi.prototype,`labels`,void 0)})))()}var Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa;function ca(){return(ca=e((()=>{Zi=/(HH|H|hh|h|mm|m|ss|s|a)/g,Qi=e=>String(e).padStart(2,`0`),$i=(e,t)=>{let n=e.getHours(),r=n%12||12,i={HH:Qi(n),H:String(n),hh:Qi(r),h:String(r),mm:Qi(e.getMinutes()),m:String(e.getMinutes()),ss:Qi(e.getSeconds()),s:String(e.getSeconds()),a:n>=12?`PM`:`AM`};return t.replace(Zi,e=>i[e])},ea=(e,t,{strict:n,base:r})=>{let i=e.trim();if(!i)return;let a=t.match(Zi)??[];if(n){let e=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`).replace(Zi,e=>e===`a`?`\\s*([AaPp][Mm])`:`(\\d{${e.length===2?2:`1,2`}})`);if(!RegExp(`^${e}$`).test(i))return}let o=i.match(/\d+/g)??[],s=i.match(/[AaPp][Mm]/)?.[0]?.toUpperCase(),c=a.filter(e=>e!==`a`);if(o.length!==c.length)return;let l=c.some(e=>e.startsWith(`h`));if(l&&a.includes(`a`)&&!s)return;let u=0,d=0,ee=0;if(c.forEach((e,t)=>{let n=Number(o[t]);e.startsWith(`H`)||e.startsWith(`h`)?u=n:e.startsWith(`m`)?d=n:ee=n}),l){if(u<1||u>12)return;s===`PM`&&u<12&&(u+=12),s===`AM`&&u===12&&(u=0)}if(u>23||d>59||ee>59)return;let te=new Date(r??new Date);return te.setHours(u,d,ee,0),te},ta=()=>{let e=new Date;return e.setHours(0,0,0,0),e},na=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/,ra=e=>{let t=na.exec((e??``).trim());if(!t)return null;let[n,r,i]=[t[1],t[2],t[3]??`0`].map(Number);if(n>23||r>59||i>59)return null;let a=ta();return a.setHours(n,r,i,0),a},ia=(e,t)=>$i(e,t?`HH:mm:ss`:`HH:mm`),aa=e=>e.getHours()*3600+e.getMinutes()*60+e.getSeconds(),oa=e=>/(^|[^a-zA-Z])s{1,2}([^a-zA-Z]|$)/.test(e),sa=(e,t)=>t?e:e.replace(/[:.\s]?s{1,2}(?![a-zA-Z])/,``)})))()}var la,X;function ua(){return(ua=e((()=>{p(),x(),f(),b(),g(),m(),Xe(),fn(),ft(),Ue(),ct(),Ye(),ca(),N(),k(),D(),Nt(),Gt(),la=(e,t,n=0,r=()=>!1)=>{let i=[];for(let a=n;a<n+e;a+=Math.max(1,t))i.push({value:a,disabled:r(a),label:String(a).padStart(2,`0`)});return i},X=class e extends S{constructor(...e){super(...e),this.name=`time-picker`,this.value=``,this.defaultValue=``,this.open=!1,this.format=`HH:mm:ss`,this.use12Hours=!1,this.size=`medium`,this.invalid=!1,this.readonly=!1,this.hideClearButton=!1,this.hideSecond=!1,this.hourStep=1,this.minuteStep=1,this.secondStep=1,this.draft=null,this.locale=new v(this),this.aria=new s(this,()=>this.labels),this.floating=new Cn(this,()=>({anchor:()=>this.input,floating:()=>this.popup,placement:`bottom-start`,branches:()=>[this.field],onDismiss:()=>this.requestOpenChange(!1),returnFocusOnEscape:()=>this.input,focusable:!0})),this.dirty=!1,this.focusPanelOnOpen=!1}static{this.tagName=`minerva-time-picker`}static{this.shadowRootOptions={...S.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[C,_n,E`
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
`,w(Re),w(Ke),w(pt),w(Ge)]}get valueAsDate(){return ra(this.value)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}show(){this.open=!0}hide(){this.open=!1}get effectiveFormat(){return sa(this.format,!this.hideSecond)}get withSeconds(){return oa(this.effectiveFormat)}get interactive(){return!this.isDisabled&&!this.readonly}getFormValue(){let e=this.valueAsDate;return e?ia(e,this.withSeconds):``}getValidity(){return this.required&&!this.valueAsDate?{flags:{valueMissing:!0},message:this.locale.t(`validation.valueMissing`),anchor:this.input}:{flags:{},message:``}}resetFormValue(){this.dirty=!1,this.draft=null,this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}willUpdate(e){e.has(`value`)&&e.get(`value`)!==void 0&&(this.dirty=this.value!==this.defaultValue||this.dirty),e.has(`defaultValue`)&&!this.dirty&&(this.value=this.defaultValue),h&&this.checkUsage(e)}checkUsage(t){let n=e.tagName;if(t.has(`value`)&&this.value&&!ra(this.value)&&y(n,`value "${this.value}" is not a valid time: use 24-hour "HH:mm" or "HH:mm:ss".`),t.has(`minTime`)||t.has(`maxTime`)){for(let[e,t]of[[`min-time`,this.minTime],[`max-time`,this.maxTime]])t&&!ra(t)&&y(n,`${e} "${t}" is not a valid time: use 24-hour "HH:mm" or "HH:mm:ss".`);let e=ra(this.minTime),t=ra(this.maxTime);e&&t&&aa(e)>aa(t)&&y(n,`min-time (${this.minTime}) is later than max-time (${this.maxTime}): no time can be selected.`)}}updated(e){super.updated(e);let t=this.open&&this.interactive;if(this.floating.sync(t),!t){this.focusPanelOnOpen=!1;return}(e.has(`open`)||e.has(`disabled`))&&(this.popup?.querySelectorAll(`[aria-selected="true"]`).forEach(e=>e.scrollIntoView?.({block:`nearest`})),this.focusPanelOnOpen&&this.focusFirstColumn())}focusFirstColumn(){this.popup?.querySelector(`[role="option"][tabindex="0"]`)?.focus()}requestOpenChange(e){if(e===this.open)return!0;let t=this.emit(`minerva-open-change`,{open:e},{cancelable:!0});return t&&(this.open=e),t}commit(e){this.value=e?ia(e,this.withSeconds):``,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.value})}handleTimeChange(e,t){let n=new Date(this.valueAsDate??ta());if(e===`hour`)n.setHours(t);else if(e===`minute`)n.setMinutes(t);else if(e===`second`)n.setSeconds(t);else{let e=n.getHours()%12;n.setHours(t===1?e+12:e)}this.draft=null,this.commit(n)}handleInput(e){let t=e.target.value;this.draft=t,this.emit(`minerva-input`,{value:t});let n=ea(t,this.effectiveFormat,{strict:!0,base:this.valueAsDate??void 0});n&&this.commit(n)}handleBlur(){let e=this.draft;if(e===null)return;let t=this.valueAsDate;if(e.trim()===``)t&&this.commit(null);else{let n=ea(e,this.effectiveFormat,{strict:!1,base:t??void 0});n&&n.getTime()!==t?.getTime()&&this.commit(n)}this.draft=null}handleClear(){this.draft=null,this.commit(null),this.emit(`minerva-clear`),this.input?.focus()}handleInputClick(){this.interactive&&(this.focusPanelOnOpen=!1,this.requestOpenChange(!this.open))}handleInputKeyDown(e){e.key===`ArrowDown`&&(e.preventDefault(),this.interactive&&(this.open?this.focusFirstColumn():(this.focusPanelOnOpen=!0,this.requestOpenChange(!0)||(this.focusPanelOnOpen=!1))))}handlePanelKeyDown(e){let t=e.currentTarget,n=this.input;if(!n||e.key!==`Tab`||e.altKey||e.ctrlKey||e.metaKey)return;let r=this.shadowRoot?.activeElement??null;if(!r||!t.contains(r))return;let i=Zt(t);(i.length===0||(e.shiftKey?r===t||r===i[0]:r===i[i.length-1]))&&(e.preventDefault(),(e.shiftKey?n:this.shadowRoot?.querySelector(`.clearButton`)??this.tabbableAfter()??n).focus(),this.requestOpenChange(!1))}tabbableAfter(){let e=Zt(this.ownerDocument.body),t=-1;return e.forEach((e,n)=>{Mt(this,e)&&(t=n)}),t===-1?e.find(e=>!!(this.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING))??null:e.slice(t+1).find(e=>!Mt(this,e))??null}handleColumnKeyDown(e,t){let n=e.currentTarget,r=e.target,i=Array.from(n.querySelectorAll(`[role="option"]`)).filter(e=>e.getAttribute(`aria-disabled`)!==`true`),a=i.indexOf(r),o=this.popup?.querySelectorAll(`[role="listbox"]`),s=o?.length??0,c=e=>o?.[e]?.querySelector(`[tabindex="0"]`)?.focus(),l=e.key;switch(Be(this)===`rtl`&&(l===`ArrowLeft`?l=`ArrowRight`:l===`ArrowRight`&&(l=`ArrowLeft`)),l){case`ArrowDown`:e.preventDefault(),i[Math.min(i.length-1,a+1)]?.focus();break;case`ArrowUp`:e.preventDefault(),i[Math.max(0,a-1)]?.focus();break;case`Home`:e.preventDefault(),i[0]?.focus();break;case`End`:e.preventDefault(),i[i.length-1]?.focus();break;case`ArrowRight`:e.preventDefault(),c(Math.min(s-1,t+1));break;case`ArrowLeft`:e.preventDefault(),c(Math.max(0,t-1))}}pick(e,t){t.disabled||this.handleTimeChange(e.kind,e.toValue(t.value))}columns(e){let{t}=this.locale,n=this.use12Hours,r=ra(this.minTime),i=ra(this.maxTime),a=e.getHours(),o=e.getMinutes(),s=e.getSeconds(),c=a>=12,l=e=>n?e%12+(c?12:0):e,u=la(n?12:24,this.hourStep,+!!n,e=>{let t=l(e);return!!(r&&t<r.getHours()||i&&t>i.getHours())}),d=la(60,this.minuteStep,0,e=>!!(r&&a===r.getHours()&&e<r.getMinutes()||i&&a===i.getHours()&&e>i.getMinutes())),ee=la(60,this.secondStep,0,e=>{let t=r&&a===r.getHours()&&o===r.getMinutes(),n=i&&a===i.getHours()&&o===i.getMinutes();return!!(t&&e<r.getSeconds()||n&&e>i.getSeconds())}),te=[{kind:`hour`,label:t(`timePicker.hours`),items:u,selected:n?a%12||12:a,toValue:l},{kind:`minute`,label:t(`timePicker.minutes`),items:d,selected:o,toValue:e=>e}];return this.withSeconds&&te.push({kind:`second`,label:t(`timePicker.seconds`),items:ee,selected:s,toValue:e=>e}),n&&te.push({kind:`ampm`,label:t(`timePicker.period`),items:[{value:0,label:`AM`,disabled:!1},{value:1,label:`PM`,disabled:!1}],selected:+!!c,toValue:e=>e}),te}renderPanel(e,t){let n=e!==null,r=this.columns(e??ta());return j`<div
part="panel"
class="popup"
popover="manual"
role="dialog"
tabindex="-1"
aria-label=${t}
@keydown=${this.handlePanelKeyDown}
>
<div class="timePickerPanel">
<div class="timeColumns">
${r.map((e,t)=>{let r=e.items.find(e=>!e.disabled)?.value,i=e.items.some(t=>t.value===e.selected&&!t.disabled)?e.selected:r;return j`<div
part="column"
class="timeColumn"
role="listbox"
aria-label=${e.label}
tabindex="-1"
data-kind=${e.kind}
@keydown=${e=>this.handleColumnKeyDown(e,t)}
>
${e.items.map(t=>{let r=n&&t.value===e.selected;return j`<div
part="item"
role="option"
aria-selected=${r?`true`:`false`}
aria-disabled=${t.disabled?`true`:A}
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
</div>`}render(){let{t:e}=this.locale,t=this.isDisabled,n=this.readonly,r=this.valueAsDate,i=this.label||this.aria.label||e(`timePicker.label`),a=this.draft??(r?$i(r,this.effectiveFormat):``),o=!this.hideClearButton&&!!r&&!t&&!n;return j`<div part="base" class="timePicker">
<div
part="control"
class=${F({root:!0,outline:!0,[this.size]:!0,invalid:this.invalid,disabled:t})}
data-component="input"
>
<input
part="input"
class="field"
.value=${rn(a)}
placeholder=${this.placeholder??e(`timePicker.placeholder`)}
?disabled=${t}
?readonly=${n}
?required=${this.required}
autocomplete="off"
aria-label=${i}
aria-description=${this.aria.description??A}
aria-invalid=${this.invalid||this.aria.attr(`aria-invalid`)===`true`?`true`:A}
aria-readonly=${n?`true`:A}
@input=${this.handleInput}
@blur=${this.handleBlur}
@click=${this.handleInputClick}
@keydown=${this.handleInputKeyDown}
/>
<span class="addon end">
${o?j`<button
part="clear-button"
type="button"
class="iconButton neutral variant-ghost small circle clearButton"
aria-label=${e(`timePicker.clear`)}
@click=${this.handleClear}
>
${Ne}
</button>`:j`<span part="icon" class="clockIcon" aria-hidden="true"
>${ke}</span
>`}
</span>
</div>
</div>
${this.open&&!t&&!n?this.renderPanel(r,i):A}`}},I([M({reflect:!0})],X.prototype,`name`,void 0),I([M({attribute:!1})],X.prototype,`value`,void 0),I([M({attribute:`value`})],X.prototype,`defaultValue`,void 0),I([M({type:Boolean,reflect:!0})],X.prototype,`open`,void 0),I([M({reflect:!0})],X.prototype,`format`,void 0),I([M({type:Boolean,reflect:!0,attribute:`use-12-hours`})],X.prototype,`use12Hours`,void 0),I([M()],X.prototype,`placeholder`,void 0),I([M()],X.prototype,`label`,void 0),I([M({reflect:!0})],X.prototype,`size`,void 0),I([M({type:Boolean,reflect:!0})],X.prototype,`invalid`,void 0),I([M({type:Boolean,reflect:!0})],X.prototype,`readonly`,void 0),I([M({type:Boolean,reflect:!0,attribute:`hide-clear-button`})],X.prototype,`hideClearButton`,void 0),I([M({type:Boolean,reflect:!0,attribute:`hide-second`})],X.prototype,`hideSecond`,void 0),I([M({attribute:`min-time`})],X.prototype,`minTime`,void 0),I([M({attribute:`max-time`})],X.prototype,`maxTime`,void 0),I([M({type:Number,attribute:`hour-step`})],X.prototype,`hourStep`,void 0),I([M({type:Number,attribute:`minute-step`})],X.prototype,`minuteStep`,void 0),I([M({type:Number,attribute:`second-step`})],X.prototype,`secondStep`,void 0),I([T()],X.prototype,`draft`,void 0),I([O(`input`)],X.prototype,`input`,void 0),I([O(`.timePicker`)],X.prototype,`field`,void 0),I([O(`.popup`)],X.prototype,`popup`,void 0)})))()}function da(e){if(e===void 0)return;if(typeof e!=`string`)return e;if(!ha())return;let t=document.getElementById(e)??void 0;return h&&!t&&y(`minerva-toast-region`,`toast(): no element with id "${e}"; the toast is shown in the default region.`),t}var fa,pa,ma,ha,ga,_a,va,ya,ba,xa;function Sa(){return(Sa=e((()=>{x(),fa=4e3,pa=200,ma=`minerva-toast-region`,ha=()=>typeof window<`u`&&typeof document<`u`,ga=class{constructor(e={}){this.toasts=[],this.listeners=new Set,this.lifecycle=new Set,this.idCounter=0,this.timers=new Map,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)}),this.subscribeLifecycle=e=>(this.lifecycle.add(e),()=>{this.lifecycle.delete(e)}),this.getSnapshot=()=>this.toasts,this.isClient=e.isClient??ha}emit(){for(let e of[...this.listeners])e(this.toasts)}notify(e){for(let t of[...this.lifecycle])t(e)}clearTimer(e){let t=this.timers.get(e);t&&clearTimeout(t.handle),this.timers.delete(e)}schedule(e,t){this.clearTimer(e),!(t<=0)&&this.timers.set(e,{handle:setTimeout(()=>this.dismiss(e,`timeout`),t),deadline:Date.now()+t,remaining:t,paused:!1})}push(e,t){let n=e.id??++this.idCounter;if(!this.isClient())return n;let r=e.loading??!1,i={id:n,color:e.color??`info`,loading:r,title:e.title,description:e.description,duration:e.duration??(r?0:4e3),icon:e.icon,closable:e.closable??!0,action:e.action,onClose:e.onClose,state:`open`,region:t},a=this.toasts.findIndex(e=>e.id===n);if(a>=0){let e=this.toasts.slice();e[a]=i,this.toasts=e}else this.toasts=[...this.toasts,i];return this.emit(),this.schedule(n,i.duration),n}update(e,t){let n=this.toasts.find(t=>t.id===e&&t.state===`open`);if(!n)return;let r=t.loading!==void 0&&t.loading!==n.loading,i=n.loading?0:fa,a=t.duration??(r&&n.duration===i?void 0:n.duration);this.push({...n,...t,id:e,duration:a},n.region)}dismiss(e,t=`dismiss`){this.clearTimer(e);let n=this.toasts.find(t=>t.id===e&&t.state===`open`);n&&(this.toasts=this.toasts.map(t=>t.id===e?{...t,state:`closing`}:t),this.emit(),n.onClose?.(e),this.notify({type:`close`,item:n,reason:t}),setTimeout(()=>{let t=this.toasts.find(t=>t.id===e);t?.state===`closing`&&(this.toasts=this.toasts.filter(t=>t.id!==e),this.emit(),this.notify({type:`remove`,item:t}))},200))}dismissAll(){for(let e of this.toasts)this.dismiss(e.id)}pause(e){let t=this.timers.get(e);t&&!t.paused&&(clearTimeout(t.handle),t.remaining=Math.max(0,t.deadline-Date.now()),t.paused=!0)}resume(e){let t=this.timers.get(e);t?.paused&&(t.paused=!1,t.deadline=Date.now()+t.remaining,t.handle=setTimeout(()=>this.dismiss(e,`timeout`),t.remaining))}peek(){return this.toasts}reset(){for(let e of[...this.timers.keys()])this.clearTimer(e);this.toasts=[],this.emit()}},_a=new ga,va=`data-minerva-auto`,ya=new class{constructor(){this.regions=[],this.listeners=new Set,this.autoPending=!1,this.subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)})}changed(){for(let e of[...this.listeners])e()}ordered(){return this.regions.slice().sort((e,t)=>{let n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_DISCONNECTED?0:n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}get owner(){return this.ordered()[0]??null}register(e){if(!this.regions.includes(e)){if(this.regions.push(e),!e.hasAttribute(`data-minerva-auto`))for(let e of this.regions.filter(e=>e.hasAttribute(va)))e.remove();this.changed()}}unregister(e){let t=this.regions.indexOf(e);t<0||(this.regions.splice(t,1),this.changed())}regionOf(e){let t=e.region;return t&&this.regions.includes(t)?t:this.owner}ensureRegion(){this.autoPending||this.regions.length>0||!ha()||(this.autoPending=!0,queueMicrotask(()=>{if(this.autoPending=!1,this.regions.length>0||!document.body||!_a.getSnapshot().length)return;let e=document.createElement(`minerva-toast-region`);e.setAttribute(`data-minerva-auto`,``),document.body.append(e)}))}},ba=(e,t)=>{let n=n=>{h&&!ha()&&y(`minerva-toast-region`,`toast() called without a document (server side): the toast is ignored.`);let{region:r,...i}=n,a=da(r??t),o=e.push(i,a);return ha()&&ya.ensureRegion(),o},r=(e=>n(e));return r.info=(e,t)=>n({...t,title:e,color:`info`}),r.success=(e,t)=>n({...t,title:e,color:`success`}),r.warning=(e,t)=>n({...t,title:e,color:`warning`}),r.danger=(e,t)=>n({...t,title:e,color:`danger`}),r.loading=(e,t)=>n({...t,title:e,loading:!0}),r.promise=(e,t,r)=>{let i=n({...r,title:t.loading,loading:!0,duration:0}),a=(e,t)=>n({...r,id:i,title:t,color:e,loading:!1});return e.then(e=>a(`success`,typeof t.success==`function`?t.success(e):t.success),e=>a(`danger`,typeof t.error==`function`?t.error(e):t.error)),e},r.update=(t,n)=>{let{region:r,...i}=n;e.update(t,i)},r.dismiss=t=>t===void 0?e.dismissAll():e.dismiss(t),r.region=t=>ba(e,t),r},xa=ba(_a)})))()}function Ca(e){let t=zt(e.ownerDocument.body).filter(t=>!Mt(e,t)&&Bt(t)),n=t.find(t=>e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING);if(n)return n;let r=t.filter(t=>e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING);return r[r.length-1]??null}var wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na;function Pa(){return(Pa=e((()=>{p(),x(),f(),b(),g(),m(),fn(),bt(),Sa(),N(),k(),D(),Kt(),Nt(),nn(),wa={info:de,success:ve,warning:Je,danger:yt},Ta=[`topRight`,`topLeft`,`topCenter`,`bottomRight`,`bottomLeft`,`bottomCenter`],Ea=[`F8`],Da=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`],Oa=(e,t)=>t.length>0&&t.every(t=>Da.includes(t)?e[t]:e.code===t||e.key===t),ka=e=>e.map(e=>e.replace(/Key$/,``).replace(/^Key(?=.)/,``).replace(/^Digit/,``).replace(/^./,e=>e.toUpperCase())).join(`+`),Aa={fromAttribute:e=>e===null?Ea:e.split(/[\s,+]+/).map(e=>e.trim()).filter(Boolean)},ja=0,Ma=e=>{for(let t of ya.ordered())if(t instanceof Na&&t.handleHotkey(e))return},Na=class extends _{constructor(...e){super(...e),this.position=`topRight`,this.max=1/0,this.noPauseOnHover=!1,this.hotkey=Ea,this.items=[],this.locale=new v(this),this.aria=new s(this),this.cleanups=[],this.returnFocus=null,this.refresh=()=>{if(!this.isConnected)return;let e=new Set,t=[],n=_a.getSnapshot();for(let r=n.length-1;r>=0;--r){let i=n[r];e.has(i.id)||ya.regionOf(i)!==this||(e.add(i.id),t.unshift(i))}let r=t.filter(e=>e.state===`open`),i=r.slice(0,Math.max(0,r.length-this.max));if(i.length>0){for(let e of i)_a.dismiss(e.id,`overflow`);return}let a=new Set(this.items.map(e=>e.id)),o=t.some(e=>!a.has(e.id));this.items=t,o&&this.raise()},this.raise=()=>{let e=this.viewport;e&&!Mt(e,Vt())&&($e(e),St(e))},this.onLifecycle=e=>{ya.regionOf(e.item)===this&&(e.type===`close`?this.emit(`minerva-close`,{id:e.item.id,reason:e.reason}):this.emit(`minerva-after-close`,{id:e.item.id}))},this.onViewportFocusIn=e=>{let t=e.relatedTarget,n=e.currentTarget;t&&!Mt(n,t)&&(this.returnFocus=t)},this.onViewportFocusOut=e=>{let t=e.currentTarget;Mt(t,e.relatedTarget)||t.removeAttribute(`tabindex`)}}static{this.tagName=ma}static{this.styles=[C,_n,E`
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
`,w(at)]}get toast(){return this.boundApi??=ba(_a,this),this.boundApi}connectedCallback(){super.connectedCallback(),this.cleanups=[_a.subscribe(()=>this.refresh()),ya.subscribe(()=>this.refresh()),_a.subscribeLifecycle(this.onLifecycle)];let e=this.ownerDocument;e.addEventListener(`minerva-after-open`,this.raise),this.cleanups.push(()=>e.removeEventListener(`minerva-after-open`,this.raise)),ja++===0&&e.addEventListener(`keydown`,Ma),this.cleanups.push(()=>{--ja===0&&e.removeEventListener(`keydown`,Ma)}),ya.register(this),this.refresh(),this.hasUpdated&&St(this.viewport)}disconnectedCallback(){super.disconnectedCallback();for(let e of this.cleanups)e();this.cleanups=[],ya.unregister(this),$e(this.viewport)}handleHotkey(e){let t=this.viewport;if(!t||!Oa(e,this.hotkey)||!t.querySelector(`[data-state="open"]`))return!1;e.preventDefault();let n=Vt();return n&&n!==this.ownerDocument.body&&!Mt(t,n)&&(this.returnFocus=n),t.setAttribute(`tabindex`,`-1`),Rt(t),!0}focus(e){let t=this.viewport;t&&(t.setAttribute(`tabindex`,`-1`),t.focus(e))}willUpdate(e){h&&e.has(`position`)&&!Ta.includes(this.position)&&y(`minerva-toast-region`,`invalid position "${this.position}" (expected ${Ta.join(` | `)}).`)}firstUpdated(){St(this.viewport)}updated(e){e.has(`max`)&&e.get(`max`)!==void 0&&queueMicrotask(()=>this.refresh())}moveFocusFrom(e){let t=this.viewport;if(!t)return;let n=Array.from(t.querySelectorAll(`:scope > [data-state="open"]`)).filter(t=>t!==e),r=n.find(t=>e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)??n[n.length-1];if(r){let e=r.querySelector(`[data-toast-close]`)??Zt(r)[0];if(Rt(e))return}let i=this.returnFocus;i?.isConnected&&!Mt(t,i)&&Rt(i)||Rt(Ca(this))||(t.setAttribute(`tabindex`,`-1`),Rt(t,{preventScroll:!0}))}close(e,t,n){Mt(t,Vt())&&this.moveFocusFrom(t),_a.dismiss(e.id,n)}pause(e){this.noPauseOnHover||_a.pause(e.id)}resume(e){this.noPauseOnHover||_a.resume(e.id)}renderIcon(e){if(e.icon===null)return A;let t=e.icon===void 0?e.loading?j`<div class="progressIndicator current" aria-hidden="true">
<span class="spinner small">${we}</span>
</div>`:wa[e.color]:e.icon;return j`<span class="icon" part="icon" aria-hidden="true"
>${t}</span
>`}renderItem(e){let t=e.state===`closing`,n=e=>e.currentTarget.closest(`.toast`);return j`<div
part="toast"
class=${F({toast:!0,[e.color]:!0})}
data-state=${t?`closing`:`open`}
data-loading=${e.loading?`true`:A}
role=${e.color===`danger`&&!e.loading?`alert`:`status`}
style=${P(e.duration>0?{"--toast-duration":`${e.duration}ms`}:{})}
@mouseenter=${()=>this.pause(e)}
@mouseleave=${()=>this.resume(e)}
@focusin=${()=>this.pause(e)}
@focusout=${t=>{Mt(n(t),t.relatedTarget)||this.resume(e)}}
@keydown=${r=>{r.key!==`Escape`||t||r.isComposing||(r.preventDefault(),r.stopPropagation(),this.close(e,n(r),`escape`))}}
>
${this.renderIcon(e)}
<div class="content" part="content">
${e.title?j`<div class="title" part="title">${e.title}</div>`:A}
${e.description?j`<div class="description" part="description">
${e.description}
</div>`:A}
</div>
${e.action?j`<button
type="button"
class="action"
part="action"
@click=${t=>{e.action?.onClick(),this.close(e,n(t),`action`)}}
>
${e.action.label}
</button>`:A}
${e.closable?j`<button
type="button"
class="close"
part="close-button"
aria-label=${this.closeLabel??this.locale.t(`toast.close`)}
data-toast-close=""
@click=${t=>this.close(e,n(t),`close-button`)}
>
${Ne}
</button>`:A}
${e.duration>0&&!t?j`<span
class="progress"
part="progress"
aria-hidden="true"
></span>`:A}
</div>`}render(){let e=ka(this.hotkey),t=this.aria.label??(e?this.locale.t(`toast.regionWithHotkey`,{hotkey:e}):this.locale.t(`toast.region`)),n=Ta.includes(this.position)?this.position:`topRight`;return j`<div
part="viewport"
class=${F({viewport:!0,[n]:!0})}
popover="manual"
role="region"
aria-label=${t}
dir=${Be(this)}
@focusin=${this.onViewportFocusIn}
@focusout=${this.onViewportFocusOut}
>
${Jt(this.items,e=>e.id,e=>this.renderItem(e))}
</div>`}},I([M({reflect:!0})],Na.prototype,`position`,void 0),I([M({type:Number})],Na.prototype,`max`,void 0),I([M({type:Boolean,attribute:`no-pause-on-hover`})],Na.prototype,`noPauseOnHover`,void 0),I([M({attribute:`close-label`})],Na.prototype,`closeLabel`,void 0),I([M({attribute:`hotkey`,converter:Aa})],Na.prototype,`hotkey`,void 0),I([T()],Na.prototype,`items`,void 0),I([O(`.viewport`)],Na.prototype,`viewport`,void 0)})))()}var Fa,Ia,La,Ra,za,Ba,Z;function Va(){return(Va=e((()=>{p(),x(),g(),m(),fn(),lt(),N(),k(),D(),Nt(),Fa=6,Ia=300,La=200,Ra=0,za={fromAttribute(e){if(!e)return;let t=e.trim().split(/[\s,]+/).map(Number);return t.length===2&&t.every(Number.isFinite)?[t[0],t[1]]:void 0},toAttribute(e){return e?e.join(` `):null}},Ba=class extends _{constructor(...e){super(...e),this.skipDelay=300,this.lastClosedAt=0}static{this.tagName=`minerva-tooltip-provider`}static{this.styles=[C,E`
:host{
display: contents;
}
`]}markClosed(){this.lastClosedAt=Date.now()}shouldSkipDelay(){return Date.now()-this.lastClosedAt<this.skipDelay}render(){return j`<slot></slot>`}},I([M({type:Number,attribute:`enter-delay`})],Ba.prototype,`enterDelay`,void 0),I([M({type:Number,attribute:`leave-delay`})],Ba.prototype,`leaveDelay`,void 0),I([M({type:Number,attribute:`skip-delay`})],Ba.prototype,`skipDelay`,void 0),Z=class e extends _{constructor(...e){super(...e),this.content=``,this.open=!1,this.placement=`top`,this.color=`neutral`,this.variant=`solid`,this.shape=`default`,this.animation=`fade`,this.arrow=!1,this.disabled=!1,this.followCursor=!1,this.positioned=!1,this.aria=new s(this),this.grace=Qt({timeout:0}),this.cursor=null,this.described=null,this.describedPrev=null,this.floating=new Cn(this,()=>{let e=this.placement,t=e.startsWith(`top`)||e.startsWith(`bottom`),n=this.arrow?Fa:0,r=this.offset;return{placement:e,offset:r?{mainAxis:(t?r[1]:r[0])+n,crossAxis:t?r[0]:r[1]}:{mainAxis:8+n},arrowElement:this.arrow?this.arrowEl:null,autoUpdate:this.followCursor?{animationFrame:!0}:void 0,anchor:()=>this.anchor(),floating:()=>this.panel,branches:()=>[this.wrapper],dismissOnPointerDownOutside:!1,dismissOnFocusOutside:!1,focusable:!1,onDismiss:()=>{this.clearTimers(),this.requestOpen(!1)},onPosition:e=>this.handlePosition(e)}}),this.handleMouseEnter=e=>{if(this.disabled)return;this.followCursor&&(this.cursor={x:e.clientX,y:e.clientY}),this.clearTimers();let t=this.resolvedEnterDelay;if(t<=0||this.provider()?.shouldSkipDelay()){this.requestOpen(!0);return}this.enterTimer=setTimeout(()=>this.requestOpen(!0),t)},this.handleMouseLeave=e=>{if(this.disabled)return;this.clearTimers();let t=this.panel?.getBoundingClientRect();if(this.open&&!this.followCursor&&t&&t.width>0&&t.height>0){this.grace.start({x:e.clientX,y:e.clientY},t,Ut(this.currentPlacement).side),this.leaveTimer=setTimeout(()=>this.requestOpen(!1),Math.max(this.resolvedLeaveDelay,Ia));return}this.scheduleHide()},this.handlePanelMouseEnter=()=>{this.disabled||this.clearTimers()},this.handlePanelMouseLeave=()=>{this.disabled||this.followCursor||this.scheduleHide()},this.handleDocumentPointerMove=e=>{if(!this.grace.getArea())return;let t=e.composedPath();this.wrapper&&t.includes(this.wrapper)||this.panel&&t.includes(this.panel)||this.grace.isInGraceArea({x:e.clientX,y:e.clientY})||(this.grace.clear(),this.scheduleHide())},this.handleDocumentMouseMove=e=>{this.cursor={x:e.clientX,y:e.clientY}},this.handleFocusIn=e=>{this.disabled||this.inPanel(e)||(this.clearTimers(),this.requestOpen(!0))},this.handleFocusOut=e=>{this.disabled||this.inPanel(e)||(this.clearTimers(),this.requestOpen(!1))},this.listening=!1,this.handleSlotChange=()=>this.requestUpdate()}static{this.tagName=`minerva-tooltip`}static{this.styles=[C,_n,E`
:host{
display: inline-flex;
}
`,w(mt)]}show(){this.open=!0}hide(){this.open=!1}toggle(){this.open=!this.open}get currentPlacement(){return this.positioned?this.floating.position.placement:this.placement}get visible(){return this.open&&!this.disabled}provider(){let e=Et(this,`minerva-tooltip-provider`);return e instanceof Ba?e:null}get resolvedEnterDelay(){return this.enterDelay??this.provider()?.enterDelay??La}get resolvedLeaveDelay(){return this.leaveDelay??this.provider()?.leaveDelay??Ra}triggerElement(){return Array.from(this.children).find(e=>!e.hasAttribute(`slot`))??null}get text(){return this.aria.label||(this.content.trim()?this.content.trim():Array.from(this.children).filter(e=>e.getAttribute(`slot`)===`content`).map(e=>e.textContent?.trim()??``).filter(Boolean).join(` `))}anchor(){return this.followCursor&&this.cursor?{getBoundingClientRect:()=>{let{x:e,y:t}=this.cursor??{x:0,y:0};return DOMRect.fromRect({x:e,y:t,width:0,height:0})}}:this.wrapper}requestOpen(e){e!==this.open&&(e||this.provider()?.markClosed(),this.emit(`minerva-open-change`,{open:e},{cancelable:!0})&&(this.open=e))}clearTimers(){clearTimeout(this.enterTimer),clearTimeout(this.leaveTimer),this.grace.clear()}scheduleHide(){clearTimeout(this.leaveTimer),this.leaveTimer=setTimeout(()=>this.requestOpen(!1),this.resolvedLeaveDelay)}handlePosition(e){let t=this.arrowEl;t&&(t.style.left=e.arrow.x==null?``:`${e.arrow.x}px`,t.style.top=e.arrow.y==null?``:`${e.arrow.y}px`),this.positioned||=!0}inPanel(e){return!!this.panel&&e.composedPath().includes(this.panel)}connectedCallback(){super.connectedCallback(),this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`focusin`,this.handleFocusIn),this.removeEventListener(`focusout`,this.handleFocusOut),this.listenDocument(!1),clearTimeout(this.enterTimer),clearTimeout(this.leaveTimer),this.restoreDescription()}listenDocument(e){e!==this.listening&&(this.listening=e,e?(document.addEventListener(`pointermove`,this.handleDocumentPointerMove),document.addEventListener(`mousemove`,this.handleDocumentMouseMove)):(document.removeEventListener(`pointermove`,this.handleDocumentPointerMove),document.removeEventListener(`mousemove`,this.handleDocumentMouseMove)))}firstUpdated(){h&&setTimeout(()=>this.checkUsage())}checkUsage(){if(!this.isConnected)return;this.text||y(e.tagName,`has no content: set the "content" attribute, aria-label or slot="content".`);let t=this.triggerElement();!this.disabled&&t&&Zt(t,{includeContainer:!0}).length===0&&y(e.tagName,`the trigger is not focusable, so keyboard users cannot reach the tooltip; wrap a button / link or add tabindex="0".`)}willUpdate(e){(e.has(`open`)||e.has(`disabled`))&&(!this.open||this.disabled)&&(this.positioned=!1,this.grace.clear())}updated(){let e=this.visible;this.floating.sync(e),this.listenDocument(e),this.syncDescription(e)}syncDescription(e){let t=e?this.text:``,n=t?this.triggerElement():null;if(this.described&&this.described!==n&&this.restoreDescription(),!n)return;this.described!==n&&(this.described=n,this.describedPrev=n.getAttribute(`aria-description`));let r=this.describedPrev?`${this.describedPrev} ${t}`:t;n.getAttribute(`aria-description`)!==r&&n.setAttribute(`aria-description`,r)}restoreDescription(){let e=this.described;e&&(this.describedPrev===null?e.removeAttribute(`aria-description`):e.setAttribute(`aria-description`,this.describedPrev),this.described=null,this.describedPrev=null)}render(){let e=this.visible,t=this.currentPlacement,n=e&&!this.triggerElement();return j`<div
class="tooltipTrigger"
part="trigger"
aria-describedby=${n?`tooltip`:A}
@mouseenter=${this.handleMouseEnter}
@mouseleave=${this.handleMouseLeave}
>
<slot @slotchange=${this.handleSlotChange}></slot>
</div>
${e?j`<div
id="tooltip"
part="tooltip"
popover="manual"
role="tooltip"
dir=${Be(this)}
aria-label=${this.aria.label??A}
data-placement=${t}
class=${F({tooltip:!0,[this.color]:!0,[this.variant]:!0,[this.shape]:!0,[`animation-${this.animation}`]:!0,followCursor:this.followCursor,arrow:this.arrow,show:this.positioned})}
@mouseenter=${this.handlePanelMouseEnter}
@mouseleave=${this.handlePanelMouseLeave}
>
<slot name="content" @slotchange=${this.handleSlotChange}
>${this.content}</slot
>${this.arrow?j`<div class="tooltipArrow" part="arrow"></div>`:A}
</div>`:A}`}},I([M()],Z.prototype,`content`,void 0),I([M({type:Boolean,reflect:!0})],Z.prototype,`open`,void 0),I([M({reflect:!0})],Z.prototype,`placement`,void 0),I([M({reflect:!0})],Z.prototype,`color`,void 0),I([M({reflect:!0})],Z.prototype,`variant`,void 0),I([M({reflect:!0})],Z.prototype,`shape`,void 0),I([M({reflect:!0})],Z.prototype,`animation`,void 0),I([M({type:Boolean,reflect:!0})],Z.prototype,`arrow`,void 0),I([M({type:Boolean,reflect:!0})],Z.prototype,`disabled`,void 0),I([M({type:Number,attribute:`enter-delay`})],Z.prototype,`enterDelay`,void 0),I([M({type:Number,attribute:`leave-delay`})],Z.prototype,`leaveDelay`,void 0),I([M({converter:za})],Z.prototype,`offset`,void 0),I([M({type:Boolean,reflect:!0,attribute:`follow-cursor`})],Z.prototype,`followCursor`,void 0),I([O(`.tooltipTrigger`)],Z.prototype,`wrapper`,void 0),I([O(`[part=tooltip]`)],Z.prototype,`panel`,void 0),I([O(`.tooltipArrow`)],Z.prototype,`arrowEl`,void 0),I([T()],Z.prototype,`positioned`,void 0)})))()}function Ha(e,t){return t.split(`,`).some(t=>{let n=t.trim().toLowerCase();if(!n||n===`*`||n===`*/*`)return!0;if(n.startsWith(`.`))return e.name.toLowerCase().endsWith(n);let r=e.type.toLowerCase();return n.endsWith(`/*`)?r.startsWith(n.slice(0,-1)):r===n})}var Ua,Q;function Wa(){return(Wa=e((()=>{p(),x(),f(),b(),g(),m(),Xe(),Ue(),un(),He(),N(),k(),D(),nn(),Ua=0,Q=class e extends S{constructor(...e){super(...e),this.label=``,this.items=[],this.accept=`*`,this.multiple=!1,this.replace=!1,this.loading=!1,this.removable=!1,this.retryable=!1,this.error=``,this.dragging=!1,this.uploadId=`upload-${Ua++}`,this.nextId=0,this.pendingRemoval=null,this.locale=new v(this),this.aria=new s(this,()=>this.labels)}static{this.tagName=`minerva-upload`}static{this.dependencies=[an]}static{this.styles=[C,E`
:host{
display: block;
min-width: 0;
}
`,w(Ke),w(vt),E`

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
`]}get files(){return this.items.flatMap(e=>e.file?[e.file]:[])}get resolvedMaxCount(){return this.maxCount??(this.multiple?50:1)}get existingCount(){return this.replace&&!this.multiple?0:this.items.length}get blocked(){return this.isDisabled||this.loading||this.existingCount>=this.resolvedMaxCount}focus(e){this.renderRoot.querySelector(`[part=select-button]`)?.focus(e)}showPicker(){this.blocked||this.input?.click()}getFormValue(){if(!this.name)return null;let e=new FormData;for(let t of this.files)e.append(this.name,t);return e}getValidity(){return this.required&&this.files.length===0?{flags:{valueMissing:!0},message:this.locale.t(`validation.fileMissing`),anchor:this.renderRoot.querySelector(`[part=select-button]`)??null}:{flags:{},message:``}}resetFormValue(){this.items=[],this.error=``}restoreFormState(e){e instanceof FormData&&(this.items=e.getAll(this.name).filter(e=>e instanceof File).map(e=>this.toItem(e)))}willUpdate(t){h&&(t.has(`maxCount`)||t.has(`multiple`))&&!this.multiple&&this.maxCount!==void 0&&this.maxCount>1&&y(e.tagName,`max-count (${this.maxCount}) has no effect without multiple: one file is picked at a time.`)}updated(e){super.updated(e);let t=this.pendingRemoval;if(!t||this.items.some(e=>e.id===t.id))return;this.pendingRemoval=null;let n=t.nextId?Array.from(this.renderRoot.querySelectorAll(`[data-item-id]`)).find(e=>e.dataset.itemId===t.nextId)?.querySelector(`[part=remove-button]`):null;n?n.focus():this.focus()}toItem(e){return{id:`${this.uploadId}-${this.nextId++}`,name:e.name,status:`done`,file:e}}select(e){if(this.blocked||e.length===0)return;let{t}=this.locale,n=this.texts,r=this.resolvedMaxCount;if(!this.multiple&&e.length>1||e.length+this.existingCount>r){this.error=n?.tooMany?.(r)??t(`upload.tooMany`,{count:r});return}let i=e.find(e=>!Ha(e,this.accept));if(i){this.error=n?.invalidType?.(i.name)??t(`upload.invalidType`,{name:i.name});return}let a=this.maxSize,o=a===void 0?void 0:e.find(e=>e.size>a);if(o){this.error=n?.tooLarge?.(o.name)??t(`upload.tooLarge`,{name:o.name});return}if(this.error=``,!this.emit(`minerva-files-selected`,{files:e},{cancelable:!0}))return;let s=e.map(e=>this.toItem(e));this.items=this.replace&&!this.multiple?s:[...this.items,...s],this.notifyChange()}notifyChange(){this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.emit(`minerva-change`,{value:this.items})}removeItem(e){if(this.isDisabled)return;let t=this.items.indexOf(e),n=this.items[t+1]??this.items[t-1];this.pendingRemoval={id:e.id,nextId:n?.id},this.emit(`minerva-remove`,{item:e},{cancelable:!0})&&(this.items=this.items.filter(t=>t!==e),this.notifyChange())}retry(e){this.isDisabled||this.loading||this.emit(`minerva-retry`,{item:e})}handleInputChange(){let e=Array.from(this.input.files??[]);this.input.value=``,this.select(e)}handleDragOver(e){e.preventDefault(),this.blocked||(this.dragging=!0)}handleDragLeave(e){e.currentTarget.contains(e.relatedTarget)||(this.dragging=!1)}handleDrop(e){e.preventDefault(),this.dragging=!1,this.select(Array.from(e.dataTransfer?.files??[]))}statusText(e){let{t}=this.locale,n=this.texts;return e.status===`uploading`?n?.uploading??t(`upload.uploading`):e.status===`error`?e.error||(n?.failed??t(`upload.failed`)):n?.done??t(`upload.done`)}render(){let{t:e}=this.locale,t=this.texts,n=this.blocked,r=this.isDisabled,i=this.label||this.aria.label;return j`<div
part="base"
class="upload"
role="group"
aria-labelledby=${this.label?`label`:A}
aria-label=${!this.label&&i?i:A}
aria-description=${this.aria.description??A}
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
<span slot="start">${Fe}</span>
${t?.select??e(`upload.select`)}
</minerva-button>
<input
type="file"
hidden
tabindex="-1"
aria-label=${i||A}
?disabled=${n}
accept=${this.accept}
?multiple=${this.multiple}
@change=${this.handleInputChange}
/>
</div>
${this.error?j`<div part="error" class="error" role="alert">
${this.error}
</div>`:A}
${this.items.length>0?j`<ul part="list" class="list">
${Jt(this.items,e=>e.id,n=>j`<li part="item" class="item" data-item-id=${n.id}>
${n.previewUrl?j`<img
src=${n.previewUrl}
alt=""
class="preview"
/>`:A}
<div class="info">
<span>${n.name}</span>
<span
role=${n.status===`error`?`alert`:`status`}
class=${F({status:!0,statusError:n.status===`error`})}
>${this.statusText(n)}</span
>
</div>
<div class="actions">
${n.status===`error`&&this.retryable?j`<button
part="retry-button"
type="button"
class=${F({iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,disabled:r||this.loading})}
aria-label=${t?.retry?.(n.name)??e(`upload.retry`,{name:n.name})}
?disabled=${r||this.loading}
@click=${()=>this.retry(n)}
>
${re}
</button>`:A}
${this.removable?j`<button
part="remove-button"
type="button"
class=${F({iconButton:!0,neutral:!0,"variant-ghost":!0,small:!0,square:!0,disabled:r})}
aria-label=${t?.remove?.(n.name)??e(`upload.remove`,{name:n.name})}
?disabled=${r}
@click=${()=>this.removeItem(n)}
>
${Ne}
</button>`:A}
</div>
</li>`)}
</ul>`:A}
</div>`}},I([M()],Q.prototype,`label`,void 0),I([M({attribute:!1})],Q.prototype,`items`,void 0),I([M()],Q.prototype,`accept`,void 0),I([M({type:Boolean,reflect:!0})],Q.prototype,`multiple`,void 0),I([M({type:Boolean})],Q.prototype,`replace`,void 0),I([M({type:Number,attribute:`max-count`})],Q.prototype,`maxCount`,void 0),I([M({type:Number,attribute:`max-size`})],Q.prototype,`maxSize`,void 0),I([M({type:Boolean,reflect:!0})],Q.prototype,`loading`,void 0),I([M({type:Boolean})],Q.prototype,`removable`,void 0),I([M({type:Boolean})],Q.prototype,`retryable`,void 0),I([M({attribute:!1})],Q.prototype,`texts`,void 0),I([T()],Q.prototype,`error`,void 0),I([T()],Q.prototype,`dragging`,void 0),I([O(`input[type=file]`)],Q.prototype,`input`,void 0)})))()}var $;function Ga(){return(Ga=e((()=>{p(),x(),f(),b(),g(),m(),tt(),dt(),N(),k(),D(),Kt(),nn(),$=class e extends _{constructor(...e){super(...e),this.items=[],this.itemPadding=8,this.overscan=5,this.loadMoreThreshold=100,this.highPerformance=!1,this.loading=!1,this.clickable=!1,this.scrollOffset=0,this.containerHeight=0,this.measuredHeight=0,this.focusedId=null,this.aria=new s(this),this.locale=new v(this),this.resizeObserver=null,this.measureObserver=null,this.lastScrollTop=0,this.loadingMore=!1}static{this.tagName=`minerva-virtual-list`}static{this.styles=[C,E`
:host{
display: block;
}
.wave{
display: inline-flex;
}
`,w(_t),w(Le)]}get scrollContainer(){return this.container??null}scrollToIndex(e){let t=this.container,n=this.rowHeight;t&&n&&(t.scrollTop=Math.max(0,e)*n,this.updateScroll(t.scrollTop))}get rowHeight(){return this.itemHeight?this.itemHeight:this.measuredHeight>0?this.measuredHeight+this.itemPadding*2:0}get needsMeasure(){return!this.itemHeight&&this.measuredHeight===0&&this.items.length>0}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.resizeObserver=null,this.measureObserver?.disconnect(),this.measureObserver=null,this.cancelScheduled()}firstUpdated(){let e=this.container;e&&(this.containerHeight=e.clientHeight,typeof ResizeObserver<`u`&&(this.resizeObserver=new ResizeObserver(e=>{for(let t of e)this.containerHeight=t.contentRect.height}),this.resizeObserver.observe(e)))}willUpdate(e){(e.has(`items`)||e.has(`loading`))&&(this.loadingMore=!1),this.focusedId!==null&&e.has(`items`)&&!this.items.some(e=>e.id===this.focusedId)&&(this.focusedId=null)}updated(){this.syncMeasure(),h&&this.items.length>0&&!this.renderItem&&y(e.tagName,`set the renderItem property (a function returning the content of a row); rows show the item id meanwhile.`),h&&this.maxHeight===void 0&&y(e.tagName,`set max-height (pixels): without a bounded height the list cannot scroll, so every row is rendered.`)}syncMeasure(){let e=this.needsMeasure?this.measureElement:void 0;if(!e){this.measureObserver?.disconnect(),this.measureObserver=null;return}let t=()=>{let t=e.offsetHeight;t>0&&(this.measuredHeight=t)};t(),!(this.measureObserver||typeof ResizeObserver>`u`)&&(this.measureObserver=new ResizeObserver(t),this.measureObserver.observe(e))}cancelScheduled(){this.raf!==void 0&&(cancelAnimationFrame(this.raf),this.raf=void 0),this.idle!==void 0&&(typeof cancelIdleCallback==`function`&&cancelIdleCallback(this.idle),this.idle=void 0)}schedule(e){if(!this.highPerformance){e();return}this.cancelScheduled(),this.raf=requestAnimationFrame(()=>{this.raf=void 0,typeof requestIdleCallback==`function`?this.idle=requestIdleCallback(()=>{this.idle=void 0,e()},{timeout:100}):e()})}updateScroll(e){this.scrollOffset=e}handleScroll(e){let{scrollTop:t,scrollHeight:n,clientHeight:r}=e.currentTarget,i=t>this.lastScrollTop;this.lastScrollTop=t,this.schedule(()=>{this.updateScroll(t),i&&!this.loadingMore&&!this.loading&&n-t-r<this.loadMoreThreshold&&n>r&&(this.loadingMore=!0,this.emit(`minerva-load-more`))})}visibleWindow(){let e=this.rowHeight;if(!e)return[];let t=Math.max(0,this.overscan||0),n=Math.max(0,Math.floor(this.scrollOffset/e)-t),r=Math.ceil(this.containerHeight/e)+2*t,i=Math.min(this.items.length,n+r),a=[];for(let t=n;t<i;t++)a.push({index:t,start:t*e});if(this.focusedId!==null){let t=this.items.findIndex(e=>e.id===this.focusedId);if(t>=0&&(t<n||t>=i)){let r={index:t,start:t*e};t<n?a.unshift(r):a.push(r)}}return a}renderContent(e,t){return this.renderItem?this.renderItem(e,t):String(e.id)}activate(e,t){this.emit(`minerva-item-click`,{item:e,index:t})}handleRowKeyDown(e,t,n){e.composedPath()[0]===e.currentTarget&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.activate(t,n))}handleRowFocusOut(e){let t=e.currentTarget,n=e.relatedTarget;(!n||!t.contains(n))&&(this.focusedId=null)}render(){let e=this.rowHeight,t=this.aria.label??A,n=this.visibleWindow(),r=this.items.length;return j`<div
class="virtualList"
part="base"
role="region"
tabindex="0"
aria-label=${t}
aria-busy=${this.loading?`true`:A}
style=${P({maxHeight:this.maxHeight===void 0?void 0:`${this.maxHeight}px`,overflow:`auto`,position:`relative`})}
@scroll=${this.handleScroll}
>
${this.needsMeasure?j`<div class="measureItem" aria-hidden="true">
${this.renderContent(this.items[0],0)}
</div>`:A}
<div
class="virtualListContent"
part="list"
role="list"
aria-label=${t}
style=${P({height:e?`${r*e}px`:`auto`,position:`relative`,willChange:`transform`})}
>
${Jt(n,e=>this.items[e.index].id,t=>{let n=this.items[t.index];return j`<div
part="item"
role="listitem"
class=${F({virtualListItem:!0,clickable:this.clickable})}
style=${P({position:`absolute`,top:`0`,transform:`translateY(${t.start}px)`,width:`100%`,height:`${e}px`,willChange:`transform`,padding:`${this.itemPadding}px`})}
tabindex=${this.clickable?`0`:A}
aria-setsize=${r}
aria-posinset=${t.index+1}
@click=${this.clickable?()=>this.activate(n,t.index):A}
@keydown=${this.clickable?e=>this.handleRowKeyDown(e,n,t.index):A}
@focusin=${()=>this.focusedId=n.id}
@focusout=${this.handleRowFocusOut}
>
${this.renderContent(n,t.index)}
</div>`})}
</div>
${this.loading?j`<div class="loadingWrapper" part="loading">
<div
class="progressIndicator primary"
role="progressbar"
aria-label=${this.locale.t(`common.loading`)}
>
<div class="waveContainer small">
<span class="wave" aria-hidden="true">${ut}</span>
</div>
</div>
</div>`:A}
</div>`}},I([M({attribute:!1})],$.prototype,`items`,void 0),I([M({attribute:!1})],$.prototype,`renderItem`,void 0),I([M({type:Number,attribute:`item-height`})],$.prototype,`itemHeight`,void 0),I([M({type:Number,attribute:`item-padding`})],$.prototype,`itemPadding`,void 0),I([M({type:Number})],$.prototype,`overscan`,void 0),I([M({type:Number,attribute:`max-height`})],$.prototype,`maxHeight`,void 0),I([M({type:Number,attribute:`load-more-threshold`})],$.prototype,`loadMoreThreshold`,void 0),I([M({type:Boolean,attribute:`high-performance`})],$.prototype,`highPerformance`,void 0),I([M({type:Boolean,reflect:!0})],$.prototype,`loading`,void 0),I([M({type:Boolean,reflect:!0})],$.prototype,`clickable`,void 0),I([T()],$.prototype,`scrollOffset`,void 0),I([T()],$.prototype,`containerHeight`,void 0),I([T()],$.prototype,`measuredHeight`,void 0),I([T()],$.prototype,`focusedId`,void 0),I([O(`.virtualList`)],$.prototype,`container`,void 0),I([O(`.measureItem`)],$.prototype,`measureElement`,void 0)})))()}export{qr as $,ki as A,Vn as At,mi as B,Mn as Bt,Yi as C,B as Ct,Vi as D,Qn as Dt,Bi as E,z as Et,Ti as F,In as Ft,si as G,gi as H,q as I,Nn as It,ri as J,ii as K,xi as L,Rn as Lt,Ei as M,R as Mt,Di as N,zn as Nt,Y as O,Hn as Ot,wi as P,Ln as Pt,Gr as Q,_i as R,Fn as Rt,Hi as S,lr as St,Xi as T,rr as Tt,hi as U,pi as V,oi as W,G as X,$r as Y,Kr as Z,ga as _,pr as _t,Ba as a,U as at,X as b,mr as bt,Na as c,jr as ct,ba as d,Sr as dt,Wr as et,xa as f,H as ft,fa as g,ur as gt,ya as h,V as ht,Q as i,Vr as it,J as j,Bn as jt,zi as k,Un as kt,Pa as l,Ar as lt,Sa as m,vr as mt,Ga as n,Br as nt,Z as o,Pr as ot,ma as p,_r as pt,K as q,Wa as r,W as rt,Va as s,Nr as st,$ as t,Ur as tt,va as u,yr as ut,pa as v,hr as vt,Ji as w,nr as wt,ua as x,fr as xt,_a as y,dr as yt,vi as z,L as zt};