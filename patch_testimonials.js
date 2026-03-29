const fs = require('fs');

let fileContent = fs.readFileSync('components/testimonials.js', 'utf8');

const newLink = `      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 text-center"
      >
        <a
          href="https://yandex.ru/maps/org/akulenok/125018811972/reviews/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-sky-500 transition-colors mb-4 block"
        >
          Читать 59+ отзывов на Яндекс.Картах
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href="https://yandex.ru/maps/org/akulenok/125018811972/reviews/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Оставьте и вы свой отзыв о нашей работе, нам будет приятно
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </a>
      </motion.div>`;

fileContent = fileContent.replace(
  /<motion\.div[\s\S]*?Читать 59\+ отзывов на Яндекс\.Картах[\s\S]*?<\/motion\.div>/,
  newLink
);

fs.writeFileSync('components/testimonials.js', fileContent);
console.log('testimonials.js updated');
