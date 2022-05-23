"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[92],{2468:(v,u,n)=>{n.d(u,{D:()=>h});var d=n(655),e=n(6199),c=n(5e3),l=n(8962);let h=(()=>{class s{constructor(t,r){this.firestore=t,this.alertCtrl=r}getNotes(){const t=(0,e.hJ)(this.firestore,"notes");return(0,e.BS)(t,{idField:"id"})}getAllOrders(){const t=(0,e.hJ)(this.firestore,"order");return(0,e.BS)(t,{idField:"id"})}getOrders(){return(0,d.mG)(this,void 0,void 0,function*(){const t=(0,e.hJ)(this.firestore,"order"),r=(0,e.IO)(t,(0,e.ar)("type","==","cre"));(yield(0,e.PL)(r)).forEach(o=>{console.log(o.id,"=> ",o.data())})})}getNoteById(t){const r=(0,e.JU)(this.firestore,`notes/${t}`);return(0,e._1)(r,{idField:"id"})}addNote(t){const r=(0,e.hJ)(this.firestore,"notes");return(0,e.ET)(r,t)}deleteNote(t){const r=(0,e.JU)(this.firestore,`notes/${t.id}`);return(0,e.oe)(r)}updateNote(t){const r=(0,e.JU)(this.firestore,`notes/${t.id}`);return(0,e.r7)(r,{title:t.title,text:t.text})}addOrderDetail(t){const r=(0,e.hJ)(this.firestore,"order");return(0,e.ET)(r,t)}updateOrder(t,r){const a=(0,e.JU)(this.firestore,`order/${t.id}`);return(0,e.r7)(a,r)}deleteOrder(t){const r=(0,e.JU)(this.firestore,`order/${t.id}`);return(0,e.oe)(r)}addAccountDetail(t){const r=(0,e.hJ)(this.firestore,"account");return(0,e.ET)(r,t)}getAccounts(){const t=(0,e.hJ)(this.firestore,"account");return(0,e.BS)(t,{idField:"id"})}presentAlertConfirm(t,r){return(0,d.mG)(this,void 0,void 0,function*(){let a=!1;return yield yield new Promise((i,f)=>(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertCtrl.create({header:t,message:r,buttons:[{text:"No",role:"cancel",cssClass:"secondary",id:"cancel-button",handler:D=>(0,d.mG)(this,void 0,void 0,function*(){yield i(!1)})},{text:"Yes",id:"confirm-button",handler:()=>(0,d.mG)(this,void 0,void 0,function*(){yield i(!0)})}]})).present()})).then(i=>{a=i}),a})}}return s.\u0275fac=function(t){return new(t||s)(c.LFG(e.gg),c.LFG(l.Br))},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},7626:(v,u,n)=>{n.r(u),n.d(u,{AddDataPageModule:()=>a});var d=n(9808),e=n(3075),c=n(8962),l=n(8555),h=n(81),s=n(5e3);const g=[{path:"add",component:h.f}];let t=(()=>{class o{}return o.\u0275fac=function(f){return new(f||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[l.Bz.forChild(g)],l.Bz]}),o})();var r=n(8226);let a=(()=>{class o{}return o.\u0275fac=function(f){return new(f||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[d.ez,r.q,e.u5,c.Pc,e.UX,t]]}),o})()}}]);