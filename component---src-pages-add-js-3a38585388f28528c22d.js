(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{196:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(211),l=a(210),o=a(205),c=a(95),s=a(308),u=a(307),m=a(311),d=a(309),p=a(310),f=function(e){var t=Object(n.useContext)(c.a).addTodo,a=Object(n.useState)(""),r=a[0],l=a[1],f=Object(n.useState)(""),E=f[0],g=f[1];return i.a.createElement("form",{noValidate:!0,autoComplete:"off"},i.a.createElement(s.a,{maxWidth:"md"},i.a.createElement(u.a,{container:!0,spacing:2},i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(m.a,{required:!0,id:"title",name:"title",label:"Title",value:r,onChange:function(e){return l(e.target.value)},margin:"normal",fullWidth:!0})),i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(m.a,{id:"description",name:"description",label:"Description",value:E,onChange:function(e){return g(e.target.value)},margin:"normal",fullWidth:!0}))),i.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",marginTop:"3vh"}},i.a.createElement(d.a,{variant:"contained",size:"medium",color:"primary",onClick:function(e){e.preventDefault(),t({title:r,description:E}),Object(o.b)("/")}},i.a.createElement(p.a,{style:{marginRight:"1vh",fontSize:"20px"}}),"Add"))))};t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(l.a,{title:"Add todo"}),i.a.createElement(f,null))}},205:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(67),l=a.n(r);a.d(t,"a",function(){return l.a}),a.d(t,"b",function(){return r.navigate});a(208),a(9).default.enqueue,i.a.createContext({})},208:function(e,t,a){var n;e.exports=(n=a(213))&&n.default||n},210:function(e,t,a){"use strict";var n=a(216),i=a(0),r=a.n(i),l=a(228),o=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,l=e.title,c=n.data.site,s=t||c.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s},{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},211:function(e,t,a){"use strict";var n=a(212),i=a(0),r=a.n(i),l=a(307),o=a(205),c=a(304),s=a(305),u=a(306),m=a(297),d=a(269),p=a(302),f=a(299),E=function(){var e=r.a.useState(null),t=e[0],a=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{edge:"start","aria-label":"home","aria-controls":"menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)}},r.a.createElement(f.a,{style:{color:"#fff"}})),r.a.createElement(d.a,{id:"menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:function(){a(null)}},r.a.createElement(o.a,{to:"/"},r.a.createElement(p.a,null,"Pending")),r.a.createElement(o.a,{to:"/completed"},r.a.createElement(p.a,null,"Completed")),r.a.createElement(o.a,{to:"/add"},r.a.createElement(p.a,null,"Add"))))},g=function(e){var t=e.siteTitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{position:"static",style:{position:"fixed",marginLeft:"-8px",marginTop:"-8px"}},r.a.createElement(s.a,{style:{minHeight:"70px"}},r.a.createElement(E,null),r.a.createElement(o.a,{to:"/"},r.a.createElement(u.a,{variant:"h6"},t)))),r.a.createElement("div",{style:{minHeight:"70px"}}))};g.defaultProps={siteTitle:""};var h=g;a(227),t.a=function(e){var t=e.children,a=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{siteTitle:a.site.siteMetadata.title}),r.a.createElement(l.a,{container:!0,spacing:3},r.a.createElement(l.a,{item:!0,xs:12},t)))}},212:function(e){e.exports={data:{site:{siteMetadata:{title:"To Do App"}}}}},213:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),i=a.n(n),r=a(99);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},216:function(e){e.exports={data:{site:{siteMetadata:{title:"To Do App",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-add-js-3a38585388f28528c22d.js.map