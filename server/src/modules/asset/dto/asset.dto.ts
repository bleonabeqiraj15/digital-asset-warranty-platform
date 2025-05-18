import { AssetCategory } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export interface CreateAssetDto {
  name: string;
  category: AssetCategory;
  purchaseDate: Date;
  value: Decimal;
  brand: string;
  model: string;
  serialNumber?: string;
  description?: string;
}
