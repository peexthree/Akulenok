const fs = require('fs');

const path = 'components/navbar.js';
let content = fs.readFileSync(path, 'utf8');

// Replace the text section next to the logo
const oldText = `    <span className={\`
      font-black tracking-tight transition-all duration-500 z-10
      \${isScrolled
        ? "ml-14 text-xl text-slate-900 opacity-100"
        : "ml-0 text-xl sm:text-2xl text-white opacity-0 pointer-events-none"
      }
    \`}>
      Акулёнок
    </span>`;

const newText = `    <span className={\`
      font-black tracking-tight transition-all duration-500 z-10
      \${isScrolled
        ? "ml-14 text-xl text-slate-900 opacity-100"
        : "ml-4 sm:ml-4 text-sm sm:text-base md:text-lg text-white opacity-100 uppercase tracking-widest max-w-[150px] sm:max-w-[200px] leading-tight"
      }
    \`}>
      {isScrolled ? "Акулёнок" : "Семейный аква-центр Акуленок"}
    </span>`;

content = content.replace(oldText, newText);

fs.writeFileSync(path, content);
console.log("Navbar patched");
