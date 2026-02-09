import { useState } from 'react';

export default function TextReverser() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState<'chars'|'words'|'lines'>('chars');

  const reverse = () => {
    if (mode === 'chars') return text.split('').reverse().join('');
    if (mode === 'words') return text.split(/(\s+)/).reverse().join('');
    return text.split('\n').reverse().join('\n');
  };

  const result = text ? reverse() : '';
  const copy = () => navigator.clipboard.writeText(result);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(['chars', 'words', 'lines'] as const).map(m => (
          <button key={m} onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === m ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {m === 'chars' ? 'Characters' : m === 'words' ? 'Words' : 'Lines'}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Original</label>
          <textarea value={text} onChange={e => setText(e.target.value)}
            placeholder="Enter text to reverse..."
            className="w-full h-48 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y text-gray-900" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-gray-700">Reversed</label>
            {result && <button onClick={copy} className="text-xs text-blue-600 hover:text-blue-700 font-medium">Copy</button>}
          </div>
          <textarea value={result} readOnly
            className="w-full h-48 p-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 resize-y" />
        </div>
      </div>
    </div>
  );
}
