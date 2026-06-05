export interface ProfileRecord {
  colorStyle: string;
  componentName?: string;
  layerName?: string;
  textStyle?: string;
  usage: 'text' | 'fill' | 'stroke';
}

export interface ProfileSummary {
  colorStyle: string;
  occurrences: number;
  components: string[];
  textStyles: string[];
}

export function buildProfile(records: ProfileRecord[]): ProfileSummary[] {
  const map = new Map<string, ProfileSummary>();

  for (const record of records) {
    const key = record.colorStyle;

    if (!map.has(key)) {
      map.set(key, {
        colorStyle: key,
        occurrences: 0,
        components: [],
        textStyles: []
      });
    }

    const summary = map.get(key)!;

    summary.occurrences += 1;

    if (record.componentName && !summary.components.includes(record.componentName)) {
      summary.components.push(record.componentName);
    }

    if (record.textStyle && !summary.textStyles.includes(record.textStyle)) {
      summary.textStyles.push(record.textStyle);
    }
  }

  return [...map.values()];
}
