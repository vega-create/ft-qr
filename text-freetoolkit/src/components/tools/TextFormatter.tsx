import { useState } from 'react';

export default function TextFormatter() {
  const [text, setText] = useState('');
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [addNumbers, setAddNumbers] = useState(false);
  const [wrapWidth, setWrapWidth] = useState(0);

  const process = () => {
    let lines = text.split('\n');
    if (addNumbers) lines = lines.map((l, i) => `${i + 1}. ${l}`);
    if (prefix) lines = lines.map(l => prefix + l);
    if (suffix) lines = lines.map(l => l + suffix);
    let result = lines.join('\n');
    if (wrapWidth > 0) {
      const wrapped: string[] = [];
      for (const line of result.split('\n')) {
        if (line.length <= wrapWidth) { wrapped.push(line); continue; }
        let remaining = line;
        while (remaining.length > wrapWidth) {
          let breakAt = remaining.lastIndexOf(' ', wrapWidth);
          if (breakAt <= 0) breakAt = wrapWidth;
          wrapped.push(remaining.substring(0, breakAt));
          remaining = remaining.substring(breakAt).trim();
        }
        if (remaining) wrapped.push(remaining);
      }
      result = wrapped.join('\n');
    }
    return result;
  };

  const result = text ? process() : '';

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-100 rounded-xl p-4 grid sm:grid-cols-4 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Prefix each line</label>
          <input type="text" value={prefix} onChange={e => setPrefix(e.target.value)} placeholder='e.g. "> "' className="text-sm" />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Suffix each line</label>
          <input type="text" value={suffix} onChange={e => setSuffix(e.target.value)} placeholder='e.g. ";"' className="text-sm" />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Wrap at width</label>
          <input type="number" value={wrapWidth || ''} onChange={e => setWrapWidth(parseInt(e.target.value) || 0)} placeholder="0 = off" className="text-sm" />
        </div>
        <div className="flex items-end">
          <label className="flex items-center gap-2 text-sm text-gray-600 pb-2">
            <input type="checkbox" checked={addNumbers} onChange={e => setAddNumbers(e.target.checked)} className="rounded" />
            Add line numbers
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Input</label>
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Enter text to format..."
            className="w-full h-48 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y text-gray-900 font-mono text-sm" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-gray-700">Formatted</label>
            {result && <button onClick={() => navigator.clipboard.writeText(result)} className="text-xs text-blue-600 font-medium">Copy</button>}
          </div>
          <textarea value={result} readOnly className="w-full h-48 p-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 resize-y font-mono text-sm" />
        </div>
      </div>
    </div>
  );
}
