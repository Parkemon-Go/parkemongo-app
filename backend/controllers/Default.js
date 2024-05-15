'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.pricingGET = function pricingGET (req, res, next) {
  Default.pricingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerPOST = function registerPOST (req, res, next, body) {
  Default.registerPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.scansGET = function scansGET (req, res, next, lat, long, radius, limit, offset) {
  Default.scansGET(lat, long, radius, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.scansPOST = function scansPOST (req, res, next, body) {
  Default.scansPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.scansStreetGET = function scansStreetGET (req, res, next, street, limit, offset) {
  Default.scansStreetGET(street, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
