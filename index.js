define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
'use strict';

exports.decode = exports.parse = require('querystring/decode');
exports.encode = exports.stringify = require('querystring/encode');

return module.exports;});
