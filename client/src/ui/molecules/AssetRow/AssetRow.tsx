import { TableCell, TableRow } from "@/ui/atoms/Table";
import type { AssetRowProps } from "./types";

import useAssetById from "@/ui/hooks/useAssetById";
import { Button } from "@/ui/atoms/Button";
import useCreateQuote from "@/ui/hooks/useCreateQuote";
import { useQueryClient } from "@tanstack/react-query";
import formatDate from "@/ui/helpers/formatDate";

const AssetRow = ({ id }: AssetRowProps) => {
  const queryClient = useQueryClient();
  const { data: asset } = useAssetById({ id });

  const {
    name,
    category,
    purchaseDate,
    value,
    brand,
    model,
    serialNumber,
    quote,
  } = asset || {};
  const { providerName, quoteAmount, validUntil } = quote || {};

  const formattedValidUntil = formatDate(validUntil);

  const createQuote = useCreateQuote();

  const handleCreateQuote = () => {
    createQuote.mutate(
      { assetId: id },
      {
        onSuccess: async () => {
          queryClient.invalidateQueries({
            queryKey: ["asset-by-id", id],
          });
        },
      }
    );
  };

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{purchaseDate}</TableCell>
      <TableCell>{value}</TableCell>
      <TableCell>{brand}</TableCell>
      <TableCell>{model}</TableCell>
      <TableCell>{serialNumber}</TableCell>
      <TableCell>
        {!quote ? (
          <Button onClick={handleCreateQuote}>Request Quote</Button>
        ) : (
          <div>
            <p>{providerName}</p>
            <p>{quoteAmount}</p>
            <p>{formattedValidUntil}</p>
          </div>
        )}
      </TableCell>
    </TableRow>
  );
};

export default AssetRow;
