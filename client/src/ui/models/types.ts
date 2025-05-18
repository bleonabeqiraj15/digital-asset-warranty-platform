export interface Asset {
  id: string;
  name: string;
  category: "electronics" | "watches" | "collectibles";
  purchaseDate: string;
  value: number;
  brand: string;
  model: string;
  serialNumber?: string;
  description?: string;
}

export interface Quote {
  id: string;
  assetId: string;
  quoteAmount: number;
  providerName: string;
  validUntil: string;
  status: "pending" | "accepted" | "expired";
  createdAt: string;
}
