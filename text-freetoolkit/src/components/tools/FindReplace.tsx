import { useState } from 'react';

export default function FindReplace() {
  const [text, setText] = useState('');
  const [find, setFind] = useState('');
  const [replace, setReplace] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [useRegex, setUseRegex] = useState(false);

  const process = () => {
    if (!find) return text;
    try {
      if (useRegex) {
        const flags = caseSensitive ? 'g' : 'gi';
        return text.replace(new RegExp(find, flags), replace);
      }
      if (caseSensitive) return text.split(find).join(replace);
      const regex = new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      return text.replace(regex, replace);
    } catch { return text; }
  };

  const result = process();
  const matchCount = (() => {
    if (!find || !text) return 0;
    try {
      if (useRegex) {
        const flags = caseSensitive ? 'g' : 'gi';
        return (text.match(new RegExp(find, flags)) || []).length;
      }
      const regex = new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), caseSensitive ? 'g' : 'gi');
      return (text.match(regex) || []).length;
    } catch { return 0; }
  })();

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-3">
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Find {matchCount > 0 && <span className="text-blue-600">({matchCount} matches)</span>}</label>
            <input type="text" value={find} onChange={e => setFind(e.target.value)} placeholder="Search for..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Replace with</label>
            <input type="text" value={replace} onChange={e => setReplace(e.target.value)} placeholder="Replace with..." />
          </div>
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" checked={caseSensitive} onChange={e => setCaseSensitive(e.target.checked)} className="rounded" />
            Case sensitive
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" checked={useRegex} onChange={e => setUseRegex(e.target.checked)} className="rounded" />
            Regex
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Input</label>
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Enter your text..."
            className="w-full h-48 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y text-gray-900" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-gray-700">Result</label>
            {result && <button onClick={() => navigator.clipboard.writeText(result)} className="text-xs text-blue-600 font-medium">Copy</button>}
          </div>
          <textarea value={result} readOnly className="w-full h-48 p-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 resize-y" />
        </div>
      </div>
    </div>
  );
}
