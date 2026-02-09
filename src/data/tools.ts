export interface Tool { name: string; slug: string; description: string; icon: string; category: string; }
export interface Category { id: string; name: string; icon: string; }

export const categories: Category[] = [
  { id: 'generate', name: 'QR Generators', icon: '📱' },
  { id: 'special', name: 'Special QR Codes', icon: '⭐' },
  { id: 'utility', name: 'Utilities', icon: '🧰' },
];

export const tools: Tool[] = [
  { name: 'URL QR Code', slug: 'url-qr', description: 'Generate a QR code for any website URL.', icon: '🔗', category: 'generate' },
  { name: 'Text QR Code', slug: 'text-qr', description: 'Encode plain text into a QR code.', icon: '📝', category: 'generate' },
  { name: 'Email QR Code', slug: 'email-qr', description: 'Create a QR code that opens a pre-filled email.', icon: '📧', category: 'generate' },
  { name: 'Phone QR Code', slug: 'phone-qr', description: 'Generate a QR code that dials a phone number.', icon: '📞', category: 'generate' },
  { name: 'SMS QR Code', slug: 'sms-qr', description: 'Create a QR code that opens SMS with a pre-filled message.', icon: '💬', category: 'generate' },
  { name: 'WiFi QR Code', slug: 'wifi-qr', description: 'Generate a QR code to share WiFi network credentials.', icon: '📶', category: 'special' },
  { name: 'vCard QR Code', slug: 'vcard-qr', description: 'Create a QR code containing contact information.', icon: '👤', category: 'special' },
  { name: 'Calendar Event QR', slug: 'event-qr', description: 'Generate a QR code for a calendar event.', icon: '📅', category: 'special' },
  { name: 'Location QR Code', slug: 'location-qr', description: 'Create a QR code that opens a map location.', icon: '📍', category: 'special' },
  { name: 'Bulk QR Generator', slug: 'bulk-qr', description: 'Generate multiple QR codes at once from a list.', icon: '📋', category: 'utility' },
  { name: 'QR Code Scanner', slug: 'qr-scanner', description: 'Scan and decode QR codes from images.', icon: '🔍', category: 'utility' },
  { name: 'Custom QR Style', slug: 'custom-qr', description: 'Generate QR codes with custom colors and styles.', icon: '🎨', category: 'utility' },
];

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter(t => t.category === categoryId);
}
