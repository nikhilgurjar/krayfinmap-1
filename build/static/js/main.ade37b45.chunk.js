(this.webpackJsonpbybrisk=this.webpackJsonpbybrisk||[]).push([[6],{120:function(e,t,n){},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"k",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"t",(function(){return h})),n.d(t,"h",(function(){return v})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return x})),n.d(t,"o",(function(){return D})),n.d(t,"n",(function(){return j})),n.d(t,"u",(function(){return I})),n.d(t,"d",(function(){return A})),n.d(t,"i",(function(){return C})),n.d(t,"r",(function(){return F})),n.d(t,"f",(function(){return H})),n.d(t,"e",(function(){return N})),n.d(t,"s",(function(){return W})),n.d(t,"g",(function(){return R})),n.d(t,"l",(function(){return K})),n.d(t,"m",(function(){return G})),n.d(t,"v",(function(){return V})),n.d(t,"p",(function(){return Q})),n.d(t,"q",(function(){return Z}));var a=n(2),r=n.n(a),c=n(4),s=n(56);const i=n.n(s).a.create({baseURL:"https://bybriskbackend.herokuapp.com",withCredentials:!0,credentials:"include"});function u(e){return o.apply(this,arguments)}function o(){return(o=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,u,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.article,a=t.actions,c=t.closeModal,s=t.enqueueSnackbar,e.prev=1,u={headers:{"Content-Type":"application/json"}},o=n,e.next=6,i.post("/agents/addAgent",o,u);case 6:a.setSubmitting(!1),c({makeRequest:!0}),s("Agent Added Succesfully",{variant:"success",autoHideDuration:2e3}),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(r.a.mark((function e(t){var n,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.bybId,a=t.setAgents,c=t.setLoading,e.prev=1,c&&c(!0),e.next=5,i.get("/agents/fetchAgents?bybid=".concat(n));case 5:null!==(s=e.sent).data.result&&a(s.data.result),c&&c(!1),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function d(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.setDetails,e.prev=1,e.next=4,i.get("/agents/fetchAgentDetails?id=".concat(n));case 4:null!==(c=e.sent).data.result&&a(c.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,u,o,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.article,a=t.actions,c=t.setEditing,s=t.enqueueSnackbar,e.prev=1,u={headers:{"Content-Type":"application/json"}},o=n,e.next=6,i.post("/agents/modifyAgent",o,u);case 6:l=e.sent,a.setSubmitting(!1),s(l.data.message,{variant:"success",autoHideDuration:2e3}),c(!1),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.enqueueSnackbar,a=t.id,c=t.handleClose,e.prev=1,e.next=4,i.get("/agents/delteAgent?id=".concat(a));case 4:e.sent,c({makeRequest:!0}),n("Agent Deleted Succesfully",{variant:"success",autoHideDuration:2e3}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(r.a.mark((function e(t){var n,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.article,e.prev=1,a={headers:{"Content-Type":"application/json"}},c=n,s=i.post("/delivery/addDelivery",c,a),e.abrupt("return",s);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function x(e){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,u,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.article,a=t.source,c=t.responseArray,e.prev=1,s={headers:{"Content-Type":"application/json"},cancelToken:a.token},u=n,o=i.post("/delivery/addDeliveryWithGeocode",u,s),c.push(o),e.abrupt("return");case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function D(e){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.setDetails,e.prev=1,e.next=4,i.get("/delivery/deliveryDetail?id=".concat(n));case 4:null!==(c=e.sent).data&&a(c.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(r.a.mark((function e(t){var n,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.bybID,a=t.setDelivery,c=t.setLoading,e.prev=1,c&&c(!0),e.next=5,i.get("/delivery/fetchDeliveries?bybid=".concat(n));case 5:null!==(s=e.sent).data.hits.hits&&a(s.data.hits.hits),c&&c(!1),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function I(e){return S.apply(this,arguments)}function S(){return(S=Object(c.a)(r.a.mark((function e(t){var n,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.param,a=t.setDelivery,e.prev=1,c={headers:{"Content-Type":"application/json"}},s=JSON.stringify(n),e.next=6,i.post("/delivery/modifyStatus",s,c);case 6:j({bybID:n.BybID,setDelivery:a}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function A(e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,u,o,l,p,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.article,a=t.dispatch,c=t.history,s=t.actions,u=t.enqueueSnackbar,e.prev=1,o={headers:{"Content-Type":"application/json"}},l=n,e.next=6,i.post("/onboarding/createAccount",l,o);case 6:p=e.sent,d=p.data.bybID,a({type:"ID",payload:p.data.bybID}),C({dispatch:a,history:c,actions:s,enqueueSnackbar:u,bybID:d}),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function C(e){return T.apply(this,arguments)}function T(){return(T=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,u,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.history,c=t.actions,s=t.enqueueSnackbar,u=t.bybID,e.prev=1,e.next=4,i.get("/onboarding/fetchAccountDetails?bybId=".concat(u));case 4:o=e.sent,n({type:"USER",payload:o.data.user}),n({type:"LOG_IN",payload:!0}),s&&s("Logined Succesfully",{variant:"success",autoHideDuration:2e3}),c&&c.setSubmitting(!1),a&&a.push("/dashboard"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),a&&a.push("/");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function F(e){return M.apply(this,arguments)}function M(){return(M=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,u,o,l,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.article,a=t.dispatch,c=t.history,s=t.actions,u=t.enqueueSnackbar,e.prev=1,o={headers:{"Content-Type":"application/json"}},l=n,e.next=6,i.post("/onboarding/loginAccount",l,o);case 6:"Denied"===(p=e.sent).data.bybid?u("Invalid Details",{variant:"error",autoHideDuration:2e3}):(a({type:"ID",payload:p.data.bybID}),a({type:"USER",payload:p.data.user}),a({type:"LOG_IN",payload:!0}),s.setSubmitting(!1),u("Logined Succesfully",{variant:"success",autoHideDuration:2e3}),c.push("/dashboard")),s.setSubmitting(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),u("Password or Email is Invalid",{variant:"error",autoHideDuration:2e3}),s.setSubmitting(!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function H(e){return q.apply(this,arguments)}function q(){return(q=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.newDetails,a=t.enqueueSnackbar,c=t.close,e.prev=1,s={headers:{"Content-Type":"application/json"}},u=n,e.next=6,i.post("/onboarding/updateAccount",u,s);case 6:a("Account Updated Succesfully",{variant:"success",autoHideDuration:2e3}),c(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),a("Failed to Update",{variant:"error",autoHideDuration:2e3});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function N(e){return L.apply(this,arguments)}function L(){return(L=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/onboarding/usernameAvailable?username=".concat(t.username));case 3:return n=e.sent,e.abrupt("return",n.data.IsPresent);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function W(e){return _.apply(this,arguments)}function _(){return(_=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/onboarding/logout");case 3:e.sent,t.history.push("/"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function R(e){return P.apply(this,arguments)}function P(){return(P=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.newDetails,a=t.enqueueSnackbar,c=t.close,e.prev=1,s={headers:{"Content-Type":"application/json"}},u=n,e.next=6,i.post("/onboarding/updatePassword",u,s);case 6:c(),a("Account Updated Succesfully",{variant:"success",autoHideDuration:2e3}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function U(){let e="#";for(let t=0;t<3;t++)e+=("0"+Math.floor(Math.random()*Math.pow(16,2)/2).toString(16)).slice(-2);return e}const B=({data:e})=>{let t=[];for(let n=0;n<e.ClusterIDArray.length;n++){const a=U();let r=[];e.AssignedDeliveryArray[n].hits.hits.map(e=>{r.push({clusterid:e._source.clusterID,customerName:e._source.CustomerName,color:a,deliveryAgentName:e._source.deliveryAgentName,deliveryAgentID:e._source.deliveryAgentID,distanceObserved:e._source.distanceObserved,itemWeight:e._source.itemWeight,geometry:{latitude:e._source.latitude,longitude:e._source.longitude}})}),t.push(r)}return t};function K(e){return z.apply(this,arguments)}function z(){return(z=Object(c.a)(r.a.mark((function e(t){var n,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.clusterID,a=t.setDelivery,c=t.enqueueSnackbar,e.prev=1,e.next=4,i.get("/clusters/getdeliveries?clusterid=".concat(n));case 4:null!==(s=e.sent).data.hits.hits&&a(s.data.hits.hits),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c("Problem Fetching Deliveries",{variant:"error",autoHideDuration:2e3});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function G(e){return J.apply(this,arguments)}function J(){return(J=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,u,o,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.bybId,a=t.setClusters,c=t.enqueueSnackbar,s=t.setLoading,u=t.setDelivery,e.prev=1,e.next=4,i.get("/clusters/allClusters?bybid=".concat(n));case 4:return null!==(l=e.sent).data.ClusterIDArray&&void 0!==l.data?(o=B({data:l.data}),a&&a(o),s&&s(!1)):(j({bybID:n,setDelivery:u}),s&&s(!1)),e.abrupt("return",o);case 9:e.prev=9,e.t0=e.catch(1),s&&s(!1),c&&c("There are no Clusters Yet",{variant:"info",autoHideDuration:2e3});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function V(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,u,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.clusterData,a=t.enqueueSnackbar,c=t.setSubmitting,t.bybId,s=t.setCluster,e.prev=1,u={headers:{"Content-Type":"application/json"}},o=n,e.next=6,i.post("/clusters/createCluster",o,u);case 6:c(!1),a("Cluster will be updated in 5 minutes",{variant:"success",autoHideDuration:2e3}),s(null),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),c(!1),a("Problem while making clusters",{variant:"success",autoHideDuration:2e3});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function Q(e){return X.apply(this,arguments)}function X(){return(X=Object(c.a)(r.a.mark((function e(t){var n,a,s,u,o,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.bybId,a=t.setClusters,(s=t.setLoading)(!0),e=>{let t=0;for(let n=0;n<e.length;n++)t+=e[n].itemWeight;return t},e=>{let t=0;for(let n=0;n<e.length;n++)t+=e[n].distanceObserved;return t},u=e=>{let t=0,n=0;for(let a=0;a<e.length;a++)t+=e[a].distanceObserved,n+=e[a].itemWeight;return{distanceObserved:t,averageWeight:n}},e.prev=5,e.next=8,G({bybId:n});case 8:o=e.sent,l=o.map(function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u(t),c=a.distanceObserved,s=a.averageWeight,e.next=3,i.get("/clusters/timeNdistance?agentId=".concat(t[0].deliveryAgentID));case 3:return o=e.sent,e.abrupt("return",{clusterid:t[0].clusterid,deliveryAgentID:t[0].deliveryAgentID,totalDeliveries:t.length,deliveryAgentName:t[0].deliveryAgentName,distanceObserved:c,averageWeight:s,clusterTime:o.data.clusterTime>3600?"".concat((o.data.clusterTime/3600).toFixed(2)," hour"):o.data.clusterTime>60?"".concat((o.data.clusterTime/60).toFixed(2)," minutes"):"".concat(o.data.clusterTime," sec"),clusterDistance:o.data.clusterDistance>1e6?"".concat((o.data.clusterDistance/1e6).toFixed(2)," K Km"):o.data.clusterDistance>1e3?"".concat((o.data.clusterDistance/1e3).toFixed(2)," Km"):"".concat(o.data.clusterDistance," m")});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Promise.all(l).then(e=>{s(!1),a(e)}).catch(e=>{s(!1)}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),s(!1);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})))).apply(this,arguments)}function Z(e){return $.apply(this,arguments)}function $(){return($=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.bybID,a=t.setStats,e.prev=1,e.next=4,i.get("/delivery/deliveryStatus?bybID=".concat(n));case 4:c=e.sent,a(c.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a([]);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}},52:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=(n(120),n(84)),s=n(124),i=n(122),u=n(125),o=n(58),l=n.n(o);const p=Object(i.a)(e=>({root:{maxWidth:345,height:"100%",borderRadius:22,background:"#061336",color:"#ffffff"},media:{height:180,maxHeight:300},card:{display:"flex",justifyContent:"center",alignItems:"center"}}));t.a=()=>{const e=p();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:window.outerHeight,width:window.outerWidth,display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{class:"box"},r.a.createElement("div",{class:"box-inner"},r.a.createElement("div",{class:"box-front"},r.a.createElement(c.a,{className:[e.root,e.card]},r.a.createElement("img",{src:l.a,alt:"logo",className:e.media}))),r.a.createElement("div",{class:"box-back"},r.a.createElement(c.a,{className:[e.root,e.card]},r.a.createElement(s.a,null,r.a.createElement(u.a,{component:"h5",variant:"h5"},"ByBrisk")))," ")))))}},58:function(e,t,n){e.exports=n.p+"static/media/logo.3e91ba29.png"},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(152),r=n(0),c=n.n(r),s=n(23),i=n(41),u=n(50),o=n(5),l=n(53);const p=e=>{let t=e.component,n=Object(l.a)(e,["component"]);const a=Object(s.c)(e=>e.login);return c.a.createElement(o.b,Object.assign({},n,{render:e=>a?c.a.createElement(t,e):c.a.createElement(o.a,{to:{pathname:"/",state:{from:e.location}}})}))};var d=n(49),b=n(52),h=n(73),f=n.n(h),v=n(74),y=n(81),m=n(153);let g=Object(y.a)({breakpoints:{values:{xs:300,sm:450,md:800,lg:1e3,xl:1400}},palette:{secondary:{main:"#4caf50"},primary:{main:"#057g78"}},typography:{fontFamily:"Comic Sans MS"},spacing:8,overrides:{MuiOutlinedInput:{root:{maxWidth:400,borderRadius:60}},MuiIconButton:{root:{color:"#000000"}},MuiAccordion:{root:{background:"#F0F0F0",color:"#000000"}},MuiToolbar:{root:{}},MuiListItemIcon:{root:{color:"#000000"}},MuiFormLabel:{root:{fontSize:"1rem",color:"#000000"}},MuiAccordionDetails:{root:{flexDirection:"column",paddingLeft:"2rem",backgroundColor:"#F5F6F7",textAlign:"left"}},MuiDrawer:{paper:{backgroundColor:"#F0F0F0",color:"#000000"}},MuiTableSortLabel:{icon:{color:"#000000"}},MuiButton:{root:{maxWidth:300,width:"100%"}},MuiPaper:{rounded:{borderRadius:12}}},props:{MuiCheckbox:{disableRipple:!0}}});var x=g=Object(m.a)(g),k=n(34),D=n(18);var w=(e={login:!1,user:[],bybId:"",Agents:[]},t)=>{switch(t.type){case"LOG_IN":return Object(D.a)(Object(D.a)({},e),{},{login:t.payload});case"ID":return Object(D.a)(Object(D.a)({},e),{},{bybId:t.payload});case"AddAgent":let n=e.Agents;return n.push(t.payload),Object(D.a)(Object(D.a)({},e),{},{Agents:n});case"USER":return Object(D.a)(Object(D.a)({},e),{},{user:t.payload});default:return e}};var j=Object(k.b)(w);n(85);const O=new f.a({publishKey:"pub-c-b62c8c92-592d-4472-bee9-03e3ccf8645b",subscribeKey:"sub-c-ad9893f0-6907-11eb-b914-eedc703588a5"}),I=c.a.lazy(()=>Promise.all([n.e(0),n.e(13),n.e(9)]).then(n.bind(null,494))),S=c.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,493))),A=()=>{const e=Object(s.b)(),t=Object(o.g)();return Object(r.useEffect)(()=>{Object(d.i)({dispatch:e,history:t})},[e,t]),c.a.createElement(r.Suspense,{fallback:c.a.createElement(b.a,null)},c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/",render:e=>c.a.createElement(S,e)}),c.a.createElement(p,{path:"/dashboard",component:I})))};function E(){return c.a.createElement(s.a,{store:j},c.a.createElement(a.a,{theme:x},c.a.createElement(u.a,{maxSnack:3,anchorOrigin:{vertical:"top",horizontal:"right"},hideIconVariant:!1},c.a.createElement("div",{className:"App"},c.a.createElement(i.a,null,c.a.createElement(v.a,{client:O},c.a.createElement(A,null)))))))}},85:function(e,t,n){},88:function(e,t,n){e.exports=n(89)},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),s=n.n(c),i=n(60);const u=document.getElementById("root");s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null)),u)}},[[88,7,12]]]);
//# sourceMappingURL=main.ade37b45.chunk.js.map