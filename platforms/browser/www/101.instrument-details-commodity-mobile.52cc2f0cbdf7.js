webpackJsonp([101],{

/***/ 2140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_instruments_components_InstrumentDetailsImage__ = __webpack_require__(2105);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_instruments_components_Name__ = __webpack_require__(2063);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_modules_instruments_components_Description__ = __webpack_require__(2080);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_modules_instruments_components_Change__ = __webpack_require__(2106);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_modules_instruments_components_PercentChange__ = __webpack_require__(2067);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_modules_instruments_components_Availability__ = __webpack_require__(2107);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_modules_instruments_components_Ask__ = __webpack_require__(2066);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_modules_instruments_components_InstrumentActionsWrapper__ = __webpack_require__(2065);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_modules_instruments_components_FavoriteInstrumentState__ = __webpack_require__(2068);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_modules_price_alerts_components__ = __webpack_require__(2101);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__InstrumentLastQuoteTime__ = __webpack_require__(2110);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_autobind__ = __webpack_require__(37);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_autobind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_autobind__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__InstrumentDetailsButtonSell__ = __webpack_require__(2109);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__InstrumentDetailsButtonBuy__ = __webpack_require__(2108);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar InstrumentDetailsHeaderMobile = function (_InstrumentActionsWra) {\n    _inherits(InstrumentDetailsHeaderMobile, _InstrumentActionsWra);\n\n    function InstrumentDetailsHeaderMobile(props) {\n        _classCallCheck(this, InstrumentDetailsHeaderMobile);\n\n        var _this = _possibleConstructorReturn(this, (InstrumentDetailsHeaderMobile.__proto__ || Object.getPrototypeOf(InstrumentDetailsHeaderMobile)).call(this, props));\n\n        __WEBPACK_IMPORTED_MODULE_12_react_autobind___default()(_this);\n        return _this;\n    }\n\n    _createClass(InstrumentDetailsHeaderMobile, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var symbol = this.props.symbol;\n\n\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                { className: 'instrument-details__header pane pane__xfluid pane__column' },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'div',\n                    { className: 'pane pane__row' },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { className: 'pane' },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_modules_instruments_components_InstrumentDetailsImage__[\"a\" /* default */], { symbol: symbol }),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'div',\n                            { className: 'pane pane__column' },\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                'div',\n                                { className: 'instrument-details__title' },\n                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_modules_instruments_components_Name__[\"a\" /* default */], { as: 'span', symbol: symbol })\n                            ),\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                'div',\n                                { className: 'instrument-details__description' },\n                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_modules_instruments_components_Description__[\"a\" /* default */], { as: 'span', symbol: symbol })\n                            )\n                        )\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { className: 'instrument-details__actions pane pane__row' },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'div',\n                            { className: 'instrument-details__actions__small' },\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_modules_instruments_components_FavoriteInstrumentState__[\"a\" /* default */], {\n                                onClick: function onClick(event) {\n                                    return _this2.toggleFavorite(event, symbol);\n                                },\n                                symbol: symbol,\n                                as: 'div',\n                                className: 'large-s-px',\n                                yes: 'icon-star-filled',\n                                no: 'icon-star'\n                            }),\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                __WEBPACK_IMPORTED_MODULE_10_modules_price_alerts_components__[\"a\" /* IsPriceAlertsEnabled */],\n                                { as: null },\n                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_modules_price_alerts_components__[\"b\" /* PriceAlertInstrumentState */], {\n                                    onClick: this.openPriceAlerts,\n                                    symbol: symbol,\n                                    as: 'div',\n                                    className: 'medium-b-px',\n                                    yes: 'icon-bell-filled',\n                                    no: 'icon-bell'\n                                })\n                            )\n                        )\n                    )\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'div',\n                    { className: 'pane pane__row pane--bottom' },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_modules_instruments_components_Ask__[\"a\" /* default */], { as: 'span', className: 'instrument-details__price', symbol: symbol }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'span',\n                        { className: 'instrument-details__change' },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_modules_instruments_components_Change__[\"a\" /* default */], { symbol: symbol, showDir: true }),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_modules_instruments_components_PercentChange__[\"a\" /* default */], { symbol: symbol, showDir: true })\n                    )\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'div',\n                    { className: 'pane pane__row' },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__InstrumentLastQuoteTime__[\"a\" /* default */], {\n                        className: 'instrument-details__time',\n                        pre: __('instrument_info.as_of') + '\\xA0',\n                        post: '\\xA0\\xA0',\n                        symbol: symbol,\n                        format: 'MMMM DD YYYY HH:mm'\n                    })\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'div',\n                    { className: 'pane pane__row' },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_modules_instruments_components_Availability__[\"a\" /* default */], { symbol: symbol })\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'div',\n                    { className: 'instrument-details__actions pane__xfluid' },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__InstrumentDetailsButtonSell__[\"a\" /* default */], { symbol: symbol, onClick: function onClick(event) {\n                            return _this2.sell(event, symbol);\n                        } }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__InstrumentDetailsButtonBuy__[\"a\" /* default */], { symbol: symbol, onClick: function onClick(event) {\n                            return _this2.buy(event, symbol);\n                        } })\n                )\n            );\n        }\n    }]);\n\n    return InstrumentDetailsHeaderMobile;\n}(__WEBPACK_IMPORTED_MODULE_8_modules_instruments_components_InstrumentActionsWrapper__[\"a\" /* default */]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (InstrumentDetailsHeaderMobile);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/instrument-details/components/InstrumentDetailsHeaderMobile.jsx\n// module id = 2140\n// module chunks = 65 96 97 98 99 100 101 102\n\n//# sourceURL=webpack:///./src/js/modules/instrument-details/components/InstrumentDetailsHeaderMobile.jsx?");

/***/ }),

/***/ 2927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Portal__ = __webpack_require__(854);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_modules_instruments_components_InstrumentActionsWrapper__ = __webpack_require__(2065);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_modules_instruments_components_Name__ = __webpack_require__(2063);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_modules_instruments_components_Description__ = __webpack_require__(2080);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__InstrumentDetailsHeaderMobile__ = __webpack_require__(2140);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__InstrumentDetailsCommodityTabs__ = __webpack_require__(2741);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_store_ui_selectors__ = __webpack_require__(168);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_classset__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_classset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_classset__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar MPAP_POPUP_NAME = 'instrument-details-commodity';\n\nfunction mapStateToProps(state) {\n    return {\n        symbol: Object(__WEBPACK_IMPORTED_MODULE_8_store_ui_selectors__[\"getInstrumentDetailsSymbol\"])(state)\n    };\n}\n\nvar InstrumentDetailsCommodityPortalMobile = function (_InstrumentActionsWra) {\n    _inherits(InstrumentDetailsCommodityPortalMobile, _InstrumentActionsWra);\n\n    function InstrumentDetailsCommodityPortalMobile() {\n        _classCallCheck(this, InstrumentDetailsCommodityPortalMobile);\n\n        return _possibleConstructorReturn(this, (InstrumentDetailsCommodityPortalMobile.__proto__ || Object.getPrototypeOf(InstrumentDetailsCommodityPortalMobile)).apply(this, arguments));\n    }\n\n    _createClass(InstrumentDetailsCommodityPortalMobile, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var symbol = this.props.symbol;\n\n\n            var classes = __WEBPACK_IMPORTED_MODULE_9_react_classset___default()({\n                'x-popup x-popup-stretch-xs x-popup-no-padding-xs x-popup-absolute': true,\n                'responsive-popup responsive-popup-absolute': true,\n                'responsive-popup-translucent-1 x-popup-translucent-1': true,\n                'show-popup responsive-popup-opened': true\n            });\n\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_1_components_Portal__[\"default\"],\n                { className: classes, name: MPAP_POPUP_NAME },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_2_react_redux__[\"Provider\"],\n                    { store: store },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { className: 'x-popup-box responsive-container' },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'div',\n                            { className: 'x-popup-panel responsive-panel' },\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                'div',\n                                { className: 'x-popup-holder' },\n                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                    'div',\n                                    { className: 'x-popup-content' },\n                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                        'div',\n                                        { className: 'responsive-popup-content' },\n                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                            'div',\n                                            { className: 'x-popup-header responsive-header responsive-header-bg-style-grey responsive-header-style-wizard' },\n                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                                'div',\n                                                { className: 'previous btn', onClick: function onClick(e) {\n                                                        return _this2.closeInstrumentDetails(e, symbol);\n                                                    } },\n                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'arrow' }),\n                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                                    'div',\n                                                    { className: 'caption' },\n                                                    __('actions.back')\n                                                )\n                                            ),\n                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                                'div',\n                                                { className: 'caption' },\n                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                                    'div',\n                                                    { className: 'instrument-details__title' },\n                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_modules_instruments_components_Name__[\"a\" /* default */], { as: 'span', symbol: symbol })\n                                                ),\n                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                                    'div',\n                                                    { className: 'smaller-px' },\n                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_modules_instruments_components_Description__[\"a\" /* default */], { as: 'span', symbol: symbol })\n                                                )\n                                            )\n                                        ),\n                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                            'div',\n                                            { className: 'responsive-popup-body pane__scroll' },\n                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                                'div',\n                                                { className: 'instrument-details instrument-details--mobile pane__xfluid pane__yfluid pane__scroll-content' },\n                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                                    'div',\n                                                    { className: 'instrument-details__container' },\n                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__InstrumentDetailsHeaderMobile__[\"a\" /* default */], { symbol: symbol }),\n                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__InstrumentDetailsCommodityTabs__[\"a\" /* default */], { symbol: symbol })\n                                                )\n                                            )\n                                        )\n                                    )\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return InstrumentDetailsCommodityPortalMobile;\n}(__WEBPACK_IMPORTED_MODULE_3_modules_instruments_components_InstrumentActionsWrapper__[\"a\" /* default */]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__[\"connect\"])(mapStateToProps)(InstrumentDetailsCommodityPortalMobile));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/instrument-details/components/instrumentDetailsCommodity/InstrumentDetailsCommodityPortalMobile.jsx\n// module id = 2927\n// module chunks = 101\n\n//# sourceURL=webpack:///./src/js/modules/instrument-details/components/instrumentDetailsCommodity/InstrumentDetailsCommodityPortalMobile.jsx?");

/***/ })

});