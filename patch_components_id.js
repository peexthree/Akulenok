const fs = require('fs');

function patchFile(file, searchStr, replaceStr) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(searchStr, replaceStr);
  fs.writeFileSync(file, content);
}

patchFile('components/services.js', '<Container className="py-24 relative z-10">', '<Container id="services" className="py-24 relative z-10 scroll-mt-24">');
patchFile('components/pricing.js', '<section className="py-24 bg-slate-50 relative overflow-hidden" id="pricing">', '<section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24">');
patchFile('components/gallery.js', '<Container className="py-12 pb-24 max-w-6xl mx-auto relative">', '<Container id="gallery" className="py-12 pb-24 max-w-6xl mx-auto relative scroll-mt-24">');
patchFile('components/testimonials.js', '<Container className="py-24 relative z-10">', '<Container id="testimonials" className="py-24 relative z-10 scroll-mt-24">');
patchFile('components/location.js', '<Container className="py-24 relative z-10">', '<Container id="contacts" className="py-24 relative z-10 scroll-mt-24">');
