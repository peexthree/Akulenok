const fs = require('fs');

let fileContent = fs.readFileSync('components/services.js', 'utf8');

// I'm going to remove the background blur div entirely from the background to see if it fixes the issue where the text is transparent or not showing

fileContent = fileContent.replace(
  '{/* Декоративный фон для объема */}\n      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-tr from-sky-100/40 to-blue-50/40 rounded-full blur-[120px] -z-10" />',
  ''
);

fs.writeFileSync('components/services.js', fileContent);
console.log('services.js bg removed');
