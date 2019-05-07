webpackJsonp([9],{

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n\n    module.exports = function (H) {\n        H || (H = __webpack_require__(61));\n\n        var addEvent = H.addEvent,\n            removeEvent = H.removeEvent,\n            createElement = H.createElement,\n            css = H.css,\n            defined = H.defined,\n            doc = H.doc,\n            each = H.each,\n            extend = H.extend,\n            isMS = H.isMS,\n            symbolSizes = H.symbolSizes,\n            merge = H.merge;\n\n        /**\n         * Create a button with preset states.\n         * @param {string} text - The text or HTML to draw.\n         * @param {number} x - The x position of the button's left side.\n         * @param {number} y - The y position of the button's top side.\n         * @param {string} iconSrc - The icon source\n         * @param {number} iconWidth - The icon width\n         * @param {number} iconHeight - The icon height\n         * @param {Function} callback - The function to execute on button click or\n         *    touch.\n         * @param {SVGAttributes} [normalState] - SVG attributes for the normal\n         *    state.\n         * @param {SVGAttributes} [hoverState] - SVG attributes for the hover state.\n         * @param {SVGAttributes} [pressedState] - SVG attributes for the pressed\n         *    state.\n         * @param {SVGAttributes} [disabledState] - SVG attributes for the disabled\n         *    state.\n         * @param {Symbol} [shape=rect] - The shape type.\n         * @returns {SVGRenderer} The button element.\n         */\n        H.SVGRenderer.prototype.buttonIcon = function (text, x, y, iconSrc, iconWidth, iconHeight, callback, normalState, hoverState, pressedState, disabledState, shape) {\n            var label = this.labelIcon(text, x, y, iconSrc, iconWidth, iconHeight, shape, null, null, null, null, 'button'),\n                curState = 0;\n\n            // Default, non-stylable attributes\n            label.attr(merge({\n                'padding': 8,\n                'r': 2\n            }, normalState));\n\n            // Presentational\n            var normalStyle = void 0,\n                hoverStyle = void 0,\n                pressedStyle = void 0,\n                disabledStyle = void 0;\n\n            // Presentational\n            var normalIcon = void 0,\n                hoverIcon = void 0,\n                pressedIcon = void 0,\n                disabledIcon = void 0;\n\n            // Normal state - prepare the attributes\n            normalState = merge({\n                fill: '#f7f7f7',\n                stroke: '#cccccc',\n                'stroke-width': 1,\n                style: {\n                    color: '#333333',\n                    cursor: 'pointer',\n                    fontWeight: 'normal'\n                }\n            }, normalState);\n            normalStyle = normalState.style;\n            delete normalState.style;\n            normalIcon = normalState.icon;\n            delete normalState.icon;\n\n            // Hover state\n            hoverState = merge(normalState, {\n                fill: '#e6e6e6'\n            }, hoverState);\n            hoverStyle = hoverState.style;\n            delete hoverState.style;\n            hoverIcon = hoverState.icon;\n            delete hoverState.icon;\n\n            // Pressed state\n            pressedState = merge(normalState, {\n                fill: '#e6ebf5',\n                style: {\n                    color: '#000000',\n                    fontWeight: 'bold'\n                }\n            }, pressedState);\n            pressedStyle = pressedState.style;\n            delete pressedState.style;\n            pressedIcon = pressedState.icon;\n            delete pressedState.icon;\n\n            // Disabled state\n            disabledState = merge(normalState, {\n                fill: '#e0e0e0',\n                style: {\n                    color: '#cccccc',\n                    cursor: 'not-allowed'\n                }\n            }, disabledState);\n            disabledStyle = disabledState.style;\n            delete disabledState.style;\n            disabledIcon = disabledState.icon;\n            delete disabledState.icon;\n\n            // Add the events. IE9 and IE10 need mouseover and mouseout to funciton (#667).\n            addEvent(label.element, isMS ? 'mouseover' : 'mouseenter', function () {\n                if (curState !== 3) {\n                    label.setState(1);\n                }\n            });\n            addEvent(label.element, isMS ? 'mouseout' : 'mouseleave', function () {\n                if (curState !== 3) {\n                    label.setState(curState);\n                }\n            });\n\n            label.setState = function (state) {\n                // Hover state is temporary, don't record it\n                if (state !== 1) {\n                    label.state = curState = state;\n                }\n                // Update visuals\n                label.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass('highcharts-button-' + ['normal', 'hover', 'pressed', 'disabled'][state || 0]);\n\n                label.attr([normalState, hoverState, pressedState, disabledState][state || 0]).css([normalStyle, hoverStyle, pressedStyle, disabledStyle][state || 0]);\n\n                label.bImage.attr({ href: [normalIcon, hoverIcon, pressedIcon, disabledIcon][state || 0] || iconSrc });\n            };\n\n            label.enable = function () {\n                label.setState(0);\n            };\n\n            label.press = function () {\n                label.setState(2);\n            };\n\n            label.disable = function () {\n                label.setState(3);\n            };\n\n            label.updateNormalState = function (attr) {\n                normalState = merge(normalState, attr);\n                if (curState === 0) {\n                    label.attr(attr);\n                }\n            };\n\n            // Presentational attributes\n            label.attr(normalState).css(extend({\n                cursor: 'default'\n            }, normalStyle));\n\n            return label.on('click', function (e) {\n                if (curState !== 3) {\n                    callback.call(label, e);\n                }\n            });\n        };\n\n        /**\n         * Draw a label, which is an extended text element with support for border\n         * and background. Highcharts creates a `g` element with a text and a `path`\n         * or `rect` inside, to make it behave somewhat like a HTML div. Border and\n         * background are set through `stroke`, `stroke-width` and `fill` attributes\n         * using the {@link Highcharts.SVGElement#attr|attr} method. To update the\n         * text after render, run `label.attr({ text: 'New text' })`.\n         *\n         * @param  {string} str\n         *         The initial text string or (subset) HTML to render.\n         * @param  {number} x\n         *         The x position of the label's left side.\n         * @param  {number} y\n         *         The y position of the label's top side or baseline, depending on\n         *         the `baseline` parameter.\n         * @param  {string} iconSrc\n         *         The icon source\n         * @param  {number} iconWidth\n         *         The icon width\n         * @param  {number} iconHeight\n         *         The icon height\n         * @param  {String} shape\n         *         The shape of the label's border/background, if any. Defaults to\n         *         `rect`. Other possible values are `callout` or other shapes\n         *         defined in {@link Highcharts.SVGRenderer#symbols}.\n         * @param  {number} anchorX\n         *         In case the `shape` has a pointer, like a flag, this is the\n         *         coordinates it should be pinned to.\n         * @param  {number} anchorY\n         *         In case the `shape` has a pointer, like a flag, this is the\n         *         coordinates it should be pinned to.\n         * @param  {Boolean} useHTML\n         * @param  {Boolean} baseline\n         *         Whether to position the label relative to the text baseline,\n         *           like {@link Highcharts.SVGRenderer#text|renderer.text}, or to the\n         *           upper border of the rectangle.\n         * @param  {String} className\n         *         Class name for the group.\n         *\n         * @return {Highcharts.SVGElement}\n         *         The generated label.\n         *\n         * @sample highcharts/members/renderer-label-on-chart/\n         *         A label on the chart\n         */\n        H.SVGRenderer.prototype.labelIcon = function (str, x, y, iconSrc, iconWidth, iconHeight, shape, anchorX, anchorY, useHTML, baseline, className) {\n\n            var renderer = this,\n                wrapper = renderer.g(className !== 'button' && 'label'),\n                text = wrapper.text = renderer.text('', 0, 0, useHTML).attr({\n                zIndex: 1\n            }),\n                bRect = void 0,\n                bImage = wrapper.bImage = renderer.image(iconSrc).attr({\n                zIndex: 1\n            }),\n                bBox = void 0,\n                alignFactor = 0,\n                padding = 3,\n                paddingLeft = 0,\n                width = void 0,\n                height = void 0,\n                wrapperX = void 0,\n                wrapperY = void 0,\n                textAlign = void 0,\n                deferredAttr = {},\n                strokeWidth = void 0,\n                baselineOffset = void 0,\n                hasBGImage = /^url\\((.*?)\\)$/.test(shape),\n                needsBox = hasBGImage,\n                getCrispAdjust = void 0,\n                updateBoxSize = void 0,\n                updateImageSize = void 0,\n                updateTextPadding = void 0,\n                boxAttr = void 0;\n\n            if (className) {\n                wrapper.addClass('highcharts-' + className);\n            }\n\n            needsBox = hasBGImage;\n            getCrispAdjust = function getCrispAdjust() {\n                return (strokeWidth || 0) % 2 / 2;\n            };\n\n            /**\n             * This function runs after the label is added to the DOM (when the bounding box is\n             * available), and after the text of the label is updated to detect the new bounding\n             * box and reflect it in the border box.\n             */\n            updateBoxSize = function updateBoxSize() {\n                var style = text.element.style,\n                    crispAdjust = void 0,\n                    attribs = {};\n\n                var textBBox = (width === undefined || height === undefined || textAlign) && defined(text.textStr) && text.getBBox(); //#3295 && 3514 box failure when string equals 0\n                var imageBBox = bImage.getBBox();\n\n                bBox = {\n                    width: (width || textBBox.width || 0) + (iconWidth || imageBBox.width || 0) + (textBBox.width && (iconWidth || imageBBox.width) ? padding : 0),\n                    height: Math.max(height || textBBox.height || 0, height || iconHeight || imageBBox.height || 0),\n                    x: imageBBox.x || textBBox.x,\n                    y: imageBBox.y || textBBox.y\n                };\n\n                wrapper.width = bBox.width + 2 * padding + paddingLeft;\n                wrapper.height = bBox.height + 2 * padding;\n\n                // Update the label-scoped y offset\n                baselineOffset = (renderer.fontMetrics(style && style.fontSize, text).b * 0.75 + wrapper.height) / 2;\n\n                if (needsBox) {\n\n                    // Create the border box if it is not already present\n                    if (!bRect) {\n                        wrapper.bRect = bRect = renderer.symbols[shape] || hasBGImage ? // Symbol definition exists (#5324)\n                        renderer.symbol(shape) : renderer.rect();\n\n                        bRect.addClass((className === 'button' ? '' : 'highcharts-label-box') + ( // Don't use label className for buttons\n                        className ? ' highcharts-' + className + '-box' : ''));\n\n                        bRect.add(wrapper);\n\n                        crispAdjust = getCrispAdjust();\n                        attribs.x = crispAdjust;\n                        attribs.y = (baseline ? -baselineOffset : 0) + crispAdjust;\n                    }\n\n                    // Apply the box attributes\n                    attribs.width = Math.round(wrapper.width);\n                    attribs.height = Math.round(wrapper.height);\n\n                    bRect.attr(extend(attribs, deferredAttr));\n                    deferredAttr = {};\n                }\n            };\n\n            /**\n             * This function runs after setting text or padding, but only if padding is changed\n             */\n            updateTextPadding = function updateTextPadding() {\n                var imageBBox = bImage.getBBox();\n                var textX = padding + paddingLeft + (imageBBox.width ? imageBBox.width + padding : 0),\n                    textY = void 0;\n\n                // determin y based on the baseline\n                textY = baseline ? 0 : baselineOffset;\n\n                // compensate for alignment\n                if (defined(width) && bBox && (textAlign === 'center' || textAlign === 'right')) {\n                    textX += {\n                        center: 0.5,\n                        right: 1\n                    }[textAlign] * (width - bBox.width);\n                }\n\n                // update if anything changed\n                if (textX !== text.x || textY !== text.y) {\n                    text.attr('x', textX);\n                    if (textY !== undefined) {\n                        text.attr('y', textY);\n                    }\n                }\n\n                // record current values\n                text.x = textX;\n                text.y = textY;\n            };\n\n            /**\n             * Set a box attribute, or defer it if the box is not yet created\n             * @param {Object} key\n             * @param {Object} value\n             */\n            boxAttr = function boxAttr(key, value) {\n                if (bRect) {\n                    bRect.attr(key, value);\n                } else {\n                    deferredAttr[key] = value;\n                }\n            };\n\n            updateImageSize = function updateImageSize(imgWidth, imgHeigth) {\n                if (imgWidth && imgHeigth) {\n                    var dy = bBox.height - imgHeigth;\n\n                    updateBoxSize(dy / 2);\n                    updateTextPadding();\n\n                    wrapper.attr({ visibility: 'visible' });\n\n                    wrapper.attr({\n                        y: wrapper.y + dy / 2\n                    });\n                }\n                var imageX = padding + paddingLeft,\n                    imageY = void 0;\n\n                // determin y based on the baseline\n\n                imageY = padding;\n\n                // compensate for alignment\n                if (defined(width) && bBox && (textAlign === 'center' || textAlign === 'right')) {\n                    imageX += {\n                        center: 0.5,\n                        right: 1\n                    }[textAlign] * (width - bBox.width);\n                }\n\n                // update if anything changed\n                if (imageX !== bImage.x || imageX !== bImage.y) {\n                    bImage.attr('x', imageX);\n                    if (imageY !== undefined) {\n                        bImage.attr('y', imageY);\n                    }\n                }\n\n                // record current values\n                bImage.x = imageX;\n                bImage.y = imageY;\n            };\n\n            /**\n             * After the text element is added, get the desired size of the border box\n             * and add it before the text in the DOM.\n             */\n            wrapper.onAdd = function () {\n\n                text.add(wrapper);\n                bImage.add(wrapper);\n                if (iconWidth && iconHeight) {\n                    bImage.attr({ width: iconWidth, height: iconHeight });\n                }\n                wrapper.attr({\n                    text: str || str === 0 ? str : '', // alignment is available now // #3295: 0 not rendered if given as a value\n                    x: x,\n                    y: y\n                });\n\n                if (bRect && defined(anchorX)) {\n                    wrapper.attr({\n                        anchorX: anchorX,\n                        anchorY: anchorY\n                    });\n                }\n\n                if (iconWidth && iconHeight) {\n                    return;\n                }\n                wrapper.attr({ visibility: 'hidden' });\n                if (symbolSizes[iconSrc]) {\n                    updateImageSize(symbolSizes[iconSrc].width, symbolSizes[iconSrc].height);\n                } else {\n                    // Create a dummy JavaScript image to get the width and height. Due to a bug in IE < 8,\n                    // the created element must be assigned to a variable in order to load (#292).\n                    createElement('img', {\n                        src: iconSrc,\n                        onload: function onload() {\n                            // Special case for SVGs on IE11, the width is not accessible until the image is\n                            // part of the DOM (#2854).\n                            if (this.width === 0) {\n                                css(this, {\n                                    position: 'absolute',\n                                    top: '-999em'\n                                });\n                                doc.body.appendChild(this);\n                            }\n\n                            // Center the image\n                            symbolSizes[iconSrc] = { // Cache for next\n                                width: this.width,\n                                height: this.height\n                            };\n\n                            // Clean up after #2854 workaround.\n                            if (this.parentNode) {\n                                this.parentNode.removeChild(this);\n                            }\n\n                            updateImageSize(this.width, this.height);\n                        }\n                    });\n                }\n            };\n\n            /*\n             * Add specific attribute setters.\n             */\n\n            // only change local variables\n            wrapper.widthSetter = function (value) {\n                width = H.isNumber(value) ? value : null; // width:auto => null\n            };\n            wrapper.heightSetter = function (value) {\n                height = value;\n            };\n            wrapper['text-alignSetter'] = function (value) {\n                textAlign = value;\n            };\n            wrapper.paddingSetter = function (value) {\n                if (defined(value) && value !== padding) {\n                    padding = wrapper.padding = value;\n                    updateTextPadding();\n                }\n            };\n            wrapper.paddingLeftSetter = function (value) {\n                if (defined(value) && value !== paddingLeft) {\n                    paddingLeft = value;\n                    updateTextPadding();\n                }\n            };\n\n            // change local variable and prevent setting attribute on the group\n            wrapper.alignSetter = function (value) {\n                value = {\n                    left: 0,\n                    center: 0.5,\n                    right: 1\n                }[value];\n                if (value !== alignFactor) {\n                    alignFactor = value;\n                    if (bBox) {\n                        // Bounding box exists, means we're dynamically changing\n                        wrapper.attr({\n                            x: wrapperX\n                        }); // #5134\n                    }\n                }\n            };\n\n            // apply these to the box and the text alike\n            wrapper.textSetter = function (value) {\n                if (value !== undefined) {\n                    text.textSetter(value);\n                }\n                updateBoxSize();\n                updateTextPadding();\n                updateImageSize();\n            };\n\n            // apply these to the box but not to the text\n            wrapper['stroke-widthSetter'] = function (value, key) {\n                if (value) {\n                    needsBox = true;\n                }\n                strokeWidth = this['stroke-width'] = value;\n                boxAttr(key, value);\n            };\n\n            wrapper.strokeSetter = wrapper.fillSetter = wrapper.rSetter = function (value, key) {\n                if (key === 'fill' && value) {\n                    needsBox = true;\n                }\n                boxAttr(key, value);\n            };\n\n            wrapper.anchorXSetter = function (value, key) {\n                anchorX = wrapper.anchorX = value;\n                boxAttr(key, Math.round(value) - getCrispAdjust() - wrapperX);\n            };\n            wrapper.anchorYSetter = function (value, key) {\n                anchorY = wrapper.anchorY = value;\n                boxAttr(key, value - wrapperY);\n            };\n\n            // rename attributes\n            wrapper.xSetter = function (value) {\n                wrapper.x = value; // for animation getter\n                if (alignFactor) {\n                    value -= alignFactor * ((width || bBox.width) + 2 * padding);\n                }\n                wrapperX = Math.round(value);\n                wrapper.attr('translateX', wrapperX);\n            };\n            wrapper.ySetter = function (value) {\n                wrapperY = wrapper.y = Math.round(value);\n                wrapper.attr('translateY', wrapperY);\n            };\n\n            // Redirect certain methods to either the box or the text\n            var baseCss = wrapper.css;\n            return extend(wrapper, {\n                /**\n                 * Pick up some properties and apply them to the text instead of the\n                 * wrapper.\n                 * @ignore\n                 */\n                css: function css(styles) {\n                    if (styles) {\n                        var textStyles = {};\n                        styles = merge(styles); // create a copy to avoid altering the original object (#537)\n                        each(wrapper.textProps, function (prop) {\n                            if (styles[prop] !== undefined) {\n                                textStyles[prop] = styles[prop];\n                                delete styles[prop];\n                            }\n                        });\n                        text.css(textStyles);\n                    }\n                    return baseCss.call(wrapper, styles);\n                },\n                /**\n                 * Return the bounding box of the box, not the group.\n                 * @ignore\n                 */\n                getBBox: function getBBox() {\n                    return {\n                        width: bBox.width + 2 * padding,\n                        height: bBox.height + 2 * padding,\n                        x: bBox.x - padding,\n                        y: bBox.y - padding\n                    };\n                },\n\n                /**\n                 * Apply the shadow to the box.\n                 * @ignore\n                 */\n                shadow: function shadow(b) {\n                    if (b) {\n                        updateBoxSize();\n                        if (bRect) {\n                            bRect.shadow(b);\n                        }\n                    }\n                    return wrapper;\n                },\n\n                /**\n                 * Destroy and release memory.\n                 * @ignore\n                 */\n                destroy: function destroy() {\n\n                    // Added by button implementation\n                    removeEvent(wrapper.element, 'mouseenter');\n                    removeEvent(wrapper.element, 'mouseleave');\n\n                    if (text) {\n                        text = text.destroy();\n                    }\n                    if (bRect) {\n                        bRect = bRect.destroy();\n                    }\n                    if (bImage) {\n                        bImage = bImage.destroy();\n                    }\n                    // Call base implementation to destroy the rest\n                    H.SVGElement.prototype.destroy.call(wrapper);\n\n                    // Release local pointers (#1298)\n                    wrapper = renderer = updateBoxSize = updateTextPadding = boxAttr = updateImageSize = null;\n                }\n            });\n        };\n    };\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/chart/SVGRenderer.extend.js\n// module id = 1193\n// module chunks = 9\n\n//# sourceURL=webpack:///./src/js/modules/chart/SVGRenderer.extend.js?");

/***/ }),

/***/ 1194:
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n\n    var TYPES = ['up', 'none', 'down'];\n\n    var detectDirection = function detectDirection(currPoint, prevPoint) {\n        return currPoint > prevPoint ? TYPES[2] : currPoint < prevPoint ? TYPES[0] : TYPES[1];\n    };\n\n    var createGraphsConfig = function createGraphsConfig(graphPath) {\n        var paths = { general: graphPath },\n            xMaps = {},\n            directions = [];\n\n        for (var i = 0, len = TYPES.length; i < len; i++) {\n            paths[TYPES[i]] = [];\n            xMaps[TYPES[i]] = [];\n        }\n\n        for (var _i = 1, _len = graphPath.xMap.length, currX, currY, prevX, prevY, currDir, prevDir; _i < _len; _i++) {\n            currX = graphPath[_i * 3 + 1];\n            currY = graphPath[_i * 3 + 2];\n            prevX = graphPath[_i * 3 - 2];\n            prevY = graphPath[_i * 3 - 1];\n            currDir = detectDirection(currY, prevY);\n\n            if (prevDir !== currDir) {\n                paths[currDir].push('M', prevX, prevY);\n                xMaps[currDir].push(graphPath.xMap[_i - 1]);\n            }\n            paths[currDir].push('L', currX, currY);\n            xMaps[currDir].push(graphPath.xMap[_i]);\n\n            directions.push(currDir);\n\n            prevDir = currDir;\n        }\n\n        paths.up.xMap = xMaps.up;\n        paths.none.xMap = xMaps.none;\n        paths.down.xMap = xMaps.down;\n        return { paths: paths, directions: directions };\n    };\n\n    module.exports = function (H) {\n        H || (H = __webpack_require__(61));\n\n        var each = H.each;\n\n        H.seriesType('up-down-line', 'line', {\n            upColor: '#7aba00',\n            color: '#3d6bb1',\n            downColor: '#d53400'\n        }, {\n            drawGraph: function drawGraph() {\n                var _colors;\n\n                var series = this,\n                    options = this.options,\n                    colors = (_colors = {}, _defineProperty(_colors, TYPES[0], options.upColor), _defineProperty(_colors, TYPES[1], options.color), _defineProperty(_colors, TYPES[2], options.downColor), _colors),\n                    generalGraphPath = (this.gappedPath || this.getGraphPath).call(this),\n                    props = [['graph', 'highcharts-graph', options.lineColor || this.color, options.dashStyle, 'general']];\n\n                each(TYPES, function (type) {\n                    return props.push(['updown-graph-' + type, 'highcharts-graph highcharts-updown-graph-' + type, colors[type] || series.color, options.dashStyle, type]);\n                });\n\n                var config = createGraphsConfig(generalGraphPath);\n\n                each(series.points, function (point, i) {\n                    // fast but dirty\n                    point.color = colors[config.directions[i]] || series.color;\n                    // hard but correct\n                    // point.update({color:colors[config.directions[i]] || series.color}, false, null)\n                });\n\n                // Draw the graph\n                each(props, function (prop, i) {\n                    var graphKey = prop[0],\n                        graph = series[graphKey],\n                        graphPath = config.paths[prop[4]],\n                        attribs = void 0;\n\n                    if (graph) {\n                        graph.endX = graphPath.xMap;\n                        graph.animate({\n                            d: graphPath\n                        });\n                    } else if (graphPath.length) {\n\n                        series[graphKey] = series.chart.renderer.path(graphPath).addClass(prop[1]).attr({\n                            zIndex: 1\n                        }).add(series.group);\n\n                        attribs = {\n                            'stroke': prop[2],\n                            'stroke-width': options.lineWidth,\n                            'fill': series.fillGraph && series.color || 'none'\n                        };\n\n                        if (prop[3]) {\n                            attribs.dashstyle = prop[3];\n                        } else if (options.linecap !== 'square') {\n                            attribs['stroke-linecap'] = attribs['stroke-linejoin'] = 'round';\n                        }\n\n                        graph = series[graphKey].attr(attribs).shadow(i === 0 && options.shadow);\n                    }\n\n                    if (graph) {\n                        graph.startX = graphPath.xMap;\n                        graph.isArea = graphPath.isArea;\n                    }\n                });\n\n                if (this.graph) {\n                    this.graph.hide();\n                }\n            },\n\n            setState: function setState(state) {\n                H.Series.prototype.setState.call(this, state);\n\n                var series = this,\n                    stateOptions = this.options.states,\n                    lineWidth = this.options.lineWidth;\n\n                series.state = state;\n\n                if (stateOptions[state] && stateOptions[state].enabled === false) return;\n\n                if (state) lineWidth = stateOptions[state].lineWidth || lineWidth + (stateOptions[state].lineWidthPlus || 0);\n\n                if (series.graph && !series.graph.dashstyle) each(TYPES, function (type) {\n                    return series['updown-graph-' + type] && series['updown-graph-' + type].attr({ 'stroke-width': lineWidth });\n                });\n            }\n        });\n    };\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/chart/series/up-down-line.js\n// module id = 1194\n// module chunks = 9\n\n//# sourceURL=webpack:///./src/js/modules/chart/series/up-down-line.js?");

/***/ }),

/***/ 1195:
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n\n    module.exports = function (H) {\n        H || (H = __webpack_require__(61));\n        H.seriesType('heikin-ashi', 'candlestick', {});\n    };\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/chart/series/heikin-ashi.js\n// module id = 1195\n// module chunks = 9\n\n//# sourceURL=webpack:///./src/js/modules/chart/series/heikin-ashi.js?");

/***/ })

});