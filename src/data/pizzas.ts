import { PizzaType } from "@/types/Pizza";



export const pizzas: PizzaType[] = [
  {
    id: 1,
    name: "Pizza de Atum",
    slug: "pizza-de-atum",
    price: {
      broto: 26,
      media: 31,
      grande: 37,
    },
    category: "Pizza",
    description:
      "Molho de tomate, mussarela, atum, tomate, orégano, cebola e azeitona",
    image: "/foods/atum.jpg",
  },
  {
    id: 2,
    name: "Pizza de Banana",
    slug: "pizza-de-banana",
    price: {
      broto: 28,
      media: 32,
      grande: 39,
    },
    category: "Pizza",
    image: "/foods/banana.jpg",
  },
];
