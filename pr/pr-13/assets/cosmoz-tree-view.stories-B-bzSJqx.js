import{A as N,e as y,w as re,r as Ne,D as Me,M as He,u as z,v as O,h as Z,E as Ce,p as Oe}from"./iframe-DHdIb9eL.js";import{_ as Ve}from"./preload-helper-PPVm8Dsz.js";const H=t=>t??N;function oe(t,e,s){return t?e(t):s?.(t)}const Fe=({slot:t,title:e,className:s,width:i="24",height:n="24",styles:r}={})=>y`
  <svg
    slot=${H(t)}
    class=${`building-07-icon ${s??""}`}
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
    style=${H(r)}
  >
    ${oe(e,()=>re`<title>${e}</title>`)}
    <path
      d="M7.5 11H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 11.76 3 12.04 3 12.6V21m13.5-10h2.9c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 11.76 21 12.04 21 12.6V21m-4.5 0V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.98 3 14.42 3 13.3 3h-2.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7.5 4.52 7.5 5.08 7.5 6.2V21M22 21H2m9-14h2m-2 4h2m-2 4h2"
    />
  </svg>
`,Pe=({slot:t,title:e,className:s,width:i="24",height:n="24",styles:r}={})=>y`
  <svg
    slot=${H(t)}
    class=${`chevron-right-icon ${s??""}`}
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
    style=${H(r)}
  >
    ${oe(e,()=>re`<title>${e}</title>`)}
    <path d="m9 18 6-6-6-6" />
  </svg>
`,De=({slot:t,title:e,className:s,width:i="24",height:n="24",styles:r}={})=>y`
  <svg
    slot=${H(t)}
    class=${`folder-icon ${s??""}`}
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
    style=${H(r)}
  >
    ${oe(e,()=>re`<title>${e}</title>`)}
    <path
      d="m13 7-1.116-2.231c-.32-.642-.481-.963-.72-1.198a2 2 0 0 0-.748-.462C10.1 3 9.74 3 9.022 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2V7m0 0h15.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 10.12 22 11.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2V7Z"
    />
  </svg>
`;let q,xe=0;function de(t){q=t}function ue(){q=null,xe=0}function je(){return xe++}const J=Symbol("haunted.phase"),W=Symbol("haunted.hook"),pe=Symbol("haunted.update"),fe=Symbol("haunted.commit"),M=Symbol("haunted.effects"),V=Symbol("haunted.layoutEffects"),te="haunted.context";class We{update;host;virtual;[W];[M];[V];constructor(e,s){this.update=e,this.host=s,this[W]=new Map,this[M]=[],this[V]=[]}run(e){de(this);let s=e();return ue(),s}_runEffects(e){let s=this[e];de(this);for(let i of s)i.call(this);ue()}runEffects(){this._runEffects(M)}runLayoutEffects(){this._runEffects(V)}teardown(){this[W].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class qe extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Ge=100,Ue=Promise.resolve().then.bind(Promise.resolve());function Ee(){let t=[],e;function s(){e=null;let i=t;t=[];for(var n=0,r=i.length;n<r;n++)i[n]()}return function(i){t.push(i),e==null&&(e=Ue(s))}}const Ke=Ee(),me=Ee();class ae{renderer;host;state;[J];_updateQueued;_active;_updateCount;_processing;static maxUpdates=Ge;constructor(e,s){this.renderer=e,this.host=s,this.state=new We(this.update.bind(this),s),this[J]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>ae.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new qe(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Ke(()=>{let e=this.handlePhase(pe);me(()=>{this.handlePhase(fe,e),me(()=>{this.handlePhase(M),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[J]=e,e){case fe:this.commit(s),this.runEffects(V);return;case pe:return this.render();case M:return this.runEffects(M)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const Qe=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Ye=t=>t?.map(e=>typeof e=="string"?Qe(e):e),Ze=(t,...e)=>t.flatMap((s,i)=>[s,e[i]||""]).join(""),Je=Ze,Xe=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function et(t){class e extends ae{frag;renderResult;constructor(n,r,a){super(n,a||r),this.frag=r}commit(n){this.renderResult=t(n,this.frag)}}function s(i,n,r){const a=(r||n||{}).baseElement||HTMLElement,{observedAttributes:h=[],useShadowDOM:u=!0,shadowRootInit:p={},styleSheets:g}=r||n||{},l=Ye(i.styleSheets||g);class o extends a{_scheduler;static get observedAttributes(){return i.observedAttributes||h||[]}constructor(){if(super(),u===!1)this._scheduler=new e(i,this);else{const f=this.attachShadow({mode:"open",...p});l&&(f.adoptedStyleSheets=l),this._scheduler=new e(i,f,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(f,_,v){if(_===v)return;let b=v===""?!0:v;Reflect.set(this,Xe(f),b)}}function c(d){let f=d,_=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return f},set(v){_&&f===v||(_=!0,f=v,this._scheduler&&this._scheduler.update())}})}const m=new Proxy(a.prototype,{getPrototypeOf(d){return d},set(d,f,_,v){let b;return f in d?(b=Object.getOwnPropertyDescriptor(d,f),b&&b.set?(b.set.call(v,_),!0):(Reflect.set(d,f,_,v),!0)):(typeof f=="symbol"||f[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:_}:b=c(_),Object.defineProperty(v,f,b),b.set&&b.set.call(v,_),!0)}});return Object.setPrototypeOf(o.prototype,m),o}return s}class T{id;state;constructor(e,s){this.id=e,this.state=s}}function tt(t,...e){let s=je(),i=q[W],n=i.get(s);return n||(n=new t(s,q,...e),i.set(s,n)),n.update(...e)}function R(t){return tt.bind(null,t)}function ke(t){return R(class extends T{callback;lastValues;values;_teardown;constructor(e,s,i,n){super(e,s),t(s,this)}update(e,s){this.callback=e,this.values=s}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,s)=>this.lastValues[s]!==e)}})}function Ae(t,e){t[M].push(e)}const st=ke(Ae),it=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,nt=R(class extends T{Context;value;_ranEffect;_unsubscribe;constructor(t,e,s){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Ae(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};it(this.state.host).dispatchEvent(new CustomEvent(te,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:n}=e;this.value=i?n:t.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function rt(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(te,this)}disconnectedCallback(){this.removeEventListener(te,this)}handleEvent(i){const{detail:n}=i;n.Context===s&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let n of this.listeners)n(i)}get value(){return this._value}},Consumer:t(function({render:i}){const n=nt(s);return i(n)},{useShadowDOM:!1}),defaultValue:e};return s}}const F=R(class extends T{value;values;constructor(t,e,s,i){super(t,e),this.value=s(),this.values=i}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,s)=>this.values[s]!==e)}}),se=(t,e)=>F(()=>t,e);function ot(t,e){t[V].push(e)}ke(ot);const ie=R(class extends T{args;constructor(t,e,s){super(t,e),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});R(class extends T{reducer;currentState;constructor(t,e,s,i,n){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(i):i}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const at=/([A-Z])/gu,Be=R(class extends T{property;eventName;constructor(t,e,s,i){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(at,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updater(i))}update(t,e){return[this.state.host[this.property],this.updater]}resolve(t){const e=this.state.host[this.property],s=typeof t=="function"?t:void 0,i=s?s(e):t;return[e,i,s]}notify(t,e){const s=new CustomEvent(this.eventName,{detail:{value:t,updater:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(s),s}updater(t){const[e,s,i]=this.resolve(t);this.notify(s,i).defaultPrevented||Object.is(e,s)||(this.state.host[this.property]=s)}});function lt(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function $e(t){return F(()=>lt(t),[])}R(class extends T{update(){return this.state.host}});function ct({render:t}){const e=et(t),s=rt(e);return{component:e,createContext:s}}const le={CHILD:2},ce=t=>(...e)=>({_$litDirective$:t,values:e});class Le{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const P=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(e,!1),P(i,e);return!0},G=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},Te=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),ut(e)}};function ht(t){this._$AN!==void 0?(G(this),this._$AM=t,Te(this)):this._$AM=t}function dt(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let r=s;r<i.length;r++)P(i[r],!1),G(i[r]);else i!=null&&(P(i,!1),G(i));else P(this,t)}const ut=t=>{t.type==le.CHILD&&(t._$AP??=dt,t._$AQ??=ht)};class Re extends Le{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),Te(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(P(this,e),G(this))}setValue(e){if(Ne(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:ze}=ct({render:Me});const _e=(t,e,s)=>{const i=new Map;for(let n=e;n<=s;n++)i.set(t[n],n);return i},pt=ce(class extends Le{constructor(t){if(super(t),t.type!==le.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;s===void 0?s=e:e!==void 0&&(i=e);const n=[],r=[];let a=0;for(const h of t)n[a]=i?i(h,a):a,r[a]=s(h,a),a++;return{values:r,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const n=He(t),{values:r,keys:a}=this.dt(e,s,i);if(!Array.isArray(n))return this.ut=a,r;const h=this.ut??=[],u=[];let p,g,l=0,o=n.length-1,c=0,m=r.length-1;for(;l<=o&&c<=m;)if(n[l]===null)l++;else if(n[o]===null)o--;else if(h[l]===a[c])u[c]=z(n[l],r[c]),l++,c++;else if(h[o]===a[m])u[m]=z(n[o],r[m]),o--,m--;else if(h[l]===a[m])u[m]=z(n[l],r[m]),O(t,u[m+1],n[l]),l++,m--;else if(h[o]===a[c])u[c]=z(n[o],r[c]),O(t,n[l],n[o]),o--,c++;else if(p===void 0&&(p=_e(a,c,m),g=_e(h,l,o)),p.has(h[l]))if(p.has(h[o])){const d=g.get(a[c]),f=d!==void 0?n[d]:null;if(f===null){const _=O(t,n[l]);z(_,r[c]),u[c]=_}else u[c]=z(f,r[c]),O(t,n[l],f),n[d]=null;c++}else Z(n[o]),o--;else Z(n[l]),l++;for(;c<=m;){const d=O(t,u[m+1]);z(d,r[c]),u[c++]=d}for(;l<=o;){const d=n[l++];d!==null&&Z(d)}return this.ut=a,Oe(t,u),Ce}});class U extends Event{constructor(e){super(U.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}U.eventName="rangeChanged";class K extends Event{constructor(e){super(K.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}K.eventName="visibilityChanged";class Q extends Event{constructor(){super(Q.eventName,{bubbles:!1})}}Q.eventName="unpinned";class ft{constructor(e){this._element=null;const s=e??window;this._node=s,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class mt extends ft{constructor(e,s){super(s),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,s){const i=typeof e=="number"&&typeof s=="number"?{left:e,top:s}:e;this._scrollTo(i)}scrollBy(e,s){const i=typeof e=="number"&&typeof s=="number"?{left:e,top:s}:e;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,s=null,i=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=s,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:s,left:i}=e;return s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&s===this._destination.top?!1:(this.__destination={top:s,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,s,i){return this._scrollTo(e,s,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:s}=this;let{top:i,left:n}=this._destination;i=Math.min(i||0,this.maxScrollTop),n=Math.min(n||0,this.maxScrollLeft);const r=Math.abs(i-e),a=Math.abs(n-s);r<1&&a<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let we=typeof window<"u"?window.ResizeObserver:void 0;const he=Symbol("virtualizerRef"),D="virtualizer-sizer";let ge;class _t{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const s=e.layout||{};this._layoutInitialized=this._initLayout(s)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new we(()=>this._hostElementSizeChanged()),this._childrenRO=new we(this._childrenSizeChanged.bind(this))}_initHostElement(e){const s=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),s[he]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=yt(this._hostElement,e),this._scrollerController=new mt(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const s=this._hostElement.style;s.display=s.display||"block",s.position=s.position||"relative",s.contain=s.contain||"size layout",this._isScroller&&(s.overflow=s.overflow||"auto",s.minHeight=s.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let s=e.querySelector(`[${D}]`);s||(s=document.createElement("div"),s.setAttribute(D,""),e.appendChild(s)),Object.assign(s.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),s.textContent="&nbsp;",s.setAttribute(D,""),this._sizer=s}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const s=e.type||ge;if(typeof s=="function"&&this._layout instanceof s){const i={...e};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(e){let s,i;if(typeof e.type=="function"){i=e.type;const n={...e};delete n.type,s=n}else s=e;i===void 0&&(ge=i=(await Ve(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new i(n=>this._handleLayoutMessage(n),s),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),s=e-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,a)=>r+a.duration,0);return this._benchmarkStart=null,{timeElapsed:s,virtualizationTime:n}}return null}_measureChildren(){const e={},s=this._children,i=this._measureChildOverride||this._measureChild;for(let n=0;n<s.length;n++){const r=s[n],a=this._first+n;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[a]=i.call(this,r,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:s,height:i}=e.getBoundingClientRect();return Object.assign({width:s,height:i},wt(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:s,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(s||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){e.type==="scroll"?(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",e)}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Q)}get _children(){const e=[];let s=this._hostElement.firstElementChild;for(;s;)s.hasAttribute(D)||e.push(s),s=s.nextElementSibling;return e}_updateView(){const e=this._hostElement,s=this._scrollerController?.element,i=this._layout;if(e&&s&&i){let n,r,a,h;const u=e.getBoundingClientRect();n=0,r=0,a=window.innerHeight,h=window.innerWidth;const p=this._clippingAncestors.map(_=>_.getBoundingClientRect());p.unshift(u);for(const _ of p)n=Math.max(n,_.top),r=Math.max(r,_.left),a=Math.min(a,_.bottom),h=Math.min(h,_.right);const g=s.getBoundingClientRect(),l={left:u.left-g.left,top:u.top-g.top},o={width:s.scrollWidth,height:s.scrollHeight},c=n-u.top+e.scrollTop,m=r-u.left+e.scrollLeft,d=Math.max(0,a-n),f=Math.max(0,h-r);i.viewportSize={width:f,height:d},i.viewportScroll={top:c,left:m},i.totalScrollSize=o,i.offsetWithinScroller=l}}_sizeHostElement(e){const i=e&&e.width!==null?Math.min(82e5,e.width):0,n=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${n}px)`;else{const r=this._hostElement.style;r.minWidth=i?`${i}px`:"100%",r.minHeight=n?`${n}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:s,left:i,width:n,height:r,xOffset:a,yOffset:h},u)=>{const p=this._children[u-this._first];p&&(p.style.position="absolute",p.style.boxSizing="border-box",p.style.transform=`translate(${i}px, ${s}px)`,n!==void 0&&(p.style.width=n+"px"),r!==void 0&&(p.style.height=r+"px"),p.style.left=a===void 0?null:a+"px",p.style.top=h===void 0?null:h+"px")})}async _adjustRange(e){const{_first:s,_last:i,_firstVisible:n,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==s||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==n||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:s}=this._scrollerController,{top:i,left:n}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:s-n})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(s={})=>this._scrollElementIntoView({...s,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const s=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(s,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:s}=this._scrollIntoViewTarget||{};s&&e?.has(s)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new U({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new K({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,s)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=s})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const s of e)this._toBeMeasured.set(s.target,s.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function wt(t){const e=window.getComputedStyle(t);return{marginTop:j(e.marginTop),marginRight:j(e.marginRight),marginBottom:j(e.marginBottom),marginLeft:j(e.marginLeft)}}function j(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function ye(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function gt(t,e=!1){const s=[];let i=e?t:ye(t);for(;i!==null;)s.push(i),i=ye(i);return s}function yt(t,e=!1){let s=!1;return gt(t,e).filter(i=>{if(s)return!1;const n=getComputedStyle(i);return s=n.position==="fixed",n.overflow!=="visible"})}const vt=t=>t,bt=(t,e)=>y`${e}: ${JSON.stringify(t,null,2)}`;class St extends Re{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(s,i)=>bt(s,i+this._first),this._keyFunction=(s,i)=>vt(s,i+this._first),this._items=[],e.type!==le.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const s=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)s.push(this._items[i]);return pt(s,this._keyFunction,this._renderItem)}update(e,[s]){this._setFunctions(s);const i=this._items!==s.items;return this._items=s.items||[],this._virtualizer?this._updateVirtualizerConfig(e,s):this._initialize(e,s),i?Ce:this.render()}async _updateVirtualizerConfig(e,s){if(!await this._virtualizer.updateLayoutConfig(s.layout||{})){const n=e.parentNode;this._makeVirtualizer(n,s)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:s,keyFunction:i}=e;s&&(this._renderItem=(n,r)=>s(n,r+this._first)),i&&(this._keyFunction=(n,r)=>i(n,r+this._first))}_makeVirtualizer(e,s){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:n,items:r}=s;this._virtualizer=new _t({hostElement:e,layout:i,scroller:n}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,s){const i=e.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",n=>{this._first=n.first,this._last=n.last,this.setValue(this.render())}),this._makeVirtualizer(i,s))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Ct=ce(St),X=new WeakMap,xt=ce(class extends Re{render(t){return N}update(t,[e]){const s=e!==this.G;return s&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),N}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=X.get(e);s===void 0&&(s=new WeakMap,X.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?X.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Et=t=>String(t.id),kt=t=>String(t.label??t.name??""),At=t=>t.children,Bt=(t,e,{getId:s=Et,getChildren:i=At,hasChildren:n}={})=>{const r=[],a=(h,u,p)=>{const g=h.length;h.forEach((l,o)=>{const c=s(l),m=i(l),d=n?.(l)??(m?.length??0)>0,f=d&&e.has(c);r.push({node:l,id:c,level:u,posinset:o+1,setsize:g,parentId:p,hasChildren:d,expanded:f}),f&&a(m??[],u+1,c)})};return t?.length&&a(t,1),r},$t=(t,e,s)=>{const i=t[e];if(!i)return t.length>0?{type:"focus",index:0}:void 0;switch(s){case"ArrowDown":return e<t.length-1?{type:"focus",index:e+1}:void 0;case"ArrowUp":return e>0?{type:"focus",index:e-1}:void 0;case"Home":return e>0?{type:"focus",index:0}:void 0;case"End":return e<t.length-1?{type:"focus",index:t.length-1}:void 0;case"ArrowRight":return i.hasChildren?i.expanded?t[e+1]?.parentId===i.id?{type:"focus",index:e+1}:void 0:{type:"expand",id:i.id}:void 0;case"ArrowLeft":{if(i.expanded)return{type:"collapse",id:i.id};if(i.parentId==null)return;const n=t.findLastIndex((r,a)=>a<e&&r.id===i.parentId);return n>=0?{type:"focus",index:n}:void 0}default:return}},Lt=(t,e,s=!t.includes(e))=>{const i=t.includes(e);return s===i?[...t]:s?[...t,e]:t.filter(n=>n!==e)},ve=t=>t.stopPropagation(),Tt=({label:t,renderIcon:e,getLabel:s=kt},{rows:i,selected:n,tabStopId:r,scrollerRef:a,toggle:h,select:u,activate:p,onKeyDown:g})=>{const l=o=>{if(!o)return y``;const c=o.id===n;return y`<div
			role="treeitem"
			class="row"
			part="row"
			data-id=${o.id}
			aria-level=${o.level}
			aria-posinset=${o.posinset}
			aria-setsize=${o.setsize}
			aria-expanded=${o.hasChildren?String(o.expanded):N}
			aria-selected=${String(c)}
			tabindex=${o.id===r?0:-1}
			@click=${()=>u(o)}
			@dblclick=${()=>p(o)}
		>
			${Array.from({length:o.level-1},()=>y`<span class="guide" part="guide"></span>`)}
			<span class="content" part="content">
				<span
					class="toggle"
					part="toggle"
					aria-hidden="true"
					@click=${o.hasChildren?m=>{ve(m),h(o.id)}:N}
					@dblclick=${ve}
					>${o.hasChildren?Pe({width:"16",height:"16"}):N}</span
				>${e?y`<span class="icon" part="icon"
							>${e(o.node,{expanded:o.expanded,selected:c,hasChildren:o.hasChildren,level:o.level})}</span
						>`:N}<span class="label" part="label"
					>${s(o.node)}</span
				>
			</span>
		</div>`};return y`<div
		role="tree"
		class="tree"
		part="tree"
		aria-label=${H(t)}
		@keydown=${g}
		${xt(o=>{a.current=o})}
	>
		${Ct({items:i,renderItem:l,keyFunction:(o,c)=>o?.id??c,scroller:!0})}
	</div>`},Rt=Je`
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
`,zt=R(class extends T{values;constructor(t,e,s,i){super(t,e),Object.assign(e.host,s),this.values=i}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,s)=>this.values[s]!==e)}}),be=[],It=t=>`[role='treeitem'][data-id='${CSS.escape(t)}']`,ne=(t,e,s,{focus:i=!0,block:n="nearest"}={})=>{if(!t||(t[he]?.element(e)?.scrollIntoView({block:n}),!i))return;let r=0;const a=()=>{const h=t.querySelector(It(s));if(h){h.focus({preventScroll:!0});return}++r<10&&requestAnimationFrame(a)};a()},Nt=async t=>{await new Promise(requestAnimationFrame);const e=t?.[he];e&&await Promise.race([e.layoutComplete.catch(()=>{}),new Promise(s=>setTimeout(s,500))])},Mt=(t,e,...s)=>s.find(i=>i!=null&&e.has(i))??t[0]?.id,Ht=({items:t,getId:e,getChildren:s,hasChildren:i})=>{const[n,r]=Be("expanded",()=>[]),a=n??be,h=F(()=>new Set(a),[a]),u=F(()=>Bt(t,h,{getId:e,getChildren:s,hasChildren:i}),[t,h,e,s,i]),p=F(()=>new Map(u.map((l,o)=>[l.id,o])),[u]),g=se((l,o)=>r(c=>Lt(c??be,l,o)),[]);return{rows:u,indexOf:p,toggle:g}},Ot=(t,e,s)=>{const i=$e(void 0);return st(()=>{if(t==null||i.current===t)return;const n=e.get(t);n!=null&&(i.current=t,Nt(s.current).then(()=>ne(s.current,n,t,{focus:!1,block:"center"})))},[t,e]),i},Vt=(t,e)=>{if(t.defaultPrevented||t.altKey||t.ctrlKey||t.metaKey)return;const s=e.rows[e.index];if(s&&(t.key==="Enter"||t.key===" ")){t.preventDefault(),(t.key==="Enter"?e.activate:e.select)(s);return}const i=$t(e.rows,e.index,t.key);i&&(t.preventDefault(),i.type==="focus"?e.focus(i.index):e.toggle(i.id,i.type==="expand"))},Ft=(t,e)=>{const[s,i]=Be("selected"),[n,r]=ie(void 0),a=$e(void 0),{rows:h,indexOf:u,toggle:p}=Ht(e),g=Ot(s,u,a),l=Mt(h,u,n,s),o=se(d=>{g.current=d.id,r(d.id),i(d.id)},[]),c=se(d=>{o(d),t.dispatchEvent(new CustomEvent("activate",{detail:{id:d.id,node:d.node},bubbles:!0,composed:!0}))},[]);return zt({focusActiveItem:()=>{const d=u.get(l);d!=null&&ne(a.current,d,l)}},[u,l]),{rows:h,selected:s,tabStopId:l,scrollerRef:a,toggle:p,select:o,activate:c,onKeyDown:d=>Vt(d,{rows:h,index:u.get(l)??-1,select:o,activate:c,toggle:p,focus:f=>{const _=h[f];r(_.id),ne(a.current,f,_.id)}})}},Pt=t=>Tt(t,Ft(t,t));customElements.define("cosmoz-tree-view",ze(Pt,{styleSheets:[Rt],observedAttributes:["size","label","selected"]}));const Ie=[{id:"root",label:"Root",children:[{id:"ica",label:"Client ICA",children:[{id:"ica.north",label:"Region North",children:[{id:"ica.north.lulea",label:"Luleå"},{id:"ica.north.umea",label:"Umeå"},{id:"ica.north.kiruna",label:"Kiruna"}]},{id:"ica.south",label:"Region South",children:[{id:"ica.south.malmo",label:"Malmö"},{id:"ica.south.lund",label:"Lund"}]},{id:"ica.hq",label:"Head office"}]},{id:"rexel",label:"Client Rexel",children:[{id:"rexel.se",label:"Sweden"},{id:"rexel.no",label:"Norway"}]},{id:"food",label:"Food Market"},{id:"demo",label:"Demo structure",children:[]}]}],Dt=t=>[{id:"wide",label:`Wide node (${t.toLocaleString()} children)`,children:Array.from({length:t},(e,s)=>({id:`wide.${s}`,label:`Store ${String(s+1).padStart(6,"0")}`,children:s%1e3===0?[{id:`wide.${s}.a`,label:"Department A"},{id:`wide.${s}.b`,label:"Department B"}]:void 0}))}],jt=[{pathLocator:"1",name:"C:",children:{2:{pathLocator:"1.2",name:"Windows",children:{3:{pathLocator:"1.2.3",name:"System"},4:{pathLocator:"1.2.4",name:"Fonts"}}},5:{pathLocator:"1.5",name:"Users",children:{6:{pathLocator:"1.5.6",name:"John"}}}}},{pathLocator:"7",name:"D:"}],{expect:w,fn:Se,waitFor:I}=__STORYBOOK_MODULE_TEST__,Wt=(t,{hasChildren:e})=>(e?De:Fe)({width:"16",height:"16"}),Zt={title:"CosmozTreeView",component:"cosmoz-tree-view",tags:["autodocs"],argTypes:{size:{control:"inline-radio",options:["sm","md"]},icons:{control:"boolean"}},args:{size:"sm",items:Ie,expanded:["root"],icons:!1,onSelected:Se(),onActivate:Se()},render:t=>y`<cosmoz-tree-view
            style="height: 360px; width: 320px"
            label="Organisation"
            size=${t.size}
            .items=${t.items}
            .expanded=${t.expanded}
            .selected=${t.selected}
            .renderIcon=${t.icons?Wt:void 0}
            @selected-changed=${e=>t.onSelected(e.detail.value)}
            @activate=${e=>t.onActivate(e.detail.id)}
        ></cosmoz-tree-view>`},Y=t=>t.getAllByShadowRole("treeitem"),S=(t,e)=>t.getByShadowText(e).closest('[role="treeitem"]'),ee=t=>!!t?.matches(":focus"),C={play:async({canvas:t,step:e,userEvent:s,args:i})=>{await e("Shows the root and its children",async()=>{await t.findByShadowText("Client ICA"),w(Y(t)).toHaveLength(5)}),await e("Clicking the chevron expands without selecting",async()=>{const n=S(t,"Client ICA");await s.click(n.querySelector(".toggle")),await t.findByShadowText("Region North"),w(n.getAttribute("aria-expanded")).toBe("true"),w(n.getAttribute("aria-selected")).toBe("false"),w(i.onSelected).not.toHaveBeenCalled()}),await e("Clicking a row selects it",async()=>{await s.click(t.getByShadowText("Region South")),w(i.onSelected).toHaveBeenCalledWith("ica.south"),w(S(t,"Region South").getAttribute("aria-selected")).toBe("true")}),await e("Double-click activates",async()=>{await s.dblClick(t.getByShadowText("Head office")),w(i.onActivate).toHaveBeenCalledWith("ica.hq")})}},x={args:{selected:"ica"},play:async({canvas:t,step:e,userEvent:s,args:i})=>{const n=await I(()=>S(t,"Client ICA"));await e("The selected row holds the tab stop",async()=>{w(n.tabIndex).toBe(0),n.focus()}),await e("ArrowRight expands, then moves into the children",async()=>{await s.keyboard("{ArrowRight}"),await t.findByShadowText("Region North"),await s.keyboard("{ArrowRight}"),await I(()=>w(ee(S(t,"Region North"))).toBe(!0))}),await e("ArrowDown / ArrowLeft move and go back to the parent",async()=>{await s.keyboard("{ArrowDown}"),await I(()=>w(ee(S(t,"Region South"))).toBe(!0)),await s.keyboard("{ArrowLeft}"),await I(()=>w(ee(S(t,"Client ICA"))).toBe(!0))}),await e("ArrowLeft on an open node collapses it",async()=>{await s.keyboard("{ArrowLeft}"),await I(()=>w(t.queryByShadowText("Region North")).toBeNull())}),await e("Space selects, Enter activates",async()=>{await s.keyboard("{ArrowDown} "),w(i.onSelected).toHaveBeenLastCalledWith("rexel"),await s.keyboard("{Enter}"),w(i.onActivate).toHaveBeenCalledWith("rexel")})}},E={args:{icons:!0,expanded:["root","ica","ica.north"],selected:"ica.north.umea"}},k={args:{size:"md",icons:!0,expanded:["root","ica"]}},qt=Dt(1e5),A={args:{items:qt,expanded:["wide"],selected:"wide.50000"},play:async({canvas:t,step:e})=>{await e("Renders only the rows in view, centred on the selection",async()=>{await t.findByShadowText("Store 050001"),w(Y(t).length).toBeLessThan(100)})}};customElements.define("controlled-tree-demo",ze(()=>{const[t,e]=ie("ica.hq"),[s,i]=ie(["root","ica"]);return y`
            <p style="font: var(--cz-text-sm) var(--cz-font-body)">
                selected: <b data-testid="selected">${t??"—"}</b> · expanded:
                <b data-testid="expanded">${s.join(", ")}</b>
            </p>
            <button @click=${()=>i([])}>Collapse all</button>
            <button @click=${()=>e("rexel.no")}>Select Norway</button>
            <cosmoz-tree-view
                style="height: 300px; width: 320px"
                label="Organisation"
                .items=${Ie}
                .selected=${t}
                .expanded=${s}
                @selected-changed=${n=>{n.preventDefault(),e(n.detail.value)}}
                @expanded-changed=${n=>{n.preventDefault(),i(n.detail.value)}}
            ></cosmoz-tree-view>
        `}));const B={render:()=>y`<controlled-tree-demo></controlled-tree-demo>`,play:async({canvas:t,step:e,userEvent:s})=>{await e("The host state drives the tree",async()=>{await t.findByShadowText("Head office"),w(S(t,"Head office").getAttribute("aria-selected")).toBe("true")}),await e("Tree interactions update the host state",async()=>{await s.click(t.getByShadowText("Region North")),await I(()=>w(t.getByShadowTestId("selected").textContent).toBe("ica.north"))}),await e("Host changes are reflected in the tree",async()=>{await s.click(t.getByShadowRole("button",{name:"Collapse all"})),await I(()=>w(Y(t)).toHaveLength(1))})}},Gt=t=>t.pathLocator,Ut=t=>t.name,Kt=t=>t.children?Object.values(t.children):void 0,$={render:()=>y`<cosmoz-tree-view
            style="height: 240px; width: 320px"
            label="Files"
            .items=${jt}
            .getId=${Gt}
            .getLabel=${Ut}
            .getChildren=${Kt}
            .expanded=${["1","1.2"]}
            .selected=${"1.2.3"}
        ></cosmoz-tree-view>`,play:async({canvas:t,step:e})=>{await e("Reads ids, labels and children through the accessors",async()=>{await t.findByShadowText("System"),w(S(t,"System").dataset.id).toBe("1.2.3"),w(Y(t)).toHaveLength(6)})}},L={args:{items:[]},play:async({canvas:t,step:e})=>{await e("Renders an empty tree without rows",async()=>{await t.findByShadowRole("tree"),w(t.queryAllByShadowRole("treeitem")).toHaveLength(0)})}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    icons: true,
    expanded: ['root', 'ica', 'ica.north'],
    selected: 'ica.north.umea'
  }
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    icons: true,
    expanded: ['root', 'ica']
  }
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
  }
}`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};const Jt=["Default","Keyboard","WithIcons","Medium","HundredThousandChildren","Controlled","CustomAccessors","Empty"];C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    icons: true,
    expanded: ['root', 'ica', 'ica.north'],
    selected: 'ica.north.umea'
  }
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    icons: true,
    expanded: ['root', 'ica']
  }
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
  }
}`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};export{B as Controlled,$ as CustomAccessors,C as Default,L as Empty,A as HundredThousandChildren,x as Keyboard,k as Medium,E as WithIcons,Jt as __namedExportsOrder,Zt as default};
