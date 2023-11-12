import CartMenu from "@/components/ui/CartMenu";
import { Card, CardHeader } from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";

import Link from "next/link";



const Header = () => {
  return (
    <Card className="bg-light-castle">
      <CardHeader className="container">
        <div className="flex items-center justify-between">
          {/* {!isHome && <ArrowLeftIcon />} */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo Castelo Encantado"
              width={0}
              height={0}
              sizes="100vw"
              className="h-20 w-auto "
            />
          </Link>
          <CartMenu />
        </div>
      </CardHeader>
    </Card>
  );
};

export default Header;
