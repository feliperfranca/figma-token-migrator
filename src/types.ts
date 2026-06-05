export type UsageKind = 'text' | 'fill' | 'stroke';

export interface StyleUsage {
  styleId: string;
  styleName: string;
  usage: UsageKind;
  nodeName: string;
  pageName: string;
}

export interface AuditReport {
  styles: Record<string, {
    fills: number;
    strokes: number;
    texts: number;
    usages: StyleUsage[];
  }>;
}
