"use client";
import { foods } from "@/data/foods";
import { FoodType } from "@/types/Food";
import { ReactNode, createContext, useContext, useState } from "react";

type FoodContextType = {
  data: FoodType[];
  filter: string;
  toggleFilter: (t: string) => void;
};

const FoodContext = createContext<FoodContextType | null>(null);

export const FoodProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<FoodType[]>(foods);
  const [filter, setFilter] = useState<string>("Pizza");

  const toggleFilter = (filter: string) => {
    setFilter(filter);
  };

  return (
    <FoodContext.Provider value={{ data, filter, toggleFilter }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => useContext(FoodContext);
