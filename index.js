const HTTPS = 'https://';
const httpsRe = /(^https:\/\/)/i;
const protocolRe = /(^http:\/\/)|(^\/\/)|(^ftp:\/\/)/i;
const convertToHttps = (url) => url.replace(protocolRe, HTTPS);

module.exports = (input) => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  if (input.match(httpsRe)) {
    return input;
  }

  return input.match(protocolRe) ? convertToHttps(input) : `${HTTPS}${input}`;
};
