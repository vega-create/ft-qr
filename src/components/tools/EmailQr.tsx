import { useState } from 'react';
import QrOutput from './QrOutput';

export default function EmailQr() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const data = email ? `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` : '';
  return (
    <div className="space-y-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@example.com" className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Subject (optional)</label>
        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Email subject" className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Body (optional)</label>
        <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Email body..." className="w-full h-20 p-3 border border-gray-200 rounded-xl outline-none" /></div>
      <QrOutput data={data} />
    </div>
  );
}
