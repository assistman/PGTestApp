webpackJsonp([12],{

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(1212);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(131)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(true) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(1212, function() {\n\t\t\tvar newContent = __webpack_require__(1212);\n\t\t\tif(typeof newContent === 'string') newContent = [[module.i, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/css/themes/forex4group/light/main.scss\n// module id = 1182\n// module chunks = 12\n\n//# sourceURL=webpack:///./src/css/themes/forex4group/light/main.scss?");

/***/ }),

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(89)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \".header-box .header-panel .logotype-box .logotype{background-image:url(\" + __webpack_require__(429) + \")}.ni-brand-icon{background:url(\" + __webpack_require__(430) + \") no-repeat}\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/css-loader?minimize!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/css/themes/forex4group/light/main.scss\n// module id = 1212\n// module chunks = 12\n\n//# sourceURL=webpack:///./src/css/themes/forex4group/light/main.scss?./node_modules/css-loader?minimize!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js");

/***/ })

});