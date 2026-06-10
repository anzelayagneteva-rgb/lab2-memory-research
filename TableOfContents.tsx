const sections = [
  { id: "goal", label: "Цель работы", icon: "🎯" },
  { id: "equipment", label: "Оборудование", icon: "🖥️" },
  { id: "program", label: "Описание программы", icon: "📝" },
  { id: "code", label: "Исходный код", icon: "💻" },
  { id: "results", label: "Таблица результатов", icon: "📋" },
  { id: "charts", label: "Графики", icon: "📊" },
  { id: "analysis", label: "Анализ данных", icon: "🔍" },
  { id: "conclusions", label: "Выводы", icon: "✅" },
];

export default function TableOfContents() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-12">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Содержание</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-left text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-all group"
          >
            <span className="text-lg group-hover:scale-110 transition-transform">{section.icon}</span>
            <span>
              <span className="text-slate-300 font-mono text-xs mr-1">{index + 1}.</span>
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
