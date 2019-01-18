# to-https [![Build Status](https://travis-ci.com/chrisvogt/to-https.svg?branch=master)](https://travis-ci.com/chrisvogt/to-https) [![codecov](https://codecov.io/gh/chrisvogt/to-https/badge.svg?branch=master)](https://codecov.io/gh/chrisvogt/to-https?branch=master)

> Convert (almost) any url to https.


## Install

```
$ npm install to-https
```


## Usage

```js
const toHttps = require('to-https');

toHttps('http://www.chrisvogt.me');
//=> 'https://www.chrisvogt.me'

toHttps('//my.cdn.com/image.png');
//=> 'https://my.cdn.com/image.png'

toHttps('127.0.0.1');
//=> 'https://127.0.0.1'
```


## API

### toHttps(input)

#### input

Type: `string`

The url or address to convert to HTTPS.


## License

MIT © [Chris Vogt](https://www.chrisvogt.me)
