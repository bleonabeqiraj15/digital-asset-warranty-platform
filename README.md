## Setup

### Prerequisites

- Node.js 18+
- PostgreSQL
- pnpm

### Backend Setup

```bash
cd server
pnpm install
cp .env.example .env  # Update with your PostgreSQL credentials
pnpm prisma migrate dev
pnpm dev
```

# PORT=

# NODE_ENV=

# DATABASE_URL=

### Frontend Setup

```bash
cd client
pnpm install
cp .env.example .env  # VITE_API_URL="http://localhost:${port}/api"
pnpm dev
```

## API Endpoints

### Assets

- `GET /api/assets` - List all assets
- `GET /api/assets/:id` - Get asset details
- `POST /api/assets` - Create new asset
  ```typescript
  {
    name: string
    category: "ELECTRONICS" | "WATCHES" | "COLLECTIBLES"
    purchaseDate: string
    value: number
    brand: string
    model: string
    serialNumber?: string
    description?: string
  }
  ```

### Warranty Quotes

- `GET /api/quotes/:assetId` - Get quote for an asset
  ```typescript
  // Response
  {
    assetId: string;
    quoteAmount: number;
    providerName: string;
    validUntil: string;
  }
  ```

## Warranty Quote Calculation

Quotes are calculated based on asset category:

- Electronics: 2% of asset value
- Watches: 3% of asset value
- Collectibles: 4% of asset value

Quotes are valid for 30 days from the request date.
