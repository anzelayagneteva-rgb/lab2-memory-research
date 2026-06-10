export default function StepCards() {
  const steps = [
    {
      step: 1,
      title: "Импорт библиотек",
      description: "Подключаются модули time, sys, numpy и psutil для измерения времени, памяти и работы с массивами.",
      icon: "📦",
    },
    {
      step: 2,
      title: "Измерение начальной памяти",
      description: "С помощью psutil.Process().memory_info().rss фиксируется текущее потребление памяти процессом (RSS — Resident Set Size).",
      icon: "📏",
    },
    {
      step: 3,
      title: "Создание массива",
      description: "Функция np.empty() выделяет непрерывный блок памяти для массива элементов типа float64 (8 байт каждый).",
      icon: "🏗️",
    },
    {
      step: 4,
      title: "Заполнение данными",
      description: "Массив заполняется случайными числами с помощью np.random.random(). Это заставляет ОС фактически выделить физические страницы памяти.",
      icon: "🎲",
    },
    {
      step: 5,
      title: "Измерение результатов",
      description: "Фиксируется конечное потребление памяти и вычисляется разница. Время измеряется с помощью time.perf_counter().",
      icon: "⏱️",
    },
    {
      step: 6,
      title: "Освобождение памяти",
      description: "Оператор del удаляет ссылку на массив, позволяя сборщику мусора освободить память.",
      icon: "🧹",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {steps.map((step) => (
        <div
          key={step.step}
          className="group relative bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl group-hover:scale-110 transition-transform">{step.icon}</span>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold">
                {step.step}
              </span>
              <h4 className="font-bold text-slate-700 text-sm">{step.title}</h4>
            </div>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
