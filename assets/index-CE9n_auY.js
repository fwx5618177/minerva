const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/alert-C9hFIM7N.js","assets/rolldown-runtime-CbXtAM7H.js","assets/react-vendor-BvKcNA9t.js","assets/dist-C3Cy1YK6.js","assets/registry-DXcVqgdp.js","assets/fi-43WfYxzV.js","assets/DocPage-DUnq_TLt.js","assets/DocPage-C9VNrBIW.css","assets/auto-complete-BYEQgaC1.js","assets/avatar-B4yAdk_E.js","assets/badge-D19AfQIM.js","assets/button-DQImMyUX.js","assets/card-DMy8svJ6.js","assets/cascader-61E0OJ4-.js","assets/checkbox-7HhJnmcn.js","assets/chip-H8n2mdAn.js","assets/config-provider-ClE0vr_l.js","assets/divider-lD6Iujow.js","assets/dropdown-4_iM6MY3.js","assets/empty-C7sR-mel.js","assets/hooks-Deh2xC9J.js","assets/icon-button-C8Vf_mTF.js","assets/installation-Cg1C3Zzi.js","assets/introduction-i7KfCDe5.js","assets/message-BJLg3c62.js","assets/overview-BTlTVl_V.js","assets/pagination-BWrCkT5z.js","assets/popper-Df_YzW5s.js","assets/progress-BtgoiEEw.js","assets/radio-9dQCsmWL.js","assets/search-button-vTgEiS1B.js","assets/skeleton-C64aMeVH.js","assets/space-BMMS7Mqm.js","assets/status-indicator-BilFbUG0.js","assets/switch-Bldcalbu.js","assets/tag-CTxvFRaG.js","assets/textfield-x70LcdVW.js","assets/theme-utils-DWkwAYSx.js","assets/theming-BZ6a4gmq.js","assets/time-picker-D2Fv8BP5.js","assets/tooltip-Byss-W6x.js","assets/virtual-list-DLkhiw6D.js","assets/web-components-DxsShX7N.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{a as t,c as n,d as r,i,l as a,n as o,o as s,p as c,r as l,s as u,t as d,u as f}from"./react-vendor-BvKcNA9t.js";import{f as ee,k as te,pt as p}from"./dist-C3Cy1YK6.js";import{F as ne,H as re,J as m,N as ie,O as ae,R as oe,T as se,X as ce,Y as le,Z as ue,j as de,k as fe,n as pe,t as me,v as he}from"./registry-DXcVqgdp.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var h=e(c()),ge=r(),g=globalThis,_=g.ShadowRoot&&(g.ShadyCSS===void 0||g.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,v=Symbol(),_e=new WeakMap,ve=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==v)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(_&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=_e.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&_e.set(t,e))}return e}toString(){return this.cssText}},ye=e=>new ve(typeof e==`string`?e:e+``,void 0,v),be=(e,...t)=>new ve(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,v),xe=(e,t)=>{if(_)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=g.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Se=_?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ye(t)})(e):e,{is:Ce,defineProperty:we,getOwnPropertyDescriptor:Te,getOwnPropertyNames:Ee,getOwnPropertySymbols:De,getPrototypeOf:Oe}=Object,y=globalThis,ke=y.trustedTypes,Ae=ke?ke.emptyScript:``,je=y.reactiveElementPolyfillSupport,b=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?Ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},S=(e,t)=>!Ce(e,t),Me={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:S};Symbol.metadata??=Symbol(`metadata`),y.litPropertyMetadata??=new WeakMap;var C=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Me){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&we(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Te(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Me}static _$Ei(){if(this.hasOwnProperty(b(`elementProperties`)))return;let e=Oe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b(`properties`))){let e=this.properties,t=[...Ee(e),...De(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Se(e))}else e!==void 0&&t.push(Se(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?x:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?x:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??S)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};C.elementStyles=[],C.shadowRootOptions={mode:`open`},C[b(`elementProperties`)]=new Map,C[b(`finalized`)]=new Map,je?.({ReactiveElement:C}),(y.reactiveElementVersions??=[]).push(`2.1.2`);var w=globalThis,Ne=e=>e,T=w.trustedTypes,Pe=T?T.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Fe=`$lit$`,E=`lit$${Math.random().toFixed(9).slice(2)}$`,Ie=`?`+E,Le=`<${Ie}>`,D=document,O=()=>D.createComment(``),k=e=>e===null||typeof e!=`object`&&typeof e!=`function`,A=Array.isArray,Re=e=>A(e)||typeof e?.[Symbol.iterator]==`function`,j=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ze=/-->/g,Be=/>/g,N=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ve=/'/g,He=/"/g,Ue=/^(?:script|style|textarea|title)$/i,P=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),F=Symbol.for(`lit-noChange`),I=Symbol.for(`lit-nothing`),We=new WeakMap,L=D.createTreeWalker(D,129);function Ge(e,t){if(!A(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Pe===void 0?t:Pe.createHTML(t)}var Ke=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=M;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===M?c[1]===`!--`?o=ze:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=N):(Ue.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=N):o=Be:o===N?c[0]===`>`?(o=i??M,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?N:c[3]===`"`?He:Ve):o===He||o===Ve?o=N:o===ze||o===Be?o=M:(o=N,i=void 0);let d=o===N&&e[t+1].startsWith(`/>`)?` `:``;a+=o===M?n+Le:l>=0?(r.push(s),n.slice(0,l)+Fe+n.slice(l)+E+d):n+E+(l===-2?t:d)}return[Ge(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},R=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ke(t,n);if(this.el=e.createElement(l,r),L.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=L.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Fe)){let t=u[o++],n=i.getAttribute(e).split(E),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Je:r[1]===`?`?Ye:r[1]===`@`?Xe:V}),i.removeAttribute(e)}else e.startsWith(E)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ue.test(i.tagName)){let e=i.textContent.split(E),t=e.length-1;if(t>0){i.textContent=T?T.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],O()),L.nextNode(),c.push({type:2,index:++a});i.append(e[t],O())}}}else if(i.nodeType===8){if(i.data===Ie)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(E,e+1))!==-1;)c.push({type:7,index:a}),e+=E.length-1}}a++}}static createElement(e,t){let n=D.createElement(`template`);return n.innerHTML=e,n}};function z(e,t,n=e,r){if(t===F)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=k(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=z(e,i._$AS(e,t.values),i,r)),t}var qe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??D).importNode(t,!0);L.currentNode=r;let i=L.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new B(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ze(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=L.nextNode(),a++)}return L.currentNode=D,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},B=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),k(e)?e===I||e==null||e===``?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==F&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Re(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==I&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=R.createElement(Ge(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new qe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=We.get(e.strings);return t===void 0&&We.set(e.strings,t=new R(e)),t}k(t){A(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(O()),this.O(O()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Ne(e).nextSibling;Ne(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},V=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=I}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=z(this,e,t,0),a=!k(e)||e!==this._$AH&&e!==F,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=z(this,r[n+o],t,o),s===F&&(s=this._$AH[o]),a||=!k(s)||s!==this._$AH[o],s===I?e=I:e!==I&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Je=class extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}},Ye=class extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}},Xe=class extends V{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=z(this,e,t,0)??I)===F)return;let n=this._$AH,r=e===I&&n!==I||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==I&&(n===I||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ze=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}},Qe=w.litHtmlPolyfillSupport;Qe?.(R,B),(w.litHtmlVersions??=[]).push(`3.3.3`);var $e=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new B(t.insertBefore(O(),e),e,void 0,n??{})}return i._$AI(e),i},H=globalThis,U=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$e(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};U._$litElement$=!0,U.finalized=!0,H.litElementHydrateSupport?.({LitElement:U});var et=H.litElementPolyfillSupport;et?.({LitElement:U}),(H.litElementVersions??=[]).push(`4.2.2`);var tt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},nt={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:S},rt=(e=nt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function W(e){return(t,n)=>typeof n==`object`?rt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var it=be`
  /*
   * Colors come from the same design tokens (CSS custom properties) as
   * @minerva/lib-core. Custom properties inherit into the shadow root, so
   * ConfigProvider / applyThemeStyles theme changes apply here too. The
   * fallbacks match lib-core's light theme for pages without lib-core.
   *
   * Never declare the token names on :host: that would shadow the theme.
   */
  :host {
    display: inline-block;
    --_primary: var(--primary-color, #2563eb);
    --_primary-hover: var(
      --primary-color-hover,
      color-mix(in srgb, var(--_primary) 85%, #000)
    );
    --_secondary: var(--secondary-color, #475569);
    --_secondary-hover: var(
      --secondary-color-hover,
      color-mix(in srgb, var(--_secondary) 85%, #000)
    );
    --_success: var(--success-color, #15803d);
    --_success-hover: var(
      --success-color-hover,
      color-mix(in srgb, var(--_success) 85%, #000)
    );
    --_warning: var(--warning-color, #b45309);
    --_warning-hover: var(
      --warning-color-hover,
      color-mix(in srgb, var(--_warning) 85%, #000)
    );
    --_danger: var(--danger-color, #dc2626);
    --_danger-hover: var(
      --danger-color-hover,
      color-mix(in srgb, var(--_danger) 85%, #000)
    );
    --_info: var(--info-color, #0e7490);
    --_info-hover: var(
      --info-color-hover,
      color-mix(in srgb, var(--_info) 85%, #000)
    );
    --_on-color: var(--text-inverse-color, #ffffff);
    --_ghost-hover: var(--surface-muted-color, rgba(0, 0, 0, 0.05));
    --_disabled-bg: var(--surface-muted-color, #e5e7eb);
    --_disabled-text: var(--text-disabled-color, #9ca3af);
    --_focus-ring: var(
      --focus-ring-color,
      color-mix(in srgb, var(--_primary) 45%, transparent)
    );
    --_radius: var(--radius-md, 0.375rem);
    --_ripple: color-mix(in srgb, var(--_on-color) 70%, transparent);
  }

  .button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    font: inherit;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    overflow: hidden;
    outline: none;
    user-select: none;
  }

  .button:focus-visible {
    outline: 2px solid var(--_focus-ring);
    outline-offset: 2px;
  }

  /* Variants */
  .variant-primary {
    background-color: var(--_primary);
    color: var(--_on-color);
  }

  .variant-primary:hover:not(:disabled) {
    background-color: var(--_primary-hover);
  }

  .variant-secondary,
  .variant-back {
    background-color: var(--_secondary);
    color: var(--_on-color);
  }

  .variant-secondary:hover:not(:disabled),
  .variant-back:hover:not(:disabled) {
    background-color: var(--_secondary-hover);
  }

  .variant-success {
    background-color: var(--_success);
    color: var(--_on-color);
  }

  .variant-success:hover:not(:disabled) {
    background-color: var(--_success-hover);
  }

  .variant-warning,
  .variant-retry {
    background-color: var(--_warning);
    color: var(--_on-color);
  }

  .variant-warning:hover:not(:disabled),
  .variant-retry:hover:not(:disabled) {
    background-color: var(--_warning-hover);
  }

  .variant-error {
    background-color: var(--_danger);
    color: var(--_on-color);
  }

  .variant-error:hover:not(:disabled) {
    background-color: var(--_danger-hover);
  }

  .variant-info {
    background-color: var(--_info);
    color: var(--_on-color);
  }

  .variant-info:hover:not(:disabled) {
    background-color: var(--_info-hover);
  }

  .variant-ghost {
    background-color: transparent;
    color: var(--_primary);
  }

  .variant-ghost:hover:not(:disabled) {
    background-color: var(--_ghost-hover);
  }

  /* Sizes */
  .size-tiny {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }

  .size-small {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
  }

  .size-medium {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  .size-large {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  }

  /* Shapes */
  .shape-square {
    border-radius: 0;
  }

  .shape-rounded {
    border-radius: var(--_radius);
  }

  .shape-circle {
    border-radius: 9999px;
  }

  .shape-pill {
    border-radius: 9999px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  /* States */
  .disabled,
  :disabled {
    background-color: var(--_disabled-bg) !important;
    color: var(--_disabled-text) !important;
    cursor: not-allowed;
    pointer-events: none;
  }

  .loading {
    cursor: wait;
    pointer-events: none;
  }

  .active {
    transform: scale(0.98);
  }

  /* Modifiers */
  .block {
    width: 100%;
  }

  .elevation {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .elevation:hover:not(:disabled) {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .animation {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .animation:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  .outlined {
    background-color: transparent;
    border: 1px solid currentColor;
  }

  .gradient {
    background: linear-gradient(45deg, var(--_primary), var(--_info));
  }

  .transparent {
    background-color: transparent;
  }

  .borderless {
    border: none;
  }

  .compact {
    padding: 0.25rem 0.5rem;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .lowercase {
    text-transform: lowercase;
  }

  .capitalize {
    text-transform: capitalize;
  }

  /* Icons */
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon.left {
    margin-right: 0.5rem;
  }

  .icon.right {
    margin-left: 0.5rem;
  }

  /* Loading Spinner */
  .loading-spinner {
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.75s linear infinite;
  }

  /* Ripple Effect */
  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s linear;
    background-color: var(--_ripple);
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;function G(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var at=class extends U{constructor(...e){super(...e),this.variant=`primary`,this.size=`medium`,this.shape=`rounded`,this.disabled=!1,this.loading=!1,this.active=!1,this.ariaLabel=``}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.createRippleEffect(e)}createRippleEffect(e){let t=this.shadowRoot?.querySelector(`.button`);if(!t)return;let n=document.createElement(`span`),r=t.getBoundingClientRect(),i=Math.max(r.width,r.height),a=e.clientX-r.left-i/2,o=e.clientY-r.top-i/2;n.style.width=n.style.height=`${i}px`,n.style.left=`${a}px`,n.style.top=`${o}px`,n.classList.add(`ripple`);let s=t.querySelector(`.ripple`);s&&s.remove(),t.appendChild(n),n.addEventListener(`animationend`,()=>{n.remove()})}render(){return P`
      <button
        class=${this.generateClasses()}
        ?disabled=${this.disabled}
        aria-label=${this.ariaLabel||I}
        aria-busy=${this.loading?`true`:I}
        @click=${this.handleClick}
      >
        ${this.loading?P`<span class="loading-spinner"></span>`:P`<slot></slot>`}
      </button>
    `}generateClasses(){return[`button`,`variant-${this.variant}`,`size-${this.size}`,`shape-${this.shape}`,this.loading&&`loading`,this.active&&`active`,this.disabled&&`disabled`].filter(Boolean).join(` `)}},K=(at.styles=it,at);G([W({type:String,reflect:!0})],K.prototype,`variant`,void 0),G([W({type:String,reflect:!0})],K.prototype,`size`,void 0),G([W({type:String,reflect:!0})],K.prototype,`shape`,void 0),G([W({type:Boolean,reflect:!0})],K.prototype,`disabled`,void 0),G([W({type:Boolean,reflect:!0})],K.prototype,`loading`,void 0),G([W({type:Boolean,reflect:!0})],K.prototype,`active`,void 0),G([W({type:String,attribute:`aria-label`})],K.prototype,`ariaLabel`,void 0),K=G([tt(`minerva-button`)],K);var ot={type:`3rdParty`,init(e){ue(e.options.react),ce(e)}};function st({i18n:e,defaultNS:t,children:n}){let r=(0,h.useMemo)(()=>({i18n:e,defaultNS:t}),[e,t]);return(0,h.createElement)(le.Provider,{value:r},n)}var ct={nav:{label:`Documentation`,skipToContent:`Skip to content`,toggleMenu:`Toggle navigation menu`,gettingStarted:`Getting Started`,configuration:`Configuration`,general:`General`,layout:`Layout`,dataEntry:`Data Entry`,dataDisplay:`Data Display`,feedback:`Feedback`,navigation:`Navigation`,webComponents:`Web Components`},header:{language:`Language`,theme:{label:`Theme`,auto:`System`,light:`Light`,dark:`Dark`,githubDark:`GitHub Dark`}},doc:{import:`Import`,examples:`Examples`,api:`API`,prop:`Property`,type:`Type`,default:`Default`,description:`Description`,required:`required`,extends:`Also accepts the props of`,showCode:`Show code`,hideCode:`Hide code`,copy:`Copy code`,copied:`Copied!`,loading:`Loading…`},error:{title:`Oops!`,description:`Sorry, an unexpected error has occurred.`,back_home:`Back to Home`,refresh:`Refresh Page`},notFound:{title:`404`,description:`Oops! The page you're looking for doesn't exist.`,back_home:`Back to Home`}},lt={nav:{label:`文档`,skipToContent:`跳到正文`,toggleMenu:`切换导航菜单`,gettingStarted:`快速开始`,configuration:`全局配置`,general:`通用`,layout:`布局`,dataEntry:`数据录入`,dataDisplay:`数据展示`,feedback:`反馈`,navigation:`导航`,webComponents:`Web Components`},header:{language:`语言`,theme:{label:`主题`,auto:`跟随系统`,light:`浅色`,dark:`深色`,githubDark:`GitHub 深色`}},doc:{import:`引入`,examples:`代码演示`,api:`API`,prop:`属性`,type:`类型`,default:`默认值`,description:`说明`,required:`必填`,extends:`同时支持以下类型的属性：`,showCode:`显示代码`,hideCode:`隐藏代码`,copy:`复制代码`,copied:`已复制！`,loading:`加载中…`},error:{title:`糟糕！`,description:`抱歉，发生了意外错误。`,back_home:`返回首页`,refresh:`刷新页面`},notFound:{title:`404`,description:`抱歉，您访问的页面不存在。`,back_home:`返回首页`}},ut={nav:{label:`ドキュメント`,skipToContent:`本文へスキップ`,toggleMenu:`ナビゲーションメニューを切り替え`,gettingStarted:`はじめに`,configuration:`設定`,general:`汎用`,layout:`レイアウト`,dataEntry:`データ入力`,dataDisplay:`データ表示`,feedback:`フィードバック`,navigation:`ナビゲーション`,webComponents:`Web Components`},header:{language:`言語`,theme:{label:`テーマ`,auto:`システム`,light:`ライト`,dark:`ダーク`,githubDark:`GitHub ダーク`}},doc:{import:`インポート`,examples:`サンプル`,api:`API`,prop:`プロパティ`,type:`型`,default:`デフォルト`,description:`説明`,required:`必須`,extends:`次の型のプロパティも受け付けます：`,showCode:`コードを表示`,hideCode:`コードを隠す`,copy:`コードをコピー`,copied:`コピーしました！`,loading:`読み込み中…`},error:{title:`おっと！`,description:`申し訳ありません。予期せぬエラーが発生しました。`,back_home:`ホームに戻る`,refresh:`ページを更新`},notFound:{title:`404`,description:`申し訳ありません。お探しのページは存在しません。`,back_home:`ホームに戻る`}},dt={nav:{label:`Documentation`,skipToContent:`Aller au contenu`,toggleMenu:`Afficher/masquer le menu de navigation`,gettingStarted:`Premiers pas`,configuration:`Configuration`,general:`Général`,layout:`Mise en page`,dataEntry:`Saisie de données`,dataDisplay:`Affichage de données`,feedback:`Retour d'information`,navigation:`Navigation`,webComponents:`Web Components`},header:{language:`Langue`,theme:{label:`Thème`,auto:`Système`,light:`Clair`,dark:`Sombre`,githubDark:`GitHub sombre`}},doc:{import:`Importation`,examples:`Exemples`,api:`API`,prop:`Propriété`,type:`Type`,default:`Défaut`,description:`Description`,required:`requis`,extends:`Accepte aussi les propriétés de`,showCode:`Afficher le code`,hideCode:`Masquer le code`,copy:`Copier le code`,copied:`Copié !`,loading:`Chargement…`},error:{title:`Oups !`,description:`Désolé, une erreur inattendue s'est produite.`,back_home:`Retour à l'accueil`,refresh:`Actualiser la page`},notFound:{title:`404`,description:`Oups ! La page que vous recherchez n'existe pas.`,back_home:`Retour à l'accueil`}},ft=[`en`,`zh`,`ja`,`fr`],pt={en:()=>f(()=>import(`./docs-en-BKI5Paez.js`),[]),zh:()=>f(()=>import(`./docs-zh-B58fqq7A.js`),[]),ja:()=>f(()=>import(`./docs-ja-CXerS9Ft.js`),[]),fr:()=>f(()=>import(`./docs-fr-CDWyBnMu.js`),[])},mt=new Map,ht=e=>ft.includes(e),gt=e=>{let t=ht(e)&&e!==`en`?[`en`,e]:[`en`];return Promise.all(t.map(e=>{let t=mt.get(e);return t||(t=pt[e]().then(({default:t})=>{let n={};for(let[e,r]of Object.entries(t))n[e.replace(/^.*\/([^/]+)\.json$/,`$1`)]=r;p.addResourceBundle(e,`common`,{docs:n},!0,!1)}),mt.set(e,t)),t})).then(()=>void 0)},_t=async e=>{await gt(e),await p.changeLanguage(e)},vt={en:ct,zh:lt,ja:ut,fr:dt},yt=`minerva-docs-language`;p.use(ot).init({resources:Object.fromEntries(ft.map(e=>[e,{common:vt[e]}])),defaultNS:`common`,lng:(()=>{let e=(typeof localStorage<`u`?localStorage.getItem(yt):null)??navigator.language.split(`-`)[0];return ht(e)?e:`en`})(),fallbackLng:`en`,interpolation:{escapeValue:!1}}),p.on(`languageChanged`,e=>{document.documentElement.lang=e;try{localStorage.setItem(yt,e)}catch{}}),document.documentElement.lang=p.language;var bt=p,q={sidebar:`_sidebar_lxw89_1`,header:`_header_lxw89_19`,logo:`_logo_lxw89_25`,icon:`_icon_lxw89_37`,nav:`_nav_lxw89_44`,section:`_section_lxw89_47`,title:`_title_lxw89_53`,list:`_list_lxw89_63`,item:`_item_lxw89_71`,active:`_active_lxw89_91`,itemIcon:`_itemIcon_lxw89_100`,text:`_text_lxw89_108`,open:`_open_lxw89_126`},J=d(),xt=Object.assign({"../docs/pages/alert/index.tsx":()=>f(()=>import(`./alert-C9hFIM7N.js`),__vite__mapDeps([0,1,2,3,4,5,6,7])),"../docs/pages/auto-complete/index.tsx":()=>f(()=>import(`./auto-complete-BYEQgaC1.js`),__vite__mapDeps([8,1,2,3,4,6,7])),"../docs/pages/avatar/index.tsx":()=>f(()=>import(`./avatar-B4yAdk_E.js`),__vite__mapDeps([9,1,2,3,4,6,7])),"../docs/pages/badge/index.tsx":()=>f(()=>import(`./badge-D19AfQIM.js`),__vite__mapDeps([10,1,2,3,4,6,7])),"../docs/pages/button/index.tsx":()=>f(()=>import(`./button-DQImMyUX.js`),__vite__mapDeps([11,1,2,3,4,6,7])),"../docs/pages/card/index.tsx":()=>f(()=>import(`./card-DMy8svJ6.js`),__vite__mapDeps([12,1,2,3,4,6,7])),"../docs/pages/cascader/index.tsx":()=>f(()=>import(`./cascader-61E0OJ4-.js`),__vite__mapDeps([13,1,2,3,4,6,7])),"../docs/pages/checkbox/index.tsx":()=>f(()=>import(`./checkbox-7HhJnmcn.js`),__vite__mapDeps([14,1,2,3,4,6,7])),"../docs/pages/chip/index.tsx":()=>f(()=>import(`./chip-H8n2mdAn.js`),__vite__mapDeps([15,1,2,3,4,6,7])),"../docs/pages/config-provider/index.tsx":()=>f(()=>import(`./config-provider-ClE0vr_l.js`),__vite__mapDeps([16,1,2,3,4,6,7])),"../docs/pages/divider/index.tsx":()=>f(()=>import(`./divider-lD6Iujow.js`),__vite__mapDeps([17,1,2,3,4,6,7])),"../docs/pages/dropdown/index.tsx":()=>f(()=>import(`./dropdown-4_iM6MY3.js`),__vite__mapDeps([18,1,2,3,4,6,7])),"../docs/pages/empty/index.tsx":()=>f(()=>import(`./empty-C7sR-mel.js`),__vite__mapDeps([19,1,2,3,4,5,6,7])),"../docs/pages/hooks/index.tsx":()=>f(()=>import(`./hooks-Deh2xC9J.js`),__vite__mapDeps([20,1,2,3,4,6,7])),"../docs/pages/icon-button/index.tsx":()=>f(()=>import(`./icon-button-C8Vf_mTF.js`),__vite__mapDeps([21,1,2,3,4,6,7])),"../docs/pages/installation/index.tsx":()=>f(()=>import(`./installation-Cg1C3Zzi.js`),__vite__mapDeps([22,1,2,4,6,7])),"../docs/pages/introduction/index.tsx":()=>f(()=>import(`./introduction-i7KfCDe5.js`),__vite__mapDeps([23,1,2,4,6,7])),"../docs/pages/message/index.tsx":()=>f(()=>import(`./message-BJLg3c62.js`),__vite__mapDeps([24,1,2,3,4,5,6,7])),"../docs/pages/overview/index.tsx":()=>f(()=>import(`./overview-BTlTVl_V.js`),__vite__mapDeps([25,1,2,4,6,7])),"../docs/pages/pagination/index.tsx":()=>f(()=>import(`./pagination-BWrCkT5z.js`),__vite__mapDeps([26,1,2,3,4,6,7])),"../docs/pages/popper/index.tsx":()=>f(()=>import(`./popper-Df_YzW5s.js`),__vite__mapDeps([27,1,2,3,4,6,7])),"../docs/pages/progress/index.tsx":()=>f(()=>import(`./progress-BtgoiEEw.js`),__vite__mapDeps([28,1,2,3,4,5,6,7])),"../docs/pages/radio/index.tsx":()=>f(()=>import(`./radio-9dQCsmWL.js`),__vite__mapDeps([29,1,2,3,4,6,7])),"../docs/pages/search-button/index.tsx":()=>f(()=>import(`./search-button-vTgEiS1B.js`),__vite__mapDeps([30,1,2,3,4,6,7])),"../docs/pages/skeleton/index.tsx":()=>f(()=>import(`./skeleton-C64aMeVH.js`),__vite__mapDeps([31,1,2,3,4,6,7])),"../docs/pages/space/index.tsx":()=>f(()=>import(`./space-BMMS7Mqm.js`),__vite__mapDeps([32,1,2,3,4,6,7])),"../docs/pages/status-indicator/index.tsx":()=>f(()=>import(`./status-indicator-BilFbUG0.js`),__vite__mapDeps([33,1,2,3,4,6,7])),"../docs/pages/switch/index.tsx":()=>f(()=>import(`./switch-Bldcalbu.js`),__vite__mapDeps([34,1,2,3,4,6,7])),"../docs/pages/tag/index.tsx":()=>f(()=>import(`./tag-CTxvFRaG.js`),__vite__mapDeps([35,1,2,3,4,6,7])),"../docs/pages/textfield/index.tsx":()=>f(()=>import(`./textfield-x70LcdVW.js`),__vite__mapDeps([36,1,2,3,4,6,7])),"../docs/pages/theme-utils/index.tsx":()=>f(()=>import(`./theme-utils-DWkwAYSx.js`),__vite__mapDeps([37,1,2,3,4,6,7])),"../docs/pages/theming/index.tsx":()=>f(()=>import(`./theming-BZ6a4gmq.js`),__vite__mapDeps([38,1,2,3,4,6,7])),"../docs/pages/time-picker/index.tsx":()=>f(()=>import(`./time-picker-D2Fv8BP5.js`),__vite__mapDeps([39,1,2,3,4,6,7])),"../docs/pages/tooltip/index.tsx":()=>f(()=>import(`./tooltip-Byss-W6x.js`),__vite__mapDeps([40,1,2,3,4,6,7])),"../docs/pages/virtual-list/index.tsx":()=>f(()=>import(`./virtual-list-DLkhiw6D.js`),__vite__mapDeps([41,1,2,3,4,6,7])),"../docs/pages/web-components/index.tsx":()=>f(()=>import(`./web-components-DxsShX7N.js`),__vite__mapDeps([42,1,2,4,6,7]))}),St=e=>{let t=xt[`../docs/pages/${e}/index.tsx`];return t?(0,h.lazy)(t):void 0},Ct=pe.flatMap(e=>{let t=St(e.id);return t?[{path:e.id,element:(0,J.jsx)(t,{})}]:[]}),wt=me.map(e=>({category:e,translationKey:`nav.${e}`,items:pe.filter(t=>t.category===e&&St(t.id)).map(e=>({path:e.id,translationKey:`docs.${e.id}.title`}))})),Tt=({isOpen:e,onClose:t})=>{let{t:n}=m();return(0,J.jsxs)(`aside`,{id:`docs-sidebar`,className:`${q.sidebar} ${e?q.open:``}`,children:[(0,J.jsx)(`div`,{className:q.header,children:(0,J.jsxs)(`div`,{className:q.logo,children:[(0,J.jsx)(fe,{className:q.icon,"aria-hidden":!0}),(0,J.jsx)(`span`,{children:`Minerva UI`})]})}),(0,J.jsx)(`nav`,{className:q.nav,"aria-label":n(`nav.label`),children:wt.filter(e=>e.items.length>0).map(e=>(0,J.jsxs)(`div`,{className:q.section,children:[(0,J.jsx)(`h2`,{className:q.title,id:`nav-${e.category}`,children:n(e.translationKey)}),(0,J.jsx)(`ul`,{className:q.list,"aria-labelledby":`nav-${e.category}`,children:e.items.map(e=>(0,J.jsx)(`li`,{children:(0,J.jsx)(l,{to:e.path,className:({isActive:e})=>`${q.item} ${e?q.active:``}`,onClick:t,children:(0,J.jsx)(`span`,{className:q.text,children:n(e.translationKey)})})},e.path))})]},e.category))})]})},Y={languageSwitcher:`_languageSwitcher_14cn3_1`,icon:`_icon_14cn3_14`,select:`_select_14cn3_18`},Et=()=>{let{t:e,i18n:t}=m(),n=[{code:`en`,name:`English`},{code:`zh`,name:`中文`},{code:`ja`,name:`日本語`},{code:`fr`,name:`Français`}],r=e=>{_t(e)};return(0,J.jsxs)(`div`,{className:Y.languageSwitcher,children:[(0,J.jsx)(ae,{className:Y.icon,"aria-hidden":!0}),(0,J.jsx)(`select`,{"aria-label":e(`header.language`),value:t.resolvedLanguage??t.language,onChange:e=>r(e.target.value),className:Y.select,children:n.map(e=>(0,J.jsx)(`option`,{value:e.code,children:e.name},e.code))})]})},X={themeSwitcher:`_themeSwitcher_ccf97_1`,icon:`_icon_ccf97_19`,select:`_select_ccf97_24`},Z=[`auto`,`light`,`dark`,`github-dark`],Dt=`minerva-docs-theme`,Ot=`(prefers-color-scheme: dark)`,kt=e=>typeof e==`string`&&Z.includes(e),At=()=>{try{let e=typeof localStorage<`u`?localStorage.getItem(Dt):null;return kt(e)?e:`auto`}catch{return`auto`}},jt=()=>typeof window<`u`&&window.matchMedia&&window.matchMedia(Ot).matches?`dark`:`light`,Mt=e=>{if(typeof window>`u`||!window.matchMedia)return()=>{};let t=window.matchMedia(Ot);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)},Nt=()=>()=>{},Pt=e=>{let t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());if(!t)return null;let n=t[1].length===3?t[1].split(``).map(e=>e+e).join(``):t[1];return[0,2,4].map(e=>parseInt(n.slice(e,e+2),16)).join(`, `)},Ft=(0,h.createContext)(void 0),It=({children:e})=>{let[t,n]=(0,h.useState)(At),r=(0,h.useSyncExternalStore)(t===`auto`?Mt:Nt,jt,()=>`light`),i=(0,h.useCallback)(e=>{n(e);try{localStorage.setItem(Dt,e)}catch{}},[]),a=t===`auto`?r:t;(0,h.useEffect)(()=>{let e=document.documentElement;e.setAttribute(`data-theme`,a===`light`?`light`:`dark`),e.setAttribute(`data-theme-name`,a);let t=Pt(String(ee[a][`primary-color`]));t&&e.style.setProperty(`--primary-rgb`,t)},[a]);let o=(0,h.useMemo)(()=>({mode:t,setMode:i,resolved:a}),[t,i,a]);return(0,J.jsx)(Ft.Provider,{value:o,children:e(a)})},Lt=()=>{let e=(0,h.useContext)(Ft);if(!e)throw Error(`useThemeMode must be used within ThemeModeProvider`);return e},Rt={auto:`header.theme.auto`,light:`header.theme.light`,dark:`header.theme.dark`,"github-dark":`header.theme.githubDark`},zt={auto:`Auto`,light:`Light`,dark:`Dark`,"github-dark":`GitHub Dark`},Bt={auto:he,light:re,dark:ne,"github-dark":de},Vt=()=>{let{t:e}=m(),{mode:t,setMode:n}=Lt(),r=Bt[t],i=e(`header.theme.label`,{defaultValue:`Theme`});return(0,J.jsxs)(`label`,{className:X.themeSwitcher,children:[(0,J.jsx)(r,{className:X.icon,"aria-hidden":`true`}),(0,J.jsx)(`select`,{className:X.select,value:t,"aria-label":i,title:i,onChange:e=>n(e.target.value),children:Z.map(t=>(0,J.jsx)(`option`,{value:t,children:e(Rt[t],{defaultValue:zt[t]})},t))})]})},Q={layout:`_layout_9j3ey_1`,menuButton:`_menuButton_9j3ey_10`,main:`_main_9j3ey_37`,header:`_header_9j3ey_47`,headerControls:`_headerControls_9j3ey_65`,content:`_content_9j3ey_70`,fadeIn:`_fadeIn_9j3ey_1`,sidebar:`_sidebar_9j3ey_87`,open:`_open_9j3ey_148`,skipLink:`_skipLink_9j3ey_152`,loading:`_loading_9j3ey_167`},Ht=()=>{let{t:e}=m();return(0,J.jsx)(`div`,{className:Q.loading,role:`status`,"aria-live":`polite`,children:e(`doc.loading`)})},Ut=()=>{let{t:e}=m(),[r,i]=(0,h.useState)(!1),{pathname:a}=n();return(0,h.useEffect)(()=>{window.scrollTo(0,0)},[a]),(0,J.jsxs)(`div`,{className:Q.layout,children:[(0,J.jsx)(`a`,{className:Q.skipLink,href:`#main-content`,onClick:e=>{e.preventDefault(),document.getElementById(`main-content`)?.focus()},children:e(`nav.skipToContent`)}),(0,J.jsx)(`button`,{type:`button`,className:Q.menuButton,onClick:()=>i(!r),"aria-label":e(`nav.toggleMenu`),"aria-expanded":r,"aria-controls":`docs-sidebar`,children:(0,J.jsx)(ie,{"aria-hidden":!0})}),(0,J.jsx)(Tt,{isOpen:r,onClose:()=>i(!1)}),(0,J.jsxs)(`main`,{className:Q.main,children:[(0,J.jsx)(`div`,{className:Q.header,children:(0,J.jsxs)(`div`,{className:Q.headerControls,children:[(0,J.jsx)(Vt,{}),(0,J.jsx)(Et,{})]})}),(0,J.jsx)(`div`,{className:Q.content,id:`main-content`,tabIndex:-1,children:(0,J.jsx)(h.Suspense,{fallback:(0,J.jsx)(Ht,{}),children:(0,J.jsx)(t,{})})})]})]})},$={errorPage:`_errorPage_7td8m_1`,content:`_content_7td8m_10`,errorMessage:`_errorMessage_7td8m_33`,actions:`_actions_7td8m_43`,homeLink:`_homeLink_7td8m_48`,refreshButton:`_refreshButton_7td8m_49`,icon:`_icon_7td8m_59`},Wt=()=>{let e=a(),{t}=m();return(0,J.jsx)(`div`,{className:$.errorPage,children:(0,J.jsxs)(`div`,{className:$.content,children:[(0,J.jsx)(`h1`,{children:t(`error.title`)}),(0,J.jsx)(`p`,{children:t(`error.description`)}),(0,J.jsx)(`p`,{className:$.errorMessage,children:e.message}),(0,J.jsxs)(`div`,{className:$.actions,children:[(0,J.jsxs)(o,{to:`overview`,className:$.homeLink,children:[(0,J.jsx)(se,{className:$.icon}),t(`error.back_home`)]}),(0,J.jsxs)(`button`,{onClick:()=>window.location.reload(),className:$.refreshButton,children:[(0,J.jsx)(oe,{className:$.icon}),t(`error.refresh`)]})]})]})})},Gt=()=>{let{t:e}=m();return(0,J.jsx)(`div`,{className:$.errorPage,children:(0,J.jsxs)(`div`,{className:$.content,children:[(0,J.jsx)(`h1`,{children:e(`notFound.title`)}),(0,J.jsx)(`p`,{children:e(`notFound.description`)}),(0,J.jsxs)(o,{to:`overview`,className:$.homeLink,children:[(0,J.jsx)(se,{className:$.icon}),e(`notFound.back_home`)]})]})})},Kt=u([{path:`/`,element:(0,J.jsx)(Ut,{}),errorElement:(0,J.jsx)(Wt,{}),children:[{index:!0,element:(0,J.jsx)(i,{to:`overview`,replace:!0})},...Ct,{path:`*`,element:(0,J.jsx)(Gt,{})}]}]),qt=()=>(0,J.jsx)(st,{i18n:bt,children:(0,J.jsx)(It,{children:e=>(0,J.jsx)(te,{theme:e,children:(0,J.jsx)(s,{router:Kt})})})}),Jt=document.getElementById(`root`),Yt=(0,ge.createRoot)(Jt),Xt=()=>Yt.render((0,J.jsx)(h.StrictMode,{children:(0,J.jsx)(qt,{})}));gt(bt.language).then(Xt,Xt);export{Lt as n,Z as t};