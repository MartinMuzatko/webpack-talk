/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _README = __webpack_require__(4);
	
	var _README2 = _interopRequireDefault(_README);
	
	__webpack_require__(5);
	
	var _riot = __webpack_require__(9);
	
	var _riot2 = _interopRequireDefault(_riot);
	
	__webpack_require__(12);
	
	var _marked = __webpack_require__(16);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_marked2.default.Renderer();
	
	document.body.innerHTML = '<app>' + _README2.default + '</app>';
	
	_riot2.default.mount('*');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"webpack-talk\">Webpack Talk</h1>\n<p>Intro to frontend automation</p>\n<pre class=\"language-undefined\"><code class=\"language-undefined\">NPM<span class=\"token punctuation\" >,</span> Node<span class=\"token punctuation\" >,</span> Webpack</code></pre><p>Usecase - What does Webpack do for you?</p>\n<pre class=\"language-undefined\"><code class=\"language-undefined\">Preprocessing\n    coffeescript <span class=\"token operator\" >-</span><span class=\"token operator\" >></span> js\n    less <span class=\"token operator\" >-</span><span class=\"token operator\" >></span> css\n\nTranspiling\n    ES6 <span class=\"token operator\" >></span> ES5\n\nDependency Management\n    <span class=\"token keyword\" >import</span><span class=\"token punctuation\" >,</span> require\n\nOptimizing\n    minify\n    fallback <span class=\"token punctuation\" >(</span>rgba <span class=\"token operator\" >></span> hex<span class=\"token punctuation\" >)</span>\n\nTooling\n    Sourcemaps\n    Devserver <span class=\"token operator\" >-</span> auto reload\n\nBundling\n    Bundling everything together into one distributable file <span class=\"token punctuation\" >(</span>or folder<span class=\"token punctuation\" >)</span></code></pre><p>Dependency management\n    What is a Module (Anything really - js/html/css/md, etc)\n    Loading modules - Webpack loader chains (style!css!less)\n        Formats\n        Preloaders, Postloaders\n    Plugins extend loaders ()\n    JS module formats</p>\n<p>Bonus Slides/Material:\n    Comparing existing tools\n    Q&amp;A</p>\n";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./main.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block;\n}\n/**\n * Add the correct display in IE 9-.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\ntemplate,\n[hidden] {\n  display: none;\n}\n/* Links\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0;\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n/**\n * Restore the font weight unset by the previous rule.\n */\noptgroup {\n  font-weight: bold;\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n/**\n * prism.js Coy theme for JavaScript, CoffeeScript, CSS and HTML\n * Based on https://github.com/tshedor/workshop-wp-theme (Example: http://workshop.kansan.com/category/sessions/basics or http://workshop.timshedor.com/category/sessions/basics);\n * @author Tim  Shedor\n */\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  color: black;\n  background: none;\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n/* Code blocks */\npre[class*=\"language-\"] {\n  position: relative;\n  margin: .5em 0;\n  -webkit-box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;\n  -moz-box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;\n  box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;\n  border-left: 10px solid #358ccb;\n  background-color: #fdfdfd;\n  background-image: -webkit-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-image: -moz-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-image: -ms-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-image: -o-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-image: linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-size: 3em 3em;\n  background-origin: content-box;\n  overflow: visible;\n  padding: 0;\n}\ncode[class*=\"language\"] {\n  max-height: inherit;\n  height: 100%;\n  padding: 0 1em;\n  display: block;\n  overflow: auto;\n}\n/* Margin bottom to accomodate shadow */\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n  background-color: #fdfdfd;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin-bottom: 1em;\n}\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n  position: relative;\n  padding: .2em;\n  -webkit-border-radius: 0.3em;\n  -moz-border-radius: 0.3em;\n  -ms-border-radius: 0.3em;\n  -o-border-radius: 0.3em;\n  border-radius: 0.3em;\n  color: #c92c2c;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  display: inline;\n  white-space: normal;\n}\npre[class*=\"language-\"]:before,\npre[class*=\"language-\"]:after {\n  content: '';\n  z-index: -2;\n  display: block;\n  position: absolute;\n  bottom: 0.75em;\n  left: 0.18em;\n  width: 40%;\n  height: 20%;\n  max-height: 13em;\n  -webkit-box-shadow: 0px 13px 8px #979797;\n  -moz-box-shadow: 0px 13px 8px #979797;\n  box-shadow: 0px 13px 8px #979797;\n  -webkit-transform: rotate(-2deg);\n  -moz-transform: rotate(-2deg);\n  -ms-transform: rotate(-2deg);\n  -o-transform: rotate(-2deg);\n  transform: rotate(-2deg);\n}\n:not(pre) > code[class*=\"language-\"]:after,\npre[class*=\"language-\"]:after {\n  right: 0.75em;\n  left: auto;\n  -webkit-transform: rotate(2deg);\n  -moz-transform: rotate(2deg);\n  -ms-transform: rotate(2deg);\n  -o-transform: rotate(2deg);\n  transform: rotate(2deg);\n}\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #7D8B99;\n}\n.token.punctuation {\n  color: #5F6364;\n}\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #c92c2c;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.function,\n.token.builtin,\n.token.inserted {\n  color: #2f9c0a;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable {\n  color: #a67f59;\n  background: rgba(255, 255, 255, 0.5);\n}\n.token.atrule,\n.token.attr-value,\n.token.keyword,\n.token.class-name {\n  color: #1990b8;\n}\n.token.regex,\n.token.important {\n  color: #e90;\n}\n.language-css .token.string,\n.style .token.string {\n  color: #a67f59;\n  background: rgba(255, 255, 255, 0.5);\n}\n.token.important {\n  font-weight: normal;\n}\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n.namespace {\n  opacity: .7;\n}\n@media screen and (max-width: 767px) {\n  pre[class*=\"language-\"]:before,\n  pre[class*=\"language-\"]:after {\n    bottom: 14px;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n  }\n}\n/* Plugin styles */\n.token.tab:not(:empty):before,\n.token.cr:before,\n.token.lf:before {\n  color: #e0d7d1;\n}\n/* Plugin styles: Line Numbers */\npre[class*=\"language-\"].line-numbers {\n  padding-left: 0;\n}\npre[class*=\"language-\"].line-numbers code {\n  padding-left: 3.8em;\n}\npre[class*=\"language-\"].line-numbers .line-numbers-rows {\n  left: 0;\n}\n/* Plugin styles: Line Highlight */\npre[class*=\"language-\"][data-line] {\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 0;\n}\npre[data-line] code {\n  position: relative;\n  padding-left: 4em;\n}\npre .line-highlight {\n  margin-top: 0;\n}\n/*  ========================================\n    COLORS\n    ======================================== */\npre[class*=\"language-\"]:before,\npre[class*=\"language-\"]:after {\n  content: initial;\n}\nbody {\n  background: #FFF;\n}\n* {\n  box-sizing: border-box;\n}\nnav {\n  background: #2e8ab8;\n  position: fixed;\n  width: 100%;\n  box-shadow: inset 0 -0.33em 0 rgba(59, 72, 79, 0.2);\n}\nnav a {\n  transition: all .5s ease;\n  text-decoration: none;\n  color: #FFF;\n  padding: 1em 2em;\n  display: inline-block;\n}\nnav a:hover,\nnav a.active {\n  background: #FFF;\n  color: #2e8ab8;\n}\narticle {\n  padding: 1em;\n  padding-top: 4em;\n}\narticle > h1 {\n  font-size: 1.2rem;\n  padding: 0 0 1em;\n  border-bottom: 1px solid #2e8ab8;\n  text-transform: uppercase;\n  font-weight: 400;\n}\narticle > h1:before {\n  content: '// ';\n  color: #2e8ab8;\n}\n", ""]);
	
	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/* Riot v2.4.1, @license MIT */
	
	;(function (window, undefined) {
	  'use strict';
	
	  var riot = { version: 'v2.4.1', settings: {} },
	
	  // be aware, internal usage
	  // ATTENTION: prefix the global dynamic variables with `__`
	
	  // counter to give a unique id to all the Tag instances
	  __uid = 0,
	
	  // tags instances cache
	  __virtualDom = [],
	
	  // tags implementation cache
	  __tagImpl = {},
	
	
	  /**
	   * Const
	   */
	  GLOBAL_MIXIN = '__global_mixin',
	
	
	  // riot specific prefixes
	  RIOT_PREFIX = 'riot-',
	      RIOT_TAG = RIOT_PREFIX + 'tag',
	      RIOT_TAG_IS = 'data-is',
	
	
	  // for typeof == '' comparisons
	  T_STRING = 'string',
	      T_OBJECT = 'object',
	      T_UNDEF = 'undefined',
	      T_FUNCTION = 'function',
	
	  // special native tags that cannot be treated like the others
	  SPECIAL_TAGS_REGEX = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
	      RESERVED_WORDS_BLACKLIST = /^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,
	
	  // SVG tags list https://www.w3.org/TR/SVG/attindex.html#PresentationAttributes
	  SVG_TAGS_LIST = ['altGlyph', 'animate', 'animateColor', 'circle', 'clipPath', 'defs', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feFlood', 'feGaussianBlur', 'feImage', 'feMerge', 'feMorphology', 'feOffset', 'feSpecularLighting', 'feTile', 'feTurbulence', 'filter', 'font', 'foreignObject', 'g', 'glyph', 'glyphRef', 'image', 'line', 'linearGradient', 'marker', 'mask', 'missing-glyph', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'switch', 'symbol', 'text', 'textPath', 'tref', 'tspan', 'use'],
	
	
	  // version# for IE 8-11, 0 for others
	  IE_VERSION = (window && window.document || {}).documentMode | 0,
	
	
	  // detect firefox to fix #1374
	  FIREFOX = window && !!window.InstallTrigger;
	  /* istanbul ignore next */
	  riot.observable = function (el) {
	
	    /**
	     * Extend the original object or create a new empty one
	     * @type { Object }
	     */
	
	    el = el || {};
	
	    /**
	     * Private variables
	     */
	    var callbacks = {},
	        slice = Array.prototype.slice;
	
	    /**
	     * Private Methods
	     */
	
	    /**
	     * Helper function needed to get and loop all the events in a string
	     * @param   { String }   e - event string
	     * @param   {Function}   fn - callback
	     */
	    function onEachEvent(e, fn) {
	      var es = e.split(' '),
	          l = es.length,
	          i = 0,
	          name,
	          indx;
	      for (; i < l; i++) {
	        name = es[i];
	        indx = name.indexOf('.');
	        if (name) fn(~indx ? name.substring(0, indx) : name, i, ~indx ? name.slice(indx + 1) : null);
	      }
	    }
	
	    /**
	     * Public Api
	     */
	
	    // extend the el object adding the observable methods
	    Object.defineProperties(el, {
	      /**
	       * Listen to the given space separated list of `events` and
	       * execute the `callback` each time an event is triggered.
	       * @param  { String } events - events ids
	       * @param  { Function } fn - callback function
	       * @returns { Object } el
	       */
	      on: {
	        value: function value(events, fn) {
	          if (typeof fn != 'function') return el;
	
	          onEachEvent(events, function (name, pos, ns) {
	            (callbacks[name] = callbacks[name] || []).push(fn);
	            fn.typed = pos > 0;
	            fn.ns = ns;
	          });
	
	          return el;
	        },
	        enumerable: false,
	        writable: false,
	        configurable: false
	      },
	
	      /**
	       * Removes the given space separated list of `events` listeners
	       * @param   { String } events - events ids
	       * @param   { Function } fn - callback function
	       * @returns { Object } el
	       */
	      off: {
	        value: function value(events, fn) {
	          if (events == '*' && !fn) callbacks = {};else {
	            onEachEvent(events, function (name, pos, ns) {
	              if (fn || ns) {
	                var arr = callbacks[name];
	                for (var i = 0, cb; cb = arr && arr[i]; ++i) {
	                  if (cb == fn || ns && cb.ns == ns) arr.splice(i--, 1);
	                }
	              } else delete callbacks[name];
	            });
	          }
	          return el;
	        },
	        enumerable: false,
	        writable: false,
	        configurable: false
	      },
	
	      /**
	       * Listen to the given space separated list of `events` and
	       * execute the `callback` at most once
	       * @param   { String } events - events ids
	       * @param   { Function } fn - callback function
	       * @returns { Object } el
	       */
	      one: {
	        value: function value(events, fn) {
	          function on() {
	            el.off(events, on);
	            fn.apply(el, arguments);
	          }
	          return el.on(events, on);
	        },
	        enumerable: false,
	        writable: false,
	        configurable: false
	      },
	
	      /**
	       * Execute all callback functions that listen to
	       * the given space separated list of `events`
	       * @param   { String } events - events ids
	       * @returns { Object } el
	       */
	      trigger: {
	        value: function value(events) {
	
	          // getting the arguments
	          var arglen = arguments.length - 1,
	              args = new Array(arglen),
	              fns;
	
	          for (var i = 0; i < arglen; i++) {
	            args[i] = arguments[i + 1]; // skip first argument
	          }
	
	          onEachEvent(events, function (name, pos, ns) {
	
	            fns = slice.call(callbacks[name] || [], 0);
	
	            for (var i = 0, fn; fn = fns[i]; ++i) {
	              if (fn.busy) continue;
	              fn.busy = 1;
	              if (!ns || fn.ns == ns) fn.apply(el, fn.typed ? [name].concat(args) : args);
	              if (fns[i] !== fn) {
	                i--;
	              }
	              fn.busy = 0;
	            }
	
	            if (callbacks['*'] && name != '*') el.trigger.apply(el, ['*', name].concat(args));
	          });
	
	          return el;
	        },
	        enumerable: false,
	        writable: false,
	        configurable: false
	      }
	    });
	
	    return el;
	  }
	  /* istanbul ignore next */
	  ;(function (riot) {
	
	    /**
	     * Simple client-side router
	     * @module riot-route
	     */
	
	    var RE_ORIGIN = /^.+?\/\/+[^\/]+/,
	        EVENT_LISTENER = 'EventListener',
	        REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER,
	        ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER,
	        HAS_ATTRIBUTE = 'hasAttribute',
	        REPLACE = 'replace',
	        POPSTATE = 'popstate',
	        HASHCHANGE = 'hashchange',
	        TRIGGER = 'trigger',
	        MAX_EMIT_STACK_LEVEL = 3,
	        win = typeof window != 'undefined' && window,
	        doc = typeof document != 'undefined' && document,
	        hist = win && history,
	        loc = win && (hist.location || win.location),
	        // see html5-history-api
	    prot = Router.prototype,
	        // to minify more
	    clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click',
	        started = false,
	        central = riot.observable(),
	        routeFound = false,
	        debouncedEmit,
	        base,
	        current,
	        parser,
	        secondParser,
	        emitStack = [],
	        emitStackLevel = 0;
	
	    /**
	     * Default parser. You can replace it via router.parser method.
	     * @param {string} path - current path (normalized)
	     * @returns {array} array
	     */
	    function DEFAULT_PARSER(path) {
	      return path.split(/[/?#]/);
	    }
	
	    /**
	     * Default parser (second). You can replace it via router.parser method.
	     * @param {string} path - current path (normalized)
	     * @param {string} filter - filter string (normalized)
	     * @returns {array} array
	     */
	    function DEFAULT_SECOND_PARSER(path, filter) {
	      var re = new RegExp('^' + filter[REPLACE](/\*/g, '([^/?#]+?)')[REPLACE](/\.\./, '.*') + '$'),
	          args = path.match(re);
	
	      if (args) return args.slice(1);
	    }
	
	    /**
	     * Simple/cheap debounce implementation
	     * @param   {function} fn - callback
	     * @param   {number} delay - delay in seconds
	     * @returns {function} debounced function
	     */
	    function debounce(fn, delay) {
	      var t;
	      return function () {
	        clearTimeout(t);
	        t = setTimeout(fn, delay);
	      };
	    }
	
	    /**
	     * Set the window listeners to trigger the routes
	     * @param {boolean} autoExec - see route.start
	     */
	    function start(autoExec) {
	      debouncedEmit = debounce(emit, 1);
	      win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit);
	      win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
	      doc[ADD_EVENT_LISTENER](clickEvent, click);
	      if (autoExec) emit(true);
	    }
	
	    /**
	     * Router class
	     */
	    function Router() {
	      this.$ = [];
	      riot.observable(this); // make it observable
	      central.on('stop', this.s.bind(this));
	      central.on('emit', this.e.bind(this));
	    }
	
	    function normalize(path) {
	      return path[REPLACE](/^\/|\/$/, '');
	    }
	
	    function isString(str) {
	      return typeof str == 'string';
	    }
	
	    /**
	     * Get the part after domain name
	     * @param {string} href - fullpath
	     * @returns {string} path from root
	     */
	    function getPathFromRoot(href) {
	      return (href || loc.href)[REPLACE](RE_ORIGIN, '');
	    }
	
	    /**
	     * Get the part after base
	     * @param {string} href - fullpath
	     * @returns {string} path from base
	     */
	    function getPathFromBase(href) {
	      return base[0] == '#' ? (href || loc.href || '').split(base)[1] || '' : (loc ? getPathFromRoot(href) : href || '')[REPLACE](base, '');
	    }
	
	    function emit(force) {
	      // the stack is needed for redirections
	      var isRoot = emitStackLevel == 0;
	      if (MAX_EMIT_STACK_LEVEL <= emitStackLevel) return;
	
	      emitStackLevel++;
	      emitStack.push(function () {
	        var path = getPathFromBase();
	        if (force || path != current) {
	          central[TRIGGER]('emit', path);
	          current = path;
	        }
	      });
	      if (isRoot) {
	        while (emitStack.length) {
	          emitStack[0]();
	          emitStack.shift();
	        }
	        emitStackLevel = 0;
	      }
	    }
	
	    function click(e) {
	      if (e.which != 1 // not left click
	       || e.metaKey || e.ctrlKey || e.shiftKey // or meta keys
	       || e.defaultPrevented // or default prevented
	      ) return;
	
	      var el = e.target;
	      while (el && el.nodeName != 'A') {
	        el = el.parentNode;
	      }if (!el || el.nodeName != 'A' // not A tag
	       || el[HAS_ATTRIBUTE]('download') // has download attr
	       || !el[HAS_ATTRIBUTE]('href') // has no href attr
	       || el.target && el.target != '_self' // another window or frame
	       || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) == -1 // cross origin
	      ) return;
	
	      if (el.href != loc.href) {
	        if (el.href.split('#')[0] == loc.href.split('#')[0] // internal jump
	         || base != '#' && getPathFromRoot(el.href).indexOf(base) !== 0 // outside of base
	         || !go(getPathFromBase(el.href), el.title || doc.title) // route not found
	        ) return;
	      }
	
	      e.preventDefault();
	    }
	
	    /**
	     * Go to the path
	     * @param {string} path - destination path
	     * @param {string} title - page title
	     * @param {boolean} shouldReplace - use replaceState or pushState
	     * @returns {boolean} - route not found flag
	     */
	    function go(path, title, shouldReplace) {
	      if (hist) {
	        // if a browser
	        path = base + normalize(path);
	        title = title || doc.title;
	        // browsers ignores the second parameter `title`
	        shouldReplace ? hist.replaceState(null, title, path) : hist.pushState(null, title, path);
	        // so we need to set it manually
	        doc.title = title;
	        routeFound = false;
	        emit();
	        return routeFound;
	      }
	
	      // Server-side usage: directly execute handlers for the path
	      return central[TRIGGER]('emit', getPathFromBase(path));
	    }
	
	    /**
	     * Go to path or set action
	     * a single string:                go there
	     * two strings:                    go there with setting a title
	     * two strings and boolean:        replace history with setting a title
	     * a single function:              set an action on the default route
	     * a string/RegExp and a function: set an action on the route
	     * @param {(string|function)} first - path / action / filter
	     * @param {(string|RegExp|function)} second - title / action
	     * @param {boolean} third - replace flag
	     */
	    prot.m = function (first, second, third) {
	      if (isString(first) && (!second || isString(second))) go(first, second, third || false);else if (second) this.r(first, second);else this.r('@', first);
	    };
	
	    /**
	     * Stop routing
	     */
	    prot.s = function () {
	      this.off('*');
	      this.$ = [];
	    };
	
	    /**
	     * Emit
	     * @param {string} path - path
	     */
	    prot.e = function (path) {
	      this.$.concat('@').some(function (filter) {
	        var args = (filter == '@' ? parser : secondParser)(normalize(path), normalize(filter));
	        if (typeof args != 'undefined') {
	          this[TRIGGER].apply(null, [filter].concat(args));
	          return routeFound = true; // exit from loop
	        }
	      }, this);
	    };
	
	    /**
	     * Register route
	     * @param {string} filter - filter for matching to url
	     * @param {function} action - action to register
	     */
	    prot.r = function (filter, action) {
	      if (filter != '@') {
	        filter = '/' + normalize(filter);
	        this.$.push(filter);
	      }
	      this.on(filter, action);
	    };
	
	    var mainRouter = new Router();
	    var route = mainRouter.m.bind(mainRouter);
	
	    /**
	     * Create a sub router
	     * @returns {function} the method of a new Router object
	     */
	    route.create = function () {
	      var newSubRouter = new Router();
	      // assign sub-router's main method
	      var router = newSubRouter.m.bind(newSubRouter);
	      // stop only this sub-router
	      router.stop = newSubRouter.s.bind(newSubRouter);
	      return router;
	    };
	
	    /**
	     * Set the base of url
	     * @param {(str|RegExp)} arg - a new base or '#' or '#!'
	     */
	    route.base = function (arg) {
	      base = arg || '#';
	      current = getPathFromBase(); // recalculate current path
	    };
	
	    /** Exec routing right now **/
	    route.exec = function () {
	      emit(true);
	    };
	
	    /**
	     * Replace the default router to yours
	     * @param {function} fn - your parser function
	     * @param {function} fn2 - your secondParser function
	     */
	    route.parser = function (fn, fn2) {
	      if (!fn && !fn2) {
	        // reset parser for testing...
	        parser = DEFAULT_PARSER;
	        secondParser = DEFAULT_SECOND_PARSER;
	      }
	      if (fn) parser = fn;
	      if (fn2) secondParser = fn2;
	    };
	
	    /**
	     * Helper function to get url query as an object
	     * @returns {object} parsed query
	     */
	    route.query = function () {
	      var q = {};
	      var href = loc.href || current;
	      href[REPLACE](/[?&](.+?)=([^&]*)/g, function (_, k, v) {
	        q[k] = v;
	      });
	      return q;
	    };
	
	    /** Stop routing **/
	    route.stop = function () {
	      if (started) {
	        if (win) {
	          win[REMOVE_EVENT_LISTENER](POPSTATE, debouncedEmit);
	          win[REMOVE_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
	          doc[REMOVE_EVENT_LISTENER](clickEvent, click);
	        }
	        central[TRIGGER]('stop');
	        started = false;
	      }
	    };
	
	    /**
	     * Start routing
	     * @param {boolean} autoExec - automatically exec after starting if true
	     */
	    route.start = function (autoExec) {
	      if (!started) {
	        if (win) {
	          if (document.readyState == 'complete') start(autoExec);
	          // the timeout is needed to solve
	          // a weird safari bug https://github.com/riot/route/issues/33
	          else win[ADD_EVENT_LISTENER]('load', function () {
	              setTimeout(function () {
	                start(autoExec);
	              }, 1);
	            });
	        }
	        started = true;
	      }
	    };
	
	    /** Prepare the router **/
	    route.base();
	    route.parser();
	
	    riot.route = route;
	  })(riot);
	  /* istanbul ignore next */
	
	  /**
	   * The riot template engine
	   * @version v2.4.0
	   */
	  /**
	   * riot.util.brackets
	   *
	   * - `brackets    ` - Returns a string or regex based on its parameter
	   * - `brackets.set` - Change the current riot brackets
	   *
	   * @module
	   */
	
	  var brackets = function (UNDEF) {
	
	    var REGLOB = 'g',
	        R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,
	        R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,
	        S_QBLOCKS = R_STRINGS.source + '|' + /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' + /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,
	        FINDBRACES = {
	      '(': RegExp('([()])|' + S_QBLOCKS, REGLOB),
	      '[': RegExp('([[\\]])|' + S_QBLOCKS, REGLOB),
	      '{': RegExp('([{}])|' + S_QBLOCKS, REGLOB)
	    },
	        DEFAULT = '{ }';
	
	    var _pairs = ['{', '}', '{', '}', /{[^}]*}/, /\\([{}])/g, /\\({)|{/g, RegExp('\\\\(})|([[({])|(})|' + S_QBLOCKS, REGLOB), DEFAULT, /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/, /(^|[^\\]){=[\S\s]*?}/];
	
	    var cachedBrackets = UNDEF,
	        _regex,
	        _cache = [],
	        _settings;
	
	    function _loopback(re) {
	      return re;
	    }
	
	    function _rewrite(re, bp) {
	      if (!bp) bp = _cache;
	      return new RegExp(re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : '');
	    }
	
	    function _create(pair) {
	      if (pair === DEFAULT) return _pairs;
	
	      var arr = pair.split(' ');
	
	      if (arr.length !== 2 || /[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(pair)) {
	        // eslint-disable-line
	        throw new Error('Unsupported brackets "' + pair + '"');
	      }
	      arr = arr.concat(pair.replace(/(?=[[\]()*+?.^$|])/g, '\\').split(' '));
	
	      arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr);
	      arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr);
	      arr[6] = _rewrite(_pairs[6], arr);
	      arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCKS, REGLOB);
	      arr[8] = pair;
	      return arr;
	    }
	
	    function _brackets(reOrIdx) {
	      return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx];
	    }
	
	    _brackets.split = function split(str, tmpl, _bp) {
	      // istanbul ignore next: _bp is for the compiler
	      if (!_bp) _bp = _cache;
	
	      var parts = [],
	          match,
	          isexpr,
	          start,
	          pos,
	          re = _bp[6];
	
	      isexpr = start = re.lastIndex = 0;
	
	      while (match = re.exec(str)) {
	
	        pos = match.index;
	
	        if (isexpr) {
	
	          if (match[2]) {
	            re.lastIndex = skipBraces(str, match[2], re.lastIndex);
	            continue;
	          }
	          if (!match[3]) {
	            continue;
	          }
	        }
	
	        if (!match[1]) {
	          unescapeStr(str.slice(start, pos));
	          start = re.lastIndex;
	          re = _bp[6 + (isexpr ^= 1)];
	          re.lastIndex = start;
	        }
	      }
	
	      if (str && start < str.length) {
	        unescapeStr(str.slice(start));
	      }
	
	      return parts;
	
	      function unescapeStr(s) {
	        if (tmpl || isexpr) {
	          parts.push(s && s.replace(_bp[5], '$1'));
	        } else {
	          parts.push(s);
	        }
	      }
	
	      function skipBraces(s, ch, ix) {
	        var match,
	            recch = FINDBRACES[ch];
	
	        recch.lastIndex = ix;
	        ix = 1;
	        while (match = recch.exec(s)) {
	          if (match[1] && !(match[1] === ch ? ++ix : --ix)) break;
	        }
	        return ix ? s.length : recch.lastIndex;
	      }
	    };
	
	    _brackets.hasExpr = function hasExpr(str) {
	      return _cache[4].test(str);
	    };
	
	    _brackets.loopKeys = function loopKeys(expr) {
	      var m = expr.match(_cache[9]);
	
	      return m ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] } : { val: expr.trim() };
	    };
	
	    _brackets.array = function array(pair) {
	      return pair ? _create(pair) : _cache;
	    };
	
	    function _reset(pair) {
	      if ((pair || (pair = DEFAULT)) !== _cache[8]) {
	        _cache = _create(pair);
	        _regex = pair === DEFAULT ? _loopback : _rewrite;
	        _cache[9] = _regex(_pairs[9]);
	      }
	      cachedBrackets = pair;
	    }
	
	    function _setSettings(o) {
	      var b;
	
	      o = o || {};
	      b = o.brackets;
	      Object.defineProperty(o, 'brackets', {
	        set: _reset,
	        get: function get() {
	          return cachedBrackets;
	        },
	        enumerable: true
	      });
	      _settings = o;
	      _reset(b);
	    }
	
	    Object.defineProperty(_brackets, 'settings', {
	      set: _setSettings,
	      get: function get() {
	        return _settings;
	      }
	    });
	
	    /* istanbul ignore next: in the browser riot is always in the scope */
	    _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
	    _brackets.set = _reset;
	
	    _brackets.R_STRINGS = R_STRINGS;
	    _brackets.R_MLCOMMS = R_MLCOMMS;
	    _brackets.S_QBLOCKS = S_QBLOCKS;
	
	    return _brackets;
	  }();
	
	  /**
	   * @module tmpl
	   *
	   * tmpl          - Root function, returns the template value, render with data
	   * tmpl.hasExpr  - Test the existence of a expression inside a string
	   * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
	   */
	
	  var tmpl = function () {
	
	    var _cache = {};
	
	    function _tmpl(str, data) {
	      if (!str) return str;
	
	      return (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr);
	    }
	
	    _tmpl.haveRaw = brackets.hasRaw;
	
	    _tmpl.hasExpr = brackets.hasExpr;
	
	    _tmpl.loopKeys = brackets.loopKeys;
	
	    _tmpl.errorHandler = null;
	
	    function _logErr(err, ctx) {
	
	      if (_tmpl.errorHandler) {
	
	        err.riotData = {
	          tagName: ctx && ctx.root && ctx.root.tagName,
	          _riot_id: ctx && ctx._riot_id //eslint-disable-line camelcase
	        };
	        _tmpl.errorHandler(err);
	      }
	    }
	
	    function _create(str) {
	      var expr = _getTmpl(str);
	
	      if (expr.slice(0, 11) !== 'try{return ') expr = 'return ' + expr;
	
	      /* eslint-disable */
	
	      return new Function('E', expr + ';');
	      /* eslint-enable */
	    }
	
	    var CH_IDEXPR = '⁗',
	        RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,
	        RE_QBLOCK = RegExp(brackets.S_QBLOCKS, 'g'),
	        RE_DQUOTE = /\u2057/g,
	        RE_QBMARK = /\u2057(\d+)~/g;
	
	    function _getTmpl(str) {
	      var qstr = [],
	          expr,
	          parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);
	
	      if (parts.length > 2 || parts[0]) {
	        var i,
	            j,
	            list = [];
	
	        for (i = j = 0; i < parts.length; ++i) {
	
	          expr = parts[i];
	
	          if (expr && (expr = i & 1 ? _parseExpr(expr, 1, qstr) : '"' + expr.replace(/\\/g, '\\\\').replace(/\r\n?|\n/g, '\\n').replace(/"/g, '\\"') + '"')) list[j++] = expr;
	        }
	
	        expr = j < 2 ? list[0] : '[' + list.join(',') + '].join("")';
	      } else {
	
	        expr = _parseExpr(parts[1], 0, qstr);
	      }
	
	      if (qstr[0]) {
	        expr = expr.replace(RE_QBMARK, function (_, pos) {
	          return qstr[pos].replace(/\r/g, '\\r').replace(/\n/g, '\\n');
	        });
	      }
	      return expr;
	    }
	
	    var RE_BREND = {
	      '(': /[()]/g,
	      '[': /[[\]]/g,
	      '{': /[{}]/g
	    };
	
	    function _parseExpr(expr, asText, qstr) {
	
	      expr = expr.replace(RE_QBLOCK, function (s, div) {
	        return s.length > 2 && !div ? CH_IDEXPR + (qstr.push(s) - 1) + '~' : s;
	      }).replace(/\s+/g, ' ').trim().replace(/\ ?([[\({},?\.:])\ ?/g, '$1');
	
	      if (expr) {
	        var list = [],
	            cnt = 0,
	            match;
	
	        while (expr && (match = expr.match(RE_CSNAME)) && !match.index) {
	          var key,
	              jsb,
	              re = /,|([[{(])|$/g;
	
	          expr = RegExp.rightContext;
	          key = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1];
	
	          while (jsb = (match = re.exec(expr))[1]) {
	            skipBraces(jsb, re);
	          }jsb = expr.slice(0, match.index);
	          expr = RegExp.rightContext;
	
	          list[cnt++] = _wrapExpr(jsb, 1, key);
	        }
	
	        expr = !cnt ? _wrapExpr(expr, asText) : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0];
	      }
	      return expr;
	
	      function skipBraces(ch, re) {
	        var mm,
	            lv = 1,
	            ir = RE_BREND[ch];
	
	        ir.lastIndex = re.lastIndex;
	        while (mm = ir.exec(expr)) {
	          if (mm[0] === ch) ++lv;else if (! --lv) break;
	        }
	        re.lastIndex = lv ? expr.length : ir.lastIndex;
	      }
	    }
	
	    // istanbul ignore next: not both
	    var // eslint-disable-next-line max-len
	    JS_CONTEXT = '"in this?this:' + ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' ? 'global' : 'window') + ').',
	        JS_VARNAME = /[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
	        JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;
	
	    function _wrapExpr(expr, asText, key) {
	      var tb;
	
	      expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
	        if (mvar) {
	          pos = tb ? 0 : pos + match.length;
	
	          if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
	            match = p + '("' + mvar + JS_CONTEXT + mvar;
	            if (pos) tb = (s = s[pos]) === '.' || s === '(' || s === '[';
	          } else if (pos) {
	            tb = !JS_NOPROPS.test(s.slice(pos));
	          }
	        }
	        return match;
	      });
	
	      if (tb) {
	        expr = 'try{return ' + expr + '}catch(e){E(e,this)}';
	      }
	
	      if (key) {
	
	        expr = (tb ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')') + '?"' + key + '":""';
	      } else if (asText) {
	
	        expr = 'function(v){' + (tb ? expr.replace('return ', 'v=') : 'v=(' + expr + ')') + ';return v||v===0?v:""}.call(this)';
	      }
	
	      return expr;
	    }
	
	    // istanbul ignore next: compatibility fix for beta versions
	    _tmpl.parse = function (s) {
	      return s;
	    };
	
	    _tmpl.version = brackets.version = 'v2.4.0';
	
	    return _tmpl;
	  }();
	
	  /*
	    lib/browser/tag/mkdom.js
	  
	    Includes hacks needed for the Internet Explorer version 9 and below
	    See: http://kangax.github.io/compat-table/es5/#ie8
	         http://codeplanet.io/dropping-ie8/
	  */
	  var mkdom = function _mkdom() {
	    var reHasYield = /<yield\b/i,
	        reYieldAll = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig,
	        reYieldSrc = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig,
	        reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig;
	    var rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' },
	        tblTags = IE_VERSION && IE_VERSION < 10 ? SPECIAL_TAGS_REGEX : /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;
	
	    /**
	     * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be
	     * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.
	     *
	     * @param   {string} templ  - The template coming from the custom tag definition
	     * @param   {string} [html] - HTML content that comes from the DOM element where you
	     *           will mount the tag, mostly the original tag in the page
	     * @returns {HTMLElement} DOM element with _templ_ merged through `YIELD` with the _html_.
	     */
	    function _mkdom(templ, html) {
	      var match = templ && templ.match(/^\s*<([-\w]+)/),
	          tagName = match && match[1].toLowerCase(),
	          el = mkEl('div', isSVGTag(tagName));
	
	      // replace all the yield tags with the tag inner html
	      templ = replaceYield(templ, html);
	
	      /* istanbul ignore next */
	      if (tblTags.test(tagName)) el = specialTags(el, templ, tagName);else setInnerHTML(el, templ);
	
	      el.stub = true;
	
	      return el;
	    }
	
	    /*
	      Creates the root element for table or select child elements:
	      tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup
	    */
	    function specialTags(el, templ, tagName) {
	      var select = tagName[0] === 'o',
	          parent = select ? 'select>' : 'table>';
	
	      // trim() is important here, this ensures we don't have artifacts,
	      // so we can check if we have only one element inside the parent
	      el.innerHTML = '<' + parent + templ.trim() + '</' + parent;
	      parent = el.firstChild;
	
	      // returns the immediate parent if tr/th/td/col is the only element, if not
	      // returns the whole tree, as this can include additional elements
	      if (select) {
	        parent.selectedIndex = -1; // for IE9, compatible w/current riot behavior
	      } else {
	          // avoids insertion of cointainer inside container (ex: tbody inside tbody)
	          var tname = rootEls[tagName];
	          if (tname && parent.childElementCount === 1) parent = $(tname, parent);
	        }
	      return parent;
	    }
	
	    /*
	      Replace the yield tag from any tag template with the innerHTML of the
	      original tag in the page
	    */
	    function replaceYield(templ, html) {
	      // do nothing if no yield
	      if (!reHasYield.test(templ)) return templ;
	
	      // be careful with #1343 - string on the source having `$1`
	      var src = {};
	
	      html = html && html.replace(reYieldSrc, function (_, ref, text) {
	        src[ref] = src[ref] || text; // preserve first definition
	        return '';
	      }).trim();
	
	      return templ.replace(reYieldDest, function (_, ref, def) {
	        // yield with from - to attrs
	        return src[ref] || def || '';
	      }).replace(reYieldAll, function (_, def) {
	        // yield without any "from"
	        return html || def || '';
	      });
	    }
	
	    return _mkdom;
	  }();
	
	  /**
	   * Convert the item looped into an object used to extend the child tag properties
	   * @param   { Object } expr - object containing the keys used to extend the children tags
	   * @param   { * } key - value to assign to the new object returned
	   * @param   { * } val - value containing the position of the item in the array
	   * @returns { Object } - new object containing the values of the original item
	   *
	   * The variables 'key' and 'val' are arbitrary.
	   * They depend on the collection type looped (Array, Object)
	   * and on the expression used on the each tag
	   *
	   */
	  function mkitem(expr, key, val) {
	    var item = {};
	    item[expr.key] = key;
	    if (expr.pos) item[expr.pos] = val;
	    return item;
	  }
	
	  /**
	   * Unmount the redundant tags
	   * @param   { Array } items - array containing the current items to loop
	   * @param   { Array } tags - array containing all the children tags
	   */
	  function unmountRedundant(items, tags) {
	
	    var i = tags.length,
	        j = items.length,
	        t;
	
	    while (i > j) {
	      t = tags[--i];
	      tags.splice(i, 1);
	      t.unmount();
	    }
	  }
	
	  /**
	   * Move the nested custom tags in non custom loop tags
	   * @param   { Object } child - non custom loop tag
	   * @param   { Number } i - current position of the loop tag
	   */
	  function moveNestedTags(child, i) {
	    Object.keys(child.tags).forEach(function (tagName) {
	      var tag = child.tags[tagName];
	      if (isArray(tag)) each(tag, function (t) {
	        moveChildTag(t, tagName, i);
	      });else moveChildTag(tag, tagName, i);
	    });
	  }
	
	  /**
	   * Adds the elements for a virtual tag
	   * @param { Tag } tag - the tag whose root's children will be inserted or appended
	   * @param { Node } src - the node that will do the inserting or appending
	   * @param { Tag } target - only if inserting, insert before this tag's first child
	   */
	  function addVirtual(tag, src, target) {
	    var el = tag._root,
	        sib;
	    tag._virts = [];
	    while (el) {
	      sib = el.nextSibling;
	      if (target) src.insertBefore(el, target._root);else src.appendChild(el);
	
	      tag._virts.push(el); // hold for unmounting
	      el = sib;
	    }
	  }
	
	  /**
	   * Move virtual tag and all child nodes
	   * @param { Tag } tag - first child reference used to start move
	   * @param { Node } src  - the node that will do the inserting
	   * @param { Tag } target - insert before this tag's first child
	   * @param { Number } len - how many child nodes to move
	   */
	  function moveVirtual(tag, src, target, len) {
	    var el = tag._root,
	        sib,
	        i = 0;
	    for (; i < len; i++) {
	      sib = el.nextSibling;
	      src.insertBefore(el, target._root);
	      el = sib;
	    }
	  }
	
	  /**
	   * Manage tags having the 'each'
	   * @param   { Object } dom - DOM node we need to loop
	   * @param   { Tag } parent - parent tag instance where the dom node is contained
	   * @param   { String } expr - string contained in the 'each' attribute
	   */
	  function _each(dom, parent, expr) {
	
	    // remove the each property from the original tag
	    remAttr(dom, 'each');
	
	    var mustReorder = _typeof(getAttr(dom, 'no-reorder')) !== T_STRING || remAttr(dom, 'no-reorder'),
	        tagName = getTagName(dom),
	        impl = __tagImpl[tagName] || { tmpl: getOuterHTML(dom) },
	        useRoot = SPECIAL_TAGS_REGEX.test(tagName),
	        root = dom.parentNode,
	        ref = document.createTextNode(''),
	        child = getTag(dom),
	        isOption = tagName.toLowerCase() === 'option',
	        // the option tags must be treated differently
	    tags = [],
	        oldItems = [],
	        hasKeys,
	        isVirtual = dom.tagName == 'VIRTUAL';
	
	    // parse the each expression
	    expr = tmpl.loopKeys(expr);
	
	    // insert a marked where the loop tags will be injected
	    root.insertBefore(ref, dom);
	
	    // clean template code
	    parent.one('before-mount', function () {
	
	      // remove the original DOM node
	      dom.parentNode.removeChild(dom);
	      if (root.stub) root = parent.root;
	    }).on('update', function () {
	      // get the new items collection
	      var items = tmpl(expr.val, parent),
	
	      // create a fragment to hold the new DOM nodes to inject in the parent tag
	      frag = document.createDocumentFragment();
	
	      // object loop. any changes cause full redraw
	      if (!isArray(items)) {
	        hasKeys = items || false;
	        items = hasKeys ? Object.keys(items).map(function (key) {
	          return mkitem(expr, key, items[key]);
	        }) : [];
	      }
	
	      // loop all the new items
	      var i = 0,
	          itemsLength = items.length;
	
	      for (; i < itemsLength; i++) {
	        // reorder only if the items are objects
	        var item = items[i],
	            _mustReorder = mustReorder && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) == T_OBJECT && !hasKeys,
	            oldPos = oldItems.indexOf(item),
	            pos = ~oldPos && _mustReorder ? oldPos : i,
	
	        // does a tag exist in this position?
	        tag = tags[pos];
	
	        item = !hasKeys && expr.key ? mkitem(expr, item, i) : item;
	
	        // new tag
	        if (!_mustReorder && !tag // with no-reorder we just update the old tags
	         || _mustReorder && ! ~oldPos || !tag // by default we always try to reorder the DOM elements
	        ) {
	
	            tag = new Tag(impl, {
	              parent: parent,
	              isLoop: true,
	              hasImpl: !!__tagImpl[tagName],
	              root: useRoot ? root : dom.cloneNode(),
	              item: item
	            }, dom.innerHTML);
	
	            tag.mount();
	
	            if (isVirtual) tag._root = tag.root.firstChild; // save reference for further moves or inserts
	            // this tag must be appended
	            if (i == tags.length || !tags[i]) {
	              // fix 1581
	              if (isVirtual) addVirtual(tag, frag);else frag.appendChild(tag.root);
	            }
	            // this tag must be insert
	            else {
	                if (isVirtual) addVirtual(tag, root, tags[i]);else root.insertBefore(tag.root, tags[i].root); // #1374 some browsers reset selected here
	                oldItems.splice(i, 0, item);
	              }
	
	            tags.splice(i, 0, tag);
	            pos = i; // handled here so no move
	          } else tag.update(item, true);
	
	        // reorder the tag if it's not located in its previous position
	        if (pos !== i && _mustReorder && tags[i] // fix 1581 unable to reproduce it in a test!
	        ) {
	            // update the DOM
	            if (isVirtual) moveVirtual(tag, root, tags[i], dom.childNodes.length);else root.insertBefore(tag.root, tags[i].root);
	            // update the position attribute if it exists
	            if (expr.pos) tag[expr.pos] = i;
	            // move the old tag instance
	            tags.splice(i, 0, tags.splice(pos, 1)[0]);
	            // move the old item
	            oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
	            // if the loop tags are not custom
	            // we need to move all their custom tags into the right position
	            if (!child && tag.tags) moveNestedTags(tag, i);
	          }
	
	        // cache the original item to use it in the events bound to this node
	        // and its children
	        tag._item = item;
	        // cache the real parent tag internally
	        defineProperty(tag, '_parent', parent);
	      }
	
	      // remove the redundant tags
	      unmountRedundant(items, tags);
	
	      // insert the new nodes
	      if (isOption) {
	        root.appendChild(frag);
	
	        // #1374 FireFox bug in <option selected={expression}>
	        if (FIREFOX && !root.multiple) {
	          for (var n = 0; n < root.length; n++) {
	            if (root[n].__riot1374) {
	              root.selectedIndex = n; // clear other options
	              delete root[n].__riot1374;
	              break;
	            }
	          }
	        }
	      } else root.insertBefore(frag, ref);
	
	      // set the 'tags' property of the parent tag
	      // if child is 'undefined' it means that we don't need to set this property
	      // for example:
	      // we don't need store the `myTag.tags['div']` property if we are looping a div tag
	      // but we need to track the `myTag.tags['child']` property looping a custom child node named `child`
	      if (child) parent.tags[tagName] = tags;
	
	      // clone the items array
	      oldItems = items.slice();
	    });
	  }
	  /**
	   * Object that will be used to inject and manage the css of every tag instance
	   */
	  var styleManager = function (_riot) {
	
	    if (!window) return { // skip injection on the server
	      add: function add() {},
	      inject: function inject() {}
	    };
	
	    var styleNode = function () {
	      // create a new style element with the correct type
	      var newNode = mkEl('style');
	      setAttr(newNode, 'type', 'text/css');
	
	      // replace any user node or insert the new one into the head
	      var userNode = $('style[type=riot]');
	      if (userNode) {
	        if (userNode.id) newNode.id = userNode.id;
	        userNode.parentNode.replaceChild(newNode, userNode);
	      } else document.getElementsByTagName('head')[0].appendChild(newNode);
	
	      return newNode;
	    }();
	
	    // Create cache and shortcut to the correct property
	    var cssTextProp = styleNode.styleSheet,
	        stylesToInject = '';
	
	    // Expose the style node in a non-modificable property
	    Object.defineProperty(_riot, 'styleNode', {
	      value: styleNode,
	      writable: true
	    });
	
	    /**
	     * Public api
	     */
	    return {
	      /**
	       * Save a tag style to be later injected into DOM
	       * @param   { String } css [description]
	       */
	      add: function add(css) {
	        stylesToInject += css;
	      },
	      /**
	       * Inject all previously saved tag styles into DOM
	       * innerHTML seems slow: http://jsperf.com/riot-insert-style
	       */
	      inject: function inject() {
	        if (stylesToInject) {
	          if (cssTextProp) cssTextProp.cssText += stylesToInject;else styleNode.innerHTML += stylesToInject;
	          stylesToInject = '';
	        }
	      }
	    };
	  }(riot);
	
	  function parseNamedElements(root, tag, childTags, forceParsingNamed) {
	
	    walk(root, function (dom) {
	      if (dom.nodeType == 1) {
	        dom.isLoop = dom.isLoop || dom.parentNode && dom.parentNode.isLoop || getAttr(dom, 'each') ? 1 : 0;
	
	        // custom child tag
	        if (childTags) {
	          var child = getTag(dom);
	
	          if (child && !dom.isLoop) childTags.push(initChildTag(child, { root: dom, parent: tag }, dom.innerHTML, tag));
	        }
	
	        if (!dom.isLoop || forceParsingNamed) setNamed(dom, tag, []);
	      }
	    });
	  }
	
	  function parseExpressions(root, tag, expressions) {
	
	    function addExpr(dom, val, extra) {
	      if (tmpl.hasExpr(val)) {
	        expressions.push(extend({ dom: dom, expr: val }, extra));
	      }
	    }
	
	    walk(root, function (dom) {
	      var type = dom.nodeType,
	          attr;
	
	      // text node
	      if (type == 3 && dom.parentNode.tagName != 'STYLE') addExpr(dom, dom.nodeValue);
	      if (type != 1) return;
	
	      /* element */
	
	      // loop
	      attr = getAttr(dom, 'each');
	
	      if (attr) {
	        _each(dom, tag, attr);return false;
	      }
	
	      // attribute expressions
	      each(dom.attributes, function (attr) {
	        var name = attr.name,
	            bool = name.split('__')[1];
	
	        addExpr(dom, attr.value, { attr: bool || name, bool: bool });
	        if (bool) {
	          remAttr(dom, name);return false;
	        }
	      });
	
	      // skip custom tags
	      if (getTag(dom)) return false;
	    });
	  }
	  function Tag(impl, conf, innerHTML) {
	
	    var self = riot.observable(this),
	        opts = inherit(conf.opts) || {},
	        parent = conf.parent,
	        isLoop = conf.isLoop,
	        hasImpl = conf.hasImpl,
	        item = cleanUpData(conf.item),
	        expressions = [],
	        childTags = [],
	        root = conf.root,
	        tagName = root.tagName.toLowerCase(),
	        attr = {},
	        propsInSyncWithParent = [],
	        dom;
	
	    // only call unmount if we have a valid __tagImpl (has name property)
	    if (impl.name && root._tag) root._tag.unmount(true);
	
	    // not yet mounted
	    this.isMounted = false;
	    root.isLoop = isLoop;
	
	    // keep a reference to the tag just created
	    // so we will be able to mount this tag multiple times
	    root._tag = this;
	
	    // create a unique id to this tag
	    // it could be handy to use it also to improve the virtual dom rendering speed
	    defineProperty(this, '_riot_id', ++__uid); // base 1 allows test !t._riot_id
	
	    extend(this, { parent: parent, root: root, opts: opts }, item);
	    // protect the "tags" property from being overridden
	    defineProperty(this, 'tags', {});
	
	    // grab attributes
	    each(root.attributes, function (el) {
	      var val = el.value;
	      // remember attributes with expressions only
	      if (tmpl.hasExpr(val)) attr[el.name] = val;
	    });
	
	    dom = mkdom(impl.tmpl, innerHTML);
	
	    // options
	    function updateOpts() {
	      var ctx = hasImpl && isLoop ? self : parent || self;
	
	      // update opts from current DOM attributes
	      each(root.attributes, function (el) {
	        var val = el.value;
	        opts[toCamel(el.name)] = tmpl.hasExpr(val) ? tmpl(val, ctx) : val;
	      });
	      // recover those with expressions
	      each(Object.keys(attr), function (name) {
	        opts[toCamel(name)] = tmpl(attr[name], ctx);
	      });
	    }
	
	    function normalizeData(data) {
	      for (var key in item) {
	        if (_typeof(self[key]) !== T_UNDEF && isWritable(self, key)) self[key] = data[key];
	      }
	    }
	
	    function inheritFromParent() {
	      if (!self.parent || !isLoop) return;
	      each(Object.keys(self.parent), function (k) {
	        // some properties must be always in sync with the parent tag
	        var mustSync = !RESERVED_WORDS_BLACKLIST.test(k) && contains(propsInSyncWithParent, k);
	        if (_typeof(self[k]) === T_UNDEF || mustSync) {
	          // track the property to keep in sync
	          // so we can keep it updated
	          if (!mustSync) propsInSyncWithParent.push(k);
	          self[k] = self.parent[k];
	        }
	      });
	    }
	
	    /**
	     * Update the tag expressions and options
	     * @param   { * }  data - data we want to use to extend the tag properties
	     * @param   { Boolean } isInherited - is this update coming from a parent tag?
	     * @returns { self }
	     */
	    defineProperty(this, 'update', function (data, isInherited) {
	
	      // make sure the data passed will not override
	      // the component core methods
	      data = cleanUpData(data);
	      // inherit properties from the parent
	      inheritFromParent();
	      // normalize the tag properties in case an item object was initially passed
	      if (data && isObject(item)) {
	        normalizeData(data);
	        item = data;
	      }
	      extend(self, data);
	      updateOpts();
	      self.trigger('update', data);
	      update(expressions, self);
	
	      // the updated event will be triggered
	      // once the DOM will be ready and all the re-flows are completed
	      // this is useful if you want to get the "real" root properties
	      // 4 ex: root.offsetWidth ...
	      if (isInherited && self.parent)
	        // closes #1599
	        self.parent.one('updated', function () {
	          self.trigger('updated');
	        });else rAF(function () {
	        self.trigger('updated');
	      });
	
	      return this;
	    });
	
	    defineProperty(this, 'mixin', function () {
	      each(arguments, function (mix) {
	        var instance;
	
	        mix = (typeof mix === 'undefined' ? 'undefined' : _typeof(mix)) === T_STRING ? riot.mixin(mix) : mix;
	
	        // check if the mixin is a function
	        if (isFunction(mix)) {
	          // create the new mixin instance
	          instance = new mix();
	          // save the prototype to loop it afterwards
	          mix = mix.prototype;
	        } else instance = mix;
	
	        // loop the keys in the function prototype or the all object keys
	        each(Object.getOwnPropertyNames(mix), function (key) {
	          // bind methods to self
	          if (key != 'init') self[key] = isFunction(instance[key]) ? instance[key].bind(self) : instance[key];
	        });
	
	        // init method will be called automatically
	        if (instance.init) instance.init.bind(self)();
	      });
	      return this;
	    });
	
	    defineProperty(this, 'mount', function () {
	
	      updateOpts();
	
	      // add global mixins
	      var globalMixin = riot.mixin(GLOBAL_MIXIN);
	      if (globalMixin) for (var i in globalMixin) {
	        if (globalMixin.hasOwnProperty(i)) self.mixin(globalMixin[i]);
	      } // initialiation
	      if (impl.fn) impl.fn.call(self, opts);
	
	      // parse layout after init. fn may calculate args for nested custom tags
	      parseExpressions(dom, self, expressions);
	
	      // mount the child tags
	      toggle(true);
	
	      // update the root adding custom attributes coming from the compiler
	      // it fixes also #1087
	      if (impl.attrs) walkAttributes(impl.attrs, function (k, v) {
	        setAttr(root, k, v);
	      });
	      if (impl.attrs || hasImpl) parseExpressions(self.root, self, expressions);
	
	      if (!self.parent || isLoop) self.update(item);
	
	      // internal use only, fixes #403
	      self.trigger('before-mount');
	
	      if (isLoop && !hasImpl) {
	        // update the root attribute for the looped elements
	        root = dom.firstChild;
	      } else {
	        while (dom.firstChild) {
	          root.appendChild(dom.firstChild);
	        }if (root.stub) root = parent.root;
	      }
	
	      defineProperty(self, 'root', root);
	
	      // parse the named dom nodes in the looped child
	      // adding them to the parent as well
	      if (isLoop) parseNamedElements(self.root, self.parent, null, true);
	
	      // if it's not a child tag we can trigger its mount event
	      if (!self.parent || self.parent.isMounted) {
	        self.isMounted = true;
	        self.trigger('mount');
	      }
	      // otherwise we need to wait that the parent event gets triggered
	      else self.parent.one('mount', function () {
	          // avoid to trigger the `mount` event for the tags
	          // not visible included in an if statement
	          if (!isInStub(self.root)) {
	            self.parent.isMounted = self.isMounted = true;
	            self.trigger('mount');
	          }
	        });
	    });
	
	    defineProperty(this, 'unmount', function (keepRootTag) {
	      var el = root,
	          p = el.parentNode,
	          ptag,
	          tagIndex = __virtualDom.indexOf(self);
	
	      self.trigger('before-unmount');
	
	      // remove this tag instance from the global virtualDom variable
	      if (~tagIndex) __virtualDom.splice(tagIndex, 1);
	
	      if (p) {
	
	        if (parent) {
	          ptag = getImmediateCustomParentTag(parent);
	          // remove this tag from the parent tags object
	          // if there are multiple nested tags with same name..
	          // remove this element form the array
	          if (isArray(ptag.tags[tagName])) each(ptag.tags[tagName], function (tag, i) {
	            if (tag._riot_id == self._riot_id) ptag.tags[tagName].splice(i, 1);
	          });else
	            // otherwise just delete the tag instance
	            ptag.tags[tagName] = undefined;
	        } else while (el.firstChild) {
	          el.removeChild(el.firstChild);
	        }if (!keepRootTag) p.removeChild(el);else {
	          // the riot-tag and the data-is attributes aren't needed anymore, remove them
	          remAttr(p, RIOT_TAG_IS);
	          remAttr(p, RIOT_TAG); // this will be removed in riot 3.0.0
	        }
	      }
	
	      if (this._virts) {
	        each(this._virts, function (v) {
	          if (v.parentNode) v.parentNode.removeChild(v);
	        });
	      }
	
	      self.trigger('unmount');
	      toggle();
	      self.off('*');
	      self.isMounted = false;
	      delete root._tag;
	    });
	
	    // proxy function to bind updates
	    // dispatched from a parent tag
	    function onChildUpdate(data) {
	      self.update(data, true);
	    }
	
	    function toggle(isMount) {
	
	      // mount/unmount children
	      each(childTags, function (child) {
	        child[isMount ? 'mount' : 'unmount']();
	      });
	
	      // listen/unlisten parent (events flow one way from parent to children)
	      if (!parent) return;
	      var evt = isMount ? 'on' : 'off';
	
	      // the loop tags will be always in sync with the parent automatically
	      if (isLoop) parent[evt]('unmount', self.unmount);else {
	        parent[evt]('update', onChildUpdate)[evt]('unmount', self.unmount);
	      }
	    }
	
	    // named elements available for fn
	    parseNamedElements(dom, this, childTags);
	  }
	  /**
	   * Attach an event to a DOM node
	   * @param { String } name - event name
	   * @param { Function } handler - event callback
	   * @param { Object } dom - dom node
	   * @param { Tag } tag - tag instance
	   */
	  function setEventHandler(name, handler, dom, tag) {
	
	    dom[name] = function (e) {
	
	      var ptag = tag._parent,
	          item = tag._item,
	          el;
	
	      if (!item) while (ptag && !item) {
	        item = ptag._item;
	        ptag = ptag._parent;
	      }
	
	      // cross browser event fix
	      e = e || window.event;
	
	      // override the event properties
	      if (isWritable(e, 'currentTarget')) e.currentTarget = dom;
	      if (isWritable(e, 'target')) e.target = e.srcElement;
	      if (isWritable(e, 'which')) e.which = e.charCode || e.keyCode;
	
	      e.item = item;
	
	      // prevent default behaviour (by default)
	      if (handler.call(tag, e) !== true && !/radio|check/.test(dom.type)) {
	        if (e.preventDefault) e.preventDefault();
	        e.returnValue = false;
	      }
	
	      if (!e.preventUpdate) {
	        el = item ? getImmediateCustomParentTag(ptag) : tag;
	        el.update();
	      }
	    };
	  }
	
	  /**
	   * Insert a DOM node replacing another one (used by if- attribute)
	   * @param   { Object } root - parent node
	   * @param   { Object } node - node replaced
	   * @param   { Object } before - node added
	   */
	  function insertTo(root, node, before) {
	    if (!root) return;
	    root.insertBefore(before, node);
	    root.removeChild(node);
	  }
	
	  /**
	   * Update the expressions in a Tag instance
	   * @param   { Array } expressions - expression that must be re evaluated
	   * @param   { Tag } tag - tag instance
	   */
	  function update(expressions, tag) {
	
	    each(expressions, function (expr, i) {
	
	      var dom = expr.dom,
	          attrName = expr.attr,
	          value = tmpl(expr.expr, tag),
	          parent = expr.dom.parentNode;
	
	      if (expr.bool) {
	        value = !!value;
	      } else if (value == null) {
	        value = '';
	      }
	
	      // #1638: regression of #1612, update the dom only if the value of the
	      // expression was changed
	      if (expr.value === value) {
	        return;
	      }
	      expr.value = value;
	
	      // textarea and text nodes has no attribute name
	      if (!attrName) {
	        // about #815 w/o replace: the browser converts the value to a string,
	        // the comparison by "==" does too, but not in the server
	        value += '';
	        // test for parent avoids error with invalid assignment to nodeValue
	        if (parent) {
	          if (parent.tagName === 'TEXTAREA') {
	            parent.value = value; // #1113
	            if (!IE_VERSION) dom.nodeValue = value; // #1625 IE throws here, nodeValue
	          } // will be available on 'updated'
	          else dom.nodeValue = value;
	        }
	        return;
	      }
	
	      // ~~#1612: look for changes in dom.value when updating the value~~
	      if (attrName === 'value') {
	        dom.value = value;
	        return;
	      }
	
	      // remove original attribute
	      remAttr(dom, attrName);
	
	      // event handler
	      if (isFunction(value)) {
	        setEventHandler(attrName, value, dom, tag);
	
	        // if- conditional
	      } else if (attrName == 'if') {
	          var stub = expr.stub,
	              add = function add() {
	            insertTo(stub.parentNode, stub, dom);
	          },
	              remove = function remove() {
	            insertTo(dom.parentNode, dom, stub);
	          };
	
	          // add to DOM
	          if (value) {
	            if (stub) {
	              add();
	              dom.inStub = false;
	              // avoid to trigger the mount event if the tags is not visible yet
	              // maybe we can optimize this avoiding to mount the tag at all
	              if (!isInStub(dom)) {
	                walk(dom, function (el) {
	                  if (el._tag && !el._tag.isMounted) el._tag.isMounted = !!el._tag.trigger('mount');
	                });
	              }
	            }
	            // remove from DOM
	          } else {
	              stub = expr.stub = stub || document.createTextNode('');
	              // if the parentNode is defined we can easily replace the tag
	              if (dom.parentNode) remove();
	              // otherwise we need to wait the updated event
	              else (tag.parent || tag).one('updated', remove);
	
	              dom.inStub = true;
	            }
	          // show / hide
	        } else if (attrName === 'show') {
	            dom.style.display = value ? '' : 'none';
	          } else if (attrName === 'hide') {
	            dom.style.display = value ? 'none' : '';
	          } else if (expr.bool) {
	            dom[attrName] = value;
	            if (value) setAttr(dom, attrName, attrName);
	            if (FIREFOX && attrName === 'selected' && dom.tagName === 'OPTION') {
	              dom.__riot1374 = value; // #1374
	            }
	          } else if (value === 0 || value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== T_OBJECT) {
	              // <img src="{ expr }">
	              if (startsWith(attrName, RIOT_PREFIX) && attrName != RIOT_TAG) {
	                attrName = attrName.slice(RIOT_PREFIX.length);
	              }
	              setAttr(dom, attrName, value);
	            }
	    });
	  }
	  /**
	   * Specialized function for looping an array-like collection with `each={}`
	   * @param   { Array } els - collection of items
	   * @param   {Function} fn - callback function
	   * @returns { Array } the array looped
	   */
	  function each(els, fn) {
	    var len = els ? els.length : 0;
	
	    for (var i = 0, el; i < len; i++) {
	      el = els[i];
	      // return false -> current item was removed by fn during the loop
	      if (el != null && fn(el, i) === false) i--;
	    }
	    return els;
	  }
	
	  /**
	   * Detect if the argument passed is a function
	   * @param   { * } v - whatever you want to pass to this function
	   * @returns { Boolean } -
	   */
	  function isFunction(v) {
	    return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === T_FUNCTION || false; // avoid IE problems
	  }
	
	  /**
	   * Get the outer html of any DOM node SVGs included
	   * @param   { Object } el - DOM node to parse
	   * @returns { String } el.outerHTML
	   */
	  function getOuterHTML(el) {
	    if (el.outerHTML) return el.outerHTML;
	    // some browsers do not support outerHTML on the SVGs tags
	    else {
	        var container = mkEl('div');
	        container.appendChild(el.cloneNode(true));
	        return container.innerHTML;
	      }
	  }
	
	  /**
	   * Set the inner html of any DOM node SVGs included
	   * @param { Object } container - DOM node where we will inject the new html
	   * @param { String } html - html to inject
	   */
	  function setInnerHTML(container, html) {
	    if (_typeof(container.innerHTML) != T_UNDEF) container.innerHTML = html;
	    // some browsers do not support innerHTML on the SVGs tags
	    else {
	        var doc = new DOMParser().parseFromString(html, 'application/xml');
	        container.appendChild(container.ownerDocument.importNode(doc.documentElement, true));
	      }
	  }
	
	  /**
	   * Checks wether a DOM node must be considered part of an svg document
	   * @param   { String }  name - tag name
	   * @returns { Boolean } -
	   */
	  function isSVGTag(name) {
	    return ~SVG_TAGS_LIST.indexOf(name);
	  }
	
	  /**
	   * Detect if the argument passed is an object, exclude null.
	   * NOTE: Use isObject(x) && !isArray(x) to excludes arrays.
	   * @param   { * } v - whatever you want to pass to this function
	   * @returns { Boolean } -
	   */
	  function isObject(v) {
	    return v && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === T_OBJECT; // typeof null is 'object'
	  }
	
	  /**
	   * Remove any DOM attribute from a node
	   * @param   { Object } dom - DOM node we want to update
	   * @param   { String } name - name of the property we want to remove
	   */
	  function remAttr(dom, name) {
	    dom.removeAttribute(name);
	  }
	
	  /**
	   * Convert a string containing dashes to camel case
	   * @param   { String } string - input string
	   * @returns { String } my-string -> myString
	   */
	  function toCamel(string) {
	    return string.replace(/-(\w)/g, function (_, c) {
	      return c.toUpperCase();
	    });
	  }
	
	  /**
	   * Get the value of any DOM attribute on a node
	   * @param   { Object } dom - DOM node we want to parse
	   * @param   { String } name - name of the attribute we want to get
	   * @returns { String | undefined } name of the node attribute whether it exists
	   */
	  function getAttr(dom, name) {
	    return dom.getAttribute(name);
	  }
	
	  /**
	   * Set any DOM attribute
	   * @param { Object } dom - DOM node we want to update
	   * @param { String } name - name of the property we want to set
	   * @param { String } val - value of the property we want to set
	   */
	  function setAttr(dom, name, val) {
	    dom.setAttribute(name, val);
	  }
	
	  /**
	   * Detect the tag implementation by a DOM node
	   * @param   { Object } dom - DOM node we need to parse to get its tag implementation
	   * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
	   */
	  function getTag(dom) {
	    return dom.tagName && __tagImpl[getAttr(dom, RIOT_TAG_IS) || getAttr(dom, RIOT_TAG) || dom.tagName.toLowerCase()];
	  }
	  /**
	   * Add a child tag to its parent into the `tags` object
	   * @param   { Object } tag - child tag instance
	   * @param   { String } tagName - key where the new tag will be stored
	   * @param   { Object } parent - tag instance where the new child tag will be included
	   */
	  function addChildTag(tag, tagName, parent) {
	    var cachedTag = parent.tags[tagName];
	
	    // if there are multiple children tags having the same name
	    if (cachedTag) {
	      // if the parent tags property is not yet an array
	      // create it adding the first cached tag
	      if (!isArray(cachedTag))
	        // don't add the same tag twice
	        if (cachedTag !== tag) parent.tags[tagName] = [cachedTag];
	      // add the new nested tag to the array
	      if (!contains(parent.tags[tagName], tag)) parent.tags[tagName].push(tag);
	    } else {
	      parent.tags[tagName] = tag;
	    }
	  }
	
	  /**
	   * Move the position of a custom tag in its parent tag
	   * @param   { Object } tag - child tag instance
	   * @param   { String } tagName - key where the tag was stored
	   * @param   { Number } newPos - index where the new tag will be stored
	   */
	  function moveChildTag(tag, tagName, newPos) {
	    var parent = tag.parent,
	        tags;
	    // no parent no move
	    if (!parent) return;
	
	    tags = parent.tags[tagName];
	
	    if (isArray(tags)) tags.splice(newPos, 0, tags.splice(tags.indexOf(tag), 1)[0]);else addChildTag(tag, tagName, parent);
	  }
	
	  /**
	   * Create a new child tag including it correctly into its parent
	   * @param   { Object } child - child tag implementation
	   * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
	   * @param   { String } innerHTML - inner html of the child node
	   * @param   { Object } parent - instance of the parent tag including the child custom tag
	   * @returns { Object } instance of the new child tag just created
	   */
	  function initChildTag(child, opts, innerHTML, parent) {
	    var tag = new Tag(child, opts, innerHTML),
	        tagName = getTagName(opts.root),
	        ptag = getImmediateCustomParentTag(parent);
	    // fix for the parent attribute in the looped elements
	    tag.parent = ptag;
	    // store the real parent tag
	    // in some cases this could be different from the custom parent tag
	    // for example in nested loops
	    tag._parent = parent;
	
	    // add this tag to the custom parent tag
	    addChildTag(tag, tagName, ptag);
	    // and also to the real parent tag
	    if (ptag !== parent) addChildTag(tag, tagName, parent);
	    // empty the child node once we got its template
	    // to avoid that its children get compiled multiple times
	    opts.root.innerHTML = '';
	
	    return tag;
	  }
	
	  /**
	   * Loop backward all the parents tree to detect the first custom parent tag
	   * @param   { Object } tag - a Tag instance
	   * @returns { Object } the instance of the first custom parent tag found
	   */
	  function getImmediateCustomParentTag(tag) {
	    var ptag = tag;
	    while (!getTag(ptag.root)) {
	      if (!ptag.parent) break;
	      ptag = ptag.parent;
	    }
	    return ptag;
	  }
	
	  /**
	   * Helper function to set an immutable property
	   * @param   { Object } el - object where the new property will be set
	   * @param   { String } key - object key where the new property will be stored
	   * @param   { * } value - value of the new property
	  * @param   { Object } options - set the propery overriding the default options
	   * @returns { Object } - the initial object
	   */
	  function defineProperty(el, key, value, options) {
	    Object.defineProperty(el, key, extend({
	      value: value,
	      enumerable: false,
	      writable: false,
	      configurable: true
	    }, options));
	    return el;
	  }
	
	  /**
	   * Get the tag name of any DOM node
	   * @param   { Object } dom - DOM node we want to parse
	   * @returns { String } name to identify this dom node in riot
	   */
	  function getTagName(dom) {
	    var child = getTag(dom),
	        namedTag = getAttr(dom, 'name'),
	        tagName = namedTag && !tmpl.hasExpr(namedTag) ? namedTag : child ? child.name : dom.tagName.toLowerCase();
	
	    return tagName;
	  }
	
	  /**
	   * Extend any object with other properties
	   * @param   { Object } src - source object
	   * @returns { Object } the resulting extended object
	   *
	   * var obj = { foo: 'baz' }
	   * extend(obj, {bar: 'bar', foo: 'bar'})
	   * console.log(obj) => {bar: 'bar', foo: 'bar'}
	   *
	   */
	  function extend(src) {
	    var obj,
	        args = arguments;
	    for (var i = 1; i < args.length; ++i) {
	      if (obj = args[i]) {
	        for (var key in obj) {
	          // check if this property of the source object could be overridden
	          if (isWritable(src, key)) src[key] = obj[key];
	        }
	      }
	    }
	    return src;
	  }
	
	  /**
	   * Check whether an array contains an item
	   * @param   { Array } arr - target array
	   * @param   { * } item - item to test
	   * @returns { Boolean } Does 'arr' contain 'item'?
	   */
	  function contains(arr, item) {
	    return ~arr.indexOf(item);
	  }
	
	  /**
	   * Check whether an object is a kind of array
	   * @param   { * } a - anything
	   * @returns {Boolean} is 'a' an array?
	   */
	  function isArray(a) {
	    return Array.isArray(a) || a instanceof Array;
	  }
	
	  /**
	   * Detect whether a property of an object could be overridden
	   * @param   { Object }  obj - source object
	   * @param   { String }  key - object property
	   * @returns { Boolean } is this property writable?
	   */
	  function isWritable(obj, key) {
	    var props = Object.getOwnPropertyDescriptor(obj, key);
	    return _typeof(obj[key]) === T_UNDEF || props && props.writable;
	  }
	
	  /**
	   * With this function we avoid that the internal Tag methods get overridden
	   * @param   { Object } data - options we want to use to extend the tag instance
	   * @returns { Object } clean object without containing the riot internal reserved words
	   */
	  function cleanUpData(data) {
	    if (!(data instanceof Tag) && !(data && _typeof(data.trigger) == T_FUNCTION)) return data;
	
	    var o = {};
	    for (var key in data) {
	      if (!RESERVED_WORDS_BLACKLIST.test(key)) o[key] = data[key];
	    }
	    return o;
	  }
	
	  /**
	   * Walk down recursively all the children tags starting dom node
	   * @param   { Object }   dom - starting node where we will start the recursion
	   * @param   { Function } fn - callback to transform the child node just found
	   */
	  function walk(dom, fn) {
	    if (dom) {
	      // stop the recursion
	      if (fn(dom) === false) return;else {
	        dom = dom.firstChild;
	
	        while (dom) {
	          walk(dom, fn);
	          dom = dom.nextSibling;
	        }
	      }
	    }
	  }
	
	  /**
	   * Minimize risk: only zero or one _space_ between attr & value
	   * @param   { String }   html - html string we want to parse
	   * @param   { Function } fn - callback function to apply on any attribute found
	   */
	  function walkAttributes(html, fn) {
	    var m,
	        re = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;
	
	    while (m = re.exec(html)) {
	      fn(m[1].toLowerCase(), m[2] || m[3] || m[4]);
	    }
	  }
	
	  /**
	   * Check whether a DOM node is in stub mode, useful for the riot 'if' directive
	   * @param   { Object }  dom - DOM node we want to parse
	   * @returns { Boolean } -
	   */
	  function isInStub(dom) {
	    while (dom) {
	      if (dom.inStub) return true;
	      dom = dom.parentNode;
	    }
	    return false;
	  }
	
	  /**
	   * Create a generic DOM node
	   * @param   { String } name - name of the DOM node we want to create
	   * @param   { Boolean } isSvg - should we use a SVG as parent node?
	   * @returns { Object } DOM node just created
	   */
	  function mkEl(name, isSvg) {
	    return isSvg ? document.createElementNS('http://www.w3.org/2000/svg', 'svg') : document.createElement(name);
	  }
	
	  /**
	   * Shorter and fast way to select multiple nodes in the DOM
	   * @param   { String } selector - DOM selector
	   * @param   { Object } ctx - DOM node where the targets of our search will is located
	   * @returns { Object } dom nodes found
	   */
	  function $$(selector, ctx) {
	    return (ctx || document).querySelectorAll(selector);
	  }
	
	  /**
	   * Shorter and fast way to select a single node in the DOM
	   * @param   { String } selector - unique dom selector
	   * @param   { Object } ctx - DOM node where the target of our search will is located
	   * @returns { Object } dom node found
	   */
	  function $(selector, ctx) {
	    return (ctx || document).querySelector(selector);
	  }
	
	  /**
	   * Simple object prototypal inheritance
	   * @param   { Object } parent - parent object
	   * @returns { Object } child instance
	   */
	  function inherit(parent) {
	    function Child() {}
	    Child.prototype = parent;
	    return new Child();
	  }
	
	  /**
	   * Get the name property needed to identify a DOM node in riot
	   * @param   { Object } dom - DOM node we need to parse
	   * @returns { String | undefined } give us back a string to identify this dom node
	   */
	  function getNamedKey(dom) {
	    return getAttr(dom, 'id') || getAttr(dom, 'name');
	  }
	
	  /**
	   * Set the named properties of a tag element
	   * @param { Object } dom - DOM node we need to parse
	   * @param { Object } parent - tag instance where the named dom element will be eventually added
	   * @param { Array } keys - list of all the tag instance properties
	   */
	  function setNamed(dom, parent, keys) {
	    // get the key value we want to add to the tag instance
	    var key = getNamedKey(dom),
	        isArr,
	
	    // add the node detected to a tag instance using the named property
	    add = function add(value) {
	      // avoid to override the tag properties already set
	      if (contains(keys, key)) return;
	      // check whether this value is an array
	      isArr = isArray(value);
	      // if the key was never set
	      if (!value)
	        // set it once on the tag instance
	        parent[key] = dom;
	        // if it was an array and not yet set
	      else if (!isArr || isArr && !contains(value, dom)) {
	          // add the dom node into the array
	          if (isArr) value.push(dom);else parent[key] = [value, dom];
	        }
	    };
	
	    // skip the elements with no named properties
	    if (!key) return;
	
	    // check whether this key has been already evaluated
	    if (tmpl.hasExpr(key))
	      // wait the first updated event only once
	      parent.one('mount', function () {
	        key = getNamedKey(dom);
	        add(parent[key]);
	      });else add(parent[key]);
	  }
	
	  /**
	   * Faster String startsWith alternative
	   * @param   { String } src - source string
	   * @param   { String } str - test string
	   * @returns { Boolean } -
	   */
	  function startsWith(src, str) {
	    return src.slice(0, str.length) === str;
	  }
	
	  /**
	   * requestAnimationFrame function
	   * Adapted from https://gist.github.com/paulirish/1579671, license MIT
	   */
	  var rAF = function (w) {
	    var raf = w.requestAnimationFrame || w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame;
	
	    if (!raf || /iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent)) {
	      // buggy iOS6
	      var lastTime = 0;
	
	      raf = function raf(cb) {
	        var nowtime = Date.now(),
	            timeout = Math.max(16 - (nowtime - lastTime), 0);
	        setTimeout(function () {
	          cb(lastTime = nowtime + timeout);
	        }, timeout);
	      };
	    }
	    return raf;
	  }(window || {});
	
	  /**
	   * Mount a tag creating new Tag instance
	   * @param   { Object } root - dom node where the tag will be mounted
	   * @param   { String } tagName - name of the riot tag we want to mount
	   * @param   { Object } opts - options to pass to the Tag instance
	   * @returns { Tag } a new Tag instance
	   */
	  function mountTo(root, tagName, opts) {
	    var tag = __tagImpl[tagName],
	
	    // cache the inner HTML to fix #855
	    innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;
	
	    // clear the inner html
	    root.innerHTML = '';
	
	    if (tag && root) tag = new Tag(tag, { root: root, opts: opts }, innerHTML);
	
	    if (tag && tag.mount) {
	      tag.mount();
	      // add this tag to the virtualDom variable
	      if (!contains(__virtualDom, tag)) __virtualDom.push(tag);
	    }
	
	    return tag;
	  }
	  /**
	   * Riot public api
	   */
	
	  // share methods for other riot parts, e.g. compiler
	  riot.util = { brackets: brackets, tmpl: tmpl };
	
	  /**
	   * Create a mixin that could be globally shared across all the tags
	   */
	  riot.mixin = function () {
	    var mixins = {},
	        globals = mixins[GLOBAL_MIXIN] = {},
	        _id = 0;
	
	    /**
	     * Create/Return a mixin by its name
	     * @param   { String }  name - mixin name (global mixin if object)
	     * @param   { Object }  mixin - mixin logic
	     * @param   { Boolean } g - is global?
	     * @returns { Object }  the mixin logic
	     */
	    return function (name, mixin, g) {
	      // Unnamed global
	      if (isObject(name)) {
	        riot.mixin('__unnamed_' + _id++, name, true);
	        return;
	      }
	
	      var store = g ? globals : mixins;
	
	      // Getter
	      if (!mixin) {
	        if (_typeof(store[name]) === T_UNDEF) {
	          throw new Error('Unregistered mixin: ' + name);
	        }
	        return store[name];
	      }
	      // Setter
	      if (isFunction(mixin)) {
	        extend(mixin.prototype, store[name] || {});
	        store[name] = mixin;
	      } else {
	        store[name] = extend(store[name] || {}, mixin);
	      }
	    };
	  }();
	
	  /**
	   * Create a new riot tag implementation
	   * @param   { String }   name - name/id of the new riot tag
	   * @param   { String }   html - tag template
	   * @param   { String }   css - custom tag css
	   * @param   { String }   attrs - root tag attributes
	   * @param   { Function } fn - user function
	   * @returns { String } name/id of the tag just created
	   */
	  riot.tag = function (name, html, css, attrs, fn) {
	    if (isFunction(attrs)) {
	      fn = attrs;
	      if (/^[\w\-]+\s?=/.test(css)) {
	        attrs = css;
	        css = '';
	      } else attrs = '';
	    }
	    if (css) {
	      if (isFunction(css)) fn = css;else styleManager.add(css);
	    }
	    name = name.toLowerCase();
	    __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn };
	    return name;
	  };
	
	  /**
	   * Create a new riot tag implementation (for use by the compiler)
	   * @param   { String }   name - name/id of the new riot tag
	   * @param   { String }   html - tag template
	   * @param   { String }   css - custom tag css
	   * @param   { String }   attrs - root tag attributes
	   * @param   { Function } fn - user function
	   * @returns { String } name/id of the tag just created
	   */
	  riot.tag2 = function (name, html, css, attrs, fn) {
	    if (css) styleManager.add(css);
	    //if (bpair) riot.settings.brackets = bpair
	    __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn };
	    return name;
	  };
	
	  /**
	   * Mount a tag using a specific tag implementation
	   * @param   { String } selector - tag DOM selector
	   * @param   { String } tagName - tag implementation name
	   * @param   { Object } opts - tag logic
	   * @returns { Array } new tags instances
	   */
	  riot.mount = function (selector, tagName, opts) {
	
	    var els,
	        allTags,
	        tags = [];
	
	    // helper functions
	
	    function addRiotTags(arr) {
	      var list = '';
	      each(arr, function (e) {
	        if (!/[^-\w]/.test(e)) {
	          e = e.trim().toLowerCase();
	          list += ',[' + RIOT_TAG_IS + '="' + e + '"],[' + RIOT_TAG + '="' + e + '"]';
	        }
	      });
	      return list;
	    }
	
	    function selectAllTags() {
	      var keys = Object.keys(__tagImpl);
	      return keys + addRiotTags(keys);
	    }
	
	    function pushTags(root) {
	      if (root.tagName) {
	        var riotTag = getAttr(root, RIOT_TAG_IS) || getAttr(root, RIOT_TAG);
	
	        // have tagName? force riot-tag to be the same
	        if (tagName && riotTag !== tagName) {
	          riotTag = tagName;
	          setAttr(root, RIOT_TAG_IS, tagName);
	          setAttr(root, RIOT_TAG, tagName); // this will be removed in riot 3.0.0
	        }
	        var tag = mountTo(root, riotTag || root.tagName.toLowerCase(), opts);
	
	        if (tag) tags.push(tag);
	      } else if (root.length) {
	        each(root, pushTags); // assume nodeList
	      }
	    }
	
	    // ----- mount code -----
	
	    // inject styles into DOM
	    styleManager.inject();
	
	    if (isObject(tagName)) {
	      opts = tagName;
	      tagName = 0;
	    }
	
	    // crawl the DOM to find the tag
	    if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === T_STRING) {
	      if (selector === '*')
	        // select all the tags registered
	        // and also the tags found with the riot-tag attribute set
	        selector = allTags = selectAllTags();else
	        // or just the ones named like the selector
	        selector += addRiotTags(selector.split(/, */));
	
	      // make sure to pass always a selector
	      // to the querySelectorAll function
	      els = selector ? $$(selector) : [];
	    } else
	      // probably you have passed already a tag or a NodeList
	      els = selector;
	
	    // select all the registered and mount them inside their root elements
	    if (tagName === '*') {
	      // get all custom tags
	      tagName = allTags || selectAllTags();
	      // if the root els it's just a single tag
	      if (els.tagName) els = $$(tagName, els);else {
	        // select all the children for all the different root elements
	        var nodeList = [];
	        each(els, function (_el) {
	          nodeList.push($$(tagName, _el));
	        });
	        els = nodeList;
	      }
	      // get rid of the tagName
	      tagName = 0;
	    }
	
	    pushTags(els);
	
	    return tags;
	  };
	
	  /**
	   * Update all the tags instances created
	   * @returns { Array } all the tags instances
	   */
	  riot.update = function () {
	    return each(__virtualDom, function (tag) {
	      tag.update();
	    });
	  };
	
	  /**
	   * Export the Virtual DOM
	   */
	  riot.vdom = __virtualDom;
	
	  /**
	   * Export the Tag constructor
	   */
	  riot.Tag = Tag;
	  // support CommonJS, AMD & browser
	  /* istanbul ignore next */
	  if (( false ? 'undefined' : _typeof(exports)) === T_OBJECT) module.exports = riot;else if (( false ? 'undefined' : _typeof(__webpack_require__(10))) === T_FUNCTION && _typeof(__webpack_require__(11)) !== T_UNDEF) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return riot;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else window.riot = riot;
	})(typeof window != 'undefined' ? window : void 0);

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 11 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {'use strict';
	
	riot.tag2('app', '<nav> <a href="#{item}" class="{active: name == item}" each="{item in items}">{item}</a> </nav> <article> <h1>{name}</h1> <div name="content"> <yield> </div> </article>', '', '', function (opts) {
	    var _this = this;
	
	    this.items = ['index', 'loader', 'plugin'];
	    this.on('mount', function () {
	        riot.route.start(true);
	        riot.route(function (name) {
	            if (name == 'index' || !name) {
	                _this.content.innerHTML = __webpack_require__(4);
	            } else {
	                _this.content.innerHTML = __webpack_require__(13)("./" + name + '.md');
	            }
	            _this.name = name;
	            _this.update();
	        });
	        riot.route('index');
	    });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./loader.md": 14,
		"./plugin.md": 15
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 13;


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<h2 id=\"what-is-a-loader-\">What is a loader?</h2>\n<p>Loading modules - Webpack loader chains <code>style!css!less</code></p>\n<ul>\n<li>Formats</li>\n<li>Preloaders, Postloaders</li>\n</ul>\n<p>Example</p>\n<pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\" >var</span> webpack <span class=\"token operator\" >=</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'webpack'</span><span class=\"token punctuation\" >)</span>\n\nmodule<span class=\"token punctuation\" >.</span>exports <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    entry<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./index.js'</span><span class=\"token punctuation\" >,</span>\n    output<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./'</span><span class=\"token punctuation\" >,</span>\n        filename<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'bundle.js'</span><span class=\"token punctuation\" >,</span>\n        sourceMapFilename<span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"[name].js.map\"</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    module<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        preLoaders<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n            <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.html$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'riotjs'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n            <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.js$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'eslint!source-map'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n        loaders<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n            <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.md$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'html!markdown'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n            <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.html$|\\.js$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'babel'</span><span class=\"token punctuation\" >,</span> query<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> presets<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'es2015-riot'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n            <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.less$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'style!css!less'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >]</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    plugins<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n        <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >webpack<span class=\"token punctuation\" >.</span>ProvidePlugin</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n            riot<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'riot'</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n    <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    eslint<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        configFile<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./.eslintrc'</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    devtool<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'source-map'</span>\n<span class=\"token punctuation\" >}</span></code></pre>";

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"what-is-a-plugin-\">What is a plugin?</h1>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */
	
	;(function () {
	
	  /**
	   * Block-Level Grammar
	   */
	
	  var block = {
	    newline: /^\n+/,
	    code: /^( {4}[^\n]+\n*)+/,
	    fences: noop,
	    hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	    nptable: noop,
	    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	    blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	    list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	    html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	    table: noop,
	    paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	    text: /^[^\n]+/
	  };
	
	  block.bullet = /(?:[*+-]|\d+\.)/;
	  block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	  block.item = replace(block.item, 'gm')(/bull/g, block.bullet)();
	
	  block.list = replace(block.list)(/bull/g, block.bullet)('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')('def', '\\n+(?=' + block.def.source + ')')();
	
	  block.blockquote = replace(block.blockquote)('def', block.def)();
	
	  block._tag = '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code' + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo' + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';
	
	  block.html = replace(block.html)('comment', /<!--[\s\S]*?-->/)('closed', /<(tag)[\s\S]+?<\/\1>/)('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();
	
	  block.paragraph = replace(block.paragraph)('hr', block.hr)('heading', block.heading)('lheading', block.lheading)('blockquote', block.blockquote)('tag', '<' + block._tag)('def', block.def)();
	
	  /**
	   * Normal Block Grammar
	   */
	
	  block.normal = merge({}, block);
	
	  /**
	   * GFM Block Grammar
	   */
	
	  block.gfm = merge({}, block.normal, {
	    fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	    paragraph: /^/,
	    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	  });
	
	  block.gfm.paragraph = replace(block.paragraph)('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|')();
	
	  /**
	   * GFM + Tables Block Grammar
	   */
	
	  block.tables = merge({}, block.gfm, {
	    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	  });
	
	  /**
	   * Block Lexer
	   */
	
	  function Lexer(options) {
	    this.tokens = [];
	    this.tokens.links = {};
	    this.options = options || marked.defaults;
	    this.rules = block.normal;
	
	    if (this.options.gfm) {
	      if (this.options.tables) {
	        this.rules = block.tables;
	      } else {
	        this.rules = block.gfm;
	      }
	    }
	  }
	
	  /**
	   * Expose Block Rules
	   */
	
	  Lexer.rules = block;
	
	  /**
	   * Static Lex Method
	   */
	
	  Lexer.lex = function (src, options) {
	    var lexer = new Lexer(options);
	    return lexer.lex(src);
	  };
	
	  /**
	   * Preprocessing
	   */
	
	  Lexer.prototype.lex = function (src) {
	    src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');
	
	    return this.token(src, true);
	  };
	
	  /**
	   * Lexing
	   */
	
	  Lexer.prototype.token = function (src, top, bq) {
	    var src = src.replace(/^ +$/gm, ''),
	        next,
	        loose,
	        cap,
	        bull,
	        b,
	        item,
	        space,
	        i,
	        l;
	
	    while (src) {
	      // newline
	      if (cap = this.rules.newline.exec(src)) {
	        src = src.substring(cap[0].length);
	        if (cap[0].length > 1) {
	          this.tokens.push({
	            type: 'space'
	          });
	        }
	      }
	
	      // code
	      if (cap = this.rules.code.exec(src)) {
	        src = src.substring(cap[0].length);
	        cap = cap[0].replace(/^ {4}/gm, '');
	        this.tokens.push({
	          type: 'code',
	          text: !this.options.pedantic ? cap.replace(/\n+$/, '') : cap
	        });
	        continue;
	      }
	
	      // fences (gfm)
	      if (cap = this.rules.fences.exec(src)) {
	        src = src.substring(cap[0].length);
	        this.tokens.push({
	          type: 'code',
	          lang: cap[2],
	          text: cap[3] || ''
	        });
	        continue;
	      }
	
	      // heading
	      if (cap = this.rules.heading.exec(src)) {
	        src = src.substring(cap[0].length);
	        this.tokens.push({
	          type: 'heading',
	          depth: cap[1].length,
	          text: cap[2]
	        });
	        continue;
	      }
	
	      // table no leading pipe (gfm)
	      if (top && (cap = this.rules.nptable.exec(src))) {
	        src = src.substring(cap[0].length);
	
	        item = {
	          type: 'table',
	          header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	          cells: cap[3].replace(/\n$/, '').split('\n')
	        };
	
	        for (i = 0; i < item.align.length; i++) {
	          if (/^ *-+: *$/.test(item.align[i])) {
	            item.align[i] = 'right';
	          } else if (/^ *:-+: *$/.test(item.align[i])) {
	            item.align[i] = 'center';
	          } else if (/^ *:-+ *$/.test(item.align[i])) {
	            item.align[i] = 'left';
	          } else {
	            item.align[i] = null;
	          }
	        }
	
	        for (i = 0; i < item.cells.length; i++) {
	          item.cells[i] = item.cells[i].split(/ *\| */);
	        }
	
	        this.tokens.push(item);
	
	        continue;
	      }
	
	      // lheading
	      if (cap = this.rules.lheading.exec(src)) {
	        src = src.substring(cap[0].length);
	        this.tokens.push({
	          type: 'heading',
	          depth: cap[2] === '=' ? 1 : 2,
	          text: cap[1]
	        });
	        continue;
	      }
	
	      // hr
	      if (cap = this.rules.hr.exec(src)) {
	        src = src.substring(cap[0].length);
	        this.tokens.push({
	          type: 'hr'
	        });
	        continue;
	      }
	
	      // blockquote
	      if (cap = this.rules.blockquote.exec(src)) {
	        src = src.substring(cap[0].length);
	
	        this.tokens.push({
	          type: 'blockquote_start'
	        });
	
	        cap = cap[0].replace(/^ *> ?/gm, '');
	
	        // Pass `top` to keep the current
	        // "toplevel" state. This is exactly
	        // how markdown.pl works.
	        this.token(cap, top, true);
	
	        this.tokens.push({
	          type: 'blockquote_end'
	        });
	
	        continue;
	      }
	
	      // list
	      if (cap = this.rules.list.exec(src)) {
	        src = src.substring(cap[0].length);
	        bull = cap[2];
	
	        this.tokens.push({
	          type: 'list_start',
	          ordered: bull.length > 1
	        });
	
	        // Get each top-level item.
	        cap = cap[0].match(this.rules.item);
	
	        next = false;
	        l = cap.length;
	        i = 0;
	
	        for (; i < l; i++) {
	          item = cap[i];
	
	          // Remove the list item's bullet
	          // so it is seen as the next token.
	          space = item.length;
	          item = item.replace(/^ *([*+-]|\d+\.) +/, '');
	
	          // Outdent whatever the
	          // list item contains. Hacky.
	          if (~item.indexOf('\n ')) {
	            space -= item.length;
	            item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
	          }
	
	          // Determine whether the next list item belongs here.
	          // Backpedal if it does not belong in this list.
	          if (this.options.smartLists && i !== l - 1) {
	            b = block.bullet.exec(cap[i + 1])[0];
	            if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	              src = cap.slice(i + 1).join('\n') + src;
	              i = l - 1;
	            }
	          }
	
	          // Determine whether item is loose or not.
	          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	          // for discount behavior.
	          loose = next || /\n\n(?!\s*$)/.test(item);
	          if (i !== l - 1) {
	            next = item.charAt(item.length - 1) === '\n';
	            if (!loose) loose = next;
	          }
	
	          this.tokens.push({
	            type: loose ? 'loose_item_start' : 'list_item_start'
	          });
	
	          // Recurse.
	          this.token(item, false, bq);
	
	          this.tokens.push({
	            type: 'list_item_end'
	          });
	        }
	
	        this.tokens.push({
	          type: 'list_end'
	        });
	
	        continue;
	      }
	
	      // html
	      if (cap = this.rules.html.exec(src)) {
	        src = src.substring(cap[0].length);
	        this.tokens.push({
	          type: this.options.sanitize ? 'paragraph' : 'html',
	          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	          text: cap[0]
	        });
	        continue;
	      }
	
	      // def
	      if (!bq && top && (cap = this.rules.def.exec(src))) {
	        src = src.substring(cap[0].length);
	        this.tokens.links[cap[1].toLowerCase()] = {
	          href: cap[2],
	          title: cap[3]
	        };
	        continue;
	      }
	
	      // table (gfm)
	      if (top && (cap = this.rules.table.exec(src))) {
	        src = src.substring(cap[0].length);
	
	        item = {
	          type: 'table',
	          header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	          cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	        };
	
	        for (i = 0; i < item.align.length; i++) {
	          if (/^ *-+: *$/.test(item.align[i])) {
	            item.align[i] = 'right';
	          } else if (/^ *:-+: *$/.test(item.align[i])) {
	            item.align[i] = 'center';
	          } else if (/^ *:-+ *$/.test(item.align[i])) {
	            item.align[i] = 'left';
	          } else {
	            item.align[i] = null;
	          }
	        }
	
	        for (i = 0; i < item.cells.length; i++) {
	          item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, '').split(/ *\| */);
	        }
	
	        this.tokens.push(item);
	
	        continue;
	      }
	
	      // top-level paragraph
	      if (top && (cap = this.rules.paragraph.exec(src))) {
	        src = src.substring(cap[0].length);
	        this.tokens.push({
	          type: 'paragraph',
	          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
	        });
	        continue;
	      }
	
	      // text
	      if (cap = this.rules.text.exec(src)) {
	        // Top-level should never reach here.
	        src = src.substring(cap[0].length);
	        this.tokens.push({
	          type: 'text',
	          text: cap[0]
	        });
	        continue;
	      }
	
	      if (src) {
	        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
	      }
	    }
	
	    return this.tokens;
	  };
	
	  /**
	   * Inline-Level Grammar
	   */
	
	  var inline = {
	    escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	    autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	    url: noop,
	    tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	    link: /^!?\[(inside)\]\(href\)/,
	    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	    nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	    em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	    code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	    br: /^ {2,}\n(?!\s*$)/,
	    del: noop,
	    text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	  };
	
	  inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	  inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
	
	  inline.link = replace(inline.link)('inside', inline._inside)('href', inline._href)();
	
	  inline.reflink = replace(inline.reflink)('inside', inline._inside)();
	
	  /**
	   * Normal Inline Grammar
	   */
	
	  inline.normal = merge({}, inline);
	
	  /**
	   * Pedantic Inline Grammar
	   */
	
	  inline.pedantic = merge({}, inline.normal, {
	    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	  });
	
	  /**
	   * GFM Inline Grammar
	   */
	
	  inline.gfm = merge({}, inline.normal, {
	    escape: replace(inline.escape)('])', '~|])')(),
	    url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	    del: /^~~(?=\S)([\s\S]*?\S)~~/,
	    text: replace(inline.text)(']|', '~]|')('|', '|https?://|')()
	  });
	
	  /**
	   * GFM + Line Breaks Inline Grammar
	   */
	
	  inline.breaks = merge({}, inline.gfm, {
	    br: replace(inline.br)('{2,}', '*')(),
	    text: replace(inline.gfm.text)('{2,}', '*')()
	  });
	
	  /**
	   * Inline Lexer & Compiler
	   */
	
	  function InlineLexer(links, options) {
	    this.options = options || marked.defaults;
	    this.links = links;
	    this.rules = inline.normal;
	    this.renderer = this.options.renderer || new Renderer();
	    this.renderer.options = this.options;
	
	    if (!this.links) {
	      throw new Error('Tokens array requires a `links` property.');
	    }
	
	    if (this.options.gfm) {
	      if (this.options.breaks) {
	        this.rules = inline.breaks;
	      } else {
	        this.rules = inline.gfm;
	      }
	    } else if (this.options.pedantic) {
	      this.rules = inline.pedantic;
	    }
	  }
	
	  /**
	   * Expose Inline Rules
	   */
	
	  InlineLexer.rules = inline;
	
	  /**
	   * Static Lexing/Compiling Method
	   */
	
	  InlineLexer.output = function (src, links, options) {
	    var inline = new InlineLexer(links, options);
	    return inline.output(src);
	  };
	
	  /**
	   * Lexing/Compiling
	   */
	
	  InlineLexer.prototype.output = function (src) {
	    var out = '',
	        link,
	        text,
	        href,
	        cap;
	
	    while (src) {
	      // escape
	      if (cap = this.rules.escape.exec(src)) {
	        src = src.substring(cap[0].length);
	        out += cap[1];
	        continue;
	      }
	
	      // autolink
	      if (cap = this.rules.autolink.exec(src)) {
	        src = src.substring(cap[0].length);
	        if (cap[2] === '@') {
	          text = cap[1].charAt(6) === ':' ? this.mangle(cap[1].substring(7)) : this.mangle(cap[1]);
	          href = this.mangle('mailto:') + text;
	        } else {
	          text = escape(cap[1]);
	          href = text;
	        }
	        out += this.renderer.link(href, null, text);
	        continue;
	      }
	
	      // url (gfm)
	      if (!this.inLink && (cap = this.rules.url.exec(src))) {
	        src = src.substring(cap[0].length);
	        text = escape(cap[1]);
	        href = text;
	        out += this.renderer.link(href, null, text);
	        continue;
	      }
	
	      // tag
	      if (cap = this.rules.tag.exec(src)) {
	        if (!this.inLink && /^<a /i.test(cap[0])) {
	          this.inLink = true;
	        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	          this.inLink = false;
	        }
	        src = src.substring(cap[0].length);
	        out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
	        continue;
	      }
	
	      // link
	      if (cap = this.rules.link.exec(src)) {
	        src = src.substring(cap[0].length);
	        this.inLink = true;
	        out += this.outputLink(cap, {
	          href: cap[2],
	          title: cap[3]
	        });
	        this.inLink = false;
	        continue;
	      }
	
	      // reflink, nolink
	      if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
	        src = src.substring(cap[0].length);
	        link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	        link = this.links[link.toLowerCase()];
	        if (!link || !link.href) {
	          out += cap[0].charAt(0);
	          src = cap[0].substring(1) + src;
	          continue;
	        }
	        this.inLink = true;
	        out += this.outputLink(cap, link);
	        this.inLink = false;
	        continue;
	      }
	
	      // strong
	      if (cap = this.rules.strong.exec(src)) {
	        src = src.substring(cap[0].length);
	        out += this.renderer.strong(this.output(cap[2] || cap[1]));
	        continue;
	      }
	
	      // em
	      if (cap = this.rules.em.exec(src)) {
	        src = src.substring(cap[0].length);
	        out += this.renderer.em(this.output(cap[2] || cap[1]));
	        continue;
	      }
	
	      // code
	      if (cap = this.rules.code.exec(src)) {
	        src = src.substring(cap[0].length);
	        out += this.renderer.codespan(escape(cap[2], true));
	        continue;
	      }
	
	      // br
	      if (cap = this.rules.br.exec(src)) {
	        src = src.substring(cap[0].length);
	        out += this.renderer.br();
	        continue;
	      }
	
	      // del (gfm)
	      if (cap = this.rules.del.exec(src)) {
	        src = src.substring(cap[0].length);
	        out += this.renderer.del(this.output(cap[1]));
	        continue;
	      }
	
	      // text
	      if (cap = this.rules.text.exec(src)) {
	        src = src.substring(cap[0].length);
	        out += this.renderer.text(escape(this.smartypants(cap[0])));
	        continue;
	      }
	
	      if (src) {
	        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
	      }
	    }
	
	    return out;
	  };
	
	  /**
	   * Compile Link
	   */
	
	  InlineLexer.prototype.outputLink = function (cap, link) {
	    var href = escape(link.href),
	        title = link.title ? escape(link.title) : null;
	
	    return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
	  };
	
	  /**
	   * Smartypants Transformations
	   */
	
	  InlineLexer.prototype.smartypants = function (text) {
	    if (!this.options.smartypants) return text;
	    return text
	    // em-dashes
	    .replace(/---/g, '—')
	    // en-dashes
	    .replace(/--/g, '–')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
	    // closing singles & apostrophes
	    .replace(/'/g, '’')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
	    // closing doubles
	    .replace(/"/g, '”')
	    // ellipses
	    .replace(/\.{3}/g, '…');
	  };
	
	  /**
	   * Mangle Links
	   */
	
	  InlineLexer.prototype.mangle = function (text) {
	    if (!this.options.mangle) return text;
	    var out = '',
	        l = text.length,
	        i = 0,
	        ch;
	
	    for (; i < l; i++) {
	      ch = text.charCodeAt(i);
	      if (Math.random() > 0.5) {
	        ch = 'x' + ch.toString(16);
	      }
	      out += '&#' + ch + ';';
	    }
	
	    return out;
	  };
	
	  /**
	   * Renderer
	   */
	
	  function Renderer(options) {
	    this.options = options || {};
	  }
	
	  Renderer.prototype.code = function (code, lang, escaped) {
	    if (this.options.highlight) {
	      var out = this.options.highlight(code, lang);
	      if (out != null && out !== code) {
	        escaped = true;
	        code = out;
	      }
	    }
	
	    if (!lang) {
	      return '<pre><code>' + (escaped ? code : escape(code, true)) + '\n</code></pre>';
	    }
	
	    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '\n</code></pre>\n';
	  };
	
	  Renderer.prototype.blockquote = function (quote) {
	    return '<blockquote>\n' + quote + '</blockquote>\n';
	  };
	
	  Renderer.prototype.html = function (html) {
	    return html;
	  };
	
	  Renderer.prototype.heading = function (text, level, raw) {
	    return '<h' + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-') + '">' + text + '</h' + level + '>\n';
	  };
	
	  Renderer.prototype.hr = function () {
	    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	  };
	
	  Renderer.prototype.list = function (body, ordered) {
	    var type = ordered ? 'ol' : 'ul';
	    return '<' + type + '>\n' + body + '</' + type + '>\n';
	  };
	
	  Renderer.prototype.listitem = function (text) {
	    return '<li>' + text + '</li>\n';
	  };
	
	  Renderer.prototype.paragraph = function (text) {
	    return '<p>' + text + '</p>\n';
	  };
	
	  Renderer.prototype.table = function (header, body) {
	    return '<table>\n' + '<thead>\n' + header + '</thead>\n' + '<tbody>\n' + body + '</tbody>\n' + '</table>\n';
	  };
	
	  Renderer.prototype.tablerow = function (content) {
	    return '<tr>\n' + content + '</tr>\n';
	  };
	
	  Renderer.prototype.tablecell = function (content, flags) {
	    var type = flags.header ? 'th' : 'td';
	    var tag = flags.align ? '<' + type + ' style="text-align:' + flags.align + '">' : '<' + type + '>';
	    return tag + content + '</' + type + '>\n';
	  };
	
	  // span level renderer
	  Renderer.prototype.strong = function (text) {
	    return '<strong>' + text + '</strong>';
	  };
	
	  Renderer.prototype.em = function (text) {
	    return '<em>' + text + '</em>';
	  };
	
	  Renderer.prototype.codespan = function (text) {
	    return '<code>' + text + '</code>';
	  };
	
	  Renderer.prototype.br = function () {
	    return this.options.xhtml ? '<br/>' : '<br>';
	  };
	
	  Renderer.prototype.del = function (text) {
	    return '<del>' + text + '</del>';
	  };
	
	  Renderer.prototype.link = function (href, title, text) {
	    if (this.options.sanitize) {
	      try {
	        var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
	      } catch (e) {
	        return '';
	      }
	      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	        return '';
	      }
	    }
	    var out = '<a href="' + href + '"';
	    if (title) {
	      out += ' title="' + title + '"';
	    }
	    out += '>' + text + '</a>';
	    return out;
	  };
	
	  Renderer.prototype.image = function (href, title, text) {
	    var out = '<img src="' + href + '" alt="' + text + '"';
	    if (title) {
	      out += ' title="' + title + '"';
	    }
	    out += this.options.xhtml ? '/>' : '>';
	    return out;
	  };
	
	  Renderer.prototype.text = function (text) {
	    return text;
	  };
	
	  /**
	   * Parsing & Compiling
	   */
	
	  function Parser(options) {
	    this.tokens = [];
	    this.token = null;
	    this.options = options || marked.defaults;
	    this.options.renderer = this.options.renderer || new Renderer();
	    this.renderer = this.options.renderer;
	    this.renderer.options = this.options;
	  }
	
	  /**
	   * Static Parse Method
	   */
	
	  Parser.parse = function (src, options, renderer) {
	    var parser = new Parser(options, renderer);
	    return parser.parse(src);
	  };
	
	  /**
	   * Parse Loop
	   */
	
	  Parser.prototype.parse = function (src) {
	    this.inline = new InlineLexer(src.links, this.options, this.renderer);
	    this.tokens = src.reverse();
	
	    var out = '';
	    while (this.next()) {
	      out += this.tok();
	    }
	
	    return out;
	  };
	
	  /**
	   * Next Token
	   */
	
	  Parser.prototype.next = function () {
	    return this.token = this.tokens.pop();
	  };
	
	  /**
	   * Preview Next Token
	   */
	
	  Parser.prototype.peek = function () {
	    return this.tokens[this.tokens.length - 1] || 0;
	  };
	
	  /**
	   * Parse Text Tokens
	   */
	
	  Parser.prototype.parseText = function () {
	    var body = this.token.text;
	
	    while (this.peek().type === 'text') {
	      body += '\n' + this.next().text;
	    }
	
	    return this.inline.output(body);
	  };
	
	  /**
	   * Parse Current Token
	   */
	
	  Parser.prototype.tok = function () {
	    switch (this.token.type) {
	      case 'space':
	        {
	          return '';
	        }
	      case 'hr':
	        {
	          return this.renderer.hr();
	        }
	      case 'heading':
	        {
	          return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
	        }
	      case 'code':
	        {
	          return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
	        }
	      case 'table':
	        {
	          var header = '',
	              body = '',
	              i,
	              row,
	              cell,
	              flags,
	              j;
	
	          // header
	          cell = '';
	          for (i = 0; i < this.token.header.length; i++) {
	            flags = { header: true, align: this.token.align[i] };
	            cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), { header: true, align: this.token.align[i] });
	          }
	          header += this.renderer.tablerow(cell);
	
	          for (i = 0; i < this.token.cells.length; i++) {
	            row = this.token.cells[i];
	
	            cell = '';
	            for (j = 0; j < row.length; j++) {
	              cell += this.renderer.tablecell(this.inline.output(row[j]), { header: false, align: this.token.align[j] });
	            }
	
	            body += this.renderer.tablerow(cell);
	          }
	          return this.renderer.table(header, body);
	        }
	      case 'blockquote_start':
	        {
	          var body = '';
	
	          while (this.next().type !== 'blockquote_end') {
	            body += this.tok();
	          }
	
	          return this.renderer.blockquote(body);
	        }
	      case 'list_start':
	        {
	          var body = '',
	              ordered = this.token.ordered;
	
	          while (this.next().type !== 'list_end') {
	            body += this.tok();
	          }
	
	          return this.renderer.list(body, ordered);
	        }
	      case 'list_item_start':
	        {
	          var body = '';
	
	          while (this.next().type !== 'list_item_end') {
	            body += this.token.type === 'text' ? this.parseText() : this.tok();
	          }
	
	          return this.renderer.listitem(body);
	        }
	      case 'loose_item_start':
	        {
	          var body = '';
	
	          while (this.next().type !== 'list_item_end') {
	            body += this.tok();
	          }
	
	          return this.renderer.listitem(body);
	        }
	      case 'html':
	        {
	          var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
	          return this.renderer.html(html);
	        }
	      case 'paragraph':
	        {
	          return this.renderer.paragraph(this.inline.output(this.token.text));
	        }
	      case 'text':
	        {
	          return this.renderer.paragraph(this.parseText());
	        }
	    }
	  };
	
	  /**
	   * Helpers
	   */
	
	  function escape(html, encode) {
	    return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
	  }
	
	  function unescape(html) {
	    return html.replace(/&([#\w]+);/g, function (_, n) {
	      n = n.toLowerCase();
	      if (n === 'colon') return ':';
	      if (n.charAt(0) === '#') {
	        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
	      }
	      return '';
	    });
	  }
	
	  function replace(regex, opt) {
	    regex = regex.source;
	    opt = opt || '';
	    return function self(name, val) {
	      if (!name) return new RegExp(regex, opt);
	      val = val.source || val;
	      val = val.replace(/(^|[^\[])\^/g, '$1');
	      regex = regex.replace(name, val);
	      return self;
	    };
	  }
	
	  function noop() {}
	  noop.exec = noop;
	
	  function merge(obj) {
	    var i = 1,
	        target,
	        key;
	
	    for (; i < arguments.length; i++) {
	      target = arguments[i];
	      for (key in target) {
	        if (Object.prototype.hasOwnProperty.call(target, key)) {
	          obj[key] = target[key];
	        }
	      }
	    }
	
	    return obj;
	  }
	
	  /**
	   * Marked
	   */
	
	  function marked(src, opt, callback) {
	    if (callback || typeof opt === 'function') {
	      if (!callback) {
	        callback = opt;
	        opt = null;
	      }
	
	      opt = merge({}, marked.defaults, opt || {});
	
	      var highlight = opt.highlight,
	          tokens,
	          pending,
	          i = 0;
	
	      try {
	        tokens = Lexer.lex(src, opt);
	      } catch (e) {
	        return callback(e);
	      }
	
	      pending = tokens.length;
	
	      var done = function done(err) {
	        if (err) {
	          opt.highlight = highlight;
	          return callback(err);
	        }
	
	        var out;
	
	        try {
	          out = Parser.parse(tokens, opt);
	        } catch (e) {
	          err = e;
	        }
	
	        opt.highlight = highlight;
	
	        return err ? callback(err) : callback(null, out);
	      };
	
	      if (!highlight || highlight.length < 3) {
	        return done();
	      }
	
	      delete opt.highlight;
	
	      if (!pending) return done();
	
	      for (; i < tokens.length; i++) {
	        (function (token) {
	          if (token.type !== 'code') {
	            return --pending || done();
	          }
	          return highlight(token.text, token.lang, function (err, code) {
	            if (err) return done(err);
	            if (code == null || code === token.text) {
	              return --pending || done();
	            }
	            token.text = code;
	            token.escaped = true;
	            --pending || done();
	          });
	        })(tokens[i]);
	      }
	
	      return;
	    }
	    try {
	      if (opt) opt = merge({}, marked.defaults, opt);
	      return Parser.parse(Lexer.lex(src, opt), opt);
	    } catch (e) {
	      e.message += '\nPlease report this to https://github.com/chjj/marked.';
	      if ((opt || marked.defaults).silent) {
	        return '<p>An error occured:</p><pre>' + escape(e.message + '', true) + '</pre>';
	      }
	      throw e;
	    }
	  }
	
	  /**
	   * Options
	   */
	
	  marked.options = marked.setOptions = function (opt) {
	    merge(marked.defaults, opt);
	    return marked;
	  };
	
	  marked.defaults = {
	    gfm: true,
	    tables: true,
	    breaks: false,
	    pedantic: false,
	    sanitize: false,
	    sanitizer: null,
	    mangle: true,
	    smartLists: false,
	    silent: false,
	    highlight: null,
	    langPrefix: 'lang-',
	    smartypants: false,
	    headerPrefix: '',
	    renderer: new Renderer(),
	    xhtml: false
	  };
	
	  /**
	   * Expose
	   */
	
	  marked.Parser = Parser;
	  marked.parser = Parser.parse;
	
	  marked.Renderer = Renderer;
	
	  marked.Lexer = Lexer;
	  marked.lexer = Lexer.lex;
	
	  marked.InlineLexer = InlineLexer;
	  marked.inlineLexer = InlineLexer.output;
	
	  marked.parse = marked;
	
	  if (typeof module !== 'undefined' && ( false ? 'undefined' : _typeof(exports)) === 'object') {
	    module.exports = marked;
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return marked;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    this.marked = marked;
	  }
	}).call(function () {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map