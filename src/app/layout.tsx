import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { FoodProvider } from "@/context/FoodContext";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "600"] });

export const metadata: Metadata = {
  title: "Castelo Encantado",
  description: "Cardápio Virtual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <FoodProvider>
          <div className="flex h-full flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <footer>Um footer...</footer>
          </div>
        </FoodProvider>
      </body>
    </html>
  );
}
