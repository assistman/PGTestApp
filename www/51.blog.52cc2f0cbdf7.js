webpackJsonp([51],{

/***/ 2016:
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var BlogPopupView = __webpack_require__(2866);\n    var BlogPopupMobileView = __webpack_require__(2867);\n    var device = __webpack_require__(18);\n\n    function initBlogPopupView(options) {\n        return device.mobile() ? new BlogPopupMobileView(options) : new BlogPopupView(options);\n    }\n    module.exports = {\n        initBlogPopupView: initBlogPopupView\n    };\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/blog/index.js\n// module id = 2016\n// module chunks = 51\n\n//# sourceURL=webpack:///./src/js/modules/blog/index.js?");

/***/ }),

/***/ 2685:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(26)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \".blog-wrapper{position:absolute;width:100%;height:100%;background-color:#fff;z-index:7000!important;top:0;right:0;bottom:0;left:0}.blog-wrapper .blog{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:auto;min-height:100vh;width:100%;z-index:1}.blog-wrapper .blog .blog-top{width:100%;height:25px;position:relative;background:#f6f9fc!important}.blog-wrapper .blog .blog-top .fn-close-popup{position:absolute;right:0;top:0;cursor:pointer}.blog-wrapper .blog .blog-top .fn-close-popup i{border:1px solid transparent}.blog-wrapper .blog iframe{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.blog-wrapper .blog .loading-content{width:100%;position:absolute}.blog-wrapper.blog-wrapper-mobile{position:relative}\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/css-loader?minimize!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/js/modules/blog/styles/blog.scss\n// module id = 2685\n// module chunks = 51\n\n//# sourceURL=webpack:///./src/js/modules/blog/styles/blog.scss?./node_modules/css-loader?minimize!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ 2767:
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(2685);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(30)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(true) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(2685, function() {\n\t\t\tvar newContent = __webpack_require__(2685);\n\t\t\tif(typeof newContent === 'string') newContent = [[module.i, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/blog/styles/blog.scss\n// module id = 2767\n// module chunks = 51\n\n//# sourceURL=webpack:///./src/js/modules/blog/styles/blog.scss?");

/***/ }),

/***/ 2768:
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"blog\\\">\\n    <div class=\\\"hidden-xs blog-top\\\">\\n        <div class=\\\"header-actions fn-close-popup\\\">\\n            <i class=\\\"icon-close-blue\\\"></i>\\n        </div>\\n    </div>\\n    <iframe  src=\\\"<%=url%>\\\" frameborder=\\\"0\\\" allowfullscreen></iframe>\\n</div>\\n\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/blog/templates/blog.html\n// module id = 2768\n// module chunks = 51\n\n//# sourceURL=webpack:///./src/js/modules/blog/templates/blog.html?");

/***/ }),

/***/ 2866:
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_, $) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var _ = __webpack_require__(0);\n    var core = __webpack_require__(5);\n    var View = __webpack_require__(15);\n    var LoadingView = __webpack_require__(35);\n    var settings = __webpack_require__(12);\n\n    __webpack_require__(2767);\n\n    var BlogPopupView = View.extend({\n\n        template: _.template(__webpack_require__(2768)),\n        events: {\n            'click .blog-top .fn-close-popup': 'close'\n        },\n        tagName: 'div',\n        className: 'blog-wrapper popup-item',\n\n        initialize: function initialize(options) {\n            var _this = this;\n\n            View.prototype.initialize.apply(this, arguments);\n            this.parent = options.parent;\n            this.listenTo(core, 'ui:header-itemclick', this.close);\n            this.listenTo(core, 'ribbon:update', this.updateContentHeight);\n            $(window).on('resize.blog', function () {\n                return _this.updateContentHeight();\n            });\n            this.render();\n        },\n\n        close: function close(nav) {\n            core.trigger('ui:chart:update-size');\n            $(window).off('resize.blog');\n\n            if (nav) {\n                core.navigate('/');\n            }\n\n            this.destroy();\n        },\n\n        render: function render() {\n            View.prototype.render.call(this);\n\n            this.$el.html(this.template({ url: settings.getBlogUrl() }));\n            __eventos('learn:blog:impression', {});\n            this.updateContentHeight();\n\n            return this;\n        },\n\n        updateContentHeight: function updateContentHeight() {\n            var heightSpan = 210;\n\n            if ($('.ribbon-notification').length > 0 && $('.ribbon-notification')[0].clientHeight) {\n                heightSpan += $('.ribbon-notification')[0].clientHeight;\n            }\n\n            var contentHeight = document.documentElement.clientHeight - heightSpan;\n\n            this.$el.find('.content-block').css('height', contentHeight + 'px');\n        }\n\n    });\n\n    module.exports = BlogPopupView;\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(7)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/blog/blog.popup.view.js\n// module id = 2866\n// module chunks = 51\n\n//# sourceURL=webpack:///./src/js/modules/blog/blog.popup.view.js?");

/***/ }),

/***/ 2867:
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var _ = __webpack_require__(0);\n    var ResponsivePopupView = __webpack_require__(29);\n    var settings = __webpack_require__(12);\n    var template = _.template(__webpack_require__(2768));\n\n    __webpack_require__(2767);\n\n    var BlogPopupMobileView = ResponsivePopupView.extend({\n\n        initialize: function initialize(options) {\n            ResponsivePopupView.prototype.initialize.apply(this, arguments);\n            this.render();\n        },\n\n        getOptions: function getOptions(options) {\n            return _.extend({}, _.result(ResponsivePopupView.prototype, 'getOptions'), {\n                isHeaderShowed: true,\n                caption: __('tab.blog'),\n                previousCaption: __('actions.back'),\n                headerStyle: 'wizard',\n                bodyStyle: 'blog-wrapper blog-wrapper-mobile',\n                headerCaptionStyle: 'blog-mobile-header'\n            }, options);\n        },\n\n        close: function close() {\n            ResponsivePopupView.prototype.close.call(this);\n            this.destroy();\n        },\n\n        render: function render() {\n            ResponsivePopupView.prototype.render.call(this);\n            this.setContent(template({ url: settings.getBlogUrl() }));\n            __eventos('learn:blog:impression', {});\n            return this;\n        }\n\n    });\n\n    module.exports = BlogPopupMobileView;\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/blog/blog.popup.mobile.view.js\n// module id = 2867\n// module chunks = 51\n\n//# sourceURL=webpack:///./src/js/modules/blog/blog.popup.mobile.view.js?");

/***/ })

});