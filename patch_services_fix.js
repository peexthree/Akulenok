const fs = require('fs');

let fileContent = fs.readFileSync('components/services.js', 'utf8');

// Update services.js to use less restrictive viewports as well for containerVariants
fileContent = fileContent.replace(
  'viewport={{ once: true, margin: "-50px" }}',
  'viewport={{ once: true, amount: 0.1 }}'
);

fs.writeFileSync('components/services.js', fileContent);
console.log('services.js viewport updated');
