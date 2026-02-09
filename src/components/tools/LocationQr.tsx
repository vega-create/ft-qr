import { useState } from 'react';
import QrOutput from './QrOutput';

export default function LocationQr() {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [label, setLabel] = useState('');
  const data = lat && lng ? `geo:${lat},${lng}${label ? '?q='+encodeURIComponent(label) : ''}` : '';
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label><input type="text" value={lat} onChange={e => setLat(e.target.value)} placeholder="40.7128" className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label><input type="text" value={lng} onChange={e => setLng(e.target.value)} placeholder="-74.0060" className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none" /></div>
      </div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Label (optional)</label><input type="text" value={label} onChange={e => setLabel(e.target.value)} placeholder="Central Park" className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none" /></div>
      <QrOutput data={data} />
    </div>
  );
}
