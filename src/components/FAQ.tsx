import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Это терапия или коучинг? И насколько глубоко вы «копаете»?',
      answer:
        'Это коучинг для руководителей: фокус на ясности, решениях и действиях. Мы можем затрагивать личное, если это напрямую влияет на работу и состояние, но цель — не «лечить прошлое», а вернуть управляемость и устойчивость в настоящем.'
    },
    {
      question: 'Что будет на первой встрече — по шагам?',
      answer:
        '1) Коротко фиксируем контекст и симптомы. 2) Формулируем реальный запрос (не «что-то не так», а что именно мешает). 3) Находим ключевой затык/петлю, которая повторяется. 4) Определяем 1–2 сценария и следующий шаг на 7–14 дней. Первая встреча — рабочая, а не «знакомство».'
    },
    {
      question: 'Если я не знаю запрос — это проблема?',
      answer:
        'Нет. Часто запрос формулируется прямо на диагностике. Достаточно прийти с ощущением перегруза, конфликтов, потери фокуса или сложного решения — мы развернём это в конкретную цель и критерии успеха.'
    },
    {
      question: 'Через сколько встреч это даёт эффект?',
      answer:
        'У многих ясность появляется уже после первой сессии — как минимум становится понятно, что делать дальше. Если задача точечная и острая — часто достаточно 1 стратегической сессии. Если проблема повторяется месяцами (реактивность, выгорание, границы, роль) — обычно нужен цикл 3–6 встреч, чтобы изменения закрепились.'
    },
    {
      question: 'Конфиденциальность: кто-то узнает, что я хожу к коучу?',
      answer:
        'Нет. Всё, что происходит на сессиях, остаётся между нами. Я не обсуждаю клиентов, компании и кейсы без явного согласия. Если вы хотите, мы сразу договоримся, какие темы табу и как вы формулируете это для окружения.'
    },
    {
      question: 'Что если я пойму, что вы мне не подходите?',
      answer:
        'Это нормальный риск. Поэтому есть бесплатная диагностика: она нужна, чтобы быстро понять, есть ли «совпадение» по задачам и стилю работы. Если я вижу, что мой подход не лучший для вашей ситуации — я скажу об этом прямо и предложу альтернативу.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-24 text-center">
          Частые вопросы
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-neutral-200 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-start justify-between gap-8 text-left hover:opacity-70 transition-opacity"
              >
                <h3 className="text-xl md:text-2xl font-light text-neutral-800 flex-1">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-neutral-400" strokeWidth={1.5} />
                  ) : (
                    <Plus className="w-6 h-6 text-neutral-400" strokeWidth={1.5} />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="pb-8 pr-12">
                  <p className="text-lg text-neutral-600 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
