export type AssetCategory = "ELECTRONICS" | "WATCHES" | "COLLECTIBLES";

export const getCategories = (): Record<AssetCategory, string> => {
  return {
    ELECTRONICS: "Electronics",
    WATCHES: "Watches",
    COLLECTIBLES: "Collectibles",
  };
};

export const getCategoryValues = (): AssetCategory[] => {
  return Object.keys(getCategories()) as AssetCategory[];
};

export default getCategories;
