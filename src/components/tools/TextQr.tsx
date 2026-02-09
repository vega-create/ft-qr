import { useState } from 'react';
import QrOutput from './QrOutput';

export default function TextQr() {
  const [text, setText] = useState('');
  return (
    <div className="space-y-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Text Content</label>
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Enter any text..."
          className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" /></div>
      <QrOutput data={text} />
    </div>
  );
}
