"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[133],{133:($,Z,s)=>{s.r(Z),s.d(Z,{HomePageModule:()=>W});var u=s(9808),d=s(8962),h=s(3075),O=s(8555),g=s(655),A=s(9660),x=s(6905),v=s(6498),m=s(5439),e=s(5e3);function C(n,a){1&n&&(e.TgZ(0,"ion-row")(1,"ion-col")(2,"span",0),e._uU(3,"Given Remark"),e.qZA()(),e.TgZ(4,"ion-col")(5,"span",0),e._uU(6,"Comission"),e.qZA()()())}function b(n,a){if(1&n&&(e.TgZ(0,"ion-row",1)(1,"ion-col",2),e._uU(2),e.qZA(),e.TgZ(3,"ion-col",2),e._uU(4),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Oqu(t.orderData.givenremark),e.xp6(2),e.Oqu(t.orderData.comission)}}let P=(()=>{class n{constructor(t,o){this.bottomSheetRef=t,this.data=o,this.orderData=o,console.log("--- dta ---",o)}openLink(t){this.bottomSheetRef.dismiss(),t.preventDefault()}getOrderStatus(){return""!==this.orderData.cancelleddate?"Cancelled":""!==this.orderData.amountreceiveddate?"Completed":""!==this.orderData.givendate?"Given":""!==this.orderData.delivereddate?"Delivered":""!==this.orderData.oddate?"Ordered":void 0}getDate(){return""!==this.orderData.cancelleddate?m(this.orderData.cancelleddate).format("DD/MM/YY"):""!==this.orderData.amountreceiveddate?m(this.orderData.amountreceiveddate).format("DD/MM/YY"):""!==this.orderData.givendate?m(this.orderData.givendate).format("DD/MM/YY"):""!==this.orderData.delivereddate?m(this.orderData.delivereddate).format("DD/MM/YY"):""!==this.orderData.oddate?m(this.orderData.oddate).format("DD/MM/YY"):void 0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.oL),e.Y36(v.OG))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-order-detail"]],decls:53,vars:12,consts:[[1,"bold"],[1,"bobtm"],[1,"gr"],[3,"ngClass"],[4,"ngIf"],["class","bobtm",4,"ngIf"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-grid")(1,"ion-row")(2,"ion-col")(3,"span",0),e._uU(4,"Order ID "),e.qZA()(),e.TgZ(5,"ion-col")(6,"span",0),e._uU(7,"Order Status"),e.qZA()()(),e.TgZ(8,"ion-row",1)(9,"ion-col",2),e._uU(10),e.qZA(),e.TgZ(11,"ion-col",3),e._uU(12),e.TgZ(13,"span"),e._uU(14),e.qZA()()(),e.TgZ(15,"ion-row")(16,"ion-col")(17,"span",0),e._uU(18,"Order Date"),e.qZA()(),e.TgZ(19,"ion-col")(20,"span",0),e._uU(21,"Application"),e.qZA()()(),e.TgZ(22,"ion-row",1)(23,"ion-col",2),e._uU(24),e.qZA(),e.TgZ(25,"ion-col",2),e._uU(26),e.qZA()(),e.TgZ(27,"ion-row")(28,"ion-col")(29,"span",0),e._uU(30,"Model"),e.qZA()(),e.TgZ(31,"ion-col")(32,"span",0),e._uU(33,"Amount"),e.qZA()()(),e.TgZ(34,"ion-row",1)(35,"ion-col",2),e._uU(36),e.qZA(),e.TgZ(37,"ion-col",2),e._uU(38),e.qZA()(),e.TgZ(39,"ion-row")(40,"ion-col")(41,"span",0),e._uU(42,"Payment Mode"),e.qZA()(),e.TgZ(43,"ion-col")(44,"span",0),e._uU(45,"Card/Bank Detail"),e.qZA()()(),e.TgZ(46,"ion-row",1)(47,"ion-col",2),e._uU(48),e.qZA(),e.TgZ(49,"ion-col",2),e._uU(50),e.qZA()(),e.YNc(51,C,7,0,"ion-row",4),e.YNc(52,b,5,2,"ion-row",5),e.qZA()),2&t&&(e.xp6(10),e.Oqu(o.orderData.orderid),e.xp6(1),e.Q6J("ngClass","Cancelled"===o.getOrderStatus()?"redF":"grnF"),e.xp6(1),e.hij(" ",o.getOrderStatus()," "),e.xp6(2),e.hij("- ",o.getDate(),""),e.xp6(10),e.Oqu(o.orderData.oddate),e.xp6(2),e.Oqu(o.orderData.platform),e.xp6(10),e.Oqu(o.orderData.moname),e.xp6(2),e.Oqu(o.orderData.price),e.xp6(10),e.Oqu(o.orderData.type),e.xp6(2),e.Oqu(o.orderData.paymentbank),e.xp6(1),e.Q6J("ngIf",""!==o.orderData.givendate),e.xp6(1),e.Q6J("ngIf",""!==o.orderData.givendate))},directives:[d.jY,d.Nd,d.wI,u.mk,u.O5],encapsulation:2}),n})();var U=s(81),M=s(2468),T=s(9832);const w=["itemSlidingStatus"];function q(n,a){1&n&&(e.TgZ(0,"div")(1,"ion-row")(2,"ion-col",22),e._uU(3,"No Data Found !"),e.qZA()()())}function S(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"ion-item-option",36),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,r=e.MAs(1),l=e.oxw(2);return l.updateStatus("d",i.oddate,r),l.selectedOrder=i}),e._uU(1," Delivered"),e.qZA()}}function Y(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"ion-item-option",37),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,r=e.MAs(1),l=e.oxw(2);return l.updateStatus("g",i.delivereddate,r),l.selectedOrder=i}),e._uU(1," Given"),e.qZA()}}function H(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"ion-item-option",38),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,r=e.MAs(1),l=e.oxw(2);return l.updateStatus("a",i.givendate,r),l.selectedOrder=i}),e._uU(1," Amount Received"),e.qZA()}}function k(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"ion-item-option",39),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,r=e.MAs(1),l=e.oxw(2);return l.updateStatus("c",i.oddate,r),l.selectedOrder=i}),e._uU(1,"Cancelled"),e.qZA()}}function y(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"ion-item-option",40),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,r=e.MAs(1);return e.oxw(2).deleteOrder(i,r)}),e._uU(1,"Delete"),e.qZA()}}const J=function(n,a){return{canc:n,comp:a,ord:!0}};function I(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"ion-item-sliding",null,23)(2,"ion-item-options",24),e.YNc(3,S,2,0,"ion-item-option",25),e.YNc(4,Y,2,0,"ion-item-option",26),e.YNc(5,H,2,0,"ion-item-option",27),e.qZA(),e.TgZ(6,"ion-item",28),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw(2).openOrder(r)}),e.TgZ(7,"ion-label",29)(8,"div",30)(9,"h4"),e._uU(10),e.qZA(),e.TgZ(11,"div",31),e._uU(12),e.qZA()(),e.TgZ(13,"div",30)(14,"p",32),e._uU(15),e.qZA(),e.TgZ(16,"p",32),e._uU(17),e.qZA()(),e.TgZ(18,"div",30)(19,"p")(20,"span",32),e._uU(21),e.qZA()(),e.TgZ(22,"p",32),e._uU(23),e.qZA()()()(),e.TgZ(24,"ion-item-options",33),e.YNc(25,k,2,0,"ion-item-option",34),e.YNc(26,y,2,0,"ion-item-option",35),e.qZA()()}if(2&n){const t=a.$implicit,o=e.oxw(2);e.xp6(3),e.Q6J("ngIf",""===t.delivereddate&&""===t.cancelleddate),e.xp6(1),e.Q6J("ngIf",""!==t.delivereddate&&""===t.givendate),e.xp6(1),e.Q6J("ngIf",""!==t.givendate&&""===t.amountreceiveddate),e.xp6(5),e.hij(" ",t.moname," "),e.xp6(1),e.Q6J("ngClass",e.WLB(13,J,"Cancelled"===o.getOrderStatus(t),"Completed"===o.getOrderStatus(t))),e.xp6(1),e.hij(" ",o.getOrderStatus(t),""),e.xp6(3),e.Oqu(t.orderid),e.xp6(2),e.Oqu(t.paymentbank),e.xp6(4),e.Oqu(t.platform),e.xp6(2),e.AsE("\u20b9 ",t.price," - ",t.type,""),e.xp6(2),e.Q6J("ngIf",""===t.delivereddate&&""===t.cancelleddate),e.xp6(1),e.Q6J("ngIf",""!==t.amountreceiveddate||""!==t.cancelleddate)}}function N(n,a){if(1&n&&(e.TgZ(0,"div")(1,"ion-row"),e._UZ(2,"ion-col",18),e.qZA(),e.YNc(3,q,4,0,"div",19),e.TgZ(4,"ion-row")(5,"ion-col",18)(6,"ion-virtual-scroll",20),e.YNc(7,I,27,16,"ion-item-sliding",21),e.qZA()()()()),2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngIf",0===t.orders.length),e.xp6(3),e.Q6J("items",t.orders)}}function F(n,a){if(1&n&&(e.TgZ(0,"ion-row")(1,"ion-col",18)(2,"ion-item",42)(3,"ion-label",29)(4,"div",30)(5,"div",43)(6,"h4"),e._uU(7),e.qZA(),e.TgZ(8,"p",44)(9,"span",45),e._uU(10),e.qZA(),e._uU(11,"\xa0\xa0 "),e.TgZ(12,"span",46),e._uU(13),e.qZA(),e._uU(14,"\xa0\xa0 "),e.TgZ(15,"span",45),e._uU(16),e.qZA(),e._uU(17,"\xa0\xa0 "),e.TgZ(18,"span",46),e._uU(19),e.qZA(),e._uU(20,"\xa0\xa0 "),e.TgZ(21,"span",47),e._uU(22),e.qZA()()()()()()()()),2&n){const t=a.$implicit;e.xp6(7),e.hij(" ",t.title," "),e.xp6(3),e.hij("Ordered - ",t.ordered,""),e.xp6(3),e.hij("Delivered - ",t.delivered,""),e.xp6(3),e.hij("Given - ",t.given,""),e.xp6(3),e.hij("Completed - ",t.completed,""),e.xp6(3),e.hij("Cancelled - ",t.cancelled,"")}}function G(n,a){if(1&n&&(e.TgZ(0,"div")(1,"ion-list"),e.YNc(2,F,23,6,"ion-row",41),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.accounts)}}function Q(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"ion-fab-button",48),e.NdJ("click",function(){return e.CHM(t),e.oxw().addAccount()}),e._UZ(1,"ion-icon",49),e.qZA()}}function j(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"ion-fab-button",48),e.NdJ("click",function(){return e.CHM(t),e.oxw().addData()}),e._UZ(1,"ion-icon",49),e.qZA()}}const z=[{path:"",component:(()=>{class n{constructor(t,o,i,r,l){this.dataService=t,this.cd=o,this.alertCtrl=i,this.modalCtrl=r,this.bottomSheet=l,this.notes=[],this.orders=[],this.tempOrders=[],this.accounts=[],this.selectedType="mobile",this.total=0,this.totaldue=0,this.harcodeLoginCheck()}filterStatusWiseOrder(){for(let t=0;t<this.accounts.length;t++){const o=this.orders.filter(c=>c.platform===this.accounts[t].title),i=o.filter(c=>"Ordered"===c.orderstatus).length,r=o.filter(c=>"Delivered"===c.orderstatus).length,l=o.filter(c=>"Given"===c.orderstatus).length,D=o.filter(c=>"Completed"===c.orderstatus).length,p=o.filter(c=>"Cancelled"===c.orderstatus).length;this.accounts[t].ordered=i,this.accounts[t].delivered=r,this.accounts[t].given=l,this.accounts[t].completed=D,this.accounts[t].cancelled=p}}harcodeLoginCheck(){return(0,g.mG)(this,void 0,void 0,function*(){yield new Promise((o,i)=>(0,g.mG)(this,void 0,void 0,function*(){yield(yield this.alertCtrl.create({header:"Login",message:"Enter UserID and Password",backdropDismiss:!1,inputs:[{name:"id",label:"UserID",placeholder:"UserID",type:"text"},{name:"password",label:"Password",placeholder:"Password",type:"text"}],buttons:[{text:"Login",id:"confirm-button",handler:l=>(0,g.mG)(this,void 0,void 0,function*(){"husain"===l.id&&"HUSain52*"===l.password?yield o(!0):this.harcodeLoginCheck()})}]})).present()})).then(o=>{this.dataService.startLoader(),this.dataService.getAllOrders().subscribe(i=>{this.total=0,this.totaldue=0,this.orders=[...i],this.tempOrders=[...i],this.orders.sort((r,l)=>r.datetime.seconds-l.datetime.seconds),this.orders.forEach(r=>{r.comission>0&&(this.total+=r.comission),('"Ordered"'===r.orderstatus||"Delivered"===r.orderstatus||"Given"===r.orderstatus)&&(this.totaldue+=Number(r.price))}),this.cd.detectChanges(),this.dataService.stopLoader()}),this.dataService.getAccounts().subscribe(i=>{this.accounts=i,this.cd.detectChanges(),this.filterStatusWiseOrder()})})})}addAccount(){return(0,g.mG)(this,void 0,void 0,function*(){yield(yield this.alertCtrl.create({header:"Add Account",inputs:[{name:"platform",label:"Order PlatForm(App)",placeholder:"ex. Amazon,Flipkart",type:"text"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Add",handler:o=>{this.dataService.addAccountDetail({title:o.platform})}}]})).present()})}openNote(t){return(0,g.mG)(this,void 0,void 0,function*(){yield(yield this.modalCtrl.create({component:A.P,componentProps:{id:t.id},breakpoints:[1,.5,.8],initialBreakpoint:.8})).present()})}openOrder(t){this.bottomSheet.open(P,{data:t})}addData(){return(0,g.mG)(this,void 0,void 0,function*(){yield(yield this.modalCtrl.create({component:x.X,breakpoints:[1,.5,.8],initialBreakpoint:.8})).present()})}updateStatus(t,o,i){return(0,g.mG)(this,void 0,void 0,function*(){let r="",l="",p="";"c"===t?(r="Update Cancel Details",l="Cancel Date",p=o):"d"===t?(r="Update Delivery Details",l="Delivery Date",p=m(o,"YYYY-MM-DD").add(1,"days").format("YYYY-MM-DD")):"g"===t?(r="Update Given Details",l="Given Date",p=o):"a"===t&&(r="Update Commision Details",l="Amount Received Date",p=o);const c=yield this.modalCtrl.create({component:U.f,componentProps:{id:t,minDate:p},cssClass:"set",backdropDismiss:!1});yield c.present(),c.onDidDismiss().then(_=>{if(void 0!==_.data){i.close();const f=m(_.data.date).format("YYYY-MM-DD");"c"===t||"d"===t?this.callUpdateDet(f,t):("g"===t||"a"===t)&&this.callUpdateDet(f,t,_.data.remcom)}})})}callUpdateDet(t,o,i){return(0,g.mG)(this,void 0,void 0,function*(){let r={};"c"===o?(this.selectedOrder.cancelleddate=t,r={cancelleddate:t,orderstatus:"Cancelled"}):"d"===o?(this.selectedOrder.delivereddate=t,r={delivereddate:t,orderstatus:"Delivered"}):"g"===o?(this.selectedOrder.givendate=t,this.selectedOrder.givenremark=i,r={givendate:t,givenremark:i,orderstatus:"Given"}):"a"===o&&(this.selectedOrder.amountreceiveddate=t,this.selectedOrder.comission=i,r={amountreceiveddate:t,comission:i,orderstatus:"Completed"}),yield this.dataService.updateOrder(this.selectedOrder,r),this.filterStatusWiseOrder()})}getOrderStatus(t){return""!==t.cancelleddate?"Cancelled":""!==t.amountreceiveddate?"Completed":""!==t.givendate?"Given":""!==t.delivereddate?"Delivered":""!==t.oddate?"Ordered":void 0}deleteOrder(t,o){return(0,g.mG)(this,void 0,void 0,function*(){yield this.dataService.presentAlertConfirm("Warning !","Are you sure to delete ?").then(i=>(0,g.mG)(this,void 0,void 0,function*(){i&&(yield this.dataService.deleteOrder(t),this.filterStatusWiseOrder())})),o.close()})}segmentChanged(t){let o=[];switch(t){case"a":o=this.tempOrders;break;case"o":o=this.tempOrders.filter(i=>""===i.amountreceiveddate&&""===i.cancelleddate&&""===i.givendate&&""===i.delivereddate&&""!==i.oddate);break;case"d":o=this.tempOrders.filter(i=>""===i.amountreceiveddate&&""===i.cancelleddate&&""===i.givendate&&""!==i.delivereddate&&""!==i.oddate);break;case"g":o=this.tempOrders.filter(i=>""===i.amountreceiveddate&&""===i.cancelleddate&&""!==i.givendate&&""!==i.delivereddate&&""!==i.oddate);break;case"e":o=this.tempOrders.filter(i=>""!==i.cancelleddate);break;case"c":o=this.tempOrders.filter(i=>""!==i.amountreceiveddate)}this.orders=[...o],this.orders.sort((i,r)=>i.datetime.seconds-r.datetime.seconds)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(M.D),e.Y36(e.sBO),e.Y36(d.Br),e.Y36(d.IN),e.Y36(v.ch))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],viewQuery:function(t,o){if(1&t&&e.Gf(w,5),2&t){let i;e.iGM(i=e.CRH())&&(o.itemSlidingStatus=i.first)}},decls:38,vars:8,consts:[["color","primary"],[3,"ngModel","ngModelChange"],["value","mobile"],["value","account"],["appearance","legacy","name","fontStyle","aria-label","Font Style",1,"whi",2,"overflow","scroll !important",3,"change"],["value","a"],["value","o"],["value","d"],["value","g"],["value","c"],["value","e"],[3,"ngSwitch"],[4,"ngSwitchCase"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click",4,"ngIf"],[1,"ion-text-center","bold"],[1,"ion-no-padding","grnF"],[1,"ion-no-padding","redF"],["size-lg","4","offset-md","4"],[4,"ngIf"],[2,"margin-bottom","100px",3,"items"],[4,"virtualItem"],["size-lg","4","offset-md","4",1,"ion-text-center"],["itemSlidingStatus",""],["side","start"],["color","tertiary",3,"click",4,"ngIf"],["color","primary",3,"click",4,"ngIf"],["color","success",3,"click",4,"ngIf"],[1,"pointer",3,"click"],[2,"margin","0px !important"],[1,"flrow"],[1,"common",3,"ngClass"],[1,"sub"],["side","end"],["color","danger","style","border-right: 5px solid white;",3,"click",4,"ngIf"],["color","danger",3,"click",4,"ngIf"],["color","tertiary",3,"click"],["color","primary",3,"click"],["color","success",3,"click"],["color","danger",2,"border-right","5px solid white",3,"click"],["color","danger",3,"click"],[4,"ngFor","ngForOf"],[1,"pointer"],[2,"width","70%"],[1,"ordDet"],[1,"ord"],[1,"comp"],[1,"canc"],[3,"click"],["name","add"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-segment",1),e.NdJ("ngModelChange",function(r){return o.selectedType=r}),e.TgZ(3,"ion-segment-button",2),e._uU(4," Order Detail "),e.qZA(),e.TgZ(5,"ion-segment-button",3),e._uU(6," Account "),e.qZA()()()(),e.TgZ(7,"mat-button-toggle-group",4),e.NdJ("change",function(r){return o.segmentChanged(r.value)}),e.TgZ(8,"mat-button-toggle",5),e._uU(9,"All"),e.qZA(),e.TgZ(10,"mat-button-toggle",6),e._uU(11,"Ordered"),e.qZA(),e.TgZ(12,"mat-button-toggle",7),e._uU(13,"Delivered"),e.qZA(),e.TgZ(14,"mat-button-toggle",8),e._uU(15,"Given"),e.qZA(),e.TgZ(16,"mat-button-toggle",9),e._uU(17,"Completed"),e.qZA(),e.TgZ(18,"mat-button-toggle",10),e._uU(19,"Cancelled"),e.qZA()(),e.TgZ(20,"ion-content",11),e.YNc(21,N,8,2,"div",12),e.YNc(22,G,3,1,"div",12),e.TgZ(23,"ion-fab",13),e.YNc(24,Q,2,0,"ion-fab-button",14),e.YNc(25,j,2,0,"ion-fab-button",14),e.qZA()(),e.TgZ(26,"ion-footer")(27,"ion-grid",15)(28,"ion-row")(29,"ion-col",16),e._uU(30,"Total Earning"),e.qZA(),e.TgZ(31,"ion-col",17),e._uU(32,"Total Dues"),e.qZA()(),e.TgZ(33,"ion-row")(34,"ion-col",16),e._uU(35),e.qZA(),e.TgZ(36,"ion-col",17),e._uU(37),e.qZA()()()()),2&t&&(e.xp6(2),e.Q6J("ngModel",o.selectedType),e.xp6(18),e.Q6J("ngSwitch",o.selectedType),e.xp6(1),e.Q6J("ngSwitchCase","mobile"),e.xp6(1),e.Q6J("ngSwitchCase","account"),e.xp6(2),e.Q6J("ngIf","account"===o.selectedType),e.xp6(1),e.Q6J("ngIf","mobile"===o.selectedType),e.xp6(10),e.Oqu(o.total),e.xp6(2),e.Oqu(o.totaldue))},directives:[d.Gu,d.sr,d.cJ,d.QI,h.JJ,h.On,d.GO,T.A9,T.Yi,d.W2,u.RF,u.n9,d.Nd,d.wI,u.O5,d.aJ,d.Rw,d.td,d.IK,d.u8,d.Ie,d.Q$,u.mk,d.q_,u.sg,d.IJ,d.W4,d.gu,d.fr,d.jY],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.pointer[_ngcontent-%COMP%]{cursor:pointer}h4[_ngcontent-%COMP%]{margin:0!important;font-weight:600}p[_ngcontent-%COMP%]{margin:0!important}.sub[_ngcontent-%COMP%]{font-weight:550;color:gray;font-size:.8rem}.common[_ngcontent-%COMP%]{font-size:.8rem;font-weight:600}.ord[_ngcontent-%COMP%]{color:#3880ff}.comp[_ngcontent-%COMP%]{color:green}.canc[_ngcontent-%COMP%]{color:red}.flrow[_ngcontent-%COMP%]{display:flex;flex-direction:row;place-content:space-between}.flcol[_ngcontent-%COMP%]{display:flex;flex-direction:column}.ordDet[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700;color:gray}.mr10[_ngcontent-%COMP%]{margin-right:10px!important}.mr5[_ngcontent-%COMP%]{margin-top:-5px!important}.f8[_ngcontent-%COMP%]{font-size:.8rem!important}  .mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 10px!important}  .mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:40px!important}  .mat-button-toggle-label-content{padding:0 7px!important;border-right:1px solid lightgray;box-shadow:0 4px 8px #0000001a!important}  .mat-button-toggle-group{overflow:scroll;margin-right:5px;padding:5px}"]}),n})()}];let E=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[O.Bz.forChild(z)],O.Bz]}),n})();var B=s(6195),R=s(7322),L=s(1125);let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.ez,h.u5,d.Pc,E,L.To,R.lN,B.q]]}),n})()}}]);