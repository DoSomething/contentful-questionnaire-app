(this["webpackJsonpquestionnaire-action-questions"]=this["webpackJsonpquestionnaire-action-questions"]||[]).push([[0],{26:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(3),a=n(4),i=(n(23),n(24),n(25),n(26),n(6)),r=n.n(i),s=n(11),l=n(13),u=n(14),j=n(18),p=n(16),d=n(2),O=n(15),b=n(1),h=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).onConfigure=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.props.sdk.app.getCurrentState();case 2:return t=e.sent,e.abrupt("return",{parameters:o.state.parameters,targetState:t});case 4:case"end":return e.stop()}}),e)}))),o.state={parameters:{}},e.sdk.app.onConfigure((function(){return o.onConfigure()})),o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,n=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.sdk.app.getParameters();case 2:t=e.sent,this.setState(t?{parameters:t}:this.state,(function(){n.props.sdk.app.setReady()}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsx)(d.m,{className:Object(O.a)({margin:"80px"}),children:Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.e,{children:"Questionnaire Action Questions Config"}),Object(b.jsx)(d.h,{children:"Welcome to your contentful app. This is your config page."})]})})}}]),n}(o.Component),f=function(e){return Object(b.jsx)(d.h,{children:"Hello Entry Editor Component"})},m=function(e){return Object(b.jsx)(d.h,{children:"Hello Page Component"})},x=function(e){return Object(b.jsx)(d.h,{children:"Hello Sidebar Component"})},g=n(9),T=n(8),v=n(12),k=n(17),C=function(e){var t=e.sdk,n={title:"",placeholder:"",actionId:""},c=Object(o.useState)(t.field.getValue()||[]),a=Object(k.a)(c,2),i=a[0],r=a[1];Object(o.useEffect)((function(){t.field.setValue(i),t.window.updateHeight()}),[i,t.field,t.window]);var s=function(e,t,n){var o=Object(v.a)(Object(v.a)({},i[e]),{},Object(T.a)({},t,n)),c=Object(g.a)(i);c.splice(e,1,o),r(c)};return Object(b.jsxs)("div",{children:[Object(b.jsx)(d.b,{children:Object(b.jsx)(d.a,{size:"small",buttonType:"muted",onClick:function(){return r([].concat(Object(g.a)(i),[n]))},children:"Add Question"})}),i.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)(d.i,{style:{marginTop:10},children:["Question ",t+1]}),Object(b.jsx)(d.j,{style:{marginTop:10},labelText:"Title",type:"text",onChange:function(e){return s(t,"title",e.target.value)},value:e.title}),Object(b.jsx)(d.j,{style:{marginTop:10},labelText:"Placholder",type:"text",onChange:function(e){return s(t,"placeholder",e.target.value)},value:e.placeholder}),Object(b.jsx)(d.d,{style:{marginTop:10},formLabelText:"Action ID",children:"Action ID"}),Object(b.jsx)(d.k,{type:"number",width:"small",onChange:function(e){return s(t,"actionId",e.target.value)},value:e.actionId}),Object(b.jsx)(d.a,{style:{marginTop:10},size:"small",buttonType:"negative",onClick:function(){var e=Object(g.a)(i);e.splice(t,1),r(e)},children:"Delete Question"})]},e.actionId)})),Object(b.jsxs)(d.f,{style:{marginTop:10,fontStyle:"italic"},children:["The questions appearing in the Questionnaire. Each question requires a Title, Placeholder Text, & valid ",Object(b.jsx)("a",{target:"_blank",href:"https://bit.ly/30xpNFC",children:"Rogue Action ID"}),"."]})]})},y=function(e){return Object(b.jsx)(C,{sdk:e.sdk})},I=function(e){return Object(b.jsx)(d.h,{children:"Hello Dialog Component"})};Object(a.init)((function(e){var t=document.getElementById("root");[{location:a.locations.LOCATION_APP_CONFIG,component:Object(b.jsx)(h,{sdk:e})},{location:a.locations.LOCATION_ENTRY_FIELD,component:Object(b.jsx)(y,{sdk:e})},{location:a.locations.LOCATION_ENTRY_EDITOR,component:Object(b.jsx)(f,{sdk:e})},{location:a.locations.LOCATION_DIALOG,component:Object(b.jsx)(I,{sdk:e})},{location:a.locations.LOCATION_ENTRY_SIDEBAR,component:Object(b.jsx)(x,{sdk:e})},{location:a.locations.LOCATION_PAGE,component:Object(b.jsx)(m,{sdk:e})}].forEach((function(n){e.location.is(n.location)&&Object(c.render)(n.component,t)}))}))}},[[30,1,2]]]);
//# sourceMappingURL=main.46eb5c08.chunk.js.map