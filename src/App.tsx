import Header from "./components/Header";
import TableOfContents from "./components/TableOfContents";
import Section from "./components/Section";
import SystemInfo from "./components/SystemInfo";
import StepCards from "./components/StepCards";
import CodeBlock from "./components/CodeBlock";
import ResultsTable from "./components/ResultsTable";
import Charts from "./components/Charts";
import Analysis from "./components/Analysis";
import Conclusions from "./components/Conclusions";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <TableOfContents />

        {/* 1. Цель работы */}
        <Section id="goal" number="1" title="Цель работы" icon="🎯">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-600 leading-relaxed text-lg">
              Изучить использование оперативной памяти при работе программ. Исследовать зависимость
              потребления памяти и времени выполнения от размера создаваемых массивов данных.
            </p>
            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm text-slate-500">Выделение памяти</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-sm text-slate-500">Мониторинг потребления</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-slate-500">Анализ эффективности</span>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Оборудование */}
        <Section id="equipment" number="2" title="Оборудование" icon="🖥️">
          <SystemInfo />
        </Section>

        {/* 3. Описание программы */}
        <Section id="program" number="3" title="Описание программы" icon="📝">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-6">
            <p className="text-slate-600 leading-relaxed mb-4">
              Для проведения экспериментов была разработана программа на языке Python с использованием
              библиотеки <code className="bg-slate-100 text-blue-600 px-1.5 py-0.5 rounded text-sm font-mono">NumPy</code> для
              создания массивов и <code className="bg-slate-100 text-blue-600 px-1.5 py-0.5 rounded text-sm font-mono">psutil</code> для
              мониторинга использования памяти.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Программа последовательно создаёт массивы размером 10, 100 и 500 МБ, измеряя для каждого:
              потребление оперативной памяти до и после создания, время выделения памяти и время заполнения
              массива случайными числами.
            </p>
          </div>
          <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
            <span>🔧</span> Алгоритм работы программы
          </h3>
          <StepCards />
        </Section>

        {/* 4. Исходный код */}
        <Section id="code" number="4" title="Исходный код программы" icon="💻">
          <CodeBlock />
        </Section>

        {/* 5. Таблица результатов */}
        <Section id="results" number="5" title="Таблица результатов" icon="📋">
          <ResultsTable />
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-4 py-2 shadow-sm">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-sm text-slate-500">
                Фактическое использование памяти превышает запрошенный размер
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-4 py-2 shadow-sm">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-sm text-slate-500">
                Время растёт линейно с увеличением размера
              </span>
            </div>
          </div>
        </Section>

        {/* 6. Графики */}
        <Section id="charts" number="6" title="Графический анализ" icon="📊">
          <Charts />
        </Section>

        {/* 7. Анализ данных */}
        <Section id="analysis" number="7" title="Анализ полученных данных" icon="🔍">
          <Analysis />
        </Section>

        {/* 8. Выводы */}
        <Section id="conclusions" number="8" title="Выводы" icon="✅">
          <Conclusions />
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-center py-8 mt-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm">
            Лабораторная работа №2 — Исследование использования оперативной памяти
          </p>
          <p className="text-xs mt-2 text-slate-500">
            Выполнено с использованием Python 3.12, NumPy, psutil
          </p>
        </div>
      </footer>
    </div>
  );
}
