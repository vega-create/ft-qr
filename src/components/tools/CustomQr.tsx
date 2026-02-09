import { useState } from 'react';
import QrOutput from './QrOutput';

export default function CustomQr() {
  const [data, setData] = useState('https://example.com');
  const [fg, setFg] = useState('#111827');
  const [bg, setBg] = useState('#ffffff');
  const [size, setSize] = useState(300);
  return (
    <div className="space-y-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
        <input type="text" value={data} onChange={e => setData(e.target.value)} placeholder="URL or text" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none" /></div>
      <div className="grid sm:grid-cols-3 gap-3">
        <div><label className="block text-xs text-gray-500 mb-1">Foreground</label>
          <div className="flex gap-2 items-center"><input type="color" value={fg} onChange={e => setFg(e.target.value)} className="w-10 h-10 rounded cursor-pointer" /><span className="text-sm text-gray-600 font-mono">{fg}</span></div></div>
        <div><label className="block text-xs text-gray-500 mb-1">Background</label>
          <div className="flex gap-2 items-center"><input type="color" value={bg} onChange={e => setBg(e.target.value)} className="w-10 h-10 rounded cursor-pointer" /><span className="text-sm text-gray-600 font-mono">{bg}</span></div></div>
        <div><label className="block text-xs text-gray-500 mb-1">Size: {size}px</label>
          <input type="range" min="100" max="600" value={size} onChange={e => setSize(+e.target.value)} className="w-full accent-blue-600" /></div>
      </div>
      <QrOutput data={data} fgColor={fg} bgColor={bg} size={size} />
    </div>
  );
}
