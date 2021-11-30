import{_ as d}from"../chunks/preload-helper-cd5f4ade.js";import{S as y,i as C,s as N,l as V,f as m,D as w,d as f,E as F,e as b,k as j,c as E,a as g,n as A,b as v,F as L,G as S,H as U,I as q,x as G,u as H,J as D,y as J,K,L as h,t as M,g as x,M as z,N as P}from"../chunks/vendor-b1bbe6fe.js";function O(o,n,l){const e=o.slice();return e[3]=n[l],e}function R(o,n,l){const e=o.slice();return e[7]=n[l],e}function B(o){return{c:h,l:h,m:h,p:h,d:h}}function Q(o){let n,l=o[6].toc,e=[];for(let t=0;t<l.length;t+=1)e[t]=T(R(o,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=j()},l(t){for(let c=0;c<e.length;c+=1)e[c].l(t);n=A(t)},m(t,c){for(let a=0;a<e.length;a+=1)e[a].m(t,c);m(t,n,c)},p(t,c){if(c&1){l=t[6].toc;let a;for(a=0;a<l.length;a+=1){const _=R(t,l,a);e[a]?e[a].p(_,c):(e[a]=T(_),e[a].c(),e[a].m(n.parentNode,n))}for(;a<e.length;a+=1)e[a].d(1);e.length=l.length}},d(t){D(e,t),t&&f(n)}}}function T(o){let n,l,e=o[7].content+"",t,c;return{c(){n=b("li"),l=b("a"),t=M(e),this.h()},l(a){n=E(a,"LI",{});var _=g(n);l=E(_,"A",{class:!0,href:!0,rel:!0});var p=g(l);t=x(p,e),p.forEach(f),_.forEach(f),this.h()},h(){v(l,"class","hover:underline"),v(l,"href",c="#"+z(o[7].content)),v(l,"rel","external"),P(n,"main-link",o[7].level==2),P(n,"sub-link",o[7].level!=2)},m(a,_){m(a,n,_),L(n,l),L(l,t)},p:h,d(a){a&&f(n)}}}function W(o){return{c:h,l:h,m:h,p:h,d:h}}function $(o){let n,l={ctx:o,current:null,token:null,hasCatch:!1,pending:W,then:Q,catch:B,value:6};return K(o[3],l),{c(){n=V(),l.block.c()},l(e){n=V(),l.block.l(e)},m(e,t){m(e,n,t),l.block.m(e,l.anchor=t),l.mount=()=>n.parentNode,l.anchor=n},p(e,t){o=e,w(l,o,t)},d(e){e&&f(n),l.block.d(e),l.token=null,l=null}}}function X(o){let n,l,e,t,c,a=o[0],_=[];for(let s=0;s<a.length;s+=1)_[s]=$(O(o,a,s));const p=o[2].default,i=F(p,o,o[1],null);return{c(){n=b("nav"),l=b("ul");for(let s=0;s<_.length;s+=1)_[s].c();e=j(),t=b("div"),i&&i.c(),this.h()},l(s){n=E(s,"NAV",{class:!0});var u=g(n);l=E(u,"UL",{});var r=g(l);for(let I=0;I<_.length;I+=1)_[I].l(r);r.forEach(f),u.forEach(f),e=A(s),t=E(s,"DIV",{id:!0,class:!0});var k=g(t);i&&i.l(k),k.forEach(f),this.h()},h(){v(n,"class","bg-gray-300 pt-32 pb-10 pl-10 fixed top-0 w-96 h-full"),v(t,"id","content"),v(t,"class","pl-96 pt-32 pb-24")},m(s,u){m(s,n,u),L(n,l);for(let r=0;r<_.length;r+=1)_[r].m(l,null);m(s,e,u),m(s,t,u),i&&i.m(t,null),c=!0},p(s,[u]){if(u&1){a=s[0];let r;for(r=0;r<a.length;r+=1){const k=O(s,a,r);_[r]?_[r].p(k,u):(_[r]=$(k),_[r].c(),_[r].m(l,null))}for(;r<_.length;r+=1)_[r].d(1);_.length=a.length}i&&i.p&&(!c||u&2)&&S(i,p,s,s[1],c?q(p,s[1],u,null):U(s[1]),null)},i(s){c||(G(i,s),c=!0)},o(s){H(i,s),c=!1},d(s){s&&f(n),D(_,s),s&&f(e),s&&f(t),i&&i.d(s)}}}function Y(o,n,l){let{$$slots:e={},$$scope:t}=n;const c=[d(()=>import("../chunks/1_Install-eee897d3.js"),[]),d(()=>import("../chunks/2_Examples-ec8b6129.js"),[]),d(()=>import("../chunks/3_Form-c3cc5c25.js"),[]),d(()=>import("../chunks/4_Field-3a7fb72f.js"),[]),d(()=>import("../chunks/5_Validators-2f3525c1.js"),[]),d(()=>import("../chunks/6_UseStyle-e945ad79.js"),[]),d(()=>import("../chunks/7_Config-70653a83.js"),[]),d(()=>import("../chunks/8_Contribute-a409c277.js"),[])];return J("docs",c),o.$$set=a=>{"$$scope"in a&&l(1,t=a.$$scope)},[c,t,e]}class te extends y{constructor(n){super();C(this,n,Y,X,N,{})}}export{te as default};