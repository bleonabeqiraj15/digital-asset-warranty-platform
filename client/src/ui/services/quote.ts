import { api } from ".";
import type {
  CreateQuoteRequest,
  CreateQuoteResponse,
  GetQuoteByAssetResponse,
} from "../models/quote";

export const getQuoteByAsset = async (assetId: string) => {
  const { data } = await api.get<GetQuoteByAssetResponse>(
    `/quotes/asset/${assetId}`
  );

  return data;
};

export const createQuote = async ({ assetId }: CreateQuoteRequest) => {
  const { data } = await api.post<CreateQuoteResponse>(
    `/quotes/asset/${assetId}`
  );

  return data;
};
