export default function WhyNow() {
  return (
    <section className="py-28 px-6 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-neutral-800 mb-10 text-center">
          Обычно это не выглядит как кризис
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-neutral-700 font-light leading-relaxed text-center">
          <p>
            Снаружи всё работает. Встречи идут, решения принимаются,
            задачи закрываются.
          </p>

          <p>
            Но внутри растёт напряжение.
            Появляется ощущение, что каждая ошибка может дорого обойтись
            карьерой, командой или результатом.
          </p>

          <p>
            В таком состоянии становится больше контроля и реакций,
            меньше ясности и энергии.
            Решения принимаются быстрее, но всё чаще из давления.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-neutral-200">
          <p className="text-xl md:text-2xl text-neutral-800 font-light text-center leading-relaxed">
            Можно продолжать держаться.<br />
            А можно вернуть управление и снова выбирать, как действовать.
          </p>
        </div>
      </div>
    </section>
  );
}
