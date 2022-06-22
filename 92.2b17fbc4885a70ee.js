"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[92],{2468:(v,u,i)=>{i.d(u,{D:()=>h});var n=i(655),e=i(6199),l=i(5e3),c=i(8962);let h=(()=>{class s{constructor(t,o,d){this.firestore=t,this.alertCtrl=o,this.loadCtrl=d}getNotes(){const t=(0,e.hJ)(this.firestore,"notes");return(0,e.BS)(t,{idField:"id"})}getAllOrders(){const t=(0,e.hJ)(this.firestore,"order");return(0,e.BS)(t,{idField:"id"})}getOrders(){return(0,n.mG)(this,void 0,void 0,function*(){const t=(0,e.hJ)(this.firestore,"order"),o=(0,e.IO)(t,(0,e.ar)("type","==","cre"));(yield(0,e.PL)(o)).forEach(r=>{console.log(r.id,"=> ",r.data())})})}getNoteById(t){const o=(0,e.JU)(this.firestore,`notes/${t}`);return(0,e._1)(o,{idField:"id"})}addNote(t){const o=(0,e.hJ)(this.firestore,"notes");return(0,e.ET)(o,t)}deleteNote(t){const o=(0,e.JU)(this.firestore,`notes/${t.id}`);return(0,e.oe)(o)}updateNote(t){const o=(0,e.JU)(this.firestore,`notes/${t.id}`);return(0,e.r7)(o,{title:t.title,text:t.text})}addOrderDetail(t){const o=(0,e.hJ)(this.firestore,"order");return(0,e.ET)(o,t)}updateOrder(t,o){const d=(0,e.JU)(this.firestore,`order/${t.id}`);return(0,e.r7)(d,o)}deleteOrder(t){const o=(0,e.JU)(this.firestore,`order/${t.id}`);return(0,e.oe)(o)}addAccountDetail(t){const o=(0,e.hJ)(this.firestore,"account");return(0,e.ET)(o,t)}getAccounts(){const t=(0,e.hJ)(this.firestore,"account");return(0,e.BS)(t,{idField:"id"})}presentAlertConfirm(t,o){return(0,n.mG)(this,void 0,void 0,function*(){let d=!1;return yield yield new Promise((a,f)=>(0,n.mG)(this,void 0,void 0,function*(){yield(yield this.alertCtrl.create({header:t,message:o,buttons:[{text:"No",role:"cancel",cssClass:"secondary",id:"cancel-button",handler:p=>(0,n.mG)(this,void 0,void 0,function*(){yield a(!1)})},{text:"Yes",id:"confirm-button",handler:()=>(0,n.mG)(this,void 0,void 0,function*(){yield a(!0)})}]})).present()})).then(a=>{d=a}),d})}startLoader(){return(0,n.mG)(this,void 0,void 0,function*(){yield this.loader(),this.loading.present()})}stopLoader(){this.loading&&(this.loading.dismiss(),this.loading=null)}loader(){return(0,n.mG)(this,void 0,void 0,function*(){this.loading&&this.loading.instance?this.stopLoader():this.loading=yield this.loadCtrl.create({spinner:"crescent",message:"Please wait..."})})}}return s.\u0275fac=function(t){return new(t||s)(l.LFG(e.gg),l.LFG(c.Br),l.LFG(c.HT))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},7626:(v,u,i)=>{i.r(u),i.d(u,{AddDataPageModule:()=>d});var n=i(9808),e=i(3075),l=i(8962),c=i(8555),h=i(81),s=i(5e3);const g=[{path:"add",component:h.f}];let t=(()=>{class r{}return r.\u0275fac=function(f){return new(f||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[[c.Bz.forChild(g)],c.Bz]}),r})();var o=i(8226);let d=(()=>{class r{}return r.\u0275fac=function(f){return new(f||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[[n.ez,o.q,e.u5,l.Pc,e.UX,t]]}),r})()}}]);