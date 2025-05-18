import { useQuery } from "@tanstack/react-query";

import { getAllAssets } from "../services/asset";

interface UseAllAssetsProps {
  refetch?: boolean;
}

const useAllAssets = ({ refetch = true }: UseAllAssetsProps = {}) => {
  const isEnabled = !!refetch;

  const assets = useQuery({
    queryKey: ["all-assets"],
    queryFn: async () => await getAllAssets(),
    enabled: isEnabled,
    retry: false,
  });

  return assets;
};

export default useAllAssets;
