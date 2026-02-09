import { useState } from 'react';

export default function LineSorter() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState('alpha');

  const sort = () => {
    const lines = text.split('\n').filter(l => l.trim());
    switch(mode) {
      case 'alpha': return lines.sort((a,b) => a.localeCompare(b)).join('\n');
      case 'alpha-rev': return lines.sort((a,b) => b.localeCompare(a)).join('\n');
      case 'length': return lines.sort((a,b) => a.length - b.length).join('\n');
      case 'length-rev': return lines.sort((a,b) => b.length - a.length).join('\n');
      case 'numeric': return lines.sort((a,b) => parseFloat(a) - parseFloat(b)).join('\n');
      case 'random': return lines.sort(() => Math.random() - 0.5).join('\n');
      default: return text;
    }
  };

  const result = text ? sort() : '';
  const modes = [
    { id: 'alpha', label: 'A → Z' }, { id: 'alpha-rev', label: 'Z → A' },
    { id: 'length', label: 'Shortest' }, { id: 'length-rev', label: 'Longest' },
    { id: 'numeric', label: 'Numeric' }, { id: 'random', label: 'Random' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {modes.map(m => (
          <button key={m.id} onClick={() => setMode(m.id)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${mode === m.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {m.label}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Input (one item per line)</label>
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Enter lines to sort..."
            className="w-full h-56 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y text-gray-900 font-mono text-sm" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-gray-700">Sorted</label>
            {result && <button onClick={() => navigator.clipboard.writeText(result)} className="text-xs text-blue-600 font-medium">Copy</button>}
          </div>
          <textarea value={result} readOnly className="w-full h-56 p-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 resize-y font-mono text-sm" />
        </div>
      </div>
    </div>
  );
}
