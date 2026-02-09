import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';

interface Props {
  data: string;
  fgColor?: string;
  bgColor?: string;
  size?: number;
}

export default function QrDisplay({ data, fgColor = '#111827', bgColor = '#ffffff', size = 300 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!data || !canvasRef.current) return;
    setError('');
    QRCode.toCanvas(canvasRef.current, data, {
      width: size, margin: 2,
      color: { dark: fgColor, light: bgColor },
      errorCorrectionLevel: 'M',
    }).catch(() => setError('Data too long for QR code'));
  }, [data, fgColor, bgColor, size]);

  const download = (format: 'png' | 'svg') => {
    if (!data) return;
    if (format === 'png') {
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = canvasRef.current?.toDataURL('image/png') || '';
      link.click();
    } else {
      QRCode.toString(data, { type: 'svg', color: { dark: fgColor, light: bgColor }, margin: 2 })
        .then(svg => {
          const blob = new Blob([svg], { type: 'image/svg+xml' });
          const link = document.createElement('a');
          link.download = 'qrcode.svg';
          link.href = URL.createObjectURL(blob);
          link.click();
        });
    }
  };

  if (!data) return <div className="w-[300px] h-[300px] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-sm mx-auto">Enter data to generate QR code</div>;

  return (
    <div className="flex flex-col items-center gap-4">
      {error ? (
        <div className="text-red-500 text-sm">{error}</div>
      ) : (
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <canvas ref={canvasRef} />
        </div>
      )}
      <div className="flex gap-2">
        <button onClick={() => download('png')} className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800">Download PNG</button>
        <button onClick={() => download('svg')} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">Download SVG</button>
      </div>
    </div>
  );
}
