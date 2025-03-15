/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/css/_variables.scss":
/*!***************************************!*\
  !*** ./resources/css/_variables.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/app.scss":
/*!********************************!*\
  !*** ./resources/css/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/media_queries.scss":
/*!******************************************!*\
  !*** ./resources/css/media_queries.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

var addEventOnElements = function addEventOnElements(elements, eventType, callback) {
  for (var i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/*Theme Toggle*/
document.addEventListener('DOMContentLoaded', function () {
  var themeToggle = document.getElementById('theme-toggle');
  var body = document.body;
  var themePreference = localStorage.getItem('themePreference');
  if (themePreference) {
    body.classList.add(themePreference);
    if (themePreference === 'dark-mode') {
      themeToggle.checked = true;
      moveToggleToRight();
    }
  }
  themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    localStorage.setItem('themePreference', body.classList.contains('dark-mode') ? 'dark-mode' : '');
    moveToggleToRight();
  });
  function moveToggleToRight() {
    var toggleWidth = themeToggle.offsetWidth;
    if (themeToggle.checked) {
      themeToggle.nextElementSibling.style.transform = "translateX(".concat(toggleWidth, "px)");
    } else {
      themeToggle.nextElementSibling.style.transform = '';
    }
  }
});
var backTopBtn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
});

/*HEADER SCROLLING*/
var headerSmooth = document.getElementById("header-menu");
window.addEventListener("scroll", function () {
  var scrollPos = window.pageYOffset;
  scrollPos > 50 ? headerSmooth.classList.add("scrolled") : headerSmooth.classList.remove("scrolled");
});
if (toast) {
  if (toast.innerText.trim() !== '') {
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
    }, 5000);
  }
}

/*MODAL*/
document.addEventListener('DOMContentLoaded', function () {
  var openModalBtn = document.getElementById('openModalBtn');
  var closeModalBtn = document.getElementById('closeModalBtn');
  var modal = document.getElementById('myModal');
  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'flex';
  });
  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      // modal.style.display = 'none'; // Uncomment if you want to close the modal when clicking outside
    }
  });
});

/*NAVBAR Toggle*/
var navbar = document.querySelector("[data-navbar]");
var navTogglers = document.querySelectorAll("[data-nav-toggler]");
var toggleNav = function toggleNav() {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};
addEventOnElements(navTogglers, "click", toggleNav);
var buttons = document.querySelectorAll(".card-buttons button");
var sections = document.querySelectorAll(".card-section");
var card = document.querySelector(".card");
var handleButtonClick = function handleButtonClick(e) {
  var targetSection = e.target.getAttribute("data-section");
  var section = document.querySelector(targetSection);
  targetSection !== "#about" ? card.classList.add("is-active") : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(function (s) {
    return s.classList.remove("is-active");
  });
  buttons.forEach(function (b) {
    return b.classList.remove("is-active");
  });
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};
buttons.forEach(function (btn) {
  btn.addEventListener("click", handleButtonClick);
});
var handleDropdownHover = function handleDropdownHover(containerId) {
  var dropdownContainer = document.getElementById(containerId);
  if (!dropdownContainer) {
    console.log(containerId + ' not found');
    return;
  }
  var itemList = dropdownContainer.querySelector('.item-list');
  if (!itemList) {
    console.log(containerId + ' .item-list not found');
    return;
  }
  var checkbox = dropdownContainer.querySelector('.menu-button');
  dropdownContainer.addEventListener('mouseover', function () {
    console.log(containerId + ' mouseover');
    itemList.style.transform = 'translateX(-50%) scale(1)';
    itemList.style.opacity = '1';
    checkbox.checked = true;
  });
  dropdownContainer.addEventListener('mouseout', function () {
    itemList.style.transform = 'translateX(-50%) scale(0)';
    itemList.style.opacity = '0';
    checkbox.checked = false;
  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0,
/******/ 			"css/_variables": 0,
/******/ 			"css/media_queries": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app","css/_variables","css/media_queries"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/_variables","css/media_queries"], () => (__webpack_require__("./resources/css/media_queries.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/_variables","css/media_queries"], () => (__webpack_require__("./resources/css/app.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app","css/_variables","css/media_queries"], () => (__webpack_require__("./resources/css/_variables.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;