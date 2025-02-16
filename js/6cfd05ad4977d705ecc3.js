"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_Projects_js"],{

/***/ "./src/assets/styles/pages/projects.sass":
/*!***********************************************!*\
  !*** ./src/assets/styles/pages/projects.sass ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/projects.sass?");

/***/ }),

/***/ "./src/app/components/Path.js":
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\r\n    return /*html*/`\r\n        <div class=\"path\">\r\n            <h1 class=\"h1 path__name\">${window.location.pathname.slice(1)}</h1>\r\n            <p class=\"path__description\">${description}</p>\r\n            \r\n        </div>\r\n    `\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/components/Path.js?");

/***/ }),

/***/ "./src/app/components/Project.js":
/*!***************************************!*\
  !*** ./src/app/components/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/websites */ \"./src/app/consts/websites.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\r\n\r\n\r\n\r\n\r\nfunction mapLinks(links) {\r\n    function map(link) {\r\n        let href =\r\n        \"https://\" + (link === \"live\" ? \"\" : _consts_websites__WEBPACK_IMPORTED_MODULE_1__[\"default\"][link]) + links[link];\r\n\r\n        if (link === \"figma\") href = `https://figma.com/community/file/${links[link]}`\r\n        if (link === \"upwork\") href = `https://upwork.com/freelancers/~${links[link]}`\r\n        if (link === \"fiverr\") href = `https://www.fiverr.com/${links[link]}`\r\n        if (link === \"github\" && links[link].startsWith(\"/\")) href = _consts_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"].github + links[link]\r\n\r\n\r\n        const className = link === \"cached\" ? \"button__secondary\" : \"\";\r\n        const name = `${link[0].toUpperCase()}${link.slice(1)}`;\r\n\r\n        return /*html*/ `<a href=\"${href}\" class=\"button ${className}\">${name} =></a>`;\r\n    }\r\n\r\n    return Object.keys(links).map(map).join(\"\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\r\n    const { hasImage, techs: projectTech, links } = _consts_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(\r\n        (project) => project.id === id\r\n    );\r\n\r\n    return /*html*/ `\r\n        <div class=\"project\">\r\n            ${\r\n                hasImage\r\n                    ? `<img src=\"/images/projects/${id}.webp\" alt=\"${t[id].name}\" class=\"project__image\">`\r\n                    : \"\"\r\n            }\r\n            \r\n            <ul class=\"project__techs\">\r\n                ${projectTech\r\n                    .map(\r\n                        (tech) =>\r\n                            /*html*/ `<li class=\"project__tech\">${_consts_techs__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tech]}</li>`\r\n                    )\r\n                    .join(\"\")}\r\n            </ul> \r\n\r\n            <div class=\"project__content\">\r\n                <div class=\"project__name\">${t[id].name}</div>\r\n                <div class=\"project__description\">${t[id].description}</div>\r\n                <div class=\"project__links\">${mapLinks(links)}</div>\r\n            </div>\r\n        </div> \r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Project.js?");

/***/ }),

/***/ "./src/app/components/ProjectList.js":
/*!*******************************************!*\
  !*** ./src/app/components/ProjectList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Project */ \"./src/app/components/Project.js\");\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ title, filter = () => true, limit = _consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length }, t) => {\r\n    return /*html*/ `\r\n            ${title ? `<div> <h2 class=\"h2\">${title}</h2>` : \"\"}\r\n            <div class=\"project-list\">\r\n                ${_consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n                    .filter(filter)\r\n                    .slice(0, limit)\r\n                    .sort((a, b) => a.hasImage - b.hasImage)\r\n                    .map(({ id }) => (0,_components_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ id }, t))\r\n                    .join(\"\")}\r\n            </div>\r\n        ${title ? \"</div>\" : \"\"}\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/ProjectList.js?");

/***/ }),

/***/ "./src/app/consts/projects.js":
/*!************************************!*\
  !*** ./src/app/consts/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * @type {import(\"../../types/Project\").Project[]}\r\n */\r\nconst projects = [\r\n    {\r\n        id: \"coremedix\",\r\n        links: {\r\n            live: \"3dhub.life\",\r\n        },\r\n        techs: [\"elementor\", \"ultimateM\", \"woocommerce\"],\r\n        hasImage: true,\r\n    },\r\n    {\r\n        id: \"csl\",\r\n        links: {\r\n            live: \"csl24.com\",\r\n        },\r\n        techs: [\"elementor\", \"woocommerce\", \"revslider\"],\r\n        hasImage: true\r\n    },\r\n    {\r\n        id: \"rafanellievents\",\r\n        links: {\r\n            live: \"rafanellievents.com\",\r\n        },\r\n        techs: [\"smartcrop\", \"scroll\"],\r\n        hasImage: true,\r\n    },\r\n    {\r\n        id: \"liondiamonds\",\r\n        links: {\r\n            live: \"liondiamonds.nyc\",\r\n        },\r\n        techs: [\"shopify\"],\r\n        hasImage: true,\r\n    },\r\n    {\r\n        id: \"project1\",\r\n        techs: [\"html\", \"css\", \"js\"],\r\n        links: {\r\n            live: \"rajonmn.github.io/WSE-Project-1-Figma-to-HTML-CSS-JavaScript\",\r\n        },\r\n        hasImage: true,\r\n    },\r\n    {\r\n        id: \"upwork\",\r\n        techs: [\"wordpress\", \"shopify\"],\r\n        links: {\r\n            upwork: \"011b1e69bacf2ea7b8\",\r\n        },\r\n        isSmall: true,\r\n    },\r\n    {\r\n        id: \"fiverr\",\r\n        techs: [\"figmatowp\"],\r\n        links: {\r\n            fiverr: \"rajonmn\",\r\n        },\r\n        isSmall: true,\r\n    },\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://portfolio/./src/app/consts/projects.js?");

/***/ }),

/***/ "./src/app/consts/techs.js":
/*!*********************************!*\
  !*** ./src/app/consts/techs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    js: \"JavaScript\",\r\n    python: \"Python\",\r\n    sqlite: \"MySQL\",\r\n    php: \"PHP\",\r\n    c: \"C++\",\r\n    wordpress: \"WordPress\",\r\n    wordpressDev: \"WP 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁\",\r\n    wordpressCo: \"WP 𝗖𝘂𝘀𝘁𝗼𝗺𝗶𝘇𝗮𝘁𝗶𝗼𝗻\",\r\n    wordpressTD: \"WP 𝗧𝗵𝗲𝗺𝗲 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁\",\r\n    wordpressM: \"WP 𝗠𝗮𝗶𝗻𝘁𝗲𝗻𝗮𝗻𝗰𝗲\",\r\n    wordpressS: \"WP 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆\",\r\n    wprdpressSo: \"WP 𝗦𝗽𝗲𝗲𝗱 𝗢𝗽𝘁𝗶𝗺𝗶𝘇𝗮𝘁𝗶𝗼𝗻\",\r\n    postgreSql: \"PostgreSQL\",\r\n    figmatowp: \"Figma to WordPress\",\r\n    html: \"HTML\",\r\n    css: \"CSS\",\r\n    sass: \"SASS\",\r\n    scss: \"SCSS\",\r\n    node: \"Node.js\",\r\n    vscode: \"VSCode\",\r\n    figma: \"Figma\",\r\n    git: \"Git & GitHub\",\r\n    webpack: \"WebPack\",\r\n    canva: \"Canva\",\r\n    pug: \"Pug\",\r\n    gulp: \"Gulp\",\r\n    next: \"Next\",\r\n    deno: \"Deno\",\r\n    pixijs: \"PixiJS\",\r\n    preact: \"Preact\",\r\n    elementor: \"Elementor\",\r\n    divi: \"Divi\",\r\n    woocommerce: \"Woocommerce\",\r\n    jetPlugins: \"Jet Plugins\",\r\n    sliderRevolution: \"Slider Revolution\",\r\n    googleAnalytics: \"Google Analytics\",\r\n    contactForm: \"Contact Form 7\",\r\n    crocoBlock: \"Crocoblock \",\r\n    ultimateM: \"Ultimate Member\",\r\n    revslider: \"Revslider\",\r\n    smartcrop: \"WordPress Smartcrop\",\r\n    scroll: \"Mousewheel Smooth Scroll\",\r\n    shopify: \"Shopify\",\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/techs.js?");

/***/ }),

/***/ "./src/app/views/Projects.js":
/*!***********************************!*\
  !*** ./src/app/views/Projects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectList.js */ \"./src/app/components/ProjectList.js\");\n/* harmony import */ var styles_pages_projects_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/pages/projects.sass */ \"./src/assets/styles/pages/projects.sass\");\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\r\n    return /*html*/ `\r\n        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ description: t.description })}\r\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.decent, filter: (p) => !p.isSmall }, t2.projects)}\r\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.small, filter: (p) => p.isSmall && !p.isInProgress }, t2.projects)}\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Projects.js?");

/***/ })

}]);