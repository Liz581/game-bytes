import{r as et,R as Zt}from"./index.B52nOzfP.js";import{L as wu,_ as Au,C as Ru,r as Ns,F as Pu,g as Vu,a as Su,b as Cu,c as qt,d as ku,S as Nu,e as Xe,i as xu,f as Du,h as bu}from"./client.5jb56ZPP.js";/* empty css                          */var vo={exports:{}},tr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou=et,Mu=Symbol.for("react.element"),Lu=Symbol.for("react.fragment"),Fu=Object.prototype.hasOwnProperty,ju=Ou.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uu={key:!0,ref:!0,__self:!0,__source:!0};function Eo(r,t,e){var n,s={},o=null,u=null;e!==void 0&&(o=""+e),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(u=t.ref);for(n in t)Fu.call(t,n)&&!Uu.hasOwnProperty(n)&&(s[n]=t[n]);if(r&&r.defaultProps)for(n in t=r.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:Mu,type:r,key:o,ref:u,props:s,_owner:ju.current}}tr.Fragment=Lu;tr.jsx=Eo;tr.jsxs=Eo;vo.exports=tr;var P=vo.exports;const qu=({recipe:r,onClick:t})=>P.jsxs("div",{className:"product-card",role:"article",onClick:t,children:[P.jsx("img",{src:r.image_url||"/placeholder.png",alt:r.name,onError:e=>{const n=e.target;n.src="/placeholder.png"}}),P.jsx("h3",{children:r.name}),P.jsxs("p",{children:["ID: ",r.id]})]},r.id),Bu=({recipes:r,currentPage:t,totalPages:e,setCurrentPage:n,onCardClick:s})=>{const o=()=>{const c=[];for(let h=1;h<=e;h++)c.push(P.jsx("a",{href:"#",onClick:f=>{f.preventDefault(),n(h)},className:t===h?"active":"",children:h},h));return c},u=()=>{let c=t*10;const h=c-10;return c>r.length&&(c=r.length),r.slice(h,c).map((g,w)=>P.jsx(qu,{recipe:g,onClick:()=>s(g)},w))};return P.jsxs("div",{className:"product-list",children:[P.jsx("h2",{children:"Recipes"}),r.length===0?P.jsx("p",{children:"No products found."}):P.jsx("div",{className:"product-grid",children:u()}),P.jsx("div",{className:"pagination",children:o()})]})};var xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var te,To;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,v,I){for(var p=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)p[xt-2]=arguments[xt];return m.prototype[v].apply(y,p)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)y[v]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],v=E.g[2];var I=E.g[3],p=m+(I^_&(v^I))+y[0]+3614090360&4294967295;m=_+(p<<7&4294967295|p>>>25),p=I+(v^m&(_^v))+y[1]+3905402710&4294967295,I=m+(p<<12&4294967295|p>>>20),p=v+(_^I&(m^_))+y[2]+606105819&4294967295,v=I+(p<<17&4294967295|p>>>15),p=_+(m^v&(I^m))+y[3]+3250441966&4294967295,_=v+(p<<22&4294967295|p>>>10),p=m+(I^_&(v^I))+y[4]+4118548399&4294967295,m=_+(p<<7&4294967295|p>>>25),p=I+(v^m&(_^v))+y[5]+1200080426&4294967295,I=m+(p<<12&4294967295|p>>>20),p=v+(_^I&(m^_))+y[6]+2821735955&4294967295,v=I+(p<<17&4294967295|p>>>15),p=_+(m^v&(I^m))+y[7]+4249261313&4294967295,_=v+(p<<22&4294967295|p>>>10),p=m+(I^_&(v^I))+y[8]+1770035416&4294967295,m=_+(p<<7&4294967295|p>>>25),p=I+(v^m&(_^v))+y[9]+2336552879&4294967295,I=m+(p<<12&4294967295|p>>>20),p=v+(_^I&(m^_))+y[10]+4294925233&4294967295,v=I+(p<<17&4294967295|p>>>15),p=_+(m^v&(I^m))+y[11]+2304563134&4294967295,_=v+(p<<22&4294967295|p>>>10),p=m+(I^_&(v^I))+y[12]+1804603682&4294967295,m=_+(p<<7&4294967295|p>>>25),p=I+(v^m&(_^v))+y[13]+4254626195&4294967295,I=m+(p<<12&4294967295|p>>>20),p=v+(_^I&(m^_))+y[14]+2792965006&4294967295,v=I+(p<<17&4294967295|p>>>15),p=_+(m^v&(I^m))+y[15]+1236535329&4294967295,_=v+(p<<22&4294967295|p>>>10),p=m+(v^I&(_^v))+y[1]+4129170786&4294967295,m=_+(p<<5&4294967295|p>>>27),p=I+(_^v&(m^_))+y[6]+3225465664&4294967295,I=m+(p<<9&4294967295|p>>>23),p=v+(m^_&(I^m))+y[11]+643717713&4294967295,v=I+(p<<14&4294967295|p>>>18),p=_+(I^m&(v^I))+y[0]+3921069994&4294967295,_=v+(p<<20&4294967295|p>>>12),p=m+(v^I&(_^v))+y[5]+3593408605&4294967295,m=_+(p<<5&4294967295|p>>>27),p=I+(_^v&(m^_))+y[10]+38016083&4294967295,I=m+(p<<9&4294967295|p>>>23),p=v+(m^_&(I^m))+y[15]+3634488961&4294967295,v=I+(p<<14&4294967295|p>>>18),p=_+(I^m&(v^I))+y[4]+3889429448&4294967295,_=v+(p<<20&4294967295|p>>>12),p=m+(v^I&(_^v))+y[9]+568446438&4294967295,m=_+(p<<5&4294967295|p>>>27),p=I+(_^v&(m^_))+y[14]+3275163606&4294967295,I=m+(p<<9&4294967295|p>>>23),p=v+(m^_&(I^m))+y[3]+4107603335&4294967295,v=I+(p<<14&4294967295|p>>>18),p=_+(I^m&(v^I))+y[8]+1163531501&4294967295,_=v+(p<<20&4294967295|p>>>12),p=m+(v^I&(_^v))+y[13]+2850285829&4294967295,m=_+(p<<5&4294967295|p>>>27),p=I+(_^v&(m^_))+y[2]+4243563512&4294967295,I=m+(p<<9&4294967295|p>>>23),p=v+(m^_&(I^m))+y[7]+1735328473&4294967295,v=I+(p<<14&4294967295|p>>>18),p=_+(I^m&(v^I))+y[12]+2368359562&4294967295,_=v+(p<<20&4294967295|p>>>12),p=m+(_^v^I)+y[5]+4294588738&4294967295,m=_+(p<<4&4294967295|p>>>28),p=I+(m^_^v)+y[8]+2272392833&4294967295,I=m+(p<<11&4294967295|p>>>21),p=v+(I^m^_)+y[11]+1839030562&4294967295,v=I+(p<<16&4294967295|p>>>16),p=_+(v^I^m)+y[14]+4259657740&4294967295,_=v+(p<<23&4294967295|p>>>9),p=m+(_^v^I)+y[1]+2763975236&4294967295,m=_+(p<<4&4294967295|p>>>28),p=I+(m^_^v)+y[4]+1272893353&4294967295,I=m+(p<<11&4294967295|p>>>21),p=v+(I^m^_)+y[7]+4139469664&4294967295,v=I+(p<<16&4294967295|p>>>16),p=_+(v^I^m)+y[10]+3200236656&4294967295,_=v+(p<<23&4294967295|p>>>9),p=m+(_^v^I)+y[13]+681279174&4294967295,m=_+(p<<4&4294967295|p>>>28),p=I+(m^_^v)+y[0]+3936430074&4294967295,I=m+(p<<11&4294967295|p>>>21),p=v+(I^m^_)+y[3]+3572445317&4294967295,v=I+(p<<16&4294967295|p>>>16),p=_+(v^I^m)+y[6]+76029189&4294967295,_=v+(p<<23&4294967295|p>>>9),p=m+(_^v^I)+y[9]+3654602809&4294967295,m=_+(p<<4&4294967295|p>>>28),p=I+(m^_^v)+y[12]+3873151461&4294967295,I=m+(p<<11&4294967295|p>>>21),p=v+(I^m^_)+y[15]+530742520&4294967295,v=I+(p<<16&4294967295|p>>>16),p=_+(v^I^m)+y[2]+3299628645&4294967295,_=v+(p<<23&4294967295|p>>>9),p=m+(v^(_|~I))+y[0]+4096336452&4294967295,m=_+(p<<6&4294967295|p>>>26),p=I+(_^(m|~v))+y[7]+1126891415&4294967295,I=m+(p<<10&4294967295|p>>>22),p=v+(m^(I|~_))+y[14]+2878612391&4294967295,v=I+(p<<15&4294967295|p>>>17),p=_+(I^(v|~m))+y[5]+4237533241&4294967295,_=v+(p<<21&4294967295|p>>>11),p=m+(v^(_|~I))+y[12]+1700485571&4294967295,m=_+(p<<6&4294967295|p>>>26),p=I+(_^(m|~v))+y[3]+2399980690&4294967295,I=m+(p<<10&4294967295|p>>>22),p=v+(m^(I|~_))+y[10]+4293915773&4294967295,v=I+(p<<15&4294967295|p>>>17),p=_+(I^(v|~m))+y[1]+2240044497&4294967295,_=v+(p<<21&4294967295|p>>>11),p=m+(v^(_|~I))+y[8]+1873313359&4294967295,m=_+(p<<6&4294967295|p>>>26),p=I+(_^(m|~v))+y[15]+4264355552&4294967295,I=m+(p<<10&4294967295|p>>>22),p=v+(m^(I|~_))+y[6]+2734768916&4294967295,v=I+(p<<15&4294967295|p>>>17),p=_+(I^(v|~m))+y[13]+1309151649&4294967295,_=v+(p<<21&4294967295|p>>>11),p=m+(v^(_|~I))+y[4]+4149444226&4294967295,m=_+(p<<6&4294967295|p>>>26),p=I+(_^(m|~v))+y[11]+3174756917&4294967295,I=m+(p<<10&4294967295|p>>>22),p=v+(m^(I|~_))+y[2]+718787259&4294967295,v=I+(p<<15&4294967295|p>>>17),p=_+(I^(v|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(v+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+I&4294967295}n.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,y=this.B,v=this.h,I=0;I<m;){if(v==0)for(;I<=_;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<m;)if(y[v++]=E.charCodeAt(I++),v==this.blockSize){s(this,y),v=0;break}}else for(;I<m;)if(y[v++]=E[I++],v==this.blockSize){s(this,y),v=0;break}}this.h=v,this.o+=m},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)E[_++]=this.g[m]>>>y&255;return E};function o(E,m){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function u(E,m){this.h=m;for(var _=[],y=!0,v=E.length-1;0<=v;v--){var I=E[v]|0;y&&I==m||(_[v]=I,y=!1)}this.g=_}var c={};function h(E){return-128<=E&&128>E?o(E,function(m){return new u([m|0],0>m?-1:0)}):new u([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return N(f(-E));for(var m=[],_=1,y=0;E>=_;y++)m[y]=E/_|0,_*=4294967296;return new u(m,0)}function g(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return N(g(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=w,v=0;v<E.length;v+=8){var I=Math.min(8,E.length-v),p=parseInt(E.substring(v,v+I),m);8>I?(I=f(Math.pow(m,I)),y=y.j(I).add(f(p))):(y=y.j(_),y=y.add(f(p)))}return y}var w=h(0),R=h(1),C=h(16777216);r=u.prototype,r.m=function(){if(b(this))return-N(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(x(this))return"0";if(b(this))return"-"+N(this).toString(E);for(var m=f(Math.pow(E,6)),_=this,y="";;){var v=it(_,m).g;_=B(_,v.j(m));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=v,x(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function x(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function b(E){return E.h==-1}r.l=function(E){return E=B(this,E),b(E)?-1:x(E)?0:1};function N(E){for(var m=E.g.length,_=[],y=0;y<m;y++)_[y]=~E.g[y];return new u(_,~E.h).add(R)}r.abs=function(){return b(this)?N(this):this},r.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0,v=0;v<=m;v++){var I=y+(this.i(v)&65535)+(E.i(v)&65535),p=(I>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);y=p>>>16,I&=65535,p&=65535,_[v]=p<<16|I}return new u(_,_[_.length-1]&-2147483648?-1:0)};function B(E,m){return E.add(N(m))}r.j=function(E){if(x(this)||x(E))return w;if(b(this))return b(E)?N(this).j(N(E)):N(N(this).j(E));if(b(E))return N(this.j(N(E)));if(0>this.l(C)&&0>E.l(C))return f(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<E.g.length;v++){var I=this.i(y)>>>16,p=this.i(y)&65535,xt=E.i(v)>>>16,Re=E.i(v)&65535;_[2*y+2*v]+=p*Re,F(_,2*y+2*v),_[2*y+2*v+1]+=I*Re,F(_,2*y+2*v+1),_[2*y+2*v+1]+=p*xt,F(_,2*y+2*v+1),_[2*y+2*v+2]+=I*xt,F(_,2*y+2*v+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function F(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function Q(E,m){this.g=E,this.h=m}function it(E,m){if(x(m))throw Error("division by zero");if(x(E))return new Q(w,w);if(b(E))return m=it(N(E),m),new Q(N(m.g),N(m.h));if(b(m))return m=it(E,N(m)),new Q(N(m.g),m.h);if(30<E.g.length){if(b(E)||b(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=m;0>=y.l(E);)_=Nt(_),y=Nt(y);var v=ot(_,1),I=ot(y,1);for(y=ot(y,2),_=ot(_,2);!x(y);){var p=I.add(y);0>=p.l(E)&&(v=v.add(_),I=p),y=ot(y,1),_=ot(_,1)}return m=B(E,v.j(m)),new Q(v,m)}for(v=w;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(_),p=I.j(m);b(p)||0<p.l(E);)_-=y,I=f(_),p=I.j(m);x(I)&&(I=R),v=v.add(I),E=B(E,p)}return new Q(v,E)}r.A=function(E){return it(this,E).h},r.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&E.i(y);return new u(_,this.h&E.h)},r.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|E.i(y);return new u(_,this.h|E.h)},r.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^E.i(y);return new u(_,this.h^E.h)};function Nt(E){for(var m=E.g.length+1,_=[],y=0;y<m;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(_,E.h)}function ot(E,m){var _=m>>5;m%=32;for(var y=E.g.length-_,v=[],I=0;I<y;I++)v[I]=0<m?E.i(I+_)>>>m|E.i(I+_+1)<<32-m:E.i(I+_);return new u(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,To=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=g,te=u}).apply(typeof xs<"u"?xs:typeof self<"u"?self:typeof window<"u"?window:{});var xn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Io,ze,wo,Ln,Br,Ao,Ro,Po;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof xn=="object"&&xn];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function s(i,a){if(a)t:{var l=n;i=i.split(".");for(var d=0;d<i.length-1;d++){var T=i[d];if(!(T in l))break t;l=l[T]}i=i[i.length-1],d=l[i],a=a(d),a!=d&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,d=!1,T={next:function(){if(!d&&l<i.length){var A=l++;return{value:a(A,i[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function g(i,a,l){return i.call.apply(i.bind,arguments)}function w(i,a,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),i.apply(a,T)}}return function(){return i.apply(a,arguments)}}function R(i,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:w,R.apply(null,arguments)}function C(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function x(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,T,A){for(var k=Array(arguments.length-2),W=2;W<arguments.length;W++)k[W-2]=arguments[W];return a.prototype[T].apply(d,k)}}function b(i){const a=i.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=i[d];return l}return[]}function N(i,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const T=i.length||0,A=d.length||0;i.length=T+A;for(let k=0;k<A;k++)i[T+k]=d[k]}else i.push(d)}}class B{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function F(i){return/^[\s\xa0]*$/.test(i)}function Q(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function it(i){return it[" "](i),i}it[" "]=function(){};var Nt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ot(i,a,l){for(const d in i)a.call(l,i[d],d,i)}function E(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function m(i){const a={};for(const l in i)a[l]=i[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let l,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(l in d)i[l]=d[l];for(let A=0;A<_.length;A++)l=_[A],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function v(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function I(i){c.setTimeout(()=>{throw i},0)}function p(){var i=mr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class xt{constructor(){this.h=this.g=null}add(a,l){const d=Re.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Re=new B(()=>new Ba,i=>i.reset());class Ba{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,Ve=!1,mr=new xt,Ni=()=>{const i=c.Promise.resolve(void 0);Pe=()=>{i.then(za)}};var za=()=>{for(var i;i=p();){try{i.h.call(i.g)}catch(l){I(l)}var a=Re;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Ve=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var Ka=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return i}();function Se(i,a){if(dt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Nt){t:{try{it(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ga[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Se.aa.h.call(this)}}x(Se,dt);var Ga={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var fn="closure_listenable_"+(1e6*Math.random()|0),$a=0;function Qa(i,a,l,d,T){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=T,this.key=++$a,this.da=this.fa=!1}function mn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function pn(i){this.src=i,this.g={},this.h=0}pn.prototype.add=function(i,a,l,d,T){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var k=gr(i,a,d,T);return-1<k?(a=i[k],l||(a.fa=!1)):(a=new Qa(a,this.src,A,!!d,T),a.fa=l,i.push(a)),a};function pr(i,a){var l=a.type;if(l in i.g){var d=i.g[l],T=Array.prototype.indexOf.call(d,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(d,T,1),A&&(mn(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function gr(i,a,l,d){for(var T=0;T<i.length;++T){var A=i[T];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==d)return T}return-1}var _r="closure_lm_"+(1e6*Math.random()|0),yr={};function xi(i,a,l,d,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)xi(i,a[A],l,d,T);return null}return l=Oi(l),i&&i[fn]?i.K(a,l,f(d)?!!d.capture:!!d,T):Wa(i,a,l,!1,d,T)}function Wa(i,a,l,d,T,A){if(!a)throw Error("Invalid event type");var k=f(T)?!!T.capture:!!T,W=Er(i);if(W||(i[_r]=W=new pn(i)),l=W.add(a,l,d,k,A),l.proxy)return l;if(d=Ha(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)Ka||(T=k),T===void 0&&(T=!1),i.addEventListener(a.toString(),d,T);else if(i.attachEvent)i.attachEvent(bi(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Ha(){function i(l){return a.call(i.src,i.listener,l)}const a=Xa;return i}function Di(i,a,l,d,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)Di(i,a[A],l,d,T);else d=f(d)?!!d.capture:!!d,l=Oi(l),i&&i[fn]?(i=i.i,a=String(a).toString(),a in i.g&&(A=i.g[a],l=gr(A,l,d,T),-1<l&&(mn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete i.g[a],i.h--)))):i&&(i=Er(i))&&(a=i.g[a.toString()],i=-1,a&&(i=gr(a,l,d,T)),(l=-1<i?a[i]:null)&&vr(l))}function vr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[fn])pr(a.i,i);else{var l=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(l,d,i.capture):a.detachEvent?a.detachEvent(bi(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=Er(a))?(pr(l,i),l.h==0&&(l.src=null,a[_r]=null)):mn(i)}}}function bi(i){return i in yr?yr[i]:yr[i]="on"+i}function Xa(i,a){if(i.da)i=!0;else{a=new Se(a,this);var l=i.listener,d=i.ha||i.src;i.fa&&vr(i),i=l.call(d,a)}return i}function Er(i){return i=i[_r],i instanceof pn?i:null}var Tr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oi(i){return typeof i=="function"?i:(i[Tr]||(i[Tr]=function(a){return i.handleEvent(a)}),i[Tr])}function ft(){Lt.call(this),this.i=new pn(this),this.M=this,this.F=null}x(ft,Lt),ft.prototype[fn]=!0,ft.prototype.removeEventListener=function(i,a,l,d){Di(this,i,a,l,d)};function vt(i,a){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new dt(a,i);else if(a instanceof dt)a.target=a.target||i;else{var T=a;a=new dt(d,i),y(a,T)}if(T=!0,l)for(var A=l.length-1;0<=A;A--){var k=a.g=l[A];T=gn(k,d,!0,a)&&T}if(k=a.g=i,T=gn(k,d,!0,a)&&T,T=gn(k,d,!1,a)&&T,l)for(A=0;A<l.length;A++)k=a.g=l[A],T=gn(k,d,!1,a)&&T}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],d=0;d<l.length;d++)mn(l[d]);delete i.g[a],i.h--}}this.F=null},ft.prototype.K=function(i,a,l,d){return this.i.add(String(i),a,!1,l,d)},ft.prototype.L=function(i,a,l,d){return this.i.add(String(i),a,!0,l,d)};function gn(i,a,l,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var k=a[A];if(k&&!k.da&&k.capture==l){var W=k.listener,at=k.ha||k.src;k.fa&&pr(i.i,k),T=W.call(at,d)!==!1&&T}}return T&&!d.defaultPrevented}function Mi(i,a,l){if(typeof i=="function")l&&(i=R(i,l));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function Li(i){i.g=Mi(()=>{i.g=null,i.i&&(i.i=!1,Li(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class Ya extends Lt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Li(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ce(i){Lt.call(this),this.h=i,this.g={}}x(Ce,Lt);var Fi=[];function ji(i){ot(i.g,function(a,l){this.g.hasOwnProperty(l)&&vr(a)},i),i.g={}}Ce.prototype.N=function(){Ce.aa.N.call(this),ji(this)},Ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ir=c.JSON.stringify,Ja=c.JSON.parse,Za=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function wr(){}wr.prototype.h=null;function Ui(i){return i.h||(i.h=i.i())}function qi(){}var ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ar(){dt.call(this,"d")}x(Ar,dt);function Rr(){dt.call(this,"c")}x(Rr,dt);var Wt={},Bi=null;function _n(){return Bi=Bi||new ft}Wt.La="serverreachability";function zi(i){dt.call(this,Wt.La,i)}x(zi,dt);function Ne(i){const a=_n();vt(a,new zi(a))}Wt.STAT_EVENT="statevent";function Ki(i,a){dt.call(this,Wt.STAT_EVENT,i),this.stat=a}x(Ki,dt);function Et(i){const a=_n();vt(a,new Ki(a,i))}Wt.Ma="timingevent";function Gi(i,a){dt.call(this,Wt.Ma,i),this.size=a}x(Gi,dt);function xe(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function De(){this.g=!0}De.prototype.xa=function(){this.g=!1};function tu(i,a,l,d,T,A){i.info(function(){if(i.g)if(A)for(var k="",W=A.split("&"),at=0;at<W.length;at++){var K=W[at].split("=");if(1<K.length){var mt=K[0];K=K[1];var pt=mt.split("_");k=2<=pt.length&&pt[1]=="type"?k+(mt+"="+K+"&"):k+(mt+"=redacted&")}}else k=null;else k=A;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+a+`
`+l+`
`+k})}function eu(i,a,l,d,T,A,k){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+a+`
`+l+`
`+A+" "+k})}function oe(i,a,l,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+ru(i,l)+(d?" "+d:"")})}function nu(i,a){i.info(function(){return"TIMEOUT: "+a})}De.prototype.info=function(){};function ru(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var k=1;k<T.length;k++)T[k]=""}}}}return Ir(l)}catch{return a}}var yn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$i={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pr;function vn(){}x(vn,wr),vn.prototype.g=function(){return new XMLHttpRequest},vn.prototype.i=function(){return{}},Pr=new vn;function Ft(i,a,l,d){this.j=i,this.i=a,this.l=l,this.R=d||1,this.U=new Ce(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qi}function Qi(){this.i=null,this.g="",this.h=!1}var Wi={},Vr={};function Sr(i,a,l){i.L=1,i.v=wn(Dt(a)),i.m=l,i.P=!0,Hi(i,null)}function Hi(i,a){i.F=Date.now(),En(i),i.A=Dt(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),ls(l.i,"t",d),i.C=0,l=i.j.J,i.h=new Qi,i.g=Vs(i.j,l?a:null,!i.m),0<i.O&&(i.M=new Ya(R(i.Y,i,i.g),i.O)),a=i.U,l=i.g,d=i.ca;var T="readystatechange";Array.isArray(T)||(T&&(Fi[0]=T.toString()),T=Fi);for(var A=0;A<T.length;A++){var k=xi(l,T[A],d||a.handleEvent,!1,a.h||a);if(!k)break;a.g[k.key]=k}a=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Ne(),tu(i.i,i.u,i.A,i.l,i.R,i.m)}Ft.prototype.ca=function(i){i=i.target;const a=this.M;a&&bt(i)==3?a.j():this.Y(i)},Ft.prototype.Y=function(i){try{if(i==this.g)t:{const pt=bt(this.g);var a=this.g.Ba();const le=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||gs(this.g)))){this.J||pt!=4||a==7||(a==8||0>=le?Ne(3):Ne(2)),Cr(this);var l=this.g.Z();this.X=l;e:if(Xi(this)){var d=gs(this.g);i="";var T=d.length,A=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),be(this);var k="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(A&&a==T-1)});d.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=l==200,eu(this.i,this.u,this.A,this.l,this.R,pt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,at=this.g;if((W=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(W)){var K=W;break e}}K=null}if(l=K)oe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kr(this,l);else{this.o=!1,this.s=3,Et(12),Ht(this),be(this);break t}}if(this.P){l=!0;let wt;for(;!this.J&&this.C<k.length;)if(wt=iu(this,k),wt==Vr){pt==4&&(this.s=4,Et(14),l=!1),oe(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==Wi){this.s=4,Et(15),oe(this.i,this.l,k,"[Invalid Chunk]"),l=!1;break}else oe(this.i,this.l,wt,null),kr(this,wt);if(Xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||k.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)oe(this.i,this.l,k,"[Invalid Chunked Response]"),Ht(this),be(this);else if(0<k.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Mr(mt),mt.M=!0,Et(11))}}else oe(this.i,this.l,k,null),kr(this,k);pt==4&&Ht(this),this.o&&!this.J&&(pt==4?ws(this.j,this):(this.o=!1,En(this)))}else Tu(this.g),l==400&&0<k.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),Ht(this),be(this)}}}catch{}finally{}};function Xi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function iu(i,a){var l=i.C,d=a.indexOf(`
`,l);return d==-1?Vr:(l=Number(a.substring(l,d)),isNaN(l)?Wi:(d+=1,d+l>a.length?Vr:(a=a.slice(d,d+l),i.C=d+l,a)))}Ft.prototype.cancel=function(){this.J=!0,Ht(this)};function En(i){i.S=Date.now()+i.I,Yi(i,i.I)}function Yi(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=xe(R(i.ba,i),a)}function Cr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Ft.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(nu(this.i,this.A),this.L!=2&&(Ne(),Et(17)),Ht(this),this.s=2,be(this)):Yi(this,this.S-i)};function be(i){i.j.G==0||i.J||ws(i.j,i)}function Ht(i){Cr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,ji(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function kr(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||Nr(l.h,i))){if(!i.K&&Nr(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Cn(l),Vn(l);else break t;Or(l),Et(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=xe(R(l.Za,l),6e3));if(1>=ts(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Yt(l,11)}else if((i.K||l.g==i)&&Cn(l),!F(a))for(T=l.Da.g.parse(a),a=0;a<T.length;a++){let K=T[a];if(l.T=K[0],K=K[1],l.G==2)if(K[0]=="c"){l.K=K[1],l.ia=K[2];const mt=K[3];mt!=null&&(l.la=mt,l.j.info("VER="+l.la));const pt=K[4];pt!=null&&(l.Aa=pt,l.j.info("SVER="+l.Aa));const le=K[5];le!=null&&typeof le=="number"&&0<le&&(d=1.5*le,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const wt=i.g;if(wt){const Nn=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nn){var A=d.h;A.g||Nn.indexOf("spdy")==-1&&Nn.indexOf("quic")==-1&&Nn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(xr(A,A.h),A.h=null))}if(d.D){const Lr=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Lr&&(d.ya=Lr,H(d.I,d.D,Lr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var k=i;if(d.qa=Ps(d,d.J?d.ia:null,d.W),k.K){es(d.h,k);var W=k,at=d.L;at&&(W.I=at),W.B&&(Cr(W),En(W)),d.g=k}else Ts(d);0<l.i.length&&Sn(l)}else K[0]!="stop"&&K[0]!="close"||Yt(l,7);else l.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Yt(l,7):br(l):K[0]!="noop"&&l.l&&l.l.ta(K),l.v=0)}}Ne(4)}catch{}}var su=class{constructor(i,a){this.g=i,this.map=a}};function Ji(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ts(i){return i.h?1:i.g?i.g.size:0}function Nr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function xr(i,a){i.g?i.g.add(a):i.h=a}function es(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}Ji.prototype.cancel=function(){if(this.i=ns(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ns(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return b(i.i)}function ou(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],l=i.length,d=0;d<l;d++)a.push(i[d]);return a}a=[],l=0;for(d in i)a[l++]=i[d];return a}function au(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const d in i)a[l++]=d;return a}}}function rs(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=au(i),d=ou(i),T=d.length,A=0;A<T;A++)a.call(void 0,d[A],l&&l[A],i)}var is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uu(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),T=null;if(0<=d){var A=i[l].substring(0,d);T=i[l].substring(d+1)}else A=i[l];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Xt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Xt){this.h=i.h,Tn(this,i.j),this.o=i.o,this.g=i.g,In(this,i.s),this.l=i.l;var a=i.i,l=new Le;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),ss(this,l),this.m=i.m}else i&&(a=String(i).match(is))?(this.h=!1,Tn(this,a[1]||"",!0),this.o=Oe(a[2]||""),this.g=Oe(a[3]||"",!0),In(this,a[4]),this.l=Oe(a[5]||"",!0),ss(this,a[6]||"",!0),this.m=Oe(a[7]||"")):(this.h=!1,this.i=new Le(null,this.h))}Xt.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Me(a,os,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Me(a,os,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Me(l,l.charAt(0)=="/"?hu:cu,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Me(l,fu)),i.join("")};function Dt(i){return new Xt(i)}function Tn(i,a,l){i.j=l?Oe(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function In(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function ss(i,a,l){a instanceof Le?(i.i=a,mu(i.i,i.h)):(l||(a=Me(a,du)),i.i=new Le(a,i.h))}function H(i,a,l){i.i.set(a,l)}function wn(i){return H(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Oe(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Me(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,lu),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function lu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var os=/[#\/\?@]/g,cu=/[#\?:]/g,hu=/[#\?]/g,du=/[#\?@]/g,fu=/#/g;function Le(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function jt(i){i.g||(i.g=new Map,i.h=0,i.i&&uu(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=Le.prototype,r.add=function(i,a){jt(this),this.i=null,i=ae(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function as(i,a){jt(i),a=ae(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function us(i,a){return jt(i),a=ae(i,a),i.g.has(a)}r.forEach=function(i,a){jt(this),this.g.forEach(function(l,d){l.forEach(function(T){i.call(a,T,d,this)},this)},this)},r.na=function(){jt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const T=i[d];for(let A=0;A<T.length;A++)l.push(a[d])}return l},r.V=function(i){jt(this);let a=[];if(typeof i=="string")us(this,i)&&(a=a.concat(this.g.get(ae(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},r.set=function(i,a){return jt(this),this.i=null,i=ae(this,i),us(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},r.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function ls(i,a,l){as(i,a),0<l.length&&(i.i=null,i.g.set(ae(i,a),b(l)),i.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const A=encodeURIComponent(String(d)),k=this.V(d);for(d=0;d<k.length;d++){var T=A;k[d]!==""&&(T+="="+encodeURIComponent(String(k[d]))),i.push(T)}}return this.i=i.join("&")};function ae(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function mu(i,a){a&&!i.j&&(jt(i),i.i=null,i.g.forEach(function(l,d){var T=d.toLowerCase();d!=T&&(as(this,d),ls(this,T,l))},i)),i.j=a}function pu(i,a){const l=new De;if(c.Image){const d=new Image;d.onload=C(Ut,l,"TestLoadImage: loaded",!0,a,d),d.onerror=C(Ut,l,"TestLoadImage: error",!1,a,d),d.onabort=C(Ut,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(Ut,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function gu(i,a){const l=new De,d=new AbortController,T=setTimeout(()=>{d.abort(),Ut(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(A=>{clearTimeout(T),A.ok?Ut(l,"TestPingServer: ok",!0,a):Ut(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ut(l,"TestPingServer: error",!1,a)})}function Ut(i,a,l,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(l)}catch{}}function _u(){this.g=new Za}function yu(i,a,l){const d=l||"";try{rs(i,function(T,A){let k=T;f(T)&&(k=Ir(T)),a.push(d+A+"="+encodeURIComponent(k))})}catch(T){throw a.push(d+"type="+encodeURIComponent("_badmap")),T}}function An(i){this.l=i.Ub||null,this.j=i.eb||!1}x(An,wr),An.prototype.g=function(){return new Rn(this.l,this.j)},An.prototype.i=function(i){return function(){return i}}({});function Rn(i,a){ft.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Rn,ft),r=Rn.prototype,r.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,je(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fe(this)),this.readyState=0},r.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cs(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function cs(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}r.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Fe(this):je(this),this.readyState==3&&cs(this)}},r.Ra=function(i){this.g&&(this.response=this.responseText=i,Fe(this))},r.Qa=function(i){this.g&&(this.response=i,Fe(this))},r.ga=function(){this.g&&Fe(this)};function Fe(i){i.readyState=4,i.l=null,i.j=null,i.v=null,je(i)}r.setRequestHeader=function(i,a){this.u.append(i,a)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function je(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function hs(i){let a="";return ot(i,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function Dr(i,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=hs(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):H(i,a,l))}function J(i){ft.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(J,ft);var vu=/^https?$/i,Eu=["POST","PUT"];r=J.prototype,r.Ha=function(i){this.J=i},r.ea=function(i,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pr.g(),this.v=this.o?Ui(this.o):Ui(Pr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(A){ds(this,A);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)l.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())l.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Eu,a,void 0))||d||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,k]of l)this.g.setRequestHeader(A,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ps(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){ds(this,A)}};function ds(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,fs(i),Pn(i)}function fs(i){i.A||(i.A=!0,vt(i,"complete"),vt(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,vt(this,"complete"),vt(this,"abort"),Pn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pn(this,!0)),J.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ms(this):this.bb())},r.bb=function(){ms(this)};function ms(i){if(i.h&&typeof u<"u"&&(!i.v[1]||bt(i)!=4||i.Z()!=2)){if(i.u&&bt(i)==4)Mi(i.Ea,0,i);else if(vt(i,"readystatechange"),bt(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=k===0){var T=String(i.D).match(is)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),d=!vu.test(T?T.toLowerCase():"")}l=d}if(l)vt(i,"complete"),vt(i,"success");else{i.m=6;try{var A=2<bt(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",fs(i)}}finally{Pn(i)}}}}function Pn(i,a){if(i.g){ps(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||vt(i,"ready");try{l.onreadystatechange=d}catch{}}}function ps(i){i.I&&(c.clearTimeout(i.I),i.I=null)}r.isActive=function(){return!!this.g};function bt(i){return i.g?i.g.readyState:0}r.Z=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),Ja(a)}};function gs(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Tu(i){const a={};i=(i.g&&2<=bt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(F(i[d]))continue;var l=v(i[d]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[T]||[];a[T]=A,A.push(l)}E(a,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ue(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function _s(i){this.Aa=0,this.i=[],this.j=new De,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ue("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ue("baseRetryDelayMs",5e3,i),this.cb=Ue("retryDelaySeedMs",1e4,i),this.Wa=Ue("forwardChannelMaxRetries",2,i),this.wa=Ue("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ji(i&&i.concurrentRequestLimit),this.Da=new _u,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=_s.prototype,r.la=8,r.G=1,r.connect=function(i,a,l,d){Et(0),this.W=i,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=Ps(this,null,this.W),Sn(this)};function br(i){if(ys(i),i.G==3){var a=i.U++,l=Dt(i.I);if(H(l,"SID",i.K),H(l,"RID",a),H(l,"TYPE","terminate"),qe(i,l),a=new Ft(i,i.j,a),a.L=2,a.v=wn(Dt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Vs(a.j,null),a.g.ea(a.v)),a.F=Date.now(),En(a)}Rs(i)}function Vn(i){i.g&&(Mr(i),i.g.cancel(),i.g=null)}function ys(i){Vn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Cn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Sn(i){if(!Zi(i.h)&&!i.s){i.s=!0;var a=i.Ga;Pe||Ni(),Ve||(Pe(),Ve=!0),mr.add(a,i),i.B=0}}function Iu(i,a){return ts(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=xe(R(i.Ga,i,a),As(i,i.B)),i.B++,!0)}r.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const T=new Ft(this,this.j,i);let A=this.o;if(this.S&&(A?(A=m(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Es(this,T,a),l=Dt(this.I),H(l,"RID",i),H(l,"CVER",22),this.D&&H(l,"X-HTTP-Session-Id",this.D),qe(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(hs(A)))+"&"+a:this.m&&Dr(l,this.m,A)),xr(this.h,T),this.Ua&&H(l,"TYPE","init"),this.P?(H(l,"$req",a),H(l,"SID","null"),T.T=!0,Sr(T,l,null)):Sr(T,l,a),this.G=2}}else this.G==3&&(i?vs(this,i):this.i.length==0||Zi(this.h)||vs(this))};function vs(i,a){var l;a?l=a.l:l=i.U++;const d=Dt(i.I);H(d,"SID",i.K),H(d,"RID",l),H(d,"AID",i.T),qe(i,d),i.m&&i.o&&Dr(d,i.m,i.o),l=new Ft(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=Es(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),xr(i.h,l),Sr(l,d,a)}function qe(i,a){i.H&&ot(i.H,function(l,d){H(a,d,l)}),i.l&&rs({},function(l,d){H(a,d,l)})}function Es(i,a,l){l=Math.min(i.i.length,l);var d=i.l?R(i.l.Na,i.l,i):null;t:{var T=i.i;let A=-1;for(;;){const k=["count="+l];A==-1?0<l?(A=T[0].g,k.push("ofs="+A)):A=0:k.push("ofs="+A);let W=!0;for(let at=0;at<l;at++){let K=T[at].g;const mt=T[at].map;if(K-=A,0>K)A=Math.max(0,T[at].g-100),W=!1;else try{yu(mt,k,"req"+K+"_")}catch{d&&d(mt)}}if(W){d=k.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,d}function Ts(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;Pe||Ni(),Ve||(Pe(),Ve=!0),mr.add(a,i),i.v=0}}function Or(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=xe(R(i.Fa,i),As(i,i.v)),i.v++,!0)}r.Fa=function(){if(this.u=null,Is(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=xe(R(this.ab,this),i)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Vn(this),Is(this))};function Mr(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Is(i){i.g=new Ft(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Dt(i.qa);H(a,"RID","rpc"),H(a,"SID",i.K),H(a,"AID",i.T),H(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&H(a,"TO",i.ja),H(a,"TYPE","xmlhttp"),qe(i,a),i.m&&i.o&&Dr(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=wn(Dt(a)),l.m=null,l.P=!0,Hi(l,i)}r.Za=function(){this.C!=null&&(this.C=null,Vn(this),Or(this),Et(19))};function Cn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function ws(i,a){var l=null;if(i.g==a){Cn(i),Mr(i),i.g=null;var d=2}else if(Nr(i.h,a))l=a.D,es(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var T=i.B;d=_n(),vt(d,new Gi(d,l)),Sn(i)}else Ts(i);else if(T=a.s,T==3||T==0&&0<a.X||!(d==1&&Iu(i,a)||d==2&&Or(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),T){case 1:Yt(i,5);break;case 4:Yt(i,10);break;case 3:Yt(i,6);break;default:Yt(i,2)}}}function As(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function Yt(i,a){if(i.j.info("Error code "+a),a==2){var l=R(i.fb,i),d=i.Xa;const T=!d;d=new Xt(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Tn(d,"https"),wn(d),T?pu(d.toString(),l):gu(d.toString(),l)}else Et(2);i.G=0,i.l&&i.l.sa(a),Rs(i),ys(i)}r.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Rs(i){if(i.G=0,i.ka=[],i.l){const a=ns(i.h);(a.length!=0||i.i.length!=0)&&(N(i.ka,a),N(i.ka,i.i),i.h.i.length=0,b(i.i),i.i.length=0),i.l.ra()}}function Ps(i,a,l){var d=l instanceof Xt?Dt(l):new Xt(l);if(d.g!="")a&&(d.g=a+"."+d.g),In(d,d.s);else{var T=c.location;d=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new Xt(null);d&&Tn(A,d),a&&(A.g=a),T&&In(A,T),l&&(A.l=l),d=A}return l=i.D,a=i.ya,l&&a&&H(d,l,a),H(d,"VER",i.la),qe(i,d),d}function Vs(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new J(new An({eb:l})):new J(i.pa),a.Ha(i.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ss(){}r=Ss.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function kn(){}kn.prototype.g=function(i,a){return new Tt(i,a)};function Tt(i,a){ft.call(this),this.g=new _s(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!F(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!F(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new ue(this)}x(Tt,ft),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){br(this.g)},Tt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Ir(i),i=l);a.i.push(new su(a.Ya++,i)),a.G==3&&Sn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,br(this.g),delete this.g,Tt.aa.N.call(this)};function Cs(i){Ar.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}x(Cs,Ar);function ks(){Rr.call(this),this.status=1}x(ks,Rr);function ue(i){this.g=i}x(ue,Ss),ue.prototype.ua=function(){vt(this.g,"a")},ue.prototype.ta=function(i){vt(this.g,new Cs(i))},ue.prototype.sa=function(i){vt(this.g,new ks)},ue.prototype.ra=function(){vt(this.g,"b")},kn.prototype.createWebChannel=kn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,Po=function(){return new kn},Ro=function(){return _n()},Ao=Wt,Br={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yn.NO_ERROR=0,yn.TIMEOUT=8,yn.HTTP_ERROR=6,Ln=yn,$i.COMPLETE="complete",wo=$i,qi.EventType=ke,ke.OPEN="a",ke.CLOSE="b",ke.ERROR="c",ke.MESSAGE="d",ft.prototype.listen=ft.prototype.K,ze=qi,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Io=J}).apply(typeof xn<"u"?xn:typeof self<"u"?self:typeof window<"u"?window:{});const Ds="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Te="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new wu("@firebase/firestore");function Be(){return ee.logLevel}function D(r,...t){if(ee.logLevel<=qt.DEBUG){const e=t.map(ni);ee.debug(`Firestore (${Te}): ${r}`,...e)}}function Ot(r,...t){if(ee.logLevel<=qt.ERROR){const e=t.map(ni);ee.error(`Firestore (${Te}): ${r}`,...e)}}function me(r,...t){if(ee.logLevel<=qt.WARN){const e=t.map(ni);ee.warn(`Firestore (${Te}): ${r}`,...e)}}function ni(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(r="Unexpected state"){const t=`FIRESTORE (${Te}) INTERNAL ASSERTION FAILED: `+r;throw Ot(t),new Error(t)}function $(r,t){r||L()}function U(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Pu{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class Ku{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Gu{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){$(this.o===void 0);let n=this.i;const s=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new zt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new zt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?($(typeof n.accessToken=="string"),new Vo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string"),new _t(t)}}class $u{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Qu{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new $u(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){$(this.o===void 0);const n=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?($(typeof e.token=="string"),this.R=e.token,new Wu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Xu(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%t.length))}return n}}function G(r,t){return r<t?-1:r>t?1:0}function pe(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new rt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.timestamp=t}static fromTimestamp(t){return new j(t)}static min(){return new j(new rt(0,0))}static max(){return new j(new rt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(),n===void 0?n=t.length-e:n>t.length-e&&L(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ye.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ye?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends Ye{construct(t,e,n){return new X(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Yu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Ye{construct(t,e,n){return new lt(t,e,n)}static isValidIdentifier(t){return Yu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(n+=c,s++):(o(),s++)}if(o(),u)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}function Ju(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=j.fromTimestamp(n===1e9?new rt(e+1,0):new rt(e,n));return new Gt(s,M.empty(),t)}function Zu(r){return new Gt(r.readTime,r.key,-1)}class Gt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Gt(j.min(),M.empty(),-1)}static max(){return new Gt(j.max(),M.empty(),-1)}}function tl(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:G(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==el)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,n)=>{e(t)})}static reject(t){return new V((e,n)=>{n(t)})}static waitFor(t){return new V((e,n)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},h=>n(h))}),u=!0,o===s&&e()})}static or(t){let e=V.resolve(!1);for(const n of t)e=e.next(s=>s?V.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new V((n,s)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(g=>{u[f]=g,++c,c===o&&n(u)},g=>s(g))}})}static doWhile(t,e){return new V((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function rl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function an(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ri.oe=-1;function er(r){return r==null}function Bn(r){return r===0&&1/r==-1/0}function il(r){return typeof r=="number"&&Number.isInteger(r)&&!Bn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Ie(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Co(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dn(this.root,t,this.comparator,!0)}}class Dn{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??ut.RED,this.left=s??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new ut(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,s,o){return this}insert(t,e,n){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Os(this.data.getIterator())}getIteratorFrom(t){return new Os(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ct(this.comparator);return e.data=t,e}}class Os{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new At([])}unionWith(t){let e=new ct(lt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return pe(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ko("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const sl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(r){if($(!!r),typeof r=="string"){let t=0;const e=sl.exec(r);if($(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Z(r.seconds),nanos:Z(r.nanos)}}function Z(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ne(r){return typeof r=="string"?ht.fromBase64String(r):ht.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function si(r){const t=r.mapValue.fields.__previous_value__;return ii(t)?si(t):t}function Je(r){const t=$t(r.mapValue.fields.__local_write_time__.timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,e,n,s,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class Ze{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ze("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ze&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function re(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ii(r)?4:ul(r)?9007199254740991:al(r)?10:11:L()}function Ct(r,t){if(r===t)return!0;const e=re(r);if(e!==re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Je(r).isEqual(Je(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=$t(s.timestampValue),c=$t(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return ne(s.bytesValue).isEqual(ne(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=Z(s.doubleValue),c=Z(o.doubleValue);return u===c?Bn(u)===Bn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return pe(r.arrayValue.values||[],t.arrayValue.values||[],Ct);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(bs(u)!==bs(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Ct(u[h],c[h])))return!1;return!0}(r,t);default:return L()}}function tn(r,t){return(r.values||[]).find(e=>Ct(e,t))!==void 0}function ge(r,t){if(r===t)return 0;const e=re(r),n=re(t);if(e!==n)return G(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return G(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=Z(o.integerValue||o.doubleValue),h=Z(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return Ms(r.timestampValue,t.timestampValue);case 4:return Ms(Je(r),Je(t));case 5:return G(r.stringValue,t.stringValue);case 6:return function(o,u){const c=ne(o),h=ne(u);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const g=G(c[f],h[f]);if(g!==0)return g}return G(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=G(Z(o.latitude),Z(u.latitude));return c!==0?c:G(Z(o.longitude),Z(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Ls(r.arrayValue,t.arrayValue);case 10:return function(o,u){var c,h,f,g;const w=o.fields||{},R=u.fields||{},C=(c=w.value)===null||c===void 0?void 0:c.arrayValue,x=(h=R.value)===null||h===void 0?void 0:h.arrayValue,b=G(((f=C?.values)===null||f===void 0?void 0:f.length)||0,((g=x?.values)===null||g===void 0?void 0:g.length)||0);return b!==0?b:Ls(C,x)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===bn.mapValue&&u===bn.mapValue)return 0;if(o===bn.mapValue)return 1;if(u===bn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},g=Object.keys(f);h.sort(),g.sort();for(let w=0;w<h.length&&w<g.length;++w){const R=G(h[w],g[w]);if(R!==0)return R;const C=ge(c[h[w]],f[g[w]]);if(C!==0)return C}return G(h.length,g.length)}(r.mapValue,t.mapValue);default:throw L()}}function Ms(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return G(r,t);const e=$t(r),n=$t(t),s=G(e.seconds,n.seconds);return s!==0?s:G(e.nanos,n.nanos)}function Ls(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=ge(e[s],n[s]);if(o)return o}return G(e.length,n.length)}function _e(r){return zr(r)}function zr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=$t(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ne(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=zr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of n)o?o=!1:s+=",",s+=`${u}:${zr(e.fields[u])}`;return s+"}"}(r.mapValue):L()}function Kr(r){return!!r&&"integerValue"in r}function oi(r){return!!r&&"arrayValue"in r}function Fs(r){return!!r&&"nullValue"in r}function js(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Fn(r){return!!r&&"mapValue"in r}function al(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function $e(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Ie(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=$e(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=$e(r.arrayValue.values[e]);return t}return Object.assign({},r)}function ul(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Fn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=$e(e)}setAll(t){let e=lt.emptyPath(),n={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,s),n={},s=[],e=c.popLast()}u?n[c.lastSegment()]=$e(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());Fn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ct(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Fn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ie(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new It($e(this.value))}}function No(r){const t=[];return Ie(r.fields,(e,n)=>{const s=new lt([e]);if(Fn(n)){const o=No(n.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new At(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,n,s,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new yt(t,0,j.min(),j.min(),j.min(),It.empty(),0)}static newFoundDocument(t,e,n,s){return new yt(t,1,e,j.min(),n,s,0)}static newNoDocument(t,e){return new yt(t,2,e,j.min(),j.min(),It.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,j.min(),j.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e){this.position=t,this.inclusive=e}}function Us(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],u=r.position[s];if(o.field.isKeyField()?n=M.comparator(M.fromName(u.referenceValue),e.key):n=ge(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function qs(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ct(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e="asc"){this.field=t,this.dir=e}}function ll(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{}class nt extends xo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new hl(t,e,n):e==="array-contains"?new ml(t,n):e==="in"?new pl(t,n):e==="not-in"?new gl(t,n):e==="array-contains-any"?new _l(t,n):new nt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new dl(t,n):new fl(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ge(e,this.value)):e!==null&&re(this.value)===re(e)&&this.matchesComparison(ge(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends xo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new kt(t,e)}matches(t){return Do(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Do(r){return r.op==="and"}function bo(r){return cl(r)&&Do(r)}function cl(r){for(const t of r.filters)if(t instanceof kt)return!1;return!0}function Gr(r){if(r instanceof nt)return r.field.canonicalString()+r.op.toString()+_e(r.value);if(bo(r))return r.filters.map(t=>Gr(t)).join(",");{const t=r.filters.map(e=>Gr(e)).join(",");return`${r.op}(${t})`}}function Oo(r,t){return r instanceof nt?function(n,s){return s instanceof nt&&n.op===s.op&&n.field.isEqual(s.field)&&Ct(n.value,s.value)}(r,t):r instanceof kt?function(n,s){return s instanceof kt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,u,c)=>o&&Oo(u,s.filters[c]),!0):!1}(r,t):void L()}function Mo(r){return r instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${_e(e.value)}`}(r):r instanceof kt?function(e){return e.op.toString()+" {"+e.getFilters().map(Mo).join(" ,")+"}"}(r):"Filter"}class hl extends nt{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class dl extends nt{constructor(t,e){super(t,"in",e),this.keys=Lo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class fl extends nt{constructor(t,e){super(t,"not-in",e),this.keys=Lo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Lo(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class ml extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return oi(e)&&tn(e.arrayValue,this.value)}}class pl extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&tn(this.value.arrayValue,e)}}class gl extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!tn(this.value.arrayValue,e)}}class _l extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!oi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>tn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t,e=null,n=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function Bs(r,t=null,e=[],n=[],s=null,o=null,u=null){return new yl(r,t,e,n,s,o,u)}function ai(r){const t=U(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Gr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),er(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>_e(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>_e(n)).join(",")),t.ue=e}return t.ue}function ui(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!ll(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Oo(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!qs(r.startAt,t.startAt)&&qs(r.endAt,t.endAt)}function $r(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e=null,n=[],s=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vl(r,t,e,n,s,o,u,c){return new nr(r,t,e,n,s,o,u,c)}function Fo(r){return new nr(r)}function zs(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function El(r){return r.collectionGroup!==null}function Qe(r){const t=U(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new ct(lt.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Kn(o,n))}),e.has(lt.keyField().canonicalString())||t.ce.push(new Kn(lt.keyField(),n))}return t.ce}function Pt(r){const t=U(r);return t.le||(t.le=Tl(t,Qe(r))),t.le}function Tl(r,t){if(r.limitType==="F")return Bs(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Kn(s.field,o)});const e=r.endAt?new zn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new zn(r.startAt.position,r.startAt.inclusive):null;return Bs(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Qr(r,t,e){return new nr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function rr(r,t){return ui(Pt(r),Pt(t))&&r.limitType===t.limitType}function jo(r){return`${ai(Pt(r))}|lt:${r.limitType}`}function ce(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Mo(s)).join(", ")}]`),er(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>_e(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>_e(s)).join(",")),`Target(${n})`}(Pt(r))}; limitType=${r.limitType})`}function ir(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of Qe(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(u,c,h){const f=Us(u,c,h);return u.inclusive?f<=0:f<0}(n.startAt,Qe(n),s)||n.endAt&&!function(u,c,h){const f=Us(u,c,h);return u.inclusive?f>=0:f>0}(n.endAt,Qe(n),s))}(r,t)}function Il(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Uo(r){return(t,e)=>{let n=!1;for(const s of Qe(r)){const o=wl(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function wl(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?ge(h,f):L()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ie(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return Co(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Y(M.comparator);function Mt(){return Al}const qo=new Y(M.comparator);function Ke(...r){let t=qo;for(const e of r)t=t.insert(e.key,e);return t}function Bo(r){let t=qo;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Jt(){return We()}function zo(){return We()}function We(){return new we(r=>r.toString(),(r,t)=>r.isEqual(t))}const Rl=new Y(M.comparator),Pl=new ct(M.comparator);function q(...r){let t=Pl;for(const e of r)t=t.add(e);return t}const Vl=new ct(G);function Sl(){return Vl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bn(t)?"-0":t}}function Ko(r){return{integerValue:""+r}}function Cl(r,t){return il(t)?Ko(t):li(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this._=void 0}}function kl(r,t,e){return r instanceof Gn?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ii(o)&&(o=si(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof en?$o(r,t):r instanceof nn?Qo(r,t):function(s,o){const u=Go(s,o),c=Ks(u)+Ks(s.Pe);return Kr(u)&&Kr(s.Pe)?Ko(c):li(s.serializer,c)}(r,t)}function Nl(r,t,e){return r instanceof en?$o(r,t):r instanceof nn?Qo(r,t):e}function Go(r,t){return r instanceof $n?function(n){return Kr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Gn extends sr{}class en extends sr{constructor(t){super(),this.elements=t}}function $o(r,t){const e=Wo(t);for(const n of r.elements)e.some(s=>Ct(s,n))||e.push(n);return{arrayValue:{values:e}}}class nn extends sr{constructor(t){super(),this.elements=t}}function Qo(r,t){let e=Wo(t);for(const n of r.elements)e=e.filter(s=>!Ct(s,n));return{arrayValue:{values:e}}}class $n extends sr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ks(r){return Z(r.integerValue||r.doubleValue)}function Wo(r){return oi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function xl(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof en&&s instanceof en||n instanceof nn&&s instanceof nn?pe(n.elements,s.elements,Ct):n instanceof $n&&s instanceof $n?Ct(n.Pe,s.Pe):n instanceof Gn&&s instanceof Gn}(r.transform,t.transform)}class Dl{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class or{}function Ho(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ci(r.key,Vt.none()):new un(r.key,r.data,Vt.none());{const e=r.data,n=It.empty();let s=new ct(lt.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),s=s.add(o)}return new ie(r.key,n,new At(s.toArray()),Vt.none())}}function bl(r,t,e){r instanceof un?function(s,o,u){const c=s.value.clone(),h=$s(s.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof ie?function(s,o,u){if(!jn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=$s(s.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(Xo(s)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function He(r,t,e,n){return r instanceof un?function(o,u,c,h){if(!jn(o.precondition,u))return c;const f=o.value.clone(),g=Qs(o.fieldTransforms,h,u);return f.setAll(g),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof ie?function(o,u,c,h){if(!jn(o.precondition,u))return c;const f=Qs(o.fieldTransforms,h,u),g=u.data;return g.setAll(Xo(o)),g.setAll(f),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(r,t,e,n):function(o,u,c){return jn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function Ol(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),o=Go(n.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(n.field,o))}return e||null}function Gs(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&pe(n,s,(o,u)=>xl(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class un extends or{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ie extends or{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Xo(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function $s(r,t,e){const n=new Map;$(r.length===e.length);for(let s=0;s<e.length;s++){const o=r[s],u=o.transform,c=t.data.field(o.field);n.set(o.field,Nl(u,c,e[s]))}return n}function Qs(r,t,e){const n=new Map;for(const s of r){const o=s.transform,u=e.data.field(s.field);n.set(s.field,kl(o,u,t))}return n}class ci extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ml extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&bl(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=He(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=He(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=zo();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const h=Ho(u,c);h!==null&&n.set(s.key,h),u.isValidDocument()||u.convertToNoDocument(j.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&pe(this.mutations,t.mutations,(e,n)=>Gs(e,n))&&pe(this.baseMutations,t.baseMutations,(e,n)=>Gs(e,n))}}class hi{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){$(t.mutations.length===n.length);let s=function(){return Rl}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,n[u].version);return new hi(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,z;function Ul(r){switch(r){default:return L();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Yo(r){if(r===void 0)return Ot("GRPC error has no .code"),S.UNKNOWN;switch(r){case tt.OK:return S.OK;case tt.CANCELLED:return S.CANCELLED;case tt.UNKNOWN:return S.UNKNOWN;case tt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case tt.INTERNAL:return S.INTERNAL;case tt.UNAVAILABLE:return S.UNAVAILABLE;case tt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case tt.NOT_FOUND:return S.NOT_FOUND;case tt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case tt.ABORTED:return S.ABORTED;case tt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case tt.DATA_LOSS:return S.DATA_LOSS;default:return L()}}(z=tt||(tt={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new te([4294967295,4294967295],0);function Ws(r){const t=ql().encode(r),e=new To;return e.update(t),new Uint8Array(e.digest())}function Hs(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new te([e,n],0),new te([s,o],0)]}class di{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ge(`Invalid padding: ${e}`);if(n<0)throw new Ge(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Ge(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Ge(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=te.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(te.fromNumber(n)));return s.compare(Bl)===1&&(s=new te([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ws(t),[n,s]=Hs(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new di(o,s,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.Ie===0)return;const e=Ws(t),[n,s]=Hs(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ge extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,ln.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ar(j.min(),s,new Y(G),Mt(),q())}}class ln{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ln(n,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class Jo{constructor(t,e){this.targetId=t,this.me=e}}class Zo{constructor(t,e,n=ht.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Xs{constructor(){this.fe=0,this.ge=Js(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=q(),e=q(),n=q();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:L()}}),new ln(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Js()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,$(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class zl{constructor(t){this.Le=t,this.Be=new Map,this.ke=Mt(),this.qe=Ys(),this.Qe=new Y(G)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const o=s.target;if($r(o))if(n===0){const u=new M(o.path);this.Ue(e,u,yt.newNoDocument(u,j.min()))}else $(n===1);else{const u=this.Ye(e);if(u!==n){const c=this.Ze(t),h=c?this.Xe(c,t,u):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let u,c;try{u=ne(n).toUint8Array()}catch(h){if(h instanceof ko)return me("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new di(u,s,o)}catch(h){return me(h instanceof Ge?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const u=this.Le.tt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const c=this.Je(u);if(c){if(o.current&&$r(c.target)){const h=new M(c.target.path);this.ke.get(h)!==null||this.it(u,h)||this.Ue(u,h,yt.newNoDocument(h,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let n=q();this.qe.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new ar(t,e,this.Qe,this.ke,n);return this.ke=Mt(),this.qe=Ys(),this.Qe=new Y(G),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Xs,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ct(G),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Xs),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ys(){return new Y(M.comparator)}function Js(){return new Y(M.comparator)}const Kl={asc:"ASCENDING",desc:"DESCENDING"},Gl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$l={and:"AND",or:"OR"};class Ql{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Wr(r,t){return r.useProto3Json||er(t)?t:{value:t}}function Qn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ta(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Wl(r,t){return Qn(r,t.toTimestamp())}function St(r){return $(!!r),j.fromTimestamp(function(e){const n=$t(e);return new rt(n.seconds,n.nanos)}(r))}function fi(r,t){return Hr(r,t).canonicalString()}function Hr(r,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function ea(r){const t=X.fromString(r);return $(oa(t)),t}function Xr(r,t){return fi(r.databaseId,t.path)}function Fr(r,t){const e=ea(t);if(e.get(1)!==r.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(ra(e))}function na(r,t){return fi(r.databaseId,t)}function Hl(r){const t=ea(r);return t.length===4?X.emptyPath():ra(t)}function Yr(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ra(r){return $(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Zs(r,t,e){return{name:Xr(r,t),fields:e.value.mapValue.fields}}function Xl(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,g){return f.useProto3Json?($(g===void 0||typeof g=="string"),ht.fromBase64String(g||"")):($(g===void 0||g instanceof Buffer||g instanceof Uint8Array),ht.fromUint8Array(g||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const g=f.code===void 0?S.UNKNOWN:Yo(f.code);return new O(g,f.message||"")}(u);e=new Zo(n,s,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Fr(r,n.document.name),o=St(n.document.updateTime),u=n.document.createTime?St(n.document.createTime):j.min(),c=new It({mapValue:{fields:n.document.fields}}),h=yt.newFoundDocument(s,o,u,c),f=n.targetIds||[],g=n.removedTargetIds||[];e=new Un(f,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Fr(r,n.document),o=n.readTime?St(n.readTime):j.min(),u=yt.newNoDocument(s,o),c=n.removedTargetIds||[];e=new Un([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Fr(r,n.document),o=n.removedTargetIds||[];e=new Un([],o,s,null)}else{if(!("filter"in t))return L();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,u=new jl(s,o),c=n.targetId;e=new Jo(c,u)}}return e}function Yl(r,t){let e;if(t instanceof un)e={update:Zs(r,t.key,t.value)};else if(t instanceof ci)e={delete:Xr(r,t.key)};else if(t instanceof ie)e={update:Zs(r,t.key,t.data),updateMask:oc(t.fieldMask)};else{if(!(t instanceof Ml))return L();e={verify:Xr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const c=u.transform;if(c instanceof Gn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof en)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof nn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof $n)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw L()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Wl(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(r,t.precondition)),e}function Jl(r,t){return r&&r.length>0?($(t!==void 0),r.map(e=>function(s,o){let u=s.updateTime?St(s.updateTime):St(o);return u.isEqual(j.min())&&(u=St(o)),new Dl(u,s.transformResults||[])}(e,t))):[]}function Zl(r,t){return{documents:[na(r,t.path)]}}function tc(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=na(r,s);const o=function(f){if(f.length!==0)return sa(kt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(g=>function(R){return{field:he(R.field),direction:rc(R.dir)}}(g))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=Wr(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function ec(r){let t=Hl(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){$(n===1);const g=e.from[0];g.allDescendants?s=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(w){const R=ia(w);return R instanceof kt&&bo(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(R=>function(x){return new Kn(de(x.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(w){let R;return R=typeof w=="object"?w.value:w,er(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(w){const R=!!w.before,C=w.values||[];return new zn(C,R)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const R=!w.before,C=w.values||[];return new zn(C,R)}(e.endAt)),vl(t,s,u,o,c,"F",h,f)}function nc(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ia(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=de(e.unaryFilter.field);return nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=de(e.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=de(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=de(e.unaryFilter.field);return nt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(r):r.fieldFilter!==void 0?function(e){return nt.create(de(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return kt.create(e.compositeFilter.filters.map(n=>ia(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(r):L()}function rc(r){return Kl[r]}function ic(r){return Gl[r]}function sc(r){return $l[r]}function he(r){return{fieldPath:r.canonicalString()}}function de(r){return lt.fromServerFormat(r.fieldPath)}function sa(r){return r instanceof nt?function(e){if(e.op==="=="){if(js(e.value))return{unaryFilter:{field:he(e.field),op:"IS_NAN"}};if(Fs(e.value))return{unaryFilter:{field:he(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(js(e.value))return{unaryFilter:{field:he(e.field),op:"IS_NOT_NAN"}};if(Fs(e.value))return{unaryFilter:{field:he(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:he(e.field),op:ic(e.op),value:e.value}}}(r):r instanceof kt?function(e){const n=e.getFilters().map(s=>sa(s));return n.length===1?n[0]:{compositeFilter:{op:sc(e.op),filters:n}}}(r):L()}function oc(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function oa(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e,n,s,o=j.min(),u=j.min(),c=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Bt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this.ct=t}}function uc(r){const t=ec({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Qr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.un=new cc}addToCollectionParentIndex(t,e){return this.un.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Gt.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Gt.min())}updateCollectionGroup(t,e,n){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class cc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new ct(X.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new ct(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ye(0)}static kn(){return new ye(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this.changes=new we(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?V.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&He(n.mutation,s,At.empty(),rt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=q()){const s=Jt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let u=Ke();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=Jt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,q()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,s){let o=Mt();const u=We(),c=function(){return We()}();return e.forEach((h,f)=>{const g=n.get(f.key);s.has(f.key)&&(g===void 0||g.mutation instanceof ie)?o=o.insert(f.key,f):g!==void 0?(u.set(f.key,g.mutation.getFieldMask()),He(g.mutation,f,g.mutation.getFieldMask(),rt.now())):u.set(f.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,g)=>u.set(f,g)),e.forEach((f,g)=>{var w;return c.set(f,new dc(g,(w=u.get(f))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const n=We();let s=new Y((u,c)=>u-c),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let g=n.get(h)||At.empty();g=c.applyToLocalView(f,g),n.set(h,g);const w=(s.get(c.batchId)||q()).add(h);s=s.insert(c.batchId,w)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,g=h.value,w=zo();g.forEach(R=>{if(!o.has(R)){const C=Ho(e.get(R),n.get(R));C!==null&&w.set(R,C),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return V.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):El(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):V.resolve(Jt());let c=-1,h=o;return u.next(f=>V.forEach(f,(g,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(g)?V.resolve():this.remoteDocumentCache.getEntry(t,g).next(R=>{h=h.insert(g,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,q())).next(g=>({batchId:c,changes:Bo(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let s=Ke();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let u=Ke();return this.indexManager.getCollectionParents(t,o).next(c=>V.forEach(c,h=>{const f=function(w,R){return new nr(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,s).next(g=>{g.forEach((w,R)=>{u=u.insert(w,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(u=>{o.forEach((h,f)=>{const g=f.getKey();u.get(g)===null&&(u=u.insert(g,yt.newInvalidDocument(g)))});let c=Ke();return u.forEach((h,f)=>{const g=o.get(h);g!==void 0&&He(g.mutation,f,At.empty(),rt.now()),ir(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return V.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:St(s.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:uc(s.bundledQuery),readTime:St(s.readTime)}}(e)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.overlays=new Y(M.comparator),this.Ir=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Jt();return V.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.ht(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),V.resolve()}getOverlaysForCollection(t,e,n){const s=Jt(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new Y((f,g)=>f-g);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let g=o.get(f.largestBatchId);g===null&&(g=Jt(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const c=Jt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,g)=>c.set(f,g)),!(c.size()>=s)););return V.resolve(c)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const u=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Fl(e,n));let o=this.Ir.get(e);o===void 0&&(o=q(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.Tr=new ct(st.Er),this.dr=new ct(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new st(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new st(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new M(new X([])),n=new st(e,t),s=new st(e,t+1),o=[];return this.dr.forEachInRange([n,s],u=>{this.Vr(u),o.push(u.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new M(new X([])),n=new st(e,t),s=new st(e,t+1);let o=q();return this.dr.forEachInRange([n,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new st(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class st{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return M.comparator(t.key,e.key)||G(t.wr,e.wr)}static Ar(t,e){return G(t.wr,e.wr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ct(st.Er)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Ll(o,e,n,s);this.mutationQueue.push(u);for(const c of s)this.br=this.br.add(new st(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return V.resolve(u)}lookupMutationBatch(t,e){return V.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.vr(n),o=s<0?0:s;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new st(e,0),s=new st(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,s],u=>{const c=this.Dr(u.wr);o.push(c)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ct(G);return e.forEach(s=>{const o=new st(s,0),u=new st(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],c=>{n=n.add(c.wr)})}),V.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const u=new st(new M(o),0);let c=new ct(G);return this.br.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.wr)),!0)},u),V.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(n=>{const s=this.Dr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){$(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return V.forEach(e.mutations,s=>{const o=new st(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new st(e,0),s=this.br.firstAfterOrEqual(n);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t){this.Mr=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,u=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return V.resolve(n?n.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let n=Mt();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():yt.newInvalidDocument(s))}),V.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=Mt();const u=e.path,c=new M(u.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:g}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||tl(Zu(g),n)<=0||(s.has(g.key)||ir(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,n,s){L()}Or(t,e){return V.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new vc(this)}getSize(t){return V.resolve(this.size)}}class vc extends hc{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(n)}),V.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this.persistence=t,this.Nr=new we(e=>ai(e),ui),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Lr=0,this.Br=new mi,this.targetCount=0,this.kr=ye.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,s)=>e(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),V.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new ye(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Kn(e),V.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.Nr.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),V.waitFor(o).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return V.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),V.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return V.resolve(n)}containsKey(t,e){return V.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ri(0),this.Kr=!1,this.Kr=!0,this.$r=new gc,this.referenceDelegate=t(this),this.Ur=new Ec(this),this.indexManager=new lc,this.remoteDocumentCache=function(s){return new yc(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new ac(e),this.Gr=new mc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new pc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new _c(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){D("MemoryPersistence","Starting transaction:",t);const s=new Ic(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return V.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class Ic extends nl{constructor(t){super(),this.currentSequenceNumber=t}}class pi{constructor(t){this.persistence=t,this.Jr=new mi,this.Yr=null}static Zr(t){return new pi(t)}get Xr(){if(this.Yr)return this.Yr;throw L()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),V.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),V.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,n=>{const s=M.fromPath(n);return this.ei(t,s).next(o=>{o||e.removeEntry(s,j.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return V.or([()=>V.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=s}static Wi(t,e){let n=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new gi(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return xu()?8:rl(Du())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.Yi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Zi(t,e,s,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new wc;return this.Xi(t,e,u).next(c=>{if(o.result=c,this.zi)return this.es(t,e,u,c.size)})}).next(()=>o.result)}es(t,e,n,s){return n.documentReadCount<this.ji?(Be()<=qt.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",ce(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Be()<=qt.DEBUG&&D("QueryEngine","Query:",ce(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(Be()<=qt.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",ce(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pt(e))):V.resolve())}Yi(t,e){if(zs(e))return V.resolve(null);let n=Pt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Qr(e,null,"F"),n=Pt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=q(...o);return this.Ji.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.ts(e,c);return this.ns(e,f,u,h.readTime)?this.Yi(t,Qr(e,null,"F")):this.rs(t,f,e,h)}))})))}Zi(t,e,n,s){return zs(e)||s.isEqual(j.min())?V.resolve(null):this.Ji.getDocuments(t,n).next(o=>{const u=this.ts(e,o);return this.ns(e,u,n,s)?V.resolve(null):(Be()<=qt.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ce(e)),this.rs(t,u,e,Ju(s,-1)).next(c=>c))})}ts(t,e){let n=new ct(Uo(t));return e.forEach((s,o)=>{ir(t,o)&&(n=n.add(o))}),n}ns(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,n){return Be()<=qt.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",ce(e)),this.Ji.getDocumentsMatchingQuery(t,e,Gt.min(),n)}rs(t,e,n,s){return this.Ji.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e,n,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new Y(G),this._s=new we(o=>ai(o),ui),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new fc(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Pc(r,t,e,n){return new Rc(r,t,e,n)}async function aa(r,t){const e=U(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let h=q();for(const f of s){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of o){c.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(n,h).next(f=>({hs:f,removedBatchIds:u,addedBatchIds:c}))})})}function Vc(r,t){const e=U(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,g){const w=f.batch,R=w.keys();let C=V.resolve();return R.forEach(x=>{C=C.next(()=>g.getEntry(h,x)).next(b=>{const N=f.docVersions.get(x);$(N!==null),b.version.compareTo(N)<0&&(w.applyToRemoteDocument(b,f),b.isValidDocument()&&(b.setReadTime(f.commitVersion),g.addEntry(b)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(h,w))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=q();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function ua(r){const t=U(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Sc(r,t){const e=U(r),n=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((g,w)=>{const R=s.get(w);if(!R)return;c.push(e.Ur.removeMatchingKeys(o,g.removedDocuments,w).next(()=>e.Ur.addMatchingKeys(o,g.addedDocuments,w)));let C=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?C=C.withResumeToken(ht.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):g.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(g.resumeToken,n)),s=s.insert(w,C),function(b,N,B){return b.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(R,C,g)&&c.push(e.Ur.updateTargetData(o,C))});let h=Mt(),f=q();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),c.push(Cc(o,u,t.documentUpdates).next(g=>{h=g.Ps,f=g.Is})),!n.isEqual(j.min())){const g=e.Ur.getLastRemoteSnapshotVersion(o).next(w=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(g)}return V.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.os=s,o))}function Cc(r,t,e){let n=q(),s=q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Mt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(j.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):D("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Ps:u,Is:s}})}function kc(r,t){const e=U(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Nc(r,t){const e=U(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Ur.getTargetData(n,t).next(o=>o?(s=o,V.resolve(s)):e.Ur.allocateTargetId(n).next(u=>(s=new Bt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function Jr(r,t,e){const n=U(r),s=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!an(u))throw u;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.os=n.os.remove(t),n._s.delete(s.target)}function to(r,t,e){const n=U(r);let s=j.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,g){const w=U(h),R=w._s.get(g);return R!==void 0?V.resolve(w.os.get(R)):w.Ur.getTargetData(f,g)}(n,u,Pt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>n.ss.getDocumentsMatchingQuery(u,t,e?s:j.min(),e?o:q())).next(c=>(xc(n,Il(t),c),{documents:c,Ts:o})))}function xc(r,t,e){let n=r.us.get(t)||j.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.us.set(t,n)}class eo{constructor(){this.activeTargetIds=Sl()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Dc{constructor(){this.so=new eo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new eo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On=null;function jr(){return On===null?On=function(){return 268435456+Math.round(2147483648*Math.random())}():On++,"0x"+On.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class Lc extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,n,s,o,u){const c=jr(),h=this.xo(e,n.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,u),this.No(e,h,f,s).then(g=>(D("RestConnection",`Received RPC '${e}' ${c}: `,g),g),g=>{throw me("RestConnection",`RPC '${e}' ${c} failed with error: `,g,"url: ",h,"request:",s),g})}Lo(e,n,s,o,u,c){return this.Mo(e,n,s,o,u)}Oo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Te}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}xo(e,n){const s=Oc[e];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,s){const o=jr();return new Promise((u,c)=>{const h=new Io;h.setWithCredentials(!0),h.listenOnce(wo.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ln.NO_ERROR:const g=h.getResponseJson();D(gt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(g)),u(g);break;case Ln.TIMEOUT:D(gt,`RPC '${t}' ${o} timed out`),c(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ln.HTTP_ERROR:const w=h.getStatus();if(D(gt,`RPC '${t}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R?.error;if(C&&C.status&&C.message){const x=function(N){const B=N.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(B)>=0?B:S.UNKNOWN}(C.status);c(new O(x,C.message))}else c(new O(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new O(S.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{D(gt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);D(gt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,n,15)})}Bo(t,e,n){const s=jr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Po(),c=Ro(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const g=o.join("");D(gt,`Creating RPC '${t}' stream ${s}: ${g}`,h);const w=u.createWebChannel(g,h);let R=!1,C=!1;const x=new Mc({Io:N=>{C?D(gt,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(R||(D(gt,`Opening RPC '${t}' stream ${s} transport.`),w.open(),R=!0),D(gt,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},To:()=>w.close()}),b=(N,B,F)=>{N.listen(B,Q=>{try{F(Q)}catch(it){setTimeout(()=>{throw it},0)}})};return b(w,ze.EventType.OPEN,()=>{C||(D(gt,`RPC '${t}' stream ${s} transport opened.`),x.yo())}),b(w,ze.EventType.CLOSE,()=>{C||(C=!0,D(gt,`RPC '${t}' stream ${s} transport closed`),x.So())}),b(w,ze.EventType.ERROR,N=>{C||(C=!0,me(gt,`RPC '${t}' stream ${s} transport errored:`,N),x.So(new O(S.UNAVAILABLE,"The operation could not be completed")))}),b(w,ze.EventType.MESSAGE,N=>{var B;if(!C){const F=N.data[0];$(!!F);const Q=F,it=Q.error||((B=Q[0])===null||B===void 0?void 0:B.error);if(it){D(gt,`RPC '${t}' stream ${s} received error:`,it);const Nt=it.status;let ot=function(_){const y=tt[_];if(y!==void 0)return Yo(y)}(Nt),E=it.message;ot===void 0&&(ot=S.INTERNAL,E="Unknown error status: "+Nt+" with message "+it.message),C=!0,x.So(new O(ot,E)),w.close()}else D(gt,`RPC '${t}' stream ${s} received:`,F),x.bo(F)}}),b(c,Ao.STAT_EVENT,N=>{N.stat===Br.PROXY?D(gt,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Br.NOPROXY&&D(gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function Ur(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(r){return new Ql(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e,n=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-n);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,e,n,s,o,u,c,h){this.ui=t,this.Ho=n,this.Jo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new la(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Ot(e.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===e&&this.P_(n,s)},n=>{t(()=>{const s=new O(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fc extends ca{constructor(t,e,n,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Xl(this.serializer,t),n=function(o){if(!("targetChange"in o))return j.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?j.min():u.readTime?St(u.readTime):j.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Yr(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=$r(h)?{documents:Zl(o,h)}:{query:tc(o,h)._t},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=ta(o,u.resumeToken);const f=Wr(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(j.min())>0){c.readTime=Qn(o,u.snapshotVersion.toTimestamp());const f=Wr(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=nc(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Yr(this.serializer),e.removeTarget=t,this.a_(e)}}class jc extends ca{constructor(t,e,n,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return $(!!t.streamToken),this.lastStreamToken=t.streamToken,$(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){$(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Jl(t.writeResults,t.commitTime),n=St(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Yr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Yl(this.serializer,n))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Mo(t,Hr(e,n),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(S.UNKNOWN,o.toString())})}Lo(t,e,n,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Lo(t,Hr(e,n),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new O(S.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class qc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ot(e),this.D_=!1):D("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(u=>{n.enqueueAndForget(async()=>{se(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=U(h);f.L_.add(4),await cn(f),f.q_.set("Unknown"),f.L_.delete(4),await lr(f)}(this))})}),this.q_=new qc(n,s)}}async function lr(r){if(se(r))for(const t of r.B_)await t(!0)}async function cn(r){for(const t of r.B_)await t(!1)}function ha(r,t){const e=U(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ei(e)?vi(e):Ae(e).r_()&&yi(e,t))}function _i(r,t){const e=U(r),n=Ae(e);e.N_.delete(t),n.r_()&&da(e,t),e.N_.size===0&&(n.r_()?n.o_():se(e)&&e.q_.set("Unknown"))}function yi(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(j.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ae(r).A_(t)}function da(r,t){r.Q_.xe(t),Ae(r).R_(t)}function vi(r){r.Q_=new zl({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),Ae(r).start(),r.q_.v_()}function Ei(r){return se(r)&&!Ae(r).n_()&&r.N_.size>0}function se(r){return U(r).L_.size===0}function fa(r){r.Q_=void 0}async function zc(r){r.q_.set("Online")}async function Kc(r){r.N_.forEach((t,e)=>{yi(r,t)})}async function Gc(r,t){fa(r),Ei(r)?(r.q_.M_(t),vi(r)):r.q_.set("Unknown")}async function $c(r,t,e){if(r.q_.set("Online"),t instanceof Zo&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,u),s.N_.delete(c),s.Q_.removeTarget(c))}(r,t)}catch(n){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Wn(r,n)}else if(t instanceof Un?r.Q_.Ke(t):t instanceof Jo?r.Q_.He(t):r.Q_.We(t),!e.isEqual(j.min()))try{const n=await ua(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.Q_.rt(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.N_.get(f);g&&o.N_.set(f,g.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const g=o.N_.get(h);if(!g)return;o.N_.set(h,g.withResumeToken(ht.EMPTY_BYTE_STRING,g.snapshotVersion)),da(o,h);const w=new Bt(g.target,h,f,g.sequenceNumber);yi(o,w)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){D("RemoteStore","Failed to raise snapshot:",n),await Wn(r,n)}}async function Wn(r,t,e){if(!an(t))throw t;r.L_.add(1),await cn(r),r.q_.set("Offline"),e||(e=()=>ua(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await lr(r)})}function ma(r,t){return t().catch(e=>Wn(r,e,t))}async function cr(r){const t=U(r),e=Qt(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Qc(t);)try{const s=await kc(t.localStore,n);if(s===null){t.O_.length===0&&e.o_();break}n=s.batchId,Wc(t,s)}catch(s){await Wn(t,s)}pa(t)&&ga(t)}function Qc(r){return se(r)&&r.O_.length<10}function Wc(r,t){r.O_.push(t);const e=Qt(r);e.r_()&&e.V_&&e.m_(t.mutations)}function pa(r){return se(r)&&!Qt(r).n_()&&r.O_.length>0}function ga(r){Qt(r).start()}async function Hc(r){Qt(r).p_()}async function Xc(r){const t=Qt(r);for(const e of r.O_)t.m_(e.mutations)}async function Yc(r,t,e){const n=r.O_.shift(),s=hi.from(n,t,e);await ma(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await cr(r)}async function Jc(r,t){t&&Qt(r).V_&&await async function(n,s){if(function(u){return Ul(u)&&u!==S.ABORTED}(s.code)){const o=n.O_.shift();Qt(n).s_(),await ma(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s)),await cr(n)}}(r,t),pa(r)&&ga(r)}async function ro(r,t){const e=U(r);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const n=se(e);e.L_.add(3),await cn(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await lr(e)}async function Zc(r,t){const e=U(r);t?(e.L_.delete(2),await lr(e)):t||(e.L_.add(2),await cn(e),e.q_.set("Unknown"))}function Ae(r){return r.K_||(r.K_=function(e,n,s){const o=U(e);return o.w_(),new Fc(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Eo:zc.bind(null,r),Ro:Kc.bind(null,r),mo:Gc.bind(null,r),d_:$c.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),Ei(r)?vi(r):r.q_.set("Unknown")):(await r.K_.stop(),fa(r))})),r.K_}function Qt(r){return r.U_||(r.U_=function(e,n,s){const o=U(e);return o.w_(),new jc(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Hc.bind(null,r),mo:Jc.bind(null,r),f_:Xc.bind(null,r),g_:Yc.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await cr(r)):(await r.U_.stop(),r.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const u=Date.now()+n,c=new Ti(t,e,u,s,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ii(r,t){if(Ot("AsyncQueue",`${t}: ${r}`),an(r))return new O(S.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=Ke(),this.sortedSet=new Y(this.comparator)}static emptySet(t){return new fe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof fe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new fe;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.W_=new Y(M.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):L():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class ve{constructor(t,e,n,s,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,s,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new ve(t,e,fe.emptySet(e),u,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&rr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class eh{constructor(){this.queries=so(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const s=U(e),o=s.queries;s.queries=so(),o.forEach((u,c)=>{for(const h of c.j_)h.onError(n)})})(this,new O(S.ABORTED,"Firestore shutting down"))}}function so(){return new we(r=>jo(r),rr)}async function nh(r,t){const e=U(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(n=2):(o=new th,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const c=Ii(u,`Initialization of query '${ce(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&wi(e)}async function rh(r,t){const e=U(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const u=o.j_.indexOf(t);u>=0&&(o.j_.splice(u,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function ih(r,t){const e=U(r);let n=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const c of u.j_)c.X_(s)&&(n=!0);u.z_=s}}n&&wi(e)}function sh(r,t,e){const n=U(r),s=n.queries.get(t);if(s)for(const o of s.j_)o.onError(e);n.queries.delete(t)}function wi(r){r.Y_.forEach(t=>{t.next()})}var Zr,oo;(oo=Zr||(Zr={})).ea="default",oo.Cache="cache";class oh{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new ve(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=ve.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Zr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t){this.key=t}}class ya{constructor(t){this.key=t}}class ah{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=q(),this.mutatedKeys=q(),this.Aa=Uo(t),this.Ra=new fe(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new io,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((g,w)=>{const R=s.get(g),C=ir(this.query,w)?w:null,x=!!R&&this.mutatedKeys.has(R.key),b=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let N=!1;R&&C?R.data.isEqual(C.data)?x!==b&&(n.track({type:3,doc:C}),N=!0):this.ga(R,C)||(n.track({type:2,doc:C}),N=!0,(h&&this.Aa(C,h)>0||f&&this.Aa(C,f)<0)&&(c=!0)):!R&&C?(n.track({type:0,doc:C}),N=!0):R&&!C&&(n.track({type:1,doc:R}),N=!0,(h||f)&&(c=!0)),N&&(C?(u=u.add(C),o=b?o.add(g):o.delete(g)):(u=u.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const g=this.query.limitType==="F"?u.last():u.first();u=u.delete(g.key),o=o.delete(g.key),n.track({type:1,doc:g})}return{Ra:u,fa:n,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const u=t.fa.G_();u.sort((g,w)=>function(C,x){const b=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return b(C)-b(x)}(g.type,w.type)||this.Aa(g.doc,w.doc)),this.pa(n),s=s!=null&&s;const c=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,f=h!==this.Ea;return this.Ea=h,u.length!==0||f?{snapshot:new ve(this.query,t.Ra,o,u,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new io,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=q(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new ya(n))}),this.da.forEach(n=>{t.has(n)||e.push(new _a(n))}),e}ba(t){this.Ta=t.Ts,this.da=q();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return ve.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class uh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class lh{constructor(t){this.key=t,this.va=!1}}class ch{constructor(t,e,n,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new we(c=>jo(c),rr),this.Ma=new Map,this.xa=new Set,this.Oa=new Y(M.comparator),this.Na=new Map,this.La=new mi,this.Ba={},this.ka=new Map,this.qa=ye.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function hh(r,t,e=!0){const n=Aa(r);let s;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await va(n,t,e,!0),s}async function dh(r,t){const e=Aa(r);await va(e,t,!0,!1)}async function va(r,t,e,n){const s=await Nc(r.localStore,Pt(t)),o=s.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await fh(r,t,o,u==="current",s.resumeToken)),r.isPrimaryClient&&e&&ha(r.remoteStore,s),c}async function fh(r,t,e,n,s){r.Ka=(w,R,C)=>async function(b,N,B,F){let Q=N.view.ma(B);Q.ns&&(Q=await to(b.localStore,N.query,!1).then(({documents:E})=>N.view.ma(E,Q)));const it=F&&F.targetChanges.get(N.targetId),Nt=F&&F.targetMismatches.get(N.targetId)!=null,ot=N.view.applyChanges(Q,b.isPrimaryClient,it,Nt);return uo(b,N.targetId,ot.wa),ot.snapshot}(r,w,R,C);const o=await to(r.localStore,t,!0),u=new ah(t,o.Ts),c=u.ma(o.documents),h=ln.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),f=u.applyChanges(c,r.isPrimaryClient,h);uo(r,e,f.wa);const g=new uh(t,e,u);return r.Fa.set(t,g),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),f.snapshot}async function mh(r,t,e){const n=U(r),s=n.Fa.get(t),o=n.Ma.get(s.targetId);if(o.length>1)return n.Ma.set(s.targetId,o.filter(u=>!rr(u,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Jr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&_i(n.remoteStore,s.targetId),ti(n,s.targetId)}).catch(on)):(ti(n,s.targetId),await Jr(n.localStore,s.targetId,!0))}async function ph(r,t){const e=U(r),n=e.Fa.get(t),s=e.Ma.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),_i(e.remoteStore,n.targetId))}async function gh(r,t,e){const n=wh(r);try{const s=await function(u,c){const h=U(u),f=rt.now(),g=c.reduce((C,x)=>C.add(x.key),q());let w,R;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let x=Mt(),b=q();return h.cs.getEntries(C,g).next(N=>{x=N,x.forEach((B,F)=>{F.isValidDocument()||(b=b.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,x)).next(N=>{w=N;const B=[];for(const F of c){const Q=Ol(F,w.get(F.key).overlayedDocument);Q!=null&&B.push(new ie(F.key,Q,No(Q.value.mapValue),Vt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,B,c)}).next(N=>{R=N;const B=N.applyToLocalDocumentSet(w,b);return h.documentOverlayCache.saveOverlays(C,N.batchId,B)})}).then(()=>({batchId:R.batchId,changes:Bo(w)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(u,c,h){let f=u.Ba[u.currentUser.toKey()];f||(f=new Y(G)),f=f.insert(c,h),u.Ba[u.currentUser.toKey()]=f}(n,s.batchId,e),await hn(n,s.changes),await cr(n.remoteStore)}catch(s){const o=Ii(s,"Failed to persist write");e.reject(o)}}async function Ea(r,t){const e=U(r);try{const n=await Sc(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Na.get(o);u&&($(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.va=!0:s.modifiedDocuments.size>0?$(u.va):s.removedDocuments.size>0&&($(u.va),u.va=!1))}),await hn(e,n,t)}catch(n){await on(n)}}function ao(r,t,e){const n=U(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Fa.forEach((o,u)=>{const c=u.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const h=U(u);h.onlineState=c;let f=!1;h.queries.forEach((g,w)=>{for(const R of w.j_)R.Z_(c)&&(f=!0)}),f&&wi(h)}(n.eventManager,t),s.length&&n.Ca.d_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function _h(r,t,e){const n=U(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Na.get(t),o=s&&s.key;if(o){let u=new Y(M.comparator);u=u.insert(o,yt.newNoDocument(o,j.min()));const c=q().add(o),h=new ar(j.min(),new Map,new Y(G),u,c);await Ea(n,h),n.Oa=n.Oa.remove(o),n.Na.delete(t),Ai(n)}else await Jr(n.localStore,t,!1).then(()=>ti(n,t,e)).catch(on)}async function yh(r,t){const e=U(r),n=t.batch.batchId;try{const s=await Vc(e.localStore,t);Ia(e,n,null),Ta(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await hn(e,s)}catch(s){await on(s)}}async function vh(r,t,e){const n=U(r);try{const s=await function(u,c){const h=U(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let g;return h.mutationQueue.lookupMutationBatch(f,c).next(w=>($(w!==null),g=w.keys(),h.mutationQueue.removeMutationBatch(f,w))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,g,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,g)).next(()=>h.localDocuments.getDocuments(f,g))})}(n.localStore,t);Ia(n,t,e),Ta(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await hn(n,s)}catch(s){await on(s)}}function Ta(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function Ia(r,t,e){const n=U(r);let s=n.Ba[n.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),n.Ba[n.currentUser.toKey()]=s}}function ti(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||wa(r,n)})}function wa(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(_i(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),Ai(r))}function uo(r,t,e){for(const n of e)n instanceof _a?(r.La.addReference(n.key,t),Eh(r,n)):n instanceof ya?(D("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||wa(r,n.key)):L()}function Eh(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(D("SyncEngine","New document in limbo: "+e),r.xa.add(n),Ai(r))}function Ai(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new M(X.fromString(t)),n=r.qa.next();r.Na.set(n,new lh(e)),r.Oa=r.Oa.insert(e,n),ha(r.remoteStore,new Bt(Pt(Fo(e.path)),n,"TargetPurposeLimboResolution",ri.oe))}}async function hn(r,t,e){const n=U(r),s=[],o=[],u=[];n.Fa.isEmpty()||(n.Fa.forEach((c,h)=>{u.push(n.Ka(h,t,e).then(f=>{var g;if((f||e)&&n.isPrimaryClient){const w=f?!f.fromCache:(g=e?.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;n.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(f){s.push(f);const w=gi.Wi(h.targetId,f);o.push(w)}}))}),await Promise.all(u),n.Ca.d_(s),await async function(h,f){const g=U(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>V.forEach(f,R=>V.forEach(R.$i,C=>g.persistence.referenceDelegate.addReference(w,R.targetId,C)).next(()=>V.forEach(R.Ui,C=>g.persistence.referenceDelegate.removeReference(w,R.targetId,C)))))}catch(w){if(!an(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const C=g.os.get(R),x=C.snapshotVersion,b=C.withLastLimboFreeSnapshotVersion(x);g.os=g.os.insert(R,b)}}}(n.localStore,o))}async function Th(r,t){const e=U(r);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const n=await aa(e.localStore,t);e.currentUser=t,function(o,u){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new O(S.CANCELLED,u))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await hn(e,n.hs)}}function Ih(r,t){const e=U(r),n=e.Na.get(t);if(n&&n.va)return q().add(n.key);{let s=q();const o=e.Ma.get(t);if(!o)return s;for(const u of o){const c=e.Fa.get(u);s=s.unionWith(c.view.Va)}return s}}function Aa(r){const t=U(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ea.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ih.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_h.bind(null,t),t.Ca.d_=ih.bind(null,t.eventManager),t.Ca.$a=sh.bind(null,t.eventManager),t}function wh(r){const t=U(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=yh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=vh.bind(null,t),t}class Hn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ur(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Pc(this.persistence,new Ac,t.initialUser,this.serializer)}Ga(t){return new Tc(pi.Zr,this.serializer)}Wa(t){return new Dc}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hn.provider={build:()=>new Hn};class ei{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ao(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Th.bind(null,this.syncEngine),await Zc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new eh}()}createDatastore(t){const e=ur(t.databaseInfo.databaseId),n=function(o){return new Lc(o)}(t.databaseInfo);return function(o,u,c,h){return new Uc(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,u,c){return new Bc(n,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ao(this.syncEngine,e,0),function(){return no.D()?new no:new bc}())}createSyncEngine(t,e){return function(s,o,u,c,h,f,g){const w=new ch(s,o,u,c,h,f);return g&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=U(s);D("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await cn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ei.provider={build:()=>new ei};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Ot("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=So.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{D("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(D("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ii(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function qr(r,t){r.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await aa(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function lo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Ph(r);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>ro(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>ro(t.remoteStore,s)),r._onlineComponents=t}async function Ph(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await qr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;me("Error using user provided cache. Falling back to memory cache: "+e),await qr(r,new Hn)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await qr(r,new Hn);return r._offlineComponents}async function Ra(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await lo(r,r._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await lo(r,new ei))),r._onlineComponents}function Vh(r){return Ra(r).then(t=>t.syncEngine)}async function Sh(r){const t=await Ra(r),e=t.eventManager;return e.onListen=hh.bind(null,t.syncEngine),e.onUnlisten=mh.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=dh.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ph.bind(null,t.syncEngine),e}function Ch(r,t,e={}){const n=new zt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,f){const g=new Ah({next:R=>{g.Za(),u.enqueueAndForget(()=>rh(o,w)),R.fromCache&&h.source==="server"?f.reject(new O(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),w=new oh(c,g,{includeMetadataChanges:!0,_a:!0});return nh(o,w)}(await Sh(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(r,t,e){if(!e)throw new O(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function kh(r,t,e,n){if(t===!0&&n===!0)throw new O(S.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function ho(r){if(!M.isDocumentKey(r))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function fo(r){if(M.isDocumentKey(r))throw new O(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ri(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L()}function rn(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ri(r);throw new O(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}kh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pa((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class hr{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new zu;switch(n.type){case"firstParty":return new Qu(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=co.get(e);n&&(D("ComponentProvider","Removing Datastore"),co.delete(e),n.terminate())}(this),Promise.resolve()}}function Nh(r,t,e,n={}){var s;const o=(r=rn(r,hr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&me("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let c,h;if(typeof n.mockUserToken=="string")c=n.mockUserToken,h=_t.MOCK_USER;else{c=ku(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new _t(f)}r._authCredentials=new Ku(new Vo(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new dr(this.firestore,t,this._query)}}class Rt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}}class Kt extends dr{constructor(t,e,n){super(t,e,Fo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new M(t))}withConverter(t){return new Kt(this.firestore,t,this._path)}}function Xn(r,t,...e){if(r=Xe(r),Va("collection","path",t),r instanceof hr){const n=X.fromString(t,...e);return fo(n),new Kt(r,null,n)}{if(!(r instanceof Rt||r instanceof Kt))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(t,...e));return fo(n),new Kt(r.firestore,null,n)}}function Sa(r,t,...e){if(r=Xe(r),arguments.length===1&&(t=So.newId()),Va("doc","path",t),r instanceof hr){const n=X.fromString(t,...e);return ho(n),new Rt(r,null,new M(n))}{if(!(r instanceof Rt||r instanceof Kt))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(t,...e));return ho(n),new Rt(r.firestore,r instanceof Kt?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new la(this,"async_queue_retry"),this.Vu=()=>{const n=Ur();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=Ur();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ur();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new zt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!an(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(n);throw Ot("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Ti.createAndSchedule(this,t,e,n,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&L()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class fr extends hr{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new po,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new po(t),this._firestoreClient=void 0,await t}}}function xh(r,t){const e=typeof r=="object"?r:Vu(),n=typeof r=="string"?r:"(default)",s=Su(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=Cu("firestore");o&&Nh(s,...o)}return s}function Ca(r){if(r._terminated)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Dh(r),r._firestoreClient}function Dh(r){var t,e,n;const s=r._freezeSettings(),o=function(c,h,f,g){return new ol(c,h,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Pa(g.experimentalLongPollingOptions),g.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new Rh(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c?._online.build();return{_offline:c?._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ee(ht.fromBase64String(t))}catch(e){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ee(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=/^__.*__$/;class Oh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ie(t,this.data,this.fieldMask,e,this.fieldTransforms):new un(t,this.data,e,this.fieldTransforms)}}function Na(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Ci{constructor(t,e,n,s,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Ci(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.Ou(t),s}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Yn(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Na(this.Cu)&&bh.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Mh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ur(t)}Qu(t,e,n,s=!1){return new Ci({Cu:t,methodName:e,qu:n,path:lt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lh(r){const t=r._freezeSettings(),e=ur(r._databaseId);return new Mh(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Fh(r,t,e,n,s,o={}){const u=r.Qu(o.merge||o.mergeFields?2:0,t,e,s);Oa("Data must be an object, but it was:",u,n);const c=Da(n,u);let h,f;if(o.merge)h=new At(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const g=[];for(const w of o.mergeFields){const R=jh(t,w,e);if(!u.contains(R))throw new O(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);qh(g,R)||g.push(R)}h=new At(g),f=u.fieldTransforms.filter(w=>h.covers(w.field))}else h=null,f=u.fieldTransforms;return new Oh(new It(c),h,f)}function xa(r,t){if(ba(r=Xe(r)))return Oa("Unsupported field value:",t,r),Da(r,t);if(r instanceof ka)return function(n,s){if(!Na(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,s){const o=[];let u=0;for(const c of n){let h=xa(c,s.Lu(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,s){if((n=Xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Cl(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=rt.fromDate(n);return{timestampValue:Qn(s.serializer,o)}}if(n instanceof rt){const o=new rt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Qn(s.serializer,o)}}if(n instanceof Vi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ee)return{bytesValue:ta(s.serializer,n._byteString)};if(n instanceof Rt){const o=s.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw s.Bu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:fi(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Si)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return li(c.serializer,h)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${Ri(n)}`)}(r,t)}function Da(r,t){const e={};return Co(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ie(r,(n,s)=>{const o=xa(s,t.Mu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function ba(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof rt||r instanceof Vi||r instanceof Ee||r instanceof Rt||r instanceof ka||r instanceof Si)}function Oa(r,t,e){if(!ba(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=Ri(e);throw n==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+n)}}function jh(r,t,e){if((t=Xe(t))instanceof Pi)return t._internalPath;if(typeof t=="string")return Ma(r,t);throw Yn("Field path arguments must be of type string or ",r,!1,void 0,e)}const Uh=new RegExp("[~\\*/\\[\\]]");function Ma(r,t,e){if(t.search(Uh)>=0)throw Yn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Pi(...t.split("."))._internalPath}catch{throw Yn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Yn(r,t,e,n,s){const o=n&&!n.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${n}`),u&&(h+=` in document ${s}`),h+=")"),new O(S.INVALID_ARGUMENT,c+r+h)}function qh(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Bh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Fa("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Bh extends La{data(){return super.data()}}function Fa(r,t){return typeof t=="string"?Ma(r,t):t instanceof Pi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new O(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kh{convertValue(t,e="none"){switch(re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ie(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,s;const o=(s=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(u=>Z(u.doubleValue));return new Si(o)}convertGeoPoint(t){return new Vi(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=si(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Je(t));default:return null}}convertTimestamp(t){const e=$t(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=X.fromString(t);$(oa(n));const s=new Ze(n.get(1),n.get(3)),o=new M(n.popFirst(5));return s.isEqual(e)||Ot(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $h extends La{constructor(t,e,n,s,o,u){super(t,e,n,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Fa("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class qn extends $h{data(t={}){return super.data(t)}}class Qh{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Mn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new qn(this._firestore,this._userDataWriter,n.key,n,new Mn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(c=>{const h=new qn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new qn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,g=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),g=u.indexOf(c.doc.key)),{type:Wh(c.type),doc:h,oldIndex:f,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Wh(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Hh extends Kh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ee(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function ki(r){r=rn(r,dr);const t=rn(r.firestore,fr),e=Ca(t),n=new Hh(t);return zh(r._query),Ch(e,r._query).then(s=>new Qh(t,n,r,s))}function Xh(r){return ja(rn(r.firestore,fr),[new ci(r._key,Vt.none())])}function Yh(r,t){const e=rn(r.firestore,fr),n=Sa(r),s=Gh(r.converter,t);return ja(e,[Fh(Lh(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Vt.exists(!1))]).then(()=>n)}function ja(r,t){return function(n,s){const o=new zt;return n.asyncQueue.enqueueAndForget(async()=>gh(await Vh(n),s,o)),o.promise}(Ca(r),t)}(function(t,e=!0){(function(s){Te=s})(Nu),Au(new Ru("firestore",(n,{instanceIdentifier:s,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new fr(new Gu(n.getProvider("auth-internal")),new Hu(n.getProvider("app-check-internal")),function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ze(f.options.projectId,g)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ns(Ds,"4.7.3",t),Ns(Ds,"4.7.3","esm2017")})();const sn=xh(bu);//! Order the products by ID in ascending order
const Jh=async(r="",t=10)=>{const e=Xn(sn,"recipes"),n=[];let s=0;return(await ki(e)).forEach(u=>{const c=u.data().name.toLowerCase(),h=r.toLowerCase();if(c.includes(h)||r==""){const f={id:u.data().id,name:u.data().name,game:u.data().game,description:u.data().description,ingredients:u.data().ingredients,steps:u.data().steps,image_url:u.data().image_url};n.push(f)}}),n.sort((u,c)=>u.id-c.id),s=Math.ceil(n.length/t),{recipes:n,totalPages:s}},Zh=async r=>{let t=0;t=(await ki(Xn(sn,"recipes"))).size+1;const n=await Yh(Xn(sn,"recipes"),{id:t,name:r.name,game:r.game,description:r.description,ingredients:r.ingredients,steps:r.steps,image_url:r.image_url});return console.log(n),{id:t,...r}},td=async r=>{const t=await ki(Xn(sn,"recipes"));let e="";return t.forEach(n=>{n.data().id==r&&(console.log(n),e=String(n.id))}),await Xh(Sa(sn,"recipes",e)),{id:0}},go=({mode:r,onProductAdded:t,onProductDeleted:e})=>{const[n,s]=et.useState(""),[o,u]=et.useState(""),[c,h]=et.useState(""),[f,g]=et.useState(""),[w,R]=et.useState(""),[C,x]=et.useState(""),[b,N]=et.useState(""),B=async F=>{F.preventDefault();try{r==="add"?(await Zh({name:n,game:o,description:c,ingredients:f,steps:w,image_url:C}),s(""),x(""),t?.()):(await td(Number(b)),N(""),e?.())}catch(Q){console.error(`Error ${r==="add"?"adding":"deleting"} product:`,Q)}};return P.jsxs("div",{className:"product-form-container",children:[P.jsx("h2",{className:"product-form-title",children:r==="add"?"Add New Product":"Delete Product"}),P.jsxs("form",{onSubmit:B,className:"product-form",children:[r==="add"?P.jsxs(P.Fragment,{children:[P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"name"}),P.jsx("input",{type:"text",id:"name",value:n,placeholder:"Enter recipe name...",onChange:F=>s(F.target.value),required:!0})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"game"}),P.jsx("input",{type:"text",id:"game",value:o,placeholder:"Enter game reference...",onChange:F=>u(F.target.value),required:!0})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"description"}),P.jsx("input",{type:"text",id:"description",value:c,placeholder:"Enter recipe description...",onChange:F=>h(F.target.value),required:!0})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"ingredients"}),P.jsx("input",{type:"text",id:"ingredients",value:f,placeholder:"Enter recipe ingredients...",onChange:F=>g(F.target.value),required:!0})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"steps"}),P.jsx("input",{type:"text",id:"steps",value:w,placeholder:"Enter recipe steps...",onChange:F=>R(F.target.value),required:!0})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"imageUrl"}),P.jsx("input",{type:"url",id:"imageUrl",value:C,placeholder:"Enter image URL of in game treat...",onChange:F=>x(F.target.value)})]})]}):P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"productId"}),P.jsx("input",{type:"text",id:"productId",value:b,placeholder:"Enter recipe ID...",onChange:F=>N(F.target.value),required:!0})]}),P.jsx("button",{type:"submit",id:"submitButton",className:r==="add"?"submit-button":"delete-button",children:r==="add"?"Add Product":"Delete Product"})]})]})},ed=({recipe:r,onClose:t})=>P.jsxs("div",{className:"product-form-container",children:[P.jsx("button",{type:"submit",id:"submitButton",className:"buttonReturn",onClick:t,children:"Back"}),P.jsx("img",{src:r.image_url||"/placeholder.png",alt:r.name,onError:e=>{const n=e.target;n.src="/placeholder.png"}}),P.jsx("button",{type:"submit",id:"likeButton",className:"buttonLike",onClick:()=>{alert("You liked this recipe!")},children:"Like"}),P.jsx("h2",{className:"product-form-title",children:r.name}),P.jsx("h3",{children:r.game}),P.jsxs("div",{children:[P.jsx("h4",{children:"Description"}),P.jsx("p",{children:r.description}),P.jsx("h4",{children:"Ingredients"}),P.jsx("p",{children:r.ingredients}),P.jsx("h4",{children:"Steps"}),P.jsx("p",{children:r.steps})]})]}),nd=({user:r})=>P.jsxs("div",{className:"product-card",role:"article",children:[P.jsx("h2",{children:"Profile"}),P.jsx("h3",{children:r})]}),rd=({query:r,setQuery:t,setCurrentPage:e})=>P.jsx("div",{className:"search-container",children:P.jsxs("form",{className:"search-form",role:"search",children:[P.jsx("h2",{className:"search-form-title",children:"Search Recipes"}),P.jsx("div",{className:"search-form-group",children:P.jsx("input",{type:"text",id:"search-query",value:r,onChange:n=>{n.preventDefault(),t(n.target.value),e(1),console.log(n.target.value)},placeholder:"Enter recipe name...",required:!0})})]})}),id=({message:r,onClose:t})=>{const[e,n]=et.useState(!0);return et.useEffect(()=>{if(r){n(!0);const s=setTimeout(()=>{n(!1),t()},5e3);return()=>clearTimeout(s)}},[r,t]),P.jsxs(P.Fragment,{children:[!e&&P.jsx(P.Fragment,{}),e&&P.jsxs("div",{className:"status-banner",children:[P.jsx("p",{children:r}),P.jsx("button",{onClick:()=>{n(!1),t()},children:"×"})]})]})};var Ua={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_o=Zt.createContext&&Zt.createContext(Ua),sd=["attr","size","title"];function od(r,t){if(r==null)return{};var e=ad(r,t),n,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(s=0;s<o.length;s++)n=o[s],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(e[n]=r[n])}return e}function ad(r,t){if(r==null)return{};var e={};for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){if(t.indexOf(n)>=0)continue;e[n]=r[n]}return e}function Jn(){return Jn=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Jn.apply(this,arguments)}function yo(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),e.push.apply(e,n)}return e}function Zn(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?yo(Object(e),!0).forEach(function(n){ud(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):yo(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}function ud(r,t,e){return t=ld(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function ld(r){var t=cd(r,"string");return typeof t=="symbol"?t:t+""}function cd(r,t){if(typeof r!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var n=e.call(r,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function qa(r){return r&&r.map((t,e)=>Zt.createElement(t.tag,Zn({key:e},t.attr),qa(t.child)))}function dn(r){return t=>Zt.createElement(hd,Jn({attr:Zn({},r.attr)},t),qa(r.child))}function hd(r){var t=e=>{var{attr:n,size:s,title:o}=r,u=od(r,sd),c=s||e.size||"1em",h;return e.className&&(h=e.className),r.className&&(h=(h?h+" ":"")+r.className),Zt.createElement("svg",Jn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,u,{className:h,style:Zn(Zn({color:r.color||e.color},e.style),r.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&Zt.createElement("title",null,o),r.children)};return _o!==void 0?Zt.createElement(_o.Consumer,null,e=>t(e)):t(Ua)}function dd(r){return dn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(r)}function fd(r){return dn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(r)}function md(r){return dn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M346.5 240H272v-74.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-74.5c-8.8 0-16 6-16 16s7.5 16 16 16H240v74.5c0 9.5 7 16 16 16s16-7.2 16-16V272h74.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"},child:[]},{tag:"path",attr:{d:"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"},child:[]}]})(r)}function pd(r){return dn({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#FF8A65",points:"24,21.3 12.7,10 26,1.7 38.3,10"},child:[]},{tag:"polygon",attr:{fill:"#FFAB91",points:"24,21.3 12.7,10 17,4.7 38.3,10"},child:[]},{tag:"path",attr:{fill:"#B39DDB",d:"M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z"},child:[]},{tag:"path",attr:{fill:"#7E57C2",d:"M38,13H10c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h28c1.1,0,2,0.9,2,2v0C40,12.1,39.1,13,38,13z"},child:[]}]})(r)}function gd(r){return dn({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z"},child:[]}]})(r)}function wd(){const[r,t]=et.useState([]),[e,n]=et.useState(""),[s,o]=et.useState(""),[u,c]=et.useState(1),[h,f]=et.useState(1),[g,w]=et.useState("none"),[R,C]=et.useState(null),x=async(N="")=>{try{const B=await Jh(N);t(B.recipes),f(B.totalPages)}catch(B){console.error("Error fetching recipes:",B),n("Failed to load recipes")}},b=N=>{C(N),w("recipe")};return et.useEffect(()=>{x()},[]),et.useEffect(()=>{x(s)},[s]),P.jsxs("div",{children:[P.jsxs("header",{children:[P.jsx("img",{src:"/game_byte_temp_logo.png",className:"icon"}),P.jsx("h1",{children:"Game Bytes"}),P.jsxs("div",{className:"header-divider",children:[P.jsx("a",{href:"/dashboard",className:"header-link",children:P.jsx(dd,{className:"icon"})}),P.jsx("span",{className:"tooltip",children:"Home"})]}),P.jsxs("div",{className:"header-divider",children:[P.jsx("a",{className:"header-link",href:"#",onClick:N=>{N.preventDefault(),w(g==="add"?"none":"add")},children:P.jsx(md,{className:"icon"})}),P.jsx("span",{className:"tooltip",children:"Add Recipe"})]}),P.jsxs("div",{className:"header-divider",children:[P.jsx("a",{className:"header-link",href:"#",onClick:N=>{N.preventDefault(),w(g==="delete"?"none":"delete")},children:P.jsx(pd,{className:"icon"})}),P.jsx("span",{className:"tooltip",children:"Delete Recipe"})]}),P.jsxs("div",{className:"header-divider",children:[P.jsx("a",{className:"header-link",href:"#",onClick:N=>{N.preventDefault(),w(g==="profile"?"none":"profile")},children:P.jsx(fd,{className:"icon"})}),P.jsx("span",{className:"tooltip",children:"Profile"})]}),P.jsxs("form",{action:"/api/auth/signout",className:"header-divider",children:[P.jsx("button",{id:"logout",type:"submit",className:"header-link",children:P.jsx(gd,{className:"icon"})}),P.jsx("span",{className:"tooltip",children:"Sign Out"})]})]}),e&&P.jsx(id,{message:e,onClose:()=>n("")}),g==="add"&&P.jsx(go,{mode:"add",onProductAdded:()=>{n("Recipe added successfully"),w("none"),x(),c(1)}}),g==="delete"&&P.jsx(go,{mode:"delete",onProductDeleted:()=>{n("Recipe deleted successfully"),w("none"),x(),c(1)}}),g==="recipe"&&R&&P.jsx("div",{children:P.jsx(ed,{recipe:R,onClose:()=>w("none")})}),g==="profile"&&P.jsx(nd,{user:"user"}),g==="none"&&P.jsxs(P.Fragment,{children:[P.jsx(rd,{query:s,setQuery:o,setCurrentPage:c}),P.jsx(Bu,{recipes:r,currentPage:u,totalPages:h,setCurrentPage:c,onCardClick:b})]})]})}export{wd as default};
