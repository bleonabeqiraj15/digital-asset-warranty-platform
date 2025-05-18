import { useState } from "react";

import { Button } from "../atoms/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../atoms/Dialog";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../atoms/Table";
import useAllAssets from "../hooks/useGetAllAssets";
import AssetRow from "../molecules/AssetRow";
import AddAssetDialog from "../dialogs/AddAssetDialog";

const Dashboard = () => {
  const { data: allAssets = [], isLoading } = useAllAssets();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSetDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Asset Dashboard</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add Asset</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Asset</DialogTitle>
            </DialogHeader>
            <AddAssetDialog handleSetDialog={handleSetDialog} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Purchase Date</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Serial Number</TableHead>
              <TableHead>Quote</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allAssets.map(({ id }) => (
              <AssetRow key={id} id={id} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
