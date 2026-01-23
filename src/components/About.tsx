export default function About() {
  const principles = [
    {
      title: 'Без мотивации и “волшебных техник”',
      description:
        'Мы работаем не с вдохновением, а с тем, как вы думаете, решаете и действуете под давлением — в реальных управленческих условиях.'
    },
    {
      title: 'Конкретика вместо общих советов',
      description:
        'Разбираем вашу ситуацию: где вы теряете контроль, что повторяется, какие решения вы избегаете и как вернуть управляемость.'
    },
    {
      title: 'Честный контракт и границы',
      description:
        'Если я вижу, что мой формат вам не подходит — скажу об этом прямо. Цель — самостоятельность клиента, а не зависимость от специалиста.'
    }
  ];

  const credentials = [
    {
      title: 'Психфак МГУ — фундаментальная база',
      description:
        'Это помогает быстрее отделять “реакцию на перегруз” от системной проблемы и не тратить время на лишнее.'
    },
    {
      title: 'Психоаналитическое бизнес-консультирование (ВШЭ)',
      description:
        'Умею разбирать сложные управленческие ситуации и внутренние конфликты, которые реально влияют на решения и коммуникацию.'
    },
    {
      title: 'ACTP ICF — международный стандарт коучинга',
      description:
        'Работаю в чётком формате: цель, критерии, договорённости, ответственность. Без манипуляций и “игр в зависимость”.'
    },
    {
      title: '1000+ часов практики',
      description:
        'Быстрее распознаю типовые ловушки руководителей: реактивность, перегруз, размытые границы, микроменеджмент, выгорание.'
    },
    {
      title: 'Опыт руководства в корпорациях',
      description:
        'Я знаю цену решений и давление ответственности изнутри — поэтому говорю с вами на одном языке.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-12">
          Обо мне
        </h2>

        <div className="space-y-8 mb-16">
          <p className="text-lg md:text-xl text-neutral-700 font-light leading-relaxed">
            Я работаю с руководителями, которые принимают сложные решения под давлением
            и понимают, что их состояние напрямую влияет на бизнес, команду и семью.
          </p>

          <p className="text-lg md:text-xl text-neutral-700 font-light leading-relaxed">
            Моя задача — не подбадривать и не “чинить” вас,
            а возвращать ясность, устойчивость и способность принимать решения
            в реальных, а не учебных условиях.
          </p>
        </div>

        <h3 className="text-xl font-light text-neutral-800 mb-10 uppercase tracking-wide text-neutral-600">
          Принципы работы
        </h3>

        <div className="space-y-10 mb-16">
          {principles.map((item, index) => (
            <div key={index} className="border-l-2 border-neutral-200 pl-8 py-2">
              <p className="text-lg font-semibold text-neutral-800 mb-3">
                {item.title}
              </p>
              <p className="text-neutral-600 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-light text-neutral-800 mb-10 uppercase tracking-wide text-neutral-600">
          Профессиональный фундамент
        </h3>

        <div className="space-y-10">
          {credentials.map((item, index) => (
            <div key={index} className="border-l-2 border-neutral-200 pl-8 py-2">
              <p className="text-lg font-semibold text-neutral-800 mb-3">
                {item.title}
              </p>
              <p className="text-neutral-600 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
