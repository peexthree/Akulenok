const fs = require('fs');
const path = 'components/navbar.js';
let content = fs.readFileSync(path, 'utf8');

// Replace the container width
const oldContainer = `<div className="flex items-center shrink-0 w-[180px] sm:w-[240px]">`;
const newContainer = `<div className="flex items-center shrink-0 w-[260px] sm:w-[320px]">`;
content = content.replace(oldContainer, newContainer);

// Replace the text span
const oldSpan = `    <span className={\`
      font-black tracking-tight transition-all duration-500 z-10 whitespace-nowrap
      \${isScrolled
        ? "ml-14 text-xl text-slate-900 opacity-100"
        : "ml-32 sm:ml-36 text-sm sm:text-lg text-white opacity-100 tracking-wider whitespace-normal leading-tight w-[150px] sm:w-[200px]"
      }
    \`}>
      {isScrolled ? "Акулёнок" : "Семейный аква-центр Акуленок"}
    </span>`;

const newSpan = `    <div className={\`
      transition-all duration-500 z-10 flex flex-col justify-center
      \${isScrolled
        ? "ml-14"
        : "ml-[110px] sm:ml-[140px] mt-2"
      }
    \`}>
      {isScrolled ? (
        <span className="font-black tracking-tight text-xl text-slate-900 opacity-100 whitespace-nowrap">
          Акулёнок
        </span>
      ) : (
        <>
          <span className="font-bold tracking-wide text-xs sm:text-sm text-white opacity-100 whitespace-nowrap leading-tight">
            Семейный аква-центр
          </span>
          <span className="font-black tracking-tight text-lg sm:text-xl text-white opacity-100 whitespace-nowrap leading-tight">
            Акулёнок
          </span>
        </>
      )}
    </div>`;

content = content.replace(oldSpan, newSpan);

fs.writeFileSync(path, content);
console.log("Navbar layout patched");
