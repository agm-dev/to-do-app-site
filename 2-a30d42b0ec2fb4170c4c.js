(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{205:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(67),i=a.n(o);a.d(t,"a",function(){return i.a}),a.d(t,"b",function(){return o.navigate});a(208),a(9).default.enqueue,r.a.createContext({})},208:function(e,t,a){var n;e.exports=(n=a(213))&&n.default||n},210:function(e,t,a){"use strict";var n=a(216),r=a(0),o=a.n(r),i=a(228),l=a.n(i);function c(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,c=n.data.site,s=t||c.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s},{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},211:function(e,t,a){"use strict";var n=a(212),r=a(0),o=a.n(r),i=a(307),l=a(205),c=a(304),s=a(305),d=a(306),m=a(297),u=a(269),p=a(302),h=a(299),b=function(){var e=o.a.useState(null),t=e[0],a=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{edge:"start","aria-label":"home","aria-controls":"menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)}},o.a.createElement(h.a,{style:{color:"#fff"}})),o.a.createElement(u.a,{id:"menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:function(){a(null)}},o.a.createElement(l.a,{to:"/"},o.a.createElement(p.a,null,"Pending")),o.a.createElement(l.a,{to:"/completed"},o.a.createElement(p.a,null,"Completed")),o.a.createElement(l.a,{to:"/add"},o.a.createElement(p.a,null,"Add"))))},f=function(e){var t=e.siteTitle;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{position:"static",style:{position:"fixed",marginLeft:"-8px",marginTop:"-8px"}},o.a.createElement(s.a,{style:{minHeight:"70px"}},o.a.createElement(b,null),o.a.createElement(l.a,{to:"/"},o.a.createElement(d.a,{variant:"h6"},t)))),o.a.createElement("div",{style:{minHeight:"70px"}}))};f.defaultProps={siteTitle:""};var g=f;a(227),t.a=function(e){var t=e.children,a=n.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{siteTitle:a.site.siteMetadata.title}),o.a.createElement(i.a,{container:!0,spacing:3},o.a.createElement(i.a,{item:!0,xs:12},t)))}},212:function(e){e.exports={data:{site:{siteMetadata:{title:"To Do App"}}}}},213:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),o=a(99);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},216:function(e){e.exports={data:{site:{siteMetadata:{title:"To Do App",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},229:function(e,t,a){"use strict";a.r(t);var n=a(243);a.d(t,"default",function(){return n.a})},247:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(301),i=a(197),l=a(198),c=(a(51),a(199)),s=a(300),d=a(200),m=r.a.forwardRef(function(e,t){var a=e.classes,n=e.className,o=e.raised,d=void 0!==o&&o,m=Object(l.a)(e,["classes","className","raised"]);return r.a.createElement(s.a,Object(i.a)({className:Object(c.a)(a.root,n),elevation:d?8:1,ref:t},m))}),u=Object(d.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(m),p=a(303),h=a(220),b=r.a.forwardRef(function(e,t){var a=e.classes,n=e.className,o=Object(l.a)(e,["classes","className"]),s=r.a.useContext(h.a);return r.a.createElement("div",Object(i.a)({className:Object(c.a)(a.root,n,"flex-start"===s.alignItems&&a.alignItemsFlexStart),ref:t},o))}),f=Object(d.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(b),g=r.a.forwardRef(function(e,t){var a=e.alt,n=e.children,o=e.childrenClassName,s=e.classes,d=e.className,m=e.component,u=void 0===m?"div":m,p=e.imgProps,h=e.sizes,b=e.src,f=e.srcSet,g=Object(l.a)(e,["alt","children","childrenClassName","classes","className","component","imgProps","sizes","src","srcSet"]),y=null,v=b||f;return y=v?r.a.createElement("img",Object(i.a)({alt:a,src:b,srcSet:f,sizes:h,className:s.img},p)):o&&r.a.isValidElement(n)?r.a.cloneElement(n,{className:Object(c.a)(o,n.props.className)}):n,r.a.createElement(u,Object(i.a)({className:Object(c.a)(s.root,s.system,d,!v&&s.colorDefault),ref:t},g),y)}),y=Object(d.a)(function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover"}}},{name:"MuiAvatar"})(g),v=a(306),E=r.a.forwardRef(function(e,t){var a=e.children,n=e.classes,o=e.className,s=e.disableTypography,d=void 0!==s&&s,m=e.inset,u=void 0!==m&&m,p=e.primary,b=e.primaryTypographyProps,f=e.secondary,g=e.secondaryTypographyProps,y=Object(l.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),E=r.a.useContext(h.a).dense,j=null!=p?p:a;null==j||j.type===v.a||d||(j=r.a.createElement(v.a,Object(i.a)({variant:E?"body2":"body1",className:n.primary,component:"span"},b),j));var w=f;return null==w||w.type===v.a||d||(w=r.a.createElement(v.a,Object(i.a)({variant:"body2",className:n.secondary,color:"textSecondary"},g),w)),r.a.createElement("div",Object(i.a)({className:Object(c.a)(n.root,o,E&&n.dense,u&&n.inset,j&&w&&n.multiline),ref:t},y),j,w)}),j=Object(d.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(E),w=r.a.forwardRef(function(e,t){var a=e.classes,n=e.className,o=Object(l.a)(e,["classes","className"]);return r.a.createElement("div",Object(i.a)({className:Object(c.a)(a.root,n),ref:t},o))});w.muiName="ListItemSecondaryAction";var x=Object(d.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(w),O=a(297),k=a(215),C=Object(k.a)(r.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),N=Object(k.a)(r.a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"}),"CropDin"),T=Object(k.a)(r.a.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done"),M=a(95),S=function(e){var t=e.todo,a=t.id,o=t.title,i=t.description,l=t.done,c=Object(n.useContext)(M.a),s=c.toggleTodo,d=c.removeTodo,m=function(){return s(a)};return r.a.createElement(u,{key:a,style:{marginBottom:"2vh",paddingTop:"1vh",paddingBottom:"1vh",backgroundColor:"#e8eaf6"}},r.a.createElement(p.a,null,r.a.createElement(f,null,r.a.createElement(y,{"aria-label":o,style:{backgroundColor:"#5c6bc0"}},o[0])),r.a.createElement(j,{primary:o,secondary:i&&i.length?i:null}),r.a.createElement(x,null,r.a.createElement(O.a,{edge:"end","aria-label":"delete",onClick:function(){return d(a)}},r.a.createElement(C,null)),l?r.a.createElement(O.a,{edge:"end","aria-label":"done",onClick:m},r.a.createElement(T,{style:{color:"green"}})):r.a.createElement(O.a,{edge:"end","aria-label":"todo",onClick:m},r.a.createElement(N,null)))))};t.a=function(e){var t=e.todos;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,t.map(function(e){return r.a.createElement(S,{key:e.id,todo:e})})),r.a.createElement("div",{className:"breakline"}))}},248:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(198),i=a(197),l=(a(51),a(199)),c=a(200),s=a(312),d=a(206),m=r.a.forwardRef(function(e,t){var a=e.children,n=e.classes,c=e.className,m=e.color,u=void 0===m?"default":m,p=e.component,h=void 0===p?"button":p,b=e.disabled,f=void 0!==b&&b,g=e.disableFocusRipple,y=void 0!==g&&g,v=e.focusVisibleClassName,E=e.size,j=void 0===E?"large":E,w=e.variant,x=void 0===w?"round":w,O=Object(o.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return r.a.createElement(s.a,Object(i.a)({className:Object(l.a)(n.root,c,"round"!==x&&n.extended,"large"!==j&&n["size".concat(Object(d.a)(j))],f&&n.disabled,{primary:n.primary,secondary:n.secondary,inherit:n.colorInherit}[u]),component:h,disabled:f,focusRipple:!y,focusVisibleClassName:Object(l.a)(n.focusVisible,v),ref:t},O),r.a.createElement("span",{className:n.label},a))}),u=Object(c.a)(function(e){return{root:Object(i.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&$focusVisible":{boxShadow:e.shadows[6]},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}},{name:"MuiFab"})(m),p=a(267),h=a.n(p),b=a(205);t.a=function(e){var t=e.to;return r.a.createElement(b.a,{to:t,style:{position:"fixed",bottom:"2vh",right:"2vh"}},r.a.createElement(u,{color:"primary","aria-label":"add",variant:"round"},r.a.createElement(h.a,null)))}},267:function(e,t,a){"use strict";a(94);var n=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(268)).default)(r.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},268:function(e,t,a){"use strict";a(94);var n=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=o.default.memo(o.default.forwardRef(function(t,a){return o.default.createElement(i.default,(0,r.default)({ref:a},t),e)}));0;return a.muiName=i.default.muiName,a};var r=n(a(140)),o=n(a(0)),i=n(a(229))}}]);
//# sourceMappingURL=2-a30d42b0ec2fb4170c4c.js.map