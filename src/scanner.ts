import { AuditReport } from './types';

export async function runAudit(): Promise<AuditReport> {
  const report: AuditReport = {
    styles: {}
  };

  for (const page of figma.root.children) {
    const nodes = page.findAll();

    for (const node of nodes) {
      const styles = (node as any).styles;

      if (!styles) continue;

      for (const [kind, styleId] of Object.entries(styles)) {
        const style = figma.getStyleById(styleId as string);

        if (!style) continue;

        if (!report.styles[style.name]) {
          report.styles[style.name] = {
            fills: 0,
            strokes: 0,
            texts: 0,
            usages: []
          };
        }

        if (kind === 'fill') report.styles[style.name].fills++;
        if (kind === 'stroke') report.styles[style.name].strokes++;
        if (kind === 'text') report.styles[style.name].texts++;

        report.styles[style.name].usages.push({
          styleId: style.id,
          styleName: style.name,
          usage: kind as any,
          nodeName: node.name,
          pageName: page.name
        });
      }
    }
  }

  return report;
}
