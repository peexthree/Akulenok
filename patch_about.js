const fs = require('fs');
const path = 'components/about.js';
let content = fs.readFileSync(path, 'utf8');

const oldTitle = `          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-6 tracking-tight">
            О центре «Акулёнок»
          </motion.h2>`;

const newTitle = `          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-6 tracking-tight">
            Про нас
          </motion.h2>`;

content = content.replace(oldTitle, newTitle);

const oldDesc = `          <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed z-10 relative">
            Специализированный детский аквацентр в Туймазах: грудничковое плавание и ЛФК.
            Создаём безопасную среду для здоровья и развития малышей — тёплая стерильная вода,
            небольшой формат групп, внимательные инструкторы.
          </motion.p>`;

const newDesc = `          <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed z-10 relative">
            Семейный аквацентр в г. Туймазы: грудничковое плавание и АФК. Создаём безопасную среду для здоровья всей семьи.
          </motion.p>`;

content = content.replace(oldDesc, newDesc);

fs.writeFileSync(path, content);
console.log("About patched");
