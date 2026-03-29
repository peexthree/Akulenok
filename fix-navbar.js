const fs = require('fs');

let content = fs.readFileSync('components/navbar.js', 'utf8');

// Looking at the provided file:

//   <div className="relative cursor-pointer group h-10 flex items-center" onClick={handleLogoClick}>
//     <motion.img
//       whileHover={{ y: -5, rotate: [-1, 2, -1] }}
//       src="/img/top.webp"
//       alt="Акулёнок"
//       className={`transition-all duration-700 ease-in-out object-contain drop-shadow-2xl z-20 ${
//         isScrolled
//           ? "h-10 w-auto"
//           : "h-32 sm:h-40 w-auto absolute -top-12 sm:-top-16 left-0"
//       }`}
//     />
//
//     {/* ТЕКСТ: Скрываем (opacity-0), когда маскот гигантский */}
//     <div className={`
//       transition-all duration-500 z-10 flex flex-col justify-center
//       ${isScrolled
//         ? "ml-14"
//         : "ml-[110px] sm:ml-[140px] mt-2"
//       }
//     `}>

const newNav = content.replace(
  /<div className="relative cursor-pointer group h-10 flex items-center" onClick={handleLogoClick}>[\s\S]*?<\/div>\s*<\/div>/,
  `<div className="flex items-center gap-4 cursor-pointer group h-10" onClick={handleLogoClick}>
    <motion.img
      whileHover={{ y: -5, rotate: [-1, 2, -1] }}
      src="/img/top.webp"
      alt="Акулёнок"
      className={\`transition-all duration-700 ease-in-out object-contain drop-shadow-2xl z-20 \${
        isScrolled
          ? "h-10 w-auto"
          : "h-20 sm:h-24 w-auto transform origin-left"
      }\`}
    />

    {/* ТЕКСТ */}
    <div className={\`
      transition-all duration-500 z-10 flex flex-col justify-center whitespace-nowrap
      \${isScrolled
        ? "opacity-100"
        : "opacity-100"
      }
    \`}>
      {isScrolled ? (
        <span className="font-black tracking-tight text-xl text-slate-900 leading-tight">
          Акулёнок
        </span>
      ) : (
        <>
          <span className="font-bold tracking-wide text-xs sm:text-sm text-white leading-tight">
            Семейный аква-центр
          </span>
          <span className="font-black tracking-tight text-lg sm:text-xl text-white leading-tight mt-0.5">
            Акулёнок
          </span>
        </>
      )}
    </div>
  </div>
</div>`
);

fs.writeFileSync('components/navbar.js', newNav);
console.log("Navbar fixed");
