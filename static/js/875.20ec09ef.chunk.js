"use strict";(self.webpackChunknews_app=self.webpackChunknews_app||[]).push([[875],{875:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var s=n(439),a=n(791),r=n(433),c=n(805),i=n(722),u=n(861),o=n(687),l=n.n(o),d=n(243),p=function(e){return e.map((function(e){return{abstract:e.abstract,title:e.title,url:e.url,date:e.published_date,section:e.nytdsection,media:e.media}}))},_="HuhT2LeoT7Ua2Tg2s6puWXB3yc9UXWQk",f="https://api.nytimes.com/svc/";function h(){return(h=(0,u.Z)(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.get("".concat(f,"news/v3/content/section-list.json?api-key=").concat(_));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=(0,u.Z)(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.get("".concat(f,"mostpopular/v2/viewed/1.json?api-key=").concat(_));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",p(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w={getNewsCategories:function(){return h.apply(this,arguments)},getMostPopularNews:function(){return m.apply(this,arguments)}},N=w,x="CategoriesMenu_CategoriesMenuWrapper__j+gW-",g="CategoriesMenu_categoriesBtn__l7wFb",v="CategoriesMenu_horizontalMenu__ehX7t",j="CategoriesMenu_activeBtn__qedFS",C=n(184),y=function(){var e=(0,a.useState)([]),t=(0,s.Z)(e,2),n=t[0],u=t[1],o=(0,a.useState)(null),l=(0,s.Z)(o,2),d=l[0],p=l[1],_=(0,a.useState)(null),f=(0,s.Z)(_,2),h=f[0],m=(f[1],(0,a.useState)(!1)),w=(0,s.Z)(m,2),y=w[0],b=w[1],Z=(0,c.useMediaQuery)({query:"(max-width: 1279px)"}),k=(0,c.useMediaQuery)({query:"(max-width: 767px)"});(0,a.useEffect)((function(){N.getNewsCategories().then((function(e){return u(e)})).catch((function(e){return console.log(e)}))}),[]);return(0,C.jsxs)("div",{className:x,children:[(0,C.jsx)("ul",{className:v,children:(0,r.Z)(n).splice(0,Z?4:6).map((function(e){var t=e.display_name;return(0,C.jsx)("li",{children:(0,C.jsx)("button",{onClick:function(){return p(t)},className:"".concat(g," ").concat(d===t&&j),type:"button",children:t})},t)}))}),(0,C.jsx)(i.ZP,{onMenuOpen:function(){return b(!y)},onMenuClose:function(){return b(!y)},defaultValue:h,onChange:function(){return p("others")},options:function(){var e=[];return(0,r.Z)(n).splice(Z?4:6,50).forEach((function(t){return e.push({value:t.section,label:t.display_name})})),e}(),className:"react-select-container ".concat("others"===d&&j," ").concat(y&&"rotateArrow"),classNamePrefix:"react-select",placeholder:k?"Categories":"Others",unstyled:!0})]})},b=n(126),Z=function(e){return e.split("-").toReversed().join("/")},k="NewsCard_newsCard__Vg5lZ",M="NewsCard_newsImg__yvLMK",S="NewsCard_newsSection__IBr9z",B="NewsCard_favoriteBtn__jOJtZ",P="NewsCard_newsIcon__JF-5e",T="NewsCard_newsTitle__PfTpB",W="NewsCard_newsAbstract__SYZcz",I="NewsCard_newsBottomWraper__OSp4g",L="NewsCard_newsDate__lZmdI",F="NewsCard_newsLink__fcXsW",O=function(e){var t=e.abstract,n=e.title,s=e.url,a=e.date,r=e.section,c=e.media,i=0!==c.length?c[0]["media-metadata"][2].url:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";return(0,C.jsxs)("div",{className:k,children:[(0,C.jsx)("img",{className:M,src:i,alt:n}),(0,C.jsx)("p",{className:S,children:r}),(0,C.jsxs)("button",{type:"button",className:B,children:["Add to favorite ",(0,C.jsx)(b.sF8,{className:P})]}),(0,C.jsx)("p",{className:T,children:n}),(0,C.jsx)("p",{className:W,children:t}),(0,C.jsxs)("div",{className:I,children:[(0,C.jsx)("p",{className:L,children:Z(a)}),(0,C.jsx)("a",{className:F,href:s,children:"Read more"})]})]})},X="NewsList_newsList__xTSKs",q=function(e){var t=e.news;return(0,C.jsx)("ul",{className:X,children:t.map((function(e){var t=e.abstract,n=e.title,s=e.url,a=e.date,r=e.section,c=e.media;return(0,C.jsx)("li",{children:(0,C.jsx)(O,{abstract:t,title:n,media:c,url:s,date:a,section:r})},s)}))})},z=n(891),A="Home_home__9Ke73",E=function(){var e=(0,a.useContext)(z.N).theme,t=(0,a.useState)([]),n=(0,s.Z)(t,2),r=n[0],c=n[1];return(0,a.useEffect)((function(){N.getMostPopularNews().then((function(e){return c(e)})).catch((function(e){return console.log(e)}))}),[]),(0,C.jsxs)("section",{className:"".concat(A," ").concat(e),children:[(0,C.jsx)(y,{}),(0,C.jsx)(q,{news:r})]})}}}]);
//# sourceMappingURL=875.20ec09ef.chunk.js.map