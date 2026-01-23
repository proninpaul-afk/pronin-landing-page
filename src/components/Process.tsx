import { ArrowRight } from 'lucide-react';

export default function Process() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-6">
            Форматы работы
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-light">
            Выберите формат в зависимости от задачи и степени сложности ситуации
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-neutral-50 border border-neutral-200 p-10 flex flex-col">
            <h3 className="text-2xl font-light text-neutral-800 mb-2">
              Бесплатная диагностическая встреча
            </h3>
            <p className="text-neutral-500 font-light mb-6">30 минут · бесплатно</p>

            <h4 className="text-xl font-light text-neutral-800 mb-6 leading-tight">
              За 30 минут вы поймёте, в чём реальная проблема и есть ли смысл идти дальше
            </h4>

            <p className="text-neutral-600 font-light mb-6 leading-relaxed">
              Это не продающая сессия и не разговор «для знакомства». Цель — быстро и честно понять, что происходит и можно ли это решить коучингом.
            </p>

            <div className="bg-white p-6 border border-neutral-200 mb-6 flex-grow">
              <p className="text-sm text-neutral-500 font-light mb-3 uppercase">Что вы получите</p>
              <ul className="space-y-3">
                <li className="text-neutral-700 font-light flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  <span>чёткую формулировку вашей ключевой проблемы</span>
                </li>
                <li className="text-neutral-700 font-light flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  <span>понимание, почему вы застряли именно здесь</span>
                </li>
                <li className="text-neutral-700 font-light flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  <span>оценку: решаема ли ситуация коучингом</span>
                </li>
                <li className="text-neutral-700 font-light flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  <span>честную рекомендацию — работать дальше или нет</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-100 p-6 mb-6 border border-neutral-200">
              <p className="text-sm text-neutral-700 font-light">
                <span className="font-semibold">Важно:</span> Если я вижу, что коучинг не подходит — я прямо об этом говорю и не предлагаю платную работу.
              </p>
            </div>

            <p className="text-sm text-neutral-500 font-light mb-6">
              Кому подходит: если сложно сформулировать запрос, если есть ощущение тупика и неясности
            </p>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full py-4 px-6 bg-neutral-800 text-white font-light hover:bg-neutral-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Записаться на диагностику
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 p-10 flex flex-col">
            <h3 className="text-2xl font-light text-neutral-800 mb-2">
              Стратегическая сессия
            </h3>
            <p className="text-neutral-500 font-light mb-6">90 минут · 10 000 ₽</p>

            <h4 className="text-xl font-light text-neutral-800 mb-6 leading-tight">
              Когда нужно решение, а не ещё один месяц размышлений
            </h4>

            <p className="text-neutral-600 font-light mb-6 leading-relaxed">
              Одна сессия для сложной, острой или застрявшей ситуации, где важно быстро вернуть ясность и контроль.
            </p>

            <div className="bg-white p-6 border border-neutral-200 mb-6 flex-grow">
              <p className="text-sm text-neutral-500 font-light mb-3 uppercase">Что происходит на сессии</p>
              <ul className="space-y-3">
                <li className="text-neutral-700 font-light flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  <span>быстрый разбор ситуации без ухода в терапию</span>
                </li>
                <li className="text-neutral-700 font-light flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  <span>выявление повторяющихся паттернов и ментальных ловушек</span>
                </li>
                <li className="text-neutral-700 font-light flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  <span>формирование 1–2 реалистичных сценариев действий</span>
                </li>
                <li className="text-neutral-700 font-light flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  <span>чёткое понимание, что делать дальше</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-100 p-6 mb-6 border border-neutral-200">
              <p className="text-sm text-neutral-700 font-light">
                <span className="font-semibold">Часто одной такой сессии достаточно,</span> чтобы выйти из тупика и принять решение.
              </p>
            </div>

            <p className="text-sm text-neutral-500 font-light mb-6">
              Кому подходит: сложное управленческое решение, конфликт, давление, перегруз, ощущение «я не вывожу, но решения нет»
            </p>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full py-4 px-6 bg-neutral-800 text-white font-light hover:bg-neutral-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Записаться на сессию
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 p-10 flex flex-col">
            <h3 className="text-2xl font-light text-neutral-800 mb-2">
              Коучинговый цикл
            </h3>

            <div className="mb-6 pb-6 border-b border-neutral-300">
              <p className="text-neutral-500 font-light mb-4">3 встречи</p>
              <p className="text-2xl font-light text-neutral-800 mb-4">27 000 ₽</p>
              <h4 className="text-lg font-light text-neutral-800 leading-tight">
                Если проблемы повторяются, а вы реагируете одинаково
              </h4>
            </div>

            <p className="text-neutral-600 font-light mb-4 leading-relaxed text-sm">
              Формат для стабилизации состояния, наведения порядка в мышлении и изменения привычных способов реагирования.
            </p>

            <div className="bg-white p-6 border border-neutral-200 mb-6 flex-grow">
              <p className="text-sm text-neutral-500 font-light mb-3 uppercase">Фокус работы</p>
              <ul className="space-y-2">
                <li className="text-neutral-700 font-light text-sm flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  <span>осознание ключевых паттернов</span>
                </li>
                <li className="text-neutral-700 font-light text-sm flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  <span>снижение внутреннего напряжения</span>
                </li>
                <li className="text-neutral-700 font-light text-sm flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  <span>первые устойчивые изменения</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-neutral-300 pt-6 mb-6">
              <p className="text-neutral-500 font-light mb-4">6 встреч</p>
              <p className="text-2xl font-light text-neutral-800 mb-4">52 000 ₽</p>
              <p className="text-sm text-neutral-600 font-light mb-4">Поддержка между сессиями включена</p>
              <h4 className="text-lg font-light text-neutral-800 leading-tight">
                Если вы хотите изменить способ жить и работать
              </h4>
            </div>

            <p className="text-neutral-600 font-light mb-4 leading-relaxed text-sm">
              Глубокая системная работа с тем, что годами влияет на ваши решения, энергию и уверенность.
            </p>

            <div className="bg-neutral-100 p-6 border border-neutral-200 mb-6">
              <p className="text-sm text-neutral-700 font-light">
                <span className="font-semibold">Этот формат не про быстрые советы,</span> а про изменения, которые остаются с вами.
              </p>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full py-4 px-6 bg-neutral-800 text-white font-light hover:bg-neutral-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Обсудить формат
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="bg-neutral-50 border border-neutral-200 p-10 text-center max-w-3xl mx-auto">
          <p className="text-neutral-700 font-light leading-relaxed">
            Я работаю с ограниченным количеством клиентов<br />
            и беру в долгосрочную работу не всех.
          </p>
          <p className="text-neutral-600 font-light leading-relaxed mt-4">
            Если вы ищете мотивацию, лайфхаки или «просто поговорить» —<br />
            этот формат вам не подойдёт.
          </p>
        </div>
      </div>
    </section>
  );
}
