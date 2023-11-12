import { FoodType } from "@/types/Food";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Prop = {
  item: FoodType;
};

export const CardItem = ({ item }: Prop) => {
  return (
    <Link href={`produto/${item.slug}`}>
      <div
        title={item.name}
        key={item.id}
        className="group flex w-full gap-4 rounded-lg p-2 duration-200 ease-in hover:cursor-pointer hover:bg-red-castle"
      >
        <Image
          src={item.image}
          alt={item.name}
          width="0"
          height="0"
          sizes="100vh"
          className="h-16 w-24 rounded-lg object-cover"
        />
        <div className="flex flex-col justify-between">
          <p className="max-w-[110px] text-base font-bold leading-[1] group-hover:text-white">
            {item.name}
          </p>
          <p className="w-max rounded-full bg-red-castle px-2 text-xs font-semibold text-white group-hover:bg-white group-hover:text-red-castle">
            {item.category}
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end group-hover:text-white">
          <ChevronRightIcon size={40} />
        </div>
      </div>
    </Link>
  );
};
