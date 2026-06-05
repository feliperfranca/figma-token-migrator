export interface InferenceResult {
  sourceStyle: string;
  usage: 'text' | 'fill' | 'stroke';
  suggestedToken: string;
  confidence: number;
}

export function inferToken(styleName: string, usage: 'text' | 'fill' | 'stroke'): InferenceResult {
  const normalized = styleName.toLowerCase();

  let base = 'generic';

  if (normalized.includes('brand') && normalized.includes('primary')) base = 'brand';
  else if (normalized.includes('error')) base = 'error';
  else if (normalized.includes('success')) base = 'success';
  else if (normalized.includes('warning')) base = 'warning';
  else if (normalized.includes('neutral')) base = 'primary';

  const prefix = usage === 'text'
    ? 'text'
    : usage === 'stroke'
      ? 'border'
      : 'background';

  return {
    sourceStyle: styleName,
    usage,
    suggestedToken: `${prefix}-${base}`,
    confidence: 0.8
  };
}
