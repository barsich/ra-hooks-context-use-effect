(this["webpackJsonpra-hooks-context-use-effect"]=this["webpackJsonpra-hooks-context-use-effect"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(4),a=n.n(r),o=(n(9),n(10),n(2)),i=n(0);function u(e){var t=e.user,n=t.name,c=t.avatar,s=t.details,r=s.city,a=s.company,o=s.position;return Object(i.jsxs)("div",{className:"users__details",children:[Object(i.jsx)("img",{className:"user-avatar",src:c,alt:n}),Object(i.jsx)("div",{className:"user-name",children:n}),Object(i.jsx)("div",{className:"user-city",children:r}),Object(i.jsx)("div",{className:"user-company",children:a}),Object(i.jsx)("div",{className:"user-position",children:o})]})}function j(e){var t=e.user,n=e.onUserSelect,c=e.activeUser;return Object(i.jsx)("li",{className:c===t.id?"list-item active":"list-item",onClick:function(){return n(t.id)},children:t.name})}function l(e){var t=e.users,n=e.onUserSelect,c=e.activeUser;return Object(i.jsx)("ul",{className:"users__list",children:t.map((function(e){return Object(i.jsx)(j,{user:e,activeUser:c,onUserSelect:n},e.id)}))})}function f(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(0),a=Object(o.a)(r,2),j=a[0],f=a[1],h=Object(c.useState)(null),b=Object(o.a)(h,2),d=b[0],m=b[1],O=Object(c.useState)(!1),x=Object(o.a)(O,2),v=x[0],g=x[1],p=Object(c.useState)(null),k=Object(o.a)(p,2),N=k[0],S=k[1];Object(c.useEffect)((function(){g(!0),fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json").then((function(e){if(!e.ok)throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443");return e.json()})).then((function(e){s(e)})).catch((function(e){return S(e.message)})).finally((function(){return g(!1)}))}),[]),Object(c.useEffect)((function(){0!==j&&(g(!0),fetch("".concat("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/").concat(j,".json")).then((function(e){if(!e.ok)throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443");return e.json()})).then((function(e){m(e)})).catch((function(e){return S(e.message)})).finally((function(){return g(!1)})))}),[j]);return Object(i.jsxs)(i.Fragment,{children:[v&&Object(i.jsx)("p",{className:"loading",children:"Loading..."}),Object(i.jsxs)("div",{className:"users",children:[N?Object(i.jsx)("p",{className:"error",children:N}):Object(i.jsx)(l,{users:n,activeUser:j,onUserSelect:function(e){e!==j&&f(e)}}),d?Object(i.jsx)(u,{user:d}):null]})]})}function h(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(f,{})})}var b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),b()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.411afd80.chunk.js.map