import { useState } from 'react';

export default function RemoveDuplicates() {
  const [text, setText] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [trimLines, setTrimLines] = useState(true);

  const process = () => {
    let lines = text.split('\n');
    if (trimLines) lines = lines.map(l => l.trim());
    const seen = new Set<string>();
    const unique: string[] = [];
    for (const line of lines) {
      const key = caseSensitive ? line : line.toLowerCase();
      if (!seen.has(key)) { seen.add(key); unique.push(line); }
    }
    return unique.join('\n');
  };

  const result = text ? process() : '';
  const origCount = text.split('\n').filter(l => l.trim()).length;
  const newCount = result.split('\n').filter(l => l.trim()).length;
  const removed = origCount - newCount;

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" checked={caseSensitive} onChange={e => setCaseSensitive(e.target.checked)} className="rounded" />
          Case sensitive
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" checked={trimLines} onChange={e => setTrimLines(e.target.checked)} className="rounded" />
          Trim whitespace
        </label>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Input ({origCount} lines)</label>
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Enter text with duplicate lines..."
            className="w-full h-56 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y text-gray-900 font-mono text-sm" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-gray-700">{newCount} unique {removed > 0 && <span className="text-red-500">({removed} removed)</span>}</label>
            {result && <button onClick={() => navigator.clipboard.writeText(result)} className="text-xs text-blue-600 font-medium">Copy</button>}
          </div>
          <textarea value={result} readOnly className="w-full h-56 p-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 resize-y font-mono text-sm" />
        </div>
      </div>
    </div>
  );
}
