# emoticon-to-emoji
Trivial zero dep script to replace emoji codename char sequences with emojis. Uses [node-emoji](https://github.com/omnidan/node-emoji) to build codename to emoji symbol map.

# Usage

```
var { replaceCodeNames } = require('codename-to-emoji');
console.log(replaceCodeNames(':+1::-1::poop::smile:'));
```
