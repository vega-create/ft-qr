import { useState, useRef } from 'react';

export default function QrScanner() {
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const scan = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    setStatus('Scanning...');
    try {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width; canvas.height = img.height;
        const ctx = canvas.getContext('2d')!;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // Use BarcodeDetector API if available
        if ('BarcodeDetector' in window) {
          const detector = new (window as any).BarcodeDetector({ formats: ['qr_code'] });
          detector.detect(img).then((barcodes: any[]) => {
            if (barcodes.length > 0) { setResult(barcodes[0].rawValue); setStatus(''); }
            else { setStatus('No QR code found in image. Try a clearer image.'); }
          }).catch(() => setStatus('Scanner error. Your browser may not support this feature.'));
        } else {
          setStatus('QR scanning requires a browser with BarcodeDetector API (Chrome 83+, Edge 83+). Try uploading in Chrome.');
        }
        URL.revokeObjectURL(url);
      };
      img.src = url;
    } catch { setStatus('Error reading file'); }
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-blue-300 cursor-pointer" onClick={() => inputRef.current?.click()}>
        <input ref={inputRef} type="file" accept="image/*" onChange={scan} className="hidden" />
        <div className="text-4xl mb-2">🔍</div>
        <p className="text-gray-600 font-medium">Click to upload a QR code image</p>
        <p className="text-sm text-gray-400 mt-1">Supports JPG, PNG, WebP</p>
      </div>
      {status && <p className="text-sm text-center text-gray-600">{status}</p>}
      {result && (
        <div className="bg-gray-900 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2"><span className="text-xs text-gray-400">Decoded Content</span>
            <button onClick={() => navigator.clipboard.writeText(result)} className="text-xs text-blue-400 font-medium">Copy</button></div>
          <code className="text-green-400 font-mono text-sm break-all">{result}</code>
          {result.startsWith('http') && <a href={result} target="_blank" rel="noopener" className="block mt-2 text-xs text-blue-400 hover:underline">Open link →</a>}
        </div>
      )}
    </div>
  );
}
