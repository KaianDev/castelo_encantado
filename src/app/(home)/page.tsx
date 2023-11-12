"use client";

import { foods } from "@/data/foods";
import { CardItem } from "./components/CardItem";
import BannerSlider from "./components/BannerSlider";
import { useState } from "react";
import { useFood } from "@/context/FoodContext";

export default function Home() {
  const food = useFood();

  return (
    <div className="container mx-auto flex flex-col gap-4 p-2">
      <BannerSlider />
      <div className="flex flex-col gap-2">
        {food?.data.map((item) => <CardItem key={item.id} item={item} />)}
      </div>
    </div>
  );
}
