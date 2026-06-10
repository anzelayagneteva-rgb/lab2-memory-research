import { systemInfo } from "../data/experimentData";

export default function SystemInfo() {
  const items = [
    { label: "Операционная система", value: systemInfo.os, icon: "🖥️" },
    { label: "Процессор", value: systemInfo.cpu, icon: "⚙️" },
    { label: "Оперативная память", value: systemInfo.ram, icon: "🧠" },
    { label: "Язык программирования", value: systemInfo.python, icon: "🐍" },
    { label: "Системный монитор", value: systemInfo.monitor, icon: "📊" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="group bg-white rounded-xl border border-slate-200 p-4 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">{item.label}</p>
              <p className="text-sm font-semibold text-slate-700 mt-0.5">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
