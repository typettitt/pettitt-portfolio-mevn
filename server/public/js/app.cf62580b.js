(function(t){function e(e){for(var i,n,o=e[0],l=e[1],c=e[2],u=0,b=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&b.push(r[n][0]),r[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(b.length)b.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(i=!1)}i&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},r={app:0},s=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"433c":function(t,e,a){"use strict";var i=a("c99f"),r=a.n(i);e["default"]=r.a},4678:function(t,e,a){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=s,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"px-0",attrs:{fluid:""}},[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)},s=[],n={},o=n,l=a("2877"),c=Object(l["a"])(o,r,s,!1,null,null,null),d=c.exports,u=a("8c4f"),b=a("5f5b"),m=a("b1e0"),f=a("a7fe"),h=a.n(f),p=a("bc3a"),v=a.n(p),w=a("c1df"),g=a.n(w),y=(a("ab8b"),a("f9e3"),a("2dd8"),a("6b16")),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("div",{staticClass:"text-white text-center px-5 mb-5"},[a("h1",[t._v("Leave A Comment")])]),a("b-row",{staticClass:"mb-4",attrs:{"align-h":"center"}},[a("b-button",{staticClass:"mx-4",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(e){return t.openCreateModal()}}},[t._v(" Add A Comment "),a("b-icon",{attrs:{icon:"plus","aria-hidden":"true"}})],1)],1),t._l(t.allReviews,(function(e){return a("b-row",{key:e._id,staticClass:"mb-3",attrs:{"align-h":"center"}},[a("b-card",{staticStyle:{width:"75%"},attrs:{"border-variant":"primary","bg-variant":"dark","text-variant":"white"}},[a("b-card-text",[a("b-row",{staticClass:"mb-2",attrs:{"align-h":"end"}},[a("b-button",{staticClass:"mx-2",attrs:{type:"reset",variant:"secondary",size:"sm"},on:{click:function(a){return t.verifyEdit(e._id)}}},[t._v("Edit")]),a("b-button",{staticClass:"mx-2",attrs:{type:"submit",variant:"danger",size:"sm"},on:{click:function(a){return t.verifyDelete(e._id)}}},[t._v("Delete")])],1),a("b-row",{staticClass:"mb-2",attrs:{"align-h":"between"}},[a("b-col",{attrs:{align:"left",cols:"6"}},[a("small",{staticClass:"mr-2"},[t._v(t._s(e.first_name+" "+e.last_name))])]),a("b-col",{attrs:{align:"right",cols:"6"}},[a("small",[t._v(t._s(t.moment(e.created_at).fromNow()))])])],1),a("b-row",{staticClass:"mx-2"},[t._v(t._s(e.description))])],1)],1)],1)})),a("b-modal",{directives:[{name:"show",rawName:"v-show",value:t.showCreateModal,expression:"showCreateModal"}],attrs:{id:"modal-add-review",title:"Your Comment","button-size":"sm","hide-footer":""},on:{hide:t.cancelCreateModal}},[a("b-form",{on:{submit:t.submitCreateModalForm,reset:t.resetCreateModalForm}},[a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"First Name","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"text",required:"",autocomplete:"off"},model:{value:t.review.first_name,callback:function(e){t.$set(t.review,"first_name",e)},expression:"review.first_name"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-2",label:"Last Name","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",type:"text",autocomplete:"off"},model:{value:t.review.last_name,callback:function(e){t.$set(t.review,"last_name",e)},expression:"review.last_name"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-3",label:"Title","label-for":"input-3"}},[a("b-form-input",{attrs:{id:"input-3",type:"text",autocomplete:"off"},model:{value:t.review.title,callback:function(e){t.$set(t.review,"title",e)},expression:"review.title"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-4",label:"Organization","label-for":"input-4"}},[a("b-form-input",{attrs:{id:"input-4",type:"text",autocomplete:"off"},model:{value:t.review.organization,callback:function(e){t.$set(t.review,"organization",e)},expression:"review.organization"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-5",label:"Email Address","label-for":"input-5",description:"Your email will not be shown or shared."}},[a("b-form-input",{attrs:{id:"input-5",type:"email",placeholder:"example@email.com",autocomplete:"off"},model:{value:t.review.email,callback:function(e){t.$set(t.review,"email",e)},expression:"review.email"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-6",label:"PIN","label-for":"input-6"}},[a("b-form-input",{attrs:{id:"input-6",type:"number",maxlength:"4",autocomplete:"off",required:""},model:{value:t.review.pin,callback:function(e){t.$set(t.review,"pin",e)},expression:"review.pin"}})],1),a("b-tooltip",{attrs:{target:"input-6",triggers:"focus",placement:"bottom"}},[t._v(" This PIN will be used as a verification so you can delete and edit your comment only. Max length of 8. ")])],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-7",label:"Comment","label-for":"input-7"}},[a("b-form-textarea",{attrs:{id:"input-7",placeholder:"Enter your comment here...",required:"",rows:"3",maxlength:t.maxcommentLength,"max-rows":"6",autocomplete:"off"},on:{keyup:function(e){return t.charCount()}},model:{value:t.review.description,callback:function(e){t.$set(t.review,"description",e)},expression:"review.description"}})],1)],1)],1),t._v(" "+t._s(t.totalCharacter)+" / 150 "),a("b-row",{attrs:{"align-h":"end"}},[a("b-button",{staticClass:"mx-2",attrs:{type:"reset",variant:"secondary"}},[t._v("Reset")]),a("b-button",{staticClass:"mx-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)],1),a("b-modal",{directives:[{name:"show",rawName:"v-show",value:t.showVerifyModal,expression:"showVerifyModal"}],attrs:{id:"modal-verify",title:"Enter Your PIN","button-size":"sm","hide-footer":""},on:{hide:t.cancelVerifyModal}},[a("b-form",{on:{submit:t.submitVerifyModal,reset:t.resetVerifyForm}},[a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-8",label:"PIN","label-for":"input-8"}},[a("b-form-input",{attrs:{id:"input-8",type:"number",maxlength:"4",autocomplete:"off",required:""},model:{value:t.verifyPin,callback:function(e){t.verifyPin=e},expression:"verifyPin"}})],1),a("b-tooltip",{attrs:{target:"input-8",triggers:"focus",placement:"bottomleft"}},[t._v(" Enter the PIN you used to create this comment. ")])],1)],1),a("b-row",{attrs:{"align-h":"end"}},[a("b-button",{staticClass:"mx-2",attrs:{type:"reset",variant:"secondary"}},[t._v("Reset")]),a("b-button",{staticClass:"mx-2",attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.verifySubmit))])],1)],1)],1),a("b-modal",{directives:[{name:"show",rawName:"v-show",value:t.showEditModal,expression:"showEditModal"}],attrs:{id:"modal-edit-review",title:"Your comment","button-size":"sm","hide-footer":""},on:{hide:t.cancelEditModal}},[a("b-form",{on:{submit:t.submitCreateModalForm,reset:t.resetCreateModalForm}},[a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"First Name","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"text",required:"",autocomplete:"off"},model:{value:t.review.first_name,callback:function(e){t.$set(t.review,"first_name",e)},expression:"review.first_name"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-2",label:"Last Name","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",type:"text",autocomplete:"off"},model:{value:t.review.last_name,callback:function(e){t.$set(t.review,"last_name",e)},expression:"review.last_name"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-3",label:"Title","label-for":"input-3"}},[a("b-form-input",{attrs:{id:"input-3",type:"text",autocomplete:"off"},model:{value:t.review.title,callback:function(e){t.$set(t.review,"title",e)},expression:"review.title"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-4",label:"Organization","label-for":"input-4"}},[a("b-form-input",{attrs:{id:"input-4",type:"text",autocomplete:"off"},model:{value:t.review.organization,callback:function(e){t.$set(t.review,"organization",e)},expression:"review.organization"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-5",label:"Email Address","label-for":"input-5",description:"Your email will not be shown or shared."}},[a("b-form-input",{attrs:{id:"input-5",type:"email",placeholder:"example@email.com",autocomplete:"off"},model:{value:t.review.email,callback:function(e){t.$set(t.review,"email",e)},expression:"review.email"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-6",label:"PIN","label-for":"input-6"}},[a("b-form-input",{attrs:{id:"input-6",type:"number",maxlength:"4",autocomplete:"off",required:""},model:{value:t.review.pin,callback:function(e){t.$set(t.review,"pin",e)},expression:"review.pin"}})],1),a("b-tooltip",{attrs:{target:"input-6",triggers:"focus",placement:"bottom"}},[t._v(" This PIN will be used as a verification so you can delete and edit your comment only. Max length of 8. ")])],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-7",label:"comment","label-for":"input-7"}},[a("b-form-textarea",{attrs:{id:"input-7",placeholder:"Enter your comment here...",required:"",rows:"3",maxlength:t.maxcommentLength,"max-rows":"6",autocomplete:"off"},on:{keyup:function(e){return t.charCount()}},model:{value:t.review.description,callback:function(e){t.$set(t.review,"description",e)},expression:"review.description"}})],1)],1)],1),t._v(" "+t._s(t.totalCharacter)+" / 150 "),a("b-row",{attrs:{"align-h":"end"}},[a("b-button",{staticClass:"mx-2",attrs:{type:"reset",variant:"secondary"}},[t._v("Reset")]),a("b-button",{staticClass:"mx-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)],1)],2)},x=[],_=(a("a4d3"),a("e01a"),{data:function(){return{review:{first_name:"",last_name:"",email:"",title:"",organization:"",description:"",pin:""},allReviews:[],oneReview:{id:"",first_name:"",last_name:"",email:"",title:"",organization:"",description:"",pin:""},showCreateModal:!1,showEditModal:!1,showVerifyModal:!1,console:"",totalCharacter:0,maxcommentLength:150,verifyPin:"",verifySubmit:""}},created:function(){this.getAllReviews()},methods:{charCount:function(){this.totalCharacter=this.review.description.length},getAllReviews:function(){var t=this,e="api/review";this.axios.get(e).then((function(e){t.allReviews=e.data})).catch((function(t){console.log(t)}))},openCreateModal:function(){this.$bvModal.show("modal-add-review")},openEditModal:function(t){console.log(t)},cancelCreateModal:function(){this.$bvModal.hide("modal-add-review"),this.showCreateModal=!1,this.resetCreateModalForm()},resetCreateModalForm:function(){this.review.first_name="",this.review.last_name="",this.review.email="",this.review.title="",this.review.organization="",this.review.description="",this.review.pin=""},resetOneReview:function(){this.oneReview.id="",this.oneReview.first_name="",this.oneReview.last_name="",this.oneReview.email="",this.oneReview.title="",this.oneReview.organization="",this.oneReview.description="",this.oneReview.pin=""},cancelEditModal:function(){this.$bvModal.hide("modal-edit-review"),this.showEditModal=!1,this.resetEditModalForm()},cancelVerifyModal:function(){},resetEditModalForm:function(){this.review.first_name="",this.review.last_name="",this.review.email="",this.review.title="",this.review.organization="",this.review.description="",this.review.pin=""},resetVerifyForm:function(){},verifyEdit:function(t){this.getReview(t),this.verifySubmit="Edit",this.$bvModal.show("modal-verify")},verifyDelete:function(t){this.getReview(t),this.verifySubmit="Delete",this.$bvModal.show("modal-verify")},submitVerifyModal:function(){"Delete"==this.verifySubmit?this.verifyPin==this.oneReview.pin?this.deleteReview(this.oneReview.id):console.log("incorrect PIN"):"Edit"==this.verifySubmit&&(this.verifyPin==this.oneReview.pin?this.$bvModal.show("modal-edit-review"):console.log("incorrect PIN"))},submitCreateModalForm:function(){var t=this,e="api/review";this.axios.post(e,this.review).then((function(){t.$router.push({name:"review"}),t.getAllReviews()}))},deleteReview:function(t){var e="api/review/"+t;this.resetOneReview(),this.axios.delete(e).then((function(){})).catch((function(t){console.log(t)}))},getReview:function(t){var e=this,a="api/review/"+t;this.resetOneReview(),this.axios.get(a).then((function(t){e.oneReview.id=t.data._id,e.oneReview.first_name=t.data.first_name,e.oneReview.last_name=t.data.last_name,e.oneReview.email=t.data.email,e.oneReview.title=t.data.title,e.oneReview.organization=t.data.organization,e.oneReview.description=t.data.description,e.oneReview.pin=t.data.pin})).catch((function(t){console.log(t)}))}}}),C=_,k=Object(l["a"])(C,j,x,!1,null,null,null),M=k.exports;i["default"].use(u["a"]),i["default"].use(h.a,v.a),i["default"].use(b["a"]),i["default"].use(m["a"]),i["default"].prototype.moment=g.a,i["default"].config.productionTip=!1;var z=[{name:"home",path:"/",component:y["default"],meta:{title:"Tyler Pettitt"}},{name:"comments",path:"/comments",component:M}],S=new u["a"]({mode:"history",routes:z}),R="Tyler Pettitt";S.beforeEach((function(t,e,a){document.title=t.meta.title||R,a()})),new i["default"](i["default"].util.extend({router:S},d)).$mount("#app")},"64ee":function(t,e,a){t.exports=a.p+"img/031-linkedin.926e2dcf.png"},"6b16":function(t,e,a){"use strict";var i=a("f1d9"),r=a("433c"),s=(a("d1f6"),a("2877")),n=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=n.exports},aa52:function(t,e,a){t.exports=a.p+"img/square-headshot.32ca08b8.jpg"},c99f:function(t,e){},d1f6:function(t,e,a){"use strict";var i=a("e247"),r=a.n(i);r.a},d511:function(t,e,a){t.exports=a.p+"img/039-github.d22ee372.png"},e247:function(t,e,a){},f1d9:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return r}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",{staticClass:"px-0",attrs:{fluid:""}},[i("div",{staticClass:"parallax",staticStyle:{height:"100vh"}},[i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("div",{staticClass:"text-white text-center"},[i("b-row",{attrs:{"align-h":"center"}},[i("h1",{staticClass:"text-white text-uppercase font-weight-bold mb-2"},[i("img",{staticClass:"circular--square",attrs:{width:"50%",src:a("aa52")}})])]),i("b-row",{attrs:{"align-h":"center"}},[i("h1",{staticClass:"text-white text-uppercase font-weight-bold mb-2"},[i("strong",[t._v("Tyler Pettitt")])])]),i("b-row",{attrs:{"align-h":"center"}},[i("h5",{staticClass:"text-white text-uppercase font-weight-bold mb-2"},[i("strong",[t._v("Software Engineer")])])]),i("b-row",{attrs:{"align-h":"center"}},[i("p",{staticClass:"text-white text-uppercase font-weight-bold mb-2"},[t._v("Omaha, Nebraska")])])],1)]),i("div",{staticClass:"text-white px-4",attrs:{align:"center"}},[i("h1",{staticClass:"font-weight-bold mt-4 mb-4"},[t._v("About Me")]),i("div",{staticClass:"text-white",attrs:{align:"center"}},[i("p",[t._v(" After earning my Bachelor's degree in Computer Science, I have been working as a software engineer for 3 years. I'm currently a Software Engineer at the University of Nebraska Medical Center, a leader in the world of pateient care, research, and education. I take pride in being able to do meaningful work every day to further company goals and embrace the mission at UNMC: ")]),i("p",[i("i",[t._v('"Our mission is to lead the world in transforming lives to create a healthy future for all individuals and communities through premier educational programs, innovative research and extraordinary patient care."')])]),i("p"),i("p",[t._v(" During my time at UNMC, I have worked hard to maintain my status as an eternal student by undergoing training, attending conferences, and self-learning. Staying open-minded with a positive can-do attitude has brought me every career opportunity thus far. In my free time, you'll find me enjoying the following: exercising, playing sand volleyball, watching motorsports, snowboarding, reading, and simply just enjoying time with my border collie Sadie. ")])]),i("br"),i("br"),i("br")]),i("div",{staticClass:"parallax"},[i("b-row",{attrs:{"align-h":"center"}},[i("h1",{staticClass:"font-weight-bold text-white mt-4 mb-2"},[t._v("My System")])]),i("div",{staticClass:"text-white",attrs:{align:"center"}},[i("p",{staticStyle:{"font-size":"10px"}},[t._v("(They're links, click 'em!)")]),i("b-row",{staticClass:"mt-2 mb-2",attrs:{"align-h":"center"}},[i("a",{staticClass:"nounderline link",attrs:{href:"https://www.linkedin.com/pulse/contagious-positivity-secret-weapon-successful-emil-hauch-jensen/",target:"_blank"}},[t._v("POSITIVITY IS CONTAGIOUS")])]),i("b-row",{staticClass:"mt-4 mb-4",attrs:{"align-h":"center"}},[i("a",{staticClass:"nounderline link",attrs:{href:"http://paulgraham.com/ecw.html",target:"_blank"}},[t._v("EMBRACE CHANGE")])]),i("b-row",{staticClass:"mt-4 mb-4",attrs:{"align-h":"center"}},[i("a",{staticClass:"nounderline link",attrs:{href:"https://www.quora.com/Is-getting-rich-worth-it-9",target:"_blank"}},[t._v("PURSUE PASSIONS, NOT PAYCHECKS")])]),i("b-row",{staticClass:"mt-4 mb-4",attrs:{"align-h":"center"}},[i("a",{staticClass:"nounderline link",attrs:{href:"https://medium.com/@mahnoor.asghar109/never-stop-learning-because-life-never-stops-teaching-ed289f27fde4",target:"_blank"}},[t._v("LEARN EVERY DAY")])]),i("b-row",{staticClass:"mt-4 mb-4",attrs:{"align-h":"center"}},[i("a",{staticClass:"nounderline link",attrs:{href:"https://www.positivityblog.com/how-to-overcome-failure/",target:"_blank"}},[t._v("DO NOT BE AFRAID OF FAILURE")])])],1),i("br")],1),i("div",{staticClass:"text-white px-4",attrs:{align:"center"}},[i("b-row",{attrs:{"align-h":"center"}},[i("h1",{staticClass:"font-weight-bold mt-4"},[t._v("My Journey")])]),i("br"),i("b-card",{staticClass:"mb-4",staticStyle:{"max-width":"50rem"},attrs:{"bg-variant":"dark","border-variant":"secondary"}},[i("b-card-text",[i("b-row",{attrs:{"align-h":"start"}},[i("h4",[i("a",{staticClass:"nounderline text-primary",attrs:{href:"https://www.unmc.edu/",target:"_blank"}},[t._v("University of Nebraska Medical Center")])])]),i("b-row",{attrs:{"align-h":"start"}},[i("h5",{staticClass:"text-success"},[t._v("August 2019 - Present")])]),i("b-row",{attrs:{"align-h":"start"}},[i("h6",[t._v("Omaha, Nebraska")])])],1)],1),i("b-card",{staticClass:"mb-4",staticStyle:{"max-width":"50rem"},attrs:{"bg-variant":"dark","border-variant":"secondary"}},[i("b-card-text",[i("b-row",{attrs:{"align-h":"start"}},[i("h4",[i("a",{staticClass:"nounderline text-primary",attrs:{href:"https://daycos.com/",target:"_blank"}},[t._v("Daycos")])])]),i("b-row",{attrs:{"align-h":"start"}},[i("h5",{staticClass:"text-success"},[t._v("March 2018 - August 2019")])]),i("b-row",{attrs:{"align-h":"start"}},[i("h6",[t._v("Norfolk, Nebraska")])])],1)],1),i("b-card",{staticClass:"mb-4",staticStyle:{"max-width":"50rem"},attrs:{"bg-variant":"dark","border-variant":"secondary"}},[i("b-card-text",[i("b-row",{attrs:{"align-h":"start"}},[i("h4",[i("a",{staticClass:"nounderline text-primary",attrs:{href:"https://www.bestorq.com/",target:"_blank"}},[t._v("Bestorq, Inc. (Internship)")])])]),i("b-row",{attrs:{"align-h":"start"}},[i("h5",{staticClass:"text-success"},[t._v("May 2017 - August 2017")])]),i("b-row",{attrs:{"align-h":"start"}},[i("h6",[t._v("Lincoln, Nebraska")])])],1)],1),i("b-card",{staticClass:"mb-4",staticStyle:{"max-width":"50rem"},attrs:{"bg-variant":"dark","border-variant":"secondary"}},[i("b-card-text",[i("b-row",{attrs:{"align-h":"start"}},[i("h4",{staticClass:"text-primary"},[i("a",{staticClass:"nounderline",attrs:{href:"https://www.wsc.edu/",target:"_blank"}},[t._v("Wayne State College")])])]),i("b-row",{attrs:{"align-h":"start"}},[i("h5",{staticClass:"text-success"},[t._v("B.S. in Computer Science, May 2018")])]),i("b-row",{attrs:{"align-h":"start"}},[i("h6",[t._v("Wayne, Nebraska")])])],1)],1),i("b-card",{staticClass:"mb-4",staticStyle:{"max-width":"50rem"},attrs:{"bg-variant":"dark","border-variant":"secondary"}},[i("b-card-text",[i("b-row",{attrs:{"align-h":"start"}},[i("h4",{staticClass:"text-primary"},[i("a",{staticClass:"nounderline",attrs:{href:"https://northeast.edu/",target:"_blank"}},[t._v("Northeast Community College")])])]),i("b-row",{attrs:{"align-h":"start"}},[i("h5",{staticClass:"text-success"},[t._v("A.S. General Studies, May 2016")])]),i("b-row",{attrs:{"align-h":"start"}},[i("h6",[t._v("Norfolk, Nebraska")])])],1)],1),i("b-card",{staticClass:"mb-4",staticStyle:{"max-width":"50rem","max-height":"50rem"},attrs:{"bg-variant":"dark","border-variant":"secondary"}},[i("b-card-text",[i("b-row",{attrs:{"align-h":"start"}},[i("h4",[i("a",{staticClass:"nounderline text-primary",attrs:{href:"https://www.piercepublic.org/",target:"_blank"}},[t._v("Pierce Jr. Sr. High")])])]),i("b-row",{attrs:{"align-h":"start"}},[i("h5",{staticClass:"text-success"},[t._v("Class of 2013")])]),i("b-row",{attrs:{"align-h":"start"}},[i("h6",[t._v("Pierce, Nebraska")])])],1)],1)],1),i("br"),i("div",{staticClass:"parallax"},[i("b-row",{attrs:{"align-h":"center"}},[i("h1",{staticClass:"font-weight-bold text-white mt-4 mb-4"},[t._v("Stay In Touch")])]),i("b-row",{staticClass:"mb-4",attrs:{"align-h":"center"}},[i("a",{attrs:{href:"https://github.com/typettitt",target:"_blank"}},[i("img",{staticClass:"mr-4",attrs:{src:a("d511"),alt:"github",width:"50px",height:"50px"}})]),i("a",{attrs:{href:"https://www.linkedin.com/in/tyler-pettitt/",target:"_blank"}},[i("img",{attrs:{src:a("64ee"),alt:"linkedin",width:"50px",height:"50px"}})])]),i("div",{staticClass:"text-white px-4",staticStyle:{"font-size":"10px"},attrs:{align:"center"}},[t._v("This projcet was built using the MEVN(MongoDB, Express, Vue, Node) stack. The entire project can be found on my github linked above.")]),i("b-row",{attrs:{"align-h":"center"}},[i("div",{staticClass:"text-white mt-2",staticStyle:{"font-size":"10px"}},[t._v(" Icons made by "),i("a",{staticClass:"nounderline",attrs:{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"}},[t._v("Pixel perfect")]),t._v(" from "),i("a",{staticClass:"nounderline",attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")])])])],1)])},r=[]}});
//# sourceMappingURL=app.cf62580b.js.map