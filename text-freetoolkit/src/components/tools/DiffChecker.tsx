import { useState } from 'react';

export default function DiffChecker() {
  const [textA, setTextA] = useState('');
  const [textB, setTextB] = useState('');

  const linesA = textA.split('\n');
  const linesB = textB.split('\n');
  const maxLines = Math.max(linesA.length, linesB.length);

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Original Text</label>
          <textarea value={textA} onChange={e => setTextA(e.target.value)} placeholder="Paste first text..."
            className="w-full h-40 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y text-gray-900 font-mono text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Modified Text</label>
          <textarea value={textB} onChange={e => setTextB(e.target.value)} placeholder="Paste second text..."
            className="w-full h-40 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y text-gray-900 font-mono text-sm" />
        </div>
      </div>
      {(textA || textB) && (
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-100 px-4 py-2 text-xs font-medium text-gray-500">
            <span>Original</span><span>Modified</span>
          </div>
          <div className="divide-y divide-gray-50 max-h-96 overflow-y-auto font-mono text-sm">
            {Array.from({ length: maxLines }).map((_, i) => {
              const a = linesA[i] || '';
              const b = linesB[i] || '';
              const same = a === b;
              return (
                <div key={i} className={`grid grid-cols-2 ${same ? '' : 'bg-yellow-50'}`}>
                  <div className={`px-4 py-1 ${!same && a ? 'bg-red-50 text-red-800' : 'text-gray-700'} break-all`}>
                    <span className="text-gray-400 mr-2 text-xs">{i + 1}</span>{a}
                  </div>
                  <div className={`px-4 py-1 border-l border-gray-100 ${!same && b ? 'bg-green-50 text-green-800' : 'text-gray-700'} break-all`}>
                    <span className="text-gray-400 mr-2 text-xs">{i + 1}</span>{b}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
