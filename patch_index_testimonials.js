const fs = require('fs');
const file = 'pages/index.js';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  '<WaveDivider waveColor="text-white" />\n        <Testimonials />',
  '<WaveDivider waveColor="text-white" />\n        <div id="testimonials" className="scroll-mt-24">\n          <Testimonials />\n        </div>'
);
fs.writeFileSync(file, content);
