(this["webpackJsonpquestionnaire-action-questions"]=this["webpackJsonpquestionnaire-action-questions"]||[]).push([[0],{26:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(3),i=n(4),r=(n(23),n(24),n(25),n(26),n(6)),a=n.n(r),s=n(11),l=n(13),u=n(14),p=n(18),j=n(16),d=n(2),O=n(15),b=n(1),h=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).onConfigure=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.props.sdk.app.getCurrentState();case 2:return t=e.sent,e.abrupt("return",{parameters:o.state.parameters,targetState:t});case 4:case"end":return e.stop()}}),e)}))),o.state={parameters:{}},e.sdk.app.onConfigure((function(){return o.onConfigure()})),o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.sdk.app.getParameters();case 2:t=e.sent,this.setState(t?{parameters:t}:this.state,(function(){n.props.sdk.app.setReady()}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsx)(d.l,{className:Object(O.a)({margin:"80px"}),children:Object(b.jsxs)(d.b,{children:[Object(b.jsx)(d.d,{children:"Questionnaire Action Questions Config"}),Object(b.jsx)(d.g,{children:"Welcome to your contentful app. This is your config page."})]})})}}]),n}(o.Component),f=function(e){return Object(b.jsx)(d.g,{children:"Hello Entry Editor Component"})},m=function(e){return Object(b.jsx)(d.g,{children:"Hello Page Component"})},g=function(e){return Object(b.jsx)(d.g,{children:"Hello Sidebar Component"})},x=n(9),v=n(8),T=n(12),C=n(17),k=function(e){var t=e.sdk,n={title:"",placeholder:"",actionId:""},c=Object(o.useState)(t.field.getValue()||[]),i=Object(C.a)(c,2),r=i[0],a=i[1];Object(o.useEffect)((function(){t.field.setValue(r),t.window.updateHeight()}),[r,t.field,t.window]);var s=function(e,t,n){var o=Object(T.a)(Object(T.a)({},r[e]),{},Object(v.a)({},t,n)),c=Object(x.a)(r);c.splice(e,1,o),a(c)};return Object(b.jsxs)("div",{children:[r.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)(d.h,{style:{marginTop:10},children:["Question ",t+1]}),Object(b.jsx)(d.i,{style:{marginTop:10},labelText:"Title",type:"text",onChange:function(e){return s(t,"title",e.target.value)},value:e.title}),Object(b.jsx)(d.i,{style:{marginTop:10},labelText:"Placholder",type:"text",onChange:function(e){return s(t,"placeholder",e.target.value)},value:e.placeholder}),Object(b.jsx)(d.c,{style:{marginTop:10},children:"Action ID"}),Object(b.jsx)(d.j,{type:"number",width:"small",onChange:function(e){return s(t,"actionId",e.target.value)},value:e.actionId}),Object(b.jsx)(d.a,{style:{marginTop:10},size:"small",buttonType:"negative",onClick:function(){var e=Object(x.a)(r);e.splice(t,1),a(e)},children:"Delete Question"})]},t)})),Object(b.jsx)(d.a,{style:{marginTop:20},size:"medium",icon:"Plus",buttonType:"positive",onClick:function(){return a([].concat(Object(x.a)(r),[n]))},children:"Add Question"}),Object(b.jsxs)(d.e,{style:{marginTop:10,fontStyle:"italic"},children:["The questions appearing in the Questionnaire. Each question requires a Title, Placeholder Text, & valid ",Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://bit.ly/30xpNFC",children:"Rogue Action ID"}),"."]})]})},y=function(e){return Object(b.jsx)(k,{sdk:e.sdk})},I=function(e){return Object(b.jsx)(d.g,{children:"Hello Dialog Component"})};Object(i.init)((function(e){var t=document.getElementById("root");[{location:i.locations.LOCATION_APP_CONFIG,component:Object(b.jsx)(h,{sdk:e})},{location:i.locations.LOCATION_ENTRY_FIELD,component:Object(b.jsx)(y,{sdk:e})},{location:i.locations.LOCATION_ENTRY_EDITOR,component:Object(b.jsx)(f,{sdk:e})},{location:i.locations.LOCATION_DIALOG,component:Object(b.jsx)(I,{sdk:e})},{location:i.locations.LOCATION_ENTRY_SIDEBAR,component:Object(b.jsx)(g,{sdk:e})},{location:i.locations.LOCATION_PAGE,component:Object(b.jsx)(m,{sdk:e})}].forEach((function(n){e.location.is(n.location)&&Object(c.render)(n.component,t)}))}))}},[[30,1,2]]]);
//# sourceMappingURL=main.a8104abf.chunk.js.map