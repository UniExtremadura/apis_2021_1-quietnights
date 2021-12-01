'use strict';

var utils = require('../utils/writer.js');
var Principal = require('../service/PrincipalService');

module.exports.addAlarma = function addAlarma (req, res, next, body) {
  Principal.addAlarma(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
