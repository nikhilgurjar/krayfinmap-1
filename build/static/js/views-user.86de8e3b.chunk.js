(this.webpackJsonpbybrisk=this.webpackJsonpbybrisk||[]).push([[11],{167:function(e,a,t){"use strict";t.d(a,"d",(function(){return l})),t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return c}));var r=t(470),n=t(131),i=t(441);const l=Object(i.a)("div")({paddingBottom:30,width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}),s=Object(i.a)("div")({width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}),o=Object(i.a)("div")({paddingTop:"40px",width:"90%",maxWidth:"400px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}),c=Object(i.a)(n.a)({textAlign:"center",paddingTop:"30px"});Object(i.a)(r.a)({borderRadius:"1000rem",marginTop:"10px"})},168:function(e,a,t){"use strict";var r=t(282),n=t(283),i=t(6),l=t.n(i);function s(){const e=Object(r.a)(["\n  background: ",";\n  border-radius: ",";\n  border: ",";\n  color: ",";\n  margin: ",";\n  padding: ",";\n  width:",";,\n  maxWidth:",";\n  height:",';\n  cursor: pointer;\n  font-size:14px;\n  font-family: "SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";\n  font-weight: 500;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    background: #FF6F1F;\n  }\n']);return s=function(){return e},e}const o=n.a.button(s(),e=>e.background,e=>e.borderRadius,e=>e.border,e=>e.color,e=>e.margin,e=>e.padding,e=>e.width,e=>e.maxWidth,e=>e.height);o.propTypes={background:l.a.string,width:l.a.string,height:l.a.string,borderRadius:l.a.string,margin:l.a.string,padding:l.a.string,color:l.a.string,border:l.a.string},o.defaultProps={background:"#FF6F1F",borderRadius:"10rem",border:"10px",color:"#ffffff",margin:"0",padding:"1rem",width:"300px",height:"3rem"},a.a=o},180:function(e,a,t){"use strict";t.d(a,"c",(function(){return s})),t.d(a,"e",(function(){return o})),t.d(a,"d",(function(){return c})),t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return d}));var r=t(12),n=t(487),i=t(488);function l(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}function s(e,a){return"desc"===e?(e,t)=>l(e,t,a):(e,t)=>-l(e,t,a)}function o(e,a){const t=e.map((e,a)=>[e,a]);return t.sort((e,t)=>{const r=a(e[0],t[0]);return 0!==r?r:e[1]-t[1]}),t.map(e=>e[0])}function c(e,a,t){let r=e;return a&&(r=e.filter(e=>e._source.CustomerName.toLowerCase().includes(a)||e._source.CustomerAddress.toLowerCase().includes(a)||String(e._source.itemWeight).toLowerCase().includes(a)||String(e._source.paymentStatus).toLowerCase().includes(a)||e._source.phone.toLowerCase().includes(a)||e._source.deliveryStatus.toLowerCase().includes(a))),o(r,t)}const u=Object(r.a)(e=>({head:{backgroundColor:"#d9dcde",color:e.palette.common.black},body:{fontSize:16}}))(n.a),d=Object(r.a)(e=>({root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}))(i.a)},183:function(e,a,t){"use strict";var r=t(162),n=t(54),i=t(470),l=t(513),s=t(441),o=t(514),c=t(199),u=t.n(c),d=t(169),m=t(186),b=t(0),g=t.n(b);t(88);const p=Object(s.a)(i.a)({borderRadius:"1000rem",marginTop:"3px"});a.a=e=>{e.errorText;const a=e.label,t=e.tip,i=Object(n.a)(e,["errorText","label","tip"]),s=Object(d.c)(e),c=Object(r.a)(s,2),b=c[0],v=c[1];return g.a.createElement("div",{className:"container"},g.a.createElement(l.a,{htmlFor:"input-with-icon-adornment"},a,g.a.createElement(o.a,{title:t,placement:"right"},g.a.createElement(u.a,{style:{fontSize:".9rem",marginLeft:5}}))),g.a.createElement(p,Object.assign({variant:"outlined",fullWidth:!0,margin:"dense",error:v.touched&&v.error&&!0,helperText:function(){const e=Object(m.at)(v,"touched","error"),a=Object(r.a)(e,2),t=a[0],n=a[1];if(t&&n)return n}()},b,i,{InputLabelProps:{shrink:!0}})))}},187:function(e,a,t){"use strict";var r=t(162),n=t(54),i=t(476),l=t(513),s=t(473),o=t(504),c=t(480),u=t(128),d=t(514),m=t(199),b=t.n(m),g=t(169),p=t(186),v=t(0),y=t.n(v);t(88);const f=Object(u.a)(e=>({formControl:{margin:e.spacing(1),minWidth:120,display:"flex",width:"100%"},selectEmpty:{marginTop:e.spacing(2)}}));function h(e){const a=f(),t=e.label,u=e.data,m=e.tip,v=Object(n.a)(e,["label","data","tip"]),h=Object(g.c)(e),E=Object(r.a)(h,2),j=E[0],w=E[1],S=j.value,O=Object(p.at)(w,"touched","error"),k=Object(r.a)(O,2),x=k[0],q=k[1],C=x&&q&&!0;return y.a.createElement("div",{className:"container"},y.a.createElement(l.a,{htmlFor:"input-with-icon-adornment"},t,y.a.createElement(d.a,{title:m,placement:"right"},y.a.createElement(b.a,{style:{fontSize:".9rem",marginLeft:5}}))),y.a.createElement(s.a,Object.assign({},v,{error:C,className:a.formControl}),y.a.createElement(o.a,Object.assign({},j,{value:S||"",variant:"outlined",margin:"dense"}),u.map((e,a)=>y.a.createElement(c.a,{key:a,value:e.value,style:{borderRadius:"12px !important",color:e.color}},e.label))),function(){if(C)return y.a.createElement(i.a,null,q)}()))}h.defaultProps={data:[]},a.a=h},200:function(e,a,t){"use strict";var r=t(0),n=t.n(r);t(243);a.a=function(){return n.a.createElement("div",{className:"circularLoadercontainer"},n.a.createElement("div",{className:"lds-roller"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null)))}},201:function(e,a,t){"use strict";a.a={formId:"DeliveryForm",formField:{Locality:{name:"Locality",label:"Locality*",requiredErrorMsg:"Locality is required",tip:"Locality where This Delivery Should GO"},Landmark:{name:"Landmark",label:"Landmark*",requiredErrorMsg:"Landmark is required",tip:"Landmark where This Delivery Should GO"},City:{name:"City",label:"City*",requiredErrorMsg:"City is required",tip:"City where This Delivery Should GO"},CustomerName:{name:"CustomerName",label:"Name*",requiredErrorMsg:"Name is required",tip:"Name OF Customer"},longitude:{name:"longitude",label:"Longitude*",tip:"Longitude of Location"},phone:{name:"phone",label:"Phone",requiredErrorMsg:"Phone is required",tip:"Contact To use For Delivery"},itemWeight:{name:"itemWeight",label:"Item Weight*",requiredErrorMsg:"Weight is required",tip:"Weight Of Item To Be Delivered"},note:{name:"note",label:"note",requiredErrorMsg:"note is required",tip:"Any instructions"},PicURL:{name:"PicURL",label:"PicURL"},latitude:{name:"latitude",label:"Latitude*"},paymentStatus:{name:"paymentStatus",label:"Payment Done",requiredErrorMsg:"Payment Status is required",tip:"Is Payment Recieved"},PendingAmount:{name:"PendingAmount",label:"PendingAmount*",requiredErrorMsg:"Pending Amount is required",tip:"Amount to take from Customer"},deliveryStatus:{name:"deliveryStatus",label:"Delivery Status",requiredErrorMsg:"Status",tip:"Status of Delivery"}}}},224:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var r=t(162),n=t(54),i=t(0),l=t.n(i),s=t(186),o=t(169),c=t(476),u=t(473),d=t(478),m=t(506);function b(e){const a=e.label,t=Object(n.a)(e,["label"]),i=Object(o.c)(e),b=Object(r.a)(i,3),g=b[0],p=b[1],v=b[2].setValue;return l.a.createElement(u.a,Object.assign({},t,{style:{width:"100%",alignItems:"flex-start"}}),l.a.createElement(d.a,{value:g.checked,checked:g.checked,labelPlacement:"start",control:l.a.createElement(m.a,Object.assign({},g,{onChange:function(e){v(e.target.checked)}})),label:a}),function(){const e=Object(s.at)(p,"touched","error"),a=Object(r.a)(e,2),t=a[0],n=a[1];if(t&&n)return l.a.createElement(c.a,null,n)}())}},229:function(e,a,t){},243:function(e,a,t){},244:function(e,a,t){"use strict";const r=t(201).a.formField,n=r.CustomerName,i=r.Locality,l=r.Landmark,s=r.City,o=r.paymentStatus,c=r.latitude,u=r.note,d=r.longitude,m=r.phone,b=r.itemWeight,g=r.PendingAmount;a.a={[n.name]:"",[i.name]:"",[l.name]:"",[s.name]:"",[o.name]:!1,[c.name]:"",[u.name]:"",[d.name]:"",[m.name]:"",[b.name]:"",[g.name]:""}},288:function(e,a,t){"use strict";var r=t(163),n=t(164);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(0)),l=(0,r(t(165)).default)(i.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");a.default=l},289:function(e,a,t){"use strict";var r=t(163),n=t(164);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(0)),l=(0,r(t(165)).default)(i.createElement("path",{d:"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"}),"Autorenew");a.default=l},425:function(e,a,t){},426:function(e,a,t){"use strict";var r=t(1),n=t(3),i=t(0),l=(t(6),t(5)),s=t(12),o=t(131),c=i.forwardRef((function(e,a){var t=e.action,s=e.avatar,c=e.classes,u=e.className,d=e.component,m=void 0===d?"div":d,b=e.disableTypography,g=void 0!==b&&b,p=e.subheader,v=e.subheaderTypographyProps,y=e.title,f=e.titleTypographyProps,h=Object(n.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=y;null==E||E.type===o.a||g||(E=i.createElement(o.a,Object(r.a)({variant:s?"body2":"h5",className:c.title,component:"span",display:"block"},f),E));var j=p;return null==j||j.type===o.a||g||(j=i.createElement(o.a,Object(r.a)({variant:s?"body2":"body1",className:c.subheader,color:"textSecondary",component:"span",display:"block"},v),j)),i.createElement(m,Object(r.a)({className:Object(l.a)(c.root,u),ref:a},h),s&&i.createElement("div",{className:c.avatar},s),i.createElement("div",{className:c.content},E,j),t&&i.createElement("div",{className:c.action},t))}));a.a=Object(s.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(c)},493:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var r=t(162),n=t(192),i=t.n(n),l=t(128),s=t(286),o=(t(51),t(0)),c=t.n(o),u=(t(53),t(166)),d=t(22),m=t(50),b=(t(180),t(287),t(245),t(295),t(200));c.a.lazy(()=>t.e(3).then(t.bind(null,246))),Object(l.a)(e=>({root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2),paddingTop:20},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},avatar:{color:"#ffffff",backgroundColor:i.a[700]}}));function g(){const e=c.a.useState([]),a=Object(r.a)(e,2),t=a[0],n=a[1],i=Object(d.c)(e=>e.bybId),l=Object(d.b)(),g=(Object(d.c)(e=>e.user),c.a.useState(!1)),p=Object(r.a)(g,2),v=p[0],y=p[1],f=Object(o.useState)(null),h=Object(r.a)(f,2),E=h[0],j=h[1];return Object(o.useEffect)(()=>(Object(m.n)({bybID:i,setDelivery:n,setLoading:y}),Object(m.q)({setStats:j,bybID:i}),()=>{}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null,c.a.createElement("title",null,"Deliveries"),c.a.createElement("meta",{name:"description",content:"List of Deliveries of your account"})),c.a.createElement(o.Suspense,{fallback:c.a.createElement(b.a,null)},v?c.a.createElement(b.a,null):c.a.createElement(s.a,{rows:t,handleDelivery:function(e){Object(m.n)({bybID:i,setDelivery:n}),e&&setTimeout(()=>{e.current.classList.remove("refresh")},2e3),setTimeout(()=>{Object(m.i)({dispatch:l,bybID:i})},3e3)},setDelivery:n,filterStats:E})))}},500:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(59),l=t.n(i),s=t(477),o=t(513),c=t(441),u=t(470),d=t(131),m=t(169),b=t(24),g=t(188),p=t(22),v=t(51),y=t(168),f=t(50),h=t(167);const E=Object(c.a)(u.a)({borderRadius:"1000rem",marginTop:"5px"}),j={Password:"",UserName:""},w=g.c({UserName:g.d(),Password:g.d().min(7,"Password should be min 7 characters").required("Password is required")});var S=function(e){const a=Object(p.b)(),t=Object(b.g)(),r=Object(v.b)().enqueueSnackbar;return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.d,null,n.a.createElement(h.a,null,n.a.createElement("img",{src:l.a,style:{maxWidth:140},alt:"Krayfin Map"}),n.a.createElement(h.c,{variant:"h4"},"Login to Your Account"),n.a.createElement(h.b,null,n.a.createElement(m.b,{initialValues:j,validationSchema:w,onSubmit:(e,n)=>{n.setSubmitting(!0);const i=JSON.stringify({UserName:e.UserName,Password:e.Password});Object(f.r)({article:i,dispatch:a,history:t,actions:n,enqueueSnackbar:r})}},e=>{const a=e.values,t=e.touched,r=e.errors,i=e.handleChange,l=e.handleBlur,c=e.isSubmitting;return n.a.createElement(m.a,{autoComplete:"true",style:{width:"100%"}},n.a.createElement("div",{className:"container"},n.a.createElement(o.a,{htmlFor:"input-with-icon-adornment"},"User Name"),n.a.createElement(E,{onChange:i,onBlur:l,value:a.UserName,variant:"outlined",fullWidth:!0,margin:"dense",name:"UserName",error:!(!r.UserName||!t.UserName),helperText:r.UserName&&t.UserName?r.UserName:null,InputLabelProps:{shrink:!0}})),n.a.createElement("div",{className:"container"},n.a.createElement(o.a,{htmlFor:"input-with-icon-adornment"},"Password"),n.a.createElement(E,{onChange:i,onBlur:l,value:a.Password,variant:"outlined",fullWidth:!0,margin:"dense",type:"password",name:"Password",InputLabelProps:{shrink:!0},error:!(!r.Password||!t.Password),helperText:r.Password&&t.Password?r.Password:null})),n.a.createElement("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",marginTop:20}},n.a.createElement(y.a,{disableFocusRipple:!0,disableElevation:!0,type:"submit",variant:"outlined",disabled:!!c},c?n.a.createElement(s.a,{style:{height:"20px",width:"20px",color:"#fff"}}):"Login")))}),n.a.createElement(d.a,{style:{marginTop:"10px"},varient:"caption"},"Don't have a account?"," ",n.a.createElement("span",{style:{textDecoration:"none",color:"#FF6F1F",cursor:"pointer"},onClick:e.clickHandler},"Signup"))))))},O=t(2),k=t.n(O),x=t(4),q=t(162),C=t(53),F=(t(88),t(183)),D=t(166);var N=e=>{const a=Object(r.useRef)(null),t=e.formField,i=t.username,l=t.password,s=t.email;return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.a,null,n.a.createElement("title",null,"Register your account"),n.a.createElement("meta",{name:"description",content:"Fill your basic info"})),n.a.createElement(h.c,{variant:"h4"},"Signup"),n.a.createElement(h.b,null,n.a.createElement(F.a,{name:i.name,label:i.label,tip:i.tip,ref:a,type:"text"}),n.a.createElement(F.a,{name:s.name,label:s.label,tip:s.tip,type:"email"}),n.a.createElement(F.a,{name:l.name,label:l.label,type:"password",tip:l.tip})))},A={formId:"onboardingForm",formField:{username:{name:"username",label:"Username*",tip:"Username Should Be Unique",requiredErrorMsg:"Username is required"},password:{name:"password",label:"Password*",tip:"It contains at least 8 characters and at most 20 characters \n \v \n It contains at least one digit.  \v  \n It contains at least one upper and one lower case alphabet.\n It contains at least one special character which includes !@#$%&*()-+=^.\n It doesn\u2019t contain any white space.",requiredErrorMsg:"Password is required"},email:{name:"email",label:"Email*",tip:"Your Business Email-ID",requiredErrorMsg:"Email is required"},businessName:{name:"businessName",label:"Business Name*",tip:"Cool Business Name For Your Business",requiredErrorMsg:"BusinessName is required"},businessCategory:{name:"businessCategory",label:"BusinessCategory*",tip:"Sector in Which You Are Doing Business",requiredErrorMsg:"BusinessCategory is required",data:[{value:void 0,label:"None"},{value:"E-commerce",label:"E-Commerce"},{value:"FMCGs and MSMEs",label:"FMCGs and MSMEs"},{value:"Food Chain",label:"Food Chain"},{value:"Medicine",label:"Medicine"},{value:"Fruits and Grocery",label:"Fruits and Grocery"},{value:"Ghost/Cloud Kitchens",label:"Ghost/Cloud Kitchens"},{value:"Clothing and acessrories",label:"Clothing and acessrories"},{value:"Furniture",label:"Furniture"},{value:"Electronics",label:"Electronics"},{value:"Stationary",label:"Stationary"}]},Address:{name:"Address",label:"Business Address*",tip:"Address of Business Office",requiredErrorMsg:"Business Address is required"},delivery:{name:"delivery",label:"delivery*",tip:"Specify Type Of Delivery",requiredErrorMsg:"Delivery is required",data:[{value:void 0,label:"None"},{value:"self",label:"Self Delivery"},{value:"bybrisk",label:"ByBrisk Delivery"}]},avgWorkingHours:{name:"avgWorkingHours",label:"Average Working Hours*",tip:"Average Business Working Hours",requiredErrorMsg:"Working Hours is required"},avgDeliveryTime:{name:"avgDeliveryTime",label:"Average Delivery Time*",tip:"Time in Which Your Deliveries are currently Delivered",requiredErrorMsg:"Average Delivery Time is required"},deliveryAgentRequired:{name:"deliveryAgentRequired",label:"Delivery Agent Required",tip:"IF Delivery Agent Needed"},deliveryTime:{name:"deliveryTime",label:"Delivery Time",tip:"Speed of Delviery",requiredErrorMsg:"Delivery Time is required"},autoScaling:{name:"autoScaling",tip:"Will Automatically increase Agents When more Deliveries are pending",label:"Auto Scaling"},haveDeliveryAgent:{name:"haveDeliveryAgent",tip:"if delivery Agent are available",label:"Have Delivery Agent"},longitude:{name:"haveDeliveryAgent"},latitude:{name:"haveDeliveryAgent"}}};const M=A.formField,T=M.username,P=M.password,L=M.email,I=M.businessName,W=M.businessCategory,R=M.Address,B=M.delivery,U=M.avgWorkingHours,H=M.avgDeliveryTime,z=M.deliveryAgentRequired,_=M.deliveryTime,G=M.autoScaling,K=M.haveDeliveryAgent,Y=M.longitude,J=M.latitude;var V={[T.name]:"",[P.name]:"",[L.name]:"",[I.name]:"",[R.name]:"",[W.name]:"",[B.name]:"",[U.name]:12,[H.name]:"",[G.name]:!1,[z.name]:!1,[_.name]:"",[K.name]:!1,[Y.name]:"",[J.name]:""};t(57);const $=A.formField,Q=$.username,X=$.password,Z=$.email,ee=$.businessName,ae=$.businessCategory,te=$.Address,re=$.avgWorkingHours;var ne=[g.c().shape({[Q.name]:g.d().min(3,"min 3 characters").max(15,"max 11 characters").required("".concat(Q.requiredErrorMsg)),[X.name]:g.d().min(8,"Min 8 characters required").required("".concat(X.requiredErrorMsg)),[Z.name]:g.d().email("Must be a valid email").required("".concat(Z.requiredErrorMsg))}),g.c().shape({[ee.name]:g.d().min(3,"min 3 characters required").max(20).required("".concat(ee.requiredErrorMsg)),[ae.name]:g.d().required("".concat(ae.requiredErrorMsg)),[te.name]:g.d().min(5).required("".concat(te.requiredErrorMsg))}),g.c().shape({[re.name]:g.b().min(0).max(24,"should be in hours/day").required("".concat(re.requiredErrorMsg))})];const ie=n.a.lazy(()=>t.e(8).then(t.bind(null,496))),le=n.a.lazy(()=>t.e(5).then(t.bind(null,497))),se=n.a.lazy(()=>t.e(4).then(t.bind(null,498))),oe=["Shipping address","Payment details","Review your order"],ce=A.formId,ue=A.formField;function de(e){const a=Object(b.g)(),t=Object(p.b)(),i=Object(v.b)().enqueueSnackbar;let o=Object(r.useState)(0),c=Object(q.a)(o,2),u=c[0],g=c[1];const E=ne[u],j=u===oe.length-1;function w(e,a){return S.apply(this,arguments)}function S(){return(S=Object(x.a)(k.a.mark((function e(r,n){var l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setSubmitting(!0),l=JSON.stringify({Email:r.email,Password:r.password,BusinessCategory:r.businessCategory,BusinessName:r.businessName,UserName:r.username,Address:r.Address,AvgWorkingHours:r.avgWorkingHours||12,DeliveryAgent:2,AutoScaling:r.autoScaling,BybriskDelivery:"bybrisk"===r.delivery,InstantDelivery:"24"!==r.deliveryTime,BusinessPlan:"1",longitude:r.longitude,latitude:r.latitude}),Object(f.d)({article:l,dispatch:t,history:a,actions:n,enqueueSnackbar:i});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(x.a)(k.a.mark((function e(a,t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.setSubmitting(!0),!j){e.next=6;break}i("Wait Sometime",{variant:"warnng",autoHideDuration:2e3}),w(a,t),e.next=19;break;case 6:if(e.t0=0===u,!e.t0){e.next=11;break}return e.next=10,Object(f.e)({username:a.username});case 10:e.t0=e.sent;case 11:if(!e.t0){e.next=16;break}t.setErrors({username:"Username already Exist"}),t.setSubmitting(!1),e.next=19;break;case 16:g(u+1),t.setTouched({}),t.setSubmitting(!1);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.d,{className:"wrapper"},n.a.createElement(h.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:l.a,style:{maxWidth:140},alt:"Krayfinmap"}),n.a.createElement(n.a.Fragment,null,n.a.createElement(m.b,{initialValues:V,validationSchema:E,onSubmit:function(e,a){return O.apply(this,arguments)}},e=>n.a.createElement(m.a,{id:ce,style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},n.a.createElement(r.Suspense,{fallback:n.a.createElement(C.a,null)},function(e,a){switch(e){case 0:return n.a.createElement(N,{formField:ue});case 1:return n.a.createElement(se,{formField:ue});case 2:return"bybrisk"===a.delivery?n.a.createElement(le,{formField:ue}):n.a.createElement(ie,{formField:ue});default:return n.a.createElement("div",null," Not Found ")}}(u,e.values)),n.a.createElement("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",marginTop:20}},n.a.createElement(y.a,{disabled:e.isSubmitting,disableFocusRipple:!0,disableElevation:!0,type:"submit",variant:"outlined",fullwidth:!0},e.isSubmitting?n.a.createElement(s.a,{size:24}):j?"Complete Signup":"Continue"))))),0===u&&n.a.createElement(d.a,{style:{marginTop:"10px"},varient:"caption"},"Already have a account ? "," ",n.a.createElement("span",{style:{textDecoration:"none",color:"#FF6F1F",cursor:"pointer"},onClick:e.clickHandler},"Login ")," "),"     "))," "))}t(425);a.default=()=>{const e=Object(r.useRef)(null);return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.a,null,n.a.createElement("title",null,"Login or Register"),n.a.createElement("meta",{name:"description",content:"Login to your account or create a new account"}),n.a.createElement("meta",{name:"keywords",cpntent:"login,register,signin,signup,bybrisk,krayfinmap"})),n.a.createElement("div",{class:"sliderContainer"},n.a.createElement("div",{class:"logincontainer",id:"container",ref:e},n.a.createElement("div",{class:"form-container sign-up-container"},n.a.createElement(de,{clickHandler:()=>{e.current.classList.remove("right-panel-active")}})),n.a.createElement("div",{class:"form-container sign-in-container"},n.a.createElement(S,{clickHandler:()=>{e.current.classList.add("right-panel-active")}})),n.a.createElement("div",{class:"overlay-container"},n.a.createElement("div",{class:"overlay"},n.a.createElement("div",{class:"overlay-panel overlay-left"},n.a.createElement("h1",null,"Welcome"),n.a.createElement("div",{style:{background:"#ffffff",height:"max-content",width:"max-content",padding:20,borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement("img",{src:l.a,style:{maxWidth:140},alt:"Krayfin Map"}))),n.a.createElement("div",{class:"overlay-panel overlay-right"},n.a.createElement("h1",null,"Welcome"),n.a.createElement("div",{style:{background:"#ffffff",height:"max-content",width:"max-content",borderRadius:"50%",padding:20,display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement("img",{src:l.a,style:{maxWidth:140},alt:"Krayfin Map"}))))))))}}}]);
//# sourceMappingURL=views-user.86de8e3b.chunk.js.map