import assert from 'assert';

export default function assertion(result, assert = assert) {
  return {
    equal: assert.equal.bind(null, result),
    notEqual: assert.notEqual.bind(null, result),
    ok: assert.ok.bind(null, result)
  };
}
