(function(e){function t(t){for(var i,d,o=t[0],u=t[1],s=t[2],c=0,f=[];c<o.length;c++)d=o[c],a[d]&&f.push(a[d][0]),a[d]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(i=!1)}i&&(r.splice(t--,1),e=d(d.s=n[0]))}return e}var i={},a={app:0},r=[];function d(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=e,d.c=i,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)d.d(n,i,function(t){return e[t]}.bind(null,i));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/static/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=n("8c4f"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card-title",[n("h1",[e._v("User Credit")])]),n("v-card-text",[n("v-container",{attrs:{left:"","pa-2":""}},[n("v-layout",[n("h3",[e._v("Search by RFID")])]),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs3:""}},[n("v-text-field",{attrs:{label:"RFID Number"},model:{value:e.rfidInput,callback:function(t){e.rfidInput=t},expression:"rfidInput"}})],1),n("v-flex",[n("v-btn",{on:{click:function(t){return e.getItem()}}},[e._v("Search")])],1)],1)],1),n("v-container",{attrs:{left:"","pl-0":"","pt-2":"","pb-2":"","pr-2":""}},[n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){t.on;return[n("v-btn",{on:{click:function(t){return e.newItem()}}},[e._v("Add New User")]),n("v-btn",{on:{click:function(t){return e.getItems()}}},[e._v("Reload Table")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[-1==this.editedIndex?n("span",[e._v("New User")]):n("span",[e._v("User "+e._s(e.editedItem.student_number))])]),n("v-card-text",[n("v-container",[n("v-flex",[-1==this.editedIndex?n("v-text-field",{attrs:{label:"RFID Serial Number"},model:{value:e.editedItem.rfid_number,callback:function(t){e.$set(e.editedItem,"rfid_number",t)},expression:"editedItem.rfid_number"}}):e._e()],1),n("v-flex",[n("v-text-field",{attrs:{label:"Student Number"},model:{value:e.editedItem.student_number,callback:function(t){e.$set(e.editedItem,"student_number",t)},expression:"editedItem.student_number"}})],1),n("v-flex",[n("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),n("v-flex",{attrs:{xs5:""}},[e._v("\n                Balance:\n                "),n("v-layout",{attrs:{"justify-space-between":""}},[n("v-flex",{attrs:{xs2:""}},[n("v-text-field",{attrs:{label:"H",suffix:""},model:{value:e.editedHour,callback:function(t){e.editedHour=t},expression:"editedHour"}})],1),n("v-flex",{attrs:{xs2:""}},[n("v-text-field",{attrs:{label:"M",suffix:""},model:{value:e.editedMinute,callback:function(t){e.editedMinute=t},expression:"editedMinute"}})],1),n("v-flex",{attrs:{xs2:""}},[n("v-text-field",{attrs:{label:"S",suffix:""},model:{value:e.editedSeconds,callback:function(t){e.editedSeconds=t},expression:"editedSeconds"}})],1)],1)],1),n("v-flex",[n("v-btn",{on:{click:function(t){return e.addThirtyMins()}}},[e._v("Add 30 minutes")]),n("v-btn",{on:{click:function(t){return e.addOneHour()}}},[e._v("Add 1 hour")])],1)],1)],1),n("v-card-actions",[n("v-btn",{on:{click:function(t){return e.close()}}},[e._v("Cancel")]),n("v-btn",{staticClass:"green",on:{click:function(t){return e.submitItem()}}},[e._v("Submit")])],1)],1)],1)],1),n("v-data-table",{attrs:{headers:e.headers,items:e.users},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[e._v(e._s(t.item.rfid_number))]),n("td",[e._v(e._s(t.item.student_number))]),n("td",[e._v(e._s(t.item.name))]),n("td",[e._v(e._s(e.formatTime(t.item.balance)))]),n("td",[n("v-icon",{attrs:{color:e.isUsingColor(t.item.is_using)}},[e._v(e._s(e.isUsingIcon(t.item.is_using)))])],1),n("td",[n("v-icon",{attrs:{color:"green"},on:{click:function(n){return e.editItem(t.item)}}},[e._v("edit")]),n("v-icon",{attrs:{color:"red"},on:{click:function(n){return e.deleteItem(t.item)}}},[e._v("delete")])],1)]}}])})],1)],1)},d=[],o=(n("7f7f"),{name:"DataTable",data:function(){return{rfidInput:0,dialog:!1,editedIndex:-1,editedItem:{student_number:0,name:"",rfid_number:0,balance:0},editedHour:0,editedMinute:0,editedSeconds:0,defaultItem:{student_number:0,balance:0},headers:[{text:"RFID Number",align:"left",sortable:!0,value:"rfid_number"},{text:"Student Number",align:"left",sortable:!0,value:"student_number"},{text:"Student Name",align:"left",sortable:!0,value:"name"},{text:"Balance",align:"left",sortable:!0,value:"balance"},{text:"In Use",align:"left",sortable:!0,value:"is_using"},{text:"Actions",align:"left",sortable:!1,value:"student_number"}],users:[]}},mounted:function(){this.getItems()},methods:{isUsingIcon:function(e){return e?"power":"power_off"},isUsingColor:function(e){return e?"blue":"#424242"},getItems:function(){var e=this;this.$http.get("/students").then(function(t){e.users=t.data}).catch(function(e){console.log(e)})},getItem:function(){var e=this;this.$http.get("/students/".concat(this.rfidInput)).then(function(t){e.users=[],e.users[0]=t.data}).catch(function(e){console.log(e),console.log("RFID Number not found!")})},formatTime:function(e){var t=parseInt(e/3600),n=parseInt(e%3600/60),i=e%60;return t=(t<10?"0":"")+t,n=(n<10?"0":"")+n,i=(i<10?"0":"")+i,t+":"+n+":"+i},formatEditedTime:function(e,t,n){return 3600*e+60*t+parseInt(n)},addThirtyMins:function(){this.editedMinute=this.editedMinute+30},addOneHour:function(){this.editedHour=this.editedHour+1},newItem:function(){this.editedIndex=-1,this.editedItem.student_number="0",this.editedItem.balance=0,this.dialog=!0},editItem:function(e){this.editedIndex=this.users.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedHour=0,this.editedMinute=0,this.editedSeconds=0,e.balance>3600&&(this.editedHour=Math.floor(e.balance/3600)),e.balance>60&&(this.editedMinute=Math.floor(e.balance%3600/60)),e.balance>1&&(this.editedSeconds=Math.floor(e.balance%60))},close:function(){this.editedItem=Object.assign({},{student_number:0,name:"",rfid_number:0,balance:0}),this.dialog=!1,this.editedHour=0,this.editedMinute=0,this.editedSeconds=0},submitItem:function(){var e=this;this.editedItem.balance=this.formatEditedTime(this.editedHour,this.editedMinute,this.editedSeconds),this.editedIndex>-1?this.$http.patch("/students/".concat(this.editedItem.rfid_number,"/"),{name:this.editedItem.name,balance:this.editedItem.balance,student_number:this.editedItem.student_number}).then(function(t){e.getItems(),console.log(t)}).catch(function(e){console.log(e)}):this.$http.post("/students/",{student_number:this.editedItem.student_number,name:this.editedItem.name,balance:this.editedItem.balance,rfid_number:this.editedItem.rfid_number}).then(function(t){e.getItems(),console.log(t)}).catch(function(e){console.log(e)}),this.editedItem=Object.assign({},{student_number:0,name:"",rfid_number:0,balance:0}),this.editedHour=0,this.editedMinute=0,this.editedSeconds=0,this.close()},deleteItem:function(e){var t=this;confirm("Are you sure you want to delete rfid number "+e.rfid_number+"?")&&this.$http.delete("/students/".concat(e.rfid_number,"/")).then(function(e){console.log(e),t.getItems()}).catch(function(e){console.log(e)})}}}),u=o,s=n("2877"),l=n("6544"),c=n.n(l),f=n("8336"),m=n("b0af"),v=n("99d9"),b=n("12b2"),h=n("a523"),p=n("8fea"),_=n("169a"),g=n("0e8f"),x=n("132d"),I=n("a722"),y=n("2677"),V=Object(s["a"])(u,r,d,!1,null,"e6ff015a",null),k=V.exports;c()(V,{VBtn:f["a"],VCard:m["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:b["a"],VContainer:h["a"],VDataTable:p["a"],VDialog:_["a"],VFlex:g["a"],VIcon:x["a"],VLayout:I["a"],VTextField:y["a"]});var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",{attrs:{"grid-list-md":"",fluid:""}},[n("v-layout",[n("v-flex",[e.validUser?n("v-card",[n("v-card-title",[n("h1",[e._v("User: "+e._s(this.userData.name))])]),n("v-card-text",[n("h3",[e._v("Student Number: "+e._s(this.userData.student_number))]),n("h3",[e._v("RFID Number: "+e._s(this.userData.rfid_number))]),n("h3",[e._v("Time Left: "+e._s(e.formatTime(this.userData.balance)))])]),n("v-card-actions",[n("v-btn",{on:{click:function(t){return e.logout()}}},[e._v("LOGOUT")])],1)],1):n("v-card",[n("v-card-title",[n("h1",[e._v("Not a valid user")])]),n("v-card-actions",[n("v-btn",{attrs:{color:"red"},on:{click:function(t){return e.logout()}}},[e._v("BACK")])],1)],1)],1)],1)],1)],1)},w=[],T={data:function(){return{validUser:!1,userData:{}}},computed:{rfid_number:function(){return this.$route.params.rfid_number}},mounted:function(){this.getUser(this.rfid_number)},methods:{getUser:function(e){var t=this;this.$http.get("/students/".concat(e,"/")).then(function(e){t.userData=e.data,t.validUser=!0,console.log(e)}).catch(function(e){t.validUser=!1,console.log(e)})},formatTime:function(e){var t=parseInt(e/3600),n=parseInt(e%3600/60),i=e%60;return t=(t<10?"0":"")+t,n=(n<10?"0":"")+n,i=(i<10?"0":"")+i,t+":"+n+":"+i},logout:function(){this.$router.push("/login")}}},C=T,M=Object(s["a"])(C,S,w,!1,null,null,null),O=M.exports;c()(M,{VBtn:f["a"],VCard:m["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:b["a"],VContainer:h["a"],VFlex:g["a"],VLayout:I["a"]});var U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",[n("v-flex",[n("h1",[e._v("Student Login")])])],1),n("v-layout",[n("v-flex",[n("v-card",[n("v-card-text",[n("v-text-field",{attrs:{label:"RFID Number"},model:{value:e.rfid_number,callback:function(t){e.rfid_number=t},expression:"rfid_number"}})],1),n("v-card-actions",[n("v-btn",{attrs:{color:"green"},on:{click:function(t){return e.gotoUserPage()}}},[e._v("Login")])],1)],1)],1)],1)],1)},$=[],D={data:function(){return{rfid_number:0}},methods:{gotoUserPage:function(){this.$router.push("/viewing/".concat(this.rfid_number))}}},j=D,H=Object(s["a"])(j,U,$,!1,null,null,null),N=H.exports;c()(H,{VBtn:f["a"],VCard:m["a"],VCardActions:v["a"],VCardText:v["b"],VContainer:h["a"],VFlex:g["a"],VLayout:I["a"],VTextField:y["a"]}),i["default"].use(a["a"]);var F=new a["a"]({mode:"history",routes:[{path:"/admin",name:"admin",component:k},{path:"/login",name:"login",component:N},{path:"/viewing/:rfid_number?",name:"student",component:O}]}),A=F,R=n("bb71");n("da64");i["default"].use(R["a"],{iconfont:"md"});var L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-card",[n("router-view")],1)],1)},P=[],B={name:"App",components:{DataTable:k},data:function(){return{}}},E=B,J=n("7496"),G=Object(s["a"])(E,L,P,!1,null,null,null),K=G.exports;c()(G,{VApp:J["a"],VCard:m["a"]});var q=n("ce5b"),z=n.n(q),Q=(n("bf40"),n("bc3a")),W=n.n(Q);i["default"].prototype.$http=W.a,W.a.defaults.baseURL="/api/",i["default"].config.productionTip=!1,i["default"].use(z.a),new i["default"]({render:function(e){return e(K)},router:A}).$mount("#app")}});
//# sourceMappingURL=app.938b87ba.js.map