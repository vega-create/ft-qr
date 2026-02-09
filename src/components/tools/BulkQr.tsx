import { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export default function BulkQr() {
  const [text, setText] = useState('');
  const [codes, setCodes] = useState<{data:string;url:string}[]>([]);

  const generate = async () => {
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    const results: {data:string;url:string}[] = [];
    for (const line of lines) {
      try {
        const url = await QRCode.toDataURL(line, { width: 200, margin: 2, color: { dark: '#111827' } });
        results.push({ data: line, url });
      } catch { results.push({ data: line, url: '' }); }
    }
    setCodes(results);
  };

  return (
    <div className="space-y-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Enter one item per line</label>
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="https://example.com&#10;Hello World&#10;+1 555 1234" className="w-full h-40 p-4 border border-gray-200 rounded-xl outline-none font-mono text-sm" /></div>
      <button onClick={generate} className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800">Generate {text.split('\n').filter(l=>l.trim()).length} QR Codes</button>
      {codes.length > 0 && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {codes.map((c, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              {c.url ? <img src={c.url} alt="QR" className="mx-auto w-40 h-40" /> : <p className="text-red-500 text-sm">Failed</p>}
              <p className="text-xs text-gray-500 mt-2 truncate">{c.data}</p>
              {c.url && <a href={c.url} download={`qr-${i+1}.png`} className="text-xs text-blue-600 font-medium">Download</a>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
