"use client";

import { CardItem } from "./components/CardItem";
import BannerSlider from "./components/BannerSlider";
import { useFood } from "@/context/FoodContext";

export default function Home() {
  const foodCtx = useFood();

  return (
    <div className="container mx-auto flex flex-col gap-4 p-2">
      <BannerSlider />
      <div className="flex flex-col gap-2">
        {foodCtx?.data.map((item) => <CardItem key={item.id} item={item} />)}
      </div>
    </div>
  );
}
