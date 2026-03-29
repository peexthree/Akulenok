const fs = require('fs');

let fileContent = fs.readFileSync('components/services.js', 'utf8');

// I need to change how the absolute background works because the text is currently transparent
// probably because it's behind a backdrop filter or something

fileContent = fileContent.replace(
  'className="py-24 relative z-10 scroll-mt-24"',
  'className="py-24 relative z-10 scroll-mt-24 overflow-hidden"'
);

fs.writeFileSync('components/services.js', fileContent);
console.log('services.js updated');
