import{S as a,i as t,s as n,o,p as e,r as s,u as i,v as r,x as c,y as l,z as h,w as u,e as p,t as f,a as d,f as v,g,k as m,d as y,c as E,h as b,j as w,l as k,n as I}from"../../../chunks/stores-7ca13020.js";import{P as T}from"../../../chunks/post-df226dec.js";import"../../../chunks/ProgressButton-a8599f0a.js";import"../../../chunks/theme-0c5a7997.js";function C(a){let t,n,o,e,s,i,r,c,l,h,u,T,C,P,A,L,O,S,G,j,x,N,R,D,$,U,H,F,B,M,_,K,z,W,Y,Z,q,J,Q,V,X,aa,ta,na,oa,ea,sa,ia,ra,ca,la,ha,ua,pa,fa,da,va,ga,ma,ya,Ea,ba,wa,ka,Ia,Ta,Ca,Pa,Aa,La,Oa,Sa,Ga,ja,xa,Na,Ra,Da,$a,Ua,Ha,Fa,Ba,Ma,_a,Ka,za,Wa,Ya,Za,qa,Ja,Qa,Va,Xa,at,tt,nt,ot,et,st,it,rt,ct,lt,ht,ut,pt,ft,dt,vt,gt,mt,yt,Et,bt,wt,kt,It,Tt,Ct,Pt,At,Lt,Ot,St,Gt,jt,xt,Nt,Rt,Dt,$t,Ut,Ht,Ft,Bt,Mt,_t,Kt,zt,Wt,Yt,Zt,qt,Jt,Qt,Vt,Xt,an,tn,nn,on,en,sn,rn,cn,ln,hn,un,pn,fn,dn,vn,gn,mn,yn,En,bn,wn,kn,In,Tn,Cn,Pn,An,Ln,On,Sn,Gn,jn,xn,Nn,Rn,Dn,$n,Un,Hn,Fn,Bn,Mn,_n,Kn,zn,Wn,Yn,Zn,qn,Jn,Qn,Vn,Xn,ao,to,no,oo,eo,so,io,ro,co,lo,ho,uo,po,fo,vo,go,mo,yo,Eo,bo,wo,ko,Io,To,Co,Po,Ao,Lo,Oo,So,Go,jo,xo,No,Ro,Do,$o,Uo,Ho,Fo,Bo,Mo,_o,Ko,zo,Wo,Yo,Zo,qo,Jo,Qo,Vo,Xo,ae;return{c(){t=p("h1"),n=p("a"),o=f("Table of Content"),e=d(),s=p("ul"),i=p("li"),r=p("p"),c=p("a"),l=f("Introduction"),h=d(),u=p("li"),T=p("p"),C=p("a"),P=f("Initial Setup"),A=d(),L=p("ul"),O=p("li"),S=p("a"),G=f("Removing Travis CI"),j=d(),x=p("li"),N=p("a"),R=f("Setting up Github Action"),D=d(),$=p("li"),U=p("p"),H=p("a"),F=f("Configuration"),B=d(),M=p("ul"),_=p("li"),K=p("a"),z=f("File configuration"),W=d(),Y=p("li"),Z=p("a"),q=f("See it in action"),J=d(),Q=p("li"),V=p("p"),X=p("a"),aa=f("Conclusion"),ta=d(),na=p("h1"),oa=p("a"),ea=f("Introduction"),sa=d(),ia=p("p"),ra=f("Previously, I use "),ca=p("a"),la=f("Travis CI"),ha=f(" to automatically deploy my site so if I push an update to my repo it will trigger a build and deploy it to github page. Turns out, github has a built in feature for CI/CD called "),ua=p("strong"),pa=f("Github Actions"),fa=f(". In this post, I’ll tell you how my experience using it."),da=d(),va=p("h1"),ga=p("a"),ma=f("Initial Setup"),ya=d(),Ea=p("h2"),ba=p("a"),wa=f("Removing Travis CI"),ka=d(),Ia=p("p"),Ta=f("Because my previous site is using "),Ca=p("a"),Pa=f("Travis CI"),Aa=f(", I need to delete the old "),La=p("code"),Oa=f("travis.yml"),Sa=f(". If you haven’t use any CI/CD before then just skip this step."),Ga=d(),ja=p("h2"),xa=p("a"),Na=f("Setting up Github Action"),Ra=d(),Da=p("p"),$a=f("To get started, you will need a file called whatever you want inside "),Ua=p("code"),Ha=f(".github/worksflows/"),Fa=f(" on your root project, I call it "),Ba=p("code"),Ma=f("main.yml"),_a=f(". You can also go to "),Ka=p("strong"),za=f("Actions"),Wa=f(" tab on your repo and you’ll find a bunch of preset that github gives you which you can then modify according to your wish."),Ya=d(),Za=p("h1"),qa=p("a"),Ja=f("Configuration"),Qa=d(),Va=p("h2"),Xa=p("a"),at=f("File configuration"),tt=d(),nt=p("p"),ot=f("The yaml file is pretty simple, here’s mine and I’ll explain it briefly each part."),et=d(),st=p("pre"),it=d(),rt=p("ul"),ct=p("li"),lt=p("p"),ht=p("strong"),ut=f("name"),pt=d(),ft=p("p"),dt=f("Fill this field with whatever you want, it is used as a name for your action that will show up on github."),vt=d(),gt=p("ul"),mt=p("li"),yt=p("p"),Et=p("strong"),bt=f("on:[action]:[branch]"),wt=d(),kt=p("p"),It=f("This field is to tell github what action will trigger the github action. For example, I use "),Tt=p("code"),Ct=f("push"),Pt=f(" which will trigger github action if I did a push on "),At=p("code"),Lt=f("master"),Ot=f(" branch."),St=d(),Gt=p("ul"),jt=p("li"),xt=p("p"),Nt=p("strong"),Rt=f("jobs"),Dt=d(),$t=p("p"),Ut=f("This field will be filled with jobs or commands that github action will do based on previous field."),Ht=d(),Ft=p("ul"),Bt=p("li"),Mt=p("p"),_t=p("strong"),Kt=f("build"),zt=d(),Wt=p("p"),Yt=f("This is the job name, fill it with whatever you want. In my case, I fill it with "),Zt=p("code"),qt=f("build-and-deploy"),Jt=d(),Qt=p("ul"),Vt=p("li"),Xt=p("p"),an=p("strong"),tn=f("runs-on"),nn=d(),on=p("p"),en=f("This field specify on which platform the action will run. I fill it with "),sn=p("code"),rn=f("ubuntu-latest"),cn=f("."),ln=d(),hn=p("ul"),un=p("li"),pn=p("p"),fn=p("strong"),dn=f("steps"),vn=d(),gn=p("p"),mn=f("The steps for your action will go here. There are few steps before deploying my site such as setting up node, installing dependencies, building the site, and then deploy it to github pages."),yn=d(),En=p("ul"),bn=p("li"),wn=p("p"),kn=p("strong"),In=f("name"),Tn=f("\nFill this with the name of your step, "),Cn=p("code"),Pn=f("setup node"),An=f(" for example."),Ln=d(),On=p("li"),Sn=p("p"),Gn=p("strong"),jn=f("run"),xn=f("\nThis is where you define a command to run"),Nn=d(),Rn=p("li"),Dn=p("p"),$n=p("strong"),Un=f("uses"),Hn=f("\nIf you use an external action, fill this in. It’s available "),Fn=p("a"),Bn=f("here"),Mn=d(),_n=p("li"),Kn=p("p"),zn=p("strong"),Wn=f("with"),Yn=f("\nThis is used to pass any additional data such as "),Zn=p("code"),qn=f("node-version"),Jn=f(", "),Qn=p("code"),Vn=f("GITHUB_TOKEN"),Xn=f(", etc."),ao=d(),to=p("p"),no=f("Those are my brief explanation and how I understand each fields. If you want more details, please visit "),oo=p("a"),eo=f("this documentation"),so=f("."),io=d(),ro=p("h2"),co=p("a"),lo=f("See it in action"),ho=d(),uo=p("p"),po=f("We’ve set up the config file, time to see it in action. Push the config file to the remote repo and go to github action tab."),fo=d(),vo=p("p"),go=p("img"),yo=d(),Eo=p("p"),bo=f("If we click one of the action from the list, it will go to its own page which will look like this."),wo=d(),ko=p("p"),Io=p("img"),Co=d(),Po=p("p"),Ao=f("Our action name will show up here. Try to click on that."),Lo=d(),Oo=p("p"),So=p("img"),jo=d(),xo=p("p"),No=f("It will show this. The log of our action’s jobs."),Ro=d(),Do=p("p"),$o=p("img"),Ho=d(),Fo=p("h1"),Bo=p("a"),Mo=f("Conclusion"),_o=d(),Ko=p("p"),zo=f("The reason why I moved from Travis CI is not because Travis CI is bad or anything. It’s just I want to try a new thing, plus it’s available on the same site that my repo is hosted. I can just visit one site to check on my repo or my build status."),Wo=d(),Yo=p("p"),Zo=f("Not gonna lie, I messed up the first time I did this lol. I messed up the config file (mainly because wrong indentation) and I messed up my repo branch because I had to move my "),qo=p("code"),Jo=f("source"),Qo=f(" branch to "),Vo=p("code"),Xo=f("master"),ae=f(" branch and I did it in an overcomplicated way."),this.h()},l(a){t=v(a,"H1",{id:!0});var p=g(t);n=v(p,"A",{href:!0});var f=g(n);o=m(f,"Table of Content"),f.forEach(y),p.forEach(y),e=E(a),s=v(a,"UL",{});var d=g(s);i=v(d,"LI",{});var b=g(i);r=v(b,"P",{});var w=g(r);c=v(w,"A",{href:!0});var k=g(c);l=m(k,"Introduction"),k.forEach(y),w.forEach(y),b.forEach(y),h=E(d),u=v(d,"LI",{});var I=g(u);T=v(I,"P",{});var mo=g(T);C=v(mo,"A",{href:!0});var To=g(C);P=m(To,"Initial Setup"),To.forEach(y),mo.forEach(y),A=E(I),L=v(I,"UL",{});var Go=g(L);O=v(Go,"LI",{});var Uo=g(O);S=v(Uo,"A",{href:!0});var te=g(S);G=m(te,"Removing Travis CI"),te.forEach(y),Uo.forEach(y),j=E(Go),x=v(Go,"LI",{});var ne=g(x);N=v(ne,"A",{href:!0});var oe=g(N);R=m(oe,"Setting up Github Action"),oe.forEach(y),ne.forEach(y),Go.forEach(y),I.forEach(y),D=E(d),$=v(d,"LI",{});var ee=g($);U=v(ee,"P",{});var se=g(U);H=v(se,"A",{href:!0});var ie=g(H);F=m(ie,"Configuration"),ie.forEach(y),se.forEach(y),B=E(ee),M=v(ee,"UL",{});var re=g(M);_=v(re,"LI",{});var ce=g(_);K=v(ce,"A",{href:!0});var le=g(K);z=m(le,"File configuration"),le.forEach(y),ce.forEach(y),W=E(re),Y=v(re,"LI",{});var he=g(Y);Z=v(he,"A",{href:!0});var ue=g(Z);q=m(ue,"See it in action"),ue.forEach(y),he.forEach(y),re.forEach(y),ee.forEach(y),J=E(d),Q=v(d,"LI",{});var pe=g(Q);V=v(pe,"P",{});var fe=g(V);X=v(fe,"A",{href:!0});var de=g(X);aa=m(de,"Conclusion"),de.forEach(y),fe.forEach(y),pe.forEach(y),d.forEach(y),ta=E(a),na=v(a,"H1",{id:!0});var ve=g(na);oa=v(ve,"A",{href:!0});var ge=g(oa);ea=m(ge,"Introduction"),ge.forEach(y),ve.forEach(y),sa=E(a),ia=v(a,"P",{});var me=g(ia);ra=m(me,"Previously, I use "),ca=v(me,"A",{href:!0,rel:!0});var ye=g(ca);la=m(ye,"Travis CI"),ye.forEach(y),ha=m(me," to automatically deploy my site so if I push an update to my repo it will trigger a build and deploy it to github page. Turns out, github has a built in feature for CI/CD called "),ua=v(me,"STRONG",{});var Ee=g(ua);pa=m(Ee,"Github Actions"),Ee.forEach(y),fa=m(me,". In this post, I’ll tell you how my experience using it."),me.forEach(y),da=E(a),va=v(a,"H1",{id:!0});var be=g(va);ga=v(be,"A",{href:!0});var we=g(ga);ma=m(we,"Initial Setup"),we.forEach(y),be.forEach(y),ya=E(a),Ea=v(a,"H2",{id:!0});var ke=g(Ea);ba=v(ke,"A",{href:!0});var Ie=g(ba);wa=m(Ie,"Removing Travis CI"),Ie.forEach(y),ke.forEach(y),ka=E(a),Ia=v(a,"P",{});var Te=g(Ia);Ta=m(Te,"Because my previous site is using "),Ca=v(Te,"A",{href:!0,rel:!0});var Ce=g(Ca);Pa=m(Ce,"Travis CI"),Ce.forEach(y),Aa=m(Te,", I need to delete the old "),La=v(Te,"CODE",{});var Pe=g(La);Oa=m(Pe,"travis.yml"),Pe.forEach(y),Sa=m(Te,". If you haven’t use any CI/CD before then just skip this step."),Te.forEach(y),Ga=E(a),ja=v(a,"H2",{id:!0});var Ae=g(ja);xa=v(Ae,"A",{href:!0});var Le=g(xa);Na=m(Le,"Setting up Github Action"),Le.forEach(y),Ae.forEach(y),Ra=E(a),Da=v(a,"P",{});var Oe=g(Da);$a=m(Oe,"To get started, you will need a file called whatever you want inside "),Ua=v(Oe,"CODE",{});var Se=g(Ua);Ha=m(Se,".github/worksflows/"),Se.forEach(y),Fa=m(Oe," on your root project, I call it "),Ba=v(Oe,"CODE",{});var Ge=g(Ba);Ma=m(Ge,"main.yml"),Ge.forEach(y),_a=m(Oe,". You can also go to "),Ka=v(Oe,"STRONG",{});var je=g(Ka);za=m(je,"Actions"),je.forEach(y),Wa=m(Oe," tab on your repo and you’ll find a bunch of preset that github gives you which you can then modify according to your wish."),Oe.forEach(y),Ya=E(a),Za=v(a,"H1",{id:!0});var xe=g(Za);qa=v(xe,"A",{href:!0});var Ne=g(qa);Ja=m(Ne,"Configuration"),Ne.forEach(y),xe.forEach(y),Qa=E(a),Va=v(a,"H2",{id:!0});var Re=g(Va);Xa=v(Re,"A",{href:!0});var De=g(Xa);at=m(De,"File configuration"),De.forEach(y),Re.forEach(y),tt=E(a),nt=v(a,"P",{});var $e=g(nt);ot=m($e,"The yaml file is pretty simple, here’s mine and I’ll explain it briefly each part."),$e.forEach(y),et=E(a),st=v(a,"PRE",{class:!0}),g(st).forEach(y),it=E(a),rt=v(a,"UL",{});var Ue=g(rt);ct=v(Ue,"LI",{});var He=g(ct);lt=v(He,"P",{});var Fe=g(lt);ht=v(Fe,"STRONG",{});var Be=g(ht);ut=m(Be,"name"),Be.forEach(y),Fe.forEach(y),pt=E(He),ft=v(He,"P",{});var Me=g(ft);dt=m(Me,"Fill this field with whatever you want, it is used as a name for your action that will show up on github."),Me.forEach(y),He.forEach(y),Ue.forEach(y),vt=E(a),gt=v(a,"UL",{});var _e=g(gt);mt=v(_e,"LI",{});var Ke=g(mt);yt=v(Ke,"P",{});var ze=g(yt);Et=v(ze,"STRONG",{});var We=g(Et);bt=m(We,"on:[action]:[branch]"),We.forEach(y),ze.forEach(y),wt=E(Ke),kt=v(Ke,"P",{});var Ye=g(kt);It=m(Ye,"This field is to tell github what action will trigger the github action. For example, I use "),Tt=v(Ye,"CODE",{});var Ze=g(Tt);Ct=m(Ze,"push"),Ze.forEach(y),Pt=m(Ye," which will trigger github action if I did a push on "),At=v(Ye,"CODE",{});var qe=g(At);Lt=m(qe,"master"),qe.forEach(y),Ot=m(Ye," branch."),Ye.forEach(y),Ke.forEach(y),_e.forEach(y),St=E(a),Gt=v(a,"UL",{});var Je=g(Gt);jt=v(Je,"LI",{});var Qe=g(jt);xt=v(Qe,"P",{});var Ve=g(xt);Nt=v(Ve,"STRONG",{});var Xe=g(Nt);Rt=m(Xe,"jobs"),Xe.forEach(y),Ve.forEach(y),Dt=E(Qe),$t=v(Qe,"P",{});var as=g($t);Ut=m(as,"This field will be filled with jobs or commands that github action will do based on previous field."),as.forEach(y),Qe.forEach(y),Je.forEach(y),Ht=E(a),Ft=v(a,"UL",{});var ts=g(Ft);Bt=v(ts,"LI",{});var ns=g(Bt);Mt=v(ns,"P",{});var os=g(Mt);_t=v(os,"STRONG",{});var es=g(_t);Kt=m(es,"build"),es.forEach(y),os.forEach(y),zt=E(ns),Wt=v(ns,"P",{});var ss=g(Wt);Yt=m(ss,"This is the job name, fill it with whatever you want. In my case, I fill it with "),Zt=v(ss,"CODE",{});var is=g(Zt);qt=m(is,"build-and-deploy"),is.forEach(y),ss.forEach(y),ns.forEach(y),ts.forEach(y),Jt=E(a),Qt=v(a,"UL",{});var rs=g(Qt);Vt=v(rs,"LI",{});var cs=g(Vt);Xt=v(cs,"P",{});var ls=g(Xt);an=v(ls,"STRONG",{});var hs=g(an);tn=m(hs,"runs-on"),hs.forEach(y),ls.forEach(y),nn=E(cs),on=v(cs,"P",{});var us=g(on);en=m(us,"This field specify on which platform the action will run. I fill it with "),sn=v(us,"CODE",{});var ps=g(sn);rn=m(ps,"ubuntu-latest"),ps.forEach(y),cn=m(us,"."),us.forEach(y),cs.forEach(y),rs.forEach(y),ln=E(a),hn=v(a,"UL",{});var fs=g(hn);un=v(fs,"LI",{});var ds=g(un);pn=v(ds,"P",{});var vs=g(pn);fn=v(vs,"STRONG",{});var gs=g(fn);dn=m(gs,"steps"),gs.forEach(y),vs.forEach(y),vn=E(ds),gn=v(ds,"P",{});var ms=g(gn);mn=m(ms,"The steps for your action will go here. There are few steps before deploying my site such as setting up node, installing dependencies, building the site, and then deploy it to github pages."),ms.forEach(y),yn=E(ds),En=v(ds,"UL",{});var ys=g(En);bn=v(ys,"LI",{});var Es=g(bn);wn=v(Es,"P",{});var bs=g(wn);kn=v(bs,"STRONG",{});var ws=g(kn);In=m(ws,"name"),ws.forEach(y),Tn=m(bs,"\nFill this with the name of your step, "),Cn=v(bs,"CODE",{});var ks=g(Cn);Pn=m(ks,"setup node"),ks.forEach(y),An=m(bs," for example."),bs.forEach(y),Es.forEach(y),Ln=E(ys),On=v(ys,"LI",{});var Is=g(On);Sn=v(Is,"P",{});var Ts=g(Sn);Gn=v(Ts,"STRONG",{});var Cs=g(Gn);jn=m(Cs,"run"),Cs.forEach(y),xn=m(Ts,"\nThis is where you define a command to run"),Ts.forEach(y),Is.forEach(y),Nn=E(ys),Rn=v(ys,"LI",{});var Ps=g(Rn);Dn=v(Ps,"P",{});var As=g(Dn);$n=v(As,"STRONG",{});var Ls=g($n);Un=m(Ls,"uses"),Ls.forEach(y),Hn=m(As,"\nIf you use an external action, fill this in. It’s available "),Fn=v(As,"A",{href:!0,rel:!0});var Os=g(Fn);Bn=m(Os,"here"),Os.forEach(y),As.forEach(y),Ps.forEach(y),Mn=E(ys),_n=v(ys,"LI",{});var Ss=g(_n);Kn=v(Ss,"P",{});var Gs=g(Kn);zn=v(Gs,"STRONG",{});var js=g(zn);Wn=m(js,"with"),js.forEach(y),Yn=m(Gs,"\nThis is used to pass any additional data such as "),Zn=v(Gs,"CODE",{});var xs=g(Zn);qn=m(xs,"node-version"),xs.forEach(y),Jn=m(Gs,", "),Qn=v(Gs,"CODE",{});var Ns=g(Qn);Vn=m(Ns,"GITHUB_TOKEN"),Ns.forEach(y),Xn=m(Gs,", etc."),Gs.forEach(y),Ss.forEach(y),ys.forEach(y),ds.forEach(y),fs.forEach(y),ao=E(a),to=v(a,"P",{});var Rs=g(to);no=m(Rs,"Those are my brief explanation and how I understand each fields. If you want more details, please visit "),oo=v(Rs,"A",{href:!0,rel:!0});var Ds=g(oo);eo=m(Ds,"this documentation"),Ds.forEach(y),so=m(Rs,"."),Rs.forEach(y),io=E(a),ro=v(a,"H2",{id:!0});var $s=g(ro);co=v($s,"A",{href:!0});var Us=g(co);lo=m(Us,"See it in action"),Us.forEach(y),$s.forEach(y),ho=E(a),uo=v(a,"P",{});var Hs=g(uo);po=m(Hs,"We’ve set up the config file, time to see it in action. Push the config file to the remote repo and go to github action tab."),Hs.forEach(y),fo=E(a),vo=v(a,"P",{});var Fs=g(vo);go=v(Fs,"IMG",{src:!0,alt:!0}),Fs.forEach(y),yo=E(a),Eo=v(a,"P",{});var Bs=g(Eo);bo=m(Bs,"If we click one of the action from the list, it will go to its own page which will look like this."),Bs.forEach(y),wo=E(a),ko=v(a,"P",{});var Ms=g(ko);Io=v(Ms,"IMG",{src:!0,alt:!0}),Ms.forEach(y),Co=E(a),Po=v(a,"P",{});var _s=g(Po);Ao=m(_s,"Our action name will show up here. Try to click on that."),_s.forEach(y),Lo=E(a),Oo=v(a,"P",{});var Ks=g(Oo);So=v(Ks,"IMG",{src:!0,alt:!0}),Ks.forEach(y),jo=E(a),xo=v(a,"P",{});var zs=g(xo);No=m(zs,"It will show this. The log of our action’s jobs."),zs.forEach(y),Ro=E(a),Do=v(a,"P",{});var Ws=g(Do);$o=v(Ws,"IMG",{src:!0,alt:!0}),Ws.forEach(y),Ho=E(a),Fo=v(a,"H1",{id:!0});var Ys=g(Fo);Bo=v(Ys,"A",{href:!0});var Zs=g(Bo);Mo=m(Zs,"Conclusion"),Zs.forEach(y),Ys.forEach(y),_o=E(a),Ko=v(a,"P",{});var qs=g(Ko);zo=m(qs,"The reason why I moved from Travis CI is not because Travis CI is bad or anything. It’s just I want to try a new thing, plus it’s available on the same site that my repo is hosted. I can just visit one site to check on my repo or my build status."),qs.forEach(y),Wo=E(a),Yo=v(a,"P",{});var Js=g(Yo);Zo=m(Js,"Not gonna lie, I messed up the first time I did this lol. I messed up the config file (mainly because wrong indentation) and I messed up my repo branch because I had to move my "),qo=v(Js,"CODE",{});var Qs=g(qo);Jo=m(Qs,"source"),Qs.forEach(y),Qo=m(Js," branch to "),Vo=v(Js,"CODE",{});var Vs=g(Vo);Xo=m(Vs,"master"),Vs.forEach(y),ae=m(Js," branch and I did it in an overcomplicated way."),Js.forEach(y),this.h()},h(){b(n,"href","#table-of-content"),b(t,"id","table-of-content"),b(c,"href","#introduction"),b(C,"href","#initial-setup"),b(S,"href","#removing-travis-ci"),b(N,"href","#setting-up-github-action"),b(H,"href","#configuration"),b(K,"href","#file-configuration"),b(Z,"href","#see-it-in-action"),b(X,"href","#conclusion"),b(oa,"href","#introduction"),b(na,"id","introduction"),b(ca,"href","https://travis-ci.org"),b(ca,"rel","nofollow"),b(ga,"href","#initial-setup"),b(va,"id","initial-setup"),b(ba,"href","#removing-travis-ci"),b(Ea,"id","removing-travis-ci"),b(Ca,"href","https://travis-ci.org"),b(Ca,"rel","nofollow"),b(xa,"href","#setting-up-github-action"),b(ja,"id","setting-up-github-action"),b(qa,"href","#configuration"),b(Za,"id","configuration"),b(Xa,"href","#file-configuration"),b(Va,"id","file-configuration"),b(st,"class","language-yaml"),b(Fn,"href","https://github.com/marketplace?type=actions"),b(Fn,"rel","nofollow"),b(oo,"href","https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow"),b(oo,"rel","nofollow"),b(co,"href","#see-it-in-action"),b(ro,"id","see-it-in-action"),go.src!==(mo="/assets/post/github-actions/1.png")&&b(go,"src","/assets/post/github-actions/1.png"),b(go,"alt","action tab"),Io.src!==(To="/assets/post/github-actions/3.png")&&b(Io,"src","/assets/post/github-actions/3.png"),b(Io,"alt","action page"),So.src!==(Go="/assets/post/github-actions/4.png")&&b(So,"src","/assets/post/github-actions/4.png"),b(So,"alt","action name"),$o.src!==(Uo="/assets/post/github-actions/5.png")&&b($o,"src","/assets/post/github-actions/5.png"),b($o,"alt","action jobs"),b(Bo,"href","#conclusion"),b(Fo,"id","conclusion")},m(a,p){w(a,t,p),k(t,n),k(n,o),w(a,e,p),w(a,s,p),k(s,i),k(i,r),k(r,c),k(c,l),k(s,h),k(s,u),k(u,T),k(T,C),k(C,P),k(u,A),k(u,L),k(L,O),k(O,S),k(S,G),k(L,j),k(L,x),k(x,N),k(N,R),k(s,D),k(s,$),k($,U),k(U,H),k(H,F),k($,B),k($,M),k(M,_),k(_,K),k(K,z),k(M,W),k(M,Y),k(Y,Z),k(Z,q),k(s,J),k(s,Q),k(Q,V),k(V,X),k(X,aa),w(a,ta,p),w(a,na,p),k(na,oa),k(oa,ea),w(a,sa,p),w(a,ia,p),k(ia,ra),k(ia,ca),k(ca,la),k(ia,ha),k(ia,ua),k(ua,pa),k(ia,fa),w(a,da,p),w(a,va,p),k(va,ga),k(ga,ma),w(a,ya,p),w(a,Ea,p),k(Ea,ba),k(ba,wa),w(a,ka,p),w(a,Ia,p),k(Ia,Ta),k(Ia,Ca),k(Ca,Pa),k(Ia,Aa),k(Ia,La),k(La,Oa),k(Ia,Sa),w(a,Ga,p),w(a,ja,p),k(ja,xa),k(xa,Na),w(a,Ra,p),w(a,Da,p),k(Da,$a),k(Da,Ua),k(Ua,Ha),k(Da,Fa),k(Da,Ba),k(Ba,Ma),k(Da,_a),k(Da,Ka),k(Ka,za),k(Da,Wa),w(a,Ya,p),w(a,Za,p),k(Za,qa),k(qa,Ja),w(a,Qa,p),w(a,Va,p),k(Va,Xa),k(Xa,at),w(a,tt,p),w(a,nt,p),k(nt,ot),w(a,et,p),w(a,st,p),st.innerHTML='<code class="language-yaml"><span class="token key atrule">name</span><span class="token punctuation">:</span> Build and deploy\n\n<span class="token key atrule">on</span><span class="token punctuation">:</span>\n  <span class="token key atrule">push</span><span class="token punctuation">:</span>\n    <span class="token key atrule">branches</span><span class="token punctuation">:</span> master\n\n<span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2\n\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> setup node\n      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v2<span class="token punctuation">-</span>beta\n      <span class="token key atrule">with</span><span class="token punctuation">:</span>\n        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">\'12.x\'</span>\n\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install deps\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install <span class="token punctuation">-</span><span class="token punctuation">-</span>production\n\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> build site\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build\n\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> deploy site\n      <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3\n      <span class="token key atrule">with</span><span class="token punctuation">:</span>\n        <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> secrets.GITHUB_TOKEN <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span>\n        <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> ./public</code>',w(a,it,p),w(a,rt,p),k(rt,ct),k(ct,lt),k(lt,ht),k(ht,ut),k(ct,pt),k(ct,ft),k(ft,dt),w(a,vt,p),w(a,gt,p),k(gt,mt),k(mt,yt),k(yt,Et),k(Et,bt),k(mt,wt),k(mt,kt),k(kt,It),k(kt,Tt),k(Tt,Ct),k(kt,Pt),k(kt,At),k(At,Lt),k(kt,Ot),w(a,St,p),w(a,Gt,p),k(Gt,jt),k(jt,xt),k(xt,Nt),k(Nt,Rt),k(jt,Dt),k(jt,$t),k($t,Ut),w(a,Ht,p),w(a,Ft,p),k(Ft,Bt),k(Bt,Mt),k(Mt,_t),k(_t,Kt),k(Bt,zt),k(Bt,Wt),k(Wt,Yt),k(Wt,Zt),k(Zt,qt),w(a,Jt,p),w(a,Qt,p),k(Qt,Vt),k(Vt,Xt),k(Xt,an),k(an,tn),k(Vt,nn),k(Vt,on),k(on,en),k(on,sn),k(sn,rn),k(on,cn),w(a,ln,p),w(a,hn,p),k(hn,un),k(un,pn),k(pn,fn),k(fn,dn),k(un,vn),k(un,gn),k(gn,mn),k(un,yn),k(un,En),k(En,bn),k(bn,wn),k(wn,kn),k(kn,In),k(wn,Tn),k(wn,Cn),k(Cn,Pn),k(wn,An),k(En,Ln),k(En,On),k(On,Sn),k(Sn,Gn),k(Gn,jn),k(Sn,xn),k(En,Nn),k(En,Rn),k(Rn,Dn),k(Dn,$n),k($n,Un),k(Dn,Hn),k(Dn,Fn),k(Fn,Bn),k(En,Mn),k(En,_n),k(_n,Kn),k(Kn,zn),k(zn,Wn),k(Kn,Yn),k(Kn,Zn),k(Zn,qn),k(Kn,Jn),k(Kn,Qn),k(Qn,Vn),k(Kn,Xn),w(a,ao,p),w(a,to,p),k(to,no),k(to,oo),k(oo,eo),k(to,so),w(a,io,p),w(a,ro,p),k(ro,co),k(co,lo),w(a,ho,p),w(a,uo,p),k(uo,po),w(a,fo,p),w(a,vo,p),k(vo,go),w(a,yo,p),w(a,Eo,p),k(Eo,bo),w(a,wo,p),w(a,ko,p),k(ko,Io),w(a,Co,p),w(a,Po,p),k(Po,Ao),w(a,Lo,p),w(a,Oo,p),k(Oo,So),w(a,jo,p),w(a,xo,p),k(xo,No),w(a,Ro,p),w(a,Do,p),k(Do,$o),w(a,Ho,p),w(a,Fo,p),k(Fo,Bo),k(Bo,Mo),w(a,_o,p),w(a,Ko,p),k(Ko,zo),w(a,Wo,p),w(a,Yo,p),k(Yo,Zo),k(Yo,qo),k(qo,Jo),k(Yo,Qo),k(Yo,Vo),k(Vo,Xo),k(Yo,ae)},p:I,d(a){a&&y(t),a&&y(e),a&&y(s),a&&y(ta),a&&y(na),a&&y(sa),a&&y(ia),a&&y(da),a&&y(va),a&&y(ya),a&&y(Ea),a&&y(ka),a&&y(Ia),a&&y(Ga),a&&y(ja),a&&y(Ra),a&&y(Da),a&&y(Ya),a&&y(Za),a&&y(Qa),a&&y(Va),a&&y(tt),a&&y(nt),a&&y(et),a&&y(st),a&&y(it),a&&y(rt),a&&y(vt),a&&y(gt),a&&y(St),a&&y(Gt),a&&y(Ht),a&&y(Ft),a&&y(Jt),a&&y(Qt),a&&y(ln),a&&y(hn),a&&y(ao),a&&y(to),a&&y(io),a&&y(ro),a&&y(ho),a&&y(uo),a&&y(fo),a&&y(vo),a&&y(yo),a&&y(Eo),a&&y(wo),a&&y(ko),a&&y(Co),a&&y(Po),a&&y(Lo),a&&y(Oo),a&&y(jo),a&&y(xo),a&&y(Ro),a&&y(Do),a&&y(Ho),a&&y(Fo),a&&y(_o),a&&y(Ko),a&&y(Wo),a&&y(Yo)}}}function P(a){let t,n;const p=[A];let f={$$slots:{default:[C]},$$scope:{ctx:a}};for(let e=0;e<p.length;e+=1)f=o(f,p[e]);return t=new T({props:f}),{c(){e(t.$$.fragment)},l(a){s(t.$$.fragment,a)},m(a,o){i(t,a,o),n=!0},p(a,[n]){const o=0&n?r(p,[u(A)]):{};1&n&&(o.$$scope={dirty:n,ctx:a}),t.$set(o)},i(a){n||(c(t.$$.fragment,a),n=!0)},o(a){l(t.$$.fragment,a),n=!1},d(a){h(t,a)}}}const A={title:"Using github actions for SSG deployment",date:"2020-08-01T00:00:00.000Z",desc:"Utilizing github action to automate boring stuff which is building and deploying SSG manually",tags:["website"]};export default class extends a{constructor(a){super(),t(this,a,null,P,n,{})}}export{A as metadata};
