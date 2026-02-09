export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'analyze', name: 'Text Analysis', icon: '📊' },
  { id: 'transform', name: 'Text Transform', icon: '🔄' },
  { id: 'encode', name: 'Encoding & Decoding', icon: '🔐' },
  { id: 'format', name: 'Formatting', icon: '✨' },
  { id: 'generate', name: 'Generators', icon: '🎲' },
];

export const tools: Tool[] = [
  // Analyze
  { name: 'Word Counter', slug: 'word-counter', description: 'Count words, characters, sentences, paragraphs, and estimate reading time.', icon: '🔢', category: 'analyze' },
  { name: 'Text Diff Checker', slug: 'diff-checker', description: 'Compare two texts side by side and highlight the differences.', icon: '🔍', category: 'analyze' },
  // Transform
  { name: 'Case Converter', slug: 'case-converter', description: 'Convert text to UPPERCASE, lowercase, Title Case, or Sentence case.', icon: '🔠', category: 'transform' },
  { name: 'Text Reverser', slug: 'text-reverser', description: 'Reverse text character by character or word by word.', icon: '↩️', category: 'transform' },
  { name: 'Line Sorter', slug: 'line-sorter', description: 'Sort lines alphabetically, numerically, by length, or reverse order.', icon: '📋', category: 'transform' },
  { name: 'Remove Duplicates', slug: 'remove-duplicates', description: 'Remove duplicate lines from your text instantly.', icon: '🗑️', category: 'transform' },
  { name: 'Find & Replace', slug: 'find-replace', description: 'Find and replace text with support for case-sensitive and regex matching.', icon: '🔎', category: 'transform' },
  // Encode
  { name: 'URL Encoder / Decoder', slug: 'url-encode', description: 'Encode or decode URLs and query parameters.', icon: '🔗', category: 'encode' },
  { name: 'HTML Encoder / Decoder', slug: 'html-encode', description: 'Encode special characters to HTML entities or decode them back.', icon: '🌐', category: 'encode' },
  { name: 'Base64 Encoder / Decoder', slug: 'base64', description: 'Encode text to Base64 or decode Base64 strings.', icon: '📦', category: 'encode' },
  // Format
  { name: 'Whitespace Cleaner', slug: 'whitespace-cleaner', description: 'Remove extra spaces, tabs, blank lines, and trim whitespace.', icon: '🧹', category: 'format' },
  { name: 'Slug Generator', slug: 'slug-generator', description: 'Generate URL-friendly slugs from any text.', icon: '🏷️', category: 'format' },
  { name: 'Text Formatter', slug: 'text-formatter', description: 'Add line numbers, prefixes, suffixes, or wrap text.', icon: '📝', category: 'format' },
  // Generate
  { name: 'Lorem Ipsum Generator', slug: 'lorem-ipsum', description: 'Generate placeholder text in various lengths and formats.', icon: '📄', category: 'generate' },
  { name: 'Random String Generator', slug: 'random-string', description: 'Generate random strings with custom length and character sets.', icon: '🎰', category: 'generate' },
];

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter(t => t.category === categoryId);
}
