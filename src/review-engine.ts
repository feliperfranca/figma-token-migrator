export interface ReviewItem {
  sourceStyle: string;
  suggestedToken: string;
  confidence: number;
  approved?: boolean;
}

export function needsReview(item: ReviewItem): boolean {
  return item.confidence < 0.9;
}

export function autoApprove(item: ReviewItem): ReviewItem {
  return {
    ...item,
    approved: item.confidence >= 0.9
  };
}
