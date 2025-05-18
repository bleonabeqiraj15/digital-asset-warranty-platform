import { PrismaClient, Asset } from "@prisma/client";
import { CreateAssetDto } from "./dto/asset.dto";

export class AssetService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<Pick<Asset, "id">[]> {
    return this.prisma.asset.findMany({ select: { id: true } });
  }

  async findOne(id: string): Promise<Asset | null> {
    return this.prisma.asset.findUnique({
      where: { id },
      include: {
        quote: true,
      },
    });
  }

  async create(data: CreateAssetDto): Promise<Asset> {
    const asset = await this.prisma.asset.create({
      data,
    });

    return asset;
  }
}
