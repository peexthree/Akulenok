const fs = require('fs');

const path = 'components/hero.js';
let content = fs.readFileSync(path, 'utf8');

const oldPromo = `<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl"
          >
            <span className="text-xs sm:text-sm font-bold text-white tracking-[0.2em] uppercase">
              Первое занятие со скидкой 50%
            </span>
          </motion.div>`;

const newPromo = `<motion.a
            href="#pricing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl hover:bg-white/20 transition-colors"
          >
            <span className="text-xs sm:text-sm font-bold text-white tracking-[0.2em] uppercase cursor-pointer">
              Ваша персональная скидка
            </span>
          </motion.a>`;

content = content.replace(oldPromo, newPromo);

fs.writeFileSync(path, content);
console.log("Hero patched");
