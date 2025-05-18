import { Router, Request, Response } from "express";
import { AssetService } from "./asset.service";
import { validateAssetCreate } from "./dto/asset.validation";

const router = Router();
const assetService = new AssetService();

// Get all assets
router.get("/get-all", async (_req: Request, res: Response) => {
  try {
    const assets = await assetService.findAll();
    res.json(assets);
  } catch (error) {
    console.error("Error fetching assets:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get single asset
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const asset = await assetService.findOne(req.params.id);
    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }
    res.json(asset);
  } catch (error) {
    console.error("Error fetching asset:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Create asset
router.post("/", validateAssetCreate, async (req: Request, res: Response) => {
  try {
    const result = await assetService.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating asset:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
