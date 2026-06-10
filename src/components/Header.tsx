export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Memory chip decorative elements */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/20 rounded"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${10 + Math.random() * 20}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-sm font-mono text-blue-300 bg-white/10 px-3 py-1 rounded-full">
            lab_02_memory.py
          </span>
        </div>

        <p className="text-blue-300 font-medium text-sm tracking-widest uppercase mb-3">
          Лабораторная работа №2
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Исследование использования
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            оперативной памяти
          </span>
        </h1>
        <p className="text-lg text-blue-200/80 max-w-2xl mt-6">
          Изучение поведения оперативной памяти при создании и заполнении массивов
          различного размера с использованием Python и NumPy
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          {["Python 3.12", "NumPy", "psutil", "Диспетчер задач"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-blue-400/30 text-blue-300 text-sm font-medium bg-blue-400/5 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 60L48 54C96 48 192 36 288 30C384 24 480 24 576 28C672 32 768 40 864 42C960 44 1056 40 1152 34C1248 28 1344 20 1392 16L1440 12V60H0Z"
          className="fill-slate-50"
        />
      </svg>
    </header>
  );
}
