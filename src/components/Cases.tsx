export default function Cases() {
  const cases = [
    {
      who: 'Руководитель технической команды',
      format: 'Цикл: 6 встреч',
      problem:
        'Высокий стресс и ощущение потери контроля: задачи «плывут», команда зависит от руководителя, решения принимаются в режиме пожара.',
      work:
        'Выстроили прозрачную систему задач и ответственности: приоритеты, правила контроля, точки синхронизации. Параллельно разобрали управленческие установки, которые заставляли «тащить всё на себе».',
      result:
        'Появилась предсказуемость и прозрачность по задачам. Снизился бэклог и ручное вмешательство. Команда стала самостоятельнее, у руководителя появился фокус и время.'
    },
    {
      who: 'Проектный менеджер',
      format: 'Цикл: 6 встреч',
      problem:
        'Потеря энергии и мотивации, постоянное ускорение «потому что надо», трудности с приоритетами. Ощущение, что он стал узким горлом для проектов.',
      work:
        'Собрали систему приоритизации и коммуникаций: что действительно важно, что можно делегировать/отложить, как обсуждать ожидания и сроки с заказчиками. Отдельно разобрали триггеры перегруза и реактивности.',
      result:
        'Вернулась энергия и интерес к задачам. Появились сроки, ясность и управляемость. Уровень стресса снизился, концентрация и скорость выполнения задач выросли.'
    },
    {
      who: 'Руководитель продуктового блока',
      format: 'Стратегическая сессия + 3 встречи',
      problem:
        'Перегруз и потеря смысла: усталость от внутренней политики, много тактики, мало контроля над реальной картиной.',
      work:
        'Прояснили, что именно «съедает» энергию: конфликты приоритетов, границы, роль в системе. Собрали 1–2 сценария действий и план изменений в коммуникации с топ-уровнем.',
      result:
        'Снизилось внутреннее напряжение, вернулся фокус. Появилась ясность по приоритетам и следующему шагу. Клиент переключился на стратегические задачи и сделал коммуникацию с руководством более прозрачной.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-10 text-center">
          Кейсы
        </h2>

        <p className="text-xl text-neutral-600 font-light text-center mb-20">
          Коротко: с чем приходят руководители — и что меняется в работе и состоянии
        </p>

        <div className="space-y-16">
          {cases.map((caseItem, index) => (
            <div key={index} className="border-l-2 border-neutral-200 pl-8 space-y-6">
              <div>
                <h3 className="text-sm uppercase text-neutral-400 font-light mb-2">
                  Клиент
                </h3>
                <p className="text-xl text-neutral-700 font-light">
                  {caseItem.who}
                </p>
                <p className="text-sm text-neutral-500 font-light mt-2">
                  {caseItem.format}
                </p>
              </div>

              <div>
                <h3 className="text-sm uppercase text-neutral-400 font-light mb-2">
                  Запрос
                </h3>
                <p className="text-lg text-neutral-600 font-light leading-relaxed">
                  {caseItem.problem}
                </p>
              </div>

              <div>
                <h3 className="text-sm uppercase text-neutral-400 font-light mb-2">
                  Что делали
                </h3>
                <p className="text-lg text-neutral-600 font-light leading-relaxed">
                  {caseItem.work}
                </p>
              </div>

              <div>
                <h3 className="text-sm uppercase text-neutral-400 font-light mb-2">
                  Что изменилось
                </h3>
                <p className="text-lg text-neutral-700 font-light leading-relaxed">
                  {caseItem.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-20 text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-800 text-neutral-800 font-light hover:bg-neutral-800 hover:text-white transition"
          >
            Обсудить вашу ситуацию
          </button>
        </div>
      </div>
    </section>
  );
}
