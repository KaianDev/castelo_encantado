import Image from "next/image";
import Header from "./components/Header";
import BannerSlider from "./components/BannerSlider";
import { pizzas } from "@/data/pizzas";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { CardItem } from "./components/CardItem";

export default function Home() {
  const data = pizzas;

  return (
    <div className="flex h-full flex-col">
      <Header />
      <div className="container mx-auto flex-1 p-6">
        {/* <BannerSlider /> */}
        <div className="flex flex-col gap-2">
          {data.map((item) => (
            <CardItem item={item} />
          ))}
        </div>
      </div>
      <footer>Um footer...</footer>
    </div>
  );
}
