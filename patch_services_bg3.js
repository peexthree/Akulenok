const fs = require('fs');

let fileContent = fs.readFileSync('components/services.js', 'utf8');

// The issue might be that it's overlapping. Let's revert the blur removal, but ensure it's properly layered.

fileContent = fileContent.replace(
  '{/* Используем наш новый смарт-компонент */}',
  '{/* Декоративный фон для объема */}\n      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-tr from-sky-100/40 to-blue-50/40 rounded-full blur-[120px] -z-10" />\n\n      {/* Используем наш новый смарт-компонент */}'
);

fs.writeFileSync('components/services.js', fileContent);
console.log('services.js bg re-added');
