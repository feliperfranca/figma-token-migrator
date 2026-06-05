export interface RebindOperation {
  nodeId: string;
  tokenName: string;
}

export async function rebindStyles(
  operations: RebindOperation[]
) {
  for (const operation of operations) {
    const node = figma.getNodeById(operation.nodeId);

    if (!node) continue;

    console.log('Rebinding', operation.nodeId, operation.tokenName);
  }
}
