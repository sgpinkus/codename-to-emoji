const map = new Map(Object.entries(require('./map')));
const codeNameRegExp = /:(\+1|-1|[\w-]+):/g;

function replaceCodeNames(text = '', padSpaceAfter) {
  const pad = padSpaceAfter ? ' ' : '';
  function lookUp(m) {
    const emoji = map.get(m.replace(/^:|:$/g, ''));
    return (emoji || m) + (emoji ? pad : '');
  }
  return text.replace(codeNameRegExp, lookUp);
}

module.exports = { replaceCodeNames, map };
