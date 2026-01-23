import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-100 via-stone-50 to-neutral-100 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h1 className="text-5xl md:text-7xl font-light text-neutral-800 leading-tight tracking-tight">
          Спокойная уверенность<br />в сложных решениях
        </h1>

        <p className="text-xl md:text-2xl text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
          Коучинг для руководителей, которые принимают решения под давлением <br />
          и хотят вернуть ясность, фокус и контроль<br />
          без внутреннего хаоса
        </p>

        <div className="pt-8">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-neutral-800 text-white text-lg font-light hover:bg-neutral-700 transition-all duration-300"
          >
            Диагностическая встреча — 30 минут бесплатно
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-sm text-neutral-500 font-light pt-4">
          За 30 минут вы поймёте, в чём реальная проблема и есть ли смысл идти дальше.
        </p>
      </div>
    </section>
  );
}
