import { useState } from 'react';

export default function WordCounter() {
  const [text, setText] = useState('');

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;
  const sentences = text.trim() ? (text.match(/[.!?]+/g) || []).length || (text.trim() ? 1 : 0) : 0;
  const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim()).length : 0;
  const readTime = Math.max(1, Math.ceil(words / 200));

  const stats = [
    { label: 'Words', value: words, color: 'bg-blue-50 text-blue-700' },
    { label: 'Characters', value: chars, color: 'bg-green-50 text-green-700' },
    { label: 'No Spaces', value: charsNoSpaces, color: 'bg-purple-50 text-purple-700' },
    { label: 'Sentences', value: sentences, color: 'bg-orange-50 text-orange-700' },
    { label: 'Paragraphs', value: paragraphs, color: 'bg-pink-50 text-pink-700' },
    { label: 'Read Time', value: `${readTime} min`, color: 'bg-cyan-50 text-cyan-700' },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {stats.map(s => (
          <div key={s.label} className={`${s.color} rounded-xl p-3 text-center`}>
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-xs font-medium mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Paste or type your text here..."
        className="w-full h-64 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y text-gray-900"
      />
      {text && (
        <button onClick={() => setText('')} className="text-sm text-gray-500 hover:text-red-500">
          Clear text
        </button>
      )}
    </div>
  );
}
