# babel-runtime-loose

loose version of babel-runtime, reduce final bundle size.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/babel-runtime-loose.svg?style=flat-square
[npm-url]: http://npmjs.org/package/babel-runtime-loose
[travis-image]: https://img.shields.io/travis/yiminghe/babel-runtime-loose.svg?style=flat-square
[travis-url]: https://travis-ci.org/yiminghe/babel-runtime-loose
[coveralls-image]: https://img.shields.io/coveralls/yiminghe/babel-runtime-loose.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yiminghe/babel-runtime-loose?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/yiminghe/babel-runtime-loose.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/yiminghe/babel-runtime-loose
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/babel-runtime-loose.svg?style=flat-square
[download-url]: https://npmjs.org/package/babel-runtime-loose

`USE WITH CAUTION`

## usage

webpack:
```json
{
 "module": {
   "alias": {
     "babel-runtime":"babel-runtime-loose"
   } 
  }
}
```