export default function ForWhom() {
  const triggers = [
    'Постоянное давление и ощущение цейтнота',
    'Усталость от принятия решений',
    'Реактивность: отвечаете быстрее, чем думаю',
    'Фокус расплывается, приоритеты "плывут"',
    'Напряжение перед важными встречами и переговорами',
    'Раздражение на команду и близких “на ровном месте”',
    'Чувство опустошения после рабочего дня'
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-20 text-center">
          Узнаёте себя?
        </h2>

        <div className="space-y-6">
          {triggers.map((trigger, index) => (
            <div
              key={index}
              className="flex items-start gap-4 text-xl md:text-2xl text-neutral-700 font-light py-4"
            >
              <span className="text-neutral-400 mt-1">—</span>
              <p>{trigger}</p>
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl text-neutral-500 font-light mt-20 text-center italic">
          Если да — дело не в слабости. Дело в перегрузе,<br />
          который уже влияет на решения.
        </p>
      </div>
    </section>
  );
}
