const fs = require('fs');

let content = fs.readFileSync('components/navbar.js', 'utf8');

// Looking at the provided file again to properly find and replace.
let originalFile = fs.readFileSync('components/navbar.js', 'utf8');

const regex = /<div className="flex items-center shrink-0 w-\[260px\] sm:w-\[320px\]">([\s\S]*?)<\!-- ДЕСКТОПНОЕ МЕНЮ/;

const replacement = `<div className="flex items-center shrink-0 w-[260px] sm:w-[320px]">
  <div className="flex items-center gap-3 sm:gap-4 cursor-pointer group h-10" onClick={handleLogoClick}>
    <motion.img
      whileHover={{ y: -5, rotate: [-1, 2, -1] }}
      src="/img/top.webp"
      alt="Акулёнок"
      className={\`transition-all duration-700 ease-in-out object-contain drop-shadow-2xl z-20 origin-left \${
        isScrolled
          ? "h-10 w-auto"
          : "h-20 sm:h-24 w-auto transform -translate-y-2 sm:-translate-y-4"
      }\`}
    />

    <div className={\`transition-all duration-700 ease-in-out z-10 flex flex-col justify-center whitespace-nowrap overflow-hidden
      \${isScrolled
        ? "max-w-[100px] opacity-100"
        : "max-w-[200px] opacity-100 transform -translate-y-2 sm:-translate-y-4"
      }
    \`}>
      {isScrolled ? (
        <span className="font-black tracking-tight text-xl text-slate-900 leading-tight">
          Акулёнок
        </span>
      ) : (
        <>
          <span className="font-bold tracking-wide text-xs sm:text-[13px] text-white leading-tight uppercase opacity-90">
            Семейный аква-центр
          </span>
          <span className="font-black tracking-tight text-xl sm:text-2xl text-white leading-tight mt-0.5">
            Акулёнок
          </span>
        </>
      )}
    </div>
  </div>
</div>
        {/* ДЕСКТОПНОЕ МЕНЮ`;

let newNav = originalFile.replace(regex, replacement);
fs.writeFileSync('components/navbar.js', newNav);
console.log("Navbar fixed 2");
