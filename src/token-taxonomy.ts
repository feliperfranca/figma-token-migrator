export interface TokenTaxonomy {
  primitive: string[];
  semantic: string[];
  usage: string[];
}

export const DEFAULT_TAXONOMY: TokenTaxonomy = {
  primitive: [
    'extended-palette/*',
    'neutral/*'
  ],
  semantic: [
    'brand/*',
    'semantic/error/*',
    'semantic/success/*',
    'semantic/warning/*'
  ],
  usage: [
    'text/*',
    'background/*',
    'border/*',
    'icon/*',
    'surface/*',
    'focus/*'
  ]
};
