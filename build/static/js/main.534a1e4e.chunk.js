(this.webpackJsonpbybrisk=this.webpackJsonpbybrisk||[]).push([[1],{115:function(e,t,a){},48:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"i",(function(){return d})),a.d(t,"h",(function(){return f})),a.d(t,"l",(function(){return h})),a.d(t,"f",(function(){return y})),a.d(t,"b",(function(){return v})),a.d(t,"k",(function(){return w})),a.d(t,"j",(function(){return E})),a.d(t,"m",(function(){return j})),a.d(t,"c",(function(){return D})),a.d(t,"g",(function(){return A})),a.d(t,"d",(function(){return N})),a.d(t,"e",(function(){return R}));var n=a(3),r=a.n(n),c=a(12),o=a(11),i=a.n(o);const s="https://bybriskbackend.herokuapp.com";function u(e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(r.a.mark((function e(t){var a,n,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.article,n=t.actions,c=t.closeModal,o=t.enqueueSnackbar,i.a.post("".concat(s,"/agents/addAgent"),{article:a}).then(e=>{n.setSubmitting(!1),c({makeRequest:!0}),o("Agent Added Succesfully",{variant:"success",autoHideDuration:2e3})});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({url:"".concat(s,"/agents/fetchAgents?bybid=").concat(t.bybId),method:"GET"});case 2:null!==(a=e.sent).data.result&&t.setAgents(a.data.result);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({url:"".concat(s,"/agents/fetchAgentDetails?id=").concat(t.id),method:"GET"});case 2:a=e.sent,t.setDetails(a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(r.a.mark((function e(t){var a,n,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.article,n=t.actions,c=t.setEditing,o=t.enqueueSnackbar,console.log("called"),i.a.post("".concat(s,"/agents/modifyAgent"),{article:a}).then(e=>{n.setSubmitting(!1),c(!1),o(e.data.message,{variant:"success",autoHideDuration:2e3})});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(r.a.mark((function e(t){var a,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.enqueueSnackbar,n=t.id,c=t.handleClose,e.next=3,i()({url:"".concat(s,"/agents/delteAgent?id=").concat(n),method:"GET"}).then(e=>{c({makeRequest:!0}),a("Agent Deleted Succesfully",{variant:"success",autoHideDuration:2e3})});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(r.a.mark((function e(t){var a,n,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.article,n=t.actions,c=t.closeModal,o=t.enqueueSnackbar,i.a.post("".concat(s,"/delivery/addDelivery"),{article:a}).then(e=>{n.setSubmitting(!1),c({makeRequest:!0}),o("Delivery Added Succesfully",{variant:"success",autoHideDuration:2e3})});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(r.a.mark((function e(t){var a,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,n=t.setDetails,e.next=3,i()({url:"".concat(s,"/delivery/deliveryDetail?id=").concat(a),method:"GET"});case 3:c=e.sent,n(c.data),console.log(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({url:"".concat(s,"/delivery/fetchDeliveries?bybid=").concat(t.bybId),method:"GET"});case 2:null!==(a=e.sent).data.result&&(console.log(a.data.hits.hits),t.setDelivery(a.data.hits.hits));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return S.apply(this,arguments)}function S(){return(S=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.param,n=t.setDelivery,console.log(t,"-----------------props"),i.a.post("".concat(s,"/delivery/modifyStatus"),{param:JSON.stringify(a)}).then(e=>{E({bybId:a.BybID,setDelivery:n})});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return I.apply(this,arguments)}function I(){return(I=Object(c.a)(r.a.mark((function e(t){var a,n,c,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.article,n=t.dispatch,c=t.history,o=t.actions,u=t.enqueueSnackbar,i.a.post("".concat(s,"/onboarding/createAccount"),{article:a}).then(e=>(localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("bybId",JSON.stringify(e.data.bybID)),n({type:"LOG_IN",payload:!0}),n({type:"ID",payload:e.data.bybID}),n({type:"USER",payload:a}),o.setSubmitting(!1),c.push("/dashboard"),u("Account Created Succesfully",{variant:"success",autoHideDuration:2e3}),e));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return M.apply(this,arguments)}function M(){return(M=Object(c.a)(r.a.mark((function e(t){var a,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.bybId,n=t.dispatch,e.next=3,i()({url:"".concat(s,"/onboarding/fetchAccountDetails/?id=").concat(a),method:"GET"});case 3:return c=e.sent,n({type:"USER",payload:c.data}),console.log(c),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return q.apply(this,arguments)}function q(){return(q=Object(c.a)(r.a.mark((function e(t){var a,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.newDetails,n=t.enqueueSnackbar,c=t.close,i.a.post("".concat(s,"/onboarding/updateAccount"),{newDetails:a}).then(e=>{c(),n("Account Password Changed",{variant:"success",autoHideDuration:2e3})});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return C.apply(this,arguments)}function C(){return(C=Object(c.a)(r.a.mark((function e(t){var a,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.newDetails,n=t.enqueueSnackbar,c=t.close,i.a.post("".concat(s,"/onboarding/updatePassword"),{newDetails:a}).then(e=>{c(),n("Account Updated Succesfully",{variant:"success",autoHideDuration:2e3})});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},54:function(e,t,a){e.exports=a.p+"static/media/logo.a9cdc4ec.png"},55:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return S}));var n=a(147),r=a(0),c=a.n(r),o=a(25),i=a(42),s=a(49),u=a(4),l=a(50);const d=e=>{let t=e.component,a=Object(l.a)(e,["component"]);const n=Object(o.c)(e=>e.login);return c.a.createElement(u.b,Object.assign({},a,{render:e=>n?c.a.createElement(t,e):c.a.createElement(u.a,{to:{pathname:"/",state:{from:e.location}}})}))};var p=a(48),f=a(71),b=a(74),h=a(148);let m=Object(b.a)({breakpoints:{values:{xs:300,sm:450,md:800,lg:1e3,xl:1400}},palette:{secondary:{main:"#4caf50"},primary:{main:"#057g78"}},typography:{fontFamily:"Comic Sans MS"},spacing:8,overrides:{MuiOutlinedInput:{root:{maxWidth:400,borderRadius:60}},MuiIconButton:{root:{color:"#ffffff"}},MuiAccordion:{root:{background:"#061336",color:"#ffffff"}},MuiToolbar:{root:{}},MuiListItemIcon:{root:{color:"#ffffff"}},MuiFormLabel:{root:{fontSize:"1rem",color:"#000000"}},MuiAccordionDetails:{root:{flexDirection:"column",paddingLeft:"2rem",backgroundColor:"#142245",textAlign:"left"}},MuiDrawer:{paper:{backgroundColor:"#061336",color:"#ffffff"}},MuiTableSortLabel:{icon:{color:"#ffffff"}},MuiButton:{root:{maxWidth:300,width:"100%"}},MuiPaper:{rounded:{borderRadius:12}}},props:{MuiCheckbox:{disableRipple:!0}}});var y=m=Object(h.a)(m),g=a(35),v=a(19);var k=(e={login:!1,user:[],bybId:"",Agents:[]},t)=>{switch(t.type){case"LOG_IN":return Object(v.a)(Object(v.a)({},e),{},{login:t.payload});case"ID":return Object(v.a)(Object(v.a)({},e),{},{bybId:t.payload});case"AddAgent":let a=e.Agents;return a.push(t.payload),Object(v.a)(Object(v.a)({},e),{},{Agents:a});case"USER":return Object(v.a)(Object(v.a)({},e),{},{user:t.payload});default:return e}};var w=Object(g.b)(k);a(79);const O=c.a.lazy(()=>Promise.all([a.e(0),a.e(6),a.e(3)]).then(a.bind(null,450))),E=c.a.lazy(()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,447))),x=()=>{const e=Object(o.b)(),t=Object(u.g)();return Object(r.useEffect)(()=>{const a=JSON.parse(localStorage.getItem("bybId"));a&&(Object(p.g)({bybId:a,dispatch:e}),e({type:"LOG_IN",payload:!0}),e({type:"ID",payload:a})),t.push("/dashboard")},[e,t]),c.a.createElement(r.Suspense,{fallback:c.a.createElement(f.a,null)},c.a.createElement(u.d,null,c.a.createElement(u.b,{exact:!0,path:"/",render:e=>c.a.createElement(E,e)}),c.a.createElement(d,{path:"/dashboard",component:O})))};function j(){return c.a.createElement(o.a,{store:w},c.a.createElement(n.a,{theme:y},c.a.createElement(s.a,{maxSnack:3,anchorOrigin:{vertical:"top",horizontal:"right"},hideIconVariant:!1},c.a.createElement("div",{className:"App"},c.a.createElement(i.a,null,c.a.createElement(x,null))))))}const S="https://bybriskbackend.herokuapp.com"},71:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(115),a(77)),o=a(118),i=a(116),s=a(119),u=a(54),l=a.n(u);const d=Object(i.a)(e=>({root:{maxWidth:345,height:"100%",borderRadius:22,background:"#061336",color:"#ffffff"},media:{height:180,maxHeight:300},card:{display:"flex",justifyContent:"center",alignItems:"center"}}));t.a=()=>{const e=d();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:window.outerHeight,width:window.outerWidth,display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{class:"box"},r.a.createElement("div",{class:"box-inner"},r.a.createElement("div",{class:"box-front"},r.a.createElement(c.a,{className:[e.root,e.card]},r.a.createElement("img",{src:l.a,alt:"logo",className:e.media}))),r.a.createElement("div",{class:"box-back"},r.a.createElement(c.a,{className:[e.root,e.card]},r.a.createElement(o.a,null,r.a.createElement(s.a,{component:"h5",variant:"h5"},"ByBrisk")))," ")))))}},79:function(e,t,a){},83:function(e,t,a){e.exports=a(84)},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),i=a(55);const s=document.getElementById("root");o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null)),s)}},[[83,2,5]]]);
//# sourceMappingURL=main.534a1e4e.chunk.js.map