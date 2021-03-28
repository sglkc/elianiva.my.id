import{S as e,i as t,s as o,m as a,p as r,q as n,r as s,u as i,w as h,x as l,y as c,v as u,e as f,t as m,j as d,c as p,a as v,b as g,d as I,l as w,o as E,f as q,g as y,n as k}from"../../../chunks/stores-bccdb558.js";import{P as b}from"../../../chunks/post-00e69cc0.js";import"../../../chunks/ProgressButton-a8e9a313.js";import"../../../chunks/theme-9d96e3c6.js";function C(e){let t,o,a,r,n,s,i,h,l,c,u,b,C,P,T,A,x,R,H,S,$,j,L,M,O,V,N,U,D,W,B,G,Y,Z,z,J,K,X,F,Q,_,ee,te,oe,ae,re,ne,se,ie,he,le,ce,ue,fe,me,de,pe,ve,ge,Ie,we,Ee,qe,ye,ke,be,Ce,Pe,Te,Ae,xe,Re,He,Se,$e,je,Le,Me,Oe,Ve,Ne,Ue,De,We,Be,Ge,Ye,Ze,ze,Je,Ke,Xe,Fe,Qe,_e,et,tt,ot,at,rt,nt,st,it,ht,lt;return{c(){t=f("h1"),o=f("a"),a=m("Table of Content"),r=d(),n=f("ul"),s=f("li"),i=f("p"),h=f("a"),l=m("Introduction"),c=d(),u=f("li"),b=f("p"),C=f("a"),P=m("Rest Clients"),T=d(),A=f("ul"),x=f("li"),R=f("a"),H=m("Vim HTTP"),S=d(),$=f("li"),j=f("a"),L=m("Vim Rest Console"),M=d(),O=f("li"),V=f("a"),N=m("COC Rest Client"),U=d(),D=f("li"),W=f("p"),B=f("a"),G=m("Conclusion"),Y=d(),Z=f("h1"),z=f("a"),J=m("Introduction"),K=d(),X=f("p"),F=m("I’ve been learning backend web development stuff lately to create an API and whatnot. We all know that a popular REST client to test API is "),Q=f("a"),_=m("Postman"),ee=m(". I like it but it is using Electron which means that it is quite heavy. Well, to be honest it is not that heavy but if I can save more RAM then why won’t I find an alternative for it."),te=d(),oe=f("p"),ae=m("I found a really cool extension on vscode where you just need a file with the specified syntax to make a request. You might know that I use Neovim as my main editor, so I’m pretty sure there’s a few that works like this. Guess what, there is."),re=d(),ne=f("h1"),se=f("a"),ie=m("Rest Clients"),he=d(),le=f("h2"),ce=f("a"),ue=m("Vim HTTP"),fe=d(),me=f("p"),de=m("I came across this nice plugin called "),pe=f("a"),ve=m("vim-http"),ge=m(". I like how it works, it has syntax highlighting for .http file which is basically a temporary file that you use to make a request. But the drawback to me is that it doesn’t format json response. So I have to format it through the API which I don’t like. So in the end, I try to find another restclient."),Ie=d(),we=f("h2"),Ee=f("a"),qe=m("Vim Rest Console"),ye=d(),ke=f("p"),be=m("I found this plugin called "),Ce=f("a"),Pe=m("vim-rest-console"),Te=m(", but when I look at its syntax, I don’t quite like it. So I never tried it in the end."),Ae=d(),xe=f("h2"),Re=f("a"),He=m("COC Rest Client"),Se=d(),$e=f("p"),je=m("I’m using a plugin called coc.nvim, and it usually has a lot of stuff. So I checked if there’s any for coc, turns out, there is. It’s called "),Le=f("a"),Me=m("coc-restclient"),Oe=m("."),Ve=d(),Ne=f("p"),Ue=m("Since most of coc plugins comes from vscode, this particular plugin works similar like the "),De=f("a"),We=m("one that vscode has"),Be=m(". Here’s an example."),Ge=d(),Ye=f("pre"),Ze=d(),ze=f("p"),Je=m("The great thing about this plugin is that, it gives the response in a json formatted file which is what I was looking for. Here’s an example of the response after running "),Ke=f("code"),Xe=m(":CocCommand rest-client.request"),Fe=m("."),Qe=d(),_e=f("pre"),et=d(),tt=f("p"),ot=m("Please refer to the repository for installation or configuration because they explain it really well, there’s no point of me explaining it here :D"),at=d(),rt=f("h1"),nt=f("a"),st=m("Conclusion"),it=d(),ht=f("p"),lt=m("I’m glad I found this plugin because I am no longer need postman. I might need it for more advanced feature, but for now, simple rest client is fine. I don’t have to leave my terminal and go to a separate program for that which is awesome. My current setup is having 3 tmux panes, 1 for Neovim, 1 for running the server and stuff, 1 for the rest client."),this.h()},l(e){t=p(e,"H1",{id:!0});var f=v(t);o=p(f,"A",{href:!0});var m=v(o);a=g(m,"Table of Content"),m.forEach(I),f.forEach(I),r=w(e),n=p(e,"UL",{});var d=v(n);s=p(d,"LI",{});var E=v(s);i=p(E,"P",{});var q=v(i);h=p(q,"A",{href:!0});var y=v(h);l=g(y,"Introduction"),y.forEach(I),q.forEach(I),E.forEach(I),c=w(d),u=p(d,"LI",{});var k=v(u);b=p(k,"P",{});var ct=v(b);C=p(ct,"A",{href:!0});var ut=v(C);P=g(ut,"Rest Clients"),ut.forEach(I),ct.forEach(I),T=w(k),A=p(k,"UL",{});var ft=v(A);x=p(ft,"LI",{});var mt=v(x);R=p(mt,"A",{href:!0});var dt=v(R);H=g(dt,"Vim HTTP"),dt.forEach(I),mt.forEach(I),S=w(ft),$=p(ft,"LI",{});var pt=v($);j=p(pt,"A",{href:!0});var vt=v(j);L=g(vt,"Vim Rest Console"),vt.forEach(I),pt.forEach(I),M=w(ft),O=p(ft,"LI",{});var gt=v(O);V=p(gt,"A",{href:!0});var It=v(V);N=g(It,"COC Rest Client"),It.forEach(I),gt.forEach(I),ft.forEach(I),k.forEach(I),U=w(d),D=p(d,"LI",{});var wt=v(D);W=p(wt,"P",{});var Et=v(W);B=p(Et,"A",{href:!0});var qt=v(B);G=g(qt,"Conclusion"),qt.forEach(I),Et.forEach(I),wt.forEach(I),d.forEach(I),Y=w(e),Z=p(e,"H1",{id:!0});var yt=v(Z);z=p(yt,"A",{href:!0});var kt=v(z);J=g(kt,"Introduction"),kt.forEach(I),yt.forEach(I),K=w(e),X=p(e,"P",{});var bt=v(X);F=g(bt,"I’ve been learning backend web development stuff lately to create an API and whatnot. We all know that a popular REST client to test API is "),Q=p(bt,"A",{href:!0,rel:!0});var Ct=v(Q);_=g(Ct,"Postman"),Ct.forEach(I),ee=g(bt,". I like it but it is using Electron which means that it is quite heavy. Well, to be honest it is not that heavy but if I can save more RAM then why won’t I find an alternative for it."),bt.forEach(I),te=w(e),oe=p(e,"P",{});var Pt=v(oe);ae=g(Pt,"I found a really cool extension on vscode where you just need a file with the specified syntax to make a request. You might know that I use Neovim as my main editor, so I’m pretty sure there’s a few that works like this. Guess what, there is."),Pt.forEach(I),re=w(e),ne=p(e,"H1",{id:!0});var Tt=v(ne);se=p(Tt,"A",{href:!0});var At=v(se);ie=g(At,"Rest Clients"),At.forEach(I),Tt.forEach(I),he=w(e),le=p(e,"H2",{id:!0});var xt=v(le);ce=p(xt,"A",{href:!0});var Rt=v(ce);ue=g(Rt,"Vim HTTP"),Rt.forEach(I),xt.forEach(I),fe=w(e),me=p(e,"P",{});var Ht=v(me);de=g(Ht,"I came across this nice plugin called "),pe=p(Ht,"A",{href:!0,rel:!0});var St=v(pe);ve=g(St,"vim-http"),St.forEach(I),ge=g(Ht,". I like how it works, it has syntax highlighting for .http file which is basically a temporary file that you use to make a request. But the drawback to me is that it doesn’t format json response. So I have to format it through the API which I don’t like. So in the end, I try to find another restclient."),Ht.forEach(I),Ie=w(e),we=p(e,"H2",{id:!0});var $t=v(we);Ee=p($t,"A",{href:!0});var jt=v(Ee);qe=g(jt,"Vim Rest Console"),jt.forEach(I),$t.forEach(I),ye=w(e),ke=p(e,"P",{});var Lt=v(ke);be=g(Lt,"I found this plugin called "),Ce=p(Lt,"A",{href:!0,rel:!0});var Mt=v(Ce);Pe=g(Mt,"vim-rest-console"),Mt.forEach(I),Te=g(Lt,", but when I look at its syntax, I don’t quite like it. So I never tried it in the end."),Lt.forEach(I),Ae=w(e),xe=p(e,"H2",{id:!0});var Ot=v(xe);Re=p(Ot,"A",{href:!0});var Vt=v(Re);He=g(Vt,"COC Rest Client"),Vt.forEach(I),Ot.forEach(I),Se=w(e),$e=p(e,"P",{});var Nt=v($e);je=g(Nt,"I’m using a plugin called coc.nvim, and it usually has a lot of stuff. So I checked if there’s any for coc, turns out, there is. It’s called "),Le=p(Nt,"A",{href:!0,rel:!0});var Ut=v(Le);Me=g(Ut,"coc-restclient"),Ut.forEach(I),Oe=g(Nt,"."),Nt.forEach(I),Ve=w(e),Ne=p(e,"P",{});var Dt=v(Ne);Ue=g(Dt,"Since most of coc plugins comes from vscode, this particular plugin works similar like the "),De=p(Dt,"A",{href:!0,rel:!0});var Wt=v(De);We=g(Wt,"one that vscode has"),Wt.forEach(I),Be=g(Dt,". Here’s an example."),Dt.forEach(I),Ge=w(e),Ye=p(e,"PRE",{class:!0}),v(Ye).forEach(I),Ze=w(e),ze=p(e,"P",{});var Bt=v(ze);Je=g(Bt,"The great thing about this plugin is that, it gives the response in a json formatted file which is what I was looking for. Here’s an example of the response after running "),Ke=p(Bt,"CODE",{});var Gt=v(Ke);Xe=g(Gt,":CocCommand rest-client.request"),Gt.forEach(I),Fe=g(Bt,"."),Bt.forEach(I),Qe=w(e),_e=p(e,"PRE",{class:!0}),v(_e).forEach(I),et=w(e),tt=p(e,"P",{});var Yt=v(tt);ot=g(Yt,"Please refer to the repository for installation or configuration because they explain it really well, there’s no point of me explaining it here :D"),Yt.forEach(I),at=w(e),rt=p(e,"H1",{id:!0});var Zt=v(rt);nt=p(Zt,"A",{href:!0});var zt=v(nt);st=g(zt,"Conclusion"),zt.forEach(I),Zt.forEach(I),it=w(e),ht=p(e,"P",{});var Jt=v(ht);lt=g(Jt,"I’m glad I found this plugin because I am no longer need postman. I might need it for more advanced feature, but for now, simple rest client is fine. I don’t have to leave my terminal and go to a separate program for that which is awesome. My current setup is having 3 tmux panes, 1 for Neovim, 1 for running the server and stuff, 1 for the rest client."),Jt.forEach(I),this.h()},h(){E(o,"href","#table-of-content"),E(t,"id","table-of-content"),E(h,"href","#introduction"),E(C,"href","#rest-clients"),E(R,"href","#vim-http"),E(j,"href","#vim-rest-console"),E(V,"href","#coc-rest-client"),E(B,"href","#conclusion"),E(z,"href","#introduction"),E(Z,"id","introduction"),E(Q,"href","https://postman.com"),E(Q,"rel","nofollow"),E(se,"href","#rest-clients"),E(ne,"id","rest-clients"),E(ce,"href","#vim-http"),E(le,"id","vim-http"),E(pe,"href","https://github.com/nicwest/vim-http"),E(pe,"rel","nofollow"),E(Ee,"href","#vim-rest-console"),E(we,"id","vim-rest-console"),E(Ce,"href","https://github.com/diepm/vim-rest-console"),E(Ce,"rel","nofollow"),E(Re,"href","#coc-rest-client"),E(xe,"id","coc-rest-client"),E(Le,"href","https://github.com/pr4th4m/coc-restclient"),E(Le,"rel","nofollow"),E(De,"href","https://marketplace.visualstudio.com/items?itemName=humao.rest-client"),E(De,"rel","nofollow"),E(Ye,"class","language-null"),E(_e,"class","language-null"),E(nt,"href","#conclusion"),E(rt,"id","conclusion")},m(e,f){q(e,t,f),y(t,o),y(o,a),q(e,r,f),q(e,n,f),y(n,s),y(s,i),y(i,h),y(h,l),y(n,c),y(n,u),y(u,b),y(b,C),y(C,P),y(u,T),y(u,A),y(A,x),y(x,R),y(R,H),y(A,S),y(A,$),y($,j),y(j,L),y(A,M),y(A,O),y(O,V),y(V,N),y(n,U),y(n,D),y(D,W),y(W,B),y(B,G),q(e,Y,f),q(e,Z,f),y(Z,z),y(z,J),q(e,K,f),q(e,X,f),y(X,F),y(X,Q),y(Q,_),y(X,ee),q(e,te,f),q(e,oe,f),y(oe,ae),q(e,re,f),q(e,ne,f),y(ne,se),y(se,ie),q(e,he,f),q(e,le,f),y(le,ce),y(ce,ue),q(e,fe,f),q(e,me,f),y(me,de),y(me,pe),y(pe,ve),y(me,ge),q(e,Ie,f),q(e,we,f),y(we,Ee),y(Ee,qe),q(e,ye,f),q(e,ke,f),y(ke,be),y(ke,Ce),y(Ce,Pe),y(ke,Te),q(e,Ae,f),q(e,xe,f),y(xe,Re),y(Re,He),q(e,Se,f),q(e,$e,f),y($e,je),y($e,Le),y(Le,Me),y($e,Oe),q(e,Ve,f),q(e,Ne,f),y(Ne,Ue),y(Ne,De),y(De,We),y(Ne,Be),q(e,Ge,f),q(e,Ye,f),Ye.innerHTML='<code class="language-null">POST http://localhost:3000/api/user/register HTTP/1.1\nContent-Type: application/json\n\n&#123;\n  &quot;username&quot;: &quot;coolguy32&quot;,\n  &quot;email&quot;: &quot;im@coolguy.me&quot;,\n  &quot;password&quot;: &quot;superstronkpassword&quot;\n&#125;</code>',q(e,Ze,f),q(e,ze,f),y(ze,Je),y(ze,Ke),y(Ke,Xe),y(ze,Fe),q(e,Qe,f),q(e,_e,f),_e.innerHTML='<code class="language-null">&#123;\n  &quot;Status&quot;: 200,\n  &quot;Message&quot;: &quot;OK&quot;\n&#125;\n\n&#123;\n  &quot;X-Powered-By&quot;: &quot;Express&quot;,\n  &quot;Content-Type&quot;: &quot;application/json; charset=utf-8&quot;,\n  &quot;Content-Length&quot;: &quot;56&quot;,\n  &quot;ETag&quot;: &quot;W/&quot;38-Eu4y++fOI89s+z200P0DrHLf1ZE&quot;&quot;,\n  &quot;Date&quot;: &quot;Thu, 16 Jul 2020 14:35:10 GMT&quot;,\n  &quot;Connection&quot;: &quot;close&quot;\n&#125;\n\n&#123;\n  &quot;msg&quot;: &quot;User 5f10659e630bfa40702160e9 has been created&quot;\n&#125;</code>',q(e,et,f),q(e,tt,f),y(tt,ot),q(e,at,f),q(e,rt,f),y(rt,nt),y(nt,st),q(e,it,f),q(e,ht,f),y(ht,lt)},p:k,d(e){e&&I(t),e&&I(r),e&&I(n),e&&I(Y),e&&I(Z),e&&I(K),e&&I(X),e&&I(te),e&&I(oe),e&&I(re),e&&I(ne),e&&I(he),e&&I(le),e&&I(fe),e&&I(me),e&&I(Ie),e&&I(we),e&&I(ye),e&&I(ke),e&&I(Ae),e&&I(xe),e&&I(Se),e&&I($e),e&&I(Ve),e&&I(Ne),e&&I(Ge),e&&I(Ye),e&&I(Ze),e&&I(ze),e&&I(Qe),e&&I(_e),e&&I(et),e&&I(tt),e&&I(at),e&&I(rt),e&&I(it),e&&I(ht)}}}function P(e){let t,o;const f=[T];let m={$$slots:{default:[C]},$$scope:{ctx:e}};for(let r=0;r<f.length;r+=1)m=a(m,f[r]);return t=new b({props:m}),{c(){r(t.$$.fragment)},l(e){n(t.$$.fragment,e)},m(e,a){s(t,e,a),o=!0},p(e,[o]){const a=0&o?i(f,[u(T)]):{};1&o&&(a.$$scope={dirty:o,ctx:e}),t.$set(a)},i(e){o||(h(t.$$.fragment,e),o=!0)},o(e){l(t.$$.fragment,e),o=!1},d(e){c(t,e)}}}const T={title:"Simple TUI-based Rest Client for (Neo)vim",date:"2020-07-16T00:00:00.000Z",desc:"A post where I try to find a TUI alternative to Postman. In other word, REST client but in TUI",tags:["neovim"]};export default class extends e{constructor(e){super(),t(this,e,null,P,o,{})}}export{T as metadata};
