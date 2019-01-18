'use strict';

const HTTPS = 'https://';
const protocolRe = /(^http:\/\/)|(^\/\/)/;
const convertToHttps = url => url.replace(protocolRe, HTTPS);

module.exports = input => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  return input.match(protocolRe) ? convertToHttps(input) : `${HTTPS}${input}`;
};
