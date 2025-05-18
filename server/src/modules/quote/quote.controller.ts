import { Router, Request, Response } from "express";
import { QuoteService } from "./quote.service";

const router = Router();
const quoteService = new QuoteService();

// Get quote for an asset
router.get("/asset/:assetId", async (req: Request, res: Response) => {
  try {
    const quote = await quoteService.findQuoteByAsset(req.params.assetId);
    res.json(quote);
  } catch (error) {
    console.error("Error fetching quote:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Create quote for an asset
router.post("/asset/:assetId", async (req: Request, res: Response) => {
  try {
    const quote = await quoteService.create(req.params.assetId);
    res.json(quote);
  } catch (error) {
    console.error("Error creating quote:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
