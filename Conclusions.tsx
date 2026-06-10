export default function Conclusions() {
  const conclusions = [
    "Использование оперативной памяти при создании массивов растёт линейно пропорционально размеру массива.",
    "Фактическое потребление памяти превышает теоретический размер массива на 2–7% из-за служебных структур интерпретатора и библиотеки NumPy.",
    "Время выполнения операций с памятью (выделение, заполнение) также имеет линейную зависимость от размера данных.",
    "Заполнение массива случайными числами занимает в 2.5–3 раза больше времени, чем выделение памяти, что объясняется вычислительной сложностью генерации случайных чисел.",
    "Библиотека NumPy обеспечивает эффективное управление памятью для больших массивов благодаря использованию непрерывных блоков памяти (contiguous arrays).",
    "Системный монитор (Диспетчер задач / psutil) является надёжным инструментом для мониторинга использования памяти процессами в реальном времени.",
  ];

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 md:p-8 text-white shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold">Основные выводы</h3>
      </div>
      <ol className="space-y-4">
        {conclusions.map((conclusion, index) => (
          <li key={index} className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-green-400 border border-green-400/30">
              {index + 1}
            </span>
            <p className="text-slate-300 text-sm leading-relaxed pt-0.5">{conclusion}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
