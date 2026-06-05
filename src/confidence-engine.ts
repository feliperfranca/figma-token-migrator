export interface ConfidenceInput {
  hasTextStyle?: boolean;
  hasComponentContext?: boolean;
  hasLayerName?: boolean;
  usage: 'text' | 'fill' | 'stroke';
}

export function calculateConfidence(input: ConfidenceInput): number {
  let score = 0.5;

  if (input.hasTextStyle) score += 0.2;
  if (input.hasComponentContext) score += 0.15;
  if (input.hasLayerName) score += 0.15;

  return Math.min(score, 1);
}
