import type { Asset } from "@/ui/models/types";

export interface AddAssetDialogProps {
  handleSetDialog: () => void;
}

export interface FormValues {
  name: string;
  category: Asset["category"];
  purchaseDate: string;
  value: string;
  brand: string;
  model: string;
  serialNumber: string;
  description: string;
}
