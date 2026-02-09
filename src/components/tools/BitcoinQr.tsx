import { useState } from 'react';
import QrDisplay from './QrDisplay';
export default function BitcoinQr() {
  const [addr, setAddr] = useState('');
  const [amount, setAmount] = useState('');
  const [label, setLabel] = useState('');
  const data = addr ? `bitcoin:${addr}${amount || label ? '?' : ''}${amount ? `amount=${amount}` : ''}${amount && label ? '&' : ''}${label ? `label=${encodeURIComponent(label)}` : ''}` : '';
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-3">
        <div><label className="block text-xs font-medium text-gray-500 mb-1">Bitcoin Address</label><input type="text" value={addr} onChange={e => setAddr(e.target.value)} placeholder="bc1q..." className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono outline-none focus:ring-2 focus:ring-blue-500" /></div>
        <div><label className="block text-xs font-medium text-gray-500 mb-1">Amount (BTC, optional)</label><input type="number" step="any" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0.001" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none" /></div>
        <div><label className="block text-xs font-medium text-gray-500 mb-1">Label (optional)</label><input type="text" value={label} onChange={e => setLabel(e.target.value)} placeholder="Payment for..." className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none" /></div>
      </div>
      <QrDisplay data={data} />
    </div>
  );
}
