const fs = require('fs');

let fileContent = fs.readFileSync('components/sectionTitle.js', 'utf8');

// I'm changing it to `amount: 0.1` and removing `margin: "0px"`
fileContent = fileContent.replace(
  'viewport={{ once: true, margin: "0px" }}',
  'viewport={{ once: true, amount: 0.1 }}'
);
fileContent = fileContent.replace(
  'viewport={{ once: true, margin: "0px" }}',
  'viewport={{ once: true, amount: 0.1 }}'
);

fs.writeFileSync('components/sectionTitle.js', fileContent);
console.log('sectionTitle.js viewport updated again');
