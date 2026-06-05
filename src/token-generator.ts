export interface TokenDefinition {
  name: string;
  category: 'text' | 'background' | 'border';
  source: string;
}

export function createTokenDefinition(sourceStyle: string, targetToken: string): TokenDefinition {
  const category = targetToken.startsWith('text')
    ? 'text'
    : targetToken.startsWith('border')
      ? 'border'
      : 'background';

  return {
    name: targetToken,
    category,
    source: sourceStyle
  };
}
