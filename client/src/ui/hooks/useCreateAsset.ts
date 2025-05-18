import { useMutation } from "@tanstack/react-query";

import { createAsset } from "../services/asset";

const useCreateAsset = () => {
  const createAssetMutation = useMutation({
    mutationFn: createAsset,
  });

  return createAssetMutation;
};

export default useCreateAsset;
