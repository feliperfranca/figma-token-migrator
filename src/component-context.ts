export interface ComponentContext {
  componentName?: string;
  layerName?: string;
  textStyleName?: string;
}

export function classifyContext(ctx: ComponentContext): string[] {
  const signals: string[] = [];

  const layer = (ctx.layerName || '').toLowerCase();
  const component = (ctx.componentName || '').toLowerCase();
  const textStyle = (ctx.textStyleName || '').toLowerCase();

  if (layer.includes('label')) signals.push('label');
  if (layer.includes('title')) signals.push('title');
  if (layer.includes('link')) signals.push('link');

  if (component.includes('button')) signals.push('button');
  if (component.includes('input')) signals.push('input');
  if (component.includes('alert')) signals.push('alert');

  if (textStyle.includes('actions')) signals.push('action-text');

  return signals;
}
