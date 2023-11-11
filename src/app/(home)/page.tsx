import Image from "next/image";
import Header from "./components/Header";
import BannerSlider from "./components/BannerSlider";
import { pizzas } from "@/data/pizzas";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const data = pizzas;

  return (
    <div className="flex h-full flex-col">
      <Header />
      <div className="container mx-auto flex-1 p-6">
        {/* <BannerSlider /> */}
        <div className="flex flex-col gap-2">
          {data.map((item) => (
            <Link href={`produto/${item.slug}`}>
              <div
                key={item.id}
                className="group flex w-full gap-4 rounded-lg p-4 duration-200 ease-in hover:cursor-pointer hover:bg-red-castle"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width="0"
                  height="0"
                  sizes="100vh"
                  className="h-28 w-40 rounded-lg object-cover"
                />
                <div className="flex flex-col justify-between">
                  <p className="max-w-[160px] text-3xl font-bold group-hover:text-white">
                    {item.name}
                  </p>
                  <p className="w-max rounded-full bg-red-castle px-2 text-white group-hover:bg-white group-hover:text-red-castle">
                    {item.category}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-end group-hover:text-white">
                  <ChevronRightIcon size={40} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer>Um footer...</footer>
    </div>
  );
}
