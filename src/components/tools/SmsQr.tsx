import { useState } from 'react';
import QrOutput from './QrOutput';

export default function SmsQr() {
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  return (
    <div className="space-y-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 555 123 4567" className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
        <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="Pre-filled message..." className="w-full h-20 p-3 border border-gray-200 rounded-xl outline-none" /></div>
      <QrOutput data={phone ? `smsto:${phone.replace(/\s/g,'')}:${msg}` : ''} />
    </div>
  );
}
