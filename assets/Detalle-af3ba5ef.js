import{o as d,c as _,a as s,t,b as f,u as y,r as v,d as p,e as n,f as l,w as r,F as w,g as x,h as g,N,i as C,j as D}from"./index-edcc7462.js";const k={key:0,class:"card",style:{width:"70%"}},V={class:"row"},B={class:"col-sm"},j=["src"],E={class:"col"},S={class:"card-body"},F={class:"form-group row"},O=s("label",{class:"col-sm-3 col-label text-end"},"Compañia:",-1),R={class:"col-sm-8"},$={class:"card-title",style:{"font-family":"'Courier New'"}},I={class:"form-group row"},M=s("label",{class:"col-sm-3 col-label text-end"},"Obra:",-1),T={class:"col-sm-8"},q={class:"card-title",style:{"font-family":"'Courier New'"}},z={class:"form-group row"},A=s("label",{class:"col-sm-3 col-label text-end"},"Duración:",-1),G={class:"col-sm-8"},H={class:"card-title",style:{"font-family":"'Courier New'"}},J={class:"form-group row"},K=s("label",{class:"col-sm-3 col-label text-end"},"Director:",-1),L={class:"col-sm-8"},P={class:"card-title",style:{"font-family":"'Courier New'"}},Q={class:"form-group row"},U=s("label",{class:"col-sm-3 col-label text-end"},"Elenco:",-1),W={class:"col-sm-8"},X={class:"card-title",style:{"font-family":"'Courier New'"}},Y={class:"form-group row"},Z=s("label",{class:"col-sm-3 col-label text-end"},"Enlace:",-1),ss={class:"col-sm-8"},os={class:"card-title",style:{"font-family":"'Courier New'"}},ts=s("br",null,null,-1),es=s("div",{class:"text-center"},[s("label",{class:"fw-bold"},"Sinpose:")],-1),cs=s("br",null,null,-1),ls={class:"card-title",style:{"font-family":"'Courier New'"}},as={__name:"BaseDetalle",props:{obra:{type:Object}},setup(o){return(m,a)=>o.obra?(d(),_("div",k,[s("div",V,[s("div",B,[s("img",{src:o.obra.photo,class:"card-img-top",alt:""},null,8,j)]),s("div",E,[s("div",S,[s("div",F,[O,s("div",R,[s("p",$,t(o.obra.company),1)])]),s("div",I,[M,s("div",T,[s("p",q,t(o.obra.title),1)])]),s("div",z,[A,s("div",G,[s("p",H,t(o.obra.time),1)])]),s("div",J,[K,s("div",L,[s("p",P,t(o.obra.director),1)])]),s("div",Q,[U,s("div",W,[s("p",X,t(o.obra.cast),1)])]),s("div",Y,[Z,s("div",ss,[s("p",os,t(o.obra.link),1)])]),ts,es,cs,s("p",ls,t(o.obra.synopsis),1)])])])])):f("",!0)}},is={class:"row justify-content-center"},rs={__name:"Detalle",setup(o){const a=y().params.id,e=v({obra:null});async function b(){const i=x(D,"obras",a),c=await g(i);c.exists()?(e.obra=c.data(),e.obra.id=c.id,console.log(e.obra)):console.log("¡No existe el documento!")}return p(()=>{b()}),(i,c)=>{const u=n("router-link"),h=n("dir");return d(),_(w,null,[l(N),s("div",is,[l(as,{obra:e.obra},null,8,["obra"])]),l(h,{class:"text-center"},{default:r(()=>[l(u,{class:"btn btn-primary",to:"/"},{default:r(()=>[C("Volver")]),_:1})]),_:1})],64)}}};export{rs as default};
