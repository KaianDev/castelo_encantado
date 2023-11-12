"use client";
import { useFood } from "@/context/FoodContext";
import Image from "next/image";
import { useState } from "react";
import PizzaButton from "./components/PizzaButton";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type ProductPageProps = {
  params: {
    slug: string;
  };
};
export type pizzaSizeType = "broto" | "media" | "grande";

const ProductPage = ({ params }: ProductPageProps) => {
  const foodCtx = useFood();
  const product = foodCtx?.data.filter((item) => item.slug === params.slug);
  const [pizzaSize, setPizzaSize] = useState<pizzaSizeType>("grande");
  const [quantity, setQuantity] = useState(1);

  const pizzaPrice = (length: pizzaSizeType) => {
    if (product && product[0].prices) {
      let price: number = 0;
      switch (length) {
        case "broto":
          price = product[0].prices.broto;
          return price;
        case "media":
          price = product[0].prices.media;
          return price;
        case "grande":
          price = product[0].prices.grande;
          return price;
      }
    }
  };

  return (
    <div className="container h-full py-4">
      {product && (
        <div className="flex h-full flex-col gap-4">
          <Image
            src={product[0].image}
            alt={product[0].name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full rounded-lg object-cover"
          />
          <p className="w-max rounded-full bg-red-castle px-2 font-semibold text-white ">
            {product[0].category}
          </p>
          <div className="flex justify-between">
            <h1 className="text-xl font-bold leading-none">
              {product[0].name}
            </h1>
            {product[0].prices && (
              <p className="font-bold">
                <>
                  <span className="text-xs">R$</span>
                  {pizzaPrice(pizzaSize)}
                  <span className="text-xs">,00</span>
                </>
              </p>
            )}
          </div>
          {product[0].prices && (
            <div className="flex gap-2">
              <PizzaButton
                onClick={() => setPizzaSize("broto")}
                label="Pequena"
                pizzaSize={pizzaSize}
                size="broto"
              />
              <PizzaButton
                onClick={() => setPizzaSize("media")}
                label="Média"
                pizzaSize={pizzaSize}
                size="media"
              />
              <PizzaButton
                onClick={() => setPizzaSize("grande")}
                label="Grande"
                pizzaSize={pizzaSize}
                size="grande"
              />
            </div>
          )}

          {product[0].description && (
            <div>
              <h2 className="text-lg font-bold">Descrição</h2>
              <p className="text-sm opacity-75">{product[0].description}</p>
            </div>
          )}
          <div className="mt-auto flex gap-2">
            <div className="flex items-center overflow-hidden rounded-lg border border-black">
              <button
                className="pl-3"
                onClick={() =>
                  setQuantity((prev) => (prev == 1 ? prev : prev - 1))
                }
              >
                <MinusIcon />
              </button>
              <span className="flex w-10 items-center justify-center px-4 text-xl font-bold ">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="pr-3"
              >
                <PlusIcon />
              </button>
            </div>
            <Button className="flex-1 bg-red-castle text-xl uppercase hover:bg-red-castle/80">
              Adicionar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
