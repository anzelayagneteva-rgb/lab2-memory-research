import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";
import { experimentData } from "../data/experimentData";

const memoryChartData = experimentData.map((row) => ({
  name: `${row.arraySizeMB} МБ`,
  "Запрошено": row.arraySizeMB,
  "Фактически использовано": row.memoryUsedMB,
  "Накладные расходы": +(row.memoryUsedMB - row.arraySizeMB).toFixed(1),
}));

const timeChartData = experimentData.map((row) => ({
  name: `${row.arraySizeMB} МБ`,
  "Создание массива": row.timeCreationMs,
  "Заполнение данными": row.timeFillMs,
  "Общее время": row.timeTotalMs,
}));

const efficiencyData = experimentData.map((row) => ({
  name: `${row.arraySizeMB} МБ`,
  "Скорость (МБ/с)": +((row.arraySizeMB / row.timeTotalMs) * 1000).toFixed(1),
  "Overhead (%)": +(((row.memoryUsedMB - row.arraySizeMB) / row.arraySizeMB) * 100).toFixed(1),
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-3">
        <p className="text-sm font-semibold text-slate-700 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: <span className="font-bold">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Charts() {
  return (
    <div className="space-y-10">
      {/* Memory Usage Chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-700 mb-1">📊 Использование памяти</h3>
        <p className="text-sm text-slate-400 mb-6">Сравнение запрошенного и фактически использованного объёма памяти</p>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={memoryChartData} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 13 }} />
            <YAxis tick={{ fontSize: 12 }} label={{ value: "МБ", angle: -90, position: "insideLeft", fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 13 }} />
            <Bar dataKey="Запрошено" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Фактически использовано" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Time Chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-700 mb-1">⏱️ Время выполнения</h3>
        <p className="text-sm text-slate-400 mb-6">Время создания и заполнения массивов в миллисекундах</p>
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={timeChartData}>
            <defs>
              <linearGradient id="colorCreation" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 13 }} />
            <YAxis tick={{ fontSize: 12 }} label={{ value: "мс", angle: -90, position: "insideLeft", fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 13 }} />
            <Area type="monotone" dataKey="Создание массива" stroke="#6366f1" fill="url(#colorCreation)" strokeWidth={2} />
            <Area type="monotone" dataKey="Заполнение данными" stroke="#06b6d4" fill="url(#colorFill)" strokeWidth={2} />
            <Area type="monotone" dataKey="Общее время" stroke="#f43f5e" fill="url(#colorTotal)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Efficiency Chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-700 mb-1">🚀 Эффективность</h3>
        <p className="text-sm text-slate-400 mb-6">Скорость обработки данных и процент накладных расходов памяти</p>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={efficiencyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 13 }} />
            <YAxis yAxisId="left" tick={{ fontSize: 12 }} label={{ value: "МБ/с", angle: -90, position: "insideLeft", fontSize: 12 }} />
            <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} label={{ value: "%", angle: 90, position: "insideRight", fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 13 }} />
            <Line yAxisId="left" type="monotone" dataKey="Скорость (МБ/с)" stroke="#10b981" strokeWidth={3} dot={{ r: 6 }} />
            <Line yAxisId="right" type="monotone" dataKey="Overhead (%)" stroke="#ef4444" strokeWidth={3} dot={{ r: 6 }} strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
