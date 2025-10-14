import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Accordin from "@/components/Accordin";
import { Icon } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saim Ali | Home",
  icon: './public/globe.svg',
  description: "Full stack web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}