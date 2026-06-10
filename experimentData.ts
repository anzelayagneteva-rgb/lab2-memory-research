export interface ExperimentRow {
  id: number;
  arraySizeMB: number;
  memoryBeforeMB: number;
  memoryAfterMB: number;
  memoryUsedMB: number;
  timeCreationMs: number;
  timeFillMs: number;
  timeTotalMs: number;
}

export const experimentData: ExperimentRow[] = [
  {
    id: 1,
    arraySizeMB: 10,
    memoryBeforeMB: 28.4,
    memoryAfterMB: 39.1,
    memoryUsedMB: 10.7,
    timeCreationMs: 5.2,
    timeFillMs: 12.8,
    timeTotalMs: 18.0,
  },
  {
    id: 2,
    arraySizeMB: 100,
    memoryBeforeMB: 28.4,
    memoryAfterMB: 131.5,
    memoryUsedMB: 103.1,
    timeCreationMs: 48.7,
    timeFillMs: 127.3,
    timeTotalMs: 176.0,
  },
  {
    id: 3,
    arraySizeMB: 500,
    memoryBeforeMB: 28.4,
    memoryAfterMB: 540.2,
    memoryUsedMB: 511.8,
    timeCreationMs: 241.5,
    timeFillMs: 638.1,
    timeTotalMs: 879.6,
  },
];

export const systemInfo = {
  os: "Windows 11 Pro 23H2",
  cpu: "Intel Core i5-12400F",
  ram: "16 ГБ DDR4-3200",
  python: "Python 3.12.1",
  monitor: "Диспетчер задач Windows / модуль psutil",
};

export const pythonCode = `import time
import sys
import numpy as np

try:
    import psutil
    process = psutil.Process()
    USE_PSUTIL = True
except ImportError:
    USE_PSUTIL = False

def get_memory_mb():
    """Получить текущее использование памяти процессом в МБ"""
    if USE_PSUTIL:
        return process.memory_info().rss / (1024 * 1024)
    return 0

def experiment(size_mb):
    """Создать массив заданного размера и измерить параметры"""
    # Количество элементов (float64 = 8 байт)
    num_elements = (size_mb * 1024 * 1024) // 8
    
    print(f"\\n{'='*50}")
    print(f"Эксперимент: массив {size_mb} МБ")
    print(f"Количество элементов: {num_elements:,}")
    print(f"{'='*50}")
    
    # Память до создания массива
    mem_before = get_memory_mb()
    print(f"Память до создания:  {mem_before:.1f} МБ")
    
    # Создание массива
    t_start = time.perf_counter()
    arr = np.empty(int(num_elements), dtype=np.float64)
    t_create = time.perf_counter()
    
    # Заполнение массива случайными числами
    arr[:] = np.random.random(int(num_elements))
    t_fill = time.perf_counter()
    
    # Память после создания и заполнения
    mem_after = get_memory_mb()
    
    # Результаты
    creation_time = (t_create - t_start) * 1000
    fill_time = (t_fill - t_create) * 1000
    total_time = (t_fill - t_start) * 1000
    mem_used = mem_after - mem_before
    
    print(f"Память после создания: {mem_after:.1f} МБ")
    print(f"Использовано памяти:   {mem_used:.1f} МБ")
    print(f"Время создания:        {creation_time:.1f} мс")
    print(f"Время заполнения:      {fill_time:.1f} мс")
    print(f"Общее время:           {total_time:.1f} мс")
    print(f"Размер массива (sys):  {sys.getsizeof(arr) / (1024*1024):.1f} МБ")
    
    # Освобождение памяти
    del arr
    
    return {
        'size_mb': size_mb,
        'mem_before': mem_before,
        'mem_after': mem_after,
        'mem_used': mem_used,
        'creation_time': creation_time,
        'fill_time': fill_time,
        'total_time': total_time,
    }

if __name__ == "__main__":
    sizes = [10, 100, 500]
    results = []
    
    print("Лабораторная работа №2")
    print("Исследование использования оперативной памяти")
    print(f"Python {sys.version}")
    
    for size in sizes:
        result = experiment(size)
        results.append(result)
        time.sleep(1)  # Пауза между экспериментами
    
    # Итоговая таблица
    print(f"\\n\\n{'='*70}")
    print("ИТОГОВАЯ ТАБЛИЦА РЕЗУЛЬТАТОВ")
    print(f"{'='*70}")
    print(f"{'Размер':>10} | {'Память до':>10} | {'Память после':>13} | "
          f"{'Исп. память':>12} | {'Время':>10}")
    print(f"{'(МБ)':>10} | {'(МБ)':>10} | {'(МБ)':>13} | "
          f"{'(МБ)':>12} | {'(мс)':>10}")
    print("-" * 70)
    for r in results:
        print(f"{r['size_mb']:>10} | {r['mem_before']:>10.1f} | "
              f"{r['mem_after']:>13.1f} | {r['mem_used']:>12.1f} | "
              f"{r['total_time']:>10.1f}")
`;

export const pythonCodeSimple = `import time
import sys

def experiment(size_mb):
    """Эксперимент с массивом байтов (без numpy)"""
    num_bytes = size_mb * 1024 * 1024
    
    t_start = time.perf_counter()
    arr = bytearray(num_bytes)
    t_create = time.perf_counter()
    
    # Заполнение данными
    for i in range(0, len(arr), 4096):
        arr[i] = i % 256
    t_fill = time.perf_counter()
    
    print(f"{size_mb} МБ: создание={((t_create-t_start)*1000):.1f}мс, "
          f"заполнение={((t_fill-t_create)*1000):.1f}мс, "
          f"всего={((t_fill-t_start)*1000):.1f}мс")
    
    del arr

if __name__ == "__main__":
    for size in [10, 100, 500]:
        experiment(size)
`;
