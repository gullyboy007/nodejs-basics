import {add} from './myLib.mjs'

import assert from 'assert'

try {
  console.log('add() should add two numbers ')
  assert.strictEqual(add(2, 5), 7)
  console.log('  ✅ passed')
} catch (e) {
  console.log('  🚫 fail')
  console.error(e)
}

