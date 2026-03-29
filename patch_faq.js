const fs = require('fs');

let fileContent = fs.readFileSync('components/faq.js', 'utf8');

fileContent = fileContent.replace(
  /Температура воды в бассейне поддерживается на уровне 32-33°C, а воздуха - 35°C\./g,
  'Температура воды в бассейне поддерживается на уровне 32-33°C, а воздуха - 30-32°C.'
);

fs.writeFileSync('components/faq.js', fileContent);
console.log('faq.js updated');
