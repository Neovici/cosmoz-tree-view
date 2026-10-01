import{A as N,e as y,w as re,r as Ne,D as Me,M as He,u as z,v as O,h as Z,E as Ce,p as Oe}from"./iframe-RuSriklN.js";import{_ as Ve}from"./preload-helper-PPVm8Dsz.js";const H=t=>t??N;function oe(t,e,s){return t?e(t):s?.(t)}const Fe=({slot:t,title:e,className:s,width:n="24",height:i="24",styles:r}={})=>y`
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
    width=${n}
    height=${i}
    style=${H(r)}
  >
    ${oe(e,()=>re`<title>${e}</title>`)}
    <path
      d="M7.5 11H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 11.76 3 12.04 3 12.6V21m13.5-10h2.9c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 11.76 21 12.04 21 12.6V21m-4.5 0V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.98 3 14.42 3 13.3 3h-2.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7.5 4.52 7.5 5.08 7.5 6.2V21M22 21H2m9-14h2m-2 4h2m-2 4h2"
    />
  </svg>
`,Pe=({slot:t,title:e,className:s,width:n="24",height:i="24",styles:r}={})=>y`
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
    width=${n}
    height=${i}
    style=${H(r)}
  >
    ${oe(e,()=>re`<title>${e}</title>`)}
    <path d="m9 18 6-6-6-6" />
  </svg>
`,De=({slot:t,title:e,className:s,width:n="24",height:i="24",styles:r}={})=>y`
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
    width=${n}
    height=${i}
    style=${H(r)}
  >
    ${oe(e,()=>re`<title>${e}</title>`)}
    <path
      d="m13 7-1.116-2.231c-.32-.642-.481-.963-.72-1.198a2 2 0 0 0-.748-.462C10.1 3 9.74 3 9.022 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2V7m0 0h15.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 10.12 22 11.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2V7Z"
    />
  </svg>
`;let q,xe=0;function de(t){q=t}function ue(){q=null,xe=0}function je(){return xe++}const J=Symbol("haunted.phase"),W=Symbol("haunted.hook"),pe=Symbol("haunted.update"),fe=Symbol("haunted.commit"),M=Symbol("haunted.effects"),V=Symbol("haunted.layoutEffects"),te="haunted.context";class We{update;host;virtual;[W];[M];[V];constructor(e,s){this.update=e,this.host=s,this[W]=new Map,this[M]=[],this[V]=[]}run(e){de(this);let s=e();return ue(),s}_runEffects(e){let s=this[e];de(this);for(let n of s)n.call(this);ue()}runEffects(){this._runEffects(M)}runLayoutEffects(){this._runEffects(V)}teardown(){this[W].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class qe extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Ge=100,Ue=Promise.resolve().then.bind(Promise.resolve());function Ee(){let t=[],e;function s(){e=null;let n=t;t=[];for(var i=0,r=n.length;i<r;i++)n[i]()}return function(n){t.push(n),e==null&&(e=Ue(s))}}const Ke=Ee(),me=Ee();class ae{renderer;host;state;[J];_updateQueued;_active;_updateCount;_processing;static maxUpdates=Ge;constructor(e,s){this.renderer=e,this.host=s,this.state=new We(this.update.bind(this),s),this[J]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>ae.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new qe(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Ke(()=>{let e=this.handlePhase(pe);me(()=>{this.handlePhase(fe,e),me(()=>{this.handlePhase(M),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[J]=e,e){case fe:this.commit(s),this.runEffects(V);return;case pe:return this.render();case M:return this.runEffects(M)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const Qe=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Ye=t=>t?.map(e=>typeof e=="string"?Qe(e):e),Ze=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Je=Ze,Xe=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function et(t){class e extends ae{frag;renderResult;constructor(i,r,a){super(i,a||r),this.frag=r}commit(i){this.renderResult=t(i,this.frag)}}function s(n,i,r){const a=(r||i||{}).baseElement||HTMLElement,{observedAttributes:c=[],useShadowDOM:u=!0,shadowRootInit:p={},styleSheets:g}=r||i||{},l=Ye(n.styleSheets||g);class o extends a{_scheduler;static get observedAttributes(){return n.observedAttributes||c||[]}constructor(){if(super(),u===!1)this._scheduler=new e(n,this);else{const f=this.attachShadow({mode:"open",...p});l&&(f.adoptedStyleSheets=l),this._scheduler=new e(n,f,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(f,_,v){if(_===v)return;let b=v===""?!0:v;Reflect.set(this,Xe(f),b)}}function d(h){let f=h,_=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return f},set(v){_&&f===v||(_=!0,f=v,this._scheduler&&this._scheduler.update())}})}const m=new Proxy(a.prototype,{getPrototypeOf(h){return h},set(h,f,_,v){let b;return f in h?(b=Object.getOwnPropertyDescriptor(h,f),b&&b.set?(b.set.call(v,_),!0):(Reflect.set(h,f,_,v),!0)):(typeof f=="symbol"||f[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:_}:b=d(_),Object.defineProperty(v,f,b),b.set&&b.set.call(v,_),!0)}});return Object.setPrototypeOf(o.prototype,m),o}return s}class T{id;state;constructor(e,s){this.id=e,this.state=s}}function tt(t,...e){let s=je(),n=q[W],i=n.get(s);return i||(i=new t(s,q,...e),n.set(s,i)),i.update(...e)}function R(t){return tt.bind(null,t)}function ke(t){return R(class extends T{callback;lastValues;values;_teardown;constructor(e,s,n,i){super(e,s),t(s,this)}update(e,s){this.callback=e,this.values=s}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,s)=>this.lastValues[s]!==e)}})}function Ae(t,e){t[M].push(e)}const st=ke(Ae),nt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,it=R(class extends T{Context;value;_ranEffect;_unsubscribe;constructor(t,e,s){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Ae(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};nt(this.state.host).dispatchEvent(new CustomEvent(te,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:i}=e;this.value=n?i:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function rt(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(te,this)}disconnectedCallback(){this.removeEventListener(te,this)}handleEvent(n){const{detail:i}=n;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let i of this.listeners)i(n)}get value(){return this._value}},Consumer:t(function({render:n}){const i=it(s);return n(i)},{useShadowDOM:!1}),defaultValue:e};return s}}const F=R(class extends T{value;values;constructor(t,e,s,n){super(t,e),this.value=s(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,s)=>this.values[s]!==e)}}),se=(t,e)=>F(()=>t,e);function ot(t,e){t[V].push(e)}ke(ot);const ne=R(class extends T{args;constructor(t,e,s){super(t,e),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});R(class extends T{reducer;currentState;constructor(t,e,s,n,i){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const at=/([A-Z])/gu,Be=R(class extends T{property;eventName;constructor(t,e,s,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(at,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updater(n))}update(t,e){return[this.state.host[this.property],this.updater]}resolve(t){const e=this.state.host[this.property],s=typeof t=="function"?t:void 0,n=s?s(e):t;return[e,n,s]}notify(t,e){const s=new CustomEvent(this.eventName,{detail:{value:t,updater:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(s),s}updater(t){const[e,s,n]=this.resolve(t);this.notify(s,n).defaultPrevented||Object.is(e,s)||(this.state.host[this.property]=s)}});function lt(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function $e(t){return F(()=>lt(t),[])}R(class extends T{update(){return this.state.host}});function ct({render:t}){const e=et(t),s=rt(e);return{component:e,createContext:s}}const le={CHILD:2},ce=t=>(...e)=>({_$litDirective$:t,values:e});class Le{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const P=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(e,!1),P(n,e);return!0},G=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},Te=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),ut(e)}};function ht(t){this._$AN!==void 0?(G(this),this._$AM=t,Te(this)):this._$AM=t}function dt(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let r=s;r<n.length;r++)P(n[r],!1),G(n[r]);else n!=null&&(P(n,!1),G(n));else P(this,t)}const ut=t=>{t.type==le.CHILD&&(t._$AP??=dt,t._$AQ??=ht)};class Re extends Le{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Te(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(P(this,e),G(this))}setValue(e){if(Ne(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:ze}=ct({render:Me});const _e=(t,e,s)=>{const n=new Map;for(let i=e;i<=s;i++)n.set(t[i],i);return n},pt=ce(class extends Le{constructor(t){if(super(t),t.type!==le.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let n;s===void 0?s=e:e!==void 0&&(n=e);const i=[],r=[];let a=0;for(const c of t)i[a]=n?n(c,a):a,r[a]=s(c,a),a++;return{values:r,keys:i}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,n]){const i=He(t),{values:r,keys:a}=this.dt(e,s,n);if(!Array.isArray(i))return this.ut=a,r;const c=this.ut??=[],u=[];let p,g,l=0,o=i.length-1,d=0,m=r.length-1;for(;l<=o&&d<=m;)if(i[l]===null)l++;else if(i[o]===null)o--;else if(c[l]===a[d])u[d]=z(i[l],r[d]),l++,d++;else if(c[o]===a[m])u[m]=z(i[o],r[m]),o--,m--;else if(c[l]===a[m])u[m]=z(i[l],r[m]),O(t,u[m+1],i[l]),l++,m--;else if(c[o]===a[d])u[d]=z(i[o],r[d]),O(t,i[l],i[o]),o--,d++;else if(p===void 0&&(p=_e(a,d,m),g=_e(c,l,o)),p.has(c[l]))if(p.has(c[o])){const h=g.get(a[d]),f=h!==void 0?i[h]:null;if(f===null){const _=O(t,i[l]);z(_,r[d]),u[d]=_}else u[d]=z(f,r[d]),O(t,i[l],f),i[h]=null;d++}else Z(i[o]),o--;else Z(i[l]),l++;for(;d<=m;){const h=O(t,u[m+1]);z(h,r[d]),u[d++]=h}for(;l<=o;){const h=i[l++];h!==null&&Z(h)}return this.ut=a,Oe(t,u),Ce}});class U extends Event{constructor(e){super(U.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}U.eventName="rangeChanged";class K extends Event{constructor(e){super(K.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}K.eventName="visibilityChanged";class Q extends Event{constructor(){super(Q.eventName,{bubbles:!1})}}Q.eventName="unpinned";class ft{constructor(e){this._element=null;const s=e??window;this._node=s,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class mt extends ft{constructor(e,s){super(s),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,s){const n=typeof e=="number"&&typeof s=="number"?{left:e,top:s}:e;this._scrollTo(n)}scrollBy(e,s){const n=typeof e=="number"&&typeof s=="number"?{left:e,top:s}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,s=null,n=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=s,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:s,left:n}=e;return s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&s===this._destination.top?!1:(this.__destination={top:s,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,s,n){return this._scrollTo(e,s,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:s}=this;let{top:n,left:i}=this._destination;n=Math.min(n||0,this.maxScrollTop),i=Math.min(i||0,this.maxScrollLeft);const r=Math.abs(n-e),a=Math.abs(i-s);r<1&&a<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let we=typeof window<"u"?window.ResizeObserver:void 0;const he=Symbol("virtualizerRef"),D="virtualizer-sizer";let ge;class _t{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const s=e.layout||{};this._layoutInitialized=this._initLayout(s)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new we(()=>this._hostElementSizeChanged()),this._childrenRO=new we(this._childrenSizeChanged.bind(this))}_initHostElement(e){const s=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),s[he]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=yt(this._hostElement,e),this._scrollerController=new mt(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const s=this._hostElement.style;s.display=s.display||"block",s.position=s.position||"relative",s.contain=s.contain||"size layout",this._isScroller&&(s.overflow=s.overflow||"auto",s.minHeight=s.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let s=e.querySelector(`[${D}]`);s||(s=document.createElement("div"),s.setAttribute(D,""),e.appendChild(s)),Object.assign(s.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),s.textContent="&nbsp;",s.setAttribute(D,""),this._sizer=s}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const s=e.type||ge;if(typeof s=="function"&&this._layout instanceof s){const n={...e};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(e){let s,n;if(typeof e.type=="function"){n=e.type;const i={...e};delete i.type,s=i}else s=e;n===void 0&&(ge=n=(await Ve(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new n(i=>this._handleLayoutMessage(i),s),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),s=e-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,a)=>r+a.duration,0);return this._benchmarkStart=null,{timeElapsed:s,virtualizationTime:i}}return null}_measureChildren(){const e={},s=this._children,n=this._measureChildOverride||this._measureChild;for(let i=0;i<s.length;i++){const r=s[i],a=this._first+i;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[a]=n.call(this,r,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:s,height:n}=e.getBoundingClientRect();return Object.assign({width:s,height:n},wt(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:s,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(s||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){e.type==="scroll"?(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",e)}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Q)}get _children(){const e=[];let s=this._hostElement.firstElementChild;for(;s;)s.hasAttribute(D)||e.push(s),s=s.nextElementSibling;return e}_updateView(){const e=this._hostElement,s=this._scrollerController?.element,n=this._layout;if(e&&s&&n){let i,r,a,c;const u=e.getBoundingClientRect();i=0,r=0,a=window.innerHeight,c=window.innerWidth;const p=this._clippingAncestors.map(_=>_.getBoundingClientRect());p.unshift(u);for(const _ of p)i=Math.max(i,_.top),r=Math.max(r,_.left),a=Math.min(a,_.bottom),c=Math.min(c,_.right);const g=s.getBoundingClientRect(),l={left:u.left-g.left,top:u.top-g.top},o={width:s.scrollWidth,height:s.scrollHeight},d=i-u.top+e.scrollTop,m=r-u.left+e.scrollLeft,h=Math.max(0,a-i),f=Math.max(0,c-r);n.viewportSize={width:f,height:h},n.viewportScroll={top:d,left:m},n.totalScrollSize=o,n.offsetWithinScroller=l}}_sizeHostElement(e){const n=e&&e.width!==null?Math.min(82e5,e.width):0,i=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${i}px)`;else{const r=this._hostElement.style;r.minWidth=n?`${n}px`:"100%",r.minHeight=i?`${i}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:s,left:n,width:i,height:r,xOffset:a,yOffset:c},u)=>{const p=this._children[u-this._first];p&&(p.style.position="absolute",p.style.boxSizing="border-box",p.style.transform=`translate(${n}px, ${s}px)`,i!==void 0&&(p.style.width=i+"px"),r!==void 0&&(p.style.height=r+"px"),p.style.left=a===void 0?null:a+"px",p.style.top=c===void 0?null:c+"px")})}async _adjustRange(e){const{_first:s,_last:n,_firstVisible:i,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==s||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==i||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:s}=this._scrollerController,{top:n,left:i}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:s-i})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(s={})=>this._scrollElementIntoView({...s,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const s=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(s,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:s}=this._scrollIntoViewTarget||{};s&&e?.has(s)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new U({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new K({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,s)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=s})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const s of e)this._toBeMeasured.set(s.target,s.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function wt(t){const e=window.getComputedStyle(t);return{marginTop:j(e.marginTop),marginRight:j(e.marginRight),marginBottom:j(e.marginBottom),marginLeft:j(e.marginLeft)}}function j(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function ye(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function gt(t,e=!1){const s=[];let n=e?t:ye(t);for(;n!==null;)s.push(n),n=ye(n);return s}function yt(t,e=!1){let s=!1;return gt(t,e).filter(n=>{if(s)return!1;const i=getComputedStyle(n);return s=i.position==="fixed",i.overflow!=="visible"})}const vt=t=>t,bt=(t,e)=>y`${e}: ${JSON.stringify(t,null,2)}`;class St extends Re{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(s,n)=>bt(s,n+this._first),this._keyFunction=(s,n)=>vt(s,n+this._first),this._items=[],e.type!==le.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const s=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)s.push(this._items[n]);return pt(s,this._keyFunction,this._renderItem)}update(e,[s]){this._setFunctions(s);const n=this._items!==s.items;return this._items=s.items||[],this._virtualizer?this._updateVirtualizerConfig(e,s):this._initialize(e,s),n?Ce:this.render()}async _updateVirtualizerConfig(e,s){if(!await this._virtualizer.updateLayoutConfig(s.layout||{})){const i=e.parentNode;this._makeVirtualizer(i,s)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:s,keyFunction:n}=e;s&&(this._renderItem=(i,r)=>s(i,r+this._first)),n&&(this._keyFunction=(i,r)=>n(i,r+this._first))}_makeVirtualizer(e,s){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:i,items:r}=s;this._virtualizer=new _t({hostElement:e,layout:n,scroller:i}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,s){const n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",i=>{this._first=i.first,this._last=i.last,this.setValue(this.render())}),this._makeVirtualizer(n,s))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Ct=ce(St),X=new WeakMap,xt=ce(class extends Re{render(t){return N}update(t,[e]){const s=e!==this.G;return s&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),N}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=X.get(e);s===void 0&&(s=new WeakMap,X.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?X.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Et=t=>String(t.id),kt=t=>String(t.label??t.name??""),At=t=>t.children,Bt=(t,e,{getId:s=Et,getChildren:n=At}={})=>{const i=[],r=(a,c,u)=>{const p=a.length;a.forEach((g,l)=>{const o=s(g),d=n(g),m=(d?.length??0)>0,h=m&&e.has(o);i.push({node:g,id:o,level:c,posinset:l+1,setsize:p,parentId:u,hasChildren:m,expanded:h}),h&&r(d,c+1,o)})};return t?.length&&r(t,1),i},$t=(t,e,s)=>{const n=t[e];if(!n)return t.length>0?{type:"focus",index:0}:void 0;switch(s){case"ArrowDown":return e<t.length-1?{type:"focus",index:e+1}:void 0;case"ArrowUp":return e>0?{type:"focus",index:e-1}:void 0;case"Home":return e>0?{type:"focus",index:0}:void 0;case"End":return e<t.length-1?{type:"focus",index:t.length-1}:void 0;case"ArrowRight":return n.hasChildren?n.expanded?{type:"focus",index:e+1}:{type:"expand",id:n.id}:void 0;case"ArrowLeft":{if(n.expanded)return{type:"collapse",id:n.id};if(n.parentId==null)return;const i=t.findLastIndex((r,a)=>a<e&&r.id===n.parentId);return i>=0?{type:"focus",index:i}:void 0}default:return}},Lt=(t,e,s=!t.includes(e))=>{const n=t.includes(e);return s===n?[...t]:s?[...t,e]:t.filter(i=>i!==e)},ve=t=>t.stopPropagation(),Tt=({label:t,renderIcon:e,getLabel:s=kt},{rows:n,selected:i,tabStopId:r,scrollerRef:a,toggle:c,select:u,activate:p,onKeyDown:g})=>{const l=o=>{if(!o)return y``;const d=o.id===i;return y`<div
			role="treeitem"
			class="row"
			part="row"
			data-id=${o.id}
			aria-level=${o.level}
			aria-posinset=${o.posinset}
			aria-setsize=${o.setsize}
			aria-expanded=${o.hasChildren?String(o.expanded):N}
			aria-selected=${String(d)}
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
					@click=${o.hasChildren?m=>{ve(m),c(o.id)}:N}
					@dblclick=${ve}
					>${o.hasChildren?Pe({width:"16",height:"16"}):N}</span
				>${e?y`<span class="icon" part="icon"
							>${e(o.node,{expanded:o.expanded,selected:d,hasChildren:o.hasChildren,level:o.level})}</span
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
		${Ct({items:n,renderItem:l,keyFunction:(o,d)=>o?.id??d,scroller:!0})}
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
`,zt=R(class extends T{values;constructor(t,e,s,n){super(t,e),Object.assign(e.host,s),this.values=n}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,s)=>this.values[s]!==e)}}),be=[],It=t=>`[role='treeitem'][data-id='${CSS.escape(t)}']`,ie=(t,e,s,{focus:n=!0,block:i="nearest"}={})=>{if(!t||(t[he]?.element(e)?.scrollIntoView({block:i}),!n))return;let r=0;const a=()=>{const c=t.querySelector(It(s));if(c){c.focus({preventScroll:!0});return}++r<10&&requestAnimationFrame(a)};a()},Nt=async t=>{await new Promise(requestAnimationFrame);const e=t?.[he];e&&await Promise.race([e.layoutComplete.catch(()=>{}),new Promise(s=>setTimeout(s,500))])},Mt=(t,e,...s)=>s.find(n=>n!=null&&e.has(n))??t[0]?.id,Ht=({items:t,getId:e,getChildren:s})=>{const[n,i]=Be("expanded",()=>[]),r=n??be,a=F(()=>new Set(r),[r]),c=F(()=>Bt(t,a,{getId:e,getChildren:s}),[t,a,e,s]),u=F(()=>new Map(c.map((g,l)=>[g.id,l])),[c]),p=se((g,l)=>i(o=>Lt(o??be,g,l)),[]);return{rows:c,indexOf:u,toggle:p}},Ot=(t,e,s)=>{const n=$e(void 0);return st(()=>{if(t==null||n.current===t)return;const i=e.get(t);i!=null&&(n.current=t,Nt(s.current).then(()=>ie(s.current,i,t,{focus:!1,block:"center"})))},[t,e]),n},Vt=(t,e)=>{if(t.defaultPrevented||t.altKey||t.ctrlKey||t.metaKey)return;const s=e.rows[e.index];if(s&&(t.key==="Enter"||t.key===" ")){t.preventDefault(),(t.key==="Enter"?e.activate:e.select)(s);return}const n=$t(e.rows,e.index,t.key);n&&(t.preventDefault(),n.type==="focus"?e.focus(n.index):e.toggle(n.id,n.type==="expand"))},Ft=(t,e)=>{const[s,n]=Be("selected"),[i,r]=ne(void 0),a=$e(void 0),{rows:c,indexOf:u,toggle:p}=Ht(e),g=Ot(s,u,a),l=Mt(c,u,i,s),o=se(h=>{g.current=h.id,r(h.id),n(h.id)},[]),d=se(h=>{o(h),t.dispatchEvent(new CustomEvent("activate",{detail:{id:h.id,node:h.node},bubbles:!0,composed:!0}))},[]);return zt({focusActiveItem:()=>{const h=u.get(l);h!=null&&ie(a.current,h,l)}},[u,l]),{rows:c,selected:s,tabStopId:l,scrollerRef:a,toggle:p,select:o,activate:d,onKeyDown:h=>Vt(h,{rows:c,index:u.get(l)??-1,select:o,activate:d,toggle:p,focus:f=>{const _=c[f];r(_.id),ie(a.current,f,_.id)}})}},Pt=t=>Tt(t,Ft(t,t));customElements.define("cosmoz-tree-view",ze(Pt,{styleSheets:[Rt],observedAttributes:["size","label","selected"]}));const Ie=[{id:"root",label:"Root",children:[{id:"ica",label:"Client ICA",children:[{id:"ica.north",label:"Region North",children:[{id:"ica.north.lulea",label:"Luleå"},{id:"ica.north.umea",label:"Umeå"},{id:"ica.north.kiruna",label:"Kiruna"}]},{id:"ica.south",label:"Region South",children:[{id:"ica.south.malmo",label:"Malmö"},{id:"ica.south.lund",label:"Lund"}]},{id:"ica.hq",label:"Head office"}]},{id:"rexel",label:"Client Rexel",children:[{id:"rexel.se",label:"Sweden"},{id:"rexel.no",label:"Norway"}]},{id:"food",label:"Food Market"},{id:"demo",label:"Demo structure",children:[]}]}],Dt=t=>[{id:"wide",label:`Wide node (${t.toLocaleString()} children)`,children:Array.from({length:t},(e,s)=>({id:`wide.${s}`,label:`Store ${String(s+1).padStart(6,"0")}`,children:s%1e3===0?[{id:`wide.${s}.a`,label:"Department A"},{id:`wide.${s}.b`,label:"Department B"}]:void 0}))}],jt=[{pathLocator:"1",name:"C:",children:{2:{pathLocator:"1.2",name:"Windows",children:{3:{pathLocator:"1.2.3",name:"System"},4:{pathLocator:"1.2.4",name:"Fonts"}}},5:{pathLocator:"1.5",name:"Users",children:{6:{pathLocator:"1.5.6",name:"John"}}}}},{pathLocator:"7",name:"D:"}],{expect:w,fn:Se,waitFor:I}=__STORYBOOK_MODULE_TEST__,Wt=(t,{hasChildren:e})=>(e?De:Fe)({width:"16",height:"16"}),Zt={title:"CosmozTreeView",component:"cosmoz-tree-view",tags:["autodocs"],argTypes:{size:{control:"inline-radio",options:["sm","md"]},icons:{control:"boolean"}},args:{size:"sm",items:Ie,expanded:["root"],icons:!1,onSelected:Se(),onActivate:Se()},render:t=>y`<cosmoz-tree-view
            style="height: 360px; width: 320px"
            label="Organisation"
            size=${t.size}
            .items=${t.items}
            .expanded=${t.expanded}
            .selected=${t.selected}
            .renderIcon=${t.icons?Wt:void 0}
            @selected-changed=${e=>t.onSelected(e.detail.value)}
            @activate=${e=>t.onActivate(e.detail.id)}
        ></cosmoz-tree-view>`},Y=t=>t.getAllByShadowRole("treeitem"),S=(t,e)=>t.getByShadowText(e).closest('[role="treeitem"]'),ee=t=>!!t?.matches(":focus"),C={play:async({canvas:t,step:e,userEvent:s,args:n})=>{await e("Shows the root and its children",async()=>{await t.findByShadowText("Client ICA"),w(Y(t)).toHaveLength(5)}),await e("Clicking the chevron expands without selecting",async()=>{const i=S(t,"Client ICA");await s.click(i.querySelector(".toggle")),await t.findByShadowText("Region North"),w(i.getAttribute("aria-expanded")).toBe("true"),w(i.getAttribute("aria-selected")).toBe("false"),w(n.onSelected).not.toHaveBeenCalled()}),await e("Clicking a row selects it",async()=>{await s.click(t.getByShadowText("Region South")),w(n.onSelected).toHaveBeenCalledWith("ica.south"),w(S(t,"Region South").getAttribute("aria-selected")).toBe("true")}),await e("Double-click activates",async()=>{await s.dblClick(t.getByShadowText("Head office")),w(n.onActivate).toHaveBeenCalledWith("ica.hq")})}},x={args:{selected:"ica"},play:async({canvas:t,step:e,userEvent:s,args:n})=>{const i=await I(()=>S(t,"Client ICA"));await e("The selected row holds the tab stop",async()=>{w(i.tabIndex).toBe(0),i.focus()}),await e("ArrowRight expands, then moves into the children",async()=>{await s.keyboard("{ArrowRight}"),await t.findByShadowText("Region North"),await s.keyboard("{ArrowRight}"),await I(()=>w(ee(S(t,"Region North"))).toBe(!0))}),await e("ArrowDown / ArrowLeft move and go back to the parent",async()=>{await s.keyboard("{ArrowDown}"),await I(()=>w(ee(S(t,"Region South"))).toBe(!0)),await s.keyboard("{ArrowLeft}"),await I(()=>w(ee(S(t,"Client ICA"))).toBe(!0))}),await e("ArrowLeft on an open node collapses it",async()=>{await s.keyboard("{ArrowLeft}"),await I(()=>w(t.queryByShadowText("Region North")).toBeNull())}),await e("Space selects, Enter activates",async()=>{await s.keyboard("{ArrowDown} "),w(n.onSelected).toHaveBeenLastCalledWith("rexel"),await s.keyboard("{Enter}"),w(n.onActivate).toHaveBeenCalledWith("rexel")})}},E={args:{icons:!0,expanded:["root","ica","ica.north"],selected:"ica.north.umea"}},k={args:{size:"md",icons:!0,expanded:["root","ica"]}},qt=Dt(1e5),A={args:{items:qt,expanded:["wide"],selected:"wide.50000"},play:async({canvas:t,step:e})=>{await e("Renders only the rows in view, centred on the selection",async()=>{await t.findByShadowText("Store 050001"),w(Y(t).length).toBeLessThan(100)})}};customElements.define("controlled-tree-demo",ze(()=>{const[t,e]=ne("ica.hq"),[s,n]=ne(["root","ica"]);return y`
            <p style="font: var(--cz-text-sm) var(--cz-font-body)">
                selected: <b data-testid="selected">${t??"—"}</b> · expanded:
                <b data-testid="expanded">${s.join(", ")}</b>
            </p>
            <button @click=${()=>n([])}>Collapse all</button>
            <button @click=${()=>e("rexel.no")}>Select Norway</button>
            <cosmoz-tree-view
                style="height: 300px; width: 320px"
                label="Organisation"
                .items=${Ie}
                .selected=${t}
                .expanded=${s}
                @selected-changed=${i=>{i.preventDefault(),e(i.detail.value)}}
                @expanded-changed=${i=>{i.preventDefault(),n(i.detail.value)}}
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
