'use strict';

const service1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(service1(), 'Hello from service1');
console.info("service1 tests passed");
