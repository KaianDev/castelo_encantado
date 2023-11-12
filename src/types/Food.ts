export type FoodType = {
  id: number;
  name: string;
  slug: string;
  prices?: {
    broto: number;
    media: number;
    grande: number;
  };
  price?: number;
  category: string;
  description?: string;
  image: string;
};
