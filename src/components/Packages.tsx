import { ArrowRight } from 'lucide-react';

export default function Packages() {
  const packages = [
    {
      name: 'Диагностическая встреча',
      duration: '30 минут',
      price: 'Бесплатно',
      description:
        'За 30 минут вы поймёте, в чём реальная проблема и есть ли смысл идти дальше.',
      features: [
        'Формулировка запроса (не «симптома»)',
        'Точка А и ключевой затык',
        'Рекомендация: какой формат нужен (или не нужен)'
      ],
      cta: 'Записаться на диагностику',
      featured: false
    },
    {
      name: 'Стратегическая сессия',
      duration: 'до 90 минут',
      price: '10 000 ₽',
      description: 'Когда нужно решение, а не ещё один месяц размышлений.',
      features: [
        'Быстрый разбор ситуации без ухода в терапию',
        '1–2 сценария действий и критерии выбора',
        'План на 7–14 дней: что делать дальше'
      ],
      cta: 'Записаться на сессию',
      featured: true
    },
    {
      name: 'Индивидуальный цикл',
      duration: '3 или 6 встреч',
      price: '27 000 / 52 000 ₽',
      description:
        'Для устойчивых изменений: меньше напряжения, больше ясности и управляемости.',
      features: [
        '3 встречи — 27 000 ₽ (собрать систему и стабилизировать)',
        '6 встреч — 52 000 ₽ (закрепить изменения и перестроить реакции)',
        'Поддержка между сессиями',
        'Работа с повторяющимися паттернами под давлением'
      ],
      cta: 'Обсудить цикл',
      featured: false
    }
  ];

  return (
    <section className="py-32 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-12 text-center">
          Форматы работы
        </h2>

        <p className="text-xl text-neutral-600 font-light text-center mb-12">
          Выберите подходящий формат — от первого шага
          <br />
          до устойчивых изменений
        </p>

        {/* Как выбрать формат */}
        <div className="max-w-4xl mx-auto mb-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border border-neutral-200">
            <p className="text-neutral-800 font-light">
              <span className="text-neutral-500">Если</span> неясно, что происходит
            </p>
            <p className="text-neutral-600 font-light mt-2">
              → начните с диагностики (30 минут)
            </p>
          </div>

          <div className="bg-white p-6 border border-neutral-200">
            <p className="text-neutral-800 font-light">
              <span className="text-neutral-500">Если</span> ситуация острая и нужен
              выход
            </p>
            <p className="text-neutral-600 font-light mt-2">
              → стратегическая сессия (90 минут)
            </p>
          </div>

          <div className="bg-white p-6 border border-neutral-200">
            <p className="text-neutral-800 font-light">
              <span className="text-neutral-500">Если</span> проблема повторяется
              месяцами
            </p>
            <p className="text-neutral-600 font-light mt-2">
              → индивидуальный цикл (3 или 6 встреч)
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white p-10 flex flex-col ${
                pkg.featured ? 'ring-2 ring-neutral-800 bg-neutral-50' : ''
              }`}
            >
              {pkg.featured && (
                <div className="mb-4">
                  <span className="inline-block text-xs tracking-wide uppercase px-3 py-1 border border-neutral-800 text-neutral-800">
                    чаще выбирают
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-light text-neutral-800 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-neutral-500 font-light mb-4">{pkg.duration}</p>
                <p className="text-3xl font-light text-neutral-800">{pkg.price}</p>
              </div>

              <p className="text-lg text-neutral-600 font-light mb-8 leading-relaxed">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-12 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-neutral-600 font-light flex items-start gap-2"
                  >
                    <span className="text-neutral-400 mt-1">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group w-full py-4 px-6 bg-neutral-800 text-white font-light hover:bg-neutral-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {pkg.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
