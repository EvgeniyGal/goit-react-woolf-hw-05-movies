"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[815],{77:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(87),s=r(534),a=r(184);var i=function(e){var t=e.movie,r=e.to,i=e.from;return(0,a.jsx)("li",{className:"movie-list-item",children:(0,a.jsxs)(n.rU,{to:r,state:{from:i},children:[(0,a.jsx)("p",{className:"movie-title",children:t.title}),(0,a.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):s,alt:""}),(0,a.jsxs)("p",{className:"release-date",children:[" Release: ",t.release_date]})]})},t.id)};var c=function(e){var t=e.movies,r=e.to,n=e.from;return(0,a.jsx)("ul",{className:"movie-list",children:t.map((function(e){return(0,a.jsx)(i,{to:"".concat(r,"/").concat(e.id),from:n,movie:e},e.id)}))})}},815:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(861),s=r(439),a=r(757),i=r.n(a),c=r(77),o=r(184);var u=function(e){var t=e.movies;return(0,o.jsxs)("main",{children:[(0,o.jsx)("h1",{className:"main-title",children:"Trending today"}),(0,o.jsx)(c.Z,{movies:t,to:"/movies",from:"/"})]})},l=r(791),m=r(980);var f=function(){var e=(0,l.useState)(null),t=(0,s.Z)(e,2),r=t[0],a=t[1];return(0,l.useEffect)((function(){!function(){var e=(0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,(0,m.CG)();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),a(null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[]),r&&(0,o.jsx)(u,{movies:r.results})}}}]);
//# sourceMappingURL=815.769d6451.chunk.js.map