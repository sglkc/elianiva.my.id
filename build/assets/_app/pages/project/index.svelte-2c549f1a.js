import{S as s,i as e,s as t,p as r,q as o,r as a,w as c,x as l,y as n,j as f,e as p,t as i,l as g,c as m,a as $,b as u,d as h,o as j,f as d,g as b,D as v,Y as w,C as P}from"../../chunks/stores-bccdb558.js";import{S as k,P as S}from"../../chunks/ProgressButton-a8e9a313.js";import{P as x}from"../../chunks/ProjectCard-0eb22189.js";import"../../chunks/preload-helper-9f12a5fd.js";import"../../chunks/Chrome-a9500c65.js";function C(s,e,t){const r=s.slice();return r[1]=e[t],r}function E(s){let e,t;return e=new x({props:{title:s[1].title,imgSrc:`/assets/project/${s[1].slug}/cover.webp`,href:`/project/${s[1].slug}`,desc:s[1].desc,demo:s[1].demo,source:s[1].source}}),{c(){r(e.$$.fragment)},l(s){o(e.$$.fragment,s)},m(s,r){a(e,s,r),t=!0},p(s,t){const r={};1&t&&(r.title=s[1].title),1&t&&(r.imgSrc=`/assets/project/${s[1].slug}/cover.webp`),1&t&&(r.href=`/project/${s[1].slug}`),1&t&&(r.desc=s[1].desc),1&t&&(r.demo=s[1].demo),1&t&&(r.source=s[1].source),e.$set(r)},i(s){t||(c(e.$$.fragment,s),t=!0)},o(s){l(e.$$.fragment,s),t=!1},d(s){n(e,s)}}}function _(s){let e,t,x,_,y,A,B,D,I,q;e=new k({props:{title:"Projects"}});let H=s[0],N=[];for(let r=0;r<H.length;r+=1)N[r]=E(C(s,H,r));const O=s=>l(N[s],1,1,(()=>{N[s]=null}));return I=new S({}),{c(){r(e.$$.fragment),t=f(),x=p("section"),_=p("h1"),y=i("All Projects"),A=f(),B=p("div");for(let s=0;s<N.length;s+=1)N[s].c();D=f(),r(I.$$.fragment),this.h()},l(s){o(e.$$.fragment,s),t=g(s),x=m(s,"SECTION",{class:!0});var r=$(x);_=m(r,"H1",{class:!0});var a=$(_);y=u(a,"All Projects"),a.forEach(h),A=g(r),B=m(r,"DIV",{class:!0});var c=$(B);for(let e=0;e<N.length;e+=1)N[e].l(c);c.forEach(h),r.forEach(h),D=g(s),o(I.$$.fragment,s),this.h()},h(){j(_,"class","posts__title svelte-bpffgc"),j(B,"class","posts__cards svelte-bpffgc"),j(x,"class","posts svelte-bpffgc")},m(s,r){a(e,s,r),d(s,t,r),d(s,x,r),b(x,_),b(_,y),b(x,A),b(x,B);for(let e=0;e<N.length;e+=1)N[e].m(B,null);d(s,D,r),a(I,s,r),q=!0},p(s,[e]){if(1&e){let t;for(H=s[0],t=0;t<H.length;t+=1){const r=C(s,H,t);N[t]?(N[t].p(r,e),c(N[t],1)):(N[t]=E(r),N[t].c(),c(N[t],1),N[t].m(B,null))}for(P(),t=H.length;t<N.length;t+=1)O(t);v()}},i(s){if(!q){c(e.$$.fragment,s);for(let s=0;s<H.length;s+=1)c(N[s]);c(I.$$.fragment,s),q=!0}},o(s){l(e.$$.fragment,s),N=N.filter(Boolean);for(let e=0;e<N.length;e+=1)l(N[e]);l(I.$$.fragment,s),q=!1},d(s){n(e,s),s&&h(t),s&&h(x),w(N,s),s&&h(D),n(I,s)}}}async function y({fetch:s}){return{props:{projects:await(await s("/api/project.json")).json()}}}function A(s,e,t){let{projects:r}=e;return s.$$set=s=>{"projects"in s&&t(0,r=s.projects)},[r]}export default class extends s{constructor(s){super(),e(this,s,A,_,t,{projects:0})}}export{y as load};
