import { useState } from 'react';

export default function CaseConverter() {
  const [text, setText] = useState('');

  const toTitle = (s: string) => s.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.substring(1).toLowerCase());
  const toSentence = (s: string) => s.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
  const toAlternating = (s: string) => s.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');
  const toInverse = (s: string) => s.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');

  const conversions = [
    { label: 'UPPERCASE', fn: (s: string) => s.toUpperCase() },
    { label: 'lowercase', fn: (s: string) => s.toLowerCase() },
    { label: 'Title Case', fn: toTitle },
    { label: 'Sentence case', fn: toSentence },
    { label: 'aLtErNaTiNg', fn: toAlternating },
    { label: 'InVeRsE', fn: toInverse },
  ];

  const copy = (t: string) => navigator.clipboard.writeText(t);

  return (
    <div className="space-y-4">
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type or paste text to convert..."
        className="w-full h-40 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y text-gray-900"
      />
      {text && (
        <div className="grid sm:grid-cols-2 gap-3">
          {conversions.map(c => {
            const result = c.fn(text);
            return (
              <div key={c.label} className="bg-white border border-gray-100 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-500">{c.label}</span>
                  <button onClick={() => copy(result)} className="text-xs text-blue-600 hover:text-blue-700 font-medium">Copy</button>
                </div>
                <button onClick={() => setText(result)} className="text-left w-full text-gray-900 text-sm break-all line-clamp-3 hover:bg-gray-50 p-1 rounded">
                  {result}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
