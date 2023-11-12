export type FoodType = {
  id: number;
  name: string;
  slug: string;
  price: {
    broto: number;
    media: number;
    grande: number;
  };
  category: string;
  description?: string;
  image: string;
};
