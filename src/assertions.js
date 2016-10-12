import assert from 'assert';

export default function assertion(result, assertion = assert) {
  return {
    equal: assertion.equal.bind(null, result),
    notEqual: assertion.notEqual.bind(null, result),
    ok: assertion.ok.bind(null, result)
  };
}
