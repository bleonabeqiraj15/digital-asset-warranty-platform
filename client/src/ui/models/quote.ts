import type { Quote } from "./prisma-types";

export type GetQuoteByAssetResponse = Quote;

export interface CreateQuoteRequest {
  assetId: string;
}

export type CreateQuoteResponse = Quote;
