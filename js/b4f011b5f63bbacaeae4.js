"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_About_js"],{

/***/ "./src/assets/styles/pages/about.sass":
/*!********************************************!*\
  !*** ./src/assets/styles/pages/about.sass ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/about.sass?");

/***/ }),

/***/ "./src/app/blocks/about/About.js":
/*!***************************************!*\
  !*** ./src/app/blocks/about/About.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\r\n    return /*html*/`\r\n        <section class=\"about\">\r\n            <div class=\"about__illustrations\">\r\n                <img src=\"/images/rajon.png\" alt=\"\" class=\"about__image\">\r\n            </div>\r\n            <div class=\"about__text\">\r\n                ${t.description.map(text => /*html*/`\r\n                    <p class=\"about__description\">${text}</p>\r\n                `).join(\"\")}\r\n            </div>\r\n        </section>\r\n    `\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/about/About.js?");

/***/ }),

/***/ "./src/app/blocks/about/Facts.js":
/*!***************************************!*\
  !*** ./src/app/blocks/about/Facts.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\r\n    return /*html*/`\r\n        <section class=\"facts\">\r\n            <h2 class=\"h2\">${t.title}</h2>\r\n            <div class=\"facts__content\">\r\n                <ul class=\"facts__list\">\r\n                    ${t.list.map(fact => /*html*/`\r\n                        <li class=\"fact\">${fact}</li>\r\n                    `).join(\"\")}\r\n                </ul>\r\n                <div class=\"facts__illustrations\">    \r\n                </div>\r\n            </div>\r\n        </section>\r\n    `\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/about/Facts.js?");

/***/ }),

/***/ "./src/app/blocks/about/Skills.js":
/*!****************************************!*\
  !*** ./src/app/blocks/about/Skills.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_SkillBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/SkillBlock */ \"./src/app/components/SkillBlock.js\");\n/* harmony import */ var _consts_skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/skills */ \"./src/app/consts/skills.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\r\n    return /*html*/`\r\n        <section class=\"skills\">\r\n            <h2 class=\"h2\">${t.title}</h2>\r\n            <div class=\"skills__content\">\r\n                ${Object.keys(_consts_skills__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n                            .map((id) => (0,_components_SkillBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ id }, t2))\r\n                            .join(\"\")}\r\n            </div>\r\n        </section>\r\n    `\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/about/Skills.js?");

/***/ }),

/***/ "./src/app/components/Path.js":
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\r\n    return /*html*/`\r\n        <div class=\"path\">\r\n            <h1 class=\"h1 path__name\">${window.location.pathname.slice(1)}</h1>\r\n            <p class=\"path__description\">${description}</p>\r\n            \r\n        </div>\r\n    `\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/components/Path.js?");

/***/ }),

/***/ "./src/app/components/SkillBlock.js":
/*!******************************************!*\
  !*** ./src/app/components/SkillBlock.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/skills */ \"./src/app/consts/skills.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\r\n    return /*html*/ `\r\n        <div class=\"skill-block\">\r\n            <div class=\"skill-block__name\">${t[id]}</div>\r\n            <ul class=\"skill-block__list\">\r\n                ${(_consts_skills__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].map((techIndex) => _consts_techs__WEBPACK_IMPORTED_MODULE_1__[\"default\"][techIndex]))\r\n                    .map(\r\n                        (tech) =>\r\n                            /*html*/ `<li class=\"skill-block__skill\">${tech}</li>`\r\n                    )\r\n                    .join(\"\")}\r\n            </ul>\r\n        </div>\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/SkillBlock.js?");

/***/ }),

/***/ "./src/app/consts/skills.js":
/*!**********************************!*\
  !*** ./src/app/consts/skills.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    language: [\"js\", \"php\", \"html\", \"css\", \"c\"],\r\n    database: [\"sqlite\", \"postgreSql\"],\r\n    wordPress: [\"wordpressDev\", \"wordpressCo\", \"wordpressTD\", \"wordpressM\", \"wordpressS\", \"wprdpressSo\"],\r\n    tools: [\"elementor\", \"divi\", \"woocommerce\", \"jetPlugins\", \"sliderRevolution\", \"googleAnalytics\", \"contactForm\", \"crocoBlock\"],\r\n    others: [\"vscode\", \"figma\", \"git\", \"webpack\", \"canva\"],      \r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/skills.js?");

/***/ }),

/***/ "./src/app/consts/techs.js":
/*!*********************************!*\
  !*** ./src/app/consts/techs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    js: \"JavaScript\",\r\n    python: \"Python\",\r\n    sqlite: \"MySQL\",\r\n    php: \"PHP\",\r\n    c: \"C++\",\r\n    wordpress: \"WordPress\",\r\n    wordpressDev: \"WP 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁\",\r\n    wordpressCo: \"WP 𝗖𝘂𝘀𝘁𝗼𝗺𝗶𝘇𝗮𝘁𝗶𝗼𝗻\",\r\n    wordpressTD: \"WP 𝗧𝗵𝗲𝗺𝗲 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁\",\r\n    wordpressM: \"WP 𝗠𝗮𝗶𝗻𝘁𝗲𝗻𝗮𝗻𝗰𝗲\",\r\n    wordpressS: \"WP 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆\",\r\n    wprdpressSo: \"WP 𝗦𝗽𝗲𝗲𝗱 𝗢𝗽𝘁𝗶𝗺𝗶𝘇𝗮𝘁𝗶𝗼𝗻\",\r\n    postgreSql: \"PostgreSQL\",\r\n    figmatowp: \"Figma to WordPress\",\r\n    html: \"HTML\",\r\n    css: \"CSS\",\r\n    sass: \"SASS\",\r\n    scss: \"SCSS\",\r\n    node: \"Node.js\",\r\n    vscode: \"VSCode\",\r\n    figma: \"Figma\",\r\n    git: \"Git & GitHub\",\r\n    webpack: \"WebPack\",\r\n    canva: \"Canva\",\r\n    pug: \"Pug\",\r\n    gulp: \"Gulp\",\r\n    next: \"Next\",\r\n    deno: \"Deno\",\r\n    pixijs: \"PixiJS\",\r\n    preact: \"Preact\",\r\n    elementor: \"Elementor\",\r\n    divi: \"Divi\",\r\n    woocommerce: \"Woocommerce\",\r\n    jetPlugins: \"Jet Plugins\",\r\n    sliderRevolution: \"Slider Revolution\",\r\n    googleAnalytics: \"Google Analytics\",\r\n    contactForm: \"Contact Form 7\",\r\n    crocoBlock: \"Crocoblock \",\r\n    ultimateM: \"Ultimate Member\",\r\n    revslider: \"Revslider\",\r\n    smartcrop: \"WordPress Smartcrop\",\r\n    scroll: \"Mousewheel Smooth Scroll\",\r\n    shopify: \"Shopify\",\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/techs.js?");

/***/ }),

/***/ "./src/app/views/About.js":
/*!********************************!*\
  !*** ./src/app/views/About.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var _blocks_about_About_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/blocks/about/About.js */ \"./src/app/blocks/about/About.js\");\n/* harmony import */ var _blocks_about_Skills_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/blocks/about/Skills.js */ \"./src/app/blocks/about/Skills.js\");\n/* harmony import */ var _blocks_about_Facts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/blocks/about/Facts.js */ \"./src/app/blocks/about/Facts.js\");\n/* harmony import */ var styles_pages_about_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/pages/about.sass */ \"./src/assets/styles/pages/about.sass\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, locale) => {\r\n    return /*html*/ `\r\n        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ description: t.description })}\r\n        ${(0,_blocks_about_About_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t.about)}\r\n        ${(0,_blocks_about_Skills_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(t.skills, locale.skills)}\r\n        ${(0,_blocks_about_Facts_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(t.facts)}\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/About.js?");

/***/ })

}]);