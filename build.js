const fs = require('fs');
const { emoji } = require('node-emoji');
fs.writeFileSync('map.json', JSON.stringify(emoji));
