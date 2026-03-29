const fs = require('fs');

let fileContent = fs.readFileSync('components/sectionTitle.js', 'utf8');

// I notice the viewport is set to `{ once: true, margin: "-50px" }`
// The text says "не отображается при нажатии разных кнопок" (does not display when pressing different buttons)
// It could be that Framer Motion's `whileInView` is failing to trigger, or is stuck.
// Let's remove the margin and just use `{ once: true }` or even `viewport={{ once: false, amount: 0.1 }}` to see if it fixes it.

fileContent = fileContent.replace(
  'viewport={{ once: true, margin: "-50px" }}',
  'viewport={{ once: true, margin: "0px" }}'
);

fileContent = fileContent.replace(
  'viewport={{ once: true }}',
  'viewport={{ once: true, margin: "0px" }}'
);

fs.writeFileSync('components/sectionTitle.js', fileContent);
console.log('sectionTitle.js viewport updated');
