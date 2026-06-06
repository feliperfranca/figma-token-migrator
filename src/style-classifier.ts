export type StyleCategory = 'primitive' | 'semantic' | 'unknown';

export function classifyStyle(styleName: string): StyleCategory {
  const name = styleName.toLowerCase();

  if (name.includes('extended palette') || name.includes('extended-palette')) {
    return 'primitive';
  }

  if (
    name.includes('brand') ||
    name.includes('semantic') ||
    name.includes('accessibility')
  ) {
    return 'semantic';
  }

  return 'unknown';
}
