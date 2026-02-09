import { useState } from 'react';

export default function RandomString() {
  const [length, setLength] = useState(32);
  const [count, setCount] = useState(5);
  const [opts, setOpts] = useState({ upper: true, lower: true, digits: true, symbols: false });
  const [results, setResults] = useState<string[]>([]);

  const toggle = (key: keyof typeof opts) => setOpts(p => ({ ...p, [key]: !p[key] }));

  const generate = () => {
    let chars = '';
    if (opts.upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (opts.lower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (opts.digits) chars += '0123456789';
    if (opts.symbols) chars += '!@#$%^&*()-_=+[]{}|;:,.<>?';
    if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz';
    const strings: string[] = [];
    for (let i = 0; i < count; i++) {
      let s = '';
      for (let j = 0; j < length; j++) s += chars[Math.floor(Math.random() * chars.length)];
      strings.push(s);
    }
    setResults(strings);
  };

  if (results.length === 0) generate();

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-3">
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Length</label>
            <input type="number" value={length} onChange={e => setLength(Math.max(1, parseInt(e.target.value) || 1))} min="1" max="256" className="text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Count</label>
            <input type="number" value={count} onChange={e => setCount(Math.max(1, parseInt(e.target.value) || 1))} min="1" max="50" className="text-sm" />
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {([['upper','A-Z'],['lower','a-z'],['digits','0-9'],['symbols','!@#$']] as const).map(([key, label]) => (
            <label key={key} className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" checked={opts[key]} onChange={() => toggle(key)} className="rounded" />{label}
            </label>
          ))}
        </div>
        <button onClick={generate} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          Generate
        </button>
      </div>
      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((s, i) => (
            <div key={i} className="flex items-center gap-2 bg-gray-900 rounded-lg p-3">
              <code className="text-green-400 font-mono text-sm flex-1 break-all">{s}</code>
              <button onClick={() => navigator.clipboard.writeText(s)} className="text-xs text-blue-400 hover:text-blue-300 flex-shrink-0">Copy</button>
            </div>
          ))}
          <button onClick={() => navigator.clipboard.writeText(results.join('\n'))} className="text-sm text-blue-600 font-medium">Copy all</button>
        </div>
      )}
    </div>
  );
}
