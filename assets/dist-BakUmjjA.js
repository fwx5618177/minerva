import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t,n,r,i,a,o,s,c,l;function u(){return(u=e((()=>{t=globalThis,n=t.ShadowRoot&&(t.ShadyCSS===void 0||t.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap,a=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=i.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&i.set(t,e))}return e}toString(){return this.cssText}},o=e=>new a(typeof e==`string`?e:e+``,void 0,r),s=(e,...t)=>{let n=e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]);return new a(n,e,r)},c=(e,r)=>{if(n)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of r){let r=document.createElement(`style`),i=t.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=n.cssText,e.appendChild(r)}},l=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return o(t)})(e):e})))()}var d,ee,te,ne,re,ie,f,p,ae,oe,m,h,g,se,_;function v(){return(v=e((()=>{u(),{is:d,defineProperty:ee,getOwnPropertyDescriptor:te,getOwnPropertyNames:ne,getOwnPropertySymbols:re,getPrototypeOf:ie}=Object,f=globalThis,p=f.trustedTypes,ae=p?p.emptyScript:``,oe=f.reactiveElementPolyfillSupport,m=(e,t)=>e,h={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},g=(e,t)=>!d(e,t),se={attribute:!0,type:String,converter:h,reflect:!1,useDefault:!1,hasChanged:g},Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap,_=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ee(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=te(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=ie(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...ne(e),...re(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(l(e))}else e!==void 0&&t.push(l(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?h:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?h:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??g)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}},_.elementStyles=[],_.shadowRootOptions={mode:`open`},_[m(`elementProperties`)]=new Map,_[m(`finalized`)]=new Map,oe?.({ReactiveElement:_}),(f.reactiveElementVersions??=[]).push(`2.1.2`)})))()}function ce(e,t){if(!A(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return C===void 0?t:C.createHTML(t)}function y(e,t,n=e,r){if(t===V)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=k(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=y(e,i._$AS(e,t.values),i,r)),t}var b,x,S,C,w,T,E,le,D,O,k,A,ue,j,M,N,P,F,I,L,R,z,B,V,H,U,W,de,G,fe,K,q,pe,me,he,ge,_e,ve;function J(){return(J=e((()=>{b=globalThis,x=e=>e,S=b.trustedTypes,C=S?S.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,w=`$lit$`,T=`lit$${Math.random().toFixed(9).slice(2)}$`,E=`?`+T,le=`<${E}>`,D=document,O=()=>D.createComment(``),k=e=>e===null||typeof e!=`object`&&typeof e!=`function`,A=Array.isArray,ue=e=>A(e)||typeof e?.[Symbol.iterator]==`function`,j=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,P=/>/g,F=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),I=/'/g,L=/"/g,R=/^(?:script|style|textarea|title)$/i,z=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),B=z(1),z(2),z(3),V=Symbol.for(`lit-noChange`),H=Symbol.for(`lit-nothing`),U=new WeakMap,W=D.createTreeWalker(D,129),de=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=M;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===M?c[1]===`!--`?o=N:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=F):(R.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=F):o=P:o===F?c[0]===`>`?(o=i??M,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?F:c[3]===`"`?L:I):o===L||o===I?o=F:o===N||o===P?o=M:(o=F,i=void 0);let d=o===F&&e[t+1].startsWith(`/>`)?` `:``;a+=o===M?n+le:l>=0?(r.push(s),n.slice(0,l)+w+n.slice(l)+T+d):n+T+(l===-2?t:d)}return[ce(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},G=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=de(t,n);if(this.el=e.createElement(l,r),W.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=W.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(w)){let t=u[o++],n=i.getAttribute(e).split(T),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?pe:r[1]===`?`?me:r[1]===`@`?he:q}),i.removeAttribute(e)}else e.startsWith(T)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(R.test(i.tagName)){let e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=S?S.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],O()),W.nextNode(),c.push({type:2,index:++a});i.append(e[t],O())}}}else if(i.nodeType===8){if(i.data===E)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(T,e+1))!==-1;)c.push({type:7,index:a}),e+=T.length-1}}a++}}static createElement(e,t){let n=D.createElement(`template`);return n.innerHTML=e,n}},fe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??D).importNode(t,!0);W.currentNode=r;let i=W.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new K(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ge(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=W.nextNode(),a++)}return W.currentNode=D,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},K=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=y(this,e,t),k(e)?e===H||e==null||e===``?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==V&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ue(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==H&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=G.createElement(ce(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new fe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return t===void 0&&U.set(e.strings,t=new G(e)),t}k(t){A(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(O()),this.O(O()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=x(e).nextSibling;x(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=H}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=y(this,e,t,0),a=!k(e)||e!==this._$AH&&e!==V,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=y(this,r[n+o],t,o),s===V&&(s=this._$AH[o]),a||=!k(s)||s!==this._$AH[o],s===H?e=H:e!==H&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},pe=class extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}},me=class extends q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==H)}},he=class extends q{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=y(this,e,t,0)??H)===V)return;let n=this._$AH,r=e===H&&n!==H||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==H&&(n===H||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ge=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){y(this,e)}},_e=b.litHtmlPolyfillSupport,_e?.(G,K),(b.litHtmlVersions??=[]).push(`3.3.3`),ve=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new K(t.insertBefore(O(),e),e,void 0,n??{})}return i._$AI(e),i}})))()}var Y,X,ye;function be(){return(be=e((()=>{v(),J(),Y=globalThis,X=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}},X._$litElement$=!0,X.finalized=!0,Y.litElementHydrateSupport?.({LitElement:X}),ye=Y.litElementPolyfillSupport,ye?.({LitElement:X}),(Y.litElementVersions??=[]).push(`4.2.2`)})))()}function xe(){return(xe=e((()=>{v(),J(),be()})))()}var Se;function Ce(){return(Ce=e((()=>{Se=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})}})))()}function Z(e){return(t,n)=>typeof n==`object`?Te(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var we,Te;function Ee(){return(Ee=e((()=>{v(),we={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:g},Te=(e=we,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)}})))()}function De(){return(De=e((()=>{Ee()})))()}function Oe(){return(Oe=e((()=>{Ce(),Ee(),De()})))()}function Q(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var ke,Ae,$;function je(){return(je=e((()=>{xe(),Oe(),ke=s`
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
`,Ae=class extends X{constructor(...e){super(...e),this.variant=`primary`,this.size=`medium`,this.shape=`rounded`,this.disabled=!1,this.loading=!1,this.active=!1,this.ariaLabel=``}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.createRippleEffect(e)}createRippleEffect(e){let t=this.shadowRoot?.querySelector(`.button`);if(!t)return;let n=document.createElement(`span`),r=t.getBoundingClientRect(),i=Math.max(r.width,r.height),a=e.clientX-r.left-i/2,o=e.clientY-r.top-i/2;n.style.width=n.style.height=`${i}px`,n.style.left=`${a}px`,n.style.top=`${o}px`,n.classList.add(`ripple`);let s=t.querySelector(`.ripple`);s&&s.remove(),t.appendChild(n),n.addEventListener(`animationend`,()=>{n.remove()})}render(){return B`
      <button
        class=${this.generateClasses()}
        ?disabled=${this.disabled}
        aria-label=${this.ariaLabel||H}
        aria-busy=${this.loading?`true`:H}
        @click=${this.handleClick}
      >
        ${this.loading?B`<span class="loading-spinner"></span>`:B`<slot></slot>`}
      </button>
    `}generateClasses(){return[`button`,`variant-${this.variant}`,`size-${this.size}`,`shape-${this.shape}`,this.loading&&`loading`,this.active&&`active`,this.disabled&&`disabled`].filter(Boolean).join(` `)}},$=(Ae.styles=ke,Ae),Q([Z({type:String,reflect:!0})],$.prototype,`variant`,void 0),Q([Z({type:String,reflect:!0})],$.prototype,`size`,void 0),Q([Z({type:String,reflect:!0})],$.prototype,`shape`,void 0),Q([Z({type:Boolean,reflect:!0})],$.prototype,`disabled`,void 0),Q([Z({type:Boolean,reflect:!0})],$.prototype,`loading`,void 0),Q([Z({type:Boolean,reflect:!0})],$.prototype,`active`,void 0),Q([Z({type:String,attribute:`aria-label`})],$.prototype,`ariaLabel`,void 0),$=Q([Se(`minerva-button`)],$)})))()}export{je as t};