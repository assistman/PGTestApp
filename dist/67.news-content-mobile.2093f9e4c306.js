webpackJsonp([67],{2039:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t,a;return a=t=function(t){function a(){return n(this,a),r(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return c(a,t),u(a,[{key:"render",value:function(){var t={ticker:this.context.ticker};return l.a.createElement(e,s({},this.props,t))}}]),a}(l.a.Component),t.contextTypes={ticker:l.a.PropTypes.string},a}var o=a(1),l=a.n(o),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();t.a=i},2125:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}var r=a(1),c=a.n(r),i=a(8),o=a(2039),l=a(792),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(e,t){var a=t.id,n=t.ticker;return{value:Object(l.o)(e,n,a).title||null}};t.a=Object(o.a)(Object(i.connect)(u)(function(e){var t=e.value,a=(e.dispatch,e.as),r=(e.ticker,n(e,["value","dispatch","as","ticker"]));return c.a.createElement(a||"span",s({},r),t)}))},2126:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}var r=a(1),c=a.n(r),i=a(8),o=a(68),l=a.n(o),s=a(2039),u=a(792),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f=function(e,t){var a=t.id,n=t.ticker,r=Object(u.o)(e,n,a);return{value:r?r.publicationTime:null}};t.a=Object(s.a)(Object(i.connect)(f)(function(e){var t=e.value,a=(e.dispatch,e.as),r=(e.ticker,n(e,["value","dispatch","as","ticker"])),i=l.a.servicesDate(t);return c.a.createElement(a||"span",p({},r),t?i:t)}))},2127:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}var r=a(1),c=a.n(r),i=a(8),o=a(2039),l=a(0),s=a.n(l),u=a(792),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f={dow_jones:"icon-dow-jones"},m=function(e,t){var a=t.id,n=t.ticker,r=Object(u.o)(e,n,a),c=r&&r.wire&&String(r.wire).toLowerCase().replace(" ","_");return{iconClassName:s.a.has(f,c)?f[c]:""}};t.a=Object(o.a)(Object(i.connect)(m)(function(e){var t=e.iconClassName,a=(e.dispatch,e.as),r=(e.ticker,n(e,["iconClassName","dispatch","as","ticker"]));return c.a.createElement(a||"span",p({},r),c.a.createElement("i",{className:t}))}))},2179:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}var r=a(1),c=a.n(r),i=a(8),o=a(107),l=a.n(o),s=a(2039),u=a(792),p=function(e,t){var a=t.id,n=t.ticker;return{value:Object(u.o)(e,n,a).text}};t.a=Object(s.a)(Object(i.connect)(p)(function(e){var t=e.value,a=(e.dispatch,e.as,e.ticker,n(e,["value","dispatch","as","ticker"]));return c.a.createElement("span",a,l()(t))}))},2180:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}var r=a(1),c=a.n(r),i=a(8),o=a(2039),l=a(792),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(e,t){var a=t.id,n=t.ticker;return{value:Object(l.o)(e,n,a).source}};t.a=Object(o.a)(Object(i.connect)(u)(function(e){var t=e.value,a=(e.dispatch,e.as),r=(e.ticker,n(e,["value","dispatch","as","ticker"]));return c.a.createElement(a||"span",s({href:t},r),t)}))},2181:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}var c=a(11),i=a.n(c),o=a(1),l=a.n(o),s=a(8),u=a(2039),p=a(826),f=a(792),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v=function(e,t){var a=t.id,n=t.ticker,r=t.activeClassName,c=t.notActiveClassName;return{active:a===Object(f.n)(e,n),newItemsId:Object(f.j)(e,n),activeClassName:r||"active",notActiveClassName:c||""}};t.a=Object(u.a)(Object(s.connect)(v)(function(e){var t,a=e.active,c=(e.dispatch,e.children),o=e.activeClassName,s=e.notActiveClassName,u=e.className,f=e.as,v=(e.ticker,r(e,["active","dispatch","children","activeClassName","notActiveClassName","className","as","ticker"]));return v.className=i()((t={},n(t,u,!!u),n(t,o,a),n(t,s,!a),t)),l.a.createElement(p.a,m({as:f,id:e.id,key:e.id},v),c)}))},2182:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=a(414),o=a(0),l=(a.n(o),a(1)),s=a.n(l),u=a(8),p=a(131),f=a(2039),m=a(792),v=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=function(e,t){var a=t.ticker,n=Object(m.a)(e,a);return{availableFilters:n,selectedDropdownFilter:Object(m.m)(e,a),isAvailableEnabledFilters:0!==n.length,countAvailableFilters:n.length}},b=function(e){function t(){var e,a,c,o;n(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return a=c=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),c.onChange=function(e){var t=c.props,a=t.dispatch,n=t.ticker;a(Object(i.selectDropdownFilter)(e,n))},o=a,r(c,o)}return c(t,e),v(t,[{key:"render",value:function(){var e=this.props,t=e.availableFilters,a=e.selectedDropdownFilter;e.isAvailableEnabledFilters,e.countAvailableFilters;return o.isEmpty(t)?null:s.a.createElement("div",{className:"pane filter-block bg__platform-2 color__platform-3 list__item"},s.a.createElement("div",{className:"filter__label"},__("news.page.select.news.feed"),":"),s.a.createElement("div",{className:"filter__select"},s.a.createElement(p.a,{className:"pane pane__fluid services__dropdown",childClassName:"pane pane__fluid",as:"div",ref:"dropdown",selected:a,options:t,onChange:this.onChange})))}}]),t}(l.PureComponent);t.a=Object(f.a)(Object(u.connect)(d)(b))},298:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(8),o=a(2125),l=a(2126),s=a(2127),u=a(2181),p=a(2182),f=a(414),m=a(2179),v=a(2180),d=a(1),b=a.n(d),_=a(2),h=a.n(_),y=a(280),O=a(421),w=a(0),j=a.n(w),E=a(792),N=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),k=function(e,t){var a=t.ticker,n=t.defaultNewsId;return{news:Object(E.e)(e,a),selectedNewsId:n,filter:Object(E.g)(e,a),status:Object(E.k)(e,a)}},g=function(e){function t(){var e,a,c,i;n(this,t);for(var o=arguments.length,l=Array(o),s=0;s<o;s++)l[s]=arguments[s];return a=c=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),c.click=function(e){var t=c.props,a=t.dispatch,n=t.ticker,r=t.onSelect;a(Object(f.selectNews)(e,n)),c._container.scrollIntoView(!0),j.a.isFunction(r)&&r(e),n===y.a&&h.a.navigate("#news/"+e,{trigger:!1})},i=a,r(c,i)}return c(t,e),N(t,[{key:"getChildContext",value:function(){return{ticker:this.props.ticker}}},{key:"render",value:function(){var e=this,t=this.props,a=t.selectedNewsId,n=t.filter,r=t.isShowFilter,c=t.innerView,i=a,f=!i;return b.a.createElement("div",{className:"pane pane__yfluid",ref:function(t){e._container=t}},i&&b.a.createElement("div",{className:"news__mobile full pane__fluid"},c&&b.a.createElement("div",{className:"news__mobile__back pane flex-valign-center btn",onClick:function(t){return e.click(null)}},b.a.createElement("span",{className:"icon icon-prev-arrow-grey"}),"  ",b.a.createElement("span",null,__("actions.back"))),b.a.createElement("div",{className:"date smaller-px"},b.a.createElement(l.a,{id:a})," |"," ",b.a.createElement(s.a,{id:a})),b.a.createElement(o.a,{id:a,as:"div",className:"caption big-b-px"}),b.a.createElement(m.a,{id:a,as:"div",className:"text medium-px"}),b.a.createElement("div",{className:"source"},__("source"),":"," ",b.a.createElement(v.a,{id:a,as:"span"}))),f&&b.a.createElement("div",{className:"news__mobile list list--column"},r&&b.a.createElement(p.a,null),j.a.map(n,function(t){return b.a.createElement(u.a,{as:"div",id:t,key:t,className:"list__item",notActiveClassName:"bg__platform-2 color__platform-3 bg__platform-1-hover",activeClassName:"active bg__platform-1",onClick:function(a){return e.click(t)}},b.a.createElement("div",{className:"pane pane__fluid pane__row"},b.a.createElement("div",{className:"pane pane__fluid flex flex-column"},b.a.createElement("div",{className:"date smaller-px"},b.a.createElement(l.a,{id:t})," | "," ",b.a.createElement(s.a,{as:"span",id:t}),b.a.createElement(O.a,null)),b.a.createElement(o.a,{id:t,as:"div",className:"color__brand-primary medium-px"})),b.a.createElement("div",{className:"pane flex flex-valign-center arrow"},b.a.createElement("div",{className:"right icon-marketsX-popup-arrow-right"}),b.a.createElement("div",{className:"left icon-marketsX-popup-arrow-left"}))))})))}}]),t}(b.a.PureComponent);g.defaultProps={isShowFilter:!0,defaultNewsId:void 0,onSelect:void 0,innerView:!1},g.childContextTypes={ticker:b.a.PropTypes.string},t.default=Object(i.connect)(k)(g)},302:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(8),l=a(1),s=a.n(l),u=a(804),p=a.n(u),f=a(2125),m=a(2126),v=a(2127),d=a(2179),b=a(2180),_=a(2039),h=a(792),y=function(e,t){var a=t.id,n=t.ticker;return{value:Object(h.o)(e,n,a)}},O=Object(_.a)(Object(o.connect)(y)(function(e){var t=e.value,a=(e.dispatch,e.id),r=(e.ticker,n(e,["value","dispatch","id","ticker"]));return t?s.a.createElement(r.as,r,s.a.createElement("div",{className:"date text-muted"},s.a.createElement(m.a,{id:a,as:"span"})," |"," ",s.a.createElement(v.a,{id:a})),s.a.createElement(f.a,{id:a,as:"div",className:"caption"}),s.a.createElement(d.a,{id:a,as:"div",className:"text"}),s.a.createElement("div",{className:"source"},__("source"),": ",s.a.createElement(b.a,{id:a,as:"span"}))):null})),w=a(2181),j=a(2182),E=a(414),N=a(2),k=a.n(N),g=a(280),C=a(421),P=a(0),x=a.n(P),T=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),F=function(e,t){var a=t.ticker;return{news:Object(h.e)(e,a),count:Object(h.f)(e,a),selectedNewsId:Object(h.n)(e,a),filter:Object(h.g)(e,a),status:Object(h.k)(e,a)}},A=function(e){function t(){return r(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),T(t,[{key:"getChildContext",value:function(){return{ticker:this.props.ticker}}},{key:"onClick",value:function(e){var t=this.props,a=t.dispatch,n=t.ticker,r=this._scrollbarContainer.scrollbar;n===g.a&&k.a.navigate("news/"+e),a(Object(E.selectNews)(e,n)),r.scrollTop=0}},{key:"render",value:function(){var e=this,t=this.props,a=t.selectedNewsId,n=t.filter,r=t.isShowFilter;return s.a.createElement("div",{className:"pane pane__fluid"},s.a.createElement("div",{className:"pane pane__column pane__fluid page"},s.a.createElement("div",{className:"pane pane__yfluid news"},s.a.createElement("div",{className:"pane pane__row pane__fluid news__page-container"},s.a.createElement("div",{className:"pane pane__fluid pane__scroll"},s.a.createElement("div",{className:"pane__scroll-content"},s.a.createElement(p.a,null,r&&s.a.createElement(j.a,null),s.a.createElement("div",{className:"list list--column"},x.a.map(n,function(t){return s.a.createElement(w.a,{as:"div",id:t,key:t,className:"list__item flex flex-column",notActiveClassName:"bg__platform-2 color__platform-3 bg__platform-1-hover",activeClassName:"active bg__platform-1",onClick:function(a){return e.onClick(t)}},s.a.createElement("div",{className:"date text-muted small-px"},s.a.createElement(m.a,{id:t})," | ",s.a.createElement(v.a,{id:t})," ",s.a.createElement(C.a,{as:"span"})),s.a.createElement(f.a,{id:t,as:"div",className:"color__brand-primary medium-px"}))})))))),s.a.createElement("div",{className:"pane pane__row pane__fluid"},s.a.createElement("div",{className:"pane pane__fluid pane__scroll"},s.a.createElement("div",{className:"pane__scroll-content"},s.a.createElement(p.a,{ref:function(t){e._scrollbarContainer=t}},s.a.createElement("div",{className:"news__page-content"},a&&s.a.createElement(O,{id:a,as:"div",className:"content"})))))))))}}]),t}(s.a.PureComponent);A.defaultProps={isShowFilter:!0},A.childContextTypes={ticker:s.a.PropTypes.string};t.default=Object(o.connect)(F)(A)}});