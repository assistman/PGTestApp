webpackJsonp([43,84],{1924:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),i=n(298),s=n(889),l=n(1),p=n.n(l),u=n(280),f=n(792),v=function(e,t){var n=t.ticker,r=void 0===n?u.a:n;return{selectedNewsId:Object(f.n)(e,r)}},d=Object(o.connect)(v)(function(e){var t=e.children,n=e.caption,r=e.captionBack,a=e.onBackClick;e.selectedNewsId;return p.a.createElement("div",{tabIndex:"-1",className:"x-popup responsive-popup x-popup-stretch-xs x-popup-no-padding-xs responsive-popup-fixed x-popup-fixed responsive-popup-translucent-1 x-popup-translucent-1 show-popup account-settings-popup responsive-popup-opened",id:"view4054"},p.a.createElement("div",{className:"hidden-sm hidden-md hidden-lg slide-box-overlay fn-close slide-box-overlay-translucent-1"}),p.a.createElement("div",{className:"x-popup-box responsive-container"},p.a.createElement("div",{className:"x-popup-panel responsive-panel"},p.a.createElement("div",{className:"x-popup-holder"},p.a.createElement("div",{className:"x-popup-content"},p.a.createElement("div",{className:"responsive-popup-content"},p.a.createElement("div",{className:"hidden-sm hidden-md hidden-lg responsive-header "},p.a.createElement("div",{className:"previous btn fn-previous",onClick:a},p.a.createElement("div",{className:"arrow"}),p.a.createElement("div",{className:"caption"},r)),p.a.createElement("div",{className:"caption"},n),p.a.createElement("div",{className:"navigation-box"})),p.a.createElement("div",{className:"responsive-popup-body",style:{height:"100%"}},p.a.createElement("div",{className:"pane pane__fluid pane__scroll"},p.a.createElement("div",{className:"pane__scroll-content"},t)))))))))}),m=n(414),b=n(2),y=n.n(b),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),O=function(e,t){var n=t.ticker,r=void 0===n?u.a:n;return{selectedNewsId:Object(f.n)(e,r)}},_=function(e){function t(){var e,n,c,o;r(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return n=c=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),c.close=function(){c.props.onClose()},c.cleanSelectedNews=function(){c.props.dispatch(Object(m.selectNews)(null)),y.a.navigate("#news",{trigger:!1})},o=n,a(c,o)}return c(t,e),h(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(m.incrementRefCount)())}},{key:"componentWillUnmount",value:function(){this.props.dispatch(Object(m.removeTimerUpdate)())}},{key:"render",value:function(){var e=this.props.selectedNewsId;return e?p.a.createElement(d,{caption:__("service.news.page.title"),captionBack:__("actions.back"),onBackClick:this.cleanSelectedNews},p.a.createElement(i.default,{defaultNewsId:e,ticker:u.a})):p.a.createElement(d,{caption:__("service.News.page.title"),captionBack:__("actions.back"),onBackClick:this.close},p.a.createElement(s.default,{isShowFilter:!1,ticker:u.a,empty:__("news.page.empty")}))}}]),t}(l.PureComponent);t.default=Object(o.connect)(O)(_)},2039:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){var t,n;return n=t=function(t){function n(){return r(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,t),p(n,[{key:"render",value:function(){var t={ticker:this.context.ticker};return s.a.createElement(e,l({},this.props,t))}}]),n}(s.a.Component),t.contextTypes={ticker:s.a.PropTypes.string},n}var i=n(1),s=n.n(i),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.a=o},2125:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n(1),c=n.n(a),o=n(8),i=n(2039),s=n(792),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(e,t){var n=t.id,r=t.ticker;return{value:Object(s.o)(e,r,n).title||null}};t.a=Object(i.a)(Object(o.connect)(p)(function(e){var t=e.value,n=(e.dispatch,e.as),a=(e.ticker,r(e,["value","dispatch","as","ticker"]));return c.a.createElement(n||"span",l({},a),t)}))},2126:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n(1),c=n.n(a),o=n(8),i=n(68),s=n.n(i),l=n(2039),p=n(792),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(e,t){var n=t.id,r=t.ticker,a=Object(p.o)(e,r,n);return{value:a?a.publicationTime:null}};t.a=Object(l.a)(Object(o.connect)(f)(function(e){var t=e.value,n=(e.dispatch,e.as),a=(e.ticker,r(e,["value","dispatch","as","ticker"])),o=s.a.servicesDate(t);return c.a.createElement(n||"span",u({},a),t?o:t)}))},2127:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n(1),c=n.n(a),o=n(8),i=n(2039),s=n(0),l=n.n(s),p=n(792),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f={dow_jones:"icon-dow-jones"},v=function(e,t){var n=t.id,r=t.ticker,a=Object(p.o)(e,r,n),c=a&&a.wire&&String(a.wire).toLowerCase().replace(" ","_");return{iconClassName:l.a.has(f,c)?f[c]:""}};t.a=Object(i.a)(Object(o.connect)(v)(function(e){var t=e.iconClassName,n=(e.dispatch,e.as),a=(e.ticker,r(e,["iconClassName","dispatch","as","ticker"]));return c.a.createElement(n||"span",u({},a),c.a.createElement("i",{className:t}))}))},2179:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n(1),c=n.n(a),o=n(8),i=n(107),s=n.n(i),l=n(2039),p=n(792),u=function(e,t){var n=t.id,r=t.ticker;return{value:Object(p.o)(e,r,n).text}};t.a=Object(l.a)(Object(o.connect)(u)(function(e){var t=e.value,n=(e.dispatch,e.as,e.ticker,r(e,["value","dispatch","as","ticker"]));return c.a.createElement("span",n,s()(t))}))},2180:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n(1),c=n.n(a),o=n(8),i=n(2039),s=n(792),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(e,t){var n=t.id,r=t.ticker;return{value:Object(s.o)(e,r,n).source}};t.a=Object(i.a)(Object(o.connect)(p)(function(e){var t=e.value,n=(e.dispatch,e.as),a=(e.ticker,r(e,["value","dispatch","as","ticker"]));return c.a.createElement(n||"span",l({href:t},a),t)}))},2181:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var c=n(11),o=n.n(c),i=n(1),s=n.n(i),l=n(8),p=n(2039),u=n(826),f=n(792),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(e,t){var n=t.id,r=t.ticker,a=t.activeClassName,c=t.notActiveClassName;return{active:n===Object(f.n)(e,r),newItemsId:Object(f.j)(e,r),activeClassName:a||"active",notActiveClassName:c||""}};t.a=Object(p.a)(Object(l.connect)(d)(function(e){var t,n=e.active,c=(e.dispatch,e.children),i=e.activeClassName,l=e.notActiveClassName,p=e.className,f=e.as,d=(e.ticker,a(e,["active","dispatch","children","activeClassName","notActiveClassName","className","as","ticker"]));return d.className=o()((t={},r(t,p,!!p),r(t,i,n),r(t,l,!n),t)),s.a.createElement(u.a,v({as:f,id:e.id,key:e.id},d),c)}))},2182:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(414),i=n(0),s=(n.n(i),n(1)),l=n.n(s),p=n(8),u=n(131),f=n(2039),v=n(792),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e,t){var n=t.ticker,r=Object(v.a)(e,n);return{availableFilters:r,selectedDropdownFilter:Object(v.m)(e,n),isAvailableEnabledFilters:0!==r.length,countAvailableFilters:r.length}},b=function(e){function t(){var e,n,c,i;r(this,t);for(var s=arguments.length,l=Array(s),p=0;p<s;p++)l[p]=arguments[p];return n=c=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),c.onChange=function(e){var t=c.props,n=t.dispatch,r=t.ticker;n(Object(o.selectDropdownFilter)(e,r))},i=n,a(c,i)}return c(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.availableFilters,n=e.selectedDropdownFilter;e.isAvailableEnabledFilters,e.countAvailableFilters;return i.isEmpty(t)?null:l.a.createElement("div",{className:"pane filter-block bg__platform-2 color__platform-3 list__item"},l.a.createElement("div",{className:"filter__label"},__("news.page.select.news.feed"),":"),l.a.createElement("div",{className:"filter__select"},l.a.createElement(u.a,{className:"pane pane__fluid services__dropdown",childClassName:"pane pane__fluid",as:"div",ref:"dropdown",selected:n,options:t,onChange:this.onChange})))}}]),t}(s.PureComponent);t.a=Object(f.a)(Object(p.connect)(m)(b))},2246:function(e,t,n){"use strict";var r=n(1),a=n.n(r);t.a=function(e){var t=e.text;return a.a.createElement("div",{className:"pane pane__column news__empty"},a.a.createElement("div",{className:"pane flex-valign-center flex-align-center "},a.a.createElement("div",{className:"icon-empty-news"})),a.a.createElement("div",{className:"text"},t))}},298:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),i=n(2125),s=n(2126),l=n(2127),p=n(2181),u=n(2182),f=n(414),v=n(2179),d=n(2180),m=n(1),b=n.n(m),y=n(2),h=n.n(y),O=n(280),_=n(421),w=n(0),j=n.n(w),E=n(792),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),N=function(e,t){var n=t.ticker,r=t.defaultNewsId;return{news:Object(E.e)(e,n),selectedNewsId:r,filter:Object(E.g)(e,n),status:Object(E.k)(e,n)}},g=function(e){function t(){var e,n,c,o;r(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return n=c=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),c.click=function(e){var t=c.props,n=t.dispatch,r=t.ticker,a=t.onSelect;n(Object(f.selectNews)(e,r)),c._container.scrollIntoView(!0),j.a.isFunction(a)&&a(e),r===O.a&&h.a.navigate("#news/"+e,{trigger:!1})},o=n,a(c,o)}return c(t,e),k(t,[{key:"getChildContext",value:function(){return{ticker:this.props.ticker}}},{key:"render",value:function(){var e=this,t=this.props,n=t.selectedNewsId,r=t.filter,a=t.isShowFilter,c=t.innerView,o=n,f=!o;return b.a.createElement("div",{className:"pane pane__yfluid",ref:function(t){e._container=t}},o&&b.a.createElement("div",{className:"news__mobile full pane__fluid"},c&&b.a.createElement("div",{className:"news__mobile__back pane flex-valign-center btn",onClick:function(t){return e.click(null)}},b.a.createElement("span",{className:"icon icon-prev-arrow-grey"}),"  ",b.a.createElement("span",null,__("actions.back"))),b.a.createElement("div",{className:"date smaller-px"},b.a.createElement(s.a,{id:n})," |"," ",b.a.createElement(l.a,{id:n})),b.a.createElement(i.a,{id:n,as:"div",className:"caption big-b-px"}),b.a.createElement(v.a,{id:n,as:"div",className:"text medium-px"}),b.a.createElement("div",{className:"source"},__("source"),":"," ",b.a.createElement(d.a,{id:n,as:"span"}))),f&&b.a.createElement("div",{className:"news__mobile list list--column"},a&&b.a.createElement(u.a,null),j.a.map(r,function(t){return b.a.createElement(p.a,{as:"div",id:t,key:t,className:"list__item",notActiveClassName:"bg__platform-2 color__platform-3 bg__platform-1-hover",activeClassName:"active bg__platform-1",onClick:function(n){return e.click(t)}},b.a.createElement("div",{className:"pane pane__fluid pane__row"},b.a.createElement("div",{className:"pane pane__fluid flex flex-column"},b.a.createElement("div",{className:"date smaller-px"},b.a.createElement(s.a,{id:t})," | "," ",b.a.createElement(l.a,{as:"span",id:t}),b.a.createElement(_.a,null)),b.a.createElement(i.a,{id:t,as:"div",className:"color__brand-primary medium-px"})),b.a.createElement("div",{className:"pane flex flex-valign-center arrow"},b.a.createElement("div",{className:"right icon-marketsX-popup-arrow-right"}),b.a.createElement("div",{className:"left icon-marketsX-popup-arrow-left"}))))})))}}]),t}(b.a.PureComponent);g.defaultProps={isShowFilter:!0,defaultNewsId:void 0,onSelect:void 0,innerView:!1},g.childContextTypes={ticker:b.a.PropTypes.string},t.default=Object(o.connect)(N)(g)},889:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{resetNewsByTicker:function(t){e(Object(v.resetNewsByTicker)(t))},loadNews:function(t){e(Object(v.loadNews)(t,!1,t===h.a))}}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),l=n.n(s),p=n(1),u=n.n(p),f=n(8),v=n(414),d=n(298),m=n(2246),b=n(288),y=n(10),h=n(280),O=n(792),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),j=function(e,t){var n=t.ticker;return{status:Object(O.k)(e,n),isEmpty:Object(O.c)(e,n)}},E=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),w(t,[{key:"componentDidMount",value:function(){this.props.loadNews(this.props.ticker)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.ticker,n=e.ticker;t!==n&&(this.props.resetNewsByTicker(t),this.props.loadNews(n))}},{key:"render",value:function(){var e=this.props,t=e.status,n=e.isEmpty,a=e.empty,c=e.ticker,o=r(e,["status","isEmpty","empty","ticker"]),i=l.a.isEmpty(c),s=t===y.SUCCESS;return i||!s||n?u.a.createElement("div",{className:"pane pane__fluid flex-valign-center flex-align-center"},i&&u.a.createElement(m.a,{text:a}),!i&&!s&&u.a.createElement(b.a,null),!i&&s&&n&&u.a.createElement(m.a,{text:a})):u.a.createElement(d.default,_({},o,{ticker:c}))}}]),t}(p.Component);E.defaultProps={ticker:h.a,isShowFilter:!1},t.default=Object(f.connect)(j,i)(E)}});