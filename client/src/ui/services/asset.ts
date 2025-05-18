import { api } from ".";
import type {
  CreateAssetRequest,
  CreateAssetResponse,
  GetAllAssetsResponse,
  GetAssetByIdResponse,
} from "../models/asset";

export const getAllAssets = async () => {
  const { data } = await api.get<GetAllAssetsResponse>("/assets/get-all");

  return data;
};

export const getAssetById = async (id: string) => {
  const { data } = await api.get<GetAssetByIdResponse>(`/assets/${id}`);

  return data;
};

export const createAsset = async ({
  purchaseDate,
  value,
  brand,
  category,
  description,
  model,
  name,
  serialNumber,
}: CreateAssetRequest) => {
  const { data } = await api.post<CreateAssetResponse>("/assets", {
    brand,
    category,
    description,
    model,
    name,
    serialNumber,
    purchaseDate,
    value,
  });

  return data;
};
