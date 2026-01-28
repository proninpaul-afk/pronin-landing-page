import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-stone-100 via-stone-50 to-neutral-100 px-6 py-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: COPY */}
          <div className="space-y-8">
            <p className="text-sm md:text-base text-neutral-600 font-light tracking-wide">
              Для руководителей, которые много решают — и мало выдыхают
            </p>

            <h1 className="text-4xl md:text-6xl font-light text-neutral-800 leading-tight tracking-tight">
              Когда вы руководите под постоянным давлением,
              <br />
              решения начинают стоить дороже.
            </h1>

            <div className="space-y-4 max-w-xl">
              <p className="text-lg md:text-xl text-neutral-700 font-light leading-relaxed">
                Ошибки и напряжение — нормальная часть работы. Вопрос не в том, бывают ли они,
                а в том, <span className="text-neutral-800">из какого состояния вы реагируете</span>.
              </p>

              <p className="text-lg md:text-xl text-neutral-700 font-light leading-relaxed">
                Перегруз, тревога и бесконечные встречи незаметно переводят вас в режим реакции —
                и даже правильные решения начинают бить по энергии, команде и результату.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-neutral-800 text-white text-lg font-light hover:bg-neutral-700 transition-all duration-300"
              >
                Диагностическая встреча — 30 минут бесплатно
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-neutral-600 font-light max-w-sm">
                Короткий разбор вашей ситуации — без обязательств и «продажи в лоб».
              </p>
            </div>

            <p className="text-sm text-neutral-500 font-light">
              <span className="text-neutral-700">Павел Пронин, PCC</span> · 1000+ часов практики с руководителями
            </p>
          </div>

          {/* RIGHT: PHOTO */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/img_7010.jpg"
                alt="Павел Пронин"
                className="w-full h-[420px] md:h-[520px] object-cover object-center"
                loading="eager"
              />
              {/* subtle overlay to keep the vibe */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* small note under photo (optional) */}
            <p className="mt-3 text-xs text-neutral-500 font-light">
              Спокойная доминанта вместо мотивационных речей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
