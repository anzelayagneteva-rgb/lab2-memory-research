import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  number?: string;
  title: string;
  icon?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, number, title, icon, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`mb-16 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        {icon && (
          <span className="text-2xl">{icon}</span>
        )}
        {number && (
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-sm font-bold">
            {number}
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{title}</h2>
      </div>
      <div className="pl-0 md:pl-11">
        {children}
      </div>
    </section>
  );
}
