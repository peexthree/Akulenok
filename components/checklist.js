export default function Checklist() {
  return (
    // Оставляем bg-white здесь, но маскота будем позиционировать ВНУТРИ правильно
    <Container className="py-24 relative overflow-hidden bg-white">
      
      {/* ГИГАНТСКИЙ МАСКОТ - Теперь он в слое z-0 */}
      {/* Мы не используем -z-10, чтобы он не ушел ПОД белый фон Контейнера */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }} // 0.4-0.5 — теперь он будет виден
        transition={{ duration: 1.5 }}
        className="absolute left-1/2 -translate-x-1/2 top-40 w-[1000px] h-[1000px] z-0 pointer-events-none select-none"
      >
        <Image
          src="/img/think.png"
          alt="Background Thinking Shark"
          fill
          unoptimized 
          className="object-contain blur-[15px]" 
          sizes="1000px"
        />
      </motion.div>

      {/* ВЕСЬ ОСТАЛЬНОЙ КОНТЕНТ - Поднимаем в z-10 */}
      {/* Это гарантирует, что текст и карты будут ПОВЕРХ маскота */}
      <div className="flex flex-col items-center pt-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Что взять на занятие?
          </motion.h2>
          {/* ... твой текст ... */}
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              // Добавляем полупрозрачный фон картам, чтобы они "светились" на фоне маскота
              className="bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-soft border border-slate-100 flex flex-col items-center text-center gap-6"
            >
              {/* ... контент карты ... */}
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
