/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_gallery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/gallery/js */ "./src/libs/gallery/js/index.js");

var gallery = new _libs_gallery_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('.gallery'));

/***/ }),

/***/ "./src/libs/gallery/js/index.js":
/*!**************************************!*\
  !*** ./src/libs/gallery/js/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gallery)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultOptions = {
  linkClass: '.card'
};
var explosionClassName = 'explosion';
var explosionOpenedClassName = 'explosion_Opened';
var explosionOpeningClassName = 'explosion_Opening';
var explosionSummaryClassName = 'explosionSummary';
var explosionControlsClassName = 'explosionControls';
var explosionImagesClassName = 'explosionImages';
var explosionSummaryContentClassName = 'explosionSummaryContent';
var explosionTitleClassName = 'explosionTitle';
var explosionDescriptionClassName = 'explosionDescription';
var explosionImageClassName = 'explosionImage';
var explosionCloseClassName = 'explosionClose';
var explosionNavsClassName = 'explosionNavs';
var explosionNavClassName = 'explosionNav';
var explosionNavPrevClassName = 'explosionNavPrev';
var explosionNavNextClassName = 'explosionNavNext';
var explosionCounterClassName = 'explosionCounter';
var explosionNavDisabledClassName = 'explosionNavDisabled';
var explosionPrevHiddenImageClassName = 'explosionImage_PrevHidden';
var explosionPrevShowingImageClassName = 'explosionImage_PrevShowing';
var explosionActiveImageClassName = 'explosionImage_Active';
var explosionNextShowingImageClassName = 'explosionImage_NextShowing';
var explosionNextHiddenImageClassName = 'explosionImage_NextHidden';

var Gallery = /*#__PURE__*/function () {
  function Gallery(elementNode, options) {
    var _this = this;

    _classCallCheck(this, Gallery);

    _defineProperty(this, "resize", function () {
      if (_this.galleryIsOpened()) {
        _this.setInitSizedToImages();

        _this.setGalleryStyles();
      }
    });

    _defineProperty(this, "keyDown", function (event) {
      if (_this.galleryIsOpened()) {
        if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
          _this.closeGallery();
        }
      }
    });

    _defineProperty(this, "galleryIsOpened", function () {
      return _this.modalContainerNode.classList.contains(explosionOpenedClassName);
    });

    _defineProperty(this, "galleryIsOpening", function () {
      return _this.modalContainerNode.classList.contains(explosionOpeningClassName);
    });

    _defineProperty(this, "closeGallery", function () {
      _this.setInitPositionsToImages();

      _this.explosionImageNodes.forEach(function (imageNode) {
        imageNode.style.opacity = 1;
      });

      _this.explosionSummaryNode.style.width = '0';
      _this.explosionControlsNode.style.marginTop = '3000px';
      fadeOut(_this.modalContainerNode, function () {
        _this.modalContainerNode.classList.remove(explosionOpenedClassName);
      });
    });

    _defineProperty(this, "switchImages", function (event) {
      event.preventDefault();
      var buttonNode = event.target.closest('button');
      if (!buttonNode) return;
      var isPrevButton = buttonNode.classList.contains(explosionNavPrevClassName);
      var isNextButton = buttonNode.classList.contains(explosionNavNextClassName);

      if (_this.currentIndex > 0 && isPrevButton) {
        _this.currentIndex -= 1;
      }

      if (_this.currentIndex < _this.size - 1 && isNextButton) {
        _this.currentIndex += 1;
      }

      _this.switchChanges(true);
    });

    _defineProperty(this, "activateGallery", function (event) {
      event.preventDefault();
      var linkNode = event.target.closest('a');
      if (!linkNode || _this.galleryIsOpened() || _this.galleryIsOpening()) return;
      _this.currentIndex = Array.from(_this.linkNodes).findIndex(function (itemNode) {
        return linkNode === itemNode;
      });

      _this.modalContainerNode.classList.add(explosionOpeningClassName);

      fadeIn(_this.modalContainerNode, function () {
        _this.modalContainerNode.classList.remove(explosionOpeningClassName);

        _this.modalContainerNode.classList.add(explosionOpenedClassName);

        _this.switchChanges();
      });

      _this.setInitSizedToImages();

      _this.setInitPositionsToImages();
    });

    console.log(elementNode);
    this.options = _objectSpread(_objectSpread({}, defaultOptions), options);
    this.containerNode = elementNode;
    this.linkNodes = elementNode.querySelectorAll(this.options.linkClass);
    this.minWidth = 1023;
    this.minHeight = 600;
    this.padding = 2 * 16;
    this.showingCount = 4;
    this.currentIndex = 0;
    this.size = this.linkNodes.length; // Initializing current gallery

    this.initModal();
    this.events();
  }

  _createClass(Gallery, [{
    key: "initModal",
    value: function initModal() {
      this.modalContainerNode = document.createElement('div');
      this.modalContainerNode.className = explosionClassName;
      this.modalContainerNode.innerHTML = "\n            <div class = \"".concat(explosionSummaryClassName, "\">\n                <div class = \"").concat(explosionSummaryContentClassName, "\">\n                    <h2 class=\"").concat(explosionTitleClassName, "\"></h2>\n                    <p class=\"").concat(explosionDescriptionClassName, "\"></p>\n                </div>\n            </div>\n            <div class=\"").concat(explosionControlsClassName, "\">\n                <button class=\"").concat(explosionCloseClassName, "\"></button>\n                <div class=\"").concat(explosionNavsClassName, "\">\n                    <button class=\"").concat(explosionNavClassName, " ").concat(explosionNavPrevClassName, "\"></button>\n                    <div class=\"").concat(explosionCounterClassName, "\">1/").concat(this.size, "</div>\n                    <button class=\"").concat(explosionNavClassName, " ").concat(explosionNavNextClassName, "\"></button>\n                </div>\n            </div>\n            <div class=\"").concat(explosionImagesClassName, "\">\n                ").concat(Array.from(this.linkNodes).map(function (linkNode) {
        return "\n                    <img src=\"".concat(linkNode.getAttribute('href'), "\" alt=\"").concat(linkNode.dataset.title, "\"\n                        class=\"").concat(explosionImageClassName, "\" \n                        data-title=\"").concat(linkNode.dataset.title, "\" \n                        data-description=\"").concat(linkNode.dataset.description, "\" />\n                ");
      }).join(''), "\n            </div>\n        ");
      document.body.appendChild(this.modalContainerNode);
      this.explosionImageNodes = this.modalContainerNode.querySelectorAll(".".concat(explosionImageClassName));
      this.explosionControlsNode = this.modalContainerNode.querySelector(".".concat(explosionControlsClassName));
      this.explosionNavPrevNode = this.modalContainerNode.querySelector(".".concat(explosionNavPrevClassName));
      this.explosionNavNextNode = this.modalContainerNode.querySelector(".".concat(explosionNavNextClassName));
      this.explosionChangeCounter = this.modalContainerNode.querySelector(".".concat(explosionCounterClassName));
      this.explosionTitleNode = this.modalContainerNode.querySelector(".".concat(explosionTitleClassName));
      this.explosionDescriptionNode = this.modalContainerNode.querySelector(".".concat(explosionDescriptionClassName));
      this.explosionSummaryNode = this.modalContainerNode.querySelector(".".concat(explosionSummaryClassName));
      this.explosionNavsNode = this.modalContainerNode.querySelector(".".concat(explosionNavsClassName));
      this.explosionSummaryContentNode = this.modalContainerNode.querySelector(".".concat(explosionSummaryContentClassName));
      this.explosionCloseNode = this.modalContainerNode.querySelector(".".concat(explosionCloseClassName));
    }
  }, {
    key: "events",
    value: function events() {
      this.throttledResize = throttle(this.resize, 200);
      window.addEventListener('resize', this.throttledResize);
      this.containerNode.addEventListener('click', this.activateGallery);
      this.explosionNavsNode.addEventListener('click', this.switchImages);
      this.explosionCloseNode.addEventListener('click', this.closeGallery);
      window.addEventListener('keyup', this.keyDown);
    }
  }, {
    key: "setInitSizedToImages",
    value: function setInitSizedToImages() {
      var _this2 = this;

      this.linkNodes.forEach(function (linkNode, index) {
        var data = linkNode.getBoundingClientRect();
        _this2.explosionImageNodes[index].style.width = data.width + 'px';
        _this2.explosionImageNodes[index].style.height = data.height + 'px';
      });
    }
  }, {
    key: "setInitPositionsToImages",
    value: function setInitPositionsToImages() {
      var _this3 = this;

      this.linkNodes.forEach(function (linkNode, index) {
        var data = linkNode.getBoundingClientRect();

        _this3.setPositionStyles(_this3.explosionImageNodes[index], data.left, data.top);
      });
    }
  }, {
    key: "setPositionStyles",
    value: function setPositionStyles(element, x, y) {
      element.style.transform = "translate3d(".concat(x.toFixed(1), "px, ").concat(y.toFixed(1), "px, 0)");
    }
  }, {
    key: "switchChanges",
    value: function switchChanges(hasSummaryAnimation) {
      this.setCurrentState();
      this.switchDisabledNavs();
      this.changeCounter();
      this.changeSummary(hasSummaryAnimation);
    }
  }, {
    key: "setCurrentState",
    value: function setCurrentState() {
      var _this4 = this;

      this.explosionPrevHiddenImageNodes = [];
      this.explosionPrevShowingImageNodes = [];
      this.explosionActiveImageNodes = [];
      this.explosionNextShowingImageNodes = [];
      this.explosionNextHiddenImageNodes = [];
      this.explosionImageNodes.forEach(function (imageNode, index) {
        if (index + _this4.showingCount < _this4.currentIndex) {
          _this4.explosionPrevHiddenImageNodes.unshift(imageNode);
        } else if (index < _this4.currentIndex) {
          _this4.explosionPrevShowingImageNodes.unshift(imageNode);
        } else if (index === _this4.currentIndex) {
          _this4.explosionActiveImageNodes.push(imageNode);
        } else if (index <= _this4.currentIndex + _this4.showingCount) {
          _this4.explosionNextShowingImageNodes.push(imageNode);
        } else {
          _this4.explosionNextHiddenImageNodes.push(imageNode);
        }
      });
      this.setGalleryStyles();
    }
  }, {
    key: "switchDisabledNavs",
    value: function switchDisabledNavs() {
      if (this.currentIndex === 0 && !this.explosionNavPrevNode.disabled) {
        this.explosionNavPrevNode.disabled = true;
      }

      if (this.currentIndex > 0 && this.explosionNavPrevNode.disabled) {
        this.explosionNavPrevNode.disabled = false;
      }

      if (this.currentIndex === this.size - 1 && !this.explosionNavNextNode.disabled) {
        this.explosionNavNextNode.disabled = true;
      }

      if (this.currentIndex < this.size - 1 && this.explosionNavNextNode.disabled) {
        this.explosionNavNextNode.disabled = false;
      }
    }
  }, {
    key: "changeCounter",
    value: function changeCounter() {
      this.explosionChangeCounter.innerHTML = "".concat(this.currentIndex + 1, "/").concat(this.size);
    }
  }, {
    key: "changeSummary",
    value: function changeSummary(hasSummaryAnimation) {
      var _this5 = this;

      var data = this.explosionImageNodes[this.currentIndex].dataset;

      var changeContent = function changeContent() {
        _this5.explosionTitleNode.innerHTML = data.title;
        _this5.explosionDescriptionNode.innerHTML = data.description;
      };

      if (hasSummaryAnimation) {
        this.explosionSummaryContentNode.style.opacity = 0;
        setTimeout(function () {
          changeContent();
          _this5.explosionSummaryContentNode.style.opacity = 1;
        }, 300);
      } else {
        changeContent();
      }
    }
  }, {
    key: "setGalleryStyles",
    value: function setGalleryStyles() {
      var _this6 = this;

      var imageWidth = this.linkNodes[0].offsetWidth;
      var imageHeight = this.linkNodes[0].offsetHeight;
      var modalWidth = Math.max(this.minWidth, window.innerWidth);
      var modalHeight = Math.max(this.minHeight, window.innerHeight);
      this.explosionPrevHiddenImageNodes.forEach(function (node) {
        return _this6.setImageStyles(node, {
          top: -1.5 * modalHeight,
          left: 0.31 * modalWidth,
          opacity: 0.1,
          zIndex: 1,
          scale: 0.4
        });
      });
      this.setImageStyles(this.explosionPrevShowingImageNodes[0], {
        top: modalHeight - imageHeight,
        left: 0.31 * modalWidth,
        opacity: 0.4,
        zIndex: 4,
        scale: 0.75
      });
      this.setImageStyles(this.explosionPrevShowingImageNodes[1], {
        top: 0.405 * modalHeight,
        // 0.35
        left: 0.11 * modalWidth,
        opacity: 0.3,
        zIndex: 3,
        scale: 0.6
      });
      this.setImageStyles(this.explosionPrevShowingImageNodes[2], {
        top: 0,
        left: 0.17 * modalWidth,
        opacity: 0.2,
        zIndex: 2,
        scale: 0.5
      });
      this.setImageStyles(this.explosionPrevShowingImageNodes[3], {
        top: -0.3 * modalHeight,
        left: 0.31 * modalWidth,
        opacity: 0.1,
        zIndex: 1,
        scale: 0.4
      });
      this.explosionActiveImageNodes.forEach(function (node) {
        return _this6.setImageStyles(node, {
          top: (modalHeight - imageHeight) / 2,
          left: modalWidth / 2 - imageWidth * 1 / 3,
          opacity: 1,
          zIndex: 5,
          scale: 1.2
        });
      });
      this.setImageStyles(this.explosionNextShowingImageNodes[0], {
        top: 0,
        left: 0.52 * modalWidth,
        opacity: 0.4,
        zIndex: 4,
        scale: 0.75
      });
      this.setImageStyles(this.explosionNextShowingImageNodes[1], {
        top: 0.12 * modalHeight,
        left: 0.73 * modalWidth,
        opacity: 0.3,
        zIndex: 3,
        scale: 0.6
      });
      this.setImageStyles(this.explosionNextShowingImageNodes[2], {
        top: 0.43 * modalHeight,
        left: 0.67 * modalWidth,
        opacity: 0.2,
        zIndex: 2,
        scale: 0.5
      });
      this.setImageStyles(this.explosionNextShowingImageNodes[3], {
        top: 0.67 * modalHeight,
        left: 0.53 * modalWidth,
        opacity: 0.1,
        zIndex: 1,
        scale: 0.4
      });
      this.explosionNextHiddenImageNodes.forEach(function (node) {
        return _this6.setImageStyles(node, {
          top: 1.5 * modalHeight,
          left: 0.53 * modalWidth,
          opacity: 0.1,
          zIndex: 1,
          scale: 0.4
        });
      });
      this.setControlsStyles(this.explosionControlsNode, {
        marginTop: (modalHeight - imageHeight * 1.2) / 2,
        height: imageHeight * 1.2
      });
      this.explosionSummaryNode.style.width = '50%';
    }
  }, {
    key: "setImageStyles",
    value: function setImageStyles(element, _ref) {
      var top = _ref.top,
          left = _ref.left,
          opacity = _ref.opacity,
          zIndex = _ref.zIndex,
          scale = _ref.scale;
      if (!element) return;
      element.style.opacity = opacity;
      element.style.transform = "translate3d(".concat(left.toFixed(1), "px, ").concat(top.toFixed(1), "px, 0) scale(").concat(scale, ")");
      element.style.zIndex = zIndex;
    }
  }, {
    key: "setControlsStyles",
    value: function setControlsStyles(element, _ref2) {
      var marginTop = _ref2.marginTop,
          height = _ref2.height;
      element.style.marginTop = marginTop + 'px';
      element.style.height = height + 'px';
    }
  }]);

  return Gallery;
}();
/**
 * Helpers
 */




function fadeIn(element, callback) {
  animation();

  function animation() {
    var opacity = Number(element.style.opacity);

    if (opacity < 1) {
      opacity = opacity + 0.1;
      element.style.opacity = opacity;
      window.requestAnimationFrame(animation);
      return;
    }

    if (callback) {
      callback();
    }
  }
}

function fadeOut(element, callback) {
  animation();

  function animation() {
    var opacity = Number(element.style.opacity);

    if (opacity > 0) {
      opacity = opacity - 0.04;
      element.style.opacity = opacity;
      window.requestAnimationFrame(animation);
      return;
    }

    if (callback) {
      callback();
    }
  }
}

function throttle(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var isWaiting = false;
  var savedArgs = null;
  var savedThis = null;
  return function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isWaiting) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    callback.apply(this, args);
    isWaiting = true;
    setTimeout(function () {
      isWaiting = false;

      if (savedThis) {
        wrapper.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, delay);
  };
}

/***/ }),

/***/ "./src/css/index.styl":
/*!****************************!*\
  !*** ./src/css/index.styl ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.pug":
/*!***********************!*\
  !*** ./src/index.pug ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;let images = __webpack_require__(/*! ./data.json */ "./src/data.json")
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"ru\"\u003E\u003Chead\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Ctitle\u003EМої роботи\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"page\"\u003E\u003Ch1 class=\"title\"\u003EМої роботи\u003C\u002Fh1\u003E\u003Cdiv class=\"gallery\"\u003E";
// iterate images
;(function(){
  var $$obj = images;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var image = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"galleryItem\"\u003E\u003Ca" + (" class=\"card\""+pug.attr("href", __webpack_require__("./src/images sync recursive ^\\.\\/.*$")("./" + image.src), true, true)+" target=\"_blank\""+pug.attr("data-title", image.title, true, true)+pug.attr("data-description", image.description, true, true)) + "\u003E\u003Cdiv class=\"cardContent\"\u003E\u003Ch3 class=\"cardTitle\"\u003E" + (pug.escape(null == (pug_interp = image.title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cp class=\"cardDescription\"\u003E" + (pug.escape(null == (pug_interp = image.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"cardHover\"\u003E\u003C\u002Fdiv\u003E\u003Cimg" + (" class=\"cardImage\""+pug.attr("src", __webpack_require__("./src/images sync recursive ^\\.\\/.*$")("./" + image.src), true, true)+pug.attr("alt", image.title, true, true)+" width=\"600\" height=\"600\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var image = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"galleryItem\"\u003E\u003Ca" + (" class=\"card\""+pug.attr("href", __webpack_require__("./src/images sync recursive ^\\.\\/.*$")("./" + image.src), true, true)+" target=\"_blank\""+pug.attr("data-title", image.title, true, true)+pug.attr("data-description", image.description, true, true)) + "\u003E\u003Cdiv class=\"cardContent\"\u003E\u003Ch3 class=\"cardTitle\"\u003E" + (pug.escape(null == (pug_interp = image.title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cp class=\"cardDescription\"\u003E" + (pug.escape(null == (pug_interp = image.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"cardHover\"\u003E\u003C\u002Fdiv\u003E\u003Cimg" + (" class=\"cardImage\""+pug.attr("src", __webpack_require__("./src/images sync recursive ^\\.\\/.*$")("./" + image.src), true, true)+pug.attr("alt", image.title, true, true)+" width=\"600\" height=\"600\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cscript src=\"js\u002Findex.js\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
}

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '',
    className,
    padding = '',
    escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '',
    padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
}

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (
    val === false ||
    val == null ||
    (!val && (key === 'class' || key === 'style'))
  ) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if (
    (type === 'object' || type === 'function') &&
    typeof val.toJSON === 'function'
  ) {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + "='" + val.replace(/'/g, '&#39;') + "'";
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse) {
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
}

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html) {
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34:
        escape = '&quot;';
        break;
      case 38:
        escape = '&amp;';
        break;
      case 60:
        escape = '&lt;';
        break;
      case 62:
        escape = '&gt;';
        break;
      default:
        continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
}

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str) {
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  var context, lines, start, end;
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, {encoding: 'utf8'});
    context = 3;
    lines = str.split('\n');
    start = Math.max(lineno - context, 0);
    end = Math.min(lines.length, lineno + context);
  } catch (ex) {
    err.message +=
      ' - could not read from ' + filename + ' (' + ex.message + ')';
    pug_rethrow(err, null, lineno);
    return;
  }

  // Error context
  context = lines
    .slice(start, end)
    .map(function(line, i) {
      var curr = i + start + 1;
      return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;
    })
    .join('\n');

  // Alter exception message
  err.path = filename;
  try {
    err.message =
      (filename || 'Pug') +
      ':' +
      lineno +
      '\n' +
      context +
      '\n\n' +
      err.message;
  } catch (e) {}
  throw err;
}


/***/ }),

/***/ "./src/images sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./src/images/ sync ^\.\/.*$ ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./works/01.jpg": "./src/images/works/01.jpg",
	"./works/02.jpg": "./src/images/works/02.jpg",
	"./works/03.jpg": "./src/images/works/03.jpg",
	"./works/04.jpg": "./src/images/works/04.jpg",
	"./works/05.jpg": "./src/images/works/05.jpg",
	"./works/06.jpg": "./src/images/works/06.jpg",
	"./works/07.jpg": "./src/images/works/07.jpg",
	"./works/08.jpg": "./src/images/works/08.jpg",
	"./works/09.jpg": "./src/images/works/09.jpg",
	"./works/10.jpg": "./src/images/works/10.jpg",
	"./works/11.jpg": "./src/images/works/11.jpg",
	"./works/12.jpg": "./src/images/works/12.jpg",
	"./works/13.jpg": "./src/images/works/13.jpg",
	"./works/14.jpg": "./src/images/works/14.jpg",
	"./works/15.jpg": "./src/images/works/15.jpg",
	"./works/16.jpg": "./src/images/works/16.jpg",
	"./works/17.jpg": "./src/images/works/17.jpg",
	"./works/18.jpg": "./src/images/works/18.jpg",
	"./works/19.jpg": "./src/images/works/19.jpg",
	"./works/20.jpg": "./src/images/works/20.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/images/works/01.jpg":
/*!*********************************!*\
  !*** ./src/images/works/01.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/56b28f3ac4c28a4358ac.jpg";

/***/ }),

/***/ "./src/images/works/02.jpg":
/*!*********************************!*\
  !*** ./src/images/works/02.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/e9667fed8c62332c4d30.jpg";

/***/ }),

/***/ "./src/images/works/03.jpg":
/*!*********************************!*\
  !*** ./src/images/works/03.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/29ab6dae0a3fc1097e15.jpg";

/***/ }),

/***/ "./src/images/works/04.jpg":
/*!*********************************!*\
  !*** ./src/images/works/04.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/6b7b15aff99a4a221a0a.jpg";

/***/ }),

/***/ "./src/images/works/05.jpg":
/*!*********************************!*\
  !*** ./src/images/works/05.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/8efc52b9bfc446b196b1.jpg";

/***/ }),

/***/ "./src/images/works/06.jpg":
/*!*********************************!*\
  !*** ./src/images/works/06.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/a3c9b7abb3b7d4eb0a13.jpg";

/***/ }),

/***/ "./src/images/works/07.jpg":
/*!*********************************!*\
  !*** ./src/images/works/07.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/98ed16312ac00893cd82.jpg";

/***/ }),

/***/ "./src/images/works/08.jpg":
/*!*********************************!*\
  !*** ./src/images/works/08.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/817a3ea1dbe8771ebeb2.jpg";

/***/ }),

/***/ "./src/images/works/09.jpg":
/*!*********************************!*\
  !*** ./src/images/works/09.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/a5242775a1f477c968a6.jpg";

/***/ }),

/***/ "./src/images/works/10.jpg":
/*!*********************************!*\
  !*** ./src/images/works/10.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/31018b4e0052005b8ec7.jpg";

/***/ }),

/***/ "./src/images/works/11.jpg":
/*!*********************************!*\
  !*** ./src/images/works/11.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/c440db73de1622fa5235.jpg";

/***/ }),

/***/ "./src/images/works/12.jpg":
/*!*********************************!*\
  !*** ./src/images/works/12.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/eedd76974d189b1a4d4b.jpg";

/***/ }),

/***/ "./src/images/works/13.jpg":
/*!*********************************!*\
  !*** ./src/images/works/13.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/2c2da1eaa48507e30546.jpg";

/***/ }),

/***/ "./src/images/works/14.jpg":
/*!*********************************!*\
  !*** ./src/images/works/14.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/87c2c3ad4a4e4d922941.jpg";

/***/ }),

/***/ "./src/images/works/15.jpg":
/*!*********************************!*\
  !*** ./src/images/works/15.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/434bef5bae070ff71a8c.jpg";

/***/ }),

/***/ "./src/images/works/16.jpg":
/*!*********************************!*\
  !*** ./src/images/works/16.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/9d2f1406a974172855a5.jpg";

/***/ }),

/***/ "./src/images/works/17.jpg":
/*!*********************************!*\
  !*** ./src/images/works/17.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/8ea0bbb0acdcbcbf73fe.jpg";

/***/ }),

/***/ "./src/images/works/18.jpg":
/*!*********************************!*\
  !*** ./src/images/works/18.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/a237bcb447efa23fbe85.jpg";

/***/ }),

/***/ "./src/images/works/19.jpg":
/*!*********************************!*\
  !*** ./src/images/works/19.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/352bcf82cb0af3bc9ec5.jpg";

/***/ }),

/***/ "./src/images/works/20.jpg":
/*!*********************************!*\
  !*** ./src/images/works/20.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/42e1af0c5547b3729020.jpg";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"src":"works/01.jpg","title":"Кривинська дача","description":"30х40, полотно, олія"},{"src":"works/02.jpg","title":"Літо в Дофінівці","description":"55х35 полотно, олія"},{"src":"works/03.jpg","title":"Літній полудень","description":"55х35 полотно, олія"},{"src":"works/04.jpg","title":"Одна з перших моїх робіт","description":"30х35 полотно, олія"},{"src":"works/05.jpg","title":"Молодість, чудова пора","description":"40х30, кольорові олівці, папір"},{"src":"works/06.jpg","title":"... на водосховищі","description":"40х30, кольорові олівці, папір"},{"src":"works/07.jpg","title":"Понора. З мамкою безпечно","description":"45х33 , холст, олія"},{"src":"works/08.jpg","title":"Лєра Бугорська, фотомодель з Кривого Рогу","description":"40х29, кольорові олівці, папір"},{"src":"works/09.jpg","title":"Безмежна вдячність захисникам Вітчизни","description":"29х39, кольорові олівці, тонований папір"},{"src":"works/10.jpg","title":"Портрет Султанчика","description":"29,5х39,5 кольорові олівці, папір"},{"src":"works/11.jpg","title":"Римо-католицька церква","description":"29,5х40,5, кольорові олівці, папір"}]');

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	__webpack_require__("./src/css/index.styl");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.pug");
/******/ 	
/******/ })()
;
//# sourceMappingURL=script.js.map