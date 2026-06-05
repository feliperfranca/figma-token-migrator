export interface ReviewDecision {
  sourceStyle: string;
  suggestedToken: string;
  confidence: number;
  approved: boolean;
  overrideToken?: string;
}

export class ReviewQueue {
  private items: ReviewDecision[] = [];

  add(item: ReviewDecision) {
    this.items.push(item);
  }

  pending() {
    return this.items.filter(i => !i.approved);
  }

  approved() {
    return this.items.filter(i => i.approved);
  }
}
