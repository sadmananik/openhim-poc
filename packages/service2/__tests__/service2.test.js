'use strict';

const service2 = require('..');
const assert = require('assert').strict;

assert.strictEqual(service2(), 'Hello from service2');
console.info("service2 tests passed");
