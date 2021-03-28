import{S as a,i as n,s as e,o as s,p as o,r as t,u as r,v as c,x as p,y as i,z as l,w as h,e as u,t as d,a as f,f as m,g,k,d as b,c as w,h as v,j as E,l as y,n as I}from"../../../chunks/stores-7ca13020.js";import{P as T}from"../../../chunks/post-df226dec.js";import"../../../chunks/ProgressButton-a8599f0a.js";import"../../../chunks/theme-0c5a7997.js";function P(a){let n,e,s,o,t,r,c,p,i,l,h,T,P,C,A,x,L,H,M,O,j,R,D,B,$,q,S,G,N,F,Y,U,z,X,W,Z,J,K,Q,V,_,aa,na,ea,sa,oa,ta,ra,ca,pa,ia,la,ha,ua,da,fa,ma,ga,ka,ba,wa,va,Ea,ya,Ia,Ta,Pa,Ca,Aa,xa,La,Ha,Ma,Oa,ja,Ra,Da,Ba,$a,qa,Sa,Ga,Na,Fa,Ya,Ua,za,Xa,Wa,Za,Ja,Ka,Qa,Va,_a,an,nn,en,sn,on,tn,rn,cn,pn,ln,hn,un,dn,fn,mn,gn,kn,bn,wn,vn,En,yn,In,Tn,Pn,Cn,An,xn,Ln,Hn,Mn,On,jn,Rn,Dn,Bn,$n,qn,Sn,Gn,Nn,Fn,Yn,Un,zn,Xn,Wn,Zn,Jn,Kn,Qn,Vn,_n,ae,ne,ee,se,oe,te,re,ce,pe,ie,le,he,ue,de,fe,me,ge,ke,be,we,ve,Ee,ye,Ie,Te,Pe,Ce,Ae,xe,Le,He,Me,Oe,je,Re,De,Be,$e,qe,Se,Ge,Ne,Fe,Ye,Ue,ze,Xe,We,Ze,Je,Ke,Qe,Ve,_e,as,ns,es,ss,os,ts,rs,cs,ps,is,ls,hs,us,ds,fs,ms,gs,ks,bs,ws,vs,Es,ys,Is,Ts,Ps,Cs,As,xs,Ls,Hs,Ms,Os,js,Rs,Ds,Bs,$s,qs,Ss,Gs,Ns,Fs,Ys,Us,zs,Xs,Ws,Zs,Js,Ks,Qs,Vs,_s,ao,no,eo,so,oo,to,ro,co;return{c(){n=u("h1"),e=u("a"),s=d("Table of Content"),o=f(),t=u("ul"),r=u("li"),c=u("p"),p=u("a"),i=d("Introduction"),l=f(),h=u("li"),T=u("p"),P=u("a"),C=d("Prerequisite"),A=f(),x=u("li"),L=u("p"),H=u("a"),M=d("Making The Script"),O=f(),j=u("ul"),R=u("li"),D=u("a"),B=d("Backdrop"),$=f(),q=u("li"),S=u("a"),G=d("Border"),N=f(),F=u("li"),Y=u("a"),U=d("Shadow"),z=f(),X=u("li"),W=u("a"),Z=d("Rounded Corner"),J=f(),K=u("li"),Q=u("a"),V=d("Combining Them All"),_=f(),aa=u("li"),na=u("p"),ea=u("a"),sa=d("Conclusion"),oa=f(),ta=u("h1"),ra=u("a"),ca=d("Introduction"),pa=f(),ia=u("p"),la=d("Let’s make our screenshot prettier by using a software called "),ha=u("a"),ua=d("Imagemagick"),da=d(". In this post, we will add some fancy effects like backdrop, shadow, border, and rounded corner with a simple script."),fa=f(),ma=u("h1"),ga=u("a"),ka=d("Prerequisite"),ba=f(),wa=u("p"),va=d("Before we make the script, there are a few things that you’ll need to prepare."),Ea=f(),ya=u("ul"),Ia=u("li"),Ta=u("strong"),Pa=d("Imagemagick"),Ca=d(" - obviously"),Aa=f(),xa=u("li"),La=u("strong"),Ha=d("Any screenshot software"),Ma=d(" - I use "),Oa=u("a"),ja=d("flameshot"),Ra=f(),Da=u("li"),Ba=u("strong"),$a=d("Clipboard"),qa=d(" - I use "),Sa=u("a"),Ga=d("xclip"),Na=d(" (optional)"),Fa=f(),Ya=u("p"),Ua=d("After having all of that, let’s make the script."),za=f(),Xa=u("h1"),Wa=u("a"),Za=d("Making The Script"),Ja=f(),Ka=u("h2"),Qa=u("a"),Va=d("Backdrop"),_a=f(),an=u("p"),nn=d("Backdrop is actually just a really thicc border. Here’s how to do that on imagemagick."),en=f(),sn=u("pre"),on=f(),tn=u("p"),rn=d("You can adjust the color by changing the "),cn=u("code"),pn=d("bordercolor"),ln=d(" value. I use white because it looks nice to me. You can use HEX, RGB, and RGBA format. For more references, go to "),hn=u("a"),un=d("their website"),dn=d("."),fn=f(),mn=u("p"),gn=d("To adjust the thickness of it, you change the "),kn=u("code"),bn=d("border"),wn=d(" value. I use 10 here because it’s not too big and it’s not too small for me."),vn=f(),En=u("h2"),yn=u("a"),In=d("Border"),Tn=f(),Pn=u("p"),Cn=d("Previously, we made a thicc border as a backdrop, this time we make a thin border before the shadow"),An=f(),xn=u("pre"),Ln=f(),Hn=u("p"),Mn=d("It’s basically the same, just with a different value."),On=f(),jn=u("h2"),Rn=u("a"),Dn=d("Shadow"),Bn=f(),$n=u("p"),qn=d("To give you screenshot a shadow is quite simple. Here’s how to do it."),Sn=f(),Gn=u("pre"),Nn=f(),Fn=u("p"),Yn=d("To change the shadow color, adjust the first "),Un=u("code"),zn=d("background"),Xn=d(" value. I use black because black shadow is the only one that is acceptable to me. The "),Wn=u("code"),Zn=d("40"),Jn=d(" here is the shadow opacity, you can change it to whatever you like. The shadow radius here is "),Kn=u("code"),Qn=d("5"),Vn=d(". This will add to your backdrop thickness. If you have "),_n=u("code"),ae=d("10"),ne=d(" of backdrop and you have "),ee=u("code"),se=d("5"),oe=d(" of border radius then you’ll end up with "),te=u("code"),re=d("15"),ce=d(" of backdrop."),pe=f(),ie=u("h2"),le=u("a"),he=d("Rounded Corner"),ue=f(),de=u("p"),fe=d("It’s quite a lengthy one, but don’t worry. The only thing we’d change is the border radius."),me=f(),ge=u("pre"),ke=f(),be=u("p"),we=d("The border radius here is "),ve=u("code"),Ee=d("5"),ye=d(". Change every "),Ie=u("code"),Te=d("5"),Pe=d(" to whatever you want like "),Ce=u("code"),Ae=d("10"),xe=d(" for example but "),Le=u("code"),He=d("5"),Me=d(" is the sweet spot for me. For more technical explanation and details you can refer to "),Oe=u("a"),je=d("their website"),Re=f(),De=u("h2"),Be=u("a"),$e=d("Combining Them All"),qe=f(),Se=u("p"),Ge=d("Those are all the parts that we need. Let’s combine them together. Make a file called whatever you want and make it executable by using "),Ne=u("code"),Fe=d("chmod +x filename"),Ye=d(" and edit the file."),Ue=f(),ze=u("pre"),Xe=f(),We=u("p"),Ze=d("I use "),Je=u("code"),Ke=d("dash"),Qe=d(" for my script, but "),Ve=u("code"),_e=d("bash"),as=d(" or "),ns=u("code"),es=d("zsh"),ss=d(" will do just fine. I don’t know if it’ll work with "),os=u("code"),ts=d("fish"),rs=d(" though, I suppose it’ll work just fine. Add your screenshot program to take the image that we will be using. I’m using "),cs=u("a"),ps=d("Flameshot"),is=d(" so it will look like this."),ls=f(),hs=u("pre"),us=f(),ds=u("p"),fs=d("I store the image on "),ms=u("code"),gs=d("/tmp"),ks=d(" directory because I will copy it to my clipboard and won’t be using the original image."),bs=f(),ws=u("pre"),vs=f(),Es=u("p"),ys=d("The first effect I apply is the rounded corner and store the result in "),Is=u("code"),Ts=d("/tmp/image.png"),Ps=d("."),Cs=f(),As=u("pre"),xs=f(),Ls=u("p"),Hs=d("Next one is the shadow. I don’t use the small border because it looks weird on a smaller screenshot. You can use it if you like."),Ms=f(),Os=u("pre"),js=f(),Rs=u("p"),Ds=d("The last effect I apply is white backdrop. Next step is optional, but if you want to you can add it as well."),Bs=f(),$s=u("pre"),qs=f(),Ss=u("p"),Gs=d("I added the last line to copy the result into my clipboard so I can easily paste it anywhere and don’t have to delete the screenshot when I no longer need it. Here’s the result."),Ns=f(),Fs=u("p"),Ys=u("img"),zs=f(),Xs=u("p"),Ws=d("Here’s another version"),Zs=f(),Js=u("p"),Ks=u("img"),Vs=f(),_s=u("h1"),ao=u("a"),no=d("Conclusion"),eo=f(),so=u("p"),oo=d("Imagemagick is a powerful CLI tools to manipulate an image. It can do so much more, if you’re interested on that then you can go to "),to=u("a"),ro=d("their website"),co=d(" for some advanced guide. That’s all for this post, thanks for reading and have a nice day ツ"),this.h()},l(a){n=m(a,"H1",{id:!0});var u=g(n);e=m(u,"A",{href:!0});var d=g(e);s=k(d,"Table of Content"),d.forEach(b),u.forEach(b),o=w(a),t=m(a,"UL",{});var f=g(t);r=m(f,"LI",{});var v=g(r);c=m(v,"P",{});var E=g(c);p=m(E,"A",{href:!0});var y=g(p);i=k(y,"Introduction"),y.forEach(b),E.forEach(b),v.forEach(b),l=w(f),h=m(f,"LI",{});var I=g(h);T=m(I,"P",{});var Us=g(T);P=m(Us,"A",{href:!0});var Qs=g(P);C=k(Qs,"Prerequisite"),Qs.forEach(b),Us.forEach(b),I.forEach(b),A=w(f),x=m(f,"LI",{});var po=g(x);L=m(po,"P",{});var io=g(L);H=m(io,"A",{href:!0});var lo=g(H);M=k(lo,"Making The Script"),lo.forEach(b),io.forEach(b),O=w(po),j=m(po,"UL",{});var ho=g(j);R=m(ho,"LI",{});var uo=g(R);D=m(uo,"A",{href:!0});var fo=g(D);B=k(fo,"Backdrop"),fo.forEach(b),uo.forEach(b),$=w(ho),q=m(ho,"LI",{});var mo=g(q);S=m(mo,"A",{href:!0});var go=g(S);G=k(go,"Border"),go.forEach(b),mo.forEach(b),N=w(ho),F=m(ho,"LI",{});var ko=g(F);Y=m(ko,"A",{href:!0});var bo=g(Y);U=k(bo,"Shadow"),bo.forEach(b),ko.forEach(b),z=w(ho),X=m(ho,"LI",{});var wo=g(X);W=m(wo,"A",{href:!0});var vo=g(W);Z=k(vo,"Rounded Corner"),vo.forEach(b),wo.forEach(b),J=w(ho),K=m(ho,"LI",{});var Eo=g(K);Q=m(Eo,"A",{href:!0});var yo=g(Q);V=k(yo,"Combining Them All"),yo.forEach(b),Eo.forEach(b),ho.forEach(b),po.forEach(b),_=w(f),aa=m(f,"LI",{});var Io=g(aa);na=m(Io,"P",{});var To=g(na);ea=m(To,"A",{href:!0});var Po=g(ea);sa=k(Po,"Conclusion"),Po.forEach(b),To.forEach(b),Io.forEach(b),f.forEach(b),oa=w(a),ta=m(a,"H1",{id:!0});var Co=g(ta);ra=m(Co,"A",{href:!0});var Ao=g(ra);ca=k(Ao,"Introduction"),Ao.forEach(b),Co.forEach(b),pa=w(a),ia=m(a,"P",{});var xo=g(ia);la=k(xo,"Let’s make our screenshot prettier by using a software called "),ha=m(xo,"A",{href:!0,rel:!0});var Lo=g(ha);ua=k(Lo,"Imagemagick"),Lo.forEach(b),da=k(xo,". In this post, we will add some fancy effects like backdrop, shadow, border, and rounded corner with a simple script."),xo.forEach(b),fa=w(a),ma=m(a,"H1",{id:!0});var Ho=g(ma);ga=m(Ho,"A",{href:!0});var Mo=g(ga);ka=k(Mo,"Prerequisite"),Mo.forEach(b),Ho.forEach(b),ba=w(a),wa=m(a,"P",{});var Oo=g(wa);va=k(Oo,"Before we make the script, there are a few things that you’ll need to prepare."),Oo.forEach(b),Ea=w(a),ya=m(a,"UL",{});var jo=g(ya);Ia=m(jo,"LI",{});var Ro=g(Ia);Ta=m(Ro,"STRONG",{});var Do=g(Ta);Pa=k(Do,"Imagemagick"),Do.forEach(b),Ca=k(Ro," - obviously"),Ro.forEach(b),Aa=w(jo),xa=m(jo,"LI",{});var Bo=g(xa);La=m(Bo,"STRONG",{});var $o=g(La);Ha=k($o,"Any screenshot software"),$o.forEach(b),Ma=k(Bo," - I use "),Oa=m(Bo,"A",{href:!0,rel:!0});var qo=g(Oa);ja=k(qo,"flameshot"),qo.forEach(b),Bo.forEach(b),Ra=w(jo),Da=m(jo,"LI",{});var So=g(Da);Ba=m(So,"STRONG",{});var Go=g(Ba);$a=k(Go,"Clipboard"),Go.forEach(b),qa=k(So," - I use "),Sa=m(So,"A",{href:!0,rel:!0});var No=g(Sa);Ga=k(No,"xclip"),No.forEach(b),Na=k(So," (optional)"),So.forEach(b),jo.forEach(b),Fa=w(a),Ya=m(a,"P",{});var Fo=g(Ya);Ua=k(Fo,"After having all of that, let’s make the script."),Fo.forEach(b),za=w(a),Xa=m(a,"H1",{id:!0});var Yo=g(Xa);Wa=m(Yo,"A",{href:!0});var Uo=g(Wa);Za=k(Uo,"Making The Script"),Uo.forEach(b),Yo.forEach(b),Ja=w(a),Ka=m(a,"H2",{id:!0});var zo=g(Ka);Qa=m(zo,"A",{href:!0});var Xo=g(Qa);Va=k(Xo,"Backdrop"),Xo.forEach(b),zo.forEach(b),_a=w(a),an=m(a,"P",{});var Wo=g(an);nn=k(Wo,"Backdrop is actually just a really thicc border. Here’s how to do that on imagemagick."),Wo.forEach(b),en=w(a),sn=m(a,"PRE",{class:!0}),g(sn).forEach(b),on=w(a),tn=m(a,"P",{});var Zo=g(tn);rn=k(Zo,"You can adjust the color by changing the "),cn=m(Zo,"CODE",{});var Jo=g(cn);pn=k(Jo,"bordercolor"),Jo.forEach(b),ln=k(Zo," value. I use white because it looks nice to me. You can use HEX, RGB, and RGBA format. For more references, go to "),hn=m(Zo,"A",{href:!0,rel:!0});var Ko=g(hn);un=k(Ko,"their website"),Ko.forEach(b),dn=k(Zo,"."),Zo.forEach(b),fn=w(a),mn=m(a,"P",{});var Qo=g(mn);gn=k(Qo,"To adjust the thickness of it, you change the "),kn=m(Qo,"CODE",{});var Vo=g(kn);bn=k(Vo,"border"),Vo.forEach(b),wn=k(Qo," value. I use 10 here because it’s not too big and it’s not too small for me."),Qo.forEach(b),vn=w(a),En=m(a,"H2",{id:!0});var _o=g(En);yn=m(_o,"A",{href:!0});var at=g(yn);In=k(at,"Border"),at.forEach(b),_o.forEach(b),Tn=w(a),Pn=m(a,"P",{});var nt=g(Pn);Cn=k(nt,"Previously, we made a thicc border as a backdrop, this time we make a thin border before the shadow"),nt.forEach(b),An=w(a),xn=m(a,"PRE",{class:!0}),g(xn).forEach(b),Ln=w(a),Hn=m(a,"P",{});var et=g(Hn);Mn=k(et,"It’s basically the same, just with a different value."),et.forEach(b),On=w(a),jn=m(a,"H2",{id:!0});var st=g(jn);Rn=m(st,"A",{href:!0});var ot=g(Rn);Dn=k(ot,"Shadow"),ot.forEach(b),st.forEach(b),Bn=w(a),$n=m(a,"P",{});var tt=g($n);qn=k(tt,"To give you screenshot a shadow is quite simple. Here’s how to do it."),tt.forEach(b),Sn=w(a),Gn=m(a,"PRE",{class:!0}),g(Gn).forEach(b),Nn=w(a),Fn=m(a,"P",{});var rt=g(Fn);Yn=k(rt,"To change the shadow color, adjust the first "),Un=m(rt,"CODE",{});var ct=g(Un);zn=k(ct,"background"),ct.forEach(b),Xn=k(rt," value. I use black because black shadow is the only one that is acceptable to me. The "),Wn=m(rt,"CODE",{});var pt=g(Wn);Zn=k(pt,"40"),pt.forEach(b),Jn=k(rt," here is the shadow opacity, you can change it to whatever you like. The shadow radius here is "),Kn=m(rt,"CODE",{});var it=g(Kn);Qn=k(it,"5"),it.forEach(b),Vn=k(rt,". This will add to your backdrop thickness. If you have "),_n=m(rt,"CODE",{});var lt=g(_n);ae=k(lt,"10"),lt.forEach(b),ne=k(rt," of backdrop and you have "),ee=m(rt,"CODE",{});var ht=g(ee);se=k(ht,"5"),ht.forEach(b),oe=k(rt," of border radius then you’ll end up with "),te=m(rt,"CODE",{});var ut=g(te);re=k(ut,"15"),ut.forEach(b),ce=k(rt," of backdrop."),rt.forEach(b),pe=w(a),ie=m(a,"H2",{id:!0});var dt=g(ie);le=m(dt,"A",{href:!0});var ft=g(le);he=k(ft,"Rounded Corner"),ft.forEach(b),dt.forEach(b),ue=w(a),de=m(a,"P",{});var mt=g(de);fe=k(mt,"It’s quite a lengthy one, but don’t worry. The only thing we’d change is the border radius."),mt.forEach(b),me=w(a),ge=m(a,"PRE",{class:!0}),g(ge).forEach(b),ke=w(a),be=m(a,"P",{});var gt=g(be);we=k(gt,"The border radius here is "),ve=m(gt,"CODE",{});var kt=g(ve);Ee=k(kt,"5"),kt.forEach(b),ye=k(gt,". Change every "),Ie=m(gt,"CODE",{});var bt=g(Ie);Te=k(bt,"5"),bt.forEach(b),Pe=k(gt," to whatever you want like "),Ce=m(gt,"CODE",{});var wt=g(Ce);Ae=k(wt,"10"),wt.forEach(b),xe=k(gt," for example but "),Le=m(gt,"CODE",{});var vt=g(Le);He=k(vt,"5"),vt.forEach(b),Me=k(gt," is the sweet spot for me. For more technical explanation and details you can refer to "),Oe=m(gt,"A",{href:!0,rel:!0});var Et=g(Oe);je=k(Et,"their website"),Et.forEach(b),gt.forEach(b),Re=w(a),De=m(a,"H2",{id:!0});var yt=g(De);Be=m(yt,"A",{href:!0});var It=g(Be);$e=k(It,"Combining Them All"),It.forEach(b),yt.forEach(b),qe=w(a),Se=m(a,"P",{});var Tt=g(Se);Ge=k(Tt,"Those are all the parts that we need. Let’s combine them together. Make a file called whatever you want and make it executable by using "),Ne=m(Tt,"CODE",{});var Pt=g(Ne);Fe=k(Pt,"chmod +x filename"),Pt.forEach(b),Ye=k(Tt," and edit the file."),Tt.forEach(b),Ue=w(a),ze=m(a,"PRE",{class:!0}),g(ze).forEach(b),Xe=w(a),We=m(a,"P",{});var Ct=g(We);Ze=k(Ct,"I use "),Je=m(Ct,"CODE",{});var At=g(Je);Ke=k(At,"dash"),At.forEach(b),Qe=k(Ct," for my script, but "),Ve=m(Ct,"CODE",{});var xt=g(Ve);_e=k(xt,"bash"),xt.forEach(b),as=k(Ct," or "),ns=m(Ct,"CODE",{});var Lt=g(ns);es=k(Lt,"zsh"),Lt.forEach(b),ss=k(Ct," will do just fine. I don’t know if it’ll work with "),os=m(Ct,"CODE",{});var Ht=g(os);ts=k(Ht,"fish"),Ht.forEach(b),rs=k(Ct," though, I suppose it’ll work just fine. Add your screenshot program to take the image that we will be using. I’m using "),cs=m(Ct,"A",{href:!0,rel:!0});var Mt=g(cs);ps=k(Mt,"Flameshot"),Mt.forEach(b),is=k(Ct," so it will look like this."),Ct.forEach(b),ls=w(a),hs=m(a,"PRE",{class:!0}),g(hs).forEach(b),us=w(a),ds=m(a,"P",{});var Ot=g(ds);fs=k(Ot,"I store the image on "),ms=m(Ot,"CODE",{});var jt=g(ms);gs=k(jt,"/tmp"),jt.forEach(b),ks=k(Ot," directory because I will copy it to my clipboard and won’t be using the original image."),Ot.forEach(b),bs=w(a),ws=m(a,"PRE",{class:!0}),g(ws).forEach(b),vs=w(a),Es=m(a,"P",{});var Rt=g(Es);ys=k(Rt,"The first effect I apply is the rounded corner and store the result in "),Is=m(Rt,"CODE",{});var Dt=g(Is);Ts=k(Dt,"/tmp/image.png"),Dt.forEach(b),Ps=k(Rt,"."),Rt.forEach(b),Cs=w(a),As=m(a,"PRE",{class:!0}),g(As).forEach(b),xs=w(a),Ls=m(a,"P",{});var Bt=g(Ls);Hs=k(Bt,"Next one is the shadow. I don’t use the small border because it looks weird on a smaller screenshot. You can use it if you like."),Bt.forEach(b),Ms=w(a),Os=m(a,"PRE",{class:!0}),g(Os).forEach(b),js=w(a),Rs=m(a,"P",{});var $t=g(Rs);Ds=k($t,"The last effect I apply is white backdrop. Next step is optional, but if you want to you can add it as well."),$t.forEach(b),Bs=w(a),$s=m(a,"PRE",{class:!0}),g($s).forEach(b),qs=w(a),Ss=m(a,"P",{});var qt=g(Ss);Gs=k(qt,"I added the last line to copy the result into my clipboard so I can easily paste it anywhere and don’t have to delete the screenshot when I no longer need it. Here’s the result."),qt.forEach(b),Ns=w(a),Fs=m(a,"P",{});var St=g(Fs);Ys=m(St,"IMG",{src:!0,alt:!0}),St.forEach(b),zs=w(a),Xs=m(a,"P",{});var Gt=g(Xs);Ws=k(Gt,"Here’s another version"),Gt.forEach(b),Zs=w(a),Js=m(a,"P",{});var Nt=g(Js);Ks=m(Nt,"IMG",{src:!0,alt:!0}),Nt.forEach(b),Vs=w(a),_s=m(a,"H1",{id:!0});var Ft=g(_s);ao=m(Ft,"A",{href:!0});var Yt=g(ao);no=k(Yt,"Conclusion"),Yt.forEach(b),Ft.forEach(b),eo=w(a),so=m(a,"P",{});var Ut=g(so);oo=k(Ut,"Imagemagick is a powerful CLI tools to manipulate an image. It can do so much more, if you’re interested on that then you can go to "),to=m(Ut,"A",{href:!0,rel:!0});var zt=g(to);ro=k(zt,"their website"),zt.forEach(b),co=k(Ut," for some advanced guide. That’s all for this post, thanks for reading and have a nice day ツ"),Ut.forEach(b),this.h()},h(){v(e,"href","#table-of-content"),v(n,"id","table-of-content"),v(p,"href","#introduction"),v(P,"href","#prerequisite"),v(H,"href","#making-the-script"),v(D,"href","#backdrop"),v(S,"href","#border"),v(Y,"href","#shadow"),v(W,"href","#rounded-corner"),v(Q,"href","#combining-them-all"),v(ea,"href","#conclusion"),v(ra,"href","#introduction"),v(ta,"id","introduction"),v(ha,"href","https://imagemagick.org"),v(ha,"rel","nofollow"),v(ga,"href","#prerequisite"),v(ma,"id","prerequisite"),v(Oa,"href","https://flameshot.js.org/"),v(Oa,"rel","nofollow"),v(Sa,"href","https://github.com/astrand/xclip"),v(Sa,"rel","nofollow"),v(Wa,"href","#making-the-script"),v(Xa,"id","making-the-script"),v(Qa,"href","#backdrop"),v(Ka,"id","backdrop"),v(sn,"class","language-bash"),v(hn,"href","https://imagemagick.org/script/color.php"),v(hn,"rel","nofollow"),v(yn,"href","#border"),v(En,"id","border"),v(xn,"class","language-bash"),v(Rn,"href","#shadow"),v(jn,"id","shadow"),v(Gn,"class","language-bash"),v(le,"href","#rounded-corner"),v(ie,"id","rounded-corner"),v(ge,"class","language-bash"),v(Oe,"href","http://www.imagemagick.org/Usage/thumbnails/#rounded"),v(Oe,"rel","nofollow"),v(Be,"href","#combining-them-all"),v(De,"id","combining-them-all"),v(ze,"class","language-bash"),v(cs,"href","https://flameshot.js.org/"),v(cs,"rel","nofollow"),v(hs,"class","language-bash"),v(ws,"class","language-bash"),v(As,"class","language-bash"),v(Os,"class","language-bash"),v($s,"class","language-bash"),Ys.src!==(Us="/assets/post/prettify-screenshot-using-imagemagick/rounded.png")&&v(Ys,"src","/assets/post/prettify-screenshot-using-imagemagick/rounded.png"),v(Ys,"alt","rounded"),Ks.src!==(Qs="/assets/post/prettify-screenshot-using-imagemagick/square.png")&&v(Ks,"src","/assets/post/prettify-screenshot-using-imagemagick/square.png"),v(Ks,"alt","square"),v(ao,"href","#conclusion"),v(_s,"id","conclusion"),v(to,"href","https://www.imagemagick.org/"),v(to,"rel","nofollow")},m(a,u){E(a,n,u),y(n,e),y(e,s),E(a,o,u),E(a,t,u),y(t,r),y(r,c),y(c,p),y(p,i),y(t,l),y(t,h),y(h,T),y(T,P),y(P,C),y(t,A),y(t,x),y(x,L),y(L,H),y(H,M),y(x,O),y(x,j),y(j,R),y(R,D),y(D,B),y(j,$),y(j,q),y(q,S),y(S,G),y(j,N),y(j,F),y(F,Y),y(Y,U),y(j,z),y(j,X),y(X,W),y(W,Z),y(j,J),y(j,K),y(K,Q),y(Q,V),y(t,_),y(t,aa),y(aa,na),y(na,ea),y(ea,sa),E(a,oa,u),E(a,ta,u),y(ta,ra),y(ra,ca),E(a,pa,u),E(a,ia,u),y(ia,la),y(ia,ha),y(ha,ua),y(ia,da),E(a,fa,u),E(a,ma,u),y(ma,ga),y(ga,ka),E(a,ba,u),E(a,wa,u),y(wa,va),E(a,Ea,u),E(a,ya,u),y(ya,Ia),y(Ia,Ta),y(Ta,Pa),y(Ia,Ca),y(ya,Aa),y(ya,xa),y(xa,La),y(La,Ha),y(xa,Ma),y(xa,Oa),y(Oa,ja),y(ya,Ra),y(ya,Da),y(Da,Ba),y(Ba,$a),y(Da,qa),y(Da,Sa),y(Sa,Ga),y(Da,Na),E(a,Fa,u),E(a,Ya,u),y(Ya,Ua),E(a,za,u),E(a,Xa,u),y(Xa,Wa),y(Wa,Za),E(a,Ja,u),E(a,Ka,u),y(Ka,Qa),y(Qa,Va),E(a,_a,u),E(a,an,u),y(an,nn),E(a,en,u),E(a,sn,u),sn.innerHTML='<code class="language-bash">convert source.png -bordercolor white -border <span class="token number">10</span> result.png</code>',E(a,on,u),E(a,tn,u),y(tn,rn),y(tn,cn),y(cn,pn),y(tn,ln),y(tn,hn),y(hn,un),y(tn,dn),E(a,fn,u),E(a,mn,u),y(mn,gn),y(mn,kn),y(kn,bn),y(mn,wn),E(a,vn,u),E(a,En,u),y(En,yn),y(yn,In),E(a,Tn,u),E(a,Pn,u),y(Pn,Cn),E(a,An,u),E(a,xn,u),xn.innerHTML='<code class="language-bash">convert source.png -bordercolor white -border <span class="token number">4</span> result.png</code>',E(a,Ln,u),E(a,Hn,u),y(Hn,Mn),E(a,On,u),E(a,jn,u),y(jn,Rn),y(Rn,Dn),E(a,Bn,u),E(a,$n,u),y($n,qn),E(a,Sn,u),E(a,Gn,u),Gn.innerHTML='<code class="language-bash">convert source.png <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -background black -shadow 40x5+0+0 <span class="token punctuation"></span><span class="token punctuation">)</span> <span class="token punctuation"></span>\n+swap -background none -layers merge +repage result.png<span class="token punctuation">;</span> <span class="token punctuation"></span></code>',E(a,Nn,u),E(a,Fn,u),y(Fn,Yn),y(Fn,Un),y(Un,zn),y(Fn,Xn),y(Fn,Wn),y(Wn,Zn),y(Fn,Jn),y(Fn,Kn),y(Kn,Qn),y(Fn,Vn),y(Fn,_n),y(_n,ae),y(Fn,ne),y(Fn,ee),y(ee,se),y(Fn,oe),y(Fn,te),y(te,re),y(Fn,ce),E(a,pe,u),E(a,ie,u),y(ie,le),y(le,he),E(a,ue,u),E(a,de,u),y(de,fe),E(a,me,u),E(a,ge,u),ge.innerHTML='<code class="language-bash"><span class="token comment"># rounded corners</span>\nconvert /tmp/image.png <span class="token punctuation"></span>\n     <span class="token punctuation"></span><span class="token punctuation">(</span> +clone  -alpha extract <span class="token punctuation"></span>\n        -draw <span class="token string">\'fill black polygon 0,0 0,5 5,0 fill white circle 5,5 5,0\'</span> <span class="token punctuation"></span>\n        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flip <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>\n        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flop <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>\n     <span class="token punctuation"></span><span class="token punctuation">)</span> -alpha off -compose CopyOpacity -composite /tmp/image.png</code>',E(a,ke,u),E(a,be,u),y(be,we),y(be,ve),y(ve,Ee),y(be,ye),y(be,Ie),y(Ie,Te),y(be,Pe),y(be,Ce),y(Ce,Ae),y(be,xe),y(be,Le),y(Le,He),y(be,Me),y(be,Oe),y(Oe,je),E(a,Re,u),E(a,De,u),y(De,Be),y(Be,$e),E(a,qe,u),E(a,Se,u),y(Se,Ge),y(Se,Ne),y(Ne,Fe),y(Se,Ye),E(a,Ue,u),E(a,ze,u),ze.innerHTML='<code class="language-bash"><span class="token shebang important">#!/bin/dash</span></code>',E(a,Xe,u),E(a,We,u),y(We,Ze),y(We,Je),y(Je,Ke),y(We,Qe),y(We,Ve),y(Ve,_e),y(We,as),y(We,ns),y(ns,es),y(We,ss),y(We,os),y(os,ts),y(We,rs),y(We,cs),y(cs,ps),y(We,is),E(a,ls,u),E(a,hs,u),hs.innerHTML='<code class="language-bash"><span class="token shebang important">#!/bin/dash</span>\n\nflameshot gui --raw <span class="token operator">></span> /tmp/image.png</code>',E(a,us,u),E(a,ds,u),y(ds,fs),y(ds,ms),y(ms,gs),y(ds,ks),E(a,bs,u),E(a,ws,u),ws.innerHTML='<code class="language-bash"><span class="token shebang important">#!/bin/dash</span>\n\nflameshot gui --raw <span class="token operator">></span> /tmp/image.png\n\n<span class="token comment"># rounded corners</span>\nconvert /tmp/image.png <span class="token punctuation"></span>\n     <span class="token punctuation"></span><span class="token punctuation">(</span> +clone  -alpha extract <span class="token punctuation"></span>\n        -draw <span class="token string">\'fill black polygon 0,0 0,5 5,0 fill white circle 5,5 5,0\'</span> <span class="token punctuation"></span>\n        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flip <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>\n        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flop <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>\n     <span class="token punctuation"></span><span class="token punctuation">)</span> -alpha off -compose CopyOpacity -composite /tmp/image.png</code>',E(a,vs,u),E(a,Es,u),y(Es,ys),y(Es,Is),y(Is,Ts),y(Es,Ps),E(a,Cs,u),E(a,As,u),As.innerHTML='<code class="language-bash"><span class="token shebang important">#!/bin/dash</span>\n\nflameshot gui --raw <span class="token operator">></span> /tmp/image.png\n\n<span class="token comment"># rounded corners</span>\nconvert /tmp/image.png <span class="token punctuation"></span>\n     <span class="token punctuation"></span><span class="token punctuation">(</span> +clone  -alpha extract <span class="token punctuation"></span>\n        -draw <span class="token string">\'fill black polygon 0,0 0,5 5,0 fill white circle 5,5 5,0\'</span> <span class="token punctuation"></span>\n        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flip <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>\n        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flop <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>\n     <span class="token punctuation"></span><span class="token punctuation">)</span> -alpha off -compose CopyOpacity -composite /tmp/image.png\n\n<span class="token comment"># shadow</span>\nconvert /tmp/image.png <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -background black -shadow 40x5+0+0 <span class="token punctuation"></span><span class="token punctuation">)</span> <span class="token punctuation"></span>\n+swap -background none -layers merge +repage /tmp/image.png<span class="token punctuation">;</span> <span class="token punctuation"></span></code>',E(a,xs,u),E(a,Ls,u),y(Ls,Hs),E(a,Ms,u),E(a,Os,u),Os.innerHTML='<code class="language-bash"><span class="token shebang important">#!/bin/dash</span>\n\nflameshot gui --raw <span class="token operator">></span> /tmp/image.png\n\n<span class="token comment"># rounded corners</span>\nconvert /tmp/image.png <span class="token punctuation"></span>\n     <span class="token punctuation"></span><span class="token punctuation">(</span> +clone  -alpha extract <span class="token punctuation"></span>\n        -draw <span class="token string">\'fill black polygon 0,0 0,5 5,0 fill white circle 5,5 5,0\'</span> <span class="token punctuation"></span>\n        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flip <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>\n        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flop <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>\n     <span class="token punctuation"></span><span class="token punctuation">)</span> -alpha off -compose CopyOpacity -composite /tmp/image.png\n\n<span class="token comment"># shadow</span>\nconvert /tmp/image.png <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -background black -shadow 40x5+0+0 <span class="token punctuation"></span><span class="token punctuation">)</span> <span class="token punctuation"></span>\n+swap -background none -layers merge +repage /tmp/image.png<span class="token punctuation">;</span> <span class="token punctuation"></span>\n\n<span class="token comment"># white backdrop</span>\nconvert /tmp/image.png -bordercolor white -border <span class="token number">10</span> /tmp/image.png</code>',E(a,js,u),E(a,Rs,u),y(Rs,Ds),E(a,Bs,u),E(a,$s,u),$s.innerHTML='<code class="language-bash"><span class="token shebang important">#!/bin/dash</span>\n\nflameshot gui --raw <span class="token operator">></span> /tmp/image.png\n\n<span class="token comment"># rounded corners</span>\nconvert /tmp/image.png <span class="token punctuation"></span>\n     <span class="token punctuation"></span><span class="token punctuation">(</span> +clone  -alpha extract <span class="token punctuation"></span>\n        -draw <span class="token string">\'fill black polygon 0,0 0,5 5,0 fill white circle 5,5 5,0\'</span> <span class="token punctuation"></span>\n        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flip <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>\n        <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -flop <span class="token punctuation"></span><span class="token punctuation">)</span> -compose Multiply -composite <span class="token punctuation"></span>\n     <span class="token punctuation"></span><span class="token punctuation">)</span> -alpha off -compose CopyOpacity -composite /tmp/image.png\n\n<span class="token comment"># shadow</span>\nconvert /tmp/image.png <span class="token punctuation"></span><span class="token punctuation">(</span> +clone -background black -shadow 40x5+0+0 <span class="token punctuation"></span><span class="token punctuation">)</span> <span class="token punctuation"></span>\n+swap -background none -layers merge +repage /tmp/image.png<span class="token punctuation">;</span> <span class="token punctuation"></span>\n\n<span class="token comment"># white backdrop</span>\nconvert /tmp/image.png -bordercolor white -border <span class="token number">10</span> /tmp/image.png\n\n<span class="token comment"># copy to clipboard</span>\nxclip -selection clipboard -i /tmp/image.png -t image/png</code>',E(a,qs,u),E(a,Ss,u),y(Ss,Gs),E(a,Ns,u),E(a,Fs,u),y(Fs,Ys),E(a,zs,u),E(a,Xs,u),y(Xs,Ws),E(a,Zs,u),E(a,Js,u),y(Js,Ks),E(a,Vs,u),E(a,_s,u),y(_s,ao),y(ao,no),E(a,eo,u),E(a,so,u),y(so,oo),y(so,to),y(to,ro),y(so,co)},p:I,d(a){a&&b(n),a&&b(o),a&&b(t),a&&b(oa),a&&b(ta),a&&b(pa),a&&b(ia),a&&b(fa),a&&b(ma),a&&b(ba),a&&b(wa),a&&b(Ea),a&&b(ya),a&&b(Fa),a&&b(Ya),a&&b(za),a&&b(Xa),a&&b(Ja),a&&b(Ka),a&&b(_a),a&&b(an),a&&b(en),a&&b(sn),a&&b(on),a&&b(tn),a&&b(fn),a&&b(mn),a&&b(vn),a&&b(En),a&&b(Tn),a&&b(Pn),a&&b(An),a&&b(xn),a&&b(Ln),a&&b(Hn),a&&b(On),a&&b(jn),a&&b(Bn),a&&b($n),a&&b(Sn),a&&b(Gn),a&&b(Nn),a&&b(Fn),a&&b(pe),a&&b(ie),a&&b(ue),a&&b(de),a&&b(me),a&&b(ge),a&&b(ke),a&&b(be),a&&b(Re),a&&b(De),a&&b(qe),a&&b(Se),a&&b(Ue),a&&b(ze),a&&b(Xe),a&&b(We),a&&b(ls),a&&b(hs),a&&b(us),a&&b(ds),a&&b(bs),a&&b(ws),a&&b(vs),a&&b(Es),a&&b(Cs),a&&b(As),a&&b(xs),a&&b(Ls),a&&b(Ms),a&&b(Os),a&&b(js),a&&b(Rs),a&&b(Bs),a&&b($s),a&&b(qs),a&&b(Ss),a&&b(Ns),a&&b(Fs),a&&b(zs),a&&b(Xs),a&&b(Zs),a&&b(Js),a&&b(Vs),a&&b(_s),a&&b(eo),a&&b(so)}}}function C(a){let n,e;const u=[A];let d={$$slots:{default:[P]},$$scope:{ctx:a}};for(let o=0;o<u.length;o+=1)d=s(d,u[o]);return n=new T({props:d}),{c(){o(n.$$.fragment)},l(a){t(n.$$.fragment,a)},m(a,s){r(n,a,s),e=!0},p(a,[e]){const s=0&e?c(u,[h(A)]):{};1&e&&(s.$$scope={dirty:e,ctx:a}),n.$set(s)},i(a){e||(p(n.$$.fragment,a),e=!0)},o(a){i(n.$$.fragment,a),e=!1},d(a){l(n,a)}}}const A={title:"Prettify your screenshot using imagemagick",date:"2020-08-06T00:00:00.000Z",desc:"Wanna make your screenshot a bit more fancy? Say no more, Imagemagick got you covered",tags:["linux"]};export default class extends a{constructor(a){super(),n(this,a,null,C,e,{})}}export{A as metadata};
