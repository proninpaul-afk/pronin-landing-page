export default function Results() {
  const outcomes = [
    'Ясность в том, что происходит и почему',
    'Спокойная уверенность вместо тревоги',
    'Устойчивость под давлением',
    'Решения без хаоса в голове',
    'Управляемость собственными эмоциями',
    'Взрослая позиция лидера, а не реактивность'
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-8 text-center">
          Что вы получите
        </h2>

        <p className="text-xl text-neutral-500 font-light text-center mb-24">
          Точка Б — это не идеальная жизнь, а внутренняя устойчивость
        </p>

        <div className="space-y-8">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="text-2xl md:text-3xl text-neutral-700 font-light py-6 border-b border-neutral-200 last:border-0"
            >
              {outcome}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
