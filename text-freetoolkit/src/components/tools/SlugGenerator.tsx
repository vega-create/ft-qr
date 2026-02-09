import { useState } from 'react';

export default function SlugGenerator() {
  const [text, setText] = useState('');
  const [sep, setSep] = useState('-');

  const toSlug = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9\s-]/g,'').replace(/[\s_]+/g, sep).replace(new RegExp(`[${sep}]+`,'g'), sep).replace(new RegExp(`^${sep}|${sep}$`,'g'),'');
  const slug = text ? toSlug(text) : '';

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title or Text</label>
        <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter a title to slugify..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 text-lg" />
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-sm text-gray-600">Separator:</span>
        {['-', '_', '.'].map(s => (
          <button key={s} onClick={() => setSep(s)}
            className={`px-3 py-1 rounded-lg text-sm font-mono font-medium transition-colors ${sep === s ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>{s}</button>
        ))}
      </div>
      {slug && (
        <div className="bg-gray-900 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-400 font-medium">URL Slug</span>
            <button onClick={() => navigator.clipboard.writeText(slug)} className="text-xs text-blue-400 font-medium">Copy</button>
          </div>
          <code className="text-green-400 text-lg font-mono break-all">{slug}</code>
        </div>
      )}
    </div>
  );
}
