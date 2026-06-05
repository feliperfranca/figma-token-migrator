import { AuditReport } from './types';

export function generateAuditSummary(report: AuditReport): string {
  const lines: string[] = [];

  for (const [style, data] of Object.entries(report.styles)) {
    lines.push(`${style} | text:${data.texts} fill:${data.fills} stroke:${data.strokes}`);
  }

  return lines.join('\n');
}
