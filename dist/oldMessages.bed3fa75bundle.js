webpackJsonp([1],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = __webpack_require__(3);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var messages = [];
  for (var x = 0; x < 50; x += 1) {
    messages.push(new _message2.default('Message ' + (x + 1), Date.now() - parseInt(Math.random() * 2000000, 10)));
  }
  return messages;
};

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _messagesGenerator = __webpack_require__(140);

var _messagesGenerator2 = _interopRequireDefault(_messagesGenerator);

var _messages = __webpack_require__(2);

var _messages2 = _interopRequireDefault(_messages);

__webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unresolved
var messages = (0, _messagesGenerator2.default)();

var messagesContent = messages.map(function (m) {
  return (0, _messages2.default)({ m: m, relativeTime: (0, _moment2.default)(m.created).fromNow() });
}).reduce(function (result, current) {
  return result + current;
});

/* eslint no-undef: 0 */
document.getElementById('messages').innerHTML = messagesContent;

console.log('old-messages');

/***/ })

},[144]);