import { useState } from 'react';
import QrOutput from './QrOutput';

export default function EventQr() {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [location, setLocation] = useState('');
  const [desc, setDesc] = useState('');
  const fmt = (d: string) => d ? d.replace(/[-:]/g,'').replace('T','T') + '00' : '';
  const data = title && start ? `BEGIN:VEVENT\nSUMMARY:${title}\nDTSTART:${fmt(start)}\n${end?'DTEND:'+fmt(end)+'\n':''}${location?'LOCATION:'+location+'\n':''}${desc?'DESCRIPTION:'+desc+'\n':''}END:VEVENT` : '';
  return (
    <div className="space-y-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Team Meeting" className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none" /></div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div><label className="block text-xs text-gray-500 mb-1">Start</label><input type="datetime-local" value={start} onChange={e => setStart(e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" /></div>
        <div><label className="block text-xs text-gray-500 mb-1">End</label><input type="datetime-local" value={end} onChange={e => setEnd(e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" /></div>
      </div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Location</label><input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="123 Main St" className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Description</label><textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Event details..." className="w-full h-20 p-3 border border-gray-200 rounded-xl outline-none" /></div>
      <QrOutput data={data} />
    </div>
  );
}
