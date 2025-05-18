import { PrismaClient, Quote, Asset } from "@prisma/client";
import { calculateWarrantyQuote } from "../../utilities/calculateWarrantyQuote";

export class QuoteService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(assetId: string): Promise<Quote | null> {
    const asset = await this.prisma.asset.findUnique({
      where: { id: assetId },
    });

    if (!asset) {
      return null;
    }

    const warrantyQuote = calculateWarrantyQuote(asset);

    return this.prisma.quote.create({
      data: {
        assetId: warrantyQuote.assetId,
        quoteAmount: warrantyQuote.quoteAmount,
        providerName: warrantyQuote.providerName,
        validUntil: warrantyQuote.validUntil,
      },
    });
  }

  async findQuoteByAsset(assetId: string): Promise<Quote | null> {
    const quote = await this.prisma.quote.findUnique({
      where: { assetId },
    });

    return quote;
  }
}
