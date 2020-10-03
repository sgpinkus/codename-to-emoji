const { expect } = require('chai')
const { replaceCodeNames, map } = require('./index');

for(let [k, v] of map) {
  expect(replaceCodeNames(`:${k}:`)).equals(v);
  expect(replaceCodeNames(`XXX :${k}: XXX :${k}::${k}::${k}: :X: :Y: :Z:`)).equals(`XXX ${v} XXX ${v}${v}${v} :X: :Y: :Z:`);
  expect(replaceCodeNames(`:${k}:`, true)).equals(v + ' ');
  expect(replaceCodeNames(`XXX :${k}: XXX :${k}::${k}::${k}: :X: :Y: :Z:`, true)).equals(`XXX ${v}  XXX ${v} ${v} ${v}  :X: :Y: :Z:`);
}

expect(replaceCodeNames('')).equals('');
expect(replaceCodeNames(undefined)).equals('');
