import CartMenu from "@/components/ui/CartMenu";
import { Card, CardHeader } from "@/components/ui/card";

import Link from "next/link";

const Header = () => {
  return (
    <Card className="bg-light-castle">
      <CardHeader className="container">
        <div className="flex items-center justify-between">
          <Link href="/">Logo</Link>
          <CartMenu />
        </div>
      </CardHeader>
    </Card>
  );
};

export default Header;
