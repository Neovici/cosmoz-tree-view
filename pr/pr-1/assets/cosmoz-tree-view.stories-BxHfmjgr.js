import{A,e as b,w as ae,r as He,D as Fe,M as Pe,u as $,v as T,h as te,E as ke,p as De}from"./iframe-rmIydj09.js";import{_ as je}from"./preload-helper-PPVm8Dsz.js";const z=s=>s??A;function le(s,e,t){return s?e(s):t?.(s)}const qe=({slot:s,title:e,className:t,width:i="24",height:n="24",styles:r}={})=>b`
  <svg
    slot=${z(s)}
    class=${`building-07-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${i}
    height=${n}
    style=${z(r)}
  >
    ${le(e,()=>ae`<title>${e}</title>`)}
    <path
      d="M7.5 11H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 11.76 3 12.04 3 12.6V21m13.5-10h2.9c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 11.76 21 12.04 21 12.6V21m-4.5 0V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.98 3 14.42 3 13.3 3h-2.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7.5 4.52 7.5 5.08 7.5 6.2V21M22 21H2m9-14h2m-2 4h2m-2 4h2"
    />
  </svg>
`,We=({slot:s,title:e,className:t,width:i="24",height:n="24",styles:r}={})=>b`
  <svg
    slot=${z(s)}
    class=${`chevron-right-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${i}
    height=${n}
    style=${z(r)}
  >
    ${le(e,()=>ae`<title>${e}</title>`)}
    <path d="m9 18 6-6-6-6" />
  </svg>
`,Ge=({slot:s,title:e,className:t,width:i="24",height:n="24",styles:r}={})=>b`
  <svg
    slot=${z(s)}
    class=${`folder-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${i}
    height=${n}
    style=${z(r)}
  >
    ${le(e,()=>ae`<title>${e}</title>`)}
    <path
      d="m13 7-1.116-2.231c-.32-.642-.481-.963-.72-1.198a2 2 0 0 0-.748-.462C10.1 3 9.74 3 9.022 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2V7m0 0h15.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 10.12 22 11.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2V7Z"
    />
  </svg>
`;let K,$e=0;function fe(s){K=s}function _e(){K=null,$e=0}function Ue(){return $e++}const se=Symbol("haunted.phase"),G=Symbol("haunted.hook"),me=Symbol("haunted.update"),ge=Symbol("haunted.commit"),L=Symbol("haunted.effects"),B=Symbol("haunted.layoutEffects"),ne="haunted.context";class Ke{update;host;virtual;[G];[L];[B];constructor(e,t){this.update=e,this.host=t,this[G]=new Map,this[L]=[],this[B]=[]}run(e){fe(this);let t=e();return _e(),t}_runEffects(e){let t=this[e];fe(this);for(let i of t)i.call(this);_e()}runEffects(){this._runEffects(L)}runLayoutEffects(){this._runEffects(B)}teardown(){this[G].forEach(t=>{typeof t.teardown=="function"&&t.teardown(!0)})}}class Qe extends Error{constructor(e){const t=e?` <${e}>`:"";super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Ye=100,Ze=Promise.resolve().then.bind(Promise.resolve());function Ae(){let s=[],e;function t(){e=null;let i=s;s=[];for(var n=0,r=i.length;n<r;n++)i[n]()}return function(i){s.push(i),e==null&&(e=Ze(t))}}const Je=Ae(),ye=Ae();class ce{renderer;host;state;[se];_updateQueued;_active;_updateCount;_processing;static maxUpdates=Ye;constructor(e,t){this.renderer=e,this.host=t,this.state=new Ke(this.update.bind(this),t),this[se]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>ce.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Qe(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Je(()=>{let e=this.handlePhase(me);ye(()=>{this.handlePhase(ge,e),ye(()=>{this.handlePhase(L),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,t){switch(this[se]=e,e){case ge:this.commit(t),this.runEffects(B);return;case me:return this.render();case L:return this.runEffects(L)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const Xe=(...s)=>{const e=new CSSStyleSheet;return e.replaceSync(s.join("")),e},et=s=>s?.map(e=>typeof e=="string"?Xe(e):e),tt=(s,...e)=>s.flatMap((t,i)=>[t,e[i]||""]).join(""),st=tt,it=(s="")=>s.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():"");function nt(s){class e extends ce{frag;renderResult;constructor(n,r,a){super(n,a||r),this.frag=r}commit(n){this.renderResult=s(n,this.frag)}}function t(i,n,r){const a=(r||n||{}).baseElement||HTMLElement,{observedAttributes:d=[],useShadowDOM:h=!0,shadowRootInit:u={},styleSheets:y}=r||n||{},l=et(i.styleSheets||y);class p extends a{_scheduler;static get observedAttributes(){return i.observedAttributes||d||[]}constructor(){if(super(),h===!1)this._scheduler=new e(i,this);else{const o=this.attachShadow({mode:"open",...u});l&&(o.adoptedStyleSheets=l),this._scheduler=new e(i,o,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(o,f,w){if(f===w)return;let S=w===""?!0:w;Reflect.set(this,it(o),S)}}function c(m){let o=m,f=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return o},set(w){f&&o===w||(f=!0,o=w,this._scheduler&&this._scheduler.update())}})}const _=new Proxy(a.prototype,{getPrototypeOf(m){return m},set(m,o,f,w){let S;return o in m?(S=Object.getOwnPropertyDescriptor(m,o),S&&S.set?(S.set.call(w,f),!0):(Reflect.set(m,o,f,w),!0)):(typeof o=="symbol"||o[0]==="_"?S={enumerable:!0,configurable:!0,writable:!0,value:f}:S=c(f),Object.defineProperty(w,o,S),S.set&&S.set.call(w,f),!0)}});return Object.setPrototypeOf(p.prototype,_),p}return t}class E{id;state;constructor(e,t){this.id=e,this.state=t}}function rt(s,...e){let t=Ue(),i=K[G],n=i.get(t);return n||(n=new s(t,K,...e),i.set(t,n)),n.update(...e)}function k(s){return rt.bind(null,s)}function Le(s){return k(class extends E{callback;lastValues;values;_teardown;constructor(e,t,i,n){super(e,t),s(t,this)}update(e,t){this.callback=e,this.values=t}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function ze(s,e){s[L].push(e)}const Te=Le(ze),ot=s=>s instanceof Element?s:s.startNode||s.endNode||s.parentNode,at=k(class extends E{Context;value;_ranEffect;_unsubscribe;constructor(s,e,t){super(s,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ze(e,this)}update(s){return this.Context!==s&&(this._subscribe(s),this.Context=s),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(s){this.value=s,this.state.update()}_subscribe(s){const e={Context:s,callback:this._updater};ot(this.state.host).dispatchEvent(new CustomEvent(ne,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:n}=e;this.value=i?n:s.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function lt(s){return e=>{const t={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(ne,this)}disconnectedCallback(){this.removeEventListener(ne,this)}handleEvent(i){const{detail:n}=i;n.Context===t&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let n of this.listeners)n(i)}get value(){return this._value}},Consumer:s(function({render:i}){const n=at(t);return i(n)},{useShadowDOM:!1}),defaultValue:e};return t}}const R=k(class extends E{value;values;constructor(s,e,t,i){super(s,e),this.value=t(),this.values=i}update(s,e){return this.hasChanged(e)&&(this.values=e,this.value=s()),this.value}hasChanged(s=[]){return s.some((e,t)=>this.values[t]!==e)}}),re=(s,e)=>R(()=>s,e);function ct(s,e){s[B].push(e)}Le(ct);const Q=k(class extends E{args;constructor(s,e,t){super(s,e),this.updater=this.updater.bind(this),typeof t=="function"&&(t=t()),this.makeArgs(t)}update(){return this.args}updater(s){const[e]=this.args;typeof s=="function"&&(s=s(e)),!Object.is(e,s)&&(this.makeArgs(s),this.state.update())}makeArgs(s){this.args=Object.freeze([s,this.updater])}});k(class extends E{reducer;currentState;constructor(s,e,t,i,n){super(s,e),this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(i):i}update(s){return this.reducer=s,[this.currentState,this.dispatch]}dispatch(s){this.currentState=this.reducer(this.currentState,s),this.state.update()}});const ht=/([A-Z])/gu,Be=k(class extends E{property;eventName;constructor(s,e,t,i){if(super(s,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=t,this.eventName=t.replace(ht,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updater(i))}update(s,e){return[this.state.host[this.property],this.updater]}resolve(s){const e=this.state.host[this.property],t=typeof s=="function"?s:void 0,i=t?t(e):s;return[e,i,t]}notify(s,e){const t=new CustomEvent(this.eventName,{detail:{value:s,updater:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}updater(s){const[e,t,i]=this.resolve(s);this.notify(t,i).defaultPrevented||Object.is(e,t)||(this.state.host[this.property]=t)}});function dt(s){let e=s;return{get current(){return e},set current(t){e=t},get value(){return e},set value(t){e=t}}}function Re(s){return R(()=>dt(s),[])}k(class extends E{update(){return this.state.host}});function ut({render:s}){const e=nt(s),t=lt(e);return{component:e,createContext:t}}const he={CHILD:2},de=s=>(...e)=>({_$litDirective$:s,values:e});class Ie{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const I=(s,e)=>{const t=s._$AN;if(t===void 0)return!1;for(const i of t)i._$AO?.(e,!1),I(i,e);return!0},Y=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while(t?.size===0)},Me=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),_t(e)}};function pt(s){this._$AN!==void 0?(Y(this),this._$AM=s,Me(this)):this._$AM=s}function ft(s,e=!1,t=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let r=t;r<i.length;r++)I(i[r],!1),Y(i[r]);else i!=null&&(I(i,!1),Y(i));else I(this,s)}const _t=s=>{s.type==he.CHILD&&(s._$AP??=ft,s._$AQ??=pt)};class Ne extends Ie{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Me(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(I(this,e),Y(this))}setValue(e){if(He(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const{component:Oe}=ut({render:Fe});const we=(s,e,t)=>{const i=new Map;for(let n=e;n<=t;n++)i.set(s[n],n);return i},mt=de(class extends Ie{constructor(s){if(super(s),s.type!==he.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const n=[],r=[];let a=0;for(const d of s)n[a]=i?i(d,a):a,r[a]=t(d,a),a++;return{values:r,keys:n}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,i]){const n=Pe(s),{values:r,keys:a}=this.dt(e,t,i);if(!Array.isArray(n))return this.ut=a,r;const d=this.ut??=[],h=[];let u,y,l=0,p=n.length-1,c=0,_=r.length-1;for(;l<=p&&c<=_;)if(n[l]===null)l++;else if(n[p]===null)p--;else if(d[l]===a[c])h[c]=$(n[l],r[c]),l++,c++;else if(d[p]===a[_])h[_]=$(n[p],r[_]),p--,_--;else if(d[l]===a[_])h[_]=$(n[l],r[_]),T(s,h[_+1],n[l]),l++,_--;else if(d[p]===a[c])h[c]=$(n[p],r[c]),T(s,n[l],n[p]),p--,c++;else if(u===void 0&&(u=we(a,c,_),y=we(d,l,p)),u.has(d[l]))if(u.has(d[p])){const m=y.get(a[c]),o=m!==void 0?n[m]:null;if(o===null){const f=T(s,n[l]);$(f,r[c]),h[c]=f}else h[c]=$(o,r[c]),T(s,n[l],o),n[m]=null;c++}else te(n[p]),p--;else te(n[l]),l++;for(;c<=_;){const m=T(s,h[_+1]);$(m,r[c]),h[c++]=m}for(;l<=p;){const m=n[l++];m!==null&&te(m)}return this.ut=a,De(s,h),ke}});class Z extends Event{constructor(e){super(Z.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Z.eventName="rangeChanged";class J extends Event{constructor(e){super(J.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}J.eventName="visibilityChanged";class X extends Event{constructor(){super(X.eventName,{bubbles:!1})}}X.eventName="unpinned";class gt{constructor(e){this._element=null;const t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class yt extends gt{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(i)}scrollBy(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,i=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:i}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,i){return this._scrollTo(e,t,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:t}=this;let{top:i,left:n}=this._destination;i=Math.min(i||0,this.maxScrollTop),n=Math.min(n||0,this.maxScrollLeft);const r=Math.abs(i-e),a=Math.abs(n-t);r<1&&a<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let ve=typeof window<"u"?window.ResizeObserver:void 0;const ue=Symbol("virtualizerRef"),N="virtualizer-sizer";let be;class wt{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new ve(()=>this._hostElementSizeChanged()),this._childrenRO=new ve(this._childrenSizeChanged.bind(this))}_initHostElement(e){const t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[ue]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=St(this._hostElement,e),this._scrollerController=new yt(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${N}]`);t||(t=document.createElement("div"),t.setAttribute(N,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(N,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const t=e.type||be;if(typeof t=="function"&&this._layout instanceof t){const i={...e};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(e){let t,i;if(typeof e.type=="function"){i=e.type;const n={...e};delete n.type,t=n}else t=e;i===void 0&&(be=i=(await je(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new i(n=>this._handleLayoutMessage(n),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),t=e-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,a)=>r+a.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:n}}return null}_measureChildren(){const e={},t=this._children,i=this._measureChildOverride||this._measureChild;for(let n=0;n<t.length;n++){const r=t[n],a=this._first+n;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[a]=i.call(this,r,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:i}=e.getBoundingClientRect();return Object.assign({width:t,height:i},vt(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){e.type==="scroll"?(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",e)}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new X)}get _children(){const e=[];let t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(N)||e.push(t),t=t.nextElementSibling;return e}_updateView(){const e=this._hostElement,t=this._scrollerController?.element,i=this._layout;if(e&&t&&i){let n,r,a,d;const h=e.getBoundingClientRect();n=0,r=0,a=window.innerHeight,d=window.innerWidth;const u=this._clippingAncestors.map(f=>f.getBoundingClientRect());u.unshift(h);for(const f of u)n=Math.max(n,f.top),r=Math.max(r,f.left),a=Math.min(a,f.bottom),d=Math.min(d,f.right);const y=t.getBoundingClientRect(),l={left:h.left-y.left,top:h.top-y.top},p={width:t.scrollWidth,height:t.scrollHeight},c=n-h.top+e.scrollTop,_=r-h.left+e.scrollLeft,m=Math.max(0,a-n),o=Math.max(0,d-r);i.viewportSize={width:o,height:m},i.viewportScroll={top:c,left:_},i.totalScrollSize=p,i.offsetWithinScroller=l}}_sizeHostElement(e){const i=e&&e.width!==null?Math.min(82e5,e.width):0,n=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${n}px)`;else{const r=this._hostElement.style;r.minWidth=i?`${i}px`:"100%",r.minHeight=n?`${n}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:i,width:n,height:r,xOffset:a,yOffset:d},h)=>{const u=this._children[h-this._first];u&&(u.style.position="absolute",u.style.boxSizing="border-box",u.style.transform=`translate(${i}px, ${t}px)`,n!==void 0&&(u.style.width=n+"px"),r!==void 0&&(u.style.height=r+"px"),u.style.left=a===void 0?null:a+"px",u.style.top=d===void 0?null:d+"px")})}async _adjustRange(e){const{_first:t,_last:i,_firstVisible:n,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==n||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:i,left:n}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:t-n})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const t=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Z({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new J({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function vt(s){const e=window.getComputedStyle(s);return{marginTop:O(e.marginTop),marginRight:O(e.marginRight),marginBottom:O(e.marginBottom),marginLeft:O(e.marginLeft)}}function O(s){const e=s?parseFloat(s):NaN;return Number.isNaN(e)?0:e}function Se(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const e=s.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function bt(s,e=!1){const t=[];let i=e?s:Se(s);for(;i!==null;)t.push(i),i=Se(i);return t}function St(s,e=!1){let t=!1;return bt(s,e).filter(i=>{if(t)return!1;const n=getComputedStyle(i);return t=n.position==="fixed",n.overflow!=="visible"})}const Ct=s=>s,xt=(s,e)=>b`${e}: ${JSON.stringify(s,null,2)}`;class Et extends Ne{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,i)=>xt(t,i+this._first),this._keyFunction=(t,i)=>Ct(t,i+this._first),this._items=[],e.type!==he.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const t=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)t.push(this._items[i]);return mt(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);const i=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),i?ke:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){const n=e.parentNode;this._makeVirtualizer(n,t)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:t,keyFunction:i}=e;t&&(this._renderItem=(n,r)=>t(n,r+this._first)),i&&(this._keyFunction=(n,r)=>i(n,r+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:n,items:r}=t;this._virtualizer=new wt({hostElement:e,layout:i,scroller:n}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,t){const i=e.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",n=>{this._first=n.first,this._last=n.last,this.setValue(this.render())}),this._makeVirtualizer(i,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const kt=de(Et),ie=new WeakMap,$t=de(class extends Ne{render(s){return A}update(s,[e]){const t=e!==this.G;return t&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=s.options?.host,this.rt(this.ct=s.element)),A}rt(s){if(this.G!==void 0)if(this.isConnected||(s=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=ie.get(e);t===void 0&&(t=new WeakMap,ie.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){return typeof this.G=="function"?ie.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),At=s=>String(s.id),Lt=s=>String(s.label??s.name??""),zt=s=>s.children,Tt=(s,e,{getId:t=At,getChildren:i=zt,hasChildren:n}={})=>{const r=[],a=(d,h,u)=>{const y=d.length;d.forEach((l,p)=>{const c=t(l),_=i(l),m=n?.(l)??(_?.length??0)>0,o=m&&e.has(c);r.push({node:l,id:c,level:h,posinset:p+1,setsize:y,parentId:u,hasChildren:m,expanded:o}),o&&a(_??[],h+1,c)})};return s?.length&&a(s,1),r},Bt=(s,e,t)=>{const i=s[e];if(!i)return s.length>0?{type:"focus",index:0}:void 0;switch(t){case"ArrowDown":return e<s.length-1?{type:"focus",index:e+1}:void 0;case"ArrowUp":return e>0?{type:"focus",index:e-1}:void 0;case"Home":return e>0?{type:"focus",index:0}:void 0;case"End":return e<s.length-1?{type:"focus",index:s.length-1}:void 0;case"ArrowRight":return i.hasChildren?i.expanded?s[e+1]?.parentId===i.id?{type:"focus",index:e+1}:void 0:{type:"expand",id:i.id}:void 0;case"ArrowLeft":{if(i.expanded)return{type:"collapse",id:i.id};if(i.parentId==null)return;const n=s.findLastIndex((r,a)=>a<e&&r.id===i.parentId);return n>=0?{type:"focus",index:n}:void 0}default:return}},Rt=(s,e,t=!s.includes(e))=>{const i=s.includes(e);return t===i?[...s]:t?[...s,e]:s.filter(n=>n!==e)},Ce=s=>s.stopPropagation(),It=({label:s,renderIcon:e,getLabel:t=Lt},{rows:i,selected:n,tabStopId:r,scrollerRef:a,toggle:d,select:h,activate:u,onKeyDown:y,treeTabIndex:l,focusActiveItem:p,onRowFocus:c,onRangeChanged:_})=>{const m=o=>{if(!o)return b``;const f=o.id===n;return b`<div
			role="treeitem"
			class="row"
			part="row"
			data-id=${o.id}
			aria-level=${o.level}
			aria-posinset=${o.posinset}
			aria-setsize=${o.setsize}
			aria-expanded=${o.hasChildren?String(o.expanded):A}
			aria-selected=${String(f)}
			tabindex=${o.id===r?0:-1}
			@focus=${()=>c(o)}
			@click=${()=>h(o)}
			@dblclick=${()=>u(o)}
		>
			${Array.from({length:o.level-1},()=>b`<span class="guide" part="guide"></span>`)}
			<span class="content" part="content">
				<span
					class="toggle"
					part="toggle"
					aria-hidden="true"
					@click=${o.hasChildren?w=>{Ce(w),d(o.id)}:A}
					@dblclick=${Ce}
					>${o.hasChildren?We({width:"16",height:"16"}):A}</span
				>${e?b`<span class="icon" part="icon"
							>${e(o.node,{expanded:o.expanded,selected:f,hasChildren:o.hasChildren,level:o.level})}</span
						>`:A}<span class="label" part="label"
					>${t(o.node)}</span
				>
			</span>
		</div>`};return b`<div
		role="tree"
		class="tree"
		part="tree"
		aria-label=${z(s)}
		tabindex=${l}
		@rangeChanged=${_}
		@focus=${o=>{o.target===o.currentTarget&&p()}}
		@keydown=${y}
		${$t(o=>{a.current=o})}
	>
		${kt({items:i,renderItem:m,keyFunction:(o,f)=>o?.id??f,scroller:!0})}
	</div>`},Mt=st`
	:host {
		display: block;
		overflow: hidden;
		font-family: var(--cz-font-body, inherit);
		--row-height: 32px;
		--indent: 20px;
	}

	:host([size='md']) {
		--row-height: 40px;
	}

	.tree {
		height: 100%;
		overflow: auto;
		outline: none;
	}

	.row {
		display: flex;
		align-items: stretch;
		width: 100%;
		height: var(--row-height);
		box-sizing: border-box;
		cursor: pointer;
		user-select: none;
		outline: none;
		color: var(--cz-color-text-secondary);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-medium);
	}

	:host([size='md']) .row {
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
	}

	.guide {
		flex: 0 0 var(--indent);
		position: relative;
	}

	.guide::before {
		content: '';
		position: absolute;
		inset-block: 0;
		inset-inline-start: calc(var(--indent) / 2 + 4px);
		border-inline-start: 1px solid var(--cz-color-border-secondary);
	}

	.content {
		flex: 1;
		min-width: 0;
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 1);
		margin-block: 1px;
		padding-inline: calc(var(--cz-spacing) * 1) calc(var(--cz-spacing) * 2);
		border-radius: var(--cz-radius-sm);
		transition:
			background 0.15s,
			color 0.15s;
	}

	.row:hover .content {
		background: var(--cz-color-bg-primary-hover);
		color: var(--cz-color-text-secondary-hover);
	}

	.row[aria-selected='true'] .content {
		background: var(--cz-color-bg-tertiary);
		color: var(--cz-color-text-primary);
		font-weight: var(--cz-font-weight-semibold);
	}

	.row:focus-visible .content {
		box-shadow: var(--cz-focus-ring);
	}

	.toggle {
		flex: 0 0 var(--indent);
		height: var(--indent);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--cz-radius-xs);
		color: var(--cz-color-fg-quaternary);
	}

	.toggle svg {
		transition: rotate 0.15s ease-in-out;
	}

	.row[aria-expanded='true'] .toggle svg {
		rotate: 90deg;
	}

	.row[aria-expanded] .toggle:hover {
		color: var(--cz-color-text-secondary);
		background: var(--cz-color-bg-tertiary);
	}

	.icon {
		display: inline-flex;
		flex: none;
		color: var(--cz-color-fg-quaternary);
	}

	.row[aria-selected='true'] .icon {
		color: var(--cz-color-text-primary);
	}

	.label {
		flex: 1;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	@media (prefers-reduced-motion: reduce) {
		.content,
		.toggle svg {
			transition: none;
		}
	}
`,Nt=k(class extends E{values;constructor(s,e,t,i){super(s,e),Object.assign(e.host,t),this.values=i}update(s,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,s))}hasChanged(s=[]){return s.some((e,t)=>this.values[t]!==e)}}),xe=[],Ot=s=>`[role='treeitem'][data-id='${CSS.escape(s)}']`,oe=(s,e,t,{focus:i=!0,block:n="nearest"}={})=>{if(!s||(s[ue]?.element(e)?.scrollIntoView({block:n}),!i))return;let r=0;const a=()=>{const d=s.querySelector(Ot(t));if(d){d.focus({preventScroll:!0});return}++r<10&&requestAnimationFrame(a)};a()},Vt=async s=>{await new Promise(requestAnimationFrame);const e=s?.[ue];e&&await Promise.race([e.layoutComplete.catch(()=>{}),new Promise(t=>setTimeout(t,500))])},Ht=(s,e,...t)=>t.find(i=>i!=null&&e.has(i))??s[0]?.id,Ft=({items:s,getId:e,getChildren:t,hasChildren:i})=>{const[n,r]=Be("expanded",()=>[]),a=n??xe,d=R(()=>new Set(a),[a]),h=R(()=>Tt(s,d,{getId:e,getChildren:t,hasChildren:i}),[s,d,e,t,i]),u=R(()=>new Map(h.map((l,p)=>[l.id,p])),[h]),y=re((l,p)=>r(c=>Rt(c??xe,l,p)),[]);return{rows:h,indexOf:u,toggle:y}},Pt=(s,e,t)=>{const i=Re(void 0);return Te(()=>{if(s==null||i.current===s)return;const n=e.get(s);n!=null&&(i.current=s,Vt(t.current).then(()=>oe(t.current,n,s,{focus:!1,block:"center"})))},[s,e]),i},Dt=(s,e)=>{if(s.defaultPrevented||s.altKey||s.ctrlKey||s.metaKey)return;const t=e.rows[e.index];if(t&&(s.key==="Enter"||s.key===" ")){s.preventDefault(),(s.key==="Enter"?e.activate:e.select)(t);return}const i=Bt(e.rows,e.index,s.key);i&&(s.preventDefault(),i.type==="focus"?e.focus(i.index):e.toggle(i.id,i.type==="expand"))},jt=(s,e)=>{const[t,i]=Be("selected"),[n,r]=Q(void 0),[a,d]=Q({first:-1,last:-1});Te(()=>r(t),[t]);const h=Re(void 0),{rows:u,indexOf:y,toggle:l}=Ft(e),p=Pt(t,y,h),c=Ht(u,y,n,t),_=y.get(c)??-1,m=u.length&&(_<a.first||_>a.last)?0:-1,o=()=>{_>=0&&oe(h.current,_,c)},f=re(v=>{p.current=v.id,r(v.id),i(v.id)},[]),w=re(v=>{f(v),s.dispatchEvent(new CustomEvent("activate",{detail:{id:v.id,node:v.node},bubbles:!0,composed:!0}))},[]);return Nt({focusActiveItem:o},[y,c]),{rows:u,selected:t,tabStopId:c,scrollerRef:h,toggle:l,select:f,activate:w,onKeyDown:v=>Dt(v,{rows:u,index:y.get(c)??-1,select:f,activate:w,toggle:l,focus:M=>{const pe=u[M];r(pe.id),oe(h.current,M,pe.id)}}),treeTabIndex:m,focusActiveItem:o,onRowFocus:v=>r(v.id),onRangeChanged:({first:v,last:M})=>d({first:v,last:M})}},qt=s=>It(s,jt(s,s));customElements.define("cosmoz-tree-view",Oe(qt,{styleSheets:[Mt],observedAttributes:["size","label","selected"]}));const Ve=[{id:"root",label:"Root",children:[{id:"ica",label:"Client ICA",children:[{id:"ica.north",label:"Region North",children:[{id:"ica.north.lulea",label:"Luleå"},{id:"ica.north.umea",label:"Umeå"},{id:"ica.north.kiruna",label:"Kiruna"}]},{id:"ica.south",label:"Region South",children:[{id:"ica.south.malmo",label:"Malmö"},{id:"ica.south.lund",label:"Lund"}]},{id:"ica.hq",label:"Head office"}]},{id:"rexel",label:"Client Rexel",children:[{id:"rexel.se",label:"Sweden"},{id:"rexel.no",label:"Norway"}]},{id:"food",label:"Food Market"},{id:"demo",label:"Demo structure",children:[]}]}],Wt=s=>[{id:"wide",label:`Wide node (${s.toLocaleString()} children)`,children:Array.from({length:s},(e,t)=>({id:`wide.${t}`,label:`Store ${String(t+1).padStart(6,"0")}`,children:t%1e3===0?[{id:`wide.${t}.a`,label:"Department A"},{id:`wide.${t}.b`,label:"Department B"}]:void 0}))}],Gt=[{pathLocator:"1",name:"C:",children:{2:{pathLocator:"1.2",name:"Windows",children:{3:{pathLocator:"1.2.3",name:"System"},4:{pathLocator:"1.2.4",name:"Fonts"}}},5:{pathLocator:"1.5",name:"Users",children:{6:{pathLocator:"1.5.6",name:"John"}}}}},{pathLocator:"7",name:"D:"}],{expect:g,fn:Ee,waitFor:C}=__STORYBOOK_MODULE_TEST__,Ut=(s,{hasChildren:e})=>(e?Ge:qe)({width:"16",height:"16"}),es={title:"CosmozTreeView",component:"cosmoz-tree-view",tags:["autodocs"],argTypes:{size:{control:"inline-radio",options:["sm","md"]},icons:{control:"boolean"}},args:{size:"sm",items:Ve,expanded:["root"],icons:!1,onSelected:Ee(),onActivate:Ee()},render:s=>b`<cosmoz-tree-view
            style="height: 360px; width: 320px"
            label="Organisation"
            size=${s.size}
            .items=${s.items}
            .expanded=${s.expanded}
            .selected=${s.selected}
            .renderIcon=${s.icons?Ut:void 0}
            @selected-changed=${e=>s.onSelected(e.detail.value)}
            @activate=${e=>s.onActivate(e.detail.id)}
        ></cosmoz-tree-view>`},ee=s=>s.getAllByShadowRole("treeitem"),x=(s,e)=>s.getByShadowText(e).closest('[role="treeitem"]'),U=s=>!!s?.matches(":focus"),V={play:async({canvas:s,step:e,userEvent:t,args:i})=>{await e("Shows the root and its children",async()=>{await s.findByShadowText("Client ICA"),g(ee(s)).toHaveLength(5)}),await e("Clicking the chevron expands without selecting",async()=>{const n=x(s,"Client ICA");await t.click(n.querySelector(".toggle")),await s.findByShadowText("Region North"),g(n.getAttribute("aria-expanded")).toBe("true"),g(n.getAttribute("aria-selected")).toBe("false"),g(i.onSelected).not.toHaveBeenCalled()}),await e("Clicking a row selects it",async()=>{await t.click(s.getByShadowText("Region South")),g(i.onSelected).toHaveBeenCalledWith("ica.south"),g(x(s,"Region South").getAttribute("aria-selected")).toBe("true")}),await e("Double-click activates",async()=>{await t.dblClick(s.getByShadowText("Head office")),g(i.onActivate).toHaveBeenCalledWith("ica.hq")})}},H={args:{selected:"ica"},play:async({canvas:s,step:e,userEvent:t,args:i})=>{const n=await C(()=>x(s,"Client ICA"));await e("The selected row holds the tab stop",async()=>{g(n.tabIndex).toBe(0),n.focus()}),await e("ArrowRight expands, then moves into the children",async()=>{await t.keyboard("{ArrowRight}"),await s.findByShadowText("Region North"),await t.keyboard("{ArrowRight}"),await C(()=>g(U(x(s,"Region North"))).toBe(!0))}),await e("ArrowDown / ArrowLeft move and go back to the parent",async()=>{await t.keyboard("{ArrowDown}"),await C(()=>g(U(x(s,"Region South"))).toBe(!0)),await t.keyboard("{ArrowLeft}"),await C(()=>g(U(x(s,"Client ICA"))).toBe(!0))}),await e("ArrowLeft on an open node collapses it",async()=>{await t.keyboard("{ArrowLeft}"),await C(()=>g(s.queryByShadowText("Region North")).toBeNull())}),await e("Space selects, Enter activates",async()=>{await t.keyboard("{ArrowDown} "),g(i.onSelected).toHaveBeenLastCalledWith("rexel"),await t.keyboard("{Enter}"),g(i.onActivate).toHaveBeenCalledWith("rexel")})}},F={args:{icons:!0,expanded:["root","ica","ica.north"],selected:"ica.north.umea"}},P={args:{size:"md",icons:!0,expanded:["root","ica"]}},Kt=Wt(1e5),D={args:{items:Kt,expanded:["wide"],selected:"wide.50000"},play:async({canvas:s,step:e})=>{await e("Renders only the rows in view, centred on the selection",async()=>{await s.findByShadowText("Store 050001"),g(ee(s).length).toBeLessThan(100)}),await e("Keeps a keyboard entry point after the active row scrolls out",async()=>{const t=s.getByShadowRole("tree");t.scrollTop=0,await C(()=>g(t.querySelector('[data-id="wide.50000"]')).toBeNull()),await C(()=>g(t.tabIndex).toBe(0)),t.focus(),await C(()=>g(U(t.querySelector('[data-id="wide.50000"]'))).toBe(!0))})}};customElements.define("controlled-tree-demo",Oe(()=>{const[s,e]=Q("ica.hq"),[t,i]=Q(["root","ica"]);return b`
            <p style="font: var(--cz-text-sm) var(--cz-font-body)">
                selected: <b data-testid="selected">${s??"—"}</b> · expanded:
                <b data-testid="expanded">${t.join(", ")}</b>
            </p>
            <button @click=${()=>i([])}>Collapse all</button>
            <button @click=${()=>e("rexel.no")}>Select Norway</button>
            <cosmoz-tree-view
                style="height: 300px; width: 320px"
                label="Organisation"
                .items=${Ve}
                .selected=${s}
                .expanded=${t}
                @selected-changed=${n=>{n.preventDefault(),e(n.detail.value)}}
                @expanded-changed=${n=>{n.preventDefault(),i(n.detail.value)}}
            ></cosmoz-tree-view>
        `}));const j={render:()=>b`<controlled-tree-demo></controlled-tree-demo>`,play:async({canvas:s,step:e,userEvent:t})=>{await e("The host state drives the tree",async()=>{await s.findByShadowText("Head office"),g(x(s,"Head office").getAttribute("aria-selected")).toBe("true")}),await e("Tree interactions update the host state",async()=>{await t.click(s.getByShadowText("Region North")),await C(()=>g(s.getByShadowTestId("selected").textContent).toBe("ica.north"))}),await e("Host changes are reflected in the tree",async()=>{await t.click(s.getByShadowRole("button",{name:"Collapse all"})),await C(()=>g(ee(s)).toHaveLength(1))})}},Qt=s=>s.pathLocator,Yt=s=>s.name,Zt=s=>s.children?Object.values(s.children):void 0,q={render:()=>b`<cosmoz-tree-view
            style="height: 240px; width: 320px"
            label="Files"
            .items=${Gt}
            .getId=${Qt}
            .getLabel=${Yt}
            .getChildren=${Zt}
            .expanded=${["1","1.2"]}
            .selected=${"1.2.3"}
        ></cosmoz-tree-view>`,play:async({canvas:s,step:e})=>{await e("Reads ids, labels and children through the accessors",async()=>{await s.findByShadowText("System"),g(x(s,"System").dataset.id).toBe("1.2.3"),g(ee(s)).toHaveLength(6)})}},W={args:{items:[]},play:async({canvas:s,step:e})=>{await e("Renders an empty tree without rows",async()=>{await s.findByShadowRole("tree"),g(s.queryAllByShadowRole("treeitem")).toHaveLength(0)})}},ts=["Default","Keyboard","WithIcons","Medium","HundredThousandChildren","Controlled","CustomAccessors","Empty"];V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    userEvent,
    args
  }) => {
    await step('Shows the root and its children', async () => {
      await canvas.findByShadowText('Client ICA');
      expect(rows(canvas)).toHaveLength(5);
    });
    await step('Clicking the chevron expands without selecting', async () => {
      const ica = rowByName(canvas, 'Client ICA');
      await userEvent.click(ica.querySelector('.toggle')!);
      await canvas.findByShadowText('Region North');
      expect(ica.getAttribute('aria-expanded')).toBe('true');
      expect(ica.getAttribute('aria-selected')).toBe('false');
      expect(args.onSelected).not.toHaveBeenCalled();
    });
    await step('Clicking a row selects it', async () => {
      await userEvent.click(canvas.getByShadowText('Region South'));
      expect(args.onSelected).toHaveBeenCalledWith('ica.south');
      expect(rowByName(canvas, 'Region South').getAttribute('aria-selected')).toBe('true');
    });
    await step('Double-click activates', async () => {
      await userEvent.dblClick(canvas.getByShadowText('Head office'));
      expect(args.onActivate).toHaveBeenCalledWith('ica.hq');
    });
  }
}`,...V.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    selected: 'ica'
  },
  play: async ({
    canvas,
    step,
    userEvent,
    args
  }) => {
    const ica = await waitFor(() => rowByName(canvas, 'Client ICA'));
    await step('The selected row holds the tab stop', async () => {
      expect(ica.tabIndex).toBe(0);
      ica.focus();
    });
    await step('ArrowRight expands, then moves into the children', async () => {
      await userEvent.keyboard('{ArrowRight}');
      await canvas.findByShadowText('Region North');
      await userEvent.keyboard('{ArrowRight}');
      await waitFor(() => expect(hasFocus(rowByName(canvas, 'Region North'))).toBe(true));
    });
    await step('ArrowDown / ArrowLeft move and go back to the parent', async () => {
      await userEvent.keyboard('{ArrowDown}');
      await waitFor(() => expect(hasFocus(rowByName(canvas, 'Region South'))).toBe(true));
      await userEvent.keyboard('{ArrowLeft}');
      await waitFor(() => expect(hasFocus(rowByName(canvas, 'Client ICA'))).toBe(true));
    });
    await step('ArrowLeft on an open node collapses it', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      await waitFor(() => expect(canvas.queryByShadowText('Region North')).toBeNull());
    });
    await step('Space selects, Enter activates', async () => {
      await userEvent.keyboard('{ArrowDown} ');
      expect(args.onSelected).toHaveBeenLastCalledWith('rexel');
      await userEvent.keyboard('{Enter}');
      expect(args.onActivate).toHaveBeenCalledWith('rexel');
    });
  }
}`,...H.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    icons: true,
    expanded: ['root', 'ica', 'ica.north'],
    selected: 'ica.north.umea'
  }
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    icons: true,
    expanded: ['root', 'ica']
  }
}`,...P.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    items: big,
    expanded: ['wide'],
    selected: 'wide.50000'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders only the rows in view, centred on the selection', async () => {
      await canvas.findByShadowText('Store 050001');
      expect(rows(canvas).length).toBeLessThan(100);
    });
    await step('Keeps a keyboard entry point after the active row scrolls out', async () => {
      const tree = canvas.getByShadowRole('tree');
      tree.scrollTop = 0;
      await waitFor(() => expect(tree.querySelector('[data-id="wide.50000"]')).toBeNull());
      await waitFor(() => expect(tree.tabIndex).toBe(0));
      tree.focus();
      await waitFor(() => expect(hasFocus(tree.querySelector('[data-id="wide.50000"]'))).toBe(true));
    });
  }
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => html\`<controlled-tree-demo></controlled-tree-demo>\`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('The host state drives the tree', async () => {
      await canvas.findByShadowText('Head office');
      expect(rowByName(canvas, 'Head office').getAttribute('aria-selected')).toBe('true');
    });
    await step('Tree interactions update the host state', async () => {
      await userEvent.click(canvas.getByShadowText('Region North'));
      await waitFor(() => expect(canvas.getByShadowTestId('selected').textContent).toBe('ica.north'));
    });
    await step('Host changes are reflected in the tree', async () => {
      await userEvent.click(canvas.getByShadowRole('button', {
        name: 'Collapse all'
      }));
      await waitFor(() => expect(rows(canvas)).toHaveLength(1));
    });
  }
}`,...j.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-tree-view
            style="height: 240px; width: 320px"
            label="Files"
            .items=\${pathNodes}
            .getId=\${getPathId}
            .getLabel=\${getPathLabel}
            .getChildren=\${getPathChildren}
            .expanded=\${['1', '1.2']}
            .selected=\${'1.2.3'}
        ></cosmoz-tree-view>\`,
  play: async ({
    canvas,
    step
  }) => {
    await step('Reads ids, labels and children through the accessors', async () => {
      await canvas.findByShadowText('System');
      expect(rowByName(canvas, 'System').dataset.id).toBe('1.2.3');
      expect(rows(canvas)).toHaveLength(6);
    });
  }
}`,...q.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders an empty tree without rows', async () => {
      await canvas.findByShadowRole('tree');
      expect(canvas.queryAllByShadowRole('treeitem')).toHaveLength(0);
    });
  }
}`,...W.parameters?.docs?.source}}};export{j as Controlled,q as CustomAccessors,V as Default,W as Empty,D as HundredThousandChildren,H as Keyboard,P as Medium,F as WithIcons,ts as __namedExportsOrder,es as default};
