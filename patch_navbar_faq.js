const fs = require('fs');

let fileContent = fs.readFileSync('components/navbar.js', 'utf8');

fileContent = fileContent.replace(
  /{ name: "FAQ", href: "#faq" }/g,
  '{ name: "Отзывы", href: "#testimonials" }'
);

fs.writeFileSync('components/navbar.js', fileContent);
console.log('navbar.js updated');
