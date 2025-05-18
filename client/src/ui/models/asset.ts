import type { Asset, Quote } from "./prisma-types";

export type GetAllAssetsResponse = Pick<Asset, "id">[];

export type GetAssetByIdResponse = Asset & {
  quote: Quote;
};

export type CreateAssetRequest = Pick<
  Asset,
  | "name"
  | "category"
  | "brand"
  | "model"
  | "description"
  | "serialNumber"
  | "purchaseDate"
  | "value"
>;

export type CreateAssetResponse = Asset;
