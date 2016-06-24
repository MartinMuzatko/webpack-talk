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
	
	var _README = __webpack_require__(11);
	
	var _README2 = _interopRequireDefault(_README);
	
	__webpack_require__(12);
	
	var _riot = __webpack_require__(16);
	
	var _riot2 = _interopRequireDefault(_riot);
	
	__webpack_require__(19);
	
	__webpack_require__(24);
	
	var _marked = __webpack_require__(26);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_marked2.default.Renderer();
	
	document.body.innerHTML = '<app>' + _README2.default + '</app>';
	
	_riot2.default.mount('*');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"intro-to-frontend-automation\">Intro to frontend automation</h1>\n<p>Webpack can do a lot of stuff.\nNot only does webpack <strong>transpile</strong>, <strong>compile</strong> and <strong>preprocess</strong> your source and then bundle them. It is also capable of helping you to code more accurately and also faster with <strong>Linting</strong>, <strong>Sourcemaps</strong> and <strong>Dev Server</strong>.</p>\n<h2 id=\"how-does-one-tool-do-all-that-\">How does one tool do all that?</h2>\n<p><img src=\"https://webpack.github.io/assets/what-is-webpack.png\" alt=\"webpack\"></p>\n<h3 id=\"preprocessing-transpiling-templating\">Preprocessing/Transpiling/Templating</h3>\n<ul>\n<li>JS<ul>\n<li>Coffeescript</li>\n<li>Typescript</li>\n<li>Babel (ES6)</li>\n</ul>\n</li>\n<li>CSS<ul>\n<li>Less</li>\n<li>Sass/Scss</li>\n<li>Stylus</li>\n<li>Postcss (Autoprefixer)</li>\n</ul>\n</li>\n<li>HTML<ul>\n<li>Yade</li>\n<li>HAML</li>\n<li>Mustache/Handlebars</li>\n<li>Smarty</li>\n<li>Markdown</li>\n<li>Riot</li>\n</ul>\n</li>\n</ul>\n<h3 id=\"dependency-management\">Dependency management</h3>\n<ul>\n<li>require(&#39;marked&#39;)</li>\n<li>import marked from &#39;marked&#39;</li>\n</ul>\n<h3 id=\"optimizing\">Optimizing</h3>\n<ul>\n<li>minify</li>\n<li>fallback (rgba &gt; hex)</li>\n</ul>\n<h3 id=\"tools\">Tools</h3>\n<ul>\n<li>Sourcemaps</li>\n<li>Devserver - Auto reload</li>\n<li>Linting</li>\n</ul>\n<h3 id=\"bundling\">Bundling</h3>\n<p>Webpack bundles all dynamic assets together into one distributable file. Or, if you want to, you can split the app in more than one part.</p>\n<h3 id=\"dependency-management\">Dependency management</h3>\n<pre class=\"language-undefined\"><code class=\"language-undefined\">What is a Module <span class=\"token punctuation\" >(</span>Anything really <span class=\"token operator\" >-</span> js<span class=\"token operator\" >/</span>html<span class=\"token operator\" >/</span>css<span class=\"token operator\" >/</span>md<span class=\"token punctuation\" >,</span> etc<span class=\"token punctuation\" >)</span>\nLoading modules <span class=\"token operator\" >-</span> Webpack loader chains <span class=\"token punctuation\" >(</span>style<span class=\"token operator\" >!</span>css<span class=\"token operator\" >!</span>less<span class=\"token punctuation\" >)</span>\n    Formats\n    Preloaders<span class=\"token punctuation\" >,</span> Postloaders\nPlugins extend loaders <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span>\nJS module formats</code></pre>";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?minimize!./../node_modules/postcss-loader/index.js!./../node_modules/less-loader/index.js!./main.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?minimize!./../node_modules/postcss-loader/index.js!./../node_modules/less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Cousine);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Marvel:400,700);", ""]);
	
	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}code[class*=language-],pre[class*=language-]{color:#000;background:none;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{position:relative;margin:.5em 0;box-shadow:-1px 0 0 0 #358ccb,0 0 0 1px #dfdfdf;border-left:10px solid #358ccb;background-color:#fdfdfd;background-image:linear-gradient(transparent 50%,rgba(69,142,209,.04) 0);background-size:3em 3em;background-origin:content-box;overflow:visible;padding:0}code[class*=language]{max-height:inherit;height:100%;padding:0 1em;display:block;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background-color:#fdfdfd;box-sizing:border-box;margin-bottom:1em}:not(pre)>code[class*=language-]{position:relative;padding:.2em;border-radius:.3em;color:#c92c2c;border:1px solid rgba(0,0,0,.1);display:inline;white-space:normal}pre[class*=language-]:after,pre[class*=language-]:before{content:'';z-index:-2;display:block;position:absolute;bottom:.75em;left:.18em;width:40%;height:20%;max-height:13em;box-shadow:0 13px 8px #979797;transform:rotate(-2deg)}:not(pre)>code[class*=language-]:after,pre[class*=language-]:after{right:.75em;left:auto;transform:rotate(2deg)}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#7d8b99}.token.punctuation{color:#5f6364}.token.boolean,.token.constant,.token.deleted,.token.function-name,.token.number,.token.property,.token.symbol,.token.tag{color:#c92c2c}.token.attr-name,.token.builtin,.token.char,.token.function,.token.inserted,.token.selector,.token.string{color:#2f9c0a}.token.entity,.token.operator,.token.url,.token.variable{color:#a67f59;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.class-name,.token.keyword{color:#1990b8}.token.important,.token.regex{color:#e90}.language-css .token.string,.style .token.string{color:#a67f59;background:hsla(0,0%,100%,.5)}.token.important{font-weight:400}.token.bold{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.namespace{opacity:.7}@media screen and (max-width:767px){pre[class*=language-]:after,pre[class*=language-]:before{bottom:14px;box-shadow:none}}.token.cr:before,.token.lf:before,.token.tab:not(:empty):before{color:#e0d7d1}pre[class*=language-].line-numbers{padding-left:0}pre[class*=language-].line-numbers code{padding-left:3.8em}pre[class*=language-].line-numbers .line-numbers-rows{left:0}pre[class*=language-][data-line]{padding-top:0;padding-bottom:0;padding-left:0}pre[data-line] code{position:relative;padding-left:4em}pre .line-highlight{margin-top:0}[flex-offset=\"0\"]{margin-left:0}[flex-offset=\"5\"]{margin-left:5%}[flex-offset=\"10\"]{margin-left:10%}[flex-offset=\"15\"]{margin-left:15%}[flex-offset=\"20\"]{margin-left:20%}[flex-offset=\"25\"]{margin-left:25%}[flex-offset=\"30\"]{margin-left:30%}[flex-offset=\"35\"]{margin-left:35%}[flex-offset=\"40\"]{margin-left:40%}[flex-offset=\"45\"]{margin-left:45%}[flex-offset=\"50\"]{margin-left:50%}[flex-offset=\"55\"]{margin-left:55%}[flex-offset=\"60\"]{margin-left:60%}[flex-offset=\"65\"]{margin-left:65%}[flex-offset=\"70\"]{margin-left:70%}[flex-offset=\"75\"]{margin-left:75%}[flex-offset=\"80\"]{margin-left:80%}[flex-offset=\"85\"]{margin-left:85%}[flex-offset=\"90\"]{margin-left:90%}[flex-offset=\"95\"]{margin-left:95%}[flex-offset=\"33\"]{margin-left:33.33333%}[flex-offset=\"66\"]{margin-left:66.66667%}[flex-order=\"0\"]{-ms-flex-order:0;order:0}[flex-order=\"1\"]{-ms-flex-order:1;order:1}[flex-order=\"2\"]{-ms-flex-order:2;order:2}[flex-order=\"3\"]{-ms-flex-order:3;order:3}[flex-order=\"4\"]{-ms-flex-order:4;order:4}[flex-order=\"5\"]{-ms-flex-order:5;order:5}[flex-order=\"6\"]{-ms-flex-order:6;order:6}[flex-order=\"7\"]{-ms-flex-order:7;order:7}[flex-order=\"8\"]{-ms-flex-order:8;order:8}[flex-order=\"9\"]{-ms-flex-order:9;order:9}[flex-order=\"10\"]{-ms-flex-order:10;order:10}[flex-order=\"11\"]{-ms-flex-order:11;order:11}[flex-order=\"12\"]{-ms-flex-order:12;order:12}[flex-order=\"13\"]{-ms-flex-order:13;order:13}[flex-order=\"14\"]{-ms-flex-order:14;order:14}[flex-order=\"15\"]{-ms-flex-order:15;order:15}[flex-order=\"16\"]{-ms-flex-order:16;order:16}[flex-order=\"17\"]{-ms-flex-order:17;order:17}[flex-order=\"18\"]{-ms-flex-order:18;order:18}[flex-order=\"19\"]{-ms-flex-order:19;order:19}[flex-order=\"20\"]{-ms-flex-order:20;order:20}[layout]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}[layout]>*{box-sizing:border-box}[layout=column]{-ms-flex-direction:column;flex-direction:column}[layout=row]{-ms-flex-direction:row;flex-direction:row}[layout-align]{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch}[layout-align^=start]{-ms-flex-pack:start;justify-content:flex-start}[layout-align^=center]{-ms-flex-pack:center;justify-content:center}[layout-align^=end]{-ms-flex-pack:end;justify-content:flex-end}[layout-align^=space-around]{-ms-flex-pack:distribute;justify-content:space-around}[layout-align^=space-between]{-ms-flex-pack:justify;justify-content:space-between}[layout-align$=start]{-ms-flex-align:start;-ms-grid-row-align:flex-start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start}[layout-align$=center]{-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}[layout-align$=center]>*{max-width:100%}[layout-align$=end]{-ms-flex-align:end;-ms-grid-row-align:flex-end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end}[layout-align=center],[layout-align=end],[layout-align=space-around],[layout-align=space-between],[layout-align=start]{-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch}[flex]{-ms-flex:1;flex:1}[flex-start]{margin-bottom:auto}[flex-end]{margin-top:auto}[flex-none]{-ms-flex:0 0 auto;flex:0 0 auto}[flex-initial]{-ms-flex:0 1 auto;flex:0 1 auto}[flex-noshrink]{-ms-flex:1 0 auto;flex:1 0 auto}[flex-auto]{-ms-flex:1 1 auto;flex:1 1 auto}[flex-grow]{-ms-flex:1 1 100%;flex:1 1 100%}[flex],[layout=row]>[flex]{max-height:100%}[layout=column]>[flex]{max-width:100%}[layout=row]>[flex=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%}[layout=column]>[flex=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-height:5%}[layout=row]>[flex=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%}[layout=column]>[flex=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-height:10%}[layout=row]>[flex=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%}[layout=column]>[flex=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-height:15%}[layout=row]>[flex=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%}[layout=column]>[flex=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-height:20%}[layout=row]>[flex=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%}[layout=column]>[flex=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-height:25%}[layout=row]>[flex=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%}[layout=column]>[flex=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-height:30%}[layout=row]>[flex=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%}[layout=column]>[flex=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-height:35%}[layout=row]>[flex=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%}[layout=column]>[flex=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-height:40%}[layout=row]>[flex=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%}[layout=column]>[flex=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-height:45%}[layout=row]>[flex=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%}[layout=column]>[flex=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-height:50%}[layout=row]>[flex=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%}[layout=column]>[flex=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-height:55%}[layout=row]>[flex=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%}[layout=column]>[flex=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-height:60%}[layout=row]>[flex=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%}[layout=column]>[flex=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-height:65%}[layout=row]>[flex=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%}[layout=column]>[flex=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-height:70%}[layout=row]>[flex=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%}[layout=column]>[flex=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-height:75%}[layout=row]>[flex=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%}[layout=column]>[flex=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-height:80%}[layout=row]>[flex=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%}[layout=column]>[flex=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-height:85%}[layout=row]>[flex=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%}[layout=column]>[flex=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-height:90%}[layout=row]>[flex=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%}[layout=column]>[flex=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-height:95%}[layout=row]>[flex=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%}[layout=column]>[flex=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-height:100%}[layout=row]>[flex=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%}[layout=column]>[flex=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-height:33.33%}[layout=row]>[flex=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%}[layout=column]>[flex=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-height:66.66%}[hide]{display:none}@media (max-width:599px){[flex-offset-sm=\"0\"]{margin-left:0}[flex-offset-sm=\"5\"]{margin-left:5%}[flex-offset-sm=\"10\"]{margin-left:10%}[flex-offset-sm=\"15\"]{margin-left:15%}[flex-offset-sm=\"20\"]{margin-left:20%}[flex-offset-sm=\"25\"]{margin-left:25%}[flex-offset-sm=\"30\"]{margin-left:30%}[flex-offset-sm=\"35\"]{margin-left:35%}[flex-offset-sm=\"40\"]{margin-left:40%}[flex-offset-sm=\"45\"]{margin-left:45%}[flex-offset-sm=\"50\"]{margin-left:50%}[flex-offset-sm=\"55\"]{margin-left:55%}[flex-offset-sm=\"60\"]{margin-left:60%}[flex-offset-sm=\"65\"]{margin-left:65%}[flex-offset-sm=\"70\"]{margin-left:70%}[flex-offset-sm=\"75\"]{margin-left:75%}[flex-offset-sm=\"80\"]{margin-left:80%}[flex-offset-sm=\"85\"]{margin-left:85%}[flex-offset-sm=\"90\"]{margin-left:90%}[flex-offset-sm=\"95\"]{margin-left:95%}[flex-offset-sm=\"33\"]{margin-left:33.33333%}[flex-offset-sm=\"66\"]{margin-left:66.66667%}[flex-order-sm=\"0\"]{-ms-flex-order:0;order:0}[flex-order-sm=\"1\"]{-ms-flex-order:1;order:1}[flex-order-sm=\"2\"]{-ms-flex-order:2;order:2}[flex-order-sm=\"3\"]{-ms-flex-order:3;order:3}[flex-order-sm=\"4\"]{-ms-flex-order:4;order:4}[flex-order-sm=\"5\"]{-ms-flex-order:5;order:5}[flex-order-sm=\"6\"]{-ms-flex-order:6;order:6}[flex-order-sm=\"7\"]{-ms-flex-order:7;order:7}[flex-order-sm=\"8\"]{-ms-flex-order:8;order:8}[flex-order-sm=\"9\"]{-ms-flex-order:9;order:9}[flex-order-sm=\"10\"]{-ms-flex-order:10;order:10}[flex-order-sm=\"11\"]{-ms-flex-order:11;order:11}[flex-order-sm=\"12\"]{-ms-flex-order:12;order:12}[flex-order-sm=\"13\"]{-ms-flex-order:13;order:13}[flex-order-sm=\"14\"]{-ms-flex-order:14;order:14}[flex-order-sm=\"15\"]{-ms-flex-order:15;order:15}[flex-order-sm=\"16\"]{-ms-flex-order:16;order:16}[flex-order-sm=\"17\"]{-ms-flex-order:17;order:17}[flex-order-sm=\"18\"]{-ms-flex-order:18;order:18}[flex-order-sm=\"19\"]{-ms-flex-order:19;order:19}[flex-order-sm=\"20\"]{-ms-flex-order:20;order:20}[layout-sm]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}[layout-sm]>*{box-sizing:border-box}[layout-sm=column]{-ms-flex-direction:column;flex-direction:column}[layout-sm=row]{-ms-flex-direction:row;flex-direction:row}[layout-align-sm]{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch}[layout-align-sm^=start]{-ms-flex-pack:start;justify-content:flex-start}[layout-align-sm^=center]{-ms-flex-pack:center;justify-content:center}[layout-align-sm^=end]{-ms-flex-pack:end;justify-content:flex-end}[layout-align-sm^=space-around]{-ms-flex-pack:distribute;justify-content:space-around}[layout-align-sm^=space-between]{-ms-flex-pack:justify;justify-content:space-between}[layout-align-sm$=start]{-ms-flex-align:start;-ms-grid-row-align:flex-start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start}[layout-align-sm$=center]{-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}[layout-align-sm$=center]>*{max-width:100%}[layout-align-sm$=end]{-ms-flex-align:end;-ms-grid-row-align:flex-end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end}[layout-align-sm=center],[layout-align-sm=end],[layout-align-sm=space-around],[layout-align-sm=space-between],[layout-align-sm=start]{-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch}[flex-sm]{-ms-flex:1;flex:1}[flex-sm-start]{margin-bottom:auto}[flex-sm-end]{margin-top:auto}[flex-sm-none]{-ms-flex:0 0 auto;flex:0 0 auto}[flex-sm-initial]{-ms-flex:0 1 auto;flex:0 1 auto}[flex-sm-noshrink]{-ms-flex:1 0 auto;flex:1 0 auto}[flex-sm-auto]{-ms-flex:1 1 auto;flex:1 1 auto}[flex-sm-grow]{-ms-flex:1 1 100%;flex:1 1 100%}[flex-sm],[layout-sm=row]>[flex-sm],[layout=row]>[flex-sm]{max-height:100%}[layout-sm=column]>[flex-sm],[layout=column]>[flex-sm]{max-width:100%}[layout-sm=row]>[flex-sm=\"5\"],[layout-sm=row]>[flex=\"5\"],[layout=row]>[flex-sm=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%}[layout-sm=column]>[flex-sm=\"5\"],[layout-sm=column]>[flex=\"5\"],[layout=column]>[flex-sm=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-height:5%}[layout-sm=row]>[flex-sm=\"10\"],[layout-sm=row]>[flex=\"10\"],[layout=row]>[flex-sm=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%}[layout-sm=column]>[flex-sm=\"10\"],[layout-sm=column]>[flex=\"10\"],[layout=column]>[flex-sm=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-height:10%}[layout-sm=row]>[flex-sm=\"15\"],[layout-sm=row]>[flex=\"15\"],[layout=row]>[flex-sm=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%}[layout-sm=column]>[flex-sm=\"15\"],[layout-sm=column]>[flex=\"15\"],[layout=column]>[flex-sm=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-height:15%}[layout-sm=row]>[flex-sm=\"20\"],[layout-sm=row]>[flex=\"20\"],[layout=row]>[flex-sm=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%}[layout-sm=column]>[flex-sm=\"20\"],[layout-sm=column]>[flex=\"20\"],[layout=column]>[flex-sm=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-height:20%}[layout-sm=row]>[flex-sm=\"25\"],[layout-sm=row]>[flex=\"25\"],[layout=row]>[flex-sm=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%}[layout-sm=column]>[flex-sm=\"25\"],[layout-sm=column]>[flex=\"25\"],[layout=column]>[flex-sm=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-height:25%}[layout-sm=row]>[flex-sm=\"30\"],[layout-sm=row]>[flex=\"30\"],[layout=row]>[flex-sm=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%}[layout-sm=column]>[flex-sm=\"30\"],[layout-sm=column]>[flex=\"30\"],[layout=column]>[flex-sm=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-height:30%}[layout-sm=row]>[flex-sm=\"35\"],[layout-sm=row]>[flex=\"35\"],[layout=row]>[flex-sm=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%}[layout-sm=column]>[flex-sm=\"35\"],[layout-sm=column]>[flex=\"35\"],[layout=column]>[flex-sm=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-height:35%}[layout-sm=row]>[flex-sm=\"40\"],[layout-sm=row]>[flex=\"40\"],[layout=row]>[flex-sm=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%}[layout-sm=column]>[flex-sm=\"40\"],[layout-sm=column]>[flex=\"40\"],[layout=column]>[flex-sm=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-height:40%}[layout-sm=row]>[flex-sm=\"45\"],[layout-sm=row]>[flex=\"45\"],[layout=row]>[flex-sm=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%}[layout-sm=column]>[flex-sm=\"45\"],[layout-sm=column]>[flex=\"45\"],[layout=column]>[flex-sm=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-height:45%}[layout-sm=row]>[flex-sm=\"50\"],[layout-sm=row]>[flex=\"50\"],[layout=row]>[flex-sm=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%}[layout-sm=column]>[flex-sm=\"50\"],[layout-sm=column]>[flex=\"50\"],[layout=column]>[flex-sm=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-height:50%}[layout-sm=row]>[flex-sm=\"55\"],[layout-sm=row]>[flex=\"55\"],[layout=row]>[flex-sm=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%}[layout-sm=column]>[flex-sm=\"55\"],[layout-sm=column]>[flex=\"55\"],[layout=column]>[flex-sm=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-height:55%}[layout-sm=row]>[flex-sm=\"60\"],[layout-sm=row]>[flex=\"60\"],[layout=row]>[flex-sm=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%}[layout-sm=column]>[flex-sm=\"60\"],[layout-sm=column]>[flex=\"60\"],[layout=column]>[flex-sm=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-height:60%}[layout-sm=row]>[flex-sm=\"65\"],[layout-sm=row]>[flex=\"65\"],[layout=row]>[flex-sm=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%}[layout-sm=column]>[flex-sm=\"65\"],[layout-sm=column]>[flex=\"65\"],[layout=column]>[flex-sm=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-height:65%}[layout-sm=row]>[flex-sm=\"70\"],[layout-sm=row]>[flex=\"70\"],[layout=row]>[flex-sm=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%}[layout-sm=column]>[flex-sm=\"70\"],[layout-sm=column]>[flex=\"70\"],[layout=column]>[flex-sm=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-height:70%}[layout-sm=row]>[flex-sm=\"75\"],[layout-sm=row]>[flex=\"75\"],[layout=row]>[flex-sm=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%}[layout-sm=column]>[flex-sm=\"75\"],[layout-sm=column]>[flex=\"75\"],[layout=column]>[flex-sm=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-height:75%}[layout-sm=row]>[flex-sm=\"80\"],[layout-sm=row]>[flex=\"80\"],[layout=row]>[flex-sm=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%}[layout-sm=column]>[flex-sm=\"80\"],[layout-sm=column]>[flex=\"80\"],[layout=column]>[flex-sm=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-height:80%}[layout-sm=row]>[flex-sm=\"85\"],[layout-sm=row]>[flex=\"85\"],[layout=row]>[flex-sm=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%}[layout-sm=column]>[flex-sm=\"85\"],[layout-sm=column]>[flex=\"85\"],[layout=column]>[flex-sm=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-height:85%}[layout-sm=row]>[flex-sm=\"90\"],[layout-sm=row]>[flex=\"90\"],[layout=row]>[flex-sm=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%}[layout-sm=column]>[flex-sm=\"90\"],[layout-sm=column]>[flex=\"90\"],[layout=column]>[flex-sm=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-height:90%}[layout-sm=row]>[flex-sm=\"95\"],[layout-sm=row]>[flex=\"95\"],[layout=row]>[flex-sm=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%}[layout-sm=column]>[flex-sm=\"95\"],[layout-sm=column]>[flex=\"95\"],[layout=column]>[flex-sm=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-height:95%}[layout-sm=row]>[flex-sm=\"100\"],[layout-sm=row]>[flex=\"100\"],[layout=row]>[flex-sm=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%}[layout-sm=column]>[flex-sm=\"100\"],[layout-sm=column]>[flex=\"100\"],[layout=column]>[flex-sm=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-height:100%}[layout-sm=row]>[flex-sm=\"33\"],[layout-sm=row]>[flex=\"33\"],[layout=row]>[flex-sm=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%}[layout-sm=column]>[flex-sm=\"33\"],[layout-sm=column]>[flex=\"33\"],[layout=column]>[flex-sm=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-height:33.33%}[layout-sm=row]>[flex-sm=\"66\"],[layout-sm=row]>[flex=\"66\"],[layout=row]>[flex-sm=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%}[layout-sm=column]>[flex-sm=\"66\"],[layout-sm=column]>[flex=\"66\"],[layout=column]>[flex-sm=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-height:66.66%}[hide-sm]{display:none}}@media (min-width:600px){[flex-offset-gt-sm=\"0\"]{margin-left:0}[flex-offset-gt-sm=\"5\"]{margin-left:5%}[flex-offset-gt-sm=\"10\"]{margin-left:10%}[flex-offset-gt-sm=\"15\"]{margin-left:15%}[flex-offset-gt-sm=\"20\"]{margin-left:20%}[flex-offset-gt-sm=\"25\"]{margin-left:25%}[flex-offset-gt-sm=\"30\"]{margin-left:30%}[flex-offset-gt-sm=\"35\"]{margin-left:35%}[flex-offset-gt-sm=\"40\"]{margin-left:40%}[flex-offset-gt-sm=\"45\"]{margin-left:45%}[flex-offset-gt-sm=\"50\"]{margin-left:50%}[flex-offset-gt-sm=\"55\"]{margin-left:55%}[flex-offset-gt-sm=\"60\"]{margin-left:60%}[flex-offset-gt-sm=\"65\"]{margin-left:65%}[flex-offset-gt-sm=\"70\"]{margin-left:70%}[flex-offset-gt-sm=\"75\"]{margin-left:75%}[flex-offset-gt-sm=\"80\"]{margin-left:80%}[flex-offset-gt-sm=\"85\"]{margin-left:85%}[flex-offset-gt-sm=\"90\"]{margin-left:90%}[flex-offset-gt-sm=\"95\"]{margin-left:95%}[flex-offset-gt-sm=\"33\"]{margin-left:33.33333%}[flex-offset-gt-sm=\"66\"]{margin-left:66.66667%}[flex-order-gt-sm=\"0\"]{-ms-flex-order:0;order:0}[flex-order-gt-sm=\"1\"]{-ms-flex-order:1;order:1}[flex-order-gt-sm=\"2\"]{-ms-flex-order:2;order:2}[flex-order-gt-sm=\"3\"]{-ms-flex-order:3;order:3}[flex-order-gt-sm=\"4\"]{-ms-flex-order:4;order:4}[flex-order-gt-sm=\"5\"]{-ms-flex-order:5;order:5}[flex-order-gt-sm=\"6\"]{-ms-flex-order:6;order:6}[flex-order-gt-sm=\"7\"]{-ms-flex-order:7;order:7}[flex-order-gt-sm=\"8\"]{-ms-flex-order:8;order:8}[flex-order-gt-sm=\"9\"]{-ms-flex-order:9;order:9}[flex-order-gt-sm=\"10\"]{-ms-flex-order:10;order:10}[flex-order-gt-sm=\"11\"]{-ms-flex-order:11;order:11}[flex-order-gt-sm=\"12\"]{-ms-flex-order:12;order:12}[flex-order-gt-sm=\"13\"]{-ms-flex-order:13;order:13}[flex-order-gt-sm=\"14\"]{-ms-flex-order:14;order:14}[flex-order-gt-sm=\"15\"]{-ms-flex-order:15;order:15}[flex-order-gt-sm=\"16\"]{-ms-flex-order:16;order:16}[flex-order-gt-sm=\"17\"]{-ms-flex-order:17;order:17}[flex-order-gt-sm=\"18\"]{-ms-flex-order:18;order:18}[flex-order-gt-sm=\"19\"]{-ms-flex-order:19;order:19}[flex-order-gt-sm=\"20\"]{-ms-flex-order:20;order:20}[layout-gt-sm]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}[layout-gt-sm]>*{box-sizing:border-box}[layout-gt-sm=column]{-ms-flex-direction:column;flex-direction:column}[layout-gt-sm=row]{-ms-flex-direction:row;flex-direction:row}[layout-align-gt-sm]{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch}[layout-align-gt-sm^=start]{-ms-flex-pack:start;justify-content:flex-start}[layout-align-gt-sm^=center]{-ms-flex-pack:center;justify-content:center}[layout-align-gt-sm^=end]{-ms-flex-pack:end;justify-content:flex-end}[layout-align-gt-sm^=space-around]{-ms-flex-pack:distribute;justify-content:space-around}[layout-align-gt-sm^=space-between]{-ms-flex-pack:justify;justify-content:space-between}[layout-align-gt-sm$=start]{-ms-flex-align:start;-ms-grid-row-align:flex-start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start}[layout-align-gt-sm$=center]{-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}[layout-align-gt-sm$=center]>*{max-width:100%}[layout-align-gt-sm$=end]{-ms-flex-align:end;-ms-grid-row-align:flex-end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end}[layout-align-gt-sm=center],[layout-align-gt-sm=end],[layout-align-gt-sm=space-around],[layout-align-gt-sm=space-between],[layout-align-gt-sm=start]{-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch}[flex-gt-sm]{-ms-flex:1;flex:1}[flex-gt-sm-start]{margin-bottom:auto}[flex-gt-sm-end]{margin-top:auto}[flex-gt-sm-none]{-ms-flex:0 0 auto;flex:0 0 auto}[flex-gt-sm-initial]{-ms-flex:0 1 auto;flex:0 1 auto}[flex-gt-sm-noshrink]{-ms-flex:1 0 auto;flex:1 0 auto}[flex-gt-sm-auto]{-ms-flex:1 1 auto;flex:1 1 auto}[flex-gt-sm-grow]{-ms-flex:1 1 100%;flex:1 1 100%}[flex-gt-sm],[layout-gt-sm=row]>[flex-gt-sm],[layout=row]>[flex-gt-sm]{max-height:100%}[layout-gt-sm=column]>[flex-gt-sm],[layout=column]>[flex-gt-sm]{max-width:100%}[layout-gt-sm=row]>[flex-gt-sm=\"5\"],[layout-gt-sm=row]>[flex=\"5\"],[layout=row]>[flex-gt-sm=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%}[layout-gt-sm=column]>[flex-gt-sm=\"5\"],[layout-gt-sm=column]>[flex=\"5\"],[layout=column]>[flex-gt-sm=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-height:5%}[layout-gt-sm=row]>[flex-gt-sm=\"10\"],[layout-gt-sm=row]>[flex=\"10\"],[layout=row]>[flex-gt-sm=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%}[layout-gt-sm=column]>[flex-gt-sm=\"10\"],[layout-gt-sm=column]>[flex=\"10\"],[layout=column]>[flex-gt-sm=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-height:10%}[layout-gt-sm=row]>[flex-gt-sm=\"15\"],[layout-gt-sm=row]>[flex=\"15\"],[layout=row]>[flex-gt-sm=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%}[layout-gt-sm=column]>[flex-gt-sm=\"15\"],[layout-gt-sm=column]>[flex=\"15\"],[layout=column]>[flex-gt-sm=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-height:15%}[layout-gt-sm=row]>[flex-gt-sm=\"20\"],[layout-gt-sm=row]>[flex=\"20\"],[layout=row]>[flex-gt-sm=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%}[layout-gt-sm=column]>[flex-gt-sm=\"20\"],[layout-gt-sm=column]>[flex=\"20\"],[layout=column]>[flex-gt-sm=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-height:20%}[layout-gt-sm=row]>[flex-gt-sm=\"25\"],[layout-gt-sm=row]>[flex=\"25\"],[layout=row]>[flex-gt-sm=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%}[layout-gt-sm=column]>[flex-gt-sm=\"25\"],[layout-gt-sm=column]>[flex=\"25\"],[layout=column]>[flex-gt-sm=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-height:25%}[layout-gt-sm=row]>[flex-gt-sm=\"30\"],[layout-gt-sm=row]>[flex=\"30\"],[layout=row]>[flex-gt-sm=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%}[layout-gt-sm=column]>[flex-gt-sm=\"30\"],[layout-gt-sm=column]>[flex=\"30\"],[layout=column]>[flex-gt-sm=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-height:30%}[layout-gt-sm=row]>[flex-gt-sm=\"35\"],[layout-gt-sm=row]>[flex=\"35\"],[layout=row]>[flex-gt-sm=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%}[layout-gt-sm=column]>[flex-gt-sm=\"35\"],[layout-gt-sm=column]>[flex=\"35\"],[layout=column]>[flex-gt-sm=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-height:35%}[layout-gt-sm=row]>[flex-gt-sm=\"40\"],[layout-gt-sm=row]>[flex=\"40\"],[layout=row]>[flex-gt-sm=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%}[layout-gt-sm=column]>[flex-gt-sm=\"40\"],[layout-gt-sm=column]>[flex=\"40\"],[layout=column]>[flex-gt-sm=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-height:40%}[layout-gt-sm=row]>[flex-gt-sm=\"45\"],[layout-gt-sm=row]>[flex=\"45\"],[layout=row]>[flex-gt-sm=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%}[layout-gt-sm=column]>[flex-gt-sm=\"45\"],[layout-gt-sm=column]>[flex=\"45\"],[layout=column]>[flex-gt-sm=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-height:45%}[layout-gt-sm=row]>[flex-gt-sm=\"50\"],[layout-gt-sm=row]>[flex=\"50\"],[layout=row]>[flex-gt-sm=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%}[layout-gt-sm=column]>[flex-gt-sm=\"50\"],[layout-gt-sm=column]>[flex=\"50\"],[layout=column]>[flex-gt-sm=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-height:50%}[layout-gt-sm=row]>[flex-gt-sm=\"55\"],[layout-gt-sm=row]>[flex=\"55\"],[layout=row]>[flex-gt-sm=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%}[layout-gt-sm=column]>[flex-gt-sm=\"55\"],[layout-gt-sm=column]>[flex=\"55\"],[layout=column]>[flex-gt-sm=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-height:55%}[layout-gt-sm=row]>[flex-gt-sm=\"60\"],[layout-gt-sm=row]>[flex=\"60\"],[layout=row]>[flex-gt-sm=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%}[layout-gt-sm=column]>[flex-gt-sm=\"60\"],[layout-gt-sm=column]>[flex=\"60\"],[layout=column]>[flex-gt-sm=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-height:60%}[layout-gt-sm=row]>[flex-gt-sm=\"65\"],[layout-gt-sm=row]>[flex=\"65\"],[layout=row]>[flex-gt-sm=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%}[layout-gt-sm=column]>[flex-gt-sm=\"65\"],[layout-gt-sm=column]>[flex=\"65\"],[layout=column]>[flex-gt-sm=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-height:65%}[layout-gt-sm=row]>[flex-gt-sm=\"70\"],[layout-gt-sm=row]>[flex=\"70\"],[layout=row]>[flex-gt-sm=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%}[layout-gt-sm=column]>[flex-gt-sm=\"70\"],[layout-gt-sm=column]>[flex=\"70\"],[layout=column]>[flex-gt-sm=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-height:70%}[layout-gt-sm=row]>[flex-gt-sm=\"75\"],[layout-gt-sm=row]>[flex=\"75\"],[layout=row]>[flex-gt-sm=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%}[layout-gt-sm=column]>[flex-gt-sm=\"75\"],[layout-gt-sm=column]>[flex=\"75\"],[layout=column]>[flex-gt-sm=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-height:75%}[layout-gt-sm=row]>[flex-gt-sm=\"80\"],[layout-gt-sm=row]>[flex=\"80\"],[layout=row]>[flex-gt-sm=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%}[layout-gt-sm=column]>[flex-gt-sm=\"80\"],[layout-gt-sm=column]>[flex=\"80\"],[layout=column]>[flex-gt-sm=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-height:80%}[layout-gt-sm=row]>[flex-gt-sm=\"85\"],[layout-gt-sm=row]>[flex=\"85\"],[layout=row]>[flex-gt-sm=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%}[layout-gt-sm=column]>[flex-gt-sm=\"85\"],[layout-gt-sm=column]>[flex=\"85\"],[layout=column]>[flex-gt-sm=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-height:85%}[layout-gt-sm=row]>[flex-gt-sm=\"90\"],[layout-gt-sm=row]>[flex=\"90\"],[layout=row]>[flex-gt-sm=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%}[layout-gt-sm=column]>[flex-gt-sm=\"90\"],[layout-gt-sm=column]>[flex=\"90\"],[layout=column]>[flex-gt-sm=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-height:90%}[layout-gt-sm=row]>[flex-gt-sm=\"95\"],[layout-gt-sm=row]>[flex=\"95\"],[layout=row]>[flex-gt-sm=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%}[layout-gt-sm=column]>[flex-gt-sm=\"95\"],[layout-gt-sm=column]>[flex=\"95\"],[layout=column]>[flex-gt-sm=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-height:95%}[layout-gt-sm=row]>[flex-gt-sm=\"100\"],[layout-gt-sm=row]>[flex=\"100\"],[layout=row]>[flex-gt-sm=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%}[layout-gt-sm=column]>[flex-gt-sm=\"100\"],[layout-gt-sm=column]>[flex=\"100\"],[layout=column]>[flex-gt-sm=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-height:100%}[layout-gt-sm=row]>[flex-gt-sm=\"33\"],[layout-gt-sm=row]>[flex=\"33\"],[layout=row]>[flex-gt-sm=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%}[layout-gt-sm=column]>[flex-gt-sm=\"33\"],[layout-gt-sm=column]>[flex=\"33\"],[layout=column]>[flex-gt-sm=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-height:33.33%}[layout-gt-sm=row]>[flex-gt-sm=\"66\"],[layout-gt-sm=row]>[flex=\"66\"],[layout=row]>[flex-gt-sm=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%}[layout-gt-sm=column]>[flex-gt-sm=\"66\"],[layout-gt-sm=column]>[flex=\"66\"],[layout=column]>[flex-gt-sm=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-height:66.66%}[hide-gt-sm]{display:none}}@media (min-width:600px) and (max-width:959px){[flex-offset-md=\"0\"]{margin-left:0}[flex-offset-md=\"5\"]{margin-left:5%}[flex-offset-md=\"10\"]{margin-left:10%}[flex-offset-md=\"15\"]{margin-left:15%}[flex-offset-md=\"20\"]{margin-left:20%}[flex-offset-md=\"25\"]{margin-left:25%}[flex-offset-md=\"30\"]{margin-left:30%}[flex-offset-md=\"35\"]{margin-left:35%}[flex-offset-md=\"40\"]{margin-left:40%}[flex-offset-md=\"45\"]{margin-left:45%}[flex-offset-md=\"50\"]{margin-left:50%}[flex-offset-md=\"55\"]{margin-left:55%}[flex-offset-md=\"60\"]{margin-left:60%}[flex-offset-md=\"65\"]{margin-left:65%}[flex-offset-md=\"70\"]{margin-left:70%}[flex-offset-md=\"75\"]{margin-left:75%}[flex-offset-md=\"80\"]{margin-left:80%}[flex-offset-md=\"85\"]{margin-left:85%}[flex-offset-md=\"90\"]{margin-left:90%}[flex-offset-md=\"95\"]{margin-left:95%}[flex-offset-md=\"33\"]{margin-left:33.33333%}[flex-offset-md=\"66\"]{margin-left:66.66667%}[flex-order-md=\"0\"]{-ms-flex-order:0;order:0}[flex-order-md=\"1\"]{-ms-flex-order:1;order:1}[flex-order-md=\"2\"]{-ms-flex-order:2;order:2}[flex-order-md=\"3\"]{-ms-flex-order:3;order:3}[flex-order-md=\"4\"]{-ms-flex-order:4;order:4}[flex-order-md=\"5\"]{-ms-flex-order:5;order:5}[flex-order-md=\"6\"]{-ms-flex-order:6;order:6}[flex-order-md=\"7\"]{-ms-flex-order:7;order:7}[flex-order-md=\"8\"]{-ms-flex-order:8;order:8}[flex-order-md=\"9\"]{-ms-flex-order:9;order:9}[flex-order-md=\"10\"]{-ms-flex-order:10;order:10}[flex-order-md=\"11\"]{-ms-flex-order:11;order:11}[flex-order-md=\"12\"]{-ms-flex-order:12;order:12}[flex-order-md=\"13\"]{-ms-flex-order:13;order:13}[flex-order-md=\"14\"]{-ms-flex-order:14;order:14}[flex-order-md=\"15\"]{-ms-flex-order:15;order:15}[flex-order-md=\"16\"]{-ms-flex-order:16;order:16}[flex-order-md=\"17\"]{-ms-flex-order:17;order:17}[flex-order-md=\"18\"]{-ms-flex-order:18;order:18}[flex-order-md=\"19\"]{-ms-flex-order:19;order:19}[flex-order-md=\"20\"]{-ms-flex-order:20;order:20}[layout-md]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}[layout-md]>*{box-sizing:border-box}[layout-md=column]{-ms-flex-direction:column;flex-direction:column}[layout-md=row]{-ms-flex-direction:row;flex-direction:row}[layout-align-md]{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch}[layout-align-md^=start]{-ms-flex-pack:start;justify-content:flex-start}[layout-align-md^=center]{-ms-flex-pack:center;justify-content:center}[layout-align-md^=end]{-ms-flex-pack:end;justify-content:flex-end}[layout-align-md^=space-around]{-ms-flex-pack:distribute;justify-content:space-around}[layout-align-md^=space-between]{-ms-flex-pack:justify;justify-content:space-between}[layout-align-md$=start]{-ms-flex-align:start;-ms-grid-row-align:flex-start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start}[layout-align-md$=center]{-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}[layout-align-md$=center]>*{max-width:100%}[layout-align-md$=end]{-ms-flex-align:end;-ms-grid-row-align:flex-end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end}[layout-align-md=center],[layout-align-md=end],[layout-align-md=space-around],[layout-align-md=space-between],[layout-align-md=start]{-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch}[flex-md]{-ms-flex:1;flex:1}[flex-md-start]{margin-bottom:auto}[flex-md-end]{margin-top:auto}[flex-md-none]{-ms-flex:0 0 auto;flex:0 0 auto}[flex-md-initial]{-ms-flex:0 1 auto;flex:0 1 auto}[flex-md-noshrink]{-ms-flex:1 0 auto;flex:1 0 auto}[flex-md-auto]{-ms-flex:1 1 auto;flex:1 1 auto}[flex-md-grow]{-ms-flex:1 1 100%;flex:1 1 100%}[flex-md],[layout-md=row]>[flex-md],[layout=row]>[flex-md]{max-height:100%}[layout-md=column]>[flex-md],[layout=column]>[flex-md]{max-width:100%}[layout-md=row]>[flex-md=\"5\"],[layout-md=row]>[flex=\"5\"],[layout=row]>[flex-md=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%}[layout-md=column]>[flex-md=\"5\"],[layout-md=column]>[flex=\"5\"],[layout=column]>[flex-md=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-height:5%}[layout-md=row]>[flex-md=\"10\"],[layout-md=row]>[flex=\"10\"],[layout=row]>[flex-md=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%}[layout-md=column]>[flex-md=\"10\"],[layout-md=column]>[flex=\"10\"],[layout=column]>[flex-md=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-height:10%}[layout-md=row]>[flex-md=\"15\"],[layout-md=row]>[flex=\"15\"],[layout=row]>[flex-md=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%}[layout-md=column]>[flex-md=\"15\"],[layout-md=column]>[flex=\"15\"],[layout=column]>[flex-md=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-height:15%}[layout-md=row]>[flex-md=\"20\"],[layout-md=row]>[flex=\"20\"],[layout=row]>[flex-md=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%}[layout-md=column]>[flex-md=\"20\"],[layout-md=column]>[flex=\"20\"],[layout=column]>[flex-md=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-height:20%}[layout-md=row]>[flex-md=\"25\"],[layout-md=row]>[flex=\"25\"],[layout=row]>[flex-md=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%}[layout-md=column]>[flex-md=\"25\"],[layout-md=column]>[flex=\"25\"],[layout=column]>[flex-md=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-height:25%}[layout-md=row]>[flex-md=\"30\"],[layout-md=row]>[flex=\"30\"],[layout=row]>[flex-md=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%}[layout-md=column]>[flex-md=\"30\"],[layout-md=column]>[flex=\"30\"],[layout=column]>[flex-md=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-height:30%}[layout-md=row]>[flex-md=\"35\"],[layout-md=row]>[flex=\"35\"],[layout=row]>[flex-md=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%}[layout-md=column]>[flex-md=\"35\"],[layout-md=column]>[flex=\"35\"],[layout=column]>[flex-md=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-height:35%}[layout-md=row]>[flex-md=\"40\"],[layout-md=row]>[flex=\"40\"],[layout=row]>[flex-md=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%}[layout-md=column]>[flex-md=\"40\"],[layout-md=column]>[flex=\"40\"],[layout=column]>[flex-md=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-height:40%}[layout-md=row]>[flex-md=\"45\"],[layout-md=row]>[flex=\"45\"],[layout=row]>[flex-md=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%}[layout-md=column]>[flex-md=\"45\"],[layout-md=column]>[flex=\"45\"],[layout=column]>[flex-md=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-height:45%}[layout-md=row]>[flex-md=\"50\"],[layout-md=row]>[flex=\"50\"],[layout=row]>[flex-md=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%}[layout-md=column]>[flex-md=\"50\"],[layout-md=column]>[flex=\"50\"],[layout=column]>[flex-md=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-height:50%}[layout-md=row]>[flex-md=\"55\"],[layout-md=row]>[flex=\"55\"],[layout=row]>[flex-md=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%}[layout-md=column]>[flex-md=\"55\"],[layout-md=column]>[flex=\"55\"],[layout=column]>[flex-md=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-height:55%}[layout-md=row]>[flex-md=\"60\"],[layout-md=row]>[flex=\"60\"],[layout=row]>[flex-md=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%}[layout-md=column]>[flex-md=\"60\"],[layout-md=column]>[flex=\"60\"],[layout=column]>[flex-md=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-height:60%}[layout-md=row]>[flex-md=\"65\"],[layout-md=row]>[flex=\"65\"],[layout=row]>[flex-md=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%}[layout-md=column]>[flex-md=\"65\"],[layout-md=column]>[flex=\"65\"],[layout=column]>[flex-md=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-height:65%}[layout-md=row]>[flex-md=\"70\"],[layout-md=row]>[flex=\"70\"],[layout=row]>[flex-md=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%}[layout-md=column]>[flex-md=\"70\"],[layout-md=column]>[flex=\"70\"],[layout=column]>[flex-md=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-height:70%}[layout-md=row]>[flex-md=\"75\"],[layout-md=row]>[flex=\"75\"],[layout=row]>[flex-md=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%}[layout-md=column]>[flex-md=\"75\"],[layout-md=column]>[flex=\"75\"],[layout=column]>[flex-md=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-height:75%}[layout-md=row]>[flex-md=\"80\"],[layout-md=row]>[flex=\"80\"],[layout=row]>[flex-md=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%}[layout-md=column]>[flex-md=\"80\"],[layout-md=column]>[flex=\"80\"],[layout=column]>[flex-md=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-height:80%}[layout-md=row]>[flex-md=\"85\"],[layout-md=row]>[flex=\"85\"],[layout=row]>[flex-md=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%}[layout-md=column]>[flex-md=\"85\"],[layout-md=column]>[flex=\"85\"],[layout=column]>[flex-md=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-height:85%}[layout-md=row]>[flex-md=\"90\"],[layout-md=row]>[flex=\"90\"],[layout=row]>[flex-md=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%}[layout-md=column]>[flex-md=\"90\"],[layout-md=column]>[flex=\"90\"],[layout=column]>[flex-md=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-height:90%}[layout-md=row]>[flex-md=\"95\"],[layout-md=row]>[flex=\"95\"],[layout=row]>[flex-md=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%}[layout-md=column]>[flex-md=\"95\"],[layout-md=column]>[flex=\"95\"],[layout=column]>[flex-md=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-height:95%}[layout-md=row]>[flex-md=\"100\"],[layout-md=row]>[flex=\"100\"],[layout=row]>[flex-md=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%}[layout-md=column]>[flex-md=\"100\"],[layout-md=column]>[flex=\"100\"],[layout=column]>[flex-md=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-height:100%}[layout-md=row]>[flex-md=\"33\"],[layout-md=row]>[flex=\"33\"],[layout=row]>[flex-md=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%}[layout-md=column]>[flex-md=\"33\"],[layout-md=column]>[flex=\"33\"],[layout=column]>[flex-md=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-height:33.33%}[layout-md=row]>[flex-md=\"66\"],[layout-md=row]>[flex=\"66\"],[layout=row]>[flex-md=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%}[layout-md=column]>[flex-md=\"66\"],[layout-md=column]>[flex=\"66\"],[layout=column]>[flex-md=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-height:66.66%}[hide-md]{display:none}}@media (min-width:960px){[flex-offset-gt-md=\"0\"]{margin-left:0}[flex-offset-gt-md=\"5\"]{margin-left:5%}[flex-offset-gt-md=\"10\"]{margin-left:10%}[flex-offset-gt-md=\"15\"]{margin-left:15%}[flex-offset-gt-md=\"20\"]{margin-left:20%}[flex-offset-gt-md=\"25\"]{margin-left:25%}[flex-offset-gt-md=\"30\"]{margin-left:30%}[flex-offset-gt-md=\"35\"]{margin-left:35%}[flex-offset-gt-md=\"40\"]{margin-left:40%}[flex-offset-gt-md=\"45\"]{margin-left:45%}[flex-offset-gt-md=\"50\"]{margin-left:50%}[flex-offset-gt-md=\"55\"]{margin-left:55%}[flex-offset-gt-md=\"60\"]{margin-left:60%}[flex-offset-gt-md=\"65\"]{margin-left:65%}[flex-offset-gt-md=\"70\"]{margin-left:70%}[flex-offset-gt-md=\"75\"]{margin-left:75%}[flex-offset-gt-md=\"80\"]{margin-left:80%}[flex-offset-gt-md=\"85\"]{margin-left:85%}[flex-offset-gt-md=\"90\"]{margin-left:90%}[flex-offset-gt-md=\"95\"]{margin-left:95%}[flex-offset-gt-md=\"33\"]{margin-left:33.33333%}[flex-offset-gt-md=\"66\"]{margin-left:66.66667%}[flex-order-gt-md=\"0\"]{-ms-flex-order:0;order:0}[flex-order-gt-md=\"1\"]{-ms-flex-order:1;order:1}[flex-order-gt-md=\"2\"]{-ms-flex-order:2;order:2}[flex-order-gt-md=\"3\"]{-ms-flex-order:3;order:3}[flex-order-gt-md=\"4\"]{-ms-flex-order:4;order:4}[flex-order-gt-md=\"5\"]{-ms-flex-order:5;order:5}[flex-order-gt-md=\"6\"]{-ms-flex-order:6;order:6}[flex-order-gt-md=\"7\"]{-ms-flex-order:7;order:7}[flex-order-gt-md=\"8\"]{-ms-flex-order:8;order:8}[flex-order-gt-md=\"9\"]{-ms-flex-order:9;order:9}[flex-order-gt-md=\"10\"]{-ms-flex-order:10;order:10}[flex-order-gt-md=\"11\"]{-ms-flex-order:11;order:11}[flex-order-gt-md=\"12\"]{-ms-flex-order:12;order:12}[flex-order-gt-md=\"13\"]{-ms-flex-order:13;order:13}[flex-order-gt-md=\"14\"]{-ms-flex-order:14;order:14}[flex-order-gt-md=\"15\"]{-ms-flex-order:15;order:15}[flex-order-gt-md=\"16\"]{-ms-flex-order:16;order:16}[flex-order-gt-md=\"17\"]{-ms-flex-order:17;order:17}[flex-order-gt-md=\"18\"]{-ms-flex-order:18;order:18}[flex-order-gt-md=\"19\"]{-ms-flex-order:19;order:19}[flex-order-gt-md=\"20\"]{-ms-flex-order:20;order:20}[layout-gt-md]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}[layout-gt-md]>*{box-sizing:border-box}[layout-gt-md=column]{-ms-flex-direction:column;flex-direction:column}[layout-gt-md=row]{-ms-flex-direction:row;flex-direction:row}[layout-align-gt-md]{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch}[layout-align-gt-md^=start]{-ms-flex-pack:start;justify-content:flex-start}[layout-align-gt-md^=center]{-ms-flex-pack:center;justify-content:center}[layout-align-gt-md^=end]{-ms-flex-pack:end;justify-content:flex-end}[layout-align-gt-md^=space-around]{-ms-flex-pack:distribute;justify-content:space-around}[layout-align-gt-md^=space-between]{-ms-flex-pack:justify;justify-content:space-between}[layout-align-gt-md$=start]{-ms-flex-align:start;-ms-grid-row-align:flex-start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start}[layout-align-gt-md$=center]{-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}[layout-align-gt-md$=center]>*{max-width:100%}[layout-align-gt-md$=end]{-ms-flex-align:end;-ms-grid-row-align:flex-end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end}[layout-align-gt-md=center],[layout-align-gt-md=end],[layout-align-gt-md=space-around],[layout-align-gt-md=space-between],[layout-align-gt-md=start]{-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch}[flex-gt-md]{-ms-flex:1;flex:1}[flex-gt-md-start]{margin-bottom:auto}[flex-gt-md-end]{margin-top:auto}[flex-gt-md-none]{-ms-flex:0 0 auto;flex:0 0 auto}[flex-gt-md-initial]{-ms-flex:0 1 auto;flex:0 1 auto}[flex-gt-md-noshrink]{-ms-flex:1 0 auto;flex:1 0 auto}[flex-gt-md-auto]{-ms-flex:1 1 auto;flex:1 1 auto}[flex-gt-md-grow]{-ms-flex:1 1 100%;flex:1 1 100%}[flex-gt-md],[layout-gt-md=row]>[flex-gt-md],[layout=row]>[flex-gt-md]{max-height:100%}[layout-gt-md=column]>[flex-gt-md],[layout=column]>[flex-gt-md]{max-width:100%}[layout-gt-md=row]>[flex-gt-md=\"5\"],[layout-gt-md=row]>[flex=\"5\"],[layout=row]>[flex-gt-md=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%}[layout-gt-md=column]>[flex-gt-md=\"5\"],[layout-gt-md=column]>[flex=\"5\"],[layout=column]>[flex-gt-md=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-height:5%}[layout-gt-md=row]>[flex-gt-md=\"10\"],[layout-gt-md=row]>[flex=\"10\"],[layout=row]>[flex-gt-md=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%}[layout-gt-md=column]>[flex-gt-md=\"10\"],[layout-gt-md=column]>[flex=\"10\"],[layout=column]>[flex-gt-md=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-height:10%}[layout-gt-md=row]>[flex-gt-md=\"15\"],[layout-gt-md=row]>[flex=\"15\"],[layout=row]>[flex-gt-md=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%}[layout-gt-md=column]>[flex-gt-md=\"15\"],[layout-gt-md=column]>[flex=\"15\"],[layout=column]>[flex-gt-md=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-height:15%}[layout-gt-md=row]>[flex-gt-md=\"20\"],[layout-gt-md=row]>[flex=\"20\"],[layout=row]>[flex-gt-md=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%}[layout-gt-md=column]>[flex-gt-md=\"20\"],[layout-gt-md=column]>[flex=\"20\"],[layout=column]>[flex-gt-md=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-height:20%}[layout-gt-md=row]>[flex-gt-md=\"25\"],[layout-gt-md=row]>[flex=\"25\"],[layout=row]>[flex-gt-md=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%}[layout-gt-md=column]>[flex-gt-md=\"25\"],[layout-gt-md=column]>[flex=\"25\"],[layout=column]>[flex-gt-md=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-height:25%}[layout-gt-md=row]>[flex-gt-md=\"30\"],[layout-gt-md=row]>[flex=\"30\"],[layout=row]>[flex-gt-md=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%}[layout-gt-md=column]>[flex-gt-md=\"30\"],[layout-gt-md=column]>[flex=\"30\"],[layout=column]>[flex-gt-md=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-height:30%}[layout-gt-md=row]>[flex-gt-md=\"35\"],[layout-gt-md=row]>[flex=\"35\"],[layout=row]>[flex-gt-md=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%}[layout-gt-md=column]>[flex-gt-md=\"35\"],[layout-gt-md=column]>[flex=\"35\"],[layout=column]>[flex-gt-md=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-height:35%}[layout-gt-md=row]>[flex-gt-md=\"40\"],[layout-gt-md=row]>[flex=\"40\"],[layout=row]>[flex-gt-md=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%}[layout-gt-md=column]>[flex-gt-md=\"40\"],[layout-gt-md=column]>[flex=\"40\"],[layout=column]>[flex-gt-md=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-height:40%}[layout-gt-md=row]>[flex-gt-md=\"45\"],[layout-gt-md=row]>[flex=\"45\"],[layout=row]>[flex-gt-md=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%}[layout-gt-md=column]>[flex-gt-md=\"45\"],[layout-gt-md=column]>[flex=\"45\"],[layout=column]>[flex-gt-md=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-height:45%}[layout-gt-md=row]>[flex-gt-md=\"50\"],[layout-gt-md=row]>[flex=\"50\"],[layout=row]>[flex-gt-md=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%}[layout-gt-md=column]>[flex-gt-md=\"50\"],[layout-gt-md=column]>[flex=\"50\"],[layout=column]>[flex-gt-md=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-height:50%}[layout-gt-md=row]>[flex-gt-md=\"55\"],[layout-gt-md=row]>[flex=\"55\"],[layout=row]>[flex-gt-md=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%}[layout-gt-md=column]>[flex-gt-md=\"55\"],[layout-gt-md=column]>[flex=\"55\"],[layout=column]>[flex-gt-md=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-height:55%}[layout-gt-md=row]>[flex-gt-md=\"60\"],[layout-gt-md=row]>[flex=\"60\"],[layout=row]>[flex-gt-md=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%}[layout-gt-md=column]>[flex-gt-md=\"60\"],[layout-gt-md=column]>[flex=\"60\"],[layout=column]>[flex-gt-md=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-height:60%}[layout-gt-md=row]>[flex-gt-md=\"65\"],[layout-gt-md=row]>[flex=\"65\"],[layout=row]>[flex-gt-md=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%}[layout-gt-md=column]>[flex-gt-md=\"65\"],[layout-gt-md=column]>[flex=\"65\"],[layout=column]>[flex-gt-md=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-height:65%}[layout-gt-md=row]>[flex-gt-md=\"70\"],[layout-gt-md=row]>[flex=\"70\"],[layout=row]>[flex-gt-md=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%}[layout-gt-md=column]>[flex-gt-md=\"70\"],[layout-gt-md=column]>[flex=\"70\"],[layout=column]>[flex-gt-md=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-height:70%}[layout-gt-md=row]>[flex-gt-md=\"75\"],[layout-gt-md=row]>[flex=\"75\"],[layout=row]>[flex-gt-md=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%}[layout-gt-md=column]>[flex-gt-md=\"75\"],[layout-gt-md=column]>[flex=\"75\"],[layout=column]>[flex-gt-md=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-height:75%}[layout-gt-md=row]>[flex-gt-md=\"80\"],[layout-gt-md=row]>[flex=\"80\"],[layout=row]>[flex-gt-md=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%}[layout-gt-md=column]>[flex-gt-md=\"80\"],[layout-gt-md=column]>[flex=\"80\"],[layout=column]>[flex-gt-md=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-height:80%}[layout-gt-md=row]>[flex-gt-md=\"85\"],[layout-gt-md=row]>[flex=\"85\"],[layout=row]>[flex-gt-md=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%}[layout-gt-md=column]>[flex-gt-md=\"85\"],[layout-gt-md=column]>[flex=\"85\"],[layout=column]>[flex-gt-md=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-height:85%}[layout-gt-md=row]>[flex-gt-md=\"90\"],[layout-gt-md=row]>[flex=\"90\"],[layout=row]>[flex-gt-md=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%}[layout-gt-md=column]>[flex-gt-md=\"90\"],[layout-gt-md=column]>[flex=\"90\"],[layout=column]>[flex-gt-md=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-height:90%}[layout-gt-md=row]>[flex-gt-md=\"95\"],[layout-gt-md=row]>[flex=\"95\"],[layout=row]>[flex-gt-md=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%}[layout-gt-md=column]>[flex-gt-md=\"95\"],[layout-gt-md=column]>[flex=\"95\"],[layout=column]>[flex-gt-md=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-height:95%}[layout-gt-md=row]>[flex-gt-md=\"100\"],[layout-gt-md=row]>[flex=\"100\"],[layout=row]>[flex-gt-md=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%}[layout-gt-md=column]>[flex-gt-md=\"100\"],[layout-gt-md=column]>[flex=\"100\"],[layout=column]>[flex-gt-md=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-height:100%}[layout-gt-md=row]>[flex-gt-md=\"33\"],[layout-gt-md=row]>[flex=\"33\"],[layout=row]>[flex-gt-md=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%}[layout-gt-md=column]>[flex-gt-md=\"33\"],[layout-gt-md=column]>[flex=\"33\"],[layout=column]>[flex-gt-md=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-height:33.33%}[layout-gt-md=row]>[flex-gt-md=\"66\"],[layout-gt-md=row]>[flex=\"66\"],[layout=row]>[flex-gt-md=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%}[layout-gt-md=column]>[flex-gt-md=\"66\"],[layout-gt-md=column]>[flex=\"66\"],[layout=column]>[flex-gt-md=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-height:66.66%}[hide-gt-md]{display:none}}@media (min-width:960px) and (max-width:1199px){[flex-offset-lg=\"0\"]{margin-left:0}[flex-offset-lg=\"5\"]{margin-left:5%}[flex-offset-lg=\"10\"]{margin-left:10%}[flex-offset-lg=\"15\"]{margin-left:15%}[flex-offset-lg=\"20\"]{margin-left:20%}[flex-offset-lg=\"25\"]{margin-left:25%}[flex-offset-lg=\"30\"]{margin-left:30%}[flex-offset-lg=\"35\"]{margin-left:35%}[flex-offset-lg=\"40\"]{margin-left:40%}[flex-offset-lg=\"45\"]{margin-left:45%}[flex-offset-lg=\"50\"]{margin-left:50%}[flex-offset-lg=\"55\"]{margin-left:55%}[flex-offset-lg=\"60\"]{margin-left:60%}[flex-offset-lg=\"65\"]{margin-left:65%}[flex-offset-lg=\"70\"]{margin-left:70%}[flex-offset-lg=\"75\"]{margin-left:75%}[flex-offset-lg=\"80\"]{margin-left:80%}[flex-offset-lg=\"85\"]{margin-left:85%}[flex-offset-lg=\"90\"]{margin-left:90%}[flex-offset-lg=\"95\"]{margin-left:95%}[flex-offset-lg=\"33\"]{margin-left:33.33333%}[flex-offset-lg=\"66\"]{margin-left:66.66667%}[flex-order-lg=\"0\"]{-ms-flex-order:0;order:0}[flex-order-lg=\"1\"]{-ms-flex-order:1;order:1}[flex-order-lg=\"2\"]{-ms-flex-order:2;order:2}[flex-order-lg=\"3\"]{-ms-flex-order:3;order:3}[flex-order-lg=\"4\"]{-ms-flex-order:4;order:4}[flex-order-lg=\"5\"]{-ms-flex-order:5;order:5}[flex-order-lg=\"6\"]{-ms-flex-order:6;order:6}[flex-order-lg=\"7\"]{-ms-flex-order:7;order:7}[flex-order-lg=\"8\"]{-ms-flex-order:8;order:8}[flex-order-lg=\"9\"]{-ms-flex-order:9;order:9}[flex-order-lg=\"10\"]{-ms-flex-order:10;order:10}[flex-order-lg=\"11\"]{-ms-flex-order:11;order:11}[flex-order-lg=\"12\"]{-ms-flex-order:12;order:12}[flex-order-lg=\"13\"]{-ms-flex-order:13;order:13}[flex-order-lg=\"14\"]{-ms-flex-order:14;order:14}[flex-order-lg=\"15\"]{-ms-flex-order:15;order:15}[flex-order-lg=\"16\"]{-ms-flex-order:16;order:16}[flex-order-lg=\"17\"]{-ms-flex-order:17;order:17}[flex-order-lg=\"18\"]{-ms-flex-order:18;order:18}[flex-order-lg=\"19\"]{-ms-flex-order:19;order:19}[flex-order-lg=\"20\"]{-ms-flex-order:20;order:20}[layout-lg]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}[layout-lg]>*{box-sizing:border-box}[layout-lg=column]{-ms-flex-direction:column;flex-direction:column}[layout-lg=row]{-ms-flex-direction:row;flex-direction:row}[layout-align-lg]{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch}[layout-align-lg^=start]{-ms-flex-pack:start;justify-content:flex-start}[layout-align-lg^=center]{-ms-flex-pack:center;justify-content:center}[layout-align-lg^=end]{-ms-flex-pack:end;justify-content:flex-end}[layout-align-lg^=space-around]{-ms-flex-pack:distribute;justify-content:space-around}[layout-align-lg^=space-between]{-ms-flex-pack:justify;justify-content:space-between}[layout-align-lg$=start]{-ms-flex-align:start;-ms-grid-row-align:flex-start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start}[layout-align-lg$=center]{-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}[layout-align-lg$=center]>*{max-width:100%}[layout-align-lg$=end]{-ms-flex-align:end;-ms-grid-row-align:flex-end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end}[layout-align-lg=center],[layout-align-lg=end],[layout-align-lg=space-around],[layout-align-lg=space-between],[layout-align-lg=start]{-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch}[flex-lg]{-ms-flex:1;flex:1}[flex-lg-start]{margin-bottom:auto}[flex-lg-end]{margin-top:auto}[flex-lg-none]{-ms-flex:0 0 auto;flex:0 0 auto}[flex-lg-initial]{-ms-flex:0 1 auto;flex:0 1 auto}[flex-lg-noshrink]{-ms-flex:1 0 auto;flex:1 0 auto}[flex-lg-auto]{-ms-flex:1 1 auto;flex:1 1 auto}[flex-lg-grow]{-ms-flex:1 1 100%;flex:1 1 100%}[flex-lg],[layout-lg=row]>[flex-lg],[layout=row]>[flex-lg]{max-height:100%}[layout-lg=column]>[flex-lg],[layout=column]>[flex-lg]{max-width:100%}[layout-lg=row]>[flex-lg=\"5\"],[layout-lg=row]>[flex=\"5\"],[layout=row]>[flex-lg=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%}[layout-lg=column]>[flex-lg=\"5\"],[layout-lg=column]>[flex=\"5\"],[layout=column]>[flex-lg=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-height:5%}[layout-lg=row]>[flex-lg=\"10\"],[layout-lg=row]>[flex=\"10\"],[layout=row]>[flex-lg=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%}[layout-lg=column]>[flex-lg=\"10\"],[layout-lg=column]>[flex=\"10\"],[layout=column]>[flex-lg=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-height:10%}[layout-lg=row]>[flex-lg=\"15\"],[layout-lg=row]>[flex=\"15\"],[layout=row]>[flex-lg=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%}[layout-lg=column]>[flex-lg=\"15\"],[layout-lg=column]>[flex=\"15\"],[layout=column]>[flex-lg=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-height:15%}[layout-lg=row]>[flex-lg=\"20\"],[layout-lg=row]>[flex=\"20\"],[layout=row]>[flex-lg=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%}[layout-lg=column]>[flex-lg=\"20\"],[layout-lg=column]>[flex=\"20\"],[layout=column]>[flex-lg=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-height:20%}[layout-lg=row]>[flex-lg=\"25\"],[layout-lg=row]>[flex=\"25\"],[layout=row]>[flex-lg=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%}[layout-lg=column]>[flex-lg=\"25\"],[layout-lg=column]>[flex=\"25\"],[layout=column]>[flex-lg=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-height:25%}[layout-lg=row]>[flex-lg=\"30\"],[layout-lg=row]>[flex=\"30\"],[layout=row]>[flex-lg=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%}[layout-lg=column]>[flex-lg=\"30\"],[layout-lg=column]>[flex=\"30\"],[layout=column]>[flex-lg=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-height:30%}[layout-lg=row]>[flex-lg=\"35\"],[layout-lg=row]>[flex=\"35\"],[layout=row]>[flex-lg=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%}[layout-lg=column]>[flex-lg=\"35\"],[layout-lg=column]>[flex=\"35\"],[layout=column]>[flex-lg=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-height:35%}[layout-lg=row]>[flex-lg=\"40\"],[layout-lg=row]>[flex=\"40\"],[layout=row]>[flex-lg=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%}[layout-lg=column]>[flex-lg=\"40\"],[layout-lg=column]>[flex=\"40\"],[layout=column]>[flex-lg=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-height:40%}[layout-lg=row]>[flex-lg=\"45\"],[layout-lg=row]>[flex=\"45\"],[layout=row]>[flex-lg=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%}[layout-lg=column]>[flex-lg=\"45\"],[layout-lg=column]>[flex=\"45\"],[layout=column]>[flex-lg=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-height:45%}[layout-lg=row]>[flex-lg=\"50\"],[layout-lg=row]>[flex=\"50\"],[layout=row]>[flex-lg=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%}[layout-lg=column]>[flex-lg=\"50\"],[layout-lg=column]>[flex=\"50\"],[layout=column]>[flex-lg=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-height:50%}[layout-lg=row]>[flex-lg=\"55\"],[layout-lg=row]>[flex=\"55\"],[layout=row]>[flex-lg=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%}[layout-lg=column]>[flex-lg=\"55\"],[layout-lg=column]>[flex=\"55\"],[layout=column]>[flex-lg=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-height:55%}[layout-lg=row]>[flex-lg=\"60\"],[layout-lg=row]>[flex=\"60\"],[layout=row]>[flex-lg=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%}[layout-lg=column]>[flex-lg=\"60\"],[layout-lg=column]>[flex=\"60\"],[layout=column]>[flex-lg=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-height:60%}[layout-lg=row]>[flex-lg=\"65\"],[layout-lg=row]>[flex=\"65\"],[layout=row]>[flex-lg=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%}[layout-lg=column]>[flex-lg=\"65\"],[layout-lg=column]>[flex=\"65\"],[layout=column]>[flex-lg=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-height:65%}[layout-lg=row]>[flex-lg=\"70\"],[layout-lg=row]>[flex=\"70\"],[layout=row]>[flex-lg=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%}[layout-lg=column]>[flex-lg=\"70\"],[layout-lg=column]>[flex=\"70\"],[layout=column]>[flex-lg=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-height:70%}[layout-lg=row]>[flex-lg=\"75\"],[layout-lg=row]>[flex=\"75\"],[layout=row]>[flex-lg=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%}[layout-lg=column]>[flex-lg=\"75\"],[layout-lg=column]>[flex=\"75\"],[layout=column]>[flex-lg=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-height:75%}[layout-lg=row]>[flex-lg=\"80\"],[layout-lg=row]>[flex=\"80\"],[layout=row]>[flex-lg=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%}[layout-lg=column]>[flex-lg=\"80\"],[layout-lg=column]>[flex=\"80\"],[layout=column]>[flex-lg=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-height:80%}[layout-lg=row]>[flex-lg=\"85\"],[layout-lg=row]>[flex=\"85\"],[layout=row]>[flex-lg=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%}[layout-lg=column]>[flex-lg=\"85\"],[layout-lg=column]>[flex=\"85\"],[layout=column]>[flex-lg=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-height:85%}[layout-lg=row]>[flex-lg=\"90\"],[layout-lg=row]>[flex=\"90\"],[layout=row]>[flex-lg=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%}[layout-lg=column]>[flex-lg=\"90\"],[layout-lg=column]>[flex=\"90\"],[layout=column]>[flex-lg=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-height:90%}[layout-lg=row]>[flex-lg=\"95\"],[layout-lg=row]>[flex=\"95\"],[layout=row]>[flex-lg=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%}[layout-lg=column]>[flex-lg=\"95\"],[layout-lg=column]>[flex=\"95\"],[layout=column]>[flex-lg=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-height:95%}[layout-lg=row]>[flex-lg=\"100\"],[layout-lg=row]>[flex=\"100\"],[layout=row]>[flex-lg=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%}[layout-lg=column]>[flex-lg=\"100\"],[layout-lg=column]>[flex=\"100\"],[layout=column]>[flex-lg=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-height:100%}[layout-lg=row]>[flex-lg=\"33\"],[layout-lg=row]>[flex=\"33\"],[layout=row]>[flex-lg=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%}[layout-lg=column]>[flex-lg=\"33\"],[layout-lg=column]>[flex=\"33\"],[layout=column]>[flex-lg=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-height:33.33%}[layout-lg=row]>[flex-lg=\"66\"],[layout-lg=row]>[flex=\"66\"],[layout=row]>[flex-lg=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%}[layout-lg=column]>[flex-lg=\"66\"],[layout-lg=column]>[flex=\"66\"],[layout=column]>[flex-lg=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-height:66.66%}[hide-lg]{display:none}}@media (min-width:1200px){[flex-offset-gt-lg=\"0\"]{margin-left:0}[flex-offset-gt-lg=\"5\"]{margin-left:5%}[flex-offset-gt-lg=\"10\"]{margin-left:10%}[flex-offset-gt-lg=\"15\"]{margin-left:15%}[flex-offset-gt-lg=\"20\"]{margin-left:20%}[flex-offset-gt-lg=\"25\"]{margin-left:25%}[flex-offset-gt-lg=\"30\"]{margin-left:30%}[flex-offset-gt-lg=\"35\"]{margin-left:35%}[flex-offset-gt-lg=\"40\"]{margin-left:40%}[flex-offset-gt-lg=\"45\"]{margin-left:45%}[flex-offset-gt-lg=\"50\"]{margin-left:50%}[flex-offset-gt-lg=\"55\"]{margin-left:55%}[flex-offset-gt-lg=\"60\"]{margin-left:60%}[flex-offset-gt-lg=\"65\"]{margin-left:65%}[flex-offset-gt-lg=\"70\"]{margin-left:70%}[flex-offset-gt-lg=\"75\"]{margin-left:75%}[flex-offset-gt-lg=\"80\"]{margin-left:80%}[flex-offset-gt-lg=\"85\"]{margin-left:85%}[flex-offset-gt-lg=\"90\"]{margin-left:90%}[flex-offset-gt-lg=\"95\"]{margin-left:95%}[flex-offset-gt-lg=\"33\"]{margin-left:33.33333%}[flex-offset-gt-lg=\"66\"]{margin-left:66.66667%}[flex-order-gt-lg=\"0\"]{-ms-flex-order:0;order:0}[flex-order-gt-lg=\"1\"]{-ms-flex-order:1;order:1}[flex-order-gt-lg=\"2\"]{-ms-flex-order:2;order:2}[flex-order-gt-lg=\"3\"]{-ms-flex-order:3;order:3}[flex-order-gt-lg=\"4\"]{-ms-flex-order:4;order:4}[flex-order-gt-lg=\"5\"]{-ms-flex-order:5;order:5}[flex-order-gt-lg=\"6\"]{-ms-flex-order:6;order:6}[flex-order-gt-lg=\"7\"]{-ms-flex-order:7;order:7}[flex-order-gt-lg=\"8\"]{-ms-flex-order:8;order:8}[flex-order-gt-lg=\"9\"]{-ms-flex-order:9;order:9}[flex-order-gt-lg=\"10\"]{-ms-flex-order:10;order:10}[flex-order-gt-lg=\"11\"]{-ms-flex-order:11;order:11}[flex-order-gt-lg=\"12\"]{-ms-flex-order:12;order:12}[flex-order-gt-lg=\"13\"]{-ms-flex-order:13;order:13}[flex-order-gt-lg=\"14\"]{-ms-flex-order:14;order:14}[flex-order-gt-lg=\"15\"]{-ms-flex-order:15;order:15}[flex-order-gt-lg=\"16\"]{-ms-flex-order:16;order:16}[flex-order-gt-lg=\"17\"]{-ms-flex-order:17;order:17}[flex-order-gt-lg=\"18\"]{-ms-flex-order:18;order:18}[flex-order-gt-lg=\"19\"]{-ms-flex-order:19;order:19}[flex-order-gt-lg=\"20\"]{-ms-flex-order:20;order:20}[layout-gt-lg]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}[layout-gt-lg]>*{box-sizing:border-box}[layout-gt-lg=column]{-ms-flex-direction:column;flex-direction:column}[layout-gt-lg=row]{-ms-flex-direction:row;flex-direction:row}[layout-align-gt-lg]{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch}[layout-align-gt-lg^=start]{-ms-flex-pack:start;justify-content:flex-start}[layout-align-gt-lg^=center]{-ms-flex-pack:center;justify-content:center}[layout-align-gt-lg^=end]{-ms-flex-pack:end;justify-content:flex-end}[layout-align-gt-lg^=space-around]{-ms-flex-pack:distribute;justify-content:space-around}[layout-align-gt-lg^=space-between]{-ms-flex-pack:justify;justify-content:space-between}[layout-align-gt-lg$=start]{-ms-flex-align:start;-ms-grid-row-align:flex-start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start}[layout-align-gt-lg$=center]{-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}[layout-align-gt-lg$=center]>*{max-width:100%}[layout-align-gt-lg$=end]{-ms-flex-align:end;-ms-grid-row-align:flex-end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end}[layout-align-gt-lg=center],[layout-align-gt-lg=end],[layout-align-gt-lg=space-around],[layout-align-gt-lg=space-between],[layout-align-gt-lg=start]{-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch}[flex-gt-lg]{-ms-flex:1;flex:1}[flex-gt-lg-start]{margin-bottom:auto}[flex-gt-lg-end]{margin-top:auto}[flex-gt-lg-none]{-ms-flex:0 0 auto;flex:0 0 auto}[flex-gt-lg-initial]{-ms-flex:0 1 auto;flex:0 1 auto}[flex-gt-lg-noshrink]{-ms-flex:1 0 auto;flex:1 0 auto}[flex-gt-lg-auto]{-ms-flex:1 1 auto;flex:1 1 auto}[flex-gt-lg-grow]{-ms-flex:1 1 100%;flex:1 1 100%}[flex-gt-lg],[layout-gt-lg=row]>[flex-gt-lg],[layout=row]>[flex-gt-lg]{max-height:100%}[layout-gt-lg=column]>[flex-gt-lg],[layout=column]>[flex-gt-lg]{max-width:100%}[layout-gt-lg=row]>[flex-gt-lg=\"5\"],[layout-gt-lg=row]>[flex=\"5\"],[layout=row]>[flex-gt-lg=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-width:5%}[layout-gt-lg=column]>[flex-gt-lg=\"5\"],[layout-gt-lg=column]>[flex=\"5\"],[layout=column]>[flex-gt-lg=\"5\"]{-ms-flex:1 1 5%;flex:1 1 5%;max-height:5%}[layout-gt-lg=row]>[flex-gt-lg=\"10\"],[layout-gt-lg=row]>[flex=\"10\"],[layout=row]>[flex-gt-lg=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-width:10%}[layout-gt-lg=column]>[flex-gt-lg=\"10\"],[layout-gt-lg=column]>[flex=\"10\"],[layout=column]>[flex-gt-lg=\"10\"]{-ms-flex:1 1 10%;flex:1 1 10%;max-height:10%}[layout-gt-lg=row]>[flex-gt-lg=\"15\"],[layout-gt-lg=row]>[flex=\"15\"],[layout=row]>[flex-gt-lg=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-width:15%}[layout-gt-lg=column]>[flex-gt-lg=\"15\"],[layout-gt-lg=column]>[flex=\"15\"],[layout=column]>[flex-gt-lg=\"15\"]{-ms-flex:1 1 15%;flex:1 1 15%;max-height:15%}[layout-gt-lg=row]>[flex-gt-lg=\"20\"],[layout-gt-lg=row]>[flex=\"20\"],[layout=row]>[flex-gt-lg=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-width:20%}[layout-gt-lg=column]>[flex-gt-lg=\"20\"],[layout-gt-lg=column]>[flex=\"20\"],[layout=column]>[flex-gt-lg=\"20\"]{-ms-flex:1 1 20%;flex:1 1 20%;max-height:20%}[layout-gt-lg=row]>[flex-gt-lg=\"25\"],[layout-gt-lg=row]>[flex=\"25\"],[layout=row]>[flex-gt-lg=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%}[layout-gt-lg=column]>[flex-gt-lg=\"25\"],[layout-gt-lg=column]>[flex=\"25\"],[layout=column]>[flex-gt-lg=\"25\"]{-ms-flex:1 1 25%;flex:1 1 25%;max-height:25%}[layout-gt-lg=row]>[flex-gt-lg=\"30\"],[layout-gt-lg=row]>[flex=\"30\"],[layout=row]>[flex-gt-lg=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-width:30%}[layout-gt-lg=column]>[flex-gt-lg=\"30\"],[layout-gt-lg=column]>[flex=\"30\"],[layout=column]>[flex-gt-lg=\"30\"]{-ms-flex:1 1 30%;flex:1 1 30%;max-height:30%}[layout-gt-lg=row]>[flex-gt-lg=\"35\"],[layout-gt-lg=row]>[flex=\"35\"],[layout=row]>[flex-gt-lg=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-width:35%}[layout-gt-lg=column]>[flex-gt-lg=\"35\"],[layout-gt-lg=column]>[flex=\"35\"],[layout=column]>[flex-gt-lg=\"35\"]{-ms-flex:1 1 35%;flex:1 1 35%;max-height:35%}[layout-gt-lg=row]>[flex-gt-lg=\"40\"],[layout-gt-lg=row]>[flex=\"40\"],[layout=row]>[flex-gt-lg=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-width:40%}[layout-gt-lg=column]>[flex-gt-lg=\"40\"],[layout-gt-lg=column]>[flex=\"40\"],[layout=column]>[flex-gt-lg=\"40\"]{-ms-flex:1 1 40%;flex:1 1 40%;max-height:40%}[layout-gt-lg=row]>[flex-gt-lg=\"45\"],[layout-gt-lg=row]>[flex=\"45\"],[layout=row]>[flex-gt-lg=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-width:45%}[layout-gt-lg=column]>[flex-gt-lg=\"45\"],[layout-gt-lg=column]>[flex=\"45\"],[layout=column]>[flex-gt-lg=\"45\"]{-ms-flex:1 1 45%;flex:1 1 45%;max-height:45%}[layout-gt-lg=row]>[flex-gt-lg=\"50\"],[layout-gt-lg=row]>[flex=\"50\"],[layout=row]>[flex-gt-lg=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-width:50%}[layout-gt-lg=column]>[flex-gt-lg=\"50\"],[layout-gt-lg=column]>[flex=\"50\"],[layout=column]>[flex-gt-lg=\"50\"]{-ms-flex:1 1 50%;flex:1 1 50%;max-height:50%}[layout-gt-lg=row]>[flex-gt-lg=\"55\"],[layout-gt-lg=row]>[flex=\"55\"],[layout=row]>[flex-gt-lg=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-width:55%}[layout-gt-lg=column]>[flex-gt-lg=\"55\"],[layout-gt-lg=column]>[flex=\"55\"],[layout=column]>[flex-gt-lg=\"55\"]{-ms-flex:1 1 55%;flex:1 1 55%;max-height:55%}[layout-gt-lg=row]>[flex-gt-lg=\"60\"],[layout-gt-lg=row]>[flex=\"60\"],[layout=row]>[flex-gt-lg=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-width:60%}[layout-gt-lg=column]>[flex-gt-lg=\"60\"],[layout-gt-lg=column]>[flex=\"60\"],[layout=column]>[flex-gt-lg=\"60\"]{-ms-flex:1 1 60%;flex:1 1 60%;max-height:60%}[layout-gt-lg=row]>[flex-gt-lg=\"65\"],[layout-gt-lg=row]>[flex=\"65\"],[layout=row]>[flex-gt-lg=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-width:65%}[layout-gt-lg=column]>[flex-gt-lg=\"65\"],[layout-gt-lg=column]>[flex=\"65\"],[layout=column]>[flex-gt-lg=\"65\"]{-ms-flex:1 1 65%;flex:1 1 65%;max-height:65%}[layout-gt-lg=row]>[flex-gt-lg=\"70\"],[layout-gt-lg=row]>[flex=\"70\"],[layout=row]>[flex-gt-lg=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-width:70%}[layout-gt-lg=column]>[flex-gt-lg=\"70\"],[layout-gt-lg=column]>[flex=\"70\"],[layout=column]>[flex-gt-lg=\"70\"]{-ms-flex:1 1 70%;flex:1 1 70%;max-height:70%}[layout-gt-lg=row]>[flex-gt-lg=\"75\"],[layout-gt-lg=row]>[flex=\"75\"],[layout=row]>[flex-gt-lg=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-width:75%}[layout-gt-lg=column]>[flex-gt-lg=\"75\"],[layout-gt-lg=column]>[flex=\"75\"],[layout=column]>[flex-gt-lg=\"75\"]{-ms-flex:1 1 75%;flex:1 1 75%;max-height:75%}[layout-gt-lg=row]>[flex-gt-lg=\"80\"],[layout-gt-lg=row]>[flex=\"80\"],[layout=row]>[flex-gt-lg=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-width:80%}[layout-gt-lg=column]>[flex-gt-lg=\"80\"],[layout-gt-lg=column]>[flex=\"80\"],[layout=column]>[flex-gt-lg=\"80\"]{-ms-flex:1 1 80%;flex:1 1 80%;max-height:80%}[layout-gt-lg=row]>[flex-gt-lg=\"85\"],[layout-gt-lg=row]>[flex=\"85\"],[layout=row]>[flex-gt-lg=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-width:85%}[layout-gt-lg=column]>[flex-gt-lg=\"85\"],[layout-gt-lg=column]>[flex=\"85\"],[layout=column]>[flex-gt-lg=\"85\"]{-ms-flex:1 1 85%;flex:1 1 85%;max-height:85%}[layout-gt-lg=row]>[flex-gt-lg=\"90\"],[layout-gt-lg=row]>[flex=\"90\"],[layout=row]>[flex-gt-lg=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-width:90%}[layout-gt-lg=column]>[flex-gt-lg=\"90\"],[layout-gt-lg=column]>[flex=\"90\"],[layout=column]>[flex-gt-lg=\"90\"]{-ms-flex:1 1 90%;flex:1 1 90%;max-height:90%}[layout-gt-lg=row]>[flex-gt-lg=\"95\"],[layout-gt-lg=row]>[flex=\"95\"],[layout=row]>[flex-gt-lg=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-width:95%}[layout-gt-lg=column]>[flex-gt-lg=\"95\"],[layout-gt-lg=column]>[flex=\"95\"],[layout=column]>[flex-gt-lg=\"95\"]{-ms-flex:1 1 95%;flex:1 1 95%;max-height:95%}[layout-gt-lg=row]>[flex-gt-lg=\"100\"],[layout-gt-lg=row]>[flex=\"100\"],[layout=row]>[flex-gt-lg=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%}[layout-gt-lg=column]>[flex-gt-lg=\"100\"],[layout-gt-lg=column]>[flex=\"100\"],[layout=column]>[flex-gt-lg=\"100\"]{-ms-flex:1 1 100%;flex:1 1 100%;max-height:100%}[layout-gt-lg=row]>[flex-gt-lg=\"33\"],[layout-gt-lg=row]>[flex=\"33\"],[layout=row]>[flex-gt-lg=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-width:33.33%}[layout-gt-lg=column]>[flex-gt-lg=\"33\"],[layout-gt-lg=column]>[flex=\"33\"],[layout=column]>[flex-gt-lg=\"33\"]{-ms-flex:1 1 33.33%;flex:1 1 33.33%;max-height:33.33%}[layout-gt-lg=row]>[flex-gt-lg=\"66\"],[layout-gt-lg=row]>[flex=\"66\"],[layout=row]>[flex-gt-lg=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-width:66.66%}[layout-gt-lg=column]>[flex-gt-lg=\"66\"],[layout-gt-lg=column]>[flex=\"66\"],[layout=column]>[flex-gt-lg=\"66\"]{-ms-flex:1 1 66.66%;flex:1 1 66.66%;max-height:66.66%}[hide-gt-lg]{display:none}}[layout-padding]>[flex-sm]{padding:.25em}[layout-padding],[layout-padding]>[flex-gt-sm],[layout-padding]>[flex-md],[layout-padding]>[flex]{padding:.5em}[layout-padding]>[flex-gt-md],[layout-padding]>[flex-lg]{padding:1em}[layout-margin]>[flex-sm]{margin:.25em}[layout-margin],[layout-margin]>[flex-gt-sm],[layout-margin]>[flex-md],[layout-margin]>[flex]{margin:.5em}[layout-margin]>[flex-gt-md],[layout-margin]>[flex-lg]{margin:1em}[layout-nowrap]{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.button.outline{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:auto;margin-top:1em;border-radius:.1em;font-size:1em;cursor:pointer;line-height:1;text-transform:uppercase;transition:all .33s ease;font-family:Marvel,verdana;background-color:transparent;color:#fff;border:1px solid #fff}.button.outline:hover{background-color:#fff;color:#2e8ab8}.button.reverse{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:auto;margin-top:1em;border-radius:.1em;font-size:1em;cursor:pointer;line-height:1;text-transform:uppercase;transition:all .33s ease;font-family:Marvel,verdana;background-color:transparent;color:#2e8ab8;border:1px solid #2e8ab8}.button.reverse:hover{color:#fff;background-color:#2e8ab8}::-webkit-scrollbar{width:.5em}::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.5)}::-webkit-scrollbar-track{background:rgba(59,72,79,.5)}code,pre{font-family:Cousine,monospace}body,html{background-color:#fff;min-width:320px;font-family:Marvel,verdana;font-weight:300;font-size:16px;line-height:1.5em;color:#3b484f;margin:0;padding:0;height:100%;width:100%}table{margin:1em 0 2em;border-spacing:0;width:100%}table th,table thead{background:#f2f2f2}table th{font-family:Marvel,verdana,sans-serif;font-weight:400;text-align:left;vertical-align:top}table tr td,table tr th{vertical-align:top;padding:.75em .75em .25em .5em;border-bottom:1px solid #e6e6e6}h1,h2,h3,h4,h5,h6{margin:0;margin:1em 0;line-height:1.25em;text-transform:none;font-family:Marvel,sans-serif;font-weight:400}h1{font-size:2.5em;margin:0}h2{font-size:1.5em}h2,h3,h3 a{color:#2e8ab8}h3,h3 a{font-size:1.15em}h4{font-size:1rem;color:#2e8ab8}hr{border:none;width:100%;height:.1rem;background-color:#bcc7cd}hr,p{margin:1em 0}p{padding:0;line-height:1.5em;word-wrap:break-word}p:first-child{margin-top:0}p:last-child{margin-bottom:0}a{position:relative;transition:all .33s ease;text-decoration:none;cursor:pointer;outline:0}a,a:hover{color:#7e1eae}a img{border:none;outline:none}a p,a span{cursor:pointer}img{max-width:100%;height:auto}ul{list-style:square}ol,ul{padding:0 0 0 1em;margin-bottom:0}ol{list-style-type:decimal}ol ol{list-style-type:lower-alpha}b,strong{font-weight:400;font-family:Marvel,verdana,sans-serif}fieldset{margin:0;padding:0;border:0}input[type=submit]{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:auto;margin-top:1em;border-radius:.1em;font-size:1em;cursor:pointer;line-height:1;text-transform:uppercase;transition:all .33s ease;font-family:Marvel,verdana;background-color:transparent;color:#2e8ab8;border:1px solid #2e8ab8;margin:0}input[type=submit]:hover{color:#fff;background-color:#2e8ab8}pre[class*=language-]:after,pre[class*=language-]:before{content:normal}code[class*=language-],pre[class*=language-]{font-family:Cousine,monospace}body{background:#fff;min-width:320px}img{max-width:100%}footer{padding:2em 0;background-color:#3b484f;width:100%;border-bottom:.25em solid rgba(59,72,79,.2);padding-top:medium;padding-bottom:medium;padding-top:2em;padding-bottom:2em;color:#fff}footer>*{margin:0 auto}@media screen and (max-width:600px){footer>*{padding-left:5%;padding-right:5%}}@media screen and (min-width:600px){footer>*{width:493.33333333px}}@media screen and (min-width:960px){footer>*{width:800px}}@media screen and (min-width:1200px){footer>*{width:880px}}footer a{text-shadow:0 0 0 #fff}.github-corner{position:fixed;right:0;z-index:200}@media screen and (max-width:600px){.github-corner{display:none}}*{box-sizing:border-box}nav{background:#2e8ab8;z-index:100;width:100%;box-shadow:inset 0 -.33em 0 rgba(59,72,79,.2)}@media screen and (min-width:600px){nav{position:fixed}}nav a{display:inline-block;transition:all .5s ease;text-decoration:none;color:#fff;padding:1em 2em}@media screen and (max-width:320px){nav a{display:block}}nav a.active,nav a:hover{background:#fff;color:#2e8ab8}article{padding:2em 0;background-color:#fff;width:100%;border-bottom:.25em solid rgba(59,72,79,.2);padding-top:medium;padding-bottom:medium;padding-top:2em;padding-bottom:2em;padding:0 1em;padding-top:5em}article>*{margin:0 auto}@media screen and (max-width:600px){article>*{padding-left:5%;padding-right:5%}}@media screen and (min-width:600px){article>*{width:493.33333333px}}@media screen and (min-width:960px){article>*{width:800px}}@media screen and (min-width:1200px){article>*{width:880px}}article div{padding:1em 0}article>h1{font-size:1.2rem;padding:0 0 1em;border-bottom:1px solid #2e8ab8;text-transform:uppercase;font-weight:400}article>h1:before{content:'// ';color:#2e8ab8}", ""]);
	
	// exports


/***/ },
/* 14 */
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
/* 15 */
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
/* 16 */
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
	  if (( false ? 'undefined' : _typeof(exports)) === T_OBJECT) module.exports = riot;else if (( false ? 'undefined' : _typeof(__webpack_require__(17))) === T_FUNCTION && _typeof(__webpack_require__(18)) !== T_UNDEF) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return riot;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else window.riot = riot;
	})(typeof window != 'undefined' ? window : void 0);

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 18 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {'use strict';
	
	riot.tag2('app', '<a href="https://github.com/MartinMuzatko/webpack-talk" class="github-corner"><svg width="80" height="80" viewbox="0 0 250 250" style="fill:#fff; color:#151513; position: absolute; top: 0; border: 0; right: 0;"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a> <nav> <a href="#{item}" class="{active: name == item}" each="{item in items}">{item}</a> </nav> <article> <h1> {name}</h1> <div name="content"> <yield> </div> </article> <footer> <div> <p> Coded with <span style="color: red">♥</span> by <a href="https://github.com/MartinMuzatko">@MartinMuzatko</a> </p> </div> </footer>', '.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}', '', function (opts) {
	    var _this = this;
	
	    this.items = ['index', 'loader', 'plugin', 'thanks'];
	    this.on('mount', function () {
	        riot.route.start(true);
	        riot.route(function (name) {
	            if (name == 'index' || !name) {
	                _this.content.innerHTML = __webpack_require__(11);
	            } else {
	                _this.content.innerHTML = __webpack_require__(20)("./" + name + '.md');
	            }
	            _this.name = name;
	            riot.mount('loader, xs');
	            _this.update();
	        });
	        riot.route('index');
	    });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./loader.md": 21,
		"./plugin.md": 22,
		"./thanks.md": 23
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
	webpackContext.id = 20;


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"what-is-a-loader-\">What is a loader?</h1>\n<p>A loader in the first place, makes sure that the resource is added the the main bundle.</p>\n<ul>\n<li>json</li>\n<li>javascript</li>\n<li>css</li>\n<li>html</li>\n</ul>\n<h2 id=\"anatomy-of-a-loader\">Anatomy of a Loader</h2>\n<loader>{ test: /.less$/, loader: &#39;style!css!less&#39;}</loader>\n\n<p>Look for all files that end with <code>less</code>.</p>\n<ul>\n<li>Preprocess the files with <a href=\"https://github.com/webpack/less-loader\"><strong>less</strong></a></li>\n<li>turn them into <a href=\"https://github.com/webpack/css-loader\"><strong>css</strong></a><ul>\n<li>resolving <code>import</code> statements into <code>require</code></li>\n<li>performing css-level modifications (minimizing)</li>\n</ul>\n</li>\n<li>bundle them as inline <a href=\"https://github.com/webpack/style-loader\"><strong>style</strong></a>.</li>\n</ul>\n<p>There are three loaders here, because we have to tell Webpack, that we are going to use the result as style. We could also return it as string to our JS application if we&#39;d like to.</p>\n<p>Loaders can be chained, in order to pass a file through various processing steps.</p>\n<pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    preLoaders<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n        <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.html$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'riotjs'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.js$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'eslint!source-map'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    loaders<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n        <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.md$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'html!markdown'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.html$|\\.js$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'babel'</span><span class=\"token punctuation\" >,</span> query<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> presets<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'es2015-riot'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.less$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'style!css!less'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >]</span>\n<span class=\"token punctuation\" >}</span></code></pre><p>Loading modules - Webpack loader chains <code>style!css!less</code></p>\n<ul>\n<li>Formats</li>\n<li>Preloaders, Postloaders</li>\n</ul>\n<p>Example</p>\n<pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\" >var</span> webpack <span class=\"token operator\" >=</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'webpack'</span><span class=\"token punctuation\" >)</span>\n\nmodule<span class=\"token punctuation\" >.</span>exports <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    entry<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./index.js'</span><span class=\"token punctuation\" >,</span>\n    output<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./'</span><span class=\"token punctuation\" >,</span>\n        filename<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'bundle.js'</span><span class=\"token punctuation\" >,</span>\n        sourceMapFilename<span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"[name].js.map\"</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    module<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        preLoaders<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n            <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.html$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'riotjs'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n            <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.js$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'eslint!source-map'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n        loaders<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n            <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.md$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'html!markdown'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n            <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.html$|\\.js$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'babel'</span><span class=\"token punctuation\" >,</span> query<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> presets<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'es2015-riot'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n            <span class=\"token punctuation\" >{</span> test<span class=\"token punctuation\" >:</span> <span class=\"token regex\" >/\\.less$/</span><span class=\"token punctuation\" >,</span> loader<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'style!css!less'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >]</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    plugins<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n        <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >webpack<span class=\"token punctuation\" >.</span>ProvidePlugin</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n            riot<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'riot'</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n    <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    eslint<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        configFile<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./.eslintrc'</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    devtool<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'source-map'</span>\n<span class=\"token punctuation\" >}</span></code></pre>";

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"what-is-a-plugin-\">What is a plugin?</h1>\n<p>A <a href=\"https://webpack.github.io/docs/list-of-plugins.html\">plugin</a> can provide additional functionality as listed below.</p>\n<p>Tasks like</p>\n<ul>\n<li>Polyfilling</li>\n<li>Additional dev servers</li>\n<li>copying contentbases</li>\n<li>Minifying and purifying (removing code that is never executed)</li>\n<li>Image compression</li>\n<li>Offline mode</li>\n<li>Providing Plugins globally</li>\n</ul>\n<h2 id=\"implementing-a-plugin\">Implementing a plugin</h2>\n<p>Plugins have to be required.</p>\n<pre class=\"language-js\"><code class=\"language-js\">\n<span class=\"token keyword\" >var</span> BrowserSyncPlugin <span class=\"token operator\" >=</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'browser-sync-webpack-plugin'</span><span class=\"token punctuation\" >)</span>\n\nmodule<span class=\"token punctuation\" >.</span>exports <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n    <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n    <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n    plugins<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n        <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >BrowserSyncPlugin</span><span class=\"token punctuation\" >(</span>\n            <span class=\"token punctuation\" >{</span>\n                host<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'localhost'</span><span class=\"token punctuation\" >,</span>\n                port<span class=\"token punctuation\" >:</span> <span class=\"token number\" >8081</span><span class=\"token punctuation\" >,</span>\n                proxy<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'http://localhost:8080/'</span>\n            <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n            <span class=\"token punctuation\" >{</span>\n                reload<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span>\n            <span class=\"token punctuation\" >}</span>\n        <span class=\"token punctuation\" >)</span>\n    <span class=\"token punctuation\" >]</span>\n<span class=\"token punctuation\" >}</span></code></pre>";

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<h2 id=\"talk-by-martin-muzatko-https-twitter-com-martinmuzatko-\">Talk by <a href=\"https://twitter.com/martinmuzatko\">Martin Muzatko</a></h2>\n<p>Resources and Talk material: <a href=\"http://www.happy-css.com\">happy-css.com</a></p>\n<p>Source: <a href=\"https://github.com/MartinMuzatko/webpack-talk\">https://github.com/MartinMuzatko/webpack-talk</a></p>\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {'use strict';
	
	riot.tag2('loader', '<code><pre name="code">\n    </pre></code> <div name="legend"> </div> <div name="yield"><yield></div>', '', '', function (opts) {
	    var _this = this;
	
	    this.json = this.yield.innerHTML;
	
	    this.on('mount', function () {
	        _this.prism = __webpack_require__(25);
	        _this.code.innerHTML = _this.prism.highlight(_this.json, _this.prism.languages.js);
	        _this.yield.hidden = true;
	    });
	
	    this.toJSON = function (json) {
	        var jsonString = json.replace(/([\$\w]+)\s*:/g, function (_, $1) {
	            return '"' + $1 + '":';
	        }).replace(/(\/.+\/)/g, function (_, $1) {
	            return '"' + $1 + '":';
	        }).replace(/'([^']+)'/g, function (_, $1) {
	            return '"' + $1 + '"';
	        });
	
	        return JSON.parse(jsonString);
	    };
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 25 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/* **********************************************
	     Begin prism-core.js
	********************************************** */
	
	var _self = typeof window !== 'undefined' ? window // if in browser
	: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
	: {} // if in node js
	;
	
	/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 * MIT license http://www.opensource.org/licenses/mit-license.php/
	 * @author Lea Verou http://lea.verou.me
	 */
	
	var Prism = function () {
	
		// Private helper vars
		var lang = /\blang(?:uage)?-(\w+)\b/i;
		var uniqueId = 0;
	
		var _ = _self.Prism = {
			util: {
				encode: function encode(tokens) {
					if (tokens instanceof Token) {
						return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
					} else if (_.util.type(tokens) === 'Array') {
						return tokens.map(_.util.encode);
					} else {
						return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
					}
				},
	
				type: function type(o) {
					return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
				},
	
				objId: function objId(obj) {
					if (!obj['__id']) {
						Object.defineProperty(obj, '__id', { value: ++uniqueId });
					}
					return obj['__id'];
				},
	
				// Deep clone a language definition (e.g. to extend it)
				clone: function clone(o) {
					var type = _.util.type(o);
	
					switch (type) {
						case 'Object':
							var clone = {};
	
							for (var key in o) {
								if (o.hasOwnProperty(key)) {
									clone[key] = _.util.clone(o[key]);
								}
							}
	
							return clone;
	
						case 'Array':
							// Check for existence for IE8
							return o.map && o.map(function (v) {
								return _.util.clone(v);
							});
					}
	
					return o;
				}
			},
	
			languages: {
				extend: function extend(id, redef) {
					var lang = _.util.clone(_.languages[id]);
	
					for (var key in redef) {
						lang[key] = redef[key];
					}
	
					return lang;
				},
	
				/**
	    * Insert a token before another token in a language literal
	    * As this needs to recreate the object (we cannot actually insert before keys in object literals),
	    * we cannot just provide an object, we need anobject and a key.
	    * @param inside The key (or language id) of the parent
	    * @param before The key to insert before. If not provided, the function appends instead.
	    * @param insert Object with the key/value pairs to insert
	    * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
	    */
				insertBefore: function insertBefore(inside, before, insert, root) {
					root = root || _.languages;
					var grammar = root[inside];
	
					if (arguments.length == 2) {
						insert = arguments[1];
	
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								grammar[newToken] = insert[newToken];
							}
						}
	
						return grammar;
					}
	
					var ret = {};
	
					for (var token in grammar) {
	
						if (grammar.hasOwnProperty(token)) {
	
							if (token == before) {
	
								for (var newToken in insert) {
	
									if (insert.hasOwnProperty(newToken)) {
										ret[newToken] = insert[newToken];
									}
								}
							}
	
							ret[token] = grammar[token];
						}
					}
	
					// Update references in other language definitions
					_.languages.DFS(_.languages, function (key, value) {
						if (value === root[inside] && key != inside) {
							this[key] = ret;
						}
					});
	
					return root[inside] = ret;
				},
	
				// Traverse a language definition with Depth First Search
				DFS: function DFS(o, callback, type, visited) {
					visited = visited || {};
					for (var i in o) {
						if (o.hasOwnProperty(i)) {
							callback.call(o, i, o[i], type || i);
	
							if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
								visited[_.util.objId(o[i])] = true;
								_.languages.DFS(o[i], callback, null, visited);
							} else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
								visited[_.util.objId(o[i])] = true;
								_.languages.DFS(o[i], callback, i, visited);
							}
						}
					}
				}
			},
			plugins: {},
	
			highlightAll: function highlightAll(async, callback) {
				var env = {
					callback: callback,
					selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
				};
	
				_.hooks.run("before-highlightall", env);
	
				var elements = env.elements || document.querySelectorAll(env.selector);
	
				for (var i = 0, element; element = elements[i++];) {
					_.highlightElement(element, async === true, env.callback);
				}
			},
	
			highlightElement: function highlightElement(element, async, callback) {
				// Find language
				var language,
				    grammar,
				    parent = element;
	
				while (parent && !lang.test(parent.className)) {
					parent = parent.parentNode;
				}
	
				if (parent) {
					language = (parent.className.match(lang) || [, ''])[1].toLowerCase();
					grammar = _.languages[language];
				}
	
				// Set language on the element, if not present
				element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
	
				// Set language on the parent, for styling
				parent = element.parentNode;
	
				if (/pre/i.test(parent.nodeName)) {
					parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
				}
	
				var code = element.textContent;
	
				var env = {
					element: element,
					language: language,
					grammar: grammar,
					code: code
				};
	
				_.hooks.run('before-sanity-check', env);
	
				if (!env.code || !env.grammar) {
					_.hooks.run('complete', env);
					return;
				}
	
				_.hooks.run('before-highlight', env);
	
				if (async && _self.Worker) {
					var worker = new Worker(_.filename);
	
					worker.onmessage = function (evt) {
						env.highlightedCode = evt.data;
	
						_.hooks.run('before-insert', env);
	
						env.element.innerHTML = env.highlightedCode;
	
						callback && callback.call(env.element);
						_.hooks.run('after-highlight', env);
						_.hooks.run('complete', env);
					};
	
					worker.postMessage(JSON.stringify({
						language: env.language,
						code: env.code,
						immediateClose: true
					}));
				} else {
					env.highlightedCode = _.highlight(env.code, env.grammar, env.language);
	
					_.hooks.run('before-insert', env);
	
					env.element.innerHTML = env.highlightedCode;
	
					callback && callback.call(element);
	
					_.hooks.run('after-highlight', env);
					_.hooks.run('complete', env);
				}
			},
	
			highlight: function highlight(text, grammar, language) {
				var tokens = _.tokenize(text, grammar);
				return Token.stringify(_.util.encode(tokens), language);
			},
	
			tokenize: function tokenize(text, grammar, language) {
				var Token = _.Token;
	
				var strarr = [text];
	
				var rest = grammar.rest;
	
				if (rest) {
					for (var token in rest) {
						grammar[token] = rest[token];
					}
	
					delete grammar.rest;
				}
	
				tokenloop: for (var token in grammar) {
					if (!grammar.hasOwnProperty(token) || !grammar[token]) {
						continue;
					}
	
					var patterns = grammar[token];
					patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];
	
					for (var j = 0; j < patterns.length; ++j) {
						var pattern = patterns[j],
						    inside = pattern.inside,
						    lookbehind = !!pattern.lookbehind,
						    greedy = !!pattern.greedy,
						    lookbehindLength = 0,
						    alias = pattern.alias;
	
						pattern = pattern.pattern || pattern;
	
						for (var i = 0; i < strarr.length; i++) {
							// Don’t cache length as it changes during the loop
	
							var str = strarr[i];
	
							if (strarr.length > text.length) {
								// Something went terribly wrong, ABORT, ABORT!
								break tokenloop;
							}
	
							if (str instanceof Token) {
								continue;
							}
	
							pattern.lastIndex = 0;
	
							var match = pattern.exec(str),
							    delNum = 1;
	
							// Greedy patterns can override/remove up to two previously matched tokens
							if (!match && greedy && i != strarr.length - 1) {
								// Reconstruct the original text using the next two tokens
								var nextToken = strarr[i + 1].matchedStr || strarr[i + 1],
								    combStr = str + nextToken;
	
								if (i < strarr.length - 2) {
									combStr += strarr[i + 2].matchedStr || strarr[i + 2];
								}
	
								// Try the pattern again on the reconstructed text
								pattern.lastIndex = 0;
								match = pattern.exec(combStr);
								if (!match) {
									continue;
								}
	
								var from = match.index + (lookbehind ? match[1].length : 0);
								// To be a valid candidate, the new match has to start inside of str
								if (from >= str.length) {
									continue;
								}
								var to = match.index + match[0].length,
								    len = str.length + nextToken.length;
	
								// Number of tokens to delete and replace with the new match
								delNum = 3;
	
								if (to <= len) {
									if (strarr[i + 1].greedy) {
										continue;
									}
									delNum = 2;
									combStr = combStr.slice(0, len);
								}
								str = combStr;
							}
	
							if (!match) {
								continue;
							}
	
							if (lookbehind) {
								lookbehindLength = match[1].length;
							}
	
							var from = match.index + lookbehindLength,
							    match = match[0].slice(lookbehindLength),
							    to = from + match.length,
							    before = str.slice(0, from),
							    after = str.slice(to);
	
							var args = [i, delNum];
	
							if (before) {
								args.push(before);
							}
	
							var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
	
							args.push(wrapped);
	
							if (after) {
								args.push(after);
							}
	
							Array.prototype.splice.apply(strarr, args);
						}
					}
				}
	
				return strarr;
			},
	
			hooks: {
				all: {},
	
				add: function add(name, callback) {
					var hooks = _.hooks.all;
	
					hooks[name] = hooks[name] || [];
	
					hooks[name].push(callback);
				},
	
				run: function run(name, env) {
					var callbacks = _.hooks.all[name];
	
					if (!callbacks || !callbacks.length) {
						return;
					}
	
					for (var i = 0, callback; callback = callbacks[i++];) {
						callback(env);
					}
				}
			}
		};
	
		var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
			this.type = type;
			this.content = content;
			this.alias = alias;
			// Copy of the full string this token was created from
			this.matchedStr = matchedStr || null;
			this.greedy = !!greedy;
		};
	
		Token.stringify = function (o, language, parent) {
			if (typeof o == 'string') {
				return o;
			}
	
			if (_.util.type(o) === 'Array') {
				return o.map(function (element) {
					return Token.stringify(element, language, o);
				}).join('');
			}
	
			var env = {
				type: o.type,
				content: Token.stringify(o.content, language, parent),
				tag: 'span',
				classes: ['token', o.type],
				attributes: {},
				language: language,
				parent: parent
			};
	
			if (env.type == 'comment') {
				env.attributes['spellcheck'] = 'true';
			}
	
			if (o.alias) {
				var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
				Array.prototype.push.apply(env.classes, aliases);
			}
	
			_.hooks.run('wrap', env);
	
			var attributes = '';
	
			for (var name in env.attributes) {
				attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
			}
	
			return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';
		};
	
		if (!_self.document) {
			if (!_self.addEventListener) {
				// in Node.js
				return _self.Prism;
			}
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data),
				    lang = message.language,
				    code = message.code,
				    immediateClose = message.immediateClose;
	
				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
	
			return _self.Prism;
		}
	
		//Get current script and highlight
		var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
	
		if (script) {
			_.filename = script.src;
	
			if (document.addEventListener && !script.hasAttribute('data-manual')) {
				if (document.readyState !== "loading") {
					requestAnimationFrame(_.highlightAll, 0);
				} else {
					document.addEventListener('DOMContentLoaded', _.highlightAll);
				}
			}
		}
	
		return _self.Prism;
	}();
	
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Prism;
	}
	
	// hack for components to work correctly in node.js
	if (typeof global !== 'undefined') {
		global.Prism = Prism;
	}
	
	/* **********************************************
	     Begin prism-markup.js
	********************************************** */
	
	Prism.languages.markup = {
		'comment': /<!--[\w\W]*?-->/,
		'prolog': /<\?[\w\W]+?\?>/,
		'doctype': /<!DOCTYPE[\w\W]+?>/,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
			inside: {
				'tag': {
					pattern: /^<\/?[^\s>\/]+/i,
					inside: {
						'punctuation': /^<\/?/,
						'namespace': /^[^\s>\/:]+:/
					}
				},
				'attr-value': {
					pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
					inside: {
						'punctuation': /[=>"']/
					}
				},
				'punctuation': /\/?>/,
				'attr-name': {
					pattern: /[^\s>\/]+/,
					inside: {
						'namespace': /^[^\s>\/:]+:/
					}
				}
	
			}
		},
		'entity': /&#?[\da-z]{1,8};/i
	};
	
	// Plugin to make entity title show the real entity, idea by Roman Komarov
	Prism.hooks.add('wrap', function (env) {
	
		if (env.type === 'entity') {
			env.attributes['title'] = env.content.replace(/&amp;/, '&');
		}
	});
	
	Prism.languages.xml = Prism.languages.markup;
	Prism.languages.html = Prism.languages.markup;
	Prism.languages.mathml = Prism.languages.markup;
	Prism.languages.svg = Prism.languages.markup;
	
	/* **********************************************
	     Begin prism-css.js
	********************************************** */
	
	Prism.languages.css = {
		'comment': /\/\*[\w\W]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
		'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
		'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		'property': /(\b|\B)[\w-]+(?=\s*:)/i,
		'important': /\B!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:]/
	};
	
	Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'style': {
				pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
				lookbehind: true,
				inside: Prism.languages.css,
				alias: 'language-css'
			}
		});
	
		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|').*?\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: Prism.languages.markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, Prism.languages.markup.tag);
	}
	
	/* **********************************************
	     Begin prism-clike.js
	********************************************** */
	
	Prism.languages.clike = {
		'comment': [{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}],
		'string': {
			pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'class-name': {
			pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
			lookbehind: true,
			inside: {
				punctuation: /(\.|\\)/
			}
		},
		'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		'boolean': /\b(true|false)\b/,
		'function': /[a-z0-9_]+(?=\()/i,
		'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
		'punctuation': /[{}[\];(),.:]/
	};
	
	/* **********************************************
	     Begin prism-javascript.js
	********************************************** */
	
	Prism.languages.javascript = Prism.languages.extend('clike', {
		'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
		'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
		// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
	});
	
	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: true,
			greedy: true
		}
	});
	
	Prism.languages.insertBefore('javascript', 'string', {
		'template-string': {
			pattern: /`(?:\\\\|\\?[^\\])*?`/,
			greedy: true,
			inside: {
				'interpolation': {
					pattern: /\$\{[^}]+\}/,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\$\{|\}$/,
							alias: 'punctuation'
						},
						rest: Prism.languages.javascript
					}
				},
				'string': /[\s\S]+/
			}
		}
	});
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'script': {
				pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
				lookbehind: true,
				inside: Prism.languages.javascript,
				alias: 'language-javascript'
			}
		});
	}
	
	Prism.languages.js = Prism.languages.javascript;
	
	/* **********************************************
	     Begin prism-file-highlight.js
	********************************************** */
	
	(function () {
		if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
			return;
		}
	
		self.Prism.fileHighlight = function () {
	
			var Extensions = {
				'js': 'javascript',
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell',
				'sh': 'bash',
				'bat': 'batch',
				'h': 'c',
				'tex': 'latex'
			};
	
			if (Array.prototype.forEach) {
				// Check to prevent error in IE8
				Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
					var src = pre.getAttribute('data-src');
	
					var language,
					    parent = pre;
					var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
					while (parent && !lang.test(parent.className)) {
						parent = parent.parentNode;
					}
	
					if (parent) {
						language = (pre.className.match(lang) || [, ''])[1];
					}
	
					if (!language) {
						var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
						language = Extensions[extension] || extension;
					}
	
					var code = document.createElement('code');
					code.className = 'language-' + language;
	
					pre.textContent = '';
	
					code.textContent = 'Loading…';
	
					pre.appendChild(code);
	
					var xhr = new XMLHttpRequest();
	
					xhr.open('GET', src, true);
	
					xhr.onreadystatechange = function () {
						if (xhr.readyState == 4) {
	
							if (xhr.status < 400 && xhr.responseText) {
								code.textContent = xhr.responseText;
	
								Prism.highlightElement(code);
							} else if (xhr.status >= 400) {
								code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
							} else {
								code.textContent = '✖ Error: File does not exist or is empty';
							}
						}
					};
	
					xhr.send(null);
				});
			}
		};
	
		document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 26 */
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