const fs = require('fs');
const file = 'pages/index.js';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '<div id="services" className="scroll-mt-24">\n          <Services />\n        </div>',
  '<Services />'
);
content = content.replace(
  '<div id="pricing" className="scroll-mt-24">\n          <Pricing />\n        </div>',
  '<Pricing />'
);
content = content.replace(
  '<div id="gallery" className="scroll-mt-24">\n          <Gallery />\n        </div>',
  '<Gallery />'
);
content = content.replace(
  '<div id="contacts" className="scroll-mt-24">\n          <Location />\n        </div>',
  '<Location />'
);

fs.writeFileSync(file, content);
