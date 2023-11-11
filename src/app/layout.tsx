import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
