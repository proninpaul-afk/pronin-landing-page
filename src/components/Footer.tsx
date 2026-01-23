export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-neutral-800 text-neutral-400">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-sm font-light">
          PCC Коуч для руководителей
        </p>
        <p className="text-xs font-light">
          {new Date().getFullYear()} — Конфиденциальность гарантирована
        </p>
      </div>
    </footer>
  );
}
