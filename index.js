'use strict';

const HTTPS = 'https://';
const httpsRe = /(^https:\/\/)/;
const protocolRe = /(^http:\/\/)|(^\/\/)|(^ftp:\/\/)/;
const convertToHttps = url => url.replace(protocolRe, HTTPS);

module.exports = input => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  if (input.match(httpsRe)) {
    return input;
  }

  return input.match(protocolRe) ? convertToHttps(input) : `${HTTPS}${input}`;
};
