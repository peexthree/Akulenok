const fs = require('fs');
const file = 'pages/index.js';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '<div id="testimonials" className="scroll-mt-24">\n          <Testimonials />\n        </div>',
  '<Testimonials />'
);

fs.writeFileSync(file, content);
