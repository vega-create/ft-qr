import { useState } from 'react';
import QrOutput from './QrOutput';

export default function UrlQr() {
  const [url, setUrl] = useState('');
  return (
    <div className="space-y-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
        <input type="url" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-lg" /></div>
      <QrOutput data={url} />
    </div>
  );
}
