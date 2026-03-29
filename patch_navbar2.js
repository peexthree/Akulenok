const fs = require('fs');

const path = 'components/navbar.js';
let content = fs.readFileSync(path, 'utf8');

const oldText2 = `    <span className={\`
      font-black tracking-tight transition-all duration-500 z-10
      \${isScrolled
        ? "ml-14 text-xl text-slate-900 opacity-100"
        : "ml-4 sm:ml-4 text-sm sm:text-base md:text-lg text-white opacity-100 uppercase tracking-widest max-w-[150px] sm:max-w-[200px] leading-tight"
      }
    \`}>
      {isScrolled ? "Акулёнок" : "Семейный аква-центр Акуленок"}
    </span>`;

// Make sure it disappears when scrolled
const newText2 = `    <span className={\`
      font-black tracking-tight transition-all duration-500 z-10 whitespace-nowrap
      \${isScrolled
        ? "ml-14 text-xl text-slate-900 opacity-100"
        : "ml-32 sm:ml-36 text-sm sm:text-lg text-white opacity-100 tracking-wider whitespace-normal leading-tight w-[150px] sm:w-[200px]"
      }
    \`}>
      {isScrolled ? "Акулёнок" : "Семейный аква-центр Акуленок"}
    </span>`;

content = content.replace(oldText2, newText2);

fs.writeFileSync(path, content);
console.log("Navbar patched 2");
