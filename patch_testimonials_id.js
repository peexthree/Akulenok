const fs = require('fs');
const file = 'components/testimonials.js';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  '<Container className="py-24 relative z-10" id="testimonials">',
  '<Container className="py-24 relative z-10">'
);
fs.writeFileSync(file, content);
