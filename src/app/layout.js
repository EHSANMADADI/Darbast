import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "داربست صابر",
  description: "darbast saber",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
