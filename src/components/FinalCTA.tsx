import { useState } from 'react';
import { Send } from 'lucide-react';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за заявку! Я свяжусь с вами в ближайшее время.');
  };

  return (
    <section id="contact" className="py-32 px-6 bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-8">
            Готовы перестать жить<br />
            в режиме «держусь из последних сил»?
          </h2>

          <p className="text-xl md:text-2xl text-neutral-700 font-light leading-relaxed mt-8">
            Запишитесь на бесплатную диагностическую встречу.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-12 space-y-8">
          <div>
            <label className="block text-sm text-neutral-500 font-light mb-3">
              Ваше имя
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 border border-neutral-200 focus:border-neutral-800 focus:outline-none transition-colors text-lg font-light"
              placeholder="Как вас зовут"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-500 font-light mb-3">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 border border-neutral-200 focus:border-neutral-800 focus:outline-none transition-colors text-lg font-light"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-500 font-light mb-3">
              Телефон (необязательно)
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-6 py-4 border border-neutral-200 focus:border-neutral-800 focus:outline-none transition-colors text-lg font-light"
              placeholder="+7"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-500 font-light mb-3">
              Что вас беспокоит (необязательно)
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-6 py-4 border border-neutral-200 focus:border-neutral-800 focus:outline-none transition-colors text-lg font-light resize-none"
              placeholder="Опишите кратко, с чем вы хотели бы разобраться"
            />
          </div>

          <button
            type="submit"
            className="group w-full py-5 px-8 bg-neutral-800 text-white text-lg font-light hover:bg-neutral-700 transition-all duration-300 flex items-center justify-center gap-3"
          >
            Отправить заявку
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-sm text-neutral-500 font-light text-center pt-4">
            Отвечу в течение 24 часов
          </p>
        </form>
      </div>
    </section>
  );
}
