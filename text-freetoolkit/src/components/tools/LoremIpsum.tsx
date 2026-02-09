import { useState } from 'react';

const LOREM = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
  'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.',
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
  'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.',
  'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.',
  'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis.',
  'Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.',
  'Viverra justo nec ultrices dui sapien eget mi proin sed libero.',
];

export default function LoremIpsum() {
  const [count, setCount] = useState(3);
  const [unit, setUnit] = useState<'paragraphs'|'sentences'|'words'>('paragraphs');

  const generate = () => {
    if (unit === 'sentences') {
      return Array.from({length: count}, (_, i) => LOREM[i % LOREM.length]).join(' ');
    }
    if (unit === 'words') {
      const allWords = LOREM.join(' ').split(' ');
      return Array.from({length: count}, (_, i) => allWords[i % allWords.length]).join(' ');
    }
    return Array.from({length: count}, (_, i) => {
      const start = (i * 4) % LOREM.length;
      return LOREM.slice(start, start + 4).concat(LOREM.slice(0, Math.max(0, start + 4 - LOREM.length))).join(' ');
    }).join('\n\n');
  };

  const result = generate();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-gray-600">Generate</span>
        <input type="number" value={count} onChange={e => setCount(Math.max(1, parseInt(e.target.value) || 1))} min="1" max="100"
          className="w-20 px-3 py-2 border border-gray-200 rounded-lg text-center" />
        {(['paragraphs','sentences','words'] as const).map(u => (
          <button key={u} onClick={() => setUnit(u)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${unit === u ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {u}
          </button>
        ))}
      </div>
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-sm font-medium text-gray-700">Generated Text</label>
          <button onClick={() => navigator.clipboard.writeText(result)} className="text-xs text-blue-600 font-medium">Copy</button>
        </div>
        <textarea value={result} readOnly className="w-full h-64 p-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 resize-y text-sm" />
      </div>
    </div>
  );
}
