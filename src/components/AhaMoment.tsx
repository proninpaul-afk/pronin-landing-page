import { Lightbulb } from 'lucide-react';

export default function AhaMoment() {
  const insights = [
    'в чём реальная проблема (а не только симптомы) и где вы застряли',
    'какие триггеры и привычные реакции создают напряжение и реактивность',
    'почему «собраться» больше не работает — и что работает вместо этого',
    'где именно вернуть контроль: фокус, границы, решения, коммуникация',
    'что делать дальше: 1–2 сценария и план действий на ближайшие 7–14 дней'
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-10 text-center">
          Уже после первой сессии появляется ясность
        </h2>

        <p className="text-xl md:text-2xl text-neutral-500 font-light text-center mb-20">
          Не за счёт советов. За счёт точного разбора ситуации и ваших решений.
        </p>

        <div className="space-y-8 mb-20">
          {insights.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              <span className="text-neutral-400 text-xl mt-1">
                {index + 1}
              </span>
              <p className="text-2xl text-neutral-700 font-light leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl text-neutral-600 font-light text-center italic leading-relaxed">
          Первая встреча — это рабочая сессия. Вы уходите с ясностью и следующим шагом.
        </p>
      </div>
    </section>
  );
}
