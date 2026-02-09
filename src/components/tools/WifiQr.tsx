import { useState } from 'react';
import QrOutput from './QrOutput';

export default function WifiQr() {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [encryption, setEncryption] = useState('WPA');
  const [hidden, setHidden] = useState(false);
  const data = ssid ? `WIFI:T:${encryption};S:${ssid};P:${password};H:${hidden};;` : '';
  return (
    <div className="space-y-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Network Name (SSID)</label>
        <input type="text" value={ssid} onChange={e => setSsid(e.target.value)} placeholder="MyWiFi" className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="WiFi password" className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none" /></div>
      <div className="flex gap-2">
        {['WPA','WEP','nopass'].map(e => (
          <button key={e} onClick={() => setEncryption(e)} className={`px-4 py-2 rounded-lg text-sm font-medium ${encryption === e ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>{e === 'nopass' ? 'None' : e}</button>
        ))}
        <label className="flex items-center gap-2 text-sm text-gray-600 ml-2"><input type="checkbox" checked={hidden} onChange={e => setHidden(e.target.checked)} className="rounded" />Hidden</label>
      </div>
      <QrOutput data={data} />
    </div>
  );
}
