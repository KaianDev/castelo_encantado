import { ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const CartMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <ShoppingCart size={30} />
          <div className=" absolute -bottom-2 -right-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-red-castle text-xs font-normal text-white">
            20 
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="w-4/5 sm:w-[540px]">
        <SheetHeader>Carrinho</SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartMenu;
