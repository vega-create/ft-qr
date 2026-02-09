import { useState } from 'react';

export default function WhitespaceCleaner() {
  const [text, setText] = useState('');
  const [opts, setOpts] = useState({ trimLines: true, extraSpaces: true, blankLines: true, trimEdges: true });

  const toggle = (key: keyof typeof opts) => setOpts(p => ({ ...p, [key]: !p[key] }));

  const process = () => {
    let result = text;
    if (opts.trimLines) result = result.split('\n').map(l => l.trim()).join('\n');
    if (opts.extraSpaces) result = result.replace(/[^\S\n]+/g, ' ');
    if (opts.blankLines) result = result.replace(/\n{3,}/g, '\n\n');
    if (opts.trimEdges) result = result.trim();
    return result;
  };

  const result = text ? process() : '';
  const saved = text.length - result.length;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {([['trimLines','Trim lines'],['extraSpaces','Remove extra spaces'],['blankLines','Remove blank lines'],['trimEdges','Trim edges']] as const).map(([key, label]) => (
          <label key={key} className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" checked={opts[key]} onChange={() => toggle(key)} className="rounded" />{label}
          </label>
        ))}
      </div>
      {saved > 0 && <p className="text-sm text-green-600 font-medium">Removed {saved} characters</p>}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Input</label>
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste messy text..."
            className="w-full h-48 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y text-gray-900 font-mono text-sm whitespace-pre" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-gray-700">Cleaned</label>
            {result && <button onClick={() => navigator.clipboard.writeText(result)} className="text-xs text-blue-600 font-medium">Copy</button>}
          </div>
          <textarea value={result} readOnly className="w-full h-48 p-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 resize-y font-mono text-sm whitespace-pre" />
        </div>
      </div>
    </div>
  );
}
