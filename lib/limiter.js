const rateLimit = require('express-rate-limit');

module.exports = function (config) {
  return rateLimit({
    windowMs: config.windowMs || 60000,
    max: config.max || 20,
    message: '⚠️ Too many requests, slow down!',
    standardHeaders: true,
    legacyHeaders: false
  });
};
