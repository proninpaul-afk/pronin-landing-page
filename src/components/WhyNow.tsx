export default function WhyNow() {
  const costs = [
    'ошибок в приоритетах и фокусе',
    'сорванных договорённостей и испорченных переговоров',
    'лишних кругов согласований и микроменеджмента',
    'конфликтов «на ровном месте»',
    'потерь денег — через решения и людей',
    'выгорания и падения энергии',
    'репутационных потерь и снижения доверия команды'
  ];

  return (
    <section className="py-32 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-10 text-center">
          Цена внутреннего перегруза
        </h2>

        <p className="text-xl md:text-2xl text-neutral-500 font-light text-center mb-10">
          Это не про компетенции. Это про состояние, из которого вы действуете.
        </p>

        <p className="text-2xl md:text-3xl text-neutral-800 font-light text-center mb-20">
          Внутренний хаос превращает каждое решение<br />
          в дорогую лотерею:
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {costs.map((cost, index) => (
            <div key={index} className="flex items-center gap-4 py-4">
              <div className="w-2 h-2 bg-neutral-400 flex-shrink-0"></div>
              <p className="text-2xl text-neutral-700 font-light">{cost}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-200 pt-20">
          <p className="text-xl md:text-2xl text-neutral-800 font-light text-center leading-relaxed">
            Можно продолжать «держаться».<br />
            А можно вернуть ясность и управляемость —<br />
            за несколько недель.
          </p>
        </div>
      </div>
    </section>
  );
}
