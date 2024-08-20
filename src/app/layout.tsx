import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navigation } from "@/components/Navigation/Navigation";

export const metadata: Metadata = {
  title: "Petcare Connect",
  description: "Encuentra veterinarias y profesionales veterinarios cerca de ti. Obtén información detallada sobre servicios, horarios y reseñas para garantizar el mejor cuidado para tu mascota.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-dvh bg-tertiary">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
