(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,u=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var m=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"433c":function(t,e,a){"use strict";var s=a("c99f"),n=a.n(s);e["default"]=n.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"px-0",attrs:{fluid:""}},[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)},r=[],i={},o=i,c=a("2877"),l=Object(c["a"])(o,n,r,!1,null,null,null),m=l.exports,d=a("8c4f"),u=a("5f5b"),b=a("b1e0"),h=a("a7fe"),f=a.n(h),p=a("bc3a"),g=a.n(p),A=a("c1df"),w=a.n(A),v=a("f2e3"),y=(a("ab8b"),a("f9e3"),a("2dd8"),a("6b16")),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("div",{staticClass:"text-white text-center px-5 mb-5"},[a("h1",[t._v("Leave A Comment")])]),a("b-row",{staticClass:"mb-4",attrs:{"align-h":"center"}},[a("b-button",{staticClass:"mx-4",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(e){return t.openCreateModal()}}},[t._v(" Add A Comment "),a("b-icon",{attrs:{icon:"plus","aria-hidden":"true"}})],1)],1),t._l(t.allComments,(function(e){return a("b-row",{key:e._id,staticClass:"mb-3",attrs:{"align-h":"center"}},[a("b-card",{staticStyle:{width:"75%"},attrs:{"border-variant":"primary","bg-variant":"dark","text-variant":"white"}},[a("b-card-text",[a("b-row",{staticClass:"mb-2",attrs:{"align-h":"between"}},[a("b-col",{attrs:{align:"left",cols:"6"}},[a("small",{staticClass:"mr-2"},[t._v(t._s(e.first_name+" "+e.last_name))])]),a("b-col",{attrs:{align:"right",cols:"6"}},[a("small",[t._v(t._s(t.moment(e.created_at).fromNow()))])])],1),a("b-row",{staticClass:"mx-2"},[t._v(t._s(e.description))]),a("b-row",{staticClass:"mb-2",attrs:{"align-h":"end"}},[a("b-button",{staticClass:"mx-2",attrs:{type:"button",variant:"secondary",size:"sm"},on:{click:function(a){return t.openEditModal(e._id)}}},[t._v("Edit")]),a("b-button",{staticClass:"mx-2",attrs:{type:"button",variant:"danger",size:"sm"},on:{click:function(a){return t.deleteComment(e._id)}}},[t._v("Delete")])],1)],1)],1)],1)})),a("b-modal",{directives:[{name:"show",rawName:"v-show",value:t.showCreateModal,expression:"showCreateModal"}],attrs:{id:"modal-add-comment",title:"Your Comment","button-size":"sm","hide-footer":""},on:{hide:t.cancelCreateModal}},[a("b-form",{on:{submit:t.submitCreateModalForm,reset:t.resetCreateModalForm}},[a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"First Name","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"text",required:"",autocomplete:"off"},model:{value:t.comment.first_name,callback:function(e){t.$set(t.comment,"first_name",e)},expression:"comment.first_name"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-2",label:"Last Name","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",type:"text",autocomplete:"off"},model:{value:t.comment.last_name,callback:function(e){t.$set(t.comment,"last_name",e)},expression:"comment.last_name"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-3",label:"Title","label-for":"input-3"}},[a("b-form-input",{attrs:{id:"input-3",type:"text",autocomplete:"off"},model:{value:t.comment.title,callback:function(e){t.$set(t.comment,"title",e)},expression:"comment.title"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-4",label:"Organization","label-for":"input-4"}},[a("b-form-input",{attrs:{id:"input-4",type:"text",autocomplete:"off"},model:{value:t.comment.organization,callback:function(e){t.$set(t.comment,"organization",e)},expression:"comment.organization"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-7",label:"Comment","label-for":"input-7"}},[a("b-form-textarea",{attrs:{id:"input-7",placeholder:"Enter your comment here...",required:"",rows:"3",maxlength:t.maxcommentLength,"max-rows":"6",autocomplete:"off"},on:{keyup:function(e){return t.charCount()}},model:{value:t.comment.description,callback:function(e){t.$set(t.comment,"description",e)},expression:"comment.description"}})],1)],1)],1),t._v(" "+t._s(t.totalCharacter)+" / 150 "),a("b-row",{attrs:{"align-h":"end"}},[a("b-button",{staticClass:"mx-2",attrs:{type:"reset",variant:"secondary"}},[t._v("Reset")]),a("b-button",{staticClass:"mx-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)],1),a("b-modal",{directives:[{name:"show",rawName:"v-show",value:t.showEditModal,expression:"showEditModal"}],attrs:{id:"modal-edit-comment",title:"Edit Your Comment","button-size":"sm","hide-footer":""},on:{hide:t.cancelEditModal}},[a("b-form",[a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"First Name","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"text",required:"",autocomplete:"off"},model:{value:t.comment.first_name,callback:function(e){t.$set(t.comment,"first_name",e)},expression:"comment.first_name"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-2",label:"Last Name","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",type:"text",autocomplete:"off"},model:{value:t.comment.last_name,callback:function(e){t.$set(t.comment,"last_name",e)},expression:"comment.last_name"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-3",label:"Title","label-for":"input-3"}},[a("b-form-input",{attrs:{id:"input-3",type:"text",autocomplete:"off"},model:{value:t.comment.title,callback:function(e){t.$set(t.comment,"title",e)},expression:"comment.title"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-4",label:"Organization","label-for":"input-4"}},[a("b-form-input",{attrs:{id:"input-4",type:"text",autocomplete:"off"},model:{value:t.comment.organization,callback:function(e){t.$set(t.comment,"organization",e)},expression:"comment.organization"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-7",label:"comment","label-for":"input-7"}},[a("b-form-textarea",{attrs:{id:"input-7",placeholder:"Enter your comment here...",required:"",rows:"3",maxlength:t.maxcommentLength,"max-rows":"6",autocomplete:"off"},on:{keyup:function(e){return t.charCount()}},model:{value:t.comment.description,callback:function(e){t.$set(t.comment,"description",e)},expression:"comment.description"}})],1)],1)],1),t._v(" "+t._s(t.totalCharacter)+" / 150 "),a("b-row",{attrs:{"align-h":"end"}},[a("b-button",{staticClass:"mx-2",attrs:{type:"button",variant:"secondary"},on:{click:t.cancelEditModal}},[t._v("Cancel")]),a("b-button",{staticClass:"mx-2",attrs:{type:"button",variant:"primary"},on:{click:t.submitEditModalForm}},[t._v("Submit")])],1)],1)],1)],2)},j=[],k=(a("a4d3"),a("e01a"),{data:function(){return{comment:{first_name:"",last_name:"",title:"",organization:"",description:""},allComments:[],showCreateModal:!1,showEditModal:!1,showVerifyModal:!1,console:"",totalCharacter:0,maxcommentLength:150,verifyPin:"",verifySubmit:""}},created:function(){this.getAllComments()},methods:{charCount:function(){this.totalCharacter=this.comment.description.length},getAllComments:function(){var t=this,e="api/comment";this.axios.get(e).then((function(e){t.allComments=e.data}))},openCreateModal:function(){this.$bvModal.show("modal-add-comment")},openEditModal:function(t){this.getComment(t),this.$bvModal.show("modal-edit-comment")},cancelCreateModal:function(){this.$bvModal.hide("modal-add-comment"),this.showCreateModal=!1,this.resetCreateModalForm()},resetCreateModalForm:function(){this.comment.first_name="",this.comment.last_name="",this.comment.title="",this.comment.organization="",this.comment.description=""},resetOneComment:function(){this.comment.id="",this.comment.first_name="",this.comment.last_name="",this.comment.title="",this.comment.organization="",this.comment.description=""},cancelEditModal:function(){this.$bvModal.hide("modal-edit-comment"),this.showEditModal=!1,this.resetEditModalForm()},resetEditModalForm:function(){this.comment.first_name="",this.comment.last_name="",this.comment.title="",this.comment.organization="",this.comment.description=""},submitCreateModalForm:function(){var t=this,e="api/comment";this.axios.post(e,this.comment).then((function(){t.getAllComments()}))},submitEditModalForm:function(){var t=this,e="api/comment/"+this.comment.id;this.axios.post(e,this.comment).then((function(){t.getAllComments(),t.cancelEditModal()}))},deleteComment:function(t){var e=this,a="api/comment/"+t;this.resetOneComment(),this.axios.delete(a).then((function(){e.getAllComments()}))},getComment:function(t){var e=this,a="api/comment/"+t;this.resetOneComment(),this.axios.get(a).then((function(t){e.comment.id=t.data._id,e.comment.first_name=t.data.first_name,e.comment.last_name=t.data.last_name,e.comment.title=t.data.title,e.comment.organization=t.data.organization,e.comment.description=t.data.description}))}}}),I=k,x=Object(c["a"])(I,C,j,!1,null,null,null),E=x.exports;s["default"].use(d["a"]),s["default"].use(f.a,g.a),s["default"].use(u["a"]),s["default"].use(b["a"]),s["default"].use(v["a"],{config:{id:"UA-192744249-1"}}),s["default"].prototype.moment=w.a,s["default"].config.productionTip=!1;var S=[{name:"home",path:"/",component:y["default"],meta:{title:"Tyler Pettitt"}},{name:"comments",path:"/comments",component:E}],M=new d["a"]({mode:"history",routes:S}),z="Tyler Pettitt";M.beforeEach((function(t,e,a){document.title=t.meta.title||z,a()})),new s["default"](s["default"].util.extend({router:M},m)).$mount("#app")},"67f3":function(t,e,a){t.exports=a.p+"img/031-linkedin.926e2dcf.png"},"6b16":function(t,e,a){"use strict";var s=a("e632"),n=a("433c"),r=(a("d1f6"),a("2877")),i=Object(r["a"])(n["default"],s["a"],s["b"],!1,null,null,null);e["default"]=i.exports},"7db0":function(t,e,a){t.exports=a.p+"img/039-github.d22ee372.png"},9060:function(t,e,a){t.exports=a.p+"img/WSC.e9bf9472.png"},"90a4":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAMFBMVEUsRqOsuNTm7vv0+///+Pb////AGT3KaH1qe7XL1OqZpsmRn8flsb//5O30ztrajaBXontZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDMgNzkuMTY0NTI3LCAyMDIwLzEwLzE1LTE3OjQ4OjMyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAzLTIxVDIzOjAwOjE1LTA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMy0yMVQyMzo1NTowOS0wNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wMy0yMVQyMzo1NTowOS0wNTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjIiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkNmFmN2EzZS04MTkyLTliNGYtYWQ5OS05NmNhYjk3NzQ1ZWEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MDc0ZGZlMC02OGY5LWQ4NGItYWUxZC1mODEyNGIzOTY5Y2IiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMmFiZWJiMi0xNDYxLTc4NGYtODk1Mi0yOTE1MTYwYTBhZjkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjEyYWJlYmIyLTE0NjEtNzg0Zi04OTUyLTI5MTUxNjBhMGFmOSIgc3RFdnQ6d2hlbj0iMjAyMS0wMy0yMVQyMzowMDoxNS0wNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNmFmN2EzZS04MTkyLTliNGYtYWQ5OS05NmNhYjk3NzQ1ZWEiIHN0RXZ0OndoZW49IjIwMjEtMDMtMjFUMjM6NTU6MDktMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6EjHVjAAAIFUlEQVR42u3cbXObOBQGUHAGG0ps//9/u5s2aRqbl6sr2c3unOfD7nQcIL4HSSBEukG+VTolACJAgAgQIAIEiAABIkAECBABAkSAABEgQASIAAEiQIAIECACBIgAESBABAgQAQJEgAARIAIEiAABIkCACBAgAkSAABEgQAQIEAECRIAIECACBIgAASJAgAgQAQJEgAAR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"},"94d2":function(t,e,a){t.exports=a.p+"img/Daycos.4cfd5450.png"},a699:function(t,e,a){t.exports=a.p+"img/NECC.20f23ffd.png"},aa52:function(t,e,a){t.exports=a.p+"img/square-headshot.32ca08b8.jpg"},c794:function(t,e,a){t.exports=a.p+"img/PHS.39a49cbf.png"},c99f:function(t,e){},d1f6:function(t,e,a){"use strict";var s=a("e247"),n=a.n(s);n.a},e247:function(t,e,a){},e632:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"px-0",staticStyle:{"-ms-overflow-style":"none","scrollbar-width":"none"},attrs:{fluid:""}},[s("div",{staticClass:"parallax",staticStyle:{height:"100vh"}},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"text-white text-center"},[s("b-row",{attrs:{"align-h":"center"}},[s("h1",{staticClass:"text-white text-uppercase font-weight-bold mb-2"},[s("img",{staticClass:"circular--square",attrs:{width:"50%",src:a("aa52")}})])]),s("b-row",{attrs:{"align-h":"center"}},[s("h1",{staticClass:"text-white text-uppercase font-weight-bold mb-2"},[s("strong",[t._v("Tyler Pettitt")])])]),s("b-row",{attrs:{"align-h":"center"}},[s("h5",{staticClass:"text-white text-uppercase font-weight-bold mb-2"},[s("strong",[t._v("Software Engineer")])])]),s("b-row",{attrs:{"align-h":"center"}},[s("p",{staticClass:"text-white text-uppercase font-weight-bold mb-2"},[t._v("Norfolk, Nebraska")])])],1)]),s("div",{staticClass:"text-white px-4",attrs:{align:"center"}},[s("h1",{staticClass:"font-weight-bold mt-4 mb-4"},[t._v("About Me")]),s("div",{staticClass:"text-white",attrs:{align:"center"}},[s("p",[t._v(" Hello, I'm Tyler Pettitt. I'm a full-stack software engineer with "+t._s(t.moment([2018,2,1]).fromNow(!0))+" of experience. ")]),s("p",[t._v(" After testing the waters in different majors like mechanical engineering, programming, and even the realm of healthcare, I settled on computer science. I graduated from Northeast Community College in 2016 with an Associate of Arts degree where I mostly focused on general studies and a few information technology courses. From there, I earned my Bachelor's degree in Computer Science at Wayne State College in May 2018. During my career as a software engineer, I have worked diligently to maintain my status as an eternal student through instructor-led training, conferences, and self-directed learning. You'll find that my work experience has exposed me to diverse organizations both small and large. Looking back, I think my personable character and ability to enter every situation I come across with an open mind has brought me each and every opportunity thus far. ")])]),s("br"),s("br"),s("br")]),s("div",{staticClass:"parallax"},[s("b-row",{attrs:{"align-h":"center"}},[s("h1",{staticClass:"font-weight-bold text-white mt-4 mb-2"},[t._v("Core Values")])]),s("div",{staticClass:"text-white",attrs:{align:"center"}},[s("p",{staticStyle:{"font-size":"10px"}},[t._v("(They're links, click 'em!)")]),s("b-row",{staticClass:"mt-2 mb-2",attrs:{"align-h":"center"}},[s("a",{staticClass:"nounderline link",attrs:{href:"https://www.linkedin.com/pulse/contagious-positivity-secret-weapon-successful-emil-hauch-jensen/",target:"_blank"}},[t._v("POSITIVITY IS CONTAGIOUS")])]),s("b-row",{staticClass:"mt-4 mb-4",attrs:{"align-h":"center"}},[s("a",{staticClass:"nounderline link",attrs:{href:"http://paulgraham.com/ecw.html",target:"_blank"}},[t._v("EMBRACE CHANGE")])]),s("b-row",{staticClass:"mt-4 mb-4",attrs:{"align-h":"center"}},[s("a",{staticClass:"nounderline link",attrs:{href:"https://www.quora.com/Is-getting-rich-worth-it-9",target:"_blank"}},[t._v("PURSUE PASSIONS, NOT PAYCHECKS")])]),s("b-row",{staticClass:"mt-4 mb-4",attrs:{"align-h":"center"}},[s("a",{staticClass:"nounderline link",attrs:{href:"https://medium.com/@mahnoor.asghar109/never-stop-learning-because-life-never-stops-teaching-ed289f27fde4",target:"_blank"}},[t._v("LEARN EVERY DAY")])]),s("b-row",{staticClass:"mt-4 mb-4",attrs:{"align-h":"center"}},[s("a",{staticClass:"nounderline link",attrs:{href:"https://www.positivityblog.com/how-to-overcome-failure/",target:"_blank"}},[t._v("DO NOT BE AFRAID OF FAILURE")])])],1),s("br")],1),s("div",{staticClass:"text-white px-4",attrs:{align:"center"}},[s("b-row",{attrs:{"align-h":"center"}},[s("h1",{staticClass:"font-weight-bold mt-4"},[t._v("Journey")])]),s("br"),s("b-card",{staticClass:"mb-4",staticStyle:{"max-width":"50rem","max-height":"50rem"},attrs:{"bg-variant":"dark","border-variant":"secondary"}},[s("b-img-lazy",{attrs:{fluid:"",src:a("c794")}}),s("b-card-text",[s("b-row",{attrs:{"align-h":"start"}},[s("h4",[s("a",{staticClass:"nounderline text-primary",attrs:{href:"https://www.piercepublic.org/",target:"_blank"}},[t._v("Pierce Jr. Sr. High")])])]),s("b-row",{attrs:{"align-h":"start"}},[s("h5",{staticClass:"text-success"},[t._v("Class of 2013")])]),s("b-row",{attrs:{"align-h":"start"}},[s("h6",[t._v("Pierce, Nebraska")]),s("p",{staticClass:"text-left"},[t._v("In 2013, I graduated from a small-town high school along with 50 others where I was a two-sport athlete competing in football and track. You just might find my hudl highlight reel floating around the web and if you look hard enough, maybe even a college football headshot.")])])],1)],1),s("b-card",{staticClass:"mb-4",staticStyle:{"max-width":"50rem"},attrs:{"bg-variant":"dark","border-variant":"secondary"}},[s("b-img-lazy",{attrs:{fluid:"",src:a("a699")}}),s("b-card-text",[s("b-row",{attrs:{"align-h":"start"}},[s("h4",{staticClass:"text-primary"},[s("a",{staticClass:"nounderline",attrs:{href:"https://northeast.edu/",target:"_blank"}},[t._v("Northeast Community College")])])]),s("b-row",{attrs:{"align-h":"start"}},[s("h5",{staticClass:"text-success"},[t._v("A.A. General Studies, May 2016")])]),s("b-row",{attrs:{"align-h":"start"}},[s("h6",[t._v("Norfolk, Nebraska")]),s("p",{staticClass:"text-left"},[t._v("At NECC, I focused on taking care of general studies requirements that would go towards my bachelor's degree. I completed my A.A. with a 3.8 cumulative grade point average.")])])],1)],1),s("b-card",{staticClass:"mb-4",staticStyle:{"max-width":"50rem"},attrs:{"bg-variant":"dark","border-variant":"secondary"}},[s("b-img-lazy",{attrs:{fluid:"",src:a("90a4")}}),s("b-card-text",[s("b-row",{attrs:{"align-h":"start"}},[s("h4",[s("a",{staticClass:"nounderline text-primary",attrs:{href:"https://www.bestorq.com/",target:"_blank"}},[t._v("Bestorq, Inc. (Internship)")])])]),s("b-row",{attrs:{"align-h":"start"}},[s("h5",{staticClass:"text-success"},[t._v("May 2017 - August 2017")])]),s("b-row",{attrs:{"align-h":"start"}},[s("h6",[t._v("Lincoln, Nebraska")]),s("p",{staticClass:"text-left"},[t._v("During the summer of 2017, I completed an internship at Bestorq, Inc. in Lincoln, Nebraska. Bestorq is a v-belt and timing belt distributor. Bestorq's main focus aside from selling belts is quality assurance. Because quality assurance is the main priority, I had the opportunity to do some embedded tasks like making small adjustments to tolerance thresholds on both belt cutting and belt measuring machines. During my summer, I completed web development tasks on both their internal web application as well as an e-commerce website. My main task for the summer was to create a "),s("a",{attrs:{target:"_blank",href:"https://www.bestorq.com/LGLookup.asp"}},[t._v("lookup page")]),t._v(" so customers could match their lawn and garden machine to a Bestorq belt part number. Some of the main technologies used were SQL Server, ASP.NET, C#, and jQuery.")])])],1)],1),s("b-card",{staticClass:"mb-4",staticStyle:{"max-width":"50rem"},attrs:{"bg-variant":"dark","border-variant":"secondary"}},[s("b-img-lazy",{attrs:{fluid:"",src:a("9060")}}),s("b-card-text",[s("b-row",{attrs:{"align-h":"start"}},[s("h4",{staticClass:"text-primary"},[s("a",{staticClass:"nounderline",attrs:{href:"https://www.wsc.edu/",target:"_blank"}},[t._v("Wayne State College")])])]),s("b-row",{attrs:{"align-h":"start"}},[s("h5",{staticClass:"text-success"},[t._v("B.S. in Computer Science, May 2018")])]),s("b-row",{attrs:{"align-h":"start"}},[s("h6",[t._v("Wayne, Nebraska")]),s("p",{staticClass:"text-left"},[t._v("I was holding a 4.0 GPA up until my senior spring semester where I was in class until noon, working part-time at Daycos, and also bartending at night. I completed my B.S. at WSC with my cumulative GPA resting at 3.4.")])])],1)],1),s("b-card",{staticClass:"mb-4",staticStyle:{"max-width":"50rem"},attrs:{"bg-variant":"dark","border-variant":"secondary"}},[s("b-img-lazy",{attrs:{fluid:"",src:a("94d2")}}),s("b-card-text",[s("b-row",{attrs:{"align-h":"start"}},[s("h4",[s("a",{staticClass:"nounderline text-primary",attrs:{href:"https://daycos.com/",target:"_blank"}},[t._v("Daycos")])])]),s("b-row",{attrs:{"align-h":"start"}},[s("h5",{staticClass:"text-success"},[t._v("March 2018 - August 2019")])]),s("b-row",{attrs:{"align-h":"start"}},[s("h6",[t._v("Norfolk, Nebraska")]),s("p",{staticClass:"text-left"},[t._v("Daycos falls into the transportation industry by offering revenue solutions to transportation companies. During my time at the organization, we were on the search for additional revenue sources. I was able to help develop a commercial freight product that would allow us to ensure accurate billing, exception management, and also post-audit services for carriers.")]),s("p",{staticClass:"text-left"},[t._v("On the more technical side, developing this product involved writing a C# web API that included 21 endpoints to process new incoming shipments and provide CRUD operations for the web application. The web application allowed Daycos employees to complete audits, billing, and give customers visibility as well. The web application utilized node.js, BootStrap, Svelte.js, PostgreSQL backend, and GraphQL on the frontend. As part of this product, the API hit a very cool process that involved some computer vision and machine learning to extract data such as scale data from weight tickets.")])])],1)],1),s("b-card",{staticClass:"mb-4",staticStyle:{"max-width":"50rem"},attrs:{"bg-variant":"dark","border-variant":"secondary"}},[s("b-img-lazy",{attrs:{fluid:"",src:a("fbb4")}}),s("b-card-text",[s("b-row",{attrs:{"align-h":"start"}},[s("h4",[s("a",{staticClass:"nounderline text-primary",attrs:{href:"https://www.unmc.edu/",target:"_blank"}},[t._v("University of Nebraska Medical Center")])])]),s("b-row",{attrs:{"align-h":"start"}},[s("h5",{staticClass:"text-success"},[t._v("August 2019 - Present")])]),s("b-row",{attrs:{"align-h":"start"}},[s("h6",[t._v("Omaha, Nebraska")]),s("p",{staticClass:"text-left"},[t._v("Currently, I am working at the University of Nebraska Medical Center where I am a fully remote employee. Since UNMC is part of the University of Nebraska and also working very closely with Nebraska Medicine, I get to experience and work with tons of different people and projects. One day it could be making updates to an API that feeds the Nebraska Medicine Digital Front Door mobile app, working on a UNMC graduate studies internal application, or meeting with engineers from UNO, UNMC, UNL, and UNK campuses on a University-wide project. With 200 unique internal applications, I have the opportunity to work on many different things. ")]),s("p",{staticClass:"text-left"},[t._v("Now for the buzz words and technical stuff. I mostly work with PHP, jQuery, and Sybase for the majority of our internal applications. But as part of a modernization initiative, I am also working with PHP in the Laravel framework with vue.js on the frontend and SQL Server 2019. I also completed MuleSoft instructor-led training and occasionally work on API integrations such as Epic MyChart and SailPoint. One of my larger accomplishments so far at UNMC was the work I completed on the COVID-19 "),s("a",{attrs:{target:"_blank",href:"https://tracker.nebraskamed.com/"}},[t._v("Symptom Tracker")]),t._v(" application. The project was developed in Laravel, BootStrap, Vue.js, PHP, and MySQL. My contribution to the project was building out an email notification symptom to remind users to track every day if they forget to track once they've started the process. A few months after project completion, this project and Nebraska Medicine's Digital Front Door were "),s("a",{attrs:{target:"_blank",href:"https://www.wsj.com/articles/rethinking-the-hospital-for-the-next-pandemic-11591652504?reflink=desktopwebshare_permalink"}},[t._v("recognized by the Wall Street Journal")]),t._v(".")])])],1)],1)],1),s("br"),s("div",{staticClass:"parallax"},[s("b-row",{attrs:{"align-h":"center"}},[s("h1",{staticClass:"font-weight-bold text-white mt-4 mb-4"},[t._v("Stay In Touch")])]),s("b-row",{staticClass:"mb-4",attrs:{"align-h":"center"}},[s("a",{attrs:{href:"https://github.com/typettitt",target:"_blank"}},[s("img",{staticClass:"mr-4",attrs:{src:a("7db0"),alt:"github",width:"50px",height:"50px"}})]),s("a",{attrs:{href:"https://www.linkedin.com/in/tyler-pettitt/",target:"_blank"}},[s("img",{attrs:{src:a("67f3"),alt:"linkedin",width:"50px",height:"50px"}})])]),s("div",{staticClass:"text-white px-4",staticStyle:{"font-size":"10px"},attrs:{align:"center"}},[t._v("This projcet was built using the MEVN(MongoDB, Express, Vue, Node) stack. The entire project can be found on my github linked above.")]),s("b-row",{attrs:{"align-h":"center"}},[s("div",{staticClass:"text-white mt-2",staticStyle:{"font-size":"10px"}},[t._v(" Icons made by "),s("a",{staticClass:"nounderline",attrs:{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"}},[t._v("Pixel perfect")]),t._v(" from "),s("a",{staticClass:"nounderline",attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")])])])],1)])},n=[]},fbb4:function(t,e,a){t.exports=a.p+"img/UNMC.189aa01b.png"}});
//# sourceMappingURL=app.0ac1944d.js.map