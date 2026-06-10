import { experimentData } from "../data/experimentData";

export default function ResultsTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <th className="px-4 py-3 text-left font-semibold rounded-tl-xl">№</th>
            <th className="px-4 py-3 text-right font-semibold">Размер массива (МБ)</th>
            <th className="px-4 py-3 text-right font-semibold">Память до (МБ)</th>
            <th className="px-4 py-3 text-right font-semibold">Память после (МБ)</th>
            <th className="px-4 py-3 text-right font-semibold">Использовано (МБ)</th>
            <th className="px-4 py-3 text-right font-semibold">Время создания (мс)</th>
            <th className="px-4 py-3 text-right font-semibold">Время заполнения (мс)</th>
            <th className="px-4 py-3 text-right font-semibold rounded-tr-xl">Общее время (мс)</th>
          </tr>
        </thead>
        <tbody>
          {experimentData.map((row, index) => (
            <tr
              key={row.id}
              className={`border-t border-slate-100 transition-colors hover:bg-blue-50/50 ${
                index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
              }`}
            >
              <td className="px-4 py-3 font-medium text-slate-600">{row.id}</td>
              <td className="px-4 py-3 text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                  {row.arraySizeMB} МБ
                </span>
              </td>
              <td className="px-4 py-3 text-right text-slate-600">{row.memoryBeforeMB.toFixed(1)}</td>
              <td className="px-4 py-3 text-right text-slate-600">{row.memoryAfterMB.toFixed(1)}</td>
              <td className="px-4 py-3 text-right font-semibold text-orange-600">{row.memoryUsedMB.toFixed(1)}</td>
              <td className="px-4 py-3 text-right text-slate-600">{row.timeCreationMs.toFixed(1)}</td>
              <td className="px-4 py-3 text-right text-slate-600">{row.timeFillMs.toFixed(1)}</td>
              <td className="px-4 py-3 text-right font-semibold text-indigo-600">{row.timeTotalMs.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t-2 border-slate-200 bg-slate-50">
            <td colSpan={4} className="px-4 py-3 text-right font-semibold text-slate-500 text-xs uppercase tracking-wider">
              Среднее:
            </td>
            <td className="px-4 py-3 text-right font-semibold text-orange-600">
              {(experimentData.reduce((s, r) => s + r.memoryUsedMB, 0) / experimentData.length).toFixed(1)}
            </td>
            <td className="px-4 py-3 text-right text-slate-500">
              {(experimentData.reduce((s, r) => s + r.timeCreationMs, 0) / experimentData.length).toFixed(1)}
            </td>
            <td className="px-4 py-3 text-right text-slate-500">
              {(experimentData.reduce((s, r) => s + r.timeFillMs, 0) / experimentData.length).toFixed(1)}
            </td>
            <td className="px-4 py-3 text-right font-semibold text-indigo-600">
              {(experimentData.reduce((s, r) => s + r.timeTotalMs, 0) / experimentData.length).toFixed(1)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
