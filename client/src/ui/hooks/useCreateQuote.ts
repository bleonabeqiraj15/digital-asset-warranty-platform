import { useMutation } from "@tanstack/react-query";

import { createQuote } from "../services/quote";

const useCreateQuote = () => {
  const createQuoteMutation = useMutation({
    mutationFn: createQuote,
  });

  return createQuoteMutation;
};

export default useCreateQuote;
