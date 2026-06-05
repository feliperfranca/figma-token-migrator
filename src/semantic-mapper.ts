export interface SemanticSuggestion {
  sourceStyle: string;
  textToken: string;
  backgroundToken: string;
  borderToken: string;
}

export function mapSemanticTokens(styleName: string): SemanticSuggestion {
  const name = styleName.toLowerCase();

  if (name.includes('error')) {
    return {
      sourceStyle: styleName,
      textToken: 'text-error',
      backgroundToken: 'background-error',
      borderToken: 'border-error'
    };
  }

  if (name.includes('success')) {
    return {
      sourceStyle: styleName,
      textToken: 'text-success',
      backgroundToken: 'background-success',
      borderToken: 'border-success'
    };
  }

  if (name.includes('warning')) {
    return {
      sourceStyle: styleName,
      textToken: 'text-warning',
      backgroundToken: 'background-warning',
      borderToken: 'border-warning'
    };
  }

  if (name.includes('brand')) {
    return {
      sourceStyle: styleName,
      textToken: 'text-brand',
      backgroundToken: 'background-brand',
      borderToken: 'border-brand'
    };
  }

  return {
    sourceStyle: styleName,
    textToken: 'text-primary',
    backgroundToken: 'background-default',
    borderToken: 'border-default'
  };
}
