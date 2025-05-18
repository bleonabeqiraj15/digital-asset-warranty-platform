import { useQuery } from "@tanstack/react-query";

import { getQuoteByAsset } from "../services/quote";

interface UseQuoteByAssetProps {
  assetId: string;
  refetch?: boolean;
}

const useQuoteByAsset = ({ assetId, refetch = true }: UseQuoteByAssetProps) => {
  const isEnabled = !!assetId && !!refetch;

  const quote = useQuery({
    queryKey: ["quote-by-asset", assetId],
    queryFn: async () => await getQuoteByAsset(assetId),
    enabled: isEnabled,
    retry: false,
  });

  return quote;
};

export default useQuoteByAsset;
