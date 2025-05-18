export type Asset = {
  id: string;
  name: string;
  description: string;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  category: string;
  purchaseDate: string;
  value: number;
  brand: string;
  model: string;
  serialNumber: string;
  userId: string;
};

export type Quote = {
  id: string;
  assetId: string;
  quoteAmount: number;
  providerName: string;
  validUntil: string;
};
