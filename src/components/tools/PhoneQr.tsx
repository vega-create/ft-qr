import { useState } from 'react';
import QrOutput from './QrOutput';

export default function PhoneQr() {
  const [phone, setPhone] = useState('');
  return (
    <div className="space-y-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 (555) 123-4567"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-lg" /></div>
      <QrOutput data={phone ? `tel:${phone.replace(/\s/g,'')}` : ''} />
    </div>
  );
}
