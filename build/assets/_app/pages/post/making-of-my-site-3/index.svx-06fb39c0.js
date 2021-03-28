import{S as a,i as e,s as t,m as o,p as s,q as r,r as i,u as h,w as n,x as l,y as c,v as f,e as u,t as p,j as d,c as g,a as m,b as v,d as y,l as E,o as I,f as b,g as w,n as k}from"../../../chunks/stores-bccdb558.js";import{P}from"../../../chunks/post-00e69cc0.js";import"../../../chunks/ProgressButton-a8e9a313.js";import"../../../chunks/theme-9d96e3c6.js";function T(a){let e,t,o,s,r,i,h,n,l,c,f,P,T,H,C,S,A,j,L,$,x,D,B,O,G,J,M,q,U,F,R,W,Y,Z,z,K,N,Q,V,X,_,aa,ea,ta,oa,sa,ra,ia,ha,na,la,ca,fa,ua,pa,da,ga,ma,va,ya,Ea,Ia,ba,wa,ka,Pa,Ta,Ha,Ca,Sa,Aa,ja,La,$a,xa,Da,Ba,Oa,Ga,Ja,Ma,qa,Ua,Fa,Ra,Wa,Ya,Za,za,Ka,Na,Qa,Va,Xa,_a,ae,ee,te,oe,se,re,ie,he,ne,le,ce,fe,ue,pe,de,ge,me,ve,ye,Ee,Ie,be,we,ke,Pe,Te,He,Ce,Se,Ae,je,Le,$e,xe,De,Be,Oe,Ge,Je,Me,qe,Ue,Fe,Re,We,Ye,Ze,ze,Ke,Ne,Qe,Ve,Xe,_e,at,et;return{c(){e=u("h1"),t=u("a"),o=p("Table of Content"),s=d(),r=u("ul"),i=u("li"),h=u("p"),n=u("a"),l=p("Introduction"),c=d(),f=u("li"),P=u("p"),T=u("a"),H=p("Deployment"),C=d(),S=u("ul"),A=u("li"),j=u("a"),L=p("Manually using gh-pages"),$=d(),x=u("li"),D=u("a"),B=p("The life saver: TravisCI"),O=d(),G=u("li"),J=u("p"),M=u("a"),q=p("Special Thanks"),U=d(),F=u("h1"),R=u("a"),W=p("Introduction"),Y=d(),Z=u("p"),z=p("Hi everyone. Welcome to the last part of the 3 part series. This time, I will talk about how I deploy my site to Github Pages. It’s a simple yet a fun process. So, let’s get into the first step shall we."),K=d(),N=u("h1"),Q=u("a"),V=p("Deployment"),X=d(),_=u("h2"),aa=u("a"),ea=p("Manually using gh-pages"),ta=d(),oa=u("p"),sa=p("First of all, I installed "),ra=u("code"),ia=p("gh-page"),ha=p(" package from npm by executing"),na=d(),la=u("pre"),ca=d(),fa=u("p"),ua=p("and creating a custom script to my "),pa=u("code"),da=p("package.json"),ga=p(" like so:"),ma=d(),va=u("pre"),ya=d(),Ea=u("p"),Ia=p("and to deploy my site, I would simply run "),ba=u("code"),wa=p("npm run deploy"),ka=p(". It will automatically deploy my site to github pages."),Pa=d(),Ta=u("p"),Ha=p("But, I have to move my source code to other branch because the "),Ca=u("code"),Sa=p("master"),Aa=p(" branch will be used for the compiled code/the actual site. So I made a new branch called "),ja=u("code"),La=p("source"),$a=p(". Everything seems great, until something bothers me."),xa=d(),Da=u("h2"),Ba=u("a"),Oa=p("The life saver: TravisCI"),Ga=d(),Ja=u("p"),Ma=p("Initially, what I want to do is "),qa=u("code"),Ua=p("commit"),Fa=p(" to the repo, "),Ra=u("code"),Wa=p("push"),Ya=p(" it, and "),Za=u("code"),za=p("deploy"),Ka=p(" it manually. Could you imagine how frustrating it is to do all of those things? It would be tedious. Then, I came across an article that talk about TravisCI. "),Na=u("a"),Qa=p("Here it is"),Va=p(" if you want to read it yourself, it was a good one."),Xa=d(),_a=u("p"),ae=p("After configuring TravisCI, I can just simply push to the repo and TravisCI will build the site for me automatically. Isn’t that cool?"),ee=d(),te=u("h1"),oe=u("a"),se=p("Special Thanks"),re=d(),ie=u("p"),he=p("Before I end this blog, I have quite a list of people that I want to say thank you. Big thanks even! So, here we go."),ne=d(),le=u("ul"),ce=u("li"),fe=u("p"),ue=u("a"),pe=p("ypraw.github.io"),de=d(),ge=u("p"),me=p("Thanks to him, I know that you can host your page on github. I used to use random free hosting service to host my static site. He’s also the reason why I choose Gatsby JS because his site also using it."),ve=d(),ye=u("li"),Ee=u("p"),Ie=u("a"),be=p("addy-dclxvi.github.io"),we=d(),ke=u("p"),Pe=p("Because of him, I know there is this thing called Static Site Generator. He’s using Hugo for his site."),Te=d(),He=u("li"),Ce=u("p"),Se=u("a"),Ae=p("okitavera.me"),je=d(),Le=u("p"),$e=p("She is my main inspiration for the design of this site. Her site is just beautiful. She’s using Eleventy for her website."),xe=d(),De=u("li"),Be=u("p"),Oe=u("a"),Ge=p("bandithijo.com"),Je=d(),Me=u("p"),qe=p("He is the reason why I decided to make my own blog. It looks like a fun thing to do. He’s using Jekyll for his site."),Ue=d(),Fe=u("li"),Re=u("p"),We=u("a"),Ye=p("epsi-rns.github.io"),Ze=d(),ze=u("p"),Ke=p("His site is filled with quality content that makes me want to make it as well. He’s using Jekyll for his site."),Ne=d(),Qe=u("li"),Ve=u("p"),Xe=p("You"),_e=d(),at=u("p"),et=p("If you’ve gone this far, I just wanna say a big thanks for reading my article. I hope you’re having a nice day :)"),this.h()},l(a){e=g(a,"H1",{id:!0});var u=m(e);t=g(u,"A",{href:!0});var p=m(t);o=v(p,"Table of Content"),p.forEach(y),u.forEach(y),s=E(a),r=g(a,"UL",{});var d=m(r);i=g(d,"LI",{});var I=m(i);h=g(I,"P",{});var b=m(h);n=g(b,"A",{href:!0});var w=m(n);l=v(w,"Introduction"),w.forEach(y),b.forEach(y),I.forEach(y),c=E(d),f=g(d,"LI",{});var k=m(f);P=g(k,"P",{});var tt=m(P);T=g(tt,"A",{href:!0});var ot=m(T);H=v(ot,"Deployment"),ot.forEach(y),tt.forEach(y),C=E(k),S=g(k,"UL",{});var st=m(S);A=g(st,"LI",{});var rt=m(A);j=g(rt,"A",{href:!0});var it=m(j);L=v(it,"Manually using gh-pages"),it.forEach(y),rt.forEach(y),$=E(st),x=g(st,"LI",{});var ht=m(x);D=g(ht,"A",{href:!0});var nt=m(D);B=v(nt,"The life saver: TravisCI"),nt.forEach(y),ht.forEach(y),st.forEach(y),k.forEach(y),O=E(d),G=g(d,"LI",{});var lt=m(G);J=g(lt,"P",{});var ct=m(J);M=g(ct,"A",{href:!0});var ft=m(M);q=v(ft,"Special Thanks"),ft.forEach(y),ct.forEach(y),lt.forEach(y),d.forEach(y),U=E(a),F=g(a,"H1",{id:!0});var ut=m(F);R=g(ut,"A",{href:!0});var pt=m(R);W=v(pt,"Introduction"),pt.forEach(y),ut.forEach(y),Y=E(a),Z=g(a,"P",{});var dt=m(Z);z=v(dt,"Hi everyone. Welcome to the last part of the 3 part series. This time, I will talk about how I deploy my site to Github Pages. It’s a simple yet a fun process. So, let’s get into the first step shall we."),dt.forEach(y),K=E(a),N=g(a,"H1",{id:!0});var gt=m(N);Q=g(gt,"A",{href:!0});var mt=m(Q);V=v(mt,"Deployment"),mt.forEach(y),gt.forEach(y),X=E(a),_=g(a,"H2",{id:!0});var vt=m(_);aa=g(vt,"A",{href:!0});var yt=m(aa);ea=v(yt,"Manually using gh-pages"),yt.forEach(y),vt.forEach(y),ta=E(a),oa=g(a,"P",{});var Et=m(oa);sa=v(Et,"First of all, I installed "),ra=g(Et,"CODE",{});var It=m(ra);ia=v(It,"gh-page"),It.forEach(y),ha=v(Et," package from npm by executing"),Et.forEach(y),na=E(a),la=g(a,"PRE",{class:!0}),m(la).forEach(y),ca=E(a),fa=g(a,"P",{});var bt=m(fa);ua=v(bt,"and creating a custom script to my "),pa=g(bt,"CODE",{});var wt=m(pa);da=v(wt,"package.json"),wt.forEach(y),ga=v(bt," like so:"),bt.forEach(y),ma=E(a),va=g(a,"PRE",{class:!0}),m(va).forEach(y),ya=E(a),Ea=g(a,"P",{});var kt=m(Ea);Ia=v(kt,"and to deploy my site, I would simply run "),ba=g(kt,"CODE",{});var Pt=m(ba);wa=v(Pt,"npm run deploy"),Pt.forEach(y),ka=v(kt,". It will automatically deploy my site to github pages."),kt.forEach(y),Pa=E(a),Ta=g(a,"P",{});var Tt=m(Ta);Ha=v(Tt,"But, I have to move my source code to other branch because the "),Ca=g(Tt,"CODE",{});var Ht=m(Ca);Sa=v(Ht,"master"),Ht.forEach(y),Aa=v(Tt," branch will be used for the compiled code/the actual site. So I made a new branch called "),ja=g(Tt,"CODE",{});var Ct=m(ja);La=v(Ct,"source"),Ct.forEach(y),$a=v(Tt,". Everything seems great, until something bothers me."),Tt.forEach(y),xa=E(a),Da=g(a,"H2",{id:!0});var St=m(Da);Ba=g(St,"A",{href:!0});var At=m(Ba);Oa=v(At,"The life saver: TravisCI"),At.forEach(y),St.forEach(y),Ga=E(a),Ja=g(a,"P",{});var jt=m(Ja);Ma=v(jt,"Initially, what I want to do is "),qa=g(jt,"CODE",{});var Lt=m(qa);Ua=v(Lt,"commit"),Lt.forEach(y),Fa=v(jt," to the repo, "),Ra=g(jt,"CODE",{});var $t=m(Ra);Wa=v($t,"push"),$t.forEach(y),Ya=v(jt," it, and "),Za=g(jt,"CODE",{});var xt=m(Za);za=v(xt,"deploy"),xt.forEach(y),Ka=v(jt," it manually. Could you imagine how frustrating it is to do all of those things? It would be tedious. Then, I came across an article that talk about TravisCI. "),Na=g(jt,"A",{href:!0,rel:!0});var Dt=m(Na);Qa=v(Dt,"Here it is"),Dt.forEach(y),Va=v(jt," if you want to read it yourself, it was a good one."),jt.forEach(y),Xa=E(a),_a=g(a,"P",{});var Bt=m(_a);ae=v(Bt,"After configuring TravisCI, I can just simply push to the repo and TravisCI will build the site for me automatically. Isn’t that cool?"),Bt.forEach(y),ee=E(a),te=g(a,"H1",{id:!0});var Ot=m(te);oe=g(Ot,"A",{href:!0});var Gt=m(oe);se=v(Gt,"Special Thanks"),Gt.forEach(y),Ot.forEach(y),re=E(a),ie=g(a,"P",{});var Jt=m(ie);he=v(Jt,"Before I end this blog, I have quite a list of people that I want to say thank you. Big thanks even! So, here we go."),Jt.forEach(y),ne=E(a),le=g(a,"UL",{});var Mt=m(le);ce=g(Mt,"LI",{});var qt=m(ce);fe=g(qt,"P",{});var Ut=m(fe);ue=g(Ut,"A",{href:!0,rel:!0});var Ft=m(ue);pe=v(Ft,"ypraw.github.io"),Ft.forEach(y),Ut.forEach(y),de=E(qt),ge=g(qt,"P",{});var Rt=m(ge);me=v(Rt,"Thanks to him, I know that you can host your page on github. I used to use random free hosting service to host my static site. He’s also the reason why I choose Gatsby JS because his site also using it."),Rt.forEach(y),qt.forEach(y),ve=E(Mt),ye=g(Mt,"LI",{});var Wt=m(ye);Ee=g(Wt,"P",{});var Yt=m(Ee);Ie=g(Yt,"A",{href:!0,rel:!0});var Zt=m(Ie);be=v(Zt,"addy-dclxvi.github.io"),Zt.forEach(y),Yt.forEach(y),we=E(Wt),ke=g(Wt,"P",{});var zt=m(ke);Pe=v(zt,"Because of him, I know there is this thing called Static Site Generator. He’s using Hugo for his site."),zt.forEach(y),Wt.forEach(y),Te=E(Mt),He=g(Mt,"LI",{});var Kt=m(He);Ce=g(Kt,"P",{});var Nt=m(Ce);Se=g(Nt,"A",{href:!0,rel:!0});var Qt=m(Se);Ae=v(Qt,"okitavera.me"),Qt.forEach(y),Nt.forEach(y),je=E(Kt),Le=g(Kt,"P",{});var Vt=m(Le);$e=v(Vt,"She is my main inspiration for the design of this site. Her site is just beautiful. She’s using Eleventy for her website."),Vt.forEach(y),Kt.forEach(y),xe=E(Mt),De=g(Mt,"LI",{});var Xt=m(De);Be=g(Xt,"P",{});var _t=m(Be);Oe=g(_t,"A",{href:!0,rel:!0});var ao=m(Oe);Ge=v(ao,"bandithijo.com"),ao.forEach(y),_t.forEach(y),Je=E(Xt),Me=g(Xt,"P",{});var eo=m(Me);qe=v(eo,"He is the reason why I decided to make my own blog. It looks like a fun thing to do. He’s using Jekyll for his site."),eo.forEach(y),Xt.forEach(y),Ue=E(Mt),Fe=g(Mt,"LI",{});var to=m(Fe);Re=g(to,"P",{});var oo=m(Re);We=g(oo,"A",{href:!0,rel:!0});var so=m(We);Ye=v(so,"epsi-rns.github.io"),so.forEach(y),oo.forEach(y),Ze=E(to),ze=g(to,"P",{});var ro=m(ze);Ke=v(ro,"His site is filled with quality content that makes me want to make it as well. He’s using Jekyll for his site."),ro.forEach(y),to.forEach(y),Ne=E(Mt),Qe=g(Mt,"LI",{});var io=m(Qe);Ve=g(io,"P",{});var ho=m(Ve);Xe=v(ho,"You"),ho.forEach(y),_e=E(io),at=g(io,"P",{});var no=m(at);et=v(no,"If you’ve gone this far, I just wanna say a big thanks for reading my article. I hope you’re having a nice day :)"),no.forEach(y),io.forEach(y),Mt.forEach(y),this.h()},h(){I(t,"href","#table-of-content"),I(e,"id","table-of-content"),I(n,"href","#introduction"),I(T,"href","#deployment"),I(j,"href","#manually-using-gh-pages"),I(D,"href","#the-life-saver-travisci"),I(M,"href","#special-thanks"),I(R,"href","#introduction"),I(F,"id","introduction"),I(Q,"href","#deployment"),I(N,"id","deployment"),I(aa,"href","#manually-using-gh-pages"),I(_,"id","manually-using-gh-pages"),I(la,"class","language-bash"),I(va,"class","language-json"),I(Ba,"href","#the-life-saver-travisci"),I(Da,"id","the-life-saver-travisci"),I(Na,"href","https://okitavera.me/article/github-pages-static-site-generator-and-travisci/"),I(Na,"rel","nofollow"),I(oe,"href","#special-thanks"),I(te,"id","special-thanks"),I(ue,"href","https://ypraw.github.io"),I(ue,"rel","nofollow"),I(Ie,"href","https://addy-dclxvi.github.io"),I(Ie,"rel","nofollow"),I(Se,"href","https://okitavera.me"),I(Se,"rel","nofollow"),I(Oe,"href","https://bandithijo.com"),I(Oe,"rel","nofollow"),I(We,"href","https://epsi-rns.github.io"),I(We,"rel","nofollow")},m(a,u){b(a,e,u),w(e,t),w(t,o),b(a,s,u),b(a,r,u),w(r,i),w(i,h),w(h,n),w(n,l),w(r,c),w(r,f),w(f,P),w(P,T),w(T,H),w(f,C),w(f,S),w(S,A),w(A,j),w(j,L),w(S,$),w(S,x),w(x,D),w(D,B),w(r,O),w(r,G),w(G,J),w(J,M),w(M,q),b(a,U,u),b(a,F,u),w(F,R),w(R,W),b(a,Y,u),b(a,Z,u),w(Z,z),b(a,K,u),b(a,N,u),w(N,Q),w(Q,V),b(a,X,u),b(a,_,u),w(_,aa),w(aa,ea),b(a,ta,u),b(a,oa,u),w(oa,sa),w(oa,ra),w(ra,ia),w(oa,ha),b(a,na,u),b(a,la,u),la.innerHTML='<code class="language-bash">$ <span class="token function">npm</span> <span class="token function">install</span> gh-pages</code>',b(a,ca,u),b(a,fa,u),w(fa,ua),w(fa,pa),w(pa,da),w(fa,ga),b(a,ma,u),b(a,va,u),va.innerHTML='<code class="language-json"><span class="token property">"deploy"</span><span class="token operator">:</span> <span class="token string">"gatsby build &amp;&amp; gh-pages -d public -b master"</span><span class="token punctuation">,</span></code>',b(a,ya,u),b(a,Ea,u),w(Ea,Ia),w(Ea,ba),w(ba,wa),w(Ea,ka),b(a,Pa,u),b(a,Ta,u),w(Ta,Ha),w(Ta,Ca),w(Ca,Sa),w(Ta,Aa),w(Ta,ja),w(ja,La),w(Ta,$a),b(a,xa,u),b(a,Da,u),w(Da,Ba),w(Ba,Oa),b(a,Ga,u),b(a,Ja,u),w(Ja,Ma),w(Ja,qa),w(qa,Ua),w(Ja,Fa),w(Ja,Ra),w(Ra,Wa),w(Ja,Ya),w(Ja,Za),w(Za,za),w(Ja,Ka),w(Ja,Na),w(Na,Qa),w(Ja,Va),b(a,Xa,u),b(a,_a,u),w(_a,ae),b(a,ee,u),b(a,te,u),w(te,oe),w(oe,se),b(a,re,u),b(a,ie,u),w(ie,he),b(a,ne,u),b(a,le,u),w(le,ce),w(ce,fe),w(fe,ue),w(ue,pe),w(ce,de),w(ce,ge),w(ge,me),w(le,ve),w(le,ye),w(ye,Ee),w(Ee,Ie),w(Ie,be),w(ye,we),w(ye,ke),w(ke,Pe),w(le,Te),w(le,He),w(He,Ce),w(Ce,Se),w(Se,Ae),w(He,je),w(He,Le),w(Le,$e),w(le,xe),w(le,De),w(De,Be),w(Be,Oe),w(Oe,Ge),w(De,Je),w(De,Me),w(Me,qe),w(le,Ue),w(le,Fe),w(Fe,Re),w(Re,We),w(We,Ye),w(Fe,Ze),w(Fe,ze),w(ze,Ke),w(le,Ne),w(le,Qe),w(Qe,Ve),w(Ve,Xe),w(Qe,_e),w(Qe,at),w(at,et)},p:k,d(a){a&&y(e),a&&y(s),a&&y(r),a&&y(U),a&&y(F),a&&y(Y),a&&y(Z),a&&y(K),a&&y(N),a&&y(X),a&&y(_),a&&y(ta),a&&y(oa),a&&y(na),a&&y(la),a&&y(ca),a&&y(fa),a&&y(ma),a&&y(va),a&&y(ya),a&&y(Ea),a&&y(Pa),a&&y(Ta),a&&y(xa),a&&y(Da),a&&y(Ga),a&&y(Ja),a&&y(Xa),a&&y(_a),a&&y(ee),a&&y(te),a&&y(re),a&&y(ie),a&&y(ne),a&&y(le)}}}function H(a){let e,t;const u=[C];let p={$$slots:{default:[T]},$$scope:{ctx:a}};for(let s=0;s<u.length;s+=1)p=o(p,u[s]);return e=new P({props:p}),{c(){s(e.$$.fragment)},l(a){r(e.$$.fragment,a)},m(a,o){i(e,a,o),t=!0},p(a,[t]){const o=0&t?h(u,[f(C)]):{};1&t&&(o.$$scope={dirty:t,ctx:a}),e.$set(o)},i(a){t||(n(e.$$.fragment,a),t=!0)},o(a){l(e.$$.fragment,a),t=!1},d(a){c(e,a)}}}const C={title:"The process of making my website (Part 3)",date:"2020-02-14T00:00:00.000Z",desc:"Last post where I talk about my experience about how I made my website using Gatsby",tags:["react","website"]};export default class extends a{constructor(a){super(),e(this,a,null,H,t,{})}}export{C as metadata};
