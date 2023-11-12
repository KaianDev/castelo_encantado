import { pizzas } from "@/data/pizzas";
import { CardItem } from "./components/CardItem";
import BannerSlider from "./components/BannerSlider";

export default function Home() {
  const data = pizzas.filter((item) => item.category === "Pizza");

  return (
    <div className="container mx-auto flex flex-col gap-4 py-4">
      <BannerSlider />
      <div className="flex flex-col gap-2">
        {data.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
