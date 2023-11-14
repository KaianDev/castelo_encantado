"use client";
import CartMenu from "@/components/ui/CartMenu";
import { Card, CardHeader } from "@/components/ui/card";
import { ArrowLeftIcon, ChevronLeft } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  return (
    <Card className="bg-light-castle">
      <CardHeader className="container">
        <div className="relative flex items-center justify-between">
          {path != "/" && (
            <Link href="/">
              <div className="flex items-center">
                <ChevronLeft size={30} />
                Voltar
              </div>
            </Link>
          )}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo Castelo Encantado"
              width={0}
              height={0}
              sizes="100vw"
              className={`${
                path !== "/" && "absolute -translate-x-1/2 -translate-y-1/2"
              } left-1/2 top-1/2 h-14 w-auto`}
            />
          </Link>
          <CartMenu />
        </div>
      </CardHeader>
    </Card>
  );
};

export default Header;
