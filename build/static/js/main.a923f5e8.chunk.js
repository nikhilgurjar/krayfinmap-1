(this.webpackJsonpbybrisk=this.webpackJsonpbybrisk||[]).push([[6],{116:function(e,t,n){},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"k",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"s",(function(){return b})),n.d(t,"h",(function(){return v})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return x})),n.d(t,"o",(function(){return D})),n.d(t,"n",(function(){return j})),n.d(t,"t",(function(){return S})),n.d(t,"d",(function(){return A})),n.d(t,"i",(function(){return C})),n.d(t,"q",(function(){return q})),n.d(t,"f",(function(){return F})),n.d(t,"e",(function(){return R})),n.d(t,"r",(function(){return L})),n.d(t,"g",(function(){return _})),n.d(t,"l",(function(){return z})),n.d(t,"m",(function(){return J})),n.d(t,"u",(function(){return Y})),n.d(t,"p",(function(){return Q}));var a=n(2),r=n.n(a),c=n(5),s=n(56);const u=n.n(s).a.create({baseURL:"https://bybriskbackend.herokuapp.com",withCredentials:!0,credentials:"include"});function i(e){return o.apply(this,arguments)}function o(){return(o=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.article,a=t.actions,c=t.closeModal,s=t.enqueueSnackbar,e.prev=1,i={headers:{"Content-Type":"application/json"}},o=n,e.next=6,u.post("/agents/addAgent",o,i);case 6:a.setSubmitting(!1),c({makeRequest:!0}),s("Agent Added Succesfully",{variant:"success",autoHideDuration:2e3}),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.bybId,a=t.setAgents,e.prev=1,e.next=4,u.get("/agents/fetchAgents?bybid=".concat(n));case 4:null!==(c=e.sent).data.result&&a(c.data.result),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.setDetails,e.prev=1,e.next=4,u.get("/agents/fetchAgentDetails?id=".concat(n));case 4:null!==(c=e.sent).data.result&&a(c.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function b(e){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,i,o,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.article,a=t.actions,c=t.setEditing,s=t.enqueueSnackbar,e.prev=1,i={headers:{"Content-Type":"application/json"}},o=n,e.next=6,u.post("/agents/modifyAgent",o,i);case 6:l=e.sent,a.setSubmitting(!1),s(l.data.message,{variant:"success",autoHideDuration:2e3}),c(!1),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.enqueueSnackbar,a=t.id,c=t.handleClose,e.prev=1,e.next=4,u.get("/agents/delteAgent?id=".concat(a));case 4:e.sent,c({makeRequest:!0}),n("Agent Deleted Succesfully",{variant:"success",autoHideDuration:2e3}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,i,o,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.article,a=t.actions,c=t.closeModal,s=t.enqueueSnackbar,e.prev=1,i={headers:{"Content-Type":"application/json"}},o=n,e.next=6,u.post("/delivery/addDelivery",o,i);case 6:return l=e.sent,a&&a.setSubmitting(!1),c&&c({makeRequest:!0}),s&&s("Delivery Added Succesfully",{variant:"success",autoHideDuration:2e3}),e.abrupt("return",l);case 13:e.prev=13,e.t0=e.catch(1);case 15:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function x(e){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,i,o,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.article,a=t.actions,c=t.closeModal,s=t.enqueueSnackbar,e.prev=1,i={headers:{"Content-Type":"application/json"}},o=n,e.next=6,u.post("/delivery/addDeliveryWithGeocode",o,i);case 6:return l=e.sent,a&&a.setSubmitting(!1),c&&c({makeRequest:!0}),s&&s("Delivery Added Succesfully",{variant:"success",autoHideDuration:2e3}),e.abrupt("return",l);case 13:e.prev=13,e.t0=e.catch(1);case 15:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function D(e){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.setDetails,e.prev=1,e.next=4,u.get("/delivery/deliveryDetail?id=".concat(n));case 4:null!==(c=e.sent).data&&a(c.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.bybID,a=t.setDelivery,e.prev=1,e.next=4,u.get("/delivery/fetchDeliveries?bybid=".concat(n));case 4:null!==(c=e.sent).data.hits.hits&&a(c.data.hits.hits),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function S(e){return I.apply(this,arguments)}function I(){return(I=Object(c.a)(r.a.mark((function e(t){var n,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.param,a=t.setDelivery,e.prev=1,c={headers:{"Content-Type":"application/json"}},s=JSON.stringify(n),e.next=6,u.post("/delivery/modifyStatus",s,c);case 6:j({bybID:n.BybID,setDelivery:a}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function A(e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,i,o,l,p,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.article,a=t.dispatch,c=t.history,s=t.actions,i=t.enqueueSnackbar,e.prev=1,o={headers:{"Content-Type":"application/json"}},l=n,e.next=6,u.post("/onboarding/createAccount",l,o);case 6:p=e.sent,d=p.data.bybID,a({type:"ID",payload:p.data.bybID}),C({dispatch:a,history:c,actions:s,enqueueSnackbar:i,bybID:d}),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function C(e){return M.apply(this,arguments)}function M(){return(M=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.history,c=t.actions,s=t.enqueueSnackbar,i=t.bybID,e.prev=1,e.next=4,u.get("/onboarding/fetchAccountDetails?bybId=".concat(i));case 4:o=e.sent,n({type:"USER",payload:o.data.user}),n({type:"LOG_IN",payload:!0}),s&&s("Logined Succesfully",{variant:"success",autoHideDuration:2e3}),c&&c.setSubmitting(!1),a&&a.push("/dashboard"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),a&&a.push("/");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function q(e){return H.apply(this,arguments)}function H(){return(H=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,i,o,l,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.article,a=t.dispatch,c=t.history,s=t.actions,i=t.enqueueSnackbar,e.prev=1,o={headers:{"Content-Type":"application/json"}},l=n,e.next=6,u.post("/onboarding/loginAccount",l,o);case 6:"Denied"===(p=e.sent).data.bybid?i("Invalid Details",{variant:"error",autoHideDuration:2e3}):(a({type:"ID",payload:p.data.bybID}),a({type:"USER",payload:p.data.user}),a({type:"LOG_IN",payload:!0}),s.setSubmitting(!1),i("Logined Succesfully",{variant:"success",autoHideDuration:2e3}),c.push("/dashboard")),s.setSubmitting(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),i("Password or Email is Invalid",{variant:"error",autoHideDuration:2e3}),s.setSubmitting(!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function F(e){return T.apply(this,arguments)}function T(){return(T=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.newDetails,a=t.enqueueSnackbar,c=t.close,e.prev=1,s={headers:{"Content-Type":"application/json"}},i=n,e.next=6,u.post("/onboarding/updateAccount",i,s);case 6:a("Account Updated Succesfully",{variant:"success",autoHideDuration:2e3}),c(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),a("Failed to Update",{variant:"error",autoHideDuration:2e3});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function R(e){return W.apply(this,arguments)}function W(){return(W=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/onboarding/usernameAvailable?username=".concat(t.username));case 3:return n=e.sent,e.abrupt("return",n.data.IsPresent);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function L(e){return N.apply(this,arguments)}function N(){return(N=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/onboarding/logout");case 3:e.sent,t.history.push("/"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(e){return P.apply(this,arguments)}function P(){return(P=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.newDetails,a=t.enqueueSnackbar,c=t.close,e.prev=1,s={headers:{"Content-Type":"application/json"}},i=n,e.next=6,u.post("/onboarding/updatePassword",i,s);case 6:c(),a("Account Updated Succesfully",{variant:"success",autoHideDuration:2e3}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function U(){let e="#";for(let t=0;t<3;t++)e+=("0"+Math.floor(Math.random()*Math.pow(16,2)/2).toString(16)).slice(-2);return e}const B=({data:e})=>{console.log(e);let t=[];for(let n=0;n<e.ClusterIDArray.length;n++){const a=U();let r=[];e.AssignedDeliveryArray[n].hits.hits.map(t=>{r.push({clusterid:e.ClusterIDArray[n],customerName:t._source.CustomerName,color:a,deliveryAgentID:t._source.deliveryAgentID,distanceObserved:t._source.distanceObserved,itemWeight:t._source.itemWeight,geometry:{latitude:t._source.latitude,longitude:t._source.longitude}})}),t.push(r)}return t};function z(e){return G.apply(this,arguments)}function G(){return(G=Object(c.a)(r.a.mark((function e(t){var n,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.clusterID,a=t.setDelivery,c=t.enqueueSnackbar,e.prev=1,e.next=4,u.get("/clusters/getdeliveries?clusterid=".concat(n));case 4:null!==(s=e.sent).data.hits.hits&&a(s.data.hits.hits),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c("Problem Fetching Deliveries",{variant:"error",autoHideDuration:2e3});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function J(e){return V.apply(this,arguments)}function V(){return(V=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.bybId,a=t.setClusters,c=t.enqueueSnackbar,s=t.setLoading,console.log(s),e.prev=2,e.next=5,u.get("/clusters/allClusters?bybid=".concat(n));case 5:return null!==(o=e.sent).data.ClusterIDArray&&void 0!==o.data?(i=B({data:o.data}),console.log(i),a&&a(i),s&&s(!1)):s&&s(!1),e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),s&&s(!1),c&&c("There are no Clusters Yet",{variant:"info",autoHideDuration:2e3});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function Y(e){return K.apply(this,arguments)}function K(){return(K=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.clusterData,a=t.enqueueSnackbar,c=t.setSubmitting,t.bybId,s=t.setCluster,e.prev=1,i={headers:{"Content-Type":"application/json"}},o=n,e.next=6,u.post("/clusters/createCluster",o,i);case 6:c(!1),a("Cluster will be updated in 5 minutes",{variant:"success",autoHideDuration:2e3}),s(null),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),c(!1),a("Problem while making clusters",{variant:"success",autoHideDuration:2e3});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function Q(e){return X.apply(this,arguments)}function X(){return(X=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.bybId,a=t.setClusters,e=>{console.log(e,"ghghghghghghg");let t=0;for(let n=0;n<e.length;n++)t+=e[n].itemWeight;return t},e=>{let t=0;for(let n=0;n<e.length;n++)t+=e[n].distanceObserved;return t},c=e=>{let t=0,n=0;for(let a=0;a<e.length;a++)t+=e[a].distanceObserved,n+=e[a].itemWeight;return{distanceObserved:t,averageWeight:n}},e.prev=4,e.next=7,J({bybId:n});case 7:s=e.sent,u=s.map((e,t)=>{const n=c(e),a=n.distanceObserved,r=n.averageWeight;return{clusterid:"Cluster ".concat(t),deliveryAgentID:e[0].deliveryAgentID,totalDeliveries:e.length,distanceObserved:a,averageWeight:r}}),console.log(u,"===----===----===----"),a(u),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}},51:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=(n(116),n(79)),s=n(120),u=n(118),i=n(121),o=n(55),l=n.n(o);const p=Object(u.a)(e=>({root:{maxWidth:345,height:"100%",borderRadius:22,background:"#061336",color:"#ffffff"},media:{height:180,maxHeight:300},card:{display:"flex",justifyContent:"center",alignItems:"center"}}));t.a=()=>{const e=p();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:window.outerHeight,width:window.outerWidth,display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{class:"box"},r.a.createElement("div",{class:"box-inner"},r.a.createElement("div",{class:"box-front"},r.a.createElement(c.a,{className:[e.root,e.card]},r.a.createElement("img",{src:l.a,alt:"logo",className:e.media}))),r.a.createElement("div",{class:"box-back"},r.a.createElement(c.a,{className:[e.root,e.card]},r.a.createElement(s.a,null,r.a.createElement(i.a,{component:"h5",variant:"h5"},"ByBrisk")))," ")))))}},55:function(e,t,n){e.exports=n.p+"static/media/logo.3e91ba29.png"},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(148),r=n(0),c=n.n(r),s=n(23),u=n(40),i=n(49),o=n(4),l=n(52);const p=e=>{let t=e.component,n=Object(l.a)(e,["component"]);const a=Object(s.c)(e=>e.login);return c.a.createElement(o.b,Object.assign({},n,{render:e=>a?c.a.createElement(t,e):c.a.createElement(o.a,{to:{pathname:"/",state:{from:e.location}}})}))};var d=n(48),h=n(51),b=n(76),f=n(149);let v=Object(b.a)({breakpoints:{values:{xs:300,sm:450,md:800,lg:1e3,xl:1400}},palette:{secondary:{main:"#4caf50"},primary:{main:"#057g78"}},typography:{fontFamily:"Comic Sans MS"},spacing:8,overrides:{MuiOutlinedInput:{root:{maxWidth:400,borderRadius:60}},MuiIconButton:{root:{color:"#000000"}},MuiAccordion:{root:{background:"#F0F0F0",color:"#000000"}},MuiToolbar:{root:{}},MuiListItemIcon:{root:{color:"#000000"}},MuiFormLabel:{root:{fontSize:"1rem",color:"#000000"}},MuiAccordionDetails:{root:{flexDirection:"column",paddingLeft:"2rem",backgroundColor:"#F5F6F7",textAlign:"left"}},MuiDrawer:{paper:{backgroundColor:"#F0F0F0",color:"#000000"}},MuiTableSortLabel:{icon:{color:"#000000"}},MuiButton:{root:{maxWidth:300,width:"100%"}},MuiPaper:{rounded:{borderRadius:12}}},props:{MuiCheckbox:{disableRipple:!0}}});var y=v=Object(f.a)(v),m=n(34),g=n(18);var x=(e={login:!1,user:[],bybId:"",Agents:[]},t)=>{switch(t.type){case"LOG_IN":return Object(g.a)(Object(g.a)({},e),{},{login:t.payload});case"ID":return Object(g.a)(Object(g.a)({},e),{},{bybId:t.payload});case"AddAgent":let n=e.Agents;return n.push(t.payload),Object(g.a)(Object(g.a)({},e),{},{Agents:n});case"USER":return Object(g.a)(Object(g.a)({},e),{},{user:t.payload});default:return e}};var k=Object(m.b)(x);n(80);const D=c.a.lazy(()=>Promise.all([n.e(0),n.e(13),n.e(9)]).then(n.bind(null,484))),w=c.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,483))),j=()=>{const e=Object(s.b)(),t=Object(o.g)();return Object(r.useEffect)(()=>{Object(d.i)({dispatch:e,history:t})},[e,t]),c.a.createElement(r.Suspense,{fallback:c.a.createElement(h.a,null)},c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/",render:e=>c.a.createElement(w,e)}),c.a.createElement(p,{path:"/dashboard",component:D})))};function O(){return c.a.createElement(s.a,{store:k},c.a.createElement(a.a,{theme:y},c.a.createElement(i.a,{maxSnack:3,anchorOrigin:{vertical:"top",horizontal:"right"},hideIconVariant:!1},c.a.createElement("div",{className:"App"},c.a.createElement(u.a,null,c.a.createElement(j,null))))))}},80:function(e,t,n){},84:function(e,t,n){e.exports=n(85)},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),s=n.n(c),u=n(58);const i=document.getElementById("root");s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null)),i)}},[[84,7,12]]]);
//# sourceMappingURL=main.a923f5e8.chunk.js.map