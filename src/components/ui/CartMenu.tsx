import { ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const CartMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart size={30} />
      </SheetTrigger>
      <SheetContent className="w-4/5 sm:w-[540px]">
        <SheetHeader>Carrinho</SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartMenu;
