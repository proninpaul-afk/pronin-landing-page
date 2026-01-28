export default function VideoTestimonial() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-16">

        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-800">
            Как это выглядит у реального руководителя
          </h2>

          <p className="text-xl md:text-2xl text-neutral-500 font-light">
            2 минуты о том, как сохранить управляемость в период максимальных изменений
          </p>
        </div>

        <div className="aspect-video rounded-xl overflow-hidden bg-black">
          <video
            src="/public/oleg-feedback-subs.mp4"
            controls
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4 text-neutral-700 font-light text-lg">
          <p><strong>Олег</strong>, тимлид IT-компании</p>
          <ul className="space-y-2">
            <li>— Переезд в другую страну, смена команды, рождение ребёнка</li>
            <li>— Высокий стресс и риск потери управляемости</li>
            <li>— Адаптация, стабильные результаты, спокойствие дома и на работе</li>
            <li>— Формат: индивидуальный коучинговый цикл</li>
          </ul>
        </div>

        <div className="pt-8 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 border border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition"
          >
            Записаться на диагностическую встречу
          </a>
        </div>

      </div>
    </section>
  );
}
