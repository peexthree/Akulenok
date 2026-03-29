const fs = require('fs');
const file = 'components/container.js';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  '<div\n      className={clsx(\n            "container p-4 mx-auto sm:p-8",\n        props.className\n      )}\n    >',
  '<div\n      id={props.id}\n      className={clsx(\n            "container p-4 mx-auto sm:p-8",\n        props.className\n      )}\n    >'
);
fs.writeFileSync(file, content);
