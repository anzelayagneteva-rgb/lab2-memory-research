import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { pythonCode, pythonCodeSimple } from "../data/experimentData";

export default function CodeBlock() {
  const [activeTab, setActiveTab] = useState<"full" | "simple">("full");
  const [copied, setCopied] = useState(false);

  const code = activeTab === "full" ? pythonCode : pythonCodeSimple;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-slate-700 shadow-xl">
      {/* Tab bar */}
      <div className="flex items-center justify-between bg-slate-800 px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex ml-4 gap-1">
            <button
              onClick={() => setActiveTab("full")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === "full"
                  ? "bg-slate-600 text-white"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              memory_experiment.py
            </button>
            <button
              onClick={() => setActiveTab("simple")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === "simple"
                  ? "bg-slate-600 text-white"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              simple_version.py
            </button>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-400">Скопировано!</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Копировать
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language="python"
        style={oneDark}
        showLineNumbers
        customStyle={{
          margin: 0,
          borderRadius: 0,
          fontSize: "13px",
          lineHeight: "1.6",
          maxHeight: "500px",
        }}
        lineNumberStyle={{
          minWidth: "3em",
          paddingRight: "1em",
          color: "#4b5563",
          borderRight: "1px solid #374151",
          marginRight: "1em",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
