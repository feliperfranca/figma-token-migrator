export interface VariableSpec {
  name: string;
  sourceStyle: string;
}

export async function createColorVariable(spec: VariableSpec) {
  const collections = figma.variables.getLocalVariableCollections();

  if (!collections.length) {
    throw new Error('No variable collection found');
  }

  const collection = collections[0];

  return figma.variables.createVariable(
    spec.name,
    collection,
    'COLOR'
  );
}
