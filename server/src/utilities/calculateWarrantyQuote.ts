import { Asset } from "@prisma/client";

import { PROVIDERS } from "./constants";
import { CATEGORY_RATES } from "./constants";

export interface WarrantyQuote {
  assetId: string;
  quoteAmount: number;
  providerName: string;
  validUntil: Date;
}

export function calculateWarrantyQuote(asset: Asset): WarrantyQuote {
  const rate =
    CATEGORY_RATES[
      asset.category.toLowerCase() as keyof typeof CATEGORY_RATES
    ] || 0.03;

  const quoteAmount = Number(asset.value) * rate;

  const providerName = PROVIDERS[Math.floor(Math.random() * PROVIDERS.length)];

  const validUntil = new Date();
  validUntil.setDate(validUntil.getDate() + 30);

  return {
    assetId: asset.id,
    quoteAmount: Number(quoteAmount.toFixed(2)),
    providerName,
    validUntil,
  };
}
