import { useState } from 'react';

export default function UrlEncode() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState<'encode'|'decode'>('encode');

  const result = (() => {
    try {
      return mode === 'encode' ? encodeURIComponent(text) : decodeURIComponent(text);
    } catch { return 'Invalid input'; }
  })();

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button onClick={() => setMode('encode')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'encode' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>Encode</button>
        <button onClick={() => setMode('decode')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'decode' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>Decode</button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{mode === 'encode' ? 'Plain Text' : 'Encoded URL'}</label>
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter URL to decode...'}
            className="w-full h-48 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y text-gray-900 font-mono text-sm" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-gray-700">{mode === 'encode' ? 'Encoded' : 'Decoded'}</label>
            {result && <button onClick={() => navigator.clipboard.writeText(result)} className="text-xs text-blue-600 font-medium">Copy</button>}
          </div>
          <textarea value={result} readOnly className="w-full h-48 p-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 resize-y font-mono text-sm" />
        </div>
      </div>
    </div>
  );
}
