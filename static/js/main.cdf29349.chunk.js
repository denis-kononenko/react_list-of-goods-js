(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),o=n(6),r=n(8),i=n(1),a=n(4),l=n.n(a),u=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h="alphabet",j="length",d=function(){var t=Object(i.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)(!1),a=Object(o.a)(s,2),d=a[0],g=a[1],p=function(t,e,n){var c=Object(r.a)(t);return!e&&n&&c.reverse(),e&&c.sort((function(t,c){switch(e){case h:return n?c.localeCompare(t):t.localeCompare(c);case j:return n?c.length-t.length:t.length-c.length;default:return 0}})),c}(b,n,d);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":n!==h}),onClick:function(){return c(h)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-success",{"is-light":n!==j}),onClick:function(){return c(j)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-light":!d}),onClick:function(){return g(!d)},children:"Reverse"}),(n||d)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(""),g(!1),p=b},children:"Reset"})]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cdf29349.chunk.js.map