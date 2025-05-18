import { useQuery } from "@tanstack/react-query";

import { getAssetById } from "../services/asset";

interface UseAssetByIdProps {
  id: string;
  refetch?: boolean;
}

const useAssetById = ({ id, refetch = true }: UseAssetByIdProps) => {
  const isEnabled = !!id && !!refetch;

  const asset = useQuery({
    queryKey: ["asset-by-id", id],
    queryFn: async () => await getAssetById(id),
    enabled: isEnabled,
    retry: false,
  });

  return asset;
};

export default useAssetById;
