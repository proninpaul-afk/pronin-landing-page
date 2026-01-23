import { Target, Layers, Anchor, Focus } from 'lucide-react';

export default function CoreJob() {
  const approaches = [
    {
      icon: Layers,
      text: 'Понимание внутренних конфликтов и их источников'
    },
    {
      icon: Target,
      text: 'Уменьшение реактивности и импульсивных решений'
    },
    {
      icon: Anchor,
      text: 'Восстановление внутренней опоры и устойчивости'
    },
    {
      icon: Focus,
      text: 'Укрепление фокуса и способности выбирать приоритеты'
    }
  ];

  return (
    <section className="py-32 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-12 text-center max-w-3xl mx-auto leading-tight">
          Ваша главная задача —<br />
          принимать уверенные решения,<br />
          сохраняя устойчивость
        </h2>

        <p className="text-xl md:text-2xl text-neutral-600 font-light text-center mb-24 max-w-2xl mx-auto">
          Это достигается не через мотивацию или советы,<br />
          а через работу с внутренней структурой
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Icon className="w-8 h-8 text-neutral-400" strokeWidth={1.5} />
                </div>
                <p className="text-xl text-neutral-700 font-light leading-relaxed pt-1">
                  {approach.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
