import { experimentData } from "../data/experimentData";

export default function Analysis() {
  const overhead10 = ((experimentData[0].memoryUsedMB - experimentData[0].arraySizeMB) / experimentData[0].arraySizeMB * 100).toFixed(1);
  const overhead100 = ((experimentData[1].memoryUsedMB - experimentData[1].arraySizeMB) / experimentData[1].arraySizeMB * 100).toFixed(1);
  const overhead500 = ((experimentData[2].memoryUsedMB - experimentData[2].arraySizeMB) / experimentData[2].arraySizeMB * 100).toFixed(1);

  const speed10 = ((experimentData[0].arraySizeMB / experimentData[0].timeTotalMs) * 1000).toFixed(0);
  const speed500 = ((experimentData[2].arraySizeMB / experimentData[2].timeTotalMs) * 1000).toFixed(0);

  const findings = [
    {
      icon: "📏",
      title: "Линейная зависимость",
      description: "Использование памяти растёт линейно с увеличением размера массива. При увеличении массива в 50 раз (с 10 до 500 МБ) фактическое потребление памяти увеличивается пропорционально.",
      color: "blue",
    },
    {
      icon: "📦",
      title: "Накладные расходы памяти",
      description: `Фактически используемая память превышает запрошенный размер массива. Накладные расходы составляют: 10 МБ → ${overhead10}%, 100 МБ → ${overhead100}%, 500 МБ → ${overhead500}%. Это объясняется служебными структурами Python и NumPy (заголовки объектов, метаданные массива, выравнивание памяти).`,
      color: "orange",
    },
    {
      icon: "⏱️",
      title: "Время выполнения",
      description: `Время создания и заполнения массива также растёт линейно. Заполнение массива случайными числами занимает значительно больше времени, чем его создание (выделение памяти), так как генерация случайных чисел — вычислительно затратная операция.`,
      color: "purple",
    },
    {
      icon: "🚀",
      title: "Скорость обработки",
      description: `Скорость обработки данных составляет от ${speed10} до ${speed500} МБ/с. При больших объёмах данных скорость обработки стабилизируется, что говорит о хорошей масштабируемости NumPy при работе с большими массивами.`,
      color: "green",
    },
    {
      icon: "🧹",
      title: "Управление памятью",
      description: "Python использует автоматическое управление памятью (garbage collector). После удаления массива оператором del память возвращается операционной системе, хотя не всегда мгновенно — это зависит от аллокатора памяти ОС.",
      color: "red",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "border-blue-200 bg-blue-50",
    orange: "border-orange-200 bg-orange-50",
    purple: "border-purple-200 bg-purple-50",
    green: "border-green-200 bg-green-50",
    red: "border-red-200 bg-red-50",
  };

  const titleColorMap: Record<string, string> = {
    blue: "text-blue-700",
    orange: "text-orange-700",
    purple: "text-purple-700",
    green: "text-green-700",
    red: "text-red-700",
  };

  return (
    <div className="space-y-4">
      {findings.map((finding, index) => (
        <div
          key={index}
          className={`rounded-xl border-l-4 p-5 ${colorMap[finding.color]} transition-all hover:shadow-md`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{finding.icon}</span>
            <h4 className={`font-bold ${titleColorMap[finding.color]}`}>{finding.title}</h4>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{finding.description}</p>
        </div>
      ))}
    </div>
  );
}
