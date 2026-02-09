import { useState } from 'react';
import QrOutput from './QrOutput';

export default function VcardQr() {
  const [f, setF] = useState({ fn:'', ln:'', org:'', title:'', phone:'', email:'', url:'', addr:'' });
  const set = (k: string, v: string) => setF(p => ({...p, [k]: v}));
  const data = f.fn || f.ln ? `BEGIN:VCARD\nVERSION:3.0\nN:${f.ln};${f.fn}\nFN:${f.fn} ${f.ln}\n${f.org?'ORG:'+f.org+'\n':''}${f.title?'TITLE:'+f.title+'\n':''}${f.phone?'TEL:'+f.phone+'\n':''}${f.email?'EMAIL:'+f.email+'\n':''}${f.url?'URL:'+f.url+'\n':''}${f.addr?'ADR:;;'+f.addr+'\n':''}END:VCARD` : '';
  const fields = [['fn','First Name','John'],['ln','Last Name','Doe'],['org','Company','Acme Inc'],['title','Job Title','Engineer'],['phone','Phone','+1 555 1234'],['email','Email','john@example.com'],['url','Website','https://example.com'],['addr','Address','123 Main St, City']];
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-3">
        {fields.map(([k,l,p]) => (
          <div key={k}><label className="block text-xs font-medium text-gray-500 mb-1">{l}</label>
            <input type="text" value={(f as any)[k]} onChange={e => set(k,e.target.value)} placeholder={p} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none" /></div>
        ))}
      </div>
      <QrOutput data={data} />
    </div>
  );
}
